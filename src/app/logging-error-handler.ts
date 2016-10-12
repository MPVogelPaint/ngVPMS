import { ErrorHandler } from "@angular/core";
import { forwardRef } from "@angular/core";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";
import { ErrorLogService } from "./error-log.service";

export interface LoggingErrorHandlerOptions {
    rethrowError: boolean;
    unwrapError: boolean;
}

export var LOGGING_ERROR_HANDLER_OPTIONS: LoggingErrorHandlerOptions = {
    rethrowError: false,
    unwrapError: false
};

@Injectable()
export class LoggingErrorHandler implements ErrorHandler {
    private errorLogService: ErrorLogService;
    private options: LoggingErrorHandlerOptions;

    constructor(
        errorLogService: ErrorLogService,
        @Inject( LOGGING_ERROR_HANDLER_OPTIONS ) options: LoggingErrorHandlerOptions
        ) {

        this.errorLogService = errorLogService;
        this.options = options;
    }

    public handleError( error: any ) : void {
        try {
            this.options.unwrapError
                ? this.errorLogService.logError( this.findOriginalError( error ) )
                : this.errorLogService.logError( error )
            ;
        }
        catch ( loggingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to log error to", this.errorLogService );
            console.error( loggingError );
            console.groupEnd();
        }

        if ( this.options.rethrowError ) {
            throw( error );
        }
    }

    private findOriginalError( error: any ) : any {
        while ( error && error.originalError ) {
            error = error.originalError;
        }

        return( error );
    }
}

export var LOGGING_ERROR_HANDLER_PROVIDERS = [
    {
        provide: LOGGING_ERROR_HANDLER_OPTIONS,
        useValue: LOGGING_ERROR_HANDLER_OPTIONS
    },
    {
        provide: ErrorHandler,
        useClass: LoggingErrorHandler
    }
];

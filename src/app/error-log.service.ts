import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorLogService {
    private http: Http;

    constructor (http: Http){
        this.http = http;
    }

    public logError(error: any) : void {
        this.sendToConsole(error);
        this.sendToServer(error);
    }

    private sendToConsole(error){
        if (console && console.group && console.error){
            console.group("Error Log Service");
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    }

    private sendToServer(error){
        var url = `http://localhost:65354/api/Error/?type=${error.name}&message=${error.message}&stack=${error.stack}&location=${window.location.href}`
        this.http.post(
            url,
            {
                type: error.name,
                message: error.message,
                stack: error.stack,
                location: window.location.href
            },
            { 

            }
        )
        .subscribe(
            (httpResponse: Response) : void => { },
            (httpError: any) : void => { }
        )
    }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Jsonp } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule, 
  AccordionModule, 
  ButtonsModule, 
  CarouselModule, 
  CollapseModule,
  DatepickerModule, 
  DropdownModule, 
  ModalModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  TabsModule,
  TimepickerModule,
  TooltipModule, 
  TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ErrorLogService } from './error-log.service';
import { LOGGING_ERROR_HANDLER_PROVIDERS,
  LOGGING_ERROR_HANDLER_OPTIONS } from './logging-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /* Bootstrap Modules fron ng2-bootstrap */
    AlertModule, 
    AccordionModule, 
    ButtonsModule, 
    CarouselModule, 
    CollapseModule,
    DatepickerModule, 
    DropdownModule, 
    ModalModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    TimepickerModule,
    TooltipModule, 
    TypeaheadModule
  ],
  providers: [ErrorLogService, 
    LOGGING_ERROR_HANDLER_PROVIDERS,
    {
      provide: LOGGING_ERROR_HANDLER_OPTIONS,
      useValue: {
          rethrowError: false,
          unwrapError: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
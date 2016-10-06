import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

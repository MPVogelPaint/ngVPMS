import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){

  }

  public trigger() : void {
    //todo remove this error testing becasuse promoteSynergy() does not exist
    promoteSynergy();
  }
}

import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { AddressDto } from "C:/Users/Richard/Desktop/AngularTest/ang-electron/src/AddressDto";
import { ClientDto } from "C:/Users/Richard/Desktop/AngularTest/ang-electron/src/ClientDto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public client: ClientDto; 
  public address: AddressDto;
  public title = 'app';
  
  constructor(private _electronService: ElectronService) {}   // DI

  
 
  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
  }
}

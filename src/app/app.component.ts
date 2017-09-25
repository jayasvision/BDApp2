import { Component } from '@angular/core';

import {DataSvcService} from './service/data-svc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataSvcService]
  
})

export class AppComponent {
  title = 'Angular 2 Application With Features';
  cities;
  name: string = "";
  constructor(dataSvcService: DataSvcService){
  	 this.cities = dataSvcService.getCityList();
  }
}

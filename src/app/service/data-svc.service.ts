import { Injectable } from '@angular/core';

@Injectable()
export class DataSvcService {

  getCityList() {
  	return ['New Delhi', 'Bhopal', 'kanpur','lucknow'];
  }

}

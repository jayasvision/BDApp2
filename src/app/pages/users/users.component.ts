import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

@Component({
  selector: 'app-page3',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

  
})
export class Page3Component implements OnInit {
  
  term = [];
  name: string = "";
  email: string = "";
  bloodGroup: string = ""
  users: any[] = [];
  username: string = "";
  edit: boolean = false;
  index: number;

  constructor(private storage:LocalStorageService) { }

  addNew() {
  	if(!this.name || !this.email){
  	 	return false;
  	}
  	this.users.push({"name": this.name, "email": this.email, "bloodGroup": this.bloodGroup});
  	this.name = this.email = this.bloodGroup = "";
    this.storage.store('users', this.users);
  }

  removeUser(index){
    if(confirm('Are you sure to remove donor?')) {
      this.users.splice(index, 1);
      this.storage.store('users', this.users);
    }
  }

  editUser(index){
    this.edit = true;
    let userObj = this.users[index];
    this.name = userObj.name;
    this.email = userObj.email;
    this.bloodGroup = userObj.bloodGroup;
    this.index = index;
    this.storage.store('users', this.users);
  }

  updateDonor(){
    this.users[this.index] = {"name": this.name, "email": this.email, "bloodGroup": this.bloodGroup}
    this.name = this.email = this.bloodGroup = "";
    this.edit = false;
    this.storage.store('users', this.users);
  }

  ngOnInit() {
    this.users = this.storage.retrieve('users') || [];
  }

}

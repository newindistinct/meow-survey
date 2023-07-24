import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.page.html',
  styleUrls: ['./consent.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class ConsentPage implements OnInit {
  is_enabled_auth_market : boolean = false;
  is_enabled_auth : boolean = false;
  is_enabled_market : boolean = false;
  constructor() { }

  ngOnInit() {
  }
  checkbox(value: any){
    if(value == true){
      this.is_enabled_auth = true;
      this.is_enabled_market = true;
    }else{
      this.is_enabled_auth = false;
      this.is_enabled_market = false;
    }
  }
  checkbox_auth(value: any){
    if(value == true){
      this.is_enabled_auth = true;
    }else{
      this.is_enabled_auth = false;
    }
    if(this.is_enabled_auth == true && this.is_enabled_market == true){
      this.is_enabled_auth_market = true;
    } else {
      this.is_enabled_auth_market = false;
    }
  }
  checkbox_market(value: any){
    if(value == true){
      this.is_enabled_market = true;
    }else{
      this.is_enabled_market = false;
    }
    if(this.is_enabled_auth == true && this.is_enabled_market == true){
      this.is_enabled_auth_market = true;
    } else {
      this.is_enabled_auth_market = false;
    } 
  }
  auth(){
    if(this.is_enabled_auth == true){
      return true;
    } else {
      return false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReviewComponent } from '../review/review.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.page.html',
  styleUrls: ['./mission-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReviewComponent,RouterModule]
})
export class MissionDetailPage implements OnInit {
  selectedTab = 'Detail';
  reviewAll = 5;
  review: any[] = [];
  constructor() { }

  ngOnInit() {
    this.review = [
    {user: 'new1',date: '1 ม.ค. 2566 22:00',img:'../../assets/image/1.jpg'},
    {user: 'new2',date: '2 ม.ค. 2566 22:00',img:'../../assets/image/2.jpg'},
    {user: 'new3',date: '3 ม.ค. 2566 22:00',img:'../../assets/image/3.jpg'},
    {user: 'new4',date: '4 ม.ค. 2566 22:00',img:'../../assets/image/card-media.png'},
  ];
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { MissionComponent } from './mission/mission.component';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,BannerComponent,CategoryComponent,MissionComponent]
})
export class Tab1Page implements OnInit {
  user: string = '088xxxxxxx';
  coin: string = '50';
  label: string = 'label';
  // point: string = '100';
  slides_banner: any[] = [];
  slides_category: any[] = [];
  slides_mission: any[] = [];
  review: any[] = [];
  collection: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.review = [
      {user: 'new1',date: '1 ม.ค. 2566 22:00',img:'../../assets/image/1.jpg'},
      {user: 'new2',date: '2 ม.ค. 2566 22:00',img:'../../assets/image/2.jpg'},
      {user: 'new3',date: '3 ม.ค. 2566 22:00',img:'../../assets/image/3.jpg'},
      {user: 'new4',date: '4 ม.ค. 2566 22:00',img:'../../assets/image/card-media.png'},
    ];
    this.slides_banner = [
      {banner: '../../assets/image/card-media.png'},
      {banner: '../../assets/image/1.jpg'},
      {banner: '../../assets/image/2.jpg'},
      {banner: '../../assets/image/3.jpg'},
    ];
    this.slides_category = [
      {category: 'new1'},
      {category: 'new2'},
      {category: 'new3'},
      {category: 'new4'},
      {category: 'new5'},
      {category: 'new6'},
      {category: 'new7'},
      {category: 'new8'},
    ];
    this.slides_mission = [
      {mission: 'new1',point: '100'},
      {mission: 'new2',point: '200'},
      {mission: 'new3',point: '300'},
      {mission: 'new4',point: '400'},
      {mission: 'new5',point: '500'},
      {mission: 'new6',point: '600'},
      {mission: 'new7',point: '700'},
      {mission: 'new8',point: '800'},
    ];
    this.collection = [
      {mission: 'new1',point: '100'},
      {mission: 'new2',point: '200'},
      {mission: 'new3',point: '300'},
      {mission: 'new4',point: '400'},
    ];
  }

}

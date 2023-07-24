import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MissionComponent  implements OnInit {
  @Input() slides_mission: any[] = [];
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  constructor() { }

  ngOnInit() { console.log('slides_category', this.slides_mission); }

  onSlideChange(event: any) {

    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    console.log('event', event);
  }
}

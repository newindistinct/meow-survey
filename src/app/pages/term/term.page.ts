import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonicModule, ScrollDetail } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term.page.html',
  styleUrls: ['./term.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class TermPage implements OnInit {
  @ViewChild('bottom', { static: false })
  public bottom!: ElementRef<HTMLButtonElement>;
  @ViewChild(IonContent) content!: IonContent;
  is_enabled = false;
  constructor() { }

  display = false;
  ngOnInit() {
  }
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(1000);
  }
  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', ev.detail);
    if (ev.detail.scrollTop > 700) {
      this.display = true;
      console.log('bottom');
    }else{
      this.display = false;
    }
    
  }

  handleScrollEnd() {
    console.log('scroll end');
  }
}

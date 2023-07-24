import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class RegisterPage implements OnInit {
  public month: any[] = [];
  public years: any[] = [];
  public day: any[] = [];
  public alertButtons = [
    {
      text: 'OK',
      cssClass: 'alert-button-confirm',
    },
  ];
  birthday : string = '';
  birthmonth : string = '';
  birthyear : string = '';
  address : string = '1บางนา บางนา กรุงเทพมหานคร 10210';
  name : string = '';
  gender : string = '';
  lineID : string = '';
  BZBID : string = '';
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.day = [
      { day: '1' },
      { day: '2' },
      { day: '3' },
      { day: '4' },
      { day: '5' },
      { day: '6' },
      { day: '7' },
      { day: '8' },
      { day: '9' },
      { day: '10' },
      { day: '11' },
      { day: '12' },
      { day: '13' },
      { day: '14' },
      { day: '15' },
      { day: '16' },
      { day: '17' },
      { day: '18' },
      { day: '19' },
      { day: '20' },
      { day: '21' },
      { day: '22' },
      { day: '23' },
      { day: '24' },
      { day: '25' },
      { day: '26' },
      { day: '27' },
      { day: '28' },
      { day: '29' },
      { day: '30' },
      { day: '31' },
    ];
    this.month = [
      { month: 'มกราคม' },
      { month: 'กุมภาพันธ์' },
      { month: 'มีนาคม' },
      { month: 'เมษายน' },
      { month: 'พฤษภาคม' },
      { month: 'มิถุนายน' },
      { month: 'กรกฎาคม' },
      { month: 'สิงหาคม' },
      { month: 'กันยายน' },
      { month: 'ตุลาคม' },
      { month: 'พฤศจิกายน' },
      { month: 'ธันวาคม' },
    ];
    this.years = [
      { years: '2566' },
      { years: '2565' },
      { years: '2564' },
      { years: '2563' },
      { years: '2562' },
      { years: '2561' },
      { years: '2560' },
      { years: '2559' },
      { years: '2558' },
      { years: '2557' },
      { years: '2556' },
      { years: '2555' },
      { years: '2554' },
      { years: '2553' },
      { years: '2552' },
      { years: '2551' },
      { years: '2550' },
      { years: '2549' },
      { years: '2548' },
      { years: '2547' },
      { years: '2546' },
      { years: '2545' },
      { years: '2544' },
      { years: '2543' },
      { years: '2542' },
      { years: '2541' },
      { years: '2540' },
      { years: '2539' },
      { years: '2538' },
      { years: '2537' },
      { years: '2536' },
      { years: '2535' },
      { years: '2534' },
      { years: '2533' },
    ];
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ลงทะเบียนสำเร็จ',
      message: 'คุณสามารถเริ่มต้นร่วมทดลองสินค้ากับ Meow Survey ได้ทันที',
      buttons: this.alertButtons,
      mode: 'ios'
    });

    await alert.present();
  }
}

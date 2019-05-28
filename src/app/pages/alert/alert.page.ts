import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo:string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=> {
            console.log("boton cancelar");
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log("boton Ok");
          }
        }
      ]
    });

    await alert.present();
  }



  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Alert Input',
      subHeader: 'Escribe',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Escribe un titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (valor) => {
            console.log('Confirm Ok');
            this.titulo = valor.titulo;
          }
        }
      ]
    });

    await alert.present();
  }

}

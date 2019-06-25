import { Component, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios:Observable<any>;

  constructor(private dataService: DataService, public toastCtrl: ToastController) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  async presentToast(mensaje:string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      color: 'secondary'
    });
    toast.present();
  }

  favorite(usuario){
    //console.log("Favorite: ", usuario);
    this.presentToast('Guardó en favoritos');
    this.lista.closeSlidingItems();
  }
  share(usuario){
    //console.log("Share: ", usuario);
    this.presentToast('¡Compartido!');
    this.lista.closeSlidingItems();
  }
  borrar(usuario){
    //console.log("Borrar: ", usuario);
    this.presentToast('¡Borrado!');
    this.lista.closeSlidingItems();
  }

}

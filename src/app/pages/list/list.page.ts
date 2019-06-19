import { Component, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios:Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  favorite(usuario){
    console.log("Favorite: ", usuario);
    this.lista.closeSlidingItems();
  }
  share(usuario){
    console.log("Share: ", usuario);
    this.lista.closeSlidingItems();
  }
  borrar(usuario){
    console.log("Borrar: ", usuario);
    this.lista.closeSlidingItems();
  }

}
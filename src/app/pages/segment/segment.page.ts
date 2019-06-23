import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  superHeroes: Observable<any>;

  publisher:string = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(evento){
    const valorSegmento = evento.detail.value;
    if(valorSegmento === 'todos'){
      this.publisher = '';
      return;
    }else{
      this.publisher = valorSegmento;
    }
    //console.log(valorSegmento);
  }

}

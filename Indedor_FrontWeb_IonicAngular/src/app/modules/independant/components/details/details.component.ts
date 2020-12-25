import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as L from 'leaflet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number;
  independant: any;
  map: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.independant = {
      id: '1',
      name: 'Jean-Claude',
      profession: 'Plombier',
      description: 'J\'aime les tuyaux'
    }
  }

  ionViewDidEnter() {
    this.map = L.map('map').setView([50.845001, 4.349986], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> 
        contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>`
    }).addTo(this.map);

    L.marker([50.845001, 4.349986]).addTo(this.map);
  }

}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
declare let L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  points:any = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ]
  constructor() { }
  
  /* Interval for task */
  source = interval(5000);

  ngOnInit() {
    this.source
      .subscribe( result => {
      
      })
    
    const map = L.map('maps', {fullscreenControl: true}).setView([-25.271878, -57.589877], 7);

  	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

  	L.Routing.control({
  		waypoints:[
  			L.latLng(-25.275235,-57.567640),
  			L.latLng(-25.256994,-57.583096)
  		]
  	}).addTo(map);
  }

}

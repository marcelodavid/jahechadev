import { Component, OnInit } from '@angular/core';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';

declare let L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	const map = L.map('maps').setView([-25.271878, -57.589877], 7);

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

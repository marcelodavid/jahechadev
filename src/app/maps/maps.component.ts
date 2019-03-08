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
    [-25.275235, -57.568770],
    [-25.270454, -57.572210],
    [-25.272695, -57.570568],
    [-25.274761, -57.568315],
    [-25.277235, -57.564496],
    [-25.279612, -57.561170],
    [-25.279496, -57.557233],
    [-25.277274, -57.551976],
    [-25.275372, -57.545110],
    [-25.272714, -57.539982],
    [-25.269338, -57.537278],
    [-25.263992, -57.534070],
    [-25.262401, -57.528105],
    [-25.264080, -57.521475],
    [-25.263954, -57.517108],
    [-25.264002, -57.510188],
    [-25.265419, -57.501755],
    [-25.266380, -57.496605],
    [-25.267370, -57.492453],
    [-25.273376, -57.494148],
    [-25.274472, -57.491552]
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

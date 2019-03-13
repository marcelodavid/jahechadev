import { Injectable } from '@angular/core';
import { interval } from 'rxjs';


declare let L;

@Injectable({
  providedIn: 'root'
})

export class MapsTrackerService {

  source = interval(5000);
  inicio: number = 0;
  map: any = null;
  myIcon: any = null;
  marker: any = null;

  constructor() { }

   public mapsTracker(points: any[]){

    this.myIcon = L.icon({
      iconUrl: 'assets/images/point.png',
      iconSize: [16, 16]
    }); 
    this.map = L.map('maps', {fullscreenControl: true}).setView([-25.271878, -57.589877], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
  
    this.creatMarker([-25.271878,-57.589877]);
    this.source
      .subscribe( result => {
        if(this.inicio < points.length){
          const point = points[this.inicio];
          this.addMarker(point);     
          this.inicio++;
        }
      });
      
    /*L.Routing.control({
      waypoints:[
        L.latLng(-25.275235,-57.567640),
        L.latLng(-25.256994,-57.583096)
      ]
    }).addTo(this.map);*/
   }
	
    addMarker(point:any){
		this.marker.setLatLng(point);
		this.marker.addTo(this.map);
	}

	creatMarker(point:any){
		this.marker = L.marker(point, {icon: this.myIcon});
	} 
}

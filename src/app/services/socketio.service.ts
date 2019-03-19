import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketioService {
 	constructor(private socket: Socket) { }
 
	/*sendMessage(msg: string){
			this.socket.emit("", msg);
	}*/
	 getPoint() {
		return this.socket
				.fromEvent('point')
	}
}

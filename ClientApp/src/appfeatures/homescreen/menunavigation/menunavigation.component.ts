import {Component , Input , Output , EventEmitter} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector:'menu-navigation',
    templateUrl:'./menunavigation.component.html',
    styleUrls:['./menunavigation.component.css']
})

export class MenuNavigationComponent {

    @Output() emitLiveEvent:EventEmitter<any> = new EventEmitter<any>();

    constructor(private router:Router){

    }

    goLive(){
        this.emitLiveEvent.emit();
    }
}
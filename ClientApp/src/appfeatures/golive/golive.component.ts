import {Component, EventEmitter, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { ConfigValuesService } from "src/genericservices/configvalues.service";


@Component({
    selector:'go-live',
    templateUrl:'./golive.component.html',
    styleUrls:['./golive.component.css']
})

export class GoLiveComponent implements OnInit{
   
    isAWS:boolean = true;
    aWSUrl:string = "";
    youtubeURL:string = "";

    constructor(private router:Router, private configValservice:ConfigValuesService){
        this.isAWS = this.configValservice.configValues.configData.viewViaAWS;
        this.aWSUrl = this.configValservice.configValues.configData.awsURL;
        this.youtubeURL =  this.configValservice.configValues.configData.youtubeURL;
    }

    ngOnInit(){
        
    }

    backToHome(){
        this.router.navigate(['/home']);
      }
}
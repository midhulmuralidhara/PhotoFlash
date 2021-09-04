import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  private routerVal:any;
  constructor(router:Router) { 
    this.routerVal = router;
  }

  ngOnInit(): void {
  }

  goLive(){
    this.routerVal.navigate(['/golive']);
  }

}

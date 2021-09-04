import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoLiveComponent } from "./golive.component";
import { CommonfeatureModule } from '../common/commonfeature.module';

@NgModule({
    imports:[CommonModule , CommonfeatureModule],
    declarations:[GoLiveComponent]
})


export class GoliveModule {

}

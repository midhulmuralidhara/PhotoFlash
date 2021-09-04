import { Component , OnInit} from '@angular/core';
import { ClientConfigurationService } from 'src/genericservices/clientconfiguration.service';
import { ConfigValuesService } from 'src/genericservices/configvalues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  configValues:any = null;

  constructor(private clientConfigService:ClientConfigurationService, private configValueService:ConfigValuesService)
  {
   
  }

  ngOnInit(){
    var callbackUrl = this.clientConfigService.getConfigParams();
    callbackUrl.subscribe((data:any) => {
      this.configValues = data;
      this.configValueService.configValues = data;

      console.log(data);
    });
  }
}

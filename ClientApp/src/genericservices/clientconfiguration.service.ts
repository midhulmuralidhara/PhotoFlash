import {Injectable} from "@angular/core";
import {HttpClient } from "@angular/common/http";

@Injectable()

export class ClientConfigurationService{
    constructor(private httpClient:HttpClient){

    }

    getConfigParams():any{
        return this.httpClient.get('assets/settings.json');
    }
}
import {Injectable} from "@angular/core";
import {HttpClient } from "@angular/common/http";

@Injectable()

export class HttpService {
    headers:any = null;
    constructor(private httpClient: HttpClient){
        
    }

    GET(url?:string, params?:any):any{
        this.httpClient.get(url,this.headers);
    }
}
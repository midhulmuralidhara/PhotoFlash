import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot,ActivatedRoute,CanActivate} from '@angular/router';

@Injectable()

export class RouteGuard implements CanActivate{
    constructor(activeRoute: ActivatedRoute){

    }

    canActivate():boolean{
        return true;
    }
}
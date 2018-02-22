import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(): boolean {
    console.log('i am checking to see if you are logged in');
    return true;
  }
  canActiveChild(): boolean {
    console.log('checking child route acess');
    return true;
  }
  constructor() { }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private count = 0;
  constructor() {
    console.log('create');
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}



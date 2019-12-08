import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TestService } from './test.service';
import { Observable, of, interval, fromEvent, BehaviorSubject, ReplaySubject, AsyncSubject, Subject } from 'rxjs';
import { map, take, multicast, refCount } from 'rxjs/operators';
import * as THREE from 'three';

declare const SVG;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit {
  title = 'my-app';
  values: Observable<number>;
  @ViewChild('text', { static: false }) input: ElementRef;
  constructor() {
    // const source$ = interval(1000).pipe(
    //   // map(x => Math.floor(Math.random() * 10)),
    //   take(3)
    // );
    // source$.subscribe(x => console.log('Observer 1: ' + x));

    // setTimeout(() => {
    //   source$.subscribe(x => console.log('Observer 2: ' + x));
    // }, 1000);
    // const observerA = {
    //   next: x => console.log('Observer A: ' + x)
    // };
    // const observerB = {
    //   next: x => console.log('Observer B: ' + x)
    // };
    // const subject = new BehaviorSubject(0);
    // subject.subscribe(observerA);
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // setTimeout(() => {
    //   subject.subscribe(observerB);
    // }, 500);
    // const observerA = {
    //   next: x => console.log('Observer A: ' + x)
    // };
    // const observerB = {
    //   next: x => console.log('Observer B: ' + x)
    // };
    const source = interval(1000).pipe(
      // map(x => Math.floor(Math.random() * 10)),
      take(3),
      multicast(new Subject()),
      refCount()
    );
    const observerA = {
      next: x => console.log('Observer A: ' + x),
      error: null,
      complete: () => console.log('Observer A completed')
    };
    const observerB = {
      next: x => console.log('Observer B: ' + x),
      error: null,
      complete: () => console.log('Observer B completed')
    };
    source.subscribe(observerA); // subject.subscribe(observerA)

    setTimeout(() => {
      source.subscribe(observerB); // subject.subscribe(observerB)
    }, 1000);

    // const subject = new ReplaySubject(2);
    // subject.subscribe(observerA);
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.complete();
    // setTimeout(() => {
    //   subject.subscribe(observerB);
    // });
    // const subject = new AsyncSubject();

    // subject.subscribe(observerA);

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.complete(); // Observer A: 3
    // setTimeout(() => {
    //   subject.subscribe(observerB);  // Observer B: 3
    // }, 500);

    // this.values = of(1, 2, 3);
    // const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    // secondsCounter.subscribe(n =>
    //   console.log(`It's been ${n} seconds since subscribing!`)
    // );
  }

  ngOnInit(): void {
    const sence = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);
    document.getElementById('draw').appendChild(renderer.domElement);
  }

  changeTitle() {
    this.title = 'hello world';
    // const myObserver = {
    //   next: x => console.log(x),
    //   error: e => console.log(e),
    //   complete: () => console.log('complete')
    // };
    // this.values.subscribe(myObserver);
    // setTimeout(() => {
    //   this.values.subscribe(myObserver);
    // }, 3000);
    // this.values.subscribe(value => {
    //   console.log(value);
    // });
  }
}

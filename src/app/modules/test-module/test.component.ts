import {
  Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges,
  DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements
  OnInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit {

  name: string;

  private _title: string;

  @Input()
  set title(title: string) {
    this._title = title;
  }
  get title() {
    return this._title;
  }

  @Output() titleChange = new EventEmitter<string>();

  constructor() {

  }

  uppercase(name: string) {
    this.name = name.toUpperCase();
  }

  handle(el) {
    this.title = 'Hello Angular';
    this.titleChange.emit(this.title);
  }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}

import { CommonModule  } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    TestRoutingModule,
    CommonModule ,
    FormsModule
  ],
  providers: []
})
export class TestModule { }

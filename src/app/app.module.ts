import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebpackDllNgModuleLoader } from 'webpack-dll-ng-module-loader';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { TestService } from './test.service';
import { MissionControlComponent } from './missioncontrol.component';
import { AstronautComponent } from './astronaut.component';
import 'svg.js';
import 'svg.draw.js';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    TestService,
    {
      provide: NgModuleFactoryLoader,
      useClass: WebpackDllNgModuleLoader
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

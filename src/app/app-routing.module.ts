import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'test',
    loadChildren: './modules/test-module/test-module.module#TestModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
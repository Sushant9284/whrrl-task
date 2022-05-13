import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // { path: '', pathMatch: 'full', redirectTo: '' }
  // {path:'student',component:}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private routes: Router) {
  }


}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path:"",
      pathMatch:'full',
      redirectTo:'notes'
    },
    {
        path: "**",
        redirectTo:'notes'
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

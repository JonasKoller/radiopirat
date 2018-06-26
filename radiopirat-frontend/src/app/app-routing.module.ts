import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PrivacyPageComponent} from "./privacy-page/privacy-page.component";

const routes: Routes = [
  {path: 'privacy', component: PrivacyPageComponent},
  { path: '**',
    redirectTo: '/'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

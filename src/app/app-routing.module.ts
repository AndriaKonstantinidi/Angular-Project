import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { OurApiComponent } from './our-api/our-api.component';
import { HomePgComponent } from './home-pg/home-pg.component';
const routes: Routes = [
  {path:'',component:HomePgComponent},
  {path:'our-api',component:OurApiComponent},
  {path:'contact',component:ContactComponent},
  {path:'about-us',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

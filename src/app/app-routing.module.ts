import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpPageComponent} from "./help-page/help-page.component";
import {AppComponent} from "./app.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CardsComponent} from "./dashboard/cards/cards.component";

const routes: Routes = [
  {
    path: 'help', component: HelpPageComponent
  },
  {
    path: "", component: AppComponent
  },
  {
    path: 'hero', component: HeroesComponent
  },{
  path:'dashboard',component:DashboardComponent,
    children:[
      {path:'card',component:CardsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

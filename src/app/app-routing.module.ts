import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { BreweriesPageComponent } from './breweries-page/breweries-page.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list', children: [
      {path: "", component: ListComponent},
      {path: 'breweries-page/:brewery', component: BreweriesPageComponent}
    ]}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainPageComponent } from './main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'inicio', component: InicioComponent},
    {path: 'books', component: BooksComponent},
    {path: 'shop', component: ShoppingComponent},
    {path: 'profile', component: ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }

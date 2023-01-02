import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './Component/todos/todos.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Component/footer/footer.component';


export const routes =  [
  { path: 'accounts', component: TodosComponent , label: 'Accounts' },
  { path: 'contacts', component: TodosComponent , label: 'Contacts' },
  { path: 'activities', component: TodosComponent , label: 'Activities' }
 ];

@NgModule({
  declarations: [AppComponent, TodosComponent, FooterComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

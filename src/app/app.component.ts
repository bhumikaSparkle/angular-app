import { Component } from '@angular/core';
import { routes } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo App';
  routes = routes;
  isDarkTheme:boolean = false;

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
  }

  storeThemeSelection(){
    localStorage.setItem('theme', this.isDarkTheme? 'Dark' : 'Light');
  }
}

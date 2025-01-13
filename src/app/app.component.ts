import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from "../todo/todo.component";
import { MoviesComponent } from "./movies/movies.component";
import { LoggingComponent } from './logging/logging.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MoviesComponent, LoggingComponent, NavbarComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

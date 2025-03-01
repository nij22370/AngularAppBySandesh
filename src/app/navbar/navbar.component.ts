import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  styles: [`
    nav {
      background-color: #2d3748;
      padding: 1rem;
    }
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: #cbd5e0;
    }
  `],
  template: `
    <nav>
      <div class="nav-container">
        <a routerLink="/">Home</a>
        <a routerLink="/calculator">Calculator</a>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
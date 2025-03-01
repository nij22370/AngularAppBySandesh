import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  styles: [
    `
      .home-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
        text-align: center;
      }
      h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      img {
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        height: auto;
      }
    `,
  ],
  template: `
    <div class="home-container">
      <h1>Welcome Home</h1>
      <img
        src="assets/images/sandesh.jpg
      "
        alt="my-photo"
      />
    </div>
  `,
})
export class HomeComponent {}

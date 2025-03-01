import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  styles: [
    `
      footer {
        background-color: #2d3748;
        color: white;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
      }
    `,
  ],
  template: `
    <footer>
      <div>©Sandesh Dhakal, {{ currentYear }}</div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

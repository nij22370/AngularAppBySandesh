import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { calculatorStyles } from "./calculator.styles";

@Component({
  selector: "app-calculator",
  standalone: true,
  imports: [FormsModule, CommonModule],
  styles: calculatorStyles,
  template: `
    <div class="calculator-container">
      <h2>Calculator</h2>
      <form (ngSubmit)="compute()" class="calculator-form">
        <div class="form-group">
          <label>First Number:</label>
          <input type="number" [(ngModel)]="num1" name="num1" required />
        </div>

        <div class="form-group">
          <label>Second Number:</label>
          <input type="number" [(ngModel)]="num2" name="num2" required />
        </div>

        <div class="form-group">
          <label>Operation:</label>
          <select [(ngModel)]="operation" name="operation">
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
          </select>
        </div>

        <button type="submit">Compute</button>

        <div *ngIf="result !== null" class="result">Result: {{ result }}</div>
      </form>
    </div>
  `,
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = "add";
  result: number | null = null;

  compute() {
    switch (this.operation) {
      case "add":
        this.result = this.num1 + this.num2;
        break;
      case "subtract":
        this.result = this.num1 - this.num2;
        break;
      case "multiply":
        this.result = this.num1 * this.num2;
        break;
    }
  }
}

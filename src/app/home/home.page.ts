import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DifferentiationService } from '../services/differentiation.service';

interface DerivativeResult {
  functionType: string;
  x: number;
  n?: number;
  h: number;
  derivative: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  derivativeResult?: DerivativeResult;

  constructor(private differentiationService: DifferentiationService) {}

  onCalculate(event: any) {
    const { functionType, x, n, h } = event;
    if (functionType === 'sin') {
      const derivative = this.differentiationService.calculateSin(x, h);
      this.derivativeResult = { functionType, x, h, derivative };
    } else if (functionType === 'tan') {
      const derivative = this.differentiationService.calculateTan(x, h);
      this.derivativeResult = { functionType, x, h, derivative };
    } else if (functionType === 'power') {
      if (typeof n === 'number') {
        const derivative = this.differentiationService.calculatePow(x, n, h);
        this.derivativeResult = { functionType, x, n, h, derivative };
      }
    }
  }
}

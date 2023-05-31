import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationService {
  constructor() { }

  calculateSin(x: number, h: number): number {
    return (Math.sin(x + h) - Math.sin(x - h)) / (2 * h);
  }

  calculateTan(x: number, h: number): number {
    return (Math.tan(x + h) - Math.tan(x - h)) / (2 * h);
  }

  calculatePow(x: number, n: number, h: number): number {
    return (Math.pow(x + h, n) - Math.pow(x - h, n)) / (2 * h);
  }

}

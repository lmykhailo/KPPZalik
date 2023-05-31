// result.component.ts
import { Component, Input } from '@angular/core';

interface DerivativeResult {
  functionType: string;
  x: number;
  n?: number;
  h: number;
  derivative: number;
}

@Component({
  selector: 'app-result',
  templateUrl: 'result.component.html',
})
export class ResultComponent {
  @Input() result?: DerivativeResult;
}

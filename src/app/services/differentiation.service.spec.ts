import { TestBed } from '@angular/core/testing';
import { DifferentiationService } from './differentiation.service';

describe('DifferentiationService', () => {
  let service: DifferentiationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifferentiationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateSin', () => {
    it('sin(x) correctly', () => {
      const x = 1;
      const h = 0.01;
      const res = service.calculateSin(x, h);
      expect(res).toBeCloseTo(0.5402933008747335);
    });
  });

  describe('calculateTan', () => {
    it('tan(x) correctly', () => {
      const x = 1;
      const h = 0.01;
      const res = service.calculateTan(x, h);
      expect(res).toBeCloseTo(3.426464160083409);
    });
  });

  describe('calculatePow', () => {
    it('x^n correctly', () => {
      const x = 3;
      const n = 3;
      const h = 0.01;
      const res = service.calculatePow(x, n, h);
      expect(res).toBeCloseTo(27.00009999999935);
    });
  });
});

import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: 'input-form.component.html',
})
export class InputFormComponent {
  @Output() calculate: EventEmitter<any> = new EventEmitter<any>();

  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      functionType: ['', Validators.required],
      x: ['', Validators.required],
      h: ['', [Validators.required, Validators.min(0)]],
      n: [''],
    });
  }

  onSubmit() {
    if (this.inputForm.valid) {
      this.calculate.emit(this.inputForm.value);
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';


type ValidFields = 'gender' | 'wantNotifications' | 'termsAndConditions'

@Component({
  templateUrl: './switch-page.component.html',
  styles: [
  ]
})
export class SwitchPageComponent {

  constructor(private fb: FormBuilder, private validator: ValidatorService) { }

  form = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [false, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    console.log(this.form.value)
  }
  
  triggerErrors(field: ValidFields): boolean | null {
    return this.validator.isValidField(this.form, field)
  }
}

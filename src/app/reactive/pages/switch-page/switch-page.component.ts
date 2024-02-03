import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


type ValidFields = 'gender' | 'wantNotifications' | 'termsAndConditions'

@Component({
  templateUrl: './switch-page.component.html',
  styles: [
  ]
})
export class SwitchPageComponent {

  constructor(private fb : FormBuilder) {}

  form = this.fb.group({
    gender : ['M', Validators.required],
    wantNotifications : [false, Validators.required],
    termsAndConditions : [false, Validators.requiredTrue],
  })

  onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    console.log(this.form.value)
  }
  triggerErrors(field: ValidFields): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }
}

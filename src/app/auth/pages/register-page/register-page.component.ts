import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cantBeQuasi } from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', [Validators.required, cantBeQuasi]],
    password: ['', Validators.required],
    confirmation: ['', Validators.required],
  })
}

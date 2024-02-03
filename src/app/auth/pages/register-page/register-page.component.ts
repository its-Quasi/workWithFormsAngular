import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from 'src/app/shared/services/email-validator.service';

//validator -> service
import { ValidatorService } from 'src/app/shared/services/validator.service';

//validators -> functions
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  constructor(
    private fb: FormBuilder,
    private validator: ValidatorService, // inject service for custom validations
    private emailValidator: EmailValidator
  ) { }

  form = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(ValidatorService.firstNameAndLastnamePattern)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(ValidatorService.emailPattern)
      ],
      [this.emailValidator]
    ],
    username: [
      '',
      [
        Validators.required,
        this.validator.cantBeQuasi
      ]
    ],
    password: ['', Validators.required],
    confirmation: ['', Validators.required],
  })
}

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorService {
  constructor() { }

  static firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  cantBeQuasi = (formField: FormControl): ValidationErrors | null => {
    let { value } = formField
    value = value.trim().toLowerCase()
    if (value === 'quasi') {
      return {
        takenUsername: true
      }
    }
    return null
  }

  isValidField(form : FormGroup, field : string) {
    return form.controls[field].errors && form.controls[field].touched
  }
}
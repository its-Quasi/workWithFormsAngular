import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

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

  isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched
  }

  equalsFields(fieldOne: string, fieldTwo: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const password = formGroup.get(fieldOne)?.value
      const confirmation = formGroup.get(fieldTwo)?.value

      if (password !== confirmation) {
        formGroup.get(fieldTwo)?.setErrors({ notEquals: true })
        return { notEquals: true }
      }
      return null
    }
  }
}
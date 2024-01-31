import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type ValidFields = 'name' | 'price' | 'inStorage'

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  private readonly defaultValues = {
    price: 0,
    inStorage: 0,
    name: ''
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form.reset(this.defaultValues)
  }


  triggerErrors(field: ValidFields) : boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }

  getFieldErrors(field: ValidFields): string | null {
    if (!this.form.controls[field]) return null;
    const errors = this.form.controls[field].errors || {}
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Este campo requiere minimo ${errors['minlength'].requiredLength} caracteres`
      }
    }
    return null
  }



  public form = this.formBuilder.group({
    name: [
      '', //default Value
      [
        Validators.required,
        Validators.minLength(3),
      ], // sync validations
      [] // async validations
    ],
    price: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ],
      []
    ],
    inStorage: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ],
      []
    ],
  })

  onSave() {
    if (this.form.valid) {
      console.log('Sending')
      this.form.reset(this.defaultValues)
    }
  }
}

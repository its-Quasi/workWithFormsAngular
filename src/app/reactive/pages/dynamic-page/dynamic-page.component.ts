import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type ValidFields = 'name' | 'favoriteGames'

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  newFavorite = new FormControl(
    '',
    [Validators.required, Validators.minLength(3)]
  )

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favoriteGames: this.fb.array([
      ['COD', Validators.required],
      ['FIFA', Validators.required],
    ])
  })

  get favoriteGames() {
    return this.form.controls['favoriteGames'] as FormArray
  }

  triggerErrors(field: ValidFields): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }

  isValidFieldInArray(form: FormArray, index: number) {
    return form.controls[index].errors && form.controls[index].touched
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
  onSubmit() {
    if (this.form.invalid) return
    console.log(this.form.value)
    this.form.reset() // reset props of the form
    this.form.controls['favoriteGames'].clear()

    /**
     * another way to delete all elements of the formArrays
        const control = this.form.controls['favoriteGames'];
        while (control.length > 0) control.removeAt(0)
    */
  }

  onDeleteGame(index: number) {
    this.favoriteGames.removeAt(index);
  }

  addFavoriteGame(): void {
    if (this.newFavorite.invalid) {
      return;
    }
    const { value } = this.newFavorite
    this.favoriteGames.push(
      new FormControl(value, Validators.required)
    )

    this.newFavorite.reset()
  }
}

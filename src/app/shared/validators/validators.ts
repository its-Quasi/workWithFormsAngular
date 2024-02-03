// validations in file [export functions]
import { FormControl, ValidationErrors } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeQuasi = (formField: FormControl) : ValidationErrors | null => {
  let { value } = formField
  value = value.trim().toLowerCase()
  if(value === 'quasi') {
    return {
      takenUsername : true
    }
  }
  return null
}
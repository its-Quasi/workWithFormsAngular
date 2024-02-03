import { FormControl } from "@angular/forms";

export const cantBeQuasi = (formField: FormControl) => {
  let { value } = formField
  value = value.trim().toLowerCase()
  if(value === 'quasi') {
    return {
      takenUsername : true
    }
  }
  return null
}
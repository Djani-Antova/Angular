import { FormGroup, NonNullableFormBuilder, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passwordCtrOne: string,
  passwordCtrTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup
    const passCtrl1 = group.get(passwordCtrOne)
    const passCtrl2 = group.get(passwordCtrTwo)
    //
    return passCtrl1?.value === passCtrl2?.value
    ? null
    : {matchPasswordsValidator: true}
  };
}

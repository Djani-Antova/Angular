import { ValidatorFn } from "@angular/forms";


export function appEmailValidator(domains: [string]): ValidatorFn {

    const domainStrings = domains.join("|"); // ['bg', 'com'] => bg|com
    const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`);

    return (control) => {
        return control.value === '' ||   regExp.test(control.value)  
        ? null 
        : { appEmailValidator:true }
    }
}
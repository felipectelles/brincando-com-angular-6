import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {
            let password = formGroup.get('password').value;
            let confirmPassword = formGroup.get('passwordConfirmation').value;
            if(password != confirmPassword) {
                return { matchpassword: true };
            } else {
                return null
            }
        }
    }
}
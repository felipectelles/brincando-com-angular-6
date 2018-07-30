import {AbstractControl} from '@angular/forms';

import * as cep from 'cep-promise';
import { ToastrService } from 'ngx-toastr';

export class Cep {
    static BuscaEndereco(AC: AbstractControl) {
        const formGroup = AC.parent;
        if (formGroup) {
            let zipCode = formGroup.get('zipCode').value;
            if(zipCode !== null && zipCode.length === 8) {
                cep(zipCode)
                    .then(response => Cep.PreencheEndereco(formGroup,response))
                    .catch(error => Cep.ResetaEndereco(formGroup))
            }
           return null
        }
    }

    static PreencheEndereco(formGroup, dados){
        formGroup.get('state').setValue(dados.state);
        formGroup.get('city').setValue(dados.city);
        formGroup.get('streetName').setValue(dados.street);
        formGroup.get('neighbourhood').setValue(dados.neighborhood);
        formGroup.get('country').setValue('BR');
    }

    static ResetaEndereco(formGroup){
        formGroup.get('state').setValue(null);
        formGroup.get('city').setValue(null);
        formGroup.get('streetName').setValue(null);
        formGroup.get('neighbourhood').setValue(null);
        formGroup.get('country').setValue(null);
    }
}
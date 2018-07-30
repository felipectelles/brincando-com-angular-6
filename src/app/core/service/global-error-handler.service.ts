import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any) {
        let toastr = this.injector.get(ToastrService);
        let router = this.injector.get(Router);
        if (error instanceof HttpErrorResponse) {
            if(+error.status.toString().substr(0,1) === 5){
                toastr.error('Tente novamente mais tarde', 'Serviço indisponível');
            }else if(error.status === 409 && router.url === '/'){
                //409 - O email informado já existe. Uma mensagem deve ser exibida para o usuário;
                toastr.error('O email informado já existe', 'Erro ' + error.status);
            }else{
                toastr.error(error.error.message, 'Erro ' + error.status);
            }
        } else {
            //Aconteceu um erro no cliente
            toastr.error('Há algum erro com seu formato de requisição');
        }     
    }
} 
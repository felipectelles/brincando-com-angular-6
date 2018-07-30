import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Pais } from '../../core/entity/pais';
import { CadastroService } from '../../core/service/cadastro.service';
import { Cadastro } from '../../core/entity/cadastro';
import { PasswordValidation } from '../../core/util/password-validation';
import { Cep } from '../../core/util/busca-endereco';

@Component({
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  paises: Pais[] = [];
  submitted: boolean = false;
  maxDate: Date = new Date();
  isDataValid: boolean = true;
  startDate = new Date(2000, 0, 1);
  
  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router,
    private toastr: ToastrService) {
  }
    
  // getter para fácil acesso aos campos do formulário
  get form() { return this.cadastroForm.controls; }
  
  ngOnInit(): void {
    this.cadastroForm = this.validateForm();
    this.paises = this.cadastroService.preenchePaisSelect();
  }

  showMessageSuccess(response): void {
    this.toastr.success('Cadastro realizado com sucesso');
    this.router.navigate(['/home', response.token]);
  }

  showMessageError(error) {
    if(error.status.toString().substr(0,1) === 5){
      this.toastr.error('Tente novamente mais tarde', 'Serviço indisponível');
    }else if(error.status === 409){
      this.toastr.error('O email informado já existe', 'Erro ' + error.status);
    }else{
      this.toastr.error(error.error.message, 'Erro ' + error.status);
    }
  }

  submit(): void {    
    this.submitted = true;
    const cadastro = this.cadastroForm.getRawValue() as Cadastro;
    if (this.cadastroForm.valid) {
    delete cadastro.passwordConfirmation;
    this.cadastroService
      .cadastra(cadastro)
      .subscribe(
        response => this.showMessageSuccess(response),
        error => this.showMessageError(error)
      );
    }else{
      this.toastr.error("Verifique os dados informados");
    }
  }

  validateForm(): FormGroup {
    return this.formBuilder.group({
      email: [
        null, [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        null, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10)
        ]
      ],
      passwordConfirmation: [
        null, [
          Validators.required, PasswordValidation.MatchPassword
        ]
      ],
      fullName: [
        null, [
          Validators.required
        ]
      ],
      birthDate: [
        null, 
        Validators.required
      ],
      zipCode: [
        null, [
          Validators.required,
          Cep.BuscaEndereco
        ]
      ],
      streetName: [
        null,
        Validators.required
      ],
      number: [
        null,
        Validators.required
      ],
      complement: [
        null
      ],
      neighbourhood: [
        null
      ],
      country: [
        null, 
        Validators.required
      ],
      state: [
        null, 
        Validators.required
      ],
      city: [
        null, 
        Validators.required
      ]
    });
  }

}

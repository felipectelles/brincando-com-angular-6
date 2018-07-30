import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cadastro } from '../entity/cadastro';
import { Pais } from '../entity/pais';

const API_URL = 'https://www.improving.com.br/api/test/users'

@Injectable({
    providedIn: 'root'
})
export class CadastroService {

    constructor(private http: HttpClient) { }

    cadastra(cadastro: Cadastro) {
        return this.http.post(API_URL, cadastro);
    }

    preenchePaisSelect(): Pais[] {
        return [
            { sigla: '', nome: 'Selecione' },
            { sigla: 'AR', nome: 'Argentina' },
            { sigla: 'BR', nome: 'Brasil' },
            { sigla: 'CL', nome: 'Chile' },
            { sigla: 'CO', nome: 'Colômbia' },
            { sigla: 'CR', nome: 'Costa Rica' },
            { sigla: 'CU', nome: 'Cuba' },
            { sigla: 'DO', nome: 'República Dominicana' },
            { sigla: 'EC', nome: 'Equador' },
            { sigla: 'FR', nome: 'França' },
            { sigla: 'GF', nome: 'Guiana Francesa' },
            { sigla: 'GT', nome: 'Guatemala' },
            { sigla: 'HN', nome: 'Honduras' },
            { sigla: 'HT', nome: 'Haiti' },
            { sigla: 'IT', nome: 'Itália' },
            { sigla: 'JM', nome: 'Jamaica' },
            { sigla: 'MX', nome: 'México' },
            { sigla: 'NI', nome: 'Nicarágua' },
            { sigla: 'PA', nome: 'Panamá' },
            { sigla: 'PE', nome: 'Peru' },
            { sigla: 'PR', nome: 'Porto Rico' },
            { sigla: 'PY', nome: 'Paraguai' },
            { sigla: 'SV', nome: 'El Salvador' },
            { sigla: 'US', nome: 'Estados Unidos' },
            { sigla: 'UY', nome: 'Uruguai' },
            { sigla: 'VE', nome: 'Venezuela' }
        ]
    }

}
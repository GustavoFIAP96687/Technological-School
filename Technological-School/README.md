# Technological-School API

Este README fornece uma visão detalhada dos endpoints relacionados às informações dos alunos na API da Technological-School.

## Classes

Nesta seção, descreveremos as classes principais da API da Technological-School.

### `Aluno`

A classe `Aluno` representa informações sobre um aluno.

Atributos:
- `id`: O ID do aluno.
- `nomeAluno`: O nome completo do aluno.
- `cpfAluno`: O CPF do aluno.
- `dataNascAluno`: A data de nascimento do aluno.
- `cep`: O CEP do endereço do aluno.
- `rua`: O nome da rua do endereço do aluno.
- `numero`: O número da residência do aluno.
- `complemento`: O complemento da residência do aluno, se existir.
- `nomeResponsavel`: O nome completo do responsável pelo aluno.
- `cpfResponsavel`: O CPF do responsável pelo aluno.
- `dataNascResponsavel`: A data de nascimento do responsável pelo aluno.

## Endpoints

- `GET /alunos`: Recupera uma lista com todas as informações dos alunos.
- `POST /alunos`: Registra um novo aluno.
- `GET /alunos/{cpf}`: Obtém informações sobre um aluno específico.
- `PUT /alunos/{cpf}`: Atualiza informações de um aluno específico.
- `DELETE /alunos/{cpf}`: Deleta informações de um aluno específico.

## Exemplo JSON

Aqui está um exemplo da estrutura JSON representando as informações do aluno:

```json
{
    "id": "Long",
    "nomeAluno": "string",
    "cpfAluno": "string",
    "dataNascAluno": "string",
    "cep": "string",
    "rua": "string",
    "numero": "int",
    "complemento": "string",
    "nomeResponsavel": "string",
    "cpfResponsavel": "string",
    "dataNascResponsavel": "string"
}
```
## Códigos de retorno
- 200: Conexão e resposta bem-sucedidas.
- 201: Aluno registrado com sucesso.
- 400: Dados inválidos ou ausentes fornecidos.
- 404: Página ou recurso não encontrado.
- 405: Acesso restrito ao recurso.
- 500: Erro interno do servidor.

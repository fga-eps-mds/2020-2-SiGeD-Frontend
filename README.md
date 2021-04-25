# Frontend
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL3-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020-2-G4-Frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020-2-G4-Frontend)

Esse repositório tem o propósito de apresentar um interface web simples e intuitiva do projeto [`SiGeD`](https://github.com/fga-eps-mds/2020-2-SiGeD). 

## Como contribuir?

Gostaria de contribuir com nosso projeto? Acesse o nosso [guia de contribuição](https://fga-eps-mds.github.io/2020-2-SiGeD/CONTRIBUTING/) onde são explicados todos os passos.
Caso reste duvidas você também pode entrar em contato conosco criando uma issue.

## Documentação

A documentação do projeto pode ser acessada pelo nosso site em https://fga-eps-mds.github.io/2020-2-SiGeD/ ou você pode acessar pela [SiGeD Documentação](https://fga-eps-mds.github.io/2020-2-SiGeD/home/)

## Como rodar?

Para rodar o Frontend é preciso usar o seguinte comando usando o docker.

```bash
docker-compose up
```
O frontend estará rodando na [porta 3000](http://localhost:3000).

 Esta aplicação faz conexão e é dependente das APIs para funcionar corretamente. As APIs correspondentes são:

- [API de Clientes](https://github.com/fga-eps-mds/2020-2-SiGeD-Clients)
- [API de Usuários](https://github.com/fga-eps-mds/2020-2-SiGeD-Users)
- [API de Demandas](https://github.com/fga-eps-mds/2020-2-SiGeD-Demands)



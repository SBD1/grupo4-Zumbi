## Pré Requisitos para rodar o banco localmente

O Grupo-4-zumbi ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:

1. Instalação do [Docker](https://docs.docker.com/engine/installation/)
2. Instalação do [Docker Compose](https://docs.docker.com/compose/install/)
3. Clone o repositório usando o comando:

```
git clone https://github.com/SBD1/grupo4-Zumbi.git
```

4. Crie e inicie os containers para o serviço:
```
docker-compose up
```

5. Para testar as requisições, use um programa como [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/downloads/) e use as rotas que estão na pasta routes na raiz do projeto.
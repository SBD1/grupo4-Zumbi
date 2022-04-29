## Pré requisitos do sistema
- Instalação do [Node](https://nodejs.org/en/)
- Instalação do [Docker](https://docs.docker.com/engine/installation/)
- Instalação do [Docker Compose](https://docs.docker.com/compose/install/)

## Como executar a aplicação

O Grupo-4-zumbi ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente. Os passos abaixo podem ser seguidos para executar a aplicação:

1. Clone o repositório usando o comando:

```
git clone https://github.com/SBD1/grupo4-Zumbi.git
```

2. Mude para a pasta zumbi backend:
```
cd grupo4-Zumbi/zumbi-grupo4-backend
```

3. Crie e inicie os containers para o serviço:
```
docker-compose up
```

4. Com o docker instalado, primeiramente rode o yarn install, para instalar as dependencias, em seguida rode os comandos:
```
yarn createDB
```
```
yarn createTables
```
```
yarn seed
```
```
yarn procedures
```
```
yarn triggers
```

Com os passos acima, o banco estará criado e você pode acessa-lo pelo [Dbaver](https://dbeaver.io/download/), ou qualquer outra ferramenta que preferir. Para acessa-lo, utilize as credenciais disponibilizadas no arquivo .env na raiz do projeto.


5. Rode a aplicação localmente com o comando:
```
yarn dev
```

6. Para testar as requisições, use um programa como [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/downloads/) e use as rotas que estão na pasta routes na raiz do projeto.

7. Caso queira excluir o banco, exclua a pasta `data` que está localizada em 'grupo4-Zumbi/zumbi-grupo4-backend'.

8. Ao terminar de usar, não esqueça de desativar o ambiente docker utilizando:
```
sudo docker-compose down
```



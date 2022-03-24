CREATE DATABASE Zumbi;

CREATE SEQUENCE popula_id START 1;

CREATE DOMAIN moeda AS DECIMAL(7,2) CHECK(
    VALUE >= 0
);

CREATE TABLE mapa (
  id serial primary key,
  nome varchar(255)
);

CREATE TABLE zona (
  id serial primary key,
  nome varchar(255),
  mapa integer not null,
  foreign key (mapa) references mapa (id)
);

CREATE TABLE quadrado (
	id serial primary key,
	moedas moeda not null,  
	zona integer not null,
	foreign key (zona) references zona (id)
);

CREATE TABLE zumbi (
  id serial primary key,
  tipoEspecializacao varchar(255) not null
);

CREATE TABLE instancia_zumbi (
  id serial primary key,

  id_zumbi serial,
  dinheiro moeda not null,
	zona integer not null,
	quadrado integer not null,

  foreign key (id_zumbi) references zumbi (id),
  foreign key (zona) references zona (id),
  foreign key (quadrado) references quadrado (id)
);

CREATE TABLE corredores (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  arranque integer not null, 
  experiencia integer not null, 

  foreign key (id) references zumbi (id)
);

CREATE TABLE estaladores (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  imparabilidade boolean not null,
  experiencia integer not null,
 
  foreign key (id) references zumbi (id)
);

CREATE TABLE baiacu (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  resistencia integer not null,
  experiencia integer not null, 

  foreign key (id) references zumbi (id)
);

CREATE TABLE gosmento (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  tam_gosma integer not null,
  distancia_tiro integer not null, 
  experiencia integer not null,
 
  foreign key (id) references zumbi (id)

);

CREATE TABLE player (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  nome varchar(255),
  exp_acumulado integer not null, 
  dinheiro moeda not null
);

CREATE TABLE nivel (
  id serial primary key,
  aumento_vida integer not null,
  aumento_dano integer not null,
  aumento_velocidade integer not null,
	player integer not null,
  foreign key (player) references player (id)
);

CREATE TABLE bolsa (
	id serial primary key,
	qtd_itens integer not null,
	tamanho integer not null,

	player integer not null,	
	foreign key (player) references player (id)
);

CREATE TABLE item (
  id serial primary key,
  tipoEspecializacao varchar(255) not null
);

CREATE TABLE instancia_item (
  id serial primary key,

  id_item serial,
  player integer not null, 
  bolsa integer not null,
  quadrado integer not null,
  foreign key (id_item) references item (id)
  foreign key (player) references player (id),  
  foreign key (bolsa) references bolsa(id),
  foreign key (quadrado) references quadrado (id)
);

CREATE TABLE arma_branca (
  id serial primary key,
  nome varchar(255) not null,
  preco integer not null,
  dano integer not null,
  tipo varchar(255), 
  comprimento integer not null,

  foreign key (id) references item (id)
);

CREATE TABLE arma_fogo (
  id serial primary key,
  nome varchar(255) not null,
  preco integer not null,
  dano integer not null,
  tipo varchar(255),
  distancia integer not null,
  armazenamento integer not null,
  velocidade_recarfa integer not null,
  abertura_impacto integer not null,

  foreign key (id) references item (id)
  );

CREATE TABLE municao (
  id serial primary key,
  nome varchar(255) not null,
  preco integer not null,
  quantidade integer not null,
  tipo_arma varchar(255),
  
  id_arma_fogo integer not null,
  foreign key (id_arma_fogo) references arma_fogo (id),
  foreign key (id) references item (id)
);

CREATE TABLE armaduraa (
	id serial primary key,
	nome varchar(255) not null,
	preco integer not null,
	tipo varchar(255),
	protecao integer not null,

	foreign key (id) references item (id)
);

CREATE TABLE comida (
	id serial primary key,
	nome varchar(255) not null,
	preco integer not null,
	tipo varchar(255),
	utilidade varchar(255),
	quantidade_vida integer not null,
 
	foreign key (id) references item (id)
);

CREATE TABLE adrenalina (
	id serial primary key,
	nome varchar(255) not null,
	preco integer not null,
	tipo varchar(255),
	utilidade varchar(255),
	vida_adicional integer not null,
	velocidade_adicional integer not null,
	tempo_uso integer not null,

	foreign key (id) references item (id)
);

CREATE TABLE missao (
  id serial primary key,
  titulo varchar(255),
  descricao varchar(255), 
  recompensa integer not null
);

CREATE TABLE falas (
  id serial primary key,
  texto varchar(255)
);

CREATE TABLE instrutor (
  id serial primary key,
  fala integer not null,
  foreign key (fala) references falas (id)
);

CREATE TABLE vendedor (
  id serial primary key, 
  fala integer not null,
  foreign key (fala) references falas (id)
);
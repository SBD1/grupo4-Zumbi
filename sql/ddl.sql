CREATE TABLE corredores (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  arranque integer not null, 
  experiencia integer not null, 
  moedas integer not null
);

CREATE TABLE estaladores (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  imparabilidade boolean not null,
  experiencia integer not null,
  moedas integer not null
);

CREATE TABLE baiacu (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  resistencia integer not null,
  experiencia integer not null,
  moedas integer not null
);

CREATE TABLE gosmento (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  tam_gosma integer not null,
  distancia_tiro integer not null, 
  experiencia integer not null, 
  moedas integer not null
);

CREATE TABLE instancia_zumbi (
  id serial primary key,
  moedas integer not null,
	zona integer not null,
	quadrado integer not null,
  foreign key (zona) references zona (id),
  foreign key (quadrado) references quadrado (id)
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
  moedas integer not null
);

CREATE TABLE player (
  id serial primary key,
  vida integer not null, 
  dano integer not null, 
  velocidade integer not null, 
  nome varchar(255),
  exp_acumulado integer not null, 
  moedas integer not null
);

CREATE TABLE bolsa (
	id serial primary key,
	qtd_itens integer not null,
	tamanho integer not null,
	player integer not null,	
	foreign key (player) references player (id)
);

CREATE TABLE nivel (
  id serial primary key,
  aumento_vida integer not null,
  aumento_dano integer not null,
  aumento_velocidade integer not null,
	player integer not null,
  foreign key (player) references player (id)
);
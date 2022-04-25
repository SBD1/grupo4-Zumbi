-- Arquivo para popular o jogo zumbi--

--INSERT: mapa
INSERT INTO mapa (nome) VALUES
('Zumbizera');

--INSERT: zona
INSERT INTO zona (nome, mapa) VALUES
('Zona norte', 1),
('Zona nordeste', 1),
('Zona centro-oeste', 1),
('Zona sudeste', 1),
('Zona sul', 1);

--INSERT: quadrado
INSERT INTO quadrado (moedas, zona) VALUES
(5,1), (3,1), (0,1), (3,1), (0,1), (0,1), (7,1), (0,1), (10,1), (0,1),
(7,1), (0,1), (0,1), (3,1), (0,1), (0,1), (3,1), (3,1), (3,1), (0,1),
(0,1), (0,1), (20,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1),
(6,1), (0,1), (8,1), (0,1), (0,1), (0,1), (8,1), (0,1), (4,1), (0,1),
(0,1), (8,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1),
(0,1), (0,1), (10,1), (0,1), (0,1), (0,1), (0,1), (4,1), (0,1), (9,1),
(0,1), (0,1), (4,1), (0,1), (0,1), (0,1), (8,1), (0,1), (0,1), (0,1),
(0,1), (4,1), (4,1), (8,1), (0,1), (0,1), (0,1), (4,1), (4,1), (4,1),
(0,1), (0,1), (4,1), (0,1), (8,1), (0,1), (4,1), (0,1), (0,1), (0,1),
(10,1), (10,1), (0,1), (0,1), (0,1), (10,1), (10,1), (0,1), (0,1), (15,1),
(5,2), (0,2), (8,2), (1,2), (8,2), (0,2), (0,2),
(1,2), (0,2), (6,2), (0,2), (0,2), (0,2), (0,2),
(2,2), (1,2), (0,2), (0,2), (0,2), (0,2), (0,2),
(0,2), (5,2), (0,2), (0,2), (0,2), (0,2), (0,2),
(0,2), (1,2), (0,2), (4,2), (8,2), (0,2), (0,2),
(1,2), (1,2), (8,2), (3,2), (0,2), (9,2), (0,2),
(8,2), (0,2), (0,2), (7,2), (0,2), (9,2), (9,2)
;

-- INSERT: player
INSERT INTO player (vida, dano, velocidade, nome, exp_acumulado, dinheiro) VALUES 
(100, 10, 5, 'Lorrany', 0, 0), 
(100, 15, 10, 'Eddie', 10, 50), 
(50, 20, 10, 'Guilherme', 15, 100),
(100, 20, 10, 'Igor', 20, 50),
(100, 10, 5, 'Erico', 5, 120);

-- INSERT: zumbi
INSERT INTO zumbi (tipoespecializacao) VALUES
('corredores'),
('estaladores'),
('baiacu'),
('gosmento');

INSERT INTO corredores (id, vida, dano, velocidade, arranque, experiencia) VALUES
(1, 60, 5, 10, 3, 50);

INSERT INTO estaladores (id, vida, dano, velocidade, imparabilidade, experiencia) VALUES
(2, 100, 20, 5, true, 70);

INSERT INTO baiacu (id, vida, dano, velocidade, resistencia, experiencia) VALUES
(3, 180, 15, 5, 20, 150);

INSERT INTO gosmento (id, vida, dano, velocidade, tam_gosma, distancia_tiro , experiencia) VALUES
(4, 80, 10, 5, 2, 2, 100);

-- INSERT: instancia
INSERT INTO instancia_zumbi (id_zumbi, vida_atual, dinheiro, zona, quadrado) VALUES
(2, 100, 10, 1, 5);


-- INSERT: itens
INSERT INTO item (tipo_especializacao) VALUES
('arma_branca'),
('arma_fogo'),
('municao'),
('armadura'),
('comida'),
('adrenalina');

INSERT INTO arma_branca (id, nome, preco, dano, tipo, comprimento) VALUES
(1, 'machado', 75, 35, 'corpo a corpo', 1);

-- INSERT: armas de fogo
-- Revisar as colunas: tipo, velocidade_recarga
-- Armas inspiradas no jogos Valorant e Resident Evil 4
INSERT INTO arma_fogo (id, nome, preco, dano, tipo, distancia, armazenamento, velocidade_recarga, abertura_impacto) VALUES
(2, 'classic', 65, 20, 'pistola', 4, 6, 1, 1);

INSERT INTO municao (id, nome, preco, quantidade, tipo_arma, id_arma_fogo ) VALUES
(3, 'municao pistola', 10, 14, 'pistola', 2);

INSERT INTO armadura (id, nome, preco, tipo, protecao) VALUES
(4, 'roupas comuns', '10', 'armadura', 1);

INSERT INTO comida (id, nome, preco, tipo, utilidade, quantidade_vida) VALUES
(5, 'barra de cereal', 5, 'comida', 'barrinha seca trio de chocolate com coco', 5);

INSERT INTO adrenalina (id, nome, preco, tipo, utilidade, vida_adicional, velocidade_adicional, tempo_uso) VALUES
(6, 'coquinha gelada', 10, 'energetico', 'aumentar vida maxima', 20, 0, 30);

-- INSERT: npc
INSERT INTO npc (tipo_especializacao) VALUES
('vendedor'),
('instrutor');


INSERT INTO instancia_npc (id_npc, quadrado) VALUES
(1, 1);

INSERT INTO falas (id_npc, texto) VALUES
(1, 'deseja comprar um item?'),
(2, 'deseja entrar em uma missao?');

INSERT INTO estoque (id_vendedor, id_item) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);

insert into bolsa (tamanho, player) VALUES 
(10, 1),
(20, 2);


INSERT INTO instancia_item (id_item, player, bolsa, quadrado) values
(1, null, 2, null),
(2, null, 2, null),
(2, null, 2, null),
(3, null, 2, null),
(5, null, null, 1),
(1, null, null, 2),
(4, 1, null, null);

INSERT INTO missao (titulo, descricao, recompensa, npc) VALUES
('Bem vindo à Zumbizera', 'Sua primeira missão é ter uma missão', 1, 2);

INSERT INTO missaoPlayer (missao, player, completa) VALUES
(1,2,1);

-- listar informações de uma comida
select * from item i inner join comida c on i.id = c.id;

-- listar informações de uma armadura
select * from item i inner join armadura a on i.id = a.id;

-- listar informações de uma municao
select * from item i inner join municao m on i.id = m.id;

-- listar informações de uma adrenalina 
select * from item i inner join adrenalina a on i.id = a.id;

-- listar informações de uma arma_fogo 
select * from item i inner join arma_fogo af on i.id = af.id;

-- listar informações de uma arma_branca
select * from item i inner join arma_branca ab on i.id = ab.id;


-- listar moedas de um quadrado
select moedas from quadrado q where id = 1;


-- é preciso rodar as storedProcedures para rodar os comandos abaixo

-- listar todos os items de uma bolsa
select * from get_instancia_items_nomes_and_precos() as i where  i.bolsa = 2;

-- listar todos os items de um player
select * from get_instancia_items_nomes_and_precos() as i where  i.player = 1;

-- listar todos os items de um quadrado
select * from get_instancia_items_nomes_and_precos() as i where  i.quadrado = 1;

-- listar moedas de um quadrado
select moedas from quadrado q where id = 1;



-- transaction de pegar dinheiro do quadrado
BEGIN;

	UPDATE PLAYER AS P SET DINHEIRO = P.DINHEIRO + Q.MOEDAS
	
	FROM (SELECT MOEDAS FROM QUADRADO WHERE ID = 1) Q WHERE ID = 2;
	
	UPDATE QUADRADO SET MOEDAS = 0 WHERE ID = 1;

COMMIT;


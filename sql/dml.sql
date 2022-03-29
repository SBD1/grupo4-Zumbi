-- Arquivo para popular o jogo zumbi--
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


INSERT INTO corredores (id_zumbi, vida, dano, velocidade, arranque, experiencia) VALUES
(1, 60, 5, 10, 3, 50);

INSERT INTO estaladores (id_zumbi, vida, dano, velocidade, imparabilidade, experiencia) VALUES
(2, 100, 20, 5, true, 70);

INSERT INTO baiacu (id_zumbi, vida, dano, velocidade, resistencia, experiencia) VALUES
(3, 180, 15, 5, 20, 150);

INSERT INTO gosmento (id_zumbi, vida, dano, velocidade, tam_gosma, distancia_tiro , experiencia) VALUES
(4, 80, 10, 5, 2, 2, 100);

-- INSERT: itens
INSERT INTO item (tipo_especializacao) VALUES
('arma_branca'),
('arma_fogo'),
('municao'),
('armadura'),
('comida'),
('adrenalina');

-- INSERT: armas brancas
-- Revisar a coluna: tipo
INSERT INTO arma_branca (id_item, nome, preco, dano, tipo, comprimento) VALUES
(1, 'machado', 75, 35, 'corpo a corpo', 1),
(1, 'espada', 100, 55, 'corpo a corpo', 1),
(1, 'cutelo', 25, 20, 'corpo a corpo', 1),
(1, 'pique', 100, 50, 'corpo a corpo', 2),
(1, 'pedra', 10, 10, 'corpo a corpo', 1);


-- INSERT: armas de fogo
-- Revisar as colunas: tipo, velocidade_recarga
-- Armas inspiradas no jogos Valorant e Resident Evil 4
INSERT INTO arma_fogo (id_item, nome, preco, dano, tipo, distancia, armazenamento, velocidade_recarga, abertura_impacto) VALUES
(2, 'classic', 65, 20, 'pistola', 4, 6, 1, 1),
(2, 'ghost', 85, 30, 'pistola', 5, 6, 1, 1),
(2, 'magnum', 120, 50, 'handcannon', 5, 6, 1, 1),
(2, 'operator', 150, 50, 'rifle de precisão', 8, 5, 2, 1),
(2, 'bucky', 100, 80, 'escopeta', 2, 2, 1, 2);

INSERT INTO municao (id_item, nome, preco, quantidade, tipo_arma, id_arma_fogo ) VALUES
(3, 'municao pistola', 10, 14, 'pistola',1),
(3, 'municao pistola', 10, 14, 'pistola',2),
(3, 'municao handcannon', 25, 6, 'handcannon',3),
(3, 'municao rifle de precisão', 20, 5, 'rifle de precisão',4),
(3, 'municao escopeta', 15, 8, 'escopeta',5);

INSERT INTO armadura (id_item, nome, preco, tipo, protecao) VALUES
(4, 'roupas comuns', '10', 'armadura', 1),
(4, 'colete a prova de balas', '50', 'armadura', 10);

INSERT INTO comida (id_item, nome, preco, tipo, utilidade, quantidade_vida) VALUES
(5, 'barra de cereal', 5, 'comida', 'barrinha seca trio de chocolate com coco', 5),
(5, 'tapioca com carne de sol e queijo coalho', 15, 'tapioca delicia na manteiga de garrafa com carne de sol e queijo coalho', 'restaurar vida', 30),
(5, 'pato no tucupi', 20, 'comida', 'um prato tipico do norte a base do pato e um delicioso tucupi', 50),
(5, 'tacaca', 30, 'comida', 'para restaurar sua vida e deixar sua boca dormente com essa delicia', 70),
(5, 'acaraje', 40, 'comida', 'o calor desse brasil brasileiro para matar zumbi de tanta pimenta', 100);

INSERT INTO adrenalina (id_item, nome, preco, tipo, utilidade, vida_adicional, velocidade_adicional, tempo_uso) VALUES
(6, 'coquinha gelada', 10, 'energetico', 'aumentar vida maxima', 20, 0, 30),
(6, 'redbull', 10, 'energetico', 'aumenta velocidade', 0, 2, 30),
(6, 'dolly guarana', 20, 'energetico', 'aumenta velocidade e vida maxima', 25, 3, 45);

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
(1,1),
(1,1),
(1,1),
(1,1),
(1,1),
(1,1),
(1,1),
(1,1),
(1,1);

--INSERT: referenciando quadrado
UPDATE quadrado 
SET lado_norte=null ,lado_sul=4 ,lado_leste=2 ,lado_oeste=null
WHERE id = 1;

UPDATE quadrado 
SET lado_sul=5 ,lado_leste=3 ,lado_oeste=1
WHERE id = 2;

UPDATE quadrado 
SET lado_sul=6 ,lado_oeste=2 
WHERE id = 3;

UPDATE quadrado 
SET lado_norte=1 ,lado_sul=7 ,lado_leste=5
WHERE id = 4;

UPDATE quadrado 
SET lado_norte=2 ,lado_sul=8 ,lado_leste=6 ,lado_oeste=4
WHERE id = 5;

UPDATE quadrado 
SET lado_norte=3 ,lado_sul=9 ,lado_oeste=5
WHERE id = 6;

UPDATE quadrado 
SET lado_norte=4 ,lado_leste=8
WHERE id = 7;

UPDATE quadrado 
SET lado_norte=5 ,lado_leste=9 ,lado_oeste=7
WHERE id = 8;

UPDATE quadrado 
SET lado_norte=6 ,lado_oeste=8
WHERE id = 9;

-- INSERT: npc
INSERT INTO npc (tipo_especializacao) VALUES
('vendedor'),
('instrutor');

INSERT INTO vendedor (id_npc) VALUES
(1);

INSERT INTO instancia_npc (id_npc, quadrado) VALUES
(1, '');

INSERT INTO instrutor (id_npc) VALUES
(2);

INSERT INTO falas (id_npc, texto) VALUES
(1, 'deseja comprar um item?'),
(2, 'deseja entrar em uma missao?');

INSERT INTO estoque (id_vendedor, id_item) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5);
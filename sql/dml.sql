-- Arquivo para popular o jogo zumbi--
-- INSERT: player
INSERT INTO player (vida, dano, velocidade, nome, exp_acumulado, dinheiro) VALUES 
(100, 10, 5, 'Lorrany', 0, 0), 
(100, 15, 10, 'Eddie', 10, 50), 
(50, 20, 10, 'Guilherme', 15, 100),
(100, 20, 10, 'Igor', 20, 50),
(100, 10, 5, 'Erico', 5, 120);

-- INSERT: itens
INSERT INTO item (tipo_especializacao) VALUES
('arma_branca'),
('arma_fogo'),
('municao'),
('armadura'),
('comida'),
('adrenalina');

-- INSERT: armas brancas
INSERT INTO arma_branca (id_item, nome, preco, dano, tipo, comprimento) VALUES
(1, 'machado', 75, 35, 'corpo a corpo', 1),
(1, 'espada', 100, 55, 'corpo a corpo', 1),
(1, 'cutelo', 25, 20, 'corpo a corpo', 1),
(1, 'pique', 100, 50, 'corpo a corpo', 2),
(1, 'pedra', 10, 10, 'corpo a corpo', 1);


-- INSERT: armas de fogo
-- Armas inspiradas no jogos Valorant e Resident Evil 4
INSERT INTO arma_fogo (id_item, nome, preco, dano, tipo, distancia, armazenamento, velocidade_recarga, abertura_impacto) VALUES
(2, 'classic', 65, 20, 'pistola', 4, 6, 1, 1),
(2, 'ghost', 85, 30, 'pistola', 5, 6, 1, 1),
(2, 'magnum', 120, 50, 'handcannon', 5, 6, 1, 1),
(2, 'operator', 150, 50, 'rifle de precisão', 8, 5, 2, 1),
(2, 'bucky', 100, 80, 'escopeta', 2, 2, 1, 2);


-- INSERT: munição
INSERT INTO municao (id_item, nome, preco, quantidade, tipo_arma, id_arma_fogo ) VALUES
(3, 'municao pistola', 10, 14, 'pistola',1),
(3, 'municao pistola', 10, 14, 'pistola',2),
(3, 'municao handcannon', 25, 6, 'handcannon',3),
(3, 'municao rifle de precisão', 20, 5, 'rifle de precisão',4),
(3, 'municao escopeta', 15, 8, 'escopeta',5);

-- INSERT: armadura
INSERT INTO armadura (id_item, nome, preco, tipo, protecao) VALUES
(4, 'roupas comuns', '10', 'armadura', 1),
(4, 'colete a prova de balas', '50', 'armadura', 10);


-- INSERT: comida
-- Comidas retiradas de regiões brasileiras
INSERT INTO comida (id_item, nome, preco, tipo, utilidade, quantidade_vida) VALUES
(5, 'barra de cereal', 5, 'comida', 'barrinha seca trio de chocolate com coco', 5),
(5, 'tapioca com carne de sol e queijo coalho', 15, 'tapioca delicia na manteiga de garrafa com carne de sol e queijo coalho', 'restaurar vida', 30),
(5, 'pato no tucupi', 20, 'comida', 'um prato tipico do norte a base do pato e um delicioso tucupi', 50),
(5, 'tacaca', 30, 'comida', 'para restaurar sua vida e deixar sua boca dormente com essa delicia', 70),
(5, 'acaraje', 40, 'comida', 'o calor desse brasil brasileiro para matar zumbi de tanta pimenta', 100);

-- INSERT: adrenalina
INSERT INTO adrenalina (id_item, nome, preco, tipo, utilidade, vida_adicional, velocidade_adicional, tempo_uso) VALUES
(6, 'coquinha gelada', 10, 'energetico', 'aumentar vida maxima', 20, 0, 30),
(6, 'redbull', 10, 'energetico', 'aumenta velocidade', 0, 2, 30),
(6, 'dolly guarana', 20, 'energetico', 'aumenta velocidade e vida maxima', 25, 3, 45);
-- Arquivo para popular o jogo zumbi--
-- INSERT: player
INSERT INTO player (vida, dano, velocidade, nome, exp_acumulado, dinheiro) VALUES 
(100, 10, 5, 'Lorrany', 0, 0), 
(100, 15, 10, 'Eddie', 10, 50), 
(50, 20, 10, 'Guilherme', 15, 100); 

-- INSERT: itens
INSERT INTO item (tipoEspecializacao) VALUES
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

INSERT INTO armadura (id_item, nome, preco, tipo, protecao) VALUES
(4, 'roupas comuns', '10', 'armadura', 1),
(4, 'colete a prova de balas', '50', 'armadura', 10);
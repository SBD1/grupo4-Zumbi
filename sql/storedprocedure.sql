-- Player recebe dano de zumbi e a atualiza a vida do player
CREATE OR REPLACE FUNCTION get_tipo_zumbi (_id_zumbi INTEGER)
    RETURNS VARCHAR AS $$
BEGIN
  RETURN 
  (SELECT tipoEspecializacao FROM zumbi WHERE id=_id_zumbi);
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_dano_zumbi(tipo_zumbi VARCHAR)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
  (SELECT
    case
        when  tipo_zumbi = 'corredores' then corredores.dano
        when  tipo_zumbi = 'estaladores' then estaladores.dano
        when  tipo_zumbi = 'baiacu' then baiacu.dano
        when  tipo_zumbi = 'gosmento' then gosmento.dano
    end as dano
    FROM
        corredores,
        estaladores,
        baiacu,
        gosmento);
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_vida_player(_id_player INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
  (SELECT vida FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_vida_player(_id_zumbi INTEGER, _id_player INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  UPDATE player SET vida = vida - get_dano_zumbi(get_tipo_zumbi(_id_zumbi)) WHERE id=_id_player;
  IF get_vida_player(_id_player) < 0 THEN UPDATE player SET vida = 0 WHERE id=_id_player; END IF;
  RETURN 
  (SELECT vida FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;


-- Zumbi recebe dano do player usando item
-- Item que o player esta usando
CREATE OR REPLACE FUNCTION get_item_player(_id_item INTEGER)
    RETURNS VARCHAR AS $$
BEGIN
  RETURN 
  (SELECT tipo_especializacao FROM item WHERE id=_id_item);
END
$$ LANGUAGE plpgsql;

-- Dano da arma
CREATE OR REPLACE FUNCTION get_dano_item(tipo_especializacao VARCHAR)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
	(
	SELECT     
		case
			when  tipo_especializacao = 'arma_branca' then arma_branca.dano
			when  tipo_especializacao = 'arma_fogo' then arma_fogo.dano
		end as dano
	FROM
		arma_branca,
	  	arma_fogo
	);
END
$$ LANGUAGE plpgsql;

-- Verifica vida do zumbi
CREATE OR REPLACE FUNCTION get_vida_zumbi(_id_instancia_zumbi INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
  (SELECT vida_atual FROM instancia_zumbi WHERE id=_id_instancia_zumbi);
END
$$ LANGUAGE plpgsql;

-- Calcula vida apos o dano
CREATE OR REPLACE FUNCTION update_vida_zumbi(_id_instancia_zumbi INTEGER, _id_item INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  UPDATE instancia_zumbi SET vida_atual = vida_atual - get_dano_item(get_item_player(_id_item)) WHERE id=_id_instancia_zumbi;
  IF get_vida_zumbi(_id_instancia_zumbi) < 0 THEN UPDATE instancia_zumbi SET vida_atual = 0 WHERE id=_id_instancia_zumbi; END IF;
  RETURN 
  (SELECT vida_atual FROM instancia_zumbi WHERE id=_id_instancia_zumbi);
END
$$ LANGUAGE plpgsql;

-- Experiencia que o zumbi derruba ao morrer
CREATE OR REPLACE FUNCTION get_exp_zumbi(tipo_zumbi VARCHAR)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
  (SELECT
    case
        when  tipo_zumbi = 'corredores' then corredores.experiencia
        when  tipo_zumbi = 'estaladores' then estaladores.experiencia
        when  tipo_zumbi = 'baiacu' then baiacu.experiencia
        when  tipo_zumbi = 'gosmento' then gosmento.experiencia
    end as dano
    FROM
        corredores,
        estaladores,
        baiacu,
        gosmento);
END
$$ LANGUAGE plpgsql;

-- Atualiza XP do player ao matar um zumbi
CREATE OR REPLACE FUNCTION update_exp_player(_id_zumbi INTEGER, _id_player INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  UPDATE player SET exp_acumulado = exp_acumulado + get_exp_zumbi(get_tipo_zumbi(_id_zumbi)) WHERE id=_id_player;
  RETURN 
  (SELECT exp_acumulado FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;

-- pega todos items com tipo, nome e preço
CREATE OR REPLACE FUNCTION get_items()
    RETURNS table (
    	id_item INTEGER,
    	tipo_especializacao VARCHAR,
    	nome VARCHAR,
    	preco INTEGER
    ) AS $$
begin

	return QUERY
		SELECT i.id as id_item, i.tipo_especializacao,
		
		CASE
		
		  WHEN i.tipo_especializacao = 'arma_branca' THEN ab.nome
		  WHEN i.tipo_especializacao = 'arma_fogo' THEN af.nome
			WHEN i.tipo_especializacao = 'municao' THEN m.nome
			WHEN i.tipo_especializacao = 'armadura' THEN ar.nome
			WHEN i.tipo_especializacao = 'comida' THEN co.nome
			WHEN i.tipo_especializacao = 'adrenalina' THEN ad.nome
		  ELSE NULL
		
		END as "nome",
		
		CASE
		
		  WHEN i.tipo_especializacao = 'arma_branca' THEN ab.preco
		  WHEN i.tipo_especializacao = 'arma_fogo' THEN af.preco
			WHEN i.tipo_especializacao = 'municao' THEN m.preco
			WHEN i.tipo_especializacao = 'armadura' THEN ar.preco
			WHEN i.tipo_especializacao = 'comida' THEN co.preco
			WHEN i.tipo_especializacao = 'adrenalina' THEN ad.preco
		  ELSE NULL
		
		END as "preco"
		
		FROM item i
		LEFT JOIN arma_branca ab
		ON
		CASE
		
		     WHEN i.tipo_especializacao = 'arma_branca' THEN ab.id
		
		     ELSE NULL
		
		END = i.id
		
		LEFT JOIN arma_fogo af
		ON
		CASE
		
		     WHEN i.tipo_especializacao = 'arma_fogo' THEN af.id
		
		     ELSE NULL
		
		END = i.id
		
		LEFT JOIN municao m
		ON
		CASE
		
		     WHEN i.tipo_especializacao = 'municao' THEN m.id
		
		     ELSE NULL
		
		END = i.id
		
		LEFT JOIN armadura ar
		ON
		CASE
		
		     WHEN i.tipo_especializacao = 'armadura' THEN ar.id
		
		     ELSE NULL
		
		END = i.id
		
		LEFT JOIN comida co
		ON
		CASE
		
		     WHEN i.tipo_especializacao = 'comida' THEN co.id
		
		     ELSE NULL
		
		END = i.id
		
		LEFT JOIN adrenalina ad
		ON
		CASE
		
		     WHEN i.tipo_especializacao = 'adrenalina' THEN ad.id
		
		     ELSE NULL
		
		END = i.id;
END
$$ LANGUAGE plpgsql;

-- pega todas as instancias de items com tipo, nome e preço
CREATE OR REPLACE FUNCTION get_instancia_items_nomes_and_precos()
    RETURNS table (
    	id INTEGER,
    	player INTEGER,
    	bolsa INTEGER,
    	quadrado INTEGER,
    	id_item INTEGER,
    	tipo_especializacao VARCHAR,
    	nome VARCHAR,
    	preco INTEGER
    ) AS $$
begin
	
	return QUERY
		SELECT ii.id, ii.player, ii.bolsa, ii.quadrado, i.*
		
		FROM instancia_item ii

		LEFT JOIN get_items() i ON ii.id_item = i.id_item;
END
$$ LANGUAGE plpgsql;


CREATE OR REPLACE PROCEDURE pegar_item_do_quadrado(_id_instancia_item INTEGER, _id_bolsa INTEGER)
AS $$
BEGIN
    UPDATE instancia_item SET quadrado = null, bolsa = _id_bolsa
      WHERE id = _id_instancia_item;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_estoque_vendendor(_id_vendedor INTEGER)
RETURNS table (
    	id_item INTEGER,
    	tipo_especializacao VARCHAR,
    	nome VARCHAR,
    	preco INTEGER
) AS $$
BEGIN
   return query
   	select i.* from estoque e
   		inner join get_items() i on e.id_item = i.id_item
   	where e.id_vendedor = _id_vendedor;
END
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_estoque_vendendor(_id_vendedor INTEGER)
RETURNS table (
    	id_item INTEGER,
    	tipo_especializacao VARCHAR,
    	nome VARCHAR,
    	preco INTEGER
) AS $$
BEGIN
   return query
   	select i.* from estoque e
   		inner join get_items() i on e.id_item = i.id_item
   	where e.id_vendedor = _id_vendedor;
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION pegar_quadrado_player(_id_player INTEGER)
    RETURNS VARCHAR AS $$
BEGIN
  RETURN 
    (SELECT quadrado FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION pegar_quadrado_player(_id_player INTEGER)
    RETURNS VARCHAR AS $$
BEGIN
  RETURN 
    (SELECT quadrado FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;


-- pega todos quadrados de uma respectiva zona
CREATE OR REPLACE FUNCTION get_quadrados_zona(_id_zona INTEGER)
    RETURNS table (
    	id INTEGER,
		moedas moeda,
		lado_norte INTEGER,
		lado_sul INTEGER,
		lado_leste INTEGER,
		lado_oeste INTEGER
    ) AS $$
BEGIN
	RETURN QUERY
		(SELECT z.id, z.moedas, z.lado_norte, z.lado_sul, z.lado_leste, z.lado_oeste FROM quadrado z WHERE z.zona=_id_zona);
END
$$ LANGUAGE plpgsql;

-- Mostrar missões do player
CREATE OR REPLACE FUNCTION get_missao_player(_id_player INTEGER)
    RETURNS table (
		id INTEGER,
    	titulo VARCHAR,
		descricao VARCHAR,
		recompensa moeda,
		npc INTEGER,
		completa INTEGER
    ) AS $$
BEGIN
	RETURN QUERY
		(
			SELECT
				missao.id,
				missao.titulo,
				missao.descricao,
				missao.recompensa,
				missao.npc,
				mp.completa
			FROM 
				missao
				inner join
				missaoPlayer mp
				on missao.id = mp.missao
			WHERE mp.player=_id_player
		);
END
$$ LANGUAGE plpgsql;

-- Mostrar todas missões do NPC
CREATE OR REPLACE FUNCTION get_missao_npc(_id_npc INTEGER)
    RETURNS table (
		id INTEGER,
    	titulo VARCHAR,
		descricao VARCHAR,
		recompensa moeda
    ) AS $$
BEGIN
	RETURN QUERY
		(
			SELECT
				missao.id,
				missao.titulo,
				missao.descricao,
				missao.recompensa
			FROM 
				missao
			WHERE npc=_id_npc
		);
END
$$ LANGUAGE plpgsql;

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
CREATE OR REPLACE FUNCTION get_dano_player(_id_player INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
  (SELECT dano FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_dano_zumbi(_id_zumbi INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  RETURN 
  (SELECT
    case
        when  _id_zumbi = 1 then corredores.dano
        when  _id_zumbi = 2 then estaladores.dano
        when  _id_zumbi = 3 then baiacu.dano
        when  _id_zumbi = 4 then gosmento.dano
    end as dano
    FROM
        corredores,
        estaladores,
        baiacu,
        gosmento);
END
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_vida_player(_id_zumbi INTEGER, _id_player INTEGER)
    RETURNS INTEGER AS $$
BEGIN
  UPDATE player SET vida = vida - get_dano_zumbi(_id_zumbi) WHERE id=_id_player;
  RETURN 
  (SELECT vida FROM player WHERE id=_id_player);
END
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_instancia_intem(_id INTEGER)
  RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT experiencia FROM instancia_pokemon WHERE id=_id) / 100;
END;
$$ LANGUAGE plpgsql;

select * from zumbi;

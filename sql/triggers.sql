


-- TRIGGER para validação de instancia item
-- um item pode estar ou em uma bolsa, ou em um player ou em um quadrado, nunca em 2 ou 3 ao mesmo tempo
CREATE OR REPLACE FUNCTION localizacao_item() RETURNS trigger AS $$
BEGIN
     UPDATE instancia_item SET 
         player = old.player,
         quadrado = old.quadrado,
         bolsa = old.bolsa
     WHERE id = old.id;
     return null;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER verifica_localizacao_item
AFTER INSERT OR UPDATE ON instancia_item
FOR EACH ROW
WHEN ((NEW.bolsa IS NOT NULL AND NEW.player IS NOT NULL) OR 
(NEW.bolsa IS NOT NULL AND NEW.quadrado IS NOT NULL) OR
(NEW.player IS NOT NULL AND NEW.quadrado IS NOT NULL))
EXECUTE PROCEDURE localizacao_item();

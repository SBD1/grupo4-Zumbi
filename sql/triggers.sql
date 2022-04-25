


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


---CREATE OR REPLACE FUNCTION tamanho_bolsa() RETURNS trigger AS $$
---BEGIN
---    IF get_tamanho_bolsa(NEW.bolsa) < get_qtd_items_bolsa(NEW.bolsa) 
---		THEN
---    		UPDATE instancia_item SET 
---         		quadrado = old.quadrado,
--         		bolsa = 1
--    	 	WHERE id = old.id;
--	END IF;	
--	return null;
--END
--$$ LANGUAGE plpgsql;

--CREATE TRIGGER verifica_tamanho_bolsa
--AFTER INSERT OR UPDATE OF bolsa ON instancia_item
--FOR EACH ROW 
--EXECUTE PROCEDURE tamanho_bolsa();

--update instancia_item set bolsa=2, quadrado=null where id=4;
--select * from instancia_item order by id;

--select * from get_qtd_items_bolsa(1);

--call dropar_item_no_quadrado(2, 2);




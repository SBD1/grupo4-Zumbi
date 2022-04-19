
-- transaction
BEGIN;

CALL comprar_item(4, 1, 1);

COMMIT;


BEGIN;

CALL vender_item(4, 2);

COMMIT;



BEGIN;

CALL completa_missao(1, 2);

COMMIT;


BEGIN;

CALL matar_zumbi(3, 1, 1);

COMMIT;
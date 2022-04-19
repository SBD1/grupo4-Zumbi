
-- transaction
BEGIN;

CALL comprar_item(4, 1, 1);

COMMIT;

BEGIN;

CALL vender_item(4, 2);

COMMIT;
module.exports = {
  script: 
  `
    INSERT INTO player (vida, dano, velocidade, nome, exp_acumulado, dinheiro) VALUES 
    (100, 10, 5, 'Lorrany', 0, 0), 
    (100, 15, 10, 'Eddie', 10, 50), 
    (50, 20, 10, 'Guilherme', 15, 100),
    (100, 20, 10, 'Igor', 20, 50),
    (100, 10, 5, 'Erico', 5, 120);
  `
}
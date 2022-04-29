module.exports = {
  script: 
  `
  --INSERT: mapa
  INSERT INTO mapa (nome) VALUES
  ('Zumbizera');
  
  --INSERT: zona
  INSERT INTO zona (nome, mapa) VALUES
  ('Zona norte', 1),
  ('Zona nordeste', 1),
  ('Zona centro-oeste', 1),
  ('Zona sudeste', 1),
  ('Zona sul', 1);
  
  --INSERT: quadrado
  INSERT INTO quadrado (moedas, zona) VALUES
  (5,1), (3,1), (0,1), (3,1), (0,1), (0,1), (7,1), (0,1), (10,1), (0,1),
  (7,1), (0,1), (0,1), (3,1), (0,1), (0,1), (3,1), (3,1), (3,1), (0,1),
  (0,1), (0,1), (20,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1),
  (6,1), (0,1), (8,1), (0,1), (0,1), (0,1), (8,1), (0,1), (4,1), (0,1),
  (0,1), (8,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1), (0,1),
  (0,1), (0,1), (10,1), (0,1), (0,1), (0,1), (0,1), (4,1), (0,1), (9,1),
  (0,1), (0,1), (4,1), (0,1), (0,1), (0,1), (8,1), (0,1), (0,1), (0,1),
  (0,1), (4,1), (4,1), (8,1), (0,1), (0,1), (0,1), (4,1), (4,1), (4,1),
  (0,1), (0,1), (4,1), (0,1), (8,1), (0,1), (4,1), (0,1), (0,1), (0,1),
  (10,1), (10,1), (0,1), (0,1), (0,1), (10,1), (10,1), (0,1), (0,1), (15,1),
  (5,2), (0,2), (8,2), (1,2), (8,2), (0,2), (0,2),
  (1,2), (0,2), (6,2), (0,2), (0,2), (0,2), (0,2),
  (2,2), (1,2), (0,2), (0,2), (0,2), (0,2), (0,2),
  (0,2), (5,2), (0,2), (0,2), (0,2), (0,2), (0,2),
  (0,2), (1,2), (0,2), (4,2), (8,2), (0,2), (0,2),
  (1,2), (1,2), (8,2), (3,2), (0,2), (9,2), (0,2),
  (8,2), (0,2), (0,2), (7,2), (0,2), (9,2), (9,2)
  ;

  -- Montando os mapas:
  --update  quadrado 1 - 10
  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=11 ,lado_leste=2 ,lado_oeste=null
  WHERE id = 1;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=12 ,lado_leste=3 ,lado_oeste=1
  WHERE id = 2;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=13 ,lado_leste=4 ,lado_oeste=2
  WHERE id = 3;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=14 ,lado_leste=5 ,lado_oeste=3
  WHERE id = 4;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=15 ,lado_leste=6 ,lado_oeste=4
  WHERE id = 5;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=16 ,lado_leste=7 ,lado_oeste=5
  WHERE id = 6;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=17 ,lado_leste=8 ,lado_oeste=6
  WHERE id = 7;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=18 ,lado_leste=9 ,lado_oeste=7
  WHERE id = 8;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=19 ,lado_leste=10 ,lado_oeste=8
  WHERE id = 9;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=20 ,lado_leste=null ,lado_oeste=9
  WHERE id = 10;

  --update  quadrado 11 - 20
  UPDATE quadrado 
  SET lado_norte=1 ,lado_sul=21 ,lado_leste=12 ,lado_oeste=null
  WHERE id = 11;

  UPDATE quadrado 
  SET lado_norte=2 ,lado_sul=22 ,lado_leste=13 ,lado_oeste=11
  WHERE id = 12;

  UPDATE quadrado 
  SET lado_norte=3 ,lado_sul=23 ,lado_leste=14 ,lado_oeste=12
  WHERE id = 13;

  UPDATE quadrado 
  SET lado_norte=4 ,lado_sul=24 ,lado_leste=15 ,lado_oeste=13
  WHERE id = 14;

  UPDATE quadrado 
  SET lado_norte=5 ,lado_sul=25 ,lado_leste=16 ,lado_oeste=14
  WHERE id = 15;

  UPDATE quadrado 
  SET lado_norte=6 ,lado_sul=26 ,lado_leste=17 ,lado_oeste=15
  WHERE id = 16;

  UPDATE quadrado 
  SET lado_norte=7 ,lado_sul=27 ,lado_leste=18 ,lado_oeste=16
  WHERE id = 17;

  UPDATE quadrado 
  SET lado_norte=8 ,lado_sul=28 ,lado_leste=19 ,lado_oeste=17
  WHERE id = 18;

  UPDATE quadrado 
  SET lado_norte=9 ,lado_sul=29 ,lado_leste=20 ,lado_oeste=18
  WHERE id = 19;

  UPDATE quadrado 
  SET lado_norte=10 ,lado_sul=30 ,lado_leste=null ,lado_oeste=19
  WHERE id = 20;

  --update  quadrado 21 - 30
  UPDATE quadrado 
  SET lado_norte=11 ,lado_sul=31 ,lado_leste=22 ,lado_oeste=null
  WHERE id = 21;

  UPDATE quadrado 
  SET lado_norte=12 ,lado_sul=32 ,lado_leste=23 ,lado_oeste=21
  WHERE id = 22;

  UPDATE quadrado 
  SET lado_norte=13 ,lado_sul=33 ,lado_leste=24 ,lado_oeste=22
  WHERE id = 23;

  UPDATE quadrado 
  SET lado_norte=14 ,lado_sul=34 ,lado_leste=25 ,lado_oeste=23
  WHERE id = 24;

  UPDATE quadrado 
  SET lado_norte=15 ,lado_sul=35 ,lado_leste=26 ,lado_oeste=24
  WHERE id = 25;

  UPDATE quadrado 
  SET lado_norte=16 ,lado_sul=36 ,lado_leste=27 ,lado_oeste=25
  WHERE id = 26;

  UPDATE quadrado 
  SET lado_norte=17 ,lado_sul=37 ,lado_leste=28 ,lado_oeste=26
  WHERE id = 27;

  UPDATE quadrado 
  SET lado_norte=18 ,lado_sul=38 ,lado_leste=29 ,lado_oeste=27
  WHERE id = 28;

  UPDATE quadrado 
  SET lado_norte=19 ,lado_sul=39 ,lado_leste=30 ,lado_oeste=28
  WHERE id = 29;

  UPDATE quadrado 
  SET lado_norte=20 ,lado_sul=40 ,lado_leste=null ,lado_oeste=29
  WHERE id = 30;

  --update  quadrado 31 - 40
  UPDATE quadrado 
  SET lado_norte= 21 ,lado_sul=41 ,lado_leste=32 ,lado_oeste=null
  WHERE id = 31;

  UPDATE quadrado 
  SET lado_norte= 22,lado_sul=42 ,lado_leste=33 ,lado_oeste=31
  WHERE id = 32;

  UPDATE quadrado 
  SET lado_norte= 23 ,lado_sul=43 ,lado_leste=34 ,lado_oeste=32
  WHERE id = 33;

  UPDATE quadrado 
  SET lado_norte= 24 ,lado_sul=44 ,lado_leste=35 ,lado_oeste=33
  WHERE id = 34;

  UPDATE quadrado 
  SET lado_norte= 25 ,lado_sul=45 ,lado_leste=36 ,lado_oeste=34
  WHERE id = 35;

  UPDATE quadrado 
  SET lado_norte= 26 ,lado_sul=46 ,lado_leste=37 ,lado_oeste=35
  WHERE id = 36;

  UPDATE quadrado 
  SET lado_norte= 27 ,lado_sul=47 ,lado_leste=38 ,lado_oeste=36
  WHERE id = 37;

  UPDATE quadrado 
  SET lado_norte= 28 ,lado_sul=48 ,lado_leste=39 ,lado_oeste=37
  WHERE id = 38;

  UPDATE quadrado 
  SET lado_norte= 29 ,lado_sul=49 ,lado_leste=40 ,lado_oeste=38
  WHERE id = 39;

  UPDATE quadrado 
  SET lado_norte= 30 ,lado_sul=50 ,lado_leste=null ,lado_oeste=39
  WHERE id = 40;

  --update  quadrado 41 - 50
  UPDATE quadrado 
  SET lado_norte=31 ,lado_sul=51 ,lado_leste=42 ,lado_oeste=null
  WHERE id = 41;

  UPDATE quadrado 
  SET lado_norte=32 ,lado_sul=52 ,lado_leste=43 ,lado_oeste=41
  WHERE id = 42;

  UPDATE quadrado 
  SET lado_norte=33 ,lado_sul=53 ,lado_leste=44 ,lado_oeste=42
  WHERE id = 43;

  UPDATE quadrado 
  SET lado_norte=34 ,lado_sul=54 ,lado_leste=45 ,lado_oeste=43
  WHERE id = 44;

  UPDATE quadrado 
  SET lado_norte=35 ,lado_sul=55 ,lado_leste=46 ,lado_oeste=44
  WHERE id = 45;

  UPDATE quadrado 
  SET lado_norte=36 ,lado_sul=56 ,lado_leste=47 ,lado_oeste=45
  WHERE id = 46;

  UPDATE quadrado 
  SET lado_norte=37 ,lado_sul=57 ,lado_leste=48 ,lado_oeste=46
  WHERE id = 47;

  UPDATE quadrado 
  SET lado_norte=38 ,lado_sul=58 ,lado_leste=49 ,lado_oeste=47
  WHERE id = 48;

  UPDATE quadrado 
  SET lado_norte=39 ,lado_sul=59 ,lado_leste=50 ,lado_oeste=48
  WHERE id = 49;

  UPDATE quadrado 
  SET lado_norte=40 ,lado_sul=60 ,lado_leste=null ,lado_oeste=49
  WHERE id = 50;

  --update  quadrado 51 - 60
  UPDATE quadrado 
  SET lado_norte=41 ,lado_sul=61 ,lado_leste=52 ,lado_oeste=null
  WHERE id = 51;

  UPDATE quadrado 
  SET lado_norte=42 ,lado_sul=62 ,lado_leste=53 ,lado_oeste=51
  WHERE id = 52;

  UPDATE quadrado 
  SET lado_norte=43 ,lado_sul=63 ,lado_leste=54 ,lado_oeste=52
  WHERE id = 53;

  UPDATE quadrado 
  SET lado_norte=44 ,lado_sul=64 ,lado_leste=55 ,lado_oeste=53
  WHERE id = 54;

  UPDATE quadrado 
  SET lado_norte=45 ,lado_sul=65 ,lado_leste=56 ,lado_oeste=54
  WHERE id = 55;

  UPDATE quadrado 
  SET lado_norte=46 ,lado_sul=66 ,lado_leste=57 ,lado_oeste=55
  WHERE id = 56;

  UPDATE quadrado 
  SET lado_norte=47 ,lado_sul=67 ,lado_leste=58 ,lado_oeste=56
  WHERE id = 57;

  UPDATE quadrado 
  SET lado_norte=48 ,lado_sul=68 ,lado_leste=59 ,lado_oeste=57
  WHERE id = 58;

  UPDATE quadrado 
  SET lado_norte=49 ,lado_sul=69 ,lado_leste=60 ,lado_oeste=58
  WHERE id = 59;

  UPDATE quadrado 
  SET lado_norte=50 ,lado_sul=70 ,lado_leste=null ,lado_oeste=59
  WHERE id = 60;


  -- update  quadrado 61 - 70
  UPDATE quadrado 
  SET lado_norte=51 ,lado_sul=71 ,lado_leste=62 ,lado_oeste=null
  WHERE id = 61;

  UPDATE quadrado 
  SET lado_norte=52 ,lado_sul=72 ,lado_leste=63 ,lado_oeste=61
  WHERE id = 62;

  UPDATE quadrado 
  SET lado_norte=53 ,lado_sul=73 ,lado_leste=64 ,lado_oeste=62
  WHERE id = 63;

  UPDATE quadrado 
  SET lado_norte=54 ,lado_sul=74 ,lado_leste=65 ,lado_oeste=63
  WHERE id = 64;

  UPDATE quadrado 
  SET lado_norte=55 ,lado_sul=75 ,lado_leste=66 ,lado_oeste=64
  WHERE id = 65;

  UPDATE quadrado 
  SET lado_norte=56 ,lado_sul=76 ,lado_leste=67 ,lado_oeste=65
  WHERE id = 66;

  UPDATE quadrado 
  SET lado_norte=57 ,lado_sul=77 ,lado_leste=68 ,lado_oeste=66
  WHERE id = 67;

  UPDATE quadrado 
  SET lado_norte=58 ,lado_sul=78 ,lado_leste=69 ,lado_oeste=67
  WHERE id = 68;

  UPDATE quadrado 
  SET lado_norte=59 ,lado_sul=79 ,lado_leste=70 ,lado_oeste=68
  WHERE id = 69;

  UPDATE quadrado 
  SET lado_norte=60 ,lado_sul=80 ,lado_leste=null ,lado_oeste=69
  WHERE id = 70;

  -- update  quadrado 71 - 80
  UPDATE quadrado 
  SET lado_norte=61 ,lado_sul=81 ,lado_leste=72 ,lado_oeste=null
  WHERE id = 71;

  UPDATE quadrado 
  SET lado_norte=62 ,lado_sul=82 ,lado_leste=73 ,lado_oeste=71
  WHERE id = 72;

  UPDATE quadrado 
  SET lado_norte=63 ,lado_sul=83 ,lado_leste=74 ,lado_oeste=72
  WHERE id = 73;

  UPDATE quadrado 
  SET lado_norte=64 ,lado_sul=84 ,lado_leste=75 ,lado_oeste=73
  WHERE id = 74;

  UPDATE quadrado 
  SET lado_norte=65 ,lado_sul=85 ,lado_leste=76 ,lado_oeste=74
  WHERE id = 75;

  UPDATE quadrado 
  SET lado_norte=66 ,lado_sul=86 ,lado_leste=77 ,lado_oeste=75
  WHERE id = 76;

  UPDATE quadrado 
  SET lado_norte=67 ,lado_sul=87 ,lado_leste=78 ,lado_oeste=76
  WHERE id = 77;

  UPDATE quadrado 
  SET lado_norte=68 ,lado_sul=88 ,lado_leste=79 ,lado_oeste=77
  WHERE id = 78;

  UPDATE quadrado 
  SET lado_norte=69 ,lado_sul=89 ,lado_leste=80 ,lado_oeste=78
  WHERE id = 79;

  UPDATE quadrado 
  SET lado_norte=70 ,lado_sul=90 ,lado_leste=null ,lado_oeste=79
  WHERE id = 80;

  -- update  quadrado 81 - 90
  UPDATE quadrado 
  SET lado_norte=71 ,lado_sul=91 ,lado_leste=82 ,lado_oeste=null
  WHERE id = 81;

  UPDATE quadrado 
  SET lado_norte=72 ,lado_sul=92 ,lado_leste=83 ,lado_oeste=81
  WHERE id = 82;

  UPDATE quadrado 
  SET lado_norte=73 ,lado_sul=93 ,lado_leste=84 ,lado_oeste=82
  WHERE id = 83;

  UPDATE quadrado 
  SET lado_norte=74 ,lado_sul=94 ,lado_leste=85 ,lado_oeste=83
  WHERE id = 84;

  UPDATE quadrado 
  SET lado_norte=75 ,lado_sul=95 ,lado_leste=86 ,lado_oeste=84
  WHERE id = 85;

  UPDATE quadrado 
  SET lado_norte=76 ,lado_sul=96 ,lado_leste=87 ,lado_oeste=85
  WHERE id = 86;

  UPDATE quadrado 
  SET lado_norte=77 ,lado_sul=97 ,lado_leste=88 ,lado_oeste=86
  WHERE id = 87;

  UPDATE quadrado 
  SET lado_norte=78 ,lado_sul=98 ,lado_leste=89 ,lado_oeste=87
  WHERE id = 88;

  UPDATE quadrado 
  SET lado_norte=79 ,lado_sul=99 ,lado_leste=90 ,lado_oeste=88
  WHERE id = 89;

  UPDATE quadrado 
  SET lado_norte=80 ,lado_sul=100 ,lado_leste=null ,lado_oeste=89
  WHERE id = 90;

  -- update  quadrado 91 - 100
  UPDATE quadrado 
  SET lado_norte=81 ,lado_sul=null ,lado_leste=92 ,lado_oeste=null
  WHERE id = 91;

  UPDATE quadrado 
  SET lado_norte=82 ,lado_sul=null ,lado_leste=93 ,lado_oeste=91
  WHERE id = 92;

  UPDATE quadrado 
  SET lado_norte=83 ,lado_sul=null ,lado_leste=94 ,lado_oeste=92
  WHERE id = 93;

  UPDATE quadrado 
  SET lado_norte=84 ,lado_sul=null ,lado_leste=95 ,lado_oeste=93
  WHERE id = 94;

  UPDATE quadrado 
  SET lado_norte=85 ,lado_sul=null ,lado_leste=96 ,lado_oeste=94
  WHERE id = 95;

  UPDATE quadrado 
  SET lado_norte=86 ,lado_sul=null ,lado_leste=97 ,lado_oeste=95
  WHERE id = 96;

  UPDATE quadrado 
  SET lado_norte=87 ,lado_sul=null ,lado_leste=98 ,lado_oeste=96
  WHERE id = 97;

  UPDATE quadrado 
  SET lado_norte=88 ,lado_sul=null ,lado_leste=99 ,lado_oeste=97
  WHERE id = 98;

  UPDATE quadrado 
  SET lado_norte=89 ,lado_sul=null ,lado_leste=100 ,lado_oeste=98
  WHERE id = 99;

  UPDATE quadrado 
  SET lado_norte=90 ,lado_sul=null ,lado_leste=null ,lado_oeste=99
  WHERE id = 100;

  -- update  quadrado 101 - 107
  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=108 ,lado_leste=102 ,lado_oeste=null
  WHERE id = 101;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=109 ,lado_leste=103 ,lado_oeste=101
  WHERE id = 102;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=110 ,lado_leste=104 ,lado_oeste=102
  WHERE id = 103;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=111 ,lado_leste=105 ,lado_oeste=103
  WHERE id = 104;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=112 ,lado_leste=106 ,lado_oeste=104
  WHERE id = 105;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=113 ,lado_leste=107 ,lado_oeste=105
  WHERE id = 106;

  UPDATE quadrado 
  SET lado_norte=null ,lado_sul=114 ,lado_leste=null ,lado_oeste=106
  WHERE id = 107;

  -- update  quadrado 108 - 114
  UPDATE quadrado 
  SET lado_norte=101 ,lado_sul=115 ,lado_leste=109 ,lado_oeste=null
  WHERE id = 108;

  UPDATE quadrado 
  SET lado_norte=102 ,lado_sul=116 ,lado_leste=110 ,lado_oeste=108
  WHERE id = 109;

  UPDATE quadrado 
  SET lado_norte=103 ,lado_sul=117 ,lado_leste=111 ,lado_oeste=109
  WHERE id = 110;

  UPDATE quadrado 
  SET lado_norte=104 ,lado_sul=118 ,lado_leste=112 ,lado_oeste=110
  WHERE id = 111;

  UPDATE quadrado 
  SET lado_norte=105 ,lado_sul=119 ,lado_leste=113 ,lado_oeste=111
  WHERE id = 112;

  UPDATE quadrado 
  SET lado_norte=106 ,lado_sul=120 ,lado_leste=114 ,lado_oeste=112
  WHERE id = 113;

  UPDATE quadrado 
  SET lado_norte=107 ,lado_sul=121 ,lado_leste=null ,lado_oeste=113
  WHERE id = 114;

  -- update  quadrado 101 - 107
  UPDATE quadrado 
  SET lado_norte=108 ,lado_sul=122 ,lado_leste=116 ,lado_oeste=null
  WHERE id = 115;

  UPDATE quadrado 
  SET lado_norte=109 ,lado_sul=123 ,lado_leste=117 ,lado_oeste=115
  WHERE id = 116;

  UPDATE quadrado 
  SET lado_norte=110 ,lado_sul=124 ,lado_leste=118 ,lado_oeste=116
  WHERE id = 117;

  UPDATE quadrado 
  SET lado_norte=111 ,lado_sul=125 ,lado_leste=119 ,lado_oeste=117
  WHERE id = 118;

  UPDATE quadrado 
  SET lado_norte=112 ,lado_sul=126 ,lado_leste=120 ,lado_oeste=118
  WHERE id = 119;

  UPDATE quadrado 
  SET lado_norte=113 ,lado_sul=127 ,lado_leste=121 ,lado_oeste=119
  WHERE id = 120;

  UPDATE quadrado 
  SET lado_norte=114 ,lado_sul=128 ,lado_leste=null ,lado_oeste=120
  WHERE id = 121;

  -- update  quadrado 122 - 128
  UPDATE quadrado 
  SET lado_norte=115 ,lado_sul=129 ,lado_leste=123 ,lado_oeste=null
  WHERE id = 122;

  UPDATE quadrado 
  SET lado_norte=116 ,lado_sul=130 ,lado_leste=124 ,lado_oeste=122
  WHERE id = 123;

  UPDATE quadrado 
  SET lado_norte=117 ,lado_sul=131 ,lado_leste=125 ,lado_oeste=123
  WHERE id = 124;

  UPDATE quadrado 
  SET lado_norte=118 ,lado_sul=132 ,lado_leste=126 ,lado_oeste=124
  WHERE id = 125;

  UPDATE quadrado 
  SET lado_norte=119 ,lado_sul=133 ,lado_leste=127 ,lado_oeste=125
  WHERE id = 126;

  UPDATE quadrado 
  SET lado_norte=120 ,lado_sul=134 ,lado_leste=128 ,lado_oeste=126
  WHERE id = 127;

  UPDATE quadrado 
  SET lado_norte=121 ,lado_sul=135 ,lado_leste=null ,lado_oeste=127
  WHERE id = 128;

  -- update  quadrado 129 - 135
  UPDATE quadrado 
  SET lado_norte=122 ,lado_sul=136 ,lado_leste=130 ,lado_oeste=null
  WHERE id = 129;

  UPDATE quadrado 
  SET lado_norte=123 ,lado_sul=137 ,lado_leste=131 ,lado_oeste=129
  WHERE id = 130;

  UPDATE quadrado 
  SET lado_norte=124 ,lado_sul=138 ,lado_leste=132 ,lado_oeste=130
  WHERE id = 131;

  UPDATE quadrado 
  SET lado_norte=125 ,lado_sul=139 ,lado_leste=133 ,lado_oeste=131
  WHERE id = 132;

  UPDATE quadrado 
  SET lado_norte=126 ,lado_sul=140 ,lado_leste=134 ,lado_oeste=132
  WHERE id = 133;

  UPDATE quadrado 
  SET lado_norte=127 ,lado_sul=141 ,lado_leste=135 ,lado_oeste=133
  WHERE id = 134;

  UPDATE quadrado 
  SET lado_norte=128 ,lado_sul=142 ,lado_leste=null ,lado_oeste=134
  WHERE id = 135;

  -- update  quadrado 136 - 142
  UPDATE quadrado 
  SET lado_norte=129 ,lado_sul=143 ,lado_leste=137 ,lado_oeste=null
  WHERE id = 136;

  UPDATE quadrado 
  SET lado_norte=130 ,lado_sul=144 ,lado_leste=138 ,lado_oeste=136
  WHERE id = 137;

  UPDATE quadrado 
  SET lado_norte=131 ,lado_sul=145 ,lado_leste=139 ,lado_oeste=137
  WHERE id = 138;

  UPDATE quadrado 
  SET lado_norte=132 ,lado_sul=146 ,lado_leste=140 ,lado_oeste=138
  WHERE id = 139;

  UPDATE quadrado 
  SET lado_norte=133 ,lado_sul=147 ,lado_leste=141 ,lado_oeste=139
  WHERE id = 140;

  UPDATE quadrado 
  SET lado_norte=134 ,lado_sul=148 ,lado_leste=142 ,lado_oeste=140
  WHERE id = 141;

  UPDATE quadrado 
  SET lado_norte=135 ,lado_sul=149 ,lado_leste=null ,lado_oeste=141
  WHERE id = 142;

  -- update  quadrado 143 - 149
  UPDATE quadrado 
  SET lado_norte=136 ,lado_sul=null ,lado_leste=144 ,lado_oeste=null
  WHERE id = 143;

  UPDATE quadrado 
  SET lado_norte=137 ,lado_sul=null ,lado_leste=145 ,lado_oeste=143
  WHERE id = 144;

  UPDATE quadrado 
  SET lado_norte=138 ,lado_sul=null ,lado_leste=146 ,lado_oeste=144
  WHERE id = 145;

  UPDATE quadrado 
  SET lado_norte=139 ,lado_sul=null ,lado_leste=147 ,lado_oeste=145
  WHERE id = 146;

  UPDATE quadrado 
  SET lado_norte=140 ,lado_sul=null ,lado_leste=148 ,lado_oeste=146
  WHERE id = 147;

  UPDATE quadrado 
  SET lado_norte=141 ,lado_sul=null ,lado_leste=149 ,lado_oeste=147
  WHERE id = 148;

  UPDATE quadrado 
  SET lado_norte=142 ,lado_sul=null ,lado_leste=null ,lado_oeste=148
  WHERE id = 149;

  -- INSERT: player
  INSERT INTO player (vida, dano, velocidade, nome, exp_acumulado, dinheiro) VALUES 
  (100, 10, 5, 'Lorrany', 0, 0), 
  (100, 15, 10, 'Eddie', 10, 50), 
  (50, 20, 10, 'Guilherme', 15, 100),
  (100, 20, 10, 'Igor', 20, 50),
  (100, 10, 5, 'Erico', 5, 120);
  
  -- INSERT: zumbi
  INSERT INTO zumbi (tipoespecializacao) VALUES
  ('corredores'),
  ('estaladores'),
  ('baiacu'),
  ('gosmento');
  
  INSERT INTO corredores (id, vida, dano, velocidade, arranque, experiencia) VALUES
  (1, 60, 5, 10, 3, 50);
  
  INSERT INTO estaladores (id, vida, dano, velocidade, imparabilidade, experiencia) VALUES
  (2, 100, 20, 5, true, 70);
  
  INSERT INTO baiacu (id, vida, dano, velocidade, resistencia, experiencia) VALUES
  (3, 180, 15, 5, 20, 150);
  
  INSERT INTO gosmento (id, vida, dano, velocidade, tam_gosma, distancia_tiro , experiencia) VALUES
  (4, 80, 10, 5, 2, 2, 100);
  
  -- INSERT: instancia
  INSERT INTO instancia_zumbi (id_zumbi, vida_atual, dinheiro, zona, quadrado) VALUES
  (2, 100, 10, 1, 5);
  
  
  -- INSERT: itens
  INSERT INTO item (tipo_especializacao) VALUES
  ('arma_branca'),
  ('arma_fogo'),
  ('municao'),
  ('armadura'),
  ('comida'),
  ('adrenalina');
  
  INSERT INTO arma_branca (id, nome, preco, dano, tipo, comprimento) VALUES
  (1, 'machado', 75, 35, 'corpo a corpo', 1);
  
  -- INSERT: armas de fogo
  -- Revisar as colunas: tipo, velocidade_recarga
  -- Armas inspiradas no jogos Valorant e Resident Evil 4
  INSERT INTO arma_fogo (id, nome, preco, dano, tipo, distancia, armazenamento, velocidade_recarga, abertura_impacto) VALUES
  (2, 'classic', 65, 20, 'pistola', 4, 6, 1, 1);
  
  INSERT INTO municao (id, nome, preco, quantidade, tipo_arma, id_arma_fogo ) VALUES
  (3, 'municao pistola', 10, 14, 'pistola', 2);
  
  INSERT INTO armadura (id, nome, preco, tipo, protecao) VALUES
  (4, 'roupas comuns', '10', 'armadura', 1);
  
  INSERT INTO comida (id, nome, preco, tipo, utilidade, quantidade_vida) VALUES
  (5, 'barra de cereal', 5, 'comida', 'barrinha seca trio de chocolate com coco', 5);
  
  INSERT INTO adrenalina (id, nome, preco, tipo, utilidade, vida_adicional, velocidade_adicional, tempo_uso) VALUES
  (6, 'coquinha gelada', 10, 'energetico', 'aumentar vida maxima', 20, 0, 30);
  
  -- INSERT: npc
  INSERT INTO npc (tipo_especializacao) VALUES
  ('vendedor'),
  ('instrutor');
  
  
  INSERT INTO instancia_npc (id_npc, quadrado) VALUES
  (1, 7),
  (1, 24),
  (1, 49),
  (1, 67),
  (1, 88),
  (1, 100),
  (2, 19),
  (2, 31),
  (2, 55),
  (2, 77),
  (2, 91)
  ;
  
  INSERT INTO falas (id_npc, texto) VALUES
  (1, 'deseja comprar um item?'),
  (2, 'deseja entrar em uma missao?');
  
  INSERT INTO estoque (id_vendedor, id_item) VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5);
  
  insert into bolsa (tamanho, player) VALUES 
  (10, 1),
  (20, 2);
  
  
  INSERT INTO instancia_item (id_item, player, bolsa, quadrado) values
  (1, null, 2, null),
  (2, null, 2, null),
  (2, null, 2, null),
  (3, null, 2, null),
  (5, null, null, 1),
  (1, null, null, 2),
  (4, 1, null, null),
  (2, null, null, 10),
  (2, null, null, 99),
  (2, null, null, 45),
  (2, null, null, 37),
  (3, null, null, 70),
  (3, null, null, 8),
  (3, null, null, 22),
  (3, null, null, 83),
  (4, null, null, 5),
  (4, null, null, 31),
  (4, null, null, 66),
  (5, null, null, 42),
  (5, null, null, 55),
  (5, null, null, 61),
  (5, null, null, 59),
  (1, null, null, 38),
  (6, null, null, 14),
  (6, null, null, 87)
  ;
  
  INSERT INTO missao (titulo, descricao, recompensa, npc) VALUES
  ('Bem vindo à Zumbizera', 'Sua primeira missão é ter uma missão', 1, 2);
  `
}
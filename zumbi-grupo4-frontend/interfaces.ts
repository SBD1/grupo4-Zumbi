export interface quadrado {
  lado_leste: Number,
  lado_oeste: Number,
  lado_sul: Number,
  lado_norte: Number,
  id: Number
}

export interface zumbi {
  dano: Number;
  instancia_zumbi_id: Number,
  vida_atual: Number,
  dinheiro: Number,
  tipoespecializacao: string
}

export interface moedas {
  qtd: Number,
}

export interface itens {
  id: Number,
  player: Number | null,
  bolsa: Number | null,
  quadrado: Number | null,
  id_item: Number,
  tipo_especializacao: string,
  nome: string,
  preco: Number | null
}

export interface npcs {
  instancia_npc_id: Number,
  tipo_especializacao: string
}

export interface quadradoInfo {
  zumbi: Array<zumbi>,
  moedas: Array<moedas>,
  itens: Array<itens>,
  npcs: Array<npcs>
}

export interface player {
  id: Number,
  vida: Number,
  dano: Number,
  velocidade: Number,
  nome: string,
  exp_acumulado: Number,
  dinheiro: Number | null,
  quadrado: Number | null,
  bolsa: Number | null
}

export interface produto {
  id_item: Number,
  tipo_especializacao: string,
  nome: string,
  preco: Number
}

export interface missao {
  id: Number,
  titulo: string,
  descricao: string,
  recompensa: Number
}

export interface missaoPlayer {
  missao: Number,
  player: Number,
  completa: Number
}
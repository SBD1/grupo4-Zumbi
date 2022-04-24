export interface quadrado {
  lado_leste: Number,
  lado_oeste: Number,
  lado_sul: Number,
  lado_norte: Number,
  id: Number
}

export interface zumbi {
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
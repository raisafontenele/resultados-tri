// quarters_sicredi.js — dados trimestrais Sicredi
// Fontes: Apresentações Institucionais e Demonstrações Financeiras Combinadas
// sobras_bi = resultado líquido cooperativo (equivalente ao lucro em bancos)
// roe_pct   = ROAE anualizado (últimos 12 meses, conforme divulgado)
// carteira_bi = carteira expandida total (crédito + CPR)
// carteira_pj_bi = crédito a pessoas jurídicas (inclui micro e pequenas empresas)
// npl_total_pct = inadimplência >90 dias, total do sistema Sicredi
// npl_pj_pct    = inadimplência >90 dias, segmento PJ (disponível a partir de 3T24)

window.QUARTERS_DATA_SICREDI = [

  // ── 2022 — NPL extraído de série histórica nas apresentações de 2025 ──────
  {
    banco_id:"sicredi", periodo:"1T22", ano:2022, tri:1,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   1.0,   // série histórica gráfico Apresentação 4T25
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"2T22", ano:2022, tri:2,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   1.2,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"3T22", ano:2022, tri:3,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   1.4,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"4T22", ano:2022, tri:4,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   1.5,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"sicredi", periodo:"1T23", ano:2023, tri:1,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   1.6,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"2T23", ano:2023, tri:2,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   1.8,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"3T23", ano:2023, tri:3,
    kpis:{
      sobras_bi:       null,
      roe_pct:         null,
      carteira_bi:     null,
      carteira_pj_bi:  null,
      carteira_agro_bi:null,
      npl_total_pct:   2.0,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   null,
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"4T23", ano:2023, tri:4,
    kpis:{
      sobras_bi:       null,
      roe_pct:         20.1,  // ROAE 2023 anualizado (Apresentação 4T23)
      carteira_bi:     null,
      carteira_pj_bi:  66.3,  // Inferido: 4T24 PJ=82.8bi (+24.8% a/a)
      carteira_agro_bi:null,
      npl_total_pct:   2.1,
      npl_pj_pct:      null,
      depositos_bi:    null,
      cooperados_mm:   7.53,  // Apresentação 4T23: base de associados fim de 2023
    },
    highlights:[
      "ROAE 2023: 20,1% — maior entre as grandes IFs do Brasil",
      "Base de 7,53 MM associados — crescimento expressivo",
      "Maior repassador de crédito do BNDES do país",
      "Global SME Finance Awards: Financiador PME do Ano"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"sicredi", periodo:"1T24", ano:2024, tri:1,
    kpis:{
      sobras_bi:       1.318,  // Apresentação 1T24 — resultado trim. jan-mar
      roe_pct:         18.6,   // ROAE anualizado 12M
      carteira_bi:     220.2,
      carteira_pj_bi:  69.7,
      carteira_agro_bi:87.2,
      npl_total_pct:   2.3,
      npl_pj_pct:      null,   // breakdown por segmento a partir de 3T24
      depositos_bi:    232.9,
      cooperados_mm:   7.8,
    },
    highlights:[
      "ROAE 18,6% — desempenho acima dos pares bancários",
      "Carteira PJ de R$ 69,7bi com foco em PMEs (micro e pequenas = ~55% da PJ)",
      "2.712 pontos de atendimento; 104 cooperativas",
      "Basileia 19,4% — capital robusto para continuar crescendo"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"2T24", ano:2024, tri:2,
    kpis:{
      sobras_bi:       1.757,  // Estimado: acum. 1S24=3.075bi − 1T24=1.318bi
      roe_pct:         17.9,
      carteira_bi:     226.7,
      carteira_pj_bi:  72.8,
      carteira_agro_bi:88.3,
      npl_total_pct:   2.4,
      npl_pj_pct:      null,
      depositos_bi:    248.5,
      cooperados_mm:   8.1,
    },
    highlights:[
      "Carteira PJ cresce R$ 3,1bi no trimestre (+4,5%), atingindo R$ 72,8bi",
      "Depósitos crescem R$ 15,6bi no trimestre — captação robusta",
      "Associados superam 8,1MM — >300 mil novos associados por trimestre",
      "2.740 pontos de atendimento (+28 vs 1T24)"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"3T24", ano:2024, tri:3,
    kpis:{
      sobras_bi:       1.618,  // Estimado: acum. 9M24=4.693bi − 1S24=3.075bi
      roe_pct:         16.6,
      carteira_bi:     243.3,
      carteira_pj_bi:  78.0,
      carteira_agro_bi:96.8,
      npl_total_pct:   2.5,
      npl_pj_pct:      2.3,   // Gráfico segmentado 3T24: PJ=2.3%, PF=3.0%, Rural=0.1%
      depositos_bi:    262.1,
      cooperados_mm:   8.4,
    },
    highlights:[
      "Carteira expandida +7,3% t/t — maior crescimento trimestral de 2024",
      "Agro atinge R$ 96,8bi (+R$ 8,5bi) — safra 2024/25 acelerou demanda",
      "NPL segmentado: Rural 0,1% / PJ 2,3% / PF 3,0% — qualidade superior ao SFN",
      "Ativos superam R$ 386bi — 6ª maior IF do Brasil",
      "Mais de 2.800 pontos de atendimento"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"sicredi", periodo:"4T24", ano:2024, tri:4,
    kpis:{
      sobras_bi:       1.973,  // Estimado: acum. 2024=6.666bi − 9M24=4.693bi
      roe_pct:         16.3,
      carteira_bi:     256.3,
      carteira_pj_bi:  82.8,
      carteira_agro_bi:100.6,
      npl_total_pct:   2.4,
      npl_pj_pct:      2.6,
      depositos_bi:    268.6,
      cooperados_mm:   8.69,
    },
    highlights:[
      "Resultado 2024: R$ 6,666bi — crescimento sólido mesmo com ROAE menor (16,3%)",
      "Carteira PJ +24,8% a/a: R$ 82,8bi; Agro ultrapassa R$ 100bi — marco histórico",
      "Sobras 2024 distribuídas: R$ 2,53bi retornam aos associados",
      "Portfólio sustentável: R$ 57,6bi (Agro familiar, Mulheres Empreendedoras, Energia Renovável)",
      "Forbes World's Best Banks — 5ª posição; Global SME Finance Awards 2024",
      "8,69MM associados — +1,16MM em 2024 (+15,5% a/a)"
    ],
    guidance:null,
    percepcao_mercado:"Sicredi encerra 2024 como referência em PMEs e agro. ROAE de 16,3% é queda vs. 2023 (20,1%), mas estrutural — base de capital crescendo. NPL total de 2,4% é menos da metade da média SFN. Risco: concentração agro (40% da carteira) exposta a clima e preços de commodities.",
    mudancas_atendimento:"103 cooperativas após fusão estratégica; maior repassador BNDES; Global SME Finance Awards (PME do Ano + Melhor para Mulheres Empreendedoras); Portfólio ESG com categorias específicas para MPMEs"
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"sicredi", periodo:"1T25", ano:2025, tri:1,
    kpis:{
      sobras_bi:       1.465,  // DFC Mar/2025 confirmado
      roe_pct:         16.3,   // ROAE anualizado no gráfico da apresentação
      carteira_bi:     264.4,
      carteira_pj_bi:  85.9,
      carteira_agro_bi:103.1,
      npl_total_pct:   3.0,    // Série histórica Apresentação 4T25 / 1T26
      npl_pj_pct:      3.1,
      depositos_bi:    275.5,
      cooperados_mm:   9.0,
    },
    highlights:[
      "Associados chegam a 9MM — crescimento de +310k no trimestre",
      "Carteira PJ de R$ 85,9bi; ticket médio PJ R$ 44k; micro/pequenas = ~55% da PJ",
      "NPL sobe para 3,0% — início de ciclo de deterioração, ainda abaixo da média SFN (3,2%)",
      "Framework ESG: categoria 'Financiamento a MPMEs' — R$ 58,9bi em portfólio sustentável",
      "Maior repassador do BNDES — benefício econômico de R$ 25,5bi aos associados em 2024",
      "Presença em 233 municípios como única IF — referência em inclusão financeira"
    ],
    guidance:null,
    percepcao_mercado:"ROAE de 16,3% ainda competitivo mas pressão de NPL crescente. Sicredi mantém vantagem estrutural: modelo cooperativo devolve valor ao associado sem distribuir lucro a acionistas. Crescimento de base (+300k/trimestre) sustenta receita futura.",
    mudancas_atendimento:"Framework de Finanças Sustentáveis com categoria MPME; emissões ESG acumulam R$ 7,8bi; presença em 2.098 municípios (+2.900 pontos de atendimento); 103 cooperativas"
  },
  {
    banco_id:"sicredi", periodo:"2T25", ano:2025, tri:2,
    kpis:{
      sobras_bi:       2.100,  // Estimado: acum. 1S25=5.178bi (gráfico) − 1T25=1.465bi
      roe_pct:         17.9,   // ROAE acumulado 1S25 (gráfico apresentação)
      carteira_bi:     268.3,
      carteira_pj_bi:  88.3,
      carteira_agro_bi:102.5,
      npl_total_pct:   3.3,
      npl_pj_pct:      3.5,
      depositos_bi:    289.9,
      cooperados_mm:   9.3,
    },
    highlights:[
      "Sobras 1S25 de R$ 5,178bi — crescimento de ~68% vs 1S24 (R$ 3,075bi)",
      "Carteira PJ atinge R$ 88,3bi; mix PJ estável em ~39% do total",
      "9,3MM associados — +300k no trimestre mantendo ritmo",
      "NPL PJ: 3,5% (vs 3,1% em 1T25) — deterioração acelerada no segmento empresarial"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:"2.126 municípios com presença física; +2.900 pontos de atendimento"
  },
  {
    banco_id:"sicredi", periodo:"3T25", ano:2025, tri:3,
    kpis:{
      sobras_bi:       3.561,  // Estimado: acum. 9M25=8.739bi − 1S25=5.178bi (inclui reversão)
      roe_pct:         15.8,   // ROAE acumulado 9M (gráfico apresentação)
      carteira_bi:     277.3,
      carteira_pj_bi:  89.6,
      carteira_agro_bi:107.6,
      npl_total_pct:   3.9,
      npl_pj_pct:      3.6,
      depositos_bi:    300.9,
      cooperados_mm:   9.6,
    },
    highlights:[
      "Carteira Agro: R$ 107,6bi — crescimento com safra 2025/26",
      "NPL total atinge 3,9% — próximo à média SFN (3,9%), perdendo diferencial histórico",
      "9,6MM associados; 102 cooperativas (1 fusão no trimestre)",
      "+3.000 pontos de atendimento atingidos; presença em 2.156 municípios",
      "Resultado 9M25 = R$ 8,739bi — aceleração por reversão de provisões vs 9M24"
    ],
    guidance:null,
    percepcao_mercado:"NPL convergindo para a média SFN pela primeira vez — perde diferencial histórico de qualidade. Carteira agro continua crescendo mas safra 24/25 com revisão de preços impacta capacidade de pagamento no setor.",
    mudancas_atendimento:"102 cooperativas; municípios únicos: 238; colaboradores +50 mil"
  },
  {
    banco_id:"sicredi", periodo:"4T25", ano:2025, tri:4,
    kpis:{
      sobras_bi:       -1.198, // 4T25 isolado negativo: resultado 2025=7.541bi − 9M25=8.739bi
      roe_pct:         15.9,   // ROAE anual 2025
      carteira_bi:     288.0,
      carteira_pj_bi:  92.4,
      carteira_agro_bi:113.4,
      npl_total_pct:   4.0,
      npl_pj_pct:      3.7,
      depositos_bi:    308.3,
      cooperados_mm:   9.8,
    },
    highlights:[
      "Resultado 2025: R$ 7,541bi (vs R$ 6,666bi em 2024, +13%)",
      "4T25 isolado: -R$ 1,198bi — provisão extraordinária de R$ 7,171bi no trimestre",
      "Carteira PJ: R$ 92,4bi (+11,5% a/a); Agro: R$ 113,4bi (+12,7% a/a)",
      "NPL: 4,0% total; PF em 5,9% (pico) — pressão crescente em pessoas físicas",
      "100 cooperativas — fusões estratégicas reduzem complexidade operacional",
      "9,8MM associados; ativos de R$ 454,7bi (7ª maior IF em ativos no Brasil)"
    ],
    guidance:null,
    percepcao_mercado:"Provisão maciça de R$ 7bi no 4T25 foi preventiva — cobertura ajusta para ~197%. Sinaliza que a qualidade da carteira PF piora mais rápido do que o esperado. Resultado anual ainda positivo mas a deterioração levanta questão sobre ritmo de crescimento vs. capacidade de crédito.",
    mudancas_atendimento:"100 cooperativas; 2.209 municípios com presença física; 236 municípios como única IF; colaboradores: +50 mil"
  },

  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"sicredi", periodo:"1T26", ano:2026, tri:1,
    kpis:{
      sobras_bi:       1.721,  // DFC Mar/2026 confirmado: R$ 1.720.996 mil
      roe_pct:         17.4,   // ROAE no gráfico da Apresentação 1T26
      carteira_bi:     294.3,
      carteira_pj_bi:  94.9,
      carteira_agro_bi:116.1,
      npl_total_pct:   4.3,
      npl_pj_pct:      3.3,
      depositos_bi:    318.6,
      cooperados_mm:   10.2,  // 10.156.951 associados em 31/03/2026 (DFC)
    },
    highlights:[
      "Marco histórico: 10MM de associados superado — 10,156MM em Mar/26",
      "Sobras 1T26: R$ 1,721bi (+17,4% vs 1T25) — recuperação após provisão 4T25",
      "ROAE volta para 17,4% — acima do 4T25 (15,9%)",
      "Carteira PJ: R$ 94,9bi (+10,6% a/a); Agro: R$ 116,1bi",
      "NPL total 4,3% (vs 4,0% em 4T24) — ainda deteriorando mas desacelerando em PJ (3,3%)",
      "Ativos: R$ 469,6bi (+15,5% a/a); Basileia 20,2% — capital robusto"
    ],
    guidance:null,
    percepcao_mercado:"Recuperação do resultado no 1T26 após provisão do 4T25 é positivo. 10MM de associados é marco de penetração no Brasil. NPL PF ainda preocupa (4,6% no gráfico). Carteira PJ com NPL de 3,3% mostra estabilização — possível pico no ciclo de deterioração.",
    mudancas_atendimento:"100 cooperativas; 2.191 municípios com presença física; 237 municípios como única IF; +3.000 pontos de atendimento; ticket médio PJ R$ 45k"
  }
];

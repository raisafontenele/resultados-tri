// quarters.js — dados quantitativos trimestrais Bradesco
// Fontes: Apresentações de Resultados e Informativos Trimestrais (PDFs lidos)
// Campos null = não divulgados / não lidos ainda
// npl_mpme_15_pct = inadimplência TOTAL (todos segmentos) 15-90 dias (nota rodapé Apresentações)
// npl_mpme_90_pct = inadimplência MPME acima de 90 dias (gráfico "por segmento")
// ATENÇÃO: NPL MPME 90 lido das Apresentações contemporâneas de cada trimestre.
//   Pode diferir de séries históricas em Apresentações posteriores (restatements de metodologia).

window.QUARTERS_DATA = [

  // ── 2022 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"bradesco", periodo:"1T22", ano:2022, tri:1,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   74.8,         // Informativo 1T22
      carteira_mpme_bi:    167.6,        // Apresentação 1T22 p.4 (nota: -R$7bi migração PME→GE)
      npl_mpme_90_pct:     3.2,          // Apresentação 1T22 p.7 — série "Micro, Peq. e Médias"
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         27.7,         // Estimado: MFB(15.8)+Serviços(8.6)+Seguros(3.3)
      lucro_bi:            6.821,        // Informativo 1T22
      roae_pct:            18.0,
      eficiencia_pct:      45.6,         // IEO acumulado 12M (Informativo 1T22)
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"2T22", ano:2022, tri:2,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   75.5,
      carteira_mpme_bi:    170.7,        // Apresentação 2T22 p.4
      npl_mpme_90_pct:     3.9,          // Apresentação 2T22 p.5 — "Inadimplência >90d"
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         29.6,         // Estimado: MFB(16.9)+Serviços(9.0)+Seguros(3.7)
      lucro_bi:            7.041,
      roae_pct:            18.1,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"3T22", ano:2022, tri:3,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   76.8,
      carteira_mpme_bi:    174.6,        // Apresentação 3T22 p.4
      npl_mpme_90_pct:     4.8,          // Apresentação 3T22 p.5 — "Inadimplência >90d"
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         29.8,         // Estimado: MFB(17.5)+Serviços(8.9)+Seguros(3.5)
      lucro_bi:            5.223,
      roae_pct:            13.0,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"4T22", ano:2022, tri:4,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   77.1,
      carteira_mpme_bi:    176.2,        // Apresentação 4T22 p.5
      npl_mpme_90_pct:     5.3,          // Apresentação 4T22 p.7 + série histórica 1T23
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         31.0,         // Estimado: MFB(17.5)+Serviços(9.3)+Seguros(4.3)
      lucro_bi:            1.595,        // Impacto provisão R$4,85bi (cliente Atacado)
      roae_pct:            13.1,         // Acumulado 2022
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"bradesco", periodo:"1T23", ano:2023, tri:1,
    kpis:{
      clientes_pme_mil:    1700,         // Apresentação 1T23: "1,7MM PMEs" (PJ total: 1,8MM)
      clientes_total_mm:   76.7,
      carteira_mpme_bi:    174.1,        // Informativo 1T23
      npl_mpme_90_pct:     6.2,          // Apresentação 1T23 p.17 — série MPME >90d
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         29.1,         // Estimado: MFB(16.7)+Serviços(8.7)+Seguros(3.7)
      lucro_bi:            4.28,
      roae_pct:            10.6,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"2T23", ano:2023, tri:2,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   72.0,
      carteira_mpme_bi:    167.7,        // Informativo 2T23
      npl_mpme_90_pct:     7.0,          // Apresentação 2T23 p.16 — série MPME >90d
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         30.2,         // Estimado: MFB(16.6)+Serviços(8.8)+Seguros(4.8)
      lucro_bi:            4.518,
      roae_pct:            11.1,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"3T23", ano:2023, tri:3,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   71.7,
      carteira_mpme_bi:    165.0,        // Informativo 3T23
      npl_mpme_90_pct:     7.2,          // Apresentação 3T23 p.16 — série MPME >90d (pico)
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         29.6,         // Estimado: MFB(15.9)+Serviços(9.1)+Seguros(4.6)
      lucro_bi:            4.621,
      roae_pct:            11.3,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"4T23", ano:2023, tri:4,
    kpis:{
      clientes_pme_mil:    1700,         // Plano Estratégico 4T23: "1,7MM clientes SME"
      clientes_total_mm:   71.1,
      carteira_mpme_bi:    167.6,        // Informativo 4T23
      npl_mpme_90_pct:     5.1,          // Apresentação 4T23 (queda pós-limpeza de carteira)
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         null,
      lucro_bi:            2.878,        // Reforço de PDD Americanas+portfólio
      roae_pct:            10.0,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:"Carteira 7–11%; MF 3–7%; Serviços 2–6%; Despesas 5–9%; Seguros 4–8%",
    percepcao_mercado:"", mudancas_atendimento:""
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"bradesco", periodo:"1T24", ano:2024, tri:1,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   71.0,
      carteira_mpme_bi:    171.7,        // Apresentação 1T24 (segmento "SME")
      npl_mpme_90_pct:     6.4,          // Apresentação 1T24 — gráfico NPL por segmento
      npl_mpme_15_pct:     4.1,          // Apresentação 1T25 nota (1): "4,1% em Mar24"
      tpv_cartoes_bi:      null,
      receitas_bi:         28.1,         // Apresentação 1T26 p.3 (chart histórico)
      lucro_bi:            4.20,
      roae_pct:            10.2,
      eficiencia_pct:      51.1,         // Apresentação 1T24 — IEO trimestral
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"2T24", ano:2024, tri:2,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    184.1,        // Apresentação 2T24
      npl_mpme_90_pct:     5.4,          // Apresentação 2T24 — gráfico NPL MPME
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         29.7,         // Apresentação 1T26 p.3
      lucro_bi:            4.70,
      roae_pct:            11.4,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"3T24", ano:2024, tri:3,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    193.2,        // Apresentação 3T24
      npl_mpme_90_pct:     5.2,          // Apresentação 3T24 — gráfico NPL MPME
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         31.1,         // Apresentação 1T26 p.3
      lucro_bi:            5.20,
      roae_pct:            12.4,
      eficiencia_pct:      52.0,         // Apresentação 3T24 — IEO trimestral
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"bradesco", periodo:"4T24", ano:2024, tri:4,
    kpis:{
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    214.9,        // Apresentação 4T24
      npl_mpme_90_pct:     4.4,          // Apresentação 4T24 — gráfico NPL MPME
      npl_mpme_15_pct:     3.4,          // Apresentação 1T25 nota (1): "3,4% em Dez24"
      tpv_cartoes_bi:      null,
      receitas_bi:         32.9,         // Apresentação 1T26 p.3
      lucro_bi:            5.40,
      roae_pct:            12.7,
      eficiencia_pct:      53.2,         // Apresentação 4T24 — IEO trimestral
      depositos_bi:        null,
      agencias_emp_neg:    null
    },
    highlights:[], guidance:"Crédito 8,5–10,5%; Serviços 3–5%; Despesas 6–8%; Seguros 6–8%",
    percepcao_mercado:"", mudancas_atendimento:""
  },

  // ── 2025 — lidos dos PDFs ─────────────────────────────────────────────────
  {
    banco_id: "bradesco",
    periodo: "1T25",
    ano: 2025, tri: 1,
    kpis: {
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    222.5,        // Apresentação 1T25 p.4
      npl_mpme_90_pct:     4.1,          // Apresentação 1T25 e 1T26 p.6 (Mar25)
      npl_mpme_15_pct:     3.4,          // Apresentação 1T25 p.6 nota (1)
      tpv_cartoes_bi:      null,
      receitas_bi:         32.4,         // Apresentação 1T26 p.3 (revisado)
      lucro_bi:            5.86,
      roae_pct:            14.4,
      eficiencia_pct:      49.7,         // Apresentação 1T25 p.8 — IEO trimestral
      depositos_bi:        null,
      agencias_emp_neg:    150
    },
    highlights: [
      "Lucro +39,3% a/a — melhor 1T desde 2021",
      "Carteira de crédito expandida supera R$ 1 trilhão pela 1ª vez",
      "150 novas agências Empresas & Negócios abertas em 2024",
      "Bradesco Principal lançado com ~50 mil clientes",
      "MPME crescendo +29,6% YoY; NPL MPME 90 caindo 110bps a/a",
      "1.400 pessoas internalizadas em tecnologia no trimestre"
    ],
    guidance: "Crédito 4–8%; MFL R$37–41bi; Serviços 4–8%; Despesas 5–9%; Seguros 6–10%",
    percepcao_mercado: "Trimestre de virada: lucro +39% YoY confirma turnaround. Carteira trilhão marca simbólica. ROAE de 14,4% ainda abaixo do custo de capital mas trajetória ascendente é consistente. SME liderando crescimento com NPL em queda.",
    mudancas_atendimento: "Lançamento Bradesco Principal (novo segmento afluente); App Empresas & Negócios com jornada MEI; BIA GenAI com 100% dos primeiros atendimentos via IA; Bradesco Expresso em 100% dos municípios brasileiros"
  },
  {
    banco_id: "bradesco",
    periodo: "2T25",
    ano: 2025, tri: 2,
    kpis: {
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    230.5,        // Apresentação 2T25: +3,6% t/t, +25,2% a/a
      npl_mpme_90_pct:     4.1,          // Série 1T26 Apresentação p.6 (Jun25)
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         34.1,         // Apresentação 1T26 p.3
      lucro_bi:            6.1,
      roae_pct:            14.6,
      eficiencia_pct:      49.9,         // Apresentação 2T25 — IEO trimestral
      depositos_bi:        null,
      agencias_emp_neg:    150
    },
    highlights: [
      "Lucro +28,6% a/a — 6º trimestre consecutivo de crescimento",
      "Receitas +15,1% a/a com crescimento em todas as linhas",
      "Carteira expandida +11,7% a/a; linhas com garantia passam de 57% para 58,5%",
      "Ajuste de footprint: -1.536 pontos de atendimento vs Jun24",
      "Cielo integrada via mais antecipação de recebíveis para SMEs",
      "App Empresas & Negócios: 90% dos MEIs migrados ativos 7-10x/semana"
    ],
    guidance: "Crédito 6,5–9,5%; Serviços 5–8% (revisado); Despesas 6–8%; Seguros 7–9% (revisado)",
    percepcao_mercado: "Aceleração visível de receitas impulsiona ROAE. Eficiência em captações e mix de crédito sustentam expansão de spread. Ponto de atenção: footprint em ajuste acelerado pode comprometer presença em municípios menores dependentes de agências.",
    mudancas_atendimento: "Bradesco Principal com 7 novos escritórios; mais serviços para SMEs via Cielo; App Empresas & Negócios com iOS lançado (Ago/25); novo sistema de gestão de caixa para PMEs; programa SOU Bradesco de evolução cultural em implementação"
  },
  {
    banco_id: "bradesco",
    periodo: "3T25",
    ano: 2025, tri: 3,
    kpis: {
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    241.1,        // Apresentação 3T25: +4,6% t/t, +24,8% a/a
      npl_mpme_90_pct:     3.7,          // Série 1T26 Apresentação p.6 (Set25 — mínimo recente)
      npl_mpme_15_pct:     null,
      tpv_cartoes_bi:      null,
      receitas_bi:         35.1,         // Apresentação 1T26 p.3
      lucro_bi:            6.2,
      roae_pct:            14.7,
      eficiencia_pct:      50.1,         // Apresentação 3T25 — IEO trimestral
      depositos_bi:        null,
      agencias_emp_neg:    150
    },
    highlights: [
      "Lucro +18,8% a/a — 7º trimestre consecutivo de crescimento",
      "NPL MPME em mínimo histórico recente: 3,7% (melhora de 90bps em 12M)",
      "Bradesco Principal com 41 escritórios em 2025; Prime para 3M+ clientes",
      "Meta ESG de R$ 350bi em negócios sustentáveis: atingida em Set/25",
      "Produtividade em desenvolvimento de TI: +109% vs 2023",
      "39,2 mil correspondentes Bradesco Expresso; Cielo integrada no equipamento"
    ],
    guidance: "Crédito 7–9,5%; Serviços 5–8%; Despesas 6–8%; Seguros 8–10%",
    percepcao_mercado: "ROAE superando 14% de forma consistente. NPL MPME em 3,7% é destaque positivo — menor nível desde expansão SME. Spread bruto subindo para 9,0% mostra eficiência de captação. Risco: desaceleração QoQ de MPME com GE em -3,5% YoY.",
    mudancas_atendimento: "Plataforma cloud para gestão financeira de PMEs integrada à BIA; Pix Agendado Recorrente; consignado privado 24x7 pelo app; nova segmentação PF (Private/Principal/Prime/Varejo Digital); ajuste de footprint de -1.603 pontos vs Set24"
  },
  {
    banco_id: "bradesco",
    periodo: "4T25",
    ano: 2025, tri: 4,
    kpis: {
      clientes_pme_mil:    null,
      clientes_total_mm:   null,
      carteira_mpme_bi:    248.9,        // Estimado: 254.6 / 1.023 (1T26: +2,3% t/t declarado)
      npl_mpme_90_pct:     3.8,          // Apresentação 1T26 p.6 (Dez25)
      npl_mpme_15_pct:     3.45,         // Apresentação 1T26 p.6 nota (1)
      tpv_cartoes_bi:      null,
      receitas_bi:         36.1,         // Apresentação 1T26 p.3
      lucro_bi:            6.5,
      roae_pct:            15.2,
      eficiencia_pct:      null,
      depositos_bi:        null,
      agencias_emp_neg:    150
    },
    highlights: [
      "Lucro 2025 total: R$ 24,7bi (+26,1% a/a)",
      "ROAE 15,2% supera custo de capital pela 1ª vez no ciclo de turnaround",
      "Bradesco ganha +2,3p.p. de market share em crédito SME desde Dez23",
      "19+ milhões de clientes fully digital (+47% vs 4T25)",
      "4 milhões de upgrades para clientes afluentes (Principal + Prime)",
      "Payout 2025: R$ 14,5bi (62% bruto — acima dos 30% do estatuto)"
    ],
    guidance: "Crédito 8,5–10,5%; Serviços 3–5%; Despesas 6–8%; Seguros 6–8%",
    percepcao_mercado: "Ano de consolidação do turnaround. ROAE supera custo de capital pela primeira vez desde a crise de inadimplência. SME como alavanca principal: +2,3pp de MS desde Dez23. Desafio 2026: manter momentum com Selic alta comprimindo spreads e NPL MPME levemente pressionado.",
    mudancas_atendimento: "Tap Bradesco PJ (celular como maquininha); Bradesco Principal com 62 escritórios em 38 cidades; Bank of the Year 2025 (The Banker); 4 trilhões de capacidade tecnológica (3x base 2023)"
  },
  {
    banco_id: "bradesco",
    periodo: "1T26",
    ano: 2026, tri: 1,
    kpis: {
      clientes_pme_mil:    null,
      clientes_total_mm:   74.3,
      carteira_mpme_bi:    254.6,
      npl_mpme_90_pct:     4.0,          // Apresentação 1T26 p.6 (Mar26)
      npl_mpme_15_pct:     3.66,         // Apresentação 1T26 p.6 nota (1)
      tpv_cartoes_bi:      95.1,
      receitas_bi:         36.9,
      lucro_bi:            6.8,
      roae_pct:            15.8,
      eficiencia_pct:      46.9,
      depositos_bi:        752,
      agencias_emp_neg:    150
    },
    highlights: [
      "Nono trimestre consecutivo de crescimento do lucro",
      "Carteira MPMEs +14,4% YoY; #1 em FGI/FGO com 20,6% de share (carteira +81% YoY)",
      "99% das transações em canais digitais; ~28M clientes fully digital (+47% vs 4T25)",
      "Bradesco Expresso: 39,3 mil correspondentes, 193 mil contas/trimestre",
      "Empresarial Flexível Coletivo: seguro PME para 3 a 500 vidas",
      "Bradsaúde estreia na B3 (SAUD3) em maio/26 — libera capital para SME"
    ],
    guidance: "Crédito 8,5–10,5%; Serviços 3–5%; Despesas 6–8%; Seguros 6–8%",
    percepcao_mercado: "Forte em SME crescendo +14% YoY acima dos pares, ancorado em FGI/FGO (+81% YoY). Porém desacelerou QoQ (-2,3%) e NPL subiu 20bps. Capital pós-BradSaúde pode ser alavanca para reacelerar SME. Monitoramento mais próximo de crédito necessário.",
    mudancas_atendimento: "APP Empresas & Negócios com EasyTrade (câmbio e derivativos digitais); Cielo integrada à base de correspondentes Bradesco Expresso; Pix Inteligente no WhatsApp com IA conversacional; Premio The Banker Technology Awards 2026 (Global + LatAm + AI + Mobile)"
  }
];

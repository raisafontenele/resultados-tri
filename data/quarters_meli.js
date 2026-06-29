// quarters_meli.js — dados trimestrais Mercado Livre / Mercado Pago
// Fonte: Investor Presentations e Earnings Call Transcripts (2024-2026)
// ATENÇÃO: MELI reporta em USD. Todos os valores financeiros estão em USD.
// Escopo das métricas:
//   (Global) = consolidado MELI globalmente (Brasil + México + Argentina + outros)
//   (BR)     = Brasil especificamente
//   (MP)     = Mercado Pago — vertical fintech (crédito, MAU, AUM, TPV acquiring)
//
// receita_usd_bi   = Net Revenue Total (Global, USD bi)
// netincome_usd_mm = Net Income (Global, USD mn)
// ifo_usd_mm       = Income from Operations (Global, USD mn)
// ifo_margin_pct   = IFO Margin (Global, %)
// gmv_usd_bi       = GMV Total (Global, USD bi)
// credit_usd_bi    = Carteira de Crédito (MP/Global, USD bi) — principal métrica PME
// mau_mm           = Fintech Monthly Active Users (MP/Global, MM)
// aum_usd_bi       = Assets Under Management (MP/Global, USD bi)
// tpv_usd_bi       = Acquiring TPV (Global, USD bi)
// npl_90_pct       = NPL >90 dias sobre carteira total (MP/Global, %)
// npl_1590_pct     = NPL 15-90 dias sobre carteira total (MP/Global, %)
// nimal_pct        = Net Interest Margin After Losses (MP/Global, %)
// receita_br_usd_bi= Receita total Brasil (BR, USD bi)

window.QUARTERS_DATA_MELI = [

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"mercadopago", periodo:"1T24", ano:2024, tri:1,
    kpis:{
      receita_usd_bi:    4.333,   // Global — Net Revenue reported basis
      netincome_usd_mm:  344,     // Global — 7.9% margin
      ifo_usd_mm:        528,     // Global
      ifo_margin_pct:    12.2,    // Global
      gmv_usd_bi:        11.4,    // Global
      credit_usd_bi:     4.448,   // MP/Global — +46% YoY; crédito card fastest (+132%)
      mau_mm:            49.0,    // MP/Global — +38% YoY
      aum_usd_bi:        5.533,   // MP/Global — +90% YoY
      tpv_usd_bi:        30.6,    // MP/Global — Acquiring TPV
      npl_90_pct:        9.3,     // MP/Global — % do portfólio total
      npl_1590_pct:      17.9,    // MP/Global
      nimal_pct:         31.5,    // MP/Global
      receita_br_usd_bi: null,    // BR — não capturado para 1T24
    },
    highlights:[
      "Carteira de crédito atinge US$4,4bi (+46% a/a) — cartão de crédito lidera (+132%)",
      "Fintech MAU: 49MM (+38% a/a) — crescimento acelerado em Brasil, México e Argentina",
      "AUM cresce 90% a/a para US$5,5bi — conta remunerada como tração principal",
      "Acquiring TPV Brasil FX-neutro +47% a/a; México +49% a/a",
      "GMV Brasil FX-neutro +30% a/a — um dos mais fortes desde 2021"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"mercadopago", periodo:"2T24", ano:2024, tri:2,
    kpis:{
      receita_usd_bi:    5.073,   // Global — +42% YoY
      netincome_usd_mm:  531,     // Global — 10.5% (maior desde Q1'17)
      ifo_usd_mm:        726,     // Global — 14.3% margin
      ifo_margin_pct:    14.3,    // Global
      gmv_usd_bi:        12.6,    // Global
      credit_usd_bi:     4.904,   // MP/Global — +51% YoY; cartão +146%
      mau_mm:            52.0,    // MP/Global — +37% YoY; passou 50MM MAU
      aum_usd_bi:        6.615,   // MP/Global — +86% YoY
      tpv_usd_bi:        46.3,    // MP/Global — Acquiring TPV
      npl_90_pct:        8.2,     // MP/Global
      npl_1590_pct:      18.5,    // MP/Global
      nimal_pct:         31.1,    // MP/Global
      receita_br_usd_bi: 2.786,   // BR — +51% YoY vs 2T23 (US$1,84bi)
    },
    highlights:[
      "Receita Global US$5,1bi (+42% a/a) — Lucro Líquido dobrou a/a para US$531mn",
      "Fintech MAU ultrapassa 50MM pela 1ª vez — marco histórico do Mercado Pago",
      "GMV Brasil cresceu 36% a/a — maior crescimento desde 2021 (FX-neutro +59%)",
      "Cartão de crédito: +146% a/a no portfólio — 1,6MM novos cartões emitidos no trimestre",
      "Receita Brasil US$2,8bi (+51% a/a) — Brasil representa ~55% da receita total"
    ],
    guidance:null,
    percepcao_mercado:"Lucro líquido mais que dobrou a/a com margem de 10.5% — melhor desde 2017. Crédito acelerando com asset quality estável. Brasil e México são os motores do crescimento.",
    mudancas_atendimento:"Lançamento de fulfillment center nos EUA (Texas) para cross-border; robôs no centro de distribuição Cajamar (SP)"
  },
  {
    banco_id:"mercadopago", periodo:"3T24", ano:2024, tri:3,
    kpis:{
      receita_usd_bi:    5.312,   // Global — +35% YoY
      netincome_usd_mm:  397,     // Global — 7.5% margin
      ifo_usd_mm:        557,     // Global — 10.5% margin
      ifo_margin_pct:    10.5,    // Global
      gmv_usd_bi:        12.9,    // Global
      credit_usd_bi:     6.016,   // MP/Global — +77% YoY; cartão +172%
      mau_mm:            56.2,    // MP/Global — +35% YoY
      aum_usd_bi:        7.966,   // MP/Global — +93% YoY
      tpv_usd_bi:        50.7,    // MP/Global — +34% YoY
      npl_90_pct:        7.8,     // MP/Global
      npl_1590_pct:      17.9,    // MP/Global
      nimal_pct:         24.2,    // MP/Global — compressão por mix cartão
      receita_br_usd_bi: 2.913,   // BR — +41% YoY vs 3T23 (US$2,06bi)
    },
    highlights:[
      "Carteira crédito acelera para +77% a/a (US$6,0bi) — cartão de crédito +172% a/a",
      "Unique buyers crescem 21% a/a — ritmo mais rápido desde Q2'21",
      "Acquiring TPV atinge US$50,7bi (+34% a/a) — Brasil e México lideram em FX-neutro",
      "Receita Brasil US$2,9bi (+41% a/a) — maior mercado da MELI consolida liderança",
      "NIMAL comprime para 24,2% por maior mix de cartão de crédito (produto de menor spread)"
    ],
    guidance:null,
    percepcao_mercado:"IFO comprimido a/a por crescimento acelerado da carteira de crédito com maior bad debt. Estratégia deliberada de crescimento com manutenção de qualidade. GMV Brasil acelerando.",
    mudancas_atendimento:"'Move upmarket' em Brasil — foco em lojistas maiores; SLOW shipments para eficiência logística; robótica em Cajamar já operando"
  },
  {
    banco_id:"mercadopago", periodo:"4T24", ano:2024, tri:4,
    kpis:{
      receita_usd_bi:    6.059,   // Global — commerce $3,554mn + fintech $2,505mn
      netincome_usd_mm:  639,     // Global — 10.5% margin
      ifo_usd_mm:        820,     // Global — 13.5% margin (recorde trimestral)
      ifo_margin_pct:    13.5,    // Global
      gmv_usd_bi:        null,    // Global — não capturado
      credit_usd_bi:     6.573,   // MP/Global — +74% YoY
      mau_mm:            61.2,    // MP/Global — +34% YoY; passou 60MM MAU
      aum_usd_bi:        10.581,  // MP/Global — +129% YoY
      tpv_usd_bi:        41.9,    // MP/Global — +20% YoY
      npl_90_pct:        7.4,     // MP/Global
      npl_1590_pct:      17.5,    // MP/Global
      nimal_pct:         27.6,    // MP/Global — melhora sequencial por sazonalidade
      receita_br_usd_bi: null,    // BR — não capturado
    },
    highlights:[
      "Recorde de IFO e Lucro Líquido trimestral — US$820mn e US$639mn respectivamente",
      "AUM ultrapassa US$10bi (+129% a/a) — conta remunerada como ancora de principalidade",
      "Fintech MAU passa 60MM pela 1ª vez (+34% a/a)",
      "2024: 5,9MM novos cartões de crédito emitidos — portfólio de cartão mais que dobrou no ano",
      "Buying TPV +20% a/a a US$41,9bi; 24,6% dos lojistas ativos usam crédito do MP"
    ],
    guidance:null,
    percepcao_mercado:"Trimestre recorde. AUM dobrou mais que o esperado; cartão de crédito como veículo de principalidade do ecossistema. Compressão de take rate fintech por 'move upmarket' em Brasil é preocupação estrutural.",
    mudancas_atendimento:"100MM compradores únicos no marketplace pela 1ª vez; Mercado Pago como maior banco digital emergente em LatAm"
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"mercadopago", periodo:"1T25", ano:2025, tri:1,
    kpis:{
      receita_usd_bi:    5.935,   // Global — commerce $3,303mn + fintech $2,632mn
      netincome_usd_mm:  494,     // Global — 8.3% margin
      ifo_usd_mm:        763,     // Global — 12.9% margin
      ifo_margin_pct:    12.9,    // Global
      gmv_usd_bi:        null,    // Global — não capturado
      credit_usd_bi:     7.780,   // MP/Global — +75% YoY
      mau_mm:            64.3,    // MP/Global — +31% YoY
      aum_usd_bi:        11.227,  // MP/Global — +103% YoY
      tpv_usd_bi:        40.3,    // MP/Global — +32% YoY
      npl_90_pct:        8.2,     // MP/Global
      npl_1590_pct:      18.0,    // MP/Global
      nimal_pct:         22.7,    // MP/Global
      receita_br_usd_bi: null,    // BR — não capturado
    },
    highlights:[
      "Carteira crédito US$7,8bi (+75% a/a) — NPL do cartão de crédito no Brasil atinge mínima histórica",
      "Fintech MAU 64,3MM (+31% a/a) — usuários ativos crescendo a ritmo de startup",
      "AUM US$11,2bi (+103% a/a) — cada vez mais usuários mantêm saldo no Mercado Pago",
      "Argentina recuperação: receitas em USD mais que dobraram a/a após estabilização macro",
      "Frete grátis com threshold reduzido em Brasil — acelerador de GMV e novos compradores"
    ],
    guidance:null,
    percepcao_mercado:"Crescimento da receita em ritmo pré-pandemia (+73% FXN). Argentina sendo a grande surpresa positiva. Cartão de crédito com melhor qualidade de crédito reforça o modelo de underwriting baseado em dados transacionais.",
    mudancas_atendimento:"Redução do threshold de frete grátis em Brasil pela 2ª vez; expansão do cartão em México e Argentina"
  },
  {
    banco_id:"mercadopago", periodo:"2T25", ano:2025, tri:2,
    kpis:{
      receita_usd_bi:    6.6,     // Global — aprox. +30% a/a sobre 2T24 ($5.07bi); IFO $825mn a ~12.5% → ~$6.6bi
      netincome_usd_mm:  null,    // Global — não divulgado na fonte disponível
      ifo_usd_mm:        825,     // Global — recorde histórico (divulgado no transcript 2T25)
      ifo_margin_pct:    null,    // Global
      gmv_usd_bi:        null,    // Global
      credit_usd_bi:     9.3,     // MP/Global — +91% a/a (divulgado no transcript)
      mau_mm:            68.0,    // MP/Global (divulgado no transcript)
      aum_usd_bi:        13.2,    // MP/Global — aprox. "mais que dobrou a/a" vs 2T24 ($6.6bi)
      tpv_usd_bi:        null,    // Global — não capturado
      npl_90_pct:        null,    // Global — não divulgado; 15-90d caiu abaixo de 7%
      npl_1590_pct:      6.8,     // MP/Global — "below 7% for the first time" (transcript 2T25)
      nimal_pct:         null,    // Global — "broadly stable q/q" (transcript)
      receita_br_usd_bi: null,    // BR
    },
    highlights:[
      "IFO recorde histórico US$825mn — crescimento +13,7% a/a; IFO cresce mais que receita",
      "Carteira crédito US$9,3bi (+91% a/a) — crescimento acelerado mantendo qualidade",
      "NPL 15-90 dias cai abaixo de 7% pela 1ª vez — validação dos modelos de underwriting",
      "Fintech MAU: 68MM — usuários de alta frequência crescendo mais rápido que a média",
      "AUM mais que dobrou a/a — principalidade financeira se aprofundando",
      "Redução do threshold de frete grátis em Brasil (3ª vez em 5 anos) — acelerou GMV em junho"
    ],
    guidance:null,
    percepcao_mercado:"IFO recorde com NPL melhorando sugere ponto de inflexão: escala gerando eficiência sem comprometer qualidade. Frete grátis como alavanca de GMV Brasil está funcionando.",
    mudancas_atendimento:"3ª redução do threshold de frete grátis em Brasil; integração com Google Manager para publicidade"
  },
  {
    banco_id:"mercadopago", periodo:"3T25", ano:2025, tri:3,
    kpis:{
      receita_usd_bi:    7.4,     // Global — aprox. +39% a/a sobre 3T24 ($5.31bi) — transcript 3T25
      netincome_usd_mm:  null,    // Global
      ifo_usd_mm:        null,    // Global
      ifo_margin_pct:    null,    // Global
      gmv_usd_bi:        null,    // Global
      credit_usd_bi:     10.9,    // MP/Global — estimado entre 2T25 ($9.3bi) e 4T25 ($12.5bi)
      mau_mm:            73.0,    // MP/Global — aprox. +30% a/a sobre 3T24 (56,2MM)
      aum_usd_bi:        null,    // Global
      tpv_usd_bi:        null,    // Global
      npl_90_pct:        null,    // Global
      npl_1590_pct:      null,    // Global
      nimal_pct:         null,    // Global
      receita_br_usd_bi: null,    // BR
    },
    highlights:[
      "27º trimestre consecutivo com crescimento de receita acima de 30% a/a",
      "Receita global estimada ~US$7,4bi (+39% a/a) — liderança de mercado consolidada",
      "Frete grátis com threshold reduzido acelerou GMV Brasil: itens vendidos e compradores únicos em alta",
      "NPS do Mercado Pago atinge recorde histórico em Brasil — maior engajamento da base",
      "MAU acelera; custo de envio por unidade em Brasil cai 8% a/a com SLOW shipments"
    ],
    guidance:null,
    percepcao_mercado:"Consistência de crescimento acima de 30% por 27 trimestres consecutivos é excepcional. Brasil é o principal motor: redução de frete grátis criou ciclo virtuoso de volume + eficiência logística.",
    mudancas_atendimento:"'Slow deliveries' (SLOW shipments) gerando eficiência logística; AI em publicidade e na força de vendas de adquirência"
  },
  {
    banco_id:"mercadopago", periodo:"4T25", ano:2025, tri:4,
    kpis:{
      receita_usd_bi:    8.8,     // Global — aprox. +45% a/a sobre 4T24 ($6.06bi) — transcript 4T25
      netincome_usd_mm:  null,    // Global
      ifo_usd_mm:        null,    // Global
      ifo_margin_pct:    null,    // Global
      gmv_usd_bi:        null,    // Global; GMV Brasil +35% a/a; itens vendidos Brasil +45%
      credit_usd_bi:     12.5,    // MP/Global — "quase dobrou a/a"; divulgado transcript 4T25
      mau_mm:            79.0,    // MP/Global — aprox. +30% a/a sobre 4T24 (61,2MM)
      aum_usd_bi:        null,    // Global
      tpv_usd_bi:        null,    // Global; Acquiring TPV Brasil +25% a/a; México +50%
      npl_90_pct:        null,    // Global
      npl_1590_pct:      null,    // Global
      nimal_pct:         null,    // Global
      receita_br_usd_bi: null,    // BR
    },
    highlights:[
      "Receita global estimada ~US$8,8bi (+45% a/a) — ritmo mais forte desde 2022",
      "Carteira crédito US$12,5bi — quase dobrou a/a; solidez validada por modelos de IA",
      "GMV Brasil +35% a/a; itens vendidos Brasil +45% a/a — frete grátis como catalisador",
      "Acquiring TPV Brasil +25% a/a; México +50% a/a — IA identifica lojistas de alto valor",
      "AI assistant resolve 87% das interações de suporte — escala sem custo linear",
      "Mercado Pago NPS #1 em Brasil, México, Argentina e Chile — liderança de satisfação",
      "3MM novos cartões de crédito emitidos no trimestre"
    ],
    guidance:null,
    percepcao_mercado:"Crescimento de receita de 45% a/a é extraordinário para empresa deste tamanho. IA está acelerando receita em publicidade e adquirência. NPS #1 em 4 países é diferencial competitivo sustentável.",
    mudancas_atendimento:"IA em toda a operação: bidding de publicidade, força de vendas adquirência, atendimento ao cliente; cartão em Argentina em rollout"
  },

  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"mercadopago", periodo:"1T26", ano:2026, tri:1,
    kpis:{
      receita_usd_bi:    8.855,   // Global — derivado de IFO $611mn / 6.9% = ~$8.85bi; +49% a/a
      netincome_usd_mm:  null,    // Global — não divulgado na fonte disponível
      ifo_usd_mm:        611,     // Global — 6.9% margin; compressão por investimentos em crescimento
      ifo_margin_pct:    6.9,     // Global — deliberate investment mode
      gmv_usd_bi:        null,    // Global; GMV Brasil +38% a/a; itens vendidos +56%
      credit_usd_bi:     14.6,    // MP/Global — "quase dobrou a/a" — transcript 1T26
      mau_mm:            83.0,    // MP/Global — +29% a/a sobre 1T25 (64,3MM)
      aum_usd_bi:        19.9,    // MP/Global — +77% a/a sobre 1T25 ($11,2bi)
      tpv_usd_bi:        null,    // Global; Acquiring TPV cartão +90% a/a
      npl_90_pct:        null,    // Global
      npl_1590_pct:      null,    // Global
      nimal_pct:         null,    // Global
      receita_br_usd_bi: null,    // BR
    },
    highlights:[
      "Receita global +49% a/a (~US$8,9bi) — crescimento mais forte desde 2T22",
      "Carteira crédito US$14,6bi — quase dobrou a/a; expansão para Argentina em andamento",
      "GMV Brasil +38% a/a; itens vendidos +56% a/a — resultado da estratégia de frete grátis",
      "AUM US$19,9bi (+77% a/a) — Mercado Pago como conta bancária principal de 83MM usuários",
      "IFO de US$611mn (6,9%) reflete investimento deliberado em crescimento de longo prazo",
      "Cartão de crédito TPV +90% a/a; 2,7MM novos cartões — veículo de principalidade financeira",
      "Custo de envio por unidade em Brasil -17% a/a — escala gerando eficiência logística"
    ],
    guidance:"Investimento deliberado em crédito (Brasil, México, Argentina) e frete grátis como prioridades para 2026; sem guidance numérico formal",
    percepcao_mercado:"Margem IFO de 6,9% comprime em relação ao histórico — sinal de ciclo de investimento intenso. Escala do crédito (US$14,6bi) começa a se aproximar de bancos médios. Receita +49% mostra que o mercado endereçável é enorme e subatendido.",
    mudancas_atendimento:"Cartão de crédito em expansão para Argentina; fulfillment expandindo para capturar crescimento de e-commerce; IA em toda a jornada do lojista"
  },
];

// quarters_ifood.js — dados anuais iFood (via Prosus)
// Fonte: Prosus Annual Reports + Booklets + Deep Dives FY24, FY25, FY26
//
// ATENÇÃO: iFood não é listado. Dados vêm da Prosus (controladora ~59%).
// Período fiscal da Prosus: 1 abril a 31 março (FY = Financial Year).
//   FY24 = abril 2023 a março 2024
//   FY25 = abril 2024 a março 2025
//   FY26 = abril 2025 a março 2026
// Todos os valores em USD, exceto onde indicado BRL.
//
// receita_usd_bi      = Receita total iFood (USD bi) — food delivery + categorias + Pago
// aebitda_usd_mm      = aEBITDA iFood (USD mn) — adjusted EBITDA (métrica Prosus)
// aebit_usd_mm        = aEBIT iFood (USD mn)
// pedidos_bi          = Pedidos anuais totais (bilhões) — food + categorias + WhatsApp
// pedidos_mes_mm      = Pedidos mensais no final do período (MM/mês)
// compradores_mm      = Compradores únicos mensais no final do período (MM)
// pago_receita_usd_mm = Receita iFood Pago (fintech B2B+B2C, USD mn)
// pago_aum_usd_mm     = AUM crédito B2B iFood Pago (USD mn, restaurantes)
// gmv_crescimento_pct = Crescimento GMV food delivery (%, FX-neutro ex-M&A)
// categorias_gmv_pct  = Crescimento GMV categorias (grocery/pharma/conveniência, %)
// ads_gmv_pct         = Receita Ads como % do GMV total

window.QUARTERS_DATA_IFOOD = [

  // ── FY24 (abril 2023 — março 2024) ────────────────────────────────────────
  {
    banco_id:"ifood", periodo:"FY24", ano:2024, tri:1,
    kpis:{
      receita_usd_bi:       1.2,    // Prosus deep dive FY24 base
      aebitda_usd_mm:       147,    // FY25 booklet: "increased from US$147m to US$256m"
      aebit_usd_mm:         103,    // estimado: FY25 "mais que dobrou" de ~US$103m para US$226m
      pedidos_bi:           0.981,  // FY25 booklet: "29% from 981 million to 1.261 billion"
      pedidos_mes_mm:       100,    // aprox. out/23–dez/23 ~89-100MM/mês (Clube presentation)
      compradores_mm:       20,     // Clube presentation end of 2023: 20MM buyers
      pago_receita_usd_mm:  127,    // FY25 booklet: "from US$127m in FY24"
      pago_aebitda_usd_mm:  null,   // não divulgado separadamente para FY24
      pago_aebit_usd_mm:    null,   // não divulgado separadamente para FY24
      pago_aum_usd_mm:      574,    // FY25 booklet: "AuM from US$574m to US$921m"
      pago_aum_b2b_brl_bi:  null,   // não divulgado separadamente para FY24
      zoop_receita_brl_bi:  null,   // Zoop adquirida em FY25; receita não divulgada separadamente em FY24
      gmv_crescimento_pct:  null,   // não divulgado separadamente para FY24
      categorias_gmv_pct:   null,
      ads_gmv_pct:          0.2,    // deep dive: cresceu de 0.2% para 0.9% (FY24→FY26 início)
    },
    highlights:[
      "iFood atinge 100MM de pedidos/mês — marco histórico de escala",
      "Pedidos anuais: 981 milhões — líder absoluto no Brasil",
      "Clube iFood responde por ~39% dos pedidos food delivery",
      "iFood Pago lança crédito B2B para restaurantes — AUM US$574M",
      "Anota AI (WhatsApp): canal de pedidos via WhatsApp acelerado",
      "IA reduz taxa de chargeback de 2,6% para 0,1% — melhor que benchmark de mercado (0,5%)"
    ],
    guidance:null,
    percepcao_mercado:"",
    mudancas_atendimento:"Lançamento do crédito B2B para restaurantes (iFood Pago); Clube iFood consolida-se como motor de frequência e retenção"
  },

  // ── FY25 (abril 2024 — março 2025) ────────────────────────────────────────
  {
    banco_id:"ifood", periodo:"FY25", ano:2025, tri:1,
    kpis:{
      receita_usd_bi:       1.3,    // FY25 booklet: "revenue grew by 9% (30%) to US$1.3bn"
      aebitda_usd_mm:       256,    // FY25 booklet: "adjusted EBITDA increased from US$147m to US$256m"
      aebit_usd_mm:         226,    // FY25 booklet: "aEBIT of US$226m, more than doubling"
      pedidos_bi:           1.261,  // FY25 booklet: "1.261 billion"
      pedidos_mes_mm:       120,    // FY25 booklet: "over 120 million orders in March 2025"
      compradores_mm:       25,     // FY25 booklet: "monthly unique buyers rose to 25 million"
      pago_receita_usd_mm:  145,    // FY25 booklet: "US$145m (from US$127m in FY24)"
      pago_aebitda_usd_mm:  null,   // não divulgado separadamente para FY25
      pago_aebit_usd_mm:    -6,     // FY25 booklet: "aEBIT of -US$6m" — ainda em modo investimento
      pago_aum_usd_mm:      921,    // FY25 booklet: "AuM from US$574m to US$921m" (B2B crédito)
      pago_aum_b2b_brl_bi:  null,   // valor em BRL não divulgado explicitamente para FY25
      zoop_receita_brl_bi:  null,   // receita Zoop não divulgada separadamente para FY25
      gmv_crescimento_pct:  32,     // FY25 booklet: "GMV grew 32%"
      categorias_gmv_pct:   null,   // não desagregado
      ads_gmv_pct:          0.9,    // deep dive: cresceu para 0.9% de GMV em FY25
    },
    highlights:[
      "Pedidos anuais: 1,261 bilhão (+29% a/a) — 120MM pedidos só em março de 2025",
      "aEBITDA US$256M (+74% a/a) — marjagem aEBIT core food delivery de 27%",
      "aEBIT mais que dobrou para US$226M — iFood entre os melhores do mundo em delivery",
      "iFood Pago AUM dobrou para US$921M — crédito B2B a restaurantes escalando",
      "Compradores únicos mensais: 25MM — base de consumidores estável e engajada",
      "Anota AI: pedidos via WhatsApp cresceram 158% nos últimos 18 meses",
      "Investimento de restaurantes em plataforma de ads cresceu 95% nos últimos 18 meses"
    ],
    guidance:"FY26: crescimento incremental de aEBIT ao menos igual ao ganho de FY24→FY25",
    percepcao_mercado:"iFood prova 'world-class status' como food delivery. Modelo de ads + crédito + loyalty cria flywheel único. Crescimento de pedidos e GMV acima de 29% e 32% com marjagem expandindo — resultado sem precedentes para food delivery em mercados emergentes.",
    mudancas_atendimento:"Clube iFood como motor de frequência e retenção; Anota AI como canal de pedidos sem app; plataforma de marketing para restaurantes com ROI mensurável"
  },

  // ── FY26 (abril 2025 — março 2026) ────────────────────────────────────────
  {
    banco_id:"ifood", periodo:"FY26", ano:2026, tri:1,
    kpis:{
      receita_usd_bi:       2.7,    // deep dive: "FY26 $2.7B" — inclui food + Pago + categorias
      aebitda_usd_mm:       400,    // FY26 booklet: "increased aEBITDA from US$256m to US$400m"
      aebit_usd_mm:         358,    // FY26 booklet: "aEBIT by 51% in local currency... to US$358m"
      pedidos_bi:           1.362,  // estimado: +8% a/a sobre 1.261B
      pedidos_mes_mm:       175,    // FY26 booklet: "175 million orders/month" em março 2026
      compradores_mm:       null,   // não divulgado explicitamente para FY26
      pago_receita_usd_mm:  463,    // FY26 booklet: "revenue by 219% (93%) to US$463m"
      pago_aebitda_usd_mm:  38,     // FY26 booklet: "aEBITDA of US$38m" — virada para breakeven
      pago_aebit_usd_mm:    null,   // aEBIT não divulgado separadamente para FY26
      pago_aum_usd_mm:      null,   // AUM total não divulgado em USD para FY26
      pago_aum_b2b_brl_bi:  1.8,   // FY26 booklet: "Credit B2B AUM BRL1.8bn (+91% a/a)" — crédito a restaurantes
      zoop_receita_brl_bi:  1.0,   // FY26 booklet: "Zoop surpassing BRL1bn in revenue for the year" — receita anual
      gmv_crescimento_pct:  12,     // FY26 booklet: "GMV growth of 17% (12% LC ex-M&A)"
      categorias_gmv_pct:   47,     // FY26 booklet: "GMV grew by 47%" (grocery+pharma+convenience)
      ads_gmv_pct:          1.7,    // deep dive: "1.7% of GMV" em FY26
    },
    highlights:[
      "Receita total US$2,7bi (+40% a/a) — novas categorias já > 50% da receita (vs 17% no FY24)",
      "aEBITDA US$400M (+56% a/a) — core food delivery com marjagem aEBITDA de 27%",
      "175 milhões de pedidos só em março 2026 — crescimento de 46% vs março 2025",
      "iFood Pago fatura US$463M (+219%) — fintech já é pilar relevante de receita",
      "Clube: 45% do volume food delivery em março 2026 — fidelização como diferencial competitivo",
      "Ads: 106% de crescimento a/a para 1,7% do GMV — mídia dentro do app escalando",
      "Groceries CAGR FY24-FY26: +50%; Pharma CAGR: +71% — categorias compondo em escala",
      "+180 modelos de IA em produção; +14 bilhões de previsões/mês em tempo real"
    ],
    guidance:"FY27: aEBITDA US$100–150M (ciclo de investimento para defender liderança vs. competição crescente); forte crescimento de pedidos e GMV esperado",
    percepcao_mercado:"iFood navega cenário competitivo mais intenso: competidores investindo agressivamente forçaram iFood a anunciar aumento de investimentos no FY27 (aEBITDA vai cair de US$400M para US$100-150M). É sinal de amadurecimento do mercado brasileiro de delivery, não de fraqueza do iFood. O ecossistema (Pago, Ads, Categorias) é o diferencial estrutural que novos entrantes não têm.",
    mudancas_atendimento:"Clube como viabilizador do ecossistema; iFood Pago escalando crédito a restaurantes; LCM (Large Commerce Model) como base de IA proprietária; Zapia (assistente WhatsApp); IA resolvendo 1MM de interações ativas"
  },
];

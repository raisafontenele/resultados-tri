// quarters_pagbank.js — dados trimestrais PagSeguro/PagBank
// Fonte: Earnings Releases trimestrais (PDFs em inglês)
// lucro_bi     = Net Income non-GAAP (ex-items), convertido para R$
// roe_pct      = ROAE (divulgado a partir de Q1 2025; Q1-Q4 2024 retroativo)
// receitas_bi  = Total Revenue (R$)
// tpv_bi       = Total Payment Volume (R$)
// tpv_msmb_bi  = MSMB TPV — até Q4 2024: threshold R$1MM/mês; Q1 2025+: R$3MM/mês
// carteira_bi  = Loan Portfolio (crédito concedido, R$)
// npl_90_pct   = NPL >90 dias — divulgado apenas a partir de Q2 2025
// merchants_mm = Active Merchants (lojistas ativos, MM)
// contas_mm    = Active Clients/Consumers (MM)
// take_rate_pct= Gross Profit / TPV %

window.QUARTERS_DATA_PAGBANK = [

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"pagbank", periodo:"1T24", ano:2024, tri:1,
    kpis:{
      lucro_bi:      0.522,   // Net Income non-GAAP Q1 2024 ER
      roe_pct:       14.3,    // ROAE retroativo (comparativo Q1 2025 ER)
      receitas_bi:   4.306,
      tpv_bi:        111.7,
      tpv_msmb_bi:   77.6,   // threshold antigo: TPV ≤ R$1MM/mês
      carteira_bi:   2.7,
      npl_90_pct:    null,    // não divulgado
      merchants_mm:  6.5,
      contas_mm:     17.3,
      take_rate_pct: 1.57,
    },
    highlights:[
      "Lançamento do PagBank Partnership Program com +350 parceiros SaaS para lojistas",
      "Seguro Empresarial para Lojistas — produto dedicado a PMEs",
      "Capital de giro e conta com limite previstos para lançamento em 2S24"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"pagbank", periodo:"2T24", ano:2024, tri:2,
    kpis:{
      lucro_bi:      0.542,
      roe_pct:       null,
      receitas_bi:   4.557,
      tpv_bi:        124.4,
      tpv_msmb_bi:   83.6,
      carteira_bi:   2.9,
      npl_90_pct:    null,
      merchants_mm:  6.4,
      contas_mm:     17.7,
      take_rate_pct: 1.46,
    },
    highlights:[
      "Cash-In recorde R$ 76,4bi (+52% a/a) — sinal de principalidade bancária dos lojistas",
      "Depósitos R$ 34,2bi (+87% a/a) — diversificação de funding acelerada",
      "LMEC (grandes varejistas) TPV +49,6% a/a — expansão para enterprise"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"pagbank", periodo:"3T24", ano:2024, tri:3,
    kpis:{
      lucro_bi:      0.572,
      roe_pct:       null,
      receitas_bi:   4.831,
      tpv_bi:        136.3,
      tpv_msmb_bi:   88.3,
      carteira_bi:   3.2,
      npl_90_pct:    null,
      merchants_mm:  6.4,
      contas_mm:     17.7,
      take_rate_pct: 1.40,
    },
    highlights:[
      "Retomada de crédito sem garantia: capital de giro + registro de recebíveis + limite de cartão",
      "Portfólio expandido R$ 44,2bi incluindo adiantamento a lojistas (merchant prepayment)",
      "2º programa de recompra de ações: US$ 200MM — devolução de capital a acionistas"
    ],
    guidance:null, percepcao_mercado:"", mudancas_atendimento:""
  },
  {
    banco_id:"pagbank", periodo:"4T24", ano:2024, tri:4,
    kpis:{
      lucro_bi:      0.631,
      roe_pct:       null,
      receitas_bi:   5.115,
      tpv_bi:        146.0,
      tpv_msmb_bi:   96.1,
      carteira_bi:   3.4,
      npl_90_pct:    null,
      merchants_mm:  6.3,
      contas_mm:     17.8,
      take_rate_pct: 1.33,
    },
    highlights:[
      "SMB merchants (R$15k–R$1MM TPV) crescem 11% a/a; TPV por lojista +32,5% a/a",
      "Cash-In R$ 93,4bi (+40,8% a/a) — máxima histórica; Banking gross profit +79,9% a/a",
      "Repricing de tarifas de adquirência para compensar alta da Selic"
    ],
    guidance:null, percepcao_mercado:"Lucro crescendo sequencialmente mas take rate caindo para 1,33% — pressão de competição em adquirência. Banking emerge como segunda perna relevante (18,2% do gross profit). Base de lojistas começa a encolher (-200k vs pico).", mudancas_atendimento:""
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    banco_id:"pagbank", periodo:"1T25", ano:2025, tri:1,
    kpis:{
      lucro_bi:      0.554,
      roe_pct:       14.2,
      receitas_bi:   4.850,
      tpv_bi:        129.2,
      tpv_msmb_bi:   95.2,
      carteira_bi:   3.7,
      npl_90_pct:    2.3,    // retroativo via tabela Q2 2025 ER
      merchants_mm:  6.3,
      contas_mm:     17.7,
      take_rate_pct: 1.45,
    },
    highlights:[
      "Primeiro dividendo da história: US$ 0,14/ação",
      "Nova segmentação MSMB: threshold ampliado para R$3MM/mês — MSMB merchants +18% a/a",
      "Banking gross profit +85,3% a/a — representa 21,8% do total (vs 12% em 1T24)",
      "Custo de captação de depósitos caiu 4,9pp a/a (APY 90,2% CDI)"
    ],
    guidance:null,
    percepcao_mercado:"Repricing de adquirência e crédito absorve alta da Selic. ROAE de 14,2% ainda modesto mas Banking acelerando. Expansão de MSMB via novo threshold é narrativa positiva mas dificulta comparação histórica.",
    mudancas_atendimento:"Novo threshold MSMB (R$3MM/mês); dividendo inaugural; repricing de crédito e adquirência para Selic elevada"
  },
  {
    banco_id:"pagbank", periodo:"2T25", ano:2025, tri:2,
    kpis:{
      lucro_bi:      0.565,
      roe_pct:       14.5,
      receitas_bi:   5.058,
      tpv_bi:        129.6,
      tpv_msmb_bi:   93.7,
      carteira_bi:   3.9,
      npl_90_pct:    2.5,
      merchants_mm:  6.2,
      contas_mm:     17.7,
      take_rate_pct: 1.50,
    },
    highlights:[
      "Banking supera Payments em crescimento pela 1ª vez — 26,4% do Gross Profit",
      "NPL >90 dias divulgado pela 1ª vez: 2,5% (melhora vs 3,2% estimado em Q2 2024)",
      "Capital de giro sem garantia +37,9% q/q — crédito acelerando para lojistas",
      "Online segment TPV +50% a/a — e-commerce ganhando relevância no mix",
      "2º dividendo US$ 0,12/ação (pago ago/25); 3º programa de recompra lançado (US$ 200MM)"
    ],
    guidance:null,
    percepcao_mercado:"Banking como motor de crescimento é o grande pivô estratégico. NPL de 2,5% surpreende positivamente. Base de lojistas caindo levanta questão sobre saturação do mercado de adquirência.",
    mudancas_atendimento:"Capital de giro sem garantia acelerado; working capital loans para PMEs; Banking como vertical principal de crescimento"
  },
  {
    banco_id:"pagbank", periodo:"3T25", ano:2025, tri:3,
    kpis:{
      lucro_bi:      0.571,
      roe_pct:       15.1,
      receitas_bi:   5.105,
      tpv_bi:        129.8,
      tpv_msmb_bi:   null,  // não segregado neste release
      carteira_bi:   4.2,
      npl_90_pct:    2.6,
      merchants_mm:  6.3,
      contas_mm:     17.8,
      take_rate_pct: 1.50,
    },
    highlights:[
      "Capital de giro sem garantia +116% a/a em volume; +157% q/q em originação",
      "Banking GP +58,7% a/a — representa 27,8% do total; crescimento acelerado",
      "Meta de longo prazo anunciada: carteira de R$ 25bi até 2029",
      "R$ 1,4bi em dividendos extras anunciados para 2026 (2 pagamentos de US$0,12)"
    ],
    guidance:"Carteira crédito alvo R$25bi (2029); GP CAGR >10%; EPS CAGR >16%",
    percepcao_mercado:"ROAE de 15,1% sobe com Banking. TPV estagnado em ~R$130bi levanta questão sobre teto de crescimento em adquirência. Crédito como alavanca principal de crescimento futuro — working capital acelerando.",
    mudancas_atendimento:"Working capital loans acelerado; rollout de empréstimos para lojistas sem garantia; programa de capital: BIS ratio alvo 18-22%"
  },
  {
    banco_id:"pagbank", periodo:"4T25", ano:2025, tri:4,
    kpis:{
      lucro_bi:      0.678,  // non-GAAP; GAAP=0.502bi (impacto CSLL diferida R$142MM)
      roe_pct:       18.4,   // ROAE non-GAAP; GAAP=13.6%
      receitas_bi:   5.397,
      tpv_bi:        142.4,
      tpv_msmb_bi:   null,
      carteira_bi:   4.6,
      npl_90_pct:    2.9,
      merchants_mm:  6.3,
      contas_mm:     17.3,
      take_rate_pct: 1.40,
    },
    highlights:[
      "Lucro non-GAAP +7,4% a/a — GAAP -16,2% por CSLL diferida R$142MM (Lei 224/2025)",
      "TPV recupera +9,7% q/q (R$142,4bi) com normalização macro",
      "Working capital loans +170% a/a; originação R$185MM (+26% q/q)",
      "Banking GP +53,8% a/a — 26,4% do total"
    ],
    guidance:null,
    percepcao_mercado:"Resultado GAAP distorcido por CSLL. Non-GAAP mostra operação saudável com lucro record de R$678MM. TPV se recupera no 4T — sazonalidade positiva. NPL de 2,9% ainda controlado dado mix mais arriscado.",
    mudancas_atendimento:"Dois novos dividendos (ago/nov 2025); working capital rollout ampliado; ROAE non-GAAP de 18,4% é patamar recorde"
  },
  {
    banco_id:"pagbank", periodo:"1T26", ano:2026, tri:1,
    kpis:{
      lucro_bi:      0.575,
      roe_pct:       15.8,   // ROAE non-GAAP; GAAP=15.0%
      receitas_bi:   5.006,
      tpv_bi:        128.2,
      tpv_msmb_bi:   null,
      carteira_bi:   5.0,
      npl_90_pct:    3.05,
      merchants_mm:  6.3,
      contas_mm:     17.3,
      take_rate_pct: 1.47,
    },
    highlights:[
      "Banking GP atinge 31,2% do Gross Profit total — recorde histórico",
      "Carteira crédito R$5,0bi (+35,9% a/a); working capital +190,6% a/a",
      "NPL 3,05% — alta esperada com maior mix de crédito sem garantia; ainda abaixo de pares",
      "Dividendo US$0,26/ação anunciado para jun/26 (total R$1,4bi em 2026)",
      "BIS ratio managerial 24,1% — capital robusto para continuar crescendo em crédito"
    ],
    guidance:"Carteira crédito alvo R$25bi (2029); GP CAGR >10%; BIS ratio alvo 18-22%",
    percepcao_mercado:"Banking como % do gross profit atingindo 31% confirma a transformação: PagBank está se tornando um banco de verdade para lojistas. NPL de 3,05% ainda saudável vs. peers. Desafio: TPV estagnado em R$128bi — crescimento de receita depende cada vez mais de crédito e banking, não de adquirência.",
    mudancas_atendimento:"Consignado privado para PMEs em rollout; Banking como vertical #1 de crescimento; dividendo estrutural de US$0,26/ação; portfólio expandido R$51bi"
  },
];

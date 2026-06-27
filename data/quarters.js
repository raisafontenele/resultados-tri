// quarters.js — dados quantitativos trimestrais
// Fonte primária: Informativos Trimestrais Bradesco (PDFs lidos)
// Campos null = não divulgados no Informativo Trimestral (disponíveis no Relatório de Análise Econômica)

window.QUARTERS_DATA = [
  {
    banco_id: "bradesco",
    periodo: "1T25",
    ano: 2025, tri: 1,
    kpis: {
      clientes_total_mm: null,
      carteira_mpme_bi: 222.6,        // estimado: 254.6 / 1.144 (YoY +14.4% declarado no 1T26)
      npl_mpme_pct: 4.3,              // Fonte: gráfico NPL 1T25 PDF (Mar25 MPME)
      tpv_cartoes_bi: null,
      receitas_bi: 32.3,
      lucro_bi: 5.86,
      roae_pct: 14.4,
      eficiencia_pct: 50.0,           // aprox: IEO ~50% mencionado no plano de transformação 1T25
      depositos_bi: null,
      agencias_emp_neg: 150
    },
    highlights: [
      "Lucro +39,3% a/a — melhor 1T desde 2021",
      "Carteira de crédito expandida supera R$ 1 trilhão pela 1ª vez",
      "150 novas agências Empresas & Negócios abertas em 2024",
      "Bradesco Principal lançado com ~50 mil clientes",
      "MPME crescendo 16,2% YoY; NPL MPME caindo 90bps a/a",
      "1.400 pessoas internalizadas em tecnologia no trimestre"
    ],
    guidance: "Crédito 6,5–9,5%; Serviços 4–6%; Despesas 6–8%; Seguros 6–8%",
    percepcao_mercado: "Trimestre de virada: lucro +39% YoY confirma turnaround. Carteira trilhão marca simbólica. ROAE de 14,4% ainda abaixo do custo de capital mas trajetória ascendente é consistente. SME liderando crescimento com NPL em queda.",
    mudancas_atendimento: "Lançamento Bradesco Principal (novo segmento afluente); App Empresas & Negócios com jornada MEI; BIA GenAI com 100% dos primeiros atendimentos via IA; Bradesco Expresso em 100% dos municípios brasileiros"
  },
  {
    banco_id: "bradesco",
    periodo: "2T25",
    ano: 2025, tri: 2,
    kpis: {
      clientes_total_mm: null,
      carteira_mpme_bi: null,         // não extraído do Informativo Trimestral 2T25
      npl_mpme_pct: 4.3,              // Fonte: gráfico NPL 2T25 PDF (Jun25 MPME)
      tpv_cartoes_bi: null,
      receitas_bi: 34.0,
      lucro_bi: 6.1,
      roae_pct: 14.6,
      eficiencia_pct: null,
      depositos_bi: null,
      agencias_emp_neg: 150
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
      clientes_total_mm: null,
      carteira_mpme_bi: null,         // MPME crescendo 13,8% YoY em Set25 (base indisponível no Informativo)
      npl_mpme_pct: 3.7,              // Fonte: gráfico NPL 3T25 PDF (Set25 MPME) — mínimo da série
      tpv_cartoes_bi: null,
      receitas_bi: 35.0,
      lucro_bi: 6.2,
      roae_pct: 14.7,
      eficiencia_pct: null,
      depositos_bi: null,
      agencias_emp_neg: 150
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
      clientes_total_mm: null,
      carteira_mpme_bi: 248.9,        // estimado: 254.6 / 1.023 (QoQ +2,3% declarado no 1T26)
      npl_mpme_pct: 3.8,              // Fonte: gráfico NPL 4T25 PDF (Dez25 MPME)
      tpv_cartoes_bi: null,
      receitas_bi: 36.1,
      lucro_bi: 6.5,
      roae_pct: 15.2,
      eficiencia_pct: null,
      depositos_bi: null,
      agencias_emp_neg: 150
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
      clientes_total_mm: 74.3,
      carteira_mpme_bi: 254.6,
      npl_mpme_pct: 4.0,
      tpv_cartoes_bi: 95.1,
      receitas_bi: 36.9,
      lucro_bi: 6.8,
      roae_pct: 15.8,
      eficiencia_pct: 46.9,
      depositos_bi: 752,
      agencias_emp_neg: 150
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

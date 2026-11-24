
export type Project = {
  number: string;
  slug: string;
  title: string;
  kind: string;
  description: string;
  stack: string[];
  code: string;
  live: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  status?: string;
  worksNote?: string;
  visual: "retail" | "health" | "finance";
  details: {
    problem: string;
    solution: string;
    learnings: string[];
    sources?: string[];
  };
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "sistema-de-estoque",
    title: "Sistema de Estoque",
    kind: "Freelance · Em produção há 1 ano",
    description:
      "Sistema de gestão desenvolvido como freelance para uma loja física, em uso há 1 ano e evoluído continuamente com o cliente. Controla vendas, estoque, produtos, usuários e fornecedores, com dashboards de lucro (ECharts) e leitura de código de barras.",
    stack: [
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "ECharts",
      "Docker",
    ],
    featured: true,
    visual: "retail",
    imageUrl: "/1760222520300-_1_ (2).png",
    imageAlt: "Dashboard do sistema de controle de estoque",
    code: "https://github.com/henriqueabadedev-dev/backend-projeto-estoque",
    live: "https://frontend-projeto-estoque.vercel.app",
    details: {
      problem:
        "Uma loja física precisava controlar estoque, vendas e lucro em um único sistema, adequado à rotina do negócio.",
      solution:
        "Desenvolvi uma aplicação completa: back-end em Fastify, Prisma e PostgreSQL com autenticação JWT, dashboards de lucro e histórico de vendas com ECharts, geração e leitura de código de barras, cadastro de produtos, usuários e fornecedores e consulta de endereços pela API ViaCEP. Tudo roda em containers Docker numa VPS Hostinger e é usado pela loja há 1 ano.",
      learnings: [
        "Entender o fluxo de trabalho do cliente antes de definir a solução.",
        "Levar uma aplicação do desenvolvimento até a operação real: deploy com Docker e manutenção em produção.",
        "Evoluir o sistema continuamente a partir do feedback de quem usa no dia a dia.",
      ],
    },
  },
  {
    number: "02",
    slug: "saudedela",
    title: "SaúdeDela",
    kind: "Feira de ciências · IFBA",
    description:
      "Plataforma sobre saúde da mulher criada para a feira de ciências “Ciência Delas”. Reúne acompanhamento de ciclo e sintomas, dashboard com dados abertos e um chatbot educativo com RAG.",
    stack: [
      "Next.js",
      "TypeScript",
      "RAG",
      "LLMs",
      "Dados abertos",
    ],
    visual: "health",
    imageUrl: "/WhatsApp Image 2026-11-16 at 15.25.30.jpeg",
    imageAlt: "Interface da plataforma SaúdeDela",
    code: "https://github.com/rickdev8/saudedela-back",
    live: "https://saudedela.vercel.app",
    details: {
      problem:
        "Criar, para a feira de ciências do IFBA, uma experiência acessível sobre saúde da mulher, conectando informação educativa e dados públicos.",
      solution:
        "A plataforma permite registrar ciclo e sintomas, identifica padrões a partir do histórico (com um insight que se atualiza a cada novo registro), apresenta um dashboard estatístico e responde dúvidas por um chatbot educativo com RAG. A base estatística usa apenas fontes públicas, e a identidade visual própria trabalha com tons de rosa e vinho.",
      learnings: [
        "Aplicar tecnologia a um tema de impacto social, com cuidado na forma de apresentar as informações.",
        "Usar RAG para que o chatbot responda com base em fontes de referência.",
        "Transformar dados abertos de saúde em uma experiência fácil de entender.",
      ],
      sources: [
        "DATASUS",
        "PNS / IBGE",
        "OMS",
        "Febrasgo",
      ],
    },
  },
  {
    number: "03",
    slug: "sistema-financeiro-com-ia",
    title: "Sistema Financeiro com IA",
    kind: "Produto próprio · Em construção",
    description:
      "Sistema financeiro para pequenas e médias empresas, construído do zero com uma arquitetura mais limpa. A IA categoriza transações automaticamente e responde perguntas em linguagem natural sobre os dados financeiros.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "IA",
      "PostgreSQL",
    ],
    visual: "finance",
    imageUrl: "/Design sem nome (5).png",
    imageAlt: "Interface do sistema financeiro com inteligência artificial",
    status: "Em construção",
    code: "https://github.com/rickdev8/fin-control-api",
    live: "At development",
    worksNote: "[preencher]",
    details: {
      problem:
        "Pequenas e médias empresas costumam perder tempo categorizando lançamentos e consultando os próprios dados financeiros.",
      solution:
        "O produto está sendo construído do zero, com uma arquitetura organizada desde o início. A proposta inclui categorização automática de transações por IA e consultas em linguagem natural, para o dono do negócio perguntar sobre suas finanças sem navegar por relatórios.",
      learnings: [
        "Aplicar o que aprendi em projetos anteriores, começando com uma arquitetura organizada desde o primeiro commit.",
        "Usar IA para resolver problemas concretos (categorizar transações e responder perguntas sobre os dados), e não como enfeite.",
        "Definir e priorizar o escopo de um produto enquanto ele é construído.",
      ],
    },
  },
];

export interface AgentMission {
  title: string;
  status: string;
  summary: string;
}

export interface AgentAttributes {
  corpo: number;
  menteEspirito: number;
  socialSegredo: number;
  sobrenatural: number;
}

export interface Agent {
  slug: string;
  seal: string;
  codename: string;
  name: string;
  age: string;
  gender: string;
  status: string;
  house?: string;
  role: string;
  classification: string;
  photo?: string;
  summary: string;
  bio: string[];
  attributes?: AgentAttributes;
  skills?: Record<string, number>;
  missions: AgentMission[];
  redacted?: boolean;
}

export const AGENTS: Agent[] = [
  {
    slug: "dabi",
    seal: "D",
    codename: "Madame Dabi",
    name: "D. Dabi",
    age: "29",
    gender: "Feminino",
    status: "Ativa",
    house: "Desconhecida",
    role: "Proprietária do Cabaret",
    classification: "Pasta Pessoal · Divisão de Campo",
    photo: "/agents/dabi.png",
    summary:
      "Dona de uma das maiores casas de espetáculos de Londres. Seu verdadeiro talento não são os figurinos extravagantes — é a palavra. Eram poucos os que percebiam quando estavam sendo conduzidos exatamente para onde a Madame desejava.",
    bio: [
      "Em uma época em que homens comandavam praticamente todos os setores da sociedade, era de extrema coragem uma senhorita tão jovem e de aparência delicada estivesse à frente de uma das maiores casas de espetáculos de Londres. Sua força era admirável, mas seu verdadeiro talento residia na palavra. Seu poder de persuasão poderia ser maior do que os extravagantes figurinos que apresentava sob as luzes de seu Cabaret.",
      "Dabi convencia pela ousadia ou pelo cansaço. Podendo até apelar para sua sensualidade, que na maioria das vezes acabavam rendendo ótimas situações e diálogos agradáveis. As conversas com ela eram sempre agradáveis. Agradáveis até demais, se é que me entende. Eram poucos os que percebiam quando estavam sendo conduzidos exatamente para onde a Madame desejava.",
      "Mas indo contra as aparências, Madame Dabi era uma mulher reservada. Sabia que sua posição e influência exigiam muito cuidado. Não se permitia ser invadida por qualquer efêmera vontade carnal. Observadora na maioria das vezes, sua figura poderia ser latente em determinados momentos e ocasiões, tal qual uma silenciosa dinamite prestes a explodir. Dabi podia permanecer como um vulto por tempos, apenas observando o desenrolar dos acontecimentos. Porém, quando decidia se manifestar, era ela o atrativo aos olhos. Madame Dabi sabia como chamar a atenção, afinal era uma estrela nata de Music Hall. Essa era sua vocação.",
      "Conhecido por suas longas noites regadas a música, bebidas em excesso e sua característica cortina verde-esmeralda, que por sinal, recolhia a ansiedade dos que frequentavam o Cabaret e repelia em contravolta em prazer e satisfação. Reunindo os maiores aristocratas e criminosos na mesma mesa. Era um refúgio do mundo, onde não existiam regras claras e um universo próprio, onde o tempo parecia até regredir. Talvez fosse por esse motivo a grande fama.",
      "Ali, a neofobia não surtia efeito. Você deveria experimentar o que a vida tem a oferecer, no exato momento em que apresentada. Até porque, nunca se sabe quando a oportunidade baterá novamente em sua porta, não é?",
      "Venha, Madame Dabi irá te recepcionar como ninguém. Sente-se, seja servido pelas famosas \"Flappers\" da casa, relaxe os ombros e aproveite o espetáculo. E se quiser, pode até levantar para movimentar o esqueleto com uma inupta donzela presente.",
      "O ambiente era agradável, a não ser pelo cheiro de cigarro. Mas isso dá pra ser relevado ao observar os detalhes minuciosos dos lustres, o caimento impecável das cortinas, o Jazz que ecoava em seu auge e o som da vida acontecendo ali.",
    ],
    missions: [],
  },
  {
    slug: "tobias-marsh",
    seal: "T",
    codename: "Agente Marsh",
    name: "Tobias Marsh",
    age: "41",
    gender: "Masculino",
    status: "Ativo",
    house: "Casa Clement",
    role: "Batedor & combatente",
    classification: "Pasta Pessoal · Divisão de Campo",
    summary:
      "Ex-soldado, mão pesada, paciência curta. Se a porta precisa ser arrombada antes que algo do outro lado a arrombe primeiro, Marsh já está com o ombro nela.",
    bio: [
      "Marsh serviu doze anos antes de a Vigília o recrutar de um hospital de veteranos — o único sobrevivente de uma patrulha que \"não devia ter visto o que viu\". Não fala sobre aquela noite. Fala, com gosto, sobre as que vieram depois.",
      "É o nome que a ordem chama quando a missão é simples: entrar, encontrar, sair com vida. As complicações ele resolve no caminho.",
    ],
    attributes: { corpo: 3, menteEspirito: 1, socialSegredo: 0, sobrenatural: 0 },
    skills: { Combate: 3, Vigor: 2, Furtividade: 2 },
    missions: [
      {
        title: "Limpeza do Celeiro de Aldgate",
        status: "Concluída",
        summary:
          "Um ninho de ghouls instalado sob um celeiro abandonado. Marsh entrou sozinho, ao amanhecer, e saiu sozinho. O celeiro não saiu.",
      },
      {
        title: "Escolta da Carga de Tannhall",
        status: "Arquivada",
        summary:
          "Proteção de um transporte de relíquias entre quartéis. Sem incidentes — o que, segundo Marsh, foi o incidente mais estranho do ano.",
      },
    ],
  },
  {
    slug: "agente-07",
    seal: "█",
    codename: "Agente 07",
    name: "████████",
    age: "Desconhecida",
    gender: "Não consta",
    status: "Classificado",
    role: "Natureza não revelada",
    classification: "Pasta Pessoal · Acesso restrito",
    summary:
      "Recrutado fora do procedimento padrão. O processo de admissão foi assinado, depois selado, depois negado. Continua na ativa.",
    bio: [
      "Tudo o que existe sobre o Agente 07 são lacunas redigidas a propósito: ████ ███████ permanece █████████, e os poucos que ██████ não falam sobre isso.",
      "████████████████. O dossiê completo está sob o mesmo selo da relíquia.",
    ],
    attributes: { corpo: 1, menteEspirito: 1, socialSegredo: 1, sobrenatural: 2 },
    skills: { "████████": 0, "███████████": 0 },
    missions: [
      {
        title: "████████████",
        status: "Classificada",
        summary: "Registro removido por ordem superior. ████████████████████████████████.",
      },
    ],
    redacted: true,
  },
];

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find((agent) => agent.slug === slug);
}

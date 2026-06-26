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
    photo: "/agents/debi.jpeg",
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
    attributes: { corpo: 2, menteEspirito: 3, socialSegredo: 3, sobrenatural: 1 },
    skills: {
      Furtividade: 3,
      "Sangue Frio": 2,
      Lábia: 2,
      Encobrir: 2,
      Reflexo: 2,
      Pontaria: 1,
    },
    missions: [],
  },
  {
    slug: "carmita-evans",
    seal: "C",
    codename: "A Dama das Máscaras",
    name: "Carmita Evans",
    age: "25",
    gender: "Feminino",
    status: "Ativa",
    house: "Cabaret da Madame Dabi (convidada recorrente)",
    role: "Modelo & estrela ocasional do Cabaret",
    classification: "Dossiê Civil · Vida Noturna & Sociedade",
    photo: "/agents/carmita.jpeg",
    summary:
      "Modelo aclamada da Londres dos anos 1920, casada com o cantor William Evans e estrela ocasional do Cabaret da Madame Dabi. Por trás do casamento glamouroso, esconde uma identidade secreta nos bailes de máscaras dos arredores da cidade.",
    bio: [
      "No efervescente cenário da década de 1920, uma mulher chamava atenção por onde passava. Seu nome era Carmita Evans, uma modelo de 25 anos cuja beleza parecia saída das páginas das revistas mais sofisticadas da época. Seus longos cabelos ruivos alaranjados contrastavam com seus olhos claros e expressivos, tornando-a uma figura inesquecível nos salões, estúdios fotográficos e eventos da alta sociedade.",
      "Casada com William Evans, um homem negro elegante, carismático e admirado por sua inteligência e porte refinado, Carmita aparentava viver uma vida perfeita. William era um cantor talentoso e muito conhecido nos círculos noturnos de Londres. Sua voz marcante encantava multidões todas as noites no famoso Cabaret da Madame Dabi, considerado um dos maiores e mais luxuosos cabarés da cidade durante os anos 1920. Sob os holofotes, ele interpretava canções de jazz e blues para plateias fascinadas, conquistando admiradores por onde passava.",
      "Embora sua carreira principal fosse a de modelo, Carmita também possuía grande presença de palco. Sua fama e elegância chamaram a atenção da misteriosa Madame Dabi, proprietária do famoso cabaré. De tempos em tempos, quando a casa preparava apresentações especiais para a elite londrina, Carmita era convidada para participar dos espetáculos. Em algumas noites, surgia sob as luzes douradas do palco usando vestidos luxuosos adornados com lantejoulas, plumas e joias reluzentes, realizando números de dança, desfiles temáticos e performances teatrais que arrancavam aplausos entusiasmados da plateia.",
      "Os clientes do cabaré adoravam quando o casal Evans se apresentava na mesma noite. William encantava com sua voz poderosa, enquanto Carmita fascinava com sua beleza e elegância. Muitos os consideravam o casal mais glamouroso da vida noturna londrina.",
      "O casal era frequentemente visto em festas e eventos beneficentes, despertando a admiração de todos ao seu redor. William amava profundamente sua esposa e acreditava ter encontrado nela uma companheira leal e sincera.",
      "Mas por trás dos sorrisos e das fotografias, existia uma verdade que apenas Carmita conhecia.",
      "Algumas noites por mês, ela dizia ao marido que sairia para encontrar amigas em reuniões sociais ou apresentações de jazz. William jamais desconfiava de suas explicações. Afinal, Carmita sempre retornava para casa com histórias convincentes e um comportamento aparentemente normal.",
      "Na realidade, porém, ela seguia para um lugar escondido dos olhos da sociedade.",
      "Em uma antiga mansão nos arredores de Londres aconteciam exclusivos bailes de máscaras, eventos frequentados por artistas, aristocratas, empresários e figuras influentes que desejavam manter suas identidades em segredo. Sob lustres dourados e ao som de orquestras sofisticadas, os convidados escondiam seus rostos atrás de máscaras ornamentadas e assumiam versões diferentes de si mesmos.",
      "Lá, Carmita não era a esposa exemplar conhecida pelos jornais. Sob uma máscara vermelha adornada com penas douradas, ela se tornava alguém livre das expectativas sociais e das responsabilidades de seu casamento. Nessas noites, envolvia-se em romances passageiros e encontros secretos, acreditando que sua identidade permaneceria protegida para sempre.",
      "Cada baile aumentava seu sentimento contraditório. Por um lado, sentia-se fascinada pela emoção do segredo; por outro, carregava uma culpa crescente ao olhar para William, que continuava confiando nela sem reservas.",
      "A situação tornava-se ainda mais dolorosa porque, nos bastidores do Cabaret da Madame Dabi, William frequentemente demonstrava orgulho da esposa. Quando ela era convidada para uma apresentação especial, ele costumava observá-la dos bastidores com admiração genuína, convencido de que havia encontrado a mulher perfeita. Carmita sorria para ele, aceitava flores após os espetáculos e agradecia seus elogios, enquanto escondia a verdade que poderia destruir tudo.",
    ],
    attributes: { corpo: 1, menteEspirito: 1, socialSegredo: 1, sobrenatural: 1 },
    missions: [],
  },
];

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find((agent) => agent.slug === slug);
}

export function getVida(agent: Agent): number {
  const corpo = agent.attributes?.corpo ?? 0;
  const vigor = agent.skills?.["Vigor"] ?? 0;
  return 10 + corpo * 5 + vigor * 3;
}

export function getSanidade(agent: Agent): number {
  const menteEspirito = agent.attributes?.menteEspirito ?? 0;
  const sangueFrio = agent.skills?.["Sangue Frio"] ?? 0;
  return 20 + menteEspirito * 5 + sangueFrio * 4;
}

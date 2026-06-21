export interface Spouse {
  id: string;
  name: string;
  status: "alive" | "dead";
  years?: string;
  role?: string;
  leader?: boolean;
}

export interface FamilyMember {
  id: string;
  name: string;
  status: "alive" | "dead";
  years?: string;
  role?: string;
  leader?: boolean;
  spouse?: Spouse;
  children?: GenealogyNode[];
}

export interface TimeSkipNode {
  id: string;
  kind: "timeskip";
  label: string;
  year?: string;
}

export type GenealogyNode = FamilyMember | TimeSkipNode;

export interface HistoryChapter {
  title: string;
  location?: string;
  paragraphs: string[];
}

export interface House {
  slug: string;
  seal: string;
  classification: string;
  hostileTag?: string;
  title: string;
  epithet: string;
  description: string;
  history: HistoryChapter[];
  genealogy: FamilyMember[];
}

export const HOUSES: House[] = [
  {
    slug: "clement",
    seal: "C",
    classification: "Casa fundadora · Humana · Est. 1812",
    title: "Clement",
    epithet: "A mão que ergueu a espada",
    description:
      "Os fundadores. Foram a lâmina da ordem; hoje são sua vergonha. A família está rachada: a ala antiga sonha com a purga, enquanto o herdeiro que comanda a Vigília tenta segurar a trégua carregando um sobrenome amaldiçoado.",
    history: [
      {
        title: "Capítulo I — Rose e Robert",
        location: "Inglaterra, 1812",
        paragraphs: [
          "A primeira geração dos Clement foi marcada por três coisas: dor, ódio e vingança. E as três nasceram numa única noite.",
          "Robert Clement era homem de boa condição na Inglaterra — terras, uma fazenda, gado e empregados que cuidavam de tudo. Casara-se com Rose, uma mulher fiel, que lhe dera quatro filhos. A vida era confortável, do tipo que faz um homem acreditar que nada pode alcançá-lo. Robert acreditou nisso até a noite em que deixou de acreditar.",
          "Foi Rose quem ouviu primeiro. Barulhos estranhos do lado do celeiro — fundos, errados; não eram o gado, não eram o vento. Ela chamou o marido. As crianças já dormiam. Robert, que não era homem de ignorar um ruído na própria terra, pegou o rifle e saiu para o escuro. Rose, contra todo bom senso, foi com ele.",
          "Não chegaram a entrar no celeiro. No meio da mata, à beira da luz, uma mulher disparou em fuga — um vulto pálido sumindo entre as árvores. Rose gritou o nome do marido, e Robert, sem pensar, correu atrás daquela figura. A noite engolia tudo; ele mal enxergava dois passos adiante. Perseguiu o vulto até perdê-lo de vista — e quando parou, ofegante, e se virou para chamar a esposa...",
          "Rose não estava mais lá.",
          "Ele voltou correndo pelo caminho, chamando. Nada respondeu. E então, à frente, ele a viu.",
          "Não era uma mulher. Era um demônio — foi assim que ele o descreveria pelo resto da vida. Algo de dentes longos demais, curvado sobre o pescoço de Rose, bebendo. Robert ergueu o rifle e atirou. A bala acertou em cheio o rosto da criatura, encostado ao ombro da esposa. Mas já era tarde. Não havia mais vida naquele corpo.",
          "E a criatura se levantou.",
          "Foi a primeira vez que Robert Clement viu um vampiro — e a imagem se cravou em sua mente como ferro em brasa. Ele atirou de novo. E de novo. E de novo. A coisa não caía; apenas avançava. Estava escuro demais para ver-lhe o rosto. Havia somente a forma, os dentes, e o avanço.",
          "Sem munição, Robert recuou arrastando o corpo de Rose. Gritou por socorro. A casa ficava longe, e nenhum dos homens da fazenda o ouviu — ou nenhum quis ouvir. Estava sozinho. E a coisa continuava vindo. Num salto, ela o alcançou, e caíram juntos. No desespero, sem arma e sem balas, Robert tateou o chão à procura de qualquer coisa — e a mão se fechou sobre um galho, grosso, seco, a ponta quebrada e afiada como uma lança. Cravou-o na criatura com toda a força que lhe restava.",
          "A coisa estremeceu. Pela primeira vez, sentiu dor. E caiu.",
          "Robert não esperou para ver se estava morta. Ergueu o corpo da esposa e correu sem olhar para trás, até trancar a porta de casa às suas costas. Só então, à luz, ele a viu de verdade: Rose estava seca. O sangue, drenado. A pele, murcha sobre os ossos, como se algo a tivesse esvaziado por dentro. Ele ficou sem palavras. Não havia palavras.",
          "Quando contou o que vira, ninguém acreditou. Ao voltarem ao local, a criatura havia sumido — restava apenas o sangue na terra. Robert procurou a polícia, jurou pela vida dos filhos que dizia a verdade, e foi chamado de louco. E, no entanto, tudo estava à vista: o sangue encharcando o chão, as cápsulas vazias, até fios de cabelo presos aos galhos. Tudo, menos um corpo. O corpo nunca apareceu.",
          "Esse foi o primeiro capítulo de Robert e Rose. Um homem que tinha tudo, e a quem o mundo natural nada pôde devolver — porque o que levou Rose não era natural.",
          "Naquele mesmo ano de 1812, Robert Clement fundou a Vigília: uma ordem dedicada a caçar aquilo que a noite esconde. Não por dever. Não por fé. Por vingança. E o primeiro nome de sua lista nunca teve rosto — apenas dentes, escuridão, e a promessa de que ninguém mais choraria sozinho o que ele chorou.",
        ],
      },
      {
        title: "Capítulo II — Os Quatro Filhos",
        paragraphs: [
          "Dos quatro filhos de Robert Clement, foi o primogênito quem herdou a noite.",
          "Robert II Clement nasceu em 1805 — velho o bastante, em 1812, para guardar na memória a madrugada em que a mãe não voltou para casa. Enquanto os irmãos cresceram ouvindo a história de Rose como quem ouve uma lenda, Robert II a vivera. Lembrava-se do grito. Lembrava-se do silêncio que veio depois. E isso o moldou de um jeito que nunca teve cura.",
          "Sua história começa nos anos em que o pai erguia a Vigília do nada — gastando a própria fortuna, abrindo investimentos, convencendo-se sozinho de que era possível uma revolução contra aquilo que a noite esconde: a caça ao não-natural. No início, Robert Clement não tinha o apoio de ninguém. Não importava. O luto bastava por todos.",
          "E o filho mais velho observava tudo, obcecado. Era o único capaz de burlar os cofres e as fechaduras do pai, de pôr as mãos nos documentos, nos dados, nas fotografias que o velho guardava a sete chaves. Cada página o deixava mais faminto. Quando atingiu a maioridade, não pediu permissão para viver — pediu uma missão.",
          "E na primeira, Robert II fez um massacre.",
          "Em todo combate que se seguiu, ele matava — e matava sorrindo. Vampiros, bruxas, toda raça que ousava existir contra a natureza passou a conhecer aquele nome e a temê-lo. Os próprios irmãos sentiam um frio quando ele entrava num cômodo. E o pai, que esperara forjar uma arma, viu nascer outra coisa: um homem cuja força crescia sem freio, e que parecia gostar demais do trabalho.",
          "A casa se dividiu em torno dele. Elizabeth, a mais sábia dos quatro, condenava abertamente os feitos do irmão mais velho. Philip ficava ao lado dela. Alice, calada como sempre, nunca tomava partido nos assuntos do primogênito — observava, guardava, e dizia pouco. Robert II seguia em frente, indiferente a todos. A vingança que movera o pai havia se tornado, nele, outra coisa: prazer.",
          "⎯⎯⎯ A Escolta Roxa · 1836 ⎯⎯⎯",
          "Foi numa madrugada de 1836 que os quatro lutaram juntos pela primeira — e quase única — vez.",
          "A informação veio de Alice. Foi ela quem levou ao pai a notícia: um grupo numeroso e bem armado havia sido enviado para interceptar e aniquilar uma equipe da Vigília que transportava uma carga preciosa. A carga eram flores — pétalas roxas de acônito, uma planta tão bela quanto venenosa, que a ordem aprendera a usar como arma contra o não-natural. Perder aquele carregamento era perder meses de trabalho e parte da pouca defesa que tinham contra o que vinha pela estrada. Por isso a missão recebeu seu nome: a Escolta Roxa.",
          "A rota cortava a mata por uma estrada estreita de terra, e a Vigília a percorria em silêncio: uma carroça pesada no centro, lonas amarradas sobre os caixotes de flores, homens de tocha e rifle abrindo e fechando a coluna. Cada irmão tinha o seu posto. Elizabeth ficou à retaguarda, com o material de suporte e os feridos — onde houvesse sangue, ali ela estaria. Robert II e Philip comandavam dois pelotões distintos, um à frente, outro guardando a carga. Alice, com uma pequena equipe, sumira pelo flanco, entre as árvores, como lhe era natural.",
          "O ataque não começou com um grito. Começou com o silêncio — os cavalos empacando, as tochas tremendo sem vento, o mato à beira da estrada parando de respirar. E então a noite se abriu de todos os lados ao mesmo tempo.",
          "O pelotão de Robert II, à frente, foi cercado antes mesmo de formar linha. O que veio do escuro era rápido demais para a mira e forte demais para a baioneta; os primeiros homens caíram sem chegar a apontar a arma. Robert II descarregou o rifle, sacou a lâmina, e por um instante o sorriso ainda estava no rosto — até perceber que, para cada coisa que derrubava, duas surgiam do breu.",
          "Philip largou a posição na carroça e levou o seu pelotão para abrir caminho até o irmão. Lutaram costas com costas no meio da estrada, sob o resto de luz das tochas caídas. Foi ali, ao puxar um agente ferido para longe do alcance de uma daquelas coisas, que Philip sentiu o mundo inteiro se fechar sobre o seu lado direito. Quando conseguiu se desvencilhar, o braço já não respondia — e pouco depois já não estava mais lá. Mesmo assim continuou de pé, gritando ordens, segurando a arma com a mão que lhe restava, até a perda de sangue lhe dobrar os joelhos.",
          "No flanco, Alice e os seus tentavam fechar o cerco por fora e foram quase varridos. Separada da equipe, sem munição, ela sobreviveu fazendo a única coisa que sabia melhor do que ninguém: desaparecer. Encontraram-na ao raiar do dia, escondida, ferida, viva por pouco — e calada, como sempre.",
          "Quando o céu clareou, a estrada era sangue até onde a vista alcançava. Muitos agentes da Vigília não se levantaram. E foi Elizabeth quem segurou o que restou: montou uma mesa de operação em cima da própria carroça, entre os caixotes de acônito, e passou a madrugada decidindo de quem ainda dava para cuidar e de quem só dava para acompanhar até o fim. Estancou o coto do braço de Philip. Trouxe Alice de volta. E conteve Robert II que, coberto do próprio sangue e do sangue alheio, ainda queria voltar para a mata atrás do que havia fugido.",
          "A carga roxa sobreviveu. A Vigília, não inteira. Foi uma das piores noites que a ordem já registrara — e nenhum dos quatro filhos de Robert Clement saiu dela como havia entrado.",
          "Philip carregaria a manga vazia pelo resto da vida, e talvez por isso tenha aprendido a poupar. Alice mergulhou ainda mais fundo nas sombras. Elizabeth encheu cadernos com tudo o que viu. E Robert II — o que sorria — voltou daquela madrugada com algo trincado por dentro. Faltavam ainda dois anos para 1838. Mas a rachadura começou ali.",
        ],
      },
      {
        title: "Capítulo III — A Noite Vermelha",
        location: "1855",
        paragraphs: [
          "Passou-se o tempo, e a segunda geração dos Clement veio ao mundo.",
          "Robert Clement, o fundador, morreu em 1847. Com ele encerrou-se a primeira liderança da Vigília, e Elizabeth — a mais sábia dos quatro filhos — assumiu o lugar do pai. Foi a segunda a comandar a ordem e, apesar de tudo o que aprendera estancando o sangue dos irmãos na Escolta Roxa, manteve o caminho do velho Robert: caçar e matar tudo o que fosse não-natural.",
          "A segunda geração já era grande. De Elizabeth vieram George, o gênio, e Emma, que um dia herdaria a ordem. De Alice, o filho único, Bernard. De Philip, quatro: Violet, Louisa, Edmund e Ada. Sete netos de Robert Clement, criados entre arquivos, armas e a certeza de que o mundo escondia monstros — e de que era dever da família apagá-los.",
          "Sob o comando de Elizabeth, a família crescia e o trabalho se expandia. Mas, do outro lado do véu, alguém fazia a mesma conta. A morte do fundador correu pelas sombras como uma faísca: muitas criaturas que o temiam respiraram fundo pela primeira vez em décadas. E, livres desse medo, começaram a planejar.",
          "Numa noite de 1855, um grupo forte de vampiros invadiu um dos quartéis mais importantes da Vigília. Não foi um ataque qualquer — foi cirúrgico. Eles sabiam exatamente quando golpear: na rara noite em que quase toda a família Clement estava reunida sob o mesmo teto. O massacre foi quase perfeito.",
          "A primeira a cair foi a mais nova. Ada Clement, o sol da ordem — a menina que carregava no peito uma força de espírito maior que o próprio tamanho, e um sorriso que não desarmava nunca — havia saído para buscar bebida para os irmãos. Foi por isso que morreu primeiro: estava sozinha, desarmada, longe dos outros. O inimigo soube escolher. Ada caiu antes mesmo de entender o que acontecia.",
          "A segunda foi Violet. Doce e mansa como o pai, era chamada de a paz da Vigília — alguém de coração limpo demais para aquele mundo. Quando viu a irmã mais nova ter o peito rompido pelo golpe de um vampiro, esqueceu tudo o que era e avançou. Não durou um segundo. A paz da Vigília foi a segunda a tombar.",
          "Depois disso, tudo virou caos.",
          "Bernard, filho de Alice, soubera do ataque antes dos outros — mas chegou tarde. Tinha os talentos da mãe, a agilidade, a leitura das sombras; só não tinha a velocidade dela. Correu o quanto pôde para avisar Elizabeth de que o golpe já estava em curso. Quando enfim alcançou o quartel, o flanco inimigo o engoliu. Vieram muitos sobre ele ao mesmo tempo. Não sobrou corpo para chorar.",
          "No centro da tempestade, Emma tentava segurar a situação ao lado do irmão, George. George Clement era o gênio da família, a mente mais afiada de sua geração — mas naquela noite a inteligência não tinha resposta. Quando viu que mais de um vampiro avançava para matar a irmã, não pensou: tomou a arma e fuzilou todos. Por um instante, funcionou. Por um instante apenas. Porque chumbo não mata o que já está morto. As criaturas se voltaram contra ele com uma fome de raiva e despejaram sobre George tudo aquilo que ele tentara impedir. Emma fugiu. Foi a última coisa que o irmão lhe deu — a chance de correr.",
          "Edmund lutou até o fim. Era, talvez, o mais forte daquela geração: carregava no olhar os pensamentos do tio Robert II, a mesma dureza — mas nunca a mesma crueldade, jamais erguera a mão como o tio erguia. Naquela noite, ergueu. Lutou como ninguém esperaria de um Clement tão contido. Não foi suficiente. Nem a força do mais forte foi suficiente.",
          "Quando Emma já se julgava uma das últimas de pé, deu de cara com Louisa, encolhida num canto. A irmã tinha visto tudo. Vira Violet, vira Edmund, vira Ada — todos. E se escondera. Não conseguia mais. Não queria mais nada daquilo. As duas se olharam no escuro, e nenhuma teve o que dizer.",
          "Enquanto isso, Elizabeth e Philip — a líder da ordem e o irmão de um braço só — tentavam o impossível: retomar o quartel e mantê-lo nas mãos da Vigília. Lutaram até o último vampiro. Não bastou. Foram os últimos a deixar o lugar, e o deixaram para trás.",
          "Foi uma das noites mais sangrentas de toda a história dos Clement. Quando o silêncio voltou, sobraram perguntas que ninguém sabia responder — e uma, acima de todas, gelava o sangue dos que restaram: quem viria depois? Quase nenhum dos mortos deixara filhos. A família que dedicara três gerações a aniquilar o não-natural sempre fora gente fechada, reservada, incapaz de imaginar qualquer futuro que não fosse a próxima caçada. Mataram bem. Não souberam continuar. E agora, de uma geração inteira, restavam apenas duas mulheres — e o medo de serem as últimas.",
          "Naquela madrugada morreram Ada, Violet, Bernard, George e Edmund Clement. Cinco de sete, vítimas de um massacre que o inimigo armou por anos e executou numa só noite. A Vigília chamaria aquilo, dali em diante, de a Noite Vermelha.",
        ],
      },
    ],
    genealogy: [
      {
        id: "robert-clement",
        name: "Robert Clement",
        status: "dead",
        years: "1788–1847",
        role: "Fundador da Vigília",
        leader: true,
        spouse: {
          id: "rose-clement",
          name: "Rose Clement",
          status: "dead",
          years: "?–1812",
          role: "Vítima de um vampiro desconhecido",
        },
        children: [
          {
            id: "robert-ii-clement",
            name: "Robert II Clement",
            status: "dead",
            years: "1805–1838",
            role: "O terror de ambos os lados",
          },
          {
            id: "elizabeth-clement",
            name: "Elizabeth Clement",
            status: "dead",
            years: "1806–1878",
            role: "Médica da Vigília",
            leader: true,
            children: [
              {
                id: "george-clement",
                name: "George Clement",
                status: "dead",
                years: "1830–1855",
                role: "O gênio da família",
              },
              {
                id: "emma-clement",
                name: "Emma Clement",
                status: "dead",
                years: "1832–1880",
                role: "Terceira líder da Vigília — arquiteta da trégua",
                leader: true,
                children: [
                  {
                    id: "salto-temporal-1880",
                    kind: "timeskip",
                    label: "25 anos depois",
                    year: "1880",
                  },
                ],
              },
            ],
          },
          {
            id: "alice-clement",
            name: "Alice Clement",
            status: "dead",
            years: "1807–1849",
            role: "Espiã da Vigília — desaparecida",
            children: [
              {
                id: "bernard-clement",
                name: "Bernard Clement",
                status: "dead",
                years: "1835–1855",
                role: "Herdou a agilidade da espiã",
              },
            ],
          },
          {
            id: "philip-clement",
            name: "Philip Clement",
            status: "dead",
            years: "1808–1871",
            role: "Caçador do não natural",
            children: [
              {
                id: "violet-clement",
                name: "Violet Clement",
                status: "dead",
                years: "1830–1855",
                role: "A paz da Vigília",
              },
              {
                id: "louisa-clement",
                name: "Louisa Clement",
                status: "dead",
                years: "1833–1898",
              },
              {
                id: "edmund-clement",
                name: "Edmund Clement",
                status: "dead",
                years: "1836–1855",
                role: "A sombra de Robert II",
              },
              {
                id: "ada-clement",
                name: "Ada Clement",
                status: "dead",
                years: "1840–1855",
                role: "O sorriso que nunca se apagou",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "barone",
    seal: "B",
    classification: "Casa aliada · Humana · Est. 1879",
    title: "Barone",
    epithet: "A mão que costura a trégua",
    description:
      "Os diplomatas. Vieram da Itália sem o sangue antigo da ordem e fizeram o que a espada nunca fez: estender a mão ao outro lado. Abriram as portas aos não naturais e teceram as primeiras tréguas — mas os puristas já sussurram que a lealdade dos Barone se divide.",
    history: [],
    genealogy: [],
  },
  {
    slug: "demdike",
    seal: "✠",
    classification: "Bruxaria · Pendle, 1612",
    hostileTag: "Status: Hostil",
    title: "Demdike",
    epithet: "A memória mais longa",
    description:
      "Descendentes das bruxas de Pendle que escaparam da forca e mergulharam na clandestinidade. Caçadas por três séculos — e os Clement continuaram o serviço. Se alguém vai trazer o caos como vingança, começa por elas.",
    history: [],
    genealogy: [],
  },
  {
    slug: "chattox",
    seal: "✠",
    classification: "Bruxaria · Rival das Demdike",
    title: "Chattox",
    epithet: "Trezentos anos de ódio",
    description:
      "A linha de bruxas inimiga das Demdike desde Pendle. A guerra e a gripe, porém, podem forçar as duas a uma aliança aterradora — contra o inimigo comum: a Vigília.",
    history: [],
    genealogy: [],
  },
  {
    slug: "de-vere",
    seal: "†",
    classification: "Vampírica · Anterior à ordem",
    title: "de Vere",
    epithet: "Os mais civilizados, os mais perigosos",
    description:
      "Uma linhagem antiquíssima, mais velha que a própria ordem, entranhada na aristocracia inglesa. Assinaram o pacto, mas nunca perdoaram os Clement. Sorriem nos salões enquanto medem o seu pescoço.",
    history: [],
    genealogy: [],
  },
  {
    slug: "dragomir",
    seal: "†",
    classification: "Vampírica · Continental",
    hostileTag: "Status: Hostil",
    title: "Dragomir",
    epithet: "Chega de trégua",
    description:
      "Vampiros vindos do leste, duros e sem paciência para diplomacia. São a voz que sussurra pelo fim do pacto, agora que a guerra mostrou ao mundo como o lado natural está fraco.",
    history: [],
    genealogy: [],
  },
];

export function getHouse(slug: string): House | undefined {
  return HOUSES.find((house) => house.slug === slug);
}

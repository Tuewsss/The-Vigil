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
    history: [
      {
        title: "Capítulo I — Milão, 1879",
        location: "Itália — Inglaterra, 1879",
        paragraphs: [
          "A família Barone não era nobre por sangue, mas por caráter — o tipo de distinção que o dinheiro pode comprar o uniforme, mas jamais o porte. Originários de Milão, os Barone pertenciam ao estrato de uma burguesia italiana cultivada: comerciantes bem-sucedidos, de olhos voltados para o futuro e raízes fundadas na dignidade do trabalho honesto.",
          "Conte Emilio Barone, o patriarca, construíra uma pequena fortuna no comércio de tecidos finos, mas os últimos anos trouxeram o peso de uma Itália ainda em vias de se reconhecer como nação. A instabilidade política, os impostos sufocantes do jovem Reino e o desejo de horizontes mais amplos empurraram a família em direção ao Ocidente — rumo à Inglaterra, à grande Londres que prometia ordem, prosperidade e anonimato para quem chegasse com dinheiro e discrição.",
          "Em março de 1879, Emilio e sua esposa Carlotta Barone, nascida Ferretti, embarcaram de Gênova com os dois filhos em direção a Southampton. Eles não fugiam da Itália. Escolhiam algo maior.",
        ],
      },
      {
        title: "Capítulo II — Adriano e Fiamma",
        paragraphs: [
          "Alto, de ombros largos e expressão calculada, Adriano Barone herdara do pai a frieza estratégica e o talento para ler pessoas. Estudara Direito na Universidade de Pavia sem jamais ter a intenção de exercê-lo — para ele, o Direito era uma linguagem, e toda linguagem era uma ferramenta. Falava inglês com sotaque carregado mas vocabulário preciso, aprendido por correspondência com os parceiros comerciais do pai.",
          "Adriano era o tipo de homem que entrava numa sala e, antes de dizer uma palavra, já havia mapeado as saídas. Desconfiado por natureza, leal por convicção — reservado, metódico, protetor, com uma responsabilidade quase patológica pelo bem-estar da irmã mais nova.",
          "Fiamma Barone nascera em Milão a 3 de abril de 1862. O nome fora escolhido pela avó materna, que dizia ter visto a menina nascer com os olhos já abertos, numa expressão que não era de choro, mas de curiosidade. Fiamma — chama. O nome a seguiria como uma profecia.",
          "Pequena de estatura, rápida de pensamento e de língua, Fiamma era tudo o que o irmão não era em expressividade. Onde Adriano calculava, ela intuía; onde ele fechava portas, ela as abria, às vezes sem pedir permissão. Estudara Literatura e Filosofia com a tutora particular que o pai mantinha em casa, e chegara a Londres com mais livros na bagagem do que roupas. Curiosa, empática, persuasiva, possuía o dom raro de encontrar pontos de conexão entre pessoas de mundos completamente distintos — podia parecer ingênua; raramente era.",
          "⎯⎯⎯ A Livraria de Bloomsbury · 1879 ⎯⎯⎯",
          "A família se instalou em Marylebone, num sobrado de três andares que Emilio alugara através de um intermediário antes mesmo de chegar à cidade. O encontro com Emma Clement não foi acidental — nada na vida de Emma era. Ela notara os Barone poucas semanas após a chegada deles, pela razão mais mundana possível: Fiamma entrara na mesma livraria de livros raros em Bloomsbury que Emma frequentava toda quinta-feira, e as duas disputaram, com cortesia excessiva e crescente tensão, o único exemplar disponível de um volume de filosofia esotérica medieval em latim.",
          "Fiamma venceu a disputa. Emma gostou muito disso. O convite para o chá na mansão Clement veio três dias depois, entregue por um mensageiro sem rosto. A nota, escrita com a caligrafia precisa de Emma, dizia apenas: “Traga seu irmão. Tenho uma proposta que pode interessar a pessoas que não têm medo de perguntas sem resposta fácil.”",
        ],
      },
      {
        title: "Capítulo III — O Acordo de Maio",
        location: "Londres, 1879–1880",
        paragraphs: [
          "Emma Clement era, em 1879, líder da Vigília desde a morte da mãe, Elizabeth, no ano anterior — um cargo herdado de modo abrupto, em circunstâncias que a organização preferia não documentar. Em pouco mais de um ano à frente da ordem, já começava a transformá-la de um corpo reativo em algo mais parecido com um corpo diplomático — uma instituição que acreditava que o sobrenatural não era um problema a ser eliminado, mas uma realidade a ser administrada. Sua grande missão era uma paz formal entre o mundo natural e o não-natural: não uma trégua silenciosa por inércia e medo mútuo, mas uma paz com estrutura, com acordos, com testemunhas.",
          "A Vigília estava dividida quanto a isso. Havia quem visse a ideia como idealismo perigoso, quem a visse como traição, e quem simplesmente não acreditasse que fosse possível. Emma precisava de pessoas de fora — sem o peso das velhas disputas internas, sem dívidas com nenhuma das facções. Nos Barone, encontrou algo mais raro ainda: dois irmãos complementares, cujos defeitos e virtudes se encaixavam como engrenagens, e que não tinham absolutamente nada a perder.",
          "O que os registros internos da Vigília chamariam de A Missão dos Barone nunca recebeu um nome oficial, nunca foi votada em conselho, nunca foi formalmente sancionada — Emma não pediu permissão; raramente pedia. A missão consistia em estabelecer contato com representantes de três facções do mundo sobrenatural que habitavam Londres havia décadas, cada uma com seus próprios códigos, territórios e ressentimentos históricos, e chegar a um acordo que garantisse a coexistência sem violência.",
          "Adriano foi designado negociador formal: sua formação jurídica e sua capacidade de permanecer impassível diante de qualquer coisa o tornavam o interlocutor ideal. Fiamma foi sua intérprete — não apenas de línguas, mas de intenções, com o dom de perceber o que cada parte realmente queria por baixo do que declarava. Emma atuava nas sombras, abrindo portas, garantindo a segurança dos encontros e fornecendo o contexto histórico que os irmãos precisavam para não cometer erros irreparáveis.",
          "⎯⎯⎯ A Noite de Março · 1880 ⎯⎯⎯",
          "As negociações duraram doze meses, e houve momentos em que pareceram prestes a fracassar. Numa noite de março de 1880, Adriano voltou para casa com o casaco rasgado, e Fiamma passou as horas seguintes com os olhos vermelhos, sem dizer uma palavra a ninguém. Nenhum dos dois jamais descreveu o que havia acontecido.",
          "Em maio de 1880, os acordos foram assinados. Não havia champanhe, não havia discursos — Emma não documentou a cerimônia nos arquivos oficiais da Vigília, uma omissão deliberada para proteger todas as partes envolvidas. O que existia era um conjunto de termos simples, redigidos por Adriano ao longo de semanas de negociação, revisados por Fiamma e aprovados por Emma: uma estrutura de não agressão mútua, protocolos para a resolução de conflitos, e o reconhecimento implícito de que a presença do sobrenatural em Londres era um fato, não uma aberração a ser corrigida.",
          "A paz nunca foi perfeita. Nunca seria. Mas era real, e durou. Nos anos seguintes, a Vigília tomaria lentamente conhecimento do que havia sido feito, sem nunca debater formalmente os termos do acordo — o que não é oficialmente reconhecido não pode ser oficialmente questionado.",
          "Adriano Barone nunca retornou à Itália. Permaneceu em Londres, onde abriu um escritório de consultoria discreta, ostensivamente voltado a famílias estrangeiras que desejavam estabelecer negócios na Inglaterra, e manteve laços informais com a Vigília por décadas. Fiamma Barone tornou-se uma das figuras mais singulares dos círculos intelectuais londrinos — uma italiana que escrevia em inglês sobre filosofia, frequentava salões literários e sabia exatamente que perguntas não fazer em voz alta. Nunca se casou, e manteve correspondência intensa com Emma Clement até a morte desta, ainda em 1880. Em 1920, ambos seguem em Londres — Adriano com mais de sessenta anos, Fiamma perto dos sessenta —, os dois últimos a saber de primeira mão o que custou aquela paz.",
          "Emma nunca falou publicamente sobre os Barone. Em seus arquivos pessoais há apenas uma anotação inicial — “Chegaram sem nome nesta terra. Partiram sem precisar de um.” — e, meses depois, uma segunda, sem data: “Há pessoas que chegam à sua vida sem aviso e partem sem cerimônia, e só depois você percebe que foi exatamente isso que as tornou indispensáveis.”",
        ],
      },
    ],
    genealogy: [
      {
        id: "emilio-barone",
        name: "Emilio Barone",
        status: "dead",
        years: "1829–1901",
        role: "Patriarca · comerciante de tecidos finos",
        spouse: {
          id: "carlotta-barone",
          name: "Carlotta Ferretti Barone",
          status: "dead",
          years: "1833–1897",
          role: "Matriarca",
        },
        children: [
          {
            id: "adriano-barone",
            name: "Adriano Barone",
            status: "alive",
            years: "1857–",
            role: "Negociador do Acordo de Maio",
          },
          {
            id: "fiamma-barone",
            name: "Fiamma Barone",
            status: "alive",
            years: "1862–",
            role: "Intérprete de intenções · filósofa",
          },
        ],
      },
    ],
  },
];

export function getHouse(slug: string): House | undefined {
  return HOUSES.find((house) => house.slug === slug);
}

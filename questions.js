"use strict";

const questions1 = [
  {
    letter: "a",
    answer: "arteria",
    status: 0,
    question:
      "Con la A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
  },
  {
    letter: "b",
    answer: "bitacora",
    status: 0,
    question:
      "Con la B. En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.",
  },
  {
    letter: "c",
    answer: "cicerone",
    status: 0,
    question:
      "Con la C. Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.",
  },
  {
    letter: "d",
    answer: "diplomacia",
    status: 0,
    question:
      "Con la D. Actividad que realiza un país para mantener buenas relaciones con el resto de países.",
  },
  {
    letter: "e",
    answer: "equinoccio",
    status: 0,
    question:
      "Con la E. Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra.",
  },
  {
    letter: "f",
    answer: "fisiologia",
    status: 0,
    question:
      "Con la F. Ciencia que estudia las funciones de los órganos de los seres vivos.",
  },
  {
    letter: "g",
    answer: "glaciacion",
    status: 0,
    question:
      "Con la G. Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.",
  },
  {
    letter: "h",
    answer: "hinojo",
    status: 0,
    question:
      "Con la H. Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión.",
  },
  {
    letter: "i",
    answer: "ingenio",
    status: 0,
    question:
      "Con la I. Capacidad para inventar cosas o para pensar y hablar con gracia.",
  },
  {
    letter: "j",
    answer: "jade",
    status: 0,
    question:
      "Con la J. Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno.",
  },
  {
    letter: "l",
    answer: "lema",
    status: 0,
    question:
      "Con la L. Frase que expresa la forma en que debe actuar una persona.",
  },
  {
    letter: "m",
    answer: "miriñaque",
    status: 0,
    question:
      "Con la M. Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.",
  },
  {
    letter: "n",
    answer: "ninfa",
    status: 0,
    question:
      "Con la N. En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.",
  },
  {
    letter: "ñ",
    answer: "teñir",
    status: 0,
    question:
      "Contiene la Ñ.  Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados",
  },
  {
    letter: "o",
    answer: "onomatopeya",
    status: 0,
    question:
      "Con la O. Palabra que imita el sonido que hace un animal o una cosa.",
  },
  {
    letter: "p",
    answer: "pabellon",
    status: 0,
    question:
      "Con la P. Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él.",
  },
  {
    letter: "q",
    answer: "quimera",
    status: 0,
    question:
      "Con la Q. Cosa que, sin ser real, alguien la imagina como posible o verdadera.",
  },
  {
    letter: "r",
    answer: "remora",
    status: 0,
    question:
      "Con la R. Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes.",
  },
  {
    letter: "s",
    answer: "sotana",
    status: 0,
    question:
      "Con la S. Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos",
  },
  {
    letter: "t",
    answer: "testamento",
    status: 0,
    question:
      "Con la T. Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.",
  },
  {
    letter: "u",
    answer: "urbanizacion",
    status: 0,
    question:
      "Con la U. Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.",
  },
  {
    letter: "v",
    answer: "vencejo",
    status: 0,
    question:
      "Con la V. Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.",
  },
  {
    letter: "x",
    answer: "xilografia",
    status: 0,
    question:
      "Con la X. Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo.",
  },
  {
    letter: "y",
    answer: "yak",
    status: 0,
    question:
      "Con la Y. Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío.",
  },
  {
    letter: "z",
    answer: "zocalo",
    status: 0,
    question:
      "Con la Z. Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "ascua",
    status: 0,
    question: "Con la A. Trozo de cualquier material ardiendo pero sin llama.",
  },
  {
    letter: "b",
    answer: "bilis",
    status: 0,
    question:
      "Con la B. Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
  },
  {
    letter: "c",
    answer: "cubismo",
    status: 0,
    question:
      "Con la C. Estilo de pintura que comenzó en Francia a principios deL siglo XX y que se caracteriza por representar figuras y objetos mediante formas geométricas.",
  },
  {
    letter: "d",
    answer: "dieresis",
    status: 0,
    question:
      "Con la D. Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
  },
  {
    letter: "e",
    answer: "estria",
    status: 0,
    question:
      "Con la E. Línea que se forma en la piel cuando ésta se ha estirado excesivamente.",
  },
  {
    letter: "f",
    answer: "fonema",
    status: 0,
    question: "Con la F. Sonido de una letra.",
  },
  {
    letter: "g",
    answer: "gaucho",
    status: 0,
    question:
      "Con la G. Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro.",
  },
  {
    letter: "h",
    answer: "himno",
    status: 0,
    question:
      "Con la H. Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país.",
  },
  {
    letter: "i",
    answer: "iman",
    status: 0,
    question: "Con la I. Mineral capaz de atraer el hierro u otros metales.",
  },
  {
    letter: "j",
    answer: "jabato",
    status: 0,
    question: "Con la J. Cría del jabalí.",
  },

  {
    letter: "l",
    answer: "lombriz",
    status: 0,
    question:
      "Con la L. Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.",
  },
  {
    letter: "m",
    answer: "mudejar",
    status: 0,
    question:
      "Con la M. Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica.",
  },
  {
    letter: "n",
    answer: "nogal",
    status: 0,
    question:
      "Con la N. Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.",
  },
  {
    letter: "ñ",
    answer: "gruñido",
    status: 0,
    question: "Contiene la Ñ. Sonido que hace el cerdo.",
  },
  {
    letter: "o",
    answer: "ocre",
    status: 0,
    question:
      "Con la O. Se dice del color que es una mezcla de amarillo y marrón.",
  },
  {
    letter: "p",
    answer: "protocolo",
    status: 0,
    question:
      "Con la P. Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes.",
  },
  {
    letter: "q",
    answer: "quechua",
    status: 0,
    question:
      "Con la Q. Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América.",
  },
  {
    letter: "r",
    answer: "repisa",
    status: 0,
    question:
      "Con la R. Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.",
  },
  {
    letter: "s",
    answer: "solsticio",
    status: 0,
    question:
      "Con la S. Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.",
  },
  {
    letter: "t",
    answer: "troposfera",
    status: 0,
    question:
      "Con la T. Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.",
  },
  {
    letter: "u",
    answer: "utopia",
    status: 0,
    question:
      "Con la U. Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.",
  },
  {
    letter: "v",
    answer: "visera",
    status: 0,
    question:
      "Con la V. Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos.",
  },
  {
    letter: "x",
    answer: "xenofobia",
    status: 0,
    question: "Con la X. Odio o antipatía hacia los extranjeros.",
  },
  {
    letter: "y",
    answer: "yodo",
    status: 0,
    question:
      "Con la Y. Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.",
  },
  {
    letter: "z",
    answer: "zarzal",
    status: 0,
    question: "Con la Z. Lugar donde hay muchas zarzas.",
  },
];

const questions3 = [
  {
    letter: "a",
    answer: "agenda",
    status: 0,
    question:
      "Con la A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer.",
  },
  {
    letter: "b",
    answer: "bonanza",
    status: 0,
    question: "Con la B. Prosperidad.",
  },
  {
    letter: "c",
    answer: "caracol",
    status: 0,
    question:
      "Con la C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse.",
  },
  {
    letter: "d",
    answer: "dormir",
    status: 0,
    question:
      "Con la D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios.",
  },
  {
    letter: "e",
    answer: "entrecot",
    status: 0,
    question:
      "Con la E. Trozo de carne sacado de entre costilla y costilla de la res.",
  },
  {
    letter: "f",
    answer: "farhadi",
    status: 0,
    question:
      "Con la F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017.",
  },
  {
    letter: "g",
    answer: "gorgorito",
    status: 0,
    question:
      "Con la G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar.",
  },
  {
    letter: "h",
    answer: "hidroavion",
    status: 0,
    question:
      "Con la H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua.",
  },
  {
    letter: "i",
    answer: "inapetencia",
    status: 0,
    question: "Con la I. Falta de gana de comer.",
  },
  {
    letter: "j",
    answer: "jardineria",
    status: 0,
    question: "Con la J. Arte y oficio del jardinero.",
  },

  {
    letter: "l",
    answer: "lobera",
    status: 0,
    question: "Con la L. Guarida de lobos.",
  },
  {
    letter: "m",
    answer: "mentira",
    status: 0,
    question:
      "Con la M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída.",
  },
  {
    letter: "n",
    answer: "nativo",
    status: 0,
    question:
      "Con la N. Se aplica al que ha nacido en el lugar de que se trata.",
  },
  {
    letter: "ñ",
    answer: "piñata",
    status: 0,
    question:
      "Contiene la Ñ.  Juego que consiste en colgar a cierta distancia del suelo un recipiente, generalmente lleno de dulces, para romperlo a palos con los ojos vendados.",
  },
  {
    letter: "o",
    answer: "organo",
    status: 0,
    question:
      "Con la O. De las partes del pulpo, animal o vegetal que ejercen una función.",
  },
  {
    letter: "p",
    answer: "plotino",
    status: 0,
    question:
      "Con la P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría.",
  },
  {
    letter: "q",
    answer: "queja",
    status: 0,
    question:
      "Con la Q. Resentimiento o disgusto que se tiene por la actuación o el comportamiento de alguien.",
  },
  {
    letter: "r",
    answer: "rafaga",
    status: 0,
    question: "Con la R. Viento fuerte, resentido y de corta duración.",
  },
  {
    letter: "s",
    answer: "simple",
    status: 0,
    question: "Con la S. Se aplica a lo que no tiene complicación.",
  },
  {
    letter: "t",
    answer: "trece",
    status: 0,
    question: "Con la T. Número cardinal equivalente a 10 + 3.",
  },
  {
    letter: "u",
    answer: "uderzo",
    status: 0,
    question:
      "Con la U. Apellido del dibujante y guionista francés autor de la serie Asterix.",
  },
  {
    letter: "v",
    answer: "verde",
    status: 0,
    question:
      "Con la V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda.",
  },
  {
    letter: "x",
    answer: "xilofono",
    status: 0,
    question:
      "Con la X. Instrumento musical de percusión formado por diversas láminas específicamente afinadas.",
  },
  {
    letter: "y",
    answer: "yunque",
    status: 0,
    question:
      "Con la Y. Bloque de hierro sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo.",
  },
  {
    letter: "z",
    answer: "zoodiacal",
    status: 0,
    question: "Con la Z. Perteneciente o relativo al zoodíaco.",
  },
];

export { questions1, questions2, questions3 };

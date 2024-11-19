interface Course {
    name: string
    abbrev: string
    description: string
    info: string
    professor: string
    coordinater: string
    id: number
    ects: number
}

export const courses : Course[] = [
    {name: "Interação Pessoa Máquina", abbrev: "IPM", description: "Esta disciplina enfatiza a importância de uma boa interface e mostra como os métodos de desenho de interacção podem ter uma contribuição muito significativa para a melhoria da interacção pessoa-máquina e, consequentemente para o sucesso dos sistemas interactivos. Pretende-se preparar os alunos para o desenvolvimento de interfaces de sistemas interactivos que do ponto de vista do utilizador se revelem eficientes e eficazes. Serão estudados os factores humanos que condicionam a interacção. Será analisado o ciclo de vida completo de desenvolvimento de interfaces para sistemas interactivos, incluido: análise e formulação dos requisitos dos utilizadores, exploração de possíveis soluções, avaliação do potencial destas soluções, implementação de protótipos e sua avaliação. A disciplina foca os aspectos recentes da teoria e prática da especificação, desenho, implementação e avaliação de interfaces, discutindo os principais aspectos do processo iterativo de desenho. Também é explorada a recente investigação a decorrer nesta área de conhecimento (HCI), de forma a proporcionar aos alunos uma visão abrangente da mesma, bem como o conhecimento dos mais recentes e inovadores desenvolvimento ocorrido neste campo.", info: "Some very brief description about the course.", professor: "Teresa Isabel Lopes Romão", coordinater: "Teresa Isabel Lopes Romão", id: 10796, ects: 6},
    {name: "Álgebra Linear e Geometria Analítica", abbrev: "ALGA", description: "Study of vector spaces, linear mappings, matrices, and geometry.", info: "Provides foundational knowledge in linear algebra and geometry for computing.", professor: "Pedro Martins", coordinater: "Ana Sousa", id: 11505, ects: 6},
    {name: "Análise Matemática I", abbrev: "AMI", description: "Introduction to calculus, focusing on limits, derivatives, and integrals.", info: "Essential for understanding mathematical analysis in engineering contexts.", professor: "João Pereira", coordinater: "Maria Silva", id: 11504, ects: 6},
    {name: "Competências Transversais para Ciências e Tecnologia", abbrev: "CTCT", description: "Covers essential soft skills for science and technology professionals.", info: "Focuses on communication, teamwork, and problem-solving skills.", professor: "Carla Mendes", coordinater: "Ricardo Almeida", id: 10352, ects: 3},
    {name: "Introdução à Programação", abbrev: "IP", description: "Basic programming concepts using a high-level language.", info: "Covers data structures, control structures, and basic algorithms.", professor: "Miguel Costa", coordinater: "Laura Oliveira", id: 10637, ects: 9},
    {name: "Sistemas Lógicos", abbrev: "SL", description: "Focus on logic gates, circuits, and formal systems.", info: "Introduces logical reasoning and its applications in computing systems.", professor: "Sofia Ferreira", coordinater: "Carlos Ramos", id: 5294, ects: 6},
    {name: "Análise Matemática II E", abbrev: "AMIIE", description: "Advanced topics in calculus, including multivariable functions and differential equations.", info: "Further develops mathematical skills for complex engineering problems.", professor: "Helena Duarte", coordinater: "Fernando Santos", id: 7996, ects: 6},
    {name: "Arquitetura de Computadores", abbrev: "AC", description: "Study of computer organization and architecture.", info: "Covers CPUs, memory, and system design fundamentals.", professor: "Bruno Nogueira", coordinater: "Paula Martins", id: 11152, ects: 9},
    {name: "Matemática Discreta", abbrev: "MD", description: "Study of discrete structures like graphs, sets, and logic.", info: "Critical for algorithms and data structures in computing.", professor: "Ana Rocha", coordinater: "Luís Moreira", id: 3629, ects: 6},
    {name: "Programação Orientada pelos Objetos", abbrev: "POO", description: "Focus on object-oriented programming principles.", info: "Covers inheritance, encapsulation, and polymorphism.", professor: "Joana Ribeiro", coordinater: "Nuno Gomes", id: 11153, ects: 9},
    {name: "Algoritmos e Estruturas de Dados", abbrev: "AED", description: "Design and analysis of algorithms and data structures.", info: "Key concepts for problem-solving and optimization.", professor: "Ricardo Costa", coordinater: "Sandra Lopes", id: 11154, ects: 9},
    {name: "Estruturas de Dados", abbrev: "ED", description: "Advanced study of data structures such as trees and graphs.", info: "Focuses on efficient data manipulation and retrieval methods.", professor: "Miguel Oliveira", coordinater: "Patrícia Pinto", id: 11506, ects: 6},
    {name: "Sistemas Operativos", abbrev: "SO", description: "Study of operating system concepts, management of hardware and software.", info: "Provides essential knowledge on system calls, processes, and memory management.", professor: "José Ferreira", coordinater: "Vera Silva", id: 2123, ects: 9},
    {name: "Redes de Computadores", abbrev: "RC", description: "Introduction to computer networks, protocols, and communication models.", info: "Focuses on Internet protocols, network topologies, and security.", professor: "Carlos Pereira", coordinater: "Isabel Costa", id: 4311, ects: 6},
    {name: "Teoria da Computação", abbrev: "TC", description: "Study of formal languages, automata, and computation models.", info: "Introduces the theoretical limits of what can be computed.", professor: "Luís Almeida", coordinater: "Ana Lima", id: 7094, ects: 6},
    {name: "Inteligência Artificial", abbrev: "IA", description: "Introduction to AI concepts, including search algorithms, machine learning, and natural language processing.", info: "Key concepts for developing intelligent systems and automation.", professor: "Cláudia Santos", coordinater: "Rui Silva", id: 6310, ects: 9},
    {name: "Programação Avançada", abbrev: "PA", description: "Advanced programming techniques including concurrency, memory management, and design patterns.", info: "Develops complex software engineering skills.", professor: "Fábio Rodrigues", coordinater: "Sandra Silva", id: 8221, ects: 9},
    {name: "Engenharia de Software", abbrev: "ES", description: "Focus on software development lifecycle, including requirements, design, and testing.", info: "Provides skills for managing large-scale software projects.", professor: "Miguel Almeida", coordinater: "Joana Pinto", id: 9045, ects: 9},
    {name: "Cálculo Numérico", abbrev: "CN", description: "Study of numerical methods for solving mathematical problems.", info: "Covers approximation, interpolation, and error analysis in computations.", professor: "José Martins", coordinater: "Catarina Rodrigues", id: 2200, ects: 6},
    {name: "Bases de Dados", abbrev: "BD", description: "Introduction to database design, query languages, and management systems.", info: "Fundamental for managing and manipulating data in computing systems.", professor: "Marco Almeida", coordinater: "Ana Costa", id: 7369, ects: 9},
    {name: "Matemática para Computação", abbrev: "MPC", description: "Mathematical concepts applied to computing, including combinatorics and probability.", info: "Essential for understanding algorithmic efficiency and data analysis.", professor: "Ricardo Silva", coordinater: "Cláudia Pereira", id: 5273, ects: 6},
    {name: "Computação Gráfica", abbrev: "CG", description: "Study of graphical algorithms, rendering techniques, and 3D modeling.", info: "Introduces techniques for visual computing and computer-generated imagery.", professor: "Patrícia Costa", coordinater: "Fábio Almeida", id: 6819, ects: 9},
    {name: "Segurança Informática", abbrev: "SI", description: "Study of computer security, encryption, and secure communications.", info: "Focuses on methods for securing digital systems and networks.", professor: "Raquel Silva", coordinater: "Carlos Fernandes", id: 4672, ects: 6},
    {name: "Fundamentos de Programação", abbrev: "FP", description: "Fundamental programming concepts, focusing on structured and procedural approaches.", info: "Covers variables, loops, and conditionals to form the basis of programming.", professor: "Vera Rocha", coordinater: "João Costa", id: 2331, ects: 6},
    {name: "Redes Neurais", abbrev: "RN", description: "Study of neural networks, deep learning, and machine learning algorithms.", info: "Introduces techniques for developing AI systems that can learn from data.", professor: "João Martins", coordinater: "Ricardo Pinto", id: 1256, ects: 9}
  ]

  export const coursesRegister = [
    {
      label: "Qualidade de Software",
    },
    {
      label: "Preparação da Dissertação",
    },
    {
      label: "Empreendedorismo",
    },
    {
      label: "Aprendizagem Automática",
    },
    {
      label: "Segurança de Software",
    },
  ]
  
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
    {name: "Inteligência Artificial", abbrev: "IA", description: "Introduction to AI concepts, including search algorithms, machine learning, and natural language processing.", info: "Key concepts for developing intelligent systems and automation.", professor: "Cláudia Santos", coordinater: "Rui Silva", id: 6310, ects: 9},
    {name: "Matemática para Computação", abbrev: "MPC", description: "Mathematical concepts applied to computing, including combinatorics and probability.", info: "Essential for understanding algorithmic efficiency and data analysis.", professor: "Ricardo Silva", coordinater: "Cláudia Pereira", id: 5273, ects: 6},
    {name: "Programação Avançada", abbrev: "PA", description: "Advanced programming techniques including concurrency, memory management, and design patterns.", info: "Develops complex software engineering skills.", professor: "Fábio Rodrigues", coordinater: "Sandra Silva", id: 8221, ects: 9},
    {name: "Bases de Dados", abbrev: "BD", description: "Introduction to database design, query languages, and management systems.", info: "Fundamental for managing and manipulating data in computing systems.", professor: "Marco Almeida", coordinater: "Ana Costa", id: 7369, ects: 9},
    {name: "Computação Gráfica", abbrev: "CG", description: "Study of graphical algorithms, rendering techniques, and 3D modeling.", info: "Introduces techniques for visual computing and computer-generated imagery.", professor: "Patrícia Costa", coordinater: "Fábio Almeida", id: 6819, ects: 9},
    {name: "Segurança Informática", abbrev: "SI", description: "Study of computer security, encryption, and secure communications.", info: "Focuses on methods for securing digital systems and networks.", professor: "Raquel Silva", coordinater: "Carlos Fernandes", id: 4672, ects: 6},
    {name: "Fundamentos de Programação", abbrev: "FP", description: "Fundamental programming concepts, focusing on structured and procedural approaches.", info: "Covers variables, loops, and conditionals to form the basis of programming.", professor: "Vera Rocha", coordinater: "João Costa", id: 2331, ects: 6},
    {name: "Redes Neurais", abbrev: "RN", description: "Study of neural networks, deep learning, and machine learning algorithms.", info: "Introduces techniques for developing AI systems that can learn from data.", professor: "João Martins", coordinater: "Ricardo Pinto", id: 1256, ects: 9}
  ]

  export const coursesRegister = [
    {name: "Qualidade de Software", abbrev: "QS", description: "No description", info: "No info.", professor: "Professor Name", coordinater: "Coordinater Name", id: 10000, ects: 6},
    {name: "Preparação da Dissertação", abbrev: "PS", description: "No description", info: "No info.", professor: "Professor Name", coordinater: "Coordinater Name", id: 10000, ects: 6},
    {name: "Empreendedorismo", abbrev: "EMP", description: "No description", info: "No info.", professor: "Professor Name", coordinater: "Coordinater Name", id: 10000, ects: 6},
    {name: "Aprendizagem Automática", abbrev: "AA", description: "No description", info: "No info.", professor: "Professor Name", coordinater: "Coordinater Name", id: 10000, ects: 6},
    {name: "Segurança de Software", abbrev: "SS", description: "No description", info: "No info.", professor: "Professor Name", coordinater: "Coordinater Name", id: 10000, ects: 6}
  ]
  
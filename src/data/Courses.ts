export interface Course {
    name: string
    abbrev: string
    description: string
    info: string
    professor: string
    coordinater: string
    id: number
    ects: number
    enrolled: boolean
}

export const courses : Course[] = [
    {name: "Computação Gráfica", abbrev: "CG", description: "Study of graphical algorithms, rendering techniques, and 3D modeling.", info: "Introduces techniques for visual computing and computer-generated imagery.", professor: "Patrícia Costa", coordinater: "Fábio Almeida", id: 6819, ects: 9, enrolled: false},
    {name: "Segurança Informática", abbrev: "SI", description: "Study of computer security, encryption, and secure communications.", info: "Focuses on methods for securing digital systems and networks.", professor: "Raquel Silva", coordinater: "Carlos Fernandes", id: 4672, ects: 6, enrolled: false},
    {name: "Fundamentos de Programação", abbrev: "FP", description: "Fundamental programming concepts, focusing on structured and procedural approaches.", info: "Covers variables, loops, and conditionals to form the basis of programming.", professor: "Vera Rocha", coordinater: "João Costa", id: 2331, ects: 6, enrolled: false},
    {name: "Redes Neurais", abbrev: "RN", description: "Study of neural networks, deep learning, and machine learning algorithms.", info: "Introduces techniques for developing AI systems that can learn from data.", professor: "João Martins", coordinater: "Ricardo Pinto", id: 1256, ects: 9, enrolled: false},
    {name: "Qualidade de Software", abbrev: "QS", description: "Introduction to software quality principles, covering standards, methodologies, and practices for maintaining and improving quality during development and evolution.", info: "Key approaches for ensuring long-term software quality through reverse engineering, refactoring, and reuse techniques.", professor: "João Martins", coordinater: "Ricardo Pinto", id: 1256, ects: 9, enrolled: false},
    {name: "Interação Pessoa Máquina", abbrev: "IPM", description: "Introduction to HCI concepts, focusing on human factors, interface design, iterative processes, and evaluation methods to create effective and user-centered interactive systems.", info: "Key principles for designing and evaluating user-friendly interfaces and enhancing human-computer interaction.", professor: "Teresa Isabel Lopes Romão", coordinater: "Teresa Isabel Lopes Romão", id: 10796, ects: 6, enrolled: true},
    {name: "Inteligência Artificial", abbrev: "IA", description: "Introduction to AI concepts, including search algorithms, machine learning, and natural language processing.", info: "Key concepts for developing intelligent systems and automation.", professor: "Cláudia Santos", coordinater: "Rui Silva", id: 6310, ects: 9, enrolled: true},
    {name: "Matemática para Computação", abbrev: "MPC", description: "Mathematical concepts applied to computing, including combinatorics and probability.", info: "Essential for understanding algorithmic efficiency and data analysis.", professor: "Ricardo Silva", coordinater: "Cláudia Pereira", id: 5273, ects: 6, enrolled: true},
    {name: "Programação Avançada", abbrev: "PA", description: "Advanced programming techniques including concurrency, memory management, and design patterns.", info: "Develops complex software engineering skills.", professor: "Fábio Rodrigues", coordinater: "Sandra Silva", id: 8221, ects: 9, enrolled: true},
    {name: "Bases de Dados", abbrev: "BD", description: "Introduction to database design, query languages, and management systems.", info: "Fundamental for managing and manipulating data in computing systems.", professor: "Marco Almeida", coordinater: "Ana Costa", id: 7369, ects: 9, enrolled: true},
]
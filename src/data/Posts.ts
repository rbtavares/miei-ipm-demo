export type Post = {
    id: number;
    title: string;
    content: string;
    comments: number;
    time: Date;
    timeAgo: string;
    author: string;
    courseName: string;
};

// Helper function to format timeAgo strings
const getTimeAgo = (daysAgo: number): string => `${daysAgo} days ago`;

export const posts: Post[] = [
    // Generate posts for each course
    ...([
        "Interação Pessoa Máquina",
        "Álgebra Linear e Geometria Analítica",
        "Análise Matemática I",
        "Competências Transversais para Ciências e Tecnologia",
        "Introdução à Programação",
        "Sistemas Lógicos",
        "Análise Matemática II E",
        "Arquitetura de Computadores",
        "Matemática Discreta",
        "Programação Orientada pelos Objetos",
        "Algoritmos e Estruturas de Dados",
        "Estruturas de Dados",
        "Sistemas Operativos",
        "Redes de Computadores",
        "Teoria da Computação",
        "Inteligência Artificial",
        "Programação Avançada",
        "Engenharia de Software",
        "Cálculo Numérico",
        "Bases de Dados",
        "Matemática para Computação",
        "Computação Gráfica",
        "Segurança Informática",
        "Fundamentos de Programação",
        "Redes Neurais"
    ]).flatMap((courseName, courseIndex) =>
        Array.from({ length: 3 }, (_, postIndex) => ({
            id: courseIndex * 3 + postIndex + 1,
            title: `${courseName} - Post ${postIndex + 1}`,
            content: `This post covers key insights and updates related to the course "${courseName}".`,
            comments: Math.floor(Math.random() * 50), 
            time: new Date(new Date().getTime() - Math.random() * 10000000000), 
            timeAgo: getTimeAgo(Math.floor(Math.random() * 30)), 
            author: `Professor ${courseIndex + 1}`,
            courseName: courseName
        }))
    )
];

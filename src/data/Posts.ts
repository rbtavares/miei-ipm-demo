export type Comment = {
    id: number;
    author: string;
    content: string;
    timeAgo: string;
};

export type Post = {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
    time: Date;
    timeAgo: string;
    author: string;
    courseName: string;
    keywords: string[];
};

// Helper function to format timeAgo strings
const getTimeAgo = (daysAgo: number): string => `${daysAgo} days ago`;

// Template comments to be used for each post
const templateComments: Comment[] = [
    {
        id: 1,
        author: "João Silva",
        content: "Great explanation! This really helped me understand the concept better.",
        timeAgo: "2 days ago"
    },
    {
        id: 2,
        author: "Maria Santos",
        content: "Could you elaborate more on the last point? I'm still a bit confused.",
        timeAgo: "1 day ago"
    },
    {
        id: 3,
        author: "Pedro Costa",
        content: "Thanks for sharing! The examples were particularly helpful.",
        timeAgo: "12 hours ago"
    }
];

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
            comments: templateComments.map((comment, idx) => ({
                ...comment,
                id: (courseIndex * 3 + postIndex) * 3 + idx + 1
            })),
            time: new Date(new Date().getTime() - Math.random() * 10000000000),
            timeAgo: getTimeAgo(Math.floor(Math.random() * 30)),
            author: `Student ${courseIndex + 1}`,
            courseName: courseName,
            keywords: ["Learning", "Education", "Question"]
        }))
    )
];
export type Comment = {
    id: number;
    author: string;
    content: string;
    timeAgo: string;
}

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
}

// Helper function to format timeAgo strings
const getTimeAgo = (daysAgo: number): string => `${daysAgo} days ago`;

export const templateComments: Comment[] = [
    {
        id: 0,
        author: "Martim Gonçalves",
        content: "I'm having trouble understanding the project requirements. Can someone break down the key components we need to implement?",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Diana Mendes Henriques",
        content: "@Martim Gonçalves I found that creating a detailed project plan and breaking it down into smaller tasks really helps manage the complexity. Don't hesitate to ask for specific guidance!",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Rodrigo Costa",
        content: "@Martim Gonçalves Pro tip: Start by creating a basic prototype and then iteratively improve it. This approach helps in understanding the requirements step by step.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },

    {
        id: 0,
        author: "Diana Mendes",
        content: "The Pomodoro Technique changed my study game! 25 minutes of focused study followed by a 5-minute break keeps me motivated and prevents burnout.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Tomás Henriques",
        content: "I've found that creating mind maps and visual summaries helps me retain complex information much better than traditional note-taking.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Rodrigo Costa",
        content: "Active recall and spaced repetition are game-changers. Instead of passive reading, I quiz myself regularly and spread out my study sessions.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },

    {
        id: 0,
        author: "Diana Mendes",
        content: "Check out Coursera and edX for free online courses that complement our curriculum. They have some amazing in-depth tutorials!",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Tomás Henriques",
        content: "YouTube channels like 'Coding Train' and 'Computerphile' are incredible for supplementary learning. They explain complex topics in an engaging way.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Rodrigo Costa",
        content: "Don't underestimate books! 'Clean Code' by Robert Martin and 'Design Patterns' by Gang of Four are must-reads for serious developers.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Diana Mendes",
        content: "These courses aren't just about grades. They're about building a skill set that makes us competitive in the job market. Every concept we learn is a potential differentiator.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Tomás Henriques",
        content: "It's fascinating how theoretical concepts translate into real-world problem-solving. What we're learning here is the foundation of technological innovation.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    },
    {
        id: 0,
        author: "Rodrigo Costa",
        content: "These courses are teaching us more than just technical skills. They're developing our critical thinking, problem-solving, and collaborative abilities.",
        timeAgo: getTimeAgo(Math.floor(Math.random() * 30))
    }
]

export const posts: Post[] = [
    ...([
        "Interação Pessoa Máquina",
        "Inteligência Artificial",
        "Programação Avançada",
        "Engenharia de Software",
        "Cálculo Numérico",
        "Bases de Dados",
        "Matemática para Computação",
        "Computação Gráfica",
        "Segurança Informática",
        "Fundamentos de Programação",
        "Redes Neurais",
        "Qualidade de Software"
    ]).flatMap((courseName, courseIndex) => {
        const projectChallengeComments = templateComments.slice(0, 3).map((comment, idx) => ({
            ...comment,
            id: (courseIndex * 4) * 3 + idx + 1
        }))

        const studyStrategyComments = templateComments.slice(3, 6).map((comment, idx) => ({
            ...comment,
            id: (courseIndex * 4 * 3) + 3 + idx + 1
        }))

        const resourceSharingComments = templateComments.slice(6, 9).map((comment, idx) => ({
            ...comment,
            id: (courseIndex * 4 * 3) + 6 + idx + 1
        }))

        const reflectionComments = templateComments.slice(9, 12).map((comment, idx) => ({
            ...comment,
            id: (courseIndex * 4 * 3) + 9 + idx + 1
        }))
        
        return [
            {
                id: courseIndex * 4 + 1,
                title: `Project 2 Challenges - ${courseName}`,
                content: `Seeking help with the first project in ${courseName}. What are the main challenges you're encountering? Let's share strategies and insights to overcome initial obstacles.`,
                comments: projectChallengeComments,
                time: new Date(new Date().getTime() - Math.random() * 10000000000),
                timeAgo: getTimeAgo(Math.floor(Math.random() * 30)),
                author: `Teresa Romão`,
                courseName: courseName,
                keywords: ["Project", "Challenges", "Support"]
            },

            {
                id: courseIndex * 4 + 2,
                title: `Study Strategies - ${courseName}`,
                content: `Sharing effective study strategies for ${courseName}. How can we maximize learning and manage time efficiently? Let's discuss practical approaches to mastering the course material.`,
                comments: studyStrategyComments,
                time: new Date(new Date().getTime() - Math.random() * 10000000000),
                timeAgo: getTimeAgo(Math.floor(Math.random() * 30)),
                author: `Marta Félix`,
                courseName: courseName,
                keywords: ["Learning", "Techniques", "Productivity"]
            },

            {
                id: courseIndex * 4 + 3,
                title: `Useful Resources - ${courseName}`,
                content: `A compilation of the best online resources, tutorials, and supplementary materials to deepen knowledge in ${courseName}. Come share your favorite links and learning resources!`,
                comments: resourceSharingComments,
                time: new Date(new Date().getTime() - Math.random() * 10000000000),
                timeAgo: getTimeAgo(Math.floor(Math.random() * 30)),
                author: `Filipe Correia`,
                courseName: courseName,
                keywords: ["Resources", "Materials", "Knowledge"]
            },
            {
                id: courseIndex * 4 + 4,
                title: `Reflections on ${courseName}`,
                content: `What is the importance of this course in our academic and professional journey? Let's share perspectives on how ${courseName} contributes to our skill development and future career paths.`,
                comments: reflectionComments,
                time: new Date(new Date().getTime() - Math.random() * 10000000000),
                timeAgo: getTimeAgo(Math.floor(Math.random() * 30)),
                author: `Teresa Romão`,
                courseName: courseName,
                keywords: ["Development", "Career", "Perspectives"]
            }
        ]
    }
   )
]
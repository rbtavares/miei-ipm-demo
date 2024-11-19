export type Material = {
    id: number
    name: string
    type: "Theoretical" | "Practical" | "Test" | "Project" | "Other"
    uploadTime: Date
    author: string
    pdfUrl: string
    size: number
    courseName: string
}

const materialTypes: Material['type'][] = ["Theoretical", "Practical", "Test", "Project", "Other"];

// Function to generate course abbreviations
const getCourseAbbreviation = (courseName: string): string => {
    return courseName
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
};

export const materials: Material[] = [
    // Interação Pessoa Máquina (IPM) Materials
    ...Array.from({length: 3}, (_, i) => materialTypes.map((type, typeIndex) => ({
        id: i * 5 + typeIndex + 1,
        name: `IPM_${type}_${i+1}`,
        type: type,
        uploadTime: new Date(`2024-0${2 + typeIndex}-${15 + i}`),
        author: "Teresa Romão",
        pdfUrl: `/materials/ipm/${type.toLowerCase()}-${i+1}.pdf`,
        size: 1000000 + i * 50000 + typeIndex * 10000,
        courseName: "Interação Pessoa Máquina"
    }))).flat(),

    // Materials for other courses (1 of each type)
    ...([
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
        materialTypes.map((type, typeIndex) => ({
            id: 1000 + courseIndex * 5 + typeIndex + 1,
            name: `${getCourseAbbreviation(courseName)}_${type}`,
            type: type,
            uploadTime: new Date(`2024-0${2 + typeIndex}-${15 + courseIndex}`),
            author: `Professor ${courseIndex + 1}`,
            pdfUrl: `/materials/${courseName.toLowerCase().replace(/\s+/g, '-')}/${type.toLowerCase()}.pdf`,
            size: 1000000 + courseIndex * 50000 + typeIndex * 10000,
            courseName: courseName
        }))
    )
];
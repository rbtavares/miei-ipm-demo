export type Material = {
    id: number
    name: string
    type: "Theoretical" | "Practical" | "Test" | "Project" | "Other"
    uploadTime: Date
    author: string
    pdfUrl: string
    size: number
    course: string
}

const materialTypes: Material['type'][] = ["Theoretical", "Practical", "Test", "Project", "Other"];

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
        course: "IPM"
    }))).flat(),

    // Materials for other courses (1 of each type)
    ...([
        "ALGA",
        "AMI",
        "CTCT",
        "IP",
        "SL",
        "AMIIE",
        "AC",
        "MD",
        "POO",
        "AED",
        "ED",
        "SO",
        "RC",
        "TC",
        "IA",
        "PA",
        "ES",
        "CN",
        "BD",
        "MPC",
        "CG",
        "SI",
        "FP",
        "RN"
    ]).flatMap((course, courseIndex) => 
        materialTypes.map((type, typeIndex) => ({
            id: 1000 + courseIndex * 5 + typeIndex + 1,
            name: `${course}_${type}`,
            type: type,
            uploadTime: new Date(`2024-0${2 + typeIndex}-${15 + courseIndex}`),
            author: `Professor ${courseIndex + 1}`,
            pdfUrl: `/materials/${course.toLowerCase().replace(/\s+/g, '-')}/${type.toLowerCase()}.pdf`,
            size: 1000000 + courseIndex * 50000 + typeIndex * 10000,
            course: course
        }))
    )
];
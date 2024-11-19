interface Student {
    name: string
    number: number
}

interface Shift {
    course: string
    courseId: number
    shiftName: string
    location: string
    datetime: string
    professor: string
    enrolledStudents: Student[]
}

export const shifts: Shift[] = [
    {
        course: "Interação Pessoa Máquina",
        courseId: 10796,
        shiftName: "Practical 1",
        location: "Lab 1.1",
        datetime: "Monday 14:30-16:30",
        professor: "Teresa Isabel Lopes Romão",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 }
        ]
    },
    {
        course: "Programação Orientada pelos Objetos",
        courseId: 11153,
        shiftName: "Theoretical 1",
        location: "Room 2.1",
        datetime: "Tuesday 10:30-12:30",
        professor: "Joana Ribeiro",
        enrolledStudents: [
            { name: "Pedro Costa", number: 55126 },
            { name: "Sofia Martins", number: 55127 },
            { name: "Rui Fernandes", number: 55128 }
        ]
    },
    {
        course: "Algoritmos e Estruturas de Dados",
        courseId: 11154,
        shiftName: "Lab 2",
        location: "Lab 3.2",
        datetime: "Wednesday 16:30-18:30",
        professor: "Ricardo Costa",
        enrolledStudents: [
            { name: "Carlos Oliveira", number: 55129 },
            { name: "Inês Rodrigues", number: 55130 },
            { name: "Miguel Sousa", number: 55131 }
        ]
    }
]
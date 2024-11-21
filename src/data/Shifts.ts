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
        shiftName: "Practical 6",
        location: "121 - Ed.2",
        datetime: "Monday 07:00-09:00",
        professor: "Teresa Romão",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Inteligência Artificial",
        courseId: 6310,
        shiftName: "Theoretical 1",
        location: "1C - Ed.7",
        datetime: "Monday 11:00-13:00",
        professor: "Cláudia Santos",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Interação Pessoa Máquina",
        courseId: 10796,
        shiftName: "Practical 6",
        location: "121 - Ed.2",
        datetime: "Tuesday 07:00-09:00",
        professor: "Teresa Romão",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Qualidade de Software",
        courseId: 6310,
        shiftName: "Practical 2",
        location: "4.3 - Ed.8",
        datetime: "Tuesday 11:00-13:00",
        professor: "Miguel Monteiro",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Matemática para Computação",
        courseId: 5273,
        shiftName: "Practical 9",
        location: "1C - Ed.7",
        datetime: "Thursday 09:00-11:00",
        professor: "Ricardo Silva",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Qualidade de Software",
        courseId: 6310,
        shiftName: "Practical 1",
        location: "4.3 - Ed.8",
        datetime: "Wednesday 13:00-15:00",
        professor: "Miguel Monteiro",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Matemática para Computação",
        courseId: 5273,
        shiftName: "Practical 9",
        location: "4.3 - Ed.8",
        datetime: "Thursday 09:00-11:00",
        professor: "Ricardo Silva",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Matemática para Computação",
        courseId: 5273,
        shiftName: "Theoretical 1",
        location: "1D - Ed.7",
        datetime: "Thursday 17:00-19:00",
        professor: "Ricardo Silva",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Interação Pessoa Máquina",
        courseId: 10796,
        shiftName: "Theoretical 2",
        location: "Sala 128 - Ed.2",
        datetime: "Friday 07:00-09:00",
        professor: "Teresa Romão",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Inteligência Artificial",
        courseId: 6310,
        shiftName: "Practical 3",
        location: "4.3 - Ed.9",
        datetime: "Friday 13:00-15:00",
        professor: "Cláudia Santos",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
    {
        course: "Qualidade de Software",
        courseId: 63102,
        shiftName: "Theoretical 1",
        location: "4.3 - Ed.8",
        datetime: "Wednesday 17:00-19:00",
        professor: "Miguel Monteiro",
        enrolledStudents: [
            { name: "Ana Silva", number: 55123 },
            { name: "João Santos", number: 55124 },
            { name: "Maria Pereira", number: 55125 },
            { name: "Carlos Almeida", number: 55126 },
            { name: "Beatriz Costa", number: 55127 },
            { name: "Miguel Ferreira", number: 55128 },
            { name: "Patrícia Lopes", number: 55129 },
            { name: "Rui Marques", number: 55130 },
            { name: "Helena Dias", number: 55131 },
            { name: "André Rocha", number: 55132 },
            { name: "Luís Fonseca", number: 55133 },
            { name: "Sara Nunes", number: 55134 },
            { name: "Tiago Carvalho", number: 55135 },
            { name: "Catarina Oliveira", number: 55136 }
        ]
    },
]
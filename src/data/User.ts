export type User = {
    name: string
    number: number
    identifier: string
    birthday: Date
    location: string
    nationality: string
    mother: string
    father: string
    taxnumber: string
    cc: string
    email: string
    phone: string
}

export const users: User[] = [
    {
        name: "Martim Gonçalves",
        number: 71340,
        identifier: "mmr.gonc",
        birthday: new Date('2006-06-01T00:00:00'),
        location: "Oeiras, PT",
        nationality: "Portuguese",
        mother: "Ana Margarida Gonçalves",
        father: "??? foi comprar pão",
        taxnumber: "272558486",
        cc: "000000000",
        email: "mmr.goncalves@fct.unl.pt",
        phone: "939544053"
    }
]
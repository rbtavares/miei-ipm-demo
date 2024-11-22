export interface ToPay {
    deadline: Date
    amount: number
}

export const toPay: ToPay[] = [
    {deadline: new Date(2024, 10, 28),  amount: 69.7},
    {deadline: new Date(2024, 11, 28),  amount: 69.7},
    {deadline: new Date(2024, 0, 28),  amount: 69.7},
    {deadline: new Date(2024, 1, 28),  amount: 69.7},
    {deadline: new Date(2024, 2, 28),  amount: 69.7},
    {deadline: new Date(2024, 3, 28),  amount: 69.7}
]

export interface Paid {
    invoice: string
    method: string
    date: Date
}

export const paid: Paid[] = [
    {invoice: 'INV001', method: 'Credit Card', date: new Date() },
    {invoice: 'INV002', method: 'Credit Card', date: new Date() },
    {invoice: 'INV003', method: 'Credit Card', date: new Date() },
    {invoice: 'INV004', method: 'MBWay', date: new Date() },
    {invoice: 'INV005', method: 'MBWay', date: new Date() }
]
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { Label } from '@radix-ui/react-label'
import { PaperclipIcon } from 'lucide-react'
import { useState } from 'react'

const PaymentCard = () => {

    const toPayCell = (date: string) => (
        <TableRow>
            <TableCell>{date}</TableCell>
            <TableCell >69,70€</TableCell>
            <TableCell className="text-right">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='h-6'>Pay</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Payment</DialogTitle>
                            <DialogDescription>
                                Tuition Fee - Value: 69,70€
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input
                                    id="name"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </TableCell>
        </TableRow>
    )

    const paidCell = (invoice: number, date: string) => (
        <TableRow>
            <TableCell className="font-medium flex gap-2 items-center">
                <Button variant="ghost" className='h-6 px-2'>
                    <PaperclipIcon size={16} /> INV00{invoice}
                </Button>
            </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">{date}</TableCell>
        </TableRow>
    )

    const [isPaidTable, setIsPaidTable] = useState(false);

    return (
        <div className="card flex-1 p-4 flex h-full w-full flex-col gap-2 fscroll absolute">
            <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto">
                <div className='w-full flex justify-between'>
                    <h1 className="header">Payments</h1>
                    <div className='flex items-center gap-2'>
                        <Label htmlFor="airplane-mode">Due</Label>
                        <Switch id="payment" onCheckedChange={() => setIsPaidTable(!isPaidTable)} />
                        <Label htmlFor="airplane-mode">Paid</Label>
                    </div>
                </div>

                {isPaidTable ?
                    <Table>
                        <TableHeader>
                            <TableRow className='hover:bg-transparent'>
                                <TableHead>Invoice</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right h-10">Payment Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paidCell(1, '30/09/2024')}
                            {paidCell(2, '31/10/2024')}
                            {paidCell(3, '30/11/2024')}
                            {paidCell(4, '31/12/2024')}
                            {paidCell(5, '31/01/2025')}
                        </TableBody>
                    </Table>
                    :
                    <Table>
                        <TableHeader>
                            <TableRow className='hover:bg-transparent'>
                                <TableHead>Deadline</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead className="text-right">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className='h-6 bg-white/40' variant="secondary">Pay All</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove your data from our servers.
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {toPayCell('28/02/2025')}
                            {toPayCell('31/03/2025')}
                            {toPayCell('30/04/2025')}
                            {toPayCell('31/05/2025')}
                            {toPayCell('30/06/2025')}
                            {toPayCell('31/07/2025')}
                        </TableBody>
                    </Table>
                }
            </div>
        </div>
    )
}

export default PaymentCard;
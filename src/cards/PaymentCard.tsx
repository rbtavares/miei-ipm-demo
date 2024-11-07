import { Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell} from '@/components/ui/table'
import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
      



const PaymentCard = () => {

    const toPayCell = ( date: string ) => (
        <TableRow>            
            <TableCell>{date}</TableCell>
            <TableCell >69,70€</TableCell>
            <TableCell className="text-right">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='h-8'>Pay</Button>
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
            </TableCell>
        </TableRow>   
    )

    const paidCell = ( invoice: number, date: string ) => (
        <TableRow>
            <TableCell className="font-medium">INV00{invoice}</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">{date}</TableCell>
        </TableRow>
    )

    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-10 h-2/3 fscroll">
            <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto max-h-[25vh]">
                <h1 className="header">Fees to Pay</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Deadline</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className='h-8'>Pay All</Button>
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
            </div>
            <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto max-h-[25vh]">
                <h1 className='header'>Paid Fees</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Payment Date</TableHead>
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
            </div>
        </div>
    )
}

export default PaymentCard;
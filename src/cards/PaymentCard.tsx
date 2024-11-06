import { Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell} from '@/components/ui/table'
import { Button } from '@/components/ui/button';



const PaymentCard = () => {

    const cell = ( date: string ) => (
        <TableRow>            
            <TableCell>{date}</TableCell>
            <TableCell >69,70€</TableCell>
            <TableCell className="text-right">
                <Button className='h-8'>Pay</Button>
            </TableCell>
        </TableRow>   
    )

    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-5 h-full fscroll overflow-y-auto">
            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl text-white font-medium drop-shadow-md'>Fees to Pay</h2>
                <Table className='text-white'>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Deadline</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cell('31/11/2024')}
                        {cell('31/11/2024')}
                        {cell('31/11/2024')}
                        {cell('31/11/2024')}
                    </TableBody>
                </Table>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='flex text-3xl text-white font-medium drop-shadow-md'>Paid Fees</h2>
                <Table className='text-white'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead>Deadline</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell>31/11/2024</TableCell>
                            <TableCell className="text-right">69,70€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell>31/11/2024</TableCell>
                            <TableCell className="text-right">69,70€</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default PaymentCard;
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Label } from '@radix-ui/react-label'
import { PaperclipIcon } from 'lucide-react'
import { useState } from 'react'

interface IPayEntryDialog {

}

const PayEntryDialog = () => (
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
)

interface IDuePaymentEntry {
  deadline: Date
  amount: number
}

const DuePaymentEntry = ({ deadline, amount }: IDuePaymentEntry) => (
  <TableRow>
    <TableCell>{String(deadline.toLocaleDateString("pt-PT"))}</TableCell>
    <TableCell >{amount.toFixed(2)}€</TableCell>
    <TableCell className="text-right">
      <PayEntryDialog />
    </TableCell>
  </TableRow>
)

interface IPaidPaymentEntry {
  invoice: string
  method: string
  date: Date
}

const PaidPaymentEntry = ({ invoice, method, date }: IPaidPaymentEntry) => (
  <TableRow>
    <TableCell className="font-medium flex gap-2 items-center">
      <Button variant="ghost" className='h-6 px-2'>
        <PaperclipIcon size={16} /> {invoice}
      </Button>
    </TableCell>
    <TableCell>{method}</TableCell>
    <TableCell className="text-right">{date.toLocaleDateString("pt-PT")}</TableCell>
  </TableRow>
)


interface IPayments {

}

const Payments = () => {

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
              <PaidPaymentEntry invoice={'INV001'} method={'Credit Card'} date={new Date()} />
              <PaidPaymentEntry invoice={'INV002'} method={'Credit Card'} date={new Date()} />
              <PaidPaymentEntry invoice={'INV003'} method={'Credit Card'} date={new Date()} />
              <PaidPaymentEntry invoice={'INV004'} method={'MBWay'} date={new Date()} />
              <PaidPaymentEntry invoice={'INV005'} method={'MBWay'} date={new Date()} />
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
              <DuePaymentEntry deadline={new Date()} amount={69.7} />
              <DuePaymentEntry deadline={new Date()} amount={69.7} />
              <DuePaymentEntry deadline={new Date()} amount={69.7} />
              <DuePaymentEntry deadline={new Date()} amount={69.7} />
              <DuePaymentEntry deadline={new Date()} amount={69.7} />
              <DuePaymentEntry deadline={new Date()} amount={69.7} />
            </TableBody>
          </Table>
        }
      </div>
    </div>
  )
}

export default Payments;
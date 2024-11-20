import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PaperclipIcon } from 'lucide-react'
import { useState } from 'react'

const PayEntryDialog = () => {

  const [option, setOption] = useState("mbway");

  return <Dialog>
    <DialogTrigger asChild>
      <Button className='h-6'>Pay</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-2xl'>Payment</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        Description: Tuition Fee<br />Value: 69,70€
      </DialogDescription>

      <RadioGroup defaultValue={option} onValueChange={(v) => setOption(v)} className='gap-5 bg-white/10 rounded-lg p-3'>
        <div className='flex flex-col gap-3 flex-1'>
          <div className='flex gap-2'>
            <RadioGroupItem value="mbway" className='mt-1.5' />
            <h1 className='text-lg text-white font-medium'>MB Way</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <Label>Phone Number</Label>
            <div className='flex gap-3'>
              <Input disabled={option !== 'mbway'} id="name" className="font-mono" placeholder='910000000' />
              <Button disabled={option !== 'mbway'} variant="secondary">Confirm</Button>
            </div>
          </div>
        </div>

        <div className='h-[1px] bg-white/50' />

        <div className='flex flex-col gap-3 flex-1'>
          <div className='flex gap-2'>
            <RadioGroupItem value="credit-card" className='mt-1.5' />
            <h1 className='text-lg text-white font-medium'>Credit Card</h1>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <Label>Card Number</Label>
              <Input disabled={option !== 'credit-card'} className="font-mono" placeholder='0000 0000 0000 0000' />
            </div>
            <div className='flex flex-row gap-3 items-end'>
              <div className='flex flex-col gap-1 flex-1'>
                <Label>Holder Name</Label>
                <Input disabled={option !== 'credit-card'} className="" placeholder='John Doe' />
              </div>
              <div className='flex flex-col gap-1 flex-1'>
                <Label>CVC / CVV</Label>
                <Input disabled={option !== 'credit-card'} className="font-mono" placeholder='000' />
              </div>
              <Button disabled={option !== 'credit-card'} variant="secondary">Confirm</Button>
            </div>
          </div>

        </div>
      </RadioGroup>

    </DialogContent>
  </Dialog>
}

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


{/*interface IPayments {

}*/}

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
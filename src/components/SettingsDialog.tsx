import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Settings } from "lucide-react"


const SettingsDialog = () => {

    return (
        <Dialog>
            <DialogTrigger><Settings className="size-6 text-white/50 hover:text-white/80 duration-300 hover:animate-spin" /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-5">Settings</DialogTitle>
                    <DialogDescription>
                        <Label>Background</Label>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="aspect-video bg-shapes w-full bg-cover rounded  cursor-pointer" onClick={() => {}} />
                            <div className="aspect-video bg-shapes w-full bg-cover rounded  cursor-pointer" onClick={() => {}} />
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SettingsDialog
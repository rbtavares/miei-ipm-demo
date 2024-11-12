import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Settings } from "lucide-react"


const SettingsDialog = () => {
    return (
        <Dialog>
            <DialogTrigger><Settings className="size-6 text-white/50 hover:text-white/80 duration-300 hover:animate-spin"/></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>
                        Nothing Here
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SettingsDialog
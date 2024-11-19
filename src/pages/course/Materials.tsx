import { Input } from "@/components/ui/input"
import { PaperclipIcon } from "lucide-react"
import { MouseEventHandler, useState } from "react"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Material, materials } from "@/data/Materials"

const formatBytes = (bytes: number, decimals: number = 1) => {
    if (bytes === 0 || isNaN(bytes)) return '0 B';

    const k = 1024;
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];

    // Find the appropriate unit level
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // Convert to the appropriate unit and round to specified decimals
    const value = bytes / Math.pow(k, i);

    // Return formatted string
    return `${parseFloat(value.toFixed(decimals))} ${units[i]}`;
}

interface IMaterialCard {
    animationDelay?: number,
    name: string,
    uploadTime: Date,
    size: number,
    author: string,
    type: string,
    onClickCallback: MouseEventHandler
}
  

const MaterialCard = ({ name, uploadTime, size, onClickCallback, animationDelay, author, type }: IMaterialCard) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: animationDelay }}
            className="break-all bg-white/25  rounded-md flex flex-col flex-1 justify-between cursor-pointer select-none items-center min-h-40 p-2"
            onClick={onClickCallback}
        >

            <div className="relative h-full w-full flex items-center justify-center">
                <div className="absolute w-full h-full flex items-center justify-center">
                    <PaperclipIcon size={64} className="opacity-25" />
                </div>

                <h1 className="text-center z-10">{name}</h1>
            </div>

            <div className="flex flex-col w-full items-center border-t border-t-white/30 justify-between pt-1">
                <h5 className="text-xs">{type}</h5>
                <h5 className="text-xs font-light">{author}</h5>
                <h5 className="text-xs font-light">{uploadTime.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</h5>
                <h5 className="text-xs font-light">{formatBytes(size)}</h5>
            </div>
        </motion.div>
    )
}

const MaterialGrid = ({ name }: { name: string }) => {
    const [filter, setFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredMaterials = materials
        .filter((m) => m.courseName === name)
        .filter((m) => (filter === "all" || m.type === filter))
        .filter((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

  
    return (

        <div className="flex flex-col gap-2 overflow-y-auto fscroll w-full">
            <div className="flex gap-2">
                <div className="flex gap-2 overflow-x-auto ghost-scroll">

                {["all", "Theoretical", "Practical", "Project", "Other"].map((type, index) => (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
                >
                    <Button
                        key={type}
                        onClick={() => setFilter(type as Material["type"] | "all")}
                        className={`px-3 py-1 rounded-full ${filter === type ? " bg-white text-black" : "drop-shadow-md bg-white/20 border border-white text-white"}`}
                        >
                            {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                    </Button>
                </motion.div>
            ))}
            </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="w-1/3">
                    <Input
                        placeholder="Search by name..."
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-black drop-shadow-md h-8 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                    />
                </motion.div>
            </div>

            <div className="grid grid-cols-4 gap-2 overflow-y-auto pr-1">
                {filteredMaterials.map((material, index) => (
                    <div key={`${material.id}-${material.name}`} className="flex-1 flex flex-col gap-3 text-white">
                        <MaterialCard
                            name={material.name}
                            uploadTime={material.uploadTime}
                            size={material.size}
                            onClickCallback={() => window.open(material.pdfUrl, "_blank")}
                            animationDelay={0.4 + 0.1 * index} 
                            author={material.author} 
                            type={material.type}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
  
const MaterialsCard = ({ name }: { name: string }) => {
    return (
        <div className="card w-full h-full flex-1 p-4 flex flex-col gap-4 absolute">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="header">Materials</motion.h1>
            <MaterialGrid name={name} />
        </div>
    )
}

export default MaterialsCard;
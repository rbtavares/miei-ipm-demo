import { Input } from "@/components/ui/input"
import { Paperclip } from "lucide-react"
import { useState } from "react"

type Material = {
    id: number
    name: string
    status: "theoretical" | "practical" | "test" | "project" | "other"
    date: string
    author: string
    pdfUrl: string
}
  
export const materials: Material[] = [
    {
        id: 1,
        name: "IPM1_Intro",
        status: "theoretical",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 2,
        name: "IPM2_Intro",
        status: "theoretical",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 3,
        name: "IPM1_Intro",
        status: "practical",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 4,
        name: "IPM2_Intro",
        status: "other",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 5,
        name: "IPM1_Intro",
        status: "project",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 6,
        name: "IPM1_Intro",
        status: "project",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 7,
        name: "IPM1_Intro",
        status: "project",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 8,
        name: "IPM1_Intro",
        status: "project",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    },
    {
        id: 9,
        name: "IPM1_Intro",
        status: "project",
        date: new Date().toLocaleDateString("pt-PT"),
        author: "Teresa Romão",
        pdfUrl: "teste"
    }
]


interface IMaterialCard {
    name: string,
    date: string,
    author: string,
    status: string,
    onClick: () => void
}
  
const MaterialCard = ({ name, date, author, status, onClick }: IMaterialCard) => {
    return (
        <div className="bg-white/20 rounded-lg shadow-sm flex mr-2 p-2">
            <div className="flex flex-col gap-2 flex-1">
                <div className='cursor-pointer max-w-screen-2xl w-full flex gap-4 items-center' onClick={onClick}>
                    <Paperclip className="text-gray-700 ml-2" size={35}/>
                    <div className="w-full">
                        <h3 className="w-full flex items-center justify-between">
                            <span>{name}</span>
                            <span className="text-xs opacity-50 italic">{status}</span>
                        </h3>
                        <h3 className="text-sm">{date}</h3>
                        <h3 className="text-xs opacity-50 mt-2">{author}</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

const MaterialGrid = () => {
    const [filter, setFilter] = useState<Material["status"] | "all">("all");
    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredMaterials = materials
        .filter((m) => (filter === "all" || m.status === filter))
        .filter((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

  
    return (
        <div className="flex flex-col gap-4 overflow-y-auto fscroll">

            <div className="flex gap-2">
            {["all", "theoretical", "practical", "project"].map((type) => (
                <button
                key={type}
                onClick={() => setFilter(type as Material["status"] | "all")}
                className={`px-3 py-1 rounded-full ${filter === type ? " bg-white text-black" : "drop-shadow-md bg-white/20 border border-white text-white"}`}
                >
                {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            ))}
            </div>

            <Input placeholder="Search by name" type="text" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} className="text-black drop-shadow-md"/>

            <div className="gap-4 overflow-y-auto max-h-80 mt-4">
                    {filteredMaterials.map((material) => (
                        <div key={`${material.id}-${material.name}`} className="flex-1 flex flex-col gap-3 text-white mt-2">
                            <MaterialCard name={material.name} date={material.date} author={material.author} status={material.status} onClick={() => window.open(material.pdfUrl, "_blank")} />
                        </div>
                    ))}
            </div>
        </div>
    )
}
  
const MaterialsCard = () => {
    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-4">
            <h1 className="header">Materials</h1>
            <MaterialGrid />
        </div>
    )
}

export default MaterialsCard;
import { Paperclip } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

type Document = {
    id: number
    name: string
    year: '2024/2025' | '2023/2024' | '2022/2023'
    pdfUrl: string
}

export const documents: Document[] = [
    {
        id: 1,
        name: 'sub_23_2425.pdf',
        year: '2024/2025',
        pdfUrl: "teste"
    },
    {
        id: 2,
        name: 'comp_matric_2425.pdf',
        year: '2024/2025',
        pdfUrl: "teste"
    },
    {
        id: 3,
        name: 'sub_23_2324.pdf',
        year: '2023/2024',
        pdfUrl: "teste"
    },
    {
        id: 4,
        name: 'comp_matric_2324.pdf',
        year: '2023/2024',
        pdfUrl: "teste"
    },
    {
        id: 5,
        name: 'sub_23_2223.pdf',
        year: '2022/2023',
        pdfUrl: "teste"
    },
    {
        id: 6,
        name: 'comp_matric_2223.pdf',
        year: '2022/2023',
        pdfUrl: "teste"
    }
]

interface IDocumentCard {
    name: string,
    year: string,
    onClick: () => void
}

const DocumentCard = ({ name, year, onClick }: IDocumentCard) => {
    return (
        <div className="bg-white/20 rounded-lg shadow-sm flex mr-2 p-2">
            <div className="flex flex-col gap-2 flex-1">
                <div className='cursor-pointer max-w-screen-2xl w-full flex gap-4 items-center' onClick={onClick}>
                    <Paperclip className="text-gray-700 ml-2" size={35}/>
                    <div className="w-full">
                        <h3 className="w-full flex items-center justify-between">
                            <span>{name}</span>
                            <span className="text-xs opacity-50 italic">{year}</span>
                        </h3>
                </div>
                </div>
            </div>
        </div>
    )
}

const DocumentGrid = () => {
    const [filter, setFilter] = useState<Document["year"] | "all">("all");
    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredDocuments = documents
        .filter((m) => (filter === "all" || m.year === filter))
        .filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()));

  
    return (
        <div className="flex flex-col gap-2 overflow-y-auto fscroll max-h-56 w-full">

            <div className="flex gap-2">
            {["all", "2024/2025", "2023/2024", "2022/2023"].map((type) => (
                <button
                key={type}
                onClick={() => setFilter(type as Document["year"] | "all")}
                className={`px-3 py-1 rounded-full ${filter === type ? " bg-white text-black" : "drop-shadow-md bg-white/20 border border-white text-white"}`}
                >
                {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            ))}
            </div>

            <Input placeholder="Search by name" type="text" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value);  console.log(e.target.value);}} className="text-black drop-shadow-md"/>

            <div className="gap-4 overflow-y-auto max-h-80 mt-4">
                    {filteredDocuments.map((document) => (
                        <div key={`${document.id}-${document.name}`} className="flex-1 flex flex-col gap-3 text-white mt-2">
                            <DocumentCard name={document.name} year={document.year} onClick={() => window.open(document.pdfUrl, "_blank")} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

const DocumentsCard = () => {

    return (
        <div className="card w-full h-1/2 flex-1 p-4 flex flex-col gap-4">
            <h1 className="header">Documents</h1>
            <DocumentGrid />
        </div>
    )
}

export default DocumentsCard;
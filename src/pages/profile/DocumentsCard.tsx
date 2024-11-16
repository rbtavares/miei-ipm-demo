import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PaperclipIcon } from "lucide-react"
import { MouseEventHandler, useState } from "react"
import { userDocuments as documents } from "../../data/Documents"

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

// Academic year constant
const ACADEMIC_YEAR_START_MONTH = 8; // 8 for September (0-11 in JavaScript)

// Function to get academic year from a date
const getAcademicYear = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // If month is September or later, it's part of the year/year+1 academic year
    // Otherwise it's part of the year-1/year academic year
    const startYear = month >= ACADEMIC_YEAR_START_MONTH ? year : year - 1;
    return `${startYear}/${(startYear + 1).toString().slice(2)}`;
};

interface IDocumentCard {
    name: string,
    uploadTime: Date,
    size: number,
    onClickCallback: MouseEventHandler
}

const DocumentCard = ({ name, uploadTime, size, onClickCallback }: IDocumentCard) => {
    return (
        <div className="break-all bg-white/25  rounded-md flex flex-col flex-1 justify-between items-center min-h-40 p-2" onClick={onClickCallback}>

            <div className="relative h-full w-full flex items-center justify-center">
                <div className="absolute w-full h-full flex items-center justify-center">
                    <PaperclipIcon size={64} className="opacity-25" />
                </div>

                <h1 className="text-center z-10">{name}</h1>
            </div>

            <div className="flex w-full items-center border-t border-t-white/30 justify-between pt-1">
                <h2 className="text-sm">{uploadTime.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</h2>
                <h5 className="text-xs font-light">{formatBytes(size)}</h5>
            </div>
        </div>
    )
}

const DocumentGrid = () => {
    const [filter, setFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Get unique academic years from documents
    const getAcademicYears = () => {
        const years = documents.map(doc => getAcademicYear(doc.uploadTime));
        const uniqueYears = Array.from(new Set(years)).sort((a, b) => {
            // Sort by the first year in the academic year string
            return parseInt(b.split('/')[0]) - parseInt(a.split('/')[0]);
        });
        return ["all", ...uniqueYears];
    };

    const filteredDocuments = documents
        .filter((doc) => {
            if (filter === "all") return true;
            return getAcademicYear(doc.uploadTime) === filter;
        })
        .filter((doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex flex-col gap-2 overflow-y-auto fscroll w-full">
            <div className="flex gap-2">
                <div className="flex gap-2 w-1/2 overflow-x-auto ghost-scroll">
                    {getAcademicYears().map((year) => (
                        <Button
                            key={year}
                            onClick={() => setFilter(year)}
                            className="rounded-full border border-white h-8"
                            variant={filter === year ? 'default' : 'secondary'}
                        >
                            {year === "all" ? "All" : year}
                        </Button>
                    ))}
                </div>

                <Input 
                    placeholder="Search by name..." 
                    type="text" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="text-black drop-shadow-md w-1/2 h-8 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none" 
                />
            </div>

            <div className="grid grid-cols-4 gap-2 overflow-y-auto">
                {filteredDocuments.map((document) => (
                    <div key={`${document.id}-${document.name}`} className="flex-1 flex flex-col gap-3 text-white">
                        <DocumentCard 
                            name={document.name} 
                            uploadTime={document.uploadTime} 
                            size={document.size} 
                            onClickCallback={() => window.open(document.pdfUrl, "_blank")} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const DocumentsCard = () => {

    return (
        <div className="card w-full h-full flex-1 p-4 flex flex-col gap-4 absolute">
            <h1 className="header">Documents</h1>
            <DocumentGrid />
        </div>
    )
}

export default DocumentsCard;
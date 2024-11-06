import { useNavigate } from "react-router-dom"
import { getPath } from "@/lib/utils";

interface ICourseCard {
    name: string,
    abbrev: string,
    description: string
    onClick: () => void
}

const CourseCard = ({ name, abbrev, description, onClick }: ICourseCard) => {
    return (
        <div className="bg-white/30 py-2 px-3 rounded-lg shadow-sm flex mr-2">
            <div className="flex flex-col gap-2 flex-1">
                <div>
                    <h1 className="cursor-pointer text-xl font-medium" onClick={onClick}>{name}</h1>
                    <h3 className="text-xs opacity-70 italic">{abbrev}</h3>
                </div>
                <p className="text-sm">{description}</p>
            </div>
            <div className="h-full flex items-center">
                <h4 className="bg-white/60 rounded-full aspect-square w-8 flex items-center justify-center font-medium text-lg text-black/75">1</h4>
            </div>
        </div>
    )
}

const MaterialsCard = () => {

    const navigate = useNavigate();

    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-4 h-1/2 fscroll">
            <h1 className="text-3xl font-medium text-white drop-shadow-md">Courses</h1>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto max-h-[50vh]">

                <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))}/>
                
            </div>

        </div>
    )
}

export default MaterialsCard;
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
        <div className="cursor-pointer bg-white/20 py-2 px-3 rounded-lg shadow-sm flex mr-2" onClick={onClick}>
            <div className="flex flex-col gap-2 flex-1">
                <div>
                    <h1 className=" text-xl font-medium">{name}</h1>
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

const CoursesCard = () => {

    const navigate = useNavigate();

    return (
        <div className="relative flex-1">
            <div className="absolute card h-full w-full flex-1 p-4 flex flex-col gap-4 fscroll">
                <h1 className="header">Courses</h1>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto max-h-[50vh]">

                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Gestão de Empresas" abbrev="GdE" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="An" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                    <CourseCard name="Interação Pessoa-Máquina" abbrev="IPM" description="npc land" onClick={() => navigate(getPath('/course'))} />
                </div>
            </div>
        </div>
    )
}

export default CoursesCard;
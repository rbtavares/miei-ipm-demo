import { useNavigate } from "react-router-dom"
import { getPath } from "@/lib/utils";
import { courses } from "@/data/Courses";
import { motion } from "framer-motion"

const animate = {
    opacity: 1,
    y: 0
}

const initial = {
    opacity: 0,
    y: 150
}

interface ICourseCard {
    name: string,
    abbrev: string,
    description: string
    onClick: () => void
}

const CourseCard = ({ name, abbrev, description, onClick }: ICourseCard) => {
    return (
        <div className="cursor-pointer bg-white/20 py-2 px-3 rounded-lg shadow-sm flex" onClick={onClick}>
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
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="header">Courses</motion.h1>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto pr-1">

                    {courses.map((item, index) => <motion.div
                        initial={initial}
                        animate={animate}
                        transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                        key={index}
                    >
                        <CourseCard name={item.name} abbrev={item.abbrev} description={item.info} onClick={() => navigate(getPath('/course'))} />
                    </motion.div>)}
                </div>
            </div>
        </div>
    )
}

export default CoursesCard;
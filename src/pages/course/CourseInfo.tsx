import { motion } from 'framer-motion'
import { courses } from '@/data/Courses';
import { Button } from '@/components/ui/button';
import { CalendarRange } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseInfoCard = ({ name }: { name: string }) => {
    const course = courses.find(course => course.name === name);
    const navigate = useNavigate();

    return (
        <div className="card w-full h-full flex-1 p-4 flex flex-col gap-2 absolute fscroll">
            {/* Title */}
            <div className="flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="header">{course?.name}</motion.h1> 

                <Button onClick={() => navigate('/miei-ipm-demo/schedule')} className="relative bg-white/70">
                    <CalendarRange /> Schedule
                </Button>
            </div>

            <div className="gap-2 pr-1 flex-1 flex flex-col p-0 text-white text-justify overflow-y-auto leading-tight">
            <div className="flex flex-col text-white">
                <h2 className="text-xs opacity-90">Professor: {course?.professor}</h2> 
                <h2 className="text-xs opacity-90">Coordinater: {course?.coordinater}</h2> 
            </div>
                <h2>{course?.description}</h2> 
            </div>
        </div>
    )
}

export default CourseInfoCard;
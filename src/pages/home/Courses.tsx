import { courses } from "@/data/Courses";
import { getPath } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCard {
  name: string
  abbrev: string
  info: string
  ects: number
  hasNotifications?: boolean
}

const CourseCard = ({ name, abbrev, info, ects, hasNotifications = false }: CourseCard) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/20 flex h-full px-3 py-2 rounded-lg cursor-pointer" 
    onClick={() => navigate(getPath(`/course/${encodeURIComponent(name)}`))}>

      {/* Course Info */}
      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h1 className=" text-xl font-medium">{name}</h1>
          <h3 className="text-xs opacity-70">{abbrev} &mdash; {ects} ECTS</h3>
        </div>
        <p className="text-sm">{info}</p>
      </div>

      {/* Notifications & Arrow */}
      <div className="h-full flex flex-col justify-center gap-2 text-white/60">
        <div className="relative">
          {hasNotifications &&
            <span className="absolute top-[-4px] right-[-1px] flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-white/80"></span>
            </span>
          }
          <Bell />
        </div>

        <ArrowRight />
      </div>

    </div>
  )
}

const Courses = () => (
  <div className="relative flex-1">
    <div className="absolute h-full w-full card fscroll flex flex-col gap-4 p-4">

      {/* Card Header */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="header"
      >
        Courses
      </motion.h1>

      {/* Card Content */}
      <div className="flex flex-1 flex-col gap-3 text-white overflow-y-auto pr-1">
        {courses.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            key={index}
          >
            <CourseCard
              name={item.name}
              abbrev={item.abbrev}
              info={item.info}
              ects={item.ects}
              hasNotifications={index % 2 == 0}
            />
          </motion.div>
        ))}
      </div>

    </div>
  </div>
);

export default Courses;
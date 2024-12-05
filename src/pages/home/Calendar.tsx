import { Button } from "@/components/ui/button";
import { getPath } from "@/lib/utils";
import { CalendarRange } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { motion } from 'framer-motion'

const animate = {
    opacity: 1
}

const initial = {
    opacity: 0
}


const CalendarBox = () => {
    const today = new Date();
    const currentDay = today.getDate(); 
    const currentMonth = today.getMonth(); 
    const currentYear = today.getFullYear(); 
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const dates = Array.from({ length: firstDayOfMonth })
      .fill(null)
      .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  
    return (
      <div className="grid grid-cols-7 h-full w-full gap-2">
 

        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center text-white text-xl font-medium cursor-default"
          >
            {day}
          </motion.div>
        ))}
  
        {dates.map((date, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-center text-white/70 font-light cursor-default ${
              date === currentDay ? "bg-white/20 rounded-full" : ""
            }`}
            style={{
              height: "2rem", 
              width: "3rem", 
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            {date != null ? date.toString() : ""}
          </motion.div>
        ))}
      </div>
    );
  };

const Calendar = ({ hasRegisteredInCourses }: { hasRegisteredInCourses: boolean }) => {
    const navigate = useNavigate();
    const monthName = new Date().toLocaleString('en-US', { month: 'long' });

    return (
        <div
            className="card flex flex-1 flex-col gap-4 p-4">
            <motion.h1 initial={initial} animate={animate} transition={{ duration: 1, delay: 0.2 }} className="header">Calendar<span className="text-sm ml-2 text-white/40">({monthName})</span></motion.h1>
            <div className="flex flex-col gap-2 h-full w-full">
                <div className="flex-1 relative">
                    <div className="flex-1 h-full w-full">
                        <CalendarBox />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1 flex items-center">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white/20 h-[1px]" />
                    </div>
                    <motion.div initial={initial} animate={animate} transition={{ duration: 0.5, delay: 0.9 }}>
                        <Button onClick={() => navigate(getPath('/schedule'))} className="relative">
                        {hasRegisteredInCourses && (
                            <span className="absolute top-[-4px] right-[-4px] flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        )}
                            <CalendarRange /> Schedule
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;
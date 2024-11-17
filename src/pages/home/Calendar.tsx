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
    return (
        <div className="grid grid-cols-7 h-full w-full gap-2">
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.3 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">S</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.35 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">M</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.4 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">T</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.45 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">W</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">T</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.55 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">F</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.6 }} className="flex items-center justify-center text-white text-xl font-medium cursor-default">S</motion.div>

            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.35 }} className="flex items-center justify-center text-white/70 font-light cursor-default"></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.4 }} className="flex items-center justify-center text-white/70 font-light cursor-default"></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.45 }} className="flex items-center justify-center text-white/70 font-light cursor-default">1</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className="flex items-center justify-center text-white/70 font-light cursor-default">2</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.55 }} className="flex items-center justify-center text-white/70 font-light cursor-default">3</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.6 }} className="flex items-center justify-center text-white/70 font-light cursor-default"><h1 className="bg-white/20 aspect-square h-full rounded-full flex items-center justify-center">4</h1></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.65 }} className="flex items-center justify-center text-white/70 font-light cursor-default">5</motion.div>

            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.4 }} className="flex items-center justify-center text-white/70 font-light cursor-default">6</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.45 }} className="flex items-center justify-center text-white/70 font-light cursor-default">7</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className="flex items-center justify-center text-white/70 font-light cursor-default">8</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.55 }} className="flex items-center justify-center text-white/70 font-light cursor-default">9</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.6 }} className="flex items-center justify-center text-white/70 font-light cursor-default">10</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.65 }} className="flex items-center justify-center text-white/70 font-light cursor-default">11</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.7 }} className="flex items-center justify-center text-white/70 font-light cursor-default"><h1 className="bg-white/20 aspect-square h-full rounded-full flex items-center justify-center">12</h1></motion.div>

            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.45 }} className="flex items-center justify-center text-white/70 font-light cursor-default">13</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className="flex items-center justify-center text-white/70 font-light cursor-default">14</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.55 }} className="flex items-center justify-center text-white/70 font-light cursor-default">15</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.6 }} className="flex items-center justify-center text-white/70 font-light cursor-default">16</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.65 }} className="flex items-center justify-center text-white/70 font-light cursor-default">17</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.7 }} className="flex items-center justify-center text-white/70 font-light cursor-default">18</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.75 }} className="flex items-center justify-center text-white/70 font-light cursor-default">19</motion.div>

            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className="flex items-center justify-center text-white/70 font-light cursor-default">20</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.55 }} className="flex items-center justify-center text-white/70 font-light cursor-default"><h1 className="border border-white aspect-square h-full rounded-full flex items-center justify-center">21</h1></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.6 }} className="flex items-center justify-center text-white/70 font-light cursor-default">22</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.65 }} className="flex items-center justify-center text-white/70 font-light cursor-default">23</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.7 }} className="flex items-center justify-center text-white/70 font-light cursor-default">24</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.75 }} className="flex items-center justify-center text-white/70 font-light cursor-default">25</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.8 }} className="flex items-center justify-center text-white/70 font-light cursor-default">26</motion.div>

            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.55 }} className="flex items-center justify-center text-white/70 font-light cursor-default">27</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.6 }} className="flex items-center justify-center text-white/70 font-light cursor-default">28</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.65 }} className="flex items-center justify-center text-white/70 font-light cursor-default">29</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.7 }} className="flex items-center justify-center text-white/70 font-light cursor-default">30</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.75 }} className="flex items-center justify-center text-white/70 font-light cursor-default">31</motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.8 }} className="flex items-center justify-center text-white/70 font-light cursor-default"></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.85 }} className="flex items-center justify-center text-white/70 font-light cursor-default"></motion.div>
        </div >
    )
}

const Calendar = () => {
    const navigate = useNavigate();

    return (
        <div
            className="card flex flex-1 flex-col gap-4 p-4">
            <motion.h1 initial={initial} animate={animate} transition={{ duration: 1, delay: 0.2 }} className="header">Calendar</motion.h1>
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
                        <span className="absolute top-[-4px] right-[-4px] flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                            <CalendarRange /> Schedule
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;
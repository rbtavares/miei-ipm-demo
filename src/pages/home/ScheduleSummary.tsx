import UpcomingEventsCard from "@/cards/UpcomingEventsCard";
import { Button } from "@/components/ui/button";
import { getPath } from "@/lib/utils";
import { CalendarRange } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
    return (
        <div className="grid grid-cols-7 h-full w-full gap-2">
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">S</div>
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">M</div>
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">T</div>
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">W</div>
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">T</div>
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">F</div>
            <div className="flex items-center justify-center text-white text-xl font-medium cursor-default">S</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default"></div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default"></div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">1</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">2</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">3</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">4</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">5</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">6</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">7</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">8</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">9</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">10</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">11</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">12</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">13</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">14</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">15</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">16</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">17</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">18</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">19</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">20</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">21</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">22</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">23</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">24</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">25</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">26</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">27</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">28</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">29</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">30</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default">31</div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default"></div>
            <div className="flex items-center justify-center text-white/70 font-light cursor-default"></div>
        </div>
    )
}

const ScheduleSummary = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-1 gap-5 max-h-96">
            <div className="relative h-full min-w-64">
                <div className="absolute w-full h-full">
                    <UpcomingEventsCard />
                </div>
            </div>
            <div className="card flex flex-1 flex-col gap-4 p-4">
                <h1 className="header">Calendar</h1>
                <div className="flex flex-col gap-2 h-full w-full">
                    <div className="flex-1 relative">
                        <div className="flex-1 h-full w-full">
                            <Calendar />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1 flex items-center">
                            <div className="bg-white/20 h-[1px] w-full" />
                        </div>
                        <Button onClick={() => navigate(getPath('/schedule'))}>
                            <CalendarRange /> Schedule
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleSummary
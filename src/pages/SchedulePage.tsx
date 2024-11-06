import DetailedViewCard from "@/cards/DetailedViewCard";
import ScheduleInfoCard from "@/cards/ScheduleInfoCard";
import UpcomingEventsCard from "@/cards/UpcomingEventsCard";
import Navbar from "@/components/Navbar";
import { useBackground } from "@/hooks/useBackground";
import { getPath } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const breadcrumbRoutes = [
    { name: 'Home', dest: getPath('/home') },
    { name: 'Schedule', dest: getPath('/schedule') },
]

const SchedulePage = () => {
    const { backgroundClass } = useBackground();

    return (
        <div className={`min-h-screen w-full flex flex-col items-center bg-[#010D10] ${backgroundClass} bg-center bg-cover bg-fixed`}>

            <div className="max-w-screen-2xl flex flex-col gap-2 2xl:gap-5 w-full flex-1 pt-0 p-2 2xl:pt-0 2xl:p-5">

                {/* Navbar */}
                <Navbar routes={breadcrumbRoutes} />

                {/* Content */}
                <div className="flex-1 w-full max-w-screen-2xl grid grid-cols-4 gap-2 2xl:gap-5">

                    {/* Left Pane */}
                    <div className="flex flex-col gap-2 2xl:gap-5">
                        <UpcomingEventsCard />
                    </div>

                    {/* Center Pane */}
                    <div className="flex flex-col gap-2 2xl:gap-5 col-span-2">
                        <ScheduleInfoCard />
                        <div className="w-full pb-10 flex gap-5 items-center justify-center">
                            <Button>Button</Button>
                            <Button variant="secondary">Button</Button>
                            <Button variant="outline">Button</Button>
                        </div>
                    </div>

                    {/* Right Pane */}
                    <DetailedViewCard />

                </div>

            </div>

        </div>
    )
}

export default SchedulePage;
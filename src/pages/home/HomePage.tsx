import NotificationsCard from "@/cards/NotificationsCard";
import UpcomingEventsCard from "@/cards/UpcomingEventsCard";
import Navbar from "@/components/Navbar";
import { useBackground } from "@/hooks/useBackground";
import { getPath } from "@/lib/utils";
import Courses from "@/pages/home/Courses";
import ProfileSummary from "@/pages/home/ProfileSummary";
import Progress from "@/pages/home/Progress";
import Calendar from "./Calendar";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => {
  const { backgroundClass } = useBackground();

  return (
    <div className={`min-h-screen w-full flex flex-col items-center bg-[#010D10] ${backgroundClass} bg-center bg-cover bg-fixed`}>

      <div className="max-w-screen-2xl h-full overflow-hidden flex flex-col gap-2 2xl:gap-5 w-full flex-1 pt-0 p-2 2xl:pt-0 2xl:p-5">

        {/* Navbar */}
        <Navbar routes={breadcrumbRoutes} />

        {/* Content */}
        <div className="flex-1 w-full max-w-screen-2xl grid grid-cols-4 gap-2 2xl:gap-5">

          {/* Left Pane */}
          <div className="flex flex-col gap-2 2xl:gap-5">
            <ProfileSummary/>
            <Progress progress={120}/>
          </div>

          {/* Center Pane */}
          <div className="flex flex-col h-full gap-2 2xl:gap-5 col-span-2">
            <div className="flex flex-1 gap-5 max-h-96">
              <div className="relative h-full w-2/5">
                <div className="absolute w-full h-full">
                  <UpcomingEventsCard />
                </div>
              </div>
              <Calendar />
            </div>
            <Courses  />
          </div>

          {/* Right Pane */}
          <NotificationsCard  />

        </div>

      </div>

    </div>
  )
}

export default HomePage;
import NotificationsCard from "@/cards/NotificationsCard";
import UpcomingEventsCard from "@/cards/UpcomingEventsCard";
import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import Courses from "@/pages/home/Courses";
import ProfileSummary from "@/pages/home/ProfileSummary";
import Progress from "@/pages/home/Progress";
import Calendar from "./Calendar";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => (
  <div className="h-screen w-full flex justify-center bg-shapes2 bg-center bg-cover bg-fixed">
    <div className="max-w-screen-2xl flex flex-1 flex-col gap-2 2xl:gap-5 px-2 2xl:px-5 overflow-hidden">

      {/* Navbar */}
      <Navbar routes={breadcrumbRoutes} />

      {/* Content */}
      <div className="flex-1 grid grid-cols-4 pb-2 2xl:pb-5 gap-2 2xl:gap-5">

        {/* Left Pane */}
        <div className="flex flex-1 flex-col gap-2 2xl:gap-5">
          <ProfileSummary />
          <Progress progress={120} />
        </div>

        {/* Center Pane */}
        <div className="flex flex-1 flex-col gap-2 2xl:gap-5 col-span-2">

          <div className="flex flex-1 gap-5 max-h-96">
            <div className="flex h-full w-2/5">
              <UpcomingEventsCard />
            </div>
            <div className="flex flex-1">
              <Calendar />
            </div>
          </div>

          <div className="flex flex-1">
            <Courses />
          </div>

        </div>

        {/* Right Pane */}
        <div className="flex flex-1">
          <NotificationsCard />
        </div>

      </div>

    </div>
  </div>
);

export default HomePage;
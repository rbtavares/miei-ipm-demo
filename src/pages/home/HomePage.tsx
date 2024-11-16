import NotificationsCard from "@/cards/NotificationsCard";
import Navbar from "@/components/Navbar";
import { useBackground } from "@/hooks/useBackground";
import { getPath } from "@/lib/utils";
import CoursesCard from "@/pages/home/CoursesCard";
import ProfileCard from "@/pages/home/ProfileCard";
import ProgressCard from "@/pages/home/ProgressCard";
import { useNavigate } from "react-router-dom";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => {
  const { backgroundClass } = useBackground();
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen w-full flex flex-col items-center bg-[#010D10] ${backgroundClass} bg-center bg-cover bg-fixed`}>

      <div className="max-w-screen-2xl flex flex-col gap-2 2xl:gap-5 w-full flex-1 pt-0 p-2 2xl:pt-0 2xl:p-5">

        {/* Navbar */}
        <Navbar routes={breadcrumbRoutes} />

        {/* Content */}
        <div className="flex-1 w-full max-w-screen-2xl grid grid-cols-4 gap-2 2xl:gap-5">

          {/* Left Pane */}
          <div className="flex flex-col gap-2 2xl:gap-5">
            <ProfileCard />
            <ProgressCard progress={120} />
          </div>

          {/* Center Pane */}
          <div className="flex flex-col gap-2 2xl:gap-5 col-span-2">
            <div className="card w-full flex-1" onClick={() => navigate(getPath('/schedule'))}></div>
            <CoursesCard />
          </div>

          {/* Right Pane */}
          <NotificationsCard />

        </div>

      </div>

    </div>
  )
}

export default HomePage;
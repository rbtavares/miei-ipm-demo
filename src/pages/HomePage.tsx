import CoursesCard from "@/cards/CoursesCard";
import NotificationsCard from "@/cards/NotificationsCard";
import ProfileCard from "@/cards/ProfileCard";
import ProgressCard from "@/cards/ProgressCard";
import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#010D10] bg-shapes2 bg-center bg-cover bg-fixed">
      
      <div className="max-w-screen-2xl flex flex-col gap-5 w-full flex-1 p-5 pt-0">
        
        {/* Navbar */}
        <Navbar routes={breadcrumbRoutes} />
        
        {/* Content */}
        <div className="flex-1 w-full max-w-screen-2xl grid grid-cols-4 gap-5">
          
          {/* Left Pane */}
          <div className="flex flex-col gap-5">
            <ProfileCard />
            <ProgressCard progress={66} />
          </div>
          
          {/* Center Pane */}
          <div className="flex flex-col gap-5 col-span-2">
            <div className="card w-full flex-1"></div>
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
import CoursesCard from "@/cards/CoursesCard";
import NotificationsCard from "@/cards/NotificationsCard";
import ProfileCard from "@/cards/ProfileCard";
import ProgressCard from "@/cards/ProgressCard";
import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import { useBackground } from "@/hooks/useBackground";
import UpcomingsCard from "@/cards/UpcomingCard";
import CourseInfoCard from "@/cards/CourseInfoCard";

const breadcrumbRoutes = [
  { name: 'Course', dest: getPath('/course') },
]

const CoursePage = () => {
  const { backgroundClass } = useBackground();

  return (
    <div className={`min-h-screen w-full flex flex-col items-center bg-[#010D10] ${backgroundClass} bg-center bg-cover bg-fixed`}>
    <div className="max-w-screen-2xl flex flex-col gap-2 2xl:gap-5 w-full flex-1 pt-0 p-2 2xl:pt-0 2xl:p-5">
        
        {/* Navbar */}
        <Navbar routes={breadcrumbRoutes} />
        
        {/* Content */}
        <div className="flex-1 w-full max-w-screen-2xl grid grid-cols-4 gap-2 2xl:gap-5">
            <div className="col-span-3 h-1/3">
                <CourseInfoCard />
            </div>

            <div className="col-span-1 h-full bg-green-500"></div>
            <div className="col-span-1 h-2/3 bg-blue-500"></div>
            <div className="col-span-2 h-2/3 bg-red-300"></div>
        </div>
    </div>
</div>
  )
}

export default CoursePage;
import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import { useBackground } from "@/hooks/useBackground";
import CourseInfoCard from "@/cards/CourseInfoCard";
import UpcomingEventsCard from "@/cards/UpcomingEventsCard";
import MaterialsCard from "@/cards/MaterialsCard";
import ForumCard from "@/cards/ForumCard";

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

            <div className="flex flex-col gap-2 2xl:gap-5 col-span-3">
                <div className="h-2/6">
                  <CourseInfoCard/>
                </div>
                <div className="w-full flex-1 flex gap-5">
                    <div className="flex w-1/3 h-full"><MaterialsCard/></div>
                    <ForumCard />
                  </div>
            </div>

            <div className="flex flex-col gap-2 2xl:gap-5 col-span-1">
              <UpcomingEventsCard/>
              <UpcomingEventsCard/>
            </div>
        </div>
    </div>
</div>
  )
}

export default CoursePage;
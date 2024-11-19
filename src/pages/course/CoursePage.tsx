import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import CourseInfoCard from "@/pages/course/CourseInfo";
import UpcomingEventsCard from "@/cards/UpcomingEventsCard";
import MaterialsCard from "@/pages/course/Materials";
import ForumCard from "@/pages/course/Forum";
import NotificationsCard from "@/cards/NotificationsCard";
import { useParams } from "react-router-dom";
import { courses } from "@/data/Courses";

const CoursePage = () => {

  const { name } = useParams<{ name: string }>();
  if (!name) throw new Error("Course name missing");
  const course = courses.find(course => course.name === decodeURIComponent(name));

  const breadcrumbRoutes = [
    { name: 'Home', dest: getPath('/home') },
    { name: course ? course.name : 'Course', dest: getPath(`/course/${encodeURIComponent(name)}`) },
  ];

  return (
    <div className={`min-h-screen w-full flex flex-col items-center bg-[#010D10] bg-shapes-low bg-center bg-cover bg-fixed`}>
    <div className="max-w-screen-2xl flex flex-col gap-2 2xl:gap-5 w-full flex-1 pt-0 p-2 2xl:pt-0 2xl:p-5">
        
        {/* Navbar */}
        <Navbar routes={breadcrumbRoutes} />
        
        {/* Content */}
        <div className="flex-1 w-full max-w-screen-2xl grid grid-cols-4 gap-2 2xl:gap-5">

            <div className="flex flex-col gap-5 col-span-3 h-full">
              <div className="relative flex h-1/3"><CourseInfoCard name={name}/></div>
              <div className="w-full h-2/3 flex gap-5">
                <div className="relative flex flex-1"><MaterialsCard name={name}/></div>
                <div className="relative flex flex-1"><ForumCard name={name}/></div>
              </div>
            </div>

            <div className="flex flex-col gap-5 col-span-1 h-full">
              <div className="relative flex flex-1"><UpcomingEventsCard /></div>
              <div className="relative flex flex-1"><NotificationsCard/></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CoursePage;
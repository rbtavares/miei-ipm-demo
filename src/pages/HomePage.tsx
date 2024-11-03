import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import ProfileCard from "@/cards/ProfileCard";
import ProgressCard from "@/cards/ProgressCard";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-[#010D10] bg-shapes-low bg-center bg-cover">

      <div className="max-w-screen-2xl flex flex-col gap-5 w-full h-full p-5 pt-0">

        {/* Navbar */}
        <Navbar routes={breadcrumbRoutes} />

        {/* Content */}
        <div className="h-full w-full max-w-screen-2xl grid grid-cols-4 gap-5">

          {/* Left Pane */}
          <div className="flex flex-col gap-5">
            <ProfileCard />
            <ProgressCard />
          </div>

          {/* Center Pane */}
          <div className="flex flex-col gap-5 col-span-2">
            <div className="card w-full h-1/2"></div>
            <div className="card w-full h-1/2"></div>
          </div>

          {/* Right Pane */}
          <div className="card"></div>

        </div>

      </div>

    </div>
  )
}

export default HomePage;
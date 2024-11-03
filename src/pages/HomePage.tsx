import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import ProfileCard from "@/cards/ProfileCard";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => {
  return (
    <div className="bg-zinc-100 h-screen w-full flex flex-col items-center bg-shapes bg-center bg-cover">

      {/* Navbar */}
      <Navbar routes={breadcrumbRoutes} />

      {/* Content */}
      <div className="h-full w-full max-w-screen-2xl grid grid-cols-4 gap-5 py-5">

        {/* Left Pane */}
        <div className="flex flex-col gap-5">
          <ProfileCard />
          <div className="card w-full flex-1"></div>
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
  )
}

export default HomePage;
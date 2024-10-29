import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home') },
]

const HomePage = () => {
  return (
    <div className="bg-zinc-100 h-screen w-full flex flex-col items-center">
      <Navbar routes={breadcrumbRoutes} />
      <div className="h-full w-full max-w-screen-2xl grid grid-cols-4 gap-5 p-5">

        <div className="flex flex-col gap-5">
          <div className="card w-full h-1/3 min-h-48 max-h-60"></div>
          <div className="card w-full flex-1"></div>
        </div>

        <div className="flex flex-col gap-5 col-span-2">
          <div className="card w-full h-1/2"></div>
          <div className="card w-full h-1/2"></div>
        </div>

        <div className="card"></div>

      </div>
    </div>
  )
}

export default HomePage;
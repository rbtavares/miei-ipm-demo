import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";

const breadcrumbRoutes = [
  { name: 'Home', dest: getPath('/home')},
]

const HomePage = () => {
  return (
    <div className="bg-zinc-100 h-screen w-full">
      <Navbar routes={breadcrumbRoutes} />
    </div>
  )
}

export default HomePage;
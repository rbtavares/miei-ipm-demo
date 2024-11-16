import DocumentsCard from "@/pages/profile/DocumentsCard";
import NotificationsCard from "@/cards/NotificationsCard";
import PaymentCard from "@/pages/profile/PaymentCard";
import ProfileInfoCard from "@/pages/profile/ProfileInfoCard";
import Navbar from "@/components/Navbar";
import { useBackground } from "@/hooks/useBackground";
import { getPath } from "@/lib/utils";

const breadcrumbRoutes = [
    { name: 'Home', dest: getPath('/home') },
    { name: 'Profile', dest: getPath('/profile') },
]

const ProfilePage = () => {

    const { backgroundClass } = useBackground();

    return (
        <div className={`min-h-screen w-full flex flex-col items-center bg-[#010D10] ${backgroundClass} bg-center bg-cover bg-fixed`}>

            <div className="max-w-screen-2xl flex flex-col gap-2 2xl:gap-5 w-full flex-1 pt-0 p-2 2xl:pt-0 2xl:p-5">

                {/* Navbar */}
                <Navbar routes={breadcrumbRoutes} />

                {/* Content */}
                <div className="flex-1 h-full w-full max-w-screen-2xl grid grid-cols-4 gap-5">

                    {/* Profile Information */}
                    <div className="flex flex-col gap-5">
                        <ProfileInfoCard />
                    </div>

                    {/* Payment and Documents */}
                    <div className="flex flex-col gap-5 col-span-2 h-full">
                        <div className="relative flex-1"><PaymentCard /></div>
                        <div className="relative flex-1"><DocumentsCard /></div>
                    </div>


                    {/* Right Pane */}
                    <NotificationsCard />

                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
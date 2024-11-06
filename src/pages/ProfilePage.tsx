import DocumentsCard from "@/cards/DocumentsCard";
import NotificationsCard from "@/cards/NotificationsCard";
import PaymentCard from "@/cards/PaymentCard";
import ProfileInfoCard from "@/cards/ProfileInfoCard";
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
        <div className={`h-screen w-full flex flex-col items-center bg-[#010D10] ${backgroundClass} bg-center bg-cover`}>

            <div className="max-w-screen-2xl flex flex-col gap-5 w-full h-full p-5 pt-0">

                {/* Navbar */}
                <Navbar routes={breadcrumbRoutes} />

                {/* Content */}
                <div className="h-full w-full max-w-screen-2xl grid grid-cols-4 gap-5">

                    {/* Profile Information */}
                    <div className="flex flex-col gap-5">
                        <ProfileInfoCard />
                    </div>

                    {/* Payment and Documents */}
                    <div className="flex flex-col gap-5 col-span-2">
                        <div className="flex h-2/3 w-full">
                            <PaymentCard />
                        </div>
                        
                        <div className="flex h-1/3 w-full">
                            <DocumentsCard />
                        </div>
                        
                    </div>


                    {/* Right Pane */}
                    <NotificationsCard />

                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
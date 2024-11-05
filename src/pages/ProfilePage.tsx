import Navbar from "@/components/Navbar";
import { getPath } from "@/lib/utils";
import NotificationsCard from "@/cards/NotificationsCard";
import ProfileInfoCard from "@/cards/ProfileInfoCard";
import PaymentCard from "@/cards/PaymentCard";
import DocumentsCard from "@/cards/DocumentsCard";

const breadcrumbRoutes = [
    { name: 'Home', dest: getPath('/home') },
    { name: 'Profile', dest: getPath('/home/profile') },
]

const ProfilePage = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center bg-[#010D10] bg-shapes-low bg-center bg-cover">

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
                        <PaymentCard />
                        <DocumentsCard />
                    </div>
                

                    {/* Right Pane */}
                    <NotificationsCard />

                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
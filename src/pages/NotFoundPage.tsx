import LogoBlack from "@/assets/logo_black_big.svg"
import { Button } from "@/components/ui/button";
import { getPath } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-zinc-100 h-screen w-full flex items-center justify-center">

            <div className="flex flex-col items-center gap-10">

                <h1 className="text-6xl font-medium">Not Found</h1>

                <div className="flex flex-col w-full gap-2">
                    <p>The server was not able to find the requested page/resource.</p>

                </div>

                <div className="flex justify-between w-full">
                    <img src={LogoBlack} className="h-10" />

                    <div className="justify-center flex">
                        <Button className='text-black' variant='link' onClick={() => { navigate(-1) }}>Go back</Button>
                        <Button className='bg-black hover:bg-black/70 hover:text-white' variant='outline' onClick={() => { navigate(getPath('/home')) }}>Homepage</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NotFoundPage;
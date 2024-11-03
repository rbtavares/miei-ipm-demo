import Logo from '@/assets/logo_white_small.svg';
import AvatarImg from '@/assets/avatar.jpg';
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { getPath } from '@/lib/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface route {
    name: string,
    dest: string
}

interface INavbar {
    routes: route[]
}
const Navbar = ({ routes }: INavbar) => {
    const navigate = useNavigate();

    return (
        <div className="w-full px-5 py-2 card rounded-none flex justify-center ">
            <div className='max-w-screen-2xl w-full flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={Logo} className='h-10' onClick={() => navigate(getPath('/home'))} />

                    <Breadcrumb>
                        <BreadcrumbList>
                            {routes.map((route, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink href={route.dest}>{route.name}</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        {index < routes.length - 1 && <BreadcrumbSeparator />}
                                    </React.Fragment>
                                )
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <Avatar onClick={() => navigate(getPath('/'))}>
                    <AvatarImage src={AvatarImg} alt="@shadcn" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar
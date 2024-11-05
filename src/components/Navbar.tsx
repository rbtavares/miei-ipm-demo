import AvatarImg from '@/assets/avatar2.png';
import Logo from '@/assets/logo_white_small.svg';
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
        <div className="w-full px-5 py-1 2xl:py-2 card max-w-screen-2xl rounded-b-xl rounded-none flex justify-center ">
            <div className='max-w-screen-2xl w-full flex justify-between items-center'>


                <div className='flex items-center gap-5'>
                    <a href={getPath('/home')}><img src={Logo} className='h-10 drop-shadow-md' /></a>

                    <Breadcrumb>
                        <BreadcrumbList>
                            {routes.map((route, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <BreadcrumbItem className='drop-shadow-md'>
                                            <BreadcrumbLink href={route.dest}>{route.name}</BreadcrumbLink>
                                        </BreadcrumbItem>
                                        {index < routes.length - 1 && <BreadcrumbSeparator className='drop-shadow-md' />}
                                    </React.Fragment>
                                )
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <Avatar className='cursor-pointer drop-shadow-md max-xl:size-8 size-10' onClick={() => navigate(getPath('/profile'))}>
                    <AvatarImage src={AvatarImg} alt="@shadcn" />
                    <AvatarFallback>FS</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Navbar
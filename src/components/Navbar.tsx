import AvatarImg from '@/assets/avatar.png';
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
import SettingsDialog from './SettingsDialog';
import { LogOut } from 'lucide-react';
import { motion } from "framer-motion";


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
    <div className="w-full px-5 py-2 card max-w-screen-2xl rounded-b-xl rounded-none flex justify-center ">
      <div className='max-w-screen-2xl w-full flex justify-between items-center'>


        <div className='flex items-center gap-5'>
          <motion.img
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            src={Logo}
            className='h-6 2xl:h-10 drop-shadow-md cursor-pointer'
            onClick={() => navigate(getPath('/home'))}
          />

          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Breadcrumb>
              <BreadcrumbList>
                {routes.map((route, index) => {
                  return (
                    <React.Fragment key={index}>
                      <BreadcrumbItem className='drop-shadow-md'>
                        <BreadcrumbLink className="cursor-pointer" onClick={() => navigate(route.dest)}>{route.name}</BreadcrumbLink>
                      </BreadcrumbItem>
                      {index < routes.length - 1 && <BreadcrumbSeparator className='drop-shadow-md' />}
                    </React.Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>
        </div>

        <div className='flex gap-3 items-center'>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} className='flex items-center'>
            <LogOut className="size-6 text-white/50 hover:text-white/80 duration-300 rotate-180 cursor-pointer" onClick={() => navigate(getPath('/'))} />
          </motion.div>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }} className='flex items-center'>
            <SettingsDialog />
          </motion.div>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Avatar className='cursor-pointer drop-shadow-md size-6 2xl:size-8' onClick={() => navigate(getPath('/profile'))}>
              <AvatarImage src={AvatarImg} alt="@shadcn" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
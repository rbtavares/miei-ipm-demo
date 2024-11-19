import Avatar from '@/assets/avatar.png';
import { BorderBeam } from '@/components/ui/border-beam';
import { getPath } from "@/lib/utils";
import { useNavigate } from "react-router-dom"
import { user } from '@/data/User'
import { motion } from 'framer-motion'

const animate = {
  opacity: 1
}

const initial = {
  opacity: 0
}

const ProfileCard = () => {

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const navigate = useNavigate();

  return (
    <div className='cursor-pointer flex w-full h-36 2xl:h-52 p-3 2xl:p-4 gap-4 card text-white' onClick={() => navigate(getPath('/profile'))}>

      {/* Image & Identifiers */}
      <div className='h-full flex flex-col items-center justify-between gap-1'>
        <motion.img
          initial={initial}
          animate={animate}
          transition={{ duration: 1, delay: 0 }}
          className='drop-shadow-md aspect-square w-20 2xl:w-28 rounded-md flex items-center justify-center object-cover object-center' src={Avatar} />
        <div className='flex flex-col items-center flex-1  w-full justify-center'>
          <motion.span
            initial={initial}
            animate={animate}
            transition={{ duration: 1, delay: 0.3 }}
            className='drop-shadow-md 2xl:text-lg'>{user.identifier}</motion.span>
          <motion.span
            initial={initial}
            animate={animate}
            transition={{ duration: 1, delay: 0.4 }}
            className='drop-shadow-md font-mono text-xs 2xl:text-sm'>{user.number}</motion.span>
        </div>
      </div>

      {/* Name & Greeting */}
      <div className='flex flex-col flex-1 h-full gap-2 justify-between'>
        <motion.h3
          initial={initial}
          animate={animate}
          transition={{ duration: 1, delay: 0.2 }}
          className='drop-shadow-md text-sm 2xl:text-base'>Good {date.getHours() > 5 ? date.getHours() > 12 ? <>afternoon</> : <>morning</> : <>evening</>},</motion.h3>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-center drop-shadow-md text-2xl lg:text-3xl 2xl:text-4.5xl font-medium'>{user.name}</motion.h1>
        <motion.h3
          initial={initial}
          animate={{opacity: 0.5}}
          transition={{ duration: 1, delay: 0.4 }}
          className='drop-shadow-md text-end opacity-50 italic text-xs 2xl:text-sm'>{formattedDate}</motion.h3>
      </div>


      <BorderBeam colorFrom="#ffffff" colorTo='#ffffff00' size={225} duration={12} />
    </div>
  )
}

export default ProfileCard
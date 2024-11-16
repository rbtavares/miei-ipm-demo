import Logo from '@/assets/logo_white_big.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ShineBorder from '@/components/ui/shine-border'
import { user } from '@/data/User'
import { useBackground } from '@/hooks/useBackground'
import { getPath } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'

const animate = {
  opacity: 1
}

const initial = {
  opacity: 0
}

export default function LoginPage() {
  const navigate = useNavigate();

  const { backgroundClass } = useBackground();


  const [isLoading, setIsLoading] = useState(false);

  const navitageToHome = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(getPath('/home'));
    }, 500);
  }

  return (
    <div className={`h-screen flex items-center justify-center bg-[#010D10] ${backgroundClass} bg-center bg-cover`}>

      <ShineBorder
        className="relative card shadow-lg w-[28rem] p-10 text-white m-4"
        color={["#ffffff", "#e0e0e0"]}
      >
        <div className="flex flex-col items-start gap-10 w-full">
          <motion.img initial={initial} animate={animate} transition={{ duration: 1, delay: 0.2 }} src={Logo} className='h-20 drop-shadow-md' />

          <div className='w-full'>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.3 }} ><Label className='drop-shadow-md'>Identifier</Label></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.3 }} ><Input placeholder={user.identifier} type='email' className='text-black mb-2 drop-shadow-md' /></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.4 }} ><Label className='drop-shadow-md'>Password</Label></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.4 }} ><Input placeholder='••••••••' type='password' className='text-black drop-shadow-md' /></motion.div>
          </div>

          <div className='flex gap-5 w-full'>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className='flex-1'><Button className='w-full drop-shadow-md' variant="default" disabled={isLoading} onClick={() => navitageToHome()}>{isLoading && <Loader2 className='animate-spin' />} {isLoading ? <>Logging in...</> : <>Log In</>}</Button></motion.div>
            <motion.div initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} className='flex-1'><Button className='w-full drop-shadow-md text-white' variant='link' >Forgot password?</Button></motion.div>
          </div>

          <div className='flex w-full items-center gap-2 text-white/50 font-light justify-center'>
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, delay: 0.5 }} className='h-[1px] bg-white/20' />
            <motion.span initial={initial} animate={animate} transition={{ duration: 1, delay: 0.5 }} >or</motion.span>
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, delay: 0.5 }} className='h-[1px] bg-white/20' />
          </div>

          <div className='flex gap-5 w-full'>
            <motion.div initial={{opacity:0, y: -25}} animate={{opacity:1, y: 0}} transition={{ duration: 0.5, delay: 0.6 }} className='flex-1'><Button className='drop-shadow-md w-full bg-white/20' variant='outline'>Google SSO</Button></motion.div>
            <motion.div initial={{opacity:0, y: -25}} animate={{opacity:1, y: 0}} transition={{ duration: 0.5, delay: 0.6 }} className='flex-1'><Button className='drop-shadow-md w-full bg-white/20' variant='outline'>SAML Login</Button></motion.div>
          </div>
        </div>

      </ShineBorder >

    </div >
  )
}
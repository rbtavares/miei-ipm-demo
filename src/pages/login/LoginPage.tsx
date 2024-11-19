import Logo from '@/assets/logo_white_big.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ShineBorder from '@/components/ui/shine-border'
import { users } from '@/data/User'
import { getPath } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const navitageToHome = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(getPath('/home'));
    }, 500);
  }

  return (
    <ShineBorder
      className="relative card shadow-lg w-[28rem] p-10 text-white m-4"
      color={["#ffffff", "#e0e0e0"]}
    >
      <div className="flex flex-col items-start gap-10 w-full">

        {/* Logo */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          src={Logo}
          className='h-20 drop-shadow-md'
        />

        {/* Fields */}
        <div className='w-full'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Label className='drop-shadow-md'>Identifier</Label>
            <Input placeholder={users[0].identifier} type='email' className='text-black mb-2 drop-shadow-md' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Label className='drop-shadow-md'>Password</Label>
            <Input placeholder='••••••••' type='password' className='text-black drop-shadow-md' />
          </motion.div>
        </div>

        {/* Login Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='flex gap-5 w-full'
        >
          <Button
            className='w-full drop-shadow-md'
            variant="default"
            disabled={isLoading}
            onClick={() => navitageToHome()}
          >
            {isLoading && <Loader2 className='animate-spin' />} {isLoading ? <>Logging in...</> : <>Log In</>}
          </Button>
          <Button
            className='w-full drop-shadow-md text-white'
            variant='link'
          >
            Forgot password?
          </Button>
        </motion.div>

        {/* Or Divider */}
        <div className='flex w-full items-center gap-2 text-white/50 font-light justify-center'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            className='h-[1px] bg-white/20'
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            or
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.5 }}
            className='h-[1px] bg-white/20'
          />
        </div>

        {/* Other Options Buttons */}
        <div className='flex gap-5 w-full'>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='flex-1'
          >
            <Button
              className='drop-shadow-md w-full bg-white/20'
              variant='outline'
            >Google SSO
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='flex-1'
          >
            <Button
              className='drop-shadow-md w-full bg-white/20'
              variant='outline'
            >SAML Login
            </Button>
          </motion.div>
        </div>

      </div>
    </ShineBorder >
  )
}

const LoginPage = () => (
  <div className="h-screen flex flex-col items-center justify-center bg-shapes-low bg-center bg-cover">
    <LoginForm />
  </div >
);

export default LoginPage;
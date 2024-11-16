import Logo from '@/assets/logo_white_big.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ShineBorder from '@/components/ui/shine-border'
import { getPath } from '@/lib/utils'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useBackground } from '@/hooks/useBackground'
import data from '@/data.json';

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
          <img src={Logo} className='h-20 drop-shadow-md' />

          <div className='w-full'>
            <Label className='drop-shadow-md'>Identifier</Label>
            <Input placeholder={data.user.identifier} type='email' className='text-black mb-2 drop-shadow-md' />
            <Label className='drop-shadow-md'>Password</Label>
            <Input placeholder='••••••••' type='password' className='text-black drop-shadow-md' />
          </div>

          <div className='flex gap-5 w-full'>
            <Button className='drop-shadow-md w-1/2' variant="default" disabled={isLoading} onClick={() => navitageToHome()}>{isLoading && <Loader2 className='animate-spin' />} {isLoading ? <>Logging in...</> : <>Log In</>}</Button>
            <Button className='drop-shadow-md w-1/2 text-white' variant='link' >Forgot password?</Button>
          </div>

          <div className='flex w-full items-center gap-2 text-white/50 font-light'>
            <div className='h-[1px] bg-white/30 w-full' />
            or
            <div className='h-[1px] bg-white/30 w-full' />
          </div>

          <div className='flex gap-5 w-full'>
            <Button className='drop-shadow-md w-1/2 bg-white/20' variant='outline'>Google SSO</Button>
            <Button className='drop-shadow-md w-1/2 bg-white/20' variant='outline'>SAML Login</Button>
          </div>
        </div>

      </ShineBorder >

    </div >
  )
}
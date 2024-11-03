import Logo from '@/assets/logo_white_big.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ShineBorder from '@/components/ui/shine-border'
import { getPath } from '@/lib/utils'
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[#010D10] bg-shapes-low bg-center bg-cover">

      <ShineBorder
        className="relative card shadow-lg w-[28rem] p-10 text-white"
        color={["#ffffff", "#e0e0e0"]}
      >
        <div className="flex flex-col items-start gap-10 w-full">
          <img src={Logo} className='h-20' />

          <div className='w-full'>
            <Label>Identifier</Label>
            <Input placeholder='fmg.silva' type='email' className='text-black mb-2' />
            <Label>Password</Label>
            <Input placeholder='*********' type='password' className='text-black' />
          </div>

          <div className='flex gap-5 w-full'>
            <Button className='w-1/2' variant='default' onClick={() => navigate(getPath('/home'))}>Log In</Button>
            <Button className='w-1/2 text-white' variant='link' >Forgot password?</Button>
          </div>

          <div className='flex w-full items-center gap-2 text-white/50 font-light'>
            <div className='h-[1px] bg-white/30 w-full' />
            or
            <div className='h-[1px] bg-white/30 w-full' />
          </div>

          <div className='flex gap-5 w-full'>
            <Button className='w-1/2 bg-white/20' variant='outline' onClick={() => navigate(getPath('/home'))}>Google SSO</Button>
            <Button className='w-1/2 bg-white/20' variant='outline' onClick={() => navigate(getPath('/home'))}>SAML Login</Button>
          </div>
        </div>

      </ShineBorder >

    </div >
  )
}
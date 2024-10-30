import LogoBlack from '@/assets/logo_black_big.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ShineBorder from '@/components/ui/shine-border'
import { getPath } from '@/lib/utils'
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-100 h-screen flex items-center justify-center">

      <ShineBorder
        className="relative card shadow-lg w-[28rem] p-10"
        color={["#55da34", "#009aad", "#3840ff"]}
      >
        <div className="flex flex-col items-start gap-10 w-full">
          <img src={LogoBlack} className='h-20' />

          <div className='w-full'>
            <Label>Identifier</Label>
            <Input placeholder='fmg.silva' type='email' className='mb-2' />
            <Label>Password</Label>
            <Input placeholder='*********' type='password' />
          </div>

          <div className='flex gap-5 w-full'>
            <Button className='w-1/2' onClick={() => navigate(getPath('/home'))}>Log In</Button>
            <Button className='w-1/2' variant='ghost' >Forgot password?</Button>
          </div>

          <div className='flex w-full items-center gap-2 text-zinc-400 font-light'>
            <div className='h-[1px] bg-zinc-200 w-full' />
            or
            <div className='h-[1px] bg-zinc-200 w-full' />
          </div>

          <div className='flex gap-5 w-full'>
            <Button className='w-1/2' variant='secondary'>Google SSO</Button>
            <Button className='w-1/2' variant='secondary' >SAML Login</Button>
          </div>
        </div>

      </ShineBorder >

    </div >
  )
}
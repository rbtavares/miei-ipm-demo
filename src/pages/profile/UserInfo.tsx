import Avatar from '@/assets/avatar.png';
import { User } from '@/data/User';
import { motion } from "framer-motion";
import { AtSign, Cake, Hash, IdCard, Landmark, MapPin, MessageCircle, PersonStanding, Phone, Users } from 'lucide-react';
import { ReactElement } from 'react';

interface IUserInfo {
  user: User
}

interface IUserInfoField {
  name: string
  icon: ReactElement
  value: any
  animationDelay?: number
  fontType?: string
}

const UserInfoField = ({ name, icon, value, fontType = 'font-normal', animationDelay }: IUserInfoField) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, delay: animationDelay }}
    className='flex-1 relative items-end flex justify-between text-white border-b border-white/5'
  >
    <h2 className='flex gap-2 text-lg font-bold'>{icon}{name}</h2>
    <h3 className={`font-normal opacity-75 ${fontType}`}>{value}</h3>
  </motion.div>
)

const UserInfo = ({ user }: IUserInfo) => (
  <div className='flex flex-col h-full w-full p-4 gap-4 card text-white items-center justify-between'>

    {/* Image */}
    <div className='flex relative items-center justify-center w-full'>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='z-20 drop-shadow-md aspect-square w-40 rounded-md flex object-cover object-center'
        src={Avatar}
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='absolute drop-shadow-md w-full h-36 rounded-md flex object-cover object-center blur-lg'
        src={Avatar}
      />
    </div>

    {/* Fields */}
    <div className="flex flex-col justify-between h-full w-full">
      <UserInfoField name="Name" value={user.name} icon={<MessageCircle />} animationDelay={0.2} />
      <UserInfoField name="Student Number" value={user.number} icon={<Hash />} animationDelay={0.25} />
      <UserInfoField name="Birthday" value={user.birthday.toLocaleDateString("pt-PT")} icon={<Cake />} animationDelay={0.3} />
      <UserInfoField name="Location" value={user.location} icon={<MapPin />} animationDelay={0.35} />
      <UserInfoField name="Nationality" value={user.nationality} icon={<PersonStanding />} animationDelay={0.4} />
      <UserInfoField name="Mother" value={user.mother} icon={<Users />} animationDelay={0.45} />
      <UserInfoField name="Father" value={user.father} icon={<Users />} animationDelay={0.5} />
      <UserInfoField name="Tax Number" value={user.taxnumber} icon={<Landmark />} fontType='font-mono' animationDelay={0.55} />
      <UserInfoField name="CC" value={user.cc} icon={<IdCard />} fontType='font-mono' animationDelay={0.6} />
      <UserInfoField name="Email" value={user.email} icon={<AtSign />} animationDelay={0.65} />
      <UserInfoField name="Phone Number" value={user.phone} icon={<Phone />} fontType='font-mono' animationDelay={0.7} />
    </div>

  </div>
)

export default UserInfo;
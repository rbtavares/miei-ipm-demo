import Avatar from '@/assets/avatar.png';
import { AtSign, Cake, Hash, IdCard, Landmark, MapPin, MessageCircle, PersonStanding, Phone, Users } from 'lucide-react';
import { ReactElement } from 'react';
import { user } from '@/data/User'
import { motion } from "framer-motion";

interface IField {
    animationDelay?: number
    name: string,
    icon: ReactElement,
    value: any,
    fontType?: string
}

const Field = ({ name, icon, value, fontType = 'font-normal', animationDelay }: IField) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: animationDelay }}
        className='flex-1 relative items-end flex justify-between text-white border-b border-white/5'>
        <h2 className='flex gap-2 text-lg font-bold'>{icon}{name}</h2>
        <h3 className={`font-normal opacity-75 ${fontType}`}>{value}</h3>
    </motion.div>
)

const ProfileInfoCard = () => {

    return (
        <div className='flex flex-col h-full w-full p-4 gap-4 card text-white items-center justify-between'>

            {/* Image & Identifiers */}
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

            <div className="flex flex-col justify-between h-full w-full">
                <Field animationDelay={0.2} name="Name" value={user.name} icon={<MessageCircle />} />
                <Field animationDelay={0.25} name="Student Number" value={user.number} icon={<Hash />} />
                <Field animationDelay={0.3} name="Birthday" value={user.birthday.toLocaleDateString("pt-PT")} icon={<Cake />} />
                <Field animationDelay={0.35} name="Location" value={user.location} icon={<MapPin />} />
                <Field animationDelay={0.4} name="Nationality" value={user.nationality} icon={<PersonStanding />} />
                <Field animationDelay={0.45} name="Mother" value={user.mother} icon={<Users />} />
                <Field animationDelay={0.5} name="Father" value={user.father} icon={<Users />} />
                <Field animationDelay={0.55} name="Tax Number" value={user.taxnumber} icon={<Landmark />} fontType='font-mono' />
                <Field animationDelay={0.6} name="CC" value={user.cc} icon={<IdCard />} fontType='font-mono' />
                <Field animationDelay={0.65} name="Email" value={user.email} icon={<AtSign />} />
                <Field animationDelay={0.7} name="Phone Number" value={user.phone} icon={<Phone />} fontType='font-mono' />
            </div>

        </div>
    )
}

export default ProfileInfoCard;
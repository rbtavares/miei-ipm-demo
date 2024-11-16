import Avatar from '@/assets/avatar.png';
import { AtSign, Cake, Hash, IdCard, Landmark, MapPin, MessageCircle, PersonStanding, Phone, Users } from 'lucide-react';
import { ReactElement } from 'react';
import data from '@/data/data.json';

interface IField {
    name: string,
    icon: ReactElement,
    value: any,
    fontType?: string
}

const Field = ({ name, icon, value, fontType = 'font-normal' }: IField) => (
    <div className='flex-1 relative items-center flex justify-between text-white'>
        <h2 className='flex gap-2 text-lg font-bold'>{icon}{name}</h2>
        <h3 className={`font-normal opacity-75 ${fontType}`}>{value}</h3>
    </div>
)

const ProfileInfoCard = () => {

    return (
        <div className='flex flex-col h-full w-full p-4 gap-4 card text-white items-center justify-between'>

            {/* Image & Identifiers */}
            <div className='flex relative items-center justify-center w-full'>
                <img className='z-20 drop-shadow-md aspect-square w-40 rounded-md flex object-cover object-center' src={Avatar} />
                <img className='absolute drop-shadow-md w-full h-36 rounded-md flex object-cover object-center blur-md' src={Avatar} />
            </div>

            <div className="flex flex-col justify-between h-full w-full">
                <Field name="Name" value={data.user.name} icon={<MessageCircle />} />
                <Field name="Student Number" value={data.user.number} icon={<Hash />} />
                <Field name="Birthday" value={data.user.birthday} icon={<Cake />} />
                <Field name="Location" value={data.user.location} icon={<MapPin />} />
                <Field name="Nationality" value={data.user.nationality} icon={<PersonStanding />} />
                <Field name="Mother" value={data.user.mother} icon={<Users />} />
                <Field name="Father" value={data.user.father} icon={<Users />} />
                <Field name="Tax Number" value={data.user.taxnumber} icon={<Landmark />} fontType='font-mono' />
                <Field name="CC" value={data.user.cc} icon={<IdCard />} fontType='font-mono' />
                <Field name="Email" value={data.user.email} icon={<AtSign />} />
                <Field name="Phone Number" value={data.user.phone} icon={<Phone />} fontType='font-mono' />
            </div>

        </div>
    )
}

export default ProfileInfoCard;
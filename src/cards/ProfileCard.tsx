import Avatar from '@/assets/avatar2.png';

const ProfileCard = () => {

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className='flex w-full h-52 p-4 gap-4 card text-white'>

      {/* Image & Identifiers */}
      <div className='h-full flex flex-col items-center justify-between'>
        <img className='drop-shadow-md aspect-square w-28 rounded-md flex items-center justify-center object-cover object-center' src={Avatar} />
        <div className='flex flex-col items-center flex-1  w-full justify-center'>
          <span className='drop-shadow-md'>fmg.silva</span>
          <span className='drop-shadow-md font-mono text-xs'>60247</span>
        </div>
      </div>

      {/* Name & Greeting */}
      <div className='flex flex-col flex-1 h-full gap-2 justify-between'>
          <h3 className='drop-shadow-md'>Good {date.getHours() > 5 ? date.getHours() > 12 ? <>afternoon</> : <>morning</>: <>evening</>},</h3>
          <h1 className='drop-shadow-md text-5xl font-medium tracking-tight'>Frederico Silva</h1>
          <h3 className='drop-shadow-md text-center opacity-50 italic text-sm'>{formattedDate}</h3>
      </div>

    </div>
  )
}

export default ProfileCard
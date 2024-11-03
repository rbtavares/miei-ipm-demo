import Avatar from '@/assets/avatar2.png';

const ProfileCard = () => {

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className='flex w-full h-52 p-4 gap-4 card text-white'>

      {/* Image & Identifiers */}
      <div className='h-full flex flex-col items-center justify-between'>
        <img className='aspect-square w-28 rounded-lg flex items-center justify-center object-cover object-center' src={Avatar} />
        <div className='flex flex-col items-center flex-1  w-full justify-center'>
          <span>fmg.silva</span>
          <span className='font-mono text-xs'>60247</span>
        </div>
      </div>

      {/* Name & Greeting */}
      <div className='flex flex-col flex-1 h-full gap-2 justify-between'>
          <h3>Good morning,</h3>
          <h1 className='text-5xl font-medium'>Frederico Silva</h1>
          <h3 className='text-center opacity-50 italic text-sm'>{formattedDate}</h3>
      </div>

    </div>
  )
}

export default ProfileCard
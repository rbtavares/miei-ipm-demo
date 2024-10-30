const ProfileCard = () => {
    return (
        <div className='h-full flex p-2'>
            <div className='h-full w-2/5 flex flex-col items-center justify-center gap-4'>
                <div className='aspect-square w-28 rounded-full border shadow-md flex items-center justify-center'>
                    <h1 className='text-4xl text-gray-400'>FS</h1>
                </div>
            </div>
            <div className='h-full flex-1 flex justify-center items-center px-3'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h3>Good morning,</h3>
                        <h1 className='text-4xl font-medium'>Frederico Silva</h1>
                    </div>
                    <div className='flex justify-between'>

                        <span className='font-mono text-sm'>fmg.silva</span>
                        <span className='font-mono text-sm'>60247</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
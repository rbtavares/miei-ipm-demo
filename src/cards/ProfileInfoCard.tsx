import Avatar from '@/assets/avatar2.png';
import { BorderBeam } from '@/components/ui/border-beam';

const ProfileInfoCard = () => {

    return (
        <div className='flex flex-col h-full w-full h-52 p-4 gap-4 card text-white items-center justify-between'>

            {/* Image & Identifiers */}
            <div className='h-1/4 flex flex-col items-center justify-center'>
                <img className='drop-shadow-md aspect-square w-40 rounded-md flex object-cover object-center' src={Avatar} />
            </div>

            {/* Student Information */}
            <div className='h-3/4 flex gap-5 flex-col items-center justify-center'>
                <div className='text-center'>
                    <h5 className="text-2xl drop-shadow-md font-bold">Name</h5>
                    <h2 className="drop-shadow-md opacity-75 italic">Travis Scott</h2>
                </div>
                <div className='text-center'>
                    <h5 className="text-2xl drop-shadow-md font-bold">Date of Birth</h5>
                    <h2 className="drop-shadow-md opacity-75 italic">20/12/2001</h2>
                </div>
                <div className='flex justify-between gap-12'>
                    <div className='text-center'>
                        <h5 className="text-2xl drop-shadow-md font-bold">Address</h5>
                        <h2 className="drop-shadow-md opacity-75 italic">Almada</h2>
                    </div>
                    <div className='text-center'>
                        <h5 className="text-2xl drop-shadow-md font-bold">Nationality</h5>
                        <h2 className="drop-shadow-md opacity-75 italic">Portuguese</h2>
                    </div>
                </div>
                
                <div className='flex justify-between gap-12 text-center'>
                    <div>
                       <h5 className="text-2xl drop-shadow-md font-bold">Mom</h5>
                       <h2 className="drop-shadow-md opacity-75 italic">Mommy Scott</h2> 
                    </div>
                    <div>
                        <h5 className="text-2xl drop-shadow-md font-bold">Dad</h5>
                        <h2 className="drop-shadow-md opacity-75 italic">Daddy Scott</h2>
                    </div>
                    
                </div>
                <div className='text-center'>
                    <h5 className="text-2xl drop-shadow-md font-bold">Tax Number</h5>
                    <h2 className="drop-shadow-md opacity-75 italic">111111111</h2>
                </div>
                <div className='text-center'>
                    <h5 className="text-2xl drop-shadow-md font-bold">Citizen Card</h5>
                    <h2 className="drop-shadow-md opacity-75 italic">22222222ZZZ</h2>
                </div>
                <div className='text-center'>
                    <h5 className="text-2xl drop-shadow-md font-bold">Email</h5>
                    <h2 className="drop-shadow-md opacity-75 italic">t.scott@campus.fct.unl.pt</h2>
                </div>
                <div className='text-center'>
                    <h5 className="text-2xl drop-shadow-md font-bold">Phone Number</h5>
                    <h2 className="drop-shadow-md opacity-75 italic">999999999</h2>
                </div>
            
            </div>
        </div>
    )
}

export default ProfileInfoCard;
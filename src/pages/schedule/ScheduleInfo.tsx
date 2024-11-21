
import { Button } from '@/components/ui/button';
import { shifts } from '@/data/Shifts';
import { Check, CheckCircle, Edit, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Checkbox } from '@/components/ui/checkbox';

interface IEvent {
  name?: string,
  location?: string,
  shift?: string,
  duration?: string,
  rowSpan: string,
  secondary?: boolean,
  onClickCallback?: Function
  isModifying: boolean
}

const Event = ({ name, location, shift, duration, rowSpan, secondary, onClickCallback, isModifying }: IEvent) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.25,
      });
    }
  }, []);

  return (
    <>
      <div ref={tiltRef} className={`relative pb-[0.4rem] ${rowSpan}`} onClick={onClickCallback ? () => onClickCallback() : () => { }}>
        <div className={`absolute select-none cursor-pointer border ${secondary ? 'border-white' : 'border-transparent'} ${secondary ? 'bg-white/30' : 'bg-white'} text-${secondary ? 'white' : 'black'} hover:drop-shadow-xl flex flex-col flex-1 justify-between w-full h-full rounded-md px-1 hover:scale-125 ${secondary && 'hover:text-black'} hover:drop-shadow-xl hover:bg-white hover:z-50 duration-300`}>
          {isModifying && <Checkbox id="terms" className='absolute top-1 right-1'/>}
          <div>
            <h1 className="text-lg font-medium">{name}</h1>
            <h3 className="text-xs font-light">{location}</h3>
          </div>
          <div className="flex justify-between text-sm">
            <h4>{shift}</h4>
            <h4>{duration}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

const EventSpacer = ({ hideBorder }: { hideBorder?: boolean }) => {
  return (
    <div className={`flex flex-1 border-b border-${hideBorder ? 'transparent' : 'white'}`}></div>
  )
}

const Schedule = ({ selectShift, isModifying }: { selectShift: Function, isModifying: boolean }) => {

  return (
    <div className="flex h-full w-full gap-1">
      <div className="w-full h-full grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2">
        <div />

        {/* Header */}
        <div className="flex gap-2 justify-between">
          <p className="flex flex-1 text-white justify-center">Mon</p>
          <p className="flex flex-1 text-white justify-center">Tue</p>
          <p className="flex flex-1 text-white justify-center">Wed</p>
          <p className="flex flex-1 text-white justify-center">Thu</p>
          <p className="flex flex-1 text-white justify-center">Fri</p>
          <p className="flex flex-1 text-white justify-center">Sat</p>
        </div>
        <div className="h-full justify-between flex flex-col gap-y-1">
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">8 AM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">9 AM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">10 AM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">11 AM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">12 AM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">1 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">2 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">3 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">4 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">5 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">6 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">7 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">8 PM</p>
        </div>

        {/* Table */}
        <div className="grid grid-cols-6 gap-x-2 h-full flex-1 bg-white/10 rounded-lg">
          <div className="grid grid-cols-1 gap-1">
            <Event isModifying={isModifying} rowSpan="row-span-2" name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" onClickCallback={() => selectShift(shifts[0])} />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="IA" location="1C - Ed.7" shift="T1" duration="2h" secondary onClickCallback={() => selectShift(shifts[4])} />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <Event isModifying={isModifying} rowSpan="row-span-2" name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" onClickCallback={() => selectShift(shifts[1])} />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="OPT" location="4.3 - Ed.8" shift="P9" duration="2h" onClickCallback={() => selectShift(shifts[6])} />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="MPC" location="4.3 - Ed.8" shift="P9" duration="2h" onClickCallback={() => selectShift(shifts[6])} />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="OPT" location="4.3 - Ed.8" shift="P9" duration="2h" onClickCallback={() => selectShift(shifts[6])} />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="MPC" location="1C - Ed.7" shift="P9" duration="2h" onClickCallback={() => selectShift(shifts[3])} />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="MPC" location="1D - Ed.7" shift="T1" duration="2h" secondary onClickCallback={() => selectShift(shifts[7])} />
            <EventSpacer hideBorder />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <Event isModifying={isModifying} rowSpan="row-span-2" name="IPM" location="Sala 128 - Ed.2" shift="T2" duration="2h" secondary onClickCallback={() => selectShift(shifts[2])} />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event isModifying={isModifying} rowSpan="row-span-2" name="IA" location="4.3 - Ed.9" shift="P3" duration="2h" onClickCallback={() => selectShift(shifts[5])} />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
          </div>
        </div>
      </div>
    </div>
  )
}

const ScheduleInfoCard = ({ selectShift }: { selectShift: Function }) => {

  const [modifying, setModifying] = useState(false)
  const [chosenShifts, setChosenShifts] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (

    <div className="card w-full flex-1 p-4 flex flex-col gap-4">
      <div className='flex justify-between'>
        <h1 className="header">Schedule</h1>
        {modifying ?
          <div className='flex gap-2'>
            <Button onClick={() => setModifying(false)}>Apply Changes</Button>
            <Button onClick={() => setModifying(false)} variant="destructive">Cancel</Button>
          </div>
          :
          <Button onClick={() => setModifying(true)}><Edit /> Modify</Button>
        }
      </div>
      <Schedule selectShift={selectShift} isModifying={modifying} />
    </div>
  )
}

export default ScheduleInfoCard
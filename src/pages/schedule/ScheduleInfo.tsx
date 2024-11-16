
import VanillaTilt from 'vanilla-tilt';
import { useRef, useEffect } from 'react';

interface IEvent {
  name?: string,
  location?: string,
  shift?: string,
  duration?: string,
  rowSpan: string,
  secondary?: boolean
}

const Event = ({ name, location, shift, duration, rowSpan, secondary }: IEvent) => {
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
      <div ref={tiltRef} className={`relative ${rowSpan}`}>
        <div className={`absolute border ${secondary ? 'border-white' : 'border-transparent'} ${secondary ? 'bg-white/30' : 'bg-white'} text-${secondary ? 'white' : 'black'} hover:drop-shadow-xl flex flex-col flex-1 justify-between w-full h-full rounded-md px-1 hover:scale-125 ${secondary && 'hover:text-black'} hover:drop-shadow-xl hover:bg-white hover:z-50 duration-300`}>
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

const Schedule = () => {

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
        <div className="grid grid-cols-6 gap-x-2 h-full flex-1 bg-white/10">
          <div className="grid grid-cols-1 gap-1">
            {/* Podemos agrupar os eventos e tirar a gap dos spacers, se for mesmo preciso */}
            <Event rowSpan="row-span-2" name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <Event rowSpan="row-span-2" name="CVS" location="1C - Ed.7" shift="T1" duration="2h" secondary />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <Event rowSpan="row-span-2" name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event rowSpan="row-span-2" name="AMI" location="4.3 - Ed.8" shift="P9" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
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
            <EventSpacer />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event rowSpan="row-span-2" name="CVS" location="1C - Ed.7" shift="T1" duration="2h" secondary />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event rowSpan="row-span-2" name="AMI" location="1D - Ed.7" shift="T1" duration="2h" secondary />
            <EventSpacer />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <Event rowSpan="row-span-2" name="IPM" location="Sala 128 - Ed.2" shift="T2" duration="2h" secondary />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event rowSpan="row-span-2" name="AMI" location="4.3 - Ed.9" shift="P9" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
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
            <EventSpacer />
          </div>
        </div>
      </div>
    </div>
  )
}

const ScheduleInfoCard = () => {
  return (

    <div className="card w-full flex-1 p-4 flex flex-col gap-4">
      <h1 className="header">Schedule</h1>

      <Schedule />
    </div>
  )
}

export default ScheduleInfoCard
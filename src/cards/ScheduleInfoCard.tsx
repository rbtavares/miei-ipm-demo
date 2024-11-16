interface IScheduleEvent {
  timeBlocks?: number
}


const Event = ({ offset }: { offset: number }) => {
  // Calculate the dynamic top value using the given formula
  const topValue = `calc((${offset} * 0.25rem) + (${offset} * 4.55%))`;

  return (
    <div
      className="bg-red-500 min-w-16 min-h-16 absolute"
      style={{ top: topValue }}
    />
  );
};


const Schedule = () => {
  return (
    <div className="flex h-full w-full gap-1">
      <div className="w-full h-full grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2">
        <div />
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
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">4 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">5 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">6 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">7 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">8 PM</p>
          <p className="text-white/75 flex flex-1 text-xs items-end justify-end leading-none">9 PM</p>
        </div>
        <div className="grid grid-cols-6 gap-1 gap-x-2 h-full flex-1 bg-white/10 bg-green-500 relative">
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500 row-span-2 relative"><div className="absolute bg-orange-400 h-full w-full"/></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
          <div className="flex h-full w-full border-b border-white bg-purple-500"></div>
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
interface IEvent {
  name?: string,
  location?: string,
  shift?: string,
  duration?: string,
  size: number,
  secondary?: boolean
}

const Event = ({ name, location, shift, duration, size, secondary }: IEvent) => {
  return (
    <div className={`row-span-${size} bg-${secondary ? 'black' : 'white'} text-${secondary ? 'white' : 'black'} border-transparent rounded flex flex-col justify-between px-1`}>
      <div>
        <h1 className="text-lg font-medium">{name}</h1>
        <h3 className="text-xs font-light">{location}</h3>
      </div>
      <div className="flex justify-between text-sm">
        <h4>{shift}</h4>
        <h4>{duration}</h4>
      </div>
    </div>
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
            <Event size={2} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <Event size={2} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" secondary />
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
            <Event size={2} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event size={3} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
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
            <Event size={2} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event size={2} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <EventSpacer />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <Event size={2} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer hideBorder />
            <Event size={3} name="IPM" location="Lab 121 - Ed.2" shift="P6" duration="2h" />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
            <EventSpacer />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="relative flex flex-1 bg-orange-500/40 border-b border-white row-span-2">
              <div className="absolute bg-white flex flex-1 w-full h-full">a<br />a<br />a<br />a</div>
            </div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
            <div className="flex flex-1 border-b border-white"></div>
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
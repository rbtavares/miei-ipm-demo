import { events } from "@/data/Events";
import { motion } from 'framer-motion'

const animate = {
  opacity: 1,
  scale: 1
}

const initial = {
  opacity: 0,
  scale: 0
}

interface IEventCard {
  title: string,
  location?: string,
  startTime?: Date
  endTime?: Date
}

const EventCard = ({ title, location, startTime, endTime }: IEventCard) => {

  function formatTime(time: Date): string {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function formatRelativeTime(targetTime: Date): string {
    const now = new Date();
    const differenceMs = targetTime.getTime() - now.getTime();

    const isFuture = differenceMs > 0;
    const absoluteDifference = Math.abs(differenceMs);

    const minutes = Math.floor((absoluteDifference / (1000 * 60)) % 60);
    const hours = Math.floor((absoluteDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24));

    const timeParts = [
      days ? `${days}d` : '',
      hours ? `${hours}h` : '',
      minutes ? `${minutes}m` : ''
    ].filter(Boolean).join(' '); // Filters out empty strings and joins non-empty parts

    return isFuture ? `in ${timeParts}` : `${timeParts} ago`;
  }

  return (
    <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex">
      <div className="flex flex-col flex-1">
        <h1 className="font-medium leading-tight">{title}</h1>
        <h2 className="text-xs text-white/70">{location}</h2>
      </div>
      <div className="flex flex-col items-end">
        <h3 className="italic">{startTime && formatRelativeTime(startTime)}</h3>
        <h3 className="text-sm text-white/70">{startTime && formatTime(startTime)} - {endTime && formatTime(endTime)}</h3>
      </div>
    </div>
  )
}

const UpcomingEventsCard = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex-1 ${className}`}>
      <div className="absolute w-full h-full card flex-1 p-4 flex flex-col gap-4 fscroll">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="header">Upcoming</motion.h1>


        <div className="flex-1 flex flex-col gap-3 text-white overflow-y-auto pr-1">
          {events.map((item, index) => <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            key={index}
          ><EventCard title={item.title} startTime={item.startTime} endTime={item.endTime} location={item.location} /></motion.div>)}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventsCard
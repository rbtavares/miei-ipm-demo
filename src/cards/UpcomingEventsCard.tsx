import AssignmentSubmission from "@/components/SubmitAssignment";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { events } from "@/data/Events";
import { motion } from 'framer-motion'
import { useState } from "react";
import { toast } from "sonner";

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
  endTime?: Date,
  type: 'test' | 'assignment' | 'other',
  course: string
}

const EventCard = ({ title, location, startTime, endTime, type }: IEventCard) => {

  const [isEnrolled, setIsEnrolled] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleEnrollClick = () => { 
    toast("Registered for test.")
    setIsEnrolled(true) }

  const handleAssignmentSubmit = (file: File, comments: string) => {
    setIsSubmitted(true);
    toast("Assignment submitted.")
    console.log(`Submitted assignment for ${title}`, { file, comments });
  }

  return (
    <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex">
      {type === 'test' && (
      <><div className="flex flex-col flex-1">
          <h1 className="font-medium leading-tight">{title}</h1>
          <h2 className="text-xs text-white/70">{location}</h2>
          <h3 className="text-sm text-white/70">{startTime && formatTime(startTime)} - {endTime && formatTime(endTime)}</h3>
        </div><div className="flex flex-col justify-center items-end">
            {!isEnrolled ? (
            <Button className="drop-shadow-md bg-white" variant="default" onClick={handleEnrollClick} aria-label="Register for event">
              Register
            </Button>
          ) : (
            <Button className="drop-shadow-md bg-white/20" variant="ghost" aria-label="Already enrolled" disabled>
              Enrolled
            </Button>
          )}
          </div></>
      )}
      {type === 'assignment' && (
      <><div className="flex flex-col flex-1">
          <h1 className="font-medium leading-tight">{title}</h1>
          <h3 className="text-sm text-white/70">{startTime && formatTime(startTime)} - {endTime && formatTime(endTime)}</h3>
        </div>
        <div className="flex flex-col justify-center items-end">
        {!isSubmitted ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button className="drop-shadow-md bg-white" variant="default" aria-label="Submit">Submit</Button>
            </SheetTrigger>
            <AssignmentSubmission 
                  title={title} 
                  onSubmit={handleAssignmentSubmit} 
                />
          </Sheet>
          ) : (
            <Button className="drop-shadow-md bg-white/20" variant="ghost" aria-label="Already submitted" disabled>
              Submitted
            </Button>
          )}
          </div></>
      )}
      {type === 'other' && (
      <><div className="flex flex-col flex-1">
          <h1 className="font-medium leading-tight">{title}</h1>
          <h2 className="text-xs text-white/70">{location}</h2>
        </div><div className="flex flex-col items-end">
            <h3 className="italic">{startTime && formatRelativeTime(startTime)}</h3>
            <h3 className="text-sm text-white/70">{startTime && formatTime(startTime)} - {endTime && formatTime(endTime)}</h3>
          </div></>
      )}
    </div>
  )
}

const UpcomingEventsCard = ({ className, course }: { className?: string, course?: string }) => {
  const filteredEvents = course 
  ? events.filter(event => event.course === course)
  : events;

  return (
    <div className={`relative flex-1 ${className}`}>
      <div className="absolute w-full h-full card flex-1 p-4 flex flex-col gap-4 fscroll">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="header">Upcoming</motion.h1>


        <div className="flex-1 flex flex-col gap-3 text-white overflow-y-auto pr-1">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((item, index) => (
            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              key={index}
            >
              <EventCard 
                title={item.title} 
                startTime={item.startTime} 
                endTime={item.endTime} 
                location={item.location} 
                type={item.type} 
                course={item.course} 
              />
            </motion.div>
          ))
        ) : (
          <p className="text-white/70 italic text-center justify-center">No upcoming events</p>
        )}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventsCard
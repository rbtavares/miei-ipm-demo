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
    ].filter(Boolean).join(''); // Filters out empty strings and joins non-empty parts
  
    return isFuture ? `in ${timeParts}` : `${timeParts} ago`;
  }
  
  return (
    <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex">
      <div className="flex flex-col flex-1">
        <h1 className="font-medium">{title}</h1>
        <h2 className="text-sm text-white/70">{location}</h2>
      </div>
      <div className="flex flex-col items-end">
        <h3 className="italic">{startTime && formatRelativeTime(startTime)}</h3>
        <h3 className="text-sm text-white/70">{startTime && formatTime(startTime)} - {endTime && formatTime(endTime)}</h3>
      </div>
    </div>
  )
}

const UpcomingEventsCard = () => {
  return (
    <div className="card h-full w-full flex-1 p-4 flex flex-col gap-4  fscroll">
      <h1 className="header">Upcoming</h1>

      <div className="flex-1 flex flex-col gap-3 text-white overflow-y-auto max-h-[82vh]">
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
      <EventCard title="Aula IPM" startTime={new Date(new Date().getTime() + 1 * 60 * 60 * 1000)} endTime={new Date(new Date().getTime() + 3 * 60 * 60 * 1000)} location="Sala 1" />
    
      </div>
    </div>
  )
}

export default UpcomingEventsCard
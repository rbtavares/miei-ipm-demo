import { formatRelativeTime } from "@/lib/utils";

interface INotificationCard {
  title: string,
  description: string,
  time?: Date
}

const NotificationCard = ({ title, description, time }: INotificationCard) => {
  return (
    <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex">
      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h1 className="text-lg font-medium w-full flex items-center justify-between">{title}<span className="text-xs opacity-50">{time && formatRelativeTime(time)}</span></h1>
          <h3 className="text-sm opacity-70">{description}</h3>
        </div>
      </div>
    </div>
  );
};

const NotificationsCard = () => {
  return (
    <div className="flex flex-1 relative">
      <div className="absolute card w-full flex-1 p-4 flex flex-col gap-4 h-full fscroll">
        <h1 className="header">Notifications</h1>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto">
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
          <NotificationCard title="Test" description="abcdef" time={new Date()} />
        </div>

      </div>
    </div>
  )
}

export default NotificationsCard
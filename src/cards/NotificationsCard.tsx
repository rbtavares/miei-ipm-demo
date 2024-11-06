interface INotificationCard {
  title: string,
  description: string,
  time?: Date
}

const NotificationCard = ({ title, description, time }: INotificationCard) => {
  console.log(time)
  return (
    <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex mr-2">
      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h1 className="text-lg font-medium w-full flex items-center justify-between">{title}<span className="text-xs opacity-50">2h ago</span></h1>
          <h3 className="text-sm opacity-70">{description}</h3>
        </div>
      </div>
    </div>
  );
};

const NotificationsCard = () => {
  return (
    <div className="card w-full flex-1 p-4 flex flex-col gap-4 h-full fscroll">
      <h1 className="header">Notifications</h1>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto max-h-[82vh]">
      <NotificationCard title="Test" description="abcdef" time={new Date()} />
      <NotificationCard title="Test" description="abcdef" time={new Date()} />
      <NotificationCard title="Test" description="abcdef" time={new Date()} />
      <NotificationCard title="Test" description="abcdef" time={new Date()} />
      <NotificationCard title="Test" description="abcdef" time={new Date()} />
      <NotificationCard title="Test" description="abcdef" time={new Date()} />
      </div>

    </div>
  )
}

export default NotificationsCard
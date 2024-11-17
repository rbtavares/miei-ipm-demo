import { formatRelativeTimeAgo } from "@/lib/utils";
import { notifications } from "@/data/Notifications";
import { motion } from 'framer-motion'

const animate = {
  opacity: 1,
  x: 0
}

const initial = {
  opacity: 0,
  x: -150
}

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
          <h1 className="text-lg font-medium w-full flex items-center justify-between leading-tight">{title}<span className="text-xs opacity-50">{time && formatRelativeTimeAgo(time)}</span></h1>
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
        <motion.h1
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="header">Notifications</motion.h1>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto pr-1">
          {notifications.map((item, index) => <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            key={index}
          ><NotificationCard title={item.title} description={item.description} time={item.time} /></motion.div>)}
        </div>

      </div>
    </div>
  )
}

export default NotificationsCard
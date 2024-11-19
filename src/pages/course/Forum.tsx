import AvatarImg from '@/assets/avatar.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { posts } from '@/data/Posts';
import { formatRelativeTime } from '@/lib/utils';
import { motion } from 'framer-motion'

interface IPostCard {
    title: string,
    comments: number,
    time?: Date
    timeAgo: string
}
  
const PostCard = ({ title, comments, time }: IPostCard) => {
return (
    <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex mr-2">
    <div className="flex flex-col gap-2 flex-1">
        <div className='max-w-screen-2xl w-full flex justify-between items-center'>
            <h1 className="text-lg font-medium w-full flex items-center justify-between">{title}</h1>
            
            <Avatar className='drop-shadow-md size-6 2xl:size-8'>
                    <AvatarImage src={AvatarImg} alt="@shadcn" />
                    <AvatarFallback>FS</AvatarFallback>
            </Avatar>
        </div>
        
        <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        </div>

        <h3 className="text-sm w-full flex items-center justify-between opacity-70">{comments} comments<span className="text-xs opacity-50">{time && formatRelativeTime(time)}</span></h3>
    </div>
    </div>
);
};

const ForumCard = ({ name }: { name: string }) => {   
    const filteredPosts = posts.filter((p) => p.courseName === name)
    console.log(posts)

    return (

        <div className="card w-full h-full flex-1 p-4 flex flex-col gap-4 absolute">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="header">Forum</motion.h1>

            <div className="flex flex-col gap-2 overflow-y-auto fscroll w-full">
                <div className="flex gap-2">
                    <Input placeholder="Add text..." type="text" className="text-black drop-shadow-md" />
                    <Button className="drop-shadow-md bg-white/20" variant="outline">Create</Button>
                </div>

                <div className="gap-2 pr-1 flex-1 flex flex-col p-0 text-white overflow-y-auto">
                {filteredPosts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        comments={post.comments}
                        time={post.time}
                        timeAgo={post.timeAgo}
                    />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ForumCard;
import AvatarImg from '@/assets/avatar.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatRelativeTime } from '@/lib/utils';

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

const ForumCard = () => {
    return (
        <div className="card w-full flex-1 p-4 flex flex-col gap-4 fscroll">
            <h1 className="header">Forum</h1>
            
            <div className="flex flex-col gap-6 fscroll">
                <div className="flex flex-row gap-2 items-center 2xl:gap-5">
                    <Input placeholder="Add text..." type="text" className="text-black drop-shadow-md" />
                    <Button className="drop-shadow-md bg-white/20" variant="outline">Create</Button>
                </div>

                <div className="flex-1 flex flex-col gap-3 p-0 text-white overflow-y-auto max-h-96 mt-2">
                    <PostCard title="Test" comments={5} time={new Date()} timeAgo="7h"/>
                    <PostCard title="Test" comments={3} time={new Date()} timeAgo="3 days"/>
                    <PostCard title="Test" comments={0} time={new Date()} timeAgo="8 days"/>
                    <PostCard title="Test" comments={1} time={new Date()} timeAgo="14 days"/>
                    <PostCard title="Test" comments={10} time={new Date()} timeAgo="20 days"/>
                    <PostCard title="Test" comments={7} time={new Date()} timeAgo="1 month"/>
                </div>
            </div>
        </div>
    )
}

export default ForumCard;
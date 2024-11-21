import AvatarImg from '@/assets/avatar.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from "@/components/ui/input";
import { posts } from '@/data/Posts';
import { formatRelativeTime } from '@/lib/utils';
import { motion } from 'framer-motion'

interface IComment {
    author: string
    content: string
    timeAgo: string
}

interface IPostCard {
    title: string,
    comments: IComment[],
    time?: Date
    timeAgo: string
    keywords: string[]
    content: string
    author: string
}
  
const PostCard = ({ title, comments, time, keywords, content, author }: IPostCard) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white/20 py-2 px-3 rounded-lg shadow-sm flex mr-1 cursor-pointer">
            <div className="flex flex-col gap-2 flex-1">
              <div className="max-w-screen-2xl w-full flex justify-between items-center">
                <h1 className="text-lg font-medium w-full flex items-center justify-between">
                  {title}
                </h1>
  
                <Avatar className='drop-shadow-md size-6 2xl:size-8'>
                    <AvatarImage src={AvatarImg} alt="@shadcn" />
                    <AvatarFallback>FS</AvatarFallback>
            </Avatar>
              </div>
  
              <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                    <Badge variant="secondary">{k}</Badge>
                    ))
                }
              </div>
  
              <h3 className="text-sm w-full flex items-center justify-between opacity-70">
                {comments.length} comments
                <span className="text-xs opacity-50">{time && formatRelativeTime(time)}</span>
              </h3>
            </div>
          </div>
        </DialogTrigger>
  
        <DialogContent className='max-w-3xl'>
          <DialogHeader>
            <DialogTitle className='text-3xl mb-1'>{title}</DialogTitle>
            <DialogDescription className='text-lg italic'>{content}</DialogDescription>
          </DialogHeader>
            <div>
                <div className='flex flex-wrap gap-2 mb-3'>
                    {keywords.map((k) => (
                        <Badge variant="secondary">{k}</Badge>
                    ))
                    }
                </div>

                <h2 className='text-base font-medium w-full flex text-white mb-5'>Author: {author}</h2>

                <div className='flex flex-col gap-2 mb-5 '>
                    {comments.map((c) => (
                        <div className='bg-white/80 py-2 px-3 rounded-lg shadow-sm flex justify-between items-center'>
                            <div>
                                <h3 className='text-lg mb-3'>{c.content}</h3>
                                <h3 className='text-sm tex text-pretty italic'>{c.author} - {c.timeAgo}</h3>
                            </div>
                            <Avatar className='drop-shadow-md size-10 mr-3'>
                                <AvatarImage src={AvatarImg} alt="@shadcn" />
                                <AvatarFallback>FS</AvatarFallback>
                            </Avatar>
                        </div>
                    ))
                    }
                </div>
                <div className="flex gap-2">
                    <Input placeholder="Add text..." type="text" className="text-black drop-shadow-md" />
                    <Button className="drop-shadow-md bg-white/20" variant="outline">Comment</Button>
                </div>
            </div>
        </DialogContent>
      </Dialog>
    )
  }

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
                {filteredPosts.map((post, index) => (
                  <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
              >
                    <PostCard
                        key={post.id}
                        title={post.title}
                        comments={post.comments}
                        time={post.time}
                        timeAgo={post.timeAgo}
                        keywords={post.keywords}
                        content={post.content}
                        author={post.author}
                    />
                    </motion.div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ForumCard;
"use client";
import { usePathname, useRouter } from 'next/navigation';
import CommentCard from '@/app/(dashboard)/_components/comment-card';
 
const PersonComments = () => {
    const pathname = usePathname();

    return(
        <div className="fixed inset-x-[25rem] inset-y-[8rem] m-4">
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </div>
    )
}

export default PersonComments;
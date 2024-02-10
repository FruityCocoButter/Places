"use client"
import PostCard from '@/app/(dashboard)/_components/PostCard';
import CommentCard from '@/app/(dashboard)/_components/comment-card';

const CommentsPage =() => {
    return(
        <div className="fixed inset-x-[26rem] inset-y-16 m-5 w-[60rem]">
            <PostCard
            category="travel"
            title="Loadshedding again in the Tri-State Area, surprise surprise"
            author={{name:"fruitycocobutter",image:"fruitycocobutter.png",  link:"/fruitycocobutter"}}
            timeAgo="2 hours ago"
            content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
            'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now 
            use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            likes={5}
            comments={{count:17, link:"/posts/1"}}/>
            <hr className="mr-8 my-3"/>
            <CommentCard/>
            <CommentCard/>
        </div>
    )
}

export default CommentsPage;
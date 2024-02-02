"use client";

import React from 'react'
import LocationBanner from '../../../../_components/LocationBanner'
import PostCard from '../../../../_components/PostCard'

const page = () => {
  return (
    <div className="fixed inset-x-1/4 inset-y-56">

        <PostCard
        category='Travel'
        title='The Best Time to Visit Cape Town'
        author={{
            name: 'FruityCocoButter',
            image: '/next.svg',
            link: 'https://google.com'
        }}
        timeAgo='3 hours ago'
        content='Cape Town is a coastal city in South Africa. It is the second most populous urban area in South Africa, after Johannesburg. It is also the capital and primate city of the Western Cape province.'
        likes={10}
        comments={{
            count: 2,
            link: 'https://google.com'
        }}
        />

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
          comments={{count:17, link:"/posts/1"}}
        />

    </div>
  )
}

export default page
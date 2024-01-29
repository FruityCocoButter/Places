"use client";

import React from 'react'
import LocationBanner from '../../../_components/LocationBanner'
import PostCard from '../../../_components/PostCard'

const page = () => {
  return (
    <div className="fixed inset-x-1/4 inset-y-20">
        <LocationBanner 
        imageSrc="/next.svg"
        locationName='Cape Town'
        coordinates='33.9249° S, 18.4241° E'
        population='4.004 million'
        
        />

        <PostCard
        category='Travel'
        title='The Best Time to Visit Cape Town'
        author={{
            name: 'John Doe',
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

    </div>
  )
}

export default page
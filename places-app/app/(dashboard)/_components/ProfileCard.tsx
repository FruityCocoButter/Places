import React from 'react'
import { StarIcon } from 'lucide-react'

interface ProfileCardProps {
    thumbnail: string;
    place: string;
    profilePic: string;
    name: string;
    description: string;
    rating: number;
}

const ProfileCard = ({ thumbnail, place, profilePic, name, description, rating }
    : ProfileCardProps
) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <div className="flex items-center space-x-4">
                <img className="w-10 h-10 rounded-full" src={thumbnail} alt="Thumbnail" />
                <span className="text-sm text-gray-600">{place}</span>
            </div>
            <div className="flex flex-col items-center mt-4">
                <img className="w-24 h-24 rounded-full border-2 border-blue-500" src={profilePic} alt="Profile" />
                <h1 className="mt-2 font-bold">{name}</h1>
                <p className="text-sm text-gray-500 text-center">{description}</p>
                <div className="flex items-center mt-2 gap-1">
                    <span className="text-sm text-gray-600 ml-2">{rating}</span>
                    <StarIcon size={16} />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
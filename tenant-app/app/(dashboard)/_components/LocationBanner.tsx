import React from 'react';
import Image, { StaticImageData } from 'next/image';

type LocationBannerProps = {
    imageSrc: string | StaticImageData
    locationName: string;
    coordinates: string;
    population: string;
};

const LocationBanner = ({ imageSrc, locationName, coordinates, population }: LocationBannerProps) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 grid grid-cols-3 items-center gap-4 h-36">
            <div className="col-span-1">
                <Image src={imageSrc} alt="Location" width={100} height={100}/>
            </div>
            <div className="col-span-2">
                <h1 className="text-xl font-bold">{locationName}</h1>
                <p className="text-sm">{coordinates}</p>
                <p className="text-sm">Pop. {population}</p>
            </div>
        </div>
    );
};

export default LocationBanner;

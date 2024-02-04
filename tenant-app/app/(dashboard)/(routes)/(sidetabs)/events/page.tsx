import AttractionBanner from "../../../_components/attraction-banner";
import PropertyBanner from "../../../_components/property-banner";
import CommentCard from "../../../_components/comment-card";
import LandlordComment from "../../../_components/review-comment";
import { Card } from 'flowbite-react';

const EventsPage = () => {
  return(
    <div className="fixed inset-x-96 inset-y-56 m-4 flex flex-row">
        <div className="flex flex-col w-[28rem] mx-2">
            <Card className="w-full h-auto m-2"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/star night.png" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Star Night Event
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                </p>
            </Card>
            <Card className="w-full h-auto m-2"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/purple party.png" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Purple Party
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                </p>
            </Card>
        </div>
        <div className="flex flex-col w-[28rem] mx-2">
            <Card className="w-full h-auto m-2"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/event poster.png" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    New Event Coming
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                </p>
            </Card>
            <Card className="w-full h-auto m-2"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/night market.png" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Night Market event
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 ">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
            <Card className="w-full h-auto m-2"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/summer bright.png" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Summer Bright Event
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                </p>
            </Card>
        </div>
    </div>
  );
}

export default EventsPage;


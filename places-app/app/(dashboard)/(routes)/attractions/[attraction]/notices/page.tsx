import { Card } from 'flowbite-react';
 
const AttractionNotices = () => {
    return(
        <div className="fixed inset-x-[25rem] inset-y-[20rem] m-4 flex flex-row">
            <div className="flex flex-col w-[28rem] mx-2">
                <Card className="w-full h-auto m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="/obz menu item 1.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                    </p>
                </Card>
                <Card className="w-full h-auto m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="/obz menu item 2.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        New Menu Item
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                    </p>
                </Card>
            </div>
            <div className="flex flex-col w-[28rem] mx-2">
                <Card className="w-full h-auto m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="/obz menu item 2.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        New Menu Item
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                    </p>
                </Card>
                <Card className="w-full h-auto m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="/obz menu item 1.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 ">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </Card>
                <Card className="w-full h-auto m-2"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="/obz menu item 2.png" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        New Menu Item
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Excellent char-grilled filet mignon escargot fusion basted with freshly squeeze seal juice.
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default AttractionNotices;
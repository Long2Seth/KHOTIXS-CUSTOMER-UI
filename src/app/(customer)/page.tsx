'use client'
import CardCategory from "@/components/customer/card/CardCategory";
import {UpcomingEventComponent} from "@/components/customer/home/UpcomingEventComponent";
import InfoCard from "@/components/customer/card/InfoCard";
import {eventData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {IoMdArrowRoundForward} from "react-icons/io";
import {useRouter} from "next/navigation";


export default function Home() {
    const route = useRouter();

    const handleButtonClick = (value: string) => {
        console.log("Button clicked with value:", value);
        route.push(`/event/${value}`);
    };

    return (
        <main
            className="flex flex-col bg-khotixs-background-white dark:bg-khotixs-background-dark space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-80px] xl:mb-[100px]">
            {/* Hero section */}
            <Image
                layout="responsive"
                width={100}
                height={100}
                src="/icons/hero-section.gif"
                alt="hero-section"
            />

            <CardCategory/>

            {/* Technology section */}
            <UpcomingEventComponent/>


            {/* Conference section */}

            <section
                className="container mx-auto w-[350px] p-5  sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                <section
                    className=" relative flex flex-col justify-end sm:pr-[0px] md:pr-[25px] lg:flex-row lg:my-[15px] w-full lg:pr-[32px] 2xl:pr-[62px] items-end">
                    <InfoCard
                        title="TECHNOLOGY"
                        description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                    />
                    <div className=" sm:w-auto my-[10px] lg:my-0 ">
                        <Button
                            onClick={() => handleButtonClick("SPORT")}
                            className=" w-auto lg:h-[50px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                            View All
                            <span>
                            <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                        </span>
                        </Button>
                    </div>

                </section>
                <section
                    className="h-auto grid gap-2 grid-cols-2 sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "TECHNOLOGY").map((event, index) => (
                        <CardComponent
                            key={index}
                            event={event}/>
                    ))}
                </section>
            </section>


            {/* Concert section */}

            <section
                className="container mx-auto w-[350px] p-5  sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                <section
                    className=" relative flex flex-col justify-end sm:pr-[0px] md:pr-[25px] lg:flex-row lg:my-[15px] w-full lg:pr-[32px] 2xl:pr-[62px] items-end">
                    <InfoCard
                        title="CONCERTS"
                        description="The Concerts feature provides users with detailed information about live music events, tailored for music enthusiasts. It enhances the user experience by offering curated content and tools to explore, book, and engage with concert events."
                    />
                    <div className=" sm:w-auto my-[10px] lg:my-0 ">
                        <Button
                            onClick={() => handleButtonClick("SPORT")}
                            className=" w-auto lg:h-[50px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                            View All
                            <span>
                            <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                        </span>
                        </Button>
                    </div>

                </section>
                <section
                    className="h-auto grid gap-2 grid-cols-2 sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "CONCERTS").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* Sport section */}
            <section
                className="container mx-auto w-[350px] p-5  sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                <section
                    className=" relative flex flex-col justify-end sm:pr-[0px] md:pr-[25px] lg:flex-row lg:my-[15px] w-full lg:pr-[32px] 2xl:pr-[62px] items-end">
                    <InfoCard
                        title="SPORT"
                        description="The Sports Events feature provides users with comprehensive information about live sports
                        matches, tournaments, and activities. It caters to sports enthusiasts, offering an engaging and
                        interactive platform to explore, book, and participate in sports events."
                    />
                    <div className=" sm:w-auto my-[10px] lg:my-0 ">
                        <Button
                            onClick={() => handleButtonClick("SPORT")}
                            className=" w-auto lg:h-[50px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                            View All
                            <span>
                            <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                        </span>
                        </Button>
                    </div>

                </section>
                <section
                    className="h-auto grid gap-2 grid-cols-2 sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "SPORT").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* Community section */}
            <section
                className="container mx-auto w-[350px] p-5  sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                <section
                    className=" relative flex flex-col justify-end sm:pr-[0px] md:pr-[25px] lg:flex-row lg:my-[15px] w-full lg:pr-[32px] 2xl:pr-[62px] items-end">
                    <InfoCard
                        title="COMMUNITY"
                        description="The Community Events feature connects users with local gatherings, social activities, and events
                        that foster engagement within a community. It provides detailed information and tools to
                        explore, register, and participate in a variety of events focused on building connections and
                        supporting shared interests."
                    />
                    <div className=" sm:w-auto my-[10px] lg:my-0 ">
                        <Button
                            onClick={() => handleButtonClick("SPORT")}
                            className=" w-auto lg:h-[50px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                            View All
                            <span>
                            <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                        </span>
                        </Button>
                    </div>

                </section>
                <section
                    className="h-auto grid gap-2 grid-cols-2 sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "COMMUNITY").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* Conference section */}
            <section
                className="container mx-auto w-[350px] p-5  sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                <section
                    className=" relative flex flex-col justify-end sm:pr-[0px] md:pr-[25px] lg:flex-row lg:my-[15px] w-full lg:pr-[32px] 2xl:pr-[62px] items-end">
                    <InfoCard
                        title="CONFERENCES AND SEMINARS"
                        description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                    />
                    <div className=" sm:w-auto my-[10px] lg:my-0 ">
                        <Button
                            onClick={() => handleButtonClick("SPORT")}
                            className=" w-auto lg:h-[50px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                            View All
                            <span>
                            <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                        </span>
                        </Button>
                    </div>

                </section>
                <section
                    className="h-auto grid gap-2 grid-cols-2 sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "CONFERENCES AND SEMINARS").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* General section */}
            <section
                className="container mx-auto w-[350px] p-5  sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                <section
                    className=" relative flex flex-col justify-end sm:pr-[0px] md:pr-[25px] lg:flex-row lg:my-[15px] w-full lg:pr-[32px] 2xl:pr-[62px] items-end">
                    <InfoCard
                        title="GENERAL"
                        description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."/>
                    <div className=" sm:w-auto my-[10px] lg:my-0 ">
                        <Button
                            onClick={() => handleButtonClick("SPORT")}
                            className=" w-auto lg:h-[50px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                            View All
                            <span>
                            <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                        </span>
                        </Button>
                    </div>

                </section>
                <section
                    className="h-auto grid gap-2 grid-cols-2 sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "GENERAL").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>
        </main>
    );
}
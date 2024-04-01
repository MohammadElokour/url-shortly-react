import React from "react";
import Card from "./Card";

const cardData = [
  {
    icon: "icon-brand-recognition",
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Genric links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: "icon-detailed-records",
    title: "Detailed Records",
    text: "Gain insights into who is clicking you links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: "icon-fully-customizable",
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
  },
];
const Statistics = () => {
  return (
    <div className="flex flex-col">
      <div className="py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:mb-4">
          Advanced Statistics
        </h2>
        <p className="px-10 text-gray-500">
          Track how your links are performing across the web with{" "}
          <br className="hidden lg:!block" /> our advanced statistics dashboard.
        </p>
      </div>
      <div className="relative flex flex-col justify-center p-10 md:flex-row">
        <div className="absolute left-1/2 top-1/2 h-5/6 -translate-x-1/2 -translate-y-1/2 transform border-l-8 border-cyan md:left-16 md:top-40 md:h-0 md:w-5/6 md:border-b-8 ">
          &nbsp;
        </div>
        <div className="mx-3">
          <Card
            icon={cardData[0].icon}
            title={cardData[0].title}
            text={cardData[0].text}
          />
        </div>
        <div className="mx-3 mt-20 md:!mt-10">
          <Card
            icon={cardData[1].icon}
            title={cardData[1].title}
            text={cardData[1].text}
          />
        </div>
        <div className="mx-3 mt-20">
          <Card
            icon={cardData[2].icon}
            title={cardData[2].title}
            text={cardData[2].text}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;

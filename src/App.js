import React from 'react'
import "@material-tailwind/react/tailwind.css";
import './index.css';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  const cardData = [
    { icon: "icon-brand-recognition", title: "Brand Recognition", text: "Boost your brand recognition with each click. Genric links don't mean a thing. Branded links help instil confidence in your content." },
    { icon: "icon-detailed-records", title: "Detailed Records", text: "Gain insights into who is clicking you links. Knowing when and where people engage with your content helps inform better decisions." },
    { icon: "icon-fully-customizable", title: "Fully Customizable", text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement" },
  ]
  return (
    <div className="max-w-5xl m-auto overflow-hidden">
      <Header />
      <section className="bg-[#F0F1F6]">
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold mb-6 md:mb-4 text-gray-800">Advanced Statistics</h2>
          <p className="text-gray-500 px-10">Track how your links are performing across the web with <br className="hidden lg:!block" /> our advanced statistics dashboard.</p>
        </div>
        <div className="p-10 flex justify-center flex-col md:flex-row relative">
          <div className="absolute border-l-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5/6 md:top-40 md:w-5/6 md:h-0 md:left-16 md:border-b-8 border-cyan ">
            &nbsp;
          </div>
          <div className="mx-3">
            <Card icon={cardData[0].icon} title={cardData[0].title} text={cardData[0].text} />
          </div>
          <div className="mx-3 mt-20 md:!mt-10">
            <Card icon={cardData[1].icon} title={cardData[1].title} text={cardData[1].text} />
          </div>
          <div className="mx-3 mt-20">
            <Card icon={cardData[2].icon} title={cardData[2].title} text={cardData[2].text} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

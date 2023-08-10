import React from "react";

const Lazyload = () => {
  return (
    <div className="flex justify-center ">
    <div  ><img alt="avatar" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1000/InstamartMicrosite/FooterVisual"/></div>
    <div className='my-auto'>
        <div className="text-3xl pb-2">Download Swiggy &</div>
        <div className="text-3xl pb-2">order now on Instamart!</div>
        <div className="text-xl pb-2"><span>💰</span>&nbsp;&nbsp;Use SAVEBIG | On orders above &#8377;999</div>
        <div className="text-xl">
          
            <div >
                <div>Trusted by millions of shoppers in Bangalore, Delhi-NCR,</div>
                <div>&nbsp;Hyderabad, Mumbai, Chennai, Pune & other cities</div>
            </div>
        </div>
        <div className="w-[150px] h-auto flex  pt-3" >
            <img alt="appstore" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_100/InstamartMicrosite/DownloadAppStore"/>
            <img alt="play-stare" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_100/InstamartMicrosite/GooglePlayStore"/>
        </div>
    </div>
   
    </div>
  );
};

export default Lazyload;

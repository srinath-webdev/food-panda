import React from 'react'

function Contact() {
  return (
    <div className="flex justify-center my-auto">
        <div className="contact-left">
            <div className='hungry'>HUNGRY TO</div>
            <div className='findoutmore'>FIND OUT MORE?</div>
            <div className="contact-box">
              <div >ASK US YOUR QUESTIONS</div>
              <div>
                <div>
                    <div className="flex flex-row">
                      <input className='border px-1 mr-1' placeholder="Name"/>
                      <input className='border ' placeholder="Email"/>
                    </div>
                    <div className='mt-2'>
                      <textarea className='border ' placeholder="Message" rows='5' cols='41'></textarea>
                    </div>
                </div>
                </div>
                <button></button>
                <div className='our-address'>
              <div>OUR ADDRESS</div>
              <div>Swiggy Office - Block I and J, 3rd floor, Outer Ring Road</div>
              <div>Kaverappa Layout, Devarabisanahalli, Kadabeesanahalli</div>
              <div>Bengaluru, KA 560103</div>
            </div>
            </div>
        </div>
        <div className='w-[400px] h-auto flex items-center'>
            <div><img  alt="img" src="https://labs.swiggy.in/assets/contact-banner.jpg"/></div>
            
             
        </div>
    </div>
  )
}

export default Contact
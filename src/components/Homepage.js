import React from 'react'
import logo from "../assests/logo.png"
import scooter from "../assests/scooter.png"
import home1 from "../assests/home1.png"
import home2 from "../assests/home2.png"
import home3 from "../assests/home3.png"
import flash from "../assests/flash.png"
import remote from "../assests/remote.png"
import money from "../assests/money.png"
import locate from "../assests/locate.png"
import phone from "../assests/phone.png"
import india from "../assests/india.jpeg"
import twitter from "../assests/twitter.jpeg"
import linkedin from "../assests/linkedin.jpeg"

const Homepage = () => {
    return (
        <div className="bg-gradient-to-b from-[#030701] to-[#113402]">
            {/* Navbar */}
            {/* <div className="bg-gray-400 flex justify-end p-2">
                <div className='p-2 m-1 bg-yellow-200'></div>
                <div className='p-2 m-1 bg-red-200'></div>
                <div className='p-2 m-1 bg-green-200'></div>
            </div> */}


            {/* Electripe Icon */}
            <div className='flex w-60 justify-start mt-8 ml-8'>
                <div className=''><img src={logo} /> </div>
            </div>

            {/* Para and scooter */}
            <div className='bg-gradient-to-b from-[#030701] to-[#113402] flex md:flex-row md:justify-between justify- flex-col justify-center items-center pt-8 pl-4 pr-4'>
                <div className='text-white'>
                    <p className='text-4xl pb-1'> Leading charging infra provider</p>
                    <p className='text-1xl pt-1'> Say goodbye to days without charging station near you.</p>
                </div>
                <div className='mt-10 lg:justify-end' style={{ "width": "50%" }}><img src={scooter} /></div>
            </div>



            {/*Providing Charging Near Your Home*/}
            <div className='flex flex-col ml-6 mr-6 mb-6 md:mt-6 bg-gradient-to-b from-[#113402] to-[#030701]'>

                <div>
                    <p className='text-white text-2xl md:text-4xl p-6 font-bold'>Providing charging near <span className='text-teal-500'>your home</span></p>
                    <div className='flex md:justify-evenly justify-between pt-10 pr-2 pl-2'>
                        <div style={{ "width": "70px" }}><img src={home1} /></div>
                        <div style={{ "width": "70px" }}><img src={home2} /></div>
                        <div style={{ "width": "70px" }}><img src={home3} /></div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row md:items-center'>
                    <div className='flex'>
                        <div className='p-8' ><img src={flash} style={{ "width": "70px", "height": "80px" }} /></div>
                        <div className='text-white p-8'>
                            <p className='font-bold pb-1'>Quick Charging</p>
                            <p>Using the ultra fast cables, charge your EVs in less than 30 mins</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='p-8'><img src={remote} style={{ "width": "50px", "height": "80px" }} /></div>
                        <div className='text-white p-8'>
                            <p className='font-bold pb-1'> Remote Connectivity</p>
                            <p>Access your charging status from anywhere</p>
                        </div></div>
                    <div className='flex'>
                        <div className='p-8'><img src={money} style={{ "width": "90px", "height": "70px" }} /></div>
                        <div className='text-white p-8'>
                            <p className='font-bold pb-1'> Cheapest Rates</p>
                            <p>With our customers friendly subscription packs charge for as low as ₹50 / month </p>
                        </div></div>
                </div>



                <div className='flex bg-[#00df9a] justify-center m-12 p-2 sm:p-3 md:p-5'>
                    <p className='text-white text-1xl md:text-4xl font-bold'>Find Nearby Stations--</p>
                </div>

            </div>




            {/* Just Locate, Scan, Charge */}
            <div div className='flex flex-col bg-gradient-to-b from-[#113402] to-[#030701] pt-8 justify-center items-center' >
                <div className='bg-black-500 p-5 m-2 font-bold text-4xl text-white'>Just locate, scan, charge</div>

                <div className='bg-black-500 p-5 m-2'>
                    <div>
                        <div><img src={locate} /></div>
                    </div>
                </div>


                <div className=' bg-black-500 pt-5 pr-5 pl-5'><img src={phone} /></div>
                <div className='bg-black-200 mt-1 p-8  border-2'><h1 className='text-white font-bold text-3xl'>Download The App</h1></div>
            </div>

            {/* A strong network of companies supporting us */}
            <div div className='flex flex-col bg-gradient-to-b from-[#113402] to-[#030701] mr-8 ml-8 pb-5 justify-center items-center' >
                <div className=''><h1 className='text-white text-3xl font-bold pl-2 pt-2'> <div className='text-[#00df9a]'>A strong network</div> of companies supporting us</h1></div>
                <div className='p-5 m-2 text-white font-bold'>Boxes</div>
                <div className='bg-[#00df9a] pt-5 pb-5 pr-8 pl-8 m-2'><h1 className='text-white font-bold text-2xl'>Become Partner</h1></div>
            </div>

            {/* And thousands of Indians who believe in us */}

            <div div className='flex flex-col m-5 justify-center items-center' >
                <div className='p-4 m-2'><h1 className='text-white font-bold text-4xl'>
                    And thousands of Indians who believe in us</h1>
                </div>
                <div className='bg-slate-400 p-4 m-2'>Craousel Video</div>
                <div className='p-4 m-2'><h2 className='text-white text-2xl'>Abhishek E-rikshaw Driver</h2></div>
            </div>


            {/* Learn From Our Blogs */}
            <div div className='flex flex-col m-5' >
                <div className='p-4 m-2'><h1 className='text-white text-4xl font-bold'>Learn from our Blogs</h1></div>
                <div className='bg-red-400 p-4 m-2'>Blog Content</div>
            </div >

            {/* Footer */}
            <div div className=' p-8 flex flex-col bg-black' >
                <div className='text-gray-400 pb-2 pt-2'>Our Website</div>
                <div className='text-gray-400 pb-2 pt-2'>Contact Us</div>


                <div className='text-white  pb-4 pt-2'><img style={{ "width": "40px", "height": "40px" }} src={linkedin} />
                    <img style={{ "width": "40px", "height": "40px" }} src={twitter} />
                </div>


                <div className=' pb-2 pt-4' style={{ "width": "50%" }}><img src={logo} /></div>

                <div className='text-white pb-4'><img style={{ "width": "20px", "height": "20px" }} src={india} />Ab India Chalega ElectricPe</div>

                <div className='flex text-gray-400  pb-2 pt-4'>Whatsapp Technologies Private Limited</div>
            </div >



        </div >
    )
}

export default Homepage
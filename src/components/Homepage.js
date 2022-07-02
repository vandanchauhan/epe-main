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

const Homepage = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="flex justify-end p-2 bg-gray-900">
                <div className='p-2 m-1 bg-yellow-200'></div>
                <div className='p-2 m-1 bg-red-200'></div>
                <div className='p-2 m-1 bg-green-200'></div>
            </div>

            {/* Electripe Icon */}
            <div className='flex w-60 justify-start mt-8 ml-8'>
                <div className=''><img src={logo} /> </div>
            </div>

            {/* Para */}
            <div className='flex-col h-auto mt-2 bg-black-900 justify-center items-center'>
                <div className='p-5 m-4 text-white text-5xl font-bold'>Leading charging infra provider</div>
                <div className='p-5 m-3 text-white text-2xl'>Say goodbye to days without charging station near you.</div>
            </div>

            {/* Image */}
            <div className='flex h-auto mt-2 bg-black-900 justify-center'>
                <div style={{ "width": "50%" }}><img src={scooter} /></div>
            </div>
            {/*Providing Charging Near Your Home*/}
            <div className='flex flex-col h-auto ml-6 mr-6 pb-8 bg-green-900'>
                <div className='pt-8 pl-5 text-white text-4xl font-bold'>Providing charging near <div className='text-black pt-2'>your home</div></div>
                <div className='flex justify-evenly pt-10'>
                    <div style={{ "width": "70px" }}><img src={home1} /></div>
                    <div style={{ "width": "70px" }}><img src={home2} /></div>
                    <div style={{ "width": "70px" }}><img src={home3} /></div>
                </div>


                <div className='flex pl-8 pr-8 pt-8'>
                    <div className='mr-8' ><img src={flash} style={{ "width": "70px", "height": "80px" }} /></div>
                    <div className='text-white'>Quick Charging
                        <div>Using the ultra fast cables, charge your EVs in less than 30 mins</div>
                    </div>
                </div>
                <div className='flex pl-8 pr-8 pt-8'>
                    <div className='mr-11'><img src={remote} style={{ "width": "50px", "height": "80px" }} /></div>
                    <div className='text-white'>Remote Connectivity
                        <div>Access your charging status from anywhere</div>
                    </div></div>
                <div className='flex pl-8 pr-8 pt-8'>
                    <div className='mr-6'><img src={money} style={{ "width": "90px", "height": "70px" }} /></div>
                    <div className='pl-2 text-white'>Cheapest Rates
                        <div>With our customers friendly subscription packs charge for as low as ₹50 / month </div>
                    </div></div>
                <div className='flex pb-5 pt-5 bg-[#00df9a] m-10 justify-center items-center'>
                    <h1 className='text-white text-2xl font-bold'>Find Nearby Stations--</h1>
                </div>
            </div >

            {/* Just Locate, Scan, Charge */}
            <div div className='flex flex-col bg-black-900 pt-8 justify-center items-center' >
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
            <div div className='flex flex-col bg-green-900 mr-8 ml-8 pb-5 justify-center items-center' >
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
            <div div className='flex-col bg-black-900 mt-2' >
                <div className='p-4 text-white'>Our Website</div>
                <div className='p-4 text-white'>Contact Us</div>
                <div className='p-4 text-white'>Icons</div>
                <div className='p-4 text-white'>Electric Pe</div>
                <div className='p-4 text-white'>Ab India Chalega ElectricPe</div>
                <div className='p-4 text-white'>Whatsapp Technologies Private Limited</div>
            </div >



        </div >
    )
}

export default Homepage
import React from 'react'
import logo from "../assests/logo.png"
import scooter from "../assests/scooter.png"
import home1 from "../assests/home1.png"
import home2 from "../assests/home2.png"
import home3 from "../assests/home3.png"
import flash from "../assests/flash.png"
import remote from "../assests/remote.png"
import money from "../assests/money.png"
import locate from "../assests/group.png"
import phone from "../assests/phone.png"
import india from "../assests/india.jpeg"
import twitter from "../assests/twitter.jpeg"
import linkedin from "../assests/linkedin.jpeg"
import playstore from "../assests/playstore.png"
import video from "../assests/video.png"

const Homepage = () => {
    return (
        <div className="bg-gradient-to-b from-[#030701] to-[#113402]">

            {/* Electripe Icon */}
            <div className='flex w-40 justify-start mt-8 ml-8'>
                <div className=''><img src={logo} /> </div>
            </div>

            {/* Para and scooter */}
            <div className='bg-gradient-to-b from-[#030701] to-[#113402] flex md:flex-row lg:flex-col md:justify-between justify- flex-col justify-center items-center pt-8 pl-4 pr-4'>
                <div className='text-white px-2'>
                    <p className='text-4xl pb-2 leading-10 font-semibold font-sans'> Leading charging infra provider</p>
                    <p className='text-lg pt-4 leading-6 font-light'> Say goodbye to days without charging station near you.</p>
                </div>
                <div className='mt-20 lg:justify-end w-64'><img src={scooter} /></div>
                {/*Providing Charging Near Your Home*/}
                <div className='flex flex-col mx-1 mb-6 md:mt-6 bg-gradient-to-b from-[#113402] to-[#030701]'>
                    <div>
                        <p className='text-white text-2xl md:text-4xl p-6 font-semibold leading-8'>Providing charging near <span className='text-teal-500'>your home</span></p>
                        <div className='flex md:justify-evenly justify-between pt-10 pr-2 pl-2'>
                            <div className='w-12'><img src={home1} /></div>
                            <div className='w-12'><img src={home2} /></div>
                            <div className='w-12'><img src={home3} /></div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center mt-10'>
                        <div className='flex flex-row justify-center items-center'>
                            <div className='px-4 ml-2'>
                                <img src={flash} className="w-16 resize" />
                            </div>
                            <div className='text-white py-2 pl-0 pr-4'>
                                <p className='font-semibold text-lg pb-1'>Quick Charging</p>
                                <p className='font-light text-sm pb-1 opacity-60'>Using the ultra fast cables, charge your EVs in less than 30 mins</p>
                            </div>
                        </div>

                        <div className='flex flex-row justify-center items-center'>
                            <div className='px-6 ml-2'>
                                <img src={remote} className="w-6 resize" />
                            </div>
                            <div className='text-white py-2 pl-0 pr-4'>
                                <p className='font-semibold text-lg pb-1'>Remote Connectivity</p>
                                <p className='font-light text-sm pb-1 opacity-60'>Access your charging status from anywhere</p>
                            </div>
                        </div>

                        <div className='flex flex-row justify-center items-center'>
                            <div className='px-4 ml-2'>
                                <img src={money} className="w-18 resize" />
                            </div>
                            <div className='text-white py-2 pl-0 pr-4'>
                                <p className='font-semibold text-lg pb-1'>Cheapest Rates</p>
                                <p className='font-light text-sm pb-1 opacity-60'>With our customers friendly subscription packs charge for as low as ₹50 / month </p>
                            </div>
                        </div>

                    </div>




                    <div className='flex'>
                        <div className='bg-[#00A878] justify-center mx-8 my-10 p-2 sm:p-3 md:p-5'>
                            <a>
                                <p className='text-white text-1xl md:text-4xl font-semibold'>Find Nearby Stations</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>




            {/* Just Locate, Scan, Charge */}
            <div div className='flex flex-col bg-gradient-to-b from-[#113402] to-[#030701] p-6 pt-8 justify-center items-center' >
                <div className='text-white text-left text-3xl leading-8 md:text-4xl font-semibold leading-8'>Just locate, scan and charge</div>

                <div className='bg-black-500 m-2 my-10'>
                    <div className='pr-4'>
                        <div><img src={locate} /></div>
                    </div>
                </div>


                <div className=' bg-black-500'><img src={phone} /></div>
                <div className='bg-black-200 w-full px-8 py-2 border-2 border-gray-800'>
                    <a className='flex flex-row justify-center items-center'>
                        <img className='w-12 mr-2' src={playstore} />
                        <h1 className='text-white font-bold text-1xl'>Download The App</h1>
                    </a>
                </div>
            </div>

            {/* A strong network of companies supporting us */}
            <div className='bg-gradient-to-b from-[#030701] to-[#113402]'>
                <div div className='flex flex-col bg-gradient-to-b from-[#113402] to-[#030701] p-5 mx-5 pb-5 justify-center items-center' >
                    <div className=' mt-5'>
                        <h1 className='text-white text-xl font-medium pl-2 pt-2'>
                            <span className='text-[#00A878]'>A strong network</span> of companies supporting us</h1>
                    </div>
                    <div className='flex m-1'>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>


                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>
                    </div>

                    <div className='flex m-1'>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>


                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>
                    </div>

                    <div className='flex m-1'>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>


                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>
                    </div>



                    <div className='flex justify-center m-5'>

                        <a className='bg-[#00A878] p-2'>
                            <p className='text-white text-1xl md:text-4xl font-semibold'>Become Partner</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* And thousands of Indians who believe in us */}

            <div div className='flex flex-col m-5 p-4' >
                <div className='m-2'><p className='text-white font-semibold text-3xl'>
                    And thousands of Indians who believe in us</p>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <img className='h-40 w-80' src={video} />
                    </div>
                </div>

                <div className='flex justify-start p-2'>
                    <div className=''><p className='text-white text-2xl'>Abhishek <span className='text-gray-400'>E-rikshaw Driver</span></p></div>
                </div>
            </div>


            <div className='flex flex-col m-5 p-4'>
                <div className='text-white text-3xl font-bold'>
                    In News
                </div>
                <div className='flex jsutify-center items-center mt-4'>
                    <div className='w-80 h-20 bg-slate-700 m-2'>
                        <p className='text-white font-bold p-2'><span className='text-[#00A878]'>ElectricPe</span> raises 220M in seed fund -</p>
                    </div>

                    <div className='w-40 h-20 bg-slate-700 m-2'>
                        <p></p>
                    </div>
                </div>
            </div>


            {/* Learn From Our Blogs */}
            <div div className='flex flex-col m-5 p-4' >
                <div>
                    <p className='text-white text-3xl font-bold'>Learn from our blogs</p>
                </div>

                <div className='flex flex-col m-4'>
                    <div className='h-20 w-70 bg-slate-700'></div>
                    <div className='h-10 w-70 bg-slate-900 p-2'><p className='text-white font-bold'>Safety First Station For All</p></div>
                </div>
            </div >

            {/* Footer */}
            <div div className=' p-8 flex flex-col bg-black' >
                <div className='text-gray-400 pb-2 pt-2'>Our Website</div>
                <div className='text-gray-400 pb-2 pt-2'>Contact Us</div>


                <div className='flex pb-4 pt-2'>
                    <div><img style={{ "width": "40px", "height": "40px" }} src={linkedin} /></div>
                    <div>
                        <img style={{ "width": "40px", "height": "40px" }} src={twitter} />
                    </div>

                </div>


                <div className=' pb-2 pt-4' style={{ "width": "50%" }}><img src={logo} /></div>

                <div className='flex justify-start'>
                    <div>
                        <img style={{ "width": "20px", "height": "20px" }} src={india} /></div>
                    <div className='text-white pl-1'>
                        Ab India Chalega ElectricPe</div>
                </div>

                <div className='flex text-gray-400  pb-2 pt-4'>Whatsapp Technologies Private Limited</div>
            </div >



        </div >
    )
}

export default Homepage
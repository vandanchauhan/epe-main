import React from 'react'
// import "./video.css"
// import { Carousel } from 'react-bootstrap'
import logo from "../assests/logo.png"
import scooter from "../assests/scooter.png"
import home1 from "../assests/home1.png"
import home2 from "../assests/home2.png"
import home3 from "../assests/home3.png"
import flash from "../assests/flash.png"
import remote from "../assests/remote.png"
import money from "../assests/money.png"
import group from "../assests/group.png"
import phone from "../assests/phone.png"
import india from "../assests/india.png"
import twitter from "../assests/twitter.png"
import linkedin from "../assests/linkedin.png"
import playstore from "../assests/playstore.png"
import one from "../assests/one.png"
import two from "../assests/two.png"
import three from "../assests/three.png"
import four from "../assests/four.png"
import five from "../assests/five.png"
// import video1 from "../assests/video1.mp4"
// import video2 from "../assests/video2.mp4"
// import video3 from "../assests/video3.mp4"
// import ReactPlayer from 'react-player'
// import "bootstrap/dist/css/bootstrap.css"
import rightArrow from "../assests/rightArrow.png"
import Typical from "react-typical"

const Homepage = () => {


    // const videoProperties = [
    //     {
    //         id: 1,
    //         title: "Video 1",
    //         src: video1,
    //         credit: "Video By Nikhil",
    //     },
    //     {
    //         id: 2,
    //         title: "Video 2",
    //         src: video2,
    //         credit: "Video By Nikhil",
    //     },
    //     {
    //         id: 3,
    //         title: "Video 3",
    //         src: video3,
    //         credit: "Video By Nikhil",
    //     },
    // ]

    return (
        <div className="bg-gradient-to-b from-[#030701] to-[#113402] m-0 p-0  w-auto">

            {/* Electripe Icon */}
            <div className='flex w-40 md:w-50 justify-start mt-8 ml-8'>
                <div className=''><img src={logo} /> </div>
            </div>

            {/* Para and scooter */}
            <div className='bg-gradient-to-b from-[#030701] to-[#113402] flex md:justify-between justify- flex-col justify-center items-center pt-8 pl-5 pr-5 md:pr-20 md:pl-20'>

                <div className='flex md:flex-row flex-col items-center justify-between w-100 md:pb-20'>
                    <div className='text-white px-2 md:pt-12'>
                        <p className='text-3xl md:text-4xl lg:text-5xl leading-10 font-bold font-sans'> Leading charging </p> <p className='text-3xl md:text-4xl lg:text-5xl leading-10 font-bold font-sans pb-2'>infra provider.</p>
                        <p className='text-base sm:text-lg leading-6 font-light  opacity-60 pt-2'> Say goodbye to days without charging </p> <p className='text-base sm:text-lg leading-6 font-light opacity-60'>stations near you.</p>
                    </div>

                    <div className='mt-20 lg:justify-end w-64 lg:w-96'><img src={scooter} /></div>
                </div>

                {/*Providing Charging Near Your Home*/}
                <div className='flex flex-col mb-6 md:mt-6 bg-gradient-to-b from-[#113402] to-[#030701]'>
                    <div>
                        <p className='text-white text-2xl md:text-4xl p-6 font-semibold leading-8 h-24'>Providing charging near <span className='text-teal-500'>your{' '}<Typical
                            loop={Infinity}
                            wrapper="n"
                            steps={[
                                'home',
                                2000,
                                'office',
                                2000,
                                'society',
                                2000
                            ]}
                        />
                        </span></p>
                        <div className='flex md:justify-evenly justify-between pt-10 pr-2 pl-2'>
                            <div className='w-12 animate-pulse'><img src={home1} /></div>
                            <div className='w-12 animate-pulse'><img src={home2} /></div>
                            <div className='w-12 animate-pulse'><img src={home3} /></div>
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


                    <a className='flex justify-center items-center m-5 bg-[#00A878] p-1 py-3'>
                        <p className='text-white text-1xl md:text-3xl font-semibold'>Find Nearby stations</p>
                        <img className='w-5 resize mx-2' src={rightArrow} />
                    </a>
                </div>
            </div>




            {/* Just Locate, Scan, Charge */}
            < div className='flex flex-col bg-gradient-to-b from-[#113402] to-[#030701] pl-5 pr-5 md:pr-20 md:pl-20 md: pt-8 items-center' >
                <div className=' md:self-start'><p className='text-white text-3xl md:text-4xl font-semibold leading-8'>Just locate, scan and charge</p></div>




                <div className='flex pr-4 pt-12'>
                    <div className='hidden md:block' >
                        <img src={group} />
                    </div>

                    <div className='md:hidden flex flex-col mr-2'>
                        <div className='p-2'> <img src={one} /></div>
                        <div className='self-end pr-2'> <img src={two} /></div>
                        <div className='p-2'> <img src={three} /></div>
                        <div className='self-start pl-2'> <img src={four} /></div>
                        <div className='p-2'> <img src={five} /></div>
                    </div>

                    <div className='md:hidden flex flex-col justify-between text-white ml-2 pb-2'>
                        <div> <p className='font-semibold text-lg'>Locate the station</p>
                            <p className='font-light text-sm opacity-60'>Open ElectriPe app and locate the nearest EV charging point</p></div>
                        <div> <p className='font-semibold text-lg'>Scan and charge</p>
                            <p className='font-light text-sm opacity-60'>Scan the QR code and plug the charger</p>
                        </div>
                        <div> <p className='font-semibold text-lg'>Pay</p>
                            <p className='font-light text-sm opacity-60'>Pay via the app for what you consume</p></div>
                    </div>

                </div>


                <div className=' bg-black-500'><img src={phone} /></div>
                <div className='bg-black-200 w-2/3 md:w-1/3 py-2 border-2 border-gray-800 mb-4'>
                    <a className='flex flex-row justify-center items-center'>
                        <img className='w-12 mr-2' src={playstore} />
                        <p className='text-white font-bold text-1xl md:text-2xl'>Download The App</p>
                    </a>
                </div>
            </div>

            {/* A strong network of companies supporting us */}
            <div className='bg-gradient-to-b from-[#030701] to-[#113402] pl-5 pr-5 md:pr-20 md:pl-20 pb-5'>
                <div className='flex flex-col bg-gradient-to-b from-[#113402] to-[#030701] pl-4 pr-4 md:pr-20 md:pl-20 pb-5  justify-center items-center' >
                    <div className=' mt-5'>
                        <h1 className='text-white text-xl font-medium pl-2 pt-2'>
                            <span className='text-[#00A878]'>A strong network</span> of companies supporting us</h1>
                    </div>
                    <div className='flex m-1'>

                        <div className='pr-10 pl-10 pt-10 pb-10 bg-gray-600 m-1'>
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

                        <div className='pr-10 pl-10 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>
                    </div>

                    <div className='flex m-1'>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>


                        <div className='pr-10 pl-10 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>

                        <div className='pr-14 pl-14 pt-10 pb-10 bg-gray-600 m-1'>
                        </div>
                    </div>

                    <a className='flex justify-center items-center m-5 bg-[#00A878] p-2 py-3 w-full'>
                        <p className='text-white text-1xl md:text-4xl font-semibold'>Become Partner</p>
                        <img className='w-5 resize mx-2' src={rightArrow} />
                    </a>
                </div>
            </div>

            {/* And thousands of Indians who believe in us */}

            <div className='bg-gradient-to-b px-4 from-[#030701] to-[#0B2101]'>


                {/* <div div className='flex flex-col mt-0 m-5 p-4' >
                    <div className='m-2'><p className='text-white font-semibold text-3xl'>
                        And thousands of Indians who believe in us</p>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <Carousel>
                                {videoProperties.map((videoObj) => {
                                    return (
                                        <Carousel.Item key={videoObj.id}>
                                            <ReactPlayer
                                                url={videoObj.src}
                                                // width="100%"
                                                pip={true}
                                                controls={true}
                                                playing={true}

                                            />
                                            <Carousel.Caption>
                                                <h3>{videoObj.title}</h3>
                                                <p>{videoObj.credit}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                    <div className='flex justify-start p-2'>
                        <div className=''><p className='text-white text-1xl'>Abhishek <span className='text-gray-400'>E-rikshaw Driver</span></p></div>
                    </div>
                </div> */}


                <div className='flex flex-col pl-5 pr-5 md:pr-20 md:pl-20 w-auto'>
                    <div>
                        <p className='text-white text-3xl md:text-4xl font-bold pt-5'> In News</p>
                    </div>

                    <div className='w-full h-40 md:h-96'>
                        <div className='flex mt-4 snap-x mx-auto w-full  h-40 md:h-80 overflow-scroll'>

                            <div className='w-full h-40 md:h-80 px-3 py-4 flex items-center flex-shrink-0 justify-center bg-[#090D08] m-2 snap-start'>
                                <p className='text-white text-base font-semibold font-inter normal'><span className='text-[#00A878]'>ElectricPe</span> raises 220M in seed fund</p>
                                <img className='w-5 ml-1 mt-1' src={rightArrow} />
                            </div>

                            <div className='w-full h-40 md:h-80 px-3 py-4 flex items-center flex-shrink-0 justify-center bg-[#090D08] m-2 snap-start'>
                                <p className='text-white text-base font-semibold font-inter normal'><span className='text-[#00A878]'>ElectricPe</span> raises 220M in seed fund</p>
                                <img className='w-5 ml-1 mt-1' src={rightArrow} />
                            </div>

                            <div className='w-full h-40 md:h-80 px-3 py-4 flex items-center flex-shrink-0 justify-center bg-[#090D08] m-2 snap-start'>
                                <p className='text-white text-base font-semibold font-inter normal'><span className='text-[#00A878]'>ElectricPe</span> raises 220M in seed fund</p>
                                <img className='w-5 ml-1 mt-1' src={rightArrow} />
                            </div>

                            <div className='w-full h-40 md:h-80 px-3 py-4 flex items-center flex-shrink-0 justify-center bg-[#090D08] m-2 snap-start'>
                                <p className='text-white text-base font-semibold font-inter normal'><span className='text-[#00A878]'>ElectricPe</span> raises 220M in seed fund</p>
                                <img className='w-5 ml-1 mt-1' src={rightArrow} />
                            </div>

                            <div className='w-full h-40 md:h-80 px-3 py-4 flex items-center flex-shrink-0 justify-center bg-[#090D08] m-2 snap-start'>
                                <p className='text-white text-base font-semibold font-inter normal'><span className='text-[#00A878]'>ElectricPe</span> raises 220M in seed fund</p>
                                <img className='w-5 ml-1 mt-1' src={rightArrow} />
                            </div>
                        </div></div>
                </div>


                {/* Learn From Our Blogs */}
                <div div className='flex flex-col pl-5 pr-5 md:pr-20 md:pl-20 w-auto'>
                    <div>
                        <p className='text-white text-3xl md:text-4xl font-bold pt-5'>Learn from our blogs</p>
                    </div>

                    <div className='flex items-center mt-4 snap-x mx-auto w-80 overflow-scroll'>
                        <div className='flex flex-col my-6 w-72 flex-shrink-0 snap-start mx-2'>
                            <div className='h-40 bg-[#383838]'></div>
                            <div className='bg-[#090D08] px-2 py-1'><p className='text-white text-1xl font-semibold font-inter text-start p-4'>Safety First Station For All</p></div>
                        </div>

                        <div className='flex flex-col my-6 w-72 flex-shrink-0 snap-start mx-2'>
                            <div className='h-40 bg-[#383838]'></div>
                            <div className='bg-[#090D08] px-2 py-1'><p className='text-white text-1xl font-semibold font-inter text-start p-4'>Safety First Station For All</p></div>
                        </div>

                        <div className='flex flex-col my-6 w-72 flex-shrink-0 snap-start mx-2'>
                            <div className='h-40 bg-[#383838]'></div>
                            <div className='bg-[#090D08] px-2 py-1'><p className='text-white text-1xl font-semibold font-inter text-start p-4'>Safety First Station For All</p></div>
                        </div>
                    </div>
                </div >
            </div>

            {/* Footer */}
            <div div className='p-8 flex flex-col bg-[#090D08]' >
                <div className='text-[#666666] pb-2 pt-2'>Our Website</div>
                <div className='text-[#666666] pb-2 pt-2'>Contact Us</div>


                <div className='flex pb-4 pt-2'>
                    <div className='pr-2'><img style={{ "width": "30px", "height": "30px" }} src={linkedin} /></div>
                    <div>
                        <img style={{ "width": "30px", "height": "30px" }} src={twitter} />
                    </div>

                </div>


                <div className='pt-4 w-80'>
                    <div className='w-32 md:w-40' ><img src={logo} /></div>


                    <div >
                        <img className='w-52' src={india} /></div>
                </div>


                <div className='flex text-[#666666] pb-2 pt-4'>Whatsapp Technologies Private Limited</div>
            </div >



        </div >
    )
}

export default Homepage
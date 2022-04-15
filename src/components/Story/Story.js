import React, { Component } from 'react';
import logo from '../../images/logo.png'
import './Story.css';



class Story extends Component {
    render() {
        return (
            <div className='storyMain'>
                <div className='summaryMain'>
                    <div className='summary2'>
                        <h1 className='ourStoryHeading'>Our Story</h1>
                    </div>
                    <br />
                    <div className='summaryPara1'>
                        <h4 className='summaryHeading'>SUMMARY OF THE JOURNEY</h4>
                        <br />
                        <p>Mr. Syed Muhammad Kaleem Uddin started his business in the year 1987 with Sea Food Exports (Fish, Crabs, Lobster etc…) from Fisheries, Karachi. He is also involved internationally in the Import of Edible food items from different Countries. After a couple of successfully running his business of Import & Export Internationally he expanded his business to meat export also.
                            Snow King Frozen Foods, was founded by Mr. Syed Muhammad Kaleem Uddin in 1999, and get its Registration with Ministry of Food & Agriculture (Live Stock Division) Government of Pakistan, Animal Quarantine Department in January 2005.  Snow King Frozen Foods owns a technologically advanced meat processing system located at SITE-II, Super Highway, Karachi, Pakistan.
                            <br />
                            <br />
                            The facility is built with the aim and capacity to deliver distinctly halal meat of Pakistan to the world around.
                            Snow King Frozen Foods stands differently among meat companies because the manner it organizes its supply chain. Our management system is very peculiar about the farms where the animals are reared. Whether it is the whole Carcass or Deboned Meat, we master in all because we select the best and deliver tender fresh meat to the consumers.
                            <br />
                            <br />
                            Snow King Frozen Foods is committed to remain amongst the best enterprises by maintaining the spirit of excellence through sustained growth in all activities offering reasonable price, quality products, safe and conducive working environment for all stakeholders.
                            <br />
                            <br />
                            Snow King Frozen Foods entered into the Meat Tender Business only with the Armed forces, currently we are supplying to Pakistan Air Force Continuously since 2019.
                        </p>
                    </div>
                </div>
                {/* Brands Start */}

                <section id='ourbrands' >
                    {/* 
                    <div className='welcomeMain'>
                        <div><h1 className='welcomeHeading'>Welcome To The Snow King Frozen Foods</h1></div>
                    </div> */}



                    <div className='brandsHeadingMain'>
                        <h2 className='brandsHeading'>OUR BRANDS</h2>
                    </div>
                    <div className='brandsMain'>
                        <div className='brands'>
                            <img src={logo} className='brandSKFF' alt='logo' />
                            <h5 className='brandSKFFheading'>SNOW KING FROZEN FOODS</h5>
                            {/* <Link to={'SKFF'}>
        <h6 className='brandSKFFheading'>SEE MORE</h6>
        </Link> */}
                        </div>
                        <div className='brands'>
                            <img src={logo} className='brandSKFF' alt='logo' />
                            <h5 className='brandSKFFheading'>SNOW KING FROZEN FOODS</h5>
                        </div>
                        <div className='brands'>
                            <img src={logo} className='brandSKFF' alt='logo' />
                            <h5 className='brandSKFFheading'>SNOW KING FROZEN FOODS</h5>
                        </div>
                        <div className='brands'>
                            <img src={logo} className='brandSKFF' alt='logo' />
                            <h5 className='brandSKFFheading'>SNOW KING FROZEN FOODS</h5>
                        </div>
                    </div>

                </section>

                {/* Brands End */}

                <div className='SKFFdetailsMain'>
                    <div className='SKFFheading'>
                        <h1 className='welcomeHeading'>Snow King Frozen Foods</h1>
                    </div>
                    <div className='SKFFdetails'>
                        <ul className='listMain'>
                            <br />
                            <br />


                            <li className='listBullets'>ISLAMIC SHARIAH REGULATIONS</li>

                            <p> The Snow King Frozen Foods incorporates 100% certified Islamic and Halal slaughtering methodology at every step of meat processing to ensure that tender and fresh meat reaches our customers.
                                <br />
                                <br />
                                <span className='listHeadings'>
                                    Attached certificates copies:
                                </span>

                                <br />
                                <ul className='freezingList'>
                                    <li>International Halal Certification</li>
                                </ul>
                            </p>


                            <li className='listBullets'>CERTIFICATIONS & CREDENTIALS</li>
                            Snow King Frozen Foods has obtained all necessary approvals, accreditation and certifications by relevant government ministries and international agencies.
                            <br />
                            Snow King Frozen Foods expanded the international exports to the different countries of the world
                            <br />
                            <br />

                            <span className='listHeadings'>
                                Attached Certificates Copies:
                            </span>
                            <br />
                            <ul className='freezingList'>
                                <li>Animal Quarantine Department</li>
                                <li>Environment Certificate</li>
                                <li>ISO 22000-2018 TUV Australia</li>
                                <li>Certificate from Labor Department</li>
                                <li>Professional Tax Certificate</li>
                                <li>Membership Certificate Chamber of Commerce</li>
                                <li>Income Tax & GST Certificate from FBR</li>
                            </ul>
                            <br />

                            <li className='listBullets'>WORKING CAPACITY</li>
                            Our Plant is designed to meet the objectives of high quality meat (cattle, buffalo, sheep and goat), by products and rendered products.
                            <br />
                            Both in Frozen & chilled categories adhering to international quality and standards.
                            <br />
                            <br />

                            <li className='listBullets'>OUR PRODUCTS</li>
                            <span className='listHeadings'>
                                FROZEN MEAT
                            </span>
                            <ul className='freezingList'>
                                <li>Frozen Mutton</li>
                                <li>Frozen Beef</li>
                            </ul>
                            <br />
                            <span className='listHeadings'>
                                CHILLED MEAT
                            </span>
                            <ul className='freezingList'>
                                <li>Chilled Mutton/ Lamb (Goat & Sheep)</li>
                                <li>Chilled Lamb (Sheep with fat tail- Liya)</li>
                                <li>Chilled Beef (Buffalo & Cow)</li>
                                <li>Chilled Veal (Young Buffalo and Cow)</li>
                                <li>Ch
                                    illed Offals (including Kidney, Liver, and Heart etc….)</li>
                            </ul>
                            <br />
                            <br />
                            <li className='listBullets'>FREEZING FACILITY</li>
                            <span className='listHeadings'>
                                BLAST FREEZING ROOMS
                            </span>
                            <br />
                            <ul className='freezingList'>
                                <li>Freezing Rooms	:	3</li>
                                <li>Capacity Room # 1	:	5 Tons</li>
                                <li>Capacity Room # 2	:	7 Tons</li>
                                <li>Capacity Room # 3	:	3 Tons</li>
                                <li>Cooling Method		:	Air Blast</li>
                                <li>Temperature		:	- 40◦C</li>
                            </ul>
                            <br />

                            <span className='listHeadings'>
                                FREEZING STORAGE
                            </span>
                            <br />
                            <ul className='freezingList'>
                                <li>Frozen Storage Rooms	:	2</li>
                                <li>Capacity Room # 1	:	100 Tons</li>
                                <li>Capacity Room # 2	:	75 Tons</li>
                                <li>Temperature		:	- 18◦C</li>
                            </ul>
                            <br />

                            <span className='listHeadings'>
                                CHILLING FACILITY
                            </span>
                            <br />
                            <ul className='freezingList'>
                                <li>Chilling Rooms		:	2</li>
                                <li>Capacity		:	20 Tons Each</li>
                                <li>Temperature		:	- 0.5±1◦C</li>
                            </ul>
                            <br />

                            <li className='listBullets'>CARCASS TEMPERATURE MAINTENANCE</li>
                            <span className='listHeadings'>
                                Chilling Control
                            </span>
                            <ul className='certificateList'>
                                <li>Chilling Control Process of at least 10 - 12 hours at 0.5 ± 1 ◦C for chilled meat which restricts the growth of Microorganisms.
                                </li>
                            </ul>
                            <br />

                            <span className='listHeadings'>
                                Blast Freezing
                            </span>
                            <ul className='certificateList'>
                                <li>Blast Freezing of Meat at - 40◦C and storage at - 18 to - 20 ◦C.
                                </li>
                            </ul>
                            <br />
                            <br />

                            <li className='listBullets'>PACKAGING</li>
                            <span className='listHeadings'>
                                Vacuum packaging
                            </span>
                            <br />
                            Furthermore, to preserve freshness of the meat, the product is offered in vacuum packaging to increase shelf life of the products.
                            <br />
                            For Packaging different methods are applied:
                            <ul className='freezingList'>
                                <li>Chilled		: 	Stock Net Cloth</li>
                                <li>Frozen		:	Cartoon Box</li>
                                <li>Frozen		:	Different Packing Weight</li>
                            </ul>
                            <br />
                            <br />
                            <li className='listBullets'>PEST CONTROL MECHANISM</li>
                            For ensuring Pest Free Environment (PFE) the Snow King Frozen Foods is using outside service of Pest Management Service Provider, the service includes:
                            <ul className='freezingList'>
                                <li>Bait Station</li>
                                <li>Crawling Insects etc.</li>
                                <li>Rodent Control</li>
                                <li>Fumigation</li>
                            </ul>
                            <br />
                            <br />

                            <li className='listBullets'>ANTE MORTEM & POST MORTEM MECHANISM</li>
                            The snow king frozen foods used scientific methods of slaughtering, for screening & to produce fine products, which includes:
                            <ul className='mortemTypesList'>
                            <br />

                                <li className='mortemMainList'>ANTE MORTEM MECHANISM</li>
                                The Ante Mortem Mechanism is perform in two phases
                                <ul className='antemotemList'>
                                    <li>Inspection at the time of receiving</li>
                                    <ul className='mortemList'>
                                        <li>Physical Fitness</li>
                                        <li>Rumination</li>
                                        <li>Respiration</li>
                                        <li>Gait</li>
                                        <li>Wounds/ injuries</li>
                                        <li>Discharge from anybody opening</li>
                                        <li>Return of Suspected Animals</li>
                                        <li>Weight at Receiving</li>
                                        <li>Posture of the Animal</li>
                                    </ul>
                                    <li>Inspection before Slaughtering</li>
                                    <ul className='mortemList'>
                                        <li>Respiration</li>
                                        <li>Behavior</li>
                                        <li>Gait</li>
                                        <li>Physical Fitness of Animal</li>
                                        <li>Wound/ Injuries</li>
                                        <li>Abnormal Discharge</li>
                                        <li>Weight after 12 to 24 Hours</li>
                                        <li>Animal Posture</li>
                                    </ul>
                                </ul>
                                <br />

                                <li className='mortemMainList'>POST MORTEM MECHANISM</li>

                                The steps of post martem are
                                <ul className='antemotemList'>
                                    <li>Head Inspection</li>
                                    <ul className='mortemList'>
                                        <li>Oral Cavity Analyses</li>
                                        <li>Tongue Analyses</li>
                                        <li>Lymph Nodes Analyses</li>
                                    </ul>
                                    <li>Offal Inspection</li>
                                    <ul className='mortemList'>
                                        <li>Lungs Analyses</li>
                                        <li>Heart Analyses</li>
                                        <li>Liver Analyses</li>
                                        <li>Kidney Analyses</li>
                                        <li>Uterus Analyses</li>
                                    </ul>
                                    <li>Carcass Inspection</li>
                                    <ul className='mortemList'>
                                        <li>Physical Analyses</li>
                                        <li>Musculature Analyses</li>
                                        <li>Lymph Nodes</li>
                                    </ul>
                                </ul>

                            </ul>
                            <br />
                            <br />
                            <li className='listBullets'>FUTURE PLAN</li>
                            <ul className='freezingList'>
                                <li>International breed development in Pakistan is on the agenda.</li>
                                <li>Snow King Frozen Foods is in the planning process for the availability of one stop organic meat shop for domestic arena. . Hygienic, fresh and wholesome beef, mutton, chicken and fish is delivered to the local market.</li>
                            </ul>



                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}


export default Story;
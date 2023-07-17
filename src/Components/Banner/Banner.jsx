import './Banner.css'
import { BiSolidCalendar } from 'react-icons/bi';
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import doctor from '../../assets/Images/doctor-1-removebg-preview.png'
import group from '../../assets/Images/Group 34830.png'
import locationLogo from '../../assets/Images/ap_resize-removebg-preview.png'
import messengerLogo from '../../assets/Images/download.png'
import EqualizerLogo from '../../assets/Images/Task-removebg-preview.png'

const Banner = () => {
    return (
        <div className="banner">

            {/* // ====================banner-info part ================================ */}
            <div className="banner-info">
                <h2 className='info-heading'>Protect Your Health <br />  And Take Care Of <br /> Your Health</h2>
                <div className="your-Opportunities">
                    <div className="Opportunity">
                        <div className="Opportunity-info">
                            <BiSolidCalendar className='Opportunities-icons' />
                            <span>
                                <h5>Make a Appointment</h5>
                                <p>Schedule With Your Favorite Doctor <br /> Anytime</p>
                            </span>

                        </div>
                    </div>
                    <div className="Opportunity">
                        <div className="Opportunity-info">
                            <BsShieldFillCheck className='Opportunities-icons' />
                            <span>
                                <h5> Health Guarantee Forever</h5>
                                <p>Will always provide the best <br />warranty for you</p>
                            </span>

                        </div>
                    </div>
                    <div className="Opportunity">
                        <div className="Opportunity-info">
                            <FaUserAlt className='Opportunities-icons' />
                            <span>
                                <h5> Find Your Best Doctor</h5>
                                <p>Will always provide the best <br />warranty for you</p>
                            </span>

                        </div>
                    </div>
                    <div className="Opportunity">
                        <div className="Opportunity-info">
                            <HiLocationMarker className='Opportunities-icons' />
                            <span>
                                <h5> Spread in Various Places</h5>
                                <p>Now Clinics Are Available in  <br />Various Places</p>
                            </span>

                        </div>
                    </div>
                </div>
                <button>Book Now</button>
            </div>
            {/* // ====================banner-img part ================================ */}
            <div className="banner-img">
                <img className='group' src={group} alt="" />
                <img className='locationLogo' src={locationLogo} alt="" />
                <img className='messengerLogo' src={messengerLogo} alt="" />
                <img className='EqualizerLogo' src={EqualizerLogo} alt="" />
                <img className='doctor-img' src={doctor} alt="" />
            </div>
        </div>
    );
};

export default Banner;
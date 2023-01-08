import '../Styles/IndexPage.scss'
import { useState } from 'react';
import Carousel from './Carousel'
import FacebookIcon from '../img/FacebookIcon.png'
import TwitterIcon from '../img/TwitterIcon.png'
import TiktokIcon from '../img/TiktokIcon.png'
import InstagramIcon from '../img/InstagramIcon.png'
import Logo from '../img/Logo.png'
import moment from 'moment'
import { Tooltip } from '@mui/material';

function IndexPage() {

    const [momentYear] = useState(moment(new Date()).format('YYYY'))

    return (
        <div className='IndexPageContainer'>
            <header className='IndexPageHeader'>
                <div className="IndexPageTitle">
                    <div className="IndexPageTitleLogo">
                        <img src={Logo} alt={""} />
                    </div>
                    <h1 className="IndexPageTitleText">Company Name</h1>
                </div>
                <div className="IndexPageMenu">
                    <h2 className="IndexPageMenuItem">Home</h2>
                    <h2 className="IndexPageMenuItem">Products</h2>
                    <h2 className="IndexPageMenuItem">About us</h2>
                </div>
            </header>
            <section className='IndexPageProducts'>
                <div className='IndexPageProductsTitle'>
                    <h2>Products</h2>
                    <p>Best selling products</p>
                </div>
                <div className='IndexPageProductsContainer'>
                    <Carousel />
                </div>
            </section>
            <footer className='IndexPageFooter'>
                <div className='IndexPageFooterSocialMediaContainer'>
                    <Tooltip title="Instagram" arrow placement='top'>
                        <a className='IndexPageFooterSocialMediaItem' href='https://www.instagram.com'>
                            <img src={InstagramIcon} alt={""} />
                        </a>
                    </Tooltip>
                    <Tooltip title="Facebook" arrow placement='top'>
                        <a className='IndexPageFooterSocialMediaItem' href='https://www.facebook.com'>
                            <img src={FacebookIcon} alt={""} />
                        </a>
                    </Tooltip>
                    <Tooltip title="Twitter" arrow placement='top'>
                        <a className='IndexPageFooterSocialMediaItem' href='https://www.twitter.com'>
                            <img src={TwitterIcon} alt={""} />
                        </a>
                    </Tooltip>
                    <Tooltip title="Tiktok" arrow placement='top'>
                        <a className='IndexPageFooterSocialMediaItem' href='https://www.tiktok.com'>
                            <img src={TiktokIcon} alt={""} />
                        </a>
                    </Tooltip>
                </div>
                <p className='IndexPageFooterCopyright'>{`© Copyright ${momentYear}  - Company - All directs reserved`}</p>
            </footer>
        </div>
    );
}

export default IndexPage;
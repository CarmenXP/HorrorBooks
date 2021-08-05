import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import "./Footer.css";

export default function Footer () {
    return (
        <footer>
            <div className="socialIcons">
                <FacebookIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>
                <InstagramIcon/>
                <PinterestIcon/>

            </div>
            <p>&copy; Todos los derechos reservado 2021</p>
        </footer>
    )
}

import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsappSquare, FaPhone } from 'react-icons/fa';
import {MdEmail } from 'react-icons/md';

import '../Footer/styles.css';

function Footer(){
    return (
        
        <footer className="footer"  id="home">
        <div className="menufooter">
        <nav>
            <ul>
                <li><a href="https://www.linkedin.com/in/fernando-reis-79b643144/" target="_Blank"><FaLinkedin size='1.5rem'/></a></li>
                <li><a href="https://github.com/fernandoreis9173/" target="_Blank"><FaGithub size='1.5rem'/></a></li>
                <li><a arial-label="e-mail" href="mailto:fernandoreis9173@gmail.com/" target="_Blank"> <MdEmail size='2rem'/></a></li>  
                <li><a href="http://web.whatsapp.com/send?1=pt_BR&phone=55092999845104/" target="_Blank"><FaWhatsappSquare size='2rem'/></a></li>
            
                 {/* <li> <FaPhone size='1.5rem'/></li>
                    <p>(92) 99461-4367</p> */}
            </ul>
            <h6 className="tituloRodape"> Copyright © 2021  - Powered by Flex Manaus Team I.T</h6>
          </nav>  
        </div>
        </footer>
      
    );
}

export default Footer;
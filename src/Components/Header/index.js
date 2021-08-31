import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserGraduate } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';

import '../Header/styles.css';

class Header extends Component {
    render() {
        return (
            
            <header className="header" id="home">
                <div className="menu">
                    {/* <nav>
                  <ul>
                      <li><Link  to="/inicio"><FaHome size="2.3rem"/></Link></li>
                      <li><Link  to="/sobre"><FaUserGraduate size="2rem"/></Link></li>
                      <li><Link  to="/contato"><GiCoffeeCup size="2.3rem"/></Link></li>
                  </ul>
                </nav>   */}

                            <div class="ladesquerdo">
                                <h3 className="tituloTonner"> Welcome To The Tonner System</h3>
                                
                            </div>
                
                            

                            <div class="ladodireito">
                                <img src="http://smartapproval.sao.flextronics.com/Images/Flex_RGB_Sml_r.png" class="auth-org-logo" alt="Flex - Prod logo logo" aria-label="Flex - Prod logo logo"></img>
                            </div>

                </div>
                
            </header>
        );
    }
}

export default Header;
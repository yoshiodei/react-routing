import React from 'react';
import KwaoLegalLogo from './../images/kawo-legal-logo.png';
import SU3 from './../images/su3.png';
import SU2 from './../images/su2.png';
import SU1 from './../images/su1.png';


const StartUp = () => {
    return (
        <div className="contain2">
        <div className="col-md-12 bg2">
            <nav className="nav nav-bg">
                <img src={KwaoLegalLogo} className="img" alt="brand" />
                <ul className="nav_list">
                    <li className="list_item "><a href="index.html">Home</a></li>
                    <li className="list_item active"><a href="startup.html">Startups</a></li>
                    <li className="list_item"><a href="register.html">Register</a></li>
                    <li className="list_item"><a href="login.html">Login</a></li>
                </ul>        
            </nav>
            <section className="startup">
                  <div className="service">
                      <div className="img-div">
                         <img src={SU3} alt="logo" className="service_img" />
                     </div>
                      <div className="service_info">
                          <h3>Think and Zoom</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde minus cupiditate porro cumque!consectetur adipisicing elit.</p>
                          <button className="btn-custom" type="submit">See full details </button>
                          <div className="service_line"></div>
                      </div>
                  </div>
                  <div className="service">
                     <div className="img-div">
                         <img src={SU2} alt="logo" className="service_img" />
                     </div>
                      
                      <div className="service_info">
                          <h3>Slatecube</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde minus cupiditate porro cumque!consectetur adipisicing elit.</p>
                          <button className="btn-custom" type="submit">See full details </button>
                          <div className="service_line"></div>
                      </div>
                  </div>
                  <div className="service">
                      <div className="img-div">
                         <img src={SU1} alt="logo" className="service_img" />
                     </div>
                      <div className="service_info">
                          <h3>Sleekjob Academy</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde minus cupiditate porro cumque!consectetur adipisicing elit.</p>
                          <button className="btn-custom" type="submit">See full details </button>
                          <div className="service_line"></div>
                      </div>
                  </div>
            </section>
            
            
        </div>
        <footer className="footer">
                <p className="copyright">&copy; 2017 KawoLegal. All Rights Reserved</p>
                <div className="social">
                <i className="social_icon fab fa-facebook-f"></i>
                <i className="social_icon fab fa-twitter"></i>
                <i className="social_icon fab fa-linkedin"></i>
                <i className="social_icon fab fa-instagram"></i>
                </div>
            </footer>
    </div>
    );
}

export default StartUp;

import React from 'react';
import KwaoLegalLogo from './../images/kawo-legal-logo.png';

const Home = () => {
    return (
        <div classNameName="contain">
            <div classNameName="bg">
                <nav classNameName="nav">
                    <img src={KwaoLegalLogo} classNameName="img" alt="brand" />
                    <ul classNameName="nav_list">
                        <li classNameName="list_item active"><a href="index.html">Home</a></li>
                        <li classNameName="list_item"><a href="startup.html">Startups</a></li>
                        <li classNameName="list_item"><a href="register.html">Register</a></li>
                        <li classNameName="list_item"><a href="login.html">Login</a></li>
                    </ul>        
                </nav>
                <section classNameName="landing">
                    <h2>KAWOLEGAL</h2>
                    <p>A collaborative ecosystem for problem solver and support for Startups.</p>
                    <a href="register.html" classNameName="btn">Register Now!</a>    
                </section>
            </div>
            <footer classNameName="footer">
                <p classNameName="copyright">&copy; 2017 KawoLegal. All Rights Reserved</p>
                <div classNameName="social">
                <i classNameName="social_icon fab fa-facebook-f"></i>
                <i classNameName="social_icon fab fa-twitter"></i>
                <i classNameName="social_icon fab fa-linkedin"></i>
                <i classNameName="social_icon fab fa-instagram"></i>
                </div>
        </footer>
        </div>
    );
}

export default Home;

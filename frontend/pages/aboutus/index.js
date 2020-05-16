import "../../static/css/styles2.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const aboutus = () => {

    return (
    <div className="outer">

        <div className="wrapper">
            <br></br>
           <h2 className="h2"> <center>ABOUT THE DEVELOPERS</center> </h2> 
           <div className="content">
           {/* <center><img src="/waulto.jpg" alt="devlogo" width="200" height="90" /></center> */}
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
            </div>
            </div>
            <div className = "crd">
                 <div class="row">
                                 <div class="column">
                                    <div class="card">
                                      <h3>Babu Aravind</h3>
                                        <p>Developer</p>
                                        <div className="icon">
                                                    <SocialIcon url="http://twitter.com" /> 
                                                .
                                                <SocialIcon url="https://www.linkedin.com"/>
                                                .
                                                <SocialIcon url="https://www.instagram.com"/>
                                        </div>
                                     </div>
                                </div>

                        <div class="column">
                            <div class="card">
                            <h3>Kashyab</h3>
                            <p>Developer</p>
                            <div className="icon">
                            <SocialIcon url="http://twitter.com" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com"/>
                            .
                            <SocialIcon url="https://www.instagram.com"/>
                            </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div class="card">
                            <h3>Sanjay</h3>
                            <p>Developer</p>
                            <div className="icon">
                            <SocialIcon url="http://twitter.com" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com"/>
                            .
                            <SocialIcon url="https://www.instagram.com"/>
                            </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div class="card">
                            <h3>Saran Raj</h3>
                            <p>Developer</p>

                            <div className="icon">
                            <SocialIcon url="http://twitter.com" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com"/>
                            .
                            <SocialIcon url="https://www.instagram.com"/>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                            <h3>Praveen</h3>
                            <p>Product Manager</p>
                            <div className="icon">
                            <SocialIcon url="http://twitter.com" /> 
                            .
                            <SocialIcon url="https://www.linkedin.com"/>
                            .
                            <SocialIcon url="https://www.instagram.com"/>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="logo">
                <center><a href="https://www.linkedin.com/company/waulto"> &copy; WAULTO-2020</a></center>
            {/* <center><img src="/waulto.jpg" alt="devlogo" width="700" height="400" /></center> */}


            </div>

            
          
                                    
</div> 
    
    );
};

export default aboutus;
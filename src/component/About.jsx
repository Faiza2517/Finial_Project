import React from 'react'
import {aboutimg, pic21,bg, pic22, pic23, pic24,pic31,pic32,pic33,pic34} from '../assets'
import { useNavigate } from 'react-router-dom';


export const About = () => {
    const navigate = useNavigate();
  const team=[
  
          {
              name: "Kiersten Lange",
              role: "Chief Admin",
              image: pic22,
              social: {
                  facebook: "https://www.facebook.com/",
                  twitter: "https://www.twitter.com/",
                  dribbble: "https://www.dribbble.com/",
                  linkedin: "https://www.linkedin.com/"
              }
          },
          {
              name: "Monroe Bond",
              role: "Chief Admin",
              image: pic23,
              social: {
                  facebook: "https://www.facebook.com/",
                  twitter: "https://www.twitter.com/",
                  dribbble: "https://www.dribbble.com/",
                  linkedin: "https://www.linkedin.com/"
              }
          },
          {
              name: "Raymond Atkins",
              role: "Chief Admin",
              image: pic24,
              social: {
                  facebook: "https://www.facebook.com/",
                  twitter: "https://www.twitter.com/",
                  dribbble: "https://www.dribbble.com/",
                  linkedin: "https://www.linkedin.com/"
              }
          }

  ]
  const service = [{
    img: pic31,
    detaail: 'SUPPORT 24/7',
    description: 'Delicated 24/7 Support'
},
{
    img: pic32,
    detaail: 'EASY RETURNS',
    description: 'Shop With Confidence'
},
{
    img: pic33,
    detaail: 'CARD PAYMENT',
    description: '12 Months Installments'
},
{
    img: pic34,
    detaail: 'FREE SHIPPING',
    description: 'Capped at $50 per order'
}
]
const handleClick=()=>{
    navigate("/contact")
}
  return (
    <>
     <div class="page-header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="page-header-content">
                                <h2 class="page-header-title" style={{textAlign:'left'}}>About Us</h2>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home //</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="page-header-thumb">
                                <img src={aboutimg} alt="Image-HasTech" width="546" height="281"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="divider-area section-space">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="ps-lg-10 pe-lg-10 ms-lg-2 me-lg-2 mb-10 mb-lg-0 text-center text-lg-start">
                                <img src={pic21} alt="Image-HasTech" width="449" height="550"/>
                            </div>
                        </div>
                        <div class="col-lg-6 text-center text-lg-start ">
                            <h2 class="divider-title mt-n2 about-heading">Elehaus Story, We Craft Awesome With Great Experiences.</h2>
                            <p class="divider-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimo veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eatrl commodo consequat. Duis aute irure dolor in reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <button class="btn btn-theme" type="submit"
                            onClick={handleClick}>Contact Us <i class="icon fa fa-arrow-right ms-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="video-area section-bottom-space">
                <div class="container">
                    <h2 class="section-four-title text-center mt-n3 mb-4 mb-lg-9">Smart Fashion <span class="d-block fw-bold text-danger">With Smart Devices</span></h2>
                    <a class="video-wrp ht-popup-video" data-fancybox data-type="iframe" href="https://player.vimeo.com/video/172601404?autoplay=1">
                        <img src={bg} alt="Image-HasTech" width="1250" height="500"/>
                        <span class="btn-play"><span class="icon"><i class="fa fa-play"></i></span></span>
                    </a>
                </div>
            </div>

            <div className="team-area section-bottom-space">
                <div className="container">
                    <h2 className="section-title text-black text-center mt-n2">Our Team</h2>
                    <div className="row mt-n1 mb-n6">
                        {team.map(member => (
                            <div key={member.name} className="col-sm-6 col-md-6 col-lg-4 mb-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <img className="w-100" src={member.image} alt="Image-HasTech"/>
                                    </div>
                                    <div className="team-info">
                                        <h4 className="team-title mt-n1">{member.name}</h4>
                                        <h5 className="team-reg">{member.role}</h5>
                                        <div className="social-items">
                                            <a href={member.social.facebook} target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                                            <a href={member.social.twitter} target="_blank" rel="noopener"><i className="fa fa-twitter"></i></a>
                                            <a href={member.social.dribbble} target="_blank" rel="noopener"><i className="fa fa-dribbble"></i></a>
                                            <a href={member.social.linkedin} target="_blank" rel="noopener"><i className="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div class="features-area section-space">
                <div class="container">
                    <div class="row mb-n8 mt-n2">
                        {service.map((item, index) => (
                            <div key={index} class="col-sm-6 col-md-6 col-lg-3 mb-6">
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        {/* Assuming you want to use the same image for all features */}
                                        <img src={item.img} width="44" height="38" alt="Icon" />
                                    </div>
                                    <div class="feature-content" style={{ textAlign: 'left' }}>
                                        <h4 class="feature-title" style={{ paddingBottom: '8px' }}>{item.detaail}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </>
  )
}

import React from 'react';
import './Style.css';
import { pic1, pic30, pic31, pic32, pic33, pic34 ,pic2,pic3,pic4} from '../assets'
import { Featured } from './Featured';
import { Link } from 'react-router-dom';



export const Home = () => {

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
    const card=[{
        image:pic2,
        title:'Get 50% Off',
        detail:'Smart Phone'
    },
    {
        image:pic3,
        title:'Get 50% Off',
        detail:'Gaming Pad & Handel  '
    },
    {
        image:pic4,
        title:'Get 50% Off',
        detail:'Smart Speaker & assistant'
    }
]
    return (
        <>
            <div class="hero-slider-area position-relative">
                <div class="swiper hero-slider-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide hero-slide-item">
                            <div class="container h-100">
                                <div class="row align-items-center position-relative h-100">
                                    <div class="col-12 col-sm-6 col-lg-5">
                                        <div class="hero-slide-content" style={{ textAlign: 'left' }}>
                                            <h4 class="hero-slide-sub-title">12GB . 5G4K . Video</h4>
                                            <h1 class="hero-slide-title">Small & Thin Smart Watch 4Th Gen</h1>
                                            <Link to='/shop' class="btn btn-white">Shop Now <i class="icon fa fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-lg-6 offset-lg-1">
                                        <div class="hero-slide-thumb">
                                            <img src={pic1} width="427" height="501" alt="Image" />
                                        </div>
                                        <div class="hero-slide-shape-img"><img src={pic30} width="570" height="260" alt="Image" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*start services*/}
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

            {/*start produtct banner*/}
             {/* Product banner area */}
             <div class="product-banner-area">
                <div class="container">
                    <div class="row mb-n6">
                        {/* Mapping over the card array */}
                        {card.map((item, index) => (
                            <div key={index} class="col-sm-6 col-md-6 col-lg-4 mb-6">
                                <div class="product-banner-item" style={{textAlign:'left'}}>
                                    <div class="product-banner-thumb">
                                        {/* Assuming your images are named in a sequence */}
                                        <img src={item.image} width="370" height="287" alt="Image-HasTech" />
                                    </div>
                                    <div class="product-banner-content">
                                        <h5 class="product-banner-desc">{item.title}</h5>
                                        <h2 class="product-banner-title">{item.detail}</h2>
                                        <Link to='/shop ' class="btn-link" >Shop Now <i class="icon fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
<Featured/>

        </>

    )
}

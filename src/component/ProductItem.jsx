import React from 'react';
import './Style.css';
import { data1, data2, data3, data4, data5, data6, data7, data8, data9 } from '../assets';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShuffleIcon from '@mui/icons-material/Shuffle';

export const ProductItem = () => {
    // Array containing data for each product
    const products = [
        { image: data1, name: "Game Triger Finger New Insulated PH-X", price: "$160.00", badges: "10%" },
        { image: data2, name: "Android Television Super New DGT Smart -256", price: "$256.00", badges: "new" },
        { image: data3, name: "Headphone Supersonic Pew Adi Cable -25", price: "$280.00", badges: "hot" },
        { image: data4, name: "Bluetooth Speaker New Without Cable XP", price: "$353.00", badges: "Sold Out" },
        { image: data5, name: "Bluetooth Speaker New Without Cable XP", price: "$273.00", badges: "10%" },
        { image: data6, name: "Bluetooth Speaker New Without Cable XP", price: "$853.00", badges: "new" },
        { image: data7, name: "Bluetooth Speaker New Without Cable XP", price: "$243.00", badges: "hot" },
        { image: data8, name: "Bluetooth Speaker New Without Cable XP", price: "$290.00", badges: "Sold Out" },
        { image: data9, name: "Bluetooth Speaker New Without Cable XP", price: "$319.00", badges: "10%" },
        
    ];

    return (
        <div class="tab-content" id="nav-tabContent">
            <div className='container'>
                <div class="tab-pane fade show active" id="column-three" role="tabpanel" aria-labelledby="column-three-tab">
                    <div class="row mb-n6">
                        {/* Map over the products array */}
                        {products.map((product, index) => (
                            <div key={index} class="col-sm-6 col-lg-4 mb-6 mt-4">
                                <div class="product-item">
                                    <a class="product-item-thumb">
                                        <img src={product.image} width="270" height="264" alt="Image-HasTech" />
                                    </a>
                                    <span class="badges bg-theme3" style={{textAlign:'center'}}>{product.badges}</span>
                                
                                        {/* Add action buttons as needed */}
                                        <div class="product-item-action">
                                            <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                <FavoriteBorderIcon/>
                                            </button>
                                            <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                <ShuffleIcon/>
                                            </button>
                                            <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                <SearchIcon/>
                                            </button>
                                        </div>
                                    <div class="product-item-info text-center pb-6">
                                        <h4 class="product-item-title mb-2"><a>{product.name}</a></h4>
                                        <div class="product-item-price">{product.price}</div>
                                        <div class="product-item-review-icon">
                                        <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

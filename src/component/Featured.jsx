import React, { useState, useEffect } from 'react'
import './Style.css';
import { pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic35, pic13, pic16, pic17 } from '../assets'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import { Shoppingcart } from './ShoppingCart'
import { useContextApi } from './Cartcontaxt';
import { ViewCart } from './VeiwCart';

export const Featured = () => {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useContextApi();

    const products = [
        { id: 1, image: pic7, name: 'Vedio Game', title: 'Headphone Smart Pewgen Adi-25', price: '$268.00' },
        { id: 2, image: pic8, name: 'LED', title: 'Bluetooth Speaker New Without Cable', price: '$298.00' },
        { id: 3, image: pic9, name: 'HeadPhone', title: 'Vivi Movi Box Black HK With Eye Protect', price: '$260.00' },
        { id: 4, image: pic10, name: 'Speaker', title: 'Android Tablet 8.1 Mini Old - 256Gj', price: '$265.00' },
        { id: 5, image: pic11, name: 'Movi Box', title: 'Vivi Movi Box Black HK With Eye Protect', price: '$260.00' },
        { id: 6, image: pic12, name: 'Tablet', title: 'Android Tablet 8.1 Mini Old - 256Gj', price: '$265.00' },
    ];

    const handleWhishList = () => {
        navigate('/whishtlist');
        console.log('heloooooo');
    };

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity++;
            setCartItems(newCartItems);
        } else {
            const newItem = { ...product, quantity: 1 };
            const updatedCartItems = [...cartItems, newItem];
            setCartItems(updatedCartItems);
        }

        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
    };

    const decreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
        }
    };

    // useEffect to calculate total price whenever cartItems change
    useEffect(() => {
        calculateTotalPrice(cartItems);
    }, [cartItems]);

    // Function to calculate total price
    const calculateTotalPrice = (items) => {
        const totalPrice = items.reduce((acc, curr) => acc + parseFloat(curr.price.slice(1)) * curr.quantity, 0);
        setTotalPrice(totalPrice.toFixed(2)); // Convert the total to a fixed 2 decimal places
    };

    const toggleCartDrawer = () => {
        setIsCartOpen(!isCartOpen);
    };


    return (
        <>
            <div class="product-area section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 " style={{ marginTop: '64px' }}>
                            <div class="daily-deals-area">
                                <h3 class="daily-deals-title">Daily Deals!</h3>
                                <div class="swiper-button-style3">
                                    <div class="swiper-button-prev"><ChevronLeftIcon /></div>
                                    <div class="swiper-button-next"><ChevronRightIcon /></div>
                                </div>
                                <div class="swiper product-daily-deals-slider">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="countdown1 pt-8" data-countdown="2023/12/01"></div>
                                            <div class="product-item product-item-border border-0">
                                                <a class="product-item-thumb">
                                                    <img src={pic5} width="265" height="280" alt="Image-HasTech" />
                                                </a>
                                                {/* Add action buttons as needed */}
                                                <div class="product-item-action">
                                                    <button type="button" onClick={handleWhishList} class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                        <FavoriteBorderIcon />
                                                    </button>
                                                    <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                        <ShuffleIcon />
                                                    </button>
                                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                        <SearchIcon />
                                                    </button>
                                                </div>

                                                <div class="product-item-info ps-6 ps-lg-2 ps-xl-6 pe-6 pe-lg-2 pe-xl-6">
                                                    <h5 class="product-item-title"><a >Headphone Supersonic New Adi-25</a></h5>
                                                    <div class="info-bottom">
                                                        <div class="product-item-price">$256.00</div>
                                                        <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><ShoppingCart /></button>
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
                                        </div>

                                        <div class="swiper-slide">
                                            <div class="countdown1 pt-8" data-countdown="2023/12/01"></div>
                                            <div class="product-item product-item-border border-0">
                                                <a class="product-item-thumb">
                                                    <img src={pic6} width="265" height="280" alt="Image-HasTech" />
                                                </a>
                                                <div class="product-item-action">
                                                    <button type="button" onClick={handleWhishList} class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                        <FavoriteBorderIcon />
                                                    </button>
                                                    <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                        <ShuffleIcon />
                                                    </button>
                                                    <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                        <SearchIcon />
                                                    </button>
                                                </div>
                                                <div class="product-item-info ps-6 ps-lg-2 ps-xl-6 pe-6 pe-lg-2 pe-xl-6">
                                                    <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic New Adi-25</a></h5>
                                                    <div class="info-bottom">
                                                        <div class="product-item-price">$256.00</div>
                                                        <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                                            <ShoppingCart />
                                                        </button>
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <h2 class="mb-7 mt-n2" style={{ textAlign: 'left', marginBottom: '25px' }}>Featured Products</h2>
                            {/* Product items */}
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 product-two-items">
                                {products.map((product, index) => (
                                    <div key={index} class="col">
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb">
                                                <img src={product.image} width="290" height="248" alt="Product" />
                                            </a>
                                            <div class="product-item-action">
                                                <button type="button" onClick={handleWhishList} class="product-action-btn" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <FavoriteBorderIcon />
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <ShuffleIcon />
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <SearchIcon />
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a >{product.title}</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">{product.price}</div>
                                                    <button
                                                        type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"
                                                        onClick={() => addToCart(product)}        >
                                                        <ShoppingCart />
                                                    </button>
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
                                    </div>
                                ))}
                            </div>
                            {/* Cart Drawer */}
                            <Shoppingcart
                                cartItems={cartItems}
                                totalPrice={totalPrice}
                                isCartOpen={isCartOpen}
                                toggleCartDrawer={toggleCartDrawer}
                                removeFromCart={removeFromCart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ViewCart
                cartItems={cartItems}
                totalPrice={totalPrice}
                isCartOpen={isCartOpen}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                products={products}
            />
            {/*top catagories*/}

            <div class="product-categories-area section-space bg-dark">
                <div class="container">
                    <div class="section-title text-center">
                        <h2 class="title text-white mt-n2 mb-4">Top Categories</h2>
                    </div>
                    <div class="row">
                        <div class="col-6 col-sm-2">
                            <a href="#" class="product-category-item">
                                <div class="product-category-thumb">
                                    <img src={pic10} class="category-image" alt="Image-HasTech" />
                                </div>
                                <h5 class="product-category-title">Audio/Video</h5>
                            </a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#" class="product-category-item">
                                <div class="product-category-thumb">
                                    <img src={pic11} class="category-image" alt="Image-HasTech" />
                                </div>
                                <h5 class="product-category-title">Gaming</h5>
                            </a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#" class="product-category-item">
                                <div class="product-category-thumb">
                                    <img src={pic9} class="category-image" alt="Image-HasTech" />
                                </div>
                                <h5 class="product-category-title">Headphone</h5>
                            </a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#" class="product-category-item">
                                <div class="product-category-thumb">
                                    <img src={pic35} class="category-image" alt="Image-HasTech" />
                                </div>
                                <h5 class="product-category-title">Digital Camera</h5>
                            </a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#" class="product-category-item">
                                <div class="product-category-thumb">
                                    <img src={pic13} class="category-image" alt="Image-HasTech" />
                                </div>
                                <h5 class="product-category-title">Mobile Phone</h5>
                            </a>
                        </div>
                        <div class="col-6 col-sm-2">
                            <a href="#" class="product-category-item">
                                <div class="product-category-thumb">
                                    <img src={pic12} class="category-image" alt="Image-HasTech" />
                                </div>
                                <h5 class="product-category-title">Computer/Laptop</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="product-banner-area mt-5">
                <div class="container">
                    <div class="row mb-n6">
                        <div class="col-sm-12 col-md-6 mb-6">
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src={pic16} width="570" height="330" alt="Image-HasTech" />
                                </div>
                                <div class="product-banner-content text-center ps-4 ps-sm-6 ps-md-4 ps-lg-8">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-title">Smart Watch <span class="d-block">Android</span></h2>
                                    <Link to='/shop' class="btn-link">Shop Now <i class="icon fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 mb-6">
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src={pic17} width="570" height="330" alt="Image-HasTech" />
                                </div>
                                <div class="product-banner-content text-center ps-4 ps-sm-6 ps-md-4 ps-lg-8">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-title">New Smart Phone <span class="d-block">With Touch</span></h2>
                                    <Link to='/shop' class="btn-link">Shop Now <i class="icon fa fa-arrow-right"></i></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

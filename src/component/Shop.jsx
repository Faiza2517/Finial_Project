import React from 'react'
import { aboutimg, pic11, pic12, pic13, pic6, pic7, pic8, pic9 ,pic5,pic10,pic14,pic15,pic25,pic26,pic36,pic37} from '../assets'
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ProductItem } from './ProductItem';

export const Shop = () => {
  return (
    <>
      <div class="page-header-area">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="page-header-content">
                <h2 class="page-header-title" style={{ textAlign: 'left' }}>About Us</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home //</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Shop</li>
                </ol>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="page-header-thumb">
                <img src={aboutimg} alt="Image-HasTech" width="546" height="281" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-area mt-5">
        <div class="container">
          <div class="shop-top-bar">
            <div class="nav nav-tabs shop-filter-nav active" id="nav-tab" role="tablist">
              <button class="nav-link active" id="column-three-tab" data-bs-toggle="tab" data-bs-target="#column-three" type="button" role="tab" aria-controls="column-three" aria-selected="true"><GridViewIcon /></button>
              <button class="nav-link mr-0" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><FormatListBulletedIcon /></button>
            </div>
            <select class="select-shoing">
              <option data-display="Default Sorting">Default Sorting</option>
              <option value="1">Featured</option>
              <option value="2">Best Selling</option>
              <option value="3">Price: low to high</option>
              <option value="4">Price: high to low</option>
            </select>
            <div class="product-showing-count">
              Showing <span>1–9</span> of <span>10</span> results
            </div>
            <nav class="pagination-area ms-md-auto mt-3 mt-md-0">
              <ul class="page-numbers">
                <li>
                  <a class="page-number active" href="shop.html">1</a>
                </li>
                <li>
                  <a class="page-number" href="shop.html">2</a>
                </li>
                <li>
                  <a class="page-number next" href="shop.html">
                    <i class="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
<ProductItem/>
            

    </>
  )
}

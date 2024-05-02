import React from 'react'
import { aboutimg } from '../assets'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <>
    <div class="page-header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="page-header-content">
                                <h2 class="page-header-title" style={{textAlign:'left'}}>Page Not Found</h2>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home //</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Account</li>
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

            <div class="page-not-found-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 m-auto">
                            <div class="error-content text-center">
                                <h1 style={{fontWeight:300,marginTop:'40px'}}>We Are Sorry, Page Not Found</h1>
                                <p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again. <Link to='/' class="d-block">Back to Homepage</Link> </p>
                                <form class="error-search" action="#">
                                    <input type="text" placeholder="Search for… "/>
                                    <button class="button-search">< SearchIcon alt="Icon"/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

import React from 'react'
import { aboutimg } from '../assets'

export const CheckOut = () => {
  return (
    <>
       <div class="page-header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="page-header-content">
                                <h2 class="page-header-title" style={{textAlign:'left'}}>CheckOut</h2>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home //</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">CheckOut</li>
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

            <div className='container-fluid'>

            </div>

    </>
  )
}

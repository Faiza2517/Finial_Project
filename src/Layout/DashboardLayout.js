import React from 'react'
import { Outlet } from 'react-router-dom'

import{Header} from '../component/Header';
import { Footer } from '../component/Footer';

export const DashboardLyout = () => {

    return (
        
            <>
            <Header/>
                <Outlet />
                <Footer/>
            </>

    )
}

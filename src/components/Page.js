import React from 'react';
import {Route , Switch} from 'react-router-dom';
import StartPage from '../pages/StartPage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () =>{
    return(
        <>  
            <Switch>
                <Route path="/" exact component={StartPage}/>
                <Route path="/products" component={ProductsPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/admin" component={AdminPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </>
    )

}

export default Page;
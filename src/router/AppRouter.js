import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// Pages
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path='/' component={Dashboard} exact={true} />
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter

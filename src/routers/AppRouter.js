import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";  
import { AbilitiesScreen } from '../components/abilities/AbilitiesScreen';
import { BerriesScreen } from '../components/berries/BerriesScreen';
import { PokemonProfile } from '../components/pokemon/PokemonProfile'
import { PokemonScreen } from '../components/pokemon/PokemonScreen'
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar'

export const AppRouter = () => {
    return (
        <>
            <Router>

                <Navbar />
                
                <div className="container mt-5">
                    <Switch>
                        <Route exact path="/pokemon" component={ PokemonScreen } />
                        <Route exact path="/pokemon/:name" component={ PokemonProfile }/>
                        <Route exact path="/abilities" component={ AbilitiesScreen } />
                        <Route exact path="/berries" component={ BerriesScreen } />
                        <Route exact path="/abilities/:name" component={ AbilitiesScreen } />
                        <Route exact path="/berries/:name" component={ AbilitiesScreen } />
                        <Redirect to="/pokemon" />
                    </Switch>
                </div>

                <Footer />
            </Router>
        </>
    )
}

import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchRide } from './components/FetchRide';
import { AddRide } from './components/AddRide';

export const routes = <Layout>

    <Route exact path='/' component={Home} />
    <Route path='/fetchride' component={FetchRide} />
    <Route path='/addride' component={AddRide} />
    <Route path='/ride/edit/:empid' component={AddRide} />
</Layout>;
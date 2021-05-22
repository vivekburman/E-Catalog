import React from 'react';
import {
    Route, Switch
} from 'react-router-dom';
import Home from '../loadablecomponents/home';
const Root = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </>
    );
}
export default Root;
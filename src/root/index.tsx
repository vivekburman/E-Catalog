import './index.scss';
import {
    Route, Switch, useHistory
} from 'react-router-dom';
import Home from '../loadablecomponents/home';
import { useEffect } from 'react';
const Root = () => {
    const history = useHistory();
    useEffect(() => {
        history.push("/home");
    });
    return(
        <>
            <Switch>
                <Route exact path="/home" component={Home} />
            </Switch>
        </>
    );
}
export default Root;
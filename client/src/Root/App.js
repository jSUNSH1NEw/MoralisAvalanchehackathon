import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useWeb3Context } from "../hooks";
import { loadAppDetails } from "../store/slices/app-slice";
import { Passport } from "./passport";
import Landing from "../views/Landing";
import "./style.scss";



function App() {
    passport = new Passport();
    passport.init();
    //function to get the current user
    passport.getCurrentUser().then(function(user) {
        console.log(user);
    });
    
    const dispatch = useDispatch();

    const { provider, chainID, connected } = useWeb3Context();

    const loadApp = useCallback(
        loadProvider => {
            dispatch(loadAppDetails({ networkID: chainID, provider: loadProvider }));
        },
        [connected],
    );

    useEffect(() => {
        loadApp(provider);
    }, []);

    return <Landing />;
}

export default App;
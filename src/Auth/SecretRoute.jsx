import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import usePublicApi from "../Hooks/usePublicApi";
import { app } from './firebase';

const PrivateRoute = ( { children } ) => {
    const axiosPublic = usePublicApi();
    const [ loading, setLoading ] = useState( true );
    const [ user, setUser ] = useState( null );
    const auth = getAuth( app );


    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            // @ts-ignore
            setUser( currentUser );
            if ( currentUser ) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post( '/jwt', userInfo )
                    .then( res => {
                        if ( res.data.token ) {
                            localStorage.setItem( 'access-token', res.data.token );
                            setLoading( false );
                        }
                    } )
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem( 'access-token' );
                setLoading( false );
            }

        } );
        return () => {
            return unsubscribe();
        }
    }, [ axiosPublic ] )

    const location = useLocation();

    if ( loading ) {
        return <>
            <div className="flex items-center justify-center h-screen">
                <div className="spinner-border text-primary" role="status">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        </>
    }

    if ( user ) {
        return children;
    }
    return <Navigate to="/login" state={ { from: location } } replace></Navigate>
};

export default PrivateRoute;
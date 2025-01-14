import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from './firebase';
import usePublicApi from "../Hooks/usePublicApi";

export const AuthContext = createContext( null );

const auth = getAuth( app );

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = usePublicApi();

    const signIn = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword( auth, email, password );
    }

    const logOut = () => {
        setLoading( true );
        return signOut( auth );
    }

    const updateUserProfile = ( name, photo ) => {
        // @ts-ignore
        return updateProfile( auth.currentUser, {
            displayName: name, photoURL: photo
        } );
    }

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

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider
            // @ts-ignore
            value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;
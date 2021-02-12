import React from 'react'
import { useAuthenticate } from '../../Hooks/useAuthenticate'
import { Navbar } from '../navbar/Navbar'
import { StatusBar } from '../statusBar/StatusBar';

export const Main = ({children}) => {
    const user = useAuthenticate();
    if(user){
        return (
            <div className="container-fluid vh-100 vw-100">
            <StatusBar />
            <div className={`row d-flex flex-column overflow-hidden`}>
                <Navbar />
                <div className="container-fluid">{children}</div>
            </div>
            </div>
        )
        
    }
    else return null;
}

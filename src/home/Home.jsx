import Nav from "../nav/Nav.jsx";
import { Outlet } from "react-router-dom";
import React from 'react'


export default function Home() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}



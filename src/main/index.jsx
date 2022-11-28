import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import { Content } from "../components/content"
import { Header } from "../components/header"


// import { AppBarComp } from "../components/navbar"




export const Main = () =>{
    return (
        <>
        <Header/>
        {/* {links.map((link)=>(
            <Button component={Link} to={link.to} key= {link.name}>
                {link.name}
            </Button>
        ))} */}
        <br/>
        {/* <Content/> */}
        <Outlet/>

        </>
    )
}
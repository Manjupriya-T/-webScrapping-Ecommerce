import React from 'react'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { API } from '../global/global';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"

function Searchbar(props) {
    const navigate = useNavigate()
    const [search,setSearch]=useState() 
    const [searchValue, setSearchValue]=useState([])
    props.data(searchValue)
    console.log(searchValue)
    const handleSearch = (search)=>{
        fetch(`${API}/product/${search}`)
        .then((data) =>data.json() )
        .then((value) =>setSearchValue(value))
        navigate("ShowSingleProduct")
    }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to ="/">
          <HomeIcon/>
          </Link>
          <input className = "search"
          type="text" value={search} placeholder="Search" onChange={(event)=>setSearch(event.target.value)}/>
          <button className="button"
          onClick={()=>handleSearch(search)}>Search</button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Searchbar

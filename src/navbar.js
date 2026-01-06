import SearchBar from "./SearcBar"
import { useState } from "react";

export default function NavBar(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: '30px 0',
        }}>
            <Folders/>
            <Search/>
            <Filter/>
        </div>
    )
}

function Search(){
    const [showSearchBar, setshowSearchBar] = useState(false)

    function arrowForSearchBar(){
        setshowSearchBar(false)
    }
    
    return(
        <div>
            <span onClick={() =>{
                setshowSearchBar(true)
            }}>
                <ion-icon name="search-outline"></ion-icon>
            </span>
            <SearchBar searchBarDisplay={showSearchBar} arrowSearchBar={arrowForSearchBar}/>
        </div>
    )
}
function Folders(){
    return(
        <div>
            <ion-icon name="albums-outline"></ion-icon>
        </div>
    )
}
function Filter(){
    return(
        <div>
            <ion-icon name="options-outline"></ion-icon>
        </div>
    )
}
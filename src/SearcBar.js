import { useState, useEffect } from "react";

export default function SearchBar({searchBarDisplay, arrowSearchBar}){
    // styling
    const searchBarStyel = {
        backgroundColor: 'tomato',
        width: '470px',
        height: '30px',
        borderRadius: '5px',
        position: 'relative',
        top: '-28px',
        display: searchBarDisplay ? 'block' : 'none'
    }
    const arrowBackStyle = {
        position: 'absolute', 
        left: '5px', 
        top: '5px',
    }

    const [affect, setAffect] = useState(false)
    const searchingStyle = {
        backgroundColor: 'black',
        height: '20px',
        width: '1px',
        display: affect ? 'inline-block' : 'none',
        position: 'absolute',
        top: '5px',
        left: '0',
    }    

    useEffect(() =>{
        const theAffect = setInterval(() =>{
            setAffect(val => !val)
        } , 1000)

        return clearInterval(theAffect)
    },[])

    return(
        <>
            <div style={searchBarStyel}>
                <span className="arrowBack" style={arrowBackStyle} onClick={() =>{
                    arrowSearchBar()
                }}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </span>

                <span style={{
                    display: 'inline-block', 
                    width: 'calc(100% - 37px)', 
                    height: '100%', 
                    position: 'absolute', 
                    left: '37px'}}>

                    <span className="searching" style={searchingStyle}></span>
                </span>
            </div> 
        </>
    )
}
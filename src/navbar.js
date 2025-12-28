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
    return(
        <div>
            <span onClick={(e) =>{
                
            }}><ion-icon name="search-outline"></ion-icon></span>

            <div className="searchBar" style={{
                backgroundColor: 'red',
                width: '170px',
                height: '30px',
                borderRadius: '5px',
            }}></div>

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
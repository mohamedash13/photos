import { useState } from "react";
import Unsplash, {toJson} from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "ManddZ4aYnxAyPOQC5P3dT1CxzehvrFOrWrwVj9scDI"
})

const Search = () => {
    const [query,setQuery] = useState("")
    const [pics,setPics] = useState([])
    const changeValue = (e) =>{ 
        setQuery(e.target.value)
    }

    const searchP = async(e) =>{
        e.preventDefault()

        unsplash.search.photos(query).then((toJson)).then((json) =>{
            setPics(json.results)
        })
    }
    return ( 
        <div className="all">
            <h1>Place Of Photos</h1>
        <form className="form" onSubmit={searchP}>
            <input type="text" value={query} onChange={changeValue} placeholder="Search Photos" />
            <input type="submit" value={"Search"} />
        </form>
        <div className="container">
            {pics.map((pic) => <div className="photo" key={pic.id}>
                    <img width={"50%"} height={"50%"} className="img" src={pic.urls.full} alt={pic.alt_description} />
                </div>
            )}
        </div>
        </div>
     );
}
 
export default Search;
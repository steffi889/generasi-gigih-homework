import data from "../../data/dummy";
function Album() {
    return (
       <div class="container">
           <img src={data.album.images[1].url}/>
           <p>Track Title: {data.album.name}</p>
           <p>Artist: {data.album.artists[0].name}</p>
           <p>Album: {data.album.album_type}</p>
           <button onPress="">Select</button>
       </div>
    )
}
export default Album;
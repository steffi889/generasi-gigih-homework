function Data(props) {
    return (
        <div className="container">
            <img src={props.data.album.images[1].url}/>
            <p>Track Title: {props.data.album.name}</p>
            <p>Artist: {props.data.album.artists[0].name}</p>
            <p>Album: {props.data.album.album_type}</p>
            <button onPress="">Select</button>
        </div>
    )
}

export default Data;
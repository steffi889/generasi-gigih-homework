import data from "../data/data";

function TrackList(props) {
    return (
        <div className="container">
            <img src={props.songs.album.images[0].url}/>
            <p>Track Title: {props.songs.album.name}</p>
            <p>Artist: {props.songs.album.artists[0].name}</p>
            <p>Album: {props.songs.album.album_type}</p>
        </div>
    )
}

function LoopTrack() {
    return (
        <div className="trackloop">
            {
                data.map(songs => {
                    if (data !== 0) {
                        return <TrackList songs={songs} key={songs.album.artists[0].id} />
                    }
                })
            }
        </div>
    )
}

export default LoopTrack;
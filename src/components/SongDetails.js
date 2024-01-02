import { useSelector } from "react-redux";

const SongDetails = () => {
    let selected = useSelector(st => st.selectedSong);
    return (<div>
        <h3>{selected.name}</h3>
        <h4>{selected.duration}</h4>
        <h4>{selected.album}</h4>

    </div>);
}

export default SongDetails;
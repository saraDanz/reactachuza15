import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedSong } from "../store/actions/song";

const Edit = () => {
    let selectedSongForEdit = useSelector(st => st.selectedSongForEdit);

    let disp = useDispatch();

    let { register, handleSubmit } = useForm({
        defaultValues: selectedSongForEdit
    });
    const save = (data) => {
        alert(JSON.stringify(data))
        disp(saveEditedSong(data))

    }

    return (<form onSubmit={handleSubmit(save)}>

        <label>שם</label>
        <input {...register("name")} />
        <label>משך</label>
        <input {...register("duration")} />
        <label>אלבום</label>
        <input {...register("album")} />


        <input type="submit" />

    </form>);
}

export default Edit;
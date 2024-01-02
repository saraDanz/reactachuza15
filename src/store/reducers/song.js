const myInitialState = {
    arr: [
        { id: 1, name: "אני מאמין", album: "אמונה", duration: 2.3, src: "", albumSrc: "" },
        { id: 2, name: "אם תעירו", album: "אמונה", duration: 5.3, src: "", albumSrc: "" },
        { id: 3, name: "משיח משיח", album: "אמונה", duration: 2.3, src: "", albumSrc: "" },
    ],
    selectedSong: null,
    selectedSongForEdit: null
}
//הפונקציה הזו מופעלת בכל פעם שמתרחשת פעולה כלשהי באתר 
//שאמורה לשנות את הסטייט הכללי
//הפונקציה הזו מקבלת אוטומטית את הסטייט שהיה עד עכשיו ואת הפעולה שקרתה
//מחזירה סטייט חדש על פי הפעולה שקרתה
//בעצם הפונקציה הזו קובעת מה יהיה הסטייט באתר מהרגע הזה והלאה
//עד לפעם הבאה שתתרחש פעולה באתר שתקרא שוב לפונקציה זו
//בפעם הראשונה שהפונקציה הזו מופעלת זה בעצם פעם אחת מיוחדת בעת בניית האתר
//אז הפונקציה לא מקבלת את הסטייט הקודם שהיה עד עכשיו
//ולכן ניתן לה ערך ברירת מחדל התחלתי

export const songReducer = (state = myInitialState, action) => {

    switch (action.type) {

        case "ADD_SONG":
            // return {
            //     selectedSong: state.selectedSong,
            //     selectedSongForEdit: state.selectedSongForEdit,
            //     arr: [...state.arr, action.payload]
            // }
            return {
                ...state,//קיצור של האובייקט הקודם
                arr: [...state.arr, action.payload]
            }
        case "SELECT_SONG":
            return {
                selectedSong: action.song,
                selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr
            }
        case "SELECT_SONG_FOR_EDIT":
            return {
                arr: state.arr,
                selectedSong: state.selectedSong,
                selectedSongForEdit: action.payload
            }
        case "DELETE_SONG":
            return {
                // selectedSong: !state.selectedSong||state.selectedSong.id == action.payload ? null : state.selectedSong,
                selectedSong: state.selectedSong?.id != action.payload ? state.selectedSong : null,
                selectedSong: state.selectedSongForEdit?.id != action.payload ? state.selectedSongForEdit : null,
                // selectedSongForEdit: state.selectedSongForEdit,
                arr: state.arr.filter(item => item.id != action.payload)
            }
        case "SAVE_EDITED_SONG":

            // let index = state.arr.findIndex(item => item.id === action.payload.id);
            // let copy = [...state.arr];
            // copy.splice(index, 1, action.payload);

            let copy = state.arr.map(item => {
                if (item.id !== action.payload.id)
                    return item;
                return action.payload;
            })

            return {
                selectedSong: state.selectedSong,
                selectedSongForEdit: null,
                arr: copy
            }

        default: return state;
    }


}
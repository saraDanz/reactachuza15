//כאן נגידר פונקציות רגילות של גאוה סקריפט
//שמחזירות אובייקט רגיל של גאוה סקריפט
//בד"כ האויביקטים מכילים שדה אחד בשם type
//שהערך שלו יהיה באותיות גדולות
//ניתן לתת שדות נוספים המכילים מידע על הפעולה שמתרחשת
//אוהבים לקרוא לשדה הנוסף בשם payload

//action creartors פונקציות אלה נקראות 
//נגידר פונקציה כזו עבור כל פעולה שיכולה להתרחש באתר
// והיא אמורה להשפיע על הסטייט הכללי
export const selectSong = (song) => {
    return {
        type: "SELECT_SONG",
        song: song
    }
}

export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}

export const deleteSong = (songId) => {
    return {
        type: "DELETE_SONG",
        payload: songId
    }
}

export const selectSongForEdit = (song) => {
    return {
        type: "SELECT_SONG_FOR_EDIT",
        payload: song
    }
}

export const saveEditedSong = (sond) => {
    return {
        type: "SAVE_EDITED_SONG",
        payload: sond
    }
}
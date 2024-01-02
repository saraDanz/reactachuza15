import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const List = () => {
    let arr = useSelector(xstate => xstate.arr);//כך שולפים נתון מהסטייט הכללי
    return (<>רשימת שירים
        <ul>
            {arr.map(item => <li key={item.id}>
                <ListItem one={item} />
            </li>)}
        </ul>
    </>);
}

export default List;
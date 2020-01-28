import solicitudes, {SolicitudesReducer} from "./solicitudes";
import { combineReducers } from "redux";

export interface Store {
    solicitudes: SolicitudesReducer;
}

const rootReducer = combineReducers({
    solicitudes,
});


export default rootReducer;

import Solicitud from "./Solicitud";

export default interface SolicitudesReducer {
    cargadas: Solicitud[],
    editable: boolean,
}
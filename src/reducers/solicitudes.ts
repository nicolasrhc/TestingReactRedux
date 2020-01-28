import {ACTION_SOLICITUDES} from "../actions/solicitudes";

export interface Solicitud {
    id: number;
    productoId: number;
    colaboradorId: number;
    bloqueada: boolean;
}

export interface SolicitudesReducer {
    cargadas: Solicitud[],
    editable: boolean,
}

const initialState: SolicitudesReducer = {
    cargadas: [],
    editable: false,
};

const solicitudes = (state = initialState, action: { type: string, payload: Record<string, any> }): SolicitudesReducer => {
    const { type } = action;
    switch (type) {
        case ACTION_SOLICITUDES: {
            return {
                ...state,
                cargadas: [
                    ...state.cargadas,
                    {
                        id: Math.random(),
                        bloqueada: false,
                        colaboradorId: 1,
                        productoId: 1,
                    }
                ]
            }
        }

        default:
            return state;
    }
};

export default solicitudes;

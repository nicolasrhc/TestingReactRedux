import reducer from './solicitudes'
import * as types from '../actions/solicitudes'
import ComponentController from "../classes/ComponentController";

describe(" Solicitudes Reducer", () => {
    it("Tiene que retornar el estado inicial", () => {
        expect(reducer(undefined, {type: ""})).toEqual([
            {
                cargadas: [],
                editable: false,
            }
        ]);
    })

    it("Tiene que hacer la accion ACTION_SOLICITUDES", () => {
        expect(
            reducer(undefined, {
                type: types.ACTION_SOLICITUDES
            })
        ).toEqual([
            {
                editable: false,
                cargadas: [
                    {
                        id: ComponentController.obtenerNuevoId(),
                        bloqueada: false,
                        colaboradorId: 1,
                        productoId: 1,
                    }
                ]
            }
        ])
    })
});

import reducer from './solicitudes'
import * as types from '../actions/solicitudes'
import ComponentController from "../classes/ComponentController";

describe(" Solicitudes Reducer", () => {
    it("Tiene que retornar el estado inicial", () => {
        expect(reducer(undefined, {type: ""})).toEqual({
            cargadas: [],
            editable: false,
        });
    })

    it("Tiene que hacer la accion ACTION_SOLICITUDES", () => {
        const idMockValue = 2;
        const obtenerNuevoIdSpy = jest.spyOn(ComponentController, "obtenerNuevoId").mockReturnValue(idMockValue)

        expect(
            reducer(undefined, {
                type: types.ACTION_SOLICITUDES
            })
        ).toEqual(
            {
                editable: false,
                cargadas: [
                    {
                        id: idMockValue,
                        bloqueada: false,
                        colaboradorId: 1,
                        productoId: 1,
                    }
                ]
            }
        )

        expect(obtenerNuevoIdSpy).toBeCalledTimes(1);
    })
});

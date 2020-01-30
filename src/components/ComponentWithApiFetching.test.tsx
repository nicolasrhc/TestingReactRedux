import React from "react";
import ComponentWithApiFetching from './ComponentWithApiFetching'
import { shallow, ShallowWrapper } from 'enzyme'
import ComponentController from "../classes/ComponentController";
import Dato from "../interfaces/Dato";

describe("ComponentWithApiFetching Test", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        
    })

    it("Debe renderizarse correctamente", () => {
        wrapper = shallow(<ComponentWithApiFetching/>);
        expect(wrapper).toMatchSnapshot()
    });

    it("Debe modificar el estado inicial", () => {
        const obtenerDatosServidorMockedResponse: Dato[] = [{id: 1, nombre: "A", apellido: "B", fecha: new Date()}];

        const spyObtenerDatosServidor = jest.spyOn(ComponentController.prototype, "obtenerDatosServidor").mockResolvedValue(obtenerDatosServidorMockedResponse);

        wrapper = shallow(<ComponentWithApiFetching/>);
        
        expect(spyObtenerDatosServidor).toBeCalledTimes(1)
    })
});

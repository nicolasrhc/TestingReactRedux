import * as actions from './solicitudes'
import * as types from './solicitudes'

describe(" Solicitudes Action", () => {
    it("SAMPLE", () => {
        const expectedAction = {
            type: types.ACTION_SOLICITUDES
        }
        expect(actions.actionSolicitudes()).toEqual(expectedAction);
    })
});

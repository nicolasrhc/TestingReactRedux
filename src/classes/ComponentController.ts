import Dato from "../interfaces/Dato";

class ComponentController {

    static obtenerNuevoId (): number {
        return Math.random();
    }

    public obtenerDatosServidor (): Promise<Dato[]> {
        return new Promise(resolve => (
            resolve([
                {
                    id: 1,
                    nombre: "A",
                    apellido: "_A",
                    fecha: new Date(),
                },
                {
                    id: 2,
                    nombre: "B",
                    apellido: "_B",
                    fecha: new Date(),
                },
                {
                    id: 3,
                    nombre: "C",
                    apellido: "_C",
                    fecha: new Date(),
                }
            ])
        ))
    }
}

export default ComponentController;

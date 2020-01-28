export interface Dato {
    id: number;
    nombre: string;
    apellido: string;
    fecha: Date;
}

class ComponentController {
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

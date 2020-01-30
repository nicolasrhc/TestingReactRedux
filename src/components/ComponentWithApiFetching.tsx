import React, {Component} from "react";
import ComponentController from "../classes/ComponentController";
import Dato from '../interfaces/Dato'

interface ComponentWithApiFetchingState {
    datos: Dato[];
}

interface ComponentWithApiFetchingProps {

}

class ComponentWithApiFetching extends Component<ComponentWithApiFetchingProps, ComponentWithApiFetchingState> {
    static defaultProps: Partial<ComponentWithApiFetchingProps> = {};

    constructor(props: Readonly<ComponentWithApiFetchingProps>) {
        super(props);

        this.state = { datos: [] };
    }

    async componentDidMount(): Promise<void> {
        const componentController: ComponentController = new ComponentController();

        try {
            const datos = await componentController.obtenerDatosServidor();
            
            this.setState({ datos });
        } catch (e) {
            console.error(e);
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <ul>
                {this.state.datos.map((dato, index) => (
                    <li key={dato.id}>{dato.apellido}, {dato.nombre} / {dato.fecha.toDateString()}</li>
                ))}
                </ul>
            </div>
        );
    }
};

export default ComponentWithApiFetching;

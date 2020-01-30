import React, {Component} from "react";
import {connect} from "react-redux";
import {actionSolicitudes} from "../actions/solicitudes";
import Solicitud from "../interfaces/Solicitud";
import Store from "../interfaces/Store";

interface ReduxComponentState {

};

interface ReduxComponentProps {
    cargadas: Solicitud[];
    editable: boolean;
    actionSolicitudes: () => void;
};

export class ReduxComponent extends Component<ReduxComponentProps, ReduxComponentState> {
    static defaultProps: Partial<ReduxComponentProps> = {};

    constructor(props: Readonly<ReduxComponentProps>) {
        super(props);

        this.state = {};
    }

    componentDidMount(): void {
        this.props.actionSolicitudes();
    }

    render(): JSX.Element {
        return (
            <div></div>
        );
    }
};

const mapStateToProps = (state: Store) => {
    return {
        cargadas: state.solicitudes.cargadas,
        editable: state.solicitudes.editable,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actionSolicitudes: () => dispatch(actionSolicitudes()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);

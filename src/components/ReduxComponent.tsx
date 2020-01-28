import React, {Component} from "react";
import {connect} from "react-redux";
import {Solicitud} from "../reducers/solicitudes";
import {Store} from "../reducers";
import {actionSolicitudes} from "../actions/solicitudes";

interface ReduxComponentState {

};

interface ReduxComponentProps {
    cargadas: Solicitud[];
    editable: boolean;
    actionSolicitudes: () => void;
};

class ReduxComponent extends Component<ReduxComponentProps, ReduxComponentState> {
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

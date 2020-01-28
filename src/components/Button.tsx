import React, {MouseEvent, ButtonHTMLAttributes, FC, useCallback} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Readonly<ButtonProps>> = (props) => {
    const { disabled, onClick } = props;

    const ownOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        if(!disabled) {
            onClick(event);
        }
    }, [disabled, onClick]);

    return (
        <button onClick={ownOnClick} disabled={props.disabled}>{props.children}</button>
    );
};

Button.defaultProps = {
    disabled: false,
};

export default Button;

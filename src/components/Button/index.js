import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'
import PropTypes from 'prop-types';


const cx = classNames.bind(styles)

function Button({
    to,
    primary = false,
    outline = false, href,
    children, small = false,
    large = false,
    text = false,
    solid = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    /// remove event listener when btn is disabled
    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith("on") && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        solid,
        disabled,
        rounded,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.prototype = {
    to: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    childre: PropTypes.node.isRequired,
    large: PropTypes.bool,
    text: PropTypes.bool, 
    solid: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIco: PropTypes.node,
    rightIc: PropTypes.node,
    onClick: PropTypes.func,
}


export default Button;
import classNames from 'classnames/bind';
import  styles from './Popper.module.scss'
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);

function wrapper({ children, className }) {
    return(
        <div className={cx('wrapper', className)}>{children}</div>
    )
}

wrapper.prototype = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
}

export default wrapper
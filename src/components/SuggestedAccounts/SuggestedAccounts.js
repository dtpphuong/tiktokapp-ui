import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types'
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts( {lable }) {
    return(
        <div className={cx('wrapper')}>
            <h4 className={cx('lable')}>{lable}</h4>
            
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    )
};

SuggestedAccounts.prototype = {
    lable: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
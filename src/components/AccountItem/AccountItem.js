import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import Image from '../Images';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function AccountItem({ data }){
    return(
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
             <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
             <div className={cx('info')}> 
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                 <span className={cx('username')}>{data.email}</span>
             </div>
        </Link>
    )
}

AccountItem.prototype = {
    data:PropTypes.object.isRequired,
};

export default AccountItem;
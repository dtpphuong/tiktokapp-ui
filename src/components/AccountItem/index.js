import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem(){
    return(
        <div className={cx('wrapper')}>
             <img className={cx('avatar')} src='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fa3be0a2f60c85f14223f38a68bc3465.jpeg?x-expires=1678525200&x-signature=kHIMtHrvFjQJhNkHXB6%2B2O%2Fmokc%3D' alt='Hoaa' />
             <div className={cx('info')}> 
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                 <span className={cx('username')}>@nguyenvana</span>
             </div>
        </div>
    )
}

export default AccountItem;
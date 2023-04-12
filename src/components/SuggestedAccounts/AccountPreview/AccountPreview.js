import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';
import Image from "~/components/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
    return(
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src="https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-avatar-nam.jpg" alt="" />
                <div>
                    <Button className={cx('follow-btn')} primary>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    <span>Nguyễn Văn A</span>
                    {<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                 <p className={cx('name')}>Phuong</p>
                 <p className={cx('analytics')}>
                     <strong className={cx('value')}>8.2M </strong>
                     <span className={cx('lable')}>Folowers</span>
                     <strong className={cx('value')}>12.2M </strong>
                     <span className={cx('lable')}>Likes</span>
                 </p>
            </div>
        </div>
    )    
}

export default AccountPreview;
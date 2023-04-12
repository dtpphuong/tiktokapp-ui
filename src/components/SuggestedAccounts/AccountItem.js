import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from '../Images';
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return(
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return(
        <div>
            <Tippy
            interactive
            delay={[800, 0]}
            offset={[-25, 0]}
            placement="bottom"
            render={renderPreview}
        >
            <div className={cx('account-item')}>
            <Image className={cx('avatar')} src="https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-avatar-nam.jpg" alt="" />
             <div className={cx('item-info')}> 
                <h4 className={cx('nickname')}>
                    <span>Nguyễn Văn A</span>
                    {<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                 <p className={cx('name')}>Phuong</p>
             </div>
        </div>
        </Tippy>
        </div>
    )
};

AccountItem.prototype = {

}

export default AccountItem;

import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudArrowUp, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Image from '~/components/Images'

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feelback and Help',
        to: '/feelback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])
    //HanleLogic
    const handleMenuChange = (menuitem) => {};
    
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'logout',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
                    interactive
                    // 
                    disabled
                    // 
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}>
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <Tippy delay={[0, 200]} content="Upload video">
                            <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                            </button>
                        </Tippy>
                    ) : (
                        <>
                            <Button text >Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange} >
                        {currentUser ? (
                            <Image className={cx('user-avatar')} 
                                src='https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg' 
                                alt="Nguyen Van A" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
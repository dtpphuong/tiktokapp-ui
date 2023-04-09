import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudArrowUp, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Image from '~/components/Images'
import { CloudArrowUp, InboxIcon, Plus } from '~/components/icons'
import Search from '../Search'
import { Link } from 'react-router-dom'
import routes from '~/config/routes';


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
    const currentUser = true;
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
                <Link to={routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('actions-listItem')}>
                            <button className={cx('action-btn')}>
                                <Button solid  className={cx('action-btn-upload')}>
                                <Plus />
                                <span>Tải lên</span>
                                </Button>
                            </button>
                        <Tippy delay={[0, 100]} content="Tin nhắn">
                            <button className={cx('action-btn')}>
                            <CloudArrowUp />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 100]} content="Hộp thư">
                            <div className={cx('action-inbox')}>
                            <button className={cx('action-btn')}>
                            <InboxIcon />
                            </button>
                            <span className={cx('Notification')}>12</span>
                            </div>
                        </Tippy>
                        </div>
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
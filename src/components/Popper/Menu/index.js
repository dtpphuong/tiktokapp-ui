import { Wrapper as PopperWrapper } from '~/components/Popper'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import Header from './Header'
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () =>{

}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn}) {

    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((i, index) => {
            const isParent = !!i.children
            return <MenuItem key={index} data={i} onClick={() =>{
                if(isParent) {
                    setHistory((prev) => [...prev, i.children])
                } else {
                    onChange(i)
                }
            }} />
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12,8]}
            hideOnClick={hideOnClick}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <Header title="Language" onBack={() => {
                        setHistory(prev => prev.slice(0, prev.length - 1))
                    }} />}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0,1))}
            >
            {children}
        </Tippy>
    );
}

export default Menu;
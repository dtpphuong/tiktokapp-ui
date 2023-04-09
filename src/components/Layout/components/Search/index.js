import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind'

import styles from './Search.module.scss'
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless'
import AccountItem from '~/components/AccountItem'
import { useDebounce } from '~/Hooks'
import axios from 'axios'
import * as request  from '~/utils/request'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef()

    useEffect(() => {
        if (!debounce.trim()){
            // setSearchResult('');
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            try {
                // fetch('https://623ede5fdf20a75d53cc47e4.mockapi.io/products')
                const res = await request.get(`users/search`, {
                    params: {
                        q: debounce,
                        type: 'less'
                    }
                });
                setSearchResult(res.data);
                setLoading(false)
            } catch (e) {
                setLoading(false)
            }
        };
        fetchApi();
    }, [debounce])

    const hanleHidenResult = () => {
        setShowResult(false)
    }
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }
    }

    return(
        <div>
            <HeadlessTippy
                    interactive
                    appendTo={() => document.body}
                    visible={showResult && searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                {searchResult.map((result)=>(
                                <AccountItem key={result.id} data={result}/>
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside = {hanleHidenResult}
                    >
                    <div className={cx('search')}>
                        <input
                        ref={inputRef}
                        value={searchValue} placeholder="Search account and videos" spellCheck={false} 
                        onChange={handleChange}
                        onFocus = {() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && 
                            <button className={cx('clear')} onClick={() => {
                                setSearchValue('');
                                setSearchResult([]);
                                inputRef.current.focus(); 
                            }}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        }
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                        <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
        </div>
    )
}
export default Search;
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from './UI/Flex'
//Style//
const SearchPaenlSection = styled.div`
    flex: 0.8;
    background-color: rgb(30, 47, 66);
    display: flex;
    justify-content: space-around;
    margin: 21px 0;
    padding: 7px;
    border-radius: 5px;
    position: relative;

    input {
        flex: 1;
        background-color: inherit;
        outline: none;
        border: none;
        text-align: center;
        color: inherit;
    }
    .fa-search {
        position: absolute;
        top: 7px;
        bottom: 7px;
        left: 7px;
    }
    .fa-times-circle {
        position: absolute;
        top: 7px;
        bottom: 7px;
        right: 7px;
    }

    &.active {
        flex: 1;
        input {
            flex: 0.9;
            text-align: start;
        }
    }
`
const AditIcon = styled.i`
    flex: 0.2;
    color: rgb(2, 147, 234);
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`
//Style//

export const SearchPanel = () => {
    const [active, setActiveSerchPanel] = useState(false)
    const inputEl = useRef(null)
    const onClickHandler = (e) => {
        if (e.target.className === 'fas fa-times-circle') {
            setActiveSerchPanel(false)
            inputEl.current.blur()
            return
        }
        setActiveSerchPanel('active')
        inputEl.current.focus()
    }

    return (
        <Flex alignItems="center" justify="space-around">
            <SearchPaenlSection onClick={onClickHandler} className={active}>
                <i className="fas fa-search"></i>
                <input ref={inputEl} type="text" placeholder="Search" />
                {!active ? null : <i className="fas fa-times-circle"></i>}
            </SearchPaenlSection>
            {active ? null : (
                <Link to="/select">
                    <AditIcon className="fas fa-edit" />
                </Link>
            )}
        </Flex>
    )
}

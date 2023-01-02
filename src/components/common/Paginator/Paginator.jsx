import React, {useState} from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 50}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        {<button disabled={portionNumber <= 1} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}> Prev </button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <React.Fragment key={p}>
                    <span className={`${s.cupo} ${currentPage === p ? s.selectedPage : ''}`}
                          onClick={
                              () => {
                                  onPageChanged(p)
                              }
                          }
                    >{p}</span>
                    <span> </span>
                </React.Fragment>
            })}
        {<button disabled={portionCount <= portionNumber} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}> Next </button>}
    </div>
}

export default Paginator
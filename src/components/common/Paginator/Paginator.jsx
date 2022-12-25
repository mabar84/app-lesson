import React from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(p => {
                return <React.Fragment key={p}>
                    <span className={`${s.cupo} ${props.currentPage === p ? s.selectedPage : ''}`}
                          onClick={
                              () => {
                                  props.onPageChanged(p)
                              }
                          }
                    >{p}</span>
                    <span> </span>
                </React.Fragment>
            })}
    </div>
}

export default Paginator
import s from "../../Users/Users.module.css";
import React, {FC, useState} from "react";

type PaginatorPropsType = {
    totalItemCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number)=> void
    portionSize?: number
}


export const Paginator: FC<PaginatorPropsType> = ({totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemCount / pageSize);

    let pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize

    const prevButtonHandler = () => {
        setPortionNumber(portionNumber - 1);
    };

    const nextButtonHandler = () => {
        setPortionNumber(portionNumber + 1);
    };

    return (
        <div>
            {portionNumber > 1 && <button onClick={prevButtonHandler}>Prev</button>}
            {pages
                .filter(el => el >= leftPortionNumber && el <= rightPortionNumber)
                .map((p, i) => {
                return <span key={"page" + i} className={currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
            {portionNumber < portionCount && <button onClick={nextButtonHandler}>Next</button>}
        </div>
    )
}
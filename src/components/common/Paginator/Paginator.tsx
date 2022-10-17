import s from "../../Users/Users.module.css";
import React from "react";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number)=> void
}


export const Paginator = (props: PaginatorPropsType) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p, i) => {
                return <span key={"page" + i} className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
}
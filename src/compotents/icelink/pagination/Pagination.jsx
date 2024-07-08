import React from 'react';
import {getPagesArray} from "../../../Utils/pages";

const Pagination = ({totalPages,page,changePage}) => {
    const pageArray=getPagesArray(totalPages)
    return (
        <div className="page__wrapper">

            {pageArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                    
                     >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;
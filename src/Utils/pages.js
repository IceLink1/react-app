export const getPageCount=(totalCount,limit)=>{
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalCount)=>{
    let result = [];
    for (let i=0; i<=totalCount; i++){
        result.push(i+1);
    }
    return result;
}
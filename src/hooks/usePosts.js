import {useMemo} from "react";

export const useSortedPosts = (posts,sort) => {
    const sortedPosts= useMemo(()=>{
        if(sort){
            console.log("function getSortedPosts is worked")
            return [...posts].sort((a,b)=> a[sort].localeCompare(b[sort]))
        }
        return posts;
    },[sort,posts])

    return sortedPosts;
}

export const usePosts = (posts,sort,query) => {
    const sortedPosts=useSortedPosts(posts,sort);

    const setedAdnSerchedPosts= useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    },[query,sortedPosts])

    return setedAdnSerchedPosts;
}
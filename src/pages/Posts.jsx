import React, {useState,useEffect} from 'react'
import '../styles/App.css'
import Postlist from "../compotents/post-list";
import MyButton from "../compotents/icelink/button/myButton";
import PostForm from "../compotents/postForm";
import PostFilter from "../compotents/PostFilter";
import MyModal from "../compotents/icelink/MyModal/MyModal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../compotents/icelink/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../Utils/pages";
import Pagination from "../compotents/icelink/pagination/Pagination";




function Posts() {
    const [posts, setPosts] = useState([
        // {id:1,title:'lalala',body:'123'},
        // {id:2,title:'lololo',body:'321'},
        // {id:3,title:'ulala',body:'231'},
    ])



    const [filter,setFilter]= useState({sort:'',query:''})
    const [totalPages, setTotalPages] = useState(0);
    const [limit,setLimit] = useState(10)
    const [page,setPage] = useState(1)
    const [modal,setModal]=useState(false)

    const setedAdnSerchedPosts =usePosts(posts,filter.sort,filter.query)
    const [fetchPosts,isPostsLoading,postError]=useFetching(async ()=>{
        const response= await PostService.getAll(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount,limit))
    })

    console.log(totalPages)
    useEffect(()=>{
        fetchPosts()
    },[page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }




    const removePost= (post)=>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage =(page)=>{
        setPage(page)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>
                Create New Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{margin:'15px 0px' }}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Error with conecting ${postError}</h1>
            }

            {isPostsLoading
                ? <div style={{display:"flex",justifyContent:"center"}}><Loader/></div>
                : <Postlist remove={removePost} posts={setedAdnSerchedPosts} title={"list one"}/>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    )
}

export default Posts;
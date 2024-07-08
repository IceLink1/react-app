import React, {useState} from 'react';
import MyInput from "./icelink/input/myInput";
import MyButton from "./icelink/button/myButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:'',})


    const addNewPost= (e)=>{
        e.preventDefault()
        const newPost ={
            ...post,id:Date.now()
        }
        create(newPost)
        setPost({ title:'',body:'',})
    }

    return (
            <form>
                <MyInput
                    placeholder="title"
                    value={post.title}
                    type="text"
                    onChange={e => setPost({...post, title: e.target.value})}

                />
                <MyInput
                    value={post.body}
                    type="text"
                    placeholder={"post"}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
    );
};

export default PostForm;
import React from 'react';
import MyButton from "./icelink/button/myButton";
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate()
    return (
            <div className="post">
                <div className="post__cont">
                    <strong>{props.post.id}.{props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
                    <MyButton onClick={()=>router(`/posts/${props.post.id}`)}>Open</MyButton>
                </div>
            </div>
    );
};

export default PostItem;
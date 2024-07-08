import React from 'react';
import PostItem from "./postItem";
import {TransitionGroup} from 'react-transition-group';
import CSSTransition from 'react-transition-group/CSSTransition';

const PostList = ({posts,title,remove}) => {
    if (!posts.length) {
        return (
            <h1 
            className='minH'
            style={{textAlign: "center",padding:'50px 0px'}}>No Posts!</h1>
        )
    }
    return (
        <div className='minH' >
            <h1 style={{textAlign:"center"}}>{title}</h1>

            <TransitionGroup>

            {posts.map((post,index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                <PostItem remove={remove} number={index+1} post={post}/>
                </CSSTransition>
            )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;
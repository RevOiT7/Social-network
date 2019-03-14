import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://oper.ru/static/data/gallery/l1048753984.jpg"/>
                {props.massage}
            </div>
            <div>
                <span>{`Like ${props.like}`}</span>
            </div>
        </div>
    )
}

export default Post;

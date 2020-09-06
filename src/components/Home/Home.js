import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts/";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 20)));
    }, []);

    return (
        <Grid item xs={12}>
        <Grid container justify="center">
            {posts.map((post) => (
                <div key={post.id}>
                    <Post post={post}></Post>
                </div>
            ))}</Grid>
        </Grid>
    );
};

export default Home;
import React, {useState, useEffect} from "react";
import {
	Card, 
	CardMedia, 
	CardContent, 
	Typography, 
	makeStyles, 
	Container
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import CommentList from "../CommentList/CommentList";

const PostDetails = () => {
	const {postId} = useParams();

	const [details, setDetails] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, []);

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);

	const useStyles = makeStyles({
		media: {
			height: 340,
		},
	});
	const classes = useStyles();

	return (
		<div>
		<Container maxWidth="sm">
			<Card>
				<CardMedia
					className={classes.media}
					image={`https://picsum.photos/id/${33 + details.id}/1280/720`}
					title="alt text"
				/>
				<CardContent>
					<Typography variant="h4" component="h3" gutterBottom>
						{details.title}
					</Typography>
					<Typography variant="body2" component="p" color="textSecondary">
						{details.body}
					</Typography>
				</CardContent>
			</Card>
			<CommentList comments = {comments}></CommentList>
		</Container>
	</div>
	);
};

export default PostDetails;

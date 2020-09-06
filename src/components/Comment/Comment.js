import React from "react";
import {
	ListItem, 
	Avatar, 
	ListItemAvatar,
	ListItemText, 
	Typography, 
	Divider
} from "@material-ui/core";

const Comment = (props) => {
	const {comment} = props;
	return (
		<div>
			<ListItem alignItems="flex-start" key={comment.id}>
				<ListItemAvatar>
					<Avatar src={`https://randomuser.me/api/portraits/women/${comment.id}.jpg`} />
				</ListItemAvatar>
				<ListItemText
					primary={comment.name}
					secondary={
						<React.Fragment>
							<Typography component="span" variant="body2" color="textPrimary">
								{comment.email} <br/><br/>
							</Typography>
							{` — ${comment.body}`}
						</React.Fragment>
					}
				></ListItemText>
			</ListItem>
			<Divider variant="inset" />
		</div>
	);
};

export default Comment;

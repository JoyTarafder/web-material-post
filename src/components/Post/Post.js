import React from "react";
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
	Container,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {Link} from "react-router-dom";
import './Post.css'

const Post = (props) => {
	const {id, title, body} = props.post;

	const useStyles = makeStyles({
		media: {
			height: 120,
		},
		linkStyle: {
			textDecoration: "none",
		},
	});
	const classes = useStyles();

	return (
		<Container fixed className="post-container">
            <Card className={classes.root}>
                <CardActionArea>
                    <Link to={`/post/${id}`}>
                    <CardMedia
                        component="img"
                        alt="Image"
                        height="140"
                        image={`https://picsum.photos/id/${33 + id}/1280/720
                        `}
                        title="Contemplative Reptile"
                    />
                    </Link>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                    />
                    <Link to={`/post/${id}`} className={classes.linkStyle}>
                        <Button size="small" color="primary">
                            See Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
	);
};

export default Post;

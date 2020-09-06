import React from "react";
import { Container} from "@material-ui/core";

const NotFound = () => {
	return (
			<Container maxWidth="lg">
				<div style={{textAlign: "center"}} py="2.5rem">
					<h1 style={{padding: "20px 0"}}>404! Not Found</h1>
				</div>
			</Container>
	);
};

export default NotFound;

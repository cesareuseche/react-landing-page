import React from "react";

//JUMBOTRON COMPONENT
const Jumbotron = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="jumbotron">
							<h1 className="display-4">{"Hello World!"}</h1>
							<p className="lead">
								{
									"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
								}
							</p>
							<hr className="my-4" />
							<p>
								{
									"This is a modified jumbotron that occupies the entire horizontal space of its parent."
								}
							</p>
							<a
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								{"Learn more"}
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Jumbotron;

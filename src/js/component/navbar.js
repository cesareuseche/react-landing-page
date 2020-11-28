import React from "react";

//NAVBAR COMPONENT
const NavBar = () => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
				<a classNameName="navbar-brand padding" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavDropdown">
					<ul className="navbar-nav ml-auto mr-5">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item ml-auto pr">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Dropdown link
							</a>
							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavBar;

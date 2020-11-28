import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

//create your first component

export function Home() {
	return (
		<React.Fragment>
			<NavBar />
			<Jumbotron />
			<Cards />
			<Footer />
		</React.Fragment>
	);
}

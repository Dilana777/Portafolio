import React from "react";
import rigoImage from "../../img/hearts.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>María Dilana Avendaño Chavarría</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<Link to="/disenografico">
			<button href="#">Mira mis diseños</button>
		</Link>
		<Link to="/disenografico">
			<button href="#">Mira mis prácticas programadas</button>
		</Link>
	</div>
);

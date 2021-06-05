import React from "react";
import rigoImage from "../../img/hearts.png";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>María Dilana Avendaño Chavarría</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<button href="#">Mira mis diseños</button>
	</div>
);

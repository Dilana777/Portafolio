import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import foto from "../../img/foto.png";
import "../../styles/demo.scss";

export const Acercademi = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<p>
				<img src={foto} />
			</p>
		</div>
	);
};

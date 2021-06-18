import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import foto from "../../img/foto.png";
import "../../styles/demo.scss";

export const Acercademi = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col" />
				<div className="col">
					<img src={foto} />
				</div>
				<div className="col" />
				<p>
					Hola, mi nombre es Dilana, te doy la bienvenida a mi portafolio. Para que me conozcas te cuento que
					me llama la atención el diseño y el desarrollo front -end de las paginas web. He llevado cursos de
					ambos y espero en algún momento seguir aprendiendo más de ellos. También estoy en la carrera de
					Ingeniería en Sistemas la cual se encuentra en pausa y algún día planeo retomar. En estos momentos
					de mi vida estoy enfocada en mejorar mi inglés, practicar programación, y buscar trabajo. Te
					agradezco el que hayas visitado mi portafolio y espero que haya sido de tu agrado. Se despide con
					cariño Dilana.
				</p>
			</div>
		</div>
	);
};

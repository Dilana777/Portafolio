import React from "react";
import uno from "../../img/1.png";
import dos from "../../img/2.png";
import tres from "../../img/3.png";
import cuatro from "../../img/4.png";
import cinco from "../../img/5.png";
import seis from "../../img/6.png";
import siete from "../../img/7.png";
import ocho from "../../img/8.gif";
import nueve from "../../img/9.png";
import "../../styles/home.scss";

export const Galeria = () => (
	<div className="text-center mt-5">
		<div className="container">
			<div className="row">
				<div className="col">
					<img className="tamano" src={uno} />
				</div>
				<div className="col">
					<img className="tamano" src={dos} />
				</div>
				<div className="col">
					<img className="tamano" src={tres} />
				</div>
			</div>

			<div className="row">
				<div className="col">
					<img className="tamano" src={cuatro} />
				</div>
				<div className="col">
					<img className="tamano" src={cinco} />
				</div>
				<div className="col">
					<img className="tamano" src={seis} />
				</div>
			</div>

			<div className="row">
				<div className="col">
					<img className="tamano" src={siete} />
				</div>
				<div className="col">
					<img className="tamano" src={ocho} />
				</div>
				<div className="col">
					<img className="tamano" src={nueve} />
				</div>
			</div>
		</div>
	</div>
);

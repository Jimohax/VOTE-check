import React from "react";
import "./Home.css";
import { PollingUnits } from "../Data/PollingUnits.js";

const State = () => {
	return (
		// left side
		<div className="State" >
			<div className="A-left">
				<div className="webName">
					<h1>INEC</h1>
					<h6>VOTE CHECK</h6>
				</div>
			</div>
			<div className="stateForm infoForm ">
				<h3>DELTA STATE</h3>
                <button className="button infoButton">WARD 2</button>
				
					{PollingUnits.map((PollingUnit) => {
						return (
							<div>
								<button
									className="button infoButton"
									type="submit"
								>
									{PollingUnit}
								</button>
							</div>
						);
					})}
				
			</div>
		</div>
	);
};

export default State;

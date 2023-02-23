import React from "react";
import "./Home.css";
import { Data } from "../Data/Data";


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
				{/* <h3>Ugheli LGA</h3> */}
                
				<div>
					<select name="" id="" placeholder="Choose LGA">
					{Data.map((data)=>{
						return (
							
							<option value="">{data.lga}</option>
							
							
							
						)
					})}
					<span>{Data.pollingUnit}</span>
					</select>
					
					
				</div>
				<button className="button infoButton">WARD</button>
				
				
					
				
			</div>
		</div>
	);
};

export default State;

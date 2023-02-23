import React from "react";
import "../Home/Home.css";


const NewPollUnit = () => {
	


	return (
		// left side
		<div className="State">
			<div className="A-left">
				
				<div className="webName">
					<h1>INEC</h1>
					<h6>RESULT INPUT</h6>
				</div>
			</div>

			{/* right side */}
			<div className="A-right">
				<form
					action=""
					className="infoForm stateForm"
					
				>
					<h3>DELTA STATE</h3>

						<div>
							<input
								type="text"
								placeholder="Party"
								className="infoInput"
								name="firstname"
								
							/>
							<input
								type="text"
								placeholder="Result"
								className="infoInput"
								name="lastname"
								
							/>
						</div>

					<div>
						<input
							type="text"
							placeholder="Polling Unit ID"
							className="infoInput"
							name="username"
							
						/>
						<input
							type="text"
							placeholder="Ward"
							className="infoInput"
							name="username"
							
						/>
					</div>
					<div>
						<input
							type="text"
							placeholder="LGA"
							className="infoInput"
							name="password"
							
						/>
						<input
								type="text"
								placeholder="State"
								className="infoInput"
								name="Ward"
								
							/>
					</div>
					
					<div>
						
					</div>
					<button className="button infoButton" type="submit" >
						SEND
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewPollUnit;

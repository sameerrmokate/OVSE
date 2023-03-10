import { Link } from "react-router-dom"
function Voting_tokens(){

    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{height : "98vh"}}>
                <div className="col-4 shadow p-5 text-center">
                   <h2>Get voting tokens</h2>
                        <input 
                            type="text" 
                            className="form-controle-sm mb-3" 
                            placeholder="Enter your Public address" 
                            style={{width : "50vh"}}
                        /><br/>
                        <button className="btn btn-primary">Get</button>
                        <p>
						    <Link to="/Nomination">Register for election</Link>
					    </p>
                </div>
            </div>
        </div>
    )


}

export default Voting_tokens;
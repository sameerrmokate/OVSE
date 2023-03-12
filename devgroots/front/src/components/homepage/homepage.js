import React from "react"
import "./homepage.css"


const Homepage = ({setLoginUser}) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: "98vh" }}>
                <div className="col-4 shadow p-5 text-center">
                    <h2>Register for Election</h2><br />
                    <p>If you want to be a Candidate register here</p>
                    <input
                        type="text"
                        className="form-controle-sm mb-3"
                        placeholder="Enter your Public address"
                        style={{ width: "50vh" }}
                    /><br/>
                    <button className="btn btn-primary">Register</button>
                    <div>or</div>
                    {/* <div className="button" onClick={() => history.push("/getTokens")}>Get voting tokens</div> */}
                    {/* <p>
                        <Link to="/Voting_tokens">Get your voting tokens</Link>
                    </p>     */}
                </div>
            </div>
        </div>
    )
}

export default Homepage
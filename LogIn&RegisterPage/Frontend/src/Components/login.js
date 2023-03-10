import { Link } from "react-router-dom"
function Login (){
    return(
        <div className="container-fluid">
                <div className="row justify-content-center align-items-center" style={{height : "98vh"}}>
                    <div className="col-4 shadow p-5 text-center">
                        <input 
                            type="text" 
                            className="form-controle-sm mb-3" 
                            placeholder="User name or E-mail" 
                            style={{width : "50vh"}}
                        /><br/>
                        <input 
                            type="password" 
                            className="form-controle-sm mb-3"
                            placeholder="Enter your password" 
                            style={{width : "50vh"}}
                        /><br/>
                        <button className="btn btn-primary">Login</button>
                        <p>
						    <Link to="/register">Create an account</Link>
					    </p>
                    </div>

                </div>
        </div>  
    )
}

export default Login;
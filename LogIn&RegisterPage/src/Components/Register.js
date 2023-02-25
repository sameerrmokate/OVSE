import { Link } from "react-router-dom"
function Register(){
    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{height : "98vh"}}>
                <div className="col-4 shadow p-5 text-center">
                    <input 
                        type="text" 
                        className="form-controle form-controle-sm mb-3" 
                        name="name" 
                        placeholder="Enter your Name"
                        style={{width : "50vh"}}
                    />
                    <input 
                        type="text" 
                        className="form-controle form-controle-sm mb-3"
                        placeholder="E-mail"
                        style={{width : "50vh"}}    
                    />
                    <input 
                        type="password" 
                        className="form-controle form-controle-sm mb-3" 
                        placeholder="Password"
                        style={{width : "50vh"}}
                    />
                    <input 
                        type="password" 
                        className="form-controle form-controle-sm mb-3" 
                        placeholder="Re-enter Password"
                        style={{width : "50vh"}}
                    />
                    <button className="btn btn-primary bt-sm">Register</button>
                    <p>
                        <Link to="/">Login Here</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;
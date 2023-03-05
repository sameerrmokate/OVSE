import { Link } from "react-router-dom";
import { useState,useRef } from "react";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const passInput = useRef(null)
	const rePassInput = useRef(null)

	const validatePassword = function(event){
		if(passInput.current.value === rePassInput.current.value){
			passInput.current.classList.remove("is-invalid")
			rePassInput.current.classList.remove("is-invalid")
			passInput.current.classList.add("is-valid")
			rePassInput.current.classList.add("is-valid")
			return true
		}else{
			passInput.current.classList.add("is-invalid")
			rePassInput.current.classList.add("is-invalid")
			return false
		}

	}


	const registerAccount = function(){
		if(name && email){
			if(validatePassword()){
				var data = {
					name : name,
					email : email,
					password : passInput.current.value
				}
				fetch("/auth/register",{
					method : "POST",
					body : JSON.stringify(data),
					headers : {
						"content-type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					if(data.type == "success"){
						setMsg(<span className="text-success">{data.msg}</span>)
					}else{
						setMsg(<span className="text-danger">{data.msg}</span>)
					}
				})
			}else{
				setMsg("Password does not match")
				
			}
		}else{
			setMsg("Empty fields")
			
		}
		setTimeout(()=>{
			setMsg("")
		},5000)
	}

	return (
		<div className="container-fluid">
			<div
				className="row justify-content-center align-items-center"
				style={{ height: "98vh" }}
			>
				<div className="col-4 shadow p-5 text-center bg-white">
					<p className="fst-italic">{msg}</p>
					<input
						type="text"
						className="form-control form-control-sm mb-3"
						placeholder="Name"
						value={name}
						onChange={(e)=>{setName(e.target.value)}}
					/>
					<input
						type="email"
						className="form-control form-control-sm mb-3"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="passowrd"
						className="form-control form-control-sm mb-3"
						placeholder="Password"
						ref={passInput}
					/>
					<input
						type="passowrd"
						className="form-control form-control-sm mb-3"
						placeholder="Re-Type Password"
						ref={rePassInput}
						onChange={validatePassword}
					/>
					<button className="btn btn-primary btn-sm mb-3" onClick={registerAccount}>
						Create an account
					</button>
					<p>
						<Link to="/">Login Here</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Register;

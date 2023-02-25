function Home(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center" style={{height : "98vh"}}>
                    <div className="col-4 shadow p-5 text-center">
                        <input 
                            type="text" 
                            className="form-controle-sm mb-3" 
                            placeholder="Enter vehicle name" 
                            style={{width : "50vh"}}
                        /><br/>
                        <input 
                            type="text" 
                            className="form-controle-sm mb-3"
                            placeholder="Enter city name" 
                            style={{width : "50vh"}}
                        /><br/>
                        <button className="btn btn-primary">Submit</button>
                        
                    </div>

                </div>
        </div>
        </div>
    )
}

export default Home;
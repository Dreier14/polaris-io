import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div>
            <div className = "error">
                <div className = "text">
                        404 Error 
                    <br/>
                        The Page You Requested is Invalid
                    <br/>
                        Click on the Link Below to Return to the Homepage
                    <br/>
                        <Link to="/" > 
                            Home 
                        </Link>
                </div>
            </div>
        </div>  
    );
}
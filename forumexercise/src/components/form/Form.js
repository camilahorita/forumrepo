import "./Form.css"
import { Link } from "react-router-dom";
function Form(){
    return(
        <div>
            <form>
                <div className="input-wrapper">
                    <label for="categories">Categories</label>
                    <select id="categories" className="form-control">
                        <option>Doubt</option>
                        <option>Suggestion</option>
                        <option>Clarification</option>
                    </select>
                </div>
                <div className="input-wrapper">
                    <label for="postbody"></label>
                    <textarea className="form-control" id="postbody" rows="7" required>
                    </textarea>
                </div>
                <div className="input-wrapper">
                    <img src="https://th.bing.com/th/id/OIP.noqgsb1JE9C5ZIx4gsGpqQHaHa?pid=ImgDet&rs=1" className="img-thumbnail rounded mx-auto d-block" alt="..."/>
                </div>
                <div className="input-wrapper">
                <Link to="/allposts"><input type="submit" value="Create a post" className="btn btn-primary" /></Link>
                </div>
            </form>
            
        </div>

        
        
    )
}

export default Form;

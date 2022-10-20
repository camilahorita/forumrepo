import { Link } from "react-router-dom";
import "./ThreadField.css";



function ThreadField() {

    const handleSubmit = event => {
        event.preventDefault();
        event.history.push("/allposts");
        alert('You have submitted the form.')
        
      }

    return (
        <div>
            <form >
                <div class="input-wrapper">
                    <label for="thread">Threads</label>
                    <select id="thread" className="form-control">
                        <option>Game</option>
                        <option>Sports</option>
                        <option>Cars</option>
                        <option>Womens</option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <label for ="title">Title</label>
                    <input className="form-control" type="name" id="title" name="title"  placeholder="Title" required ></input>
                </div>
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

export default ThreadField;
import React , {useState , useRef} from "react";
import { Link } from "react-router-dom";
import UserProfile from "../components/UserProfile";

import "../assets/styles/addRecipe.scss";

const AddRecipe = () => {
  const [selectedFile , setSelectedFile] = useState(null)
  const target = useRef(null)

  const handleFile =(e) => {
    const uploaded = e.target.files[0]
    setSelectedFile(URL.createObjectURL(uploaded))
  }

  return (
    <section class="add-recipe">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Profile - Bambam</h1>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Profile</li>
            <li>Bambam</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile isProfile={false} />
        <div className="right">
            <div className="heading">
              <h3>My Recipes</h3>
            </div>
          <form>
            <div className="inputs flex">
              <div className="input">
                <label htmlFor="">Category</label>
                <select name="select" id="">
                  <option value="Category">Category</option>
                </select>
              </div>

              <div className="input">
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Title"/>
              </div>

              <div className="input">
                <label htmlFor="">Permlink</label>
                <input type="text" placeholder="Permlink "/>
              </div>

              <div className="checkbox flex">
                  <label htmlFor="">Difficulty</label>
                  <div className="checks flex">
                  <div className="check">
                  <input type="radio" name="level" id="Easy" />
                    <label htmlFor="">Easy</label>
                  </div>
                  <div className="check">
                  <input type="radio" name="level" id="Medium" />
                    <label htmlFor="">Medium</label>
                  </div>
                  <div className="check">
                  <input type="radio" name="level" id="Hard" />
                    <label htmlFor="">Hard</label>
                  </div>
                  </div>
              </div>


              <div className="aside-input flex">
                <div className="aside-left flex">
                  <div className="input">
                    <label htmlFor="">Prepare Time</label>
                    <input type="text" placeholder="Prepare Time"/>
                  </div>
                  <div className="input">
                    <label htmlFor="">Cooking Time</label>
                    <input type="text" placeholder="Cooking Time"/>
                  </div>
                </div>
                <div className="aside-right flex">
                <div className="input">
                  <label htmlFor="">Serves</label>
                  <input type="text" placeholder="Serves"/>
                </div>

                <div className="input">
                  <label htmlFor="">Calories</label>
                  <input type="text" placeholder=""/>
                </div>
                </div>
              </div>
              
              <div className="textarea flex">
                <label htmlFor="">Description</label>
                <textarea
                  placeholder=""></textarea>
              </div>

              <div className="input">
                <label htmlFor="">Video Link</label>
                <input type="text" placeholder="Video Link"/>
              </div>

              <div className="textarea flex">
                <label htmlFor="">Direction</label>
                <textarea
                  placeholder=""></textarea>
              </div>

              <div className="textarea flex">
                <label htmlFor="">Meta Discription</label>
                <textarea
                  placeholder=""></textarea>
              </div>
    
              <div className="input">
                <label htmlFor="">Featured  Image</label>
                <input type="text" placeholder=""/>
              </div>

              <div className="file">
                  <div className="div"></div>
                  <div className="file-item">
                    <input type='file'
                    ref={target}
                    onChange={(e) => handleFile(e)}/>
                    
                    {
                      selectedFile !== null ? <div className="img-file">
                        <img src={selectedFile} alt="img" />
                      </div> : 
                      <div className="file-display">
                        <h3>No photos uploaded yet !</h3>
                      </div>
                    }
    
                  </div>
              </div>


            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;

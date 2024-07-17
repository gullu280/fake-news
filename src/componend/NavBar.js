
import {Link, useNavigate} from 'react-router-dom';
export default function NavBar() {
  const navigation=useNavigate();
function count(e){
  let dd=e.target.value;
  let newdd=dd.toLowerCase();
  navigation(`/General/${newdd}`);
}


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light  bg-success">
      <Link className="navbar-brand text-mute " to="/"> Fake-news</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link "  to="/sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">Business</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/"  role="button" data-toggle="dropdown" >
            General
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/entertainment">entertainment</Link>
              <Link className="dropdown-item " to="/health">healths</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/science" >Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/technology" >Technology</Link>
          </li>
          </ul>
{/* country */}
<form className="form-inline my-2 my-lg-0">
      <div className="language-selector">
        <select defaultValue="US" className="custom-select mr-sm-2"   id="languageSelect" onChange={count}>
      <option value="US" >Select country...</option> 
     <option value="US">United States</option>
    <option value="IN">India</option>
        </select>
      </div>
    </form> 

      
      </div>
      </nav>
    </div>
  )
}


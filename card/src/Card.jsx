import profilePic from './assets/logo.png'

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="Profile Picture"></img>
            <h1 className="card-h1">X Clothing</h1>
            <p className="card-text">Your Own Clothing Brand</p>

        </div>
    );
}
export default Card
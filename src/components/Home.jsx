import favicon from "../assets/favicon.png";
import '../unique-css/Home.css';

function Home() {
    return (
        <div className="page-wrapper">
            <div className="home-container">
                <div className="home-logo-overlay">
                    <img src={favicon} alt="rotating flower logo" className="homepage-logo"/>
                </div>
                <h1 className="home-name">liv<br/>motley</h1>
            </div>
        </div>
    )
}

export default Home;
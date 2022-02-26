import './App.css';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';
import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'

function App() {
  const openHamburger = (e) => {
    e.target.classList.add('show')
    e.target.nextElementSibling.classList.add('show')
    e.target.previousElementSibling.classList.add('show')
    e.target.parentElement.parentElement.classList.add('show')
  }

  const closeHamburger = (e) => {
    e.target.classList.remove('show')
    e.target.previousElementSibling.classList.remove('show')
    e.target.previousElementSibling.previousElementSibling.classList.remove('show')
    e.target.parentElement.parentElement.classList.remove('show')

  }
  return (
    <main className='container'>
      <header>
        <nav>
          <img src={logo} alt="" className='logo' />
          <ul className='header-menu'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
          <img src={hamburger} alt="hamburger" id='hamburger' onClick={openHamburger}/>
          <img src={close} alt="close" id='close' onClick={closeHamburger}/>
        </nav>

        <div className="header-text">
          <p>Immersive<br/> 
          experiences <br />
          that deliver</p>
        </div>
      </header>

      <section className="second">
        <div>
          <img src={require("./images/mobile/image-interactive.jpg")} alt="" className='mobile'/>
          <img src={require("./images/desktop/image-interactive.jpg")} alt="" className='desktop'/>
        </div>
        <div className="vr-text">
          <h1>
            The leader in interactive VR
          </h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </div>
      </section>

      <section className="grid-container">
        <h1>
          Our creations
        </h1>
        <div>
          <img src={require("./images/mobile/image-deep-earth.jpg")} alt="deep earth" className='mobile'/>
          <img src={require("./images/desktop/image-deep-earth.jpg")} alt="deep earth" className='desktop'/>
          <h1>
          Deep <br/> earth
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-night-arcade.jpg")} alt="Night arcade" className='mobile'/>
          <img src={require("./images/desktop/image-night-arcade.jpg")} alt="Night arcade" className='desktop'/>
          <h1>
          Night <br /> arcade
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-soccer-team.jpg")} alt="soccer team" className='mobile'/>
          <img src={require("./images/desktop/image-soccer-team.jpg")} alt="soccer team" className='desktop'/>
          <h1>
          Soccer <br /> team VR
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-grid.jpg")} alt="grid" className='mobile'/>
          <img src={require("./images/desktop/image-grid.jpg")} alt="grid" className='desktop'/>
          <h1>
          The <br /> grid
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-from-above.jpg")} alt="from above" className='mobile'/>
          <img src={require("./images/desktop/image-from-above.jpg")} alt="from above" className='desktop'/>
          <h1>
          From up  <br /> above VR
  
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-pocket-borealis.jpg")} alt="pocket borealis" className='mobile'/>
          <img src={require("./images/desktop/image-pocket-borealis.jpg")} alt="pocket borealis" className='desktop'/>
          <h1>
          Pocket <br /> borealis
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-curiosity.jpg")} alt="curiosity" className='mobile'/>
          <img src={require("./images/desktop/image-curiosity.jpg")} alt="curiosity" className='desktop'/>
          <h1>
          The <br /> curiosity
          </h1>
        </div>

        <div>
          <img src={require("./images/mobile/image-fisheye.jpg")} alt="fisheye" className='mobile'/>
          <img src={require("./images/desktop/image-fisheye.jpg")} alt="fisheye" className='desktop'/>
          <h1>
            Make it <br /> fisheye
          </h1>
        </div>
        
        <button>See All</button>
      </section>

      <section className="footer">
        <div>
          <img src={logo} alt="logo" className='logo'/>
          <ul className='footer-links'>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <ul className='social-links'>
            <li><img src={facebook} alt="facebook" /></li>
            <li><img src={twitter} alt="twitter" /></li>
            <li><img src={pinterest} alt="pinterest" /></li>
            <li><img src={instagram} alt="instagram" /></li>
          </ul>
          <p> © 2021 Loopstudios. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}

export default App;

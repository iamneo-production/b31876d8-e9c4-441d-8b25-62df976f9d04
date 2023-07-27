import React from 'react';
import '../Css/Home.css';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689145033/ADVISOR_HUB_e0q4y9.png" alt="Logo" />
          </div>
          <div className='move'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="login"><a href="/login">Login</a></li>
            <li className="logout"><a href="/logout">Logout</a></li>
            <li className="signup"><a href="/signup">Sign Up</a></li>
          </ul>
          </div>
        </nav>
      </header>
     <div className='back'>
      <main>
        <h1>WE HELP PEOPLE NAVIGATE LIFE'S MOST CHALLENGING TRANSITIONS</h1>
           <section className="dashboard">
          <div className="card-container">
            <div className="card">
            <p><button>Fitness Consultant</button></p>
            </div>
            <div className="card1">
            <p><button>Education Consultant</button></p>
            </div>
            <div className="card2">
            <p><button>Stategy Consultant</button></p>
            </div>
            </div>
            <div className="card1-container">
            <div className="card3">
            <p><button>Legal Consultant</button></p>
            </div>
            <div className="card4">
            <p><button>Business Consultant</button></p>
            </div>
            <div className="card5">
            <p><button>Rehabilitation Consultant</button></p>
            </div>
            </div>
        </section>  
      </main>
      <div className='foot'>
      <footer>
        <p>&copy; 2023 AdvisorHub. All rights reserved.</p>
      </footer>
      </div>
      </div>
    </div>
  );
}

export default Home;
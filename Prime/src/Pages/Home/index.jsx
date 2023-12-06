import img1 from "./../../assets/imgs/1.jpg";
import img2 from "./../../assets/imgs/2.jpg";
import "./index.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <p>
          We provide brilliant ideas & adding <br /> the word called{" "}
          <span>success</span> to your brand.
        </p>
        <p>
          PrimeAgency Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Omnis eos neque repellat illo? Vitae quidem natus, adipisci
          harum dignissimos eaque.
        </p>
      </div>
      <div className="main-section">
        <div className="container">
          <div className="row">
            <div className="r-section">
              <ul>
                <li>
                  <a>Branding</a>
                </li>
                <li>
                  <a>Digital Experience</a>
                </li>
                <li>
                  <a>Media Planning</a>
                </li>
                <li>
                  <a>Advertising</a>
                </li>
              </ul>
            </div>
            <div className="l-section">
              <div className="first-img">
                <img src={img2} alt="Just an Image" />
              </div>
              <div className="second-img">
                <img src={img1} alt="Just an Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

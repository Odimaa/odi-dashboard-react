import "./Main.css";
import hello from "../../assets/waving-hand.png";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          {/* <img src={hello} alt="hello" /> */}
          <div className="main__greeting">
            <h1>Dashboard</h1>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
        <div className="card">
            <i
              className="fa fa-sellsy text-yellow"
              aria-hidden="true"
             ></i>
            <div className="card_inner">
              <span className="font-bold text-title">$34,000</span>
            </div>
            <div className="card_inner">
            <p className="text-primary-p">Total Sales</p>
            
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-usd text-yellow"
              aria-hidden="true"
             ></i>
            <div className="card_inner">
              <span className="font-bold text-title">$44040</span>
            </div>
            <div className="card_inner">
            <p className="text-primary-p">Total Expenses</p>
            
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-users text-yellow"
              aria-hidden="true"
             ></i>
            <div className="card_inner">
              <span className="font-bold text-title">340</span>
            </div>
            <div className="card_inner">
            <p className="text-primary-p">Total Visitors</p>
            
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera text-yellow"
              aria-hidden="true"
             ></i>
            <div className="card_inner">
              <span className="font-bold text-title">240</span>
            </div>
            <div className="card_inner">
            <p className="text-primary-p">Total Videos</p>
            
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Income Reports</h1>
                
              </div>
            </div>
            <Chart />
          </div>

          <div className="charts__left">
            <div className="charts__right__title">
              <div>
                <h1>Popular products</h1>
              </div>
             </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
               </div>

              <div className="card2">
                <h1>Revenue</h1>
               </div>

              <div className="card3">
                <h1>Products</h1>
               </div>

              <div className="card4">
                <h1>Orders</h1>
               </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
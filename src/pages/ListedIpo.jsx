import { ipoData } from "../data/ipoData";
import IPOTable from "../components/IPOTable";

export default function ListedIPO() {

  const listedIPOs = ipoData.filter(
    (ipo) => ipo.status === "Listed"
  );

  return (

    <section className="container section">

      <div className="section-heading">

        <span className="eyebrow dark-eyebrow">
          MARKET PERFORMANCE
        </span>

        <h1>Recently Listed IPOs</h1>

        <p>
          Check listing prices and listing day gains or losses.
        </p>

      </div>


      {/* Performance Cards */}
      <div className="performance-grid">

        {listedIPOs.map((ipo) => {

          const gain =
            ipo.listingPrice - ipo.issuePrice;

          const percentage =
            (gain / ipo.issuePrice) * 100;

          return (

            <div className="performance-card" key={ipo.id}>

              <div className="performance-top">

                <span className="company-avatar">
                  {ipo.company.charAt(0)}
                </span>

                <span className="status-badge listed">
                  Listed
                </span>

              </div>

              <h3>{ipo.company}</h3>

              <p className="muted">
                {ipo.symbol}
              </p>


              <div className="price-comparison">

                <div>
                  <small>Issue Price</small>
                  <b>₹{ipo.issuePrice}</b>
                </div>

                <span>→</span>

                <div>
                  <small>Listing Price</small>
                  <b>₹{ipo.listingPrice}</b>
                </div>

              </div>


              <div className="gain-row">

                <span>Listing Gain / Loss</span>

                <b className={gain >= 0 ? "positive" : "negative"}>

                  {gain >= 0 ? "+" : ""}
                  ₹{gain}

                  ({percentage.toFixed(2)}%)

                </b>

              </div>

            </div>

          );

        })}

      </div>


      {/* Listed IPO Table */}
      <div className="section-title-row compact-heading">

        <h2>All Listed IPOs</h2>

      </div>

      <IPOTable data={listedIPOs} />

    </section>

  );
}
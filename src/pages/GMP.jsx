import { ipoData } from "../data/ipoData";

export default function GMP() {

  return (

    <section className="container section">

      <div className="section-heading">

        <span className="eyebrow dark-eyebrow">
          GREY MARKET PREMIUM
        </span>

        <h1>IPO GMP Tracker</h1>

        <p>
          Track IPO GMP and estimated listing prices.
        </p>

      </div>


      <div className="info-banner">

        <b>Note:</b> GMP values are fictional demo values
        and are not real market information.

      </div>


      <div className="table-card">

        <div className="table-scroll">

          <table className="ipo-table">

            <thead>

              <tr>
                <th>Company</th>
                <th>Status</th>
                <th>Issue Price</th>
                <th>GMP</th>
                <th>Estimated Listing Price</th>
                <th>Estimated Gain</th>
              </tr>

            </thead>


            <tbody>

              {ipoData.map((ipo) => {

                const estimatedPrice =
                  ipo.issuePrice + ipo.gmp;

                const gainPercentage =
                  (ipo.gmp / ipo.issuePrice) * 100;

                return (

                  <tr key={ipo.id}>

                    <td>
                      <b>{ipo.company}</b>

                      <small className="table-subtext">
                        {ipo.symbol}
                      </small>
                    </td>

                    <td>

                      <span className={`status-badge ${ipo.status.toLowerCase()}`}>
                        {ipo.status}
                      </span>

                    </td>

                    <td>
                      ₹{ipo.issuePrice}
                    </td>

                    <td className="positive">
                      +₹{ipo.gmp}
                    </td>

                    <td>
                      ₹{estimatedPrice}
                    </td>

                    <td className="positive">
                      +{gainPercentage.toFixed(2)}%
                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </section>

  );

}
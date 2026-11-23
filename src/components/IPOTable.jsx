import { Link } from "react-router-dom";

export default function IPOTable({ data }) {

  if (!data || data.length === 0) {
    return (
      <div className="empty-state">
        No IPOs found.
      </div>
    );
  }

  return (
    <div className="table-card">

      <div className="table-scroll">

        <table className="ipo-table">

          <thead>
            <tr>
              <th>Company</th>
              <th>Status</th>
              <th>Price Band</th>
              <th>Issue Size</th>
              <th>Open Date</th>
              <th>Close Date</th>
              <th>GMP</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {data.map((ipo) => (

              <tr key={ipo.id}>

                <td>

                  <Link
                    to={`/ipo/${ipo.id}`}
                    className="company-link"
                  >

                    <span className="company-avatar">
                      {ipo.company.charAt(0)}
                    </span>

                    <span>
                      <b>{ipo.company}</b>
                      <small>{ipo.symbol}</small>
                    </span>

                  </Link>

                </td>

                <td>
                  <span className={`status-badge ${ipo.status.toLowerCase()}`}>
                    {ipo.status}
                  </span>
                </td>

                <td>{ipo.priceBand}</td>

                <td>{ipo.issueSize}</td>

                <td>{ipo.openDate}</td>

                <td>{ipo.closeDate}</td>

                <td className="positive">
                  +₹{ipo.gmp}
                </td>

                <td>
                  <Link
                    to={`/ipo/${ipo.id}`}
                    className="view-link"
                  >
                    View Details →
                  </Link>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
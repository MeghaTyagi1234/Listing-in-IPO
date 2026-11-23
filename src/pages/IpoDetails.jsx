import { Link, useParams } from "react-router-dom";
import { ipoData } from "../data/ipoData";

export default function IPODetails() {

    const { id } = useParams();

    const ipo = ipoData.find(
        (item) => item.id === id
    );

    if (!ipo) {

        return (

            <section className="container section">

                <h2>IPO Not Found</h2>

                <Link to="/" className="text-link">
                    Back to Home
                </Link>

            </section>

        );

    }


    const listingGain = ipo.listingPrice
        ? ipo.listingPrice - ipo.issuePrice
        : null;


    const details = [

        ["IPO Status", ipo.status],
        ["Price Band", ipo.priceBand],
        ["Issue Price", `₹${ipo.issuePrice}`],
        ["Issue Size", ipo.issueSize],
        ["Lot Size", `${ipo.lotSize} Shares`],
        ["Open Date", ipo.openDate],
        ["Close Date", ipo.closeDate],
        ["Listing Date", ipo.listingDate],
        ["Subscription", ipo.subscription],
        ["GMP", `₹${ipo.gmp}`]

    ];


    return (

        <section className="container section details-page">

            <Link to="/" className="back-link">
                ← Back to Home
            </Link>


            {/* Company Heading */}
            <div className="details-heading">

                <div className="company-avatar large-avatar">
                    {ipo.company.charAt(0)}
                </div>

                <div>

                    <span className="eyebrow dark-eyebrow">
                        IPO DETAILS
                    </span>

                    <h1>{ipo.company}</h1>

                    <p>{ipo.symbol}</p>

                    <span className={`status-badge ${ipo.status.toLowerCase()}`}>
                        {ipo.status}
                    </span>

                </div>

            </div>


            <div className="details-layout">

                {/* IPO Information */}
                <div className="detail-card">

                    <h2>IPO Information</h2>

                    <div className="detail-grid">

                        {details.map(([label, value]) => (

                            <div className="detail-item" key={label}>

                                <span>{label}</span>

                                <b>{value}</b>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Company Description */}
                <div className="detail-card about-card">

                    <h2>About Company</h2>

                    <p>{ipo.description}</p>


                    {listingGain !== null && (

                        <div className="listing-result">

                            <span>Listing Gain / Loss</span>

                            <b className={listingGain >= 0 ? "positive" : "negative"}>

                                {listingGain >= 0 ? "+" : ""}
                                ₹{listingGain}

                            </b>

                        </div>

                    )}


                    <div className="detail-note">

                        All information is fictional demo data.

                    </div>

                </div>

            </div>

        </section>

    );
}
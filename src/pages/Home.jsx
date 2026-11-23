import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import SummaryCards from "../components/SummaryCards";
import IPOTable from "../components/IPOTable";

import { ipoData } from "../data/ipoData";

export default function Home() {

    const activeIPOs = ipoData.filter(
        (ipo) =>
            ipo.status === "Open" ||
            ipo.status === "Upcoming"
    );

    const listedIPOs = ipoData.filter(
        (ipo) => ipo.status === "Listed"
    );

    return (
        <>

            {/* Hero Section */}
            <Hero />

            {/* IPO Overview */}
            <section className="container home-overview">

                <div className="section-title-row">

                    <div>
                        <span className="eyebrow dark-eyebrow">
                            AT A GLANCE
                        </span>

                        <h2>IPO Market Overview</h2>

                        <p>
                            Get a quick overview of IPO market activity.
                        </p>
                    </div>

                </div>

                <SummaryCards data={ipoData} />

            </section>


            {/* Active IPOs */}
            <section className="container section home-table-section">

                <div className="section-title-row">

                    <div>
                        <h2>Active & Upcoming IPOs</h2>

                        <p>
                            Explore currently open and upcoming IPOs.
                        </p>
                    </div>

                    <Link to="/upcoming" className="text-link">
                        View All →
                    </Link>

                </div>

                <IPOTable data={activeIPOs} />

            </section>


            {/* Listed IPOs */}
            <section className="container section home-table-section">

                <div className="section-title-row">

                    <div>
                        <h2>Recently Listed IPOs</h2>

                        <p>
                            Check recently listed company performance.
                        </p>
                    </div>

                    <Link to="/listed" className="text-link">
                        View All →
                    </Link>

                </div>

                <IPOTable data={listedIPOs} />

            </section>


            {/* GMP Banner */}
            <section className="container cta-banner">

                <div>
                    <h2>Track IPO Grey Market Premium</h2>

                    <p>
                        Check GMP and estimated listing prices.
                    </p>
                </div>

                <Link to="/gmp" className="button button-light">
                    Explore GMP →
                </Link>

            </section>

        </>
    );
}
import { useMemo, useState } from "react";
import IPOTable from "./IPOTable";

export default function IPOListing({ data, title, subtitle }) {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredData = useMemo(() => {

    let result = data.filter((ipo) =>
      `${ipo.company} ${ipo.symbol}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (sort === "name") {
      result.sort((a, b) =>
        a.company.localeCompare(b.company)
      );
    }

    if (sort === "gmp") {
      result.sort((a, b) => b.gmp - a.gmp);
    }

    return result;

  }, [data, search, sort]);

  return (
    <section className="container section">

      <div className="section-heading">

        <span className="eyebrow dark-eyebrow">
          IPO DIRECTORY
        </span>

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

      <div className="filter-bar">

        <label className="search-box">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search company or symbol..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >

          <option value="default">Default Sorting</option>

          <option value="name">Company Name</option>

          <option value="gmp">Highest GMP</option>

        </select>

      </div>

      <IPOTable data={filteredData} />

    </section>
  );
}
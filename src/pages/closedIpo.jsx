import IPOListing from "../components/IPOListing";
import { ipoData } from "../data/ipoData";

export default function ClosedIPO() {

  const closedIPOs = ipoData.filter(
    (ipo) => ipo.status === "Closed"
  );

  return (

    <IPOListing
      data={closedIPOs}
      title="Closed IPOs"
      subtitle="Explore IPOs whose subscription period has ended."
    />

  );
}
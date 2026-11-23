import IPOListing from "../components/IPOListing";
import { ipoData } from "../data/ipoData";

export default function OpenIPO() {

  const openIPOs = ipoData.filter(
    (ipo) => ipo.status === "Open"
  );

  return (

    <IPOListing
      data={openIPOs}
      title="Open IPOs"
      subtitle="Explore IPOs that are currently open for subscription."
    />

  );
}
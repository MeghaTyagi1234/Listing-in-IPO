import IPOListing from "../components/IPOListing";
import { ipoData } from "../data/ipoData";

export default function UpcomingIPO() {

  const upcomingIPOs = ipoData.filter(
    (ipo) => ipo.status === "Upcoming"
  );

  return (

    <IPOListing
      data={upcomingIPOs}
      title="Upcoming IPOs"
      subtitle="Explore companies preparing to launch their public issues."
    />

  );
}
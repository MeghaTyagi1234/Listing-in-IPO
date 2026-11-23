export default function SummaryCards({ data }) {

  const cards = [
    {
      label: "Upcoming IPOs",
      value: data.filter(
        (ipo) => ipo.status === "Upcoming"
      ).length,
      icon: "↗",
      color: "purple",
    },

    {
      label: "Open IPOs",
      value: data.filter(
        (ipo) => ipo.status === "Open"
      ).length,
      icon: "◉",
      color: "green",
    },

    {
      label: "Closed IPOs",
      value: data.filter(
        (ipo) => ipo.status === "Closed"
      ).length,
      icon: "▣",
      color: "orange",
    },

    {
      label: "Recently Listed",
      value: data.filter(
        (ipo) => ipo.status === "Listed"
      ).length,
      icon: "✓",
      color: "blue",
    },
  ];

  return (
    <div className="summary-grid">

      {cards.map((card) => (

        <div className="summary-card" key={card.label}>

          <div className={`summary-icon ${card.color}`}>
            {card.icon}
          </div>

          <div>
            <p>{card.label}</p>
            <h3>{card.value}</h3>
          </div>

        </div>

      ))}

    </div>
  );
}
import { dashboardCards } from "../../constants";

const Cards = ({ count }) => {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
      {dashboardCards.map((card) => {
        const { Icon, title, value, style } = card;
        return (
          <li key={title}>
            <div className="card">
              <div className="flex-between text-2xl">
                <Icon className={`${style}`} />

                <span className="font-bold"> {count[value]} </span>
              </div>

              <h2 className="text-lg">{title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;

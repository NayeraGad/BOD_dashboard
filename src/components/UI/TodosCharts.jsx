import { TodosPieChart, TodosBarChart } from "../index";

const ChartPanel = ({ title, children }) => (
  <div className="panel">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="h-72">{children}</div>
  </div>
);

const TodosCharts = ({ completedCount, pendingCount, userTodoData }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-6">
      <ChartPanel title="Todos Overview">
        <TodosPieChart completed={completedCount} pending={pendingCount} />
      </ChartPanel>

      <ChartPanel title="Todos per User">
        <TodosBarChart data={userTodoData} />
      </ChartPanel>
    </div>
  );
};

export default TodosCharts;

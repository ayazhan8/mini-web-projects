import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Laptop",
      amount: 1290,
      date: new Date(2019, 1, 12),
    },
    { id: "e2", title: "Airpods", amount: 119.49, date: new Date(2018, 6, 21) },
    {
      id: "e3",
      title: "Flight Tickets",
      amount: 46.78,
      date: new Date(2022, 1, 28),
    },
    {
      id: "e4",
      title: "Lipstick",
      amount: 50,
      date: new Date(2022, 2, 2),
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white" }}>List of Expenses</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="counters">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

import { createSignal, type Component } from "solid-js";
import { Exo1 } from "./components/exo1";
import { Exo2 } from "./components/exo2";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="py-16 text-center">
      <h1 class="text-3xl py-3">hello solid word</h1>
      <button
        class="btn btn-success"
        onClick={() => {
          console.log("click");
          setCount(count() + 1);
        }}
      >
        Count is : {count()}
      </button>

      <Exo1 name="Ayena"></Exo1>
      <Exo2></Exo2>
    </div>
  );
};

export default App;

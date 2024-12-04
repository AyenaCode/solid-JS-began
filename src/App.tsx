import { createSignal, For, Show, type Component } from "solid-js";
import { Exo1 } from "./components/exo1";
import { Exo2 } from "./components/exo2";
import { Exo3 } from "./components/exo3";

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

      <Exo1 name="Ayena" />
      <Exo2 />
      <Exo3 />
      <Message />
      <Liste />
    </div>
  );
};

// rendu conditionnel avec Show
function Message() {
  const [afficher, setAfficher] = createSignal(true);

  return (
    <div>
      <button onClick={() => setAfficher(!afficher())}>voir</button>
      <Show when={afficher()} fallback={<p>Le message est caché.</p>}>
        <p>Voici un message important !</p>
      </Show>
    </div>
  );
}

//For pour les boucles
function Liste() {
  const items = ["Pomme", "Banane", "Cerise"];

  return (
    <ul>
      <For each={items}>{(item) => <li>{item}</li>}</For>
    </ul>
  );
}

export default App;

// Logger la valuer d'un champs
import { Component, createEffect, createSignal } from "solid-js";

export const Exo2: Component = () => {
  const [inputValue, setInputValue] = createSignal("");

  createEffect(() => {
    // Logue la valeur chaque fois qu'elle change
    console.log(inputValue());
  });

  return (
    <div>
      <input
        type="text"
        onInput={(e) => setInputValue(e.currentTarget.value)}
        value={inputValue()}
        class="input bg-blue-900"
      />
    </div>
  );
};

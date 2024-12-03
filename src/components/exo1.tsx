import { Component, createSignal } from "solid-js";

// Un composant qui utilise un signal pour gérer la visibilité d’un texte ("Bonjour, Solid.js!") avec un bouton pour afficher/masquer le texte.
type Props = {
  name: string;
};

export const Exo1: Component<Props> = (props) => {
  const [visible, setVisible] = createSignal(true);

  return (
    <div>
      <button
        class="btn btn-outline my-6"
        onClick={() => setVisible(!visible())}
      >
        {visible() ? "Cacher" : "Afficher"} le texte
      </button>
      {visible() && <p>Bonjour, {props.name}!</p>}
    </div>
  );
};

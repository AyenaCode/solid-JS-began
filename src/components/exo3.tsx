//un formulaire pour éditer un objet utilisateur (nom, email, âge) et affiche les données mises à jour en direct.
import { Component } from "solid-js";
import { createStore } from "solid-js/store";

export const Exo3: Component = () => {
  const [user, setUser] = createStore({ name: "", age: 0, email: "" });

  const handleAgeInput = (value: string) => {
    const parsedAge = parseInt(value, 10);
    setUser(
      "age",
      isNaN(parsedAge) || parsedAge < 1 || parsedAge > 200 ? 0 : parsedAge
    );
  };

  return (
    <div>
      <form class="form-control gap-4 py-4">
        <input
          type="text"
          placeholder="Write your name here"
          aria-label="Name"
          onInput={(e) => setUser("name", e.currentTarget.value.trim())}
          class="input input-bordered"
        />
        <input
          type="number"
          placeholder="Your age here"
          aria-label="Age"
          onInput={(e) => handleAgeInput(e.currentTarget.value)}
          class="input input-bordered"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Write your email here"
          aria-label="Email"
          onInput={(e) => setUser("email", e.currentTarget.value.trim())}
          class="input input-bordered"
        />
      </form>
      <div class="py-4">
        <p>
          <strong>Name:</strong> {user.name || "Not provided"}
        </p>
        <p>
          <strong>Age:</strong> {user.age || "Not provided"}
        </p>
        <p>
          <strong>Email:</strong> {user.email || "Not provided"}
        </p>
      </div>
    </div>
  );
};

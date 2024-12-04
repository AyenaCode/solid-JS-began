import { Component } from "solid-js";

type Props = {
  user: {
    name: string;
    age: number;
    email: string;
  };
};

export const Exo4: Component<Props> = (props) => {
  return (
    <div class="py-4">
      <p>
        <strong>Name:</strong> {props.user.name || "Not provided"}
      </p>
      <p>
        <strong>Age:</strong> {props.user.age || "Not provided"}
      </p>
      <p>
        <strong>Email:</strong> {props.user.email || "Not provided"}
      </p>
    </div>
  );
};

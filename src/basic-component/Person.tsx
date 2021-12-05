import React from "react";

export const Person: React.FC<{ name: string }> = ({ name }) => (
  <div role="contentinfo">Name is {name}</div>
);

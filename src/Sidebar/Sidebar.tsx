import React from "react";

type Item = {
  name: string;
  href: string;
};

export const Sidebar: React.FC<{ items: Item[] }> = ({ items }) => (
  <div>
    {items.map((item) => (
      <div key={item.href}>
        <a href={item.href} role="navigation">
          {item.name}
        </a>
      </div>
    ))}
  </div>
);

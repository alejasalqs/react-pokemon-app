import React from "react";

export const PokemonStats = ({ stats }) => {
  return (
    <table class="table">
      <tbody>
        {stats.map((s) => (
          <tr key={s.stat.name}>
            <th scope="row">{s.stat.name}</th>
            <td>{s.base_stat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

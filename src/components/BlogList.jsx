import React from "react";

export default function BlogList({ issues, onSelect }) {
  return (
    <section style={{ marginTop: 30 }}>
      <h2>博客列表</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {issues.map((issue) => (
          <li
            key={issue.id}
            style={{ padding: 10, borderBottom: "1px solid #ddd", cursor: "pointer", color: "#007acc" }}
            onClick={() => onSelect(issue)}
          >
            {issue.title} - {new Date(issue.created_at).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </section>
  );
}

import React from "react";
import ReactMarkdown from "react-markdown";

export default function BlogDetail({ issue, onBack }) {
  return (
    <section style={{ marginTop: 30 }}>
      <button onClick={onBack} style={{ marginBottom: 10 }}>← 返回博客列表</button>
      <h2>{issue.title}</h2>
      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </section>
  );
}

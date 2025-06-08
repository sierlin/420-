import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

const GITHUB_REPO = "sierlin/420-"; // 请改成你的GitHub仓库名

export default function App() {
  const [issues, setIssues] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues?labels=blog&state=open`)
      .then((res) => res.json())
      .then(setIssues)
      .catch(console.error);
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "Segoe UI, Tahoma" }}>
      <header style={{ textAlign: "center", padding: 40, backgroundColor: "#4a90e2", color: "white" }}>
        <h1>欢迎来到肆二林的个人主页</h1>
        <p>我是 420</p>
      </header>

      {!selected ? (
        <BlogList issues={issues} onSelect={setSelected} />
      ) : (
        <BlogDetail issue={selected} onBack={() => setSelected(null)} />
      )}

      <footer style={{ textAlign: "center", marginTop: 40, color: "#555" }}>
        无聊
      </footer>
    </div>
  );
}


import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
const content = `# 我的第一篇博客

欢迎来到我的博客！这是使用 Markdown 编写的内容。

## 二级标题

- 列表项 A
- 列表项 B

### 结语

感谢阅读！`;

document.body.innerHTML = md.render(content);

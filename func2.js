function generateSummary(content, maxLength = 100) {
  if (content.length <= maxLength) {
    return content;
  }

  let summary = content.substring(0, maxLength);
  const lastSpaceIndex = summary.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    summary = summary.substring(0, lastSpaceIndex);
  }

  return summary + "...";
}

// 使用示例
const newsArticle =
  "这是一篇关于人工智能在新闻行业应用的深度报道。随着技术的发展，是一篇关于人工智能在新闻行业应用的深度报AI正在改变新闻的生产和传播方式,这是一篇关于人工智能在新闻行业应用的深度报道。随着技术的发展，是一篇关于人工智能在新闻行业应用的深度报AI正在改变新闻的生产和传播方式";
console.log(generateSummary(newsArticle, 100));

function classifyText(text) {
  // 获取文本的长度
  const textLength = text.length;

  // 根据文本长度判断类型
  if (textLength < 100) {
    return "短新闻";
  } else {
    return "长新闻";
  }
}

// 示例用法
const text1 = "这是一条短新闻，长度小于100个字符。";
const text2 =
  "这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。这是一条长新闻，长度超过100个字符。";
console.log(classifyText(text1)); // 输出: 短新闻
console.log(classifyText(text2)); // 输出: 长新闻

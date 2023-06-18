import { remark } from 'remark';
import html from 'remark-html';
import remarkImages from 'remark-images';
import remarkEmbedImages from 'remark-embed-images';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkImages).use(html).process(markdown);
  return result.toString();
}

// const fs = require('fs');
import fs from "fs"
/**版本号，当前时间戳，保证唯一 */
const versionNo = new Date().getTime();
const htmlPath = './dist/index.html';
const insertVersionMeta = () => {
  let html = fs.readFileSync(htmlPath, 'utf-8');
  html = html.replace('<head>', `<head><meta name="version_no" content="${versionNo}" />`);
  fs.writeFileSync(htmlPath, html);
};
insertVersionMeta();

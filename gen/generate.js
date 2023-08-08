const fs = require('fs/promises');
const path = require('path');

async function main() {
  const dir = await fs.readdir('./js');
  const vexFiles =[];
  const versions = [];
  for (let filename of dir) {
    filename = filename.replace('.js', '');
    vexFiles.push(filename);
  }
  const libs = await fs.readdir('./vexlibs');
  for (let dirname of libs) {
    versions.push(dirname);
  }
  const ixLinks = [];
  ixLinks.push('<!DOCTYPE HTML>');
  ixLinks.push(`<html lang="en" xmlns="http://www.w3.org/1999/xhtml">`);
  ixLinks.push(`<body><ul>`);
  for (var i = 0; i < vexFiles.length; ++i) {
    const vexFile = vexFiles[i];
    for (var j = 0; j < versions.length; ++j) {
      const version = versions[j];
      const strs = [];
      const htmlFile = `${vexFile}${version}.html`;
      ixLinks.push(`<li><a href="./html/${htmlFile}">${vexFile} using VexFlow library ${version}</a></li>`);
      strs.push('<!DOCTYPE HTML>');
      strs.push(`<html lang="en" xmlns="http://www.w3.org/1999/xhtml">`);
      strs.push(`<head>`);
      strs.push(`<meta http-equiv="Content-Type" content="text/html" charset="utf-8">`);
      strs.push(`<title>Render ${vexFile} using Vexflow release ${version}</title>`);
      strs.push(`<link href="../css/media.css" rel="stylesheet">`);
      strs.push(`<script type="text/javascript" src="../vexlibs/${version}/vexflow-debug.js"></script>`);
      strs.push(`<script type="text/javascript" src="../js/${vexFile}.js"></script>`);
      strs.push(`<script type="text/javascript">`);
      strs.push(`document.addEventListener("DOMContentLoaded", function (event) {`);
      strs.push(`  main();`);
      strs.push(`});`);
      strs.push(`</script>`);
      strs.push(`</head>`);
      strs.push(`<body>`);
      strs.push('<div class="links"><a href="../index.html">Back to index</a></div>');
      strs.push(`<div id="smoo">`);
      strs.push(`</div>`);
      strs.push(`</body>`);
      strs.push(`</html>`);
      const htmlString = strs.join(`\n`);
      await fs.writeFile(`./html/${htmlFile}`,htmlString);
    }
  }
  ixLinks.push(`</ul></body></html>`);
  const indexString = ixLinks.join('\n');
  await fs.writeFile(`./index.html`,indexString);
}
main();
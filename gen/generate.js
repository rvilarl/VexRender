const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const readline = require("node:readline/promises");
const regScore = /@@ (.+)/;

async function main() {
  const dir = await fsp.readdir('./js');
  const vexFiles =[];
  const versions = [];
  const scoreNames = {};
  for (let filename of dir) {
    filename = filename.replace('.js', '');
    vexFiles.push(filename);
  }
  const libs = await fsp.readdir('./vexlibs');
  for (let dirname of libs) {
    versions.push(dirname);
  }
  for (var i = 0; i < vexFiles.length; ++i) {
    const vexFile = vexFiles[i];
    var rd = readline.createInterface({
      input: fs.createReadStream(`./js/${vexFile}.js`)
    });    
    for await (const ln of rd) {
      const matches = ln.match(regScore);
      if (matches && matches.length) {
        scoreNames[vexFile] = matches[1];
      }
    }
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
      strs.push(`  <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.js"></script>`);
      strs.push(`<script type="text/javascript">`);
      strs.push(`document.addEventListener("DOMContentLoaded", function (event) {`);
      strs.push(`  $('.changeLibraryButton').off('click').on('click', () => {$('.changeLibrary').toggleClass('hide');});`);
      strs.push(`  $('.changeScoreButton').off('click').on('click', () => {$('.changeScore').toggleClass('hide');});`);
      strs.push(`let timestamp = new Date().valueOf();`);
      strs.push(`  main();`);
      strs.push(`const delta = (new Date().valueOf()) - timestamp;`);
      strs.push(`$('#renderTime').text(delta.toString());`);
      strs.push(`});`);
      strs.push(`</script>`);
      strs.push(`</head>`);
      strs.push(`<body>`);
      strs.push('<div class="renderMenu">');
      strs.push('<div class="renderMenu1 links"><div><a href="../index.html">Back to index</a></div>');
      strs.push('<div class="renderTime">Render time: <span id="renderTime"></span></div></div>')
      strs.push(`<div class="renderMenu2"><div><span class="libMenu">Current Library:</span><span class="libText"> ${version} </span></div>`);
      strs.push(`<div><button class="changeLibraryButton"><span> Change </span><ul class="changeLibrary hide">`);
      versions.forEach((libVersion) => {
        if (libVersion !== version) {
          strs.push(`<li><a href="${vexFile}${libVersion}.html"> ${libVersion} </a> </li>`);
        }
      });
      strs.push('</ul></button></div></div>');
      strs.push(`<div class="renderMenu3"><div><span class="scoreMenu">Current Score: </span><span>${scoreNames[vexFile]}</span></div>`);
      strs.push(`<div><button class="changeScoreButton"><span> Change </span><ul class="changeScore hide">`);
      vexFiles.forEach((libScore) => {
        if (vexFile !== libScore) {
          strs.push(`<li><a href="${libScore}${version}.html"> ${scoreNames[libScore]} </a> </li>`);
        }
      });
      strs.push('</ul></button></div></div>');
      strs.push('</div>');
      strs.push(`<div id="smoo">`);
      strs.push(`</div>`);
      strs.push(`</body>`);
      strs.push(`</html>`);
      const htmlString = strs.join(`\n`);
      await fsp.writeFile(`./html/${htmlFile}`,htmlString);
    }
  }
  ixLinks.push(`</body></html>`);
  const indexString = ixLinks.join('\n');
  await fsp.writeFile(`./index.html`,indexString);
}
main();
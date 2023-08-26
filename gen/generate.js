const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const readline = require("node:readline/promises");
const regScore = /@@ (.+)/;

async function main() {
  let libDir = 'v4';
  const scripts = await fsp.readdir(`./js/${libDir}/`);
  const vexFiles =[];
  const v4versions = [];
  const v5versions = [];
  const scoreNames = {};
  // read in v4 js files, assume same exist in v5
  for (let filename of scripts) {
    filename = filename.replace('.js', '');
    vexFiles.push(filename);
  }
  // read in v4 libraries
  const v4libs = await fsp.readdir('./vexlibs/v4');
  for (let dirname of v4libs) {
    v4versions.push(dirname);
  }
  //v5 libraries
  const v5libs = await fsp.readdir('./vexlibs/v5');
  for (let dirname of v5libs) {
    v5versions.push(dirname);
  }
  // Pull some metadata about the score from the js file, for the UI
  for (var i = 0; i < vexFiles.length; ++i) {
    const vexFile = vexFiles[i];
    var rd = readline.createInterface({
      input: fs.createReadStream(`./js/v4/${vexFile}.js`)
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
  let libs = v4versions;
  let olibs = v5versions;
  const libdirs = ['v4', 'v5'];
  const vexLibVersions = [v4versions, v5versions];
  for (var k = 0; k < libdirs.length; ++k) {
    libVersion = libdirs[k];
    libs = vexLibVersions[k];
    olibs = vexLibVersions[(k + 1) % 2];
    for (var i = 0; i < vexFiles.length; ++i) {
      let vexFile = vexFiles[i];
      for (var j = 0; j < libs.length; ++j) {
        const libFile = libs[j];
        const strs = [];
        const htmlFile = `${vexFile}${libFile}.html`;
        ixLinks.push(`<li><a href="./html/${htmlFile}">${vexFile} using VexFlow library ${libFile}</a></li>`);
        strs.push('<!DOCTYPE HTML>');
        strs.push(`<html lang="en" xmlns="http://www.w3.org/1999/xhtml">`);
        strs.push(`<head>`);
        strs.push(`<meta http-equiv="Content-Type" content="text/html" charset="utf-8">`);
        strs.push(`<title>Render ${vexFile} using Vexflow release ${libVersion}/${libFile}</title>`);
        strs.push(`<link href="../css/media.css" rel="stylesheet">`);
        strs.push(`<script type="text/javascript" src="../vexlibs/${libVersion}/${libFile}/vexflow-debug.js"></script>`);
        strs.push(`<script type="text/javascript" src="../js/${libVersion}/${vexFile}.js"></script>`);
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
        strs.push(`<div class="renderMenu2"><div><span class="libMenu">Current Library:</span><span class="libText"> ${libFile} </span></div>`);
        strs.push(`<div><button class="changeLibraryButton"><span> Change </span><ul class="changeLibrary hide">`);
        libs.forEach((libVersion) => {
          if (libVersion !== libFile) {
            strs.push(`<li><a href="${vexFile}${libVersion}.html"> ${libVersion} </a> </li>`);
          }
        });
        olibs.forEach((libVersion) => {
          if (libVersion !== libFile) {
            strs.push(`<li><a href="${vexFile}${libVersion}.html"> ${libVersion} </a> </li>`);
          }
        });
        strs.push('</ul></button></div></div>');
        strs.push(`<div class="renderMenu3"><div><span class="scoreMenu">Current Score: </span><span>${scoreNames[vexFile]}</span></div>`);
        strs.push(`<div><button class="changeScoreButton"><span> Change </span><ul class="changeScore hide">`);
        vexFiles.forEach((libScore) => {
          if (vexFile !== libScore) {
            strs.push(`<li><a href="${libScore}${libFile}.html"> ${scoreNames[libScore]} </a> </li>`);
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
  }
  ixLinks.push(`</body></html>`);
  const indexString = ixLinks.join('\n');
  await fsp.writeFile(`./index.html`,indexString);
}
main();
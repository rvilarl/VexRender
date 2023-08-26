// @@ Well-Tempered Clavier p 3/6  by Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo6011246 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo60112v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60112v0ar = [];
const smo60073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60073.setAttribute('id', 'smo60073');
smo60112v0ar.push(smo60073);
const smo60074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60074.setAttribute('id', 'smo60074');
smo60112v0ar.push(smo60074);
const smo60075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60075.setAttribute('id', 'smo60075');
smo60112v0ar.push(smo60075);
const smo60076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60076.setAttribute('id', 'smo60076');
smo60112v0ar.push(smo60076);
const smo60077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60077.setAttribute('id', 'smo60077');
smo60112v0ar.push(smo60077);
const smo60078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60078.setAttribute('id', 'smo60078');
smo60112v0ar.push(smo60078);
const smo60079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60079.setAttribute('id', 'smo60079');
smo60112v0ar.push(smo60079);
const smo60080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60080.setAttribute('id', 'smo60080');
smo60112v0ar.push(smo60080);
const smo60081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60081.setAttribute('id', 'smo60081');
const smo600810acc = new VF.Accidental('#');
smo60081.addModifier(smo600810acc, 0);
smo60112v0ar.push(smo60081);
const smo60082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60082.setAttribute('id', 'smo60082');
smo60112v0ar.push(smo60082);
const smo60083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60083.setAttribute('id', 'smo60083');
smo60112v0ar.push(smo60083);
const smo60084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60084.setAttribute('id', 'smo60084');
smo60112v0ar.push(smo60084);
const smo60085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60085.setAttribute('id', 'smo60085');
smo60112v0ar.push(smo60085);
const smo60086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60086.setAttribute('id', 'smo60086');
smo60112v0ar.push(smo60086);
smo60112v0.addTickables(smo60112v0ar)
fmtsmo6011246.joinVoices([smo60112v0]);
const smo60112v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60112v1ar = [];
const smo60087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60087.setAttribute('id', 'smo60087');
smo60087.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60087);
const smo60088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60088.setAttribute('id', 'smo60088');
smo60088.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60088);
const smo60089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60089.setAttribute('id', 'smo60089');
smo60089.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60089);
const smo60090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60090.setAttribute('id', 'smo60090');
smo60090.setStyle({ fillStyle: "#115511" });
const smo600900acc = new VF.Accidental('#');
smo60090.addModifier(smo600900acc, 0);
smo60112v1ar.push(smo60090);
const smo60091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60091.setAttribute('id', 'smo60091');
smo60091.setStyle({ fillStyle: "#115511" });
const smo600910acc = new VF.Accidental('#');
smo60091.addModifier(smo600910acc, 0);
smo60112v1ar.push(smo60091);
const smo60092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60092.setAttribute('id', 'smo60092');
smo60092.setStyle({ fillStyle: "#115511" });
const smo600920acc = new VF.Accidental('n');
smo60092.addModifier(smo600920acc, 0);
smo60112v1ar.push(smo60092);
const smo60093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60093.setAttribute('id', 'smo60093');
smo60093.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60093);
const smo60094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60094.setAttribute('id', 'smo60094');
smo60094.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60094);
const smo60095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60095.setAttribute('id', 'smo60095');
smo60095.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60095);
const smo60096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60096.setAttribute('id', 'smo60096');
smo60096.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60096);
const smo60097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60097.setAttribute('id', 'smo60097');
smo60097.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60097);
const smo60098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60098.setAttribute('id', 'smo60098');
smo60098.setStyle({ fillStyle: "#115511" });
smo60112v1ar.push(smo60098);
smo60112v1.addTickables(smo60112v1ar)
fmtsmo6011246.joinVoices([smo60112v1]);
const fmtsmo6516546 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo65165v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65165v0ar = [];
const smo65137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65137.setAttribute('id', 'smo65137');
smo65165v0ar.push(smo65137);
const smo65138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65138.setAttribute('id', 'smo65138');
smo65165v0ar.push(smo65138);
const smo65139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65139.setAttribute('id', 'smo65139');
const smo651390acc = new VF.Accidental('#');
smo65139.addModifier(smo651390acc, 0);
smo65165v0ar.push(smo65139);
const smo65140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65140.setAttribute('id', 'smo65140');
const smo651400acc = new VF.Accidental('#');
smo65140.addModifier(smo651400acc, 0);
smo65165v0ar.push(smo65140);
const smo65141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65141.setAttribute('id', 'smo65141');
smo65141.addModifier(new VF.Dot(), 0);
smo65165v0ar.push(smo65141);
const smo65142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65142.setAttribute('id', 'smo65142');
smo65165v0ar.push(smo65142);
const smo65143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65143.setAttribute('id', 'smo65143');
smo65165v0ar.push(smo65143);
const smo65144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65144.setAttribute('id', 'smo65144');
smo65165v0ar.push(smo65144);
const smo65145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65145.setAttribute('id', 'smo65145');
smo65165v0ar.push(smo65145);
smo65165v0.addTickables(smo65165v0ar)
fmtsmo6516546.joinVoices([smo65165v0]);
const smo65165v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65165v1ar = [];
const smo65146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65146.setAttribute('id', 'smo65146');
smo65146.setStyle({ fillStyle: "#115511" });
smo65165v1ar.push(smo65146);
const smo65147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65147.setAttribute('id', 'smo65147');
smo65147.setStyle({ fillStyle: "#115511" });
smo65165v1ar.push(smo65147);
const smo65148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65148.setAttribute('id', 'smo65148');
smo65148.setStyle({ fillStyle: "#115511" });
smo65165v1ar.push(smo65148);
const smo65149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65149.setAttribute('id', 'smo65149');
smo65149.setStyle({ fillStyle: "#115511" });
smo65165v1ar.push(smo65149);
const smo65150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65150.setAttribute('id', 'smo65150');
smo65150.setStyle({ fillStyle: "#115511" });
const smo651500acc = new VF.Accidental('n');
smo65150.addModifier(smo651500acc, 0);
smo65165v1ar.push(smo65150);
const smo65151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65151.setAttribute('id', 'smo65151');
smo65151.setStyle({ fillStyle: "#115511" });
smo65165v1ar.push(smo65151);
smo65165v1.addTickables(smo65165v1ar)
fmtsmo6516546.joinVoices([smo65165v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68559 = smo60073.getStemDirection();
smo60073.setStemDirection(dirsmo68559);
smo60074.setStemDirection(dirsmo68559);
smo60075.setStemDirection(dirsmo68559);
const smo68559 = new VF.Beam([smo60073,smo60074,smo60075]);
const dirsmo68560 = smo60076.getStemDirection();
smo60076.setStemDirection(dirsmo68560);
smo60077.setStemDirection(dirsmo68560);
smo60078.setStemDirection(dirsmo68560);
smo60079.setStemDirection(dirsmo68560);
const smo68560 = new VF.Beam([smo60076,smo60077,smo60078,smo60079]);
const dirsmo68561 = smo60080.getStemDirection();
smo60080.setStemDirection(dirsmo68561);
smo60081.setStemDirection(dirsmo68561);
smo60082.setStemDirection(dirsmo68561);
smo60083.setStemDirection(dirsmo68561);
const smo68561 = new VF.Beam([smo60080,smo60081,smo60082,smo60083]);
const dirsmo68562 = smo60084.getStemDirection();
smo60084.setStemDirection(dirsmo68562);
smo60085.setStemDirection(dirsmo68562);
smo60086.setStemDirection(dirsmo68562);
const smo68562 = new VF.Beam([smo60084,smo60085,smo60086]);
const dirsmo68563 = smo60087.getStemDirection();
smo60087.setStemDirection(dirsmo68563);
smo60088.setStemDirection(dirsmo68563);
smo60089.setStemDirection(dirsmo68563);
smo60090.setStemDirection(dirsmo68563);
const smo68563 = new VF.Beam([smo60087,smo60088,smo60089,smo60090]);
const dirsmo68564 = smo60091.getStemDirection();
smo60091.setStemDirection(dirsmo68564);
smo60092.setStemDirection(dirsmo68564);
const smo68564 = new VF.Beam([smo60091,smo60092]);
const dirsmo68565 = smo60093.getStemDirection();
smo60093.setStemDirection(dirsmo68565);
smo60094.setStemDirection(dirsmo68565);
const smo68565 = new VF.Beam([smo60093,smo60094]);
const dirsmo68566 = smo60095.getStemDirection();
smo60095.setStemDirection(dirsmo68566);
smo60096.setStemDirection(dirsmo68566);
smo60097.setStemDirection(dirsmo68566);
smo60098.setStemDirection(dirsmo68566);
const smo68566 = new VF.Beam([smo60095,smo60096,smo60097,smo60098]);
const dirsmo68569 = smo65138.getStemDirection();
smo65138.setStemDirection(dirsmo68569);
smo65139.setStemDirection(dirsmo68569);
smo65140.setStemDirection(dirsmo68569);
const smo68569 = new VF.Beam([smo65138,smo65139,smo65140]);
const dirsmo68570 = smo65141.getStemDirection();
smo65141.setStemDirection(dirsmo68570);
smo65142.setStemDirection(dirsmo68570);
smo65143.setStemDirection(dirsmo68570);
const smo68570 = new VF.Beam([smo65141,smo65142,smo65143]);
const dirsmo68571 = smo65144.getStemDirection();
smo65144.setStemDirection(dirsmo68571);
smo65145.setStemDirection(dirsmo68571);
const smo68571 = new VF.Beam([smo65144,smo65145]);
const dirsmo68572 = smo65148.getStemDirection();
smo65148.setStemDirection(dirsmo68572);
smo65149.setStemDirection(dirsmo68572);
const smo68572 = new VF.Beam([smo65148,smo65149]);
 
// formatting measures in staff group smo57447
fmtsmo6011246.format([smo60112v0,smo60112v1,smo65165v0,smo65165v1], 518);
const stavesmo60112 = new VF.Stave(90, 304, 576);
stavesmo60112.setAttribute('id', 'stavesmo60112');
stavesmo60112.setBegBarType(1);
stavesmo60112.addClef('treble');
stavesmo60112.setContext(context);
stavesmo60112.draw();
smo60112v0.draw(context, stavesmo60112);
smo60112v1.draw(context, stavesmo60112);
smo68559.setContext(context);
smo68559.draw();
smo68560.setContext(context);
smo68560.draw();
smo68561.setContext(context);
smo68561.draw();
smo68562.setContext(context);
smo68562.draw();
smo68563.setContext(context);
smo68563.draw();
smo68564.setContext(context);
smo68564.draw();
smo68565.setContext(context);
smo68565.draw();
smo68566.setContext(context);
smo68566.draw();
const stavesmo65165 = new VF.Stave(90, 438, 576);
stavesmo65165.setAttribute('id', 'stavesmo65165');
stavesmo65165.setBegBarType(1);
stavesmo65165.addClef('bass');
stavesmo65165.setContext(context);
stavesmo65165.draw();
smo65165v0.draw(context, stavesmo65165);
smo65165v1.draw(context, stavesmo65165);
smo68569.setContext(context);
smo68569.draw();
smo68570.setContext(context);
smo68570.draw();
smo68571.setContext(context);
smo68571.draw();
smo68572.setContext(context);
smo68572.draw();
const leftsmo57447stavesmo601121 = new VF.StaveConnector(stavesmo60112, stavesmo65165).setType(3);
leftsmo57447stavesmo601121.setContext(context).draw();
const fmtsmo6014747 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo60147v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60147v0ar = [];
const smo60113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60113.setAttribute('id', 'smo60113');
smo60147v0ar.push(smo60113);
const smo60114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60114.setAttribute('id', 'smo60114');
smo60147v0ar.push(smo60114);
const smo60115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60115.setAttribute('id', 'smo60115');
smo60147v0ar.push(smo60115);
const smo60116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60116.setAttribute('id', 'smo60116');
smo60147v0ar.push(smo60116);
const smo60117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60117.setAttribute('id', 'smo60117');
smo60147v0ar.push(smo60117);
const smo60118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60118.setAttribute('id', 'smo60118');
smo60147v0ar.push(smo60118);
const smo60119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60119.setAttribute('id', 'smo60119');
smo60147v0ar.push(smo60119);
const smo60120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60120.setAttribute('id', 'smo60120');
smo60120.addModifier(new VF.Dot(), 0);
const smo60121 = new VF.Ornament('mordent_inverted');
smo60120.addModifier(smo60121, 0);
smo60147v0ar.push(smo60120);
const smo60122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60122.setAttribute('id', 'smo60122');
smo60147v0ar.push(smo60122);
smo60147v0.addTickables(smo60147v0ar)
fmtsmo6014747.joinVoices([smo60147v0]);
const smo60147v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60147v1ar = [];
const smo60123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60123.setAttribute('id', 'smo60123');
smo60123.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60123);
const smo60124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60124.setAttribute('id', 'smo60124');
smo60124.setStyle({ fillStyle: "#115511" });
const smo601240acc = new VF.Accidental('#');
smo60124.addModifier(smo601240acc, 0);
smo60147v1ar.push(smo60124);
const smo60125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60125.setAttribute('id', 'smo60125');
smo60125.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60125);
const smo60126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60126.setAttribute('id', 'smo60126');
smo60126.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60126);
const smo60127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60127.setAttribute('id', 'smo60127');
smo60127.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60127);
const smo60128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60128.setAttribute('id', 'smo60128');
smo60128.setStyle({ fillStyle: "#115511" });
const smo601280acc = new VF.Accidental('#');
smo60128.addModifier(smo601280acc, 0);
smo60147v1ar.push(smo60128);
const smo60129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60129.setAttribute('id', 'smo60129');
smo60129.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60129);
const smo60130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60130.setAttribute('id', 'smo60130');
smo60130.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60130);
const smo60131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60131.setAttribute('id', 'smo60131');
smo60131.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60131);
const smo60132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo60132.setAttribute('id', 'smo60132');
smo60132.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60132);
const smo60133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo60133.setAttribute('id', 'smo60133');
smo60133.setStyle({ fillStyle: "#115511" });
smo60147v1ar.push(smo60133);
smo60147v1.addTickables(smo60147v1ar)
fmtsmo6014747.joinVoices([smo60147v1]);
const fmtsmo6519547 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo65195v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65195v0ar = [];
const smo65166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65166.setAttribute('id', 'smo65166');
const smo651660acc = new VF.Accidental('#');
smo65166.addModifier(smo651660acc, 0);
smo65195v0ar.push(smo65166);
const smo65167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65167.setAttribute('id', 'smo65167');
smo65195v0ar.push(smo65167);
const smo65168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65168.setAttribute('id', 'smo65168');
smo65195v0ar.push(smo65168);
const smo65169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65169.setAttribute('id', 'smo65169');
smo65195v0ar.push(smo65169);
const smo65170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65170.setAttribute('id', 'smo65170');
smo65195v0ar.push(smo65170);
const smo65171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65171.setAttribute('id', 'smo65171');
smo65195v0ar.push(smo65171);
const smo65172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65172.setAttribute('id', 'smo65172');
const smo651720acc = new VF.Accidental('#');
smo65172.addModifier(smo651720acc, 0);
smo65195v0ar.push(smo65172);
const smo65173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65173.setAttribute('id', 'smo65173');
smo65195v0ar.push(smo65173);
const smo65174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo65174.setAttribute('id', 'smo65174');
smo65195v0ar.push(smo65174);
smo65195v0.addTickables(smo65195v0ar)
fmtsmo6519547.joinVoices([smo65195v0]);
const smo65195v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65195v1ar = [];
const smo65175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65175.setAttribute('id', 'smo65175');
smo65175.setStyle({ fillStyle: "#115511" });
smo65195v1ar.push(smo65175);
const smo65176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65176.setAttribute('id', 'smo65176');
smo65176.setStyle({ fillStyle: "#115511" });
smo65195v1ar.push(smo65176);
const smo65177 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65177.setAttribute('id', 'smo65177');
smo65177.setStyle({ fillStyle: "#115511" });
smo65195v1ar.push(smo65177);
const smo65178 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65178.setAttribute('id', 'smo65178');
smo65178.setStyle({ fillStyle: "#115511" });
const smo651780acc = new VF.Accidental('n');
smo65178.addModifier(smo651780acc, 0);
smo65195v1ar.push(smo65178);
const smo65179 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65179.setAttribute('id', 'smo65179');
smo65179.setStyle({ fillStyle: "#115511" });
smo65195v1ar.push(smo65179);
const smo65180 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65180.setAttribute('id', 'smo65180');
smo65180.setStyle({ fillStyle: "#115511" });
smo65195v1ar.push(smo65180);
const smo65181 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65181.setAttribute('id', 'smo65181');
smo65181.setStyle({ fillStyle: "#115511" });
smo65195v1ar.push(smo65181);
smo65195v1.addTickables(smo65195v1ar)
fmtsmo6519547.joinVoices([smo65195v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68575 = smo60113.getStemDirection();
smo60113.setStemDirection(dirsmo68575);
smo60114.setStemDirection(dirsmo68575);
smo60115.setStemDirection(dirsmo68575);
smo60116.setStemDirection(dirsmo68575);
const smo68575 = new VF.Beam([smo60113,smo60114,smo60115,smo60116]);
const dirsmo68576 = smo60117.getStemDirection();
smo60117.setStemDirection(dirsmo68576);
smo60118.setStemDirection(dirsmo68576);
smo60119.setStemDirection(dirsmo68576);
const smo68576 = new VF.Beam([smo60117,smo60118,smo60119]);
const dirsmo68577 = smo60120.getStemDirection();
smo60120.setStemDirection(dirsmo68577);
smo60122.setStemDirection(dirsmo68577);
const smo68577 = new VF.Beam([smo60120,smo60122]);
const dirsmo68578 = smo60123.getStemDirection();
smo60123.setStemDirection(dirsmo68578);
smo60124.setStemDirection(dirsmo68578);
smo60125.setStemDirection(dirsmo68578);
smo60126.setStemDirection(dirsmo68578);
const smo68578 = new VF.Beam([smo60123,smo60124,smo60125,smo60126]);
const dirsmo68579 = smo60127.getStemDirection();
smo60127.setStemDirection(dirsmo68579);
smo60128.setStemDirection(dirsmo68579);
smo60129.setStemDirection(dirsmo68579);
smo60130.setStemDirection(dirsmo68579);
const smo68579 = new VF.Beam([smo60127,smo60128,smo60129,smo60130]);
const dirsmo68582 = smo65166.getStemDirection();
smo65166.setStemDirection(dirsmo68582);
smo65167.setStemDirection(dirsmo68582);
const smo68582 = new VF.Beam([smo65166,smo65167]);
const dirsmo68583 = smo65168.getStemDirection();
smo65168.setStemDirection(dirsmo68583);
smo65169.setStemDirection(dirsmo68583);
smo65170.setStemDirection(dirsmo68583);
smo65171.setStemDirection(dirsmo68583);
const smo68583 = new VF.Beam([smo65168,smo65169,smo65170,smo65171]);
const dirsmo68584 = smo65177.getStemDirection();
smo65177.setStemDirection(dirsmo68584);
smo65178.setStemDirection(dirsmo68584);
const smo68584 = new VF.Beam([smo65177,smo65178]);
const dirsmo68585 = smo65179.getStemDirection();
smo65179.setStemDirection(dirsmo68585);
smo65180.setStemDirection(dirsmo68585);
const smo68585 = new VF.Beam([smo65179,smo65180]);
 
// formatting measures in staff group smo57447
fmtsmo6014747.format([smo60147v0,smo60147v1,smo65195v0,smo65195v1], 419);
const stavesmo60147 = new VF.Stave(666, 304, 433);
stavesmo60147.setAttribute('id', 'stavesmo60147');
stavesmo60147.setBegBarType(VF.Barline.type.NONE);
stavesmo60147.setContext(context);
stavesmo60147.draw();
smo60147v0.draw(context, stavesmo60147);
smo60147v1.draw(context, stavesmo60147);
smo68575.setContext(context);
smo68575.draw();
smo68576.setContext(context);
smo68576.draw();
smo68577.setContext(context);
smo68577.draw();
smo68578.setContext(context);
smo68578.draw();
smo68579.setContext(context);
smo68579.draw();
const stavesmo65195 = new VF.Stave(666, 438, 433);
stavesmo65195.setAttribute('id', 'stavesmo65195');
stavesmo65195.setBegBarType(VF.Barline.type.NONE);
stavesmo65195.setContext(context);
stavesmo65195.draw();
smo65195v0.draw(context, stavesmo65195);
smo65195v1.draw(context, stavesmo65195);
smo68582.setContext(context);
smo68582.draw();
smo68583.setContext(context);
smo68583.draw();
smo68584.setContext(context);
smo68584.draw();
smo68585.setContext(context);
smo68585.draw();
const fmtsmo6017748 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo60177v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60177v0ar = [];
const smo60148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60148.setAttribute('id', 'smo60148');
smo60177v0ar.push(smo60148);
const smo60149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60149.setAttribute('id', 'smo60149');
smo60177v0ar.push(smo60149);
const smo60150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60150.setAttribute('id', 'smo60150');
smo60177v0ar.push(smo60150);
smo60177v0.addTickables(smo60177v0ar)
fmtsmo6017748.joinVoices([smo60177v0]);
const smo60177v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60177v1ar = [];
const smo60151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo60151.setAttribute('id', 'smo60151');
smo60151.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60151);
const smo60152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60152.setAttribute('id', 'smo60152');
smo60152.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60152);
const smo60153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60153.setAttribute('id', 'smo60153');
smo60153.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60153);
const smo60154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60154.setAttribute('id', 'smo60154');
smo60154.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60154);
const smo60155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60155.setAttribute('id', 'smo60155');
smo60155.setStyle({ fillStyle: "#115511" });
smo60155.addModifier(new VF.Dot(), 0);
smo60177v1ar.push(smo60155);
const smo60156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60156.setAttribute('id', 'smo60156');
smo60156.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60156);
const smo60157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60157.setAttribute('id', 'smo60157');
smo60157.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60157);
const smo60158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60158.setAttribute('id', 'smo60158');
smo60158.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60158);
const smo60159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60159.setAttribute('id', 'smo60159');
smo60159.setStyle({ fillStyle: "#115511" });
smo60177v1ar.push(smo60159);
smo60177v1.addTickables(smo60177v1ar)
fmtsmo6017748.joinVoices([smo60177v1]);
const smo60177v2 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60177v2ar = [];
const smo60160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60160.setAttribute('id', 'smo60160');
smo60160.setStyle({ fillStyle: '#aaaaaa7f' });
smo60160.addModifier(new VF.Dot(), 0);
smo60177v2ar.push(smo60160);
const smo60161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60161.setAttribute('id', 'smo60161');
smo60161.setStyle({ fillStyle: "#115511" });
smo60161.addModifier(new VF.Dot(), 0);
smo60177v2ar.push(smo60161);
const smo60162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60162.setAttribute('id', 'smo60162');
smo60162.setStyle({ fillStyle: "#115511" });
smo60177v2ar.push(smo60162);
const smo60163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60163.setAttribute('id', 'smo60163');
smo60163.setStyle({ fillStyle: "#115511" });
smo60177v2ar.push(smo60163);
smo60177v2.addTickables(smo60177v2ar)
fmtsmo6017748.joinVoices([smo60177v2]);
const fmtsmo6521848 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo65218v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65218v0ar = [];
const smo65196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65196.setAttribute('id', 'smo65196');
smo65218v0ar.push(smo65196);
const smo65197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65197.setAttribute('id', 'smo65197');
smo65218v0ar.push(smo65197);
const smo65198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65198.setAttribute('id', 'smo65198');
smo65218v0ar.push(smo65198);
const smo65199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65199.setAttribute('id', 'smo65199');
smo65218v0ar.push(smo65199);
const smo65200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65200.setAttribute('id', 'smo65200');
smo65218v0ar.push(smo65200);
const smo65201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65201.setAttribute('id', 'smo65201');
smo65201.setStyle({ fillStyle: '#aaaaaa7f' });
smo65218v0ar.push(smo65201);
smo65218v0.addTickables(smo65218v0ar)
fmtsmo6521848.joinVoices([smo65218v0]);
const smo65218v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65218v1ar = [];
const smo65202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65202.setAttribute('id', 'smo65202');
smo65202.setStyle({ fillStyle: "#115511" });
smo65218v1ar.push(smo65202);
const smo65203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65203.setAttribute('id', 'smo65203');
smo65203.setStyle({ fillStyle: "#115511" });
smo65218v1ar.push(smo65203);
const smo65204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo65204.setAttribute('id', 'smo65204');
smo65204.setStyle({ fillStyle: "#115511" });
smo65218v1ar.push(smo65204);
smo65218v1.addTickables(smo65218v1ar)
fmtsmo6521848.joinVoices([smo65218v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68588 = smo60152.getStemDirection();
smo60152.setStemDirection(dirsmo68588);
smo60153.setStemDirection(dirsmo68588);
smo60154.setStemDirection(dirsmo68588);
const smo68588 = new VF.Beam([smo60152,smo60153,smo60154]);
const dirsmo68589 = smo60155.getStemDirection();
smo60155.setStemDirection(dirsmo68589);
smo60156.setStemDirection(dirsmo68589);
smo60157.setStemDirection(dirsmo68589);
const smo68589 = new VF.Beam([smo60155,smo60156,smo60157]);
const dirsmo68590 = smo60158.getStemDirection();
smo60158.setStemDirection(dirsmo68590);
smo60159.setStemDirection(dirsmo68590);
const smo68590 = new VF.Beam([smo60158,smo60159]);
const dirsmo68591 = smo60161.getStemDirection();
smo60161.setStemDirection(dirsmo68591);
smo60162.setStemDirection(dirsmo68591);
smo60163.setStemDirection(dirsmo68591);
const smo68591 = new VF.Beam([smo60161,smo60162,smo60163]);
const dirsmo68594 = smo65198.getStemDirection();
smo65198.setStemDirection(dirsmo68594);
smo65199.setStemDirection(dirsmo68594);
const smo68594 = new VF.Beam([smo65198,smo65199]);
 
// formatting measures in staff group smo57447
fmtsmo6017748.format([smo60177v0,smo60177v1,smo60177v2,smo65218v0,smo65218v1], 332);
const stavesmo60177 = new VF.Stave(1099, 304, 346);
stavesmo60177.setAttribute('id', 'stavesmo60177');
stavesmo60177.setBegBarType(VF.Barline.type.NONE);
stavesmo60177.setContext(context);
stavesmo60177.draw();
smo60177v0.draw(context, stavesmo60177);
smo60177v1.draw(context, stavesmo60177);
smo60177v2.draw(context, stavesmo60177);
smo68588.setContext(context);
smo68588.draw();
smo68589.setContext(context);
smo68589.draw();
smo68590.setContext(context);
smo68590.draw();
smo68591.setContext(context);
smo68591.draw();
const stavesmo65218 = new VF.Stave(1099, 438, 346);
stavesmo65218.setAttribute('id', 'stavesmo65218');
stavesmo65218.setBegBarType(VF.Barline.type.NONE);
stavesmo65218.setContext(context);
stavesmo65218.draw();
smo65218v0.draw(context, stavesmo65218);
smo65218v1.draw(context, stavesmo65218);
smo68594.setContext(context);
smo68594.draw();
const fmtsmo6020649 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo60206v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60206v0ar = [];
const smo60178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60178.setAttribute('id', 'smo60178');
smo60206v0ar.push(smo60178);
const smo60179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60179.setAttribute('id', 'smo60179');
smo60206v0ar.push(smo60179);
const smo60180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60180.setAttribute('id', 'smo60180');
smo60206v0ar.push(smo60180);
const smo60181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60181.setAttribute('id', 'smo60181');
smo60206v0ar.push(smo60181);
const smo60182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60182.setAttribute('id', 'smo60182');
smo60206v0ar.push(smo60182);
smo60206v0.addTickables(smo60206v0ar)
fmtsmo6020649.joinVoices([smo60206v0]);
const smo60206v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60206v1ar = [];
const smo60183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60183.setAttribute('id', 'smo60183');
smo60183.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60183);
const smo60184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60184.setAttribute('id', 'smo60184');
smo60184.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60184);
const smo60185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60185.setAttribute('id', 'smo60185');
smo60185.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60185);
const smo60186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60186.setAttribute('id', 'smo60186');
smo60186.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60186);
const smo60187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60187.setAttribute('id', 'smo60187');
smo60187.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60187);
const smo60188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60188.setAttribute('id', 'smo60188');
smo60188.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60188);
const smo60189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60189.setAttribute('id', 'smo60189');
smo60189.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60189);
const smo60190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60190.setAttribute('id', 'smo60190');
smo60190.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60190);
const smo60191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60191.setAttribute('id', 'smo60191');
smo60191.setStyle({ fillStyle: "#115511" });
const smo601910acc = new VF.Accidental('#');
smo60191.addModifier(smo601910acc, 0);
smo60206v1ar.push(smo60191);
const smo60192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60192.setAttribute('id', 'smo60192');
smo60192.setStyle({ fillStyle: "#115511" });
smo60206v1ar.push(smo60192);
smo60206v1.addTickables(smo60206v1ar)
fmtsmo6020649.joinVoices([smo60206v1]);
const fmtsmo6524849 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo65248v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65248v0ar = [];
const smo65219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo65219.setAttribute('id', 'smo65219');
smo65248v0ar.push(smo65219);
const smo65220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo65220.setAttribute('id', 'smo65220');
smo65248v0ar.push(smo65220);
const smo65221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo65221.setAttribute('id', 'smo65221');
smo65248v0ar.push(smo65221);
const smo65222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65222.setAttribute('id', 'smo65222');
smo65248v0ar.push(smo65222);
const smo65223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65223.setAttribute('id', 'smo65223');
smo65248v0ar.push(smo65223);
const smo65224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65224.setAttribute('id', 'smo65224');
smo65248v0ar.push(smo65224);
const smo65225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65225.setAttribute('id', 'smo65225');
smo65248v0ar.push(smo65225);
smo65248v0.addTickables(smo65248v0ar)
fmtsmo6524849.joinVoices([smo65248v0]);
const smo65248v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65248v1ar = [];
const smo65226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65226.setAttribute('id', 'smo65226');
smo65226.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65226);
const smo65227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65227.setAttribute('id', 'smo65227');
smo65227.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65227);
const smo65228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65228.setAttribute('id', 'smo65228');
smo65228.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65228);
const smo65229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65229.setAttribute('id', 'smo65229');
smo65229.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65229);
const smo65230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65230.setAttribute('id', 'smo65230');
smo65230.setStyle({ fillStyle: "#115511" });
smo65230.addModifier(new VF.Dot(), 0);
smo65248v1ar.push(smo65230);
const smo65231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65231.setAttribute('id', 'smo65231');
smo65231.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65231);
const smo65232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65232.setAttribute('id', 'smo65232');
smo65232.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65232);
const smo65233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65233.setAttribute('id', 'smo65233');
smo65233.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65233);
const smo65234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65234.setAttribute('id', 'smo65234');
smo65234.setStyle({ fillStyle: "#115511" });
smo65248v1ar.push(smo65234);
smo65248v1.addTickables(smo65248v1ar)
fmtsmo6524849.joinVoices([smo65248v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68597 = smo60180.getStemDirection();
smo60180.setStemDirection(dirsmo68597);
smo60181.setStemDirection(dirsmo68597);
smo60182.setStemDirection(dirsmo68597);
const smo68597 = new VF.Beam([smo60180,smo60181,smo60182]);
const dirsmo68598 = smo60183.getStemDirection();
smo60183.setStemDirection(dirsmo68598);
smo60184.setStemDirection(dirsmo68598);
const smo68598 = new VF.Beam([smo60183,smo60184]);
const dirsmo68599 = smo60185.getStemDirection();
smo60185.setStemDirection(dirsmo68599);
smo60186.setStemDirection(dirsmo68599);
smo60187.setStemDirection(dirsmo68599);
smo60188.setStemDirection(dirsmo68599);
const smo68599 = new VF.Beam([smo60185,smo60186,smo60187,smo60188]);
const dirsmo68600 = smo60189.getStemDirection();
smo60189.setStemDirection(dirsmo68600);
smo60190.setStemDirection(dirsmo68600);
smo60191.setStemDirection(dirsmo68600);
smo60192.setStemDirection(dirsmo68600);
const smo68600 = new VF.Beam([smo60189,smo60190,smo60191,smo60192]);
const dirsmo68603 = smo65219.getStemDirection();
smo65219.setStemDirection(dirsmo68603);
smo65220.setStemDirection(dirsmo68603);
const smo68603 = new VF.Beam([smo65219,smo65220]);
const dirsmo68604 = smo65221.getStemDirection();
smo65221.setStemDirection(dirsmo68604);
smo65222.setStemDirection(dirsmo68604);
const smo68604 = new VF.Beam([smo65221,smo65222]);
const dirsmo68605 = smo65223.getStemDirection();
smo65223.setStemDirection(dirsmo68605);
smo65224.setStemDirection(dirsmo68605);
const smo68605 = new VF.Beam([smo65223,smo65224]);
const dirsmo68606 = smo65227.getStemDirection();
smo65227.setStemDirection(dirsmo68606);
smo65228.setStemDirection(dirsmo68606);
smo65229.setStemDirection(dirsmo68606);
const smo68606 = new VF.Beam([smo65227,smo65228,smo65229]);
const dirsmo68607 = smo65230.getStemDirection();
smo65230.setStemDirection(dirsmo68607);
smo65231.setStemDirection(dirsmo68607);
smo65232.setStemDirection(dirsmo68607);
const smo68607 = new VF.Beam([smo65230,smo65231,smo65232]);
const dirsmo68608 = smo65233.getStemDirection();
smo65233.setStemDirection(dirsmo68608);
smo65234.setStemDirection(dirsmo68608);
const smo68608 = new VF.Beam([smo65233,smo65234]);
 
// formatting measures in staff group smo57447
fmtsmo6020649.format([smo60206v0,smo60206v1,smo65248v0,smo65248v1], 315);
const stavesmo60206 = new VF.Stave(1445, 304, 363);
stavesmo60206.setAttribute('id', 'stavesmo60206');
stavesmo60206.setBegBarType(VF.Barline.type.NONE);
stavesmo60206.setContext(context);
stavesmo60206.draw();
smo60206v0.draw(context, stavesmo60206);
smo60206v1.draw(context, stavesmo60206);
smo68597.setContext(context);
smo68597.draw();
smo68598.setContext(context);
smo68598.draw();
smo68599.setContext(context);
smo68599.draw();
smo68600.setContext(context);
smo68600.draw();
const stavesmo65248 = new VF.Stave(1445, 438, 363);
stavesmo65248.setAttribute('id', 'stavesmo65248');
stavesmo65248.setBegBarType(VF.Barline.type.NONE);
stavesmo65248.addClef('treble');
stavesmo65248.setContext(context);
stavesmo65248.draw();
smo65248v0.draw(context, stavesmo65248);
smo65248v1.draw(context, stavesmo65248);
smo68603.setContext(context);
smo68603.draw();
smo68604.setContext(context);
smo68604.draw();
smo68605.setContext(context);
smo68605.draw();
smo68606.setContext(context);
smo68606.draw();
smo68607.setContext(context);
smo68607.draw();
smo68608.setContext(context);
smo68608.draw();
const rightsmo57447stavesmo602061 = new VF.StaveConnector(stavesmo60206, stavesmo65248).setType(0);
rightsmo57447stavesmo602061.setContext(context).draw();
const fmtsmo6023850 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo60238v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60238v0ar = [];
const smo60207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60207.setAttribute('id', 'smo60207');
smo60207.addModifier(new VF.Dot(), 0);
smo60238v0ar.push(smo60207);
const smo60208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60208.setAttribute('id', 'smo60208');
smo60238v0ar.push(smo60208);
const smo60209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60209.setAttribute('id', 'smo60209');
smo60238v0ar.push(smo60209);
const smo60210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60210.setAttribute('id', 'smo60210');
smo60238v0ar.push(smo60210);
const smo60211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60211.setAttribute('id', 'smo60211');
smo60238v0ar.push(smo60211);
const smo60212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60212.setAttribute('id', 'smo60212');
smo60238v0ar.push(smo60212);
const smo60213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60213.setAttribute('id', 'smo60213');
smo60238v0ar.push(smo60213);
const smo60214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60214.setAttribute('id', 'smo60214');
smo60214.addModifier(new VF.Dot(), 0);
smo60238v0ar.push(smo60214);
const smo60215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60215.setAttribute('id', 'smo60215');
smo60238v0ar.push(smo60215);
const smo60216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60216.setAttribute('id', 'smo60216');
smo60238v0ar.push(smo60216);
smo60238v0.addTickables(smo60238v0ar)
fmtsmo6023850.joinVoices([smo60238v0]);
const smo60238v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60238v1ar = [];
const smo60217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60217.setAttribute('id', 'smo60217');
smo60217.setStyle({ fillStyle: "#115511" });
smo60238v1ar.push(smo60217);
const smo60218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60218.setAttribute('id', 'smo60218');
smo60218.setStyle({ fillStyle: "#115511" });
const smo602180acc = new VF.Accidental('#');
smo60218.addModifier(smo602180acc, 0);
smo60238v1ar.push(smo60218);
const smo60219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo60219.setAttribute('id', 'smo60219');
smo60219.setStyle({ fillStyle: "#115511" });
const smo602190acc = new VF.Accidental('#');
smo60219.addModifier(smo602190acc, 0);
smo60238v1ar.push(smo60219);
const smo60220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60220.setAttribute('id', 'smo60220');
smo60220.setStyle({ fillStyle: "#115511" });
smo60238v1ar.push(smo60220);
const smo60221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60221.setAttribute('id', 'smo60221');
smo60221.setStyle({ fillStyle: "#115511" });
smo60238v1ar.push(smo60221);
const smo60222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60222.setAttribute('id', 'smo60222');
smo60222.setStyle({ fillStyle: "#115511" });
const smo602220acc = new VF.Accidental('n');
smo60222.addModifier(smo602220acc, 0);
smo60238v1ar.push(smo60222);
const smo60223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60223.setAttribute('id', 'smo60223');
smo60223.setStyle({ fillStyle: "#115511" });
smo60238v1ar.push(smo60223);
const smo60224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60224.setAttribute('id', 'smo60224');
smo60224.setStyle({ fillStyle: "#115511" });
smo60238v1ar.push(smo60224);
smo60238v1.addTickables(smo60238v1ar)
fmtsmo6023850.joinVoices([smo60238v1]);
const fmtsmo6527850 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo65278v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65278v0ar = [];
const smo65249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo65249.setAttribute('id', 'smo65249');
smo65278v0ar.push(smo65249);
const smo65250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65250.setAttribute('id', 'smo65250');
smo65278v0ar.push(smo65250);
const smo65251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo65251.setAttribute('id', 'smo65251');
smo65278v0ar.push(smo65251);
const smo65252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65252.setAttribute('id', 'smo65252');
smo65278v0ar.push(smo65252);
const smo65253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65253.setAttribute('id', 'smo65253');
smo65278v0ar.push(smo65253);
const smo65254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65254.setAttribute('id', 'smo65254');
smo65278v0ar.push(smo65254);
smo65278v0.addTickables(smo65278v0ar)
fmtsmo6527850.joinVoices([smo65278v0]);
const smo65278v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65278v1ar = [];
const smo65255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65255.setAttribute('id', 'smo65255');
smo65255.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65255);
const smo65256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65256.setAttribute('id', 'smo65256');
smo65256.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65256);
const smo65257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65257.setAttribute('id', 'smo65257');
smo65257.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65257);
const smo65258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65258.setAttribute('id', 'smo65258');
smo65258.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65258);
const smo65259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65259.setAttribute('id', 'smo65259');
smo65259.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65259);
const smo65260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65260.setAttribute('id', 'smo65260');
smo65260.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65260);
const smo65261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65261.setAttribute('id', 'smo65261');
smo65261.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65261);
const smo65262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/2/n"]}'))
smo65262.setAttribute('id', 'smo65262');
smo65262.setStyle({ fillStyle: "#115511" });
const smo652620acc = new VF.Accidental('#');
smo65262.addModifier(smo652620acc, 0);
smo65278v1ar.push(smo65262);
const smo65263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65263.setAttribute('id', 'smo65263');
smo65263.setStyle({ fillStyle: "#115511" });
const smo652630acc = new VF.Accidental('n');
smo65263.addModifier(smo652630acc, 0);
smo65278v1ar.push(smo65263);
const smo65264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65264.setAttribute('id', 'smo65264');
smo65264.setStyle({ fillStyle: "#115511" });
smo65278v1ar.push(smo65264);
smo65278v1.addTickables(smo65278v1ar)
fmtsmo6527850.joinVoices([smo65278v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68627 = smo60207.getStemDirection();
smo60207.setStemDirection(dirsmo68627);
smo60208.setStemDirection(dirsmo68627);
smo60209.setStemDirection(dirsmo68627);
const smo68627 = new VF.Beam([smo60207,smo60208,smo60209]);
const dirsmo68628 = smo60210.getStemDirection();
smo60210.setStemDirection(dirsmo68628);
smo60211.setStemDirection(dirsmo68628);
const smo68628 = new VF.Beam([smo60210,smo60211]);
const dirsmo68629 = smo60212.getStemDirection();
smo60212.setStemDirection(dirsmo68629);
smo60213.setStemDirection(dirsmo68629);
const smo68629 = new VF.Beam([smo60212,smo60213]);
const dirsmo68630 = smo60214.getStemDirection();
smo60214.setStemDirection(dirsmo68630);
smo60215.setStemDirection(dirsmo68630);
smo60216.setStemDirection(dirsmo68630);
const smo68630 = new VF.Beam([smo60214,smo60215,smo60216]);
const dirsmo68631 = smo60217.getStemDirection();
smo60217.setStemDirection(dirsmo68631);
smo60218.setStemDirection(dirsmo68631);
const smo68631 = new VF.Beam([smo60217,smo60218]);
const dirsmo68632 = smo60219.getStemDirection();
smo60219.setStemDirection(dirsmo68632);
smo60220.setStemDirection(dirsmo68632);
const smo68632 = new VF.Beam([smo60219,smo60220]);
const dirsmo68633 = smo60221.getStemDirection();
smo60221.setStemDirection(dirsmo68633);
smo60222.setStemDirection(dirsmo68633);
smo60223.setStemDirection(dirsmo68633);
smo60224.setStemDirection(dirsmo68633);
const smo68633 = new VF.Beam([smo60221,smo60222,smo60223,smo60224]);
const dirsmo68636 = smo65249.getStemDirection();
smo65249.setStemDirection(dirsmo68636);
smo65250.setStemDirection(dirsmo68636);
const smo68636 = new VF.Beam([smo65249,smo65250]);
const dirsmo68637 = smo65255.getStemDirection();
smo65255.setStemDirection(dirsmo68637);
smo65256.setStemDirection(dirsmo68637);
const smo68637 = new VF.Beam([smo65255,smo65256]);
const dirsmo68638 = smo65257.getStemDirection();
smo65257.setStemDirection(dirsmo68638);
smo65258.setStemDirection(dirsmo68638);
smo65259.setStemDirection(dirsmo68638);
smo65260.setStemDirection(dirsmo68638);
const smo68638 = new VF.Beam([smo65257,smo65258,smo65259,smo65260]);
const dirsmo68639 = smo65261.getStemDirection();
smo65261.setStemDirection(dirsmo68639);
smo65262.setStemDirection(dirsmo68639);
smo65263.setStemDirection(dirsmo68639);
smo65264.setStemDirection(dirsmo68639);
const smo68639 = new VF.Beam([smo65261,smo65262,smo65263,smo65264]);
 
// formatting measures in staff group smo57447
fmtsmo6023850.format([smo60238v0,smo60238v1,smo65278v0,smo65278v1], 498);
const stavesmo60238 = new VF.Stave(90, 662, 556);
stavesmo60238.setAttribute('id', 'stavesmo60238');
stavesmo60238.setBegBarType(1);
stavesmo60238.addClef('treble');
stavesmo60238.setContext(context);
stavesmo60238.draw();
smo60238v0.draw(context, stavesmo60238);
smo60238v1.draw(context, stavesmo60238);
smo68627.setContext(context);
smo68627.draw();
smo68628.setContext(context);
smo68628.draw();
smo68629.setContext(context);
smo68629.draw();
smo68630.setContext(context);
smo68630.draw();
smo68631.setContext(context);
smo68631.draw();
smo68632.setContext(context);
smo68632.draw();
smo68633.setContext(context);
smo68633.draw();
const stavesmo65278 = new VF.Stave(90, 801, 556);
stavesmo65278.setAttribute('id', 'stavesmo65278');
stavesmo65278.setBegBarType(1);
stavesmo65278.addClef('treble');
stavesmo65278.setContext(context);
stavesmo65278.draw();
smo65278v0.draw(context, stavesmo65278);
smo65278v1.draw(context, stavesmo65278);
smo68636.setContext(context);
smo68636.draw();
smo68637.setContext(context);
smo68637.draw();
smo68638.setContext(context);
smo68638.draw();
smo68639.setContext(context);
smo68639.draw();
const leftsmo57447stavesmo602381 = new VF.StaveConnector(stavesmo60238, stavesmo65278).setType(3);
leftsmo57447stavesmo602381.setContext(context).draw();
const fmtsmo6027351 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo60273v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60273v0ar = [];
const smo60239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60239.setAttribute('id', 'smo60239');
smo60273v0ar.push(smo60239);
const smo60240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60240.setAttribute('id', 'smo60240');
smo60273v0ar.push(smo60240);
const smo60241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60241.setAttribute('id', 'smo60241');
smo60273v0ar.push(smo60241);
const smo60242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60242.setAttribute('id', 'smo60242');
smo60273v0ar.push(smo60242);
const smo60243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60243.setAttribute('id', 'smo60243');
smo60273v0ar.push(smo60243);
const smo60244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60244.setAttribute('id', 'smo60244');
smo60273v0ar.push(smo60244);
const smo60245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60245.setAttribute('id', 'smo60245');
smo60273v0ar.push(smo60245);
const smo60246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60246.setAttribute('id', 'smo60246');
smo60273v0ar.push(smo60246);
const smo60247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60247.setAttribute('id', 'smo60247');
smo60273v0ar.push(smo60247);
const smo60248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60248.setAttribute('id', 'smo60248');
smo60273v0ar.push(smo60248);
smo60273v0.addTickables(smo60273v0ar)
fmtsmo6027351.joinVoices([smo60273v0]);
const smo60273v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60273v1ar = [];
const smo60249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60249.setAttribute('id', 'smo60249');
smo60249.setStyle({ fillStyle: "#115511" });
smo60249.addModifier(new VF.Dot(), 0);
smo60273v1ar.push(smo60249);
const smo60250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60250.setAttribute('id', 'smo60250');
smo60250.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60250);
const smo60251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60251.setAttribute('id', 'smo60251');
smo60251.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60251);
const smo60252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60252.setAttribute('id', 'smo60252');
smo60252.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60252);
const smo60253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo60253.setAttribute('id', 'smo60253');
smo60253.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60253);
const smo60254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60254.setAttribute('id', 'smo60254');
smo60254.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60254);
const smo60255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60255.setAttribute('id', 'smo60255');
smo60255.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60255);
const smo60256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60256.setAttribute('id', 'smo60256');
smo60256.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60256);
const smo60257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo60257.setAttribute('id', 'smo60257');
smo60257.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60257);
const smo60258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60258.setAttribute('id', 'smo60258');
smo60258.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60258);
const smo60259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60259.setAttribute('id', 'smo60259');
smo60259.setStyle({ fillStyle: "#115511" });
smo60273v1ar.push(smo60259);
smo60273v1.addTickables(smo60273v1ar)
fmtsmo6027351.joinVoices([smo60273v1]);
const fmtsmo6530851 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo65308v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65308v0ar = [];
const smo65279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo65279.setAttribute('id', 'smo65279');
smo65308v0ar.push(smo65279);
const smo65280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65280.setAttribute('id', 'smo65280');
smo65308v0ar.push(smo65280);
const smo65281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65281.setAttribute('id', 'smo65281');
smo65308v0ar.push(smo65281);
const smo65282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo65282.setAttribute('id', 'smo65282');
const smo652820acc = new VF.Accidental('#');
smo65282.addModifier(smo652820acc, 0);
smo65308v0ar.push(smo65282);
const smo65283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65283.setAttribute('id', 'smo65283');
smo65283.addModifier(new VF.Dot(), 0);
smo65308v0ar.push(smo65283);
const smo65284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65284.setAttribute('id', 'smo65284');
smo65308v0ar.push(smo65284);
const smo65285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65285.setAttribute('id', 'smo65285');
smo65308v0ar.push(smo65285);
const smo65286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65286.setAttribute('id', 'smo65286');
const smo652860acc = new VF.Accidental('n');
smo65286.addModifier(smo652860acc, 0);
smo65308v0ar.push(smo65286);
const smo65287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo65287.setAttribute('id', 'smo65287');
smo65308v0ar.push(smo65287);
smo65308v0.addTickables(smo65308v0ar)
fmtsmo6530851.joinVoices([smo65308v0]);
const smo65308v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65308v1ar = [];
const smo65288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65288.setAttribute('id', 'smo65288');
smo65288.setStyle({ fillStyle: "#115511" });
smo65308v1ar.push(smo65288);
const smo65289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65289.setAttribute('id', 'smo65289');
smo65289.setStyle({ fillStyle: "#115511" });
const smo652890acc = new VF.Accidental('#');
smo65289.addModifier(smo652890acc, 0);
smo65308v1ar.push(smo65289);
const smo65290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65290.setAttribute('id', 'smo65290');
smo65290.setStyle({ fillStyle: "#115511" });
smo65308v1ar.push(smo65290);
const smo65291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65291.setAttribute('id', 'smo65291');
smo65291.setStyle({ fillStyle: "#115511" });
smo65308v1ar.push(smo65291);
const smo65292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65292.setAttribute('id', 'smo65292');
smo65292.setStyle({ fillStyle: "#115511" });
smo65308v1ar.push(smo65292);
const smo65293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65293.setAttribute('id', 'smo65293');
smo65293.setStyle({ fillStyle: "#115511" });
smo65308v1ar.push(smo65293);
const smo65294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65294.setAttribute('id', 'smo65294');
smo65294.setStyle({ fillStyle: "#115511" });
const smo652940acc = new VF.Accidental('n');
smo65294.addModifier(smo652940acc, 0);
smo65308v1ar.push(smo65294);
smo65308v1.addTickables(smo65308v1ar)
fmtsmo6530851.joinVoices([smo65308v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68642 = smo60239.getStemDirection();
smo60239.setStemDirection(dirsmo68642);
smo60240.setStemDirection(dirsmo68642);
smo60241.setStemDirection(dirsmo68642);
smo60242.setStemDirection(dirsmo68642);
const smo68642 = new VF.Beam([smo60239,smo60240,smo60241,smo60242]);
const dirsmo68643 = smo60243.getStemDirection();
smo60243.setStemDirection(dirsmo68643);
smo60244.setStemDirection(dirsmo68643);
smo60245.setStemDirection(dirsmo68643);
smo60246.setStemDirection(dirsmo68643);
const smo68643 = new VF.Beam([smo60243,smo60244,smo60245,smo60246]);
const dirsmo68644 = smo60247.getStemDirection();
smo60247.setStemDirection(dirsmo68644);
smo60248.setStemDirection(dirsmo68644);
const smo68644 = new VF.Beam([smo60247,smo60248]);
const dirsmo68645 = smo60249.getStemDirection();
smo60249.setStemDirection(dirsmo68645);
smo60250.setStemDirection(dirsmo68645);
smo60251.setStemDirection(dirsmo68645);
smo60252.setStemDirection(dirsmo68645);
smo60253.setStemDirection(dirsmo68645);
const smo68645 = new VF.Beam([smo60249,smo60250,smo60251,smo60252,smo60253]);
const dirsmo68646 = smo60254.getStemDirection();
smo60254.setStemDirection(dirsmo68646);
smo60255.setStemDirection(dirsmo68646);
const smo68646 = new VF.Beam([smo60254,smo60255]);
const dirsmo68647 = smo60256.getStemDirection();
smo60256.setStemDirection(dirsmo68647);
smo60257.setStemDirection(dirsmo68647);
smo60258.setStemDirection(dirsmo68647);
smo60259.setStemDirection(dirsmo68647);
const smo68647 = new VF.Beam([smo60256,smo60257,smo60258,smo60259]);
const dirsmo68650 = smo65280.getStemDirection();
smo65280.setStemDirection(dirsmo68650);
smo65281.setStemDirection(dirsmo68650);
smo65282.setStemDirection(dirsmo68650);
const smo68650 = new VF.Beam([smo65280,smo65281,smo65282]);
const dirsmo68651 = smo65283.getStemDirection();
smo65283.setStemDirection(dirsmo68651);
smo65284.setStemDirection(dirsmo68651);
smo65285.setStemDirection(dirsmo68651);
const smo68651 = new VF.Beam([smo65283,smo65284,smo65285]);
const dirsmo68652 = smo65286.getStemDirection();
smo65286.setStemDirection(dirsmo68652);
smo65287.setStemDirection(dirsmo68652);
const smo68652 = new VF.Beam([smo65286,smo65287]);
const dirsmo68653 = smo65288.getStemDirection();
smo65288.setStemDirection(dirsmo68653);
smo65289.setStemDirection(dirsmo68653);
smo65290.setStemDirection(dirsmo68653);
smo65291.setStemDirection(dirsmo68653);
const smo68653 = new VF.Beam([smo65288,smo65289,smo65290,smo65291]);
const dirsmo68654 = smo65293.getStemDirection();
smo65293.setStemDirection(dirsmo68654);
smo65294.setStemDirection(dirsmo68654);
const smo68654 = new VF.Beam([smo65293,smo65294]);
 
// formatting measures in staff group smo57447
fmtsmo6027351.format([smo60273v0,smo60273v1,smo65308v0,smo65308v1], 515);
const stavesmo60273 = new VF.Stave(646, 662, 563);
stavesmo60273.setAttribute('id', 'stavesmo60273');
stavesmo60273.setBegBarType(VF.Barline.type.NONE);
stavesmo60273.setContext(context);
stavesmo60273.draw();
smo60273v0.draw(context, stavesmo60273);
smo60273v1.draw(context, stavesmo60273);
smo68642.setContext(context);
smo68642.draw();
smo68643.setContext(context);
smo68643.draw();
smo68644.setContext(context);
smo68644.draw();
smo68645.setContext(context);
smo68645.draw();
smo68646.setContext(context);
smo68646.draw();
smo68647.setContext(context);
smo68647.draw();
const stavesmo65308 = new VF.Stave(646, 801, 563);
stavesmo65308.setAttribute('id', 'stavesmo65308');
stavesmo65308.setBegBarType(VF.Barline.type.NONE);
stavesmo65308.addClef('bass');
stavesmo65308.setContext(context);
stavesmo65308.draw();
smo65308v0.draw(context, stavesmo65308);
smo65308v1.draw(context, stavesmo65308);
smo68650.setContext(context);
smo68650.draw();
smo68651.setContext(context);
smo68651.draw();
smo68652.setContext(context);
smo68652.draw();
smo68653.setContext(context);
smo68653.draw();
smo68654.setContext(context);
smo68654.draw();
const fmtsmo6031052 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo60310v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60310v0ar = [];
const smo60274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60274.setAttribute('id', 'smo60274');
smo60310v0ar.push(smo60274);
const smo60275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/5/n"]}'))
smo60275.setAttribute('id', 'smo60275');
const smo602750acc = new VF.Accidental('b');
smo60275.addModifier(smo602750acc, 0);
smo60310v0ar.push(smo60275);
const smo60276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60276.setAttribute('id', 'smo60276');
smo60310v0ar.push(smo60276);
const smo60277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60277.setAttribute('id', 'smo60277');
smo60310v0ar.push(smo60277);
const smo60278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60278.setAttribute('id', 'smo60278');
smo60310v0ar.push(smo60278);
const smo60279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60279.setAttribute('id', 'smo60279');
smo60310v0ar.push(smo60279);
const smo60280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60280.setAttribute('id', 'smo60280');
smo60310v0ar.push(smo60280);
const smo60281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60281.setAttribute('id', 'smo60281');
smo60310v0ar.push(smo60281);
const smo60282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60282.setAttribute('id', 'smo60282');
smo60310v0ar.push(smo60282);
const smo60283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60283.setAttribute('id', 'smo60283');
smo60310v0ar.push(smo60283);
const smo60284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60284.setAttribute('id', 'smo60284');
smo60310v0ar.push(smo60284);
const smo60285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60285.setAttribute('id', 'smo60285');
const smo60286 = new VF.Ornament('mordent_inverted');
smo60285.addModifier(smo60286, 0);
smo60310v0ar.push(smo60285);
const smo60287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60287.setAttribute('id', 'smo60287');
smo60310v0ar.push(smo60287);
const smo60288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60288.setAttribute('id', 'smo60288');
smo60310v0ar.push(smo60288);
smo60310v0.addTickables(smo60310v0ar)
fmtsmo6031052.joinVoices([smo60310v0]);
const smo60310v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60310v1ar = [];
const smo60289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60289.setAttribute('id', 'smo60289');
smo60289.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60289);
const smo60290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60290.setAttribute('id', 'smo60290');
smo60290.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60290);
const smo60291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60291.setAttribute('id', 'smo60291');
smo60291.setStyle({ fillStyle: "#115511" });
const smo602910acc = new VF.Accidental('#');
smo60291.addModifier(smo602910acc, 0);
smo60310v1ar.push(smo60291);
const smo60292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60292.setAttribute('id', 'smo60292');
smo60292.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60292);
const smo60293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo60293.setAttribute('id', 'smo60293');
smo60293.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60293);
const smo60294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60294.setAttribute('id', 'smo60294');
smo60294.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60294);
const smo60295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60295.setAttribute('id', 'smo60295');
smo60295.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60295);
const smo60296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo60296.setAttribute('id', 'smo60296');
smo60296.setStyle({ fillStyle: "#115511" });
smo60310v1ar.push(smo60296);
smo60310v1.addTickables(smo60310v1ar)
fmtsmo6031052.joinVoices([smo60310v1]);
const fmtsmo6534252 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo65342v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65342v0ar = [];
const smo65309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65309.setAttribute('id', 'smo65309');
smo65342v0ar.push(smo65309);
const smo65310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65310.setAttribute('id', 'smo65310');
smo65342v0ar.push(smo65310);
const smo65311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65311.setAttribute('id', 'smo65311');
smo65342v0ar.push(smo65311);
const smo65312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo65312.setAttribute('id', 'smo65312');
smo65342v0ar.push(smo65312);
const smo65313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65313.setAttribute('id', 'smo65313');
smo65342v0ar.push(smo65313);
const smo65314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65314.setAttribute('id', 'smo65314');
smo65342v0ar.push(smo65314);
const smo65315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo65315.setAttribute('id', 'smo65315');
const smo653150acc = new VF.Accidental('#');
smo65315.addModifier(smo653150acc, 0);
smo65342v0ar.push(smo65315);
const smo65316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo65316.setAttribute('id', 'smo65316');
smo65342v0ar.push(smo65316);
const smo65317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo65317.setAttribute('id', 'smo65317');
smo65342v0ar.push(smo65317);
smo65342v0.addTickables(smo65342v0ar)
fmtsmo6534252.joinVoices([smo65342v0]);
const smo65342v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65342v1ar = [];
const smo65318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65318.setAttribute('id', 'smo65318');
smo65318.setStyle({ fillStyle: "#115511" });
smo65318.addModifier(new VF.Dot(), 0);
smo65342v1ar.push(smo65318);
const smo65319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65319.setAttribute('id', 'smo65319');
smo65319.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65319);
const smo65320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65320.setAttribute('id', 'smo65320');
smo65320.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65320);
const smo65321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65321.setAttribute('id', 'smo65321');
smo65321.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65321);
const smo65322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65322.setAttribute('id', 'smo65322');
smo65322.setStyle({ fillStyle: "#115511" });
const smo653220acc = new VF.Accidental('b');
smo65322.addModifier(smo653220acc, 0);
smo65342v1ar.push(smo65322);
const smo65323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65323.setAttribute('id', 'smo65323');
smo65323.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65323);
const smo65324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65324.setAttribute('id', 'smo65324');
smo65324.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65324);
const smo65325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65325.setAttribute('id', 'smo65325');
smo65325.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65325);
const smo65326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65326.setAttribute('id', 'smo65326');
smo65326.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65326);
const smo65327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65327.setAttribute('id', 'smo65327');
smo65327.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65327);
const smo65328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65328.setAttribute('id', 'smo65328');
smo65328.setStyle({ fillStyle: "#115511" });
smo65342v1ar.push(smo65328);
smo65342v1.addTickables(smo65342v1ar)
fmtsmo6534252.joinVoices([smo65342v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68657 = smo60274.getStemDirection();
smo60274.setStemDirection(dirsmo68657);
smo60275.setStemDirection(dirsmo68657);
const smo68657 = new VF.Beam([smo60274,smo60275]);
const dirsmo68658 = smo60276.getStemDirection();
smo60276.setStemDirection(dirsmo68658);
smo60277.setStemDirection(dirsmo68658);
smo60278.setStemDirection(dirsmo68658);
const smo68658 = new VF.Beam([smo60276,smo60277,smo60278]);
const dirsmo68659 = smo60279.getStemDirection();
smo60279.setStemDirection(dirsmo68659);
smo60280.setStemDirection(dirsmo68659);
smo60281.setStemDirection(dirsmo68659);
smo60282.setStemDirection(dirsmo68659);
const smo68659 = new VF.Beam([smo60279,smo60280,smo60281,smo60282]);
const dirsmo68660 = smo60283.getStemDirection();
smo60283.setStemDirection(dirsmo68660);
smo60284.setStemDirection(dirsmo68660);
smo60285.setStemDirection(dirsmo68660);
smo60287.setStemDirection(dirsmo68660);
smo60288.setStemDirection(dirsmo68660);
const smo68660 = new VF.Beam([smo60283,smo60284,smo60285,smo60287,smo60288]);
const dirsmo68661 = smo60289.getStemDirection();
smo60289.setStemDirection(dirsmo68661);
smo60290.setStemDirection(dirsmo68661);
smo60291.setStemDirection(dirsmo68661);
smo60292.setStemDirection(dirsmo68661);
const smo68661 = new VF.Beam([smo60289,smo60290,smo60291,smo60292]);
const dirsmo68662 = smo60293.getStemDirection();
smo60293.setStemDirection(dirsmo68662);
smo60294.setStemDirection(dirsmo68662);
smo60295.setStemDirection(dirsmo68662);
smo60296.setStemDirection(dirsmo68662);
const smo68662 = new VF.Beam([smo60293,smo60294,smo60295,smo60296]);
const dirsmo68665 = smo65309.getStemDirection();
smo65309.setStemDirection(dirsmo68665);
smo65310.setStemDirection(dirsmo68665);
const smo68665 = new VF.Beam([smo65309,smo65310]);
const dirsmo68666 = smo65311.getStemDirection();
smo65311.setStemDirection(dirsmo68666);
smo65312.setStemDirection(dirsmo68666);
smo65313.setStemDirection(dirsmo68666);
smo65314.setStemDirection(dirsmo68666);
const smo68666 = new VF.Beam([smo65311,smo65312,smo65313,smo65314]);
const dirsmo68667 = smo65318.getStemDirection();
smo65318.setStemDirection(dirsmo68667);
smo65319.setStemDirection(dirsmo68667);
smo65320.setStemDirection(dirsmo68667);
smo65321.setStemDirection(dirsmo68667);
smo65322.setStemDirection(dirsmo68667);
const smo68667 = new VF.Beam([smo65318,smo65319,smo65320,smo65321,smo65322]);
const dirsmo68668 = smo65323.getStemDirection();
smo65323.setStemDirection(dirsmo68668);
smo65324.setStemDirection(dirsmo68668);
const smo68668 = new VF.Beam([smo65323,smo65324]);
const dirsmo68669 = smo65325.getStemDirection();
smo65325.setStemDirection(dirsmo68669);
smo65326.setStemDirection(dirsmo68669);
smo65327.setStemDirection(dirsmo68669);
smo65328.setStemDirection(dirsmo68669);
const smo68669 = new VF.Beam([smo65325,smo65326,smo65327,smo65328]);
 
// formatting measures in staff group smo57447
fmtsmo6031052.format([smo60310v0,smo60310v1,smo65342v0,smo65342v1], 585);
const stavesmo60310 = new VF.Stave(1209, 662, 599);
stavesmo60310.setAttribute('id', 'stavesmo60310');
stavesmo60310.setBegBarType(VF.Barline.type.NONE);
stavesmo60310.setContext(context);
stavesmo60310.draw();
smo60310v0.draw(context, stavesmo60310);
smo60310v1.draw(context, stavesmo60310);
smo68657.setContext(context);
smo68657.draw();
smo68658.setContext(context);
smo68658.draw();
smo68659.setContext(context);
smo68659.draw();
smo68660.setContext(context);
smo68660.draw();
smo68661.setContext(context);
smo68661.draw();
smo68662.setContext(context);
smo68662.draw();
const stavesmo65342 = new VF.Stave(1209, 801, 599);
stavesmo65342.setAttribute('id', 'stavesmo65342');
stavesmo65342.setBegBarType(VF.Barline.type.NONE);
stavesmo65342.setContext(context);
stavesmo65342.draw();
smo65342v0.draw(context, stavesmo65342);
smo65342v1.draw(context, stavesmo65342);
smo68665.setContext(context);
smo68665.draw();
smo68666.setContext(context);
smo68666.draw();
smo68667.setContext(context);
smo68667.draw();
smo68668.setContext(context);
smo68668.draw();
smo68669.setContext(context);
smo68669.draw();
const rightsmo57447stavesmo603101 = new VF.StaveConnector(stavesmo60310, stavesmo65342).setType(0);
rightsmo57447stavesmo603101.setContext(context).draw();
const fmtsmo6034253 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo60342v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60342v0ar = [];
const smo60311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60311.setAttribute('id', 'smo60311');
smo60342v0ar.push(smo60311);
const smo60312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo60312.setAttribute('id', 'smo60312');
const smo603120acc = new VF.Accidental('#');
smo60312.addModifier(smo603120acc, 0);
smo60342v0ar.push(smo60312);
const smo60313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60313.setAttribute('id', 'smo60313');
smo60342v0ar.push(smo60313);
const smo60314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60314.setAttribute('id', 'smo60314');
smo60342v0ar.push(smo60314);
const smo60315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60315.setAttribute('id', 'smo60315');
smo60315.addModifier(new VF.Dot(), 0);
smo60342v0ar.push(smo60315);
const smo60316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60316.setAttribute('id', 'smo60316');
smo60342v0ar.push(smo60316);
const smo60317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60317.setAttribute('id', 'smo60317');
smo60342v0ar.push(smo60317);
const smo60318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo60318.setAttribute('id', 'smo60318');
smo60342v0ar.push(smo60318);
const smo60319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/5/r"]}'))
smo60319.setAttribute('id', 'smo60319');
smo60342v0ar.push(smo60319);
smo60342v0.addTickables(smo60342v0ar)
fmtsmo6034253.joinVoices([smo60342v0]);
const smo60342v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60342v1ar = [];
const smo60320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60320.setAttribute('id', 'smo60320');
smo60320.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60320);
const smo60321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo60321.setAttribute('id', 'smo60321');
smo60321.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60321);
const smo60322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["gn/4/r"]}'))
smo60322.setAttribute('id', 'smo60322');
smo60322.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60322);
const smo60323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60323.setAttribute('id', 'smo60323');
smo60323.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60323);
const smo60324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60324.setAttribute('id', 'smo60324');
smo60324.setStyle({ fillStyle: "#115511" });
const smo603240acc = new VF.Accidental('#');
smo60324.addModifier(smo603240acc, 0);
smo60342v1ar.push(smo60324);
const smo60325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60325.setAttribute('id', 'smo60325');
smo60325.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60325);
const smo60326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60326.setAttribute('id', 'smo60326');
smo60326.setStyle({ fillStyle: "#115511" });
smo60326.addModifier(new VF.Dot(), 0);
smo60342v1ar.push(smo60326);
const smo60327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60327.setAttribute('id', 'smo60327');
smo60327.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60327);
const smo60328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60328.setAttribute('id', 'smo60328');
smo60328.setStyle({ fillStyle: "#115511" });
smo60342v1ar.push(smo60328);
smo60342v1.addTickables(smo60342v1ar)
fmtsmo6034253.joinVoices([smo60342v1]);
const fmtsmo6537253 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo65372v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65372v0ar = [];
const smo65343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo65343.setAttribute('id', 'smo65343');
smo65372v0ar.push(smo65343);
const smo65344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65344.setAttribute('id', 'smo65344');
smo65372v0ar.push(smo65344);
const smo65345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65345.setAttribute('id', 'smo65345');
smo65372v0ar.push(smo65345);
const smo65346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/4/n"]}'))
smo65346.setAttribute('id', 'smo65346');
const smo653460acc = new VF.Accidental('#');
smo65346.addModifier(smo653460acc, 0);
smo65372v0ar.push(smo65346);
const smo65347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65347.setAttribute('id', 'smo65347');
smo65347.addModifier(new VF.Dot(), 0);
smo65372v0ar.push(smo65347);
const smo65348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo65348.setAttribute('id', 'smo65348');
smo65372v0ar.push(smo65348);
const smo65349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65349.setAttribute('id', 'smo65349');
smo65372v0ar.push(smo65349);
const smo65350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo65350.setAttribute('id', 'smo65350');
const smo653500acc = new VF.Accidental('n');
smo65350.addModifier(smo653500acc, 0);
smo65372v0ar.push(smo65350);
const smo65351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo65351.setAttribute('id', 'smo65351');
const smo653510acc = new VF.Accidental('#');
smo65351.addModifier(smo653510acc, 0);
smo65372v0ar.push(smo65351);
smo65372v0.addTickables(smo65372v0ar)
fmtsmo6537253.joinVoices([smo65372v0]);
const smo65372v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65372v1ar = [];
const smo65352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65352.setAttribute('id', 'smo65352');
smo65352.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65352);
const smo65353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65353.setAttribute('id', 'smo65353');
smo65353.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65353);
const smo65354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65354.setAttribute('id', 'smo65354');
smo65354.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65354);
const smo65355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65355.setAttribute('id', 'smo65355');
smo65355.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65355);
const smo65356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65356.setAttribute('id', 'smo65356');
smo65356.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65356);
const smo65357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65357.setAttribute('id', 'smo65357');
smo65357.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65357);
const smo65358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65358.setAttribute('id', 'smo65358');
smo65358.setStyle({ fillStyle: "#115511" });
smo65372v1ar.push(smo65358);
smo65372v1.addTickables(smo65372v1ar)
fmtsmo6537253.joinVoices([smo65372v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68684 = smo60311.getStemDirection();
smo60311.setStemDirection(dirsmo68684);
smo60312.setStemDirection(dirsmo68684);
smo60313.setStemDirection(dirsmo68684);
smo60314.setStemDirection(dirsmo68684);
const smo68684 = new VF.Beam([smo60311,smo60312,smo60313,smo60314]);
const dirsmo68685 = smo60315.getStemDirection();
smo60315.setStemDirection(dirsmo68685);
smo60316.setStemDirection(dirsmo68685);
const smo68685 = new VF.Beam([smo60315,smo60316]);
const dirsmo68686 = smo60324.getStemDirection();
smo60324.setStemDirection(dirsmo68686);
smo60325.setStemDirection(dirsmo68686);
const smo68686 = new VF.Beam([smo60324,smo60325]);
const dirsmo68687 = smo60326.getStemDirection();
smo60326.setStemDirection(dirsmo68687);
smo60327.setStemDirection(dirsmo68687);
smo60328.setStemDirection(dirsmo68687);
const smo68687 = new VF.Beam([smo60326,smo60327,smo60328]);
const dirsmo68690 = smo65344.getStemDirection();
smo65344.setStemDirection(dirsmo68690);
smo65345.setStemDirection(dirsmo68690);
smo65346.setStemDirection(dirsmo68690);
const smo68690 = new VF.Beam([smo65344,smo65345,smo65346]);
const dirsmo68691 = smo65347.getStemDirection();
smo65347.setStemDirection(dirsmo68691);
smo65348.setStemDirection(dirsmo68691);
smo65349.setStemDirection(dirsmo68691);
const smo68691 = new VF.Beam([smo65347,smo65348,smo65349]);
const dirsmo68692 = smo65350.getStemDirection();
smo65350.setStemDirection(dirsmo68692);
smo65351.setStemDirection(dirsmo68692);
const smo68692 = new VF.Beam([smo65350,smo65351]);
const dirsmo68693 = smo65352.getStemDirection();
smo65352.setStemDirection(dirsmo68693);
smo65353.setStemDirection(dirsmo68693);
smo65354.setStemDirection(dirsmo68693);
smo65355.setStemDirection(dirsmo68693);
smo65356.setStemDirection(dirsmo68693);
smo65357.setStemDirection(dirsmo68693);
const smo68693 = new VF.Beam([smo65352,smo65353,smo65354,smo65355,smo65356,smo65357]);
 
// formatting measures in staff group smo57447
fmtsmo6034253.format([smo60342v0,smo60342v1,smo65372v0,smo65372v1], 496);
const stavesmo60342 = new VF.Stave(90, 1010, 554);
stavesmo60342.setAttribute('id', 'stavesmo60342');
stavesmo60342.setBegBarType(1);
stavesmo60342.addClef('treble');
stavesmo60342.setContext(context);
stavesmo60342.draw();
smo60342v0.draw(context, stavesmo60342);
smo60342v1.draw(context, stavesmo60342);
smo68684.setContext(context);
smo68684.draw();
smo68685.setContext(context);
smo68685.draw();
smo68686.setContext(context);
smo68686.draw();
smo68687.setContext(context);
smo68687.draw();
const stavesmo65372 = new VF.Stave(90, 1107, 554);
stavesmo65372.setAttribute('id', 'stavesmo65372');
stavesmo65372.setBegBarType(1);
stavesmo65372.addClef('treble');
stavesmo65372.setContext(context);
stavesmo65372.draw();
smo65372v0.draw(context, stavesmo65372);
smo65372v1.draw(context, stavesmo65372);
smo68690.setContext(context);
smo68690.draw();
smo68691.setContext(context);
smo68691.draw();
smo68692.setContext(context);
smo68692.draw();
smo68693.setContext(context);
smo68693.draw();
const leftsmo57447stavesmo603421 = new VF.StaveConnector(stavesmo60342, stavesmo65372).setType(3);
leftsmo57447stavesmo603421.setContext(context).draw();
const fmtsmo6036954 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo60369v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60369v0ar = [];
const smo60343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60343.setAttribute('id', 'smo60343');
smo60343.setStyle({ fillStyle: '#aaaaaa7f' });
smo60369v0ar.push(smo60343);
smo60369v0.addTickables(smo60369v0ar)
fmtsmo6036954.joinVoices([smo60369v0]);
const smo60369v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60369v1ar = [];
const smo60344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60344.setAttribute('id', 'smo60344');
smo60344.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60344);
const smo60345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60345.setAttribute('id', 'smo60345');
smo60345.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60345);
const smo60346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60346.setAttribute('id', 'smo60346');
smo60346.setStyle({ fillStyle: "#115511" });
const smo603460acc = new VF.Accidental('#');
smo60346.addModifier(smo603460acc, 0);
smo60369v1ar.push(smo60346);
const smo60347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60347.setAttribute('id', 'smo60347');
smo60347.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60347);
const smo60348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60348.setAttribute('id', 'smo60348');
smo60348.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60348);
const smo60349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60349.setAttribute('id', 'smo60349');
smo60349.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60349);
const smo60350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60350.setAttribute('id', 'smo60350');
smo60350.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60350);
const smo60351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60351.setAttribute('id', 'smo60351');
smo60351.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60351);
const smo60352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60352.setAttribute('id', 'smo60352');
smo60352.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60352);
const smo60353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60353.setAttribute('id', 'smo60353');
smo60353.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60353);
const smo60354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60354.setAttribute('id', 'smo60354');
smo60354.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60354);
const smo60355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60355.setAttribute('id', 'smo60355');
smo60355.setStyle({ fillStyle: "#115511" });
smo60369v1ar.push(smo60355);
smo60369v1.addTickables(smo60369v1ar)
fmtsmo6036954.joinVoices([smo60369v1]);
const fmtsmo6540554 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo65405v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65405v0ar = [];
const smo65373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65373.setAttribute('id', 'smo65373');
smo65405v0ar.push(smo65373);
const smo65374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65374.setAttribute('id', 'smo65374');
smo65405v0ar.push(smo65374);
const smo65375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65375.setAttribute('id', 'smo65375');
smo65405v0ar.push(smo65375);
const smo65376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65376.setAttribute('id', 'smo65376');
smo65405v0ar.push(smo65376);
const smo65377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65377.setAttribute('id', 'smo65377');
smo65405v0ar.push(smo65377);
const smo65378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/2/n"]}'))
smo65378.setAttribute('id', 'smo65378');
smo65405v0ar.push(smo65378);
const smo65379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65379.setAttribute('id', 'smo65379');
smo65405v0ar.push(smo65379);
const smo65380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/2/n"]}'))
smo65380.setAttribute('id', 'smo65380');
const smo653800acc = new VF.Accidental('#');
smo65380.addModifier(smo653800acc, 0);
smo65405v0ar.push(smo65380);
const smo65381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/2/n"]}'))
smo65381.setAttribute('id', 'smo65381');
smo65405v0ar.push(smo65381);
const smo65382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65382.setAttribute('id', 'smo65382');
smo65405v0ar.push(smo65382);
const smo65383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65383.setAttribute('id', 'smo65383');
const smo653830acc = new VF.Accidental('#');
smo65383.addModifier(smo653830acc, 0);
smo65405v0ar.push(smo65383);
const smo65384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65384.setAttribute('id', 'smo65384');
smo65405v0ar.push(smo65384);
smo65405v0.addTickables(smo65405v0ar)
fmtsmo6540554.joinVoices([smo65405v0]);
const smo65405v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65405v1ar = [];
const smo65385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65385.setAttribute('id', 'smo65385');
smo65385.setStyle({ fillStyle: "#115511" });
smo65405v1ar.push(smo65385);
const smo65386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65386.setAttribute('id', 'smo65386');
smo65386.setStyle({ fillStyle: "#115511" });
smo65405v1ar.push(smo65386);
const smo65387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65387.setAttribute('id', 'smo65387');
smo65387.setStyle({ fillStyle: "#115511" });
smo65405v1ar.push(smo65387);
const smo65388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo65388.setAttribute('id', 'smo65388');
smo65388.setStyle({ fillStyle: "#115511" });
const smo653880acc = new VF.Accidental('#');
smo65388.addModifier(smo653880acc, 0);
smo65405v1ar.push(smo65388);
const smo65389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65389.setAttribute('id', 'smo65389');
smo65389.setStyle({ fillStyle: "#115511" });
smo65405v1ar.push(smo65389);
const smo65390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65390.setAttribute('id', 'smo65390');
smo65390.setStyle({ fillStyle: "#115511" });
smo65405v1ar.push(smo65390);
const smo65391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65391.setAttribute('id', 'smo65391');
smo65391.setStyle({ fillStyle: "#115511" });
smo65405v1ar.push(smo65391);
smo65405v1.addTickables(smo65405v1ar)
fmtsmo6540554.joinVoices([smo65405v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68696 = smo60344.getStemDirection();
smo60344.setStemDirection(dirsmo68696);
smo60345.setStemDirection(dirsmo68696);
smo60346.setStemDirection(dirsmo68696);
smo60347.setStemDirection(dirsmo68696);
const smo68696 = new VF.Beam([smo60344,smo60345,smo60346,smo60347]);
const dirsmo68697 = smo60348.getStemDirection();
smo60348.setStemDirection(dirsmo68697);
smo60349.setStemDirection(dirsmo68697);
smo60350.setStemDirection(dirsmo68697);
smo60351.setStemDirection(dirsmo68697);
const smo68697 = new VF.Beam([smo60348,smo60349,smo60350,smo60351]);
const dirsmo68698 = smo60352.getStemDirection();
smo60352.setStemDirection(dirsmo68698);
smo60353.setStemDirection(dirsmo68698);
smo60354.setStemDirection(dirsmo68698);
smo60355.setStemDirection(dirsmo68698);
const smo68698 = new VF.Beam([smo60352,smo60353,smo60354,smo60355]);
const dirsmo68701 = smo65373.getStemDirection();
smo65373.setStemDirection(dirsmo68701);
smo65374.setStemDirection(dirsmo68701);
smo65375.setStemDirection(dirsmo68701);
smo65376.setStemDirection(dirsmo68701);
const smo68701 = new VF.Beam([smo65373,smo65374,smo65375,smo65376]);
const dirsmo68702 = smo65377.getStemDirection();
smo65377.setStemDirection(dirsmo68702);
smo65378.setStemDirection(dirsmo68702);
smo65379.setStemDirection(dirsmo68702);
smo65380.setStemDirection(dirsmo68702);
const smo68702 = new VF.Beam([smo65377,smo65378,smo65379,smo65380]);
const dirsmo68703 = smo65381.getStemDirection();
smo65381.setStemDirection(dirsmo68703);
smo65382.setStemDirection(dirsmo68703);
smo65383.setStemDirection(dirsmo68703);
smo65384.setStemDirection(dirsmo68703);
const smo68703 = new VF.Beam([smo65381,smo65382,smo65383,smo65384]);
const dirsmo68704 = smo65385.getStemDirection();
smo65385.setStemDirection(dirsmo68704);
smo65386.setStemDirection(dirsmo68704);
const smo68704 = new VF.Beam([smo65385,smo65386]);
const dirsmo68705 = smo65387.getStemDirection();
smo65387.setStemDirection(dirsmo68705);
smo65388.setStemDirection(dirsmo68705);
smo65389.setStemDirection(dirsmo68705);
smo65390.setStemDirection(dirsmo68705);
const smo68705 = new VF.Beam([smo65387,smo65388,smo65389,smo65390]);
 
// formatting measures in staff group smo57447
fmtsmo6036954.format([smo60369v0,smo60369v1,smo65405v0,smo65405v1], 564);
const stavesmo60369 = new VF.Stave(644, 1010, 612);
stavesmo60369.setAttribute('id', 'stavesmo60369');
stavesmo60369.setBegBarType(VF.Barline.type.NONE);
stavesmo60369.setContext(context);
stavesmo60369.draw();
smo60369v0.draw(context, stavesmo60369);
smo60369v1.draw(context, stavesmo60369);
smo68696.setContext(context);
smo68696.draw();
smo68697.setContext(context);
smo68697.draw();
smo68698.setContext(context);
smo68698.draw();
const stavesmo65405 = new VF.Stave(644, 1107, 612);
stavesmo65405.setAttribute('id', 'stavesmo65405');
stavesmo65405.setBegBarType(VF.Barline.type.NONE);
stavesmo65405.addClef('bass');
stavesmo65405.setContext(context);
stavesmo65405.draw();
smo65405v0.draw(context, stavesmo65405);
smo65405v1.draw(context, stavesmo65405);
smo68701.setContext(context);
smo68701.draw();
smo68702.setContext(context);
smo68702.draw();
smo68703.setContext(context);
smo68703.draw();
smo68704.setContext(context);
smo68704.draw();
smo68705.setContext(context);
smo68705.draw();
const fmtsmo6040255 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo60402v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60402v0ar = [];
const smo60370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60370.setAttribute('id', 'smo60370');
smo60402v0ar.push(smo60370);
const smo60371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60371.setAttribute('id', 'smo60371');
smo60402v0ar.push(smo60371);
const smo60372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60372.setAttribute('id', 'smo60372');
smo60372.addModifier(new VF.Dot(), 0);
smo60402v0ar.push(smo60372);
const smo60373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60373.setAttribute('id', 'smo60373');
smo60402v0ar.push(smo60373);
const smo60374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60374.setAttribute('id', 'smo60374');
smo60402v0ar.push(smo60374);
const smo60375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60375.setAttribute('id', 'smo60375');
smo60402v0ar.push(smo60375);
const smo60376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60376.setAttribute('id', 'smo60376');
smo60402v0ar.push(smo60376);
const smo60377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60377.setAttribute('id', 'smo60377');
smo60402v0ar.push(smo60377);
const smo60378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60378.setAttribute('id', 'smo60378');
smo60402v0ar.push(smo60378);
smo60402v0.addTickables(smo60402v0ar)
fmtsmo6040255.joinVoices([smo60402v0]);
const smo60402v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60402v1ar = [];
const smo60379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60379.setAttribute('id', 'smo60379');
smo60379.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60379);
const smo60380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60380.setAttribute('id', 'smo60380');
smo60380.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60380);
const smo60381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60381.setAttribute('id', 'smo60381');
smo60381.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60381);
const smo60382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60382.setAttribute('id', 'smo60382');
smo60382.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60382);
const smo60383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60383.setAttribute('id', 'smo60383');
smo60383.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60383);
const smo60384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60384.setAttribute('id', 'smo60384');
smo60384.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60384);
const smo60385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60385.setAttribute('id', 'smo60385');
smo60385.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60385);
const smo60386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60386.setAttribute('id', 'smo60386');
smo60386.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60386);
const smo60387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60387.setAttribute('id', 'smo60387');
smo60387.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60387);
const smo60388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60388.setAttribute('id', 'smo60388');
smo60388.setStyle({ fillStyle: "#115511" });
smo60402v1ar.push(smo60388);
smo60402v1.addTickables(smo60402v1ar)
fmtsmo6040255.joinVoices([smo60402v1]);
const fmtsmo6543755 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo65437v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65437v0ar = [];
const smo65406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo65406.setAttribute('id', 'smo65406');
smo65437v0ar.push(smo65406);
const smo65407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65407.setAttribute('id', 'smo65407');
smo65437v0ar.push(smo65407);
const smo65408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65408.setAttribute('id', 'smo65408');
smo65437v0ar.push(smo65408);
const smo65409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65409.setAttribute('id', 'smo65409');
smo65437v0ar.push(smo65409);
const smo65410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65410.setAttribute('id', 'smo65410');
smo65437v0ar.push(smo65410);
const smo65411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65411.setAttribute('id', 'smo65411');
smo65437v0ar.push(smo65411);
const smo65412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65412.setAttribute('id', 'smo65412');
smo65437v0ar.push(smo65412);
const smo65413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65413.setAttribute('id', 'smo65413');
smo65437v0ar.push(smo65413);
const smo65414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65414.setAttribute('id', 'smo65414');
smo65437v0ar.push(smo65414);
const smo65415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65415.setAttribute('id', 'smo65415');
smo65437v0ar.push(smo65415);
const smo65416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65416.setAttribute('id', 'smo65416');
smo65437v0ar.push(smo65416);
const smo65417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65417.setAttribute('id', 'smo65417');
smo65437v0ar.push(smo65417);
smo65437v0.addTickables(smo65437v0ar)
fmtsmo6543755.joinVoices([smo65437v0]);
const smo65437v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65437v1ar = [];
const smo65418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65418.setAttribute('id', 'smo65418');
smo65418.setStyle({ fillStyle: "#115511" });
smo65437v1ar.push(smo65418);
const smo65419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65419.setAttribute('id', 'smo65419');
smo65419.setStyle({ fillStyle: "#115511" });
smo65437v1ar.push(smo65419);
const smo65420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65420.setAttribute('id', 'smo65420');
smo65420.setStyle({ fillStyle: "#115511" });
smo65437v1ar.push(smo65420);
const smo65421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65421.setAttribute('id', 'smo65421');
smo65421.setStyle({ fillStyle: "#115511" });
const smo654210acc = new VF.Accidental('#');
smo65421.addModifier(smo654210acc, 0);
smo65437v1ar.push(smo65421);
const smo65422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65422.setAttribute('id', 'smo65422');
smo65422.setStyle({ fillStyle: "#115511" });
smo65437v1ar.push(smo65422);
const smo65423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65423.setAttribute('id', 'smo65423');
smo65423.setStyle({ fillStyle: "#115511" });
smo65437v1ar.push(smo65423);
smo65437v1.addTickables(smo65437v1ar)
fmtsmo6543755.joinVoices([smo65437v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68708 = smo60370.getStemDirection();
smo60370.setStemDirection(dirsmo68708);
smo60371.setStemDirection(dirsmo68708);
const smo68708 = new VF.Beam([smo60370,smo60371]);
const dirsmo68709 = smo60372.getStemDirection();
smo60372.setStemDirection(dirsmo68709);
smo60373.setStemDirection(dirsmo68709);
smo60374.setStemDirection(dirsmo68709);
const smo68709 = new VF.Beam([smo60372,smo60373,smo60374]);
const dirsmo68710 = smo60375.getStemDirection();
smo60375.setStemDirection(dirsmo68710);
smo60376.setStemDirection(dirsmo68710);
smo60377.setStemDirection(dirsmo68710);
smo60378.setStemDirection(dirsmo68710);
const smo68710 = new VF.Beam([smo60375,smo60376,smo60377,smo60378]);
const dirsmo68711 = smo60381.getStemDirection();
smo60381.setStemDirection(dirsmo68711);
smo60382.setStemDirection(dirsmo68711);
smo60383.setStemDirection(dirsmo68711);
smo60384.setStemDirection(dirsmo68711);
const smo68711 = new VF.Beam([smo60381,smo60382,smo60383,smo60384]);
const dirsmo68712 = smo60385.getStemDirection();
smo60385.setStemDirection(dirsmo68712);
smo60386.setStemDirection(dirsmo68712);
smo60387.setStemDirection(dirsmo68712);
smo60388.setStemDirection(dirsmo68712);
const smo68712 = new VF.Beam([smo60385,smo60386,smo60387,smo60388]);
const dirsmo68715 = smo65406.getStemDirection();
smo65406.setStemDirection(dirsmo68715);
smo65407.setStemDirection(dirsmo68715);
smo65408.setStemDirection(dirsmo68715);
smo65409.setStemDirection(dirsmo68715);
const smo68715 = new VF.Beam([smo65406,smo65407,smo65408,smo65409]);
const dirsmo68716 = smo65410.getStemDirection();
smo65410.setStemDirection(dirsmo68716);
smo65411.setStemDirection(dirsmo68716);
smo65412.setStemDirection(dirsmo68716);
smo65413.setStemDirection(dirsmo68716);
const smo68716 = new VF.Beam([smo65410,smo65411,smo65412,smo65413]);
const dirsmo68717 = smo65414.getStemDirection();
smo65414.setStemDirection(dirsmo68717);
smo65415.setStemDirection(dirsmo68717);
smo65416.setStemDirection(dirsmo68717);
smo65417.setStemDirection(dirsmo68717);
const smo68717 = new VF.Beam([smo65414,smo65415,smo65416,smo65417]);
const dirsmo68718 = smo65418.getStemDirection();
smo65418.setStemDirection(dirsmo68718);
smo65419.setStemDirection(dirsmo68718);
smo65420.setStemDirection(dirsmo68718);
const smo68718 = new VF.Beam([smo65418,smo65419,smo65420]);
const dirsmo68719 = smo65421.getStemDirection();
smo65421.setStemDirection(dirsmo68719);
smo65422.setStemDirection(dirsmo68719);
const smo68719 = new VF.Beam([smo65421,smo65422]);
 
// formatting measures in staff group smo57447
fmtsmo6040255.format([smo60402v0,smo60402v1,smo65437v0,smo65437v1], 504);
const stavesmo60402 = new VF.Stave(1256, 1010, 552);
stavesmo60402.setAttribute('id', 'stavesmo60402');
stavesmo60402.setBegBarType(VF.Barline.type.NONE);
stavesmo60402.setContext(context);
stavesmo60402.draw();
smo60402v0.draw(context, stavesmo60402);
smo60402v1.draw(context, stavesmo60402);
smo68708.setContext(context);
smo68708.draw();
smo68709.setContext(context);
smo68709.draw();
smo68710.setContext(context);
smo68710.draw();
smo68711.setContext(context);
smo68711.draw();
smo68712.setContext(context);
smo68712.draw();
const stavesmo65437 = new VF.Stave(1256, 1107, 552);
stavesmo65437.setAttribute('id', 'stavesmo65437');
stavesmo65437.setBegBarType(VF.Barline.type.NONE);
stavesmo65437.addClef('treble');
stavesmo65437.setContext(context);
stavesmo65437.draw();
smo65437v0.draw(context, stavesmo65437);
smo65437v1.draw(context, stavesmo65437);
smo68715.setContext(context);
smo68715.draw();
smo68716.setContext(context);
smo68716.draw();
smo68717.setContext(context);
smo68717.draw();
smo68718.setContext(context);
smo68718.draw();
smo68719.setContext(context);
smo68719.draw();
const rightsmo57447stavesmo604021 = new VF.StaveConnector(stavesmo60402, stavesmo65437).setType(0);
rightsmo57447stavesmo604021.setContext(context).draw();
const fmtsmo6043956 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo60439v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60439v0ar = [];
const smo60403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60403.setAttribute('id', 'smo60403');
smo60439v0ar.push(smo60403);
const smo60404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60404.setAttribute('id', 'smo60404');
smo60439v0ar.push(smo60404);
const smo60405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60405.setAttribute('id', 'smo60405');
smo60439v0ar.push(smo60405);
const smo60406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60406.setAttribute('id', 'smo60406');
smo60439v0ar.push(smo60406);
const smo60407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60407.setAttribute('id', 'smo60407');
smo60439v0ar.push(smo60407);
const smo60408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60408.setAttribute('id', 'smo60408');
smo60439v0ar.push(smo60408);
const smo60409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60409.setAttribute('id', 'smo60409');
smo60439v0ar.push(smo60409);
const smo60410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60410.setAttribute('id', 'smo60410');
smo60439v0ar.push(smo60410);
const smo60411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60411.setAttribute('id', 'smo60411');
smo60439v0ar.push(smo60411);
const smo60412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60412.setAttribute('id', 'smo60412');
smo60439v0ar.push(smo60412);
const smo60413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60413.setAttribute('id', 'smo60413');
smo60439v0ar.push(smo60413);
const smo60414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60414.setAttribute('id', 'smo60414');
smo60439v0ar.push(smo60414);
const smo60415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60415.setAttribute('id', 'smo60415');
smo60439v0ar.push(smo60415);
const smo60416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60416.setAttribute('id', 'smo60416');
smo60439v0ar.push(smo60416);
const smo60417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60417.setAttribute('id', 'smo60417');
smo60439v0ar.push(smo60417);
const smo60418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60418.setAttribute('id', 'smo60418');
smo60439v0ar.push(smo60418);
smo60439v0.addTickables(smo60439v0ar)
fmtsmo6043956.joinVoices([smo60439v0]);
const smo60439v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60439v1ar = [];
const smo60419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60419.setAttribute('id', 'smo60419');
smo60419.setStyle({ fillStyle: "#115511" });
smo60439v1ar.push(smo60419);
const smo60420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60420.setAttribute('id', 'smo60420');
smo60420.setStyle({ fillStyle: "#115511" });
smo60439v1ar.push(smo60420);
const smo60421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60421.setAttribute('id', 'smo60421');
smo60421.setStyle({ fillStyle: "#115511" });
smo60439v1ar.push(smo60421);
const smo60422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60422.setAttribute('id', 'smo60422');
smo60422.setStyle({ fillStyle: "#115511" });
const smo604220acc = new VF.Accidental('b');
smo60422.addModifier(smo604220acc, 0);
smo60439v1ar.push(smo60422);
const smo60423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60423.setAttribute('id', 'smo60423');
smo60423.setStyle({ fillStyle: "#115511" });
smo60439v1ar.push(smo60423);
const smo60424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60424.setAttribute('id', 'smo60424');
smo60424.setStyle({ fillStyle: "#115511" });
smo60439v1ar.push(smo60424);
const smo60425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60425.setAttribute('id', 'smo60425');
smo60425.setStyle({ fillStyle: "#115511" });
smo60439v1ar.push(smo60425);
smo60439v1.addTickables(smo60439v1ar)
fmtsmo6043956.joinVoices([smo60439v1]);
const fmtsmo6546656 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo65466v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65466v0ar = [];
const smo65438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65438.setAttribute('id', 'smo65438');
smo65438.addModifier(new VF.Dot(), 0);
smo65466v0ar.push(smo65438);
const smo65439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo65439.setAttribute('id', 'smo65439');
smo65466v0ar.push(smo65439);
const smo65440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo65440.setAttribute('id', 'smo65440');
smo65466v0ar.push(smo65440);
const smo65441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo65441.setAttribute('id', 'smo65441');
smo65466v0ar.push(smo65441);
const smo65442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo65442.setAttribute('id', 'smo65442');
smo65466v0ar.push(smo65442);
const smo65443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65443.setAttribute('id', 'smo65443');
smo65466v0ar.push(smo65443);
const smo65444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo65444.setAttribute('id', 'smo65444');
smo65466v0ar.push(smo65444);
const smo65445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo65445.setAttribute('id', 'smo65445');
smo65466v0ar.push(smo65445);
const smo65446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo65446.setAttribute('id', 'smo65446');
smo65466v0ar.push(smo65446);
const smo65447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo65447.setAttribute('id', 'smo65447');
smo65466v0ar.push(smo65447);
const smo65448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo65448.setAttribute('id', 'smo65448');
smo65466v0ar.push(smo65448);
smo65466v0.addTickables(smo65466v0ar)
fmtsmo6546656.joinVoices([smo65466v0]);
const smo65466v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65466v1ar = [];
const smo65449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65449.setAttribute('id', 'smo65449');
smo65449.setStyle({ fillStyle: "#115511" });
smo65466v1ar.push(smo65449);
const smo65450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65450.setAttribute('id', 'smo65450');
smo65450.setStyle({ fillStyle: "#115511" });
smo65466v1ar.push(smo65450);
const smo65451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65451.setAttribute('id', 'smo65451');
smo65451.setStyle({ fillStyle: "#115511" });
smo65466v1ar.push(smo65451);
const smo65452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65452.setAttribute('id', 'smo65452');
smo65452.setStyle({ fillStyle: "#115511" });
smo65466v1ar.push(smo65452);
smo65466v1.addTickables(smo65466v1ar)
fmtsmo6546656.joinVoices([smo65466v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68737 = smo60403.getStemDirection();
smo60403.setStemDirection(dirsmo68737);
smo60404.setStemDirection(dirsmo68737);
smo60405.setStemDirection(dirsmo68737);
smo60406.setStemDirection(dirsmo68737);
const smo68737 = new VF.Beam([smo60403,smo60404,smo60405,smo60406]);
const dirsmo68738 = smo60407.getStemDirection();
smo60407.setStemDirection(dirsmo68738);
smo60408.setStemDirection(dirsmo68738);
smo60409.setStemDirection(dirsmo68738);
smo60410.setStemDirection(dirsmo68738);
const smo68738 = new VF.Beam([smo60407,smo60408,smo60409,smo60410]);
const dirsmo68739 = smo60411.getStemDirection();
smo60411.setStemDirection(dirsmo68739);
smo60412.setStemDirection(dirsmo68739);
smo60413.setStemDirection(dirsmo68739);
smo60414.setStemDirection(dirsmo68739);
const smo68739 = new VF.Beam([smo60411,smo60412,smo60413,smo60414]);
const dirsmo68740 = smo60415.getStemDirection();
smo60415.setStemDirection(dirsmo68740);
smo60416.setStemDirection(dirsmo68740);
smo60417.setStemDirection(dirsmo68740);
smo60418.setStemDirection(dirsmo68740);
const smo68740 = new VF.Beam([smo60415,smo60416,smo60417,smo60418]);
const dirsmo68741 = smo60420.getStemDirection();
smo60420.setStemDirection(dirsmo68741);
smo60421.setStemDirection(dirsmo68741);
smo60422.setStemDirection(dirsmo68741);
const smo68741 = new VF.Beam([smo60420,smo60421,smo60422]);
const dirsmo68742 = smo60424.getStemDirection();
smo60424.setStemDirection(dirsmo68742);
smo60425.setStemDirection(dirsmo68742);
const smo68742 = new VF.Beam([smo60424,smo60425]);
const dirsmo68745 = smo65438.getStemDirection();
smo65438.setStemDirection(dirsmo68745);
smo65439.setStemDirection(dirsmo68745);
smo65440.setStemDirection(dirsmo68745);
const smo68745 = new VF.Beam([smo65438,smo65439,smo65440]);
const dirsmo68746 = smo65441.getStemDirection();
smo65441.setStemDirection(dirsmo68746);
smo65442.setStemDirection(dirsmo68746);
const smo68746 = new VF.Beam([smo65441,smo65442]);
const dirsmo68747 = smo65443.getStemDirection();
smo65443.setStemDirection(dirsmo68747);
smo65444.setStemDirection(dirsmo68747);
const smo68747 = new VF.Beam([smo65443,smo65444]);
const dirsmo68748 = smo65445.getStemDirection();
smo65445.setStemDirection(dirsmo68748);
smo65446.setStemDirection(dirsmo68748);
smo65447.setStemDirection(dirsmo68748);
smo65448.setStemDirection(dirsmo68748);
const smo68748 = new VF.Beam([smo65445,smo65446,smo65447,smo65448]);
const dirsmo68749 = smo65451.getStemDirection();
smo65451.setStemDirection(dirsmo68749);
smo65452.setStemDirection(dirsmo68749);
const smo68749 = new VF.Beam([smo65451,smo65452]);
 
// formatting measures in staff group smo57447
fmtsmo6043956.format([smo60439v0,smo60439v1,smo65466v0,smo65466v1], 435);
const stavesmo60439 = new VF.Stave(90, 1331, 493);
stavesmo60439.setAttribute('id', 'stavesmo60439');
stavesmo60439.setBegBarType(1);
stavesmo60439.addClef('treble');
stavesmo60439.setContext(context);
stavesmo60439.draw();
smo60439v0.draw(context, stavesmo60439);
smo60439v1.draw(context, stavesmo60439);
smo68737.setContext(context);
smo68737.draw();
smo68738.setContext(context);
smo68738.draw();
smo68739.setContext(context);
smo68739.draw();
smo68740.setContext(context);
smo68740.draw();
smo68741.setContext(context);
smo68741.draw();
smo68742.setContext(context);
smo68742.draw();
const stavesmo65466 = new VF.Stave(90, 1450, 493);
stavesmo65466.setAttribute('id', 'stavesmo65466');
stavesmo65466.setBegBarType(1);
stavesmo65466.addClef('treble');
stavesmo65466.setContext(context);
stavesmo65466.draw();
smo65466v0.draw(context, stavesmo65466);
smo65466v1.draw(context, stavesmo65466);
smo68745.setContext(context);
smo68745.draw();
smo68746.setContext(context);
smo68746.draw();
smo68747.setContext(context);
smo68747.draw();
smo68748.setContext(context);
smo68748.draw();
smo68749.setContext(context);
smo68749.draw();
const leftsmo57447stavesmo604391 = new VF.StaveConnector(stavesmo60439, stavesmo65466).setType(3);
leftsmo57447stavesmo604391.setContext(context).draw();
const fmtsmo6046457 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo60464v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60464v0ar = [];
const smo60440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60440.setAttribute('id', 'smo60440');
smo60464v0ar.push(smo60440);
const smo60441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60441.setAttribute('id', 'smo60441');
smo60464v0ar.push(smo60441);
const smo60442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60442.setAttribute('id', 'smo60442');
smo60464v0ar.push(smo60442);
const smo60443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60443.setAttribute('id', 'smo60443');
smo60464v0ar.push(smo60443);
const smo60444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60444.setAttribute('id', 'smo60444');
smo60464v0ar.push(smo60444);
const smo60445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60445.setAttribute('id', 'smo60445');
smo60464v0ar.push(smo60445);
smo60464v0.addTickables(smo60464v0ar)
fmtsmo6046457.joinVoices([smo60464v0]);
const smo60464v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60464v1ar = [];
const smo60446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60446.setAttribute('id', 'smo60446');
smo60446.setStyle({ fillStyle: "#115511" });
smo60446.addModifier(new VF.Dot(), 0);
smo60464v1ar.push(smo60446);
const smo60447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60447.setAttribute('id', 'smo60447');
smo60447.setStyle({ fillStyle: "#115511" });
smo60464v1ar.push(smo60447);
const smo60448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo60448.setAttribute('id', 'smo60448');
smo60448.setStyle({ fillStyle: "#115511" });
smo60464v1ar.push(smo60448);
const smo60449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60449.setAttribute('id', 'smo60449');
smo60449.setStyle({ fillStyle: "#115511" });
smo60464v1ar.push(smo60449);
const smo60450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60450.setAttribute('id', 'smo60450');
smo60450.setStyle({ fillStyle: "#115511" });
smo60464v1ar.push(smo60450);
smo60464v1.addTickables(smo60464v1ar)
fmtsmo6046457.joinVoices([smo60464v1]);
const fmtsmo6550057 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo65500v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65500v0ar = [];
const smo65467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65467.setAttribute('id', 'smo65467');
smo65500v0ar.push(smo65467);
const smo65468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo65468.setAttribute('id', 'smo65468');
smo65500v0ar.push(smo65468);
const smo65469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65469.setAttribute('id', 'smo65469');
smo65500v0ar.push(smo65469);
const smo65470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo65470.setAttribute('id', 'smo65470');
smo65500v0ar.push(smo65470);
const smo65471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65471.setAttribute('id', 'smo65471');
smo65500v0ar.push(smo65471);
const smo65472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65472.setAttribute('id', 'smo65472');
smo65500v0ar.push(smo65472);
smo65500v0.addTickables(smo65500v0ar)
fmtsmo6550057.joinVoices([smo65500v0]);
const smo65500v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65500v1ar = [];
const smo65473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65473.setAttribute('id', 'smo65473');
smo65473.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65473);
const smo65474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65474.setAttribute('id', 'smo65474');
smo65474.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65474);
const smo65475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65475.setAttribute('id', 'smo65475');
smo65475.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65475);
const smo65476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65476.setAttribute('id', 'smo65476');
smo65476.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65476);
const smo65477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65477.setAttribute('id', 'smo65477');
smo65477.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65477);
const smo65478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65478.setAttribute('id', 'smo65478');
smo65478.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65478);
const smo65479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65479.setAttribute('id', 'smo65479');
smo65479.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65479);
const smo65480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/2/n"]}'))
smo65480.setAttribute('id', 'smo65480');
smo65480.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65480);
const smo65481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65481.setAttribute('id', 'smo65481');
smo65481.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65481);
const smo65482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65482.setAttribute('id', 'smo65482');
smo65482.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65482);
const smo65483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65483.setAttribute('id', 'smo65483');
smo65483.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65483);
const smo65484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65484.setAttribute('id', 'smo65484');
smo65484.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65484);
const smo65485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65485.setAttribute('id', 'smo65485');
smo65485.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65485);
const smo65486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo65486.setAttribute('id', 'smo65486');
smo65486.setStyle({ fillStyle: "#115511" });
smo65500v1ar.push(smo65486);
smo65500v1.addTickables(smo65500v1ar)
fmtsmo6550057.joinVoices([smo65500v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68752 = smo60441.getStemDirection();
smo60441.setStemDirection(dirsmo68752);
smo60442.setStemDirection(dirsmo68752);
const smo68752 = new VF.Beam([smo60441,smo60442]);
const dirsmo68753 = smo60448.getStemDirection();
smo60448.setStemDirection(dirsmo68753);
smo60449.setStemDirection(dirsmo68753);
const smo68753 = new VF.Beam([smo60448,smo60449]);
const dirsmo68756 = smo65468.getStemDirection();
smo65468.setStemDirection(dirsmo68756);
smo65469.setStemDirection(dirsmo68756);
const smo68756 = new VF.Beam([smo65468,smo65469]);
const dirsmo68757 = smo65470.getStemDirection();
smo65470.setStemDirection(dirsmo68757);
smo65471.setStemDirection(dirsmo68757);
const smo68757 = new VF.Beam([smo65470,smo65471]);
const dirsmo68758 = smo65473.getStemDirection();
smo65473.setStemDirection(dirsmo68758);
smo65474.setStemDirection(dirsmo68758);
smo65475.setStemDirection(dirsmo68758);
smo65476.setStemDirection(dirsmo68758);
const smo68758 = new VF.Beam([smo65473,smo65474,smo65475,smo65476]);
const dirsmo68759 = smo65477.getStemDirection();
smo65477.setStemDirection(dirsmo68759);
smo65478.setStemDirection(dirsmo68759);
smo65479.setStemDirection(dirsmo68759);
smo65480.setStemDirection(dirsmo68759);
const smo68759 = new VF.Beam([smo65477,smo65478,smo65479,smo65480]);
const dirsmo68760 = smo65481.getStemDirection();
smo65481.setStemDirection(dirsmo68760);
smo65482.setStemDirection(dirsmo68760);
smo65483.setStemDirection(dirsmo68760);
smo65484.setStemDirection(dirsmo68760);
const smo68760 = new VF.Beam([smo65481,smo65482,smo65483,smo65484]);
const dirsmo68761 = smo65485.getStemDirection();
smo65485.setStemDirection(dirsmo68761);
smo65486.setStemDirection(dirsmo68761);
const smo68761 = new VF.Beam([smo65485,smo65486]);
 
// formatting measures in staff group smo57447
fmtsmo6046457.format([smo60464v0,smo60464v1,smo65500v0,smo65500v1], 346);
const stavesmo60464 = new VF.Stave(583, 1331, 360);
stavesmo60464.setAttribute('id', 'stavesmo60464');
stavesmo60464.setBegBarType(VF.Barline.type.NONE);
stavesmo60464.setContext(context);
stavesmo60464.draw();
smo60464v0.draw(context, stavesmo60464);
smo60464v1.draw(context, stavesmo60464);
smo68752.setContext(context);
smo68752.draw();
smo68753.setContext(context);
smo68753.draw();
const stavesmo65500 = new VF.Stave(583, 1450, 360);
stavesmo65500.setAttribute('id', 'stavesmo65500');
stavesmo65500.setBegBarType(VF.Barline.type.NONE);
stavesmo65500.setContext(context);
stavesmo65500.draw();
smo65500v0.draw(context, stavesmo65500);
smo65500v1.draw(context, stavesmo65500);
smo68756.setContext(context);
smo68756.draw();
smo68757.setContext(context);
smo68757.draw();
smo68758.setContext(context);
smo68758.draw();
smo68759.setContext(context);
smo68759.draw();
smo68760.setContext(context);
smo68760.draw();
smo68761.setContext(context);
smo68761.draw();
const fmtsmo6049158 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo60491v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60491v0ar = [];
const smo60465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60465.setAttribute('id', 'smo60465');
smo60491v0ar.push(smo60465);
const smo60466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60466.setAttribute('id', 'smo60466');
smo60491v0ar.push(smo60466);
const smo60467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60467.setAttribute('id', 'smo60467');
const smo604670acc = new VF.Accidental('b');
smo60467.addModifier(smo604670acc, 0);
smo60491v0ar.push(smo60467);
const smo60468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60468.setAttribute('id', 'smo60468');
smo60491v0ar.push(smo60468);
const smo60469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60469.setAttribute('id', 'smo60469');
smo60491v0ar.push(smo60469);
const smo60470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60470.setAttribute('id', 'smo60470');
smo60491v0ar.push(smo60470);
smo60491v0.addTickables(smo60491v0ar)
fmtsmo6049158.joinVoices([smo60491v0]);
const smo60491v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60491v1ar = [];
const smo60471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60471.setAttribute('id', 'smo60471');
smo60471.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60471);
const smo60472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60472.setAttribute('id', 'smo60472');
smo60472.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60472);
const smo60473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60473.setAttribute('id', 'smo60473');
smo60473.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60473);
const smo60474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60474.setAttribute('id', 'smo60474');
smo60474.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60474);
const smo60475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60475.setAttribute('id', 'smo60475');
smo60475.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60475);
const smo60476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60476.setAttribute('id', 'smo60476');
smo60476.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60476);
const smo60477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60477.setAttribute('id', 'smo60477');
smo60477.setStyle({ fillStyle: "#115511" });
smo60491v1ar.push(smo60477);
smo60491v1.addTickables(smo60491v1ar)
fmtsmo6049158.joinVoices([smo60491v1]);
const fmtsmo6552458 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo65524v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65524v0ar = [];
const smo65501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65501.setAttribute('id', 'smo65501');
smo65524v0ar.push(smo65501);
const smo65502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65502.setAttribute('id', 'smo65502');
smo65524v0ar.push(smo65502);
const smo65503 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65503.setAttribute('id', 'smo65503');
smo65524v0ar.push(smo65503);
const smo65504 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65504.setAttribute('id', 'smo65504');
smo65524v0ar.push(smo65504);
const smo65505 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65505.setAttribute('id', 'smo65505');
smo65505.addModifier(new VF.Dot(), 0);
smo65524v0ar.push(smo65505);
const smo65506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65506.setAttribute('id', 'smo65506');
smo65524v0ar.push(smo65506);
const smo65507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65507.setAttribute('id', 'smo65507');
smo65524v0ar.push(smo65507);
const smo65508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65508.setAttribute('id', 'smo65508');
smo65524v0ar.push(smo65508);
const smo65509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65509.setAttribute('id', 'smo65509');
smo65524v0ar.push(smo65509);
smo65524v0.addTickables(smo65524v0ar)
fmtsmo6552458.joinVoices([smo65524v0]);
const smo65524v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65524v1ar = [];
const smo65510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo65510.setAttribute('id', 'smo65510');
smo65510.setStyle({ fillStyle: "#115511" });
smo65524v1ar.push(smo65510);
smo65524v1.addTickables(smo65524v1ar)
fmtsmo6552458.joinVoices([smo65524v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68764 = smo60466.getStemDirection();
smo60466.setStemDirection(dirsmo68764);
smo60467.setStemDirection(dirsmo68764);
const smo68764 = new VF.Beam([smo60466,smo60467]);
const dirsmo68765 = smo60474.getStemDirection();
smo60474.setStemDirection(dirsmo68765);
smo60475.setStemDirection(dirsmo68765);
const smo68765 = new VF.Beam([smo60474,smo60475]);
const dirsmo68766 = smo60476.getStemDirection();
smo60476.setStemDirection(dirsmo68766);
smo60477.setStemDirection(dirsmo68766);
const smo68766 = new VF.Beam([smo60476,smo60477]);
const dirsmo68769 = smo65501.getStemDirection();
smo65501.setStemDirection(dirsmo68769);
smo65502.setStemDirection(dirsmo68769);
smo65503.setStemDirection(dirsmo68769);
smo65504.setStemDirection(dirsmo68769);
const smo68769 = new VF.Beam([smo65501,smo65502,smo65503,smo65504]);
const dirsmo68770 = smo65505.getStemDirection();
smo65505.setStemDirection(dirsmo68770);
smo65506.setStemDirection(dirsmo68770);
smo65507.setStemDirection(dirsmo68770);
const smo68770 = new VF.Beam([smo65505,smo65506,smo65507]);
const dirsmo68771 = smo65508.getStemDirection();
smo65508.setStemDirection(dirsmo68771);
smo65509.setStemDirection(dirsmo68771);
const smo68771 = new VF.Beam([smo65508,smo65509]);
 
// formatting measures in staff group smo57447
fmtsmo6049158.format([smo60491v0,smo60491v1,smo65524v0,smo65524v1], 309);
const stavesmo60491 = new VF.Stave(943, 1331, 357);
stavesmo60491.setAttribute('id', 'stavesmo60491');
stavesmo60491.setBegBarType(VF.Barline.type.NONE);
stavesmo60491.setContext(context);
stavesmo60491.draw();
smo60491v0.draw(context, stavesmo60491);
smo60491v1.draw(context, stavesmo60491);
smo68764.setContext(context);
smo68764.draw();
smo68765.setContext(context);
smo68765.draw();
smo68766.setContext(context);
smo68766.draw();
const stavesmo65524 = new VF.Stave(943, 1450, 357);
stavesmo65524.setAttribute('id', 'stavesmo65524');
stavesmo65524.setBegBarType(VF.Barline.type.NONE);
stavesmo65524.addClef('bass');
stavesmo65524.setContext(context);
stavesmo65524.draw();
smo65524v0.draw(context, stavesmo65524);
smo65524v1.draw(context, stavesmo65524);
smo68769.setContext(context);
smo68769.draw();
smo68770.setContext(context);
smo68770.draw();
smo68771.setContext(context);
smo68771.draw();
const fmtsmo6052759 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo60527v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60527v0ar = [];
const smo60492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60492.setAttribute('id', 'smo60492');
smo60527v0ar.push(smo60492);
const smo60493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60493.setAttribute('id', 'smo60493');
smo60527v0ar.push(smo60493);
const smo60494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60494.setAttribute('id', 'smo60494');
smo60527v0ar.push(smo60494);
const smo60495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60495.setAttribute('id', 'smo60495');
smo60527v0ar.push(smo60495);
const smo60496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60496.setAttribute('id', 'smo60496');
smo60527v0ar.push(smo60496);
const smo60497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60497.setAttribute('id', 'smo60497');
smo60527v0ar.push(smo60497);
const smo60498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60498.setAttribute('id', 'smo60498');
smo60527v0ar.push(smo60498);
const smo60499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60499.setAttribute('id', 'smo60499');
smo60527v0ar.push(smo60499);
const smo60500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60500.setAttribute('id', 'smo60500');
smo60527v0ar.push(smo60500);
const smo60501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60501.setAttribute('id', 'smo60501');
smo60527v0ar.push(smo60501);
const smo60502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60502.setAttribute('id', 'smo60502');
smo60527v0ar.push(smo60502);
smo60527v0.addTickables(smo60527v0ar)
fmtsmo6052759.joinVoices([smo60527v0]);
const smo60527v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60527v1ar = [];
const smo60503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60503.setAttribute('id', 'smo60503');
smo60503.setStyle({ fillStyle: "#115511" });
const smo605030acc = new VF.Accidental('b');
smo60503.addModifier(smo605030acc, 0);
smo60503.addModifier(new VF.Dot(), 0);
smo60527v1ar.push(smo60503);
const smo60504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60504.setAttribute('id', 'smo60504');
smo60504.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60504);
const smo60505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60505.setAttribute('id', 'smo60505');
smo60505.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60505);
const smo60506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60506.setAttribute('id', 'smo60506');
smo60506.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60506);
const smo60507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60507.setAttribute('id', 'smo60507');
smo60507.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60507);
const smo60508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60508.setAttribute('id', 'smo60508');
smo60508.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60508);
const smo60509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60509.setAttribute('id', 'smo60509');
smo60509.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60509);
const smo60510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60510.setAttribute('id', 'smo60510');
smo60510.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60510);
const smo60511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60511.setAttribute('id', 'smo60511');
smo60511.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60511);
const smo60512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60512.setAttribute('id', 'smo60512');
smo60512.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60512);
const smo60513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60513.setAttribute('id', 'smo60513');
smo60513.setStyle({ fillStyle: "#115511" });
smo60527v1ar.push(smo60513);
smo60527v1.addTickables(smo60527v1ar)
fmtsmo6052759.joinVoices([smo60527v1]);
const fmtsmo6555359 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo65553v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65553v0ar = [];
const smo65525 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65525.setAttribute('id', 'smo65525');
smo65553v0ar.push(smo65525);
const smo65526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65526.setAttribute('id', 'smo65526');
smo65553v0ar.push(smo65526);
const smo65527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65527.setAttribute('id', 'smo65527');
smo65553v0ar.push(smo65527);
const smo65528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65528.setAttribute('id', 'smo65528');
smo65553v0ar.push(smo65528);
const smo65529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65529.setAttribute('id', 'smo65529');
smo65553v0ar.push(smo65529);
const smo65530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65530.setAttribute('id', 'smo65530');
smo65553v0ar.push(smo65530);
const smo65531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65531.setAttribute('id', 'smo65531');
smo65553v0ar.push(smo65531);
const smo65532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65532.setAttribute('id', 'smo65532');
smo65553v0ar.push(smo65532);
const smo65533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65533.setAttribute('id', 'smo65533');
smo65553v0ar.push(smo65533);
const smo65534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65534.setAttribute('id', 'smo65534');
smo65553v0ar.push(smo65534);
const smo65535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65535.setAttribute('id', 'smo65535');
smo65553v0ar.push(smo65535);
const smo65536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65536.setAttribute('id', 'smo65536');
smo65553v0ar.push(smo65536);
const smo65537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65537.setAttribute('id', 'smo65537');
const smo655370acc = new VF.Accidental('b');
smo65537.addModifier(smo655370acc, 0);
smo65553v0ar.push(smo65537);
const smo65538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65538.setAttribute('id', 'smo65538');
smo65553v0ar.push(smo65538);
smo65553v0.addTickables(smo65553v0ar)
fmtsmo6555359.joinVoices([smo65553v0]);
const smo65553v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65553v1ar = [];
const smo65539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo65539.setAttribute('id', 'smo65539');
smo65539.setStyle({ fillStyle: "#115511" });
smo65553v1ar.push(smo65539);
smo65553v1.addTickables(smo65553v1ar)
fmtsmo6555359.joinVoices([smo65553v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68774 = smo60492.getStemDirection();
smo60492.setStemDirection(dirsmo68774);
smo60493.setStemDirection(dirsmo68774);
const smo68774 = new VF.Beam([smo60492,smo60493]);
const dirsmo68775 = smo60495.getStemDirection();
smo60495.setStemDirection(dirsmo68775);
smo60496.setStemDirection(dirsmo68775);
smo60497.setStemDirection(dirsmo68775);
smo60498.setStemDirection(dirsmo68775);
const smo68775 = new VF.Beam([smo60495,smo60496,smo60497,smo60498]);
const dirsmo68776 = smo60499.getStemDirection();
smo60499.setStemDirection(dirsmo68776);
smo60500.setStemDirection(dirsmo68776);
smo60501.setStemDirection(dirsmo68776);
smo60502.setStemDirection(dirsmo68776);
const smo68776 = new VF.Beam([smo60499,smo60500,smo60501,smo60502]);
const dirsmo68777 = smo60503.getStemDirection();
smo60503.setStemDirection(dirsmo68777);
smo60504.setStemDirection(dirsmo68777);
smo60505.setStemDirection(dirsmo68777);
const smo68777 = new VF.Beam([smo60503,smo60504,smo60505]);
const dirsmo68778 = smo60506.getStemDirection();
smo60506.setStemDirection(dirsmo68778);
smo60507.setStemDirection(dirsmo68778);
const smo68778 = new VF.Beam([smo60506,smo60507]);
const dirsmo68779 = smo60508.getStemDirection();
smo60508.setStemDirection(dirsmo68779);
smo60509.setStemDirection(dirsmo68779);
const smo68779 = new VF.Beam([smo60508,smo60509]);
const dirsmo68780 = smo60510.getStemDirection();
smo60510.setStemDirection(dirsmo68780);
smo60511.setStemDirection(dirsmo68780);
smo60512.setStemDirection(dirsmo68780);
smo60513.setStemDirection(dirsmo68780);
const smo68780 = new VF.Beam([smo60510,smo60511,smo60512,smo60513]);
const dirsmo68783 = smo65525.getStemDirection();
smo65525.setStemDirection(dirsmo68783);
smo65526.setStemDirection(dirsmo68783);
const smo68783 = new VF.Beam([smo65525,smo65526]);
const dirsmo68784 = smo65527.getStemDirection();
smo65527.setStemDirection(dirsmo68784);
smo65528.setStemDirection(dirsmo68784);
smo65529.setStemDirection(dirsmo68784);
smo65530.setStemDirection(dirsmo68784);
const smo68784 = new VF.Beam([smo65527,smo65528,smo65529,smo65530]);
const dirsmo68785 = smo65531.getStemDirection();
smo65531.setStemDirection(dirsmo68785);
smo65532.setStemDirection(dirsmo68785);
smo65533.setStemDirection(dirsmo68785);
smo65534.setStemDirection(dirsmo68785);
const smo68785 = new VF.Beam([smo65531,smo65532,smo65533,smo65534]);
const dirsmo68786 = smo65535.getStemDirection();
smo65535.setStemDirection(dirsmo68786);
smo65536.setStemDirection(dirsmo68786);
smo65537.setStemDirection(dirsmo68786);
smo65538.setStemDirection(dirsmo68786);
const smo68786 = new VF.Beam([smo65535,smo65536,smo65537,smo65538]);
 
// formatting measures in staff group smo57447
fmtsmo6052759.format([smo60527v0,smo60527v1,smo65553v0,smo65553v1], 495);
const stavesmo60527 = new VF.Stave(1300, 1331, 509);
stavesmo60527.setAttribute('id', 'stavesmo60527');
stavesmo60527.setBegBarType(VF.Barline.type.NONE);
stavesmo60527.setContext(context);
stavesmo60527.draw();
smo60527v0.draw(context, stavesmo60527);
smo60527v1.draw(context, stavesmo60527);
smo68774.setContext(context);
smo68774.draw();
smo68775.setContext(context);
smo68775.draw();
smo68776.setContext(context);
smo68776.draw();
smo68777.setContext(context);
smo68777.draw();
smo68778.setContext(context);
smo68778.draw();
smo68779.setContext(context);
smo68779.draw();
smo68780.setContext(context);
smo68780.draw();
const stavesmo65553 = new VF.Stave(1300, 1450, 509);
stavesmo65553.setAttribute('id', 'stavesmo65553');
stavesmo65553.setBegBarType(VF.Barline.type.NONE);
stavesmo65553.setContext(context);
stavesmo65553.draw();
smo65553v0.draw(context, stavesmo65553);
smo65553v1.draw(context, stavesmo65553);
smo68783.setContext(context);
smo68783.draw();
smo68784.setContext(context);
smo68784.draw();
smo68785.setContext(context);
smo68785.draw();
smo68786.setContext(context);
smo68786.draw();
const rightsmo57447stavesmo605271 = new VF.StaveConnector(stavesmo60527, stavesmo65553).setType(0);
rightsmo57447stavesmo605271.setContext(context).draw();
const fmtsmo6056160 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo60561v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60561v0ar = [];
const smo60528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60528.setAttribute('id', 'smo60528');
smo60561v0ar.push(smo60528);
const smo60529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60529.setAttribute('id', 'smo60529');
smo60561v0ar.push(smo60529);
const smo60530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60530.setAttribute('id', 'smo60530');
smo60561v0ar.push(smo60530);
const smo60531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo60531.setAttribute('id', 'smo60531');
smo60561v0ar.push(smo60531);
const smo60532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60532.setAttribute('id', 'smo60532');
const smo605320acc = new VF.Accidental('n');
smo60532.addModifier(smo605320acc, 0);
smo60561v0ar.push(smo60532);
const smo60533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60533.setAttribute('id', 'smo60533');
smo60561v0ar.push(smo60533);
const smo60534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60534.setAttribute('id', 'smo60534');
smo60561v0ar.push(smo60534);
const smo60535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60535.setAttribute('id', 'smo60535');
smo60561v0ar.push(smo60535);
const smo60536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60536.setAttribute('id', 'smo60536');
smo60561v0ar.push(smo60536);
smo60561v0.addTickables(smo60561v0ar)
fmtsmo6056160.joinVoices([smo60561v0]);
const smo60561v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60561v1ar = [];
const smo60537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60537.setAttribute('id', 'smo60537');
smo60537.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60537);
const smo60538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60538.setAttribute('id', 'smo60538');
smo60538.setStyle({ fillStyle: "#115511" });
const smo605380acc = new VF.Accidental('b');
smo60538.addModifier(smo605380acc, 0);
smo60561v1ar.push(smo60538);
const smo60539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60539.setAttribute('id', 'smo60539');
smo60539.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60539);
const smo60540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60540.setAttribute('id', 'smo60540');
smo60540.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60540);
const smo60541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60541.setAttribute('id', 'smo60541');
smo60541.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60541);
const smo60542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60542.setAttribute('id', 'smo60542');
smo60542.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60542);
const smo60543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60543.setAttribute('id', 'smo60543');
smo60543.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60543);
const smo60544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo60544.setAttribute('id', 'smo60544');
smo60544.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60544);
const smo60545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60545.setAttribute('id', 'smo60545');
smo60545.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60545);
const smo60546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60546.setAttribute('id', 'smo60546');
smo60546.setStyle({ fillStyle: "#115511" });
smo60546.addModifier(new VF.Dot(), 0);
smo60561v1ar.push(smo60546);
const smo60547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60547.setAttribute('id', 'smo60547');
smo60547.setStyle({ fillStyle: "#115511" });
smo60561v1ar.push(smo60547);
smo60561v1.addTickables(smo60561v1ar)
fmtsmo6056160.joinVoices([smo60561v1]);
const fmtsmo6557760 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo65577v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65577v0ar = [];
const smo65554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65554.setAttribute('id', 'smo65554');
smo65577v0ar.push(smo65554);
const smo65555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo65555.setAttribute('id', 'smo65555');
smo65577v0ar.push(smo65555);
const smo65556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65556.setAttribute('id', 'smo65556');
smo65577v0ar.push(smo65556);
const smo65557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65557.setAttribute('id', 'smo65557');
smo65577v0ar.push(smo65557);
const smo65558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65558.setAttribute('id', 'smo65558');
smo65577v0ar.push(smo65558);
const smo65559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65559.setAttribute('id', 'smo65559');
smo65577v0ar.push(smo65559);
const smo65560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65560.setAttribute('id', 'smo65560');
smo65577v0ar.push(smo65560);
const smo65561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo65561.setAttribute('id', 'smo65561');
smo65577v0ar.push(smo65561);
const smo65562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo65562.setAttribute('id', 'smo65562');
smo65577v0ar.push(smo65562);
smo65577v0.addTickables(smo65577v0ar)
fmtsmo6557760.joinVoices([smo65577v0]);
const smo65577v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65577v1ar = [];
const smo65563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo65563.setAttribute('id', 'smo65563');
smo65563.setStyle({ fillStyle: "#115511" });
smo65577v1ar.push(smo65563);
smo65577v1.addTickables(smo65577v1ar)
fmtsmo6557760.joinVoices([smo65577v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68800 = smo60530.getStemDirection();
smo60530.setStemDirection(dirsmo68800);
smo60531.setStemDirection(dirsmo68800);
smo60532.setStemDirection(dirsmo68800);
smo60533.setStemDirection(dirsmo68800);
const smo68800 = new VF.Beam([smo60530,smo60531,smo60532,smo60533]);
const dirsmo68801 = smo60534.getStemDirection();
smo60534.setStemDirection(dirsmo68801);
smo60535.setStemDirection(dirsmo68801);
smo60536.setStemDirection(dirsmo68801);
const smo68801 = new VF.Beam([smo60534,smo60535,smo60536]);
const dirsmo68802 = smo60537.getStemDirection();
smo60537.setStemDirection(dirsmo68802);
smo60538.setStemDirection(dirsmo68802);
smo60539.setStemDirection(dirsmo68802);
smo60540.setStemDirection(dirsmo68802);
const smo68802 = new VF.Beam([smo60537,smo60538,smo60539,smo60540]);
const dirsmo68803 = smo60541.getStemDirection();
smo60541.setStemDirection(dirsmo68803);
smo60542.setStemDirection(dirsmo68803);
smo60543.setStemDirection(dirsmo68803);
smo60544.setStemDirection(dirsmo68803);
const smo68803 = new VF.Beam([smo60541,smo60542,smo60543,smo60544]);
const dirsmo68804 = smo60546.getStemDirection();
smo60546.setStemDirection(dirsmo68804);
smo60547.setStemDirection(dirsmo68804);
const smo68804 = new VF.Beam([smo60546,smo60547]);
const dirsmo68807 = smo65554.getStemDirection();
smo65554.setStemDirection(dirsmo68807);
smo65555.setStemDirection(dirsmo68807);
smo65556.setStemDirection(dirsmo68807);
smo65557.setStemDirection(dirsmo68807);
const smo68807 = new VF.Beam([smo65554,smo65555,smo65556,smo65557]);
const dirsmo68808 = smo65558.getStemDirection();
smo65558.setStemDirection(dirsmo68808);
smo65559.setStemDirection(dirsmo68808);
smo65560.setStemDirection(dirsmo68808);
smo65561.setStemDirection(dirsmo68808);
const smo68808 = new VF.Beam([smo65558,smo65559,smo65560,smo65561]);
 
// formatting measures in staff group smo57447
fmtsmo6056160.format([smo60561v0,smo60561v1,smo65577v0,smo65577v1], 521);
const stavesmo60561 = new VF.Stave(90, 1679, 579);
stavesmo60561.setAttribute('id', 'stavesmo60561');
stavesmo60561.setBegBarType(1);
stavesmo60561.addClef('treble');
stavesmo60561.setContext(context);
stavesmo60561.draw();
smo60561v0.draw(context, stavesmo60561);
smo60561v1.draw(context, stavesmo60561);
smo68800.setContext(context);
smo68800.draw();
smo68801.setContext(context);
smo68801.draw();
smo68802.setContext(context);
smo68802.draw();
smo68803.setContext(context);
smo68803.draw();
smo68804.setContext(context);
smo68804.draw();
const stavesmo65577 = new VF.Stave(90, 1808, 579);
stavesmo65577.setAttribute('id', 'stavesmo65577');
stavesmo65577.setBegBarType(1);
stavesmo65577.addClef('bass');
stavesmo65577.setContext(context);
stavesmo65577.draw();
smo65577v0.draw(context, stavesmo65577);
smo65577v1.draw(context, stavesmo65577);
smo68807.setContext(context);
smo68807.draw();
smo68808.setContext(context);
smo68808.draw();
const leftsmo57447stavesmo605611 = new VF.StaveConnector(stavesmo60561, stavesmo65577).setType(3);
leftsmo57447stavesmo605611.setContext(context).draw();
const fmtsmo6059061 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo60590v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60590v0ar = [];
const smo60562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60562.setAttribute('id', 'smo60562');
smo60590v0ar.push(smo60562);
const smo60563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60563.setAttribute('id', 'smo60563');
smo60590v0ar.push(smo60563);
const smo60564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60564.setAttribute('id', 'smo60564');
smo60590v0ar.push(smo60564);
const smo60565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo60565.setAttribute('id', 'smo60565');
smo60590v0ar.push(smo60565);
const smo60566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60566.setAttribute('id', 'smo60566');
smo60590v0ar.push(smo60566);
const smo60567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo60567.setAttribute('id', 'smo60567');
smo60590v0ar.push(smo60567);
const smo60568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo60568.setAttribute('id', 'smo60568');
smo60568.addModifier(new VF.Dot(), 0);
smo60590v0ar.push(smo60568);
const smo60569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/5/n"]}'))
smo60569.setAttribute('id', 'smo60569');
smo60590v0ar.push(smo60569);
const smo60570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/6/n"]}'))
smo60570.setAttribute('id', 'smo60570');
const  smo70700 = new VF.Articulation('a@a').setPosition(3);
smo60570.addModifier(smo70700, 0);
smo60590v0ar.push(smo60570);
smo60590v0.addTickables(smo60590v0ar)
fmtsmo6059061.joinVoices([smo60590v0]);
const smo60590v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60590v1ar = [];
const smo60572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo60572.setAttribute('id', 'smo60572');
smo60572.setStyle({ fillStyle: "#115511" });
smo60590v1ar.push(smo60572);
const smo60573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo60573.setAttribute('id', 'smo60573');
smo60573.setStyle({ fillStyle: "#115511" });
smo60590v1ar.push(smo60573);
const smo60574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo60574.setAttribute('id', 'smo60574');
smo60574.setStyle({ fillStyle: "#115511" });
smo60590v1ar.push(smo60574);
const smo60575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60575.setAttribute('id', 'smo60575');
smo60575.setStyle({ fillStyle: "#115511" });
smo60590v1ar.push(smo60575);
const smo60576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n","gn/5/n"]}'))
smo60576.setAttribute('id', 'smo60576');
smo60576.setStyle({ fillStyle: "#115511" });
smo60590v1ar.push(smo60576);
smo60590v1.addTickables(smo60590v1ar)
fmtsmo6059061.joinVoices([smo60590v1]);
const fmtsmo6559361 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo65593v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65593v0ar = [];
const smo65578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo65578.setAttribute('id', 'smo65578');
smo65593v0ar.push(smo65578);
smo65593v0.addTickables(smo65593v0ar)
fmtsmo6559361.joinVoices([smo65593v0]);
const smo65593v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65593v1ar = [];
const smo65579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo65579.setAttribute('id', 'smo65579');
smo65579.setStyle({ fillStyle: "#115511" });
smo65593v1ar.push(smo65579);
smo65593v1.addTickables(smo65593v1ar)
fmtsmo6559361.joinVoices([smo65593v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68811 = smo60562.getStemDirection();
smo60562.setStemDirection(dirsmo68811);
smo60563.setStemDirection(dirsmo68811);
smo60564.setStemDirection(dirsmo68811);
smo60565.setStemDirection(dirsmo68811);
smo60566.setStemDirection(dirsmo68811);
smo60567.setStemDirection(dirsmo68811);
const smo68811 = new VF.Beam([smo60562,smo60563,smo60564,smo60565,smo60566,smo60567]);
const dirsmo68812 = smo60568.getStemDirection();
smo60568.setStemDirection(dirsmo68812);
smo60569.setStemDirection(dirsmo68812);
const smo68812 = new VF.Beam([smo60568,smo60569]);
const dirsmo68813 = smo60574.getStemDirection();
smo60574.setStemDirection(dirsmo68813);
smo60575.setStemDirection(dirsmo68813);
const smo68813 = new VF.Beam([smo60574,smo60575]);
 
// formatting measures in staff group smo57447
fmtsmo6059061.format([smo60590v0,smo60590v1,smo65593v0,smo65593v1], 329);
const stavesmo60590 = new VF.Stave(669, 1679, 351);
stavesmo60590.setAttribute('id', 'stavesmo60590');
stavesmo60590.setBegBarType(VF.Barline.type.NONE);
stavesmo60590.setEndBarType(3);
stavesmo60590.setContext(context);
stavesmo60590.draw();
smo60590v0.draw(context, stavesmo60590);
smo60590v1.draw(context, stavesmo60590);
smo68811.setContext(context);
smo68811.draw();
smo68812.setContext(context);
smo68812.draw();
smo68813.setContext(context);
smo68813.draw();
const stavesmo65593 = new VF.Stave(669, 1808, 351);
stavesmo65593.setAttribute('id', 'stavesmo65593');
stavesmo65593.setBegBarType(VF.Barline.type.NONE);
stavesmo65593.setEndBarType(3);
stavesmo65593.setContext(context);
stavesmo65593.draw();
smo65593v0.draw(context, stavesmo65593);
smo65593v1.draw(context, stavesmo65593);
const fmtsmo6062062 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo60620v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60620v0ar = [];
const smo60591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60591.setAttribute('id', 'smo60591');
smo60620v0ar.push(smo60591);
const smo60592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60592.setAttribute('id', 'smo60592');
smo60620v0ar.push(smo60592);
const smo60593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60593.setAttribute('id', 'smo60593');
smo60620v0ar.push(smo60593);
const smo60594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60594.setAttribute('id', 'smo60594');
smo60620v0ar.push(smo60594);
const smo60595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60595.setAttribute('id', 'smo60595');
smo60620v0ar.push(smo60595);
const smo60596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60596.setAttribute('id', 'smo60596');
smo60620v0ar.push(smo60596);
const smo60597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60597.setAttribute('id', 'smo60597');
smo60620v0ar.push(smo60597);
const smo60598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60598.setAttribute('id', 'smo60598');
smo60620v0ar.push(smo60598);
const smo60599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60599.setAttribute('id', 'smo60599');
smo60620v0ar.push(smo60599);
const smo60600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60600.setAttribute('id', 'smo60600');
smo60620v0ar.push(smo60600);
const smo60601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60601.setAttribute('id', 'smo60601');
smo60620v0ar.push(smo60601);
const smo60602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60602.setAttribute('id', 'smo60602');
smo60620v0ar.push(smo60602);
const smo60603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60603.setAttribute('id', 'smo60603');
smo60620v0ar.push(smo60603);
const smo60604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60604.setAttribute('id', 'smo60604');
smo60620v0ar.push(smo60604);
const smo60605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60605.setAttribute('id', 'smo60605');
smo60620v0ar.push(smo60605);
const smo60606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60606.setAttribute('id', 'smo60606');
smo60620v0ar.push(smo60606);
smo60620v0.addTickables(smo60620v0ar)
fmtsmo6062062.joinVoices([smo60620v0]);
const fmtsmo6562362 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo65623v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65623v0ar = [];
const smo65594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65594.setAttribute('id', 'smo65594');
smo65623v0ar.push(smo65594);
const smo65595 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65595.setAttribute('id', 'smo65595');
smo65623v0ar.push(smo65595);
const smo65596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65596.setAttribute('id', 'smo65596');
smo65623v0ar.push(smo65596);
const smo65597 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65597.setAttribute('id', 'smo65597');
smo65623v0ar.push(smo65597);
const smo65598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65598.setAttribute('id', 'smo65598');
smo65623v0ar.push(smo65598);
const smo65599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65599.setAttribute('id', 'smo65599');
smo65623v0ar.push(smo65599);
const smo65600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65600.setAttribute('id', 'smo65600');
smo65623v0ar.push(smo65600);
const smo65601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65601.setAttribute('id', 'smo65601');
smo65623v0ar.push(smo65601);
const smo65602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65602.setAttribute('id', 'smo65602');
smo65623v0ar.push(smo65602);
const smo65603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65603.setAttribute('id', 'smo65603');
smo65623v0ar.push(smo65603);
const smo65604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65604.setAttribute('id', 'smo65604');
smo65623v0ar.push(smo65604);
const smo65605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65605.setAttribute('id', 'smo65605');
smo65623v0ar.push(smo65605);
const smo65606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65606.setAttribute('id', 'smo65606');
smo65623v0ar.push(smo65606);
const smo65607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65607.setAttribute('id', 'smo65607');
smo65623v0ar.push(smo65607);
const smo65608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65608.setAttribute('id', 'smo65608');
smo65623v0ar.push(smo65608);
const smo65609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65609.setAttribute('id', 'smo65609');
smo65623v0ar.push(smo65609);
smo65623v0.addTickables(smo65623v0ar)
fmtsmo6562362.joinVoices([smo65623v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68816 = smo60591.getStemDirection();
smo60591.setStemDirection(dirsmo68816);
smo60592.setStemDirection(dirsmo68816);
smo60593.setStemDirection(dirsmo68816);
smo60594.setStemDirection(dirsmo68816);
const smo68816 = new VF.Beam([smo60591,smo60592,smo60593,smo60594]);
const dirsmo68817 = smo60595.getStemDirection();
smo60595.setStemDirection(dirsmo68817);
smo60596.setStemDirection(dirsmo68817);
smo60597.setStemDirection(dirsmo68817);
smo60598.setStemDirection(dirsmo68817);
const smo68817 = new VF.Beam([smo60595,smo60596,smo60597,smo60598]);
const dirsmo68818 = smo60599.getStemDirection();
smo60599.setStemDirection(dirsmo68818);
smo60600.setStemDirection(dirsmo68818);
smo60601.setStemDirection(dirsmo68818);
smo60602.setStemDirection(dirsmo68818);
const smo68818 = new VF.Beam([smo60599,smo60600,smo60601,smo60602]);
const dirsmo68819 = smo60603.getStemDirection();
smo60603.setStemDirection(dirsmo68819);
smo60604.setStemDirection(dirsmo68819);
smo60605.setStemDirection(dirsmo68819);
smo60606.setStemDirection(dirsmo68819);
const smo68819 = new VF.Beam([smo60603,smo60604,smo60605,smo60606]);
const dirsmo68822 = smo65594.getStemDirection();
smo65594.setStemDirection(dirsmo68822);
smo65595.setStemDirection(dirsmo68822);
smo65596.setStemDirection(dirsmo68822);
smo65597.setStemDirection(dirsmo68822);
const smo68822 = new VF.Beam([smo65594,smo65595,smo65596,smo65597]);
const dirsmo68823 = smo65598.getStemDirection();
smo65598.setStemDirection(dirsmo68823);
smo65599.setStemDirection(dirsmo68823);
smo65600.setStemDirection(dirsmo68823);
smo65601.setStemDirection(dirsmo68823);
const smo68823 = new VF.Beam([smo65598,smo65599,smo65600,smo65601]);
const dirsmo68824 = smo65602.getStemDirection();
smo65602.setStemDirection(dirsmo68824);
smo65603.setStemDirection(dirsmo68824);
smo65604.setStemDirection(dirsmo68824);
smo65605.setStemDirection(dirsmo68824);
const smo68824 = new VF.Beam([smo65602,smo65603,smo65604,smo65605]);
const dirsmo68825 = smo65606.getStemDirection();
smo65606.setStemDirection(dirsmo68825);
smo65607.setStemDirection(dirsmo68825);
smo65608.setStemDirection(dirsmo68825);
smo65609.setStemDirection(dirsmo68825);
const smo68825 = new VF.Beam([smo65606,smo65607,smo65608,smo65609]);
 
// formatting measures in staff group smo57447
fmtsmo6062062.format([smo60620v0,smo65623v0], 335);
const stavesmo60620 = new VF.Stave(1020, 1679, 394);
stavesmo60620.setAttribute('id', 'stavesmo60620');
stavesmo60620.setBegBarType(VF.Barline.type.NONE);
stavesmo60620.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo60620 = new VF.KeySignature('Eb');
keysmo60620.cancelKey('C');
keysmo60620.addToStave(stavesmo60620);
stavesmo60620.setContext(context);
stavesmo60620.draw();
smo60620v0.draw(context, stavesmo60620);
smo68816.setContext(context);
smo68816.draw();
smo68817.setContext(context);
smo68817.draw();
smo68818.setContext(context);
smo68818.draw();
smo68819.setContext(context);
smo68819.draw();
const stavesmo65623 = new VF.Stave(1020, 1808, 394);
stavesmo65623.setAttribute('id', 'stavesmo65623');
stavesmo65623.setBegBarType(VF.Barline.type.NONE);
const keysmo65623 = new VF.KeySignature('Eb');
keysmo65623.cancelKey('C');
keysmo65623.addToStave(stavesmo65623);
stavesmo65623.setContext(context);
stavesmo65623.draw();
smo65623v0.draw(context, stavesmo65623);
smo68822.setContext(context);
smo68822.draw();
smo68823.setContext(context);
smo68823.draw();
smo68824.setContext(context);
smo68824.draw();
smo68825.setContext(context);
smo68825.draw();
const fmtsmo6065063 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo60650v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60650v0ar = [];
const smo60621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60621.setAttribute('id', 'smo60621');
smo60650v0ar.push(smo60621);
const smo60622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60622.setAttribute('id', 'smo60622');
smo60650v0ar.push(smo60622);
const smo60623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60623.setAttribute('id', 'smo60623');
const smo606230acc = new VF.Accidental('n');
smo60623.addModifier(smo606230acc, 0);
smo60650v0ar.push(smo60623);
const smo60624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60624.setAttribute('id', 'smo60624');
smo60650v0ar.push(smo60624);
const smo60625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60625.setAttribute('id', 'smo60625');
smo60650v0ar.push(smo60625);
const smo60626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60626.setAttribute('id', 'smo60626');
smo60650v0ar.push(smo60626);
const smo60627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60627.setAttribute('id', 'smo60627');
smo60650v0ar.push(smo60627);
const smo60628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60628.setAttribute('id', 'smo60628');
smo60650v0ar.push(smo60628);
const smo60629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60629.setAttribute('id', 'smo60629');
smo60650v0ar.push(smo60629);
const smo60630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60630.setAttribute('id', 'smo60630');
smo60650v0ar.push(smo60630);
const smo60631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60631.setAttribute('id', 'smo60631');
smo60650v0ar.push(smo60631);
const smo60632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60632.setAttribute('id', 'smo60632');
smo60650v0ar.push(smo60632);
const smo60633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60633.setAttribute('id', 'smo60633');
smo60650v0ar.push(smo60633);
const smo60634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60634.setAttribute('id', 'smo60634');
smo60650v0ar.push(smo60634);
const smo60635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60635.setAttribute('id', 'smo60635');
smo60650v0ar.push(smo60635);
const smo60636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60636.setAttribute('id', 'smo60636');
smo60650v0ar.push(smo60636);
smo60650v0.addTickables(smo60650v0ar)
fmtsmo6065063.joinVoices([smo60650v0]);
const fmtsmo6565363 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo65653v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65653v0ar = [];
const smo65624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65624.setAttribute('id', 'smo65624');
smo65653v0ar.push(smo65624);
const smo65625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65625.setAttribute('id', 'smo65625');
smo65653v0ar.push(smo65625);
const smo65626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65626.setAttribute('id', 'smo65626');
smo65653v0ar.push(smo65626);
const smo65627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65627.setAttribute('id', 'smo65627');
smo65653v0ar.push(smo65627);
const smo65628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65628.setAttribute('id', 'smo65628');
smo65653v0ar.push(smo65628);
const smo65629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65629.setAttribute('id', 'smo65629');
smo65653v0ar.push(smo65629);
const smo65630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65630.setAttribute('id', 'smo65630');
smo65653v0ar.push(smo65630);
const smo65631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65631.setAttribute('id', 'smo65631');
smo65653v0ar.push(smo65631);
const smo65632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65632.setAttribute('id', 'smo65632');
smo65653v0ar.push(smo65632);
const smo65633 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65633.setAttribute('id', 'smo65633');
smo65653v0ar.push(smo65633);
const smo65634 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65634.setAttribute('id', 'smo65634');
smo65653v0ar.push(smo65634);
const smo65635 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65635.setAttribute('id', 'smo65635');
smo65653v0ar.push(smo65635);
const smo65636 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65636.setAttribute('id', 'smo65636');
smo65653v0ar.push(smo65636);
const smo65637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65637.setAttribute('id', 'smo65637');
smo65653v0ar.push(smo65637);
const smo65638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65638.setAttribute('id', 'smo65638');
smo65653v0ar.push(smo65638);
const smo65639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65639.setAttribute('id', 'smo65639');
smo65653v0ar.push(smo65639);
smo65653v0.addTickables(smo65653v0ar)
fmtsmo6565363.joinVoices([smo65653v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68828 = smo60621.getStemDirection();
smo60621.setStemDirection(dirsmo68828);
smo60622.setStemDirection(dirsmo68828);
smo60623.setStemDirection(dirsmo68828);
smo60624.setStemDirection(dirsmo68828);
const smo68828 = new VF.Beam([smo60621,smo60622,smo60623,smo60624]);
const dirsmo68829 = smo60625.getStemDirection();
smo60625.setStemDirection(dirsmo68829);
smo60626.setStemDirection(dirsmo68829);
smo60627.setStemDirection(dirsmo68829);
smo60628.setStemDirection(dirsmo68829);
const smo68829 = new VF.Beam([smo60625,smo60626,smo60627,smo60628]);
const dirsmo68830 = smo60629.getStemDirection();
smo60629.setStemDirection(dirsmo68830);
smo60630.setStemDirection(dirsmo68830);
smo60631.setStemDirection(dirsmo68830);
smo60632.setStemDirection(dirsmo68830);
const smo68830 = new VF.Beam([smo60629,smo60630,smo60631,smo60632]);
const dirsmo68831 = smo60633.getStemDirection();
smo60633.setStemDirection(dirsmo68831);
smo60634.setStemDirection(dirsmo68831);
smo60635.setStemDirection(dirsmo68831);
smo60636.setStemDirection(dirsmo68831);
const smo68831 = new VF.Beam([smo60633,smo60634,smo60635,smo60636]);
const dirsmo68834 = smo65624.getStemDirection();
smo65624.setStemDirection(dirsmo68834);
smo65625.setStemDirection(dirsmo68834);
smo65626.setStemDirection(dirsmo68834);
smo65627.setStemDirection(dirsmo68834);
const smo68834 = new VF.Beam([smo65624,smo65625,smo65626,smo65627]);
const dirsmo68835 = smo65628.getStemDirection();
smo65628.setStemDirection(dirsmo68835);
smo65629.setStemDirection(dirsmo68835);
smo65630.setStemDirection(dirsmo68835);
smo65631.setStemDirection(dirsmo68835);
const smo68835 = new VF.Beam([smo65628,smo65629,smo65630,smo65631]);
const dirsmo68836 = smo65632.getStemDirection();
smo65632.setStemDirection(dirsmo68836);
smo65633.setStemDirection(dirsmo68836);
smo65634.setStemDirection(dirsmo68836);
smo65635.setStemDirection(dirsmo68836);
const smo68836 = new VF.Beam([smo65632,smo65633,smo65634,smo65635]);
const dirsmo68837 = smo65636.getStemDirection();
smo65636.setStemDirection(dirsmo68837);
smo65637.setStemDirection(dirsmo68837);
smo65638.setStemDirection(dirsmo68837);
smo65639.setStemDirection(dirsmo68837);
const smo68837 = new VF.Beam([smo65636,smo65637,smo65638,smo65639]);
 
// formatting measures in staff group smo57447
fmtsmo6065063.format([smo60650v0,smo65653v0], 379);
const stavesmo60650 = new VF.Stave(1414, 1679, 393);
stavesmo60650.setAttribute('id', 'stavesmo60650');
stavesmo60650.setBegBarType(VF.Barline.type.NONE);
stavesmo60650.setContext(context);
stavesmo60650.draw();
smo60650v0.draw(context, stavesmo60650);
smo68828.setContext(context);
smo68828.draw();
smo68829.setContext(context);
smo68829.draw();
smo68830.setContext(context);
smo68830.draw();
smo68831.setContext(context);
smo68831.draw();
const stavesmo65653 = new VF.Stave(1414, 1808, 393);
stavesmo65653.setAttribute('id', 'stavesmo65653');
stavesmo65653.setBegBarType(VF.Barline.type.NONE);
stavesmo65653.setContext(context);
stavesmo65653.draw();
smo65653v0.draw(context, stavesmo65653);
smo68834.setContext(context);
smo68834.draw();
smo68835.setContext(context);
smo68835.draw();
smo68836.setContext(context);
smo68836.draw();
smo68837.setContext(context);
smo68837.draw();
const rightsmo57447stavesmo606501 = new VF.StaveConnector(stavesmo60650, stavesmo65653).setType(0);
rightsmo57447stavesmo606501.setContext(context).draw();
const fmtsmo6068064 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo60680v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60680v0ar = [];
const smo60651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60651.setAttribute('id', 'smo60651');
const smo606510acc = new VF.Accidental('n');
smo60651.addModifier(smo606510acc, 0);
smo60680v0ar.push(smo60651);
const smo60652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60652.setAttribute('id', 'smo60652');
smo60680v0ar.push(smo60652);
const smo60653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60653.setAttribute('id', 'smo60653');
smo60680v0ar.push(smo60653);
const smo60654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60654.setAttribute('id', 'smo60654');
smo60680v0ar.push(smo60654);
const smo60655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60655.setAttribute('id', 'smo60655');
smo60680v0ar.push(smo60655);
const smo60656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60656.setAttribute('id', 'smo60656');
smo60680v0ar.push(smo60656);
const smo60657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60657.setAttribute('id', 'smo60657');
smo60680v0ar.push(smo60657);
const smo60658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60658.setAttribute('id', 'smo60658');
smo60680v0ar.push(smo60658);
const smo60659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo60659.setAttribute('id', 'smo60659');
smo60680v0ar.push(smo60659);
const smo60660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60660.setAttribute('id', 'smo60660');
smo60680v0ar.push(smo60660);
const smo60661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60661.setAttribute('id', 'smo60661');
smo60680v0ar.push(smo60661);
const smo60662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60662.setAttribute('id', 'smo60662');
smo60680v0ar.push(smo60662);
const smo60663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60663.setAttribute('id', 'smo60663');
smo60680v0ar.push(smo60663);
const smo60664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60664.setAttribute('id', 'smo60664');
smo60680v0ar.push(smo60664);
const smo60665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60665.setAttribute('id', 'smo60665');
smo60680v0ar.push(smo60665);
const smo60666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60666.setAttribute('id', 'smo60666');
smo60680v0ar.push(smo60666);
smo60680v0.addTickables(smo60680v0ar)
fmtsmo6068064.joinVoices([smo60680v0]);
const fmtsmo6568364 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo65683v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65683v0ar = [];
const smo65654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65654.setAttribute('id', 'smo65654');
smo65683v0ar.push(smo65654);
const smo65655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65655.setAttribute('id', 'smo65655');
smo65683v0ar.push(smo65655);
const smo65656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65656.setAttribute('id', 'smo65656');
smo65683v0ar.push(smo65656);
const smo65657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65657.setAttribute('id', 'smo65657');
smo65683v0ar.push(smo65657);
const smo65658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65658.setAttribute('id', 'smo65658');
smo65683v0ar.push(smo65658);
const smo65659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65659.setAttribute('id', 'smo65659');
smo65683v0ar.push(smo65659);
const smo65660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65660.setAttribute('id', 'smo65660');
smo65683v0ar.push(smo65660);
const smo65661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65661.setAttribute('id', 'smo65661');
smo65683v0ar.push(smo65661);
const smo65662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65662.setAttribute('id', 'smo65662');
smo65683v0ar.push(smo65662);
const smo65663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65663.setAttribute('id', 'smo65663');
smo65683v0ar.push(smo65663);
const smo65664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65664.setAttribute('id', 'smo65664');
smo65683v0ar.push(smo65664);
const smo65665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65665.setAttribute('id', 'smo65665');
smo65683v0ar.push(smo65665);
const smo65666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65666.setAttribute('id', 'smo65666');
smo65683v0ar.push(smo65666);
const smo65667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65667.setAttribute('id', 'smo65667');
smo65683v0ar.push(smo65667);
const smo65668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65668.setAttribute('id', 'smo65668');
smo65683v0ar.push(smo65668);
const smo65669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65669.setAttribute('id', 'smo65669');
smo65683v0ar.push(smo65669);
smo65683v0.addTickables(smo65683v0ar)
fmtsmo6568364.joinVoices([smo65683v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68852 = smo60651.getStemDirection();
smo60651.setStemDirection(dirsmo68852);
smo60652.setStemDirection(dirsmo68852);
smo60653.setStemDirection(dirsmo68852);
smo60654.setStemDirection(dirsmo68852);
const smo68852 = new VF.Beam([smo60651,smo60652,smo60653,smo60654]);
const dirsmo68853 = smo60655.getStemDirection();
smo60655.setStemDirection(dirsmo68853);
smo60656.setStemDirection(dirsmo68853);
smo60657.setStemDirection(dirsmo68853);
smo60658.setStemDirection(dirsmo68853);
const smo68853 = new VF.Beam([smo60655,smo60656,smo60657,smo60658]);
const dirsmo68854 = smo60659.getStemDirection();
smo60659.setStemDirection(dirsmo68854);
smo60660.setStemDirection(dirsmo68854);
smo60661.setStemDirection(dirsmo68854);
smo60662.setStemDirection(dirsmo68854);
const smo68854 = new VF.Beam([smo60659,smo60660,smo60661,smo60662]);
const dirsmo68855 = smo60663.getStemDirection();
smo60663.setStemDirection(dirsmo68855);
smo60664.setStemDirection(dirsmo68855);
smo60665.setStemDirection(dirsmo68855);
smo60666.setStemDirection(dirsmo68855);
const smo68855 = new VF.Beam([smo60663,smo60664,smo60665,smo60666]);
const dirsmo68858 = smo65654.getStemDirection();
smo65654.setStemDirection(dirsmo68858);
smo65655.setStemDirection(dirsmo68858);
smo65656.setStemDirection(dirsmo68858);
smo65657.setStemDirection(dirsmo68858);
const smo68858 = new VF.Beam([smo65654,smo65655,smo65656,smo65657]);
const dirsmo68859 = smo65658.getStemDirection();
smo65658.setStemDirection(dirsmo68859);
smo65659.setStemDirection(dirsmo68859);
smo65660.setStemDirection(dirsmo68859);
smo65661.setStemDirection(dirsmo68859);
const smo68859 = new VF.Beam([smo65658,smo65659,smo65660,smo65661]);
const dirsmo68860 = smo65662.getStemDirection();
smo65662.setStemDirection(dirsmo68860);
smo65663.setStemDirection(dirsmo68860);
smo65664.setStemDirection(dirsmo68860);
smo65665.setStemDirection(dirsmo68860);
const smo68860 = new VF.Beam([smo65662,smo65663,smo65664,smo65665]);
const dirsmo68861 = smo65666.getStemDirection();
smo65666.setStemDirection(dirsmo68861);
smo65667.setStemDirection(dirsmo68861);
smo65668.setStemDirection(dirsmo68861);
smo65669.setStemDirection(dirsmo68861);
const smo68861 = new VF.Beam([smo65666,smo65667,smo65668,smo65669]);
 
// formatting measures in staff group smo57447
fmtsmo6068064.format([smo60680v0,smo65683v0], 370);
const stavesmo60680 = new VF.Stave(90, 1962, 467);
stavesmo60680.setAttribute('id', 'stavesmo60680');
stavesmo60680.setBegBarType(1);
stavesmo60680.addClef('treble');
const keysmo60680 = new VF.KeySignature('Eb');
keysmo60680.addToStave(stavesmo60680);
stavesmo60680.setContext(context);
stavesmo60680.draw();
smo60680v0.draw(context, stavesmo60680);
smo68852.setContext(context);
smo68852.draw();
smo68853.setContext(context);
smo68853.draw();
smo68854.setContext(context);
smo68854.draw();
smo68855.setContext(context);
smo68855.draw();
const stavesmo65683 = new VF.Stave(90, 2051, 467);
stavesmo65683.setAttribute('id', 'stavesmo65683');
stavesmo65683.setBegBarType(1);
stavesmo65683.addClef('bass');
const keysmo65683 = new VF.KeySignature('Eb');
keysmo65683.addToStave(stavesmo65683);
stavesmo65683.setContext(context);
stavesmo65683.draw();
smo65683v0.draw(context, stavesmo65683);
smo68858.setContext(context);
smo68858.draw();
smo68859.setContext(context);
smo68859.draw();
smo68860.setContext(context);
smo68860.draw();
smo68861.setContext(context);
smo68861.draw();
const leftsmo57447stavesmo606801 = new VF.StaveConnector(stavesmo60680, stavesmo65683).setType(3);
leftsmo57447stavesmo606801.setContext(context).draw();
const fmtsmo6071065 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo60710v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60710v0ar = [];
const smo60681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60681.setAttribute('id', 'smo60681');
smo60710v0ar.push(smo60681);
const smo60682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60682.setAttribute('id', 'smo60682');
smo60710v0ar.push(smo60682);
const smo60683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60683.setAttribute('id', 'smo60683');
smo60710v0ar.push(smo60683);
const smo60684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60684.setAttribute('id', 'smo60684');
smo60710v0ar.push(smo60684);
const smo60685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60685.setAttribute('id', 'smo60685');
smo60710v0ar.push(smo60685);
const smo60686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60686.setAttribute('id', 'smo60686');
smo60710v0ar.push(smo60686);
const smo60687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60687.setAttribute('id', 'smo60687');
smo60710v0ar.push(smo60687);
const smo60688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60688.setAttribute('id', 'smo60688');
smo60710v0ar.push(smo60688);
const smo60689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60689.setAttribute('id', 'smo60689');
smo60710v0ar.push(smo60689);
const smo60690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60690.setAttribute('id', 'smo60690');
smo60710v0ar.push(smo60690);
const smo60691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60691.setAttribute('id', 'smo60691');
smo60710v0ar.push(smo60691);
const smo60692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60692.setAttribute('id', 'smo60692');
smo60710v0ar.push(smo60692);
const smo60693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60693.setAttribute('id', 'smo60693');
smo60710v0ar.push(smo60693);
const smo60694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60694.setAttribute('id', 'smo60694');
smo60710v0ar.push(smo60694);
const smo60695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60695.setAttribute('id', 'smo60695');
smo60710v0ar.push(smo60695);
const smo60696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60696.setAttribute('id', 'smo60696');
smo60710v0ar.push(smo60696);
smo60710v0.addTickables(smo60710v0ar)
fmtsmo6071065.joinVoices([smo60710v0]);
const fmtsmo6571365 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo65713v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65713v0ar = [];
const smo65684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65684.setAttribute('id', 'smo65684');
smo65713v0ar.push(smo65684);
const smo65685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65685.setAttribute('id', 'smo65685');
smo65713v0ar.push(smo65685);
const smo65686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65686.setAttribute('id', 'smo65686');
smo65713v0ar.push(smo65686);
const smo65687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65687.setAttribute('id', 'smo65687');
smo65713v0ar.push(smo65687);
const smo65688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65688.setAttribute('id', 'smo65688');
smo65713v0ar.push(smo65688);
const smo65689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65689.setAttribute('id', 'smo65689');
smo65713v0ar.push(smo65689);
const smo65690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65690.setAttribute('id', 'smo65690');
smo65713v0ar.push(smo65690);
const smo65691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65691.setAttribute('id', 'smo65691');
smo65713v0ar.push(smo65691);
const smo65692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65692.setAttribute('id', 'smo65692');
smo65713v0ar.push(smo65692);
const smo65693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65693.setAttribute('id', 'smo65693');
smo65713v0ar.push(smo65693);
const smo65694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65694.setAttribute('id', 'smo65694');
smo65713v0ar.push(smo65694);
const smo65695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65695.setAttribute('id', 'smo65695');
smo65713v0ar.push(smo65695);
const smo65696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65696.setAttribute('id', 'smo65696');
smo65713v0ar.push(smo65696);
const smo65697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65697.setAttribute('id', 'smo65697');
smo65713v0ar.push(smo65697);
const smo65698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65698.setAttribute('id', 'smo65698');
smo65713v0ar.push(smo65698);
const smo65699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["eb/3/n"]}'))
smo65699.setAttribute('id', 'smo65699');
smo65713v0ar.push(smo65699);
smo65713v0.addTickables(smo65713v0ar)
fmtsmo6571365.joinVoices([smo65713v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68864 = smo60681.getStemDirection();
smo60681.setStemDirection(dirsmo68864);
smo60682.setStemDirection(dirsmo68864);
smo60683.setStemDirection(dirsmo68864);
smo60684.setStemDirection(dirsmo68864);
const smo68864 = new VF.Beam([smo60681,smo60682,smo60683,smo60684]);
const dirsmo68865 = smo60685.getStemDirection();
smo60685.setStemDirection(dirsmo68865);
smo60686.setStemDirection(dirsmo68865);
smo60687.setStemDirection(dirsmo68865);
smo60688.setStemDirection(dirsmo68865);
const smo68865 = new VF.Beam([smo60685,smo60686,smo60687,smo60688]);
const dirsmo68866 = smo60689.getStemDirection();
smo60689.setStemDirection(dirsmo68866);
smo60690.setStemDirection(dirsmo68866);
smo60691.setStemDirection(dirsmo68866);
smo60692.setStemDirection(dirsmo68866);
const smo68866 = new VF.Beam([smo60689,smo60690,smo60691,smo60692]);
const dirsmo68867 = smo60693.getStemDirection();
smo60693.setStemDirection(dirsmo68867);
smo60694.setStemDirection(dirsmo68867);
smo60695.setStemDirection(dirsmo68867);
smo60696.setStemDirection(dirsmo68867);
const smo68867 = new VF.Beam([smo60693,smo60694,smo60695,smo60696]);
const dirsmo68870 = smo65684.getStemDirection();
smo65684.setStemDirection(dirsmo68870);
smo65685.setStemDirection(dirsmo68870);
smo65686.setStemDirection(dirsmo68870);
smo65687.setStemDirection(dirsmo68870);
const smo68870 = new VF.Beam([smo65684,smo65685,smo65686,smo65687]);
const dirsmo68871 = smo65688.getStemDirection();
smo65688.setStemDirection(dirsmo68871);
smo65689.setStemDirection(dirsmo68871);
smo65690.setStemDirection(dirsmo68871);
smo65691.setStemDirection(dirsmo68871);
const smo68871 = new VF.Beam([smo65688,smo65689,smo65690,smo65691]);
const dirsmo68872 = smo65692.getStemDirection();
smo65692.setStemDirection(dirsmo68872);
smo65693.setStemDirection(dirsmo68872);
smo65694.setStemDirection(dirsmo68872);
smo65695.setStemDirection(dirsmo68872);
const smo68872 = new VF.Beam([smo65692,smo65693,smo65694,smo65695]);
const dirsmo68873 = smo65696.getStemDirection();
smo65696.setStemDirection(dirsmo68873);
smo65697.setStemDirection(dirsmo68873);
smo65698.setStemDirection(dirsmo68873);
smo65699.setStemDirection(dirsmo68873);
const smo68873 = new VF.Beam([smo65696,smo65697,smo65698,smo65699]);
 
// formatting measures in staff group smo57447
fmtsmo6071065.format([smo60710v0,smo65713v0], 345);
const stavesmo60710 = new VF.Stave(557, 1962, 359);
stavesmo60710.setAttribute('id', 'stavesmo60710');
stavesmo60710.setBegBarType(VF.Barline.type.NONE);
stavesmo60710.setContext(context);
stavesmo60710.draw();
smo60710v0.draw(context, stavesmo60710);
smo68864.setContext(context);
smo68864.draw();
smo68865.setContext(context);
smo68865.draw();
smo68866.setContext(context);
smo68866.draw();
smo68867.setContext(context);
smo68867.draw();
const stavesmo65713 = new VF.Stave(557, 2051, 359);
stavesmo65713.setAttribute('id', 'stavesmo65713');
stavesmo65713.setBegBarType(VF.Barline.type.NONE);
stavesmo65713.setContext(context);
stavesmo65713.draw();
smo65713v0.draw(context, stavesmo65713);
smo68870.setContext(context);
smo68870.draw();
smo68871.setContext(context);
smo68871.draw();
smo68872.setContext(context);
smo68872.draw();
smo68873.setContext(context);
smo68873.draw();
const fmtsmo6074066 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo60740v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60740v0ar = [];
const smo60711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/5/n"]}'))
smo60711.setAttribute('id', 'smo60711');
smo60740v0ar.push(smo60711);
const smo60712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60712.setAttribute('id', 'smo60712');
smo60740v0ar.push(smo60712);
const smo60713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60713.setAttribute('id', 'smo60713');
smo60740v0ar.push(smo60713);
const smo60714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60714.setAttribute('id', 'smo60714');
smo60740v0ar.push(smo60714);
const smo60715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60715.setAttribute('id', 'smo60715');
smo60740v0ar.push(smo60715);
const smo60716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60716.setAttribute('id', 'smo60716');
smo60740v0ar.push(smo60716);
const smo60717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60717.setAttribute('id', 'smo60717');
smo60740v0ar.push(smo60717);
const smo60718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60718.setAttribute('id', 'smo60718');
smo60740v0ar.push(smo60718);
const smo60719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/5/n"]}'))
smo60719.setAttribute('id', 'smo60719');
smo60740v0ar.push(smo60719);
const smo60720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60720.setAttribute('id', 'smo60720');
smo60740v0ar.push(smo60720);
const smo60721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60721.setAttribute('id', 'smo60721');
smo60740v0ar.push(smo60721);
const smo60722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60722.setAttribute('id', 'smo60722');
smo60740v0ar.push(smo60722);
const smo60723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60723.setAttribute('id', 'smo60723');
smo60740v0ar.push(smo60723);
const smo60724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60724.setAttribute('id', 'smo60724');
smo60740v0ar.push(smo60724);
const smo60725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60725.setAttribute('id', 'smo60725');
smo60740v0ar.push(smo60725);
const smo60726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/4/n"]}'))
smo60726.setAttribute('id', 'smo60726');
smo60740v0ar.push(smo60726);
smo60740v0.addTickables(smo60740v0ar)
fmtsmo6074066.joinVoices([smo60740v0]);
const fmtsmo6574366 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo65743v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65743v0ar = [];
const smo65714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65714.setAttribute('id', 'smo65714');
smo65743v0ar.push(smo65714);
const smo65715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65715.setAttribute('id', 'smo65715');
smo65743v0ar.push(smo65715);
const smo65716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65716.setAttribute('id', 'smo65716');
smo65743v0ar.push(smo65716);
const smo65717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65717.setAttribute('id', 'smo65717');
smo65743v0ar.push(smo65717);
const smo65718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65718.setAttribute('id', 'smo65718');
smo65743v0ar.push(smo65718);
const smo65719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65719.setAttribute('id', 'smo65719');
smo65743v0ar.push(smo65719);
const smo65720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65720.setAttribute('id', 'smo65720');
smo65743v0ar.push(smo65720);
const smo65721 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65721.setAttribute('id', 'smo65721');
smo65743v0ar.push(smo65721);
const smo65722 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65722.setAttribute('id', 'smo65722');
smo65743v0ar.push(smo65722);
const smo65723 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65723.setAttribute('id', 'smo65723');
smo65743v0ar.push(smo65723);
const smo65724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65724.setAttribute('id', 'smo65724');
smo65743v0ar.push(smo65724);
const smo65725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65725.setAttribute('id', 'smo65725');
smo65743v0ar.push(smo65725);
const smo65726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65726.setAttribute('id', 'smo65726');
smo65743v0ar.push(smo65726);
const smo65727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65727.setAttribute('id', 'smo65727');
smo65743v0ar.push(smo65727);
const smo65728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65728.setAttribute('id', 'smo65728');
smo65743v0ar.push(smo65728);
const smo65729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo65729.setAttribute('id', 'smo65729');
smo65743v0ar.push(smo65729);
smo65743v0.addTickables(smo65743v0ar)
fmtsmo6574366.joinVoices([smo65743v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68876 = smo60711.getStemDirection();
smo60711.setStemDirection(dirsmo68876);
smo60712.setStemDirection(dirsmo68876);
smo60713.setStemDirection(dirsmo68876);
smo60714.setStemDirection(dirsmo68876);
const smo68876 = new VF.Beam([smo60711,smo60712,smo60713,smo60714]);
const dirsmo68877 = smo60715.getStemDirection();
smo60715.setStemDirection(dirsmo68877);
smo60716.setStemDirection(dirsmo68877);
smo60717.setStemDirection(dirsmo68877);
smo60718.setStemDirection(dirsmo68877);
const smo68877 = new VF.Beam([smo60715,smo60716,smo60717,smo60718]);
const dirsmo68878 = smo60719.getStemDirection();
smo60719.setStemDirection(dirsmo68878);
smo60720.setStemDirection(dirsmo68878);
smo60721.setStemDirection(dirsmo68878);
smo60722.setStemDirection(dirsmo68878);
const smo68878 = new VF.Beam([smo60719,smo60720,smo60721,smo60722]);
const dirsmo68879 = smo60723.getStemDirection();
smo60723.setStemDirection(dirsmo68879);
smo60724.setStemDirection(dirsmo68879);
smo60725.setStemDirection(dirsmo68879);
smo60726.setStemDirection(dirsmo68879);
const smo68879 = new VF.Beam([smo60723,smo60724,smo60725,smo60726]);
const dirsmo68882 = smo65714.getStemDirection();
smo65714.setStemDirection(dirsmo68882);
smo65715.setStemDirection(dirsmo68882);
smo65716.setStemDirection(dirsmo68882);
smo65717.setStemDirection(dirsmo68882);
const smo68882 = new VF.Beam([smo65714,smo65715,smo65716,smo65717]);
const dirsmo68883 = smo65718.getStemDirection();
smo65718.setStemDirection(dirsmo68883);
smo65719.setStemDirection(dirsmo68883);
smo65720.setStemDirection(dirsmo68883);
smo65721.setStemDirection(dirsmo68883);
const smo68883 = new VF.Beam([smo65718,smo65719,smo65720,smo65721]);
const dirsmo68884 = smo65722.getStemDirection();
smo65722.setStemDirection(dirsmo68884);
smo65723.setStemDirection(dirsmo68884);
smo65724.setStemDirection(dirsmo68884);
smo65725.setStemDirection(dirsmo68884);
const smo68884 = new VF.Beam([smo65722,smo65723,smo65724,smo65725]);
const dirsmo68885 = smo65726.getStemDirection();
smo65726.setStemDirection(dirsmo68885);
smo65727.setStemDirection(dirsmo68885);
smo65728.setStemDirection(dirsmo68885);
smo65729.setStemDirection(dirsmo68885);
const smo68885 = new VF.Beam([smo65726,smo65727,smo65728,smo65729]);
 
// formatting measures in staff group smo57447
fmtsmo6074066.format([smo60740v0,smo65743v0], 345);
const stavesmo60740 = new VF.Stave(916, 1962, 359);
stavesmo60740.setAttribute('id', 'stavesmo60740');
stavesmo60740.setBegBarType(VF.Barline.type.NONE);
stavesmo60740.setContext(context);
stavesmo60740.draw();
smo60740v0.draw(context, stavesmo60740);
smo68876.setContext(context);
smo68876.draw();
smo68877.setContext(context);
smo68877.draw();
smo68878.setContext(context);
smo68878.draw();
smo68879.setContext(context);
smo68879.draw();
const stavesmo65743 = new VF.Stave(916, 2051, 359);
stavesmo65743.setAttribute('id', 'stavesmo65743');
stavesmo65743.setBegBarType(VF.Barline.type.NONE);
stavesmo65743.setContext(context);
stavesmo65743.draw();
smo65743v0.draw(context, stavesmo65743);
smo68882.setContext(context);
smo68882.draw();
smo68883.setContext(context);
smo68883.draw();
smo68884.setContext(context);
smo68884.draw();
smo68885.setContext(context);
smo68885.draw();
const fmtsmo6077067 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo60770v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60770v0ar = [];
const smo60741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60741.setAttribute('id', 'smo60741');
smo60770v0ar.push(smo60741);
const smo60742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60742.setAttribute('id', 'smo60742');
const smo607420acc = new VF.Accidental('#');
smo60742.addModifier(smo607420acc, 0);
smo60770v0ar.push(smo60742);
const smo60743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60743.setAttribute('id', 'smo60743');
const smo607430acc = new VF.Accidental('n');
smo60743.addModifier(smo607430acc, 0);
smo60770v0ar.push(smo60743);
const smo60744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60744.setAttribute('id', 'smo60744');
smo60770v0ar.push(smo60744);
const smo60745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60745.setAttribute('id', 'smo60745');
smo60770v0ar.push(smo60745);
const smo60746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60746.setAttribute('id', 'smo60746');
smo60770v0ar.push(smo60746);
const smo60747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60747.setAttribute('id', 'smo60747');
smo60770v0ar.push(smo60747);
const smo60748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60748.setAttribute('id', 'smo60748');
smo60770v0ar.push(smo60748);
const smo60749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60749.setAttribute('id', 'smo60749');
smo60770v0ar.push(smo60749);
const smo60750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60750.setAttribute('id', 'smo60750');
smo60770v0ar.push(smo60750);
const smo60751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60751.setAttribute('id', 'smo60751');
smo60770v0ar.push(smo60751);
const smo60752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60752.setAttribute('id', 'smo60752');
smo60770v0ar.push(smo60752);
const smo60753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60753.setAttribute('id', 'smo60753');
smo60770v0ar.push(smo60753);
const smo60754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60754.setAttribute('id', 'smo60754');
smo60770v0ar.push(smo60754);
const smo60755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60755.setAttribute('id', 'smo60755');
smo60770v0ar.push(smo60755);
const smo60756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60756.setAttribute('id', 'smo60756');
smo60770v0ar.push(smo60756);
smo60770v0.addTickables(smo60770v0ar)
fmtsmo6077067.joinVoices([smo60770v0]);
const fmtsmo6577367 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo65773v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65773v0ar = [];
const smo65744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65744.setAttribute('id', 'smo65744');
smo65773v0ar.push(smo65744);
const smo65745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65745.setAttribute('id', 'smo65745');
const smo657450acc = new VF.Accidental('n');
smo65745.addModifier(smo657450acc, 0);
smo65773v0ar.push(smo65745);
const smo65746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65746.setAttribute('id', 'smo65746');
smo65773v0ar.push(smo65746);
const smo65747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65747.setAttribute('id', 'smo65747');
smo65773v0ar.push(smo65747);
const smo65748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65748.setAttribute('id', 'smo65748');
const smo657480acc = new VF.Accidental('#');
smo65748.addModifier(smo657480acc, 0);
smo65773v0ar.push(smo65748);
const smo65749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65749.setAttribute('id', 'smo65749');
smo65773v0ar.push(smo65749);
const smo65750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65750.setAttribute('id', 'smo65750');
smo65773v0ar.push(smo65750);
const smo65751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65751.setAttribute('id', 'smo65751');
smo65773v0ar.push(smo65751);
const smo65752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65752.setAttribute('id', 'smo65752');
smo65773v0ar.push(smo65752);
const smo65753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65753.setAttribute('id', 'smo65753');
smo65773v0ar.push(smo65753);
const smo65754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65754.setAttribute('id', 'smo65754');
smo65773v0ar.push(smo65754);
const smo65755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65755.setAttribute('id', 'smo65755');
smo65773v0ar.push(smo65755);
const smo65756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n"]}'))
smo65756.setAttribute('id', 'smo65756');
smo65773v0ar.push(smo65756);
const smo65757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65757.setAttribute('id', 'smo65757');
smo65773v0ar.push(smo65757);
const smo65758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65758.setAttribute('id', 'smo65758');
smo65773v0ar.push(smo65758);
const smo65759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65759.setAttribute('id', 'smo65759');
smo65773v0ar.push(smo65759);
smo65773v0.addTickables(smo65773v0ar)
fmtsmo6577367.joinVoices([smo65773v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68888 = smo60741.getStemDirection();
smo60741.setStemDirection(dirsmo68888);
smo60742.setStemDirection(dirsmo68888);
smo60743.setStemDirection(dirsmo68888);
smo60744.setStemDirection(dirsmo68888);
const smo68888 = new VF.Beam([smo60741,smo60742,smo60743,smo60744]);
const dirsmo68889 = smo60745.getStemDirection();
smo60745.setStemDirection(dirsmo68889);
smo60746.setStemDirection(dirsmo68889);
smo60747.setStemDirection(dirsmo68889);
smo60748.setStemDirection(dirsmo68889);
const smo68889 = new VF.Beam([smo60745,smo60746,smo60747,smo60748]);
const dirsmo68890 = smo60749.getStemDirection();
smo60749.setStemDirection(dirsmo68890);
smo60750.setStemDirection(dirsmo68890);
smo60751.setStemDirection(dirsmo68890);
smo60752.setStemDirection(dirsmo68890);
const smo68890 = new VF.Beam([smo60749,smo60750,smo60751,smo60752]);
const dirsmo68891 = smo60753.getStemDirection();
smo60753.setStemDirection(dirsmo68891);
smo60754.setStemDirection(dirsmo68891);
smo60755.setStemDirection(dirsmo68891);
smo60756.setStemDirection(dirsmo68891);
const smo68891 = new VF.Beam([smo60753,smo60754,smo60755,smo60756]);
const dirsmo68894 = smo65744.getStemDirection();
smo65744.setStemDirection(dirsmo68894);
smo65745.setStemDirection(dirsmo68894);
smo65746.setStemDirection(dirsmo68894);
smo65747.setStemDirection(dirsmo68894);
const smo68894 = new VF.Beam([smo65744,smo65745,smo65746,smo65747]);
const dirsmo68895 = smo65748.getStemDirection();
smo65748.setStemDirection(dirsmo68895);
smo65749.setStemDirection(dirsmo68895);
smo65750.setStemDirection(dirsmo68895);
smo65751.setStemDirection(dirsmo68895);
const smo68895 = new VF.Beam([smo65748,smo65749,smo65750,smo65751]);
const dirsmo68896 = smo65752.getStemDirection();
smo65752.setStemDirection(dirsmo68896);
smo65753.setStemDirection(dirsmo68896);
smo65754.setStemDirection(dirsmo68896);
smo65755.setStemDirection(dirsmo68896);
const smo68896 = new VF.Beam([smo65752,smo65753,smo65754,smo65755]);
const dirsmo68897 = smo65756.getStemDirection();
smo65756.setStemDirection(dirsmo68897);
smo65757.setStemDirection(dirsmo68897);
smo65758.setStemDirection(dirsmo68897);
smo65759.setStemDirection(dirsmo68897);
const smo68897 = new VF.Beam([smo65756,smo65757,smo65758,smo65759]);
 
// formatting measures in staff group smo57447
fmtsmo6077067.format([smo60770v0,smo65773v0], 519);
const stavesmo60770 = new VF.Stave(1275, 1962, 533);
stavesmo60770.setAttribute('id', 'stavesmo60770');
stavesmo60770.setBegBarType(VF.Barline.type.NONE);
stavesmo60770.setContext(context);
stavesmo60770.draw();
smo60770v0.draw(context, stavesmo60770);
smo68888.setContext(context);
smo68888.draw();
smo68889.setContext(context);
smo68889.draw();
smo68890.setContext(context);
smo68890.draw();
smo68891.setContext(context);
smo68891.draw();
const stavesmo65773 = new VF.Stave(1275, 2051, 533);
stavesmo65773.setAttribute('id', 'stavesmo65773');
stavesmo65773.setBegBarType(VF.Barline.type.NONE);
stavesmo65773.setContext(context);
stavesmo65773.draw();
smo65773v0.draw(context, stavesmo65773);
smo68894.setContext(context);
smo68894.draw();
smo68895.setContext(context);
smo68895.draw();
smo68896.setContext(context);
smo68896.draw();
smo68897.setContext(context);
smo68897.draw();
const rightsmo57447stavesmo607701 = new VF.StaveConnector(stavesmo60770, stavesmo65773).setType(0);
rightsmo57447stavesmo607701.setContext(context).draw();
const fmtsmo6080068 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo60800v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60800v0ar = [];
const smo60771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60771.setAttribute('id', 'smo60771');
smo60800v0ar.push(smo60771);
const smo60772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60772.setAttribute('id', 'smo60772');
smo60800v0ar.push(smo60772);
const smo60773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60773.setAttribute('id', 'smo60773');
const smo607730acc = new VF.Accidental('#');
smo60773.addModifier(smo607730acc, 0);
smo60800v0ar.push(smo60773);
const smo60774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60774.setAttribute('id', 'smo60774');
smo60800v0ar.push(smo60774);
const smo60775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60775.setAttribute('id', 'smo60775');
smo60800v0ar.push(smo60775);
const smo60776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60776.setAttribute('id', 'smo60776');
smo60800v0ar.push(smo60776);
const smo60777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60777.setAttribute('id', 'smo60777');
smo60800v0ar.push(smo60777);
const smo60778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60778.setAttribute('id', 'smo60778');
smo60800v0ar.push(smo60778);
const smo60779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo60779.setAttribute('id', 'smo60779');
smo60800v0ar.push(smo60779);
const smo60780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60780.setAttribute('id', 'smo60780');
smo60800v0ar.push(smo60780);
const smo60781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60781.setAttribute('id', 'smo60781');
smo60800v0ar.push(smo60781);
const smo60782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60782.setAttribute('id', 'smo60782');
smo60800v0ar.push(smo60782);
const smo60783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60783.setAttribute('id', 'smo60783');
smo60800v0ar.push(smo60783);
const smo60784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60784.setAttribute('id', 'smo60784');
smo60800v0ar.push(smo60784);
const smo60785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo60785.setAttribute('id', 'smo60785');
smo60800v0ar.push(smo60785);
const smo60786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo60786.setAttribute('id', 'smo60786');
smo60800v0ar.push(smo60786);
smo60800v0.addTickables(smo60800v0ar)
fmtsmo6080068.joinVoices([smo60800v0]);
const fmtsmo6580368 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo65803v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65803v0ar = [];
const smo65774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo65774.setAttribute('id', 'smo65774');
smo65803v0ar.push(smo65774);
const smo65775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65775.setAttribute('id', 'smo65775');
smo65803v0ar.push(smo65775);
const smo65776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65776.setAttribute('id', 'smo65776');
const smo657760acc = new VF.Accidental('n');
smo65776.addModifier(smo657760acc, 0);
smo65803v0ar.push(smo65776);
const smo65777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65777.setAttribute('id', 'smo65777');
smo65803v0ar.push(smo65777);
const smo65778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65778.setAttribute('id', 'smo65778');
smo65803v0ar.push(smo65778);
const smo65779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65779.setAttribute('id', 'smo65779');
smo65803v0ar.push(smo65779);
const smo65780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65780.setAttribute('id', 'smo65780');
smo65803v0ar.push(smo65780);
const smo65781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65781.setAttribute('id', 'smo65781');
smo65803v0ar.push(smo65781);
const smo65782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo65782.setAttribute('id', 'smo65782');
smo65803v0ar.push(smo65782);
const smo65783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65783.setAttribute('id', 'smo65783');
smo65803v0ar.push(smo65783);
const smo65784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65784.setAttribute('id', 'smo65784');
smo65803v0ar.push(smo65784);
const smo65785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65785.setAttribute('id', 'smo65785');
smo65803v0ar.push(smo65785);
const smo65786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65786.setAttribute('id', 'smo65786');
smo65803v0ar.push(smo65786);
const smo65787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65787.setAttribute('id', 'smo65787');
smo65803v0ar.push(smo65787);
const smo65788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo65788.setAttribute('id', 'smo65788');
smo65803v0ar.push(smo65788);
const smo65789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/3/n"]}'))
smo65789.setAttribute('id', 'smo65789');
smo65803v0ar.push(smo65789);
smo65803v0.addTickables(smo65803v0ar)
fmtsmo6580368.joinVoices([smo65803v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68912 = smo60771.getStemDirection();
smo60771.setStemDirection(dirsmo68912);
smo60772.setStemDirection(dirsmo68912);
smo60773.setStemDirection(dirsmo68912);
smo60774.setStemDirection(dirsmo68912);
const smo68912 = new VF.Beam([smo60771,smo60772,smo60773,smo60774]);
const dirsmo68913 = smo60775.getStemDirection();
smo60775.setStemDirection(dirsmo68913);
smo60776.setStemDirection(dirsmo68913);
smo60777.setStemDirection(dirsmo68913);
smo60778.setStemDirection(dirsmo68913);
const smo68913 = new VF.Beam([smo60775,smo60776,smo60777,smo60778]);
const dirsmo68914 = smo60779.getStemDirection();
smo60779.setStemDirection(dirsmo68914);
smo60780.setStemDirection(dirsmo68914);
smo60781.setStemDirection(dirsmo68914);
smo60782.setStemDirection(dirsmo68914);
const smo68914 = new VF.Beam([smo60779,smo60780,smo60781,smo60782]);
const dirsmo68915 = smo60783.getStemDirection();
smo60783.setStemDirection(dirsmo68915);
smo60784.setStemDirection(dirsmo68915);
smo60785.setStemDirection(dirsmo68915);
smo60786.setStemDirection(dirsmo68915);
const smo68915 = new VF.Beam([smo60783,smo60784,smo60785,smo60786]);
const dirsmo68918 = smo65774.getStemDirection();
smo65774.setStemDirection(dirsmo68918);
smo65775.setStemDirection(dirsmo68918);
smo65776.setStemDirection(dirsmo68918);
smo65777.setStemDirection(dirsmo68918);
const smo68918 = new VF.Beam([smo65774,smo65775,smo65776,smo65777]);
const dirsmo68919 = smo65778.getStemDirection();
smo65778.setStemDirection(dirsmo68919);
smo65779.setStemDirection(dirsmo68919);
smo65780.setStemDirection(dirsmo68919);
smo65781.setStemDirection(dirsmo68919);
const smo68919 = new VF.Beam([smo65778,smo65779,smo65780,smo65781]);
const dirsmo68920 = smo65782.getStemDirection();
smo65782.setStemDirection(dirsmo68920);
smo65783.setStemDirection(dirsmo68920);
smo65784.setStemDirection(dirsmo68920);
smo65785.setStemDirection(dirsmo68920);
const smo68920 = new VF.Beam([smo65782,smo65783,smo65784,smo65785]);
const dirsmo68921 = smo65786.getStemDirection();
smo65786.setStemDirection(dirsmo68921);
smo65787.setStemDirection(dirsmo68921);
smo65788.setStemDirection(dirsmo68921);
smo65789.setStemDirection(dirsmo68921);
const smo68921 = new VF.Beam([smo65786,smo65787,smo65788,smo65789]);
 
// formatting measures in staff group smo57447
fmtsmo6080068.format([smo60800v0,smo65803v0], 409);
const stavesmo60800 = new VF.Stave(90, 2180, 506);
stavesmo60800.setAttribute('id', 'stavesmo60800');
stavesmo60800.setBegBarType(1);
stavesmo60800.addClef('treble');
const keysmo60800 = new VF.KeySignature('Eb');
keysmo60800.addToStave(stavesmo60800);
stavesmo60800.setContext(context);
stavesmo60800.draw();
smo60800v0.draw(context, stavesmo60800);
smo68912.setContext(context);
smo68912.draw();
smo68913.setContext(context);
smo68913.draw();
smo68914.setContext(context);
smo68914.draw();
smo68915.setContext(context);
smo68915.draw();
const stavesmo65803 = new VF.Stave(90, 2270, 506);
stavesmo65803.setAttribute('id', 'stavesmo65803');
stavesmo65803.setBegBarType(1);
stavesmo65803.addClef('bass');
const keysmo65803 = new VF.KeySignature('Eb');
keysmo65803.addToStave(stavesmo65803);
stavesmo65803.setContext(context);
stavesmo65803.draw();
smo65803v0.draw(context, stavesmo65803);
smo68918.setContext(context);
smo68918.draw();
smo68919.setContext(context);
smo68919.draw();
smo68920.setContext(context);
smo68920.draw();
smo68921.setContext(context);
smo68921.draw();
const leftsmo57447stavesmo608001 = new VF.StaveConnector(stavesmo60800, stavesmo65803).setType(3);
leftsmo57447stavesmo608001.setContext(context).draw();
const fmtsmo6083069 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo60830v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60830v0ar = [];
const smo60801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60801.setAttribute('id', 'smo60801');
smo60830v0ar.push(smo60801);
const smo60802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60802.setAttribute('id', 'smo60802');
const smo608020acc = new VF.Accidental('n');
smo60802.addModifier(smo608020acc, 0);
smo60830v0ar.push(smo60802);
const smo60803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60803.setAttribute('id', 'smo60803');
smo60830v0ar.push(smo60803);
const smo60804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60804.setAttribute('id', 'smo60804');
smo60830v0ar.push(smo60804);
const smo60805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60805.setAttribute('id', 'smo60805');
smo60830v0ar.push(smo60805);
const smo60806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60806.setAttribute('id', 'smo60806');
smo60830v0ar.push(smo60806);
const smo60807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60807.setAttribute('id', 'smo60807');
smo60830v0ar.push(smo60807);
const smo60808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60808.setAttribute('id', 'smo60808');
smo60830v0ar.push(smo60808);
const smo60809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60809.setAttribute('id', 'smo60809');
smo60830v0ar.push(smo60809);
const smo60810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60810.setAttribute('id', 'smo60810');
smo60830v0ar.push(smo60810);
const smo60811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60811.setAttribute('id', 'smo60811');
smo60830v0ar.push(smo60811);
const smo60812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60812.setAttribute('id', 'smo60812');
smo60830v0ar.push(smo60812);
const smo60813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60813.setAttribute('id', 'smo60813');
smo60830v0ar.push(smo60813);
const smo60814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60814.setAttribute('id', 'smo60814');
smo60830v0ar.push(smo60814);
const smo60815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60815.setAttribute('id', 'smo60815');
smo60830v0ar.push(smo60815);
const smo60816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60816.setAttribute('id', 'smo60816');
smo60830v0ar.push(smo60816);
smo60830v0.addTickables(smo60830v0ar)
fmtsmo6083069.joinVoices([smo60830v0]);
const fmtsmo6583369 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo65833v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65833v0ar = [];
const smo65804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo65804.setAttribute('id', 'smo65804');
smo65833v0ar.push(smo65804);
const smo65805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65805.setAttribute('id', 'smo65805');
smo65833v0ar.push(smo65805);
const smo65806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65806.setAttribute('id', 'smo65806');
smo65833v0ar.push(smo65806);
const smo65807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65807.setAttribute('id', 'smo65807');
smo65833v0ar.push(smo65807);
const smo65808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65808.setAttribute('id', 'smo65808');
const smo658080acc = new VF.Accidental('n');
smo65808.addModifier(smo658080acc, 0);
smo65833v0ar.push(smo65808);
const smo65809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65809.setAttribute('id', 'smo65809');
smo65833v0ar.push(smo65809);
const smo65810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65810.setAttribute('id', 'smo65810');
smo65833v0ar.push(smo65810);
const smo65811 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65811.setAttribute('id', 'smo65811');
smo65833v0ar.push(smo65811);
const smo65812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bb/2/n"]}'))
smo65812.setAttribute('id', 'smo65812');
smo65833v0ar.push(smo65812);
const smo65813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65813.setAttribute('id', 'smo65813');
smo65833v0ar.push(smo65813);
const smo65814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65814.setAttribute('id', 'smo65814');
smo65833v0ar.push(smo65814);
const smo65815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65815.setAttribute('id', 'smo65815');
smo65833v0ar.push(smo65815);
const smo65816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo65816.setAttribute('id', 'smo65816');
smo65833v0ar.push(smo65816);
const smo65817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65817.setAttribute('id', 'smo65817');
smo65833v0ar.push(smo65817);
const smo65818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65818.setAttribute('id', 'smo65818');
smo65833v0ar.push(smo65818);
const smo65819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65819.setAttribute('id', 'smo65819');
smo65833v0ar.push(smo65819);
smo65833v0.addTickables(smo65833v0ar)
fmtsmo6583369.joinVoices([smo65833v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68924 = smo60801.getStemDirection();
smo60801.setStemDirection(dirsmo68924);
smo60802.setStemDirection(dirsmo68924);
smo60803.setStemDirection(dirsmo68924);
smo60804.setStemDirection(dirsmo68924);
const smo68924 = new VF.Beam([smo60801,smo60802,smo60803,smo60804]);
const dirsmo68925 = smo60805.getStemDirection();
smo60805.setStemDirection(dirsmo68925);
smo60806.setStemDirection(dirsmo68925);
smo60807.setStemDirection(dirsmo68925);
smo60808.setStemDirection(dirsmo68925);
const smo68925 = new VF.Beam([smo60805,smo60806,smo60807,smo60808]);
const dirsmo68926 = smo60809.getStemDirection();
smo60809.setStemDirection(dirsmo68926);
smo60810.setStemDirection(dirsmo68926);
smo60811.setStemDirection(dirsmo68926);
smo60812.setStemDirection(dirsmo68926);
const smo68926 = new VF.Beam([smo60809,smo60810,smo60811,smo60812]);
const dirsmo68927 = smo60813.getStemDirection();
smo60813.setStemDirection(dirsmo68927);
smo60814.setStemDirection(dirsmo68927);
smo60815.setStemDirection(dirsmo68927);
smo60816.setStemDirection(dirsmo68927);
const smo68927 = new VF.Beam([smo60813,smo60814,smo60815,smo60816]);
const dirsmo68930 = smo65804.getStemDirection();
smo65804.setStemDirection(dirsmo68930);
smo65805.setStemDirection(dirsmo68930);
smo65806.setStemDirection(dirsmo68930);
smo65807.setStemDirection(dirsmo68930);
const smo68930 = new VF.Beam([smo65804,smo65805,smo65806,smo65807]);
const dirsmo68931 = smo65808.getStemDirection();
smo65808.setStemDirection(dirsmo68931);
smo65809.setStemDirection(dirsmo68931);
smo65810.setStemDirection(dirsmo68931);
smo65811.setStemDirection(dirsmo68931);
const smo68931 = new VF.Beam([smo65808,smo65809,smo65810,smo65811]);
const dirsmo68932 = smo65812.getStemDirection();
smo65812.setStemDirection(dirsmo68932);
smo65813.setStemDirection(dirsmo68932);
smo65814.setStemDirection(dirsmo68932);
smo65815.setStemDirection(dirsmo68932);
const smo68932 = new VF.Beam([smo65812,smo65813,smo65814,smo65815]);
const dirsmo68933 = smo65816.getStemDirection();
smo65816.setStemDirection(dirsmo68933);
smo65817.setStemDirection(dirsmo68933);
smo65818.setStemDirection(dirsmo68933);
smo65819.setStemDirection(dirsmo68933);
const smo68933 = new VF.Beam([smo65816,smo65817,smo65818,smo65819]);
 
// formatting measures in staff group smo57447
fmtsmo6083069.format([smo60830v0,smo65833v0], 440);
const stavesmo60830 = new VF.Stave(596, 2180, 454);
stavesmo60830.setAttribute('id', 'stavesmo60830');
stavesmo60830.setBegBarType(VF.Barline.type.NONE);
stavesmo60830.setContext(context);
stavesmo60830.draw();
smo60830v0.draw(context, stavesmo60830);
smo68924.setContext(context);
smo68924.draw();
smo68925.setContext(context);
smo68925.draw();
smo68926.setContext(context);
smo68926.draw();
smo68927.setContext(context);
smo68927.draw();
const stavesmo65833 = new VF.Stave(596, 2270, 454);
stavesmo65833.setAttribute('id', 'stavesmo65833');
stavesmo65833.setBegBarType(VF.Barline.type.NONE);
stavesmo65833.setContext(context);
stavesmo65833.draw();
smo65833v0.draw(context, stavesmo65833);
smo68930.setContext(context);
smo68930.draw();
smo68931.setContext(context);
smo68931.draw();
smo68932.setContext(context);
smo68932.draw();
smo68933.setContext(context);
smo68933.draw();
const fmtsmo6086070 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo60860v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60860v0ar = [];
const smo60831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60831.setAttribute('id', 'smo60831');
smo60860v0ar.push(smo60831);
const smo60832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60832.setAttribute('id', 'smo60832');
smo60860v0ar.push(smo60832);
const smo60833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60833.setAttribute('id', 'smo60833');
const smo608330acc = new VF.Accidental('n');
smo60833.addModifier(smo608330acc, 0);
smo60860v0ar.push(smo60833);
const smo60834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60834.setAttribute('id', 'smo60834');
smo60860v0ar.push(smo60834);
const smo60835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60835.setAttribute('id', 'smo60835');
smo60860v0ar.push(smo60835);
const smo60836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60836.setAttribute('id', 'smo60836');
smo60860v0ar.push(smo60836);
const smo60837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60837.setAttribute('id', 'smo60837');
smo60860v0ar.push(smo60837);
const smo60838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60838.setAttribute('id', 'smo60838');
smo60860v0ar.push(smo60838);
const smo60839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo60839.setAttribute('id', 'smo60839');
smo60860v0ar.push(smo60839);
const smo60840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60840.setAttribute('id', 'smo60840');
smo60860v0ar.push(smo60840);
const smo60841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60841.setAttribute('id', 'smo60841');
smo60860v0ar.push(smo60841);
const smo60842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60842.setAttribute('id', 'smo60842');
smo60860v0ar.push(smo60842);
const smo60843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo60843.setAttribute('id', 'smo60843');
smo60860v0ar.push(smo60843);
const smo60844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60844.setAttribute('id', 'smo60844');
smo60860v0ar.push(smo60844);
const smo60845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo60845.setAttribute('id', 'smo60845');
smo60860v0ar.push(smo60845);
const smo60846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60846.setAttribute('id', 'smo60846');
smo60860v0ar.push(smo60846);
smo60860v0.addTickables(smo60860v0ar)
fmtsmo6086070.joinVoices([smo60860v0]);
const fmtsmo6586370 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo65863v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65863v0ar = [];
const smo65834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo65834.setAttribute('id', 'smo65834');
smo65863v0ar.push(smo65834);
const smo65835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65835.setAttribute('id', 'smo65835');
smo65863v0ar.push(smo65835);
const smo65836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65836.setAttribute('id', 'smo65836');
smo65863v0ar.push(smo65836);
const smo65837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65837.setAttribute('id', 'smo65837');
smo65863v0ar.push(smo65837);
const smo65838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65838.setAttribute('id', 'smo65838');
smo65863v0ar.push(smo65838);
const smo65839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65839.setAttribute('id', 'smo65839');
smo65863v0ar.push(smo65839);
const smo65840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65840.setAttribute('id', 'smo65840');
smo65863v0ar.push(smo65840);
const smo65841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65841.setAttribute('id', 'smo65841');
smo65863v0ar.push(smo65841);
const smo65842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/2/n"]}'))
smo65842.setAttribute('id', 'smo65842');
smo65863v0ar.push(smo65842);
const smo65843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65843.setAttribute('id', 'smo65843');
smo65863v0ar.push(smo65843);
const smo65844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65844.setAttribute('id', 'smo65844');
smo65863v0ar.push(smo65844);
const smo65845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65845.setAttribute('id', 'smo65845');
smo65863v0ar.push(smo65845);
const smo65846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65846.setAttribute('id', 'smo65846');
smo65863v0ar.push(smo65846);
const smo65847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65847.setAttribute('id', 'smo65847');
smo65863v0ar.push(smo65847);
const smo65848 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo65848.setAttribute('id', 'smo65848');
smo65863v0ar.push(smo65848);
const smo65849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["ab/3/n"]}'))
smo65849.setAttribute('id', 'smo65849');
smo65863v0ar.push(smo65849);
smo65863v0.addTickables(smo65863v0ar)
fmtsmo6586370.joinVoices([smo65863v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68936 = smo60831.getStemDirection();
smo60831.setStemDirection(dirsmo68936);
smo60832.setStemDirection(dirsmo68936);
smo60833.setStemDirection(dirsmo68936);
smo60834.setStemDirection(dirsmo68936);
const smo68936 = new VF.Beam([smo60831,smo60832,smo60833,smo60834]);
const dirsmo68937 = smo60835.getStemDirection();
smo60835.setStemDirection(dirsmo68937);
smo60836.setStemDirection(dirsmo68937);
smo60837.setStemDirection(dirsmo68937);
smo60838.setStemDirection(dirsmo68937);
const smo68937 = new VF.Beam([smo60835,smo60836,smo60837,smo60838]);
const dirsmo68938 = smo60839.getStemDirection();
smo60839.setStemDirection(dirsmo68938);
smo60840.setStemDirection(dirsmo68938);
smo60841.setStemDirection(dirsmo68938);
smo60842.setStemDirection(dirsmo68938);
const smo68938 = new VF.Beam([smo60839,smo60840,smo60841,smo60842]);
const dirsmo68939 = smo60843.getStemDirection();
smo60843.setStemDirection(dirsmo68939);
smo60844.setStemDirection(dirsmo68939);
smo60845.setStemDirection(dirsmo68939);
smo60846.setStemDirection(dirsmo68939);
const smo68939 = new VF.Beam([smo60843,smo60844,smo60845,smo60846]);
const dirsmo68942 = smo65834.getStemDirection();
smo65834.setStemDirection(dirsmo68942);
smo65835.setStemDirection(dirsmo68942);
smo65836.setStemDirection(dirsmo68942);
smo65837.setStemDirection(dirsmo68942);
const smo68942 = new VF.Beam([smo65834,smo65835,smo65836,smo65837]);
const dirsmo68943 = smo65838.getStemDirection();
smo65838.setStemDirection(dirsmo68943);
smo65839.setStemDirection(dirsmo68943);
smo65840.setStemDirection(dirsmo68943);
smo65841.setStemDirection(dirsmo68943);
const smo68943 = new VF.Beam([smo65838,smo65839,smo65840,smo65841]);
const dirsmo68944 = smo65842.getStemDirection();
smo65842.setStemDirection(dirsmo68944);
smo65843.setStemDirection(dirsmo68944);
smo65844.setStemDirection(dirsmo68944);
smo65845.setStemDirection(dirsmo68944);
const smo68944 = new VF.Beam([smo65842,smo65843,smo65844,smo65845]);
const dirsmo68945 = smo65846.getStemDirection();
smo65846.setStemDirection(dirsmo68945);
smo65847.setStemDirection(dirsmo68945);
smo65848.setStemDirection(dirsmo68945);
smo65849.setStemDirection(dirsmo68945);
const smo68945 = new VF.Beam([smo65846,smo65847,smo65848,smo65849]);
 
// formatting measures in staff group smo57447
fmtsmo6086070.format([smo60860v0,smo65863v0], 386);
const stavesmo60860 = new VF.Stave(1050, 2180, 400);
stavesmo60860.setAttribute('id', 'stavesmo60860');
stavesmo60860.setBegBarType(VF.Barline.type.NONE);
stavesmo60860.setContext(context);
stavesmo60860.draw();
smo60860v0.draw(context, stavesmo60860);
smo68936.setContext(context);
smo68936.draw();
smo68937.setContext(context);
smo68937.draw();
smo68938.setContext(context);
smo68938.draw();
smo68939.setContext(context);
smo68939.draw();
const stavesmo65863 = new VF.Stave(1050, 2270, 400);
stavesmo65863.setAttribute('id', 'stavesmo65863');
stavesmo65863.setBegBarType(VF.Barline.type.NONE);
stavesmo65863.setContext(context);
stavesmo65863.draw();
smo65863v0.draw(context, stavesmo65863);
smo68942.setContext(context);
smo68942.draw();
smo68943.setContext(context);
smo68943.draw();
smo68944.setContext(context);
smo68944.draw();
smo68945.setContext(context);
smo68945.draw();
const fmtsmo6089071 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo60890v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo60890v0ar = [];
const smo60861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60861.setAttribute('id', 'smo60861');
smo60890v0ar.push(smo60861);
const smo60862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60862.setAttribute('id', 'smo60862');
smo60890v0ar.push(smo60862);
const smo60863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60863.setAttribute('id', 'smo60863');
smo60890v0ar.push(smo60863);
const smo60864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60864.setAttribute('id', 'smo60864');
smo60890v0ar.push(smo60864);
const smo60865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60865.setAttribute('id', 'smo60865');
smo60890v0ar.push(smo60865);
const smo60866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60866.setAttribute('id', 'smo60866');
smo60890v0ar.push(smo60866);
const smo60867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60867.setAttribute('id', 'smo60867');
smo60890v0ar.push(smo60867);
const smo60868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60868.setAttribute('id', 'smo60868');
smo60890v0ar.push(smo60868);
const smo60869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo60869.setAttribute('id', 'smo60869');
smo60890v0ar.push(smo60869);
const smo60870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60870.setAttribute('id', 'smo60870');
smo60890v0ar.push(smo60870);
const smo60871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60871.setAttribute('id', 'smo60871');
smo60890v0ar.push(smo60871);
const smo60872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60872.setAttribute('id', 'smo60872');
smo60890v0ar.push(smo60872);
const smo60873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo60873.setAttribute('id', 'smo60873');
smo60890v0ar.push(smo60873);
const smo60874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60874.setAttribute('id', 'smo60874');
smo60890v0ar.push(smo60874);
const smo60875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["eb/4/n"]}'))
smo60875.setAttribute('id', 'smo60875');
smo60890v0ar.push(smo60875);
const smo60876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo60876.setAttribute('id', 'smo60876');
smo60890v0ar.push(smo60876);
smo60890v0.addTickables(smo60890v0ar)
fmtsmo6089071.joinVoices([smo60890v0]);
const fmtsmo6589371 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo65893v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo65893v0ar = [];
const smo65864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/2/n"]}'))
smo65864.setAttribute('id', 'smo65864');
smo65893v0ar.push(smo65864);
const smo65865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65865.setAttribute('id', 'smo65865');
smo65893v0ar.push(smo65865);
const smo65866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65866.setAttribute('id', 'smo65866');
smo65893v0ar.push(smo65866);
const smo65867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65867.setAttribute('id', 'smo65867');
smo65893v0ar.push(smo65867);
const smo65868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65868.setAttribute('id', 'smo65868');
smo65893v0ar.push(smo65868);
const smo65869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65869.setAttribute('id', 'smo65869');
smo65893v0ar.push(smo65869);
const smo65870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65870.setAttribute('id', 'smo65870');
smo65893v0ar.push(smo65870);
const smo65871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65871.setAttribute('id', 'smo65871');
smo65893v0ar.push(smo65871);
const smo65872 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["ab/2/n"]}'))
smo65872.setAttribute('id', 'smo65872');
smo65893v0ar.push(smo65872);
const smo65873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65873.setAttribute('id', 'smo65873');
smo65893v0ar.push(smo65873);
const smo65874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65874.setAttribute('id', 'smo65874');
smo65893v0ar.push(smo65874);
const smo65875 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65875.setAttribute('id', 'smo65875');
smo65893v0ar.push(smo65875);
const smo65876 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo65876.setAttribute('id', 'smo65876');
smo65893v0ar.push(smo65876);
const smo65877 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65877.setAttribute('id', 'smo65877');
smo65893v0ar.push(smo65877);
const smo65878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo65878.setAttribute('id', 'smo65878');
smo65893v0ar.push(smo65878);
const smo65879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo65879.setAttribute('id', 'smo65879');
smo65893v0ar.push(smo65879);
smo65893v0.addTickables(smo65893v0ar)
fmtsmo6589371.joinVoices([smo65893v0]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68948 = smo60861.getStemDirection();
smo60861.setStemDirection(dirsmo68948);
smo60862.setStemDirection(dirsmo68948);
smo60863.setStemDirection(dirsmo68948);
smo60864.setStemDirection(dirsmo68948);
const smo68948 = new VF.Beam([smo60861,smo60862,smo60863,smo60864]);
const dirsmo68949 = smo60865.getStemDirection();
smo60865.setStemDirection(dirsmo68949);
smo60866.setStemDirection(dirsmo68949);
smo60867.setStemDirection(dirsmo68949);
smo60868.setStemDirection(dirsmo68949);
const smo68949 = new VF.Beam([smo60865,smo60866,smo60867,smo60868]);
const dirsmo68950 = smo60869.getStemDirection();
smo60869.setStemDirection(dirsmo68950);
smo60870.setStemDirection(dirsmo68950);
smo60871.setStemDirection(dirsmo68950);
smo60872.setStemDirection(dirsmo68950);
const smo68950 = new VF.Beam([smo60869,smo60870,smo60871,smo60872]);
const dirsmo68951 = smo60873.getStemDirection();
smo60873.setStemDirection(dirsmo68951);
smo60874.setStemDirection(dirsmo68951);
smo60875.setStemDirection(dirsmo68951);
smo60876.setStemDirection(dirsmo68951);
const smo68951 = new VF.Beam([smo60873,smo60874,smo60875,smo60876]);
const dirsmo68954 = smo65864.getStemDirection();
smo65864.setStemDirection(dirsmo68954);
smo65865.setStemDirection(dirsmo68954);
smo65866.setStemDirection(dirsmo68954);
smo65867.setStemDirection(dirsmo68954);
const smo68954 = new VF.Beam([smo65864,smo65865,smo65866,smo65867]);
const dirsmo68955 = smo65868.getStemDirection();
smo65868.setStemDirection(dirsmo68955);
smo65869.setStemDirection(dirsmo68955);
smo65870.setStemDirection(dirsmo68955);
smo65871.setStemDirection(dirsmo68955);
const smo68955 = new VF.Beam([smo65868,smo65869,smo65870,smo65871]);
const dirsmo68956 = smo65872.getStemDirection();
smo65872.setStemDirection(dirsmo68956);
smo65873.setStemDirection(dirsmo68956);
smo65874.setStemDirection(dirsmo68956);
smo65875.setStemDirection(dirsmo68956);
const smo68956 = new VF.Beam([smo65872,smo65873,smo65874,smo65875]);
const dirsmo68957 = smo65876.getStemDirection();
smo65876.setStemDirection(dirsmo68957);
smo65877.setStemDirection(dirsmo68957);
smo65878.setStemDirection(dirsmo68957);
smo65879.setStemDirection(dirsmo68957);
const smo68957 = new VF.Beam([smo65876,smo65877,smo65878,smo65879]);
 
// formatting measures in staff group smo57447
fmtsmo6089071.format([smo60890v0,smo65893v0], 342);
const stavesmo60890 = new VF.Stave(1450, 2180, 356);
stavesmo60890.setAttribute('id', 'stavesmo60890');
stavesmo60890.setBegBarType(VF.Barline.type.NONE);
stavesmo60890.setContext(context);
stavesmo60890.draw();
smo60890v0.draw(context, stavesmo60890);
smo68948.setContext(context);
smo68948.draw();
smo68949.setContext(context);
smo68949.draw();
smo68950.setContext(context);
smo68950.draw();
smo68951.setContext(context);
smo68951.draw();
const stavesmo65893 = new VF.Stave(1450, 2270, 356);
stavesmo65893.setAttribute('id', 'stavesmo65893');
stavesmo65893.setBegBarType(VF.Barline.type.NONE);
stavesmo65893.setContext(context);
stavesmo65893.draw();
smo65893v0.draw(context, stavesmo65893);
smo68954.setContext(context);
smo68954.draw();
smo68955.setContext(context);
smo68955.draw();
smo68956.setContext(context);
smo68956.draw();
smo68957.setContext(context);
smo68957.draw();
const rightsmo57447stavesmo608901 = new VF.StaveConnector(stavesmo60890, stavesmo65893).setType(0);
rightsmo57447stavesmo608901.setContext(context).draw();
// modifier from 0-46-1-7 to 0-46-1-8
const smo70743 = new VF.StaveTie({ first_note: smo60094, last_note: smo60095, 
          firstNote: smo60094, lastNote: smo60095, first_indices: [0], last_indices: [0]});
smo70743.setContext(context).draw();
// modifier from 0-47-0-3 to 0-47-0-4
const smo70744 = new VF.StaveTie({ first_note: smo60116, last_note: smo60117, 
          firstNote: smo60116, lastNote: smo60117, first_indices: [0], last_indices: [0]});
smo70744.setContext(context).draw();
// modifier from 0-49-1-1 to 0-49-1-2
const smo70745 = new VF.StaveTie({ first_note: smo60184, last_note: smo60185, 
          firstNote: smo60184, lastNote: smo60185, first_indices: [0], last_indices: [0]});
smo70745.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo70746 = new VF.StaveTie({ first_note: smo60192, last_note: null, 
          firstNote: smo60192, lastNote: null, first_indices: [0], last_indices: [0]});
smo70746.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo70747 = new VF.StaveTie({ first_note: null, last_note: smo60217, 
          firstNote: null, lastNote: smo60217, first_indices: [0], last_indices: [0]});
smo70747.setContext(context).draw();
// modifier from 0-50-1-3 to 0-50-1-4
const smo70748 = new VF.StaveTie({ first_note: smo60220, last_note: smo60221, 
          firstNote: smo60220, lastNote: smo60221, first_indices: [0], last_indices: [0]});
smo70748.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo70749 = new VF.StaveTie({ first_note: smo60242, last_note: smo60243, 
          firstNote: smo60242, lastNote: smo60243, first_indices: [0], last_indices: [0]});
smo70749.setContext(context).draw();
// modifier from 0-51-1-6 to 0-51-1-7
const smo70750 = new VF.StaveTie({ first_note: smo60255, last_note: smo60256, 
          firstNote: smo60255, lastNote: smo60256, first_indices: [0], last_indices: [0]});
smo70750.setContext(context).draw();
// modifier from 0-54-1-3 to 0-54-1-4
const smo70751 = new VF.StaveTie({ first_note: smo60347, last_note: smo60348, 
          firstNote: smo60347, lastNote: smo60348, first_indices: [0], last_indices: [0]});
smo70751.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo70752 = new VF.StaveTie({ first_note: smo60378, last_note: null, 
          firstNote: smo60378, lastNote: null, first_indices: [0], last_indices: [0]});
smo70752.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo70753 = new VF.StaveTie({ first_note: null, last_note: smo60403, 
          firstNote: null, lastNote: smo60403, first_indices: [0], last_indices: [0]});
smo70753.setContext(context).draw();
// modifier from 0-55-1-1 to 0-55-1-2
const smo70754 = new VF.StaveTie({ first_note: smo60380, last_note: smo60381, 
          firstNote: smo60380, lastNote: smo60381, first_indices: [0], last_indices: [0]});
smo70754.setContext(context).draw();
// modifier from 0-56-1-0 to 0-56-1-1
const smo70755 = new VF.StaveTie({ first_note: smo60419, last_note: smo60420, 
          firstNote: smo60419, lastNote: smo60420, first_indices: [0], last_indices: [0]});
smo70755.setContext(context).draw();
// modifier from 0-57-1-1 to 0-57-1-2
const smo70756 = new VF.StaveTie({ first_note: smo60447, last_note: smo60448, 
          firstNote: smo60447, lastNote: smo60448, first_indices: [0], last_indices: [0]});
smo70756.setContext(context).draw();
// modifier from 0-59-0-2 to 0-59-0-3
const smo70757 = new VF.StaveTie({ first_note: smo60494, last_note: smo60495, 
          firstNote: smo60494, lastNote: smo60495, first_indices: [0], last_indices: [0]});
smo70757.setContext(context).draw();
// modifier from 0-60-0-8 to 0-61-0-0
const smo70758 = new VF.StaveTie({ first_note: smo60536, last_note: smo60562, 
          firstNote: smo60536, lastNote: smo60562, first_indices: [0], last_indices: [0]});
smo70758.setContext(context).draw();
// modifier from 0-60-1-8 to 0-60-1-9
const smo70759 = new VF.StaveTie({ first_note: smo60545, last_note: smo60546, 
          firstNote: smo60545, lastNote: smo60546, first_indices: [0], last_indices: [0]});
smo70759.setContext(context).draw();
// modifier from 0-58-1-2 to 0-58-1-3
const smo70760 = new VF.StaveTie({ first_note: smo60473, last_note: smo60474, 
          firstNote: smo60473, lastNote: smo60474, first_indices: [0], last_indices: [0]});
smo70760.setContext(context).draw();
// modifier from 1-49-0-3 to 1-49-0-4
const smo70761 = new VF.StaveTie({ first_note: smo65222, last_note: smo65223, 
          firstNote: smo65222, lastNote: smo65223, first_indices: [0], last_indices: [0]});
smo70761.setContext(context).draw();
// modifier from 1-57-0-2 to 1-57-0-3
const smo70762 = new VF.StaveTie({ first_note: smo65469, last_note: smo65470, 
          firstNote: smo65469, lastNote: smo65470, first_indices: [0], last_indices: [0]});
smo70762.setContext(context).draw();
// modifier from 1-57-0-5 to 1-58-0-0
const smo70763 = new VF.StaveTie({ first_note: smo65472, last_note: smo65501, 
          firstNote: smo65472, lastNote: smo65501, first_indices: [0], last_indices: [0]});
smo70763.setContext(context).draw();
}
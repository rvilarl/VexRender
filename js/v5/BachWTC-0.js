// @@ Well-Tempered Clavier p 1/6  by Bach
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
const fmtsmo586710 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo58671v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58671v0ar = [];
const smo58643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58643.setAttribute('id', 'smo58643');
smo58671v0ar.push(smo58643);
const smo58645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58645.setAttribute('id', 'smo58645');
smo58671v0ar.push(smo58645);
const smo58646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58646.setAttribute('id', 'smo58646');
smo58671v0ar.push(smo58646);
const smo58647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58647.setAttribute('id', 'smo58647');
smo58671v0ar.push(smo58647);
const smo58648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58648.setAttribute('id', 'smo58648');
smo58671v0ar.push(smo58648);
const smo58649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58649.setAttribute('id', 'smo58649');
smo58671v0ar.push(smo58649);
const smo58650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58650.setAttribute('id', 'smo58650');
smo58671v0ar.push(smo58650);
const smo58651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58651.setAttribute('id', 'smo58651');
smo58671v0ar.push(smo58651);
const smo58652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58652.setAttribute('id', 'smo58652');
smo58671v0ar.push(smo58652);
const smo58653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58653.setAttribute('id', 'smo58653');
smo58671v0ar.push(smo58653);
const smo58654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58654.setAttribute('id', 'smo58654');
smo58671v0ar.push(smo58654);
const smo58655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58655.setAttribute('id', 'smo58655');
smo58671v0ar.push(smo58655);
const smo58656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58656.setAttribute('id', 'smo58656');
smo58671v0ar.push(smo58656);
const smo58657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58657.setAttribute('id', 'smo58657');
smo58671v0ar.push(smo58657);
smo58671v0.addTickables(smo58671v0ar)
fmtsmo586710.joinVoices([smo58671v0]);
const fmtsmo641120 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo64112v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64112v0ar = [];
const smo64091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64091.setAttribute('id', 'smo64091');
smo64112v0ar.push(smo64091);
const smo64092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64092.setAttribute('id', 'smo64092');
smo64092.addModifier(new VF.Dot(), 0);
smo64112v0ar.push(smo64092);
const smo64093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64093.setAttribute('id', 'smo64093');
smo64112v0ar.push(smo64093);
const smo64094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64094.setAttribute('id', 'smo64094');
smo64112v0ar.push(smo64094);
const smo64095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64095.setAttribute('id', 'smo64095');
smo64095.addModifier(new VF.Dot(), 0);
smo64112v0ar.push(smo64095);
const smo64096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64096.setAttribute('id', 'smo64096');
smo64112v0ar.push(smo64096);
smo64112v0.addTickables(smo64112v0ar)
fmtsmo641120.joinVoices([smo64112v0]);
const smo64112v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64112v1ar = [];
const smo64097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64097.setAttribute('id', 'smo64097');
smo64097.setStyle({ fillStyle: "#115511" });
smo64112v1ar.push(smo64097);
const smo64098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64098.setAttribute('id', 'smo64098');
smo64098.setStyle({ fillStyle: "#115511" });
smo64112v1ar.push(smo64098);
smo64112v1.addTickables(smo64112v1ar)
fmtsmo641120.joinVoices([smo64112v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68028 = smo58645.getStemDirection();
smo58645.setStemDirection(dirsmo68028);
smo58646.setStemDirection(dirsmo68028);
const smo68028 = new VF.Beam([smo58645,smo58646]);
const dirsmo68029 = smo58647.getStemDirection();
smo58647.setStemDirection(dirsmo68029);
smo58648.setStemDirection(dirsmo68029);
smo58649.setStemDirection(dirsmo68029);
smo58650.setStemDirection(dirsmo68029);
const smo68029 = new VF.Beam([smo58647,smo58648,smo58649,smo58650]);
const dirsmo68030 = smo58652.getStemDirection();
smo58652.setStemDirection(dirsmo68030);
smo58653.setStemDirection(dirsmo68030);
const smo68030 = new VF.Beam([smo58652,smo58653]);
const dirsmo68031 = smo58654.getStemDirection();
smo58654.setStemDirection(dirsmo68031);
smo58655.setStemDirection(dirsmo68031);
smo58656.setStemDirection(dirsmo68031);
smo58657.setStemDirection(dirsmo68031);
const smo68031 = new VF.Beam([smo58654,smo58655,smo58656,smo58657]);
 
// formatting measures in staff group smo57447
fmtsmo586710.format([smo58671v0,smo64112v0,smo64112v1], 507);
const stavesmo58671 = new VF.Stave(90, 294, 589);
stavesmo58671.setAttribute('id', 'stavesmo58671');
stavesmo58671.setBegBarType(1);
stavesmo58671.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo58671.addClef('treble');
stavesmo58671.addTimeSignature('4/4');
stavesmo58671.setContext(context);
stavesmo58671.draw();
smo58671v0.draw(context, stavesmo58671);
smo68028.setContext(context);
smo68028.draw();
smo68029.setContext(context);
smo68029.draw();
smo68030.setContext(context);
smo68030.draw();
smo68031.setContext(context);
smo68031.draw();
const stavesmo64112 = new VF.Stave(90, 498, 589);
stavesmo64112.setAttribute('id', 'stavesmo64112');
stavesmo64112.setBegBarType(1);
stavesmo64112.addClef('treble');
stavesmo64112.addTimeSignature('4/4');
stavesmo64112.setContext(context);
stavesmo64112.draw();
smo64112v0.draw(context, stavesmo64112);
smo64112v1.draw(context, stavesmo64112);
const leftsmo57447stavesmo586711 = new VF.StaveConnector(stavesmo58671, stavesmo64112).setType(3);
leftsmo57447stavesmo586711.setContext(context).draw();
const fmtsmo586991 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo58699v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58699v0ar = [];
const smo58672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58672.setAttribute('id', 'smo58672');
smo58699v0ar.push(smo58672);
const smo58673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58673.setAttribute('id', 'smo58673');
smo58699v0ar.push(smo58673);
const smo58674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58674.setAttribute('id', 'smo58674');
smo58699v0ar.push(smo58674);
const smo58675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58675.setAttribute('id', 'smo58675');
smo58699v0ar.push(smo58675);
const smo58676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58676.setAttribute('id', 'smo58676');
smo58699v0ar.push(smo58676);
const smo58677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58677.setAttribute('id', 'smo58677');
smo58699v0ar.push(smo58677);
const smo58678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58678.setAttribute('id', 'smo58678');
smo58699v0ar.push(smo58678);
const smo58679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58679.setAttribute('id', 'smo58679');
smo58699v0ar.push(smo58679);
const smo58680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58680.setAttribute('id', 'smo58680');
smo58699v0ar.push(smo58680);
const smo58681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58681.setAttribute('id', 'smo58681');
smo58699v0ar.push(smo58681);
const smo58682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58682.setAttribute('id', 'smo58682');
smo58699v0ar.push(smo58682);
const smo58683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58683.setAttribute('id', 'smo58683');
smo58699v0ar.push(smo58683);
const smo58684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58684.setAttribute('id', 'smo58684');
smo58699v0ar.push(smo58684);
const smo58685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58685.setAttribute('id', 'smo58685');
smo58699v0ar.push(smo58685);
smo58699v0.addTickables(smo58699v0ar)
fmtsmo586991.joinVoices([smo58699v0]);
const fmtsmo641341 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo64134v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64134v0ar = [];
const smo64113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["cn/7/r"]}'))
smo64113.setAttribute('id', 'smo64113');
smo64134v0ar.push(smo64113);
const smo64114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo64114.setAttribute('id', 'smo64114');
smo64114.addModifier(new VF.Dot(), 0);
smo64134v0ar.push(smo64114);
const smo64115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo64115.setAttribute('id', 'smo64115');
smo64134v0ar.push(smo64115);
const smo64116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["cn/7/r"]}'))
smo64116.setAttribute('id', 'smo64116');
smo64134v0ar.push(smo64116);
const smo64117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo64117.setAttribute('id', 'smo64117');
smo64117.addModifier(new VF.Dot(), 0);
smo64134v0ar.push(smo64117);
const smo64118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo64118.setAttribute('id', 'smo64118');
smo64134v0ar.push(smo64118);
smo64134v0.addTickables(smo64134v0ar)
fmtsmo641341.joinVoices([smo64134v0]);
const smo64134v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64134v1ar = [];
const smo64119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64119.setAttribute('id', 'smo64119');
smo64119.setStyle({ fillStyle: "#115511" });
smo64134v1ar.push(smo64119);
const smo64120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64120.setAttribute('id', 'smo64120');
smo64120.setStyle({ fillStyle: "#115511" });
smo64134v1ar.push(smo64120);
smo64134v1.addTickables(smo64134v1ar)
fmtsmo641341.joinVoices([smo64134v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68036 = smo58673.getStemDirection();
smo58673.setStemDirection(dirsmo68036);
smo58674.setStemDirection(dirsmo68036);
const smo68036 = new VF.Beam([smo58673,smo58674]);
const dirsmo68037 = smo58675.getStemDirection();
smo58675.setStemDirection(dirsmo68037);
smo58676.setStemDirection(dirsmo68037);
smo58677.setStemDirection(dirsmo68037);
smo58678.setStemDirection(dirsmo68037);
const smo68037 = new VF.Beam([smo58675,smo58676,smo58677,smo58678]);
const dirsmo68038 = smo58680.getStemDirection();
smo58680.setStemDirection(dirsmo68038);
smo58681.setStemDirection(dirsmo68038);
const smo68038 = new VF.Beam([smo58680,smo58681]);
const dirsmo68039 = smo58682.getStemDirection();
smo58682.setStemDirection(dirsmo68039);
smo58683.setStemDirection(dirsmo68039);
smo58684.setStemDirection(dirsmo68039);
smo58685.setStemDirection(dirsmo68039);
const smo68039 = new VF.Beam([smo58682,smo58683,smo58684,smo58685]);
 
// formatting measures in staff group smo57447
fmtsmo586991.format([smo58699v0,smo64134v0,smo64134v1], 518);
const stavesmo58699 = new VF.Stave(679, 294, 566);
stavesmo58699.setAttribute('id', 'stavesmo58699');
stavesmo58699.setBegBarType(VF.Barline.type.NONE);
stavesmo58699.setContext(context);
stavesmo58699.draw();
smo58699v0.draw(context, stavesmo58699);
smo68036.setContext(context);
smo68036.draw();
smo68037.setContext(context);
smo68037.draw();
smo68038.setContext(context);
smo68038.draw();
smo68039.setContext(context);
smo68039.draw();
const stavesmo64134 = new VF.Stave(679, 498, 566);
stavesmo64134.setAttribute('id', 'stavesmo64134');
stavesmo64134.setBegBarType(VF.Barline.type.NONE);
stavesmo64134.addClef('bass');
stavesmo64134.setContext(context);
stavesmo64134.draw();
smo64134v0.draw(context, stavesmo64134);
smo64134v1.draw(context, stavesmo64134);
const fmtsmo587312 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo58731v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58731v0ar = [];
const smo58700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58700.setAttribute('id', 'smo58700');
smo58731v0ar.push(smo58700);
const smo58701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58701.setAttribute('id', 'smo58701');
smo58731v0ar.push(smo58701);
const smo58702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58702.setAttribute('id', 'smo58702');
smo58731v0ar.push(smo58702);
const smo58703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58703.setAttribute('id', 'smo58703');
smo58731v0ar.push(smo58703);
const smo58704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58704.setAttribute('id', 'smo58704');
smo58731v0ar.push(smo58704);
const smo58705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58705.setAttribute('id', 'smo58705');
smo58731v0ar.push(smo58705);
const smo58706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58706.setAttribute('id', 'smo58706');
smo58731v0ar.push(smo58706);
const smo58707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58707.setAttribute('id', 'smo58707');
smo58731v0ar.push(smo58707);
const smo58708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58708.setAttribute('id', 'smo58708');
smo58731v0ar.push(smo58708);
const smo58709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58709.setAttribute('id', 'smo58709');
smo58731v0ar.push(smo58709);
const smo58710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58710.setAttribute('id', 'smo58710');
smo58731v0ar.push(smo58710);
const smo58711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58711.setAttribute('id', 'smo58711');
smo58731v0ar.push(smo58711);
const smo58712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58712.setAttribute('id', 'smo58712');
smo58731v0ar.push(smo58712);
const smo58713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/5/n"]}'))
smo58713.setAttribute('id', 'smo58713');
smo58731v0ar.push(smo58713);
smo58731v0.addTickables(smo58731v0ar)
fmtsmo587312.joinVoices([smo58731v0]);
const smo58731v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58731v1ar = [];
const smo58714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58714.setAttribute('id', 'smo58714');
smo58714.setStyle({ fillStyle: '#aaaaaa7f' });
smo58731v1ar.push(smo58714);
const smo58715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58715.setAttribute('id', 'smo58715');
smo58715.setStyle({ fillStyle: '#aaaaaa7f' });
smo58715.addModifier(new VF.Dot(), 0);
smo58715.addModifier(new VF.Dot(), 0);
smo58731v1ar.push(smo58715);
const smo58716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58716.setAttribute('id', 'smo58716');
smo58716.setStyle({ fillStyle: '#aaaaaa7f' });
smo58731v1ar.push(smo58716);
const smo58717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58717.setAttribute('id', 'smo58717');
smo58717.setStyle({ fillStyle: '#aaaaaa7f' });
smo58717.addModifier(new VF.Dot(), 0);
smo58717.addModifier(new VF.Dot(), 0);
smo58731v1ar.push(smo58717);
smo58731v1.addTickables(smo58731v1ar)
fmtsmo587312.joinVoices([smo58731v1]);
const fmtsmo641562 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo64156v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64156v0ar = [];
const smo64135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bb/6/r"]}'))
smo64135.setAttribute('id', 'smo64135');
smo64156v0ar.push(smo64135);
const smo64136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64136.setAttribute('id', 'smo64136');
smo64136.addModifier(new VF.Dot(), 0);
smo64156v0ar.push(smo64136);
const smo64137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64137.setAttribute('id', 'smo64137');
smo64156v0ar.push(smo64137);
const smo64138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["cn/7/r"]}'))
smo64138.setAttribute('id', 'smo64138');
smo64156v0ar.push(smo64138);
const smo64139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64139.setAttribute('id', 'smo64139');
smo64139.addModifier(new VF.Dot(), 0);
smo64156v0ar.push(smo64139);
const smo64140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64140.setAttribute('id', 'smo64140');
smo64156v0ar.push(smo64140);
smo64156v0.addTickables(smo64156v0ar)
fmtsmo641562.joinVoices([smo64156v0]);
const smo64156v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64156v1ar = [];
const smo64141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64141.setAttribute('id', 'smo64141');
smo64141.setStyle({ fillStyle: "#115511" });
smo64156v1ar.push(smo64141);
const smo64142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64142.setAttribute('id', 'smo64142');
smo64142.setStyle({ fillStyle: "#115511" });
smo64156v1ar.push(smo64142);
smo64156v1.addTickables(smo64156v1ar)
fmtsmo641562.joinVoices([smo64156v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68044 = smo58701.getStemDirection();
smo58701.setStemDirection(dirsmo68044);
smo58702.setStemDirection(dirsmo68044);
const smo68044 = new VF.Beam([smo58701,smo58702]);
const dirsmo68045 = smo58703.getStemDirection();
smo58703.setStemDirection(dirsmo68045);
smo58704.setStemDirection(dirsmo68045);
smo58705.setStemDirection(dirsmo68045);
smo58706.setStemDirection(dirsmo68045);
const smo68045 = new VF.Beam([smo58703,smo58704,smo58705,smo58706]);
const dirsmo68046 = smo58708.getStemDirection();
smo58708.setStemDirection(dirsmo68046);
smo58709.setStemDirection(dirsmo68046);
const smo68046 = new VF.Beam([smo58708,smo58709]);
const dirsmo68047 = smo58710.getStemDirection();
smo58710.setStemDirection(dirsmo68047);
smo58711.setStemDirection(dirsmo68047);
smo58712.setStemDirection(dirsmo68047);
smo58713.setStemDirection(dirsmo68047);
const smo68047 = new VF.Beam([smo58710,smo58711,smo58712,smo58713]);
 
// formatting measures in staff group smo57447
fmtsmo587312.format([smo58731v0,smo58731v1,smo64156v0,smo64156v1], 548);
const stavesmo58731 = new VF.Stave(1245, 294, 562);
stavesmo58731.setAttribute('id', 'stavesmo58731');
stavesmo58731.setBegBarType(VF.Barline.type.NONE);
stavesmo58731.setContext(context);
stavesmo58731.draw();
smo58731v0.draw(context, stavesmo58731);
smo58731v1.draw(context, stavesmo58731);
smo68044.setContext(context);
smo68044.draw();
smo68045.setContext(context);
smo68045.draw();
smo68046.setContext(context);
smo68046.draw();
smo68047.setContext(context);
smo68047.draw();
const stavesmo64156 = new VF.Stave(1245, 498, 562);
stavesmo64156.setAttribute('id', 'stavesmo64156');
stavesmo64156.setBegBarType(VF.Barline.type.NONE);
stavesmo64156.setContext(context);
stavesmo64156.draw();
smo64156v0.draw(context, stavesmo64156);
smo64156v1.draw(context, stavesmo64156);
const rightsmo57447stavesmo587311 = new VF.StaveConnector(stavesmo58731, stavesmo64156).setType(0);
rightsmo57447stavesmo587311.setContext(context).draw();
const fmtsmo587633 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo58763v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58763v0ar = [];
const smo58732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58732.setAttribute('id', 'smo58732');
smo58763v0ar.push(smo58732);
const smo58733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58733.setAttribute('id', 'smo58733');
smo58763v0ar.push(smo58733);
const smo58734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58734.setAttribute('id', 'smo58734');
smo58763v0ar.push(smo58734);
const smo58735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58735.setAttribute('id', 'smo58735');
smo58763v0ar.push(smo58735);
const smo58736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58736.setAttribute('id', 'smo58736');
smo58763v0ar.push(smo58736);
const smo58737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58737.setAttribute('id', 'smo58737');
smo58763v0ar.push(smo58737);
const smo58738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58738.setAttribute('id', 'smo58738');
smo58763v0ar.push(smo58738);
const smo58739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58739.setAttribute('id', 'smo58739');
smo58763v0ar.push(smo58739);
const smo58740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58740.setAttribute('id', 'smo58740');
smo58763v0ar.push(smo58740);
const smo58741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58741.setAttribute('id', 'smo58741');
smo58763v0ar.push(smo58741);
const smo58742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58742.setAttribute('id', 'smo58742');
smo58763v0ar.push(smo58742);
const smo58743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58743.setAttribute('id', 'smo58743');
smo58763v0ar.push(smo58743);
const smo58744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58744.setAttribute('id', 'smo58744');
smo58763v0ar.push(smo58744);
const smo58745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58745.setAttribute('id', 'smo58745');
smo58763v0ar.push(smo58745);
smo58763v0.addTickables(smo58763v0ar)
fmtsmo587633.joinVoices([smo58763v0]);
const smo58763v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58763v1ar = [];
const smo58746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58746.setAttribute('id', 'smo58746');
smo58746.setStyle({ fillStyle: '#aaaaaa7f' });
smo58763v1ar.push(smo58746);
const smo58747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58747.setAttribute('id', 'smo58747');
smo58747.setStyle({ fillStyle: '#aaaaaa7f' });
smo58747.addModifier(new VF.Dot(), 0);
smo58747.addModifier(new VF.Dot(), 0);
smo58763v1ar.push(smo58747);
const smo58748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58748.setAttribute('id', 'smo58748');
smo58748.setStyle({ fillStyle: '#aaaaaa7f' });
smo58763v1ar.push(smo58748);
const smo58749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58749.setAttribute('id', 'smo58749');
smo58749.setStyle({ fillStyle: '#aaaaaa7f' });
smo58749.addModifier(new VF.Dot(), 0);
smo58749.addModifier(new VF.Dot(), 0);
smo58763v1ar.push(smo58749);
smo58763v1.addTickables(smo58763v1ar)
fmtsmo587633.joinVoices([smo58763v1]);
const fmtsmo641783 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo64178v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64178v0ar = [];
const smo64157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64157.setAttribute('id', 'smo64157');
smo64178v0ar.push(smo64157);
const smo64158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64158.setAttribute('id', 'smo64158');
smo64158.addModifier(new VF.Dot(), 0);
smo64178v0ar.push(smo64158);
const smo64159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64159.setAttribute('id', 'smo64159');
smo64178v0ar.push(smo64159);
const smo64160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64160.setAttribute('id', 'smo64160');
smo64178v0ar.push(smo64160);
const smo64161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64161.setAttribute('id', 'smo64161');
smo64161.addModifier(new VF.Dot(), 0);
smo64178v0ar.push(smo64161);
const smo64162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64162.setAttribute('id', 'smo64162');
smo64178v0ar.push(smo64162);
smo64178v0.addTickables(smo64178v0ar)
fmtsmo641783.joinVoices([smo64178v0]);
const smo64178v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64178v1ar = [];
const smo64163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64163.setAttribute('id', 'smo64163');
smo64163.setStyle({ fillStyle: "#115511" });
smo64178v1ar.push(smo64163);
const smo64164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64164.setAttribute('id', 'smo64164');
smo64164.setStyle({ fillStyle: "#115511" });
smo64178v1ar.push(smo64164);
smo64178v1.addTickables(smo64178v1ar)
fmtsmo641783.joinVoices([smo64178v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68060 = smo58733.getStemDirection();
smo58733.setStemDirection(dirsmo68060);
smo58734.setStemDirection(dirsmo68060);
const smo68060 = new VF.Beam([smo58733,smo58734]);
const dirsmo68061 = smo58735.getStemDirection();
smo58735.setStemDirection(dirsmo68061);
smo58736.setStemDirection(dirsmo68061);
smo58737.setStemDirection(dirsmo68061);
smo58738.setStemDirection(dirsmo68061);
const smo68061 = new VF.Beam([smo58735,smo58736,smo58737,smo58738]);
const dirsmo68062 = smo58740.getStemDirection();
smo58740.setStemDirection(dirsmo68062);
smo58741.setStemDirection(dirsmo68062);
const smo68062 = new VF.Beam([smo58740,smo58741]);
const dirsmo68063 = smo58742.getStemDirection();
smo58742.setStemDirection(dirsmo68063);
smo58743.setStemDirection(dirsmo68063);
smo58744.setStemDirection(dirsmo68063);
smo58745.setStemDirection(dirsmo68063);
const smo68063 = new VF.Beam([smo58742,smo58743,smo58744,smo58745]);
 
// formatting measures in staff group smo57447
fmtsmo587633.format([smo58763v0,smo58763v1,smo64178v0,smo64178v1], 527);
const stavesmo58763 = new VF.Stave(90, 692, 585);
stavesmo58763.setAttribute('id', 'stavesmo58763');
stavesmo58763.setBegBarType(1);
stavesmo58763.addClef('treble');
stavesmo58763.setContext(context);
stavesmo58763.draw();
smo58763v0.draw(context, stavesmo58763);
smo58763v1.draw(context, stavesmo58763);
smo68060.setContext(context);
smo68060.draw();
smo68061.setContext(context);
smo68061.draw();
smo68062.setContext(context);
smo68062.draw();
smo68063.setContext(context);
smo68063.draw();
const stavesmo64178 = new VF.Stave(90, 766, 585);
stavesmo64178.setAttribute('id', 'stavesmo64178');
stavesmo64178.setBegBarType(1);
stavesmo64178.addClef('treble');
stavesmo64178.setContext(context);
stavesmo64178.draw();
smo64178v0.draw(context, stavesmo64178);
smo64178v1.draw(context, stavesmo64178);
const leftsmo57447stavesmo587631 = new VF.StaveConnector(stavesmo58763, stavesmo64178).setType(3);
leftsmo57447stavesmo587631.setContext(context).draw();
const fmtsmo587954 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo58795v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58795v0ar = [];
const smo58764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58764.setAttribute('id', 'smo58764');
smo58795v0ar.push(smo58764);
const smo58765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58765.setAttribute('id', 'smo58765');
smo58795v0ar.push(smo58765);
const smo58766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58766.setAttribute('id', 'smo58766');
smo58795v0ar.push(smo58766);
const smo58767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo58767.setAttribute('id', 'smo58767');
smo58795v0ar.push(smo58767);
const smo58768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58768.setAttribute('id', 'smo58768');
smo58795v0ar.push(smo58768);
const smo58769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58769.setAttribute('id', 'smo58769');
smo58795v0ar.push(smo58769);
const smo58770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo58770.setAttribute('id', 'smo58770');
smo58795v0ar.push(smo58770);
const smo58771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58771.setAttribute('id', 'smo58771');
smo58795v0ar.push(smo58771);
const smo58772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58772.setAttribute('id', 'smo58772');
smo58795v0ar.push(smo58772);
const smo58773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58773.setAttribute('id', 'smo58773');
smo58795v0ar.push(smo58773);
const smo58774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo58774.setAttribute('id', 'smo58774');
smo58795v0ar.push(smo58774);
const smo58775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58775.setAttribute('id', 'smo58775');
smo58795v0ar.push(smo58775);
const smo58776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo58776.setAttribute('id', 'smo58776');
smo58795v0ar.push(smo58776);
const smo58777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo58777.setAttribute('id', 'smo58777');
smo58795v0ar.push(smo58777);
smo58795v0.addTickables(smo58795v0ar)
fmtsmo587954.joinVoices([smo58795v0]);
const smo58795v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58795v1ar = [];
const smo58778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58778.setAttribute('id', 'smo58778');
smo58778.setStyle({ fillStyle: '#aaaaaa7f' });
smo58795v1ar.push(smo58778);
const smo58779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58779.setAttribute('id', 'smo58779');
smo58779.setStyle({ fillStyle: '#aaaaaa7f' });
smo58779.addModifier(new VF.Dot(), 0);
smo58779.addModifier(new VF.Dot(), 0);
smo58795v1ar.push(smo58779);
const smo58780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58780.setAttribute('id', 'smo58780');
smo58780.setStyle({ fillStyle: '#aaaaaa7f' });
smo58795v1ar.push(smo58780);
const smo58781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58781.setAttribute('id', 'smo58781');
smo58781.setStyle({ fillStyle: '#aaaaaa7f' });
smo58781.addModifier(new VF.Dot(), 0);
smo58781.addModifier(new VF.Dot(), 0);
smo58795v1ar.push(smo58781);
smo58795v1.addTickables(smo58795v1ar)
fmtsmo587954.joinVoices([smo58795v1]);
const fmtsmo642004 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo64200v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64200v0ar = [];
const smo64179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64179.setAttribute('id', 'smo64179');
smo64200v0ar.push(smo64179);
const smo64180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64180.setAttribute('id', 'smo64180');
smo64180.addModifier(new VF.Dot(), 0);
smo64200v0ar.push(smo64180);
const smo64181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64181.setAttribute('id', 'smo64181');
smo64200v0ar.push(smo64181);
const smo64182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64182.setAttribute('id', 'smo64182');
smo64200v0ar.push(smo64182);
const smo64183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64183.setAttribute('id', 'smo64183');
smo64183.addModifier(new VF.Dot(), 0);
smo64200v0ar.push(smo64183);
const smo64184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/4/n"]}'))
smo64184.setAttribute('id', 'smo64184');
smo64200v0ar.push(smo64184);
smo64200v0.addTickables(smo64200v0ar)
fmtsmo642004.joinVoices([smo64200v0]);
const smo64200v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64200v1ar = [];
const smo64185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64185.setAttribute('id', 'smo64185');
smo64185.setStyle({ fillStyle: "#115511" });
smo64200v1ar.push(smo64185);
const smo64186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64186.setAttribute('id', 'smo64186');
smo64186.setStyle({ fillStyle: "#115511" });
smo64200v1ar.push(smo64186);
smo64200v1.addTickables(smo64200v1ar)
fmtsmo642004.joinVoices([smo64200v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68068 = smo58765.getStemDirection();
smo58765.setStemDirection(dirsmo68068);
smo58766.setStemDirection(dirsmo68068);
const smo68068 = new VF.Beam([smo58765,smo58766]);
const dirsmo68069 = smo58767.getStemDirection();
smo58767.setStemDirection(dirsmo68069);
smo58768.setStemDirection(dirsmo68069);
smo58769.setStemDirection(dirsmo68069);
smo58770.setStemDirection(dirsmo68069);
const smo68069 = new VF.Beam([smo58767,smo58768,smo58769,smo58770]);
const dirsmo68070 = smo58772.getStemDirection();
smo58772.setStemDirection(dirsmo68070);
smo58773.setStemDirection(dirsmo68070);
const smo68070 = new VF.Beam([smo58772,smo58773]);
const dirsmo68071 = smo58774.getStemDirection();
smo58774.setStemDirection(dirsmo68071);
smo58775.setStemDirection(dirsmo68071);
smo58776.setStemDirection(dirsmo68071);
smo58777.setStemDirection(dirsmo68071);
const smo68071 = new VF.Beam([smo58774,smo58775,smo58776,smo58777]);
 
// formatting measures in staff group smo57447
fmtsmo587954.format([smo58795v0,smo58795v1,smo64200v0,smo64200v1], 527);
const stavesmo58795 = new VF.Stave(675, 692, 541);
stavesmo58795.setAttribute('id', 'stavesmo58795');
stavesmo58795.setBegBarType(VF.Barline.type.NONE);
stavesmo58795.setContext(context);
stavesmo58795.draw();
smo58795v0.draw(context, stavesmo58795);
smo58795v1.draw(context, stavesmo58795);
smo68068.setContext(context);
smo68068.draw();
smo68069.setContext(context);
smo68069.draw();
smo68070.setContext(context);
smo68070.draw();
smo68071.setContext(context);
smo68071.draw();
const stavesmo64200 = new VF.Stave(675, 766, 541);
stavesmo64200.setAttribute('id', 'stavesmo64200');
stavesmo64200.setBegBarType(VF.Barline.type.NONE);
stavesmo64200.setContext(context);
stavesmo64200.draw();
smo64200v0.draw(context, stavesmo64200);
smo64200v1.draw(context, stavesmo64200);
const fmtsmo588275 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo58827v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58827v0ar = [];
const smo58796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58796.setAttribute('id', 'smo58796');
smo58827v0ar.push(smo58796);
const smo58797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58797.setAttribute('id', 'smo58797');
const smo587970acc = new VF.Accidental('#');
smo58797.addModifier(smo587970acc, 0);
smo58827v0ar.push(smo58797);
const smo58798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58798.setAttribute('id', 'smo58798');
smo58827v0ar.push(smo58798);
const smo58799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58799.setAttribute('id', 'smo58799');
smo58827v0ar.push(smo58799);
const smo58800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58800.setAttribute('id', 'smo58800');
smo58827v0ar.push(smo58800);
const smo58801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58801.setAttribute('id', 'smo58801');
smo58827v0ar.push(smo58801);
const smo58802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58802.setAttribute('id', 'smo58802');
smo58827v0ar.push(smo58802);
const smo58803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58803.setAttribute('id', 'smo58803');
smo58827v0ar.push(smo58803);
const smo58804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58804.setAttribute('id', 'smo58804');
smo58827v0ar.push(smo58804);
const smo58805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58805.setAttribute('id', 'smo58805');
smo58827v0ar.push(smo58805);
const smo58806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58806.setAttribute('id', 'smo58806');
smo58827v0ar.push(smo58806);
const smo58807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58807.setAttribute('id', 'smo58807');
smo58827v0ar.push(smo58807);
const smo58808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo58808.setAttribute('id', 'smo58808');
smo58827v0ar.push(smo58808);
const smo58809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58809.setAttribute('id', 'smo58809');
smo58827v0ar.push(smo58809);
smo58827v0.addTickables(smo58827v0ar)
fmtsmo588275.joinVoices([smo58827v0]);
const smo58827v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58827v1ar = [];
const smo58810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58810.setAttribute('id', 'smo58810');
smo58810.setStyle({ fillStyle: '#aaaaaa7f' });
smo58827v1ar.push(smo58810);
const smo58811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58811.setAttribute('id', 'smo58811');
smo58811.setStyle({ fillStyle: '#aaaaaa7f' });
smo58811.addModifier(new VF.Dot(), 0);
smo58811.addModifier(new VF.Dot(), 0);
smo58827v1ar.push(smo58811);
const smo58812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58812.setAttribute('id', 'smo58812');
smo58812.setStyle({ fillStyle: '#aaaaaa7f' });
smo58827v1ar.push(smo58812);
const smo58813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58813.setAttribute('id', 'smo58813');
smo58813.setStyle({ fillStyle: '#aaaaaa7f' });
smo58813.addModifier(new VF.Dot(), 0);
smo58813.addModifier(new VF.Dot(), 0);
smo58827v1ar.push(smo58813);
smo58827v1.addTickables(smo58827v1ar)
fmtsmo588275.joinVoices([smo58827v1]);
const fmtsmo642225 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo64222v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64222v0ar = [];
const smo64201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64201.setAttribute('id', 'smo64201');
smo64222v0ar.push(smo64201);
const smo64202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64202.setAttribute('id', 'smo64202');
smo64202.addModifier(new VF.Dot(), 0);
smo64222v0ar.push(smo64202);
const smo64203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64203.setAttribute('id', 'smo64203');
smo64222v0ar.push(smo64203);
const smo64204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64204.setAttribute('id', 'smo64204');
smo64222v0ar.push(smo64204);
const smo64205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64205.setAttribute('id', 'smo64205');
smo64205.addModifier(new VF.Dot(), 0);
smo64222v0ar.push(smo64205);
const smo64206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64206.setAttribute('id', 'smo64206');
smo64222v0ar.push(smo64206);
smo64222v0.addTickables(smo64222v0ar)
fmtsmo642225.joinVoices([smo64222v0]);
const smo64222v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64222v1ar = [];
const smo64207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64207.setAttribute('id', 'smo64207');
smo64207.setStyle({ fillStyle: "#115511" });
smo64222v1ar.push(smo64207);
const smo64208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64208.setAttribute('id', 'smo64208');
smo64208.setStyle({ fillStyle: "#115511" });
smo64222v1ar.push(smo64208);
smo64222v1.addTickables(smo64222v1ar)
fmtsmo642225.joinVoices([smo64222v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68076 = smo58797.getStemDirection();
smo58797.setStemDirection(dirsmo68076);
smo58798.setStemDirection(dirsmo68076);
const smo68076 = new VF.Beam([smo58797,smo58798]);
const dirsmo68077 = smo58799.getStemDirection();
smo58799.setStemDirection(dirsmo68077);
smo58800.setStemDirection(dirsmo68077);
smo58801.setStemDirection(dirsmo68077);
smo58802.setStemDirection(dirsmo68077);
const smo68077 = new VF.Beam([smo58799,smo58800,smo58801,smo58802]);
const dirsmo68078 = smo58804.getStemDirection();
smo58804.setStemDirection(dirsmo68078);
smo58805.setStemDirection(dirsmo68078);
const smo68078 = new VF.Beam([smo58804,smo58805]);
const dirsmo68079 = smo58806.getStemDirection();
smo58806.setStemDirection(dirsmo68079);
smo58807.setStemDirection(dirsmo68079);
smo58808.setStemDirection(dirsmo68079);
smo58809.setStemDirection(dirsmo68079);
const smo68079 = new VF.Beam([smo58806,smo58807,smo58808,smo58809]);
 
// formatting measures in staff group smo57447
fmtsmo588275.format([smo58827v0,smo58827v1,smo64222v0,smo64222v1], 577);
const stavesmo58827 = new VF.Stave(1216, 692, 591);
stavesmo58827.setAttribute('id', 'stavesmo58827');
stavesmo58827.setBegBarType(VF.Barline.type.NONE);
stavesmo58827.setContext(context);
stavesmo58827.draw();
smo58827v0.draw(context, stavesmo58827);
smo58827v1.draw(context, stavesmo58827);
smo68076.setContext(context);
smo68076.draw();
smo68077.setContext(context);
smo68077.draw();
smo68078.setContext(context);
smo68078.draw();
smo68079.setContext(context);
smo68079.draw();
const stavesmo64222 = new VF.Stave(1216, 766, 591);
stavesmo64222.setAttribute('id', 'stavesmo64222');
stavesmo64222.setBegBarType(VF.Barline.type.NONE);
stavesmo64222.setContext(context);
stavesmo64222.draw();
smo64222v0.draw(context, stavesmo64222);
smo64222v1.draw(context, stavesmo64222);
const rightsmo57447stavesmo588271 = new VF.StaveConnector(stavesmo58827, stavesmo64222).setType(0);
rightsmo57447stavesmo588271.setContext(context).draw();
const fmtsmo588596 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo58859v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58859v0ar = [];
const smo58828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58828.setAttribute('id', 'smo58828');
smo58859v0ar.push(smo58828);
const smo58829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58829.setAttribute('id', 'smo58829');
smo58859v0ar.push(smo58829);
const smo58830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58830.setAttribute('id', 'smo58830');
smo58859v0ar.push(smo58830);
const smo58831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo58831.setAttribute('id', 'smo58831');
smo58859v0ar.push(smo58831);
const smo58832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58832.setAttribute('id', 'smo58832');
smo58859v0ar.push(smo58832);
const smo58833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58833.setAttribute('id', 'smo58833');
smo58859v0ar.push(smo58833);
const smo58834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo58834.setAttribute('id', 'smo58834');
smo58859v0ar.push(smo58834);
const smo58835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58835.setAttribute('id', 'smo58835');
smo58859v0ar.push(smo58835);
const smo58836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58836.setAttribute('id', 'smo58836');
smo58859v0ar.push(smo58836);
const smo58837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58837.setAttribute('id', 'smo58837');
smo58859v0ar.push(smo58837);
const smo58838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo58838.setAttribute('id', 'smo58838');
smo58859v0ar.push(smo58838);
const smo58839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58839.setAttribute('id', 'smo58839');
smo58859v0ar.push(smo58839);
const smo58840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo58840.setAttribute('id', 'smo58840');
smo58859v0ar.push(smo58840);
const smo58841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/5/n"]}'))
smo58841.setAttribute('id', 'smo58841');
smo58859v0ar.push(smo58841);
smo58859v0.addTickables(smo58859v0ar)
fmtsmo588596.joinVoices([smo58859v0]);
const smo58859v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58859v1ar = [];
const smo58842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58842.setAttribute('id', 'smo58842');
smo58842.setStyle({ fillStyle: '#aaaaaa7f' });
smo58859v1ar.push(smo58842);
const smo58843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58843.setAttribute('id', 'smo58843');
smo58843.setStyle({ fillStyle: '#aaaaaa7f' });
smo58843.addModifier(new VF.Dot(), 0);
smo58843.addModifier(new VF.Dot(), 0);
smo58859v1ar.push(smo58843);
const smo58844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58844.setAttribute('id', 'smo58844');
smo58844.setStyle({ fillStyle: '#aaaaaa7f' });
smo58859v1ar.push(smo58844);
const smo58845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58845.setAttribute('id', 'smo58845');
smo58845.setStyle({ fillStyle: '#aaaaaa7f' });
smo58845.addModifier(new VF.Dot(), 0);
smo58845.addModifier(new VF.Dot(), 0);
smo58859v1ar.push(smo58845);
smo58859v1.addTickables(smo58859v1ar)
fmtsmo588596.joinVoices([smo58859v1]);
const fmtsmo642446 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo64244v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64244v0ar = [];
const smo64223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64223.setAttribute('id', 'smo64223');
smo64244v0ar.push(smo64223);
const smo64224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64224.setAttribute('id', 'smo64224');
smo64224.addModifier(new VF.Dot(), 0);
smo64244v0ar.push(smo64224);
const smo64225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64225.setAttribute('id', 'smo64225');
smo64244v0ar.push(smo64225);
const smo64226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64226.setAttribute('id', 'smo64226');
smo64244v0ar.push(smo64226);
const smo64227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64227.setAttribute('id', 'smo64227');
smo64227.addModifier(new VF.Dot(), 0);
smo64244v0ar.push(smo64227);
const smo64228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/4/n"]}'))
smo64228.setAttribute('id', 'smo64228');
smo64244v0ar.push(smo64228);
smo64244v0.addTickables(smo64244v0ar)
fmtsmo642446.joinVoices([smo64244v0]);
const smo64244v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64244v1ar = [];
const smo64229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64229.setAttribute('id', 'smo64229');
smo64229.setStyle({ fillStyle: "#115511" });
smo64244v1ar.push(smo64229);
const smo64230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64230.setAttribute('id', 'smo64230');
smo64230.setStyle({ fillStyle: "#115511" });
smo64244v1ar.push(smo64230);
smo64244v1.addTickables(smo64244v1ar)
fmtsmo642446.joinVoices([smo64244v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68092 = smo58829.getStemDirection();
smo58829.setStemDirection(dirsmo68092);
smo58830.setStemDirection(dirsmo68092);
const smo68092 = new VF.Beam([smo58829,smo58830]);
const dirsmo68093 = smo58831.getStemDirection();
smo58831.setStemDirection(dirsmo68093);
smo58832.setStemDirection(dirsmo68093);
smo58833.setStemDirection(dirsmo68093);
smo58834.setStemDirection(dirsmo68093);
const smo68093 = new VF.Beam([smo58831,smo58832,smo58833,smo58834]);
const dirsmo68094 = smo58836.getStemDirection();
smo58836.setStemDirection(dirsmo68094);
smo58837.setStemDirection(dirsmo68094);
const smo68094 = new VF.Beam([smo58836,smo58837]);
const dirsmo68095 = smo58838.getStemDirection();
smo58838.setStemDirection(dirsmo68095);
smo58839.setStemDirection(dirsmo68095);
smo58840.setStemDirection(dirsmo68095);
smo58841.setStemDirection(dirsmo68095);
const smo68095 = new VF.Beam([smo58838,smo58839,smo58840,smo58841]);
 
// formatting measures in staff group smo57447
fmtsmo588596.format([smo58859v0,smo58859v1,smo64244v0,smo64244v1], 544);
const stavesmo58859 = new VF.Stave(90, 955, 602);
stavesmo58859.setAttribute('id', 'stavesmo58859');
stavesmo58859.setBegBarType(1);
stavesmo58859.addClef('treble');
stavesmo58859.setContext(context);
stavesmo58859.draw();
smo58859v0.draw(context, stavesmo58859);
smo58859v1.draw(context, stavesmo58859);
smo68092.setContext(context);
smo68092.draw();
smo68093.setContext(context);
smo68093.draw();
smo68094.setContext(context);
smo68094.draw();
smo68095.setContext(context);
smo68095.draw();
const stavesmo64244 = new VF.Stave(90, 1032, 602);
stavesmo64244.setAttribute('id', 'stavesmo64244');
stavesmo64244.setBegBarType(1);
stavesmo64244.addClef('treble');
stavesmo64244.setContext(context);
stavesmo64244.draw();
smo64244v0.draw(context, stavesmo64244);
smo64244v1.draw(context, stavesmo64244);
const leftsmo57447stavesmo588591 = new VF.StaveConnector(stavesmo58859, stavesmo64244).setType(3);
leftsmo57447stavesmo588591.setContext(context).draw();
const fmtsmo588917 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo58891v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58891v0ar = [];
const smo58860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58860.setAttribute('id', 'smo58860');
smo58891v0ar.push(smo58860);
const smo58861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58861.setAttribute('id', 'smo58861');
smo58891v0ar.push(smo58861);
const smo58862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58862.setAttribute('id', 'smo58862');
smo58891v0ar.push(smo58862);
const smo58863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58863.setAttribute('id', 'smo58863');
smo58891v0ar.push(smo58863);
const smo58864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58864.setAttribute('id', 'smo58864');
smo58891v0ar.push(smo58864);
const smo58865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58865.setAttribute('id', 'smo58865');
smo58891v0ar.push(smo58865);
const smo58866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58866.setAttribute('id', 'smo58866');
smo58891v0ar.push(smo58866);
const smo58867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58867.setAttribute('id', 'smo58867');
smo58891v0ar.push(smo58867);
const smo58868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58868.setAttribute('id', 'smo58868');
smo58891v0ar.push(smo58868);
const smo58869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58869.setAttribute('id', 'smo58869');
smo58891v0ar.push(smo58869);
const smo58870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58870.setAttribute('id', 'smo58870');
smo58891v0ar.push(smo58870);
const smo58871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58871.setAttribute('id', 'smo58871');
smo58891v0ar.push(smo58871);
const smo58872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58872.setAttribute('id', 'smo58872');
smo58891v0ar.push(smo58872);
const smo58873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58873.setAttribute('id', 'smo58873');
smo58891v0ar.push(smo58873);
smo58891v0.addTickables(smo58891v0ar)
fmtsmo588917.joinVoices([smo58891v0]);
const smo58891v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58891v1ar = [];
const smo58874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58874.setAttribute('id', 'smo58874');
smo58874.setStyle({ fillStyle: '#aaaaaa7f' });
smo58891v1ar.push(smo58874);
const smo58875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58875.setAttribute('id', 'smo58875');
smo58875.setStyle({ fillStyle: '#aaaaaa7f' });
smo58875.addModifier(new VF.Dot(), 0);
smo58875.addModifier(new VF.Dot(), 0);
smo58891v1ar.push(smo58875);
const smo58876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58876.setAttribute('id', 'smo58876');
smo58876.setStyle({ fillStyle: '#aaaaaa7f' });
smo58891v1ar.push(smo58876);
const smo58877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58877.setAttribute('id', 'smo58877');
smo58877.setStyle({ fillStyle: '#aaaaaa7f' });
smo58877.addModifier(new VF.Dot(), 0);
smo58877.addModifier(new VF.Dot(), 0);
smo58891v1ar.push(smo58877);
smo58891v1.addTickables(smo58891v1ar)
fmtsmo588917.joinVoices([smo58891v1]);
const fmtsmo642667 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo64266v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64266v0ar = [];
const smo64245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64245.setAttribute('id', 'smo64245');
smo64266v0ar.push(smo64245);
const smo64246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64246.setAttribute('id', 'smo64246');
smo64246.addModifier(new VF.Dot(), 0);
smo64266v0ar.push(smo64246);
const smo64247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64247.setAttribute('id', 'smo64247');
smo64266v0ar.push(smo64247);
const smo64248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64248.setAttribute('id', 'smo64248');
smo64266v0ar.push(smo64248);
const smo64249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64249.setAttribute('id', 'smo64249');
smo64249.addModifier(new VF.Dot(), 0);
smo64266v0ar.push(smo64249);
const smo64250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64250.setAttribute('id', 'smo64250');
smo64266v0ar.push(smo64250);
smo64266v0.addTickables(smo64266v0ar)
fmtsmo642667.joinVoices([smo64266v0]);
const smo64266v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64266v1ar = [];
const smo64251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64251.setAttribute('id', 'smo64251');
smo64251.setStyle({ fillStyle: "#115511" });
smo64266v1ar.push(smo64251);
const smo64252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64252.setAttribute('id', 'smo64252');
smo64252.setStyle({ fillStyle: "#115511" });
smo64266v1ar.push(smo64252);
smo64266v1.addTickables(smo64266v1ar)
fmtsmo642667.joinVoices([smo64266v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68100 = smo58861.getStemDirection();
smo58861.setStemDirection(dirsmo68100);
smo58862.setStemDirection(dirsmo68100);
const smo68100 = new VF.Beam([smo58861,smo58862]);
const dirsmo68101 = smo58863.getStemDirection();
smo58863.setStemDirection(dirsmo68101);
smo58864.setStemDirection(dirsmo68101);
smo58865.setStemDirection(dirsmo68101);
smo58866.setStemDirection(dirsmo68101);
const smo68101 = new VF.Beam([smo58863,smo58864,smo58865,smo58866]);
const dirsmo68102 = smo58868.getStemDirection();
smo58868.setStemDirection(dirsmo68102);
smo58869.setStemDirection(dirsmo68102);
const smo68102 = new VF.Beam([smo58868,smo58869]);
const dirsmo68103 = smo58870.getStemDirection();
smo58870.setStemDirection(dirsmo68103);
smo58871.setStemDirection(dirsmo68103);
smo58872.setStemDirection(dirsmo68103);
smo58873.setStemDirection(dirsmo68103);
const smo68103 = new VF.Beam([smo58870,smo58871,smo58872,smo58873]);
 
// formatting measures in staff group smo57447
fmtsmo588917.format([smo58891v0,smo58891v1,smo64266v0,smo64266v1], 544);
const stavesmo58891 = new VF.Stave(692, 955, 558);
stavesmo58891.setAttribute('id', 'stavesmo58891');
stavesmo58891.setBegBarType(VF.Barline.type.NONE);
stavesmo58891.setContext(context);
stavesmo58891.draw();
smo58891v0.draw(context, stavesmo58891);
smo58891v1.draw(context, stavesmo58891);
smo68100.setContext(context);
smo68100.draw();
smo68101.setContext(context);
smo68101.draw();
smo68102.setContext(context);
smo68102.draw();
smo68103.setContext(context);
smo68103.draw();
const stavesmo64266 = new VF.Stave(692, 1032, 558);
stavesmo64266.setAttribute('id', 'stavesmo64266');
stavesmo64266.setBegBarType(VF.Barline.type.NONE);
stavesmo64266.setContext(context);
stavesmo64266.draw();
smo64266v0.draw(context, stavesmo64266);
smo64266v1.draw(context, stavesmo64266);
const fmtsmo589238 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo58923v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58923v0ar = [];
const smo58892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58892.setAttribute('id', 'smo58892');
smo58923v0ar.push(smo58892);
const smo58893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58893.setAttribute('id', 'smo58893');
smo58923v0ar.push(smo58893);
const smo58894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58894.setAttribute('id', 'smo58894');
smo58923v0ar.push(smo58894);
const smo58895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58895.setAttribute('id', 'smo58895');
smo58923v0ar.push(smo58895);
const smo58896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58896.setAttribute('id', 'smo58896');
smo58923v0ar.push(smo58896);
const smo58897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58897.setAttribute('id', 'smo58897');
smo58923v0ar.push(smo58897);
const smo58898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58898.setAttribute('id', 'smo58898');
smo58923v0ar.push(smo58898);
const smo58899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58899.setAttribute('id', 'smo58899');
smo58923v0ar.push(smo58899);
const smo58900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58900.setAttribute('id', 'smo58900');
smo58923v0ar.push(smo58900);
const smo58901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58901.setAttribute('id', 'smo58901');
smo58923v0ar.push(smo58901);
const smo58902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58902.setAttribute('id', 'smo58902');
smo58923v0ar.push(smo58902);
const smo58903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58903.setAttribute('id', 'smo58903');
smo58923v0ar.push(smo58903);
const smo58904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58904.setAttribute('id', 'smo58904');
smo58923v0ar.push(smo58904);
const smo58905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58905.setAttribute('id', 'smo58905');
smo58923v0ar.push(smo58905);
smo58923v0.addTickables(smo58923v0ar)
fmtsmo589238.joinVoices([smo58923v0]);
const smo58923v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58923v1ar = [];
const smo58906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58906.setAttribute('id', 'smo58906');
smo58906.setStyle({ fillStyle: '#aaaaaa7f' });
smo58923v1ar.push(smo58906);
const smo58907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58907.setAttribute('id', 'smo58907');
smo58907.setStyle({ fillStyle: '#aaaaaa7f' });
smo58907.addModifier(new VF.Dot(), 0);
smo58907.addModifier(new VF.Dot(), 0);
smo58923v1ar.push(smo58907);
const smo58908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58908.setAttribute('id', 'smo58908');
smo58908.setStyle({ fillStyle: '#aaaaaa7f' });
smo58923v1ar.push(smo58908);
const smo58909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58909.setAttribute('id', 'smo58909');
smo58909.setStyle({ fillStyle: '#aaaaaa7f' });
smo58909.addModifier(new VF.Dot(), 0);
smo58909.addModifier(new VF.Dot(), 0);
smo58923v1ar.push(smo58909);
smo58923v1.addTickables(smo58923v1ar)
fmtsmo589238.joinVoices([smo58923v1]);
const fmtsmo642888 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo64288v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64288v0ar = [];
const smo64267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64267.setAttribute('id', 'smo64267');
smo64288v0ar.push(smo64267);
const smo64268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64268.setAttribute('id', 'smo64268');
smo64268.addModifier(new VF.Dot(), 0);
smo64288v0ar.push(smo64268);
const smo64269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64269.setAttribute('id', 'smo64269');
smo64288v0ar.push(smo64269);
const smo64270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64270.setAttribute('id', 'smo64270');
smo64288v0ar.push(smo64270);
const smo64271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64271.setAttribute('id', 'smo64271');
smo64271.addModifier(new VF.Dot(), 0);
smo64288v0ar.push(smo64271);
const smo64272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n"]}'))
smo64272.setAttribute('id', 'smo64272');
smo64288v0ar.push(smo64272);
smo64288v0.addTickables(smo64288v0ar)
fmtsmo642888.joinVoices([smo64288v0]);
const smo64288v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64288v1ar = [];
const smo64273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo64273.setAttribute('id', 'smo64273');
smo64273.setStyle({ fillStyle: "#115511" });
smo64288v1ar.push(smo64273);
const smo64274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n"]}'))
smo64274.setAttribute('id', 'smo64274');
smo64274.setStyle({ fillStyle: "#115511" });
smo64288v1ar.push(smo64274);
smo64288v1.addTickables(smo64288v1ar)
fmtsmo642888.joinVoices([smo64288v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68108 = smo58893.getStemDirection();
smo58893.setStemDirection(dirsmo68108);
smo58894.setStemDirection(dirsmo68108);
const smo68108 = new VF.Beam([smo58893,smo58894]);
const dirsmo68109 = smo58895.getStemDirection();
smo58895.setStemDirection(dirsmo68109);
smo58896.setStemDirection(dirsmo68109);
smo58897.setStemDirection(dirsmo68109);
smo58898.setStemDirection(dirsmo68109);
const smo68109 = new VF.Beam([smo58895,smo58896,smo58897,smo58898]);
const dirsmo68110 = smo58900.getStemDirection();
smo58900.setStemDirection(dirsmo68110);
smo58901.setStemDirection(dirsmo68110);
const smo68110 = new VF.Beam([smo58900,smo58901]);
const dirsmo68111 = smo58902.getStemDirection();
smo58902.setStemDirection(dirsmo68111);
smo58903.setStemDirection(dirsmo68111);
smo58904.setStemDirection(dirsmo68111);
smo58905.setStemDirection(dirsmo68111);
const smo68111 = new VF.Beam([smo58902,smo58903,smo58904,smo58905]);
 
// formatting measures in staff group smo57447
fmtsmo589238.format([smo58923v0,smo58923v1,smo64288v0,smo64288v1], 544);
const stavesmo58923 = new VF.Stave(1250, 955, 558);
stavesmo58923.setAttribute('id', 'stavesmo58923');
stavesmo58923.setBegBarType(VF.Barline.type.NONE);
stavesmo58923.setContext(context);
stavesmo58923.draw();
smo58923v0.draw(context, stavesmo58923);
smo58923v1.draw(context, stavesmo58923);
smo68108.setContext(context);
smo68108.draw();
smo68109.setContext(context);
smo68109.draw();
smo68110.setContext(context);
smo68110.draw();
smo68111.setContext(context);
smo68111.draw();
const stavesmo64288 = new VF.Stave(1250, 1032, 558);
stavesmo64288.setAttribute('id', 'stavesmo64288');
stavesmo64288.setBegBarType(VF.Barline.type.NONE);
stavesmo64288.setContext(context);
stavesmo64288.draw();
smo64288v0.draw(context, stavesmo64288);
smo64288v1.draw(context, stavesmo64288);
const rightsmo57447stavesmo589231 = new VF.StaveConnector(stavesmo58923, stavesmo64288).setType(0);
rightsmo57447stavesmo589231.setContext(context).draw();
const fmtsmo589559 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo58955v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58955v0ar = [];
const smo58924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58924.setAttribute('id', 'smo58924');
smo58955v0ar.push(smo58924);
const smo58925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58925.setAttribute('id', 'smo58925');
smo58955v0ar.push(smo58925);
const smo58926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58926.setAttribute('id', 'smo58926');
const smo589260acc = new VF.Accidental('#');
smo58926.addModifier(smo589260acc, 0);
smo58955v0ar.push(smo58926);
const smo58927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58927.setAttribute('id', 'smo58927');
smo58955v0ar.push(smo58927);
const smo58928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58928.setAttribute('id', 'smo58928');
smo58955v0ar.push(smo58928);
const smo58929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58929.setAttribute('id', 'smo58929');
smo58955v0ar.push(smo58929);
const smo58930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58930.setAttribute('id', 'smo58930');
smo58955v0ar.push(smo58930);
const smo58931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58931.setAttribute('id', 'smo58931');
smo58955v0ar.push(smo58931);
const smo58932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58932.setAttribute('id', 'smo58932');
smo58955v0ar.push(smo58932);
const smo58933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58933.setAttribute('id', 'smo58933');
smo58955v0ar.push(smo58933);
const smo58934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58934.setAttribute('id', 'smo58934');
smo58955v0ar.push(smo58934);
const smo58935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58935.setAttribute('id', 'smo58935');
smo58955v0ar.push(smo58935);
const smo58936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo58936.setAttribute('id', 'smo58936');
smo58955v0ar.push(smo58936);
const smo58937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo58937.setAttribute('id', 'smo58937');
smo58955v0ar.push(smo58937);
smo58955v0.addTickables(smo58955v0ar)
fmtsmo589559.joinVoices([smo58955v0]);
const smo58955v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58955v1ar = [];
const smo58938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58938.setAttribute('id', 'smo58938');
smo58938.setStyle({ fillStyle: '#aaaaaa7f' });
smo58955v1ar.push(smo58938);
const smo58939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58939.setAttribute('id', 'smo58939');
smo58939.setStyle({ fillStyle: '#aaaaaa7f' });
smo58939.addModifier(new VF.Dot(), 0);
smo58939.addModifier(new VF.Dot(), 0);
smo58955v1ar.push(smo58939);
const smo58940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58940.setAttribute('id', 'smo58940');
smo58940.setStyle({ fillStyle: '#aaaaaa7f' });
smo58955v1ar.push(smo58940);
const smo58941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58941.setAttribute('id', 'smo58941');
smo58941.setStyle({ fillStyle: '#aaaaaa7f' });
smo58941.addModifier(new VF.Dot(), 0);
smo58941.addModifier(new VF.Dot(), 0);
smo58955v1ar.push(smo58941);
smo58955v1.addTickables(smo58955v1ar)
fmtsmo589559.joinVoices([smo58955v1]);
const fmtsmo643109 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo64310v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64310v0ar = [];
const smo64289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["en/6/r"]}'))
smo64289.setAttribute('id', 'smo64289');
smo64310v0ar.push(smo64289);
const smo64290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64290.setAttribute('id', 'smo64290');
smo64290.addModifier(new VF.Dot(), 0);
smo64310v0ar.push(smo64290);
const smo64291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64291.setAttribute('id', 'smo64291');
smo64310v0ar.push(smo64291);
const smo64292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64292.setAttribute('id', 'smo64292');
smo64310v0ar.push(smo64292);
const smo64293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64293.setAttribute('id', 'smo64293');
smo64293.addModifier(new VF.Dot(), 0);
smo64310v0ar.push(smo64293);
const smo64294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64294.setAttribute('id', 'smo64294');
smo64310v0ar.push(smo64294);
smo64310v0.addTickables(smo64310v0ar)
fmtsmo643109.joinVoices([smo64310v0]);
const smo64310v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64310v1ar = [];
const smo64295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64295.setAttribute('id', 'smo64295');
smo64295.setStyle({ fillStyle: "#115511" });
smo64310v1ar.push(smo64295);
const smo64296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64296.setAttribute('id', 'smo64296');
smo64296.setStyle({ fillStyle: "#115511" });
smo64310v1ar.push(smo64296);
smo64310v1.addTickables(smo64310v1ar)
fmtsmo643109.joinVoices([smo64310v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68124 = smo58925.getStemDirection();
smo58925.setStemDirection(dirsmo68124);
smo58926.setStemDirection(dirsmo68124);
const smo68124 = new VF.Beam([smo58925,smo58926]);
const dirsmo68125 = smo58927.getStemDirection();
smo58927.setStemDirection(dirsmo68125);
smo58928.setStemDirection(dirsmo68125);
smo58929.setStemDirection(dirsmo68125);
smo58930.setStemDirection(dirsmo68125);
const smo68125 = new VF.Beam([smo58927,smo58928,smo58929,smo58930]);
const dirsmo68126 = smo58932.getStemDirection();
smo58932.setStemDirection(dirsmo68126);
smo58933.setStemDirection(dirsmo68126);
const smo68126 = new VF.Beam([smo58932,smo58933]);
const dirsmo68127 = smo58934.getStemDirection();
smo58934.setStemDirection(dirsmo68127);
smo58935.setStemDirection(dirsmo68127);
smo58936.setStemDirection(dirsmo68127);
smo58937.setStemDirection(dirsmo68127);
const smo68127 = new VF.Beam([smo58934,smo58935,smo58936,smo58937]);
 
// formatting measures in staff group smo57447
fmtsmo589559.format([smo58955v0,smo58955v1,smo64310v0,smo64310v1], 561);
const stavesmo58955 = new VF.Stave(90, 1191, 619);
stavesmo58955.setAttribute('id', 'stavesmo58955');
stavesmo58955.setBegBarType(1);
stavesmo58955.addClef('treble');
stavesmo58955.setContext(context);
stavesmo58955.draw();
smo58955v0.draw(context, stavesmo58955);
smo58955v1.draw(context, stavesmo58955);
smo68124.setContext(context);
smo68124.draw();
smo68125.setContext(context);
smo68125.draw();
smo68126.setContext(context);
smo68126.draw();
smo68127.setContext(context);
smo68127.draw();
const stavesmo64310 = new VF.Stave(90, 1370, 619);
stavesmo64310.setAttribute('id', 'stavesmo64310');
stavesmo64310.setBegBarType(1);
stavesmo64310.addClef('bass');
stavesmo64310.setContext(context);
stavesmo64310.draw();
smo64310v0.draw(context, stavesmo64310);
smo64310v1.draw(context, stavesmo64310);
const leftsmo57447stavesmo589551 = new VF.StaveConnector(stavesmo58955, stavesmo64310).setType(3);
leftsmo57447stavesmo589551.setContext(context).draw();
const fmtsmo5898710 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo58987v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58987v0ar = [];
const smo58956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58956.setAttribute('id', 'smo58956');
smo58987v0ar.push(smo58956);
const smo58957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58957.setAttribute('id', 'smo58957');
smo58987v0ar.push(smo58957);
const smo58958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58958.setAttribute('id', 'smo58958');
smo58987v0ar.push(smo58958);
const smo58959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo58959.setAttribute('id', 'smo58959');
smo58987v0ar.push(smo58959);
const smo58960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58960.setAttribute('id', 'smo58960');
smo58987v0ar.push(smo58960);
const smo58961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58961.setAttribute('id', 'smo58961');
smo58987v0ar.push(smo58961);
const smo58962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo58962.setAttribute('id', 'smo58962');
smo58987v0ar.push(smo58962);
const smo58963 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58963.setAttribute('id', 'smo58963');
smo58987v0ar.push(smo58963);
const smo58964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58964.setAttribute('id', 'smo58964');
smo58987v0ar.push(smo58964);
const smo58965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58965.setAttribute('id', 'smo58965');
smo58987v0ar.push(smo58965);
const smo58966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo58966.setAttribute('id', 'smo58966');
smo58987v0ar.push(smo58966);
const smo58967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo58967.setAttribute('id', 'smo58967');
smo58987v0ar.push(smo58967);
const smo58968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58968.setAttribute('id', 'smo58968');
smo58987v0ar.push(smo58968);
const smo58969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo58969.setAttribute('id', 'smo58969');
smo58987v0ar.push(smo58969);
smo58987v0.addTickables(smo58987v0ar)
fmtsmo5898710.joinVoices([smo58987v0]);
const smo58987v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo58987v1ar = [];
const smo58970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58970.setAttribute('id', 'smo58970');
smo58970.setStyle({ fillStyle: '#aaaaaa7f' });
smo58987v1ar.push(smo58970);
const smo58971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/3/r"]}'))
smo58971.setAttribute('id', 'smo58971');
smo58971.setStyle({ fillStyle: '#aaaaaa7f' });
smo58971.addModifier(new VF.Dot(), 0);
smo58971.addModifier(new VF.Dot(), 0);
smo58987v1ar.push(smo58971);
const smo58972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58972.setAttribute('id', 'smo58972');
smo58972.setStyle({ fillStyle: '#aaaaaa7f' });
smo58987v1ar.push(smo58972);
const smo58973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58973.setAttribute('id', 'smo58973');
smo58973.setStyle({ fillStyle: '#aaaaaa7f' });
smo58973.addModifier(new VF.Dot(), 0);
smo58973.addModifier(new VF.Dot(), 0);
smo58987v1ar.push(smo58973);
smo58987v1.addTickables(smo58987v1ar)
fmtsmo5898710.joinVoices([smo58987v1]);
const fmtsmo6433210 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo64332v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64332v0ar = [];
const smo64311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64311.setAttribute('id', 'smo64311');
smo64332v0ar.push(smo64311);
const smo64312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64312.setAttribute('id', 'smo64312');
smo64312.addModifier(new VF.Dot(), 0);
smo64332v0ar.push(smo64312);
const smo64313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64313.setAttribute('id', 'smo64313');
smo64332v0ar.push(smo64313);
const smo64314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64314.setAttribute('id', 'smo64314');
smo64332v0ar.push(smo64314);
const smo64315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64315.setAttribute('id', 'smo64315');
smo64315.addModifier(new VF.Dot(), 0);
smo64332v0ar.push(smo64315);
const smo64316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo64316.setAttribute('id', 'smo64316');
smo64332v0ar.push(smo64316);
smo64332v0.addTickables(smo64332v0ar)
fmtsmo6433210.joinVoices([smo64332v0]);
const smo64332v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64332v1ar = [];
const smo64317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64317.setAttribute('id', 'smo64317');
smo64317.setStyle({ fillStyle: "#115511" });
smo64332v1ar.push(smo64317);
const smo64318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64318.setAttribute('id', 'smo64318');
smo64318.setStyle({ fillStyle: "#115511" });
smo64332v1ar.push(smo64318);
smo64332v1.addTickables(smo64332v1ar)
fmtsmo6433210.joinVoices([smo64332v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68132 = smo58957.getStemDirection();
smo58957.setStemDirection(dirsmo68132);
smo58958.setStemDirection(dirsmo68132);
const smo68132 = new VF.Beam([smo58957,smo58958]);
const dirsmo68133 = smo58959.getStemDirection();
smo58959.setStemDirection(dirsmo68133);
smo58960.setStemDirection(dirsmo68133);
smo58961.setStemDirection(dirsmo68133);
smo58962.setStemDirection(dirsmo68133);
const smo68133 = new VF.Beam([smo58959,smo58960,smo58961,smo58962]);
const dirsmo68134 = smo58964.getStemDirection();
smo58964.setStemDirection(dirsmo68134);
smo58965.setStemDirection(dirsmo68134);
const smo68134 = new VF.Beam([smo58964,smo58965]);
const dirsmo68135 = smo58966.getStemDirection();
smo58966.setStemDirection(dirsmo68135);
smo58967.setStemDirection(dirsmo68135);
smo58968.setStemDirection(dirsmo68135);
smo58969.setStemDirection(dirsmo68135);
const smo68135 = new VF.Beam([smo58966,smo58967,smo58968,smo58969]);
 
// formatting measures in staff group smo57447
fmtsmo5898710.format([smo58987v0,smo58987v1,smo64332v0,smo64332v1], 510);
const stavesmo58987 = new VF.Stave(709, 1191, 524);
stavesmo58987.setAttribute('id', 'stavesmo58987');
stavesmo58987.setBegBarType(VF.Barline.type.NONE);
stavesmo58987.setContext(context);
stavesmo58987.draw();
smo58987v0.draw(context, stavesmo58987);
smo58987v1.draw(context, stavesmo58987);
smo68132.setContext(context);
smo68132.draw();
smo68133.setContext(context);
smo68133.draw();
smo68134.setContext(context);
smo68134.draw();
smo68135.setContext(context);
smo68135.draw();
const stavesmo64332 = new VF.Stave(709, 1370, 524);
stavesmo64332.setAttribute('id', 'stavesmo64332');
stavesmo64332.setBegBarType(VF.Barline.type.NONE);
stavesmo64332.setContext(context);
stavesmo64332.draw();
smo64332v0.draw(context, stavesmo64332);
smo64332v1.draw(context, stavesmo64332);
const fmtsmo5901911 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo59019v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59019v0ar = [];
const smo58988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58988.setAttribute('id', 'smo58988');
smo59019v0ar.push(smo58988);
const smo58989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58989.setAttribute('id', 'smo58989');
smo59019v0ar.push(smo58989);
const smo58990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58990.setAttribute('id', 'smo58990');
smo59019v0ar.push(smo58990);
const smo58991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo58991.setAttribute('id', 'smo58991');
const smo589910acc = new VF.Accidental('#');
smo58991.addModifier(smo589910acc, 0);
smo59019v0ar.push(smo58991);
const smo58992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58992.setAttribute('id', 'smo58992');
smo59019v0ar.push(smo58992);
const smo58993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58993.setAttribute('id', 'smo58993');
smo59019v0ar.push(smo58993);
const smo58994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo58994.setAttribute('id', 'smo58994');
smo59019v0ar.push(smo58994);
const smo58995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo58995.setAttribute('id', 'smo58995');
smo59019v0ar.push(smo58995);
const smo58996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58996.setAttribute('id', 'smo58996');
smo59019v0ar.push(smo58996);
const smo58997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo58997.setAttribute('id', 'smo58997');
smo59019v0ar.push(smo58997);
const smo58998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo58998.setAttribute('id', 'smo58998');
smo59019v0ar.push(smo58998);
const smo58999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo58999.setAttribute('id', 'smo58999');
smo59019v0ar.push(smo58999);
const smo59000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59000.setAttribute('id', 'smo59000');
smo59019v0ar.push(smo59000);
const smo59001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["c#/5/n"]}'))
smo59001.setAttribute('id', 'smo59001');
smo59019v0ar.push(smo59001);
smo59019v0.addTickables(smo59019v0ar)
fmtsmo5901911.joinVoices([smo59019v0]);
const smo59019v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59019v1ar = [];
const smo59002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59002.setAttribute('id', 'smo59002');
smo59002.setStyle({ fillStyle: '#aaaaaa7f' });
smo59019v1ar.push(smo59002);
const smo59003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59003.setAttribute('id', 'smo59003');
smo59003.setStyle({ fillStyle: '#aaaaaa7f' });
smo59003.addModifier(new VF.Dot(), 0);
smo59003.addModifier(new VF.Dot(), 0);
smo59019v1ar.push(smo59003);
const smo59004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59004.setAttribute('id', 'smo59004');
smo59004.setStyle({ fillStyle: '#aaaaaa7f' });
smo59019v1ar.push(smo59004);
const smo59005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59005.setAttribute('id', 'smo59005');
smo59005.setStyle({ fillStyle: '#aaaaaa7f' });
smo59005.addModifier(new VF.Dot(), 0);
smo59005.addModifier(new VF.Dot(), 0);
smo59019v1ar.push(smo59005);
smo59019v1.addTickables(smo59019v1ar)
fmtsmo5901911.joinVoices([smo59019v1]);
const fmtsmo6435411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo64354v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64354v0ar = [];
const smo64333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64333.setAttribute('id', 'smo64333');
smo64354v0ar.push(smo64333);
const smo64334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo64334.setAttribute('id', 'smo64334');
const smo643340acc = new VF.Accidental('#');
smo64334.addModifier(smo643340acc, 0);
smo64334.addModifier(new VF.Dot(), 0);
smo64354v0ar.push(smo64334);
const smo64335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo64335.setAttribute('id', 'smo64335');
smo64354v0ar.push(smo64335);
const smo64336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64336.setAttribute('id', 'smo64336');
smo64354v0ar.push(smo64336);
const smo64337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo64337.setAttribute('id', 'smo64337');
smo64337.addModifier(new VF.Dot(), 0);
smo64354v0ar.push(smo64337);
const smo64338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/3/n"]}'))
smo64338.setAttribute('id', 'smo64338');
smo64354v0ar.push(smo64338);
smo64354v0.addTickables(smo64354v0ar)
fmtsmo6435411.joinVoices([smo64354v0]);
const smo64354v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64354v1ar = [];
const smo64339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64339.setAttribute('id', 'smo64339');
smo64339.setStyle({ fillStyle: "#115511" });
smo64354v1ar.push(smo64339);
const smo64340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64340.setAttribute('id', 'smo64340');
smo64340.setStyle({ fillStyle: "#115511" });
smo64354v1ar.push(smo64340);
smo64354v1.addTickables(smo64354v1ar)
fmtsmo6435411.joinVoices([smo64354v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68140 = smo58989.getStemDirection();
smo58989.setStemDirection(dirsmo68140);
smo58990.setStemDirection(dirsmo68140);
const smo68140 = new VF.Beam([smo58989,smo58990]);
const dirsmo68141 = smo58991.getStemDirection();
smo58991.setStemDirection(dirsmo68141);
smo58992.setStemDirection(dirsmo68141);
smo58993.setStemDirection(dirsmo68141);
smo58994.setStemDirection(dirsmo68141);
const smo68141 = new VF.Beam([smo58991,smo58992,smo58993,smo58994]);
const dirsmo68142 = smo58996.getStemDirection();
smo58996.setStemDirection(dirsmo68142);
smo58997.setStemDirection(dirsmo68142);
const smo68142 = new VF.Beam([smo58996,smo58997]);
const dirsmo68143 = smo58998.getStemDirection();
smo58998.setStemDirection(dirsmo68143);
smo58999.setStemDirection(dirsmo68143);
smo59000.setStemDirection(dirsmo68143);
smo59001.setStemDirection(dirsmo68143);
const smo68143 = new VF.Beam([smo58998,smo58999,smo59000,smo59001]);
 
// formatting measures in staff group smo57447
fmtsmo5901911.format([smo59019v0,smo59019v1,smo64354v0,smo64354v1], 560);
const stavesmo59019 = new VF.Stave(1233, 1191, 574);
stavesmo59019.setAttribute('id', 'stavesmo59019');
stavesmo59019.setBegBarType(VF.Barline.type.NONE);
stavesmo59019.setContext(context);
stavesmo59019.draw();
smo59019v0.draw(context, stavesmo59019);
smo59019v1.draw(context, stavesmo59019);
smo68140.setContext(context);
smo68140.draw();
smo68141.setContext(context);
smo68141.draw();
smo68142.setContext(context);
smo68142.draw();
smo68143.setContext(context);
smo68143.draw();
const stavesmo64354 = new VF.Stave(1233, 1370, 574);
stavesmo64354.setAttribute('id', 'stavesmo64354');
stavesmo64354.setBegBarType(VF.Barline.type.NONE);
stavesmo64354.setContext(context);
stavesmo64354.draw();
smo64354v0.draw(context, stavesmo64354);
smo64354v1.draw(context, stavesmo64354);
const rightsmo57447stavesmo590191 = new VF.StaveConnector(stavesmo59019, stavesmo64354).setType(0);
rightsmo57447stavesmo590191.setContext(context).draw();
const fmtsmo5905112 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo59051v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59051v0ar = [];
const smo59020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59020.setAttribute('id', 'smo59020');
smo59051v0ar.push(smo59020);
const smo59021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59021.setAttribute('id', 'smo59021');
smo59051v0ar.push(smo59021);
const smo59022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59022.setAttribute('id', 'smo59022');
smo59051v0ar.push(smo59022);
const smo59023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59023.setAttribute('id', 'smo59023');
smo59051v0ar.push(smo59023);
const smo59024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59024.setAttribute('id', 'smo59024');
smo59051v0ar.push(smo59024);
const smo59025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59025.setAttribute('id', 'smo59025');
smo59051v0ar.push(smo59025);
const smo59026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59026.setAttribute('id', 'smo59026');
smo59051v0ar.push(smo59026);
const smo59027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59027.setAttribute('id', 'smo59027');
smo59051v0ar.push(smo59027);
const smo59028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59028.setAttribute('id', 'smo59028');
smo59051v0ar.push(smo59028);
const smo59029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59029.setAttribute('id', 'smo59029');
smo59051v0ar.push(smo59029);
const smo59030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59030.setAttribute('id', 'smo59030');
smo59051v0ar.push(smo59030);
const smo59031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59031.setAttribute('id', 'smo59031');
smo59051v0ar.push(smo59031);
const smo59032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo59032.setAttribute('id', 'smo59032');
smo59051v0ar.push(smo59032);
const smo59033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
smo59033.setAttribute('id', 'smo59033');
smo59051v0ar.push(smo59033);
smo59051v0.addTickables(smo59051v0ar)
fmtsmo5905112.joinVoices([smo59051v0]);
const smo59051v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59051v1ar = [];
const smo59034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59034.setAttribute('id', 'smo59034');
smo59034.setStyle({ fillStyle: '#aaaaaa7f' });
smo59051v1ar.push(smo59034);
const smo59035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59035.setAttribute('id', 'smo59035');
smo59035.setStyle({ fillStyle: '#aaaaaa7f' });
smo59035.addModifier(new VF.Dot(), 0);
smo59035.addModifier(new VF.Dot(), 0);
smo59051v1ar.push(smo59035);
const smo59036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59036.setAttribute('id', 'smo59036');
smo59036.setStyle({ fillStyle: '#aaaaaa7f' });
smo59051v1ar.push(smo59036);
const smo59037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59037.setAttribute('id', 'smo59037');
smo59037.setStyle({ fillStyle: '#aaaaaa7f' });
smo59037.addModifier(new VF.Dot(), 0);
smo59037.addModifier(new VF.Dot(), 0);
smo59051v1ar.push(smo59037);
smo59051v1.addTickables(smo59051v1ar)
fmtsmo5905112.joinVoices([smo59051v1]);
const fmtsmo6437612 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo64376v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64376v0ar = [];
const smo64355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64355.setAttribute('id', 'smo64355');
smo64376v0ar.push(smo64355);
const smo64356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64356.setAttribute('id', 'smo64356');
smo64356.addModifier(new VF.Dot(), 0);
smo64376v0ar.push(smo64356);
const smo64357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64357.setAttribute('id', 'smo64357');
smo64376v0ar.push(smo64357);
const smo64358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64358.setAttribute('id', 'smo64358');
smo64376v0ar.push(smo64358);
const smo64359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64359.setAttribute('id', 'smo64359');
smo64359.addModifier(new VF.Dot(), 0);
smo64376v0ar.push(smo64359);
const smo64360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo64360.setAttribute('id', 'smo64360');
smo64376v0ar.push(smo64360);
smo64376v0.addTickables(smo64376v0ar)
fmtsmo6437612.joinVoices([smo64376v0]);
const smo64376v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64376v1ar = [];
const smo64361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64361.setAttribute('id', 'smo64361');
smo64361.setStyle({ fillStyle: "#115511" });
smo64376v1ar.push(smo64361);
const smo64362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64362.setAttribute('id', 'smo64362');
smo64362.setStyle({ fillStyle: "#115511" });
smo64376v1ar.push(smo64362);
smo64376v1.addTickables(smo64376v1ar)
fmtsmo6437612.joinVoices([smo64376v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68156 = smo59021.getStemDirection();
smo59021.setStemDirection(dirsmo68156);
smo59022.setStemDirection(dirsmo68156);
const smo68156 = new VF.Beam([smo59021,smo59022]);
const dirsmo68157 = smo59023.getStemDirection();
smo59023.setStemDirection(dirsmo68157);
smo59024.setStemDirection(dirsmo68157);
smo59025.setStemDirection(dirsmo68157);
smo59026.setStemDirection(dirsmo68157);
const smo68157 = new VF.Beam([smo59023,smo59024,smo59025,smo59026]);
const dirsmo68158 = smo59028.getStemDirection();
smo59028.setStemDirection(dirsmo68158);
smo59029.setStemDirection(dirsmo68158);
const smo68158 = new VF.Beam([smo59028,smo59029]);
const dirsmo68159 = smo59030.getStemDirection();
smo59030.setStemDirection(dirsmo68159);
smo59031.setStemDirection(dirsmo68159);
smo59032.setStemDirection(dirsmo68159);
smo59033.setStemDirection(dirsmo68159);
const smo68159 = new VF.Beam([smo59030,smo59031,smo59032,smo59033]);
 
// formatting measures in staff group smo57447
fmtsmo5905112.format([smo59051v0,smo59051v1,smo64376v0,smo64376v1], 536);
const stavesmo59051 = new VF.Stave(90, 1494, 594);
stavesmo59051.setAttribute('id', 'stavesmo59051');
stavesmo59051.setBegBarType(1);
stavesmo59051.addClef('treble');
stavesmo59051.setContext(context);
stavesmo59051.draw();
smo59051v0.draw(context, stavesmo59051);
smo59051v1.draw(context, stavesmo59051);
smo68156.setContext(context);
smo68156.draw();
smo68157.setContext(context);
smo68157.draw();
smo68158.setContext(context);
smo68158.draw();
smo68159.setContext(context);
smo68159.draw();
const stavesmo64376 = new VF.Stave(90, 1668, 594);
stavesmo64376.setAttribute('id', 'stavesmo64376');
stavesmo64376.setBegBarType(1);
stavesmo64376.addClef('bass');
stavesmo64376.setContext(context);
stavesmo64376.draw();
smo64376v0.draw(context, stavesmo64376);
smo64376v1.draw(context, stavesmo64376);
const leftsmo57447stavesmo590511 = new VF.StaveConnector(stavesmo59051, stavesmo64376).setType(3);
leftsmo57447stavesmo590511.setContext(context).draw();
const fmtsmo5908313 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo59083v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59083v0ar = [];
const smo59052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59052.setAttribute('id', 'smo59052');
smo59083v0ar.push(smo59052);
const smo59053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59053.setAttribute('id', 'smo59053');
smo59083v0ar.push(smo59053);
const smo59054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59054.setAttribute('id', 'smo59054');
smo59083v0ar.push(smo59054);
const smo59055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59055.setAttribute('id', 'smo59055');
smo59083v0ar.push(smo59055);
const smo59056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59056.setAttribute('id', 'smo59056');
smo59083v0ar.push(smo59056);
const smo59057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59057.setAttribute('id', 'smo59057');
smo59083v0ar.push(smo59057);
const smo59058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59058.setAttribute('id', 'smo59058');
smo59083v0ar.push(smo59058);
const smo59059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59059.setAttribute('id', 'smo59059');
smo59083v0ar.push(smo59059);
const smo59060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59060.setAttribute('id', 'smo59060');
smo59083v0ar.push(smo59060);
const smo59061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59061.setAttribute('id', 'smo59061');
smo59083v0ar.push(smo59061);
const smo59062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59062.setAttribute('id', 'smo59062');
smo59083v0ar.push(smo59062);
const smo59063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo59063.setAttribute('id', 'smo59063');
smo59083v0ar.push(smo59063);
const smo59064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59064.setAttribute('id', 'smo59064');
smo59083v0ar.push(smo59064);
const smo59065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo59065.setAttribute('id', 'smo59065');
smo59083v0ar.push(smo59065);
smo59083v0.addTickables(smo59083v0ar)
fmtsmo5908313.joinVoices([smo59083v0]);
const smo59083v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59083v1ar = [];
const smo59066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59066.setAttribute('id', 'smo59066');
smo59066.setStyle({ fillStyle: '#aaaaaa7f' });
smo59083v1ar.push(smo59066);
const smo59067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59067.setAttribute('id', 'smo59067');
smo59067.setStyle({ fillStyle: '#aaaaaa7f' });
smo59067.addModifier(new VF.Dot(), 0);
smo59067.addModifier(new VF.Dot(), 0);
smo59083v1ar.push(smo59067);
const smo59068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59068.setAttribute('id', 'smo59068');
smo59068.setStyle({ fillStyle: '#aaaaaa7f' });
smo59083v1ar.push(smo59068);
const smo59069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59069.setAttribute('id', 'smo59069');
smo59069.setStyle({ fillStyle: '#aaaaaa7f' });
smo59069.addModifier(new VF.Dot(), 0);
smo59069.addModifier(new VF.Dot(), 0);
smo59083v1ar.push(smo59069);
smo59083v1.addTickables(smo59083v1ar)
fmtsmo5908313.joinVoices([smo59083v1]);
const fmtsmo6439813 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo64398v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64398v0ar = [];
const smo64377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64377.setAttribute('id', 'smo64377');
smo64398v0ar.push(smo64377);
const smo64378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo64378.setAttribute('id', 'smo64378');
const smo643780acc = new VF.Accidental('#');
smo64378.addModifier(smo643780acc, 0);
smo64378.addModifier(new VF.Dot(), 0);
smo64398v0ar.push(smo64378);
const smo64379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo64379.setAttribute('id', 'smo64379');
smo64398v0ar.push(smo64379);
const smo64380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64380.setAttribute('id', 'smo64380');
smo64398v0ar.push(smo64380);
const smo64381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo64381.setAttribute('id', 'smo64381');
smo64381.addModifier(new VF.Dot(), 0);
smo64398v0ar.push(smo64381);
const smo64382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/3/n"]}'))
smo64382.setAttribute('id', 'smo64382');
smo64398v0ar.push(smo64382);
smo64398v0.addTickables(smo64398v0ar)
fmtsmo6439813.joinVoices([smo64398v0]);
const smo64398v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64398v1ar = [];
const smo64383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64383.setAttribute('id', 'smo64383');
smo64383.setStyle({ fillStyle: "#115511" });
smo64398v1ar.push(smo64383);
const smo64384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64384.setAttribute('id', 'smo64384');
smo64384.setStyle({ fillStyle: "#115511" });
smo64398v1ar.push(smo64384);
smo64398v1.addTickables(smo64398v1ar)
fmtsmo6439813.joinVoices([smo64398v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68164 = smo59053.getStemDirection();
smo59053.setStemDirection(dirsmo68164);
smo59054.setStemDirection(dirsmo68164);
const smo68164 = new VF.Beam([smo59053,smo59054]);
const dirsmo68165 = smo59055.getStemDirection();
smo59055.setStemDirection(dirsmo68165);
smo59056.setStemDirection(dirsmo68165);
smo59057.setStemDirection(dirsmo68165);
smo59058.setStemDirection(dirsmo68165);
const smo68165 = new VF.Beam([smo59055,smo59056,smo59057,smo59058]);
const dirsmo68166 = smo59060.getStemDirection();
smo59060.setStemDirection(dirsmo68166);
smo59061.setStemDirection(dirsmo68166);
const smo68166 = new VF.Beam([smo59060,smo59061]);
const dirsmo68167 = smo59062.getStemDirection();
smo59062.setStemDirection(dirsmo68167);
smo59063.setStemDirection(dirsmo68167);
smo59064.setStemDirection(dirsmo68167);
smo59065.setStemDirection(dirsmo68167);
const smo68167 = new VF.Beam([smo59062,smo59063,smo59064,smo59065]);
 
// formatting measures in staff group smo57447
fmtsmo5908313.format([smo59083v0,smo59083v1,smo64398v0,smo64398v1], 560);
const stavesmo59083 = new VF.Stave(684, 1494, 574);
stavesmo59083.setAttribute('id', 'stavesmo59083');
stavesmo59083.setBegBarType(VF.Barline.type.NONE);
stavesmo59083.setContext(context);
stavesmo59083.draw();
smo59083v0.draw(context, stavesmo59083);
smo59083v1.draw(context, stavesmo59083);
smo68164.setContext(context);
smo68164.draw();
smo68165.setContext(context);
smo68165.draw();
smo68166.setContext(context);
smo68166.draw();
smo68167.setContext(context);
smo68167.draw();
const stavesmo64398 = new VF.Stave(684, 1668, 574);
stavesmo64398.setAttribute('id', 'stavesmo64398');
stavesmo64398.setBegBarType(VF.Barline.type.NONE);
stavesmo64398.setContext(context);
stavesmo64398.draw();
smo64398v0.draw(context, stavesmo64398);
smo64398v1.draw(context, stavesmo64398);
const fmtsmo5911514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo59115v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59115v0ar = [];
const smo59084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59084.setAttribute('id', 'smo59084');
smo59115v0ar.push(smo59084);
const smo59085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59085.setAttribute('id', 'smo59085');
smo59115v0ar.push(smo59085);
const smo59086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59086.setAttribute('id', 'smo59086');
smo59115v0ar.push(smo59086);
const smo59087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59087.setAttribute('id', 'smo59087');
smo59115v0ar.push(smo59087);
const smo59088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59088.setAttribute('id', 'smo59088');
smo59115v0ar.push(smo59088);
const smo59089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59089.setAttribute('id', 'smo59089');
smo59115v0ar.push(smo59089);
const smo59090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59090.setAttribute('id', 'smo59090');
smo59115v0ar.push(smo59090);
const smo59091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59091.setAttribute('id', 'smo59091');
smo59115v0ar.push(smo59091);
const smo59092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59092.setAttribute('id', 'smo59092');
smo59115v0ar.push(smo59092);
const smo59093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59093.setAttribute('id', 'smo59093');
smo59115v0ar.push(smo59093);
const smo59094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59094.setAttribute('id', 'smo59094');
smo59115v0ar.push(smo59094);
const smo59095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59095.setAttribute('id', 'smo59095');
smo59115v0ar.push(smo59095);
const smo59096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo59096.setAttribute('id', 'smo59096');
smo59115v0ar.push(smo59096);
const smo59097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo59097.setAttribute('id', 'smo59097');
smo59115v0ar.push(smo59097);
smo59115v0.addTickables(smo59115v0ar)
fmtsmo5911514.joinVoices([smo59115v0]);
const smo59115v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59115v1ar = [];
const smo59098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59098.setAttribute('id', 'smo59098');
smo59098.setStyle({ fillStyle: '#aaaaaa7f' });
smo59115v1ar.push(smo59098);
const smo59099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59099.setAttribute('id', 'smo59099');
smo59099.setStyle({ fillStyle: '#aaaaaa7f' });
smo59099.addModifier(new VF.Dot(), 0);
smo59099.addModifier(new VF.Dot(), 0);
smo59115v1ar.push(smo59099);
const smo59100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59100.setAttribute('id', 'smo59100');
smo59100.setStyle({ fillStyle: '#aaaaaa7f' });
smo59115v1ar.push(smo59100);
const smo59101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59101.setAttribute('id', 'smo59101');
smo59101.setStyle({ fillStyle: '#aaaaaa7f' });
smo59101.addModifier(new VF.Dot(), 0);
smo59101.addModifier(new VF.Dot(), 0);
smo59115v1ar.push(smo59101);
smo59115v1.addTickables(smo59115v1ar)
fmtsmo5911514.joinVoices([smo59115v1]);
const fmtsmo6442014 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo64420v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64420v0ar = [];
const smo64399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64399.setAttribute('id', 'smo64399');
smo64420v0ar.push(smo64399);
const smo64400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64400.setAttribute('id', 'smo64400');
smo64400.addModifier(new VF.Dot(), 0);
smo64420v0ar.push(smo64400);
const smo64401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64401.setAttribute('id', 'smo64401');
smo64420v0ar.push(smo64401);
const smo64402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/6/r"]}'))
smo64402.setAttribute('id', 'smo64402');
smo64420v0ar.push(smo64402);
const smo64403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64403.setAttribute('id', 'smo64403');
smo64403.addModifier(new VF.Dot(), 0);
smo64420v0ar.push(smo64403);
const smo64404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64404.setAttribute('id', 'smo64404');
smo64420v0ar.push(smo64404);
smo64420v0.addTickables(smo64420v0ar)
fmtsmo6442014.joinVoices([smo64420v0]);
const smo64420v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64420v1ar = [];
const smo64405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64405.setAttribute('id', 'smo64405');
smo64405.setStyle({ fillStyle: "#115511" });
smo64420v1ar.push(smo64405);
const smo64406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64406.setAttribute('id', 'smo64406');
smo64406.setStyle({ fillStyle: "#115511" });
smo64420v1ar.push(smo64406);
smo64420v1.addTickables(smo64420v1ar)
fmtsmo6442014.joinVoices([smo64420v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68172 = smo59085.getStemDirection();
smo59085.setStemDirection(dirsmo68172);
smo59086.setStemDirection(dirsmo68172);
const smo68172 = new VF.Beam([smo59085,smo59086]);
const dirsmo68173 = smo59087.getStemDirection();
smo59087.setStemDirection(dirsmo68173);
smo59088.setStemDirection(dirsmo68173);
smo59089.setStemDirection(dirsmo68173);
smo59090.setStemDirection(dirsmo68173);
const smo68173 = new VF.Beam([smo59087,smo59088,smo59089,smo59090]);
const dirsmo68174 = smo59092.getStemDirection();
smo59092.setStemDirection(dirsmo68174);
smo59093.setStemDirection(dirsmo68174);
const smo68174 = new VF.Beam([smo59092,smo59093]);
const dirsmo68175 = smo59094.getStemDirection();
smo59094.setStemDirection(dirsmo68175);
smo59095.setStemDirection(dirsmo68175);
smo59096.setStemDirection(dirsmo68175);
smo59097.setStemDirection(dirsmo68175);
const smo68175 = new VF.Beam([smo59094,smo59095,smo59096,smo59097]);
 
// formatting measures in staff group smo57447
fmtsmo5911514.format([smo59115v0,smo59115v1,smo64420v0,smo64420v1], 535);
const stavesmo59115 = new VF.Stave(1258, 1494, 549);
stavesmo59115.setAttribute('id', 'stavesmo59115');
stavesmo59115.setBegBarType(VF.Barline.type.NONE);
stavesmo59115.setContext(context);
stavesmo59115.draw();
smo59115v0.draw(context, stavesmo59115);
smo59115v1.draw(context, stavesmo59115);
smo68172.setContext(context);
smo68172.draw();
smo68173.setContext(context);
smo68173.draw();
smo68174.setContext(context);
smo68174.draw();
smo68175.setContext(context);
smo68175.draw();
const stavesmo64420 = new VF.Stave(1258, 1668, 549);
stavesmo64420.setAttribute('id', 'stavesmo64420');
stavesmo64420.setBegBarType(VF.Barline.type.NONE);
stavesmo64420.setContext(context);
stavesmo64420.draw();
smo64420v0.draw(context, stavesmo64420);
smo64420v1.draw(context, stavesmo64420);
const rightsmo57447stavesmo591151 = new VF.StaveConnector(stavesmo59115, stavesmo64420).setType(0);
rightsmo57447stavesmo591151.setContext(context).draw();
const fmtsmo5914715 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo59147v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59147v0ar = [];
const smo59116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59116.setAttribute('id', 'smo59116');
smo59147v0ar.push(smo59116);
const smo59117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59117.setAttribute('id', 'smo59117');
smo59147v0ar.push(smo59117);
const smo59118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59118.setAttribute('id', 'smo59118');
smo59147v0ar.push(smo59118);
const smo59119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59119.setAttribute('id', 'smo59119');
smo59147v0ar.push(smo59119);
const smo59120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59120.setAttribute('id', 'smo59120');
smo59147v0ar.push(smo59120);
const smo59121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59121.setAttribute('id', 'smo59121');
smo59147v0ar.push(smo59121);
const smo59122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59122.setAttribute('id', 'smo59122');
smo59147v0ar.push(smo59122);
const smo59123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59123.setAttribute('id', 'smo59123');
smo59147v0ar.push(smo59123);
const smo59124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59124.setAttribute('id', 'smo59124');
smo59147v0ar.push(smo59124);
const smo59125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59125.setAttribute('id', 'smo59125');
smo59147v0ar.push(smo59125);
const smo59126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59126.setAttribute('id', 'smo59126');
smo59147v0ar.push(smo59126);
const smo59127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59127.setAttribute('id', 'smo59127');
smo59147v0ar.push(smo59127);
const smo59128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59128.setAttribute('id', 'smo59128');
smo59147v0ar.push(smo59128);
const smo59129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59129.setAttribute('id', 'smo59129');
smo59147v0ar.push(smo59129);
smo59147v0.addTickables(smo59147v0ar)
fmtsmo5914715.joinVoices([smo59147v0]);
const smo59147v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59147v1ar = [];
const smo59130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59130.setAttribute('id', 'smo59130');
smo59130.setStyle({ fillStyle: '#aaaaaa7f' });
smo59147v1ar.push(smo59130);
const smo59131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59131.setAttribute('id', 'smo59131');
smo59131.setStyle({ fillStyle: '#aaaaaa7f' });
smo59131.addModifier(new VF.Dot(), 0);
smo59131.addModifier(new VF.Dot(), 0);
smo59147v1ar.push(smo59131);
const smo59132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59132.setAttribute('id', 'smo59132');
smo59132.setStyle({ fillStyle: '#aaaaaa7f' });
smo59147v1ar.push(smo59132);
const smo59133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59133.setAttribute('id', 'smo59133');
smo59133.setStyle({ fillStyle: '#aaaaaa7f' });
smo59133.addModifier(new VF.Dot(), 0);
smo59133.addModifier(new VF.Dot(), 0);
smo59147v1ar.push(smo59133);
smo59147v1.addTickables(smo59147v1ar)
fmtsmo5914715.joinVoices([smo59147v1]);
const fmtsmo6444215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo64442v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64442v0ar = [];
const smo64421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64421.setAttribute('id', 'smo64421');
smo64442v0ar.push(smo64421);
const smo64422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64422.setAttribute('id', 'smo64422');
smo64422.addModifier(new VF.Dot(), 0);
smo64442v0ar.push(smo64422);
const smo64423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64423.setAttribute('id', 'smo64423');
smo64442v0ar.push(smo64423);
const smo64424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64424.setAttribute('id', 'smo64424');
smo64442v0ar.push(smo64424);
const smo64425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64425.setAttribute('id', 'smo64425');
smo64425.addModifier(new VF.Dot(), 0);
smo64442v0ar.push(smo64425);
const smo64426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64426.setAttribute('id', 'smo64426');
smo64442v0ar.push(smo64426);
smo64442v0.addTickables(smo64442v0ar)
fmtsmo6444215.joinVoices([smo64442v0]);
const smo64442v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64442v1ar = [];
const smo64427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64427.setAttribute('id', 'smo64427');
smo64427.setStyle({ fillStyle: "#115511" });
smo64442v1ar.push(smo64427);
const smo64428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/3/n"]}'))
smo64428.setAttribute('id', 'smo64428');
smo64428.setStyle({ fillStyle: "#115511" });
smo64442v1ar.push(smo64428);
smo64442v1.addTickables(smo64442v1ar)
fmtsmo6444215.joinVoices([smo64442v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68188 = smo59117.getStemDirection();
smo59117.setStemDirection(dirsmo68188);
smo59118.setStemDirection(dirsmo68188);
const smo68188 = new VF.Beam([smo59117,smo59118]);
const dirsmo68189 = smo59119.getStemDirection();
smo59119.setStemDirection(dirsmo68189);
smo59120.setStemDirection(dirsmo68189);
smo59121.setStemDirection(dirsmo68189);
smo59122.setStemDirection(dirsmo68189);
const smo68189 = new VF.Beam([smo59119,smo59120,smo59121,smo59122]);
const dirsmo68190 = smo59124.getStemDirection();
smo59124.setStemDirection(dirsmo68190);
smo59125.setStemDirection(dirsmo68190);
const smo68190 = new VF.Beam([smo59124,smo59125]);
const dirsmo68191 = smo59126.getStemDirection();
smo59126.setStemDirection(dirsmo68191);
smo59127.setStemDirection(dirsmo68191);
smo59128.setStemDirection(dirsmo68191);
smo59129.setStemDirection(dirsmo68191);
const smo68191 = new VF.Beam([smo59126,smo59127,smo59128,smo59129]);
 
// formatting measures in staff group smo57447
fmtsmo5914715.format([smo59147v0,smo59147v1,smo64442v0,smo64442v1], 544);
const stavesmo59147 = new VF.Stave(90, 1778, 602);
stavesmo59147.setAttribute('id', 'stavesmo59147');
stavesmo59147.setBegBarType(1);
stavesmo59147.addClef('treble');
stavesmo59147.setContext(context);
stavesmo59147.draw();
smo59147v0.draw(context, stavesmo59147);
smo59147v1.draw(context, stavesmo59147);
smo68188.setContext(context);
smo68188.draw();
smo68189.setContext(context);
smo68189.draw();
smo68190.setContext(context);
smo68190.draw();
smo68191.setContext(context);
smo68191.draw();
const stavesmo64442 = new VF.Stave(90, 1862, 602);
stavesmo64442.setAttribute('id', 'stavesmo64442');
stavesmo64442.setBegBarType(1);
stavesmo64442.addClef('treble');
stavesmo64442.setContext(context);
stavesmo64442.draw();
smo64442v0.draw(context, stavesmo64442);
smo64442v1.draw(context, stavesmo64442);
const leftsmo57447stavesmo591471 = new VF.StaveConnector(stavesmo59147, stavesmo64442).setType(3);
leftsmo57447stavesmo591471.setContext(context).draw();
const fmtsmo5917916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo59179v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59179v0ar = [];
const smo59148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59148.setAttribute('id', 'smo59148');
smo59179v0ar.push(smo59148);
const smo59149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59149.setAttribute('id', 'smo59149');
smo59179v0ar.push(smo59149);
const smo59150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59150.setAttribute('id', 'smo59150');
smo59179v0ar.push(smo59150);
const smo59151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59151.setAttribute('id', 'smo59151');
smo59179v0ar.push(smo59151);
const smo59152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59152.setAttribute('id', 'smo59152');
smo59179v0ar.push(smo59152);
const smo59153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59153.setAttribute('id', 'smo59153');
smo59179v0ar.push(smo59153);
const smo59154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59154.setAttribute('id', 'smo59154');
smo59179v0ar.push(smo59154);
const smo59155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59155.setAttribute('id', 'smo59155');
smo59179v0ar.push(smo59155);
const smo59156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59156.setAttribute('id', 'smo59156');
smo59179v0ar.push(smo59156);
const smo59157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59157.setAttribute('id', 'smo59157');
smo59179v0ar.push(smo59157);
const smo59158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59158.setAttribute('id', 'smo59158');
smo59179v0ar.push(smo59158);
const smo59159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59159.setAttribute('id', 'smo59159');
smo59179v0ar.push(smo59159);
const smo59160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59160.setAttribute('id', 'smo59160');
smo59179v0ar.push(smo59160);
const smo59161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59161.setAttribute('id', 'smo59161');
smo59179v0ar.push(smo59161);
smo59179v0.addTickables(smo59179v0ar)
fmtsmo5917916.joinVoices([smo59179v0]);
const smo59179v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59179v1ar = [];
const smo59162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59162.setAttribute('id', 'smo59162');
smo59162.setStyle({ fillStyle: '#aaaaaa7f' });
smo59179v1ar.push(smo59162);
const smo59163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59163.setAttribute('id', 'smo59163');
smo59163.setStyle({ fillStyle: '#aaaaaa7f' });
smo59163.addModifier(new VF.Dot(), 0);
smo59163.addModifier(new VF.Dot(), 0);
smo59179v1ar.push(smo59163);
const smo59164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59164.setAttribute('id', 'smo59164');
smo59164.setStyle({ fillStyle: '#aaaaaa7f' });
smo59179v1ar.push(smo59164);
const smo59165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59165.setAttribute('id', 'smo59165');
smo59165.setStyle({ fillStyle: '#aaaaaa7f' });
smo59165.addModifier(new VF.Dot(), 0);
smo59165.addModifier(new VF.Dot(), 0);
smo59179v1ar.push(smo59165);
smo59179v1.addTickables(smo59179v1ar)
fmtsmo5917916.joinVoices([smo59179v1]);
const fmtsmo6446416 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo64464v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64464v0ar = [];
const smo64443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64443.setAttribute('id', 'smo64443');
smo64464v0ar.push(smo64443);
const smo64444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64444.setAttribute('id', 'smo64444');
smo64444.addModifier(new VF.Dot(), 0);
smo64464v0ar.push(smo64444);
const smo64445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64445.setAttribute('id', 'smo64445');
smo64464v0ar.push(smo64445);
const smo64446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64446.setAttribute('id', 'smo64446');
smo64464v0ar.push(smo64446);
const smo64447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64447.setAttribute('id', 'smo64447');
smo64447.addModifier(new VF.Dot(), 0);
smo64464v0ar.push(smo64447);
const smo64448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64448.setAttribute('id', 'smo64448');
smo64464v0ar.push(smo64448);
smo64464v0.addTickables(smo64464v0ar)
fmtsmo6446416.joinVoices([smo64464v0]);
const smo64464v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64464v1ar = [];
const smo64449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64449.setAttribute('id', 'smo64449');
smo64449.setStyle({ fillStyle: "#115511" });
smo64464v1ar.push(smo64449);
const smo64450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64450.setAttribute('id', 'smo64450');
smo64450.setStyle({ fillStyle: "#115511" });
smo64464v1ar.push(smo64450);
smo64464v1.addTickables(smo64464v1ar)
fmtsmo6446416.joinVoices([smo64464v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68196 = smo59149.getStemDirection();
smo59149.setStemDirection(dirsmo68196);
smo59150.setStemDirection(dirsmo68196);
const smo68196 = new VF.Beam([smo59149,smo59150]);
const dirsmo68197 = smo59151.getStemDirection();
smo59151.setStemDirection(dirsmo68197);
smo59152.setStemDirection(dirsmo68197);
smo59153.setStemDirection(dirsmo68197);
smo59154.setStemDirection(dirsmo68197);
const smo68197 = new VF.Beam([smo59151,smo59152,smo59153,smo59154]);
const dirsmo68198 = smo59156.getStemDirection();
smo59156.setStemDirection(dirsmo68198);
smo59157.setStemDirection(dirsmo68198);
const smo68198 = new VF.Beam([smo59156,smo59157]);
const dirsmo68199 = smo59158.getStemDirection();
smo59158.setStemDirection(dirsmo68199);
smo59159.setStemDirection(dirsmo68199);
smo59160.setStemDirection(dirsmo68199);
smo59161.setStemDirection(dirsmo68199);
const smo68199 = new VF.Beam([smo59158,smo59159,smo59160,smo59161]);
 
// formatting measures in staff group smo57447
fmtsmo5917916.format([smo59179v0,smo59179v1,smo64464v0,smo64464v1], 544);
const stavesmo59179 = new VF.Stave(692, 1778, 558);
stavesmo59179.setAttribute('id', 'stavesmo59179');
stavesmo59179.setBegBarType(VF.Barline.type.NONE);
stavesmo59179.setContext(context);
stavesmo59179.draw();
smo59179v0.draw(context, stavesmo59179);
smo59179v1.draw(context, stavesmo59179);
smo68196.setContext(context);
smo68196.draw();
smo68197.setContext(context);
smo68197.draw();
smo68198.setContext(context);
smo68198.draw();
smo68199.setContext(context);
smo68199.draw();
const stavesmo64464 = new VF.Stave(692, 1862, 558);
stavesmo64464.setAttribute('id', 'stavesmo64464');
stavesmo64464.setBegBarType(VF.Barline.type.NONE);
stavesmo64464.setContext(context);
stavesmo64464.draw();
smo64464v0.draw(context, stavesmo64464);
smo64464v1.draw(context, stavesmo64464);
const fmtsmo5921117 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo59211v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59211v0ar = [];
const smo59180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59180.setAttribute('id', 'smo59180');
smo59211v0ar.push(smo59180);
const smo59181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59181.setAttribute('id', 'smo59181');
smo59211v0ar.push(smo59181);
const smo59182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stemDirection":1,"autoStem":false,"keys":["bn/4/r"]}'))
smo59182.setAttribute('id', 'smo59182');
smo59211v0ar.push(smo59182);
const smo59183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59183.setAttribute('id', 'smo59183');
smo59211v0ar.push(smo59183);
const smo59184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59184.setAttribute('id', 'smo59184');
smo59211v0ar.push(smo59184);
const smo59185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59185.setAttribute('id', 'smo59185');
smo59211v0ar.push(smo59185);
const smo59186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59186.setAttribute('id', 'smo59186');
smo59211v0ar.push(smo59186);
const smo59187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59187.setAttribute('id', 'smo59187');
smo59211v0ar.push(smo59187);
const smo59188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59188.setAttribute('id', 'smo59188');
smo59211v0ar.push(smo59188);
const smo59189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59189.setAttribute('id', 'smo59189');
smo59211v0ar.push(smo59189);
const smo59190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59190.setAttribute('id', 'smo59190');
smo59211v0ar.push(smo59190);
const smo59191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59191.setAttribute('id', 'smo59191');
smo59211v0ar.push(smo59191);
const smo59192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/3/n"]}'))
smo59192.setAttribute('id', 'smo59192');
smo59211v0ar.push(smo59192);
const smo59193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/4/n"]}'))
smo59193.setAttribute('id', 'smo59193');
smo59211v0ar.push(smo59193);
smo59211v0.addTickables(smo59211v0ar)
fmtsmo5921117.joinVoices([smo59211v0]);
const smo59211v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59211v1ar = [];
const smo59194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59194.setAttribute('id', 'smo59194');
smo59194.setStyle({ fillStyle: '#aaaaaa7f' });
smo59211v1ar.push(smo59194);
const smo59195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59195.setAttribute('id', 'smo59195');
smo59195.setStyle({ fillStyle: '#aaaaaa7f' });
smo59195.addModifier(new VF.Dot(), 0);
smo59195.addModifier(new VF.Dot(), 0);
smo59211v1ar.push(smo59195);
const smo59196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59196.setAttribute('id', 'smo59196');
smo59196.setStyle({ fillStyle: '#aaaaaa7f' });
smo59211v1ar.push(smo59196);
const smo59197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59197.setAttribute('id', 'smo59197');
smo59197.setStyle({ fillStyle: '#aaaaaa7f' });
smo59197.addModifier(new VF.Dot(), 0);
smo59197.addModifier(new VF.Dot(), 0);
smo59211v1ar.push(smo59197);
smo59211v1.addTickables(smo59211v1ar)
fmtsmo5921117.joinVoices([smo59211v1]);
const fmtsmo6448617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo64486v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64486v0ar = [];
const smo64465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64465.setAttribute('id', 'smo64465');
smo64486v0ar.push(smo64465);
const smo64466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64466.setAttribute('id', 'smo64466');
smo64466.addModifier(new VF.Dot(), 0);
smo64486v0ar.push(smo64466);
const smo64467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64467.setAttribute('id', 'smo64467');
smo64486v0ar.push(smo64467);
const smo64468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64468.setAttribute('id', 'smo64468');
smo64486v0ar.push(smo64468);
const smo64469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64469.setAttribute('id', 'smo64469');
smo64469.addModifier(new VF.Dot(), 0);
smo64486v0ar.push(smo64469);
const smo64470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo64470.setAttribute('id', 'smo64470');
smo64486v0ar.push(smo64470);
smo64486v0.addTickables(smo64486v0ar)
fmtsmo6448617.joinVoices([smo64486v0]);
const smo64486v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64486v1ar = [];
const smo64471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64471.setAttribute('id', 'smo64471');
smo64471.setStyle({ fillStyle: "#115511" });
smo64486v1ar.push(smo64471);
const smo64472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo64472.setAttribute('id', 'smo64472');
smo64472.setStyle({ fillStyle: "#115511" });
smo64486v1ar.push(smo64472);
smo64486v1.addTickables(smo64486v1ar)
fmtsmo6448617.joinVoices([smo64486v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68204 = smo59183.getStemDirection();
smo59183.setStemDirection(dirsmo68204);
smo59184.setStemDirection(dirsmo68204);
smo59185.setStemDirection(dirsmo68204);
smo59186.setStemDirection(dirsmo68204);
const smo68204 = new VF.Beam([smo59183,smo59184,smo59185,smo59186]);
const dirsmo68205 = smo59188.getStemDirection();
smo59188.setStemDirection(dirsmo68205);
smo59189.setStemDirection(dirsmo68205);
const smo68205 = new VF.Beam([smo59188,smo59189]);
const dirsmo68206 = smo59190.getStemDirection();
smo59190.setStemDirection(dirsmo68206);
smo59191.setStemDirection(dirsmo68206);
smo59192.setStemDirection(dirsmo68206);
smo59193.setStemDirection(dirsmo68206);
const smo68206 = new VF.Beam([smo59190,smo59191,smo59192,smo59193]);
 
// formatting measures in staff group smo57447
fmtsmo5921117.format([smo59211v0,smo59211v1,smo64486v0,smo64486v1], 544);
const stavesmo59211 = new VF.Stave(1250, 1778, 558);
stavesmo59211.setAttribute('id', 'stavesmo59211');
stavesmo59211.setBegBarType(VF.Barline.type.NONE);
stavesmo59211.setContext(context);
stavesmo59211.draw();
smo59211v0.draw(context, stavesmo59211);
smo59211v1.draw(context, stavesmo59211);
smo68204.setContext(context);
smo68204.draw();
smo68205.setContext(context);
smo68205.draw();
smo68206.setContext(context);
smo68206.draw();
const stavesmo64486 = new VF.Stave(1250, 1862, 558);
stavesmo64486.setAttribute('id', 'stavesmo64486');
stavesmo64486.setBegBarType(VF.Barline.type.NONE);
stavesmo64486.setContext(context);
stavesmo64486.draw();
smo64486v0.draw(context, stavesmo64486);
smo64486v1.draw(context, stavesmo64486);
const rightsmo57447stavesmo592111 = new VF.StaveConnector(stavesmo59211, stavesmo64486).setType(0);
rightsmo57447stavesmo592111.setContext(context).draw();
const fmtsmo5924318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo59243v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59243v0ar = [];
const smo59212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59212.setAttribute('id', 'smo59212');
smo59243v0ar.push(smo59212);
const smo59213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59213.setAttribute('id', 'smo59213');
smo59243v0ar.push(smo59213);
const smo59214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59214.setAttribute('id', 'smo59214');
smo59243v0ar.push(smo59214);
const smo59215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59215.setAttribute('id', 'smo59215');
smo59243v0ar.push(smo59215);
const smo59216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59216.setAttribute('id', 'smo59216');
smo59243v0ar.push(smo59216);
const smo59217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59217.setAttribute('id', 'smo59217');
smo59243v0ar.push(smo59217);
const smo59218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59218.setAttribute('id', 'smo59218');
smo59243v0ar.push(smo59218);
const smo59219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59219.setAttribute('id', 'smo59219');
smo59243v0ar.push(smo59219);
const smo59220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59220.setAttribute('id', 'smo59220');
smo59243v0ar.push(smo59220);
const smo59221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59221.setAttribute('id', 'smo59221');
smo59243v0ar.push(smo59221);
const smo59222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59222.setAttribute('id', 'smo59222');
smo59243v0ar.push(smo59222);
const smo59223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo59223.setAttribute('id', 'smo59223');
smo59243v0ar.push(smo59223);
const smo59224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59224.setAttribute('id', 'smo59224');
smo59243v0ar.push(smo59224);
const smo59225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59225.setAttribute('id', 'smo59225');
smo59243v0ar.push(smo59225);
smo59243v0.addTickables(smo59243v0ar)
fmtsmo5924318.joinVoices([smo59243v0]);
const smo59243v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59243v1ar = [];
const smo59226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59226.setAttribute('id', 'smo59226');
smo59226.setStyle({ fillStyle: '#aaaaaa7f' });
smo59243v1ar.push(smo59226);
const smo59227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59227.setAttribute('id', 'smo59227');
smo59227.setStyle({ fillStyle: '#aaaaaa7f' });
smo59227.addModifier(new VF.Dot(), 0);
smo59227.addModifier(new VF.Dot(), 0);
smo59243v1ar.push(smo59227);
const smo59228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59228.setAttribute('id', 'smo59228');
smo59228.setStyle({ fillStyle: '#aaaaaa7f' });
smo59243v1ar.push(smo59228);
const smo59229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59229.setAttribute('id', 'smo59229');
smo59229.setStyle({ fillStyle: '#aaaaaa7f' });
smo59229.addModifier(new VF.Dot(), 0);
smo59229.addModifier(new VF.Dot(), 0);
smo59243v1ar.push(smo59229);
smo59243v1.addTickables(smo59243v1ar)
fmtsmo5924318.joinVoices([smo59243v1]);
const fmtsmo6450818 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo64508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64508v0ar = [];
const smo64487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64487.setAttribute('id', 'smo64487');
smo64508v0ar.push(smo64487);
const smo64488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64488.setAttribute('id', 'smo64488');
smo64488.addModifier(new VF.Dot(), 0);
smo64508v0ar.push(smo64488);
const smo64489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64489.setAttribute('id', 'smo64489');
smo64508v0ar.push(smo64489);
const smo64490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64490.setAttribute('id', 'smo64490');
smo64508v0ar.push(smo64490);
const smo64491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64491.setAttribute('id', 'smo64491');
smo64491.addModifier(new VF.Dot(), 0);
smo64508v0ar.push(smo64491);
const smo64492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/3/n"]}'))
smo64492.setAttribute('id', 'smo64492');
smo64508v0ar.push(smo64492);
smo64508v0.addTickables(smo64508v0ar)
fmtsmo6450818.joinVoices([smo64508v0]);
const smo64508v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64508v1ar = [];
const smo64493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64493.setAttribute('id', 'smo64493');
smo64493.setStyle({ fillStyle: "#115511" });
smo64508v1ar.push(smo64493);
const smo64494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64494.setAttribute('id', 'smo64494');
smo64494.setStyle({ fillStyle: "#115511" });
smo64508v1ar.push(smo64494);
smo64508v1.addTickables(smo64508v1ar)
fmtsmo6450818.joinVoices([smo64508v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68219 = smo59213.getStemDirection();
smo59213.setStemDirection(dirsmo68219);
smo59214.setStemDirection(dirsmo68219);
const smo68219 = new VF.Beam([smo59213,smo59214]);
const dirsmo68220 = smo59215.getStemDirection();
smo59215.setStemDirection(dirsmo68220);
smo59216.setStemDirection(dirsmo68220);
smo59217.setStemDirection(dirsmo68220);
smo59218.setStemDirection(dirsmo68220);
const smo68220 = new VF.Beam([smo59215,smo59216,smo59217,smo59218]);
const dirsmo68221 = smo59220.getStemDirection();
smo59220.setStemDirection(dirsmo68221);
smo59221.setStemDirection(dirsmo68221);
const smo68221 = new VF.Beam([smo59220,smo59221]);
const dirsmo68222 = smo59222.getStemDirection();
smo59222.setStemDirection(dirsmo68222);
smo59223.setStemDirection(dirsmo68222);
smo59224.setStemDirection(dirsmo68222);
smo59225.setStemDirection(dirsmo68222);
const smo68222 = new VF.Beam([smo59222,smo59223,smo59224,smo59225]);
 
// formatting measures in staff group smo57447
fmtsmo5924318.format([smo59243v0,smo59243v1,smo64508v0,smo64508v1], 529);
const stavesmo59243 = new VF.Stave(90, 2049, 587);
stavesmo59243.setAttribute('id', 'stavesmo59243');
stavesmo59243.setBegBarType(1);
stavesmo59243.addClef('treble');
stavesmo59243.setContext(context);
stavesmo59243.draw();
smo59243v0.draw(context, stavesmo59243);
smo59243v1.draw(context, stavesmo59243);
smo68219.setContext(context);
smo68219.draw();
smo68220.setContext(context);
smo68220.draw();
smo68221.setContext(context);
smo68221.draw();
smo68222.setContext(context);
smo68222.draw();
const stavesmo64508 = new VF.Stave(90, 2136, 587);
stavesmo64508.setAttribute('id', 'stavesmo64508');
stavesmo64508.setBegBarType(1);
stavesmo64508.addClef('treble');
stavesmo64508.setContext(context);
stavesmo64508.draw();
smo64508v0.draw(context, stavesmo64508);
smo64508v1.draw(context, stavesmo64508);
const leftsmo57447stavesmo592431 = new VF.StaveConnector(stavesmo59243, stavesmo64508).setType(3);
leftsmo57447stavesmo592431.setContext(context).draw();
const fmtsmo5927519 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo59275v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59275v0ar = [];
const smo59244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59244.setAttribute('id', 'smo59244');
smo59275v0ar.push(smo59244);
const smo59245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59245.setAttribute('id', 'smo59245');
const smo592450acc = new VF.Accidental('b');
smo59245.addModifier(smo592450acc, 0);
smo59275v0ar.push(smo59245);
const smo59246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59246.setAttribute('id', 'smo59246');
smo59275v0ar.push(smo59246);
const smo59247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59247.setAttribute('id', 'smo59247');
smo59275v0ar.push(smo59247);
const smo59248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59248.setAttribute('id', 'smo59248');
smo59275v0ar.push(smo59248);
const smo59249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59249.setAttribute('id', 'smo59249');
smo59275v0ar.push(smo59249);
const smo59250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59250.setAttribute('id', 'smo59250');
smo59275v0ar.push(smo59250);
const smo59251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59251.setAttribute('id', 'smo59251');
smo59275v0ar.push(smo59251);
const smo59252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59252.setAttribute('id', 'smo59252');
smo59275v0ar.push(smo59252);
const smo59253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59253.setAttribute('id', 'smo59253');
smo59275v0ar.push(smo59253);
const smo59254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59254.setAttribute('id', 'smo59254');
smo59275v0ar.push(smo59254);
const smo59255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/3/n"]}'))
smo59255.setAttribute('id', 'smo59255');
smo59275v0ar.push(smo59255);
const smo59256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59256.setAttribute('id', 'smo59256');
smo59275v0ar.push(smo59256);
const smo59257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59257.setAttribute('id', 'smo59257');
smo59275v0ar.push(smo59257);
smo59275v0.addTickables(smo59275v0ar)
fmtsmo5927519.joinVoices([smo59275v0]);
const smo59275v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59275v1ar = [];
const smo59258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59258.setAttribute('id', 'smo59258');
smo59258.setStyle({ fillStyle: '#aaaaaa7f' });
smo59275v1ar.push(smo59258);
const smo59259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59259.setAttribute('id', 'smo59259');
smo59259.setStyle({ fillStyle: '#aaaaaa7f' });
smo59259.addModifier(new VF.Dot(), 0);
smo59259.addModifier(new VF.Dot(), 0);
smo59275v1ar.push(smo59259);
const smo59260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59260.setAttribute('id', 'smo59260');
smo59260.setStyle({ fillStyle: '#aaaaaa7f' });
smo59275v1ar.push(smo59260);
const smo59261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59261.setAttribute('id', 'smo59261');
smo59261.setStyle({ fillStyle: '#aaaaaa7f' });
smo59261.addModifier(new VF.Dot(), 0);
smo59261.addModifier(new VF.Dot(), 0);
smo59275v1ar.push(smo59261);
smo59275v1.addTickables(smo59275v1ar)
fmtsmo5927519.joinVoices([smo59275v1]);
const fmtsmo6453019 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo64530v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64530v0ar = [];
const smo64509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64509.setAttribute('id', 'smo64509');
smo64530v0ar.push(smo64509);
const smo64510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64510.setAttribute('id', 'smo64510');
smo64510.addModifier(new VF.Dot(), 0);
smo64530v0ar.push(smo64510);
const smo64511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64511.setAttribute('id', 'smo64511');
smo64530v0ar.push(smo64511);
const smo64512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64512.setAttribute('id', 'smo64512');
smo64530v0ar.push(smo64512);
const smo64513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64513.setAttribute('id', 'smo64513');
smo64513.addModifier(new VF.Dot(), 0);
smo64530v0ar.push(smo64513);
const smo64514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/3/n"]}'))
smo64514.setAttribute('id', 'smo64514');
smo64530v0ar.push(smo64514);
smo64530v0.addTickables(smo64530v0ar)
fmtsmo6453019.joinVoices([smo64530v0]);
const smo64530v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64530v1ar = [];
const smo64515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64515.setAttribute('id', 'smo64515');
smo64515.setStyle({ fillStyle: "#115511" });
smo64530v1ar.push(smo64515);
const smo64516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/3/n"]}'))
smo64516.setAttribute('id', 'smo64516');
smo64516.setStyle({ fillStyle: "#115511" });
smo64530v1ar.push(smo64516);
smo64530v1.addTickables(smo64530v1ar)
fmtsmo6453019.joinVoices([smo64530v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68227 = smo59245.getStemDirection();
smo59245.setStemDirection(dirsmo68227);
smo59246.setStemDirection(dirsmo68227);
const smo68227 = new VF.Beam([smo59245,smo59246]);
const dirsmo68228 = smo59247.getStemDirection();
smo59247.setStemDirection(dirsmo68228);
smo59248.setStemDirection(dirsmo68228);
smo59249.setStemDirection(dirsmo68228);
smo59250.setStemDirection(dirsmo68228);
const smo68228 = new VF.Beam([smo59247,smo59248,smo59249,smo59250]);
const dirsmo68229 = smo59252.getStemDirection();
smo59252.setStemDirection(dirsmo68229);
smo59253.setStemDirection(dirsmo68229);
const smo68229 = new VF.Beam([smo59252,smo59253]);
const dirsmo68230 = smo59254.getStemDirection();
smo59254.setStemDirection(dirsmo68230);
smo59255.setStemDirection(dirsmo68230);
smo59256.setStemDirection(dirsmo68230);
smo59257.setStemDirection(dirsmo68230);
const smo68230 = new VF.Beam([smo59254,smo59255,smo59256,smo59257]);
 
// formatting measures in staff group smo57447
fmtsmo5927519.format([smo59275v0,smo59275v1,smo64530v0,smo64530v1], 575);
const stavesmo59275 = new VF.Stave(677, 2049, 589);
stavesmo59275.setAttribute('id', 'stavesmo59275');
stavesmo59275.setBegBarType(VF.Barline.type.NONE);
stavesmo59275.setContext(context);
stavesmo59275.draw();
smo59275v0.draw(context, stavesmo59275);
smo59275v1.draw(context, stavesmo59275);
smo68227.setContext(context);
smo68227.draw();
smo68228.setContext(context);
smo68228.draw();
smo68229.setContext(context);
smo68229.draw();
smo68230.setContext(context);
smo68230.draw();
const stavesmo64530 = new VF.Stave(677, 2136, 589);
stavesmo64530.setAttribute('id', 'stavesmo64530');
stavesmo64530.setBegBarType(VF.Barline.type.NONE);
stavesmo64530.setContext(context);
stavesmo64530.draw();
smo64530v0.draw(context, stavesmo64530);
smo64530v1.draw(context, stavesmo64530);
const fmtsmo5930720 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo59307v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59307v0ar = [];
const smo59276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59276.setAttribute('id', 'smo59276');
smo59307v0ar.push(smo59276);
const smo59277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59277.setAttribute('id', 'smo59277');
smo59307v0ar.push(smo59277);
const smo59278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59278.setAttribute('id', 'smo59278');
smo59307v0ar.push(smo59278);
const smo59279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59279.setAttribute('id', 'smo59279');
smo59307v0ar.push(smo59279);
const smo59280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59280.setAttribute('id', 'smo59280');
smo59307v0ar.push(smo59280);
const smo59281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59281.setAttribute('id', 'smo59281');
smo59307v0ar.push(smo59281);
const smo59282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59282.setAttribute('id', 'smo59282');
smo59307v0ar.push(smo59282);
const smo59283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59283.setAttribute('id', 'smo59283');
smo59307v0ar.push(smo59283);
const smo59284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59284.setAttribute('id', 'smo59284');
smo59307v0ar.push(smo59284);
const smo59285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59285.setAttribute('id', 'smo59285');
smo59307v0ar.push(smo59285);
const smo59286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59286.setAttribute('id', 'smo59286');
smo59307v0ar.push(smo59286);
const smo59287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/3/n"]}'))
smo59287.setAttribute('id', 'smo59287');
smo59307v0ar.push(smo59287);
const smo59288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/4/n"]}'))
smo59288.setAttribute('id', 'smo59288');
smo59307v0ar.push(smo59288);
const smo59289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo59289.setAttribute('id', 'smo59289');
smo59307v0ar.push(smo59289);
smo59307v0.addTickables(smo59307v0ar)
fmtsmo5930720.joinVoices([smo59307v0]);
const smo59307v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo59307v1ar = [];
const smo59290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59290.setAttribute('id', 'smo59290');
smo59290.setStyle({ fillStyle: '#aaaaaa7f' });
smo59307v1ar.push(smo59290);
const smo59291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59291.setAttribute('id', 'smo59291');
smo59291.setStyle({ fillStyle: '#aaaaaa7f' });
smo59291.addModifier(new VF.Dot(), 0);
smo59291.addModifier(new VF.Dot(), 0);
smo59307v1ar.push(smo59291);
const smo59292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59292.setAttribute('id', 'smo59292');
smo59292.setStyle({ fillStyle: '#aaaaaa7f' });
smo59307v1ar.push(smo59292);
const smo59293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo59293.setAttribute('id', 'smo59293');
smo59293.setStyle({ fillStyle: '#aaaaaa7f' });
smo59293.addModifier(new VF.Dot(), 0);
smo59293.addModifier(new VF.Dot(), 0);
smo59307v1ar.push(smo59293);
smo59307v1.addTickables(smo59307v1ar)
fmtsmo5930720.joinVoices([smo59307v1]);
const fmtsmo6455220 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo64552v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64552v0ar = [];
const smo64531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64531.setAttribute('id', 'smo64531');
smo64552v0ar.push(smo64531);
const smo64532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64532.setAttribute('id', 'smo64532');
smo64532.addModifier(new VF.Dot(), 0);
smo64552v0ar.push(smo64532);
const smo64533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64533.setAttribute('id', 'smo64533');
smo64552v0ar.push(smo64533);
const smo64534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo64534.setAttribute('id', 'smo64534');
smo64552v0ar.push(smo64534);
const smo64535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64535.setAttribute('id', 'smo64535');
smo64535.addModifier(new VF.Dot(), 0);
smo64552v0ar.push(smo64535);
const smo64536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["fn/3/n"]}'))
smo64536.setAttribute('id', 'smo64536');
smo64552v0ar.push(smo64536);
smo64552v0.addTickables(smo64552v0ar)
fmtsmo6455220.joinVoices([smo64552v0]);
const smo64552v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64552v1ar = [];
const smo64537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n"]}'))
smo64537.setAttribute('id', 'smo64537');
smo64537.setStyle({ fillStyle: "#115511" });
smo64552v1ar.push(smo64537);
const smo64538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/2/n"]}'))
smo64538.setAttribute('id', 'smo64538');
smo64538.setStyle({ fillStyle: "#115511" });
smo64552v1ar.push(smo64538);
smo64552v1.addTickables(smo64552v1ar)
fmtsmo6455220.joinVoices([smo64552v1]);
// create beam groups and tuplets for format grp smo57447 before formatting
const dirsmo68235 = smo59277.getStemDirection();
smo59277.setStemDirection(dirsmo68235);
smo59278.setStemDirection(dirsmo68235);
const smo68235 = new VF.Beam([smo59277,smo59278]);
const dirsmo68236 = smo59279.getStemDirection();
smo59279.setStemDirection(dirsmo68236);
smo59280.setStemDirection(dirsmo68236);
smo59281.setStemDirection(dirsmo68236);
smo59282.setStemDirection(dirsmo68236);
const smo68236 = new VF.Beam([smo59279,smo59280,smo59281,smo59282]);
const dirsmo68237 = smo59284.getStemDirection();
smo59284.setStemDirection(dirsmo68237);
smo59285.setStemDirection(dirsmo68237);
const smo68237 = new VF.Beam([smo59284,smo59285]);
const dirsmo68238 = smo59286.getStemDirection();
smo59286.setStemDirection(dirsmo68238);
smo59287.setStemDirection(dirsmo68238);
smo59288.setStemDirection(dirsmo68238);
smo59289.setStemDirection(dirsmo68238);
const smo68238 = new VF.Beam([smo59286,smo59287,smo59288,smo59289]);
 
// formatting measures in staff group smo57447
fmtsmo5930720.format([smo59307v0,smo59307v1,smo64552v0,smo64552v1], 529);
const stavesmo59307 = new VF.Stave(1266, 2049, 543);
stavesmo59307.setAttribute('id', 'stavesmo59307');
stavesmo59307.setBegBarType(VF.Barline.type.NONE);
stavesmo59307.setContext(context);
stavesmo59307.draw();
smo59307v0.draw(context, stavesmo59307);
smo59307v1.draw(context, stavesmo59307);
smo68235.setContext(context);
smo68235.draw();
smo68236.setContext(context);
smo68236.draw();
smo68237.setContext(context);
smo68237.draw();
smo68238.setContext(context);
smo68238.draw();
const stavesmo64552 = new VF.Stave(1266, 2136, 543);
stavesmo64552.setAttribute('id', 'stavesmo64552');
stavesmo64552.setBegBarType(VF.Barline.type.NONE);
stavesmo64552.setContext(context);
stavesmo64552.draw();
smo64552v0.draw(context, stavesmo64552);
smo64552v1.draw(context, stavesmo64552);
const rightsmo57447stavesmo593071 = new VF.StaveConnector(stavesmo59307, stavesmo64552).setType(0);
rightsmo57447stavesmo593071.setContext(context).draw();
// modifier from 1-0-0-1 to 1-0-0-2
const smo70464 = new VF.StaveTie({ first_note: smo64092, last_note: smo64093, 
          firstNote: smo64092, lastNote: smo64093, first_indices: [0], last_indices: [0]});
smo70464.setContext(context).draw();
// modifier from 1-0-0-4 to 1-0-0-5
const smo70465 = new VF.StaveTie({ first_note: smo64095, last_note: smo64096, 
          firstNote: smo64095, lastNote: smo64096, first_indices: [0], last_indices: [0]});
smo70465.setContext(context).draw();
// modifier from 1-1-0-1 to 1-1-0-2
const smo70466 = new VF.StaveTie({ first_note: smo64114, last_note: smo64115, 
          firstNote: smo64114, lastNote: smo64115, first_indices: [0], last_indices: [0]});
smo70466.setContext(context).draw();
// modifier from 1-1-0-4 to 1-1-0-5
const smo70467 = new VF.StaveTie({ first_note: smo64117, last_note: smo64118, 
          firstNote: smo64117, lastNote: smo64118, first_indices: [0], last_indices: [0]});
smo70467.setContext(context).draw();
// modifier from 1-2-0-1 to 1-2-0-2
const smo70468 = new VF.StaveTie({ first_note: smo64136, last_note: smo64137, 
          firstNote: smo64136, lastNote: smo64137, first_indices: [0], last_indices: [0]});
smo70468.setContext(context).draw();
// modifier from 1-2-0-4 to 1-2-0-5
const smo70469 = new VF.StaveTie({ first_note: smo64139, last_note: smo64140, 
          firstNote: smo64139, lastNote: smo64140, first_indices: [0], last_indices: [0]});
smo70469.setContext(context).draw();
// modifier from 1-3-0-1 to 1-3-0-2
const smo70470 = new VF.StaveTie({ first_note: smo64158, last_note: smo64159, 
          firstNote: smo64158, lastNote: smo64159, first_indices: [0], last_indices: [0]});
smo70470.setContext(context).draw();
// modifier from 1-3-0-4 to 1-3-0-5
const smo70471 = new VF.StaveTie({ first_note: smo64161, last_note: smo64162, 
          firstNote: smo64161, lastNote: smo64162, first_indices: [0], last_indices: [0]});
smo70471.setContext(context).draw();
// modifier from 1-4-0-1 to 1-4-0-2
const smo70472 = new VF.StaveTie({ first_note: smo64180, last_note: smo64181, 
          firstNote: smo64180, lastNote: smo64181, first_indices: [0], last_indices: [0]});
smo70472.setContext(context).draw();
// modifier from 1-4-0-4 to 1-4-0-5
const smo70473 = new VF.StaveTie({ first_note: smo64183, last_note: smo64184, 
          firstNote: smo64183, lastNote: smo64184, first_indices: [0], last_indices: [0]});
smo70473.setContext(context).draw();
// modifier from 1-5-0-1 to 1-5-0-2
const smo70474 = new VF.StaveTie({ first_note: smo64202, last_note: smo64203, 
          firstNote: smo64202, lastNote: smo64203, first_indices: [0], last_indices: [0]});
smo70474.setContext(context).draw();
// modifier from 1-5-0-4 to 1-5-0-5
const smo70475 = new VF.StaveTie({ first_note: smo64205, last_note: smo64206, 
          firstNote: smo64205, lastNote: smo64206, first_indices: [0], last_indices: [0]});
smo70475.setContext(context).draw();
// modifier from 1-6-0-1 to 1-6-0-2
const smo70476 = new VF.StaveTie({ first_note: smo64224, last_note: smo64225, 
          firstNote: smo64224, lastNote: smo64225, first_indices: [0], last_indices: [0]});
smo70476.setContext(context).draw();
// modifier from 1-6-0-4 to 1-6-0-5
const smo70477 = new VF.StaveTie({ first_note: smo64227, last_note: smo64228, 
          firstNote: smo64227, lastNote: smo64228, first_indices: [0], last_indices: [0]});
smo70477.setContext(context).draw();
// modifier from 1-7-0-1 to 1-7-0-2
const smo70478 = new VF.StaveTie({ first_note: smo64246, last_note: smo64247, 
          firstNote: smo64246, lastNote: smo64247, first_indices: [0], last_indices: [0]});
smo70478.setContext(context).draw();
// modifier from 1-7-0-4 to 1-7-0-5
const smo70479 = new VF.StaveTie({ first_note: smo64249, last_note: smo64250, 
          firstNote: smo64249, lastNote: smo64250, first_indices: [0], last_indices: [0]});
smo70479.setContext(context).draw();
// modifier from 1-8-0-1 to 1-8-0-2
const smo70480 = new VF.StaveTie({ first_note: smo64268, last_note: smo64269, 
          firstNote: smo64268, lastNote: smo64269, first_indices: [0], last_indices: [0]});
smo70480.setContext(context).draw();
// modifier from 1-8-0-4 to 1-8-0-5
const smo70481 = new VF.StaveTie({ first_note: smo64271, last_note: smo64272, 
          firstNote: smo64271, lastNote: smo64272, first_indices: [0], last_indices: [0]});
smo70481.setContext(context).draw();
// modifier from 1-9-0-1 to 1-9-0-2
const smo70482 = new VF.StaveTie({ first_note: smo64290, last_note: smo64291, 
          firstNote: smo64290, lastNote: smo64291, first_indices: [0], last_indices: [0]});
smo70482.setContext(context).draw();
// modifier from 1-9-0-4 to 1-9-0-5
const smo70483 = new VF.StaveTie({ first_note: smo64293, last_note: smo64294, 
          firstNote: smo64293, lastNote: smo64294, first_indices: [0], last_indices: [0]});
smo70483.setContext(context).draw();
// modifier from 1-10-0-1 to 1-10-0-2
const smo70484 = new VF.StaveTie({ first_note: smo64312, last_note: smo64313, 
          firstNote: smo64312, lastNote: smo64313, first_indices: [0], last_indices: [0]});
smo70484.setContext(context).draw();
// modifier from 1-10-0-4 to 1-10-0-5
const smo70485 = new VF.StaveTie({ first_note: smo64315, last_note: smo64316, 
          firstNote: smo64315, lastNote: smo64316, first_indices: [0], last_indices: [0]});
smo70485.setContext(context).draw();
// modifier from 1-11-0-1 to 1-11-0-2
const smo70486 = new VF.StaveTie({ first_note: smo64334, last_note: smo64335, 
          firstNote: smo64334, lastNote: smo64335, first_indices: [0], last_indices: [0]});
smo70486.setContext(context).draw();
// modifier from 1-11-0-4 to 1-11-0-5
const smo70487 = new VF.StaveTie({ first_note: smo64337, last_note: smo64338, 
          firstNote: smo64337, lastNote: smo64338, first_indices: [0], last_indices: [0]});
smo70487.setContext(context).draw();
// modifier from 1-12-0-1 to 1-12-0-2
const smo70488 = new VF.StaveTie({ first_note: smo64356, last_note: smo64357, 
          firstNote: smo64356, lastNote: smo64357, first_indices: [0], last_indices: [0]});
smo70488.setContext(context).draw();
// modifier from 1-12-0-4 to 1-12-0-5
const smo70489 = new VF.StaveTie({ first_note: smo64359, last_note: smo64360, 
          firstNote: smo64359, lastNote: smo64360, first_indices: [0], last_indices: [0]});
smo70489.setContext(context).draw();
// modifier from 1-13-0-1 to 1-13-0-2
const smo70490 = new VF.StaveTie({ first_note: smo64378, last_note: smo64379, 
          firstNote: smo64378, lastNote: smo64379, first_indices: [0], last_indices: [0]});
smo70490.setContext(context).draw();
// modifier from 1-13-0-4 to 1-13-0-5
const smo70491 = new VF.StaveTie({ first_note: smo64381, last_note: smo64382, 
          firstNote: smo64381, lastNote: smo64382, first_indices: [0], last_indices: [0]});
smo70491.setContext(context).draw();
// modifier from 1-14-0-1 to 1-14-0-2
const smo70492 = new VF.StaveTie({ first_note: smo64400, last_note: smo64401, 
          firstNote: smo64400, lastNote: smo64401, first_indices: [0], last_indices: [0]});
smo70492.setContext(context).draw();
// modifier from 1-14-0-4 to 1-14-0-5
const smo70493 = new VF.StaveTie({ first_note: smo64403, last_note: smo64404, 
          firstNote: smo64403, lastNote: smo64404, first_indices: [0], last_indices: [0]});
smo70493.setContext(context).draw();
// modifier from 1-15-0-1 to 1-15-0-2
const smo70494 = new VF.StaveTie({ first_note: smo64422, last_note: smo64423, 
          firstNote: smo64422, lastNote: smo64423, first_indices: [0], last_indices: [0]});
smo70494.setContext(context).draw();
// modifier from 1-15-0-4 to 1-15-0-5
const smo70495 = new VF.StaveTie({ first_note: smo64425, last_note: smo64426, 
          firstNote: smo64425, lastNote: smo64426, first_indices: [0], last_indices: [0]});
smo70495.setContext(context).draw();
// modifier from 1-16-0-1 to 1-16-0-2
const smo70496 = new VF.StaveTie({ first_note: smo64444, last_note: smo64445, 
          firstNote: smo64444, lastNote: smo64445, first_indices: [0], last_indices: [0]});
smo70496.setContext(context).draw();
// modifier from 1-16-0-4 to 1-16-0-5
const smo70497 = new VF.StaveTie({ first_note: smo64447, last_note: smo64448, 
          firstNote: smo64447, lastNote: smo64448, first_indices: [0], last_indices: [0]});
smo70497.setContext(context).draw();
// modifier from 1-17-0-1 to 1-17-0-2
const smo70498 = new VF.StaveTie({ first_note: smo64466, last_note: smo64467, 
          firstNote: smo64466, lastNote: smo64467, first_indices: [0], last_indices: [0]});
smo70498.setContext(context).draw();
// modifier from 1-17-0-4 to 1-17-0-5
const smo70499 = new VF.StaveTie({ first_note: smo64469, last_note: smo64470, 
          firstNote: smo64469, lastNote: smo64470, first_indices: [0], last_indices: [0]});
smo70499.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-2
const smo70500 = new VF.StaveTie({ first_note: smo64488, last_note: smo64489, 
          firstNote: smo64488, lastNote: smo64489, first_indices: [0], last_indices: [0]});
smo70500.setContext(context).draw();
// modifier from 1-18-0-4 to 1-18-0-5
const smo70501 = new VF.StaveTie({ first_note: smo64491, last_note: smo64492, 
          firstNote: smo64491, lastNote: smo64492, first_indices: [0], last_indices: [0]});
smo70501.setContext(context).draw();
// modifier from 1-19-0-1 to 1-19-0-2
const smo70502 = new VF.StaveTie({ first_note: smo64510, last_note: smo64511, 
          firstNote: smo64510, lastNote: smo64511, first_indices: [0], last_indices: [0]});
smo70502.setContext(context).draw();
// modifier from 1-19-0-4 to 1-19-0-5
const smo70503 = new VF.StaveTie({ first_note: smo64513, last_note: smo64514, 
          firstNote: smo64513, lastNote: smo64514, first_indices: [0], last_indices: [0]});
smo70503.setContext(context).draw();
// modifier from 1-20-0-1 to 1-20-0-2
const smo70504 = new VF.StaveTie({ first_note: smo64532, last_note: smo64533, 
          firstNote: smo64532, lastNote: smo64533, first_indices: [0], last_indices: [0]});
smo70504.setContext(context).draw();
// modifier from 1-20-0-4 to 1-20-0-5
const smo70505 = new VF.StaveTie({ first_note: smo64535, last_note: smo64536, 
          firstNote: smo64535, lastNote: smo64536, first_indices: [0], last_indices: [0]});
smo70505.setContext(context).draw();
}
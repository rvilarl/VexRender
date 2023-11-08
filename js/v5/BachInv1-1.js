// @@ Invention No. 1 p 2/2  by JS Bach
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1590.1531536000011');
svg.setAttributeNS('', 'height', '2057.8452576000013');
svg.setAttributeNS('', 'viewBox', '0 0 1360 1760');
//
// create the musical objects
VF.setFonts("Gonville","Bravura","Custom");
const fmtsmo7254415 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo72544v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72544v0ar = [];
const smo72520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo72520.setAttribute('id', 'smo72520');
smo72544v0ar.push(smo72520);
const smo72521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo72521.setAttribute('id', 'smo72521');
smo72544v0ar.push(smo72521);
const smo72522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo72522.setAttribute('id', 'smo72522');
smo72544v0ar.push(smo72522);
const smo72523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo72523.setAttribute('id', 'smo72523');
smo72544v0ar.push(smo72523);
const smo72524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/5/n"]}'))
smo72524.setAttribute('id', 'smo72524');
smo72544v0ar.push(smo72524);
const smo72525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo72525.setAttribute('id', 'smo72525');
smo72544v0ar.push(smo72525);
const smo72526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/5/n"]}'))
smo72526.setAttribute('id', 'smo72526');
smo72544v0ar.push(smo72526);
const smo72527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo72527.setAttribute('id', 'smo72527');
smo72544v0ar.push(smo72527);
const smo72528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72528.setAttribute('id', 'smo72528');
smo72544v0ar.push(smo72528);
smo72544v0.addTickables(smo72544v0ar)
fmtsmo7254415.joinVoices([smo72544v0]);
const fmtsmo7316415 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo73164v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73164v0ar = [];
const smo73140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73140.setAttribute('id', 'smo73140');
smo73164v0ar.push(smo73140);
const smo73141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73141.setAttribute('id', 'smo73141');
smo73164v0ar.push(smo73141);
const smo73142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73142.setAttribute('id', 'smo73142');
smo73164v0ar.push(smo73142);
const smo73143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo73143.setAttribute('id', 'smo73143');
smo73164v0ar.push(smo73143);
const smo73144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73144.setAttribute('id', 'smo73144');
smo73164v0ar.push(smo73144);
const smo73145 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73145.setAttribute('id', 'smo73145');
smo73164v0ar.push(smo73145);
const smo73146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo73146.setAttribute('id', 'smo73146');
smo73164v0ar.push(smo73146);
const smo73147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73147.setAttribute('id', 'smo73147');
smo73164v0ar.push(smo73147);
const smo73148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73148.setAttribute('id', 'smo73148');
smo73164v0ar.push(smo73148);
smo73164v0.addTickables(smo73164v0ar)
fmtsmo7316415.joinVoices([smo73164v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
const dirsmo75310 = smo72520.getStemDirection();
smo72520.setStemDirection(dirsmo75310);
smo72521.setStemDirection(dirsmo75310);
smo72522.setStemDirection(dirsmo75310);
smo72523.setStemDirection(dirsmo75310);
const smo75310 = new VF.Beam([smo72520,smo72521,smo72522,smo72523]);
const dirsmo75311 = smo72524.getStemDirection();
smo72524.setStemDirection(dirsmo75311);
smo72525.setStemDirection(dirsmo75311);
smo72526.setStemDirection(dirsmo75311);
smo72527.setStemDirection(dirsmo75311);
const smo75311 = new VF.Beam([smo72524,smo72525,smo72526,smo72527]);
const dirsmo75313 = smo73141.getStemDirection();
smo73141.setStemDirection(dirsmo75313);
smo73142.setStemDirection(dirsmo75313);
smo73143.setStemDirection(dirsmo75313);
smo73144.setStemDirection(dirsmo75313);
const smo75313 = new VF.Beam([smo73141,smo73142,smo73143,smo73144]);
const dirsmo75314 = smo73145.getStemDirection();
smo73145.setStemDirection(dirsmo75314);
smo73146.setStemDirection(dirsmo75314);
smo73147.setStemDirection(dirsmo75314);
smo73148.setStemDirection(dirsmo75314);
const smo75314 = new VF.Beam([smo73145,smo73146,smo73147,smo73148]);
 
// formatting measures in staff group smo73330
fmtsmo7254415.format([smo72544v0,smo73164v0], 371);
const stavesmo72544 = new VF.Stave(50, 225.00000000000023, 422);
stavesmo72544.setAttribute('id', 'stavesmo72544');
stavesmo72544.setBegBarType(1);
stavesmo72544.addClef('treble');
stavesmo72544.setContext(context);
stavesmo72544.draw();
smo72544v0.draw(context, stavesmo72544);
smo75310.setContext(context);
smo75310.draw();
smo75311.setContext(context);
smo75311.draw();
const stavesmo73164 = new VF.Stave(50, 344.0000000000002, 422);
stavesmo73164.setAttribute('id', 'stavesmo73164');
stavesmo73164.setBegBarType(1);
stavesmo73164.addClef('bass');
stavesmo73164.setContext(context);
stavesmo73164.draw();
smo73164v0.draw(context, stavesmo73164);
smo75313.setContext(context);
smo75313.draw();
smo75314.setContext(context);
smo75314.draw();
const leftsmo73330stavesmo725441 = new VF.StaveConnector(stavesmo72544, stavesmo73164).setType(3);
leftsmo73330stavesmo725441.setContext(context).draw();
const fmtsmo7257016 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo72570v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72570v0ar = [];
const smo72545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72545.setAttribute('id', 'smo72545');
const  smo75487 = new VF.Articulation('a.').setPosition(3);
smo72545.addModifier(smo75487, 0);
smo72570v0ar.push(smo72545);
const smo72547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72547.setAttribute('id', 'smo72547');
smo72570v0ar.push(smo72547);
const smo72548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72548.setAttribute('id', 'smo72548');
smo72570v0ar.push(smo72548);
const smo72549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72549.setAttribute('id', 'smo72549');
smo72570v0ar.push(smo72549);
const smo72550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72550.setAttribute('id', 'smo72550');
smo72570v0ar.push(smo72550);
const smo72551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72551.setAttribute('id', 'smo72551');
smo72570v0ar.push(smo72551);
const smo72552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72552.setAttribute('id', 'smo72552');
smo72570v0ar.push(smo72552);
const smo72553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72553.setAttribute('id', 'smo72553');
smo72570v0ar.push(smo72553);
const smo72554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72554.setAttribute('id', 'smo72554');
smo72570v0ar.push(smo72554);
smo72570v0.addTickables(smo72570v0ar)
fmtsmo7257016.joinVoices([smo72570v0]);
const fmtsmo7318916 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo73189v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73189v0ar = [];
const smo73165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo73165.setAttribute('id', 'smo73165');
smo73189v0ar.push(smo73165);
const smo73166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo73166.setAttribute('id', 'smo73166');
smo73189v0ar.push(smo73166);
const smo73167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73167.setAttribute('id', 'smo73167');
smo73189v0ar.push(smo73167);
const smo73168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73168.setAttribute('id', 'smo73168');
smo73189v0ar.push(smo73168);
const smo73169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo73169.setAttribute('id', 'smo73169');
smo73189v0ar.push(smo73169);
const smo73170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73170.setAttribute('id', 'smo73170');
smo73189v0ar.push(smo73170);
const smo73171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73171.setAttribute('id', 'smo73171');
smo73189v0ar.push(smo73171);
const smo73172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo73172.setAttribute('id', 'smo73172');
smo73189v0ar.push(smo73172);
const smo73173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73173.setAttribute('id', 'smo73173');
smo73189v0ar.push(smo73173);
smo73189v0.addTickables(smo73189v0ar)
fmtsmo7318916.joinVoices([smo73189v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
const dirsmo75318 = smo72545.getStemDirection();
smo72545.setStemDirection(dirsmo75318);
smo72547.setStemDirection(dirsmo75318);
smo72548.setStemDirection(dirsmo75318);
smo72549.setStemDirection(dirsmo75318);
const smo75318 = new VF.Beam([smo72545,smo72547,smo72548,smo72549]);
const dirsmo75319 = smo72550.getStemDirection();
smo72550.setStemDirection(dirsmo75319);
smo72551.setStemDirection(dirsmo75319);
smo72552.setStemDirection(dirsmo75319);
smo72553.setStemDirection(dirsmo75319);
const smo75319 = new VF.Beam([smo72550,smo72551,smo72552,smo72553]);
const dirsmo75321 = smo73166.getStemDirection();
smo73166.setStemDirection(dirsmo75321);
smo73167.setStemDirection(dirsmo75321);
smo73168.setStemDirection(dirsmo75321);
smo73169.setStemDirection(dirsmo75321);
const smo75321 = new VF.Beam([smo73166,smo73167,smo73168,smo73169]);
const dirsmo75322 = smo73170.getStemDirection();
smo73170.setStemDirection(dirsmo75322);
smo73171.setStemDirection(dirsmo75322);
smo73172.setStemDirection(dirsmo75322);
smo73173.setStemDirection(dirsmo75322);
const smo75322 = new VF.Beam([smo73170,smo73171,smo73172,smo73173]);
 
// formatting measures in staff group smo73330
fmtsmo7257016.format([smo72570v0,smo73189v0], 371);
const stavesmo72570 = new VF.Stave(472, 225.00000000000023, 385);
stavesmo72570.setAttribute('id', 'stavesmo72570');
stavesmo72570.setBegBarType(VF.Barline.type.NONE);
stavesmo72570.setContext(context);
stavesmo72570.draw();
smo72570v0.draw(context, stavesmo72570);
smo75318.setContext(context);
smo75318.draw();
smo75319.setContext(context);
smo75319.draw();
const stavesmo73189 = new VF.Stave(472, 344.0000000000002, 385);
stavesmo73189.setAttribute('id', 'stavesmo73189');
stavesmo73189.setBegBarType(VF.Barline.type.NONE);
stavesmo73189.setContext(context);
stavesmo73189.draw();
smo73189v0.draw(context, stavesmo73189);
smo75321.setContext(context);
smo75321.draw();
smo75322.setContext(context);
smo75322.draw();
const fmtsmo7259517 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo72595v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72595v0ar = [];
const smo72571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72571.setAttribute('id', 'smo72571');
smo72595v0ar.push(smo72571);
const smo72572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72572.setAttribute('id', 'smo72572');
smo72595v0ar.push(smo72572);
const smo72573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72573.setAttribute('id', 'smo72573');
smo72595v0ar.push(smo72573);
const smo72574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72574.setAttribute('id', 'smo72574');
smo72595v0ar.push(smo72574);
const smo72575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72575.setAttribute('id', 'smo72575');
smo72595v0ar.push(smo72575);
const smo72576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72576.setAttribute('id', 'smo72576');
smo72595v0ar.push(smo72576);
const smo72577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72577.setAttribute('id', 'smo72577');
smo72595v0ar.push(smo72577);
const smo72578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72578.setAttribute('id', 'smo72578');
smo72595v0ar.push(smo72578);
const smo72579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72579.setAttribute('id', 'smo72579');
smo72595v0ar.push(smo72579);
smo72595v0.addTickables(smo72595v0ar)
fmtsmo7259517.joinVoices([smo72595v0]);
const fmtsmo7321417 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo73214v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73214v0ar = [];
const smo73190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73190.setAttribute('id', 'smo73190');
smo73214v0ar.push(smo73190);
const smo73191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73191.setAttribute('id', 'smo73191');
smo73214v0ar.push(smo73191);
const smo73192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo73192.setAttribute('id', 'smo73192');
smo73214v0ar.push(smo73192);
const smo73193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73193.setAttribute('id', 'smo73193');
smo73214v0ar.push(smo73193);
const smo73194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo73194.setAttribute('id', 'smo73194');
const smo731940acc = new VF.Accidental('b');
smo73194.addModifier(smo731940acc, 0);
smo73214v0ar.push(smo73194);
const smo73195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73195.setAttribute('id', 'smo73195');
smo73214v0ar.push(smo73195);
const smo73196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73196.setAttribute('id', 'smo73196');
smo73214v0ar.push(smo73196);
const smo73197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo73197.setAttribute('id', 'smo73197');
smo73214v0ar.push(smo73197);
const smo73198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo73198.setAttribute('id', 'smo73198');
smo73214v0ar.push(smo73198);
smo73214v0.addTickables(smo73214v0ar)
fmtsmo7321417.joinVoices([smo73214v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
const dirsmo75326 = smo72571.getStemDirection();
smo72571.setStemDirection(dirsmo75326);
smo72572.setStemDirection(dirsmo75326);
smo72573.setStemDirection(dirsmo75326);
smo72574.setStemDirection(dirsmo75326);
const smo75326 = new VF.Beam([smo72571,smo72572,smo72573,smo72574]);
const dirsmo75327 = smo72575.getStemDirection();
smo72575.setStemDirection(dirsmo75327);
smo72576.setStemDirection(dirsmo75327);
smo72577.setStemDirection(dirsmo75327);
smo72578.setStemDirection(dirsmo75327);
const smo75327 = new VF.Beam([smo72575,smo72576,smo72577,smo72578]);
const dirsmo75329 = smo73191.getStemDirection();
smo73191.setStemDirection(dirsmo75329);
smo73192.setStemDirection(dirsmo75329);
smo73193.setStemDirection(dirsmo75329);
smo73194.setStemDirection(dirsmo75329);
const smo75329 = new VF.Beam([smo73191,smo73192,smo73193,smo73194]);
const dirsmo75330 = smo73195.getStemDirection();
smo73195.setStemDirection(dirsmo75330);
smo73196.setStemDirection(dirsmo75330);
smo73197.setStemDirection(dirsmo75330);
smo73198.setStemDirection(dirsmo75330);
const smo75330 = new VF.Beam([smo73195,smo73196,smo73197,smo73198]);
 
// formatting measures in staff group smo73330
fmtsmo7259517.format([smo72595v0,smo73214v0], 389);
const stavesmo72595 = new VF.Stave(857, 225.00000000000023, 403);
stavesmo72595.setAttribute('id', 'stavesmo72595');
stavesmo72595.setBegBarType(VF.Barline.type.NONE);
stavesmo72595.setContext(context);
stavesmo72595.draw();
smo72595v0.draw(context, stavesmo72595);
smo75326.setContext(context);
smo75326.draw();
smo75327.setContext(context);
smo75327.draw();
const stavesmo73214 = new VF.Stave(857, 344.0000000000002, 403);
stavesmo73214.setAttribute('id', 'stavesmo73214');
stavesmo73214.setBegBarType(VF.Barline.type.NONE);
stavesmo73214.setContext(context);
stavesmo73214.draw();
smo73214v0.draw(context, stavesmo73214);
smo75329.setContext(context);
smo75329.draw();
smo75330.setContext(context);
smo75330.draw();
const rightsmo73330stavesmo725951 = new VF.StaveConnector(stavesmo72595, stavesmo73214).setType(0);
rightsmo73330stavesmo725951.setContext(context).draw();
const fmtsmo7262818 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo72628v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72628v0ar = [];
const smo72596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72596.setAttribute('id', 'smo72596');
const  smo75496 = new VF.Articulation('a.').setPosition(3);
smo72596.addModifier(smo75496, 0);
smo72628v0ar.push(smo72596);
const smo72598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo72598.setAttribute('id', 'smo72598');
smo72628v0ar.push(smo72598);
const smo72599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72599.setAttribute('id', 'smo72599');
smo72628v0ar.push(smo72599);
const smo72600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72600.setAttribute('id', 'smo72600');
smo72628v0ar.push(smo72600);
const smo72601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72601.setAttribute('id', 'smo72601');
smo72628v0ar.push(smo72601);
const smo72602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72602.setAttribute('id', 'smo72602');
smo72628v0ar.push(smo72602);
const smo72603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72603.setAttribute('id', 'smo72603');
smo72628v0ar.push(smo72603);
const smo72604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo72604.setAttribute('id', 'smo72604');
smo72628v0ar.push(smo72604);
const smo72605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72605.setAttribute('id', 'smo72605');
smo72628v0ar.push(smo72605);
const smo72606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72606.setAttribute('id', 'smo72606');
smo72628v0ar.push(smo72606);
const smo72607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72607.setAttribute('id', 'smo72607');
smo72628v0ar.push(smo72607);
const smo72608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72608.setAttribute('id', 'smo72608');
smo72628v0ar.push(smo72608);
const smo72609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo72609.setAttribute('id', 'smo72609');
smo72628v0ar.push(smo72609);
const smo72610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72610.setAttribute('id', 'smo72610');
smo72628v0ar.push(smo72610);
const smo72611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72611.setAttribute('id', 'smo72611');
smo72628v0ar.push(smo72611);
const smo72612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72612.setAttribute('id', 'smo72612');
smo72628v0ar.push(smo72612);
smo72628v0.addTickables(smo72628v0ar)
fmtsmo7262818.joinVoices([smo72628v0]);
const fmtsmo7323818 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo73238v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73238v0ar = [];
const smo73215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73215.setAttribute('id', 'smo73215');
smo73238v0ar.push(smo73215);
const smo73216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo73216.setAttribute('id', 'smo73216');
const smo732160acc = new VF.Accidental('b');
smo73216.addModifier(smo732160acc, 0);
smo73238v0ar.push(smo73216);
const smo73217 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73217.setAttribute('id', 'smo73217');
smo73238v0ar.push(smo73217);
const smo73218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo73218.setAttribute('id', 'smo73218');
smo73238v0ar.push(smo73218);
const smo73219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo73219.setAttribute('id', 'smo73219');
smo73238v0ar.push(smo73219);
const smo73220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73220.setAttribute('id', 'smo73220');
smo73238v0ar.push(smo73220);
const smo73221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo73221.setAttribute('id', 'smo73221');
smo73238v0ar.push(smo73221);
const smo73222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo73222.setAttribute('id', 'smo73222');
smo73238v0ar.push(smo73222);
smo73238v0.addTickables(smo73238v0ar)
fmtsmo7323818.joinVoices([smo73238v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
const dirsmo75344 = smo72596.getStemDirection();
smo72596.setStemDirection(dirsmo75344);
smo72598.setStemDirection(dirsmo75344);
smo72599.setStemDirection(dirsmo75344);
smo72600.setStemDirection(dirsmo75344);
const smo75344 = new VF.Beam([smo72596,smo72598,smo72599,smo72600]);
const dirsmo75345 = smo72601.getStemDirection();
smo72601.setStemDirection(dirsmo75345);
smo72602.setStemDirection(dirsmo75345);
smo72603.setStemDirection(dirsmo75345);
smo72604.setStemDirection(dirsmo75345);
const smo75345 = new VF.Beam([smo72601,smo72602,smo72603,smo72604]);
const dirsmo75346 = smo72605.getStemDirection();
smo72605.setStemDirection(dirsmo75346);
smo72606.setStemDirection(dirsmo75346);
smo72607.setStemDirection(dirsmo75346);
smo72608.setStemDirection(dirsmo75346);
const smo75346 = new VF.Beam([smo72605,smo72606,smo72607,smo72608]);
const dirsmo75347 = smo72609.getStemDirection();
smo72609.setStemDirection(dirsmo75347);
smo72610.setStemDirection(dirsmo75347);
smo72611.setStemDirection(dirsmo75347);
smo72612.setStemDirection(dirsmo75347);
const smo75347 = new VF.Beam([smo72609,smo72610,smo72611,smo72612]);
const dirsmo75349 = smo73215.getStemDirection();
smo73215.setStemDirection(dirsmo75349);
smo73216.setStemDirection(dirsmo75349);
smo73217.setStemDirection(dirsmo75349);
smo73218.setStemDirection(dirsmo75349);
const smo75349 = new VF.Beam([smo73215,smo73216,smo73217,smo73218]);
const dirsmo75350 = smo73219.getStemDirection();
smo73219.setStemDirection(dirsmo75350);
smo73220.setStemDirection(dirsmo75350);
smo73221.setStemDirection(dirsmo75350);
smo73222.setStemDirection(dirsmo75350);
const smo75350 = new VF.Beam([smo73219,smo73220,smo73221,smo73222]);
 
// formatting measures in staff group smo73330
fmtsmo7262818.format([smo72628v0,smo73238v0], 338);
const stavesmo72628 = new VF.Stave(50, 485.0000000000002, 389);
stavesmo72628.setAttribute('id', 'stavesmo72628');
stavesmo72628.setBegBarType(1);
stavesmo72628.addClef('treble');
stavesmo72628.setContext(context);
stavesmo72628.draw();
smo72628v0.draw(context, stavesmo72628);
smo75344.setContext(context);
smo75344.draw();
smo75345.setContext(context);
smo75345.draw();
smo75346.setContext(context);
smo75346.draw();
smo75347.setContext(context);
smo75347.draw();
const stavesmo73238 = new VF.Stave(50, 619.0000000000002, 389);
stavesmo73238.setAttribute('id', 'stavesmo73238');
stavesmo73238.setBegBarType(1);
stavesmo73238.addClef('bass');
stavesmo73238.setContext(context);
stavesmo73238.draw();
smo73238v0.draw(context, stavesmo73238);
smo75349.setContext(context);
smo75349.draw();
smo75350.setContext(context);
smo75350.draw();
const leftsmo73330stavesmo726281 = new VF.StaveConnector(stavesmo72628, stavesmo73238).setType(3);
leftsmo73330stavesmo726281.setContext(context).draw();
const fmtsmo7265719 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo72657v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72657v0ar = [];
const smo72629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72629.setAttribute('id', 'smo72629');
smo72657v0ar.push(smo72629);
const smo72630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72630.setAttribute('id', 'smo72630');
smo72657v0ar.push(smo72630);
const smo72631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo72631.setAttribute('id', 'smo72631');
smo72657v0ar.push(smo72631);
const smo72632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo72632.setAttribute('id', 'smo72632');
smo72657v0ar.push(smo72632);
const smo72633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo72633.setAttribute('id', 'smo72633');
smo72657v0ar.push(smo72633);
const smo72634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo72634.setAttribute('id', 'smo72634');
smo72657v0ar.push(smo72634);
const smo72635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo72635.setAttribute('id', 'smo72635');
smo72657v0ar.push(smo72635);
const smo72636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72636.setAttribute('id', 'smo72636');
smo72657v0ar.push(smo72636);
const smo72637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo72637.setAttribute('id', 'smo72637');
smo72657v0ar.push(smo72637);
const smo72638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo72638.setAttribute('id', 'smo72638');
smo72657v0ar.push(smo72638);
const smo72639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72639.setAttribute('id', 'smo72639');
smo72657v0ar.push(smo72639);
const smo72640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72640.setAttribute('id', 'smo72640');
smo72657v0ar.push(smo72640);
const smo72641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo72641.setAttribute('id', 'smo72641');
smo72657v0ar.push(smo72641);
smo72657v0.addTickables(smo72657v0ar)
fmtsmo7265719.joinVoices([smo72657v0]);
const fmtsmo7326619 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo73266v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73266v0ar = [];
const smo73239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo73239.setAttribute('id', 'smo73239');
smo73266v0ar.push(smo73239);
const smo73240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo73240.setAttribute('id', 'smo73240');
smo73266v0ar.push(smo73240);
const smo73241 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo73241.setAttribute('id', 'smo73241');
smo73266v0ar.push(smo73241);
const smo73242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo73242.setAttribute('id', 'smo73242');
smo73266v0ar.push(smo73242);
const smo73243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo73243.setAttribute('id', 'smo73243');
smo73266v0ar.push(smo73243);
const smo73244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo73244.setAttribute('id', 'smo73244');
smo73266v0ar.push(smo73244);
const smo73245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo73245.setAttribute('id', 'smo73245');
smo73266v0ar.push(smo73245);
const smo73246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo73246.setAttribute('id', 'smo73246');
smo73266v0ar.push(smo73246);
const smo73247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo73247.setAttribute('id', 'smo73247');
smo73266v0ar.push(smo73247);
const smo73248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo73248.setAttribute('id', 'smo73248');
smo73266v0ar.push(smo73248);
const smo73249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo73249.setAttribute('id', 'smo73249');
smo73266v0ar.push(smo73249);
const smo73250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo73250.setAttribute('id', 'smo73250');
smo73266v0ar.push(smo73250);
smo73266v0.addTickables(smo73266v0ar)
fmtsmo7326619.joinVoices([smo73266v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
const dirsmo75354 = smo72629.getStemDirection();
smo72629.setStemDirection(dirsmo75354);
smo72630.setStemDirection(dirsmo75354);
smo72631.setStemDirection(dirsmo75354);
smo72632.setStemDirection(dirsmo75354);
const smo75354 = new VF.Beam([smo72629,smo72630,smo72631,smo72632]);
const dirsmo75355 = smo72633.getStemDirection();
smo72633.setStemDirection(dirsmo75355);
smo72634.setStemDirection(dirsmo75355);
smo72635.setStemDirection(dirsmo75355);
smo72636.setStemDirection(dirsmo75355);
const smo75355 = new VF.Beam([smo72633,smo72634,smo72635,smo72636]);
const dirsmo75356 = smo72637.getStemDirection();
smo72637.setStemDirection(dirsmo75356);
smo72638.setStemDirection(dirsmo75356);
const smo75356 = new VF.Beam([smo72637,smo72638]);
const dirsmo75357 = smo72639.getStemDirection();
smo72639.setStemDirection(dirsmo75357);
smo72640.setStemDirection(dirsmo75357);
smo72641.setStemDirection(dirsmo75357);
const smo75357 = new VF.Beam([smo72639,smo72640,smo72641]);
const dirsmo75359 = smo73239.getStemDirection();
smo73239.setStemDirection(dirsmo75359);
smo73240.setStemDirection(dirsmo75359);
const smo75359 = new VF.Beam([smo73239,smo73240]);
const dirsmo75360 = smo73241.getStemDirection();
smo73241.setStemDirection(dirsmo75360);
smo73242.setStemDirection(dirsmo75360);
const smo75360 = new VF.Beam([smo73241,smo73242]);
const dirsmo75361 = smo73243.getStemDirection();
smo73243.setStemDirection(dirsmo75361);
smo73244.setStemDirection(dirsmo75361);
smo73245.setStemDirection(dirsmo75361);
smo73246.setStemDirection(dirsmo75361);
const smo75361 = new VF.Beam([smo73243,smo73244,smo73245,smo73246]);
const dirsmo75362 = smo73247.getStemDirection();
smo73247.setStemDirection(dirsmo75362);
smo73248.setStemDirection(dirsmo75362);
smo73249.setStemDirection(dirsmo75362);
smo73250.setStemDirection(dirsmo75362);
const smo75362 = new VF.Beam([smo73247,smo73248,smo73249,smo73250]);
 
// formatting measures in staff group smo73330
fmtsmo7265719.format([smo72657v0,smo73266v0], 315);
const stavesmo72657 = new VF.Stave(439, 485.0000000000002, 329);
stavesmo72657.setAttribute('id', 'stavesmo72657');
stavesmo72657.setBegBarType(VF.Barline.type.NONE);
stavesmo72657.setContext(context);
stavesmo72657.draw();
smo72657v0.draw(context, stavesmo72657);
smo75354.setContext(context);
smo75354.draw();
smo75355.setContext(context);
smo75355.draw();
smo75356.setContext(context);
smo75356.draw();
smo75357.setContext(context);
smo75357.draw();
const stavesmo73266 = new VF.Stave(439, 619.0000000000002, 329);
stavesmo73266.setAttribute('id', 'stavesmo73266');
stavesmo73266.setBegBarType(VF.Barline.type.NONE);
stavesmo73266.setContext(context);
stavesmo73266.draw();
smo73266v0.draw(context, stavesmo73266);
smo75359.setContext(context);
smo75359.draw();
smo75360.setContext(context);
smo75360.draw();
smo75361.setContext(context);
smo75361.draw();
smo75362.setContext(context);
smo75362.draw();
const fmtsmo7268920 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo72689v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72689v0ar = [];
const smo72658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo72658.setAttribute('id', 'smo72658');
smo72689v0ar.push(smo72658);
const smo72659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo72659.setAttribute('id', 'smo72659');
smo72689v0ar.push(smo72659);
const smo72660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo72660.setAttribute('id', 'smo72660');
smo72689v0ar.push(smo72660);
const smo72661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo72661.setAttribute('id', 'smo72661');
smo72689v0ar.push(smo72661);
const smo72662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo72662.setAttribute('id', 'smo72662');
smo72689v0ar.push(smo72662);
const smo72663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo72663.setAttribute('id', 'smo72663');
smo72689v0ar.push(smo72663);
const smo72664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo72664.setAttribute('id', 'smo72664');
smo72689v0ar.push(smo72664);
const smo72665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo72665.setAttribute('id', 'smo72665');
smo72689v0ar.push(smo72665);
const smo72666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo72666.setAttribute('id', 'smo72666');
smo72689v0ar.push(smo72666);
const smo72667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo72667.setAttribute('id', 'smo72667');
smo72689v0ar.push(smo72667);
const smo72668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo72668.setAttribute('id', 'smo72668');
smo72689v0ar.push(smo72668);
const smo72669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo72669.setAttribute('id', 'smo72669');
smo72689v0ar.push(smo72669);
const smo72670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo72670.setAttribute('id', 'smo72670');
smo72689v0ar.push(smo72670);
const smo72671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo72671.setAttribute('id', 'smo72671');
smo72689v0ar.push(smo72671);
const smo72672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo72672.setAttribute('id', 'smo72672');
smo72689v0ar.push(smo72672);
const smo72673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo72673.setAttribute('id', 'smo72673');
smo72689v0ar.push(smo72673);
smo72689v0.addTickables(smo72689v0ar)
fmtsmo7268920.joinVoices([smo72689v0]);
const fmtsmo7329420 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo73294v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73294v0ar = [];
const smo73267 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo73267.setAttribute('id', 'smo73267');
smo73294v0ar.push(smo73267);
const smo73268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo73268.setAttribute('id', 'smo73268');
smo73294v0ar.push(smo73268);
const smo73269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo73269.setAttribute('id', 'smo73269');
smo73294v0ar.push(smo73269);
const smo73270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo73270.setAttribute('id', 'smo73270');
smo73294v0ar.push(smo73270);
const smo73271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo73271.setAttribute('id', 'smo73271');
smo73294v0ar.push(smo73271);
const smo73272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo73272.setAttribute('id', 'smo73272');
smo73294v0ar.push(smo73272);
const smo73273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo73273.setAttribute('id', 'smo73273');
smo73294v0ar.push(smo73273);
const smo73274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo73274.setAttribute('id', 'smo73274');
smo73294v0ar.push(smo73274);
const smo73275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo73275.setAttribute('id', 'smo73275');
const  smo75505 = new VF.Articulation('a.').setPosition(3);
smo73275.addModifier(smo75505, 0);
smo73294v0ar.push(smo73275);
const smo73277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo73277.setAttribute('id', 'smo73277');
const  smo75506 = new VF.Articulation('a.').setPosition(3);
smo73277.addModifier(smo75506, 0);
smo73294v0ar.push(smo73277);
smo73294v0.addTickables(smo73294v0ar)
fmtsmo7329420.joinVoices([smo73294v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
const dirsmo75366 = smo72658.getStemDirection();
smo72658.setStemDirection(dirsmo75366);
smo72659.setStemDirection(dirsmo75366);
smo72660.setStemDirection(dirsmo75366);
smo72661.setStemDirection(dirsmo75366);
const smo75366 = new VF.Beam([smo72658,smo72659,smo72660,smo72661]);
const dirsmo75367 = smo72662.getStemDirection();
smo72662.setStemDirection(dirsmo75367);
smo72663.setStemDirection(dirsmo75367);
smo72664.setStemDirection(dirsmo75367);
smo72665.setStemDirection(dirsmo75367);
const smo75367 = new VF.Beam([smo72662,smo72663,smo72664,smo72665]);
const dirsmo75368 = smo72666.getStemDirection();
smo72666.setStemDirection(dirsmo75368);
smo72667.setStemDirection(dirsmo75368);
smo72668.setStemDirection(dirsmo75368);
smo72669.setStemDirection(dirsmo75368);
const smo75368 = new VF.Beam([smo72666,smo72667,smo72668,smo72669]);
const dirsmo75369 = smo72670.getStemDirection();
smo72670.setStemDirection(dirsmo75369);
smo72671.setStemDirection(dirsmo75369);
smo72672.setStemDirection(dirsmo75369);
smo72673.setStemDirection(dirsmo75369);
const smo75369 = new VF.Beam([smo72670,smo72671,smo72672,smo72673]);
const dirsmo75371 = smo73267.getStemDirection();
smo73267.setStemDirection(dirsmo75371);
smo73268.setStemDirection(dirsmo75371);
const smo75371 = new VF.Beam([smo73267,smo73268]);
const dirsmo75372 = smo73269.getStemDirection();
smo73269.setStemDirection(dirsmo75372);
smo73270.setStemDirection(dirsmo75372);
const smo75372 = new VF.Beam([smo73269,smo73270]);
const dirsmo75373 = smo73271.getStemDirection();
smo73271.setStemDirection(dirsmo75373);
smo73272.setStemDirection(dirsmo75373);
smo73273.setStemDirection(dirsmo75373);
smo73274.setStemDirection(dirsmo75373);
const smo75373 = new VF.Beam([smo73271,smo73272,smo73273,smo73274]);
const dirsmo75374 = smo73275.getStemDirection();
smo73275.setStemDirection(dirsmo75374);
smo73277.setStemDirection(dirsmo75374);
const smo75374 = new VF.Beam([smo73275,smo73277]);
 
// formatting measures in staff group smo73330
fmtsmo7268920.format([smo72689v0,smo73294v0], 310);
const stavesmo72689 = new VF.Stave(768, 485.0000000000002, 324);
stavesmo72689.setAttribute('id', 'stavesmo72689');
stavesmo72689.setBegBarType(VF.Barline.type.NONE);
stavesmo72689.setContext(context);
stavesmo72689.draw();
smo72689v0.draw(context, stavesmo72689);
smo75366.setContext(context);
smo75366.draw();
smo75367.setContext(context);
smo75367.draw();
smo75368.setContext(context);
smo75368.draw();
smo75369.setContext(context);
smo75369.draw();
const stavesmo73294 = new VF.Stave(768, 619.0000000000002, 324);
stavesmo73294.setAttribute('id', 'stavesmo73294');
stavesmo73294.setBegBarType(VF.Barline.type.NONE);
stavesmo73294.setContext(context);
stavesmo73294.draw();
smo73294v0.draw(context, stavesmo73294);
smo75371.setContext(context);
smo75371.draw();
smo75372.setContext(context);
smo75372.draw();
smo75373.setContext(context);
smo75373.draw();
smo75374.setContext(context);
smo75374.draw();
const fmtsmo7270621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo72706v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72706v0ar = [];
const smo72690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo72690.setAttribute('id', 'smo72690');
smo72706v0ar.push(smo72690);
smo72706v0.addTickables(smo72706v0ar)
fmtsmo7270621.joinVoices([smo72706v0]);
const fmtsmo7331121 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo73311v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73311v0ar = [];
const smo73295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo73295.setAttribute('id', 'smo73295');
smo73311v0ar.push(smo73295);
smo73311v0.addTickables(smo73311v0ar)
fmtsmo7331121.joinVoices([smo73311v0]);
// create beam groups and tuplets for format grp smo73330 before formatting
 
// formatting measures in staff group smo73330
fmtsmo7270621.format([smo72706v0,smo73311v0], 20);
const stavesmo72706 = new VF.Stave(1092, 485.0000000000002, 42);
stavesmo72706.setAttribute('id', 'stavesmo72706');
stavesmo72706.setBegBarType(VF.Barline.type.NONE);
stavesmo72706.setEndBarType(3);
stavesmo72706.setContext(context);
stavesmo72706.draw();
smo72706v0.draw(context, stavesmo72706);
const stavesmo73311 = new VF.Stave(1092, 619.0000000000002, 42);
stavesmo73311.setAttribute('id', 'stavesmo73311');
stavesmo73311.setBegBarType(VF.Barline.type.NONE);
stavesmo73311.setEndBarType(3);
stavesmo73311.setContext(context);
stavesmo73311.draw();
smo73311v0.draw(context, stavesmo73311);
// modifier from 0-15-0-8 to 0-16-0-0
const smo75513 = new VF.Curve(smo72528, smo72545, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75513.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo75514 = new VF.Curve(smo72579, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo75514.setContext(context).draw();
// modifier from 0-17-0-8 to 0-18-0-0
const smo75515 = new VF.Curve(null, smo72596, JSON.parse('{"thickness":2,"xShift":-5,"yShift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"positionEnd":1}'));
smo75515.setContext(context).draw();
// modifier from 0-16-0-8 to 0-17-0-0
const smo75516 = new VF.Curve(smo72554, smo72571, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75516.setContext(context).draw();
// modifier from 1-15-0-0 to 1-15-0-1
const smo75517 = new VF.Curve(smo73140, smo73141, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75517.setContext(context).draw();
// modifier from 1-16-0-0 to 1-16-0-1
const smo75518 = new VF.Curve(smo73165, smo73166, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75518.setContext(context).draw();
// modifier from 1-17-0-0 to 1-17-0-1
const smo75519 = new VF.Curve(smo73190, smo73191, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75519.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-4
const smo75520 = new VF.Curve(smo73216, smo73219, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75520.setContext(context).draw();
// modifier from 1-18-0-5 to 1-19-0-0
const smo75521 = new VF.Curve(smo73220, smo73239, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo75521.setContext(context).draw();
}
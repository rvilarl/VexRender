// @@ The Entertainer p 1/3  by Scott Joplin
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
const fmtsmo983800 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo98380v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98380v0ar = [];
const smo98352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo98352.setAttribute('id', 'smo98352');
smo98380v0ar.push(smo98352);
const smo98354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo98354.setAttribute('id', 'smo98354');
smo98380v0ar.push(smo98354);
const smo98355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo98355.setAttribute('id', 'smo98355');
smo98380v0ar.push(smo98355);
const smo98356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo98356.setAttribute('id', 'smo98356');
smo98380v0ar.push(smo98356);
const smo98357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo98357.setAttribute('id', 'smo98357');
smo98380v0ar.push(smo98357);
const smo98358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo98358.setAttribute('id', 'smo98358');
smo98380v0ar.push(smo98358);
const smo98359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo98359.setAttribute('id', 'smo98359');
smo98380v0ar.push(smo98359);
smo98380v0.addTickables(smo98380v0ar)
fmtsmo983800.joinVoices([smo98380v0]);
const smo98380v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98380v1ar = [];
const smo98360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo98360.setAttribute('id', 'smo98360');
smo98360.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98360);
const smo98361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98361.setAttribute('id', 'smo98361');
smo98361.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98361);
const smo98362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98362.setAttribute('id', 'smo98362');
smo98362.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98362);
const smo98363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo98363.setAttribute('id', 'smo98363');
smo98363.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98363);
const smo98364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo98364.setAttribute('id', 'smo98364');
smo98364.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98364);
const smo98365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo98365.setAttribute('id', 'smo98365');
smo98365.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98365);
const smo98366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo98366.setAttribute('id', 'smo98366');
smo98366.setStyle({ fillStyle: "#115511" });
smo98380v1ar.push(smo98366);
smo98380v1.addTickables(smo98380v1ar)
fmtsmo983800.joinVoices([smo98380v1]);
const fmtsmo1012570 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo101257v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101257v0ar = [];
const smo101243 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo101243.setAttribute('id', 'smo101243');
smo101257v0ar.push(smo101243);
smo101257v0.addTickables(smo101257v0ar)
fmtsmo1012570.joinVoices([smo101257v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103278 = smo98352.getStemDirection();
smo98352.setStemDirection(dirsmo103278);
smo98354.setStemDirection(dirsmo103278);
smo98355.setStemDirection(dirsmo103278);
smo98356.setStemDirection(dirsmo103278);
const smo103278 = new VF.Beam([smo98352,smo98354,smo98355,smo98356]);
const dirsmo103279 = smo98357.getStemDirection();
smo98357.setStemDirection(dirsmo103279);
smo98358.setStemDirection(dirsmo103279);
smo98359.setStemDirection(dirsmo103279);
const smo103279 = new VF.Beam([smo98357,smo98358,smo98359]);
const dirsmo103280 = smo98360.getStemDirection();
smo98360.setStemDirection(dirsmo103280);
smo98361.setStemDirection(dirsmo103280);
smo98362.setStemDirection(dirsmo103280);
smo98363.setStemDirection(dirsmo103280);
const smo103280 = new VF.Beam([smo98360,smo98361,smo98362,smo98363]);
const dirsmo103281 = smo98364.getStemDirection();
smo98364.setStemDirection(dirsmo103281);
smo98365.setStemDirection(dirsmo103281);
smo98366.setStemDirection(dirsmo103281);
const smo103281 = new VF.Beam([smo98364,smo98365,smo98366]);
 
// formatting measures in staff group smo97609
fmtsmo983800.format([smo98380v0,smo98380v1,smo101257v0], 213);
const stavesmo98380 = new VF.Stave(73, 406, 295);
stavesmo98380.setAttribute('id', 'stavesmo98380');
stavesmo98380.setBegBarType(1);
stavesmo98380.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo98380.addClef('treble');
stavesmo98380.addTimeSignature('2/4');
stavesmo98380.setContext(context);
stavesmo98380.draw();
smo98380v0.draw(context, stavesmo98380);
smo98380v1.draw(context, stavesmo98380);
smo103278.setContext(context);
smo103278.draw();
smo103279.setContext(context);
smo103279.draw();
smo103280.setContext(context);
smo103280.draw();
smo103281.setContext(context);
smo103281.draw();
const stavesmo101257 = new VF.Stave(73, 545, 295);
stavesmo101257.setAttribute('id', 'stavesmo101257');
stavesmo101257.setBegBarType(1);
stavesmo101257.addClef('bass');
stavesmo101257.addTimeSignature('2/4');
stavesmo101257.setContext(context);
stavesmo101257.draw();
smo101257v0.draw(context, stavesmo101257);
const leftsmo97609stavesmo983801 = new VF.StaveConnector(stavesmo98380, stavesmo101257).setType(3);
leftsmo97609stavesmo983801.setContext(context).draw();
const fmtsmo984011 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo98401v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98401v0ar = [];
const smo98381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo98381.setAttribute('id', 'smo98381');
smo98401v0ar.push(smo98381);
const smo98382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98382.setAttribute('id', 'smo98382');
smo98401v0ar.push(smo98382);
const smo98383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98383.setAttribute('id', 'smo98383');
smo98401v0ar.push(smo98383);
const smo98384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo98384.setAttribute('id', 'smo98384');
smo98401v0ar.push(smo98384);
const smo98385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo98385.setAttribute('id', 'smo98385');
smo98401v0ar.push(smo98385);
const smo98386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo98386.setAttribute('id', 'smo98386');
smo98401v0ar.push(smo98386);
const smo98387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo98387.setAttribute('id', 'smo98387');
smo98401v0ar.push(smo98387);
smo98401v0.addTickables(smo98401v0ar)
fmtsmo984011.joinVoices([smo98401v0]);
const fmtsmo1012781 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo101278v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101278v0ar = [];
const smo101258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo101258.setAttribute('id', 'smo101258');
smo101278v0ar.push(smo101258);
const smo101259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo101259.setAttribute('id', 'smo101259');
smo101278v0ar.push(smo101259);
const smo101260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo101260.setAttribute('id', 'smo101260');
smo101278v0ar.push(smo101260);
const smo101261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo101261.setAttribute('id', 'smo101261');
smo101278v0ar.push(smo101261);
const smo101262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo101262.setAttribute('id', 'smo101262');
smo101278v0ar.push(smo101262);
const smo101263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo101263.setAttribute('id', 'smo101263');
smo101278v0ar.push(smo101263);
const smo101264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo101264.setAttribute('id', 'smo101264');
smo101278v0ar.push(smo101264);
smo101278v0.addTickables(smo101278v0ar)
fmtsmo1012781.joinVoices([smo101278v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103286 = smo98381.getStemDirection();
smo98381.setStemDirection(dirsmo103286);
smo98382.setStemDirection(dirsmo103286);
smo98383.setStemDirection(dirsmo103286);
smo98384.setStemDirection(dirsmo103286);
const smo103286 = new VF.Beam([smo98381,smo98382,smo98383,smo98384]);
const dirsmo103287 = smo98385.getStemDirection();
smo98385.setStemDirection(dirsmo103287);
smo98386.setStemDirection(dirsmo103287);
smo98387.setStemDirection(dirsmo103287);
const smo103287 = new VF.Beam([smo98385,smo98386,smo98387]);
const dirsmo103290 = smo101258.getStemDirection();
smo101258.setStemDirection(dirsmo103290);
smo101259.setStemDirection(dirsmo103290);
smo101260.setStemDirection(dirsmo103290);
smo101261.setStemDirection(dirsmo103290);
const smo103290 = new VF.Beam([smo101258,smo101259,smo101260,smo101261]);
const dirsmo103291 = smo101262.getStemDirection();
smo101262.setStemDirection(dirsmo103291);
smo101263.setStemDirection(dirsmo103291);
smo101264.setStemDirection(dirsmo103291);
const smo103291 = new VF.Beam([smo101262,smo101263,smo101264]);
 
// formatting measures in staff group smo97609
fmtsmo984011.format([smo98401v0,smo101278v0], 281);
const stavesmo98401 = new VF.Stave(368, 406, 295);
stavesmo98401.setAttribute('id', 'stavesmo98401');
stavesmo98401.setBegBarType(VF.Barline.type.NONE);
stavesmo98401.setContext(context);
stavesmo98401.draw();
smo98401v0.draw(context, stavesmo98401);
smo103286.setContext(context);
smo103286.draw();
smo103287.setContext(context);
smo103287.draw();
const stavesmo101278 = new VF.Stave(368, 545, 295);
stavesmo101278.setAttribute('id', 'stavesmo101278');
stavesmo101278.setBegBarType(VF.Barline.type.NONE);
stavesmo101278.setContext(context);
stavesmo101278.draw();
smo101278v0.draw(context, stavesmo101278);
smo103290.setContext(context);
smo103290.draw();
smo103291.setContext(context);
smo103291.draw();
const fmtsmo984232 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo98423v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98423v0ar = [];
const smo98402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo98402.setAttribute('id', 'smo98402');
smo98423v0ar.push(smo98402);
const smo98403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98403.setAttribute('id', 'smo98403');
smo98423v0ar.push(smo98403);
const smo98404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo98404.setAttribute('id', 'smo98404');
smo98423v0ar.push(smo98404);
const smo98405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo98405.setAttribute('id', 'smo98405');
smo98423v0ar.push(smo98405);
const smo98406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo98406.setAttribute('id', 'smo98406');
smo98423v0ar.push(smo98406);
const smo98407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo98407.setAttribute('id', 'smo98407');
smo98423v0ar.push(smo98407);
const smo98408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo98408.setAttribute('id', 'smo98408');
smo98423v0ar.push(smo98408);
const smo98409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo98409.setAttribute('id', 'smo98409');
const smo984090acc = new VF.Accidental('b');
smo98409.addModifier(smo984090acc, 0);
smo98423v0ar.push(smo98409);
smo98423v0.addTickables(smo98423v0ar)
fmtsmo984232.joinVoices([smo98423v0]);
const fmtsmo1013002 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo101300v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101300v0ar = [];
const smo101279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo101279.setAttribute('id', 'smo101279');
smo101300v0ar.push(smo101279);
const smo101280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo101280.setAttribute('id', 'smo101280');
smo101300v0ar.push(smo101280);
const smo101281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101281.setAttribute('id', 'smo101281');
smo101300v0ar.push(smo101281);
const smo101282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo101282.setAttribute('id', 'smo101282');
smo101300v0ar.push(smo101282);
const smo101283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo101283.setAttribute('id', 'smo101283');
smo101300v0ar.push(smo101283);
const smo101284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo101284.setAttribute('id', 'smo101284');
smo101300v0ar.push(smo101284);
const smo101285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo101285.setAttribute('id', 'smo101285');
smo101300v0ar.push(smo101285);
const smo101286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n"]}'))
smo101286.setAttribute('id', 'smo101286');
const smo1012860acc = new VF.Accidental('b');
smo101286.addModifier(smo1012860acc, 0);
smo101300v0ar.push(smo101286);
smo101300v0.addTickables(smo101300v0ar)
fmtsmo1013002.joinVoices([smo101300v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103294 = smo98402.getStemDirection();
smo98402.setStemDirection(dirsmo103294);
smo98403.setStemDirection(dirsmo103294);
smo98404.setStemDirection(dirsmo103294);
smo98405.setStemDirection(dirsmo103294);
const smo103294 = new VF.Beam([smo98402,smo98403,smo98404,smo98405]);
const dirsmo103295 = smo98406.getStemDirection();
smo98406.setStemDirection(dirsmo103295);
smo98407.setStemDirection(dirsmo103295);
smo98408.setStemDirection(dirsmo103295);
smo98409.setStemDirection(dirsmo103295);
const smo103295 = new VF.Beam([smo98406,smo98407,smo98408,smo98409]);
const dirsmo103298 = smo101279.getStemDirection();
smo101279.setStemDirection(dirsmo103298);
smo101280.setStemDirection(dirsmo103298);
smo101281.setStemDirection(dirsmo103298);
smo101282.setStemDirection(dirsmo103298);
const smo103298 = new VF.Beam([smo101279,smo101280,smo101281,smo101282]);
const dirsmo103299 = smo101283.getStemDirection();
smo101283.setStemDirection(dirsmo103299);
smo101284.setStemDirection(dirsmo103299);
smo101285.setStemDirection(dirsmo103299);
smo101286.setStemDirection(dirsmo103299);
const smo103299 = new VF.Beam([smo101283,smo101284,smo101285,smo101286]);
 
// formatting measures in staff group smo97609
fmtsmo984232.format([smo98423v0,smo101300v0], 281);
const stavesmo98423 = new VF.Stave(663, 406, 295);
stavesmo98423.setAttribute('id', 'stavesmo98423');
stavesmo98423.setBegBarType(VF.Barline.type.NONE);
stavesmo98423.setContext(context);
stavesmo98423.draw();
smo98423v0.draw(context, stavesmo98423);
smo103294.setContext(context);
smo103294.draw();
smo103295.setContext(context);
smo103295.draw();
const stavesmo101300 = new VF.Stave(663, 545, 295);
stavesmo101300.setAttribute('id', 'stavesmo101300');
stavesmo101300.setBegBarType(VF.Barline.type.NONE);
stavesmo101300.setContext(context);
stavesmo101300.draw();
smo101300v0.draw(context, stavesmo101300);
smo103298.setContext(context);
smo103298.draw();
smo103299.setContext(context);
smo103299.draw();
const fmtsmo984413 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo98441v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98441v0ar = [];
const smo98424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo98424.setAttribute('id', 'smo98424');
smo98441v0ar.push(smo98424);
const smo98425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
smo98425.setAttribute('id', 'smo98425');
smo98441v0ar.push(smo98425);
const smo98426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo98426.setAttribute('id', 'smo98426');
smo98441v0ar.push(smo98426);
const smo98427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo98427.setAttribute('id', 'smo98427');
const smo984270acc = new VF.Accidental('b');
smo98427.addModifier(smo984270acc, 0);
smo98441v0ar.push(smo98427);
smo98441v0.addTickables(smo98441v0ar)
fmtsmo984413.joinVoices([smo98441v0]);
const fmtsmo1013183 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo101318v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101318v0ar = [];
const smo101301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101301.setAttribute('id', 'smo101301');
smo101318v0ar.push(smo101301);
const smo101302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo101302.setAttribute('id', 'smo101302');
smo101318v0ar.push(smo101302);
const smo101303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/1/n","gn/2/n"]}'))
smo101303.setAttribute('id', 'smo101303');
smo101318v0ar.push(smo101303);
const smo101304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101304.setAttribute('id', 'smo101304');
smo101318v0ar.push(smo101304);
smo101318v0.addTickables(smo101318v0ar)
fmtsmo1013183.joinVoices([smo101318v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103302 = smo98425.getStemDirection();
smo98425.setStemDirection(dirsmo103302);
smo98426.setStemDirection(dirsmo103302);
smo98427.setStemDirection(dirsmo103302);
const smo103302 = new VF.Beam([smo98425,smo98426,smo98427]);
const dirsmo103305 = smo101303.getStemDirection();
smo101303.setStemDirection(dirsmo103305);
smo101304.setStemDirection(dirsmo103305);
const smo103305 = new VF.Beam([smo101303,smo101304]);
 
// formatting measures in staff group smo97609
fmtsmo984413.format([smo98441v0,smo101318v0], 281);
const stavesmo98441 = new VF.Stave(958, 406, 295);
stavesmo98441.setAttribute('id', 'stavesmo98441');
stavesmo98441.setBegBarType(VF.Barline.type.NONE);
stavesmo98441.setContext(context);
stavesmo98441.draw();
smo98441v0.draw(context, stavesmo98441);
smo103302.setContext(context);
smo103302.draw();
const stavesmo101318 = new VF.Stave(958, 545, 295);
stavesmo101318.setAttribute('id', 'stavesmo101318');
stavesmo101318.setBegBarType(VF.Barline.type.NONE);
stavesmo101318.setContext(context);
stavesmo101318.draw();
smo101318v0.draw(context, stavesmo101318);
smo103305.setContext(context);
smo103305.draw();
const fmtsmo984624 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo98462v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98462v0ar = [];
const smo98442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98442.setAttribute('id', 'smo98442');
smo98462v0ar.push(smo98442);
const smo98444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98444.setAttribute('id', 'smo98444');
smo98462v0ar.push(smo98444);
const smo98445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98445.setAttribute('id', 'smo98445');
smo98462v0ar.push(smo98445);
const smo98446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98446.setAttribute('id', 'smo98446');
smo98462v0ar.push(smo98446);
const smo98447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98447.setAttribute('id', 'smo98447');
smo98462v0ar.push(smo98447);
const smo98448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98448.setAttribute('id', 'smo98448');
smo98462v0ar.push(smo98448);
smo98462v0.addTickables(smo98462v0ar)
fmtsmo984624.joinVoices([smo98462v0]);
const fmtsmo1013364 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo101336v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101336v0ar = [];
const smo101319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101319.setAttribute('id', 'smo101319');
smo101336v0ar.push(smo101319);
const smo101320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101320.setAttribute('id', 'smo101320');
smo101336v0ar.push(smo101320);
const smo101321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101321.setAttribute('id', 'smo101321');
smo101336v0ar.push(smo101321);
const smo101322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo101322.setAttribute('id', 'smo101322');
const smo1013221acc = new VF.Accidental('b');
smo101322.addModifier(smo1013221acc, 1);
smo101336v0ar.push(smo101322);
smo101336v0.addTickables(smo101336v0ar)
fmtsmo1013364.joinVoices([smo101336v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103308 = smo98442.getStemDirection();
smo98442.setStemDirection(dirsmo103308);
smo98444.setStemDirection(dirsmo103308);
smo98445.setStemDirection(dirsmo103308);
const smo103308 = new VF.Beam([smo98442,smo98444,smo98445]);
const dirsmo103309 = smo98446.getStemDirection();
smo98446.setStemDirection(dirsmo103309);
smo98447.setStemDirection(dirsmo103309);
smo98448.setStemDirection(dirsmo103309);
const smo103309 = new VF.Beam([smo98446,smo98447,smo98448]);
const dirsmo103311 = smo101319.getStemDirection();
smo101319.setStemDirection(dirsmo103311);
smo101320.setStemDirection(dirsmo103311);
const smo103311 = new VF.Beam([smo101319,smo101320]);
const dirsmo103312 = smo101321.getStemDirection();
smo101321.setStemDirection(dirsmo103312);
smo101322.setStemDirection(dirsmo103312);
const smo103312 = new VF.Beam([smo101321,smo101322]);
 
// formatting measures in staff group smo97609
fmtsmo984624.format([smo98462v0,smo101336v0], 272);
const stavesmo98462 = new VF.Stave(1253, 406, 295);
stavesmo98462.setAttribute('id', 'stavesmo98462');
stavesmo98462.setBegBarType(4);
stavesmo98462.setContext(context);
stavesmo98462.draw();
smo98462v0.draw(context, stavesmo98462);
smo103308.setContext(context);
smo103308.draw();
smo103309.setContext(context);
smo103309.draw();
const stavesmo101336 = new VF.Stave(1253, 545, 295);
stavesmo101336.setAttribute('id', 'stavesmo101336');
stavesmo101336.setBegBarType(4);
stavesmo101336.setContext(context);
stavesmo101336.draw();
smo101336v0.draw(context, stavesmo101336);
smo103311.setContext(context);
smo103311.draw();
smo103312.setContext(context);
smo103312.draw();
const fmtsmo984815 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo98481v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98481v0ar = [];
const smo98463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98463.setAttribute('id', 'smo98463');
smo98481v0ar.push(smo98463);
const smo98464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98464.setAttribute('id', 'smo98464');
smo98481v0ar.push(smo98464);
const smo98465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98465.setAttribute('id', 'smo98465');
smo98481v0ar.push(smo98465);
const smo98466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98466.setAttribute('id', 'smo98466');
smo98481v0ar.push(smo98466);
const smo98467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo98467.setAttribute('id', 'smo98467');
const smo984670acc = new VF.Accidental('b');
smo98467.addModifier(smo984670acc, 0);
const smo984671acc = new VF.Accidental('b');
smo98467.addModifier(smo984671acc, 1);
const smo984672acc = new VF.Accidental('b');
smo98467.addModifier(smo984672acc, 2);
smo98481v0ar.push(smo98467);
smo98481v0.addTickables(smo98481v0ar)
fmtsmo984815.joinVoices([smo98481v0]);
const fmtsmo1013545 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo101354v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101354v0ar = [];
const smo101337 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo101337.setAttribute('id', 'smo101337');
smo101354v0ar.push(smo101337);
const smo101338 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo101338.setAttribute('id', 'smo101338');
smo101354v0ar.push(smo101338);
const smo101339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo101339.setAttribute('id', 'smo101339');
smo101354v0ar.push(smo101339);
const smo101340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo101340.setAttribute('id', 'smo101340');
smo101354v0ar.push(smo101340);
smo101354v0.addTickables(smo101354v0ar)
fmtsmo1013545.joinVoices([smo101354v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103314 = smo98464.getStemDirection();
smo98464.setStemDirection(dirsmo103314);
smo98465.setStemDirection(dirsmo103314);
smo98466.setStemDirection(dirsmo103314);
smo98467.setStemDirection(dirsmo103314);
const smo103314 = new VF.Beam([smo98464,smo98465,smo98466,smo98467]);
const dirsmo103317 = smo101337.getStemDirection();
smo101337.setStemDirection(dirsmo103317);
smo101338.setStemDirection(dirsmo103317);
const smo103317 = new VF.Beam([smo101337,smo101338]);
const dirsmo103318 = smo101339.getStemDirection();
smo101339.setStemDirection(dirsmo103318);
smo101340.setStemDirection(dirsmo103318);
const smo103318 = new VF.Beam([smo101339,smo101340]);
 
// formatting measures in staff group smo97609
fmtsmo984815.format([smo98481v0,smo101354v0], 281);
const stavesmo98481 = new VF.Stave(1548, 406, 295);
stavesmo98481.setAttribute('id', 'stavesmo98481');
stavesmo98481.setBegBarType(VF.Barline.type.NONE);
stavesmo98481.setContext(context);
stavesmo98481.draw();
smo98481v0.draw(context, stavesmo98481);
smo103314.setContext(context);
smo103314.draw();
const stavesmo101354 = new VF.Stave(1548, 545, 295);
stavesmo101354.setAttribute('id', 'stavesmo101354');
stavesmo101354.setBegBarType(VF.Barline.type.NONE);
stavesmo101354.setContext(context);
stavesmo101354.draw();
smo101354v0.draw(context, stavesmo101354);
smo103317.setContext(context);
smo103317.draw();
smo103318.setContext(context);
smo103318.draw();
const rightsmo97609stavesmo984811 = new VF.StaveConnector(stavesmo98481, stavesmo101354).setType(0);
rightsmo97609stavesmo984811.setContext(context).draw();
const fmtsmo985036 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo98503v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98503v0ar = [];
const smo98482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98482.setAttribute('id', 'smo98482');
smo98503v0ar.push(smo98482);
const smo98484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98484.setAttribute('id', 'smo98484');
smo98503v0ar.push(smo98484);
const smo98485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98485.setAttribute('id', 'smo98485');
smo98503v0ar.push(smo98485);
const smo98486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98486.setAttribute('id', 'smo98486');
smo98503v0ar.push(smo98486);
const smo98487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98487.setAttribute('id', 'smo98487');
smo98503v0ar.push(smo98487);
const smo98488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo98488.setAttribute('id', 'smo98488');
smo98503v0ar.push(smo98488);
const smo98489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98489.setAttribute('id', 'smo98489');
smo98503v0ar.push(smo98489);
smo98503v0.addTickables(smo98503v0ar)
fmtsmo985036.joinVoices([smo98503v0]);
const fmtsmo1013726 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo101372v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101372v0ar = [];
const smo101355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101355.setAttribute('id', 'smo101355');
smo101372v0ar.push(smo101355);
const smo101356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101356.setAttribute('id', 'smo101356');
smo101372v0ar.push(smo101356);
const smo101357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101357.setAttribute('id', 'smo101357');
smo101372v0ar.push(smo101357);
const smo101358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo101358.setAttribute('id', 'smo101358');
smo101372v0ar.push(smo101358);
smo101372v0.addTickables(smo101372v0ar)
fmtsmo1013726.joinVoices([smo101372v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103329 = smo98482.getStemDirection();
smo98482.setStemDirection(dirsmo103329);
smo98484.setStemDirection(dirsmo103329);
smo98485.setStemDirection(dirsmo103329);
smo98486.setStemDirection(dirsmo103329);
const smo103329 = new VF.Beam([smo98482,smo98484,smo98485,smo98486]);
const dirsmo103330 = smo98487.getStemDirection();
smo98487.setStemDirection(dirsmo103330);
smo98488.setStemDirection(dirsmo103330);
smo98489.setStemDirection(dirsmo103330);
const smo103330 = new VF.Beam([smo98487,smo98488,smo98489]);
const dirsmo103333 = smo101355.getStemDirection();
smo101355.setStemDirection(dirsmo103333);
smo101356.setStemDirection(dirsmo103333);
const smo103333 = new VF.Beam([smo101355,smo101356]);
const dirsmo103334 = smo101357.getStemDirection();
smo101357.setStemDirection(dirsmo103334);
smo101358.setStemDirection(dirsmo103334);
const smo103334 = new VF.Beam([smo101357,smo101358]);
 
// formatting measures in staff group smo97609
fmtsmo985036.format([smo98503v0,smo101372v0], 237);
const stavesmo98503 = new VF.Stave(73, 779, 295);
stavesmo98503.setAttribute('id', 'stavesmo98503');
stavesmo98503.setBegBarType(1);
stavesmo98503.addClef('treble');
stavesmo98503.setContext(context);
stavesmo98503.draw();
smo98503v0.draw(context, stavesmo98503);
smo103329.setContext(context);
smo103329.draw();
smo103330.setContext(context);
smo103330.draw();
const stavesmo101372 = new VF.Stave(73, 934, 295);
stavesmo101372.setAttribute('id', 'stavesmo101372');
stavesmo101372.setBegBarType(1);
stavesmo101372.addClef('bass');
stavesmo101372.setContext(context);
stavesmo101372.draw();
smo101372v0.draw(context, stavesmo101372);
smo103333.setContext(context);
smo103333.draw();
smo103334.setContext(context);
smo103334.draw();
const leftsmo97609stavesmo985031 = new VF.StaveConnector(stavesmo98503, stavesmo101372).setType(3);
leftsmo97609stavesmo985031.setContext(context).draw();
const fmtsmo985217 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo98521v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98521v0ar = [];
const smo98504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98504.setAttribute('id', 'smo98504');
smo98521v0ar.push(smo98504);
const smo98505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98505.setAttribute('id', 'smo98505');
smo98521v0ar.push(smo98505);
const smo98506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo98506.setAttribute('id', 'smo98506');
smo98521v0ar.push(smo98506);
const smo98507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo98507.setAttribute('id', 'smo98507');
const smo985070acc = new VF.Accidental('b');
smo98507.addModifier(smo985070acc, 0);
smo98521v0ar.push(smo98507);
smo98521v0.addTickables(smo98521v0ar)
fmtsmo985217.joinVoices([smo98521v0]);
const fmtsmo1013907 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo101390v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101390v0ar = [];
const smo101373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101373.setAttribute('id', 'smo101373');
smo101390v0ar.push(smo101373);
const smo101374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101374.setAttribute('id', 'smo101374');
smo101390v0ar.push(smo101374);
const smo101375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101375.setAttribute('id', 'smo101375');
smo101390v0ar.push(smo101375);
const smo101376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101376.setAttribute('id', 'smo101376');
smo101390v0ar.push(smo101376);
smo101390v0.addTickables(smo101390v0ar)
fmtsmo1013907.joinVoices([smo101390v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103337 = smo98505.getStemDirection();
smo98505.setStemDirection(dirsmo103337);
smo98506.setStemDirection(dirsmo103337);
smo98507.setStemDirection(dirsmo103337);
const smo103337 = new VF.Beam([smo98505,smo98506,smo98507]);
const dirsmo103340 = smo101373.getStemDirection();
smo101373.setStemDirection(dirsmo103340);
smo101374.setStemDirection(dirsmo103340);
const smo103340 = new VF.Beam([smo101373,smo101374]);
const dirsmo103341 = smo101375.getStemDirection();
smo101375.setStemDirection(dirsmo103341);
smo101376.setStemDirection(dirsmo103341);
const smo103341 = new VF.Beam([smo101375,smo101376]);
 
// formatting measures in staff group smo97609
fmtsmo985217.format([smo98521v0,smo101390v0], 281);
const stavesmo98521 = new VF.Stave(368, 779, 295);
stavesmo98521.setAttribute('id', 'stavesmo98521');
stavesmo98521.setBegBarType(VF.Barline.type.NONE);
stavesmo98521.setContext(context);
stavesmo98521.draw();
smo98521v0.draw(context, stavesmo98521);
smo103337.setContext(context);
smo103337.draw();
const stavesmo101390 = new VF.Stave(368, 934, 295);
stavesmo101390.setAttribute('id', 'stavesmo101390');
stavesmo101390.setBegBarType(VF.Barline.type.NONE);
stavesmo101390.setContext(context);
stavesmo101390.draw();
smo101390v0.draw(context, stavesmo101390);
smo103340.setContext(context);
smo103340.draw();
smo103341.setContext(context);
smo103341.draw();
const fmtsmo985428 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo98542v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98542v0ar = [];
const smo98522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98522.setAttribute('id', 'smo98522');
smo98542v0ar.push(smo98522);
const smo98524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98524.setAttribute('id', 'smo98524');
smo98542v0ar.push(smo98524);
const smo98525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98525.setAttribute('id', 'smo98525');
smo98542v0ar.push(smo98525);
const smo98526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98526.setAttribute('id', 'smo98526');
smo98542v0ar.push(smo98526);
const smo98527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98527.setAttribute('id', 'smo98527');
smo98542v0ar.push(smo98527);
const smo98528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98528.setAttribute('id', 'smo98528');
smo98542v0ar.push(smo98528);
smo98542v0.addTickables(smo98542v0ar)
fmtsmo985428.joinVoices([smo98542v0]);
const fmtsmo1014088 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo101408v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101408v0ar = [];
const smo101391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101391.setAttribute('id', 'smo101391');
smo101408v0ar.push(smo101391);
const smo101392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101392.setAttribute('id', 'smo101392');
smo101408v0ar.push(smo101392);
const smo101393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101393.setAttribute('id', 'smo101393');
smo101408v0ar.push(smo101393);
const smo101394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo101394.setAttribute('id', 'smo101394');
const smo1013941acc = new VF.Accidental('b');
smo101394.addModifier(smo1013941acc, 1);
smo101408v0ar.push(smo101394);
smo101408v0.addTickables(smo101408v0ar)
fmtsmo1014088.joinVoices([smo101408v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103344 = smo98522.getStemDirection();
smo98522.setStemDirection(dirsmo103344);
smo98524.setStemDirection(dirsmo103344);
smo98525.setStemDirection(dirsmo103344);
const smo103344 = new VF.Beam([smo98522,smo98524,smo98525]);
const dirsmo103345 = smo98526.getStemDirection();
smo98526.setStemDirection(dirsmo103345);
smo98527.setStemDirection(dirsmo103345);
smo98528.setStemDirection(dirsmo103345);
const smo103345 = new VF.Beam([smo98526,smo98527,smo98528]);
const dirsmo103348 = smo101391.getStemDirection();
smo101391.setStemDirection(dirsmo103348);
smo101392.setStemDirection(dirsmo103348);
const smo103348 = new VF.Beam([smo101391,smo101392]);
const dirsmo103349 = smo101393.getStemDirection();
smo101393.setStemDirection(dirsmo103349);
smo101394.setStemDirection(dirsmo103349);
const smo103349 = new VF.Beam([smo101393,smo101394]);
 
// formatting measures in staff group smo97609
fmtsmo985428.format([smo98542v0,smo101408v0], 281);
const stavesmo98542 = new VF.Stave(663, 779, 295);
stavesmo98542.setAttribute('id', 'stavesmo98542');
stavesmo98542.setBegBarType(VF.Barline.type.NONE);
stavesmo98542.setContext(context);
stavesmo98542.draw();
smo98542v0.draw(context, stavesmo98542);
smo103344.setContext(context);
smo103344.draw();
smo103345.setContext(context);
smo103345.draw();
const stavesmo101408 = new VF.Stave(663, 934, 295);
stavesmo101408.setAttribute('id', 'stavesmo101408');
stavesmo101408.setBegBarType(VF.Barline.type.NONE);
stavesmo101408.setContext(context);
stavesmo101408.draw();
smo101408v0.draw(context, stavesmo101408);
smo103348.setContext(context);
smo103348.draw();
smo103349.setContext(context);
smo103349.draw();
const fmtsmo985609 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo98560v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98560v0ar = [];
const smo98543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98543.setAttribute('id', 'smo98543');
smo98560v0ar.push(smo98543);
const smo98544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98544.setAttribute('id', 'smo98544');
smo98560v0ar.push(smo98544);
const smo98545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo98545.setAttribute('id', 'smo98545');
smo98560v0ar.push(smo98545);
const smo98546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo98546.setAttribute('id', 'smo98546');
smo98560v0ar.push(smo98546);
smo98560v0.addTickables(smo98560v0ar)
fmtsmo985609.joinVoices([smo98560v0]);
const fmtsmo1014269 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo101426v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101426v0ar = [];
const smo101409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo101409.setAttribute('id', 'smo101409');
smo101426v0ar.push(smo101409);
const smo101410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo101410.setAttribute('id', 'smo101410');
smo101426v0ar.push(smo101410);
const smo101411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo101411.setAttribute('id', 'smo101411');
smo101426v0ar.push(smo101411);
const smo101412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo101412.setAttribute('id', 'smo101412');
const smo1014120acc = new VF.Accidental('b');
smo101412.addModifier(smo1014120acc, 0);
const smo1014121acc = new VF.Accidental('b');
smo101412.addModifier(smo1014121acc, 1);
smo101426v0ar.push(smo101412);
smo101426v0.addTickables(smo101426v0ar)
fmtsmo1014269.joinVoices([smo101426v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103352 = smo98544.getStemDirection();
smo98544.setStemDirection(dirsmo103352);
smo98545.setStemDirection(dirsmo103352);
smo98546.setStemDirection(dirsmo103352);
const smo103352 = new VF.Beam([smo98544,smo98545,smo98546]);
const dirsmo103355 = smo101409.getStemDirection();
smo101409.setStemDirection(dirsmo103355);
smo101410.setStemDirection(dirsmo103355);
const smo103355 = new VF.Beam([smo101409,smo101410]);
const dirsmo103356 = smo101411.getStemDirection();
smo101411.setStemDirection(dirsmo103356);
smo101412.setStemDirection(dirsmo103356);
const smo103356 = new VF.Beam([smo101411,smo101412]);
 
// formatting measures in staff group smo97609
fmtsmo985609.format([smo98560v0,smo101426v0], 281);
const stavesmo98560 = new VF.Stave(958, 779, 295);
stavesmo98560.setAttribute('id', 'stavesmo98560');
stavesmo98560.setBegBarType(VF.Barline.type.NONE);
stavesmo98560.setContext(context);
stavesmo98560.draw();
smo98560v0.draw(context, stavesmo98560);
smo103352.setContext(context);
smo103352.draw();
const stavesmo101426 = new VF.Stave(958, 934, 295);
stavesmo101426.setAttribute('id', 'stavesmo101426');
stavesmo101426.setBegBarType(VF.Barline.type.NONE);
stavesmo101426.setContext(context);
stavesmo101426.draw();
smo101426v0.draw(context, stavesmo101426);
smo103355.setContext(context);
smo103355.draw();
smo103356.setContext(context);
smo103356.draw();
const fmtsmo9858310 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo98583v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98583v0ar = [];
const smo98561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo98561.setAttribute('id', 'smo98561');
const smo985610acc = new VF.Accidental('b');
smo98561.addModifier(smo985610acc, 0);
const smo985612acc = new VF.Accidental('b');
smo98561.addModifier(smo985612acc, 2);
smo98583v0ar.push(smo98561);
const smo98563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo98563.setAttribute('id', 'smo98563');
smo98583v0ar.push(smo98563);
const smo98564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98564.setAttribute('id', 'smo98564');
smo98583v0ar.push(smo98564);
const smo98565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98565.setAttribute('id', 'smo98565');
smo98583v0ar.push(smo98565);
const smo98566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98566.setAttribute('id', 'smo98566');
smo98583v0ar.push(smo98566);
const smo98567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo98567.setAttribute('id', 'smo98567');
smo98583v0ar.push(smo98567);
const smo98568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98568.setAttribute('id', 'smo98568');
smo98583v0ar.push(smo98568);
const smo98569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo98569.setAttribute('id', 'smo98569');
smo98583v0ar.push(smo98569);
smo98583v0.addTickables(smo98583v0ar)
fmtsmo9858310.joinVoices([smo98583v0]);
const fmtsmo10144410 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo101444v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101444v0ar = [];
const smo101427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo101427.setAttribute('id', 'smo101427');
smo101444v0ar.push(smo101427);
const smo101428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo101428.setAttribute('id', 'smo101428');
const smo1014281acc = new VF.Accidental('b');
smo101428.addModifier(smo1014281acc, 1);
smo101444v0ar.push(smo101428);
const smo101429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo101429.setAttribute('id', 'smo101429');
smo101444v0ar.push(smo101429);
const smo101430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo101430.setAttribute('id', 'smo101430');
smo101444v0ar.push(smo101430);
smo101444v0.addTickables(smo101444v0ar)
fmtsmo10144410.joinVoices([smo101444v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103359 = smo98561.getStemDirection();
smo98561.setStemDirection(dirsmo103359);
smo98563.setStemDirection(dirsmo103359);
smo98564.setStemDirection(dirsmo103359);
smo98565.setStemDirection(dirsmo103359);
const smo103359 = new VF.Beam([smo98561,smo98563,smo98564,smo98565]);
const dirsmo103360 = smo98566.getStemDirection();
smo98566.setStemDirection(dirsmo103360);
smo98567.setStemDirection(dirsmo103360);
smo98568.setStemDirection(dirsmo103360);
smo98569.setStemDirection(dirsmo103360);
const smo103360 = new VF.Beam([smo98566,smo98567,smo98568,smo98569]);
const dirsmo103363 = smo101427.getStemDirection();
smo101427.setStemDirection(dirsmo103363);
smo101428.setStemDirection(dirsmo103363);
const smo103363 = new VF.Beam([smo101427,smo101428]);
const dirsmo103364 = smo101429.getStemDirection();
smo101429.setStemDirection(dirsmo103364);
smo101430.setStemDirection(dirsmo103364);
const smo103364 = new VF.Beam([smo101429,smo101430]);
 
// formatting measures in staff group smo97609
fmtsmo9858310.format([smo98583v0,smo101444v0], 281);
const stavesmo98583 = new VF.Stave(1253, 779, 295);
stavesmo98583.setAttribute('id', 'stavesmo98583');
stavesmo98583.setBegBarType(VF.Barline.type.NONE);
stavesmo98583.setContext(context);
stavesmo98583.draw();
smo98583v0.draw(context, stavesmo98583);
smo103359.setContext(context);
smo103359.draw();
smo103360.setContext(context);
smo103360.draw();
const stavesmo101444 = new VF.Stave(1253, 934, 295);
stavesmo101444.setAttribute('id', 'stavesmo101444');
stavesmo101444.setBegBarType(VF.Barline.type.NONE);
stavesmo101444.setContext(context);
stavesmo101444.draw();
smo101444v0.draw(context, stavesmo101444);
smo103363.setContext(context);
smo103363.draw();
smo103364.setContext(context);
smo103364.draw();
const fmtsmo9860111 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo98601v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98601v0ar = [];
const smo98584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98584.setAttribute('id', 'smo98584');
smo98601v0ar.push(smo98584);
const smo98585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98585.setAttribute('id', 'smo98585');
smo98601v0ar.push(smo98585);
const smo98586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo98586.setAttribute('id', 'smo98586');
smo98601v0ar.push(smo98586);
const smo98587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo98587.setAttribute('id', 'smo98587');
const smo985870acc = new VF.Accidental('b');
smo98587.addModifier(smo985870acc, 0);
smo98601v0ar.push(smo98587);
smo98601v0.addTickables(smo98601v0ar)
fmtsmo9860111.joinVoices([smo98601v0]);
const fmtsmo10146211 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo101462v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101462v0ar = [];
const smo101445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101445.setAttribute('id', 'smo101445');
smo101462v0ar.push(smo101445);
const smo101446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101446.setAttribute('id', 'smo101446');
smo101462v0ar.push(smo101446);
const smo101447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo101447.setAttribute('id', 'smo101447');
smo101462v0ar.push(smo101447);
const smo101448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo101448.setAttribute('id', 'smo101448');
smo101462v0ar.push(smo101448);
smo101462v0.addTickables(smo101462v0ar)
fmtsmo10146211.joinVoices([smo101462v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103367 = smo98585.getStemDirection();
smo98585.setStemDirection(dirsmo103367);
smo98586.setStemDirection(dirsmo103367);
smo98587.setStemDirection(dirsmo103367);
const smo103367 = new VF.Beam([smo98585,smo98586,smo98587]);
const dirsmo103370 = smo101445.getStemDirection();
smo101445.setStemDirection(dirsmo103370);
smo101446.setStemDirection(dirsmo103370);
const smo103370 = new VF.Beam([smo101445,smo101446]);
const dirsmo103371 = smo101447.getStemDirection();
smo101447.setStemDirection(dirsmo103371);
smo101448.setStemDirection(dirsmo103371);
const smo103371 = new VF.Beam([smo101447,smo101448]);
 
// formatting measures in staff group smo97609
fmtsmo9860111.format([smo98601v0,smo101462v0], 281);
const stavesmo98601 = new VF.Stave(1548, 779, 295);
stavesmo98601.setAttribute('id', 'stavesmo98601');
stavesmo98601.setBegBarType(VF.Barline.type.NONE);
stavesmo98601.setContext(context);
stavesmo98601.draw();
smo98601v0.draw(context, stavesmo98601);
smo103367.setContext(context);
smo103367.draw();
const stavesmo101462 = new VF.Stave(1548, 934, 295);
stavesmo101462.setAttribute('id', 'stavesmo101462');
stavesmo101462.setBegBarType(VF.Barline.type.NONE);
stavesmo101462.setContext(context);
stavesmo101462.draw();
smo101462v0.draw(context, stavesmo101462);
smo103370.setContext(context);
smo103370.draw();
smo103371.setContext(context);
smo103371.draw();
const rightsmo97609stavesmo986011 = new VF.StaveConnector(stavesmo98601, stavesmo101462).setType(0);
rightsmo97609stavesmo986011.setContext(context).draw();
const fmtsmo9862212 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo98622v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98622v0ar = [];
const smo98602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98602.setAttribute('id', 'smo98602');
smo98622v0ar.push(smo98602);
const smo98604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98604.setAttribute('id', 'smo98604');
smo98622v0ar.push(smo98604);
const smo98605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98605.setAttribute('id', 'smo98605');
smo98622v0ar.push(smo98605);
const smo98606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98606.setAttribute('id', 'smo98606');
smo98622v0ar.push(smo98606);
const smo98607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo98607.setAttribute('id', 'smo98607');
smo98622v0ar.push(smo98607);
const smo98608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98608.setAttribute('id', 'smo98608');
smo98622v0ar.push(smo98608);
smo98622v0.addTickables(smo98622v0ar)
fmtsmo9862212.joinVoices([smo98622v0]);
const fmtsmo10148012 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo101480v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101480v0ar = [];
const smo101463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101463.setAttribute('id', 'smo101463');
smo101480v0ar.push(smo101463);
const smo101464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101464.setAttribute('id', 'smo101464');
smo101480v0ar.push(smo101464);
const smo101465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101465.setAttribute('id', 'smo101465');
smo101480v0ar.push(smo101465);
const smo101466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo101466.setAttribute('id', 'smo101466');
const smo1014661acc = new VF.Accidental('b');
smo101466.addModifier(smo1014661acc, 1);
smo101480v0ar.push(smo101466);
smo101480v0.addTickables(smo101480v0ar)
fmtsmo10148012.joinVoices([smo101480v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103382 = smo98602.getStemDirection();
smo98602.setStemDirection(dirsmo103382);
smo98604.setStemDirection(dirsmo103382);
smo98605.setStemDirection(dirsmo103382);
const smo103382 = new VF.Beam([smo98602,smo98604,smo98605]);
const dirsmo103383 = smo98606.getStemDirection();
smo98606.setStemDirection(dirsmo103383);
smo98607.setStemDirection(dirsmo103383);
smo98608.setStemDirection(dirsmo103383);
const smo103383 = new VF.Beam([smo98606,smo98607,smo98608]);
const dirsmo103386 = smo101463.getStemDirection();
smo101463.setStemDirection(dirsmo103386);
smo101464.setStemDirection(dirsmo103386);
const smo103386 = new VF.Beam([smo101463,smo101464]);
const dirsmo103387 = smo101465.getStemDirection();
smo101465.setStemDirection(dirsmo103387);
smo101466.setStemDirection(dirsmo103387);
const smo103387 = new VF.Beam([smo101465,smo101466]);
 
// formatting measures in staff group smo97609
fmtsmo9862212.format([smo98622v0,smo101480v0], 237);
const stavesmo98622 = new VF.Stave(73, 1132, 295);
stavesmo98622.setAttribute('id', 'stavesmo98622');
stavesmo98622.setBegBarType(1);
stavesmo98622.addClef('treble');
stavesmo98622.setContext(context);
stavesmo98622.draw();
smo98622v0.draw(context, stavesmo98622);
smo103382.setContext(context);
smo103382.draw();
smo103383.setContext(context);
smo103383.draw();
const stavesmo101480 = new VF.Stave(73, 1287, 295);
stavesmo101480.setAttribute('id', 'stavesmo101480');
stavesmo101480.setBegBarType(1);
stavesmo101480.addClef('bass');
stavesmo101480.setContext(context);
stavesmo101480.draw();
smo101480v0.draw(context, stavesmo101480);
smo103386.setContext(context);
smo103386.draw();
smo103387.setContext(context);
smo103387.draw();
const leftsmo97609stavesmo986221 = new VF.StaveConnector(stavesmo98622, stavesmo101480).setType(3);
leftsmo97609stavesmo986221.setContext(context).draw();
const fmtsmo9864113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo98641v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98641v0ar = [];
const smo98623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98623.setAttribute('id', 'smo98623');
smo98641v0ar.push(smo98623);
const smo98624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98624.setAttribute('id', 'smo98624');
smo98641v0ar.push(smo98624);
const smo98625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98625.setAttribute('id', 'smo98625');
smo98641v0ar.push(smo98625);
const smo98626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98626.setAttribute('id', 'smo98626');
smo98641v0ar.push(smo98626);
const smo98627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo98627.setAttribute('id', 'smo98627');
const smo986270acc = new VF.Accidental('b');
smo98627.addModifier(smo986270acc, 0);
const smo986271acc = new VF.Accidental('b');
smo98627.addModifier(smo986271acc, 1);
const smo986272acc = new VF.Accidental('b');
smo98627.addModifier(smo986272acc, 2);
smo98641v0ar.push(smo98627);
smo98641v0.addTickables(smo98641v0ar)
fmtsmo9864113.joinVoices([smo98641v0]);
const fmtsmo10149813 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo101498v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101498v0ar = [];
const smo101481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo101481.setAttribute('id', 'smo101481');
smo101498v0ar.push(smo101481);
const smo101482 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo101482.setAttribute('id', 'smo101482');
smo101498v0ar.push(smo101482);
const smo101483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo101483.setAttribute('id', 'smo101483');
smo101498v0ar.push(smo101483);
const smo101484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo101484.setAttribute('id', 'smo101484');
smo101498v0ar.push(smo101484);
smo101498v0.addTickables(smo101498v0ar)
fmtsmo10149813.joinVoices([smo101498v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103390 = smo98624.getStemDirection();
smo98624.setStemDirection(dirsmo103390);
smo98625.setStemDirection(dirsmo103390);
smo98626.setStemDirection(dirsmo103390);
smo98627.setStemDirection(dirsmo103390);
const smo103390 = new VF.Beam([smo98624,smo98625,smo98626,smo98627]);
const dirsmo103393 = smo101481.getStemDirection();
smo101481.setStemDirection(dirsmo103393);
smo101482.setStemDirection(dirsmo103393);
const smo103393 = new VF.Beam([smo101481,smo101482]);
const dirsmo103394 = smo101483.getStemDirection();
smo101483.setStemDirection(dirsmo103394);
smo101484.setStemDirection(dirsmo103394);
const smo103394 = new VF.Beam([smo101483,smo101484]);
 
// formatting measures in staff group smo97609
fmtsmo9864113.format([smo98641v0,smo101498v0], 281);
const stavesmo98641 = new VF.Stave(368, 1132, 295);
stavesmo98641.setAttribute('id', 'stavesmo98641');
stavesmo98641.setBegBarType(VF.Barline.type.NONE);
stavesmo98641.setContext(context);
stavesmo98641.draw();
smo98641v0.draw(context, stavesmo98641);
smo103390.setContext(context);
smo103390.draw();
const stavesmo101498 = new VF.Stave(368, 1287, 295);
stavesmo101498.setAttribute('id', 'stavesmo101498');
stavesmo101498.setBegBarType(VF.Barline.type.NONE);
stavesmo101498.setContext(context);
stavesmo101498.draw();
smo101498v0.draw(context, stavesmo101498);
smo103393.setContext(context);
smo103393.draw();
smo103394.setContext(context);
smo103394.draw();
const fmtsmo9866314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo98663v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98663v0ar = [];
const smo98642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98642.setAttribute('id', 'smo98642');
smo98663v0ar.push(smo98642);
const smo98644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98644.setAttribute('id', 'smo98644');
smo98663v0ar.push(smo98644);
const smo98645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98645.setAttribute('id', 'smo98645');
smo98663v0ar.push(smo98645);
const smo98646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98646.setAttribute('id', 'smo98646');
smo98663v0ar.push(smo98646);
const smo98647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98647.setAttribute('id', 'smo98647');
smo98663v0ar.push(smo98647);
const smo98648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo98648.setAttribute('id', 'smo98648');
smo98663v0ar.push(smo98648);
const smo98649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98649.setAttribute('id', 'smo98649');
smo98663v0ar.push(smo98649);
smo98663v0.addTickables(smo98663v0ar)
fmtsmo9866314.joinVoices([smo98663v0]);
const fmtsmo10151614 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo101516v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101516v0ar = [];
const smo101499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101499.setAttribute('id', 'smo101499');
smo101516v0ar.push(smo101499);
const smo101500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101500.setAttribute('id', 'smo101500');
smo101516v0ar.push(smo101500);
const smo101501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101501.setAttribute('id', 'smo101501');
smo101516v0ar.push(smo101501);
const smo101502 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo101502.setAttribute('id', 'smo101502');
smo101516v0ar.push(smo101502);
smo101516v0.addTickables(smo101516v0ar)
fmtsmo10151614.joinVoices([smo101516v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103397 = smo98642.getStemDirection();
smo98642.setStemDirection(dirsmo103397);
smo98644.setStemDirection(dirsmo103397);
smo98645.setStemDirection(dirsmo103397);
smo98646.setStemDirection(dirsmo103397);
const smo103397 = new VF.Beam([smo98642,smo98644,smo98645,smo98646]);
const dirsmo103398 = smo98647.getStemDirection();
smo98647.setStemDirection(dirsmo103398);
smo98648.setStemDirection(dirsmo103398);
smo98649.setStemDirection(dirsmo103398);
const smo103398 = new VF.Beam([smo98647,smo98648,smo98649]);
const dirsmo103401 = smo101499.getStemDirection();
smo101499.setStemDirection(dirsmo103401);
smo101500.setStemDirection(dirsmo103401);
const smo103401 = new VF.Beam([smo101499,smo101500]);
const dirsmo103402 = smo101501.getStemDirection();
smo101501.setStemDirection(dirsmo103402);
smo101502.setStemDirection(dirsmo103402);
const smo103402 = new VF.Beam([smo101501,smo101502]);
 
// formatting measures in staff group smo97609
fmtsmo9866314.format([smo98663v0,smo101516v0], 281);
const stavesmo98663 = new VF.Stave(663, 1132, 295);
stavesmo98663.setAttribute('id', 'stavesmo98663');
stavesmo98663.setBegBarType(VF.Barline.type.NONE);
stavesmo98663.setContext(context);
stavesmo98663.draw();
smo98663v0.draw(context, stavesmo98663);
smo103397.setContext(context);
smo103397.draw();
smo103398.setContext(context);
smo103398.draw();
const stavesmo101516 = new VF.Stave(663, 1287, 295);
stavesmo101516.setAttribute('id', 'stavesmo101516');
stavesmo101516.setBegBarType(VF.Barline.type.NONE);
stavesmo101516.setContext(context);
stavesmo101516.draw();
smo101516v0.draw(context, stavesmo101516);
smo103401.setContext(context);
smo103401.draw();
smo103402.setContext(context);
smo103402.draw();
const fmtsmo9868115 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo98681v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98681v0ar = [];
const smo98664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98664.setAttribute('id', 'smo98664');
smo98681v0ar.push(smo98664);
const smo98665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98665.setAttribute('id', 'smo98665');
smo98681v0ar.push(smo98665);
const smo98666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98666.setAttribute('id', 'smo98666');
smo98681v0ar.push(smo98666);
const smo98667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo98667.setAttribute('id', 'smo98667');
smo98681v0ar.push(smo98667);
smo98681v0.addTickables(smo98681v0ar)
fmtsmo9868115.joinVoices([smo98681v0]);
const fmtsmo10153415 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo101534v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101534v0ar = [];
const smo101517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101517.setAttribute('id', 'smo101517');
smo101534v0ar.push(smo101517);
const smo101518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo101518.setAttribute('id', 'smo101518');
smo101534v0ar.push(smo101518);
const smo101519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101519.setAttribute('id', 'smo101519');
smo101534v0ar.push(smo101519);
const smo101520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo101520.setAttribute('id', 'smo101520');
smo101534v0ar.push(smo101520);
smo101534v0.addTickables(smo101534v0ar)
fmtsmo10153415.joinVoices([smo101534v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103405 = smo98665.getStemDirection();
smo98665.setStemDirection(dirsmo103405);
smo98666.setStemDirection(dirsmo103405);
smo98667.setStemDirection(dirsmo103405);
const smo103405 = new VF.Beam([smo98665,smo98666,smo98667]);
const dirsmo103408 = smo101517.getStemDirection();
smo101517.setStemDirection(dirsmo103408);
smo101518.setStemDirection(dirsmo103408);
const smo103408 = new VF.Beam([smo101517,smo101518]);
 
// formatting measures in staff group smo97609
fmtsmo9868115.format([smo98681v0,smo101534v0], 281);
const stavesmo98681 = new VF.Stave(958, 1132, 295);
stavesmo98681.setAttribute('id', 'stavesmo98681');
stavesmo98681.setBegBarType(VF.Barline.type.NONE);
stavesmo98681.setContext(context);
stavesmo98681.draw();
smo98681v0.draw(context, stavesmo98681);
smo103405.setContext(context);
smo103405.draw();
const stavesmo101534 = new VF.Stave(958, 1287, 295);
stavesmo101534.setAttribute('id', 'stavesmo101534');
stavesmo101534.setBegBarType(VF.Barline.type.NONE);
stavesmo101534.setContext(context);
stavesmo101534.draw();
smo101534v0.draw(context, stavesmo101534);
smo103408.setContext(context);
smo103408.draw();
const fmtsmo9870316 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo98703v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98703v0ar = [];
const smo98682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98682.setAttribute('id', 'smo98682');
smo98703v0ar.push(smo98682);
const smo98683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98683.setAttribute('id', 'smo98683');
smo98703v0ar.push(smo98683);
const smo98684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo98684.setAttribute('id', 'smo98684');
smo98703v0ar.push(smo98684);
const smo98685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98685.setAttribute('id', 'smo98685');
smo98703v0ar.push(smo98685);
const smo98686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98686.setAttribute('id', 'smo98686');
smo98703v0ar.push(smo98686);
const smo98687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98687.setAttribute('id', 'smo98687');
smo98703v0ar.push(smo98687);
const smo98688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo98688.setAttribute('id', 'smo98688');
smo98703v0ar.push(smo98688);
const smo98689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98689.setAttribute('id', 'smo98689');
smo98703v0ar.push(smo98689);
smo98703v0.addTickables(smo98703v0ar)
fmtsmo9870316.joinVoices([smo98703v0]);
const fmtsmo10155216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo101552v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101552v0ar = [];
const smo101535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo101535.setAttribute('id', 'smo101535');
smo101552v0ar.push(smo101535);
const smo101536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101536.setAttribute('id', 'smo101536');
smo101552v0ar.push(smo101536);
const smo101537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo101537.setAttribute('id', 'smo101537');
const smo1015370acc = new VF.Accidental('b');
smo101537.addModifier(smo1015370acc, 0);
const smo1015371acc = new VF.Accidental('b');
smo101537.addModifier(smo1015371acc, 1);
smo101552v0ar.push(smo101537);
const smo101538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101538.setAttribute('id', 'smo101538');
smo101552v0ar.push(smo101538);
smo101552v0.addTickables(smo101552v0ar)
fmtsmo10155216.joinVoices([smo101552v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103411 = smo98682.getStemDirection();
smo98682.setStemDirection(dirsmo103411);
smo98683.setStemDirection(dirsmo103411);
smo98684.setStemDirection(dirsmo103411);
smo98685.setStemDirection(dirsmo103411);
const smo103411 = new VF.Beam([smo98682,smo98683,smo98684,smo98685]);
const dirsmo103412 = smo98686.getStemDirection();
smo98686.setStemDirection(dirsmo103412);
smo98687.setStemDirection(dirsmo103412);
smo98688.setStemDirection(dirsmo103412);
smo98689.setStemDirection(dirsmo103412);
const smo103412 = new VF.Beam([smo98686,smo98687,smo98688,smo98689]);
const dirsmo103415 = smo101535.getStemDirection();
smo101535.setStemDirection(dirsmo103415);
smo101536.setStemDirection(dirsmo103415);
const smo103415 = new VF.Beam([smo101535,smo101536]);
const dirsmo103416 = smo101537.getStemDirection();
smo101537.setStemDirection(dirsmo103416);
smo101538.setStemDirection(dirsmo103416);
const smo103416 = new VF.Beam([smo101537,smo101538]);
 
// formatting measures in staff group smo97609
fmtsmo9870316.format([smo98703v0,smo101552v0], 281);
const stavesmo98703 = new VF.Stave(1253, 1132, 295);
stavesmo98703.setAttribute('id', 'stavesmo98703');
stavesmo98703.setBegBarType(VF.Barline.type.NONE);
stavesmo98703.setContext(context);
stavesmo98703.draw();
smo98703v0.draw(context, stavesmo98703);
smo103411.setContext(context);
smo103411.draw();
smo103412.setContext(context);
smo103412.draw();
const stavesmo101552 = new VF.Stave(1253, 1287, 295);
stavesmo101552.setAttribute('id', 'stavesmo101552');
stavesmo101552.setBegBarType(VF.Barline.type.NONE);
stavesmo101552.setContext(context);
stavesmo101552.draw();
smo101552v0.draw(context, stavesmo101552);
smo103415.setContext(context);
smo103415.draw();
smo103416.setContext(context);
smo103416.draw();
const fmtsmo9872517 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo98725v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98725v0ar = [];
const smo98704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98704.setAttribute('id', 'smo98704');
smo98725v0ar.push(smo98704);
const smo98705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98705.setAttribute('id', 'smo98705');
smo98725v0ar.push(smo98705);
const smo98706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo98706.setAttribute('id', 'smo98706');
smo98725v0ar.push(smo98706);
const smo98707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98707.setAttribute('id', 'smo98707');
smo98725v0ar.push(smo98707);
const smo98708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo98708.setAttribute('id', 'smo98708');
smo98725v0ar.push(smo98708);
const smo98709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98709.setAttribute('id', 'smo98709');
smo98725v0ar.push(smo98709);
const smo98710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo98710.setAttribute('id', 'smo98710');
smo98725v0ar.push(smo98710);
const smo98711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo98711.setAttribute('id', 'smo98711');
smo98725v0ar.push(smo98711);
smo98725v0.addTickables(smo98725v0ar)
fmtsmo9872517.joinVoices([smo98725v0]);
const fmtsmo10157017 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo101570v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101570v0ar = [];
const smo101553 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo101553.setAttribute('id', 'smo101553');
smo101570v0ar.push(smo101553);
const smo101554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo101554.setAttribute('id', 'smo101554');
smo101570v0ar.push(smo101554);
const smo101555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo101555.setAttribute('id', 'smo101555');
const smo1015550acc = new VF.Accidental('b');
smo101555.addModifier(smo1015550acc, 0);
const smo1015551acc = new VF.Accidental('b');
smo101555.addModifier(smo1015551acc, 1);
smo101570v0ar.push(smo101555);
const smo101556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo101556.setAttribute('id', 'smo101556');
smo101570v0ar.push(smo101556);
smo101570v0.addTickables(smo101570v0ar)
fmtsmo10157017.joinVoices([smo101570v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103419 = smo98704.getStemDirection();
smo98704.setStemDirection(dirsmo103419);
smo98705.setStemDirection(dirsmo103419);
smo98706.setStemDirection(dirsmo103419);
smo98707.setStemDirection(dirsmo103419);
const smo103419 = new VF.Beam([smo98704,smo98705,smo98706,smo98707]);
const dirsmo103420 = smo98708.getStemDirection();
smo98708.setStemDirection(dirsmo103420);
smo98709.setStemDirection(dirsmo103420);
smo98710.setStemDirection(dirsmo103420);
smo98711.setStemDirection(dirsmo103420);
const smo103420 = new VF.Beam([smo98708,smo98709,smo98710,smo98711]);
const dirsmo103423 = smo101553.getStemDirection();
smo101553.setStemDirection(dirsmo103423);
smo101554.setStemDirection(dirsmo103423);
const smo103423 = new VF.Beam([smo101553,smo101554]);
const dirsmo103424 = smo101555.getStemDirection();
smo101555.setStemDirection(dirsmo103424);
smo101556.setStemDirection(dirsmo103424);
const smo103424 = new VF.Beam([smo101555,smo101556]);
 
// formatting measures in staff group smo97609
fmtsmo9872517.format([smo98725v0,smo101570v0], 281);
const stavesmo98725 = new VF.Stave(1548, 1132, 295);
stavesmo98725.setAttribute('id', 'stavesmo98725');
stavesmo98725.setBegBarType(VF.Barline.type.NONE);
stavesmo98725.setContext(context);
stavesmo98725.draw();
smo98725v0.draw(context, stavesmo98725);
smo103419.setContext(context);
smo103419.draw();
smo103420.setContext(context);
smo103420.draw();
const stavesmo101570 = new VF.Stave(1548, 1287, 295);
stavesmo101570.setAttribute('id', 'stavesmo101570');
stavesmo101570.setBegBarType(VF.Barline.type.NONE);
stavesmo101570.setContext(context);
stavesmo101570.draw();
smo101570v0.draw(context, stavesmo101570);
smo103423.setContext(context);
smo103423.draw();
smo103424.setContext(context);
smo103424.draw();
const rightsmo97609stavesmo987251 = new VF.StaveConnector(stavesmo98725, stavesmo101570).setType(0);
rightsmo97609stavesmo987251.setContext(context).draw();
const fmtsmo9874618 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo98746v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98746v0ar = [];
const smo98726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98726.setAttribute('id', 'smo98726');
smo98746v0ar.push(smo98726);
const smo98727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98727.setAttribute('id', 'smo98727');
smo98746v0ar.push(smo98727);
const smo98728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98728.setAttribute('id', 'smo98728');
smo98746v0ar.push(smo98728);
const smo98729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98729.setAttribute('id', 'smo98729');
smo98746v0ar.push(smo98729);
const smo98730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo98730.setAttribute('id', 'smo98730');
smo98746v0ar.push(smo98730);
const smo98731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo98731.setAttribute('id', 'smo98731');
smo98746v0ar.push(smo98731);
const smo98732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo98732.setAttribute('id', 'smo98732');
smo98746v0ar.push(smo98732);
smo98746v0.addTickables(smo98746v0ar)
fmtsmo9874618.joinVoices([smo98746v0]);
const fmtsmo10158818 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo101588v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101588v0ar = [];
const smo101571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101571.setAttribute('id', 'smo101571');
smo101588v0ar.push(smo101571);
const smo101572 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101572.setAttribute('id', 'smo101572');
smo101588v0ar.push(smo101572);
const smo101573 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101573.setAttribute('id', 'smo101573');
smo101588v0ar.push(smo101573);
const smo101574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo101574.setAttribute('id', 'smo101574');
smo101588v0ar.push(smo101574);
smo101588v0.addTickables(smo101588v0ar)
fmtsmo10158818.joinVoices([smo101588v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103435 = smo98726.getStemDirection();
smo98726.setStemDirection(dirsmo103435);
smo98727.setStemDirection(dirsmo103435);
smo98728.setStemDirection(dirsmo103435);
smo98729.setStemDirection(dirsmo103435);
const smo103435 = new VF.Beam([smo98726,smo98727,smo98728,smo98729]);
const dirsmo103436 = smo98730.getStemDirection();
smo98730.setStemDirection(dirsmo103436);
smo98731.setStemDirection(dirsmo103436);
smo98732.setStemDirection(dirsmo103436);
const smo103436 = new VF.Beam([smo98730,smo98731,smo98732]);
const dirsmo103439 = smo101571.getStemDirection();
smo101571.setStemDirection(dirsmo103439);
smo101572.setStemDirection(dirsmo103439);
const smo103439 = new VF.Beam([smo101571,smo101572]);
const dirsmo103440 = smo101573.getStemDirection();
smo101573.setStemDirection(dirsmo103440);
smo101574.setStemDirection(dirsmo103440);
const smo103440 = new VF.Beam([smo101573,smo101574]);
 
// formatting measures in staff group smo97609
fmtsmo9874618.format([smo98746v0,smo101588v0], 237);
const stavesmo98746 = new VF.Stave(73, 1481, 295);
stavesmo98746.setAttribute('id', 'stavesmo98746');
stavesmo98746.setBegBarType(1);
stavesmo98746.addClef('treble');
stavesmo98746.setContext(context);
stavesmo98746.draw();
smo98746v0.draw(context, stavesmo98746);
smo103435.setContext(context);
smo103435.draw();
smo103436.setContext(context);
smo103436.draw();
const stavesmo101588 = new VF.Stave(73, 1625, 295);
stavesmo101588.setAttribute('id', 'stavesmo101588');
stavesmo101588.setBegBarType(1);
stavesmo101588.addClef('bass');
stavesmo101588.setContext(context);
stavesmo101588.draw();
smo101588v0.draw(context, stavesmo101588);
smo103439.setContext(context);
smo103439.draw();
smo103440.setContext(context);
smo103440.draw();
const leftsmo97609stavesmo987461 = new VF.StaveConnector(stavesmo98746, stavesmo101588).setType(3);
leftsmo97609stavesmo987461.setContext(context).draw();
const fmtsmo9876519 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo98765v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98765v0ar = [];
const smo98747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98747.setAttribute('id', 'smo98747');
smo98765v0ar.push(smo98747);
const smo98748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98748.setAttribute('id', 'smo98748');
smo98765v0ar.push(smo98748);
const smo98749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo98749.setAttribute('id', 'smo98749');
smo98765v0ar.push(smo98749);
const smo98750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo98750.setAttribute('id', 'smo98750');
const smo987500acc = new VF.Accidental('b');
smo98750.addModifier(smo987500acc, 0);
smo98765v0ar.push(smo98750);
smo98765v0.addTickables(smo98765v0ar)
fmtsmo9876519.joinVoices([smo98765v0]);
const fmtsmo10160719 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo101607v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101607v0ar = [];
const smo101589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo101589.setAttribute('id', 'smo101589');
smo101607v0ar.push(smo101589);
const smo101590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101590.setAttribute('id', 'smo101590');
smo101607v0ar.push(smo101590);
const smo101591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo101591.setAttribute('id', 'smo101591');
smo101607v0ar.push(smo101591);
const smo101592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo101592.setAttribute('id', 'smo101592');
smo101607v0ar.push(smo101592);
smo101607v0.addTickables(smo101607v0ar)
fmtsmo10160719.joinVoices([smo101607v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103443 = smo98748.getStemDirection();
smo98748.setStemDirection(dirsmo103443);
smo98749.setStemDirection(dirsmo103443);
smo98750.setStemDirection(dirsmo103443);
const smo103443 = new VF.Beam([smo98748,smo98749,smo98750]);
const dirsmo103445 = smo101589.getStemDirection();
smo101589.setStemDirection(dirsmo103445);
smo101590.setStemDirection(dirsmo103445);
const smo103445 = new VF.Beam([smo101589,smo101590]);
const dirsmo103446 = smo101591.getStemDirection();
smo101591.setStemDirection(dirsmo103446);
smo101592.setStemDirection(dirsmo103446);
const smo103446 = new VF.Beam([smo101591,smo101592]);
 
// formatting measures in staff group smo97609
fmtsmo9876519.format([smo98765v0,smo101607v0], 277);
const stavesmo98765 = new VF.Stave(368, 1481, 295);
stavesmo98765.setAttribute('id', 'stavesmo98765');
stavesmo98765.setBegBarType(VF.Barline.type.NONE);
stavesmo98765.setEndBarType(5);
stavesmo98765.setContext(context);
stavesmo98765.draw();
smo98765v0.draw(context, stavesmo98765);
smo103443.setContext(context);
smo103443.draw();
const stavesmo101607 = new VF.Stave(368, 1625, 295);
stavesmo101607.setAttribute('id', 'stavesmo101607');
stavesmo101607.setBegBarType(VF.Barline.type.NONE);
stavesmo101607.setEndBarType(5);
stavesmo101607.setContext(context);
stavesmo101607.draw();
smo101607v0.draw(context, stavesmo101607);
smo103445.setContext(context);
smo103445.draw();
smo103446.setContext(context);
smo103446.draw();
const fmtsmo9878520 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo98785v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98785v0ar = [];
const smo98766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98766.setAttribute('id', 'smo98766');
smo98785v0ar.push(smo98766);
const smo98767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo98767.setAttribute('id', 'smo98767');
smo98785v0ar.push(smo98767);
const smo98768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo98768.setAttribute('id', 'smo98768');
smo98785v0ar.push(smo98768);
const smo98769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo98769.setAttribute('id', 'smo98769');
smo98785v0ar.push(smo98769);
const smo98770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo98770.setAttribute('id', 'smo98770');
const smo987700acc = new VF.Accidental('b');
smo98770.addModifier(smo987700acc, 0);
const smo987701acc = new VF.Accidental('b');
smo98770.addModifier(smo987701acc, 1);
const smo987702acc = new VF.Accidental('b');
smo98770.addModifier(smo987702acc, 2);
smo98785v0ar.push(smo98770);
smo98785v0.addTickables(smo98785v0ar)
fmtsmo9878520.joinVoices([smo98785v0]);
const fmtsmo10162620 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo101626v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101626v0ar = [];
const smo101608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo101608.setAttribute('id', 'smo101608');
smo101626v0ar.push(smo101608);
const smo101609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo101609.setAttribute('id', 'smo101609');
smo101626v0ar.push(smo101609);
const smo101610 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo101610.setAttribute('id', 'smo101610');
smo101626v0ar.push(smo101610);
const smo101611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo101611.setAttribute('id', 'smo101611');
smo101626v0ar.push(smo101611);
smo101626v0.addTickables(smo101626v0ar)
fmtsmo10162620.joinVoices([smo101626v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103448 = smo98767.getStemDirection();
smo98767.setStemDirection(dirsmo103448);
smo98768.setStemDirection(dirsmo103448);
smo98769.setStemDirection(dirsmo103448);
smo98770.setStemDirection(dirsmo103448);
const smo103448 = new VF.Beam([smo98767,smo98768,smo98769,smo98770]);
const dirsmo103451 = smo101608.getStemDirection();
smo101608.setStemDirection(dirsmo103451);
smo101609.setStemDirection(dirsmo103451);
const smo103451 = new VF.Beam([smo101608,smo101609]);
 
// formatting measures in staff group smo97609
fmtsmo9878520.format([smo98785v0,smo101626v0], 281);
const stavesmo98785 = new VF.Stave(663, 1481, 295);
stavesmo98785.setAttribute('id', 'stavesmo98785');
stavesmo98785.setBegBarType(VF.Barline.type.NONE);
stavesmo98785.setContext(context);
stavesmo98785.draw();
smo98785v0.draw(context, stavesmo98785);
smo103448.setContext(context);
smo103448.draw();
const stavesmo101626 = new VF.Stave(663, 1625, 295);
stavesmo101626.setAttribute('id', 'stavesmo101626');
stavesmo101626.setBegBarType(VF.Barline.type.NONE);
stavesmo101626.setContext(context);
stavesmo101626.draw();
smo101626v0.draw(context, stavesmo101626);
smo103451.setContext(context);
smo103451.draw();
const fmtsmo9880621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo98806v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98806v0ar = [];
const smo98786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98786.setAttribute('id', 'smo98786');
smo98806v0ar.push(smo98786);
const smo98787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo98787.setAttribute('id', 'smo98787');
smo98806v0ar.push(smo98787);
const smo98788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98788.setAttribute('id', 'smo98788');
smo98806v0ar.push(smo98788);
const smo98789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98789.setAttribute('id', 'smo98789');
smo98806v0ar.push(smo98789);
const smo98790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo98790.setAttribute('id', 'smo98790');
smo98806v0ar.push(smo98790);
const smo98791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo98791.setAttribute('id', 'smo98791');
smo98806v0ar.push(smo98791);
const smo98792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo98792.setAttribute('id', 'smo98792');
const smo987920acc = new VF.Accidental('b');
smo98792.addModifier(smo987920acc, 0);
const smo987921acc = new VF.Accidental('b');
smo98792.addModifier(smo987921acc, 1);
const smo987922acc = new VF.Accidental('b');
smo98792.addModifier(smo987922acc, 2);
smo98806v0ar.push(smo98792);
smo98806v0.addTickables(smo98806v0ar)
fmtsmo9880621.joinVoices([smo98806v0]);
const fmtsmo10164421 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo101644v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101644v0ar = [];
const smo101627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo101627.setAttribute('id', 'smo101627');
smo101644v0ar.push(smo101627);
const smo101628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101628.setAttribute('id', 'smo101628');
smo101644v0ar.push(smo101628);
const smo101629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101629.setAttribute('id', 'smo101629');
smo101644v0ar.push(smo101629);
const smo101630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101630.setAttribute('id', 'smo101630');
smo101644v0ar.push(smo101630);
smo101644v0.addTickables(smo101644v0ar)
fmtsmo10164421.joinVoices([smo101644v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103454 = smo98786.getStemDirection();
smo98786.setStemDirection(dirsmo103454);
smo98787.setStemDirection(dirsmo103454);
smo98788.setStemDirection(dirsmo103454);
const smo103454 = new VF.Beam([smo98786,smo98787,smo98788]);
const dirsmo103455 = smo98789.getStemDirection();
smo98789.setStemDirection(dirsmo103455);
smo98790.setStemDirection(dirsmo103455);
smo98791.setStemDirection(dirsmo103455);
smo98792.setStemDirection(dirsmo103455);
const smo103455 = new VF.Beam([smo98789,smo98790,smo98791,smo98792]);
const dirsmo103457 = smo101627.getStemDirection();
smo101627.setStemDirection(dirsmo103457);
smo101628.setStemDirection(dirsmo103457);
const smo103457 = new VF.Beam([smo101627,smo101628]);
const dirsmo103458 = smo101629.getStemDirection();
smo101629.setStemDirection(dirsmo103458);
smo101630.setStemDirection(dirsmo103458);
const smo103458 = new VF.Beam([smo101629,smo101630]);
 
// formatting measures in staff group smo97609
fmtsmo9880621.format([smo98806v0,smo101644v0], 272);
const stavesmo98806 = new VF.Stave(958, 1481, 295);
stavesmo98806.setAttribute('id', 'stavesmo98806');
stavesmo98806.setBegBarType(4);
stavesmo98806.setContext(context);
stavesmo98806.draw();
smo98806v0.draw(context, stavesmo98806);
smo103454.setContext(context);
smo103454.draw();
smo103455.setContext(context);
smo103455.draw();
const stavesmo101644 = new VF.Stave(958, 1625, 295);
stavesmo101644.setAttribute('id', 'stavesmo101644');
stavesmo101644.setBegBarType(4);
stavesmo101644.setContext(context);
stavesmo101644.draw();
smo101644v0.draw(context, stavesmo101644);
smo103457.setContext(context);
smo103457.draw();
smo103458.setContext(context);
smo103458.draw();
const fmtsmo9882722 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo98827v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98827v0ar = [];
const smo98807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98807.setAttribute('id', 'smo98807');
smo98827v0ar.push(smo98807);
const smo98808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo98808.setAttribute('id', 'smo98808');
smo98827v0ar.push(smo98808);
const smo98809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98809.setAttribute('id', 'smo98809');
smo98827v0ar.push(smo98809);
const smo98810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98810.setAttribute('id', 'smo98810');
smo98827v0ar.push(smo98810);
const smo98811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98811.setAttribute('id', 'smo98811');
smo98827v0ar.push(smo98811);
const smo98812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98812.setAttribute('id', 'smo98812');
smo98827v0ar.push(smo98812);
const smo98813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo98813.setAttribute('id', 'smo98813');
smo98827v0ar.push(smo98813);
smo98827v0.addTickables(smo98827v0ar)
fmtsmo9882722.joinVoices([smo98827v0]);
const fmtsmo10166222 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo101662v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101662v0ar = [];
const smo101645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101645.setAttribute('id', 'smo101645');
smo101662v0ar.push(smo101645);
const smo101646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101646.setAttribute('id', 'smo101646');
smo101662v0ar.push(smo101646);
const smo101647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101647.setAttribute('id', 'smo101647');
smo101662v0ar.push(smo101647);
const smo101648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101648.setAttribute('id', 'smo101648');
smo101662v0ar.push(smo101648);
smo101662v0.addTickables(smo101662v0ar)
fmtsmo10166222.joinVoices([smo101662v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103460 = smo98807.getStemDirection();
smo98807.setStemDirection(dirsmo103460);
smo98808.setStemDirection(dirsmo103460);
smo98809.setStemDirection(dirsmo103460);
const smo103460 = new VF.Beam([smo98807,smo98808,smo98809]);
const dirsmo103461 = smo98810.getStemDirection();
smo98810.setStemDirection(dirsmo103461);
smo98811.setStemDirection(dirsmo103461);
smo98812.setStemDirection(dirsmo103461);
smo98813.setStemDirection(dirsmo103461);
const smo103461 = new VF.Beam([smo98810,smo98811,smo98812,smo98813]);
const dirsmo103464 = smo101645.getStemDirection();
smo101645.setStemDirection(dirsmo103464);
smo101646.setStemDirection(dirsmo103464);
const smo103464 = new VF.Beam([smo101645,smo101646]);
const dirsmo103465 = smo101647.getStemDirection();
smo101647.setStemDirection(dirsmo103465);
smo101648.setStemDirection(dirsmo103465);
const smo103465 = new VF.Beam([smo101647,smo101648]);
 
// formatting measures in staff group smo97609
fmtsmo9882722.format([smo98827v0,smo101662v0], 281);
const stavesmo98827 = new VF.Stave(1253, 1481, 295);
stavesmo98827.setAttribute('id', 'stavesmo98827');
stavesmo98827.setBegBarType(VF.Barline.type.NONE);
stavesmo98827.setContext(context);
stavesmo98827.draw();
smo98827v0.draw(context, stavesmo98827);
smo103460.setContext(context);
smo103460.draw();
smo103461.setContext(context);
smo103461.draw();
const stavesmo101662 = new VF.Stave(1253, 1625, 295);
stavesmo101662.setAttribute('id', 'stavesmo101662');
stavesmo101662.setBegBarType(VF.Barline.type.NONE);
stavesmo101662.setContext(context);
stavesmo101662.draw();
smo101662v0.draw(context, stavesmo101662);
smo103464.setContext(context);
smo103464.draw();
smo103465.setContext(context);
smo103465.draw();
const fmtsmo9884923 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo98849v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98849v0ar = [];
const smo98828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo98828.setAttribute('id', 'smo98828');
smo98849v0ar.push(smo98828);
const smo98829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo98829.setAttribute('id', 'smo98829');
smo98849v0ar.push(smo98829);
const smo98830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98830.setAttribute('id', 'smo98830');
smo98849v0ar.push(smo98830);
const smo98831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo98831.setAttribute('id', 'smo98831');
smo98849v0ar.push(smo98831);
const smo98832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98832.setAttribute('id', 'smo98832');
smo98849v0ar.push(smo98832);
const smo98833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo98833.setAttribute('id', 'smo98833');
smo98849v0ar.push(smo98833);
const smo98834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo98834.setAttribute('id', 'smo98834');
smo98849v0ar.push(smo98834);
const smo98835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo98835.setAttribute('id', 'smo98835');
smo98849v0ar.push(smo98835);
smo98849v0.addTickables(smo98849v0ar)
fmtsmo9884923.joinVoices([smo98849v0]);
const fmtsmo10168023 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo101680v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101680v0ar = [];
const smo101663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo101663.setAttribute('id', 'smo101663');
smo101680v0ar.push(smo101663);
const smo101664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo101664.setAttribute('id', 'smo101664');
smo101680v0ar.push(smo101664);
const smo101665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo101665.setAttribute('id', 'smo101665');
smo101680v0ar.push(smo101665);
const smo101666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo101666.setAttribute('id', 'smo101666');
const smo1016660acc = new VF.Accidental('b');
smo101666.addModifier(smo1016660acc, 0);
smo101680v0ar.push(smo101666);
smo101680v0.addTickables(smo101680v0ar)
fmtsmo10168023.joinVoices([smo101680v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103468 = smo98828.getStemDirection();
smo98828.setStemDirection(dirsmo103468);
smo98829.setStemDirection(dirsmo103468);
smo98830.setStemDirection(dirsmo103468);
smo98831.setStemDirection(dirsmo103468);
const smo103468 = new VF.Beam([smo98828,smo98829,smo98830,smo98831]);
const dirsmo103469 = smo98832.getStemDirection();
smo98832.setStemDirection(dirsmo103469);
smo98833.setStemDirection(dirsmo103469);
smo98834.setStemDirection(dirsmo103469);
smo98835.setStemDirection(dirsmo103469);
const smo103469 = new VF.Beam([smo98832,smo98833,smo98834,smo98835]);
const dirsmo103472 = smo101663.getStemDirection();
smo101663.setStemDirection(dirsmo103472);
smo101664.setStemDirection(dirsmo103472);
const smo103472 = new VF.Beam([smo101663,smo101664]);
const dirsmo103473 = smo101665.getStemDirection();
smo101665.setStemDirection(dirsmo103473);
smo101666.setStemDirection(dirsmo103473);
const smo103473 = new VF.Beam([smo101665,smo101666]);
 
// formatting measures in staff group smo97609
fmtsmo9884923.format([smo98849v0,smo101680v0], 281);
const stavesmo98849 = new VF.Stave(1548, 1481, 295);
stavesmo98849.setAttribute('id', 'stavesmo98849');
stavesmo98849.setBegBarType(VF.Barline.type.NONE);
stavesmo98849.setContext(context);
stavesmo98849.draw();
smo98849v0.draw(context, stavesmo98849);
smo103468.setContext(context);
smo103468.draw();
smo103469.setContext(context);
smo103469.draw();
const stavesmo101680 = new VF.Stave(1548, 1625, 295);
stavesmo101680.setAttribute('id', 'stavesmo101680');
stavesmo101680.setBegBarType(VF.Barline.type.NONE);
stavesmo101680.setContext(context);
stavesmo101680.draw();
smo101680v0.draw(context, stavesmo101680);
smo103472.setContext(context);
smo103472.draw();
smo103473.setContext(context);
smo103473.draw();
const rightsmo97609stavesmo988491 = new VF.StaveConnector(stavesmo98849, stavesmo101680).setType(0);
rightsmo97609stavesmo988491.setContext(context).draw();
const fmtsmo9887124 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo98871v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98871v0ar = [];
const smo98850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo98850.setAttribute('id', 'smo98850');
smo98871v0ar.push(smo98850);
const smo98851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98851.setAttribute('id', 'smo98851');
smo98871v0ar.push(smo98851);
const smo98852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo98852.setAttribute('id', 'smo98852');
smo98871v0ar.push(smo98852);
const smo98853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo98853.setAttribute('id', 'smo98853');
smo98871v0ar.push(smo98853);
const smo98854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo98854.setAttribute('id', 'smo98854');
smo98871v0ar.push(smo98854);
const smo98855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo98855.setAttribute('id', 'smo98855');
smo98871v0ar.push(smo98855);
const smo98856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo98856.setAttribute('id', 'smo98856');
smo98871v0ar.push(smo98856);
const smo98857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo98857.setAttribute('id', 'smo98857');
smo98871v0ar.push(smo98857);
smo98871v0.addTickables(smo98871v0ar)
fmtsmo9887124.joinVoices([smo98871v0]);
const fmtsmo10169824 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo101698v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101698v0ar = [];
const smo101681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo101681.setAttribute('id', 'smo101681');
smo101698v0ar.push(smo101681);
const smo101682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101682.setAttribute('id', 'smo101682');
smo101698v0ar.push(smo101682);
const smo101683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101683.setAttribute('id', 'smo101683');
smo101698v0ar.push(smo101683);
const smo101684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101684.setAttribute('id', 'smo101684');
smo101698v0ar.push(smo101684);
smo101698v0.addTickables(smo101698v0ar)
fmtsmo10169824.joinVoices([smo101698v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103484 = smo98850.getStemDirection();
smo98850.setStemDirection(dirsmo103484);
smo98851.setStemDirection(dirsmo103484);
smo98852.setStemDirection(dirsmo103484);
smo98853.setStemDirection(dirsmo103484);
const smo103484 = new VF.Beam([smo98850,smo98851,smo98852,smo98853]);
const dirsmo103485 = smo98854.getStemDirection();
smo98854.setStemDirection(dirsmo103485);
smo98855.setStemDirection(dirsmo103485);
smo98856.setStemDirection(dirsmo103485);
smo98857.setStemDirection(dirsmo103485);
const smo103485 = new VF.Beam([smo98854,smo98855,smo98856,smo98857]);
const dirsmo103488 = smo101681.getStemDirection();
smo101681.setStemDirection(dirsmo103488);
smo101682.setStemDirection(dirsmo103488);
const smo103488 = new VF.Beam([smo101681,smo101682]);
const dirsmo103489 = smo101683.getStemDirection();
smo101683.setStemDirection(dirsmo103489);
smo101684.setStemDirection(dirsmo103489);
const smo103489 = new VF.Beam([smo101683,smo101684]);
 
// formatting measures in staff group smo97609
fmtsmo9887124.format([smo98871v0,smo101698v0], 237);
const stavesmo98871 = new VF.Stave(73, 1828, 295);
stavesmo98871.setAttribute('id', 'stavesmo98871');
stavesmo98871.setBegBarType(1);
stavesmo98871.addClef('treble');
stavesmo98871.setContext(context);
stavesmo98871.draw();
smo98871v0.draw(context, stavesmo98871);
smo103484.setContext(context);
smo103484.draw();
smo103485.setContext(context);
smo103485.draw();
const stavesmo101698 = new VF.Stave(73, 1988, 295);
stavesmo101698.setAttribute('id', 'stavesmo101698');
stavesmo101698.setBegBarType(1);
stavesmo101698.addClef('bass');
stavesmo101698.setContext(context);
stavesmo101698.draw();
smo101698v0.draw(context, stavesmo101698);
smo103488.setContext(context);
smo103488.draw();
smo103489.setContext(context);
smo103489.draw();
const leftsmo97609stavesmo988711 = new VF.StaveConnector(stavesmo98871, stavesmo101698).setType(3);
leftsmo97609stavesmo988711.setContext(context).draw();
const fmtsmo9889225 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo98892v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98892v0ar = [];
const smo98872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98872.setAttribute('id', 'smo98872');
smo98892v0ar.push(smo98872);
const smo98873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo98873.setAttribute('id', 'smo98873');
smo98892v0ar.push(smo98873);
const smo98874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98874.setAttribute('id', 'smo98874');
smo98892v0ar.push(smo98874);
const smo98875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98875.setAttribute('id', 'smo98875');
smo98892v0ar.push(smo98875);
const smo98876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo98876.setAttribute('id', 'smo98876');
smo98892v0ar.push(smo98876);
const smo98877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo98877.setAttribute('id', 'smo98877');
smo98892v0ar.push(smo98877);
const smo98878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo98878.setAttribute('id', 'smo98878');
const smo988780acc = new VF.Accidental('b');
smo98878.addModifier(smo988780acc, 0);
const smo988781acc = new VF.Accidental('b');
smo98878.addModifier(smo988781acc, 1);
const smo988782acc = new VF.Accidental('b');
smo98878.addModifier(smo988782acc, 2);
smo98892v0ar.push(smo98878);
smo98892v0.addTickables(smo98892v0ar)
fmtsmo9889225.joinVoices([smo98892v0]);
const fmtsmo10171625 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo101716v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101716v0ar = [];
const smo101699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101699.setAttribute('id', 'smo101699');
smo101716v0ar.push(smo101699);
const smo101700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101700.setAttribute('id', 'smo101700');
smo101716v0ar.push(smo101700);
const smo101701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101701.setAttribute('id', 'smo101701');
smo101716v0ar.push(smo101701);
const smo101702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101702.setAttribute('id', 'smo101702');
smo101716v0ar.push(smo101702);
smo101716v0.addTickables(smo101716v0ar)
fmtsmo10171625.joinVoices([smo101716v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103492 = smo98872.getStemDirection();
smo98872.setStemDirection(dirsmo103492);
smo98873.setStemDirection(dirsmo103492);
smo98874.setStemDirection(dirsmo103492);
const smo103492 = new VF.Beam([smo98872,smo98873,smo98874]);
const dirsmo103493 = smo98875.getStemDirection();
smo98875.setStemDirection(dirsmo103493);
smo98876.setStemDirection(dirsmo103493);
smo98877.setStemDirection(dirsmo103493);
smo98878.setStemDirection(dirsmo103493);
const smo103493 = new VF.Beam([smo98875,smo98876,smo98877,smo98878]);
const dirsmo103496 = smo101699.getStemDirection();
smo101699.setStemDirection(dirsmo103496);
smo101700.setStemDirection(dirsmo103496);
const smo103496 = new VF.Beam([smo101699,smo101700]);
const dirsmo103497 = smo101701.getStemDirection();
smo101701.setStemDirection(dirsmo103497);
smo101702.setStemDirection(dirsmo103497);
const smo103497 = new VF.Beam([smo101701,smo101702]);
 
// formatting measures in staff group smo97609
fmtsmo9889225.format([smo98892v0,smo101716v0], 281);
const stavesmo98892 = new VF.Stave(368, 1828, 295);
stavesmo98892.setAttribute('id', 'stavesmo98892');
stavesmo98892.setBegBarType(VF.Barline.type.NONE);
stavesmo98892.setContext(context);
stavesmo98892.draw();
smo98892v0.draw(context, stavesmo98892);
smo103492.setContext(context);
smo103492.draw();
smo103493.setContext(context);
smo103493.draw();
const stavesmo101716 = new VF.Stave(368, 1988, 295);
stavesmo101716.setAttribute('id', 'stavesmo101716');
stavesmo101716.setBegBarType(VF.Barline.type.NONE);
stavesmo101716.setContext(context);
stavesmo101716.draw();
smo101716v0.draw(context, stavesmo101716);
smo103496.setContext(context);
smo103496.draw();
smo103497.setContext(context);
smo103497.draw();
const fmtsmo9891326 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo98913v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98913v0ar = [];
const smo98893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98893.setAttribute('id', 'smo98893');
smo98913v0ar.push(smo98893);
const smo98894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo98894.setAttribute('id', 'smo98894');
smo98913v0ar.push(smo98894);
const smo98895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98895.setAttribute('id', 'smo98895');
smo98913v0ar.push(smo98895);
const smo98896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98896.setAttribute('id', 'smo98896');
smo98913v0ar.push(smo98896);
const smo98897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo98897.setAttribute('id', 'smo98897');
smo98913v0ar.push(smo98897);
const smo98898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo98898.setAttribute('id', 'smo98898');
smo98913v0ar.push(smo98898);
const smo98899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo98899.setAttribute('id', 'smo98899');
const smo988990acc = new VF.Accidental('b');
smo98899.addModifier(smo988990acc, 0);
smo98913v0ar.push(smo98899);
smo98913v0.addTickables(smo98913v0ar)
fmtsmo9891326.joinVoices([smo98913v0]);
const fmtsmo10173426 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo101734v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101734v0ar = [];
const smo101717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo101717.setAttribute('id', 'smo101717');
smo101734v0ar.push(smo101717);
const smo101718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101718.setAttribute('id', 'smo101718');
smo101734v0ar.push(smo101718);
const smo101719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo101719.setAttribute('id', 'smo101719');
smo101734v0ar.push(smo101719);
const smo101720 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo101720.setAttribute('id', 'smo101720');
const smo1017200acc = new VF.Accidental('b');
smo101720.addModifier(smo1017200acc, 0);
smo101734v0ar.push(smo101720);
smo101734v0.addTickables(smo101734v0ar)
fmtsmo10173426.joinVoices([smo101734v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103500 = smo98893.getStemDirection();
smo98893.setStemDirection(dirsmo103500);
smo98894.setStemDirection(dirsmo103500);
smo98895.setStemDirection(dirsmo103500);
const smo103500 = new VF.Beam([smo98893,smo98894,smo98895]);
const dirsmo103501 = smo98896.getStemDirection();
smo98896.setStemDirection(dirsmo103501);
smo98897.setStemDirection(dirsmo103501);
smo98898.setStemDirection(dirsmo103501);
smo98899.setStemDirection(dirsmo103501);
const smo103501 = new VF.Beam([smo98896,smo98897,smo98898,smo98899]);
const dirsmo103504 = smo101717.getStemDirection();
smo101717.setStemDirection(dirsmo103504);
smo101718.setStemDirection(dirsmo103504);
const smo103504 = new VF.Beam([smo101717,smo101718]);
const dirsmo103505 = smo101719.getStemDirection();
smo101719.setStemDirection(dirsmo103505);
smo101720.setStemDirection(dirsmo103505);
const smo103505 = new VF.Beam([smo101719,smo101720]);
 
// formatting measures in staff group smo97609
fmtsmo9891326.format([smo98913v0,smo101734v0], 281);
const stavesmo98913 = new VF.Stave(663, 1828, 295);
stavesmo98913.setAttribute('id', 'stavesmo98913');
stavesmo98913.setBegBarType(VF.Barline.type.NONE);
stavesmo98913.setContext(context);
stavesmo98913.draw();
smo98913v0.draw(context, stavesmo98913);
smo103500.setContext(context);
smo103500.draw();
smo103501.setContext(context);
smo103501.draw();
const stavesmo101734 = new VF.Stave(663, 1988, 295);
stavesmo101734.setAttribute('id', 'stavesmo101734');
stavesmo101734.setBegBarType(VF.Barline.type.NONE);
stavesmo101734.setContext(context);
stavesmo101734.draw();
smo101734v0.draw(context, stavesmo101734);
smo103504.setContext(context);
smo103504.draw();
smo103505.setContext(context);
smo103505.draw();
const fmtsmo9893427 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo98934v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98934v0ar = [];
const smo98914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo98914.setAttribute('id', 'smo98914');
smo98934v0ar.push(smo98914);
const smo98915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo98915.setAttribute('id', 'smo98915');
smo98934v0ar.push(smo98915);
const smo98916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo98916.setAttribute('id', 'smo98916');
const smo989161acc = new VF.Accidental('b');
smo98916.addModifier(smo989161acc, 1);
smo98934v0ar.push(smo98916);
const smo98917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo98917.setAttribute('id', 'smo98917');
smo98934v0ar.push(smo98917);
const smo98918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo98918.setAttribute('id', 'smo98918');
smo98934v0ar.push(smo98918);
const smo98919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo98919.setAttribute('id', 'smo98919');
smo98934v0ar.push(smo98919);
const smo98920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo98920.setAttribute('id', 'smo98920');
smo98934v0ar.push(smo98920);
smo98934v0.addTickables(smo98934v0ar)
fmtsmo9893427.joinVoices([smo98934v0]);
const fmtsmo10175227 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo101752v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101752v0ar = [];
const smo101735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo101735.setAttribute('id', 'smo101735');
smo101752v0ar.push(smo101735);
const smo101736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo101736.setAttribute('id', 'smo101736');
smo101752v0ar.push(smo101736);
const smo101737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo101737.setAttribute('id', 'smo101737');
smo101752v0ar.push(smo101737);
const smo101738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
smo101738.setAttribute('id', 'smo101738');
smo101752v0ar.push(smo101738);
smo101752v0.addTickables(smo101752v0ar)
fmtsmo10175227.joinVoices([smo101752v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103508 = smo98914.getStemDirection();
smo98914.setStemDirection(dirsmo103508);
smo98915.setStemDirection(dirsmo103508);
smo98916.setStemDirection(dirsmo103508);
const smo103508 = new VF.Beam([smo98914,smo98915,smo98916]);
const dirsmo103509 = smo98917.getStemDirection();
smo98917.setStemDirection(dirsmo103509);
smo98918.setStemDirection(dirsmo103509);
smo98919.setStemDirection(dirsmo103509);
smo98920.setStemDirection(dirsmo103509);
const smo103509 = new VF.Beam([smo98917,smo98918,smo98919,smo98920]);
const dirsmo103512 = smo101735.getStemDirection();
smo101735.setStemDirection(dirsmo103512);
smo101736.setStemDirection(dirsmo103512);
const smo103512 = new VF.Beam([smo101735,smo101736]);
const dirsmo103513 = smo101737.getStemDirection();
smo101737.setStemDirection(dirsmo103513);
smo101738.setStemDirection(dirsmo103513);
const smo103513 = new VF.Beam([smo101737,smo101738]);
 
// formatting measures in staff group smo97609
fmtsmo9893427.format([smo98934v0,smo101752v0], 281);
const stavesmo98934 = new VF.Stave(958, 1828, 295);
stavesmo98934.setAttribute('id', 'stavesmo98934');
stavesmo98934.setBegBarType(VF.Barline.type.NONE);
stavesmo98934.setContext(context);
stavesmo98934.draw();
smo98934v0.draw(context, stavesmo98934);
smo103508.setContext(context);
smo103508.draw();
smo103509.setContext(context);
smo103509.draw();
const stavesmo101752 = new VF.Stave(958, 1988, 295);
stavesmo101752.setAttribute('id', 'stavesmo101752');
stavesmo101752.setBegBarType(VF.Barline.type.NONE);
stavesmo101752.setContext(context);
stavesmo101752.draw();
smo101752v0.draw(context, stavesmo101752);
smo103512.setContext(context);
smo103512.draw();
smo103513.setContext(context);
smo103513.draw();
const fmtsmo9895328 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo98953v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98953v0ar = [];
const smo98935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo98935.setAttribute('id', 'smo98935');
smo98953v0ar.push(smo98935);
const smo98936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo98936.setAttribute('id', 'smo98936');
smo98953v0ar.push(smo98936);
const smo98937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo98937.setAttribute('id', 'smo98937');
smo98953v0ar.push(smo98937);
const smo98938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo98938.setAttribute('id', 'smo98938');
smo98953v0ar.push(smo98938);
const smo98939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo98939.setAttribute('id', 'smo98939');
const smo989390acc = new VF.Accidental('b');
smo98939.addModifier(smo989390acc, 0);
const smo989391acc = new VF.Accidental('b');
smo98939.addModifier(smo989391acc, 1);
const smo989392acc = new VF.Accidental('b');
smo98939.addModifier(smo989392acc, 2);
smo98953v0ar.push(smo98939);
smo98953v0.addTickables(smo98953v0ar)
fmtsmo9895328.joinVoices([smo98953v0]);
const fmtsmo10177028 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo101770v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101770v0ar = [];
const smo101753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo101753.setAttribute('id', 'smo101753');
smo101770v0ar.push(smo101753);
const smo101754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo101754.setAttribute('id', 'smo101754');
smo101770v0ar.push(smo101754);
const smo101755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo101755.setAttribute('id', 'smo101755');
smo101770v0ar.push(smo101755);
const smo101756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo101756.setAttribute('id', 'smo101756');
smo101770v0ar.push(smo101756);
smo101770v0.addTickables(smo101770v0ar)
fmtsmo10177028.joinVoices([smo101770v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103516 = smo98936.getStemDirection();
smo98936.setStemDirection(dirsmo103516);
smo98937.setStemDirection(dirsmo103516);
smo98938.setStemDirection(dirsmo103516);
smo98939.setStemDirection(dirsmo103516);
const smo103516 = new VF.Beam([smo98936,smo98937,smo98938,smo98939]);
const dirsmo103519 = smo101753.getStemDirection();
smo101753.setStemDirection(dirsmo103519);
smo101754.setStemDirection(dirsmo103519);
const smo103519 = new VF.Beam([smo101753,smo101754]);
const dirsmo103520 = smo101755.getStemDirection();
smo101755.setStemDirection(dirsmo103520);
smo101756.setStemDirection(dirsmo103520);
const smo103520 = new VF.Beam([smo101755,smo101756]);
 
// formatting measures in staff group smo97609
fmtsmo9895328.format([smo98953v0,smo101770v0], 281);
const stavesmo98953 = new VF.Stave(1253, 1828, 295);
stavesmo98953.setAttribute('id', 'stavesmo98953');
stavesmo98953.setBegBarType(VF.Barline.type.NONE);
stavesmo98953.setContext(context);
stavesmo98953.draw();
smo98953v0.draw(context, stavesmo98953);
smo103516.setContext(context);
smo103516.draw();
const stavesmo101770 = new VF.Stave(1253, 1988, 295);
stavesmo101770.setAttribute('id', 'stavesmo101770');
stavesmo101770.setBegBarType(VF.Barline.type.NONE);
stavesmo101770.setContext(context);
stavesmo101770.draw();
smo101770v0.draw(context, stavesmo101770);
smo103519.setContext(context);
smo103519.draw();
smo103520.setContext(context);
smo103520.draw();
const fmtsmo9897529 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo98975v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo98975v0ar = [];
const smo98954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98954.setAttribute('id', 'smo98954');
smo98975v0ar.push(smo98954);
const smo98956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo98956.setAttribute('id', 'smo98956');
smo98975v0ar.push(smo98956);
const smo98957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98957.setAttribute('id', 'smo98957');
smo98975v0ar.push(smo98957);
const smo98958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo98958.setAttribute('id', 'smo98958');
smo98975v0ar.push(smo98958);
const smo98959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo98959.setAttribute('id', 'smo98959');
smo98975v0ar.push(smo98959);
const smo98960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo98960.setAttribute('id', 'smo98960');
smo98975v0ar.push(smo98960);
const smo98961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo98961.setAttribute('id', 'smo98961');
const smo989610acc = new VF.Accidental('b');
smo98961.addModifier(smo989610acc, 0);
const smo989611acc = new VF.Accidental('b');
smo98961.addModifier(smo989611acc, 1);
const smo989612acc = new VF.Accidental('b');
smo98961.addModifier(smo989612acc, 2);
smo98975v0ar.push(smo98961);
smo98975v0.addTickables(smo98975v0ar)
fmtsmo9897529.joinVoices([smo98975v0]);
const fmtsmo10178829 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo101788v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101788v0ar = [];
const smo101771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo101771.setAttribute('id', 'smo101771');
smo101788v0ar.push(smo101771);
const smo101772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101772.setAttribute('id', 'smo101772');
smo101788v0ar.push(smo101772);
const smo101773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo101773.setAttribute('id', 'smo101773');
smo101788v0ar.push(smo101773);
const smo101774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo101774.setAttribute('id', 'smo101774');
smo101788v0ar.push(smo101774);
smo101788v0.addTickables(smo101788v0ar)
fmtsmo10178829.joinVoices([smo101788v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103523 = smo98954.getStemDirection();
smo98954.setStemDirection(dirsmo103523);
smo98956.setStemDirection(dirsmo103523);
smo98957.setStemDirection(dirsmo103523);
const smo103523 = new VF.Beam([smo98954,smo98956,smo98957]);
const dirsmo103524 = smo98958.getStemDirection();
smo98958.setStemDirection(dirsmo103524);
smo98959.setStemDirection(dirsmo103524);
smo98960.setStemDirection(dirsmo103524);
smo98961.setStemDirection(dirsmo103524);
const smo103524 = new VF.Beam([smo98958,smo98959,smo98960,smo98961]);
const dirsmo103527 = smo101771.getStemDirection();
smo101771.setStemDirection(dirsmo103527);
smo101772.setStemDirection(dirsmo103527);
const smo103527 = new VF.Beam([smo101771,smo101772]);
const dirsmo103528 = smo101773.getStemDirection();
smo101773.setStemDirection(dirsmo103528);
smo101774.setStemDirection(dirsmo103528);
const smo103528 = new VF.Beam([smo101773,smo101774]);
 
// formatting measures in staff group smo97609
fmtsmo9897529.format([smo98975v0,smo101788v0], 281);
const stavesmo98975 = new VF.Stave(1548, 1828, 295);
stavesmo98975.setAttribute('id', 'stavesmo98975');
stavesmo98975.setBegBarType(VF.Barline.type.NONE);
stavesmo98975.setContext(context);
stavesmo98975.draw();
smo98975v0.draw(context, stavesmo98975);
smo103523.setContext(context);
smo103523.draw();
smo103524.setContext(context);
smo103524.draw();
const stavesmo101788 = new VF.Stave(1548, 1988, 295);
stavesmo101788.setAttribute('id', 'stavesmo101788');
stavesmo101788.setBegBarType(VF.Barline.type.NONE);
stavesmo101788.setContext(context);
stavesmo101788.draw();
smo101788v0.draw(context, stavesmo101788);
smo103527.setContext(context);
smo103527.draw();
smo103528.setContext(context);
smo103528.draw();
const rightsmo97609stavesmo989751 = new VF.StaveConnector(stavesmo98975, stavesmo101788).setType(0);
rightsmo97609stavesmo989751.setContext(context).draw();
// modifier from 0-5-0-2 to 0-5-0-4
const smo104543 = new VF.StaveHairpin({ first_note: smo98465, last_note: smo98465,
       firstNote: smo98465, lastNote: smo98465 });
smo104543.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104543.setContext(context).setPosition(4).draw();
// modifier from 0-7-0-2 to 0-8-0-0
const smo104544 = new VF.StaveHairpin({ first_note: smo98506, last_note: smo98506,
       firstNote: smo98506, lastNote: smo98506 });
smo104544.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104544.setContext(context).setPosition(4).draw();
// modifier from 0-9-0-2 to 0-10-0-0
const smo104545 = new VF.StaveHairpin({ first_note: smo98545, last_note: smo98545,
       firstNote: smo98545, lastNote: smo98545 });
smo104545.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104545.setContext(context).setPosition(4).draw();
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-13-0-2 to 0-13-0-4
const smo104548 = new VF.StaveHairpin({ first_note: smo98625, last_note: smo98625,
       firstNote: smo98625, lastNote: smo98625 });
smo104548.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104548.setContext(context).setPosition(4).draw();
// modifier from 0-19-0-2 to 0-20-0-0
const smo104549 = new VF.StaveHairpin({ first_note: smo98749, last_note: smo98749,
       firstNote: smo98749, lastNote: smo98749 });
smo104549.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104549.setContext(context).setPosition(4).draw();
// modifier from 0-0-0-3 to 0-0-0-4
const smo104550 = new VF.StaveTie({ first_note: smo98356, last_note: smo98357, 
          firstNote: smo98356, lastNote: smo98357, first_indices: [0], last_indices: [0]});
smo104550.setContext(context).draw();
// modifier from 0-0-1-3 to 0-0-1-4
const smo104551 = new VF.StaveTie({ first_note: smo98363, last_note: smo98364, 
          firstNote: smo98363, lastNote: smo98364, first_indices: [0], last_indices: [0]});
smo104551.setContext(context).draw();
// modifier from 0-1-0-3 to 0-1-0-4
const smo104552 = new VF.StaveTie({ first_note: smo98384, last_note: smo98385, 
          firstNote: smo98384, lastNote: smo98385, first_indices: [0], last_indices: [0]});
smo104552.setContext(context).draw();
// modifier from 0-2-0-3 to 0-2-0-4
const smo104553 = new VF.StaveTie({ first_note: smo98405, last_note: smo98406, 
          firstNote: smo98405, lastNote: smo98406, first_indices: [0], last_indices: [0]});
smo104553.setContext(context).draw();
// modifier from 0-4-0-5 to 0-5-0-0
const smo104554 = new VF.StaveTie({ first_note: smo98448, last_note: smo98463, 
          firstNote: smo98448, lastNote: smo98463, first_indices: [0], last_indices: [0]});
smo104554.setContext(context).draw();
// modifier from 0-5-0-0 to 0-5-0-1
const smo104555 = new VF.StaveTie({ first_note: smo98463, last_note: smo98464, 
          firstNote: smo98463, lastNote: smo98464, first_indices: [0], last_indices: [0]});
smo104555.setContext(context).draw();
// modifier from 0-6-0-3 to 0-6-0-4
const smo104556 = new VF.StaveTie({ first_note: smo98486, last_note: smo98487, 
          firstNote: smo98486, lastNote: smo98487, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104556.setContext(context).draw();
// modifier from 0-7-0-0 to 0-7-0-1
const smo104557 = new VF.StaveTie({ first_note: smo98504, last_note: smo98505, 
          firstNote: smo98504, lastNote: smo98505, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104557.setContext(context).draw();
// modifier from 0-8-0-5 to 0-9-0-0
const smo104558 = new VF.StaveTie({ first_note: smo98528, last_note: smo98543, 
          firstNote: smo98528, lastNote: smo98543, first_indices: [0], last_indices: [0]});
smo104558.setContext(context).draw();
// modifier from 0-9-0-0 to 0-9-0-1
const smo104559 = new VF.StaveTie({ first_note: smo98543, last_note: smo98544, 
          firstNote: smo98543, lastNote: smo98544, first_indices: [0], last_indices: [0]});
smo104559.setContext(context).draw();
// modifier from 0-10-0-3 to 0-10-0-4
const smo104560 = new VF.StaveTie({ first_note: smo98565, last_note: smo98566, 
          firstNote: smo98565, lastNote: smo98566, first_indices: [0,1], last_indices: [0,1]});
smo104560.setContext(context).draw();
// modifier from 0-11-0-0 to 0-11-0-1
const smo104561 = new VF.StaveTie({ first_note: smo98584, last_note: smo98585, 
          firstNote: smo98584, lastNote: smo98585, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104561.setContext(context).draw();
// modifier from 0-12-0-5 to 0-13-0-0
const smo104562 = new VF.StaveTie({ first_note: smo98608, last_note: smo98623, 
          firstNote: smo98608, lastNote: smo98623, first_indices: [0], last_indices: [0]});
smo104562.setContext(context).draw();
// modifier from 0-13-0-0 to 0-13-0-1
const smo104563 = new VF.StaveTie({ first_note: smo98623, last_note: smo98624, 
          firstNote: smo98623, lastNote: smo98624, first_indices: [0], last_indices: [0]});
smo104563.setContext(context).draw();
// modifier from 0-14-0-3 to 0-14-0-4
const smo104564 = new VF.StaveTie({ first_note: smo98646, last_note: smo98647, 
          firstNote: smo98646, lastNote: smo98647, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104564.setContext(context).draw();
// modifier from 0-15-0-0 to 0-15-0-1
const smo104565 = new VF.StaveTie({ first_note: smo98664, last_note: smo98665, 
          firstNote: smo98664, lastNote: smo98665, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104565.setContext(context).draw();
// modifier from 0-16-0-3 to 0-16-0-4
const smo104566 = new VF.StaveTie({ first_note: smo98685, last_note: smo98686, 
          firstNote: smo98685, lastNote: smo98686, first_indices: [0,1], last_indices: [0,1]});
smo104566.setContext(context).draw();
// modifier from 0-17-0-3 to 0-17-0-4
const smo104567 = new VF.StaveTie({ first_note: smo98707, last_note: smo98708, 
          firstNote: smo98707, lastNote: smo98708, first_indices: [0,1], last_indices: [0,1]});
smo104567.setContext(context).draw();
// modifier from 0-18-0-3 to 0-18-0-4
const smo104568 = new VF.StaveTie({ first_note: smo98729, last_note: smo98730, 
          firstNote: smo98729, lastNote: smo98730, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104568.setContext(context).draw();
// modifier from 0-19-0-0 to 0-19-0-1
const smo104569 = new VF.StaveTie({ first_note: smo98747, last_note: smo98748, 
          firstNote: smo98747, lastNote: smo98748, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104569.setContext(context).draw();
// modifier from 0-20-0-0 to 0-20-0-1
const smo104570 = new VF.StaveTie({ first_note: smo98766, last_note: smo98767, 
          firstNote: smo98766, lastNote: smo98767, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104570.setContext(context).draw();
// modifier from 0-21-0-2 to 0-21-0-3
const smo104571 = new VF.StaveTie({ first_note: smo98788, last_note: smo98789, 
          firstNote: smo98788, lastNote: smo98789, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104571.setContext(context).draw();
// modifier from 0-22-0-2 to 0-22-0-3
const smo104572 = new VF.StaveTie({ first_note: smo98809, last_note: smo98810, 
          firstNote: smo98809, lastNote: smo98810, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104572.setContext(context).draw();
// modifier from 0-25-0-2 to 0-25-0-3
const smo104573 = new VF.StaveTie({ first_note: smo98874, last_note: smo98875, 
          firstNote: smo98874, lastNote: smo98875, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104573.setContext(context).draw();
// modifier from 0-26-0-2 to 0-26-0-3
const smo104574 = new VF.StaveTie({ first_note: smo98895, last_note: smo98896, 
          firstNote: smo98895, lastNote: smo98896, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104574.setContext(context).draw();
// modifier from 0-27-0-2 to 0-27-0-3
const smo104575 = new VF.StaveTie({ first_note: smo98916, last_note: smo98917, 
          firstNote: smo98916, lastNote: smo98917, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104575.setContext(context).draw();
// modifier from 0-28-0-0 to 0-28-0-1
const smo104576 = new VF.StaveTie({ first_note: smo98935, last_note: smo98936, 
          firstNote: smo98935, lastNote: smo98936, first_indices: [0,1], last_indices: [0,1]});
smo104576.setContext(context).draw();
// modifier from 0-29-0-2 to 0-29-0-3
const smo104577 = new VF.StaveTie({ first_note: smo98957, last_note: smo98958, 
          firstNote: smo98957, lastNote: smo98958, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104577.setContext(context).draw();
// modifier from 1-1-0-3 to 1-1-0-4
const smo104578 = new VF.StaveTie({ first_note: smo101261, last_note: smo101262, 
          firstNote: smo101261, lastNote: smo101262, first_indices: [0], last_indices: [0]});
smo104578.setContext(context).draw();
// modifier from 1-2-0-3 to 1-2-0-4
const smo104579 = new VF.StaveTie({ first_note: smo101282, last_note: smo101283, 
          firstNote: smo101282, lastNote: smo101283, first_indices: [0], last_indices: [0]});
smo104579.setContext(context).draw();
const smo98752smo98765 = new VF.Volta(5, '1', 368, 20);
smo98752smo98765.setContext(context).draw(stavesmo98765, -1 * 0);
const smo98771smo98785 = new VF.Volta(5, '2', 663, 20);
smo98771smo98785.setContext(context).draw(stavesmo98785, -1 * 0);
}
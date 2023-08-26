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
const fmtsmo1004820 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo100482v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100482v0ar = [];
const smo100454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo100454.setAttribute('id', 'smo100454');
smo100482v0ar.push(smo100454);
const smo100456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/6/n"]}'))
smo100456.setAttribute('id', 'smo100456');
smo100482v0ar.push(smo100456);
const smo100457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo100457.setAttribute('id', 'smo100457');
smo100482v0ar.push(smo100457);
const smo100458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo100458.setAttribute('id', 'smo100458');
smo100482v0ar.push(smo100458);
const smo100459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo100459.setAttribute('id', 'smo100459');
smo100482v0ar.push(smo100459);
const smo100460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo100460.setAttribute('id', 'smo100460');
smo100482v0ar.push(smo100460);
const smo100461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo100461.setAttribute('id', 'smo100461');
smo100482v0ar.push(smo100461);
smo100482v0.addTickables(smo100482v0ar)
fmtsmo1004820.joinVoices([smo100482v0]);
const smo100482v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100482v1ar = [];
const smo100462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo100462.setAttribute('id', 'smo100462');
smo100462.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100462);
const smo100463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo100463.setAttribute('id', 'smo100463');
smo100463.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100463);
const smo100464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100464.setAttribute('id', 'smo100464');
smo100464.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100464);
const smo100465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo100465.setAttribute('id', 'smo100465');
smo100465.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100465);
const smo100466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo100466.setAttribute('id', 'smo100466');
smo100466.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100466);
const smo100467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo100467.setAttribute('id', 'smo100467');
smo100467.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100467);
const smo100468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo100468.setAttribute('id', 'smo100468');
smo100468.setStyle({ fillStyle: "#115511" });
smo100482v1ar.push(smo100468);
smo100482v1.addTickables(smo100482v1ar)
fmtsmo1004820.joinVoices([smo100482v1]);
const fmtsmo1033590 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo103359v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103359v0ar = [];
const smo103345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo103345.setAttribute('id', 'smo103345');
smo103359v0ar.push(smo103345);
smo103359v0.addTickables(smo103359v0ar)
fmtsmo1033590.joinVoices([smo103359v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105380 = smo100454.getStemDirection();
smo100454.setStemDirection(dirsmo105380);
smo100456.setStemDirection(dirsmo105380);
smo100457.setStemDirection(dirsmo105380);
smo100458.setStemDirection(dirsmo105380);
const smo105380 = new VF.Beam([smo100454,smo100456,smo100457,smo100458]);
const dirsmo105381 = smo100459.getStemDirection();
smo100459.setStemDirection(dirsmo105381);
smo100460.setStemDirection(dirsmo105381);
smo100461.setStemDirection(dirsmo105381);
const smo105381 = new VF.Beam([smo100459,smo100460,smo100461]);
const dirsmo105382 = smo100462.getStemDirection();
smo100462.setStemDirection(dirsmo105382);
smo100463.setStemDirection(dirsmo105382);
smo100464.setStemDirection(dirsmo105382);
smo100465.setStemDirection(dirsmo105382);
const smo105382 = new VF.Beam([smo100462,smo100463,smo100464,smo100465]);
const dirsmo105383 = smo100466.getStemDirection();
smo100466.setStemDirection(dirsmo105383);
smo100467.setStemDirection(dirsmo105383);
smo100468.setStemDirection(dirsmo105383);
const smo105383 = new VF.Beam([smo100466,smo100467,smo100468]);
 
// formatting measures in staff group smo99711
fmtsmo1004820.format([smo100482v0,smo100482v1,smo103359v0], 213);
const stavesmo100482 = new VF.Stave(73, 406, 295);
stavesmo100482.setAttribute('id', 'stavesmo100482');
stavesmo100482.setBegBarType(1);
stavesmo100482.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo100482.addClef('treble');
stavesmo100482.addTimeSignature('2/4');
stavesmo100482.setContext(context);
stavesmo100482.draw();
smo100482v0.draw(context, stavesmo100482);
smo100482v1.draw(context, stavesmo100482);
smo105380.setContext(context);
smo105380.draw();
smo105381.setContext(context);
smo105381.draw();
smo105382.setContext(context);
smo105382.draw();
smo105383.setContext(context);
smo105383.draw();
const stavesmo103359 = new VF.Stave(73, 545, 295);
stavesmo103359.setAttribute('id', 'stavesmo103359');
stavesmo103359.setBegBarType(1);
stavesmo103359.addClef('bass');
stavesmo103359.addTimeSignature('2/4');
stavesmo103359.setContext(context);
stavesmo103359.draw();
smo103359v0.draw(context, stavesmo103359);
const leftsmo99711stavesmo1004821 = new VF.StaveConnector(stavesmo100482, stavesmo103359).setType(3);
leftsmo99711stavesmo1004821.setContext(context).draw();
const fmtsmo1005031 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo100503v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100503v0ar = [];
const smo100483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo100483.setAttribute('id', 'smo100483');
smo100503v0ar.push(smo100483);
const smo100484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo100484.setAttribute('id', 'smo100484');
smo100503v0ar.push(smo100484);
const smo100485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100485.setAttribute('id', 'smo100485');
smo100503v0ar.push(smo100485);
const smo100486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo100486.setAttribute('id', 'smo100486');
smo100503v0ar.push(smo100486);
const smo100487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo100487.setAttribute('id', 'smo100487');
smo100503v0ar.push(smo100487);
const smo100488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo100488.setAttribute('id', 'smo100488');
smo100503v0ar.push(smo100488);
const smo100489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo100489.setAttribute('id', 'smo100489');
smo100503v0ar.push(smo100489);
smo100503v0.addTickables(smo100503v0ar)
fmtsmo1005031.joinVoices([smo100503v0]);
const fmtsmo1033801 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo103380v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103380v0ar = [];
const smo103360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo103360.setAttribute('id', 'smo103360');
smo103380v0ar.push(smo103360);
const smo103361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo103361.setAttribute('id', 'smo103361');
smo103380v0ar.push(smo103361);
const smo103362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo103362.setAttribute('id', 'smo103362');
smo103380v0ar.push(smo103362);
const smo103363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo103363.setAttribute('id', 'smo103363');
smo103380v0ar.push(smo103363);
const smo103364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo103364.setAttribute('id', 'smo103364');
smo103380v0ar.push(smo103364);
const smo103365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo103365.setAttribute('id', 'smo103365');
smo103380v0ar.push(smo103365);
const smo103366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo103366.setAttribute('id', 'smo103366');
smo103380v0ar.push(smo103366);
smo103380v0.addTickables(smo103380v0ar)
fmtsmo1033801.joinVoices([smo103380v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105388 = smo100483.getStemDirection();
smo100483.setStemDirection(dirsmo105388);
smo100484.setStemDirection(dirsmo105388);
smo100485.setStemDirection(dirsmo105388);
smo100486.setStemDirection(dirsmo105388);
const smo105388 = new VF.Beam([smo100483,smo100484,smo100485,smo100486]);
const dirsmo105389 = smo100487.getStemDirection();
smo100487.setStemDirection(dirsmo105389);
smo100488.setStemDirection(dirsmo105389);
smo100489.setStemDirection(dirsmo105389);
const smo105389 = new VF.Beam([smo100487,smo100488,smo100489]);
const dirsmo105392 = smo103360.getStemDirection();
smo103360.setStemDirection(dirsmo105392);
smo103361.setStemDirection(dirsmo105392);
smo103362.setStemDirection(dirsmo105392);
smo103363.setStemDirection(dirsmo105392);
const smo105392 = new VF.Beam([smo103360,smo103361,smo103362,smo103363]);
const dirsmo105393 = smo103364.getStemDirection();
smo103364.setStemDirection(dirsmo105393);
smo103365.setStemDirection(dirsmo105393);
smo103366.setStemDirection(dirsmo105393);
const smo105393 = new VF.Beam([smo103364,smo103365,smo103366]);
 
// formatting measures in staff group smo99711
fmtsmo1005031.format([smo100503v0,smo103380v0], 281);
const stavesmo100503 = new VF.Stave(368, 406, 295);
stavesmo100503.setAttribute('id', 'stavesmo100503');
stavesmo100503.setBegBarType(VF.Barline.type.NONE);
stavesmo100503.setContext(context);
stavesmo100503.draw();
smo100503v0.draw(context, stavesmo100503);
smo105388.setContext(context);
smo105388.draw();
smo105389.setContext(context);
smo105389.draw();
const stavesmo103380 = new VF.Stave(368, 545, 295);
stavesmo103380.setAttribute('id', 'stavesmo103380');
stavesmo103380.setBegBarType(VF.Barline.type.NONE);
stavesmo103380.setContext(context);
stavesmo103380.draw();
smo103380v0.draw(context, stavesmo103380);
smo105392.setContext(context);
smo105392.draw();
smo105393.setContext(context);
smo105393.draw();
const fmtsmo1005252 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo100525v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100525v0ar = [];
const smo100504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo100504.setAttribute('id', 'smo100504');
smo100525v0ar.push(smo100504);
const smo100505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100505.setAttribute('id', 'smo100505');
smo100525v0ar.push(smo100505);
const smo100506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo100506.setAttribute('id', 'smo100506');
smo100525v0ar.push(smo100506);
const smo100507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo100507.setAttribute('id', 'smo100507');
smo100525v0ar.push(smo100507);
const smo100508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo100508.setAttribute('id', 'smo100508');
smo100525v0ar.push(smo100508);
const smo100509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo100509.setAttribute('id', 'smo100509');
smo100525v0ar.push(smo100509);
const smo100510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo100510.setAttribute('id', 'smo100510');
smo100525v0ar.push(smo100510);
const smo100511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n"]}'))
smo100511.setAttribute('id', 'smo100511');
const smo1005110acc = new VF.Accidental('b');
smo100511.addModifier(smo1005110acc, 0);
smo100525v0ar.push(smo100511);
smo100525v0.addTickables(smo100525v0ar)
fmtsmo1005252.joinVoices([smo100525v0]);
const fmtsmo1034022 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo103402v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103402v0ar = [];
const smo103381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo103381.setAttribute('id', 'smo103381');
smo103402v0ar.push(smo103381);
const smo103382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo103382.setAttribute('id', 'smo103382');
smo103402v0ar.push(smo103382);
const smo103383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103383.setAttribute('id', 'smo103383');
smo103402v0ar.push(smo103383);
const smo103384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo103384.setAttribute('id', 'smo103384');
smo103402v0ar.push(smo103384);
const smo103385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo103385.setAttribute('id', 'smo103385');
smo103402v0ar.push(smo103385);
const smo103386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo103386.setAttribute('id', 'smo103386');
smo103402v0ar.push(smo103386);
const smo103387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo103387.setAttribute('id', 'smo103387');
smo103402v0ar.push(smo103387);
const smo103388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n"]}'))
smo103388.setAttribute('id', 'smo103388');
const smo1033880acc = new VF.Accidental('b');
smo103388.addModifier(smo1033880acc, 0);
smo103402v0ar.push(smo103388);
smo103402v0.addTickables(smo103402v0ar)
fmtsmo1034022.joinVoices([smo103402v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105396 = smo100504.getStemDirection();
smo100504.setStemDirection(dirsmo105396);
smo100505.setStemDirection(dirsmo105396);
smo100506.setStemDirection(dirsmo105396);
smo100507.setStemDirection(dirsmo105396);
const smo105396 = new VF.Beam([smo100504,smo100505,smo100506,smo100507]);
const dirsmo105397 = smo100508.getStemDirection();
smo100508.setStemDirection(dirsmo105397);
smo100509.setStemDirection(dirsmo105397);
smo100510.setStemDirection(dirsmo105397);
smo100511.setStemDirection(dirsmo105397);
const smo105397 = new VF.Beam([smo100508,smo100509,smo100510,smo100511]);
const dirsmo105400 = smo103381.getStemDirection();
smo103381.setStemDirection(dirsmo105400);
smo103382.setStemDirection(dirsmo105400);
smo103383.setStemDirection(dirsmo105400);
smo103384.setStemDirection(dirsmo105400);
const smo105400 = new VF.Beam([smo103381,smo103382,smo103383,smo103384]);
const dirsmo105401 = smo103385.getStemDirection();
smo103385.setStemDirection(dirsmo105401);
smo103386.setStemDirection(dirsmo105401);
smo103387.setStemDirection(dirsmo105401);
smo103388.setStemDirection(dirsmo105401);
const smo105401 = new VF.Beam([smo103385,smo103386,smo103387,smo103388]);
 
// formatting measures in staff group smo99711
fmtsmo1005252.format([smo100525v0,smo103402v0], 281);
const stavesmo100525 = new VF.Stave(663, 406, 295);
stavesmo100525.setAttribute('id', 'stavesmo100525');
stavesmo100525.setBegBarType(VF.Barline.type.NONE);
stavesmo100525.setContext(context);
stavesmo100525.draw();
smo100525v0.draw(context, stavesmo100525);
smo105396.setContext(context);
smo105396.draw();
smo105397.setContext(context);
smo105397.draw();
const stavesmo103402 = new VF.Stave(663, 545, 295);
stavesmo103402.setAttribute('id', 'stavesmo103402');
stavesmo103402.setBegBarType(VF.Barline.type.NONE);
stavesmo103402.setContext(context);
stavesmo103402.draw();
smo103402v0.draw(context, stavesmo103402);
smo105400.setContext(context);
smo105400.draw();
smo105401.setContext(context);
smo105401.draw();
const fmtsmo1005433 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo100543v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100543v0ar = [];
const smo100526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo100526.setAttribute('id', 'smo100526');
smo100543v0ar.push(smo100526);
const smo100527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
smo100527.setAttribute('id', 'smo100527');
smo100543v0ar.push(smo100527);
const smo100528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo100528.setAttribute('id', 'smo100528');
smo100543v0ar.push(smo100528);
const smo100529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo100529.setAttribute('id', 'smo100529');
const smo1005290acc = new VF.Accidental('b');
smo100529.addModifier(smo1005290acc, 0);
smo100543v0ar.push(smo100529);
smo100543v0.addTickables(smo100543v0ar)
fmtsmo1005433.joinVoices([smo100543v0]);
const fmtsmo1034203 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo103420v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103420v0ar = [];
const smo103403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103403.setAttribute('id', 'smo103403');
smo103420v0ar.push(smo103403);
const smo103404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo103404.setAttribute('id', 'smo103404');
smo103420v0ar.push(smo103404);
const smo103405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/1/n","gn/2/n"]}'))
smo103405.setAttribute('id', 'smo103405');
smo103420v0ar.push(smo103405);
const smo103406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo103406.setAttribute('id', 'smo103406');
smo103420v0ar.push(smo103406);
smo103420v0.addTickables(smo103420v0ar)
fmtsmo1034203.joinVoices([smo103420v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105404 = smo100527.getStemDirection();
smo100527.setStemDirection(dirsmo105404);
smo100528.setStemDirection(dirsmo105404);
smo100529.setStemDirection(dirsmo105404);
const smo105404 = new VF.Beam([smo100527,smo100528,smo100529]);
const dirsmo105407 = smo103405.getStemDirection();
smo103405.setStemDirection(dirsmo105407);
smo103406.setStemDirection(dirsmo105407);
const smo105407 = new VF.Beam([smo103405,smo103406]);
 
// formatting measures in staff group smo99711
fmtsmo1005433.format([smo100543v0,smo103420v0], 281);
const stavesmo100543 = new VF.Stave(958, 406, 295);
stavesmo100543.setAttribute('id', 'stavesmo100543');
stavesmo100543.setBegBarType(VF.Barline.type.NONE);
stavesmo100543.setContext(context);
stavesmo100543.draw();
smo100543v0.draw(context, stavesmo100543);
smo105404.setContext(context);
smo105404.draw();
const stavesmo103420 = new VF.Stave(958, 545, 295);
stavesmo103420.setAttribute('id', 'stavesmo103420');
stavesmo103420.setBegBarType(VF.Barline.type.NONE);
stavesmo103420.setContext(context);
stavesmo103420.draw();
smo103420v0.draw(context, stavesmo103420);
smo105407.setContext(context);
smo105407.draw();
const fmtsmo1005644 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo100564v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100564v0ar = [];
const smo100544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100544.setAttribute('id', 'smo100544');
smo100564v0ar.push(smo100544);
const smo100546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100546.setAttribute('id', 'smo100546');
smo100564v0ar.push(smo100546);
const smo100547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100547.setAttribute('id', 'smo100547');
smo100564v0ar.push(smo100547);
const smo100548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100548.setAttribute('id', 'smo100548');
smo100564v0ar.push(smo100548);
const smo100549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100549.setAttribute('id', 'smo100549');
smo100564v0ar.push(smo100549);
const smo100550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100550.setAttribute('id', 'smo100550');
smo100564v0ar.push(smo100550);
smo100564v0.addTickables(smo100564v0ar)
fmtsmo1005644.joinVoices([smo100564v0]);
const fmtsmo1034384 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo103438v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103438v0ar = [];
const smo103421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103421.setAttribute('id', 'smo103421');
smo103438v0ar.push(smo103421);
const smo103422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103422.setAttribute('id', 'smo103422');
smo103438v0ar.push(smo103422);
const smo103423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103423.setAttribute('id', 'smo103423');
smo103438v0ar.push(smo103423);
const smo103424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo103424.setAttribute('id', 'smo103424');
const smo1034241acc = new VF.Accidental('b');
smo103424.addModifier(smo1034241acc, 1);
smo103438v0ar.push(smo103424);
smo103438v0.addTickables(smo103438v0ar)
fmtsmo1034384.joinVoices([smo103438v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105410 = smo100544.getStemDirection();
smo100544.setStemDirection(dirsmo105410);
smo100546.setStemDirection(dirsmo105410);
smo100547.setStemDirection(dirsmo105410);
const smo105410 = new VF.Beam([smo100544,smo100546,smo100547]);
const dirsmo105411 = smo100548.getStemDirection();
smo100548.setStemDirection(dirsmo105411);
smo100549.setStemDirection(dirsmo105411);
smo100550.setStemDirection(dirsmo105411);
const smo105411 = new VF.Beam([smo100548,smo100549,smo100550]);
const dirsmo105413 = smo103421.getStemDirection();
smo103421.setStemDirection(dirsmo105413);
smo103422.setStemDirection(dirsmo105413);
const smo105413 = new VF.Beam([smo103421,smo103422]);
const dirsmo105414 = smo103423.getStemDirection();
smo103423.setStemDirection(dirsmo105414);
smo103424.setStemDirection(dirsmo105414);
const smo105414 = new VF.Beam([smo103423,smo103424]);
 
// formatting measures in staff group smo99711
fmtsmo1005644.format([smo100564v0,smo103438v0], 272);
const stavesmo100564 = new VF.Stave(1253, 406, 295);
stavesmo100564.setAttribute('id', 'stavesmo100564');
stavesmo100564.setBegBarType(4);
stavesmo100564.setContext(context);
stavesmo100564.draw();
smo100564v0.draw(context, stavesmo100564);
smo105410.setContext(context);
smo105410.draw();
smo105411.setContext(context);
smo105411.draw();
const stavesmo103438 = new VF.Stave(1253, 545, 295);
stavesmo103438.setAttribute('id', 'stavesmo103438');
stavesmo103438.setBegBarType(4);
stavesmo103438.setContext(context);
stavesmo103438.draw();
smo103438v0.draw(context, stavesmo103438);
smo105413.setContext(context);
smo105413.draw();
smo105414.setContext(context);
smo105414.draw();
const fmtsmo1005835 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo100583v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100583v0ar = [];
const smo100565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100565.setAttribute('id', 'smo100565');
smo100583v0ar.push(smo100565);
const smo100566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100566.setAttribute('id', 'smo100566');
smo100583v0ar.push(smo100566);
const smo100567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100567.setAttribute('id', 'smo100567');
smo100583v0ar.push(smo100567);
const smo100568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100568.setAttribute('id', 'smo100568');
smo100583v0ar.push(smo100568);
const smo100569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo100569.setAttribute('id', 'smo100569');
const smo1005690acc = new VF.Accidental('b');
smo100569.addModifier(smo1005690acc, 0);
const smo1005691acc = new VF.Accidental('b');
smo100569.addModifier(smo1005691acc, 1);
const smo1005692acc = new VF.Accidental('b');
smo100569.addModifier(smo1005692acc, 2);
smo100583v0ar.push(smo100569);
smo100583v0.addTickables(smo100583v0ar)
fmtsmo1005835.joinVoices([smo100583v0]);
const fmtsmo1034565 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo103456v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103456v0ar = [];
const smo103439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo103439.setAttribute('id', 'smo103439');
smo103456v0ar.push(smo103439);
const smo103440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo103440.setAttribute('id', 'smo103440');
smo103456v0ar.push(smo103440);
const smo103441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo103441.setAttribute('id', 'smo103441');
smo103456v0ar.push(smo103441);
const smo103442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo103442.setAttribute('id', 'smo103442');
smo103456v0ar.push(smo103442);
smo103456v0.addTickables(smo103456v0ar)
fmtsmo1034565.joinVoices([smo103456v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105416 = smo100566.getStemDirection();
smo100566.setStemDirection(dirsmo105416);
smo100567.setStemDirection(dirsmo105416);
smo100568.setStemDirection(dirsmo105416);
smo100569.setStemDirection(dirsmo105416);
const smo105416 = new VF.Beam([smo100566,smo100567,smo100568,smo100569]);
const dirsmo105419 = smo103439.getStemDirection();
smo103439.setStemDirection(dirsmo105419);
smo103440.setStemDirection(dirsmo105419);
const smo105419 = new VF.Beam([smo103439,smo103440]);
const dirsmo105420 = smo103441.getStemDirection();
smo103441.setStemDirection(dirsmo105420);
smo103442.setStemDirection(dirsmo105420);
const smo105420 = new VF.Beam([smo103441,smo103442]);
 
// formatting measures in staff group smo99711
fmtsmo1005835.format([smo100583v0,smo103456v0], 281);
const stavesmo100583 = new VF.Stave(1548, 406, 295);
stavesmo100583.setAttribute('id', 'stavesmo100583');
stavesmo100583.setBegBarType(VF.Barline.type.NONE);
stavesmo100583.setContext(context);
stavesmo100583.draw();
smo100583v0.draw(context, stavesmo100583);
smo105416.setContext(context);
smo105416.draw();
const stavesmo103456 = new VF.Stave(1548, 545, 295);
stavesmo103456.setAttribute('id', 'stavesmo103456');
stavesmo103456.setBegBarType(VF.Barline.type.NONE);
stavesmo103456.setContext(context);
stavesmo103456.draw();
smo103456v0.draw(context, stavesmo103456);
smo105419.setContext(context);
smo105419.draw();
smo105420.setContext(context);
smo105420.draw();
const rightsmo99711stavesmo1005831 = new VF.StaveConnector(stavesmo100583, stavesmo103456).setType(0);
rightsmo99711stavesmo1005831.setContext(context).draw();
const fmtsmo1006056 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo100605v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100605v0ar = [];
const smo100584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100584.setAttribute('id', 'smo100584');
smo100605v0ar.push(smo100584);
const smo100586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100586.setAttribute('id', 'smo100586');
smo100605v0ar.push(smo100586);
const smo100587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100587.setAttribute('id', 'smo100587');
smo100605v0ar.push(smo100587);
const smo100588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100588.setAttribute('id', 'smo100588');
smo100605v0ar.push(smo100588);
const smo100589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100589.setAttribute('id', 'smo100589');
smo100605v0ar.push(smo100589);
const smo100590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo100590.setAttribute('id', 'smo100590');
smo100605v0ar.push(smo100590);
const smo100591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100591.setAttribute('id', 'smo100591');
smo100605v0ar.push(smo100591);
smo100605v0.addTickables(smo100605v0ar)
fmtsmo1006056.joinVoices([smo100605v0]);
const fmtsmo1034746 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo103474v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103474v0ar = [];
const smo103457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103457.setAttribute('id', 'smo103457');
smo103474v0ar.push(smo103457);
const smo103458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103458.setAttribute('id', 'smo103458');
smo103474v0ar.push(smo103458);
const smo103459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103459.setAttribute('id', 'smo103459');
smo103474v0ar.push(smo103459);
const smo103460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo103460.setAttribute('id', 'smo103460');
smo103474v0ar.push(smo103460);
smo103474v0.addTickables(smo103474v0ar)
fmtsmo1034746.joinVoices([smo103474v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105431 = smo100584.getStemDirection();
smo100584.setStemDirection(dirsmo105431);
smo100586.setStemDirection(dirsmo105431);
smo100587.setStemDirection(dirsmo105431);
smo100588.setStemDirection(dirsmo105431);
const smo105431 = new VF.Beam([smo100584,smo100586,smo100587,smo100588]);
const dirsmo105432 = smo100589.getStemDirection();
smo100589.setStemDirection(dirsmo105432);
smo100590.setStemDirection(dirsmo105432);
smo100591.setStemDirection(dirsmo105432);
const smo105432 = new VF.Beam([smo100589,smo100590,smo100591]);
const dirsmo105435 = smo103457.getStemDirection();
smo103457.setStemDirection(dirsmo105435);
smo103458.setStemDirection(dirsmo105435);
const smo105435 = new VF.Beam([smo103457,smo103458]);
const dirsmo105436 = smo103459.getStemDirection();
smo103459.setStemDirection(dirsmo105436);
smo103460.setStemDirection(dirsmo105436);
const smo105436 = new VF.Beam([smo103459,smo103460]);
 
// formatting measures in staff group smo99711
fmtsmo1006056.format([smo100605v0,smo103474v0], 237);
const stavesmo100605 = new VF.Stave(73, 779, 295);
stavesmo100605.setAttribute('id', 'stavesmo100605');
stavesmo100605.setBegBarType(1);
stavesmo100605.addClef('treble');
stavesmo100605.setContext(context);
stavesmo100605.draw();
smo100605v0.draw(context, stavesmo100605);
smo105431.setContext(context);
smo105431.draw();
smo105432.setContext(context);
smo105432.draw();
const stavesmo103474 = new VF.Stave(73, 934, 295);
stavesmo103474.setAttribute('id', 'stavesmo103474');
stavesmo103474.setBegBarType(1);
stavesmo103474.addClef('bass');
stavesmo103474.setContext(context);
stavesmo103474.draw();
smo103474v0.draw(context, stavesmo103474);
smo105435.setContext(context);
smo105435.draw();
smo105436.setContext(context);
smo105436.draw();
const leftsmo99711stavesmo1006051 = new VF.StaveConnector(stavesmo100605, stavesmo103474).setType(3);
leftsmo99711stavesmo1006051.setContext(context).draw();
const fmtsmo1006237 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo100623v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100623v0ar = [];
const smo100606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100606.setAttribute('id', 'smo100606');
smo100623v0ar.push(smo100606);
const smo100607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100607.setAttribute('id', 'smo100607');
smo100623v0ar.push(smo100607);
const smo100608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo100608.setAttribute('id', 'smo100608');
smo100623v0ar.push(smo100608);
const smo100609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo100609.setAttribute('id', 'smo100609');
const smo1006090acc = new VF.Accidental('b');
smo100609.addModifier(smo1006090acc, 0);
smo100623v0ar.push(smo100609);
smo100623v0.addTickables(smo100623v0ar)
fmtsmo1006237.joinVoices([smo100623v0]);
const fmtsmo1034927 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo103492v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103492v0ar = [];
const smo103475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103475.setAttribute('id', 'smo103475');
smo103492v0ar.push(smo103475);
const smo103476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103476.setAttribute('id', 'smo103476');
smo103492v0ar.push(smo103476);
const smo103477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103477.setAttribute('id', 'smo103477');
smo103492v0ar.push(smo103477);
const smo103478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo103478.setAttribute('id', 'smo103478');
smo103492v0ar.push(smo103478);
smo103492v0.addTickables(smo103492v0ar)
fmtsmo1034927.joinVoices([smo103492v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105439 = smo100607.getStemDirection();
smo100607.setStemDirection(dirsmo105439);
smo100608.setStemDirection(dirsmo105439);
smo100609.setStemDirection(dirsmo105439);
const smo105439 = new VF.Beam([smo100607,smo100608,smo100609]);
const dirsmo105442 = smo103475.getStemDirection();
smo103475.setStemDirection(dirsmo105442);
smo103476.setStemDirection(dirsmo105442);
const smo105442 = new VF.Beam([smo103475,smo103476]);
const dirsmo105443 = smo103477.getStemDirection();
smo103477.setStemDirection(dirsmo105443);
smo103478.setStemDirection(dirsmo105443);
const smo105443 = new VF.Beam([smo103477,smo103478]);
 
// formatting measures in staff group smo99711
fmtsmo1006237.format([smo100623v0,smo103492v0], 281);
const stavesmo100623 = new VF.Stave(368, 779, 295);
stavesmo100623.setAttribute('id', 'stavesmo100623');
stavesmo100623.setBegBarType(VF.Barline.type.NONE);
stavesmo100623.setContext(context);
stavesmo100623.draw();
smo100623v0.draw(context, stavesmo100623);
smo105439.setContext(context);
smo105439.draw();
const stavesmo103492 = new VF.Stave(368, 934, 295);
stavesmo103492.setAttribute('id', 'stavesmo103492');
stavesmo103492.setBegBarType(VF.Barline.type.NONE);
stavesmo103492.setContext(context);
stavesmo103492.draw();
smo103492v0.draw(context, stavesmo103492);
smo105442.setContext(context);
smo105442.draw();
smo105443.setContext(context);
smo105443.draw();
const fmtsmo1006448 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo100644v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100644v0ar = [];
const smo100624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100624.setAttribute('id', 'smo100624');
smo100644v0ar.push(smo100624);
const smo100626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100626.setAttribute('id', 'smo100626');
smo100644v0ar.push(smo100626);
const smo100627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100627.setAttribute('id', 'smo100627');
smo100644v0ar.push(smo100627);
const smo100628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100628.setAttribute('id', 'smo100628');
smo100644v0ar.push(smo100628);
const smo100629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100629.setAttribute('id', 'smo100629');
smo100644v0ar.push(smo100629);
const smo100630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100630.setAttribute('id', 'smo100630');
smo100644v0ar.push(smo100630);
smo100644v0.addTickables(smo100644v0ar)
fmtsmo1006448.joinVoices([smo100644v0]);
const fmtsmo1035108 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo103510v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103510v0ar = [];
const smo103493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103493.setAttribute('id', 'smo103493');
smo103510v0ar.push(smo103493);
const smo103494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103494.setAttribute('id', 'smo103494');
smo103510v0ar.push(smo103494);
const smo103495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103495.setAttribute('id', 'smo103495');
smo103510v0ar.push(smo103495);
const smo103496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo103496.setAttribute('id', 'smo103496');
const smo1034961acc = new VF.Accidental('b');
smo103496.addModifier(smo1034961acc, 1);
smo103510v0ar.push(smo103496);
smo103510v0.addTickables(smo103510v0ar)
fmtsmo1035108.joinVoices([smo103510v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105446 = smo100624.getStemDirection();
smo100624.setStemDirection(dirsmo105446);
smo100626.setStemDirection(dirsmo105446);
smo100627.setStemDirection(dirsmo105446);
const smo105446 = new VF.Beam([smo100624,smo100626,smo100627]);
const dirsmo105447 = smo100628.getStemDirection();
smo100628.setStemDirection(dirsmo105447);
smo100629.setStemDirection(dirsmo105447);
smo100630.setStemDirection(dirsmo105447);
const smo105447 = new VF.Beam([smo100628,smo100629,smo100630]);
const dirsmo105450 = smo103493.getStemDirection();
smo103493.setStemDirection(dirsmo105450);
smo103494.setStemDirection(dirsmo105450);
const smo105450 = new VF.Beam([smo103493,smo103494]);
const dirsmo105451 = smo103495.getStemDirection();
smo103495.setStemDirection(dirsmo105451);
smo103496.setStemDirection(dirsmo105451);
const smo105451 = new VF.Beam([smo103495,smo103496]);
 
// formatting measures in staff group smo99711
fmtsmo1006448.format([smo100644v0,smo103510v0], 281);
const stavesmo100644 = new VF.Stave(663, 779, 295);
stavesmo100644.setAttribute('id', 'stavesmo100644');
stavesmo100644.setBegBarType(VF.Barline.type.NONE);
stavesmo100644.setContext(context);
stavesmo100644.draw();
smo100644v0.draw(context, stavesmo100644);
smo105446.setContext(context);
smo105446.draw();
smo105447.setContext(context);
smo105447.draw();
const stavesmo103510 = new VF.Stave(663, 934, 295);
stavesmo103510.setAttribute('id', 'stavesmo103510');
stavesmo103510.setBegBarType(VF.Barline.type.NONE);
stavesmo103510.setContext(context);
stavesmo103510.draw();
smo103510v0.draw(context, stavesmo103510);
smo105450.setContext(context);
smo105450.draw();
smo105451.setContext(context);
smo105451.draw();
const fmtsmo1006629 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo100662v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100662v0ar = [];
const smo100645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100645.setAttribute('id', 'smo100645');
smo100662v0ar.push(smo100645);
const smo100646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100646.setAttribute('id', 'smo100646');
smo100662v0ar.push(smo100646);
const smo100647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo100647.setAttribute('id', 'smo100647');
smo100662v0ar.push(smo100647);
const smo100648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo100648.setAttribute('id', 'smo100648');
smo100662v0ar.push(smo100648);
smo100662v0.addTickables(smo100662v0ar)
fmtsmo1006629.joinVoices([smo100662v0]);
const fmtsmo1035289 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo103528v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103528v0ar = [];
const smo103511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo103511.setAttribute('id', 'smo103511');
smo103528v0ar.push(smo103511);
const smo103512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo103512.setAttribute('id', 'smo103512');
smo103528v0ar.push(smo103512);
const smo103513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo103513.setAttribute('id', 'smo103513');
smo103528v0ar.push(smo103513);
const smo103514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo103514.setAttribute('id', 'smo103514');
const smo1035140acc = new VF.Accidental('b');
smo103514.addModifier(smo1035140acc, 0);
const smo1035141acc = new VF.Accidental('b');
smo103514.addModifier(smo1035141acc, 1);
smo103528v0ar.push(smo103514);
smo103528v0.addTickables(smo103528v0ar)
fmtsmo1035289.joinVoices([smo103528v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105454 = smo100646.getStemDirection();
smo100646.setStemDirection(dirsmo105454);
smo100647.setStemDirection(dirsmo105454);
smo100648.setStemDirection(dirsmo105454);
const smo105454 = new VF.Beam([smo100646,smo100647,smo100648]);
const dirsmo105457 = smo103511.getStemDirection();
smo103511.setStemDirection(dirsmo105457);
smo103512.setStemDirection(dirsmo105457);
const smo105457 = new VF.Beam([smo103511,smo103512]);
const dirsmo105458 = smo103513.getStemDirection();
smo103513.setStemDirection(dirsmo105458);
smo103514.setStemDirection(dirsmo105458);
const smo105458 = new VF.Beam([smo103513,smo103514]);
 
// formatting measures in staff group smo99711
fmtsmo1006629.format([smo100662v0,smo103528v0], 281);
const stavesmo100662 = new VF.Stave(958, 779, 295);
stavesmo100662.setAttribute('id', 'stavesmo100662');
stavesmo100662.setBegBarType(VF.Barline.type.NONE);
stavesmo100662.setContext(context);
stavesmo100662.draw();
smo100662v0.draw(context, stavesmo100662);
smo105454.setContext(context);
smo105454.draw();
const stavesmo103528 = new VF.Stave(958, 934, 295);
stavesmo103528.setAttribute('id', 'stavesmo103528');
stavesmo103528.setBegBarType(VF.Barline.type.NONE);
stavesmo103528.setContext(context);
stavesmo103528.draw();
smo103528v0.draw(context, stavesmo103528);
smo105457.setContext(context);
smo105457.draw();
smo105458.setContext(context);
smo105458.draw();
const fmtsmo10068510 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo100685v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100685v0ar = [];
const smo100663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo100663.setAttribute('id', 'smo100663');
const smo1006630acc = new VF.Accidental('b');
smo100663.addModifier(smo1006630acc, 0);
const smo1006632acc = new VF.Accidental('b');
smo100663.addModifier(smo1006632acc, 2);
smo100685v0ar.push(smo100663);
const smo100665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo100665.setAttribute('id', 'smo100665');
smo100685v0ar.push(smo100665);
const smo100666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100666.setAttribute('id', 'smo100666');
smo100685v0ar.push(smo100666);
const smo100667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100667.setAttribute('id', 'smo100667');
smo100685v0ar.push(smo100667);
const smo100668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100668.setAttribute('id', 'smo100668');
smo100685v0ar.push(smo100668);
const smo100669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo100669.setAttribute('id', 'smo100669');
smo100685v0ar.push(smo100669);
const smo100670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100670.setAttribute('id', 'smo100670');
smo100685v0ar.push(smo100670);
const smo100671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo100671.setAttribute('id', 'smo100671');
smo100685v0ar.push(smo100671);
smo100685v0.addTickables(smo100685v0ar)
fmtsmo10068510.joinVoices([smo100685v0]);
const fmtsmo10354610 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo103546v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103546v0ar = [];
const smo103529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo103529.setAttribute('id', 'smo103529');
smo103546v0ar.push(smo103529);
const smo103530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo103530.setAttribute('id', 'smo103530');
const smo1035301acc = new VF.Accidental('b');
smo103530.addModifier(smo1035301acc, 1);
smo103546v0ar.push(smo103530);
const smo103531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo103531.setAttribute('id', 'smo103531');
smo103546v0ar.push(smo103531);
const smo103532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo103532.setAttribute('id', 'smo103532');
smo103546v0ar.push(smo103532);
smo103546v0.addTickables(smo103546v0ar)
fmtsmo10354610.joinVoices([smo103546v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105461 = smo100663.getStemDirection();
smo100663.setStemDirection(dirsmo105461);
smo100665.setStemDirection(dirsmo105461);
smo100666.setStemDirection(dirsmo105461);
smo100667.setStemDirection(dirsmo105461);
const smo105461 = new VF.Beam([smo100663,smo100665,smo100666,smo100667]);
const dirsmo105462 = smo100668.getStemDirection();
smo100668.setStemDirection(dirsmo105462);
smo100669.setStemDirection(dirsmo105462);
smo100670.setStemDirection(dirsmo105462);
smo100671.setStemDirection(dirsmo105462);
const smo105462 = new VF.Beam([smo100668,smo100669,smo100670,smo100671]);
const dirsmo105465 = smo103529.getStemDirection();
smo103529.setStemDirection(dirsmo105465);
smo103530.setStemDirection(dirsmo105465);
const smo105465 = new VF.Beam([smo103529,smo103530]);
const dirsmo105466 = smo103531.getStemDirection();
smo103531.setStemDirection(dirsmo105466);
smo103532.setStemDirection(dirsmo105466);
const smo105466 = new VF.Beam([smo103531,smo103532]);
 
// formatting measures in staff group smo99711
fmtsmo10068510.format([smo100685v0,smo103546v0], 281);
const stavesmo100685 = new VF.Stave(1253, 779, 295);
stavesmo100685.setAttribute('id', 'stavesmo100685');
stavesmo100685.setBegBarType(VF.Barline.type.NONE);
stavesmo100685.setContext(context);
stavesmo100685.draw();
smo100685v0.draw(context, stavesmo100685);
smo105461.setContext(context);
smo105461.draw();
smo105462.setContext(context);
smo105462.draw();
const stavesmo103546 = new VF.Stave(1253, 934, 295);
stavesmo103546.setAttribute('id', 'stavesmo103546');
stavesmo103546.setBegBarType(VF.Barline.type.NONE);
stavesmo103546.setContext(context);
stavesmo103546.draw();
smo103546v0.draw(context, stavesmo103546);
smo105465.setContext(context);
smo105465.draw();
smo105466.setContext(context);
smo105466.draw();
const fmtsmo10070311 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo100703v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100703v0ar = [];
const smo100686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100686.setAttribute('id', 'smo100686');
smo100703v0ar.push(smo100686);
const smo100687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100687.setAttribute('id', 'smo100687');
smo100703v0ar.push(smo100687);
const smo100688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo100688.setAttribute('id', 'smo100688');
smo100703v0ar.push(smo100688);
const smo100689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo100689.setAttribute('id', 'smo100689');
const smo1006890acc = new VF.Accidental('b');
smo100689.addModifier(smo1006890acc, 0);
smo100703v0ar.push(smo100689);
smo100703v0.addTickables(smo100703v0ar)
fmtsmo10070311.joinVoices([smo100703v0]);
const fmtsmo10356411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo103564v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103564v0ar = [];
const smo103547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo103547.setAttribute('id', 'smo103547');
smo103564v0ar.push(smo103547);
const smo103548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103548.setAttribute('id', 'smo103548');
smo103564v0ar.push(smo103548);
const smo103549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo103549.setAttribute('id', 'smo103549');
smo103564v0ar.push(smo103549);
const smo103550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo103550.setAttribute('id', 'smo103550');
smo103564v0ar.push(smo103550);
smo103564v0.addTickables(smo103564v0ar)
fmtsmo10356411.joinVoices([smo103564v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105469 = smo100687.getStemDirection();
smo100687.setStemDirection(dirsmo105469);
smo100688.setStemDirection(dirsmo105469);
smo100689.setStemDirection(dirsmo105469);
const smo105469 = new VF.Beam([smo100687,smo100688,smo100689]);
const dirsmo105472 = smo103547.getStemDirection();
smo103547.setStemDirection(dirsmo105472);
smo103548.setStemDirection(dirsmo105472);
const smo105472 = new VF.Beam([smo103547,smo103548]);
const dirsmo105473 = smo103549.getStemDirection();
smo103549.setStemDirection(dirsmo105473);
smo103550.setStemDirection(dirsmo105473);
const smo105473 = new VF.Beam([smo103549,smo103550]);
 
// formatting measures in staff group smo99711
fmtsmo10070311.format([smo100703v0,smo103564v0], 281);
const stavesmo100703 = new VF.Stave(1548, 779, 295);
stavesmo100703.setAttribute('id', 'stavesmo100703');
stavesmo100703.setBegBarType(VF.Barline.type.NONE);
stavesmo100703.setContext(context);
stavesmo100703.draw();
smo100703v0.draw(context, stavesmo100703);
smo105469.setContext(context);
smo105469.draw();
const stavesmo103564 = new VF.Stave(1548, 934, 295);
stavesmo103564.setAttribute('id', 'stavesmo103564');
stavesmo103564.setBegBarType(VF.Barline.type.NONE);
stavesmo103564.setContext(context);
stavesmo103564.draw();
smo103564v0.draw(context, stavesmo103564);
smo105472.setContext(context);
smo105472.draw();
smo105473.setContext(context);
smo105473.draw();
const rightsmo99711stavesmo1007031 = new VF.StaveConnector(stavesmo100703, stavesmo103564).setType(0);
rightsmo99711stavesmo1007031.setContext(context).draw();
const fmtsmo10072412 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo100724v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100724v0ar = [];
const smo100704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100704.setAttribute('id', 'smo100704');
smo100724v0ar.push(smo100704);
const smo100706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100706.setAttribute('id', 'smo100706');
smo100724v0ar.push(smo100706);
const smo100707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100707.setAttribute('id', 'smo100707');
smo100724v0ar.push(smo100707);
const smo100708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100708.setAttribute('id', 'smo100708');
smo100724v0ar.push(smo100708);
const smo100709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo100709.setAttribute('id', 'smo100709');
smo100724v0ar.push(smo100709);
const smo100710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100710.setAttribute('id', 'smo100710');
smo100724v0ar.push(smo100710);
smo100724v0.addTickables(smo100724v0ar)
fmtsmo10072412.joinVoices([smo100724v0]);
const fmtsmo10358212 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo103582v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103582v0ar = [];
const smo103565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103565.setAttribute('id', 'smo103565');
smo103582v0ar.push(smo103565);
const smo103566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103566.setAttribute('id', 'smo103566');
smo103582v0ar.push(smo103566);
const smo103567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103567.setAttribute('id', 'smo103567');
smo103582v0ar.push(smo103567);
const smo103568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo103568.setAttribute('id', 'smo103568');
const smo1035681acc = new VF.Accidental('b');
smo103568.addModifier(smo1035681acc, 1);
smo103582v0ar.push(smo103568);
smo103582v0.addTickables(smo103582v0ar)
fmtsmo10358212.joinVoices([smo103582v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105484 = smo100704.getStemDirection();
smo100704.setStemDirection(dirsmo105484);
smo100706.setStemDirection(dirsmo105484);
smo100707.setStemDirection(dirsmo105484);
const smo105484 = new VF.Beam([smo100704,smo100706,smo100707]);
const dirsmo105485 = smo100708.getStemDirection();
smo100708.setStemDirection(dirsmo105485);
smo100709.setStemDirection(dirsmo105485);
smo100710.setStemDirection(dirsmo105485);
const smo105485 = new VF.Beam([smo100708,smo100709,smo100710]);
const dirsmo105488 = smo103565.getStemDirection();
smo103565.setStemDirection(dirsmo105488);
smo103566.setStemDirection(dirsmo105488);
const smo105488 = new VF.Beam([smo103565,smo103566]);
const dirsmo105489 = smo103567.getStemDirection();
smo103567.setStemDirection(dirsmo105489);
smo103568.setStemDirection(dirsmo105489);
const smo105489 = new VF.Beam([smo103567,smo103568]);
 
// formatting measures in staff group smo99711
fmtsmo10072412.format([smo100724v0,smo103582v0], 237);
const stavesmo100724 = new VF.Stave(73, 1132, 295);
stavesmo100724.setAttribute('id', 'stavesmo100724');
stavesmo100724.setBegBarType(1);
stavesmo100724.addClef('treble');
stavesmo100724.setContext(context);
stavesmo100724.draw();
smo100724v0.draw(context, stavesmo100724);
smo105484.setContext(context);
smo105484.draw();
smo105485.setContext(context);
smo105485.draw();
const stavesmo103582 = new VF.Stave(73, 1287, 295);
stavesmo103582.setAttribute('id', 'stavesmo103582');
stavesmo103582.setBegBarType(1);
stavesmo103582.addClef('bass');
stavesmo103582.setContext(context);
stavesmo103582.draw();
smo103582v0.draw(context, stavesmo103582);
smo105488.setContext(context);
smo105488.draw();
smo105489.setContext(context);
smo105489.draw();
const leftsmo99711stavesmo1007241 = new VF.StaveConnector(stavesmo100724, stavesmo103582).setType(3);
leftsmo99711stavesmo1007241.setContext(context).draw();
const fmtsmo10074313 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo100743v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100743v0ar = [];
const smo100725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100725.setAttribute('id', 'smo100725');
smo100743v0ar.push(smo100725);
const smo100726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100726.setAttribute('id', 'smo100726');
smo100743v0ar.push(smo100726);
const smo100727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100727.setAttribute('id', 'smo100727');
smo100743v0ar.push(smo100727);
const smo100728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100728.setAttribute('id', 'smo100728');
smo100743v0ar.push(smo100728);
const smo100729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo100729.setAttribute('id', 'smo100729');
const smo1007290acc = new VF.Accidental('b');
smo100729.addModifier(smo1007290acc, 0);
const smo1007291acc = new VF.Accidental('b');
smo100729.addModifier(smo1007291acc, 1);
const smo1007292acc = new VF.Accidental('b');
smo100729.addModifier(smo1007292acc, 2);
smo100743v0ar.push(smo100729);
smo100743v0.addTickables(smo100743v0ar)
fmtsmo10074313.joinVoices([smo100743v0]);
const fmtsmo10360013 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo103600v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103600v0ar = [];
const smo103583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo103583.setAttribute('id', 'smo103583');
smo103600v0ar.push(smo103583);
const smo103584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo103584.setAttribute('id', 'smo103584');
smo103600v0ar.push(smo103584);
const smo103585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo103585.setAttribute('id', 'smo103585');
smo103600v0ar.push(smo103585);
const smo103586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo103586.setAttribute('id', 'smo103586');
smo103600v0ar.push(smo103586);
smo103600v0.addTickables(smo103600v0ar)
fmtsmo10360013.joinVoices([smo103600v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105492 = smo100726.getStemDirection();
smo100726.setStemDirection(dirsmo105492);
smo100727.setStemDirection(dirsmo105492);
smo100728.setStemDirection(dirsmo105492);
smo100729.setStemDirection(dirsmo105492);
const smo105492 = new VF.Beam([smo100726,smo100727,smo100728,smo100729]);
const dirsmo105495 = smo103583.getStemDirection();
smo103583.setStemDirection(dirsmo105495);
smo103584.setStemDirection(dirsmo105495);
const smo105495 = new VF.Beam([smo103583,smo103584]);
const dirsmo105496 = smo103585.getStemDirection();
smo103585.setStemDirection(dirsmo105496);
smo103586.setStemDirection(dirsmo105496);
const smo105496 = new VF.Beam([smo103585,smo103586]);
 
// formatting measures in staff group smo99711
fmtsmo10074313.format([smo100743v0,smo103600v0], 281);
const stavesmo100743 = new VF.Stave(368, 1132, 295);
stavesmo100743.setAttribute('id', 'stavesmo100743');
stavesmo100743.setBegBarType(VF.Barline.type.NONE);
stavesmo100743.setContext(context);
stavesmo100743.draw();
smo100743v0.draw(context, stavesmo100743);
smo105492.setContext(context);
smo105492.draw();
const stavesmo103600 = new VF.Stave(368, 1287, 295);
stavesmo103600.setAttribute('id', 'stavesmo103600');
stavesmo103600.setBegBarType(VF.Barline.type.NONE);
stavesmo103600.setContext(context);
stavesmo103600.draw();
smo103600v0.draw(context, stavesmo103600);
smo105495.setContext(context);
smo105495.draw();
smo105496.setContext(context);
smo105496.draw();
const fmtsmo10076514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo100765v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100765v0ar = [];
const smo100744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100744.setAttribute('id', 'smo100744');
smo100765v0ar.push(smo100744);
const smo100746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100746.setAttribute('id', 'smo100746');
smo100765v0ar.push(smo100746);
const smo100747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100747.setAttribute('id', 'smo100747');
smo100765v0ar.push(smo100747);
const smo100748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100748.setAttribute('id', 'smo100748');
smo100765v0ar.push(smo100748);
const smo100749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100749.setAttribute('id', 'smo100749');
smo100765v0ar.push(smo100749);
const smo100750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo100750.setAttribute('id', 'smo100750');
smo100765v0ar.push(smo100750);
const smo100751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100751.setAttribute('id', 'smo100751');
smo100765v0ar.push(smo100751);
smo100765v0.addTickables(smo100765v0ar)
fmtsmo10076514.joinVoices([smo100765v0]);
const fmtsmo10361814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo103618v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103618v0ar = [];
const smo103601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103601.setAttribute('id', 'smo103601');
smo103618v0ar.push(smo103601);
const smo103602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103602.setAttribute('id', 'smo103602');
smo103618v0ar.push(smo103602);
const smo103603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103603.setAttribute('id', 'smo103603');
smo103618v0ar.push(smo103603);
const smo103604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo103604.setAttribute('id', 'smo103604');
smo103618v0ar.push(smo103604);
smo103618v0.addTickables(smo103618v0ar)
fmtsmo10361814.joinVoices([smo103618v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105499 = smo100744.getStemDirection();
smo100744.setStemDirection(dirsmo105499);
smo100746.setStemDirection(dirsmo105499);
smo100747.setStemDirection(dirsmo105499);
smo100748.setStemDirection(dirsmo105499);
const smo105499 = new VF.Beam([smo100744,smo100746,smo100747,smo100748]);
const dirsmo105500 = smo100749.getStemDirection();
smo100749.setStemDirection(dirsmo105500);
smo100750.setStemDirection(dirsmo105500);
smo100751.setStemDirection(dirsmo105500);
const smo105500 = new VF.Beam([smo100749,smo100750,smo100751]);
const dirsmo105503 = smo103601.getStemDirection();
smo103601.setStemDirection(dirsmo105503);
smo103602.setStemDirection(dirsmo105503);
const smo105503 = new VF.Beam([smo103601,smo103602]);
const dirsmo105504 = smo103603.getStemDirection();
smo103603.setStemDirection(dirsmo105504);
smo103604.setStemDirection(dirsmo105504);
const smo105504 = new VF.Beam([smo103603,smo103604]);
 
// formatting measures in staff group smo99711
fmtsmo10076514.format([smo100765v0,smo103618v0], 281);
const stavesmo100765 = new VF.Stave(663, 1132, 295);
stavesmo100765.setAttribute('id', 'stavesmo100765');
stavesmo100765.setBegBarType(VF.Barline.type.NONE);
stavesmo100765.setContext(context);
stavesmo100765.draw();
smo100765v0.draw(context, stavesmo100765);
smo105499.setContext(context);
smo105499.draw();
smo105500.setContext(context);
smo105500.draw();
const stavesmo103618 = new VF.Stave(663, 1287, 295);
stavesmo103618.setAttribute('id', 'stavesmo103618');
stavesmo103618.setBegBarType(VF.Barline.type.NONE);
stavesmo103618.setContext(context);
stavesmo103618.draw();
smo103618v0.draw(context, stavesmo103618);
smo105503.setContext(context);
smo105503.draw();
smo105504.setContext(context);
smo105504.draw();
const fmtsmo10078315 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo100783v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100783v0ar = [];
const smo100766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100766.setAttribute('id', 'smo100766');
smo100783v0ar.push(smo100766);
const smo100767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100767.setAttribute('id', 'smo100767');
smo100783v0ar.push(smo100767);
const smo100768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100768.setAttribute('id', 'smo100768');
smo100783v0ar.push(smo100768);
const smo100769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo100769.setAttribute('id', 'smo100769');
smo100783v0ar.push(smo100769);
smo100783v0.addTickables(smo100783v0ar)
fmtsmo10078315.joinVoices([smo100783v0]);
const fmtsmo10363615 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo103636v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103636v0ar = [];
const smo103619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103619.setAttribute('id', 'smo103619');
smo103636v0ar.push(smo103619);
const smo103620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo103620.setAttribute('id', 'smo103620');
smo103636v0ar.push(smo103620);
const smo103621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103621.setAttribute('id', 'smo103621');
smo103636v0ar.push(smo103621);
const smo103622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo103622.setAttribute('id', 'smo103622');
smo103636v0ar.push(smo103622);
smo103636v0.addTickables(smo103636v0ar)
fmtsmo10363615.joinVoices([smo103636v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105507 = smo100767.getStemDirection();
smo100767.setStemDirection(dirsmo105507);
smo100768.setStemDirection(dirsmo105507);
smo100769.setStemDirection(dirsmo105507);
const smo105507 = new VF.Beam([smo100767,smo100768,smo100769]);
const dirsmo105510 = smo103619.getStemDirection();
smo103619.setStemDirection(dirsmo105510);
smo103620.setStemDirection(dirsmo105510);
const smo105510 = new VF.Beam([smo103619,smo103620]);
 
// formatting measures in staff group smo99711
fmtsmo10078315.format([smo100783v0,smo103636v0], 281);
const stavesmo100783 = new VF.Stave(958, 1132, 295);
stavesmo100783.setAttribute('id', 'stavesmo100783');
stavesmo100783.setBegBarType(VF.Barline.type.NONE);
stavesmo100783.setContext(context);
stavesmo100783.draw();
smo100783v0.draw(context, stavesmo100783);
smo105507.setContext(context);
smo105507.draw();
const stavesmo103636 = new VF.Stave(958, 1287, 295);
stavesmo103636.setAttribute('id', 'stavesmo103636');
stavesmo103636.setBegBarType(VF.Barline.type.NONE);
stavesmo103636.setContext(context);
stavesmo103636.draw();
smo103636v0.draw(context, stavesmo103636);
smo105510.setContext(context);
smo105510.draw();
const fmtsmo10080516 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo100805v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100805v0ar = [];
const smo100784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100784.setAttribute('id', 'smo100784');
smo100805v0ar.push(smo100784);
const smo100785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100785.setAttribute('id', 'smo100785');
smo100805v0ar.push(smo100785);
const smo100786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo100786.setAttribute('id', 'smo100786');
smo100805v0ar.push(smo100786);
const smo100787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100787.setAttribute('id', 'smo100787');
smo100805v0ar.push(smo100787);
const smo100788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100788.setAttribute('id', 'smo100788');
smo100805v0ar.push(smo100788);
const smo100789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100789.setAttribute('id', 'smo100789');
smo100805v0ar.push(smo100789);
const smo100790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo100790.setAttribute('id', 'smo100790');
smo100805v0ar.push(smo100790);
const smo100791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100791.setAttribute('id', 'smo100791');
smo100805v0ar.push(smo100791);
smo100805v0.addTickables(smo100805v0ar)
fmtsmo10080516.joinVoices([smo100805v0]);
const fmtsmo10365416 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo103654v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103654v0ar = [];
const smo103637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo103637.setAttribute('id', 'smo103637');
smo103654v0ar.push(smo103637);
const smo103638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103638.setAttribute('id', 'smo103638');
smo103654v0ar.push(smo103638);
const smo103639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo103639.setAttribute('id', 'smo103639');
const smo1036390acc = new VF.Accidental('b');
smo103639.addModifier(smo1036390acc, 0);
const smo1036391acc = new VF.Accidental('b');
smo103639.addModifier(smo1036391acc, 1);
smo103654v0ar.push(smo103639);
const smo103640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103640.setAttribute('id', 'smo103640');
smo103654v0ar.push(smo103640);
smo103654v0.addTickables(smo103654v0ar)
fmtsmo10365416.joinVoices([smo103654v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105513 = smo100784.getStemDirection();
smo100784.setStemDirection(dirsmo105513);
smo100785.setStemDirection(dirsmo105513);
smo100786.setStemDirection(dirsmo105513);
smo100787.setStemDirection(dirsmo105513);
const smo105513 = new VF.Beam([smo100784,smo100785,smo100786,smo100787]);
const dirsmo105514 = smo100788.getStemDirection();
smo100788.setStemDirection(dirsmo105514);
smo100789.setStemDirection(dirsmo105514);
smo100790.setStemDirection(dirsmo105514);
smo100791.setStemDirection(dirsmo105514);
const smo105514 = new VF.Beam([smo100788,smo100789,smo100790,smo100791]);
const dirsmo105517 = smo103637.getStemDirection();
smo103637.setStemDirection(dirsmo105517);
smo103638.setStemDirection(dirsmo105517);
const smo105517 = new VF.Beam([smo103637,smo103638]);
const dirsmo105518 = smo103639.getStemDirection();
smo103639.setStemDirection(dirsmo105518);
smo103640.setStemDirection(dirsmo105518);
const smo105518 = new VF.Beam([smo103639,smo103640]);
 
// formatting measures in staff group smo99711
fmtsmo10080516.format([smo100805v0,smo103654v0], 281);
const stavesmo100805 = new VF.Stave(1253, 1132, 295);
stavesmo100805.setAttribute('id', 'stavesmo100805');
stavesmo100805.setBegBarType(VF.Barline.type.NONE);
stavesmo100805.setContext(context);
stavesmo100805.draw();
smo100805v0.draw(context, stavesmo100805);
smo105513.setContext(context);
smo105513.draw();
smo105514.setContext(context);
smo105514.draw();
const stavesmo103654 = new VF.Stave(1253, 1287, 295);
stavesmo103654.setAttribute('id', 'stavesmo103654');
stavesmo103654.setBegBarType(VF.Barline.type.NONE);
stavesmo103654.setContext(context);
stavesmo103654.draw();
smo103654v0.draw(context, stavesmo103654);
smo105517.setContext(context);
smo105517.draw();
smo105518.setContext(context);
smo105518.draw();
const fmtsmo10082717 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo100827v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100827v0ar = [];
const smo100806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100806.setAttribute('id', 'smo100806');
smo100827v0ar.push(smo100806);
const smo100807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100807.setAttribute('id', 'smo100807');
smo100827v0ar.push(smo100807);
const smo100808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo100808.setAttribute('id', 'smo100808');
smo100827v0ar.push(smo100808);
const smo100809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100809.setAttribute('id', 'smo100809');
smo100827v0ar.push(smo100809);
const smo100810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo100810.setAttribute('id', 'smo100810');
smo100827v0ar.push(smo100810);
const smo100811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100811.setAttribute('id', 'smo100811');
smo100827v0ar.push(smo100811);
const smo100812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo100812.setAttribute('id', 'smo100812');
smo100827v0ar.push(smo100812);
const smo100813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100813.setAttribute('id', 'smo100813');
smo100827v0ar.push(smo100813);
smo100827v0.addTickables(smo100827v0ar)
fmtsmo10082717.joinVoices([smo100827v0]);
const fmtsmo10367217 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo103672v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103672v0ar = [];
const smo103655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo103655.setAttribute('id', 'smo103655');
smo103672v0ar.push(smo103655);
const smo103656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo103656.setAttribute('id', 'smo103656');
smo103672v0ar.push(smo103656);
const smo103657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo103657.setAttribute('id', 'smo103657');
const smo1036570acc = new VF.Accidental('b');
smo103657.addModifier(smo1036570acc, 0);
const smo1036571acc = new VF.Accidental('b');
smo103657.addModifier(smo1036571acc, 1);
smo103672v0ar.push(smo103657);
const smo103658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo103658.setAttribute('id', 'smo103658');
smo103672v0ar.push(smo103658);
smo103672v0.addTickables(smo103672v0ar)
fmtsmo10367217.joinVoices([smo103672v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105521 = smo100806.getStemDirection();
smo100806.setStemDirection(dirsmo105521);
smo100807.setStemDirection(dirsmo105521);
smo100808.setStemDirection(dirsmo105521);
smo100809.setStemDirection(dirsmo105521);
const smo105521 = new VF.Beam([smo100806,smo100807,smo100808,smo100809]);
const dirsmo105522 = smo100810.getStemDirection();
smo100810.setStemDirection(dirsmo105522);
smo100811.setStemDirection(dirsmo105522);
smo100812.setStemDirection(dirsmo105522);
smo100813.setStemDirection(dirsmo105522);
const smo105522 = new VF.Beam([smo100810,smo100811,smo100812,smo100813]);
const dirsmo105525 = smo103655.getStemDirection();
smo103655.setStemDirection(dirsmo105525);
smo103656.setStemDirection(dirsmo105525);
const smo105525 = new VF.Beam([smo103655,smo103656]);
const dirsmo105526 = smo103657.getStemDirection();
smo103657.setStemDirection(dirsmo105526);
smo103658.setStemDirection(dirsmo105526);
const smo105526 = new VF.Beam([smo103657,smo103658]);
 
// formatting measures in staff group smo99711
fmtsmo10082717.format([smo100827v0,smo103672v0], 281);
const stavesmo100827 = new VF.Stave(1548, 1132, 295);
stavesmo100827.setAttribute('id', 'stavesmo100827');
stavesmo100827.setBegBarType(VF.Barline.type.NONE);
stavesmo100827.setContext(context);
stavesmo100827.draw();
smo100827v0.draw(context, stavesmo100827);
smo105521.setContext(context);
smo105521.draw();
smo105522.setContext(context);
smo105522.draw();
const stavesmo103672 = new VF.Stave(1548, 1287, 295);
stavesmo103672.setAttribute('id', 'stavesmo103672');
stavesmo103672.setBegBarType(VF.Barline.type.NONE);
stavesmo103672.setContext(context);
stavesmo103672.draw();
smo103672v0.draw(context, stavesmo103672);
smo105525.setContext(context);
smo105525.draw();
smo105526.setContext(context);
smo105526.draw();
const rightsmo99711stavesmo1008271 = new VF.StaveConnector(stavesmo100827, stavesmo103672).setType(0);
rightsmo99711stavesmo1008271.setContext(context).draw();
const fmtsmo10084818 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo100848v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100848v0ar = [];
const smo100828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100828.setAttribute('id', 'smo100828');
smo100848v0ar.push(smo100828);
const smo100829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100829.setAttribute('id', 'smo100829');
smo100848v0ar.push(smo100829);
const smo100830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100830.setAttribute('id', 'smo100830');
smo100848v0ar.push(smo100830);
const smo100831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100831.setAttribute('id', 'smo100831');
smo100848v0ar.push(smo100831);
const smo100832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo100832.setAttribute('id', 'smo100832');
smo100848v0ar.push(smo100832);
const smo100833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo100833.setAttribute('id', 'smo100833');
smo100848v0ar.push(smo100833);
const smo100834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo100834.setAttribute('id', 'smo100834');
smo100848v0ar.push(smo100834);
smo100848v0.addTickables(smo100848v0ar)
fmtsmo10084818.joinVoices([smo100848v0]);
const fmtsmo10369018 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo103690v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103690v0ar = [];
const smo103673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103673.setAttribute('id', 'smo103673');
smo103690v0ar.push(smo103673);
const smo103674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103674.setAttribute('id', 'smo103674');
smo103690v0ar.push(smo103674);
const smo103675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103675.setAttribute('id', 'smo103675');
smo103690v0ar.push(smo103675);
const smo103676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo103676.setAttribute('id', 'smo103676');
smo103690v0ar.push(smo103676);
smo103690v0.addTickables(smo103690v0ar)
fmtsmo10369018.joinVoices([smo103690v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105537 = smo100828.getStemDirection();
smo100828.setStemDirection(dirsmo105537);
smo100829.setStemDirection(dirsmo105537);
smo100830.setStemDirection(dirsmo105537);
smo100831.setStemDirection(dirsmo105537);
const smo105537 = new VF.Beam([smo100828,smo100829,smo100830,smo100831]);
const dirsmo105538 = smo100832.getStemDirection();
smo100832.setStemDirection(dirsmo105538);
smo100833.setStemDirection(dirsmo105538);
smo100834.setStemDirection(dirsmo105538);
const smo105538 = new VF.Beam([smo100832,smo100833,smo100834]);
const dirsmo105541 = smo103673.getStemDirection();
smo103673.setStemDirection(dirsmo105541);
smo103674.setStemDirection(dirsmo105541);
const smo105541 = new VF.Beam([smo103673,smo103674]);
const dirsmo105542 = smo103675.getStemDirection();
smo103675.setStemDirection(dirsmo105542);
smo103676.setStemDirection(dirsmo105542);
const smo105542 = new VF.Beam([smo103675,smo103676]);
 
// formatting measures in staff group smo99711
fmtsmo10084818.format([smo100848v0,smo103690v0], 237);
const stavesmo100848 = new VF.Stave(73, 1481, 295);
stavesmo100848.setAttribute('id', 'stavesmo100848');
stavesmo100848.setBegBarType(1);
stavesmo100848.addClef('treble');
stavesmo100848.setContext(context);
stavesmo100848.draw();
smo100848v0.draw(context, stavesmo100848);
smo105537.setContext(context);
smo105537.draw();
smo105538.setContext(context);
smo105538.draw();
const stavesmo103690 = new VF.Stave(73, 1625, 295);
stavesmo103690.setAttribute('id', 'stavesmo103690');
stavesmo103690.setBegBarType(1);
stavesmo103690.addClef('bass');
stavesmo103690.setContext(context);
stavesmo103690.draw();
smo103690v0.draw(context, stavesmo103690);
smo105541.setContext(context);
smo105541.draw();
smo105542.setContext(context);
smo105542.draw();
const leftsmo99711stavesmo1008481 = new VF.StaveConnector(stavesmo100848, stavesmo103690).setType(3);
leftsmo99711stavesmo1008481.setContext(context).draw();
const fmtsmo10086719 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo100867v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100867v0ar = [];
const smo100849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100849.setAttribute('id', 'smo100849');
smo100867v0ar.push(smo100849);
const smo100850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100850.setAttribute('id', 'smo100850');
smo100867v0ar.push(smo100850);
const smo100851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo100851.setAttribute('id', 'smo100851');
smo100867v0ar.push(smo100851);
const smo100852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo100852.setAttribute('id', 'smo100852');
const smo1008520acc = new VF.Accidental('b');
smo100852.addModifier(smo1008520acc, 0);
smo100867v0ar.push(smo100852);
smo100867v0.addTickables(smo100867v0ar)
fmtsmo10086719.joinVoices([smo100867v0]);
const fmtsmo10370919 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo103709v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103709v0ar = [];
const smo103691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo103691.setAttribute('id', 'smo103691');
smo103709v0ar.push(smo103691);
const smo103692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103692.setAttribute('id', 'smo103692');
smo103709v0ar.push(smo103692);
const smo103693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo103693.setAttribute('id', 'smo103693');
smo103709v0ar.push(smo103693);
const smo103694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo103694.setAttribute('id', 'smo103694');
smo103709v0ar.push(smo103694);
smo103709v0.addTickables(smo103709v0ar)
fmtsmo10370919.joinVoices([smo103709v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105545 = smo100850.getStemDirection();
smo100850.setStemDirection(dirsmo105545);
smo100851.setStemDirection(dirsmo105545);
smo100852.setStemDirection(dirsmo105545);
const smo105545 = new VF.Beam([smo100850,smo100851,smo100852]);
const dirsmo105547 = smo103691.getStemDirection();
smo103691.setStemDirection(dirsmo105547);
smo103692.setStemDirection(dirsmo105547);
const smo105547 = new VF.Beam([smo103691,smo103692]);
const dirsmo105548 = smo103693.getStemDirection();
smo103693.setStemDirection(dirsmo105548);
smo103694.setStemDirection(dirsmo105548);
const smo105548 = new VF.Beam([smo103693,smo103694]);
 
// formatting measures in staff group smo99711
fmtsmo10086719.format([smo100867v0,smo103709v0], 277);
const stavesmo100867 = new VF.Stave(368, 1481, 295);
stavesmo100867.setAttribute('id', 'stavesmo100867');
stavesmo100867.setBegBarType(VF.Barline.type.NONE);
stavesmo100867.setEndBarType(5);
stavesmo100867.setContext(context);
stavesmo100867.draw();
smo100867v0.draw(context, stavesmo100867);
smo105545.setContext(context);
smo105545.draw();
const stavesmo103709 = new VF.Stave(368, 1625, 295);
stavesmo103709.setAttribute('id', 'stavesmo103709');
stavesmo103709.setBegBarType(VF.Barline.type.NONE);
stavesmo103709.setEndBarType(5);
stavesmo103709.setContext(context);
stavesmo103709.draw();
smo103709v0.draw(context, stavesmo103709);
smo105547.setContext(context);
smo105547.draw();
smo105548.setContext(context);
smo105548.draw();
const fmtsmo10088720 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo100887v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100887v0ar = [];
const smo100868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100868.setAttribute('id', 'smo100868');
smo100887v0ar.push(smo100868);
const smo100869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo100869.setAttribute('id', 'smo100869');
smo100887v0ar.push(smo100869);
const smo100870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo100870.setAttribute('id', 'smo100870');
smo100887v0ar.push(smo100870);
const smo100871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo100871.setAttribute('id', 'smo100871');
smo100887v0ar.push(smo100871);
const smo100872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo100872.setAttribute('id', 'smo100872');
const smo1008720acc = new VF.Accidental('b');
smo100872.addModifier(smo1008720acc, 0);
const smo1008721acc = new VF.Accidental('b');
smo100872.addModifier(smo1008721acc, 1);
const smo1008722acc = new VF.Accidental('b');
smo100872.addModifier(smo1008722acc, 2);
smo100887v0ar.push(smo100872);
smo100887v0.addTickables(smo100887v0ar)
fmtsmo10088720.joinVoices([smo100887v0]);
const fmtsmo10372820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo103728v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103728v0ar = [];
const smo103710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo103710.setAttribute('id', 'smo103710');
smo103728v0ar.push(smo103710);
const smo103711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo103711.setAttribute('id', 'smo103711');
smo103728v0ar.push(smo103711);
const smo103712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo103712.setAttribute('id', 'smo103712');
smo103728v0ar.push(smo103712);
const smo103713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo103713.setAttribute('id', 'smo103713');
smo103728v0ar.push(smo103713);
smo103728v0.addTickables(smo103728v0ar)
fmtsmo10372820.joinVoices([smo103728v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105550 = smo100869.getStemDirection();
smo100869.setStemDirection(dirsmo105550);
smo100870.setStemDirection(dirsmo105550);
smo100871.setStemDirection(dirsmo105550);
smo100872.setStemDirection(dirsmo105550);
const smo105550 = new VF.Beam([smo100869,smo100870,smo100871,smo100872]);
const dirsmo105553 = smo103710.getStemDirection();
smo103710.setStemDirection(dirsmo105553);
smo103711.setStemDirection(dirsmo105553);
const smo105553 = new VF.Beam([smo103710,smo103711]);
 
// formatting measures in staff group smo99711
fmtsmo10088720.format([smo100887v0,smo103728v0], 281);
const stavesmo100887 = new VF.Stave(663, 1481, 295);
stavesmo100887.setAttribute('id', 'stavesmo100887');
stavesmo100887.setBegBarType(VF.Barline.type.NONE);
stavesmo100887.setContext(context);
stavesmo100887.draw();
smo100887v0.draw(context, stavesmo100887);
smo105550.setContext(context);
smo105550.draw();
const stavesmo103728 = new VF.Stave(663, 1625, 295);
stavesmo103728.setAttribute('id', 'stavesmo103728');
stavesmo103728.setBegBarType(VF.Barline.type.NONE);
stavesmo103728.setContext(context);
stavesmo103728.draw();
smo103728v0.draw(context, stavesmo103728);
smo105553.setContext(context);
smo105553.draw();
const fmtsmo10090821 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo100908v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100908v0ar = [];
const smo100888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100888.setAttribute('id', 'smo100888');
smo100908v0ar.push(smo100888);
const smo100889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo100889.setAttribute('id', 'smo100889');
smo100908v0ar.push(smo100889);
const smo100890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100890.setAttribute('id', 'smo100890');
smo100908v0ar.push(smo100890);
const smo100891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100891.setAttribute('id', 'smo100891');
smo100908v0ar.push(smo100891);
const smo100892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo100892.setAttribute('id', 'smo100892');
smo100908v0ar.push(smo100892);
const smo100893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo100893.setAttribute('id', 'smo100893');
smo100908v0ar.push(smo100893);
const smo100894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo100894.setAttribute('id', 'smo100894');
const smo1008940acc = new VF.Accidental('b');
smo100894.addModifier(smo1008940acc, 0);
const smo1008941acc = new VF.Accidental('b');
smo100894.addModifier(smo1008941acc, 1);
const smo1008942acc = new VF.Accidental('b');
smo100894.addModifier(smo1008942acc, 2);
smo100908v0ar.push(smo100894);
smo100908v0.addTickables(smo100908v0ar)
fmtsmo10090821.joinVoices([smo100908v0]);
const fmtsmo10374621 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo103746v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103746v0ar = [];
const smo103729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo103729.setAttribute('id', 'smo103729');
smo103746v0ar.push(smo103729);
const smo103730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103730.setAttribute('id', 'smo103730');
smo103746v0ar.push(smo103730);
const smo103731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103731.setAttribute('id', 'smo103731');
smo103746v0ar.push(smo103731);
const smo103732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103732.setAttribute('id', 'smo103732');
smo103746v0ar.push(smo103732);
smo103746v0.addTickables(smo103746v0ar)
fmtsmo10374621.joinVoices([smo103746v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105556 = smo100888.getStemDirection();
smo100888.setStemDirection(dirsmo105556);
smo100889.setStemDirection(dirsmo105556);
smo100890.setStemDirection(dirsmo105556);
const smo105556 = new VF.Beam([smo100888,smo100889,smo100890]);
const dirsmo105557 = smo100891.getStemDirection();
smo100891.setStemDirection(dirsmo105557);
smo100892.setStemDirection(dirsmo105557);
smo100893.setStemDirection(dirsmo105557);
smo100894.setStemDirection(dirsmo105557);
const smo105557 = new VF.Beam([smo100891,smo100892,smo100893,smo100894]);
const dirsmo105559 = smo103729.getStemDirection();
smo103729.setStemDirection(dirsmo105559);
smo103730.setStemDirection(dirsmo105559);
const smo105559 = new VF.Beam([smo103729,smo103730]);
const dirsmo105560 = smo103731.getStemDirection();
smo103731.setStemDirection(dirsmo105560);
smo103732.setStemDirection(dirsmo105560);
const smo105560 = new VF.Beam([smo103731,smo103732]);
 
// formatting measures in staff group smo99711
fmtsmo10090821.format([smo100908v0,smo103746v0], 272);
const stavesmo100908 = new VF.Stave(958, 1481, 295);
stavesmo100908.setAttribute('id', 'stavesmo100908');
stavesmo100908.setBegBarType(4);
stavesmo100908.setContext(context);
stavesmo100908.draw();
smo100908v0.draw(context, stavesmo100908);
smo105556.setContext(context);
smo105556.draw();
smo105557.setContext(context);
smo105557.draw();
const stavesmo103746 = new VF.Stave(958, 1625, 295);
stavesmo103746.setAttribute('id', 'stavesmo103746');
stavesmo103746.setBegBarType(4);
stavesmo103746.setContext(context);
stavesmo103746.draw();
smo103746v0.draw(context, stavesmo103746);
smo105559.setContext(context);
smo105559.draw();
smo105560.setContext(context);
smo105560.draw();
const fmtsmo10092922 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo100929v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100929v0ar = [];
const smo100909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100909.setAttribute('id', 'smo100909');
smo100929v0ar.push(smo100909);
const smo100910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo100910.setAttribute('id', 'smo100910');
smo100929v0ar.push(smo100910);
const smo100911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100911.setAttribute('id', 'smo100911');
smo100929v0ar.push(smo100911);
const smo100912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100912.setAttribute('id', 'smo100912');
smo100929v0ar.push(smo100912);
const smo100913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo100913.setAttribute('id', 'smo100913');
smo100929v0ar.push(smo100913);
const smo100914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100914.setAttribute('id', 'smo100914');
smo100929v0ar.push(smo100914);
const smo100915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo100915.setAttribute('id', 'smo100915');
smo100929v0ar.push(smo100915);
smo100929v0.addTickables(smo100929v0ar)
fmtsmo10092922.joinVoices([smo100929v0]);
const fmtsmo10376422 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo103764v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103764v0ar = [];
const smo103747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103747.setAttribute('id', 'smo103747');
smo103764v0ar.push(smo103747);
const smo103748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103748.setAttribute('id', 'smo103748');
smo103764v0ar.push(smo103748);
const smo103749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103749.setAttribute('id', 'smo103749');
smo103764v0ar.push(smo103749);
const smo103750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103750.setAttribute('id', 'smo103750');
smo103764v0ar.push(smo103750);
smo103764v0.addTickables(smo103764v0ar)
fmtsmo10376422.joinVoices([smo103764v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105562 = smo100909.getStemDirection();
smo100909.setStemDirection(dirsmo105562);
smo100910.setStemDirection(dirsmo105562);
smo100911.setStemDirection(dirsmo105562);
const smo105562 = new VF.Beam([smo100909,smo100910,smo100911]);
const dirsmo105563 = smo100912.getStemDirection();
smo100912.setStemDirection(dirsmo105563);
smo100913.setStemDirection(dirsmo105563);
smo100914.setStemDirection(dirsmo105563);
smo100915.setStemDirection(dirsmo105563);
const smo105563 = new VF.Beam([smo100912,smo100913,smo100914,smo100915]);
const dirsmo105566 = smo103747.getStemDirection();
smo103747.setStemDirection(dirsmo105566);
smo103748.setStemDirection(dirsmo105566);
const smo105566 = new VF.Beam([smo103747,smo103748]);
const dirsmo105567 = smo103749.getStemDirection();
smo103749.setStemDirection(dirsmo105567);
smo103750.setStemDirection(dirsmo105567);
const smo105567 = new VF.Beam([smo103749,smo103750]);
 
// formatting measures in staff group smo99711
fmtsmo10092922.format([smo100929v0,smo103764v0], 281);
const stavesmo100929 = new VF.Stave(1253, 1481, 295);
stavesmo100929.setAttribute('id', 'stavesmo100929');
stavesmo100929.setBegBarType(VF.Barline.type.NONE);
stavesmo100929.setContext(context);
stavesmo100929.draw();
smo100929v0.draw(context, stavesmo100929);
smo105562.setContext(context);
smo105562.draw();
smo105563.setContext(context);
smo105563.draw();
const stavesmo103764 = new VF.Stave(1253, 1625, 295);
stavesmo103764.setAttribute('id', 'stavesmo103764');
stavesmo103764.setBegBarType(VF.Barline.type.NONE);
stavesmo103764.setContext(context);
stavesmo103764.draw();
smo103764v0.draw(context, stavesmo103764);
smo105566.setContext(context);
smo105566.draw();
smo105567.setContext(context);
smo105567.draw();
const fmtsmo10095123 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo100951v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100951v0ar = [];
const smo100930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo100930.setAttribute('id', 'smo100930');
smo100951v0ar.push(smo100930);
const smo100931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo100931.setAttribute('id', 'smo100931');
smo100951v0ar.push(smo100931);
const smo100932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100932.setAttribute('id', 'smo100932');
smo100951v0ar.push(smo100932);
const smo100933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo100933.setAttribute('id', 'smo100933');
smo100951v0ar.push(smo100933);
const smo100934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo100934.setAttribute('id', 'smo100934');
smo100951v0ar.push(smo100934);
const smo100935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo100935.setAttribute('id', 'smo100935');
smo100951v0ar.push(smo100935);
const smo100936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo100936.setAttribute('id', 'smo100936');
smo100951v0ar.push(smo100936);
const smo100937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo100937.setAttribute('id', 'smo100937');
smo100951v0ar.push(smo100937);
smo100951v0.addTickables(smo100951v0ar)
fmtsmo10095123.joinVoices([smo100951v0]);
const fmtsmo10378223 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo103782v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103782v0ar = [];
const smo103765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo103765.setAttribute('id', 'smo103765');
smo103782v0ar.push(smo103765);
const smo103766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo103766.setAttribute('id', 'smo103766');
smo103782v0ar.push(smo103766);
const smo103767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo103767.setAttribute('id', 'smo103767');
smo103782v0ar.push(smo103767);
const smo103768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo103768.setAttribute('id', 'smo103768');
const smo1037680acc = new VF.Accidental('b');
smo103768.addModifier(smo1037680acc, 0);
smo103782v0ar.push(smo103768);
smo103782v0.addTickables(smo103782v0ar)
fmtsmo10378223.joinVoices([smo103782v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105570 = smo100930.getStemDirection();
smo100930.setStemDirection(dirsmo105570);
smo100931.setStemDirection(dirsmo105570);
smo100932.setStemDirection(dirsmo105570);
smo100933.setStemDirection(dirsmo105570);
const smo105570 = new VF.Beam([smo100930,smo100931,smo100932,smo100933]);
const dirsmo105571 = smo100934.getStemDirection();
smo100934.setStemDirection(dirsmo105571);
smo100935.setStemDirection(dirsmo105571);
smo100936.setStemDirection(dirsmo105571);
smo100937.setStemDirection(dirsmo105571);
const smo105571 = new VF.Beam([smo100934,smo100935,smo100936,smo100937]);
const dirsmo105574 = smo103765.getStemDirection();
smo103765.setStemDirection(dirsmo105574);
smo103766.setStemDirection(dirsmo105574);
const smo105574 = new VF.Beam([smo103765,smo103766]);
const dirsmo105575 = smo103767.getStemDirection();
smo103767.setStemDirection(dirsmo105575);
smo103768.setStemDirection(dirsmo105575);
const smo105575 = new VF.Beam([smo103767,smo103768]);
 
// formatting measures in staff group smo99711
fmtsmo10095123.format([smo100951v0,smo103782v0], 281);
const stavesmo100951 = new VF.Stave(1548, 1481, 295);
stavesmo100951.setAttribute('id', 'stavesmo100951');
stavesmo100951.setBegBarType(VF.Barline.type.NONE);
stavesmo100951.setContext(context);
stavesmo100951.draw();
smo100951v0.draw(context, stavesmo100951);
smo105570.setContext(context);
smo105570.draw();
smo105571.setContext(context);
smo105571.draw();
const stavesmo103782 = new VF.Stave(1548, 1625, 295);
stavesmo103782.setAttribute('id', 'stavesmo103782');
stavesmo103782.setBegBarType(VF.Barline.type.NONE);
stavesmo103782.setContext(context);
stavesmo103782.draw();
smo103782v0.draw(context, stavesmo103782);
smo105574.setContext(context);
smo105574.draw();
smo105575.setContext(context);
smo105575.draw();
const rightsmo99711stavesmo1009511 = new VF.StaveConnector(stavesmo100951, stavesmo103782).setType(0);
rightsmo99711stavesmo1009511.setContext(context).draw();
const fmtsmo10097324 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo100973v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100973v0ar = [];
const smo100952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo100952.setAttribute('id', 'smo100952');
smo100973v0ar.push(smo100952);
const smo100953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo100953.setAttribute('id', 'smo100953');
smo100973v0ar.push(smo100953);
const smo100954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo100954.setAttribute('id', 'smo100954');
smo100973v0ar.push(smo100954);
const smo100955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo100955.setAttribute('id', 'smo100955');
smo100973v0ar.push(smo100955);
const smo100956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo100956.setAttribute('id', 'smo100956');
smo100973v0ar.push(smo100956);
const smo100957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo100957.setAttribute('id', 'smo100957');
smo100973v0ar.push(smo100957);
const smo100958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo100958.setAttribute('id', 'smo100958');
smo100973v0ar.push(smo100958);
const smo100959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo100959.setAttribute('id', 'smo100959');
smo100973v0ar.push(smo100959);
smo100973v0.addTickables(smo100973v0ar)
fmtsmo10097324.joinVoices([smo100973v0]);
const fmtsmo10380024 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo103800v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103800v0ar = [];
const smo103783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo103783.setAttribute('id', 'smo103783');
smo103800v0ar.push(smo103783);
const smo103784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103784.setAttribute('id', 'smo103784');
smo103800v0ar.push(smo103784);
const smo103785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103785.setAttribute('id', 'smo103785');
smo103800v0ar.push(smo103785);
const smo103786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103786.setAttribute('id', 'smo103786');
smo103800v0ar.push(smo103786);
smo103800v0.addTickables(smo103800v0ar)
fmtsmo10380024.joinVoices([smo103800v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105586 = smo100952.getStemDirection();
smo100952.setStemDirection(dirsmo105586);
smo100953.setStemDirection(dirsmo105586);
smo100954.setStemDirection(dirsmo105586);
smo100955.setStemDirection(dirsmo105586);
const smo105586 = new VF.Beam([smo100952,smo100953,smo100954,smo100955]);
const dirsmo105587 = smo100956.getStemDirection();
smo100956.setStemDirection(dirsmo105587);
smo100957.setStemDirection(dirsmo105587);
smo100958.setStemDirection(dirsmo105587);
smo100959.setStemDirection(dirsmo105587);
const smo105587 = new VF.Beam([smo100956,smo100957,smo100958,smo100959]);
const dirsmo105590 = smo103783.getStemDirection();
smo103783.setStemDirection(dirsmo105590);
smo103784.setStemDirection(dirsmo105590);
const smo105590 = new VF.Beam([smo103783,smo103784]);
const dirsmo105591 = smo103785.getStemDirection();
smo103785.setStemDirection(dirsmo105591);
smo103786.setStemDirection(dirsmo105591);
const smo105591 = new VF.Beam([smo103785,smo103786]);
 
// formatting measures in staff group smo99711
fmtsmo10097324.format([smo100973v0,smo103800v0], 237);
const stavesmo100973 = new VF.Stave(73, 1828, 295);
stavesmo100973.setAttribute('id', 'stavesmo100973');
stavesmo100973.setBegBarType(1);
stavesmo100973.addClef('treble');
stavesmo100973.setContext(context);
stavesmo100973.draw();
smo100973v0.draw(context, stavesmo100973);
smo105586.setContext(context);
smo105586.draw();
smo105587.setContext(context);
smo105587.draw();
const stavesmo103800 = new VF.Stave(73, 1988, 295);
stavesmo103800.setAttribute('id', 'stavesmo103800');
stavesmo103800.setBegBarType(1);
stavesmo103800.addClef('bass');
stavesmo103800.setContext(context);
stavesmo103800.draw();
smo103800v0.draw(context, stavesmo103800);
smo105590.setContext(context);
smo105590.draw();
smo105591.setContext(context);
smo105591.draw();
const leftsmo99711stavesmo1009731 = new VF.StaveConnector(stavesmo100973, stavesmo103800).setType(3);
leftsmo99711stavesmo1009731.setContext(context).draw();
const fmtsmo10099425 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo100994v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100994v0ar = [];
const smo100974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100974.setAttribute('id', 'smo100974');
smo100994v0ar.push(smo100974);
const smo100975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo100975.setAttribute('id', 'smo100975');
smo100994v0ar.push(smo100975);
const smo100976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100976.setAttribute('id', 'smo100976');
smo100994v0ar.push(smo100976);
const smo100977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100977.setAttribute('id', 'smo100977');
smo100994v0ar.push(smo100977);
const smo100978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo100978.setAttribute('id', 'smo100978');
smo100994v0ar.push(smo100978);
const smo100979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo100979.setAttribute('id', 'smo100979');
smo100994v0ar.push(smo100979);
const smo100980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo100980.setAttribute('id', 'smo100980');
const smo1009800acc = new VF.Accidental('b');
smo100980.addModifier(smo1009800acc, 0);
const smo1009801acc = new VF.Accidental('b');
smo100980.addModifier(smo1009801acc, 1);
const smo1009802acc = new VF.Accidental('b');
smo100980.addModifier(smo1009802acc, 2);
smo100994v0ar.push(smo100980);
smo100994v0.addTickables(smo100994v0ar)
fmtsmo10099425.joinVoices([smo100994v0]);
const fmtsmo10381825 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo103818v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103818v0ar = [];
const smo103801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103801.setAttribute('id', 'smo103801');
smo103818v0ar.push(smo103801);
const smo103802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103802.setAttribute('id', 'smo103802');
smo103818v0ar.push(smo103802);
const smo103803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103803.setAttribute('id', 'smo103803');
smo103818v0ar.push(smo103803);
const smo103804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103804.setAttribute('id', 'smo103804');
smo103818v0ar.push(smo103804);
smo103818v0.addTickables(smo103818v0ar)
fmtsmo10381825.joinVoices([smo103818v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105594 = smo100974.getStemDirection();
smo100974.setStemDirection(dirsmo105594);
smo100975.setStemDirection(dirsmo105594);
smo100976.setStemDirection(dirsmo105594);
const smo105594 = new VF.Beam([smo100974,smo100975,smo100976]);
const dirsmo105595 = smo100977.getStemDirection();
smo100977.setStemDirection(dirsmo105595);
smo100978.setStemDirection(dirsmo105595);
smo100979.setStemDirection(dirsmo105595);
smo100980.setStemDirection(dirsmo105595);
const smo105595 = new VF.Beam([smo100977,smo100978,smo100979,smo100980]);
const dirsmo105598 = smo103801.getStemDirection();
smo103801.setStemDirection(dirsmo105598);
smo103802.setStemDirection(dirsmo105598);
const smo105598 = new VF.Beam([smo103801,smo103802]);
const dirsmo105599 = smo103803.getStemDirection();
smo103803.setStemDirection(dirsmo105599);
smo103804.setStemDirection(dirsmo105599);
const smo105599 = new VF.Beam([smo103803,smo103804]);
 
// formatting measures in staff group smo99711
fmtsmo10099425.format([smo100994v0,smo103818v0], 281);
const stavesmo100994 = new VF.Stave(368, 1828, 295);
stavesmo100994.setAttribute('id', 'stavesmo100994');
stavesmo100994.setBegBarType(VF.Barline.type.NONE);
stavesmo100994.setContext(context);
stavesmo100994.draw();
smo100994v0.draw(context, stavesmo100994);
smo105594.setContext(context);
smo105594.draw();
smo105595.setContext(context);
smo105595.draw();
const stavesmo103818 = new VF.Stave(368, 1988, 295);
stavesmo103818.setAttribute('id', 'stavesmo103818');
stavesmo103818.setBegBarType(VF.Barline.type.NONE);
stavesmo103818.setContext(context);
stavesmo103818.draw();
smo103818v0.draw(context, stavesmo103818);
smo105598.setContext(context);
smo105598.draw();
smo105599.setContext(context);
smo105599.draw();
const fmtsmo10101526 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo101015v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101015v0ar = [];
const smo100995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100995.setAttribute('id', 'smo100995');
smo101015v0ar.push(smo100995);
const smo100996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo100996.setAttribute('id', 'smo100996');
smo101015v0ar.push(smo100996);
const smo100997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100997.setAttribute('id', 'smo100997');
smo101015v0ar.push(smo100997);
const smo100998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo100998.setAttribute('id', 'smo100998');
smo101015v0ar.push(smo100998);
const smo100999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo100999.setAttribute('id', 'smo100999');
smo101015v0ar.push(smo100999);
const smo101000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo101000.setAttribute('id', 'smo101000');
smo101015v0ar.push(smo101000);
const smo101001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo101001.setAttribute('id', 'smo101001');
const smo1010010acc = new VF.Accidental('b');
smo101001.addModifier(smo1010010acc, 0);
smo101015v0ar.push(smo101001);
smo101015v0.addTickables(smo101015v0ar)
fmtsmo10101526.joinVoices([smo101015v0]);
const fmtsmo10383626 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo103836v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103836v0ar = [];
const smo103819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo103819.setAttribute('id', 'smo103819');
smo103836v0ar.push(smo103819);
const smo103820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103820.setAttribute('id', 'smo103820');
smo103836v0ar.push(smo103820);
const smo103821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo103821.setAttribute('id', 'smo103821');
smo103836v0ar.push(smo103821);
const smo103822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo103822.setAttribute('id', 'smo103822');
const smo1038220acc = new VF.Accidental('b');
smo103822.addModifier(smo1038220acc, 0);
smo103836v0ar.push(smo103822);
smo103836v0.addTickables(smo103836v0ar)
fmtsmo10383626.joinVoices([smo103836v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105602 = smo100995.getStemDirection();
smo100995.setStemDirection(dirsmo105602);
smo100996.setStemDirection(dirsmo105602);
smo100997.setStemDirection(dirsmo105602);
const smo105602 = new VF.Beam([smo100995,smo100996,smo100997]);
const dirsmo105603 = smo100998.getStemDirection();
smo100998.setStemDirection(dirsmo105603);
smo100999.setStemDirection(dirsmo105603);
smo101000.setStemDirection(dirsmo105603);
smo101001.setStemDirection(dirsmo105603);
const smo105603 = new VF.Beam([smo100998,smo100999,smo101000,smo101001]);
const dirsmo105606 = smo103819.getStemDirection();
smo103819.setStemDirection(dirsmo105606);
smo103820.setStemDirection(dirsmo105606);
const smo105606 = new VF.Beam([smo103819,smo103820]);
const dirsmo105607 = smo103821.getStemDirection();
smo103821.setStemDirection(dirsmo105607);
smo103822.setStemDirection(dirsmo105607);
const smo105607 = new VF.Beam([smo103821,smo103822]);
 
// formatting measures in staff group smo99711
fmtsmo10101526.format([smo101015v0,smo103836v0], 281);
const stavesmo101015 = new VF.Stave(663, 1828, 295);
stavesmo101015.setAttribute('id', 'stavesmo101015');
stavesmo101015.setBegBarType(VF.Barline.type.NONE);
stavesmo101015.setContext(context);
stavesmo101015.draw();
smo101015v0.draw(context, stavesmo101015);
smo105602.setContext(context);
smo105602.draw();
smo105603.setContext(context);
smo105603.draw();
const stavesmo103836 = new VF.Stave(663, 1988, 295);
stavesmo103836.setAttribute('id', 'stavesmo103836');
stavesmo103836.setBegBarType(VF.Barline.type.NONE);
stavesmo103836.setContext(context);
stavesmo103836.draw();
smo103836v0.draw(context, stavesmo103836);
smo105606.setContext(context);
smo105606.draw();
smo105607.setContext(context);
smo105607.draw();
const fmtsmo10103627 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo101036v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101036v0ar = [];
const smo101016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo101016.setAttribute('id', 'smo101016');
smo101036v0ar.push(smo101016);
const smo101017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo101017.setAttribute('id', 'smo101017');
smo101036v0ar.push(smo101017);
const smo101018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo101018.setAttribute('id', 'smo101018');
const smo1010181acc = new VF.Accidental('b');
smo101018.addModifier(smo1010181acc, 1);
smo101036v0ar.push(smo101018);
const smo101019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo101019.setAttribute('id', 'smo101019');
smo101036v0ar.push(smo101019);
const smo101020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo101020.setAttribute('id', 'smo101020');
smo101036v0ar.push(smo101020);
const smo101021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo101021.setAttribute('id', 'smo101021');
smo101036v0ar.push(smo101021);
const smo101022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101022.setAttribute('id', 'smo101022');
smo101036v0ar.push(smo101022);
smo101036v0.addTickables(smo101036v0ar)
fmtsmo10103627.joinVoices([smo101036v0]);
const fmtsmo10385427 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo103854v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103854v0ar = [];
const smo103837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo103837.setAttribute('id', 'smo103837');
smo103854v0ar.push(smo103837);
const smo103838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo103838.setAttribute('id', 'smo103838');
smo103854v0ar.push(smo103838);
const smo103839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo103839.setAttribute('id', 'smo103839');
smo103854v0ar.push(smo103839);
const smo103840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
smo103840.setAttribute('id', 'smo103840');
smo103854v0ar.push(smo103840);
smo103854v0.addTickables(smo103854v0ar)
fmtsmo10385427.joinVoices([smo103854v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105610 = smo101016.getStemDirection();
smo101016.setStemDirection(dirsmo105610);
smo101017.setStemDirection(dirsmo105610);
smo101018.setStemDirection(dirsmo105610);
const smo105610 = new VF.Beam([smo101016,smo101017,smo101018]);
const dirsmo105611 = smo101019.getStemDirection();
smo101019.setStemDirection(dirsmo105611);
smo101020.setStemDirection(dirsmo105611);
smo101021.setStemDirection(dirsmo105611);
smo101022.setStemDirection(dirsmo105611);
const smo105611 = new VF.Beam([smo101019,smo101020,smo101021,smo101022]);
const dirsmo105614 = smo103837.getStemDirection();
smo103837.setStemDirection(dirsmo105614);
smo103838.setStemDirection(dirsmo105614);
const smo105614 = new VF.Beam([smo103837,smo103838]);
const dirsmo105615 = smo103839.getStemDirection();
smo103839.setStemDirection(dirsmo105615);
smo103840.setStemDirection(dirsmo105615);
const smo105615 = new VF.Beam([smo103839,smo103840]);
 
// formatting measures in staff group smo99711
fmtsmo10103627.format([smo101036v0,smo103854v0], 281);
const stavesmo101036 = new VF.Stave(958, 1828, 295);
stavesmo101036.setAttribute('id', 'stavesmo101036');
stavesmo101036.setBegBarType(VF.Barline.type.NONE);
stavesmo101036.setContext(context);
stavesmo101036.draw();
smo101036v0.draw(context, stavesmo101036);
smo105610.setContext(context);
smo105610.draw();
smo105611.setContext(context);
smo105611.draw();
const stavesmo103854 = new VF.Stave(958, 1988, 295);
stavesmo103854.setAttribute('id', 'stavesmo103854');
stavesmo103854.setBegBarType(VF.Barline.type.NONE);
stavesmo103854.setContext(context);
stavesmo103854.draw();
smo103854v0.draw(context, stavesmo103854);
smo105614.setContext(context);
smo105614.draw();
smo105615.setContext(context);
smo105615.draw();
const fmtsmo10105528 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo101055v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101055v0ar = [];
const smo101037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo101037.setAttribute('id', 'smo101037');
smo101055v0ar.push(smo101037);
const smo101038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo101038.setAttribute('id', 'smo101038');
smo101055v0ar.push(smo101038);
const smo101039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo101039.setAttribute('id', 'smo101039');
smo101055v0ar.push(smo101039);
const smo101040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo101040.setAttribute('id', 'smo101040');
smo101055v0ar.push(smo101040);
const smo101041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo101041.setAttribute('id', 'smo101041');
const smo1010410acc = new VF.Accidental('b');
smo101041.addModifier(smo1010410acc, 0);
const smo1010411acc = new VF.Accidental('b');
smo101041.addModifier(smo1010411acc, 1);
const smo1010412acc = new VF.Accidental('b');
smo101041.addModifier(smo1010412acc, 2);
smo101055v0ar.push(smo101041);
smo101055v0.addTickables(smo101055v0ar)
fmtsmo10105528.joinVoices([smo101055v0]);
const fmtsmo10387228 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo103872v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103872v0ar = [];
const smo103855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo103855.setAttribute('id', 'smo103855');
smo103872v0ar.push(smo103855);
const smo103856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo103856.setAttribute('id', 'smo103856');
smo103872v0ar.push(smo103856);
const smo103857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo103857.setAttribute('id', 'smo103857');
smo103872v0ar.push(smo103857);
const smo103858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo103858.setAttribute('id', 'smo103858');
smo103872v0ar.push(smo103858);
smo103872v0.addTickables(smo103872v0ar)
fmtsmo10387228.joinVoices([smo103872v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105618 = smo101038.getStemDirection();
smo101038.setStemDirection(dirsmo105618);
smo101039.setStemDirection(dirsmo105618);
smo101040.setStemDirection(dirsmo105618);
smo101041.setStemDirection(dirsmo105618);
const smo105618 = new VF.Beam([smo101038,smo101039,smo101040,smo101041]);
const dirsmo105621 = smo103855.getStemDirection();
smo103855.setStemDirection(dirsmo105621);
smo103856.setStemDirection(dirsmo105621);
const smo105621 = new VF.Beam([smo103855,smo103856]);
const dirsmo105622 = smo103857.getStemDirection();
smo103857.setStemDirection(dirsmo105622);
smo103858.setStemDirection(dirsmo105622);
const smo105622 = new VF.Beam([smo103857,smo103858]);
 
// formatting measures in staff group smo99711
fmtsmo10105528.format([smo101055v0,smo103872v0], 281);
const stavesmo101055 = new VF.Stave(1253, 1828, 295);
stavesmo101055.setAttribute('id', 'stavesmo101055');
stavesmo101055.setBegBarType(VF.Barline.type.NONE);
stavesmo101055.setContext(context);
stavesmo101055.draw();
smo101055v0.draw(context, stavesmo101055);
smo105618.setContext(context);
smo105618.draw();
const stavesmo103872 = new VF.Stave(1253, 1988, 295);
stavesmo103872.setAttribute('id', 'stavesmo103872');
stavesmo103872.setBegBarType(VF.Barline.type.NONE);
stavesmo103872.setContext(context);
stavesmo103872.draw();
smo103872v0.draw(context, stavesmo103872);
smo105621.setContext(context);
smo105621.draw();
smo105622.setContext(context);
smo105622.draw();
const fmtsmo10107729 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo101077v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101077v0ar = [];
const smo101056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo101056.setAttribute('id', 'smo101056');
smo101077v0ar.push(smo101056);
const smo101058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo101058.setAttribute('id', 'smo101058');
smo101077v0ar.push(smo101058);
const smo101059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo101059.setAttribute('id', 'smo101059');
smo101077v0ar.push(smo101059);
const smo101060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo101060.setAttribute('id', 'smo101060');
smo101077v0ar.push(smo101060);
const smo101061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo101061.setAttribute('id', 'smo101061');
smo101077v0ar.push(smo101061);
const smo101062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo101062.setAttribute('id', 'smo101062');
smo101077v0ar.push(smo101062);
const smo101063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo101063.setAttribute('id', 'smo101063');
const smo1010630acc = new VF.Accidental('b');
smo101063.addModifier(smo1010630acc, 0);
const smo1010631acc = new VF.Accidental('b');
smo101063.addModifier(smo1010631acc, 1);
const smo1010632acc = new VF.Accidental('b');
smo101063.addModifier(smo1010632acc, 2);
smo101077v0ar.push(smo101063);
smo101077v0.addTickables(smo101077v0ar)
fmtsmo10107729.joinVoices([smo101077v0]);
const fmtsmo10389029 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo103890v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo103890v0ar = [];
const smo103873 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo103873.setAttribute('id', 'smo103873');
smo103890v0ar.push(smo103873);
const smo103874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103874.setAttribute('id', 'smo103874');
smo103890v0ar.push(smo103874);
const smo103875 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo103875.setAttribute('id', 'smo103875');
smo103890v0ar.push(smo103875);
const smo103876 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo103876.setAttribute('id', 'smo103876');
smo103890v0ar.push(smo103876);
smo103890v0.addTickables(smo103890v0ar)
fmtsmo10389029.joinVoices([smo103890v0]);
// create beam groups and tuplets for format grp smo99711 before formatting
const dirsmo105625 = smo101056.getStemDirection();
smo101056.setStemDirection(dirsmo105625);
smo101058.setStemDirection(dirsmo105625);
smo101059.setStemDirection(dirsmo105625);
const smo105625 = new VF.Beam([smo101056,smo101058,smo101059]);
const dirsmo105626 = smo101060.getStemDirection();
smo101060.setStemDirection(dirsmo105626);
smo101061.setStemDirection(dirsmo105626);
smo101062.setStemDirection(dirsmo105626);
smo101063.setStemDirection(dirsmo105626);
const smo105626 = new VF.Beam([smo101060,smo101061,smo101062,smo101063]);
const dirsmo105629 = smo103873.getStemDirection();
smo103873.setStemDirection(dirsmo105629);
smo103874.setStemDirection(dirsmo105629);
const smo105629 = new VF.Beam([smo103873,smo103874]);
const dirsmo105630 = smo103875.getStemDirection();
smo103875.setStemDirection(dirsmo105630);
smo103876.setStemDirection(dirsmo105630);
const smo105630 = new VF.Beam([smo103875,smo103876]);
 
// formatting measures in staff group smo99711
fmtsmo10107729.format([smo101077v0,smo103890v0], 281);
const stavesmo101077 = new VF.Stave(1548, 1828, 295);
stavesmo101077.setAttribute('id', 'stavesmo101077');
stavesmo101077.setBegBarType(VF.Barline.type.NONE);
stavesmo101077.setContext(context);
stavesmo101077.draw();
smo101077v0.draw(context, stavesmo101077);
smo105625.setContext(context);
smo105625.draw();
smo105626.setContext(context);
smo105626.draw();
const stavesmo103890 = new VF.Stave(1548, 1988, 295);
stavesmo103890.setAttribute('id', 'stavesmo103890');
stavesmo103890.setBegBarType(VF.Barline.type.NONE);
stavesmo103890.setContext(context);
stavesmo103890.draw();
smo103890v0.draw(context, stavesmo103890);
smo105629.setContext(context);
smo105629.draw();
smo105630.setContext(context);
smo105630.draw();
const rightsmo99711stavesmo1010771 = new VF.StaveConnector(stavesmo101077, stavesmo103890).setType(0);
rightsmo99711stavesmo1010771.setContext(context).draw();
// modifier from 0-5-0-2 to 0-5-0-4
const smo106645 = new VF.StaveHairpin({ first_note: smo100567, last_note: smo100567,
       firstNote: smo100567, lastNote: smo100567 });
smo106645.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106645.setContext(context).setPosition(4).draw();
// modifier from 0-7-0-2 to 0-8-0-0
const smo106646 = new VF.StaveHairpin({ first_note: smo100608, last_note: smo100608,
       firstNote: smo100608, lastNote: smo100608 });
smo106646.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106646.setContext(context).setPosition(4).draw();
// modifier from 0-9-0-2 to 0-10-0-0
const smo106647 = new VF.StaveHairpin({ first_note: smo100647, last_note: smo100647,
       firstNote: smo100647, lastNote: smo100647 });
smo106647.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106647.setContext(context).setPosition(4).draw();
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-13-0-2 to 0-13-0-4
const smo106650 = new VF.StaveHairpin({ first_note: smo100727, last_note: smo100727,
       firstNote: smo100727, lastNote: smo100727 });
smo106650.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106650.setContext(context).setPosition(4).draw();
// modifier from 0-19-0-2 to 0-20-0-0
const smo106651 = new VF.StaveHairpin({ first_note: smo100851, last_note: smo100851,
       firstNote: smo100851, lastNote: smo100851 });
smo106651.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo106651.setContext(context).setPosition(4).draw();
// modifier from 0-0-0-3 to 0-0-0-4
const smo106652 = new VF.StaveTie({ first_note: smo100458, last_note: smo100459, 
          firstNote: smo100458, lastNote: smo100459, first_indices: [0], last_indices: [0]});
smo106652.setContext(context).draw();
// modifier from 0-0-1-3 to 0-0-1-4
const smo106653 = new VF.StaveTie({ first_note: smo100465, last_note: smo100466, 
          firstNote: smo100465, lastNote: smo100466, first_indices: [0], last_indices: [0]});
smo106653.setContext(context).draw();
// modifier from 0-1-0-3 to 0-1-0-4
const smo106654 = new VF.StaveTie({ first_note: smo100486, last_note: smo100487, 
          firstNote: smo100486, lastNote: smo100487, first_indices: [0], last_indices: [0]});
smo106654.setContext(context).draw();
// modifier from 0-2-0-3 to 0-2-0-4
const smo106655 = new VF.StaveTie({ first_note: smo100507, last_note: smo100508, 
          firstNote: smo100507, lastNote: smo100508, first_indices: [0], last_indices: [0]});
smo106655.setContext(context).draw();
// modifier from 0-4-0-5 to 0-5-0-0
const smo106656 = new VF.StaveTie({ first_note: smo100550, last_note: smo100565, 
          firstNote: smo100550, lastNote: smo100565, first_indices: [0], last_indices: [0]});
smo106656.setContext(context).draw();
// modifier from 0-5-0-0 to 0-5-0-1
const smo106657 = new VF.StaveTie({ first_note: smo100565, last_note: smo100566, 
          firstNote: smo100565, lastNote: smo100566, first_indices: [0], last_indices: [0]});
smo106657.setContext(context).draw();
// modifier from 0-6-0-3 to 0-6-0-4
const smo106658 = new VF.StaveTie({ first_note: smo100588, last_note: smo100589, 
          firstNote: smo100588, lastNote: smo100589, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106658.setContext(context).draw();
// modifier from 0-7-0-0 to 0-7-0-1
const smo106659 = new VF.StaveTie({ first_note: smo100606, last_note: smo100607, 
          firstNote: smo100606, lastNote: smo100607, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106659.setContext(context).draw();
// modifier from 0-8-0-5 to 0-9-0-0
const smo106660 = new VF.StaveTie({ first_note: smo100630, last_note: smo100645, 
          firstNote: smo100630, lastNote: smo100645, first_indices: [0], last_indices: [0]});
smo106660.setContext(context).draw();
// modifier from 0-9-0-0 to 0-9-0-1
const smo106661 = new VF.StaveTie({ first_note: smo100645, last_note: smo100646, 
          firstNote: smo100645, lastNote: smo100646, first_indices: [0], last_indices: [0]});
smo106661.setContext(context).draw();
// modifier from 0-10-0-3 to 0-10-0-4
const smo106662 = new VF.StaveTie({ first_note: smo100667, last_note: smo100668, 
          firstNote: smo100667, lastNote: smo100668, first_indices: [0,1], last_indices: [0,1]});
smo106662.setContext(context).draw();
// modifier from 0-11-0-0 to 0-11-0-1
const smo106663 = new VF.StaveTie({ first_note: smo100686, last_note: smo100687, 
          firstNote: smo100686, lastNote: smo100687, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106663.setContext(context).draw();
// modifier from 0-12-0-5 to 0-13-0-0
const smo106664 = new VF.StaveTie({ first_note: smo100710, last_note: smo100725, 
          firstNote: smo100710, lastNote: smo100725, first_indices: [0], last_indices: [0]});
smo106664.setContext(context).draw();
// modifier from 0-13-0-0 to 0-13-0-1
const smo106665 = new VF.StaveTie({ first_note: smo100725, last_note: smo100726, 
          firstNote: smo100725, lastNote: smo100726, first_indices: [0], last_indices: [0]});
smo106665.setContext(context).draw();
// modifier from 0-14-0-3 to 0-14-0-4
const smo106666 = new VF.StaveTie({ first_note: smo100748, last_note: smo100749, 
          firstNote: smo100748, lastNote: smo100749, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106666.setContext(context).draw();
// modifier from 0-15-0-0 to 0-15-0-1
const smo106667 = new VF.StaveTie({ first_note: smo100766, last_note: smo100767, 
          firstNote: smo100766, lastNote: smo100767, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106667.setContext(context).draw();
// modifier from 0-16-0-3 to 0-16-0-4
const smo106668 = new VF.StaveTie({ first_note: smo100787, last_note: smo100788, 
          firstNote: smo100787, lastNote: smo100788, first_indices: [0,1], last_indices: [0,1]});
smo106668.setContext(context).draw();
// modifier from 0-17-0-3 to 0-17-0-4
const smo106669 = new VF.StaveTie({ first_note: smo100809, last_note: smo100810, 
          firstNote: smo100809, lastNote: smo100810, first_indices: [0,1], last_indices: [0,1]});
smo106669.setContext(context).draw();
// modifier from 0-18-0-3 to 0-18-0-4
const smo106670 = new VF.StaveTie({ first_note: smo100831, last_note: smo100832, 
          firstNote: smo100831, lastNote: smo100832, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106670.setContext(context).draw();
// modifier from 0-19-0-0 to 0-19-0-1
const smo106671 = new VF.StaveTie({ first_note: smo100849, last_note: smo100850, 
          firstNote: smo100849, lastNote: smo100850, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106671.setContext(context).draw();
// modifier from 0-20-0-0 to 0-20-0-1
const smo106672 = new VF.StaveTie({ first_note: smo100868, last_note: smo100869, 
          firstNote: smo100868, lastNote: smo100869, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106672.setContext(context).draw();
// modifier from 0-21-0-2 to 0-21-0-3
const smo106673 = new VF.StaveTie({ first_note: smo100890, last_note: smo100891, 
          firstNote: smo100890, lastNote: smo100891, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106673.setContext(context).draw();
// modifier from 0-22-0-2 to 0-22-0-3
const smo106674 = new VF.StaveTie({ first_note: smo100911, last_note: smo100912, 
          firstNote: smo100911, lastNote: smo100912, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106674.setContext(context).draw();
// modifier from 0-25-0-2 to 0-25-0-3
const smo106675 = new VF.StaveTie({ first_note: smo100976, last_note: smo100977, 
          firstNote: smo100976, lastNote: smo100977, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106675.setContext(context).draw();
// modifier from 0-26-0-2 to 0-26-0-3
const smo106676 = new VF.StaveTie({ first_note: smo100997, last_note: smo100998, 
          firstNote: smo100997, lastNote: smo100998, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106676.setContext(context).draw();
// modifier from 0-27-0-2 to 0-27-0-3
const smo106677 = new VF.StaveTie({ first_note: smo101018, last_note: smo101019, 
          firstNote: smo101018, lastNote: smo101019, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106677.setContext(context).draw();
// modifier from 0-28-0-0 to 0-28-0-1
const smo106678 = new VF.StaveTie({ first_note: smo101037, last_note: smo101038, 
          firstNote: smo101037, lastNote: smo101038, first_indices: [0,1], last_indices: [0,1]});
smo106678.setContext(context).draw();
// modifier from 0-29-0-2 to 0-29-0-3
const smo106679 = new VF.StaveTie({ first_note: smo101059, last_note: smo101060, 
          firstNote: smo101059, lastNote: smo101060, first_indices: [0,1,2], last_indices: [0,1,2]});
smo106679.setContext(context).draw();
// modifier from 1-1-0-3 to 1-1-0-4
const smo106680 = new VF.StaveTie({ first_note: smo103363, last_note: smo103364, 
          firstNote: smo103363, lastNote: smo103364, first_indices: [0], last_indices: [0]});
smo106680.setContext(context).draw();
// modifier from 1-2-0-3 to 1-2-0-4
const smo106681 = new VF.StaveTie({ first_note: smo103384, last_note: smo103385, 
          firstNote: smo103384, lastNote: smo103385, first_indices: [0], last_indices: [0]});
smo106681.setContext(context).draw();
const smo100854smo100867 = new VF.Volta(5, '1', 368, 20);
smo100854smo100867.setContext(context).draw(stavesmo100867, -1 * 0);
const smo100873smo100887 = new VF.Volta(5, '2', 663, 20);
smo100873smo100887.setContext(context).draw(stavesmo100887, -1 * 0);
}
// @@ Gnossienne No 3 p 1/2  by Erik Satie
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1348.7603305785124');
svg.setAttributeNS('', 'height', '1745.4545454545453');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const fmtsmo744630 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo74463v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74463v0ar = [];
const smo74411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74411.setAttribute('id', 'smo74411');
smo74463v0ar.push(smo74411);
const smo74413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74413.setAttribute('id', 'smo74413');
smo74463v0ar.push(smo74413);
const smo74414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74414.setAttribute('id', 'smo74414');
const smo744140acc = new VF.Accidental('#');
smo74414.addModifier(smo744140acc, 0);
smo74463v0ar.push(smo74414);
const smo74415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74415.setAttribute('id', 'smo74415');
smo74463v0ar.push(smo74415);
const smo74416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74416.setAttribute('id', 'smo74416');
const smo744160acc = new VF.Accidental('#');
smo74416.addModifier(smo744160acc, 0);
smo74463v0ar.push(smo74416);
const smo74417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74417.setAttribute('id', 'smo74417');
smo74463v0ar.push(smo74417);
const smo74418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74418.setAttribute('id', 'smo74418');
smo74463v0ar.push(smo74418);
const smo74419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74419.setAttribute('id', 'smo74419');
smo74463v0ar.push(smo74419);
const smo74420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74420.setAttribute('id', 'smo74420');
smo74463v0ar.push(smo74420);
const smo74421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74421.setAttribute('id', 'smo74421');
smo74463v0ar.push(smo74421);
const smo74422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74422.setAttribute('id', 'smo74422');
smo74463v0ar.push(smo74422);
const smo74423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74423.setAttribute('id', 'smo74423');
smo74463v0ar.push(smo74423);
const smo74424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74424.setAttribute('id', 'smo74424');
smo74463v0ar.push(smo74424);
const smo74425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74425.setAttribute('id', 'smo74425');
smo74463v0ar.push(smo74425);
const smo74426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74426.setAttribute('id', 'smo74426');
smo74463v0ar.push(smo74426);
const smo74427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74427.setAttribute('id', 'smo74427');
smo74463v0ar.push(smo74427);
const smo74428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74428.setAttribute('id', 'smo74428');
smo74463v0ar.push(smo74428);
const smo74429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74429.setAttribute('id', 'smo74429');
smo74463v0ar.push(smo74429);
const smo74430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74430.setAttribute('id', 'smo74430');
smo74463v0ar.push(smo74430);
const smo74431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74431.setAttribute('id', 'smo74431');
smo74463v0ar.push(smo74431);
const smo74432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/5/n"]}'))
smo74432.setAttribute('id', 'smo74432');
smo74463v0ar.push(smo74432);
const smo74433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74433.setAttribute('id', 'smo74433');
smo74463v0ar.push(smo74433);
const smo74434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74434.setAttribute('id', 'smo74434');
smo74463v0ar.push(smo74434);
const smo74435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74435.setAttribute('id', 'smo74435');
smo74463v0ar.push(smo74435);
const smo74436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74436.setAttribute('id', 'smo74436');
smo74463v0ar.push(smo74436);
const smo74437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/5/n"]}'))
smo74437.setAttribute('id', 'smo74437');
smo74463v0ar.push(smo74437);
smo74463v0.addTickables(smo74463v0ar)
fmtsmo744630.joinVoices([smo74463v0]);
const smo74463v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74463v1ar = [];
const smo74438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74438.setAttribute('id', 'smo74438');
smo74438.setStyle({ fillStyle: '#aaaaaa7f' });
smo74463v1ar.push(smo74438);
const smo74439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74439.setAttribute('id', 'smo74439');
smo74439.setStyle({ fillStyle: "#115511" });
smo74463v1ar.push(smo74439);
const smo74440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74440.setAttribute('id', 'smo74440');
smo74440.setStyle({ fillStyle: "#115511" });
smo74463v1ar.push(smo74440);
const smo74441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74441.setAttribute('id', 'smo74441');
smo74441.setStyle({ fillStyle: '#aaaaaa7f' });
smo74463v1ar.push(smo74441);
const smo74442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74442.setAttribute('id', 'smo74442');
smo74442.setStyle({ fillStyle: "#115511" });
smo74463v1ar.push(smo74442);
const smo74443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74443.setAttribute('id', 'smo74443');
smo74443.setStyle({ fillStyle: "#115511" });
smo74463v1ar.push(smo74443);
const smo74444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74444.setAttribute('id', 'smo74444');
smo74444.setStyle({ fillStyle: '#aaaaaa7f' });
smo74463v1ar.push(smo74444);
const smo74445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74445.setAttribute('id', 'smo74445');
smo74445.setStyle({ fillStyle: '#aaaaaa7f' });
smo74463v1ar.push(smo74445);
const smo74446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74446.setAttribute('id', 'smo74446');
smo74446.setStyle({ fillStyle: "#115511" });
smo74463v1ar.push(smo74446);
const smo74447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74447.setAttribute('id', 'smo74447');
smo74447.setStyle({ fillStyle: "#115511" });
smo74463v1ar.push(smo74447);
smo74463v1.addTickables(smo74463v1ar)
fmtsmo744630.joinVoices([smo74463v1]);
const fmtsmo749700 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo74970v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74970v0ar = [];
const smo74938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74938.setAttribute('id', 'smo74938');
smo74970v0ar.push(smo74938);
const smo74939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74939.setAttribute('id', 'smo74939');
smo74939.setStyle({ fillStyle: '#aaaaaa7f' });
smo74939.addModifier(new VF.Dot(), 0);
smo74970v0ar.push(smo74939);
const smo74940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74940.setAttribute('id', 'smo74940');
smo74970v0ar.push(smo74940);
const smo74941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74941.setAttribute('id', 'smo74941');
smo74941.setStyle({ fillStyle: '#aaaaaa7f' });
smo74941.addModifier(new VF.Dot(), 0);
smo74970v0ar.push(smo74941);
const smo74942 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74942.setAttribute('id', 'smo74942');
smo74970v0ar.push(smo74942);
const smo74943 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo74943.setAttribute('id', 'smo74943');
smo74970v0ar.push(smo74943);
const smo74944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo74944.setAttribute('id', 'smo74944');
smo74970v0ar.push(smo74944);
const smo74945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74945.setAttribute('id', 'smo74945');
smo74970v0ar.push(smo74945);
const smo74946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo74946.setAttribute('id', 'smo74946');
smo74970v0ar.push(smo74946);
const smo74947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo74947.setAttribute('id', 'smo74947');
smo74970v0ar.push(smo74947);
const smo74948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74948.setAttribute('id', 'smo74948');
smo74970v0ar.push(smo74948);
const smo74949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74949.setAttribute('id', 'smo74949');
smo74949.setStyle({ fillStyle: '#aaaaaa7f' });
smo74949.addModifier(new VF.Dot(), 0);
smo74970v0ar.push(smo74949);
smo74970v0.addTickables(smo74970v0ar)
fmtsmo749700.joinVoices([smo74970v0]);
const smo74970v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74970v1ar = [];
const smo74950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo74950.setAttribute('id', 'smo74950');
smo74950.setStyle({ fillStyle: "#115511" });
smo74970v1ar.push(smo74950);
const smo74951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo74951.setAttribute('id', 'smo74951');
smo74951.setStyle({ fillStyle: "#115511" });
smo74970v1ar.push(smo74951);
const smo74952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo74952.setAttribute('id', 'smo74952');
smo74952.setStyle({ fillStyle: "#115511" });
smo74970v1ar.push(smo74952);
const smo74953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo74953.setAttribute('id', 'smo74953');
smo74953.setStyle({ fillStyle: "#115511" });
smo74970v1ar.push(smo74953);
const smo74954 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo74954.setAttribute('id', 'smo74954');
smo74954.setStyle({ fillStyle: "#115511" });
smo74970v1ar.push(smo74954);
smo74970v1.addTickables(smo74970v1ar)
fmtsmo749700.joinVoices([smo74970v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76537 = smo74411.getStemDirection();
smo74411.setStemDirection(dirsmo76537);
smo74413.setStemDirection(dirsmo76537);
smo74414.setStemDirection(dirsmo76537);
smo74415.setStemDirection(dirsmo76537);
const smo76537 = new VF.Beam([smo74411,smo74413,smo74414,smo74415]);
const dirsmo76538 = smo74416.getStemDirection();
smo74416.setStemDirection(dirsmo76538);
smo74417.setStemDirection(dirsmo76538);
const smo76538 = new VF.Beam([smo74416,smo74417]);
const dirsmo76539 = smo74420.getStemDirection();
smo74420.setStemDirection(dirsmo76539);
smo74421.setStemDirection(dirsmo76539);
const smo76539 = new VF.Beam([smo74420,smo74421]);
const dirsmo76540 = smo74422.getStemDirection();
smo74422.setStemDirection(dirsmo76540);
smo74423.setStemDirection(dirsmo76540);
smo74424.setStemDirection(dirsmo76540);
smo74425.setStemDirection(dirsmo76540);
const smo76540 = new VF.Beam([smo74422,smo74423,smo74424,smo74425]);
const dirsmo76541 = smo74426.getStemDirection();
smo74426.setStemDirection(dirsmo76541);
smo74427.setStemDirection(dirsmo76541);
const smo76541 = new VF.Beam([smo74426,smo74427]);
const dirsmo76542 = smo74431.getStemDirection();
smo74431.setStemDirection(dirsmo76542);
smo74432.setStemDirection(dirsmo76542);
smo74433.setStemDirection(dirsmo76542);
smo74434.setStemDirection(dirsmo76542);
const smo76542 = new VF.Beam([smo74431,smo74432,smo74433,smo74434]);
const dirsmo76543 = smo74435.getStemDirection();
smo74435.setStemDirection(dirsmo76543);
smo74436.setStemDirection(dirsmo76543);
const smo76543 = new VF.Beam([smo74435,smo74436]);
 
// formatting measures in staff group smo75335
fmtsmo744630.format([smo74463v0,smo74463v1,smo74970v0,smo74970v1], 1094);
const stavesmo74463 = new VF.Stave(103, 187, 1174);
stavesmo74463.setAttribute('id', 'stavesmo74463');
stavesmo74463.setBegBarType(1);
stavesmo74463.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":60,"name":"Lent"}'), -1 * 35);
stavesmo74463.addClef('treble');
stavesmo74463.addTimeSignature('4/4');
stavesmo74463.setContext(context);
stavesmo74463.draw();
smo74463v0.draw(context, stavesmo74463);
smo74463v1.draw(context, stavesmo74463);
smo76537.setContext(context);
smo76537.draw();
smo76538.setContext(context);
smo76538.draw();
smo76539.setContext(context);
smo76539.draw();
smo76540.setContext(context);
smo76540.draw();
smo76541.setContext(context);
smo76541.draw();
smo76542.setContext(context);
smo76542.draw();
smo76543.setContext(context);
smo76543.draw();
const stavesmo74970 = new VF.Stave(103, 330, 1174);
stavesmo74970.setAttribute('id', 'stavesmo74970');
stavesmo74970.setBegBarType(1);
stavesmo74970.addClef('bass');
stavesmo74970.addTimeSignature('4/4');
stavesmo74970.setContext(context);
stavesmo74970.draw();
smo74970v0.draw(context, stavesmo74970);
smo74970v1.draw(context, stavesmo74970);
const leftsmo75335stavesmo744631 = new VF.StaveConnector(stavesmo74463, stavesmo74970).setType(3);
leftsmo75335stavesmo744631.setContext(context).draw();
const fmtsmo745081 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo74508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74508v0ar = [];
const smo74464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74464.setAttribute('id', 'smo74464');
smo74508v0ar.push(smo74464);
const smo74465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74465.setAttribute('id', 'smo74465');
smo74508v0ar.push(smo74465);
const smo74466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/5/n"]}'))
smo74466.setAttribute('id', 'smo74466');
smo74508v0ar.push(smo74466);
const smo74467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74467.setAttribute('id', 'smo74467');
const smo744670acc = new VF.Accidental('#');
smo74467.addModifier(smo744670acc, 0);
smo74508v0ar.push(smo74467);
const smo74468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["d#/5/n"]}'))
smo74468.setAttribute('id', 'smo74468');
smo74508v0ar.push(smo74468);
const smo74469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74469.setAttribute('id', 'smo74469');
smo74508v0ar.push(smo74469);
const smo74470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74470.setAttribute('id', 'smo74470');
smo74508v0ar.push(smo74470);
const smo74471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74471.setAttribute('id', 'smo74471');
smo74508v0ar.push(smo74471);
const smo74472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74472.setAttribute('id', 'smo74472');
smo74508v0ar.push(smo74472);
const smo74473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74473.setAttribute('id', 'smo74473');
smo74508v0ar.push(smo74473);
const smo74474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74474.setAttribute('id', 'smo74474');
smo74508v0ar.push(smo74474);
const smo74475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/5/n"]}'))
const smo74476 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo74476.setAttribute('id', 'smo74476');
const ggrpsmo74475 = new VF.GraceNoteGroup([smo74476]);
ggrpsmo74475.beamNotes();
smo74475.addModifier(ggrpsmo74475, 0);
smo74475.setAttribute('id', 'smo74475');
const smo744750acc = new VF.Accidental('n');
smo74475.addModifier(smo744750acc, 0);
smo74508v0ar.push(smo74475);
const smo74477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74477.setAttribute('id', 'smo74477');
smo74508v0ar.push(smo74477);
const smo74478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74478.setAttribute('id', 'smo74478');
smo74508v0ar.push(smo74478);
const smo74479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74479.setAttribute('id', 'smo74479');
smo74508v0ar.push(smo74479);
const smo74480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74480.setAttribute('id', 'smo74480');
smo74508v0ar.push(smo74480);
const smo74481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["cn/5/n"]}'))
smo74481.setAttribute('id', 'smo74481');
smo74508v0ar.push(smo74481);
const smo74482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74482.setAttribute('id', 'smo74482');
smo74508v0ar.push(smo74482);
const smo74483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74483.setAttribute('id', 'smo74483');
smo74508v0ar.push(smo74483);
const smo74484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74484.setAttribute('id', 'smo74484');
smo74508v0ar.push(smo74484);
const smo74485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74485.setAttribute('id', 'smo74485');
smo74508v0ar.push(smo74485);
const smo74486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo74487 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo74487.setAttribute('id', 'smo74487');
const ggrpsmo74486 = new VF.GraceNoteGroup([smo74487]);
ggrpsmo74486.beamNotes();
smo74486.addModifier(ggrpsmo74486, 0);
smo74486.setAttribute('id', 'smo74486');
smo74508v0ar.push(smo74486);
smo74508v0.addTickables(smo74508v0ar)
fmtsmo745081.joinVoices([smo74508v0]);
const smo74508v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74508v1ar = [];
const smo74488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74488.setAttribute('id', 'smo74488');
smo74488.setStyle({ fillStyle: '#aaaaaa7f' });
smo74508v1ar.push(smo74488);
const smo74489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74489.setAttribute('id', 'smo74489');
smo74489.setStyle({ fillStyle: "#115511" });
smo74508v1ar.push(smo74489);
const smo74490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo74490.setAttribute('id', 'smo74490');
smo74490.setStyle({ fillStyle: "#115511" });
smo74508v1ar.push(smo74490);
const smo74491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2dddd","dots":4,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74491.setAttribute('id', 'smo74491');
smo74491.setStyle({ fillStyle: '#aaaaaa7f' });
smo74491.addModifier(new VF.Dot(), 0);
smo74491.addModifier(new VF.Dot(), 0);
smo74491.addModifier(new VF.Dot(), 0);
smo74491.addModifier(new VF.Dot(), 0);
smo74508v1ar.push(smo74491);
const smo74492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74492.setAttribute('id', 'smo74492');
smo74492.setStyle({ fillStyle: '#aaaaaa7f' });
smo74508v1ar.push(smo74492);
smo74508v1.addTickables(smo74508v1ar)
fmtsmo745081.joinVoices([smo74508v1]);
const fmtsmo750051 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo75005v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75005v0ar = [];
const smo74971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74971.setAttribute('id', 'smo74971');
smo75005v0ar.push(smo74971);
const smo74972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74972.setAttribute('id', 'smo74972');
smo74972.setStyle({ fillStyle: '#aaaaaa7f' });
smo74972.addModifier(new VF.Dot(), 0);
smo75005v0ar.push(smo74972);
const smo74973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74973.setAttribute('id', 'smo74973');
smo75005v0ar.push(smo74973);
const smo74974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo74974.setAttribute('id', 'smo74974');
smo75005v0ar.push(smo74974);
const smo74975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo74975.setAttribute('id', 'smo74975');
smo75005v0ar.push(smo74975);
const smo74976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74976.setAttribute('id', 'smo74976');
smo75005v0ar.push(smo74976);
const smo74977 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo74977.setAttribute('id', 'smo74977');
smo75005v0ar.push(smo74977);
const smo74978 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo74978.setAttribute('id', 'smo74978');
smo75005v0ar.push(smo74978);
const smo74979 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74979.setAttribute('id', 'smo74979');
smo75005v0ar.push(smo74979);
const smo74980 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo74980.setAttribute('id', 'smo74980');
const smo749800acc = new VF.Accidental('#');
smo74980.addModifier(smo749800acc, 0);
smo75005v0ar.push(smo74980);
const smo74981 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/3/n","bn/3/n","en/4/n"]}'))
smo74981.setAttribute('id', 'smo74981');
smo75005v0ar.push(smo74981);
const smo74982 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo74982.setAttribute('id', 'smo74982');
smo75005v0ar.push(smo74982);
const smo74983 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo74983.setAttribute('id', 'smo74983');
smo75005v0ar.push(smo74983);
const smo74984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo74984.setAttribute('id', 'smo74984');
smo75005v0ar.push(smo74984);
smo75005v0.addTickables(smo75005v0ar)
fmtsmo750051.joinVoices([smo75005v0]);
const smo75005v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75005v1ar = [];
const smo74985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo74985.setAttribute('id', 'smo74985');
smo74985.setStyle({ fillStyle: "#115511" });
smo75005v1ar.push(smo74985);
const smo74986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo74986.setAttribute('id', 'smo74986');
smo74986.setStyle({ fillStyle: "#115511" });
smo75005v1ar.push(smo74986);
const smo74987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo74987.setAttribute('id', 'smo74987');
smo74987.setStyle({ fillStyle: "#115511" });
smo75005v1ar.push(smo74987);
const smo74988 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo74988.setAttribute('id', 'smo74988');
smo74988.setStyle({ fillStyle: "#115511" });
smo75005v1ar.push(smo74988);
const smo74989 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo74989.setAttribute('id', 'smo74989');
smo74989.setStyle({ fillStyle: "#115511" });
smo75005v1ar.push(smo74989);
smo75005v1.addTickables(smo75005v1ar)
fmtsmo750051.joinVoices([smo75005v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76558 = smo74465.getStemDirection();
smo74465.setStemDirection(dirsmo76558);
smo74466.setStemDirection(dirsmo76558);
const smo76558 = new VF.Beam([smo74465,smo74466]);
const dirsmo76559 = smo74467.getStemDirection();
smo74467.setStemDirection(dirsmo76559);
smo74468.setStemDirection(dirsmo76559);
smo74469.setStemDirection(dirsmo76559);
smo74470.setStemDirection(dirsmo76559);
const smo76559 = new VF.Beam([smo74467,smo74468,smo74469,smo74470]);
const dirsmo76560 = smo74471.getStemDirection();
smo74471.setStemDirection(dirsmo76560);
smo74472.setStemDirection(dirsmo76560);
const smo76560 = new VF.Beam([smo74471,smo74472]);
const dirsmo76561 = smo74477.getStemDirection();
smo74477.setStemDirection(dirsmo76561);
smo74478.setStemDirection(dirsmo76561);
const smo76561 = new VF.Beam([smo74477,smo74478]);
const dirsmo76562 = smo74479.getStemDirection();
smo74479.setStemDirection(dirsmo76562);
smo74480.setStemDirection(dirsmo76562);
const smo76562 = new VF.Beam([smo74479,smo74480]);
const dirsmo76563 = smo74482.getStemDirection();
smo74482.setStemDirection(dirsmo76563);
smo74483.setStemDirection(dirsmo76563);
const smo76563 = new VF.Beam([smo74482,smo74483]);
 
// formatting measures in staff group smo75335
fmtsmo745081.format([smo74508v0,smo74508v1,smo75005v0,smo75005v1], 1117);
const stavesmo74508 = new VF.Stave(103, 490, 1174);
stavesmo74508.setAttribute('id', 'stavesmo74508');
stavesmo74508.setBegBarType(1);
stavesmo74508.addClef('treble');
stavesmo74508.setContext(context);
stavesmo74508.draw();
smo74508v0.draw(context, stavesmo74508);
smo74508v1.draw(context, stavesmo74508);
smo76558.setContext(context);
smo76558.draw();
smo76559.setContext(context);
smo76559.draw();
smo76560.setContext(context);
smo76560.draw();
smo76561.setContext(context);
smo76561.draw();
smo76562.setContext(context);
smo76562.draw();
smo76563.setContext(context);
smo76563.draw();
const stavesmo75005 = new VF.Stave(103, 638, 1174);
stavesmo75005.setAttribute('id', 'stavesmo75005');
stavesmo75005.setBegBarType(1);
stavesmo75005.addClef('bass');
stavesmo75005.setContext(context);
stavesmo75005.draw();
smo75005v0.draw(context, stavesmo75005);
smo75005v1.draw(context, stavesmo75005);
const leftsmo75335stavesmo745081 = new VF.StaveConnector(stavesmo74508, stavesmo75005).setType(3);
leftsmo75335stavesmo745081.setContext(context).draw();
const fmtsmo745532 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo74553v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74553v0ar = [];
const smo74509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74509.setAttribute('id', 'smo74509');
smo74553v0ar.push(smo74509);
const smo74510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74510.setAttribute('id', 'smo74510');
smo74553v0ar.push(smo74510);
const smo74511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74511.setAttribute('id', 'smo74511');
smo74553v0ar.push(smo74511);
const smo74512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74512.setAttribute('id', 'smo74512');
smo74553v0ar.push(smo74512);
const smo74513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74513.setAttribute('id', 'smo74513');
smo74553v0ar.push(smo74513);
const smo74514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74514.setAttribute('id', 'smo74514');
smo74553v0ar.push(smo74514);
const smo74515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74515.setAttribute('id', 'smo74515');
smo74553v0ar.push(smo74515);
const smo74516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo74516.setAttribute('id', 'smo74516');
const smo745160acc = new VF.Accidental('#');
smo74516.addModifier(smo745160acc, 0);
smo74553v0ar.push(smo74516);
const smo74517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo74517.setAttribute('id', 'smo74517');
smo74553v0ar.push(smo74517);
const smo74518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74518.setAttribute('id', 'smo74518');
smo74553v0ar.push(smo74518);
const smo74519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74519.setAttribute('id', 'smo74519');
smo74553v0ar.push(smo74519);
const smo74520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74520.setAttribute('id', 'smo74520');
smo74553v0ar.push(smo74520);
const smo74521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo74521.setAttribute('id', 'smo74521');
smo74553v0ar.push(smo74521);
const smo74522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo74522.setAttribute('id', 'smo74522');
smo74553v0ar.push(smo74522);
const smo74523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo74523.setAttribute('id', 'smo74523');
smo74553v0ar.push(smo74523);
const smo74524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74524.setAttribute('id', 'smo74524');
smo74553v0ar.push(smo74524);
const smo74525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74525.setAttribute('id', 'smo74525');
smo74553v0ar.push(smo74525);
const smo74526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74526.setAttribute('id', 'smo74526');
smo74553v0ar.push(smo74526);
const smo74527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo74527.setAttribute('id', 'smo74527');
smo74553v0ar.push(smo74527);
const smo74528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["g#/4/n"]}'))
smo74528.setAttribute('id', 'smo74528');
smo74553v0ar.push(smo74528);
const smo74529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo74529.setAttribute('id', 'smo74529');
smo74553v0ar.push(smo74529);
const smo74530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74530.setAttribute('id', 'smo74530');
smo74553v0ar.push(smo74530);
const smo74531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74531.setAttribute('id', 'smo74531');
smo74553v0ar.push(smo74531);
const smo74532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo74532.setAttribute('id', 'smo74532');
smo74553v0ar.push(smo74532);
const smo74533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["fn/5/n"]}'))
smo74533.setAttribute('id', 'smo74533');
smo74553v0ar.push(smo74533);
const smo74534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo74534.setAttribute('id', 'smo74534');
smo74553v0ar.push(smo74534);
const smo74535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/4/n"]}'))
smo74535.setAttribute('id', 'smo74535');
smo74553v0ar.push(smo74535);
const smo74536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo74536.setAttribute('id', 'smo74536');
smo74553v0ar.push(smo74536);
const smo74537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74537.setAttribute('id', 'smo74537');
smo74553v0ar.push(smo74537);
smo74553v0.addTickables(smo74553v0ar)
fmtsmo745532.joinVoices([smo74553v0]);
const fmtsmo750372 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo75037v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75037v0ar = [];
const smo75006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75006.setAttribute('id', 'smo75006');
smo75037v0ar.push(smo75006);
const smo75007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75007.setAttribute('id', 'smo75007');
smo75037v0ar.push(smo75007);
const smo75008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75008.setAttribute('id', 'smo75008');
smo75037v0ar.push(smo75008);
const smo75009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75009.setAttribute('id', 'smo75009');
smo75037v0ar.push(smo75009);
const smo75010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75010.setAttribute('id', 'smo75010');
smo75037v0ar.push(smo75010);
const smo75011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75011.setAttribute('id', 'smo75011');
smo75037v0ar.push(smo75011);
const smo75012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75012.setAttribute('id', 'smo75012');
smo75037v0ar.push(smo75012);
const smo75013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75013.setAttribute('id', 'smo75013');
smo75037v0ar.push(smo75013);
const smo75014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo75014.setAttribute('id', 'smo75014');
smo75037v0ar.push(smo75014);
const smo75015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75015.setAttribute('id', 'smo75015');
smo75037v0ar.push(smo75015);
const smo75016 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75016.setAttribute('id', 'smo75016');
smo75037v0ar.push(smo75016);
const smo75017 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75017.setAttribute('id', 'smo75017');
smo75037v0ar.push(smo75017);
smo75037v0.addTickables(smo75037v0ar)
fmtsmo750372.joinVoices([smo75037v0]);
const smo75037v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75037v1ar = [];
const smo75018 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo75018.setAttribute('id', 'smo75018');
smo75018.setStyle({ fillStyle: "#115511" });
smo75037v1ar.push(smo75018);
const smo75019 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo75019.setAttribute('id', 'smo75019');
smo75019.setStyle({ fillStyle: "#115511" });
smo75037v1ar.push(smo75019);
const smo75020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n"]}'))
smo75020.setAttribute('id', 'smo75020');
smo75020.setStyle({ fillStyle: "#115511" });
smo75037v1ar.push(smo75020);
const smo75021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/1/n"]}'))
smo75021.setAttribute('id', 'smo75021');
smo75021.setStyle({ fillStyle: "#115511" });
smo75037v1ar.push(smo75021);
smo75037v1.addTickables(smo75037v1ar)
fmtsmo750372.joinVoices([smo75037v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76579 = smo74510.getStemDirection();
smo74510.setStemDirection(dirsmo76579);
smo74511.setStemDirection(dirsmo76579);
const smo76579 = new VF.Beam([smo74510,smo74511]);
const dirsmo76580 = smo74512.getStemDirection();
smo74512.setStemDirection(dirsmo76580);
smo74513.setStemDirection(dirsmo76580);
smo74514.setStemDirection(dirsmo76580);
smo74515.setStemDirection(dirsmo76580);
const smo76580 = new VF.Beam([smo74512,smo74513,smo74514,smo74515]);
const dirsmo76581 = smo74516.getStemDirection();
smo74516.setStemDirection(dirsmo76581);
smo74517.setStemDirection(dirsmo76581);
smo74518.setStemDirection(dirsmo76581);
smo74519.setStemDirection(dirsmo76581);
const smo76581 = new VF.Beam([smo74516,smo74517,smo74518,smo74519]);
const dirsmo76582 = smo74520.getStemDirection();
smo74520.setStemDirection(dirsmo76582);
smo74521.setStemDirection(dirsmo76582);
smo74522.setStemDirection(dirsmo76582);
smo74523.setStemDirection(dirsmo76582);
const smo76582 = new VF.Beam([smo74520,smo74521,smo74522,smo74523]);
const dirsmo76583 = smo74524.getStemDirection();
smo74524.setStemDirection(dirsmo76583);
smo74525.setStemDirection(dirsmo76583);
smo74526.setStemDirection(dirsmo76583);
smo74527.setStemDirection(dirsmo76583);
const smo76583 = new VF.Beam([smo74524,smo74525,smo74526,smo74527]);
const dirsmo76584 = smo74528.getStemDirection();
smo74528.setStemDirection(dirsmo76584);
smo74529.setStemDirection(dirsmo76584);
smo74530.setStemDirection(dirsmo76584);
smo74531.setStemDirection(dirsmo76584);
const smo76584 = new VF.Beam([smo74528,smo74529,smo74530,smo74531]);
const dirsmo76585 = smo74532.getStemDirection();
smo74532.setStemDirection(dirsmo76585);
smo74533.setStemDirection(dirsmo76585);
smo74534.setStemDirection(dirsmo76585);
smo74535.setStemDirection(dirsmo76585);
const smo76585 = new VF.Beam([smo74532,smo74533,smo74534,smo74535]);
 
// formatting measures in staff group smo75335
fmtsmo745532.format([smo74553v0,smo75037v0,smo75037v1], 1117);
const stavesmo74553 = new VF.Stave(103, 768, 1173);
stavesmo74553.setAttribute('id', 'stavesmo74553');
stavesmo74553.setBegBarType(1);
stavesmo74553.addClef('treble');
stavesmo74553.setContext(context);
stavesmo74553.draw();
smo74553v0.draw(context, stavesmo74553);
smo76579.setContext(context);
smo76579.draw();
smo76580.setContext(context);
smo76580.draw();
smo76581.setContext(context);
smo76581.draw();
smo76582.setContext(context);
smo76582.draw();
smo76583.setContext(context);
smo76583.draw();
smo76584.setContext(context);
smo76584.draw();
smo76585.setContext(context);
smo76585.draw();
const stavesmo75037 = new VF.Stave(103, 896, 1173);
stavesmo75037.setAttribute('id', 'stavesmo75037');
stavesmo75037.setBegBarType(1);
stavesmo75037.addClef('bass');
stavesmo75037.setContext(context);
stavesmo75037.draw();
smo75037v0.draw(context, stavesmo75037);
smo75037v1.draw(context, stavesmo75037);
const leftsmo75335stavesmo745531 = new VF.StaveConnector(stavesmo74553, stavesmo75037).setType(3);
leftsmo75335stavesmo745531.setContext(context).draw();
const fmtsmo745893 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo74589v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74589v0ar = [];
const smo74554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74554.setAttribute('id', 'smo74554');
smo74589v0ar.push(smo74554);
const smo74555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74555.setAttribute('id', 'smo74555');
smo74589v0ar.push(smo74555);
const smo74556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74556.setAttribute('id', 'smo74556');
smo74589v0ar.push(smo74556);
const smo74557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74557.setAttribute('id', 'smo74557');
const smo745570acc = new VF.Accidental('#');
smo74557.addModifier(smo745570acc, 0);
smo74589v0ar.push(smo74557);
const smo74558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74558.setAttribute('id', 'smo74558');
smo74589v0ar.push(smo74558);
const smo74559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74559.setAttribute('id', 'smo74559');
const smo745590acc = new VF.Accidental('#');
smo74559.addModifier(smo745590acc, 0);
smo74589v0ar.push(smo74559);
const smo74560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74560.setAttribute('id', 'smo74560');
smo74589v0ar.push(smo74560);
const smo74561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74561.setAttribute('id', 'smo74561');
smo74589v0ar.push(smo74561);
const smo74562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74562.setAttribute('id', 'smo74562');
smo74589v0ar.push(smo74562);
const smo74563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74563.setAttribute('id', 'smo74563');
smo74589v0ar.push(smo74563);
const smo74564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74564.setAttribute('id', 'smo74564');
smo74589v0ar.push(smo74564);
const smo74565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74565.setAttribute('id', 'smo74565');
smo74589v0ar.push(smo74565);
const smo74566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74566.setAttribute('id', 'smo74566');
smo74589v0ar.push(smo74566);
const smo74567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74567.setAttribute('id', 'smo74567');
smo74589v0ar.push(smo74567);
const smo74568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74568.setAttribute('id', 'smo74568');
smo74589v0ar.push(smo74568);
const smo74569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74569.setAttribute('id', 'smo74569');
const smo745690acc = new VF.Accidental('#');
smo74569.addModifier(smo745690acc, 0);
smo74589v0ar.push(smo74569);
const smo74570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74570.setAttribute('id', 'smo74570');
smo74589v0ar.push(smo74570);
const smo74571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74571.setAttribute('id', 'smo74571');
smo74589v0ar.push(smo74571);
const smo74572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74572.setAttribute('id', 'smo74572');
smo74589v0ar.push(smo74572);
const smo74573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74573.setAttribute('id', 'smo74573');
smo74589v0ar.push(smo74573);
smo74589v0.addTickables(smo74589v0ar)
fmtsmo745893.joinVoices([smo74589v0]);
const fmtsmo750733 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo75073v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75073v0ar = [];
const smo75038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75038.setAttribute('id', 'smo75038');
smo75073v0ar.push(smo75038);
const smo75039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75039.setAttribute('id', 'smo75039');
smo75073v0ar.push(smo75039);
const smo75040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo75040.setAttribute('id', 'smo75040');
smo75073v0ar.push(smo75040);
const smo75041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75041.setAttribute('id', 'smo75041');
smo75073v0ar.push(smo75041);
const smo75042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75042.setAttribute('id', 'smo75042');
smo75073v0ar.push(smo75042);
const smo75043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75043.setAttribute('id', 'smo75043');
smo75073v0ar.push(smo75043);
const smo75044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75044.setAttribute('id', 'smo75044');
smo75073v0ar.push(smo75044);
const smo75045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75045.setAttribute('id', 'smo75045');
smo75073v0ar.push(smo75045);
const smo75046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75046.setAttribute('id', 'smo75046');
smo75073v0ar.push(smo75046);
const smo75047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75047.setAttribute('id', 'smo75047');
smo75073v0ar.push(smo75047);
const smo75048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75048.setAttribute('id', 'smo75048');
const smo750480acc = new VF.Accidental('#');
smo75048.addModifier(smo750480acc, 0);
smo75073v0ar.push(smo75048);
const smo75049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75049.setAttribute('id', 'smo75049');
smo75073v0ar.push(smo75049);
const smo75050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75050.setAttribute('id', 'smo75050');
smo75073v0ar.push(smo75050);
const smo75051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75051.setAttribute('id', 'smo75051');
smo75073v0ar.push(smo75051);
const smo75052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75052.setAttribute('id', 'smo75052');
smo75073v0ar.push(smo75052);
smo75073v0.addTickables(smo75073v0ar)
fmtsmo750733.joinVoices([smo75073v0]);
const smo75073v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75073v1ar = [];
const smo75053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo75053.setAttribute('id', 'smo75053');
smo75053.setStyle({ fillStyle: "#115511" });
smo75073v1ar.push(smo75053);
const smo75054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75054.setAttribute('id', 'smo75054');
smo75054.setStyle({ fillStyle: "#115511" });
smo75073v1ar.push(smo75054);
const smo75055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75055.setAttribute('id', 'smo75055');
smo75055.setStyle({ fillStyle: "#115511" });
smo75073v1ar.push(smo75055);
const smo75056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo75056.setAttribute('id', 'smo75056');
smo75056.setStyle({ fillStyle: "#115511" });
smo75073v1ar.push(smo75056);
const smo75057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo75057.setAttribute('id', 'smo75057');
smo75057.setStyle({ fillStyle: "#115511" });
smo75073v1ar.push(smo75057);
smo75073v1.addTickables(smo75073v1ar)
fmtsmo750733.joinVoices([smo75073v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76599 = smo74555.getStemDirection();
smo74555.setStemDirection(dirsmo76599);
smo74556.setStemDirection(dirsmo76599);
smo74557.setStemDirection(dirsmo76599);
smo74558.setStemDirection(dirsmo76599);
const smo76599 = new VF.Beam([smo74555,smo74556,smo74557,smo74558]);
const dirsmo76600 = smo74559.getStemDirection();
smo74559.setStemDirection(dirsmo76600);
smo74560.setStemDirection(dirsmo76600);
const smo76600 = new VF.Beam([smo74559,smo74560]);
const dirsmo76601 = smo74563.getStemDirection();
smo74563.setStemDirection(dirsmo76601);
smo74564.setStemDirection(dirsmo76601);
const smo76601 = new VF.Beam([smo74563,smo74564]);
const dirsmo76602 = smo74565.getStemDirection();
smo74565.setStemDirection(dirsmo76602);
smo74566.setStemDirection(dirsmo76602);
smo74567.setStemDirection(dirsmo76602);
smo74568.setStemDirection(dirsmo76602);
const smo76602 = new VF.Beam([smo74565,smo74566,smo74567,smo74568]);
const dirsmo76603 = smo74569.getStemDirection();
smo74569.setStemDirection(dirsmo76603);
smo74570.setStemDirection(dirsmo76603);
const smo76603 = new VF.Beam([smo74569,smo74570]);
 
// formatting measures in staff group smo75335
fmtsmo745893.format([smo74589v0,smo75073v0,smo75073v1], 1117);
const stavesmo74589 = new VF.Stave(103, 1035, 1173);
stavesmo74589.setAttribute('id', 'stavesmo74589');
stavesmo74589.setBegBarType(1);
stavesmo74589.addClef('treble');
stavesmo74589.setContext(context);
stavesmo74589.draw();
smo74589v0.draw(context, stavesmo74589);
smo76599.setContext(context);
smo76599.draw();
smo76600.setContext(context);
smo76600.draw();
smo76601.setContext(context);
smo76601.draw();
smo76602.setContext(context);
smo76602.draw();
smo76603.setContext(context);
smo76603.draw();
const stavesmo75073 = new VF.Stave(103, 1164, 1173);
stavesmo75073.setAttribute('id', 'stavesmo75073');
stavesmo75073.setBegBarType(1);
stavesmo75073.addClef('bass');
stavesmo75073.setContext(context);
stavesmo75073.draw();
smo75073v0.draw(context, stavesmo75073);
smo75073v1.draw(context, stavesmo75073);
const leftsmo75335stavesmo745891 = new VF.StaveConnector(stavesmo74589, stavesmo75073).setType(3);
leftsmo75335stavesmo745891.setContext(context).draw();
const fmtsmo746334 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo74633v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74633v0ar = [];
const smo74590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74590.setAttribute('id', 'smo74590');
smo74633v0ar.push(smo74590);
const smo74591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74591.setAttribute('id', 'smo74591');
smo74633v0ar.push(smo74591);
const smo74592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74592.setAttribute('id', 'smo74592');
const smo745920acc = new VF.Accidental('#');
smo74592.addModifier(smo745920acc, 0);
smo74633v0ar.push(smo74592);
const smo74593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74593.setAttribute('id', 'smo74593');
smo74633v0ar.push(smo74593);
const smo74594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74594.setAttribute('id', 'smo74594');
const smo745940acc = new VF.Accidental('#');
smo74594.addModifier(smo745940acc, 0);
smo74633v0ar.push(smo74594);
const smo74595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74595.setAttribute('id', 'smo74595');
smo74633v0ar.push(smo74595);
const smo74596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74596.setAttribute('id', 'smo74596');
smo74633v0ar.push(smo74596);
const smo74597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74597.setAttribute('id', 'smo74597');
smo74633v0ar.push(smo74597);
const smo74598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74598.setAttribute('id', 'smo74598');
smo74633v0ar.push(smo74598);
const smo74599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74599.setAttribute('id', 'smo74599');
smo74633v0ar.push(smo74599);
const smo74600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74600.setAttribute('id', 'smo74600');
smo74633v0ar.push(smo74600);
const smo74601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74601.setAttribute('id', 'smo74601');
smo74633v0ar.push(smo74601);
const smo74602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74602.setAttribute('id', 'smo74602');
smo74633v0ar.push(smo74602);
const smo74603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74603.setAttribute('id', 'smo74603');
smo74633v0ar.push(smo74603);
const smo74604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74604.setAttribute('id', 'smo74604');
const smo746040acc = new VF.Accidental('#');
smo74604.addModifier(smo746040acc, 0);
smo74633v0ar.push(smo74604);
const smo74605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74605.setAttribute('id', 'smo74605');
smo74633v0ar.push(smo74605);
const smo74606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74606.setAttribute('id', 'smo74606');
smo74633v0ar.push(smo74606);
const smo74607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74607.setAttribute('id', 'smo74607');
smo74633v0ar.push(smo74607);
const smo74608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
const smo74609 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo74609.setAttribute('id', 'smo74609');
const acc0smo74609 = new VF.Accidental('#');
smo74609.addModifier(acc0smo74609, 0)
const ggrpsmo74608 = new VF.GraceNoteGroup([smo74609]);
ggrpsmo74608.beamNotes();
smo74608.addModifier(ggrpsmo74608, 0);
smo74608.setAttribute('id', 'smo74608');
const smo746080acc = new VF.Accidental('n');
smo74608.addModifier(smo746080acc, 0);
smo74633v0ar.push(smo74608);
const smo74610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo74610.setAttribute('id', 'smo74610');
smo74633v0ar.push(smo74610);
const smo74611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74611.setAttribute('id', 'smo74611');
smo74633v0ar.push(smo74611);
const smo74612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74612.setAttribute('id', 'smo74612');
smo74633v0ar.push(smo74612);
const smo74613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74613.setAttribute('id', 'smo74613');
const smo746130acc = new VF.Accidental('#');
smo74613.addModifier(smo746130acc, 0);
smo74633v0ar.push(smo74613);
const smo74614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74614.setAttribute('id', 'smo74614');
smo74633v0ar.push(smo74614);
const smo74615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74615.setAttribute('id', 'smo74615');
smo74633v0ar.push(smo74615);
const smo74616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74616.setAttribute('id', 'smo74616');
smo74633v0ar.push(smo74616);
const smo74617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74617.setAttribute('id', 'smo74617');
smo74633v0ar.push(smo74617);
smo74633v0.addTickables(smo74633v0ar)
fmtsmo746334.joinVoices([smo74633v0]);
const fmtsmo751094 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo75109v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75109v0ar = [];
const smo75074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75074.setAttribute('id', 'smo75074');
smo75109v0ar.push(smo75074);
const smo75075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75075.setAttribute('id', 'smo75075');
smo75109v0ar.push(smo75075);
const smo75076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75076.setAttribute('id', 'smo75076');
smo75109v0ar.push(smo75076);
const smo75077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75077.setAttribute('id', 'smo75077');
smo75109v0ar.push(smo75077);
const smo75078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75078.setAttribute('id', 'smo75078');
smo75109v0ar.push(smo75078);
const smo75079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75079.setAttribute('id', 'smo75079');
smo75109v0ar.push(smo75079);
const smo75080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75080.setAttribute('id', 'smo75080');
smo75109v0ar.push(smo75080);
const smo75081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75081.setAttribute('id', 'smo75081');
const smo750810acc = new VF.Accidental('#');
smo75081.addModifier(smo750810acc, 0);
smo75109v0ar.push(smo75081);
const smo75082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75082.setAttribute('id', 'smo75082');
smo75109v0ar.push(smo75082);
const smo75083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75083.setAttribute('id', 'smo75083');
smo75109v0ar.push(smo75083);
const smo75084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo75084.setAttribute('id', 'smo75084');
const smo750841acc = new VF.Accidental('#');
smo75084.addModifier(smo750841acc, 1);
const smo750842acc = new VF.Accidental('#');
smo75084.addModifier(smo750842acc, 2);
smo75109v0ar.push(smo75084);
const smo75085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","c#/4/n","f#/4/n"]}'))
smo75085.setAttribute('id', 'smo75085');
smo75109v0ar.push(smo75085);
const smo75086 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75086.setAttribute('id', 'smo75086');
smo75109v0ar.push(smo75086);
const smo75087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75087.setAttribute('id', 'smo75087');
smo75109v0ar.push(smo75087);
const smo75088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75088.setAttribute('id', 'smo75088');
smo75109v0ar.push(smo75088);
smo75109v0.addTickables(smo75109v0ar)
fmtsmo751094.joinVoices([smo75109v0]);
const smo75109v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75109v1ar = [];
const smo75089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75089.setAttribute('id', 'smo75089');
smo75089.setStyle({ fillStyle: "#115511" });
smo75109v1ar.push(smo75089);
const smo75090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75090.setAttribute('id', 'smo75090');
smo75090.setStyle({ fillStyle: "#115511" });
smo75109v1ar.push(smo75090);
const smo75091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo75091.setAttribute('id', 'smo75091');
smo75091.setStyle({ fillStyle: "#115511" });
smo75109v1ar.push(smo75091);
const smo75092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["f#/1/n"]}'))
smo75092.setAttribute('id', 'smo75092');
smo75092.setStyle({ fillStyle: "#115511" });
const smo750920acc = new VF.Accidental('#');
smo75092.addModifier(smo750920acc, 0);
smo75109v1ar.push(smo75092);
const smo75093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75093.setAttribute('id', 'smo75093');
smo75093.setStyle({ fillStyle: "#115511" });
smo75109v1ar.push(smo75093);
smo75109v1.addTickables(smo75109v1ar)
fmtsmo751094.joinVoices([smo75109v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76619 = smo74590.getStemDirection();
smo74590.setStemDirection(dirsmo76619);
smo74591.setStemDirection(dirsmo76619);
smo74592.setStemDirection(dirsmo76619);
smo74593.setStemDirection(dirsmo76619);
const smo76619 = new VF.Beam([smo74590,smo74591,smo74592,smo74593]);
const dirsmo76620 = smo74594.getStemDirection();
smo74594.setStemDirection(dirsmo76620);
smo74595.setStemDirection(dirsmo76620);
const smo76620 = new VF.Beam([smo74594,smo74595]);
const dirsmo76621 = smo74598.getStemDirection();
smo74598.setStemDirection(dirsmo76621);
smo74599.setStemDirection(dirsmo76621);
const smo76621 = new VF.Beam([smo74598,smo74599]);
const dirsmo76622 = smo74600.getStemDirection();
smo74600.setStemDirection(dirsmo76622);
smo74601.setStemDirection(dirsmo76622);
smo74602.setStemDirection(dirsmo76622);
smo74603.setStemDirection(dirsmo76622);
const smo76622 = new VF.Beam([smo74600,smo74601,smo74602,smo74603]);
const dirsmo76623 = smo74604.getStemDirection();
smo74604.setStemDirection(dirsmo76623);
smo74605.setStemDirection(dirsmo76623);
const smo76623 = new VF.Beam([smo74604,smo74605]);
const dirsmo76624 = smo74610.getStemDirection();
smo74610.setStemDirection(dirsmo76624);
smo74611.setStemDirection(dirsmo76624);
smo74612.setStemDirection(dirsmo76624);
smo74613.setStemDirection(dirsmo76624);
const smo76624 = new VF.Beam([smo74610,smo74611,smo74612,smo74613]);
const dirsmo76625 = smo74614.getStemDirection();
smo74614.setStemDirection(dirsmo76625);
smo74615.setStemDirection(dirsmo76625);
smo74616.setStemDirection(dirsmo76625);
smo74617.setStemDirection(dirsmo76625);
const smo76625 = new VF.Beam([smo74614,smo74615,smo74616,smo74617]);
 
// formatting measures in staff group smo75335
fmtsmo746334.format([smo74633v0,smo75109v0,smo75109v1], 1117);
const stavesmo74633 = new VF.Stave(103, 1298, 1174);
stavesmo74633.setAttribute('id', 'stavesmo74633');
stavesmo74633.setBegBarType(1);
stavesmo74633.addClef('treble');
stavesmo74633.setContext(context);
stavesmo74633.draw();
smo74633v0.draw(context, stavesmo74633);
smo76619.setContext(context);
smo76619.draw();
smo76620.setContext(context);
smo76620.draw();
smo76621.setContext(context);
smo76621.draw();
smo76622.setContext(context);
smo76622.draw();
smo76623.setContext(context);
smo76623.draw();
smo76624.setContext(context);
smo76624.draw();
smo76625.setContext(context);
smo76625.draw();
const stavesmo75109 = new VF.Stave(103, 1436, 1174);
stavesmo75109.setAttribute('id', 'stavesmo75109');
stavesmo75109.setBegBarType(1);
stavesmo75109.addClef('bass');
stavesmo75109.setContext(context);
stavesmo75109.draw();
smo75109v0.draw(context, stavesmo75109);
smo75109v1.draw(context, stavesmo75109);
const leftsmo75335stavesmo746331 = new VF.StaveConnector(stavesmo74633, stavesmo75109).setType(3);
leftsmo75335stavesmo746331.setContext(context).draw();
const fmtsmo746775 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo74677v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74677v0ar = [];
const smo74634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74634.setAttribute('id', 'smo74634');
smo74677v0ar.push(smo74634);
const smo74635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74635.setAttribute('id', 'smo74635');
const smo746350acc = new VF.Accidental('#');
smo74635.addModifier(smo746350acc, 0);
smo74677v0ar.push(smo74635);
const smo74636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74636.setAttribute('id', 'smo74636');
smo74677v0ar.push(smo74636);
const smo74637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74637.setAttribute('id', 'smo74637');
const smo746370acc = new VF.Accidental('#');
smo74637.addModifier(smo746370acc, 0);
smo74677v0ar.push(smo74637);
const smo74638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo74638.setAttribute('id', 'smo74638');
smo74677v0ar.push(smo74638);
const smo74639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74639.setAttribute('id', 'smo74639');
smo74677v0ar.push(smo74639);
const smo74640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74640.setAttribute('id', 'smo74640');
smo74677v0ar.push(smo74640);
const smo74641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74641.setAttribute('id', 'smo74641');
smo74677v0ar.push(smo74641);
const smo74642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74642.setAttribute('id', 'smo74642');
smo74677v0ar.push(smo74642);
const smo74643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74643.setAttribute('id', 'smo74643');
const smo746430acc = new VF.Accidental('#');
smo74643.addModifier(smo746430acc, 0);
smo74677v0ar.push(smo74643);
const smo74644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74644.setAttribute('id', 'smo74644');
smo74677v0ar.push(smo74644);
const smo74645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74645.setAttribute('id', 'smo74645');
smo74677v0ar.push(smo74645);
const smo74646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74646.setAttribute('id', 'smo74646');
smo74677v0ar.push(smo74646);
const smo74647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74647.setAttribute('id', 'smo74647');
smo74677v0ar.push(smo74647);
const smo74648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74648.setAttribute('id', 'smo74648');
smo74677v0ar.push(smo74648);
const smo74649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74649.setAttribute('id', 'smo74649');
smo74677v0ar.push(smo74649);
const smo74650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["en/4/n"]}'))
smo74650.setAttribute('id', 'smo74650');
smo74677v0ar.push(smo74650);
const smo74651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["f#/4/n"]}'))
smo74651.setAttribute('id', 'smo74651');
smo74677v0ar.push(smo74651);
const smo74652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo74652.setAttribute('id', 'smo74652');
smo74677v0ar.push(smo74652);
const smo74653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["a#/4/n"]}'))
smo74653.setAttribute('id', 'smo74653');
smo74677v0ar.push(smo74653);
const smo74654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["bn/4/n"]}'))
smo74654.setAttribute('id', 'smo74654');
smo74677v0ar.push(smo74654);
const smo74655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74655.setAttribute('id', 'smo74655');
smo74677v0ar.push(smo74655);
const smo74656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["en/5/n"]}'))
smo74656.setAttribute('id', 'smo74656');
smo74677v0ar.push(smo74656);
const smo74657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["c#/5/n"]}'))
smo74657.setAttribute('id', 'smo74657');
smo74677v0ar.push(smo74657);
const smo74658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74658.setAttribute('id', 'smo74658');
smo74677v0ar.push(smo74658);
const smo74659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74659.setAttribute('id', 'smo74659');
smo74677v0ar.push(smo74659);
const smo74660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["dn/5/n"]}'))
smo74660.setAttribute('id', 'smo74660');
smo74677v0ar.push(smo74660);
const smo74661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo74661.setAttribute('id', 'smo74661');
smo74677v0ar.push(smo74661);
smo74677v0.addTickables(smo74677v0ar)
fmtsmo746775.joinVoices([smo74677v0]);
const fmtsmo751415 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo75141v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75141v0ar = [];
const smo75110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75110.setAttribute('id', 'smo75110');
smo75141v0ar.push(smo75110);
const smo75111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75111.setAttribute('id', 'smo75111');
smo75141v0ar.push(smo75111);
const smo75112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75112.setAttribute('id', 'smo75112');
smo75141v0ar.push(smo75112);
const smo75113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75113.setAttribute('id', 'smo75113');
smo75141v0ar.push(smo75113);
const smo75114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75114.setAttribute('id', 'smo75114');
smo75141v0ar.push(smo75114);
const smo75115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75115.setAttribute('id', 'smo75115');
smo75141v0ar.push(smo75115);
const smo75116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75116.setAttribute('id', 'smo75116');
smo75141v0ar.push(smo75116);
const smo75117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75117.setAttribute('id', 'smo75117');
smo75141v0ar.push(smo75117);
const smo75118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo75118.setAttribute('id', 'smo75118');
smo75141v0ar.push(smo75118);
const smo75119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo75119.setAttribute('id', 'smo75119');
smo75141v0ar.push(smo75119);
const smo75120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75120.setAttribute('id', 'smo75120');
const smo751200acc = new VF.Accidental('#');
smo75120.addModifier(smo751200acc, 0);
smo75141v0ar.push(smo75120);
const smo75121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo75121.setAttribute('id', 'smo75121');
smo75141v0ar.push(smo75121);
smo75141v0.addTickables(smo75141v0ar)
fmtsmo751415.joinVoices([smo75141v0]);
const smo75141v1 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo75141v1ar = [];
const smo75122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75122.setAttribute('id', 'smo75122');
smo75122.setStyle({ fillStyle: "#115511" });
smo75141v1ar.push(smo75122);
const smo75123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75123.setAttribute('id', 'smo75123');
smo75123.setStyle({ fillStyle: "#115511" });
smo75141v1ar.push(smo75123);
const smo75124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["en/2/n"]}'))
smo75124.setAttribute('id', 'smo75124');
smo75124.setStyle({ fillStyle: "#115511" });
smo75141v1ar.push(smo75124);
const smo75125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["bn/1/n"]}'))
smo75125.setAttribute('id', 'smo75125');
smo75125.setStyle({ fillStyle: "#115511" });
smo75141v1ar.push(smo75125);
smo75141v1.addTickables(smo75141v1ar)
fmtsmo751415.joinVoices([smo75141v1]);
// create beam groups and tuplets for format grp smo75335 before formatting
const dirsmo76641 = smo74634.getStemDirection();
smo74634.setStemDirection(dirsmo76641);
smo74635.setStemDirection(dirsmo76641);
smo74636.setStemDirection(dirsmo76641);
smo74637.setStemDirection(dirsmo76641);
const smo76641 = new VF.Beam([smo74634,smo74635,smo74636,smo74637]);
const dirsmo76642 = smo74638.getStemDirection();
smo74638.setStemDirection(dirsmo76642);
smo74639.setStemDirection(dirsmo76642);
smo74640.setStemDirection(dirsmo76642);
smo74641.setStemDirection(dirsmo76642);
const smo76642 = new VF.Beam([smo74638,smo74639,smo74640,smo74641]);
const dirsmo76643 = smo74642.getStemDirection();
smo74642.setStemDirection(dirsmo76643);
smo74643.setStemDirection(dirsmo76643);
smo74644.setStemDirection(dirsmo76643);
smo74645.setStemDirection(dirsmo76643);
const smo76643 = new VF.Beam([smo74642,smo74643,smo74644,smo74645]);
const dirsmo76644 = smo74646.getStemDirection();
smo74646.setStemDirection(dirsmo76644);
smo74647.setStemDirection(dirsmo76644);
smo74648.setStemDirection(dirsmo76644);
smo74649.setStemDirection(dirsmo76644);
const smo76644 = new VF.Beam([smo74646,smo74647,smo74648,smo74649]);
const dirsmo76645 = smo74650.getStemDirection();
smo74650.setStemDirection(dirsmo76645);
smo74651.setStemDirection(dirsmo76645);
smo74652.setStemDirection(dirsmo76645);
smo74653.setStemDirection(dirsmo76645);
const smo76645 = new VF.Beam([smo74650,smo74651,smo74652,smo74653]);
const dirsmo76646 = smo74654.getStemDirection();
smo74654.setStemDirection(dirsmo76646);
smo74655.setStemDirection(dirsmo76646);
smo74656.setStemDirection(dirsmo76646);
smo74657.setStemDirection(dirsmo76646);
const smo76646 = new VF.Beam([smo74654,smo74655,smo74656,smo74657]);
const dirsmo76647 = smo74658.getStemDirection();
smo74658.setStemDirection(dirsmo76647);
smo74659.setStemDirection(dirsmo76647);
const smo76647 = new VF.Beam([smo74658,smo74659]);
 
// formatting measures in staff group smo75335
fmtsmo746775.format([smo74677v0,smo75141v0,smo75141v1], 1117);
const stavesmo74677 = new VF.Stave(103, 1621, 1174);
stavesmo74677.setAttribute('id', 'stavesmo74677');
stavesmo74677.setBegBarType(1);
stavesmo74677.addClef('treble');
stavesmo74677.setContext(context);
stavesmo74677.draw();
smo74677v0.draw(context, stavesmo74677);
smo76641.setContext(context);
smo76641.draw();
smo76642.setContext(context);
smo76642.draw();
smo76643.setContext(context);
smo76643.draw();
smo76644.setContext(context);
smo76644.draw();
smo76645.setContext(context);
smo76645.draw();
smo76646.setContext(context);
smo76646.draw();
smo76647.setContext(context);
smo76647.draw();
const stavesmo75141 = new VF.Stave(103, 1734, 1174);
stavesmo75141.setAttribute('id', 'stavesmo75141');
stavesmo75141.setBegBarType(1);
stavesmo75141.addClef('bass');
stavesmo75141.setContext(context);
stavesmo75141.draw();
smo75141v0.draw(context, stavesmo75141);
smo75141v1.draw(context, stavesmo75141);
const leftsmo75335stavesmo746771 = new VF.StaveConnector(stavesmo74677, stavesmo75141).setType(3);
leftsmo75335stavesmo746771.setContext(context).draw();
// modifier from 0-0-0-5 to 0-0-0-6
const smo76839 = new VF.StaveTie({ first_note: smo74417, last_note: smo74418, 
          firstNote: smo74417, lastNote: smo74418, first_indices: [0], last_indices: [0]});
smo76839.setContext(context).draw();
// modifier from 0-0-0-15 to 0-0-0-16
const smo76840 = new VF.StaveTie({ first_note: smo74427, last_note: smo74428, 
          firstNote: smo74427, lastNote: smo74428, first_indices: [0], last_indices: [0]});
smo76840.setContext(context).draw();
// modifier from 0-0-0-24 to 0-0-0-25
const smo76841 = new VF.StaveTie({ first_note: smo74436, last_note: smo74437, 
          firstNote: smo74436, lastNote: smo74437, first_indices: [0], last_indices: [0]});
smo76841.setContext(context).draw();
// modifier from 0-1-0-8 to 0-1-0-9
const smo76842 = new VF.StaveTie({ first_note: smo74472, last_note: smo74473, 
          firstNote: smo74472, lastNote: smo74473, first_indices: [0], last_indices: [0]});
smo76842.setContext(context).draw();
// modifier from 0-1-0-15 to 0-1-0-16
const smo76843 = new VF.StaveTie({ first_note: smo74480, last_note: smo74481, 
          firstNote: smo74480, lastNote: smo74481, first_indices: [0], last_indices: [0]});
smo76843.setContext(context).draw();
// modifier from 0-1-0-18 to 0-1-0-19
const smo76844 = new VF.StaveTie({ first_note: smo74483, last_note: smo74484, 
          firstNote: smo74483, lastNote: smo74484, first_indices: [0], last_indices: [0]});
smo76844.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo76845 = new VF.StaveTie({ first_note: smo74486, last_note: null, 
          firstNote: smo74486, lastNote: null, first_indices: [0], last_indices: [0]});
smo76845.setContext(context).draw();
// modifier from 0-1-0-21 to 0-2-0-0
const smo76846 = new VF.StaveTie({ first_note: null, last_note: smo74509, 
          firstNote: null, lastNote: smo74509, first_indices: [0], last_indices: [0]});
smo76846.setContext(context).draw();
// modifier from 0-2-0-26 to 0-2-0-27
const smo76847 = new VF.StaveTie({ first_note: smo74535, last_note: smo74536, 
          firstNote: smo74535, lastNote: smo74536, first_indices: [0], last_indices: [0]});
smo76847.setContext(context).draw();
// modifier from 0-3-0-6 to 0-3-0-7
const smo76848 = new VF.StaveTie({ first_note: smo74560, last_note: smo74561, 
          firstNote: smo74560, lastNote: smo74561, first_indices: [0], last_indices: [0]});
smo76848.setContext(context).draw();
// modifier from 0-3-0-16 to 0-3-0-17
const smo76849 = new VF.StaveTie({ first_note: smo74570, last_note: smo74571, 
          firstNote: smo74570, lastNote: smo74571, first_indices: [0], last_indices: [0]});
smo76849.setContext(context).draw();
// modifier from 0-4-0-5 to 0-4-0-6
const smo76850 = new VF.StaveTie({ first_note: smo74595, last_note: smo74596, 
          firstNote: smo74595, lastNote: smo74596, first_indices: [0], last_indices: [0]});
smo76850.setContext(context).draw();
// modifier from 0-4-0-15 to 0-4-0-16
const smo76851 = new VF.StaveTie({ first_note: smo74605, last_note: smo74606, 
          firstNote: smo74605, lastNote: smo74606, first_indices: [0], last_indices: [0]});
smo76851.setContext(context).draw();
// modifier from 0-5-0-25 to 0-5-0-26
const smo76852 = new VF.StaveTie({ first_note: smo74659, last_note: smo74660, 
          firstNote: smo74659, lastNote: smo74660, first_indices: [0], last_indices: [0]});
smo76852.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo76853 = new VF.Curve(smo74610, null, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo76853.setContext(context).draw();
// modifier from 0-4-0-19 to 0-5-0-26
const smo76854 = new VF.Curve(null, smo74660, JSON.parse('{"thickness":2,"xShift":-5,"yShift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"positionEnd":1}'));
smo76854.setContext(context).draw();
// modifier from 0-3-0-1 to 0-3-0-7
const smo76855 = new VF.Curve(smo74555, smo74561, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo76855.setContext(context).draw();
// modifier from 0-0-0-0 to 0-0-0-6
const smo76856 = new VF.Curve(smo74411, smo74418, JSON.parse('{"thickness":2,"xShift":0,"yShift":67,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"positionEnd":1}'));
smo76856.setContext(context).draw();
// modifier from 0-0-0-8 to 0-0-0-16
const smo76857 = new VF.Curve(smo74420, smo74428, JSON.parse('{"thickness":2,"xShift":0,"yShift":35,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo76857.setContext(context).draw();
// modifier from 0-0-0-19 to 0-0-0-25
const smo76858 = new VF.Curve(smo74431, smo74437, JSON.parse('{"thickness":2,"xShift":0,"yShift":13,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo76858.setContext(context).draw();
// modifier from 0-1-0-1 to 0-1-0-9
const smo76859 = new VF.Curve(smo74465, smo74473, JSON.parse('{"thickness":2,"xShift":0,"yShift":16,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo76859.setContext(context).draw();
// modifier from 0-2-0-1 to 0-2-0-27
const smo76860 = new VF.Curve(smo74510, smo74536, JSON.parse('{"thickness":2,"xShift":0,"yShift":5,"cps":[{"x":0,"y":100},{"x":0,"y":80}],"invert":true,"position":1,"positionEnd":1}'));
smo76860.setContext(context).draw();
// modifier from 0-1-0-11 to 0-1-0-19
const smo76861 = new VF.Curve(smo74475, smo74484, JSON.parse('{"thickness":2,"xShift":0,"yShift":5,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"positionEnd":2}'));
smo76861.setContext(context).draw();
// modifier from 0-3-0-9 to 0-3-0-17
const smo76862 = new VF.Curve(smo74563, smo74571, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":57},{"x":0,"y":45}],"invert":true,"position":1,"positionEnd":2}'));
smo76862.setContext(context).draw();
// modifier from 0-4-0-0 to 0-4-0-6
const smo76863 = new VF.Curve(smo74590, smo74596, JSON.parse('{"thickness":2,"xShift":0,"yShift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo76863.setContext(context).draw();
// modifier from 0-4-0-8 to 0-4-0-16
const smo76864 = new VF.Curve(smo74598, smo74606, JSON.parse('{"thickness":2,"xShift":0,"yShift":15,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo76864.setContext(context).draw();
}
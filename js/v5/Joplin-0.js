// @@ The Entertainer p 1/3  by Scott Joplin
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1989 2574');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo1016650 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo101665v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101665v0ar = [];
const smo101637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo101637.setAttribute('id', 'smo101637');
smo101665v0ar.push(smo101637);
const smo101639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/6/n"]}'))
smo101639.setAttribute('id', 'smo101639');
smo101665v0ar.push(smo101639);
const smo101640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo101640.setAttribute('id', 'smo101640');
smo101665v0ar.push(smo101640);
const smo101641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo101641.setAttribute('id', 'smo101641');
smo101665v0ar.push(smo101641);
const smo101642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo101642.setAttribute('id', 'smo101642');
smo101665v0ar.push(smo101642);
const smo101643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo101643.setAttribute('id', 'smo101643');
smo101665v0ar.push(smo101643);
const smo101644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo101644.setAttribute('id', 'smo101644');
smo101665v0ar.push(smo101644);
smo101665v0.addTickables(smo101665v0ar)
fmtsmo1016650.joinVoices([smo101665v0]);
const smo101665v1 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101665v1ar = [];
const smo101645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101645.setAttribute('id', 'smo101645');
smo101645.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101645);
const smo101646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101646.setAttribute('id', 'smo101646');
smo101646.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101646);
const smo101647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101647.setAttribute('id', 'smo101647');
smo101647.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101647);
const smo101648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101648.setAttribute('id', 'smo101648');
smo101648.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101648);
const smo101649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101649.setAttribute('id', 'smo101649');
smo101649.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101649);
const smo101650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo101650.setAttribute('id', 'smo101650');
smo101650.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101650);
const smo101651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101651.setAttribute('id', 'smo101651');
smo101651.setStyle({ fillStyle: "#115511" });
smo101665v1ar.push(smo101651);
smo101665v1.addTickables(smo101665v1ar)
fmtsmo1016650.joinVoices([smo101665v1]);
const fmtsmo1045420 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo104542v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104542v0ar = [];
const smo104528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104528.setAttribute('id', 'smo104528');
smo104542v0ar.push(smo104528);
smo104542v0.addTickables(smo104542v0ar)
fmtsmo1045420.joinVoices([smo104542v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106565 = smo101637.getStemDirection();
smo101637.setStemDirection(dirsmo106565);
smo101639.setStemDirection(dirsmo106565);
smo101640.setStemDirection(dirsmo106565);
smo101641.setStemDirection(dirsmo106565);
const smo106565 = new VF.Beam([smo101637,smo101639,smo101640,smo101641]);
const dirsmo106566 = smo101642.getStemDirection();
smo101642.setStemDirection(dirsmo106566);
smo101643.setStemDirection(dirsmo106566);
smo101644.setStemDirection(dirsmo106566);
const smo106566 = new VF.Beam([smo101642,smo101643,smo101644]);
const dirsmo106567 = smo101645.getStemDirection();
smo101645.setStemDirection(dirsmo106567);
smo101646.setStemDirection(dirsmo106567);
smo101647.setStemDirection(dirsmo106567);
smo101648.setStemDirection(dirsmo106567);
const smo106567 = new VF.Beam([smo101645,smo101646,smo101647,smo101648]);
const dirsmo106568 = smo101649.getStemDirection();
smo101649.setStemDirection(dirsmo106568);
smo101650.setStemDirection(dirsmo106568);
smo101651.setStemDirection(dirsmo106568);
const smo106568 = new VF.Beam([smo101649,smo101650,smo101651]);
 
// formatting measures in staff group smo100894
fmtsmo1016650.format([smo101665v0,smo101665v1,smo104542v0], 224);
const stavesmo101665 = new VF.Stave(73, 406, 295);
stavesmo101665.setAttribute('id', 'stavesmo101665');
stavesmo101665.setBegBarType(1);
stavesmo101665.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo101665.addClef('treble');
stavesmo101665.addTimeSignature('2/4');
stavesmo101665.setContext(context);
stavesmo101665.draw();
smo101665v0.draw(context, stavesmo101665);
smo101665v1.draw(context, stavesmo101665);
smo106565.setContext(context);
smo106565.draw();
smo106566.setContext(context);
smo106566.draw();
smo106567.setContext(context);
smo106567.draw();
smo106568.setContext(context);
smo106568.draw();
const stavesmo104542 = new VF.Stave(73, 545, 295);
stavesmo104542.setAttribute('id', 'stavesmo104542');
stavesmo104542.setBegBarType(1);
stavesmo104542.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo104542.addClef('bass');
stavesmo104542.addTimeSignature('2/4');
stavesmo104542.setContext(context);
stavesmo104542.draw();
smo104542v0.draw(context, stavesmo104542);
const leftsmo100894stavesmo1016651 = new VF.StaveConnector(stavesmo101665, stavesmo104542).setType(3);
leftsmo100894stavesmo1016651.setContext(context).draw();
const fmtsmo1016861 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo101686v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101686v0ar = [];
const smo101666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo101666.setAttribute('id', 'smo101666');
smo101686v0ar.push(smo101666);
const smo101667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo101667.setAttribute('id', 'smo101667');
smo101686v0ar.push(smo101667);
const smo101668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101668.setAttribute('id', 'smo101668');
smo101686v0ar.push(smo101668);
const smo101669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101669.setAttribute('id', 'smo101669');
smo101686v0ar.push(smo101669);
const smo101670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo101670.setAttribute('id', 'smo101670');
smo101686v0ar.push(smo101670);
const smo101671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo101671.setAttribute('id', 'smo101671');
smo101686v0ar.push(smo101671);
const smo101672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo101672.setAttribute('id', 'smo101672');
smo101686v0ar.push(smo101672);
smo101686v0.addTickables(smo101686v0ar)
fmtsmo1016861.joinVoices([smo101686v0]);
const fmtsmo1045631 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo104563v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104563v0ar = [];
const smo104543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo104543.setAttribute('id', 'smo104543');
smo104563v0ar.push(smo104543);
const smo104544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo104544.setAttribute('id', 'smo104544');
smo104563v0ar.push(smo104544);
const smo104545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo104545.setAttribute('id', 'smo104545');
smo104563v0ar.push(smo104545);
const smo104546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo104546.setAttribute('id', 'smo104546');
smo104563v0ar.push(smo104546);
const smo104547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo104547.setAttribute('id', 'smo104547');
smo104563v0ar.push(smo104547);
const smo104548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo104548.setAttribute('id', 'smo104548');
smo104563v0ar.push(smo104548);
const smo104549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo104549.setAttribute('id', 'smo104549');
smo104563v0ar.push(smo104549);
smo104563v0.addTickables(smo104563v0ar)
fmtsmo1045631.joinVoices([smo104563v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106573 = smo101666.getStemDirection();
smo101666.setStemDirection(dirsmo106573);
smo101667.setStemDirection(dirsmo106573);
smo101668.setStemDirection(dirsmo106573);
smo101669.setStemDirection(dirsmo106573);
const smo106573 = new VF.Beam([smo101666,smo101667,smo101668,smo101669]);
const dirsmo106574 = smo101670.getStemDirection();
smo101670.setStemDirection(dirsmo106574);
smo101671.setStemDirection(dirsmo106574);
smo101672.setStemDirection(dirsmo106574);
const smo106574 = new VF.Beam([smo101670,smo101671,smo101672]);
const dirsmo106576 = smo104543.getStemDirection();
smo104543.setStemDirection(dirsmo106576);
smo104544.setStemDirection(dirsmo106576);
smo104545.setStemDirection(dirsmo106576);
smo104546.setStemDirection(dirsmo106576);
const smo106576 = new VF.Beam([smo104543,smo104544,smo104545,smo104546]);
const dirsmo106577 = smo104547.getStemDirection();
smo104547.setStemDirection(dirsmo106577);
smo104548.setStemDirection(dirsmo106577);
smo104549.setStemDirection(dirsmo106577);
const smo106577 = new VF.Beam([smo104547,smo104548,smo104549]);
 
// formatting measures in staff group smo100894
fmtsmo1016861.format([smo101686v0,smo104563v0], 281);
const stavesmo101686 = new VF.Stave(368, 406, 295);
stavesmo101686.setAttribute('id', 'stavesmo101686');
stavesmo101686.setBegBarType(VF.Barline.type.NONE);
stavesmo101686.setContext(context);
stavesmo101686.draw();
smo101686v0.draw(context, stavesmo101686);
smo106573.setContext(context);
smo106573.draw();
smo106574.setContext(context);
smo106574.draw();
const stavesmo104563 = new VF.Stave(368, 545, 295);
stavesmo104563.setAttribute('id', 'stavesmo104563');
stavesmo104563.setBegBarType(VF.Barline.type.NONE);
stavesmo104563.setContext(context);
stavesmo104563.draw();
smo104563v0.draw(context, stavesmo104563);
smo106576.setContext(context);
smo106576.draw();
smo106577.setContext(context);
smo106577.draw();
const fmtsmo1017082 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo101708v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101708v0ar = [];
const smo101687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101687.setAttribute('id', 'smo101687');
smo101708v0ar.push(smo101687);
const smo101688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101688.setAttribute('id', 'smo101688');
smo101708v0ar.push(smo101688);
const smo101689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo101689.setAttribute('id', 'smo101689');
smo101708v0ar.push(smo101689);
const smo101690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo101690.setAttribute('id', 'smo101690');
smo101708v0ar.push(smo101690);
const smo101691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo101691.setAttribute('id', 'smo101691');
smo101708v0ar.push(smo101691);
const smo101692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/3/n"]}'))
smo101692.setAttribute('id', 'smo101692');
smo101708v0ar.push(smo101692);
const smo101693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo101693.setAttribute('id', 'smo101693');
smo101708v0ar.push(smo101693);
const smo101694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n"]}'))
smo101694.setAttribute('id', 'smo101694');
const smo1016940acc = new VF.Accidental('b');
smo101694.addModifier(smo1016940acc, 0);
smo101708v0ar.push(smo101694);
smo101708v0.addTickables(smo101708v0ar)
fmtsmo1017082.joinVoices([smo101708v0]);
const fmtsmo1045852 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo104585v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104585v0ar = [];
const smo104564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104564.setAttribute('id', 'smo104564');
smo104585v0ar.push(smo104564);
const smo104565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo104565.setAttribute('id', 'smo104565');
smo104585v0ar.push(smo104565);
const smo104566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104566.setAttribute('id', 'smo104566');
smo104585v0ar.push(smo104566);
const smo104567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104567.setAttribute('id', 'smo104567');
smo104585v0ar.push(smo104567);
const smo104568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104568.setAttribute('id', 'smo104568');
smo104585v0ar.push(smo104568);
const smo104569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo104569.setAttribute('id', 'smo104569');
smo104585v0ar.push(smo104569);
const smo104570 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo104570.setAttribute('id', 'smo104570');
smo104585v0ar.push(smo104570);
const smo104571 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n"]}'))
smo104571.setAttribute('id', 'smo104571');
const smo1045710acc = new VF.Accidental('b');
smo104571.addModifier(smo1045710acc, 0);
smo104585v0ar.push(smo104571);
smo104585v0.addTickables(smo104585v0ar)
fmtsmo1045852.joinVoices([smo104585v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106581 = smo101687.getStemDirection();
smo101687.setStemDirection(dirsmo106581);
smo101688.setStemDirection(dirsmo106581);
smo101689.setStemDirection(dirsmo106581);
smo101690.setStemDirection(dirsmo106581);
const smo106581 = new VF.Beam([smo101687,smo101688,smo101689,smo101690]);
const dirsmo106582 = smo101691.getStemDirection();
smo101691.setStemDirection(dirsmo106582);
smo101692.setStemDirection(dirsmo106582);
smo101693.setStemDirection(dirsmo106582);
smo101694.setStemDirection(dirsmo106582);
const smo106582 = new VF.Beam([smo101691,smo101692,smo101693,smo101694]);
const dirsmo106584 = smo104564.getStemDirection();
smo104564.setStemDirection(dirsmo106584);
smo104565.setStemDirection(dirsmo106584);
smo104566.setStemDirection(dirsmo106584);
smo104567.setStemDirection(dirsmo106584);
const smo106584 = new VF.Beam([smo104564,smo104565,smo104566,smo104567]);
const dirsmo106585 = smo104568.getStemDirection();
smo104568.setStemDirection(dirsmo106585);
smo104569.setStemDirection(dirsmo106585);
smo104570.setStemDirection(dirsmo106585);
smo104571.setStemDirection(dirsmo106585);
const smo106585 = new VF.Beam([smo104568,smo104569,smo104570,smo104571]);
 
// formatting measures in staff group smo100894
fmtsmo1017082.format([smo101708v0,smo104585v0], 281);
const stavesmo101708 = new VF.Stave(663, 406, 295);
stavesmo101708.setAttribute('id', 'stavesmo101708');
stavesmo101708.setBegBarType(VF.Barline.type.NONE);
stavesmo101708.setContext(context);
stavesmo101708.draw();
smo101708v0.draw(context, stavesmo101708);
smo106581.setContext(context);
smo106581.draw();
smo106582.setContext(context);
smo106582.draw();
const stavesmo104585 = new VF.Stave(663, 545, 295);
stavesmo104585.setAttribute('id', 'stavesmo104585');
stavesmo104585.setBegBarType(VF.Barline.type.NONE);
stavesmo104585.setContext(context);
stavesmo104585.draw();
smo104585v0.draw(context, stavesmo104585);
smo106584.setContext(context);
smo106584.draw();
smo106585.setContext(context);
smo106585.draw();
const fmtsmo1017263 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo101726v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101726v0ar = [];
const smo101709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo101709.setAttribute('id', 'smo101709');
smo101726v0ar.push(smo101709);
const smo101710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
smo101710.setAttribute('id', 'smo101710');
smo101726v0ar.push(smo101710);
const smo101711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101711.setAttribute('id', 'smo101711');
smo101726v0ar.push(smo101711);
const smo101712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo101712.setAttribute('id', 'smo101712');
const smo1017120acc = new VF.Accidental('b');
smo101712.addModifier(smo1017120acc, 0);
smo101726v0ar.push(smo101712);
smo101726v0.addTickables(smo101726v0ar)
fmtsmo1017263.joinVoices([smo101726v0]);
const fmtsmo1046033 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo104603v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104603v0ar = [];
const smo104586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104586.setAttribute('id', 'smo104586');
smo104603v0ar.push(smo104586);
const smo104587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104587.setAttribute('id', 'smo104587');
smo104603v0ar.push(smo104587);
const smo104588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/1/n","gn/2/n"]}'))
smo104588.setAttribute('id', 'smo104588');
smo104603v0ar.push(smo104588);
const smo104589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104589.setAttribute('id', 'smo104589');
smo104603v0ar.push(smo104589);
smo104603v0.addTickables(smo104603v0ar)
fmtsmo1046033.joinVoices([smo104603v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106589 = smo101710.getStemDirection();
smo101710.setStemDirection(dirsmo106589);
smo101711.setStemDirection(dirsmo106589);
smo101712.setStemDirection(dirsmo106589);
const smo106589 = new VF.Beam([smo101710,smo101711,smo101712]);
const dirsmo106591 = smo104588.getStemDirection();
smo104588.setStemDirection(dirsmo106591);
smo104589.setStemDirection(dirsmo106591);
const smo106591 = new VF.Beam([smo104588,smo104589]);
 
// formatting measures in staff group smo100894
fmtsmo1017263.format([smo101726v0,smo104603v0], 281);
const stavesmo101726 = new VF.Stave(958, 406, 295);
stavesmo101726.setAttribute('id', 'stavesmo101726');
stavesmo101726.setBegBarType(VF.Barline.type.NONE);
stavesmo101726.setContext(context);
stavesmo101726.draw();
smo101726v0.draw(context, stavesmo101726);
smo106589.setContext(context);
smo106589.draw();
const stavesmo104603 = new VF.Stave(958, 545, 295);
stavesmo104603.setAttribute('id', 'stavesmo104603');
stavesmo104603.setBegBarType(VF.Barline.type.NONE);
stavesmo104603.setContext(context);
stavesmo104603.draw();
smo104603v0.draw(context, stavesmo104603);
smo106591.setContext(context);
smo106591.draw();
const fmtsmo1017474 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo101747v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101747v0ar = [];
const smo101727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101727.setAttribute('id', 'smo101727');
smo101747v0ar.push(smo101727);
const smo101729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101729.setAttribute('id', 'smo101729');
smo101747v0ar.push(smo101729);
const smo101730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101730.setAttribute('id', 'smo101730');
smo101747v0ar.push(smo101730);
const smo101731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101731.setAttribute('id', 'smo101731');
smo101747v0ar.push(smo101731);
const smo101732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101732.setAttribute('id', 'smo101732');
smo101747v0ar.push(smo101732);
const smo101733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101733.setAttribute('id', 'smo101733');
smo101747v0ar.push(smo101733);
smo101747v0.addTickables(smo101747v0ar)
fmtsmo1017474.joinVoices([smo101747v0]);
const fmtsmo1046214 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo104621v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104621v0ar = [];
const smo104604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104604.setAttribute('id', 'smo104604');
smo104621v0ar.push(smo104604);
const smo104605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104605.setAttribute('id', 'smo104605');
smo104621v0ar.push(smo104605);
const smo104606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104606.setAttribute('id', 'smo104606');
smo104621v0ar.push(smo104606);
const smo104607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo104607.setAttribute('id', 'smo104607');
const smo1046071acc = new VF.Accidental('b');
smo104607.addModifier(smo1046071acc, 1);
smo104621v0ar.push(smo104607);
smo104621v0.addTickables(smo104621v0ar)
fmtsmo1046214.joinVoices([smo104621v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106593 = smo101727.getStemDirection();
smo101727.setStemDirection(dirsmo106593);
smo101729.setStemDirection(dirsmo106593);
smo101730.setStemDirection(dirsmo106593);
const smo106593 = new VF.Beam([smo101727,smo101729,smo101730]);
const dirsmo106594 = smo101731.getStemDirection();
smo101731.setStemDirection(dirsmo106594);
smo101732.setStemDirection(dirsmo106594);
smo101733.setStemDirection(dirsmo106594);
const smo106594 = new VF.Beam([smo101731,smo101732,smo101733]);
const dirsmo106596 = smo104604.getStemDirection();
smo104604.setStemDirection(dirsmo106596);
smo104605.setStemDirection(dirsmo106596);
const smo106596 = new VF.Beam([smo104604,smo104605]);
const dirsmo106597 = smo104606.getStemDirection();
smo104606.setStemDirection(dirsmo106597);
smo104607.setStemDirection(dirsmo106597);
const smo106597 = new VF.Beam([smo104606,smo104607]);
 
// formatting measures in staff group smo100894
fmtsmo1017474.format([smo101747v0,smo104621v0], 272);
const stavesmo101747 = new VF.Stave(1253, 406, 295);
stavesmo101747.setAttribute('id', 'stavesmo101747');
stavesmo101747.setBegBarType(4);
stavesmo101747.setContext(context);
stavesmo101747.draw();
smo101747v0.draw(context, stavesmo101747);
smo106593.setContext(context);
smo106593.draw();
smo106594.setContext(context);
smo106594.draw();
const stavesmo104621 = new VF.Stave(1253, 545, 295);
stavesmo104621.setAttribute('id', 'stavesmo104621');
stavesmo104621.setBegBarType(4);
stavesmo104621.setContext(context);
stavesmo104621.draw();
smo104621v0.draw(context, stavesmo104621);
smo106596.setContext(context);
smo106596.draw();
smo106597.setContext(context);
smo106597.draw();
const fmtsmo1017665 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo101766v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101766v0ar = [];
const smo101748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101748.setAttribute('id', 'smo101748');
smo101766v0ar.push(smo101748);
const smo101749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101749.setAttribute('id', 'smo101749');
smo101766v0ar.push(smo101749);
const smo101750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101750.setAttribute('id', 'smo101750');
smo101766v0ar.push(smo101750);
const smo101751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101751.setAttribute('id', 'smo101751');
smo101766v0ar.push(smo101751);
const smo101752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo101752.setAttribute('id', 'smo101752');
const smo1017520acc = new VF.Accidental('b');
smo101752.addModifier(smo1017520acc, 0);
const smo1017521acc = new VF.Accidental('b');
smo101752.addModifier(smo1017521acc, 1);
const smo1017522acc = new VF.Accidental('b');
smo101752.addModifier(smo1017522acc, 2);
smo101766v0ar.push(smo101752);
smo101766v0.addTickables(smo101766v0ar)
fmtsmo1017665.joinVoices([smo101766v0]);
const fmtsmo1046395 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo104639v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104639v0ar = [];
const smo104622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104622.setAttribute('id', 'smo104622');
smo104639v0ar.push(smo104622);
const smo104623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo104623.setAttribute('id', 'smo104623');
smo104639v0ar.push(smo104623);
const smo104624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104624.setAttribute('id', 'smo104624');
smo104639v0ar.push(smo104624);
const smo104625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo104625.setAttribute('id', 'smo104625');
smo104639v0ar.push(smo104625);
smo104639v0.addTickables(smo104639v0ar)
fmtsmo1046395.joinVoices([smo104639v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106601 = smo101749.getStemDirection();
smo101749.setStemDirection(dirsmo106601);
smo101750.setStemDirection(dirsmo106601);
smo101751.setStemDirection(dirsmo106601);
smo101752.setStemDirection(dirsmo106601);
const smo106601 = new VF.Beam([smo101749,smo101750,smo101751,smo101752]);
const dirsmo106603 = smo104622.getStemDirection();
smo104622.setStemDirection(dirsmo106603);
smo104623.setStemDirection(dirsmo106603);
const smo106603 = new VF.Beam([smo104622,smo104623]);
const dirsmo106604 = smo104624.getStemDirection();
smo104624.setStemDirection(dirsmo106604);
smo104625.setStemDirection(dirsmo106604);
const smo106604 = new VF.Beam([smo104624,smo104625]);
 
// formatting measures in staff group smo100894
fmtsmo1017665.format([smo101766v0,smo104639v0], 281);
const stavesmo101766 = new VF.Stave(1548, 406, 295);
stavesmo101766.setAttribute('id', 'stavesmo101766');
stavesmo101766.setBegBarType(VF.Barline.type.NONE);
stavesmo101766.setContext(context);
stavesmo101766.draw();
smo101766v0.draw(context, stavesmo101766);
smo106601.setContext(context);
smo106601.draw();
const stavesmo104639 = new VF.Stave(1548, 545, 295);
stavesmo104639.setAttribute('id', 'stavesmo104639');
stavesmo104639.setBegBarType(VF.Barline.type.NONE);
stavesmo104639.setContext(context);
stavesmo104639.draw();
smo104639v0.draw(context, stavesmo104639);
smo106603.setContext(context);
smo106603.draw();
smo106604.setContext(context);
smo106604.draw();
const rightsmo100894stavesmo1017661 = new VF.StaveConnector(stavesmo101766, stavesmo104639).setType(0);
rightsmo100894stavesmo1017661.setContext(context).draw();
const fmtsmo1017886 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo101788v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101788v0ar = [];
const smo101767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101767.setAttribute('id', 'smo101767');
smo101788v0ar.push(smo101767);
const smo101769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101769.setAttribute('id', 'smo101769');
smo101788v0ar.push(smo101769);
const smo101770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101770.setAttribute('id', 'smo101770');
smo101788v0ar.push(smo101770);
const smo101771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101771.setAttribute('id', 'smo101771');
smo101788v0ar.push(smo101771);
const smo101772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101772.setAttribute('id', 'smo101772');
smo101788v0ar.push(smo101772);
const smo101773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo101773.setAttribute('id', 'smo101773');
smo101788v0ar.push(smo101773);
const smo101774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101774.setAttribute('id', 'smo101774');
smo101788v0ar.push(smo101774);
smo101788v0.addTickables(smo101788v0ar)
fmtsmo1017886.joinVoices([smo101788v0]);
const fmtsmo1046576 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo104657v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104657v0ar = [];
const smo104640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104640.setAttribute('id', 'smo104640');
smo104657v0ar.push(smo104640);
const smo104641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104641.setAttribute('id', 'smo104641');
smo104657v0ar.push(smo104641);
const smo104642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104642.setAttribute('id', 'smo104642');
smo104657v0ar.push(smo104642);
const smo104643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104643.setAttribute('id', 'smo104643');
smo104657v0ar.push(smo104643);
smo104657v0.addTickables(smo104657v0ar)
fmtsmo1046576.joinVoices([smo104657v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106616 = smo101767.getStemDirection();
smo101767.setStemDirection(dirsmo106616);
smo101769.setStemDirection(dirsmo106616);
smo101770.setStemDirection(dirsmo106616);
smo101771.setStemDirection(dirsmo106616);
const smo106616 = new VF.Beam([smo101767,smo101769,smo101770,smo101771]);
const dirsmo106617 = smo101772.getStemDirection();
smo101772.setStemDirection(dirsmo106617);
smo101773.setStemDirection(dirsmo106617);
smo101774.setStemDirection(dirsmo106617);
const smo106617 = new VF.Beam([smo101772,smo101773,smo101774]);
const dirsmo106619 = smo104640.getStemDirection();
smo104640.setStemDirection(dirsmo106619);
smo104641.setStemDirection(dirsmo106619);
const smo106619 = new VF.Beam([smo104640,smo104641]);
const dirsmo106620 = smo104642.getStemDirection();
smo104642.setStemDirection(dirsmo106620);
smo104643.setStemDirection(dirsmo106620);
const smo106620 = new VF.Beam([smo104642,smo104643]);
 
// formatting measures in staff group smo100894
fmtsmo1017886.format([smo101788v0,smo104657v0], 244);
const stavesmo101788 = new VF.Stave(73, 779, 295);
stavesmo101788.setAttribute('id', 'stavesmo101788');
stavesmo101788.setBegBarType(1);
stavesmo101788.addClef('treble');
stavesmo101788.setContext(context);
stavesmo101788.draw();
smo101788v0.draw(context, stavesmo101788);
smo106616.setContext(context);
smo106616.draw();
smo106617.setContext(context);
smo106617.draw();
const stavesmo104657 = new VF.Stave(73, 934, 295);
stavesmo104657.setAttribute('id', 'stavesmo104657');
stavesmo104657.setBegBarType(1);
stavesmo104657.addClef('bass');
stavesmo104657.setContext(context);
stavesmo104657.draw();
smo104657v0.draw(context, stavesmo104657);
smo106619.setContext(context);
smo106619.draw();
smo106620.setContext(context);
smo106620.draw();
const leftsmo100894stavesmo1017881 = new VF.StaveConnector(stavesmo101788, stavesmo104657).setType(3);
leftsmo100894stavesmo1017881.setContext(context).draw();
const fmtsmo1018067 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo101806v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101806v0ar = [];
const smo101789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101789.setAttribute('id', 'smo101789');
smo101806v0ar.push(smo101789);
const smo101790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101790.setAttribute('id', 'smo101790');
smo101806v0ar.push(smo101790);
const smo101791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101791.setAttribute('id', 'smo101791');
smo101806v0ar.push(smo101791);
const smo101792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo101792.setAttribute('id', 'smo101792');
const smo1017920acc = new VF.Accidental('b');
smo101792.addModifier(smo1017920acc, 0);
smo101806v0ar.push(smo101792);
smo101806v0.addTickables(smo101806v0ar)
fmtsmo1018067.joinVoices([smo101806v0]);
const fmtsmo1046757 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo104675v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104675v0ar = [];
const smo104658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104658.setAttribute('id', 'smo104658');
smo104675v0ar.push(smo104658);
const smo104659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104659.setAttribute('id', 'smo104659');
smo104675v0ar.push(smo104659);
const smo104660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104660.setAttribute('id', 'smo104660');
smo104675v0ar.push(smo104660);
const smo104661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104661.setAttribute('id', 'smo104661');
smo104675v0ar.push(smo104661);
smo104675v0.addTickables(smo104675v0ar)
fmtsmo1046757.joinVoices([smo104675v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106624 = smo101790.getStemDirection();
smo101790.setStemDirection(dirsmo106624);
smo101791.setStemDirection(dirsmo106624);
smo101792.setStemDirection(dirsmo106624);
const smo106624 = new VF.Beam([smo101790,smo101791,smo101792]);
const dirsmo106626 = smo104658.getStemDirection();
smo104658.setStemDirection(dirsmo106626);
smo104659.setStemDirection(dirsmo106626);
const smo106626 = new VF.Beam([smo104658,smo104659]);
const dirsmo106627 = smo104660.getStemDirection();
smo104660.setStemDirection(dirsmo106627);
smo104661.setStemDirection(dirsmo106627);
const smo106627 = new VF.Beam([smo104660,smo104661]);
 
// formatting measures in staff group smo100894
fmtsmo1018067.format([smo101806v0,smo104675v0], 281);
const stavesmo101806 = new VF.Stave(368, 779, 295);
stavesmo101806.setAttribute('id', 'stavesmo101806');
stavesmo101806.setBegBarType(VF.Barline.type.NONE);
stavesmo101806.setContext(context);
stavesmo101806.draw();
smo101806v0.draw(context, stavesmo101806);
smo106624.setContext(context);
smo106624.draw();
const stavesmo104675 = new VF.Stave(368, 934, 295);
stavesmo104675.setAttribute('id', 'stavesmo104675');
stavesmo104675.setBegBarType(VF.Barline.type.NONE);
stavesmo104675.setContext(context);
stavesmo104675.draw();
smo104675v0.draw(context, stavesmo104675);
smo106626.setContext(context);
smo106626.draw();
smo106627.setContext(context);
smo106627.draw();
const fmtsmo1018278 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo101827v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101827v0ar = [];
const smo101807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101807.setAttribute('id', 'smo101807');
smo101827v0ar.push(smo101807);
const smo101809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101809.setAttribute('id', 'smo101809');
smo101827v0ar.push(smo101809);
const smo101810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101810.setAttribute('id', 'smo101810');
smo101827v0ar.push(smo101810);
const smo101811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101811.setAttribute('id', 'smo101811');
smo101827v0ar.push(smo101811);
const smo101812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101812.setAttribute('id', 'smo101812');
smo101827v0ar.push(smo101812);
const smo101813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101813.setAttribute('id', 'smo101813');
smo101827v0ar.push(smo101813);
smo101827v0.addTickables(smo101827v0ar)
fmtsmo1018278.joinVoices([smo101827v0]);
const fmtsmo1046938 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo104693v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104693v0ar = [];
const smo104676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104676.setAttribute('id', 'smo104676');
smo104693v0ar.push(smo104676);
const smo104677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104677.setAttribute('id', 'smo104677');
smo104693v0ar.push(smo104677);
const smo104678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104678.setAttribute('id', 'smo104678');
smo104693v0ar.push(smo104678);
const smo104679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo104679.setAttribute('id', 'smo104679');
const smo1046791acc = new VF.Accidental('b');
smo104679.addModifier(smo1046791acc, 1);
smo104693v0ar.push(smo104679);
smo104693v0.addTickables(smo104693v0ar)
fmtsmo1046938.joinVoices([smo104693v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106631 = smo101807.getStemDirection();
smo101807.setStemDirection(dirsmo106631);
smo101809.setStemDirection(dirsmo106631);
smo101810.setStemDirection(dirsmo106631);
const smo106631 = new VF.Beam([smo101807,smo101809,smo101810]);
const dirsmo106632 = smo101811.getStemDirection();
smo101811.setStemDirection(dirsmo106632);
smo101812.setStemDirection(dirsmo106632);
smo101813.setStemDirection(dirsmo106632);
const smo106632 = new VF.Beam([smo101811,smo101812,smo101813]);
const dirsmo106634 = smo104676.getStemDirection();
smo104676.setStemDirection(dirsmo106634);
smo104677.setStemDirection(dirsmo106634);
const smo106634 = new VF.Beam([smo104676,smo104677]);
const dirsmo106635 = smo104678.getStemDirection();
smo104678.setStemDirection(dirsmo106635);
smo104679.setStemDirection(dirsmo106635);
const smo106635 = new VF.Beam([smo104678,smo104679]);
 
// formatting measures in staff group smo100894
fmtsmo1018278.format([smo101827v0,smo104693v0], 281);
const stavesmo101827 = new VF.Stave(663, 779, 295);
stavesmo101827.setAttribute('id', 'stavesmo101827');
stavesmo101827.setBegBarType(VF.Barline.type.NONE);
stavesmo101827.setContext(context);
stavesmo101827.draw();
smo101827v0.draw(context, stavesmo101827);
smo106631.setContext(context);
smo106631.draw();
smo106632.setContext(context);
smo106632.draw();
const stavesmo104693 = new VF.Stave(663, 934, 295);
stavesmo104693.setAttribute('id', 'stavesmo104693');
stavesmo104693.setBegBarType(VF.Barline.type.NONE);
stavesmo104693.setContext(context);
stavesmo104693.draw();
smo104693v0.draw(context, stavesmo104693);
smo106634.setContext(context);
smo106634.draw();
smo106635.setContext(context);
smo106635.draw();
const fmtsmo1018459 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo101845v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101845v0ar = [];
const smo101828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101828.setAttribute('id', 'smo101828');
smo101845v0ar.push(smo101828);
const smo101829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101829.setAttribute('id', 'smo101829');
smo101845v0ar.push(smo101829);
const smo101830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo101830.setAttribute('id', 'smo101830');
smo101845v0ar.push(smo101830);
const smo101831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo101831.setAttribute('id', 'smo101831');
smo101845v0ar.push(smo101831);
smo101845v0.addTickables(smo101845v0ar)
fmtsmo1018459.joinVoices([smo101845v0]);
const fmtsmo1047119 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo104711v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104711v0ar = [];
const smo104694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104694.setAttribute('id', 'smo104694');
smo104711v0ar.push(smo104694);
const smo104695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo104695.setAttribute('id', 'smo104695');
smo104711v0ar.push(smo104695);
const smo104696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104696.setAttribute('id', 'smo104696');
smo104711v0ar.push(smo104696);
const smo104697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo104697.setAttribute('id', 'smo104697');
const smo1046970acc = new VF.Accidental('b');
smo104697.addModifier(smo1046970acc, 0);
const smo1046971acc = new VF.Accidental('b');
smo104697.addModifier(smo1046971acc, 1);
smo104711v0ar.push(smo104697);
smo104711v0.addTickables(smo104711v0ar)
fmtsmo1047119.joinVoices([smo104711v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106639 = smo101829.getStemDirection();
smo101829.setStemDirection(dirsmo106639);
smo101830.setStemDirection(dirsmo106639);
smo101831.setStemDirection(dirsmo106639);
const smo106639 = new VF.Beam([smo101829,smo101830,smo101831]);
const dirsmo106641 = smo104694.getStemDirection();
smo104694.setStemDirection(dirsmo106641);
smo104695.setStemDirection(dirsmo106641);
const smo106641 = new VF.Beam([smo104694,smo104695]);
const dirsmo106642 = smo104696.getStemDirection();
smo104696.setStemDirection(dirsmo106642);
smo104697.setStemDirection(dirsmo106642);
const smo106642 = new VF.Beam([smo104696,smo104697]);
 
// formatting measures in staff group smo100894
fmtsmo1018459.format([smo101845v0,smo104711v0], 281);
const stavesmo101845 = new VF.Stave(958, 779, 295);
stavesmo101845.setAttribute('id', 'stavesmo101845');
stavesmo101845.setBegBarType(VF.Barline.type.NONE);
stavesmo101845.setContext(context);
stavesmo101845.draw();
smo101845v0.draw(context, stavesmo101845);
smo106639.setContext(context);
smo106639.draw();
const stavesmo104711 = new VF.Stave(958, 934, 295);
stavesmo104711.setAttribute('id', 'stavesmo104711');
stavesmo104711.setBegBarType(VF.Barline.type.NONE);
stavesmo104711.setContext(context);
stavesmo104711.draw();
smo104711v0.draw(context, stavesmo104711);
smo106641.setContext(context);
smo106641.draw();
smo106642.setContext(context);
smo106642.draw();
const fmtsmo10186810 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo101868v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101868v0ar = [];
const smo101846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo101846.setAttribute('id', 'smo101846');
const smo1018460acc = new VF.Accidental('b');
smo101846.addModifier(smo1018460acc, 0);
const smo1018462acc = new VF.Accidental('b');
smo101846.addModifier(smo1018462acc, 2);
smo101868v0ar.push(smo101846);
const smo101848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo101848.setAttribute('id', 'smo101848');
smo101868v0ar.push(smo101848);
const smo101849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101849.setAttribute('id', 'smo101849');
smo101868v0ar.push(smo101849);
const smo101850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101850.setAttribute('id', 'smo101850');
smo101868v0ar.push(smo101850);
const smo101851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101851.setAttribute('id', 'smo101851');
smo101868v0ar.push(smo101851);
const smo101852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101852.setAttribute('id', 'smo101852');
smo101868v0ar.push(smo101852);
const smo101853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101853.setAttribute('id', 'smo101853');
smo101868v0ar.push(smo101853);
const smo101854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","an/5/n"]}'))
smo101854.setAttribute('id', 'smo101854');
smo101868v0ar.push(smo101854);
smo101868v0.addTickables(smo101868v0ar)
fmtsmo10186810.joinVoices([smo101868v0]);
const fmtsmo10472910 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo104729v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104729v0ar = [];
const smo104712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo104712.setAttribute('id', 'smo104712');
smo104729v0ar.push(smo104712);
const smo104713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo104713.setAttribute('id', 'smo104713');
const smo1047131acc = new VF.Accidental('b');
smo104713.addModifier(smo1047131acc, 1);
smo104729v0ar.push(smo104713);
const smo104714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo104714.setAttribute('id', 'smo104714');
smo104729v0ar.push(smo104714);
const smo104715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo104715.setAttribute('id', 'smo104715');
smo104729v0ar.push(smo104715);
smo104729v0.addTickables(smo104729v0ar)
fmtsmo10472910.joinVoices([smo104729v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106646 = smo101846.getStemDirection();
smo101846.setStemDirection(dirsmo106646);
smo101848.setStemDirection(dirsmo106646);
smo101849.setStemDirection(dirsmo106646);
smo101850.setStemDirection(dirsmo106646);
const smo106646 = new VF.Beam([smo101846,smo101848,smo101849,smo101850]);
const dirsmo106647 = smo101851.getStemDirection();
smo101851.setStemDirection(dirsmo106647);
smo101852.setStemDirection(dirsmo106647);
smo101853.setStemDirection(dirsmo106647);
smo101854.setStemDirection(dirsmo106647);
const smo106647 = new VF.Beam([smo101851,smo101852,smo101853,smo101854]);
const dirsmo106649 = smo104712.getStemDirection();
smo104712.setStemDirection(dirsmo106649);
smo104713.setStemDirection(dirsmo106649);
const smo106649 = new VF.Beam([smo104712,smo104713]);
const dirsmo106650 = smo104714.getStemDirection();
smo104714.setStemDirection(dirsmo106650);
smo104715.setStemDirection(dirsmo106650);
const smo106650 = new VF.Beam([smo104714,smo104715]);
 
// formatting measures in staff group smo100894
fmtsmo10186810.format([smo101868v0,smo104729v0], 281);
const stavesmo101868 = new VF.Stave(1253, 779, 295);
stavesmo101868.setAttribute('id', 'stavesmo101868');
stavesmo101868.setBegBarType(VF.Barline.type.NONE);
stavesmo101868.setContext(context);
stavesmo101868.draw();
smo101868v0.draw(context, stavesmo101868);
smo106646.setContext(context);
smo106646.draw();
smo106647.setContext(context);
smo106647.draw();
const stavesmo104729 = new VF.Stave(1253, 934, 295);
stavesmo104729.setAttribute('id', 'stavesmo104729');
stavesmo104729.setBegBarType(VF.Barline.type.NONE);
stavesmo104729.setContext(context);
stavesmo104729.draw();
smo104729v0.draw(context, stavesmo104729);
smo106649.setContext(context);
smo106649.draw();
smo106650.setContext(context);
smo106650.draw();
const fmtsmo10188611 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo101886v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101886v0ar = [];
const smo101869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101869.setAttribute('id', 'smo101869');
smo101886v0ar.push(smo101869);
const smo101870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101870.setAttribute('id', 'smo101870');
smo101886v0ar.push(smo101870);
const smo101871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo101871.setAttribute('id', 'smo101871');
smo101886v0ar.push(smo101871);
const smo101872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo101872.setAttribute('id', 'smo101872');
const smo1018720acc = new VF.Accidental('b');
smo101872.addModifier(smo1018720acc, 0);
smo101886v0ar.push(smo101872);
smo101886v0.addTickables(smo101886v0ar)
fmtsmo10188611.joinVoices([smo101886v0]);
const fmtsmo10474711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo104747v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104747v0ar = [];
const smo104730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104730.setAttribute('id', 'smo104730');
smo104747v0ar.push(smo104730);
const smo104731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104731.setAttribute('id', 'smo104731');
smo104747v0ar.push(smo104731);
const smo104732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104732.setAttribute('id', 'smo104732');
smo104747v0ar.push(smo104732);
const smo104733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo104733.setAttribute('id', 'smo104733');
smo104747v0ar.push(smo104733);
smo104747v0.addTickables(smo104747v0ar)
fmtsmo10474711.joinVoices([smo104747v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106654 = smo101870.getStemDirection();
smo101870.setStemDirection(dirsmo106654);
smo101871.setStemDirection(dirsmo106654);
smo101872.setStemDirection(dirsmo106654);
const smo106654 = new VF.Beam([smo101870,smo101871,smo101872]);
const dirsmo106656 = smo104730.getStemDirection();
smo104730.setStemDirection(dirsmo106656);
smo104731.setStemDirection(dirsmo106656);
const smo106656 = new VF.Beam([smo104730,smo104731]);
const dirsmo106657 = smo104732.getStemDirection();
smo104732.setStemDirection(dirsmo106657);
smo104733.setStemDirection(dirsmo106657);
const smo106657 = new VF.Beam([smo104732,smo104733]);
 
// formatting measures in staff group smo100894
fmtsmo10188611.format([smo101886v0,smo104747v0], 281);
const stavesmo101886 = new VF.Stave(1548, 779, 295);
stavesmo101886.setAttribute('id', 'stavesmo101886');
stavesmo101886.setBegBarType(VF.Barline.type.NONE);
stavesmo101886.setContext(context);
stavesmo101886.draw();
smo101886v0.draw(context, stavesmo101886);
smo106654.setContext(context);
smo106654.draw();
const stavesmo104747 = new VF.Stave(1548, 934, 295);
stavesmo104747.setAttribute('id', 'stavesmo104747');
stavesmo104747.setBegBarType(VF.Barline.type.NONE);
stavesmo104747.setContext(context);
stavesmo104747.draw();
smo104747v0.draw(context, stavesmo104747);
smo106656.setContext(context);
smo106656.draw();
smo106657.setContext(context);
smo106657.draw();
const rightsmo100894stavesmo1018861 = new VF.StaveConnector(stavesmo101886, stavesmo104747).setType(0);
rightsmo100894stavesmo1018861.setContext(context).draw();
const fmtsmo10190712 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo101907v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101907v0ar = [];
const smo101887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101887.setAttribute('id', 'smo101887');
smo101907v0ar.push(smo101887);
const smo101889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101889.setAttribute('id', 'smo101889');
smo101907v0ar.push(smo101889);
const smo101890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101890.setAttribute('id', 'smo101890');
smo101907v0ar.push(smo101890);
const smo101891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101891.setAttribute('id', 'smo101891');
smo101907v0ar.push(smo101891);
const smo101892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo101892.setAttribute('id', 'smo101892');
smo101907v0ar.push(smo101892);
const smo101893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101893.setAttribute('id', 'smo101893');
smo101907v0ar.push(smo101893);
smo101907v0.addTickables(smo101907v0ar)
fmtsmo10190712.joinVoices([smo101907v0]);
const fmtsmo10476512 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo104765v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104765v0ar = [];
const smo104748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104748.setAttribute('id', 'smo104748');
smo104765v0ar.push(smo104748);
const smo104749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104749.setAttribute('id', 'smo104749');
smo104765v0ar.push(smo104749);
const smo104750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104750.setAttribute('id', 'smo104750');
smo104765v0ar.push(smo104750);
const smo104751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo104751.setAttribute('id', 'smo104751');
const smo1047511acc = new VF.Accidental('b');
smo104751.addModifier(smo1047511acc, 1);
smo104765v0ar.push(smo104751);
smo104765v0.addTickables(smo104765v0ar)
fmtsmo10476512.joinVoices([smo104765v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106669 = smo101887.getStemDirection();
smo101887.setStemDirection(dirsmo106669);
smo101889.setStemDirection(dirsmo106669);
smo101890.setStemDirection(dirsmo106669);
const smo106669 = new VF.Beam([smo101887,smo101889,smo101890]);
const dirsmo106670 = smo101891.getStemDirection();
smo101891.setStemDirection(dirsmo106670);
smo101892.setStemDirection(dirsmo106670);
smo101893.setStemDirection(dirsmo106670);
const smo106670 = new VF.Beam([smo101891,smo101892,smo101893]);
const dirsmo106672 = smo104748.getStemDirection();
smo104748.setStemDirection(dirsmo106672);
smo104749.setStemDirection(dirsmo106672);
const smo106672 = new VF.Beam([smo104748,smo104749]);
const dirsmo106673 = smo104750.getStemDirection();
smo104750.setStemDirection(dirsmo106673);
smo104751.setStemDirection(dirsmo106673);
const smo106673 = new VF.Beam([smo104750,smo104751]);
 
// formatting measures in staff group smo100894
fmtsmo10190712.format([smo101907v0,smo104765v0], 244);
const stavesmo101907 = new VF.Stave(73, 1132, 295);
stavesmo101907.setAttribute('id', 'stavesmo101907');
stavesmo101907.setBegBarType(1);
stavesmo101907.addClef('treble');
stavesmo101907.setContext(context);
stavesmo101907.draw();
smo101907v0.draw(context, stavesmo101907);
smo106669.setContext(context);
smo106669.draw();
smo106670.setContext(context);
smo106670.draw();
const stavesmo104765 = new VF.Stave(73, 1287, 295);
stavesmo104765.setAttribute('id', 'stavesmo104765');
stavesmo104765.setBegBarType(1);
stavesmo104765.addClef('bass');
stavesmo104765.setContext(context);
stavesmo104765.draw();
smo104765v0.draw(context, stavesmo104765);
smo106672.setContext(context);
smo106672.draw();
smo106673.setContext(context);
smo106673.draw();
const leftsmo100894stavesmo1019071 = new VF.StaveConnector(stavesmo101907, stavesmo104765).setType(3);
leftsmo100894stavesmo1019071.setContext(context).draw();
const fmtsmo10192613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo101926v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101926v0ar = [];
const smo101908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101908.setAttribute('id', 'smo101908');
smo101926v0ar.push(smo101908);
const smo101909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo101909.setAttribute('id', 'smo101909');
smo101926v0ar.push(smo101909);
const smo101910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101910.setAttribute('id', 'smo101910');
smo101926v0ar.push(smo101910);
const smo101911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101911.setAttribute('id', 'smo101911');
smo101926v0ar.push(smo101911);
const smo101912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo101912.setAttribute('id', 'smo101912');
const smo1019120acc = new VF.Accidental('b');
smo101912.addModifier(smo1019120acc, 0);
const smo1019121acc = new VF.Accidental('b');
smo101912.addModifier(smo1019121acc, 1);
const smo1019122acc = new VF.Accidental('b');
smo101912.addModifier(smo1019122acc, 2);
smo101926v0ar.push(smo101912);
smo101926v0.addTickables(smo101926v0ar)
fmtsmo10192613.joinVoices([smo101926v0]);
const fmtsmo10478313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo104783v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104783v0ar = [];
const smo104766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo104766.setAttribute('id', 'smo104766');
smo104783v0ar.push(smo104766);
const smo104767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n"]}'))
smo104767.setAttribute('id', 'smo104767');
smo104783v0ar.push(smo104767);
const smo104768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo104768.setAttribute('id', 'smo104768');
smo104783v0ar.push(smo104768);
const smo104769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo104769.setAttribute('id', 'smo104769');
smo104783v0ar.push(smo104769);
smo104783v0.addTickables(smo104783v0ar)
fmtsmo10478313.joinVoices([smo104783v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106677 = smo101909.getStemDirection();
smo101909.setStemDirection(dirsmo106677);
smo101910.setStemDirection(dirsmo106677);
smo101911.setStemDirection(dirsmo106677);
smo101912.setStemDirection(dirsmo106677);
const smo106677 = new VF.Beam([smo101909,smo101910,smo101911,smo101912]);
const dirsmo106679 = smo104766.getStemDirection();
smo104766.setStemDirection(dirsmo106679);
smo104767.setStemDirection(dirsmo106679);
const smo106679 = new VF.Beam([smo104766,smo104767]);
const dirsmo106680 = smo104768.getStemDirection();
smo104768.setStemDirection(dirsmo106680);
smo104769.setStemDirection(dirsmo106680);
const smo106680 = new VF.Beam([smo104768,smo104769]);
 
// formatting measures in staff group smo100894
fmtsmo10192613.format([smo101926v0,smo104783v0], 281);
const stavesmo101926 = new VF.Stave(368, 1132, 295);
stavesmo101926.setAttribute('id', 'stavesmo101926');
stavesmo101926.setBegBarType(VF.Barline.type.NONE);
stavesmo101926.setContext(context);
stavesmo101926.draw();
smo101926v0.draw(context, stavesmo101926);
smo106677.setContext(context);
smo106677.draw();
const stavesmo104783 = new VF.Stave(368, 1287, 295);
stavesmo104783.setAttribute('id', 'stavesmo104783');
stavesmo104783.setBegBarType(VF.Barline.type.NONE);
stavesmo104783.setContext(context);
stavesmo104783.draw();
smo104783v0.draw(context, stavesmo104783);
smo106679.setContext(context);
smo106679.draw();
smo106680.setContext(context);
smo106680.draw();
const fmtsmo10194814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo101948v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101948v0ar = [];
const smo101927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101927.setAttribute('id', 'smo101927');
smo101948v0ar.push(smo101927);
const smo101929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101929.setAttribute('id', 'smo101929');
smo101948v0ar.push(smo101929);
const smo101930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101930.setAttribute('id', 'smo101930');
smo101948v0ar.push(smo101930);
const smo101931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101931.setAttribute('id', 'smo101931');
smo101948v0ar.push(smo101931);
const smo101932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo101932.setAttribute('id', 'smo101932');
smo101948v0ar.push(smo101932);
const smo101933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo101933.setAttribute('id', 'smo101933');
smo101948v0ar.push(smo101933);
const smo101934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo101934.setAttribute('id', 'smo101934');
smo101948v0ar.push(smo101934);
smo101948v0.addTickables(smo101948v0ar)
fmtsmo10194814.joinVoices([smo101948v0]);
const fmtsmo10480114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo104801v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104801v0ar = [];
const smo104784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104784.setAttribute('id', 'smo104784');
smo104801v0ar.push(smo104784);
const smo104785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104785.setAttribute('id', 'smo104785');
smo104801v0ar.push(smo104785);
const smo104786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104786.setAttribute('id', 'smo104786');
smo104801v0ar.push(smo104786);
const smo104787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo104787.setAttribute('id', 'smo104787');
smo104801v0ar.push(smo104787);
smo104801v0.addTickables(smo104801v0ar)
fmtsmo10480114.joinVoices([smo104801v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106684 = smo101927.getStemDirection();
smo101927.setStemDirection(dirsmo106684);
smo101929.setStemDirection(dirsmo106684);
smo101930.setStemDirection(dirsmo106684);
smo101931.setStemDirection(dirsmo106684);
const smo106684 = new VF.Beam([smo101927,smo101929,smo101930,smo101931]);
const dirsmo106685 = smo101932.getStemDirection();
smo101932.setStemDirection(dirsmo106685);
smo101933.setStemDirection(dirsmo106685);
smo101934.setStemDirection(dirsmo106685);
const smo106685 = new VF.Beam([smo101932,smo101933,smo101934]);
const dirsmo106687 = smo104784.getStemDirection();
smo104784.setStemDirection(dirsmo106687);
smo104785.setStemDirection(dirsmo106687);
const smo106687 = new VF.Beam([smo104784,smo104785]);
const dirsmo106688 = smo104786.getStemDirection();
smo104786.setStemDirection(dirsmo106688);
smo104787.setStemDirection(dirsmo106688);
const smo106688 = new VF.Beam([smo104786,smo104787]);
 
// formatting measures in staff group smo100894
fmtsmo10194814.format([smo101948v0,smo104801v0], 281);
const stavesmo101948 = new VF.Stave(663, 1132, 295);
stavesmo101948.setAttribute('id', 'stavesmo101948');
stavesmo101948.setBegBarType(VF.Barline.type.NONE);
stavesmo101948.setContext(context);
stavesmo101948.draw();
smo101948v0.draw(context, stavesmo101948);
smo106684.setContext(context);
smo106684.draw();
smo106685.setContext(context);
smo106685.draw();
const stavesmo104801 = new VF.Stave(663, 1287, 295);
stavesmo104801.setAttribute('id', 'stavesmo104801');
stavesmo104801.setBegBarType(VF.Barline.type.NONE);
stavesmo104801.setContext(context);
stavesmo104801.draw();
smo104801v0.draw(context, stavesmo104801);
smo106687.setContext(context);
smo106687.draw();
smo106688.setContext(context);
smo106688.draw();
const fmtsmo10196615 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo101966v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101966v0ar = [];
const smo101949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101949.setAttribute('id', 'smo101949');
smo101966v0ar.push(smo101949);
const smo101950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo101950.setAttribute('id', 'smo101950');
smo101966v0ar.push(smo101950);
const smo101951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101951.setAttribute('id', 'smo101951');
smo101966v0ar.push(smo101951);
const smo101952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101952.setAttribute('id', 'smo101952');
smo101966v0ar.push(smo101952);
smo101966v0.addTickables(smo101966v0ar)
fmtsmo10196615.joinVoices([smo101966v0]);
const fmtsmo10481915 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo104819v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104819v0ar = [];
const smo104802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104802.setAttribute('id', 'smo104802');
smo104819v0ar.push(smo104802);
const smo104803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo104803.setAttribute('id', 'smo104803');
smo104819v0ar.push(smo104803);
const smo104804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104804.setAttribute('id', 'smo104804');
smo104819v0ar.push(smo104804);
const smo104805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104805.setAttribute('id', 'smo104805');
smo104819v0ar.push(smo104805);
smo104819v0.addTickables(smo104819v0ar)
fmtsmo10481915.joinVoices([smo104819v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106692 = smo101950.getStemDirection();
smo101950.setStemDirection(dirsmo106692);
smo101951.setStemDirection(dirsmo106692);
smo101952.setStemDirection(dirsmo106692);
const smo106692 = new VF.Beam([smo101950,smo101951,smo101952]);
const dirsmo106694 = smo104802.getStemDirection();
smo104802.setStemDirection(dirsmo106694);
smo104803.setStemDirection(dirsmo106694);
const smo106694 = new VF.Beam([smo104802,smo104803]);
 
// formatting measures in staff group smo100894
fmtsmo10196615.format([smo101966v0,smo104819v0], 281);
const stavesmo101966 = new VF.Stave(958, 1132, 295);
stavesmo101966.setAttribute('id', 'stavesmo101966');
stavesmo101966.setBegBarType(VF.Barline.type.NONE);
stavesmo101966.setContext(context);
stavesmo101966.draw();
smo101966v0.draw(context, stavesmo101966);
smo106692.setContext(context);
smo106692.draw();
const stavesmo104819 = new VF.Stave(958, 1287, 295);
stavesmo104819.setAttribute('id', 'stavesmo104819');
stavesmo104819.setBegBarType(VF.Barline.type.NONE);
stavesmo104819.setContext(context);
stavesmo104819.draw();
smo104819v0.draw(context, stavesmo104819);
smo106694.setContext(context);
smo106694.draw();
const fmtsmo10198816 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo101988v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo101988v0ar = [];
const smo101967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101967.setAttribute('id', 'smo101967');
smo101988v0ar.push(smo101967);
const smo101968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101968.setAttribute('id', 'smo101968');
smo101988v0ar.push(smo101968);
const smo101969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101969.setAttribute('id', 'smo101969');
smo101988v0ar.push(smo101969);
const smo101970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101970.setAttribute('id', 'smo101970');
smo101988v0ar.push(smo101970);
const smo101971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101971.setAttribute('id', 'smo101971');
smo101988v0ar.push(smo101971);
const smo101972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101972.setAttribute('id', 'smo101972');
smo101988v0ar.push(smo101972);
const smo101973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101973.setAttribute('id', 'smo101973');
smo101988v0ar.push(smo101973);
const smo101974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101974.setAttribute('id', 'smo101974');
smo101988v0ar.push(smo101974);
smo101988v0.addTickables(smo101988v0ar)
fmtsmo10198816.joinVoices([smo101988v0]);
const fmtsmo10483716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo104837v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104837v0ar = [];
const smo104820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo104820.setAttribute('id', 'smo104820');
smo104837v0ar.push(smo104820);
const smo104821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104821.setAttribute('id', 'smo104821');
smo104837v0ar.push(smo104821);
const smo104822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo104822.setAttribute('id', 'smo104822');
const smo1048220acc = new VF.Accidental('b');
smo104822.addModifier(smo1048220acc, 0);
const smo1048221acc = new VF.Accidental('b');
smo104822.addModifier(smo1048221acc, 1);
smo104837v0ar.push(smo104822);
const smo104823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104823.setAttribute('id', 'smo104823');
smo104837v0ar.push(smo104823);
smo104837v0.addTickables(smo104837v0ar)
fmtsmo10483716.joinVoices([smo104837v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106698 = smo101967.getStemDirection();
smo101967.setStemDirection(dirsmo106698);
smo101968.setStemDirection(dirsmo106698);
smo101969.setStemDirection(dirsmo106698);
smo101970.setStemDirection(dirsmo106698);
const smo106698 = new VF.Beam([smo101967,smo101968,smo101969,smo101970]);
const dirsmo106699 = smo101971.getStemDirection();
smo101971.setStemDirection(dirsmo106699);
smo101972.setStemDirection(dirsmo106699);
smo101973.setStemDirection(dirsmo106699);
smo101974.setStemDirection(dirsmo106699);
const smo106699 = new VF.Beam([smo101971,smo101972,smo101973,smo101974]);
const dirsmo106701 = smo104820.getStemDirection();
smo104820.setStemDirection(dirsmo106701);
smo104821.setStemDirection(dirsmo106701);
const smo106701 = new VF.Beam([smo104820,smo104821]);
const dirsmo106702 = smo104822.getStemDirection();
smo104822.setStemDirection(dirsmo106702);
smo104823.setStemDirection(dirsmo106702);
const smo106702 = new VF.Beam([smo104822,smo104823]);
 
// formatting measures in staff group smo100894
fmtsmo10198816.format([smo101988v0,smo104837v0], 281);
const stavesmo101988 = new VF.Stave(1253, 1132, 295);
stavesmo101988.setAttribute('id', 'stavesmo101988');
stavesmo101988.setBegBarType(VF.Barline.type.NONE);
stavesmo101988.setContext(context);
stavesmo101988.draw();
smo101988v0.draw(context, stavesmo101988);
smo106698.setContext(context);
smo106698.draw();
smo106699.setContext(context);
smo106699.draw();
const stavesmo104837 = new VF.Stave(1253, 1287, 295);
stavesmo104837.setAttribute('id', 'stavesmo104837');
stavesmo104837.setBegBarType(VF.Barline.type.NONE);
stavesmo104837.setContext(context);
stavesmo104837.draw();
smo104837v0.draw(context, stavesmo104837);
smo106701.setContext(context);
smo106701.draw();
smo106702.setContext(context);
smo106702.draw();
const fmtsmo10201017 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo102010v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102010v0ar = [];
const smo101989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101989.setAttribute('id', 'smo101989');
smo102010v0ar.push(smo101989);
const smo101990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101990.setAttribute('id', 'smo101990');
smo102010v0ar.push(smo101990);
const smo101991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101991.setAttribute('id', 'smo101991');
smo102010v0ar.push(smo101991);
const smo101992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101992.setAttribute('id', 'smo101992');
smo102010v0ar.push(smo101992);
const smo101993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","en/6/n"]}'))
smo101993.setAttribute('id', 'smo101993');
smo102010v0ar.push(smo101993);
const smo101994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101994.setAttribute('id', 'smo101994');
smo102010v0ar.push(smo101994);
const smo101995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo101995.setAttribute('id', 'smo101995');
smo102010v0ar.push(smo101995);
const smo101996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo101996.setAttribute('id', 'smo101996');
smo102010v0ar.push(smo101996);
smo102010v0.addTickables(smo102010v0ar)
fmtsmo10201017.joinVoices([smo102010v0]);
const fmtsmo10485517 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo104855v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104855v0ar = [];
const smo104838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104838.setAttribute('id', 'smo104838');
smo104855v0ar.push(smo104838);
const smo104839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104839.setAttribute('id', 'smo104839');
smo104855v0ar.push(smo104839);
const smo104840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo104840.setAttribute('id', 'smo104840');
const smo1048400acc = new VF.Accidental('b');
smo104840.addModifier(smo1048400acc, 0);
const smo1048401acc = new VF.Accidental('b');
smo104840.addModifier(smo1048401acc, 1);
smo104855v0ar.push(smo104840);
const smo104841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo104841.setAttribute('id', 'smo104841');
smo104855v0ar.push(smo104841);
smo104855v0.addTickables(smo104855v0ar)
fmtsmo10485517.joinVoices([smo104855v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106706 = smo101989.getStemDirection();
smo101989.setStemDirection(dirsmo106706);
smo101990.setStemDirection(dirsmo106706);
smo101991.setStemDirection(dirsmo106706);
smo101992.setStemDirection(dirsmo106706);
const smo106706 = new VF.Beam([smo101989,smo101990,smo101991,smo101992]);
const dirsmo106707 = smo101993.getStemDirection();
smo101993.setStemDirection(dirsmo106707);
smo101994.setStemDirection(dirsmo106707);
smo101995.setStemDirection(dirsmo106707);
smo101996.setStemDirection(dirsmo106707);
const smo106707 = new VF.Beam([smo101993,smo101994,smo101995,smo101996]);
const dirsmo106709 = smo104838.getStemDirection();
smo104838.setStemDirection(dirsmo106709);
smo104839.setStemDirection(dirsmo106709);
const smo106709 = new VF.Beam([smo104838,smo104839]);
const dirsmo106710 = smo104840.getStemDirection();
smo104840.setStemDirection(dirsmo106710);
smo104841.setStemDirection(dirsmo106710);
const smo106710 = new VF.Beam([smo104840,smo104841]);
 
// formatting measures in staff group smo100894
fmtsmo10201017.format([smo102010v0,smo104855v0], 281);
const stavesmo102010 = new VF.Stave(1548, 1132, 295);
stavesmo102010.setAttribute('id', 'stavesmo102010');
stavesmo102010.setBegBarType(VF.Barline.type.NONE);
stavesmo102010.setContext(context);
stavesmo102010.draw();
smo102010v0.draw(context, stavesmo102010);
smo106706.setContext(context);
smo106706.draw();
smo106707.setContext(context);
smo106707.draw();
const stavesmo104855 = new VF.Stave(1548, 1287, 295);
stavesmo104855.setAttribute('id', 'stavesmo104855');
stavesmo104855.setBegBarType(VF.Barline.type.NONE);
stavesmo104855.setContext(context);
stavesmo104855.draw();
smo104855v0.draw(context, stavesmo104855);
smo106709.setContext(context);
smo106709.draw();
smo106710.setContext(context);
smo106710.draw();
const rightsmo100894stavesmo1020101 = new VF.StaveConnector(stavesmo102010, stavesmo104855).setType(0);
rightsmo100894stavesmo1020101.setContext(context).draw();
const fmtsmo10203118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo102031v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102031v0ar = [];
const smo102011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102011.setAttribute('id', 'smo102011');
smo102031v0ar.push(smo102011);
const smo102012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102012.setAttribute('id', 'smo102012');
smo102031v0ar.push(smo102012);
const smo102013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102013.setAttribute('id', 'smo102013');
smo102031v0ar.push(smo102013);
const smo102014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102014.setAttribute('id', 'smo102014');
smo102031v0ar.push(smo102014);
const smo102015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo102015.setAttribute('id', 'smo102015');
smo102031v0ar.push(smo102015);
const smo102016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo102016.setAttribute('id', 'smo102016');
smo102031v0ar.push(smo102016);
const smo102017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo102017.setAttribute('id', 'smo102017');
smo102031v0ar.push(smo102017);
smo102031v0.addTickables(smo102031v0ar)
fmtsmo10203118.joinVoices([smo102031v0]);
const fmtsmo10487318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo104873v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104873v0ar = [];
const smo104856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104856.setAttribute('id', 'smo104856');
smo104873v0ar.push(smo104856);
const smo104857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104857.setAttribute('id', 'smo104857');
smo104873v0ar.push(smo104857);
const smo104858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104858.setAttribute('id', 'smo104858');
smo104873v0ar.push(smo104858);
const smo104859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo104859.setAttribute('id', 'smo104859');
smo104873v0ar.push(smo104859);
smo104873v0.addTickables(smo104873v0ar)
fmtsmo10487318.joinVoices([smo104873v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106722 = smo102011.getStemDirection();
smo102011.setStemDirection(dirsmo106722);
smo102012.setStemDirection(dirsmo106722);
smo102013.setStemDirection(dirsmo106722);
smo102014.setStemDirection(dirsmo106722);
const smo106722 = new VF.Beam([smo102011,smo102012,smo102013,smo102014]);
const dirsmo106723 = smo102015.getStemDirection();
smo102015.setStemDirection(dirsmo106723);
smo102016.setStemDirection(dirsmo106723);
smo102017.setStemDirection(dirsmo106723);
const smo106723 = new VF.Beam([smo102015,smo102016,smo102017]);
const dirsmo106725 = smo104856.getStemDirection();
smo104856.setStemDirection(dirsmo106725);
smo104857.setStemDirection(dirsmo106725);
const smo106725 = new VF.Beam([smo104856,smo104857]);
const dirsmo106726 = smo104858.getStemDirection();
smo104858.setStemDirection(dirsmo106726);
smo104859.setStemDirection(dirsmo106726);
const smo106726 = new VF.Beam([smo104858,smo104859]);
 
// formatting measures in staff group smo100894
fmtsmo10203118.format([smo102031v0,smo104873v0], 244);
const stavesmo102031 = new VF.Stave(73, 1481, 295);
stavesmo102031.setAttribute('id', 'stavesmo102031');
stavesmo102031.setBegBarType(1);
stavesmo102031.addClef('treble');
stavesmo102031.setContext(context);
stavesmo102031.draw();
smo102031v0.draw(context, stavesmo102031);
smo106722.setContext(context);
smo106722.draw();
smo106723.setContext(context);
smo106723.draw();
const stavesmo104873 = new VF.Stave(73, 1625, 295);
stavesmo104873.setAttribute('id', 'stavesmo104873');
stavesmo104873.setBegBarType(1);
stavesmo104873.addClef('bass');
stavesmo104873.setContext(context);
stavesmo104873.draw();
smo104873v0.draw(context, stavesmo104873);
smo106725.setContext(context);
smo106725.draw();
smo106726.setContext(context);
smo106726.draw();
const leftsmo100894stavesmo1020311 = new VF.StaveConnector(stavesmo102031, stavesmo104873).setType(3);
leftsmo100894stavesmo1020311.setContext(context).draw();
const fmtsmo10205019 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo102050v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102050v0ar = [];
const smo102032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102032.setAttribute('id', 'smo102032');
smo102050v0ar.push(smo102032);
const smo102033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102033.setAttribute('id', 'smo102033');
smo102050v0ar.push(smo102033);
const smo102034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo102034.setAttribute('id', 'smo102034');
smo102050v0ar.push(smo102034);
const smo102035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo102035.setAttribute('id', 'smo102035');
const smo1020350acc = new VF.Accidental('b');
smo102035.addModifier(smo1020350acc, 0);
smo102050v0ar.push(smo102035);
smo102050v0.addTickables(smo102050v0ar)
fmtsmo10205019.joinVoices([smo102050v0]);
const fmtsmo10489219 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo104892v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104892v0ar = [];
const smo104874 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo104874.setAttribute('id', 'smo104874');
smo104892v0ar.push(smo104874);
const smo104875 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104875.setAttribute('id', 'smo104875');
smo104892v0ar.push(smo104875);
const smo104876 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/2/n","an/3/n"]}'))
smo104876.setAttribute('id', 'smo104876');
smo104892v0ar.push(smo104876);
const smo104877 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo104877.setAttribute('id', 'smo104877');
smo104892v0ar.push(smo104877);
smo104892v0.addTickables(smo104892v0ar)
fmtsmo10489219.joinVoices([smo104892v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106730 = smo102033.getStemDirection();
smo102033.setStemDirection(dirsmo106730);
smo102034.setStemDirection(dirsmo106730);
smo102035.setStemDirection(dirsmo106730);
const smo106730 = new VF.Beam([smo102033,smo102034,smo102035]);
const dirsmo106731 = smo104874.getStemDirection();
smo104874.setStemDirection(dirsmo106731);
smo104875.setStemDirection(dirsmo106731);
const smo106731 = new VF.Beam([smo104874,smo104875]);
const dirsmo106732 = smo104876.getStemDirection();
smo104876.setStemDirection(dirsmo106732);
smo104877.setStemDirection(dirsmo106732);
const smo106732 = new VF.Beam([smo104876,smo104877]);
 
// formatting measures in staff group smo100894
fmtsmo10205019.format([smo102050v0,smo104892v0], 277);
const stavesmo102050 = new VF.Stave(368, 1481, 295);
stavesmo102050.setAttribute('id', 'stavesmo102050');
stavesmo102050.setBegBarType(VF.Barline.type.NONE);
stavesmo102050.setEndBarType(5);
stavesmo102050.setContext(context);
stavesmo102050.draw();
smo102050v0.draw(context, stavesmo102050);
smo106730.setContext(context);
smo106730.draw();
const stavesmo104892 = new VF.Stave(368, 1625, 295);
stavesmo104892.setAttribute('id', 'stavesmo104892');
stavesmo104892.setBegBarType(VF.Barline.type.NONE);
stavesmo104892.setEndBarType(5);
stavesmo104892.setContext(context);
stavesmo104892.draw();
smo104892v0.draw(context, stavesmo104892);
smo106731.setContext(context);
smo106731.draw();
smo106732.setContext(context);
smo106732.draw();
const fmtsmo10207020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo102070v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102070v0ar = [];
const smo102051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102051.setAttribute('id', 'smo102051');
smo102070v0ar.push(smo102051);
const smo102052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo102052.setAttribute('id', 'smo102052');
smo102070v0ar.push(smo102052);
const smo102053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo102053.setAttribute('id', 'smo102053');
smo102070v0ar.push(smo102053);
const smo102054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo102054.setAttribute('id', 'smo102054');
smo102070v0ar.push(smo102054);
const smo102055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo102055.setAttribute('id', 'smo102055');
const smo1020550acc = new VF.Accidental('b');
smo102055.addModifier(smo1020550acc, 0);
const smo1020551acc = new VF.Accidental('b');
smo102055.addModifier(smo1020551acc, 1);
const smo1020552acc = new VF.Accidental('b');
smo102055.addModifier(smo1020552acc, 2);
smo102070v0ar.push(smo102055);
smo102070v0.addTickables(smo102070v0ar)
fmtsmo10207020.joinVoices([smo102070v0]);
const fmtsmo10491120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo104911v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104911v0ar = [];
const smo104893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo104893.setAttribute('id', 'smo104893');
smo104911v0ar.push(smo104893);
const smo104894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo104894.setAttribute('id', 'smo104894');
smo104911v0ar.push(smo104894);
const smo104895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104895.setAttribute('id', 'smo104895');
smo104911v0ar.push(smo104895);
const smo104896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo104896.setAttribute('id', 'smo104896');
smo104911v0ar.push(smo104896);
smo104911v0.addTickables(smo104911v0ar)
fmtsmo10491120.joinVoices([smo104911v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106735 = smo102052.getStemDirection();
smo102052.setStemDirection(dirsmo106735);
smo102053.setStemDirection(dirsmo106735);
smo102054.setStemDirection(dirsmo106735);
smo102055.setStemDirection(dirsmo106735);
const smo106735 = new VF.Beam([smo102052,smo102053,smo102054,smo102055]);
const dirsmo106737 = smo104893.getStemDirection();
smo104893.setStemDirection(dirsmo106737);
smo104894.setStemDirection(dirsmo106737);
const smo106737 = new VF.Beam([smo104893,smo104894]);
 
// formatting measures in staff group smo100894
fmtsmo10207020.format([smo102070v0,smo104911v0], 281);
const stavesmo102070 = new VF.Stave(663, 1481, 295);
stavesmo102070.setAttribute('id', 'stavesmo102070');
stavesmo102070.setBegBarType(VF.Barline.type.NONE);
stavesmo102070.setContext(context);
stavesmo102070.draw();
smo102070v0.draw(context, stavesmo102070);
smo106735.setContext(context);
smo106735.draw();
const stavesmo104911 = new VF.Stave(663, 1625, 295);
stavesmo104911.setAttribute('id', 'stavesmo104911');
stavesmo104911.setBegBarType(VF.Barline.type.NONE);
stavesmo104911.setContext(context);
stavesmo104911.draw();
smo104911v0.draw(context, stavesmo104911);
smo106737.setContext(context);
smo106737.draw();
const fmtsmo10209121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo102091v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102091v0ar = [];
const smo102071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102071.setAttribute('id', 'smo102071');
smo102091v0ar.push(smo102071);
const smo102072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo102072.setAttribute('id', 'smo102072');
smo102091v0ar.push(smo102072);
const smo102073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102073.setAttribute('id', 'smo102073');
smo102091v0ar.push(smo102073);
const smo102074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102074.setAttribute('id', 'smo102074');
smo102091v0ar.push(smo102074);
const smo102075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo102075.setAttribute('id', 'smo102075');
smo102091v0ar.push(smo102075);
const smo102076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo102076.setAttribute('id', 'smo102076');
smo102091v0ar.push(smo102076);
const smo102077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo102077.setAttribute('id', 'smo102077');
const smo1020770acc = new VF.Accidental('b');
smo102077.addModifier(smo1020770acc, 0);
const smo1020771acc = new VF.Accidental('b');
smo102077.addModifier(smo1020771acc, 1);
const smo1020772acc = new VF.Accidental('b');
smo102077.addModifier(smo1020772acc, 2);
smo102091v0ar.push(smo102077);
smo102091v0.addTickables(smo102091v0ar)
fmtsmo10209121.joinVoices([smo102091v0]);
const fmtsmo10492921 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo104929v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104929v0ar = [];
const smo104912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo104912.setAttribute('id', 'smo104912');
smo104929v0ar.push(smo104912);
const smo104913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104913.setAttribute('id', 'smo104913');
smo104929v0ar.push(smo104913);
const smo104914 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104914.setAttribute('id', 'smo104914');
smo104929v0ar.push(smo104914);
const smo104915 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104915.setAttribute('id', 'smo104915');
smo104929v0ar.push(smo104915);
smo104929v0.addTickables(smo104929v0ar)
fmtsmo10492921.joinVoices([smo104929v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106739 = smo102071.getStemDirection();
smo102071.setStemDirection(dirsmo106739);
smo102072.setStemDirection(dirsmo106739);
smo102073.setStemDirection(dirsmo106739);
const smo106739 = new VF.Beam([smo102071,smo102072,smo102073]);
const dirsmo106740 = smo102074.getStemDirection();
smo102074.setStemDirection(dirsmo106740);
smo102075.setStemDirection(dirsmo106740);
smo102076.setStemDirection(dirsmo106740);
smo102077.setStemDirection(dirsmo106740);
const smo106740 = new VF.Beam([smo102074,smo102075,smo102076,smo102077]);
const dirsmo106742 = smo104912.getStemDirection();
smo104912.setStemDirection(dirsmo106742);
smo104913.setStemDirection(dirsmo106742);
const smo106742 = new VF.Beam([smo104912,smo104913]);
const dirsmo106743 = smo104914.getStemDirection();
smo104914.setStemDirection(dirsmo106743);
smo104915.setStemDirection(dirsmo106743);
const smo106743 = new VF.Beam([smo104914,smo104915]);
 
// formatting measures in staff group smo100894
fmtsmo10209121.format([smo102091v0,smo104929v0], 272);
const stavesmo102091 = new VF.Stave(958, 1481, 295);
stavesmo102091.setAttribute('id', 'stavesmo102091');
stavesmo102091.setBegBarType(4);
stavesmo102091.setContext(context);
stavesmo102091.draw();
smo102091v0.draw(context, stavesmo102091);
smo106739.setContext(context);
smo106739.draw();
smo106740.setContext(context);
smo106740.draw();
const stavesmo104929 = new VF.Stave(958, 1625, 295);
stavesmo104929.setAttribute('id', 'stavesmo104929');
stavesmo104929.setBegBarType(4);
stavesmo104929.setContext(context);
stavesmo104929.draw();
smo104929v0.draw(context, stavesmo104929);
smo106742.setContext(context);
smo106742.draw();
smo106743.setContext(context);
smo106743.draw();
const fmtsmo10211222 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo102112v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102112v0ar = [];
const smo102092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102092.setAttribute('id', 'smo102092');
smo102112v0ar.push(smo102092);
const smo102093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo102093.setAttribute('id', 'smo102093');
smo102112v0ar.push(smo102093);
const smo102094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102094.setAttribute('id', 'smo102094');
smo102112v0ar.push(smo102094);
const smo102095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102095.setAttribute('id', 'smo102095');
smo102112v0ar.push(smo102095);
const smo102096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102096.setAttribute('id', 'smo102096');
smo102112v0ar.push(smo102096);
const smo102097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102097.setAttribute('id', 'smo102097');
smo102112v0ar.push(smo102097);
const smo102098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102098.setAttribute('id', 'smo102098');
smo102112v0ar.push(smo102098);
smo102112v0.addTickables(smo102112v0ar)
fmtsmo10211222.joinVoices([smo102112v0]);
const fmtsmo10494722 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo104947v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104947v0ar = [];
const smo104930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104930.setAttribute('id', 'smo104930');
smo104947v0ar.push(smo104930);
const smo104931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104931.setAttribute('id', 'smo104931');
smo104947v0ar.push(smo104931);
const smo104932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104932.setAttribute('id', 'smo104932');
smo104947v0ar.push(smo104932);
const smo104933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104933.setAttribute('id', 'smo104933');
smo104947v0ar.push(smo104933);
smo104947v0.addTickables(smo104947v0ar)
fmtsmo10494722.joinVoices([smo104947v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106747 = smo102092.getStemDirection();
smo102092.setStemDirection(dirsmo106747);
smo102093.setStemDirection(dirsmo106747);
smo102094.setStemDirection(dirsmo106747);
const smo106747 = new VF.Beam([smo102092,smo102093,smo102094]);
const dirsmo106748 = smo102095.getStemDirection();
smo102095.setStemDirection(dirsmo106748);
smo102096.setStemDirection(dirsmo106748);
smo102097.setStemDirection(dirsmo106748);
smo102098.setStemDirection(dirsmo106748);
const smo106748 = new VF.Beam([smo102095,smo102096,smo102097,smo102098]);
const dirsmo106750 = smo104930.getStemDirection();
smo104930.setStemDirection(dirsmo106750);
smo104931.setStemDirection(dirsmo106750);
const smo106750 = new VF.Beam([smo104930,smo104931]);
const dirsmo106751 = smo104932.getStemDirection();
smo104932.setStemDirection(dirsmo106751);
smo104933.setStemDirection(dirsmo106751);
const smo106751 = new VF.Beam([smo104932,smo104933]);
 
// formatting measures in staff group smo100894
fmtsmo10211222.format([smo102112v0,smo104947v0], 281);
const stavesmo102112 = new VF.Stave(1253, 1481, 295);
stavesmo102112.setAttribute('id', 'stavesmo102112');
stavesmo102112.setBegBarType(VF.Barline.type.NONE);
stavesmo102112.setContext(context);
stavesmo102112.draw();
smo102112v0.draw(context, stavesmo102112);
smo106747.setContext(context);
smo106747.draw();
smo106748.setContext(context);
smo106748.draw();
const stavesmo104947 = new VF.Stave(1253, 1625, 295);
stavesmo104947.setAttribute('id', 'stavesmo104947');
stavesmo104947.setBegBarType(VF.Barline.type.NONE);
stavesmo104947.setContext(context);
stavesmo104947.draw();
smo104947v0.draw(context, stavesmo104947);
smo106750.setContext(context);
smo106750.draw();
smo106751.setContext(context);
smo106751.draw();
const fmtsmo10213423 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo102134v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102134v0ar = [];
const smo102113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo102113.setAttribute('id', 'smo102113');
smo102134v0ar.push(smo102113);
const smo102114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo102114.setAttribute('id', 'smo102114');
smo102134v0ar.push(smo102114);
const smo102115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102115.setAttribute('id', 'smo102115');
smo102134v0ar.push(smo102115);
const smo102116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102116.setAttribute('id', 'smo102116');
smo102134v0ar.push(smo102116);
const smo102117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102117.setAttribute('id', 'smo102117');
smo102134v0ar.push(smo102117);
const smo102118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102118.setAttribute('id', 'smo102118');
smo102134v0ar.push(smo102118);
const smo102119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo102119.setAttribute('id', 'smo102119');
smo102134v0ar.push(smo102119);
const smo102120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102120.setAttribute('id', 'smo102120');
smo102134v0ar.push(smo102120);
smo102134v0.addTickables(smo102134v0ar)
fmtsmo10213423.joinVoices([smo102134v0]);
const fmtsmo10496523 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo104965v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104965v0ar = [];
const smo104948 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo104948.setAttribute('id', 'smo104948');
smo104965v0ar.push(smo104948);
const smo104949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo104949.setAttribute('id', 'smo104949');
smo104965v0ar.push(smo104949);
const smo104950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo104950.setAttribute('id', 'smo104950');
smo104965v0ar.push(smo104950);
const smo104951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo104951.setAttribute('id', 'smo104951');
const smo1049510acc = new VF.Accidental('b');
smo104951.addModifier(smo1049510acc, 0);
smo104965v0ar.push(smo104951);
smo104965v0.addTickables(smo104965v0ar)
fmtsmo10496523.joinVoices([smo104965v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106755 = smo102113.getStemDirection();
smo102113.setStemDirection(dirsmo106755);
smo102114.setStemDirection(dirsmo106755);
smo102115.setStemDirection(dirsmo106755);
smo102116.setStemDirection(dirsmo106755);
const smo106755 = new VF.Beam([smo102113,smo102114,smo102115,smo102116]);
const dirsmo106756 = smo102117.getStemDirection();
smo102117.setStemDirection(dirsmo106756);
smo102118.setStemDirection(dirsmo106756);
smo102119.setStemDirection(dirsmo106756);
smo102120.setStemDirection(dirsmo106756);
const smo106756 = new VF.Beam([smo102117,smo102118,smo102119,smo102120]);
const dirsmo106758 = smo104948.getStemDirection();
smo104948.setStemDirection(dirsmo106758);
smo104949.setStemDirection(dirsmo106758);
const smo106758 = new VF.Beam([smo104948,smo104949]);
const dirsmo106759 = smo104950.getStemDirection();
smo104950.setStemDirection(dirsmo106759);
smo104951.setStemDirection(dirsmo106759);
const smo106759 = new VF.Beam([smo104950,smo104951]);
 
// formatting measures in staff group smo100894
fmtsmo10213423.format([smo102134v0,smo104965v0], 281);
const stavesmo102134 = new VF.Stave(1548, 1481, 295);
stavesmo102134.setAttribute('id', 'stavesmo102134');
stavesmo102134.setBegBarType(VF.Barline.type.NONE);
stavesmo102134.setContext(context);
stavesmo102134.draw();
smo102134v0.draw(context, stavesmo102134);
smo106755.setContext(context);
smo106755.draw();
smo106756.setContext(context);
smo106756.draw();
const stavesmo104965 = new VF.Stave(1548, 1625, 295);
stavesmo104965.setAttribute('id', 'stavesmo104965');
stavesmo104965.setBegBarType(VF.Barline.type.NONE);
stavesmo104965.setContext(context);
stavesmo104965.draw();
smo104965v0.draw(context, stavesmo104965);
smo106758.setContext(context);
smo106758.draw();
smo106759.setContext(context);
smo106759.draw();
const rightsmo100894stavesmo1021341 = new VF.StaveConnector(stavesmo102134, stavesmo104965).setType(0);
rightsmo100894stavesmo1021341.setContext(context).draw();
const fmtsmo10215624 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo102156v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102156v0ar = [];
const smo102135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo102135.setAttribute('id', 'smo102135');
smo102156v0ar.push(smo102135);
const smo102136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102136.setAttribute('id', 'smo102136');
smo102156v0ar.push(smo102136);
const smo102137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo102137.setAttribute('id', 'smo102137');
smo102156v0ar.push(smo102137);
const smo102138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102138.setAttribute('id', 'smo102138');
smo102156v0ar.push(smo102138);
const smo102139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102139.setAttribute('id', 'smo102139');
smo102156v0ar.push(smo102139);
const smo102140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102140.setAttribute('id', 'smo102140');
smo102156v0ar.push(smo102140);
const smo102141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo102141.setAttribute('id', 'smo102141');
smo102156v0ar.push(smo102141);
const smo102142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo102142.setAttribute('id', 'smo102142');
smo102156v0ar.push(smo102142);
smo102156v0.addTickables(smo102156v0ar)
fmtsmo10215624.joinVoices([smo102156v0]);
const fmtsmo10498324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo104983v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo104983v0ar = [];
const smo104966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo104966.setAttribute('id', 'smo104966');
smo104983v0ar.push(smo104966);
const smo104967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104967.setAttribute('id', 'smo104967');
smo104983v0ar.push(smo104967);
const smo104968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104968.setAttribute('id', 'smo104968');
smo104983v0ar.push(smo104968);
const smo104969 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104969.setAttribute('id', 'smo104969');
smo104983v0ar.push(smo104969);
smo104983v0.addTickables(smo104983v0ar)
fmtsmo10498324.joinVoices([smo104983v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106771 = smo102135.getStemDirection();
smo102135.setStemDirection(dirsmo106771);
smo102136.setStemDirection(dirsmo106771);
smo102137.setStemDirection(dirsmo106771);
smo102138.setStemDirection(dirsmo106771);
const smo106771 = new VF.Beam([smo102135,smo102136,smo102137,smo102138]);
const dirsmo106772 = smo102139.getStemDirection();
smo102139.setStemDirection(dirsmo106772);
smo102140.setStemDirection(dirsmo106772);
smo102141.setStemDirection(dirsmo106772);
smo102142.setStemDirection(dirsmo106772);
const smo106772 = new VF.Beam([smo102139,smo102140,smo102141,smo102142]);
const dirsmo106774 = smo104966.getStemDirection();
smo104966.setStemDirection(dirsmo106774);
smo104967.setStemDirection(dirsmo106774);
const smo106774 = new VF.Beam([smo104966,smo104967]);
const dirsmo106775 = smo104968.getStemDirection();
smo104968.setStemDirection(dirsmo106775);
smo104969.setStemDirection(dirsmo106775);
const smo106775 = new VF.Beam([smo104968,smo104969]);
 
// formatting measures in staff group smo100894
fmtsmo10215624.format([smo102156v0,smo104983v0], 244);
const stavesmo102156 = new VF.Stave(73, 1828, 295);
stavesmo102156.setAttribute('id', 'stavesmo102156');
stavesmo102156.setBegBarType(1);
stavesmo102156.addClef('treble');
stavesmo102156.setContext(context);
stavesmo102156.draw();
smo102156v0.draw(context, stavesmo102156);
smo106771.setContext(context);
smo106771.draw();
smo106772.setContext(context);
smo106772.draw();
const stavesmo104983 = new VF.Stave(73, 1988, 295);
stavesmo104983.setAttribute('id', 'stavesmo104983');
stavesmo104983.setBegBarType(1);
stavesmo104983.addClef('bass');
stavesmo104983.setContext(context);
stavesmo104983.draw();
smo104983v0.draw(context, stavesmo104983);
smo106774.setContext(context);
smo106774.draw();
smo106775.setContext(context);
smo106775.draw();
const leftsmo100894stavesmo1021561 = new VF.StaveConnector(stavesmo102156, stavesmo104983).setType(3);
leftsmo100894stavesmo1021561.setContext(context).draw();
const fmtsmo10217725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo102177v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102177v0ar = [];
const smo102157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102157.setAttribute('id', 'smo102157');
smo102177v0ar.push(smo102157);
const smo102158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo102158.setAttribute('id', 'smo102158');
smo102177v0ar.push(smo102158);
const smo102159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102159.setAttribute('id', 'smo102159');
smo102177v0ar.push(smo102159);
const smo102160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102160.setAttribute('id', 'smo102160');
smo102177v0ar.push(smo102160);
const smo102161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo102161.setAttribute('id', 'smo102161');
smo102177v0ar.push(smo102161);
const smo102162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo102162.setAttribute('id', 'smo102162');
smo102177v0ar.push(smo102162);
const smo102163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo102163.setAttribute('id', 'smo102163');
const smo1021630acc = new VF.Accidental('b');
smo102163.addModifier(smo1021630acc, 0);
const smo1021631acc = new VF.Accidental('b');
smo102163.addModifier(smo1021631acc, 1);
const smo1021632acc = new VF.Accidental('b');
smo102163.addModifier(smo1021632acc, 2);
smo102177v0ar.push(smo102163);
smo102177v0.addTickables(smo102177v0ar)
fmtsmo10217725.joinVoices([smo102177v0]);
const fmtsmo10500125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo105001v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105001v0ar = [];
const smo104984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo104984.setAttribute('id', 'smo104984');
smo105001v0ar.push(smo104984);
const smo104985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104985.setAttribute('id', 'smo104985');
smo105001v0ar.push(smo104985);
const smo104986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo104986.setAttribute('id', 'smo104986');
smo105001v0ar.push(smo104986);
const smo104987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo104987.setAttribute('id', 'smo104987');
smo105001v0ar.push(smo104987);
smo105001v0.addTickables(smo105001v0ar)
fmtsmo10500125.joinVoices([smo105001v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106779 = smo102157.getStemDirection();
smo102157.setStemDirection(dirsmo106779);
smo102158.setStemDirection(dirsmo106779);
smo102159.setStemDirection(dirsmo106779);
const smo106779 = new VF.Beam([smo102157,smo102158,smo102159]);
const dirsmo106780 = smo102160.getStemDirection();
smo102160.setStemDirection(dirsmo106780);
smo102161.setStemDirection(dirsmo106780);
smo102162.setStemDirection(dirsmo106780);
smo102163.setStemDirection(dirsmo106780);
const smo106780 = new VF.Beam([smo102160,smo102161,smo102162,smo102163]);
const dirsmo106782 = smo104984.getStemDirection();
smo104984.setStemDirection(dirsmo106782);
smo104985.setStemDirection(dirsmo106782);
const smo106782 = new VF.Beam([smo104984,smo104985]);
const dirsmo106783 = smo104986.getStemDirection();
smo104986.setStemDirection(dirsmo106783);
smo104987.setStemDirection(dirsmo106783);
const smo106783 = new VF.Beam([smo104986,smo104987]);
 
// formatting measures in staff group smo100894
fmtsmo10217725.format([smo102177v0,smo105001v0], 281);
const stavesmo102177 = new VF.Stave(368, 1828, 295);
stavesmo102177.setAttribute('id', 'stavesmo102177');
stavesmo102177.setBegBarType(VF.Barline.type.NONE);
stavesmo102177.setContext(context);
stavesmo102177.draw();
smo102177v0.draw(context, stavesmo102177);
smo106779.setContext(context);
smo106779.draw();
smo106780.setContext(context);
smo106780.draw();
const stavesmo105001 = new VF.Stave(368, 1988, 295);
stavesmo105001.setAttribute('id', 'stavesmo105001');
stavesmo105001.setBegBarType(VF.Barline.type.NONE);
stavesmo105001.setContext(context);
stavesmo105001.draw();
smo105001v0.draw(context, stavesmo105001);
smo106782.setContext(context);
smo106782.draw();
smo106783.setContext(context);
smo106783.draw();
const fmtsmo10219826 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo102198v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102198v0ar = [];
const smo102178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102178.setAttribute('id', 'smo102178');
smo102198v0ar.push(smo102178);
const smo102179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo102179.setAttribute('id', 'smo102179');
smo102198v0ar.push(smo102179);
const smo102180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102180.setAttribute('id', 'smo102180');
smo102198v0ar.push(smo102180);
const smo102181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102181.setAttribute('id', 'smo102181');
smo102198v0ar.push(smo102181);
const smo102182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo102182.setAttribute('id', 'smo102182');
smo102198v0ar.push(smo102182);
const smo102183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102183.setAttribute('id', 'smo102183');
smo102198v0ar.push(smo102183);
const smo102184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo102184.setAttribute('id', 'smo102184');
const smo1021840acc = new VF.Accidental('b');
smo102184.addModifier(smo1021840acc, 0);
smo102198v0ar.push(smo102184);
smo102198v0.addTickables(smo102198v0ar)
fmtsmo10219826.joinVoices([smo102198v0]);
const fmtsmo10501926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo105019v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105019v0ar = [];
const smo105002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo105002.setAttribute('id', 'smo105002');
smo105019v0ar.push(smo105002);
const smo105003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105003.setAttribute('id', 'smo105003');
smo105019v0ar.push(smo105003);
const smo105004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo105004.setAttribute('id', 'smo105004');
smo105019v0ar.push(smo105004);
const smo105005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/3/n"]}'))
smo105005.setAttribute('id', 'smo105005');
const smo1050050acc = new VF.Accidental('b');
smo105005.addModifier(smo1050050acc, 0);
smo105019v0ar.push(smo105005);
smo105019v0.addTickables(smo105019v0ar)
fmtsmo10501926.joinVoices([smo105019v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106787 = smo102178.getStemDirection();
smo102178.setStemDirection(dirsmo106787);
smo102179.setStemDirection(dirsmo106787);
smo102180.setStemDirection(dirsmo106787);
const smo106787 = new VF.Beam([smo102178,smo102179,smo102180]);
const dirsmo106788 = smo102181.getStemDirection();
smo102181.setStemDirection(dirsmo106788);
smo102182.setStemDirection(dirsmo106788);
smo102183.setStemDirection(dirsmo106788);
smo102184.setStemDirection(dirsmo106788);
const smo106788 = new VF.Beam([smo102181,smo102182,smo102183,smo102184]);
const dirsmo106790 = smo105002.getStemDirection();
smo105002.setStemDirection(dirsmo106790);
smo105003.setStemDirection(dirsmo106790);
const smo106790 = new VF.Beam([smo105002,smo105003]);
const dirsmo106791 = smo105004.getStemDirection();
smo105004.setStemDirection(dirsmo106791);
smo105005.setStemDirection(dirsmo106791);
const smo106791 = new VF.Beam([smo105004,smo105005]);
 
// formatting measures in staff group smo100894
fmtsmo10219826.format([smo102198v0,smo105019v0], 281);
const stavesmo102198 = new VF.Stave(663, 1828, 295);
stavesmo102198.setAttribute('id', 'stavesmo102198');
stavesmo102198.setBegBarType(VF.Barline.type.NONE);
stavesmo102198.setContext(context);
stavesmo102198.draw();
smo102198v0.draw(context, stavesmo102198);
smo106787.setContext(context);
smo106787.draw();
smo106788.setContext(context);
smo106788.draw();
const stavesmo105019 = new VF.Stave(663, 1988, 295);
stavesmo105019.setAttribute('id', 'stavesmo105019');
stavesmo105019.setBegBarType(VF.Barline.type.NONE);
stavesmo105019.setContext(context);
stavesmo105019.draw();
smo105019v0.draw(context, stavesmo105019);
smo106790.setContext(context);
smo106790.draw();
smo106791.setContext(context);
smo106791.draw();
const fmtsmo10221927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo102219v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102219v0ar = [];
const smo102199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo102199.setAttribute('id', 'smo102199');
smo102219v0ar.push(smo102199);
const smo102200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo102200.setAttribute('id', 'smo102200');
smo102219v0ar.push(smo102200);
const smo102201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo102201.setAttribute('id', 'smo102201');
const smo1022011acc = new VF.Accidental('b');
smo102201.addModifier(smo1022011acc, 1);
smo102219v0ar.push(smo102201);
const smo102202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo102202.setAttribute('id', 'smo102202');
smo102219v0ar.push(smo102202);
const smo102203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo102203.setAttribute('id', 'smo102203');
smo102219v0ar.push(smo102203);
const smo102204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo102204.setAttribute('id', 'smo102204');
smo102219v0ar.push(smo102204);
const smo102205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo102205.setAttribute('id', 'smo102205');
smo102219v0ar.push(smo102205);
smo102219v0.addTickables(smo102219v0ar)
fmtsmo10221927.joinVoices([smo102219v0]);
const fmtsmo10503727 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo105037v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105037v0ar = [];
const smo105020 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105020.setAttribute('id', 'smo105020');
smo105037v0ar.push(smo105020);
const smo105021 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo105021.setAttribute('id', 'smo105021');
smo105037v0ar.push(smo105021);
const smo105022 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo105022.setAttribute('id', 'smo105022');
smo105037v0ar.push(smo105022);
const smo105023 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
smo105023.setAttribute('id', 'smo105023');
smo105037v0ar.push(smo105023);
smo105037v0.addTickables(smo105037v0ar)
fmtsmo10503727.joinVoices([smo105037v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106795 = smo102199.getStemDirection();
smo102199.setStemDirection(dirsmo106795);
smo102200.setStemDirection(dirsmo106795);
smo102201.setStemDirection(dirsmo106795);
const smo106795 = new VF.Beam([smo102199,smo102200,smo102201]);
const dirsmo106796 = smo102202.getStemDirection();
smo102202.setStemDirection(dirsmo106796);
smo102203.setStemDirection(dirsmo106796);
smo102204.setStemDirection(dirsmo106796);
smo102205.setStemDirection(dirsmo106796);
const smo106796 = new VF.Beam([smo102202,smo102203,smo102204,smo102205]);
const dirsmo106798 = smo105020.getStemDirection();
smo105020.setStemDirection(dirsmo106798);
smo105021.setStemDirection(dirsmo106798);
const smo106798 = new VF.Beam([smo105020,smo105021]);
const dirsmo106799 = smo105022.getStemDirection();
smo105022.setStemDirection(dirsmo106799);
smo105023.setStemDirection(dirsmo106799);
const smo106799 = new VF.Beam([smo105022,smo105023]);
 
// formatting measures in staff group smo100894
fmtsmo10221927.format([smo102219v0,smo105037v0], 281);
const stavesmo102219 = new VF.Stave(958, 1828, 295);
stavesmo102219.setAttribute('id', 'stavesmo102219');
stavesmo102219.setBegBarType(VF.Barline.type.NONE);
stavesmo102219.setContext(context);
stavesmo102219.draw();
smo102219v0.draw(context, stavesmo102219);
smo106795.setContext(context);
smo106795.draw();
smo106796.setContext(context);
smo106796.draw();
const stavesmo105037 = new VF.Stave(958, 1988, 295);
stavesmo105037.setAttribute('id', 'stavesmo105037');
stavesmo105037.setBegBarType(VF.Barline.type.NONE);
stavesmo105037.setContext(context);
stavesmo105037.draw();
smo105037v0.draw(context, stavesmo105037);
smo106798.setContext(context);
smo106798.draw();
smo106799.setContext(context);
smo106799.draw();
const fmtsmo10223828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo102238v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102238v0ar = [];
const smo102220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo102220.setAttribute('id', 'smo102220');
smo102238v0ar.push(smo102220);
const smo102221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo102221.setAttribute('id', 'smo102221');
smo102238v0ar.push(smo102221);
const smo102222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo102222.setAttribute('id', 'smo102222');
smo102238v0ar.push(smo102222);
const smo102223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo102223.setAttribute('id', 'smo102223');
smo102238v0ar.push(smo102223);
const smo102224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo102224.setAttribute('id', 'smo102224');
const smo1022240acc = new VF.Accidental('b');
smo102224.addModifier(smo1022240acc, 0);
const smo1022241acc = new VF.Accidental('b');
smo102224.addModifier(smo1022241acc, 1);
const smo1022242acc = new VF.Accidental('b');
smo102224.addModifier(smo1022242acc, 2);
smo102238v0ar.push(smo102224);
smo102238v0.addTickables(smo102238v0ar)
fmtsmo10223828.joinVoices([smo102238v0]);
const fmtsmo10505528 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo105055v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105055v0ar = [];
const smo105038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo105038.setAttribute('id', 'smo105038');
smo105055v0ar.push(smo105038);
const smo105039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo105039.setAttribute('id', 'smo105039');
smo105055v0ar.push(smo105039);
const smo105040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/2/n","en/3/n"]}'))
smo105040.setAttribute('id', 'smo105040');
smo105055v0ar.push(smo105040);
const smo105041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo105041.setAttribute('id', 'smo105041');
smo105055v0ar.push(smo105041);
smo105055v0.addTickables(smo105055v0ar)
fmtsmo10505528.joinVoices([smo105055v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106803 = smo102221.getStemDirection();
smo102221.setStemDirection(dirsmo106803);
smo102222.setStemDirection(dirsmo106803);
smo102223.setStemDirection(dirsmo106803);
smo102224.setStemDirection(dirsmo106803);
const smo106803 = new VF.Beam([smo102221,smo102222,smo102223,smo102224]);
const dirsmo106805 = smo105038.getStemDirection();
smo105038.setStemDirection(dirsmo106805);
smo105039.setStemDirection(dirsmo106805);
const smo106805 = new VF.Beam([smo105038,smo105039]);
const dirsmo106806 = smo105040.getStemDirection();
smo105040.setStemDirection(dirsmo106806);
smo105041.setStemDirection(dirsmo106806);
const smo106806 = new VF.Beam([smo105040,smo105041]);
 
// formatting measures in staff group smo100894
fmtsmo10223828.format([smo102238v0,smo105055v0], 281);
const stavesmo102238 = new VF.Stave(1253, 1828, 295);
stavesmo102238.setAttribute('id', 'stavesmo102238');
stavesmo102238.setBegBarType(VF.Barline.type.NONE);
stavesmo102238.setContext(context);
stavesmo102238.draw();
smo102238v0.draw(context, stavesmo102238);
smo106803.setContext(context);
smo106803.draw();
const stavesmo105055 = new VF.Stave(1253, 1988, 295);
stavesmo105055.setAttribute('id', 'stavesmo105055');
stavesmo105055.setBegBarType(VF.Barline.type.NONE);
stavesmo105055.setContext(context);
stavesmo105055.draw();
smo105055v0.draw(context, stavesmo105055);
smo106805.setContext(context);
smo106805.draw();
smo106806.setContext(context);
smo106806.draw();
const fmtsmo10226029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo102260v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102260v0ar = [];
const smo102239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102239.setAttribute('id', 'smo102239');
smo102260v0ar.push(smo102239);
const smo102241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo102241.setAttribute('id', 'smo102241');
smo102260v0ar.push(smo102241);
const smo102242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102242.setAttribute('id', 'smo102242');
smo102260v0ar.push(smo102242);
const smo102243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo102243.setAttribute('id', 'smo102243');
smo102260v0ar.push(smo102243);
const smo102244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo102244.setAttribute('id', 'smo102244');
smo102260v0ar.push(smo102244);
const smo102245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo102245.setAttribute('id', 'smo102245');
smo102260v0ar.push(smo102245);
const smo102246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo102246.setAttribute('id', 'smo102246');
const smo1022460acc = new VF.Accidental('b');
smo102246.addModifier(smo1022460acc, 0);
const smo1022461acc = new VF.Accidental('b');
smo102246.addModifier(smo1022461acc, 1);
const smo1022462acc = new VF.Accidental('b');
smo102246.addModifier(smo1022462acc, 2);
smo102260v0ar.push(smo102246);
smo102260v0.addTickables(smo102260v0ar)
fmtsmo10226029.joinVoices([smo102260v0]);
const fmtsmo10507329 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo105073v0 = new VF.Voice(JSON.parse('{"numBeats":2,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105073v0ar = [];
const smo105056 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo105056.setAttribute('id', 'smo105056');
smo105073v0ar.push(smo105056);
const smo105057 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105057.setAttribute('id', 'smo105057');
smo105073v0ar.push(smo105057);
const smo105058 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo105058.setAttribute('id', 'smo105058');
smo105073v0ar.push(smo105058);
const smo105059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo105059.setAttribute('id', 'smo105059');
smo105073v0ar.push(smo105059);
smo105073v0.addTickables(smo105073v0ar)
fmtsmo10507329.joinVoices([smo105073v0]);
// create beam groups and tuplets for format grp smo100894 before formatting
const dirsmo106810 = smo102239.getStemDirection();
smo102239.setStemDirection(dirsmo106810);
smo102241.setStemDirection(dirsmo106810);
smo102242.setStemDirection(dirsmo106810);
const smo106810 = new VF.Beam([smo102239,smo102241,smo102242]);
const dirsmo106811 = smo102243.getStemDirection();
smo102243.setStemDirection(dirsmo106811);
smo102244.setStemDirection(dirsmo106811);
smo102245.setStemDirection(dirsmo106811);
smo102246.setStemDirection(dirsmo106811);
const smo106811 = new VF.Beam([smo102243,smo102244,smo102245,smo102246]);
const dirsmo106813 = smo105056.getStemDirection();
smo105056.setStemDirection(dirsmo106813);
smo105057.setStemDirection(dirsmo106813);
const smo106813 = new VF.Beam([smo105056,smo105057]);
const dirsmo106814 = smo105058.getStemDirection();
smo105058.setStemDirection(dirsmo106814);
smo105059.setStemDirection(dirsmo106814);
const smo106814 = new VF.Beam([smo105058,smo105059]);
 
// formatting measures in staff group smo100894
fmtsmo10226029.format([smo102260v0,smo105073v0], 281);
const stavesmo102260 = new VF.Stave(1548, 1828, 295);
stavesmo102260.setAttribute('id', 'stavesmo102260');
stavesmo102260.setBegBarType(VF.Barline.type.NONE);
stavesmo102260.setContext(context);
stavesmo102260.draw();
smo102260v0.draw(context, stavesmo102260);
smo106810.setContext(context);
smo106810.draw();
smo106811.setContext(context);
smo106811.draw();
const stavesmo105073 = new VF.Stave(1548, 1988, 295);
stavesmo105073.setAttribute('id', 'stavesmo105073');
stavesmo105073.setBegBarType(VF.Barline.type.NONE);
stavesmo105073.setContext(context);
stavesmo105073.draw();
smo105073v0.draw(context, stavesmo105073);
smo106813.setContext(context);
smo106813.draw();
smo106814.setContext(context);
smo106814.draw();
const rightsmo100894stavesmo1022601 = new VF.StaveConnector(stavesmo102260, stavesmo105073).setType(0);
rightsmo100894stavesmo1022601.setContext(context).draw();
// modifier from 0-5-0-2 to 0-5-0-4
const smo107828 = new VF.StaveHairpin({ first_note: smo101750, last_note: smo101750,
       firstNote: smo101750, lastNote: smo101750 });
smo107828.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107828.setContext(context).setPosition(4).draw();
// modifier from 0-7-0-2 to 0-8-0-0
const smo107829 = new VF.StaveHairpin({ first_note: smo101791, last_note: smo101791,
       firstNote: smo101791, lastNote: smo101791 });
smo107829.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107829.setContext(context).setPosition(4).draw();
// modifier from 0-9-0-2 to 0-10-0-0
const smo107830 = new VF.StaveHairpin({ first_note: smo101830, last_note: smo101830,
       firstNote: smo101830, lastNote: smo101830 });
smo107830.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107830.setContext(context).setPosition(4).draw();
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-13-0-2 to 0-13-0-4
const smo107833 = new VF.StaveHairpin({ first_note: smo101910, last_note: smo101910,
       firstNote: smo101910, lastNote: smo101910 });
smo107833.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107833.setContext(context).setPosition(4).draw();
// modifier from 0-19-0-2 to 0-20-0-0
const smo107834 = new VF.StaveHairpin({ first_note: smo102034, last_note: smo102034,
       firstNote: smo102034, lastNote: smo102034 });
smo107834.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo107834.setContext(context).setPosition(4).draw();
// modifier from 0-0-0-3 to 0-0-0-4
const smo107835 = new VF.StaveTie({ first_note: smo101641, last_note: smo101642, 
          firstNote: smo101641, lastNote: smo101642, first_indices: [0], last_indices: [0]});
smo107835.setContext(context).draw();
// modifier from 0-0-1-3 to 0-0-1-4
const smo107836 = new VF.StaveTie({ first_note: smo101648, last_note: smo101649, 
          firstNote: smo101648, lastNote: smo101649, first_indices: [0], last_indices: [0]});
smo107836.setContext(context).draw();
// modifier from 0-1-0-3 to 0-1-0-4
const smo107837 = new VF.StaveTie({ first_note: smo101669, last_note: smo101670, 
          firstNote: smo101669, lastNote: smo101670, first_indices: [0], last_indices: [0]});
smo107837.setContext(context).draw();
// modifier from 0-2-0-3 to 0-2-0-4
const smo107838 = new VF.StaveTie({ first_note: smo101690, last_note: smo101691, 
          firstNote: smo101690, lastNote: smo101691, first_indices: [0], last_indices: [0]});
smo107838.setContext(context).draw();
// modifier from 0-4-0-5 to 0-5-0-0
const smo107839 = new VF.StaveTie({ first_note: smo101733, last_note: smo101748, 
          firstNote: smo101733, lastNote: smo101748, first_indices: [0], last_indices: [0]});
smo107839.setContext(context).draw();
// modifier from 0-5-0-0 to 0-5-0-1
const smo107840 = new VF.StaveTie({ first_note: smo101748, last_note: smo101749, 
          firstNote: smo101748, lastNote: smo101749, first_indices: [0], last_indices: [0]});
smo107840.setContext(context).draw();
// modifier from 0-6-0-3 to 0-6-0-4
const smo107841 = new VF.StaveTie({ first_note: smo101771, last_note: smo101772, 
          firstNote: smo101771, lastNote: smo101772, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107841.setContext(context).draw();
// modifier from 0-7-0-0 to 0-7-0-1
const smo107842 = new VF.StaveTie({ first_note: smo101789, last_note: smo101790, 
          firstNote: smo101789, lastNote: smo101790, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107842.setContext(context).draw();
// modifier from 0-8-0-5 to 0-9-0-0
const smo107843 = new VF.StaveTie({ first_note: smo101813, last_note: smo101828, 
          firstNote: smo101813, lastNote: smo101828, first_indices: [0], last_indices: [0]});
smo107843.setContext(context).draw();
// modifier from 0-9-0-0 to 0-9-0-1
const smo107844 = new VF.StaveTie({ first_note: smo101828, last_note: smo101829, 
          firstNote: smo101828, lastNote: smo101829, first_indices: [0], last_indices: [0]});
smo107844.setContext(context).draw();
// modifier from 0-10-0-3 to 0-10-0-4
const smo107845 = new VF.StaveTie({ first_note: smo101850, last_note: smo101851, 
          firstNote: smo101850, lastNote: smo101851, first_indices: [0,1], last_indices: [0,1]});
smo107845.setContext(context).draw();
// modifier from 0-11-0-0 to 0-11-0-1
const smo107846 = new VF.StaveTie({ first_note: smo101869, last_note: smo101870, 
          firstNote: smo101869, lastNote: smo101870, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107846.setContext(context).draw();
// modifier from 0-12-0-5 to 0-13-0-0
const smo107847 = new VF.StaveTie({ first_note: smo101893, last_note: smo101908, 
          firstNote: smo101893, lastNote: smo101908, first_indices: [0], last_indices: [0]});
smo107847.setContext(context).draw();
// modifier from 0-13-0-0 to 0-13-0-1
const smo107848 = new VF.StaveTie({ first_note: smo101908, last_note: smo101909, 
          firstNote: smo101908, lastNote: smo101909, first_indices: [0], last_indices: [0]});
smo107848.setContext(context).draw();
// modifier from 0-14-0-3 to 0-14-0-4
const smo107849 = new VF.StaveTie({ first_note: smo101931, last_note: smo101932, 
          firstNote: smo101931, lastNote: smo101932, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107849.setContext(context).draw();
// modifier from 0-15-0-0 to 0-15-0-1
const smo107850 = new VF.StaveTie({ first_note: smo101949, last_note: smo101950, 
          firstNote: smo101949, lastNote: smo101950, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107850.setContext(context).draw();
// modifier from 0-16-0-3 to 0-16-0-4
const smo107851 = new VF.StaveTie({ first_note: smo101970, last_note: smo101971, 
          firstNote: smo101970, lastNote: smo101971, first_indices: [0,1], last_indices: [0,1]});
smo107851.setContext(context).draw();
// modifier from 0-17-0-3 to 0-17-0-4
const smo107852 = new VF.StaveTie({ first_note: smo101992, last_note: smo101993, 
          firstNote: smo101992, lastNote: smo101993, first_indices: [0,1], last_indices: [0,1]});
smo107852.setContext(context).draw();
// modifier from 0-18-0-3 to 0-18-0-4
const smo107853 = new VF.StaveTie({ first_note: smo102014, last_note: smo102015, 
          firstNote: smo102014, lastNote: smo102015, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107853.setContext(context).draw();
// modifier from 0-19-0-0 to 0-19-0-1
const smo107854 = new VF.StaveTie({ first_note: smo102032, last_note: smo102033, 
          firstNote: smo102032, lastNote: smo102033, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107854.setContext(context).draw();
// modifier from 0-20-0-0 to 0-20-0-1
const smo107855 = new VF.StaveTie({ first_note: smo102051, last_note: smo102052, 
          firstNote: smo102051, lastNote: smo102052, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107855.setContext(context).draw();
// modifier from 0-21-0-2 to 0-21-0-3
const smo107856 = new VF.StaveTie({ first_note: smo102073, last_note: smo102074, 
          firstNote: smo102073, lastNote: smo102074, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107856.setContext(context).draw();
// modifier from 0-22-0-2 to 0-22-0-3
const smo107857 = new VF.StaveTie({ first_note: smo102094, last_note: smo102095, 
          firstNote: smo102094, lastNote: smo102095, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107857.setContext(context).draw();
// modifier from 0-25-0-2 to 0-25-0-3
const smo107858 = new VF.StaveTie({ first_note: smo102159, last_note: smo102160, 
          firstNote: smo102159, lastNote: smo102160, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107858.setContext(context).draw();
// modifier from 0-26-0-2 to 0-26-0-3
const smo107859 = new VF.StaveTie({ first_note: smo102180, last_note: smo102181, 
          firstNote: smo102180, lastNote: smo102181, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107859.setContext(context).draw();
// modifier from 0-27-0-2 to 0-27-0-3
const smo107860 = new VF.StaveTie({ first_note: smo102201, last_note: smo102202, 
          firstNote: smo102201, lastNote: smo102202, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107860.setContext(context).draw();
// modifier from 0-28-0-0 to 0-28-0-1
const smo107861 = new VF.StaveTie({ first_note: smo102220, last_note: smo102221, 
          firstNote: smo102220, lastNote: smo102221, first_indices: [0,1], last_indices: [0,1]});
smo107861.setContext(context).draw();
// modifier from 0-29-0-2 to 0-29-0-3
const smo107862 = new VF.StaveTie({ first_note: smo102242, last_note: smo102243, 
          firstNote: smo102242, lastNote: smo102243, first_indices: [0,1,2], last_indices: [0,1,2]});
smo107862.setContext(context).draw();
// modifier from 1-1-0-3 to 1-1-0-4
const smo107863 = new VF.StaveTie({ first_note: smo104546, last_note: smo104547, 
          firstNote: smo104546, lastNote: smo104547, first_indices: [0], last_indices: [0]});
smo107863.setContext(context).draw();
// modifier from 1-2-0-3 to 1-2-0-4
const smo107864 = new VF.StaveTie({ first_note: smo104567, last_note: smo104568, 
          firstNote: smo104567, lastNote: smo104568, first_indices: [0], last_indices: [0]});
smo107864.setContext(context).draw();
const smo102037smo102050 = new VF.Volta(5, '1', 368, 20);
smo102037smo102050.setContext(context).draw(stavesmo102050, -1 * 0);
const smo102056smo102070 = new VF.Volta(5, '2', 663, 20);
smo102056smo102070.setContext(context).draw(stavesmo102070, -1 * 0);
}
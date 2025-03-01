// @@ Postillionlied p 1/3  by Franz Grothe
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1343 1738');
//
// create the musical objects
VF.setFonts("Leland","Bravura","Academico");
const fmtsmo2280920 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo228092v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228092v0ar = [];
const smo228076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228076.setAttribute('id', 'smo228076');
smo228076.addModifier(new VF.Dot(), 0);
smo228092v0ar.push(smo228076);
smo228092v0.addTickables(smo228092v0ar)
fmtsmo2280920.joinVoices([smo228092v0]);
const fmtsmo2294920 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo229492v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229492v0ar = [];
const smo229474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229474.setAttribute('id', 'smo229474');
smo229474.addModifier(new VF.Dot(), 0);
smo229492v0ar.push(smo229474);
const smo229475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229475.setAttribute('id', 'smo229475');
smo229492v0ar.push(smo229475);
const smo229476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo229476.setAttribute('id', 'smo229476');
smo229492v0ar.push(smo229476);
smo229492v0.addTickables(smo229492v0ar)
fmtsmo2294920.joinVoices([smo229492v0]);
const fmtsmo2306130 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo230613v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230613v0ar = [];
const smo230595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230595.setAttribute('id', 'smo230595');
smo230595.addModifier(new VF.Dot(), 0);
smo230613v0ar.push(smo230595);
const smo230596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230596.setAttribute('id', 'smo230596');
smo230613v0ar.push(smo230596);
const smo230597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230597.setAttribute('id', 'smo230597');
smo230613v0ar.push(smo230597);
smo230613v0.addTickables(smo230613v0ar)
fmtsmo2306130.joinVoices([smo230613v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo2280920.format([smo228092v0,smo229492v0,smo230613v0], 110);
const stavesmo228092 = new VF.Stave(66, 119, 194);
stavesmo228092.setAttribute('id', 'stavesmo228092');
stavesmo228092.setBegBarType(1);
stavesmo228092.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo228092.addClef('treble');
stavesmo228092.addTimeSignature('6/8');
const keysmo228092 = new VF.KeySignature('G');
keysmo228092.addToStave(stavesmo228092);
stavesmo228092.setContext(context);
stavesmo228092.draw();
smo228092v0.draw(context, stavesmo228092);
const stavesmo229492 = new VF.Stave(66, 233, 194);
stavesmo229492.setAttribute('id', 'stavesmo229492');
stavesmo229492.setBegBarType(1);
stavesmo229492.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo229492.addClef('treble');
stavesmo229492.addTimeSignature('6/8');
const keysmo229492 = new VF.KeySignature('G');
keysmo229492.addToStave(stavesmo229492);
stavesmo229492.setContext(context);
stavesmo229492.draw();
smo229492v0.draw(context, stavesmo229492);
const stavesmo230613 = new VF.Stave(66, 342, 194);
stavesmo230613.setAttribute('id', 'stavesmo230613');
stavesmo230613.setBegBarType(1);
stavesmo230613.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo230613.addClef('treble');
stavesmo230613.addTimeSignature('6/8');
const keysmo230613 = new VF.KeySignature('G');
keysmo230613.addToStave(stavesmo230613);
stavesmo230613.setContext(context);
stavesmo230613.draw();
smo230613v0.draw(context, stavesmo230613);
const leftsmo231827stavesmo2280922 = new VF.StaveConnector(stavesmo228092, stavesmo230613).setType(1);
leftsmo231827stavesmo2280922.setContext(context).draw();
const fmtsmo2281091 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo228109v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228109v0ar = [];
const smo228093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228093.setAttribute('id', 'smo228093');
smo228093.addModifier(new VF.Dot(), 0);
smo228109v0ar.push(smo228093);
smo228109v0.addTickables(smo228109v0ar)
fmtsmo2281091.joinVoices([smo228109v0]);
const fmtsmo2295101 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo229510v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229510v0ar = [];
const smo229493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo229493.setAttribute('id', 'smo229493');
smo229493.addModifier(new VF.Dot(), 0);
smo229510v0ar.push(smo229493);
const smo229494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo229494.setAttribute('id', 'smo229494');
smo229494.addModifier(new VF.Dot(), 0);
smo229510v0ar.push(smo229494);
smo229510v0.addTickables(smo229510v0ar)
fmtsmo2295101.joinVoices([smo229510v0]);
const fmtsmo2306311 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo230631v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230631v0ar = [];
const smo230614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo230614.setAttribute('id', 'smo230614');
smo230614.addModifier(new VF.Dot(), 0);
smo230631v0ar.push(smo230614);
const smo230615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230615.setAttribute('id', 'smo230615');
smo230615.addModifier(new VF.Dot(), 0);
smo230631v0ar.push(smo230615);
smo230631v0.addTickables(smo230631v0ar)
fmtsmo2306311.joinVoices([smo230631v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo2281091.format([smo228109v0,smo229510v0,smo230631v0], 82);
const stavesmo228109 = new VF.Stave(260, 119, 96);
stavesmo228109.setAttribute('id', 'stavesmo228109');
stavesmo228109.setBegBarType(VF.Barline.type.NONE);
stavesmo228109.setContext(context);
stavesmo228109.draw();
smo228109v0.draw(context, stavesmo228109);
const stavesmo229510 = new VF.Stave(260, 233, 96);
stavesmo229510.setAttribute('id', 'stavesmo229510');
stavesmo229510.setBegBarType(VF.Barline.type.NONE);
stavesmo229510.setContext(context);
stavesmo229510.draw();
smo229510v0.draw(context, stavesmo229510);
const stavesmo230631 = new VF.Stave(260, 342, 96);
stavesmo230631.setAttribute('id', 'stavesmo230631');
stavesmo230631.setBegBarType(VF.Barline.type.NONE);
stavesmo230631.setContext(context);
stavesmo230631.draw();
smo230631v0.draw(context, stavesmo230631);
const fmtsmo2281262 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo228126v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228126v0ar = [];
const smo228110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228110.setAttribute('id', 'smo228110');
smo228110.addModifier(new VF.Dot(), 0);
smo228126v0ar.push(smo228110);
smo228126v0.addTickables(smo228126v0ar)
fmtsmo2281262.joinVoices([smo228126v0]);
const fmtsmo2295312 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo229531v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229531v0ar = [];
const smo229511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo229511.setAttribute('id', 'smo229511');
smo229531v0ar.push(smo229511);
const smo229512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo229512.setAttribute('id', 'smo229512');
smo229531v0ar.push(smo229512);
const smo229513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo229513.setAttribute('id', 'smo229513');
smo229531v0ar.push(smo229513);
const smo229514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229514.setAttribute('id', 'smo229514');
smo229531v0ar.push(smo229514);
const smo229515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229515.setAttribute('id', 'smo229515');
smo229531v0ar.push(smo229515);
smo229531v0.addTickables(smo229531v0ar)
fmtsmo2295312.joinVoices([smo229531v0]);
const fmtsmo2306522 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo230652v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230652v0ar = [];
const smo230632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230632.setAttribute('id', 'smo230632');
smo230652v0ar.push(smo230632);
const smo230633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo230633.setAttribute('id', 'smo230633');
smo230652v0ar.push(smo230633);
const smo230634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo230634.setAttribute('id', 'smo230634');
smo230652v0ar.push(smo230634);
const smo230635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo230635.setAttribute('id', 'smo230635');
smo230652v0ar.push(smo230635);
const smo230636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo230636.setAttribute('id', 'smo230636');
smo230652v0ar.push(smo230636);
smo230652v0.addTickables(smo230652v0ar)
fmtsmo2306522.joinVoices([smo230652v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237795 = smo229511.getStemDirection();
smo229511.setStemDirection(dirsmo237795);
smo229512.setStemDirection(dirsmo237795);
smo229513.setStemDirection(dirsmo237795);
const smo237795 = new VF.Beam([smo229511,smo229512,smo229513]);
const dirsmo237797 = smo230632.getStemDirection();
smo230632.setStemDirection(dirsmo237797);
smo230633.setStemDirection(dirsmo237797);
smo230634.setStemDirection(dirsmo237797);
const smo237797 = new VF.Beam([smo230632,smo230633,smo230634]);
 
// formatting measures in staff group smo231827
fmtsmo2281262.format([smo228126v0,smo229531v0,smo230652v0], 143);
const stavesmo228126 = new VF.Stave(356, 119, 157);
stavesmo228126.setAttribute('id', 'stavesmo228126');
stavesmo228126.setBegBarType(VF.Barline.type.NONE);
stavesmo228126.setContext(context);
stavesmo228126.draw();
smo228126v0.draw(context, stavesmo228126);
const stavesmo229531 = new VF.Stave(356, 233, 157);
stavesmo229531.setAttribute('id', 'stavesmo229531');
stavesmo229531.setBegBarType(VF.Barline.type.NONE);
stavesmo229531.setContext(context);
stavesmo229531.draw();
smo229531v0.draw(context, stavesmo229531);
smo237795.setContext(context);
smo237795.draw();
const stavesmo230652 = new VF.Stave(356, 342, 157);
stavesmo230652.setAttribute('id', 'stavesmo230652');
stavesmo230652.setBegBarType(VF.Barline.type.NONE);
stavesmo230652.setContext(context);
stavesmo230652.draw();
smo230652v0.draw(context, stavesmo230652);
smo237797.setContext(context);
smo237797.draw();
const fmtsmo2281433 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo228143v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228143v0ar = [];
const smo228127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228127.setAttribute('id', 'smo228127');
smo228127.addModifier(new VF.Dot(), 0);
smo228143v0ar.push(smo228127);
smo228143v0.addTickables(smo228143v0ar)
fmtsmo2281433.joinVoices([smo228143v0]);
const fmtsmo2295523 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo229552v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229552v0ar = [];
const smo229532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229532.setAttribute('id', 'smo229532');
smo229552v0ar.push(smo229532);
const smo229533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo229533.setAttribute('id', 'smo229533');
smo229552v0ar.push(smo229533);
const smo229534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229534.setAttribute('id', 'smo229534');
smo229552v0ar.push(smo229534);
const smo229535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229535.setAttribute('id', 'smo229535');
smo229552v0ar.push(smo229535);
const smo229536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo229536.setAttribute('id', 'smo229536');
smo229552v0ar.push(smo229536);
smo229552v0.addTickables(smo229552v0ar)
fmtsmo2295523.joinVoices([smo229552v0]);
const fmtsmo2306723 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo230672v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230672v0ar = [];
const smo230653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230653.setAttribute('id', 'smo230653');
smo230672v0ar.push(smo230653);
const smo230654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo230654.setAttribute('id', 'smo230654');
smo230672v0ar.push(smo230654);
const smo230655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230655.setAttribute('id', 'smo230655');
smo230672v0ar.push(smo230655);
const smo230656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n","f#/3/n"]}'))
smo230656.setAttribute('id', 'smo230656');
smo230656.addModifier(new VF.Dot(), 0);
smo230656.addModifier(new VF.Dot(), 1);
smo230672v0ar.push(smo230656);
smo230672v0.addTickables(smo230672v0ar)
fmtsmo2306723.joinVoices([smo230672v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237803 = smo229532.getStemDirection();
smo229532.setStemDirection(dirsmo237803);
smo229533.setStemDirection(dirsmo237803);
smo229534.setStemDirection(dirsmo237803);
const smo237803 = new VF.Beam([smo229532,smo229533,smo229534]);
const dirsmo237805 = smo230653.getStemDirection();
smo230653.setStemDirection(dirsmo237805);
smo230654.setStemDirection(dirsmo237805);
smo230655.setStemDirection(dirsmo237805);
const smo237805 = new VF.Beam([smo230653,smo230654,smo230655]);
 
// formatting measures in staff group smo231827
fmtsmo2281433.format([smo228143v0,smo229552v0,smo230672v0], 157);
const stavesmo228143 = new VF.Stave(513, 119, 171);
stavesmo228143.setAttribute('id', 'stavesmo228143');
stavesmo228143.setBegBarType(VF.Barline.type.NONE);
stavesmo228143.setContext(context);
stavesmo228143.draw();
smo228143v0.draw(context, stavesmo228143);
const stavesmo229552 = new VF.Stave(513, 233, 171);
stavesmo229552.setAttribute('id', 'stavesmo229552');
stavesmo229552.setBegBarType(VF.Barline.type.NONE);
stavesmo229552.setContext(context);
stavesmo229552.draw();
smo229552v0.draw(context, stavesmo229552);
smo237803.setContext(context);
smo237803.draw();
const stavesmo230672 = new VF.Stave(513, 342, 171);
stavesmo230672.setAttribute('id', 'stavesmo230672');
stavesmo230672.setBegBarType(VF.Barline.type.NONE);
stavesmo230672.setContext(context);
stavesmo230672.draw();
smo230672v0.draw(context, stavesmo230672);
smo237805.setContext(context);
smo237805.draw();
const fmtsmo2281604 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo228160v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228160v0ar = [];
const smo228144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228144.setAttribute('id', 'smo228144');
smo228144.addModifier(new VF.Dot(), 0);
smo228160v0ar.push(smo228144);
smo228160v0.addTickables(smo228160v0ar)
fmtsmo2281604.joinVoices([smo228160v0]);
const fmtsmo2295694 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo229569v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229569v0ar = [];
const smo229553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229553.setAttribute('id', 'smo229553');
smo229553.addModifier(new VF.Dot(), 0);
smo229569v0ar.push(smo229553);
smo229569v0.addTickables(smo229569v0ar)
fmtsmo2295694.joinVoices([smo229569v0]);
const fmtsmo2306924 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo230692v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230692v0ar = [];
const smo230673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230673.setAttribute('id', 'smo230673');
smo230692v0ar.push(smo230673);
const smo230674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230674.setAttribute('id', 'smo230674');
smo230692v0ar.push(smo230674);
const smo230675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230675.setAttribute('id', 'smo230675');
smo230692v0ar.push(smo230675);
const smo230676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230676.setAttribute('id', 'smo230676');
smo230692v0ar.push(smo230676);
smo230692v0.addTickables(smo230692v0ar)
fmtsmo2306924.joinVoices([smo230692v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo2281604.format([smo228160v0,smo229569v0,smo230692v0], 154);
const stavesmo228160 = new VF.Stave(684, 119, 177);
stavesmo228160.setAttribute('id', 'stavesmo228160');
stavesmo228160.setBegBarType(4);
stavesmo228160.setContext(context);
stavesmo228160.draw();
smo228160v0.draw(context, stavesmo228160);
const stavesmo229569 = new VF.Stave(684, 233, 177);
stavesmo229569.setAttribute('id', 'stavesmo229569');
stavesmo229569.setBegBarType(4);
stavesmo229569.setContext(context);
stavesmo229569.draw();
smo229569v0.draw(context, stavesmo229569);
const stavesmo230692 = new VF.Stave(684, 342, 177);
stavesmo230692.setAttribute('id', 'stavesmo230692');
stavesmo230692.setBegBarType(4);
stavesmo230692.addClef('bass');
stavesmo230692.setContext(context);
stavesmo230692.draw();
smo230692v0.draw(context, stavesmo230692);
const fmtsmo2281795 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo228179v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228179v0ar = [];
const smo228161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228161.setAttribute('id', 'smo228161');
smo228161.addModifier(new VF.Dot(), 0);
smo228179v0ar.push(smo228161);
const smo228162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228162.setAttribute('id', 'smo228162');
smo228162.addModifier(new VF.Dot(), 0);
const smo228163 = new VF.Annotation('Mein');
smo228163.setAttribute('id', 'smo228163');
smo228163.setFont('Merriweather', 12, 'normal');
smo228163.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228162.addModifier(smo228163);
smo228163.addClass('lyric lyric-0');
smo228179v0ar.push(smo228162);
smo228179v0.addTickables(smo228179v0ar)
fmtsmo2281795.joinVoices([smo228179v0]);
const fmtsmo2295875 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo229587v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229587v0ar = [];
const smo229570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229570.setAttribute('id', 'smo229570');
smo229570.addModifier(new VF.Dot(), 0);
smo229587v0ar.push(smo229570);
const smo229571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229571.setAttribute('id', 'smo229571');
smo229571.addModifier(new VF.Dot(), 0);
smo229587v0ar.push(smo229571);
smo229587v0.addTickables(smo229587v0ar)
fmtsmo2295875.joinVoices([smo229587v0]);
const fmtsmo2307125 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo230712v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230712v0ar = [];
const smo230693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230693.setAttribute('id', 'smo230693');
smo230712v0ar.push(smo230693);
const smo230694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230694.setAttribute('id', 'smo230694');
smo230712v0ar.push(smo230694);
const smo230695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230695.setAttribute('id', 'smo230695');
smo230712v0ar.push(smo230695);
const smo230696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230696.setAttribute('id', 'smo230696');
smo230712v0ar.push(smo230696);
smo230712v0.addTickables(smo230712v0ar)
fmtsmo2307125.joinVoices([smo230712v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo2281795.format([smo228179v0,smo229587v0,smo230712v0], 160);
const stavesmo228179 = new VF.Stave(861, 119, 174);
stavesmo228179.setAttribute('id', 'stavesmo228179');
stavesmo228179.setBegBarType(VF.Barline.type.NONE);
stavesmo228179.setContext(context);
stavesmo228179.draw();
smo228179v0.draw(context, stavesmo228179);
const stavesmo229587 = new VF.Stave(861, 233, 174);
stavesmo229587.setAttribute('id', 'stavesmo229587');
stavesmo229587.setBegBarType(VF.Barline.type.NONE);
stavesmo229587.setContext(context);
stavesmo229587.draw();
smo229587v0.draw(context, stavesmo229587);
const stavesmo230712 = new VF.Stave(861, 342, 174);
stavesmo230712.setAttribute('id', 'stavesmo230712');
stavesmo230712.setBegBarType(VF.Barline.type.NONE);
stavesmo230712.setContext(context);
stavesmo230712.draw();
smo230712v0.draw(context, stavesmo230712);
const fmtsmo2281976 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo228197v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228197v0ar = [];
const smo228180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228180.setAttribute('id', 'smo228180');
smo228180.addModifier(new VF.Dot(), 0);
const smo228181 = new VF.Annotation('Shatz,');
smo228181.setAttribute('id', 'smo228181');
smo228181.setFont('Merriweather', 12, 'normal');
smo228181.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228180.addModifier(smo228181);
smo228181.addClass('lyric lyric-0');
smo228197v0ar.push(smo228180);
smo228197v0.addTickables(smo228197v0ar)
fmtsmo2281976.joinVoices([smo228197v0]);
const fmtsmo2296046 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo229604v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229604v0ar = [];
const smo229588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","f#/4/n"]}'))
smo229588.setAttribute('id', 'smo229588');
smo229588.addModifier(new VF.Dot(), 0);
smo229588.addModifier(new VF.Dot(), 1);
smo229604v0ar.push(smo229588);
smo229604v0.addTickables(smo229604v0ar)
fmtsmo2296046.joinVoices([smo229604v0]);
const fmtsmo2307326 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo230732v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230732v0ar = [];
const smo230713 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230713.setAttribute('id', 'smo230713');
smo230732v0ar.push(smo230713);
const smo230714 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230714.setAttribute('id', 'smo230714');
smo230732v0ar.push(smo230714);
const smo230715 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230715.setAttribute('id', 'smo230715');
smo230732v0ar.push(smo230715);
const smo230716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230716.setAttribute('id', 'smo230716');
smo230732v0ar.push(smo230716);
smo230732v0.addTickables(smo230732v0ar)
fmtsmo2307326.joinVoices([smo230732v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo2281976.format([smo228197v0,smo229604v0,smo230732v0], 160);
const stavesmo228197 = new VF.Stave(1035, 119, 174);
stavesmo228197.setAttribute('id', 'stavesmo228197');
stavesmo228197.setBegBarType(VF.Barline.type.NONE);
stavesmo228197.setContext(context);
stavesmo228197.draw();
smo228197v0.draw(context, stavesmo228197);
const stavesmo229604 = new VF.Stave(1035, 233, 174);
stavesmo229604.setAttribute('id', 'stavesmo229604');
stavesmo229604.setBegBarType(VF.Barline.type.NONE);
stavesmo229604.setContext(context);
stavesmo229604.draw();
smo229604v0.draw(context, stavesmo229604);
const stavesmo230732 = new VF.Stave(1035, 342, 174);
stavesmo230732.setAttribute('id', 'stavesmo230732');
stavesmo230732.setBegBarType(VF.Barline.type.NONE);
stavesmo230732.setContext(context);
stavesmo230732.draw();
smo230732v0.draw(context, stavesmo230732);
const rightsmo231827stavesmo2281972 = new VF.StaveConnector(stavesmo228197, stavesmo230732).setType(0);
rightsmo231827stavesmo2281972.setContext(context).draw();
const fmtsmo2282277 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo228227v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228227v0ar = [];
const smo228198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228198.setAttribute('id', 'smo228198');
smo228227v0ar.push(smo228198);
const smo228200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228200.setAttribute('id', 'smo228200');
const smo228201 = new VF.Annotation('der');
smo228201.setAttribute('id', 'smo228201');
smo228201.setFont('Merriweather', 12, 'normal');
smo228201.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228200.addModifier(smo228201);
smo228201.addClass('lyric lyric-0');
const smo228202 = new VF.Annotation('hat');
smo228202.setAttribute('id', 'smo228202');
smo228202.setFont('Merriweather', 12, 'normal');
smo228202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228200.addModifier(smo228202);
smo228202.addClass('lyric lyric-1');
smo228227v0ar.push(smo228200);
const smo228203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228203.setAttribute('id', 'smo228203');
const smo228204 = new VF.Annotation('is');
smo228204.setAttribute('id', 'smo228204');
smo228204.setFont('Merriweather', 12, 'normal');
smo228204.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228203.addModifier(smo228204);
smo228204.addClass('lyric lyric-0');
const smo228205 = new VF.Annotation('vie');
smo228205.setAttribute('id', 'smo228205');
smo228205.setFont('Merriweather', 12, 'normal');
smo228205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228203.addModifier(smo228205);
smo228205.addClass('lyric lyric-1 lyric-hyphen');
smo228227v0ar.push(smo228203);
const smo228206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228206.setAttribute('id', 'smo228206');
const smo228207 = new VF.Annotation('Po');
smo228207.setAttribute('id', 'smo228207');
smo228207.setFont('Merriweather', 12, 'normal');
smo228207.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228206.addModifier(smo228207);
smo228207.addClass('lyric lyric-0 lyric-hyphen');
const smo228208 = new VF.Annotation('les');
smo228208.setAttribute('id', 'smo228208');
smo228208.setFont('Merriweather', 12, 'normal');
smo228208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228206.addModifier(smo228208);
smo228208.addClass('lyric lyric-1');
smo228227v0ar.push(smo228206);
const smo228209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo228209.setAttribute('id', 'smo228209');
const smo228210 = new VF.Annotation('stil');
smo228210.setAttribute('id', 'smo228210');
smo228210.setFont('Merriweather', 12, 'normal');
smo228210.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228209.addModifier(smo228210);
smo228210.addClass('lyric lyric-0 lyric-hyphen');
const smo228211 = new VF.Annotation('ge');
smo228211.setAttribute('id', 'smo228211');
smo228211.setFont('Merriweather', 12, 'normal');
smo228211.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228209.addModifier(smo228211);
smo228211.addClass('lyric lyric-1 lyric-hyphen');
smo228227v0ar.push(smo228209);
smo228227v0.addTickables(smo228227v0ar)
fmtsmo2282277.joinVoices([smo228227v0]);
const fmtsmo2296217 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo229621v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229621v0ar = [];
const smo229605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stemDirection":-1,"autoStem":false,"keys":["an/3/n","f#/4/n"]}'))
smo229605.setAttribute('id', 'smo229605');
smo229605.addModifier(new VF.Dot(), 0);
smo229605.addModifier(new VF.Dot(), 1);
smo229621v0ar.push(smo229605);
smo229621v0.addTickables(smo229621v0ar)
fmtsmo2296217.joinVoices([smo229621v0]);
const fmtsmo2307527 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo230752v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230752v0ar = [];
const smo230733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230733.setAttribute('id', 'smo230733');
smo230752v0ar.push(smo230733);
const smo230734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230734.setAttribute('id', 'smo230734');
smo230752v0ar.push(smo230734);
const smo230735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230735.setAttribute('id', 'smo230735');
smo230752v0ar.push(smo230735);
const smo230736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230736.setAttribute('id', 'smo230736');
smo230752v0ar.push(smo230736);
smo230752v0.addTickables(smo230752v0ar)
fmtsmo2307527.joinVoices([smo230752v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237832 = smo228203.getStemDirection();
smo228203.setStemDirection(dirsmo237832);
smo228206.setStemDirection(dirsmo237832);
smo228209.setStemDirection(dirsmo237832);
const smo237832 = new VF.Beam([smo228203,smo228206,smo228209]);
 
// formatting measures in staff group smo231827
fmtsmo2282277.format([smo228227v0,smo229621v0,smo230752v0], 237);
const stavesmo228227 = new VF.Stave(66, 492, 301);
stavesmo228227.setAttribute('id', 'stavesmo228227');
stavesmo228227.setBegBarType(1);
stavesmo228227.addClef('treble');
const keysmo228227 = new VF.KeySignature('G');
keysmo228227.addToStave(stavesmo228227);
stavesmo228227.setContext(context);
stavesmo228227.draw();
smo228227v0.draw(context, stavesmo228227);
smo237832.setContext(context);
smo237832.draw();
const stavesmo229621 = new VF.Stave(66, 607, 301);
stavesmo229621.setAttribute('id', 'stavesmo229621');
stavesmo229621.setBegBarType(1);
stavesmo229621.addClef('treble');
const keysmo229621 = new VF.KeySignature('G');
keysmo229621.addToStave(stavesmo229621);
stavesmo229621.setContext(context);
stavesmo229621.draw();
smo229621v0.draw(context, stavesmo229621);
const stavesmo230752 = new VF.Stave(66, 740, 301);
stavesmo230752.setAttribute('id', 'stavesmo230752');
stavesmo230752.setBegBarType(1);
stavesmo230752.addClef('bass');
const keysmo230752 = new VF.KeySignature('G');
keysmo230752.addToStave(stavesmo230752);
stavesmo230752.setContext(context);
stavesmo230752.draw();
smo230752v0.draw(context, stavesmo230752);
const leftsmo231827stavesmo2282272 = new VF.StaveConnector(stavesmo228227, stavesmo230752).setType(1);
leftsmo231827stavesmo2282272.setContext(context).draw();
const fmtsmo2282468 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo228246v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228246v0ar = [];
const smo228228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228228.setAttribute('id', 'smo228228');
smo228228.addModifier(new VF.Dot(), 0);
const smo228229 = new VF.Annotation('lion,');
smo228229.setAttribute('id', 'smo228229');
smo228229.setFont('Merriweather', 12, 'normal');
smo228229.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228228.addModifier(smo228229);
smo228229.addClass('lyric lyric-0');
const smo228230 = new VF.Annotation('sehn');
smo228230.setAttribute('id', 'smo228230');
smo228230.setFont('Merriweather', 12, 'normal');
smo228230.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228228.addModifier(smo228230);
smo228230.addClass('lyric lyric-1');
smo228246v0ar.push(smo228228);
smo228246v0.addTickables(smo228246v0ar)
fmtsmo2282468.joinVoices([smo228246v0]);
const fmtsmo2296388 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo229638v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229638v0ar = [];
const smo229622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo229622.setAttribute('id', 'smo229622');
smo229622.addModifier(new VF.Dot(), 0);
smo229622.addModifier(new VF.Dot(), 1);
smo229638v0ar.push(smo229622);
smo229638v0.addTickables(smo229638v0ar)
fmtsmo2296388.joinVoices([smo229638v0]);
const fmtsmo2307778 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo230777v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230777v0ar = [];
const smo230753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230753.setAttribute('id', 'smo230753');
smo230777v0ar.push(smo230753);
const smo230754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230754.setAttribute('id', 'smo230754');
smo230777v0ar.push(smo230754);
const smo230755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230755.setAttribute('id', 'smo230755');
smo230777v0ar.push(smo230755);
const smo230756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230756.setAttribute('id', 'smo230756');
smo230777v0ar.push(smo230756);
smo230777v0.addTickables(smo230777v0ar)
fmtsmo2307778.joinVoices([smo230777v0]);
const smo230777v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230777v1ar = [];
const smo230757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["cn/4/r"]}'))
smo230757.setAttribute('id', 'smo230757');
smo230757.setStyle({ fillStyle: "#115511" });
smo230777v1ar.push(smo230757);
const smo230758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230758.setAttribute('id', 'smo230758');
smo230758.setStyle({ fillStyle: "#115511" });
smo230777v1ar.push(smo230758);
const smo230759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230759.setAttribute('id', 'smo230759');
smo230759.setStyle({ fillStyle: "#115511" });
smo230777v1ar.push(smo230759);
const smo230760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230760.setAttribute('id', 'smo230760');
smo230760.setStyle({ fillStyle: "#115511" });
smo230777v1ar.push(smo230760);
const smo230761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/4/n"]}'))
smo230761.setAttribute('id', 'smo230761');
smo230761.setStyle({ fillStyle: "#115511" });
smo230777v1ar.push(smo230761);
smo230777v1.addTickables(smo230777v1ar)
fmtsmo2307778.joinVoices([smo230777v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237841 = smo230759.getStemDirection();
smo230759.setStemDirection(dirsmo237841);
smo230760.setStemDirection(dirsmo237841);
smo230761.setStemDirection(dirsmo237841);
const smo237841 = new VF.Beam([smo230759,smo230760,smo230761]);
 
// formatting measures in staff group smo231827
fmtsmo2282468.format([smo228246v0,smo229638v0,smo230777v0,smo230777v1], 156);
const stavesmo228246 = new VF.Stave(367, 492, 170);
stavesmo228246.setAttribute('id', 'stavesmo228246');
stavesmo228246.setBegBarType(VF.Barline.type.NONE);
stavesmo228246.setContext(context);
stavesmo228246.draw();
smo228246v0.draw(context, stavesmo228246);
const stavesmo229638 = new VF.Stave(367, 607, 170);
stavesmo229638.setAttribute('id', 'stavesmo229638');
stavesmo229638.setBegBarType(VF.Barline.type.NONE);
stavesmo229638.setContext(context);
stavesmo229638.draw();
smo229638v0.draw(context, stavesmo229638);
const stavesmo230777 = new VF.Stave(367, 740, 170);
stavesmo230777.setAttribute('id', 'stavesmo230777');
stavesmo230777.setBegBarType(VF.Barline.type.NONE);
stavesmo230777.setContext(context);
stavesmo230777.draw();
smo230777v0.draw(context, stavesmo230777);
smo230777v1.draw(context, stavesmo230777);
smo237841.setContext(context);
smo237841.draw();
const fmtsmo2282769 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo228276v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228276v0ar = [];
const smo228247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228247.setAttribute('id', 'smo228247');
smo228276v0ar.push(smo228247);
const smo228249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228249.setAttribute('id', 'smo228249');
const smo228250 = new VF.Annotation('er');
smo228250.setAttribute('id', 'smo228250');
smo228250.setFont('Merriweather', 12, 'normal');
smo228250.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228249.addModifier(smo228250);
smo228250.addClass('lyric lyric-0');
const smo228251 = new VF.Annotation('er');
smo228251.setAttribute('id', 'smo228251');
smo228251.setFont('Merriweather', 12, 'normal');
smo228251.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228249.addModifier(smo228251);
smo228251.addClass('lyric lyric-1');
smo228276v0ar.push(smo228249);
const smo228252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228252.setAttribute('id', 'smo228252');
const smo228253 = new VF.Annotation('fährt');
smo228253.setAttribute('id', 'smo228253');
smo228253.setFont('Merriweather', 12, 'normal');
smo228253.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228252.addModifier(smo228253);
smo228253.addClass('lyric lyric-0');
const smo228254 = new VF.Annotation('traf');
smo228254.setAttribute('id', 'smo228254');
smo228254.setFont('Merriweather', 12, 'normal');
smo228254.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228252.addModifier(smo228254);
smo228254.addClass('lyric lyric-1');
smo228276v0ar.push(smo228252);
const smo228255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228255.setAttribute('id', 'smo228255');
const smo228256 = new VF.Annotation('durch');
smo228256.setAttribute('id', 'smo228256');
smo228256.setFont('Merriweather', 12, 'normal');
smo228256.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228255.addModifier(smo228256);
smo228256.addClass('lyric lyric-0');
const smo228257 = new VF.Annotation('la');
smo228257.setAttribute('id', 'smo228257');
smo228257.setFont('Merriweather', 12, 'normal');
smo228257.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228255.addModifier(smo228257);
smo228257.addClass('lyric lyric-1');
smo228276v0ar.push(smo228255);
const smo228258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228258.setAttribute('id', 'smo228258');
const smo228259 = new VF.Annotation('de');
smo228259.setAttribute('id', 'smo228259');
smo228259.setFont('Merriweather', 12, 'normal');
smo228259.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228258.addModifier(smo228259);
smo228259.addClass('lyric lyric-0');
const smo228260 = new VF.Annotation('den');
smo228260.setAttribute('id', 'smo228260');
smo228260.setFont('Merriweather', 12, 'normal');
smo228260.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228258.addModifier(smo228260);
smo228260.addClass('lyric lyric-1');
smo228276v0ar.push(smo228258);
smo228276v0.addTickables(smo228276v0ar)
fmtsmo2282769.joinVoices([smo228276v0]);
const fmtsmo2296559 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo229655v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229655v0ar = [];
const smo229639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo229639.setAttribute('id', 'smo229639');
smo229639.addModifier(new VF.Dot(), 0);
smo229639.addModifier(new VF.Dot(), 1);
smo229655v0ar.push(smo229639);
smo229655v0.addTickables(smo229655v0ar)
fmtsmo2296559.joinVoices([smo229655v0]);
const fmtsmo2307999 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo230799v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230799v0ar = [];
const smo230778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230778.setAttribute('id', 'smo230778');
smo230799v0ar.push(smo230778);
const smo230779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230779.setAttribute('id', 'smo230779');
smo230799v0ar.push(smo230779);
const smo230780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230780.setAttribute('id', 'smo230780');
smo230799v0ar.push(smo230780);
const smo230781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230781.setAttribute('id', 'smo230781');
smo230799v0ar.push(smo230781);
smo230799v0.addTickables(smo230799v0ar)
fmtsmo2307999.joinVoices([smo230799v0]);
const smo230799v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230799v1ar = [];
const smo230782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230782.setAttribute('id', 'smo230782');
smo230782.setStyle({ fillStyle: "#115511" });
smo230782.addModifier(new VF.Dot(), 0);
smo230799v1ar.push(smo230782);
const smo230783 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo230783.setAttribute('id', 'smo230783');
smo230783.setStyle({ fillStyle: '#aaaaaa7f' });
smo230783.addModifier(new VF.Dot(), 0);
smo230799v1ar.push(smo230783);
smo230799v1.addTickables(smo230799v1ar)
fmtsmo2307999.joinVoices([smo230799v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237846 = smo228252.getStemDirection();
smo228252.setStemDirection(dirsmo237846);
smo228255.setStemDirection(dirsmo237846);
smo228258.setStemDirection(dirsmo237846);
const smo237846 = new VF.Beam([smo228252,smo228255,smo228258]);
 
// formatting measures in staff group smo231827
fmtsmo2282769.format([smo228276v0,smo229655v0,smo230799v0,smo230799v1], 287);
const stavesmo228276 = new VF.Stave(537, 492, 301);
stavesmo228276.setAttribute('id', 'stavesmo228276');
stavesmo228276.setBegBarType(VF.Barline.type.NONE);
stavesmo228276.setContext(context);
stavesmo228276.draw();
smo228276v0.draw(context, stavesmo228276);
smo237846.setContext(context);
smo237846.draw();
const stavesmo229655 = new VF.Stave(537, 607, 301);
stavesmo229655.setAttribute('id', 'stavesmo229655');
stavesmo229655.setBegBarType(VF.Barline.type.NONE);
stavesmo229655.setContext(context);
stavesmo229655.draw();
smo229655v0.draw(context, stavesmo229655);
const stavesmo230799 = new VF.Stave(537, 740, 301);
stavesmo230799.setAttribute('id', 'stavesmo230799');
stavesmo230799.setBegBarType(VF.Barline.type.NONE);
stavesmo230799.setContext(context);
stavesmo230799.draw();
smo230799v0.draw(context, stavesmo230799);
smo230799v1.draw(context, stavesmo230799);
const fmtsmo22829810 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo228298v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228298v0ar = [];
const smo228277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228277.setAttribute('id', 'smo228277');
smo228277.addModifier(new VF.Dot(), 0);
const smo228278 = new VF.Annotation('Fel');
smo228278.setAttribute('id', 'smo228278');
smo228278.setFont('Merriweather', 12, 'normal');
smo228278.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228277.addModifier(smo228278);
smo228278.addClass('lyric lyric-0 lyric-hyphen');
const smo228279 = new VF.Annotation('Städt');
smo228279.setAttribute('id', 'smo228279');
smo228279.setFont('Merriweather', 12, 'normal');
smo228279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228277.addModifier(smo228279);
smo228279.addClass('lyric lyric-1 lyric-hyphen');
smo228298v0ar.push(smo228277);
const smo228280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228280.setAttribute('id', 'smo228280');
smo228280.addModifier(new VF.Dot(), 0);
const smo228281 = new VF.Annotation('der');
smo228281.setAttribute('id', 'smo228281');
smo228281.setFont('Merriweather', 12, 'normal');
smo228281.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228280.addModifier(smo228281);
smo228281.addClass('lyric lyric-0');
const smo228282 = new VF.Annotation('chen');
smo228282.setAttribute('id', 'smo228282');
smo228282.setFont('Merriweather', 12, 'normal');
smo228282.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228280.addModifier(smo228282);
smo228282.addClass('lyric lyric-1');
smo228298v0ar.push(smo228280);
smo228298v0.addTickables(smo228298v0ar)
fmtsmo22829810.joinVoices([smo228298v0]);
const fmtsmo22967210 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo229672v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229672v0ar = [];
const smo229656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo229656.setAttribute('id', 'smo229656');
smo229656.addModifier(new VF.Dot(), 0);
smo229656.addModifier(new VF.Dot(), 1);
smo229672v0ar.push(smo229656);
smo229672v0.addTickables(smo229672v0ar)
fmtsmo22967210.joinVoices([smo229672v0]);
const fmtsmo23081910 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo230819v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230819v0ar = [];
const smo230800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230800.setAttribute('id', 'smo230800');
smo230819v0ar.push(smo230800);
const smo230801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230801.setAttribute('id', 'smo230801');
smo230819v0ar.push(smo230801);
const smo230802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230802.setAttribute('id', 'smo230802');
smo230819v0ar.push(smo230802);
const smo230803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230803.setAttribute('id', 'smo230803');
smo230819v0ar.push(smo230803);
smo230819v0.addTickables(smo230819v0ar)
fmtsmo23081910.joinVoices([smo230819v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22829810.format([smo228298v0,smo229672v0,smo230819v0], 176);
const stavesmo228298 = new VF.Stave(838, 492, 190);
stavesmo228298.setAttribute('id', 'stavesmo228298');
stavesmo228298.setBegBarType(VF.Barline.type.NONE);
stavesmo228298.setContext(context);
stavesmo228298.draw();
smo228298v0.draw(context, stavesmo228298);
const stavesmo229672 = new VF.Stave(838, 607, 190);
stavesmo229672.setAttribute('id', 'stavesmo229672');
stavesmo229672.setBegBarType(VF.Barline.type.NONE);
stavesmo229672.setContext(context);
stavesmo229672.draw();
smo229672v0.draw(context, stavesmo229672);
const stavesmo230819 = new VF.Stave(838, 740, 190);
stavesmo230819.setAttribute('id', 'stavesmo230819');
stavesmo230819.setBegBarType(VF.Barline.type.NONE);
stavesmo230819.setContext(context);
stavesmo230819.draw();
smo230819v0.draw(context, stavesmo230819);
const fmtsmo22832011 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo228320v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228320v0ar = [];
const smo228299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228299.setAttribute('id', 'smo228299');
smo228299.addModifier(new VF.Dot(), 0);
const smo228300 = new VF.Annotation('Wäl');
smo228300.setAttribute('id', 'smo228300');
smo228300.setFont('Merriweather', 12, 'normal');
smo228300.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228299.addModifier(smo228300);
smo228300.addClass('lyric lyric-0 lyric-hyphen');
const smo228301 = new VF.Annotation('Mäd');
smo228301.setAttribute('id', 'smo228301');
smo228301.setFont('Merriweather', 12, 'normal');
smo228301.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228299.addModifier(smo228301);
smo228301.addClass('lyric lyric-1 lyric-hyphen');
smo228320v0ar.push(smo228299);
const smo228302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228302.setAttribute('id', 'smo228302');
smo228302.addModifier(new VF.Dot(), 0);
const smo228303 = new VF.Annotation('der');
smo228303.setAttribute('id', 'smo228303');
smo228303.setFont('Merriweather', 12, 'normal');
smo228303.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228302.addModifier(smo228303);
smo228303.addClass('lyric lyric-0');
const smo228304 = new VF.Annotation('chen');
smo228304.setAttribute('id', 'smo228304');
smo228304.setFont('Merriweather', 12, 'normal');
smo228304.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228302.addModifier(smo228304);
smo228304.addClass('lyric lyric-1');
smo228320v0ar.push(smo228302);
smo228320v0.addTickables(smo228320v0ar)
fmtsmo22832011.joinVoices([smo228320v0]);
const fmtsmo22968911 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo229689v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229689v0ar = [];
const smo229673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo229673.setAttribute('id', 'smo229673');
smo229673.addModifier(new VF.Dot(), 0);
smo229673.addModifier(new VF.Dot(), 1);
smo229689v0ar.push(smo229673);
smo229689v0.addTickables(smo229689v0ar)
fmtsmo22968911.joinVoices([smo229689v0]);
const fmtsmo23083911 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo230839v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230839v0ar = [];
const smo230820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230820.setAttribute('id', 'smo230820');
smo230839v0ar.push(smo230820);
const smo230821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230821.setAttribute('id', 'smo230821');
smo230839v0ar.push(smo230821);
const smo230822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230822.setAttribute('id', 'smo230822');
smo230839v0ar.push(smo230822);
const smo230823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230823.setAttribute('id', 'smo230823');
smo230839v0ar.push(smo230823);
smo230839v0.addTickables(smo230839v0ar)
fmtsmo23083911.joinVoices([smo230839v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22832011.format([smo228320v0,smo229689v0,smo230839v0], 170);
const stavesmo228320 = new VF.Stave(1028, 492, 184);
stavesmo228320.setAttribute('id', 'stavesmo228320');
stavesmo228320.setBegBarType(VF.Barline.type.NONE);
stavesmo228320.setContext(context);
stavesmo228320.draw();
smo228320v0.draw(context, stavesmo228320);
const stavesmo229689 = new VF.Stave(1028, 607, 184);
stavesmo229689.setAttribute('id', 'stavesmo229689');
stavesmo229689.setBegBarType(VF.Barline.type.NONE);
stavesmo229689.setContext(context);
stavesmo229689.draw();
smo229689v0.draw(context, stavesmo229689);
const stavesmo230839 = new VF.Stave(1028, 740, 184);
stavesmo230839.setAttribute('id', 'stavesmo230839');
stavesmo230839.setBegBarType(VF.Barline.type.NONE);
stavesmo230839.setContext(context);
stavesmo230839.draw();
smo230839v0.draw(context, stavesmo230839);
const rightsmo231827stavesmo2283202 = new VF.StaveConnector(stavesmo228320, stavesmo230839).setType(0);
rightsmo231827stavesmo2283202.setContext(context).draw();
const fmtsmo22834812 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo228348v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228348v0ar = [];
const smo228321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228321.setAttribute('id', 'smo228321');
const smo228322 = new VF.Annotation('ü');
smo228322.setAttribute('id', 'smo228322');
smo228322.setFont('Merriweather', 12, 'normal');
smo228322.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228321.addModifier(smo228322);
smo228322.addClass('lyric lyric-0 lyric-hyphen');
const smo228323 = new VF.Annotation('schö');
smo228323.setAttribute('id', 'smo228323');
smo228323.setFont('Merriweather', 12, 'normal');
smo228323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228321.addModifier(smo228323);
smo228323.addClass('lyric lyric-1 lyric-hyphen');
smo228348v0ar.push(smo228321);
const smo228324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228324.setAttribute('id', 'smo228324');
const smo228325 = new VF.Annotation('ber');
smo228325.setAttribute('id', 'smo228325');
smo228325.setFont('Merriweather', 12, 'normal');
smo228325.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228324.addModifier(smo228325);
smo228325.addClass('lyric lyric-0 lyric-hyphen');
const smo228326 = new VF.Annotation('new');
smo228326.setAttribute('id', 'smo228326');
smo228326.setFont('Merriweather', 12, 'normal');
smo228326.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228324.addModifier(smo228326);
smo228326.addClass('lyric lyric-1');
smo228348v0ar.push(smo228324);
const smo228327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo228327.setAttribute('id', 'smo228327');
const smo228328 = new VF.Annotation('das');
smo228328.setAttribute('id', 'smo228328');
smo228328.setFont('Merriweather', 12, 'normal');
smo228328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228327.addModifier(smo228328);
smo228328.addClass('lyric lyric-0');
const smo228329 = new VF.Annotation('als');
smo228329.setAttribute('id', 'smo228329');
smo228329.setFont('Merriweather', 12, 'normal');
smo228329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228327.addModifier(smo228329);
smo228329.addClass('lyric lyric-1');
smo228348v0ar.push(smo228327);
const smo228330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228330.setAttribute('id', 'smo228330');
smo228330.addModifier(new VF.Dot(), 0);
const smo228331 = new VF.Annotation('Land;');
smo228331.setAttribute('id', 'smo228331');
smo228331.setFont('Merriweather', 12, 'normal');
smo228331.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228330.addModifier(smo228331);
smo228331.addClass('lyric lyric-0 lyric-hyphen');
const smo228332 = new VF.Annotation('ich');
smo228332.setAttribute('id', 'smo228332');
smo228332.setFont('Merriweather', 12, 'normal');
smo228332.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228330.addModifier(smo228332);
smo228332.addClass('lyric lyric-1');
smo228348v0ar.push(smo228330);
smo228348v0.addTickables(smo228348v0ar)
fmtsmo22834812.joinVoices([smo228348v0]);
const fmtsmo22970912 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo229709v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229709v0ar = [];
const smo229690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo229690.setAttribute('id', 'smo229690');
smo229690.addModifier(new VF.Dot(), 0);
smo229690.addModifier(new VF.Dot(), 1);
smo229709v0ar.push(smo229690);
const smo229691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n","an/4/n"]}'))
smo229691.setAttribute('id', 'smo229691');
smo229709v0ar.push(smo229691);
const smo229692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n","bn/4/n"]}'))
smo229692.setAttribute('id', 'smo229692');
smo229709v0ar.push(smo229692);
const smo229693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n","cn/5/n"]}'))
smo229693.setAttribute('id', 'smo229693');
smo229709v0ar.push(smo229693);
smo229709v0.addTickables(smo229709v0ar)
fmtsmo22970912.joinVoices([smo229709v0]);
const fmtsmo23085912 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo230859v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230859v0ar = [];
const smo230840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230840.setAttribute('id', 'smo230840');
smo230859v0ar.push(smo230840);
const smo230841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230841.setAttribute('id', 'smo230841');
smo230859v0ar.push(smo230841);
const smo230842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230842.setAttribute('id', 'smo230842');
smo230859v0ar.push(smo230842);
const smo230843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230843.setAttribute('id', 'smo230843');
smo230859v0ar.push(smo230843);
smo230859v0.addTickables(smo230859v0ar)
fmtsmo23085912.joinVoices([smo230859v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237873 = smo228321.getStemDirection();
smo228321.setStemDirection(dirsmo237873);
smo228324.setStemDirection(dirsmo237873);
smo228327.setStemDirection(dirsmo237873);
const smo237873 = new VF.Beam([smo228321,smo228324,smo228327]);
const dirsmo237875 = smo229691.getStemDirection();
smo229691.setStemDirection(dirsmo237875);
smo229692.setStemDirection(dirsmo237875);
smo229693.setStemDirection(dirsmo237875);
const smo237875 = new VF.Beam([smo229691,smo229692,smo229693]);
 
// formatting measures in staff group smo231827
fmtsmo22834812.format([smo228348v0,smo229709v0,smo230859v0], 294);
const stavesmo228348 = new VF.Stave(66, 885, 358);
stavesmo228348.setAttribute('id', 'stavesmo228348');
stavesmo228348.setBegBarType(1);
stavesmo228348.addClef('treble');
const keysmo228348 = new VF.KeySignature('G');
keysmo228348.addToStave(stavesmo228348);
stavesmo228348.setContext(context);
stavesmo228348.draw();
smo228348v0.draw(context, stavesmo228348);
smo237873.setContext(context);
smo237873.draw();
const stavesmo229709 = new VF.Stave(66, 1008, 358);
stavesmo229709.setAttribute('id', 'stavesmo229709');
stavesmo229709.setBegBarType(1);
stavesmo229709.addClef('treble');
const keysmo229709 = new VF.KeySignature('G');
keysmo229709.addToStave(stavesmo229709);
stavesmo229709.setContext(context);
stavesmo229709.draw();
smo229709v0.draw(context, stavesmo229709);
smo237875.setContext(context);
smo237875.draw();
const stavesmo230859 = new VF.Stave(66, 1098, 358);
stavesmo230859.setAttribute('id', 'stavesmo230859');
stavesmo230859.setBegBarType(1);
stavesmo230859.addClef('bass');
const keysmo230859 = new VF.KeySignature('G');
keysmo230859.addToStave(stavesmo230859);
stavesmo230859.setContext(context);
stavesmo230859.draw();
smo230859v0.draw(context, stavesmo230859);
const leftsmo231827stavesmo2283482 = new VF.StaveConnector(stavesmo228348, stavesmo230859).setType(1);
leftsmo231827stavesmo2283482.setContext(context).draw();
const fmtsmo22837113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo228371v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228371v0ar = [];
const smo228349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228349.setAttribute('id', 'smo228349');
const smo228351 = new VF.Annotation('-');
smo228351.setAttribute('id', 'smo228351');
smo228351.setFont('Merriweather', 12, 'normal');
smo228351.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228349.addModifier(smo228351);
smo228351.addClass('lyric lyric-1 lyric-hyphen');
smo228371v0ar.push(smo228349);
const smo228352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo228352.setAttribute('id', 'smo228352');
smo228371v0ar.push(smo228352);
const smo228353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228353.setAttribute('id', 'smo228353');
smo228353.addModifier(new VF.Dot(), 0);
const smo228354 = new VF.Annotation('von');
smo228354.setAttribute('id', 'smo228354');
smo228354.setFont('Merriweather', 12, 'normal');
smo228354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228353.addModifier(smo228354);
smo228354.addClass('lyric lyric-0');
const smo228355 = new VF.Annotation('Trotz');
smo228355.setAttribute('id', 'smo228355');
smo228355.setFont('Merriweather', 12, 'normal');
smo228355.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228353.addModifier(smo228355);
smo228355.addClass('lyric lyric-1 lyric-hyphen');
smo228371v0ar.push(smo228353);
smo228371v0.addTickables(smo228371v0ar)
fmtsmo22837113.joinVoices([smo228371v0]);
const fmtsmo22972613 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo229726v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229726v0ar = [];
const smo229710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo229710.setAttribute('id', 'smo229710');
smo229710.addModifier(new VF.Dot(), 0);
smo229710.addModifier(new VF.Dot(), 1);
smo229726v0ar.push(smo229710);
smo229726v0.addTickables(smo229726v0ar)
fmtsmo22972613.joinVoices([smo229726v0]);
const fmtsmo23087913 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo230879v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230879v0ar = [];
const smo230860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230860.setAttribute('id', 'smo230860');
smo230879v0ar.push(smo230860);
const smo230861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230861.setAttribute('id', 'smo230861');
smo230879v0ar.push(smo230861);
const smo230862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230862.setAttribute('id', 'smo230862');
smo230879v0ar.push(smo230862);
const smo230863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n","dn/3/n"]}'))
smo230863.setAttribute('id', 'smo230863');
smo230879v0ar.push(smo230863);
smo230879v0.addTickables(smo230879v0ar)
fmtsmo23087913.joinVoices([smo230879v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22837113.format([smo228371v0,smo229726v0,smo230879v0], 147);
const stavesmo228371 = new VF.Stave(424, 885, 161);
stavesmo228371.setAttribute('id', 'stavesmo228371');
stavesmo228371.setBegBarType(VF.Barline.type.NONE);
stavesmo228371.setContext(context);
stavesmo228371.draw();
smo228371v0.draw(context, stavesmo228371);
const stavesmo229726 = new VF.Stave(424, 1008, 161);
stavesmo229726.setAttribute('id', 'stavesmo229726');
stavesmo229726.setBegBarType(VF.Barline.type.NONE);
stavesmo229726.setContext(context);
stavesmo229726.draw();
smo229726v0.draw(context, stavesmo229726);
const stavesmo230879 = new VF.Stave(424, 1098, 161);
stavesmo230879.setAttribute('id', 'stavesmo230879');
stavesmo230879.setBegBarType(VF.Barline.type.NONE);
stavesmo230879.setContext(context);
stavesmo230879.draw();
smo230879v0.draw(context, stavesmo230879);
const fmtsmo22839014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo228390v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228390v0ar = [];
const smo228372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228372.setAttribute('id', 'smo228372');
smo228372.addModifier(new VF.Dot(), 0);
const smo228373 = new VF.Annotation('fern');
smo228373.setAttribute('id', 'smo228373');
smo228373.setFont('Merriweather', 12, 'normal');
smo228373.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228372.addModifier(smo228373);
smo228373.addClass('lyric lyric-0');
const smo228374 = new VF.Annotation('dem');
smo228374.setAttribute('id', 'smo228374');
smo228374.setFont('Merriweather', 12, 'normal');
smo228374.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228372.addModifier(smo228374);
smo228374.addClass('lyric lyric-1');
smo228390v0ar.push(smo228372);
smo228390v0.addTickables(smo228390v0ar)
fmtsmo22839014.joinVoices([smo228390v0]);
const fmtsmo22974314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo229743v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229743v0ar = [];
const smo229727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo229727.setAttribute('id', 'smo229727');
smo229727.addModifier(new VF.Dot(), 0);
smo229727.addModifier(new VF.Dot(), 1);
smo229743v0ar.push(smo229727);
smo229743v0.addTickables(smo229743v0ar)
fmtsmo22974314.joinVoices([smo229743v0]);
const fmtsmo23090114 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo230901v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230901v0ar = [];
const smo230880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230880.setAttribute('id', 'smo230880');
smo230901v0ar.push(smo230880);
const smo230881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230881.setAttribute('id', 'smo230881');
smo230901v0ar.push(smo230881);
const smo230882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230882.setAttribute('id', 'smo230882');
smo230901v0ar.push(smo230882);
const smo230883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230883.setAttribute('id', 'smo230883');
smo230901v0ar.push(smo230883);
smo230901v0.addTickables(smo230901v0ar)
fmtsmo23090114.joinVoices([smo230901v0]);
const smo230901v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230901v1ar = [];
const smo230884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["dn/4/r"]}'))
smo230884.setAttribute('id', 'smo230884');
smo230884.setStyle({ fillStyle: "#115511" });
smo230884.addModifier(new VF.Dot(), 0);
smo230901v1ar.push(smo230884);
const smo230885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230885.setAttribute('id', 'smo230885');
smo230885.setStyle({ fillStyle: "#115511" });
smo230885.addModifier(new VF.Dot(), 0);
smo230901v1ar.push(smo230885);
smo230901v1.addTickables(smo230901v1ar)
fmtsmo23090114.joinVoices([smo230901v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22839014.format([smo228390v0,smo229743v0,smo230901v0,smo230901v1], 145);
const stavesmo228390 = new VF.Stave(585, 885, 159);
stavesmo228390.setAttribute('id', 'stavesmo228390');
stavesmo228390.setBegBarType(VF.Barline.type.NONE);
stavesmo228390.setContext(context);
stavesmo228390.draw();
smo228390v0.draw(context, stavesmo228390);
const stavesmo229743 = new VF.Stave(585, 1008, 159);
stavesmo229743.setAttribute('id', 'stavesmo229743');
stavesmo229743.setBegBarType(VF.Barline.type.NONE);
stavesmo229743.setContext(context);
stavesmo229743.draw();
smo229743v0.draw(context, stavesmo229743);
const stavesmo230901 = new VF.Stave(585, 1098, 159);
stavesmo230901.setAttribute('id', 'stavesmo230901');
stavesmo230901.setBegBarType(VF.Barline.type.NONE);
stavesmo230901.setContext(context);
stavesmo230901.draw();
smo230901v0.draw(context, stavesmo230901);
smo230901v1.draw(context, stavesmo230901);
const fmtsmo22842015 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo228420v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228420v0ar = [];
const smo228391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228391.setAttribute('id', 'smo228391');
const smo228392 = new VF.Annotation('-');
smo228392.setAttribute('id', 'smo228392');
smo228392.setFont('Merriweather', 12, 'normal');
smo228392.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228391.addModifier(smo228392);
smo228392.addClass('lyric lyric-0 lyric-hyphen');
smo228420v0ar.push(smo228391);
const smo228393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228393.setAttribute('id', 'smo228393');
const smo228394 = new VF.Annotation('er');
smo228394.setAttribute('id', 'smo228394');
smo228394.setFont('Merriweather', 12, 'normal');
smo228394.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228393.addModifier(smo228394);
smo228394.addClass('lyric lyric-0 lyric-hyphen');
const smo228395 = new VF.Annotation('tat');
smo228395.setAttribute('id', 'smo228395');
smo228395.setFont('Merriweather', 12, 'normal');
smo228395.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228393.addModifier(smo228395);
smo228395.addClass('lyric lyric-1');
smo228420v0ar.push(smo228393);
const smo228396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228396.setAttribute('id', 'smo228396');
const smo228397 = new VF.Annotation('kenn');
smo228397.setAttribute('id', 'smo228397');
smo228397.setFont('Merriweather', 12, 'normal');
smo228397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228396.addModifier(smo228397);
smo228397.addClass('lyric lyric-0');
const smo228398 = new VF.Annotation('er');
smo228398.setAttribute('id', 'smo228398');
smo228398.setFont('Merriweather', 12, 'normal');
smo228398.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228396.addModifier(smo228398);
smo228398.addClass('lyric lyric-1');
smo228420v0ar.push(smo228396);
const smo228399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228399.setAttribute('id', 'smo228399');
const smo228400 = new VF.Annotation('ich');
smo228400.setAttribute('id', 'smo228400');
smo228400.setFont('Merriweather', 12, 'normal');
smo228400.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228399.addModifier(smo228400);
smo228400.addClass('lyric lyric-0');
const smo228401 = new VF.Annotation('mir');
smo228401.setAttribute('id', 'smo228401');
smo228401.setFont('Merriweather', 12, 'normal');
smo228401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228399.addModifier(smo228401);
smo228401.addClass('lyric lyric-1');
smo228420v0ar.push(smo228399);
const smo228402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo228402.setAttribute('id', 'smo228402');
const smo228403 = new VF.Annotation('ihn');
smo228403.setAttribute('id', 'smo228403');
smo228403.setFont('Merriweather', 12, 'normal');
smo228403.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228402.addModifier(smo228403);
smo228403.addClass('lyric lyric-0');
const smo228404 = new VF.Annotation('ge');
smo228404.setAttribute('id', 'smo228404');
smo228404.setFont('Merriweather', 12, 'normal');
smo228404.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228402.addModifier(smo228404);
smo228404.addClass('lyric lyric-1 lyric-hyphen');
smo228420v0ar.push(smo228402);
smo228420v0.addTickables(smo228420v0ar)
fmtsmo22842015.joinVoices([smo228420v0]);
const fmtsmo22976015 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo229760v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229760v0ar = [];
const smo229744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/3/n","f#/4/n"]}'))
smo229744.setAttribute('id', 'smo229744');
smo229744.addModifier(new VF.Dot(), 0);
smo229744.addModifier(new VF.Dot(), 1);
smo229760v0ar.push(smo229744);
smo229760v0.addTickables(smo229760v0ar)
fmtsmo22976015.joinVoices([smo229760v0]);
const fmtsmo23092315 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo230923v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230923v0ar = [];
const smo230902 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230902.setAttribute('id', 'smo230902');
smo230923v0ar.push(smo230902);
const smo230903 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230903.setAttribute('id', 'smo230903');
smo230923v0ar.push(smo230903);
const smo230904 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230904.setAttribute('id', 'smo230904');
smo230923v0ar.push(smo230904);
const smo230905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n"]}'))
smo230905.setAttribute('id', 'smo230905');
smo230923v0ar.push(smo230905);
smo230923v0.addTickables(smo230923v0ar)
fmtsmo23092315.joinVoices([smo230923v0]);
const smo230923v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230923v1ar = [];
const smo230906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230906.setAttribute('id', 'smo230906');
smo230906.setStyle({ fillStyle: "#115511" });
smo230906.addModifier(new VF.Dot(), 0);
smo230923v1ar.push(smo230906);
const smo230907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo230907.setAttribute('id', 'smo230907');
smo230907.setStyle({ fillStyle: "#115511" });
smo230907.addModifier(new VF.Dot(), 0);
smo230923v1ar.push(smo230907);
smo230923v1.addTickables(smo230923v1ar)
fmtsmo23092315.joinVoices([smo230923v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237893 = smo228396.getStemDirection();
smo228396.setStemDirection(dirsmo237893);
smo228399.setStemDirection(dirsmo237893);
smo228402.setStemDirection(dirsmo237893);
const smo237893 = new VF.Beam([smo228396,smo228399,smo228402]);
 
// formatting measures in staff group smo231827
fmtsmo22842015.format([smo228420v0,smo229760v0,smo230923v0,smo230923v1], 272);
const stavesmo228420 = new VF.Stave(744, 885, 286);
stavesmo228420.setAttribute('id', 'stavesmo228420');
stavesmo228420.setBegBarType(VF.Barline.type.NONE);
stavesmo228420.setContext(context);
stavesmo228420.draw();
smo228420v0.draw(context, stavesmo228420);
smo237893.setContext(context);
smo237893.draw();
const stavesmo229760 = new VF.Stave(744, 1008, 286);
stavesmo229760.setAttribute('id', 'stavesmo229760');
stavesmo229760.setBegBarType(VF.Barline.type.NONE);
stavesmo229760.setContext(context);
stavesmo229760.draw();
smo229760v0.draw(context, stavesmo229760);
const stavesmo230923 = new VF.Stave(744, 1098, 286);
stavesmo230923.setAttribute('id', 'stavesmo230923');
stavesmo230923.setBegBarType(VF.Barline.type.NONE);
stavesmo230923.setContext(context);
stavesmo230923.draw();
smo230923v0.draw(context, stavesmo230923);
smo230923v1.draw(context, stavesmo230923);
const fmtsmo22843916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo228439v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228439v0ar = [];
const smo228421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228421.setAttribute('id', 'smo228421');
smo228421.addModifier(new VF.Dot(), 0);
const smo228422 = new VF.Annotation('schen');
smo228422.setAttribute('id', 'smo228422');
smo228422.setFont('Merriweather', 12, 'normal');
smo228422.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228421.addModifier(smo228422);
smo228422.addClass('lyric lyric-0');
const smo228423 = new VF.Annotation('stehn');
smo228423.setAttribute('id', 'smo228423');
smo228423.setFont('Merriweather', 12, 'normal');
smo228423.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228421.addModifier(smo228423);
smo228423.addClass('lyric lyric-1');
smo228439v0ar.push(smo228421);
smo228439v0.addTickables(smo228439v0ar)
fmtsmo22843916.joinVoices([smo228439v0]);
const fmtsmo22977716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo229777v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229777v0ar = [];
const smo229761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["bn/3/n","gn/4/n"]}'))
smo229761.setAttribute('id', 'smo229761');
smo229761.addModifier(new VF.Dot(), 0);
smo229761.addModifier(new VF.Dot(), 1);
smo229777v0ar.push(smo229761);
smo229777v0.addTickables(smo229777v0ar)
fmtsmo22977716.joinVoices([smo229777v0]);
const fmtsmo23094816 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo230948v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230948v0ar = [];
const smo230924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230924.setAttribute('id', 'smo230924');
smo230948v0ar.push(smo230924);
const smo230925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230925.setAttribute('id', 'smo230925');
smo230948v0ar.push(smo230925);
const smo230926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230926.setAttribute('id', 'smo230926');
smo230948v0ar.push(smo230926);
const smo230927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230927.setAttribute('id', 'smo230927');
smo230948v0ar.push(smo230927);
smo230948v0.addTickables(smo230948v0ar)
fmtsmo23094816.joinVoices([smo230948v0]);
const smo230948v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230948v1ar = [];
const smo230928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["eb/4/r"]}'))
smo230928.setAttribute('id', 'smo230928');
smo230928.setStyle({ fillStyle: "#115511" });
smo230948v1ar.push(smo230928);
const smo230929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230929.setAttribute('id', 'smo230929');
smo230929.setStyle({ fillStyle: "#115511" });
smo230948v1ar.push(smo230929);
const smo230930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230930.setAttribute('id', 'smo230930');
smo230930.setStyle({ fillStyle: "#115511" });
smo230948v1ar.push(smo230930);
const smo230931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230931.setAttribute('id', 'smo230931');
smo230931.setStyle({ fillStyle: "#115511" });
smo230948v1ar.push(smo230931);
const smo230932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230932.setAttribute('id', 'smo230932');
smo230932.setStyle({ fillStyle: "#115511" });
smo230948v1ar.push(smo230932);
smo230948v1.addTickables(smo230948v1ar)
fmtsmo23094816.joinVoices([smo230948v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237902 = smo230930.getStemDirection();
smo230930.setStemDirection(dirsmo237902);
smo230931.setStemDirection(dirsmo237902);
smo230932.setStemDirection(dirsmo237902);
const smo237902 = new VF.Beam([smo230930,smo230931,smo230932]);
 
// formatting measures in staff group smo231827
fmtsmo22843916.format([smo228439v0,smo229777v0,smo230948v0,smo230948v1], 168);
const stavesmo228439 = new VF.Stave(1030, 885, 182);
stavesmo228439.setAttribute('id', 'stavesmo228439');
stavesmo228439.setBegBarType(VF.Barline.type.NONE);
stavesmo228439.setContext(context);
stavesmo228439.draw();
smo228439v0.draw(context, stavesmo228439);
const stavesmo229777 = new VF.Stave(1030, 1008, 182);
stavesmo229777.setAttribute('id', 'stavesmo229777');
stavesmo229777.setBegBarType(VF.Barline.type.NONE);
stavesmo229777.setContext(context);
stavesmo229777.draw();
smo229777v0.draw(context, stavesmo229777);
const stavesmo230948 = new VF.Stave(1030, 1098, 182);
stavesmo230948.setAttribute('id', 'stavesmo230948');
stavesmo230948.setBegBarType(VF.Barline.type.NONE);
stavesmo230948.setContext(context);
stavesmo230948.draw();
smo230948v0.draw(context, stavesmo230948);
smo230948v1.draw(context, stavesmo230948);
smo237902.setContext(context);
smo237902.draw();
const rightsmo231827stavesmo2284392 = new VF.StaveConnector(stavesmo228439, stavesmo230948).setType(0);
rightsmo231827stavesmo2284392.setContext(context).draw();
const fmtsmo22846917 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo228469v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228469v0ar = [];
const smo228440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo228440.setAttribute('id', 'smo228440');
const smo228441 = new VF.Annotation('-');
smo228441.setAttribute('id', 'smo228441');
smo228441.setFont('Merriweather', 12, 'normal');
smo228441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228440.addModifier(smo228441);
smo228441.addClass('lyric lyric-0 lyric-hyphen');
smo228469v0ar.push(smo228440);
const smo228442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228442.setAttribute('id', 'smo228442');
const smo228443 = new VF.Annotation('den');
smo228443.setAttribute('id', 'smo228443');
smo228443.setFont('Merriweather', 12, 'normal');
smo228443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228442.addModifier(smo228443);
smo228443.addClass('lyric lyric-0');
const smo228444 = new VF.Annotation('er');
smo228444.setAttribute('id', 'smo228444');
smo228444.setFont('Merriweather', 12, 'normal');
smo228444.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228442.addModifier(smo228444);
smo228444.addClass('lyric lyric-1');
smo228469v0ar.push(smo228442);
const smo228445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228445.setAttribute('id', 'smo228445');
const smo228446 = new VF.Annotation('all\'');
smo228446.setAttribute('id', 'smo228446');
smo228446.setFont('Merriweather', 12, 'normal');
smo228446.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228445.addModifier(smo228446);
smo228446.addClass('lyric lyric-0');
const smo228447 = new VF.Annotation('splet');
smo228447.setAttribute('id', 'smo228447');
smo228447.setFont('Merriweather', 12, 'normal');
smo228447.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228445.addModifier(smo228447);
smo228447.addClass('lyric lyric-1');
smo228469v0ar.push(smo228445);
const smo228448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228448.setAttribute('id', 'smo228448');
const smo228449 = new VF.Annotation('sei');
smo228449.setAttribute('id', 'smo228449');
smo228449.setFont('Merriweather', 12, 'normal');
smo228449.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228448.addModifier(smo228449);
smo228449.addClass('lyric lyric-0 lyric-hyphen');
const smo228450 = new VF.Annotation('sei');
smo228450.setAttribute('id', 'smo228450');
smo228450.setFont('Merriweather', 12, 'normal');
smo228450.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228448.addModifier(smo228450);
smo228450.addClass('lyric lyric-1 lyric-hyphen');
smo228469v0ar.push(smo228448);
const smo228451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo228451.setAttribute('id', 'smo228451');
const smo228452 = new VF.Annotation('ne');
smo228452.setAttribute('id', 'smo228452');
smo228452.setFont('Merriweather', 12, 'normal');
smo228452.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228451.addModifier(smo228452);
smo228452.addClass('lyric lyric-0');
const smo228453 = new VF.Annotation('ne');
smo228453.setAttribute('id', 'smo228453');
smo228453.setFont('Merriweather', 12, 'normal');
smo228453.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228451.addModifier(smo228453);
smo228453.addClass('lyric lyric-1');
smo228469v0ar.push(smo228451);
smo228469v0.addTickables(smo228469v0ar)
fmtsmo22846917.joinVoices([smo228469v0]);
const fmtsmo22979617 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo229796v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229796v0ar = [];
const smo229778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229778.setAttribute('id', 'smo229778');
smo229778.addModifier(new VF.Dot(), 0);
smo229796v0ar.push(smo229778);
const smo229779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229779.setAttribute('id', 'smo229779');
smo229796v0ar.push(smo229779);
const smo229780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229780.setAttribute('id', 'smo229780');
smo229796v0ar.push(smo229780);
smo229796v0.addTickables(smo229796v0ar)
fmtsmo22979617.joinVoices([smo229796v0]);
const fmtsmo23096917 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo230969v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230969v0ar = [];
const smo230949 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230949.setAttribute('id', 'smo230949');
smo230969v0ar.push(smo230949);
const smo230950 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230950.setAttribute('id', 'smo230950');
smo230969v0ar.push(smo230950);
const smo230951 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230951.setAttribute('id', 'smo230951');
smo230969v0ar.push(smo230951);
const smo230952 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230952.setAttribute('id', 'smo230952');
smo230969v0ar.push(smo230952);
smo230969v0.addTickables(smo230969v0ar)
fmtsmo23096917.joinVoices([smo230969v0]);
const smo230969v1 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230969v1ar = [];
const smo230953 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/4/n"]}'))
smo230953.setAttribute('id', 'smo230953');
smo230953.setStyle({ fillStyle: "#115511" });
smo230953.addModifier(new VF.Dot(), 0);
smo230969v1ar.push(smo230953);
smo230969v1.addTickables(smo230969v1ar)
fmtsmo23096917.joinVoices([smo230969v1]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237914 = smo228445.getStemDirection();
smo228445.setStemDirection(dirsmo237914);
smo228448.setStemDirection(dirsmo237914);
smo228451.setStemDirection(dirsmo237914);
const smo237914 = new VF.Beam([smo228445,smo228448,smo228451]);
 
// formatting measures in staff group smo231827
fmtsmo22846917.format([smo228469v0,smo229796v0,smo230969v0,smo230969v1], 251);
const stavesmo228469 = new VF.Stave(66, 1238, 316);
stavesmo228469.setAttribute('id', 'stavesmo228469');
stavesmo228469.setBegBarType(1);
stavesmo228469.addClef('treble');
const keysmo228469 = new VF.KeySignature('G');
keysmo228469.addToStave(stavesmo228469);
stavesmo228469.setContext(context);
stavesmo228469.draw();
smo228469v0.draw(context, stavesmo228469);
smo237914.setContext(context);
smo237914.draw();
const stavesmo229796 = new VF.Stave(66, 1350, 316);
stavesmo229796.setAttribute('id', 'stavesmo229796');
stavesmo229796.setBegBarType(1);
stavesmo229796.addClef('treble');
const keysmo229796 = new VF.KeySignature('G');
keysmo229796.addToStave(stavesmo229796);
stavesmo229796.setContext(context);
stavesmo229796.draw();
smo229796v0.draw(context, stavesmo229796);
const stavesmo230969 = new VF.Stave(66, 1490, 316);
stavesmo230969.setAttribute('id', 'stavesmo230969');
stavesmo230969.setBegBarType(1);
stavesmo230969.addClef('bass');
const keysmo230969 = new VF.KeySignature('G');
keysmo230969.addToStave(stavesmo230969);
stavesmo230969.setContext(context);
stavesmo230969.draw();
smo230969v0.draw(context, stavesmo230969);
smo230969v1.draw(context, stavesmo230969);
const leftsmo231827stavesmo2284692 = new VF.StaveConnector(stavesmo228469, stavesmo230969).setType(1);
leftsmo231827stavesmo2284692.setContext(context).draw();
const fmtsmo22849118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo228491v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228491v0ar = [];
const smo228470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228470.setAttribute('id', 'smo228470');
smo228470.addModifier(new VF.Dot(), 0);
const smo228471 = new VF.Annotation('Lie');
smo228471.setAttribute('id', 'smo228471');
smo228471.setFont('Merriweather', 12, 'normal');
smo228471.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228470.addModifier(smo228471);
smo228471.addClass('lyric lyric-0 lyric-hyphen');
const smo228472 = new VF.Annotation('Lie');
smo228472.setAttribute('id', 'smo228472');
smo228472.setFont('Merriweather', 12, 'normal');
smo228472.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228470.addModifier(smo228472);
smo228472.addClass('lyric lyric-1 lyric-hyphen');
smo228491v0ar.push(smo228470);
const smo228473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228473.setAttribute('id', 'smo228473');
smo228473.addModifier(new VF.Dot(), 0);
const smo228474 = new VF.Annotation('der');
smo228474.setAttribute('id', 'smo228474');
smo228474.setFont('Merriweather', 12, 'normal');
smo228474.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228473.addModifier(smo228474);
smo228474.addClass('lyric lyric-0');
const smo228475 = new VF.Annotation('der');
smo228475.setAttribute('id', 'smo228475');
smo228475.setFont('Merriweather', 12, 'normal');
smo228475.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228473.addModifier(smo228475);
smo228475.addClass('lyric lyric-1');
smo228491v0ar.push(smo228473);
smo228491v0.addTickables(smo228491v0ar)
fmtsmo22849118.joinVoices([smo228491v0]);
const fmtsmo22981418 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo229814v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229814v0ar = [];
const smo229797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229797.setAttribute('id', 'smo229797');
smo229797.addModifier(new VF.Dot(), 0);
smo229814v0ar.push(smo229797);
const smo229798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo229798.setAttribute('id', 'smo229798');
smo229798.addModifier(new VF.Dot(), 0);
smo229798.addModifier(new VF.Dot(), 1);
smo229814v0ar.push(smo229798);
smo229814v0.addTickables(smo229814v0ar)
fmtsmo22981418.joinVoices([smo229814v0]);
const fmtsmo23098918 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo230989v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo230989v0ar = [];
const smo230970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230970.setAttribute('id', 'smo230970');
smo230989v0ar.push(smo230970);
const smo230971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230971.setAttribute('id', 'smo230971');
smo230989v0ar.push(smo230971);
const smo230972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230972.setAttribute('id', 'smo230972');
smo230989v0ar.push(smo230972);
const smo230973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230973.setAttribute('id', 'smo230973');
smo230989v0ar.push(smo230973);
smo230989v0.addTickables(smo230989v0ar)
fmtsmo23098918.joinVoices([smo230989v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
 
// formatting measures in staff group smo231827
fmtsmo22849118.format([smo228491v0,smo229814v0,smo230989v0], 134);
const stavesmo228491 = new VF.Stave(382, 1238, 148);
stavesmo228491.setAttribute('id', 'stavesmo228491');
stavesmo228491.setBegBarType(VF.Barline.type.NONE);
stavesmo228491.setContext(context);
stavesmo228491.draw();
smo228491v0.draw(context, stavesmo228491);
const stavesmo229814 = new VF.Stave(382, 1350, 148);
stavesmo229814.setAttribute('id', 'stavesmo229814');
stavesmo229814.setBegBarType(VF.Barline.type.NONE);
stavesmo229814.setContext(context);
stavesmo229814.draw();
smo229814v0.draw(context, stavesmo229814);
const stavesmo230989 = new VF.Stave(382, 1490, 148);
stavesmo230989.setAttribute('id', 'stavesmo230989');
stavesmo230989.setBegBarType(VF.Barline.type.NONE);
stavesmo230989.setContext(context);
stavesmo230989.draw();
smo230989v0.draw(context, stavesmo230989);
const fmtsmo22852119 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo228521v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228521v0ar = [];
const smo228492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo228492.setAttribute('id', 'smo228492');
const smo228493 = new VF.Annotation('-');
smo228493.setAttribute('id', 'smo228493');
smo228493.setFont('Merriweather', 12, 'normal');
smo228493.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228492.addModifier(smo228493);
smo228493.addClass('lyric lyric-0 lyric-hyphen');
smo228521v0ar.push(smo228492);
const smo228494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo228494.setAttribute('id', 'smo228494');
const smo228495 = new VF.Annotation('sie');
smo228495.setAttribute('id', 'smo228495');
smo228495.setFont('Merriweather', 12, 'normal');
smo228495.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228494.addModifier(smo228495);
smo228495.addClass('lyric lyric-0');
const smo228496 = new VF.Annotation('doch');
smo228496.setAttribute('id', 'smo228496');
smo228496.setFont('Merriweather', 12, 'normal');
smo228496.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228494.addModifier(smo228496);
smo228496.addClass('lyric lyric-1');
smo228521v0ar.push(smo228494);
const smo228497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo228497.setAttribute('id', 'smo228497');
const smo228498 = new VF.Annotation('sind');
smo228498.setAttribute('id', 'smo228498');
smo228498.setFont('Merriweather', 12, 'normal');
smo228498.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228497.addModifier(smo228498);
smo228498.addClass('lyric lyric-0');
const smo228499 = new VF.Annotation('im');
smo228499.setAttribute('id', 'smo228499');
smo228499.setFont('Merriweather', 12, 'normal');
smo228499.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228497.addModifier(smo228499);
smo228499.addClass('lyric lyric-1 lyric-hyphen');
smo228521v0ar.push(smo228497);
const smo228500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228500.setAttribute('id', 'smo228500');
const smo228501 = new VF.Annotation('ir');
smo228501.setAttribute('id', 'smo228501');
smo228501.setFont('Merriweather', 12, 'normal');
smo228501.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228500.addModifier(smo228501);
smo228501.addClass('lyric lyric-0');
const smo228502 = new VF.Annotation('mer');
smo228502.setAttribute('id', 'smo228502');
smo228502.setFont('Merriweather', 12, 'normal');
smo228502.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228500.addModifier(smo228502);
smo228502.addClass('lyric lyric-1');
smo228521v0ar.push(smo228500);
const smo228503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo228503.setAttribute('id', 'smo228503');
const smo228504 = new VF.Annotation('e');
smo228504.setAttribute('id', 'smo228504');
smo228504.setFont('Merriweather', 12, 'normal');
smo228504.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228503.addModifier(smo228504);
smo228504.addClass('lyric lyric-0 lyric-hyphen');
const smo228505 = new VF.Annotation('für');
smo228505.setAttribute('id', 'smo228505');
smo228505.setFont('Merriweather', 12, 'normal');
smo228505.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228503.addModifier(smo228505);
smo228505.addClass('lyric lyric-1');
smo228521v0ar.push(smo228503);
smo228521v0.addTickables(smo228521v0ar)
fmtsmo22852119.joinVoices([smo228521v0]);
const fmtsmo22983219 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo229832v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229832v0ar = [];
const smo229815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229815.setAttribute('id', 'smo229815');
smo229815.addModifier(new VF.Dot(), 0);
smo229832v0ar.push(smo229815);
const smo229816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n","f#/4/n"]}'))
smo229816.setAttribute('id', 'smo229816');
smo229816.addModifier(new VF.Dot(), 0);
smo229816.addModifier(new VF.Dot(), 1);
smo229832v0ar.push(smo229816);
smo229832v0.addTickables(smo229832v0ar)
fmtsmo22983219.joinVoices([smo229832v0]);
const fmtsmo23100819 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo231008v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231008v0ar = [];
const smo230990 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230990.setAttribute('id', 'smo230990');
smo231008v0ar.push(smo230990);
const smo230991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stemDirection":1,"autoStem":false,"keys":["dn/3/n"]}'))
smo230991.setAttribute('id', 'smo230991');
smo230991.addModifier(new VF.Dot(), 0);
smo231008v0ar.push(smo230991);
const smo230992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stemDirection":-1,"autoStem":false,"keys":["gn/2/n","dn/3/n"]}'))
smo230992.setAttribute('id', 'smo230992');
smo231008v0ar.push(smo230992);
smo231008v0.addTickables(smo231008v0ar)
fmtsmo23100819.joinVoices([smo231008v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237927 = smo228497.getStemDirection();
smo228497.setStemDirection(dirsmo237927);
smo228500.setStemDirection(dirsmo237927);
smo228503.setStemDirection(dirsmo237927);
const smo237927 = new VF.Beam([smo228497,smo228500,smo228503]);
 
// formatting measures in staff group smo231827
fmtsmo22852119.format([smo228521v0,smo229832v0,smo231008v0], 279);
const stavesmo228521 = new VF.Stave(530, 1238, 293);
stavesmo228521.setAttribute('id', 'stavesmo228521');
stavesmo228521.setBegBarType(VF.Barline.type.NONE);
stavesmo228521.setContext(context);
stavesmo228521.draw();
smo228521v0.draw(context, stavesmo228521);
smo237927.setContext(context);
smo237927.draw();
const stavesmo229832 = new VF.Stave(530, 1350, 293);
stavesmo229832.setAttribute('id', 'stavesmo229832');
stavesmo229832.setBegBarType(VF.Barline.type.NONE);
stavesmo229832.setContext(context);
stavesmo229832.draw();
smo229832v0.draw(context, stavesmo229832);
const stavesmo231008 = new VF.Stave(530, 1490, 293);
stavesmo231008.setAttribute('id', 'stavesmo231008');
stavesmo231008.setBegBarType(VF.Barline.type.NONE);
stavesmo231008.setContext(context);
stavesmo231008.draw();
smo231008v0.draw(context, stavesmo231008);
const fmtsmo22854020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo228540v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228540v0ar = [];
const smo228522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228522.setAttribute('id', 'smo228522');
smo228522.addModifier(new VF.Dot(), 0);
const smo228523 = new VF.Annotation('kannt');
smo228523.setAttribute('id', 'smo228523');
smo228523.setFont('Merriweather', 12, 'normal');
smo228523.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228522.addModifier(smo228523);
smo228523.addClass('lyric lyric-0');
const smo228524 = new VF.Annotation('mich');
smo228524.setAttribute('id', 'smo228524');
smo228524.setFont('Merriweather', 12, 'normal');
smo228524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228522.addModifier(smo228524);
smo228524.addClass('lyric lyric-1');
smo228540v0ar.push(smo228522);
smo228540v0.addTickables(smo228540v0ar)
fmtsmo22854020.joinVoices([smo228540v0]);
const fmtsmo22985320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo229853v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229853v0ar = [];
const smo229833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n","gn/4/n"]}'))
smo229833.setAttribute('id', 'smo229833');
smo229853v0ar.push(smo229833);
const smo229834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229834.setAttribute('id', 'smo229834');
smo229853v0ar.push(smo229834);
const smo229835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo229835.setAttribute('id', 'smo229835');
smo229853v0ar.push(smo229835);
const smo229836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo229836.setAttribute('id', 'smo229836');
smo229853v0ar.push(smo229836);
const smo229837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo229837.setAttribute('id', 'smo229837');
smo229853v0ar.push(smo229837);
smo229853v0.addTickables(smo229853v0ar)
fmtsmo22985320.joinVoices([smo229853v0]);
const fmtsmo23102820 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo231028v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231028v0ar = [];
const smo231009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo231009.setAttribute('id', 'smo231009');
smo231028v0ar.push(smo231009);
const smo231010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo231010.setAttribute('id', 'smo231010');
smo231028v0ar.push(smo231010);
const smo231011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo231011.setAttribute('id', 'smo231011');
smo231028v0ar.push(smo231011);
const smo231012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231012.setAttribute('id', 'smo231012');
smo231012.addModifier(new VF.Dot(), 0);
smo231028v0ar.push(smo231012);
smo231028v0.addTickables(smo231028v0ar)
fmtsmo23102820.joinVoices([smo231028v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237935 = smo229835.getStemDirection();
smo229835.setStemDirection(dirsmo237935);
smo229836.setStemDirection(dirsmo237935);
smo229837.setStemDirection(dirsmo237935);
const smo237935 = new VF.Beam([smo229835,smo229836,smo229837]);
const dirsmo237937 = smo231009.getStemDirection();
smo231009.setStemDirection(dirsmo237937);
smo231010.setStemDirection(dirsmo237937);
smo231011.setStemDirection(dirsmo237937);
const smo237937 = new VF.Beam([smo231009,smo231010,smo231011]);
 
// formatting measures in staff group smo231827
fmtsmo22854020.format([smo228540v0,smo229853v0,smo231028v0], 198);
const stavesmo228540 = new VF.Stave(823, 1238, 212);
stavesmo228540.setAttribute('id', 'stavesmo228540');
stavesmo228540.setBegBarType(VF.Barline.type.NONE);
stavesmo228540.setContext(context);
stavesmo228540.draw();
smo228540v0.draw(context, stavesmo228540);
const stavesmo229853 = new VF.Stave(823, 1350, 212);
stavesmo229853.setAttribute('id', 'stavesmo229853');
stavesmo229853.setBegBarType(VF.Barline.type.NONE);
stavesmo229853.setContext(context);
stavesmo229853.draw();
smo229853v0.draw(context, stavesmo229853);
smo237935.setContext(context);
smo237935.draw();
const stavesmo231028 = new VF.Stave(823, 1490, 212);
stavesmo231028.setAttribute('id', 'stavesmo231028');
stavesmo231028.setBegBarType(VF.Barline.type.NONE);
stavesmo231028.setContext(context);
stavesmo231028.draw();
smo231028v0.draw(context, stavesmo231028);
smo237937.setContext(context);
smo237937.draw();
const fmtsmo22856121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo228561v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo228561v0ar = [];
const smo228541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228541.setAttribute('id', 'smo228541');
smo228541.addModifier(new VF.Dot(), 0);
const smo228542 = new VF.Annotation('-');
smo228542.setAttribute('id', 'smo228542');
smo228542.setFont('Merriweather', 12, 'normal');
smo228542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228541.addModifier(smo228542);
smo228542.addClass('lyric lyric-0 lyric-hyphen');
smo228561v0ar.push(smo228541);
const smo228543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo228543.setAttribute('id', 'smo228543');
smo228543.addModifier(new VF.Dot(), 0);
const smo228544 = new VF.Annotation('Er');
smo228544.setAttribute('id', 'smo228544');
smo228544.setFont('Merriweather', 12, 'normal');
smo228544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228543.addModifier(smo228544);
smo228544.addClass('lyric lyric-0');
const smo228545 = new VF.Annotation('Mein');
smo228545.setAttribute('id', 'smo228545');
smo228545.setFont('Merriweather', 12, 'normal');
smo228545.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo228543.addModifier(smo228545);
smo228545.addClass('lyric lyric-1');
smo228561v0ar.push(smo228543);
smo228561v0.addTickables(smo228561v0ar)
fmtsmo22856121.joinVoices([smo228561v0]);
const fmtsmo22987221 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo229872v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo229872v0ar = [];
const smo229854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo229854.setAttribute('id', 'smo229854');
smo229872v0ar.push(smo229854);
const smo229855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229855.setAttribute('id', 'smo229855');
smo229872v0ar.push(smo229855);
const smo229856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo229856.setAttribute('id', 'smo229856');
smo229856.addModifier(new VF.Dot(), 0);
smo229872v0ar.push(smo229856);
smo229872v0.addTickables(smo229872v0ar)
fmtsmo22987221.joinVoices([smo229872v0]);
const fmtsmo23104921 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo231049v0 = new VF.Voice(JSON.parse('{"numBeats":6,"beatValue":8}')).setMode(VF.Voice.Mode.SOFT);
const smo231049v0ar = [];
const smo231029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo231029.setAttribute('id', 'smo231029');
smo231049v0ar.push(smo231029);
const smo231030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/2/n"]}'))
smo231030.setAttribute('id', 'smo231030');
smo231049v0ar.push(smo231030);
const smo231031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo231031.setAttribute('id', 'smo231031');
smo231049v0ar.push(smo231031);
const smo231032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo231032.setAttribute('id', 'smo231032');
smo231049v0ar.push(smo231032);
const smo231033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo231033.setAttribute('id', 'smo231033');
smo231049v0ar.push(smo231033);
smo231049v0.addTickables(smo231049v0ar)
fmtsmo23104921.joinVoices([smo231049v0]);
// create beam groups and tuplets for format grp smo231827 before formatting
const dirsmo237944 = smo231029.getStemDirection();
smo231029.setStemDirection(dirsmo237944);
smo231030.setStemDirection(dirsmo237944);
smo231031.setStemDirection(dirsmo237944);
const smo237944 = new VF.Beam([smo231029,smo231030,smo231031]);
 
// formatting measures in staff group smo231827
fmtsmo22856121.format([smo228561v0,smo229872v0,smo231049v0], 162);
const stavesmo228561 = new VF.Stave(1035, 1238, 176);
stavesmo228561.setAttribute('id', 'stavesmo228561');
stavesmo228561.setBegBarType(VF.Barline.type.NONE);
stavesmo228561.setContext(context);
stavesmo228561.draw();
smo228561v0.draw(context, stavesmo228561);
const stavesmo229872 = new VF.Stave(1035, 1350, 176);
stavesmo229872.setAttribute('id', 'stavesmo229872');
stavesmo229872.setBegBarType(VF.Barline.type.NONE);
stavesmo229872.setContext(context);
stavesmo229872.draw();
smo229872v0.draw(context, stavesmo229872);
const stavesmo231049 = new VF.Stave(1035, 1490, 176);
stavesmo231049.setAttribute('id', 'stavesmo231049');
stavesmo231049.setBegBarType(VF.Barline.type.NONE);
stavesmo231049.setContext(context);
stavesmo231049.draw();
smo231049v0.draw(context, stavesmo231049);
smo237944.setContext(context);
smo237944.draw();
const rightsmo231827stavesmo2285612 = new VF.StaveConnector(stavesmo228561, stavesmo231049).setType(0);
rightsmo231827stavesmo2285612.setContext(context).draw();
// modifier from 0-12-0-3 to 0-13-0-0
const smo238746 = new VF.StaveTie({ first_note: smo228330, last_note: smo228349, 
          firstNote: smo228330, lastNote: smo228349, first_indices: [0], last_indices: [0]});
smo238746.setContext(context).draw();
// modifier from 0-14-0-0 to 0-15-0-0
const smo238747 = new VF.StaveTie({ first_note: smo228372, last_note: smo228391, 
          firstNote: smo228372, lastNote: smo228391, first_indices: [0], last_indices: [0]});
smo238747.setContext(context).draw();
// modifier from 0-16-0-0 to 0-16-0-0
const smo238748 = new VF.StaveTie({ first_note: smo228421, last_note: smo228421, 
          firstNote: smo228421, lastNote: smo228421, first_indices: [0], last_indices: [0]});
smo238748.setContext(context).draw();
// modifier from 0-18-0-1 to 0-19-0-0
const smo238749 = new VF.StaveTie({ first_note: smo228473, last_note: smo228492, 
          firstNote: smo228473, lastNote: smo228492, first_indices: [0], last_indices: [0]});
smo238749.setContext(context).draw();
// modifier from 0-20-0-0 to 0-21-0-0
const smo238750 = new VF.StaveTie({ first_note: smo228522, last_note: smo228541, 
          firstNote: smo228522, lastNote: smo228541, first_indices: [0], last_indices: [0]});
smo238750.setContext(context).draw();
// modifier from 1-8-0-0 to 1-9-0-0
const smo238751 = new VF.StaveTie({ first_note: smo229622, last_note: smo229639, 
          firstNote: smo229622, lastNote: smo229639, first_indices: [0,1], last_indices: [0,1]});
smo238751.setContext(context).draw();
// modifier from 1-10-0-0 to 1-11-0-0
const smo238752 = new VF.StaveTie({ first_note: smo229656, last_note: smo229673, 
          firstNote: smo229656, lastNote: smo229673, first_indices: [0,1], last_indices: [0,1]});
smo238752.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo238753 = new VF.StaveTie({ first_note: smo229588, last_note: null, 
          firstNote: smo229588, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo238753.setContext(context).draw();
// modifier from 1-6-0-0 to 1-7-0-0
const smo238754 = new VF.StaveTie({ first_note: null, last_note: smo229605, 
          firstNote: null, lastNote: smo229605, first_indices: [0,1], last_indices: [0,1]});
smo238754.setContext(context).draw();
// modifier from 1-4-0-0 to 1-5-0-0
const smo238755 = new VF.StaveTie({ first_note: smo229553, last_note: smo229570, 
          firstNote: smo229553, lastNote: smo229570, first_indices: [0], last_indices: [0]});
smo238755.setContext(context).draw();
// modifier from 2-15-1-0 to 2-15-1-1
const smo238756 = new VF.Curve(smo230906, smo230907, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"positionEnd":1}'));
smo238756.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo228181').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228201').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228202').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228204').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228205').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228207').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228208').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228210').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228211').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228229').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228230').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228251').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228253').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228254').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228256').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228257').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228259').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228260').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228278').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228279').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228282').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228300').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228301').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228304').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228322').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228323').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228325').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228326').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228328').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228329').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228331').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228332').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228351').setAttributeNS('', 'transform', 'translate(0 38)');
context.svg.getElementById('vf-smo228355').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228373').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228374').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228392').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228394').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228395').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228397').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228398').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228400').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228401').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228403').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228404').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228422').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228423').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo228441').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228443').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228444').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228446').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228447').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228449').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228450').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228452').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228453').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228471').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228472').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228475').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo228495').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228496').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228498').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228499').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228501').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228502').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228504').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228505').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228523').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228524').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo228542').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228544').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo228545').setAttributeNS('', 'transform', 'translate(0 15)');
}
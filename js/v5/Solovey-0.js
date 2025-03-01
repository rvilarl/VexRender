// @@ Solovey p 1/2 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo2394510 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo239451v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239451v0ar = [];
const smo239435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239435.setAttribute('id', 'smo239435');
smo239451v0ar.push(smo239435);
smo239451v0.addTickables(smo239451v0ar)
fmtsmo2394510.joinVoices([smo239451v0]);
const fmtsmo2404730 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo240473v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240473v0ar = [];
const smo240456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240456.setAttribute('id', 'smo240456');
smo240473v0ar.push(smo240456);
const smo240457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240457.setAttribute('id', 'smo240457');
smo240473v0ar.push(smo240457);
smo240473v0.addTickables(smo240473v0ar)
fmtsmo2404730.joinVoices([smo240473v0]);
const fmtsmo2414710 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo241471v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241471v0ar = [];
const smo241454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241454.setAttribute('id', 'smo241454');
smo241471v0ar.push(smo241454);
const smo241455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241455.setAttribute('id', 'smo241455');
smo241471v0ar.push(smo241455);
smo241471v0.addTickables(smo241471v0ar)
fmtsmo2414710.joinVoices([smo241471v0]);
const fmtsmo2424250 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo242425v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242425v0ar = [];
const smo242406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242406.setAttribute('id', 'smo242406');
smo242425v0ar.push(smo242406);
const smo242407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242407.setAttribute('id', 'smo242407');
smo242425v0ar.push(smo242407);
const smo242408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242408.setAttribute('id', 'smo242408');
smo242425v0ar.push(smo242408);
const smo242409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242409.setAttribute('id', 'smo242409');
smo242425v0ar.push(smo242409);
smo242425v0.addTickables(smo242425v0ar)
fmtsmo2424250.joinVoices([smo242425v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2394510.format([smo239451v0,smo240473v0,smo241471v0,smo242425v0], 69);
const stavesmo239451 = new VF.Stave(55, 219, 275);
stavesmo239451.setAttribute('id', 'stavesmo239451');
stavesmo239451.setBegBarType(1);
stavesmo239451.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo239451.addClef('treble');
stavesmo239451.addTimeSignature('4/4');
const keysmo239451 = new VF.KeySignature('F');
keysmo239451.addToStave(stavesmo239451);
stavesmo239451.setContext(context);
stavesmo239451.draw();
smo239451v0.draw(context, stavesmo239451);
const stavesmo240473 = new VF.Stave(55, 334, 275);
stavesmo240473.setAttribute('id', 'stavesmo240473');
stavesmo240473.setBegBarType(1);
stavesmo240473.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo240473.addClef('treble');
stavesmo240473.addTimeSignature('4/4');
const keysmo240473 = new VF.KeySignature('F');
keysmo240473.addToStave(stavesmo240473);
stavesmo240473.setContext(context);
stavesmo240473.draw();
smo240473v0.draw(context, stavesmo240473);
const stavesmo241471 = new VF.Stave(55, 445, 275);
stavesmo241471.setAttribute('id', 'stavesmo241471');
stavesmo241471.setBegBarType(1);
stavesmo241471.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo241471.addClef('treble');
stavesmo241471.addTimeSignature('4/4');
const keysmo241471 = new VF.KeySignature('F');
keysmo241471.addToStave(stavesmo241471);
stavesmo241471.setContext(context);
stavesmo241471.draw();
smo241471v0.draw(context, stavesmo241471);
const stavesmo242425 = new VF.Stave(55, 556, 275);
stavesmo242425.setAttribute('id', 'stavesmo242425');
stavesmo242425.setBegBarType(1);
stavesmo242425.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo242425.addClef('bass');
stavesmo242425.addTimeSignature('4/4');
const keysmo242425 = new VF.KeySignature('F');
keysmo242425.addToStave(stavesmo242425);
stavesmo242425.setContext(context);
stavesmo242425.draw();
smo242425v0.draw(context, stavesmo242425);
const leftsmo243368stavesmo2394513 = new VF.StaveConnector(stavesmo239451, stavesmo242425).setType(1);
leftsmo243368stavesmo2394513.setContext(context).draw();
const fmtsmo2394681 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo239468v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239468v0ar = [];
const smo239452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239452.setAttribute('id', 'smo239452');
smo239468v0ar.push(smo239452);
smo239468v0.addTickables(smo239468v0ar)
fmtsmo2394681.joinVoices([smo239468v0]);
const fmtsmo2404921 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo240492v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240492v0ar = [];
const smo240474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240474.setAttribute('id', 'smo240474');
smo240492v0ar.push(smo240474);
const smo240475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240475.setAttribute('id', 'smo240475');
smo240492v0ar.push(smo240475);
const smo240476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240476.setAttribute('id', 'smo240476');
smo240492v0ar.push(smo240476);
smo240492v0.addTickables(smo240492v0ar)
fmtsmo2404921.joinVoices([smo240492v0]);
const fmtsmo2414891 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo241489v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241489v0ar = [];
const smo241472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241472.setAttribute('id', 'smo241472');
smo241489v0ar.push(smo241472);
const smo241473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241473.setAttribute('id', 'smo241473');
smo241489v0ar.push(smo241473);
smo241489v0.addTickables(smo241489v0ar)
fmtsmo2414891.joinVoices([smo241489v0]);
const fmtsmo2424451 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo242445v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242445v0ar = [];
const smo242426 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242426.setAttribute('id', 'smo242426');
smo242445v0ar.push(smo242426);
const smo242427 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242427.setAttribute('id', 'smo242427');
smo242445v0ar.push(smo242427);
const smo242428 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242428.setAttribute('id', 'smo242428');
smo242445v0ar.push(smo242428);
const smo242429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242429.setAttribute('id', 'smo242429');
smo242445v0ar.push(smo242429);
smo242445v0.addTickables(smo242445v0ar)
fmtsmo2424451.joinVoices([smo242445v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2394681.format([smo239468v0,smo240492v0,smo241489v0,smo242445v0], 88);
const stavesmo239468 = new VF.Stave(330, 219, 102);
stavesmo239468.setAttribute('id', 'stavesmo239468');
stavesmo239468.setBegBarType(VF.Barline.type.NONE);
stavesmo239468.setContext(context);
stavesmo239468.draw();
smo239468v0.draw(context, stavesmo239468);
const stavesmo240492 = new VF.Stave(330, 334, 102);
stavesmo240492.setAttribute('id', 'stavesmo240492');
stavesmo240492.setBegBarType(VF.Barline.type.NONE);
stavesmo240492.setContext(context);
stavesmo240492.draw();
smo240492v0.draw(context, stavesmo240492);
const stavesmo241489 = new VF.Stave(330, 445, 102);
stavesmo241489.setAttribute('id', 'stavesmo241489');
stavesmo241489.setBegBarType(VF.Barline.type.NONE);
stavesmo241489.setContext(context);
stavesmo241489.draw();
smo241489v0.draw(context, stavesmo241489);
const stavesmo242445 = new VF.Stave(330, 556, 102);
stavesmo242445.setAttribute('id', 'stavesmo242445');
stavesmo242445.setBegBarType(VF.Barline.type.NONE);
stavesmo242445.setContext(context);
stavesmo242445.draw();
smo242445v0.draw(context, stavesmo242445);
const fmtsmo2394852 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo239485v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239485v0ar = [];
const smo239469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239469.setAttribute('id', 'smo239469');
smo239485v0ar.push(smo239469);
smo239485v0.addTickables(smo239485v0ar)
fmtsmo2394852.joinVoices([smo239485v0]);
const fmtsmo2405112 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo240511v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240511v0ar = [];
const smo240493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240493.setAttribute('id', 'smo240493');
smo240511v0ar.push(smo240493);
const smo240494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo240494.setAttribute('id', 'smo240494');
const smo2404940acc = new VF.Accidental('n');
smo240494.addModifier(smo2404940acc, 0);
smo240511v0ar.push(smo240494);
const smo240495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo240495.setAttribute('id', 'smo240495');
const smo2404950acc = new VF.Accidental('#');
smo240495.addModifier(smo2404950acc, 0);
smo240511v0ar.push(smo240495);
smo240511v0.addTickables(smo240511v0ar)
fmtsmo2405112.joinVoices([smo240511v0]);
const fmtsmo2415072 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo241507v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241507v0ar = [];
const smo241490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241490.setAttribute('id', 'smo241490');
smo241507v0ar.push(smo241490);
const smo241491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241491.setAttribute('id', 'smo241491');
smo241507v0ar.push(smo241491);
smo241507v0.addTickables(smo241507v0ar)
fmtsmo2415072.joinVoices([smo241507v0]);
const fmtsmo2424652 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo242465v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242465v0ar = [];
const smo242446 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242446.setAttribute('id', 'smo242446');
smo242465v0ar.push(smo242446);
const smo242447 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242447.setAttribute('id', 'smo242447');
smo242465v0ar.push(smo242447);
const smo242448 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242448.setAttribute('id', 'smo242448');
smo242465v0ar.push(smo242448);
const smo242449 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242449.setAttribute('id', 'smo242449');
smo242465v0ar.push(smo242449);
smo242465v0.addTickables(smo242465v0ar)
fmtsmo2424652.joinVoices([smo242465v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2394852.format([smo239485v0,smo240511v0,smo241507v0,smo242465v0], 105);
const stavesmo239485 = new VF.Stave(432, 219, 119);
stavesmo239485.setAttribute('id', 'stavesmo239485');
stavesmo239485.setBegBarType(VF.Barline.type.NONE);
stavesmo239485.setContext(context);
stavesmo239485.draw();
smo239485v0.draw(context, stavesmo239485);
const stavesmo240511 = new VF.Stave(432, 334, 119);
stavesmo240511.setAttribute('id', 'stavesmo240511');
stavesmo240511.setBegBarType(VF.Barline.type.NONE);
stavesmo240511.setContext(context);
stavesmo240511.draw();
smo240511v0.draw(context, stavesmo240511);
const stavesmo241507 = new VF.Stave(432, 445, 119);
stavesmo241507.setAttribute('id', 'stavesmo241507');
stavesmo241507.setBegBarType(VF.Barline.type.NONE);
stavesmo241507.setContext(context);
stavesmo241507.draw();
smo241507v0.draw(context, stavesmo241507);
const stavesmo242465 = new VF.Stave(432, 556, 119);
stavesmo242465.setAttribute('id', 'stavesmo242465');
stavesmo242465.setBegBarType(VF.Barline.type.NONE);
stavesmo242465.setContext(context);
stavesmo242465.draw();
smo242465v0.draw(context, stavesmo242465);
const fmtsmo2395023 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo239502v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239502v0ar = [];
const smo239486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239486.setAttribute('id', 'smo239486');
smo239502v0ar.push(smo239486);
smo239502v0.addTickables(smo239502v0ar)
fmtsmo2395023.joinVoices([smo239502v0]);
const fmtsmo2405293 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo240529v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240529v0ar = [];
const smo240512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240512.setAttribute('id', 'smo240512');
smo240529v0ar.push(smo240512);
const smo240513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240513.setAttribute('id', 'smo240513');
smo240529v0ar.push(smo240513);
smo240529v0.addTickables(smo240529v0ar)
fmtsmo2405293.joinVoices([smo240529v0]);
const fmtsmo2415253 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo241525v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241525v0ar = [];
const smo241508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241508.setAttribute('id', 'smo241508');
smo241508.addModifier(new VF.Dot(), 0);
smo241525v0ar.push(smo241508);
const smo241509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241509.setAttribute('id', 'smo241509');
smo241525v0ar.push(smo241509);
smo241525v0.addTickables(smo241525v0ar)
fmtsmo2415253.joinVoices([smo241525v0]);
const fmtsmo2424853 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo242485v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242485v0ar = [];
const smo242466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242466.setAttribute('id', 'smo242466');
smo242485v0ar.push(smo242466);
const smo242467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242467.setAttribute('id', 'smo242467');
smo242485v0ar.push(smo242467);
const smo242468 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242468.setAttribute('id', 'smo242468');
smo242485v0ar.push(smo242468);
const smo242469 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242469.setAttribute('id', 'smo242469');
smo242485v0ar.push(smo242469);
smo242485v0.addTickables(smo242485v0ar)
fmtsmo2424853.joinVoices([smo242485v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2395023.format([smo239502v0,smo240529v0,smo241525v0,smo242485v0], 102);
const stavesmo239502 = new VF.Stave(551, 219, 116);
stavesmo239502.setAttribute('id', 'stavesmo239502');
stavesmo239502.setBegBarType(VF.Barline.type.NONE);
stavesmo239502.setContext(context);
stavesmo239502.draw();
smo239502v0.draw(context, stavesmo239502);
const stavesmo240529 = new VF.Stave(551, 334, 116);
stavesmo240529.setAttribute('id', 'stavesmo240529');
stavesmo240529.setBegBarType(VF.Barline.type.NONE);
stavesmo240529.setContext(context);
stavesmo240529.draw();
smo240529v0.draw(context, stavesmo240529);
const stavesmo241525 = new VF.Stave(551, 445, 116);
stavesmo241525.setAttribute('id', 'stavesmo241525');
stavesmo241525.setBegBarType(VF.Barline.type.NONE);
stavesmo241525.setContext(context);
stavesmo241525.draw();
smo241525v0.draw(context, stavesmo241525);
const stavesmo242485 = new VF.Stave(551, 556, 116);
stavesmo242485.setAttribute('id', 'stavesmo242485');
stavesmo242485.setBegBarType(VF.Barline.type.NONE);
stavesmo242485.setContext(context);
stavesmo242485.draw();
smo242485v0.draw(context, stavesmo242485);
const fmtsmo2395194 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo239519v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239519v0ar = [];
const smo239503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239503.setAttribute('id', 'smo239503');
smo239519v0ar.push(smo239503);
smo239519v0.addTickables(smo239519v0ar)
fmtsmo2395194.joinVoices([smo239519v0]);
const fmtsmo2405474 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo240547v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240547v0ar = [];
const smo240530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240530.setAttribute('id', 'smo240530');
smo240547v0ar.push(smo240530);
const smo240531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240531.setAttribute('id', 'smo240531');
smo240547v0ar.push(smo240531);
smo240547v0.addTickables(smo240547v0ar)
fmtsmo2405474.joinVoices([smo240547v0]);
const fmtsmo2415434 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo241543v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241543v0ar = [];
const smo241526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241526.setAttribute('id', 'smo241526');
smo241543v0ar.push(smo241526);
const smo241527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241527.setAttribute('id', 'smo241527');
smo241543v0ar.push(smo241527);
smo241543v0.addTickables(smo241543v0ar)
fmtsmo2415434.joinVoices([smo241543v0]);
const fmtsmo2425054 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo242505v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242505v0ar = [];
const smo242486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242486.setAttribute('id', 'smo242486');
smo242505v0ar.push(smo242486);
const smo242487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242487.setAttribute('id', 'smo242487');
smo242505v0ar.push(smo242487);
const smo242488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242488.setAttribute('id', 'smo242488');
smo242505v0ar.push(smo242488);
const smo242489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo242489.setAttribute('id', 'smo242489');
const smo2424890acc = new VF.Accidental('#');
smo242489.addModifier(smo2424890acc, 0);
smo242505v0ar.push(smo242489);
smo242505v0.addTickables(smo242505v0ar)
fmtsmo2425054.joinVoices([smo242505v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2395194.format([smo239519v0,smo240547v0,smo241543v0,smo242505v0], 98);
const stavesmo239519 = new VF.Stave(667, 219, 112);
stavesmo239519.setAttribute('id', 'stavesmo239519');
stavesmo239519.setBegBarType(VF.Barline.type.NONE);
stavesmo239519.setContext(context);
stavesmo239519.draw();
smo239519v0.draw(context, stavesmo239519);
const stavesmo240547 = new VF.Stave(667, 334, 112);
stavesmo240547.setAttribute('id', 'stavesmo240547');
stavesmo240547.setBegBarType(VF.Barline.type.NONE);
stavesmo240547.setContext(context);
stavesmo240547.draw();
smo240547v0.draw(context, stavesmo240547);
const stavesmo241543 = new VF.Stave(667, 445, 112);
stavesmo241543.setAttribute('id', 'stavesmo241543');
stavesmo241543.setBegBarType(VF.Barline.type.NONE);
stavesmo241543.setContext(context);
stavesmo241543.draw();
smo241543v0.draw(context, stavesmo241543);
const stavesmo242505 = new VF.Stave(667, 556, 112);
stavesmo242505.setAttribute('id', 'stavesmo242505');
stavesmo242505.setBegBarType(VF.Barline.type.NONE);
stavesmo242505.setContext(context);
stavesmo242505.draw();
smo242505v0.draw(context, stavesmo242505);
const fmtsmo2395365 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo239536v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239536v0ar = [];
const smo239520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239520.setAttribute('id', 'smo239520');
smo239536v0ar.push(smo239520);
smo239536v0.addTickables(smo239536v0ar)
fmtsmo2395365.joinVoices([smo239536v0]);
const fmtsmo2405665 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo240566v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240566v0ar = [];
const smo240548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240548.setAttribute('id', 'smo240548');
smo240566v0ar.push(smo240548);
const smo240549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240549.setAttribute('id', 'smo240549');
smo240566v0ar.push(smo240549);
const smo240550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo240550.setAttribute('id', 'smo240550');
smo240566v0ar.push(smo240550);
smo240566v0.addTickables(smo240566v0ar)
fmtsmo2405665.joinVoices([smo240566v0]);
const fmtsmo2415625 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo241562v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241562v0ar = [];
const smo241544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241544.setAttribute('id', 'smo241544');
smo241562v0ar.push(smo241544);
const smo241545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241545.setAttribute('id', 'smo241545');
smo241562v0ar.push(smo241545);
const smo241546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241546.setAttribute('id', 'smo241546');
smo241562v0ar.push(smo241546);
smo241562v0.addTickables(smo241562v0ar)
fmtsmo2415625.joinVoices([smo241562v0]);
const fmtsmo2425255 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo242525v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242525v0ar = [];
const smo242506 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242506.setAttribute('id', 'smo242506');
smo242525v0ar.push(smo242506);
const smo242507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242507.setAttribute('id', 'smo242507');
smo242525v0ar.push(smo242507);
const smo242508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242508.setAttribute('id', 'smo242508');
smo242525v0ar.push(smo242508);
const smo242509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242509.setAttribute('id', 'smo242509');
smo242525v0ar.push(smo242509);
smo242525v0.addTickables(smo242525v0ar)
fmtsmo2425255.joinVoices([smo242525v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2395365.format([smo239536v0,smo240566v0,smo241562v0,smo242525v0], 88);
const stavesmo239536 = new VF.Stave(779, 219, 102);
stavesmo239536.setAttribute('id', 'stavesmo239536');
stavesmo239536.setBegBarType(VF.Barline.type.NONE);
stavesmo239536.setContext(context);
stavesmo239536.draw();
smo239536v0.draw(context, stavesmo239536);
const stavesmo240566 = new VF.Stave(779, 334, 102);
stavesmo240566.setAttribute('id', 'stavesmo240566');
stavesmo240566.setBegBarType(VF.Barline.type.NONE);
stavesmo240566.setContext(context);
stavesmo240566.draw();
smo240566v0.draw(context, stavesmo240566);
const stavesmo241562 = new VF.Stave(779, 445, 102);
stavesmo241562.setAttribute('id', 'stavesmo241562');
stavesmo241562.setBegBarType(VF.Barline.type.NONE);
stavesmo241562.setContext(context);
stavesmo241562.draw();
smo241562v0.draw(context, stavesmo241562);
const stavesmo242525 = new VF.Stave(779, 556, 102);
stavesmo242525.setAttribute('id', 'stavesmo242525');
stavesmo242525.setBegBarType(VF.Barline.type.NONE);
stavesmo242525.setContext(context);
stavesmo242525.draw();
smo242525v0.draw(context, stavesmo242525);
const fmtsmo2395536 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo239553v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239553v0ar = [];
const smo239537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239537.setAttribute('id', 'smo239537');
smo239553v0ar.push(smo239537);
smo239553v0.addTickables(smo239553v0ar)
fmtsmo2395536.joinVoices([smo239553v0]);
const fmtsmo2405896 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo240589v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240589v0ar = [];
const smo240567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240567.setAttribute('id', 'smo240567');
smo240589v0ar.push(smo240567);
const smo240568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240568.setAttribute('id', 'smo240568');
smo240589v0ar.push(smo240568);
const smo240569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240569.setAttribute('id', 'smo240569');
smo240589v0ar.push(smo240569);
const smo240570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo240570.setAttribute('id', 'smo240570');
const smo2405700acc = new VF.Accidental('#');
smo240570.addModifier(smo2405700acc, 0);
smo240589v0ar.push(smo240570);
const smo240571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240571.setAttribute('id', 'smo240571');
smo240589v0ar.push(smo240571);
const smo240572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240572.setAttribute('id', 'smo240572');
smo240589v0ar.push(smo240572);
const smo240573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240573.setAttribute('id', 'smo240573');
smo240589v0ar.push(smo240573);
smo240589v0.addTickables(smo240589v0ar)
fmtsmo2405896.joinVoices([smo240589v0]);
const fmtsmo2415826 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo241582v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241582v0ar = [];
const smo241563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241563.setAttribute('id', 'smo241563');
smo241582v0ar.push(smo241563);
const smo241564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241564.setAttribute('id', 'smo241564');
smo241582v0ar.push(smo241564);
const smo241565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241565.setAttribute('id', 'smo241565');
smo241582v0ar.push(smo241565);
const smo241566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241566.setAttribute('id', 'smo241566');
smo241582v0ar.push(smo241566);
smo241582v0.addTickables(smo241582v0ar)
fmtsmo2415826.joinVoices([smo241582v0]);
const fmtsmo2425456 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo242545v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242545v0ar = [];
const smo242526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242526.setAttribute('id', 'smo242526');
smo242545v0ar.push(smo242526);
const smo242527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242527.setAttribute('id', 'smo242527');
smo242545v0ar.push(smo242527);
const smo242528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242528.setAttribute('id', 'smo242528');
smo242545v0ar.push(smo242528);
const smo242529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242529.setAttribute('id', 'smo242529');
smo242545v0ar.push(smo242529);
smo242545v0.addTickables(smo242545v0ar)
fmtsmo2425456.joinVoices([smo242545v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249690 = smo240568.getStemDirection();
smo240568.setStemDirection(dirsmo249690);
smo240569.setStemDirection(dirsmo249690);
smo240570.setStemDirection(dirsmo249690);
smo240571.setStemDirection(dirsmo249690);
const smo249690 = new VF.Beam([smo240568,smo240569,smo240570,smo240571]);
 
// formatting measures in staff group smo243368
fmtsmo2395536.format([smo239553v0,smo240589v0,smo241582v0,smo242545v0], 167);
const stavesmo239553 = new VF.Stave(881, 219, 181);
stavesmo239553.setAttribute('id', 'stavesmo239553');
stavesmo239553.setBegBarType(VF.Barline.type.NONE);
stavesmo239553.setContext(context);
stavesmo239553.draw();
smo239553v0.draw(context, stavesmo239553);
const stavesmo240589 = new VF.Stave(881, 334, 181);
stavesmo240589.setAttribute('id', 'stavesmo240589');
stavesmo240589.setBegBarType(VF.Barline.type.NONE);
stavesmo240589.setContext(context);
stavesmo240589.draw();
smo240589v0.draw(context, stavesmo240589);
smo249690.setContext(context);
smo249690.draw();
const stavesmo241582 = new VF.Stave(881, 445, 181);
stavesmo241582.setAttribute('id', 'stavesmo241582');
stavesmo241582.setBegBarType(VF.Barline.type.NONE);
stavesmo241582.setContext(context);
stavesmo241582.draw();
smo241582v0.draw(context, stavesmo241582);
const stavesmo242545 = new VF.Stave(881, 556, 181);
stavesmo242545.setAttribute('id', 'stavesmo242545');
stavesmo242545.setBegBarType(VF.Barline.type.NONE);
stavesmo242545.setContext(context);
stavesmo242545.draw();
smo242545v0.draw(context, stavesmo242545);
const fmtsmo2395707 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo239570v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239570v0ar = [];
const smo239554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239554.setAttribute('id', 'smo239554');
smo239570v0ar.push(smo239554);
smo239570v0.addTickables(smo239570v0ar)
fmtsmo2395707.joinVoices([smo239570v0]);
const fmtsmo2406107 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo240610v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240610v0ar = [];
const smo240590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240590.setAttribute('id', 'smo240590');
smo240590.addModifier(new VF.Dot(), 0);
smo240610v0ar.push(smo240590);
const smo240591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240591.setAttribute('id', 'smo240591');
smo240610v0ar.push(smo240591);
const smo240592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240592.setAttribute('id', 'smo240592');
smo240610v0ar.push(smo240592);
const smo240593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240593.setAttribute('id', 'smo240593');
smo240610v0ar.push(smo240593);
const smo240594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240594.setAttribute('id', 'smo240594');
smo240610v0ar.push(smo240594);
smo240610v0.addTickables(smo240610v0ar)
fmtsmo2406107.joinVoices([smo240610v0]);
const fmtsmo2416017 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo241601v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241601v0ar = [];
const smo241583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241583.setAttribute('id', 'smo241583');
smo241601v0ar.push(smo241583);
const smo241584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241584.setAttribute('id', 'smo241584');
smo241601v0ar.push(smo241584);
const smo241585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241585.setAttribute('id', 'smo241585');
smo241601v0ar.push(smo241585);
smo241601v0.addTickables(smo241601v0ar)
fmtsmo2416017.joinVoices([smo241601v0]);
const fmtsmo2425637 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo242563v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242563v0ar = [];
const smo242546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242546.setAttribute('id', 'smo242546');
smo242563v0ar.push(smo242546);
const smo242547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo242547.setAttribute('id', 'smo242547');
smo242563v0ar.push(smo242547);
smo242563v0.addTickables(smo242563v0ar)
fmtsmo2425637.joinVoices([smo242563v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249699 = smo240591.getStemDirection();
smo240591.setStemDirection(dirsmo249699);
smo240592.setStemDirection(dirsmo249699);
const smo249699 = new VF.Beam([smo240591,smo240592]);
 
// formatting measures in staff group smo243368
fmtsmo2395707.format([smo239570v0,smo240610v0,smo241601v0,smo242563v0], 125);
const stavesmo239570 = new VF.Stave(1062, 219, 139);
stavesmo239570.setAttribute('id', 'stavesmo239570');
stavesmo239570.setBegBarType(VF.Barline.type.NONE);
stavesmo239570.setContext(context);
stavesmo239570.draw();
smo239570v0.draw(context, stavesmo239570);
const stavesmo240610 = new VF.Stave(1062, 334, 139);
stavesmo240610.setAttribute('id', 'stavesmo240610');
stavesmo240610.setBegBarType(VF.Barline.type.NONE);
stavesmo240610.setContext(context);
stavesmo240610.draw();
smo240610v0.draw(context, stavesmo240610);
smo249699.setContext(context);
smo249699.draw();
const stavesmo241601 = new VF.Stave(1062, 445, 139);
stavesmo241601.setAttribute('id', 'stavesmo241601');
stavesmo241601.setBegBarType(VF.Barline.type.NONE);
stavesmo241601.setContext(context);
stavesmo241601.draw();
smo241601v0.draw(context, stavesmo241601);
const stavesmo242563 = new VF.Stave(1062, 556, 139);
stavesmo242563.setAttribute('id', 'stavesmo242563');
stavesmo242563.setBegBarType(VF.Barline.type.NONE);
stavesmo242563.setContext(context);
stavesmo242563.draw();
smo242563v0.draw(context, stavesmo242563);
const fmtsmo2395908 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo239590v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239590v0ar = [];
const smo239571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239571.setAttribute('id', 'smo239571');
const smo239572 = new VF.Annotation('Со');
smo239572.setAttribute('id', 'smo239572');
smo239572.setFont('Merriweather', 12.1, 'normal');
smo239572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239571.addModifier(smo239572);
smo239572.addClass('lyric lyric-0 lyric-hyphen');
smo239590v0ar.push(smo239571);
const smo239573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239573.setAttribute('id', 'smo239573');
const smo239574 = new VF.Annotation('ло');
smo239574.setAttribute('id', 'smo239574');
smo239574.setFont('Merriweather', 12.1, 'normal');
smo239574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239573.addModifier(smo239574);
smo239574.addClass('lyric lyric-0');
smo239590v0ar.push(smo239573);
smo239590v0.addTickables(smo239590v0ar)
fmtsmo2395908.joinVoices([smo239590v0]);
const fmtsmo2406308 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo240630v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240630v0ar = [];
const smo240611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240611.setAttribute('id', 'smo240611');
smo240630v0ar.push(smo240611);
const smo240612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240612.setAttribute('id', 'smo240612');
smo240630v0ar.push(smo240612);
const smo240613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240613.setAttribute('id', 'smo240613');
smo240630v0ar.push(smo240613);
const smo240614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240614.setAttribute('id', 'smo240614');
smo240630v0ar.push(smo240614);
smo240630v0.addTickables(smo240630v0ar)
fmtsmo2406308.joinVoices([smo240630v0]);
const fmtsmo2416218 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo241621v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241621v0ar = [];
const smo241602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241602.setAttribute('id', 'smo241602');
smo241621v0ar.push(smo241602);
const smo241603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241603.setAttribute('id', 'smo241603');
smo241621v0ar.push(smo241603);
const smo241604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241604.setAttribute('id', 'smo241604');
smo241621v0ar.push(smo241604);
const smo241605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241605.setAttribute('id', 'smo241605');
smo241621v0ar.push(smo241605);
smo241621v0.addTickables(smo241621v0ar)
fmtsmo2416218.joinVoices([smo241621v0]);
const fmtsmo2425838 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo242583v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242583v0ar = [];
const smo242564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242564.setAttribute('id', 'smo242564');
smo242583v0ar.push(smo242564);
const smo242565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242565.setAttribute('id', 'smo242565');
smo242583v0ar.push(smo242565);
const smo242566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242566.setAttribute('id', 'smo242566');
smo242583v0ar.push(smo242566);
const smo242567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242567.setAttribute('id', 'smo242567');
smo242583v0ar.push(smo242567);
smo242583v0.addTickables(smo242583v0ar)
fmtsmo2425838.joinVoices([smo242583v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2395908.format([smo239590v0,smo240630v0,smo241621v0,smo242583v0], 149);
const stavesmo239590 = new VF.Stave(1201, 219, 172);
stavesmo239590.setAttribute('id', 'stavesmo239590');
stavesmo239590.setBegBarType(4);
stavesmo239590.setContext(context);
stavesmo239590.draw();
smo239590v0.draw(context, stavesmo239590);
const stavesmo240630 = new VF.Stave(1201, 334, 172);
stavesmo240630.setAttribute('id', 'stavesmo240630');
stavesmo240630.setBegBarType(4);
stavesmo240630.setContext(context);
stavesmo240630.draw();
smo240630v0.draw(context, stavesmo240630);
const stavesmo241621 = new VF.Stave(1201, 445, 172);
stavesmo241621.setAttribute('id', 'stavesmo241621');
stavesmo241621.setBegBarType(4);
stavesmo241621.setContext(context);
stavesmo241621.draw();
smo241621v0.draw(context, stavesmo241621);
const stavesmo242583 = new VF.Stave(1201, 556, 172);
stavesmo242583.setAttribute('id', 'stavesmo242583');
stavesmo242583.setBegBarType(4);
stavesmo242583.setContext(context);
stavesmo242583.draw();
smo242583v0.draw(context, stavesmo242583);
const rightsmo243368stavesmo2395903 = new VF.StaveConnector(stavesmo239590, stavesmo242583).setType(0);
rightsmo243368stavesmo2395903.setContext(context).draw();
const fmtsmo2396129 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo239612v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239612v0ar = [];
const smo239591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239591.setAttribute('id', 'smo239591');
const smo239592 = new VF.Annotation('вей,');
smo239592.setAttribute('id', 'smo239592');
smo239592.setFont('Merriweather', 12.1, 'normal');
smo239592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239591.addModifier(smo239592);
smo239592.addClass('lyric lyric-0');
smo239612v0ar.push(smo239591);
const smo239593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239593.setAttribute('id', 'smo239593');
const smo239594 = new VF.Annotation('мой');
smo239594.setAttribute('id', 'smo239594');
smo239594.setFont('Merriweather', 12.1, 'normal');
smo239594.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239593.addModifier(smo239594);
smo239594.addClass('lyric lyric-0');
smo239612v0ar.push(smo239593);
const smo239595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239595.setAttribute('id', 'smo239595');
const smo239596 = new VF.Annotation('-');
smo239596.setAttribute('id', 'smo239596');
smo239596.setFont('Merriweather', 12.1, 'normal');
smo239596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239595.addModifier(smo239596);
smo239596.addClass('lyric lyric-0 lyric-hyphen');
smo239612v0ar.push(smo239595);
smo239612v0.addTickables(smo239612v0ar)
fmtsmo2396129.joinVoices([smo239612v0]);
const fmtsmo2406519 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo240651v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240651v0ar = [];
const smo240631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240631.setAttribute('id', 'smo240631');
smo240651v0ar.push(smo240631);
const smo240632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240632.setAttribute('id', 'smo240632');
smo240651v0ar.push(smo240632);
const smo240634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240634.setAttribute('id', 'smo240634');
smo240651v0ar.push(smo240634);
const smo240635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240635.setAttribute('id', 'smo240635');
smo240651v0ar.push(smo240635);
smo240651v0.addTickables(smo240651v0ar)
fmtsmo2406519.joinVoices([smo240651v0]);
const fmtsmo2416419 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo241641v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241641v0ar = [];
const smo241622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241622.setAttribute('id', 'smo241622');
smo241641v0ar.push(smo241622);
const smo241623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241623.setAttribute('id', 'smo241623');
smo241641v0ar.push(smo241623);
const smo241624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241624.setAttribute('id', 'smo241624');
smo241641v0ar.push(smo241624);
const smo241625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241625.setAttribute('id', 'smo241625');
smo241641v0ar.push(smo241625);
smo241641v0.addTickables(smo241641v0ar)
fmtsmo2416419.joinVoices([smo241641v0]);
const fmtsmo2426039 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo242603v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242603v0ar = [];
const smo242584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242584.setAttribute('id', 'smo242584');
smo242603v0ar.push(smo242584);
const smo242585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242585.setAttribute('id', 'smo242585');
smo242603v0ar.push(smo242585);
const smo242586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242586.setAttribute('id', 'smo242586');
smo242603v0ar.push(smo242586);
const smo242587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242587.setAttribute('id', 'smo242587');
smo242603v0ar.push(smo242587);
smo242603v0.addTickables(smo242603v0ar)
fmtsmo2426039.joinVoices([smo242603v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo2396129.format([smo239612v0,smo240651v0,smo241641v0,smo242603v0], 175);
const stavesmo239612 = new VF.Stave(55, 686, 240);
stavesmo239612.setAttribute('id', 'stavesmo239612');
stavesmo239612.setBegBarType(1);
stavesmo239612.addClef('treble');
const keysmo239612 = new VF.KeySignature('F');
keysmo239612.addToStave(stavesmo239612);
stavesmo239612.setContext(context);
stavesmo239612.draw();
smo239612v0.draw(context, stavesmo239612);
const stavesmo240651 = new VF.Stave(55, 798, 240);
stavesmo240651.setAttribute('id', 'stavesmo240651');
stavesmo240651.setBegBarType(1);
stavesmo240651.addClef('treble');
const keysmo240651 = new VF.KeySignature('F');
keysmo240651.addToStave(stavesmo240651);
stavesmo240651.setContext(context);
stavesmo240651.draw();
smo240651v0.draw(context, stavesmo240651);
const stavesmo241641 = new VF.Stave(55, 881, 240);
stavesmo241641.setAttribute('id', 'stavesmo241641');
stavesmo241641.setBegBarType(1);
stavesmo241641.addClef('treble');
const keysmo241641 = new VF.KeySignature('F');
keysmo241641.addToStave(stavesmo241641);
stavesmo241641.setContext(context);
stavesmo241641.draw();
smo241641v0.draw(context, stavesmo241641);
const stavesmo242603 = new VF.Stave(55, 959, 240);
stavesmo242603.setAttribute('id', 'stavesmo242603');
stavesmo242603.setBegBarType(1);
stavesmo242603.addClef('bass');
const keysmo242603 = new VF.KeySignature('F');
keysmo242603.addToStave(stavesmo242603);
stavesmo242603.setContext(context);
stavesmo242603.draw();
smo242603v0.draw(context, stavesmo242603);
const leftsmo243368stavesmo2396123 = new VF.StaveConnector(stavesmo239612, stavesmo242603).setType(1);
leftsmo243368stavesmo2396123.setContext(context).draw();
const fmtsmo23963410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo239634v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239634v0ar = [];
const smo239613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239613.setAttribute('id', 'smo239613');
const smo239614 = new VF.Annotation('Со');
smo239614.setAttribute('id', 'smo239614');
smo239614.setFont('Merriweather', 12.1, 'normal');
smo239614.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239613.addModifier(smo239614);
smo239614.addClass('lyric lyric-0 lyric-hyphen');
smo239634v0ar.push(smo239613);
const smo239615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo239615.setAttribute('id', 'smo239615');
const smo2396150acc = new VF.Accidental('n');
smo239615.addModifier(smo2396150acc, 0);
const smo239616 = new VF.Annotation('ло');
smo239616.setAttribute('id', 'smo239616');
smo239616.setFont('Merriweather', 12.1, 'normal');
smo239616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239615.addModifier(smo239616);
smo239616.addClass('lyric lyric-0 lyric-hyphen');
smo239634v0ar.push(smo239615);
const smo239617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239617.setAttribute('id', 'smo239617');
const smo2396170acc = new VF.Accidental('#');
smo239617.addModifier(smo2396170acc, 0);
smo239634v0ar.push(smo239617);
smo239634v0.addTickables(smo239634v0ar)
fmtsmo23963410.joinVoices([smo239634v0]);
const fmtsmo24067110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo240671v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240671v0ar = [];
const smo240652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240652.setAttribute('id', 'smo240652');
smo240671v0ar.push(smo240652);
const smo240653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240653.setAttribute('id', 'smo240653');
smo240671v0ar.push(smo240653);
const smo240654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240654.setAttribute('id', 'smo240654');
smo240671v0ar.push(smo240654);
const smo240655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240655.setAttribute('id', 'smo240655');
smo240671v0ar.push(smo240655);
smo240671v0.addTickables(smo240671v0ar)
fmtsmo24067110.joinVoices([smo240671v0]);
const fmtsmo24166110 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo241661v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241661v0ar = [];
const smo241642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241642.setAttribute('id', 'smo241642');
smo241661v0ar.push(smo241642);
const smo241643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241643.setAttribute('id', 'smo241643');
smo241661v0ar.push(smo241643);
const smo241644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241644.setAttribute('id', 'smo241644');
smo241661v0ar.push(smo241644);
const smo241645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241645.setAttribute('id', 'smo241645');
smo241661v0ar.push(smo241645);
smo241661v0.addTickables(smo241661v0ar)
fmtsmo24166110.joinVoices([smo241661v0]);
const fmtsmo24262310 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo242623v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242623v0ar = [];
const smo242604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242604.setAttribute('id', 'smo242604');
smo242623v0ar.push(smo242604);
const smo242605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242605.setAttribute('id', 'smo242605');
smo242623v0ar.push(smo242605);
const smo242606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242606.setAttribute('id', 'smo242606');
smo242623v0ar.push(smo242606);
const smo242607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242607.setAttribute('id', 'smo242607');
smo242623v0ar.push(smo242607);
smo242623v0.addTickables(smo242623v0ar)
fmtsmo24262310.joinVoices([smo242623v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23963410.format([smo239634v0,smo240671v0,smo241661v0,smo242623v0], 132);
const stavesmo239634 = new VF.Stave(295, 686, 146);
stavesmo239634.setAttribute('id', 'stavesmo239634');
stavesmo239634.setBegBarType(VF.Barline.type.NONE);
stavesmo239634.setContext(context);
stavesmo239634.draw();
smo239634v0.draw(context, stavesmo239634);
const stavesmo240671 = new VF.Stave(295, 798, 146);
stavesmo240671.setAttribute('id', 'stavesmo240671');
stavesmo240671.setBegBarType(VF.Barline.type.NONE);
stavesmo240671.setContext(context);
stavesmo240671.draw();
smo240671v0.draw(context, stavesmo240671);
const stavesmo241661 = new VF.Stave(295, 881, 146);
stavesmo241661.setAttribute('id', 'stavesmo241661');
stavesmo241661.setBegBarType(VF.Barline.type.NONE);
stavesmo241661.setContext(context);
stavesmo241661.draw();
smo241661v0.draw(context, stavesmo241661);
const stavesmo242623 = new VF.Stave(295, 959, 146);
stavesmo242623.setAttribute('id', 'stavesmo242623');
stavesmo242623.setBegBarType(VF.Barline.type.NONE);
stavesmo242623.setContext(context);
stavesmo242623.draw();
smo242623v0.draw(context, stavesmo242623);
const fmtsmo23965311 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo239653v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239653v0ar = [];
const smo239635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239635.setAttribute('id', 'smo239635');
const smo239636 = new VF.Annotation('вей');
smo239636.setAttribute('id', 'smo239636');
smo239636.setFont('Merriweather', 12.1, 'normal');
smo239636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239635.addModifier(smo239636);
smo239636.addClass('lyric lyric-0');
smo239653v0ar.push(smo239635);
const smo239637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239637.setAttribute('id', 'smo239637');
smo239653v0ar.push(smo239637);
smo239653v0.addTickables(smo239653v0ar)
fmtsmo23965311.joinVoices([smo239653v0]);
const fmtsmo24069111 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo240691v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240691v0ar = [];
const smo240672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240672.setAttribute('id', 'smo240672');
smo240691v0ar.push(smo240672);
const smo240673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240673.setAttribute('id', 'smo240673');
smo240691v0ar.push(smo240673);
const smo240674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240674.setAttribute('id', 'smo240674');
smo240691v0ar.push(smo240674);
const smo240675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240675.setAttribute('id', 'smo240675');
smo240691v0ar.push(smo240675);
smo240691v0.addTickables(smo240691v0ar)
fmtsmo24069111.joinVoices([smo240691v0]);
const fmtsmo24168111 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo241681v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241681v0ar = [];
const smo241662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241662.setAttribute('id', 'smo241662');
smo241681v0ar.push(smo241662);
const smo241663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241663.setAttribute('id', 'smo241663');
smo241681v0ar.push(smo241663);
const smo241664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241664.setAttribute('id', 'smo241664');
smo241681v0ar.push(smo241664);
const smo241665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241665.setAttribute('id', 'smo241665');
smo241681v0ar.push(smo241665);
smo241681v0.addTickables(smo241681v0ar)
fmtsmo24168111.joinVoices([smo241681v0]);
const fmtsmo24264111 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo242641v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242641v0ar = [];
const smo242624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242624.setAttribute('id', 'smo242624');
smo242641v0ar.push(smo242624);
const smo242625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242625.setAttribute('id', 'smo242625');
smo242641v0ar.push(smo242625);
smo242641v0.addTickables(smo242641v0ar)
fmtsmo24264111.joinVoices([smo242641v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23965311.format([smo239653v0,smo240691v0,smo241681v0,smo242641v0], 123);
const stavesmo239653 = new VF.Stave(441, 686, 137);
stavesmo239653.setAttribute('id', 'stavesmo239653');
stavesmo239653.setBegBarType(VF.Barline.type.NONE);
stavesmo239653.setContext(context);
stavesmo239653.draw();
smo239653v0.draw(context, stavesmo239653);
const stavesmo240691 = new VF.Stave(441, 798, 137);
stavesmo240691.setAttribute('id', 'stavesmo240691');
stavesmo240691.setBegBarType(VF.Barline.type.NONE);
stavesmo240691.setContext(context);
stavesmo240691.draw();
smo240691v0.draw(context, stavesmo240691);
const stavesmo241681 = new VF.Stave(441, 881, 137);
stavesmo241681.setAttribute('id', 'stavesmo241681');
stavesmo241681.setBegBarType(VF.Barline.type.NONE);
stavesmo241681.setContext(context);
stavesmo241681.draw();
smo241681v0.draw(context, stavesmo241681);
const stavesmo242641 = new VF.Stave(441, 959, 137);
stavesmo242641.setAttribute('id', 'stavesmo242641');
stavesmo242641.setBegBarType(VF.Barline.type.NONE);
stavesmo242641.setContext(context);
stavesmo242641.draw();
smo242641v0.draw(context, stavesmo242641);
const fmtsmo23967512 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo239675v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239675v0ar = [];
const smo239654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239654.setAttribute('id', 'smo239654');
const smo239655 = new VF.Annotation('го');
smo239655.setAttribute('id', 'smo239655');
smo239655.setFont('Merriweather', 12.1, 'normal');
smo239655.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239654.addModifier(smo239655);
smo239655.addClass('lyric lyric-0 lyric-hyphen');
smo239675v0ar.push(smo239654);
const smo239656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239656.setAttribute('id', 'smo239656');
const smo239657 = new VF.Annotation('пo');
smo239657.setAttribute('id', 'smo239657');
smo239657.setFont('Merriweather', 12.1, 'normal');
smo239657.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239656.addModifier(smo239657);
smo239657.addClass('lyric lyric-0');
smo239675v0ar.push(smo239656);
const smo239658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239658.setAttribute('id', 'smo239658');
const smo239659 = new VF.Annotation('-');
smo239659.setAttribute('id', 'smo239659');
smo239659.setFont('Merriweather', 12.1, 'normal');
smo239659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239658.addModifier(smo239659);
smo239659.addClass('lyric lyric-0 lyric-hyphen');
smo239675v0ar.push(smo239658);
smo239675v0.addTickables(smo239675v0ar)
fmtsmo23967512.joinVoices([smo239675v0]);
const fmtsmo24071112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo240711v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240711v0ar = [];
const smo240692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240692.setAttribute('id', 'smo240692');
smo240711v0ar.push(smo240692);
const smo240693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240693.setAttribute('id', 'smo240693');
smo240711v0ar.push(smo240693);
const smo240694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240694.setAttribute('id', 'smo240694');
smo240711v0ar.push(smo240694);
const smo240695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo240695.setAttribute('id', 'smo240695');
smo240711v0ar.push(smo240695);
smo240711v0.addTickables(smo240711v0ar)
fmtsmo24071112.joinVoices([smo240711v0]);
const fmtsmo24170112 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo241701v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241701v0ar = [];
const smo241682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241682.setAttribute('id', 'smo241682');
smo241701v0ar.push(smo241682);
const smo241683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241683.setAttribute('id', 'smo241683');
smo241701v0ar.push(smo241683);
const smo241684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241684.setAttribute('id', 'smo241684');
smo241701v0ar.push(smo241684);
const smo241685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241685.setAttribute('id', 'smo241685');
smo241701v0ar.push(smo241685);
smo241701v0.addTickables(smo241701v0ar)
fmtsmo24170112.joinVoices([smo241701v0]);
const fmtsmo24266112 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo242661v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242661v0ar = [];
const smo242642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242642.setAttribute('id', 'smo242642');
smo242661v0ar.push(smo242642);
const smo242643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242643.setAttribute('id', 'smo242643');
smo242661v0ar.push(smo242643);
const smo242644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo242644.setAttribute('id', 'smo242644');
smo242661v0ar.push(smo242644);
const smo242645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242645.setAttribute('id', 'smo242645');
smo242661v0ar.push(smo242645);
smo242661v0.addTickables(smo242661v0ar)
fmtsmo24266112.joinVoices([smo242661v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23967512.format([smo239675v0,smo240711v0,smo241701v0,smo242661v0], 128);
const stavesmo239675 = new VF.Stave(578, 686, 142);
stavesmo239675.setAttribute('id', 'stavesmo239675');
stavesmo239675.setBegBarType(VF.Barline.type.NONE);
stavesmo239675.setContext(context);
stavesmo239675.draw();
smo239675v0.draw(context, stavesmo239675);
const stavesmo240711 = new VF.Stave(578, 798, 142);
stavesmo240711.setAttribute('id', 'stavesmo240711');
stavesmo240711.setBegBarType(VF.Barline.type.NONE);
stavesmo240711.setContext(context);
stavesmo240711.draw();
smo240711v0.draw(context, stavesmo240711);
const stavesmo241701 = new VF.Stave(578, 881, 142);
stavesmo241701.setAttribute('id', 'stavesmo241701');
stavesmo241701.setBegBarType(VF.Barline.type.NONE);
stavesmo241701.setContext(context);
stavesmo241701.draw();
smo241701v0.draw(context, stavesmo241701);
const stavesmo242661 = new VF.Stave(578, 959, 142);
stavesmo242661.setAttribute('id', 'stavesmo242661');
stavesmo242661.setBegBarType(VF.Barline.type.NONE);
stavesmo242661.setContext(context);
stavesmo242661.draw();
smo242661v0.draw(context, stavesmo242661);
const fmtsmo23969713 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo239697v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239697v0ar = [];
const smo239676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239676.setAttribute('id', 'smo239676');
const smo239677 = new VF.Annotation('си');
smo239677.setAttribute('id', 'smo239677');
smo239677.setFont('Merriweather', 12.1, 'normal');
smo239677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239676.addModifier(smo239677);
smo239677.addClass('lyric lyric-0');
smo239697v0ar.push(smo239676);
const smo239678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239678.setAttribute('id', 'smo239678');
const smo239679 = new VF.Annotation('ст');
smo239679.setAttribute('id', 'smo239679');
smo239679.setFont('Merriweather', 12.1, 'normal');
smo239679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239678.addModifier(smo239679);
smo239679.addClass('lyric lyric-0 lyric-hyphen');
smo239697v0ar.push(smo239678);
const smo239680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239680.setAttribute('id', 'smo239680');
const smo239681 = new VF.Annotation('ый');
smo239681.setAttribute('id', 'smo239681');
smo239681.setFont('Merriweather', 12.1, 'normal');
smo239681.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239680.addModifier(smo239681);
smo239681.addClass('lyric lyric-0');
smo239697v0ar.push(smo239680);
smo239697v0.addTickables(smo239697v0ar)
fmtsmo23969713.joinVoices([smo239697v0]);
const fmtsmo24073113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo240731v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240731v0ar = [];
const smo240712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240712.setAttribute('id', 'smo240712');
smo240731v0ar.push(smo240712);
const smo240713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240713.setAttribute('id', 'smo240713');
smo240731v0ar.push(smo240713);
const smo240714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240714.setAttribute('id', 'smo240714');
smo240731v0ar.push(smo240714);
const smo240715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240715.setAttribute('id', 'smo240715');
smo240731v0ar.push(smo240715);
smo240731v0.addTickables(smo240731v0ar)
fmtsmo24073113.joinVoices([smo240731v0]);
const fmtsmo24172113 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo241721v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241721v0ar = [];
const smo241702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241702.setAttribute('id', 'smo241702');
smo241721v0ar.push(smo241702);
const smo241703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241703.setAttribute('id', 'smo241703');
smo241721v0ar.push(smo241703);
const smo241704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241704.setAttribute('id', 'smo241704');
smo241721v0ar.push(smo241704);
const smo241705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241705.setAttribute('id', 'smo241705');
smo241721v0ar.push(smo241705);
smo241721v0.addTickables(smo241721v0ar)
fmtsmo24172113.joinVoices([smo241721v0]);
const fmtsmo24267913 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo242679v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242679v0ar = [];
const smo242662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242662.setAttribute('id', 'smo242662');
smo242679v0ar.push(smo242662);
const smo242663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo242663.setAttribute('id', 'smo242663');
smo242679v0ar.push(smo242663);
smo242679v0.addTickables(smo242679v0ar)
fmtsmo24267913.joinVoices([smo242679v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23969713.format([smo239697v0,smo240731v0,smo241721v0,smo242679v0], 167);
const stavesmo239697 = new VF.Stave(720, 686, 181);
stavesmo239697.setAttribute('id', 'stavesmo239697');
stavesmo239697.setBegBarType(VF.Barline.type.NONE);
stavesmo239697.setContext(context);
stavesmo239697.draw();
smo239697v0.draw(context, stavesmo239697);
const stavesmo240731 = new VF.Stave(720, 798, 181);
stavesmo240731.setAttribute('id', 'stavesmo240731');
stavesmo240731.setBegBarType(VF.Barline.type.NONE);
stavesmo240731.setContext(context);
stavesmo240731.draw();
smo240731v0.draw(context, stavesmo240731);
const stavesmo241721 = new VF.Stave(720, 881, 181);
stavesmo241721.setAttribute('id', 'stavesmo241721');
stavesmo241721.setBegBarType(VF.Barline.type.NONE);
stavesmo241721.setContext(context);
stavesmo241721.draw();
smo241721v0.draw(context, stavesmo241721);
const stavesmo242679 = new VF.Stave(720, 959, 181);
stavesmo242679.setAttribute('id', 'stavesmo242679');
stavesmo242679.setBegBarType(VF.Barline.type.NONE);
stavesmo242679.setContext(context);
stavesmo242679.draw();
smo242679v0.draw(context, stavesmo242679);
const fmtsmo23972314 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo239723v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239723v0ar = [];
const smo239698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239698.setAttribute('id', 'smo239698');
const smo239699 = new VF.Annotation('co');
smo239699.setAttribute('id', 'smo239699');
smo239699.setFont('Merriweather', 12.1, 'normal');
smo239699.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239698.addModifier(smo239699);
smo239699.addClass('lyric lyric-0');
smo239723v0ar.push(smo239698);
const smo239700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239700.setAttribute('id', 'smo239700');
const smo239701 = new VF.Annotation('-');
smo239701.setAttribute('id', 'smo239701');
smo239701.setFont('Merriweather', 12.1, 'normal');
smo239701.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239700.addModifier(smo239701);
smo239701.addClass('lyric lyric-0 lyric-hyphen');
smo239723v0ar.push(smo239700);
const smo239702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo239702.setAttribute('id', 'smo239702');
const smo239703 = new VF.Annotation('-');
smo239703.setAttribute('id', 'smo239703');
smo239703.setFont('Merriweather', 12.1, 'normal');
smo239703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239702.addModifier(smo239703);
smo239703.addClass('lyric lyric-0 lyric-hyphen');
smo239723v0ar.push(smo239702);
const smo239704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239704.setAttribute('id', 'smo239704');
const smo239705 = new VF.Annotation('по');
smo239705.setAttribute('id', 'smo239705');
smo239705.setFont('Merriweather', 12.1, 'normal');
smo239705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239704.addModifier(smo239705);
smo239705.addClass('lyric lyric-0');
smo239723v0ar.push(smo239704);
const smo239706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239706.setAttribute('id', 'smo239706');
const smo239707 = new VF.Annotation('-');
smo239707.setAttribute('id', 'smo239707');
smo239707.setFont('Merriweather', 12.1, 'normal');
smo239707.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239706.addModifier(smo239707);
smo239707.addClass('lyric lyric-0 lyric-hyphen');
smo239723v0ar.push(smo239706);
smo239723v0.addTickables(smo239723v0ar)
fmtsmo23972314.joinVoices([smo239723v0]);
const fmtsmo24075114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo240751v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240751v0ar = [];
const smo240732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240732.setAttribute('id', 'smo240732');
smo240751v0ar.push(smo240732);
const smo240733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240733.setAttribute('id', 'smo240733');
smo240751v0ar.push(smo240733);
const smo240734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240734.setAttribute('id', 'smo240734');
smo240751v0ar.push(smo240734);
const smo240735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo240735.setAttribute('id', 'smo240735');
smo240751v0ar.push(smo240735);
smo240751v0.addTickables(smo240751v0ar)
fmtsmo24075114.joinVoices([smo240751v0]);
const fmtsmo24174114 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo241741v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241741v0ar = [];
const smo241722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241722.setAttribute('id', 'smo241722');
smo241741v0ar.push(smo241722);
const smo241723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo241723.setAttribute('id', 'smo241723');
smo241741v0ar.push(smo241723);
const smo241724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241724.setAttribute('id', 'smo241724');
smo241741v0ar.push(smo241724);
const smo241725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo241725.setAttribute('id', 'smo241725');
smo241741v0ar.push(smo241725);
smo241741v0.addTickables(smo241741v0ar)
fmtsmo24174114.joinVoices([smo241741v0]);
const fmtsmo24269914 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo242699v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242699v0ar = [];
const smo242680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242680.setAttribute('id', 'smo242680');
smo242699v0ar.push(smo242680);
const smo242681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242681.setAttribute('id', 'smo242681');
smo242699v0ar.push(smo242681);
const smo242682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo242682.setAttribute('id', 'smo242682');
smo242699v0ar.push(smo242682);
const smo242683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242683.setAttribute('id', 'smo242683');
smo242699v0ar.push(smo242683);
smo242699v0.addTickables(smo242699v0ar)
fmtsmo24269914.joinVoices([smo242699v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249759 = smo239700.getStemDirection();
smo239700.setStemDirection(dirsmo249759);
smo239702.setStemDirection(dirsmo249759);
const smo249759 = new VF.Beam([smo239700,smo239702]);
 
// formatting measures in staff group smo243368
fmtsmo23972314.format([smo239723v0,smo240751v0,smo241741v0,smo242699v0], 155);
const stavesmo239723 = new VF.Stave(901, 686, 169);
stavesmo239723.setAttribute('id', 'stavesmo239723');
stavesmo239723.setBegBarType(VF.Barline.type.NONE);
stavesmo239723.setContext(context);
stavesmo239723.draw();
smo239723v0.draw(context, stavesmo239723);
smo249759.setContext(context);
smo249759.draw();
const stavesmo240751 = new VF.Stave(901, 798, 169);
stavesmo240751.setAttribute('id', 'stavesmo240751');
stavesmo240751.setBegBarType(VF.Barline.type.NONE);
stavesmo240751.setContext(context);
stavesmo240751.draw();
smo240751v0.draw(context, stavesmo240751);
const stavesmo241741 = new VF.Stave(901, 881, 169);
stavesmo241741.setAttribute('id', 'stavesmo241741');
stavesmo241741.setBegBarType(VF.Barline.type.NONE);
stavesmo241741.setContext(context);
stavesmo241741.draw();
smo241741v0.draw(context, stavesmo241741);
const stavesmo242699 = new VF.Stave(901, 959, 169);
stavesmo242699.setAttribute('id', 'stavesmo242699');
stavesmo242699.setBegBarType(VF.Barline.type.NONE);
stavesmo242699.setContext(context);
stavesmo242699.draw();
smo242699v0.draw(context, stavesmo242699);
const fmtsmo23974215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo239742v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239742v0ar = [];
const smo239724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239724.setAttribute('id', 'smo239724');
smo239724.addModifier(new VF.Dot(), 0);
const smo239725 = new VF.Annotation('вей');
smo239725.setAttribute('id', 'smo239725');
smo239725.setFont('Merriweather', 12.1, 'normal');
smo239725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239724.addModifier(smo239725);
smo239725.addClass('lyric lyric-0');
smo239742v0ar.push(smo239724);
const smo239726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239726.setAttribute('id', 'smo239726');
smo239742v0ar.push(smo239726);
smo239742v0.addTickables(smo239742v0ar)
fmtsmo23974215.joinVoices([smo239742v0]);
const fmtsmo24077115 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo240771v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240771v0ar = [];
const smo240752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240752.setAttribute('id', 'smo240752');
smo240771v0ar.push(smo240752);
const smo240753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240753.setAttribute('id', 'smo240753');
smo240771v0ar.push(smo240753);
const smo240754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo240754.setAttribute('id', 'smo240754');
smo240771v0ar.push(smo240754);
const smo240755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240755.setAttribute('id', 'smo240755');
smo240771v0ar.push(smo240755);
smo240771v0.addTickables(smo240771v0ar)
fmtsmo24077115.joinVoices([smo240771v0]);
const fmtsmo24176115 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo241761v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241761v0ar = [];
const smo241742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241742.setAttribute('id', 'smo241742');
smo241761v0ar.push(smo241742);
const smo241743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241743.setAttribute('id', 'smo241743');
smo241761v0ar.push(smo241743);
const smo241744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241744.setAttribute('id', 'smo241744');
smo241761v0ar.push(smo241744);
const smo241745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241745.setAttribute('id', 'smo241745');
smo241761v0ar.push(smo241745);
smo241761v0.addTickables(smo241761v0ar)
fmtsmo24176115.joinVoices([smo241761v0]);
const fmtsmo24271715 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo242717v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242717v0ar = [];
const smo242700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242700.setAttribute('id', 'smo242700');
smo242700.addModifier(new VF.Dot(), 0);
smo242717v0ar.push(smo242700);
const smo242701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242701.setAttribute('id', 'smo242701');
smo242717v0ar.push(smo242701);
smo242717v0.addTickables(smo242717v0ar)
fmtsmo24271715.joinVoices([smo242717v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23974215.format([smo239742v0,smo240771v0,smo241761v0,smo242717v0], 123);
const stavesmo239742 = new VF.Stave(1070, 686, 137);
stavesmo239742.setAttribute('id', 'stavesmo239742');
stavesmo239742.setBegBarType(VF.Barline.type.NONE);
stavesmo239742.setContext(context);
stavesmo239742.draw();
smo239742v0.draw(context, stavesmo239742);
const stavesmo240771 = new VF.Stave(1070, 798, 137);
stavesmo240771.setAttribute('id', 'stavesmo240771');
stavesmo240771.setBegBarType(VF.Barline.type.NONE);
stavesmo240771.setContext(context);
stavesmo240771.draw();
smo240771v0.draw(context, stavesmo240771);
const stavesmo241761 = new VF.Stave(1070, 881, 137);
stavesmo241761.setAttribute('id', 'stavesmo241761');
stavesmo241761.setBegBarType(VF.Barline.type.NONE);
stavesmo241761.setContext(context);
stavesmo241761.draw();
smo241761v0.draw(context, stavesmo241761);
const stavesmo242717 = new VF.Stave(1070, 959, 137);
stavesmo242717.setAttribute('id', 'stavesmo242717');
stavesmo242717.setBegBarType(VF.Barline.type.NONE);
stavesmo242717.setContext(context);
stavesmo242717.draw();
smo242717v0.draw(context, stavesmo242717);
const fmtsmo23976416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo239764v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239764v0ar = [];
const smo239743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239743.setAttribute('id', 'smo239743');
const smo239744 = new VF.Annotation('Tы');
smo239744.setAttribute('id', 'smo239744');
smo239744.setFont('Merriweather', 12.1, 'normal');
smo239744.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239743.addModifier(smo239744);
smo239744.addClass('lyric lyric-0');
smo239764v0ar.push(smo239743);
const smo239745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo239745.setAttribute('id', 'smo239745');
const smo2397450acc = new VF.Accidental('n');
smo239745.addModifier(smo2397450acc, 0);
const smo239746 = new VF.Annotation('ку');
smo239746.setAttribute('id', 'smo239746');
smo239746.setFont('Merriweather', 12.1, 'normal');
smo239746.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239745.addModifier(smo239746);
smo239746.addClass('lyric lyric-0');
smo239764v0ar.push(smo239745);
const smo239747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239747.setAttribute('id', 'smo239747');
const smo2397470acc = new VF.Accidental('#');
smo239747.addModifier(smo2397470acc, 0);
const smo239748 = new VF.Annotation('-');
smo239748.setAttribute('id', 'smo239748');
smo239748.setFont('Merriweather', 12.1, 'normal');
smo239748.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239747.addModifier(smo239748);
smo239748.addClass('lyric lyric-0 lyric-hyphen');
smo239764v0ar.push(smo239747);
smo239764v0.addTickables(smo239764v0ar)
fmtsmo23976416.joinVoices([smo239764v0]);
const fmtsmo24079116 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo240791v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240791v0ar = [];
const smo240772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240772.setAttribute('id', 'smo240772');
smo240791v0ar.push(smo240772);
const smo240773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240773.setAttribute('id', 'smo240773');
smo240791v0ar.push(smo240773);
const smo240774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240774.setAttribute('id', 'smo240774');
smo240791v0ar.push(smo240774);
const smo240775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240775.setAttribute('id', 'smo240775');
smo240791v0ar.push(smo240775);
smo240791v0.addTickables(smo240791v0ar)
fmtsmo24079116.joinVoices([smo240791v0]);
const fmtsmo24178116 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo241781v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241781v0ar = [];
const smo241762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241762.setAttribute('id', 'smo241762');
smo241781v0ar.push(smo241762);
const smo241763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo241763.setAttribute('id', 'smo241763');
const smo2417630acc = new VF.Accidental('#');
smo241763.addModifier(smo2417630acc, 0);
smo241781v0ar.push(smo241763);
const smo241764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241764.setAttribute('id', 'smo241764');
smo241781v0ar.push(smo241764);
const smo241765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241765.setAttribute('id', 'smo241765');
smo241781v0ar.push(smo241765);
smo241781v0.addTickables(smo241781v0ar)
fmtsmo24178116.joinVoices([smo241781v0]);
const fmtsmo24273516 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo242735v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242735v0ar = [];
const smo242718 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242718.setAttribute('id', 'smo242718');
smo242735v0ar.push(smo242718);
const smo242719 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242719.setAttribute('id', 'smo242719');
smo242735v0ar.push(smo242719);
smo242735v0.addTickables(smo242735v0ar)
fmtsmo24273516.joinVoices([smo242735v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23976416.format([smo239764v0,smo240791v0,smo241781v0,smo242735v0], 155);
const stavesmo239764 = new VF.Stave(1207, 686, 169);
stavesmo239764.setAttribute('id', 'stavesmo239764');
stavesmo239764.setBegBarType(VF.Barline.type.NONE);
stavesmo239764.setContext(context);
stavesmo239764.draw();
smo239764v0.draw(context, stavesmo239764);
const stavesmo240791 = new VF.Stave(1207, 798, 169);
stavesmo240791.setAttribute('id', 'stavesmo240791');
stavesmo240791.setBegBarType(VF.Barline.type.NONE);
stavesmo240791.setContext(context);
stavesmo240791.draw();
smo240791v0.draw(context, stavesmo240791);
const stavesmo241781 = new VF.Stave(1207, 881, 169);
stavesmo241781.setAttribute('id', 'stavesmo241781');
stavesmo241781.setBegBarType(VF.Barline.type.NONE);
stavesmo241781.setContext(context);
stavesmo241781.draw();
smo241781v0.draw(context, stavesmo241781);
const stavesmo242735 = new VF.Stave(1207, 959, 169);
stavesmo242735.setAttribute('id', 'stavesmo242735');
stavesmo242735.setBegBarType(VF.Barline.type.NONE);
stavesmo242735.setContext(context);
stavesmo242735.draw();
smo242735v0.draw(context, stavesmo242735);
const rightsmo243368stavesmo2397643 = new VF.StaveConnector(stavesmo239764, stavesmo242735).setType(0);
rightsmo243368stavesmo2397643.setContext(context).draw();
const fmtsmo23978617 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo239786v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239786v0ar = [];
const smo239765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239765.setAttribute('id', 'smo239765');
const smo239766 = new VF.Annotation('дa,');
smo239766.setAttribute('id', 'smo239766');
smo239766.setFont('Merriweather', 12.1, 'normal');
smo239766.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239765.addModifier(smo239766);
smo239766.addClass('lyric lyric-0');
smo239786v0ar.push(smo239765);
const smo239767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239767.setAttribute('id', 'smo239767');
const smo239768 = new VF.Annotation('ку');
smo239768.setAttribute('id', 'smo239768');
smo239768.setFont('Merriweather', 12.1, 'normal');
smo239768.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239767.addModifier(smo239768);
smo239768.addClass('lyric lyric-0');
smo239786v0ar.push(smo239767);
const smo239769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239769.setAttribute('id', 'smo239769');
const smo239770 = new VF.Annotation('-');
smo239770.setAttribute('id', 'smo239770');
smo239770.setFont('Merriweather', 12.1, 'normal');
smo239770.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239769.addModifier(smo239770);
smo239770.addClass('lyric lyric-0 lyric-hyphen');
smo239786v0ar.push(smo239769);
smo239786v0.addTickables(smo239786v0ar)
fmtsmo23978617.joinVoices([smo239786v0]);
const fmtsmo24081117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo240811v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240811v0ar = [];
const smo240792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240792.setAttribute('id', 'smo240792');
smo240811v0ar.push(smo240792);
const smo240793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240793.setAttribute('id', 'smo240793');
smo240811v0ar.push(smo240793);
const smo240794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240794.setAttribute('id', 'smo240794');
smo240811v0ar.push(smo240794);
const smo240795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240795.setAttribute('id', 'smo240795');
smo240811v0ar.push(smo240795);
smo240811v0.addTickables(smo240811v0ar)
fmtsmo24081117.joinVoices([smo240811v0]);
const fmtsmo24180117 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo241801v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241801v0ar = [];
const smo241782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241782.setAttribute('id', 'smo241782');
smo241801v0ar.push(smo241782);
const smo241783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo241783.setAttribute('id', 'smo241783');
smo241801v0ar.push(smo241783);
const smo241784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo241784.setAttribute('id', 'smo241784');
smo241801v0ar.push(smo241784);
const smo241785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo241785.setAttribute('id', 'smo241785');
smo241801v0ar.push(smo241785);
smo241801v0.addTickables(smo241801v0ar)
fmtsmo24180117.joinVoices([smo241801v0]);
const fmtsmo24275417 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo242754v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242754v0ar = [];
const smo242736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242736.setAttribute('id', 'smo242736');
smo242754v0ar.push(smo242736);
const smo242737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242737.setAttribute('id', 'smo242737');
smo242754v0ar.push(smo242737);
const smo242738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242738.setAttribute('id', 'smo242738');
smo242754v0ar.push(smo242738);
smo242754v0.addTickables(smo242754v0ar)
fmtsmo24275417.joinVoices([smo242754v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23978617.format([smo239786v0,smo240811v0,smo241801v0,smo242754v0], 411);
const stavesmo239786 = new VF.Stave(55, 1089, 476);
stavesmo239786.setAttribute('id', 'stavesmo239786');
stavesmo239786.setBegBarType(1);
stavesmo239786.addClef('treble');
const keysmo239786 = new VF.KeySignature('F');
keysmo239786.addToStave(stavesmo239786);
stavesmo239786.setContext(context);
stavesmo239786.draw();
smo239786v0.draw(context, stavesmo239786);
const stavesmo240811 = new VF.Stave(55, 1202, 476);
stavesmo240811.setAttribute('id', 'stavesmo240811');
stavesmo240811.setBegBarType(1);
stavesmo240811.addClef('treble');
const keysmo240811 = new VF.KeySignature('F');
keysmo240811.addToStave(stavesmo240811);
stavesmo240811.setContext(context);
stavesmo240811.draw();
smo240811v0.draw(context, stavesmo240811);
const stavesmo241801 = new VF.Stave(55, 1305, 476);
stavesmo241801.setAttribute('id', 'stavesmo241801');
stavesmo241801.setBegBarType(1);
stavesmo241801.addClef('treble');
const keysmo241801 = new VF.KeySignature('F');
keysmo241801.addToStave(stavesmo241801);
stavesmo241801.setContext(context);
stavesmo241801.draw();
smo241801v0.draw(context, stavesmo241801);
const stavesmo242754 = new VF.Stave(55, 1386, 476);
stavesmo242754.setAttribute('id', 'stavesmo242754');
stavesmo242754.setBegBarType(1);
stavesmo242754.addClef('bass');
const keysmo242754 = new VF.KeySignature('F');
keysmo242754.addToStave(stavesmo242754);
stavesmo242754.setContext(context);
stavesmo242754.draw();
smo242754v0.draw(context, stavesmo242754);
const leftsmo243368stavesmo2397863 = new VF.StaveConnector(stavesmo239786, stavesmo242754).setType(1);
leftsmo243368stavesmo2397863.setContext(context).draw();
const fmtsmo23980818 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo239808v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239808v0ar = [];
const smo239787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239787.setAttribute('id', 'smo239787');
const smo239788 = new VF.Annotation('да');
smo239788.setAttribute('id', 'smo239788');
smo239788.setFont('Merriweather', 12.1, 'normal');
smo239788.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239787.addModifier(smo239788);
smo239788.addClass('lyric lyric-0');
smo239808v0ar.push(smo239787);
const smo239789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239789.setAttribute('id', 'smo239789');
smo239808v0ar.push(smo239789);
const smo239790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239790.setAttribute('id', 'smo239790');
const smo239791 = new VF.Annotation('ле');
smo239791.setAttribute('id', 'smo239791');
smo239791.setFont('Merriweather', 12.1, 'normal');
smo239791.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239790.addModifier(smo239791);
smo239791.addClass('lyric lyric-0 lyric-hyphen');
smo239808v0ar.push(smo239790);
const smo239792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239792.setAttribute('id', 'smo239792');
smo239808v0ar.push(smo239792);
smo239808v0.addTickables(smo239808v0ar)
fmtsmo23980818.joinVoices([smo239808v0]);
const fmtsmo24083118 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo240831v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240831v0ar = [];
const smo240812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240812.setAttribute('id', 'smo240812');
smo240831v0ar.push(smo240812);
const smo240813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240813.setAttribute('id', 'smo240813');
smo240831v0ar.push(smo240813);
const smo240814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240814.setAttribute('id', 'smo240814');
smo240831v0ar.push(smo240814);
const smo240815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240815.setAttribute('id', 'smo240815');
smo240831v0ar.push(smo240815);
smo240831v0.addTickables(smo240831v0ar)
fmtsmo24083118.joinVoices([smo240831v0]);
const fmtsmo24182118 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo241821v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241821v0ar = [];
const smo241802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241802.setAttribute('id', 'smo241802');
smo241821v0ar.push(smo241802);
const smo241803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo241803.setAttribute('id', 'smo241803');
smo241821v0ar.push(smo241803);
const smo241804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241804.setAttribute('id', 'smo241804');
smo241821v0ar.push(smo241804);
const smo241805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo241805.setAttribute('id', 'smo241805');
smo241821v0ar.push(smo241805);
smo241821v0.addTickables(smo241821v0ar)
fmtsmo24182118.joinVoices([smo241821v0]);
const fmtsmo24277218 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo242772v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242772v0ar = [];
const smo242755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo242755.setAttribute('id', 'smo242755');
smo242772v0ar.push(smo242755);
const smo242756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo242756.setAttribute('id', 'smo242756');
smo242772v0ar.push(smo242756);
smo242772v0.addTickables(smo242772v0ar)
fmtsmo24277218.joinVoices([smo242772v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23980818.format([smo239808v0,smo240831v0,smo241821v0,smo242772v0], 400);
const stavesmo239808 = new VF.Stave(531, 1089, 414);
stavesmo239808.setAttribute('id', 'stavesmo239808');
stavesmo239808.setBegBarType(VF.Barline.type.NONE);
stavesmo239808.setContext(context);
stavesmo239808.draw();
smo239808v0.draw(context, stavesmo239808);
const stavesmo240831 = new VF.Stave(531, 1202, 414);
stavesmo240831.setAttribute('id', 'stavesmo240831');
stavesmo240831.setBegBarType(VF.Barline.type.NONE);
stavesmo240831.setContext(context);
stavesmo240831.draw();
smo240831v0.draw(context, stavesmo240831);
const stavesmo241821 = new VF.Stave(531, 1305, 414);
stavesmo241821.setAttribute('id', 'stavesmo241821');
stavesmo241821.setBegBarType(VF.Barline.type.NONE);
stavesmo241821.setContext(context);
stavesmo241821.draw();
smo241821v0.draw(context, stavesmo241821);
const stavesmo242772 = new VF.Stave(531, 1386, 414);
stavesmo242772.setAttribute('id', 'stavesmo242772');
stavesmo242772.setBegBarType(VF.Barline.type.NONE);
stavesmo242772.setContext(context);
stavesmo242772.draw();
smo242772v0.draw(context, stavesmo242772);
const fmtsmo23982919 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo239829v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239829v0ar = [];
const smo239809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239809.setAttribute('id', 'smo239809');
const smo239810 = new VF.Annotation('тишь,');
smo239810.setAttribute('id', 'smo239810');
smo239810.setFont('Merriweather', 12.1, 'normal');
smo239810.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239809.addModifier(smo239810);
smo239810.addClass('lyric lyric-0');
smo239829v0ar.push(smo239809);
const smo239811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239811.setAttribute('id', 'smo239811');
const smo239812 = new VF.Annotation('-');
smo239812.setAttribute('id', 'smo239812');
smo239812.setFont('Merriweather', 12.1, 'normal');
smo239812.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239811.addModifier(smo239812);
smo239812.addClass('lyric lyric-0 lyric-hyphen');
smo239829v0ar.push(smo239811);
const smo239813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239813.setAttribute('id', 'smo239813');
smo239829v0ar.push(smo239813);
smo239829v0.addTickables(smo239829v0ar)
fmtsmo23982919.joinVoices([smo239829v0]);
const fmtsmo24085119 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo240851v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240851v0ar = [];
const smo240832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240832.setAttribute('id', 'smo240832');
smo240851v0ar.push(smo240832);
const smo240833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo240833.setAttribute('id', 'smo240833');
smo240851v0ar.push(smo240833);
const smo240834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240834.setAttribute('id', 'smo240834');
smo240851v0ar.push(smo240834);
const smo240835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240835.setAttribute('id', 'smo240835');
smo240851v0ar.push(smo240835);
smo240851v0.addTickables(smo240851v0ar)
fmtsmo24085119.joinVoices([smo240851v0]);
const fmtsmo24184119 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo241841v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241841v0ar = [];
const smo241822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241822.setAttribute('id', 'smo241822');
smo241841v0ar.push(smo241822);
const smo241823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo241823.setAttribute('id', 'smo241823');
smo241841v0ar.push(smo241823);
const smo241824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo241824.setAttribute('id', 'smo241824');
smo241841v0ar.push(smo241824);
const smo241825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo241825.setAttribute('id', 'smo241825');
smo241841v0ar.push(smo241825);
smo241841v0.addTickables(smo241841v0ar)
fmtsmo24184119.joinVoices([smo241841v0]);
const fmtsmo24279119 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo242791v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242791v0ar = [];
const smo242773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242773.setAttribute('id', 'smo242773');
smo242791v0ar.push(smo242773);
const smo242774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242774.setAttribute('id', 'smo242774');
smo242791v0ar.push(smo242774);
const smo242775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo242775.setAttribute('id', 'smo242775');
smo242791v0ar.push(smo242775);
smo242791v0.addTickables(smo242791v0ar)
fmtsmo24279119.joinVoices([smo242791v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23982919.format([smo239829v0,smo240851v0,smo241841v0,smo242791v0], 416);
const stavesmo239829 = new VF.Stave(945, 1089, 430);
stavesmo239829.setAttribute('id', 'stavesmo239829');
stavesmo239829.setBegBarType(VF.Barline.type.NONE);
stavesmo239829.setContext(context);
stavesmo239829.draw();
smo239829v0.draw(context, stavesmo239829);
const stavesmo240851 = new VF.Stave(945, 1202, 430);
stavesmo240851.setAttribute('id', 'stavesmo240851');
stavesmo240851.setBegBarType(VF.Barline.type.NONE);
stavesmo240851.setContext(context);
stavesmo240851.draw();
smo240851v0.draw(context, stavesmo240851);
const stavesmo241841 = new VF.Stave(945, 1305, 430);
stavesmo241841.setAttribute('id', 'stavesmo241841');
stavesmo241841.setBegBarType(VF.Barline.type.NONE);
stavesmo241841.setContext(context);
stavesmo241841.draw();
smo241841v0.draw(context, stavesmo241841);
const stavesmo242791 = new VF.Stave(945, 1386, 430);
stavesmo242791.setAttribute('id', 'stavesmo242791');
stavesmo242791.setBegBarType(VF.Barline.type.NONE);
stavesmo242791.setContext(context);
stavesmo242791.draw();
smo242791v0.draw(context, stavesmo242791);
const rightsmo243368stavesmo2398293 = new VF.StaveConnector(stavesmo239829, stavesmo242791).setType(0);
rightsmo243368stavesmo2398293.setContext(context).draw();
const fmtsmo23985420 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo239854v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239854v0ar = [];
const smo239830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo239830.setAttribute('id', 'smo239830');
const smo2398300acc = new VF.Accidental('n');
smo239830.addModifier(smo2398300acc, 0);
smo239830.addModifier(new VF.Dot(), 0);
const smo239831 = new VF.Annotation('где');
smo239831.setAttribute('id', 'smo239831');
smo239831.setFont('Merriweather', 12.1, 'normal');
smo239831.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239830.addModifier(smo239831);
smo239831.addClass('lyric lyric-0');
smo239854v0ar.push(smo239830);
const smo239832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239832.setAttribute('id', 'smo239832');
const smo239833 = new VF.Annotation('-');
smo239833.setAttribute('id', 'smo239833');
smo239833.setFont('Merriweather', 12.1, 'normal');
smo239833.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239832.addModifier(smo239833);
smo239833.addClass('lyric lyric-0 lyric-hyphen');
smo239854v0ar.push(smo239832);
const smo239834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239834.setAttribute('id', 'smo239834');
smo239854v0ar.push(smo239834);
const smo239835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239835.setAttribute('id', 'smo239835');
const smo239836 = new VF.Annotation('вс');
smo239836.setAttribute('id', 'smo239836');
smo239836.setFont('Merriweather', 12.1, 'normal');
smo239836.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239835.addModifier(smo239836);
smo239836.addClass('lyric lyric-0 lyric-hyphen');
smo239854v0ar.push(smo239835);
const smo239837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo239837.setAttribute('id', 'smo239837');
const smo239838 = new VF.Annotation('ю');
smo239838.setAttribute('id', 'smo239838');
smo239838.setFont('Merriweather', 12.1, 'normal');
smo239838.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239837.addModifier(smo239838);
smo239838.addClass('lyric lyric-0');
smo239854v0ar.push(smo239837);
smo239854v0.addTickables(smo239854v0ar)
fmtsmo23985420.joinVoices([smo239854v0]);
const fmtsmo24087120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo240871v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240871v0ar = [];
const smo240852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240852.setAttribute('id', 'smo240852');
smo240871v0ar.push(smo240852);
const smo240853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240853.setAttribute('id', 'smo240853');
smo240871v0ar.push(smo240853);
const smo240854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240854.setAttribute('id', 'smo240854');
smo240871v0ar.push(smo240854);
const smo240855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo240855.setAttribute('id', 'smo240855');
const smo2408550acc = new VF.Accidental('#');
smo240855.addModifier(smo2408550acc, 0);
smo240871v0ar.push(smo240855);
smo240871v0.addTickables(smo240871v0ar)
fmtsmo24087120.joinVoices([smo240871v0]);
const fmtsmo24186120 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo241861v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241861v0ar = [];
const smo241842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241842.setAttribute('id', 'smo241842');
smo241861v0ar.push(smo241842);
const smo241843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241843.setAttribute('id', 'smo241843');
smo241861v0ar.push(smo241843);
const smo241844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241844.setAttribute('id', 'smo241844');
smo241861v0ar.push(smo241844);
const smo241845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo241845.setAttribute('id', 'smo241845');
smo241861v0ar.push(smo241845);
smo241861v0.addTickables(smo241861v0ar)
fmtsmo24186120.joinVoices([smo241861v0]);
const fmtsmo24281120 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo242811v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242811v0ar = [];
const smo242792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242792.setAttribute('id', 'smo242792');
smo242811v0ar.push(smo242792);
const smo242793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242793.setAttribute('id', 'smo242793');
smo242811v0ar.push(smo242793);
const smo242794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo242794.setAttribute('id', 'smo242794');
smo242811v0ar.push(smo242794);
const smo242795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242795.setAttribute('id', 'smo242795');
smo242811v0ar.push(smo242795);
smo242811v0.addTickables(smo242811v0ar)
fmtsmo24281120.joinVoices([smo242811v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249825 = smo239832.getStemDirection();
smo239832.setStemDirection(dirsmo249825);
smo239834.setStemDirection(dirsmo249825);
const smo249825 = new VF.Beam([smo239832,smo239834]);
 
// formatting measures in staff group smo243368
fmtsmo23985420.format([smo239854v0,smo240871v0,smo241861v0,smo242811v0], 222);
const stavesmo239854 = new VF.Stave(55, 1516, 287);
stavesmo239854.setAttribute('id', 'stavesmo239854');
stavesmo239854.setBegBarType(1);
stavesmo239854.addClef('treble');
const keysmo239854 = new VF.KeySignature('F');
keysmo239854.addToStave(stavesmo239854);
stavesmo239854.setContext(context);
stavesmo239854.draw();
smo239854v0.draw(context, stavesmo239854);
smo249825.setContext(context);
smo249825.draw();
const stavesmo240871 = new VF.Stave(55, 1627, 287);
stavesmo240871.setAttribute('id', 'stavesmo240871');
stavesmo240871.setBegBarType(1);
stavesmo240871.addClef('treble');
const keysmo240871 = new VF.KeySignature('F');
keysmo240871.addToStave(stavesmo240871);
stavesmo240871.setContext(context);
stavesmo240871.draw();
smo240871v0.draw(context, stavesmo240871);
const stavesmo241861 = new VF.Stave(55, 1710, 287);
stavesmo241861.setAttribute('id', 'stavesmo241861');
stavesmo241861.setBegBarType(1);
stavesmo241861.addClef('treble');
const keysmo241861 = new VF.KeySignature('F');
keysmo241861.addToStave(stavesmo241861);
stavesmo241861.setContext(context);
stavesmo241861.draw();
smo241861v0.draw(context, stavesmo241861);
const stavesmo242811 = new VF.Stave(55, 1804, 287);
stavesmo242811.setAttribute('id', 'stavesmo242811');
stavesmo242811.setBegBarType(1);
stavesmo242811.addClef('bass');
const keysmo242811 = new VF.KeySignature('F');
keysmo242811.addToStave(stavesmo242811);
stavesmo242811.setContext(context);
stavesmo242811.draw();
smo242811v0.draw(context, stavesmo242811);
const leftsmo243368stavesmo2398543 = new VF.StaveConnector(stavesmo239854, stavesmo242811).setType(1);
leftsmo243368stavesmo2398543.setContext(context).draw();
const fmtsmo23987621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo239876v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239876v0ar = [];
const smo239855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239855.setAttribute('id', 'smo239855');
const smo239856 = new VF.Annotation('ноч');
smo239856.setAttribute('id', 'smo239856');
smo239856.setFont('Merriweather', 12.1, 'normal');
smo239856.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239855.addModifier(smo239856);
smo239856.addClass('lyric lyric-0 lyric-hyphen');
smo239876v0ar.push(smo239855);
const smo239857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239857.setAttribute('id', 'smo239857');
const smo239858 = new VF.Annotation('ку');
smo239858.setAttribute('id', 'smo239858');
smo239858.setFont('Merriweather', 12.1, 'normal');
smo239858.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239857.addModifier(smo239858);
smo239858.addClass('lyric lyric-0');
smo239876v0ar.push(smo239857);
const smo239859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239859.setAttribute('id', 'smo239859');
const smo239860 = new VF.Annotation('про');
smo239860.setAttribute('id', 'smo239860');
smo239860.setFont('Merriweather', 12.1, 'normal');
smo239860.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239859.addModifier(smo239860);
smo239860.addClass('lyric lyric-0');
smo239876v0ar.push(smo239859);
smo239876v0.addTickables(smo239876v0ar)
fmtsmo23987621.joinVoices([smo239876v0]);
const fmtsmo24089121 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo240891v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240891v0ar = [];
const smo240872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240872.setAttribute('id', 'smo240872');
smo240891v0ar.push(smo240872);
const smo240873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240873.setAttribute('id', 'smo240873');
smo240891v0ar.push(smo240873);
const smo240874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240874.setAttribute('id', 'smo240874');
smo240891v0ar.push(smo240874);
const smo240875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240875.setAttribute('id', 'smo240875');
smo240891v0ar.push(smo240875);
smo240891v0.addTickables(smo240891v0ar)
fmtsmo24089121.joinVoices([smo240891v0]);
const fmtsmo24188121 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo241881v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241881v0ar = [];
const smo241862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241862.setAttribute('id', 'smo241862');
smo241881v0ar.push(smo241862);
const smo241863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo241863.setAttribute('id', 'smo241863');
smo241881v0ar.push(smo241863);
const smo241864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241864.setAttribute('id', 'smo241864');
smo241881v0ar.push(smo241864);
const smo241865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo241865.setAttribute('id', 'smo241865');
smo241881v0ar.push(smo241865);
smo241881v0.addTickables(smo241881v0ar)
fmtsmo24188121.joinVoices([smo241881v0]);
const fmtsmo24283121 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo242831v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242831v0ar = [];
const smo242812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242812.setAttribute('id', 'smo242812');
smo242831v0ar.push(smo242812);
const smo242813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242813.setAttribute('id', 'smo242813');
smo242831v0ar.push(smo242813);
const smo242814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo242814.setAttribute('id', 'smo242814');
smo242831v0ar.push(smo242814);
const smo242815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242815.setAttribute('id', 'smo242815');
smo242831v0ar.push(smo242815);
smo242831v0.addTickables(smo242831v0ar)
fmtsmo24283121.joinVoices([smo242831v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23987621.format([smo239876v0,smo240891v0,smo241881v0,smo242831v0], 207);
const stavesmo239876 = new VF.Stave(342, 1516, 221);
stavesmo239876.setAttribute('id', 'stavesmo239876');
stavesmo239876.setBegBarType(VF.Barline.type.NONE);
stavesmo239876.setContext(context);
stavesmo239876.draw();
smo239876v0.draw(context, stavesmo239876);
const stavesmo240891 = new VF.Stave(342, 1627, 221);
stavesmo240891.setAttribute('id', 'stavesmo240891');
stavesmo240891.setBegBarType(VF.Barline.type.NONE);
stavesmo240891.setContext(context);
stavesmo240891.draw();
smo240891v0.draw(context, stavesmo240891);
const stavesmo241881 = new VF.Stave(342, 1710, 221);
stavesmo241881.setAttribute('id', 'stavesmo241881');
stavesmo241881.setBegBarType(VF.Barline.type.NONE);
stavesmo241881.setContext(context);
stavesmo241881.draw();
smo241881v0.draw(context, stavesmo241881);
const stavesmo242831 = new VF.Stave(342, 1804, 221);
stavesmo242831.setAttribute('id', 'stavesmo242831');
stavesmo242831.setBegBarType(VF.Barline.type.NONE);
stavesmo242831.setContext(context);
stavesmo242831.draw();
smo242831v0.draw(context, stavesmo242831);
const fmtsmo23990622 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo239906v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239906v0ar = [];
const smo239877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239877.setAttribute('id', 'smo239877');
const smo239878 = new VF.Annotation('-');
smo239878.setAttribute('id', 'smo239878');
smo239878.setFont('Merriweather', 12.1, 'normal');
smo239878.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239877.addModifier(smo239878);
smo239878.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239877);
const smo239879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo239879.setAttribute('id', 'smo239879');
const smo239880 = new VF.Annotation('-');
smo239880.setAttribute('id', 'smo239880');
smo239880.setFont('Merriweather', 12.1, 'normal');
smo239880.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239879.addModifier(smo239880);
smo239880.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239879);
const smo239881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239881.setAttribute('id', 'smo239881');
const smo239882 = new VF.Annotation('-');
smo239882.setAttribute('id', 'smo239882');
smo239882.setFont('Merriweather', 12.1, 'normal');
smo239882.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239881.addModifier(smo239882);
smo239882.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239881);
const smo239883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo239883.setAttribute('id', 'smo239883');
const smo2398830acc = new VF.Accidental('#');
smo239883.addModifier(smo2398830acc, 0);
const smo239884 = new VF.Annotation('-');
smo239884.setAttribute('id', 'smo239884');
smo239884.setFont('Merriweather', 12.1, 'normal');
smo239884.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239883.addModifier(smo239884);
smo239884.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239883);
const smo239885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239885.setAttribute('id', 'smo239885');
const smo239886 = new VF.Annotation('-');
smo239886.setAttribute('id', 'smo239886');
smo239886.setFont('Merriweather', 12.1, 'normal');
smo239886.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239885.addModifier(smo239886);
smo239886.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239885);
const smo239887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo239887.setAttribute('id', 'smo239887');
const smo2398870acc = new VF.Accidental('n');
smo239887.addModifier(smo2398870acc, 0);
const smo239888 = new VF.Annotation('-');
smo239888.setAttribute('id', 'smo239888');
smo239888.setFont('Merriweather', 12.1, 'normal');
smo239888.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239887.addModifier(smo239888);
smo239888.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239887);
const smo239889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239889.setAttribute('id', 'smo239889');
const smo2398890acc = new VF.Accidental('#');
smo239889.addModifier(smo2398890acc, 0);
const smo239890 = new VF.Annotation('по');
smo239890.setAttribute('id', 'smo239890');
smo239890.setFont('Merriweather', 12.1, 'normal');
smo239890.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239889.addModifier(smo239890);
smo239890.addClass('lyric lyric-0 lyric-hyphen');
smo239906v0ar.push(smo239889);
smo239906v0.addTickables(smo239906v0ar)
fmtsmo23990622.joinVoices([smo239906v0]);
const fmtsmo24090922 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo240909v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240909v0ar = [];
const smo240892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240892.setAttribute('id', 'smo240892');
smo240909v0ar.push(smo240892);
const smo240893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo240893.setAttribute('id', 'smo240893');
const smo2408930acc = new VF.Accidental('#');
smo240893.addModifier(smo2408930acc, 0);
smo240893.addModifier(new VF.Dot(), 0);
smo240909v0ar.push(smo240893);
smo240909v0.addTickables(smo240909v0ar)
fmtsmo24090922.joinVoices([smo240909v0]);
const fmtsmo24189922 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo241899v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241899v0ar = [];
const smo241882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241882.setAttribute('id', 'smo241882');
smo241899v0ar.push(smo241882);
const smo241883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241883.setAttribute('id', 'smo241883');
smo241883.addModifier(new VF.Dot(), 0);
smo241899v0ar.push(smo241883);
smo241899v0.addTickables(smo241899v0ar)
fmtsmo24189922.joinVoices([smo241899v0]);
const fmtsmo24284822 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo242848v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242848v0ar = [];
const smo242832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242832.setAttribute('id', 'smo242832');
smo242848v0ar.push(smo242832);
smo242848v0.addTickables(smo242848v0ar)
fmtsmo24284822.joinVoices([smo242848v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249842 = smo239879.getStemDirection();
smo239879.setStemDirection(dirsmo249842);
smo239881.setStemDirection(dirsmo249842);
smo239883.setStemDirection(dirsmo249842);
smo239885.setStemDirection(dirsmo249842);
const smo249842 = new VF.Beam([smo239879,smo239881,smo239883,smo239885]);
 
// formatting measures in staff group smo243368
fmtsmo23990622.format([smo239906v0,smo240909v0,smo241899v0,smo242848v0], 240);
const stavesmo239906 = new VF.Stave(563, 1516, 254);
stavesmo239906.setAttribute('id', 'stavesmo239906');
stavesmo239906.setBegBarType(VF.Barline.type.NONE);
stavesmo239906.setContext(context);
stavesmo239906.draw();
smo239906v0.draw(context, stavesmo239906);
smo249842.setContext(context);
smo249842.draw();
const stavesmo240909 = new VF.Stave(563, 1627, 254);
stavesmo240909.setAttribute('id', 'stavesmo240909');
stavesmo240909.setBegBarType(VF.Barline.type.NONE);
stavesmo240909.setContext(context);
stavesmo240909.draw();
smo240909v0.draw(context, stavesmo240909);
const stavesmo241899 = new VF.Stave(563, 1710, 254);
stavesmo241899.setAttribute('id', 'stavesmo241899');
stavesmo241899.setBegBarType(VF.Barline.type.NONE);
stavesmo241899.setContext(context);
stavesmo241899.draw();
smo241899v0.draw(context, stavesmo241899);
const stavesmo242848 = new VF.Stave(563, 1804, 254);
stavesmo242848.setAttribute('id', 'stavesmo242848');
stavesmo242848.setBegBarType(VF.Barline.type.NONE);
stavesmo242848.setContext(context);
stavesmo242848.draw();
smo242848v0.draw(context, stavesmo242848);
const fmtsmo23992523 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo239925v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239925v0ar = [];
const smo239907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239907.setAttribute('id', 'smo239907');
smo239907.addModifier(new VF.Dot(), 0);
const smo239908 = new VF.Annotation('ешь');
smo239908.setAttribute('id', 'smo239908');
smo239908.setFont('Merriweather', 12.1, 'normal');
smo239908.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239907.addModifier(smo239908);
smo239908.addClass('lyric lyric-0');
smo239925v0ar.push(smo239907);
const smo239909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239909.setAttribute('id', 'smo239909');
smo239925v0ar.push(smo239909);
smo239925v0.addTickables(smo239925v0ar)
fmtsmo23992523.joinVoices([smo239925v0]);
const fmtsmo24092723 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo240927v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240927v0ar = [];
const smo240910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240910.setAttribute('id', 'smo240910');
smo240910.addModifier(new VF.Dot(), 0);
smo240927v0ar.push(smo240910);
const smo240911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240911.setAttribute('id', 'smo240911');
smo240927v0ar.push(smo240911);
smo240927v0.addTickables(smo240927v0ar)
fmtsmo24092723.joinVoices([smo240927v0]);
const fmtsmo24191723 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo241917v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241917v0ar = [];
const smo241900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo241900.setAttribute('id', 'smo241900');
smo241900.addModifier(new VF.Dot(), 0);
smo241917v0ar.push(smo241900);
const smo241901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo241901.setAttribute('id', 'smo241901');
smo241917v0ar.push(smo241901);
smo241917v0.addTickables(smo241917v0ar)
fmtsmo24191723.joinVoices([smo241917v0]);
const fmtsmo24286623 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo242866v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242866v0ar = [];
const smo242849 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242849.setAttribute('id', 'smo242849');
smo242849.addModifier(new VF.Dot(), 0);
smo242866v0ar.push(smo242849);
const smo242850 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242850.setAttribute('id', 'smo242850');
smo242866v0ar.push(smo242850);
smo242866v0.addTickables(smo242866v0ar)
fmtsmo24286623.joinVoices([smo242866v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23992523.format([smo239925v0,smo240927v0,smo241917v0,smo242866v0], 93);
const stavesmo239925 = new VF.Stave(817, 1516, 107);
stavesmo239925.setAttribute('id', 'stavesmo239925');
stavesmo239925.setBegBarType(VF.Barline.type.NONE);
stavesmo239925.setContext(context);
stavesmo239925.draw();
smo239925v0.draw(context, stavesmo239925);
const stavesmo240927 = new VF.Stave(817, 1627, 107);
stavesmo240927.setAttribute('id', 'stavesmo240927');
stavesmo240927.setBegBarType(VF.Barline.type.NONE);
stavesmo240927.setContext(context);
stavesmo240927.draw();
smo240927v0.draw(context, stavesmo240927);
const stavesmo241917 = new VF.Stave(817, 1710, 107);
stavesmo241917.setAttribute('id', 'stavesmo241917');
stavesmo241917.setBegBarType(VF.Barline.type.NONE);
stavesmo241917.setContext(context);
stavesmo241917.draw();
smo241917v0.draw(context, stavesmo241917);
const stavesmo242866 = new VF.Stave(817, 1804, 107);
stavesmo242866.setAttribute('id', 'stavesmo242866');
stavesmo242866.setBegBarType(VF.Barline.type.NONE);
stavesmo242866.setContext(context);
stavesmo242866.draw();
smo242866v0.draw(context, stavesmo242866);
const fmtsmo23995524 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo239955v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239955v0ar = [];
const smo239926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239926.setAttribute('id', 'smo239926');
const smo239927 = new VF.Annotation('Со');
smo239927.setAttribute('id', 'smo239927');
smo239927.setFont('Merriweather', 12.1, 'normal');
smo239927.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239926.addModifier(smo239927);
smo239927.addClass('lyric lyric-0');
smo239955v0ar.push(smo239926);
const smo239928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239928.setAttribute('id', 'smo239928');
const smo239929 = new VF.Annotation('-');
smo239929.setAttribute('id', 'smo239929');
smo239929.setFont('Merriweather', 12.1, 'normal');
smo239929.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239928.addModifier(smo239929);
smo239929.addClass('lyric lyric-0 lyric-hyphen');
smo239955v0ar.push(smo239928);
const smo239930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239930.setAttribute('id', 'smo239930');
const smo239931 = new VF.Annotation('-');
smo239931.setAttribute('id', 'smo239931');
smo239931.setFont('Merriweather', 12.1, 'normal');
smo239931.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239930.addModifier(smo239931);
smo239931.addClass('lyric lyric-0 lyric-hyphen');
smo239955v0ar.push(smo239930);
const smo239932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo239932.setAttribute('id', 'smo239932');
const smo2399320acc = new VF.Accidental('#');
smo239932.addModifier(smo2399320acc, 0);
const smo239933 = new VF.Annotation('-');
smo239933.setAttribute('id', 'smo239933');
smo239933.setFont('Merriweather', 12.1, 'normal');
smo239933.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239932.addModifier(smo239933);
smo239933.addClass('lyric lyric-0 lyric-hyphen');
smo239955v0ar.push(smo239932);
const smo239934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239934.setAttribute('id', 'smo239934');
const smo239935 = new VF.Annotation('-');
smo239935.setAttribute('id', 'smo239935');
smo239935.setFont('Merriweather', 12.1, 'normal');
smo239935.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239934.addModifier(smo239935);
smo239935.addClass('lyric lyric-0 lyric-hyphen');
smo239955v0ar.push(smo239934);
const smo239936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239936.setAttribute('id', 'smo239936');
const smo239937 = new VF.Annotation('лo');
smo239937.setAttribute('id', 'smo239937');
smo239937.setFont('Merriweather', 12.1, 'normal');
smo239937.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239936.addModifier(smo239937);
smo239937.addClass('lyric lyric-0');
smo239955v0ar.push(smo239936);
const smo239938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239938.setAttribute('id', 'smo239938');
const smo239939 = new VF.Annotation('-');
smo239939.setAttribute('id', 'smo239939');
smo239939.setFont('Merriweather', 12.1, 'normal');
smo239939.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239938.addModifier(smo239939);
smo239939.addClass('lyric lyric-0 lyric-hyphen');
smo239955v0ar.push(smo239938);
smo239955v0.addTickables(smo239955v0ar)
fmtsmo23995524.joinVoices([smo239955v0]);
const fmtsmo24094824 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo240948v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240948v0ar = [];
const smo240928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240928.setAttribute('id', 'smo240928');
smo240948v0ar.push(smo240928);
const smo240929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240929.setAttribute('id', 'smo240929');
const smo240930 = new VF.Ornament('');
smo240929.addModifier(smo240930, 0);
smo240948v0ar.push(smo240929);
const smo240931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo240931.setAttribute('id', 'smo240931');
const smo2409310acc = new VF.Accidental('#');
smo240931.addModifier(smo2409310acc, 0);
smo240948v0ar.push(smo240931);
const smo240932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240932.setAttribute('id', 'smo240932');
smo240948v0ar.push(smo240932);
smo240948v0.addTickables(smo240948v0ar)
fmtsmo24094824.joinVoices([smo240948v0]);
const fmtsmo24193424 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo241934v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241934v0ar = [];
const smo241918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241918.setAttribute('id', 'smo241918');
smo241934v0ar.push(smo241918);
smo241934v0.addTickables(smo241934v0ar)
fmtsmo24193424.joinVoices([smo241934v0]);
const fmtsmo24288624 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo242886v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242886v0ar = [];
const smo242867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242867.setAttribute('id', 'smo242867');
smo242886v0ar.push(smo242867);
const smo242868 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242868.setAttribute('id', 'smo242868');
smo242886v0ar.push(smo242868);
const smo242869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo242869.setAttribute('id', 'smo242869');
smo242886v0ar.push(smo242869);
const smo242870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242870.setAttribute('id', 'smo242870');
smo242886v0ar.push(smo242870);
smo242886v0.addTickables(smo242886v0ar)
fmtsmo24288624.joinVoices([smo242886v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
const dirsmo249859 = smo239928.getStemDirection();
smo239928.setStemDirection(dirsmo249859);
smo239930.setStemDirection(dirsmo249859);
smo239932.setStemDirection(dirsmo249859);
smo239934.setStemDirection(dirsmo249859);
const smo249859 = new VF.Beam([smo239928,smo239930,smo239932,smo239934]);
 
// formatting measures in staff group smo243368
fmtsmo23995524.format([smo239955v0,smo240948v0,smo241934v0,smo242886v0], 239);
const stavesmo239955 = new VF.Stave(924, 1516, 253);
stavesmo239955.setAttribute('id', 'stavesmo239955');
stavesmo239955.setBegBarType(VF.Barline.type.NONE);
stavesmo239955.setContext(context);
stavesmo239955.draw();
smo239955v0.draw(context, stavesmo239955);
smo249859.setContext(context);
smo249859.draw();
const stavesmo240948 = new VF.Stave(924, 1627, 253);
stavesmo240948.setAttribute('id', 'stavesmo240948');
stavesmo240948.setBegBarType(VF.Barline.type.NONE);
stavesmo240948.setContext(context);
stavesmo240948.draw();
smo240948v0.draw(context, stavesmo240948);
const stavesmo241934 = new VF.Stave(924, 1710, 253);
stavesmo241934.setAttribute('id', 'stavesmo241934');
stavesmo241934.setBegBarType(VF.Barline.type.NONE);
stavesmo241934.setContext(context);
stavesmo241934.draw();
smo241934v0.draw(context, stavesmo241934);
const stavesmo242886 = new VF.Stave(924, 1804, 253);
stavesmo242886.setAttribute('id', 'stavesmo242886');
stavesmo242886.setBegBarType(VF.Barline.type.NONE);
stavesmo242886.setContext(context);
stavesmo242886.draw();
smo242886v0.draw(context, stavesmo242886);
const fmtsmo23997525 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo239975v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239975v0ar = [];
const smo239956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239956.setAttribute('id', 'smo239956');
const smo239957 = new VF.Annotation('вей');
smo239957.setAttribute('id', 'smo239957');
smo239957.setFont('Merriweather', 12.1, 'normal');
smo239957.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239956.addModifier(smo239957);
smo239957.addClass('lyric lyric-0');
smo239975v0ar.push(smo239956);
const smo239958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239958.setAttribute('id', 'smo239958');
const smo239959 = new VF.Annotation('мой');
smo239959.setAttribute('id', 'smo239959');
smo239959.setFont('Merriweather', 12.1, 'normal');
smo239959.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo239958.addModifier(smo239959);
smo239959.addClass('lyric lyric-0');
smo239975v0ar.push(smo239958);
smo239975v0.addTickables(smo239975v0ar)
fmtsmo23997525.joinVoices([smo239975v0]);
const fmtsmo24096925 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo240969v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240969v0ar = [];
const smo240949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240949.setAttribute('id', 'smo240949');
smo240969v0ar.push(smo240949);
const smo240950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240950.setAttribute('id', 'smo240950');
const smo240951 = new VF.Ornament('');
smo240950.addModifier(smo240951, 0);
smo240969v0ar.push(smo240950);
const smo240952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240952.setAttribute('id', 'smo240952');
smo240969v0ar.push(smo240952);
const smo240953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240953.setAttribute('id', 'smo240953');
smo240969v0ar.push(smo240953);
smo240969v0.addTickables(smo240969v0ar)
fmtsmo24096925.joinVoices([smo240969v0]);
const fmtsmo24195125 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo241951v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241951v0ar = [];
const smo241935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo241935.setAttribute('id', 'smo241935');
smo241951v0ar.push(smo241935);
smo241951v0.addTickables(smo241951v0ar)
fmtsmo24195125.joinVoices([smo241951v0]);
const fmtsmo24290425 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo242904v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242904v0ar = [];
const smo242887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo242887.setAttribute('id', 'smo242887');
smo242904v0ar.push(smo242887);
const smo242888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo242888.setAttribute('id', 'smo242888');
smo242904v0ar.push(smo242888);
smo242904v0.addTickables(smo242904v0ar)
fmtsmo24290425.joinVoices([smo242904v0]);
// create beam groups and tuplets for format grp smo243368 before formatting
 
// formatting measures in staff group smo243368
fmtsmo23997525.format([smo239975v0,smo240969v0,smo241951v0,smo242904v0], 181);
const stavesmo239975 = new VF.Stave(1177, 1516, 195);
stavesmo239975.setAttribute('id', 'stavesmo239975');
stavesmo239975.setBegBarType(VF.Barline.type.NONE);
stavesmo239975.setContext(context);
stavesmo239975.draw();
smo239975v0.draw(context, stavesmo239975);
const stavesmo240969 = new VF.Stave(1177, 1627, 195);
stavesmo240969.setAttribute('id', 'stavesmo240969');
stavesmo240969.setBegBarType(VF.Barline.type.NONE);
stavesmo240969.setContext(context);
stavesmo240969.draw();
smo240969v0.draw(context, stavesmo240969);
const stavesmo241951 = new VF.Stave(1177, 1710, 195);
stavesmo241951.setAttribute('id', 'stavesmo241951');
stavesmo241951.setBegBarType(VF.Barline.type.NONE);
stavesmo241951.setContext(context);
stavesmo241951.draw();
smo241951v0.draw(context, stavesmo241951);
const stavesmo242904 = new VF.Stave(1177, 1804, 195);
stavesmo242904.setAttribute('id', 'stavesmo242904');
stavesmo242904.setBegBarType(VF.Barline.type.NONE);
stavesmo242904.setContext(context);
stavesmo242904.draw();
smo242904v0.draw(context, stavesmo242904);
const rightsmo243368stavesmo2399753 = new VF.StaveConnector(stavesmo239975, stavesmo242904).setType(0);
rightsmo243368stavesmo2399753.setContext(context).draw();
// modifier from 0-18-0-0 to 0-18-0-1
const smo250708 = new VF.Curve(smo239787, smo239789, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"positionEnd":1}'));
smo250708.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo250709 = new VF.TextBracket({ start: smo239877, stop: smo239907, text: 'ritard', position: 1 });
smo250709.setLine(1).setContext(context).draw();
// modifier from 2-24-0-0 to 2-25-0-0
const smo250710 = new VF.StaveTie({ first_note: smo241918, last_note: smo241935, 
          firstNote: smo241918, lastNote: smo241935, first_indices: [0], last_indices: [0]});
smo250710.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo239592').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239594').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239596').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239614').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239636').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239655').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239657').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239659').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239677').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239679').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239681').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239699').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239701').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239703').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239705').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239707').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239725').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239744').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239748').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239766').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239768').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239770').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239791').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239810').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239831').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239833').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239836').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239838').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239856').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239858').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239860').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239878').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239880').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239882').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239886').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo239888').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo239890').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo239908').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239927').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo239929').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo239931').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo239933').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239935').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo239937').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo239939').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo239957').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo239959').setAttributeNS('', 'transform', 'translate(0 15)');
}
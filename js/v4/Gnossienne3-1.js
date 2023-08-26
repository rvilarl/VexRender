// @@ Gnossienne No 3 p 2/1  by Erik Satie
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
const fmtsmo844616 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo84461v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84461v0ar = [];
const smo84421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84421.setAttribute('id', 'smo84421');
smo84461v0ar.push(smo84421);
const smo84422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo84422.setAttribute('id', 'smo84422');
smo84461v0ar.push(smo84422);
const smo84423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84423.setAttribute('id', 'smo84423');
const smo844230acc = new VF.Accidental('#');
smo84423.addModifier(smo844230acc, 0);
smo84461v0ar.push(smo84423);
const smo84424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84424.setAttribute('id', 'smo84424');
smo84461v0ar.push(smo84424);
const smo84425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84425.setAttribute('id', 'smo84425');
const smo844250acc = new VF.Accidental('#');
smo84425.addModifier(smo844250acc, 0);
smo84461v0ar.push(smo84425);
const smo84426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84426.setAttribute('id', 'smo84426');
smo84461v0ar.push(smo84426);
const smo84427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84427.setAttribute('id', 'smo84427');
const smo844270acc = new VF.Accidental('#');
smo84427.addModifier(smo844270acc, 0);
smo84461v0ar.push(smo84427);
const smo84428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84428.setAttribute('id', 'smo84428');
smo84461v0ar.push(smo84428);
const smo84429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84429.setAttribute('id', 'smo84429');
smo84461v0ar.push(smo84429);
const smo84430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84430.setAttribute('id', 'smo84430');
smo84461v0ar.push(smo84430);
const smo84431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84431.setAttribute('id', 'smo84431');
smo84461v0ar.push(smo84431);
const smo84432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84432.setAttribute('id', 'smo84432');
smo84461v0ar.push(smo84432);
const smo84433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84433.setAttribute('id', 'smo84433');
smo84461v0ar.push(smo84433);
const smo84434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo84434.setAttribute('id', 'smo84434');
smo84461v0ar.push(smo84434);
const smo84435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84435.setAttribute('id', 'smo84435');
smo84461v0ar.push(smo84435);
const smo84436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84436.setAttribute('id', 'smo84436');
smo84461v0ar.push(smo84436);
const smo84437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84437.setAttribute('id', 'smo84437');
smo84461v0ar.push(smo84437);
const smo84438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84438.setAttribute('id', 'smo84438');
smo84461v0ar.push(smo84438);
const smo84439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84439.setAttribute('id', 'smo84439');
smo84461v0ar.push(smo84439);
const smo84440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84440.setAttribute('id', 'smo84440');
smo84461v0ar.push(smo84440);
const smo84441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84441.setAttribute('id', 'smo84441');
smo84461v0ar.push(smo84441);
const smo84442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84442.setAttribute('id', 'smo84442');
smo84461v0ar.push(smo84442);
const smo84443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84443.setAttribute('id', 'smo84443');
smo84461v0ar.push(smo84443);
const smo84444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84444.setAttribute('id', 'smo84444');
smo84461v0ar.push(smo84444);
const smo84445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84445.setAttribute('id', 'smo84445');
smo84461v0ar.push(smo84445);
smo84461v0.addTickables(smo84461v0ar)
fmtsmo844616.joinVoices([smo84461v0]);
const fmtsmo849166 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo84916v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84916v0ar = [];
const smo84885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84885.setAttribute('id', 'smo84885');
smo84916v0ar.push(smo84885);
const smo84886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84886.setAttribute('id', 'smo84886');
const smo848860acc = new VF.Accidental('#');
smo84886.addModifier(smo848860acc, 0);
smo84916v0ar.push(smo84886);
const smo84887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84887.setAttribute('id', 'smo84887');
smo84916v0ar.push(smo84887);
const smo84888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84888.setAttribute('id', 'smo84888');
smo84916v0ar.push(smo84888);
const smo84889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84889.setAttribute('id', 'smo84889');
smo84916v0ar.push(smo84889);
const smo84890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84890.setAttribute('id', 'smo84890');
smo84916v0ar.push(smo84890);
const smo84891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84891.setAttribute('id', 'smo84891');
smo84916v0ar.push(smo84891);
const smo84892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84892.setAttribute('id', 'smo84892');
smo84916v0ar.push(smo84892);
const smo84893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84893.setAttribute('id', 'smo84893');
smo84916v0ar.push(smo84893);
const smo84894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84894.setAttribute('id', 'smo84894');
smo84916v0ar.push(smo84894);
const smo84895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84895.setAttribute('id', 'smo84895');
smo84916v0ar.push(smo84895);
const smo84896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84896.setAttribute('id', 'smo84896');
smo84916v0ar.push(smo84896);
smo84916v0.addTickables(smo84916v0ar)
fmtsmo849166.joinVoices([smo84916v0]);
const smo84916v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84916v1ar = [];
const smo84897 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo84897.setAttribute('id', 'smo84897');
smo84897.setStyle({ fillStyle: "#115511" });
smo84916v1ar.push(smo84897);
const smo84898 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84898.setAttribute('id', 'smo84898');
smo84898.setStyle({ fillStyle: "#115511" });
smo84916v1ar.push(smo84898);
const smo84899 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84899.setAttribute('id', 'smo84899');
smo84899.setStyle({ fillStyle: "#115511" });
smo84916v1ar.push(smo84899);
const smo84900 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84900.setAttribute('id', 'smo84900');
smo84900.setStyle({ fillStyle: "#115511" });
smo84916v1ar.push(smo84900);
smo84916v1.addTickables(smo84916v1ar)
fmtsmo849166.joinVoices([smo84916v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86405 = smo84422.getStemDirection();
smo84422.setStemDirection(dirsmo86405);
smo84423.setStemDirection(dirsmo86405);
smo84424.setStemDirection(dirsmo86405);
smo84425.setStemDirection(dirsmo86405);
const smo86405 = new VF.Beam([smo84422,smo84423,smo84424,smo84425]);
const dirsmo86406 = smo84426.getStemDirection();
smo84426.setStemDirection(dirsmo86406);
smo84427.setStemDirection(dirsmo86406);
smo84428.setStemDirection(dirsmo86406);
smo84429.setStemDirection(dirsmo86406);
const smo86406 = new VF.Beam([smo84426,smo84427,smo84428,smo84429]);
const dirsmo86407 = smo84430.getStemDirection();
smo84430.setStemDirection(dirsmo86407);
smo84431.setStemDirection(dirsmo86407);
smo84432.setStemDirection(dirsmo86407);
smo84433.setStemDirection(dirsmo86407);
const smo86407 = new VF.Beam([smo84430,smo84431,smo84432,smo84433]);
const dirsmo86408 = smo84434.getStemDirection();
smo84434.setStemDirection(dirsmo86408);
smo84435.setStemDirection(dirsmo86408);
smo84436.setStemDirection(dirsmo86408);
smo84437.setStemDirection(dirsmo86408);
const smo86408 = new VF.Beam([smo84434,smo84435,smo84436,smo84437]);
const dirsmo86409 = smo84438.getStemDirection();
smo84438.setStemDirection(dirsmo86409);
smo84439.setStemDirection(dirsmo86409);
smo84440.setStemDirection(dirsmo86409);
smo84441.setStemDirection(dirsmo86409);
const smo86409 = new VF.Beam([smo84438,smo84439,smo84440,smo84441]);
const dirsmo86410 = smo84442.getStemDirection();
smo84442.setStemDirection(dirsmo86410);
smo84443.setStemDirection(dirsmo86410);
smo84444.setStemDirection(dirsmo86410);
smo84445.setStemDirection(dirsmo86410);
const smo86410 = new VF.Beam([smo84442,smo84443,smo84444,smo84445]);
 
// formatting measures in staff group smo85078
fmtsmo844616.format([smo84461v0,smo84916v0,smo84916v1], 1118);
const stavesmo84461 = new VF.Stave(103, 173.00000000000023, 1174);
stavesmo84461.setAttribute('id', 'stavesmo84461');
stavesmo84461.setBegBarType(1);
stavesmo84461.addClef('treble');
stavesmo84461.setContext(context);
stavesmo84461.draw();
smo84461v0.draw(context, stavesmo84461);
smo86405.setContext(context);
smo86405.draw();
smo86406.setContext(context);
smo86406.draw();
smo86407.setContext(context);
smo86407.draw();
smo86408.setContext(context);
smo86408.draw();
smo86409.setContext(context);
smo86409.draw();
smo86410.setContext(context);
smo86410.draw();
const stavesmo84916 = new VF.Stave(103, 286.0000000000002, 1174);
stavesmo84916.setAttribute('id', 'stavesmo84916');
stavesmo84916.setBegBarType(1);
stavesmo84916.addClef('bass');
stavesmo84916.setContext(context);
stavesmo84916.draw();
smo84916v0.draw(context, stavesmo84916);
smo84916v1.draw(context, stavesmo84916);
const leftsmo85078stavesmo844611 = new VF.StaveConnector(stavesmo84461, stavesmo84916).setType(3);
leftsmo85078stavesmo844611.setContext(context).draw();
const fmtsmo844977 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo84497v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84497v0ar = [];
const smo84462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo84462.setAttribute('id', 'smo84462');
smo84497v0ar.push(smo84462);
const smo84463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo84463.setAttribute('id', 'smo84463');
const smo844630acc = new VF.Accidental('#');
smo84463.addModifier(smo844630acc, 0);
smo84497v0ar.push(smo84463);
const smo84464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo84464.setAttribute('id', 'smo84464');
smo84497v0ar.push(smo84464);
const smo84465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo84465.setAttribute('id', 'smo84465');
const smo844650acc = new VF.Accidental('#');
smo84465.addModifier(smo844650acc, 0);
smo84497v0ar.push(smo84465);
const smo84466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84466.setAttribute('id', 'smo84466');
smo84497v0ar.push(smo84466);
const smo84467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84467.setAttribute('id', 'smo84467');
const smo844670acc = new VF.Accidental('#');
smo84467.addModifier(smo844670acc, 0);
smo84497v0ar.push(smo84467);
const smo84468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84468.setAttribute('id', 'smo84468');
smo84497v0ar.push(smo84468);
const smo84469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo84469.setAttribute('id', 'smo84469');
smo84497v0ar.push(smo84469);
const smo84470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84470.setAttribute('id', 'smo84470');
smo84497v0ar.push(smo84470);
const smo84471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84471.setAttribute('id', 'smo84471');
smo84497v0ar.push(smo84471);
const smo84472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84472.setAttribute('id', 'smo84472');
smo84497v0ar.push(smo84472);
const smo84473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84473.setAttribute('id', 'smo84473');
smo84497v0ar.push(smo84473);
const smo84474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo84475 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo84475.setAttribute('id', 'smo84475');
const acc0smo84475 = new VF.Accidental('#');
smo84475.addModifier(acc0smo84475, 0)
const ggrpsmo84474 = new VF.GraceNoteGroup([smo84475]);
ggrpsmo84474.beamNotes();
smo84474.addModifier(ggrpsmo84474, 0);
smo84474.setAttribute('id', 'smo84474');
const smo844740acc = new VF.Accidental('n');
smo84474.addModifier(smo844740acc, 0);
smo84497v0ar.push(smo84474);
const smo84476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo84476.setAttribute('id', 'smo84476');
smo84497v0ar.push(smo84476);
const smo84477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84477.setAttribute('id', 'smo84477');
smo84497v0ar.push(smo84477);
const smo84478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
const smo84479 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["cn/5"],"slash":false}'))
smo84479.setAttribute('id', 'smo84479');
const ggrpsmo84478 = new VF.GraceNoteGroup([smo84479]);
ggrpsmo84478.beamNotes();
smo84478.addModifier(ggrpsmo84478, 0);
smo84478.setAttribute('id', 'smo84478');
const smo844780acc = new VF.Accidental('b');
smo84478.addModifier(smo844780acc, 0);
smo84497v0ar.push(smo84478);
const smo84480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo84480.setAttribute('id', 'smo84480');
smo84497v0ar.push(smo84480);
const smo84481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84481.setAttribute('id', 'smo84481');
smo84497v0ar.push(smo84481);
smo84497v0.addTickables(smo84497v0ar)
fmtsmo844977.joinVoices([smo84497v0]);
const fmtsmo849567 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo84956v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84956v0ar = [];
const smo84917 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84917.setAttribute('id', 'smo84917');
smo84956v0ar.push(smo84917);
const smo84918 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84918.setAttribute('id', 'smo84918');
smo84956v0ar.push(smo84918);
const smo84919 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo84919.setAttribute('id', 'smo84919');
smo84956v0ar.push(smo84919);
const smo84920 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84920.setAttribute('id', 'smo84920');
smo84956v0ar.push(smo84920);
const smo84921 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84921.setAttribute('id', 'smo84921');
const smo849210acc = new VF.Accidental('#');
smo84921.addModifier(smo849210acc, 0);
smo84956v0ar.push(smo84921);
const smo84922 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo84922.setAttribute('id', 'smo84922');
smo84956v0ar.push(smo84922);
const smo84923 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84923.setAttribute('id', 'smo84923');
smo84956v0ar.push(smo84923);
const smo84924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84924.setAttribute('id', 'smo84924');
smo84956v0ar.push(smo84924);
const smo84925 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84925.setAttribute('id', 'smo84925');
smo84956v0ar.push(smo84925);
const smo84926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84926.setAttribute('id', 'smo84926');
smo84956v0ar.push(smo84926);
const smo84927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84927.setAttribute('id', 'smo84927');
smo84956v0ar.push(smo84927);
const smo84928 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo84928.setAttribute('id', 'smo84928');
smo84956v0ar.push(smo84928);
const smo84929 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84929.setAttribute('id', 'smo84929');
smo84956v0ar.push(smo84929);
const smo84930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84930.setAttribute('id', 'smo84930');
const smo849300acc = new VF.Accidental('b');
smo84930.addModifier(smo849300acc, 0);
smo84956v0ar.push(smo84930);
const smo84931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84931.setAttribute('id', 'smo84931');
smo84956v0ar.push(smo84931);
const smo84932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84932.setAttribute('id', 'smo84932');
smo84956v0ar.push(smo84932);
const smo84933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84933.setAttribute('id', 'smo84933');
smo84956v0ar.push(smo84933);
const smo84934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84934.setAttribute('id', 'smo84934');
smo84956v0ar.push(smo84934);
smo84956v0.addTickables(smo84956v0ar)
fmtsmo849567.joinVoices([smo84956v0]);
const smo84956v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84956v1ar = [];
const smo84935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo84935.setAttribute('id', 'smo84935');
smo84935.setStyle({ fillStyle: "#115511" });
smo84956v1ar.push(smo84935);
const smo84936 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo84936.setAttribute('id', 'smo84936');
smo84936.setStyle({ fillStyle: "#115511" });
smo84956v1ar.push(smo84936);
const smo84937 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo84937.setAttribute('id', 'smo84937');
smo84937.setStyle({ fillStyle: "#115511" });
smo84956v1ar.push(smo84937);
const smo84938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo84938.setAttribute('id', 'smo84938');
smo84938.setStyle({ fillStyle: "#115511" });
smo84956v1ar.push(smo84938);
const smo84939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo84939.setAttribute('id', 'smo84939');
smo84939.setStyle({ fillStyle: "#115511" });
smo84956v1ar.push(smo84939);
const smo84940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo84940.setAttribute('id', 'smo84940');
smo84940.setStyle({ fillStyle: "#115511" });
smo84956v1ar.push(smo84940);
smo84956v1.addTickables(smo84956v1ar)
fmtsmo849567.joinVoices([smo84956v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86423 = smo84462.getStemDirection();
smo84462.setStemDirection(dirsmo86423);
smo84463.setStemDirection(dirsmo86423);
smo84464.setStemDirection(dirsmo86423);
smo84465.setStemDirection(dirsmo86423);
const smo86423 = new VF.Beam([smo84462,smo84463,smo84464,smo84465]);
const dirsmo86424 = smo84466.getStemDirection();
smo84466.setStemDirection(dirsmo86424);
smo84467.setStemDirection(dirsmo86424);
smo84468.setStemDirection(dirsmo86424);
smo84469.setStemDirection(dirsmo86424);
const smo86424 = new VF.Beam([smo84466,smo84467,smo84468,smo84469]);
const dirsmo86425 = smo84470.getStemDirection();
smo84470.setStemDirection(dirsmo86425);
smo84471.setStemDirection(dirsmo86425);
const smo86425 = new VF.Beam([smo84470,smo84471]);
 
// formatting measures in staff group smo85078
fmtsmo844977.format([smo84497v0,smo84956v0,smo84956v1], 1118);
const stavesmo84497 = new VF.Stave(103, 455.0000000000002, 1174);
stavesmo84497.setAttribute('id', 'stavesmo84497');
stavesmo84497.setBegBarType(1);
stavesmo84497.addClef('treble');
stavesmo84497.setContext(context);
stavesmo84497.draw();
smo84497v0.draw(context, stavesmo84497);
smo86423.setContext(context);
smo86423.draw();
smo86424.setContext(context);
smo86424.draw();
smo86425.setContext(context);
smo86425.draw();
const stavesmo84956 = new VF.Stave(103, 573.0000000000002, 1174);
stavesmo84956.setAttribute('id', 'stavesmo84956');
stavesmo84956.setBegBarType(1);
stavesmo84956.addClef('bass');
stavesmo84956.setContext(context);
stavesmo84956.draw();
smo84956v0.draw(context, stavesmo84956);
smo84956v1.draw(context, stavesmo84956);
const leftsmo85078stavesmo844971 = new VF.StaveConnector(stavesmo84497, stavesmo84956).setType(3);
leftsmo85078stavesmo844971.setContext(context).draw();
const fmtsmo845378 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo84537v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84537v0ar = [];
const smo84498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo84498.setAttribute('id', 'smo84498');
const smo844980acc = new VF.Accidental('b');
smo84498.addModifier(smo844980acc, 0);
smo84537v0ar.push(smo84498);
const smo84499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84499.setAttribute('id', 'smo84499');
smo84537v0ar.push(smo84499);
const smo84500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84500.setAttribute('id', 'smo84500');
smo84537v0ar.push(smo84500);
const smo84501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo84501.setAttribute('id', 'smo84501');
const smo845010acc = new VF.Accidental('b');
smo84501.addModifier(smo845010acc, 0);
smo84537v0ar.push(smo84501);
const smo84502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84502.setAttribute('id', 'smo84502');
smo84537v0ar.push(smo84502);
const smo84503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84503.setAttribute('id', 'smo84503');
smo84537v0ar.push(smo84503);
const smo84504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84504.setAttribute('id', 'smo84504');
smo84537v0ar.push(smo84504);
const smo84505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo84505.setAttribute('id', 'smo84505');
smo84537v0ar.push(smo84505);
const smo84506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84506.setAttribute('id', 'smo84506');
smo84537v0ar.push(smo84506);
const smo84507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84507.setAttribute('id', 'smo84507');
smo84537v0ar.push(smo84507);
const smo84508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84508.setAttribute('id', 'smo84508');
smo84537v0ar.push(smo84508);
const smo84509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84509.setAttribute('id', 'smo84509');
smo84537v0ar.push(smo84509);
const smo84510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo84511 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo84511.setAttribute('id', 'smo84511');
const ggrpsmo84510 = new VF.GraceNoteGroup([smo84511]);
ggrpsmo84510.beamNotes();
smo84510.addModifier(ggrpsmo84510, 0);
smo84510.setAttribute('id', 'smo84510');
smo84537v0ar.push(smo84510);
const smo84512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84512.setAttribute('id', 'smo84512');
smo84537v0ar.push(smo84512);
const smo84513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84513.setAttribute('id', 'smo84513');
smo84537v0ar.push(smo84513);
const smo84514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo84514.setAttribute('id', 'smo84514');
smo84537v0ar.push(smo84514);
const smo84515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84515.setAttribute('id', 'smo84515');
smo84537v0ar.push(smo84515);
const smo84516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84516.setAttribute('id', 'smo84516');
smo84537v0ar.push(smo84516);
const smo84517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo84517.setAttribute('id', 'smo84517');
smo84537v0ar.push(smo84517);
const smo84518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo84518.setAttribute('id', 'smo84518');
smo84537v0ar.push(smo84518);
const smo84519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84519.setAttribute('id', 'smo84519');
smo84537v0ar.push(smo84519);
const smo84520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84520.setAttribute('id', 'smo84520');
smo84537v0ar.push(smo84520);
const smo84521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo84521.setAttribute('id', 'smo84521');
smo84537v0ar.push(smo84521);
smo84537v0.addTickables(smo84537v0ar)
fmtsmo845378.joinVoices([smo84537v0]);
const fmtsmo849928 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo84992v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84992v0ar = [];
const smo84957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84957.setAttribute('id', 'smo84957');
smo84992v0ar.push(smo84957);
const smo84958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84958.setAttribute('id', 'smo84958');
const smo849580acc = new VF.Accidental('b');
smo84958.addModifier(smo849580acc, 0);
smo84992v0ar.push(smo84958);
const smo84959 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84959.setAttribute('id', 'smo84959');
smo84992v0ar.push(smo84959);
const smo84960 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84960.setAttribute('id', 'smo84960');
smo84992v0ar.push(smo84960);
const smo84961 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84961.setAttribute('id', 'smo84961');
smo84992v0ar.push(smo84961);
const smo84962 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84962.setAttribute('id', 'smo84962');
smo84992v0ar.push(smo84962);
const smo84963 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84963.setAttribute('id', 'smo84963');
smo84992v0ar.push(smo84963);
const smo84964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84964.setAttribute('id', 'smo84964');
const smo849640acc = new VF.Accidental('n');
smo84964.addModifier(smo849640acc, 0);
smo84992v0ar.push(smo84964);
const smo84965 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84965.setAttribute('id', 'smo84965');
smo84992v0ar.push(smo84965);
const smo84966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84966.setAttribute('id', 'smo84966');
smo84992v0ar.push(smo84966);
const smo84967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84967.setAttribute('id', 'smo84967');
smo84992v0ar.push(smo84967);
const smo84968 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84968.setAttribute('id', 'smo84968');
smo84992v0ar.push(smo84968);
const smo84969 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84969.setAttribute('id', 'smo84969');
smo84992v0ar.push(smo84969);
const smo84970 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84970.setAttribute('id', 'smo84970');
const smo849700acc = new VF.Accidental('b');
smo84970.addModifier(smo849700acc, 0);
smo84992v0ar.push(smo84970);
const smo84971 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84971.setAttribute('id', 'smo84971');
smo84992v0ar.push(smo84971);
smo84992v0.addTickables(smo84992v0ar)
fmtsmo849928.joinVoices([smo84992v0]);
const smo84992v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84992v1ar = [];
const smo84972 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo84972.setAttribute('id', 'smo84972');
smo84972.setStyle({ fillStyle: "#115511" });
smo84992v1ar.push(smo84972);
const smo84973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo84973.setAttribute('id', 'smo84973');
smo84973.setStyle({ fillStyle: "#115511" });
smo84992v1ar.push(smo84973);
const smo84974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84974.setAttribute('id', 'smo84974');
smo84974.setStyle({ fillStyle: "#115511" });
smo84992v1ar.push(smo84974);
const smo84975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo84975.setAttribute('id', 'smo84975');
smo84975.setStyle({ fillStyle: "#115511" });
smo84992v1ar.push(smo84975);
const smo84976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo84976.setAttribute('id', 'smo84976');
smo84976.setStyle({ fillStyle: "#115511" });
smo84992v1ar.push(smo84976);
smo84992v1.addTickables(smo84992v1ar)
fmtsmo849928.joinVoices([smo84992v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86439 = smo84498.getStemDirection();
smo84498.setStemDirection(dirsmo86439);
smo84499.setStemDirection(dirsmo86439);
smo84500.setStemDirection(dirsmo86439);
smo84501.setStemDirection(dirsmo86439);
const smo86439 = new VF.Beam([smo84498,smo84499,smo84500,smo84501]);
const dirsmo86440 = smo84502.getStemDirection();
smo84502.setStemDirection(dirsmo86440);
smo84503.setStemDirection(dirsmo86440);
smo84504.setStemDirection(dirsmo86440);
smo84505.setStemDirection(dirsmo86440);
const smo86440 = new VF.Beam([smo84502,smo84503,smo84504,smo84505]);
const dirsmo86441 = smo84506.getStemDirection();
smo84506.setStemDirection(dirsmo86441);
smo84507.setStemDirection(dirsmo86441);
const smo86441 = new VF.Beam([smo84506,smo84507]);
const dirsmo86442 = smo84514.getStemDirection();
smo84514.setStemDirection(dirsmo86442);
smo84515.setStemDirection(dirsmo86442);
smo84516.setStemDirection(dirsmo86442);
smo84517.setStemDirection(dirsmo86442);
const smo86442 = new VF.Beam([smo84514,smo84515,smo84516,smo84517]);
const dirsmo86443 = smo84518.getStemDirection();
smo84518.setStemDirection(dirsmo86443);
smo84519.setStemDirection(dirsmo86443);
smo84520.setStemDirection(dirsmo86443);
smo84521.setStemDirection(dirsmo86443);
const smo86443 = new VF.Beam([smo84518,smo84519,smo84520,smo84521]);
 
// formatting measures in staff group smo85078
fmtsmo845378.format([smo84537v0,smo84992v0,smo84992v1], 1117);
const stavesmo84537 = new VF.Stave(103, 713.0000000000002, 1174);
stavesmo84537.setAttribute('id', 'stavesmo84537');
stavesmo84537.setBegBarType(1);
stavesmo84537.addClef('treble');
stavesmo84537.setContext(context);
stavesmo84537.draw();
smo84537v0.draw(context, stavesmo84537);
smo86439.setContext(context);
smo86439.draw();
smo86440.setContext(context);
smo86440.draw();
smo86441.setContext(context);
smo86441.draw();
smo86442.setContext(context);
smo86442.draw();
smo86443.setContext(context);
smo86443.draw();
const stavesmo84992 = new VF.Stave(103, 836.0000000000002, 1174);
stavesmo84992.setAttribute('id', 'stavesmo84992');
stavesmo84992.setBegBarType(1);
stavesmo84992.addClef('bass');
stavesmo84992.setContext(context);
stavesmo84992.draw();
smo84992v0.draw(context, stavesmo84992);
smo84992v1.draw(context, stavesmo84992);
const leftsmo85078stavesmo845371 = new VF.StaveConnector(stavesmo84537, stavesmo84992).setType(3);
leftsmo85078stavesmo845371.setContext(context).draw();
const fmtsmo845869 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo84586v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84586v0ar = [];
const smo84538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84538.setAttribute('id', 'smo84538');
smo84586v0ar.push(smo84538);
const smo84539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84539.setAttribute('id', 'smo84539');
smo84586v0ar.push(smo84539);
const smo84540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84540.setAttribute('id', 'smo84540');
smo84586v0ar.push(smo84540);
const smo84541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84541.setAttribute('id', 'smo84541');
smo84586v0ar.push(smo84541);
const smo84542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo84543 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo84543.setAttribute('id', 'smo84543');
const ggrpsmo84542 = new VF.GraceNoteGroup([smo84543]);
ggrpsmo84542.beamNotes();
smo84542.addModifier(ggrpsmo84542, 0);
smo84542.setAttribute('id', 'smo84542');
smo84586v0ar.push(smo84542);
const smo84544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84544.setAttribute('id', 'smo84544');
smo84586v0ar.push(smo84544);
const smo84545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84545.setAttribute('id', 'smo84545');
smo84586v0ar.push(smo84545);
const smo84546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84546.setAttribute('id', 'smo84546');
const smo845460acc = new VF.Accidental('#');
smo84546.addModifier(smo845460acc, 0);
smo84586v0ar.push(smo84546);
const smo84547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84547.setAttribute('id', 'smo84547');
smo84586v0ar.push(smo84547);
const smo84548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84548.setAttribute('id', 'smo84548');
const smo845480acc = new VF.Accidental('#');
smo84548.addModifier(smo845480acc, 0);
smo84586v0ar.push(smo84548);
const smo84549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84549.setAttribute('id', 'smo84549');
smo84586v0ar.push(smo84549);
const smo84550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84550.setAttribute('id', 'smo84550');
smo84586v0ar.push(smo84550);
const smo84551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84551.setAttribute('id', 'smo84551');
smo84586v0ar.push(smo84551);
const smo84552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84552.setAttribute('id', 'smo84552');
smo84586v0ar.push(smo84552);
const smo84553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84553.setAttribute('id', 'smo84553');
smo84586v0ar.push(smo84553);
const smo84554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84554.setAttribute('id', 'smo84554');
smo84586v0ar.push(smo84554);
const smo84555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84555.setAttribute('id', 'smo84555');
smo84586v0ar.push(smo84555);
const smo84556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84556.setAttribute('id', 'smo84556');
smo84586v0ar.push(smo84556);
const smo84557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84557.setAttribute('id', 'smo84557');
smo84586v0ar.push(smo84557);
const smo84558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84558.setAttribute('id', 'smo84558');
smo84586v0ar.push(smo84558);
const smo84559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84559.setAttribute('id', 'smo84559');
smo84586v0ar.push(smo84559);
const smo84560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84560.setAttribute('id', 'smo84560');
smo84586v0ar.push(smo84560);
const smo84561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84561.setAttribute('id', 'smo84561');
smo84586v0ar.push(smo84561);
const smo84562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84562.setAttribute('id', 'smo84562');
smo84586v0ar.push(smo84562);
smo84586v0.addTickables(smo84586v0ar)
fmtsmo845869.joinVoices([smo84586v0]);
const smo84586v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84586v1ar = [];
const smo84563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84563.setAttribute('id', 'smo84563');
smo84563.setStyle({ fillStyle: '#aaaaaa7f' });
smo84586v1ar.push(smo84563);
const smo84564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84564.setAttribute('id', 'smo84564');
smo84564.setStyle({ fillStyle: '#aaaaaa7f' });
smo84586v1ar.push(smo84564);
const smo84565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84565.setAttribute('id', 'smo84565');
smo84565.setStyle({ fillStyle: "#115511" });
smo84586v1ar.push(smo84565);
const smo84566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84566.setAttribute('id', 'smo84566');
smo84566.setStyle({ fillStyle: "#115511" });
smo84586v1ar.push(smo84566);
const smo84567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84567.setAttribute('id', 'smo84567');
smo84567.setStyle({ fillStyle: '#aaaaaa7f' });
smo84586v1ar.push(smo84567);
const smo84568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84568.setAttribute('id', 'smo84568');
smo84568.setStyle({ fillStyle: "#115511" });
smo84586v1ar.push(smo84568);
const smo84569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84569.setAttribute('id', 'smo84569');
smo84569.setStyle({ fillStyle: "#115511" });
smo84586v1ar.push(smo84569);
const smo84570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84570.setAttribute('id', 'smo84570');
smo84570.setStyle({ fillStyle: "#115511" });
smo84586v1ar.push(smo84570);
smo84586v1.addTickables(smo84586v1ar)
fmtsmo845869.joinVoices([smo84586v1]);
const fmtsmo850309 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo85030v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85030v0ar = [];
const smo84993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84993.setAttribute('id', 'smo84993');
smo85030v0ar.push(smo84993);
const smo84994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84994.setAttribute('id', 'smo84994');
const smo849940acc = new VF.Accidental('b');
smo84994.addModifier(smo849940acc, 0);
smo85030v0ar.push(smo84994);
const smo84995 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo84995.setAttribute('id', 'smo84995');
smo85030v0ar.push(smo84995);
const smo84996 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84996.setAttribute('id', 'smo84996');
smo85030v0ar.push(smo84996);
const smo84997 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84997.setAttribute('id', 'smo84997');
const smo849970acc = new VF.Accidental('n');
smo84997.addModifier(smo849970acc, 0);
smo85030v0ar.push(smo84997);
const smo84998 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo84998.setAttribute('id', 'smo84998');
smo85030v0ar.push(smo84998);
const smo84999 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo84999.setAttribute('id', 'smo84999');
smo85030v0ar.push(smo84999);
const smo85000 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85000.setAttribute('id', 'smo85000');
smo85000.setStyle({ fillStyle: '#aaaaaa7f' });
smo85000.addModifier(new VF.Dot(), 0);
smo85030v0ar.push(smo85000);
const smo85001 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85001.setAttribute('id', 'smo85001');
smo85030v0ar.push(smo85001);
const smo85002 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85002.setAttribute('id', 'smo85002');
smo85002.setStyle({ fillStyle: '#aaaaaa7f' });
smo85002.addModifier(new VF.Dot(), 0);
smo85030v0ar.push(smo85002);
const smo85003 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85003.setAttribute('id', 'smo85003');
smo85030v0ar.push(smo85003);
const smo85004 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo85004.setAttribute('id', 'smo85004');
smo85030v0ar.push(smo85004);
const smo85005 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo85005.setAttribute('id', 'smo85005');
smo85030v0ar.push(smo85005);
const smo85006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85006.setAttribute('id', 'smo85006');
smo85030v0ar.push(smo85006);
const smo85007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo85007.setAttribute('id', 'smo85007');
smo85030v0ar.push(smo85007);
const smo85008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo85008.setAttribute('id', 'smo85008');
smo85030v0ar.push(smo85008);
smo85030v0.addTickables(smo85030v0ar)
fmtsmo850309.joinVoices([smo85030v0]);
const smo85030v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85030v1ar = [];
const smo85009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo85009.setAttribute('id', 'smo85009');
smo85009.setStyle({ fillStyle: "#115511" });
smo85030v1ar.push(smo85009);
const smo85010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo85010.setAttribute('id', 'smo85010');
smo85010.setStyle({ fillStyle: "#115511" });
smo85030v1ar.push(smo85010);
const smo85011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo85011.setAttribute('id', 'smo85011');
smo85011.setStyle({ fillStyle: "#115511" });
smo85030v1ar.push(smo85011);
const smo85012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo85012.setAttribute('id', 'smo85012');
smo85012.setStyle({ fillStyle: "#115511" });
smo85030v1ar.push(smo85012);
const smo85013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo85013.setAttribute('id', 'smo85013');
smo85013.setStyle({ fillStyle: "#115511" });
smo85030v1ar.push(smo85013);
const smo85014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo85014.setAttribute('id', 'smo85014');
smo85014.setStyle({ fillStyle: "#115511" });
smo85030v1ar.push(smo85014);
smo85030v1.addTickables(smo85030v1ar)
fmtsmo850309.joinVoices([smo85030v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86458 = smo84538.getStemDirection();
smo84538.setStemDirection(dirsmo86458);
smo84539.setStemDirection(dirsmo86458);
const smo86458 = new VF.Beam([smo84538,smo84539]);
const dirsmo86459 = smo84544.getStemDirection();
smo84544.setStemDirection(dirsmo86459);
smo84545.setStemDirection(dirsmo86459);
smo84546.setStemDirection(dirsmo86459);
smo84547.setStemDirection(dirsmo86459);
const smo86459 = new VF.Beam([smo84544,smo84545,smo84546,smo84547]);
const dirsmo86460 = smo84548.getStemDirection();
smo84548.setStemDirection(dirsmo86460);
smo84549.setStemDirection(dirsmo86460);
const smo86460 = new VF.Beam([smo84548,smo84549]);
const dirsmo86461 = smo84552.getStemDirection();
smo84552.setStemDirection(dirsmo86461);
smo84553.setStemDirection(dirsmo86461);
const smo86461 = new VF.Beam([smo84552,smo84553]);
const dirsmo86462 = smo84554.getStemDirection();
smo84554.setStemDirection(dirsmo86462);
smo84555.setStemDirection(dirsmo86462);
smo84556.setStemDirection(dirsmo86462);
smo84557.setStemDirection(dirsmo86462);
const smo86462 = new VF.Beam([smo84554,smo84555,smo84556,smo84557]);
const dirsmo86463 = smo84558.getStemDirection();
smo84558.setStemDirection(dirsmo86463);
smo84559.setStemDirection(dirsmo86463);
const smo86463 = new VF.Beam([smo84558,smo84559]);
 
// formatting measures in staff group smo85078
fmtsmo845869.format([smo84586v0,smo84586v1,smo85030v0,smo85030v1], 1117);
const stavesmo84586 = new VF.Stave(103, 1000.0000000000002, 1174);
stavesmo84586.setAttribute('id', 'stavesmo84586');
stavesmo84586.setBegBarType(1);
stavesmo84586.addClef('treble');
stavesmo84586.setContext(context);
stavesmo84586.draw();
smo84586v0.draw(context, stavesmo84586);
smo84586v1.draw(context, stavesmo84586);
smo86458.setContext(context);
smo86458.draw();
smo86459.setContext(context);
smo86459.draw();
smo86460.setContext(context);
smo86460.draw();
smo86461.setContext(context);
smo86461.draw();
smo86462.setContext(context);
smo86462.draw();
smo86463.setContext(context);
smo86463.draw();
const stavesmo85030 = new VF.Stave(103, 1149.0000000000002, 1174);
stavesmo85030.setAttribute('id', 'stavesmo85030');
stavesmo85030.setBegBarType(1);
stavesmo85030.addClef('bass');
stavesmo85030.setContext(context);
stavesmo85030.draw();
smo85030v0.draw(context, stavesmo85030);
smo85030v1.draw(context, stavesmo85030);
const leftsmo85078stavesmo845861 = new VF.StaveConnector(stavesmo84586, stavesmo85030).setType(3);
leftsmo85078stavesmo845861.setContext(context).draw();
const fmtsmo8463410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo84634v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84634v0ar = [];
const smo84587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84587.setAttribute('id', 'smo84587');
smo84634v0ar.push(smo84587);
const smo84588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo84588.setAttribute('id', 'smo84588');
smo84634v0ar.push(smo84588);
const smo84589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84589.setAttribute('id', 'smo84589');
const smo845890acc = new VF.Accidental('#');
smo84589.addModifier(smo845890acc, 0);
smo84634v0ar.push(smo84589);
const smo84590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84590.setAttribute('id', 'smo84590');
smo84634v0ar.push(smo84590);
const smo84591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84591.setAttribute('id', 'smo84591');
const smo845910acc = new VF.Accidental('#');
smo84591.addModifier(smo845910acc, 0);
smo84634v0ar.push(smo84591);
const smo84592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84592.setAttribute('id', 'smo84592');
smo84634v0ar.push(smo84592);
const smo84593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo84593.setAttribute('id', 'smo84593');
smo84634v0ar.push(smo84593);
const smo84594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84594.setAttribute('id', 'smo84594');
smo84634v0ar.push(smo84594);
const smo84595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84595.setAttribute('id', 'smo84595');
smo84634v0ar.push(smo84595);
const smo84596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84596.setAttribute('id', 'smo84596');
smo84634v0ar.push(smo84596);
const smo84597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84597.setAttribute('id', 'smo84597');
smo84634v0ar.push(smo84597);
const smo84598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo84598.setAttribute('id', 'smo84598');
smo84634v0ar.push(smo84598);
const smo84599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84599.setAttribute('id', 'smo84599');
smo84634v0ar.push(smo84599);
const smo84600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo84600.setAttribute('id', 'smo84600');
smo84634v0ar.push(smo84600);
const smo84601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84601.setAttribute('id', 'smo84601');
smo84634v0ar.push(smo84601);
const smo84602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84602.setAttribute('id', 'smo84602');
smo84634v0ar.push(smo84602);
const smo84603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84603.setAttribute('id', 'smo84603');
smo84634v0ar.push(smo84603);
const smo84604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84604.setAttribute('id', 'smo84604');
smo84634v0ar.push(smo84604);
const smo84605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84605.setAttribute('id', 'smo84605');
smo84634v0ar.push(smo84605);
const smo84606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo84606.setAttribute('id', 'smo84606');
smo84634v0ar.push(smo84606);
const smo84607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84607.setAttribute('id', 'smo84607');
smo84634v0ar.push(smo84607);
const smo84608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84608.setAttribute('id', 'smo84608');
smo84634v0ar.push(smo84608);
const smo84609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo84609.setAttribute('id', 'smo84609');
smo84634v0ar.push(smo84609);
const smo84610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84610.setAttribute('id', 'smo84610');
smo84634v0ar.push(smo84610);
const smo84611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84611.setAttribute('id', 'smo84611');
smo84634v0ar.push(smo84611);
smo84634v0.addTickables(smo84634v0ar)
fmtsmo8463410.joinVoices([smo84634v0]);
const smo84634v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo84634v1ar = [];
const smo84612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84612.setAttribute('id', 'smo84612');
smo84612.setStyle({ fillStyle: '#aaaaaa7f' });
smo84634v1ar.push(smo84612);
const smo84613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84613.setAttribute('id', 'smo84613');
smo84613.setStyle({ fillStyle: "#115511" });
smo84634v1ar.push(smo84613);
const smo84614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84614.setAttribute('id', 'smo84614');
smo84614.setStyle({ fillStyle: "#115511" });
smo84634v1ar.push(smo84614);
const smo84615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84615.setAttribute('id', 'smo84615');
smo84615.setStyle({ fillStyle: '#aaaaaa7f' });
smo84634v1ar.push(smo84615);
const smo84616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84616.setAttribute('id', 'smo84616');
smo84616.setStyle({ fillStyle: "#115511" });
smo84634v1ar.push(smo84616);
const smo84617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo84617.setAttribute('id', 'smo84617');
smo84617.setStyle({ fillStyle: "#115511" });
smo84634v1ar.push(smo84617);
const smo84618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo84618.setAttribute('id', 'smo84618');
smo84618.setStyle({ fillStyle: "#115511" });
smo84618.addModifier(new VF.Dot(), 0);
smo84634v1ar.push(smo84618);
smo84634v1.addTickables(smo84634v1ar)
fmtsmo8463410.joinVoices([smo84634v1]);
const fmtsmo8506410 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo85064v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85064v0ar = [];
const smo85031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85031.setAttribute('id', 'smo85031');
smo85064v0ar.push(smo85031);
const smo85032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85032.setAttribute('id', 'smo85032');
smo85032.setStyle({ fillStyle: '#aaaaaa7f' });
smo85032.addModifier(new VF.Dot(), 0);
smo85064v0ar.push(smo85032);
const smo85033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85033.setAttribute('id', 'smo85033');
smo85064v0ar.push(smo85033);
const smo85034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85034.setAttribute('id', 'smo85034');
smo85034.setStyle({ fillStyle: '#aaaaaa7f' });
smo85034.addModifier(new VF.Dot(), 0);
smo85064v0ar.push(smo85034);
const smo85035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85035.setAttribute('id', 'smo85035');
smo85064v0ar.push(smo85035);
const smo85036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo85036.setAttribute('id', 'smo85036');
smo85064v0ar.push(smo85036);
const smo85037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo85037.setAttribute('id', 'smo85037');
smo85064v0ar.push(smo85037);
const smo85038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85038.setAttribute('id', 'smo85038');
smo85064v0ar.push(smo85038);
const smo85039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo85039.setAttribute('id', 'smo85039');
smo85064v0ar.push(smo85039);
const smo85040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo85040.setAttribute('id', 'smo85040');
smo85064v0ar.push(smo85040);
const smo85041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo85041.setAttribute('id', 'smo85041');
smo85064v0ar.push(smo85041);
const smo85042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo85042.setAttribute('id', 'smo85042');
smo85064v0ar.push(smo85042);
const smo85043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo85043.setAttribute('id', 'smo85043');
smo85064v0ar.push(smo85043);
smo85064v0.addTickables(smo85064v0ar)
fmtsmo8506410.joinVoices([smo85064v0]);
const smo85064v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo85064v1ar = [];
const smo85044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo85044.setAttribute('id', 'smo85044');
smo85044.setStyle({ fillStyle: "#115511" });
smo85064v1ar.push(smo85044);
const smo85045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo85045.setAttribute('id', 'smo85045');
smo85045.setStyle({ fillStyle: "#115511" });
smo85064v1ar.push(smo85045);
const smo85046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo85046.setAttribute('id', 'smo85046');
smo85046.setStyle({ fillStyle: "#115511" });
smo85064v1ar.push(smo85046);
const smo85047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo85047.setAttribute('id', 'smo85047');
smo85047.setStyle({ fillStyle: "#115511" });
smo85064v1ar.push(smo85047);
const smo85048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo85048.setAttribute('id', 'smo85048');
smo85048.setStyle({ fillStyle: "#115511" });
smo85064v1ar.push(smo85048);
smo85064v1.addTickables(smo85064v1ar)
fmtsmo8506410.joinVoices([smo85064v1]);
// create beam groups and tuplets for format grp smo85078 before formatting
const dirsmo86477 = smo84587.getStemDirection();
smo84587.setStemDirection(dirsmo86477);
smo84588.setStemDirection(dirsmo86477);
smo84589.setStemDirection(dirsmo86477);
smo84590.setStemDirection(dirsmo86477);
const smo86477 = new VF.Beam([smo84587,smo84588,smo84589,smo84590]);
const dirsmo86478 = smo84591.getStemDirection();
smo84591.setStemDirection(dirsmo86478);
smo84592.setStemDirection(dirsmo86478);
const smo86478 = new VF.Beam([smo84591,smo84592]);
const dirsmo86479 = smo84595.getStemDirection();
smo84595.setStemDirection(dirsmo86479);
smo84596.setStemDirection(dirsmo86479);
const smo86479 = new VF.Beam([smo84595,smo84596]);
const dirsmo86480 = smo84597.getStemDirection();
smo84597.setStemDirection(dirsmo86480);
smo84598.setStemDirection(dirsmo86480);
smo84599.setStemDirection(dirsmo86480);
smo84600.setStemDirection(dirsmo86480);
const smo86480 = new VF.Beam([smo84597,smo84598,smo84599,smo84600]);
const dirsmo86481 = smo84601.getStemDirection();
smo84601.setStemDirection(dirsmo86481);
smo84602.setStemDirection(dirsmo86481);
const smo86481 = new VF.Beam([smo84601,smo84602]);
const dirsmo86482 = smo84605.getStemDirection();
smo84605.setStemDirection(dirsmo86482);
smo84606.setStemDirection(dirsmo86482);
const smo86482 = new VF.Beam([smo84605,smo84606]);
const dirsmo86483 = smo84607.getStemDirection();
smo84607.setStemDirection(dirsmo86483);
smo84608.setStemDirection(dirsmo86483);
const smo86483 = new VF.Beam([smo84607,smo84608]);
 
// formatting measures in staff group smo85078
fmtsmo8463410.format([smo84634v0,smo84634v1,smo85064v0,smo85064v1], 958);
const stavesmo84634 = new VF.Stave(103, 1323.0000000000002, 1022);
stavesmo84634.setAttribute('id', 'stavesmo84634');
stavesmo84634.setBegBarType(1);
stavesmo84634.setEndBarType(3);
stavesmo84634.addClef('treble');
stavesmo84634.setContext(context);
stavesmo84634.draw();
smo84634v0.draw(context, stavesmo84634);
smo84634v1.draw(context, stavesmo84634);
smo86477.setContext(context);
smo86477.draw();
smo86478.setContext(context);
smo86478.draw();
smo86479.setContext(context);
smo86479.draw();
smo86480.setContext(context);
smo86480.draw();
smo86481.setContext(context);
smo86481.draw();
smo86482.setContext(context);
smo86482.draw();
smo86483.setContext(context);
smo86483.draw();
const stavesmo85064 = new VF.Stave(103, 1466.0000000000002, 1022);
stavesmo85064.setAttribute('id', 'stavesmo85064');
stavesmo85064.setBegBarType(1);
stavesmo85064.setEndBarType(3);
stavesmo85064.addClef('bass');
stavesmo85064.setContext(context);
stavesmo85064.draw();
smo85064v0.draw(context, stavesmo85064);
smo85064v1.draw(context, stavesmo85064);
const leftsmo85078stavesmo846341 = new VF.StaveConnector(stavesmo84634, stavesmo85064).setType(3);
leftsmo85078stavesmo846341.setContext(context).draw();
// modifier from 0-7-0-9 to 0-7-0-10
const smo86626 = new VF.StaveTie({ first_note: smo84471, last_note: smo84472, 
          firstNote: smo84471, lastNote: smo84472, first_indices: [0], last_indices: [0]});
smo86626.setContext(context).draw();
// modifier from 0-7-0-12 to 0-7-0-13
const smo86627 = new VF.StaveTie({ first_note: smo84474, last_note: smo84476, 
          firstNote: smo84474, lastNote: smo84476, first_indices: [0], last_indices: [0]});
smo86627.setContext(context).draw();
// modifier from 0-7-0-15 to 0-7-0-16
const smo86628 = new VF.StaveTie({ first_note: smo84478, last_note: smo84480, 
          firstNote: smo84478, lastNote: smo84480, first_indices: [0], last_indices: [0]});
smo86628.setContext(context).draw();
// modifier from 0-8-0-9 to 0-8-0-10
const smo86629 = new VF.StaveTie({ first_note: smo84507, last_note: smo84508, 
          firstNote: smo84507, lastNote: smo84508, first_indices: [0], last_indices: [0]});
smo86629.setContext(context).draw();
// modifier from 0-8-0-12 to 0-8-0-13
const smo86630 = new VF.StaveTie({ first_note: smo84510, last_note: smo84512, 
          firstNote: smo84510, lastNote: smo84512, first_indices: [0], last_indices: [0]});
smo86630.setContext(context).draw();
// modifier from 0-9-0-1 to 0-9-0-2
const smo86631 = new VF.StaveTie({ first_note: smo84539, last_note: smo84540, 
          firstNote: smo84539, lastNote: smo84540, first_indices: [0], last_indices: [0]});
smo86631.setContext(context).draw();
// modifier from 0-9-0-10 to 0-9-0-11
const smo86632 = new VF.StaveTie({ first_note: smo84549, last_note: smo84550, 
          firstNote: smo84549, lastNote: smo84550, first_indices: [0], last_indices: [0]});
smo86632.setContext(context).draw();
// modifier from 0-9-0-20 to 0-9-0-21
const smo86633 = new VF.StaveTie({ first_note: smo84559, last_note: smo84560, 
          firstNote: smo84559, lastNote: smo84560, first_indices: [0], last_indices: [0]});
smo86633.setContext(context).draw();
// modifier from 0-10-0-5 to 0-10-0-6
const smo86634 = new VF.StaveTie({ first_note: smo84592, last_note: smo84593, 
          firstNote: smo84592, lastNote: smo84593, first_indices: [0], last_indices: [0]});
smo86634.setContext(context).draw();
// modifier from 0-10-0-15 to 0-10-0-16
const smo86635 = new VF.StaveTie({ first_note: smo84602, last_note: smo84603, 
          firstNote: smo84602, lastNote: smo84603, first_indices: [0], last_indices: [0]});
smo86635.setContext(context).draw();
// modifier from 0-10-0-21 to 0-10-0-22
const smo86636 = new VF.StaveTie({ first_note: smo84608, last_note: smo84609, 
          firstNote: smo84608, lastNote: smo84609, first_indices: [0], last_indices: [0]});
smo86636.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo86637 = new VF.Curve(smo84422, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo86637.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo86638 = new VF.Curve(null, smo84472, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo86638.setContext(context).draw();
// modifier from 0-8-0-0 to 0-8-0-10
const smo86639 = new VF.Curve(smo84498, smo84508, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":45},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo86639.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo86640 = new VF.Curve(smo84514, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo86640.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo86641 = new VF.Curve(null, smo84540, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo86641.setContext(context).draw();
// modifier from 0-9-0-5 to 0-9-0-11
const smo86642 = new VF.Curve(smo84544, smo84550, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo86642.setContext(context).draw();
// modifier from 0-9-0-13 to 0-9-0-21
const smo86643 = new VF.Curve(smo84552, smo84560, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":30},{"x":0,"y":30}],"invert":true,"position":2,"position_end":2}'));
smo86643.setContext(context).draw();
}
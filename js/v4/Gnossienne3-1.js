// @@ Gnossienne No 3 p 2/2  by Erik Satie
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
const fmtsmo726166 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo72616v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72616v0ar = [];
const smo72576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72576.setAttribute('id', 'smo72576');
smo72616v0ar.push(smo72576);
const smo72577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo72577.setAttribute('id', 'smo72577');
smo72616v0ar.push(smo72577);
const smo72578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72578.setAttribute('id', 'smo72578');
const smo725780acc = new VF.Accidental('#');
smo72578.addModifier(smo725780acc, 0);
smo72616v0ar.push(smo72578);
const smo72579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72579.setAttribute('id', 'smo72579');
smo72616v0ar.push(smo72579);
const smo72580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72580.setAttribute('id', 'smo72580');
const smo725800acc = new VF.Accidental('#');
smo72580.addModifier(smo725800acc, 0);
smo72616v0ar.push(smo72580);
const smo72581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72581.setAttribute('id', 'smo72581');
smo72616v0ar.push(smo72581);
const smo72582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72582.setAttribute('id', 'smo72582');
const smo725820acc = new VF.Accidental('#');
smo72582.addModifier(smo725820acc, 0);
smo72616v0ar.push(smo72582);
const smo72583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72583.setAttribute('id', 'smo72583');
smo72616v0ar.push(smo72583);
const smo72584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72584.setAttribute('id', 'smo72584');
smo72616v0ar.push(smo72584);
const smo72585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72585.setAttribute('id', 'smo72585');
smo72616v0ar.push(smo72585);
const smo72586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72586.setAttribute('id', 'smo72586');
smo72616v0ar.push(smo72586);
const smo72587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72587.setAttribute('id', 'smo72587');
smo72616v0ar.push(smo72587);
const smo72588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72588.setAttribute('id', 'smo72588');
smo72616v0ar.push(smo72588);
const smo72589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo72589.setAttribute('id', 'smo72589');
smo72616v0ar.push(smo72589);
const smo72590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72590.setAttribute('id', 'smo72590');
smo72616v0ar.push(smo72590);
const smo72591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72591.setAttribute('id', 'smo72591');
smo72616v0ar.push(smo72591);
const smo72592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72592.setAttribute('id', 'smo72592');
smo72616v0ar.push(smo72592);
const smo72593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72593.setAttribute('id', 'smo72593');
smo72616v0ar.push(smo72593);
const smo72594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72594.setAttribute('id', 'smo72594');
smo72616v0ar.push(smo72594);
const smo72595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72595.setAttribute('id', 'smo72595');
smo72616v0ar.push(smo72595);
const smo72596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72596.setAttribute('id', 'smo72596');
smo72616v0ar.push(smo72596);
const smo72597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72597.setAttribute('id', 'smo72597');
smo72616v0ar.push(smo72597);
const smo72598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72598.setAttribute('id', 'smo72598');
smo72616v0ar.push(smo72598);
const smo72599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72599.setAttribute('id', 'smo72599');
smo72616v0ar.push(smo72599);
const smo72600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72600.setAttribute('id', 'smo72600');
smo72616v0ar.push(smo72600);
smo72616v0.addTickables(smo72616v0ar)
fmtsmo726166.joinVoices([smo72616v0]);
const fmtsmo730716 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo73071v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73071v0ar = [];
const smo73040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73040.setAttribute('id', 'smo73040');
smo73071v0ar.push(smo73040);
const smo73041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo73041.setAttribute('id', 'smo73041');
const smo730410acc = new VF.Accidental('#');
smo73041.addModifier(smo730410acc, 0);
smo73071v0ar.push(smo73041);
const smo73042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo73042.setAttribute('id', 'smo73042');
smo73071v0ar.push(smo73042);
const smo73043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73043.setAttribute('id', 'smo73043');
smo73071v0ar.push(smo73043);
const smo73044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73044.setAttribute('id', 'smo73044');
smo73071v0ar.push(smo73044);
const smo73045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73045.setAttribute('id', 'smo73045');
smo73071v0ar.push(smo73045);
const smo73046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73046.setAttribute('id', 'smo73046');
smo73071v0ar.push(smo73046);
const smo73047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73047.setAttribute('id', 'smo73047');
smo73071v0ar.push(smo73047);
const smo73048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73048.setAttribute('id', 'smo73048');
smo73071v0ar.push(smo73048);
const smo73049 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73049.setAttribute('id', 'smo73049');
smo73071v0ar.push(smo73049);
const smo73050 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73050.setAttribute('id', 'smo73050');
smo73071v0ar.push(smo73050);
const smo73051 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73051.setAttribute('id', 'smo73051');
smo73071v0ar.push(smo73051);
smo73071v0.addTickables(smo73071v0ar)
fmtsmo730716.joinVoices([smo73071v0]);
const smo73071v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73071v1ar = [];
const smo73052 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo73052.setAttribute('id', 'smo73052');
smo73052.setStyle({ fillStyle: "#115511" });
smo73071v1ar.push(smo73052);
const smo73053 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73053.setAttribute('id', 'smo73053');
smo73053.setStyle({ fillStyle: "#115511" });
smo73071v1ar.push(smo73053);
const smo73054 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73054.setAttribute('id', 'smo73054');
smo73054.setStyle({ fillStyle: "#115511" });
smo73071v1ar.push(smo73054);
const smo73055 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73055.setAttribute('id', 'smo73055');
smo73055.setStyle({ fillStyle: "#115511" });
smo73071v1ar.push(smo73055);
smo73071v1.addTickables(smo73071v1ar)
fmtsmo730716.joinVoices([smo73071v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74560 = smo72577.getStemDirection();
smo72577.setStemDirection(dirsmo74560);
smo72578.setStemDirection(dirsmo74560);
smo72579.setStemDirection(dirsmo74560);
smo72580.setStemDirection(dirsmo74560);
const smo74560 = new VF.Beam([smo72577,smo72578,smo72579,smo72580]);
const dirsmo74561 = smo72581.getStemDirection();
smo72581.setStemDirection(dirsmo74561);
smo72582.setStemDirection(dirsmo74561);
smo72583.setStemDirection(dirsmo74561);
smo72584.setStemDirection(dirsmo74561);
const smo74561 = new VF.Beam([smo72581,smo72582,smo72583,smo72584]);
const dirsmo74562 = smo72585.getStemDirection();
smo72585.setStemDirection(dirsmo74562);
smo72586.setStemDirection(dirsmo74562);
smo72587.setStemDirection(dirsmo74562);
smo72588.setStemDirection(dirsmo74562);
const smo74562 = new VF.Beam([smo72585,smo72586,smo72587,smo72588]);
const dirsmo74563 = smo72589.getStemDirection();
smo72589.setStemDirection(dirsmo74563);
smo72590.setStemDirection(dirsmo74563);
smo72591.setStemDirection(dirsmo74563);
smo72592.setStemDirection(dirsmo74563);
const smo74563 = new VF.Beam([smo72589,smo72590,smo72591,smo72592]);
const dirsmo74564 = smo72593.getStemDirection();
smo72593.setStemDirection(dirsmo74564);
smo72594.setStemDirection(dirsmo74564);
smo72595.setStemDirection(dirsmo74564);
smo72596.setStemDirection(dirsmo74564);
const smo74564 = new VF.Beam([smo72593,smo72594,smo72595,smo72596]);
const dirsmo74565 = smo72597.getStemDirection();
smo72597.setStemDirection(dirsmo74565);
smo72598.setStemDirection(dirsmo74565);
smo72599.setStemDirection(dirsmo74565);
smo72600.setStemDirection(dirsmo74565);
const smo74565 = new VF.Beam([smo72597,smo72598,smo72599,smo72600]);
 
// formatting measures in staff group smo73233
fmtsmo726166.format([smo72616v0,smo73071v0,smo73071v1], 1118);
const stavesmo72616 = new VF.Stave(103, 173.00000000000023, 1174);
stavesmo72616.setAttribute('id', 'stavesmo72616');
stavesmo72616.setBegBarType(1);
stavesmo72616.addClef('treble');
stavesmo72616.setContext(context);
stavesmo72616.draw();
smo72616v0.draw(context, stavesmo72616);
smo74560.setContext(context);
smo74560.draw();
smo74561.setContext(context);
smo74561.draw();
smo74562.setContext(context);
smo74562.draw();
smo74563.setContext(context);
smo74563.draw();
smo74564.setContext(context);
smo74564.draw();
smo74565.setContext(context);
smo74565.draw();
const stavesmo73071 = new VF.Stave(103, 286.0000000000002, 1174);
stavesmo73071.setAttribute('id', 'stavesmo73071');
stavesmo73071.setBegBarType(1);
stavesmo73071.addClef('bass');
stavesmo73071.setContext(context);
stavesmo73071.draw();
smo73071v0.draw(context, stavesmo73071);
smo73071v1.draw(context, stavesmo73071);
const leftsmo73233stavesmo726161 = new VF.StaveConnector(stavesmo72616, stavesmo73071).setType(3);
leftsmo73233stavesmo726161.setContext(context).draw();
const fmtsmo726527 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo72652v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72652v0ar = [];
const smo72617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo72617.setAttribute('id', 'smo72617');
smo72652v0ar.push(smo72617);
const smo72618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo72618.setAttribute('id', 'smo72618');
const smo726180acc = new VF.Accidental('#');
smo72618.addModifier(smo726180acc, 0);
smo72652v0ar.push(smo72618);
const smo72619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo72619.setAttribute('id', 'smo72619');
smo72652v0ar.push(smo72619);
const smo72620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/4/n"]}'))
smo72620.setAttribute('id', 'smo72620');
const smo726200acc = new VF.Accidental('#');
smo72620.addModifier(smo726200acc, 0);
smo72652v0ar.push(smo72620);
const smo72621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72621.setAttribute('id', 'smo72621');
smo72652v0ar.push(smo72621);
const smo72622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72622.setAttribute('id', 'smo72622');
const smo726220acc = new VF.Accidental('#');
smo72622.addModifier(smo726220acc, 0);
smo72652v0ar.push(smo72622);
const smo72623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72623.setAttribute('id', 'smo72623');
smo72652v0ar.push(smo72623);
const smo72624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo72624.setAttribute('id', 'smo72624');
smo72652v0ar.push(smo72624);
const smo72625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72625.setAttribute('id', 'smo72625');
smo72652v0ar.push(smo72625);
const smo72626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72626.setAttribute('id', 'smo72626');
smo72652v0ar.push(smo72626);
const smo72627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72627.setAttribute('id', 'smo72627');
smo72652v0ar.push(smo72627);
const smo72628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72628.setAttribute('id', 'smo72628');
smo72652v0ar.push(smo72628);
const smo72629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
const smo72630 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["f#/4"],"slash":false}'))
smo72630.setAttribute('id', 'smo72630');
const acc0smo72630 = new VF.Accidental('#');
smo72630.addModifier(acc0smo72630, 0)
const ggrpsmo72629 = new VF.GraceNoteGroup([smo72630]);
ggrpsmo72629.beamNotes();
smo72629.addModifier(ggrpsmo72629, 0);
smo72629.setAttribute('id', 'smo72629');
const smo726290acc = new VF.Accidental('n');
smo72629.addModifier(smo726290acc, 0);
smo72652v0ar.push(smo72629);
const smo72631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo72631.setAttribute('id', 'smo72631');
smo72652v0ar.push(smo72631);
const smo72632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72632.setAttribute('id', 'smo72632');
smo72652v0ar.push(smo72632);
const smo72633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
const smo72634 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["cn/5"],"slash":false}'))
smo72634.setAttribute('id', 'smo72634');
const ggrpsmo72633 = new VF.GraceNoteGroup([smo72634]);
ggrpsmo72633.beamNotes();
smo72633.addModifier(ggrpsmo72633, 0);
smo72633.setAttribute('id', 'smo72633');
const smo726330acc = new VF.Accidental('b');
smo72633.addModifier(smo726330acc, 0);
smo72652v0ar.push(smo72633);
const smo72635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo72635.setAttribute('id', 'smo72635');
smo72652v0ar.push(smo72635);
const smo72636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72636.setAttribute('id', 'smo72636');
smo72652v0ar.push(smo72636);
smo72652v0.addTickables(smo72652v0ar)
fmtsmo726527.joinVoices([smo72652v0]);
const fmtsmo731117 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo73111v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73111v0ar = [];
const smo73072 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73072.setAttribute('id', 'smo73072');
smo73111v0ar.push(smo73072);
const smo73073 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73073.setAttribute('id', 'smo73073');
smo73111v0ar.push(smo73073);
const smo73074 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73074.setAttribute('id', 'smo73074');
smo73111v0ar.push(smo73074);
const smo73075 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73075.setAttribute('id', 'smo73075');
smo73111v0ar.push(smo73075);
const smo73076 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo73076.setAttribute('id', 'smo73076');
const smo730760acc = new VF.Accidental('#');
smo73076.addModifier(smo730760acc, 0);
smo73111v0ar.push(smo73076);
const smo73077 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n","bn/3/n","dn/4/n"]}'))
smo73077.setAttribute('id', 'smo73077');
smo73111v0ar.push(smo73077);
const smo73078 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73078.setAttribute('id', 'smo73078');
smo73111v0ar.push(smo73078);
const smo73079 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73079.setAttribute('id', 'smo73079');
smo73111v0ar.push(smo73079);
const smo73080 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73080.setAttribute('id', 'smo73080');
smo73111v0ar.push(smo73080);
const smo73081 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73081.setAttribute('id', 'smo73081');
smo73111v0ar.push(smo73081);
const smo73082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73082.setAttribute('id', 'smo73082');
smo73111v0ar.push(smo73082);
const smo73083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73083.setAttribute('id', 'smo73083');
smo73111v0ar.push(smo73083);
const smo73084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73084.setAttribute('id', 'smo73084');
smo73111v0ar.push(smo73084);
const smo73085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73085.setAttribute('id', 'smo73085');
const smo730850acc = new VF.Accidental('b');
smo73085.addModifier(smo730850acc, 0);
smo73111v0ar.push(smo73085);
const smo73086 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73086.setAttribute('id', 'smo73086');
smo73111v0ar.push(smo73086);
const smo73087 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73087.setAttribute('id', 'smo73087');
smo73111v0ar.push(smo73087);
const smo73088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73088.setAttribute('id', 'smo73088');
smo73111v0ar.push(smo73088);
const smo73089 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73089.setAttribute('id', 'smo73089');
smo73111v0ar.push(smo73089);
smo73111v0.addTickables(smo73111v0ar)
fmtsmo731117.joinVoices([smo73111v0]);
const smo73111v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73111v1ar = [];
const smo73090 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73090.setAttribute('id', 'smo73090');
smo73090.setStyle({ fillStyle: "#115511" });
smo73111v1ar.push(smo73090);
const smo73091 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["bn/1/n"]}'))
smo73091.setAttribute('id', 'smo73091');
smo73091.setStyle({ fillStyle: "#115511" });
smo73111v1ar.push(smo73091);
const smo73092 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo73092.setAttribute('id', 'smo73092');
smo73092.setStyle({ fillStyle: "#115511" });
smo73111v1ar.push(smo73092);
const smo73093 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo73093.setAttribute('id', 'smo73093');
smo73093.setStyle({ fillStyle: "#115511" });
smo73111v1ar.push(smo73093);
const smo73094 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo73094.setAttribute('id', 'smo73094');
smo73094.setStyle({ fillStyle: "#115511" });
smo73111v1ar.push(smo73094);
const smo73095 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo73095.setAttribute('id', 'smo73095');
smo73095.setStyle({ fillStyle: "#115511" });
smo73111v1ar.push(smo73095);
smo73111v1.addTickables(smo73111v1ar)
fmtsmo731117.joinVoices([smo73111v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74578 = smo72617.getStemDirection();
smo72617.setStemDirection(dirsmo74578);
smo72618.setStemDirection(dirsmo74578);
smo72619.setStemDirection(dirsmo74578);
smo72620.setStemDirection(dirsmo74578);
const smo74578 = new VF.Beam([smo72617,smo72618,smo72619,smo72620]);
const dirsmo74579 = smo72621.getStemDirection();
smo72621.setStemDirection(dirsmo74579);
smo72622.setStemDirection(dirsmo74579);
smo72623.setStemDirection(dirsmo74579);
smo72624.setStemDirection(dirsmo74579);
const smo74579 = new VF.Beam([smo72621,smo72622,smo72623,smo72624]);
const dirsmo74580 = smo72625.getStemDirection();
smo72625.setStemDirection(dirsmo74580);
smo72626.setStemDirection(dirsmo74580);
const smo74580 = new VF.Beam([smo72625,smo72626]);
 
// formatting measures in staff group smo73233
fmtsmo726527.format([smo72652v0,smo73111v0,smo73111v1], 1118);
const stavesmo72652 = new VF.Stave(103, 455.0000000000002, 1174);
stavesmo72652.setAttribute('id', 'stavesmo72652');
stavesmo72652.setBegBarType(1);
stavesmo72652.addClef('treble');
stavesmo72652.setContext(context);
stavesmo72652.draw();
smo72652v0.draw(context, stavesmo72652);
smo74578.setContext(context);
smo74578.draw();
smo74579.setContext(context);
smo74579.draw();
smo74580.setContext(context);
smo74580.draw();
const stavesmo73111 = new VF.Stave(103, 573.0000000000002, 1174);
stavesmo73111.setAttribute('id', 'stavesmo73111');
stavesmo73111.setBegBarType(1);
stavesmo73111.addClef('bass');
stavesmo73111.setContext(context);
stavesmo73111.draw();
smo73111v0.draw(context, stavesmo73111);
smo73111v1.draw(context, stavesmo73111);
const leftsmo73233stavesmo726521 = new VF.StaveConnector(stavesmo72652, stavesmo73111).setType(3);
leftsmo73233stavesmo726521.setContext(context).draw();
const fmtsmo726928 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo72692v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72692v0ar = [];
const smo72653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo72653.setAttribute('id', 'smo72653');
const smo726530acc = new VF.Accidental('b');
smo72653.addModifier(smo726530acc, 0);
smo72692v0ar.push(smo72653);
const smo72654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72654.setAttribute('id', 'smo72654');
smo72692v0ar.push(smo72654);
const smo72655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72655.setAttribute('id', 'smo72655');
smo72692v0ar.push(smo72655);
const smo72656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo72656.setAttribute('id', 'smo72656');
const smo726560acc = new VF.Accidental('b');
smo72656.addModifier(smo726560acc, 0);
smo72692v0ar.push(smo72656);
const smo72657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72657.setAttribute('id', 'smo72657');
smo72692v0ar.push(smo72657);
const smo72658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72658.setAttribute('id', 'smo72658');
smo72692v0ar.push(smo72658);
const smo72659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72659.setAttribute('id', 'smo72659');
smo72692v0ar.push(smo72659);
const smo72660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo72660.setAttribute('id', 'smo72660');
smo72692v0ar.push(smo72660);
const smo72661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72661.setAttribute('id', 'smo72661');
smo72692v0ar.push(smo72661);
const smo72662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72662.setAttribute('id', 'smo72662');
smo72692v0ar.push(smo72662);
const smo72663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72663.setAttribute('id', 'smo72663');
smo72692v0ar.push(smo72663);
const smo72664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72664.setAttribute('id', 'smo72664');
smo72692v0ar.push(smo72664);
const smo72665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo72666 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo72666.setAttribute('id', 'smo72666');
const ggrpsmo72665 = new VF.GraceNoteGroup([smo72666]);
ggrpsmo72665.beamNotes();
smo72665.addModifier(ggrpsmo72665, 0);
smo72665.setAttribute('id', 'smo72665');
smo72692v0ar.push(smo72665);
const smo72667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72667.setAttribute('id', 'smo72667');
smo72692v0ar.push(smo72667);
const smo72668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72668.setAttribute('id', 'smo72668');
smo72692v0ar.push(smo72668);
const smo72669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo72669.setAttribute('id', 'smo72669');
smo72692v0ar.push(smo72669);
const smo72670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72670.setAttribute('id', 'smo72670');
smo72692v0ar.push(smo72670);
const smo72671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72671.setAttribute('id', 'smo72671');
smo72692v0ar.push(smo72671);
const smo72672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo72672.setAttribute('id', 'smo72672');
smo72692v0ar.push(smo72672);
const smo72673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo72673.setAttribute('id', 'smo72673');
smo72692v0ar.push(smo72673);
const smo72674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72674.setAttribute('id', 'smo72674');
smo72692v0ar.push(smo72674);
const smo72675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72675.setAttribute('id', 'smo72675');
smo72692v0ar.push(smo72675);
const smo72676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo72676.setAttribute('id', 'smo72676');
smo72692v0ar.push(smo72676);
smo72692v0.addTickables(smo72692v0ar)
fmtsmo726928.joinVoices([smo72692v0]);
const fmtsmo731478 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo73147v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73147v0ar = [];
const smo73112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73112.setAttribute('id', 'smo73112');
smo73147v0ar.push(smo73112);
const smo73113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73113.setAttribute('id', 'smo73113');
const smo731130acc = new VF.Accidental('b');
smo73113.addModifier(smo731130acc, 0);
smo73147v0ar.push(smo73113);
const smo73114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73114.setAttribute('id', 'smo73114');
smo73147v0ar.push(smo73114);
const smo73115 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73115.setAttribute('id', 'smo73115');
smo73147v0ar.push(smo73115);
const smo73116 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73116.setAttribute('id', 'smo73116');
smo73147v0ar.push(smo73116);
const smo73117 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73117.setAttribute('id', 'smo73117');
smo73147v0ar.push(smo73117);
const smo73118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73118.setAttribute('id', 'smo73118');
smo73147v0ar.push(smo73118);
const smo73119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo73119.setAttribute('id', 'smo73119');
const smo731190acc = new VF.Accidental('n');
smo73119.addModifier(smo731190acc, 0);
smo73147v0ar.push(smo73119);
const smo73120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo73120.setAttribute('id', 'smo73120');
smo73147v0ar.push(smo73120);
const smo73121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73121.setAttribute('id', 'smo73121');
smo73147v0ar.push(smo73121);
const smo73122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo73122.setAttribute('id', 'smo73122');
smo73147v0ar.push(smo73122);
const smo73123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo73123.setAttribute('id', 'smo73123');
smo73147v0ar.push(smo73123);
const smo73124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73124.setAttribute('id', 'smo73124');
smo73147v0ar.push(smo73124);
const smo73125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73125.setAttribute('id', 'smo73125');
const smo731250acc = new VF.Accidental('b');
smo73125.addModifier(smo731250acc, 0);
smo73147v0ar.push(smo73125);
const smo73126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73126.setAttribute('id', 'smo73126');
smo73147v0ar.push(smo73126);
smo73147v0.addTickables(smo73147v0ar)
fmtsmo731478.joinVoices([smo73147v0]);
const smo73147v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73147v1ar = [];
const smo73127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo73127.setAttribute('id', 'smo73127');
smo73127.setStyle({ fillStyle: "#115511" });
smo73147v1ar.push(smo73127);
const smo73128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo73128.setAttribute('id', 'smo73128');
smo73128.setStyle({ fillStyle: "#115511" });
smo73147v1ar.push(smo73128);
const smo73129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo73129.setAttribute('id', 'smo73129');
smo73129.setStyle({ fillStyle: "#115511" });
smo73147v1ar.push(smo73129);
const smo73130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo73130.setAttribute('id', 'smo73130');
smo73130.setStyle({ fillStyle: "#115511" });
smo73147v1ar.push(smo73130);
const smo73131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo73131.setAttribute('id', 'smo73131');
smo73131.setStyle({ fillStyle: "#115511" });
smo73147v1ar.push(smo73131);
smo73147v1.addTickables(smo73147v1ar)
fmtsmo731478.joinVoices([smo73147v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74594 = smo72653.getStemDirection();
smo72653.setStemDirection(dirsmo74594);
smo72654.setStemDirection(dirsmo74594);
smo72655.setStemDirection(dirsmo74594);
smo72656.setStemDirection(dirsmo74594);
const smo74594 = new VF.Beam([smo72653,smo72654,smo72655,smo72656]);
const dirsmo74595 = smo72657.getStemDirection();
smo72657.setStemDirection(dirsmo74595);
smo72658.setStemDirection(dirsmo74595);
smo72659.setStemDirection(dirsmo74595);
smo72660.setStemDirection(dirsmo74595);
const smo74595 = new VF.Beam([smo72657,smo72658,smo72659,smo72660]);
const dirsmo74596 = smo72661.getStemDirection();
smo72661.setStemDirection(dirsmo74596);
smo72662.setStemDirection(dirsmo74596);
const smo74596 = new VF.Beam([smo72661,smo72662]);
const dirsmo74597 = smo72669.getStemDirection();
smo72669.setStemDirection(dirsmo74597);
smo72670.setStemDirection(dirsmo74597);
smo72671.setStemDirection(dirsmo74597);
smo72672.setStemDirection(dirsmo74597);
const smo74597 = new VF.Beam([smo72669,smo72670,smo72671,smo72672]);
const dirsmo74598 = smo72673.getStemDirection();
smo72673.setStemDirection(dirsmo74598);
smo72674.setStemDirection(dirsmo74598);
smo72675.setStemDirection(dirsmo74598);
smo72676.setStemDirection(dirsmo74598);
const smo74598 = new VF.Beam([smo72673,smo72674,smo72675,smo72676]);
 
// formatting measures in staff group smo73233
fmtsmo726928.format([smo72692v0,smo73147v0,smo73147v1], 1117);
const stavesmo72692 = new VF.Stave(103, 713.0000000000002, 1174);
stavesmo72692.setAttribute('id', 'stavesmo72692');
stavesmo72692.setBegBarType(1);
stavesmo72692.addClef('treble');
stavesmo72692.setContext(context);
stavesmo72692.draw();
smo72692v0.draw(context, stavesmo72692);
smo74594.setContext(context);
smo74594.draw();
smo74595.setContext(context);
smo74595.draw();
smo74596.setContext(context);
smo74596.draw();
smo74597.setContext(context);
smo74597.draw();
smo74598.setContext(context);
smo74598.draw();
const stavesmo73147 = new VF.Stave(103, 836.0000000000002, 1174);
stavesmo73147.setAttribute('id', 'stavesmo73147');
stavesmo73147.setBegBarType(1);
stavesmo73147.addClef('bass');
stavesmo73147.setContext(context);
stavesmo73147.draw();
smo73147v0.draw(context, stavesmo73147);
smo73147v1.draw(context, stavesmo73147);
const leftsmo73233stavesmo726921 = new VF.StaveConnector(stavesmo72692, stavesmo73147).setType(3);
leftsmo73233stavesmo726921.setContext(context).draw();
const fmtsmo727419 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo72741v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72741v0ar = [];
const smo72693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72693.setAttribute('id', 'smo72693');
smo72741v0ar.push(smo72693);
const smo72694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72694.setAttribute('id', 'smo72694');
smo72741v0ar.push(smo72694);
const smo72695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72695.setAttribute('id', 'smo72695');
smo72741v0ar.push(smo72695);
const smo72696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72696.setAttribute('id', 'smo72696');
smo72741v0ar.push(smo72696);
const smo72697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo72698 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["bn/4"],"slash":false}'))
smo72698.setAttribute('id', 'smo72698');
const ggrpsmo72697 = new VF.GraceNoteGroup([smo72698]);
ggrpsmo72697.beamNotes();
smo72697.addModifier(ggrpsmo72697, 0);
smo72697.setAttribute('id', 'smo72697');
smo72741v0ar.push(smo72697);
const smo72699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72699.setAttribute('id', 'smo72699');
smo72741v0ar.push(smo72699);
const smo72700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72700.setAttribute('id', 'smo72700');
smo72741v0ar.push(smo72700);
const smo72701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72701.setAttribute('id', 'smo72701');
const smo727010acc = new VF.Accidental('#');
smo72701.addModifier(smo727010acc, 0);
smo72741v0ar.push(smo72701);
const smo72702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72702.setAttribute('id', 'smo72702');
smo72741v0ar.push(smo72702);
const smo72703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72703.setAttribute('id', 'smo72703');
const smo727030acc = new VF.Accidental('#');
smo72703.addModifier(smo727030acc, 0);
smo72741v0ar.push(smo72703);
const smo72704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72704.setAttribute('id', 'smo72704');
smo72741v0ar.push(smo72704);
const smo72705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72705.setAttribute('id', 'smo72705');
smo72741v0ar.push(smo72705);
const smo72706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72706.setAttribute('id', 'smo72706');
smo72741v0ar.push(smo72706);
const smo72707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72707.setAttribute('id', 'smo72707');
smo72741v0ar.push(smo72707);
const smo72708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72708.setAttribute('id', 'smo72708');
smo72741v0ar.push(smo72708);
const smo72709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72709.setAttribute('id', 'smo72709');
smo72741v0ar.push(smo72709);
const smo72710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72710.setAttribute('id', 'smo72710');
smo72741v0ar.push(smo72710);
const smo72711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72711.setAttribute('id', 'smo72711');
smo72741v0ar.push(smo72711);
const smo72712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72712.setAttribute('id', 'smo72712');
smo72741v0ar.push(smo72712);
const smo72713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72713.setAttribute('id', 'smo72713');
smo72741v0ar.push(smo72713);
const smo72714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72714.setAttribute('id', 'smo72714');
smo72741v0ar.push(smo72714);
const smo72715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72715.setAttribute('id', 'smo72715');
smo72741v0ar.push(smo72715);
const smo72716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72716.setAttribute('id', 'smo72716');
smo72741v0ar.push(smo72716);
const smo72717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72717.setAttribute('id', 'smo72717');
smo72741v0ar.push(smo72717);
smo72741v0.addTickables(smo72741v0ar)
fmtsmo727419.joinVoices([smo72741v0]);
const smo72741v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72741v1ar = [];
const smo72718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72718.setAttribute('id', 'smo72718');
smo72718.setStyle({ fillStyle: '#aaaaaa7f' });
smo72741v1ar.push(smo72718);
const smo72719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72719.setAttribute('id', 'smo72719');
smo72719.setStyle({ fillStyle: '#aaaaaa7f' });
smo72741v1ar.push(smo72719);
const smo72720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72720.setAttribute('id', 'smo72720');
smo72720.setStyle({ fillStyle: "#115511" });
smo72741v1ar.push(smo72720);
const smo72721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72721.setAttribute('id', 'smo72721');
smo72721.setStyle({ fillStyle: "#115511" });
smo72741v1ar.push(smo72721);
const smo72722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72722.setAttribute('id', 'smo72722');
smo72722.setStyle({ fillStyle: '#aaaaaa7f' });
smo72741v1ar.push(smo72722);
const smo72723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72723.setAttribute('id', 'smo72723');
smo72723.setStyle({ fillStyle: "#115511" });
smo72741v1ar.push(smo72723);
const smo72724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72724.setAttribute('id', 'smo72724');
smo72724.setStyle({ fillStyle: "#115511" });
smo72741v1ar.push(smo72724);
const smo72725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72725.setAttribute('id', 'smo72725');
smo72725.setStyle({ fillStyle: "#115511" });
smo72741v1ar.push(smo72725);
smo72741v1.addTickables(smo72741v1ar)
fmtsmo727419.joinVoices([smo72741v1]);
const fmtsmo731859 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo73185v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73185v0ar = [];
const smo73148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73148.setAttribute('id', 'smo73148');
smo73185v0ar.push(smo73148);
const smo73149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73149.setAttribute('id', 'smo73149');
const smo731490acc = new VF.Accidental('b');
smo73149.addModifier(smo731490acc, 0);
smo73185v0ar.push(smo73149);
const smo73150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo73150.setAttribute('id', 'smo73150');
smo73185v0ar.push(smo73150);
const smo73151 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73151.setAttribute('id', 'smo73151');
smo73185v0ar.push(smo73151);
const smo73152 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo73152.setAttribute('id', 'smo73152');
const smo731520acc = new VF.Accidental('n');
smo73152.addModifier(smo731520acc, 0);
smo73185v0ar.push(smo73152);
const smo73153 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo73153.setAttribute('id', 'smo73153');
smo73185v0ar.push(smo73153);
const smo73154 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73154.setAttribute('id', 'smo73154');
smo73185v0ar.push(smo73154);
const smo73155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73155.setAttribute('id', 'smo73155');
smo73155.setStyle({ fillStyle: '#aaaaaa7f' });
smo73155.addModifier(new VF.Dot(), 0);
smo73185v0ar.push(smo73155);
const smo73156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73156.setAttribute('id', 'smo73156');
smo73185v0ar.push(smo73156);
const smo73157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73157.setAttribute('id', 'smo73157');
smo73157.setStyle({ fillStyle: '#aaaaaa7f' });
smo73157.addModifier(new VF.Dot(), 0);
smo73185v0ar.push(smo73157);
const smo73158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73158.setAttribute('id', 'smo73158');
smo73185v0ar.push(smo73158);
const smo73159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73159.setAttribute('id', 'smo73159');
smo73185v0ar.push(smo73159);
const smo73160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73160.setAttribute('id', 'smo73160');
smo73185v0ar.push(smo73160);
const smo73161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73161.setAttribute('id', 'smo73161');
smo73185v0ar.push(smo73161);
const smo73162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73162.setAttribute('id', 'smo73162');
smo73185v0ar.push(smo73162);
const smo73163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73163.setAttribute('id', 'smo73163');
smo73185v0ar.push(smo73163);
smo73185v0.addTickables(smo73185v0ar)
fmtsmo731859.joinVoices([smo73185v0]);
const smo73185v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73185v1ar = [];
const smo73164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo73164.setAttribute('id', 'smo73164');
smo73164.setStyle({ fillStyle: "#115511" });
smo73185v1ar.push(smo73164);
const smo73165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo73165.setAttribute('id', 'smo73165');
smo73165.setStyle({ fillStyle: "#115511" });
smo73185v1ar.push(smo73165);
const smo73166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo73166.setAttribute('id', 'smo73166');
smo73166.setStyle({ fillStyle: "#115511" });
smo73185v1ar.push(smo73166);
const smo73167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo73167.setAttribute('id', 'smo73167');
smo73167.setStyle({ fillStyle: "#115511" });
smo73185v1ar.push(smo73167);
const smo73168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73168.setAttribute('id', 'smo73168');
smo73168.setStyle({ fillStyle: "#115511" });
smo73185v1ar.push(smo73168);
const smo73169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73169.setAttribute('id', 'smo73169');
smo73169.setStyle({ fillStyle: "#115511" });
smo73185v1ar.push(smo73169);
smo73185v1.addTickables(smo73185v1ar)
fmtsmo731859.joinVoices([smo73185v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74613 = smo72693.getStemDirection();
smo72693.setStemDirection(dirsmo74613);
smo72694.setStemDirection(dirsmo74613);
const smo74613 = new VF.Beam([smo72693,smo72694]);
const dirsmo74614 = smo72699.getStemDirection();
smo72699.setStemDirection(dirsmo74614);
smo72700.setStemDirection(dirsmo74614);
smo72701.setStemDirection(dirsmo74614);
smo72702.setStemDirection(dirsmo74614);
const smo74614 = new VF.Beam([smo72699,smo72700,smo72701,smo72702]);
const dirsmo74615 = smo72703.getStemDirection();
smo72703.setStemDirection(dirsmo74615);
smo72704.setStemDirection(dirsmo74615);
const smo74615 = new VF.Beam([smo72703,smo72704]);
const dirsmo74616 = smo72707.getStemDirection();
smo72707.setStemDirection(dirsmo74616);
smo72708.setStemDirection(dirsmo74616);
const smo74616 = new VF.Beam([smo72707,smo72708]);
const dirsmo74617 = smo72709.getStemDirection();
smo72709.setStemDirection(dirsmo74617);
smo72710.setStemDirection(dirsmo74617);
smo72711.setStemDirection(dirsmo74617);
smo72712.setStemDirection(dirsmo74617);
const smo74617 = new VF.Beam([smo72709,smo72710,smo72711,smo72712]);
const dirsmo74618 = smo72713.getStemDirection();
smo72713.setStemDirection(dirsmo74618);
smo72714.setStemDirection(dirsmo74618);
const smo74618 = new VF.Beam([smo72713,smo72714]);
 
// formatting measures in staff group smo73233
fmtsmo727419.format([smo72741v0,smo72741v1,smo73185v0,smo73185v1], 1117);
const stavesmo72741 = new VF.Stave(103, 1000.0000000000002, 1174);
stavesmo72741.setAttribute('id', 'stavesmo72741');
stavesmo72741.setBegBarType(1);
stavesmo72741.addClef('treble');
stavesmo72741.setContext(context);
stavesmo72741.draw();
smo72741v0.draw(context, stavesmo72741);
smo72741v1.draw(context, stavesmo72741);
smo74613.setContext(context);
smo74613.draw();
smo74614.setContext(context);
smo74614.draw();
smo74615.setContext(context);
smo74615.draw();
smo74616.setContext(context);
smo74616.draw();
smo74617.setContext(context);
smo74617.draw();
smo74618.setContext(context);
smo74618.draw();
const stavesmo73185 = new VF.Stave(103, 1149.0000000000002, 1174);
stavesmo73185.setAttribute('id', 'stavesmo73185');
stavesmo73185.setBegBarType(1);
stavesmo73185.addClef('bass');
stavesmo73185.setContext(context);
stavesmo73185.draw();
smo73185v0.draw(context, stavesmo73185);
smo73185v1.draw(context, stavesmo73185);
const leftsmo73233stavesmo727411 = new VF.StaveConnector(stavesmo72741, stavesmo73185).setType(3);
leftsmo73233stavesmo727411.setContext(context).draw();
const fmtsmo7278910 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo72789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72789v0ar = [];
const smo72742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72742.setAttribute('id', 'smo72742');
smo72789v0ar.push(smo72742);
const smo72743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo72743.setAttribute('id', 'smo72743');
smo72789v0ar.push(smo72743);
const smo72744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72744.setAttribute('id', 'smo72744');
const smo727440acc = new VF.Accidental('#');
smo72744.addModifier(smo727440acc, 0);
smo72789v0ar.push(smo72744);
const smo72745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72745.setAttribute('id', 'smo72745');
smo72789v0ar.push(smo72745);
const smo72746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72746.setAttribute('id', 'smo72746');
const smo727460acc = new VF.Accidental('#');
smo72746.addModifier(smo727460acc, 0);
smo72789v0ar.push(smo72746);
const smo72747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72747.setAttribute('id', 'smo72747');
smo72789v0ar.push(smo72747);
const smo72748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo72748.setAttribute('id', 'smo72748');
smo72789v0ar.push(smo72748);
const smo72749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72749.setAttribute('id', 'smo72749');
smo72789v0ar.push(smo72749);
const smo72750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72750.setAttribute('id', 'smo72750');
smo72789v0ar.push(smo72750);
const smo72751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72751.setAttribute('id', 'smo72751');
smo72789v0ar.push(smo72751);
const smo72752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72752.setAttribute('id', 'smo72752');
smo72789v0ar.push(smo72752);
const smo72753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/5/n"]}'))
smo72753.setAttribute('id', 'smo72753');
smo72789v0ar.push(smo72753);
const smo72754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72754.setAttribute('id', 'smo72754');
smo72789v0ar.push(smo72754);
const smo72755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo72755.setAttribute('id', 'smo72755');
smo72789v0ar.push(smo72755);
const smo72756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72756.setAttribute('id', 'smo72756');
smo72789v0ar.push(smo72756);
const smo72757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72757.setAttribute('id', 'smo72757');
smo72789v0ar.push(smo72757);
const smo72758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72758.setAttribute('id', 'smo72758');
smo72789v0ar.push(smo72758);
const smo72759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72759.setAttribute('id', 'smo72759');
smo72789v0ar.push(smo72759);
const smo72760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72760.setAttribute('id', 'smo72760');
smo72789v0ar.push(smo72760);
const smo72761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo72761.setAttribute('id', 'smo72761');
smo72789v0ar.push(smo72761);
const smo72762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72762.setAttribute('id', 'smo72762');
smo72789v0ar.push(smo72762);
const smo72763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72763.setAttribute('id', 'smo72763');
smo72789v0ar.push(smo72763);
const smo72764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo72764.setAttribute('id', 'smo72764');
smo72789v0ar.push(smo72764);
const smo72765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72765.setAttribute('id', 'smo72765');
smo72789v0ar.push(smo72765);
const smo72766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72766.setAttribute('id', 'smo72766');
smo72789v0ar.push(smo72766);
smo72789v0.addTickables(smo72789v0ar)
fmtsmo7278910.joinVoices([smo72789v0]);
const smo72789v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo72789v1ar = [];
const smo72767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72767.setAttribute('id', 'smo72767');
smo72767.setStyle({ fillStyle: '#aaaaaa7f' });
smo72789v1ar.push(smo72767);
const smo72768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72768.setAttribute('id', 'smo72768');
smo72768.setStyle({ fillStyle: "#115511" });
smo72789v1ar.push(smo72768);
const smo72769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72769.setAttribute('id', 'smo72769');
smo72769.setStyle({ fillStyle: "#115511" });
smo72789v1ar.push(smo72769);
const smo72770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72770.setAttribute('id', 'smo72770');
smo72770.setStyle({ fillStyle: '#aaaaaa7f' });
smo72789v1ar.push(smo72770);
const smo72771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72771.setAttribute('id', 'smo72771');
smo72771.setStyle({ fillStyle: "#115511" });
smo72789v1ar.push(smo72771);
const smo72772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n","en/4/n","an/4/n"]}'))
smo72772.setAttribute('id', 'smo72772');
smo72772.setStyle({ fillStyle: "#115511" });
smo72789v1ar.push(smo72772);
const smo72773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1/2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo72773.setAttribute('id', 'smo72773');
smo72773.setStyle({ fillStyle: "#115511" });
smo72773.addModifier(new VF.Dot(), 0);
smo72789v1ar.push(smo72773);
smo72789v1.addTickables(smo72789v1ar)
fmtsmo7278910.joinVoices([smo72789v1]);
const fmtsmo7321910 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo73219v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73219v0ar = [];
const smo73186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73186.setAttribute('id', 'smo73186');
smo73219v0ar.push(smo73186);
const smo73187 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73187.setAttribute('id', 'smo73187');
smo73187.setStyle({ fillStyle: '#aaaaaa7f' });
smo73187.addModifier(new VF.Dot(), 0);
smo73219v0ar.push(smo73187);
const smo73188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73188.setAttribute('id', 'smo73188');
smo73219v0ar.push(smo73188);
const smo73189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73189.setAttribute('id', 'smo73189');
smo73189.setStyle({ fillStyle: '#aaaaaa7f' });
smo73189.addModifier(new VF.Dot(), 0);
smo73219v0ar.push(smo73189);
const smo73190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73190.setAttribute('id', 'smo73190');
smo73219v0ar.push(smo73190);
const smo73191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73191.setAttribute('id', 'smo73191');
smo73219v0ar.push(smo73191);
const smo73192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n","bn/3/n","en/4/n"]}'))
smo73192.setAttribute('id', 'smo73192');
smo73219v0ar.push(smo73192);
const smo73193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73193.setAttribute('id', 'smo73193');
smo73219v0ar.push(smo73193);
const smo73194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73194.setAttribute('id', 'smo73194');
smo73219v0ar.push(smo73194);
const smo73195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73195.setAttribute('id', 'smo73195');
smo73219v0ar.push(smo73195);
const smo73196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo73196.setAttribute('id', 'smo73196');
smo73219v0ar.push(smo73196);
const smo73197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73197.setAttribute('id', 'smo73197');
smo73219v0ar.push(smo73197);
const smo73198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo73198.setAttribute('id', 'smo73198');
smo73219v0ar.push(smo73198);
smo73219v0.addTickables(smo73219v0ar)
fmtsmo7321910.joinVoices([smo73219v0]);
const smo73219v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo73219v1ar = [];
const smo73199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo73199.setAttribute('id', 'smo73199');
smo73199.setStyle({ fillStyle: "#115511" });
smo73219v1ar.push(smo73199);
const smo73200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo73200.setAttribute('id', 'smo73200');
smo73200.setStyle({ fillStyle: "#115511" });
smo73219v1ar.push(smo73200);
const smo73201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n"]}'))
smo73201.setAttribute('id', 'smo73201');
smo73201.setStyle({ fillStyle: "#115511" });
smo73219v1ar.push(smo73201);
const smo73202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/1/n"]}'))
smo73202.setAttribute('id', 'smo73202');
smo73202.setStyle({ fillStyle: "#115511" });
smo73219v1ar.push(smo73202);
const smo73203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo73203.setAttribute('id', 'smo73203');
smo73203.setStyle({ fillStyle: "#115511" });
smo73219v1ar.push(smo73203);
smo73219v1.addTickables(smo73219v1ar)
fmtsmo7321910.joinVoices([smo73219v1]);
// create beam groups and tuplets for format grp smo73233 before formatting
const dirsmo74632 = smo72742.getStemDirection();
smo72742.setStemDirection(dirsmo74632);
smo72743.setStemDirection(dirsmo74632);
smo72744.setStemDirection(dirsmo74632);
smo72745.setStemDirection(dirsmo74632);
const smo74632 = new VF.Beam([smo72742,smo72743,smo72744,smo72745]);
const dirsmo74633 = smo72746.getStemDirection();
smo72746.setStemDirection(dirsmo74633);
smo72747.setStemDirection(dirsmo74633);
const smo74633 = new VF.Beam([smo72746,smo72747]);
const dirsmo74634 = smo72750.getStemDirection();
smo72750.setStemDirection(dirsmo74634);
smo72751.setStemDirection(dirsmo74634);
const smo74634 = new VF.Beam([smo72750,smo72751]);
const dirsmo74635 = smo72752.getStemDirection();
smo72752.setStemDirection(dirsmo74635);
smo72753.setStemDirection(dirsmo74635);
smo72754.setStemDirection(dirsmo74635);
smo72755.setStemDirection(dirsmo74635);
const smo74635 = new VF.Beam([smo72752,smo72753,smo72754,smo72755]);
const dirsmo74636 = smo72756.getStemDirection();
smo72756.setStemDirection(dirsmo74636);
smo72757.setStemDirection(dirsmo74636);
const smo74636 = new VF.Beam([smo72756,smo72757]);
const dirsmo74637 = smo72760.getStemDirection();
smo72760.setStemDirection(dirsmo74637);
smo72761.setStemDirection(dirsmo74637);
const smo74637 = new VF.Beam([smo72760,smo72761]);
const dirsmo74638 = smo72762.getStemDirection();
smo72762.setStemDirection(dirsmo74638);
smo72763.setStemDirection(dirsmo74638);
const smo74638 = new VF.Beam([smo72762,smo72763]);
 
// formatting measures in staff group smo73233
fmtsmo7278910.format([smo72789v0,smo72789v1,smo73219v0,smo73219v1], 958);
const stavesmo72789 = new VF.Stave(103, 1323.0000000000002, 1022);
stavesmo72789.setAttribute('id', 'stavesmo72789');
stavesmo72789.setBegBarType(1);
stavesmo72789.setEndBarType(3);
stavesmo72789.addClef('treble');
stavesmo72789.setContext(context);
stavesmo72789.draw();
smo72789v0.draw(context, stavesmo72789);
smo72789v1.draw(context, stavesmo72789);
smo74632.setContext(context);
smo74632.draw();
smo74633.setContext(context);
smo74633.draw();
smo74634.setContext(context);
smo74634.draw();
smo74635.setContext(context);
smo74635.draw();
smo74636.setContext(context);
smo74636.draw();
smo74637.setContext(context);
smo74637.draw();
smo74638.setContext(context);
smo74638.draw();
const stavesmo73219 = new VF.Stave(103, 1466.0000000000002, 1022);
stavesmo73219.setAttribute('id', 'stavesmo73219');
stavesmo73219.setBegBarType(1);
stavesmo73219.setEndBarType(3);
stavesmo73219.addClef('bass');
stavesmo73219.setContext(context);
stavesmo73219.draw();
smo73219v0.draw(context, stavesmo73219);
smo73219v1.draw(context, stavesmo73219);
const leftsmo73233stavesmo727891 = new VF.StaveConnector(stavesmo72789, stavesmo73219).setType(3);
leftsmo73233stavesmo727891.setContext(context).draw();
// modifier from 0-7-0-9 to 0-7-0-10
const smo74781 = new VF.StaveTie({ first_note: smo72626, last_note: smo72627, 
          firstNote: smo72626, lastNote: smo72627, first_indices: [0], last_indices: [0]});
smo74781.setContext(context).draw();
// modifier from 0-7-0-12 to 0-7-0-13
const smo74782 = new VF.StaveTie({ first_note: smo72629, last_note: smo72631, 
          firstNote: smo72629, lastNote: smo72631, first_indices: [0], last_indices: [0]});
smo74782.setContext(context).draw();
// modifier from 0-7-0-15 to 0-7-0-16
const smo74783 = new VF.StaveTie({ first_note: smo72633, last_note: smo72635, 
          firstNote: smo72633, lastNote: smo72635, first_indices: [0], last_indices: [0]});
smo74783.setContext(context).draw();
// modifier from 0-8-0-9 to 0-8-0-10
const smo74784 = new VF.StaveTie({ first_note: smo72662, last_note: smo72663, 
          firstNote: smo72662, lastNote: smo72663, first_indices: [0], last_indices: [0]});
smo74784.setContext(context).draw();
// modifier from 0-8-0-12 to 0-8-0-13
const smo74785 = new VF.StaveTie({ first_note: smo72665, last_note: smo72667, 
          firstNote: smo72665, lastNote: smo72667, first_indices: [0], last_indices: [0]});
smo74785.setContext(context).draw();
// modifier from 0-9-0-1 to 0-9-0-2
const smo74786 = new VF.StaveTie({ first_note: smo72694, last_note: smo72695, 
          firstNote: smo72694, lastNote: smo72695, first_indices: [0], last_indices: [0]});
smo74786.setContext(context).draw();
// modifier from 0-9-0-10 to 0-9-0-11
const smo74787 = new VF.StaveTie({ first_note: smo72704, last_note: smo72705, 
          firstNote: smo72704, lastNote: smo72705, first_indices: [0], last_indices: [0]});
smo74787.setContext(context).draw();
// modifier from 0-9-0-20 to 0-9-0-21
const smo74788 = new VF.StaveTie({ first_note: smo72714, last_note: smo72715, 
          firstNote: smo72714, lastNote: smo72715, first_indices: [0], last_indices: [0]});
smo74788.setContext(context).draw();
// modifier from 0-10-0-5 to 0-10-0-6
const smo74789 = new VF.StaveTie({ first_note: smo72747, last_note: smo72748, 
          firstNote: smo72747, lastNote: smo72748, first_indices: [0], last_indices: [0]});
smo74789.setContext(context).draw();
// modifier from 0-10-0-15 to 0-10-0-16
const smo74790 = new VF.StaveTie({ first_note: smo72757, last_note: smo72758, 
          firstNote: smo72757, lastNote: smo72758, first_indices: [0], last_indices: [0]});
smo74790.setContext(context).draw();
// modifier from 0-10-0-21 to 0-10-0-22
const smo74791 = new VF.StaveTie({ first_note: smo72763, last_note: smo72764, 
          firstNote: smo72763, lastNote: smo72764, first_indices: [0], last_indices: [0]});
smo74791.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo74792 = new VF.Curve(smo72577, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo74792.setContext(context).draw();
// modifier from 0-6-0-1 to 0-7-0-10
const smo74793 = new VF.Curve(null, smo72627, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":20,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":2,"position_end":1}'));
smo74793.setContext(context).draw();
// modifier from 0-8-0-0 to 0-8-0-10
const smo74794 = new VF.Curve(smo72653, smo72663, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":45},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo74794.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo74795 = new VF.Curve(smo72669, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo74795.setContext(context).draw();
// modifier from 0-8-0-15 to 0-9-0-2
const smo74796 = new VF.Curve(null, smo72695, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo74796.setContext(context).draw();
// modifier from 0-9-0-5 to 0-9-0-11
const smo74797 = new VF.Curve(smo72699, smo72705, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":20,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":2,"position_end":2}'));
smo74797.setContext(context).draw();
// modifier from 0-9-0-13 to 0-9-0-21
const smo74798 = new VF.Curve(smo72707, smo72715, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":13,"cps":[{"x":0,"y":30},{"x":0,"y":30}],"invert":true,"position":2,"position_end":2}'));
smo74798.setContext(context).draw();
}
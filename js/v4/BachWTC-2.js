// @@ Well-Tempered Clavier p 3/6  by Bach
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
const fmtsmo6361746 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo63617v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63617v0ar = [];
const smo63578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63578.setAttribute('id', 'smo63578');
smo63617v0ar.push(smo63578);
const smo63579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63579.setAttribute('id', 'smo63579');
smo63617v0ar.push(smo63579);
const smo63580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63580.setAttribute('id', 'smo63580');
smo63617v0ar.push(smo63580);
const smo63581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63581.setAttribute('id', 'smo63581');
smo63617v0ar.push(smo63581);
const smo63582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63582.setAttribute('id', 'smo63582');
smo63617v0ar.push(smo63582);
const smo63583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63583.setAttribute('id', 'smo63583');
smo63617v0ar.push(smo63583);
const smo63584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63584.setAttribute('id', 'smo63584');
smo63617v0ar.push(smo63584);
const smo63585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63585.setAttribute('id', 'smo63585');
smo63617v0ar.push(smo63585);
const smo63586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63586.setAttribute('id', 'smo63586');
const smo635860acc = new VF.Accidental('#');
smo63586.addModifier(smo635860acc, 0);
smo63617v0ar.push(smo63586);
const smo63587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63587.setAttribute('id', 'smo63587');
smo63617v0ar.push(smo63587);
const smo63588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63588.setAttribute('id', 'smo63588');
smo63617v0ar.push(smo63588);
const smo63589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63589.setAttribute('id', 'smo63589');
smo63617v0ar.push(smo63589);
const smo63590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63590.setAttribute('id', 'smo63590');
smo63617v0ar.push(smo63590);
const smo63591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63591.setAttribute('id', 'smo63591');
smo63617v0ar.push(smo63591);
smo63617v0.addTickables(smo63617v0ar)
fmtsmo6361746.joinVoices([smo63617v0]);
const smo63617v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63617v1ar = [];
const smo63592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63592.setAttribute('id', 'smo63592');
smo63592.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63592);
const smo63593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63593.setAttribute('id', 'smo63593');
smo63593.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63593);
const smo63594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63594.setAttribute('id', 'smo63594');
smo63594.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63594);
const smo63595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63595.setAttribute('id', 'smo63595');
smo63595.setStyle({ fillStyle: "#115511" });
const smo635950acc = new VF.Accidental('#');
smo63595.addModifier(smo635950acc, 0);
smo63617v1ar.push(smo63595);
const smo63596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63596.setAttribute('id', 'smo63596');
smo63596.setStyle({ fillStyle: "#115511" });
const smo635960acc = new VF.Accidental('#');
smo63596.addModifier(smo635960acc, 0);
smo63617v1ar.push(smo63596);
const smo63597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63597.setAttribute('id', 'smo63597');
smo63597.setStyle({ fillStyle: "#115511" });
const smo635970acc = new VF.Accidental('n');
smo63597.addModifier(smo635970acc, 0);
smo63617v1ar.push(smo63597);
const smo63598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63598.setAttribute('id', 'smo63598');
smo63598.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63598);
const smo63599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63599.setAttribute('id', 'smo63599');
smo63599.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63599);
const smo63600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63600.setAttribute('id', 'smo63600');
smo63600.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63600);
const smo63601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63601.setAttribute('id', 'smo63601');
smo63601.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63601);
const smo63602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63602.setAttribute('id', 'smo63602');
smo63602.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63602);
const smo63603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63603.setAttribute('id', 'smo63603');
smo63603.setStyle({ fillStyle: "#115511" });
smo63617v1ar.push(smo63603);
smo63617v1.addTickables(smo63617v1ar)
fmtsmo6361746.joinVoices([smo63617v1]);
const fmtsmo6867046 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo68670v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68670v0ar = [];
const smo68642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo68642.setAttribute('id', 'smo68642');
smo68670v0ar.push(smo68642);
const smo68643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68643.setAttribute('id', 'smo68643');
smo68670v0ar.push(smo68643);
const smo68644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo68644.setAttribute('id', 'smo68644');
const smo686440acc = new VF.Accidental('#');
smo68644.addModifier(smo686440acc, 0);
smo68670v0ar.push(smo68644);
const smo68645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo68645.setAttribute('id', 'smo68645');
const smo686450acc = new VF.Accidental('#');
smo68645.addModifier(smo686450acc, 0);
smo68670v0ar.push(smo68645);
const smo68646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68646.setAttribute('id', 'smo68646');
smo68646.addModifier(new VF.Dot(), 0);
smo68670v0ar.push(smo68646);
const smo68647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68647.setAttribute('id', 'smo68647');
smo68670v0ar.push(smo68647);
const smo68648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68648.setAttribute('id', 'smo68648');
smo68670v0ar.push(smo68648);
const smo68649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo68649.setAttribute('id', 'smo68649');
smo68670v0ar.push(smo68649);
const smo68650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68650.setAttribute('id', 'smo68650');
smo68670v0ar.push(smo68650);
smo68670v0.addTickables(smo68670v0ar)
fmtsmo6867046.joinVoices([smo68670v0]);
const smo68670v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68670v1ar = [];
const smo68651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo68651.setAttribute('id', 'smo68651');
smo68651.setStyle({ fillStyle: "#115511" });
smo68670v1ar.push(smo68651);
const smo68652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68652.setAttribute('id', 'smo68652');
smo68652.setStyle({ fillStyle: "#115511" });
smo68670v1ar.push(smo68652);
const smo68653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68653.setAttribute('id', 'smo68653');
smo68653.setStyle({ fillStyle: "#115511" });
smo68670v1ar.push(smo68653);
const smo68654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68654.setAttribute('id', 'smo68654');
smo68654.setStyle({ fillStyle: "#115511" });
smo68670v1ar.push(smo68654);
const smo68655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68655.setAttribute('id', 'smo68655');
smo68655.setStyle({ fillStyle: "#115511" });
const smo686550acc = new VF.Accidental('n');
smo68655.addModifier(smo686550acc, 0);
smo68670v1ar.push(smo68655);
const smo68656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68656.setAttribute('id', 'smo68656');
smo68656.setStyle({ fillStyle: "#115511" });
smo68670v1ar.push(smo68656);
smo68670v1.addTickables(smo68670v1ar)
fmtsmo6867046.joinVoices([smo68670v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72064 = smo63578.getStemDirection();
smo63578.setStemDirection(dirsmo72064);
smo63579.setStemDirection(dirsmo72064);
smo63580.setStemDirection(dirsmo72064);
const smo72064 = new VF.Beam([smo63578,smo63579,smo63580]);
const dirsmo72065 = smo63581.getStemDirection();
smo63581.setStemDirection(dirsmo72065);
smo63582.setStemDirection(dirsmo72065);
smo63583.setStemDirection(dirsmo72065);
smo63584.setStemDirection(dirsmo72065);
const smo72065 = new VF.Beam([smo63581,smo63582,smo63583,smo63584]);
const dirsmo72066 = smo63585.getStemDirection();
smo63585.setStemDirection(dirsmo72066);
smo63586.setStemDirection(dirsmo72066);
smo63587.setStemDirection(dirsmo72066);
smo63588.setStemDirection(dirsmo72066);
const smo72066 = new VF.Beam([smo63585,smo63586,smo63587,smo63588]);
const dirsmo72067 = smo63589.getStemDirection();
smo63589.setStemDirection(dirsmo72067);
smo63590.setStemDirection(dirsmo72067);
smo63591.setStemDirection(dirsmo72067);
const smo72067 = new VF.Beam([smo63589,smo63590,smo63591]);
const dirsmo72068 = smo63592.getStemDirection();
smo63592.setStemDirection(dirsmo72068);
smo63593.setStemDirection(dirsmo72068);
smo63594.setStemDirection(dirsmo72068);
smo63595.setStemDirection(dirsmo72068);
const smo72068 = new VF.Beam([smo63592,smo63593,smo63594,smo63595]);
const dirsmo72069 = smo63596.getStemDirection();
smo63596.setStemDirection(dirsmo72069);
smo63597.setStemDirection(dirsmo72069);
const smo72069 = new VF.Beam([smo63596,smo63597]);
const dirsmo72070 = smo63598.getStemDirection();
smo63598.setStemDirection(dirsmo72070);
smo63599.setStemDirection(dirsmo72070);
const smo72070 = new VF.Beam([smo63598,smo63599]);
const dirsmo72071 = smo63600.getStemDirection();
smo63600.setStemDirection(dirsmo72071);
smo63601.setStemDirection(dirsmo72071);
smo63602.setStemDirection(dirsmo72071);
smo63603.setStemDirection(dirsmo72071);
const smo72071 = new VF.Beam([smo63600,smo63601,smo63602,smo63603]);
const dirsmo72074 = smo68643.getStemDirection();
smo68643.setStemDirection(dirsmo72074);
smo68644.setStemDirection(dirsmo72074);
smo68645.setStemDirection(dirsmo72074);
const smo72074 = new VF.Beam([smo68643,smo68644,smo68645]);
const dirsmo72075 = smo68646.getStemDirection();
smo68646.setStemDirection(dirsmo72075);
smo68647.setStemDirection(dirsmo72075);
smo68648.setStemDirection(dirsmo72075);
const smo72075 = new VF.Beam([smo68646,smo68647,smo68648]);
const dirsmo72076 = smo68649.getStemDirection();
smo68649.setStemDirection(dirsmo72076);
smo68650.setStemDirection(dirsmo72076);
const smo72076 = new VF.Beam([smo68649,smo68650]);
const dirsmo72077 = smo68653.getStemDirection();
smo68653.setStemDirection(dirsmo72077);
smo68654.setStemDirection(dirsmo72077);
const smo72077 = new VF.Beam([smo68653,smo68654]);
 
// formatting measures in staff group smo60952
fmtsmo6361746.format([smo63617v0,smo63617v1,smo68670v0,smo68670v1], 518);
const stavesmo63617 = new VF.Stave(90, 304, 576);
stavesmo63617.setAttribute('id', 'stavesmo63617');
stavesmo63617.setBegBarType(1);
stavesmo63617.addClef('treble');
stavesmo63617.setContext(context);
stavesmo63617.draw();
smo63617v0.draw(context, stavesmo63617);
smo63617v1.draw(context, stavesmo63617);
smo72064.setContext(context);
smo72064.draw();
smo72065.setContext(context);
smo72065.draw();
smo72066.setContext(context);
smo72066.draw();
smo72067.setContext(context);
smo72067.draw();
smo72068.setContext(context);
smo72068.draw();
smo72069.setContext(context);
smo72069.draw();
smo72070.setContext(context);
smo72070.draw();
smo72071.setContext(context);
smo72071.draw();
const stavesmo68670 = new VF.Stave(90, 438, 576);
stavesmo68670.setAttribute('id', 'stavesmo68670');
stavesmo68670.setBegBarType(1);
stavesmo68670.addClef('bass');
stavesmo68670.setContext(context);
stavesmo68670.draw();
smo68670v0.draw(context, stavesmo68670);
smo68670v1.draw(context, stavesmo68670);
smo72074.setContext(context);
smo72074.draw();
smo72075.setContext(context);
smo72075.draw();
smo72076.setContext(context);
smo72076.draw();
smo72077.setContext(context);
smo72077.draw();
const leftsmo60952stavesmo636171 = new VF.StaveConnector(stavesmo63617, stavesmo68670).setType(3);
leftsmo60952stavesmo636171.setContext(context).draw();
const fmtsmo6365247 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo63652v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63652v0ar = [];
const smo63618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63618.setAttribute('id', 'smo63618');
smo63652v0ar.push(smo63618);
const smo63619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63619.setAttribute('id', 'smo63619');
smo63652v0ar.push(smo63619);
const smo63620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63620.setAttribute('id', 'smo63620');
smo63652v0ar.push(smo63620);
const smo63621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63621.setAttribute('id', 'smo63621');
smo63652v0ar.push(smo63621);
const smo63622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63622.setAttribute('id', 'smo63622');
smo63652v0ar.push(smo63622);
const smo63623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63623.setAttribute('id', 'smo63623');
smo63652v0ar.push(smo63623);
const smo63624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63624.setAttribute('id', 'smo63624');
smo63652v0ar.push(smo63624);
const smo63625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63625.setAttribute('id', 'smo63625');
smo63625.addModifier(new VF.Dot(), 0);
const smo63626 = new VF.Ornament('mordent_inverted');
smo63625.addModifier(smo63626, 0);
smo63652v0ar.push(smo63625);
const smo63627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63627.setAttribute('id', 'smo63627');
smo63652v0ar.push(smo63627);
smo63652v0.addTickables(smo63652v0ar)
fmtsmo6365247.joinVoices([smo63652v0]);
const smo63652v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63652v1ar = [];
const smo63628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63628.setAttribute('id', 'smo63628');
smo63628.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63628);
const smo63629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63629.setAttribute('id', 'smo63629');
smo63629.setStyle({ fillStyle: "#115511" });
const smo636290acc = new VF.Accidental('#');
smo63629.addModifier(smo636290acc, 0);
smo63652v1ar.push(smo63629);
const smo63630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63630.setAttribute('id', 'smo63630');
smo63630.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63630);
const smo63631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63631.setAttribute('id', 'smo63631');
smo63631.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63631);
const smo63632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63632.setAttribute('id', 'smo63632');
smo63632.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63632);
const smo63633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63633.setAttribute('id', 'smo63633');
smo63633.setStyle({ fillStyle: "#115511" });
const smo636330acc = new VF.Accidental('#');
smo63633.addModifier(smo636330acc, 0);
smo63652v1ar.push(smo63633);
const smo63634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63634.setAttribute('id', 'smo63634');
smo63634.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63634);
const smo63635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63635.setAttribute('id', 'smo63635');
smo63635.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63635);
const smo63636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63636.setAttribute('id', 'smo63636');
smo63636.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63636);
const smo63637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo63637.setAttribute('id', 'smo63637');
smo63637.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63637);
const smo63638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo63638.setAttribute('id', 'smo63638');
smo63638.setStyle({ fillStyle: "#115511" });
smo63652v1ar.push(smo63638);
smo63652v1.addTickables(smo63652v1ar)
fmtsmo6365247.joinVoices([smo63652v1]);
const fmtsmo6870047 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo68700v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68700v0ar = [];
const smo68671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo68671.setAttribute('id', 'smo68671');
const smo686710acc = new VF.Accidental('#');
smo68671.addModifier(smo686710acc, 0);
smo68700v0ar.push(smo68671);
const smo68672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68672.setAttribute('id', 'smo68672');
smo68700v0ar.push(smo68672);
const smo68673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68673.setAttribute('id', 'smo68673');
smo68700v0ar.push(smo68673);
const smo68674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68674.setAttribute('id', 'smo68674');
smo68700v0ar.push(smo68674);
const smo68675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68675.setAttribute('id', 'smo68675');
smo68700v0ar.push(smo68675);
const smo68676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68676.setAttribute('id', 'smo68676');
smo68700v0ar.push(smo68676);
const smo68677 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo68677.setAttribute('id', 'smo68677');
const smo686770acc = new VF.Accidental('#');
smo68677.addModifier(smo686770acc, 0);
smo68700v0ar.push(smo68677);
const smo68678 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68678.setAttribute('id', 'smo68678');
smo68700v0ar.push(smo68678);
const smo68679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo68679.setAttribute('id', 'smo68679');
smo68700v0ar.push(smo68679);
smo68700v0.addTickables(smo68700v0ar)
fmtsmo6870047.joinVoices([smo68700v0]);
const smo68700v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68700v1ar = [];
const smo68680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68680.setAttribute('id', 'smo68680');
smo68680.setStyle({ fillStyle: "#115511" });
smo68700v1ar.push(smo68680);
const smo68681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68681.setAttribute('id', 'smo68681');
smo68681.setStyle({ fillStyle: "#115511" });
smo68700v1ar.push(smo68681);
const smo68682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68682.setAttribute('id', 'smo68682');
smo68682.setStyle({ fillStyle: "#115511" });
smo68700v1ar.push(smo68682);
const smo68683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68683.setAttribute('id', 'smo68683');
smo68683.setStyle({ fillStyle: "#115511" });
const smo686830acc = new VF.Accidental('n');
smo68683.addModifier(smo686830acc, 0);
smo68700v1ar.push(smo68683);
const smo68684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68684.setAttribute('id', 'smo68684');
smo68684.setStyle({ fillStyle: "#115511" });
smo68700v1ar.push(smo68684);
const smo68685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68685.setAttribute('id', 'smo68685');
smo68685.setStyle({ fillStyle: "#115511" });
smo68700v1ar.push(smo68685);
const smo68686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68686.setAttribute('id', 'smo68686');
smo68686.setStyle({ fillStyle: "#115511" });
smo68700v1ar.push(smo68686);
smo68700v1.addTickables(smo68700v1ar)
fmtsmo6870047.joinVoices([smo68700v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72080 = smo63618.getStemDirection();
smo63618.setStemDirection(dirsmo72080);
smo63619.setStemDirection(dirsmo72080);
smo63620.setStemDirection(dirsmo72080);
smo63621.setStemDirection(dirsmo72080);
const smo72080 = new VF.Beam([smo63618,smo63619,smo63620,smo63621]);
const dirsmo72081 = smo63622.getStemDirection();
smo63622.setStemDirection(dirsmo72081);
smo63623.setStemDirection(dirsmo72081);
smo63624.setStemDirection(dirsmo72081);
const smo72081 = new VF.Beam([smo63622,smo63623,smo63624]);
const dirsmo72082 = smo63625.getStemDirection();
smo63625.setStemDirection(dirsmo72082);
smo63627.setStemDirection(dirsmo72082);
const smo72082 = new VF.Beam([smo63625,smo63627]);
const dirsmo72083 = smo63628.getStemDirection();
smo63628.setStemDirection(dirsmo72083);
smo63629.setStemDirection(dirsmo72083);
smo63630.setStemDirection(dirsmo72083);
smo63631.setStemDirection(dirsmo72083);
const smo72083 = new VF.Beam([smo63628,smo63629,smo63630,smo63631]);
const dirsmo72084 = smo63632.getStemDirection();
smo63632.setStemDirection(dirsmo72084);
smo63633.setStemDirection(dirsmo72084);
smo63634.setStemDirection(dirsmo72084);
smo63635.setStemDirection(dirsmo72084);
const smo72084 = new VF.Beam([smo63632,smo63633,smo63634,smo63635]);
const dirsmo72087 = smo68671.getStemDirection();
smo68671.setStemDirection(dirsmo72087);
smo68672.setStemDirection(dirsmo72087);
const smo72087 = new VF.Beam([smo68671,smo68672]);
const dirsmo72088 = smo68673.getStemDirection();
smo68673.setStemDirection(dirsmo72088);
smo68674.setStemDirection(dirsmo72088);
smo68675.setStemDirection(dirsmo72088);
smo68676.setStemDirection(dirsmo72088);
const smo72088 = new VF.Beam([smo68673,smo68674,smo68675,smo68676]);
const dirsmo72089 = smo68682.getStemDirection();
smo68682.setStemDirection(dirsmo72089);
smo68683.setStemDirection(dirsmo72089);
const smo72089 = new VF.Beam([smo68682,smo68683]);
const dirsmo72090 = smo68684.getStemDirection();
smo68684.setStemDirection(dirsmo72090);
smo68685.setStemDirection(dirsmo72090);
const smo72090 = new VF.Beam([smo68684,smo68685]);
 
// formatting measures in staff group smo60952
fmtsmo6365247.format([smo63652v0,smo63652v1,smo68700v0,smo68700v1], 419);
const stavesmo63652 = new VF.Stave(666, 304, 433);
stavesmo63652.setAttribute('id', 'stavesmo63652');
stavesmo63652.setBegBarType(VF.Barline.type.NONE);
stavesmo63652.setContext(context);
stavesmo63652.draw();
smo63652v0.draw(context, stavesmo63652);
smo63652v1.draw(context, stavesmo63652);
smo72080.setContext(context);
smo72080.draw();
smo72081.setContext(context);
smo72081.draw();
smo72082.setContext(context);
smo72082.draw();
smo72083.setContext(context);
smo72083.draw();
smo72084.setContext(context);
smo72084.draw();
const stavesmo68700 = new VF.Stave(666, 438, 433);
stavesmo68700.setAttribute('id', 'stavesmo68700');
stavesmo68700.setBegBarType(VF.Barline.type.NONE);
stavesmo68700.setContext(context);
stavesmo68700.draw();
smo68700v0.draw(context, stavesmo68700);
smo68700v1.draw(context, stavesmo68700);
smo72087.setContext(context);
smo72087.draw();
smo72088.setContext(context);
smo72088.draw();
smo72089.setContext(context);
smo72089.draw();
smo72090.setContext(context);
smo72090.draw();
const fmtsmo6368248 = new VF.Formatter();
//
// voices and notes for stave 0 48
const smo63682v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63682v0ar = [];
const smo63653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63653.setAttribute('id', 'smo63653');
smo63682v0ar.push(smo63653);
const smo63654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63654.setAttribute('id', 'smo63654');
smo63682v0ar.push(smo63654);
const smo63655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63655.setAttribute('id', 'smo63655');
smo63682v0ar.push(smo63655);
smo63682v0.addTickables(smo63682v0ar)
fmtsmo6368248.joinVoices([smo63682v0]);
const smo63682v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63682v1ar = [];
const smo63656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo63656.setAttribute('id', 'smo63656');
smo63656.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63656);
const smo63657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63657.setAttribute('id', 'smo63657');
smo63657.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63657);
const smo63658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63658.setAttribute('id', 'smo63658');
smo63658.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63658);
const smo63659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63659.setAttribute('id', 'smo63659');
smo63659.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63659);
const smo63660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63660.setAttribute('id', 'smo63660');
smo63660.setStyle({ fillStyle: "#115511" });
smo63660.addModifier(new VF.Dot(), 0);
smo63682v1ar.push(smo63660);
const smo63661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63661.setAttribute('id', 'smo63661');
smo63661.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63661);
const smo63662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63662.setAttribute('id', 'smo63662');
smo63662.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63662);
const smo63663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63663.setAttribute('id', 'smo63663');
smo63663.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63663);
const smo63664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63664.setAttribute('id', 'smo63664');
smo63664.setStyle({ fillStyle: "#115511" });
smo63682v1ar.push(smo63664);
smo63682v1.addTickables(smo63682v1ar)
fmtsmo6368248.joinVoices([smo63682v1]);
const smo63682v2 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63682v2ar = [];
const smo63665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63665.setAttribute('id', 'smo63665');
smo63665.setStyle({ fillStyle: '#aaaaaa7f' });
smo63665.addModifier(new VF.Dot(), 0);
smo63682v2ar.push(smo63665);
const smo63666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63666.setAttribute('id', 'smo63666');
smo63666.setStyle({ fillStyle: "#115511" });
smo63666.addModifier(new VF.Dot(), 0);
smo63682v2ar.push(smo63666);
const smo63667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63667.setAttribute('id', 'smo63667');
smo63667.setStyle({ fillStyle: "#115511" });
smo63682v2ar.push(smo63667);
const smo63668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo63668.setAttribute('id', 'smo63668');
smo63668.setStyle({ fillStyle: "#115511" });
smo63682v2ar.push(smo63668);
smo63682v2.addTickables(smo63682v2ar)
fmtsmo6368248.joinVoices([smo63682v2]);
const fmtsmo6872348 = new VF.Formatter();
//
// voices and notes for stave 1 48
const smo68723v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68723v0ar = [];
const smo68701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68701.setAttribute('id', 'smo68701');
smo68723v0ar.push(smo68701);
const smo68702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo68702.setAttribute('id', 'smo68702');
smo68723v0ar.push(smo68702);
const smo68703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68703.setAttribute('id', 'smo68703');
smo68723v0ar.push(smo68703);
const smo68704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68704.setAttribute('id', 'smo68704');
smo68723v0ar.push(smo68704);
const smo68705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68705.setAttribute('id', 'smo68705');
smo68723v0ar.push(smo68705);
const smo68706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo68706.setAttribute('id', 'smo68706');
smo68706.setStyle({ fillStyle: '#aaaaaa7f' });
smo68723v0ar.push(smo68706);
smo68723v0.addTickables(smo68723v0ar)
fmtsmo6872348.joinVoices([smo68723v0]);
const smo68723v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68723v1ar = [];
const smo68707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo68707.setAttribute('id', 'smo68707');
smo68707.setStyle({ fillStyle: "#115511" });
smo68723v1ar.push(smo68707);
const smo68708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo68708.setAttribute('id', 'smo68708');
smo68708.setStyle({ fillStyle: "#115511" });
smo68723v1ar.push(smo68708);
const smo68709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo68709.setAttribute('id', 'smo68709');
smo68709.setStyle({ fillStyle: "#115511" });
smo68723v1ar.push(smo68709);
smo68723v1.addTickables(smo68723v1ar)
fmtsmo6872348.joinVoices([smo68723v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72093 = smo63657.getStemDirection();
smo63657.setStemDirection(dirsmo72093);
smo63658.setStemDirection(dirsmo72093);
smo63659.setStemDirection(dirsmo72093);
const smo72093 = new VF.Beam([smo63657,smo63658,smo63659]);
const dirsmo72094 = smo63660.getStemDirection();
smo63660.setStemDirection(dirsmo72094);
smo63661.setStemDirection(dirsmo72094);
smo63662.setStemDirection(dirsmo72094);
const smo72094 = new VF.Beam([smo63660,smo63661,smo63662]);
const dirsmo72095 = smo63663.getStemDirection();
smo63663.setStemDirection(dirsmo72095);
smo63664.setStemDirection(dirsmo72095);
const smo72095 = new VF.Beam([smo63663,smo63664]);
const dirsmo72096 = smo63666.getStemDirection();
smo63666.setStemDirection(dirsmo72096);
smo63667.setStemDirection(dirsmo72096);
smo63668.setStemDirection(dirsmo72096);
const smo72096 = new VF.Beam([smo63666,smo63667,smo63668]);
const dirsmo72099 = smo68703.getStemDirection();
smo68703.setStemDirection(dirsmo72099);
smo68704.setStemDirection(dirsmo72099);
const smo72099 = new VF.Beam([smo68703,smo68704]);
 
// formatting measures in staff group smo60952
fmtsmo6368248.format([smo63682v0,smo63682v1,smo63682v2,smo68723v0,smo68723v1], 332);
const stavesmo63682 = new VF.Stave(1099, 304, 346);
stavesmo63682.setAttribute('id', 'stavesmo63682');
stavesmo63682.setBegBarType(VF.Barline.type.NONE);
stavesmo63682.setContext(context);
stavesmo63682.draw();
smo63682v0.draw(context, stavesmo63682);
smo63682v1.draw(context, stavesmo63682);
smo63682v2.draw(context, stavesmo63682);
smo72093.setContext(context);
smo72093.draw();
smo72094.setContext(context);
smo72094.draw();
smo72095.setContext(context);
smo72095.draw();
smo72096.setContext(context);
smo72096.draw();
const stavesmo68723 = new VF.Stave(1099, 438, 346);
stavesmo68723.setAttribute('id', 'stavesmo68723');
stavesmo68723.setBegBarType(VF.Barline.type.NONE);
stavesmo68723.setContext(context);
stavesmo68723.draw();
smo68723v0.draw(context, stavesmo68723);
smo68723v1.draw(context, stavesmo68723);
smo72099.setContext(context);
smo72099.draw();
const fmtsmo6371149 = new VF.Formatter();
//
// voices and notes for stave 0 49
const smo63711v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63711v0ar = [];
const smo63683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63683.setAttribute('id', 'smo63683');
smo63711v0ar.push(smo63683);
const smo63684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63684.setAttribute('id', 'smo63684');
smo63711v0ar.push(smo63684);
const smo63685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63685.setAttribute('id', 'smo63685');
smo63711v0ar.push(smo63685);
const smo63686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63686.setAttribute('id', 'smo63686');
smo63711v0ar.push(smo63686);
const smo63687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63687.setAttribute('id', 'smo63687');
smo63711v0ar.push(smo63687);
smo63711v0.addTickables(smo63711v0ar)
fmtsmo6371149.joinVoices([smo63711v0]);
const smo63711v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63711v1ar = [];
const smo63688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63688.setAttribute('id', 'smo63688');
smo63688.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63688);
const smo63689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63689.setAttribute('id', 'smo63689');
smo63689.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63689);
const smo63690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63690.setAttribute('id', 'smo63690');
smo63690.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63690);
const smo63691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63691.setAttribute('id', 'smo63691');
smo63691.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63691);
const smo63692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63692.setAttribute('id', 'smo63692');
smo63692.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63692);
const smo63693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63693.setAttribute('id', 'smo63693');
smo63693.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63693);
const smo63694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63694.setAttribute('id', 'smo63694');
smo63694.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63694);
const smo63695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63695.setAttribute('id', 'smo63695');
smo63695.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63695);
const smo63696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63696.setAttribute('id', 'smo63696');
smo63696.setStyle({ fillStyle: "#115511" });
const smo636960acc = new VF.Accidental('#');
smo63696.addModifier(smo636960acc, 0);
smo63711v1ar.push(smo63696);
const smo63697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63697.setAttribute('id', 'smo63697');
smo63697.setStyle({ fillStyle: "#115511" });
smo63711v1ar.push(smo63697);
smo63711v1.addTickables(smo63711v1ar)
fmtsmo6371149.joinVoices([smo63711v1]);
const fmtsmo6875349 = new VF.Formatter();
//
// voices and notes for stave 1 49
const smo68753v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68753v0ar = [];
const smo68724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo68724.setAttribute('id', 'smo68724');
smo68753v0ar.push(smo68724);
const smo68725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo68725.setAttribute('id', 'smo68725');
smo68753v0ar.push(smo68725);
const smo68726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo68726.setAttribute('id', 'smo68726');
smo68753v0ar.push(smo68726);
const smo68727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68727.setAttribute('id', 'smo68727');
smo68753v0ar.push(smo68727);
const smo68728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68728.setAttribute('id', 'smo68728');
smo68753v0ar.push(smo68728);
const smo68729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68729.setAttribute('id', 'smo68729');
smo68753v0ar.push(smo68729);
const smo68730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68730.setAttribute('id', 'smo68730');
smo68753v0ar.push(smo68730);
smo68753v0.addTickables(smo68753v0ar)
fmtsmo6875349.joinVoices([smo68753v0]);
const smo68753v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68753v1ar = [];
const smo68731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68731.setAttribute('id', 'smo68731');
smo68731.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68731);
const smo68732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo68732.setAttribute('id', 'smo68732');
smo68732.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68732);
const smo68733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo68733.setAttribute('id', 'smo68733');
smo68733.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68733);
const smo68734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo68734.setAttribute('id', 'smo68734');
smo68734.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68734);
const smo68735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68735.setAttribute('id', 'smo68735');
smo68735.setStyle({ fillStyle: "#115511" });
smo68735.addModifier(new VF.Dot(), 0);
smo68753v1ar.push(smo68735);
const smo68736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68736.setAttribute('id', 'smo68736');
smo68736.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68736);
const smo68737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68737.setAttribute('id', 'smo68737');
smo68737.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68737);
const smo68738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo68738.setAttribute('id', 'smo68738');
smo68738.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68738);
const smo68739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68739.setAttribute('id', 'smo68739');
smo68739.setStyle({ fillStyle: "#115511" });
smo68753v1ar.push(smo68739);
smo68753v1.addTickables(smo68753v1ar)
fmtsmo6875349.joinVoices([smo68753v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72102 = smo63685.getStemDirection();
smo63685.setStemDirection(dirsmo72102);
smo63686.setStemDirection(dirsmo72102);
smo63687.setStemDirection(dirsmo72102);
const smo72102 = new VF.Beam([smo63685,smo63686,smo63687]);
const dirsmo72103 = smo63688.getStemDirection();
smo63688.setStemDirection(dirsmo72103);
smo63689.setStemDirection(dirsmo72103);
const smo72103 = new VF.Beam([smo63688,smo63689]);
const dirsmo72104 = smo63690.getStemDirection();
smo63690.setStemDirection(dirsmo72104);
smo63691.setStemDirection(dirsmo72104);
smo63692.setStemDirection(dirsmo72104);
smo63693.setStemDirection(dirsmo72104);
const smo72104 = new VF.Beam([smo63690,smo63691,smo63692,smo63693]);
const dirsmo72105 = smo63694.getStemDirection();
smo63694.setStemDirection(dirsmo72105);
smo63695.setStemDirection(dirsmo72105);
smo63696.setStemDirection(dirsmo72105);
smo63697.setStemDirection(dirsmo72105);
const smo72105 = new VF.Beam([smo63694,smo63695,smo63696,smo63697]);
const dirsmo72108 = smo68724.getStemDirection();
smo68724.setStemDirection(dirsmo72108);
smo68725.setStemDirection(dirsmo72108);
const smo72108 = new VF.Beam([smo68724,smo68725]);
const dirsmo72109 = smo68726.getStemDirection();
smo68726.setStemDirection(dirsmo72109);
smo68727.setStemDirection(dirsmo72109);
const smo72109 = new VF.Beam([smo68726,smo68727]);
const dirsmo72110 = smo68728.getStemDirection();
smo68728.setStemDirection(dirsmo72110);
smo68729.setStemDirection(dirsmo72110);
const smo72110 = new VF.Beam([smo68728,smo68729]);
const dirsmo72111 = smo68732.getStemDirection();
smo68732.setStemDirection(dirsmo72111);
smo68733.setStemDirection(dirsmo72111);
smo68734.setStemDirection(dirsmo72111);
const smo72111 = new VF.Beam([smo68732,smo68733,smo68734]);
const dirsmo72112 = smo68735.getStemDirection();
smo68735.setStemDirection(dirsmo72112);
smo68736.setStemDirection(dirsmo72112);
smo68737.setStemDirection(dirsmo72112);
const smo72112 = new VF.Beam([smo68735,smo68736,smo68737]);
const dirsmo72113 = smo68738.getStemDirection();
smo68738.setStemDirection(dirsmo72113);
smo68739.setStemDirection(dirsmo72113);
const smo72113 = new VF.Beam([smo68738,smo68739]);
 
// formatting measures in staff group smo60952
fmtsmo6371149.format([smo63711v0,smo63711v1,smo68753v0,smo68753v1], 315);
const stavesmo63711 = new VF.Stave(1445, 304, 363);
stavesmo63711.setAttribute('id', 'stavesmo63711');
stavesmo63711.setBegBarType(VF.Barline.type.NONE);
stavesmo63711.setContext(context);
stavesmo63711.draw();
smo63711v0.draw(context, stavesmo63711);
smo63711v1.draw(context, stavesmo63711);
smo72102.setContext(context);
smo72102.draw();
smo72103.setContext(context);
smo72103.draw();
smo72104.setContext(context);
smo72104.draw();
smo72105.setContext(context);
smo72105.draw();
const stavesmo68753 = new VF.Stave(1445, 438, 363);
stavesmo68753.setAttribute('id', 'stavesmo68753');
stavesmo68753.setBegBarType(VF.Barline.type.NONE);
stavesmo68753.addClef('treble');
stavesmo68753.setContext(context);
stavesmo68753.draw();
smo68753v0.draw(context, stavesmo68753);
smo68753v1.draw(context, stavesmo68753);
smo72108.setContext(context);
smo72108.draw();
smo72109.setContext(context);
smo72109.draw();
smo72110.setContext(context);
smo72110.draw();
smo72111.setContext(context);
smo72111.draw();
smo72112.setContext(context);
smo72112.draw();
smo72113.setContext(context);
smo72113.draw();
const rightsmo60952stavesmo637111 = new VF.StaveConnector(stavesmo63711, stavesmo68753).setType(0);
rightsmo60952stavesmo637111.setContext(context).draw();
const fmtsmo6374350 = new VF.Formatter();
//
// voices and notes for stave 0 50
const smo63743v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63743v0ar = [];
const smo63712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63712.setAttribute('id', 'smo63712');
smo63712.addModifier(new VF.Dot(), 0);
smo63743v0ar.push(smo63712);
const smo63713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63713.setAttribute('id', 'smo63713');
smo63743v0ar.push(smo63713);
const smo63714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63714.setAttribute('id', 'smo63714');
smo63743v0ar.push(smo63714);
const smo63715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63715.setAttribute('id', 'smo63715');
smo63743v0ar.push(smo63715);
const smo63716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63716.setAttribute('id', 'smo63716');
smo63743v0ar.push(smo63716);
const smo63717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63717.setAttribute('id', 'smo63717');
smo63743v0ar.push(smo63717);
const smo63718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63718.setAttribute('id', 'smo63718');
smo63743v0ar.push(smo63718);
const smo63719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63719.setAttribute('id', 'smo63719');
smo63719.addModifier(new VF.Dot(), 0);
smo63743v0ar.push(smo63719);
const smo63720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63720.setAttribute('id', 'smo63720');
smo63743v0ar.push(smo63720);
const smo63721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63721.setAttribute('id', 'smo63721');
smo63743v0ar.push(smo63721);
smo63743v0.addTickables(smo63743v0ar)
fmtsmo6374350.joinVoices([smo63743v0]);
const smo63743v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63743v1ar = [];
const smo63722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63722.setAttribute('id', 'smo63722');
smo63722.setStyle({ fillStyle: "#115511" });
smo63743v1ar.push(smo63722);
const smo63723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63723.setAttribute('id', 'smo63723');
smo63723.setStyle({ fillStyle: "#115511" });
const smo637230acc = new VF.Accidental('#');
smo63723.addModifier(smo637230acc, 0);
smo63743v1ar.push(smo63723);
const smo63724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo63724.setAttribute('id', 'smo63724');
smo63724.setStyle({ fillStyle: "#115511" });
const smo637240acc = new VF.Accidental('#');
smo63724.addModifier(smo637240acc, 0);
smo63743v1ar.push(smo63724);
const smo63725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63725.setAttribute('id', 'smo63725');
smo63725.setStyle({ fillStyle: "#115511" });
smo63743v1ar.push(smo63725);
const smo63726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63726.setAttribute('id', 'smo63726');
smo63726.setStyle({ fillStyle: "#115511" });
smo63743v1ar.push(smo63726);
const smo63727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63727.setAttribute('id', 'smo63727');
smo63727.setStyle({ fillStyle: "#115511" });
const smo637270acc = new VF.Accidental('n');
smo63727.addModifier(smo637270acc, 0);
smo63743v1ar.push(smo63727);
const smo63728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63728.setAttribute('id', 'smo63728');
smo63728.setStyle({ fillStyle: "#115511" });
smo63743v1ar.push(smo63728);
const smo63729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63729.setAttribute('id', 'smo63729');
smo63729.setStyle({ fillStyle: "#115511" });
smo63743v1ar.push(smo63729);
smo63743v1.addTickables(smo63743v1ar)
fmtsmo6374350.joinVoices([smo63743v1]);
const fmtsmo6878350 = new VF.Formatter();
//
// voices and notes for stave 1 50
const smo68783v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68783v0ar = [];
const smo68754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo68754.setAttribute('id', 'smo68754');
smo68783v0ar.push(smo68754);
const smo68755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68755.setAttribute('id', 'smo68755');
smo68783v0ar.push(smo68755);
const smo68756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo68756.setAttribute('id', 'smo68756');
smo68783v0ar.push(smo68756);
const smo68757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68757.setAttribute('id', 'smo68757');
smo68783v0ar.push(smo68757);
const smo68758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68758.setAttribute('id', 'smo68758');
smo68783v0ar.push(smo68758);
const smo68759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68759.setAttribute('id', 'smo68759');
smo68783v0ar.push(smo68759);
smo68783v0.addTickables(smo68783v0ar)
fmtsmo6878350.joinVoices([smo68783v0]);
const smo68783v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68783v1ar = [];
const smo68760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo68760.setAttribute('id', 'smo68760');
smo68760.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68760);
const smo68761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68761.setAttribute('id', 'smo68761');
smo68761.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68761);
const smo68762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68762.setAttribute('id', 'smo68762');
smo68762.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68762);
const smo68763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68763.setAttribute('id', 'smo68763');
smo68763.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68763);
const smo68764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68764.setAttribute('id', 'smo68764');
smo68764.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68764);
const smo68765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68765.setAttribute('id', 'smo68765');
smo68765.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68765);
const smo68766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo68766.setAttribute('id', 'smo68766');
smo68766.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68766);
const smo68767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["a#/2/n"]}'))
smo68767.setAttribute('id', 'smo68767');
smo68767.setStyle({ fillStyle: "#115511" });
const smo687670acc = new VF.Accidental('#');
smo68767.addModifier(smo687670acc, 0);
smo68783v1ar.push(smo68767);
const smo68768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo68768.setAttribute('id', 'smo68768');
smo68768.setStyle({ fillStyle: "#115511" });
const smo687680acc = new VF.Accidental('n');
smo68768.addModifier(smo687680acc, 0);
smo68783v1ar.push(smo68768);
const smo68769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo68769.setAttribute('id', 'smo68769');
smo68769.setStyle({ fillStyle: "#115511" });
smo68783v1ar.push(smo68769);
smo68783v1.addTickables(smo68783v1ar)
fmtsmo6878350.joinVoices([smo68783v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72132 = smo63712.getStemDirection();
smo63712.setStemDirection(dirsmo72132);
smo63713.setStemDirection(dirsmo72132);
smo63714.setStemDirection(dirsmo72132);
const smo72132 = new VF.Beam([smo63712,smo63713,smo63714]);
const dirsmo72133 = smo63715.getStemDirection();
smo63715.setStemDirection(dirsmo72133);
smo63716.setStemDirection(dirsmo72133);
const smo72133 = new VF.Beam([smo63715,smo63716]);
const dirsmo72134 = smo63717.getStemDirection();
smo63717.setStemDirection(dirsmo72134);
smo63718.setStemDirection(dirsmo72134);
const smo72134 = new VF.Beam([smo63717,smo63718]);
const dirsmo72135 = smo63719.getStemDirection();
smo63719.setStemDirection(dirsmo72135);
smo63720.setStemDirection(dirsmo72135);
smo63721.setStemDirection(dirsmo72135);
const smo72135 = new VF.Beam([smo63719,smo63720,smo63721]);
const dirsmo72136 = smo63722.getStemDirection();
smo63722.setStemDirection(dirsmo72136);
smo63723.setStemDirection(dirsmo72136);
const smo72136 = new VF.Beam([smo63722,smo63723]);
const dirsmo72137 = smo63724.getStemDirection();
smo63724.setStemDirection(dirsmo72137);
smo63725.setStemDirection(dirsmo72137);
const smo72137 = new VF.Beam([smo63724,smo63725]);
const dirsmo72138 = smo63726.getStemDirection();
smo63726.setStemDirection(dirsmo72138);
smo63727.setStemDirection(dirsmo72138);
smo63728.setStemDirection(dirsmo72138);
smo63729.setStemDirection(dirsmo72138);
const smo72138 = new VF.Beam([smo63726,smo63727,smo63728,smo63729]);
const dirsmo72141 = smo68754.getStemDirection();
smo68754.setStemDirection(dirsmo72141);
smo68755.setStemDirection(dirsmo72141);
const smo72141 = new VF.Beam([smo68754,smo68755]);
const dirsmo72142 = smo68760.getStemDirection();
smo68760.setStemDirection(dirsmo72142);
smo68761.setStemDirection(dirsmo72142);
const smo72142 = new VF.Beam([smo68760,smo68761]);
const dirsmo72143 = smo68762.getStemDirection();
smo68762.setStemDirection(dirsmo72143);
smo68763.setStemDirection(dirsmo72143);
smo68764.setStemDirection(dirsmo72143);
smo68765.setStemDirection(dirsmo72143);
const smo72143 = new VF.Beam([smo68762,smo68763,smo68764,smo68765]);
const dirsmo72144 = smo68766.getStemDirection();
smo68766.setStemDirection(dirsmo72144);
smo68767.setStemDirection(dirsmo72144);
smo68768.setStemDirection(dirsmo72144);
smo68769.setStemDirection(dirsmo72144);
const smo72144 = new VF.Beam([smo68766,smo68767,smo68768,smo68769]);
 
// formatting measures in staff group smo60952
fmtsmo6374350.format([smo63743v0,smo63743v1,smo68783v0,smo68783v1], 498);
const stavesmo63743 = new VF.Stave(90, 662, 556);
stavesmo63743.setAttribute('id', 'stavesmo63743');
stavesmo63743.setBegBarType(1);
stavesmo63743.addClef('treble');
stavesmo63743.setContext(context);
stavesmo63743.draw();
smo63743v0.draw(context, stavesmo63743);
smo63743v1.draw(context, stavesmo63743);
smo72132.setContext(context);
smo72132.draw();
smo72133.setContext(context);
smo72133.draw();
smo72134.setContext(context);
smo72134.draw();
smo72135.setContext(context);
smo72135.draw();
smo72136.setContext(context);
smo72136.draw();
smo72137.setContext(context);
smo72137.draw();
smo72138.setContext(context);
smo72138.draw();
const stavesmo68783 = new VF.Stave(90, 801, 556);
stavesmo68783.setAttribute('id', 'stavesmo68783');
stavesmo68783.setBegBarType(1);
stavesmo68783.addClef('treble');
stavesmo68783.setContext(context);
stavesmo68783.draw();
smo68783v0.draw(context, stavesmo68783);
smo68783v1.draw(context, stavesmo68783);
smo72141.setContext(context);
smo72141.draw();
smo72142.setContext(context);
smo72142.draw();
smo72143.setContext(context);
smo72143.draw();
smo72144.setContext(context);
smo72144.draw();
const leftsmo60952stavesmo637431 = new VF.StaveConnector(stavesmo63743, stavesmo68783).setType(3);
leftsmo60952stavesmo637431.setContext(context).draw();
const fmtsmo6377851 = new VF.Formatter();
//
// voices and notes for stave 0 51
const smo63778v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63778v0ar = [];
const smo63744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63744.setAttribute('id', 'smo63744');
smo63778v0ar.push(smo63744);
const smo63745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo63745.setAttribute('id', 'smo63745');
smo63778v0ar.push(smo63745);
const smo63746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63746.setAttribute('id', 'smo63746');
smo63778v0ar.push(smo63746);
const smo63747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63747.setAttribute('id', 'smo63747');
smo63778v0ar.push(smo63747);
const smo63748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63748.setAttribute('id', 'smo63748');
smo63778v0ar.push(smo63748);
const smo63749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo63749.setAttribute('id', 'smo63749');
smo63778v0ar.push(smo63749);
const smo63750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63750.setAttribute('id', 'smo63750');
smo63778v0ar.push(smo63750);
const smo63751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63751.setAttribute('id', 'smo63751');
smo63778v0ar.push(smo63751);
const smo63752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63752.setAttribute('id', 'smo63752');
smo63778v0ar.push(smo63752);
const smo63753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo63753.setAttribute('id', 'smo63753');
smo63778v0ar.push(smo63753);
smo63778v0.addTickables(smo63778v0ar)
fmtsmo6377851.joinVoices([smo63778v0]);
const smo63778v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63778v1ar = [];
const smo63754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63754.setAttribute('id', 'smo63754');
smo63754.setStyle({ fillStyle: "#115511" });
smo63754.addModifier(new VF.Dot(), 0);
smo63778v1ar.push(smo63754);
const smo63755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63755.setAttribute('id', 'smo63755');
smo63755.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63755);
const smo63756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63756.setAttribute('id', 'smo63756');
smo63756.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63756);
const smo63757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63757.setAttribute('id', 'smo63757');
smo63757.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63757);
const smo63758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63758.setAttribute('id', 'smo63758');
smo63758.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63758);
const smo63759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63759.setAttribute('id', 'smo63759');
smo63759.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63759);
const smo63760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63760.setAttribute('id', 'smo63760');
smo63760.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63760);
const smo63761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63761.setAttribute('id', 'smo63761');
smo63761.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63761);
const smo63762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63762.setAttribute('id', 'smo63762');
smo63762.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63762);
const smo63763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63763.setAttribute('id', 'smo63763');
smo63763.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63763);
const smo63764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63764.setAttribute('id', 'smo63764');
smo63764.setStyle({ fillStyle: "#115511" });
smo63778v1ar.push(smo63764);
smo63778v1.addTickables(smo63778v1ar)
fmtsmo6377851.joinVoices([smo63778v1]);
const fmtsmo6881351 = new VF.Formatter();
//
// voices and notes for stave 1 51
const smo68813v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68813v0ar = [];
const smo68784 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
smo68784.setAttribute('id', 'smo68784');
smo68813v0ar.push(smo68784);
const smo68785 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68785.setAttribute('id', 'smo68785');
smo68813v0ar.push(smo68785);
const smo68786 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68786.setAttribute('id', 'smo68786');
smo68813v0ar.push(smo68786);
const smo68787 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo68787.setAttribute('id', 'smo68787');
const smo687870acc = new VF.Accidental('#');
smo68787.addModifier(smo687870acc, 0);
smo68813v0ar.push(smo68787);
const smo68788 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68788.setAttribute('id', 'smo68788');
smo68788.addModifier(new VF.Dot(), 0);
smo68813v0ar.push(smo68788);
const smo68789 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68789.setAttribute('id', 'smo68789');
smo68813v0ar.push(smo68789);
const smo68790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68790.setAttribute('id', 'smo68790');
smo68813v0ar.push(smo68790);
const smo68791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68791.setAttribute('id', 'smo68791');
const smo687910acc = new VF.Accidental('n');
smo68791.addModifier(smo687910acc, 0);
smo68813v0ar.push(smo68791);
const smo68792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68792.setAttribute('id', 'smo68792');
smo68813v0ar.push(smo68792);
smo68813v0.addTickables(smo68813v0ar)
fmtsmo6881351.joinVoices([smo68813v0]);
const smo68813v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68813v1ar = [];
const smo68793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo68793.setAttribute('id', 'smo68793');
smo68793.setStyle({ fillStyle: "#115511" });
smo68813v1ar.push(smo68793);
const smo68794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo68794.setAttribute('id', 'smo68794');
smo68794.setStyle({ fillStyle: "#115511" });
const smo687940acc = new VF.Accidental('#');
smo68794.addModifier(smo687940acc, 0);
smo68813v1ar.push(smo68794);
const smo68795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68795.setAttribute('id', 'smo68795');
smo68795.setStyle({ fillStyle: "#115511" });
smo68813v1ar.push(smo68795);
const smo68796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68796.setAttribute('id', 'smo68796');
smo68796.setStyle({ fillStyle: "#115511" });
smo68813v1ar.push(smo68796);
const smo68797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68797.setAttribute('id', 'smo68797');
smo68797.setStyle({ fillStyle: "#115511" });
smo68813v1ar.push(smo68797);
const smo68798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68798.setAttribute('id', 'smo68798');
smo68798.setStyle({ fillStyle: "#115511" });
smo68813v1ar.push(smo68798);
const smo68799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68799.setAttribute('id', 'smo68799');
smo68799.setStyle({ fillStyle: "#115511" });
const smo687990acc = new VF.Accidental('n');
smo68799.addModifier(smo687990acc, 0);
smo68813v1ar.push(smo68799);
smo68813v1.addTickables(smo68813v1ar)
fmtsmo6881351.joinVoices([smo68813v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72147 = smo63744.getStemDirection();
smo63744.setStemDirection(dirsmo72147);
smo63745.setStemDirection(dirsmo72147);
smo63746.setStemDirection(dirsmo72147);
smo63747.setStemDirection(dirsmo72147);
const smo72147 = new VF.Beam([smo63744,smo63745,smo63746,smo63747]);
const dirsmo72148 = smo63748.getStemDirection();
smo63748.setStemDirection(dirsmo72148);
smo63749.setStemDirection(dirsmo72148);
smo63750.setStemDirection(dirsmo72148);
smo63751.setStemDirection(dirsmo72148);
const smo72148 = new VF.Beam([smo63748,smo63749,smo63750,smo63751]);
const dirsmo72149 = smo63752.getStemDirection();
smo63752.setStemDirection(dirsmo72149);
smo63753.setStemDirection(dirsmo72149);
const smo72149 = new VF.Beam([smo63752,smo63753]);
const dirsmo72150 = smo63754.getStemDirection();
smo63754.setStemDirection(dirsmo72150);
smo63755.setStemDirection(dirsmo72150);
smo63756.setStemDirection(dirsmo72150);
smo63757.setStemDirection(dirsmo72150);
smo63758.setStemDirection(dirsmo72150);
const smo72150 = new VF.Beam([smo63754,smo63755,smo63756,smo63757,smo63758]);
const dirsmo72151 = smo63759.getStemDirection();
smo63759.setStemDirection(dirsmo72151);
smo63760.setStemDirection(dirsmo72151);
const smo72151 = new VF.Beam([smo63759,smo63760]);
const dirsmo72152 = smo63761.getStemDirection();
smo63761.setStemDirection(dirsmo72152);
smo63762.setStemDirection(dirsmo72152);
smo63763.setStemDirection(dirsmo72152);
smo63764.setStemDirection(dirsmo72152);
const smo72152 = new VF.Beam([smo63761,smo63762,smo63763,smo63764]);
const dirsmo72155 = smo68785.getStemDirection();
smo68785.setStemDirection(dirsmo72155);
smo68786.setStemDirection(dirsmo72155);
smo68787.setStemDirection(dirsmo72155);
const smo72155 = new VF.Beam([smo68785,smo68786,smo68787]);
const dirsmo72156 = smo68788.getStemDirection();
smo68788.setStemDirection(dirsmo72156);
smo68789.setStemDirection(dirsmo72156);
smo68790.setStemDirection(dirsmo72156);
const smo72156 = new VF.Beam([smo68788,smo68789,smo68790]);
const dirsmo72157 = smo68791.getStemDirection();
smo68791.setStemDirection(dirsmo72157);
smo68792.setStemDirection(dirsmo72157);
const smo72157 = new VF.Beam([smo68791,smo68792]);
const dirsmo72158 = smo68793.getStemDirection();
smo68793.setStemDirection(dirsmo72158);
smo68794.setStemDirection(dirsmo72158);
smo68795.setStemDirection(dirsmo72158);
smo68796.setStemDirection(dirsmo72158);
const smo72158 = new VF.Beam([smo68793,smo68794,smo68795,smo68796]);
const dirsmo72159 = smo68798.getStemDirection();
smo68798.setStemDirection(dirsmo72159);
smo68799.setStemDirection(dirsmo72159);
const smo72159 = new VF.Beam([smo68798,smo68799]);
 
// formatting measures in staff group smo60952
fmtsmo6377851.format([smo63778v0,smo63778v1,smo68813v0,smo68813v1], 515);
const stavesmo63778 = new VF.Stave(646, 662, 563);
stavesmo63778.setAttribute('id', 'stavesmo63778');
stavesmo63778.setBegBarType(VF.Barline.type.NONE);
stavesmo63778.setContext(context);
stavesmo63778.draw();
smo63778v0.draw(context, stavesmo63778);
smo63778v1.draw(context, stavesmo63778);
smo72147.setContext(context);
smo72147.draw();
smo72148.setContext(context);
smo72148.draw();
smo72149.setContext(context);
smo72149.draw();
smo72150.setContext(context);
smo72150.draw();
smo72151.setContext(context);
smo72151.draw();
smo72152.setContext(context);
smo72152.draw();
const stavesmo68813 = new VF.Stave(646, 801, 563);
stavesmo68813.setAttribute('id', 'stavesmo68813');
stavesmo68813.setBegBarType(VF.Barline.type.NONE);
stavesmo68813.addClef('bass');
stavesmo68813.setContext(context);
stavesmo68813.draw();
smo68813v0.draw(context, stavesmo68813);
smo68813v1.draw(context, stavesmo68813);
smo72155.setContext(context);
smo72155.draw();
smo72156.setContext(context);
smo72156.draw();
smo72157.setContext(context);
smo72157.draw();
smo72158.setContext(context);
smo72158.draw();
smo72159.setContext(context);
smo72159.draw();
const fmtsmo6381552 = new VF.Formatter();
//
// voices and notes for stave 0 52
const smo63815v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63815v0ar = [];
const smo63779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63779.setAttribute('id', 'smo63779');
smo63815v0ar.push(smo63779);
const smo63780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/5/n"]}'))
smo63780.setAttribute('id', 'smo63780');
const smo637800acc = new VF.Accidental('b');
smo63780.addModifier(smo637800acc, 0);
smo63815v0ar.push(smo63780);
const smo63781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo63781.setAttribute('id', 'smo63781');
smo63815v0ar.push(smo63781);
const smo63782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63782.setAttribute('id', 'smo63782');
smo63815v0ar.push(smo63782);
const smo63783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63783.setAttribute('id', 'smo63783');
smo63815v0ar.push(smo63783);
const smo63784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63784.setAttribute('id', 'smo63784');
smo63815v0ar.push(smo63784);
const smo63785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63785.setAttribute('id', 'smo63785');
smo63815v0ar.push(smo63785);
const smo63786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63786.setAttribute('id', 'smo63786');
smo63815v0ar.push(smo63786);
const smo63787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63787.setAttribute('id', 'smo63787');
smo63815v0ar.push(smo63787);
const smo63788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63788.setAttribute('id', 'smo63788');
smo63815v0ar.push(smo63788);
const smo63789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63789.setAttribute('id', 'smo63789');
smo63815v0ar.push(smo63789);
const smo63790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63790.setAttribute('id', 'smo63790');
const smo63791 = new VF.Ornament('mordent_inverted');
smo63790.addModifier(smo63791, 0);
smo63815v0ar.push(smo63790);
const smo63792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63792.setAttribute('id', 'smo63792');
smo63815v0ar.push(smo63792);
const smo63793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63793.setAttribute('id', 'smo63793');
smo63815v0ar.push(smo63793);
smo63815v0.addTickables(smo63815v0ar)
fmtsmo6381552.joinVoices([smo63815v0]);
const smo63815v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63815v1ar = [];
const smo63794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63794.setAttribute('id', 'smo63794');
smo63794.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63794);
const smo63795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63795.setAttribute('id', 'smo63795');
smo63795.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63795);
const smo63796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo63796.setAttribute('id', 'smo63796');
smo63796.setStyle({ fillStyle: "#115511" });
const smo637960acc = new VF.Accidental('#');
smo63796.addModifier(smo637960acc, 0);
smo63815v1ar.push(smo63796);
const smo63797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63797.setAttribute('id', 'smo63797');
smo63797.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63797);
const smo63798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63798.setAttribute('id', 'smo63798');
smo63798.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63798);
const smo63799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo63799.setAttribute('id', 'smo63799');
smo63799.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63799);
const smo63800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63800.setAttribute('id', 'smo63800');
smo63800.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63800);
const smo63801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63801.setAttribute('id', 'smo63801');
smo63801.setStyle({ fillStyle: "#115511" });
smo63815v1ar.push(smo63801);
smo63815v1.addTickables(smo63815v1ar)
fmtsmo6381552.joinVoices([smo63815v1]);
const fmtsmo6884752 = new VF.Formatter();
//
// voices and notes for stave 1 52
const smo68847v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68847v0ar = [];
const smo68814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68814.setAttribute('id', 'smo68814');
smo68847v0ar.push(smo68814);
const smo68815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68815.setAttribute('id', 'smo68815');
smo68847v0ar.push(smo68815);
const smo68816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68816.setAttribute('id', 'smo68816');
smo68847v0ar.push(smo68816);
const smo68817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68817.setAttribute('id', 'smo68817');
smo68847v0ar.push(smo68817);
const smo68818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68818.setAttribute('id', 'smo68818');
smo68847v0ar.push(smo68818);
const smo68819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68819.setAttribute('id', 'smo68819');
smo68847v0ar.push(smo68819);
const smo68820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo68820.setAttribute('id', 'smo68820');
const smo688200acc = new VF.Accidental('#');
smo68820.addModifier(smo688200acc, 0);
smo68847v0ar.push(smo68820);
const smo68821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo68821.setAttribute('id', 'smo68821');
smo68847v0ar.push(smo68821);
const smo68822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo68822.setAttribute('id', 'smo68822');
smo68847v0ar.push(smo68822);
smo68847v0.addTickables(smo68847v0ar)
fmtsmo6884752.joinVoices([smo68847v0]);
const smo68847v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68847v1ar = [];
const smo68823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68823.setAttribute('id', 'smo68823');
smo68823.setStyle({ fillStyle: "#115511" });
smo68823.addModifier(new VF.Dot(), 0);
smo68847v1ar.push(smo68823);
const smo68824 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68824.setAttribute('id', 'smo68824');
smo68824.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68824);
const smo68825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68825.setAttribute('id', 'smo68825');
smo68825.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68825);
const smo68826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68826.setAttribute('id', 'smo68826');
smo68826.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68826);
const smo68827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo68827.setAttribute('id', 'smo68827');
smo68827.setStyle({ fillStyle: "#115511" });
const smo688270acc = new VF.Accidental('b');
smo68827.addModifier(smo688270acc, 0);
smo68847v1ar.push(smo68827);
const smo68828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68828.setAttribute('id', 'smo68828');
smo68828.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68828);
const smo68829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68829.setAttribute('id', 'smo68829');
smo68829.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68829);
const smo68830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68830.setAttribute('id', 'smo68830');
smo68830.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68830);
const smo68831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo68831.setAttribute('id', 'smo68831');
smo68831.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68831);
const smo68832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68832.setAttribute('id', 'smo68832');
smo68832.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68832);
const smo68833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68833.setAttribute('id', 'smo68833');
smo68833.setStyle({ fillStyle: "#115511" });
smo68847v1ar.push(smo68833);
smo68847v1.addTickables(smo68847v1ar)
fmtsmo6884752.joinVoices([smo68847v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72162 = smo63779.getStemDirection();
smo63779.setStemDirection(dirsmo72162);
smo63780.setStemDirection(dirsmo72162);
const smo72162 = new VF.Beam([smo63779,smo63780]);
const dirsmo72163 = smo63781.getStemDirection();
smo63781.setStemDirection(dirsmo72163);
smo63782.setStemDirection(dirsmo72163);
smo63783.setStemDirection(dirsmo72163);
const smo72163 = new VF.Beam([smo63781,smo63782,smo63783]);
const dirsmo72164 = smo63784.getStemDirection();
smo63784.setStemDirection(dirsmo72164);
smo63785.setStemDirection(dirsmo72164);
smo63786.setStemDirection(dirsmo72164);
smo63787.setStemDirection(dirsmo72164);
const smo72164 = new VF.Beam([smo63784,smo63785,smo63786,smo63787]);
const dirsmo72165 = smo63788.getStemDirection();
smo63788.setStemDirection(dirsmo72165);
smo63789.setStemDirection(dirsmo72165);
smo63790.setStemDirection(dirsmo72165);
smo63792.setStemDirection(dirsmo72165);
smo63793.setStemDirection(dirsmo72165);
const smo72165 = new VF.Beam([smo63788,smo63789,smo63790,smo63792,smo63793]);
const dirsmo72166 = smo63794.getStemDirection();
smo63794.setStemDirection(dirsmo72166);
smo63795.setStemDirection(dirsmo72166);
smo63796.setStemDirection(dirsmo72166);
smo63797.setStemDirection(dirsmo72166);
const smo72166 = new VF.Beam([smo63794,smo63795,smo63796,smo63797]);
const dirsmo72167 = smo63798.getStemDirection();
smo63798.setStemDirection(dirsmo72167);
smo63799.setStemDirection(dirsmo72167);
smo63800.setStemDirection(dirsmo72167);
smo63801.setStemDirection(dirsmo72167);
const smo72167 = new VF.Beam([smo63798,smo63799,smo63800,smo63801]);
const dirsmo72170 = smo68814.getStemDirection();
smo68814.setStemDirection(dirsmo72170);
smo68815.setStemDirection(dirsmo72170);
const smo72170 = new VF.Beam([smo68814,smo68815]);
const dirsmo72171 = smo68816.getStemDirection();
smo68816.setStemDirection(dirsmo72171);
smo68817.setStemDirection(dirsmo72171);
smo68818.setStemDirection(dirsmo72171);
smo68819.setStemDirection(dirsmo72171);
const smo72171 = new VF.Beam([smo68816,smo68817,smo68818,smo68819]);
const dirsmo72172 = smo68823.getStemDirection();
smo68823.setStemDirection(dirsmo72172);
smo68824.setStemDirection(dirsmo72172);
smo68825.setStemDirection(dirsmo72172);
smo68826.setStemDirection(dirsmo72172);
smo68827.setStemDirection(dirsmo72172);
const smo72172 = new VF.Beam([smo68823,smo68824,smo68825,smo68826,smo68827]);
const dirsmo72173 = smo68828.getStemDirection();
smo68828.setStemDirection(dirsmo72173);
smo68829.setStemDirection(dirsmo72173);
const smo72173 = new VF.Beam([smo68828,smo68829]);
const dirsmo72174 = smo68830.getStemDirection();
smo68830.setStemDirection(dirsmo72174);
smo68831.setStemDirection(dirsmo72174);
smo68832.setStemDirection(dirsmo72174);
smo68833.setStemDirection(dirsmo72174);
const smo72174 = new VF.Beam([smo68830,smo68831,smo68832,smo68833]);
 
// formatting measures in staff group smo60952
fmtsmo6381552.format([smo63815v0,smo63815v1,smo68847v0,smo68847v1], 585);
const stavesmo63815 = new VF.Stave(1209, 662, 599);
stavesmo63815.setAttribute('id', 'stavesmo63815');
stavesmo63815.setBegBarType(VF.Barline.type.NONE);
stavesmo63815.setContext(context);
stavesmo63815.draw();
smo63815v0.draw(context, stavesmo63815);
smo63815v1.draw(context, stavesmo63815);
smo72162.setContext(context);
smo72162.draw();
smo72163.setContext(context);
smo72163.draw();
smo72164.setContext(context);
smo72164.draw();
smo72165.setContext(context);
smo72165.draw();
smo72166.setContext(context);
smo72166.draw();
smo72167.setContext(context);
smo72167.draw();
const stavesmo68847 = new VF.Stave(1209, 801, 599);
stavesmo68847.setAttribute('id', 'stavesmo68847');
stavesmo68847.setBegBarType(VF.Barline.type.NONE);
stavesmo68847.setContext(context);
stavesmo68847.draw();
smo68847v0.draw(context, stavesmo68847);
smo68847v1.draw(context, stavesmo68847);
smo72170.setContext(context);
smo72170.draw();
smo72171.setContext(context);
smo72171.draw();
smo72172.setContext(context);
smo72172.draw();
smo72173.setContext(context);
smo72173.draw();
smo72174.setContext(context);
smo72174.draw();
const rightsmo60952stavesmo638151 = new VF.StaveConnector(stavesmo63815, stavesmo68847).setType(0);
rightsmo60952stavesmo638151.setContext(context).draw();
const fmtsmo6384753 = new VF.Formatter();
//
// voices and notes for stave 0 53
const smo63847v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63847v0ar = [];
const smo63816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo63816.setAttribute('id', 'smo63816');
smo63847v0ar.push(smo63816);
const smo63817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo63817.setAttribute('id', 'smo63817');
const smo638170acc = new VF.Accidental('#');
smo63817.addModifier(smo638170acc, 0);
smo63847v0ar.push(smo63817);
const smo63818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63818.setAttribute('id', 'smo63818');
smo63847v0ar.push(smo63818);
const smo63819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63819.setAttribute('id', 'smo63819');
smo63847v0ar.push(smo63819);
const smo63820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63820.setAttribute('id', 'smo63820');
smo63820.addModifier(new VF.Dot(), 0);
smo63847v0ar.push(smo63820);
const smo63821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63821.setAttribute('id', 'smo63821');
smo63847v0ar.push(smo63821);
const smo63822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63822.setAttribute('id', 'smo63822');
smo63847v0ar.push(smo63822);
const smo63823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo63823.setAttribute('id', 'smo63823');
smo63847v0ar.push(smo63823);
const smo63824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/5/r"]}'))
smo63824.setAttribute('id', 'smo63824');
smo63847v0ar.push(smo63824);
smo63847v0.addTickables(smo63847v0ar)
fmtsmo6384753.joinVoices([smo63847v0]);
const smo63847v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63847v1ar = [];
const smo63825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63825.setAttribute('id', 'smo63825');
smo63825.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63825);
const smo63826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo63826.setAttribute('id', 'smo63826');
smo63826.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63826);
const smo63827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/4/r"]}'))
smo63827.setAttribute('id', 'smo63827');
smo63827.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63827);
const smo63828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63828.setAttribute('id', 'smo63828');
smo63828.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63828);
const smo63829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63829.setAttribute('id', 'smo63829');
smo63829.setStyle({ fillStyle: "#115511" });
const smo638290acc = new VF.Accidental('#');
smo63829.addModifier(smo638290acc, 0);
smo63847v1ar.push(smo63829);
const smo63830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63830.setAttribute('id', 'smo63830');
smo63830.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63830);
const smo63831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63831.setAttribute('id', 'smo63831');
smo63831.setStyle({ fillStyle: "#115511" });
smo63831.addModifier(new VF.Dot(), 0);
smo63847v1ar.push(smo63831);
const smo63832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63832.setAttribute('id', 'smo63832');
smo63832.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63832);
const smo63833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63833.setAttribute('id', 'smo63833');
smo63833.setStyle({ fillStyle: "#115511" });
smo63847v1ar.push(smo63833);
smo63847v1.addTickables(smo63847v1ar)
fmtsmo6384753.joinVoices([smo63847v1]);
const fmtsmo6887753 = new VF.Formatter();
//
// voices and notes for stave 1 53
const smo68877v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68877v0ar = [];
const smo68848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68848.setAttribute('id', 'smo68848');
smo68877v0ar.push(smo68848);
const smo68849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68849.setAttribute('id', 'smo68849');
smo68877v0ar.push(smo68849);
const smo68850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68850.setAttribute('id', 'smo68850');
smo68877v0ar.push(smo68850);
const smo68851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/4/n"]}'))
smo68851.setAttribute('id', 'smo68851');
const smo688510acc = new VF.Accidental('#');
smo68851.addModifier(smo688510acc, 0);
smo68877v0ar.push(smo68851);
const smo68852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68852.setAttribute('id', 'smo68852');
smo68852.addModifier(new VF.Dot(), 0);
smo68877v0ar.push(smo68852);
const smo68853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo68853.setAttribute('id', 'smo68853');
smo68877v0ar.push(smo68853);
const smo68854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68854.setAttribute('id', 'smo68854');
smo68877v0ar.push(smo68854);
const smo68855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo68855.setAttribute('id', 'smo68855');
const smo688550acc = new VF.Accidental('n');
smo68855.addModifier(smo688550acc, 0);
smo68877v0ar.push(smo68855);
const smo68856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo68856.setAttribute('id', 'smo68856');
const smo688560acc = new VF.Accidental('#');
smo68856.addModifier(smo688560acc, 0);
smo68877v0ar.push(smo68856);
smo68877v0.addTickables(smo68877v0ar)
fmtsmo6887753.joinVoices([smo68877v0]);
const smo68877v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68877v1ar = [];
const smo68857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68857.setAttribute('id', 'smo68857');
smo68857.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68857);
const smo68858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68858.setAttribute('id', 'smo68858');
smo68858.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68858);
const smo68859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68859.setAttribute('id', 'smo68859');
smo68859.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68859);
const smo68860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68860.setAttribute('id', 'smo68860');
smo68860.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68860);
const smo68861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68861.setAttribute('id', 'smo68861');
smo68861.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68861);
const smo68862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68862.setAttribute('id', 'smo68862');
smo68862.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68862);
const smo68863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68863.setAttribute('id', 'smo68863');
smo68863.setStyle({ fillStyle: "#115511" });
smo68877v1ar.push(smo68863);
smo68877v1.addTickables(smo68877v1ar)
fmtsmo6887753.joinVoices([smo68877v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72189 = smo63816.getStemDirection();
smo63816.setStemDirection(dirsmo72189);
smo63817.setStemDirection(dirsmo72189);
smo63818.setStemDirection(dirsmo72189);
smo63819.setStemDirection(dirsmo72189);
const smo72189 = new VF.Beam([smo63816,smo63817,smo63818,smo63819]);
const dirsmo72190 = smo63820.getStemDirection();
smo63820.setStemDirection(dirsmo72190);
smo63821.setStemDirection(dirsmo72190);
const smo72190 = new VF.Beam([smo63820,smo63821]);
const dirsmo72191 = smo63829.getStemDirection();
smo63829.setStemDirection(dirsmo72191);
smo63830.setStemDirection(dirsmo72191);
const smo72191 = new VF.Beam([smo63829,smo63830]);
const dirsmo72192 = smo63831.getStemDirection();
smo63831.setStemDirection(dirsmo72192);
smo63832.setStemDirection(dirsmo72192);
smo63833.setStemDirection(dirsmo72192);
const smo72192 = new VF.Beam([smo63831,smo63832,smo63833]);
const dirsmo72195 = smo68849.getStemDirection();
smo68849.setStemDirection(dirsmo72195);
smo68850.setStemDirection(dirsmo72195);
smo68851.setStemDirection(dirsmo72195);
const smo72195 = new VF.Beam([smo68849,smo68850,smo68851]);
const dirsmo72196 = smo68852.getStemDirection();
smo68852.setStemDirection(dirsmo72196);
smo68853.setStemDirection(dirsmo72196);
smo68854.setStemDirection(dirsmo72196);
const smo72196 = new VF.Beam([smo68852,smo68853,smo68854]);
const dirsmo72197 = smo68855.getStemDirection();
smo68855.setStemDirection(dirsmo72197);
smo68856.setStemDirection(dirsmo72197);
const smo72197 = new VF.Beam([smo68855,smo68856]);
const dirsmo72198 = smo68857.getStemDirection();
smo68857.setStemDirection(dirsmo72198);
smo68858.setStemDirection(dirsmo72198);
smo68859.setStemDirection(dirsmo72198);
smo68860.setStemDirection(dirsmo72198);
smo68861.setStemDirection(dirsmo72198);
smo68862.setStemDirection(dirsmo72198);
const smo72198 = new VF.Beam([smo68857,smo68858,smo68859,smo68860,smo68861,smo68862]);
 
// formatting measures in staff group smo60952
fmtsmo6384753.format([smo63847v0,smo63847v1,smo68877v0,smo68877v1], 496);
const stavesmo63847 = new VF.Stave(90, 1010, 554);
stavesmo63847.setAttribute('id', 'stavesmo63847');
stavesmo63847.setBegBarType(1);
stavesmo63847.addClef('treble');
stavesmo63847.setContext(context);
stavesmo63847.draw();
smo63847v0.draw(context, stavesmo63847);
smo63847v1.draw(context, stavesmo63847);
smo72189.setContext(context);
smo72189.draw();
smo72190.setContext(context);
smo72190.draw();
smo72191.setContext(context);
smo72191.draw();
smo72192.setContext(context);
smo72192.draw();
const stavesmo68877 = new VF.Stave(90, 1107, 554);
stavesmo68877.setAttribute('id', 'stavesmo68877');
stavesmo68877.setBegBarType(1);
stavesmo68877.addClef('treble');
stavesmo68877.setContext(context);
stavesmo68877.draw();
smo68877v0.draw(context, stavesmo68877);
smo68877v1.draw(context, stavesmo68877);
smo72195.setContext(context);
smo72195.draw();
smo72196.setContext(context);
smo72196.draw();
smo72197.setContext(context);
smo72197.draw();
smo72198.setContext(context);
smo72198.draw();
const leftsmo60952stavesmo638471 = new VF.StaveConnector(stavesmo63847, stavesmo68877).setType(3);
leftsmo60952stavesmo638471.setContext(context).draw();
const fmtsmo6387454 = new VF.Formatter();
//
// voices and notes for stave 0 54
const smo63874v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63874v0ar = [];
const smo63848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo63848.setAttribute('id', 'smo63848');
smo63848.setStyle({ fillStyle: '#aaaaaa7f' });
smo63874v0ar.push(smo63848);
smo63874v0.addTickables(smo63874v0ar)
fmtsmo6387454.joinVoices([smo63874v0]);
const smo63874v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63874v1ar = [];
const smo63849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63849.setAttribute('id', 'smo63849');
smo63849.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63849);
const smo63850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63850.setAttribute('id', 'smo63850');
smo63850.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63850);
const smo63851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63851.setAttribute('id', 'smo63851');
smo63851.setStyle({ fillStyle: "#115511" });
const smo638510acc = new VF.Accidental('#');
smo63851.addModifier(smo638510acc, 0);
smo63874v1ar.push(smo63851);
const smo63852 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63852.setAttribute('id', 'smo63852');
smo63852.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63852);
const smo63853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63853.setAttribute('id', 'smo63853');
smo63853.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63853);
const smo63854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63854.setAttribute('id', 'smo63854');
smo63854.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63854);
const smo63855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63855.setAttribute('id', 'smo63855');
smo63855.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63855);
const smo63856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63856.setAttribute('id', 'smo63856');
smo63856.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63856);
const smo63857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63857.setAttribute('id', 'smo63857');
smo63857.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63857);
const smo63858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo63858.setAttribute('id', 'smo63858');
smo63858.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63858);
const smo63859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63859.setAttribute('id', 'smo63859');
smo63859.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63859);
const smo63860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63860.setAttribute('id', 'smo63860');
smo63860.setStyle({ fillStyle: "#115511" });
smo63874v1ar.push(smo63860);
smo63874v1.addTickables(smo63874v1ar)
fmtsmo6387454.joinVoices([smo63874v1]);
const fmtsmo6891054 = new VF.Formatter();
//
// voices and notes for stave 1 54
const smo68910v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68910v0ar = [];
const smo68878 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68878.setAttribute('id', 'smo68878');
smo68910v0ar.push(smo68878);
const smo68879 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68879.setAttribute('id', 'smo68879');
smo68910v0ar.push(smo68879);
const smo68880 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68880.setAttribute('id', 'smo68880');
smo68910v0ar.push(smo68880);
const smo68881 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68881.setAttribute('id', 'smo68881');
smo68910v0ar.push(smo68881);
const smo68882 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo68882.setAttribute('id', 'smo68882');
smo68910v0ar.push(smo68882);
const smo68883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo68883.setAttribute('id', 'smo68883');
smo68910v0ar.push(smo68883);
const smo68884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo68884.setAttribute('id', 'smo68884');
smo68910v0ar.push(smo68884);
const smo68885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo68885.setAttribute('id', 'smo68885');
const smo688850acc = new VF.Accidental('#');
smo68885.addModifier(smo688850acc, 0);
smo68910v0ar.push(smo68885);
const smo68886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/2/n"]}'))
smo68886.setAttribute('id', 'smo68886');
smo68910v0ar.push(smo68886);
const smo68887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68887.setAttribute('id', 'smo68887');
smo68910v0ar.push(smo68887);
const smo68888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo68888.setAttribute('id', 'smo68888');
const smo688880acc = new VF.Accidental('#');
smo68888.addModifier(smo688880acc, 0);
smo68910v0ar.push(smo68888);
const smo68889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68889.setAttribute('id', 'smo68889');
smo68910v0ar.push(smo68889);
smo68910v0.addTickables(smo68910v0ar)
fmtsmo6891054.joinVoices([smo68910v0]);
const smo68910v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68910v1ar = [];
const smo68890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68890.setAttribute('id', 'smo68890');
smo68890.setStyle({ fillStyle: "#115511" });
smo68910v1ar.push(smo68890);
const smo68891 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68891.setAttribute('id', 'smo68891');
smo68891.setStyle({ fillStyle: "#115511" });
smo68910v1ar.push(smo68891);
const smo68892 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68892.setAttribute('id', 'smo68892');
smo68892.setStyle({ fillStyle: "#115511" });
smo68910v1ar.push(smo68892);
const smo68893 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo68893.setAttribute('id', 'smo68893');
smo68893.setStyle({ fillStyle: "#115511" });
const smo688930acc = new VF.Accidental('#');
smo68893.addModifier(smo688930acc, 0);
smo68910v1ar.push(smo68893);
const smo68894 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68894.setAttribute('id', 'smo68894');
smo68894.setStyle({ fillStyle: "#115511" });
smo68910v1ar.push(smo68894);
const smo68895 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68895.setAttribute('id', 'smo68895');
smo68895.setStyle({ fillStyle: "#115511" });
smo68910v1ar.push(smo68895);
const smo68896 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68896.setAttribute('id', 'smo68896');
smo68896.setStyle({ fillStyle: "#115511" });
smo68910v1ar.push(smo68896);
smo68910v1.addTickables(smo68910v1ar)
fmtsmo6891054.joinVoices([smo68910v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72201 = smo63849.getStemDirection();
smo63849.setStemDirection(dirsmo72201);
smo63850.setStemDirection(dirsmo72201);
smo63851.setStemDirection(dirsmo72201);
smo63852.setStemDirection(dirsmo72201);
const smo72201 = new VF.Beam([smo63849,smo63850,smo63851,smo63852]);
const dirsmo72202 = smo63853.getStemDirection();
smo63853.setStemDirection(dirsmo72202);
smo63854.setStemDirection(dirsmo72202);
smo63855.setStemDirection(dirsmo72202);
smo63856.setStemDirection(dirsmo72202);
const smo72202 = new VF.Beam([smo63853,smo63854,smo63855,smo63856]);
const dirsmo72203 = smo63857.getStemDirection();
smo63857.setStemDirection(dirsmo72203);
smo63858.setStemDirection(dirsmo72203);
smo63859.setStemDirection(dirsmo72203);
smo63860.setStemDirection(dirsmo72203);
const smo72203 = new VF.Beam([smo63857,smo63858,smo63859,smo63860]);
const dirsmo72206 = smo68878.getStemDirection();
smo68878.setStemDirection(dirsmo72206);
smo68879.setStemDirection(dirsmo72206);
smo68880.setStemDirection(dirsmo72206);
smo68881.setStemDirection(dirsmo72206);
const smo72206 = new VF.Beam([smo68878,smo68879,smo68880,smo68881]);
const dirsmo72207 = smo68882.getStemDirection();
smo68882.setStemDirection(dirsmo72207);
smo68883.setStemDirection(dirsmo72207);
smo68884.setStemDirection(dirsmo72207);
smo68885.setStemDirection(dirsmo72207);
const smo72207 = new VF.Beam([smo68882,smo68883,smo68884,smo68885]);
const dirsmo72208 = smo68886.getStemDirection();
smo68886.setStemDirection(dirsmo72208);
smo68887.setStemDirection(dirsmo72208);
smo68888.setStemDirection(dirsmo72208);
smo68889.setStemDirection(dirsmo72208);
const smo72208 = new VF.Beam([smo68886,smo68887,smo68888,smo68889]);
const dirsmo72209 = smo68890.getStemDirection();
smo68890.setStemDirection(dirsmo72209);
smo68891.setStemDirection(dirsmo72209);
const smo72209 = new VF.Beam([smo68890,smo68891]);
const dirsmo72210 = smo68892.getStemDirection();
smo68892.setStemDirection(dirsmo72210);
smo68893.setStemDirection(dirsmo72210);
smo68894.setStemDirection(dirsmo72210);
smo68895.setStemDirection(dirsmo72210);
const smo72210 = new VF.Beam([smo68892,smo68893,smo68894,smo68895]);
 
// formatting measures in staff group smo60952
fmtsmo6387454.format([smo63874v0,smo63874v1,smo68910v0,smo68910v1], 564);
const stavesmo63874 = new VF.Stave(644, 1010, 612);
stavesmo63874.setAttribute('id', 'stavesmo63874');
stavesmo63874.setBegBarType(VF.Barline.type.NONE);
stavesmo63874.setContext(context);
stavesmo63874.draw();
smo63874v0.draw(context, stavesmo63874);
smo63874v1.draw(context, stavesmo63874);
smo72201.setContext(context);
smo72201.draw();
smo72202.setContext(context);
smo72202.draw();
smo72203.setContext(context);
smo72203.draw();
const stavesmo68910 = new VF.Stave(644, 1107, 612);
stavesmo68910.setAttribute('id', 'stavesmo68910');
stavesmo68910.setBegBarType(VF.Barline.type.NONE);
stavesmo68910.addClef('bass');
stavesmo68910.setContext(context);
stavesmo68910.draw();
smo68910v0.draw(context, stavesmo68910);
smo68910v1.draw(context, stavesmo68910);
smo72206.setContext(context);
smo72206.draw();
smo72207.setContext(context);
smo72207.draw();
smo72208.setContext(context);
smo72208.draw();
smo72209.setContext(context);
smo72209.draw();
smo72210.setContext(context);
smo72210.draw();
const fmtsmo6390755 = new VF.Formatter();
//
// voices and notes for stave 0 55
const smo63907v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63907v0ar = [];
const smo63875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63875.setAttribute('id', 'smo63875');
smo63907v0ar.push(smo63875);
const smo63876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63876.setAttribute('id', 'smo63876');
smo63907v0ar.push(smo63876);
const smo63877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63877.setAttribute('id', 'smo63877');
smo63877.addModifier(new VF.Dot(), 0);
smo63907v0ar.push(smo63877);
const smo63878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63878.setAttribute('id', 'smo63878');
smo63907v0ar.push(smo63878);
const smo63879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63879.setAttribute('id', 'smo63879');
smo63907v0ar.push(smo63879);
const smo63880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63880.setAttribute('id', 'smo63880');
smo63907v0ar.push(smo63880);
const smo63881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63881.setAttribute('id', 'smo63881');
smo63907v0ar.push(smo63881);
const smo63882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63882.setAttribute('id', 'smo63882');
smo63907v0ar.push(smo63882);
const smo63883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63883.setAttribute('id', 'smo63883');
smo63907v0ar.push(smo63883);
smo63907v0.addTickables(smo63907v0ar)
fmtsmo6390755.joinVoices([smo63907v0]);
const smo63907v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63907v1ar = [];
const smo63884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63884.setAttribute('id', 'smo63884');
smo63884.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63884);
const smo63885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63885.setAttribute('id', 'smo63885');
smo63885.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63885);
const smo63886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63886.setAttribute('id', 'smo63886');
smo63886.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63886);
const smo63887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63887.setAttribute('id', 'smo63887');
smo63887.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63887);
const smo63888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63888.setAttribute('id', 'smo63888');
smo63888.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63888);
const smo63889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63889.setAttribute('id', 'smo63889');
smo63889.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63889);
const smo63890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63890.setAttribute('id', 'smo63890');
smo63890.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63890);
const smo63891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63891.setAttribute('id', 'smo63891');
smo63891.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63891);
const smo63892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63892.setAttribute('id', 'smo63892');
smo63892.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63892);
const smo63893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63893.setAttribute('id', 'smo63893');
smo63893.setStyle({ fillStyle: "#115511" });
smo63907v1ar.push(smo63893);
smo63907v1.addTickables(smo63907v1ar)
fmtsmo6390755.joinVoices([smo63907v1]);
const fmtsmo6894255 = new VF.Formatter();
//
// voices and notes for stave 1 55
const smo68942v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68942v0ar = [];
const smo68911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo68911.setAttribute('id', 'smo68911');
smo68942v0ar.push(smo68911);
const smo68912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68912.setAttribute('id', 'smo68912');
smo68942v0ar.push(smo68912);
const smo68913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68913.setAttribute('id', 'smo68913');
smo68942v0ar.push(smo68913);
const smo68914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68914.setAttribute('id', 'smo68914');
smo68942v0ar.push(smo68914);
const smo68915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68915.setAttribute('id', 'smo68915');
smo68942v0ar.push(smo68915);
const smo68916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68916.setAttribute('id', 'smo68916');
smo68942v0ar.push(smo68916);
const smo68917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68917.setAttribute('id', 'smo68917');
smo68942v0ar.push(smo68917);
const smo68918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo68918.setAttribute('id', 'smo68918');
smo68942v0ar.push(smo68918);
const smo68919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68919.setAttribute('id', 'smo68919');
smo68942v0ar.push(smo68919);
const smo68920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68920.setAttribute('id', 'smo68920');
smo68942v0ar.push(smo68920);
const smo68921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68921.setAttribute('id', 'smo68921');
smo68942v0ar.push(smo68921);
const smo68922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68922.setAttribute('id', 'smo68922');
smo68942v0ar.push(smo68922);
smo68942v0.addTickables(smo68942v0ar)
fmtsmo6894255.joinVoices([smo68942v0]);
const smo68942v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68942v1ar = [];
const smo68923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68923.setAttribute('id', 'smo68923');
smo68923.setStyle({ fillStyle: "#115511" });
smo68942v1ar.push(smo68923);
const smo68924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68924.setAttribute('id', 'smo68924');
smo68924.setStyle({ fillStyle: "#115511" });
smo68942v1ar.push(smo68924);
const smo68925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68925.setAttribute('id', 'smo68925');
smo68925.setStyle({ fillStyle: "#115511" });
smo68942v1ar.push(smo68925);
const smo68926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo68926.setAttribute('id', 'smo68926');
smo68926.setStyle({ fillStyle: "#115511" });
const smo689260acc = new VF.Accidental('#');
smo68926.addModifier(smo689260acc, 0);
smo68942v1ar.push(smo68926);
const smo68927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68927.setAttribute('id', 'smo68927');
smo68927.setStyle({ fillStyle: "#115511" });
smo68942v1ar.push(smo68927);
const smo68928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68928.setAttribute('id', 'smo68928');
smo68928.setStyle({ fillStyle: "#115511" });
smo68942v1ar.push(smo68928);
smo68942v1.addTickables(smo68942v1ar)
fmtsmo6894255.joinVoices([smo68942v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72213 = smo63875.getStemDirection();
smo63875.setStemDirection(dirsmo72213);
smo63876.setStemDirection(dirsmo72213);
const smo72213 = new VF.Beam([smo63875,smo63876]);
const dirsmo72214 = smo63877.getStemDirection();
smo63877.setStemDirection(dirsmo72214);
smo63878.setStemDirection(dirsmo72214);
smo63879.setStemDirection(dirsmo72214);
const smo72214 = new VF.Beam([smo63877,smo63878,smo63879]);
const dirsmo72215 = smo63880.getStemDirection();
smo63880.setStemDirection(dirsmo72215);
smo63881.setStemDirection(dirsmo72215);
smo63882.setStemDirection(dirsmo72215);
smo63883.setStemDirection(dirsmo72215);
const smo72215 = new VF.Beam([smo63880,smo63881,smo63882,smo63883]);
const dirsmo72216 = smo63886.getStemDirection();
smo63886.setStemDirection(dirsmo72216);
smo63887.setStemDirection(dirsmo72216);
smo63888.setStemDirection(dirsmo72216);
smo63889.setStemDirection(dirsmo72216);
const smo72216 = new VF.Beam([smo63886,smo63887,smo63888,smo63889]);
const dirsmo72217 = smo63890.getStemDirection();
smo63890.setStemDirection(dirsmo72217);
smo63891.setStemDirection(dirsmo72217);
smo63892.setStemDirection(dirsmo72217);
smo63893.setStemDirection(dirsmo72217);
const smo72217 = new VF.Beam([smo63890,smo63891,smo63892,smo63893]);
const dirsmo72220 = smo68911.getStemDirection();
smo68911.setStemDirection(dirsmo72220);
smo68912.setStemDirection(dirsmo72220);
smo68913.setStemDirection(dirsmo72220);
smo68914.setStemDirection(dirsmo72220);
const smo72220 = new VF.Beam([smo68911,smo68912,smo68913,smo68914]);
const dirsmo72221 = smo68915.getStemDirection();
smo68915.setStemDirection(dirsmo72221);
smo68916.setStemDirection(dirsmo72221);
smo68917.setStemDirection(dirsmo72221);
smo68918.setStemDirection(dirsmo72221);
const smo72221 = new VF.Beam([smo68915,smo68916,smo68917,smo68918]);
const dirsmo72222 = smo68919.getStemDirection();
smo68919.setStemDirection(dirsmo72222);
smo68920.setStemDirection(dirsmo72222);
smo68921.setStemDirection(dirsmo72222);
smo68922.setStemDirection(dirsmo72222);
const smo72222 = new VF.Beam([smo68919,smo68920,smo68921,smo68922]);
const dirsmo72223 = smo68923.getStemDirection();
smo68923.setStemDirection(dirsmo72223);
smo68924.setStemDirection(dirsmo72223);
smo68925.setStemDirection(dirsmo72223);
const smo72223 = new VF.Beam([smo68923,smo68924,smo68925]);
const dirsmo72224 = smo68926.getStemDirection();
smo68926.setStemDirection(dirsmo72224);
smo68927.setStemDirection(dirsmo72224);
const smo72224 = new VF.Beam([smo68926,smo68927]);
 
// formatting measures in staff group smo60952
fmtsmo6390755.format([smo63907v0,smo63907v1,smo68942v0,smo68942v1], 504);
const stavesmo63907 = new VF.Stave(1256, 1010, 552);
stavesmo63907.setAttribute('id', 'stavesmo63907');
stavesmo63907.setBegBarType(VF.Barline.type.NONE);
stavesmo63907.setContext(context);
stavesmo63907.draw();
smo63907v0.draw(context, stavesmo63907);
smo63907v1.draw(context, stavesmo63907);
smo72213.setContext(context);
smo72213.draw();
smo72214.setContext(context);
smo72214.draw();
smo72215.setContext(context);
smo72215.draw();
smo72216.setContext(context);
smo72216.draw();
smo72217.setContext(context);
smo72217.draw();
const stavesmo68942 = new VF.Stave(1256, 1107, 552);
stavesmo68942.setAttribute('id', 'stavesmo68942');
stavesmo68942.setBegBarType(VF.Barline.type.NONE);
stavesmo68942.addClef('treble');
stavesmo68942.setContext(context);
stavesmo68942.draw();
smo68942v0.draw(context, stavesmo68942);
smo68942v1.draw(context, stavesmo68942);
smo72220.setContext(context);
smo72220.draw();
smo72221.setContext(context);
smo72221.draw();
smo72222.setContext(context);
smo72222.draw();
smo72223.setContext(context);
smo72223.draw();
smo72224.setContext(context);
smo72224.draw();
const rightsmo60952stavesmo639071 = new VF.StaveConnector(stavesmo63907, stavesmo68942).setType(0);
rightsmo60952stavesmo639071.setContext(context).draw();
const fmtsmo6394456 = new VF.Formatter();
//
// voices and notes for stave 0 56
const smo63944v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63944v0ar = [];
const smo63908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63908.setAttribute('id', 'smo63908');
smo63944v0ar.push(smo63908);
const smo63909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63909.setAttribute('id', 'smo63909');
smo63944v0ar.push(smo63909);
const smo63910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63910.setAttribute('id', 'smo63910');
smo63944v0ar.push(smo63910);
const smo63911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63911.setAttribute('id', 'smo63911');
smo63944v0ar.push(smo63911);
const smo63912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63912.setAttribute('id', 'smo63912');
smo63944v0ar.push(smo63912);
const smo63913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63913.setAttribute('id', 'smo63913');
smo63944v0ar.push(smo63913);
const smo63914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63914.setAttribute('id', 'smo63914');
smo63944v0ar.push(smo63914);
const smo63915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63915.setAttribute('id', 'smo63915');
smo63944v0ar.push(smo63915);
const smo63916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63916.setAttribute('id', 'smo63916');
smo63944v0ar.push(smo63916);
const smo63917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63917.setAttribute('id', 'smo63917');
smo63944v0ar.push(smo63917);
const smo63918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo63918.setAttribute('id', 'smo63918');
smo63944v0ar.push(smo63918);
const smo63919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo63919.setAttribute('id', 'smo63919');
smo63944v0ar.push(smo63919);
const smo63920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63920.setAttribute('id', 'smo63920');
smo63944v0ar.push(smo63920);
const smo63921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63921.setAttribute('id', 'smo63921');
smo63944v0ar.push(smo63921);
const smo63922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63922.setAttribute('id', 'smo63922');
smo63944v0ar.push(smo63922);
const smo63923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63923.setAttribute('id', 'smo63923');
smo63944v0ar.push(smo63923);
smo63944v0.addTickables(smo63944v0ar)
fmtsmo6394456.joinVoices([smo63944v0]);
const smo63944v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63944v1ar = [];
const smo63924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63924.setAttribute('id', 'smo63924');
smo63924.setStyle({ fillStyle: "#115511" });
smo63944v1ar.push(smo63924);
const smo63925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63925.setAttribute('id', 'smo63925');
smo63925.setStyle({ fillStyle: "#115511" });
smo63944v1ar.push(smo63925);
const smo63926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63926.setAttribute('id', 'smo63926');
smo63926.setStyle({ fillStyle: "#115511" });
smo63944v1ar.push(smo63926);
const smo63927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo63927.setAttribute('id', 'smo63927');
smo63927.setStyle({ fillStyle: "#115511" });
const smo639270acc = new VF.Accidental('b');
smo63927.addModifier(smo639270acc, 0);
smo63944v1ar.push(smo63927);
const smo63928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63928.setAttribute('id', 'smo63928');
smo63928.setStyle({ fillStyle: "#115511" });
smo63944v1ar.push(smo63928);
const smo63929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63929.setAttribute('id', 'smo63929');
smo63929.setStyle({ fillStyle: "#115511" });
smo63944v1ar.push(smo63929);
const smo63930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63930.setAttribute('id', 'smo63930');
smo63930.setStyle({ fillStyle: "#115511" });
smo63944v1ar.push(smo63930);
smo63944v1.addTickables(smo63944v1ar)
fmtsmo6394456.joinVoices([smo63944v1]);
const fmtsmo6897156 = new VF.Formatter();
//
// voices and notes for stave 1 56
const smo68971v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68971v0ar = [];
const smo68943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68943.setAttribute('id', 'smo68943');
smo68943.addModifier(new VF.Dot(), 0);
smo68971v0ar.push(smo68943);
const smo68944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68944.setAttribute('id', 'smo68944');
smo68971v0ar.push(smo68944);
const smo68945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo68945.setAttribute('id', 'smo68945');
smo68971v0ar.push(smo68945);
const smo68946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo68946.setAttribute('id', 'smo68946');
smo68971v0ar.push(smo68946);
const smo68947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68947.setAttribute('id', 'smo68947');
smo68971v0ar.push(smo68947);
const smo68948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68948.setAttribute('id', 'smo68948');
smo68971v0ar.push(smo68948);
const smo68949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68949.setAttribute('id', 'smo68949');
smo68971v0ar.push(smo68949);
const smo68950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68950.setAttribute('id', 'smo68950');
smo68971v0ar.push(smo68950);
const smo68951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo68951.setAttribute('id', 'smo68951');
smo68971v0ar.push(smo68951);
const smo68952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo68952.setAttribute('id', 'smo68952');
smo68971v0ar.push(smo68952);
const smo68953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo68953.setAttribute('id', 'smo68953');
smo68971v0ar.push(smo68953);
smo68971v0.addTickables(smo68971v0ar)
fmtsmo6897156.joinVoices([smo68971v0]);
const smo68971v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68971v1ar = [];
const smo68954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68954.setAttribute('id', 'smo68954');
smo68954.setStyle({ fillStyle: "#115511" });
smo68971v1ar.push(smo68954);
const smo68955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68955.setAttribute('id', 'smo68955');
smo68955.setStyle({ fillStyle: "#115511" });
smo68971v1ar.push(smo68955);
const smo68956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo68956.setAttribute('id', 'smo68956');
smo68956.setStyle({ fillStyle: "#115511" });
smo68971v1ar.push(smo68956);
const smo68957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo68957.setAttribute('id', 'smo68957');
smo68957.setStyle({ fillStyle: "#115511" });
smo68971v1ar.push(smo68957);
smo68971v1.addTickables(smo68971v1ar)
fmtsmo6897156.joinVoices([smo68971v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72242 = smo63908.getStemDirection();
smo63908.setStemDirection(dirsmo72242);
smo63909.setStemDirection(dirsmo72242);
smo63910.setStemDirection(dirsmo72242);
smo63911.setStemDirection(dirsmo72242);
const smo72242 = new VF.Beam([smo63908,smo63909,smo63910,smo63911]);
const dirsmo72243 = smo63912.getStemDirection();
smo63912.setStemDirection(dirsmo72243);
smo63913.setStemDirection(dirsmo72243);
smo63914.setStemDirection(dirsmo72243);
smo63915.setStemDirection(dirsmo72243);
const smo72243 = new VF.Beam([smo63912,smo63913,smo63914,smo63915]);
const dirsmo72244 = smo63916.getStemDirection();
smo63916.setStemDirection(dirsmo72244);
smo63917.setStemDirection(dirsmo72244);
smo63918.setStemDirection(dirsmo72244);
smo63919.setStemDirection(dirsmo72244);
const smo72244 = new VF.Beam([smo63916,smo63917,smo63918,smo63919]);
const dirsmo72245 = smo63920.getStemDirection();
smo63920.setStemDirection(dirsmo72245);
smo63921.setStemDirection(dirsmo72245);
smo63922.setStemDirection(dirsmo72245);
smo63923.setStemDirection(dirsmo72245);
const smo72245 = new VF.Beam([smo63920,smo63921,smo63922,smo63923]);
const dirsmo72246 = smo63925.getStemDirection();
smo63925.setStemDirection(dirsmo72246);
smo63926.setStemDirection(dirsmo72246);
smo63927.setStemDirection(dirsmo72246);
const smo72246 = new VF.Beam([smo63925,smo63926,smo63927]);
const dirsmo72247 = smo63929.getStemDirection();
smo63929.setStemDirection(dirsmo72247);
smo63930.setStemDirection(dirsmo72247);
const smo72247 = new VF.Beam([smo63929,smo63930]);
const dirsmo72250 = smo68943.getStemDirection();
smo68943.setStemDirection(dirsmo72250);
smo68944.setStemDirection(dirsmo72250);
smo68945.setStemDirection(dirsmo72250);
const smo72250 = new VF.Beam([smo68943,smo68944,smo68945]);
const dirsmo72251 = smo68946.getStemDirection();
smo68946.setStemDirection(dirsmo72251);
smo68947.setStemDirection(dirsmo72251);
const smo72251 = new VF.Beam([smo68946,smo68947]);
const dirsmo72252 = smo68948.getStemDirection();
smo68948.setStemDirection(dirsmo72252);
smo68949.setStemDirection(dirsmo72252);
const smo72252 = new VF.Beam([smo68948,smo68949]);
const dirsmo72253 = smo68950.getStemDirection();
smo68950.setStemDirection(dirsmo72253);
smo68951.setStemDirection(dirsmo72253);
smo68952.setStemDirection(dirsmo72253);
smo68953.setStemDirection(dirsmo72253);
const smo72253 = new VF.Beam([smo68950,smo68951,smo68952,smo68953]);
const dirsmo72254 = smo68956.getStemDirection();
smo68956.setStemDirection(dirsmo72254);
smo68957.setStemDirection(dirsmo72254);
const smo72254 = new VF.Beam([smo68956,smo68957]);
 
// formatting measures in staff group smo60952
fmtsmo6394456.format([smo63944v0,smo63944v1,smo68971v0,smo68971v1], 435);
const stavesmo63944 = new VF.Stave(90, 1331, 493);
stavesmo63944.setAttribute('id', 'stavesmo63944');
stavesmo63944.setBegBarType(1);
stavesmo63944.addClef('treble');
stavesmo63944.setContext(context);
stavesmo63944.draw();
smo63944v0.draw(context, stavesmo63944);
smo63944v1.draw(context, stavesmo63944);
smo72242.setContext(context);
smo72242.draw();
smo72243.setContext(context);
smo72243.draw();
smo72244.setContext(context);
smo72244.draw();
smo72245.setContext(context);
smo72245.draw();
smo72246.setContext(context);
smo72246.draw();
smo72247.setContext(context);
smo72247.draw();
const stavesmo68971 = new VF.Stave(90, 1450, 493);
stavesmo68971.setAttribute('id', 'stavesmo68971');
stavesmo68971.setBegBarType(1);
stavesmo68971.addClef('treble');
stavesmo68971.setContext(context);
stavesmo68971.draw();
smo68971v0.draw(context, stavesmo68971);
smo68971v1.draw(context, stavesmo68971);
smo72250.setContext(context);
smo72250.draw();
smo72251.setContext(context);
smo72251.draw();
smo72252.setContext(context);
smo72252.draw();
smo72253.setContext(context);
smo72253.draw();
smo72254.setContext(context);
smo72254.draw();
const leftsmo60952stavesmo639441 = new VF.StaveConnector(stavesmo63944, stavesmo68971).setType(3);
leftsmo60952stavesmo639441.setContext(context).draw();
const fmtsmo6396957 = new VF.Formatter();
//
// voices and notes for stave 0 57
const smo63969v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63969v0ar = [];
const smo63945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63945.setAttribute('id', 'smo63945');
smo63969v0ar.push(smo63945);
const smo63946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63946.setAttribute('id', 'smo63946');
smo63969v0ar.push(smo63946);
const smo63947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63947.setAttribute('id', 'smo63947');
smo63969v0ar.push(smo63947);
const smo63948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63948.setAttribute('id', 'smo63948');
smo63969v0ar.push(smo63948);
const smo63949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63949.setAttribute('id', 'smo63949');
smo63969v0ar.push(smo63949);
const smo63950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63950.setAttribute('id', 'smo63950');
smo63969v0ar.push(smo63950);
smo63969v0.addTickables(smo63969v0ar)
fmtsmo6396957.joinVoices([smo63969v0]);
const smo63969v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63969v1ar = [];
const smo63951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63951.setAttribute('id', 'smo63951');
smo63951.setStyle({ fillStyle: "#115511" });
smo63951.addModifier(new VF.Dot(), 0);
smo63969v1ar.push(smo63951);
const smo63952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63952.setAttribute('id', 'smo63952');
smo63952.setStyle({ fillStyle: "#115511" });
smo63969v1ar.push(smo63952);
const smo63953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo63953.setAttribute('id', 'smo63953');
smo63953.setStyle({ fillStyle: "#115511" });
smo63969v1ar.push(smo63953);
const smo63954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63954.setAttribute('id', 'smo63954');
smo63954.setStyle({ fillStyle: "#115511" });
smo63969v1ar.push(smo63954);
const smo63955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo63955.setAttribute('id', 'smo63955');
smo63955.setStyle({ fillStyle: "#115511" });
smo63969v1ar.push(smo63955);
smo63969v1.addTickables(smo63969v1ar)
fmtsmo6396957.joinVoices([smo63969v1]);
const fmtsmo6900557 = new VF.Formatter();
//
// voices and notes for stave 1 57
const smo69005v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69005v0ar = [];
const smo68972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68972.setAttribute('id', 'smo68972');
smo69005v0ar.push(smo68972);
const smo68973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo68973.setAttribute('id', 'smo68973');
smo69005v0ar.push(smo68973);
const smo68974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68974.setAttribute('id', 'smo68974');
smo69005v0ar.push(smo68974);
const smo68975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo68975.setAttribute('id', 'smo68975');
smo69005v0ar.push(smo68975);
const smo68976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68976.setAttribute('id', 'smo68976');
smo69005v0ar.push(smo68976);
const smo68977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68977.setAttribute('id', 'smo68977');
smo69005v0ar.push(smo68977);
smo69005v0.addTickables(smo69005v0ar)
fmtsmo6900557.joinVoices([smo69005v0]);
const smo69005v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69005v1ar = [];
const smo68978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68978.setAttribute('id', 'smo68978');
smo68978.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68978);
const smo68979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo68979.setAttribute('id', 'smo68979');
smo68979.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68979);
const smo68980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68980.setAttribute('id', 'smo68980');
smo68980.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68980);
const smo68981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68981.setAttribute('id', 'smo68981');
smo68981.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68981);
const smo68982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68982.setAttribute('id', 'smo68982');
smo68982.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68982);
const smo68983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68983.setAttribute('id', 'smo68983');
smo68983.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68983);
const smo68984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68984.setAttribute('id', 'smo68984');
smo68984.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68984);
const smo68985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo68985.setAttribute('id', 'smo68985');
smo68985.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68985);
const smo68986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68986.setAttribute('id', 'smo68986');
smo68986.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68986);
const smo68987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo68987.setAttribute('id', 'smo68987');
smo68987.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68987);
const smo68988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo68988.setAttribute('id', 'smo68988');
smo68988.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68988);
const smo68989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68989.setAttribute('id', 'smo68989');
smo68989.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68989);
const smo68990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68990.setAttribute('id', 'smo68990');
smo68990.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68990);
const smo68991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo68991.setAttribute('id', 'smo68991');
smo68991.setStyle({ fillStyle: "#115511" });
smo69005v1ar.push(smo68991);
smo69005v1.addTickables(smo69005v1ar)
fmtsmo6900557.joinVoices([smo69005v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72257 = smo63946.getStemDirection();
smo63946.setStemDirection(dirsmo72257);
smo63947.setStemDirection(dirsmo72257);
const smo72257 = new VF.Beam([smo63946,smo63947]);
const dirsmo72258 = smo63953.getStemDirection();
smo63953.setStemDirection(dirsmo72258);
smo63954.setStemDirection(dirsmo72258);
const smo72258 = new VF.Beam([smo63953,smo63954]);
const dirsmo72261 = smo68973.getStemDirection();
smo68973.setStemDirection(dirsmo72261);
smo68974.setStemDirection(dirsmo72261);
const smo72261 = new VF.Beam([smo68973,smo68974]);
const dirsmo72262 = smo68975.getStemDirection();
smo68975.setStemDirection(dirsmo72262);
smo68976.setStemDirection(dirsmo72262);
const smo72262 = new VF.Beam([smo68975,smo68976]);
const dirsmo72263 = smo68978.getStemDirection();
smo68978.setStemDirection(dirsmo72263);
smo68979.setStemDirection(dirsmo72263);
smo68980.setStemDirection(dirsmo72263);
smo68981.setStemDirection(dirsmo72263);
const smo72263 = new VF.Beam([smo68978,smo68979,smo68980,smo68981]);
const dirsmo72264 = smo68982.getStemDirection();
smo68982.setStemDirection(dirsmo72264);
smo68983.setStemDirection(dirsmo72264);
smo68984.setStemDirection(dirsmo72264);
smo68985.setStemDirection(dirsmo72264);
const smo72264 = new VF.Beam([smo68982,smo68983,smo68984,smo68985]);
const dirsmo72265 = smo68986.getStemDirection();
smo68986.setStemDirection(dirsmo72265);
smo68987.setStemDirection(dirsmo72265);
smo68988.setStemDirection(dirsmo72265);
smo68989.setStemDirection(dirsmo72265);
const smo72265 = new VF.Beam([smo68986,smo68987,smo68988,smo68989]);
const dirsmo72266 = smo68990.getStemDirection();
smo68990.setStemDirection(dirsmo72266);
smo68991.setStemDirection(dirsmo72266);
const smo72266 = new VF.Beam([smo68990,smo68991]);
 
// formatting measures in staff group smo60952
fmtsmo6396957.format([smo63969v0,smo63969v1,smo69005v0,smo69005v1], 346);
const stavesmo63969 = new VF.Stave(583, 1331, 360);
stavesmo63969.setAttribute('id', 'stavesmo63969');
stavesmo63969.setBegBarType(VF.Barline.type.NONE);
stavesmo63969.setContext(context);
stavesmo63969.draw();
smo63969v0.draw(context, stavesmo63969);
smo63969v1.draw(context, stavesmo63969);
smo72257.setContext(context);
smo72257.draw();
smo72258.setContext(context);
smo72258.draw();
const stavesmo69005 = new VF.Stave(583, 1450, 360);
stavesmo69005.setAttribute('id', 'stavesmo69005');
stavesmo69005.setBegBarType(VF.Barline.type.NONE);
stavesmo69005.setContext(context);
stavesmo69005.draw();
smo69005v0.draw(context, stavesmo69005);
smo69005v1.draw(context, stavesmo69005);
smo72261.setContext(context);
smo72261.draw();
smo72262.setContext(context);
smo72262.draw();
smo72263.setContext(context);
smo72263.draw();
smo72264.setContext(context);
smo72264.draw();
smo72265.setContext(context);
smo72265.draw();
smo72266.setContext(context);
smo72266.draw();
const fmtsmo6399658 = new VF.Formatter();
//
// voices and notes for stave 0 58
const smo63996v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63996v0ar = [];
const smo63970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63970.setAttribute('id', 'smo63970');
smo63996v0ar.push(smo63970);
const smo63971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo63971.setAttribute('id', 'smo63971');
smo63996v0ar.push(smo63971);
const smo63972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo63972.setAttribute('id', 'smo63972');
const smo639720acc = new VF.Accidental('b');
smo63972.addModifier(smo639720acc, 0);
smo63996v0ar.push(smo63972);
const smo63973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63973.setAttribute('id', 'smo63973');
smo63996v0ar.push(smo63973);
const smo63974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63974.setAttribute('id', 'smo63974');
smo63996v0ar.push(smo63974);
const smo63975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo63975.setAttribute('id', 'smo63975');
smo63996v0ar.push(smo63975);
smo63996v0.addTickables(smo63996v0ar)
fmtsmo6399658.joinVoices([smo63996v0]);
const smo63996v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo63996v1ar = [];
const smo63976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo63976.setAttribute('id', 'smo63976');
smo63976.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63976);
const smo63977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63977.setAttribute('id', 'smo63977');
smo63977.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63977);
const smo63978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63978.setAttribute('id', 'smo63978');
smo63978.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63978);
const smo63979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63979.setAttribute('id', 'smo63979');
smo63979.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63979);
const smo63980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo63980.setAttribute('id', 'smo63980');
smo63980.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63980);
const smo63981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo63981.setAttribute('id', 'smo63981');
smo63981.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63981);
const smo63982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo63982.setAttribute('id', 'smo63982');
smo63982.setStyle({ fillStyle: "#115511" });
smo63996v1ar.push(smo63982);
smo63996v1.addTickables(smo63996v1ar)
fmtsmo6399658.joinVoices([smo63996v1]);
const fmtsmo6902958 = new VF.Formatter();
//
// voices and notes for stave 1 58
const smo69029v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69029v0ar = [];
const smo69006 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69006.setAttribute('id', 'smo69006');
smo69029v0ar.push(smo69006);
const smo69007 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69007.setAttribute('id', 'smo69007');
smo69029v0ar.push(smo69007);
const smo69008 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69008.setAttribute('id', 'smo69008');
smo69029v0ar.push(smo69008);
const smo69009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69009.setAttribute('id', 'smo69009');
smo69029v0ar.push(smo69009);
const smo69010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69010.setAttribute('id', 'smo69010');
smo69010.addModifier(new VF.Dot(), 0);
smo69029v0ar.push(smo69010);
const smo69011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69011.setAttribute('id', 'smo69011');
smo69029v0ar.push(smo69011);
const smo69012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69012.setAttribute('id', 'smo69012');
smo69029v0ar.push(smo69012);
const smo69013 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69013.setAttribute('id', 'smo69013');
smo69029v0ar.push(smo69013);
const smo69014 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69014.setAttribute('id', 'smo69014');
smo69029v0ar.push(smo69014);
smo69029v0.addTickables(smo69029v0ar)
fmtsmo6902958.joinVoices([smo69029v0]);
const smo69029v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69029v1ar = [];
const smo69015 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo69015.setAttribute('id', 'smo69015');
smo69015.setStyle({ fillStyle: "#115511" });
smo69029v1ar.push(smo69015);
smo69029v1.addTickables(smo69029v1ar)
fmtsmo6902958.joinVoices([smo69029v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72269 = smo63971.getStemDirection();
smo63971.setStemDirection(dirsmo72269);
smo63972.setStemDirection(dirsmo72269);
const smo72269 = new VF.Beam([smo63971,smo63972]);
const dirsmo72270 = smo63979.getStemDirection();
smo63979.setStemDirection(dirsmo72270);
smo63980.setStemDirection(dirsmo72270);
const smo72270 = new VF.Beam([smo63979,smo63980]);
const dirsmo72271 = smo63981.getStemDirection();
smo63981.setStemDirection(dirsmo72271);
smo63982.setStemDirection(dirsmo72271);
const smo72271 = new VF.Beam([smo63981,smo63982]);
const dirsmo72274 = smo69006.getStemDirection();
smo69006.setStemDirection(dirsmo72274);
smo69007.setStemDirection(dirsmo72274);
smo69008.setStemDirection(dirsmo72274);
smo69009.setStemDirection(dirsmo72274);
const smo72274 = new VF.Beam([smo69006,smo69007,smo69008,smo69009]);
const dirsmo72275 = smo69010.getStemDirection();
smo69010.setStemDirection(dirsmo72275);
smo69011.setStemDirection(dirsmo72275);
smo69012.setStemDirection(dirsmo72275);
const smo72275 = new VF.Beam([smo69010,smo69011,smo69012]);
const dirsmo72276 = smo69013.getStemDirection();
smo69013.setStemDirection(dirsmo72276);
smo69014.setStemDirection(dirsmo72276);
const smo72276 = new VF.Beam([smo69013,smo69014]);
 
// formatting measures in staff group smo60952
fmtsmo6399658.format([smo63996v0,smo63996v1,smo69029v0,smo69029v1], 309);
const stavesmo63996 = new VF.Stave(943, 1331, 357);
stavesmo63996.setAttribute('id', 'stavesmo63996');
stavesmo63996.setBegBarType(VF.Barline.type.NONE);
stavesmo63996.setContext(context);
stavesmo63996.draw();
smo63996v0.draw(context, stavesmo63996);
smo63996v1.draw(context, stavesmo63996);
smo72269.setContext(context);
smo72269.draw();
smo72270.setContext(context);
smo72270.draw();
smo72271.setContext(context);
smo72271.draw();
const stavesmo69029 = new VF.Stave(943, 1450, 357);
stavesmo69029.setAttribute('id', 'stavesmo69029');
stavesmo69029.setBegBarType(VF.Barline.type.NONE);
stavesmo69029.addClef('bass');
stavesmo69029.setContext(context);
stavesmo69029.draw();
smo69029v0.draw(context, stavesmo69029);
smo69029v1.draw(context, stavesmo69029);
smo72274.setContext(context);
smo72274.draw();
smo72275.setContext(context);
smo72275.draw();
smo72276.setContext(context);
smo72276.draw();
const fmtsmo6403259 = new VF.Formatter();
//
// voices and notes for stave 0 59
const smo64032v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64032v0ar = [];
const smo63997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo63997.setAttribute('id', 'smo63997');
smo64032v0ar.push(smo63997);
const smo63998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo63998.setAttribute('id', 'smo63998');
smo64032v0ar.push(smo63998);
const smo63999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo63999.setAttribute('id', 'smo63999');
smo64032v0ar.push(smo63999);
const smo64000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64000.setAttribute('id', 'smo64000');
smo64032v0ar.push(smo64000);
const smo64001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo64001.setAttribute('id', 'smo64001');
smo64032v0ar.push(smo64001);
const smo64002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo64002.setAttribute('id', 'smo64002');
smo64032v0ar.push(smo64002);
const smo64003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64003.setAttribute('id', 'smo64003');
smo64032v0ar.push(smo64003);
const smo64004 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo64004.setAttribute('id', 'smo64004');
smo64032v0ar.push(smo64004);
const smo64005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64005.setAttribute('id', 'smo64005');
smo64032v0ar.push(smo64005);
const smo64006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo64006.setAttribute('id', 'smo64006');
smo64032v0ar.push(smo64006);
const smo64007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64007.setAttribute('id', 'smo64007');
smo64032v0ar.push(smo64007);
smo64032v0.addTickables(smo64032v0ar)
fmtsmo6403259.joinVoices([smo64032v0]);
const smo64032v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64032v1ar = [];
const smo64008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo64008.setAttribute('id', 'smo64008');
smo64008.setStyle({ fillStyle: "#115511" });
const smo640080acc = new VF.Accidental('b');
smo64008.addModifier(smo640080acc, 0);
smo64008.addModifier(new VF.Dot(), 0);
smo64032v1ar.push(smo64008);
const smo64009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64009.setAttribute('id', 'smo64009');
smo64009.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64009);
const smo64010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo64010.setAttribute('id', 'smo64010');
smo64010.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64010);
const smo64011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo64011.setAttribute('id', 'smo64011');
smo64011.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64011);
const smo64012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64012.setAttribute('id', 'smo64012');
smo64012.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64012);
const smo64013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64013.setAttribute('id', 'smo64013');
smo64013.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64013);
const smo64014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64014.setAttribute('id', 'smo64014');
smo64014.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64014);
const smo64015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64015.setAttribute('id', 'smo64015');
smo64015.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64015);
const smo64016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64016.setAttribute('id', 'smo64016');
smo64016.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64016);
const smo64017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64017.setAttribute('id', 'smo64017');
smo64017.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64017);
const smo64018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo64018.setAttribute('id', 'smo64018');
smo64018.setStyle({ fillStyle: "#115511" });
smo64032v1ar.push(smo64018);
smo64032v1.addTickables(smo64032v1ar)
fmtsmo6403259.joinVoices([smo64032v1]);
const fmtsmo6905859 = new VF.Formatter();
//
// voices and notes for stave 1 59
const smo69058v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69058v0ar = [];
const smo69030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69030.setAttribute('id', 'smo69030');
smo69058v0ar.push(smo69030);
const smo69031 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69031.setAttribute('id', 'smo69031');
smo69058v0ar.push(smo69031);
const smo69032 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69032.setAttribute('id', 'smo69032');
smo69058v0ar.push(smo69032);
const smo69033 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69033.setAttribute('id', 'smo69033');
smo69058v0ar.push(smo69033);
const smo69034 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69034.setAttribute('id', 'smo69034');
smo69058v0ar.push(smo69034);
const smo69035 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69035.setAttribute('id', 'smo69035');
smo69058v0ar.push(smo69035);
const smo69036 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69036.setAttribute('id', 'smo69036');
smo69058v0ar.push(smo69036);
const smo69037 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69037.setAttribute('id', 'smo69037');
smo69058v0ar.push(smo69037);
const smo69038 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69038.setAttribute('id', 'smo69038');
smo69058v0ar.push(smo69038);
const smo69039 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69039.setAttribute('id', 'smo69039');
smo69058v0ar.push(smo69039);
const smo69040 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69040.setAttribute('id', 'smo69040');
smo69058v0ar.push(smo69040);
const smo69041 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69041.setAttribute('id', 'smo69041');
smo69058v0ar.push(smo69041);
const smo69042 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69042.setAttribute('id', 'smo69042');
const smo690420acc = new VF.Accidental('b');
smo69042.addModifier(smo690420acc, 0);
smo69058v0ar.push(smo69042);
const smo69043 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69043.setAttribute('id', 'smo69043');
smo69058v0ar.push(smo69043);
smo69058v0.addTickables(smo69058v0ar)
fmtsmo6905859.joinVoices([smo69058v0]);
const smo69058v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69058v1ar = [];
const smo69044 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo69044.setAttribute('id', 'smo69044');
smo69044.setStyle({ fillStyle: "#115511" });
smo69058v1ar.push(smo69044);
smo69058v1.addTickables(smo69058v1ar)
fmtsmo6905859.joinVoices([smo69058v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72279 = smo63997.getStemDirection();
smo63997.setStemDirection(dirsmo72279);
smo63998.setStemDirection(dirsmo72279);
const smo72279 = new VF.Beam([smo63997,smo63998]);
const dirsmo72280 = smo64000.getStemDirection();
smo64000.setStemDirection(dirsmo72280);
smo64001.setStemDirection(dirsmo72280);
smo64002.setStemDirection(dirsmo72280);
smo64003.setStemDirection(dirsmo72280);
const smo72280 = new VF.Beam([smo64000,smo64001,smo64002,smo64003]);
const dirsmo72281 = smo64004.getStemDirection();
smo64004.setStemDirection(dirsmo72281);
smo64005.setStemDirection(dirsmo72281);
smo64006.setStemDirection(dirsmo72281);
smo64007.setStemDirection(dirsmo72281);
const smo72281 = new VF.Beam([smo64004,smo64005,smo64006,smo64007]);
const dirsmo72282 = smo64008.getStemDirection();
smo64008.setStemDirection(dirsmo72282);
smo64009.setStemDirection(dirsmo72282);
smo64010.setStemDirection(dirsmo72282);
const smo72282 = new VF.Beam([smo64008,smo64009,smo64010]);
const dirsmo72283 = smo64011.getStemDirection();
smo64011.setStemDirection(dirsmo72283);
smo64012.setStemDirection(dirsmo72283);
const smo72283 = new VF.Beam([smo64011,smo64012]);
const dirsmo72284 = smo64013.getStemDirection();
smo64013.setStemDirection(dirsmo72284);
smo64014.setStemDirection(dirsmo72284);
const smo72284 = new VF.Beam([smo64013,smo64014]);
const dirsmo72285 = smo64015.getStemDirection();
smo64015.setStemDirection(dirsmo72285);
smo64016.setStemDirection(dirsmo72285);
smo64017.setStemDirection(dirsmo72285);
smo64018.setStemDirection(dirsmo72285);
const smo72285 = new VF.Beam([smo64015,smo64016,smo64017,smo64018]);
const dirsmo72288 = smo69030.getStemDirection();
smo69030.setStemDirection(dirsmo72288);
smo69031.setStemDirection(dirsmo72288);
const smo72288 = new VF.Beam([smo69030,smo69031]);
const dirsmo72289 = smo69032.getStemDirection();
smo69032.setStemDirection(dirsmo72289);
smo69033.setStemDirection(dirsmo72289);
smo69034.setStemDirection(dirsmo72289);
smo69035.setStemDirection(dirsmo72289);
const smo72289 = new VF.Beam([smo69032,smo69033,smo69034,smo69035]);
const dirsmo72290 = smo69036.getStemDirection();
smo69036.setStemDirection(dirsmo72290);
smo69037.setStemDirection(dirsmo72290);
smo69038.setStemDirection(dirsmo72290);
smo69039.setStemDirection(dirsmo72290);
const smo72290 = new VF.Beam([smo69036,smo69037,smo69038,smo69039]);
const dirsmo72291 = smo69040.getStemDirection();
smo69040.setStemDirection(dirsmo72291);
smo69041.setStemDirection(dirsmo72291);
smo69042.setStemDirection(dirsmo72291);
smo69043.setStemDirection(dirsmo72291);
const smo72291 = new VF.Beam([smo69040,smo69041,smo69042,smo69043]);
 
// formatting measures in staff group smo60952
fmtsmo6403259.format([smo64032v0,smo64032v1,smo69058v0,smo69058v1], 495);
const stavesmo64032 = new VF.Stave(1300, 1331, 509);
stavesmo64032.setAttribute('id', 'stavesmo64032');
stavesmo64032.setBegBarType(VF.Barline.type.NONE);
stavesmo64032.setContext(context);
stavesmo64032.draw();
smo64032v0.draw(context, stavesmo64032);
smo64032v1.draw(context, stavesmo64032);
smo72279.setContext(context);
smo72279.draw();
smo72280.setContext(context);
smo72280.draw();
smo72281.setContext(context);
smo72281.draw();
smo72282.setContext(context);
smo72282.draw();
smo72283.setContext(context);
smo72283.draw();
smo72284.setContext(context);
smo72284.draw();
smo72285.setContext(context);
smo72285.draw();
const stavesmo69058 = new VF.Stave(1300, 1450, 509);
stavesmo69058.setAttribute('id', 'stavesmo69058');
stavesmo69058.setBegBarType(VF.Barline.type.NONE);
stavesmo69058.setContext(context);
stavesmo69058.draw();
smo69058v0.draw(context, stavesmo69058);
smo69058v1.draw(context, stavesmo69058);
smo72288.setContext(context);
smo72288.draw();
smo72289.setContext(context);
smo72289.draw();
smo72290.setContext(context);
smo72290.draw();
smo72291.setContext(context);
smo72291.draw();
const rightsmo60952stavesmo640321 = new VF.StaveConnector(stavesmo64032, stavesmo69058).setType(0);
rightsmo60952stavesmo640321.setContext(context).draw();
const fmtsmo6406660 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo64066v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64066v0ar = [];
const smo64033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64033.setAttribute('id', 'smo64033');
smo64066v0ar.push(smo64033);
const smo64034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo64034.setAttribute('id', 'smo64034');
smo64066v0ar.push(smo64034);
const smo64035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64035.setAttribute('id', 'smo64035');
smo64066v0ar.push(smo64035);
const smo64036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo64036.setAttribute('id', 'smo64036');
smo64066v0ar.push(smo64036);
const smo64037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo64037.setAttribute('id', 'smo64037');
const smo640370acc = new VF.Accidental('n');
smo64037.addModifier(smo640370acc, 0);
smo64066v0ar.push(smo64037);
const smo64038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64038.setAttribute('id', 'smo64038');
smo64066v0ar.push(smo64038);
const smo64039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64039.setAttribute('id', 'smo64039');
smo64066v0ar.push(smo64039);
const smo64040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo64040.setAttribute('id', 'smo64040');
smo64066v0ar.push(smo64040);
const smo64041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64041.setAttribute('id', 'smo64041');
smo64066v0ar.push(smo64041);
smo64066v0.addTickables(smo64066v0ar)
fmtsmo6406660.joinVoices([smo64066v0]);
const smo64066v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64066v1ar = [];
const smo64042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo64042.setAttribute('id', 'smo64042');
smo64042.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64042);
const smo64043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo64043.setAttribute('id', 'smo64043');
smo64043.setStyle({ fillStyle: "#115511" });
const smo640430acc = new VF.Accidental('b');
smo64043.addModifier(smo640430acc, 0);
smo64066v1ar.push(smo64043);
const smo64044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo64044.setAttribute('id', 'smo64044');
smo64044.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64044);
const smo64045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64045.setAttribute('id', 'smo64045');
smo64045.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64045);
const smo64046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64046.setAttribute('id', 'smo64046');
smo64046.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64046);
const smo64047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64047.setAttribute('id', 'smo64047');
smo64047.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64047);
const smo64048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64048.setAttribute('id', 'smo64048');
smo64048.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64048);
const smo64049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64049.setAttribute('id', 'smo64049');
smo64049.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64049);
const smo64050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64050.setAttribute('id', 'smo64050');
smo64050.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64050);
const smo64051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64051.setAttribute('id', 'smo64051');
smo64051.setStyle({ fillStyle: "#115511" });
smo64051.addModifier(new VF.Dot(), 0);
smo64066v1ar.push(smo64051);
const smo64052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64052.setAttribute('id', 'smo64052');
smo64052.setStyle({ fillStyle: "#115511" });
smo64066v1ar.push(smo64052);
smo64066v1.addTickables(smo64066v1ar)
fmtsmo6406660.joinVoices([smo64066v1]);
const fmtsmo6908260 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo69082v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69082v0ar = [];
const smo69059 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69059.setAttribute('id', 'smo69059');
smo69082v0ar.push(smo69059);
const smo69060 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69060.setAttribute('id', 'smo69060');
smo69082v0ar.push(smo69060);
const smo69061 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69061.setAttribute('id', 'smo69061');
smo69082v0ar.push(smo69061);
const smo69062 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69062.setAttribute('id', 'smo69062');
smo69082v0ar.push(smo69062);
const smo69063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69063.setAttribute('id', 'smo69063');
smo69082v0ar.push(smo69063);
const smo69064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69064.setAttribute('id', 'smo69064');
smo69082v0ar.push(smo69064);
const smo69065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69065.setAttribute('id', 'smo69065');
smo69082v0ar.push(smo69065);
const smo69066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69066.setAttribute('id', 'smo69066');
smo69082v0ar.push(smo69066);
const smo69067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69067.setAttribute('id', 'smo69067');
smo69082v0ar.push(smo69067);
smo69082v0.addTickables(smo69082v0ar)
fmtsmo6908260.joinVoices([smo69082v0]);
const smo69082v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69082v1ar = [];
const smo69068 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo69068.setAttribute('id', 'smo69068');
smo69068.setStyle({ fillStyle: "#115511" });
smo69082v1ar.push(smo69068);
smo69082v1.addTickables(smo69082v1ar)
fmtsmo6908260.joinVoices([smo69082v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72305 = smo64035.getStemDirection();
smo64035.setStemDirection(dirsmo72305);
smo64036.setStemDirection(dirsmo72305);
smo64037.setStemDirection(dirsmo72305);
smo64038.setStemDirection(dirsmo72305);
const smo72305 = new VF.Beam([smo64035,smo64036,smo64037,smo64038]);
const dirsmo72306 = smo64039.getStemDirection();
smo64039.setStemDirection(dirsmo72306);
smo64040.setStemDirection(dirsmo72306);
smo64041.setStemDirection(dirsmo72306);
const smo72306 = new VF.Beam([smo64039,smo64040,smo64041]);
const dirsmo72307 = smo64042.getStemDirection();
smo64042.setStemDirection(dirsmo72307);
smo64043.setStemDirection(dirsmo72307);
smo64044.setStemDirection(dirsmo72307);
smo64045.setStemDirection(dirsmo72307);
const smo72307 = new VF.Beam([smo64042,smo64043,smo64044,smo64045]);
const dirsmo72308 = smo64046.getStemDirection();
smo64046.setStemDirection(dirsmo72308);
smo64047.setStemDirection(dirsmo72308);
smo64048.setStemDirection(dirsmo72308);
smo64049.setStemDirection(dirsmo72308);
const smo72308 = new VF.Beam([smo64046,smo64047,smo64048,smo64049]);
const dirsmo72309 = smo64051.getStemDirection();
smo64051.setStemDirection(dirsmo72309);
smo64052.setStemDirection(dirsmo72309);
const smo72309 = new VF.Beam([smo64051,smo64052]);
const dirsmo72312 = smo69059.getStemDirection();
smo69059.setStemDirection(dirsmo72312);
smo69060.setStemDirection(dirsmo72312);
smo69061.setStemDirection(dirsmo72312);
smo69062.setStemDirection(dirsmo72312);
const smo72312 = new VF.Beam([smo69059,smo69060,smo69061,smo69062]);
const dirsmo72313 = smo69063.getStemDirection();
smo69063.setStemDirection(dirsmo72313);
smo69064.setStemDirection(dirsmo72313);
smo69065.setStemDirection(dirsmo72313);
smo69066.setStemDirection(dirsmo72313);
const smo72313 = new VF.Beam([smo69063,smo69064,smo69065,smo69066]);
 
// formatting measures in staff group smo60952
fmtsmo6406660.format([smo64066v0,smo64066v1,smo69082v0,smo69082v1], 521);
const stavesmo64066 = new VF.Stave(90, 1679, 579);
stavesmo64066.setAttribute('id', 'stavesmo64066');
stavesmo64066.setBegBarType(1);
stavesmo64066.addClef('treble');
stavesmo64066.setContext(context);
stavesmo64066.draw();
smo64066v0.draw(context, stavesmo64066);
smo64066v1.draw(context, stavesmo64066);
smo72305.setContext(context);
smo72305.draw();
smo72306.setContext(context);
smo72306.draw();
smo72307.setContext(context);
smo72307.draw();
smo72308.setContext(context);
smo72308.draw();
smo72309.setContext(context);
smo72309.draw();
const stavesmo69082 = new VF.Stave(90, 1808, 579);
stavesmo69082.setAttribute('id', 'stavesmo69082');
stavesmo69082.setBegBarType(1);
stavesmo69082.addClef('bass');
stavesmo69082.setContext(context);
stavesmo69082.draw();
smo69082v0.draw(context, stavesmo69082);
smo69082v1.draw(context, stavesmo69082);
smo72312.setContext(context);
smo72312.draw();
smo72313.setContext(context);
smo72313.draw();
const leftsmo60952stavesmo640661 = new VF.StaveConnector(stavesmo64066, stavesmo69082).setType(3);
leftsmo60952stavesmo640661.setContext(context).draw();
const fmtsmo6409561 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo64095v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64095v0ar = [];
const smo64067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64067.setAttribute('id', 'smo64067');
smo64095v0ar.push(smo64067);
const smo64068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64068.setAttribute('id', 'smo64068');
smo64095v0ar.push(smo64068);
const smo64069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64069.setAttribute('id', 'smo64069');
smo64095v0ar.push(smo64069);
const smo64070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo64070.setAttribute('id', 'smo64070');
smo64095v0ar.push(smo64070);
const smo64071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64071.setAttribute('id', 'smo64071');
smo64095v0ar.push(smo64071);
const smo64072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo64072.setAttribute('id', 'smo64072');
smo64095v0ar.push(smo64072);
const smo64073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo64073.setAttribute('id', 'smo64073');
smo64073.addModifier(new VF.Dot(), 0);
smo64095v0ar.push(smo64073);
const smo64074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo64074.setAttribute('id', 'smo64074');
smo64095v0ar.push(smo64074);
const smo64075 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/6/n"]}'))
smo64075.setAttribute('id', 'smo64075');
const  smo74205 = new VF.Articulation('a@a').setPosition(3);
smo64075.addModifier(smo74205, 0);
smo64095v0ar.push(smo64075);
smo64095v0.addTickables(smo64095v0ar)
fmtsmo6409561.joinVoices([smo64095v0]);
const smo64095v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64095v1ar = [];
const smo64077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo64077.setAttribute('id', 'smo64077');
smo64077.setStyle({ fillStyle: "#115511" });
smo64095v1ar.push(smo64077);
const smo64078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo64078.setAttribute('id', 'smo64078');
smo64078.setStyle({ fillStyle: "#115511" });
smo64095v1ar.push(smo64078);
const smo64079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo64079.setAttribute('id', 'smo64079');
smo64079.setStyle({ fillStyle: "#115511" });
smo64095v1ar.push(smo64079);
const smo64080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64080.setAttribute('id', 'smo64080');
smo64080.setStyle({ fillStyle: "#115511" });
smo64095v1ar.push(smo64080);
const smo64081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n","gn/5/n"]}'))
smo64081.setAttribute('id', 'smo64081');
smo64081.setStyle({ fillStyle: "#115511" });
smo64095v1ar.push(smo64081);
smo64095v1.addTickables(smo64095v1ar)
fmtsmo6409561.joinVoices([smo64095v1]);
const fmtsmo6909861 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo69098v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69098v0ar = [];
const smo69083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo69083.setAttribute('id', 'smo69083');
smo69098v0ar.push(smo69083);
smo69098v0.addTickables(smo69098v0ar)
fmtsmo6909861.joinVoices([smo69098v0]);
const smo69098v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69098v1ar = [];
const smo69084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo69084.setAttribute('id', 'smo69084');
smo69084.setStyle({ fillStyle: "#115511" });
smo69098v1ar.push(smo69084);
smo69098v1.addTickables(smo69098v1ar)
fmtsmo6909861.joinVoices([smo69098v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72316 = smo64067.getStemDirection();
smo64067.setStemDirection(dirsmo72316);
smo64068.setStemDirection(dirsmo72316);
smo64069.setStemDirection(dirsmo72316);
smo64070.setStemDirection(dirsmo72316);
smo64071.setStemDirection(dirsmo72316);
smo64072.setStemDirection(dirsmo72316);
const smo72316 = new VF.Beam([smo64067,smo64068,smo64069,smo64070,smo64071,smo64072]);
const dirsmo72317 = smo64073.getStemDirection();
smo64073.setStemDirection(dirsmo72317);
smo64074.setStemDirection(dirsmo72317);
const smo72317 = new VF.Beam([smo64073,smo64074]);
const dirsmo72318 = smo64079.getStemDirection();
smo64079.setStemDirection(dirsmo72318);
smo64080.setStemDirection(dirsmo72318);
const smo72318 = new VF.Beam([smo64079,smo64080]);
 
// formatting measures in staff group smo60952
fmtsmo6409561.format([smo64095v0,smo64095v1,smo69098v0,smo69098v1], 329);
const stavesmo64095 = new VF.Stave(669, 1679, 351);
stavesmo64095.setAttribute('id', 'stavesmo64095');
stavesmo64095.setBegBarType(VF.Barline.type.NONE);
stavesmo64095.setEndBarType(3);
stavesmo64095.setContext(context);
stavesmo64095.draw();
smo64095v0.draw(context, stavesmo64095);
smo64095v1.draw(context, stavesmo64095);
smo72316.setContext(context);
smo72316.draw();
smo72317.setContext(context);
smo72317.draw();
smo72318.setContext(context);
smo72318.draw();
const stavesmo69098 = new VF.Stave(669, 1808, 351);
stavesmo69098.setAttribute('id', 'stavesmo69098');
stavesmo69098.setBegBarType(VF.Barline.type.NONE);
stavesmo69098.setEndBarType(3);
stavesmo69098.setContext(context);
stavesmo69098.draw();
smo69098v0.draw(context, stavesmo69098);
smo69098v1.draw(context, stavesmo69098);
const fmtsmo6412562 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo64125v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64125v0ar = [];
const smo64096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64096.setAttribute('id', 'smo64096');
smo64125v0ar.push(smo64096);
const smo64097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64097.setAttribute('id', 'smo64097');
smo64125v0ar.push(smo64097);
const smo64098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64098.setAttribute('id', 'smo64098');
smo64125v0ar.push(smo64098);
const smo64099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64099.setAttribute('id', 'smo64099');
smo64125v0ar.push(smo64099);
const smo64100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64100.setAttribute('id', 'smo64100');
smo64125v0ar.push(smo64100);
const smo64101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64101.setAttribute('id', 'smo64101');
smo64125v0ar.push(smo64101);
const smo64102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64102.setAttribute('id', 'smo64102');
smo64125v0ar.push(smo64102);
const smo64103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64103.setAttribute('id', 'smo64103');
smo64125v0ar.push(smo64103);
const smo64104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64104.setAttribute('id', 'smo64104');
smo64125v0ar.push(smo64104);
const smo64105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64105.setAttribute('id', 'smo64105');
smo64125v0ar.push(smo64105);
const smo64106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64106.setAttribute('id', 'smo64106');
smo64125v0ar.push(smo64106);
const smo64107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64107.setAttribute('id', 'smo64107');
smo64125v0ar.push(smo64107);
const smo64108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64108.setAttribute('id', 'smo64108');
smo64125v0ar.push(smo64108);
const smo64109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64109.setAttribute('id', 'smo64109');
smo64125v0ar.push(smo64109);
const smo64110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64110.setAttribute('id', 'smo64110');
smo64125v0ar.push(smo64110);
const smo64111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64111.setAttribute('id', 'smo64111');
smo64125v0ar.push(smo64111);
smo64125v0.addTickables(smo64125v0ar)
fmtsmo6412562.joinVoices([smo64125v0]);
const fmtsmo6912862 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo69128v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69128v0ar = [];
const smo69099 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69099.setAttribute('id', 'smo69099');
smo69128v0ar.push(smo69099);
const smo69100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69100.setAttribute('id', 'smo69100');
smo69128v0ar.push(smo69100);
const smo69101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69101.setAttribute('id', 'smo69101');
smo69128v0ar.push(smo69101);
const smo69102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69102.setAttribute('id', 'smo69102');
smo69128v0ar.push(smo69102);
const smo69103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69103.setAttribute('id', 'smo69103');
smo69128v0ar.push(smo69103);
const smo69104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69104.setAttribute('id', 'smo69104');
smo69128v0ar.push(smo69104);
const smo69105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69105.setAttribute('id', 'smo69105');
smo69128v0ar.push(smo69105);
const smo69106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69106.setAttribute('id', 'smo69106');
smo69128v0ar.push(smo69106);
const smo69107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69107.setAttribute('id', 'smo69107');
smo69128v0ar.push(smo69107);
const smo69108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69108.setAttribute('id', 'smo69108');
smo69128v0ar.push(smo69108);
const smo69109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69109.setAttribute('id', 'smo69109');
smo69128v0ar.push(smo69109);
const smo69110 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69110.setAttribute('id', 'smo69110');
smo69128v0ar.push(smo69110);
const smo69111 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69111.setAttribute('id', 'smo69111');
smo69128v0ar.push(smo69111);
const smo69112 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69112.setAttribute('id', 'smo69112');
smo69128v0ar.push(smo69112);
const smo69113 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69113.setAttribute('id', 'smo69113');
smo69128v0ar.push(smo69113);
const smo69114 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69114.setAttribute('id', 'smo69114');
smo69128v0ar.push(smo69114);
smo69128v0.addTickables(smo69128v0ar)
fmtsmo6912862.joinVoices([smo69128v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72321 = smo64096.getStemDirection();
smo64096.setStemDirection(dirsmo72321);
smo64097.setStemDirection(dirsmo72321);
smo64098.setStemDirection(dirsmo72321);
smo64099.setStemDirection(dirsmo72321);
const smo72321 = new VF.Beam([smo64096,smo64097,smo64098,smo64099]);
const dirsmo72322 = smo64100.getStemDirection();
smo64100.setStemDirection(dirsmo72322);
smo64101.setStemDirection(dirsmo72322);
smo64102.setStemDirection(dirsmo72322);
smo64103.setStemDirection(dirsmo72322);
const smo72322 = new VF.Beam([smo64100,smo64101,smo64102,smo64103]);
const dirsmo72323 = smo64104.getStemDirection();
smo64104.setStemDirection(dirsmo72323);
smo64105.setStemDirection(dirsmo72323);
smo64106.setStemDirection(dirsmo72323);
smo64107.setStemDirection(dirsmo72323);
const smo72323 = new VF.Beam([smo64104,smo64105,smo64106,smo64107]);
const dirsmo72324 = smo64108.getStemDirection();
smo64108.setStemDirection(dirsmo72324);
smo64109.setStemDirection(dirsmo72324);
smo64110.setStemDirection(dirsmo72324);
smo64111.setStemDirection(dirsmo72324);
const smo72324 = new VF.Beam([smo64108,smo64109,smo64110,smo64111]);
const dirsmo72327 = smo69099.getStemDirection();
smo69099.setStemDirection(dirsmo72327);
smo69100.setStemDirection(dirsmo72327);
smo69101.setStemDirection(dirsmo72327);
smo69102.setStemDirection(dirsmo72327);
const smo72327 = new VF.Beam([smo69099,smo69100,smo69101,smo69102]);
const dirsmo72328 = smo69103.getStemDirection();
smo69103.setStemDirection(dirsmo72328);
smo69104.setStemDirection(dirsmo72328);
smo69105.setStemDirection(dirsmo72328);
smo69106.setStemDirection(dirsmo72328);
const smo72328 = new VF.Beam([smo69103,smo69104,smo69105,smo69106]);
const dirsmo72329 = smo69107.getStemDirection();
smo69107.setStemDirection(dirsmo72329);
smo69108.setStemDirection(dirsmo72329);
smo69109.setStemDirection(dirsmo72329);
smo69110.setStemDirection(dirsmo72329);
const smo72329 = new VF.Beam([smo69107,smo69108,smo69109,smo69110]);
const dirsmo72330 = smo69111.getStemDirection();
smo69111.setStemDirection(dirsmo72330);
smo69112.setStemDirection(dirsmo72330);
smo69113.setStemDirection(dirsmo72330);
smo69114.setStemDirection(dirsmo72330);
const smo72330 = new VF.Beam([smo69111,smo69112,smo69113,smo69114]);
 
// formatting measures in staff group smo60952
fmtsmo6412562.format([smo64125v0,smo69128v0], 335);
const stavesmo64125 = new VF.Stave(1020, 1679, 394);
stavesmo64125.setAttribute('id', 'stavesmo64125');
stavesmo64125.setBegBarType(VF.Barline.type.NONE);
stavesmo64125.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":144,"name":"Allegro Vivace"}'), -1 * 6);
const keysmo64125 = new VF.KeySignature('Eb');
keysmo64125.cancelKey('C');
keysmo64125.addToStave(stavesmo64125);
stavesmo64125.setContext(context);
stavesmo64125.draw();
smo64125v0.draw(context, stavesmo64125);
smo72321.setContext(context);
smo72321.draw();
smo72322.setContext(context);
smo72322.draw();
smo72323.setContext(context);
smo72323.draw();
smo72324.setContext(context);
smo72324.draw();
const stavesmo69128 = new VF.Stave(1020, 1808, 394);
stavesmo69128.setAttribute('id', 'stavesmo69128');
stavesmo69128.setBegBarType(VF.Barline.type.NONE);
const keysmo69128 = new VF.KeySignature('Eb');
keysmo69128.cancelKey('C');
keysmo69128.addToStave(stavesmo69128);
stavesmo69128.setContext(context);
stavesmo69128.draw();
smo69128v0.draw(context, stavesmo69128);
smo72327.setContext(context);
smo72327.draw();
smo72328.setContext(context);
smo72328.draw();
smo72329.setContext(context);
smo72329.draw();
smo72330.setContext(context);
smo72330.draw();
const fmtsmo6415563 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo64155v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64155v0ar = [];
const smo64126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64126.setAttribute('id', 'smo64126');
smo64155v0ar.push(smo64126);
const smo64127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64127.setAttribute('id', 'smo64127');
smo64155v0ar.push(smo64127);
const smo64128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64128.setAttribute('id', 'smo64128');
const smo641280acc = new VF.Accidental('n');
smo64128.addModifier(smo641280acc, 0);
smo64155v0ar.push(smo64128);
const smo64129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64129.setAttribute('id', 'smo64129');
smo64155v0ar.push(smo64129);
const smo64130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64130.setAttribute('id', 'smo64130');
smo64155v0ar.push(smo64130);
const smo64131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64131.setAttribute('id', 'smo64131');
smo64155v0ar.push(smo64131);
const smo64132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64132.setAttribute('id', 'smo64132');
smo64155v0ar.push(smo64132);
const smo64133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64133.setAttribute('id', 'smo64133');
smo64155v0ar.push(smo64133);
const smo64134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64134.setAttribute('id', 'smo64134');
smo64155v0ar.push(smo64134);
const smo64135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64135.setAttribute('id', 'smo64135');
smo64155v0ar.push(smo64135);
const smo64136 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64136.setAttribute('id', 'smo64136');
smo64155v0ar.push(smo64136);
const smo64137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64137.setAttribute('id', 'smo64137');
smo64155v0ar.push(smo64137);
const smo64138 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64138.setAttribute('id', 'smo64138');
smo64155v0ar.push(smo64138);
const smo64139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64139.setAttribute('id', 'smo64139');
smo64155v0ar.push(smo64139);
const smo64140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64140.setAttribute('id', 'smo64140');
smo64155v0ar.push(smo64140);
const smo64141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64141.setAttribute('id', 'smo64141');
smo64155v0ar.push(smo64141);
smo64155v0.addTickables(smo64155v0ar)
fmtsmo6415563.joinVoices([smo64155v0]);
const fmtsmo6915863 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo69158v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69158v0ar = [];
const smo69129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69129.setAttribute('id', 'smo69129');
smo69158v0ar.push(smo69129);
const smo69130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69130.setAttribute('id', 'smo69130');
smo69158v0ar.push(smo69130);
const smo69131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69131.setAttribute('id', 'smo69131');
smo69158v0ar.push(smo69131);
const smo69132 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69132.setAttribute('id', 'smo69132');
smo69158v0ar.push(smo69132);
const smo69133 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69133.setAttribute('id', 'smo69133');
smo69158v0ar.push(smo69133);
const smo69134 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69134.setAttribute('id', 'smo69134');
smo69158v0ar.push(smo69134);
const smo69135 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69135.setAttribute('id', 'smo69135');
smo69158v0ar.push(smo69135);
const smo69136 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69136.setAttribute('id', 'smo69136');
smo69158v0ar.push(smo69136);
const smo69137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69137.setAttribute('id', 'smo69137');
smo69158v0ar.push(smo69137);
const smo69138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69138.setAttribute('id', 'smo69138');
smo69158v0ar.push(smo69138);
const smo69139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69139.setAttribute('id', 'smo69139');
smo69158v0ar.push(smo69139);
const smo69140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69140.setAttribute('id', 'smo69140');
smo69158v0ar.push(smo69140);
const smo69141 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69141.setAttribute('id', 'smo69141');
smo69158v0ar.push(smo69141);
const smo69142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69142.setAttribute('id', 'smo69142');
smo69158v0ar.push(smo69142);
const smo69143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69143.setAttribute('id', 'smo69143');
smo69158v0ar.push(smo69143);
const smo69144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69144.setAttribute('id', 'smo69144');
smo69158v0ar.push(smo69144);
smo69158v0.addTickables(smo69158v0ar)
fmtsmo6915863.joinVoices([smo69158v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72333 = smo64126.getStemDirection();
smo64126.setStemDirection(dirsmo72333);
smo64127.setStemDirection(dirsmo72333);
smo64128.setStemDirection(dirsmo72333);
smo64129.setStemDirection(dirsmo72333);
const smo72333 = new VF.Beam([smo64126,smo64127,smo64128,smo64129]);
const dirsmo72334 = smo64130.getStemDirection();
smo64130.setStemDirection(dirsmo72334);
smo64131.setStemDirection(dirsmo72334);
smo64132.setStemDirection(dirsmo72334);
smo64133.setStemDirection(dirsmo72334);
const smo72334 = new VF.Beam([smo64130,smo64131,smo64132,smo64133]);
const dirsmo72335 = smo64134.getStemDirection();
smo64134.setStemDirection(dirsmo72335);
smo64135.setStemDirection(dirsmo72335);
smo64136.setStemDirection(dirsmo72335);
smo64137.setStemDirection(dirsmo72335);
const smo72335 = new VF.Beam([smo64134,smo64135,smo64136,smo64137]);
const dirsmo72336 = smo64138.getStemDirection();
smo64138.setStemDirection(dirsmo72336);
smo64139.setStemDirection(dirsmo72336);
smo64140.setStemDirection(dirsmo72336);
smo64141.setStemDirection(dirsmo72336);
const smo72336 = new VF.Beam([smo64138,smo64139,smo64140,smo64141]);
const dirsmo72339 = smo69129.getStemDirection();
smo69129.setStemDirection(dirsmo72339);
smo69130.setStemDirection(dirsmo72339);
smo69131.setStemDirection(dirsmo72339);
smo69132.setStemDirection(dirsmo72339);
const smo72339 = new VF.Beam([smo69129,smo69130,smo69131,smo69132]);
const dirsmo72340 = smo69133.getStemDirection();
smo69133.setStemDirection(dirsmo72340);
smo69134.setStemDirection(dirsmo72340);
smo69135.setStemDirection(dirsmo72340);
smo69136.setStemDirection(dirsmo72340);
const smo72340 = new VF.Beam([smo69133,smo69134,smo69135,smo69136]);
const dirsmo72341 = smo69137.getStemDirection();
smo69137.setStemDirection(dirsmo72341);
smo69138.setStemDirection(dirsmo72341);
smo69139.setStemDirection(dirsmo72341);
smo69140.setStemDirection(dirsmo72341);
const smo72341 = new VF.Beam([smo69137,smo69138,smo69139,smo69140]);
const dirsmo72342 = smo69141.getStemDirection();
smo69141.setStemDirection(dirsmo72342);
smo69142.setStemDirection(dirsmo72342);
smo69143.setStemDirection(dirsmo72342);
smo69144.setStemDirection(dirsmo72342);
const smo72342 = new VF.Beam([smo69141,smo69142,smo69143,smo69144]);
 
// formatting measures in staff group smo60952
fmtsmo6415563.format([smo64155v0,smo69158v0], 379);
const stavesmo64155 = new VF.Stave(1414, 1679, 393);
stavesmo64155.setAttribute('id', 'stavesmo64155');
stavesmo64155.setBegBarType(VF.Barline.type.NONE);
stavesmo64155.setContext(context);
stavesmo64155.draw();
smo64155v0.draw(context, stavesmo64155);
smo72333.setContext(context);
smo72333.draw();
smo72334.setContext(context);
smo72334.draw();
smo72335.setContext(context);
smo72335.draw();
smo72336.setContext(context);
smo72336.draw();
const stavesmo69158 = new VF.Stave(1414, 1808, 393);
stavesmo69158.setAttribute('id', 'stavesmo69158');
stavesmo69158.setBegBarType(VF.Barline.type.NONE);
stavesmo69158.setContext(context);
stavesmo69158.draw();
smo69158v0.draw(context, stavesmo69158);
smo72339.setContext(context);
smo72339.draw();
smo72340.setContext(context);
smo72340.draw();
smo72341.setContext(context);
smo72341.draw();
smo72342.setContext(context);
smo72342.draw();
const rightsmo60952stavesmo641551 = new VF.StaveConnector(stavesmo64155, stavesmo69158).setType(0);
rightsmo60952stavesmo641551.setContext(context).draw();
const fmtsmo6418564 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo64185v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64185v0ar = [];
const smo64156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo64156.setAttribute('id', 'smo64156');
const smo641560acc = new VF.Accidental('n');
smo64156.addModifier(smo641560acc, 0);
smo64185v0ar.push(smo64156);
const smo64157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64157.setAttribute('id', 'smo64157');
smo64185v0ar.push(smo64157);
const smo64158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64158.setAttribute('id', 'smo64158');
smo64185v0ar.push(smo64158);
const smo64159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64159.setAttribute('id', 'smo64159');
smo64185v0ar.push(smo64159);
const smo64160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64160.setAttribute('id', 'smo64160');
smo64185v0ar.push(smo64160);
const smo64161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64161.setAttribute('id', 'smo64161');
smo64185v0ar.push(smo64161);
const smo64162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64162.setAttribute('id', 'smo64162');
smo64185v0ar.push(smo64162);
const smo64163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64163.setAttribute('id', 'smo64163');
smo64185v0ar.push(smo64163);
const smo64164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo64164.setAttribute('id', 'smo64164');
smo64185v0ar.push(smo64164);
const smo64165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64165.setAttribute('id', 'smo64165');
smo64185v0ar.push(smo64165);
const smo64166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64166.setAttribute('id', 'smo64166');
smo64185v0ar.push(smo64166);
const smo64167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64167.setAttribute('id', 'smo64167');
smo64185v0ar.push(smo64167);
const smo64168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64168.setAttribute('id', 'smo64168');
smo64185v0ar.push(smo64168);
const smo64169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64169.setAttribute('id', 'smo64169');
smo64185v0ar.push(smo64169);
const smo64170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64170.setAttribute('id', 'smo64170');
smo64185v0ar.push(smo64170);
const smo64171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64171.setAttribute('id', 'smo64171');
smo64185v0ar.push(smo64171);
smo64185v0.addTickables(smo64185v0ar)
fmtsmo6418564.joinVoices([smo64185v0]);
const fmtsmo6918864 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo69188v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69188v0ar = [];
const smo69159 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69159.setAttribute('id', 'smo69159');
smo69188v0ar.push(smo69159);
const smo69160 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69160.setAttribute('id', 'smo69160');
smo69188v0ar.push(smo69160);
const smo69161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69161.setAttribute('id', 'smo69161');
smo69188v0ar.push(smo69161);
const smo69162 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69162.setAttribute('id', 'smo69162');
smo69188v0ar.push(smo69162);
const smo69163 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69163.setAttribute('id', 'smo69163');
smo69188v0ar.push(smo69163);
const smo69164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69164.setAttribute('id', 'smo69164');
smo69188v0ar.push(smo69164);
const smo69165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69165.setAttribute('id', 'smo69165');
smo69188v0ar.push(smo69165);
const smo69166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69166.setAttribute('id', 'smo69166');
smo69188v0ar.push(smo69166);
const smo69167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69167.setAttribute('id', 'smo69167');
smo69188v0ar.push(smo69167);
const smo69168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69168.setAttribute('id', 'smo69168');
smo69188v0ar.push(smo69168);
const smo69169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69169.setAttribute('id', 'smo69169');
smo69188v0ar.push(smo69169);
const smo69170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69170.setAttribute('id', 'smo69170');
smo69188v0ar.push(smo69170);
const smo69171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69171.setAttribute('id', 'smo69171');
smo69188v0ar.push(smo69171);
const smo69172 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69172.setAttribute('id', 'smo69172');
smo69188v0ar.push(smo69172);
const smo69173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69173.setAttribute('id', 'smo69173');
smo69188v0ar.push(smo69173);
const smo69174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69174.setAttribute('id', 'smo69174');
smo69188v0ar.push(smo69174);
smo69188v0.addTickables(smo69188v0ar)
fmtsmo6918864.joinVoices([smo69188v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72357 = smo64156.getStemDirection();
smo64156.setStemDirection(dirsmo72357);
smo64157.setStemDirection(dirsmo72357);
smo64158.setStemDirection(dirsmo72357);
smo64159.setStemDirection(dirsmo72357);
const smo72357 = new VF.Beam([smo64156,smo64157,smo64158,smo64159]);
const dirsmo72358 = smo64160.getStemDirection();
smo64160.setStemDirection(dirsmo72358);
smo64161.setStemDirection(dirsmo72358);
smo64162.setStemDirection(dirsmo72358);
smo64163.setStemDirection(dirsmo72358);
const smo72358 = new VF.Beam([smo64160,smo64161,smo64162,smo64163]);
const dirsmo72359 = smo64164.getStemDirection();
smo64164.setStemDirection(dirsmo72359);
smo64165.setStemDirection(dirsmo72359);
smo64166.setStemDirection(dirsmo72359);
smo64167.setStemDirection(dirsmo72359);
const smo72359 = new VF.Beam([smo64164,smo64165,smo64166,smo64167]);
const dirsmo72360 = smo64168.getStemDirection();
smo64168.setStemDirection(dirsmo72360);
smo64169.setStemDirection(dirsmo72360);
smo64170.setStemDirection(dirsmo72360);
smo64171.setStemDirection(dirsmo72360);
const smo72360 = new VF.Beam([smo64168,smo64169,smo64170,smo64171]);
const dirsmo72363 = smo69159.getStemDirection();
smo69159.setStemDirection(dirsmo72363);
smo69160.setStemDirection(dirsmo72363);
smo69161.setStemDirection(dirsmo72363);
smo69162.setStemDirection(dirsmo72363);
const smo72363 = new VF.Beam([smo69159,smo69160,smo69161,smo69162]);
const dirsmo72364 = smo69163.getStemDirection();
smo69163.setStemDirection(dirsmo72364);
smo69164.setStemDirection(dirsmo72364);
smo69165.setStemDirection(dirsmo72364);
smo69166.setStemDirection(dirsmo72364);
const smo72364 = new VF.Beam([smo69163,smo69164,smo69165,smo69166]);
const dirsmo72365 = smo69167.getStemDirection();
smo69167.setStemDirection(dirsmo72365);
smo69168.setStemDirection(dirsmo72365);
smo69169.setStemDirection(dirsmo72365);
smo69170.setStemDirection(dirsmo72365);
const smo72365 = new VF.Beam([smo69167,smo69168,smo69169,smo69170]);
const dirsmo72366 = smo69171.getStemDirection();
smo69171.setStemDirection(dirsmo72366);
smo69172.setStemDirection(dirsmo72366);
smo69173.setStemDirection(dirsmo72366);
smo69174.setStemDirection(dirsmo72366);
const smo72366 = new VF.Beam([smo69171,smo69172,smo69173,smo69174]);
 
// formatting measures in staff group smo60952
fmtsmo6418564.format([smo64185v0,smo69188v0], 370);
const stavesmo64185 = new VF.Stave(90, 1962, 467);
stavesmo64185.setAttribute('id', 'stavesmo64185');
stavesmo64185.setBegBarType(1);
stavesmo64185.addClef('treble');
const keysmo64185 = new VF.KeySignature('Eb');
keysmo64185.addToStave(stavesmo64185);
stavesmo64185.setContext(context);
stavesmo64185.draw();
smo64185v0.draw(context, stavesmo64185);
smo72357.setContext(context);
smo72357.draw();
smo72358.setContext(context);
smo72358.draw();
smo72359.setContext(context);
smo72359.draw();
smo72360.setContext(context);
smo72360.draw();
const stavesmo69188 = new VF.Stave(90, 2051, 467);
stavesmo69188.setAttribute('id', 'stavesmo69188');
stavesmo69188.setBegBarType(1);
stavesmo69188.addClef('bass');
const keysmo69188 = new VF.KeySignature('Eb');
keysmo69188.addToStave(stavesmo69188);
stavesmo69188.setContext(context);
stavesmo69188.draw();
smo69188v0.draw(context, stavesmo69188);
smo72363.setContext(context);
smo72363.draw();
smo72364.setContext(context);
smo72364.draw();
smo72365.setContext(context);
smo72365.draw();
smo72366.setContext(context);
smo72366.draw();
const leftsmo60952stavesmo641851 = new VF.StaveConnector(stavesmo64185, stavesmo69188).setType(3);
leftsmo60952stavesmo641851.setContext(context).draw();
const fmtsmo6421565 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo64215v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64215v0ar = [];
const smo64186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64186.setAttribute('id', 'smo64186');
smo64215v0ar.push(smo64186);
const smo64187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64187.setAttribute('id', 'smo64187');
smo64215v0ar.push(smo64187);
const smo64188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64188.setAttribute('id', 'smo64188');
smo64215v0ar.push(smo64188);
const smo64189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64189.setAttribute('id', 'smo64189');
smo64215v0ar.push(smo64189);
const smo64190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64190.setAttribute('id', 'smo64190');
smo64215v0ar.push(smo64190);
const smo64191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64191.setAttribute('id', 'smo64191');
smo64215v0ar.push(smo64191);
const smo64192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64192.setAttribute('id', 'smo64192');
smo64215v0ar.push(smo64192);
const smo64193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64193.setAttribute('id', 'smo64193');
smo64215v0ar.push(smo64193);
const smo64194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64194.setAttribute('id', 'smo64194');
smo64215v0ar.push(smo64194);
const smo64195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64195.setAttribute('id', 'smo64195');
smo64215v0ar.push(smo64195);
const smo64196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64196.setAttribute('id', 'smo64196');
smo64215v0ar.push(smo64196);
const smo64197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64197.setAttribute('id', 'smo64197');
smo64215v0ar.push(smo64197);
const smo64198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64198.setAttribute('id', 'smo64198');
smo64215v0ar.push(smo64198);
const smo64199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64199.setAttribute('id', 'smo64199');
smo64215v0ar.push(smo64199);
const smo64200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64200.setAttribute('id', 'smo64200');
smo64215v0ar.push(smo64200);
const smo64201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64201.setAttribute('id', 'smo64201');
smo64215v0ar.push(smo64201);
smo64215v0.addTickables(smo64215v0ar)
fmtsmo6421565.joinVoices([smo64215v0]);
const fmtsmo6921865 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo69218v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69218v0ar = [];
const smo69189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69189.setAttribute('id', 'smo69189');
smo69218v0ar.push(smo69189);
const smo69190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69190.setAttribute('id', 'smo69190');
smo69218v0ar.push(smo69190);
const smo69191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69191.setAttribute('id', 'smo69191');
smo69218v0ar.push(smo69191);
const smo69192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69192.setAttribute('id', 'smo69192');
smo69218v0ar.push(smo69192);
const smo69193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69193.setAttribute('id', 'smo69193');
smo69218v0ar.push(smo69193);
const smo69194 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69194.setAttribute('id', 'smo69194');
smo69218v0ar.push(smo69194);
const smo69195 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69195.setAttribute('id', 'smo69195');
smo69218v0ar.push(smo69195);
const smo69196 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69196.setAttribute('id', 'smo69196');
smo69218v0ar.push(smo69196);
const smo69197 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69197.setAttribute('id', 'smo69197');
smo69218v0ar.push(smo69197);
const smo69198 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69198.setAttribute('id', 'smo69198');
smo69218v0ar.push(smo69198);
const smo69199 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69199.setAttribute('id', 'smo69199');
smo69218v0ar.push(smo69199);
const smo69200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69200.setAttribute('id', 'smo69200');
smo69218v0ar.push(smo69200);
const smo69201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69201.setAttribute('id', 'smo69201');
smo69218v0ar.push(smo69201);
const smo69202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69202.setAttribute('id', 'smo69202');
smo69218v0ar.push(smo69202);
const smo69203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69203.setAttribute('id', 'smo69203');
smo69218v0ar.push(smo69203);
const smo69204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["eb/3/n"]}'))
smo69204.setAttribute('id', 'smo69204');
smo69218v0ar.push(smo69204);
smo69218v0.addTickables(smo69218v0ar)
fmtsmo6921865.joinVoices([smo69218v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72369 = smo64186.getStemDirection();
smo64186.setStemDirection(dirsmo72369);
smo64187.setStemDirection(dirsmo72369);
smo64188.setStemDirection(dirsmo72369);
smo64189.setStemDirection(dirsmo72369);
const smo72369 = new VF.Beam([smo64186,smo64187,smo64188,smo64189]);
const dirsmo72370 = smo64190.getStemDirection();
smo64190.setStemDirection(dirsmo72370);
smo64191.setStemDirection(dirsmo72370);
smo64192.setStemDirection(dirsmo72370);
smo64193.setStemDirection(dirsmo72370);
const smo72370 = new VF.Beam([smo64190,smo64191,smo64192,smo64193]);
const dirsmo72371 = smo64194.getStemDirection();
smo64194.setStemDirection(dirsmo72371);
smo64195.setStemDirection(dirsmo72371);
smo64196.setStemDirection(dirsmo72371);
smo64197.setStemDirection(dirsmo72371);
const smo72371 = new VF.Beam([smo64194,smo64195,smo64196,smo64197]);
const dirsmo72372 = smo64198.getStemDirection();
smo64198.setStemDirection(dirsmo72372);
smo64199.setStemDirection(dirsmo72372);
smo64200.setStemDirection(dirsmo72372);
smo64201.setStemDirection(dirsmo72372);
const smo72372 = new VF.Beam([smo64198,smo64199,smo64200,smo64201]);
const dirsmo72375 = smo69189.getStemDirection();
smo69189.setStemDirection(dirsmo72375);
smo69190.setStemDirection(dirsmo72375);
smo69191.setStemDirection(dirsmo72375);
smo69192.setStemDirection(dirsmo72375);
const smo72375 = new VF.Beam([smo69189,smo69190,smo69191,smo69192]);
const dirsmo72376 = smo69193.getStemDirection();
smo69193.setStemDirection(dirsmo72376);
smo69194.setStemDirection(dirsmo72376);
smo69195.setStemDirection(dirsmo72376);
smo69196.setStemDirection(dirsmo72376);
const smo72376 = new VF.Beam([smo69193,smo69194,smo69195,smo69196]);
const dirsmo72377 = smo69197.getStemDirection();
smo69197.setStemDirection(dirsmo72377);
smo69198.setStemDirection(dirsmo72377);
smo69199.setStemDirection(dirsmo72377);
smo69200.setStemDirection(dirsmo72377);
const smo72377 = new VF.Beam([smo69197,smo69198,smo69199,smo69200]);
const dirsmo72378 = smo69201.getStemDirection();
smo69201.setStemDirection(dirsmo72378);
smo69202.setStemDirection(dirsmo72378);
smo69203.setStemDirection(dirsmo72378);
smo69204.setStemDirection(dirsmo72378);
const smo72378 = new VF.Beam([smo69201,smo69202,smo69203,smo69204]);
 
// formatting measures in staff group smo60952
fmtsmo6421565.format([smo64215v0,smo69218v0], 345);
const stavesmo64215 = new VF.Stave(557, 1962, 359);
stavesmo64215.setAttribute('id', 'stavesmo64215');
stavesmo64215.setBegBarType(VF.Barline.type.NONE);
stavesmo64215.setContext(context);
stavesmo64215.draw();
smo64215v0.draw(context, stavesmo64215);
smo72369.setContext(context);
smo72369.draw();
smo72370.setContext(context);
smo72370.draw();
smo72371.setContext(context);
smo72371.draw();
smo72372.setContext(context);
smo72372.draw();
const stavesmo69218 = new VF.Stave(557, 2051, 359);
stavesmo69218.setAttribute('id', 'stavesmo69218');
stavesmo69218.setBegBarType(VF.Barline.type.NONE);
stavesmo69218.setContext(context);
stavesmo69218.draw();
smo69218v0.draw(context, stavesmo69218);
smo72375.setContext(context);
smo72375.draw();
smo72376.setContext(context);
smo72376.draw();
smo72377.setContext(context);
smo72377.draw();
smo72378.setContext(context);
smo72378.draw();
const fmtsmo6424566 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo64245v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64245v0ar = [];
const smo64216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo64216.setAttribute('id', 'smo64216');
smo64245v0ar.push(smo64216);
const smo64217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64217.setAttribute('id', 'smo64217');
smo64245v0ar.push(smo64217);
const smo64218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64218.setAttribute('id', 'smo64218');
smo64245v0ar.push(smo64218);
const smo64219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64219.setAttribute('id', 'smo64219');
smo64245v0ar.push(smo64219);
const smo64220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64220.setAttribute('id', 'smo64220');
smo64245v0ar.push(smo64220);
const smo64221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64221.setAttribute('id', 'smo64221');
smo64245v0ar.push(smo64221);
const smo64222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64222.setAttribute('id', 'smo64222');
smo64245v0ar.push(smo64222);
const smo64223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64223.setAttribute('id', 'smo64223');
smo64245v0ar.push(smo64223);
const smo64224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/5/n"]}'))
smo64224.setAttribute('id', 'smo64224');
smo64245v0ar.push(smo64224);
const smo64225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64225.setAttribute('id', 'smo64225');
smo64245v0ar.push(smo64225);
const smo64226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64226.setAttribute('id', 'smo64226');
smo64245v0ar.push(smo64226);
const smo64227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64227.setAttribute('id', 'smo64227');
smo64245v0ar.push(smo64227);
const smo64228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64228.setAttribute('id', 'smo64228');
smo64245v0ar.push(smo64228);
const smo64229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64229.setAttribute('id', 'smo64229');
smo64245v0ar.push(smo64229);
const smo64230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64230.setAttribute('id', 'smo64230');
smo64245v0ar.push(smo64230);
const smo64231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/4/n"]}'))
smo64231.setAttribute('id', 'smo64231');
smo64245v0ar.push(smo64231);
smo64245v0.addTickables(smo64245v0ar)
fmtsmo6424566.joinVoices([smo64245v0]);
const fmtsmo6924866 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo69248v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69248v0ar = [];
const smo69219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69219.setAttribute('id', 'smo69219');
smo69248v0ar.push(smo69219);
const smo69220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69220.setAttribute('id', 'smo69220');
smo69248v0ar.push(smo69220);
const smo69221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69221.setAttribute('id', 'smo69221');
smo69248v0ar.push(smo69221);
const smo69222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69222.setAttribute('id', 'smo69222');
smo69248v0ar.push(smo69222);
const smo69223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69223.setAttribute('id', 'smo69223');
smo69248v0ar.push(smo69223);
const smo69224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69224.setAttribute('id', 'smo69224');
smo69248v0ar.push(smo69224);
const smo69225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69225.setAttribute('id', 'smo69225');
smo69248v0ar.push(smo69225);
const smo69226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69226.setAttribute('id', 'smo69226');
smo69248v0ar.push(smo69226);
const smo69227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69227.setAttribute('id', 'smo69227');
smo69248v0ar.push(smo69227);
const smo69228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69228.setAttribute('id', 'smo69228');
smo69248v0ar.push(smo69228);
const smo69229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69229.setAttribute('id', 'smo69229');
smo69248v0ar.push(smo69229);
const smo69230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69230.setAttribute('id', 'smo69230');
smo69248v0ar.push(smo69230);
const smo69231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69231.setAttribute('id', 'smo69231');
smo69248v0ar.push(smo69231);
const smo69232 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69232.setAttribute('id', 'smo69232');
smo69248v0ar.push(smo69232);
const smo69233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69233.setAttribute('id', 'smo69233');
smo69248v0ar.push(smo69233);
const smo69234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69234.setAttribute('id', 'smo69234');
smo69248v0ar.push(smo69234);
smo69248v0.addTickables(smo69248v0ar)
fmtsmo6924866.joinVoices([smo69248v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72381 = smo64216.getStemDirection();
smo64216.setStemDirection(dirsmo72381);
smo64217.setStemDirection(dirsmo72381);
smo64218.setStemDirection(dirsmo72381);
smo64219.setStemDirection(dirsmo72381);
const smo72381 = new VF.Beam([smo64216,smo64217,smo64218,smo64219]);
const dirsmo72382 = smo64220.getStemDirection();
smo64220.setStemDirection(dirsmo72382);
smo64221.setStemDirection(dirsmo72382);
smo64222.setStemDirection(dirsmo72382);
smo64223.setStemDirection(dirsmo72382);
const smo72382 = new VF.Beam([smo64220,smo64221,smo64222,smo64223]);
const dirsmo72383 = smo64224.getStemDirection();
smo64224.setStemDirection(dirsmo72383);
smo64225.setStemDirection(dirsmo72383);
smo64226.setStemDirection(dirsmo72383);
smo64227.setStemDirection(dirsmo72383);
const smo72383 = new VF.Beam([smo64224,smo64225,smo64226,smo64227]);
const dirsmo72384 = smo64228.getStemDirection();
smo64228.setStemDirection(dirsmo72384);
smo64229.setStemDirection(dirsmo72384);
smo64230.setStemDirection(dirsmo72384);
smo64231.setStemDirection(dirsmo72384);
const smo72384 = new VF.Beam([smo64228,smo64229,smo64230,smo64231]);
const dirsmo72387 = smo69219.getStemDirection();
smo69219.setStemDirection(dirsmo72387);
smo69220.setStemDirection(dirsmo72387);
smo69221.setStemDirection(dirsmo72387);
smo69222.setStemDirection(dirsmo72387);
const smo72387 = new VF.Beam([smo69219,smo69220,smo69221,smo69222]);
const dirsmo72388 = smo69223.getStemDirection();
smo69223.setStemDirection(dirsmo72388);
smo69224.setStemDirection(dirsmo72388);
smo69225.setStemDirection(dirsmo72388);
smo69226.setStemDirection(dirsmo72388);
const smo72388 = new VF.Beam([smo69223,smo69224,smo69225,smo69226]);
const dirsmo72389 = smo69227.getStemDirection();
smo69227.setStemDirection(dirsmo72389);
smo69228.setStemDirection(dirsmo72389);
smo69229.setStemDirection(dirsmo72389);
smo69230.setStemDirection(dirsmo72389);
const smo72389 = new VF.Beam([smo69227,smo69228,smo69229,smo69230]);
const dirsmo72390 = smo69231.getStemDirection();
smo69231.setStemDirection(dirsmo72390);
smo69232.setStemDirection(dirsmo72390);
smo69233.setStemDirection(dirsmo72390);
smo69234.setStemDirection(dirsmo72390);
const smo72390 = new VF.Beam([smo69231,smo69232,smo69233,smo69234]);
 
// formatting measures in staff group smo60952
fmtsmo6424566.format([smo64245v0,smo69248v0], 345);
const stavesmo64245 = new VF.Stave(916, 1962, 359);
stavesmo64245.setAttribute('id', 'stavesmo64245');
stavesmo64245.setBegBarType(VF.Barline.type.NONE);
stavesmo64245.setContext(context);
stavesmo64245.draw();
smo64245v0.draw(context, stavesmo64245);
smo72381.setContext(context);
smo72381.draw();
smo72382.setContext(context);
smo72382.draw();
smo72383.setContext(context);
smo72383.draw();
smo72384.setContext(context);
smo72384.draw();
const stavesmo69248 = new VF.Stave(916, 2051, 359);
stavesmo69248.setAttribute('id', 'stavesmo69248');
stavesmo69248.setBegBarType(VF.Barline.type.NONE);
stavesmo69248.setContext(context);
stavesmo69248.draw();
smo69248v0.draw(context, stavesmo69248);
smo72387.setContext(context);
smo72387.draw();
smo72388.setContext(context);
smo72388.draw();
smo72389.setContext(context);
smo72389.draw();
smo72390.setContext(context);
smo72390.draw();
const fmtsmo6427567 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo64275v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64275v0ar = [];
const smo64246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64246.setAttribute('id', 'smo64246');
smo64275v0ar.push(smo64246);
const smo64247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64247.setAttribute('id', 'smo64247');
const smo642470acc = new VF.Accidental('#');
smo64247.addModifier(smo642470acc, 0);
smo64275v0ar.push(smo64247);
const smo64248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64248.setAttribute('id', 'smo64248');
const smo642480acc = new VF.Accidental('n');
smo64248.addModifier(smo642480acc, 0);
smo64275v0ar.push(smo64248);
const smo64249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64249.setAttribute('id', 'smo64249');
smo64275v0ar.push(smo64249);
const smo64250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64250.setAttribute('id', 'smo64250');
smo64275v0ar.push(smo64250);
const smo64251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64251.setAttribute('id', 'smo64251');
smo64275v0ar.push(smo64251);
const smo64252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64252.setAttribute('id', 'smo64252');
smo64275v0ar.push(smo64252);
const smo64253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64253.setAttribute('id', 'smo64253');
smo64275v0ar.push(smo64253);
const smo64254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64254.setAttribute('id', 'smo64254');
smo64275v0ar.push(smo64254);
const smo64255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64255.setAttribute('id', 'smo64255');
smo64275v0ar.push(smo64255);
const smo64256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64256.setAttribute('id', 'smo64256');
smo64275v0ar.push(smo64256);
const smo64257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64257.setAttribute('id', 'smo64257');
smo64275v0ar.push(smo64257);
const smo64258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64258.setAttribute('id', 'smo64258');
smo64275v0ar.push(smo64258);
const smo64259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64259.setAttribute('id', 'smo64259');
smo64275v0ar.push(smo64259);
const smo64260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64260.setAttribute('id', 'smo64260');
smo64275v0ar.push(smo64260);
const smo64261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64261.setAttribute('id', 'smo64261');
smo64275v0ar.push(smo64261);
smo64275v0.addTickables(smo64275v0ar)
fmtsmo6427567.joinVoices([smo64275v0]);
const fmtsmo6927867 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo69278v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69278v0ar = [];
const smo69249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69249.setAttribute('id', 'smo69249');
smo69278v0ar.push(smo69249);
const smo69250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69250.setAttribute('id', 'smo69250');
const smo692500acc = new VF.Accidental('n');
smo69250.addModifier(smo692500acc, 0);
smo69278v0ar.push(smo69250);
const smo69251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69251.setAttribute('id', 'smo69251');
smo69278v0ar.push(smo69251);
const smo69252 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69252.setAttribute('id', 'smo69252');
smo69278v0ar.push(smo69252);
const smo69253 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo69253.setAttribute('id', 'smo69253');
const smo692530acc = new VF.Accidental('#');
smo69253.addModifier(smo692530acc, 0);
smo69278v0ar.push(smo69253);
const smo69254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69254.setAttribute('id', 'smo69254');
smo69278v0ar.push(smo69254);
const smo69255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69255.setAttribute('id', 'smo69255');
smo69278v0ar.push(smo69255);
const smo69256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69256.setAttribute('id', 'smo69256');
smo69278v0ar.push(smo69256);
const smo69257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69257.setAttribute('id', 'smo69257');
smo69278v0ar.push(smo69257);
const smo69258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69258.setAttribute('id', 'smo69258');
smo69278v0ar.push(smo69258);
const smo69259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69259.setAttribute('id', 'smo69259');
smo69278v0ar.push(smo69259);
const smo69260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69260.setAttribute('id', 'smo69260');
smo69278v0ar.push(smo69260);
const smo69261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo69261.setAttribute('id', 'smo69261');
smo69278v0ar.push(smo69261);
const smo69262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69262.setAttribute('id', 'smo69262');
smo69278v0ar.push(smo69262);
const smo69263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69263.setAttribute('id', 'smo69263');
smo69278v0ar.push(smo69263);
const smo69264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69264.setAttribute('id', 'smo69264');
smo69278v0ar.push(smo69264);
smo69278v0.addTickables(smo69278v0ar)
fmtsmo6927867.joinVoices([smo69278v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72393 = smo64246.getStemDirection();
smo64246.setStemDirection(dirsmo72393);
smo64247.setStemDirection(dirsmo72393);
smo64248.setStemDirection(dirsmo72393);
smo64249.setStemDirection(dirsmo72393);
const smo72393 = new VF.Beam([smo64246,smo64247,smo64248,smo64249]);
const dirsmo72394 = smo64250.getStemDirection();
smo64250.setStemDirection(dirsmo72394);
smo64251.setStemDirection(dirsmo72394);
smo64252.setStemDirection(dirsmo72394);
smo64253.setStemDirection(dirsmo72394);
const smo72394 = new VF.Beam([smo64250,smo64251,smo64252,smo64253]);
const dirsmo72395 = smo64254.getStemDirection();
smo64254.setStemDirection(dirsmo72395);
smo64255.setStemDirection(dirsmo72395);
smo64256.setStemDirection(dirsmo72395);
smo64257.setStemDirection(dirsmo72395);
const smo72395 = new VF.Beam([smo64254,smo64255,smo64256,smo64257]);
const dirsmo72396 = smo64258.getStemDirection();
smo64258.setStemDirection(dirsmo72396);
smo64259.setStemDirection(dirsmo72396);
smo64260.setStemDirection(dirsmo72396);
smo64261.setStemDirection(dirsmo72396);
const smo72396 = new VF.Beam([smo64258,smo64259,smo64260,smo64261]);
const dirsmo72399 = smo69249.getStemDirection();
smo69249.setStemDirection(dirsmo72399);
smo69250.setStemDirection(dirsmo72399);
smo69251.setStemDirection(dirsmo72399);
smo69252.setStemDirection(dirsmo72399);
const smo72399 = new VF.Beam([smo69249,smo69250,smo69251,smo69252]);
const dirsmo72400 = smo69253.getStemDirection();
smo69253.setStemDirection(dirsmo72400);
smo69254.setStemDirection(dirsmo72400);
smo69255.setStemDirection(dirsmo72400);
smo69256.setStemDirection(dirsmo72400);
const smo72400 = new VF.Beam([smo69253,smo69254,smo69255,smo69256]);
const dirsmo72401 = smo69257.getStemDirection();
smo69257.setStemDirection(dirsmo72401);
smo69258.setStemDirection(dirsmo72401);
smo69259.setStemDirection(dirsmo72401);
smo69260.setStemDirection(dirsmo72401);
const smo72401 = new VF.Beam([smo69257,smo69258,smo69259,smo69260]);
const dirsmo72402 = smo69261.getStemDirection();
smo69261.setStemDirection(dirsmo72402);
smo69262.setStemDirection(dirsmo72402);
smo69263.setStemDirection(dirsmo72402);
smo69264.setStemDirection(dirsmo72402);
const smo72402 = new VF.Beam([smo69261,smo69262,smo69263,smo69264]);
 
// formatting measures in staff group smo60952
fmtsmo6427567.format([smo64275v0,smo69278v0], 519);
const stavesmo64275 = new VF.Stave(1275, 1962, 533);
stavesmo64275.setAttribute('id', 'stavesmo64275');
stavesmo64275.setBegBarType(VF.Barline.type.NONE);
stavesmo64275.setContext(context);
stavesmo64275.draw();
smo64275v0.draw(context, stavesmo64275);
smo72393.setContext(context);
smo72393.draw();
smo72394.setContext(context);
smo72394.draw();
smo72395.setContext(context);
smo72395.draw();
smo72396.setContext(context);
smo72396.draw();
const stavesmo69278 = new VF.Stave(1275, 2051, 533);
stavesmo69278.setAttribute('id', 'stavesmo69278');
stavesmo69278.setBegBarType(VF.Barline.type.NONE);
stavesmo69278.setContext(context);
stavesmo69278.draw();
smo69278v0.draw(context, stavesmo69278);
smo72399.setContext(context);
smo72399.draw();
smo72400.setContext(context);
smo72400.draw();
smo72401.setContext(context);
smo72401.draw();
smo72402.setContext(context);
smo72402.draw();
const rightsmo60952stavesmo642751 = new VF.StaveConnector(stavesmo64275, stavesmo69278).setType(0);
rightsmo60952stavesmo642751.setContext(context).draw();
const fmtsmo6430568 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo64305v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64305v0ar = [];
const smo64276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64276.setAttribute('id', 'smo64276');
smo64305v0ar.push(smo64276);
const smo64277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64277.setAttribute('id', 'smo64277');
smo64305v0ar.push(smo64277);
const smo64278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64278.setAttribute('id', 'smo64278');
const smo642780acc = new VF.Accidental('#');
smo64278.addModifier(smo642780acc, 0);
smo64305v0ar.push(smo64278);
const smo64279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64279.setAttribute('id', 'smo64279');
smo64305v0ar.push(smo64279);
const smo64280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64280.setAttribute('id', 'smo64280');
smo64305v0ar.push(smo64280);
const smo64281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64281.setAttribute('id', 'smo64281');
smo64305v0ar.push(smo64281);
const smo64282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64282.setAttribute('id', 'smo64282');
smo64305v0ar.push(smo64282);
const smo64283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64283.setAttribute('id', 'smo64283');
smo64305v0ar.push(smo64283);
const smo64284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo64284.setAttribute('id', 'smo64284');
smo64305v0ar.push(smo64284);
const smo64285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64285.setAttribute('id', 'smo64285');
smo64305v0ar.push(smo64285);
const smo64286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64286.setAttribute('id', 'smo64286');
smo64305v0ar.push(smo64286);
const smo64287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64287.setAttribute('id', 'smo64287');
smo64305v0ar.push(smo64287);
const smo64288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64288.setAttribute('id', 'smo64288');
smo64305v0ar.push(smo64288);
const smo64289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64289.setAttribute('id', 'smo64289');
smo64305v0ar.push(smo64289);
const smo64290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo64290.setAttribute('id', 'smo64290');
smo64305v0ar.push(smo64290);
const smo64291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo64291.setAttribute('id', 'smo64291');
smo64305v0ar.push(smo64291);
smo64305v0.addTickables(smo64305v0ar)
fmtsmo6430568.joinVoices([smo64305v0]);
const fmtsmo6930868 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo69308v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69308v0ar = [];
const smo69279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo69279.setAttribute('id', 'smo69279');
smo69308v0ar.push(smo69279);
const smo69280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69280.setAttribute('id', 'smo69280');
smo69308v0ar.push(smo69280);
const smo69281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69281.setAttribute('id', 'smo69281');
const smo692810acc = new VF.Accidental('n');
smo69281.addModifier(smo692810acc, 0);
smo69308v0ar.push(smo69281);
const smo69282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69282.setAttribute('id', 'smo69282');
smo69308v0ar.push(smo69282);
const smo69283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69283.setAttribute('id', 'smo69283');
smo69308v0ar.push(smo69283);
const smo69284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69284.setAttribute('id', 'smo69284');
smo69308v0ar.push(smo69284);
const smo69285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69285.setAttribute('id', 'smo69285');
smo69308v0ar.push(smo69285);
const smo69286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69286.setAttribute('id', 'smo69286');
smo69308v0ar.push(smo69286);
const smo69287 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo69287.setAttribute('id', 'smo69287');
smo69308v0ar.push(smo69287);
const smo69288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69288.setAttribute('id', 'smo69288');
smo69308v0ar.push(smo69288);
const smo69289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69289.setAttribute('id', 'smo69289');
smo69308v0ar.push(smo69289);
const smo69290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69290.setAttribute('id', 'smo69290');
smo69308v0ar.push(smo69290);
const smo69291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69291.setAttribute('id', 'smo69291');
smo69308v0ar.push(smo69291);
const smo69292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69292.setAttribute('id', 'smo69292');
smo69308v0ar.push(smo69292);
const smo69293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69293.setAttribute('id', 'smo69293');
smo69308v0ar.push(smo69293);
const smo69294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69294.setAttribute('id', 'smo69294');
smo69308v0ar.push(smo69294);
smo69308v0.addTickables(smo69308v0ar)
fmtsmo6930868.joinVoices([smo69308v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72417 = smo64276.getStemDirection();
smo64276.setStemDirection(dirsmo72417);
smo64277.setStemDirection(dirsmo72417);
smo64278.setStemDirection(dirsmo72417);
smo64279.setStemDirection(dirsmo72417);
const smo72417 = new VF.Beam([smo64276,smo64277,smo64278,smo64279]);
const dirsmo72418 = smo64280.getStemDirection();
smo64280.setStemDirection(dirsmo72418);
smo64281.setStemDirection(dirsmo72418);
smo64282.setStemDirection(dirsmo72418);
smo64283.setStemDirection(dirsmo72418);
const smo72418 = new VF.Beam([smo64280,smo64281,smo64282,smo64283]);
const dirsmo72419 = smo64284.getStemDirection();
smo64284.setStemDirection(dirsmo72419);
smo64285.setStemDirection(dirsmo72419);
smo64286.setStemDirection(dirsmo72419);
smo64287.setStemDirection(dirsmo72419);
const smo72419 = new VF.Beam([smo64284,smo64285,smo64286,smo64287]);
const dirsmo72420 = smo64288.getStemDirection();
smo64288.setStemDirection(dirsmo72420);
smo64289.setStemDirection(dirsmo72420);
smo64290.setStemDirection(dirsmo72420);
smo64291.setStemDirection(dirsmo72420);
const smo72420 = new VF.Beam([smo64288,smo64289,smo64290,smo64291]);
const dirsmo72423 = smo69279.getStemDirection();
smo69279.setStemDirection(dirsmo72423);
smo69280.setStemDirection(dirsmo72423);
smo69281.setStemDirection(dirsmo72423);
smo69282.setStemDirection(dirsmo72423);
const smo72423 = new VF.Beam([smo69279,smo69280,smo69281,smo69282]);
const dirsmo72424 = smo69283.getStemDirection();
smo69283.setStemDirection(dirsmo72424);
smo69284.setStemDirection(dirsmo72424);
smo69285.setStemDirection(dirsmo72424);
smo69286.setStemDirection(dirsmo72424);
const smo72424 = new VF.Beam([smo69283,smo69284,smo69285,smo69286]);
const dirsmo72425 = smo69287.getStemDirection();
smo69287.setStemDirection(dirsmo72425);
smo69288.setStemDirection(dirsmo72425);
smo69289.setStemDirection(dirsmo72425);
smo69290.setStemDirection(dirsmo72425);
const smo72425 = new VF.Beam([smo69287,smo69288,smo69289,smo69290]);
const dirsmo72426 = smo69291.getStemDirection();
smo69291.setStemDirection(dirsmo72426);
smo69292.setStemDirection(dirsmo72426);
smo69293.setStemDirection(dirsmo72426);
smo69294.setStemDirection(dirsmo72426);
const smo72426 = new VF.Beam([smo69291,smo69292,smo69293,smo69294]);
 
// formatting measures in staff group smo60952
fmtsmo6430568.format([smo64305v0,smo69308v0], 409);
const stavesmo64305 = new VF.Stave(90, 2180, 506);
stavesmo64305.setAttribute('id', 'stavesmo64305');
stavesmo64305.setBegBarType(1);
stavesmo64305.addClef('treble');
const keysmo64305 = new VF.KeySignature('Eb');
keysmo64305.addToStave(stavesmo64305);
stavesmo64305.setContext(context);
stavesmo64305.draw();
smo64305v0.draw(context, stavesmo64305);
smo72417.setContext(context);
smo72417.draw();
smo72418.setContext(context);
smo72418.draw();
smo72419.setContext(context);
smo72419.draw();
smo72420.setContext(context);
smo72420.draw();
const stavesmo69308 = new VF.Stave(90, 2270, 506);
stavesmo69308.setAttribute('id', 'stavesmo69308');
stavesmo69308.setBegBarType(1);
stavesmo69308.addClef('bass');
const keysmo69308 = new VF.KeySignature('Eb');
keysmo69308.addToStave(stavesmo69308);
stavesmo69308.setContext(context);
stavesmo69308.draw();
smo69308v0.draw(context, stavesmo69308);
smo72423.setContext(context);
smo72423.draw();
smo72424.setContext(context);
smo72424.draw();
smo72425.setContext(context);
smo72425.draw();
smo72426.setContext(context);
smo72426.draw();
const leftsmo60952stavesmo643051 = new VF.StaveConnector(stavesmo64305, stavesmo69308).setType(3);
leftsmo60952stavesmo643051.setContext(context).draw();
const fmtsmo6433569 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo64335v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64335v0ar = [];
const smo64306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64306.setAttribute('id', 'smo64306');
smo64335v0ar.push(smo64306);
const smo64307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64307.setAttribute('id', 'smo64307');
const smo643070acc = new VF.Accidental('n');
smo64307.addModifier(smo643070acc, 0);
smo64335v0ar.push(smo64307);
const smo64308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64308.setAttribute('id', 'smo64308');
smo64335v0ar.push(smo64308);
const smo64309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64309.setAttribute('id', 'smo64309');
smo64335v0ar.push(smo64309);
const smo64310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64310.setAttribute('id', 'smo64310');
smo64335v0ar.push(smo64310);
const smo64311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64311.setAttribute('id', 'smo64311');
smo64335v0ar.push(smo64311);
const smo64312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64312.setAttribute('id', 'smo64312');
smo64335v0ar.push(smo64312);
const smo64313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64313.setAttribute('id', 'smo64313');
smo64335v0ar.push(smo64313);
const smo64314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64314.setAttribute('id', 'smo64314');
smo64335v0ar.push(smo64314);
const smo64315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64315.setAttribute('id', 'smo64315');
smo64335v0ar.push(smo64315);
const smo64316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64316.setAttribute('id', 'smo64316');
smo64335v0ar.push(smo64316);
const smo64317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64317.setAttribute('id', 'smo64317');
smo64335v0ar.push(smo64317);
const smo64318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64318.setAttribute('id', 'smo64318');
smo64335v0ar.push(smo64318);
const smo64319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64319.setAttribute('id', 'smo64319');
smo64335v0ar.push(smo64319);
const smo64320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64320.setAttribute('id', 'smo64320');
smo64335v0ar.push(smo64320);
const smo64321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64321.setAttribute('id', 'smo64321');
smo64335v0ar.push(smo64321);
smo64335v0.addTickables(smo64335v0ar)
fmtsmo6433569.joinVoices([smo64335v0]);
const fmtsmo6933869 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo69338v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69338v0ar = [];
const smo69309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo69309.setAttribute('id', 'smo69309');
smo69338v0ar.push(smo69309);
const smo69310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69310.setAttribute('id', 'smo69310');
smo69338v0ar.push(smo69310);
const smo69311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69311.setAttribute('id', 'smo69311');
smo69338v0ar.push(smo69311);
const smo69312 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69312.setAttribute('id', 'smo69312');
smo69338v0ar.push(smo69312);
const smo69313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69313.setAttribute('id', 'smo69313');
const smo693130acc = new VF.Accidental('n');
smo69313.addModifier(smo693130acc, 0);
smo69338v0ar.push(smo69313);
const smo69314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69314.setAttribute('id', 'smo69314');
smo69338v0ar.push(smo69314);
const smo69315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69315.setAttribute('id', 'smo69315');
smo69338v0ar.push(smo69315);
const smo69316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69316.setAttribute('id', 'smo69316');
smo69338v0ar.push(smo69316);
const smo69317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/2/n"]}'))
smo69317.setAttribute('id', 'smo69317');
smo69338v0ar.push(smo69317);
const smo69318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69318.setAttribute('id', 'smo69318');
smo69338v0ar.push(smo69318);
const smo69319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69319.setAttribute('id', 'smo69319');
smo69338v0ar.push(smo69319);
const smo69320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69320.setAttribute('id', 'smo69320');
smo69338v0ar.push(smo69320);
const smo69321 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo69321.setAttribute('id', 'smo69321');
smo69338v0ar.push(smo69321);
const smo69322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69322.setAttribute('id', 'smo69322');
smo69338v0ar.push(smo69322);
const smo69323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69323.setAttribute('id', 'smo69323');
smo69338v0ar.push(smo69323);
const smo69324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69324.setAttribute('id', 'smo69324');
smo69338v0ar.push(smo69324);
smo69338v0.addTickables(smo69338v0ar)
fmtsmo6933869.joinVoices([smo69338v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72429 = smo64306.getStemDirection();
smo64306.setStemDirection(dirsmo72429);
smo64307.setStemDirection(dirsmo72429);
smo64308.setStemDirection(dirsmo72429);
smo64309.setStemDirection(dirsmo72429);
const smo72429 = new VF.Beam([smo64306,smo64307,smo64308,smo64309]);
const dirsmo72430 = smo64310.getStemDirection();
smo64310.setStemDirection(dirsmo72430);
smo64311.setStemDirection(dirsmo72430);
smo64312.setStemDirection(dirsmo72430);
smo64313.setStemDirection(dirsmo72430);
const smo72430 = new VF.Beam([smo64310,smo64311,smo64312,smo64313]);
const dirsmo72431 = smo64314.getStemDirection();
smo64314.setStemDirection(dirsmo72431);
smo64315.setStemDirection(dirsmo72431);
smo64316.setStemDirection(dirsmo72431);
smo64317.setStemDirection(dirsmo72431);
const smo72431 = new VF.Beam([smo64314,smo64315,smo64316,smo64317]);
const dirsmo72432 = smo64318.getStemDirection();
smo64318.setStemDirection(dirsmo72432);
smo64319.setStemDirection(dirsmo72432);
smo64320.setStemDirection(dirsmo72432);
smo64321.setStemDirection(dirsmo72432);
const smo72432 = new VF.Beam([smo64318,smo64319,smo64320,smo64321]);
const dirsmo72435 = smo69309.getStemDirection();
smo69309.setStemDirection(dirsmo72435);
smo69310.setStemDirection(dirsmo72435);
smo69311.setStemDirection(dirsmo72435);
smo69312.setStemDirection(dirsmo72435);
const smo72435 = new VF.Beam([smo69309,smo69310,smo69311,smo69312]);
const dirsmo72436 = smo69313.getStemDirection();
smo69313.setStemDirection(dirsmo72436);
smo69314.setStemDirection(dirsmo72436);
smo69315.setStemDirection(dirsmo72436);
smo69316.setStemDirection(dirsmo72436);
const smo72436 = new VF.Beam([smo69313,smo69314,smo69315,smo69316]);
const dirsmo72437 = smo69317.getStemDirection();
smo69317.setStemDirection(dirsmo72437);
smo69318.setStemDirection(dirsmo72437);
smo69319.setStemDirection(dirsmo72437);
smo69320.setStemDirection(dirsmo72437);
const smo72437 = new VF.Beam([smo69317,smo69318,smo69319,smo69320]);
const dirsmo72438 = smo69321.getStemDirection();
smo69321.setStemDirection(dirsmo72438);
smo69322.setStemDirection(dirsmo72438);
smo69323.setStemDirection(dirsmo72438);
smo69324.setStemDirection(dirsmo72438);
const smo72438 = new VF.Beam([smo69321,smo69322,smo69323,smo69324]);
 
// formatting measures in staff group smo60952
fmtsmo6433569.format([smo64335v0,smo69338v0], 440);
const stavesmo64335 = new VF.Stave(596, 2180, 454);
stavesmo64335.setAttribute('id', 'stavesmo64335');
stavesmo64335.setBegBarType(VF.Barline.type.NONE);
stavesmo64335.setContext(context);
stavesmo64335.draw();
smo64335v0.draw(context, stavesmo64335);
smo72429.setContext(context);
smo72429.draw();
smo72430.setContext(context);
smo72430.draw();
smo72431.setContext(context);
smo72431.draw();
smo72432.setContext(context);
smo72432.draw();
const stavesmo69338 = new VF.Stave(596, 2270, 454);
stavesmo69338.setAttribute('id', 'stavesmo69338');
stavesmo69338.setBegBarType(VF.Barline.type.NONE);
stavesmo69338.setContext(context);
stavesmo69338.draw();
smo69338v0.draw(context, stavesmo69338);
smo72435.setContext(context);
smo72435.draw();
smo72436.setContext(context);
smo72436.draw();
smo72437.setContext(context);
smo72437.draw();
smo72438.setContext(context);
smo72438.draw();
const fmtsmo6436570 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo64365v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64365v0ar = [];
const smo64336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64336.setAttribute('id', 'smo64336');
smo64365v0ar.push(smo64336);
const smo64337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64337.setAttribute('id', 'smo64337');
smo64365v0ar.push(smo64337);
const smo64338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64338.setAttribute('id', 'smo64338');
const smo643380acc = new VF.Accidental('n');
smo64338.addModifier(smo643380acc, 0);
smo64365v0ar.push(smo64338);
const smo64339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64339.setAttribute('id', 'smo64339');
smo64365v0ar.push(smo64339);
const smo64340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64340.setAttribute('id', 'smo64340');
smo64365v0ar.push(smo64340);
const smo64341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64341.setAttribute('id', 'smo64341');
smo64365v0ar.push(smo64341);
const smo64342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64342.setAttribute('id', 'smo64342');
smo64365v0ar.push(smo64342);
const smo64343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64343.setAttribute('id', 'smo64343');
smo64365v0ar.push(smo64343);
const smo64344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo64344.setAttribute('id', 'smo64344');
smo64365v0ar.push(smo64344);
const smo64345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64345.setAttribute('id', 'smo64345');
smo64365v0ar.push(smo64345);
const smo64346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64346.setAttribute('id', 'smo64346');
smo64365v0ar.push(smo64346);
const smo64347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64347.setAttribute('id', 'smo64347');
smo64365v0ar.push(smo64347);
const smo64348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo64348.setAttribute('id', 'smo64348');
smo64365v0ar.push(smo64348);
const smo64349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64349.setAttribute('id', 'smo64349');
smo64365v0ar.push(smo64349);
const smo64350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo64350.setAttribute('id', 'smo64350');
smo64365v0ar.push(smo64350);
const smo64351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64351.setAttribute('id', 'smo64351');
smo64365v0ar.push(smo64351);
smo64365v0.addTickables(smo64365v0ar)
fmtsmo6436570.joinVoices([smo64365v0]);
const fmtsmo6936870 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo69368v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69368v0ar = [];
const smo69339 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo69339.setAttribute('id', 'smo69339');
smo69368v0ar.push(smo69339);
const smo69340 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69340.setAttribute('id', 'smo69340');
smo69368v0ar.push(smo69340);
const smo69341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69341.setAttribute('id', 'smo69341');
smo69368v0ar.push(smo69341);
const smo69342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69342.setAttribute('id', 'smo69342');
smo69368v0ar.push(smo69342);
const smo69343 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69343.setAttribute('id', 'smo69343');
smo69368v0ar.push(smo69343);
const smo69344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69344.setAttribute('id', 'smo69344');
smo69368v0ar.push(smo69344);
const smo69345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69345.setAttribute('id', 'smo69345');
smo69368v0ar.push(smo69345);
const smo69346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69346.setAttribute('id', 'smo69346');
smo69368v0ar.push(smo69346);
const smo69347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo69347.setAttribute('id', 'smo69347');
smo69368v0ar.push(smo69347);
const smo69348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69348.setAttribute('id', 'smo69348');
smo69368v0ar.push(smo69348);
const smo69349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69349.setAttribute('id', 'smo69349');
smo69368v0ar.push(smo69349);
const smo69350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69350.setAttribute('id', 'smo69350');
smo69368v0ar.push(smo69350);
const smo69351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69351.setAttribute('id', 'smo69351');
smo69368v0ar.push(smo69351);
const smo69352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69352.setAttribute('id', 'smo69352');
smo69368v0ar.push(smo69352);
const smo69353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69353.setAttribute('id', 'smo69353');
smo69368v0ar.push(smo69353);
const smo69354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/3/n"]}'))
smo69354.setAttribute('id', 'smo69354');
smo69368v0ar.push(smo69354);
smo69368v0.addTickables(smo69368v0ar)
fmtsmo6936870.joinVoices([smo69368v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72441 = smo64336.getStemDirection();
smo64336.setStemDirection(dirsmo72441);
smo64337.setStemDirection(dirsmo72441);
smo64338.setStemDirection(dirsmo72441);
smo64339.setStemDirection(dirsmo72441);
const smo72441 = new VF.Beam([smo64336,smo64337,smo64338,smo64339]);
const dirsmo72442 = smo64340.getStemDirection();
smo64340.setStemDirection(dirsmo72442);
smo64341.setStemDirection(dirsmo72442);
smo64342.setStemDirection(dirsmo72442);
smo64343.setStemDirection(dirsmo72442);
const smo72442 = new VF.Beam([smo64340,smo64341,smo64342,smo64343]);
const dirsmo72443 = smo64344.getStemDirection();
smo64344.setStemDirection(dirsmo72443);
smo64345.setStemDirection(dirsmo72443);
smo64346.setStemDirection(dirsmo72443);
smo64347.setStemDirection(dirsmo72443);
const smo72443 = new VF.Beam([smo64344,smo64345,smo64346,smo64347]);
const dirsmo72444 = smo64348.getStemDirection();
smo64348.setStemDirection(dirsmo72444);
smo64349.setStemDirection(dirsmo72444);
smo64350.setStemDirection(dirsmo72444);
smo64351.setStemDirection(dirsmo72444);
const smo72444 = new VF.Beam([smo64348,smo64349,smo64350,smo64351]);
const dirsmo72447 = smo69339.getStemDirection();
smo69339.setStemDirection(dirsmo72447);
smo69340.setStemDirection(dirsmo72447);
smo69341.setStemDirection(dirsmo72447);
smo69342.setStemDirection(dirsmo72447);
const smo72447 = new VF.Beam([smo69339,smo69340,smo69341,smo69342]);
const dirsmo72448 = smo69343.getStemDirection();
smo69343.setStemDirection(dirsmo72448);
smo69344.setStemDirection(dirsmo72448);
smo69345.setStemDirection(dirsmo72448);
smo69346.setStemDirection(dirsmo72448);
const smo72448 = new VF.Beam([smo69343,smo69344,smo69345,smo69346]);
const dirsmo72449 = smo69347.getStemDirection();
smo69347.setStemDirection(dirsmo72449);
smo69348.setStemDirection(dirsmo72449);
smo69349.setStemDirection(dirsmo72449);
smo69350.setStemDirection(dirsmo72449);
const smo72449 = new VF.Beam([smo69347,smo69348,smo69349,smo69350]);
const dirsmo72450 = smo69351.getStemDirection();
smo69351.setStemDirection(dirsmo72450);
smo69352.setStemDirection(dirsmo72450);
smo69353.setStemDirection(dirsmo72450);
smo69354.setStemDirection(dirsmo72450);
const smo72450 = new VF.Beam([smo69351,smo69352,smo69353,smo69354]);
 
// formatting measures in staff group smo60952
fmtsmo6436570.format([smo64365v0,smo69368v0], 386);
const stavesmo64365 = new VF.Stave(1050, 2180, 400);
stavesmo64365.setAttribute('id', 'stavesmo64365');
stavesmo64365.setBegBarType(VF.Barline.type.NONE);
stavesmo64365.setContext(context);
stavesmo64365.draw();
smo64365v0.draw(context, stavesmo64365);
smo72441.setContext(context);
smo72441.draw();
smo72442.setContext(context);
smo72442.draw();
smo72443.setContext(context);
smo72443.draw();
smo72444.setContext(context);
smo72444.draw();
const stavesmo69368 = new VF.Stave(1050, 2270, 400);
stavesmo69368.setAttribute('id', 'stavesmo69368');
stavesmo69368.setBegBarType(VF.Barline.type.NONE);
stavesmo69368.setContext(context);
stavesmo69368.draw();
smo69368v0.draw(context, stavesmo69368);
smo72447.setContext(context);
smo72447.draw();
smo72448.setContext(context);
smo72448.draw();
smo72449.setContext(context);
smo72449.draw();
smo72450.setContext(context);
smo72450.draw();
const fmtsmo6439571 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo64395v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo64395v0ar = [];
const smo64366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo64366.setAttribute('id', 'smo64366');
smo64395v0ar.push(smo64366);
const smo64367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64367.setAttribute('id', 'smo64367');
smo64395v0ar.push(smo64367);
const smo64368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64368.setAttribute('id', 'smo64368');
smo64395v0ar.push(smo64368);
const smo64369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64369.setAttribute('id', 'smo64369');
smo64395v0ar.push(smo64369);
const smo64370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64370.setAttribute('id', 'smo64370');
smo64395v0ar.push(smo64370);
const smo64371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64371.setAttribute('id', 'smo64371');
smo64395v0ar.push(smo64371);
const smo64372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64372.setAttribute('id', 'smo64372');
smo64395v0ar.push(smo64372);
const smo64373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64373.setAttribute('id', 'smo64373');
smo64395v0ar.push(smo64373);
const smo64374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/4/n"]}'))
smo64374.setAttribute('id', 'smo64374');
smo64395v0ar.push(smo64374);
const smo64375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64375.setAttribute('id', 'smo64375');
smo64395v0ar.push(smo64375);
const smo64376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64376.setAttribute('id', 'smo64376');
smo64395v0ar.push(smo64376);
const smo64377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64377.setAttribute('id', 'smo64377');
smo64395v0ar.push(smo64377);
const smo64378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo64378.setAttribute('id', 'smo64378');
smo64395v0ar.push(smo64378);
const smo64379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64379.setAttribute('id', 'smo64379');
smo64395v0ar.push(smo64379);
const smo64380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo64380.setAttribute('id', 'smo64380');
smo64395v0ar.push(smo64380);
const smo64381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo64381.setAttribute('id', 'smo64381');
smo64395v0ar.push(smo64381);
smo64395v0.addTickables(smo64395v0ar)
fmtsmo6439571.joinVoices([smo64395v0]);
const fmtsmo6939871 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo69398v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69398v0ar = [];
const smo69369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo69369.setAttribute('id', 'smo69369');
smo69398v0ar.push(smo69369);
const smo69370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69370.setAttribute('id', 'smo69370');
smo69398v0ar.push(smo69370);
const smo69371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69371.setAttribute('id', 'smo69371');
smo69398v0ar.push(smo69371);
const smo69372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69372.setAttribute('id', 'smo69372');
smo69398v0ar.push(smo69372);
const smo69373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69373.setAttribute('id', 'smo69373');
smo69398v0ar.push(smo69373);
const smo69374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69374.setAttribute('id', 'smo69374');
smo69398v0ar.push(smo69374);
const smo69375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69375.setAttribute('id', 'smo69375');
smo69398v0ar.push(smo69375);
const smo69376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69376.setAttribute('id', 'smo69376');
smo69398v0ar.push(smo69376);
const smo69377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo69377.setAttribute('id', 'smo69377');
smo69398v0ar.push(smo69377);
const smo69378 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69378.setAttribute('id', 'smo69378');
smo69398v0ar.push(smo69378);
const smo69379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69379.setAttribute('id', 'smo69379');
smo69398v0ar.push(smo69379);
const smo69380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69380.setAttribute('id', 'smo69380');
smo69398v0ar.push(smo69380);
const smo69381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69381.setAttribute('id', 'smo69381');
smo69398v0ar.push(smo69381);
const smo69382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69382.setAttribute('id', 'smo69382');
smo69398v0ar.push(smo69382);
const smo69383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo69383.setAttribute('id', 'smo69383');
smo69398v0ar.push(smo69383);
const smo69384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo69384.setAttribute('id', 'smo69384');
smo69398v0ar.push(smo69384);
smo69398v0.addTickables(smo69398v0ar)
fmtsmo6939871.joinVoices([smo69398v0]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo72453 = smo64366.getStemDirection();
smo64366.setStemDirection(dirsmo72453);
smo64367.setStemDirection(dirsmo72453);
smo64368.setStemDirection(dirsmo72453);
smo64369.setStemDirection(dirsmo72453);
const smo72453 = new VF.Beam([smo64366,smo64367,smo64368,smo64369]);
const dirsmo72454 = smo64370.getStemDirection();
smo64370.setStemDirection(dirsmo72454);
smo64371.setStemDirection(dirsmo72454);
smo64372.setStemDirection(dirsmo72454);
smo64373.setStemDirection(dirsmo72454);
const smo72454 = new VF.Beam([smo64370,smo64371,smo64372,smo64373]);
const dirsmo72455 = smo64374.getStemDirection();
smo64374.setStemDirection(dirsmo72455);
smo64375.setStemDirection(dirsmo72455);
smo64376.setStemDirection(dirsmo72455);
smo64377.setStemDirection(dirsmo72455);
const smo72455 = new VF.Beam([smo64374,smo64375,smo64376,smo64377]);
const dirsmo72456 = smo64378.getStemDirection();
smo64378.setStemDirection(dirsmo72456);
smo64379.setStemDirection(dirsmo72456);
smo64380.setStemDirection(dirsmo72456);
smo64381.setStemDirection(dirsmo72456);
const smo72456 = new VF.Beam([smo64378,smo64379,smo64380,smo64381]);
const dirsmo72459 = smo69369.getStemDirection();
smo69369.setStemDirection(dirsmo72459);
smo69370.setStemDirection(dirsmo72459);
smo69371.setStemDirection(dirsmo72459);
smo69372.setStemDirection(dirsmo72459);
const smo72459 = new VF.Beam([smo69369,smo69370,smo69371,smo69372]);
const dirsmo72460 = smo69373.getStemDirection();
smo69373.setStemDirection(dirsmo72460);
smo69374.setStemDirection(dirsmo72460);
smo69375.setStemDirection(dirsmo72460);
smo69376.setStemDirection(dirsmo72460);
const smo72460 = new VF.Beam([smo69373,smo69374,smo69375,smo69376]);
const dirsmo72461 = smo69377.getStemDirection();
smo69377.setStemDirection(dirsmo72461);
smo69378.setStemDirection(dirsmo72461);
smo69379.setStemDirection(dirsmo72461);
smo69380.setStemDirection(dirsmo72461);
const smo72461 = new VF.Beam([smo69377,smo69378,smo69379,smo69380]);
const dirsmo72462 = smo69381.getStemDirection();
smo69381.setStemDirection(dirsmo72462);
smo69382.setStemDirection(dirsmo72462);
smo69383.setStemDirection(dirsmo72462);
smo69384.setStemDirection(dirsmo72462);
const smo72462 = new VF.Beam([smo69381,smo69382,smo69383,smo69384]);
 
// formatting measures in staff group smo60952
fmtsmo6439571.format([smo64395v0,smo69398v0], 342);
const stavesmo64395 = new VF.Stave(1450, 2180, 356);
stavesmo64395.setAttribute('id', 'stavesmo64395');
stavesmo64395.setBegBarType(VF.Barline.type.NONE);
stavesmo64395.setContext(context);
stavesmo64395.draw();
smo64395v0.draw(context, stavesmo64395);
smo72453.setContext(context);
smo72453.draw();
smo72454.setContext(context);
smo72454.draw();
smo72455.setContext(context);
smo72455.draw();
smo72456.setContext(context);
smo72456.draw();
const stavesmo69398 = new VF.Stave(1450, 2270, 356);
stavesmo69398.setAttribute('id', 'stavesmo69398');
stavesmo69398.setBegBarType(VF.Barline.type.NONE);
stavesmo69398.setContext(context);
stavesmo69398.draw();
smo69398v0.draw(context, stavesmo69398);
smo72459.setContext(context);
smo72459.draw();
smo72460.setContext(context);
smo72460.draw();
smo72461.setContext(context);
smo72461.draw();
smo72462.setContext(context);
smo72462.draw();
const rightsmo60952stavesmo643951 = new VF.StaveConnector(stavesmo64395, stavesmo69398).setType(0);
rightsmo60952stavesmo643951.setContext(context).draw();
// modifier from 0-46-1-7 to 0-46-1-8
const smo74248 = new VF.StaveTie({ first_note: smo63599, last_note: smo63600, 
          firstNote: smo63599, lastNote: smo63600, first_indices: [0], last_indices: [0]});
smo74248.setContext(context).draw();
// modifier from 0-47-0-3 to 0-47-0-4
const smo74249 = new VF.StaveTie({ first_note: smo63621, last_note: smo63622, 
          firstNote: smo63621, lastNote: smo63622, first_indices: [0], last_indices: [0]});
smo74249.setContext(context).draw();
// modifier from 0-49-1-1 to 0-49-1-2
const smo74250 = new VF.StaveTie({ first_note: smo63689, last_note: smo63690, 
          firstNote: smo63689, lastNote: smo63690, first_indices: [0], last_indices: [0]});
smo74250.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo74251 = new VF.StaveTie({ first_note: smo63697, last_note: null, 
          firstNote: smo63697, lastNote: null, first_indices: [0], last_indices: [0]});
smo74251.setContext(context).draw();
// modifier from 0-49-1-9 to 0-50-1-0
const smo74252 = new VF.StaveTie({ first_note: null, last_note: smo63722, 
          firstNote: null, lastNote: smo63722, first_indices: [0], last_indices: [0]});
smo74252.setContext(context).draw();
// modifier from 0-50-1-3 to 0-50-1-4
const smo74253 = new VF.StaveTie({ first_note: smo63725, last_note: smo63726, 
          firstNote: smo63725, lastNote: smo63726, first_indices: [0], last_indices: [0]});
smo74253.setContext(context).draw();
// modifier from 0-51-0-3 to 0-51-0-4
const smo74254 = new VF.StaveTie({ first_note: smo63747, last_note: smo63748, 
          firstNote: smo63747, lastNote: smo63748, first_indices: [0], last_indices: [0]});
smo74254.setContext(context).draw();
// modifier from 0-51-1-6 to 0-51-1-7
const smo74255 = new VF.StaveTie({ first_note: smo63760, last_note: smo63761, 
          firstNote: smo63760, lastNote: smo63761, first_indices: [0], last_indices: [0]});
smo74255.setContext(context).draw();
// modifier from 0-54-1-3 to 0-54-1-4
const smo74256 = new VF.StaveTie({ first_note: smo63852, last_note: smo63853, 
          firstNote: smo63852, lastNote: smo63853, first_indices: [0], last_indices: [0]});
smo74256.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo74257 = new VF.StaveTie({ first_note: smo63883, last_note: null, 
          firstNote: smo63883, lastNote: null, first_indices: [0], last_indices: [0]});
smo74257.setContext(context).draw();
// modifier from 0-55-0-8 to 0-56-0-0
const smo74258 = new VF.StaveTie({ first_note: null, last_note: smo63908, 
          firstNote: null, lastNote: smo63908, first_indices: [0], last_indices: [0]});
smo74258.setContext(context).draw();
// modifier from 0-55-1-1 to 0-55-1-2
const smo74259 = new VF.StaveTie({ first_note: smo63885, last_note: smo63886, 
          firstNote: smo63885, lastNote: smo63886, first_indices: [0], last_indices: [0]});
smo74259.setContext(context).draw();
// modifier from 0-56-1-0 to 0-56-1-1
const smo74260 = new VF.StaveTie({ first_note: smo63924, last_note: smo63925, 
          firstNote: smo63924, lastNote: smo63925, first_indices: [0], last_indices: [0]});
smo74260.setContext(context).draw();
// modifier from 0-57-1-1 to 0-57-1-2
const smo74261 = new VF.StaveTie({ first_note: smo63952, last_note: smo63953, 
          firstNote: smo63952, lastNote: smo63953, first_indices: [0], last_indices: [0]});
smo74261.setContext(context).draw();
// modifier from 0-59-0-2 to 0-59-0-3
const smo74262 = new VF.StaveTie({ first_note: smo63999, last_note: smo64000, 
          firstNote: smo63999, lastNote: smo64000, first_indices: [0], last_indices: [0]});
smo74262.setContext(context).draw();
// modifier from 0-60-0-8 to 0-61-0-0
const smo74263 = new VF.StaveTie({ first_note: smo64041, last_note: smo64067, 
          firstNote: smo64041, lastNote: smo64067, first_indices: [0], last_indices: [0]});
smo74263.setContext(context).draw();
// modifier from 0-60-1-8 to 0-60-1-9
const smo74264 = new VF.StaveTie({ first_note: smo64050, last_note: smo64051, 
          firstNote: smo64050, lastNote: smo64051, first_indices: [0], last_indices: [0]});
smo74264.setContext(context).draw();
// modifier from 0-58-1-2 to 0-58-1-3
const smo74265 = new VF.StaveTie({ first_note: smo63978, last_note: smo63979, 
          firstNote: smo63978, lastNote: smo63979, first_indices: [0], last_indices: [0]});
smo74265.setContext(context).draw();
// modifier from 1-49-0-3 to 1-49-0-4
const smo74266 = new VF.StaveTie({ first_note: smo68727, last_note: smo68728, 
          firstNote: smo68727, lastNote: smo68728, first_indices: [0], last_indices: [0]});
smo74266.setContext(context).draw();
// modifier from 1-57-0-2 to 1-57-0-3
const smo74267 = new VF.StaveTie({ first_note: smo68974, last_note: smo68975, 
          firstNote: smo68974, lastNote: smo68975, first_indices: [0], last_indices: [0]});
smo74267.setContext(context).draw();
// modifier from 1-57-0-5 to 1-58-0-0
const smo74268 = new VF.StaveTie({ first_note: smo68977, last_note: smo69006, 
          firstNote: smo68977, lastNote: smo69006, first_indices: [0], last_indices: [0]});
smo74268.setContext(context).draw();
}
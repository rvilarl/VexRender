// @@ Well-Tempered Clavier p 1/6  by Bach
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
const fmtsmo621760 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo62176v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62176v0ar = [];
const smo62148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62148.setAttribute('id', 'smo62148');
smo62176v0ar.push(smo62148);
const smo62150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62150.setAttribute('id', 'smo62150');
smo62176v0ar.push(smo62150);
const smo62151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62151.setAttribute('id', 'smo62151');
smo62176v0ar.push(smo62151);
const smo62152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62152.setAttribute('id', 'smo62152');
smo62176v0ar.push(smo62152);
const smo62153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62153.setAttribute('id', 'smo62153');
smo62176v0ar.push(smo62153);
const smo62154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62154.setAttribute('id', 'smo62154');
smo62176v0ar.push(smo62154);
const smo62155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62155.setAttribute('id', 'smo62155');
smo62176v0ar.push(smo62155);
const smo62156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62156.setAttribute('id', 'smo62156');
smo62176v0ar.push(smo62156);
const smo62157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62157.setAttribute('id', 'smo62157');
smo62176v0ar.push(smo62157);
const smo62158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62158.setAttribute('id', 'smo62158');
smo62176v0ar.push(smo62158);
const smo62159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62159.setAttribute('id', 'smo62159');
smo62176v0ar.push(smo62159);
const smo62160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62160.setAttribute('id', 'smo62160');
smo62176v0ar.push(smo62160);
const smo62161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62161.setAttribute('id', 'smo62161');
smo62176v0ar.push(smo62161);
const smo62162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62162.setAttribute('id', 'smo62162');
smo62176v0ar.push(smo62162);
smo62176v0.addTickables(smo62176v0ar)
fmtsmo621760.joinVoices([smo62176v0]);
const fmtsmo676170 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo67617v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67617v0ar = [];
const smo67596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67596.setAttribute('id', 'smo67596');
smo67617v0ar.push(smo67596);
const smo67597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67597.setAttribute('id', 'smo67597');
smo67597.addModifier(new VF.Dot(), 0);
smo67617v0ar.push(smo67597);
const smo67598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67598.setAttribute('id', 'smo67598');
smo67617v0ar.push(smo67598);
const smo67599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67599.setAttribute('id', 'smo67599');
smo67617v0ar.push(smo67599);
const smo67600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67600.setAttribute('id', 'smo67600');
smo67600.addModifier(new VF.Dot(), 0);
smo67617v0ar.push(smo67600);
const smo67601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67601.setAttribute('id', 'smo67601');
smo67617v0ar.push(smo67601);
smo67617v0.addTickables(smo67617v0ar)
fmtsmo676170.joinVoices([smo67617v0]);
const smo67617v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67617v1ar = [];
const smo67602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67602.setAttribute('id', 'smo67602');
smo67602.setStyle({ fillStyle: "#115511" });
smo67617v1ar.push(smo67602);
const smo67603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67603.setAttribute('id', 'smo67603');
smo67603.setStyle({ fillStyle: "#115511" });
smo67617v1ar.push(smo67603);
smo67617v1.addTickables(smo67617v1ar)
fmtsmo676170.joinVoices([smo67617v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71533 = smo62150.getStemDirection();
smo62150.setStemDirection(dirsmo71533);
smo62151.setStemDirection(dirsmo71533);
const smo71533 = new VF.Beam([smo62150,smo62151]);
const dirsmo71534 = smo62152.getStemDirection();
smo62152.setStemDirection(dirsmo71534);
smo62153.setStemDirection(dirsmo71534);
smo62154.setStemDirection(dirsmo71534);
smo62155.setStemDirection(dirsmo71534);
const smo71534 = new VF.Beam([smo62152,smo62153,smo62154,smo62155]);
const dirsmo71535 = smo62157.getStemDirection();
smo62157.setStemDirection(dirsmo71535);
smo62158.setStemDirection(dirsmo71535);
const smo71535 = new VF.Beam([smo62157,smo62158]);
const dirsmo71536 = smo62159.getStemDirection();
smo62159.setStemDirection(dirsmo71536);
smo62160.setStemDirection(dirsmo71536);
smo62161.setStemDirection(dirsmo71536);
smo62162.setStemDirection(dirsmo71536);
const smo71536 = new VF.Beam([smo62159,smo62160,smo62161,smo62162]);
 
// formatting measures in staff group smo60952
fmtsmo621760.format([smo62176v0,smo67617v0,smo67617v1], 507);
const stavesmo62176 = new VF.Stave(90, 294, 589);
stavesmo62176.setAttribute('id', 'stavesmo62176');
stavesmo62176.setBegBarType(1);
stavesmo62176.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":112,"name":"Moderato"}'), -1 * 18);
stavesmo62176.addClef('treble');
stavesmo62176.addTimeSignature('4/4');
stavesmo62176.setContext(context);
stavesmo62176.draw();
smo62176v0.draw(context, stavesmo62176);
smo71533.setContext(context);
smo71533.draw();
smo71534.setContext(context);
smo71534.draw();
smo71535.setContext(context);
smo71535.draw();
smo71536.setContext(context);
smo71536.draw();
const stavesmo67617 = new VF.Stave(90, 498, 589);
stavesmo67617.setAttribute('id', 'stavesmo67617');
stavesmo67617.setBegBarType(1);
stavesmo67617.addClef('treble');
stavesmo67617.addTimeSignature('4/4');
stavesmo67617.setContext(context);
stavesmo67617.draw();
smo67617v0.draw(context, stavesmo67617);
smo67617v1.draw(context, stavesmo67617);
const leftsmo60952stavesmo621761 = new VF.StaveConnector(stavesmo62176, stavesmo67617).setType(3);
leftsmo60952stavesmo621761.setContext(context).draw();
const fmtsmo622041 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo62204v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62204v0ar = [];
const smo62177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62177.setAttribute('id', 'smo62177');
smo62204v0ar.push(smo62177);
const smo62178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62178.setAttribute('id', 'smo62178');
smo62204v0ar.push(smo62178);
const smo62179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62179.setAttribute('id', 'smo62179');
smo62204v0ar.push(smo62179);
const smo62180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62180.setAttribute('id', 'smo62180');
smo62204v0ar.push(smo62180);
const smo62181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62181.setAttribute('id', 'smo62181');
smo62204v0ar.push(smo62181);
const smo62182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62182.setAttribute('id', 'smo62182');
smo62204v0ar.push(smo62182);
const smo62183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62183.setAttribute('id', 'smo62183');
smo62204v0ar.push(smo62183);
const smo62184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62184.setAttribute('id', 'smo62184');
smo62204v0ar.push(smo62184);
const smo62185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62185.setAttribute('id', 'smo62185');
smo62204v0ar.push(smo62185);
const smo62186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62186.setAttribute('id', 'smo62186');
smo62204v0ar.push(smo62186);
const smo62187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62187.setAttribute('id', 'smo62187');
smo62204v0ar.push(smo62187);
const smo62188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62188.setAttribute('id', 'smo62188');
smo62204v0ar.push(smo62188);
const smo62189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62189.setAttribute('id', 'smo62189');
smo62204v0ar.push(smo62189);
const smo62190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62190.setAttribute('id', 'smo62190');
smo62204v0ar.push(smo62190);
smo62204v0.addTickables(smo62204v0ar)
fmtsmo622041.joinVoices([smo62204v0]);
const fmtsmo676391 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo67639v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67639v0ar = [];
const smo67618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo67618.setAttribute('id', 'smo67618');
smo67639v0ar.push(smo67618);
const smo67619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo67619.setAttribute('id', 'smo67619');
smo67619.addModifier(new VF.Dot(), 0);
smo67639v0ar.push(smo67619);
const smo67620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo67620.setAttribute('id', 'smo67620');
smo67639v0ar.push(smo67620);
const smo67621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo67621.setAttribute('id', 'smo67621');
smo67639v0ar.push(smo67621);
const smo67622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo67622.setAttribute('id', 'smo67622');
smo67622.addModifier(new VF.Dot(), 0);
smo67639v0ar.push(smo67622);
const smo67623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo67623.setAttribute('id', 'smo67623');
smo67639v0ar.push(smo67623);
smo67639v0.addTickables(smo67639v0ar)
fmtsmo676391.joinVoices([smo67639v0]);
const smo67639v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67639v1ar = [];
const smo67624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67624.setAttribute('id', 'smo67624');
smo67624.setStyle({ fillStyle: "#115511" });
smo67639v1ar.push(smo67624);
const smo67625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67625.setAttribute('id', 'smo67625');
smo67625.setStyle({ fillStyle: "#115511" });
smo67639v1ar.push(smo67625);
smo67639v1.addTickables(smo67639v1ar)
fmtsmo676391.joinVoices([smo67639v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71541 = smo62178.getStemDirection();
smo62178.setStemDirection(dirsmo71541);
smo62179.setStemDirection(dirsmo71541);
const smo71541 = new VF.Beam([smo62178,smo62179]);
const dirsmo71542 = smo62180.getStemDirection();
smo62180.setStemDirection(dirsmo71542);
smo62181.setStemDirection(dirsmo71542);
smo62182.setStemDirection(dirsmo71542);
smo62183.setStemDirection(dirsmo71542);
const smo71542 = new VF.Beam([smo62180,smo62181,smo62182,smo62183]);
const dirsmo71543 = smo62185.getStemDirection();
smo62185.setStemDirection(dirsmo71543);
smo62186.setStemDirection(dirsmo71543);
const smo71543 = new VF.Beam([smo62185,smo62186]);
const dirsmo71544 = smo62187.getStemDirection();
smo62187.setStemDirection(dirsmo71544);
smo62188.setStemDirection(dirsmo71544);
smo62189.setStemDirection(dirsmo71544);
smo62190.setStemDirection(dirsmo71544);
const smo71544 = new VF.Beam([smo62187,smo62188,smo62189,smo62190]);
 
// formatting measures in staff group smo60952
fmtsmo622041.format([smo62204v0,smo67639v0,smo67639v1], 518);
const stavesmo62204 = new VF.Stave(679, 294, 566);
stavesmo62204.setAttribute('id', 'stavesmo62204');
stavesmo62204.setBegBarType(VF.Barline.type.NONE);
stavesmo62204.setContext(context);
stavesmo62204.draw();
smo62204v0.draw(context, stavesmo62204);
smo71541.setContext(context);
smo71541.draw();
smo71542.setContext(context);
smo71542.draw();
smo71543.setContext(context);
smo71543.draw();
smo71544.setContext(context);
smo71544.draw();
const stavesmo67639 = new VF.Stave(679, 498, 566);
stavesmo67639.setAttribute('id', 'stavesmo67639');
stavesmo67639.setBegBarType(VF.Barline.type.NONE);
stavesmo67639.addClef('bass');
stavesmo67639.setContext(context);
stavesmo67639.draw();
smo67639v0.draw(context, stavesmo67639);
smo67639v1.draw(context, stavesmo67639);
const fmtsmo622362 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo62236v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62236v0ar = [];
const smo62205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62205.setAttribute('id', 'smo62205');
smo62236v0ar.push(smo62205);
const smo62206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62206.setAttribute('id', 'smo62206');
smo62236v0ar.push(smo62206);
const smo62207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62207.setAttribute('id', 'smo62207');
smo62236v0ar.push(smo62207);
const smo62208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62208.setAttribute('id', 'smo62208');
smo62236v0ar.push(smo62208);
const smo62209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62209.setAttribute('id', 'smo62209');
smo62236v0ar.push(smo62209);
const smo62210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62210.setAttribute('id', 'smo62210');
smo62236v0ar.push(smo62210);
const smo62211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62211.setAttribute('id', 'smo62211');
smo62236v0ar.push(smo62211);
const smo62212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62212.setAttribute('id', 'smo62212');
smo62236v0ar.push(smo62212);
const smo62213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62213.setAttribute('id', 'smo62213');
smo62236v0ar.push(smo62213);
const smo62214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62214.setAttribute('id', 'smo62214');
smo62236v0ar.push(smo62214);
const smo62215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62215.setAttribute('id', 'smo62215');
smo62236v0ar.push(smo62215);
const smo62216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62216.setAttribute('id', 'smo62216');
smo62236v0ar.push(smo62216);
const smo62217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62217.setAttribute('id', 'smo62217');
smo62236v0ar.push(smo62217);
const smo62218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo62218.setAttribute('id', 'smo62218');
smo62236v0ar.push(smo62218);
smo62236v0.addTickables(smo62236v0ar)
fmtsmo622362.joinVoices([smo62236v0]);
const smo62236v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62236v1ar = [];
const smo62219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62219.setAttribute('id', 'smo62219');
smo62219.setStyle({ fillStyle: '#aaaaaa7f' });
smo62236v1ar.push(smo62219);
const smo62220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62220.setAttribute('id', 'smo62220');
smo62220.setStyle({ fillStyle: '#aaaaaa7f' });
smo62220.addModifier(new VF.Dot(), 0);
smo62220.addModifier(new VF.Dot(), 0);
smo62236v1ar.push(smo62220);
const smo62221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62221.setAttribute('id', 'smo62221');
smo62221.setStyle({ fillStyle: '#aaaaaa7f' });
smo62236v1ar.push(smo62221);
const smo62222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62222.setAttribute('id', 'smo62222');
smo62222.setStyle({ fillStyle: '#aaaaaa7f' });
smo62222.addModifier(new VF.Dot(), 0);
smo62222.addModifier(new VF.Dot(), 0);
smo62236v1ar.push(smo62222);
smo62236v1.addTickables(smo62236v1ar)
fmtsmo622362.joinVoices([smo62236v1]);
const fmtsmo676612 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo67661v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67661v0ar = [];
const smo67640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/6/r"]}'))
smo67640.setAttribute('id', 'smo67640');
smo67661v0ar.push(smo67640);
const smo67641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67641.setAttribute('id', 'smo67641');
smo67641.addModifier(new VF.Dot(), 0);
smo67661v0ar.push(smo67641);
const smo67642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67642.setAttribute('id', 'smo67642');
smo67661v0ar.push(smo67642);
const smo67643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["cn/7/r"]}'))
smo67643.setAttribute('id', 'smo67643');
smo67661v0ar.push(smo67643);
const smo67644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67644.setAttribute('id', 'smo67644');
smo67644.addModifier(new VF.Dot(), 0);
smo67661v0ar.push(smo67644);
const smo67645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67645.setAttribute('id', 'smo67645');
smo67661v0ar.push(smo67645);
smo67661v0.addTickables(smo67661v0ar)
fmtsmo676612.joinVoices([smo67661v0]);
const smo67661v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67661v1ar = [];
const smo67646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67646.setAttribute('id', 'smo67646');
smo67646.setStyle({ fillStyle: "#115511" });
smo67661v1ar.push(smo67646);
const smo67647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67647.setAttribute('id', 'smo67647');
smo67647.setStyle({ fillStyle: "#115511" });
smo67661v1ar.push(smo67647);
smo67661v1.addTickables(smo67661v1ar)
fmtsmo676612.joinVoices([smo67661v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71549 = smo62206.getStemDirection();
smo62206.setStemDirection(dirsmo71549);
smo62207.setStemDirection(dirsmo71549);
const smo71549 = new VF.Beam([smo62206,smo62207]);
const dirsmo71550 = smo62208.getStemDirection();
smo62208.setStemDirection(dirsmo71550);
smo62209.setStemDirection(dirsmo71550);
smo62210.setStemDirection(dirsmo71550);
smo62211.setStemDirection(dirsmo71550);
const smo71550 = new VF.Beam([smo62208,smo62209,smo62210,smo62211]);
const dirsmo71551 = smo62213.getStemDirection();
smo62213.setStemDirection(dirsmo71551);
smo62214.setStemDirection(dirsmo71551);
const smo71551 = new VF.Beam([smo62213,smo62214]);
const dirsmo71552 = smo62215.getStemDirection();
smo62215.setStemDirection(dirsmo71552);
smo62216.setStemDirection(dirsmo71552);
smo62217.setStemDirection(dirsmo71552);
smo62218.setStemDirection(dirsmo71552);
const smo71552 = new VF.Beam([smo62215,smo62216,smo62217,smo62218]);
 
// formatting measures in staff group smo60952
fmtsmo622362.format([smo62236v0,smo62236v1,smo67661v0,smo67661v1], 548);
const stavesmo62236 = new VF.Stave(1245, 294, 562);
stavesmo62236.setAttribute('id', 'stavesmo62236');
stavesmo62236.setBegBarType(VF.Barline.type.NONE);
stavesmo62236.setContext(context);
stavesmo62236.draw();
smo62236v0.draw(context, stavesmo62236);
smo62236v1.draw(context, stavesmo62236);
smo71549.setContext(context);
smo71549.draw();
smo71550.setContext(context);
smo71550.draw();
smo71551.setContext(context);
smo71551.draw();
smo71552.setContext(context);
smo71552.draw();
const stavesmo67661 = new VF.Stave(1245, 498, 562);
stavesmo67661.setAttribute('id', 'stavesmo67661');
stavesmo67661.setBegBarType(VF.Barline.type.NONE);
stavesmo67661.setContext(context);
stavesmo67661.draw();
smo67661v0.draw(context, stavesmo67661);
smo67661v1.draw(context, stavesmo67661);
const rightsmo60952stavesmo622361 = new VF.StaveConnector(stavesmo62236, stavesmo67661).setType(0);
rightsmo60952stavesmo622361.setContext(context).draw();
const fmtsmo622683 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo62268v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62268v0ar = [];
const smo62237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62237.setAttribute('id', 'smo62237');
smo62268v0ar.push(smo62237);
const smo62238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62238.setAttribute('id', 'smo62238');
smo62268v0ar.push(smo62238);
const smo62239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62239.setAttribute('id', 'smo62239');
smo62268v0ar.push(smo62239);
const smo62240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62240.setAttribute('id', 'smo62240');
smo62268v0ar.push(smo62240);
const smo62241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62241.setAttribute('id', 'smo62241');
smo62268v0ar.push(smo62241);
const smo62242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62242.setAttribute('id', 'smo62242');
smo62268v0ar.push(smo62242);
const smo62243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62243.setAttribute('id', 'smo62243');
smo62268v0ar.push(smo62243);
const smo62244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62244.setAttribute('id', 'smo62244');
smo62268v0ar.push(smo62244);
const smo62245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62245.setAttribute('id', 'smo62245');
smo62268v0ar.push(smo62245);
const smo62246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62246.setAttribute('id', 'smo62246');
smo62268v0ar.push(smo62246);
const smo62247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62247.setAttribute('id', 'smo62247');
smo62268v0ar.push(smo62247);
const smo62248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62248.setAttribute('id', 'smo62248');
smo62268v0ar.push(smo62248);
const smo62249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62249.setAttribute('id', 'smo62249');
smo62268v0ar.push(smo62249);
const smo62250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62250.setAttribute('id', 'smo62250');
smo62268v0ar.push(smo62250);
smo62268v0.addTickables(smo62268v0ar)
fmtsmo622683.joinVoices([smo62268v0]);
const smo62268v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62268v1ar = [];
const smo62251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62251.setAttribute('id', 'smo62251');
smo62251.setStyle({ fillStyle: '#aaaaaa7f' });
smo62268v1ar.push(smo62251);
const smo62252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62252.setAttribute('id', 'smo62252');
smo62252.setStyle({ fillStyle: '#aaaaaa7f' });
smo62252.addModifier(new VF.Dot(), 0);
smo62252.addModifier(new VF.Dot(), 0);
smo62268v1ar.push(smo62252);
const smo62253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62253.setAttribute('id', 'smo62253');
smo62253.setStyle({ fillStyle: '#aaaaaa7f' });
smo62268v1ar.push(smo62253);
const smo62254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62254.setAttribute('id', 'smo62254');
smo62254.setStyle({ fillStyle: '#aaaaaa7f' });
smo62254.addModifier(new VF.Dot(), 0);
smo62254.addModifier(new VF.Dot(), 0);
smo62268v1ar.push(smo62254);
smo62268v1.addTickables(smo62268v1ar)
fmtsmo622683.joinVoices([smo62268v1]);
const fmtsmo676833 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo67683v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67683v0ar = [];
const smo67662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67662.setAttribute('id', 'smo67662');
smo67683v0ar.push(smo67662);
const smo67663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67663.setAttribute('id', 'smo67663');
smo67663.addModifier(new VF.Dot(), 0);
smo67683v0ar.push(smo67663);
const smo67664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67664.setAttribute('id', 'smo67664');
smo67683v0ar.push(smo67664);
const smo67665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67665.setAttribute('id', 'smo67665');
smo67683v0ar.push(smo67665);
const smo67666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67666.setAttribute('id', 'smo67666');
smo67666.addModifier(new VF.Dot(), 0);
smo67683v0ar.push(smo67666);
const smo67667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67667.setAttribute('id', 'smo67667');
smo67683v0ar.push(smo67667);
smo67683v0.addTickables(smo67683v0ar)
fmtsmo676833.joinVoices([smo67683v0]);
const smo67683v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67683v1ar = [];
const smo67668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67668.setAttribute('id', 'smo67668');
smo67668.setStyle({ fillStyle: "#115511" });
smo67683v1ar.push(smo67668);
const smo67669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67669.setAttribute('id', 'smo67669');
smo67669.setStyle({ fillStyle: "#115511" });
smo67683v1ar.push(smo67669);
smo67683v1.addTickables(smo67683v1ar)
fmtsmo676833.joinVoices([smo67683v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71565 = smo62238.getStemDirection();
smo62238.setStemDirection(dirsmo71565);
smo62239.setStemDirection(dirsmo71565);
const smo71565 = new VF.Beam([smo62238,smo62239]);
const dirsmo71566 = smo62240.getStemDirection();
smo62240.setStemDirection(dirsmo71566);
smo62241.setStemDirection(dirsmo71566);
smo62242.setStemDirection(dirsmo71566);
smo62243.setStemDirection(dirsmo71566);
const smo71566 = new VF.Beam([smo62240,smo62241,smo62242,smo62243]);
const dirsmo71567 = smo62245.getStemDirection();
smo62245.setStemDirection(dirsmo71567);
smo62246.setStemDirection(dirsmo71567);
const smo71567 = new VF.Beam([smo62245,smo62246]);
const dirsmo71568 = smo62247.getStemDirection();
smo62247.setStemDirection(dirsmo71568);
smo62248.setStemDirection(dirsmo71568);
smo62249.setStemDirection(dirsmo71568);
smo62250.setStemDirection(dirsmo71568);
const smo71568 = new VF.Beam([smo62247,smo62248,smo62249,smo62250]);
 
// formatting measures in staff group smo60952
fmtsmo622683.format([smo62268v0,smo62268v1,smo67683v0,smo67683v1], 527);
const stavesmo62268 = new VF.Stave(90, 692, 585);
stavesmo62268.setAttribute('id', 'stavesmo62268');
stavesmo62268.setBegBarType(1);
stavesmo62268.addClef('treble');
stavesmo62268.setContext(context);
stavesmo62268.draw();
smo62268v0.draw(context, stavesmo62268);
smo62268v1.draw(context, stavesmo62268);
smo71565.setContext(context);
smo71565.draw();
smo71566.setContext(context);
smo71566.draw();
smo71567.setContext(context);
smo71567.draw();
smo71568.setContext(context);
smo71568.draw();
const stavesmo67683 = new VF.Stave(90, 766, 585);
stavesmo67683.setAttribute('id', 'stavesmo67683');
stavesmo67683.setBegBarType(1);
stavesmo67683.addClef('treble');
stavesmo67683.setContext(context);
stavesmo67683.draw();
smo67683v0.draw(context, stavesmo67683);
smo67683v1.draw(context, stavesmo67683);
const leftsmo60952stavesmo622681 = new VF.StaveConnector(stavesmo62268, stavesmo67683).setType(3);
leftsmo60952stavesmo622681.setContext(context).draw();
const fmtsmo623004 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo62300v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62300v0ar = [];
const smo62269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62269.setAttribute('id', 'smo62269');
smo62300v0ar.push(smo62269);
const smo62270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62270.setAttribute('id', 'smo62270');
smo62300v0ar.push(smo62270);
const smo62271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62271.setAttribute('id', 'smo62271');
smo62300v0ar.push(smo62271);
const smo62272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo62272.setAttribute('id', 'smo62272');
smo62300v0ar.push(smo62272);
const smo62273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62273.setAttribute('id', 'smo62273');
smo62300v0ar.push(smo62273);
const smo62274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62274.setAttribute('id', 'smo62274');
smo62300v0ar.push(smo62274);
const smo62275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo62275.setAttribute('id', 'smo62275');
smo62300v0ar.push(smo62275);
const smo62276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62276.setAttribute('id', 'smo62276');
smo62300v0ar.push(smo62276);
const smo62277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62277.setAttribute('id', 'smo62277');
smo62300v0ar.push(smo62277);
const smo62278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62278.setAttribute('id', 'smo62278');
smo62300v0ar.push(smo62278);
const smo62279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo62279.setAttribute('id', 'smo62279');
smo62300v0ar.push(smo62279);
const smo62280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62280.setAttribute('id', 'smo62280');
smo62300v0ar.push(smo62280);
const smo62281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo62281.setAttribute('id', 'smo62281');
smo62300v0ar.push(smo62281);
const smo62282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo62282.setAttribute('id', 'smo62282');
smo62300v0ar.push(smo62282);
smo62300v0.addTickables(smo62300v0ar)
fmtsmo623004.joinVoices([smo62300v0]);
const smo62300v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62300v1ar = [];
const smo62283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62283.setAttribute('id', 'smo62283');
smo62283.setStyle({ fillStyle: '#aaaaaa7f' });
smo62300v1ar.push(smo62283);
const smo62284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62284.setAttribute('id', 'smo62284');
smo62284.setStyle({ fillStyle: '#aaaaaa7f' });
smo62284.addModifier(new VF.Dot(), 0);
smo62284.addModifier(new VF.Dot(), 0);
smo62300v1ar.push(smo62284);
const smo62285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62285.setAttribute('id', 'smo62285');
smo62285.setStyle({ fillStyle: '#aaaaaa7f' });
smo62300v1ar.push(smo62285);
const smo62286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62286.setAttribute('id', 'smo62286');
smo62286.setStyle({ fillStyle: '#aaaaaa7f' });
smo62286.addModifier(new VF.Dot(), 0);
smo62286.addModifier(new VF.Dot(), 0);
smo62300v1ar.push(smo62286);
smo62300v1.addTickables(smo62300v1ar)
fmtsmo623004.joinVoices([smo62300v1]);
const fmtsmo677054 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo67705v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67705v0ar = [];
const smo67684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67684.setAttribute('id', 'smo67684');
smo67705v0ar.push(smo67684);
const smo67685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67685.setAttribute('id', 'smo67685');
smo67685.addModifier(new VF.Dot(), 0);
smo67705v0ar.push(smo67685);
const smo67686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67686.setAttribute('id', 'smo67686');
smo67705v0ar.push(smo67686);
const smo67687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67687.setAttribute('id', 'smo67687');
smo67705v0ar.push(smo67687);
const smo67688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67688.setAttribute('id', 'smo67688');
smo67688.addModifier(new VF.Dot(), 0);
smo67705v0ar.push(smo67688);
const smo67689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo67689.setAttribute('id', 'smo67689');
smo67705v0ar.push(smo67689);
smo67705v0.addTickables(smo67705v0ar)
fmtsmo677054.joinVoices([smo67705v0]);
const smo67705v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67705v1ar = [];
const smo67690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67690.setAttribute('id', 'smo67690');
smo67690.setStyle({ fillStyle: "#115511" });
smo67705v1ar.push(smo67690);
const smo67691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67691.setAttribute('id', 'smo67691');
smo67691.setStyle({ fillStyle: "#115511" });
smo67705v1ar.push(smo67691);
smo67705v1.addTickables(smo67705v1ar)
fmtsmo677054.joinVoices([smo67705v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71573 = smo62270.getStemDirection();
smo62270.setStemDirection(dirsmo71573);
smo62271.setStemDirection(dirsmo71573);
const smo71573 = new VF.Beam([smo62270,smo62271]);
const dirsmo71574 = smo62272.getStemDirection();
smo62272.setStemDirection(dirsmo71574);
smo62273.setStemDirection(dirsmo71574);
smo62274.setStemDirection(dirsmo71574);
smo62275.setStemDirection(dirsmo71574);
const smo71574 = new VF.Beam([smo62272,smo62273,smo62274,smo62275]);
const dirsmo71575 = smo62277.getStemDirection();
smo62277.setStemDirection(dirsmo71575);
smo62278.setStemDirection(dirsmo71575);
const smo71575 = new VF.Beam([smo62277,smo62278]);
const dirsmo71576 = smo62279.getStemDirection();
smo62279.setStemDirection(dirsmo71576);
smo62280.setStemDirection(dirsmo71576);
smo62281.setStemDirection(dirsmo71576);
smo62282.setStemDirection(dirsmo71576);
const smo71576 = new VF.Beam([smo62279,smo62280,smo62281,smo62282]);
 
// formatting measures in staff group smo60952
fmtsmo623004.format([smo62300v0,smo62300v1,smo67705v0,smo67705v1], 527);
const stavesmo62300 = new VF.Stave(675, 692, 541);
stavesmo62300.setAttribute('id', 'stavesmo62300');
stavesmo62300.setBegBarType(VF.Barline.type.NONE);
stavesmo62300.setContext(context);
stavesmo62300.draw();
smo62300v0.draw(context, stavesmo62300);
smo62300v1.draw(context, stavesmo62300);
smo71573.setContext(context);
smo71573.draw();
smo71574.setContext(context);
smo71574.draw();
smo71575.setContext(context);
smo71575.draw();
smo71576.setContext(context);
smo71576.draw();
const stavesmo67705 = new VF.Stave(675, 766, 541);
stavesmo67705.setAttribute('id', 'stavesmo67705');
stavesmo67705.setBegBarType(VF.Barline.type.NONE);
stavesmo67705.setContext(context);
stavesmo67705.draw();
smo67705v0.draw(context, stavesmo67705);
smo67705v1.draw(context, stavesmo67705);
const fmtsmo623325 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo62332v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62332v0ar = [];
const smo62301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62301.setAttribute('id', 'smo62301');
smo62332v0ar.push(smo62301);
const smo62302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62302.setAttribute('id', 'smo62302');
const smo623020acc = new VF.Accidental('#');
smo62302.addModifier(smo623020acc, 0);
smo62332v0ar.push(smo62302);
const smo62303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62303.setAttribute('id', 'smo62303');
smo62332v0ar.push(smo62303);
const smo62304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62304.setAttribute('id', 'smo62304');
smo62332v0ar.push(smo62304);
const smo62305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62305.setAttribute('id', 'smo62305');
smo62332v0ar.push(smo62305);
const smo62306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62306.setAttribute('id', 'smo62306');
smo62332v0ar.push(smo62306);
const smo62307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62307.setAttribute('id', 'smo62307');
smo62332v0ar.push(smo62307);
const smo62308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62308.setAttribute('id', 'smo62308');
smo62332v0ar.push(smo62308);
const smo62309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62309.setAttribute('id', 'smo62309');
smo62332v0ar.push(smo62309);
const smo62310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62310.setAttribute('id', 'smo62310');
smo62332v0ar.push(smo62310);
const smo62311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62311.setAttribute('id', 'smo62311');
smo62332v0ar.push(smo62311);
const smo62312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62312.setAttribute('id', 'smo62312');
smo62332v0ar.push(smo62312);
const smo62313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62313.setAttribute('id', 'smo62313');
smo62332v0ar.push(smo62313);
const smo62314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62314.setAttribute('id', 'smo62314');
smo62332v0ar.push(smo62314);
smo62332v0.addTickables(smo62332v0ar)
fmtsmo623325.joinVoices([smo62332v0]);
const smo62332v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62332v1ar = [];
const smo62315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62315.setAttribute('id', 'smo62315');
smo62315.setStyle({ fillStyle: '#aaaaaa7f' });
smo62332v1ar.push(smo62315);
const smo62316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62316.setAttribute('id', 'smo62316');
smo62316.setStyle({ fillStyle: '#aaaaaa7f' });
smo62316.addModifier(new VF.Dot(), 0);
smo62316.addModifier(new VF.Dot(), 0);
smo62332v1ar.push(smo62316);
const smo62317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62317.setAttribute('id', 'smo62317');
smo62317.setStyle({ fillStyle: '#aaaaaa7f' });
smo62332v1ar.push(smo62317);
const smo62318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62318.setAttribute('id', 'smo62318');
smo62318.setStyle({ fillStyle: '#aaaaaa7f' });
smo62318.addModifier(new VF.Dot(), 0);
smo62318.addModifier(new VF.Dot(), 0);
smo62332v1ar.push(smo62318);
smo62332v1.addTickables(smo62332v1ar)
fmtsmo623325.joinVoices([smo62332v1]);
const fmtsmo677275 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo67727v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67727v0ar = [];
const smo67706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67706.setAttribute('id', 'smo67706');
smo67727v0ar.push(smo67706);
const smo67707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67707.setAttribute('id', 'smo67707');
smo67707.addModifier(new VF.Dot(), 0);
smo67727v0ar.push(smo67707);
const smo67708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67708.setAttribute('id', 'smo67708');
smo67727v0ar.push(smo67708);
const smo67709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67709.setAttribute('id', 'smo67709');
smo67727v0ar.push(smo67709);
const smo67710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67710.setAttribute('id', 'smo67710');
smo67710.addModifier(new VF.Dot(), 0);
smo67727v0ar.push(smo67710);
const smo67711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67711.setAttribute('id', 'smo67711');
smo67727v0ar.push(smo67711);
smo67727v0.addTickables(smo67727v0ar)
fmtsmo677275.joinVoices([smo67727v0]);
const smo67727v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67727v1ar = [];
const smo67712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67712.setAttribute('id', 'smo67712');
smo67712.setStyle({ fillStyle: "#115511" });
smo67727v1ar.push(smo67712);
const smo67713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67713.setAttribute('id', 'smo67713');
smo67713.setStyle({ fillStyle: "#115511" });
smo67727v1ar.push(smo67713);
smo67727v1.addTickables(smo67727v1ar)
fmtsmo677275.joinVoices([smo67727v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71581 = smo62302.getStemDirection();
smo62302.setStemDirection(dirsmo71581);
smo62303.setStemDirection(dirsmo71581);
const smo71581 = new VF.Beam([smo62302,smo62303]);
const dirsmo71582 = smo62304.getStemDirection();
smo62304.setStemDirection(dirsmo71582);
smo62305.setStemDirection(dirsmo71582);
smo62306.setStemDirection(dirsmo71582);
smo62307.setStemDirection(dirsmo71582);
const smo71582 = new VF.Beam([smo62304,smo62305,smo62306,smo62307]);
const dirsmo71583 = smo62309.getStemDirection();
smo62309.setStemDirection(dirsmo71583);
smo62310.setStemDirection(dirsmo71583);
const smo71583 = new VF.Beam([smo62309,smo62310]);
const dirsmo71584 = smo62311.getStemDirection();
smo62311.setStemDirection(dirsmo71584);
smo62312.setStemDirection(dirsmo71584);
smo62313.setStemDirection(dirsmo71584);
smo62314.setStemDirection(dirsmo71584);
const smo71584 = new VF.Beam([smo62311,smo62312,smo62313,smo62314]);
 
// formatting measures in staff group smo60952
fmtsmo623325.format([smo62332v0,smo62332v1,smo67727v0,smo67727v1], 577);
const stavesmo62332 = new VF.Stave(1216, 692, 591);
stavesmo62332.setAttribute('id', 'stavesmo62332');
stavesmo62332.setBegBarType(VF.Barline.type.NONE);
stavesmo62332.setContext(context);
stavesmo62332.draw();
smo62332v0.draw(context, stavesmo62332);
smo62332v1.draw(context, stavesmo62332);
smo71581.setContext(context);
smo71581.draw();
smo71582.setContext(context);
smo71582.draw();
smo71583.setContext(context);
smo71583.draw();
smo71584.setContext(context);
smo71584.draw();
const stavesmo67727 = new VF.Stave(1216, 766, 591);
stavesmo67727.setAttribute('id', 'stavesmo67727');
stavesmo67727.setBegBarType(VF.Barline.type.NONE);
stavesmo67727.setContext(context);
stavesmo67727.draw();
smo67727v0.draw(context, stavesmo67727);
smo67727v1.draw(context, stavesmo67727);
const rightsmo60952stavesmo623321 = new VF.StaveConnector(stavesmo62332, stavesmo67727).setType(0);
rightsmo60952stavesmo623321.setContext(context).draw();
const fmtsmo623646 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo62364v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62364v0ar = [];
const smo62333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62333.setAttribute('id', 'smo62333');
smo62364v0ar.push(smo62333);
const smo62334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62334.setAttribute('id', 'smo62334');
smo62364v0ar.push(smo62334);
const smo62335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62335.setAttribute('id', 'smo62335');
smo62364v0ar.push(smo62335);
const smo62336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo62336.setAttribute('id', 'smo62336');
smo62364v0ar.push(smo62336);
const smo62337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62337.setAttribute('id', 'smo62337');
smo62364v0ar.push(smo62337);
const smo62338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62338.setAttribute('id', 'smo62338');
smo62364v0ar.push(smo62338);
const smo62339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo62339.setAttribute('id', 'smo62339');
smo62364v0ar.push(smo62339);
const smo62340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62340.setAttribute('id', 'smo62340');
smo62364v0ar.push(smo62340);
const smo62341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62341.setAttribute('id', 'smo62341');
smo62364v0ar.push(smo62341);
const smo62342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62342.setAttribute('id', 'smo62342');
smo62364v0ar.push(smo62342);
const smo62343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo62343.setAttribute('id', 'smo62343');
smo62364v0ar.push(smo62343);
const smo62344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62344.setAttribute('id', 'smo62344');
smo62364v0ar.push(smo62344);
const smo62345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62345.setAttribute('id', 'smo62345');
smo62364v0ar.push(smo62345);
const smo62346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo62346.setAttribute('id', 'smo62346');
smo62364v0ar.push(smo62346);
smo62364v0.addTickables(smo62364v0ar)
fmtsmo623646.joinVoices([smo62364v0]);
const smo62364v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62364v1ar = [];
const smo62347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62347.setAttribute('id', 'smo62347');
smo62347.setStyle({ fillStyle: '#aaaaaa7f' });
smo62364v1ar.push(smo62347);
const smo62348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62348.setAttribute('id', 'smo62348');
smo62348.setStyle({ fillStyle: '#aaaaaa7f' });
smo62348.addModifier(new VF.Dot(), 0);
smo62348.addModifier(new VF.Dot(), 0);
smo62364v1ar.push(smo62348);
const smo62349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62349.setAttribute('id', 'smo62349');
smo62349.setStyle({ fillStyle: '#aaaaaa7f' });
smo62364v1ar.push(smo62349);
const smo62350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62350.setAttribute('id', 'smo62350');
smo62350.setStyle({ fillStyle: '#aaaaaa7f' });
smo62350.addModifier(new VF.Dot(), 0);
smo62350.addModifier(new VF.Dot(), 0);
smo62364v1ar.push(smo62350);
smo62364v1.addTickables(smo62364v1ar)
fmtsmo623646.joinVoices([smo62364v1]);
const fmtsmo677496 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo67749v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67749v0ar = [];
const smo67728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67728.setAttribute('id', 'smo67728');
smo67749v0ar.push(smo67728);
const smo67729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67729.setAttribute('id', 'smo67729');
smo67729.addModifier(new VF.Dot(), 0);
smo67749v0ar.push(smo67729);
const smo67730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67730.setAttribute('id', 'smo67730');
smo67749v0ar.push(smo67730);
const smo67731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67731.setAttribute('id', 'smo67731');
smo67749v0ar.push(smo67731);
const smo67732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67732.setAttribute('id', 'smo67732');
smo67732.addModifier(new VF.Dot(), 0);
smo67749v0ar.push(smo67732);
const smo67733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo67733.setAttribute('id', 'smo67733');
smo67749v0ar.push(smo67733);
smo67749v0.addTickables(smo67749v0ar)
fmtsmo677496.joinVoices([smo67749v0]);
const smo67749v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67749v1ar = [];
const smo67734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67734.setAttribute('id', 'smo67734');
smo67734.setStyle({ fillStyle: "#115511" });
smo67749v1ar.push(smo67734);
const smo67735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67735.setAttribute('id', 'smo67735');
smo67735.setStyle({ fillStyle: "#115511" });
smo67749v1ar.push(smo67735);
smo67749v1.addTickables(smo67749v1ar)
fmtsmo677496.joinVoices([smo67749v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71597 = smo62334.getStemDirection();
smo62334.setStemDirection(dirsmo71597);
smo62335.setStemDirection(dirsmo71597);
const smo71597 = new VF.Beam([smo62334,smo62335]);
const dirsmo71598 = smo62336.getStemDirection();
smo62336.setStemDirection(dirsmo71598);
smo62337.setStemDirection(dirsmo71598);
smo62338.setStemDirection(dirsmo71598);
smo62339.setStemDirection(dirsmo71598);
const smo71598 = new VF.Beam([smo62336,smo62337,smo62338,smo62339]);
const dirsmo71599 = smo62341.getStemDirection();
smo62341.setStemDirection(dirsmo71599);
smo62342.setStemDirection(dirsmo71599);
const smo71599 = new VF.Beam([smo62341,smo62342]);
const dirsmo71600 = smo62343.getStemDirection();
smo62343.setStemDirection(dirsmo71600);
smo62344.setStemDirection(dirsmo71600);
smo62345.setStemDirection(dirsmo71600);
smo62346.setStemDirection(dirsmo71600);
const smo71600 = new VF.Beam([smo62343,smo62344,smo62345,smo62346]);
 
// formatting measures in staff group smo60952
fmtsmo623646.format([smo62364v0,smo62364v1,smo67749v0,smo67749v1], 544);
const stavesmo62364 = new VF.Stave(90, 955, 602);
stavesmo62364.setAttribute('id', 'stavesmo62364');
stavesmo62364.setBegBarType(1);
stavesmo62364.addClef('treble');
stavesmo62364.setContext(context);
stavesmo62364.draw();
smo62364v0.draw(context, stavesmo62364);
smo62364v1.draw(context, stavesmo62364);
smo71597.setContext(context);
smo71597.draw();
smo71598.setContext(context);
smo71598.draw();
smo71599.setContext(context);
smo71599.draw();
smo71600.setContext(context);
smo71600.draw();
const stavesmo67749 = new VF.Stave(90, 1032, 602);
stavesmo67749.setAttribute('id', 'stavesmo67749');
stavesmo67749.setBegBarType(1);
stavesmo67749.addClef('treble');
stavesmo67749.setContext(context);
stavesmo67749.draw();
smo67749v0.draw(context, stavesmo67749);
smo67749v1.draw(context, stavesmo67749);
const leftsmo60952stavesmo623641 = new VF.StaveConnector(stavesmo62364, stavesmo67749).setType(3);
leftsmo60952stavesmo623641.setContext(context).draw();
const fmtsmo623967 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo62396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62396v0ar = [];
const smo62365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62365.setAttribute('id', 'smo62365');
smo62396v0ar.push(smo62365);
const smo62366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62366.setAttribute('id', 'smo62366');
smo62396v0ar.push(smo62366);
const smo62367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62367.setAttribute('id', 'smo62367');
smo62396v0ar.push(smo62367);
const smo62368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62368.setAttribute('id', 'smo62368');
smo62396v0ar.push(smo62368);
const smo62369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62369.setAttribute('id', 'smo62369');
smo62396v0ar.push(smo62369);
const smo62370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62370.setAttribute('id', 'smo62370');
smo62396v0ar.push(smo62370);
const smo62371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62371.setAttribute('id', 'smo62371');
smo62396v0ar.push(smo62371);
const smo62372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62372.setAttribute('id', 'smo62372');
smo62396v0ar.push(smo62372);
const smo62373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62373.setAttribute('id', 'smo62373');
smo62396v0ar.push(smo62373);
const smo62374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62374.setAttribute('id', 'smo62374');
smo62396v0ar.push(smo62374);
const smo62375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62375.setAttribute('id', 'smo62375');
smo62396v0ar.push(smo62375);
const smo62376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62376.setAttribute('id', 'smo62376');
smo62396v0ar.push(smo62376);
const smo62377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62377.setAttribute('id', 'smo62377');
smo62396v0ar.push(smo62377);
const smo62378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62378.setAttribute('id', 'smo62378');
smo62396v0ar.push(smo62378);
smo62396v0.addTickables(smo62396v0ar)
fmtsmo623967.joinVoices([smo62396v0]);
const smo62396v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62396v1ar = [];
const smo62379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62379.setAttribute('id', 'smo62379');
smo62379.setStyle({ fillStyle: '#aaaaaa7f' });
smo62396v1ar.push(smo62379);
const smo62380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62380.setAttribute('id', 'smo62380');
smo62380.setStyle({ fillStyle: '#aaaaaa7f' });
smo62380.addModifier(new VF.Dot(), 0);
smo62380.addModifier(new VF.Dot(), 0);
smo62396v1ar.push(smo62380);
const smo62381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62381.setAttribute('id', 'smo62381');
smo62381.setStyle({ fillStyle: '#aaaaaa7f' });
smo62396v1ar.push(smo62381);
const smo62382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62382.setAttribute('id', 'smo62382');
smo62382.setStyle({ fillStyle: '#aaaaaa7f' });
smo62382.addModifier(new VF.Dot(), 0);
smo62382.addModifier(new VF.Dot(), 0);
smo62396v1ar.push(smo62382);
smo62396v1.addTickables(smo62396v1ar)
fmtsmo623967.joinVoices([smo62396v1]);
const fmtsmo677717 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo67771v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67771v0ar = [];
const smo67750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67750.setAttribute('id', 'smo67750');
smo67771v0ar.push(smo67750);
const smo67751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67751.setAttribute('id', 'smo67751');
smo67751.addModifier(new VF.Dot(), 0);
smo67771v0ar.push(smo67751);
const smo67752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67752.setAttribute('id', 'smo67752');
smo67771v0ar.push(smo67752);
const smo67753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67753.setAttribute('id', 'smo67753');
smo67771v0ar.push(smo67753);
const smo67754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67754.setAttribute('id', 'smo67754');
smo67754.addModifier(new VF.Dot(), 0);
smo67771v0ar.push(smo67754);
const smo67755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67755.setAttribute('id', 'smo67755');
smo67771v0ar.push(smo67755);
smo67771v0.addTickables(smo67771v0ar)
fmtsmo677717.joinVoices([smo67771v0]);
const smo67771v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67771v1ar = [];
const smo67756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67756.setAttribute('id', 'smo67756');
smo67756.setStyle({ fillStyle: "#115511" });
smo67771v1ar.push(smo67756);
const smo67757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67757.setAttribute('id', 'smo67757');
smo67757.setStyle({ fillStyle: "#115511" });
smo67771v1ar.push(smo67757);
smo67771v1.addTickables(smo67771v1ar)
fmtsmo677717.joinVoices([smo67771v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71605 = smo62366.getStemDirection();
smo62366.setStemDirection(dirsmo71605);
smo62367.setStemDirection(dirsmo71605);
const smo71605 = new VF.Beam([smo62366,smo62367]);
const dirsmo71606 = smo62368.getStemDirection();
smo62368.setStemDirection(dirsmo71606);
smo62369.setStemDirection(dirsmo71606);
smo62370.setStemDirection(dirsmo71606);
smo62371.setStemDirection(dirsmo71606);
const smo71606 = new VF.Beam([smo62368,smo62369,smo62370,smo62371]);
const dirsmo71607 = smo62373.getStemDirection();
smo62373.setStemDirection(dirsmo71607);
smo62374.setStemDirection(dirsmo71607);
const smo71607 = new VF.Beam([smo62373,smo62374]);
const dirsmo71608 = smo62375.getStemDirection();
smo62375.setStemDirection(dirsmo71608);
smo62376.setStemDirection(dirsmo71608);
smo62377.setStemDirection(dirsmo71608);
smo62378.setStemDirection(dirsmo71608);
const smo71608 = new VF.Beam([smo62375,smo62376,smo62377,smo62378]);
 
// formatting measures in staff group smo60952
fmtsmo623967.format([smo62396v0,smo62396v1,smo67771v0,smo67771v1], 544);
const stavesmo62396 = new VF.Stave(692, 955, 558);
stavesmo62396.setAttribute('id', 'stavesmo62396');
stavesmo62396.setBegBarType(VF.Barline.type.NONE);
stavesmo62396.setContext(context);
stavesmo62396.draw();
smo62396v0.draw(context, stavesmo62396);
smo62396v1.draw(context, stavesmo62396);
smo71605.setContext(context);
smo71605.draw();
smo71606.setContext(context);
smo71606.draw();
smo71607.setContext(context);
smo71607.draw();
smo71608.setContext(context);
smo71608.draw();
const stavesmo67771 = new VF.Stave(692, 1032, 558);
stavesmo67771.setAttribute('id', 'stavesmo67771');
stavesmo67771.setBegBarType(VF.Barline.type.NONE);
stavesmo67771.setContext(context);
stavesmo67771.draw();
smo67771v0.draw(context, stavesmo67771);
smo67771v1.draw(context, stavesmo67771);
const fmtsmo624288 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo62428v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62428v0ar = [];
const smo62397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62397.setAttribute('id', 'smo62397');
smo62428v0ar.push(smo62397);
const smo62398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62398.setAttribute('id', 'smo62398');
smo62428v0ar.push(smo62398);
const smo62399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62399.setAttribute('id', 'smo62399');
smo62428v0ar.push(smo62399);
const smo62400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62400.setAttribute('id', 'smo62400');
smo62428v0ar.push(smo62400);
const smo62401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62401.setAttribute('id', 'smo62401');
smo62428v0ar.push(smo62401);
const smo62402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62402.setAttribute('id', 'smo62402');
smo62428v0ar.push(smo62402);
const smo62403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62403.setAttribute('id', 'smo62403');
smo62428v0ar.push(smo62403);
const smo62404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62404.setAttribute('id', 'smo62404');
smo62428v0ar.push(smo62404);
const smo62405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62405.setAttribute('id', 'smo62405');
smo62428v0ar.push(smo62405);
const smo62406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62406.setAttribute('id', 'smo62406');
smo62428v0ar.push(smo62406);
const smo62407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62407.setAttribute('id', 'smo62407');
smo62428v0ar.push(smo62407);
const smo62408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62408.setAttribute('id', 'smo62408');
smo62428v0ar.push(smo62408);
const smo62409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62409.setAttribute('id', 'smo62409');
smo62428v0ar.push(smo62409);
const smo62410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62410.setAttribute('id', 'smo62410');
smo62428v0ar.push(smo62410);
smo62428v0.addTickables(smo62428v0ar)
fmtsmo624288.joinVoices([smo62428v0]);
const smo62428v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62428v1ar = [];
const smo62411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62411.setAttribute('id', 'smo62411');
smo62411.setStyle({ fillStyle: '#aaaaaa7f' });
smo62428v1ar.push(smo62411);
const smo62412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62412.setAttribute('id', 'smo62412');
smo62412.setStyle({ fillStyle: '#aaaaaa7f' });
smo62412.addModifier(new VF.Dot(), 0);
smo62412.addModifier(new VF.Dot(), 0);
smo62428v1ar.push(smo62412);
const smo62413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62413.setAttribute('id', 'smo62413');
smo62413.setStyle({ fillStyle: '#aaaaaa7f' });
smo62428v1ar.push(smo62413);
const smo62414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62414.setAttribute('id', 'smo62414');
smo62414.setStyle({ fillStyle: '#aaaaaa7f' });
smo62414.addModifier(new VF.Dot(), 0);
smo62414.addModifier(new VF.Dot(), 0);
smo62428v1ar.push(smo62414);
smo62428v1.addTickables(smo62428v1ar)
fmtsmo624288.joinVoices([smo62428v1]);
const fmtsmo677938 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo67793v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67793v0ar = [];
const smo67772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67772.setAttribute('id', 'smo67772');
smo67793v0ar.push(smo67772);
const smo67773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67773.setAttribute('id', 'smo67773');
smo67773.addModifier(new VF.Dot(), 0);
smo67793v0ar.push(smo67773);
const smo67774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67774.setAttribute('id', 'smo67774');
smo67793v0ar.push(smo67774);
const smo67775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67775.setAttribute('id', 'smo67775');
smo67793v0ar.push(smo67775);
const smo67776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67776.setAttribute('id', 'smo67776');
smo67776.addModifier(new VF.Dot(), 0);
smo67793v0ar.push(smo67776);
const smo67777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo67777.setAttribute('id', 'smo67777');
smo67793v0ar.push(smo67777);
smo67793v0.addTickables(smo67793v0ar)
fmtsmo677938.joinVoices([smo67793v0]);
const smo67793v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67793v1ar = [];
const smo67778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67778.setAttribute('id', 'smo67778');
smo67778.setStyle({ fillStyle: "#115511" });
smo67793v1ar.push(smo67778);
const smo67779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67779.setAttribute('id', 'smo67779');
smo67779.setStyle({ fillStyle: "#115511" });
smo67793v1ar.push(smo67779);
smo67793v1.addTickables(smo67793v1ar)
fmtsmo677938.joinVoices([smo67793v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71613 = smo62398.getStemDirection();
smo62398.setStemDirection(dirsmo71613);
smo62399.setStemDirection(dirsmo71613);
const smo71613 = new VF.Beam([smo62398,smo62399]);
const dirsmo71614 = smo62400.getStemDirection();
smo62400.setStemDirection(dirsmo71614);
smo62401.setStemDirection(dirsmo71614);
smo62402.setStemDirection(dirsmo71614);
smo62403.setStemDirection(dirsmo71614);
const smo71614 = new VF.Beam([smo62400,smo62401,smo62402,smo62403]);
const dirsmo71615 = smo62405.getStemDirection();
smo62405.setStemDirection(dirsmo71615);
smo62406.setStemDirection(dirsmo71615);
const smo71615 = new VF.Beam([smo62405,smo62406]);
const dirsmo71616 = smo62407.getStemDirection();
smo62407.setStemDirection(dirsmo71616);
smo62408.setStemDirection(dirsmo71616);
smo62409.setStemDirection(dirsmo71616);
smo62410.setStemDirection(dirsmo71616);
const smo71616 = new VF.Beam([smo62407,smo62408,smo62409,smo62410]);
 
// formatting measures in staff group smo60952
fmtsmo624288.format([smo62428v0,smo62428v1,smo67793v0,smo67793v1], 544);
const stavesmo62428 = new VF.Stave(1250, 955, 558);
stavesmo62428.setAttribute('id', 'stavesmo62428');
stavesmo62428.setBegBarType(VF.Barline.type.NONE);
stavesmo62428.setContext(context);
stavesmo62428.draw();
smo62428v0.draw(context, stavesmo62428);
smo62428v1.draw(context, stavesmo62428);
smo71613.setContext(context);
smo71613.draw();
smo71614.setContext(context);
smo71614.draw();
smo71615.setContext(context);
smo71615.draw();
smo71616.setContext(context);
smo71616.draw();
const stavesmo67793 = new VF.Stave(1250, 1032, 558);
stavesmo67793.setAttribute('id', 'stavesmo67793');
stavesmo67793.setBegBarType(VF.Barline.type.NONE);
stavesmo67793.setContext(context);
stavesmo67793.draw();
smo67793v0.draw(context, stavesmo67793);
smo67793v1.draw(context, stavesmo67793);
const rightsmo60952stavesmo624281 = new VF.StaveConnector(stavesmo62428, stavesmo67793).setType(0);
rightsmo60952stavesmo624281.setContext(context).draw();
const fmtsmo624609 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo62460v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62460v0ar = [];
const smo62429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62429.setAttribute('id', 'smo62429');
smo62460v0ar.push(smo62429);
const smo62430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62430.setAttribute('id', 'smo62430');
smo62460v0ar.push(smo62430);
const smo62431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62431.setAttribute('id', 'smo62431');
const smo624310acc = new VF.Accidental('#');
smo62431.addModifier(smo624310acc, 0);
smo62460v0ar.push(smo62431);
const smo62432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62432.setAttribute('id', 'smo62432');
smo62460v0ar.push(smo62432);
const smo62433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62433.setAttribute('id', 'smo62433');
smo62460v0ar.push(smo62433);
const smo62434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62434.setAttribute('id', 'smo62434');
smo62460v0ar.push(smo62434);
const smo62435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62435.setAttribute('id', 'smo62435');
smo62460v0ar.push(smo62435);
const smo62436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62436.setAttribute('id', 'smo62436');
smo62460v0ar.push(smo62436);
const smo62437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62437.setAttribute('id', 'smo62437');
smo62460v0ar.push(smo62437);
const smo62438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62438.setAttribute('id', 'smo62438');
smo62460v0ar.push(smo62438);
const smo62439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62439.setAttribute('id', 'smo62439');
smo62460v0ar.push(smo62439);
const smo62440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62440.setAttribute('id', 'smo62440');
smo62460v0ar.push(smo62440);
const smo62441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo62441.setAttribute('id', 'smo62441');
smo62460v0ar.push(smo62441);
const smo62442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62442.setAttribute('id', 'smo62442');
smo62460v0ar.push(smo62442);
smo62460v0.addTickables(smo62460v0ar)
fmtsmo624609.joinVoices([smo62460v0]);
const smo62460v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62460v1ar = [];
const smo62443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62443.setAttribute('id', 'smo62443');
smo62443.setStyle({ fillStyle: '#aaaaaa7f' });
smo62460v1ar.push(smo62443);
const smo62444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62444.setAttribute('id', 'smo62444');
smo62444.setStyle({ fillStyle: '#aaaaaa7f' });
smo62444.addModifier(new VF.Dot(), 0);
smo62444.addModifier(new VF.Dot(), 0);
smo62460v1ar.push(smo62444);
const smo62445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62445.setAttribute('id', 'smo62445');
smo62445.setStyle({ fillStyle: '#aaaaaa7f' });
smo62460v1ar.push(smo62445);
const smo62446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62446.setAttribute('id', 'smo62446');
smo62446.setStyle({ fillStyle: '#aaaaaa7f' });
smo62446.addModifier(new VF.Dot(), 0);
smo62446.addModifier(new VF.Dot(), 0);
smo62460v1ar.push(smo62446);
smo62460v1.addTickables(smo62460v1ar)
fmtsmo624609.joinVoices([smo62460v1]);
const fmtsmo678159 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo67815v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67815v0ar = [];
const smo67794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/6/r"]}'))
smo67794.setAttribute('id', 'smo67794');
smo67815v0ar.push(smo67794);
const smo67795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67795.setAttribute('id', 'smo67795');
smo67795.addModifier(new VF.Dot(), 0);
smo67815v0ar.push(smo67795);
const smo67796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67796.setAttribute('id', 'smo67796');
smo67815v0ar.push(smo67796);
const smo67797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67797.setAttribute('id', 'smo67797');
smo67815v0ar.push(smo67797);
const smo67798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67798.setAttribute('id', 'smo67798');
smo67798.addModifier(new VF.Dot(), 0);
smo67815v0ar.push(smo67798);
const smo67799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67799.setAttribute('id', 'smo67799');
smo67815v0ar.push(smo67799);
smo67815v0.addTickables(smo67815v0ar)
fmtsmo678159.joinVoices([smo67815v0]);
const smo67815v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67815v1ar = [];
const smo67800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67800.setAttribute('id', 'smo67800');
smo67800.setStyle({ fillStyle: "#115511" });
smo67815v1ar.push(smo67800);
const smo67801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67801.setAttribute('id', 'smo67801');
smo67801.setStyle({ fillStyle: "#115511" });
smo67815v1ar.push(smo67801);
smo67815v1.addTickables(smo67815v1ar)
fmtsmo678159.joinVoices([smo67815v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71629 = smo62430.getStemDirection();
smo62430.setStemDirection(dirsmo71629);
smo62431.setStemDirection(dirsmo71629);
const smo71629 = new VF.Beam([smo62430,smo62431]);
const dirsmo71630 = smo62432.getStemDirection();
smo62432.setStemDirection(dirsmo71630);
smo62433.setStemDirection(dirsmo71630);
smo62434.setStemDirection(dirsmo71630);
smo62435.setStemDirection(dirsmo71630);
const smo71630 = new VF.Beam([smo62432,smo62433,smo62434,smo62435]);
const dirsmo71631 = smo62437.getStemDirection();
smo62437.setStemDirection(dirsmo71631);
smo62438.setStemDirection(dirsmo71631);
const smo71631 = new VF.Beam([smo62437,smo62438]);
const dirsmo71632 = smo62439.getStemDirection();
smo62439.setStemDirection(dirsmo71632);
smo62440.setStemDirection(dirsmo71632);
smo62441.setStemDirection(dirsmo71632);
smo62442.setStemDirection(dirsmo71632);
const smo71632 = new VF.Beam([smo62439,smo62440,smo62441,smo62442]);
 
// formatting measures in staff group smo60952
fmtsmo624609.format([smo62460v0,smo62460v1,smo67815v0,smo67815v1], 561);
const stavesmo62460 = new VF.Stave(90, 1191, 619);
stavesmo62460.setAttribute('id', 'stavesmo62460');
stavesmo62460.setBegBarType(1);
stavesmo62460.addClef('treble');
stavesmo62460.setContext(context);
stavesmo62460.draw();
smo62460v0.draw(context, stavesmo62460);
smo62460v1.draw(context, stavesmo62460);
smo71629.setContext(context);
smo71629.draw();
smo71630.setContext(context);
smo71630.draw();
smo71631.setContext(context);
smo71631.draw();
smo71632.setContext(context);
smo71632.draw();
const stavesmo67815 = new VF.Stave(90, 1370, 619);
stavesmo67815.setAttribute('id', 'stavesmo67815');
stavesmo67815.setBegBarType(1);
stavesmo67815.addClef('bass');
stavesmo67815.setContext(context);
stavesmo67815.draw();
smo67815v0.draw(context, stavesmo67815);
smo67815v1.draw(context, stavesmo67815);
const leftsmo60952stavesmo624601 = new VF.StaveConnector(stavesmo62460, stavesmo67815).setType(3);
leftsmo60952stavesmo624601.setContext(context).draw();
const fmtsmo6249210 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo62492v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62492v0ar = [];
const smo62461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62461.setAttribute('id', 'smo62461');
smo62492v0ar.push(smo62461);
const smo62462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62462.setAttribute('id', 'smo62462');
smo62492v0ar.push(smo62462);
const smo62463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62463.setAttribute('id', 'smo62463');
smo62492v0ar.push(smo62463);
const smo62464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62464.setAttribute('id', 'smo62464');
smo62492v0ar.push(smo62464);
const smo62465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62465.setAttribute('id', 'smo62465');
smo62492v0ar.push(smo62465);
const smo62466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62466.setAttribute('id', 'smo62466');
smo62492v0ar.push(smo62466);
const smo62467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62467.setAttribute('id', 'smo62467');
smo62492v0ar.push(smo62467);
const smo62468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62468.setAttribute('id', 'smo62468');
smo62492v0ar.push(smo62468);
const smo62469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62469.setAttribute('id', 'smo62469');
smo62492v0ar.push(smo62469);
const smo62470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62470.setAttribute('id', 'smo62470');
smo62492v0ar.push(smo62470);
const smo62471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62471.setAttribute('id', 'smo62471');
smo62492v0ar.push(smo62471);
const smo62472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62472.setAttribute('id', 'smo62472');
smo62492v0ar.push(smo62472);
const smo62473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62473.setAttribute('id', 'smo62473');
smo62492v0ar.push(smo62473);
const smo62474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62474.setAttribute('id', 'smo62474');
smo62492v0ar.push(smo62474);
smo62492v0.addTickables(smo62492v0ar)
fmtsmo6249210.joinVoices([smo62492v0]);
const smo62492v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62492v1ar = [];
const smo62475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62475.setAttribute('id', 'smo62475');
smo62475.setStyle({ fillStyle: '#aaaaaa7f' });
smo62492v1ar.push(smo62475);
const smo62476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo62476.setAttribute('id', 'smo62476');
smo62476.setStyle({ fillStyle: '#aaaaaa7f' });
smo62476.addModifier(new VF.Dot(), 0);
smo62476.addModifier(new VF.Dot(), 0);
smo62492v1ar.push(smo62476);
const smo62477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62477.setAttribute('id', 'smo62477');
smo62477.setStyle({ fillStyle: '#aaaaaa7f' });
smo62492v1ar.push(smo62477);
const smo62478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62478.setAttribute('id', 'smo62478');
smo62478.setStyle({ fillStyle: '#aaaaaa7f' });
smo62478.addModifier(new VF.Dot(), 0);
smo62478.addModifier(new VF.Dot(), 0);
smo62492v1ar.push(smo62478);
smo62492v1.addTickables(smo62492v1ar)
fmtsmo6249210.joinVoices([smo62492v1]);
const fmtsmo6783710 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo67837v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67837v0ar = [];
const smo67816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67816.setAttribute('id', 'smo67816');
smo67837v0ar.push(smo67816);
const smo67817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67817.setAttribute('id', 'smo67817');
smo67817.addModifier(new VF.Dot(), 0);
smo67837v0ar.push(smo67817);
const smo67818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67818.setAttribute('id', 'smo67818');
smo67837v0ar.push(smo67818);
const smo67819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67819.setAttribute('id', 'smo67819');
smo67837v0ar.push(smo67819);
const smo67820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67820.setAttribute('id', 'smo67820');
smo67820.addModifier(new VF.Dot(), 0);
smo67837v0ar.push(smo67820);
const smo67821 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo67821.setAttribute('id', 'smo67821');
smo67837v0ar.push(smo67821);
smo67837v0.addTickables(smo67837v0ar)
fmtsmo6783710.joinVoices([smo67837v0]);
const smo67837v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67837v1ar = [];
const smo67822 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67822.setAttribute('id', 'smo67822');
smo67822.setStyle({ fillStyle: "#115511" });
smo67837v1ar.push(smo67822);
const smo67823 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67823.setAttribute('id', 'smo67823');
smo67823.setStyle({ fillStyle: "#115511" });
smo67837v1ar.push(smo67823);
smo67837v1.addTickables(smo67837v1ar)
fmtsmo6783710.joinVoices([smo67837v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71637 = smo62462.getStemDirection();
smo62462.setStemDirection(dirsmo71637);
smo62463.setStemDirection(dirsmo71637);
const smo71637 = new VF.Beam([smo62462,smo62463]);
const dirsmo71638 = smo62464.getStemDirection();
smo62464.setStemDirection(dirsmo71638);
smo62465.setStemDirection(dirsmo71638);
smo62466.setStemDirection(dirsmo71638);
smo62467.setStemDirection(dirsmo71638);
const smo71638 = new VF.Beam([smo62464,smo62465,smo62466,smo62467]);
const dirsmo71639 = smo62469.getStemDirection();
smo62469.setStemDirection(dirsmo71639);
smo62470.setStemDirection(dirsmo71639);
const smo71639 = new VF.Beam([smo62469,smo62470]);
const dirsmo71640 = smo62471.getStemDirection();
smo62471.setStemDirection(dirsmo71640);
smo62472.setStemDirection(dirsmo71640);
smo62473.setStemDirection(dirsmo71640);
smo62474.setStemDirection(dirsmo71640);
const smo71640 = new VF.Beam([smo62471,smo62472,smo62473,smo62474]);
 
// formatting measures in staff group smo60952
fmtsmo6249210.format([smo62492v0,smo62492v1,smo67837v0,smo67837v1], 510);
const stavesmo62492 = new VF.Stave(709, 1191, 524);
stavesmo62492.setAttribute('id', 'stavesmo62492');
stavesmo62492.setBegBarType(VF.Barline.type.NONE);
stavesmo62492.setContext(context);
stavesmo62492.draw();
smo62492v0.draw(context, stavesmo62492);
smo62492v1.draw(context, stavesmo62492);
smo71637.setContext(context);
smo71637.draw();
smo71638.setContext(context);
smo71638.draw();
smo71639.setContext(context);
smo71639.draw();
smo71640.setContext(context);
smo71640.draw();
const stavesmo67837 = new VF.Stave(709, 1370, 524);
stavesmo67837.setAttribute('id', 'stavesmo67837');
stavesmo67837.setBegBarType(VF.Barline.type.NONE);
stavesmo67837.setContext(context);
stavesmo67837.draw();
smo67837v0.draw(context, stavesmo67837);
smo67837v1.draw(context, stavesmo67837);
const fmtsmo6252411 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo62524v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62524v0ar = [];
const smo62493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62493.setAttribute('id', 'smo62493');
smo62524v0ar.push(smo62493);
const smo62494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62494.setAttribute('id', 'smo62494');
smo62524v0ar.push(smo62494);
const smo62495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62495.setAttribute('id', 'smo62495');
smo62524v0ar.push(smo62495);
const smo62496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo62496.setAttribute('id', 'smo62496');
const smo624960acc = new VF.Accidental('#');
smo62496.addModifier(smo624960acc, 0);
smo62524v0ar.push(smo62496);
const smo62497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62497.setAttribute('id', 'smo62497');
smo62524v0ar.push(smo62497);
const smo62498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62498.setAttribute('id', 'smo62498');
smo62524v0ar.push(smo62498);
const smo62499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo62499.setAttribute('id', 'smo62499');
smo62524v0ar.push(smo62499);
const smo62500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62500.setAttribute('id', 'smo62500');
smo62524v0ar.push(smo62500);
const smo62501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62501.setAttribute('id', 'smo62501');
smo62524v0ar.push(smo62501);
const smo62502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62502.setAttribute('id', 'smo62502');
smo62524v0ar.push(smo62502);
const smo62503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo62503.setAttribute('id', 'smo62503');
smo62524v0ar.push(smo62503);
const smo62504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62504.setAttribute('id', 'smo62504');
smo62524v0ar.push(smo62504);
const smo62505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62505.setAttribute('id', 'smo62505');
smo62524v0ar.push(smo62505);
const smo62506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
smo62506.setAttribute('id', 'smo62506');
smo62524v0ar.push(smo62506);
smo62524v0.addTickables(smo62524v0ar)
fmtsmo6252411.joinVoices([smo62524v0]);
const smo62524v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62524v1ar = [];
const smo62507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62507.setAttribute('id', 'smo62507');
smo62507.setStyle({ fillStyle: '#aaaaaa7f' });
smo62524v1ar.push(smo62507);
const smo62508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62508.setAttribute('id', 'smo62508');
smo62508.setStyle({ fillStyle: '#aaaaaa7f' });
smo62508.addModifier(new VF.Dot(), 0);
smo62508.addModifier(new VF.Dot(), 0);
smo62524v1ar.push(smo62508);
const smo62509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62509.setAttribute('id', 'smo62509');
smo62509.setStyle({ fillStyle: '#aaaaaa7f' });
smo62524v1ar.push(smo62509);
const smo62510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62510.setAttribute('id', 'smo62510');
smo62510.setStyle({ fillStyle: '#aaaaaa7f' });
smo62510.addModifier(new VF.Dot(), 0);
smo62510.addModifier(new VF.Dot(), 0);
smo62524v1ar.push(smo62510);
smo62524v1.addTickables(smo62524v1ar)
fmtsmo6252411.joinVoices([smo62524v1]);
const fmtsmo6785911 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo67859v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67859v0ar = [];
const smo67838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67838.setAttribute('id', 'smo67838');
smo67859v0ar.push(smo67838);
const smo67839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo67839.setAttribute('id', 'smo67839');
const smo678390acc = new VF.Accidental('#');
smo67839.addModifier(smo678390acc, 0);
smo67839.addModifier(new VF.Dot(), 0);
smo67859v0ar.push(smo67839);
const smo67840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo67840.setAttribute('id', 'smo67840');
smo67859v0ar.push(smo67840);
const smo67841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67841.setAttribute('id', 'smo67841');
smo67859v0ar.push(smo67841);
const smo67842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo67842.setAttribute('id', 'smo67842');
smo67842.addModifier(new VF.Dot(), 0);
smo67859v0ar.push(smo67842);
const smo67843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["a#/3/n"]}'))
smo67843.setAttribute('id', 'smo67843');
smo67859v0ar.push(smo67843);
smo67859v0.addTickables(smo67859v0ar)
fmtsmo6785911.joinVoices([smo67859v0]);
const smo67859v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67859v1ar = [];
const smo67844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67844.setAttribute('id', 'smo67844');
smo67844.setStyle({ fillStyle: "#115511" });
smo67859v1ar.push(smo67844);
const smo67845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67845.setAttribute('id', 'smo67845');
smo67845.setStyle({ fillStyle: "#115511" });
smo67859v1ar.push(smo67845);
smo67859v1.addTickables(smo67859v1ar)
fmtsmo6785911.joinVoices([smo67859v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71645 = smo62494.getStemDirection();
smo62494.setStemDirection(dirsmo71645);
smo62495.setStemDirection(dirsmo71645);
const smo71645 = new VF.Beam([smo62494,smo62495]);
const dirsmo71646 = smo62496.getStemDirection();
smo62496.setStemDirection(dirsmo71646);
smo62497.setStemDirection(dirsmo71646);
smo62498.setStemDirection(dirsmo71646);
smo62499.setStemDirection(dirsmo71646);
const smo71646 = new VF.Beam([smo62496,smo62497,smo62498,smo62499]);
const dirsmo71647 = smo62501.getStemDirection();
smo62501.setStemDirection(dirsmo71647);
smo62502.setStemDirection(dirsmo71647);
const smo71647 = new VF.Beam([smo62501,smo62502]);
const dirsmo71648 = smo62503.getStemDirection();
smo62503.setStemDirection(dirsmo71648);
smo62504.setStemDirection(dirsmo71648);
smo62505.setStemDirection(dirsmo71648);
smo62506.setStemDirection(dirsmo71648);
const smo71648 = new VF.Beam([smo62503,smo62504,smo62505,smo62506]);
 
// formatting measures in staff group smo60952
fmtsmo6252411.format([smo62524v0,smo62524v1,smo67859v0,smo67859v1], 560);
const stavesmo62524 = new VF.Stave(1233, 1191, 574);
stavesmo62524.setAttribute('id', 'stavesmo62524');
stavesmo62524.setBegBarType(VF.Barline.type.NONE);
stavesmo62524.setContext(context);
stavesmo62524.draw();
smo62524v0.draw(context, stavesmo62524);
smo62524v1.draw(context, stavesmo62524);
smo71645.setContext(context);
smo71645.draw();
smo71646.setContext(context);
smo71646.draw();
smo71647.setContext(context);
smo71647.draw();
smo71648.setContext(context);
smo71648.draw();
const stavesmo67859 = new VF.Stave(1233, 1370, 574);
stavesmo67859.setAttribute('id', 'stavesmo67859');
stavesmo67859.setBegBarType(VF.Barline.type.NONE);
stavesmo67859.setContext(context);
stavesmo67859.draw();
smo67859v0.draw(context, stavesmo67859);
smo67859v1.draw(context, stavesmo67859);
const rightsmo60952stavesmo625241 = new VF.StaveConnector(stavesmo62524, stavesmo67859).setType(0);
rightsmo60952stavesmo625241.setContext(context).draw();
const fmtsmo6255612 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo62556v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62556v0ar = [];
const smo62525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62525.setAttribute('id', 'smo62525');
smo62556v0ar.push(smo62525);
const smo62526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62526.setAttribute('id', 'smo62526');
smo62556v0ar.push(smo62526);
const smo62527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62527.setAttribute('id', 'smo62527');
smo62556v0ar.push(smo62527);
const smo62528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62528.setAttribute('id', 'smo62528');
smo62556v0ar.push(smo62528);
const smo62529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62529.setAttribute('id', 'smo62529');
smo62556v0ar.push(smo62529);
const smo62530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62530.setAttribute('id', 'smo62530');
smo62556v0ar.push(smo62530);
const smo62531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62531.setAttribute('id', 'smo62531');
smo62556v0ar.push(smo62531);
const smo62532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62532.setAttribute('id', 'smo62532');
smo62556v0ar.push(smo62532);
const smo62533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62533.setAttribute('id', 'smo62533');
smo62556v0ar.push(smo62533);
const smo62534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62534.setAttribute('id', 'smo62534');
smo62556v0ar.push(smo62534);
const smo62535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62535.setAttribute('id', 'smo62535');
smo62556v0ar.push(smo62535);
const smo62536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62536.setAttribute('id', 'smo62536');
smo62556v0ar.push(smo62536);
const smo62537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo62537.setAttribute('id', 'smo62537');
smo62556v0ar.push(smo62537);
const smo62538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo62538.setAttribute('id', 'smo62538');
smo62556v0ar.push(smo62538);
smo62556v0.addTickables(smo62556v0ar)
fmtsmo6255612.joinVoices([smo62556v0]);
const smo62556v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62556v1ar = [];
const smo62539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62539.setAttribute('id', 'smo62539');
smo62539.setStyle({ fillStyle: '#aaaaaa7f' });
smo62556v1ar.push(smo62539);
const smo62540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62540.setAttribute('id', 'smo62540');
smo62540.setStyle({ fillStyle: '#aaaaaa7f' });
smo62540.addModifier(new VF.Dot(), 0);
smo62540.addModifier(new VF.Dot(), 0);
smo62556v1ar.push(smo62540);
const smo62541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62541.setAttribute('id', 'smo62541');
smo62541.setStyle({ fillStyle: '#aaaaaa7f' });
smo62556v1ar.push(smo62541);
const smo62542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62542.setAttribute('id', 'smo62542');
smo62542.setStyle({ fillStyle: '#aaaaaa7f' });
smo62542.addModifier(new VF.Dot(), 0);
smo62542.addModifier(new VF.Dot(), 0);
smo62556v1ar.push(smo62542);
smo62556v1.addTickables(smo62556v1ar)
fmtsmo6255612.joinVoices([smo62556v1]);
const fmtsmo6788112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo67881v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67881v0ar = [];
const smo67860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67860.setAttribute('id', 'smo67860');
smo67881v0ar.push(smo67860);
const smo67861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67861.setAttribute('id', 'smo67861');
smo67861.addModifier(new VF.Dot(), 0);
smo67881v0ar.push(smo67861);
const smo67862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67862.setAttribute('id', 'smo67862');
smo67881v0ar.push(smo67862);
const smo67863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67863.setAttribute('id', 'smo67863');
smo67881v0ar.push(smo67863);
const smo67864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67864.setAttribute('id', 'smo67864');
smo67864.addModifier(new VF.Dot(), 0);
smo67881v0ar.push(smo67864);
const smo67865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo67865.setAttribute('id', 'smo67865');
smo67881v0ar.push(smo67865);
smo67881v0.addTickables(smo67881v0ar)
fmtsmo6788112.joinVoices([smo67881v0]);
const smo67881v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67881v1ar = [];
const smo67866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67866.setAttribute('id', 'smo67866');
smo67866.setStyle({ fillStyle: "#115511" });
smo67881v1ar.push(smo67866);
const smo67867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67867.setAttribute('id', 'smo67867');
smo67867.setStyle({ fillStyle: "#115511" });
smo67881v1ar.push(smo67867);
smo67881v1.addTickables(smo67881v1ar)
fmtsmo6788112.joinVoices([smo67881v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71661 = smo62526.getStemDirection();
smo62526.setStemDirection(dirsmo71661);
smo62527.setStemDirection(dirsmo71661);
const smo71661 = new VF.Beam([smo62526,smo62527]);
const dirsmo71662 = smo62528.getStemDirection();
smo62528.setStemDirection(dirsmo71662);
smo62529.setStemDirection(dirsmo71662);
smo62530.setStemDirection(dirsmo71662);
smo62531.setStemDirection(dirsmo71662);
const smo71662 = new VF.Beam([smo62528,smo62529,smo62530,smo62531]);
const dirsmo71663 = smo62533.getStemDirection();
smo62533.setStemDirection(dirsmo71663);
smo62534.setStemDirection(dirsmo71663);
const smo71663 = new VF.Beam([smo62533,smo62534]);
const dirsmo71664 = smo62535.getStemDirection();
smo62535.setStemDirection(dirsmo71664);
smo62536.setStemDirection(dirsmo71664);
smo62537.setStemDirection(dirsmo71664);
smo62538.setStemDirection(dirsmo71664);
const smo71664 = new VF.Beam([smo62535,smo62536,smo62537,smo62538]);
 
// formatting measures in staff group smo60952
fmtsmo6255612.format([smo62556v0,smo62556v1,smo67881v0,smo67881v1], 536);
const stavesmo62556 = new VF.Stave(90, 1494, 594);
stavesmo62556.setAttribute('id', 'stavesmo62556');
stavesmo62556.setBegBarType(1);
stavesmo62556.addClef('treble');
stavesmo62556.setContext(context);
stavesmo62556.draw();
smo62556v0.draw(context, stavesmo62556);
smo62556v1.draw(context, stavesmo62556);
smo71661.setContext(context);
smo71661.draw();
smo71662.setContext(context);
smo71662.draw();
smo71663.setContext(context);
smo71663.draw();
smo71664.setContext(context);
smo71664.draw();
const stavesmo67881 = new VF.Stave(90, 1668, 594);
stavesmo67881.setAttribute('id', 'stavesmo67881');
stavesmo67881.setBegBarType(1);
stavesmo67881.addClef('bass');
stavesmo67881.setContext(context);
stavesmo67881.draw();
smo67881v0.draw(context, stavesmo67881);
smo67881v1.draw(context, stavesmo67881);
const leftsmo60952stavesmo625561 = new VF.StaveConnector(stavesmo62556, stavesmo67881).setType(3);
leftsmo60952stavesmo625561.setContext(context).draw();
const fmtsmo6258813 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo62588v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62588v0ar = [];
const smo62557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62557.setAttribute('id', 'smo62557');
smo62588v0ar.push(smo62557);
const smo62558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62558.setAttribute('id', 'smo62558');
smo62588v0ar.push(smo62558);
const smo62559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62559.setAttribute('id', 'smo62559');
smo62588v0ar.push(smo62559);
const smo62560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62560.setAttribute('id', 'smo62560');
smo62588v0ar.push(smo62560);
const smo62561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62561.setAttribute('id', 'smo62561');
smo62588v0ar.push(smo62561);
const smo62562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62562.setAttribute('id', 'smo62562');
smo62588v0ar.push(smo62562);
const smo62563 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62563.setAttribute('id', 'smo62563');
smo62588v0ar.push(smo62563);
const smo62564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62564.setAttribute('id', 'smo62564');
smo62588v0ar.push(smo62564);
const smo62565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62565.setAttribute('id', 'smo62565');
smo62588v0ar.push(smo62565);
const smo62566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62566.setAttribute('id', 'smo62566');
smo62588v0ar.push(smo62566);
const smo62567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62567.setAttribute('id', 'smo62567');
smo62588v0ar.push(smo62567);
const smo62568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo62568.setAttribute('id', 'smo62568');
smo62588v0ar.push(smo62568);
const smo62569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62569.setAttribute('id', 'smo62569');
smo62588v0ar.push(smo62569);
const smo62570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo62570.setAttribute('id', 'smo62570');
smo62588v0ar.push(smo62570);
smo62588v0.addTickables(smo62588v0ar)
fmtsmo6258813.joinVoices([smo62588v0]);
const smo62588v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62588v1ar = [];
const smo62571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62571.setAttribute('id', 'smo62571');
smo62571.setStyle({ fillStyle: '#aaaaaa7f' });
smo62588v1ar.push(smo62571);
const smo62572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62572.setAttribute('id', 'smo62572');
smo62572.setStyle({ fillStyle: '#aaaaaa7f' });
smo62572.addModifier(new VF.Dot(), 0);
smo62572.addModifier(new VF.Dot(), 0);
smo62588v1ar.push(smo62572);
const smo62573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62573.setAttribute('id', 'smo62573');
smo62573.setStyle({ fillStyle: '#aaaaaa7f' });
smo62588v1ar.push(smo62573);
const smo62574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62574.setAttribute('id', 'smo62574');
smo62574.setStyle({ fillStyle: '#aaaaaa7f' });
smo62574.addModifier(new VF.Dot(), 0);
smo62574.addModifier(new VF.Dot(), 0);
smo62588v1ar.push(smo62574);
smo62588v1.addTickables(smo62588v1ar)
fmtsmo6258813.joinVoices([smo62588v1]);
const fmtsmo6790313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo67903v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67903v0ar = [];
const smo67882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67882.setAttribute('id', 'smo67882');
smo67903v0ar.push(smo67882);
const smo67883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo67883.setAttribute('id', 'smo67883');
const smo678830acc = new VF.Accidental('#');
smo67883.addModifier(smo678830acc, 0);
smo67883.addModifier(new VF.Dot(), 0);
smo67903v0ar.push(smo67883);
const smo67884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo67884.setAttribute('id', 'smo67884');
smo67903v0ar.push(smo67884);
const smo67885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67885.setAttribute('id', 'smo67885');
smo67903v0ar.push(smo67885);
const smo67886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo67886.setAttribute('id', 'smo67886');
smo67886.addModifier(new VF.Dot(), 0);
smo67903v0ar.push(smo67886);
const smo67887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/3/n"]}'))
smo67887.setAttribute('id', 'smo67887');
smo67903v0ar.push(smo67887);
smo67903v0.addTickables(smo67903v0ar)
fmtsmo6790313.joinVoices([smo67903v0]);
const smo67903v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67903v1ar = [];
const smo67888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67888.setAttribute('id', 'smo67888');
smo67888.setStyle({ fillStyle: "#115511" });
smo67903v1ar.push(smo67888);
const smo67889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67889.setAttribute('id', 'smo67889');
smo67889.setStyle({ fillStyle: "#115511" });
smo67903v1ar.push(smo67889);
smo67903v1.addTickables(smo67903v1ar)
fmtsmo6790313.joinVoices([smo67903v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71669 = smo62558.getStemDirection();
smo62558.setStemDirection(dirsmo71669);
smo62559.setStemDirection(dirsmo71669);
const smo71669 = new VF.Beam([smo62558,smo62559]);
const dirsmo71670 = smo62560.getStemDirection();
smo62560.setStemDirection(dirsmo71670);
smo62561.setStemDirection(dirsmo71670);
smo62562.setStemDirection(dirsmo71670);
smo62563.setStemDirection(dirsmo71670);
const smo71670 = new VF.Beam([smo62560,smo62561,smo62562,smo62563]);
const dirsmo71671 = smo62565.getStemDirection();
smo62565.setStemDirection(dirsmo71671);
smo62566.setStemDirection(dirsmo71671);
const smo71671 = new VF.Beam([smo62565,smo62566]);
const dirsmo71672 = smo62567.getStemDirection();
smo62567.setStemDirection(dirsmo71672);
smo62568.setStemDirection(dirsmo71672);
smo62569.setStemDirection(dirsmo71672);
smo62570.setStemDirection(dirsmo71672);
const smo71672 = new VF.Beam([smo62567,smo62568,smo62569,smo62570]);
 
// formatting measures in staff group smo60952
fmtsmo6258813.format([smo62588v0,smo62588v1,smo67903v0,smo67903v1], 560);
const stavesmo62588 = new VF.Stave(684, 1494, 574);
stavesmo62588.setAttribute('id', 'stavesmo62588');
stavesmo62588.setBegBarType(VF.Barline.type.NONE);
stavesmo62588.setContext(context);
stavesmo62588.draw();
smo62588v0.draw(context, stavesmo62588);
smo62588v1.draw(context, stavesmo62588);
smo71669.setContext(context);
smo71669.draw();
smo71670.setContext(context);
smo71670.draw();
smo71671.setContext(context);
smo71671.draw();
smo71672.setContext(context);
smo71672.draw();
const stavesmo67903 = new VF.Stave(684, 1668, 574);
stavesmo67903.setAttribute('id', 'stavesmo67903');
stavesmo67903.setBegBarType(VF.Barline.type.NONE);
stavesmo67903.setContext(context);
stavesmo67903.draw();
smo67903v0.draw(context, stavesmo67903);
smo67903v1.draw(context, stavesmo67903);
const fmtsmo6262014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo62620v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62620v0ar = [];
const smo62589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62589.setAttribute('id', 'smo62589');
smo62620v0ar.push(smo62589);
const smo62590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62590.setAttribute('id', 'smo62590');
smo62620v0ar.push(smo62590);
const smo62591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62591.setAttribute('id', 'smo62591');
smo62620v0ar.push(smo62591);
const smo62592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62592.setAttribute('id', 'smo62592');
smo62620v0ar.push(smo62592);
const smo62593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62593.setAttribute('id', 'smo62593');
smo62620v0ar.push(smo62593);
const smo62594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62594.setAttribute('id', 'smo62594');
smo62620v0ar.push(smo62594);
const smo62595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62595.setAttribute('id', 'smo62595');
smo62620v0ar.push(smo62595);
const smo62596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62596.setAttribute('id', 'smo62596');
smo62620v0ar.push(smo62596);
const smo62597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62597.setAttribute('id', 'smo62597');
smo62620v0ar.push(smo62597);
const smo62598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62598.setAttribute('id', 'smo62598');
smo62620v0ar.push(smo62598);
const smo62599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62599.setAttribute('id', 'smo62599');
smo62620v0ar.push(smo62599);
const smo62600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62600.setAttribute('id', 'smo62600');
smo62620v0ar.push(smo62600);
const smo62601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo62601.setAttribute('id', 'smo62601');
smo62620v0ar.push(smo62601);
const smo62602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo62602.setAttribute('id', 'smo62602');
smo62620v0ar.push(smo62602);
smo62620v0.addTickables(smo62620v0ar)
fmtsmo6262014.joinVoices([smo62620v0]);
const smo62620v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62620v1ar = [];
const smo62603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62603.setAttribute('id', 'smo62603');
smo62603.setStyle({ fillStyle: '#aaaaaa7f' });
smo62620v1ar.push(smo62603);
const smo62604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62604.setAttribute('id', 'smo62604');
smo62604.setStyle({ fillStyle: '#aaaaaa7f' });
smo62604.addModifier(new VF.Dot(), 0);
smo62604.addModifier(new VF.Dot(), 0);
smo62620v1ar.push(smo62604);
const smo62605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62605.setAttribute('id', 'smo62605');
smo62605.setStyle({ fillStyle: '#aaaaaa7f' });
smo62620v1ar.push(smo62605);
const smo62606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62606.setAttribute('id', 'smo62606');
smo62606.setStyle({ fillStyle: '#aaaaaa7f' });
smo62606.addModifier(new VF.Dot(), 0);
smo62606.addModifier(new VF.Dot(), 0);
smo62620v1ar.push(smo62606);
smo62620v1.addTickables(smo62620v1ar)
fmtsmo6262014.joinVoices([smo62620v1]);
const fmtsmo6792514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo67925v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67925v0ar = [];
const smo67904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67904.setAttribute('id', 'smo67904');
smo67925v0ar.push(smo67904);
const smo67905 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67905.setAttribute('id', 'smo67905');
smo67905.addModifier(new VF.Dot(), 0);
smo67925v0ar.push(smo67905);
const smo67906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67906.setAttribute('id', 'smo67906');
smo67925v0ar.push(smo67906);
const smo67907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/6/r"]}'))
smo67907.setAttribute('id', 'smo67907');
smo67925v0ar.push(smo67907);
const smo67908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67908.setAttribute('id', 'smo67908');
smo67908.addModifier(new VF.Dot(), 0);
smo67925v0ar.push(smo67908);
const smo67909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo67909.setAttribute('id', 'smo67909');
smo67925v0ar.push(smo67909);
smo67925v0.addTickables(smo67925v0ar)
fmtsmo6792514.joinVoices([smo67925v0]);
const smo67925v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67925v1ar = [];
const smo67910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67910.setAttribute('id', 'smo67910');
smo67910.setStyle({ fillStyle: "#115511" });
smo67925v1ar.push(smo67910);
const smo67911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67911.setAttribute('id', 'smo67911');
smo67911.setStyle({ fillStyle: "#115511" });
smo67925v1ar.push(smo67911);
smo67925v1.addTickables(smo67925v1ar)
fmtsmo6792514.joinVoices([smo67925v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71677 = smo62590.getStemDirection();
smo62590.setStemDirection(dirsmo71677);
smo62591.setStemDirection(dirsmo71677);
const smo71677 = new VF.Beam([smo62590,smo62591]);
const dirsmo71678 = smo62592.getStemDirection();
smo62592.setStemDirection(dirsmo71678);
smo62593.setStemDirection(dirsmo71678);
smo62594.setStemDirection(dirsmo71678);
smo62595.setStemDirection(dirsmo71678);
const smo71678 = new VF.Beam([smo62592,smo62593,smo62594,smo62595]);
const dirsmo71679 = smo62597.getStemDirection();
smo62597.setStemDirection(dirsmo71679);
smo62598.setStemDirection(dirsmo71679);
const smo71679 = new VF.Beam([smo62597,smo62598]);
const dirsmo71680 = smo62599.getStemDirection();
smo62599.setStemDirection(dirsmo71680);
smo62600.setStemDirection(dirsmo71680);
smo62601.setStemDirection(dirsmo71680);
smo62602.setStemDirection(dirsmo71680);
const smo71680 = new VF.Beam([smo62599,smo62600,smo62601,smo62602]);
 
// formatting measures in staff group smo60952
fmtsmo6262014.format([smo62620v0,smo62620v1,smo67925v0,smo67925v1], 535);
const stavesmo62620 = new VF.Stave(1258, 1494, 549);
stavesmo62620.setAttribute('id', 'stavesmo62620');
stavesmo62620.setBegBarType(VF.Barline.type.NONE);
stavesmo62620.setContext(context);
stavesmo62620.draw();
smo62620v0.draw(context, stavesmo62620);
smo62620v1.draw(context, stavesmo62620);
smo71677.setContext(context);
smo71677.draw();
smo71678.setContext(context);
smo71678.draw();
smo71679.setContext(context);
smo71679.draw();
smo71680.setContext(context);
smo71680.draw();
const stavesmo67925 = new VF.Stave(1258, 1668, 549);
stavesmo67925.setAttribute('id', 'stavesmo67925');
stavesmo67925.setBegBarType(VF.Barline.type.NONE);
stavesmo67925.setContext(context);
stavesmo67925.draw();
smo67925v0.draw(context, stavesmo67925);
smo67925v1.draw(context, stavesmo67925);
const rightsmo60952stavesmo626201 = new VF.StaveConnector(stavesmo62620, stavesmo67925).setType(0);
rightsmo60952stavesmo626201.setContext(context).draw();
const fmtsmo6265215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo62652v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62652v0ar = [];
const smo62621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62621.setAttribute('id', 'smo62621');
smo62652v0ar.push(smo62621);
const smo62622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62622.setAttribute('id', 'smo62622');
smo62652v0ar.push(smo62622);
const smo62623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62623.setAttribute('id', 'smo62623');
smo62652v0ar.push(smo62623);
const smo62624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62624.setAttribute('id', 'smo62624');
smo62652v0ar.push(smo62624);
const smo62625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62625.setAttribute('id', 'smo62625');
smo62652v0ar.push(smo62625);
const smo62626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62626.setAttribute('id', 'smo62626');
smo62652v0ar.push(smo62626);
const smo62627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62627.setAttribute('id', 'smo62627');
smo62652v0ar.push(smo62627);
const smo62628 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62628.setAttribute('id', 'smo62628');
smo62652v0ar.push(smo62628);
const smo62629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62629.setAttribute('id', 'smo62629');
smo62652v0ar.push(smo62629);
const smo62630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62630.setAttribute('id', 'smo62630');
smo62652v0ar.push(smo62630);
const smo62631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62631.setAttribute('id', 'smo62631');
smo62652v0ar.push(smo62631);
const smo62632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62632.setAttribute('id', 'smo62632');
smo62652v0ar.push(smo62632);
const smo62633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62633.setAttribute('id', 'smo62633');
smo62652v0ar.push(smo62633);
const smo62634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62634.setAttribute('id', 'smo62634');
smo62652v0ar.push(smo62634);
smo62652v0.addTickables(smo62652v0ar)
fmtsmo6265215.joinVoices([smo62652v0]);
const smo62652v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62652v1ar = [];
const smo62635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62635.setAttribute('id', 'smo62635');
smo62635.setStyle({ fillStyle: '#aaaaaa7f' });
smo62652v1ar.push(smo62635);
const smo62636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62636.setAttribute('id', 'smo62636');
smo62636.setStyle({ fillStyle: '#aaaaaa7f' });
smo62636.addModifier(new VF.Dot(), 0);
smo62636.addModifier(new VF.Dot(), 0);
smo62652v1ar.push(smo62636);
const smo62637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62637.setAttribute('id', 'smo62637');
smo62637.setStyle({ fillStyle: '#aaaaaa7f' });
smo62652v1ar.push(smo62637);
const smo62638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62638.setAttribute('id', 'smo62638');
smo62638.setStyle({ fillStyle: '#aaaaaa7f' });
smo62638.addModifier(new VF.Dot(), 0);
smo62638.addModifier(new VF.Dot(), 0);
smo62652v1ar.push(smo62638);
smo62652v1.addTickables(smo62652v1ar)
fmtsmo6265215.joinVoices([smo62652v1]);
const fmtsmo6794715 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo67947v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67947v0ar = [];
const smo67926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67926.setAttribute('id', 'smo67926');
smo67947v0ar.push(smo67926);
const smo67927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67927.setAttribute('id', 'smo67927');
smo67927.addModifier(new VF.Dot(), 0);
smo67947v0ar.push(smo67927);
const smo67928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67928.setAttribute('id', 'smo67928');
smo67947v0ar.push(smo67928);
const smo67929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67929.setAttribute('id', 'smo67929');
smo67947v0ar.push(smo67929);
const smo67930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67930.setAttribute('id', 'smo67930');
smo67930.addModifier(new VF.Dot(), 0);
smo67947v0ar.push(smo67930);
const smo67931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67931.setAttribute('id', 'smo67931');
smo67947v0ar.push(smo67931);
smo67947v0.addTickables(smo67947v0ar)
fmtsmo6794715.joinVoices([smo67947v0]);
const smo67947v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67947v1ar = [];
const smo67932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67932.setAttribute('id', 'smo67932');
smo67932.setStyle({ fillStyle: "#115511" });
smo67947v1ar.push(smo67932);
const smo67933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67933.setAttribute('id', 'smo67933');
smo67933.setStyle({ fillStyle: "#115511" });
smo67947v1ar.push(smo67933);
smo67947v1.addTickables(smo67947v1ar)
fmtsmo6794715.joinVoices([smo67947v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71693 = smo62622.getStemDirection();
smo62622.setStemDirection(dirsmo71693);
smo62623.setStemDirection(dirsmo71693);
const smo71693 = new VF.Beam([smo62622,smo62623]);
const dirsmo71694 = smo62624.getStemDirection();
smo62624.setStemDirection(dirsmo71694);
smo62625.setStemDirection(dirsmo71694);
smo62626.setStemDirection(dirsmo71694);
smo62627.setStemDirection(dirsmo71694);
const smo71694 = new VF.Beam([smo62624,smo62625,smo62626,smo62627]);
const dirsmo71695 = smo62629.getStemDirection();
smo62629.setStemDirection(dirsmo71695);
smo62630.setStemDirection(dirsmo71695);
const smo71695 = new VF.Beam([smo62629,smo62630]);
const dirsmo71696 = smo62631.getStemDirection();
smo62631.setStemDirection(dirsmo71696);
smo62632.setStemDirection(dirsmo71696);
smo62633.setStemDirection(dirsmo71696);
smo62634.setStemDirection(dirsmo71696);
const smo71696 = new VF.Beam([smo62631,smo62632,smo62633,smo62634]);
 
// formatting measures in staff group smo60952
fmtsmo6265215.format([smo62652v0,smo62652v1,smo67947v0,smo67947v1], 544);
const stavesmo62652 = new VF.Stave(90, 1778, 602);
stavesmo62652.setAttribute('id', 'stavesmo62652');
stavesmo62652.setBegBarType(1);
stavesmo62652.addClef('treble');
stavesmo62652.setContext(context);
stavesmo62652.draw();
smo62652v0.draw(context, stavesmo62652);
smo62652v1.draw(context, stavesmo62652);
smo71693.setContext(context);
smo71693.draw();
smo71694.setContext(context);
smo71694.draw();
smo71695.setContext(context);
smo71695.draw();
smo71696.setContext(context);
smo71696.draw();
const stavesmo67947 = new VF.Stave(90, 1862, 602);
stavesmo67947.setAttribute('id', 'stavesmo67947');
stavesmo67947.setBegBarType(1);
stavesmo67947.addClef('treble');
stavesmo67947.setContext(context);
stavesmo67947.draw();
smo67947v0.draw(context, stavesmo67947);
smo67947v1.draw(context, stavesmo67947);
const leftsmo60952stavesmo626521 = new VF.StaveConnector(stavesmo62652, stavesmo67947).setType(3);
leftsmo60952stavesmo626521.setContext(context).draw();
const fmtsmo6268416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo62684v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62684v0ar = [];
const smo62653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62653.setAttribute('id', 'smo62653');
smo62684v0ar.push(smo62653);
const smo62654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62654.setAttribute('id', 'smo62654');
smo62684v0ar.push(smo62654);
const smo62655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62655.setAttribute('id', 'smo62655');
smo62684v0ar.push(smo62655);
const smo62656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62656.setAttribute('id', 'smo62656');
smo62684v0ar.push(smo62656);
const smo62657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62657.setAttribute('id', 'smo62657');
smo62684v0ar.push(smo62657);
const smo62658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62658.setAttribute('id', 'smo62658');
smo62684v0ar.push(smo62658);
const smo62659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62659.setAttribute('id', 'smo62659');
smo62684v0ar.push(smo62659);
const smo62660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62660.setAttribute('id', 'smo62660');
smo62684v0ar.push(smo62660);
const smo62661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62661.setAttribute('id', 'smo62661');
smo62684v0ar.push(smo62661);
const smo62662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62662.setAttribute('id', 'smo62662');
smo62684v0ar.push(smo62662);
const smo62663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62663.setAttribute('id', 'smo62663');
smo62684v0ar.push(smo62663);
const smo62664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62664.setAttribute('id', 'smo62664');
smo62684v0ar.push(smo62664);
const smo62665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62665.setAttribute('id', 'smo62665');
smo62684v0ar.push(smo62665);
const smo62666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62666.setAttribute('id', 'smo62666');
smo62684v0ar.push(smo62666);
smo62684v0.addTickables(smo62684v0ar)
fmtsmo6268416.joinVoices([smo62684v0]);
const smo62684v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62684v1ar = [];
const smo62667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62667.setAttribute('id', 'smo62667');
smo62667.setStyle({ fillStyle: '#aaaaaa7f' });
smo62684v1ar.push(smo62667);
const smo62668 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62668.setAttribute('id', 'smo62668');
smo62668.setStyle({ fillStyle: '#aaaaaa7f' });
smo62668.addModifier(new VF.Dot(), 0);
smo62668.addModifier(new VF.Dot(), 0);
smo62684v1ar.push(smo62668);
const smo62669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62669.setAttribute('id', 'smo62669');
smo62669.setStyle({ fillStyle: '#aaaaaa7f' });
smo62684v1ar.push(smo62669);
const smo62670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62670.setAttribute('id', 'smo62670');
smo62670.setStyle({ fillStyle: '#aaaaaa7f' });
smo62670.addModifier(new VF.Dot(), 0);
smo62670.addModifier(new VF.Dot(), 0);
smo62684v1ar.push(smo62670);
smo62684v1.addTickables(smo62684v1ar)
fmtsmo6268416.joinVoices([smo62684v1]);
const fmtsmo6796916 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo67969v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67969v0ar = [];
const smo67948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67948.setAttribute('id', 'smo67948');
smo67969v0ar.push(smo67948);
const smo67949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67949.setAttribute('id', 'smo67949');
smo67949.addModifier(new VF.Dot(), 0);
smo67969v0ar.push(smo67949);
const smo67950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67950.setAttribute('id', 'smo67950');
smo67969v0ar.push(smo67950);
const smo67951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67951.setAttribute('id', 'smo67951');
smo67969v0ar.push(smo67951);
const smo67952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67952.setAttribute('id', 'smo67952');
smo67952.addModifier(new VF.Dot(), 0);
smo67969v0ar.push(smo67952);
const smo67953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo67953.setAttribute('id', 'smo67953');
smo67969v0ar.push(smo67953);
smo67969v0.addTickables(smo67969v0ar)
fmtsmo6796916.joinVoices([smo67969v0]);
const smo67969v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67969v1ar = [];
const smo67954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67954.setAttribute('id', 'smo67954');
smo67954.setStyle({ fillStyle: "#115511" });
smo67969v1ar.push(smo67954);
const smo67955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67955.setAttribute('id', 'smo67955');
smo67955.setStyle({ fillStyle: "#115511" });
smo67969v1ar.push(smo67955);
smo67969v1.addTickables(smo67969v1ar)
fmtsmo6796916.joinVoices([smo67969v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71701 = smo62654.getStemDirection();
smo62654.setStemDirection(dirsmo71701);
smo62655.setStemDirection(dirsmo71701);
const smo71701 = new VF.Beam([smo62654,smo62655]);
const dirsmo71702 = smo62656.getStemDirection();
smo62656.setStemDirection(dirsmo71702);
smo62657.setStemDirection(dirsmo71702);
smo62658.setStemDirection(dirsmo71702);
smo62659.setStemDirection(dirsmo71702);
const smo71702 = new VF.Beam([smo62656,smo62657,smo62658,smo62659]);
const dirsmo71703 = smo62661.getStemDirection();
smo62661.setStemDirection(dirsmo71703);
smo62662.setStemDirection(dirsmo71703);
const smo71703 = new VF.Beam([smo62661,smo62662]);
const dirsmo71704 = smo62663.getStemDirection();
smo62663.setStemDirection(dirsmo71704);
smo62664.setStemDirection(dirsmo71704);
smo62665.setStemDirection(dirsmo71704);
smo62666.setStemDirection(dirsmo71704);
const smo71704 = new VF.Beam([smo62663,smo62664,smo62665,smo62666]);
 
// formatting measures in staff group smo60952
fmtsmo6268416.format([smo62684v0,smo62684v1,smo67969v0,smo67969v1], 544);
const stavesmo62684 = new VF.Stave(692, 1778, 558);
stavesmo62684.setAttribute('id', 'stavesmo62684');
stavesmo62684.setBegBarType(VF.Barline.type.NONE);
stavesmo62684.setContext(context);
stavesmo62684.draw();
smo62684v0.draw(context, stavesmo62684);
smo62684v1.draw(context, stavesmo62684);
smo71701.setContext(context);
smo71701.draw();
smo71702.setContext(context);
smo71702.draw();
smo71703.setContext(context);
smo71703.draw();
smo71704.setContext(context);
smo71704.draw();
const stavesmo67969 = new VF.Stave(692, 1862, 558);
stavesmo67969.setAttribute('id', 'stavesmo67969');
stavesmo67969.setBegBarType(VF.Barline.type.NONE);
stavesmo67969.setContext(context);
stavesmo67969.draw();
smo67969v0.draw(context, stavesmo67969);
smo67969v1.draw(context, stavesmo67969);
const fmtsmo6271617 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo62716v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62716v0ar = [];
const smo62685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62685.setAttribute('id', 'smo62685');
smo62716v0ar.push(smo62685);
const smo62686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62686.setAttribute('id', 'smo62686');
smo62716v0ar.push(smo62686);
const smo62687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","stem_direction":1,"auto_stem":false,"keys":["bn/4/r"]}'))
smo62687.setAttribute('id', 'smo62687');
smo62716v0ar.push(smo62687);
const smo62688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62688.setAttribute('id', 'smo62688');
smo62716v0ar.push(smo62688);
const smo62689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62689.setAttribute('id', 'smo62689');
smo62716v0ar.push(smo62689);
const smo62690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62690.setAttribute('id', 'smo62690');
smo62716v0ar.push(smo62690);
const smo62691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62691.setAttribute('id', 'smo62691');
smo62716v0ar.push(smo62691);
const smo62692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62692.setAttribute('id', 'smo62692');
smo62716v0ar.push(smo62692);
const smo62693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62693.setAttribute('id', 'smo62693');
smo62716v0ar.push(smo62693);
const smo62694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62694.setAttribute('id', 'smo62694');
smo62716v0ar.push(smo62694);
const smo62695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62695.setAttribute('id', 'smo62695');
smo62716v0ar.push(smo62695);
const smo62696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62696.setAttribute('id', 'smo62696');
smo62716v0ar.push(smo62696);
const smo62697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo62697.setAttribute('id', 'smo62697');
smo62716v0ar.push(smo62697);
const smo62698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo62698.setAttribute('id', 'smo62698');
smo62716v0ar.push(smo62698);
smo62716v0.addTickables(smo62716v0ar)
fmtsmo6271617.joinVoices([smo62716v0]);
const smo62716v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62716v1ar = [];
const smo62699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62699.setAttribute('id', 'smo62699');
smo62699.setStyle({ fillStyle: '#aaaaaa7f' });
smo62716v1ar.push(smo62699);
const smo62700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62700.setAttribute('id', 'smo62700');
smo62700.setStyle({ fillStyle: '#aaaaaa7f' });
smo62700.addModifier(new VF.Dot(), 0);
smo62700.addModifier(new VF.Dot(), 0);
smo62716v1ar.push(smo62700);
const smo62701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62701.setAttribute('id', 'smo62701');
smo62701.setStyle({ fillStyle: '#aaaaaa7f' });
smo62716v1ar.push(smo62701);
const smo62702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62702.setAttribute('id', 'smo62702');
smo62702.setStyle({ fillStyle: '#aaaaaa7f' });
smo62702.addModifier(new VF.Dot(), 0);
smo62702.addModifier(new VF.Dot(), 0);
smo62716v1ar.push(smo62702);
smo62716v1.addTickables(smo62716v1ar)
fmtsmo6271617.joinVoices([smo62716v1]);
const fmtsmo6799117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo67991v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67991v0ar = [];
const smo67970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67970.setAttribute('id', 'smo67970');
smo67991v0ar.push(smo67970);
const smo67971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67971.setAttribute('id', 'smo67971');
smo67971.addModifier(new VF.Dot(), 0);
smo67991v0ar.push(smo67971);
const smo67972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67972.setAttribute('id', 'smo67972');
smo67991v0ar.push(smo67972);
const smo67973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67973.setAttribute('id', 'smo67973');
smo67991v0ar.push(smo67973);
const smo67974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67974.setAttribute('id', 'smo67974');
smo67974.addModifier(new VF.Dot(), 0);
smo67991v0ar.push(smo67974);
const smo67975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo67975.setAttribute('id', 'smo67975');
smo67991v0ar.push(smo67975);
smo67991v0.addTickables(smo67991v0ar)
fmtsmo6799117.joinVoices([smo67991v0]);
const smo67991v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo67991v1ar = [];
const smo67976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo67976.setAttribute('id', 'smo67976');
smo67976.setStyle({ fillStyle: "#115511" });
smo67991v1ar.push(smo67976);
const smo67977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo67977.setAttribute('id', 'smo67977');
smo67977.setStyle({ fillStyle: "#115511" });
smo67991v1ar.push(smo67977);
smo67991v1.addTickables(smo67991v1ar)
fmtsmo6799117.joinVoices([smo67991v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71709 = smo62688.getStemDirection();
smo62688.setStemDirection(dirsmo71709);
smo62689.setStemDirection(dirsmo71709);
smo62690.setStemDirection(dirsmo71709);
smo62691.setStemDirection(dirsmo71709);
const smo71709 = new VF.Beam([smo62688,smo62689,smo62690,smo62691]);
const dirsmo71710 = smo62693.getStemDirection();
smo62693.setStemDirection(dirsmo71710);
smo62694.setStemDirection(dirsmo71710);
const smo71710 = new VF.Beam([smo62693,smo62694]);
const dirsmo71711 = smo62695.getStemDirection();
smo62695.setStemDirection(dirsmo71711);
smo62696.setStemDirection(dirsmo71711);
smo62697.setStemDirection(dirsmo71711);
smo62698.setStemDirection(dirsmo71711);
const smo71711 = new VF.Beam([smo62695,smo62696,smo62697,smo62698]);
 
// formatting measures in staff group smo60952
fmtsmo6271617.format([smo62716v0,smo62716v1,smo67991v0,smo67991v1], 544);
const stavesmo62716 = new VF.Stave(1250, 1778, 558);
stavesmo62716.setAttribute('id', 'stavesmo62716');
stavesmo62716.setBegBarType(VF.Barline.type.NONE);
stavesmo62716.setContext(context);
stavesmo62716.draw();
smo62716v0.draw(context, stavesmo62716);
smo62716v1.draw(context, stavesmo62716);
smo71709.setContext(context);
smo71709.draw();
smo71710.setContext(context);
smo71710.draw();
smo71711.setContext(context);
smo71711.draw();
const stavesmo67991 = new VF.Stave(1250, 1862, 558);
stavesmo67991.setAttribute('id', 'stavesmo67991');
stavesmo67991.setBegBarType(VF.Barline.type.NONE);
stavesmo67991.setContext(context);
stavesmo67991.draw();
smo67991v0.draw(context, stavesmo67991);
smo67991v1.draw(context, stavesmo67991);
const rightsmo60952stavesmo627161 = new VF.StaveConnector(stavesmo62716, stavesmo67991).setType(0);
rightsmo60952stavesmo627161.setContext(context).draw();
const fmtsmo6274818 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo62748v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62748v0ar = [];
const smo62717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62717.setAttribute('id', 'smo62717');
smo62748v0ar.push(smo62717);
const smo62718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62718.setAttribute('id', 'smo62718');
smo62748v0ar.push(smo62718);
const smo62719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62719.setAttribute('id', 'smo62719');
smo62748v0ar.push(smo62719);
const smo62720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62720.setAttribute('id', 'smo62720');
smo62748v0ar.push(smo62720);
const smo62721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62721.setAttribute('id', 'smo62721');
smo62748v0ar.push(smo62721);
const smo62722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62722.setAttribute('id', 'smo62722');
smo62748v0ar.push(smo62722);
const smo62723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62723.setAttribute('id', 'smo62723');
smo62748v0ar.push(smo62723);
const smo62724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62724.setAttribute('id', 'smo62724');
smo62748v0ar.push(smo62724);
const smo62725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62725.setAttribute('id', 'smo62725');
smo62748v0ar.push(smo62725);
const smo62726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62726.setAttribute('id', 'smo62726');
smo62748v0ar.push(smo62726);
const smo62727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62727.setAttribute('id', 'smo62727');
smo62748v0ar.push(smo62727);
const smo62728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo62728.setAttribute('id', 'smo62728');
smo62748v0ar.push(smo62728);
const smo62729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62729.setAttribute('id', 'smo62729');
smo62748v0ar.push(smo62729);
const smo62730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62730.setAttribute('id', 'smo62730');
smo62748v0ar.push(smo62730);
smo62748v0.addTickables(smo62748v0ar)
fmtsmo6274818.joinVoices([smo62748v0]);
const smo62748v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62748v1ar = [];
const smo62731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62731.setAttribute('id', 'smo62731');
smo62731.setStyle({ fillStyle: '#aaaaaa7f' });
smo62748v1ar.push(smo62731);
const smo62732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62732.setAttribute('id', 'smo62732');
smo62732.setStyle({ fillStyle: '#aaaaaa7f' });
smo62732.addModifier(new VF.Dot(), 0);
smo62732.addModifier(new VF.Dot(), 0);
smo62748v1ar.push(smo62732);
const smo62733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62733.setAttribute('id', 'smo62733');
smo62733.setStyle({ fillStyle: '#aaaaaa7f' });
smo62748v1ar.push(smo62733);
const smo62734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62734.setAttribute('id', 'smo62734');
smo62734.setStyle({ fillStyle: '#aaaaaa7f' });
smo62734.addModifier(new VF.Dot(), 0);
smo62734.addModifier(new VF.Dot(), 0);
smo62748v1ar.push(smo62734);
smo62748v1.addTickables(smo62748v1ar)
fmtsmo6274818.joinVoices([smo62748v1]);
const fmtsmo6801318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo68013v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68013v0ar = [];
const smo67992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67992.setAttribute('id', 'smo67992');
smo68013v0ar.push(smo67992);
const smo67993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67993.setAttribute('id', 'smo67993');
smo67993.addModifier(new VF.Dot(), 0);
smo68013v0ar.push(smo67993);
const smo67994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67994.setAttribute('id', 'smo67994');
smo68013v0ar.push(smo67994);
const smo67995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo67995.setAttribute('id', 'smo67995');
smo68013v0ar.push(smo67995);
const smo67996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67996.setAttribute('id', 'smo67996');
smo67996.addModifier(new VF.Dot(), 0);
smo68013v0ar.push(smo67996);
const smo67997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo67997.setAttribute('id', 'smo67997');
smo68013v0ar.push(smo67997);
smo68013v0.addTickables(smo68013v0ar)
fmtsmo6801318.joinVoices([smo68013v0]);
const smo68013v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68013v1ar = [];
const smo67998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo67998.setAttribute('id', 'smo67998');
smo67998.setStyle({ fillStyle: "#115511" });
smo68013v1ar.push(smo67998);
const smo67999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo67999.setAttribute('id', 'smo67999');
smo67999.setStyle({ fillStyle: "#115511" });
smo68013v1ar.push(smo67999);
smo68013v1.addTickables(smo68013v1ar)
fmtsmo6801318.joinVoices([smo68013v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71724 = smo62718.getStemDirection();
smo62718.setStemDirection(dirsmo71724);
smo62719.setStemDirection(dirsmo71724);
const smo71724 = new VF.Beam([smo62718,smo62719]);
const dirsmo71725 = smo62720.getStemDirection();
smo62720.setStemDirection(dirsmo71725);
smo62721.setStemDirection(dirsmo71725);
smo62722.setStemDirection(dirsmo71725);
smo62723.setStemDirection(dirsmo71725);
const smo71725 = new VF.Beam([smo62720,smo62721,smo62722,smo62723]);
const dirsmo71726 = smo62725.getStemDirection();
smo62725.setStemDirection(dirsmo71726);
smo62726.setStemDirection(dirsmo71726);
const smo71726 = new VF.Beam([smo62725,smo62726]);
const dirsmo71727 = smo62727.getStemDirection();
smo62727.setStemDirection(dirsmo71727);
smo62728.setStemDirection(dirsmo71727);
smo62729.setStemDirection(dirsmo71727);
smo62730.setStemDirection(dirsmo71727);
const smo71727 = new VF.Beam([smo62727,smo62728,smo62729,smo62730]);
 
// formatting measures in staff group smo60952
fmtsmo6274818.format([smo62748v0,smo62748v1,smo68013v0,smo68013v1], 529);
const stavesmo62748 = new VF.Stave(90, 2049, 587);
stavesmo62748.setAttribute('id', 'stavesmo62748');
stavesmo62748.setBegBarType(1);
stavesmo62748.addClef('treble');
stavesmo62748.setContext(context);
stavesmo62748.draw();
smo62748v0.draw(context, stavesmo62748);
smo62748v1.draw(context, stavesmo62748);
smo71724.setContext(context);
smo71724.draw();
smo71725.setContext(context);
smo71725.draw();
smo71726.setContext(context);
smo71726.draw();
smo71727.setContext(context);
smo71727.draw();
const stavesmo68013 = new VF.Stave(90, 2136, 587);
stavesmo68013.setAttribute('id', 'stavesmo68013');
stavesmo68013.setBegBarType(1);
stavesmo68013.addClef('treble');
stavesmo68013.setContext(context);
stavesmo68013.draw();
smo68013v0.draw(context, stavesmo68013);
smo68013v1.draw(context, stavesmo68013);
const leftsmo60952stavesmo627481 = new VF.StaveConnector(stavesmo62748, stavesmo68013).setType(3);
leftsmo60952stavesmo627481.setContext(context).draw();
const fmtsmo6278019 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo62780v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62780v0ar = [];
const smo62749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62749.setAttribute('id', 'smo62749');
smo62780v0ar.push(smo62749);
const smo62750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo62750.setAttribute('id', 'smo62750');
const smo627500acc = new VF.Accidental('b');
smo62750.addModifier(smo627500acc, 0);
smo62780v0ar.push(smo62750);
const smo62751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62751.setAttribute('id', 'smo62751');
smo62780v0ar.push(smo62751);
const smo62752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62752.setAttribute('id', 'smo62752');
smo62780v0ar.push(smo62752);
const smo62753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo62753.setAttribute('id', 'smo62753');
smo62780v0ar.push(smo62753);
const smo62754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62754.setAttribute('id', 'smo62754');
smo62780v0ar.push(smo62754);
const smo62755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62755.setAttribute('id', 'smo62755');
smo62780v0ar.push(smo62755);
const smo62756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62756.setAttribute('id', 'smo62756');
smo62780v0ar.push(smo62756);
const smo62757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo62757.setAttribute('id', 'smo62757');
smo62780v0ar.push(smo62757);
const smo62758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62758.setAttribute('id', 'smo62758');
smo62780v0ar.push(smo62758);
const smo62759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62759.setAttribute('id', 'smo62759');
smo62780v0ar.push(smo62759);
const smo62760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo62760.setAttribute('id', 'smo62760');
smo62780v0ar.push(smo62760);
const smo62761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62761.setAttribute('id', 'smo62761');
smo62780v0ar.push(smo62761);
const smo62762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62762.setAttribute('id', 'smo62762');
smo62780v0ar.push(smo62762);
smo62780v0.addTickables(smo62780v0ar)
fmtsmo6278019.joinVoices([smo62780v0]);
const smo62780v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62780v1ar = [];
const smo62763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62763.setAttribute('id', 'smo62763');
smo62763.setStyle({ fillStyle: '#aaaaaa7f' });
smo62780v1ar.push(smo62763);
const smo62764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62764.setAttribute('id', 'smo62764');
smo62764.setStyle({ fillStyle: '#aaaaaa7f' });
smo62764.addModifier(new VF.Dot(), 0);
smo62764.addModifier(new VF.Dot(), 0);
smo62780v1ar.push(smo62764);
const smo62765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62765.setAttribute('id', 'smo62765');
smo62765.setStyle({ fillStyle: '#aaaaaa7f' });
smo62780v1ar.push(smo62765);
const smo62766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62766.setAttribute('id', 'smo62766');
smo62766.setStyle({ fillStyle: '#aaaaaa7f' });
smo62766.addModifier(new VF.Dot(), 0);
smo62766.addModifier(new VF.Dot(), 0);
smo62780v1ar.push(smo62766);
smo62780v1.addTickables(smo62780v1ar)
fmtsmo6278019.joinVoices([smo62780v1]);
const fmtsmo6803519 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo68035v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68035v0ar = [];
const smo68014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68014.setAttribute('id', 'smo68014');
smo68035v0ar.push(smo68014);
const smo68015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68015.setAttribute('id', 'smo68015');
smo68015.addModifier(new VF.Dot(), 0);
smo68035v0ar.push(smo68015);
const smo68016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68016.setAttribute('id', 'smo68016');
smo68035v0ar.push(smo68016);
const smo68017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68017.setAttribute('id', 'smo68017');
smo68035v0ar.push(smo68017);
const smo68018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68018.setAttribute('id', 'smo68018');
smo68018.addModifier(new VF.Dot(), 0);
smo68035v0ar.push(smo68018);
const smo68019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo68019.setAttribute('id', 'smo68019');
smo68035v0ar.push(smo68019);
smo68035v0.addTickables(smo68035v0ar)
fmtsmo6803519.joinVoices([smo68035v0]);
const smo68035v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68035v1ar = [];
const smo68020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68020.setAttribute('id', 'smo68020');
smo68020.setStyle({ fillStyle: "#115511" });
smo68035v1ar.push(smo68020);
const smo68021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo68021.setAttribute('id', 'smo68021');
smo68021.setStyle({ fillStyle: "#115511" });
smo68035v1ar.push(smo68021);
smo68035v1.addTickables(smo68035v1ar)
fmtsmo6803519.joinVoices([smo68035v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71732 = smo62750.getStemDirection();
smo62750.setStemDirection(dirsmo71732);
smo62751.setStemDirection(dirsmo71732);
const smo71732 = new VF.Beam([smo62750,smo62751]);
const dirsmo71733 = smo62752.getStemDirection();
smo62752.setStemDirection(dirsmo71733);
smo62753.setStemDirection(dirsmo71733);
smo62754.setStemDirection(dirsmo71733);
smo62755.setStemDirection(dirsmo71733);
const smo71733 = new VF.Beam([smo62752,smo62753,smo62754,smo62755]);
const dirsmo71734 = smo62757.getStemDirection();
smo62757.setStemDirection(dirsmo71734);
smo62758.setStemDirection(dirsmo71734);
const smo71734 = new VF.Beam([smo62757,smo62758]);
const dirsmo71735 = smo62759.getStemDirection();
smo62759.setStemDirection(dirsmo71735);
smo62760.setStemDirection(dirsmo71735);
smo62761.setStemDirection(dirsmo71735);
smo62762.setStemDirection(dirsmo71735);
const smo71735 = new VF.Beam([smo62759,smo62760,smo62761,smo62762]);
 
// formatting measures in staff group smo60952
fmtsmo6278019.format([smo62780v0,smo62780v1,smo68035v0,smo68035v1], 575);
const stavesmo62780 = new VF.Stave(677, 2049, 589);
stavesmo62780.setAttribute('id', 'stavesmo62780');
stavesmo62780.setBegBarType(VF.Barline.type.NONE);
stavesmo62780.setContext(context);
stavesmo62780.draw();
smo62780v0.draw(context, stavesmo62780);
smo62780v1.draw(context, stavesmo62780);
smo71732.setContext(context);
smo71732.draw();
smo71733.setContext(context);
smo71733.draw();
smo71734.setContext(context);
smo71734.draw();
smo71735.setContext(context);
smo71735.draw();
const stavesmo68035 = new VF.Stave(677, 2136, 589);
stavesmo68035.setAttribute('id', 'stavesmo68035');
stavesmo68035.setBegBarType(VF.Barline.type.NONE);
stavesmo68035.setContext(context);
stavesmo68035.draw();
smo68035v0.draw(context, stavesmo68035);
smo68035v1.draw(context, stavesmo68035);
const fmtsmo6281220 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo62812v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62812v0ar = [];
const smo62781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62781.setAttribute('id', 'smo62781');
smo62812v0ar.push(smo62781);
const smo62782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62782.setAttribute('id', 'smo62782');
smo62812v0ar.push(smo62782);
const smo62783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62783.setAttribute('id', 'smo62783');
smo62812v0ar.push(smo62783);
const smo62784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62784.setAttribute('id', 'smo62784');
smo62812v0ar.push(smo62784);
const smo62785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62785.setAttribute('id', 'smo62785');
smo62812v0ar.push(smo62785);
const smo62786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62786.setAttribute('id', 'smo62786');
smo62812v0ar.push(smo62786);
const smo62787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62787.setAttribute('id', 'smo62787');
smo62812v0ar.push(smo62787);
const smo62788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62788.setAttribute('id', 'smo62788');
smo62812v0ar.push(smo62788);
const smo62789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62789.setAttribute('id', 'smo62789');
smo62812v0ar.push(smo62789);
const smo62790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62790.setAttribute('id', 'smo62790');
smo62812v0ar.push(smo62790);
const smo62791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62791.setAttribute('id', 'smo62791');
smo62812v0ar.push(smo62791);
const smo62792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo62792.setAttribute('id', 'smo62792');
smo62812v0ar.push(smo62792);
const smo62793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo62793.setAttribute('id', 'smo62793');
smo62812v0ar.push(smo62793);
const smo62794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo62794.setAttribute('id', 'smo62794');
smo62812v0ar.push(smo62794);
smo62812v0.addTickables(smo62812v0ar)
fmtsmo6281220.joinVoices([smo62812v0]);
const smo62812v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo62812v1ar = [];
const smo62795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62795.setAttribute('id', 'smo62795');
smo62795.setStyle({ fillStyle: '#aaaaaa7f' });
smo62812v1ar.push(smo62795);
const smo62796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62796.setAttribute('id', 'smo62796');
smo62796.setStyle({ fillStyle: '#aaaaaa7f' });
smo62796.addModifier(new VF.Dot(), 0);
smo62796.addModifier(new VF.Dot(), 0);
smo62812v1ar.push(smo62796);
const smo62797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62797.setAttribute('id', 'smo62797');
smo62797.setStyle({ fillStyle: '#aaaaaa7f' });
smo62812v1ar.push(smo62797);
const smo62798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo62798.setAttribute('id', 'smo62798');
smo62798.setStyle({ fillStyle: '#aaaaaa7f' });
smo62798.addModifier(new VF.Dot(), 0);
smo62798.addModifier(new VF.Dot(), 0);
smo62812v1ar.push(smo62798);
smo62812v1.addTickables(smo62812v1ar)
fmtsmo6281220.joinVoices([smo62812v1]);
const fmtsmo6805720 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo68057v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68057v0ar = [];
const smo68036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68036.setAttribute('id', 'smo68036');
smo68057v0ar.push(smo68036);
const smo68037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68037.setAttribute('id', 'smo68037');
smo68037.addModifier(new VF.Dot(), 0);
smo68057v0ar.push(smo68037);
const smo68038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68038.setAttribute('id', 'smo68038');
smo68057v0ar.push(smo68038);
const smo68039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo68039.setAttribute('id', 'smo68039');
smo68057v0ar.push(smo68039);
const smo68040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68040.setAttribute('id', 'smo68040');
smo68040.addModifier(new VF.Dot(), 0);
smo68057v0ar.push(smo68040);
const smo68041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo68041.setAttribute('id', 'smo68041');
smo68057v0ar.push(smo68041);
smo68057v0.addTickables(smo68057v0ar)
fmtsmo6805720.joinVoices([smo68057v0]);
const smo68057v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo68057v1ar = [];
const smo68042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
smo68042.setAttribute('id', 'smo68042');
smo68042.setStyle({ fillStyle: "#115511" });
smo68057v1ar.push(smo68042);
const smo68043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/2/n"]}'))
smo68043.setAttribute('id', 'smo68043');
smo68043.setStyle({ fillStyle: "#115511" });
smo68057v1ar.push(smo68043);
smo68057v1.addTickables(smo68057v1ar)
fmtsmo6805720.joinVoices([smo68057v1]);
// create beam groups and tuplets for format grp smo60952 before formatting
const dirsmo71740 = smo62782.getStemDirection();
smo62782.setStemDirection(dirsmo71740);
smo62783.setStemDirection(dirsmo71740);
const smo71740 = new VF.Beam([smo62782,smo62783]);
const dirsmo71741 = smo62784.getStemDirection();
smo62784.setStemDirection(dirsmo71741);
smo62785.setStemDirection(dirsmo71741);
smo62786.setStemDirection(dirsmo71741);
smo62787.setStemDirection(dirsmo71741);
const smo71741 = new VF.Beam([smo62784,smo62785,smo62786,smo62787]);
const dirsmo71742 = smo62789.getStemDirection();
smo62789.setStemDirection(dirsmo71742);
smo62790.setStemDirection(dirsmo71742);
const smo71742 = new VF.Beam([smo62789,smo62790]);
const dirsmo71743 = smo62791.getStemDirection();
smo62791.setStemDirection(dirsmo71743);
smo62792.setStemDirection(dirsmo71743);
smo62793.setStemDirection(dirsmo71743);
smo62794.setStemDirection(dirsmo71743);
const smo71743 = new VF.Beam([smo62791,smo62792,smo62793,smo62794]);
 
// formatting measures in staff group smo60952
fmtsmo6281220.format([smo62812v0,smo62812v1,smo68057v0,smo68057v1], 529);
const stavesmo62812 = new VF.Stave(1266, 2049, 543);
stavesmo62812.setAttribute('id', 'stavesmo62812');
stavesmo62812.setBegBarType(VF.Barline.type.NONE);
stavesmo62812.setContext(context);
stavesmo62812.draw();
smo62812v0.draw(context, stavesmo62812);
smo62812v1.draw(context, stavesmo62812);
smo71740.setContext(context);
smo71740.draw();
smo71741.setContext(context);
smo71741.draw();
smo71742.setContext(context);
smo71742.draw();
smo71743.setContext(context);
smo71743.draw();
const stavesmo68057 = new VF.Stave(1266, 2136, 543);
stavesmo68057.setAttribute('id', 'stavesmo68057');
stavesmo68057.setBegBarType(VF.Barline.type.NONE);
stavesmo68057.setContext(context);
stavesmo68057.draw();
smo68057v0.draw(context, stavesmo68057);
smo68057v1.draw(context, stavesmo68057);
const rightsmo60952stavesmo628121 = new VF.StaveConnector(stavesmo62812, stavesmo68057).setType(0);
rightsmo60952stavesmo628121.setContext(context).draw();
// modifier from 1-0-0-1 to 1-0-0-2
const smo73969 = new VF.StaveTie({ first_note: smo67597, last_note: smo67598, 
          firstNote: smo67597, lastNote: smo67598, first_indices: [0], last_indices: [0]});
smo73969.setContext(context).draw();
// modifier from 1-0-0-4 to 1-0-0-5
const smo73970 = new VF.StaveTie({ first_note: smo67600, last_note: smo67601, 
          firstNote: smo67600, lastNote: smo67601, first_indices: [0], last_indices: [0]});
smo73970.setContext(context).draw();
// modifier from 1-1-0-1 to 1-1-0-2
const smo73971 = new VF.StaveTie({ first_note: smo67619, last_note: smo67620, 
          firstNote: smo67619, lastNote: smo67620, first_indices: [0], last_indices: [0]});
smo73971.setContext(context).draw();
// modifier from 1-1-0-4 to 1-1-0-5
const smo73972 = new VF.StaveTie({ first_note: smo67622, last_note: smo67623, 
          firstNote: smo67622, lastNote: smo67623, first_indices: [0], last_indices: [0]});
smo73972.setContext(context).draw();
// modifier from 1-2-0-1 to 1-2-0-2
const smo73973 = new VF.StaveTie({ first_note: smo67641, last_note: smo67642, 
          firstNote: smo67641, lastNote: smo67642, first_indices: [0], last_indices: [0]});
smo73973.setContext(context).draw();
// modifier from 1-2-0-4 to 1-2-0-5
const smo73974 = new VF.StaveTie({ first_note: smo67644, last_note: smo67645, 
          firstNote: smo67644, lastNote: smo67645, first_indices: [0], last_indices: [0]});
smo73974.setContext(context).draw();
// modifier from 1-3-0-1 to 1-3-0-2
const smo73975 = new VF.StaveTie({ first_note: smo67663, last_note: smo67664, 
          firstNote: smo67663, lastNote: smo67664, first_indices: [0], last_indices: [0]});
smo73975.setContext(context).draw();
// modifier from 1-3-0-4 to 1-3-0-5
const smo73976 = new VF.StaveTie({ first_note: smo67666, last_note: smo67667, 
          firstNote: smo67666, lastNote: smo67667, first_indices: [0], last_indices: [0]});
smo73976.setContext(context).draw();
// modifier from 1-4-0-1 to 1-4-0-2
const smo73977 = new VF.StaveTie({ first_note: smo67685, last_note: smo67686, 
          firstNote: smo67685, lastNote: smo67686, first_indices: [0], last_indices: [0]});
smo73977.setContext(context).draw();
// modifier from 1-4-0-4 to 1-4-0-5
const smo73978 = new VF.StaveTie({ first_note: smo67688, last_note: smo67689, 
          firstNote: smo67688, lastNote: smo67689, first_indices: [0], last_indices: [0]});
smo73978.setContext(context).draw();
// modifier from 1-5-0-1 to 1-5-0-2
const smo73979 = new VF.StaveTie({ first_note: smo67707, last_note: smo67708, 
          firstNote: smo67707, lastNote: smo67708, first_indices: [0], last_indices: [0]});
smo73979.setContext(context).draw();
// modifier from 1-5-0-4 to 1-5-0-5
const smo73980 = new VF.StaveTie({ first_note: smo67710, last_note: smo67711, 
          firstNote: smo67710, lastNote: smo67711, first_indices: [0], last_indices: [0]});
smo73980.setContext(context).draw();
// modifier from 1-6-0-1 to 1-6-0-2
const smo73981 = new VF.StaveTie({ first_note: smo67729, last_note: smo67730, 
          firstNote: smo67729, lastNote: smo67730, first_indices: [0], last_indices: [0]});
smo73981.setContext(context).draw();
// modifier from 1-6-0-4 to 1-6-0-5
const smo73982 = new VF.StaveTie({ first_note: smo67732, last_note: smo67733, 
          firstNote: smo67732, lastNote: smo67733, first_indices: [0], last_indices: [0]});
smo73982.setContext(context).draw();
// modifier from 1-7-0-1 to 1-7-0-2
const smo73983 = new VF.StaveTie({ first_note: smo67751, last_note: smo67752, 
          firstNote: smo67751, lastNote: smo67752, first_indices: [0], last_indices: [0]});
smo73983.setContext(context).draw();
// modifier from 1-7-0-4 to 1-7-0-5
const smo73984 = new VF.StaveTie({ first_note: smo67754, last_note: smo67755, 
          firstNote: smo67754, lastNote: smo67755, first_indices: [0], last_indices: [0]});
smo73984.setContext(context).draw();
// modifier from 1-8-0-1 to 1-8-0-2
const smo73985 = new VF.StaveTie({ first_note: smo67773, last_note: smo67774, 
          firstNote: smo67773, lastNote: smo67774, first_indices: [0], last_indices: [0]});
smo73985.setContext(context).draw();
// modifier from 1-8-0-4 to 1-8-0-5
const smo73986 = new VF.StaveTie({ first_note: smo67776, last_note: smo67777, 
          firstNote: smo67776, lastNote: smo67777, first_indices: [0], last_indices: [0]});
smo73986.setContext(context).draw();
// modifier from 1-9-0-1 to 1-9-0-2
const smo73987 = new VF.StaveTie({ first_note: smo67795, last_note: smo67796, 
          firstNote: smo67795, lastNote: smo67796, first_indices: [0], last_indices: [0]});
smo73987.setContext(context).draw();
// modifier from 1-9-0-4 to 1-9-0-5
const smo73988 = new VF.StaveTie({ first_note: smo67798, last_note: smo67799, 
          firstNote: smo67798, lastNote: smo67799, first_indices: [0], last_indices: [0]});
smo73988.setContext(context).draw();
// modifier from 1-10-0-1 to 1-10-0-2
const smo73989 = new VF.StaveTie({ first_note: smo67817, last_note: smo67818, 
          firstNote: smo67817, lastNote: smo67818, first_indices: [0], last_indices: [0]});
smo73989.setContext(context).draw();
// modifier from 1-10-0-4 to 1-10-0-5
const smo73990 = new VF.StaveTie({ first_note: smo67820, last_note: smo67821, 
          firstNote: smo67820, lastNote: smo67821, first_indices: [0], last_indices: [0]});
smo73990.setContext(context).draw();
// modifier from 1-11-0-1 to 1-11-0-2
const smo73991 = new VF.StaveTie({ first_note: smo67839, last_note: smo67840, 
          firstNote: smo67839, lastNote: smo67840, first_indices: [0], last_indices: [0]});
smo73991.setContext(context).draw();
// modifier from 1-11-0-4 to 1-11-0-5
const smo73992 = new VF.StaveTie({ first_note: smo67842, last_note: smo67843, 
          firstNote: smo67842, lastNote: smo67843, first_indices: [0], last_indices: [0]});
smo73992.setContext(context).draw();
// modifier from 1-12-0-1 to 1-12-0-2
const smo73993 = new VF.StaveTie({ first_note: smo67861, last_note: smo67862, 
          firstNote: smo67861, lastNote: smo67862, first_indices: [0], last_indices: [0]});
smo73993.setContext(context).draw();
// modifier from 1-12-0-4 to 1-12-0-5
const smo73994 = new VF.StaveTie({ first_note: smo67864, last_note: smo67865, 
          firstNote: smo67864, lastNote: smo67865, first_indices: [0], last_indices: [0]});
smo73994.setContext(context).draw();
// modifier from 1-13-0-1 to 1-13-0-2
const smo73995 = new VF.StaveTie({ first_note: smo67883, last_note: smo67884, 
          firstNote: smo67883, lastNote: smo67884, first_indices: [0], last_indices: [0]});
smo73995.setContext(context).draw();
// modifier from 1-13-0-4 to 1-13-0-5
const smo73996 = new VF.StaveTie({ first_note: smo67886, last_note: smo67887, 
          firstNote: smo67886, lastNote: smo67887, first_indices: [0], last_indices: [0]});
smo73996.setContext(context).draw();
// modifier from 1-14-0-1 to 1-14-0-2
const smo73997 = new VF.StaveTie({ first_note: smo67905, last_note: smo67906, 
          firstNote: smo67905, lastNote: smo67906, first_indices: [0], last_indices: [0]});
smo73997.setContext(context).draw();
// modifier from 1-14-0-4 to 1-14-0-5
const smo73998 = new VF.StaveTie({ first_note: smo67908, last_note: smo67909, 
          firstNote: smo67908, lastNote: smo67909, first_indices: [0], last_indices: [0]});
smo73998.setContext(context).draw();
// modifier from 1-15-0-1 to 1-15-0-2
const smo73999 = new VF.StaveTie({ first_note: smo67927, last_note: smo67928, 
          firstNote: smo67927, lastNote: smo67928, first_indices: [0], last_indices: [0]});
smo73999.setContext(context).draw();
// modifier from 1-15-0-4 to 1-15-0-5
const smo74000 = new VF.StaveTie({ first_note: smo67930, last_note: smo67931, 
          firstNote: smo67930, lastNote: smo67931, first_indices: [0], last_indices: [0]});
smo74000.setContext(context).draw();
// modifier from 1-16-0-1 to 1-16-0-2
const smo74001 = new VF.StaveTie({ first_note: smo67949, last_note: smo67950, 
          firstNote: smo67949, lastNote: smo67950, first_indices: [0], last_indices: [0]});
smo74001.setContext(context).draw();
// modifier from 1-16-0-4 to 1-16-0-5
const smo74002 = new VF.StaveTie({ first_note: smo67952, last_note: smo67953, 
          firstNote: smo67952, lastNote: smo67953, first_indices: [0], last_indices: [0]});
smo74002.setContext(context).draw();
// modifier from 1-17-0-1 to 1-17-0-2
const smo74003 = new VF.StaveTie({ first_note: smo67971, last_note: smo67972, 
          firstNote: smo67971, lastNote: smo67972, first_indices: [0], last_indices: [0]});
smo74003.setContext(context).draw();
// modifier from 1-17-0-4 to 1-17-0-5
const smo74004 = new VF.StaveTie({ first_note: smo67974, last_note: smo67975, 
          firstNote: smo67974, lastNote: smo67975, first_indices: [0], last_indices: [0]});
smo74004.setContext(context).draw();
// modifier from 1-18-0-1 to 1-18-0-2
const smo74005 = new VF.StaveTie({ first_note: smo67993, last_note: smo67994, 
          firstNote: smo67993, lastNote: smo67994, first_indices: [0], last_indices: [0]});
smo74005.setContext(context).draw();
// modifier from 1-18-0-4 to 1-18-0-5
const smo74006 = new VF.StaveTie({ first_note: smo67996, last_note: smo67997, 
          firstNote: smo67996, lastNote: smo67997, first_indices: [0], last_indices: [0]});
smo74006.setContext(context).draw();
// modifier from 1-19-0-1 to 1-19-0-2
const smo74007 = new VF.StaveTie({ first_note: smo68015, last_note: smo68016, 
          firstNote: smo68015, lastNote: smo68016, first_indices: [0], last_indices: [0]});
smo74007.setContext(context).draw();
// modifier from 1-19-0-4 to 1-19-0-5
const smo74008 = new VF.StaveTie({ first_note: smo68018, last_note: smo68019, 
          firstNote: smo68018, lastNote: smo68019, first_indices: [0], last_indices: [0]});
smo74008.setContext(context).draw();
// modifier from 1-20-0-1 to 1-20-0-2
const smo74009 = new VF.StaveTie({ first_note: smo68037, last_note: smo68038, 
          firstNote: smo68037, lastNote: smo68038, first_indices: [0], last_indices: [0]});
smo74009.setContext(context).draw();
// modifier from 1-20-0-4 to 1-20-0-5
const smo74010 = new VF.StaveTie({ first_note: smo68040, last_note: smo68041, 
          firstNote: smo68040, lastNote: smo68041, first_indices: [0], last_indices: [0]});
smo74010.setContext(context).draw();
}
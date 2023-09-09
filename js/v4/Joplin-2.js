// @@ The Entertainer p 3/3  by Scott Joplin
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
const fmtsmo9960260 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo99602v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99602v0ar = [];
const smo99581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99581.setAttribute('id', 'smo99581');
const smo995810acc = new VF.Accidental('n');
smo99581.addModifier(smo995810acc, 0);
smo99602v0ar.push(smo99581);
const smo99582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo99582.setAttribute('id', 'smo99582');
const smo995820acc = new VF.Accidental('b');
smo99582.addModifier(smo995820acc, 0);
smo99602v0ar.push(smo99582);
const smo99583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo99583.setAttribute('id', 'smo99583');
const smo995830acc = new VF.Accidental('n');
smo99583.addModifier(smo995830acc, 0);
smo99602v0ar.push(smo99583);
const smo99584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo99584.setAttribute('id', 'smo99584');
const smo995840acc = new VF.Accidental('n');
smo99584.addModifier(smo995840acc, 0);
smo99602v0ar.push(smo99584);
const smo99585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo99585.setAttribute('id', 'smo99585');
smo99602v0ar.push(smo99585);
const smo99586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo99586.setAttribute('id', 'smo99586');
smo99602v0ar.push(smo99586);
const smo99587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo99587.setAttribute('id', 'smo99587');
smo99602v0ar.push(smo99587);
const smo99588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo99588.setAttribute('id', 'smo99588');
smo99602v0ar.push(smo99588);
smo99602v0.addTickables(smo99602v0ar)
fmtsmo9960260.joinVoices([smo99602v0]);
const fmtsmo10234860 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo102348v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102348v0ar = [];
const smo102331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo102331.setAttribute('id', 'smo102331');
const smo1023310acc = new VF.Accidental('n');
smo102331.addModifier(smo1023310acc, 0);
smo102348v0ar.push(smo102331);
const smo102332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo102332.setAttribute('id', 'smo102332');
const smo1023320acc = new VF.Accidental('n');
smo102332.addModifier(smo1023320acc, 0);
const smo1023322acc = new VF.Accidental('n');
smo102332.addModifier(smo1023322acc, 2);
smo102348v0ar.push(smo102332);
const smo102333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo102333.setAttribute('id', 'smo102333');
const smo1023330acc = new VF.Accidental('b');
smo102333.addModifier(smo1023330acc, 0);
smo102348v0ar.push(smo102333);
const smo102334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo102334.setAttribute('id', 'smo102334');
smo102348v0ar.push(smo102334);
smo102348v0.addTickables(smo102348v0ar)
fmtsmo10234860.joinVoices([smo102348v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103796 = smo99581.getStemDirection();
smo99581.setStemDirection(dirsmo103796);
smo99582.setStemDirection(dirsmo103796);
smo99583.setStemDirection(dirsmo103796);
smo99584.setStemDirection(dirsmo103796);
const smo103796 = new VF.Beam([smo99581,smo99582,smo99583,smo99584]);
const dirsmo103797 = smo99585.getStemDirection();
smo99585.setStemDirection(dirsmo103797);
smo99586.setStemDirection(dirsmo103797);
smo99587.setStemDirection(dirsmo103797);
smo99588.setStemDirection(dirsmo103797);
const smo103797 = new VF.Beam([smo99585,smo99586,smo99587,smo99588]);
const dirsmo103800 = smo102331.getStemDirection();
smo102331.setStemDirection(dirsmo103800);
smo102332.setStemDirection(dirsmo103800);
const smo103800 = new VF.Beam([smo102331,smo102332]);
const dirsmo103801 = smo102333.getStemDirection();
smo102333.setStemDirection(dirsmo103801);
smo102334.setStemDirection(dirsmo103801);
const smo103801 = new VF.Beam([smo102333,smo102334]);
 
// formatting measures in staff group smo97609
fmtsmo9960260.format([smo99602v0,smo102348v0], 242);
const stavesmo99602 = new VF.Stave(73, 396, 328);
stavesmo99602.setAttribute('id', 'stavesmo99602');
stavesmo99602.setBegBarType(1);
stavesmo99602.addClef('treble');
const keysmo99602 = new VF.KeySignature('Bb');
keysmo99602.addToStave(stavesmo99602);
stavesmo99602.setContext(context);
stavesmo99602.draw();
smo99602v0.draw(context, stavesmo99602);
smo103796.setContext(context);
smo103796.draw();
smo103797.setContext(context);
smo103797.draw();
const stavesmo102348 = new VF.Stave(73, 556, 328);
stavesmo102348.setAttribute('id', 'stavesmo102348');
stavesmo102348.setBegBarType(1);
stavesmo102348.addClef('bass');
const keysmo102348 = new VF.KeySignature('Bb');
keysmo102348.addToStave(stavesmo102348);
stavesmo102348.setContext(context);
stavesmo102348.draw();
smo102348v0.draw(context, stavesmo102348);
smo103800.setContext(context);
smo103800.draw();
smo103801.setContext(context);
smo103801.draw();
const leftsmo97609stavesmo996021 = new VF.StaveConnector(stavesmo99602, stavesmo102348).setType(3);
leftsmo97609stavesmo996021.setContext(context).draw();
const fmtsmo9961861 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo99618v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99618v0ar = [];
const smo99603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo99603.setAttribute('id', 'smo99603');
smo99618v0ar.push(smo99603);
const smo99604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo99604.setAttribute('id', 'smo99604');
smo99618v0ar.push(smo99604);
smo99618v0.addTickables(smo99618v0ar)
fmtsmo9961861.joinVoices([smo99618v0]);
const fmtsmo10236561 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo102365v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102365v0ar = [];
const smo102349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo102349.setAttribute('id', 'smo102349');
const smo1023492acc = new VF.Accidental('n');
smo102349.addModifier(smo1023492acc, 2);
smo102365v0ar.push(smo102349);
const smo102350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102350.setAttribute('id', 'smo102350');
smo102365v0ar.push(smo102350);
const smo102351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102351.setAttribute('id', 'smo102351');
smo102365v0ar.push(smo102351);
smo102365v0.addTickables(smo102365v0ar)
fmtsmo10236561.joinVoices([smo102365v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103806 = smo102350.getStemDirection();
smo102350.setStemDirection(dirsmo103806);
smo102351.setStemDirection(dirsmo103806);
const smo103806 = new VF.Beam([smo102350,smo102351]);
 
// formatting measures in staff group smo97609
fmtsmo9961861.format([smo99618v0,smo102365v0], 274);
const stavesmo99618 = new VF.Stave(401, 396, 288);
stavesmo99618.setAttribute('id', 'stavesmo99618');
stavesmo99618.setBegBarType(VF.Barline.type.NONE);
stavesmo99618.setContext(context);
stavesmo99618.draw();
smo99618v0.draw(context, stavesmo99618);
const stavesmo102365 = new VF.Stave(401, 556, 288);
stavesmo102365.setAttribute('id', 'stavesmo102365');
stavesmo102365.setBegBarType(VF.Barline.type.NONE);
stavesmo102365.setContext(context);
stavesmo102365.draw();
smo102365v0.draw(context, stavesmo102365);
smo103806.setContext(context);
smo103806.draw();
const fmtsmo9963762 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo99637v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99637v0ar = [];
const smo99619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo99619.setAttribute('id', 'smo99619');
smo99637v0ar.push(smo99619);
const smo99620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo99620.setAttribute('id', 'smo99620');
const smo996200acc = new VF.Accidental('b');
smo99620.addModifier(smo996200acc, 0);
smo99637v0ar.push(smo99620);
const smo99621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo99621.setAttribute('id', 'smo99621');
const smo996211acc = new VF.Accidental('n');
smo99621.addModifier(smo996211acc, 1);
smo99637v0ar.push(smo99621);
const smo99622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo99622.setAttribute('id', 'smo99622');
smo99637v0ar.push(smo99622);
const smo99623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo99623.setAttribute('id', 'smo99623');
smo99637v0ar.push(smo99623);
smo99637v0.addTickables(smo99637v0ar)
fmtsmo9963762.joinVoices([smo99637v0]);
const fmtsmo10238362 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo102383v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102383v0ar = [];
const smo102366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo102366.setAttribute('id', 'smo102366');
smo102383v0ar.push(smo102366);
const smo102367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102367.setAttribute('id', 'smo102367');
smo102383v0ar.push(smo102367);
const smo102368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102368.setAttribute('id', 'smo102368');
smo102383v0ar.push(smo102368);
const smo102369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102369.setAttribute('id', 'smo102369');
smo102383v0ar.push(smo102369);
smo102383v0.addTickables(smo102383v0ar)
fmtsmo10238362.joinVoices([smo102383v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103809 = smo99619.getStemDirection();
smo99619.setStemDirection(dirsmo103809);
smo99620.setStemDirection(dirsmo103809);
smo99621.setStemDirection(dirsmo103809);
const smo103809 = new VF.Beam([smo99619,smo99620,smo99621]);
const dirsmo103810 = smo99622.getStemDirection();
smo99622.setStemDirection(dirsmo103810);
smo99623.setStemDirection(dirsmo103810);
const smo103810 = new VF.Beam([smo99622,smo99623]);
const dirsmo103813 = smo102366.getStemDirection();
smo102366.setStemDirection(dirsmo103813);
smo102367.setStemDirection(dirsmo103813);
const smo103813 = new VF.Beam([smo102366,smo102367]);
const dirsmo103814 = smo102368.getStemDirection();
smo102368.setStemDirection(dirsmo103814);
smo102369.setStemDirection(dirsmo103814);
const smo103814 = new VF.Beam([smo102368,smo102369]);
 
// formatting measures in staff group smo97609
fmtsmo9963762.format([smo99637v0,smo102383v0], 274);
const stavesmo99637 = new VF.Stave(689, 396, 288);
stavesmo99637.setAttribute('id', 'stavesmo99637');
stavesmo99637.setBegBarType(VF.Barline.type.NONE);
stavesmo99637.setContext(context);
stavesmo99637.draw();
smo99637v0.draw(context, stavesmo99637);
smo103809.setContext(context);
smo103809.draw();
smo103810.setContext(context);
smo103810.draw();
const stavesmo102383 = new VF.Stave(689, 556, 288);
stavesmo102383.setAttribute('id', 'stavesmo102383');
stavesmo102383.setBegBarType(VF.Barline.type.NONE);
stavesmo102383.setContext(context);
stavesmo102383.draw();
smo102383v0.draw(context, stavesmo102383);
smo103813.setContext(context);
smo103813.draw();
smo103814.setContext(context);
smo103814.draw();
const fmtsmo9965863 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo99658v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99658v0ar = [];
const smo99638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo99638.setAttribute('id', 'smo99638');
smo99658v0ar.push(smo99638);
smo99658v0.addTickables(smo99658v0ar)
fmtsmo9965863.joinVoices([smo99658v0]);
const smo99658v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99658v1ar = [];
const smo99639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99639.setAttribute('id', 'smo99639');
smo99639.setStyle({ fillStyle: "#115511" });
smo99658v1ar.push(smo99639);
const smo99640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo99640.setAttribute('id', 'smo99640');
smo99640.setStyle({ fillStyle: "#115511" });
smo99658v1ar.push(smo99640);
const smo99641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99641.setAttribute('id', 'smo99641');
smo99641.setStyle({ fillStyle: "#115511" });
smo99658v1ar.push(smo99641);
const smo99642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo99642.setAttribute('id', 'smo99642');
smo99642.setStyle({ fillStyle: "#115511" });
smo99658v1ar.push(smo99642);
const smo99643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99643.setAttribute('id', 'smo99643');
smo99643.setStyle({ fillStyle: "#115511" });
smo99658v1ar.push(smo99643);
const smo99644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99644.setAttribute('id', 'smo99644');
smo99644.setStyle({ fillStyle: "#115511" });
smo99658v1ar.push(smo99644);
smo99658v1.addTickables(smo99658v1ar)
fmtsmo9965863.joinVoices([smo99658v1]);
const fmtsmo10240163 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo102401v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102401v0ar = [];
const smo102384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo102384.setAttribute('id', 'smo102384');
smo102401v0ar.push(smo102384);
const smo102385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo102385.setAttribute('id', 'smo102385');
smo102401v0ar.push(smo102385);
const smo102386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo102386.setAttribute('id', 'smo102386');
smo102401v0ar.push(smo102386);
const smo102387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo102387.setAttribute('id', 'smo102387');
smo102401v0ar.push(smo102387);
smo102401v0.addTickables(smo102401v0ar)
fmtsmo10240163.joinVoices([smo102401v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103817 = smo99640.getStemDirection();
smo99640.setStemDirection(dirsmo103817);
smo99641.setStemDirection(dirsmo103817);
const smo103817 = new VF.Beam([smo99640,smo99641]);
const dirsmo103818 = smo99642.getStemDirection();
smo99642.setStemDirection(dirsmo103818);
smo99643.setStemDirection(dirsmo103818);
smo99644.setStemDirection(dirsmo103818);
const smo103818 = new VF.Beam([smo99642,smo99643,smo99644]);
const dirsmo103821 = smo102384.getStemDirection();
smo102384.setStemDirection(dirsmo103821);
smo102385.setStemDirection(dirsmo103821);
const smo103821 = new VF.Beam([smo102384,smo102385]);
const dirsmo103822 = smo102386.getStemDirection();
smo102386.setStemDirection(dirsmo103822);
smo102387.setStemDirection(dirsmo103822);
const smo103822 = new VF.Beam([smo102386,smo102387]);
 
// formatting measures in staff group smo97609
fmtsmo9965863.format([smo99658v0,smo99658v1,smo102401v0], 274);
const stavesmo99658 = new VF.Stave(977, 396, 288);
stavesmo99658.setAttribute('id', 'stavesmo99658');
stavesmo99658.setBegBarType(VF.Barline.type.NONE);
stavesmo99658.setContext(context);
stavesmo99658.draw();
smo99658v0.draw(context, stavesmo99658);
smo99658v1.draw(context, stavesmo99658);
smo103817.setContext(context);
smo103817.draw();
smo103818.setContext(context);
smo103818.draw();
const stavesmo102401 = new VF.Stave(977, 556, 288);
stavesmo102401.setAttribute('id', 'stavesmo102401');
stavesmo102401.setBegBarType(VF.Barline.type.NONE);
stavesmo102401.setContext(context);
stavesmo102401.draw();
smo102401v0.draw(context, stavesmo102401);
smo103821.setContext(context);
smo103821.draw();
smo103822.setContext(context);
smo103822.draw();
const fmtsmo9967764 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo99677v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99677v0ar = [];
const smo99659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo99659.setAttribute('id', 'smo99659');
smo99677v0ar.push(smo99659);
const smo99660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99660.setAttribute('id', 'smo99660');
const smo996600acc = new VF.Accidental('n');
smo99660.addModifier(smo996600acc, 0);
smo99677v0ar.push(smo99660);
const smo99661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo99661.setAttribute('id', 'smo99661');
smo99677v0ar.push(smo99661);
const smo99662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo99662.setAttribute('id', 'smo99662');
smo99677v0ar.push(smo99662);
const smo99663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo99663.setAttribute('id', 'smo99663');
smo99677v0ar.push(smo99663);
smo99677v0.addTickables(smo99677v0ar)
fmtsmo9967764.joinVoices([smo99677v0]);
const fmtsmo10241964 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo102419v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102419v0ar = [];
const smo102402 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo102402.setAttribute('id', 'smo102402');
smo102419v0ar.push(smo102402);
const smo102403 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo102403.setAttribute('id', 'smo102403');
smo102419v0ar.push(smo102403);
const smo102404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo102404.setAttribute('id', 'smo102404');
smo102419v0ar.push(smo102404);
const smo102405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo102405.setAttribute('id', 'smo102405');
smo102419v0ar.push(smo102405);
smo102419v0.addTickables(smo102419v0ar)
fmtsmo10241964.joinVoices([smo102419v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103825 = smo99659.getStemDirection();
smo99659.setStemDirection(dirsmo103825);
smo99660.setStemDirection(dirsmo103825);
smo99661.setStemDirection(dirsmo103825);
const smo103825 = new VF.Beam([smo99659,smo99660,smo99661]);
const dirsmo103826 = smo99662.getStemDirection();
smo99662.setStemDirection(dirsmo103826);
smo99663.setStemDirection(dirsmo103826);
const smo103826 = new VF.Beam([smo99662,smo99663]);
const dirsmo103829 = smo102402.getStemDirection();
smo102402.setStemDirection(dirsmo103829);
smo102403.setStemDirection(dirsmo103829);
const smo103829 = new VF.Beam([smo102402,smo102403]);
const dirsmo103830 = smo102404.getStemDirection();
smo102404.setStemDirection(dirsmo103830);
smo102405.setStemDirection(dirsmo103830);
const smo103830 = new VF.Beam([smo102404,smo102405]);
 
// formatting measures in staff group smo97609
fmtsmo9967764.format([smo99677v0,smo102419v0], 274);
const stavesmo99677 = new VF.Stave(1265, 396, 288);
stavesmo99677.setAttribute('id', 'stavesmo99677');
stavesmo99677.setBegBarType(VF.Barline.type.NONE);
stavesmo99677.setContext(context);
stavesmo99677.draw();
smo99677v0.draw(context, stavesmo99677);
smo103825.setContext(context);
smo103825.draw();
smo103826.setContext(context);
smo103826.draw();
const stavesmo102419 = new VF.Stave(1265, 556, 288);
stavesmo102419.setAttribute('id', 'stavesmo102419');
stavesmo102419.setBegBarType(VF.Barline.type.NONE);
stavesmo102419.setContext(context);
stavesmo102419.draw();
smo102419v0.draw(context, stavesmo102419);
smo103829.setContext(context);
smo103829.draw();
smo103830.setContext(context);
smo103830.draw();
const fmtsmo9970065 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo99700v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99700v0ar = [];
const smo99678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo99678.setAttribute('id', 'smo99678');
smo99700v0ar.push(smo99678);
const smo99679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo99679.setAttribute('id', 'smo99679');
smo99679.addModifier(new VF.Dot(), 0);
smo99679.addModifier(new VF.Dot(), 1);
smo99679.addModifier(new VF.Dot(), 2);
smo99700v0ar.push(smo99679);
const smo99680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99680.setAttribute('id', 'smo99680');
smo99700v0ar.push(smo99680);
smo99700v0.addTickables(smo99700v0ar)
fmtsmo9970065.joinVoices([smo99700v0]);
const smo99700v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99700v1ar = [];
const smo99681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99681.setAttribute('id', 'smo99681');
smo99681.setStyle({ fillStyle: "#115511" });
smo99700v1ar.push(smo99681);
const smo99682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99682.setAttribute('id', 'smo99682');
smo99682.setStyle({ fillStyle: "#115511" });
smo99700v1ar.push(smo99682);
const smo99683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo99683.setAttribute('id', 'smo99683');
smo99683.setStyle({ fillStyle: "#115511" });
const smo996830acc = new VF.Accidental('b');
smo99683.addModifier(smo996830acc, 0);
smo99700v1ar.push(smo99683);
const smo99684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99684.setAttribute('id', 'smo99684');
smo99684.setStyle({ fillStyle: "#115511" });
const smo996840acc = new VF.Accidental('n');
smo99684.addModifier(smo996840acc, 0);
smo99700v1ar.push(smo99684);
const smo99685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99685.setAttribute('id', 'smo99685');
smo99685.setStyle({ fillStyle: "#115511" });
smo99700v1ar.push(smo99685);
const smo99686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo99686.setAttribute('id', 'smo99686');
smo99686.setStyle({ fillStyle: "#115511" });
smo99700v1ar.push(smo99686);
smo99700v1.addTickables(smo99700v1ar)
fmtsmo9970065.joinVoices([smo99700v1]);
const fmtsmo10243765 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo102437v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102437v0ar = [];
const smo102420 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102420.setAttribute('id', 'smo102420');
smo102437v0ar.push(smo102420);
const smo102421 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo102421.setAttribute('id', 'smo102421');
smo102437v0ar.push(smo102421);
const smo102422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo102422.setAttribute('id', 'smo102422');
smo102437v0ar.push(smo102422);
const smo102423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo102423.setAttribute('id', 'smo102423');
smo102437v0ar.push(smo102423);
smo102437v0.addTickables(smo102437v0ar)
fmtsmo10243765.joinVoices([smo102437v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103833 = smo99679.getStemDirection();
smo99679.setStemDirection(dirsmo103833);
smo99680.setStemDirection(dirsmo103833);
const smo103833 = new VF.Beam([smo99679,smo99680]);
const dirsmo103834 = smo99682.getStemDirection();
smo99682.setStemDirection(dirsmo103834);
smo99683.setStemDirection(dirsmo103834);
const smo103834 = new VF.Beam([smo99682,smo99683]);
const dirsmo103835 = smo99684.getStemDirection();
smo99684.setStemDirection(dirsmo103835);
smo99685.setStemDirection(dirsmo103835);
smo99686.setStemDirection(dirsmo103835);
const smo103835 = new VF.Beam([smo99684,smo99685,smo99686]);
const dirsmo103838 = smo102420.getStemDirection();
smo102420.setStemDirection(dirsmo103838);
smo102421.setStemDirection(dirsmo103838);
const smo103838 = new VF.Beam([smo102420,smo102421]);
const dirsmo103839 = smo102422.getStemDirection();
smo102422.setStemDirection(dirsmo103839);
smo102423.setStemDirection(dirsmo103839);
const smo103839 = new VF.Beam([smo102422,smo102423]);
 
// formatting measures in staff group smo97609
fmtsmo9970065.format([smo99700v0,smo99700v1,smo102437v0], 274);
const stavesmo99700 = new VF.Stave(1553, 396, 288);
stavesmo99700.setAttribute('id', 'stavesmo99700');
stavesmo99700.setBegBarType(VF.Barline.type.NONE);
stavesmo99700.setContext(context);
stavesmo99700.draw();
smo99700v0.draw(context, stavesmo99700);
smo99700v1.draw(context, stavesmo99700);
smo103833.setContext(context);
smo103833.draw();
smo103834.setContext(context);
smo103834.draw();
smo103835.setContext(context);
smo103835.draw();
const stavesmo102437 = new VF.Stave(1553, 556, 288);
stavesmo102437.setAttribute('id', 'stavesmo102437');
stavesmo102437.setBegBarType(VF.Barline.type.NONE);
stavesmo102437.setContext(context);
stavesmo102437.draw();
smo102437v0.draw(context, stavesmo102437);
smo103838.setContext(context);
smo103838.draw();
smo103839.setContext(context);
smo103839.draw();
const rightsmo97609stavesmo997001 = new VF.StaveConnector(stavesmo99700, stavesmo102437).setType(0);
rightsmo97609stavesmo997001.setContext(context).draw();
const fmtsmo9972066 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo99720v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99720v0ar = [];
const smo99701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99701.setAttribute('id', 'smo99701');
smo99720v0ar.push(smo99701);
const smo99702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99702.setAttribute('id', 'smo99702');
smo99720v0ar.push(smo99702);
const smo99703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99703.setAttribute('id', 'smo99703');
smo99720v0ar.push(smo99703);
const smo99704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99704.setAttribute('id', 'smo99704');
smo99720v0ar.push(smo99704);
const smo99705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99705.setAttribute('id', 'smo99705');
smo99720v0ar.push(smo99705);
const smo99706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99706.setAttribute('id', 'smo99706');
smo99720v0ar.push(smo99706);
smo99720v0.addTickables(smo99720v0ar)
fmtsmo9972066.joinVoices([smo99720v0]);
const fmtsmo10245566 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo102455v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102455v0ar = [];
const smo102438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo102438.setAttribute('id', 'smo102438');
smo102455v0ar.push(smo102438);
const smo102439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo102439.setAttribute('id', 'smo102439');
smo102455v0ar.push(smo102439);
const smo102440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102440.setAttribute('id', 'smo102440');
smo102455v0ar.push(smo102440);
const smo102441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo102441.setAttribute('id', 'smo102441');
const smo1024410acc = new VF.Accidental('b');
smo102441.addModifier(smo1024410acc, 0);
const smo1024411acc = new VF.Accidental('b');
smo102441.addModifier(smo1024411acc, 1);
smo102455v0ar.push(smo102441);
smo102455v0.addTickables(smo102455v0ar)
fmtsmo10245566.joinVoices([smo102455v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103851 = smo99701.getStemDirection();
smo99701.setStemDirection(dirsmo103851);
smo99702.setStemDirection(dirsmo103851);
smo99703.setStemDirection(dirsmo103851);
const smo103851 = new VF.Beam([smo99701,smo99702,smo99703]);
const dirsmo103852 = smo99704.getStemDirection();
smo99704.setStemDirection(dirsmo103852);
smo99705.setStemDirection(dirsmo103852);
smo99706.setStemDirection(dirsmo103852);
const smo103852 = new VF.Beam([smo99704,smo99705,smo99706]);
const dirsmo103855 = smo102438.getStemDirection();
smo102438.setStemDirection(dirsmo103855);
smo102439.setStemDirection(dirsmo103855);
const smo103855 = new VF.Beam([smo102438,smo102439]);
const dirsmo103856 = smo102440.getStemDirection();
smo102440.setStemDirection(dirsmo103856);
smo102441.setStemDirection(dirsmo103856);
const smo103856 = new VF.Beam([smo102440,smo102441]);
 
// formatting measures in staff group smo97609
fmtsmo9972066.format([smo99720v0,smo102455v0], 209);
const stavesmo99720 = new VF.Stave(73, 763, 295);
stavesmo99720.setAttribute('id', 'stavesmo99720');
stavesmo99720.setBegBarType(1);
stavesmo99720.addClef('treble');
const keysmo99720 = new VF.KeySignature('Bb');
keysmo99720.addToStave(stavesmo99720);
stavesmo99720.setContext(context);
stavesmo99720.draw();
smo99720v0.draw(context, stavesmo99720);
smo103851.setContext(context);
smo103851.draw();
smo103852.setContext(context);
smo103852.draw();
const stavesmo102455 = new VF.Stave(73, 934, 295);
stavesmo102455.setAttribute('id', 'stavesmo102455');
stavesmo102455.setBegBarType(1);
stavesmo102455.addClef('bass');
const keysmo102455 = new VF.KeySignature('Bb');
keysmo102455.addToStave(stavesmo102455);
stavesmo102455.setContext(context);
stavesmo102455.draw();
smo102455v0.draw(context, stavesmo102455);
smo103855.setContext(context);
smo103855.draw();
smo103856.setContext(context);
smo103856.draw();
const leftsmo97609stavesmo997201 = new VF.StaveConnector(stavesmo99720, stavesmo102455).setType(3);
leftsmo97609stavesmo997201.setContext(context).draw();
const fmtsmo9973867 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo99738v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99738v0ar = [];
const smo99721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99721.setAttribute('id', 'smo99721');
smo99738v0ar.push(smo99721);
const smo99722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
smo99722.setAttribute('id', 'smo99722');
const smo997220acc = new VF.Accidental('b');
smo99722.addModifier(smo997220acc, 0);
const smo997221acc = new VF.Accidental('n');
smo99722.addModifier(smo997221acc, 1);
smo99722.addModifier(new VF.Dot(), 0);
smo99722.addModifier(new VF.Dot(), 1);
smo99722.addModifier(new VF.Dot(), 2);
smo99738v0ar.push(smo99722);
const smo99724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo99724.setAttribute('id', 'smo99724');
smo99738v0ar.push(smo99724);
smo99738v0.addTickables(smo99738v0ar)
fmtsmo9973867.joinVoices([smo99738v0]);
const fmtsmo10247467 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo102474v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102474v0ar = [];
const smo102456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo102456.setAttribute('id', 'smo102456');
smo102474v0ar.push(smo102456);
const smo102457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102457.setAttribute('id', 'smo102457');
smo102474v0ar.push(smo102457);
const smo102458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo102458.setAttribute('id', 'smo102458');
const smo1024580acc = new VF.Accidental('n');
smo102458.addModifier(smo1024580acc, 0);
const smo1024581acc = new VF.Accidental('n');
smo102458.addModifier(smo1024581acc, 1);
smo102474v0ar.push(smo102458);
const smo102459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo102459.setAttribute('id', 'smo102459');
smo102474v0ar.push(smo102459);
const smo102460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/2/n","db/3/n"]}'))
smo102460.setAttribute('id', 'smo102460');
const smo1024600acc = new VF.Accidental('b');
smo102460.addModifier(smo1024600acc, 0);
const smo1024601acc = new VF.Accidental('b');
smo102460.addModifier(smo1024601acc, 1);
smo102474v0ar.push(smo102460);
smo102474v0.addTickables(smo102474v0ar)
fmtsmo10247467.joinVoices([smo102474v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103859 = smo99722.getStemDirection();
smo99722.setStemDirection(dirsmo103859);
smo99724.setStemDirection(dirsmo103859);
const smo103859 = new VF.Beam([smo99722,smo99724]);
const dirsmo103862 = smo102456.getStemDirection();
smo102456.setStemDirection(dirsmo103862);
smo102457.setStemDirection(dirsmo103862);
smo102458.setStemDirection(dirsmo103862);
smo102459.setStemDirection(dirsmo103862);
const smo103862 = new VF.Beam([smo102456,smo102457,smo102458,smo102459]);
 
// formatting measures in staff group smo97609
fmtsmo9973867.format([smo99738v0,smo102474v0], 281);
const stavesmo99738 = new VF.Stave(368, 763, 295);
stavesmo99738.setAttribute('id', 'stavesmo99738');
stavesmo99738.setBegBarType(VF.Barline.type.NONE);
stavesmo99738.setContext(context);
stavesmo99738.draw();
smo99738v0.draw(context, stavesmo99738);
smo103859.setContext(context);
smo103859.draw();
const stavesmo102474 = new VF.Stave(368, 934, 295);
stavesmo102474.setAttribute('id', 'stavesmo102474');
stavesmo102474.setBegBarType(VF.Barline.type.NONE);
stavesmo102474.setContext(context);
stavesmo102474.draw();
smo102474v0.draw(context, stavesmo102474);
smo103862.setContext(context);
smo103862.draw();
const fmtsmo9976068 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo99760v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99760v0ar = [];
const smo99739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo99739.setAttribute('id', 'smo99739');
smo99760v0ar.push(smo99739);
const smo99741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo99741.setAttribute('id', 'smo99741');
smo99760v0ar.push(smo99741);
const smo99742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo99742.setAttribute('id', 'smo99742');
smo99760v0ar.push(smo99742);
const smo99743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo99743.setAttribute('id', 'smo99743');
smo99760v0ar.push(smo99743);
const smo99744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99744.setAttribute('id', 'smo99744');
smo99760v0ar.push(smo99744);
const smo99745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo99745.setAttribute('id', 'smo99745');
smo99760v0ar.push(smo99745);
const smo99746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99746.setAttribute('id', 'smo99746');
const smo997460acc = new VF.Accidental('n');
smo99746.addModifier(smo997460acc, 0);
smo99760v0ar.push(smo99746);
smo99760v0.addTickables(smo99760v0ar)
fmtsmo9976068.joinVoices([smo99760v0]);
const fmtsmo10249268 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo102492v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102492v0ar = [];
const smo102475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo102475.setAttribute('id', 'smo102475');
smo102492v0ar.push(smo102475);
const smo102476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo102476.setAttribute('id', 'smo102476');
smo102492v0ar.push(smo102476);
const smo102477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo102477.setAttribute('id', 'smo102477');
smo102492v0ar.push(smo102477);
const smo102478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo102478.setAttribute('id', 'smo102478');
smo102492v0ar.push(smo102478);
smo102492v0.addTickables(smo102492v0ar)
fmtsmo10249268.joinVoices([smo102492v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103865 = smo99739.getStemDirection();
smo99739.setStemDirection(dirsmo103865);
smo99741.setStemDirection(dirsmo103865);
smo99742.setStemDirection(dirsmo103865);
const smo103865 = new VF.Beam([smo99739,smo99741,smo99742]);
const dirsmo103866 = smo99743.getStemDirection();
smo99743.setStemDirection(dirsmo103866);
smo99744.setStemDirection(dirsmo103866);
smo99745.setStemDirection(dirsmo103866);
smo99746.setStemDirection(dirsmo103866);
const smo103866 = new VF.Beam([smo99743,smo99744,smo99745,smo99746]);
const dirsmo103869 = smo102475.getStemDirection();
smo102475.setStemDirection(dirsmo103869);
smo102476.setStemDirection(dirsmo103869);
const smo103869 = new VF.Beam([smo102475,smo102476]);
const dirsmo103870 = smo102477.getStemDirection();
smo102477.setStemDirection(dirsmo103870);
smo102478.setStemDirection(dirsmo103870);
const smo103870 = new VF.Beam([smo102477,smo102478]);
 
// formatting measures in staff group smo97609
fmtsmo9976068.format([smo99760v0,smo102492v0], 281);
const stavesmo99760 = new VF.Stave(663, 763, 295);
stavesmo99760.setAttribute('id', 'stavesmo99760');
stavesmo99760.setBegBarType(VF.Barline.type.NONE);
stavesmo99760.setContext(context);
stavesmo99760.draw();
smo99760v0.draw(context, stavesmo99760);
smo103865.setContext(context);
smo103865.draw();
smo103866.setContext(context);
smo103866.draw();
const stavesmo102492 = new VF.Stave(663, 934, 295);
stavesmo102492.setAttribute('id', 'stavesmo102492');
stavesmo102492.setBegBarType(VF.Barline.type.NONE);
stavesmo102492.setContext(context);
stavesmo102492.draw();
smo102492v0.draw(context, stavesmo102492);
smo103869.setContext(context);
smo103869.draw();
smo103870.setContext(context);
smo103870.draw();
const fmtsmo9978269 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo99782v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99782v0ar = [];
const smo99761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo99761.setAttribute('id', 'smo99761');
smo99782v0ar.push(smo99761);
const smo99762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo99762.setAttribute('id', 'smo99762');
const smo997620acc = new VF.Accidental('n');
smo99762.addModifier(smo997620acc, 0);
smo99782v0ar.push(smo99762);
const smo99763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99763.setAttribute('id', 'smo99763');
smo99782v0ar.push(smo99763);
const smo99764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99764.setAttribute('id', 'smo99764');
smo99782v0ar.push(smo99764);
const smo99765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99765.setAttribute('id', 'smo99765');
const smo997650acc = new VF.Accidental('n');
smo99765.addModifier(smo997650acc, 0);
smo99782v0ar.push(smo99765);
const smo99766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo99766.setAttribute('id', 'smo99766');
smo99782v0ar.push(smo99766);
const smo99767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99767.setAttribute('id', 'smo99767');
smo99782v0ar.push(smo99767);
smo99782v0.addTickables(smo99782v0ar)
fmtsmo9978269.joinVoices([smo99782v0]);
const fmtsmo10251069 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo102510v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102510v0ar = [];
const smo102493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102493.setAttribute('id', 'smo102493');
smo102510v0ar.push(smo102493);
const smo102494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102494.setAttribute('id', 'smo102494');
smo102510v0ar.push(smo102494);
const smo102495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102495.setAttribute('id', 'smo102495');
smo102510v0ar.push(smo102495);
smo102510v0.addTickables(smo102510v0ar)
fmtsmo10251069.joinVoices([smo102510v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103873 = smo99761.getStemDirection();
smo99761.setStemDirection(dirsmo103873);
smo99762.setStemDirection(dirsmo103873);
smo99763.setStemDirection(dirsmo103873);
const smo103873 = new VF.Beam([smo99761,smo99762,smo99763]);
const dirsmo103874 = smo99764.getStemDirection();
smo99764.setStemDirection(dirsmo103874);
smo99765.setStemDirection(dirsmo103874);
smo99766.setStemDirection(dirsmo103874);
smo99767.setStemDirection(dirsmo103874);
const smo103874 = new VF.Beam([smo99764,smo99765,smo99766,smo99767]);
 
// formatting measures in staff group smo97609
fmtsmo9978269.format([smo99782v0,smo102510v0], 277);
const stavesmo99782 = new VF.Stave(958, 763, 295);
stavesmo99782.setAttribute('id', 'stavesmo99782');
stavesmo99782.setBegBarType(VF.Barline.type.NONE);
stavesmo99782.setEndBarType(5);
stavesmo99782.setContext(context);
stavesmo99782.draw();
smo99782v0.draw(context, stavesmo99782);
smo103873.setContext(context);
smo103873.draw();
smo103874.setContext(context);
smo103874.draw();
const stavesmo102510 = new VF.Stave(958, 934, 295);
stavesmo102510.setAttribute('id', 'stavesmo102510');
stavesmo102510.setBegBarType(VF.Barline.type.NONE);
stavesmo102510.setEndBarType(5);
stavesmo102510.setContext(context);
stavesmo102510.draw();
smo102510v0.draw(context, stavesmo102510);
const fmtsmo9980170 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo99801v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99801v0ar = [];
const smo99783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo99783.setAttribute('id', 'smo99783');
smo99801v0ar.push(smo99783);
const smo99784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99784.setAttribute('id', 'smo99784');
smo99801v0ar.push(smo99784);
const smo99785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
smo99785.setAttribute('id', 'smo99785');
smo99801v0ar.push(smo99785);
const smo99786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99786.setAttribute('id', 'smo99786');
smo99801v0ar.push(smo99786);
smo99801v0.addTickables(smo99801v0ar)
fmtsmo9980170.joinVoices([smo99801v0]);
const fmtsmo10252970 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo102529v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102529v0ar = [];
const smo102511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102511.setAttribute('id', 'smo102511');
smo102529v0ar.push(smo102511);
const smo102512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102512.setAttribute('id', 'smo102512');
smo102529v0ar.push(smo102512);
const smo102513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/1/n","fn/2/n"]}'))
smo102513.setAttribute('id', 'smo102513');
smo102529v0ar.push(smo102513);
const smo102514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102514.setAttribute('id', 'smo102514');
smo102529v0ar.push(smo102514);
smo102529v0.addTickables(smo102529v0ar)
fmtsmo10252970.joinVoices([smo102529v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
 
// formatting measures in staff group smo97609
fmtsmo9980170.format([smo99801v0,smo102529v0], 281);
const stavesmo99801 = new VF.Stave(1253, 763, 295);
stavesmo99801.setAttribute('id', 'stavesmo99801');
stavesmo99801.setBegBarType(VF.Barline.type.NONE);
stavesmo99801.setContext(context);
stavesmo99801.draw();
smo99801v0.draw(context, stavesmo99801);
const stavesmo102529 = new VF.Stave(1253, 934, 295);
stavesmo102529.setAttribute('id', 'stavesmo102529');
stavesmo102529.setBegBarType(VF.Barline.type.NONE);
stavesmo102529.setContext(context);
stavesmo102529.draw();
smo102529v0.draw(context, stavesmo102529);
const fmtsmo9982271 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo99822v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99822v0ar = [];
const smo99802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99802.setAttribute('id', 'smo99802');
smo99822v0ar.push(smo99802);
const smo99803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99803.setAttribute('id', 'smo99803');
smo99822v0ar.push(smo99803);
const smo99804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99804.setAttribute('id', 'smo99804');
smo99822v0ar.push(smo99804);
const smo99805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99805.setAttribute('id', 'smo99805');
smo99822v0ar.push(smo99805);
const smo99806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99806.setAttribute('id', 'smo99806');
smo99822v0ar.push(smo99806);
const smo99807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99807.setAttribute('id', 'smo99807');
smo99822v0ar.push(smo99807);
const smo99808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99808.setAttribute('id', 'smo99808');
smo99822v0ar.push(smo99808);
smo99822v0.addTickables(smo99822v0ar)
fmtsmo9982271.joinVoices([smo99822v0]);
const fmtsmo10254771 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo102547v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102547v0ar = [];
const smo102530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo102530.setAttribute('id', 'smo102530');
smo102547v0ar.push(smo102530);
const smo102531 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo102531.setAttribute('id', 'smo102531');
smo102547v0ar.push(smo102531);
const smo102532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo102532.setAttribute('id', 'smo102532');
const smo1025320acc = new VF.Accidental('b');
smo102532.addModifier(smo1025320acc, 0);
const smo1025323acc = new VF.Accidental('b');
smo102532.addModifier(smo1025323acc, 3);
smo102547v0ar.push(smo102532);
const smo102533 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo102533.setAttribute('id', 'smo102533');
smo102547v0ar.push(smo102533);
smo102547v0.addTickables(smo102547v0ar)
fmtsmo10254771.joinVoices([smo102547v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103881 = smo99802.getStemDirection();
smo99802.setStemDirection(dirsmo103881);
smo99803.setStemDirection(dirsmo103881);
smo99804.setStemDirection(dirsmo103881);
const smo103881 = new VF.Beam([smo99802,smo99803,smo99804]);
const dirsmo103882 = smo99805.getStemDirection();
smo99805.setStemDirection(dirsmo103882);
smo99806.setStemDirection(dirsmo103882);
smo99807.setStemDirection(dirsmo103882);
smo99808.setStemDirection(dirsmo103882);
const smo103882 = new VF.Beam([smo99805,smo99806,smo99807,smo99808]);
const dirsmo103885 = smo102530.getStemDirection();
smo102530.setStemDirection(dirsmo103885);
smo102531.setStemDirection(dirsmo103885);
const smo103885 = new VF.Beam([smo102530,smo102531]);
const dirsmo103886 = smo102532.getStemDirection();
smo102532.setStemDirection(dirsmo103886);
smo102533.setStemDirection(dirsmo103886);
const smo103886 = new VF.Beam([smo102532,smo102533]);
 
// formatting measures in staff group smo97609
fmtsmo9982271.format([smo99822v0,smo102547v0], 248);
const stavesmo99822 = new VF.Stave(1548, 763, 295);
stavesmo99822.setAttribute('id', 'stavesmo99822');
stavesmo99822.setBegBarType(VF.Barline.type.NONE);
const keysmo99822 = new VF.KeySignature('C');
keysmo99822.cancelKey('Bb');
keysmo99822.addToStave(stavesmo99822);
stavesmo99822.setContext(context);
stavesmo99822.draw();
smo99822v0.draw(context, stavesmo99822);
smo103881.setContext(context);
smo103881.draw();
smo103882.setContext(context);
smo103882.draw();
const stavesmo102547 = new VF.Stave(1548, 934, 295);
stavesmo102547.setAttribute('id', 'stavesmo102547');
stavesmo102547.setBegBarType(VF.Barline.type.NONE);
const keysmo102547 = new VF.KeySignature('C');
keysmo102547.cancelKey('Bb');
keysmo102547.addToStave(stavesmo102547);
stavesmo102547.setContext(context);
stavesmo102547.draw();
smo102547v0.draw(context, stavesmo102547);
smo103885.setContext(context);
smo103885.draw();
smo103886.setContext(context);
smo103886.draw();
const rightsmo97609stavesmo998221 = new VF.StaveConnector(stavesmo99822, stavesmo102547).setType(0);
rightsmo97609stavesmo998221.setContext(context).draw();
const fmtsmo9984472 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo99844v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99844v0ar = [];
const smo99823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99823.setAttribute('id', 'smo99823');
smo99844v0ar.push(smo99823);
const smo99824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99824.setAttribute('id', 'smo99824');
smo99844v0ar.push(smo99824);
const smo99825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99825.setAttribute('id', 'smo99825');
smo99844v0ar.push(smo99825);
const smo99826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99826.setAttribute('id', 'smo99826');
smo99844v0ar.push(smo99826);
const smo99827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99827.setAttribute('id', 'smo99827');
smo99844v0ar.push(smo99827);
const smo99828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99828.setAttribute('id', 'smo99828');
smo99844v0ar.push(smo99828);
const smo99829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99829.setAttribute('id', 'smo99829');
smo99844v0ar.push(smo99829);
const smo99830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo99830.setAttribute('id', 'smo99830');
smo99844v0ar.push(smo99830);
smo99844v0.addTickables(smo99844v0ar)
fmtsmo9984472.joinVoices([smo99844v0]);
const fmtsmo10256572 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo102565v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102565v0ar = [];
const smo102548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102548.setAttribute('id', 'smo102548');
smo102565v0ar.push(smo102548);
const smo102549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102549.setAttribute('id', 'smo102549');
smo102565v0ar.push(smo102549);
const smo102550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102550.setAttribute('id', 'smo102550');
smo102565v0ar.push(smo102550);
const smo102551 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102551.setAttribute('id', 'smo102551');
smo102565v0ar.push(smo102551);
smo102565v0.addTickables(smo102565v0ar)
fmtsmo10256572.joinVoices([smo102565v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103897 = smo99823.getStemDirection();
smo99823.setStemDirection(dirsmo103897);
smo99824.setStemDirection(dirsmo103897);
smo99825.setStemDirection(dirsmo103897);
smo99826.setStemDirection(dirsmo103897);
const smo103897 = new VF.Beam([smo99823,smo99824,smo99825,smo99826]);
const dirsmo103898 = smo99827.getStemDirection();
smo99827.setStemDirection(dirsmo103898);
smo99828.setStemDirection(dirsmo103898);
smo99829.setStemDirection(dirsmo103898);
smo99830.setStemDirection(dirsmo103898);
const smo103898 = new VF.Beam([smo99827,smo99828,smo99829,smo99830]);
const dirsmo103901 = smo102548.getStemDirection();
smo102548.setStemDirection(dirsmo103901);
smo102549.setStemDirection(dirsmo103901);
const smo103901 = new VF.Beam([smo102548,smo102549]);
const dirsmo103902 = smo102550.getStemDirection();
smo102550.setStemDirection(dirsmo103902);
smo102551.setStemDirection(dirsmo103902);
const smo103902 = new VF.Beam([smo102550,smo102551]);
 
// formatting measures in staff group smo97609
fmtsmo9984472.format([smo99844v0,smo102565v0], 237);
const stavesmo99844 = new VF.Stave(73, 1147, 295);
stavesmo99844.setAttribute('id', 'stavesmo99844');
stavesmo99844.setBegBarType(1);
stavesmo99844.addClef('treble');
stavesmo99844.setContext(context);
stavesmo99844.draw();
smo99844v0.draw(context, stavesmo99844);
smo103897.setContext(context);
smo103897.draw();
smo103898.setContext(context);
smo103898.draw();
const stavesmo102565 = new VF.Stave(73, 1271, 295);
stavesmo102565.setAttribute('id', 'stavesmo102565');
stavesmo102565.setBegBarType(1);
stavesmo102565.addClef('bass');
stavesmo102565.setContext(context);
stavesmo102565.draw();
smo102565v0.draw(context, stavesmo102565);
smo103901.setContext(context);
smo103901.draw();
smo103902.setContext(context);
smo103902.draw();
const leftsmo97609stavesmo998441 = new VF.StaveConnector(stavesmo99844, stavesmo102565).setType(3);
leftsmo97609stavesmo998441.setContext(context).draw();
const fmtsmo9986373 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo99863v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99863v0ar = [];
const smo99845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
smo99845.setAttribute('id', 'smo99845');
const smo998450acc = new VF.Accidental('b');
smo99845.addModifier(smo998450acc, 0);
smo99863v0ar.push(smo99845);
const smo99846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo99846.setAttribute('id', 'smo99846');
const smo998461acc = new VF.Accidental('b');
smo99846.addModifier(smo998461acc, 1);
smo99863v0ar.push(smo99846);
const smo99847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
smo99847.setAttribute('id', 'smo99847');
smo99863v0ar.push(smo99847);
const smo99848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo99848.setAttribute('id', 'smo99848');
smo99863v0ar.push(smo99848);
const smo99849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99849.setAttribute('id', 'smo99849');
smo99863v0ar.push(smo99849);
smo99863v0.addTickables(smo99863v0ar)
fmtsmo9986373.joinVoices([smo99863v0]);
const fmtsmo10258373 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo102583v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102583v0ar = [];
const smo102566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo102566.setAttribute('id', 'smo102566');
smo102583v0ar.push(smo102566);
const smo102567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo102567.setAttribute('id', 'smo102567');
smo102583v0ar.push(smo102567);
const smo102568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo102568.setAttribute('id', 'smo102568');
smo102583v0ar.push(smo102568);
const smo102569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo102569.setAttribute('id', 'smo102569');
smo102583v0ar.push(smo102569);
smo102583v0.addTickables(smo102583v0ar)
fmtsmo10258373.joinVoices([smo102583v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103905 = smo99845.getStemDirection();
smo99845.setStemDirection(dirsmo103905);
smo99846.setStemDirection(dirsmo103905);
const smo103905 = new VF.Beam([smo99845,smo99846]);
const dirsmo103906 = smo99847.getStemDirection();
smo99847.setStemDirection(dirsmo103906);
smo99848.setStemDirection(dirsmo103906);
smo99849.setStemDirection(dirsmo103906);
const smo103906 = new VF.Beam([smo99847,smo99848,smo99849]);
const dirsmo103909 = smo102566.getStemDirection();
smo102566.setStemDirection(dirsmo103909);
smo102567.setStemDirection(dirsmo103909);
const smo103909 = new VF.Beam([smo102566,smo102567]);
const dirsmo103910 = smo102568.getStemDirection();
smo102568.setStemDirection(dirsmo103910);
smo102569.setStemDirection(dirsmo103910);
const smo103910 = new VF.Beam([smo102568,smo102569]);
 
// formatting measures in staff group smo97609
fmtsmo9986373.format([smo99863v0,smo102583v0], 281);
const stavesmo99863 = new VF.Stave(368, 1147, 295);
stavesmo99863.setAttribute('id', 'stavesmo99863');
stavesmo99863.setBegBarType(VF.Barline.type.NONE);
stavesmo99863.setContext(context);
stavesmo99863.draw();
smo99863v0.draw(context, stavesmo99863);
smo103905.setContext(context);
smo103905.draw();
smo103906.setContext(context);
smo103906.draw();
const stavesmo102583 = new VF.Stave(368, 1271, 295);
stavesmo102583.setAttribute('id', 'stavesmo102583');
stavesmo102583.setBegBarType(VF.Barline.type.NONE);
stavesmo102583.setContext(context);
stavesmo102583.draw();
smo102583v0.draw(context, stavesmo102583);
smo103909.setContext(context);
smo103909.draw();
smo103910.setContext(context);
smo103910.draw();
const fmtsmo9988074 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo99880v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99880v0ar = [];
const smo99864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo99864.setAttribute('id', 'smo99864');
smo99880v0ar.push(smo99864);
const smo99865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo99865.setAttribute('id', 'smo99865');
smo99880v0ar.push(smo99865);
const smo99866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99866.setAttribute('id', 'smo99866');
smo99880v0ar.push(smo99866);
smo99880v0.addTickables(smo99880v0ar)
fmtsmo9988074.joinVoices([smo99880v0]);
const fmtsmo10260074 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo102600v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102600v0ar = [];
const smo102584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo102584.setAttribute('id', 'smo102584');
smo102600v0ar.push(smo102584);
const smo102585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo102585.setAttribute('id', 'smo102585');
smo102600v0ar.push(smo102585);
const smo102586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102586.setAttribute('id', 'smo102586');
smo102600v0ar.push(smo102586);
smo102600v0.addTickables(smo102600v0ar)
fmtsmo10260074.joinVoices([smo102600v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
 
// formatting measures in staff group smo97609
fmtsmo9988074.format([smo99880v0,smo102600v0], 281);
const stavesmo99880 = new VF.Stave(663, 1147, 295);
stavesmo99880.setAttribute('id', 'stavesmo99880');
stavesmo99880.setBegBarType(VF.Barline.type.NONE);
stavesmo99880.setContext(context);
stavesmo99880.draw();
smo99880v0.draw(context, stavesmo99880);
const stavesmo102600 = new VF.Stave(663, 1271, 295);
stavesmo102600.setAttribute('id', 'stavesmo102600');
stavesmo102600.setBegBarType(VF.Barline.type.NONE);
stavesmo102600.setContext(context);
stavesmo102600.draw();
smo102600v0.draw(context, stavesmo102600);
const fmtsmo9990075 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo99900v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99900v0ar = [];
const smo99881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo99881.setAttribute('id', 'smo99881');
smo99900v0ar.push(smo99881);
const smo99882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo99882.setAttribute('id', 'smo99882');
const smo998820acc = new VF.Accidental('b');
smo99882.addModifier(smo998820acc, 0);
smo99900v0ar.push(smo99882);
const smo99883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo99883.setAttribute('id', 'smo99883');
const smo998830acc = new VF.Accidental('n');
smo99883.addModifier(smo998830acc, 0);
smo99900v0ar.push(smo99883);
const smo99884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo99884.setAttribute('id', 'smo99884');
smo99900v0ar.push(smo99884);
const smo99885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo99885.setAttribute('id', 'smo99885');
const smo998850acc = new VF.Accidental('b');
smo99885.addModifier(smo998850acc, 0);
smo99900v0ar.push(smo99885);
const smo99886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo99886.setAttribute('id', 'smo99886');
const smo998860acc = new VF.Accidental('n');
smo99886.addModifier(smo998860acc, 0);
smo99900v0ar.push(smo99886);
smo99900v0.addTickables(smo99900v0ar)
fmtsmo9990075.joinVoices([smo99900v0]);
const fmtsmo10261875 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo102618v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102618v0ar = [];
const smo102601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo102601.setAttribute('id', 'smo102601');
smo102618v0ar.push(smo102601);
const smo102602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102602.setAttribute('id', 'smo102602');
smo102618v0ar.push(smo102602);
const smo102603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo102603.setAttribute('id', 'smo102603');
smo102618v0ar.push(smo102603);
const smo102604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102604.setAttribute('id', 'smo102604');
smo102618v0ar.push(smo102604);
smo102618v0.addTickables(smo102618v0ar)
fmtsmo10261875.joinVoices([smo102618v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103917 = smo99881.getStemDirection();
smo99881.setStemDirection(dirsmo103917);
smo99882.setStemDirection(dirsmo103917);
smo99883.setStemDirection(dirsmo103917);
const smo103917 = new VF.Beam([smo99881,smo99882,smo99883]);
const dirsmo103918 = smo99884.getStemDirection();
smo99884.setStemDirection(dirsmo103918);
smo99885.setStemDirection(dirsmo103918);
smo99886.setStemDirection(dirsmo103918);
const smo103918 = new VF.Beam([smo99884,smo99885,smo99886]);
const dirsmo103920 = smo102601.getStemDirection();
smo102601.setStemDirection(dirsmo103920);
smo102602.setStemDirection(dirsmo103920);
const smo103920 = new VF.Beam([smo102601,smo102602]);
const dirsmo103921 = smo102603.getStemDirection();
smo102603.setStemDirection(dirsmo103921);
smo102604.setStemDirection(dirsmo103921);
const smo103921 = new VF.Beam([smo102603,smo102604]);
 
// formatting measures in staff group smo97609
fmtsmo9990075.format([smo99900v0,smo102618v0], 272);
const stavesmo99900 = new VF.Stave(958, 1147, 295);
stavesmo99900.setAttribute('id', 'stavesmo99900');
stavesmo99900.setBegBarType(4);
stavesmo99900.setContext(context);
stavesmo99900.draw();
smo99900v0.draw(context, stavesmo99900);
smo103917.setContext(context);
smo103917.draw();
smo103918.setContext(context);
smo103918.draw();
const stavesmo102618 = new VF.Stave(958, 1271, 295);
stavesmo102618.setAttribute('id', 'stavesmo102618');
stavesmo102618.setBegBarType(4);
stavesmo102618.setContext(context);
stavesmo102618.draw();
smo102618v0.draw(context, stavesmo102618);
smo103920.setContext(context);
smo103920.draw();
smo103921.setContext(context);
smo103921.draw();
const fmtsmo9992276 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo99922v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99922v0ar = [];
const smo99901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99901.setAttribute('id', 'smo99901');
smo99922v0ar.push(smo99901);
const smo99902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99902.setAttribute('id', 'smo99902');
smo99922v0ar.push(smo99902);
const smo99903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo99903.setAttribute('id', 'smo99903');
smo99922v0ar.push(smo99903);
const smo99904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99904.setAttribute('id', 'smo99904');
smo99922v0ar.push(smo99904);
const smo99905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99905.setAttribute('id', 'smo99905');
smo99922v0ar.push(smo99905);
const smo99906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99906.setAttribute('id', 'smo99906');
smo99922v0ar.push(smo99906);
const smo99907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99907.setAttribute('id', 'smo99907');
smo99922v0ar.push(smo99907);
const smo99908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo99908.setAttribute('id', 'smo99908');
smo99922v0ar.push(smo99908);
smo99922v0.addTickables(smo99922v0ar)
fmtsmo9992276.joinVoices([smo99922v0]);
const fmtsmo10263676 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo102636v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102636v0ar = [];
const smo102619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo102619.setAttribute('id', 'smo102619');
smo102636v0ar.push(smo102619);
const smo102620 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102620.setAttribute('id', 'smo102620');
smo102636v0ar.push(smo102620);
const smo102621 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo102621.setAttribute('id', 'smo102621');
smo102636v0ar.push(smo102621);
const smo102622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102622.setAttribute('id', 'smo102622');
smo102636v0ar.push(smo102622);
smo102636v0.addTickables(smo102636v0ar)
fmtsmo10263676.joinVoices([smo102636v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103923 = smo99902.getStemDirection();
smo99902.setStemDirection(dirsmo103923);
smo99903.setStemDirection(dirsmo103923);
smo99904.setStemDirection(dirsmo103923);
const smo103923 = new VF.Beam([smo99902,smo99903,smo99904]);
const dirsmo103924 = smo99905.getStemDirection();
smo99905.setStemDirection(dirsmo103924);
smo99906.setStemDirection(dirsmo103924);
smo99907.setStemDirection(dirsmo103924);
smo99908.setStemDirection(dirsmo103924);
const smo103924 = new VF.Beam([smo99905,smo99906,smo99907,smo99908]);
const dirsmo103927 = smo102619.getStemDirection();
smo102619.setStemDirection(dirsmo103927);
smo102620.setStemDirection(dirsmo103927);
const smo103927 = new VF.Beam([smo102619,smo102620]);
const dirsmo103928 = smo102621.getStemDirection();
smo102621.setStemDirection(dirsmo103928);
smo102622.setStemDirection(dirsmo103928);
const smo103928 = new VF.Beam([smo102621,smo102622]);
 
// formatting measures in staff group smo97609
fmtsmo9992276.format([smo99922v0,smo102636v0], 281);
const stavesmo99922 = new VF.Stave(1253, 1147, 295);
stavesmo99922.setAttribute('id', 'stavesmo99922');
stavesmo99922.setBegBarType(VF.Barline.type.NONE);
stavesmo99922.setContext(context);
stavesmo99922.draw();
smo99922v0.draw(context, stavesmo99922);
smo103923.setContext(context);
smo103923.draw();
smo103924.setContext(context);
smo103924.draw();
const stavesmo102636 = new VF.Stave(1253, 1271, 295);
stavesmo102636.setAttribute('id', 'stavesmo102636');
stavesmo102636.setBegBarType(VF.Barline.type.NONE);
stavesmo102636.setContext(context);
stavesmo102636.draw();
smo102636v0.draw(context, stavesmo102636);
smo103927.setContext(context);
smo103927.draw();
smo103928.setContext(context);
smo103928.draw();
const fmtsmo9994277 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo99942v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99942v0ar = [];
const smo99923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo99923.setAttribute('id', 'smo99923');
smo99942v0ar.push(smo99923);
const smo99924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo99924.setAttribute('id', 'smo99924');
const smo999240acc = new VF.Accidental('b');
smo99924.addModifier(smo999240acc, 0);
const smo999241acc = new VF.Accidental('b');
smo99924.addModifier(smo999241acc, 1);
smo99942v0ar.push(smo99924);
const smo99925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo99925.setAttribute('id', 'smo99925');
const smo999250acc = new VF.Accidental('n');
smo99925.addModifier(smo999250acc, 0);
const smo999251acc = new VF.Accidental('n');
smo99925.addModifier(smo999251acc, 1);
smo99942v0ar.push(smo99925);
const smo99926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo99926.setAttribute('id', 'smo99926');
smo99942v0ar.push(smo99926);
const smo99927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo99927.setAttribute('id', 'smo99927');
const smo999270acc = new VF.Accidental('b');
smo99927.addModifier(smo999270acc, 0);
const smo999271acc = new VF.Accidental('b');
smo99927.addModifier(smo999271acc, 1);
smo99942v0ar.push(smo99927);
const smo99928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo99928.setAttribute('id', 'smo99928');
const smo999280acc = new VF.Accidental('n');
smo99928.addModifier(smo999280acc, 0);
const smo999281acc = new VF.Accidental('n');
smo99928.addModifier(smo999281acc, 1);
smo99942v0ar.push(smo99928);
smo99942v0.addTickables(smo99942v0ar)
fmtsmo9994277.joinVoices([smo99942v0]);
const fmtsmo10265477 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo102654v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102654v0ar = [];
const smo102637 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102637.setAttribute('id', 'smo102637');
smo102654v0ar.push(smo102637);
const smo102638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102638.setAttribute('id', 'smo102638');
smo102654v0ar.push(smo102638);
const smo102639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102639.setAttribute('id', 'smo102639');
smo102654v0ar.push(smo102639);
const smo102640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102640.setAttribute('id', 'smo102640');
smo102654v0ar.push(smo102640);
smo102654v0.addTickables(smo102654v0ar)
fmtsmo10265477.joinVoices([smo102654v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103931 = smo99923.getStemDirection();
smo99923.setStemDirection(dirsmo103931);
smo99924.setStemDirection(dirsmo103931);
smo99925.setStemDirection(dirsmo103931);
const smo103931 = new VF.Beam([smo99923,smo99924,smo99925]);
const dirsmo103932 = smo99926.getStemDirection();
smo99926.setStemDirection(dirsmo103932);
smo99927.setStemDirection(dirsmo103932);
smo99928.setStemDirection(dirsmo103932);
const smo103932 = new VF.Beam([smo99926,smo99927,smo99928]);
const dirsmo103935 = smo102637.getStemDirection();
smo102637.setStemDirection(dirsmo103935);
smo102638.setStemDirection(dirsmo103935);
const smo103935 = new VF.Beam([smo102637,smo102638]);
const dirsmo103936 = smo102639.getStemDirection();
smo102639.setStemDirection(dirsmo103936);
smo102640.setStemDirection(dirsmo103936);
const smo103936 = new VF.Beam([smo102639,smo102640]);
 
// formatting measures in staff group smo97609
fmtsmo9994277.format([smo99942v0,smo102654v0], 281);
const stavesmo99942 = new VF.Stave(1548, 1147, 295);
stavesmo99942.setAttribute('id', 'stavesmo99942');
stavesmo99942.setBegBarType(VF.Barline.type.NONE);
stavesmo99942.setContext(context);
stavesmo99942.draw();
smo99942v0.draw(context, stavesmo99942);
smo103931.setContext(context);
smo103931.draw();
smo103932.setContext(context);
smo103932.draw();
const stavesmo102654 = new VF.Stave(1548, 1271, 295);
stavesmo102654.setAttribute('id', 'stavesmo102654');
stavesmo102654.setBegBarType(VF.Barline.type.NONE);
stavesmo102654.setContext(context);
stavesmo102654.draw();
smo102654v0.draw(context, stavesmo102654);
smo103935.setContext(context);
smo103935.draw();
smo103936.setContext(context);
smo103936.draw();
const rightsmo97609stavesmo999421 = new VF.StaveConnector(stavesmo99942, stavesmo102654).setType(0);
rightsmo97609stavesmo999421.setContext(context).draw();
const fmtsmo9996478 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo99964v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99964v0ar = [];
const smo99943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99943.setAttribute('id', 'smo99943');
smo99964v0ar.push(smo99943);
const smo99944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99944.setAttribute('id', 'smo99944');
smo99964v0ar.push(smo99944);
const smo99945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo99945.setAttribute('id', 'smo99945');
smo99964v0ar.push(smo99945);
const smo99946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99946.setAttribute('id', 'smo99946');
smo99964v0ar.push(smo99946);
const smo99947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99947.setAttribute('id', 'smo99947');
smo99964v0ar.push(smo99947);
const smo99948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo99948.setAttribute('id', 'smo99948');
smo99964v0ar.push(smo99948);
const smo99949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo99949.setAttribute('id', 'smo99949');
smo99964v0ar.push(smo99949);
const smo99950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo99950.setAttribute('id', 'smo99950');
smo99964v0ar.push(smo99950);
smo99964v0.addTickables(smo99964v0ar)
fmtsmo9996478.joinVoices([smo99964v0]);
const fmtsmo10267278 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo102672v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102672v0ar = [];
const smo102655 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102655.setAttribute('id', 'smo102655');
smo102672v0ar.push(smo102655);
const smo102656 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102656.setAttribute('id', 'smo102656');
smo102672v0ar.push(smo102656);
const smo102657 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102657.setAttribute('id', 'smo102657');
smo102672v0ar.push(smo102657);
const smo102658 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102658.setAttribute('id', 'smo102658');
smo102672v0ar.push(smo102658);
smo102672v0.addTickables(smo102672v0ar)
fmtsmo10267278.joinVoices([smo102672v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103947 = smo99944.getStemDirection();
smo99944.setStemDirection(dirsmo103947);
smo99945.setStemDirection(dirsmo103947);
smo99946.setStemDirection(dirsmo103947);
const smo103947 = new VF.Beam([smo99944,smo99945,smo99946]);
const dirsmo103948 = smo99947.getStemDirection();
smo99947.setStemDirection(dirsmo103948);
smo99948.setStemDirection(dirsmo103948);
smo99949.setStemDirection(dirsmo103948);
smo99950.setStemDirection(dirsmo103948);
const smo103948 = new VF.Beam([smo99947,smo99948,smo99949,smo99950]);
const dirsmo103951 = smo102655.getStemDirection();
smo102655.setStemDirection(dirsmo103951);
smo102656.setStemDirection(dirsmo103951);
const smo103951 = new VF.Beam([smo102655,smo102656]);
const dirsmo103952 = smo102657.getStemDirection();
smo102657.setStemDirection(dirsmo103952);
smo102658.setStemDirection(dirsmo103952);
const smo103952 = new VF.Beam([smo102657,smo102658]);
 
// formatting measures in staff group smo97609
fmtsmo9996478.format([smo99964v0,smo102672v0], 237);
const stavesmo99964 = new VF.Stave(73, 1444, 295);
stavesmo99964.setAttribute('id', 'stavesmo99964');
stavesmo99964.setBegBarType(1);
stavesmo99964.addClef('treble');
stavesmo99964.setContext(context);
stavesmo99964.draw();
smo99964v0.draw(context, stavesmo99964);
smo103947.setContext(context);
smo103947.draw();
smo103948.setContext(context);
smo103948.draw();
const stavesmo102672 = new VF.Stave(73, 1574, 295);
stavesmo102672.setAttribute('id', 'stavesmo102672');
stavesmo102672.setBegBarType(1);
stavesmo102672.addClef('bass');
stavesmo102672.setContext(context);
stavesmo102672.draw();
smo102672v0.draw(context, stavesmo102672);
smo103951.setContext(context);
smo103951.draw();
smo103952.setContext(context);
smo103952.draw();
const leftsmo97609stavesmo999641 = new VF.StaveConnector(stavesmo99964, stavesmo102672).setType(3);
leftsmo97609stavesmo999641.setContext(context).draw();
const fmtsmo9998479 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo99984v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo99984v0ar = [];
const smo99965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo99965.setAttribute('id', 'smo99965');
smo99984v0ar.push(smo99965);
const smo99966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
smo99966.setAttribute('id', 'smo99966');
const smo999660acc = new VF.Accidental('b');
smo99966.addModifier(smo999660acc, 0);
const smo999661acc = new VF.Accidental('b');
smo99966.addModifier(smo999661acc, 1);
smo99984v0ar.push(smo99966);
const smo99967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo99967.setAttribute('id', 'smo99967');
const smo999670acc = new VF.Accidental('n');
smo99967.addModifier(smo999670acc, 0);
const smo999671acc = new VF.Accidental('n');
smo99967.addModifier(smo999671acc, 1);
smo99984v0ar.push(smo99967);
const smo99968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo99968.setAttribute('id', 'smo99968');
smo99984v0ar.push(smo99968);
const smo99969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
smo99969.setAttribute('id', 'smo99969');
const smo999690acc = new VF.Accidental('b');
smo99969.addModifier(smo999690acc, 0);
const smo999691acc = new VF.Accidental('b');
smo99969.addModifier(smo999691acc, 1);
smo99984v0ar.push(smo99969);
const smo99970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo99970.setAttribute('id', 'smo99970');
const smo999700acc = new VF.Accidental('n');
smo99970.addModifier(smo999700acc, 0);
const smo999701acc = new VF.Accidental('n');
smo99970.addModifier(smo999701acc, 1);
smo99984v0ar.push(smo99970);
smo99984v0.addTickables(smo99984v0ar)
fmtsmo9998479.joinVoices([smo99984v0]);
const fmtsmo10269079 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo102690v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102690v0ar = [];
const smo102673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102673.setAttribute('id', 'smo102673');
smo102690v0ar.push(smo102673);
const smo102674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo102674.setAttribute('id', 'smo102674');
smo102690v0ar.push(smo102674);
const smo102675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo102675.setAttribute('id', 'smo102675');
smo102690v0ar.push(smo102675);
const smo102676 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo102676.setAttribute('id', 'smo102676');
smo102690v0ar.push(smo102676);
smo102690v0.addTickables(smo102690v0ar)
fmtsmo10269079.joinVoices([smo102690v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103955 = smo99965.getStemDirection();
smo99965.setStemDirection(dirsmo103955);
smo99966.setStemDirection(dirsmo103955);
smo99967.setStemDirection(dirsmo103955);
const smo103955 = new VF.Beam([smo99965,smo99966,smo99967]);
const dirsmo103956 = smo99968.getStemDirection();
smo99968.setStemDirection(dirsmo103956);
smo99969.setStemDirection(dirsmo103956);
smo99970.setStemDirection(dirsmo103956);
const smo103956 = new VF.Beam([smo99968,smo99969,smo99970]);
const dirsmo103959 = smo102673.getStemDirection();
smo102673.setStemDirection(dirsmo103959);
smo102674.setStemDirection(dirsmo103959);
const smo103959 = new VF.Beam([smo102673,smo102674]);
const dirsmo103960 = smo102675.getStemDirection();
smo102675.setStemDirection(dirsmo103960);
smo102676.setStemDirection(dirsmo103960);
const smo103960 = new VF.Beam([smo102675,smo102676]);
 
// formatting measures in staff group smo97609
fmtsmo9998479.format([smo99984v0,smo102690v0], 281);
const stavesmo99984 = new VF.Stave(368, 1444, 295);
stavesmo99984.setAttribute('id', 'stavesmo99984');
stavesmo99984.setBegBarType(VF.Barline.type.NONE);
stavesmo99984.setContext(context);
stavesmo99984.draw();
smo99984v0.draw(context, stavesmo99984);
smo103955.setContext(context);
smo103955.draw();
smo103956.setContext(context);
smo103956.draw();
const stavesmo102690 = new VF.Stave(368, 1574, 295);
stavesmo102690.setAttribute('id', 'stavesmo102690');
stavesmo102690.setBegBarType(VF.Barline.type.NONE);
stavesmo102690.setContext(context);
stavesmo102690.draw();
smo102690v0.draw(context, stavesmo102690);
smo103959.setContext(context);
smo103959.draw();
smo103960.setContext(context);
smo103960.draw();
const fmtsmo10000680 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo100006v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100006v0ar = [];
const smo99985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo99985.setAttribute('id', 'smo99985');
smo100006v0ar.push(smo99985);
const smo99986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo99986.setAttribute('id', 'smo99986');
smo100006v0ar.push(smo99986);
const smo99987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","an/5/n"]}'))
smo99987.setAttribute('id', 'smo99987');
smo100006v0ar.push(smo99987);
const smo99988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo99988.setAttribute('id', 'smo99988');
smo100006v0ar.push(smo99988);
const smo99989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99989.setAttribute('id', 'smo99989');
smo100006v0ar.push(smo99989);
const smo99990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo99990.setAttribute('id', 'smo99990');
smo100006v0ar.push(smo99990);
const smo99991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo99991.setAttribute('id', 'smo99991');
smo100006v0ar.push(smo99991);
const smo99992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo99992.setAttribute('id', 'smo99992');
smo100006v0ar.push(smo99992);
smo100006v0.addTickables(smo100006v0ar)
fmtsmo10000680.joinVoices([smo100006v0]);
const fmtsmo10270880 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo102708v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102708v0ar = [];
const smo102691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102691.setAttribute('id', 'smo102691');
smo102708v0ar.push(smo102691);
const smo102692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo102692.setAttribute('id', 'smo102692');
smo102708v0ar.push(smo102692);
const smo102693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo102693.setAttribute('id', 'smo102693');
smo102708v0ar.push(smo102693);
const smo102694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo102694.setAttribute('id', 'smo102694');
smo102708v0ar.push(smo102694);
smo102708v0.addTickables(smo102708v0ar)
fmtsmo10270880.joinVoices([smo102708v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103963 = smo99986.getStemDirection();
smo99986.setStemDirection(dirsmo103963);
smo99987.setStemDirection(dirsmo103963);
smo99988.setStemDirection(dirsmo103963);
const smo103963 = new VF.Beam([smo99986,smo99987,smo99988]);
const dirsmo103964 = smo99989.getStemDirection();
smo99989.setStemDirection(dirsmo103964);
smo99990.setStemDirection(dirsmo103964);
smo99991.setStemDirection(dirsmo103964);
smo99992.setStemDirection(dirsmo103964);
const smo103964 = new VF.Beam([smo99989,smo99990,smo99991,smo99992]);
const dirsmo103967 = smo102691.getStemDirection();
smo102691.setStemDirection(dirsmo103967);
smo102692.setStemDirection(dirsmo103967);
const smo103967 = new VF.Beam([smo102691,smo102692]);
const dirsmo103968 = smo102693.getStemDirection();
smo102693.setStemDirection(dirsmo103968);
smo102694.setStemDirection(dirsmo103968);
const smo103968 = new VF.Beam([smo102693,smo102694]);
 
// formatting measures in staff group smo97609
fmtsmo10000680.format([smo100006v0,smo102708v0], 281);
const stavesmo100006 = new VF.Stave(663, 1444, 295);
stavesmo100006.setAttribute('id', 'stavesmo100006');
stavesmo100006.setBegBarType(VF.Barline.type.NONE);
stavesmo100006.setContext(context);
stavesmo100006.draw();
smo100006v0.draw(context, stavesmo100006);
smo103963.setContext(context);
smo103963.draw();
smo103964.setContext(context);
smo103964.draw();
const stavesmo102708 = new VF.Stave(663, 1574, 295);
stavesmo102708.setAttribute('id', 'stavesmo102708');
stavesmo102708.setBegBarType(VF.Barline.type.NONE);
stavesmo102708.setContext(context);
stavesmo102708.draw();
smo102708v0.draw(context, stavesmo102708);
smo103967.setContext(context);
smo103967.draw();
smo103968.setContext(context);
smo103968.draw();
const fmtsmo10002481 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo100024v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100024v0ar = [];
const smo100007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100007.setAttribute('id', 'smo100007');
smo100024v0ar.push(smo100007);
const smo100008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100008.setAttribute('id', 'smo100008');
smo100024v0ar.push(smo100008);
const smo100009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo100009.setAttribute('id', 'smo100009');
smo100024v0ar.push(smo100009);
const smo100010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","an/5/n"]}'))
smo100010.setAttribute('id', 'smo100010');
smo100024v0ar.push(smo100010);
smo100024v0.addTickables(smo100024v0ar)
fmtsmo10002481.joinVoices([smo100024v0]);
const fmtsmo10272581 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo102725v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102725v0ar = [];
const smo102709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo102709.setAttribute('id', 'smo102709');
const smo1027090acc = new VF.Accidental('b');
smo102709.addModifier(smo1027090acc, 0);
const smo1027091acc = new VF.Accidental('b');
smo102709.addModifier(smo1027091acc, 1);
smo102725v0ar.push(smo102709);
const smo102710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo102710.setAttribute('id', 'smo102710');
smo102725v0ar.push(smo102710);
const smo102711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo102711.setAttribute('id', 'smo102711');
smo102725v0ar.push(smo102711);
smo102725v0.addTickables(smo102725v0ar)
fmtsmo10272581.joinVoices([smo102725v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103971 = smo100007.getStemDirection();
smo100007.setStemDirection(dirsmo103971);
smo100008.setStemDirection(dirsmo103971);
const smo103971 = new VF.Beam([smo100007,smo100008]);
 
// formatting measures in staff group smo97609
fmtsmo10002481.format([smo100024v0,smo102725v0], 281);
const stavesmo100024 = new VF.Stave(958, 1444, 295);
stavesmo100024.setAttribute('id', 'stavesmo100024');
stavesmo100024.setBegBarType(VF.Barline.type.NONE);
stavesmo100024.setContext(context);
stavesmo100024.draw();
smo100024v0.draw(context, stavesmo100024);
smo103971.setContext(context);
smo103971.draw();
const stavesmo102725 = new VF.Stave(958, 1574, 295);
stavesmo102725.setAttribute('id', 'stavesmo102725');
stavesmo102725.setBegBarType(VF.Barline.type.NONE);
stavesmo102725.setContext(context);
stavesmo102725.draw();
smo102725v0.draw(context, stavesmo102725);
const fmtsmo10004382 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo100043v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100043v0ar = [];
const smo100025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gn/5/n"]}'))
smo100025.setAttribute('id', 'smo100025');
smo100043v0ar.push(smo100025);
const smo100026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100026.setAttribute('id', 'smo100026');
smo100043v0ar.push(smo100026);
const smo100027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100027.setAttribute('id', 'smo100027');
smo100043v0ar.push(smo100027);
const smo100028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100028.setAttribute('id', 'smo100028');
smo100043v0ar.push(smo100028);
const smo100029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100029.setAttribute('id', 'smo100029');
smo100043v0ar.push(smo100029);
smo100043v0.addTickables(smo100043v0ar)
fmtsmo10004382.joinVoices([smo100043v0]);
const fmtsmo10274282 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo102742v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102742v0ar = [];
const smo102726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102726.setAttribute('id', 'smo102726');
smo102742v0ar.push(smo102726);
const smo102727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102727.setAttribute('id', 'smo102727');
smo102742v0ar.push(smo102727);
const smo102728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102728.setAttribute('id', 'smo102728');
smo102742v0ar.push(smo102728);
smo102742v0.addTickables(smo102742v0ar)
fmtsmo10274282.joinVoices([smo102742v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103976 = smo100025.getStemDirection();
smo100025.setStemDirection(dirsmo103976);
smo100026.setStemDirection(dirsmo103976);
smo100027.setStemDirection(dirsmo103976);
const smo103976 = new VF.Beam([smo100025,smo100026,smo100027]);
const dirsmo103977 = smo100028.getStemDirection();
smo100028.setStemDirection(dirsmo103977);
smo100029.setStemDirection(dirsmo103977);
const smo103977 = new VF.Beam([smo100028,smo100029]);
 
// formatting measures in staff group smo97609
fmtsmo10004382.format([smo100043v0,smo102742v0], 281);
const stavesmo100043 = new VF.Stave(1253, 1444, 295);
stavesmo100043.setAttribute('id', 'stavesmo100043');
stavesmo100043.setBegBarType(VF.Barline.type.NONE);
stavesmo100043.setContext(context);
stavesmo100043.draw();
smo100043v0.draw(context, stavesmo100043);
smo103976.setContext(context);
smo103976.draw();
smo103977.setContext(context);
smo103977.draw();
const stavesmo102742 = new VF.Stave(1253, 1574, 295);
stavesmo102742.setAttribute('id', 'stavesmo102742');
stavesmo102742.setBegBarType(VF.Barline.type.NONE);
stavesmo102742.setContext(context);
stavesmo102742.draw();
smo102742v0.draw(context, stavesmo102742);
const fmtsmo10006383 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo100063v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100063v0ar = [];
const smo100044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo100044.setAttribute('id', 'smo100044');
smo100063v0ar.push(smo100044);
const smo100045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo100045.setAttribute('id', 'smo100045');
const smo1000450acc = new VF.Accidental('b');
smo100045.addModifier(smo1000450acc, 0);
smo100063v0ar.push(smo100045);
const smo100046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo100046.setAttribute('id', 'smo100046');
const smo1000460acc = new VF.Accidental('n');
smo100046.addModifier(smo1000460acc, 0);
smo100063v0ar.push(smo100046);
const smo100047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo100047.setAttribute('id', 'smo100047');
smo100063v0ar.push(smo100047);
const smo100048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo100048.setAttribute('id', 'smo100048');
const smo1000480acc = new VF.Accidental('b');
smo100048.addModifier(smo1000480acc, 0);
smo100063v0ar.push(smo100048);
const smo100049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo100049.setAttribute('id', 'smo100049');
const smo1000490acc = new VF.Accidental('n');
smo100049.addModifier(smo1000490acc, 0);
smo100063v0ar.push(smo100049);
smo100063v0.addTickables(smo100063v0ar)
fmtsmo10006383.joinVoices([smo100063v0]);
const fmtsmo10276083 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo102760v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102760v0ar = [];
const smo102743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo102743.setAttribute('id', 'smo102743');
smo102760v0ar.push(smo102743);
const smo102744 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102744.setAttribute('id', 'smo102744');
smo102760v0ar.push(smo102744);
const smo102745 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo102745.setAttribute('id', 'smo102745');
smo102760v0ar.push(smo102745);
const smo102746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102746.setAttribute('id', 'smo102746');
smo102760v0ar.push(smo102746);
smo102760v0.addTickables(smo102760v0ar)
fmtsmo10276083.joinVoices([smo102760v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103982 = smo100044.getStemDirection();
smo100044.setStemDirection(dirsmo103982);
smo100045.setStemDirection(dirsmo103982);
smo100046.setStemDirection(dirsmo103982);
const smo103982 = new VF.Beam([smo100044,smo100045,smo100046]);
const dirsmo103983 = smo100047.getStemDirection();
smo100047.setStemDirection(dirsmo103983);
smo100048.setStemDirection(dirsmo103983);
smo100049.setStemDirection(dirsmo103983);
const smo103983 = new VF.Beam([smo100047,smo100048,smo100049]);
const dirsmo103986 = smo102743.getStemDirection();
smo102743.setStemDirection(dirsmo103986);
smo102744.setStemDirection(dirsmo103986);
const smo103986 = new VF.Beam([smo102743,smo102744]);
const dirsmo103987 = smo102745.getStemDirection();
smo102745.setStemDirection(dirsmo103987);
smo102746.setStemDirection(dirsmo103987);
const smo103987 = new VF.Beam([smo102745,smo102746]);
 
// formatting measures in staff group smo97609
fmtsmo10006383.format([smo100063v0,smo102760v0], 281);
const stavesmo100063 = new VF.Stave(1548, 1444, 295);
stavesmo100063.setAttribute('id', 'stavesmo100063');
stavesmo100063.setBegBarType(VF.Barline.type.NONE);
stavesmo100063.setContext(context);
stavesmo100063.draw();
smo100063v0.draw(context, stavesmo100063);
smo103982.setContext(context);
smo103982.draw();
smo103983.setContext(context);
smo103983.draw();
const stavesmo102760 = new VF.Stave(1548, 1574, 295);
stavesmo102760.setAttribute('id', 'stavesmo102760');
stavesmo102760.setBegBarType(VF.Barline.type.NONE);
stavesmo102760.setContext(context);
stavesmo102760.draw();
smo102760v0.draw(context, stavesmo102760);
smo103986.setContext(context);
smo103986.draw();
smo103987.setContext(context);
smo103987.draw();
const rightsmo97609stavesmo1000631 = new VF.StaveConnector(stavesmo100063, stavesmo102760).setType(0);
rightsmo97609stavesmo1000631.setContext(context).draw();
const fmtsmo10008584 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo100085v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100085v0ar = [];
const smo100064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo100064.setAttribute('id', 'smo100064');
smo100085v0ar.push(smo100064);
const smo100065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo100065.setAttribute('id', 'smo100065');
smo100085v0ar.push(smo100065);
const smo100066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo100066.setAttribute('id', 'smo100066');
smo100085v0ar.push(smo100066);
const smo100067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo100067.setAttribute('id', 'smo100067');
smo100085v0ar.push(smo100067);
const smo100068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo100068.setAttribute('id', 'smo100068');
smo100085v0ar.push(smo100068);
const smo100069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo100069.setAttribute('id', 'smo100069');
smo100085v0ar.push(smo100069);
const smo100070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo100070.setAttribute('id', 'smo100070');
smo100085v0ar.push(smo100070);
const smo100071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo100071.setAttribute('id', 'smo100071');
smo100085v0ar.push(smo100071);
smo100085v0.addTickables(smo100085v0ar)
fmtsmo10008584.joinVoices([smo100085v0]);
const fmtsmo10277884 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo102778v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102778v0ar = [];
const smo102761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo102761.setAttribute('id', 'smo102761');
smo102778v0ar.push(smo102761);
const smo102762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102762.setAttribute('id', 'smo102762');
smo102778v0ar.push(smo102762);
const smo102763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo102763.setAttribute('id', 'smo102763');
smo102778v0ar.push(smo102763);
const smo102764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo102764.setAttribute('id', 'smo102764');
smo102778v0ar.push(smo102764);
smo102778v0.addTickables(smo102778v0ar)
fmtsmo10277884.joinVoices([smo102778v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo103998 = smo100065.getStemDirection();
smo100065.setStemDirection(dirsmo103998);
smo100066.setStemDirection(dirsmo103998);
smo100067.setStemDirection(dirsmo103998);
const smo103998 = new VF.Beam([smo100065,smo100066,smo100067]);
const dirsmo103999 = smo100068.getStemDirection();
smo100068.setStemDirection(dirsmo103999);
smo100069.setStemDirection(dirsmo103999);
smo100070.setStemDirection(dirsmo103999);
smo100071.setStemDirection(dirsmo103999);
const smo103999 = new VF.Beam([smo100068,smo100069,smo100070,smo100071]);
const dirsmo104002 = smo102761.getStemDirection();
smo102761.setStemDirection(dirsmo104002);
smo102762.setStemDirection(dirsmo104002);
const smo104002 = new VF.Beam([smo102761,smo102762]);
const dirsmo104003 = smo102763.getStemDirection();
smo102763.setStemDirection(dirsmo104003);
smo102764.setStemDirection(dirsmo104003);
const smo104003 = new VF.Beam([smo102763,smo102764]);
 
// formatting measures in staff group smo97609
fmtsmo10008584.format([smo100085v0,smo102778v0], 237);
const stavesmo100085 = new VF.Stave(73, 1777, 295);
stavesmo100085.setAttribute('id', 'stavesmo100085');
stavesmo100085.setBegBarType(1);
stavesmo100085.addClef('treble');
stavesmo100085.setContext(context);
stavesmo100085.draw();
smo100085v0.draw(context, stavesmo100085);
smo103998.setContext(context);
smo103998.draw();
smo103999.setContext(context);
smo103999.draw();
const stavesmo102778 = new VF.Stave(73, 1921, 295);
stavesmo102778.setAttribute('id', 'stavesmo102778');
stavesmo102778.setBegBarType(1);
stavesmo102778.addClef('bass');
stavesmo102778.setContext(context);
stavesmo102778.draw();
smo102778v0.draw(context, stavesmo102778);
smo104002.setContext(context);
smo104002.draw();
smo104003.setContext(context);
smo104003.draw();
const leftsmo97609stavesmo1000851 = new VF.StaveConnector(stavesmo100085, stavesmo102778).setType(3);
leftsmo97609stavesmo1000851.setContext(context).draw();
const fmtsmo10010585 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo100105v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100105v0ar = [];
const smo100086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100086.setAttribute('id', 'smo100086');
smo100105v0ar.push(smo100086);
const smo100087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo100087.setAttribute('id', 'smo100087');
const smo1000870acc = new VF.Accidental('b');
smo100087.addModifier(smo1000870acc, 0);
const smo1000871acc = new VF.Accidental('b');
smo100087.addModifier(smo1000871acc, 1);
smo100105v0ar.push(smo100087);
const smo100088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100088.setAttribute('id', 'smo100088');
const smo1000880acc = new VF.Accidental('n');
smo100088.addModifier(smo1000880acc, 0);
const smo1000881acc = new VF.Accidental('n');
smo100088.addModifier(smo1000881acc, 1);
smo100105v0ar.push(smo100088);
const smo100089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100089.setAttribute('id', 'smo100089');
smo100105v0ar.push(smo100089);
const smo100090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo100090.setAttribute('id', 'smo100090');
const smo1000900acc = new VF.Accidental('b');
smo100090.addModifier(smo1000900acc, 0);
const smo1000901acc = new VF.Accidental('b');
smo100090.addModifier(smo1000901acc, 1);
smo100105v0ar.push(smo100090);
const smo100091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100091.setAttribute('id', 'smo100091');
const smo1000910acc = new VF.Accidental('n');
smo100091.addModifier(smo1000910acc, 0);
const smo1000911acc = new VF.Accidental('n');
smo100091.addModifier(smo1000911acc, 1);
smo100105v0ar.push(smo100091);
smo100105v0.addTickables(smo100105v0ar)
fmtsmo10010585.joinVoices([smo100105v0]);
const fmtsmo10279685 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo102796v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102796v0ar = [];
const smo102779 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102779.setAttribute('id', 'smo102779');
smo102796v0ar.push(smo102779);
const smo102780 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102780.setAttribute('id', 'smo102780');
smo102796v0ar.push(smo102780);
const smo102781 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102781.setAttribute('id', 'smo102781');
smo102796v0ar.push(smo102781);
const smo102782 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102782.setAttribute('id', 'smo102782');
smo102796v0ar.push(smo102782);
smo102796v0.addTickables(smo102796v0ar)
fmtsmo10279685.joinVoices([smo102796v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104006 = smo100086.getStemDirection();
smo100086.setStemDirection(dirsmo104006);
smo100087.setStemDirection(dirsmo104006);
smo100088.setStemDirection(dirsmo104006);
const smo104006 = new VF.Beam([smo100086,smo100087,smo100088]);
const dirsmo104007 = smo100089.getStemDirection();
smo100089.setStemDirection(dirsmo104007);
smo100090.setStemDirection(dirsmo104007);
smo100091.setStemDirection(dirsmo104007);
const smo104007 = new VF.Beam([smo100089,smo100090,smo100091]);
const dirsmo104010 = smo102779.getStemDirection();
smo102779.setStemDirection(dirsmo104010);
smo102780.setStemDirection(dirsmo104010);
const smo104010 = new VF.Beam([smo102779,smo102780]);
const dirsmo104011 = smo102781.getStemDirection();
smo102781.setStemDirection(dirsmo104011);
smo102782.setStemDirection(dirsmo104011);
const smo104011 = new VF.Beam([smo102781,smo102782]);
 
// formatting measures in staff group smo97609
fmtsmo10010585.format([smo100105v0,smo102796v0], 281);
const stavesmo100105 = new VF.Stave(368, 1777, 295);
stavesmo100105.setAttribute('id', 'stavesmo100105');
stavesmo100105.setBegBarType(VF.Barline.type.NONE);
stavesmo100105.setContext(context);
stavesmo100105.draw();
smo100105v0.draw(context, stavesmo100105);
smo104006.setContext(context);
smo104006.draw();
smo104007.setContext(context);
smo104007.draw();
const stavesmo102796 = new VF.Stave(368, 1921, 295);
stavesmo102796.setAttribute('id', 'stavesmo102796');
stavesmo102796.setBegBarType(VF.Barline.type.NONE);
stavesmo102796.setContext(context);
stavesmo102796.draw();
smo102796v0.draw(context, stavesmo102796);
smo104010.setContext(context);
smo104010.draw();
smo104011.setContext(context);
smo104011.draw();
const fmtsmo10012786 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo100127v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100127v0ar = [];
const smo100106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo100106.setAttribute('id', 'smo100106');
smo100127v0ar.push(smo100106);
const smo100107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo100107.setAttribute('id', 'smo100107');
smo100127v0ar.push(smo100107);
const smo100108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo100108.setAttribute('id', 'smo100108');
smo100127v0ar.push(smo100108);
const smo100109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo100109.setAttribute('id', 'smo100109');
smo100127v0ar.push(smo100109);
const smo100110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo100110.setAttribute('id', 'smo100110');
smo100127v0ar.push(smo100110);
const smo100111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo100111.setAttribute('id', 'smo100111');
smo100127v0ar.push(smo100111);
const smo100112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo100112.setAttribute('id', 'smo100112');
smo100127v0ar.push(smo100112);
const smo100113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo100113.setAttribute('id', 'smo100113');
smo100127v0ar.push(smo100113);
smo100127v0.addTickables(smo100127v0ar)
fmtsmo10012786.joinVoices([smo100127v0]);
const fmtsmo10281486 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo102814v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102814v0ar = [];
const smo102797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo102797.setAttribute('id', 'smo102797');
smo102814v0ar.push(smo102797);
const smo102798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102798.setAttribute('id', 'smo102798');
smo102814v0ar.push(smo102798);
const smo102799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo102799.setAttribute('id', 'smo102799');
smo102814v0ar.push(smo102799);
const smo102800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo102800.setAttribute('id', 'smo102800');
smo102814v0ar.push(smo102800);
smo102814v0.addTickables(smo102814v0ar)
fmtsmo10281486.joinVoices([smo102814v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104014 = smo100107.getStemDirection();
smo100107.setStemDirection(dirsmo104014);
smo100108.setStemDirection(dirsmo104014);
smo100109.setStemDirection(dirsmo104014);
const smo104014 = new VF.Beam([smo100107,smo100108,smo100109]);
const dirsmo104015 = smo100110.getStemDirection();
smo100110.setStemDirection(dirsmo104015);
smo100111.setStemDirection(dirsmo104015);
smo100112.setStemDirection(dirsmo104015);
smo100113.setStemDirection(dirsmo104015);
const smo104015 = new VF.Beam([smo100110,smo100111,smo100112,smo100113]);
const dirsmo104018 = smo102797.getStemDirection();
smo102797.setStemDirection(dirsmo104018);
smo102798.setStemDirection(dirsmo104018);
const smo104018 = new VF.Beam([smo102797,smo102798]);
const dirsmo104019 = smo102799.getStemDirection();
smo102799.setStemDirection(dirsmo104019);
smo102800.setStemDirection(dirsmo104019);
const smo104019 = new VF.Beam([smo102799,smo102800]);
 
// formatting measures in staff group smo97609
fmtsmo10012786.format([smo100127v0,smo102814v0], 281);
const stavesmo100127 = new VF.Stave(663, 1777, 295);
stavesmo100127.setAttribute('id', 'stavesmo100127');
stavesmo100127.setBegBarType(VF.Barline.type.NONE);
stavesmo100127.setContext(context);
stavesmo100127.draw();
smo100127v0.draw(context, stavesmo100127);
smo104014.setContext(context);
smo104014.draw();
smo104015.setContext(context);
smo104015.draw();
const stavesmo102814 = new VF.Stave(663, 1921, 295);
stavesmo102814.setAttribute('id', 'stavesmo102814');
stavesmo102814.setBegBarType(VF.Barline.type.NONE);
stavesmo102814.setContext(context);
stavesmo102814.draw();
smo102814v0.draw(context, stavesmo102814);
smo104018.setContext(context);
smo104018.draw();
smo104019.setContext(context);
smo104019.draw();
const fmtsmo10014887 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo100148v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100148v0ar = [];
const smo100128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo100128.setAttribute('id', 'smo100128');
smo100148v0ar.push(smo100128);
const smo100129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo100129.setAttribute('id', 'smo100129');
const smo1001290acc = new VF.Accidental('b');
smo100129.addModifier(smo1001290acc, 0);
smo100148v0ar.push(smo100129);
const smo100130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo100130.setAttribute('id', 'smo100130');
const smo1001300acc = new VF.Accidental('n');
smo100130.addModifier(smo1001300acc, 0);
smo100148v0ar.push(smo100130);
const smo100131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
smo100131.setAttribute('id', 'smo100131');
smo100148v0ar.push(smo100131);
const smo100132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
smo100132.setAttribute('id', 'smo100132');
smo100148v0ar.push(smo100132);
const smo100133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo100133.setAttribute('id', 'smo100133');
smo100148v0ar.push(smo100133);
const smo100134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
smo100134.setAttribute('id', 'smo100134');
smo100148v0ar.push(smo100134);
smo100148v0.addTickables(smo100148v0ar)
fmtsmo10014887.joinVoices([smo100148v0]);
const fmtsmo10283287 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo102832v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102832v0ar = [];
const smo102815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102815.setAttribute('id', 'smo102815');
smo102832v0ar.push(smo102815);
const smo102816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo102816.setAttribute('id', 'smo102816');
smo102832v0ar.push(smo102816);
const smo102817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo102817.setAttribute('id', 'smo102817');
smo102832v0ar.push(smo102817);
const smo102818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo102818.setAttribute('id', 'smo102818');
smo102832v0ar.push(smo102818);
smo102832v0.addTickables(smo102832v0ar)
fmtsmo10283287.joinVoices([smo102832v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104022 = smo100128.getStemDirection();
smo100128.setStemDirection(dirsmo104022);
smo100129.setStemDirection(dirsmo104022);
smo100130.setStemDirection(dirsmo104022);
smo100131.setStemDirection(dirsmo104022);
const smo104022 = new VF.Beam([smo100128,smo100129,smo100130,smo100131]);
const dirsmo104023 = smo100132.getStemDirection();
smo100132.setStemDirection(dirsmo104023);
smo100133.setStemDirection(dirsmo104023);
smo100134.setStemDirection(dirsmo104023);
const smo104023 = new VF.Beam([smo100132,smo100133,smo100134]);
const dirsmo104026 = smo102815.getStemDirection();
smo102815.setStemDirection(dirsmo104026);
smo102816.setStemDirection(dirsmo104026);
const smo104026 = new VF.Beam([smo102815,smo102816]);
const dirsmo104027 = smo102817.getStemDirection();
smo102817.setStemDirection(dirsmo104027);
smo102818.setStemDirection(dirsmo104027);
const smo104027 = new VF.Beam([smo102817,smo102818]);
 
// formatting measures in staff group smo97609
fmtsmo10014887.format([smo100148v0,smo102832v0], 281);
const stavesmo100148 = new VF.Stave(958, 1777, 295);
stavesmo100148.setAttribute('id', 'stavesmo100148');
stavesmo100148.setBegBarType(VF.Barline.type.NONE);
stavesmo100148.setContext(context);
stavesmo100148.draw();
smo100148v0.draw(context, stavesmo100148);
smo104022.setContext(context);
smo104022.draw();
smo104023.setContext(context);
smo104023.draw();
const stavesmo102832 = new VF.Stave(958, 1921, 295);
stavesmo102832.setAttribute('id', 'stavesmo102832');
stavesmo102832.setBegBarType(VF.Barline.type.NONE);
stavesmo102832.setContext(context);
stavesmo102832.draw();
smo102832v0.draw(context, stavesmo102832);
smo104026.setContext(context);
smo104026.draw();
smo104027.setContext(context);
smo104027.draw();
const fmtsmo10017088 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo100170v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100170v0ar = [];
const smo100149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo100149.setAttribute('id', 'smo100149');
smo100170v0ar.push(smo100149);
const smo100150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo100150.setAttribute('id', 'smo100150');
const smo1001500acc = new VF.Accidental('b');
smo100150.addModifier(smo1001500acc, 0);
smo100170v0ar.push(smo100150);
const smo100151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo100151.setAttribute('id', 'smo100151');
const smo1001510acc = new VF.Accidental('n');
smo100151.addModifier(smo1001510acc, 0);
smo100170v0ar.push(smo100151);
const smo100152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo100152.setAttribute('id', 'smo100152');
smo100170v0ar.push(smo100152);
const smo100153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo100153.setAttribute('id', 'smo100153');
smo100170v0ar.push(smo100153);
const smo100154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo100154.setAttribute('id', 'smo100154');
smo100170v0ar.push(smo100154);
const smo100155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo100155.setAttribute('id', 'smo100155');
smo100170v0ar.push(smo100155);
const smo100156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo100156.setAttribute('id', 'smo100156');
smo100170v0ar.push(smo100156);
smo100170v0.addTickables(smo100170v0ar)
fmtsmo10017088.joinVoices([smo100170v0]);
const fmtsmo10285088 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo102850v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102850v0ar = [];
const smo102833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102833.setAttribute('id', 'smo102833');
smo102850v0ar.push(smo102833);
const smo102834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102834.setAttribute('id', 'smo102834');
smo102850v0ar.push(smo102834);
const smo102835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
smo102835.setAttribute('id', 'smo102835');
const smo1028350acc = new VF.Accidental('b');
smo102835.addModifier(smo1028350acc, 0);
const smo1028352acc = new VF.Accidental('b');
smo102835.addModifier(smo1028352acc, 2);
smo102850v0ar.push(smo102835);
const smo102836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo102836.setAttribute('id', 'smo102836');
const smo1028360acc = new VF.Accidental('n');
smo102836.addModifier(smo1028360acc, 0);
const smo1028362acc = new VF.Accidental('n');
smo102836.addModifier(smo1028362acc, 2);
smo102850v0ar.push(smo102836);
smo102850v0.addTickables(smo102850v0ar)
fmtsmo10285088.joinVoices([smo102850v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104030 = smo100149.getStemDirection();
smo100149.setStemDirection(dirsmo104030);
smo100150.setStemDirection(dirsmo104030);
smo100151.setStemDirection(dirsmo104030);
smo100152.setStemDirection(dirsmo104030);
const smo104030 = new VF.Beam([smo100149,smo100150,smo100151,smo100152]);
const dirsmo104031 = smo100153.getStemDirection();
smo100153.setStemDirection(dirsmo104031);
smo100154.setStemDirection(dirsmo104031);
smo100155.setStemDirection(dirsmo104031);
smo100156.setStemDirection(dirsmo104031);
const smo104031 = new VF.Beam([smo100153,smo100154,smo100155,smo100156]);
const dirsmo104034 = smo102833.getStemDirection();
smo102833.setStemDirection(dirsmo104034);
smo102834.setStemDirection(dirsmo104034);
const smo104034 = new VF.Beam([smo102833,smo102834]);
const dirsmo104035 = smo102835.getStemDirection();
smo102835.setStemDirection(dirsmo104035);
smo102836.setStemDirection(dirsmo104035);
const smo104035 = new VF.Beam([smo102835,smo102836]);
 
// formatting measures in staff group smo97609
fmtsmo10017088.format([smo100170v0,smo102850v0], 281);
const stavesmo100170 = new VF.Stave(1253, 1777, 295);
stavesmo100170.setAttribute('id', 'stavesmo100170');
stavesmo100170.setBegBarType(VF.Barline.type.NONE);
stavesmo100170.setContext(context);
stavesmo100170.draw();
smo100170v0.draw(context, stavesmo100170);
smo104030.setContext(context);
smo104030.draw();
smo104031.setContext(context);
smo104031.draw();
const stavesmo102850 = new VF.Stave(1253, 1921, 295);
stavesmo102850.setAttribute('id', 'stavesmo102850');
stavesmo102850.setBegBarType(VF.Barline.type.NONE);
stavesmo102850.setContext(context);
stavesmo102850.draw();
smo102850v0.draw(context, stavesmo102850);
smo104034.setContext(context);
smo104034.draw();
smo104035.setContext(context);
smo104035.draw();
const fmtsmo10018989 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo100189v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100189v0ar = [];
const smo100171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo100171.setAttribute('id', 'smo100171');
const smo1001710acc = new VF.Accidental('b');
smo100171.addModifier(smo1001710acc, 0);
smo100189v0ar.push(smo100171);
const smo100172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo100172.setAttribute('id', 'smo100172');
smo100189v0ar.push(smo100172);
const smo100173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
smo100173.setAttribute('id', 'smo100173');
smo100189v0ar.push(smo100173);
const smo100174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
smo100174.setAttribute('id', 'smo100174');
smo100189v0ar.push(smo100174);
const smo100175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo100175.setAttribute('id', 'smo100175');
const smo1001751acc = new VF.Accidental('n');
smo100175.addModifier(smo1001751acc, 1);
smo100189v0ar.push(smo100175);
smo100189v0.addTickables(smo100189v0ar)
fmtsmo10018989.joinVoices([smo100189v0]);
const fmtsmo10286889 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo102868v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102868v0ar = [];
const smo102851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo102851.setAttribute('id', 'smo102851');
smo102868v0ar.push(smo102851);
const smo102852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo102852.setAttribute('id', 'smo102852');
smo102868v0ar.push(smo102852);
const smo102853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102853.setAttribute('id', 'smo102853');
smo102868v0ar.push(smo102853);
const smo102854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo102854.setAttribute('id', 'smo102854');
smo102868v0ar.push(smo102854);
smo102868v0.addTickables(smo102868v0ar)
fmtsmo10286889.joinVoices([smo102868v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104038 = smo100171.getStemDirection();
smo100171.setStemDirection(dirsmo104038);
smo100172.setStemDirection(dirsmo104038);
const smo104038 = new VF.Beam([smo100171,smo100172]);
const dirsmo104039 = smo100173.getStemDirection();
smo100173.setStemDirection(dirsmo104039);
smo100174.setStemDirection(dirsmo104039);
smo100175.setStemDirection(dirsmo104039);
const smo104039 = new VF.Beam([smo100173,smo100174,smo100175]);
const dirsmo104042 = smo102851.getStemDirection();
smo102851.setStemDirection(dirsmo104042);
smo102852.setStemDirection(dirsmo104042);
const smo104042 = new VF.Beam([smo102851,smo102852]);
const dirsmo104043 = smo102853.getStemDirection();
smo102853.setStemDirection(dirsmo104043);
smo102854.setStemDirection(dirsmo104043);
const smo104043 = new VF.Beam([smo102853,smo102854]);
 
// formatting measures in staff group smo97609
fmtsmo10018989.format([smo100189v0,smo102868v0], 281);
const stavesmo100189 = new VF.Stave(1548, 1777, 295);
stavesmo100189.setAttribute('id', 'stavesmo100189');
stavesmo100189.setBegBarType(VF.Barline.type.NONE);
stavesmo100189.setContext(context);
stavesmo100189.draw();
smo100189v0.draw(context, stavesmo100189);
smo104038.setContext(context);
smo104038.draw();
smo104039.setContext(context);
smo104039.draw();
const stavesmo102868 = new VF.Stave(1548, 1921, 295);
stavesmo102868.setAttribute('id', 'stavesmo102868');
stavesmo102868.setBegBarType(VF.Barline.type.NONE);
stavesmo102868.setContext(context);
stavesmo102868.draw();
smo102868v0.draw(context, stavesmo102868);
smo104042.setContext(context);
smo104042.draw();
smo104043.setContext(context);
smo104043.draw();
const rightsmo97609stavesmo1001891 = new VF.StaveConnector(stavesmo100189, stavesmo102868).setType(0);
rightsmo97609stavesmo1001891.setContext(context).draw();
const fmtsmo10020990 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo100209v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100209v0ar = [];
const smo100190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo100190.setAttribute('id', 'smo100190');
smo100209v0ar.push(smo100190);
const smo100191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100191.setAttribute('id', 'smo100191');
smo100209v0ar.push(smo100191);
const smo100192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100192.setAttribute('id', 'smo100192');
smo100209v0ar.push(smo100192);
const smo100193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100193.setAttribute('id', 'smo100193');
smo100209v0ar.push(smo100193);
const smo100194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo100194.setAttribute('id', 'smo100194');
smo100209v0ar.push(smo100194);
smo100209v0.addTickables(smo100209v0ar)
fmtsmo10020990.joinVoices([smo100209v0]);
const fmtsmo10288690 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo102886v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102886v0ar = [];
const smo102869 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo102869.setAttribute('id', 'smo102869');
smo102886v0ar.push(smo102869);
const smo102870 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102870.setAttribute('id', 'smo102870');
smo102886v0ar.push(smo102870);
const smo102871 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102871.setAttribute('id', 'smo102871');
smo102886v0ar.push(smo102871);
smo102886v0.addTickables(smo102886v0ar)
fmtsmo10288690.joinVoices([smo102886v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104050 = smo100190.getStemDirection();
smo100190.setStemDirection(dirsmo104050);
smo100191.setStemDirection(dirsmo104050);
smo100192.setStemDirection(dirsmo104050);
const smo104050 = new VF.Beam([smo100190,smo100191,smo100192]);
const dirsmo104051 = smo100193.getStemDirection();
smo100193.setStemDirection(dirsmo104051);
smo100194.setStemDirection(dirsmo104051);
const smo104051 = new VF.Beam([smo100193,smo100194]);
 
// formatting measures in staff group smo97609
fmtsmo10020990.format([smo100209v0,smo102886v0], 233);
const stavesmo100209 = new VF.Stave(73, 2089, 295);
stavesmo100209.setAttribute('id', 'stavesmo100209');
stavesmo100209.setBegBarType(1);
stavesmo100209.setEndBarType(5);
stavesmo100209.addClef('treble');
stavesmo100209.setContext(context);
stavesmo100209.draw();
smo100209v0.draw(context, stavesmo100209);
smo104050.setContext(context);
smo104050.draw();
smo104051.setContext(context);
smo104051.draw();
const stavesmo102886 = new VF.Stave(73, 2234, 295);
stavesmo102886.setAttribute('id', 'stavesmo102886');
stavesmo102886.setBegBarType(1);
stavesmo102886.setEndBarType(5);
stavesmo102886.addClef('bass');
stavesmo102886.setContext(context);
stavesmo102886.draw();
smo102886v0.draw(context, stavesmo102886);
const leftsmo97609stavesmo1002091 = new VF.StaveConnector(stavesmo100209, stavesmo102886).setType(3);
leftsmo97609stavesmo1002091.setContext(context).draw();
const fmtsmo10022791 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo100227v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo100227v0ar = [];
const smo100210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo100210.setAttribute('id', 'smo100210');
smo100227v0ar.push(smo100210);
const smo100211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo100211.setAttribute('id', 'smo100211');
smo100227v0ar.push(smo100211);
const smo100212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo100212.setAttribute('id', 'smo100212');
smo100227v0ar.push(smo100212);
smo100227v0.addTickables(smo100227v0ar)
fmtsmo10022791.joinVoices([smo100227v0]);
const fmtsmo10290591 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo102905v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo102905v0ar = [];
const smo102887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo102887.setAttribute('id', 'smo102887');
smo102905v0ar.push(smo102887);
const smo102888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo102888.setAttribute('id', 'smo102888');
smo102905v0ar.push(smo102888);
const smo102889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo102889.setAttribute('id', 'smo102889');
smo102905v0ar.push(smo102889);
const smo102890 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo102890.setAttribute('id', 'smo102890');
smo102905v0ar.push(smo102890);
smo102905v0.addTickables(smo102905v0ar)
fmtsmo10290591.joinVoices([smo102905v0]);
// create beam groups and tuplets for format grp smo97609 before formatting
const dirsmo104056 = smo102887.getStemDirection();
smo102887.setStemDirection(dirsmo104056);
smo102888.setStemDirection(dirsmo104056);
const smo104056 = new VF.Beam([smo102887,smo102888]);
 
// formatting measures in staff group smo97609
fmtsmo10022791.format([smo100227v0,smo102905v0], 281);
const stavesmo100227 = new VF.Stave(368, 2089, 295);
stavesmo100227.setAttribute('id', 'stavesmo100227');
stavesmo100227.setBegBarType(VF.Barline.type.NONE);
stavesmo100227.setContext(context);
stavesmo100227.draw();
smo100227v0.draw(context, stavesmo100227);
const stavesmo102905 = new VF.Stave(368, 2234, 295);
stavesmo102905.setAttribute('id', 'stavesmo102905');
stavesmo102905.setBegBarType(VF.Barline.type.NONE);
stavesmo102905.setEndBarType(3);
stavesmo102905.setContext(context);
stavesmo102905.draw();
smo102905v0.draw(context, stavesmo102905);
smo104056.setContext(context);
smo104056.draw();
// modifier from 0-67-0-0 to 0-67-0-0
const smo104853 = new VF.StaveHairpin({ first_note: smo99721, last_note: smo99721,
       firstNote: smo99721, lastNote: smo99721 });
smo104853.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo104853.setContext(context).setPosition(4).draw();
// modifier from 0-67-0-1 to 0-67-0-2
const smo104854 = new VF.StaveHairpin({ first_note: smo99722, last_note: smo99722,
       firstNote: smo99722, lastNote: smo99722 });
smo104854.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo104854.setContext(context).setPosition(4).draw();
// modifier from 0-60-0-3 to 0-60-0-4
const smo104855 = new VF.StaveTie({ first_note: smo99584, last_note: smo99585, 
          firstNote: smo99584, lastNote: smo99585, first_indices: [0], last_indices: [0]});
smo104855.setContext(context).draw();
// modifier from 0-62-0-2 to 0-62-0-3
const smo104856 = new VF.StaveTie({ first_note: smo99621, last_note: smo99622, 
          firstNote: smo99621, lastNote: smo99622, first_indices: [0,1], last_indices: [0,1]});
smo104856.setContext(context).draw();
// modifier from 0-64-0-2 to 0-64-0-3
const smo104857 = new VF.StaveTie({ first_note: smo99661, last_note: smo99662, 
          firstNote: smo99661, lastNote: smo99662, first_indices: [0,1], last_indices: [0,1]});
smo104857.setContext(context).draw();
// modifier from 0-65-0-0 to 0-65-0-1
const smo104858 = new VF.StaveTie({ first_note: smo99678, last_note: smo99679, 
          firstNote: smo99678, lastNote: smo99679, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104858.setContext(context).draw();
// modifier from 0-66-0-2 to 0-66-0-3
const smo104859 = new VF.StaveTie({ first_note: smo99703, last_note: smo99704, 
          firstNote: smo99703, lastNote: smo99704, first_indices: [0], last_indices: [0]});
smo104859.setContext(context).draw();
// modifier from 0-68-0-2 to 0-68-0-3
const smo104860 = new VF.StaveTie({ first_note: smo99742, last_note: smo99743, 
          firstNote: smo99742, lastNote: smo99743, first_indices: [0,1], last_indices: [0,1]});
smo104860.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo104861 = new VF.StaveTie({ first_note: smo99804, last_note: smo99805, 
          firstNote: smo99804, lastNote: smo99805, first_indices: [0], last_indices: [0]});
smo104861.setContext(context).draw();
// modifier from 0-72-0-3 to 0-72-0-4
const smo104862 = new VF.StaveTie({ first_note: smo99826, last_note: smo99827, 
          firstNote: smo99826, lastNote: smo99827, first_indices: [0], last_indices: [0]});
smo104862.setContext(context).draw();
// modifier from 0-73-0-4 to 0-74-0-0
const smo104863 = new VF.StaveTie({ first_note: smo99849, last_note: smo99864, 
          firstNote: smo99849, lastNote: smo99864, first_indices: [0,1], last_indices: [0,1]});
smo104863.setContext(context).draw();
// modifier from 0-75-0-2 to 0-75-0-3
const smo104864 = new VF.StaveTie({ first_note: smo99883, last_note: smo99884, 
          firstNote: smo99883, lastNote: smo99884, first_indices: [0,1], last_indices: [0,1]});
smo104864.setContext(context).draw();
// modifier from 0-77-0-2 to 0-77-0-3
const smo104865 = new VF.StaveTie({ first_note: smo99925, last_note: smo99926, 
          firstNote: smo99925, lastNote: smo99926, first_indices: [0,1], last_indices: [0,1]});
smo104865.setContext(context).draw();
// modifier from 0-79-0-2 to 0-79-0-3
const smo104866 = new VF.StaveTie({ first_note: smo99967, last_note: smo99968, 
          firstNote: smo99967, lastNote: smo99968, first_indices: [0,1], last_indices: [0,1]});
smo104866.setContext(context).draw();
// modifier from 0-83-0-2 to 0-83-0-3
const smo104867 = new VF.StaveTie({ first_note: smo100046, last_note: smo100047, 
          firstNote: smo100046, lastNote: smo100047, first_indices: [0,1], last_indices: [0,1]});
smo104867.setContext(context).draw();
// modifier from 0-85-0-2 to 0-85-0-3
const smo104868 = new VF.StaveTie({ first_note: smo100088, last_note: smo100089, 
          firstNote: smo100088, lastNote: smo100089, first_indices: [0,1], last_indices: [0,1]});
smo104868.setContext(context).draw();
// modifier from 0-87-0-3 to 0-87-0-4
const smo104869 = new VF.StaveTie({ first_note: smo100131, last_note: smo100132, 
          firstNote: smo100131, lastNote: smo100132, first_indices: [0,1], last_indices: [0,1]});
smo104869.setContext(context).draw();
// modifier from 0-88-0-3 to 0-88-0-4
const smo104870 = new VF.StaveTie({ first_note: smo100152, last_note: smo100153, 
          firstNote: smo100152, lastNote: smo100153, first_indices: [0], last_indices: [0]});
smo104870.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo104871 = new VF.StaveTie({ first_note: smo100175, last_note: null, 
          firstNote: smo100175, lastNote: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104871.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo104872 = new VF.StaveTie({ first_note: null, last_note: smo100190, 
          firstNote: null, lastNote: smo100190, first_indices: [0,1,2], last_indices: [0,1,2]});
smo104872.setContext(context).draw();
const smo99769smo99782 = new VF.Volta(5, '1', 958, 20);
smo99769smo99782.setContext(context).draw(stavesmo99782, -1 * 0);
const smo99787smo99801 = new VF.Volta(5, '2', 1253, 20);
smo99787smo99801.setContext(context).draw(stavesmo99801, -1 * 0);
const smo100196smo100209 = new VF.Volta(5, '1', 73, 20);
smo100196smo100209.setContext(context).draw(stavesmo100209, -1 * 0);
const smo100213smo100227 = new VF.Volta(5, '2', 368, 20);
smo100213smo100227.setContext(context).draw(stavesmo100227, -1 * 0);
}
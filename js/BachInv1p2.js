function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1590.1531536000011');
svg.setAttributeNS('', 'height', '2057.8452576000013');
svg.setAttributeNS('', 'viewBox', '0 0 1360 1760');
VF.setMusicFont("Gonville","Bravura","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo3572510 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo35725v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35725v0ar = [];
const smo35702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35702'] = smo35702;
smo35702.setAttribute('id', 'smo35702');
smo35725v0ar.push(smo35702);
const smo35703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo35703'] = smo35703;
smo35703.setAttribute('id', 'smo35703');
const smo357030acc = new VF.Accidental('#');
smo35703.addModifier(smo357030acc, 0);
smo35725v0ar.push(smo35703);
const smo35704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35704'] = smo35704;
smo35704.setAttribute('id', 'smo35704');
smo35725v0ar.push(smo35704);
const smo35705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35705'] = smo35705;
smo35705.setAttribute('id', 'smo35705');
smo35725v0ar.push(smo35705);
const smo35706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo35706'] = smo35706;
smo35706.setAttribute('id', 'smo35706');
smo35725v0ar.push(smo35706);
const smo35707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo35707'] = smo35707;
smo35707.setAttribute('id', 'smo35707');
smo35725v0ar.push(smo35707);
const smo35708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo35708'] = smo35708;
smo35708.setAttribute('id', 'smo35708');
smo35725v0ar.push(smo35708);
const smo35709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo35709'] = smo35709;
smo35709.setAttribute('id', 'smo35709');
smo35725v0ar.push(smo35709);
smo35725v0.addTickables(smo35725v0ar)
fmtsmo3572510.joinVoices([smo35725v0]);
const fmtsmo3634210 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo36342v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36342v0ar = [];
const smo36311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36311'] = smo36311;
smo36311.setAttribute('id', 'smo36311');
smo36342v0ar.push(smo36311);
const smo36312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo36312'] = smo36312;
smo36312.setAttribute('id', 'smo36312');
const smo363120acc = new VF.Accidental('b');
smo36312.addModifier(smo363120acc, 0);
smo36342v0ar.push(smo36312);
const smo36313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo36313'] = smo36313;
smo36313.setAttribute('id', 'smo36313');
smo36342v0ar.push(smo36313);
const smo36314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo36314'] = smo36314;
smo36314.setAttribute('id', 'smo36314');
smo36342v0ar.push(smo36314);
const smo36315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36315'] = smo36315;
smo36315.setAttribute('id', 'smo36315');
smo36342v0ar.push(smo36315);
const smo36316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo36316'] = smo36316;
smo36316.setAttribute('id', 'smo36316');
smo36342v0ar.push(smo36316);
const smo36317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo36317'] = smo36317;
smo36317.setAttribute('id', 'smo36317');
smo36342v0ar.push(smo36317);
const smo36318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo36318'] = smo36318;
smo36318.setAttribute('id', 'smo36318');
smo36342v0ar.push(smo36318);
const smo36319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo36319'] = smo36319;
smo36319.setAttribute('id', 'smo36319');
smo36342v0ar.push(smo36319);
const smo36320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo36320'] = smo36320;
smo36320.setAttribute('id', 'smo36320');
smo36342v0ar.push(smo36320);
const smo36321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36321'] = smo36321;
smo36321.setAttribute('id', 'smo36321');
smo36342v0ar.push(smo36321);
const smo36322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36322'] = smo36322;
smo36322.setAttribute('id', 'smo36322');
smo36342v0ar.push(smo36322);
const smo36323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36323'] = smo36323;
smo36323.setAttribute('id', 'smo36323');
smo36342v0ar.push(smo36323);
const smo36324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36324'] = smo36324;
smo36324.setAttribute('id', 'smo36324');
smo36342v0ar.push(smo36324);
const smo36325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36325'] = smo36325;
smo36325.setAttribute('id', 'smo36325');
smo36342v0ar.push(smo36325);
const smo36326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo36326'] = smo36326;
smo36326.setAttribute('id', 'smo36326');
smo36342v0ar.push(smo36326);
smo36342v0.addTickables(smo36342v0ar)
fmtsmo3634210.joinVoices([smo36342v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38574 = smo35702.getStemDirection();
smo35702.setStemDirection(dirsmo38574);
smo35703.setStemDirection(dirsmo38574);
smo35704.setStemDirection(dirsmo38574);
smo35705.setStemDirection(dirsmo38574);
const smo38574 = new VF.Beam([smo35702,smo35703,smo35704,smo35705]);
const dirsmo38575 = smo35706.getStemDirection();
smo35706.setStemDirection(dirsmo38575);
smo35707.setStemDirection(dirsmo38575);
smo35708.setStemDirection(dirsmo38575);
smo35709.setStemDirection(dirsmo38575);
const smo38575 = new VF.Beam([smo35706,smo35707,smo35708,smo35709]);
const dirsmo38578 = smo36311.getStemDirection();
smo36311.setStemDirection(dirsmo38578);
smo36312.setStemDirection(dirsmo38578);
smo36313.setStemDirection(dirsmo38578);
smo36314.setStemDirection(dirsmo38578);
const smo38578 = new VF.Beam([smo36311,smo36312,smo36313,smo36314]);
const dirsmo38579 = smo36315.getStemDirection();
smo36315.setStemDirection(dirsmo38579);
smo36316.setStemDirection(dirsmo38579);
smo36317.setStemDirection(dirsmo38579);
smo36318.setStemDirection(dirsmo38579);
const smo38579 = new VF.Beam([smo36315,smo36316,smo36317,smo36318]);
const dirsmo38580 = smo36319.getStemDirection();
smo36319.setStemDirection(dirsmo38580);
smo36320.setStemDirection(dirsmo38580);
smo36321.setStemDirection(dirsmo38580);
smo36322.setStemDirection(dirsmo38580);
const smo38580 = new VF.Beam([smo36319,smo36320,smo36321,smo36322]);
const dirsmo38581 = smo36323.getStemDirection();
smo36323.setStemDirection(dirsmo38581);
smo36324.setStemDirection(dirsmo38581);
smo36325.setStemDirection(dirsmo38581);
smo36326.setStemDirection(dirsmo38581);
const smo38581 = new VF.Beam([smo36323,smo36324,smo36325,smo36326]);
 
// formatting measures in staff group smo36649
fmtsmo3572510.format([smo35725v0,smo36342v0], 571);
const stavesmo35725 = new VF.Stave(50, 220.00000000000023, 627);
stavesmo35725.setAttribute('id', 'stavesmo35725');
stavesmo35725.setBegBarType(1);
stavesmo35725.addClef('treble');
stavesmo35725.setContext(context);
stavesmo35725.draw();
smo35725v0.draw(context, stavesmo35725);
smo38574.setContext(context);
smo38574.draw();
smo38575.setContext(context);
smo38575.draw();
const stavesmo36342 = new VF.Stave(50, 323.0000000000002, 627);
stavesmo36342.setAttribute('id', 'stavesmo36342');
stavesmo36342.setBegBarType(1);
stavesmo36342.addClef('treble');
stavesmo36342.setContext(context);
stavesmo36342.draw();
smo36342v0.draw(context, stavesmo36342);
smo38578.setContext(context);
smo38578.draw();
smo38579.setContext(context);
smo38579.draw();
smo38580.setContext(context);
smo38580.draw();
smo38581.setContext(context);
smo38581.draw();
const leftsmo36649stavesmo357251 = new VF.StaveConnector(stavesmo35725, stavesmo36342).setType(3);
leftsmo36649stavesmo357251.setContext(context).draw();
const fmtsmo3574811 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo35748v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35748v0ar = [];
const smo35726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo35726'] = smo35726;
smo35726.setAttribute('id', 'smo35726');
smo35748v0ar.push(smo35726);
const smo35727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo35727'] = smo35727;
smo35727.setAttribute('id', 'smo35727');
const smo357270acc = new VF.Accidental('#');
smo35727.addModifier(smo357270acc, 0);
smo35748v0ar.push(smo35727);
const smo35728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo35728'] = smo35728;
smo35728.setAttribute('id', 'smo35728');
const smo357280acc = new VF.Accidental('#');
smo35728.addModifier(smo357280acc, 0);
smo35748v0ar.push(smo35728);
const smo35729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo35729'] = smo35729;
smo35729.setAttribute('id', 'smo35729');
smo35748v0ar.push(smo35729);
const smo35730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo35730'] = smo35730;
smo35730.setAttribute('id', 'smo35730');
smo35748v0ar.push(smo35730);
const smo35731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo35731'] = smo35731;
smo35731.setAttribute('id', 'smo35731');
smo35748v0ar.push(smo35731);
const smo35732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo35732'] = smo35732;
smo35732.setAttribute('id', 'smo35732');
smo35748v0ar.push(smo35732);
smo35748v0.addTickables(smo35748v0ar)
fmtsmo3574811.joinVoices([smo35748v0]);
const fmtsmo3637411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo36374v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36374v0ar = [];
const smo36343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36343'] = smo36343;
smo36343.setAttribute('id', 'smo36343');
smo36374v0ar.push(smo36343);
const smo36344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36344'] = smo36344;
smo36344.setAttribute('id', 'smo36344');
smo36374v0ar.push(smo36344);
const smo36345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36345'] = smo36345;
smo36345.setAttribute('id', 'smo36345');
smo36374v0ar.push(smo36345);
const smo36346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36346'] = smo36346;
smo36346.setAttribute('id', 'smo36346');
smo36374v0ar.push(smo36346);
const smo36347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36347'] = smo36347;
smo36347.setAttribute('id', 'smo36347');
smo36374v0ar.push(smo36347);
const smo36348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36348'] = smo36348;
smo36348.setAttribute('id', 'smo36348');
smo36374v0ar.push(smo36348);
const smo36349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36349'] = smo36349;
smo36349.setAttribute('id', 'smo36349');
smo36374v0ar.push(smo36349);
const smo36350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36350'] = smo36350;
smo36350.setAttribute('id', 'smo36350');
smo36374v0ar.push(smo36350);
const smo36351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36351'] = smo36351;
smo36351.setAttribute('id', 'smo36351');
smo36374v0ar.push(smo36351);
const smo36352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36352'] = smo36352;
smo36352.setAttribute('id', 'smo36352');
smo36374v0ar.push(smo36352);
const smo36353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36353'] = smo36353;
smo36353.setAttribute('id', 'smo36353');
smo36374v0ar.push(smo36353);
const smo36354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36354'] = smo36354;
smo36354.setAttribute('id', 'smo36354');
smo36374v0ar.push(smo36354);
const smo36355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
noteHash['smo36355'] = smo36355;
smo36355.setAttribute('id', 'smo36355');
const smo363550acc = new VF.Accidental('#');
smo36355.addModifier(smo363550acc, 0);
smo36374v0ar.push(smo36355);
const smo36356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36356'] = smo36356;
smo36356.setAttribute('id', 'smo36356');
smo36374v0ar.push(smo36356);
const smo36357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36357'] = smo36357;
smo36357.setAttribute('id', 'smo36357');
smo36374v0ar.push(smo36357);
const smo36358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36358'] = smo36358;
smo36358.setAttribute('id', 'smo36358');
smo36374v0ar.push(smo36358);
smo36374v0.addTickables(smo36374v0ar)
fmtsmo3637411.joinVoices([smo36374v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38584 = smo35726.getStemDirection();
smo35726.setStemDirection(dirsmo38584);
smo35727.setStemDirection(dirsmo38584);
smo35728.setStemDirection(dirsmo38584);
smo35729.setStemDirection(dirsmo38584);
const smo38584 = new VF.Beam([smo35726,smo35727,smo35728,smo35729]);
const dirsmo38585 = smo35730.getStemDirection();
smo35730.setStemDirection(dirsmo38585);
smo35731.setStemDirection(dirsmo38585);
const smo38585 = new VF.Beam([smo35730,smo35731]);
const dirsmo38588 = smo36343.getStemDirection();
smo36343.setStemDirection(dirsmo38588);
smo36344.setStemDirection(dirsmo38588);
smo36345.setStemDirection(dirsmo38588);
smo36346.setStemDirection(dirsmo38588);
const smo38588 = new VF.Beam([smo36343,smo36344,smo36345,smo36346]);
const dirsmo38589 = smo36347.getStemDirection();
smo36347.setStemDirection(dirsmo38589);
smo36348.setStemDirection(dirsmo38589);
smo36349.setStemDirection(dirsmo38589);
smo36350.setStemDirection(dirsmo38589);
const smo38589 = new VF.Beam([smo36347,smo36348,smo36349,smo36350]);
const dirsmo38590 = smo36351.getStemDirection();
smo36351.setStemDirection(dirsmo38590);
smo36352.setStemDirection(dirsmo38590);
smo36353.setStemDirection(dirsmo38590);
smo36354.setStemDirection(dirsmo38590);
const smo38590 = new VF.Beam([smo36351,smo36352,smo36353,smo36354]);
const dirsmo38591 = smo36355.getStemDirection();
smo36355.setStemDirection(dirsmo38591);
smo36356.setStemDirection(dirsmo38591);
smo36357.setStemDirection(dirsmo38591);
smo36358.setStemDirection(dirsmo38591);
const smo38591 = new VF.Beam([smo36355,smo36356,smo36357,smo36358]);
 
// formatting measures in staff group smo36649
fmtsmo3574811.format([smo35748v0,smo36374v0], 568);
const stavesmo35748 = new VF.Stave(677, 220.00000000000023, 582);
stavesmo35748.setAttribute('id', 'stavesmo35748');
stavesmo35748.setBegBarType(VF.Barline.type.NONE);
stavesmo35748.setContext(context);
stavesmo35748.draw();
smo35748v0.draw(context, stavesmo35748);
smo38584.setContext(context);
smo38584.draw();
smo38585.setContext(context);
smo38585.draw();
const stavesmo36374 = new VF.Stave(677, 323.0000000000002, 582);
stavesmo36374.setAttribute('id', 'stavesmo36374');
stavesmo36374.setBegBarType(VF.Barline.type.NONE);
stavesmo36374.setContext(context);
stavesmo36374.draw();
smo36374v0.draw(context, stavesmo36374);
smo38588.setContext(context);
smo38588.draw();
smo38589.setContext(context);
smo38589.draw();
smo38590.setContext(context);
smo38590.draw();
smo38591.setContext(context);
smo38591.draw();
const rightsmo36649stavesmo357481 = new VF.StaveConnector(stavesmo35748, stavesmo36374).setType(0);
rightsmo36649stavesmo357481.setContext(context).draw();
const fmtsmo3578012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo35780v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35780v0ar = [];
const smo35749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35749'] = smo35749;
smo35749.setAttribute('id', 'smo35749');
smo35780v0ar.push(smo35749);
const smo35750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35750'] = smo35750;
smo35750.setAttribute('id', 'smo35750');
smo35780v0ar.push(smo35750);
const smo35751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo35751'] = smo35751;
smo35751.setAttribute('id', 'smo35751');
const smo357510acc = new VF.Accidental('#');
smo35751.addModifier(smo357510acc, 0);
smo35780v0ar.push(smo35751);
const smo35752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo35752'] = smo35752;
smo35752.setAttribute('id', 'smo35752');
const smo357520acc = new VF.Accidental('#');
smo35752.addModifier(smo357520acc, 0);
smo35780v0ar.push(smo35752);
const smo35753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35753'] = smo35753;
smo35753.setAttribute('id', 'smo35753');
smo35780v0ar.push(smo35753);
const smo35754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo35754'] = smo35754;
smo35754.setAttribute('id', 'smo35754');
smo35780v0ar.push(smo35754);
const smo35755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo35755'] = smo35755;
smo35755.setAttribute('id', 'smo35755');
smo35780v0ar.push(smo35755);
const smo35756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35756'] = smo35756;
smo35756.setAttribute('id', 'smo35756');
smo35780v0ar.push(smo35756);
const smo35757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35757'] = smo35757;
smo35757.setAttribute('id', 'smo35757');
smo35780v0ar.push(smo35757);
const smo35758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35758'] = smo35758;
smo35758.setAttribute('id', 'smo35758');
smo35780v0ar.push(smo35758);
const smo35759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35759'] = smo35759;
smo35759.setAttribute('id', 'smo35759');
smo35780v0ar.push(smo35759);
const smo35760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35760'] = smo35760;
smo35760.setAttribute('id', 'smo35760');
smo35780v0ar.push(smo35760);
const smo35761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35761'] = smo35761;
smo35761.setAttribute('id', 'smo35761');
smo35780v0ar.push(smo35761);
const smo35762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35762'] = smo35762;
smo35762.setAttribute('id', 'smo35762');
smo35780v0ar.push(smo35762);
const smo35763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35763'] = smo35763;
smo35763.setAttribute('id', 'smo35763');
smo35780v0ar.push(smo35763);
const smo35764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35764'] = smo35764;
smo35764.setAttribute('id', 'smo35764');
smo35780v0ar.push(smo35764);
smo35780v0.addTickables(smo35780v0ar)
fmtsmo3578012.joinVoices([smo35780v0]);
const fmtsmo3640312 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo36403v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36403v0ar = [];
const smo36375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36375'] = smo36375;
smo36375.setAttribute('id', 'smo36375');
smo36403v0ar.push(smo36375);
const smo36376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36376'] = smo36376;
smo36376.setAttribute('id', 'smo36376');
smo36403v0ar.push(smo36376);
const smo36377 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36377'] = smo36377;
smo36377.setAttribute('id', 'smo36377');
smo36377.addModifier(new VF.Dot(), 0);
const smo36378 = new VF.Ornament('mordent_inverted');
smo36377.addModifier(smo36378, 0);
smo36403v0ar.push(smo36377);
const smo36379 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36379'] = smo36379;
smo36379.setAttribute('id', 'smo36379');
smo36403v0ar.push(smo36379);
const smo36380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36380'] = smo36380;
smo36380.setAttribute('id', 'smo36380');
smo36403v0ar.push(smo36380);
const smo36381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36381'] = smo36381;
smo36381.setAttribute('id', 'smo36381');
smo36403v0ar.push(smo36381);
const smo36382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36382'] = smo36382;
smo36382.setAttribute('id', 'smo36382');
smo36403v0ar.push(smo36382);
const smo36383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36383'] = smo36383;
smo36383.setAttribute('id', 'smo36383');
const smo363830acc = new VF.Accidental('n');
smo363830acc.setAsCautionary();
smo36383.addModifier(smo363830acc, 0);
smo36403v0ar.push(smo36383);
const smo36384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo36384'] = smo36384;
smo36384.setAttribute('id', 'smo36384');
const smo363840acc = new VF.Accidental('#');
smo36384.addModifier(smo363840acc, 0);
smo36403v0ar.push(smo36384);
const smo36385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36385'] = smo36385;
smo36385.setAttribute('id', 'smo36385');
smo36403v0ar.push(smo36385);
const smo36386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
noteHash['smo36386'] = smo36386;
smo36386.setAttribute('id', 'smo36386');
const smo363860acc = new VF.Accidental('#');
smo36386.addModifier(smo363860acc, 0);
smo36403v0ar.push(smo36386);
const smo36387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36387'] = smo36387;
smo36387.setAttribute('id', 'smo36387');
smo36403v0ar.push(smo36387);
smo36403v0.addTickables(smo36403v0ar)
fmtsmo3640312.joinVoices([smo36403v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38606 = smo35749.getStemDirection();
smo35749.setStemDirection(dirsmo38606);
smo35750.setStemDirection(dirsmo38606);
smo35751.setStemDirection(dirsmo38606);
smo35752.setStemDirection(dirsmo38606);
const smo38606 = new VF.Beam([smo35749,smo35750,smo35751,smo35752]);
const dirsmo38607 = smo35753.getStemDirection();
smo35753.setStemDirection(dirsmo38607);
smo35754.setStemDirection(dirsmo38607);
smo35755.setStemDirection(dirsmo38607);
smo35756.setStemDirection(dirsmo38607);
const smo38607 = new VF.Beam([smo35753,smo35754,smo35755,smo35756]);
const dirsmo38608 = smo35757.getStemDirection();
smo35757.setStemDirection(dirsmo38608);
smo35758.setStemDirection(dirsmo38608);
smo35759.setStemDirection(dirsmo38608);
smo35760.setStemDirection(dirsmo38608);
const smo38608 = new VF.Beam([smo35757,smo35758,smo35759,smo35760]);
const dirsmo38609 = smo35761.getStemDirection();
smo35761.setStemDirection(dirsmo38609);
smo35762.setStemDirection(dirsmo38609);
smo35763.setStemDirection(dirsmo38609);
smo35764.setStemDirection(dirsmo38609);
const smo38609 = new VF.Beam([smo35761,smo35762,smo35763,smo35764]);
const dirsmo38612 = smo36375.getStemDirection();
smo36375.setStemDirection(dirsmo38612);
smo36376.setStemDirection(dirsmo38612);
const smo38612 = new VF.Beam([smo36375,smo36376]);
const dirsmo38613 = smo36377.getStemDirection();
smo36377.setStemDirection(dirsmo38613);
smo36379.setStemDirection(dirsmo38613);
const smo38613 = new VF.Beam([smo36377,smo36379]);
const dirsmo38614 = smo36380.getStemDirection();
smo36380.setStemDirection(dirsmo38614);
smo36381.setStemDirection(dirsmo38614);
smo36382.setStemDirection(dirsmo38614);
smo36383.setStemDirection(dirsmo38614);
const smo38614 = new VF.Beam([smo36380,smo36381,smo36382,smo36383]);
const dirsmo38615 = smo36384.getStemDirection();
smo36384.setStemDirection(dirsmo38615);
smo36385.setStemDirection(dirsmo38615);
smo36386.setStemDirection(dirsmo38615);
smo36387.setStemDirection(dirsmo38615);
const smo38615 = new VF.Beam([smo36384,smo36385,smo36386,smo36387]);
 
// formatting measures in staff group smo36649
fmtsmo3578012.format([smo35780v0,smo36403v0], 623);
const stavesmo35780 = new VF.Stave(50, 483.0000000000002, 678);
stavesmo35780.setAttribute('id', 'stavesmo35780');
stavesmo35780.setBegBarType(1);
stavesmo35780.addClef('treble');
stavesmo35780.setContext(context);
stavesmo35780.draw();
smo35780v0.draw(context, stavesmo35780);
smo38606.setContext(context);
smo38606.draw();
smo38607.setContext(context);
smo38607.draw();
smo38608.setContext(context);
smo38608.draw();
smo38609.setContext(context);
smo38609.draw();
const stavesmo36403 = new VF.Stave(50, 627.0000000000002, 678);
stavesmo36403.setAttribute('id', 'stavesmo36403');
stavesmo36403.setBegBarType(1);
stavesmo36403.addClef('bass');
stavesmo36403.setContext(context);
stavesmo36403.draw();
smo36403v0.draw(context, stavesmo36403);
smo38612.setContext(context);
smo38612.draw();
smo38613.setContext(context);
smo38613.draw();
smo38614.setContext(context);
smo38614.draw();
smo38615.setContext(context);
smo38615.draw();
const leftsmo36649stavesmo357801 = new VF.StaveConnector(stavesmo35780, stavesmo36403).setType(3);
leftsmo36649stavesmo357801.setContext(context).draw();
const fmtsmo3581213 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo35812v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35812v0ar = [];
const smo35781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35781'] = smo35781;
smo35781.setAttribute('id', 'smo35781');
smo35812v0ar.push(smo35781);
const smo35782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35782'] = smo35782;
smo35782.setAttribute('id', 'smo35782');
smo35812v0ar.push(smo35782);
const smo35783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
noteHash['smo35783'] = smo35783;
smo35783.setAttribute('id', 'smo35783');
const smo357830acc = new VF.Accidental('#');
smo35783.addModifier(smo357830acc, 0);
smo35812v0ar.push(smo35783);
const smo35784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo35784'] = smo35784;
smo35784.setAttribute('id', 'smo35784');
smo35812v0ar.push(smo35784);
const smo35785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35785'] = smo35785;
smo35785.setAttribute('id', 'smo35785');
smo35812v0ar.push(smo35785);
const smo35786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35786'] = smo35786;
smo35786.setAttribute('id', 'smo35786');
smo35812v0ar.push(smo35786);
const smo35787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35787'] = smo35787;
smo35787.setAttribute('id', 'smo35787');
smo35812v0ar.push(smo35787);
const smo35788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35788'] = smo35788;
smo35788.setAttribute('id', 'smo35788');
smo35812v0ar.push(smo35788);
const smo35789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo35789'] = smo35789;
smo35789.setAttribute('id', 'smo35789');
const smo357890acc = new VF.Accidental('#');
smo35789.addModifier(smo357890acc, 0);
smo35812v0ar.push(smo35789);
const smo35790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35790'] = smo35790;
smo35790.setAttribute('id', 'smo35790');
smo35812v0ar.push(smo35790);
const smo35791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35791'] = smo35791;
smo35791.setAttribute('id', 'smo35791');
smo35812v0ar.push(smo35791);
const smo35792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35792'] = smo35792;
smo35792.setAttribute('id', 'smo35792');
smo35812v0ar.push(smo35792);
const smo35793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35793'] = smo35793;
smo35793.setAttribute('id', 'smo35793');
const smo35794 = new VF.Ornament('mordent');
smo35793.addModifier(smo35794, 0);
smo35812v0ar.push(smo35793);
const smo35795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35795'] = smo35795;
smo35795.setAttribute('id', 'smo35795');
smo35812v0ar.push(smo35795);
const smo35796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35796'] = smo35796;
smo35796.setAttribute('id', 'smo35796');
smo35812v0ar.push(smo35796);
smo35812v0.addTickables(smo35812v0ar)
fmtsmo3581213.joinVoices([smo35812v0]);
const fmtsmo3643113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo36431v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36431v0ar = [];
const smo36404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36404'] = smo36404;
smo36404.setAttribute('id', 'smo36404');
smo36431v0ar.push(smo36404);
const smo36405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36405'] = smo36405;
smo36405.setAttribute('id', 'smo36405');
smo36431v0ar.push(smo36405);
const smo36406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36406'] = smo36406;
smo36406.setAttribute('id', 'smo36406');
smo36431v0ar.push(smo36406);
const smo36407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36407'] = smo36407;
smo36407.setAttribute('id', 'smo36407');
smo36431v0ar.push(smo36407);
const smo36408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36408'] = smo36408;
smo36408.setAttribute('id', 'smo36408');
smo36431v0ar.push(smo36408);
const smo36409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36409'] = smo36409;
smo36409.setAttribute('id', 'smo36409');
smo36431v0ar.push(smo36409);
const smo36410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36410'] = smo36410;
smo36410.setAttribute('id', 'smo36410');
smo36431v0ar.push(smo36410);
const smo36411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36411'] = smo36411;
smo36411.setAttribute('id', 'smo36411');
smo36431v0ar.push(smo36411);
const smo36412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36412'] = smo36412;
smo36412.setAttribute('id', 'smo36412');
smo36431v0ar.push(smo36412);
const smo36413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36413'] = smo36413;
smo36413.setAttribute('id', 'smo36413');
smo36431v0ar.push(smo36413);
const smo36414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36414'] = smo36414;
smo36414.setAttribute('id', 'smo36414');
smo36431v0ar.push(smo36414);
const smo36415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36415'] = smo36415;
smo36415.setAttribute('id', 'smo36415');
smo36431v0ar.push(smo36415);
smo36431v0.addTickables(smo36431v0ar)
fmtsmo3643113.joinVoices([smo36431v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38618 = smo35781.getStemDirection();
smo35781.setStemDirection(dirsmo38618);
smo35782.setStemDirection(dirsmo38618);
smo35783.setStemDirection(dirsmo38618);
smo35784.setStemDirection(dirsmo38618);
const smo38618 = new VF.Beam([smo35781,smo35782,smo35783,smo35784]);
const dirsmo38619 = smo35785.getStemDirection();
smo35785.setStemDirection(dirsmo38619);
smo35786.setStemDirection(dirsmo38619);
smo35787.setStemDirection(dirsmo38619);
smo35788.setStemDirection(dirsmo38619);
const smo38619 = new VF.Beam([smo35785,smo35786,smo35787,smo35788]);
const dirsmo38620 = smo35789.getStemDirection();
smo35789.setStemDirection(dirsmo38620);
smo35790.setStemDirection(dirsmo38620);
smo35791.setStemDirection(dirsmo38620);
smo35792.setStemDirection(dirsmo38620);
const smo38620 = new VF.Beam([smo35789,smo35790,smo35791,smo35792]);
const dirsmo38621 = smo35793.getStemDirection();
smo35793.setStemDirection(dirsmo38621);
smo35795.setStemDirection(dirsmo38621);
smo35796.setStemDirection(dirsmo38621);
const smo38621 = new VF.Beam([smo35793,smo35795,smo35796]);
const dirsmo38624 = smo36404.getStemDirection();
smo36404.setStemDirection(dirsmo38624);
smo36405.setStemDirection(dirsmo38624);
smo36406.setStemDirection(dirsmo38624);
smo36407.setStemDirection(dirsmo38624);
const smo38624 = new VF.Beam([smo36404,smo36405,smo36406,smo36407]);
const dirsmo38625 = smo36408.getStemDirection();
smo36408.setStemDirection(dirsmo38625);
smo36409.setStemDirection(dirsmo38625);
smo36410.setStemDirection(dirsmo38625);
smo36411.setStemDirection(dirsmo38625);
const smo38625 = new VF.Beam([smo36408,smo36409,smo36410,smo36411]);
const dirsmo38626 = smo36412.getStemDirection();
smo36412.setStemDirection(dirsmo38626);
smo36413.setStemDirection(dirsmo38626);
const smo38626 = new VF.Beam([smo36412,smo36413]);
const dirsmo38627 = smo36414.getStemDirection();
smo36414.setStemDirection(dirsmo38627);
smo36415.setStemDirection(dirsmo38627);
const smo38627 = new VF.Beam([smo36414,smo36415]);
 
// formatting measures in staff group smo36649
fmtsmo3581213.format([smo35812v0,smo36431v0], 518);
const stavesmo35812 = new VF.Stave(728, 483.0000000000002, 532);
stavesmo35812.setAttribute('id', 'stavesmo35812');
stavesmo35812.setBegBarType(VF.Barline.type.NONE);
stavesmo35812.setContext(context);
stavesmo35812.draw();
smo35812v0.draw(context, stavesmo35812);
smo38618.setContext(context);
smo38618.draw();
smo38619.setContext(context);
smo38619.draw();
smo38620.setContext(context);
smo38620.draw();
smo38621.setContext(context);
smo38621.draw();
const stavesmo36431 = new VF.Stave(728, 627.0000000000002, 532);
stavesmo36431.setAttribute('id', 'stavesmo36431');
stavesmo36431.setBegBarType(VF.Barline.type.NONE);
stavesmo36431.setContext(context);
stavesmo36431.draw();
smo36431v0.draw(context, stavesmo36431);
smo38624.setContext(context);
smo38624.draw();
smo38625.setContext(context);
smo38625.draw();
smo38626.setContext(context);
smo38626.draw();
smo38627.setContext(context);
smo38627.draw();
const rightsmo36649stavesmo358121 = new VF.StaveConnector(stavesmo35812, stavesmo36431).setType(0);
rightsmo36649stavesmo358121.setContext(context).draw();
const fmtsmo3583814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo35838v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35838v0ar = [];
const smo35813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35813'] = smo35813;
smo35813.setAttribute('id', 'smo35813');
const  smo38858 = new VF.Articulation('a.').setPosition(4);
smo35813.addModifier(smo38858, 0);
smo35838v0ar.push(smo35813);
const smo35815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35815'] = smo35815;
smo35815.setAttribute('id', 'smo35815');
smo35838v0ar.push(smo35815);
const smo35816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35816'] = smo35816;
smo35816.setAttribute('id', 'smo35816');
smo35838v0ar.push(smo35816);
const smo35817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35817'] = smo35817;
smo35817.setAttribute('id', 'smo35817');
smo35838v0ar.push(smo35817);
const smo35818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35818'] = smo35818;
smo35818.setAttribute('id', 'smo35818');
smo35838v0ar.push(smo35818);
const smo35819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35819'] = smo35819;
smo35819.setAttribute('id', 'smo35819');
smo35838v0ar.push(smo35819);
const smo35820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35820'] = smo35820;
smo35820.setAttribute('id', 'smo35820');
smo35838v0ar.push(smo35820);
const smo35821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35821'] = smo35821;
smo35821.setAttribute('id', 'smo35821');
smo35838v0ar.push(smo35821);
const smo35822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35822'] = smo35822;
smo35822.setAttribute('id', 'smo35822');
smo35838v0ar.push(smo35822);
smo35838v0.addTickables(smo35838v0ar)
fmtsmo3583814.joinVoices([smo35838v0]);
const fmtsmo3645814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo36458v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36458v0ar = [];
const smo36432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36432'] = smo36432;
smo36432.setAttribute('id', 'smo36432');
smo36458v0ar.push(smo36432);
const smo36433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36433'] = smo36433;
smo36433.setAttribute('id', 'smo36433');
smo36458v0ar.push(smo36433);
const smo36434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo36434'] = smo36434;
smo36434.setAttribute('id', 'smo36434');
smo36458v0ar.push(smo36434);
const smo36435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo36435'] = smo36435;
smo36435.setAttribute('id', 'smo36435');
smo36458v0ar.push(smo36435);
const smo36436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36436'] = smo36436;
smo36436.setAttribute('id', 'smo36436');
smo36458v0ar.push(smo36436);
const smo36437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36437'] = smo36437;
smo36437.setAttribute('id', 'smo36437');
smo36458v0ar.push(smo36437);
const smo36438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36438'] = smo36438;
smo36438.setAttribute('id', 'smo36438');
smo36458v0ar.push(smo36438);
const smo36439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36439'] = smo36439;
smo36439.setAttribute('id', 'smo36439');
smo36458v0ar.push(smo36439);
const smo36440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36440'] = smo36440;
smo36440.setAttribute('id', 'smo36440');
smo36458v0ar.push(smo36440);
const smo36441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo36441'] = smo36441;
smo36441.setAttribute('id', 'smo36441');
const smo364410acc = new VF.Accidental('#');
smo36441.addModifier(smo364410acc, 0);
smo36458v0ar.push(smo36441);
const smo36442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36442'] = smo36442;
smo36442.setAttribute('id', 'smo36442');
smo36458v0ar.push(smo36442);
smo36458v0.addTickables(smo36458v0ar)
fmtsmo3645814.joinVoices([smo36458v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38639 = smo35813.getStemDirection();
smo35813.setStemDirection(dirsmo38639);
smo35815.setStemDirection(dirsmo38639);
smo35816.setStemDirection(dirsmo38639);
smo35817.setStemDirection(dirsmo38639);
const smo38639 = new VF.Beam([smo35813,smo35815,smo35816,smo35817]);
const dirsmo38640 = smo35818.getStemDirection();
smo35818.setStemDirection(dirsmo38640);
smo35819.setStemDirection(dirsmo38640);
smo35820.setStemDirection(dirsmo38640);
smo35821.setStemDirection(dirsmo38640);
const smo38640 = new VF.Beam([smo35818,smo35819,smo35820,smo35821]);
const dirsmo38643 = smo36432.getStemDirection();
smo36432.setStemDirection(dirsmo38643);
smo36433.setStemDirection(dirsmo38643);
const smo38643 = new VF.Beam([smo36432,smo36433]);
const dirsmo38644 = smo36436.getStemDirection();
smo36436.setStemDirection(dirsmo38644);
smo36437.setStemDirection(dirsmo38644);
smo36438.setStemDirection(dirsmo38644);
const smo38644 = new VF.Beam([smo36436,smo36437,smo36438]);
const dirsmo38645 = smo36439.getStemDirection();
smo36439.setStemDirection(dirsmo38645);
smo36440.setStemDirection(dirsmo38645);
smo36441.setStemDirection(dirsmo38645);
smo36442.setStemDirection(dirsmo38645);
const smo38645 = new VF.Beam([smo36439,smo36440,smo36441,smo36442]);
 
// formatting measures in staff group smo36649
fmtsmo3583814.format([smo35838v0,smo36458v0], 568);
const stavesmo35838 = new VF.Stave(50, 793.0000000000002, 624);
stavesmo35838.setAttribute('id', 'stavesmo35838');
stavesmo35838.setBegBarType(1);
stavesmo35838.addClef('treble');
stavesmo35838.setContext(context);
stavesmo35838.draw();
smo35838v0.draw(context, stavesmo35838);
smo38639.setContext(context);
smo38639.draw();
smo38640.setContext(context);
smo38640.draw();
const stavesmo36458 = new VF.Stave(50, 927.0000000000002, 624);
stavesmo36458.setAttribute('id', 'stavesmo36458');
stavesmo36458.setBegBarType(1);
stavesmo36458.addClef('bass');
stavesmo36458.setContext(context);
stavesmo36458.draw();
smo36458v0.draw(context, stavesmo36458);
smo38643.setContext(context);
smo38643.draw();
smo38644.setContext(context);
smo38644.draw();
smo38645.setContext(context);
smo38645.draw();
const leftsmo36649stavesmo358381 = new VF.StaveConnector(stavesmo35838, stavesmo36458).setType(3);
leftsmo36649stavesmo358381.setContext(context).draw();
const fmtsmo3586315 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo35863v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35863v0ar = [];
const smo35839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo35839'] = smo35839;
smo35839.setAttribute('id', 'smo35839');
smo35863v0ar.push(smo35839);
const smo35840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo35840'] = smo35840;
smo35840.setAttribute('id', 'smo35840');
smo35863v0ar.push(smo35840);
const smo35841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo35841'] = smo35841;
smo35841.setAttribute('id', 'smo35841');
smo35863v0ar.push(smo35841);
const smo35842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo35842'] = smo35842;
smo35842.setAttribute('id', 'smo35842');
smo35863v0ar.push(smo35842);
const smo35843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo35843'] = smo35843;
smo35843.setAttribute('id', 'smo35843');
smo35863v0ar.push(smo35843);
const smo35844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo35844'] = smo35844;
smo35844.setAttribute('id', 'smo35844');
smo35863v0ar.push(smo35844);
const smo35845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo35845'] = smo35845;
smo35845.setAttribute('id', 'smo35845');
smo35863v0ar.push(smo35845);
const smo35846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo35846'] = smo35846;
smo35846.setAttribute('id', 'smo35846');
smo35863v0ar.push(smo35846);
const smo35847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35847'] = smo35847;
smo35847.setAttribute('id', 'smo35847');
smo35863v0ar.push(smo35847);
smo35863v0.addTickables(smo35863v0ar)
fmtsmo3586315.joinVoices([smo35863v0]);
const fmtsmo3648315 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo36483v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36483v0ar = [];
const smo36459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36459'] = smo36459;
smo36459.setAttribute('id', 'smo36459');
smo36483v0ar.push(smo36459);
const smo36460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36460'] = smo36460;
smo36460.setAttribute('id', 'smo36460');
smo36483v0ar.push(smo36460);
const smo36461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36461'] = smo36461;
smo36461.setAttribute('id', 'smo36461');
smo36483v0ar.push(smo36461);
const smo36462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36462'] = smo36462;
smo36462.setAttribute('id', 'smo36462');
smo36483v0ar.push(smo36462);
const smo36463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36463'] = smo36463;
smo36463.setAttribute('id', 'smo36463');
smo36483v0ar.push(smo36463);
const smo36464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36464'] = smo36464;
smo36464.setAttribute('id', 'smo36464');
smo36483v0ar.push(smo36464);
const smo36465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36465'] = smo36465;
smo36465.setAttribute('id', 'smo36465');
smo36483v0ar.push(smo36465);
const smo36466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36466'] = smo36466;
smo36466.setAttribute('id', 'smo36466');
smo36483v0ar.push(smo36466);
const smo36467 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36467'] = smo36467;
smo36467.setAttribute('id', 'smo36467');
smo36483v0ar.push(smo36467);
smo36483v0.addTickables(smo36483v0ar)
fmtsmo3648315.joinVoices([smo36483v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38648 = smo35839.getStemDirection();
smo35839.setStemDirection(dirsmo38648);
smo35840.setStemDirection(dirsmo38648);
smo35841.setStemDirection(dirsmo38648);
smo35842.setStemDirection(dirsmo38648);
const smo38648 = new VF.Beam([smo35839,smo35840,smo35841,smo35842]);
const dirsmo38649 = smo35843.getStemDirection();
smo35843.setStemDirection(dirsmo38649);
smo35844.setStemDirection(dirsmo38649);
smo35845.setStemDirection(dirsmo38649);
smo35846.setStemDirection(dirsmo38649);
const smo38649 = new VF.Beam([smo35843,smo35844,smo35845,smo35846]);
const dirsmo38652 = smo36460.getStemDirection();
smo36460.setStemDirection(dirsmo38652);
smo36461.setStemDirection(dirsmo38652);
smo36462.setStemDirection(dirsmo38652);
smo36463.setStemDirection(dirsmo38652);
const smo38652 = new VF.Beam([smo36460,smo36461,smo36462,smo36463]);
const dirsmo38653 = smo36464.getStemDirection();
smo36464.setStemDirection(dirsmo38653);
smo36465.setStemDirection(dirsmo38653);
smo36466.setStemDirection(dirsmo38653);
smo36467.setStemDirection(dirsmo38653);
const smo38653 = new VF.Beam([smo36464,smo36465,smo36466,smo36467]);
 
// formatting measures in staff group smo36649
fmtsmo3586315.format([smo35863v0,smo36483v0], 572);
const stavesmo35863 = new VF.Stave(674, 793.0000000000002, 586);
stavesmo35863.setAttribute('id', 'stavesmo35863');
stavesmo35863.setBegBarType(VF.Barline.type.NONE);
stavesmo35863.setContext(context);
stavesmo35863.draw();
smo35863v0.draw(context, stavesmo35863);
smo38648.setContext(context);
smo38648.draw();
smo38649.setContext(context);
smo38649.draw();
const stavesmo36483 = new VF.Stave(674, 927.0000000000002, 586);
stavesmo36483.setAttribute('id', 'stavesmo36483');
stavesmo36483.setBegBarType(VF.Barline.type.NONE);
stavesmo36483.setContext(context);
stavesmo36483.draw();
smo36483v0.draw(context, stavesmo36483);
smo38652.setContext(context);
smo38652.draw();
smo38653.setContext(context);
smo38653.draw();
const rightsmo36649stavesmo358631 = new VF.StaveConnector(stavesmo35863, stavesmo36483).setType(0);
rightsmo36649stavesmo358631.setContext(context).draw();
const fmtsmo3588916 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo35889v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35889v0ar = [];
const smo35864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35864'] = smo35864;
smo35864.setAttribute('id', 'smo35864');
const  smo38867 = new VF.Articulation('a.').setPosition(3);
smo35864.addModifier(smo38867, 0);
smo35889v0ar.push(smo35864);
const smo35866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35866'] = smo35866;
smo35866.setAttribute('id', 'smo35866');
smo35889v0ar.push(smo35866);
const smo35867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35867'] = smo35867;
smo35867.setAttribute('id', 'smo35867');
smo35889v0ar.push(smo35867);
const smo35868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35868'] = smo35868;
smo35868.setAttribute('id', 'smo35868');
smo35889v0ar.push(smo35868);
const smo35869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35869'] = smo35869;
smo35869.setAttribute('id', 'smo35869');
smo35889v0ar.push(smo35869);
const smo35870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35870'] = smo35870;
smo35870.setAttribute('id', 'smo35870');
smo35889v0ar.push(smo35870);
const smo35871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35871'] = smo35871;
smo35871.setAttribute('id', 'smo35871');
smo35889v0ar.push(smo35871);
const smo35872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35872'] = smo35872;
smo35872.setAttribute('id', 'smo35872');
smo35889v0ar.push(smo35872);
const smo35873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35873'] = smo35873;
smo35873.setAttribute('id', 'smo35873');
smo35889v0ar.push(smo35873);
smo35889v0.addTickables(smo35889v0ar)
fmtsmo3588916.joinVoices([smo35889v0]);
const fmtsmo3650816 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo36508v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36508v0ar = [];
const smo36484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36484'] = smo36484;
smo36484.setAttribute('id', 'smo36484');
smo36508v0ar.push(smo36484);
const smo36485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36485'] = smo36485;
smo36485.setAttribute('id', 'smo36485');
smo36508v0ar.push(smo36485);
const smo36486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36486'] = smo36486;
smo36486.setAttribute('id', 'smo36486');
smo36508v0ar.push(smo36486);
const smo36487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36487'] = smo36487;
smo36487.setAttribute('id', 'smo36487');
smo36508v0ar.push(smo36487);
const smo36488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36488'] = smo36488;
smo36488.setAttribute('id', 'smo36488');
smo36508v0ar.push(smo36488);
const smo36489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36489'] = smo36489;
smo36489.setAttribute('id', 'smo36489');
smo36508v0ar.push(smo36489);
const smo36490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36490'] = smo36490;
smo36490.setAttribute('id', 'smo36490');
smo36508v0ar.push(smo36490);
const smo36491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo36491'] = smo36491;
smo36491.setAttribute('id', 'smo36491');
smo36508v0ar.push(smo36491);
const smo36492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36492'] = smo36492;
smo36492.setAttribute('id', 'smo36492');
smo36508v0ar.push(smo36492);
smo36508v0.addTickables(smo36508v0ar)
fmtsmo3650816.joinVoices([smo36508v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38664 = smo35864.getStemDirection();
smo35864.setStemDirection(dirsmo38664);
smo35866.setStemDirection(dirsmo38664);
smo35867.setStemDirection(dirsmo38664);
smo35868.setStemDirection(dirsmo38664);
const smo38664 = new VF.Beam([smo35864,smo35866,smo35867,smo35868]);
const dirsmo38665 = smo35869.getStemDirection();
smo35869.setStemDirection(dirsmo38665);
smo35870.setStemDirection(dirsmo38665);
smo35871.setStemDirection(dirsmo38665);
smo35872.setStemDirection(dirsmo38665);
const smo38665 = new VF.Beam([smo35869,smo35870,smo35871,smo35872]);
const dirsmo38668 = smo36485.getStemDirection();
smo36485.setStemDirection(dirsmo38668);
smo36486.setStemDirection(dirsmo38668);
smo36487.setStemDirection(dirsmo38668);
smo36488.setStemDirection(dirsmo38668);
const smo38668 = new VF.Beam([smo36485,smo36486,smo36487,smo36488]);
const dirsmo38669 = smo36489.getStemDirection();
smo36489.setStemDirection(dirsmo38669);
smo36490.setStemDirection(dirsmo38669);
smo36491.setStemDirection(dirsmo38669);
smo36492.setStemDirection(dirsmo38669);
const smo38669 = new VF.Beam([smo36489,smo36490,smo36491,smo36492]);
 
// formatting measures in staff group smo36649
fmtsmo3588916.format([smo35889v0,smo36508v0], 561);
const stavesmo35889 = new VF.Stave(50, 1058.0000000000002, 616);
stavesmo35889.setAttribute('id', 'stavesmo35889');
stavesmo35889.setBegBarType(1);
stavesmo35889.addClef('treble');
stavesmo35889.setContext(context);
stavesmo35889.draw();
smo35889v0.draw(context, stavesmo35889);
smo38664.setContext(context);
smo38664.draw();
smo38665.setContext(context);
smo38665.draw();
const stavesmo36508 = new VF.Stave(50, 1177.0000000000002, 616);
stavesmo36508.setAttribute('id', 'stavesmo36508');
stavesmo36508.setBegBarType(1);
stavesmo36508.addClef('bass');
stavesmo36508.setContext(context);
stavesmo36508.draw();
smo36508v0.draw(context, stavesmo36508);
smo38668.setContext(context);
smo38668.draw();
smo38669.setContext(context);
smo38669.draw();
const leftsmo36649stavesmo358891 = new VF.StaveConnector(stavesmo35889, stavesmo36508).setType(3);
leftsmo36649stavesmo358891.setContext(context).draw();
const fmtsmo3591417 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo35914v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35914v0ar = [];
const smo35890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35890'] = smo35890;
smo35890.setAttribute('id', 'smo35890');
smo35914v0ar.push(smo35890);
const smo35891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35891'] = smo35891;
smo35891.setAttribute('id', 'smo35891');
smo35914v0ar.push(smo35891);
const smo35892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35892'] = smo35892;
smo35892.setAttribute('id', 'smo35892');
smo35914v0ar.push(smo35892);
const smo35893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35893'] = smo35893;
smo35893.setAttribute('id', 'smo35893');
smo35914v0ar.push(smo35893);
const smo35894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35894'] = smo35894;
smo35894.setAttribute('id', 'smo35894');
smo35914v0ar.push(smo35894);
const smo35895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35895'] = smo35895;
smo35895.setAttribute('id', 'smo35895');
smo35914v0ar.push(smo35895);
const smo35896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35896'] = smo35896;
smo35896.setAttribute('id', 'smo35896');
smo35914v0ar.push(smo35896);
const smo35897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35897'] = smo35897;
smo35897.setAttribute('id', 'smo35897');
smo35914v0ar.push(smo35897);
const smo35898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35898'] = smo35898;
smo35898.setAttribute('id', 'smo35898');
smo35914v0ar.push(smo35898);
smo35914v0.addTickables(smo35914v0ar)
fmtsmo3591417.joinVoices([smo35914v0]);
const fmtsmo3653317 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo36533v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36533v0ar = [];
const smo36509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36509'] = smo36509;
smo36509.setAttribute('id', 'smo36509');
smo36533v0ar.push(smo36509);
const smo36510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36510'] = smo36510;
smo36510.setAttribute('id', 'smo36510');
smo36533v0ar.push(smo36510);
const smo36511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36511'] = smo36511;
smo36511.setAttribute('id', 'smo36511');
smo36533v0ar.push(smo36511);
const smo36512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36512'] = smo36512;
smo36512.setAttribute('id', 'smo36512');
smo36533v0ar.push(smo36512);
const smo36513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36513'] = smo36513;
smo36513.setAttribute('id', 'smo36513');
const smo365130acc = new VF.Accidental('b');
smo36513.addModifier(smo365130acc, 0);
smo36533v0ar.push(smo36513);
const smo36514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36514'] = smo36514;
smo36514.setAttribute('id', 'smo36514');
smo36533v0ar.push(smo36514);
const smo36515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36515'] = smo36515;
smo36515.setAttribute('id', 'smo36515');
smo36533v0ar.push(smo36515);
const smo36516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36516'] = smo36516;
smo36516.setAttribute('id', 'smo36516');
smo36533v0ar.push(smo36516);
const smo36517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36517'] = smo36517;
smo36517.setAttribute('id', 'smo36517');
smo36533v0ar.push(smo36517);
smo36533v0.addTickables(smo36533v0ar)
fmtsmo3653317.joinVoices([smo36533v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38672 = smo35890.getStemDirection();
smo35890.setStemDirection(dirsmo38672);
smo35891.setStemDirection(dirsmo38672);
smo35892.setStemDirection(dirsmo38672);
smo35893.setStemDirection(dirsmo38672);
const smo38672 = new VF.Beam([smo35890,smo35891,smo35892,smo35893]);
const dirsmo38673 = smo35894.getStemDirection();
smo35894.setStemDirection(dirsmo38673);
smo35895.setStemDirection(dirsmo38673);
smo35896.setStemDirection(dirsmo38673);
smo35897.setStemDirection(dirsmo38673);
const smo38673 = new VF.Beam([smo35894,smo35895,smo35896,smo35897]);
const dirsmo38676 = smo36510.getStemDirection();
smo36510.setStemDirection(dirsmo38676);
smo36511.setStemDirection(dirsmo38676);
smo36512.setStemDirection(dirsmo38676);
smo36513.setStemDirection(dirsmo38676);
const smo38676 = new VF.Beam([smo36510,smo36511,smo36512,smo36513]);
const dirsmo38677 = smo36514.getStemDirection();
smo36514.setStemDirection(dirsmo38677);
smo36515.setStemDirection(dirsmo38677);
smo36516.setStemDirection(dirsmo38677);
smo36517.setStemDirection(dirsmo38677);
const smo38677 = new VF.Beam([smo36514,smo36515,smo36516,smo36517]);
 
// formatting measures in staff group smo36649
fmtsmo3591417.format([smo35914v0,smo36533v0], 579);
const stavesmo35914 = new VF.Stave(666, 1058.0000000000002, 593);
stavesmo35914.setAttribute('id', 'stavesmo35914');
stavesmo35914.setBegBarType(VF.Barline.type.NONE);
stavesmo35914.setContext(context);
stavesmo35914.draw();
smo35914v0.draw(context, stavesmo35914);
smo38672.setContext(context);
smo38672.draw();
smo38673.setContext(context);
smo38673.draw();
const stavesmo36533 = new VF.Stave(666, 1177.0000000000002, 593);
stavesmo36533.setAttribute('id', 'stavesmo36533');
stavesmo36533.setBegBarType(VF.Barline.type.NONE);
stavesmo36533.setContext(context);
stavesmo36533.draw();
smo36533v0.draw(context, stavesmo36533);
smo38676.setContext(context);
smo38676.draw();
smo38677.setContext(context);
smo38677.draw();
const rightsmo36649stavesmo359141 = new VF.StaveConnector(stavesmo35914, stavesmo36533).setType(0);
rightsmo36649stavesmo359141.setContext(context).draw();
const fmtsmo3594718 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo35947v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35947v0ar = [];
const smo35915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35915'] = smo35915;
smo35915.setAttribute('id', 'smo35915');
const  smo38876 = new VF.Articulation('a.').setPosition(3);
smo35915.addModifier(smo38876, 0);
smo35947v0ar.push(smo35915);
const smo35917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35917'] = smo35917;
smo35917.setAttribute('id', 'smo35917');
smo35947v0ar.push(smo35917);
const smo35918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35918'] = smo35918;
smo35918.setAttribute('id', 'smo35918');
smo35947v0ar.push(smo35918);
const smo35919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35919'] = smo35919;
smo35919.setAttribute('id', 'smo35919');
smo35947v0ar.push(smo35919);
const smo35920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35920'] = smo35920;
smo35920.setAttribute('id', 'smo35920');
smo35947v0ar.push(smo35920);
const smo35921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35921'] = smo35921;
smo35921.setAttribute('id', 'smo35921');
smo35947v0ar.push(smo35921);
const smo35922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35922'] = smo35922;
smo35922.setAttribute('id', 'smo35922');
smo35947v0ar.push(smo35922);
const smo35923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35923'] = smo35923;
smo35923.setAttribute('id', 'smo35923');
smo35947v0ar.push(smo35923);
const smo35924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35924'] = smo35924;
smo35924.setAttribute('id', 'smo35924');
smo35947v0ar.push(smo35924);
const smo35925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35925'] = smo35925;
smo35925.setAttribute('id', 'smo35925');
smo35947v0ar.push(smo35925);
const smo35926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35926'] = smo35926;
smo35926.setAttribute('id', 'smo35926');
smo35947v0ar.push(smo35926);
const smo35927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35927'] = smo35927;
smo35927.setAttribute('id', 'smo35927');
smo35947v0ar.push(smo35927);
const smo35928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35928'] = smo35928;
smo35928.setAttribute('id', 'smo35928');
smo35947v0ar.push(smo35928);
const smo35929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35929'] = smo35929;
smo35929.setAttribute('id', 'smo35929');
smo35947v0ar.push(smo35929);
const smo35930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35930'] = smo35930;
smo35930.setAttribute('id', 'smo35930');
smo35947v0ar.push(smo35930);
const smo35931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35931'] = smo35931;
smo35931.setAttribute('id', 'smo35931');
smo35947v0ar.push(smo35931);
smo35947v0.addTickables(smo35947v0ar)
fmtsmo3594718.joinVoices([smo35947v0]);
const fmtsmo3655718 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo36557v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36557v0ar = [];
const smo36534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36534'] = smo36534;
smo36534.setAttribute('id', 'smo36534');
smo36557v0ar.push(smo36534);
const smo36535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36535'] = smo36535;
smo36535.setAttribute('id', 'smo36535');
const smo365350acc = new VF.Accidental('b');
smo36535.addModifier(smo365350acc, 0);
smo36557v0ar.push(smo36535);
const smo36536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36536'] = smo36536;
smo36536.setAttribute('id', 'smo36536');
smo36557v0ar.push(smo36536);
const smo36537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36537'] = smo36537;
smo36537.setAttribute('id', 'smo36537');
smo36557v0ar.push(smo36537);
const smo36538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36538'] = smo36538;
smo36538.setAttribute('id', 'smo36538');
smo36557v0ar.push(smo36538);
const smo36539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36539'] = smo36539;
smo36539.setAttribute('id', 'smo36539');
smo36557v0ar.push(smo36539);
const smo36540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo36540'] = smo36540;
smo36540.setAttribute('id', 'smo36540');
smo36557v0ar.push(smo36540);
const smo36541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo36541'] = smo36541;
smo36541.setAttribute('id', 'smo36541');
smo36557v0ar.push(smo36541);
smo36557v0.addTickables(smo36557v0ar)
fmtsmo3655718.joinVoices([smo36557v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38690 = smo35915.getStemDirection();
smo35915.setStemDirection(dirsmo38690);
smo35917.setStemDirection(dirsmo38690);
smo35918.setStemDirection(dirsmo38690);
smo35919.setStemDirection(dirsmo38690);
const smo38690 = new VF.Beam([smo35915,smo35917,smo35918,smo35919]);
const dirsmo38691 = smo35920.getStemDirection();
smo35920.setStemDirection(dirsmo38691);
smo35921.setStemDirection(dirsmo38691);
smo35922.setStemDirection(dirsmo38691);
smo35923.setStemDirection(dirsmo38691);
const smo38691 = new VF.Beam([smo35920,smo35921,smo35922,smo35923]);
const dirsmo38692 = smo35924.getStemDirection();
smo35924.setStemDirection(dirsmo38692);
smo35925.setStemDirection(dirsmo38692);
smo35926.setStemDirection(dirsmo38692);
smo35927.setStemDirection(dirsmo38692);
const smo38692 = new VF.Beam([smo35924,smo35925,smo35926,smo35927]);
const dirsmo38693 = smo35928.getStemDirection();
smo35928.setStemDirection(dirsmo38693);
smo35929.setStemDirection(dirsmo38693);
smo35930.setStemDirection(dirsmo38693);
smo35931.setStemDirection(dirsmo38693);
const smo38693 = new VF.Beam([smo35928,smo35929,smo35930,smo35931]);
const dirsmo38696 = smo36534.getStemDirection();
smo36534.setStemDirection(dirsmo38696);
smo36535.setStemDirection(dirsmo38696);
smo36536.setStemDirection(dirsmo38696);
smo36537.setStemDirection(dirsmo38696);
const smo38696 = new VF.Beam([smo36534,smo36535,smo36536,smo36537]);
const dirsmo38697 = smo36538.getStemDirection();
smo36538.setStemDirection(dirsmo38697);
smo36539.setStemDirection(dirsmo38697);
smo36540.setStemDirection(dirsmo38697);
smo36541.setStemDirection(dirsmo38697);
const smo38697 = new VF.Beam([smo36538,smo36539,smo36540,smo36541]);
 
// formatting measures in staff group smo36649
fmtsmo3594718.format([smo35947v0,smo36557v0], 395);
const stavesmo35947 = new VF.Stave(50, 1318.0000000000002, 451);
stavesmo35947.setAttribute('id', 'stavesmo35947');
stavesmo35947.setBegBarType(1);
stavesmo35947.addClef('treble');
stavesmo35947.setContext(context);
stavesmo35947.draw();
smo35947v0.draw(context, stavesmo35947);
smo38690.setContext(context);
smo38690.draw();
smo38691.setContext(context);
smo38691.draw();
smo38692.setContext(context);
smo38692.draw();
smo38693.setContext(context);
smo38693.draw();
const stavesmo36557 = new VF.Stave(50, 1452.0000000000002, 451);
stavesmo36557.setAttribute('id', 'stavesmo36557');
stavesmo36557.setBegBarType(1);
stavesmo36557.addClef('bass');
stavesmo36557.setContext(context);
stavesmo36557.draw();
smo36557v0.draw(context, stavesmo36557);
smo38696.setContext(context);
smo38696.draw();
smo38697.setContext(context);
smo38697.draw();
const leftsmo36649stavesmo359471 = new VF.StaveConnector(stavesmo35947, stavesmo36557).setType(3);
leftsmo36649stavesmo359471.setContext(context).draw();
const fmtsmo3597619 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo35976v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35976v0ar = [];
const smo35948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35948'] = smo35948;
smo35948.setAttribute('id', 'smo35948');
smo35976v0ar.push(smo35948);
const smo35949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35949'] = smo35949;
smo35949.setAttribute('id', 'smo35949');
smo35976v0ar.push(smo35949);
const smo35950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35950'] = smo35950;
smo35950.setAttribute('id', 'smo35950');
smo35976v0ar.push(smo35950);
const smo35951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo35951'] = smo35951;
smo35951.setAttribute('id', 'smo35951');
smo35976v0ar.push(smo35951);
const smo35952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo35952'] = smo35952;
smo35952.setAttribute('id', 'smo35952');
smo35976v0ar.push(smo35952);
const smo35953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35953'] = smo35953;
smo35953.setAttribute('id', 'smo35953');
smo35976v0ar.push(smo35953);
const smo35954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo35954'] = smo35954;
smo35954.setAttribute('id', 'smo35954');
smo35976v0ar.push(smo35954);
const smo35955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35955'] = smo35955;
smo35955.setAttribute('id', 'smo35955');
smo35976v0ar.push(smo35955);
const smo35956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo35956'] = smo35956;
smo35956.setAttribute('id', 'smo35956');
smo35976v0ar.push(smo35956);
const smo35957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35957'] = smo35957;
smo35957.setAttribute('id', 'smo35957');
smo35976v0ar.push(smo35957);
const smo35958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35958'] = smo35958;
smo35958.setAttribute('id', 'smo35958');
smo35976v0ar.push(smo35958);
const smo35959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35959'] = smo35959;
smo35959.setAttribute('id', 'smo35959');
smo35976v0ar.push(smo35959);
const smo35960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35960'] = smo35960;
smo35960.setAttribute('id', 'smo35960');
smo35976v0ar.push(smo35960);
smo35976v0.addTickables(smo35976v0ar)
fmtsmo3597619.joinVoices([smo35976v0]);
const fmtsmo3658519 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo36585v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36585v0ar = [];
const smo36558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36558'] = smo36558;
smo36558.setAttribute('id', 'smo36558');
smo36585v0ar.push(smo36558);
const smo36559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo36559'] = smo36559;
smo36559.setAttribute('id', 'smo36559');
smo36585v0ar.push(smo36559);
const smo36560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36560'] = smo36560;
smo36560.setAttribute('id', 'smo36560');
smo36585v0ar.push(smo36560);
const smo36561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36561'] = smo36561;
smo36561.setAttribute('id', 'smo36561');
smo36585v0ar.push(smo36561);
const smo36562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo36562'] = smo36562;
smo36562.setAttribute('id', 'smo36562');
smo36585v0ar.push(smo36562);
const smo36563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36563'] = smo36563;
smo36563.setAttribute('id', 'smo36563');
smo36585v0ar.push(smo36563);
const smo36564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36564'] = smo36564;
smo36564.setAttribute('id', 'smo36564');
smo36585v0ar.push(smo36564);
const smo36565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36565'] = smo36565;
smo36565.setAttribute('id', 'smo36565');
smo36585v0ar.push(smo36565);
const smo36566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36566'] = smo36566;
smo36566.setAttribute('id', 'smo36566');
smo36585v0ar.push(smo36566);
const smo36567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36567'] = smo36567;
smo36567.setAttribute('id', 'smo36567');
smo36585v0ar.push(smo36567);
const smo36568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36568'] = smo36568;
smo36568.setAttribute('id', 'smo36568');
smo36585v0ar.push(smo36568);
const smo36569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36569'] = smo36569;
smo36569.setAttribute('id', 'smo36569');
smo36585v0ar.push(smo36569);
smo36585v0.addTickables(smo36585v0ar)
fmtsmo3658519.joinVoices([smo36585v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38700 = smo35948.getStemDirection();
smo35948.setStemDirection(dirsmo38700);
smo35949.setStemDirection(dirsmo38700);
smo35950.setStemDirection(dirsmo38700);
smo35951.setStemDirection(dirsmo38700);
const smo38700 = new VF.Beam([smo35948,smo35949,smo35950,smo35951]);
const dirsmo38701 = smo35952.getStemDirection();
smo35952.setStemDirection(dirsmo38701);
smo35953.setStemDirection(dirsmo38701);
smo35954.setStemDirection(dirsmo38701);
smo35955.setStemDirection(dirsmo38701);
const smo38701 = new VF.Beam([smo35952,smo35953,smo35954,smo35955]);
const dirsmo38702 = smo35956.getStemDirection();
smo35956.setStemDirection(dirsmo38702);
smo35957.setStemDirection(dirsmo38702);
const smo38702 = new VF.Beam([smo35956,smo35957]);
const dirsmo38703 = smo35958.getStemDirection();
smo35958.setStemDirection(dirsmo38703);
smo35959.setStemDirection(dirsmo38703);
smo35960.setStemDirection(dirsmo38703);
const smo38703 = new VF.Beam([smo35958,smo35959,smo35960]);
const dirsmo38706 = smo36558.getStemDirection();
smo36558.setStemDirection(dirsmo38706);
smo36559.setStemDirection(dirsmo38706);
const smo38706 = new VF.Beam([smo36558,smo36559]);
const dirsmo38707 = smo36560.getStemDirection();
smo36560.setStemDirection(dirsmo38707);
smo36561.setStemDirection(dirsmo38707);
const smo38707 = new VF.Beam([smo36560,smo36561]);
const dirsmo38708 = smo36562.getStemDirection();
smo36562.setStemDirection(dirsmo38708);
smo36563.setStemDirection(dirsmo38708);
smo36564.setStemDirection(dirsmo38708);
smo36565.setStemDirection(dirsmo38708);
const smo38708 = new VF.Beam([smo36562,smo36563,smo36564,smo36565]);
const dirsmo38709 = smo36566.getStemDirection();
smo36566.setStemDirection(dirsmo38709);
smo36567.setStemDirection(dirsmo38709);
smo36568.setStemDirection(dirsmo38709);
smo36569.setStemDirection(dirsmo38709);
const smo38709 = new VF.Beam([smo36566,smo36567,smo36568,smo36569]);
 
// formatting measures in staff group smo36649
fmtsmo3597619.format([smo35976v0,smo36585v0], 368);
const stavesmo35976 = new VF.Stave(501, 1318.0000000000002, 382);
stavesmo35976.setAttribute('id', 'stavesmo35976');
stavesmo35976.setBegBarType(VF.Barline.type.NONE);
stavesmo35976.setContext(context);
stavesmo35976.draw();
smo35976v0.draw(context, stavesmo35976);
smo38700.setContext(context);
smo38700.draw();
smo38701.setContext(context);
smo38701.draw();
smo38702.setContext(context);
smo38702.draw();
smo38703.setContext(context);
smo38703.draw();
const stavesmo36585 = new VF.Stave(501, 1452.0000000000002, 382);
stavesmo36585.setAttribute('id', 'stavesmo36585');
stavesmo36585.setBegBarType(VF.Barline.type.NONE);
stavesmo36585.setContext(context);
stavesmo36585.draw();
smo36585v0.draw(context, stavesmo36585);
smo38706.setContext(context);
smo38706.draw();
smo38707.setContext(context);
smo38707.draw();
smo38708.setContext(context);
smo38708.draw();
smo38709.setContext(context);
smo38709.draw();
const fmtsmo3600820 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo36008v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36008v0ar = [];
const smo35977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35977'] = smo35977;
smo35977.setAttribute('id', 'smo35977');
smo36008v0ar.push(smo35977);
const smo35978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35978'] = smo35978;
smo35978.setAttribute('id', 'smo35978');
smo36008v0ar.push(smo35978);
const smo35979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35979'] = smo35979;
smo35979.setAttribute('id', 'smo35979');
smo36008v0ar.push(smo35979);
const smo35980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35980'] = smo35980;
smo35980.setAttribute('id', 'smo35980');
smo36008v0ar.push(smo35980);
const smo35981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35981'] = smo35981;
smo35981.setAttribute('id', 'smo35981');
smo36008v0ar.push(smo35981);
const smo35982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35982'] = smo35982;
smo35982.setAttribute('id', 'smo35982');
smo36008v0ar.push(smo35982);
const smo35983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35983'] = smo35983;
smo35983.setAttribute('id', 'smo35983');
smo36008v0ar.push(smo35983);
const smo35984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35984'] = smo35984;
smo35984.setAttribute('id', 'smo35984');
smo36008v0ar.push(smo35984);
const smo35985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35985'] = smo35985;
smo35985.setAttribute('id', 'smo35985');
smo36008v0ar.push(smo35985);
const smo35986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo35986'] = smo35986;
smo35986.setAttribute('id', 'smo35986');
smo36008v0ar.push(smo35986);
const smo35987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35987'] = smo35987;
smo35987.setAttribute('id', 'smo35987');
smo36008v0ar.push(smo35987);
const smo35988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35988'] = smo35988;
smo35988.setAttribute('id', 'smo35988');
smo36008v0ar.push(smo35988);
const smo35989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35989'] = smo35989;
smo35989.setAttribute('id', 'smo35989');
smo36008v0ar.push(smo35989);
const smo35990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35990'] = smo35990;
smo35990.setAttribute('id', 'smo35990');
smo36008v0ar.push(smo35990);
const smo35991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35991'] = smo35991;
smo35991.setAttribute('id', 'smo35991');
smo36008v0ar.push(smo35991);
const smo35992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo35992'] = smo35992;
smo35992.setAttribute('id', 'smo35992');
smo36008v0ar.push(smo35992);
smo36008v0.addTickables(smo36008v0ar)
fmtsmo3600820.joinVoices([smo36008v0]);
const fmtsmo3661320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo36613v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36613v0ar = [];
const smo36586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36586'] = smo36586;
smo36586.setAttribute('id', 'smo36586');
smo36613v0ar.push(smo36586);
const smo36587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo36587'] = smo36587;
smo36587.setAttribute('id', 'smo36587');
smo36613v0ar.push(smo36587);
const smo36588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36588'] = smo36588;
smo36588.setAttribute('id', 'smo36588');
smo36613v0ar.push(smo36588);
const smo36589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36589'] = smo36589;
smo36589.setAttribute('id', 'smo36589');
smo36613v0ar.push(smo36589);
const smo36590 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36590'] = smo36590;
smo36590.setAttribute('id', 'smo36590');
smo36613v0ar.push(smo36590);
const smo36591 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36591'] = smo36591;
smo36591.setAttribute('id', 'smo36591');
smo36613v0ar.push(smo36591);
const smo36592 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36592'] = smo36592;
smo36592.setAttribute('id', 'smo36592');
smo36613v0ar.push(smo36592);
const smo36593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36593'] = smo36593;
smo36593.setAttribute('id', 'smo36593');
smo36613v0ar.push(smo36593);
const smo36594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36594'] = smo36594;
smo36594.setAttribute('id', 'smo36594');
const  smo38885 = new VF.Articulation('a.').setPosition(3);
smo36594.addModifier(smo38885, 0);
smo36613v0ar.push(smo36594);
const smo36596 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo36596'] = smo36596;
smo36596.setAttribute('id', 'smo36596');
const  smo38886 = new VF.Articulation('a.').setPosition(3);
smo36596.addModifier(smo38886, 0);
smo36613v0ar.push(smo36596);
smo36613v0.addTickables(smo36613v0ar)
fmtsmo3661320.joinVoices([smo36613v0]);
// create beam groups and tuplets for format grp smo36649 before formatting
const dirsmo38712 = smo35977.getStemDirection();
smo35977.setStemDirection(dirsmo38712);
smo35978.setStemDirection(dirsmo38712);
smo35979.setStemDirection(dirsmo38712);
smo35980.setStemDirection(dirsmo38712);
const smo38712 = new VF.Beam([smo35977,smo35978,smo35979,smo35980]);
const dirsmo38713 = smo35981.getStemDirection();
smo35981.setStemDirection(dirsmo38713);
smo35982.setStemDirection(dirsmo38713);
smo35983.setStemDirection(dirsmo38713);
smo35984.setStemDirection(dirsmo38713);
const smo38713 = new VF.Beam([smo35981,smo35982,smo35983,smo35984]);
const dirsmo38714 = smo35985.getStemDirection();
smo35985.setStemDirection(dirsmo38714);
smo35986.setStemDirection(dirsmo38714);
smo35987.setStemDirection(dirsmo38714);
smo35988.setStemDirection(dirsmo38714);
const smo38714 = new VF.Beam([smo35985,smo35986,smo35987,smo35988]);
const dirsmo38715 = smo35989.getStemDirection();
smo35989.setStemDirection(dirsmo38715);
smo35990.setStemDirection(dirsmo38715);
smo35991.setStemDirection(dirsmo38715);
smo35992.setStemDirection(dirsmo38715);
const smo38715 = new VF.Beam([smo35989,smo35990,smo35991,smo35992]);
const dirsmo38718 = smo36586.getStemDirection();
smo36586.setStemDirection(dirsmo38718);
smo36587.setStemDirection(dirsmo38718);
const smo38718 = new VF.Beam([smo36586,smo36587]);
const dirsmo38719 = smo36588.getStemDirection();
smo36588.setStemDirection(dirsmo38719);
smo36589.setStemDirection(dirsmo38719);
const smo38719 = new VF.Beam([smo36588,smo36589]);
const dirsmo38720 = smo36590.getStemDirection();
smo36590.setStemDirection(dirsmo38720);
smo36591.setStemDirection(dirsmo38720);
smo36592.setStemDirection(dirsmo38720);
smo36593.setStemDirection(dirsmo38720);
const smo38720 = new VF.Beam([smo36590,smo36591,smo36592,smo36593]);
const dirsmo38721 = smo36594.getStemDirection();
smo36594.setStemDirection(dirsmo38721);
smo36596.setStemDirection(dirsmo38721);
const smo38721 = new VF.Beam([smo36594,smo36596]);
 
// formatting measures in staff group smo36649
fmtsmo3600820.format([smo36008v0,smo36613v0], 363);
const stavesmo36008 = new VF.Stave(883, 1318.0000000000002, 377);
stavesmo36008.setAttribute('id', 'stavesmo36008');
stavesmo36008.setBegBarType(VF.Barline.type.NONE);
stavesmo36008.setContext(context);
stavesmo36008.draw();
smo36008v0.draw(context, stavesmo36008);
smo38712.setContext(context);
smo38712.draw();
smo38713.setContext(context);
smo38713.draw();
smo38714.setContext(context);
smo38714.draw();
smo38715.setContext(context);
smo38715.draw();
const stavesmo36613 = new VF.Stave(883, 1452.0000000000002, 377);
stavesmo36613.setAttribute('id', 'stavesmo36613');
stavesmo36613.setBegBarType(VF.Barline.type.NONE);
stavesmo36613.setContext(context);
stavesmo36613.draw();
smo36613v0.draw(context, stavesmo36613);
smo38718.setContext(context);
smo38718.draw();
smo38719.setContext(context);
smo38719.draw();
smo38720.setContext(context);
smo38720.draw();
smo38721.setContext(context);
smo38721.draw();
const rightsmo36649stavesmo360081 = new VF.StaveConnector(stavesmo36008, stavesmo36613).setType(0);
rightsmo36649stavesmo360081.setContext(context).draw();
const smo38891 = new VF.Curve(smo35703, smo35706, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":2}'));
smo38891.setContext(context).draw();
const smo38892 = new VF.Curve(smo35707, smo35726, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38892.setContext(context).draw();
const smo38893 = new VF.Curve(smo35727, smo35732, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38893.setContext(context).draw();
const smo38894 = new VF.Curve(smo35847, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo38894.setContext(context).draw();
const smo38895 = new VF.Curve(null, smo35864, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo38895.setContext(context).draw();
const smo38896 = new VF.Curve(smo35898, null, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo38896.setContext(context).draw();
const smo38897 = new VF.Curve(null, smo35915, JSON.parse('{"thickness":2,"x_shift":-5,"y_shift":10,"cps":[{"x":0,"y":10},{"x":0,"y":10}],"invert":false,"position":1,"position_end":1}'));
smo38897.setContext(context).draw();
const smo38898 = new VF.Curve(smo35873, smo35890, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38898.setContext(context).draw();
const smo38899 = new VF.Curve(smo36459, smo36460, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38899.setContext(context).draw();
const smo38900 = new VF.Curve(smo36484, smo36485, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38900.setContext(context).draw();
const smo38901 = new VF.Curve(smo36509, smo36510, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38901.setContext(context).draw();
const smo38902 = new VF.Curve(smo36535, smo36538, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38902.setContext(context).draw();
const smo38903 = new VF.Curve(smo36539, smo36558, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo38903.setContext(context).draw();
}
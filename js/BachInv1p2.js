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
const fmtsmo39667410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo396674v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396674v0ar = [];
const smo396651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396651'] = smo396651;
smo396651.setAttribute('id', 'smo396651');
smo396674v0ar.push(smo396651);
const smo396652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo396652'] = smo396652;
smo396652.setAttribute('id', 'smo396652');
const smo3966520acc = new VF.Accidental('#');
smo396652.addModifier(smo3966520acc, 0);
smo396674v0ar.push(smo396652);
const smo396653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396653'] = smo396653;
smo396653.setAttribute('id', 'smo396653');
smo396674v0ar.push(smo396653);
const smo396654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396654'] = smo396654;
smo396654.setAttribute('id', 'smo396654');
smo396674v0ar.push(smo396654);
const smo396655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo396655'] = smo396655;
smo396655.setAttribute('id', 'smo396655');
smo396674v0ar.push(smo396655);
const smo396656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo396656'] = smo396656;
smo396656.setAttribute('id', 'smo396656');
smo396674v0ar.push(smo396656);
const smo396657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo396657'] = smo396657;
smo396657.setAttribute('id', 'smo396657');
smo396674v0ar.push(smo396657);
const smo396658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["c#/5/n"]}'))
noteHash['smo396658'] = smo396658;
smo396658.setAttribute('id', 'smo396658');
smo396674v0ar.push(smo396658);
smo396674v0.addTickables(smo396674v0ar)
fmtsmo39667410.joinVoices([smo396674v0]);
const fmtsmo39729110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo397291v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397291v0ar = [];
const smo397260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397260'] = smo397260;
smo397260.setAttribute('id', 'smo397260');
smo397291v0ar.push(smo397260);
const smo397261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo397261'] = smo397261;
smo397261.setAttribute('id', 'smo397261');
const smo3972610acc = new VF.Accidental('b');
smo397261.addModifier(smo3972610acc, 0);
smo397291v0ar.push(smo397261);
const smo397262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo397262'] = smo397262;
smo397262.setAttribute('id', 'smo397262');
smo397291v0ar.push(smo397262);
const smo397263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo397263'] = smo397263;
smo397263.setAttribute('id', 'smo397263');
smo397291v0ar.push(smo397263);
const smo397264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397264'] = smo397264;
smo397264.setAttribute('id', 'smo397264');
smo397291v0ar.push(smo397264);
const smo397265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo397265'] = smo397265;
smo397265.setAttribute('id', 'smo397265');
smo397291v0ar.push(smo397265);
const smo397266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo397266'] = smo397266;
smo397266.setAttribute('id', 'smo397266');
smo397291v0ar.push(smo397266);
const smo397267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo397267'] = smo397267;
smo397267.setAttribute('id', 'smo397267');
smo397291v0ar.push(smo397267);
const smo397268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo397268'] = smo397268;
smo397268.setAttribute('id', 'smo397268');
smo397291v0ar.push(smo397268);
const smo397269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo397269'] = smo397269;
smo397269.setAttribute('id', 'smo397269');
smo397291v0ar.push(smo397269);
const smo397270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397270'] = smo397270;
smo397270.setAttribute('id', 'smo397270');
smo397291v0ar.push(smo397270);
const smo397271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397271'] = smo397271;
smo397271.setAttribute('id', 'smo397271');
smo397291v0ar.push(smo397271);
const smo397272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397272'] = smo397272;
smo397272.setAttribute('id', 'smo397272');
smo397291v0ar.push(smo397272);
const smo397273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397273'] = smo397273;
smo397273.setAttribute('id', 'smo397273');
smo397291v0ar.push(smo397273);
const smo397274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397274'] = smo397274;
smo397274.setAttribute('id', 'smo397274');
smo397291v0ar.push(smo397274);
const smo397275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo397275'] = smo397275;
smo397275.setAttribute('id', 'smo397275');
smo397291v0ar.push(smo397275);
smo397291v0.addTickables(smo397291v0ar)
fmtsmo39729110.joinVoices([smo397291v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399523 = smo396651.getStemDirection();
smo396651.setStemDirection(dirsmo399523);
smo396652.setStemDirection(dirsmo399523);
smo396653.setStemDirection(dirsmo399523);
smo396654.setStemDirection(dirsmo399523);
const smo399523 = new VF.Beam([smo396651,smo396652,smo396653,smo396654]);
const dirsmo399524 = smo396655.getStemDirection();
smo396655.setStemDirection(dirsmo399524);
smo396656.setStemDirection(dirsmo399524);
smo396657.setStemDirection(dirsmo399524);
smo396658.setStemDirection(dirsmo399524);
const smo399524 = new VF.Beam([smo396655,smo396656,smo396657,smo396658]);
const dirsmo399527 = smo397260.getStemDirection();
smo397260.setStemDirection(dirsmo399527);
smo397261.setStemDirection(dirsmo399527);
smo397262.setStemDirection(dirsmo399527);
smo397263.setStemDirection(dirsmo399527);
const smo399527 = new VF.Beam([smo397260,smo397261,smo397262,smo397263]);
const dirsmo399528 = smo397264.getStemDirection();
smo397264.setStemDirection(dirsmo399528);
smo397265.setStemDirection(dirsmo399528);
smo397266.setStemDirection(dirsmo399528);
smo397267.setStemDirection(dirsmo399528);
const smo399528 = new VF.Beam([smo397264,smo397265,smo397266,smo397267]);
const dirsmo399529 = smo397268.getStemDirection();
smo397268.setStemDirection(dirsmo399529);
smo397269.setStemDirection(dirsmo399529);
smo397270.setStemDirection(dirsmo399529);
smo397271.setStemDirection(dirsmo399529);
const smo399529 = new VF.Beam([smo397268,smo397269,smo397270,smo397271]);
const dirsmo399530 = smo397272.getStemDirection();
smo397272.setStemDirection(dirsmo399530);
smo397273.setStemDirection(dirsmo399530);
smo397274.setStemDirection(dirsmo399530);
smo397275.setStemDirection(dirsmo399530);
const smo399530 = new VF.Beam([smo397272,smo397273,smo397274,smo397275]);
 
// formatting measures in staff group smo397598
fmtsmo39667410.format([smo396674v0,smo397291v0], 571);
const stavesmo396674 = new VF.Stave(50, 220.00000000000023, 627);
stavesmo396674.setAttribute('id', 'stavesmo396674');
stavesmo396674.setBegBarType(1);
stavesmo396674.addClef('treble');
stavesmo396674.setContext(context);
stavesmo396674.draw();
smo396674v0.draw(context, stavesmo396674);
smo399523.setContext(context);
smo399523.draw();
smo399524.setContext(context);
smo399524.draw();
const stavesmo397291 = new VF.Stave(50, 323.0000000000002, 627);
stavesmo397291.setAttribute('id', 'stavesmo397291');
stavesmo397291.setBegBarType(1);
stavesmo397291.addClef('treble');
stavesmo397291.setContext(context);
stavesmo397291.draw();
smo397291v0.draw(context, stavesmo397291);
smo399527.setContext(context);
smo399527.draw();
smo399528.setContext(context);
smo399528.draw();
smo399529.setContext(context);
smo399529.draw();
smo399530.setContext(context);
smo399530.draw();
const leftsmo397598stavesmo3966741 = new VF.StaveConnector(stavesmo396674, stavesmo397291).setType(3);
leftsmo397598stavesmo3966741.setContext(context).draw();
const fmtsmo39669711 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo396697v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396697v0ar = [];
const smo396675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo396675'] = smo396675;
smo396675.setAttribute('id', 'smo396675');
smo396697v0ar.push(smo396675);
const smo396676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
noteHash['smo396676'] = smo396676;
smo396676.setAttribute('id', 'smo396676');
const smo3966760acc = new VF.Accidental('#');
smo396676.addModifier(smo3966760acc, 0);
smo396697v0ar.push(smo396676);
const smo396677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
noteHash['smo396677'] = smo396677;
smo396677.setAttribute('id', 'smo396677');
const smo3966770acc = new VF.Accidental('#');
smo396677.addModifier(smo3966770acc, 0);
smo396697v0ar.push(smo396677);
const smo396678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
noteHash['smo396678'] = smo396678;
smo396678.setAttribute('id', 'smo396678');
smo396697v0ar.push(smo396678);
const smo396679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
noteHash['smo396679'] = smo396679;
smo396679.setAttribute('id', 'smo396679');
smo396697v0ar.push(smo396679);
const smo396680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
noteHash['smo396680'] = smo396680;
smo396680.setAttribute('id', 'smo396680');
smo396697v0ar.push(smo396680);
const smo396681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
noteHash['smo396681'] = smo396681;
smo396681.setAttribute('id', 'smo396681');
smo396697v0ar.push(smo396681);
smo396697v0.addTickables(smo396697v0ar)
fmtsmo39669711.joinVoices([smo396697v0]);
const fmtsmo39732311 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo397323v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397323v0ar = [];
const smo397292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397292'] = smo397292;
smo397292.setAttribute('id', 'smo397292');
smo397323v0ar.push(smo397292);
const smo397293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397293'] = smo397293;
smo397293.setAttribute('id', 'smo397293');
smo397323v0ar.push(smo397293);
const smo397294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397294'] = smo397294;
smo397294.setAttribute('id', 'smo397294');
smo397323v0ar.push(smo397294);
const smo397295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397295'] = smo397295;
smo397295.setAttribute('id', 'smo397295');
smo397323v0ar.push(smo397295);
const smo397296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397296'] = smo397296;
smo397296.setAttribute('id', 'smo397296');
smo397323v0ar.push(smo397296);
const smo397297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397297'] = smo397297;
smo397297.setAttribute('id', 'smo397297');
smo397323v0ar.push(smo397297);
const smo397298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397298'] = smo397298;
smo397298.setAttribute('id', 'smo397298');
smo397323v0ar.push(smo397298);
const smo397299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397299'] = smo397299;
smo397299.setAttribute('id', 'smo397299');
smo397323v0ar.push(smo397299);
const smo397300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397300'] = smo397300;
smo397300.setAttribute('id', 'smo397300');
smo397323v0ar.push(smo397300);
const smo397301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397301'] = smo397301;
smo397301.setAttribute('id', 'smo397301');
smo397323v0ar.push(smo397301);
const smo397302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397302'] = smo397302;
smo397302.setAttribute('id', 'smo397302');
smo397323v0ar.push(smo397302);
const smo397303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397303'] = smo397303;
smo397303.setAttribute('id', 'smo397303');
smo397323v0ar.push(smo397303);
const smo397304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
noteHash['smo397304'] = smo397304;
smo397304.setAttribute('id', 'smo397304');
const smo3973040acc = new VF.Accidental('#');
smo397304.addModifier(smo3973040acc, 0);
smo397323v0ar.push(smo397304);
const smo397305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397305'] = smo397305;
smo397305.setAttribute('id', 'smo397305');
smo397323v0ar.push(smo397305);
const smo397306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397306'] = smo397306;
smo397306.setAttribute('id', 'smo397306');
smo397323v0ar.push(smo397306);
const smo397307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397307'] = smo397307;
smo397307.setAttribute('id', 'smo397307');
smo397323v0ar.push(smo397307);
smo397323v0.addTickables(smo397323v0ar)
fmtsmo39732311.joinVoices([smo397323v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399533 = smo396675.getStemDirection();
smo396675.setStemDirection(dirsmo399533);
smo396676.setStemDirection(dirsmo399533);
smo396677.setStemDirection(dirsmo399533);
smo396678.setStemDirection(dirsmo399533);
const smo399533 = new VF.Beam([smo396675,smo396676,smo396677,smo396678]);
const dirsmo399534 = smo396679.getStemDirection();
smo396679.setStemDirection(dirsmo399534);
smo396680.setStemDirection(dirsmo399534);
const smo399534 = new VF.Beam([smo396679,smo396680]);
const dirsmo399537 = smo397292.getStemDirection();
smo397292.setStemDirection(dirsmo399537);
smo397293.setStemDirection(dirsmo399537);
smo397294.setStemDirection(dirsmo399537);
smo397295.setStemDirection(dirsmo399537);
const smo399537 = new VF.Beam([smo397292,smo397293,smo397294,smo397295]);
const dirsmo399538 = smo397296.getStemDirection();
smo397296.setStemDirection(dirsmo399538);
smo397297.setStemDirection(dirsmo399538);
smo397298.setStemDirection(dirsmo399538);
smo397299.setStemDirection(dirsmo399538);
const smo399538 = new VF.Beam([smo397296,smo397297,smo397298,smo397299]);
const dirsmo399539 = smo397300.getStemDirection();
smo397300.setStemDirection(dirsmo399539);
smo397301.setStemDirection(dirsmo399539);
smo397302.setStemDirection(dirsmo399539);
smo397303.setStemDirection(dirsmo399539);
const smo399539 = new VF.Beam([smo397300,smo397301,smo397302,smo397303]);
const dirsmo399540 = smo397304.getStemDirection();
smo397304.setStemDirection(dirsmo399540);
smo397305.setStemDirection(dirsmo399540);
smo397306.setStemDirection(dirsmo399540);
smo397307.setStemDirection(dirsmo399540);
const smo399540 = new VF.Beam([smo397304,smo397305,smo397306,smo397307]);
 
// formatting measures in staff group smo397598
fmtsmo39669711.format([smo396697v0,smo397323v0], 568);
const stavesmo396697 = new VF.Stave(677, 220.00000000000023, 582);
stavesmo396697.setAttribute('id', 'stavesmo396697');
stavesmo396697.setBegBarType(VF.Barline.type.NONE);
stavesmo396697.setContext(context);
stavesmo396697.draw();
smo396697v0.draw(context, stavesmo396697);
smo399533.setContext(context);
smo399533.draw();
smo399534.setContext(context);
smo399534.draw();
const stavesmo397323 = new VF.Stave(677, 323.0000000000002, 582);
stavesmo397323.setAttribute('id', 'stavesmo397323');
stavesmo397323.setBegBarType(VF.Barline.type.NONE);
stavesmo397323.setContext(context);
stavesmo397323.draw();
smo397323v0.draw(context, stavesmo397323);
smo399537.setContext(context);
smo399537.draw();
smo399538.setContext(context);
smo399538.draw();
smo399539.setContext(context);
smo399539.draw();
smo399540.setContext(context);
smo399540.draw();
const rightsmo397598stavesmo3966971 = new VF.StaveConnector(stavesmo396697, stavesmo397323).setType(0);
rightsmo397598stavesmo3966971.setContext(context).draw();
const fmtsmo39672912 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo396729v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396729v0ar = [];
const smo396698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396698'] = smo396698;
smo396698.setAttribute('id', 'smo396698');
smo396729v0ar.push(smo396698);
const smo396699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo396699'] = smo396699;
smo396699.setAttribute('id', 'smo396699');
smo396729v0ar.push(smo396699);
const smo396700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo396700'] = smo396700;
smo396700.setAttribute('id', 'smo396700');
const smo3967000acc = new VF.Accidental('#');
smo396700.addModifier(smo3967000acc, 0);
smo396729v0ar.push(smo396700);
const smo396701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo396701'] = smo396701;
smo396701.setAttribute('id', 'smo396701');
const smo3967010acc = new VF.Accidental('#');
smo396701.addModifier(smo3967010acc, 0);
smo396729v0ar.push(smo396701);
const smo396702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo396702'] = smo396702;
smo396702.setAttribute('id', 'smo396702');
smo396729v0ar.push(smo396702);
const smo396703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo396703'] = smo396703;
smo396703.setAttribute('id', 'smo396703');
smo396729v0ar.push(smo396703);
const smo396704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo396704'] = smo396704;
smo396704.setAttribute('id', 'smo396704');
smo396729v0ar.push(smo396704);
const smo396705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo396705'] = smo396705;
smo396705.setAttribute('id', 'smo396705');
smo396729v0ar.push(smo396705);
const smo396706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396706'] = smo396706;
smo396706.setAttribute('id', 'smo396706');
smo396729v0ar.push(smo396706);
const smo396707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396707'] = smo396707;
smo396707.setAttribute('id', 'smo396707');
smo396729v0ar.push(smo396707);
const smo396708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396708'] = smo396708;
smo396708.setAttribute('id', 'smo396708');
smo396729v0ar.push(smo396708);
const smo396709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396709'] = smo396709;
smo396709.setAttribute('id', 'smo396709');
smo396729v0ar.push(smo396709);
const smo396710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396710'] = smo396710;
smo396710.setAttribute('id', 'smo396710');
smo396729v0ar.push(smo396710);
const smo396711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396711'] = smo396711;
smo396711.setAttribute('id', 'smo396711');
smo396729v0ar.push(smo396711);
const smo396712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo396712'] = smo396712;
smo396712.setAttribute('id', 'smo396712');
smo396729v0ar.push(smo396712);
const smo396713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396713'] = smo396713;
smo396713.setAttribute('id', 'smo396713');
smo396729v0ar.push(smo396713);
smo396729v0.addTickables(smo396729v0ar)
fmtsmo39672912.joinVoices([smo396729v0]);
const fmtsmo39735212 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo397352v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397352v0ar = [];
const smo397324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397324'] = smo397324;
smo397324.setAttribute('id', 'smo397324');
smo397352v0ar.push(smo397324);
const smo397325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397325'] = smo397325;
smo397325.setAttribute('id', 'smo397325');
smo397352v0ar.push(smo397325);
const smo397326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397326'] = smo397326;
smo397326.setAttribute('id', 'smo397326');
smo397326.addModifier(new VF.Dot(), 0);
const smo397327 = new VF.Ornament('mordent_inverted');
smo397326.addModifier(smo397327, 0);
smo397352v0ar.push(smo397326);
const smo397328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397328'] = smo397328;
smo397328.setAttribute('id', 'smo397328');
smo397352v0ar.push(smo397328);
const smo397329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397329'] = smo397329;
smo397329.setAttribute('id', 'smo397329');
smo397352v0ar.push(smo397329);
const smo397330 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397330'] = smo397330;
smo397330.setAttribute('id', 'smo397330');
smo397352v0ar.push(smo397330);
const smo397331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397331'] = smo397331;
smo397331.setAttribute('id', 'smo397331');
smo397352v0ar.push(smo397331);
const smo397332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo397332'] = smo397332;
smo397332.setAttribute('id', 'smo397332');
const smo3973320acc = new VF.Accidental('n');
smo3973320acc.setAsCautionary();
smo397332.addModifier(smo3973320acc, 0);
smo397352v0ar.push(smo397332);
const smo397333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/3/n"]}'))
noteHash['smo397333'] = smo397333;
smo397333.setAttribute('id', 'smo397333');
const smo3973330acc = new VF.Accidental('#');
smo397333.addModifier(smo3973330acc, 0);
smo397352v0ar.push(smo397333);
const smo397334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397334'] = smo397334;
smo397334.setAttribute('id', 'smo397334');
smo397352v0ar.push(smo397334);
const smo397335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/3/n"]}'))
noteHash['smo397335'] = smo397335;
smo397335.setAttribute('id', 'smo397335');
const smo3973350acc = new VF.Accidental('#');
smo397335.addModifier(smo3973350acc, 0);
smo397352v0ar.push(smo397335);
const smo397336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397336'] = smo397336;
smo397336.setAttribute('id', 'smo397336');
smo397352v0ar.push(smo397336);
smo397352v0.addTickables(smo397352v0ar)
fmtsmo39735212.joinVoices([smo397352v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399555 = smo396698.getStemDirection();
smo396698.setStemDirection(dirsmo399555);
smo396699.setStemDirection(dirsmo399555);
smo396700.setStemDirection(dirsmo399555);
smo396701.setStemDirection(dirsmo399555);
const smo399555 = new VF.Beam([smo396698,smo396699,smo396700,smo396701]);
const dirsmo399556 = smo396702.getStemDirection();
smo396702.setStemDirection(dirsmo399556);
smo396703.setStemDirection(dirsmo399556);
smo396704.setStemDirection(dirsmo399556);
smo396705.setStemDirection(dirsmo399556);
const smo399556 = new VF.Beam([smo396702,smo396703,smo396704,smo396705]);
const dirsmo399557 = smo396706.getStemDirection();
smo396706.setStemDirection(dirsmo399557);
smo396707.setStemDirection(dirsmo399557);
smo396708.setStemDirection(dirsmo399557);
smo396709.setStemDirection(dirsmo399557);
const smo399557 = new VF.Beam([smo396706,smo396707,smo396708,smo396709]);
const dirsmo399558 = smo396710.getStemDirection();
smo396710.setStemDirection(dirsmo399558);
smo396711.setStemDirection(dirsmo399558);
smo396712.setStemDirection(dirsmo399558);
smo396713.setStemDirection(dirsmo399558);
const smo399558 = new VF.Beam([smo396710,smo396711,smo396712,smo396713]);
const dirsmo399561 = smo397324.getStemDirection();
smo397324.setStemDirection(dirsmo399561);
smo397325.setStemDirection(dirsmo399561);
const smo399561 = new VF.Beam([smo397324,smo397325]);
const dirsmo399562 = smo397326.getStemDirection();
smo397326.setStemDirection(dirsmo399562);
smo397328.setStemDirection(dirsmo399562);
const smo399562 = new VF.Beam([smo397326,smo397328]);
const dirsmo399563 = smo397329.getStemDirection();
smo397329.setStemDirection(dirsmo399563);
smo397330.setStemDirection(dirsmo399563);
smo397331.setStemDirection(dirsmo399563);
smo397332.setStemDirection(dirsmo399563);
const smo399563 = new VF.Beam([smo397329,smo397330,smo397331,smo397332]);
const dirsmo399564 = smo397333.getStemDirection();
smo397333.setStemDirection(dirsmo399564);
smo397334.setStemDirection(dirsmo399564);
smo397335.setStemDirection(dirsmo399564);
smo397336.setStemDirection(dirsmo399564);
const smo399564 = new VF.Beam([smo397333,smo397334,smo397335,smo397336]);
 
// formatting measures in staff group smo397598
fmtsmo39672912.format([smo396729v0,smo397352v0], 623);
const stavesmo396729 = new VF.Stave(50, 483.0000000000002, 678);
stavesmo396729.setAttribute('id', 'stavesmo396729');
stavesmo396729.setBegBarType(1);
stavesmo396729.addClef('treble');
stavesmo396729.setContext(context);
stavesmo396729.draw();
smo396729v0.draw(context, stavesmo396729);
smo399555.setContext(context);
smo399555.draw();
smo399556.setContext(context);
smo399556.draw();
smo399557.setContext(context);
smo399557.draw();
smo399558.setContext(context);
smo399558.draw();
const stavesmo397352 = new VF.Stave(50, 627.0000000000002, 678);
stavesmo397352.setAttribute('id', 'stavesmo397352');
stavesmo397352.setBegBarType(1);
stavesmo397352.addClef('bass');
stavesmo397352.setContext(context);
stavesmo397352.draw();
smo397352v0.draw(context, stavesmo397352);
smo399561.setContext(context);
smo399561.draw();
smo399562.setContext(context);
smo399562.draw();
smo399563.setContext(context);
smo399563.draw();
smo399564.setContext(context);
smo399564.draw();
const leftsmo397598stavesmo3967291 = new VF.StaveConnector(stavesmo396729, stavesmo397352).setType(3);
leftsmo397598stavesmo3967291.setContext(context).draw();
const fmtsmo39676113 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo396761v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396761v0ar = [];
const smo396730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396730'] = smo396730;
smo396730.setAttribute('id', 'smo396730');
smo396761v0ar.push(smo396730);
const smo396731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396731'] = smo396731;
smo396731.setAttribute('id', 'smo396731');
smo396761v0ar.push(smo396731);
const smo396732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/5/n"]}'))
noteHash['smo396732'] = smo396732;
smo396732.setAttribute('id', 'smo396732');
const smo3967320acc = new VF.Accidental('#');
smo396732.addModifier(smo3967320acc, 0);
smo396761v0ar.push(smo396732);
const smo396733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo396733'] = smo396733;
smo396733.setAttribute('id', 'smo396733');
smo396761v0ar.push(smo396733);
const smo396734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396734'] = smo396734;
smo396734.setAttribute('id', 'smo396734');
smo396761v0ar.push(smo396734);
const smo396735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396735'] = smo396735;
smo396735.setAttribute('id', 'smo396735');
smo396761v0ar.push(smo396735);
const smo396736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396736'] = smo396736;
smo396736.setAttribute('id', 'smo396736');
smo396761v0ar.push(smo396736);
const smo396737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396737'] = smo396737;
smo396737.setAttribute('id', 'smo396737');
smo396761v0ar.push(smo396737);
const smo396738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo396738'] = smo396738;
smo396738.setAttribute('id', 'smo396738');
const smo3967380acc = new VF.Accidental('#');
smo396738.addModifier(smo3967380acc, 0);
smo396761v0ar.push(smo396738);
const smo396739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396739'] = smo396739;
smo396739.setAttribute('id', 'smo396739');
smo396761v0ar.push(smo396739);
const smo396740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396740'] = smo396740;
smo396740.setAttribute('id', 'smo396740');
smo396761v0ar.push(smo396740);
const smo396741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396741'] = smo396741;
smo396741.setAttribute('id', 'smo396741');
smo396761v0ar.push(smo396741);
const smo396742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396742'] = smo396742;
smo396742.setAttribute('id', 'smo396742');
const smo396743 = new VF.Ornament('mordent');
smo396742.addModifier(smo396743, 0);
smo396761v0ar.push(smo396742);
const smo396744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo396744'] = smo396744;
smo396744.setAttribute('id', 'smo396744');
smo396761v0ar.push(smo396744);
const smo396745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo396745'] = smo396745;
smo396745.setAttribute('id', 'smo396745');
smo396761v0ar.push(smo396745);
smo396761v0.addTickables(smo396761v0ar)
fmtsmo39676113.joinVoices([smo396761v0]);
const fmtsmo39738013 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo397380v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397380v0ar = [];
const smo397353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397353'] = smo397353;
smo397353.setAttribute('id', 'smo397353');
smo397380v0ar.push(smo397353);
const smo397354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397354'] = smo397354;
smo397354.setAttribute('id', 'smo397354');
smo397380v0ar.push(smo397354);
const smo397355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397355'] = smo397355;
smo397355.setAttribute('id', 'smo397355');
smo397380v0ar.push(smo397355);
const smo397356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397356'] = smo397356;
smo397356.setAttribute('id', 'smo397356');
smo397380v0ar.push(smo397356);
const smo397357 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397357'] = smo397357;
smo397357.setAttribute('id', 'smo397357');
smo397380v0ar.push(smo397357);
const smo397358 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397358'] = smo397358;
smo397358.setAttribute('id', 'smo397358');
smo397380v0ar.push(smo397358);
const smo397359 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397359'] = smo397359;
smo397359.setAttribute('id', 'smo397359');
smo397380v0ar.push(smo397359);
const smo397360 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397360'] = smo397360;
smo397360.setAttribute('id', 'smo397360');
smo397380v0ar.push(smo397360);
const smo397361 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397361'] = smo397361;
smo397361.setAttribute('id', 'smo397361');
smo397380v0ar.push(smo397361);
const smo397362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397362'] = smo397362;
smo397362.setAttribute('id', 'smo397362');
smo397380v0ar.push(smo397362);
const smo397363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397363'] = smo397363;
smo397363.setAttribute('id', 'smo397363');
smo397380v0ar.push(smo397363);
const smo397364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397364'] = smo397364;
smo397364.setAttribute('id', 'smo397364');
smo397380v0ar.push(smo397364);
smo397380v0.addTickables(smo397380v0ar)
fmtsmo39738013.joinVoices([smo397380v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399567 = smo396730.getStemDirection();
smo396730.setStemDirection(dirsmo399567);
smo396731.setStemDirection(dirsmo399567);
smo396732.setStemDirection(dirsmo399567);
smo396733.setStemDirection(dirsmo399567);
const smo399567 = new VF.Beam([smo396730,smo396731,smo396732,smo396733]);
const dirsmo399568 = smo396734.getStemDirection();
smo396734.setStemDirection(dirsmo399568);
smo396735.setStemDirection(dirsmo399568);
smo396736.setStemDirection(dirsmo399568);
smo396737.setStemDirection(dirsmo399568);
const smo399568 = new VF.Beam([smo396734,smo396735,smo396736,smo396737]);
const dirsmo399569 = smo396738.getStemDirection();
smo396738.setStemDirection(dirsmo399569);
smo396739.setStemDirection(dirsmo399569);
smo396740.setStemDirection(dirsmo399569);
smo396741.setStemDirection(dirsmo399569);
const smo399569 = new VF.Beam([smo396738,smo396739,smo396740,smo396741]);
const dirsmo399570 = smo396742.getStemDirection();
smo396742.setStemDirection(dirsmo399570);
smo396744.setStemDirection(dirsmo399570);
smo396745.setStemDirection(dirsmo399570);
const smo399570 = new VF.Beam([smo396742,smo396744,smo396745]);
const dirsmo399573 = smo397353.getStemDirection();
smo397353.setStemDirection(dirsmo399573);
smo397354.setStemDirection(dirsmo399573);
smo397355.setStemDirection(dirsmo399573);
smo397356.setStemDirection(dirsmo399573);
const smo399573 = new VF.Beam([smo397353,smo397354,smo397355,smo397356]);
const dirsmo399574 = smo397357.getStemDirection();
smo397357.setStemDirection(dirsmo399574);
smo397358.setStemDirection(dirsmo399574);
smo397359.setStemDirection(dirsmo399574);
smo397360.setStemDirection(dirsmo399574);
const smo399574 = new VF.Beam([smo397357,smo397358,smo397359,smo397360]);
const dirsmo399575 = smo397361.getStemDirection();
smo397361.setStemDirection(dirsmo399575);
smo397362.setStemDirection(dirsmo399575);
const smo399575 = new VF.Beam([smo397361,smo397362]);
const dirsmo399576 = smo397363.getStemDirection();
smo397363.setStemDirection(dirsmo399576);
smo397364.setStemDirection(dirsmo399576);
const smo399576 = new VF.Beam([smo397363,smo397364]);
 
// formatting measures in staff group smo397598
fmtsmo39676113.format([smo396761v0,smo397380v0], 518);
const stavesmo396761 = new VF.Stave(728, 483.0000000000002, 532);
stavesmo396761.setAttribute('id', 'stavesmo396761');
stavesmo396761.setBegBarType(VF.Barline.type.NONE);
stavesmo396761.setContext(context);
stavesmo396761.draw();
smo396761v0.draw(context, stavesmo396761);
smo399567.setContext(context);
smo399567.draw();
smo399568.setContext(context);
smo399568.draw();
smo399569.setContext(context);
smo399569.draw();
smo399570.setContext(context);
smo399570.draw();
const stavesmo397380 = new VF.Stave(728, 627.0000000000002, 532);
stavesmo397380.setAttribute('id', 'stavesmo397380');
stavesmo397380.setBegBarType(VF.Barline.type.NONE);
stavesmo397380.setContext(context);
stavesmo397380.draw();
smo397380v0.draw(context, stavesmo397380);
smo399573.setContext(context);
smo399573.draw();
smo399574.setContext(context);
smo399574.draw();
smo399575.setContext(context);
smo399575.draw();
smo399576.setContext(context);
smo399576.draw();
const rightsmo397598stavesmo3967611 = new VF.StaveConnector(stavesmo396761, stavesmo397380).setType(0);
rightsmo397598stavesmo3967611.setContext(context).draw();
const fmtsmo39678714 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo396787v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396787v0ar = [];
const smo396762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo396762'] = smo396762;
smo396762.setAttribute('id', 'smo396762');
const  smo399807 = new VF.Articulation('a.').setPosition(4);
smo396762.addModifier(smo399807, 0);
smo396787v0ar.push(smo396762);
const smo396764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396764'] = smo396764;
smo396764.setAttribute('id', 'smo396764');
smo396787v0ar.push(smo396764);
const smo396765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396765'] = smo396765;
smo396765.setAttribute('id', 'smo396765');
smo396787v0ar.push(smo396765);
const smo396766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396766'] = smo396766;
smo396766.setAttribute('id', 'smo396766');
smo396787v0ar.push(smo396766);
const smo396767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396767'] = smo396767;
smo396767.setAttribute('id', 'smo396767');
smo396787v0ar.push(smo396767);
const smo396768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396768'] = smo396768;
smo396768.setAttribute('id', 'smo396768');
smo396787v0ar.push(smo396768);
const smo396769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396769'] = smo396769;
smo396769.setAttribute('id', 'smo396769');
smo396787v0ar.push(smo396769);
const smo396770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396770'] = smo396770;
smo396770.setAttribute('id', 'smo396770');
smo396787v0ar.push(smo396770);
const smo396771 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396771'] = smo396771;
smo396771.setAttribute('id', 'smo396771');
smo396787v0ar.push(smo396771);
smo396787v0.addTickables(smo396787v0ar)
fmtsmo39678714.joinVoices([smo396787v0]);
const fmtsmo39740714 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo397407v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397407v0ar = [];
const smo397381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397381'] = smo397381;
smo397381.setAttribute('id', 'smo397381');
smo397407v0ar.push(smo397381);
const smo397382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397382'] = smo397382;
smo397382.setAttribute('id', 'smo397382');
smo397407v0ar.push(smo397382);
const smo397383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo397383'] = smo397383;
smo397383.setAttribute('id', 'smo397383');
smo397407v0ar.push(smo397383);
const smo397384 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo397384'] = smo397384;
smo397384.setAttribute('id', 'smo397384');
smo397407v0ar.push(smo397384);
const smo397385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397385'] = smo397385;
smo397385.setAttribute('id', 'smo397385');
smo397407v0ar.push(smo397385);
const smo397386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397386'] = smo397386;
smo397386.setAttribute('id', 'smo397386');
smo397407v0ar.push(smo397386);
const smo397387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397387'] = smo397387;
smo397387.setAttribute('id', 'smo397387');
smo397407v0ar.push(smo397387);
const smo397388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397388'] = smo397388;
smo397388.setAttribute('id', 'smo397388');
smo397407v0ar.push(smo397388);
const smo397389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397389'] = smo397389;
smo397389.setAttribute('id', 'smo397389');
smo397407v0ar.push(smo397389);
const smo397390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo397390'] = smo397390;
smo397390.setAttribute('id', 'smo397390');
const smo3973900acc = new VF.Accidental('#');
smo397390.addModifier(smo3973900acc, 0);
smo397407v0ar.push(smo397390);
const smo397391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397391'] = smo397391;
smo397391.setAttribute('id', 'smo397391');
smo397407v0ar.push(smo397391);
smo397407v0.addTickables(smo397407v0ar)
fmtsmo39740714.joinVoices([smo397407v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399588 = smo396762.getStemDirection();
smo396762.setStemDirection(dirsmo399588);
smo396764.setStemDirection(dirsmo399588);
smo396765.setStemDirection(dirsmo399588);
smo396766.setStemDirection(dirsmo399588);
const smo399588 = new VF.Beam([smo396762,smo396764,smo396765,smo396766]);
const dirsmo399589 = smo396767.getStemDirection();
smo396767.setStemDirection(dirsmo399589);
smo396768.setStemDirection(dirsmo399589);
smo396769.setStemDirection(dirsmo399589);
smo396770.setStemDirection(dirsmo399589);
const smo399589 = new VF.Beam([smo396767,smo396768,smo396769,smo396770]);
const dirsmo399592 = smo397381.getStemDirection();
smo397381.setStemDirection(dirsmo399592);
smo397382.setStemDirection(dirsmo399592);
const smo399592 = new VF.Beam([smo397381,smo397382]);
const dirsmo399593 = smo397385.getStemDirection();
smo397385.setStemDirection(dirsmo399593);
smo397386.setStemDirection(dirsmo399593);
smo397387.setStemDirection(dirsmo399593);
const smo399593 = new VF.Beam([smo397385,smo397386,smo397387]);
const dirsmo399594 = smo397388.getStemDirection();
smo397388.setStemDirection(dirsmo399594);
smo397389.setStemDirection(dirsmo399594);
smo397390.setStemDirection(dirsmo399594);
smo397391.setStemDirection(dirsmo399594);
const smo399594 = new VF.Beam([smo397388,smo397389,smo397390,smo397391]);
 
// formatting measures in staff group smo397598
fmtsmo39678714.format([smo396787v0,smo397407v0], 568);
const stavesmo396787 = new VF.Stave(50, 793.0000000000002, 624);
stavesmo396787.setAttribute('id', 'stavesmo396787');
stavesmo396787.setBegBarType(1);
stavesmo396787.addClef('treble');
stavesmo396787.setContext(context);
stavesmo396787.draw();
smo396787v0.draw(context, stavesmo396787);
smo399588.setContext(context);
smo399588.draw();
smo399589.setContext(context);
smo399589.draw();
const stavesmo397407 = new VF.Stave(50, 927.0000000000002, 624);
stavesmo397407.setAttribute('id', 'stavesmo397407');
stavesmo397407.setBegBarType(1);
stavesmo397407.addClef('bass');
stavesmo397407.setContext(context);
stavesmo397407.draw();
smo397407v0.draw(context, stavesmo397407);
smo399592.setContext(context);
smo399592.draw();
smo399593.setContext(context);
smo399593.draw();
smo399594.setContext(context);
smo399594.draw();
const leftsmo397598stavesmo3967871 = new VF.StaveConnector(stavesmo396787, stavesmo397407).setType(3);
leftsmo397598stavesmo3967871.setContext(context).draw();
const fmtsmo39681215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo396812v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396812v0ar = [];
const smo396788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo396788'] = smo396788;
smo396788.setAttribute('id', 'smo396788');
smo396812v0ar.push(smo396788);
const smo396789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo396789'] = smo396789;
smo396789.setAttribute('id', 'smo396789');
smo396812v0ar.push(smo396789);
const smo396790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo396790'] = smo396790;
smo396790.setAttribute('id', 'smo396790');
smo396812v0ar.push(smo396790);
const smo396791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo396791'] = smo396791;
smo396791.setAttribute('id', 'smo396791');
smo396812v0ar.push(smo396791);
const smo396792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
noteHash['smo396792'] = smo396792;
smo396792.setAttribute('id', 'smo396792');
smo396812v0ar.push(smo396792);
const smo396793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
noteHash['smo396793'] = smo396793;
smo396793.setAttribute('id', 'smo396793');
smo396812v0ar.push(smo396793);
const smo396794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
noteHash['smo396794'] = smo396794;
smo396794.setAttribute('id', 'smo396794');
smo396812v0ar.push(smo396794);
const smo396795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
noteHash['smo396795'] = smo396795;
smo396795.setAttribute('id', 'smo396795');
smo396812v0ar.push(smo396795);
const smo396796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396796'] = smo396796;
smo396796.setAttribute('id', 'smo396796');
smo396812v0ar.push(smo396796);
smo396812v0.addTickables(smo396812v0ar)
fmtsmo39681215.joinVoices([smo396812v0]);
const fmtsmo39743215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo397432v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397432v0ar = [];
const smo397408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397408'] = smo397408;
smo397408.setAttribute('id', 'smo397408');
smo397432v0ar.push(smo397408);
const smo397409 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397409'] = smo397409;
smo397409.setAttribute('id', 'smo397409');
smo397432v0ar.push(smo397409);
const smo397410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397410'] = smo397410;
smo397410.setAttribute('id', 'smo397410');
smo397432v0ar.push(smo397410);
const smo397411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397411'] = smo397411;
smo397411.setAttribute('id', 'smo397411');
smo397432v0ar.push(smo397411);
const smo397412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397412'] = smo397412;
smo397412.setAttribute('id', 'smo397412');
smo397432v0ar.push(smo397412);
const smo397413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397413'] = smo397413;
smo397413.setAttribute('id', 'smo397413');
smo397432v0ar.push(smo397413);
const smo397414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397414'] = smo397414;
smo397414.setAttribute('id', 'smo397414');
smo397432v0ar.push(smo397414);
const smo397415 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397415'] = smo397415;
smo397415.setAttribute('id', 'smo397415');
smo397432v0ar.push(smo397415);
const smo397416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397416'] = smo397416;
smo397416.setAttribute('id', 'smo397416');
smo397432v0ar.push(smo397416);
smo397432v0.addTickables(smo397432v0ar)
fmtsmo39743215.joinVoices([smo397432v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399597 = smo396788.getStemDirection();
smo396788.setStemDirection(dirsmo399597);
smo396789.setStemDirection(dirsmo399597);
smo396790.setStemDirection(dirsmo399597);
smo396791.setStemDirection(dirsmo399597);
const smo399597 = new VF.Beam([smo396788,smo396789,smo396790,smo396791]);
const dirsmo399598 = smo396792.getStemDirection();
smo396792.setStemDirection(dirsmo399598);
smo396793.setStemDirection(dirsmo399598);
smo396794.setStemDirection(dirsmo399598);
smo396795.setStemDirection(dirsmo399598);
const smo399598 = new VF.Beam([smo396792,smo396793,smo396794,smo396795]);
const dirsmo399601 = smo397409.getStemDirection();
smo397409.setStemDirection(dirsmo399601);
smo397410.setStemDirection(dirsmo399601);
smo397411.setStemDirection(dirsmo399601);
smo397412.setStemDirection(dirsmo399601);
const smo399601 = new VF.Beam([smo397409,smo397410,smo397411,smo397412]);
const dirsmo399602 = smo397413.getStemDirection();
smo397413.setStemDirection(dirsmo399602);
smo397414.setStemDirection(dirsmo399602);
smo397415.setStemDirection(dirsmo399602);
smo397416.setStemDirection(dirsmo399602);
const smo399602 = new VF.Beam([smo397413,smo397414,smo397415,smo397416]);
 
// formatting measures in staff group smo397598
fmtsmo39681215.format([smo396812v0,smo397432v0], 572);
const stavesmo396812 = new VF.Stave(674, 793.0000000000002, 586);
stavesmo396812.setAttribute('id', 'stavesmo396812');
stavesmo396812.setBegBarType(VF.Barline.type.NONE);
stavesmo396812.setContext(context);
stavesmo396812.draw();
smo396812v0.draw(context, stavesmo396812);
smo399597.setContext(context);
smo399597.draw();
smo399598.setContext(context);
smo399598.draw();
const stavesmo397432 = new VF.Stave(674, 927.0000000000002, 586);
stavesmo397432.setAttribute('id', 'stavesmo397432');
stavesmo397432.setBegBarType(VF.Barline.type.NONE);
stavesmo397432.setContext(context);
stavesmo397432.draw();
smo397432v0.draw(context, stavesmo397432);
smo399601.setContext(context);
smo399601.draw();
smo399602.setContext(context);
smo399602.draw();
const rightsmo397598stavesmo3968121 = new VF.StaveConnector(stavesmo396812, stavesmo397432).setType(0);
rightsmo397598stavesmo3968121.setContext(context).draw();
const fmtsmo39683816 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo396838v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396838v0ar = [];
const smo396813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396813'] = smo396813;
smo396813.setAttribute('id', 'smo396813');
const  smo399816 = new VF.Articulation('a.').setPosition(3);
smo396813.addModifier(smo399816, 0);
smo396838v0ar.push(smo396813);
const smo396815 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396815'] = smo396815;
smo396815.setAttribute('id', 'smo396815');
smo396838v0ar.push(smo396815);
const smo396816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396816'] = smo396816;
smo396816.setAttribute('id', 'smo396816');
smo396838v0ar.push(smo396816);
const smo396817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396817'] = smo396817;
smo396817.setAttribute('id', 'smo396817');
smo396838v0ar.push(smo396817);
const smo396818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396818'] = smo396818;
smo396818.setAttribute('id', 'smo396818');
smo396838v0ar.push(smo396818);
const smo396819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396819'] = smo396819;
smo396819.setAttribute('id', 'smo396819');
smo396838v0ar.push(smo396819);
const smo396820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396820'] = smo396820;
smo396820.setAttribute('id', 'smo396820');
smo396838v0ar.push(smo396820);
const smo396821 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396821'] = smo396821;
smo396821.setAttribute('id', 'smo396821');
smo396838v0ar.push(smo396821);
const smo396822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396822'] = smo396822;
smo396822.setAttribute('id', 'smo396822');
smo396838v0ar.push(smo396822);
smo396838v0.addTickables(smo396838v0ar)
fmtsmo39683816.joinVoices([smo396838v0]);
const fmtsmo39745716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo397457v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397457v0ar = [];
const smo397433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397433'] = smo397433;
smo397433.setAttribute('id', 'smo397433');
smo397457v0ar.push(smo397433);
const smo397434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397434'] = smo397434;
smo397434.setAttribute('id', 'smo397434');
smo397457v0ar.push(smo397434);
const smo397435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397435'] = smo397435;
smo397435.setAttribute('id', 'smo397435');
smo397457v0ar.push(smo397435);
const smo397436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397436'] = smo397436;
smo397436.setAttribute('id', 'smo397436');
smo397457v0ar.push(smo397436);
const smo397437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397437'] = smo397437;
smo397437.setAttribute('id', 'smo397437');
smo397457v0ar.push(smo397437);
const smo397438 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397438'] = smo397438;
smo397438.setAttribute('id', 'smo397438');
smo397457v0ar.push(smo397438);
const smo397439 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397439'] = smo397439;
smo397439.setAttribute('id', 'smo397439');
smo397457v0ar.push(smo397439);
const smo397440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
noteHash['smo397440'] = smo397440;
smo397440.setAttribute('id', 'smo397440');
smo397457v0ar.push(smo397440);
const smo397441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397441'] = smo397441;
smo397441.setAttribute('id', 'smo397441');
smo397457v0ar.push(smo397441);
smo397457v0.addTickables(smo397457v0ar)
fmtsmo39745716.joinVoices([smo397457v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399613 = smo396813.getStemDirection();
smo396813.setStemDirection(dirsmo399613);
smo396815.setStemDirection(dirsmo399613);
smo396816.setStemDirection(dirsmo399613);
smo396817.setStemDirection(dirsmo399613);
const smo399613 = new VF.Beam([smo396813,smo396815,smo396816,smo396817]);
const dirsmo399614 = smo396818.getStemDirection();
smo396818.setStemDirection(dirsmo399614);
smo396819.setStemDirection(dirsmo399614);
smo396820.setStemDirection(dirsmo399614);
smo396821.setStemDirection(dirsmo399614);
const smo399614 = new VF.Beam([smo396818,smo396819,smo396820,smo396821]);
const dirsmo399617 = smo397434.getStemDirection();
smo397434.setStemDirection(dirsmo399617);
smo397435.setStemDirection(dirsmo399617);
smo397436.setStemDirection(dirsmo399617);
smo397437.setStemDirection(dirsmo399617);
const smo399617 = new VF.Beam([smo397434,smo397435,smo397436,smo397437]);
const dirsmo399618 = smo397438.getStemDirection();
smo397438.setStemDirection(dirsmo399618);
smo397439.setStemDirection(dirsmo399618);
smo397440.setStemDirection(dirsmo399618);
smo397441.setStemDirection(dirsmo399618);
const smo399618 = new VF.Beam([smo397438,smo397439,smo397440,smo397441]);
 
// formatting measures in staff group smo397598
fmtsmo39683816.format([smo396838v0,smo397457v0], 561);
const stavesmo396838 = new VF.Stave(50, 1058.0000000000002, 616);
stavesmo396838.setAttribute('id', 'stavesmo396838');
stavesmo396838.setBegBarType(1);
stavesmo396838.addClef('treble');
stavesmo396838.setContext(context);
stavesmo396838.draw();
smo396838v0.draw(context, stavesmo396838);
smo399613.setContext(context);
smo399613.draw();
smo399614.setContext(context);
smo399614.draw();
const stavesmo397457 = new VF.Stave(50, 1177.0000000000002, 616);
stavesmo397457.setAttribute('id', 'stavesmo397457');
stavesmo397457.setBegBarType(1);
stavesmo397457.addClef('bass');
stavesmo397457.setContext(context);
stavesmo397457.draw();
smo397457v0.draw(context, stavesmo397457);
smo399617.setContext(context);
smo399617.draw();
smo399618.setContext(context);
smo399618.draw();
const leftsmo397598stavesmo3968381 = new VF.StaveConnector(stavesmo396838, stavesmo397457).setType(3);
leftsmo397598stavesmo3968381.setContext(context).draw();
const fmtsmo39686317 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo396863v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396863v0ar = [];
const smo396839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396839'] = smo396839;
smo396839.setAttribute('id', 'smo396839');
smo396863v0ar.push(smo396839);
const smo396840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396840'] = smo396840;
smo396840.setAttribute('id', 'smo396840');
smo396863v0ar.push(smo396840);
const smo396841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396841'] = smo396841;
smo396841.setAttribute('id', 'smo396841');
smo396863v0ar.push(smo396841);
const smo396842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396842'] = smo396842;
smo396842.setAttribute('id', 'smo396842');
smo396863v0ar.push(smo396842);
const smo396843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396843'] = smo396843;
smo396843.setAttribute('id', 'smo396843');
smo396863v0ar.push(smo396843);
const smo396844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396844'] = smo396844;
smo396844.setAttribute('id', 'smo396844');
smo396863v0ar.push(smo396844);
const smo396845 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396845'] = smo396845;
smo396845.setAttribute('id', 'smo396845');
smo396863v0ar.push(smo396845);
const smo396846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396846'] = smo396846;
smo396846.setAttribute('id', 'smo396846');
smo396863v0ar.push(smo396846);
const smo396847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396847'] = smo396847;
smo396847.setAttribute('id', 'smo396847');
smo396863v0ar.push(smo396847);
smo396863v0.addTickables(smo396863v0ar)
fmtsmo39686317.joinVoices([smo396863v0]);
const fmtsmo39748217 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo397482v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397482v0ar = [];
const smo397458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397458'] = smo397458;
smo397458.setAttribute('id', 'smo397458');
smo397482v0ar.push(smo397458);
const smo397459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397459'] = smo397459;
smo397459.setAttribute('id', 'smo397459');
smo397482v0ar.push(smo397459);
const smo397460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo397460'] = smo397460;
smo397460.setAttribute('id', 'smo397460');
smo397482v0ar.push(smo397460);
const smo397461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397461'] = smo397461;
smo397461.setAttribute('id', 'smo397461');
smo397482v0ar.push(smo397461);
const smo397462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo397462'] = smo397462;
smo397462.setAttribute('id', 'smo397462');
const smo3974620acc = new VF.Accidental('b');
smo397462.addModifier(smo3974620acc, 0);
smo397482v0ar.push(smo397462);
const smo397463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397463'] = smo397463;
smo397463.setAttribute('id', 'smo397463');
smo397482v0ar.push(smo397463);
const smo397464 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397464'] = smo397464;
smo397464.setAttribute('id', 'smo397464');
smo397482v0ar.push(smo397464);
const smo397465 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo397465'] = smo397465;
smo397465.setAttribute('id', 'smo397465');
smo397482v0ar.push(smo397465);
const smo397466 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo397466'] = smo397466;
smo397466.setAttribute('id', 'smo397466');
smo397482v0ar.push(smo397466);
smo397482v0.addTickables(smo397482v0ar)
fmtsmo39748217.joinVoices([smo397482v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399621 = smo396839.getStemDirection();
smo396839.setStemDirection(dirsmo399621);
smo396840.setStemDirection(dirsmo399621);
smo396841.setStemDirection(dirsmo399621);
smo396842.setStemDirection(dirsmo399621);
const smo399621 = new VF.Beam([smo396839,smo396840,smo396841,smo396842]);
const dirsmo399622 = smo396843.getStemDirection();
smo396843.setStemDirection(dirsmo399622);
smo396844.setStemDirection(dirsmo399622);
smo396845.setStemDirection(dirsmo399622);
smo396846.setStemDirection(dirsmo399622);
const smo399622 = new VF.Beam([smo396843,smo396844,smo396845,smo396846]);
const dirsmo399625 = smo397459.getStemDirection();
smo397459.setStemDirection(dirsmo399625);
smo397460.setStemDirection(dirsmo399625);
smo397461.setStemDirection(dirsmo399625);
smo397462.setStemDirection(dirsmo399625);
const smo399625 = new VF.Beam([smo397459,smo397460,smo397461,smo397462]);
const dirsmo399626 = smo397463.getStemDirection();
smo397463.setStemDirection(dirsmo399626);
smo397464.setStemDirection(dirsmo399626);
smo397465.setStemDirection(dirsmo399626);
smo397466.setStemDirection(dirsmo399626);
const smo399626 = new VF.Beam([smo397463,smo397464,smo397465,smo397466]);
 
// formatting measures in staff group smo397598
fmtsmo39686317.format([smo396863v0,smo397482v0], 579);
const stavesmo396863 = new VF.Stave(666, 1058.0000000000002, 593);
stavesmo396863.setAttribute('id', 'stavesmo396863');
stavesmo396863.setBegBarType(VF.Barline.type.NONE);
stavesmo396863.setContext(context);
stavesmo396863.draw();
smo396863v0.draw(context, stavesmo396863);
smo399621.setContext(context);
smo399621.draw();
smo399622.setContext(context);
smo399622.draw();
const stavesmo397482 = new VF.Stave(666, 1177.0000000000002, 593);
stavesmo397482.setAttribute('id', 'stavesmo397482');
stavesmo397482.setBegBarType(VF.Barline.type.NONE);
stavesmo397482.setContext(context);
stavesmo397482.draw();
smo397482v0.draw(context, stavesmo397482);
smo399625.setContext(context);
smo399625.draw();
smo399626.setContext(context);
smo399626.draw();
const rightsmo397598stavesmo3968631 = new VF.StaveConnector(stavesmo396863, stavesmo397482).setType(0);
rightsmo397598stavesmo3968631.setContext(context).draw();
const fmtsmo39689618 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo396896v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396896v0ar = [];
const smo396864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396864'] = smo396864;
smo396864.setAttribute('id', 'smo396864');
const  smo399825 = new VF.Articulation('a.').setPosition(3);
smo396864.addModifier(smo399825, 0);
smo396896v0ar.push(smo396864);
const smo396866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396866'] = smo396866;
smo396866.setAttribute('id', 'smo396866');
smo396896v0ar.push(smo396866);
const smo396867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396867'] = smo396867;
smo396867.setAttribute('id', 'smo396867');
smo396896v0ar.push(smo396867);
const smo396868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396868'] = smo396868;
smo396868.setAttribute('id', 'smo396868');
smo396896v0ar.push(smo396868);
const smo396869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396869'] = smo396869;
smo396869.setAttribute('id', 'smo396869');
smo396896v0ar.push(smo396869);
const smo396870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396870'] = smo396870;
smo396870.setAttribute('id', 'smo396870');
smo396896v0ar.push(smo396870);
const smo396871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396871'] = smo396871;
smo396871.setAttribute('id', 'smo396871');
smo396896v0ar.push(smo396871);
const smo396872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396872'] = smo396872;
smo396872.setAttribute('id', 'smo396872');
smo396896v0ar.push(smo396872);
const smo396873 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396873'] = smo396873;
smo396873.setAttribute('id', 'smo396873');
smo396896v0ar.push(smo396873);
const smo396874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396874'] = smo396874;
smo396874.setAttribute('id', 'smo396874');
smo396896v0ar.push(smo396874);
const smo396875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396875'] = smo396875;
smo396875.setAttribute('id', 'smo396875');
smo396896v0ar.push(smo396875);
const smo396876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396876'] = smo396876;
smo396876.setAttribute('id', 'smo396876');
smo396896v0ar.push(smo396876);
const smo396877 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396877'] = smo396877;
smo396877.setAttribute('id', 'smo396877');
smo396896v0ar.push(smo396877);
const smo396878 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396878'] = smo396878;
smo396878.setAttribute('id', 'smo396878');
smo396896v0ar.push(smo396878);
const smo396879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396879'] = smo396879;
smo396879.setAttribute('id', 'smo396879');
smo396896v0ar.push(smo396879);
const smo396880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396880'] = smo396880;
smo396880.setAttribute('id', 'smo396880');
smo396896v0ar.push(smo396880);
smo396896v0.addTickables(smo396896v0ar)
fmtsmo39689618.joinVoices([smo396896v0]);
const fmtsmo39750618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo397506v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397506v0ar = [];
const smo397483 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397483'] = smo397483;
smo397483.setAttribute('id', 'smo397483');
smo397506v0ar.push(smo397483);
const smo397484 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo397484'] = smo397484;
smo397484.setAttribute('id', 'smo397484');
const smo3974840acc = new VF.Accidental('b');
smo397484.addModifier(smo3974840acc, 0);
smo397506v0ar.push(smo397484);
const smo397485 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397485'] = smo397485;
smo397485.setAttribute('id', 'smo397485');
smo397506v0ar.push(smo397485);
const smo397486 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo397486'] = smo397486;
smo397486.setAttribute('id', 'smo397486');
smo397506v0ar.push(smo397486);
const smo397487 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo397487'] = smo397487;
smo397487.setAttribute('id', 'smo397487');
smo397506v0ar.push(smo397487);
const smo397488 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397488'] = smo397488;
smo397488.setAttribute('id', 'smo397488');
smo397506v0ar.push(smo397488);
const smo397489 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo397489'] = smo397489;
smo397489.setAttribute('id', 'smo397489');
smo397506v0ar.push(smo397489);
const smo397490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo397490'] = smo397490;
smo397490.setAttribute('id', 'smo397490');
smo397506v0ar.push(smo397490);
smo397506v0.addTickables(smo397506v0ar)
fmtsmo39750618.joinVoices([smo397506v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399639 = smo396864.getStemDirection();
smo396864.setStemDirection(dirsmo399639);
smo396866.setStemDirection(dirsmo399639);
smo396867.setStemDirection(dirsmo399639);
smo396868.setStemDirection(dirsmo399639);
const smo399639 = new VF.Beam([smo396864,smo396866,smo396867,smo396868]);
const dirsmo399640 = smo396869.getStemDirection();
smo396869.setStemDirection(dirsmo399640);
smo396870.setStemDirection(dirsmo399640);
smo396871.setStemDirection(dirsmo399640);
smo396872.setStemDirection(dirsmo399640);
const smo399640 = new VF.Beam([smo396869,smo396870,smo396871,smo396872]);
const dirsmo399641 = smo396873.getStemDirection();
smo396873.setStemDirection(dirsmo399641);
smo396874.setStemDirection(dirsmo399641);
smo396875.setStemDirection(dirsmo399641);
smo396876.setStemDirection(dirsmo399641);
const smo399641 = new VF.Beam([smo396873,smo396874,smo396875,smo396876]);
const dirsmo399642 = smo396877.getStemDirection();
smo396877.setStemDirection(dirsmo399642);
smo396878.setStemDirection(dirsmo399642);
smo396879.setStemDirection(dirsmo399642);
smo396880.setStemDirection(dirsmo399642);
const smo399642 = new VF.Beam([smo396877,smo396878,smo396879,smo396880]);
const dirsmo399645 = smo397483.getStemDirection();
smo397483.setStemDirection(dirsmo399645);
smo397484.setStemDirection(dirsmo399645);
smo397485.setStemDirection(dirsmo399645);
smo397486.setStemDirection(dirsmo399645);
const smo399645 = new VF.Beam([smo397483,smo397484,smo397485,smo397486]);
const dirsmo399646 = smo397487.getStemDirection();
smo397487.setStemDirection(dirsmo399646);
smo397488.setStemDirection(dirsmo399646);
smo397489.setStemDirection(dirsmo399646);
smo397490.setStemDirection(dirsmo399646);
const smo399646 = new VF.Beam([smo397487,smo397488,smo397489,smo397490]);
 
// formatting measures in staff group smo397598
fmtsmo39689618.format([smo396896v0,smo397506v0], 395);
const stavesmo396896 = new VF.Stave(50, 1318.0000000000002, 451);
stavesmo396896.setAttribute('id', 'stavesmo396896');
stavesmo396896.setBegBarType(1);
stavesmo396896.addClef('treble');
stavesmo396896.setContext(context);
stavesmo396896.draw();
smo396896v0.draw(context, stavesmo396896);
smo399639.setContext(context);
smo399639.draw();
smo399640.setContext(context);
smo399640.draw();
smo399641.setContext(context);
smo399641.draw();
smo399642.setContext(context);
smo399642.draw();
const stavesmo397506 = new VF.Stave(50, 1452.0000000000002, 451);
stavesmo397506.setAttribute('id', 'stavesmo397506');
stavesmo397506.setBegBarType(1);
stavesmo397506.addClef('bass');
stavesmo397506.setContext(context);
stavesmo397506.draw();
smo397506v0.draw(context, stavesmo397506);
smo399645.setContext(context);
smo399645.draw();
smo399646.setContext(context);
smo399646.draw();
const leftsmo397598stavesmo3968961 = new VF.StaveConnector(stavesmo396896, stavesmo397506).setType(3);
leftsmo397598stavesmo3968961.setContext(context).draw();
const fmtsmo39692519 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo396925v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396925v0ar = [];
const smo396897 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396897'] = smo396897;
smo396897.setAttribute('id', 'smo396897');
smo396925v0ar.push(smo396897);
const smo396898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396898'] = smo396898;
smo396898.setAttribute('id', 'smo396898');
smo396925v0ar.push(smo396898);
const smo396899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396899'] = smo396899;
smo396899.setAttribute('id', 'smo396899');
smo396925v0ar.push(smo396899);
const smo396900 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo396900'] = smo396900;
smo396900.setAttribute('id', 'smo396900');
smo396925v0ar.push(smo396900);
const smo396901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo396901'] = smo396901;
smo396901.setAttribute('id', 'smo396901');
smo396925v0ar.push(smo396901);
const smo396902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo396902'] = smo396902;
smo396902.setAttribute('id', 'smo396902');
smo396925v0ar.push(smo396902);
const smo396903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo396903'] = smo396903;
smo396903.setAttribute('id', 'smo396903');
smo396925v0ar.push(smo396903);
const smo396904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396904'] = smo396904;
smo396904.setAttribute('id', 'smo396904');
smo396925v0ar.push(smo396904);
const smo396905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo396905'] = smo396905;
smo396905.setAttribute('id', 'smo396905');
smo396925v0ar.push(smo396905);
const smo396906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo396906'] = smo396906;
smo396906.setAttribute('id', 'smo396906');
smo396925v0ar.push(smo396906);
const smo396907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396907'] = smo396907;
smo396907.setAttribute('id', 'smo396907');
smo396925v0ar.push(smo396907);
const smo396908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396908'] = smo396908;
smo396908.setAttribute('id', 'smo396908');
smo396925v0ar.push(smo396908);
const smo396909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396909'] = smo396909;
smo396909.setAttribute('id', 'smo396909');
smo396925v0ar.push(smo396909);
smo396925v0.addTickables(smo396925v0ar)
fmtsmo39692519.joinVoices([smo396925v0]);
const fmtsmo39753419 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo397534v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397534v0ar = [];
const smo397507 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo397507'] = smo397507;
smo397507.setAttribute('id', 'smo397507');
smo397534v0ar.push(smo397507);
const smo397508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo397508'] = smo397508;
smo397508.setAttribute('id', 'smo397508');
smo397534v0ar.push(smo397508);
const smo397509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397509'] = smo397509;
smo397509.setAttribute('id', 'smo397509');
smo397534v0ar.push(smo397509);
const smo397510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo397510'] = smo397510;
smo397510.setAttribute('id', 'smo397510');
smo397534v0ar.push(smo397510);
const smo397511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo397511'] = smo397511;
smo397511.setAttribute('id', 'smo397511');
smo397534v0ar.push(smo397511);
const smo397512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo397512'] = smo397512;
smo397512.setAttribute('id', 'smo397512');
smo397534v0ar.push(smo397512);
const smo397513 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397513'] = smo397513;
smo397513.setAttribute('id', 'smo397513');
smo397534v0ar.push(smo397513);
const smo397514 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo397514'] = smo397514;
smo397514.setAttribute('id', 'smo397514');
smo397534v0ar.push(smo397514);
const smo397515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo397515'] = smo397515;
smo397515.setAttribute('id', 'smo397515');
smo397534v0ar.push(smo397515);
const smo397516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397516'] = smo397516;
smo397516.setAttribute('id', 'smo397516');
smo397534v0ar.push(smo397516);
const smo397517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo397517'] = smo397517;
smo397517.setAttribute('id', 'smo397517');
smo397534v0ar.push(smo397517);
const smo397518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo397518'] = smo397518;
smo397518.setAttribute('id', 'smo397518');
smo397534v0ar.push(smo397518);
smo397534v0.addTickables(smo397534v0ar)
fmtsmo39753419.joinVoices([smo397534v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399649 = smo396897.getStemDirection();
smo396897.setStemDirection(dirsmo399649);
smo396898.setStemDirection(dirsmo399649);
smo396899.setStemDirection(dirsmo399649);
smo396900.setStemDirection(dirsmo399649);
const smo399649 = new VF.Beam([smo396897,smo396898,smo396899,smo396900]);
const dirsmo399650 = smo396901.getStemDirection();
smo396901.setStemDirection(dirsmo399650);
smo396902.setStemDirection(dirsmo399650);
smo396903.setStemDirection(dirsmo399650);
smo396904.setStemDirection(dirsmo399650);
const smo399650 = new VF.Beam([smo396901,smo396902,smo396903,smo396904]);
const dirsmo399651 = smo396905.getStemDirection();
smo396905.setStemDirection(dirsmo399651);
smo396906.setStemDirection(dirsmo399651);
const smo399651 = new VF.Beam([smo396905,smo396906]);
const dirsmo399652 = smo396907.getStemDirection();
smo396907.setStemDirection(dirsmo399652);
smo396908.setStemDirection(dirsmo399652);
smo396909.setStemDirection(dirsmo399652);
const smo399652 = new VF.Beam([smo396907,smo396908,smo396909]);
const dirsmo399655 = smo397507.getStemDirection();
smo397507.setStemDirection(dirsmo399655);
smo397508.setStemDirection(dirsmo399655);
const smo399655 = new VF.Beam([smo397507,smo397508]);
const dirsmo399656 = smo397509.getStemDirection();
smo397509.setStemDirection(dirsmo399656);
smo397510.setStemDirection(dirsmo399656);
const smo399656 = new VF.Beam([smo397509,smo397510]);
const dirsmo399657 = smo397511.getStemDirection();
smo397511.setStemDirection(dirsmo399657);
smo397512.setStemDirection(dirsmo399657);
smo397513.setStemDirection(dirsmo399657);
smo397514.setStemDirection(dirsmo399657);
const smo399657 = new VF.Beam([smo397511,smo397512,smo397513,smo397514]);
const dirsmo399658 = smo397515.getStemDirection();
smo397515.setStemDirection(dirsmo399658);
smo397516.setStemDirection(dirsmo399658);
smo397517.setStemDirection(dirsmo399658);
smo397518.setStemDirection(dirsmo399658);
const smo399658 = new VF.Beam([smo397515,smo397516,smo397517,smo397518]);
 
// formatting measures in staff group smo397598
fmtsmo39692519.format([smo396925v0,smo397534v0], 368);
const stavesmo396925 = new VF.Stave(501, 1318.0000000000002, 382);
stavesmo396925.setAttribute('id', 'stavesmo396925');
stavesmo396925.setBegBarType(VF.Barline.type.NONE);
stavesmo396925.setContext(context);
stavesmo396925.draw();
smo396925v0.draw(context, stavesmo396925);
smo399649.setContext(context);
smo399649.draw();
smo399650.setContext(context);
smo399650.draw();
smo399651.setContext(context);
smo399651.draw();
smo399652.setContext(context);
smo399652.draw();
const stavesmo397534 = new VF.Stave(501, 1452.0000000000002, 382);
stavesmo397534.setAttribute('id', 'stavesmo397534');
stavesmo397534.setBegBarType(VF.Barline.type.NONE);
stavesmo397534.setContext(context);
stavesmo397534.draw();
smo397534v0.draw(context, stavesmo397534);
smo399655.setContext(context);
smo399655.draw();
smo399656.setContext(context);
smo399656.draw();
smo399657.setContext(context);
smo399657.draw();
smo399658.setContext(context);
smo399658.draw();
const fmtsmo39695720 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo396957v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo396957v0ar = [];
const smo396926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396926'] = smo396926;
smo396926.setAttribute('id', 'smo396926');
smo396957v0ar.push(smo396926);
const smo396927 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo396927'] = smo396927;
smo396927.setAttribute('id', 'smo396927');
smo396957v0ar.push(smo396927);
const smo396928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo396928'] = smo396928;
smo396928.setAttribute('id', 'smo396928');
smo396957v0ar.push(smo396928);
const smo396929 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo396929'] = smo396929;
smo396929.setAttribute('id', 'smo396929');
smo396957v0ar.push(smo396929);
const smo396930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo396930'] = smo396930;
smo396930.setAttribute('id', 'smo396930');
smo396957v0ar.push(smo396930);
const smo396931 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo396931'] = smo396931;
smo396931.setAttribute('id', 'smo396931');
smo396957v0ar.push(smo396931);
const smo396932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo396932'] = smo396932;
smo396932.setAttribute('id', 'smo396932');
smo396957v0ar.push(smo396932);
const smo396933 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo396933'] = smo396933;
smo396933.setAttribute('id', 'smo396933');
smo396957v0ar.push(smo396933);
const smo396934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo396934'] = smo396934;
smo396934.setAttribute('id', 'smo396934');
smo396957v0ar.push(smo396934);
const smo396935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo396935'] = smo396935;
smo396935.setAttribute('id', 'smo396935');
smo396957v0ar.push(smo396935);
const smo396936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396936'] = smo396936;
smo396936.setAttribute('id', 'smo396936');
smo396957v0ar.push(smo396936);
const smo396937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo396937'] = smo396937;
smo396937.setAttribute('id', 'smo396937');
smo396957v0ar.push(smo396937);
const smo396938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo396938'] = smo396938;
smo396938.setAttribute('id', 'smo396938');
smo396957v0ar.push(smo396938);
const smo396939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo396939'] = smo396939;
smo396939.setAttribute('id', 'smo396939');
smo396957v0ar.push(smo396939);
const smo396940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo396940'] = smo396940;
smo396940.setAttribute('id', 'smo396940');
smo396957v0ar.push(smo396940);
const smo396941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo396941'] = smo396941;
smo396941.setAttribute('id', 'smo396941');
smo396957v0ar.push(smo396941);
smo396957v0.addTickables(smo396957v0ar)
fmtsmo39695720.joinVoices([smo396957v0]);
const fmtsmo39756220 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo397562v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo397562v0ar = [];
const smo397535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397535'] = smo397535;
smo397535.setAttribute('id', 'smo397535');
smo397562v0ar.push(smo397535);
const smo397536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo397536'] = smo397536;
smo397536.setAttribute('id', 'smo397536');
smo397562v0ar.push(smo397536);
const smo397537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo397537'] = smo397537;
smo397537.setAttribute('id', 'smo397537');
smo397562v0ar.push(smo397537);
const smo397538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397538'] = smo397538;
smo397538.setAttribute('id', 'smo397538');
smo397562v0ar.push(smo397538);
const smo397539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo397539'] = smo397539;
smo397539.setAttribute('id', 'smo397539');
smo397562v0ar.push(smo397539);
const smo397540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo397540'] = smo397540;
smo397540.setAttribute('id', 'smo397540');
smo397562v0ar.push(smo397540);
const smo397541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo397541'] = smo397541;
smo397541.setAttribute('id', 'smo397541');
smo397562v0ar.push(smo397541);
const smo397542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo397542'] = smo397542;
smo397542.setAttribute('id', 'smo397542');
smo397562v0ar.push(smo397542);
const smo397543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo397543'] = smo397543;
smo397543.setAttribute('id', 'smo397543');
const  smo399834 = new VF.Articulation('a.').setPosition(3);
smo397543.addModifier(smo399834, 0);
smo397562v0ar.push(smo397543);
const smo397545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo397545'] = smo397545;
smo397545.setAttribute('id', 'smo397545');
const  smo399835 = new VF.Articulation('a.').setPosition(3);
smo397545.addModifier(smo399835, 0);
smo397562v0ar.push(smo397545);
smo397562v0.addTickables(smo397562v0ar)
fmtsmo39756220.joinVoices([smo397562v0]);
// create beam groups and tuplets for format grp smo397598 before formatting
const dirsmo399661 = smo396926.getStemDirection();
smo396926.setStemDirection(dirsmo399661);
smo396927.setStemDirection(dirsmo399661);
smo396928.setStemDirection(dirsmo399661);
smo396929.setStemDirection(dirsmo399661);
const smo399661 = new VF.Beam([smo396926,smo396927,smo396928,smo396929]);
const dirsmo399662 = smo396930.getStemDirection();
smo396930.setStemDirection(dirsmo399662);
smo396931.setStemDirection(dirsmo399662);
smo396932.setStemDirection(dirsmo399662);
smo396933.setStemDirection(dirsmo399662);
const smo399662 = new VF.Beam([smo396930,smo396931,smo396932,smo396933]);
const dirsmo399663 = smo396934.getStemDirection();
smo396934.setStemDirection(dirsmo399663);
smo396935.setStemDirection(dirsmo399663);
smo396936.setStemDirection(dirsmo399663);
smo396937.setStemDirection(dirsmo399663);
const smo399663 = new VF.Beam([smo396934,smo396935,smo396936,smo396937]);
const dirsmo399664 = smo396938.getStemDirection();
smo396938.setStemDirection(dirsmo399664);
smo396939.setStemDirection(dirsmo399664);
smo396940.setStemDirection(dirsmo399664);
smo396941.setStemDirection(dirsmo399664);
const smo399664 = new VF.Beam([smo396938,smo396939,smo396940,smo396941]);
const dirsmo399667 = smo397535.getStemDirection();
smo397535.setStemDirection(dirsmo399667);
smo397536.setStemDirection(dirsmo399667);
const smo399667 = new VF.Beam([smo397535,smo397536]);
const dirsmo399668 = smo397537.getStemDirection();
smo397537.setStemDirection(dirsmo399668);
smo397538.setStemDirection(dirsmo399668);
const smo399668 = new VF.Beam([smo397537,smo397538]);
const dirsmo399669 = smo397539.getStemDirection();
smo397539.setStemDirection(dirsmo399669);
smo397540.setStemDirection(dirsmo399669);
smo397541.setStemDirection(dirsmo399669);
smo397542.setStemDirection(dirsmo399669);
const smo399669 = new VF.Beam([smo397539,smo397540,smo397541,smo397542]);
const dirsmo399670 = smo397543.getStemDirection();
smo397543.setStemDirection(dirsmo399670);
smo397545.setStemDirection(dirsmo399670);
const smo399670 = new VF.Beam([smo397543,smo397545]);
 
// formatting measures in staff group smo397598
fmtsmo39695720.format([smo396957v0,smo397562v0], 363);
const stavesmo396957 = new VF.Stave(883, 1318.0000000000002, 377);
stavesmo396957.setAttribute('id', 'stavesmo396957');
stavesmo396957.setBegBarType(VF.Barline.type.NONE);
stavesmo396957.setContext(context);
stavesmo396957.draw();
smo396957v0.draw(context, stavesmo396957);
smo399661.setContext(context);
smo399661.draw();
smo399662.setContext(context);
smo399662.draw();
smo399663.setContext(context);
smo399663.draw();
smo399664.setContext(context);
smo399664.draw();
const stavesmo397562 = new VF.Stave(883, 1452.0000000000002, 377);
stavesmo397562.setAttribute('id', 'stavesmo397562');
stavesmo397562.setBegBarType(VF.Barline.type.NONE);
stavesmo397562.setContext(context);
stavesmo397562.draw();
smo397562v0.draw(context, stavesmo397562);
smo399667.setContext(context);
smo399667.draw();
smo399668.setContext(context);
smo399668.draw();
smo399669.setContext(context);
smo399669.draw();
smo399670.setContext(context);
smo399670.draw();
const rightsmo397598stavesmo3969571 = new VF.StaveConnector(stavesmo396957, stavesmo397562).setType(0);
rightsmo397598stavesmo3969571.setContext(context).draw();
const smo399840 = new VF.Curve(smo396652, smo396655, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":true,"position":1,"position_end":2}'));
smo399840.setContext(context).draw();
const smo399841 = new VF.Curve(smo396656, smo396675, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399841.setContext(context).draw();
const smo399842 = new VF.Curve(smo396676, smo396681, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399842.setContext(context).draw();
const smo399843 = new VF.Curve(smo396796, null, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399843.setContext(context).draw();
const smo399844 = new VF.Curve(null, smo396813, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399844.setContext(context).draw();
const smo399845 = new VF.Curve(smo396847, null, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399845.setContext(context).draw();
const smo399846 = new VF.Curve(null, smo396864, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399846.setContext(context).draw();
const smo399847 = new VF.Curve(smo396822, smo396839, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399847.setContext(context).draw();
const smo399848 = new VF.Curve(smo397408, smo397409, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399848.setContext(context).draw();
const smo399849 = new VF.Curve(smo397433, smo397434, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399849.setContext(context).draw();
const smo399850 = new VF.Curve(smo397458, smo397459, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399850.setContext(context).draw();
const smo399851 = new VF.Curve(smo397484, smo397487, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399851.setContext(context).draw();
const smo399852 = new VF.Curve(smo397488, smo397507, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":10,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo399852.setContext(context).draw();
}
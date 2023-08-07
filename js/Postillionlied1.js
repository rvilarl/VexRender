function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1421.487603305785');
svg.setAttributeNS('', 'height', '1839.5721925133685');
svg.setAttributeNS('', 'viewBox', '0 0 1343 1738');
VF.setMusicFont("Leland","Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo388970 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo38897v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38897v0ar = [];
const smo38881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38881'] = smo38881;
smo38881.setAttribute('id', 'smo38881');
smo38881.addModifier(new VF.Dot(), 0);
smo38897v0ar.push(smo38881);
smo38897v0.addTickables(smo38897v0ar)
fmtsmo388970.joinVoices([smo38897v0]);
const fmtsmo402970 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo40297v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40297v0ar = [];
const smo40279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40279'] = smo40279;
smo40279.setAttribute('id', 'smo40279');
smo40279.addModifier(new VF.Dot(), 0);
smo40297v0ar.push(smo40279);
const smo40280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40280'] = smo40280;
smo40280.setAttribute('id', 'smo40280');
smo40297v0ar.push(smo40280);
const smo40281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo40281'] = smo40281;
smo40281.setAttribute('id', 'smo40281');
smo40297v0ar.push(smo40281);
smo40297v0.addTickables(smo40297v0ar)
fmtsmo402970.joinVoices([smo40297v0]);
const fmtsmo414180 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo41418v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41418v0ar = [];
const smo41400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo41400'] = smo41400;
smo41400.setAttribute('id', 'smo41400');
smo41400.addModifier(new VF.Dot(), 0);
smo41418v0ar.push(smo41400);
const smo41401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo41401'] = smo41401;
smo41401.setAttribute('id', 'smo41401');
smo41418v0ar.push(smo41401);
const smo41402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41402'] = smo41402;
smo41402.setAttribute('id', 'smo41402');
smo41418v0ar.push(smo41402);
smo41418v0.addTickables(smo41418v0ar)
fmtsmo414180.joinVoices([smo41418v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo388970.format([smo38897v0,smo40297v0,smo41418v0], 105);
const stavesmo38897 = new VF.Stave(66, 119, 202);
stavesmo38897.setAttribute('id', 'stavesmo38897');
stavesmo38897.setBegBarType(1);
stavesmo38897.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo38897.addClef('treble');
stavesmo38897.addTimeSignature('6/8');
const keysmo38897 = new VF.KeySignature('G');
keysmo38897.addToStave(stavesmo38897);
stavesmo38897.setContext(context);
stavesmo38897.draw();
smo38897v0.draw(context, stavesmo38897);
const stavesmo40297 = new VF.Stave(66, 226, 202);
stavesmo40297.setAttribute('id', 'stavesmo40297');
stavesmo40297.setBegBarType(1);
stavesmo40297.addClef('treble');
stavesmo40297.addTimeSignature('6/8');
const keysmo40297 = new VF.KeySignature('G');
keysmo40297.addToStave(stavesmo40297);
stavesmo40297.setContext(context);
stavesmo40297.draw();
smo40297v0.draw(context, stavesmo40297);
const stavesmo41418 = new VF.Stave(66, 301, 202);
stavesmo41418.setAttribute('id', 'stavesmo41418');
stavesmo41418.setBegBarType(1);
stavesmo41418.addClef('treble');
stavesmo41418.addTimeSignature('6/8');
const keysmo41418 = new VF.KeySignature('G');
keysmo41418.addToStave(stavesmo41418);
stavesmo41418.setContext(context);
stavesmo41418.draw();
smo41418v0.draw(context, stavesmo41418);
const leftsmo42632stavesmo388972 = new VF.StaveConnector(stavesmo38897, stavesmo41418).setType(1);
leftsmo42632stavesmo388972.setContext(context).draw();
const fmtsmo389141 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo38914v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38914v0ar = [];
const smo38898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38898'] = smo38898;
smo38898.setAttribute('id', 'smo38898');
smo38898.addModifier(new VF.Dot(), 0);
smo38914v0ar.push(smo38898);
smo38914v0.addTickables(smo38914v0ar)
fmtsmo389141.joinVoices([smo38914v0]);
const fmtsmo403151 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo40315v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40315v0ar = [];
const smo40298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo40298'] = smo40298;
smo40298.setAttribute('id', 'smo40298');
smo40298.addModifier(new VF.Dot(), 0);
smo40315v0ar.push(smo40298);
const smo40299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo40299'] = smo40299;
smo40299.setAttribute('id', 'smo40299');
smo40299.addModifier(new VF.Dot(), 0);
smo40315v0ar.push(smo40299);
smo40315v0.addTickables(smo40315v0ar)
fmtsmo403151.joinVoices([smo40315v0]);
const fmtsmo414361 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo41436v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41436v0ar = [];
const smo41419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo41419'] = smo41419;
smo41419.setAttribute('id', 'smo41419');
smo41419.addModifier(new VF.Dot(), 0);
smo41436v0ar.push(smo41419);
const smo41420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41420'] = smo41420;
smo41420.setAttribute('id', 'smo41420');
smo41420.addModifier(new VF.Dot(), 0);
smo41436v0ar.push(smo41420);
smo41436v0.addTickables(smo41436v0ar)
fmtsmo414361.joinVoices([smo41436v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo389141.format([smo38914v0,smo40315v0,smo41436v0], 75);
const stavesmo38914 = new VF.Stave(268, 119, 89);
stavesmo38914.setAttribute('id', 'stavesmo38914');
stavesmo38914.setBegBarType(VF.Barline.type.NONE);
stavesmo38914.setContext(context);
stavesmo38914.draw();
smo38914v0.draw(context, stavesmo38914);
const stavesmo40315 = new VF.Stave(268, 226, 89);
stavesmo40315.setAttribute('id', 'stavesmo40315');
stavesmo40315.setBegBarType(VF.Barline.type.NONE);
stavesmo40315.setContext(context);
stavesmo40315.draw();
smo40315v0.draw(context, stavesmo40315);
const stavesmo41436 = new VF.Stave(268, 301, 89);
stavesmo41436.setAttribute('id', 'stavesmo41436');
stavesmo41436.setBegBarType(VF.Barline.type.NONE);
stavesmo41436.setContext(context);
stavesmo41436.draw();
smo41436v0.draw(context, stavesmo41436);
const fmtsmo389312 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo38931v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38931v0ar = [];
const smo38915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38915'] = smo38915;
smo38915.setAttribute('id', 'smo38915');
smo38915.addModifier(new VF.Dot(), 0);
smo38931v0ar.push(smo38915);
smo38931v0.addTickables(smo38931v0ar)
fmtsmo389312.joinVoices([smo38931v0]);
const fmtsmo403362 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo40336v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40336v0ar = [];
const smo40316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo40316'] = smo40316;
smo40316.setAttribute('id', 'smo40316');
smo40336v0ar.push(smo40316);
const smo40317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo40317'] = smo40317;
smo40317.setAttribute('id', 'smo40317');
smo40336v0ar.push(smo40317);
const smo40318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo40318'] = smo40318;
smo40318.setAttribute('id', 'smo40318');
smo40336v0ar.push(smo40318);
const smo40319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40319'] = smo40319;
smo40319.setAttribute('id', 'smo40319');
smo40336v0ar.push(smo40319);
const smo40320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40320'] = smo40320;
smo40320.setAttribute('id', 'smo40320');
smo40336v0ar.push(smo40320);
smo40336v0.addTickables(smo40336v0ar)
fmtsmo403362.joinVoices([smo40336v0]);
const fmtsmo414572 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo41457v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41457v0ar = [];
const smo41437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo41437'] = smo41437;
smo41437.setAttribute('id', 'smo41437');
smo41457v0ar.push(smo41437);
const smo41438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo41438'] = smo41438;
smo41438.setAttribute('id', 'smo41438');
smo41457v0ar.push(smo41438);
const smo41439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo41439'] = smo41439;
smo41439.setAttribute('id', 'smo41439');
smo41457v0ar.push(smo41439);
const smo41440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo41440'] = smo41440;
smo41440.setAttribute('id', 'smo41440');
smo41457v0ar.push(smo41440);
const smo41441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo41441'] = smo41441;
smo41441.setAttribute('id', 'smo41441');
smo41457v0ar.push(smo41441);
smo41457v0.addTickables(smo41457v0ar)
fmtsmo414572.joinVoices([smo41457v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48598 = smo40316.getStemDirection();
smo40316.setStemDirection(dirsmo48598);
smo40317.setStemDirection(dirsmo48598);
smo40318.setStemDirection(dirsmo48598);
const smo48598 = new VF.Beam([smo40316,smo40317,smo40318]);
const dirsmo48601 = smo41437.getStemDirection();
smo41437.setStemDirection(dirsmo48601);
smo41438.setStemDirection(dirsmo48601);
smo41439.setStemDirection(dirsmo48601);
const smo48601 = new VF.Beam([smo41437,smo41438,smo41439]);
 
// formatting measures in staff group smo42632
fmtsmo389312.format([smo38931v0,smo40336v0,smo41457v0], 146);
const stavesmo38931 = new VF.Stave(357, 119, 160);
stavesmo38931.setAttribute('id', 'stavesmo38931');
stavesmo38931.setBegBarType(VF.Barline.type.NONE);
stavesmo38931.setContext(context);
stavesmo38931.draw();
smo38931v0.draw(context, stavesmo38931);
const stavesmo40336 = new VF.Stave(357, 226, 160);
stavesmo40336.setAttribute('id', 'stavesmo40336');
stavesmo40336.setBegBarType(VF.Barline.type.NONE);
stavesmo40336.setContext(context);
stavesmo40336.draw();
smo40336v0.draw(context, stavesmo40336);
smo48598.setContext(context);
smo48598.draw();
const stavesmo41457 = new VF.Stave(357, 301, 160);
stavesmo41457.setAttribute('id', 'stavesmo41457');
stavesmo41457.setBegBarType(VF.Barline.type.NONE);
stavesmo41457.setContext(context);
stavesmo41457.draw();
smo41457v0.draw(context, stavesmo41457);
smo48601.setContext(context);
smo48601.draw();
const fmtsmo389483 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo38948v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38948v0ar = [];
const smo38932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38932'] = smo38932;
smo38932.setAttribute('id', 'smo38932');
smo38932.addModifier(new VF.Dot(), 0);
smo38948v0ar.push(smo38932);
smo38948v0.addTickables(smo38948v0ar)
fmtsmo389483.joinVoices([smo38948v0]);
const fmtsmo403573 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo40357v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40357v0ar = [];
const smo40337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40337'] = smo40337;
smo40337.setAttribute('id', 'smo40337');
smo40357v0ar.push(smo40337);
const smo40338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo40338'] = smo40338;
smo40338.setAttribute('id', 'smo40338');
smo40357v0ar.push(smo40338);
const smo40339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40339'] = smo40339;
smo40339.setAttribute('id', 'smo40339');
smo40357v0ar.push(smo40339);
const smo40340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40340'] = smo40340;
smo40340.setAttribute('id', 'smo40340');
smo40357v0ar.push(smo40340);
const smo40341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40341'] = smo40341;
smo40341.setAttribute('id', 'smo40341');
smo40357v0ar.push(smo40341);
smo40357v0.addTickables(smo40357v0ar)
fmtsmo403573.joinVoices([smo40357v0]);
const fmtsmo414773 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo41477v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41477v0ar = [];
const smo41458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo41458'] = smo41458;
smo41458.setAttribute('id', 'smo41458');
smo41477v0ar.push(smo41458);
const smo41459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo41459'] = smo41459;
smo41459.setAttribute('id', 'smo41459');
smo41477v0ar.push(smo41459);
const smo41460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo41460'] = smo41460;
smo41460.setAttribute('id', 'smo41460');
smo41477v0ar.push(smo41460);
const smo41461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","f#/3/n"]}'))
noteHash['smo41461'] = smo41461;
smo41461.setAttribute('id', 'smo41461');
smo41461.addModifier(new VF.Dot(), 0);
smo41461.addModifier(new VF.Dot(), 1);
smo41477v0ar.push(smo41461);
smo41477v0.addTickables(smo41477v0ar)
fmtsmo414773.joinVoices([smo41477v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48606 = smo40337.getStemDirection();
smo40337.setStemDirection(dirsmo48606);
smo40338.setStemDirection(dirsmo48606);
smo40339.setStemDirection(dirsmo48606);
const smo48606 = new VF.Beam([smo40337,smo40338,smo40339]);
const dirsmo48609 = smo41458.getStemDirection();
smo41458.setStemDirection(dirsmo48609);
smo41459.setStemDirection(dirsmo48609);
smo41460.setStemDirection(dirsmo48609);
const smo48609 = new VF.Beam([smo41458,smo41459,smo41460]);
 
// formatting measures in staff group smo42632
fmtsmo389483.format([smo38948v0,smo40357v0,smo41477v0], 160);
const stavesmo38948 = new VF.Stave(517, 119, 174);
stavesmo38948.setAttribute('id', 'stavesmo38948');
stavesmo38948.setBegBarType(VF.Barline.type.NONE);
stavesmo38948.setContext(context);
stavesmo38948.draw();
smo38948v0.draw(context, stavesmo38948);
const stavesmo40357 = new VF.Stave(517, 226, 174);
stavesmo40357.setAttribute('id', 'stavesmo40357');
stavesmo40357.setBegBarType(VF.Barline.type.NONE);
stavesmo40357.setContext(context);
stavesmo40357.draw();
smo40357v0.draw(context, stavesmo40357);
smo48606.setContext(context);
smo48606.draw();
const stavesmo41477 = new VF.Stave(517, 301, 174);
stavesmo41477.setAttribute('id', 'stavesmo41477');
stavesmo41477.setBegBarType(VF.Barline.type.NONE);
stavesmo41477.setContext(context);
stavesmo41477.draw();
smo41477v0.draw(context, stavesmo41477);
smo48609.setContext(context);
smo48609.draw();
const fmtsmo389654 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo38965v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38965v0ar = [];
const smo38949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38949'] = smo38949;
smo38949.setAttribute('id', 'smo38949');
smo38949.addModifier(new VF.Dot(), 0);
smo38965v0ar.push(smo38949);
smo38965v0.addTickables(smo38965v0ar)
fmtsmo389654.joinVoices([smo38965v0]);
const fmtsmo403744 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo40374v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40374v0ar = [];
const smo40358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40358'] = smo40358;
smo40358.setAttribute('id', 'smo40358');
smo40358.addModifier(new VF.Dot(), 0);
smo40374v0ar.push(smo40358);
smo40374v0.addTickables(smo40374v0ar)
fmtsmo403744.joinVoices([smo40374v0]);
const fmtsmo414974 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo41497v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41497v0ar = [];
const smo41478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41478'] = smo41478;
smo41478.setAttribute('id', 'smo41478');
smo41497v0ar.push(smo41478);
const smo41479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41479'] = smo41479;
smo41479.setAttribute('id', 'smo41479');
smo41497v0ar.push(smo41479);
const smo41480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41480'] = smo41480;
smo41480.setAttribute('id', 'smo41480');
smo41497v0ar.push(smo41480);
const smo41481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41481'] = smo41481;
smo41481.setAttribute('id', 'smo41481');
smo41497v0ar.push(smo41481);
smo41497v0.addTickables(smo41497v0ar)
fmtsmo414974.joinVoices([smo41497v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo389654.format([smo38965v0,smo40374v0,smo41497v0], 127);
const stavesmo38965 = new VF.Stave(691, 119, 183);
stavesmo38965.setAttribute('id', 'stavesmo38965');
stavesmo38965.setBegBarType(4);
stavesmo38965.setContext(context);
stavesmo38965.draw();
smo38965v0.draw(context, stavesmo38965);
const stavesmo40374 = new VF.Stave(691, 226, 183);
stavesmo40374.setAttribute('id', 'stavesmo40374');
stavesmo40374.setBegBarType(4);
stavesmo40374.setContext(context);
stavesmo40374.draw();
smo40374v0.draw(context, stavesmo40374);
const stavesmo41497 = new VF.Stave(691, 301, 183);
stavesmo41497.setAttribute('id', 'stavesmo41497');
stavesmo41497.setBegBarType(4);
stavesmo41497.addClef('bass');
stavesmo41497.setContext(context);
stavesmo41497.draw();
smo41497v0.draw(context, stavesmo41497);
const fmtsmo389845 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo38984v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38984v0ar = [];
const smo38966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38966'] = smo38966;
smo38966.setAttribute('id', 'smo38966');
smo38966.addModifier(new VF.Dot(), 0);
smo38984v0ar.push(smo38966);
const smo38967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38967'] = smo38967;
smo38967.setAttribute('id', 'smo38967');
smo38967.addModifier(new VF.Dot(), 0);
const smo38968 = new VF.Annotation('Mein');
smo38968.setAttribute('id', 'smo38968');
smo38968.setFont('Merriweather', 12, 'normal');
smo38968.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38967.addModifier(smo38968);
smo38968.addClass('lyric lyric-0');
smo38984v0ar.push(smo38967);
smo38984v0.addTickables(smo38984v0ar)
fmtsmo389845.joinVoices([smo38984v0]);
const fmtsmo403925 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo40392v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40392v0ar = [];
const smo40375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40375'] = smo40375;
smo40375.setAttribute('id', 'smo40375');
smo40375.addModifier(new VF.Dot(), 0);
smo40392v0ar.push(smo40375);
const smo40376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40376'] = smo40376;
smo40376.setAttribute('id', 'smo40376');
smo40376.addModifier(new VF.Dot(), 0);
smo40392v0ar.push(smo40376);
smo40392v0.addTickables(smo40392v0ar)
fmtsmo403925.joinVoices([smo40392v0]);
const fmtsmo415175 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo41517v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41517v0ar = [];
const smo41498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41498'] = smo41498;
smo41498.setAttribute('id', 'smo41498');
smo41517v0ar.push(smo41498);
const smo41499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41499'] = smo41499;
smo41499.setAttribute('id', 'smo41499');
smo41517v0ar.push(smo41499);
const smo41500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41500'] = smo41500;
smo41500.setAttribute('id', 'smo41500');
smo41517v0ar.push(smo41500);
const smo41501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41501'] = smo41501;
smo41501.setAttribute('id', 'smo41501');
smo41517v0ar.push(smo41501);
smo41517v0.addTickables(smo41517v0ar)
fmtsmo415175.joinVoices([smo41517v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo389845.format([smo38984v0,smo40392v0,smo41517v0], 155);
const stavesmo38984 = new VF.Stave(874, 119, 169);
stavesmo38984.setAttribute('id', 'stavesmo38984');
stavesmo38984.setBegBarType(VF.Barline.type.NONE);
stavesmo38984.setContext(context);
stavesmo38984.draw();
smo38984v0.draw(context, stavesmo38984);
const stavesmo40392 = new VF.Stave(874, 226, 169);
stavesmo40392.setAttribute('id', 'stavesmo40392');
stavesmo40392.setBegBarType(VF.Barline.type.NONE);
stavesmo40392.setContext(context);
stavesmo40392.draw();
smo40392v0.draw(context, stavesmo40392);
const stavesmo41517 = new VF.Stave(874, 301, 169);
stavesmo41517.setAttribute('id', 'stavesmo41517');
stavesmo41517.setBegBarType(VF.Barline.type.NONE);
stavesmo41517.setContext(context);
stavesmo41517.draw();
smo41517v0.draw(context, stavesmo41517);
const fmtsmo390026 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo39002v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39002v0ar = [];
const smo38985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38985'] = smo38985;
smo38985.setAttribute('id', 'smo38985');
smo38985.addModifier(new VF.Dot(), 0);
const smo38986 = new VF.Annotation('Shatz,');
smo38986.setAttribute('id', 'smo38986');
smo38986.setFont('Merriweather', 12, 'normal');
smo38986.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38985.addModifier(smo38986);
smo38986.addClass('lyric lyric-0');
smo39002v0ar.push(smo38985);
smo39002v0.addTickables(smo39002v0ar)
fmtsmo390026.joinVoices([smo39002v0]);
const fmtsmo404096 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo40409v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40409v0ar = [];
const smo40393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo40393'] = smo40393;
smo40393.setAttribute('id', 'smo40393');
smo40393.addModifier(new VF.Dot(), 0);
smo40393.addModifier(new VF.Dot(), 1);
smo40409v0ar.push(smo40393);
smo40409v0.addTickables(smo40409v0ar)
fmtsmo404096.joinVoices([smo40409v0]);
const fmtsmo415376 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo41537v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41537v0ar = [];
const smo41518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41518'] = smo41518;
smo41518.setAttribute('id', 'smo41518');
smo41537v0ar.push(smo41518);
const smo41519 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41519'] = smo41519;
smo41519.setAttribute('id', 'smo41519');
smo41537v0ar.push(smo41519);
const smo41520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41520'] = smo41520;
smo41520.setAttribute('id', 'smo41520');
smo41537v0ar.push(smo41520);
const smo41521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41521'] = smo41521;
smo41521.setAttribute('id', 'smo41521');
smo41537v0ar.push(smo41521);
smo41537v0.addTickables(smo41537v0ar)
fmtsmo415376.joinVoices([smo41537v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo390026.format([smo39002v0,smo40409v0,smo41537v0], 154);
const stavesmo39002 = new VF.Stave(1043, 119, 168);
stavesmo39002.setAttribute('id', 'stavesmo39002');
stavesmo39002.setBegBarType(VF.Barline.type.NONE);
stavesmo39002.setContext(context);
stavesmo39002.draw();
smo39002v0.draw(context, stavesmo39002);
const stavesmo40409 = new VF.Stave(1043, 226, 168);
stavesmo40409.setAttribute('id', 'stavesmo40409');
stavesmo40409.setBegBarType(VF.Barline.type.NONE);
stavesmo40409.setContext(context);
stavesmo40409.draw();
smo40409v0.draw(context, stavesmo40409);
const stavesmo41537 = new VF.Stave(1043, 301, 168);
stavesmo41537.setAttribute('id', 'stavesmo41537');
stavesmo41537.setBegBarType(VF.Barline.type.NONE);
stavesmo41537.setContext(context);
stavesmo41537.draw();
smo41537v0.draw(context, stavesmo41537);
const rightsmo42632stavesmo390022 = new VF.StaveConnector(stavesmo39002, stavesmo41537).setType(0);
rightsmo42632stavesmo390022.setContext(context).draw();
const fmtsmo390327 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo39032v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39032v0ar = [];
const smo39003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39003'] = smo39003;
smo39003.setAttribute('id', 'smo39003');
smo39032v0ar.push(smo39003);
const smo39005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39005'] = smo39005;
smo39005.setAttribute('id', 'smo39005');
const smo39006 = new VF.Annotation('der');
smo39006.setAttribute('id', 'smo39006');
smo39006.setFont('Merriweather', 12, 'normal');
smo39006.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39005.addModifier(smo39006);
smo39006.addClass('lyric lyric-0');
const smo39007 = new VF.Annotation('hat');
smo39007.setAttribute('id', 'smo39007');
smo39007.setFont('Merriweather', 12, 'normal');
smo39007.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39005.addModifier(smo39007);
smo39007.addClass('lyric lyric-1');
smo39032v0ar.push(smo39005);
const smo39008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39008'] = smo39008;
smo39008.setAttribute('id', 'smo39008');
const smo39009 = new VF.Annotation('is');
smo39009.setAttribute('id', 'smo39009');
smo39009.setFont('Merriweather', 12, 'normal');
smo39009.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39008.addModifier(smo39009);
smo39009.addClass('lyric lyric-0');
const smo39010 = new VF.Annotation('vie');
smo39010.setAttribute('id', 'smo39010');
smo39010.setFont('Merriweather', 12, 'normal');
smo39010.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39008.addModifier(smo39010);
smo39010.addClass('lyric lyric-1 lyric-hyphen');
smo39032v0ar.push(smo39008);
const smo39011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39011'] = smo39011;
smo39011.setAttribute('id', 'smo39011');
const smo39012 = new VF.Annotation('Po');
smo39012.setAttribute('id', 'smo39012');
smo39012.setFont('Merriweather', 12, 'normal');
smo39012.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39011.addModifier(smo39012);
smo39012.addClass('lyric lyric-0 lyric-hyphen');
const smo39013 = new VF.Annotation('les');
smo39013.setAttribute('id', 'smo39013');
smo39013.setFont('Merriweather', 12, 'normal');
smo39013.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39011.addModifier(smo39013);
smo39013.addClass('lyric lyric-1');
smo39032v0ar.push(smo39011);
const smo39014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo39014'] = smo39014;
smo39014.setAttribute('id', 'smo39014');
const smo39015 = new VF.Annotation('stil');
smo39015.setAttribute('id', 'smo39015');
smo39015.setFont('Merriweather', 12, 'normal');
smo39015.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39014.addModifier(smo39015);
smo39015.addClass('lyric lyric-0 lyric-hyphen');
const smo39016 = new VF.Annotation('ge');
smo39016.setAttribute('id', 'smo39016');
smo39016.setFont('Merriweather', 12, 'normal');
smo39016.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39014.addModifier(smo39016);
smo39016.addClass('lyric lyric-1 lyric-hyphen');
smo39032v0ar.push(smo39014);
smo39032v0.addTickables(smo39032v0ar)
fmtsmo390327.joinVoices([smo39032v0]);
const fmtsmo404267 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo40426v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40426v0ar = [];
const smo40410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo40410'] = smo40410;
smo40410.setAttribute('id', 'smo40410');
smo40410.addModifier(new VF.Dot(), 0);
smo40410.addModifier(new VF.Dot(), 1);
smo40426v0ar.push(smo40410);
smo40426v0.addTickables(smo40426v0ar)
fmtsmo404267.joinVoices([smo40426v0]);
const fmtsmo415577 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo41557v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41557v0ar = [];
const smo41538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41538'] = smo41538;
smo41538.setAttribute('id', 'smo41538');
smo41557v0ar.push(smo41538);
const smo41539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41539'] = smo41539;
smo41539.setAttribute('id', 'smo41539');
smo41557v0ar.push(smo41539);
const smo41540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41540'] = smo41540;
smo41540.setAttribute('id', 'smo41540');
smo41557v0ar.push(smo41540);
const smo41541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41541'] = smo41541;
smo41541.setAttribute('id', 'smo41541');
smo41557v0ar.push(smo41541);
smo41557v0.addTickables(smo41557v0ar)
fmtsmo415577.joinVoices([smo41557v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48634 = smo39008.getStemDirection();
smo39008.setStemDirection(dirsmo48634);
smo39011.setStemDirection(dirsmo48634);
smo39014.setStemDirection(dirsmo48634);
const smo48634 = new VF.Beam([smo39008,smo39011,smo39014]);
 
// formatting measures in staff group smo42632
fmtsmo390327.format([smo39032v0,smo40426v0,smo41557v0], 232);
const stavesmo39032 = new VF.Stave(66, 451, 306);
stavesmo39032.setAttribute('id', 'stavesmo39032');
stavesmo39032.setBegBarType(1);
stavesmo39032.addClef('treble');
const keysmo39032 = new VF.KeySignature('G');
keysmo39032.addToStave(stavesmo39032);
stavesmo39032.setContext(context);
stavesmo39032.draw();
smo39032v0.draw(context, stavesmo39032);
smo48634.setContext(context);
smo48634.draw();
const stavesmo40426 = new VF.Stave(66, 566, 306);
stavesmo40426.setAttribute('id', 'stavesmo40426');
stavesmo40426.setBegBarType(1);
stavesmo40426.addClef('treble');
const keysmo40426 = new VF.KeySignature('G');
keysmo40426.addToStave(stavesmo40426);
stavesmo40426.setContext(context);
stavesmo40426.draw();
smo40426v0.draw(context, stavesmo40426);
const stavesmo41557 = new VF.Stave(66, 699, 306);
stavesmo41557.setAttribute('id', 'stavesmo41557');
stavesmo41557.setBegBarType(1);
stavesmo41557.addClef('bass');
const keysmo41557 = new VF.KeySignature('G');
keysmo41557.addToStave(stavesmo41557);
stavesmo41557.setContext(context);
stavesmo41557.draw();
smo41557v0.draw(context, stavesmo41557);
const leftsmo42632stavesmo390322 = new VF.StaveConnector(stavesmo39032, stavesmo41557).setType(1);
leftsmo42632stavesmo390322.setContext(context).draw();
const fmtsmo390518 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo39051v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39051v0ar = [];
const smo39033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39033'] = smo39033;
smo39033.setAttribute('id', 'smo39033');
smo39033.addModifier(new VF.Dot(), 0);
const smo39034 = new VF.Annotation('lion,');
smo39034.setAttribute('id', 'smo39034');
smo39034.setFont('Merriweather', 12, 'normal');
smo39034.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39033.addModifier(smo39034);
smo39034.addClass('lyric lyric-0');
const smo39035 = new VF.Annotation('sehn');
smo39035.setAttribute('id', 'smo39035');
smo39035.setFont('Merriweather', 12, 'normal');
smo39035.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39033.addModifier(smo39035);
smo39035.addClass('lyric lyric-1');
smo39051v0ar.push(smo39033);
smo39051v0.addTickables(smo39051v0ar)
fmtsmo390518.joinVoices([smo39051v0]);
const fmtsmo404438 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo40443v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40443v0ar = [];
const smo40427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40427'] = smo40427;
smo40427.setAttribute('id', 'smo40427');
smo40427.addModifier(new VF.Dot(), 0);
smo40427.addModifier(new VF.Dot(), 1);
smo40443v0ar.push(smo40427);
smo40443v0.addTickables(smo40443v0ar)
fmtsmo404438.joinVoices([smo40443v0]);
const fmtsmo415828 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo41582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41582v0ar = [];
const smo41558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41558'] = smo41558;
smo41558.setAttribute('id', 'smo41558');
smo41582v0ar.push(smo41558);
const smo41559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41559'] = smo41559;
smo41559.setAttribute('id', 'smo41559');
smo41582v0ar.push(smo41559);
const smo41560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41560'] = smo41560;
smo41560.setAttribute('id', 'smo41560');
smo41582v0ar.push(smo41560);
const smo41561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41561'] = smo41561;
smo41561.setAttribute('id', 'smo41561');
smo41582v0ar.push(smo41561);
smo41582v0.addTickables(smo41582v0ar)
fmtsmo415828.joinVoices([smo41582v0]);
const smo41582v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41582v1ar = [];
const smo41562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo41562'] = smo41562;
smo41562.setAttribute('id', 'smo41562');
smo41582v1ar.push(smo41562);
const smo41563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41563'] = smo41563;
smo41563.setAttribute('id', 'smo41563');
smo41582v1ar.push(smo41563);
const smo41564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41564'] = smo41564;
smo41564.setAttribute('id', 'smo41564');
smo41582v1ar.push(smo41564);
const smo41565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41565'] = smo41565;
smo41565.setAttribute('id', 'smo41565');
smo41582v1ar.push(smo41565);
const smo41566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo41566'] = smo41566;
smo41566.setAttribute('id', 'smo41566');
smo41582v1ar.push(smo41566);
smo41582v1.addTickables(smo41582v1ar)
fmtsmo415828.joinVoices([smo41582v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48645 = smo41564.getStemDirection();
smo41564.setStemDirection(dirsmo48645);
smo41565.setStemDirection(dirsmo48645);
smo41566.setStemDirection(dirsmo48645);
const smo48645 = new VF.Beam([smo41564,smo41565,smo41566]);
 
// formatting measures in staff group smo42632
fmtsmo390518.format([smo39051v0,smo40443v0,smo41582v0,smo41582v1], 161);
const stavesmo39051 = new VF.Stave(372, 451, 175);
stavesmo39051.setAttribute('id', 'stavesmo39051');
stavesmo39051.setBegBarType(VF.Barline.type.NONE);
stavesmo39051.setContext(context);
stavesmo39051.draw();
smo39051v0.draw(context, stavesmo39051);
const stavesmo40443 = new VF.Stave(372, 566, 175);
stavesmo40443.setAttribute('id', 'stavesmo40443');
stavesmo40443.setBegBarType(VF.Barline.type.NONE);
stavesmo40443.setContext(context);
stavesmo40443.draw();
smo40443v0.draw(context, stavesmo40443);
const stavesmo41582 = new VF.Stave(372, 699, 175);
stavesmo41582.setAttribute('id', 'stavesmo41582');
stavesmo41582.setBegBarType(VF.Barline.type.NONE);
stavesmo41582.setContext(context);
stavesmo41582.draw();
smo41582v0.draw(context, stavesmo41582);
smo41582v1.draw(context, stavesmo41582);
smo48645.setContext(context);
smo48645.draw();
const fmtsmo390819 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo39081v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39081v0ar = [];
const smo39052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39052'] = smo39052;
smo39052.setAttribute('id', 'smo39052');
smo39081v0ar.push(smo39052);
const smo39054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39054'] = smo39054;
smo39054.setAttribute('id', 'smo39054');
const smo39055 = new VF.Annotation('er');
smo39055.setAttribute('id', 'smo39055');
smo39055.setFont('Merriweather', 12, 'normal');
smo39055.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39054.addModifier(smo39055);
smo39055.addClass('lyric lyric-0');
const smo39056 = new VF.Annotation('er');
smo39056.setAttribute('id', 'smo39056');
smo39056.setFont('Merriweather', 12, 'normal');
smo39056.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39054.addModifier(smo39056);
smo39056.addClass('lyric lyric-1');
smo39081v0ar.push(smo39054);
const smo39057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39057'] = smo39057;
smo39057.setAttribute('id', 'smo39057');
const smo39058 = new VF.Annotation('fährt');
smo39058.setAttribute('id', 'smo39058');
smo39058.setFont('Merriweather', 12, 'normal');
smo39058.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39057.addModifier(smo39058);
smo39058.addClass('lyric lyric-0');
const smo39059 = new VF.Annotation('traf');
smo39059.setAttribute('id', 'smo39059');
smo39059.setFont('Merriweather', 12, 'normal');
smo39059.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39057.addModifier(smo39059);
smo39059.addClass('lyric lyric-1');
smo39081v0ar.push(smo39057);
const smo39060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39060'] = smo39060;
smo39060.setAttribute('id', 'smo39060');
const smo39061 = new VF.Annotation('durch');
smo39061.setAttribute('id', 'smo39061');
smo39061.setFont('Merriweather', 12, 'normal');
smo39061.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39060.addModifier(smo39061);
smo39061.addClass('lyric lyric-0');
const smo39062 = new VF.Annotation('la');
smo39062.setAttribute('id', 'smo39062');
smo39062.setFont('Merriweather', 12, 'normal');
smo39062.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39060.addModifier(smo39062);
smo39062.addClass('lyric lyric-1');
smo39081v0ar.push(smo39060);
const smo39063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39063'] = smo39063;
smo39063.setAttribute('id', 'smo39063');
const smo39064 = new VF.Annotation('de');
smo39064.setAttribute('id', 'smo39064');
smo39064.setFont('Merriweather', 12, 'normal');
smo39064.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39063.addModifier(smo39064);
smo39064.addClass('lyric lyric-0');
const smo39065 = new VF.Annotation('den');
smo39065.setAttribute('id', 'smo39065');
smo39065.setFont('Merriweather', 12, 'normal');
smo39065.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39063.addModifier(smo39065);
smo39065.addClass('lyric lyric-1');
smo39081v0ar.push(smo39063);
smo39081v0.addTickables(smo39081v0ar)
fmtsmo390819.joinVoices([smo39081v0]);
const fmtsmo404609 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo40460v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40460v0ar = [];
const smo40444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40444'] = smo40444;
smo40444.setAttribute('id', 'smo40444');
smo40444.addModifier(new VF.Dot(), 0);
smo40444.addModifier(new VF.Dot(), 1);
smo40460v0ar.push(smo40444);
smo40460v0.addTickables(smo40460v0ar)
fmtsmo404609.joinVoices([smo40460v0]);
const fmtsmo416049 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo41604v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41604v0ar = [];
const smo41583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41583'] = smo41583;
smo41583.setAttribute('id', 'smo41583');
smo41604v0ar.push(smo41583);
const smo41584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41584'] = smo41584;
smo41584.setAttribute('id', 'smo41584');
smo41604v0ar.push(smo41584);
const smo41585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41585'] = smo41585;
smo41585.setAttribute('id', 'smo41585');
smo41604v0ar.push(smo41585);
const smo41586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41586'] = smo41586;
smo41586.setAttribute('id', 'smo41586');
smo41604v0ar.push(smo41586);
smo41604v0.addTickables(smo41604v0ar)
fmtsmo416049.joinVoices([smo41604v0]);
const smo41604v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41604v1ar = [];
const smo41587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41587'] = smo41587;
smo41587.setAttribute('id', 'smo41587');
smo41587.addModifier(new VF.Dot(), 0);
smo41604v1ar.push(smo41587);
const smo41588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo41588'] = smo41588;
smo41588.setAttribute('id', 'smo41588');
smo41588.addModifier(new VF.Dot(), 0);
smo41604v1ar.push(smo41588);
smo41604v1.addTickables(smo41604v1ar)
fmtsmo416049.joinVoices([smo41604v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48648 = smo39057.getStemDirection();
smo39057.setStemDirection(dirsmo48648);
smo39060.setStemDirection(dirsmo48648);
smo39063.setStemDirection(dirsmo48648);
const smo48648 = new VF.Beam([smo39057,smo39060,smo39063]);
 
// formatting measures in staff group smo42632
fmtsmo390819.format([smo39081v0,smo40460v0,smo41604v0,smo41604v1], 282);
const stavesmo39081 = new VF.Stave(547, 451, 296);
stavesmo39081.setAttribute('id', 'stavesmo39081');
stavesmo39081.setBegBarType(VF.Barline.type.NONE);
stavesmo39081.setContext(context);
stavesmo39081.draw();
smo39081v0.draw(context, stavesmo39081);
smo48648.setContext(context);
smo48648.draw();
const stavesmo40460 = new VF.Stave(547, 566, 296);
stavesmo40460.setAttribute('id', 'stavesmo40460');
stavesmo40460.setBegBarType(VF.Barline.type.NONE);
stavesmo40460.setContext(context);
stavesmo40460.draw();
smo40460v0.draw(context, stavesmo40460);
const stavesmo41604 = new VF.Stave(547, 699, 296);
stavesmo41604.setAttribute('id', 'stavesmo41604');
stavesmo41604.setBegBarType(VF.Barline.type.NONE);
stavesmo41604.setContext(context);
stavesmo41604.draw();
smo41604v0.draw(context, stavesmo41604);
smo41604v1.draw(context, stavesmo41604);
const fmtsmo3910310 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo39103v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39103v0ar = [];
const smo39082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39082'] = smo39082;
smo39082.setAttribute('id', 'smo39082');
smo39082.addModifier(new VF.Dot(), 0);
const smo39083 = new VF.Annotation('Fel');
smo39083.setAttribute('id', 'smo39083');
smo39083.setFont('Merriweather', 12, 'normal');
smo39083.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39082.addModifier(smo39083);
smo39083.addClass('lyric lyric-0 lyric-hyphen');
const smo39084 = new VF.Annotation('Städt');
smo39084.setAttribute('id', 'smo39084');
smo39084.setFont('Merriweather', 12, 'normal');
smo39084.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39082.addModifier(smo39084);
smo39084.addClass('lyric lyric-1 lyric-hyphen');
smo39103v0ar.push(smo39082);
const smo39085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39085'] = smo39085;
smo39085.setAttribute('id', 'smo39085');
smo39085.addModifier(new VF.Dot(), 0);
const smo39086 = new VF.Annotation('der');
smo39086.setAttribute('id', 'smo39086');
smo39086.setFont('Merriweather', 12, 'normal');
smo39086.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39085.addModifier(smo39086);
smo39086.addClass('lyric lyric-0');
const smo39087 = new VF.Annotation('chen');
smo39087.setAttribute('id', 'smo39087');
smo39087.setFont('Merriweather', 12, 'normal');
smo39087.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39085.addModifier(smo39087);
smo39087.addClass('lyric lyric-1');
smo39103v0ar.push(smo39085);
smo39103v0.addTickables(smo39103v0ar)
fmtsmo3910310.joinVoices([smo39103v0]);
const fmtsmo4047710 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo40477v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40477v0ar = [];
const smo40461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo40461'] = smo40461;
smo40461.setAttribute('id', 'smo40461');
smo40461.addModifier(new VF.Dot(), 0);
smo40461.addModifier(new VF.Dot(), 1);
smo40477v0ar.push(smo40461);
smo40477v0.addTickables(smo40477v0ar)
fmtsmo4047710.joinVoices([smo40477v0]);
const fmtsmo4162410 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo41624v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41624v0ar = [];
const smo41605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41605'] = smo41605;
smo41605.setAttribute('id', 'smo41605');
smo41624v0ar.push(smo41605);
const smo41606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41606'] = smo41606;
smo41606.setAttribute('id', 'smo41606');
smo41624v0ar.push(smo41606);
const smo41607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41607'] = smo41607;
smo41607.setAttribute('id', 'smo41607');
smo41624v0ar.push(smo41607);
const smo41608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41608'] = smo41608;
smo41608.setAttribute('id', 'smo41608');
smo41624v0ar.push(smo41608);
smo41624v0.addTickables(smo41624v0ar)
fmtsmo4162410.joinVoices([smo41624v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3910310.format([smo39103v0,smo40477v0,smo41624v0], 174);
const stavesmo39103 = new VF.Stave(843, 451, 188);
stavesmo39103.setAttribute('id', 'stavesmo39103');
stavesmo39103.setBegBarType(VF.Barline.type.NONE);
stavesmo39103.setContext(context);
stavesmo39103.draw();
smo39103v0.draw(context, stavesmo39103);
const stavesmo40477 = new VF.Stave(843, 566, 188);
stavesmo40477.setAttribute('id', 'stavesmo40477');
stavesmo40477.setBegBarType(VF.Barline.type.NONE);
stavesmo40477.setContext(context);
stavesmo40477.draw();
smo40477v0.draw(context, stavesmo40477);
const stavesmo41624 = new VF.Stave(843, 699, 188);
stavesmo41624.setAttribute('id', 'stavesmo41624');
stavesmo41624.setBegBarType(VF.Barline.type.NONE);
stavesmo41624.setContext(context);
stavesmo41624.draw();
smo41624v0.draw(context, stavesmo41624);
const fmtsmo3912511 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo39125v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39125v0ar = [];
const smo39104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39104'] = smo39104;
smo39104.setAttribute('id', 'smo39104');
smo39104.addModifier(new VF.Dot(), 0);
const smo39105 = new VF.Annotation('Wäl');
smo39105.setAttribute('id', 'smo39105');
smo39105.setFont('Merriweather', 12, 'normal');
smo39105.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39104.addModifier(smo39105);
smo39105.addClass('lyric lyric-0 lyric-hyphen');
const smo39106 = new VF.Annotation('Mäd');
smo39106.setAttribute('id', 'smo39106');
smo39106.setFont('Merriweather', 12, 'normal');
smo39106.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39104.addModifier(smo39106);
smo39106.addClass('lyric lyric-1 lyric-hyphen');
smo39125v0ar.push(smo39104);
const smo39107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39107'] = smo39107;
smo39107.setAttribute('id', 'smo39107');
smo39107.addModifier(new VF.Dot(), 0);
const smo39108 = new VF.Annotation('der');
smo39108.setAttribute('id', 'smo39108');
smo39108.setFont('Merriweather', 12, 'normal');
smo39108.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39107.addModifier(smo39108);
smo39108.addClass('lyric lyric-0');
const smo39109 = new VF.Annotation('chen');
smo39109.setAttribute('id', 'smo39109');
smo39109.setFont('Merriweather', 12, 'normal');
smo39109.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39107.addModifier(smo39109);
smo39109.addClass('lyric lyric-1');
smo39125v0ar.push(smo39107);
smo39125v0.addTickables(smo39125v0ar)
fmtsmo3912511.joinVoices([smo39125v0]);
const fmtsmo4049411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo40494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40494v0ar = [];
const smo40478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo40478'] = smo40478;
smo40478.setAttribute('id', 'smo40478');
smo40478.addModifier(new VF.Dot(), 0);
smo40478.addModifier(new VF.Dot(), 1);
smo40494v0ar.push(smo40478);
smo40494v0.addTickables(smo40494v0ar)
fmtsmo4049411.joinVoices([smo40494v0]);
const fmtsmo4164411 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo41644v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41644v0ar = [];
const smo41625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41625'] = smo41625;
smo41625.setAttribute('id', 'smo41625');
smo41644v0ar.push(smo41625);
const smo41626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41626'] = smo41626;
smo41626.setAttribute('id', 'smo41626');
smo41644v0ar.push(smo41626);
const smo41627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41627'] = smo41627;
smo41627.setAttribute('id', 'smo41627');
smo41644v0ar.push(smo41627);
const smo41628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41628'] = smo41628;
smo41628.setAttribute('id', 'smo41628');
smo41644v0ar.push(smo41628);
smo41644v0.addTickables(smo41644v0ar)
fmtsmo4164411.joinVoices([smo41644v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3912511.format([smo39125v0,smo40494v0,smo41644v0], 168);
const stavesmo39125 = new VF.Stave(1031, 451, 182);
stavesmo39125.setAttribute('id', 'stavesmo39125');
stavesmo39125.setBegBarType(VF.Barline.type.NONE);
stavesmo39125.setContext(context);
stavesmo39125.draw();
smo39125v0.draw(context, stavesmo39125);
const stavesmo40494 = new VF.Stave(1031, 566, 182);
stavesmo40494.setAttribute('id', 'stavesmo40494');
stavesmo40494.setBegBarType(VF.Barline.type.NONE);
stavesmo40494.setContext(context);
stavesmo40494.draw();
smo40494v0.draw(context, stavesmo40494);
const stavesmo41644 = new VF.Stave(1031, 699, 182);
stavesmo41644.setAttribute('id', 'stavesmo41644');
stavesmo41644.setBegBarType(VF.Barline.type.NONE);
stavesmo41644.setContext(context);
stavesmo41644.draw();
smo41644v0.draw(context, stavesmo41644);
const rightsmo42632stavesmo391252 = new VF.StaveConnector(stavesmo39125, stavesmo41644).setType(0);
rightsmo42632stavesmo391252.setContext(context).draw();
const fmtsmo3915312 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo39153v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39153v0ar = [];
const smo39126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39126'] = smo39126;
smo39126.setAttribute('id', 'smo39126');
const smo39127 = new VF.Annotation('ü');
smo39127.setAttribute('id', 'smo39127');
smo39127.setFont('Merriweather', 12, 'normal');
smo39127.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39126.addModifier(smo39127);
smo39127.addClass('lyric lyric-0 lyric-hyphen');
const smo39128 = new VF.Annotation('schö');
smo39128.setAttribute('id', 'smo39128');
smo39128.setFont('Merriweather', 12, 'normal');
smo39128.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39126.addModifier(smo39128);
smo39128.addClass('lyric lyric-1 lyric-hyphen');
smo39153v0ar.push(smo39126);
const smo39129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39129'] = smo39129;
smo39129.setAttribute('id', 'smo39129');
const smo39130 = new VF.Annotation('ber');
smo39130.setAttribute('id', 'smo39130');
smo39130.setFont('Merriweather', 12, 'normal');
smo39130.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39129.addModifier(smo39130);
smo39130.addClass('lyric lyric-0 lyric-hyphen');
const smo39131 = new VF.Annotation('new');
smo39131.setAttribute('id', 'smo39131');
smo39131.setFont('Merriweather', 12, 'normal');
smo39131.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39129.addModifier(smo39131);
smo39131.addClass('lyric lyric-1');
smo39153v0ar.push(smo39129);
const smo39132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo39132'] = smo39132;
smo39132.setAttribute('id', 'smo39132');
const smo39133 = new VF.Annotation('das');
smo39133.setAttribute('id', 'smo39133');
smo39133.setFont('Merriweather', 12, 'normal');
smo39133.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39132.addModifier(smo39133);
smo39133.addClass('lyric lyric-0');
const smo39134 = new VF.Annotation('als');
smo39134.setAttribute('id', 'smo39134');
smo39134.setFont('Merriweather', 12, 'normal');
smo39134.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39132.addModifier(smo39134);
smo39134.addClass('lyric lyric-1');
smo39153v0ar.push(smo39132);
const smo39135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39135'] = smo39135;
smo39135.setAttribute('id', 'smo39135');
smo39135.addModifier(new VF.Dot(), 0);
const smo39136 = new VF.Annotation('Land;');
smo39136.setAttribute('id', 'smo39136');
smo39136.setFont('Merriweather', 12, 'normal');
smo39136.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39135.addModifier(smo39136);
smo39136.addClass('lyric lyric-0 lyric-hyphen');
const smo39137 = new VF.Annotation('ich');
smo39137.setAttribute('id', 'smo39137');
smo39137.setFont('Merriweather', 12, 'normal');
smo39137.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39135.addModifier(smo39137);
smo39137.addClass('lyric lyric-1');
smo39153v0ar.push(smo39135);
smo39153v0.addTickables(smo39153v0ar)
fmtsmo3915312.joinVoices([smo39153v0]);
const fmtsmo4051412 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo40514v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40514v0ar = [];
const smo40495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40495'] = smo40495;
smo40495.setAttribute('id', 'smo40495');
smo40495.addModifier(new VF.Dot(), 0);
smo40495.addModifier(new VF.Dot(), 1);
smo40514v0ar.push(smo40495);
const smo40496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n"]}'))
noteHash['smo40496'] = smo40496;
smo40496.setAttribute('id', 'smo40496');
smo40514v0ar.push(smo40496);
const smo40497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n"]}'))
noteHash['smo40497'] = smo40497;
smo40497.setAttribute('id', 'smo40497');
smo40514v0ar.push(smo40497);
const smo40498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
noteHash['smo40498'] = smo40498;
smo40498.setAttribute('id', 'smo40498');
smo40514v0ar.push(smo40498);
smo40514v0.addTickables(smo40514v0ar)
fmtsmo4051412.joinVoices([smo40514v0]);
const fmtsmo4166412 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo41664v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41664v0ar = [];
const smo41645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41645'] = smo41645;
smo41645.setAttribute('id', 'smo41645');
smo41664v0ar.push(smo41645);
const smo41646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41646'] = smo41646;
smo41646.setAttribute('id', 'smo41646');
smo41664v0ar.push(smo41646);
const smo41647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41647'] = smo41647;
smo41647.setAttribute('id', 'smo41647');
smo41664v0ar.push(smo41647);
const smo41648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41648'] = smo41648;
smo41648.setAttribute('id', 'smo41648');
smo41664v0ar.push(smo41648);
smo41664v0.addTickables(smo41664v0ar)
fmtsmo4166412.joinVoices([smo41664v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48675 = smo39126.getStemDirection();
smo39126.setStemDirection(dirsmo48675);
smo39129.setStemDirection(dirsmo48675);
smo39132.setStemDirection(dirsmo48675);
const smo48675 = new VF.Beam([smo39126,smo39129,smo39132]);
const dirsmo48678 = smo40496.getStemDirection();
smo40496.setStemDirection(dirsmo48678);
smo40497.setStemDirection(dirsmo48678);
smo40498.setStemDirection(dirsmo48678);
const smo48678 = new VF.Beam([smo40496,smo40497,smo40498]);
 
// formatting measures in staff group smo42632
fmtsmo3915312.format([smo39153v0,smo40514v0,smo41664v0], 289);
const stavesmo39153 = new VF.Stave(66, 844, 363);
stavesmo39153.setAttribute('id', 'stavesmo39153');
stavesmo39153.setBegBarType(1);
stavesmo39153.addClef('treble');
const keysmo39153 = new VF.KeySignature('G');
keysmo39153.addToStave(stavesmo39153);
stavesmo39153.setContext(context);
stavesmo39153.draw();
smo39153v0.draw(context, stavesmo39153);
smo48675.setContext(context);
smo48675.draw();
const stavesmo40514 = new VF.Stave(66, 967, 363);
stavesmo40514.setAttribute('id', 'stavesmo40514');
stavesmo40514.setBegBarType(1);
stavesmo40514.addClef('treble');
const keysmo40514 = new VF.KeySignature('G');
keysmo40514.addToStave(stavesmo40514);
stavesmo40514.setContext(context);
stavesmo40514.draw();
smo40514v0.draw(context, stavesmo40514);
smo48678.setContext(context);
smo48678.draw();
const stavesmo41664 = new VF.Stave(66, 1057, 363);
stavesmo41664.setAttribute('id', 'stavesmo41664');
stavesmo41664.setBegBarType(1);
stavesmo41664.addClef('bass');
const keysmo41664 = new VF.KeySignature('G');
keysmo41664.addToStave(stavesmo41664);
stavesmo41664.setContext(context);
stavesmo41664.draw();
smo41664v0.draw(context, stavesmo41664);
const leftsmo42632stavesmo391532 = new VF.StaveConnector(stavesmo39153, stavesmo41664).setType(1);
leftsmo42632stavesmo391532.setContext(context).draw();
const fmtsmo3917613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo39176v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39176v0ar = [];
const smo39154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39154'] = smo39154;
smo39154.setAttribute('id', 'smo39154');
const smo39156 = new VF.Annotation('-');
smo39156.setAttribute('id', 'smo39156');
smo39156.setFont('Merriweather', 12, 'normal');
smo39156.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39154.addModifier(smo39156);
smo39156.addClass('lyric lyric-1 lyric-hyphen');
smo39176v0ar.push(smo39154);
const smo39157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39157'] = smo39157;
smo39157.setAttribute('id', 'smo39157');
smo39176v0ar.push(smo39157);
const smo39158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39158'] = smo39158;
smo39158.setAttribute('id', 'smo39158');
smo39158.addModifier(new VF.Dot(), 0);
const smo39159 = new VF.Annotation('von');
smo39159.setAttribute('id', 'smo39159');
smo39159.setFont('Merriweather', 12, 'normal');
smo39159.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39158.addModifier(smo39159);
smo39159.addClass('lyric lyric-0');
const smo39160 = new VF.Annotation('Trotz');
smo39160.setAttribute('id', 'smo39160');
smo39160.setFont('Merriweather', 12, 'normal');
smo39160.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39158.addModifier(smo39160);
smo39160.addClass('lyric lyric-1 lyric-hyphen');
smo39176v0ar.push(smo39158);
smo39176v0.addTickables(smo39176v0ar)
fmtsmo3917613.joinVoices([smo39176v0]);
const fmtsmo4053113 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo40531v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40531v0ar = [];
const smo40515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo40515'] = smo40515;
smo40515.setAttribute('id', 'smo40515');
smo40515.addModifier(new VF.Dot(), 0);
smo40515.addModifier(new VF.Dot(), 1);
smo40531v0ar.push(smo40515);
smo40531v0.addTickables(smo40531v0ar)
fmtsmo4053113.joinVoices([smo40531v0]);
const fmtsmo4168413 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo41684v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41684v0ar = [];
const smo41665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41665'] = smo41665;
smo41665.setAttribute('id', 'smo41665');
smo41684v0ar.push(smo41665);
const smo41666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41666'] = smo41666;
smo41666.setAttribute('id', 'smo41666');
smo41684v0ar.push(smo41666);
const smo41667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41667'] = smo41667;
smo41667.setAttribute('id', 'smo41667');
smo41684v0ar.push(smo41667);
const smo41668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41668'] = smo41668;
smo41668.setAttribute('id', 'smo41668');
smo41684v0ar.push(smo41668);
smo41684v0.addTickables(smo41684v0ar)
fmtsmo4168413.joinVoices([smo41684v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3917613.format([smo39176v0,smo40531v0,smo41684v0], 147);
const stavesmo39176 = new VF.Stave(429, 844, 161);
stavesmo39176.setAttribute('id', 'stavesmo39176');
stavesmo39176.setBegBarType(VF.Barline.type.NONE);
stavesmo39176.setContext(context);
stavesmo39176.draw();
smo39176v0.draw(context, stavesmo39176);
const stavesmo40531 = new VF.Stave(429, 967, 161);
stavesmo40531.setAttribute('id', 'stavesmo40531');
stavesmo40531.setBegBarType(VF.Barline.type.NONE);
stavesmo40531.setContext(context);
stavesmo40531.draw();
smo40531v0.draw(context, stavesmo40531);
const stavesmo41684 = new VF.Stave(429, 1057, 161);
stavesmo41684.setAttribute('id', 'stavesmo41684');
stavesmo41684.setBegBarType(VF.Barline.type.NONE);
stavesmo41684.setContext(context);
stavesmo41684.draw();
smo41684v0.draw(context, stavesmo41684);
const fmtsmo3919514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo39195v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39195v0ar = [];
const smo39177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39177'] = smo39177;
smo39177.setAttribute('id', 'smo39177');
smo39177.addModifier(new VF.Dot(), 0);
const smo39178 = new VF.Annotation('fern');
smo39178.setAttribute('id', 'smo39178');
smo39178.setFont('Merriweather', 12, 'normal');
smo39178.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39177.addModifier(smo39178);
smo39178.addClass('lyric lyric-0');
const smo39179 = new VF.Annotation('dem');
smo39179.setAttribute('id', 'smo39179');
smo39179.setFont('Merriweather', 12, 'normal');
smo39179.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39177.addModifier(smo39179);
smo39179.addClass('lyric lyric-1');
smo39195v0ar.push(smo39177);
smo39195v0.addTickables(smo39195v0ar)
fmtsmo3919514.joinVoices([smo39195v0]);
const fmtsmo4054814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo40548v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40548v0ar = [];
const smo40532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo40532'] = smo40532;
smo40532.setAttribute('id', 'smo40532');
smo40532.addModifier(new VF.Dot(), 0);
smo40532.addModifier(new VF.Dot(), 1);
smo40548v0ar.push(smo40532);
smo40548v0.addTickables(smo40548v0ar)
fmtsmo4054814.joinVoices([smo40548v0]);
const fmtsmo4170614 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo41706v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41706v0ar = [];
const smo41685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41685'] = smo41685;
smo41685.setAttribute('id', 'smo41685');
smo41706v0ar.push(smo41685);
const smo41686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41686'] = smo41686;
smo41686.setAttribute('id', 'smo41686');
smo41706v0ar.push(smo41686);
const smo41687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41687'] = smo41687;
smo41687.setAttribute('id', 'smo41687');
smo41706v0ar.push(smo41687);
const smo41688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41688'] = smo41688;
smo41688.setAttribute('id', 'smo41688');
smo41706v0ar.push(smo41688);
smo41706v0.addTickables(smo41706v0ar)
fmtsmo4170614.joinVoices([smo41706v0]);
const smo41706v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41706v1ar = [];
const smo41689 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo41689'] = smo41689;
smo41689.setAttribute('id', 'smo41689');
smo41689.addModifier(new VF.Dot(), 0);
smo41706v1ar.push(smo41689);
const smo41690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41690'] = smo41690;
smo41690.setAttribute('id', 'smo41690');
smo41690.addModifier(new VF.Dot(), 0);
smo41706v1ar.push(smo41690);
smo41706v1.addTickables(smo41706v1ar)
fmtsmo4170614.joinVoices([smo41706v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3919514.format([smo39195v0,smo40548v0,smo41706v0,smo41706v1], 144);
const stavesmo39195 = new VF.Stave(590, 844, 158);
stavesmo39195.setAttribute('id', 'stavesmo39195');
stavesmo39195.setBegBarType(VF.Barline.type.NONE);
stavesmo39195.setContext(context);
stavesmo39195.draw();
smo39195v0.draw(context, stavesmo39195);
const stavesmo40548 = new VF.Stave(590, 967, 158);
stavesmo40548.setAttribute('id', 'stavesmo40548');
stavesmo40548.setBegBarType(VF.Barline.type.NONE);
stavesmo40548.setContext(context);
stavesmo40548.draw();
smo40548v0.draw(context, stavesmo40548);
const stavesmo41706 = new VF.Stave(590, 1057, 158);
stavesmo41706.setAttribute('id', 'stavesmo41706');
stavesmo41706.setBegBarType(VF.Barline.type.NONE);
stavesmo41706.setContext(context);
stavesmo41706.draw();
smo41706v0.draw(context, stavesmo41706);
smo41706v1.draw(context, stavesmo41706);
const fmtsmo3922515 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo39225v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39225v0ar = [];
const smo39196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39196'] = smo39196;
smo39196.setAttribute('id', 'smo39196');
const smo39197 = new VF.Annotation('-');
smo39197.setAttribute('id', 'smo39197');
smo39197.setFont('Merriweather', 12, 'normal');
smo39197.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39196.addModifier(smo39197);
smo39197.addClass('lyric lyric-0 lyric-hyphen');
smo39225v0ar.push(smo39196);
const smo39198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39198'] = smo39198;
smo39198.setAttribute('id', 'smo39198');
const smo39199 = new VF.Annotation('er');
smo39199.setAttribute('id', 'smo39199');
smo39199.setFont('Merriweather', 12, 'normal');
smo39199.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39198.addModifier(smo39199);
smo39199.addClass('lyric lyric-0 lyric-hyphen');
const smo39200 = new VF.Annotation('tat');
smo39200.setAttribute('id', 'smo39200');
smo39200.setFont('Merriweather', 12, 'normal');
smo39200.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39198.addModifier(smo39200);
smo39200.addClass('lyric lyric-1');
smo39225v0ar.push(smo39198);
const smo39201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39201'] = smo39201;
smo39201.setAttribute('id', 'smo39201');
const smo39202 = new VF.Annotation('kenn');
smo39202.setAttribute('id', 'smo39202');
smo39202.setFont('Merriweather', 12, 'normal');
smo39202.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39201.addModifier(smo39202);
smo39202.addClass('lyric lyric-0');
const smo39203 = new VF.Annotation('er');
smo39203.setAttribute('id', 'smo39203');
smo39203.setFont('Merriweather', 12, 'normal');
smo39203.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39201.addModifier(smo39203);
smo39203.addClass('lyric lyric-1');
smo39225v0ar.push(smo39201);
const smo39204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39204'] = smo39204;
smo39204.setAttribute('id', 'smo39204');
const smo39205 = new VF.Annotation('ich');
smo39205.setAttribute('id', 'smo39205');
smo39205.setFont('Merriweather', 12, 'normal');
smo39205.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39204.addModifier(smo39205);
smo39205.addClass('lyric lyric-0');
const smo39206 = new VF.Annotation('mir');
smo39206.setAttribute('id', 'smo39206');
smo39206.setFont('Merriweather', 12, 'normal');
smo39206.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39204.addModifier(smo39206);
smo39206.addClass('lyric lyric-1');
smo39225v0ar.push(smo39204);
const smo39207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo39207'] = smo39207;
smo39207.setAttribute('id', 'smo39207');
const smo39208 = new VF.Annotation('ihn');
smo39208.setAttribute('id', 'smo39208');
smo39208.setFont('Merriweather', 12, 'normal');
smo39208.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39207.addModifier(smo39208);
smo39208.addClass('lyric lyric-0');
const smo39209 = new VF.Annotation('ge');
smo39209.setAttribute('id', 'smo39209');
smo39209.setFont('Merriweather', 12, 'normal');
smo39209.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39207.addModifier(smo39209);
smo39209.addClass('lyric lyric-1 lyric-hyphen');
smo39225v0ar.push(smo39207);
smo39225v0.addTickables(smo39225v0ar)
fmtsmo3922515.joinVoices([smo39225v0]);
const fmtsmo4056515 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo40565v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40565v0ar = [];
const smo40549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo40549'] = smo40549;
smo40549.setAttribute('id', 'smo40549');
smo40549.addModifier(new VF.Dot(), 0);
smo40549.addModifier(new VF.Dot(), 1);
smo40565v0ar.push(smo40549);
smo40565v0.addTickables(smo40565v0ar)
fmtsmo4056515.joinVoices([smo40565v0]);
const fmtsmo4172815 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo41728v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41728v0ar = [];
const smo41707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41707'] = smo41707;
smo41707.setAttribute('id', 'smo41707');
smo41728v0ar.push(smo41707);
const smo41708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41708'] = smo41708;
smo41708.setAttribute('id', 'smo41708');
smo41728v0ar.push(smo41708);
const smo41709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41709'] = smo41709;
smo41709.setAttribute('id', 'smo41709');
smo41728v0ar.push(smo41709);
const smo41710 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo41710'] = smo41710;
smo41710.setAttribute('id', 'smo41710');
smo41728v0ar.push(smo41710);
smo41728v0.addTickables(smo41728v0ar)
fmtsmo4172815.joinVoices([smo41728v0]);
const smo41728v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41728v1ar = [];
const smo41711 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo41711'] = smo41711;
smo41711.setAttribute('id', 'smo41711');
smo41711.addModifier(new VF.Dot(), 0);
smo41728v1ar.push(smo41711);
const smo41712 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo41712'] = smo41712;
smo41712.setAttribute('id', 'smo41712');
smo41712.addModifier(new VF.Dot(), 0);
smo41728v1ar.push(smo41712);
smo41728v1.addTickables(smo41728v1ar)
fmtsmo4172815.joinVoices([smo41728v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48695 = smo39201.getStemDirection();
smo39201.setStemDirection(dirsmo48695);
smo39204.setStemDirection(dirsmo48695);
smo39207.setStemDirection(dirsmo48695);
const smo48695 = new VF.Beam([smo39201,smo39204,smo39207]);
 
// formatting measures in staff group smo42632
fmtsmo3922515.format([smo39225v0,smo40565v0,smo41728v0,smo41728v1], 265);
const stavesmo39225 = new VF.Stave(748, 844, 279);
stavesmo39225.setAttribute('id', 'stavesmo39225');
stavesmo39225.setBegBarType(VF.Barline.type.NONE);
stavesmo39225.setContext(context);
stavesmo39225.draw();
smo39225v0.draw(context, stavesmo39225);
smo48695.setContext(context);
smo48695.draw();
const stavesmo40565 = new VF.Stave(748, 967, 279);
stavesmo40565.setAttribute('id', 'stavesmo40565');
stavesmo40565.setBegBarType(VF.Barline.type.NONE);
stavesmo40565.setContext(context);
stavesmo40565.draw();
smo40565v0.draw(context, stavesmo40565);
const stavesmo41728 = new VF.Stave(748, 1057, 279);
stavesmo41728.setAttribute('id', 'stavesmo41728');
stavesmo41728.setBegBarType(VF.Barline.type.NONE);
stavesmo41728.setContext(context);
stavesmo41728.draw();
smo41728v0.draw(context, stavesmo41728);
smo41728v1.draw(context, stavesmo41728);
const fmtsmo3924416 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo39244v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39244v0ar = [];
const smo39226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39226'] = smo39226;
smo39226.setAttribute('id', 'smo39226');
smo39226.addModifier(new VF.Dot(), 0);
const smo39227 = new VF.Annotation('schen');
smo39227.setAttribute('id', 'smo39227');
smo39227.setFont('Merriweather', 12, 'normal');
smo39227.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39226.addModifier(smo39227);
smo39227.addClass('lyric lyric-0');
const smo39228 = new VF.Annotation('stehn');
smo39228.setAttribute('id', 'smo39228');
smo39228.setFont('Merriweather', 12, 'normal');
smo39228.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39226.addModifier(smo39228);
smo39228.addClass('lyric lyric-1');
smo39244v0ar.push(smo39226);
smo39244v0.addTickables(smo39244v0ar)
fmtsmo3924416.joinVoices([smo39244v0]);
const fmtsmo4058216 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo40582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40582v0ar = [];
const smo40566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo40566'] = smo40566;
smo40566.setAttribute('id', 'smo40566');
smo40566.addModifier(new VF.Dot(), 0);
smo40566.addModifier(new VF.Dot(), 1);
smo40582v0ar.push(smo40566);
smo40582v0.addTickables(smo40582v0ar)
fmtsmo4058216.joinVoices([smo40582v0]);
const fmtsmo4175316 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo41753v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41753v0ar = [];
const smo41729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41729'] = smo41729;
smo41729.setAttribute('id', 'smo41729');
smo41753v0ar.push(smo41729);
const smo41730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41730'] = smo41730;
smo41730.setAttribute('id', 'smo41730');
smo41753v0ar.push(smo41730);
const smo41731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41731'] = smo41731;
smo41731.setAttribute('id', 'smo41731');
smo41753v0ar.push(smo41731);
const smo41732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41732'] = smo41732;
smo41732.setAttribute('id', 'smo41732');
smo41753v0ar.push(smo41732);
smo41753v0.addTickables(smo41753v0ar)
fmtsmo4175316.joinVoices([smo41753v0]);
const smo41753v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41753v1ar = [];
const smo41733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["eb/4/r"]}'))
noteHash['smo41733'] = smo41733;
smo41733.setAttribute('id', 'smo41733');
smo41753v1ar.push(smo41733);
const smo41734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41734'] = smo41734;
smo41734.setAttribute('id', 'smo41734');
smo41753v1ar.push(smo41734);
const smo41735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41735'] = smo41735;
smo41735.setAttribute('id', 'smo41735');
smo41753v1ar.push(smo41735);
const smo41736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41736'] = smo41736;
smo41736.setAttribute('id', 'smo41736');
smo41753v1ar.push(smo41736);
const smo41737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41737'] = smo41737;
smo41737.setAttribute('id', 'smo41737');
smo41753v1ar.push(smo41737);
smo41753v1.addTickables(smo41753v1ar)
fmtsmo4175316.joinVoices([smo41753v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48706 = smo41735.getStemDirection();
smo41735.setStemDirection(dirsmo48706);
smo41736.setStemDirection(dirsmo48706);
smo41737.setStemDirection(dirsmo48706);
const smo48706 = new VF.Beam([smo41735,smo41736,smo41737]);
 
// formatting measures in staff group smo42632
fmtsmo3924416.format([smo39244v0,smo40582v0,smo41753v0,smo41753v1], 170);
const stavesmo39244 = new VF.Stave(1027, 844, 184);
stavesmo39244.setAttribute('id', 'stavesmo39244');
stavesmo39244.setBegBarType(VF.Barline.type.NONE);
stavesmo39244.setContext(context);
stavesmo39244.draw();
smo39244v0.draw(context, stavesmo39244);
const stavesmo40582 = new VF.Stave(1027, 967, 184);
stavesmo40582.setAttribute('id', 'stavesmo40582');
stavesmo40582.setBegBarType(VF.Barline.type.NONE);
stavesmo40582.setContext(context);
stavesmo40582.draw();
smo40582v0.draw(context, stavesmo40582);
const stavesmo41753 = new VF.Stave(1027, 1057, 184);
stavesmo41753.setAttribute('id', 'stavesmo41753');
stavesmo41753.setBegBarType(VF.Barline.type.NONE);
stavesmo41753.setContext(context);
stavesmo41753.draw();
smo41753v0.draw(context, stavesmo41753);
smo41753v1.draw(context, stavesmo41753);
smo48706.setContext(context);
smo48706.draw();
const rightsmo42632stavesmo392442 = new VF.StaveConnector(stavesmo39244, stavesmo41753).setType(0);
rightsmo42632stavesmo392442.setContext(context).draw();
const fmtsmo3927417 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo39274v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39274v0ar = [];
const smo39245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39245'] = smo39245;
smo39245.setAttribute('id', 'smo39245');
const smo39246 = new VF.Annotation('-');
smo39246.setAttribute('id', 'smo39246');
smo39246.setFont('Merriweather', 12, 'normal');
smo39246.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39245.addModifier(smo39246);
smo39246.addClass('lyric lyric-0 lyric-hyphen');
smo39274v0ar.push(smo39245);
const smo39247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39247'] = smo39247;
smo39247.setAttribute('id', 'smo39247');
const smo39248 = new VF.Annotation('den');
smo39248.setAttribute('id', 'smo39248');
smo39248.setFont('Merriweather', 12, 'normal');
smo39248.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39247.addModifier(smo39248);
smo39248.addClass('lyric lyric-0');
const smo39249 = new VF.Annotation('er');
smo39249.setAttribute('id', 'smo39249');
smo39249.setFont('Merriweather', 12, 'normal');
smo39249.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39247.addModifier(smo39249);
smo39249.addClass('lyric lyric-1');
smo39274v0ar.push(smo39247);
const smo39250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39250'] = smo39250;
smo39250.setAttribute('id', 'smo39250');
const smo39251 = new VF.Annotation('all\'');
smo39251.setAttribute('id', 'smo39251');
smo39251.setFont('Merriweather', 12, 'normal');
smo39251.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39250.addModifier(smo39251);
smo39251.addClass('lyric lyric-0');
const smo39252 = new VF.Annotation('splet');
smo39252.setAttribute('id', 'smo39252');
smo39252.setFont('Merriweather', 12, 'normal');
smo39252.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39250.addModifier(smo39252);
smo39252.addClass('lyric lyric-1');
smo39274v0ar.push(smo39250);
const smo39253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39253'] = smo39253;
smo39253.setAttribute('id', 'smo39253');
const smo39254 = new VF.Annotation('sei');
smo39254.setAttribute('id', 'smo39254');
smo39254.setFont('Merriweather', 12, 'normal');
smo39254.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39253.addModifier(smo39254);
smo39254.addClass('lyric lyric-0 lyric-hyphen');
const smo39255 = new VF.Annotation('sei');
smo39255.setAttribute('id', 'smo39255');
smo39255.setFont('Merriweather', 12, 'normal');
smo39255.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39253.addModifier(smo39255);
smo39255.addClass('lyric lyric-1 lyric-hyphen');
smo39274v0ar.push(smo39253);
const smo39256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39256'] = smo39256;
smo39256.setAttribute('id', 'smo39256');
const smo39257 = new VF.Annotation('ne');
smo39257.setAttribute('id', 'smo39257');
smo39257.setFont('Merriweather', 12, 'normal');
smo39257.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39256.addModifier(smo39257);
smo39257.addClass('lyric lyric-0');
const smo39258 = new VF.Annotation('ne');
smo39258.setAttribute('id', 'smo39258');
smo39258.setFont('Merriweather', 12, 'normal');
smo39258.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39256.addModifier(smo39258);
smo39258.addClass('lyric lyric-1');
smo39274v0ar.push(smo39256);
smo39274v0.addTickables(smo39274v0ar)
fmtsmo3927417.joinVoices([smo39274v0]);
const fmtsmo4060117 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo40601v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40601v0ar = [];
const smo40583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40583'] = smo40583;
smo40583.setAttribute('id', 'smo40583');
smo40583.addModifier(new VF.Dot(), 0);
smo40601v0ar.push(smo40583);
const smo40584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40584'] = smo40584;
smo40584.setAttribute('id', 'smo40584');
smo40601v0ar.push(smo40584);
const smo40585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40585'] = smo40585;
smo40585.setAttribute('id', 'smo40585');
smo40601v0ar.push(smo40585);
smo40601v0.addTickables(smo40601v0ar)
fmtsmo4060117.joinVoices([smo40601v0]);
const fmtsmo4177417 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo41774v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41774v0ar = [];
const smo41754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41754'] = smo41754;
smo41754.setAttribute('id', 'smo41754');
smo41774v0ar.push(smo41754);
const smo41755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41755'] = smo41755;
smo41755.setAttribute('id', 'smo41755');
smo41774v0ar.push(smo41755);
const smo41756 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41756'] = smo41756;
smo41756.setAttribute('id', 'smo41756');
smo41774v0ar.push(smo41756);
const smo41757 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41757'] = smo41757;
smo41757.setAttribute('id', 'smo41757');
smo41774v0ar.push(smo41757);
smo41774v0.addTickables(smo41774v0ar)
fmtsmo4177417.joinVoices([smo41774v0]);
const smo41774v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41774v1ar = [];
const smo41758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo41758'] = smo41758;
smo41758.setAttribute('id', 'smo41758');
smo41758.addModifier(new VF.Dot(), 0);
smo41774v1ar.push(smo41758);
smo41774v1.addTickables(smo41774v1ar)
fmtsmo4177417.joinVoices([smo41774v1]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48716 = smo39250.getStemDirection();
smo39250.setStemDirection(dirsmo48716);
smo39253.setStemDirection(dirsmo48716);
smo39256.setStemDirection(dirsmo48716);
const smo48716 = new VF.Beam([smo39250,smo39253,smo39256]);
 
// formatting measures in staff group smo42632
fmtsmo3927417.format([smo39274v0,smo40601v0,smo41774v0,smo41774v1], 245);
const stavesmo39274 = new VF.Stave(66, 1197, 319);
stavesmo39274.setAttribute('id', 'stavesmo39274');
stavesmo39274.setBegBarType(1);
stavesmo39274.addClef('treble');
const keysmo39274 = new VF.KeySignature('G');
keysmo39274.addToStave(stavesmo39274);
stavesmo39274.setContext(context);
stavesmo39274.draw();
smo39274v0.draw(context, stavesmo39274);
smo48716.setContext(context);
smo48716.draw();
const stavesmo40601 = new VF.Stave(66, 1309, 319);
stavesmo40601.setAttribute('id', 'stavesmo40601');
stavesmo40601.setBegBarType(1);
stavesmo40601.addClef('treble');
const keysmo40601 = new VF.KeySignature('G');
keysmo40601.addToStave(stavesmo40601);
stavesmo40601.setContext(context);
stavesmo40601.draw();
smo40601v0.draw(context, stavesmo40601);
const stavesmo41774 = new VF.Stave(66, 1449, 319);
stavesmo41774.setAttribute('id', 'stavesmo41774');
stavesmo41774.setBegBarType(1);
stavesmo41774.addClef('bass');
const keysmo41774 = new VF.KeySignature('G');
keysmo41774.addToStave(stavesmo41774);
stavesmo41774.setContext(context);
stavesmo41774.draw();
smo41774v0.draw(context, stavesmo41774);
smo41774v1.draw(context, stavesmo41774);
const leftsmo42632stavesmo392742 = new VF.StaveConnector(stavesmo39274, stavesmo41774).setType(1);
leftsmo42632stavesmo392742.setContext(context).draw();
const fmtsmo3929618 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo39296v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39296v0ar = [];
const smo39275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39275'] = smo39275;
smo39275.setAttribute('id', 'smo39275');
smo39275.addModifier(new VF.Dot(), 0);
const smo39276 = new VF.Annotation('Lie');
smo39276.setAttribute('id', 'smo39276');
smo39276.setFont('Merriweather', 12, 'normal');
smo39276.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39275.addModifier(smo39276);
smo39276.addClass('lyric lyric-0 lyric-hyphen');
const smo39277 = new VF.Annotation('Lie');
smo39277.setAttribute('id', 'smo39277');
smo39277.setFont('Merriweather', 12, 'normal');
smo39277.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39275.addModifier(smo39277);
smo39277.addClass('lyric lyric-1 lyric-hyphen');
smo39296v0ar.push(smo39275);
const smo39278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39278'] = smo39278;
smo39278.setAttribute('id', 'smo39278');
smo39278.addModifier(new VF.Dot(), 0);
const smo39279 = new VF.Annotation('der');
smo39279.setAttribute('id', 'smo39279');
smo39279.setFont('Merriweather', 12, 'normal');
smo39279.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39278.addModifier(smo39279);
smo39279.addClass('lyric lyric-0');
const smo39280 = new VF.Annotation('der');
smo39280.setAttribute('id', 'smo39280');
smo39280.setFont('Merriweather', 12, 'normal');
smo39280.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39278.addModifier(smo39280);
smo39280.addClass('lyric lyric-1');
smo39296v0ar.push(smo39278);
smo39296v0.addTickables(smo39296v0ar)
fmtsmo3929618.joinVoices([smo39296v0]);
const fmtsmo4061918 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo40619v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40619v0ar = [];
const smo40602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40602'] = smo40602;
smo40602.setAttribute('id', 'smo40602');
smo40602.addModifier(new VF.Dot(), 0);
smo40619v0ar.push(smo40602);
const smo40603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
noteHash['smo40603'] = smo40603;
smo40603.setAttribute('id', 'smo40603');
smo40603.addModifier(new VF.Dot(), 0);
smo40603.addModifier(new VF.Dot(), 1);
smo40619v0ar.push(smo40603);
smo40619v0.addTickables(smo40619v0ar)
fmtsmo4061918.joinVoices([smo40619v0]);
const fmtsmo4179418 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo41794v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41794v0ar = [];
const smo41775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41775'] = smo41775;
smo41775.setAttribute('id', 'smo41775');
smo41794v0ar.push(smo41775);
const smo41776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41776'] = smo41776;
smo41776.setAttribute('id', 'smo41776');
smo41794v0ar.push(smo41776);
const smo41777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41777'] = smo41777;
smo41777.setAttribute('id', 'smo41777');
smo41794v0ar.push(smo41777);
const smo41778 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41778'] = smo41778;
smo41778.setAttribute('id', 'smo41778');
smo41794v0ar.push(smo41778);
smo41794v0.addTickables(smo41794v0ar)
fmtsmo4179418.joinVoices([smo41794v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
 
// formatting measures in staff group smo42632
fmtsmo3929618.format([smo39296v0,smo40619v0,smo41794v0], 130);
const stavesmo39296 = new VF.Stave(385, 1197, 144);
stavesmo39296.setAttribute('id', 'stavesmo39296');
stavesmo39296.setBegBarType(VF.Barline.type.NONE);
stavesmo39296.setContext(context);
stavesmo39296.draw();
smo39296v0.draw(context, stavesmo39296);
const stavesmo40619 = new VF.Stave(385, 1309, 144);
stavesmo40619.setAttribute('id', 'stavesmo40619');
stavesmo40619.setBegBarType(VF.Barline.type.NONE);
stavesmo40619.setContext(context);
stavesmo40619.draw();
smo40619v0.draw(context, stavesmo40619);
const stavesmo41794 = new VF.Stave(385, 1449, 144);
stavesmo41794.setAttribute('id', 'stavesmo41794');
stavesmo41794.setBegBarType(VF.Barline.type.NONE);
stavesmo41794.setContext(context);
stavesmo41794.draw();
smo41794v0.draw(context, stavesmo41794);
const fmtsmo3932619 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo39326v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39326v0ar = [];
const smo39297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo39297'] = smo39297;
smo39297.setAttribute('id', 'smo39297');
const smo39298 = new VF.Annotation('-');
smo39298.setAttribute('id', 'smo39298');
smo39298.setFont('Merriweather', 12, 'normal');
smo39298.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39297.addModifier(smo39298);
smo39298.addClass('lyric lyric-0 lyric-hyphen');
smo39326v0ar.push(smo39297);
const smo39299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo39299'] = smo39299;
smo39299.setAttribute('id', 'smo39299');
const smo39300 = new VF.Annotation('sie');
smo39300.setAttribute('id', 'smo39300');
smo39300.setFont('Merriweather', 12, 'normal');
smo39300.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39299.addModifier(smo39300);
smo39300.addClass('lyric lyric-0');
const smo39301 = new VF.Annotation('doch');
smo39301.setAttribute('id', 'smo39301');
smo39301.setFont('Merriweather', 12, 'normal');
smo39301.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39299.addModifier(smo39301);
smo39301.addClass('lyric lyric-1');
smo39326v0ar.push(smo39299);
const smo39302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo39302'] = smo39302;
smo39302.setAttribute('id', 'smo39302');
const smo39303 = new VF.Annotation('sind');
smo39303.setAttribute('id', 'smo39303');
smo39303.setFont('Merriweather', 12, 'normal');
smo39303.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39302.addModifier(smo39303);
smo39303.addClass('lyric lyric-0');
const smo39304 = new VF.Annotation('im');
smo39304.setAttribute('id', 'smo39304');
smo39304.setFont('Merriweather', 12, 'normal');
smo39304.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39302.addModifier(smo39304);
smo39304.addClass('lyric lyric-1 lyric-hyphen');
smo39326v0ar.push(smo39302);
const smo39305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39305'] = smo39305;
smo39305.setAttribute('id', 'smo39305');
const smo39306 = new VF.Annotation('ir');
smo39306.setAttribute('id', 'smo39306');
smo39306.setFont('Merriweather', 12, 'normal');
smo39306.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39305.addModifier(smo39306);
smo39306.addClass('lyric lyric-0');
const smo39307 = new VF.Annotation('mer');
smo39307.setAttribute('id', 'smo39307');
smo39307.setFont('Merriweather', 12, 'normal');
smo39307.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39305.addModifier(smo39307);
smo39307.addClass('lyric lyric-1');
smo39326v0ar.push(smo39305);
const smo39308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39308'] = smo39308;
smo39308.setAttribute('id', 'smo39308');
const smo39309 = new VF.Annotation('e');
smo39309.setAttribute('id', 'smo39309');
smo39309.setFont('Merriweather', 12, 'normal');
smo39309.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39308.addModifier(smo39309);
smo39309.addClass('lyric lyric-0 lyric-hyphen');
const smo39310 = new VF.Annotation('für');
smo39310.setAttribute('id', 'smo39310');
smo39310.setFont('Merriweather', 12, 'normal');
smo39310.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39308.addModifier(smo39310);
smo39310.addClass('lyric lyric-1');
smo39326v0ar.push(smo39308);
smo39326v0.addTickables(smo39326v0ar)
fmtsmo3932619.joinVoices([smo39326v0]);
const fmtsmo4063719 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo40637v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40637v0ar = [];
const smo40620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40620'] = smo40620;
smo40620.setAttribute('id', 'smo40620');
smo40620.addModifier(new VF.Dot(), 0);
smo40637v0ar.push(smo40620);
const smo40621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
noteHash['smo40621'] = smo40621;
smo40621.setAttribute('id', 'smo40621');
smo40621.addModifier(new VF.Dot(), 0);
smo40621.addModifier(new VF.Dot(), 1);
smo40637v0ar.push(smo40621);
smo40637v0.addTickables(smo40637v0ar)
fmtsmo4063719.joinVoices([smo40637v0]);
const fmtsmo4181319 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo41813v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41813v0ar = [];
const smo41795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41795'] = smo41795;
smo41795.setAttribute('id', 'smo41795');
smo41813v0ar.push(smo41795);
const smo41796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo41796'] = smo41796;
smo41796.setAttribute('id', 'smo41796');
smo41796.addModifier(new VF.Dot(), 0);
smo41813v0ar.push(smo41796);
const smo41797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo41797'] = smo41797;
smo41797.setAttribute('id', 'smo41797');
smo41813v0ar.push(smo41797);
smo41813v0.addTickables(smo41813v0ar)
fmtsmo4181319.joinVoices([smo41813v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48729 = smo39302.getStemDirection();
smo39302.setStemDirection(dirsmo48729);
smo39305.setStemDirection(dirsmo48729);
smo39308.setStemDirection(dirsmo48729);
const smo48729 = new VF.Beam([smo39302,smo39305,smo39308]);
 
// formatting measures in staff group smo42632
fmtsmo3932619.format([smo39326v0,smo40637v0,smo41813v0], 272);
const stavesmo39326 = new VF.Stave(529, 1197, 286);
stavesmo39326.setAttribute('id', 'stavesmo39326');
stavesmo39326.setBegBarType(VF.Barline.type.NONE);
stavesmo39326.setContext(context);
stavesmo39326.draw();
smo39326v0.draw(context, stavesmo39326);
smo48729.setContext(context);
smo48729.draw();
const stavesmo40637 = new VF.Stave(529, 1309, 286);
stavesmo40637.setAttribute('id', 'stavesmo40637');
stavesmo40637.setBegBarType(VF.Barline.type.NONE);
stavesmo40637.setContext(context);
stavesmo40637.draw();
smo40637v0.draw(context, stavesmo40637);
const stavesmo41813 = new VF.Stave(529, 1449, 286);
stavesmo41813.setAttribute('id', 'stavesmo41813');
stavesmo41813.setBegBarType(VF.Barline.type.NONE);
stavesmo41813.setContext(context);
stavesmo41813.draw();
smo41813v0.draw(context, stavesmo41813);
const fmtsmo3934520 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo39345v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39345v0ar = [];
const smo39327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39327'] = smo39327;
smo39327.setAttribute('id', 'smo39327');
smo39327.addModifier(new VF.Dot(), 0);
const smo39328 = new VF.Annotation('kannt');
smo39328.setAttribute('id', 'smo39328');
smo39328.setFont('Merriweather', 12, 'normal');
smo39328.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39327.addModifier(smo39328);
smo39328.addClass('lyric lyric-0');
const smo39329 = new VF.Annotation('mich');
smo39329.setAttribute('id', 'smo39329');
smo39329.setFont('Merriweather', 12, 'normal');
smo39329.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39327.addModifier(smo39329);
smo39329.addClass('lyric lyric-1');
smo39345v0ar.push(smo39327);
smo39345v0.addTickables(smo39345v0ar)
fmtsmo3934520.joinVoices([smo39345v0]);
const fmtsmo4065820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo40658v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40658v0ar = [];
const smo40638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo40638'] = smo40638;
smo40638.setAttribute('id', 'smo40638');
smo40658v0ar.push(smo40638);
const smo40639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40639'] = smo40639;
smo40639.setAttribute('id', 'smo40639');
smo40658v0ar.push(smo40639);
const smo40640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40640'] = smo40640;
smo40640.setAttribute('id', 'smo40640');
smo40658v0ar.push(smo40640);
const smo40641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40641'] = smo40641;
smo40641.setAttribute('id', 'smo40641');
smo40658v0ar.push(smo40641);
const smo40642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40642'] = smo40642;
smo40642.setAttribute('id', 'smo40642');
smo40658v0ar.push(smo40642);
smo40658v0.addTickables(smo40658v0ar)
fmtsmo4065820.joinVoices([smo40658v0]);
const fmtsmo4183320 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo41833v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41833v0ar = [];
const smo41814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo41814'] = smo41814;
smo41814.setAttribute('id', 'smo41814');
smo41833v0ar.push(smo41814);
const smo41815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo41815'] = smo41815;
smo41815.setAttribute('id', 'smo41815');
smo41833v0ar.push(smo41815);
const smo41816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo41816'] = smo41816;
smo41816.setAttribute('id', 'smo41816');
smo41833v0ar.push(smo41816);
const smo41817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41817'] = smo41817;
smo41817.setAttribute('id', 'smo41817');
smo41817.addModifier(new VF.Dot(), 0);
smo41833v0ar.push(smo41817);
smo41833v0.addTickables(smo41833v0ar)
fmtsmo4183320.joinVoices([smo41833v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48738 = smo40640.getStemDirection();
smo40640.setStemDirection(dirsmo48738);
smo40641.setStemDirection(dirsmo48738);
smo40642.setStemDirection(dirsmo48738);
const smo48738 = new VF.Beam([smo40640,smo40641,smo40642]);
const dirsmo48741 = smo41814.getStemDirection();
smo41814.setStemDirection(dirsmo48741);
smo41815.setStemDirection(dirsmo48741);
smo41816.setStemDirection(dirsmo48741);
const smo48741 = new VF.Beam([smo41814,smo41815,smo41816]);
 
// formatting measures in staff group smo42632
fmtsmo3934520.format([smo39345v0,smo40658v0,smo41833v0], 205);
const stavesmo39345 = new VF.Stave(815, 1197, 219);
stavesmo39345.setAttribute('id', 'stavesmo39345');
stavesmo39345.setBegBarType(VF.Barline.type.NONE);
stavesmo39345.setContext(context);
stavesmo39345.draw();
smo39345v0.draw(context, stavesmo39345);
const stavesmo40658 = new VF.Stave(815, 1309, 219);
stavesmo40658.setAttribute('id', 'stavesmo40658');
stavesmo40658.setBegBarType(VF.Barline.type.NONE);
stavesmo40658.setContext(context);
stavesmo40658.draw();
smo40658v0.draw(context, stavesmo40658);
smo48738.setContext(context);
smo48738.draw();
const stavesmo41833 = new VF.Stave(815, 1449, 219);
stavesmo41833.setAttribute('id', 'stavesmo41833');
stavesmo41833.setBegBarType(VF.Barline.type.NONE);
stavesmo41833.setContext(context);
stavesmo41833.draw();
smo41833v0.draw(context, stavesmo41833);
smo48741.setContext(context);
smo48741.draw();
const fmtsmo3936621 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo39366v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39366v0ar = [];
const smo39346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39346'] = smo39346;
smo39346.setAttribute('id', 'smo39346');
smo39346.addModifier(new VF.Dot(), 0);
const smo39347 = new VF.Annotation('-');
smo39347.setAttribute('id', 'smo39347');
smo39347.setFont('Merriweather', 12, 'normal');
smo39347.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39346.addModifier(smo39347);
smo39347.addClass('lyric lyric-0 lyric-hyphen');
smo39366v0ar.push(smo39346);
const smo39348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39348'] = smo39348;
smo39348.setAttribute('id', 'smo39348');
smo39348.addModifier(new VF.Dot(), 0);
const smo39349 = new VF.Annotation('Er');
smo39349.setAttribute('id', 'smo39349');
smo39349.setFont('Merriweather', 12, 'normal');
smo39349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39348.addModifier(smo39349);
smo39349.addClass('lyric lyric-0');
const smo39350 = new VF.Annotation('Mein');
smo39350.setAttribute('id', 'smo39350');
smo39350.setFont('Merriweather', 12, 'normal');
smo39350.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo39348.addModifier(smo39350);
smo39350.addClass('lyric lyric-1');
smo39366v0ar.push(smo39348);
smo39366v0.addTickables(smo39366v0ar)
fmtsmo3936621.joinVoices([smo39366v0]);
const fmtsmo4067721 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo40677v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40677v0ar = [];
const smo40659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo40659'] = smo40659;
smo40659.setAttribute('id', 'smo40659');
smo40677v0ar.push(smo40659);
const smo40660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40660'] = smo40660;
smo40660.setAttribute('id', 'smo40660');
smo40677v0ar.push(smo40660);
const smo40661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo40661'] = smo40661;
smo40661.setAttribute('id', 'smo40661');
smo40661.addModifier(new VF.Dot(), 0);
smo40677v0ar.push(smo40661);
smo40677v0.addTickables(smo40677v0ar)
fmtsmo4067721.joinVoices([smo40677v0]);
const fmtsmo4185421 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo41854v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo41854v0ar = [];
const smo41834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo41834'] = smo41834;
smo41834.setAttribute('id', 'smo41834');
smo41854v0ar.push(smo41834);
const smo41835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo41835'] = smo41835;
smo41835.setAttribute('id', 'smo41835');
smo41854v0ar.push(smo41835);
const smo41836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo41836'] = smo41836;
smo41836.setAttribute('id', 'smo41836');
smo41854v0ar.push(smo41836);
const smo41837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo41837'] = smo41837;
smo41837.setAttribute('id', 'smo41837');
smo41854v0ar.push(smo41837);
const smo41838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo41838'] = smo41838;
smo41838.setAttribute('id', 'smo41838');
smo41854v0ar.push(smo41838);
smo41854v0.addTickables(smo41854v0ar)
fmtsmo4185421.joinVoices([smo41854v0]);
// create beam groups and tuplets for format grp smo42632 before formatting
const dirsmo48748 = smo41834.getStemDirection();
smo41834.setStemDirection(dirsmo48748);
smo41835.setStemDirection(dirsmo48748);
smo41836.setStemDirection(dirsmo48748);
const smo48748 = new VF.Beam([smo41834,smo41835,smo41836]);
 
// formatting measures in staff group smo42632
fmtsmo3936621.format([smo39366v0,smo40677v0,smo41854v0], 166);
const stavesmo39366 = new VF.Stave(1034, 1197, 180);
stavesmo39366.setAttribute('id', 'stavesmo39366');
stavesmo39366.setBegBarType(VF.Barline.type.NONE);
stavesmo39366.setContext(context);
stavesmo39366.draw();
smo39366v0.draw(context, stavesmo39366);
const stavesmo40677 = new VF.Stave(1034, 1309, 180);
stavesmo40677.setAttribute('id', 'stavesmo40677');
stavesmo40677.setBegBarType(VF.Barline.type.NONE);
stavesmo40677.setContext(context);
stavesmo40677.draw();
smo40677v0.draw(context, stavesmo40677);
const stavesmo41854 = new VF.Stave(1034, 1449, 180);
stavesmo41854.setAttribute('id', 'stavesmo41854');
stavesmo41854.setBegBarType(VF.Barline.type.NONE);
stavesmo41854.setContext(context);
stavesmo41854.draw();
smo41854v0.draw(context, stavesmo41854);
smo48748.setContext(context);
smo48748.draw();
const rightsmo42632stavesmo393662 = new VF.StaveConnector(stavesmo39366, stavesmo41854).setType(0);
rightsmo42632stavesmo393662.setContext(context).draw();
const smo40263 = new VF.StaveTie({ first_note: smo39135, last_note: smo39154, first_indices: [0], last_indices: [0]});
smo40263.setContext(context).draw();
const smo40264 = new VF.StaveTie({ first_note: smo39177, last_note: smo39196, first_indices: [0], last_indices: [0]});
smo40264.setContext(context).draw();
const smo40265 = new VF.StaveTie({ first_note: smo39226, last_note: smo39226, first_indices: [0], last_indices: [0]});
smo40265.setContext(context).draw();
const smo40266 = new VF.StaveTie({ first_note: smo39278, last_note: smo39297, first_indices: [0], last_indices: [0]});
smo40266.setContext(context).draw();
const smo40267 = new VF.StaveTie({ first_note: smo39327, last_note: smo39346, first_indices: [0], last_indices: [0]});
smo40267.setContext(context).draw();
const smo41382 = new VF.StaveTie({ first_note: smo40427, last_note: smo40444, first_indices: [0,1], last_indices: [0,1]});
smo41382.setContext(context).draw();
const smo41383 = new VF.StaveTie({ first_note: smo40461, last_note: smo40478, first_indices: [0,1], last_indices: [0,1]});
smo41383.setContext(context).draw();
const smo41391 = new VF.StaveTie({ first_note: smo40393, last_note: smo40410, first_indices: [0,1], last_indices: [0,1]});
smo41391.setContext(context).draw();
const smo41393 = new VF.StaveTie({ first_note: smo40358, last_note: smo40375, first_indices: [0], last_indices: [0]});
smo41393.setContext(context).draw();
const smo42619 = new VF.Curve(smo41711, smo41712, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo42619.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo38986').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39006').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39007').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39009').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39010').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39012').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39013').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo39015').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39016').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39034').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo39035').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo39055').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39056').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39058').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39059').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39061').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39062').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39064').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39065').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39083').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39084').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39087').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo39105').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39106').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo39109').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo39127').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39128').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo39130').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39131').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo39133').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39134').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo39136').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39137').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39156').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo39160').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39178').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39179').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39197').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39199').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39200').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo39202').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39203').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo39205').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39206').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo39208').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo39209').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo39227').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo39228').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39246').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39248').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39249').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39251').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39252').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo39254').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39255').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo39257').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39258').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo39276').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39277').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo39280').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo39298').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo39300').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39301').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo39303').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39304').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo39306').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39307').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39309').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39310').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo39328').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo39329').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo39347').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39349').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo39350').setAttributeNS('', 'transform', 'translate(0 18)');
}
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
const fmtsmo379140 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo37914v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo37914v0ar = [];
const smo37898 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo37898'] = smo37898;
smo37898.setAttribute('id', 'smo37898');
smo37898.addModifier(new VF.Dot(), 0);
smo37914v0ar.push(smo37898);
smo37914v0.addTickables(smo37914v0ar)
fmtsmo379140.joinVoices([smo37914v0]);
const fmtsmo393140 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo39314v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39314v0ar = [];
const smo39296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39296'] = smo39296;
smo39296.setAttribute('id', 'smo39296');
smo39296.addModifier(new VF.Dot(), 0);
smo39314v0ar.push(smo39296);
const smo39297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39297'] = smo39297;
smo39297.setAttribute('id', 'smo39297');
smo39314v0ar.push(smo39297);
const smo39298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo39298'] = smo39298;
smo39298.setAttribute('id', 'smo39298');
smo39314v0ar.push(smo39298);
smo39314v0.addTickables(smo39314v0ar)
fmtsmo393140.joinVoices([smo39314v0]);
const fmtsmo404350 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo40435v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40435v0ar = [];
const smo40417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo40417'] = smo40417;
smo40417.setAttribute('id', 'smo40417');
smo40417.addModifier(new VF.Dot(), 0);
smo40435v0ar.push(smo40417);
const smo40418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40418'] = smo40418;
smo40418.setAttribute('id', 'smo40418');
smo40435v0ar.push(smo40418);
const smo40419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40419'] = smo40419;
smo40419.setAttribute('id', 'smo40419');
smo40435v0ar.push(smo40419);
smo40435v0.addTickables(smo40435v0ar)
fmtsmo404350.joinVoices([smo40435v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo379140.format([smo37914v0,smo39314v0,smo40435v0], 105);
const stavesmo37914 = new VF.Stave(66, 119, 202);
stavesmo37914.setAttribute('id', 'stavesmo37914');
stavesmo37914.setBegBarType(1);
stavesmo37914.setTempo(JSON.parse('{"duration":"4","dots":1,"bpm":120}'), -1 * 0);
stavesmo37914.addClef('treble');
stavesmo37914.addTimeSignature('6/8');
const keysmo37914 = new VF.KeySignature('G');
keysmo37914.addToStave(stavesmo37914);
stavesmo37914.setContext(context);
stavesmo37914.draw();
smo37914v0.draw(context, stavesmo37914);
const stavesmo39314 = new VF.Stave(66, 226, 202);
stavesmo39314.setAttribute('id', 'stavesmo39314');
stavesmo39314.setBegBarType(1);
stavesmo39314.addClef('treble');
stavesmo39314.addTimeSignature('6/8');
const keysmo39314 = new VF.KeySignature('G');
keysmo39314.addToStave(stavesmo39314);
stavesmo39314.setContext(context);
stavesmo39314.draw();
smo39314v0.draw(context, stavesmo39314);
const stavesmo40435 = new VF.Stave(66, 301, 202);
stavesmo40435.setAttribute('id', 'stavesmo40435');
stavesmo40435.setBegBarType(1);
stavesmo40435.addClef('treble');
stavesmo40435.addTimeSignature('6/8');
const keysmo40435 = new VF.KeySignature('G');
keysmo40435.addToStave(stavesmo40435);
stavesmo40435.setContext(context);
stavesmo40435.draw();
smo40435v0.draw(context, stavesmo40435);
const leftsmo41649stavesmo379142 = new VF.StaveConnector(stavesmo37914, stavesmo40435).setType(1);
leftsmo41649stavesmo379142.setContext(context).draw();
const fmtsmo379311 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo37931v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo37931v0ar = [];
const smo37915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo37915'] = smo37915;
smo37915.setAttribute('id', 'smo37915');
smo37915.addModifier(new VF.Dot(), 0);
smo37931v0ar.push(smo37915);
smo37931v0.addTickables(smo37931v0ar)
fmtsmo379311.joinVoices([smo37931v0]);
const fmtsmo393321 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo39332v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39332v0ar = [];
const smo39315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo39315'] = smo39315;
smo39315.setAttribute('id', 'smo39315');
smo39315.addModifier(new VF.Dot(), 0);
smo39332v0ar.push(smo39315);
const smo39316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo39316'] = smo39316;
smo39316.setAttribute('id', 'smo39316');
smo39316.addModifier(new VF.Dot(), 0);
smo39332v0ar.push(smo39316);
smo39332v0.addTickables(smo39332v0ar)
fmtsmo393321.joinVoices([smo39332v0]);
const fmtsmo404531 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo40453v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40453v0ar = [];
const smo40436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo40436'] = smo40436;
smo40436.setAttribute('id', 'smo40436');
smo40436.addModifier(new VF.Dot(), 0);
smo40453v0ar.push(smo40436);
const smo40437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40437'] = smo40437;
smo40437.setAttribute('id', 'smo40437');
smo40437.addModifier(new VF.Dot(), 0);
smo40453v0ar.push(smo40437);
smo40453v0.addTickables(smo40453v0ar)
fmtsmo404531.joinVoices([smo40453v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo379311.format([smo37931v0,smo39332v0,smo40453v0], 75);
const stavesmo37931 = new VF.Stave(268, 119, 89);
stavesmo37931.setAttribute('id', 'stavesmo37931');
stavesmo37931.setBegBarType(VF.Barline.type.NONE);
stavesmo37931.setContext(context);
stavesmo37931.draw();
smo37931v0.draw(context, stavesmo37931);
const stavesmo39332 = new VF.Stave(268, 226, 89);
stavesmo39332.setAttribute('id', 'stavesmo39332');
stavesmo39332.setBegBarType(VF.Barline.type.NONE);
stavesmo39332.setContext(context);
stavesmo39332.draw();
smo39332v0.draw(context, stavesmo39332);
const stavesmo40453 = new VF.Stave(268, 301, 89);
stavesmo40453.setAttribute('id', 'stavesmo40453');
stavesmo40453.setBegBarType(VF.Barline.type.NONE);
stavesmo40453.setContext(context);
stavesmo40453.draw();
smo40453v0.draw(context, stavesmo40453);
const fmtsmo379482 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo37948v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo37948v0ar = [];
const smo37932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo37932'] = smo37932;
smo37932.setAttribute('id', 'smo37932');
smo37932.addModifier(new VF.Dot(), 0);
smo37948v0ar.push(smo37932);
smo37948v0.addTickables(smo37948v0ar)
fmtsmo379482.joinVoices([smo37948v0]);
const fmtsmo393532 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo39353v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39353v0ar = [];
const smo39333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo39333'] = smo39333;
smo39333.setAttribute('id', 'smo39333');
smo39353v0ar.push(smo39333);
const smo39334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
noteHash['smo39334'] = smo39334;
smo39334.setAttribute('id', 'smo39334');
smo39353v0ar.push(smo39334);
const smo39335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo39335'] = smo39335;
smo39335.setAttribute('id', 'smo39335');
smo39353v0ar.push(smo39335);
const smo39336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39336'] = smo39336;
smo39336.setAttribute('id', 'smo39336');
smo39353v0ar.push(smo39336);
const smo39337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39337'] = smo39337;
smo39337.setAttribute('id', 'smo39337');
smo39353v0ar.push(smo39337);
smo39353v0.addTickables(smo39353v0ar)
fmtsmo393532.joinVoices([smo39353v0]);
const fmtsmo404742 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo40474v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40474v0ar = [];
const smo40454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40454'] = smo40454;
smo40454.setAttribute('id', 'smo40454');
smo40474v0ar.push(smo40454);
const smo40455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo40455'] = smo40455;
smo40455.setAttribute('id', 'smo40455');
smo40474v0ar.push(smo40455);
const smo40456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo40456'] = smo40456;
smo40456.setAttribute('id', 'smo40456');
smo40474v0ar.push(smo40456);
const smo40457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo40457'] = smo40457;
smo40457.setAttribute('id', 'smo40457');
smo40474v0ar.push(smo40457);
const smo40458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo40458'] = smo40458;
smo40458.setAttribute('id', 'smo40458');
smo40474v0ar.push(smo40458);
smo40474v0.addTickables(smo40474v0ar)
fmtsmo404742.joinVoices([smo40474v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47615 = smo39333.getStemDirection();
smo39333.setStemDirection(dirsmo47615);
smo39334.setStemDirection(dirsmo47615);
smo39335.setStemDirection(dirsmo47615);
const smo47615 = new VF.Beam([smo39333,smo39334,smo39335]);
const dirsmo47618 = smo40454.getStemDirection();
smo40454.setStemDirection(dirsmo47618);
smo40455.setStemDirection(dirsmo47618);
smo40456.setStemDirection(dirsmo47618);
const smo47618 = new VF.Beam([smo40454,smo40455,smo40456]);
 
// formatting measures in staff group smo41649
fmtsmo379482.format([smo37948v0,smo39353v0,smo40474v0], 146);
const stavesmo37948 = new VF.Stave(357, 119, 160);
stavesmo37948.setAttribute('id', 'stavesmo37948');
stavesmo37948.setBegBarType(VF.Barline.type.NONE);
stavesmo37948.setContext(context);
stavesmo37948.draw();
smo37948v0.draw(context, stavesmo37948);
const stavesmo39353 = new VF.Stave(357, 226, 160);
stavesmo39353.setAttribute('id', 'stavesmo39353');
stavesmo39353.setBegBarType(VF.Barline.type.NONE);
stavesmo39353.setContext(context);
stavesmo39353.draw();
smo39353v0.draw(context, stavesmo39353);
smo47615.setContext(context);
smo47615.draw();
const stavesmo40474 = new VF.Stave(357, 301, 160);
stavesmo40474.setAttribute('id', 'stavesmo40474');
stavesmo40474.setBegBarType(VF.Barline.type.NONE);
stavesmo40474.setContext(context);
stavesmo40474.draw();
smo40474v0.draw(context, stavesmo40474);
smo47618.setContext(context);
smo47618.draw();
const fmtsmo379653 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo37965v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo37965v0ar = [];
const smo37949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo37949'] = smo37949;
smo37949.setAttribute('id', 'smo37949');
smo37949.addModifier(new VF.Dot(), 0);
smo37965v0ar.push(smo37949);
smo37965v0.addTickables(smo37965v0ar)
fmtsmo379653.joinVoices([smo37965v0]);
const fmtsmo393743 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo39374v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39374v0ar = [];
const smo39354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39354'] = smo39354;
smo39354.setAttribute('id', 'smo39354');
smo39374v0ar.push(smo39354);
const smo39355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo39355'] = smo39355;
smo39355.setAttribute('id', 'smo39355');
smo39374v0ar.push(smo39355);
const smo39356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39356'] = smo39356;
smo39356.setAttribute('id', 'smo39356');
smo39374v0ar.push(smo39356);
const smo39357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39357'] = smo39357;
smo39357.setAttribute('id', 'smo39357');
smo39374v0ar.push(smo39357);
const smo39358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo39358'] = smo39358;
smo39358.setAttribute('id', 'smo39358');
smo39374v0ar.push(smo39358);
smo39374v0.addTickables(smo39374v0ar)
fmtsmo393743.joinVoices([smo39374v0]);
const fmtsmo404943 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo40494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40494v0ar = [];
const smo40475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo40475'] = smo40475;
smo40475.setAttribute('id', 'smo40475');
smo40494v0ar.push(smo40475);
const smo40476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo40476'] = smo40476;
smo40476.setAttribute('id', 'smo40476');
smo40494v0ar.push(smo40476);
const smo40477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo40477'] = smo40477;
smo40477.setAttribute('id', 'smo40477');
smo40494v0ar.push(smo40477);
const smo40478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n","f#/3/n"]}'))
noteHash['smo40478'] = smo40478;
smo40478.setAttribute('id', 'smo40478');
smo40478.addModifier(new VF.Dot(), 0);
smo40478.addModifier(new VF.Dot(), 1);
smo40494v0ar.push(smo40478);
smo40494v0.addTickables(smo40494v0ar)
fmtsmo404943.joinVoices([smo40494v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47623 = smo39354.getStemDirection();
smo39354.setStemDirection(dirsmo47623);
smo39355.setStemDirection(dirsmo47623);
smo39356.setStemDirection(dirsmo47623);
const smo47623 = new VF.Beam([smo39354,smo39355,smo39356]);
const dirsmo47626 = smo40475.getStemDirection();
smo40475.setStemDirection(dirsmo47626);
smo40476.setStemDirection(dirsmo47626);
smo40477.setStemDirection(dirsmo47626);
const smo47626 = new VF.Beam([smo40475,smo40476,smo40477]);
 
// formatting measures in staff group smo41649
fmtsmo379653.format([smo37965v0,smo39374v0,smo40494v0], 160);
const stavesmo37965 = new VF.Stave(517, 119, 174);
stavesmo37965.setAttribute('id', 'stavesmo37965');
stavesmo37965.setBegBarType(VF.Barline.type.NONE);
stavesmo37965.setContext(context);
stavesmo37965.draw();
smo37965v0.draw(context, stavesmo37965);
const stavesmo39374 = new VF.Stave(517, 226, 174);
stavesmo39374.setAttribute('id', 'stavesmo39374');
stavesmo39374.setBegBarType(VF.Barline.type.NONE);
stavesmo39374.setContext(context);
stavesmo39374.draw();
smo39374v0.draw(context, stavesmo39374);
smo47623.setContext(context);
smo47623.draw();
const stavesmo40494 = new VF.Stave(517, 301, 174);
stavesmo40494.setAttribute('id', 'stavesmo40494');
stavesmo40494.setBegBarType(VF.Barline.type.NONE);
stavesmo40494.setContext(context);
stavesmo40494.draw();
smo40494v0.draw(context, stavesmo40494);
smo47626.setContext(context);
smo47626.draw();
const fmtsmo379824 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo37982v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo37982v0ar = [];
const smo37966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo37966'] = smo37966;
smo37966.setAttribute('id', 'smo37966');
smo37966.addModifier(new VF.Dot(), 0);
smo37982v0ar.push(smo37966);
smo37982v0.addTickables(smo37982v0ar)
fmtsmo379824.joinVoices([smo37982v0]);
const fmtsmo393914 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo39391v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39391v0ar = [];
const smo39375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39375'] = smo39375;
smo39375.setAttribute('id', 'smo39375');
smo39375.addModifier(new VF.Dot(), 0);
smo39391v0ar.push(smo39375);
smo39391v0.addTickables(smo39391v0ar)
fmtsmo393914.joinVoices([smo39391v0]);
const fmtsmo405144 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo40514v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40514v0ar = [];
const smo40495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40495'] = smo40495;
smo40495.setAttribute('id', 'smo40495');
smo40514v0ar.push(smo40495);
const smo40496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40496'] = smo40496;
smo40496.setAttribute('id', 'smo40496');
smo40514v0ar.push(smo40496);
const smo40497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40497'] = smo40497;
smo40497.setAttribute('id', 'smo40497');
smo40514v0ar.push(smo40497);
const smo40498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40498'] = smo40498;
smo40498.setAttribute('id', 'smo40498');
smo40514v0ar.push(smo40498);
smo40514v0.addTickables(smo40514v0ar)
fmtsmo405144.joinVoices([smo40514v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo379824.format([smo37982v0,smo39391v0,smo40514v0], 127);
const stavesmo37982 = new VF.Stave(691, 119, 183);
stavesmo37982.setAttribute('id', 'stavesmo37982');
stavesmo37982.setBegBarType(4);
stavesmo37982.setContext(context);
stavesmo37982.draw();
smo37982v0.draw(context, stavesmo37982);
const stavesmo39391 = new VF.Stave(691, 226, 183);
stavesmo39391.setAttribute('id', 'stavesmo39391');
stavesmo39391.setBegBarType(4);
stavesmo39391.setContext(context);
stavesmo39391.draw();
smo39391v0.draw(context, stavesmo39391);
const stavesmo40514 = new VF.Stave(691, 301, 183);
stavesmo40514.setAttribute('id', 'stavesmo40514');
stavesmo40514.setBegBarType(4);
stavesmo40514.addClef('bass');
stavesmo40514.setContext(context);
stavesmo40514.draw();
smo40514v0.draw(context, stavesmo40514);
const fmtsmo380015 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo38001v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38001v0ar = [];
const smo37983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo37983'] = smo37983;
smo37983.setAttribute('id', 'smo37983');
smo37983.addModifier(new VF.Dot(), 0);
smo38001v0ar.push(smo37983);
const smo37984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo37984'] = smo37984;
smo37984.setAttribute('id', 'smo37984');
smo37984.addModifier(new VF.Dot(), 0);
const smo37985 = new VF.Annotation('Mein');
smo37985.setAttribute('id', 'smo37985');
smo37985.setFont('Merriweather', 12, 'normal');
smo37985.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo37984.addModifier(smo37985);
smo37985.addClass('lyric lyric-0');
smo38001v0ar.push(smo37984);
smo38001v0.addTickables(smo38001v0ar)
fmtsmo380015.joinVoices([smo38001v0]);
const fmtsmo394095 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo39409v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39409v0ar = [];
const smo39392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39392'] = smo39392;
smo39392.setAttribute('id', 'smo39392');
smo39392.addModifier(new VF.Dot(), 0);
smo39409v0ar.push(smo39392);
const smo39393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39393'] = smo39393;
smo39393.setAttribute('id', 'smo39393');
smo39393.addModifier(new VF.Dot(), 0);
smo39409v0ar.push(smo39393);
smo39409v0.addTickables(smo39409v0ar)
fmtsmo394095.joinVoices([smo39409v0]);
const fmtsmo405345 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo40534v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40534v0ar = [];
const smo40515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40515'] = smo40515;
smo40515.setAttribute('id', 'smo40515');
smo40534v0ar.push(smo40515);
const smo40516 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40516'] = smo40516;
smo40516.setAttribute('id', 'smo40516');
smo40534v0ar.push(smo40516);
const smo40517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40517'] = smo40517;
smo40517.setAttribute('id', 'smo40517');
smo40534v0ar.push(smo40517);
const smo40518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40518'] = smo40518;
smo40518.setAttribute('id', 'smo40518');
smo40534v0ar.push(smo40518);
smo40534v0.addTickables(smo40534v0ar)
fmtsmo405345.joinVoices([smo40534v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo380015.format([smo38001v0,smo39409v0,smo40534v0], 155);
const stavesmo38001 = new VF.Stave(874, 119, 169);
stavesmo38001.setAttribute('id', 'stavesmo38001');
stavesmo38001.setBegBarType(VF.Barline.type.NONE);
stavesmo38001.setContext(context);
stavesmo38001.draw();
smo38001v0.draw(context, stavesmo38001);
const stavesmo39409 = new VF.Stave(874, 226, 169);
stavesmo39409.setAttribute('id', 'stavesmo39409');
stavesmo39409.setBegBarType(VF.Barline.type.NONE);
stavesmo39409.setContext(context);
stavesmo39409.draw();
smo39409v0.draw(context, stavesmo39409);
const stavesmo40534 = new VF.Stave(874, 301, 169);
stavesmo40534.setAttribute('id', 'stavesmo40534');
stavesmo40534.setBegBarType(VF.Barline.type.NONE);
stavesmo40534.setContext(context);
stavesmo40534.draw();
smo40534v0.draw(context, stavesmo40534);
const fmtsmo380196 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo38019v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38019v0ar = [];
const smo38002 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38002'] = smo38002;
smo38002.setAttribute('id', 'smo38002');
smo38002.addModifier(new VF.Dot(), 0);
const smo38003 = new VF.Annotation('Shatz,');
smo38003.setAttribute('id', 'smo38003');
smo38003.setFont('Merriweather', 12, 'normal');
smo38003.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38002.addModifier(smo38003);
smo38003.addClass('lyric lyric-0');
smo38019v0ar.push(smo38002);
smo38019v0.addTickables(smo38019v0ar)
fmtsmo380196.joinVoices([smo38019v0]);
const fmtsmo394266 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo39426v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39426v0ar = [];
const smo39410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo39410'] = smo39410;
smo39410.setAttribute('id', 'smo39410');
smo39410.addModifier(new VF.Dot(), 0);
smo39410.addModifier(new VF.Dot(), 1);
smo39426v0ar.push(smo39410);
smo39426v0.addTickables(smo39426v0ar)
fmtsmo394266.joinVoices([smo39426v0]);
const fmtsmo405546 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo40554v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40554v0ar = [];
const smo40535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40535'] = smo40535;
smo40535.setAttribute('id', 'smo40535');
smo40554v0ar.push(smo40535);
const smo40536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40536'] = smo40536;
smo40536.setAttribute('id', 'smo40536');
smo40554v0ar.push(smo40536);
const smo40537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40537'] = smo40537;
smo40537.setAttribute('id', 'smo40537');
smo40554v0ar.push(smo40537);
const smo40538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40538'] = smo40538;
smo40538.setAttribute('id', 'smo40538');
smo40554v0ar.push(smo40538);
smo40554v0.addTickables(smo40554v0ar)
fmtsmo405546.joinVoices([smo40554v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo380196.format([smo38019v0,smo39426v0,smo40554v0], 154);
const stavesmo38019 = new VF.Stave(1043, 119, 168);
stavesmo38019.setAttribute('id', 'stavesmo38019');
stavesmo38019.setBegBarType(VF.Barline.type.NONE);
stavesmo38019.setContext(context);
stavesmo38019.draw();
smo38019v0.draw(context, stavesmo38019);
const stavesmo39426 = new VF.Stave(1043, 226, 168);
stavesmo39426.setAttribute('id', 'stavesmo39426');
stavesmo39426.setBegBarType(VF.Barline.type.NONE);
stavesmo39426.setContext(context);
stavesmo39426.draw();
smo39426v0.draw(context, stavesmo39426);
const stavesmo40554 = new VF.Stave(1043, 301, 168);
stavesmo40554.setAttribute('id', 'stavesmo40554');
stavesmo40554.setBegBarType(VF.Barline.type.NONE);
stavesmo40554.setContext(context);
stavesmo40554.draw();
smo40554v0.draw(context, stavesmo40554);
const rightsmo41649stavesmo380192 = new VF.StaveConnector(stavesmo38019, stavesmo40554).setType(0);
rightsmo41649stavesmo380192.setContext(context).draw();
const fmtsmo380497 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo38049v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38049v0ar = [];
const smo38020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38020'] = smo38020;
smo38020.setAttribute('id', 'smo38020');
smo38049v0ar.push(smo38020);
const smo38022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38022'] = smo38022;
smo38022.setAttribute('id', 'smo38022');
const smo38023 = new VF.Annotation('der');
smo38023.setAttribute('id', 'smo38023');
smo38023.setFont('Merriweather', 12, 'normal');
smo38023.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38022.addModifier(smo38023);
smo38023.addClass('lyric lyric-0');
const smo38024 = new VF.Annotation('hat');
smo38024.setAttribute('id', 'smo38024');
smo38024.setFont('Merriweather', 12, 'normal');
smo38024.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38022.addModifier(smo38024);
smo38024.addClass('lyric lyric-1');
smo38049v0ar.push(smo38022);
const smo38025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38025'] = smo38025;
smo38025.setAttribute('id', 'smo38025');
const smo38026 = new VF.Annotation('is');
smo38026.setAttribute('id', 'smo38026');
smo38026.setFont('Merriweather', 12, 'normal');
smo38026.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38025.addModifier(smo38026);
smo38026.addClass('lyric lyric-0');
const smo38027 = new VF.Annotation('vie');
smo38027.setAttribute('id', 'smo38027');
smo38027.setFont('Merriweather', 12, 'normal');
smo38027.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38025.addModifier(smo38027);
smo38027.addClass('lyric lyric-1 lyric-hyphen');
smo38049v0ar.push(smo38025);
const smo38028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38028'] = smo38028;
smo38028.setAttribute('id', 'smo38028');
const smo38029 = new VF.Annotation('Po');
smo38029.setAttribute('id', 'smo38029');
smo38029.setFont('Merriweather', 12, 'normal');
smo38029.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38028.addModifier(smo38029);
smo38029.addClass('lyric lyric-0 lyric-hyphen');
const smo38030 = new VF.Annotation('les');
smo38030.setAttribute('id', 'smo38030');
smo38030.setFont('Merriweather', 12, 'normal');
smo38030.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38028.addModifier(smo38030);
smo38030.addClass('lyric lyric-1');
smo38049v0ar.push(smo38028);
const smo38031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo38031'] = smo38031;
smo38031.setAttribute('id', 'smo38031');
const smo38032 = new VF.Annotation('stil');
smo38032.setAttribute('id', 'smo38032');
smo38032.setFont('Merriweather', 12, 'normal');
smo38032.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38031.addModifier(smo38032);
smo38032.addClass('lyric lyric-0 lyric-hyphen');
const smo38033 = new VF.Annotation('ge');
smo38033.setAttribute('id', 'smo38033');
smo38033.setFont('Merriweather', 12, 'normal');
smo38033.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38031.addModifier(smo38033);
smo38033.addClass('lyric lyric-1 lyric-hyphen');
smo38049v0ar.push(smo38031);
smo38049v0.addTickables(smo38049v0ar)
fmtsmo380497.joinVoices([smo38049v0]);
const fmtsmo394437 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo39443v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39443v0ar = [];
const smo39427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo39427'] = smo39427;
smo39427.setAttribute('id', 'smo39427');
smo39427.addModifier(new VF.Dot(), 0);
smo39427.addModifier(new VF.Dot(), 1);
smo39443v0ar.push(smo39427);
smo39443v0.addTickables(smo39443v0ar)
fmtsmo394437.joinVoices([smo39443v0]);
const fmtsmo405747 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo40574v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40574v0ar = [];
const smo40555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40555'] = smo40555;
smo40555.setAttribute('id', 'smo40555');
smo40574v0ar.push(smo40555);
const smo40556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40556'] = smo40556;
smo40556.setAttribute('id', 'smo40556');
smo40574v0ar.push(smo40556);
const smo40557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40557'] = smo40557;
smo40557.setAttribute('id', 'smo40557');
smo40574v0ar.push(smo40557);
const smo40558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40558'] = smo40558;
smo40558.setAttribute('id', 'smo40558');
smo40574v0ar.push(smo40558);
smo40574v0.addTickables(smo40574v0ar)
fmtsmo405747.joinVoices([smo40574v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47651 = smo38025.getStemDirection();
smo38025.setStemDirection(dirsmo47651);
smo38028.setStemDirection(dirsmo47651);
smo38031.setStemDirection(dirsmo47651);
const smo47651 = new VF.Beam([smo38025,smo38028,smo38031]);
 
// formatting measures in staff group smo41649
fmtsmo380497.format([smo38049v0,smo39443v0,smo40574v0], 232);
const stavesmo38049 = new VF.Stave(66, 451, 306);
stavesmo38049.setAttribute('id', 'stavesmo38049');
stavesmo38049.setBegBarType(1);
stavesmo38049.addClef('treble');
const keysmo38049 = new VF.KeySignature('G');
keysmo38049.addToStave(stavesmo38049);
stavesmo38049.setContext(context);
stavesmo38049.draw();
smo38049v0.draw(context, stavesmo38049);
smo47651.setContext(context);
smo47651.draw();
const stavesmo39443 = new VF.Stave(66, 566, 306);
stavesmo39443.setAttribute('id', 'stavesmo39443');
stavesmo39443.setBegBarType(1);
stavesmo39443.addClef('treble');
const keysmo39443 = new VF.KeySignature('G');
keysmo39443.addToStave(stavesmo39443);
stavesmo39443.setContext(context);
stavesmo39443.draw();
smo39443v0.draw(context, stavesmo39443);
const stavesmo40574 = new VF.Stave(66, 699, 306);
stavesmo40574.setAttribute('id', 'stavesmo40574');
stavesmo40574.setBegBarType(1);
stavesmo40574.addClef('bass');
const keysmo40574 = new VF.KeySignature('G');
keysmo40574.addToStave(stavesmo40574);
stavesmo40574.setContext(context);
stavesmo40574.draw();
smo40574v0.draw(context, stavesmo40574);
const leftsmo41649stavesmo380492 = new VF.StaveConnector(stavesmo38049, stavesmo40574).setType(1);
leftsmo41649stavesmo380492.setContext(context).draw();
const fmtsmo380688 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo38068v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38068v0ar = [];
const smo38050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38050'] = smo38050;
smo38050.setAttribute('id', 'smo38050');
smo38050.addModifier(new VF.Dot(), 0);
const smo38051 = new VF.Annotation('lion,');
smo38051.setAttribute('id', 'smo38051');
smo38051.setFont('Merriweather', 12, 'normal');
smo38051.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38050.addModifier(smo38051);
smo38051.addClass('lyric lyric-0');
const smo38052 = new VF.Annotation('sehn');
smo38052.setAttribute('id', 'smo38052');
smo38052.setFont('Merriweather', 12, 'normal');
smo38052.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38050.addModifier(smo38052);
smo38052.addClass('lyric lyric-1');
smo38068v0ar.push(smo38050);
smo38068v0.addTickables(smo38068v0ar)
fmtsmo380688.joinVoices([smo38068v0]);
const fmtsmo394608 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo39460v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39460v0ar = [];
const smo39444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo39444'] = smo39444;
smo39444.setAttribute('id', 'smo39444');
smo39444.addModifier(new VF.Dot(), 0);
smo39444.addModifier(new VF.Dot(), 1);
smo39460v0ar.push(smo39444);
smo39460v0.addTickables(smo39460v0ar)
fmtsmo394608.joinVoices([smo39460v0]);
const fmtsmo405998 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo40599v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40599v0ar = [];
const smo40575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40575'] = smo40575;
smo40575.setAttribute('id', 'smo40575');
smo40599v0ar.push(smo40575);
const smo40576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40576'] = smo40576;
smo40576.setAttribute('id', 'smo40576');
smo40599v0ar.push(smo40576);
const smo40577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40577'] = smo40577;
smo40577.setAttribute('id', 'smo40577');
smo40599v0ar.push(smo40577);
const smo40578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40578'] = smo40578;
smo40578.setAttribute('id', 'smo40578');
smo40599v0ar.push(smo40578);
smo40599v0.addTickables(smo40599v0ar)
fmtsmo405998.joinVoices([smo40599v0]);
const smo40599v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40599v1ar = [];
const smo40579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["cn/4/r"]}'))
noteHash['smo40579'] = smo40579;
smo40579.setAttribute('id', 'smo40579');
smo40579.setStyle({ fillStyle: "#115511" });
smo40599v1ar.push(smo40579);
const smo40580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo40580'] = smo40580;
smo40580.setAttribute('id', 'smo40580');
smo40580.setStyle({ fillStyle: "#115511" });
smo40599v1ar.push(smo40580);
const smo40581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40581'] = smo40581;
smo40581.setAttribute('id', 'smo40581');
smo40581.setStyle({ fillStyle: "#115511" });
smo40599v1ar.push(smo40581);
const smo40582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40582'] = smo40582;
smo40582.setAttribute('id', 'smo40582');
smo40582.setStyle({ fillStyle: "#115511" });
smo40599v1ar.push(smo40582);
const smo40583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
noteHash['smo40583'] = smo40583;
smo40583.setAttribute('id', 'smo40583');
smo40583.setStyle({ fillStyle: "#115511" });
smo40599v1ar.push(smo40583);
smo40599v1.addTickables(smo40599v1ar)
fmtsmo405998.joinVoices([smo40599v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47662 = smo40581.getStemDirection();
smo40581.setStemDirection(dirsmo47662);
smo40582.setStemDirection(dirsmo47662);
smo40583.setStemDirection(dirsmo47662);
const smo47662 = new VF.Beam([smo40581,smo40582,smo40583]);
 
// formatting measures in staff group smo41649
fmtsmo380688.format([smo38068v0,smo39460v0,smo40599v0,smo40599v1], 161);
const stavesmo38068 = new VF.Stave(372, 451, 175);
stavesmo38068.setAttribute('id', 'stavesmo38068');
stavesmo38068.setBegBarType(VF.Barline.type.NONE);
stavesmo38068.setContext(context);
stavesmo38068.draw();
smo38068v0.draw(context, stavesmo38068);
const stavesmo39460 = new VF.Stave(372, 566, 175);
stavesmo39460.setAttribute('id', 'stavesmo39460');
stavesmo39460.setBegBarType(VF.Barline.type.NONE);
stavesmo39460.setContext(context);
stavesmo39460.draw();
smo39460v0.draw(context, stavesmo39460);
const stavesmo40599 = new VF.Stave(372, 699, 175);
stavesmo40599.setAttribute('id', 'stavesmo40599');
stavesmo40599.setBegBarType(VF.Barline.type.NONE);
stavesmo40599.setContext(context);
stavesmo40599.draw();
smo40599v0.draw(context, stavesmo40599);
smo40599v1.draw(context, stavesmo40599);
smo47662.setContext(context);
smo47662.draw();
const fmtsmo380989 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo38098v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38098v0ar = [];
const smo38069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38069'] = smo38069;
smo38069.setAttribute('id', 'smo38069');
smo38098v0ar.push(smo38069);
const smo38071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38071'] = smo38071;
smo38071.setAttribute('id', 'smo38071');
const smo38072 = new VF.Annotation('er');
smo38072.setAttribute('id', 'smo38072');
smo38072.setFont('Merriweather', 12, 'normal');
smo38072.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38071.addModifier(smo38072);
smo38072.addClass('lyric lyric-0');
const smo38073 = new VF.Annotation('er');
smo38073.setAttribute('id', 'smo38073');
smo38073.setFont('Merriweather', 12, 'normal');
smo38073.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38071.addModifier(smo38073);
smo38073.addClass('lyric lyric-1');
smo38098v0ar.push(smo38071);
const smo38074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38074'] = smo38074;
smo38074.setAttribute('id', 'smo38074');
const smo38075 = new VF.Annotation('fährt');
smo38075.setAttribute('id', 'smo38075');
smo38075.setFont('Merriweather', 12, 'normal');
smo38075.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38074.addModifier(smo38075);
smo38075.addClass('lyric lyric-0');
const smo38076 = new VF.Annotation('traf');
smo38076.setAttribute('id', 'smo38076');
smo38076.setFont('Merriweather', 12, 'normal');
smo38076.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38074.addModifier(smo38076);
smo38076.addClass('lyric lyric-1');
smo38098v0ar.push(smo38074);
const smo38077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38077'] = smo38077;
smo38077.setAttribute('id', 'smo38077');
const smo38078 = new VF.Annotation('durch');
smo38078.setAttribute('id', 'smo38078');
smo38078.setFont('Merriweather', 12, 'normal');
smo38078.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38077.addModifier(smo38078);
smo38078.addClass('lyric lyric-0');
const smo38079 = new VF.Annotation('la');
smo38079.setAttribute('id', 'smo38079');
smo38079.setFont('Merriweather', 12, 'normal');
smo38079.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38077.addModifier(smo38079);
smo38079.addClass('lyric lyric-1');
smo38098v0ar.push(smo38077);
const smo38080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38080'] = smo38080;
smo38080.setAttribute('id', 'smo38080');
const smo38081 = new VF.Annotation('de');
smo38081.setAttribute('id', 'smo38081');
smo38081.setFont('Merriweather', 12, 'normal');
smo38081.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38080.addModifier(smo38081);
smo38081.addClass('lyric lyric-0');
const smo38082 = new VF.Annotation('den');
smo38082.setAttribute('id', 'smo38082');
smo38082.setFont('Merriweather', 12, 'normal');
smo38082.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38080.addModifier(smo38082);
smo38082.addClass('lyric lyric-1');
smo38098v0ar.push(smo38080);
smo38098v0.addTickables(smo38098v0ar)
fmtsmo380989.joinVoices([smo38098v0]);
const fmtsmo394779 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo39477v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39477v0ar = [];
const smo39461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo39461'] = smo39461;
smo39461.setAttribute('id', 'smo39461');
smo39461.addModifier(new VF.Dot(), 0);
smo39461.addModifier(new VF.Dot(), 1);
smo39477v0ar.push(smo39461);
smo39477v0.addTickables(smo39477v0ar)
fmtsmo394779.joinVoices([smo39477v0]);
const fmtsmo406219 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo40621v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40621v0ar = [];
const smo40600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40600'] = smo40600;
smo40600.setAttribute('id', 'smo40600');
smo40621v0ar.push(smo40600);
const smo40601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40601'] = smo40601;
smo40601.setAttribute('id', 'smo40601');
smo40621v0ar.push(smo40601);
const smo40602 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40602'] = smo40602;
smo40602.setAttribute('id', 'smo40602');
smo40621v0ar.push(smo40602);
const smo40603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40603'] = smo40603;
smo40603.setAttribute('id', 'smo40603');
smo40621v0ar.push(smo40603);
smo40621v0.addTickables(smo40621v0ar)
fmtsmo406219.joinVoices([smo40621v0]);
const smo40621v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40621v1ar = [];
const smo40604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo40604'] = smo40604;
smo40604.setAttribute('id', 'smo40604');
smo40604.setStyle({ fillStyle: "#115511" });
smo40604.addModifier(new VF.Dot(), 0);
smo40621v1ar.push(smo40604);
const smo40605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo40605'] = smo40605;
smo40605.setAttribute('id', 'smo40605');
smo40605.setStyle({ fillStyle: '#aaaaaa7f' });
smo40605.addModifier(new VF.Dot(), 0);
smo40621v1ar.push(smo40605);
smo40621v1.addTickables(smo40621v1ar)
fmtsmo406219.joinVoices([smo40621v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47665 = smo38074.getStemDirection();
smo38074.setStemDirection(dirsmo47665);
smo38077.setStemDirection(dirsmo47665);
smo38080.setStemDirection(dirsmo47665);
const smo47665 = new VF.Beam([smo38074,smo38077,smo38080]);
 
// formatting measures in staff group smo41649
fmtsmo380989.format([smo38098v0,smo39477v0,smo40621v0,smo40621v1], 282);
const stavesmo38098 = new VF.Stave(547, 451, 296);
stavesmo38098.setAttribute('id', 'stavesmo38098');
stavesmo38098.setBegBarType(VF.Barline.type.NONE);
stavesmo38098.setContext(context);
stavesmo38098.draw();
smo38098v0.draw(context, stavesmo38098);
smo47665.setContext(context);
smo47665.draw();
const stavesmo39477 = new VF.Stave(547, 566, 296);
stavesmo39477.setAttribute('id', 'stavesmo39477');
stavesmo39477.setBegBarType(VF.Barline.type.NONE);
stavesmo39477.setContext(context);
stavesmo39477.draw();
smo39477v0.draw(context, stavesmo39477);
const stavesmo40621 = new VF.Stave(547, 699, 296);
stavesmo40621.setAttribute('id', 'stavesmo40621');
stavesmo40621.setBegBarType(VF.Barline.type.NONE);
stavesmo40621.setContext(context);
stavesmo40621.draw();
smo40621v0.draw(context, stavesmo40621);
smo40621v1.draw(context, stavesmo40621);
const fmtsmo3812010 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo38120v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38120v0ar = [];
const smo38099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38099'] = smo38099;
smo38099.setAttribute('id', 'smo38099');
smo38099.addModifier(new VF.Dot(), 0);
const smo38100 = new VF.Annotation('Fel');
smo38100.setAttribute('id', 'smo38100');
smo38100.setFont('Merriweather', 12, 'normal');
smo38100.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38099.addModifier(smo38100);
smo38100.addClass('lyric lyric-0 lyric-hyphen');
const smo38101 = new VF.Annotation('Städt');
smo38101.setAttribute('id', 'smo38101');
smo38101.setFont('Merriweather', 12, 'normal');
smo38101.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38099.addModifier(smo38101);
smo38101.addClass('lyric lyric-1 lyric-hyphen');
smo38120v0ar.push(smo38099);
const smo38102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38102'] = smo38102;
smo38102.setAttribute('id', 'smo38102');
smo38102.addModifier(new VF.Dot(), 0);
const smo38103 = new VF.Annotation('der');
smo38103.setAttribute('id', 'smo38103');
smo38103.setFont('Merriweather', 12, 'normal');
smo38103.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38102.addModifier(smo38103);
smo38103.addClass('lyric lyric-0');
const smo38104 = new VF.Annotation('chen');
smo38104.setAttribute('id', 'smo38104');
smo38104.setFont('Merriweather', 12, 'normal');
smo38104.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38102.addModifier(smo38104);
smo38104.addClass('lyric lyric-1');
smo38120v0ar.push(smo38102);
smo38120v0.addTickables(smo38120v0ar)
fmtsmo3812010.joinVoices([smo38120v0]);
const fmtsmo3949410 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo39494v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39494v0ar = [];
const smo39478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo39478'] = smo39478;
smo39478.setAttribute('id', 'smo39478');
smo39478.addModifier(new VF.Dot(), 0);
smo39478.addModifier(new VF.Dot(), 1);
smo39494v0ar.push(smo39478);
smo39494v0.addTickables(smo39494v0ar)
fmtsmo3949410.joinVoices([smo39494v0]);
const fmtsmo4064110 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo40641v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40641v0ar = [];
const smo40622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40622'] = smo40622;
smo40622.setAttribute('id', 'smo40622');
smo40641v0ar.push(smo40622);
const smo40623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40623'] = smo40623;
smo40623.setAttribute('id', 'smo40623');
smo40641v0ar.push(smo40623);
const smo40624 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40624'] = smo40624;
smo40624.setAttribute('id', 'smo40624');
smo40641v0ar.push(smo40624);
const smo40625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40625'] = smo40625;
smo40625.setAttribute('id', 'smo40625');
smo40641v0ar.push(smo40625);
smo40641v0.addTickables(smo40641v0ar)
fmtsmo4064110.joinVoices([smo40641v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3812010.format([smo38120v0,smo39494v0,smo40641v0], 174);
const stavesmo38120 = new VF.Stave(843, 451, 188);
stavesmo38120.setAttribute('id', 'stavesmo38120');
stavesmo38120.setBegBarType(VF.Barline.type.NONE);
stavesmo38120.setContext(context);
stavesmo38120.draw();
smo38120v0.draw(context, stavesmo38120);
const stavesmo39494 = new VF.Stave(843, 566, 188);
stavesmo39494.setAttribute('id', 'stavesmo39494');
stavesmo39494.setBegBarType(VF.Barline.type.NONE);
stavesmo39494.setContext(context);
stavesmo39494.draw();
smo39494v0.draw(context, stavesmo39494);
const stavesmo40641 = new VF.Stave(843, 699, 188);
stavesmo40641.setAttribute('id', 'stavesmo40641');
stavesmo40641.setBegBarType(VF.Barline.type.NONE);
stavesmo40641.setContext(context);
stavesmo40641.draw();
smo40641v0.draw(context, stavesmo40641);
const fmtsmo3814211 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo38142v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38142v0ar = [];
const smo38121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38121'] = smo38121;
smo38121.setAttribute('id', 'smo38121');
smo38121.addModifier(new VF.Dot(), 0);
const smo38122 = new VF.Annotation('Wäl');
smo38122.setAttribute('id', 'smo38122');
smo38122.setFont('Merriweather', 12, 'normal');
smo38122.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38121.addModifier(smo38122);
smo38122.addClass('lyric lyric-0 lyric-hyphen');
const smo38123 = new VF.Annotation('Mäd');
smo38123.setAttribute('id', 'smo38123');
smo38123.setFont('Merriweather', 12, 'normal');
smo38123.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38121.addModifier(smo38123);
smo38123.addClass('lyric lyric-1 lyric-hyphen');
smo38142v0ar.push(smo38121);
const smo38124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38124'] = smo38124;
smo38124.setAttribute('id', 'smo38124');
smo38124.addModifier(new VF.Dot(), 0);
const smo38125 = new VF.Annotation('der');
smo38125.setAttribute('id', 'smo38125');
smo38125.setFont('Merriweather', 12, 'normal');
smo38125.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38124.addModifier(smo38125);
smo38125.addClass('lyric lyric-0');
const smo38126 = new VF.Annotation('chen');
smo38126.setAttribute('id', 'smo38126');
smo38126.setFont('Merriweather', 12, 'normal');
smo38126.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38124.addModifier(smo38126);
smo38126.addClass('lyric lyric-1');
smo38142v0ar.push(smo38124);
smo38142v0.addTickables(smo38142v0ar)
fmtsmo3814211.joinVoices([smo38142v0]);
const fmtsmo3951111 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo39511v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39511v0ar = [];
const smo39495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo39495'] = smo39495;
smo39495.setAttribute('id', 'smo39495');
smo39495.addModifier(new VF.Dot(), 0);
smo39495.addModifier(new VF.Dot(), 1);
smo39511v0ar.push(smo39495);
smo39511v0.addTickables(smo39511v0ar)
fmtsmo3951111.joinVoices([smo39511v0]);
const fmtsmo4066111 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo40661v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40661v0ar = [];
const smo40642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40642'] = smo40642;
smo40642.setAttribute('id', 'smo40642');
smo40661v0ar.push(smo40642);
const smo40643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40643'] = smo40643;
smo40643.setAttribute('id', 'smo40643');
smo40661v0ar.push(smo40643);
const smo40644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40644'] = smo40644;
smo40644.setAttribute('id', 'smo40644');
smo40661v0ar.push(smo40644);
const smo40645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40645'] = smo40645;
smo40645.setAttribute('id', 'smo40645');
smo40661v0ar.push(smo40645);
smo40661v0.addTickables(smo40661v0ar)
fmtsmo4066111.joinVoices([smo40661v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3814211.format([smo38142v0,smo39511v0,smo40661v0], 168);
const stavesmo38142 = new VF.Stave(1031, 451, 182);
stavesmo38142.setAttribute('id', 'stavesmo38142');
stavesmo38142.setBegBarType(VF.Barline.type.NONE);
stavesmo38142.setContext(context);
stavesmo38142.draw();
smo38142v0.draw(context, stavesmo38142);
const stavesmo39511 = new VF.Stave(1031, 566, 182);
stavesmo39511.setAttribute('id', 'stavesmo39511');
stavesmo39511.setBegBarType(VF.Barline.type.NONE);
stavesmo39511.setContext(context);
stavesmo39511.draw();
smo39511v0.draw(context, stavesmo39511);
const stavesmo40661 = new VF.Stave(1031, 699, 182);
stavesmo40661.setAttribute('id', 'stavesmo40661');
stavesmo40661.setBegBarType(VF.Barline.type.NONE);
stavesmo40661.setContext(context);
stavesmo40661.draw();
smo40661v0.draw(context, stavesmo40661);
const rightsmo41649stavesmo381422 = new VF.StaveConnector(stavesmo38142, stavesmo40661).setType(0);
rightsmo41649stavesmo381422.setContext(context).draw();
const fmtsmo3817012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo38170v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38170v0ar = [];
const smo38143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38143'] = smo38143;
smo38143.setAttribute('id', 'smo38143');
const smo38144 = new VF.Annotation('ü');
smo38144.setAttribute('id', 'smo38144');
smo38144.setFont('Merriweather', 12, 'normal');
smo38144.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38143.addModifier(smo38144);
smo38144.addClass('lyric lyric-0 lyric-hyphen');
const smo38145 = new VF.Annotation('schö');
smo38145.setAttribute('id', 'smo38145');
smo38145.setFont('Merriweather', 12, 'normal');
smo38145.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38143.addModifier(smo38145);
smo38145.addClass('lyric lyric-1 lyric-hyphen');
smo38170v0ar.push(smo38143);
const smo38146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38146'] = smo38146;
smo38146.setAttribute('id', 'smo38146');
const smo38147 = new VF.Annotation('ber');
smo38147.setAttribute('id', 'smo38147');
smo38147.setFont('Merriweather', 12, 'normal');
smo38147.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38146.addModifier(smo38147);
smo38147.addClass('lyric lyric-0 lyric-hyphen');
const smo38148 = new VF.Annotation('new');
smo38148.setAttribute('id', 'smo38148');
smo38148.setFont('Merriweather', 12, 'normal');
smo38148.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38146.addModifier(smo38148);
smo38148.addClass('lyric lyric-1');
smo38170v0ar.push(smo38146);
const smo38149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo38149'] = smo38149;
smo38149.setAttribute('id', 'smo38149');
const smo38150 = new VF.Annotation('das');
smo38150.setAttribute('id', 'smo38150');
smo38150.setFont('Merriweather', 12, 'normal');
smo38150.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38149.addModifier(smo38150);
smo38150.addClass('lyric lyric-0');
const smo38151 = new VF.Annotation('als');
smo38151.setAttribute('id', 'smo38151');
smo38151.setFont('Merriweather', 12, 'normal');
smo38151.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38149.addModifier(smo38151);
smo38151.addClass('lyric lyric-1');
smo38170v0ar.push(smo38149);
const smo38152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38152'] = smo38152;
smo38152.setAttribute('id', 'smo38152');
smo38152.addModifier(new VF.Dot(), 0);
const smo38153 = new VF.Annotation('Land;');
smo38153.setAttribute('id', 'smo38153');
smo38153.setFont('Merriweather', 12, 'normal');
smo38153.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38152.addModifier(smo38153);
smo38153.addClass('lyric lyric-0 lyric-hyphen');
const smo38154 = new VF.Annotation('ich');
smo38154.setAttribute('id', 'smo38154');
smo38154.setFont('Merriweather', 12, 'normal');
smo38154.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38152.addModifier(smo38154);
smo38154.addClass('lyric lyric-1');
smo38170v0ar.push(smo38152);
smo38170v0.addTickables(smo38170v0ar)
fmtsmo3817012.joinVoices([smo38170v0]);
const fmtsmo3953112 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo39531v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39531v0ar = [];
const smo39512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo39512'] = smo39512;
smo39512.setAttribute('id', 'smo39512');
smo39512.addModifier(new VF.Dot(), 0);
smo39512.addModifier(new VF.Dot(), 1);
smo39531v0ar.push(smo39512);
const smo39513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n","an/4/n"]}'))
noteHash['smo39513'] = smo39513;
smo39513.setAttribute('id', 'smo39513');
smo39531v0ar.push(smo39513);
const smo39514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n"]}'))
noteHash['smo39514'] = smo39514;
smo39514.setAttribute('id', 'smo39514');
smo39531v0ar.push(smo39514);
const smo39515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
noteHash['smo39515'] = smo39515;
smo39515.setAttribute('id', 'smo39515');
smo39531v0ar.push(smo39515);
smo39531v0.addTickables(smo39531v0ar)
fmtsmo3953112.joinVoices([smo39531v0]);
const fmtsmo4068112 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo40681v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40681v0ar = [];
const smo40662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40662'] = smo40662;
smo40662.setAttribute('id', 'smo40662');
smo40681v0ar.push(smo40662);
const smo40663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40663'] = smo40663;
smo40663.setAttribute('id', 'smo40663');
smo40681v0ar.push(smo40663);
const smo40664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40664'] = smo40664;
smo40664.setAttribute('id', 'smo40664');
smo40681v0ar.push(smo40664);
const smo40665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40665'] = smo40665;
smo40665.setAttribute('id', 'smo40665');
smo40681v0ar.push(smo40665);
smo40681v0.addTickables(smo40681v0ar)
fmtsmo4068112.joinVoices([smo40681v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47692 = smo38143.getStemDirection();
smo38143.setStemDirection(dirsmo47692);
smo38146.setStemDirection(dirsmo47692);
smo38149.setStemDirection(dirsmo47692);
const smo47692 = new VF.Beam([smo38143,smo38146,smo38149]);
const dirsmo47695 = smo39513.getStemDirection();
smo39513.setStemDirection(dirsmo47695);
smo39514.setStemDirection(dirsmo47695);
smo39515.setStemDirection(dirsmo47695);
const smo47695 = new VF.Beam([smo39513,smo39514,smo39515]);
 
// formatting measures in staff group smo41649
fmtsmo3817012.format([smo38170v0,smo39531v0,smo40681v0], 289);
const stavesmo38170 = new VF.Stave(66, 844, 363);
stavesmo38170.setAttribute('id', 'stavesmo38170');
stavesmo38170.setBegBarType(1);
stavesmo38170.addClef('treble');
const keysmo38170 = new VF.KeySignature('G');
keysmo38170.addToStave(stavesmo38170);
stavesmo38170.setContext(context);
stavesmo38170.draw();
smo38170v0.draw(context, stavesmo38170);
smo47692.setContext(context);
smo47692.draw();
const stavesmo39531 = new VF.Stave(66, 967, 363);
stavesmo39531.setAttribute('id', 'stavesmo39531');
stavesmo39531.setBegBarType(1);
stavesmo39531.addClef('treble');
const keysmo39531 = new VF.KeySignature('G');
keysmo39531.addToStave(stavesmo39531);
stavesmo39531.setContext(context);
stavesmo39531.draw();
smo39531v0.draw(context, stavesmo39531);
smo47695.setContext(context);
smo47695.draw();
const stavesmo40681 = new VF.Stave(66, 1057, 363);
stavesmo40681.setAttribute('id', 'stavesmo40681');
stavesmo40681.setBegBarType(1);
stavesmo40681.addClef('bass');
const keysmo40681 = new VF.KeySignature('G');
keysmo40681.addToStave(stavesmo40681);
stavesmo40681.setContext(context);
stavesmo40681.draw();
smo40681v0.draw(context, stavesmo40681);
const leftsmo41649stavesmo381702 = new VF.StaveConnector(stavesmo38170, stavesmo40681).setType(1);
leftsmo41649stavesmo381702.setContext(context).draw();
const fmtsmo3819313 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo38193v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38193v0ar = [];
const smo38171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38171'] = smo38171;
smo38171.setAttribute('id', 'smo38171');
const smo38173 = new VF.Annotation('-');
smo38173.setAttribute('id', 'smo38173');
smo38173.setFont('Merriweather', 12, 'normal');
smo38173.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38171.addModifier(smo38173);
smo38173.addClass('lyric lyric-1 lyric-hyphen');
smo38193v0ar.push(smo38171);
const smo38174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo38174'] = smo38174;
smo38174.setAttribute('id', 'smo38174');
smo38193v0ar.push(smo38174);
const smo38175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38175'] = smo38175;
smo38175.setAttribute('id', 'smo38175');
smo38175.addModifier(new VF.Dot(), 0);
const smo38176 = new VF.Annotation('von');
smo38176.setAttribute('id', 'smo38176');
smo38176.setFont('Merriweather', 12, 'normal');
smo38176.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38175.addModifier(smo38176);
smo38176.addClass('lyric lyric-0');
const smo38177 = new VF.Annotation('Trotz');
smo38177.setAttribute('id', 'smo38177');
smo38177.setFont('Merriweather', 12, 'normal');
smo38177.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38175.addModifier(smo38177);
smo38177.addClass('lyric lyric-1 lyric-hyphen');
smo38193v0ar.push(smo38175);
smo38193v0.addTickables(smo38193v0ar)
fmtsmo3819313.joinVoices([smo38193v0]);
const fmtsmo3954813 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo39548v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39548v0ar = [];
const smo39532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
noteHash['smo39532'] = smo39532;
smo39532.setAttribute('id', 'smo39532');
smo39532.addModifier(new VF.Dot(), 0);
smo39532.addModifier(new VF.Dot(), 1);
smo39548v0ar.push(smo39532);
smo39548v0.addTickables(smo39548v0ar)
fmtsmo3954813.joinVoices([smo39548v0]);
const fmtsmo4070113 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo40701v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40701v0ar = [];
const smo40682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40682'] = smo40682;
smo40682.setAttribute('id', 'smo40682');
smo40701v0ar.push(smo40682);
const smo40683 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40683'] = smo40683;
smo40683.setAttribute('id', 'smo40683');
smo40701v0ar.push(smo40683);
const smo40684 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40684'] = smo40684;
smo40684.setAttribute('id', 'smo40684');
smo40701v0ar.push(smo40684);
const smo40685 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40685'] = smo40685;
smo40685.setAttribute('id', 'smo40685');
smo40701v0ar.push(smo40685);
smo40701v0.addTickables(smo40701v0ar)
fmtsmo4070113.joinVoices([smo40701v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3819313.format([smo38193v0,smo39548v0,smo40701v0], 147);
const stavesmo38193 = new VF.Stave(429, 844, 161);
stavesmo38193.setAttribute('id', 'stavesmo38193');
stavesmo38193.setBegBarType(VF.Barline.type.NONE);
stavesmo38193.setContext(context);
stavesmo38193.draw();
smo38193v0.draw(context, stavesmo38193);
const stavesmo39548 = new VF.Stave(429, 967, 161);
stavesmo39548.setAttribute('id', 'stavesmo39548');
stavesmo39548.setBegBarType(VF.Barline.type.NONE);
stavesmo39548.setContext(context);
stavesmo39548.draw();
smo39548v0.draw(context, stavesmo39548);
const stavesmo40701 = new VF.Stave(429, 1057, 161);
stavesmo40701.setAttribute('id', 'stavesmo40701');
stavesmo40701.setBegBarType(VF.Barline.type.NONE);
stavesmo40701.setContext(context);
stavesmo40701.draw();
smo40701v0.draw(context, stavesmo40701);
const fmtsmo3821214 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo38212v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38212v0ar = [];
const smo38194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38194'] = smo38194;
smo38194.setAttribute('id', 'smo38194');
smo38194.addModifier(new VF.Dot(), 0);
const smo38195 = new VF.Annotation('fern');
smo38195.setAttribute('id', 'smo38195');
smo38195.setFont('Merriweather', 12, 'normal');
smo38195.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38194.addModifier(smo38195);
smo38195.addClass('lyric lyric-0');
const smo38196 = new VF.Annotation('dem');
smo38196.setAttribute('id', 'smo38196');
smo38196.setFont('Merriweather', 12, 'normal');
smo38196.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38194.addModifier(smo38196);
smo38196.addClass('lyric lyric-1');
smo38212v0ar.push(smo38194);
smo38212v0.addTickables(smo38212v0ar)
fmtsmo3821214.joinVoices([smo38212v0]);
const fmtsmo3956514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo39565v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39565v0ar = [];
const smo39549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo39549'] = smo39549;
smo39549.setAttribute('id', 'smo39549');
smo39549.addModifier(new VF.Dot(), 0);
smo39549.addModifier(new VF.Dot(), 1);
smo39565v0ar.push(smo39549);
smo39565v0.addTickables(smo39565v0ar)
fmtsmo3956514.joinVoices([smo39565v0]);
const fmtsmo4072314 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo40723v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40723v0ar = [];
const smo40702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40702'] = smo40702;
smo40702.setAttribute('id', 'smo40702');
smo40723v0ar.push(smo40702);
const smo40703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40703'] = smo40703;
smo40703.setAttribute('id', 'smo40703');
smo40723v0ar.push(smo40703);
const smo40704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40704'] = smo40704;
smo40704.setAttribute('id', 'smo40704');
smo40723v0ar.push(smo40704);
const smo40705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40705'] = smo40705;
smo40705.setAttribute('id', 'smo40705');
smo40723v0ar.push(smo40705);
smo40723v0.addTickables(smo40723v0ar)
fmtsmo4072314.joinVoices([smo40723v0]);
const smo40723v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40723v1ar = [];
const smo40706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["dn/4/r"]}'))
noteHash['smo40706'] = smo40706;
smo40706.setAttribute('id', 'smo40706');
smo40706.setStyle({ fillStyle: "#115511" });
smo40706.addModifier(new VF.Dot(), 0);
smo40723v1ar.push(smo40706);
const smo40707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo40707'] = smo40707;
smo40707.setAttribute('id', 'smo40707');
smo40707.setStyle({ fillStyle: "#115511" });
smo40707.addModifier(new VF.Dot(), 0);
smo40723v1ar.push(smo40707);
smo40723v1.addTickables(smo40723v1ar)
fmtsmo4072314.joinVoices([smo40723v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3821214.format([smo38212v0,smo39565v0,smo40723v0,smo40723v1], 144);
const stavesmo38212 = new VF.Stave(590, 844, 158);
stavesmo38212.setAttribute('id', 'stavesmo38212');
stavesmo38212.setBegBarType(VF.Barline.type.NONE);
stavesmo38212.setContext(context);
stavesmo38212.draw();
smo38212v0.draw(context, stavesmo38212);
const stavesmo39565 = new VF.Stave(590, 967, 158);
stavesmo39565.setAttribute('id', 'stavesmo39565');
stavesmo39565.setBegBarType(VF.Barline.type.NONE);
stavesmo39565.setContext(context);
stavesmo39565.draw();
smo39565v0.draw(context, stavesmo39565);
const stavesmo40723 = new VF.Stave(590, 1057, 158);
stavesmo40723.setAttribute('id', 'stavesmo40723');
stavesmo40723.setBegBarType(VF.Barline.type.NONE);
stavesmo40723.setContext(context);
stavesmo40723.draw();
smo40723v0.draw(context, stavesmo40723);
smo40723v1.draw(context, stavesmo40723);
const fmtsmo3824215 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo38242v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38242v0ar = [];
const smo38213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38213'] = smo38213;
smo38213.setAttribute('id', 'smo38213');
const smo38214 = new VF.Annotation('-');
smo38214.setAttribute('id', 'smo38214');
smo38214.setFont('Merriweather', 12, 'normal');
smo38214.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38213.addModifier(smo38214);
smo38214.addClass('lyric lyric-0 lyric-hyphen');
smo38242v0ar.push(smo38213);
const smo38215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38215'] = smo38215;
smo38215.setAttribute('id', 'smo38215');
const smo38216 = new VF.Annotation('er');
smo38216.setAttribute('id', 'smo38216');
smo38216.setFont('Merriweather', 12, 'normal');
smo38216.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38215.addModifier(smo38216);
smo38216.addClass('lyric lyric-0 lyric-hyphen');
const smo38217 = new VF.Annotation('tat');
smo38217.setAttribute('id', 'smo38217');
smo38217.setFont('Merriweather', 12, 'normal');
smo38217.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38215.addModifier(smo38217);
smo38217.addClass('lyric lyric-1');
smo38242v0ar.push(smo38215);
const smo38218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38218'] = smo38218;
smo38218.setAttribute('id', 'smo38218');
const smo38219 = new VF.Annotation('kenn');
smo38219.setAttribute('id', 'smo38219');
smo38219.setFont('Merriweather', 12, 'normal');
smo38219.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38218.addModifier(smo38219);
smo38219.addClass('lyric lyric-0');
const smo38220 = new VF.Annotation('er');
smo38220.setAttribute('id', 'smo38220');
smo38220.setFont('Merriweather', 12, 'normal');
smo38220.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38218.addModifier(smo38220);
smo38220.addClass('lyric lyric-1');
smo38242v0ar.push(smo38218);
const smo38221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38221'] = smo38221;
smo38221.setAttribute('id', 'smo38221');
const smo38222 = new VF.Annotation('ich');
smo38222.setAttribute('id', 'smo38222');
smo38222.setFont('Merriweather', 12, 'normal');
smo38222.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38221.addModifier(smo38222);
smo38222.addClass('lyric lyric-0');
const smo38223 = new VF.Annotation('mir');
smo38223.setAttribute('id', 'smo38223');
smo38223.setFont('Merriweather', 12, 'normal');
smo38223.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38221.addModifier(smo38223);
smo38223.addClass('lyric lyric-1');
smo38242v0ar.push(smo38221);
const smo38224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo38224'] = smo38224;
smo38224.setAttribute('id', 'smo38224');
const smo38225 = new VF.Annotation('ihn');
smo38225.setAttribute('id', 'smo38225');
smo38225.setFont('Merriweather', 12, 'normal');
smo38225.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38224.addModifier(smo38225);
smo38225.addClass('lyric lyric-0');
const smo38226 = new VF.Annotation('ge');
smo38226.setAttribute('id', 'smo38226');
smo38226.setFont('Merriweather', 12, 'normal');
smo38226.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38224.addModifier(smo38226);
smo38226.addClass('lyric lyric-1 lyric-hyphen');
smo38242v0ar.push(smo38224);
smo38242v0.addTickables(smo38242v0ar)
fmtsmo3824215.joinVoices([smo38242v0]);
const fmtsmo3958215 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo39582v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39582v0ar = [];
const smo39566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/3/n","f#/4/n"]}'))
noteHash['smo39566'] = smo39566;
smo39566.setAttribute('id', 'smo39566');
smo39566.addModifier(new VF.Dot(), 0);
smo39566.addModifier(new VF.Dot(), 1);
smo39582v0ar.push(smo39566);
smo39582v0.addTickables(smo39582v0ar)
fmtsmo3958215.joinVoices([smo39582v0]);
const fmtsmo4074515 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo40745v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40745v0ar = [];
const smo40724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40724'] = smo40724;
smo40724.setAttribute('id', 'smo40724');
smo40745v0ar.push(smo40724);
const smo40725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40725'] = smo40725;
smo40725.setAttribute('id', 'smo40725');
smo40745v0ar.push(smo40725);
const smo40726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40726'] = smo40726;
smo40726.setAttribute('id', 'smo40726');
smo40745v0ar.push(smo40726);
const smo40727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
noteHash['smo40727'] = smo40727;
smo40727.setAttribute('id', 'smo40727');
smo40745v0ar.push(smo40727);
smo40745v0.addTickables(smo40745v0ar)
fmtsmo4074515.joinVoices([smo40745v0]);
const smo40745v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40745v1ar = [];
const smo40728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo40728'] = smo40728;
smo40728.setAttribute('id', 'smo40728');
smo40728.setStyle({ fillStyle: "#115511" });
smo40728.addModifier(new VF.Dot(), 0);
smo40745v1ar.push(smo40728);
const smo40729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo40729'] = smo40729;
smo40729.setAttribute('id', 'smo40729');
smo40729.setStyle({ fillStyle: "#115511" });
smo40729.addModifier(new VF.Dot(), 0);
smo40745v1ar.push(smo40729);
smo40745v1.addTickables(smo40745v1ar)
fmtsmo4074515.joinVoices([smo40745v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47712 = smo38218.getStemDirection();
smo38218.setStemDirection(dirsmo47712);
smo38221.setStemDirection(dirsmo47712);
smo38224.setStemDirection(dirsmo47712);
const smo47712 = new VF.Beam([smo38218,smo38221,smo38224]);
 
// formatting measures in staff group smo41649
fmtsmo3824215.format([smo38242v0,smo39582v0,smo40745v0,smo40745v1], 265);
const stavesmo38242 = new VF.Stave(748, 844, 279);
stavesmo38242.setAttribute('id', 'stavesmo38242');
stavesmo38242.setBegBarType(VF.Barline.type.NONE);
stavesmo38242.setContext(context);
stavesmo38242.draw();
smo38242v0.draw(context, stavesmo38242);
smo47712.setContext(context);
smo47712.draw();
const stavesmo39582 = new VF.Stave(748, 967, 279);
stavesmo39582.setAttribute('id', 'stavesmo39582');
stavesmo39582.setBegBarType(VF.Barline.type.NONE);
stavesmo39582.setContext(context);
stavesmo39582.draw();
smo39582v0.draw(context, stavesmo39582);
const stavesmo40745 = new VF.Stave(748, 1057, 279);
stavesmo40745.setAttribute('id', 'stavesmo40745');
stavesmo40745.setBegBarType(VF.Barline.type.NONE);
stavesmo40745.setContext(context);
stavesmo40745.draw();
smo40745v0.draw(context, stavesmo40745);
smo40745v1.draw(context, stavesmo40745);
const fmtsmo3826116 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo38261v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38261v0ar = [];
const smo38243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38243'] = smo38243;
smo38243.setAttribute('id', 'smo38243');
smo38243.addModifier(new VF.Dot(), 0);
const smo38244 = new VF.Annotation('schen');
smo38244.setAttribute('id', 'smo38244');
smo38244.setFont('Merriweather', 12, 'normal');
smo38244.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38243.addModifier(smo38244);
smo38244.addClass('lyric lyric-0');
const smo38245 = new VF.Annotation('stehn');
smo38245.setAttribute('id', 'smo38245');
smo38245.setFont('Merriweather', 12, 'normal');
smo38245.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38243.addModifier(smo38245);
smo38245.addClass('lyric lyric-1');
smo38261v0ar.push(smo38243);
smo38261v0.addTickables(smo38261v0ar)
fmtsmo3826116.joinVoices([smo38261v0]);
const fmtsmo3959916 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo39599v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39599v0ar = [];
const smo39583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["bn/3/n","gn/4/n"]}'))
noteHash['smo39583'] = smo39583;
smo39583.setAttribute('id', 'smo39583');
smo39583.addModifier(new VF.Dot(), 0);
smo39583.addModifier(new VF.Dot(), 1);
smo39599v0ar.push(smo39583);
smo39599v0.addTickables(smo39599v0ar)
fmtsmo3959916.joinVoices([smo39599v0]);
const fmtsmo4077016 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo40770v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40770v0ar = [];
const smo40746 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40746'] = smo40746;
smo40746.setAttribute('id', 'smo40746');
smo40770v0ar.push(smo40746);
const smo40747 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40747'] = smo40747;
smo40747.setAttribute('id', 'smo40747');
smo40770v0ar.push(smo40747);
const smo40748 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40748'] = smo40748;
smo40748.setAttribute('id', 'smo40748');
smo40770v0ar.push(smo40748);
const smo40749 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40749'] = smo40749;
smo40749.setAttribute('id', 'smo40749');
smo40770v0ar.push(smo40749);
smo40770v0.addTickables(smo40770v0ar)
fmtsmo4077016.joinVoices([smo40770v0]);
const smo40770v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40770v1ar = [];
const smo40750 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["eb/4/r"]}'))
noteHash['smo40750'] = smo40750;
smo40750.setAttribute('id', 'smo40750');
smo40750.setStyle({ fillStyle: "#115511" });
smo40770v1ar.push(smo40750);
const smo40751 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo40751'] = smo40751;
smo40751.setAttribute('id', 'smo40751');
smo40751.setStyle({ fillStyle: "#115511" });
smo40770v1ar.push(smo40751);
const smo40752 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo40752'] = smo40752;
smo40752.setAttribute('id', 'smo40752');
smo40752.setStyle({ fillStyle: "#115511" });
smo40770v1ar.push(smo40752);
const smo40753 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo40753'] = smo40753;
smo40753.setAttribute('id', 'smo40753');
smo40753.setStyle({ fillStyle: "#115511" });
smo40770v1ar.push(smo40753);
const smo40754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo40754'] = smo40754;
smo40754.setAttribute('id', 'smo40754');
smo40754.setStyle({ fillStyle: "#115511" });
smo40770v1ar.push(smo40754);
smo40770v1.addTickables(smo40770v1ar)
fmtsmo4077016.joinVoices([smo40770v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47723 = smo40752.getStemDirection();
smo40752.setStemDirection(dirsmo47723);
smo40753.setStemDirection(dirsmo47723);
smo40754.setStemDirection(dirsmo47723);
const smo47723 = new VF.Beam([smo40752,smo40753,smo40754]);
 
// formatting measures in staff group smo41649
fmtsmo3826116.format([smo38261v0,smo39599v0,smo40770v0,smo40770v1], 170);
const stavesmo38261 = new VF.Stave(1027, 844, 184);
stavesmo38261.setAttribute('id', 'stavesmo38261');
stavesmo38261.setBegBarType(VF.Barline.type.NONE);
stavesmo38261.setContext(context);
stavesmo38261.draw();
smo38261v0.draw(context, stavesmo38261);
const stavesmo39599 = new VF.Stave(1027, 967, 184);
stavesmo39599.setAttribute('id', 'stavesmo39599');
stavesmo39599.setBegBarType(VF.Barline.type.NONE);
stavesmo39599.setContext(context);
stavesmo39599.draw();
smo39599v0.draw(context, stavesmo39599);
const stavesmo40770 = new VF.Stave(1027, 1057, 184);
stavesmo40770.setAttribute('id', 'stavesmo40770');
stavesmo40770.setBegBarType(VF.Barline.type.NONE);
stavesmo40770.setContext(context);
stavesmo40770.draw();
smo40770v0.draw(context, stavesmo40770);
smo40770v1.draw(context, stavesmo40770);
smo47723.setContext(context);
smo47723.draw();
const rightsmo41649stavesmo382612 = new VF.StaveConnector(stavesmo38261, stavesmo40770).setType(0);
rightsmo41649stavesmo382612.setContext(context).draw();
const fmtsmo3829117 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo38291v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38291v0ar = [];
const smo38262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo38262'] = smo38262;
smo38262.setAttribute('id', 'smo38262');
const smo38263 = new VF.Annotation('-');
smo38263.setAttribute('id', 'smo38263');
smo38263.setFont('Merriweather', 12, 'normal');
smo38263.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38262.addModifier(smo38263);
smo38263.addClass('lyric lyric-0 lyric-hyphen');
smo38291v0ar.push(smo38262);
const smo38264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38264'] = smo38264;
smo38264.setAttribute('id', 'smo38264');
const smo38265 = new VF.Annotation('den');
smo38265.setAttribute('id', 'smo38265');
smo38265.setFont('Merriweather', 12, 'normal');
smo38265.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38264.addModifier(smo38265);
smo38265.addClass('lyric lyric-0');
const smo38266 = new VF.Annotation('er');
smo38266.setAttribute('id', 'smo38266');
smo38266.setFont('Merriweather', 12, 'normal');
smo38266.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38264.addModifier(smo38266);
smo38266.addClass('lyric lyric-1');
smo38291v0ar.push(smo38264);
const smo38267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38267'] = smo38267;
smo38267.setAttribute('id', 'smo38267');
const smo38268 = new VF.Annotation('all\'');
smo38268.setAttribute('id', 'smo38268');
smo38268.setFont('Merriweather', 12, 'normal');
smo38268.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38267.addModifier(smo38268);
smo38268.addClass('lyric lyric-0');
const smo38269 = new VF.Annotation('splet');
smo38269.setAttribute('id', 'smo38269');
smo38269.setFont('Merriweather', 12, 'normal');
smo38269.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38267.addModifier(smo38269);
smo38269.addClass('lyric lyric-1');
smo38291v0ar.push(smo38267);
const smo38270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38270'] = smo38270;
smo38270.setAttribute('id', 'smo38270');
const smo38271 = new VF.Annotation('sei');
smo38271.setAttribute('id', 'smo38271');
smo38271.setFont('Merriweather', 12, 'normal');
smo38271.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38270.addModifier(smo38271);
smo38271.addClass('lyric lyric-0 lyric-hyphen');
const smo38272 = new VF.Annotation('sei');
smo38272.setAttribute('id', 'smo38272');
smo38272.setFont('Merriweather', 12, 'normal');
smo38272.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38270.addModifier(smo38272);
smo38272.addClass('lyric lyric-1 lyric-hyphen');
smo38291v0ar.push(smo38270);
const smo38273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo38273'] = smo38273;
smo38273.setAttribute('id', 'smo38273');
const smo38274 = new VF.Annotation('ne');
smo38274.setAttribute('id', 'smo38274');
smo38274.setFont('Merriweather', 12, 'normal');
smo38274.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38273.addModifier(smo38274);
smo38274.addClass('lyric lyric-0');
const smo38275 = new VF.Annotation('ne');
smo38275.setAttribute('id', 'smo38275');
smo38275.setFont('Merriweather', 12, 'normal');
smo38275.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38273.addModifier(smo38275);
smo38275.addClass('lyric lyric-1');
smo38291v0ar.push(smo38273);
smo38291v0.addTickables(smo38291v0ar)
fmtsmo3829117.joinVoices([smo38291v0]);
const fmtsmo3961817 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo39618v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39618v0ar = [];
const smo39600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39600'] = smo39600;
smo39600.setAttribute('id', 'smo39600');
smo39600.addModifier(new VF.Dot(), 0);
smo39618v0ar.push(smo39600);
const smo39601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39601'] = smo39601;
smo39601.setAttribute('id', 'smo39601');
smo39618v0ar.push(smo39601);
const smo39602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39602'] = smo39602;
smo39602.setAttribute('id', 'smo39602');
smo39618v0ar.push(smo39602);
smo39618v0.addTickables(smo39618v0ar)
fmtsmo3961817.joinVoices([smo39618v0]);
const fmtsmo4079117 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo40791v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40791v0ar = [];
const smo40771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40771'] = smo40771;
smo40771.setAttribute('id', 'smo40771');
smo40791v0ar.push(smo40771);
const smo40772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40772'] = smo40772;
smo40772.setAttribute('id', 'smo40772');
smo40791v0ar.push(smo40772);
const smo40773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40773'] = smo40773;
smo40773.setAttribute('id', 'smo40773');
smo40791v0ar.push(smo40773);
const smo40774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40774'] = smo40774;
smo40774.setAttribute('id', 'smo40774');
smo40791v0ar.push(smo40774);
smo40791v0.addTickables(smo40791v0ar)
fmtsmo4079117.joinVoices([smo40791v0]);
const smo40791v1 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40791v1ar = [];
const smo40775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
noteHash['smo40775'] = smo40775;
smo40775.setAttribute('id', 'smo40775');
smo40775.setStyle({ fillStyle: "#115511" });
smo40775.addModifier(new VF.Dot(), 0);
smo40791v1ar.push(smo40775);
smo40791v1.addTickables(smo40791v1ar)
fmtsmo4079117.joinVoices([smo40791v1]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47733 = smo38267.getStemDirection();
smo38267.setStemDirection(dirsmo47733);
smo38270.setStemDirection(dirsmo47733);
smo38273.setStemDirection(dirsmo47733);
const smo47733 = new VF.Beam([smo38267,smo38270,smo38273]);
 
// formatting measures in staff group smo41649
fmtsmo3829117.format([smo38291v0,smo39618v0,smo40791v0,smo40791v1], 245);
const stavesmo38291 = new VF.Stave(66, 1197, 319);
stavesmo38291.setAttribute('id', 'stavesmo38291');
stavesmo38291.setBegBarType(1);
stavesmo38291.addClef('treble');
const keysmo38291 = new VF.KeySignature('G');
keysmo38291.addToStave(stavesmo38291);
stavesmo38291.setContext(context);
stavesmo38291.draw();
smo38291v0.draw(context, stavesmo38291);
smo47733.setContext(context);
smo47733.draw();
const stavesmo39618 = new VF.Stave(66, 1309, 319);
stavesmo39618.setAttribute('id', 'stavesmo39618');
stavesmo39618.setBegBarType(1);
stavesmo39618.addClef('treble');
const keysmo39618 = new VF.KeySignature('G');
keysmo39618.addToStave(stavesmo39618);
stavesmo39618.setContext(context);
stavesmo39618.draw();
smo39618v0.draw(context, stavesmo39618);
const stavesmo40791 = new VF.Stave(66, 1449, 319);
stavesmo40791.setAttribute('id', 'stavesmo40791');
stavesmo40791.setBegBarType(1);
stavesmo40791.addClef('bass');
const keysmo40791 = new VF.KeySignature('G');
keysmo40791.addToStave(stavesmo40791);
stavesmo40791.setContext(context);
stavesmo40791.draw();
smo40791v0.draw(context, stavesmo40791);
smo40791v1.draw(context, stavesmo40791);
const leftsmo41649stavesmo382912 = new VF.StaveConnector(stavesmo38291, stavesmo40791).setType(1);
leftsmo41649stavesmo382912.setContext(context).draw();
const fmtsmo3831318 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo38313v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38313v0ar = [];
const smo38292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38292'] = smo38292;
smo38292.setAttribute('id', 'smo38292');
smo38292.addModifier(new VF.Dot(), 0);
const smo38293 = new VF.Annotation('Lie');
smo38293.setAttribute('id', 'smo38293');
smo38293.setFont('Merriweather', 12, 'normal');
smo38293.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38292.addModifier(smo38293);
smo38293.addClass('lyric lyric-0 lyric-hyphen');
const smo38294 = new VF.Annotation('Lie');
smo38294.setAttribute('id', 'smo38294');
smo38294.setFont('Merriweather', 12, 'normal');
smo38294.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38292.addModifier(smo38294);
smo38294.addClass('lyric lyric-1 lyric-hyphen');
smo38313v0ar.push(smo38292);
const smo38295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38295'] = smo38295;
smo38295.setAttribute('id', 'smo38295');
smo38295.addModifier(new VF.Dot(), 0);
const smo38296 = new VF.Annotation('der');
smo38296.setAttribute('id', 'smo38296');
smo38296.setFont('Merriweather', 12, 'normal');
smo38296.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38295.addModifier(smo38296);
smo38296.addClass('lyric lyric-0');
const smo38297 = new VF.Annotation('der');
smo38297.setAttribute('id', 'smo38297');
smo38297.setFont('Merriweather', 12, 'normal');
smo38297.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38295.addModifier(smo38297);
smo38297.addClass('lyric lyric-1');
smo38313v0ar.push(smo38295);
smo38313v0.addTickables(smo38313v0ar)
fmtsmo3831318.joinVoices([smo38313v0]);
const fmtsmo3963618 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo39636v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39636v0ar = [];
const smo39619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39619'] = smo39619;
smo39619.setAttribute('id', 'smo39619');
smo39619.addModifier(new VF.Dot(), 0);
smo39636v0ar.push(smo39619);
const smo39620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
noteHash['smo39620'] = smo39620;
smo39620.setAttribute('id', 'smo39620');
smo39620.addModifier(new VF.Dot(), 0);
smo39620.addModifier(new VF.Dot(), 1);
smo39636v0ar.push(smo39620);
smo39636v0.addTickables(smo39636v0ar)
fmtsmo3963618.joinVoices([smo39636v0]);
const fmtsmo4081118 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo40811v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40811v0ar = [];
const smo40792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40792'] = smo40792;
smo40792.setAttribute('id', 'smo40792');
smo40811v0ar.push(smo40792);
const smo40793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40793'] = smo40793;
smo40793.setAttribute('id', 'smo40793');
smo40811v0ar.push(smo40793);
const smo40794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40794'] = smo40794;
smo40794.setAttribute('id', 'smo40794');
smo40811v0ar.push(smo40794);
const smo40795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40795'] = smo40795;
smo40795.setAttribute('id', 'smo40795');
smo40811v0ar.push(smo40795);
smo40811v0.addTickables(smo40811v0ar)
fmtsmo4081118.joinVoices([smo40811v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
 
// formatting measures in staff group smo41649
fmtsmo3831318.format([smo38313v0,smo39636v0,smo40811v0], 130);
const stavesmo38313 = new VF.Stave(385, 1197, 144);
stavesmo38313.setAttribute('id', 'stavesmo38313');
stavesmo38313.setBegBarType(VF.Barline.type.NONE);
stavesmo38313.setContext(context);
stavesmo38313.draw();
smo38313v0.draw(context, stavesmo38313);
const stavesmo39636 = new VF.Stave(385, 1309, 144);
stavesmo39636.setAttribute('id', 'stavesmo39636');
stavesmo39636.setBegBarType(VF.Barline.type.NONE);
stavesmo39636.setContext(context);
stavesmo39636.draw();
smo39636v0.draw(context, stavesmo39636);
const stavesmo40811 = new VF.Stave(385, 1449, 144);
stavesmo40811.setAttribute('id', 'stavesmo40811');
stavesmo40811.setBegBarType(VF.Barline.type.NONE);
stavesmo40811.setContext(context);
stavesmo40811.draw();
smo40811v0.draw(context, stavesmo40811);
const fmtsmo3834319 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo38343v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38343v0ar = [];
const smo38314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo38314'] = smo38314;
smo38314.setAttribute('id', 'smo38314');
const smo38315 = new VF.Annotation('-');
smo38315.setAttribute('id', 'smo38315');
smo38315.setFont('Merriweather', 12, 'normal');
smo38315.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38314.addModifier(smo38315);
smo38315.addClass('lyric lyric-0 lyric-hyphen');
smo38343v0ar.push(smo38314);
const smo38316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo38316'] = smo38316;
smo38316.setAttribute('id', 'smo38316');
const smo38317 = new VF.Annotation('sie');
smo38317.setAttribute('id', 'smo38317');
smo38317.setFont('Merriweather', 12, 'normal');
smo38317.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38316.addModifier(smo38317);
smo38317.addClass('lyric lyric-0');
const smo38318 = new VF.Annotation('doch');
smo38318.setAttribute('id', 'smo38318');
smo38318.setFont('Merriweather', 12, 'normal');
smo38318.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38316.addModifier(smo38318);
smo38318.addClass('lyric lyric-1');
smo38343v0ar.push(smo38316);
const smo38319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo38319'] = smo38319;
smo38319.setAttribute('id', 'smo38319');
const smo38320 = new VF.Annotation('sind');
smo38320.setAttribute('id', 'smo38320');
smo38320.setFont('Merriweather', 12, 'normal');
smo38320.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38319.addModifier(smo38320);
smo38320.addClass('lyric lyric-0');
const smo38321 = new VF.Annotation('im');
smo38321.setAttribute('id', 'smo38321');
smo38321.setFont('Merriweather', 12, 'normal');
smo38321.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38319.addModifier(smo38321);
smo38321.addClass('lyric lyric-1 lyric-hyphen');
smo38343v0ar.push(smo38319);
const smo38322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38322'] = smo38322;
smo38322.setAttribute('id', 'smo38322');
const smo38323 = new VF.Annotation('ir');
smo38323.setAttribute('id', 'smo38323');
smo38323.setFont('Merriweather', 12, 'normal');
smo38323.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38322.addModifier(smo38323);
smo38323.addClass('lyric lyric-0');
const smo38324 = new VF.Annotation('mer');
smo38324.setAttribute('id', 'smo38324');
smo38324.setFont('Merriweather', 12, 'normal');
smo38324.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38322.addModifier(smo38324);
smo38324.addClass('lyric lyric-1');
smo38343v0ar.push(smo38322);
const smo38325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo38325'] = smo38325;
smo38325.setAttribute('id', 'smo38325');
const smo38326 = new VF.Annotation('e');
smo38326.setAttribute('id', 'smo38326');
smo38326.setFont('Merriweather', 12, 'normal');
smo38326.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38325.addModifier(smo38326);
smo38326.addClass('lyric lyric-0 lyric-hyphen');
const smo38327 = new VF.Annotation('für');
smo38327.setAttribute('id', 'smo38327');
smo38327.setFont('Merriweather', 12, 'normal');
smo38327.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38325.addModifier(smo38327);
smo38327.addClass('lyric lyric-1');
smo38343v0ar.push(smo38325);
smo38343v0.addTickables(smo38343v0ar)
fmtsmo3834319.joinVoices([smo38343v0]);
const fmtsmo3965419 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo39654v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39654v0ar = [];
const smo39637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39637'] = smo39637;
smo39637.setAttribute('id', 'smo39637');
smo39637.addModifier(new VF.Dot(), 0);
smo39654v0ar.push(smo39637);
const smo39638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["dn/4/n","f#/4/n"]}'))
noteHash['smo39638'] = smo39638;
smo39638.setAttribute('id', 'smo39638');
smo39638.addModifier(new VF.Dot(), 0);
smo39638.addModifier(new VF.Dot(), 1);
smo39654v0ar.push(smo39638);
smo39654v0.addTickables(smo39654v0ar)
fmtsmo3965419.joinVoices([smo39654v0]);
const fmtsmo4083019 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo40830v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40830v0ar = [];
const smo40812 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40812'] = smo40812;
smo40812.setAttribute('id', 'smo40812');
smo40830v0ar.push(smo40812);
const smo40813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
noteHash['smo40813'] = smo40813;
smo40813.setAttribute('id', 'smo40813');
smo40813.addModifier(new VF.Dot(), 0);
smo40830v0ar.push(smo40813);
const smo40814 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n","dn/3/n"]}'))
noteHash['smo40814'] = smo40814;
smo40814.setAttribute('id', 'smo40814');
smo40830v0ar.push(smo40814);
smo40830v0.addTickables(smo40830v0ar)
fmtsmo4083019.joinVoices([smo40830v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47746 = smo38319.getStemDirection();
smo38319.setStemDirection(dirsmo47746);
smo38322.setStemDirection(dirsmo47746);
smo38325.setStemDirection(dirsmo47746);
const smo47746 = new VF.Beam([smo38319,smo38322,smo38325]);
 
// formatting measures in staff group smo41649
fmtsmo3834319.format([smo38343v0,smo39654v0,smo40830v0], 272);
const stavesmo38343 = new VF.Stave(529, 1197, 286);
stavesmo38343.setAttribute('id', 'stavesmo38343');
stavesmo38343.setBegBarType(VF.Barline.type.NONE);
stavesmo38343.setContext(context);
stavesmo38343.draw();
smo38343v0.draw(context, stavesmo38343);
smo47746.setContext(context);
smo47746.draw();
const stavesmo39654 = new VF.Stave(529, 1309, 286);
stavesmo39654.setAttribute('id', 'stavesmo39654');
stavesmo39654.setBegBarType(VF.Barline.type.NONE);
stavesmo39654.setContext(context);
stavesmo39654.draw();
smo39654v0.draw(context, stavesmo39654);
const stavesmo40830 = new VF.Stave(529, 1449, 286);
stavesmo40830.setAttribute('id', 'stavesmo40830');
stavesmo40830.setBegBarType(VF.Barline.type.NONE);
stavesmo40830.setContext(context);
stavesmo40830.draw();
smo40830v0.draw(context, stavesmo40830);
const fmtsmo3836220 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo38362v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38362v0ar = [];
const smo38344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38344'] = smo38344;
smo38344.setAttribute('id', 'smo38344');
smo38344.addModifier(new VF.Dot(), 0);
const smo38345 = new VF.Annotation('kannt');
smo38345.setAttribute('id', 'smo38345');
smo38345.setFont('Merriweather', 12, 'normal');
smo38345.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38344.addModifier(smo38345);
smo38345.addClass('lyric lyric-0');
const smo38346 = new VF.Annotation('mich');
smo38346.setAttribute('id', 'smo38346');
smo38346.setFont('Merriweather', 12, 'normal');
smo38346.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38344.addModifier(smo38346);
smo38346.addClass('lyric lyric-1');
smo38362v0ar.push(smo38344);
smo38362v0.addTickables(smo38362v0ar)
fmtsmo3836220.joinVoices([smo38362v0]);
const fmtsmo3967520 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo39675v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39675v0ar = [];
const smo39655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
noteHash['smo39655'] = smo39655;
smo39655.setAttribute('id', 'smo39655');
smo39675v0ar.push(smo39655);
const smo39656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39656'] = smo39656;
smo39656.setAttribute('id', 'smo39656');
smo39675v0ar.push(smo39656);
const smo39657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo39657'] = smo39657;
smo39657.setAttribute('id', 'smo39657');
smo39675v0ar.push(smo39657);
const smo39658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo39658'] = smo39658;
smo39658.setAttribute('id', 'smo39658');
smo39675v0ar.push(smo39658);
const smo39659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo39659'] = smo39659;
smo39659.setAttribute('id', 'smo39659');
smo39675v0ar.push(smo39659);
smo39675v0.addTickables(smo39675v0ar)
fmtsmo3967520.joinVoices([smo39675v0]);
const fmtsmo4085020 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo40850v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40850v0ar = [];
const smo40831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo40831'] = smo40831;
smo40831.setAttribute('id', 'smo40831');
smo40850v0ar.push(smo40831);
const smo40832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo40832'] = smo40832;
smo40832.setAttribute('id', 'smo40832');
smo40850v0ar.push(smo40832);
const smo40833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo40833'] = smo40833;
smo40833.setAttribute('id', 'smo40833');
smo40850v0ar.push(smo40833);
const smo40834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo40834'] = smo40834;
smo40834.setAttribute('id', 'smo40834');
smo40834.addModifier(new VF.Dot(), 0);
smo40850v0ar.push(smo40834);
smo40850v0.addTickables(smo40850v0ar)
fmtsmo4085020.joinVoices([smo40850v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47755 = smo39657.getStemDirection();
smo39657.setStemDirection(dirsmo47755);
smo39658.setStemDirection(dirsmo47755);
smo39659.setStemDirection(dirsmo47755);
const smo47755 = new VF.Beam([smo39657,smo39658,smo39659]);
const dirsmo47758 = smo40831.getStemDirection();
smo40831.setStemDirection(dirsmo47758);
smo40832.setStemDirection(dirsmo47758);
smo40833.setStemDirection(dirsmo47758);
const smo47758 = new VF.Beam([smo40831,smo40832,smo40833]);
 
// formatting measures in staff group smo41649
fmtsmo3836220.format([smo38362v0,smo39675v0,smo40850v0], 205);
const stavesmo38362 = new VF.Stave(815, 1197, 219);
stavesmo38362.setAttribute('id', 'stavesmo38362');
stavesmo38362.setBegBarType(VF.Barline.type.NONE);
stavesmo38362.setContext(context);
stavesmo38362.draw();
smo38362v0.draw(context, stavesmo38362);
const stavesmo39675 = new VF.Stave(815, 1309, 219);
stavesmo39675.setAttribute('id', 'stavesmo39675');
stavesmo39675.setBegBarType(VF.Barline.type.NONE);
stavesmo39675.setContext(context);
stavesmo39675.draw();
smo39675v0.draw(context, stavesmo39675);
smo47755.setContext(context);
smo47755.draw();
const stavesmo40850 = new VF.Stave(815, 1449, 219);
stavesmo40850.setAttribute('id', 'stavesmo40850');
stavesmo40850.setBegBarType(VF.Barline.type.NONE);
stavesmo40850.setContext(context);
stavesmo40850.draw();
smo40850v0.draw(context, stavesmo40850);
smo47758.setContext(context);
smo47758.draw();
const fmtsmo3838321 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo38383v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo38383v0ar = [];
const smo38363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38363'] = smo38363;
smo38363.setAttribute('id', 'smo38363');
smo38363.addModifier(new VF.Dot(), 0);
const smo38364 = new VF.Annotation('-');
smo38364.setAttribute('id', 'smo38364');
smo38364.setFont('Merriweather', 12, 'normal');
smo38364.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38363.addModifier(smo38364);
smo38364.addClass('lyric lyric-0 lyric-hyphen');
smo38383v0ar.push(smo38363);
const smo38365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo38365'] = smo38365;
smo38365.setAttribute('id', 'smo38365');
smo38365.addModifier(new VF.Dot(), 0);
const smo38366 = new VF.Annotation('Er');
smo38366.setAttribute('id', 'smo38366');
smo38366.setFont('Merriweather', 12, 'normal');
smo38366.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38365.addModifier(smo38366);
smo38366.addClass('lyric lyric-0');
const smo38367 = new VF.Annotation('Mein');
smo38367.setAttribute('id', 'smo38367');
smo38367.setFont('Merriweather', 12, 'normal');
smo38367.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo38365.addModifier(smo38367);
smo38367.addClass('lyric lyric-1');
smo38383v0ar.push(smo38365);
smo38383v0.addTickables(smo38383v0ar)
fmtsmo3838321.joinVoices([smo38383v0]);
const fmtsmo3969421 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo39694v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo39694v0ar = [];
const smo39676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo39676'] = smo39676;
smo39676.setAttribute('id', 'smo39676');
smo39694v0ar.push(smo39676);
const smo39677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39677'] = smo39677;
smo39677.setAttribute('id', 'smo39677');
smo39694v0ar.push(smo39677);
const smo39678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo39678'] = smo39678;
smo39678.setAttribute('id', 'smo39678');
smo39678.addModifier(new VF.Dot(), 0);
smo39694v0ar.push(smo39678);
smo39694v0.addTickables(smo39694v0ar)
fmtsmo3969421.joinVoices([smo39694v0]);
const fmtsmo4087121 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo40871v0 = new VF.Voice(JSON.parse('{"num_beats":6,"beat_value":8}')).setMode(VF.Voice.Mode.SOFT);
const smo40871v0ar = [];
const smo40851 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
noteHash['smo40851'] = smo40851;
smo40851.setAttribute('id', 'smo40851');
smo40871v0ar.push(smo40851);
const smo40852 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
noteHash['smo40852'] = smo40852;
smo40852.setAttribute('id', 'smo40852');
smo40871v0ar.push(smo40852);
const smo40853 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo40853'] = smo40853;
smo40853.setAttribute('id', 'smo40853');
smo40871v0ar.push(smo40853);
const smo40854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo40854'] = smo40854;
smo40854.setAttribute('id', 'smo40854');
smo40871v0ar.push(smo40854);
const smo40855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo40855'] = smo40855;
smo40855.setAttribute('id', 'smo40855');
smo40871v0ar.push(smo40855);
smo40871v0.addTickables(smo40871v0ar)
fmtsmo4087121.joinVoices([smo40871v0]);
// create beam groups and tuplets for format grp smo41649 before formatting
const dirsmo47765 = smo40851.getStemDirection();
smo40851.setStemDirection(dirsmo47765);
smo40852.setStemDirection(dirsmo47765);
smo40853.setStemDirection(dirsmo47765);
const smo47765 = new VF.Beam([smo40851,smo40852,smo40853]);
 
// formatting measures in staff group smo41649
fmtsmo3838321.format([smo38383v0,smo39694v0,smo40871v0], 166);
const stavesmo38383 = new VF.Stave(1034, 1197, 180);
stavesmo38383.setAttribute('id', 'stavesmo38383');
stavesmo38383.setBegBarType(VF.Barline.type.NONE);
stavesmo38383.setContext(context);
stavesmo38383.draw();
smo38383v0.draw(context, stavesmo38383);
const stavesmo39694 = new VF.Stave(1034, 1309, 180);
stavesmo39694.setAttribute('id', 'stavesmo39694');
stavesmo39694.setBegBarType(VF.Barline.type.NONE);
stavesmo39694.setContext(context);
stavesmo39694.draw();
smo39694v0.draw(context, stavesmo39694);
const stavesmo40871 = new VF.Stave(1034, 1449, 180);
stavesmo40871.setAttribute('id', 'stavesmo40871');
stavesmo40871.setBegBarType(VF.Barline.type.NONE);
stavesmo40871.setContext(context);
stavesmo40871.draw();
smo40871v0.draw(context, stavesmo40871);
smo47765.setContext(context);
smo47765.draw();
const rightsmo41649stavesmo383832 = new VF.StaveConnector(stavesmo38383, stavesmo40871).setType(0);
rightsmo41649stavesmo383832.setContext(context).draw();
const smo48566 = new VF.StaveTie({ first_note: smo38152, last_note: smo38171, 
          firstNote: smo38152, lastNote: smo38171, first_indices: [0], last_indices: [0]});
smo48566.setContext(context).draw();
const smo48567 = new VF.StaveTie({ first_note: smo38194, last_note: smo38213, 
          firstNote: smo38194, lastNote: smo38213, first_indices: [0], last_indices: [0]});
smo48567.setContext(context).draw();
const smo48568 = new VF.StaveTie({ first_note: smo38243, last_note: smo38243, 
          firstNote: smo38243, lastNote: smo38243, first_indices: [0], last_indices: [0]});
smo48568.setContext(context).draw();
const smo48569 = new VF.StaveTie({ first_note: smo38295, last_note: smo38314, 
          firstNote: smo38295, lastNote: smo38314, first_indices: [0], last_indices: [0]});
smo48569.setContext(context).draw();
const smo48570 = new VF.StaveTie({ first_note: smo38344, last_note: smo38363, 
          firstNote: smo38344, lastNote: smo38363, first_indices: [0], last_indices: [0]});
smo48570.setContext(context).draw();
const smo48571 = new VF.StaveTie({ first_note: smo39444, last_note: smo39461, 
          firstNote: smo39444, lastNote: smo39461, first_indices: [0,1], last_indices: [0,1]});
smo48571.setContext(context).draw();
const smo48572 = new VF.StaveTie({ first_note: smo39478, last_note: smo39495, 
          firstNote: smo39478, lastNote: smo39495, first_indices: [0,1], last_indices: [0,1]});
smo48572.setContext(context).draw();
const smo48573 = new VF.StaveTie({ first_note: smo39410, last_note: null, 
          firstNote: smo39410, lastNote: null, first_indices: [0,1], last_indices: [0,1]});
smo48573.setContext(context).draw();
const smo48574 = new VF.StaveTie({ first_note: null, last_note: smo39427, 
          firstNote: null, lastNote: smo39427, first_indices: [0,1], last_indices: [0,1]});
smo48574.setContext(context).draw();
const smo48575 = new VF.StaveTie({ first_note: smo39375, last_note: smo39392, 
          firstNote: smo39375, lastNote: smo39392, first_indices: [0], last_indices: [0]});
smo48575.setContext(context).draw();
const smo48576 = new VF.Curve(smo40728, smo40729, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":1,"position_end":1}'));
smo48576.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo38003').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38023').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38024').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38026').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38027').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38029').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38030').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo38032').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38033').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38051').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo38052').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo38072').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38073').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38075').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38076').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38078').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38079').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38081').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38082').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38100').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38101').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38104').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo38122').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38123').setAttributeNS('', 'transform', 'translate(0 12)');
context.svg.getElementById('vf-smo38126').setAttributeNS('', 'transform', 'translate(0 7)');
context.svg.getElementById('vf-smo38144').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38145').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38147').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38148').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38150').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38151').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo38153').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38154').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38173').setAttributeNS('', 'transform', 'translate(0 35)');
context.svg.getElementById('vf-smo38177').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38195').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38196').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38214').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38216').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38217').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo38219').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38220').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38222').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38223').setAttributeNS('', 'transform', 'translate(0 14)');
context.svg.getElementById('vf-smo38225').setAttributeNS('', 'transform', 'translate(0 4)');
context.svg.getElementById('vf-smo38226').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo38244').setAttributeNS('', 'transform', 'translate(0 9)');
context.svg.getElementById('vf-smo38245').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38263').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38265').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38266').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38268').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38269').setAttributeNS('', 'transform', 'translate(0 13)');
context.svg.getElementById('vf-smo38271').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38272').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo38274').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38275').setAttributeNS('', 'transform', 'translate(0 19)');
context.svg.getElementById('vf-smo38293').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38294').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo38297').setAttributeNS('', 'transform', 'translate(0 11)');
context.svg.getElementById('vf-smo38315').setAttributeNS('', 'transform', 'translate(0 1)');
context.svg.getElementById('vf-smo38317').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38318').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo38320').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38321').setAttributeNS('', 'transform', 'translate(0 17)');
context.svg.getElementById('vf-smo38323').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38324').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38326').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38327').setAttributeNS('', 'transform', 'translate(0 18)');
context.svg.getElementById('vf-smo38345').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo38346').setAttributeNS('', 'transform', 'translate(0 16)');
context.svg.getElementById('vf-smo38364').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38366').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo38367').setAttributeNS('', 'transform', 'translate(0 18)');
}
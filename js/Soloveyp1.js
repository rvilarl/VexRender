function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
VF.setMusicFont("Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo332130 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo33213v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33213v0ar = [];
const smo33197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33197'] = smo33197;
smo33197.setAttribute('id', 'smo33197');
smo33213v0ar.push(smo33197);
smo33213v0.addTickables(smo33213v0ar)
fmtsmo332130.joinVoices([smo33213v0]);
const fmtsmo342350 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo34235v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34235v0ar = [];
const smo34218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34218'] = smo34218;
smo34218.setAttribute('id', 'smo34218');
smo34235v0ar.push(smo34218);
const smo34219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34219'] = smo34219;
smo34219.setAttribute('id', 'smo34219');
smo34235v0ar.push(smo34219);
smo34235v0.addTickables(smo34235v0ar)
fmtsmo342350.joinVoices([smo34235v0]);
const fmtsmo352330 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo35233v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35233v0ar = [];
const smo35216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35216'] = smo35216;
smo35216.setAttribute('id', 'smo35216');
smo35233v0ar.push(smo35216);
const smo35217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35217'] = smo35217;
smo35217.setAttribute('id', 'smo35217');
smo35233v0ar.push(smo35217);
smo35233v0.addTickables(smo35233v0ar)
fmtsmo352330.joinVoices([smo35233v0]);
const fmtsmo361870 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo36187v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36187v0ar = [];
const smo36168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36168'] = smo36168;
smo36168.setAttribute('id', 'smo36168');
smo36187v0ar.push(smo36168);
const smo36169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36169'] = smo36169;
smo36169.setAttribute('id', 'smo36169');
smo36187v0ar.push(smo36169);
const smo36170 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36170'] = smo36170;
smo36170.setAttribute('id', 'smo36170');
smo36187v0ar.push(smo36170);
const smo36171 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36171'] = smo36171;
smo36171.setAttribute('id', 'smo36171');
smo36187v0ar.push(smo36171);
smo36187v0.addTickables(smo36187v0ar)
fmtsmo361870.joinVoices([smo36187v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo332130.format([smo33213v0,smo34235v0,smo35233v0,smo36187v0], 85);
const stavesmo33213 = new VF.Stave(55, 219, 303);
stavesmo33213.setAttribute('id', 'stavesmo33213');
stavesmo33213.setBegBarType(1);
stavesmo33213.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo33213.addClef('treble');
stavesmo33213.addTimeSignature('4/4');
const keysmo33213 = new VF.KeySignature('F');
keysmo33213.addToStave(stavesmo33213);
stavesmo33213.setContext(context);
stavesmo33213.draw();
smo33213v0.draw(context, stavesmo33213);
const stavesmo34235 = new VF.Stave(55, 312, 303);
stavesmo34235.setAttribute('id', 'stavesmo34235');
stavesmo34235.setBegBarType(1);
stavesmo34235.addClef('treble');
stavesmo34235.addTimeSignature('4/4');
const keysmo34235 = new VF.KeySignature('F');
keysmo34235.addToStave(stavesmo34235);
stavesmo34235.setContext(context);
stavesmo34235.draw();
smo34235v0.draw(context, stavesmo34235);
const stavesmo35233 = new VF.Stave(55, 391, 303);
stavesmo35233.setAttribute('id', 'stavesmo35233');
stavesmo35233.setBegBarType(1);
stavesmo35233.addClef('treble');
stavesmo35233.addTimeSignature('4/4');
const keysmo35233 = new VF.KeySignature('F');
keysmo35233.addToStave(stavesmo35233);
stavesmo35233.setContext(context);
stavesmo35233.draw();
smo35233v0.draw(context, stavesmo35233);
const stavesmo36187 = new VF.Stave(55, 468, 303);
stavesmo36187.setAttribute('id', 'stavesmo36187');
stavesmo36187.setBegBarType(1);
stavesmo36187.addClef('bass');
stavesmo36187.addTimeSignature('4/4');
const keysmo36187 = new VF.KeySignature('F');
keysmo36187.addToStave(stavesmo36187);
stavesmo36187.setContext(context);
stavesmo36187.draw();
smo36187v0.draw(context, stavesmo36187);
const leftsmo37130stavesmo332133 = new VF.StaveConnector(stavesmo33213, stavesmo36187).setType(1);
leftsmo37130stavesmo332133.setContext(context).draw();
const fmtsmo332301 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo33230v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33230v0ar = [];
const smo33214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33214'] = smo33214;
smo33214.setAttribute('id', 'smo33214');
smo33230v0ar.push(smo33214);
smo33230v0.addTickables(smo33230v0ar)
fmtsmo332301.joinVoices([smo33230v0]);
const fmtsmo342541 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo34254v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34254v0ar = [];
const smo34236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34236'] = smo34236;
smo34236.setAttribute('id', 'smo34236');
smo34254v0ar.push(smo34236);
const smo34237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34237'] = smo34237;
smo34237.setAttribute('id', 'smo34237');
smo34254v0ar.push(smo34237);
const smo34238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34238'] = smo34238;
smo34238.setAttribute('id', 'smo34238');
smo34254v0ar.push(smo34238);
smo34254v0.addTickables(smo34254v0ar)
fmtsmo342541.joinVoices([smo34254v0]);
const fmtsmo352511 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo35251v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35251v0ar = [];
const smo35234 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35234'] = smo35234;
smo35234.setAttribute('id', 'smo35234');
smo35251v0ar.push(smo35234);
const smo35235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35235'] = smo35235;
smo35235.setAttribute('id', 'smo35235');
smo35251v0ar.push(smo35235);
smo35251v0.addTickables(smo35251v0ar)
fmtsmo352511.joinVoices([smo35251v0]);
const fmtsmo362071 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo36207v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36207v0ar = [];
const smo36188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36188'] = smo36188;
smo36188.setAttribute('id', 'smo36188');
smo36207v0ar.push(smo36188);
const smo36189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36189'] = smo36189;
smo36189.setAttribute('id', 'smo36189');
smo36207v0ar.push(smo36189);
const smo36190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36190'] = smo36190;
smo36190.setAttribute('id', 'smo36190');
smo36207v0ar.push(smo36190);
const smo36191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36191'] = smo36191;
smo36191.setAttribute('id', 'smo36191');
smo36207v0ar.push(smo36191);
smo36207v0.addTickables(smo36207v0ar)
fmtsmo362071.joinVoices([smo36207v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo332301.format([smo33230v0,smo34254v0,smo35251v0,smo36207v0], 106);
const stavesmo33230 = new VF.Stave(358, 219, 120);
stavesmo33230.setAttribute('id', 'stavesmo33230');
stavesmo33230.setBegBarType(VF.Barline.type.NONE);
stavesmo33230.setContext(context);
stavesmo33230.draw();
smo33230v0.draw(context, stavesmo33230);
const stavesmo34254 = new VF.Stave(358, 312, 120);
stavesmo34254.setAttribute('id', 'stavesmo34254');
stavesmo34254.setBegBarType(VF.Barline.type.NONE);
stavesmo34254.setContext(context);
stavesmo34254.draw();
smo34254v0.draw(context, stavesmo34254);
const stavesmo35251 = new VF.Stave(358, 391, 120);
stavesmo35251.setAttribute('id', 'stavesmo35251');
stavesmo35251.setBegBarType(VF.Barline.type.NONE);
stavesmo35251.setContext(context);
stavesmo35251.draw();
smo35251v0.draw(context, stavesmo35251);
const stavesmo36207 = new VF.Stave(358, 468, 120);
stavesmo36207.setAttribute('id', 'stavesmo36207');
stavesmo36207.setBegBarType(VF.Barline.type.NONE);
stavesmo36207.setContext(context);
stavesmo36207.draw();
smo36207v0.draw(context, stavesmo36207);
const fmtsmo332472 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo33247v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33247v0ar = [];
const smo33231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33231'] = smo33231;
smo33231.setAttribute('id', 'smo33231');
smo33247v0ar.push(smo33231);
smo33247v0.addTickables(smo33247v0ar)
fmtsmo332472.joinVoices([smo33247v0]);
const fmtsmo342732 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo34273v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34273v0ar = [];
const smo34255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34255'] = smo34255;
smo34255.setAttribute('id', 'smo34255');
smo34273v0ar.push(smo34255);
const smo34256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo34256'] = smo34256;
smo34256.setAttribute('id', 'smo34256');
const smo342560acc = new VF.Accidental('n');
smo34256.addModifier(smo342560acc, 0);
smo34273v0ar.push(smo34256);
const smo34257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo34257'] = smo34257;
smo34257.setAttribute('id', 'smo34257');
const smo342570acc = new VF.Accidental('#');
smo34257.addModifier(smo342570acc, 0);
smo34273v0ar.push(smo34257);
smo34273v0.addTickables(smo34273v0ar)
fmtsmo342732.joinVoices([smo34273v0]);
const fmtsmo352692 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo35269v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35269v0ar = [];
const smo35252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35252'] = smo35252;
smo35252.setAttribute('id', 'smo35252');
smo35269v0ar.push(smo35252);
const smo35253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35253'] = smo35253;
smo35253.setAttribute('id', 'smo35253');
smo35269v0ar.push(smo35253);
smo35269v0.addTickables(smo35269v0ar)
fmtsmo352692.joinVoices([smo35269v0]);
const fmtsmo362272 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo36227v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36227v0ar = [];
const smo36208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36208'] = smo36208;
smo36208.setAttribute('id', 'smo36208');
smo36227v0ar.push(smo36208);
const smo36209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36209'] = smo36209;
smo36209.setAttribute('id', 'smo36209');
smo36227v0ar.push(smo36209);
const smo36210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36210'] = smo36210;
smo36210.setAttribute('id', 'smo36210');
smo36227v0ar.push(smo36210);
const smo36211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36211'] = smo36211;
smo36211.setAttribute('id', 'smo36211');
smo36227v0ar.push(smo36211);
smo36227v0.addTickables(smo36227v0ar)
fmtsmo362272.joinVoices([smo36227v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo332472.format([smo33247v0,smo34273v0,smo35269v0,smo36227v0], 127);
const stavesmo33247 = new VF.Stave(478, 219, 141);
stavesmo33247.setAttribute('id', 'stavesmo33247');
stavesmo33247.setBegBarType(VF.Barline.type.NONE);
stavesmo33247.setContext(context);
stavesmo33247.draw();
smo33247v0.draw(context, stavesmo33247);
const stavesmo34273 = new VF.Stave(478, 312, 141);
stavesmo34273.setAttribute('id', 'stavesmo34273');
stavesmo34273.setBegBarType(VF.Barline.type.NONE);
stavesmo34273.setContext(context);
stavesmo34273.draw();
smo34273v0.draw(context, stavesmo34273);
const stavesmo35269 = new VF.Stave(478, 391, 141);
stavesmo35269.setAttribute('id', 'stavesmo35269');
stavesmo35269.setBegBarType(VF.Barline.type.NONE);
stavesmo35269.setContext(context);
stavesmo35269.draw();
smo35269v0.draw(context, stavesmo35269);
const stavesmo36227 = new VF.Stave(478, 468, 141);
stavesmo36227.setAttribute('id', 'stavesmo36227');
stavesmo36227.setBegBarType(VF.Barline.type.NONE);
stavesmo36227.setContext(context);
stavesmo36227.draw();
smo36227v0.draw(context, stavesmo36227);
const fmtsmo332643 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo33264v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33264v0ar = [];
const smo33248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33248'] = smo33248;
smo33248.setAttribute('id', 'smo33248');
smo33264v0ar.push(smo33248);
smo33264v0.addTickables(smo33264v0ar)
fmtsmo332643.joinVoices([smo33264v0]);
const fmtsmo342913 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo34291v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34291v0ar = [];
const smo34274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34274'] = smo34274;
smo34274.setAttribute('id', 'smo34274');
smo34291v0ar.push(smo34274);
const smo34275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34275'] = smo34275;
smo34275.setAttribute('id', 'smo34275');
smo34291v0ar.push(smo34275);
smo34291v0.addTickables(smo34291v0ar)
fmtsmo342913.joinVoices([smo34291v0]);
const fmtsmo352873 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo35287v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35287v0ar = [];
const smo35270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35270'] = smo35270;
smo35270.setAttribute('id', 'smo35270');
smo35270.addModifier(new VF.Dot(), 0);
smo35287v0ar.push(smo35270);
const smo35271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35271'] = smo35271;
smo35271.setAttribute('id', 'smo35271');
smo35287v0ar.push(smo35271);
smo35287v0.addTickables(smo35287v0ar)
fmtsmo352873.joinVoices([smo35287v0]);
const fmtsmo362473 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo36247v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36247v0ar = [];
const smo36228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36228'] = smo36228;
smo36228.setAttribute('id', 'smo36228');
smo36247v0ar.push(smo36228);
const smo36229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36229'] = smo36229;
smo36229.setAttribute('id', 'smo36229');
smo36247v0ar.push(smo36229);
const smo36230 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36230'] = smo36230;
smo36230.setAttribute('id', 'smo36230');
smo36247v0ar.push(smo36230);
const smo36231 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36231'] = smo36231;
smo36231.setAttribute('id', 'smo36231');
smo36247v0ar.push(smo36231);
smo36247v0.addTickables(smo36247v0ar)
fmtsmo362473.joinVoices([smo36247v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo332643.format([smo33264v0,smo34291v0,smo35287v0,smo36247v0], 121);
const stavesmo33264 = new VF.Stave(619, 219, 135);
stavesmo33264.setAttribute('id', 'stavesmo33264');
stavesmo33264.setBegBarType(VF.Barline.type.NONE);
stavesmo33264.setContext(context);
stavesmo33264.draw();
smo33264v0.draw(context, stavesmo33264);
const stavesmo34291 = new VF.Stave(619, 312, 135);
stavesmo34291.setAttribute('id', 'stavesmo34291');
stavesmo34291.setBegBarType(VF.Barline.type.NONE);
stavesmo34291.setContext(context);
stavesmo34291.draw();
smo34291v0.draw(context, stavesmo34291);
const stavesmo35287 = new VF.Stave(619, 391, 135);
stavesmo35287.setAttribute('id', 'stavesmo35287');
stavesmo35287.setBegBarType(VF.Barline.type.NONE);
stavesmo35287.setContext(context);
stavesmo35287.draw();
smo35287v0.draw(context, stavesmo35287);
const stavesmo36247 = new VF.Stave(619, 468, 135);
stavesmo36247.setAttribute('id', 'stavesmo36247');
stavesmo36247.setBegBarType(VF.Barline.type.NONE);
stavesmo36247.setContext(context);
stavesmo36247.draw();
smo36247v0.draw(context, stavesmo36247);
const fmtsmo332814 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo33281v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33281v0ar = [];
const smo33265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33265'] = smo33265;
smo33265.setAttribute('id', 'smo33265');
smo33281v0ar.push(smo33265);
smo33281v0.addTickables(smo33281v0ar)
fmtsmo332814.joinVoices([smo33281v0]);
const fmtsmo343094 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo34309v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34309v0ar = [];
const smo34292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34292'] = smo34292;
smo34292.setAttribute('id', 'smo34292');
smo34309v0ar.push(smo34292);
const smo34293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34293'] = smo34293;
smo34293.setAttribute('id', 'smo34293');
smo34309v0ar.push(smo34293);
smo34309v0.addTickables(smo34309v0ar)
fmtsmo343094.joinVoices([smo34309v0]);
const fmtsmo353054 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo35305v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35305v0ar = [];
const smo35288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35288'] = smo35288;
smo35288.setAttribute('id', 'smo35288');
smo35305v0ar.push(smo35288);
const smo35289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35289'] = smo35289;
smo35289.setAttribute('id', 'smo35289');
smo35305v0ar.push(smo35289);
smo35305v0.addTickables(smo35305v0ar)
fmtsmo353054.joinVoices([smo35305v0]);
const fmtsmo362674 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo36267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36267v0ar = [];
const smo36248 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36248'] = smo36248;
smo36248.setAttribute('id', 'smo36248');
smo36267v0ar.push(smo36248);
const smo36249 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36249'] = smo36249;
smo36249.setAttribute('id', 'smo36249');
smo36267v0ar.push(smo36249);
const smo36250 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36250'] = smo36250;
smo36250.setAttribute('id', 'smo36250');
smo36267v0ar.push(smo36250);
const smo36251 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/3/n"]}'))
noteHash['smo36251'] = smo36251;
smo36251.setAttribute('id', 'smo36251');
const smo362510acc = new VF.Accidental('#');
smo36251.addModifier(smo362510acc, 0);
smo36267v0ar.push(smo36251);
smo36267v0.addTickables(smo36267v0ar)
fmtsmo362674.joinVoices([smo36267v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo332814.format([smo33281v0,smo34309v0,smo35305v0,smo36267v0], 118);
const stavesmo33281 = new VF.Stave(754, 219, 132);
stavesmo33281.setAttribute('id', 'stavesmo33281');
stavesmo33281.setBegBarType(VF.Barline.type.NONE);
stavesmo33281.setContext(context);
stavesmo33281.draw();
smo33281v0.draw(context, stavesmo33281);
const stavesmo34309 = new VF.Stave(754, 312, 132);
stavesmo34309.setAttribute('id', 'stavesmo34309');
stavesmo34309.setBegBarType(VF.Barline.type.NONE);
stavesmo34309.setContext(context);
stavesmo34309.draw();
smo34309v0.draw(context, stavesmo34309);
const stavesmo35305 = new VF.Stave(754, 391, 132);
stavesmo35305.setAttribute('id', 'stavesmo35305');
stavesmo35305.setBegBarType(VF.Barline.type.NONE);
stavesmo35305.setContext(context);
stavesmo35305.draw();
smo35305v0.draw(context, stavesmo35305);
const stavesmo36267 = new VF.Stave(754, 468, 132);
stavesmo36267.setAttribute('id', 'stavesmo36267');
stavesmo36267.setBegBarType(VF.Barline.type.NONE);
stavesmo36267.setContext(context);
stavesmo36267.draw();
smo36267v0.draw(context, stavesmo36267);
const fmtsmo332985 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo33298v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33298v0ar = [];
const smo33282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33282'] = smo33282;
smo33282.setAttribute('id', 'smo33282');
smo33298v0ar.push(smo33282);
smo33298v0.addTickables(smo33298v0ar)
fmtsmo332985.joinVoices([smo33298v0]);
const fmtsmo343285 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo34328v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34328v0ar = [];
const smo34310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34310'] = smo34310;
smo34310.setAttribute('id', 'smo34310');
smo34328v0ar.push(smo34310);
const smo34311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34311'] = smo34311;
smo34311.setAttribute('id', 'smo34311');
smo34328v0ar.push(smo34311);
const smo34312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo34312'] = smo34312;
smo34312.setAttribute('id', 'smo34312');
smo34328v0ar.push(smo34312);
smo34328v0.addTickables(smo34328v0ar)
fmtsmo343285.joinVoices([smo34328v0]);
const fmtsmo353245 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo35324v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35324v0ar = [];
const smo35306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35306'] = smo35306;
smo35306.setAttribute('id', 'smo35306');
smo35324v0ar.push(smo35306);
const smo35307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35307'] = smo35307;
smo35307.setAttribute('id', 'smo35307');
smo35324v0ar.push(smo35307);
const smo35308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35308'] = smo35308;
smo35308.setAttribute('id', 'smo35308');
smo35324v0ar.push(smo35308);
smo35324v0.addTickables(smo35324v0ar)
fmtsmo353245.joinVoices([smo35324v0]);
const fmtsmo362875 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo36287v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36287v0ar = [];
const smo36268 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36268'] = smo36268;
smo36268.setAttribute('id', 'smo36268');
smo36287v0ar.push(smo36268);
const smo36269 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36269'] = smo36269;
smo36269.setAttribute('id', 'smo36269');
smo36287v0ar.push(smo36269);
const smo36270 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36270'] = smo36270;
smo36270.setAttribute('id', 'smo36270');
smo36287v0ar.push(smo36270);
const smo36271 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36271'] = smo36271;
smo36271.setAttribute('id', 'smo36271');
smo36287v0ar.push(smo36271);
smo36287v0.addTickables(smo36287v0ar)
fmtsmo362875.joinVoices([smo36287v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo332985.format([smo33298v0,smo34328v0,smo35324v0,smo36287v0], 106);
const stavesmo33298 = new VF.Stave(886, 219, 120);
stavesmo33298.setAttribute('id', 'stavesmo33298');
stavesmo33298.setBegBarType(VF.Barline.type.NONE);
stavesmo33298.setContext(context);
stavesmo33298.draw();
smo33298v0.draw(context, stavesmo33298);
const stavesmo34328 = new VF.Stave(886, 312, 120);
stavesmo34328.setAttribute('id', 'stavesmo34328');
stavesmo34328.setBegBarType(VF.Barline.type.NONE);
stavesmo34328.setContext(context);
stavesmo34328.draw();
smo34328v0.draw(context, stavesmo34328);
const stavesmo35324 = new VF.Stave(886, 391, 120);
stavesmo35324.setAttribute('id', 'stavesmo35324');
stavesmo35324.setBegBarType(VF.Barline.type.NONE);
stavesmo35324.setContext(context);
stavesmo35324.draw();
smo35324v0.draw(context, stavesmo35324);
const stavesmo36287 = new VF.Stave(886, 468, 120);
stavesmo36287.setAttribute('id', 'stavesmo36287');
stavesmo36287.setBegBarType(VF.Barline.type.NONE);
stavesmo36287.setContext(context);
stavesmo36287.draw();
smo36287v0.draw(context, stavesmo36287);
const fmtsmo333156 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo33315v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33315v0ar = [];
const smo33299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33299'] = smo33299;
smo33299.setAttribute('id', 'smo33299');
smo33315v0ar.push(smo33299);
smo33315v0.addTickables(smo33315v0ar)
fmtsmo333156.joinVoices([smo33315v0]);
const fmtsmo343516 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo34351v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34351v0ar = [];
const smo34329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34329'] = smo34329;
smo34329.setAttribute('id', 'smo34329');
smo34351v0ar.push(smo34329);
const smo34330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34330'] = smo34330;
smo34330.setAttribute('id', 'smo34330');
smo34351v0ar.push(smo34330);
const smo34331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34331'] = smo34331;
smo34331.setAttribute('id', 'smo34331');
smo34351v0ar.push(smo34331);
const smo34332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["c#/4/n"]}'))
noteHash['smo34332'] = smo34332;
smo34332.setAttribute('id', 'smo34332');
const smo343320acc = new VF.Accidental('#');
smo34332.addModifier(smo343320acc, 0);
smo34351v0ar.push(smo34332);
const smo34333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34333'] = smo34333;
smo34333.setAttribute('id', 'smo34333');
smo34351v0ar.push(smo34333);
const smo34334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34334'] = smo34334;
smo34334.setAttribute('id', 'smo34334');
smo34351v0ar.push(smo34334);
const smo34335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34335'] = smo34335;
smo34335.setAttribute('id', 'smo34335');
smo34351v0ar.push(smo34335);
smo34351v0.addTickables(smo34351v0ar)
fmtsmo343516.joinVoices([smo34351v0]);
const fmtsmo353446 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo35344v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35344v0ar = [];
const smo35325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35325'] = smo35325;
smo35325.setAttribute('id', 'smo35325');
smo35344v0ar.push(smo35325);
const smo35326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35326'] = smo35326;
smo35326.setAttribute('id', 'smo35326');
smo35344v0ar.push(smo35326);
const smo35327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35327'] = smo35327;
smo35327.setAttribute('id', 'smo35327');
smo35344v0ar.push(smo35327);
const smo35328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35328'] = smo35328;
smo35328.setAttribute('id', 'smo35328');
smo35344v0ar.push(smo35328);
smo35344v0.addTickables(smo35344v0ar)
fmtsmo353446.joinVoices([smo35344v0]);
const fmtsmo363076 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo36307v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36307v0ar = [];
const smo36288 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36288'] = smo36288;
smo36288.setAttribute('id', 'smo36288');
smo36307v0ar.push(smo36288);
const smo36289 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36289'] = smo36289;
smo36289.setAttribute('id', 'smo36289');
smo36307v0ar.push(smo36289);
const smo36290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36290'] = smo36290;
smo36290.setAttribute('id', 'smo36290');
smo36307v0ar.push(smo36290);
const smo36291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36291'] = smo36291;
smo36291.setAttribute('id', 'smo36291');
smo36307v0ar.push(smo36291);
smo36307v0.addTickables(smo36307v0ar)
fmtsmo363076.joinVoices([smo36307v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43449 = smo34330.getStemDirection();
smo34330.setStemDirection(dirsmo43449);
smo34331.setStemDirection(dirsmo43449);
smo34332.setStemDirection(dirsmo43449);
smo34333.setStemDirection(dirsmo43449);
const smo43449 = new VF.Beam([smo34330,smo34331,smo34332,smo34333]);
 
// formatting measures in staff group smo37130
fmtsmo333156.format([smo33315v0,smo34351v0,smo35344v0,smo36307v0], 196);
const stavesmo33315 = new VF.Stave(1006, 219, 210);
stavesmo33315.setAttribute('id', 'stavesmo33315');
stavesmo33315.setBegBarType(VF.Barline.type.NONE);
stavesmo33315.setContext(context);
stavesmo33315.draw();
smo33315v0.draw(context, stavesmo33315);
const stavesmo34351 = new VF.Stave(1006, 312, 210);
stavesmo34351.setAttribute('id', 'stavesmo34351');
stavesmo34351.setBegBarType(VF.Barline.type.NONE);
stavesmo34351.setContext(context);
stavesmo34351.draw();
smo34351v0.draw(context, stavesmo34351);
smo43449.setContext(context);
smo43449.draw();
const stavesmo35344 = new VF.Stave(1006, 391, 210);
stavesmo35344.setAttribute('id', 'stavesmo35344');
stavesmo35344.setBegBarType(VF.Barline.type.NONE);
stavesmo35344.setContext(context);
stavesmo35344.draw();
smo35344v0.draw(context, stavesmo35344);
const stavesmo36307 = new VF.Stave(1006, 468, 210);
stavesmo36307.setAttribute('id', 'stavesmo36307');
stavesmo36307.setBegBarType(VF.Barline.type.NONE);
stavesmo36307.setContext(context);
stavesmo36307.draw();
smo36307v0.draw(context, stavesmo36307);
const fmtsmo333327 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo33332v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33332v0ar = [];
const smo33316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33316'] = smo33316;
smo33316.setAttribute('id', 'smo33316');
smo33332v0ar.push(smo33316);
smo33332v0.addTickables(smo33332v0ar)
fmtsmo333327.joinVoices([smo33332v0]);
const fmtsmo343727 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo34372v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34372v0ar = [];
const smo34352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34352'] = smo34352;
smo34352.setAttribute('id', 'smo34352');
smo34352.addModifier(new VF.Dot(), 0);
smo34372v0ar.push(smo34352);
const smo34353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34353'] = smo34353;
smo34353.setAttribute('id', 'smo34353');
smo34372v0ar.push(smo34353);
const smo34354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34354'] = smo34354;
smo34354.setAttribute('id', 'smo34354');
smo34372v0ar.push(smo34354);
const smo34355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo34355'] = smo34355;
smo34355.setAttribute('id', 'smo34355');
smo34372v0ar.push(smo34355);
const smo34356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34356'] = smo34356;
smo34356.setAttribute('id', 'smo34356');
smo34372v0ar.push(smo34356);
smo34372v0.addTickables(smo34372v0ar)
fmtsmo343727.joinVoices([smo34372v0]);
const fmtsmo353637 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo35363v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35363v0ar = [];
const smo35345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35345'] = smo35345;
smo35345.setAttribute('id', 'smo35345');
smo35363v0ar.push(smo35345);
const smo35346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35346'] = smo35346;
smo35346.setAttribute('id', 'smo35346');
smo35363v0ar.push(smo35346);
const smo35347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35347'] = smo35347;
smo35347.setAttribute('id', 'smo35347');
smo35363v0ar.push(smo35347);
smo35363v0.addTickables(smo35363v0ar)
fmtsmo353637.joinVoices([smo35363v0]);
const fmtsmo363257 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo36325v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36325v0ar = [];
const smo36308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36308'] = smo36308;
smo36308.setAttribute('id', 'smo36308');
smo36325v0ar.push(smo36308);
const smo36309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo36309'] = smo36309;
smo36309.setAttribute('id', 'smo36309');
smo36325v0ar.push(smo36309);
smo36325v0.addTickables(smo36325v0ar)
fmtsmo363257.joinVoices([smo36325v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43458 = smo34353.getStemDirection();
smo34353.setStemDirection(dirsmo43458);
smo34354.setStemDirection(dirsmo43458);
const smo43458 = new VF.Beam([smo34353,smo34354]);
 
// formatting measures in staff group smo37130
fmtsmo333327.format([smo33332v0,smo34372v0,smo35363v0,smo36325v0], 147);
const stavesmo33332 = new VF.Stave(1216, 219, 161);
stavesmo33332.setAttribute('id', 'stavesmo33332');
stavesmo33332.setBegBarType(VF.Barline.type.NONE);
stavesmo33332.setContext(context);
stavesmo33332.draw();
smo33332v0.draw(context, stavesmo33332);
const stavesmo34372 = new VF.Stave(1216, 312, 161);
stavesmo34372.setAttribute('id', 'stavesmo34372');
stavesmo34372.setBegBarType(VF.Barline.type.NONE);
stavesmo34372.setContext(context);
stavesmo34372.draw();
smo34372v0.draw(context, stavesmo34372);
smo43458.setContext(context);
smo43458.draw();
const stavesmo35363 = new VF.Stave(1216, 391, 161);
stavesmo35363.setAttribute('id', 'stavesmo35363');
stavesmo35363.setBegBarType(VF.Barline.type.NONE);
stavesmo35363.setContext(context);
stavesmo35363.draw();
smo35363v0.draw(context, stavesmo35363);
const stavesmo36325 = new VF.Stave(1216, 468, 161);
stavesmo36325.setAttribute('id', 'stavesmo36325');
stavesmo36325.setBegBarType(VF.Barline.type.NONE);
stavesmo36325.setContext(context);
stavesmo36325.draw();
smo36325v0.draw(context, stavesmo36325);
const rightsmo37130stavesmo333323 = new VF.StaveConnector(stavesmo33332, stavesmo36325).setType(0);
rightsmo37130stavesmo333323.setContext(context).draw();
const fmtsmo333528 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo33352v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33352v0ar = [];
const smo33333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33333'] = smo33333;
smo33333.setAttribute('id', 'smo33333');
const smo33334 = new VF.Annotation('Со');
smo33334.setAttribute('id', 'smo33334');
smo33334.setFont('Merriweather', 12.1, 'normal');
smo33334.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33333.addModifier(smo33334);
smo33334.addClass('lyric lyric-0 lyric-hyphen');
smo33352v0ar.push(smo33333);
const smo33335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33335'] = smo33335;
smo33335.setAttribute('id', 'smo33335');
const smo33336 = new VF.Annotation('ло');
smo33336.setAttribute('id', 'smo33336');
smo33336.setFont('Merriweather', 12.1, 'normal');
smo33336.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33335.addModifier(smo33336);
smo33336.addClass('lyric lyric-0');
smo33352v0ar.push(smo33335);
smo33352v0.addTickables(smo33352v0ar)
fmtsmo333528.joinVoices([smo33352v0]);
const fmtsmo343928 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo34392v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34392v0ar = [];
const smo34373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34373'] = smo34373;
smo34373.setAttribute('id', 'smo34373');
smo34392v0ar.push(smo34373);
const smo34374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34374'] = smo34374;
smo34374.setAttribute('id', 'smo34374');
smo34392v0ar.push(smo34374);
const smo34375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34375'] = smo34375;
smo34375.setAttribute('id', 'smo34375');
smo34392v0ar.push(smo34375);
const smo34376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34376'] = smo34376;
smo34376.setAttribute('id', 'smo34376');
smo34392v0ar.push(smo34376);
smo34392v0.addTickables(smo34392v0ar)
fmtsmo343928.joinVoices([smo34392v0]);
const fmtsmo353838 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo35383v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35383v0ar = [];
const smo35364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35364'] = smo35364;
smo35364.setAttribute('id', 'smo35364');
smo35383v0ar.push(smo35364);
const smo35365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35365'] = smo35365;
smo35365.setAttribute('id', 'smo35365');
smo35383v0ar.push(smo35365);
const smo35366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35366'] = smo35366;
smo35366.setAttribute('id', 'smo35366');
smo35383v0ar.push(smo35366);
const smo35367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35367'] = smo35367;
smo35367.setAttribute('id', 'smo35367');
smo35383v0ar.push(smo35367);
smo35383v0.addTickables(smo35383v0ar)
fmtsmo353838.joinVoices([smo35383v0]);
const fmtsmo363458 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo36345v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36345v0ar = [];
const smo36326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36326'] = smo36326;
smo36326.setAttribute('id', 'smo36326');
smo36345v0ar.push(smo36326);
const smo36327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36327'] = smo36327;
smo36327.setAttribute('id', 'smo36327');
smo36345v0ar.push(smo36327);
const smo36328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36328'] = smo36328;
smo36328.setAttribute('id', 'smo36328');
smo36345v0ar.push(smo36328);
const smo36329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36329'] = smo36329;
smo36329.setAttribute('id', 'smo36329');
smo36345v0ar.push(smo36329);
smo36345v0.addTickables(smo36345v0ar)
fmtsmo363458.joinVoices([smo36345v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo333528.format([smo33352v0,smo34392v0,smo35383v0,smo36345v0], 161);
const stavesmo33352 = new VF.Stave(55, 598, 244);
stavesmo33352.setAttribute('id', 'stavesmo33352');
stavesmo33352.setBegBarType(4);
stavesmo33352.addClef('treble');
const keysmo33352 = new VF.KeySignature('F');
keysmo33352.addToStave(stavesmo33352);
stavesmo33352.setContext(context);
stavesmo33352.draw();
smo33352v0.draw(context, stavesmo33352);
const stavesmo34392 = new VF.Stave(55, 711, 244);
stavesmo34392.setAttribute('id', 'stavesmo34392');
stavesmo34392.setBegBarType(4);
stavesmo34392.addClef('treble');
const keysmo34392 = new VF.KeySignature('F');
keysmo34392.addToStave(stavesmo34392);
stavesmo34392.setContext(context);
stavesmo34392.draw();
smo34392v0.draw(context, stavesmo34392);
const stavesmo35383 = new VF.Stave(55, 794, 244);
stavesmo35383.setAttribute('id', 'stavesmo35383');
stavesmo35383.setBegBarType(4);
stavesmo35383.addClef('treble');
const keysmo35383 = new VF.KeySignature('F');
keysmo35383.addToStave(stavesmo35383);
stavesmo35383.setContext(context);
stavesmo35383.draw();
smo35383v0.draw(context, stavesmo35383);
const stavesmo36345 = new VF.Stave(55, 875, 244);
stavesmo36345.setAttribute('id', 'stavesmo36345');
stavesmo36345.setBegBarType(4);
stavesmo36345.addClef('bass');
const keysmo36345 = new VF.KeySignature('F');
keysmo36345.addToStave(stavesmo36345);
stavesmo36345.setContext(context);
stavesmo36345.draw();
smo36345v0.draw(context, stavesmo36345);
const leftsmo37130stavesmo333523 = new VF.StaveConnector(stavesmo33352, stavesmo36345).setType(1);
leftsmo37130stavesmo333523.setContext(context).draw();
const fmtsmo333749 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo33374v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33374v0ar = [];
const smo33353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33353'] = smo33353;
smo33353.setAttribute('id', 'smo33353');
const smo33354 = new VF.Annotation('вей,');
smo33354.setAttribute('id', 'smo33354');
smo33354.setFont('Merriweather', 12.1, 'normal');
smo33354.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33353.addModifier(smo33354);
smo33354.addClass('lyric lyric-0');
smo33374v0ar.push(smo33353);
const smo33355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33355'] = smo33355;
smo33355.setAttribute('id', 'smo33355');
const smo33356 = new VF.Annotation('мой');
smo33356.setAttribute('id', 'smo33356');
smo33356.setFont('Merriweather', 12.1, 'normal');
smo33356.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33355.addModifier(smo33356);
smo33356.addClass('lyric lyric-0');
smo33374v0ar.push(smo33355);
const smo33357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33357'] = smo33357;
smo33357.setAttribute('id', 'smo33357');
const smo33358 = new VF.Annotation('-');
smo33358.setAttribute('id', 'smo33358');
smo33358.setFont('Merriweather', 12.1, 'normal');
smo33358.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33357.addModifier(smo33358);
smo33358.addClass('lyric lyric-0 lyric-hyphen');
smo33374v0ar.push(smo33357);
smo33374v0.addTickables(smo33374v0ar)
fmtsmo333749.joinVoices([smo33374v0]);
const fmtsmo344139 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo34413v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34413v0ar = [];
const smo34393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34393'] = smo34393;
smo34393.setAttribute('id', 'smo34393');
smo34413v0ar.push(smo34393);
const smo34394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34394'] = smo34394;
smo34394.setAttribute('id', 'smo34394');
smo34413v0ar.push(smo34394);
const smo34396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34396'] = smo34396;
smo34396.setAttribute('id', 'smo34396');
smo34413v0ar.push(smo34396);
const smo34397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34397'] = smo34397;
smo34397.setAttribute('id', 'smo34397');
smo34413v0ar.push(smo34397);
smo34413v0.addTickables(smo34413v0ar)
fmtsmo344139.joinVoices([smo34413v0]);
const fmtsmo354039 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo35403v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35403v0ar = [];
const smo35384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35384'] = smo35384;
smo35384.setAttribute('id', 'smo35384');
smo35403v0ar.push(smo35384);
const smo35385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35385'] = smo35385;
smo35385.setAttribute('id', 'smo35385');
smo35403v0ar.push(smo35385);
const smo35386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35386'] = smo35386;
smo35386.setAttribute('id', 'smo35386');
smo35403v0ar.push(smo35386);
const smo35387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35387'] = smo35387;
smo35387.setAttribute('id', 'smo35387');
smo35403v0ar.push(smo35387);
smo35403v0.addTickables(smo35403v0ar)
fmtsmo354039.joinVoices([smo35403v0]);
const fmtsmo363659 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo36365v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36365v0ar = [];
const smo36346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36346'] = smo36346;
smo36346.setAttribute('id', 'smo36346');
smo36365v0ar.push(smo36346);
const smo36347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36347'] = smo36347;
smo36347.setAttribute('id', 'smo36347');
smo36365v0ar.push(smo36347);
const smo36348 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36348'] = smo36348;
smo36348.setAttribute('id', 'smo36348');
smo36365v0ar.push(smo36348);
const smo36349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36349'] = smo36349;
smo36349.setAttribute('id', 'smo36349');
smo36365v0ar.push(smo36349);
smo36365v0.addTickables(smo36365v0ar)
fmtsmo363659.joinVoices([smo36365v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo333749.format([smo33374v0,smo34413v0,smo35403v0,smo36365v0], 191);
const stavesmo33374 = new VF.Stave(299, 598, 205);
stavesmo33374.setAttribute('id', 'stavesmo33374');
stavesmo33374.setBegBarType(VF.Barline.type.NONE);
stavesmo33374.setContext(context);
stavesmo33374.draw();
smo33374v0.draw(context, stavesmo33374);
const stavesmo34413 = new VF.Stave(299, 711, 205);
stavesmo34413.setAttribute('id', 'stavesmo34413');
stavesmo34413.setBegBarType(VF.Barline.type.NONE);
stavesmo34413.setContext(context);
stavesmo34413.draw();
smo34413v0.draw(context, stavesmo34413);
const stavesmo35403 = new VF.Stave(299, 794, 205);
stavesmo35403.setAttribute('id', 'stavesmo35403');
stavesmo35403.setBegBarType(VF.Barline.type.NONE);
stavesmo35403.setContext(context);
stavesmo35403.draw();
smo35403v0.draw(context, stavesmo35403);
const stavesmo36365 = new VF.Stave(299, 875, 205);
stavesmo36365.setAttribute('id', 'stavesmo36365');
stavesmo36365.setBegBarType(VF.Barline.type.NONE);
stavesmo36365.setContext(context);
stavesmo36365.draw();
smo36365v0.draw(context, stavesmo36365);
const fmtsmo3339610 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo33396v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33396v0ar = [];
const smo33375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33375'] = smo33375;
smo33375.setAttribute('id', 'smo33375');
const smo33376 = new VF.Annotation('Со');
smo33376.setAttribute('id', 'smo33376');
smo33376.setFont('Merriweather', 12.1, 'normal');
smo33376.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33375.addModifier(smo33376);
smo33376.addClass('lyric lyric-0 lyric-hyphen');
smo33396v0ar.push(smo33375);
const smo33377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33377'] = smo33377;
smo33377.setAttribute('id', 'smo33377');
const smo333770acc = new VF.Accidental('n');
smo33377.addModifier(smo333770acc, 0);
const smo33378 = new VF.Annotation('ло');
smo33378.setAttribute('id', 'smo33378');
smo33378.setFont('Merriweather', 12.1, 'normal');
smo33378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33377.addModifier(smo33378);
smo33378.addClass('lyric lyric-0 lyric-hyphen');
smo33396v0ar.push(smo33377);
const smo33379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo33379'] = smo33379;
smo33379.setAttribute('id', 'smo33379');
const smo333790acc = new VF.Accidental('#');
smo33379.addModifier(smo333790acc, 0);
smo33396v0ar.push(smo33379);
smo33396v0.addTickables(smo33396v0ar)
fmtsmo3339610.joinVoices([smo33396v0]);
const fmtsmo3443310 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo34433v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34433v0ar = [];
const smo34414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34414'] = smo34414;
smo34414.setAttribute('id', 'smo34414');
smo34433v0ar.push(smo34414);
const smo34415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34415'] = smo34415;
smo34415.setAttribute('id', 'smo34415');
smo34433v0ar.push(smo34415);
const smo34416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34416'] = smo34416;
smo34416.setAttribute('id', 'smo34416');
smo34433v0ar.push(smo34416);
const smo34417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34417'] = smo34417;
smo34417.setAttribute('id', 'smo34417');
smo34433v0ar.push(smo34417);
smo34433v0.addTickables(smo34433v0ar)
fmtsmo3443310.joinVoices([smo34433v0]);
const fmtsmo3542310 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo35423v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35423v0ar = [];
const smo35404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35404'] = smo35404;
smo35404.setAttribute('id', 'smo35404');
smo35423v0ar.push(smo35404);
const smo35405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35405'] = smo35405;
smo35405.setAttribute('id', 'smo35405');
smo35423v0ar.push(smo35405);
const smo35406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35406'] = smo35406;
smo35406.setAttribute('id', 'smo35406');
smo35423v0ar.push(smo35406);
const smo35407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35407'] = smo35407;
smo35407.setAttribute('id', 'smo35407');
smo35423v0ar.push(smo35407);
smo35423v0.addTickables(smo35423v0ar)
fmtsmo3542310.joinVoices([smo35423v0]);
const fmtsmo3638510 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo36385v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36385v0ar = [];
const smo36366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36366'] = smo36366;
smo36366.setAttribute('id', 'smo36366');
smo36385v0ar.push(smo36366);
const smo36367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36367'] = smo36367;
smo36367.setAttribute('id', 'smo36367');
smo36385v0ar.push(smo36367);
const smo36368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36368'] = smo36368;
smo36368.setAttribute('id', 'smo36368');
smo36385v0ar.push(smo36368);
const smo36369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36369'] = smo36369;
smo36369.setAttribute('id', 'smo36369');
smo36385v0ar.push(smo36369);
smo36385v0.addTickables(smo36385v0ar)
fmtsmo3638510.joinVoices([smo36385v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3339610.format([smo33396v0,smo34433v0,smo35423v0,smo36385v0], 154);
const stavesmo33396 = new VF.Stave(504, 598, 168);
stavesmo33396.setAttribute('id', 'stavesmo33396');
stavesmo33396.setBegBarType(VF.Barline.type.NONE);
stavesmo33396.setContext(context);
stavesmo33396.draw();
smo33396v0.draw(context, stavesmo33396);
const stavesmo34433 = new VF.Stave(504, 711, 168);
stavesmo34433.setAttribute('id', 'stavesmo34433');
stavesmo34433.setBegBarType(VF.Barline.type.NONE);
stavesmo34433.setContext(context);
stavesmo34433.draw();
smo34433v0.draw(context, stavesmo34433);
const stavesmo35423 = new VF.Stave(504, 794, 168);
stavesmo35423.setAttribute('id', 'stavesmo35423');
stavesmo35423.setBegBarType(VF.Barline.type.NONE);
stavesmo35423.setContext(context);
stavesmo35423.draw();
smo35423v0.draw(context, stavesmo35423);
const stavesmo36385 = new VF.Stave(504, 875, 168);
stavesmo36385.setAttribute('id', 'stavesmo36385');
stavesmo36385.setBegBarType(VF.Barline.type.NONE);
stavesmo36385.setContext(context);
stavesmo36385.draw();
smo36385v0.draw(context, stavesmo36385);
const fmtsmo3341511 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo33415v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33415v0ar = [];
const smo33397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33397'] = smo33397;
smo33397.setAttribute('id', 'smo33397');
const smo33398 = new VF.Annotation('вей');
smo33398.setAttribute('id', 'smo33398');
smo33398.setFont('Merriweather', 12.1, 'normal');
smo33398.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33397.addModifier(smo33398);
smo33398.addClass('lyric lyric-0');
smo33415v0ar.push(smo33397);
const smo33399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33399'] = smo33399;
smo33399.setAttribute('id', 'smo33399');
smo33415v0ar.push(smo33399);
smo33415v0.addTickables(smo33415v0ar)
fmtsmo3341511.joinVoices([smo33415v0]);
const fmtsmo3445311 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo34453v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34453v0ar = [];
const smo34434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34434'] = smo34434;
smo34434.setAttribute('id', 'smo34434');
smo34453v0ar.push(smo34434);
const smo34435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34435'] = smo34435;
smo34435.setAttribute('id', 'smo34435');
smo34453v0ar.push(smo34435);
const smo34436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34436'] = smo34436;
smo34436.setAttribute('id', 'smo34436');
smo34453v0ar.push(smo34436);
const smo34437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34437'] = smo34437;
smo34437.setAttribute('id', 'smo34437');
smo34453v0ar.push(smo34437);
smo34453v0.addTickables(smo34453v0ar)
fmtsmo3445311.joinVoices([smo34453v0]);
const fmtsmo3544311 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo35443v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35443v0ar = [];
const smo35424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35424'] = smo35424;
smo35424.setAttribute('id', 'smo35424');
smo35443v0ar.push(smo35424);
const smo35425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35425'] = smo35425;
smo35425.setAttribute('id', 'smo35425');
smo35443v0ar.push(smo35425);
const smo35426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35426'] = smo35426;
smo35426.setAttribute('id', 'smo35426');
smo35443v0ar.push(smo35426);
const smo35427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo35427'] = smo35427;
smo35427.setAttribute('id', 'smo35427');
smo35443v0ar.push(smo35427);
smo35443v0.addTickables(smo35443v0ar)
fmtsmo3544311.joinVoices([smo35443v0]);
const fmtsmo3640311 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo36403v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36403v0ar = [];
const smo36386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36386'] = smo36386;
smo36386.setAttribute('id', 'smo36386');
smo36403v0ar.push(smo36386);
const smo36387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36387'] = smo36387;
smo36387.setAttribute('id', 'smo36387');
smo36403v0ar.push(smo36387);
smo36403v0.addTickables(smo36403v0ar)
fmtsmo3640311.joinVoices([smo36403v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3341511.format([smo33415v0,smo34453v0,smo35443v0,smo36403v0], 147);
const stavesmo33415 = new VF.Stave(672, 598, 161);
stavesmo33415.setAttribute('id', 'stavesmo33415');
stavesmo33415.setBegBarType(VF.Barline.type.NONE);
stavesmo33415.setContext(context);
stavesmo33415.draw();
smo33415v0.draw(context, stavesmo33415);
const stavesmo34453 = new VF.Stave(672, 711, 161);
stavesmo34453.setAttribute('id', 'stavesmo34453');
stavesmo34453.setBegBarType(VF.Barline.type.NONE);
stavesmo34453.setContext(context);
stavesmo34453.draw();
smo34453v0.draw(context, stavesmo34453);
const stavesmo35443 = new VF.Stave(672, 794, 161);
stavesmo35443.setAttribute('id', 'stavesmo35443');
stavesmo35443.setBegBarType(VF.Barline.type.NONE);
stavesmo35443.setContext(context);
stavesmo35443.draw();
smo35443v0.draw(context, stavesmo35443);
const stavesmo36403 = new VF.Stave(672, 875, 161);
stavesmo36403.setAttribute('id', 'stavesmo36403');
stavesmo36403.setBegBarType(VF.Barline.type.NONE);
stavesmo36403.setContext(context);
stavesmo36403.draw();
smo36403v0.draw(context, stavesmo36403);
const fmtsmo3343712 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo33437v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33437v0ar = [];
const smo33416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33416'] = smo33416;
smo33416.setAttribute('id', 'smo33416');
const smo33417 = new VF.Annotation('го');
smo33417.setAttribute('id', 'smo33417');
smo33417.setFont('Merriweather', 12.1, 'normal');
smo33417.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33416.addModifier(smo33417);
smo33417.addClass('lyric lyric-0 lyric-hyphen');
smo33437v0ar.push(smo33416);
const smo33418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33418'] = smo33418;
smo33418.setAttribute('id', 'smo33418');
const smo33419 = new VF.Annotation('пo');
smo33419.setAttribute('id', 'smo33419');
smo33419.setFont('Merriweather', 12.1, 'normal');
smo33419.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33418.addModifier(smo33419);
smo33419.addClass('lyric lyric-0');
smo33437v0ar.push(smo33418);
const smo33420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33420'] = smo33420;
smo33420.setAttribute('id', 'smo33420');
const smo33421 = new VF.Annotation('-');
smo33421.setAttribute('id', 'smo33421');
smo33421.setFont('Merriweather', 12.1, 'normal');
smo33421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33420.addModifier(smo33421);
smo33421.addClass('lyric lyric-0 lyric-hyphen');
smo33437v0ar.push(smo33420);
smo33437v0.addTickables(smo33437v0ar)
fmtsmo3343712.joinVoices([smo33437v0]);
const fmtsmo3447312 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo34473v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34473v0ar = [];
const smo34454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34454'] = smo34454;
smo34454.setAttribute('id', 'smo34454');
smo34473v0ar.push(smo34454);
const smo34455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34455'] = smo34455;
smo34455.setAttribute('id', 'smo34455');
smo34473v0ar.push(smo34455);
const smo34456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34456'] = smo34456;
smo34456.setAttribute('id', 'smo34456');
smo34473v0ar.push(smo34456);
const smo34457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo34457'] = smo34457;
smo34457.setAttribute('id', 'smo34457');
smo34473v0ar.push(smo34457);
smo34473v0.addTickables(smo34473v0ar)
fmtsmo3447312.joinVoices([smo34473v0]);
const fmtsmo3546312 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo35463v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35463v0ar = [];
const smo35444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35444'] = smo35444;
smo35444.setAttribute('id', 'smo35444');
smo35463v0ar.push(smo35444);
const smo35445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35445'] = smo35445;
smo35445.setAttribute('id', 'smo35445');
smo35463v0ar.push(smo35445);
const smo35446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35446'] = smo35446;
smo35446.setAttribute('id', 'smo35446');
smo35463v0ar.push(smo35446);
const smo35447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35447'] = smo35447;
smo35447.setAttribute('id', 'smo35447');
smo35463v0ar.push(smo35447);
smo35463v0.addTickables(smo35463v0ar)
fmtsmo3546312.joinVoices([smo35463v0]);
const fmtsmo3642312 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo36423v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36423v0ar = [];
const smo36404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36404'] = smo36404;
smo36404.setAttribute('id', 'smo36404');
smo36423v0ar.push(smo36404);
const smo36405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36405'] = smo36405;
smo36405.setAttribute('id', 'smo36405');
smo36423v0ar.push(smo36405);
const smo36406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo36406'] = smo36406;
smo36406.setAttribute('id', 'smo36406');
smo36423v0ar.push(smo36406);
const smo36407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36407'] = smo36407;
smo36407.setAttribute('id', 'smo36407');
smo36423v0ar.push(smo36407);
smo36423v0.addTickables(smo36423v0ar)
fmtsmo3642312.joinVoices([smo36423v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3343712.format([smo33437v0,smo34473v0,smo35463v0,smo36423v0], 144);
const stavesmo33437 = new VF.Stave(833, 598, 158);
stavesmo33437.setAttribute('id', 'stavesmo33437');
stavesmo33437.setBegBarType(VF.Barline.type.NONE);
stavesmo33437.setContext(context);
stavesmo33437.draw();
smo33437v0.draw(context, stavesmo33437);
const stavesmo34473 = new VF.Stave(833, 711, 158);
stavesmo34473.setAttribute('id', 'stavesmo34473');
stavesmo34473.setBegBarType(VF.Barline.type.NONE);
stavesmo34473.setContext(context);
stavesmo34473.draw();
smo34473v0.draw(context, stavesmo34473);
const stavesmo35463 = new VF.Stave(833, 794, 158);
stavesmo35463.setAttribute('id', 'stavesmo35463');
stavesmo35463.setBegBarType(VF.Barline.type.NONE);
stavesmo35463.setContext(context);
stavesmo35463.draw();
smo35463v0.draw(context, stavesmo35463);
const stavesmo36423 = new VF.Stave(833, 875, 158);
stavesmo36423.setAttribute('id', 'stavesmo36423');
stavesmo36423.setBegBarType(VF.Barline.type.NONE);
stavesmo36423.setContext(context);
stavesmo36423.draw();
smo36423v0.draw(context, stavesmo36423);
const fmtsmo3345913 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo33459v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33459v0ar = [];
const smo33438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33438'] = smo33438;
smo33438.setAttribute('id', 'smo33438');
const smo33439 = new VF.Annotation('си');
smo33439.setAttribute('id', 'smo33439');
smo33439.setFont('Merriweather', 12.1, 'normal');
smo33439.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33438.addModifier(smo33439);
smo33439.addClass('lyric lyric-0');
smo33459v0ar.push(smo33438);
const smo33440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33440'] = smo33440;
smo33440.setAttribute('id', 'smo33440');
const smo33441 = new VF.Annotation('ст');
smo33441.setAttribute('id', 'smo33441');
smo33441.setFont('Merriweather', 12.1, 'normal');
smo33441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33440.addModifier(smo33441);
smo33441.addClass('lyric lyric-0 lyric-hyphen');
smo33459v0ar.push(smo33440);
const smo33442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33442'] = smo33442;
smo33442.setAttribute('id', 'smo33442');
const smo33443 = new VF.Annotation('ый');
smo33443.setAttribute('id', 'smo33443');
smo33443.setFont('Merriweather', 12.1, 'normal');
smo33443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33442.addModifier(smo33443);
smo33443.addClass('lyric lyric-0');
smo33459v0ar.push(smo33442);
smo33459v0.addTickables(smo33459v0ar)
fmtsmo3345913.joinVoices([smo33459v0]);
const fmtsmo3449313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo34493v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34493v0ar = [];
const smo34474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34474'] = smo34474;
smo34474.setAttribute('id', 'smo34474');
smo34493v0ar.push(smo34474);
const smo34475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34475'] = smo34475;
smo34475.setAttribute('id', 'smo34475');
smo34493v0ar.push(smo34475);
const smo34476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34476'] = smo34476;
smo34476.setAttribute('id', 'smo34476');
smo34493v0ar.push(smo34476);
const smo34477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo34477'] = smo34477;
smo34477.setAttribute('id', 'smo34477');
smo34493v0ar.push(smo34477);
smo34493v0.addTickables(smo34493v0ar)
fmtsmo3449313.joinVoices([smo34493v0]);
const fmtsmo3548313 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo35483v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35483v0ar = [];
const smo35464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35464'] = smo35464;
smo35464.setAttribute('id', 'smo35464');
smo35483v0ar.push(smo35464);
const smo35465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35465'] = smo35465;
smo35465.setAttribute('id', 'smo35465');
smo35483v0ar.push(smo35465);
const smo35466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35466'] = smo35466;
smo35466.setAttribute('id', 'smo35466');
smo35483v0ar.push(smo35466);
const smo35467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35467'] = smo35467;
smo35467.setAttribute('id', 'smo35467');
smo35483v0ar.push(smo35467);
smo35483v0.addTickables(smo35483v0ar)
fmtsmo3548313.joinVoices([smo35483v0]);
const fmtsmo3644113 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo36441v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36441v0ar = [];
const smo36424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36424'] = smo36424;
smo36424.setAttribute('id', 'smo36424');
smo36441v0ar.push(smo36424);
const smo36425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
noteHash['smo36425'] = smo36425;
smo36425.setAttribute('id', 'smo36425');
smo36441v0ar.push(smo36425);
smo36441v0.addTickables(smo36441v0ar)
fmtsmo3644113.joinVoices([smo36441v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3345913.format([smo33459v0,smo34493v0,smo35483v0,smo36441v0], 184);
const stavesmo33459 = new VF.Stave(991, 598, 198);
stavesmo33459.setAttribute('id', 'stavesmo33459');
stavesmo33459.setBegBarType(VF.Barline.type.NONE);
stavesmo33459.setContext(context);
stavesmo33459.draw();
smo33459v0.draw(context, stavesmo33459);
const stavesmo34493 = new VF.Stave(991, 711, 198);
stavesmo34493.setAttribute('id', 'stavesmo34493');
stavesmo34493.setBegBarType(VF.Barline.type.NONE);
stavesmo34493.setContext(context);
stavesmo34493.draw();
smo34493v0.draw(context, stavesmo34493);
const stavesmo35483 = new VF.Stave(991, 794, 198);
stavesmo35483.setAttribute('id', 'stavesmo35483');
stavesmo35483.setBegBarType(VF.Barline.type.NONE);
stavesmo35483.setContext(context);
stavesmo35483.draw();
smo35483v0.draw(context, stavesmo35483);
const stavesmo36441 = new VF.Stave(991, 875, 198);
stavesmo36441.setAttribute('id', 'stavesmo36441');
stavesmo36441.setBegBarType(VF.Barline.type.NONE);
stavesmo36441.setContext(context);
stavesmo36441.draw();
smo36441v0.draw(context, stavesmo36441);
const fmtsmo3348514 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo33485v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33485v0ar = [];
const smo33460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33460'] = smo33460;
smo33460.setAttribute('id', 'smo33460');
const smo33461 = new VF.Annotation('co');
smo33461.setAttribute('id', 'smo33461');
smo33461.setFont('Merriweather', 12.1, 'normal');
smo33461.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33460.addModifier(smo33461);
smo33461.addClass('lyric lyric-0');
smo33485v0ar.push(smo33460);
const smo33462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33462'] = smo33462;
smo33462.setAttribute('id', 'smo33462');
const smo33463 = new VF.Annotation('-');
smo33463.setAttribute('id', 'smo33463');
smo33463.setFont('Merriweather', 12.1, 'normal');
smo33463.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33462.addModifier(smo33463);
smo33463.addClass('lyric lyric-0 lyric-hyphen');
smo33485v0ar.push(smo33462);
const smo33464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo33464'] = smo33464;
smo33464.setAttribute('id', 'smo33464');
const smo33465 = new VF.Annotation('-');
smo33465.setAttribute('id', 'smo33465');
smo33465.setFont('Merriweather', 12.1, 'normal');
smo33465.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33464.addModifier(smo33465);
smo33465.addClass('lyric lyric-0 lyric-hyphen');
smo33485v0ar.push(smo33464);
const smo33466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33466'] = smo33466;
smo33466.setAttribute('id', 'smo33466');
const smo33467 = new VF.Annotation('по');
smo33467.setAttribute('id', 'smo33467');
smo33467.setFont('Merriweather', 12.1, 'normal');
smo33467.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33466.addModifier(smo33467);
smo33467.addClass('lyric lyric-0');
smo33485v0ar.push(smo33466);
const smo33468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33468'] = smo33468;
smo33468.setAttribute('id', 'smo33468');
const smo33469 = new VF.Annotation('-');
smo33469.setAttribute('id', 'smo33469');
smo33469.setFont('Merriweather', 12.1, 'normal');
smo33469.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33468.addModifier(smo33469);
smo33469.addClass('lyric lyric-0 lyric-hyphen');
smo33485v0ar.push(smo33468);
smo33485v0.addTickables(smo33485v0ar)
fmtsmo3348514.joinVoices([smo33485v0]);
const fmtsmo3451314 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo34513v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34513v0ar = [];
const smo34494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34494'] = smo34494;
smo34494.setAttribute('id', 'smo34494');
smo34513v0ar.push(smo34494);
const smo34495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34495'] = smo34495;
smo34495.setAttribute('id', 'smo34495');
smo34513v0ar.push(smo34495);
const smo34496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34496'] = smo34496;
smo34496.setAttribute('id', 'smo34496');
smo34513v0ar.push(smo34496);
const smo34497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo34497'] = smo34497;
smo34497.setAttribute('id', 'smo34497');
smo34513v0ar.push(smo34497);
smo34513v0.addTickables(smo34513v0ar)
fmtsmo3451314.joinVoices([smo34513v0]);
const fmtsmo3550314 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo35503v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35503v0ar = [];
const smo35484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35484'] = smo35484;
smo35484.setAttribute('id', 'smo35484');
smo35503v0ar.push(smo35484);
const smo35485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo35485'] = smo35485;
smo35485.setAttribute('id', 'smo35485');
smo35503v0ar.push(smo35485);
const smo35486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35486'] = smo35486;
smo35486.setAttribute('id', 'smo35486');
smo35503v0ar.push(smo35486);
const smo35487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo35487'] = smo35487;
smo35487.setAttribute('id', 'smo35487');
smo35503v0ar.push(smo35487);
smo35503v0.addTickables(smo35503v0ar)
fmtsmo3550314.joinVoices([smo35503v0]);
const fmtsmo3646114 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo36461v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36461v0ar = [];
const smo36442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36442'] = smo36442;
smo36442.setAttribute('id', 'smo36442');
smo36461v0ar.push(smo36442);
const smo36443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36443'] = smo36443;
smo36443.setAttribute('id', 'smo36443');
smo36461v0ar.push(smo36443);
const smo36444 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo36444'] = smo36444;
smo36444.setAttribute('id', 'smo36444');
smo36461v0ar.push(smo36444);
const smo36445 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36445'] = smo36445;
smo36445.setAttribute('id', 'smo36445');
smo36461v0ar.push(smo36445);
smo36461v0.addTickables(smo36461v0ar)
fmtsmo3646114.joinVoices([smo36461v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43513 = smo33462.getStemDirection();
smo33462.setStemDirection(dirsmo43513);
smo33464.setStemDirection(dirsmo43513);
const smo43513 = new VF.Beam([smo33462,smo33464]);
 
// formatting measures in staff group smo37130
fmtsmo3348514.format([smo33485v0,smo34513v0,smo35503v0,smo36461v0], 169);
const stavesmo33485 = new VF.Stave(1189, 598, 183);
stavesmo33485.setAttribute('id', 'stavesmo33485');
stavesmo33485.setBegBarType(VF.Barline.type.NONE);
stavesmo33485.setContext(context);
stavesmo33485.draw();
smo33485v0.draw(context, stavesmo33485);
smo43513.setContext(context);
smo43513.draw();
const stavesmo34513 = new VF.Stave(1189, 711, 183);
stavesmo34513.setAttribute('id', 'stavesmo34513');
stavesmo34513.setBegBarType(VF.Barline.type.NONE);
stavesmo34513.setContext(context);
stavesmo34513.draw();
smo34513v0.draw(context, stavesmo34513);
const stavesmo35503 = new VF.Stave(1189, 794, 183);
stavesmo35503.setAttribute('id', 'stavesmo35503');
stavesmo35503.setBegBarType(VF.Barline.type.NONE);
stavesmo35503.setContext(context);
stavesmo35503.draw();
smo35503v0.draw(context, stavesmo35503);
const stavesmo36461 = new VF.Stave(1189, 875, 183);
stavesmo36461.setAttribute('id', 'stavesmo36461');
stavesmo36461.setBegBarType(VF.Barline.type.NONE);
stavesmo36461.setContext(context);
stavesmo36461.draw();
smo36461v0.draw(context, stavesmo36461);
const rightsmo37130stavesmo334853 = new VF.StaveConnector(stavesmo33485, stavesmo36461).setType(0);
rightsmo37130stavesmo334853.setContext(context).draw();
const fmtsmo3350415 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo33504v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33504v0ar = [];
const smo33486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo33486'] = smo33486;
smo33486.setAttribute('id', 'smo33486');
smo33486.addModifier(new VF.Dot(), 0);
const smo33487 = new VF.Annotation('вей');
smo33487.setAttribute('id', 'smo33487');
smo33487.setFont('Merriweather', 12.1, 'normal');
smo33487.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33486.addModifier(smo33487);
smo33487.addClass('lyric lyric-0');
smo33504v0ar.push(smo33486);
const smo33488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33488'] = smo33488;
smo33488.setAttribute('id', 'smo33488');
smo33504v0ar.push(smo33488);
smo33504v0.addTickables(smo33504v0ar)
fmtsmo3350415.joinVoices([smo33504v0]);
const fmtsmo3453315 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo34533v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34533v0ar = [];
const smo34514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34514'] = smo34514;
smo34514.setAttribute('id', 'smo34514');
smo34533v0ar.push(smo34514);
const smo34515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo34515'] = smo34515;
smo34515.setAttribute('id', 'smo34515');
smo34533v0ar.push(smo34515);
const smo34516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo34516'] = smo34516;
smo34516.setAttribute('id', 'smo34516');
smo34533v0ar.push(smo34516);
const smo34517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34517'] = smo34517;
smo34517.setAttribute('id', 'smo34517');
smo34533v0ar.push(smo34517);
smo34533v0.addTickables(smo34533v0ar)
fmtsmo3453315.joinVoices([smo34533v0]);
const fmtsmo3552315 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo35523v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35523v0ar = [];
const smo35504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35504'] = smo35504;
smo35504.setAttribute('id', 'smo35504');
smo35523v0ar.push(smo35504);
const smo35505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35505'] = smo35505;
smo35505.setAttribute('id', 'smo35505');
smo35523v0ar.push(smo35505);
const smo35506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35506'] = smo35506;
smo35506.setAttribute('id', 'smo35506');
smo35523v0ar.push(smo35506);
const smo35507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35507'] = smo35507;
smo35507.setAttribute('id', 'smo35507');
smo35523v0ar.push(smo35507);
smo35523v0.addTickables(smo35523v0ar)
fmtsmo3552315.joinVoices([smo35523v0]);
const fmtsmo3647915 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo36479v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36479v0ar = [];
const smo36462 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36462'] = smo36462;
smo36462.setAttribute('id', 'smo36462');
smo36462.addModifier(new VF.Dot(), 0);
smo36479v0ar.push(smo36462);
const smo36463 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36463'] = smo36463;
smo36463.setAttribute('id', 'smo36463');
smo36479v0ar.push(smo36463);
smo36479v0.addTickables(smo36479v0ar)
fmtsmo3647915.joinVoices([smo36479v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3350415.format([smo33504v0,smo34533v0,smo35523v0,smo36479v0], 226);
const stavesmo33504 = new VF.Stave(55, 1005, 300);
stavesmo33504.setAttribute('id', 'stavesmo33504');
stavesmo33504.setBegBarType(1);
stavesmo33504.addClef('treble');
const keysmo33504 = new VF.KeySignature('F');
keysmo33504.addToStave(stavesmo33504);
stavesmo33504.setContext(context);
stavesmo33504.draw();
smo33504v0.draw(context, stavesmo33504);
const stavesmo34533 = new VF.Stave(55, 1120, 300);
stavesmo34533.setAttribute('id', 'stavesmo34533');
stavesmo34533.setBegBarType(1);
stavesmo34533.addClef('treble');
const keysmo34533 = new VF.KeySignature('F');
keysmo34533.addToStave(stavesmo34533);
stavesmo34533.setContext(context);
stavesmo34533.draw();
smo34533v0.draw(context, stavesmo34533);
const stavesmo35523 = new VF.Stave(55, 1215, 300);
stavesmo35523.setAttribute('id', 'stavesmo35523');
stavesmo35523.setBegBarType(1);
stavesmo35523.addClef('treble');
const keysmo35523 = new VF.KeySignature('F');
keysmo35523.addToStave(stavesmo35523);
stavesmo35523.setContext(context);
stavesmo35523.draw();
smo35523v0.draw(context, stavesmo35523);
const stavesmo36479 = new VF.Stave(55, 1293, 300);
stavesmo36479.setAttribute('id', 'stavesmo36479');
stavesmo36479.setBegBarType(1);
stavesmo36479.addClef('bass');
const keysmo36479 = new VF.KeySignature('F');
keysmo36479.addToStave(stavesmo36479);
stavesmo36479.setContext(context);
stavesmo36479.draw();
smo36479v0.draw(context, stavesmo36479);
const leftsmo37130stavesmo335043 = new VF.StaveConnector(stavesmo33504, stavesmo36479).setType(1);
leftsmo37130stavesmo335043.setContext(context).draw();
const fmtsmo3352616 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo33526v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33526v0ar = [];
const smo33505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33505'] = smo33505;
smo33505.setAttribute('id', 'smo33505');
const smo33506 = new VF.Annotation('Tы');
smo33506.setAttribute('id', 'smo33506');
smo33506.setFont('Merriweather', 12.1, 'normal');
smo33506.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33505.addModifier(smo33506);
smo33506.addClass('lyric lyric-0');
smo33526v0ar.push(smo33505);
const smo33507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33507'] = smo33507;
smo33507.setAttribute('id', 'smo33507');
const smo335070acc = new VF.Accidental('n');
smo33507.addModifier(smo335070acc, 0);
const smo33508 = new VF.Annotation('ку');
smo33508.setAttribute('id', 'smo33508');
smo33508.setFont('Merriweather', 12.1, 'normal');
smo33508.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33507.addModifier(smo33508);
smo33508.addClass('lyric lyric-0');
smo33526v0ar.push(smo33507);
const smo33509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo33509'] = smo33509;
smo33509.setAttribute('id', 'smo33509');
const smo335090acc = new VF.Accidental('#');
smo33509.addModifier(smo335090acc, 0);
const smo33510 = new VF.Annotation('-');
smo33510.setAttribute('id', 'smo33510');
smo33510.setFont('Merriweather', 12.1, 'normal');
smo33510.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33509.addModifier(smo33510);
smo33510.addClass('lyric lyric-0 lyric-hyphen');
smo33526v0ar.push(smo33509);
smo33526v0.addTickables(smo33526v0ar)
fmtsmo3352616.joinVoices([smo33526v0]);
const fmtsmo3455316 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo34553v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34553v0ar = [];
const smo34534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34534'] = smo34534;
smo34534.setAttribute('id', 'smo34534');
smo34553v0ar.push(smo34534);
const smo34535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34535'] = smo34535;
smo34535.setAttribute('id', 'smo34535');
smo34553v0ar.push(smo34535);
const smo34536 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34536'] = smo34536;
smo34536.setAttribute('id', 'smo34536');
smo34553v0ar.push(smo34536);
const smo34537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34537'] = smo34537;
smo34537.setAttribute('id', 'smo34537');
smo34553v0ar.push(smo34537);
smo34553v0.addTickables(smo34553v0ar)
fmtsmo3455316.joinVoices([smo34553v0]);
const fmtsmo3554316 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo35543v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35543v0ar = [];
const smo35524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35524'] = smo35524;
smo35524.setAttribute('id', 'smo35524');
smo35543v0ar.push(smo35524);
const smo35525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo35525'] = smo35525;
smo35525.setAttribute('id', 'smo35525');
const smo355250acc = new VF.Accidental('#');
smo35525.addModifier(smo355250acc, 0);
smo35543v0ar.push(smo35525);
const smo35526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35526'] = smo35526;
smo35526.setAttribute('id', 'smo35526');
smo35543v0ar.push(smo35526);
const smo35527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35527'] = smo35527;
smo35527.setAttribute('id', 'smo35527');
smo35543v0ar.push(smo35527);
smo35543v0.addTickables(smo35543v0ar)
fmtsmo3554316.joinVoices([smo35543v0]);
const fmtsmo3649716 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo36497v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36497v0ar = [];
const smo36480 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36480'] = smo36480;
smo36480.setAttribute('id', 'smo36480');
smo36497v0ar.push(smo36480);
const smo36481 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36481'] = smo36481;
smo36481.setAttribute('id', 'smo36481');
smo36497v0ar.push(smo36481);
smo36497v0.addTickables(smo36497v0ar)
fmtsmo3649716.joinVoices([smo36497v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3352616.format([smo33526v0,smo34553v0,smo35543v0,smo36497v0], 258);
const stavesmo33526 = new VF.Stave(355, 1005, 272);
stavesmo33526.setAttribute('id', 'stavesmo33526');
stavesmo33526.setBegBarType(VF.Barline.type.NONE);
stavesmo33526.setContext(context);
stavesmo33526.draw();
smo33526v0.draw(context, stavesmo33526);
const stavesmo34553 = new VF.Stave(355, 1120, 272);
stavesmo34553.setAttribute('id', 'stavesmo34553');
stavesmo34553.setBegBarType(VF.Barline.type.NONE);
stavesmo34553.setContext(context);
stavesmo34553.draw();
smo34553v0.draw(context, stavesmo34553);
const stavesmo35543 = new VF.Stave(355, 1215, 272);
stavesmo35543.setAttribute('id', 'stavesmo35543');
stavesmo35543.setBegBarType(VF.Barline.type.NONE);
stavesmo35543.setContext(context);
stavesmo35543.draw();
smo35543v0.draw(context, stavesmo35543);
const stavesmo36497 = new VF.Stave(355, 1293, 272);
stavesmo36497.setAttribute('id', 'stavesmo36497');
stavesmo36497.setBegBarType(VF.Barline.type.NONE);
stavesmo36497.setContext(context);
stavesmo36497.draw();
smo36497v0.draw(context, stavesmo36497);
const fmtsmo3354817 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo33548v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33548v0ar = [];
const smo33527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33527'] = smo33527;
smo33527.setAttribute('id', 'smo33527');
const smo33528 = new VF.Annotation('дa,');
smo33528.setAttribute('id', 'smo33528');
smo33528.setFont('Merriweather', 12.1, 'normal');
smo33528.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33527.addModifier(smo33528);
smo33528.addClass('lyric lyric-0');
smo33548v0ar.push(smo33527);
const smo33529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33529'] = smo33529;
smo33529.setAttribute('id', 'smo33529');
const smo33530 = new VF.Annotation('ку');
smo33530.setAttribute('id', 'smo33530');
smo33530.setFont('Merriweather', 12.1, 'normal');
smo33530.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33529.addModifier(smo33530);
smo33530.addClass('lyric lyric-0');
smo33548v0ar.push(smo33529);
const smo33531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33531'] = smo33531;
smo33531.setAttribute('id', 'smo33531');
const smo33532 = new VF.Annotation('-');
smo33532.setAttribute('id', 'smo33532');
smo33532.setFont('Merriweather', 12.1, 'normal');
smo33532.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33531.addModifier(smo33532);
smo33532.addClass('lyric lyric-0 lyric-hyphen');
smo33548v0ar.push(smo33531);
smo33548v0.addTickables(smo33548v0ar)
fmtsmo3354817.joinVoices([smo33548v0]);
const fmtsmo3457317 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo34573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34573v0ar = [];
const smo34554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34554'] = smo34554;
smo34554.setAttribute('id', 'smo34554');
smo34573v0ar.push(smo34554);
const smo34555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34555'] = smo34555;
smo34555.setAttribute('id', 'smo34555');
smo34573v0ar.push(smo34555);
const smo34556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo34556'] = smo34556;
smo34556.setAttribute('id', 'smo34556');
smo34573v0ar.push(smo34556);
const smo34557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo34557'] = smo34557;
smo34557.setAttribute('id', 'smo34557');
smo34573v0ar.push(smo34557);
smo34573v0.addTickables(smo34573v0ar)
fmtsmo3457317.joinVoices([smo34573v0]);
const fmtsmo3556317 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo35563v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35563v0ar = [];
const smo35544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35544'] = smo35544;
smo35544.setAttribute('id', 'smo35544');
smo35563v0ar.push(smo35544);
const smo35545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo35545'] = smo35545;
smo35545.setAttribute('id', 'smo35545');
smo35563v0ar.push(smo35545);
const smo35546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo35546'] = smo35546;
smo35546.setAttribute('id', 'smo35546');
smo35563v0ar.push(smo35546);
const smo35547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo35547'] = smo35547;
smo35547.setAttribute('id', 'smo35547');
smo35563v0ar.push(smo35547);
smo35563v0.addTickables(smo35563v0ar)
fmtsmo3556317.joinVoices([smo35563v0]);
const fmtsmo3651617 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo36516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36516v0ar = [];
const smo36498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36498'] = smo36498;
smo36498.setAttribute('id', 'smo36498');
smo36516v0ar.push(smo36498);
const smo36499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36499'] = smo36499;
smo36499.setAttribute('id', 'smo36499');
smo36516v0ar.push(smo36499);
const smo36500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36500'] = smo36500;
smo36500.setAttribute('id', 'smo36500');
smo36516v0ar.push(smo36500);
smo36516v0.addTickables(smo36516v0ar)
fmtsmo3651617.joinVoices([smo36516v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3354817.format([smo33548v0,smo34573v0,smo35563v0,smo36516v0], 234);
const stavesmo33548 = new VF.Stave(627, 1005, 248);
stavesmo33548.setAttribute('id', 'stavesmo33548');
stavesmo33548.setBegBarType(VF.Barline.type.NONE);
stavesmo33548.setContext(context);
stavesmo33548.draw();
smo33548v0.draw(context, stavesmo33548);
const stavesmo34573 = new VF.Stave(627, 1120, 248);
stavesmo34573.setAttribute('id', 'stavesmo34573');
stavesmo34573.setBegBarType(VF.Barline.type.NONE);
stavesmo34573.setContext(context);
stavesmo34573.draw();
smo34573v0.draw(context, stavesmo34573);
const stavesmo35563 = new VF.Stave(627, 1215, 248);
stavesmo35563.setAttribute('id', 'stavesmo35563');
stavesmo35563.setBegBarType(VF.Barline.type.NONE);
stavesmo35563.setContext(context);
stavesmo35563.draw();
smo35563v0.draw(context, stavesmo35563);
const stavesmo36516 = new VF.Stave(627, 1293, 248);
stavesmo36516.setAttribute('id', 'stavesmo36516');
stavesmo36516.setBegBarType(VF.Barline.type.NONE);
stavesmo36516.setContext(context);
stavesmo36516.draw();
smo36516v0.draw(context, stavesmo36516);
const fmtsmo3357018 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo33570v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33570v0ar = [];
const smo33549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo33549'] = smo33549;
smo33549.setAttribute('id', 'smo33549');
const smo33550 = new VF.Annotation('да');
smo33550.setAttribute('id', 'smo33550');
smo33550.setFont('Merriweather', 12.1, 'normal');
smo33550.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33549.addModifier(smo33550);
smo33550.addClass('lyric lyric-0');
smo33570v0ar.push(smo33549);
const smo33551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33551'] = smo33551;
smo33551.setAttribute('id', 'smo33551');
smo33570v0ar.push(smo33551);
const smo33552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33552'] = smo33552;
smo33552.setAttribute('id', 'smo33552');
const smo33553 = new VF.Annotation('ле');
smo33553.setAttribute('id', 'smo33553');
smo33553.setFont('Merriweather', 12.1, 'normal');
smo33553.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33552.addModifier(smo33553);
smo33553.addClass('lyric lyric-0 lyric-hyphen');
smo33570v0ar.push(smo33552);
const smo33554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33554'] = smo33554;
smo33554.setAttribute('id', 'smo33554');
smo33570v0ar.push(smo33554);
smo33570v0.addTickables(smo33570v0ar)
fmtsmo3357018.joinVoices([smo33570v0]);
const fmtsmo3459318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo34593v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34593v0ar = [];
const smo34574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34574'] = smo34574;
smo34574.setAttribute('id', 'smo34574');
smo34593v0ar.push(smo34574);
const smo34575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34575'] = smo34575;
smo34575.setAttribute('id', 'smo34575');
smo34593v0ar.push(smo34575);
const smo34576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34576'] = smo34576;
smo34576.setAttribute('id', 'smo34576');
smo34593v0ar.push(smo34576);
const smo34577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34577'] = smo34577;
smo34577.setAttribute('id', 'smo34577');
smo34593v0ar.push(smo34577);
smo34593v0.addTickables(smo34593v0ar)
fmtsmo3459318.joinVoices([smo34593v0]);
const fmtsmo3558318 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo35583v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35583v0ar = [];
const smo35564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35564'] = smo35564;
smo35564.setAttribute('id', 'smo35564');
smo35583v0ar.push(smo35564);
const smo35565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35565'] = smo35565;
smo35565.setAttribute('id', 'smo35565');
smo35583v0ar.push(smo35565);
const smo35566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35566'] = smo35566;
smo35566.setAttribute('id', 'smo35566');
smo35583v0ar.push(smo35566);
const smo35567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35567'] = smo35567;
smo35567.setAttribute('id', 'smo35567');
smo35583v0ar.push(smo35567);
smo35583v0.addTickables(smo35583v0ar)
fmtsmo3558318.joinVoices([smo35583v0]);
const fmtsmo3653418 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo36534v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36534v0ar = [];
const smo36517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo36517'] = smo36517;
smo36517.setAttribute('id', 'smo36517');
smo36534v0ar.push(smo36517);
const smo36518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
noteHash['smo36518'] = smo36518;
smo36518.setAttribute('id', 'smo36518');
smo36534v0ar.push(smo36518);
smo36534v0.addTickables(smo36534v0ar)
fmtsmo3653418.joinVoices([smo36534v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3357018.format([smo33570v0,smo34593v0,smo35583v0,smo36534v0], 228);
const stavesmo33570 = new VF.Stave(875, 1005, 242);
stavesmo33570.setAttribute('id', 'stavesmo33570');
stavesmo33570.setBegBarType(VF.Barline.type.NONE);
stavesmo33570.setContext(context);
stavesmo33570.draw();
smo33570v0.draw(context, stavesmo33570);
const stavesmo34593 = new VF.Stave(875, 1120, 242);
stavesmo34593.setAttribute('id', 'stavesmo34593');
stavesmo34593.setBegBarType(VF.Barline.type.NONE);
stavesmo34593.setContext(context);
stavesmo34593.draw();
smo34593v0.draw(context, stavesmo34593);
const stavesmo35583 = new VF.Stave(875, 1215, 242);
stavesmo35583.setAttribute('id', 'stavesmo35583');
stavesmo35583.setBegBarType(VF.Barline.type.NONE);
stavesmo35583.setContext(context);
stavesmo35583.draw();
smo35583v0.draw(context, stavesmo35583);
const stavesmo36534 = new VF.Stave(875, 1293, 242);
stavesmo36534.setAttribute('id', 'stavesmo36534');
stavesmo36534.setBegBarType(VF.Barline.type.NONE);
stavesmo36534.setContext(context);
stavesmo36534.draw();
smo36534v0.draw(context, stavesmo36534);
const fmtsmo3359119 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo33591v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33591v0ar = [];
const smo33571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33571'] = smo33571;
smo33571.setAttribute('id', 'smo33571');
const smo33572 = new VF.Annotation('тишь,');
smo33572.setAttribute('id', 'smo33572');
smo33572.setFont('Merriweather', 12.1, 'normal');
smo33572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33571.addModifier(smo33572);
smo33572.addClass('lyric lyric-0');
smo33591v0ar.push(smo33571);
const smo33573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33573'] = smo33573;
smo33573.setAttribute('id', 'smo33573');
const smo33574 = new VF.Annotation('-');
smo33574.setAttribute('id', 'smo33574');
smo33574.setFont('Merriweather', 12.1, 'normal');
smo33574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33573.addModifier(smo33574);
smo33574.addClass('lyric lyric-0 lyric-hyphen');
smo33591v0ar.push(smo33573);
const smo33575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33575'] = smo33575;
smo33575.setAttribute('id', 'smo33575');
smo33591v0ar.push(smo33575);
smo33591v0.addTickables(smo33591v0ar)
fmtsmo3359119.joinVoices([smo33591v0]);
const fmtsmo3461319 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo34613v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34613v0ar = [];
const smo34594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34594'] = smo34594;
smo34594.setAttribute('id', 'smo34594');
smo34613v0ar.push(smo34594);
const smo34595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo34595'] = smo34595;
smo34595.setAttribute('id', 'smo34595');
smo34613v0ar.push(smo34595);
const smo34596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34596'] = smo34596;
smo34596.setAttribute('id', 'smo34596');
smo34613v0ar.push(smo34596);
const smo34597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo34597'] = smo34597;
smo34597.setAttribute('id', 'smo34597');
smo34613v0ar.push(smo34597);
smo34613v0.addTickables(smo34613v0ar)
fmtsmo3461319.joinVoices([smo34613v0]);
const fmtsmo3560319 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo35603v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35603v0ar = [];
const smo35584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35584'] = smo35584;
smo35584.setAttribute('id', 'smo35584');
smo35603v0ar.push(smo35584);
const smo35585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo35585'] = smo35585;
smo35585.setAttribute('id', 'smo35585');
smo35603v0ar.push(smo35585);
const smo35586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo35586'] = smo35586;
smo35586.setAttribute('id', 'smo35586');
smo35603v0ar.push(smo35586);
const smo35587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo35587'] = smo35587;
smo35587.setAttribute('id', 'smo35587');
smo35603v0ar.push(smo35587);
smo35603v0.addTickables(smo35603v0ar)
fmtsmo3560319.joinVoices([smo35603v0]);
const fmtsmo3655319 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo36553v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36553v0ar = [];
const smo36535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36535'] = smo36535;
smo36535.setAttribute('id', 'smo36535');
smo36553v0ar.push(smo36535);
const smo36536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36536'] = smo36536;
smo36536.setAttribute('id', 'smo36536');
smo36553v0ar.push(smo36536);
const smo36537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
noteHash['smo36537'] = smo36537;
smo36537.setAttribute('id', 'smo36537');
smo36553v0ar.push(smo36537);
smo36553v0.addTickables(smo36553v0ar)
fmtsmo3655319.joinVoices([smo36553v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3359119.format([smo33591v0,smo34613v0,smo35603v0,smo36553v0], 245);
const stavesmo33591 = new VF.Stave(1117, 1005, 259);
stavesmo33591.setAttribute('id', 'stavesmo33591');
stavesmo33591.setBegBarType(VF.Barline.type.NONE);
stavesmo33591.setContext(context);
stavesmo33591.draw();
smo33591v0.draw(context, stavesmo33591);
const stavesmo34613 = new VF.Stave(1117, 1120, 259);
stavesmo34613.setAttribute('id', 'stavesmo34613');
stavesmo34613.setBegBarType(VF.Barline.type.NONE);
stavesmo34613.setContext(context);
stavesmo34613.draw();
smo34613v0.draw(context, stavesmo34613);
const stavesmo35603 = new VF.Stave(1117, 1215, 259);
stavesmo35603.setAttribute('id', 'stavesmo35603');
stavesmo35603.setBegBarType(VF.Barline.type.NONE);
stavesmo35603.setContext(context);
stavesmo35603.draw();
smo35603v0.draw(context, stavesmo35603);
const stavesmo36553 = new VF.Stave(1117, 1293, 259);
stavesmo36553.setAttribute('id', 'stavesmo36553');
stavesmo36553.setBegBarType(VF.Barline.type.NONE);
stavesmo36553.setContext(context);
stavesmo36553.draw();
smo36553v0.draw(context, stavesmo36553);
const rightsmo37130stavesmo335913 = new VF.StaveConnector(stavesmo33591, stavesmo36553).setType(0);
rightsmo37130stavesmo335913.setContext(context).draw();
const fmtsmo3361620 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo33616v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33616v0ar = [];
const smo33592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33592'] = smo33592;
smo33592.setAttribute('id', 'smo33592');
const smo335920acc = new VF.Accidental('n');
smo33592.addModifier(smo335920acc, 0);
smo33592.addModifier(new VF.Dot(), 0);
const smo33593 = new VF.Annotation('где');
smo33593.setAttribute('id', 'smo33593');
smo33593.setFont('Merriweather', 12.1, 'normal');
smo33593.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33592.addModifier(smo33593);
smo33593.addClass('lyric lyric-0');
smo33616v0ar.push(smo33592);
const smo33594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33594'] = smo33594;
smo33594.setAttribute('id', 'smo33594');
const smo33595 = new VF.Annotation('-');
smo33595.setAttribute('id', 'smo33595');
smo33595.setFont('Merriweather', 12.1, 'normal');
smo33595.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33594.addModifier(smo33595);
smo33595.addClass('lyric lyric-0 lyric-hyphen');
smo33616v0ar.push(smo33594);
const smo33596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33596'] = smo33596;
smo33596.setAttribute('id', 'smo33596');
smo33616v0ar.push(smo33596);
const smo33597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo33597'] = smo33597;
smo33597.setAttribute('id', 'smo33597');
const smo33598 = new VF.Annotation('вс');
smo33598.setAttribute('id', 'smo33598');
smo33598.setFont('Merriweather', 12.1, 'normal');
smo33598.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33597.addModifier(smo33598);
smo33598.addClass('lyric lyric-0 lyric-hyphen');
smo33616v0ar.push(smo33597);
const smo33599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33599'] = smo33599;
smo33599.setAttribute('id', 'smo33599');
const smo33600 = new VF.Annotation('ю');
smo33600.setAttribute('id', 'smo33600');
smo33600.setFont('Merriweather', 12.1, 'normal');
smo33600.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33599.addModifier(smo33600);
smo33600.addClass('lyric lyric-0');
smo33616v0ar.push(smo33599);
smo33616v0.addTickables(smo33616v0ar)
fmtsmo3361620.joinVoices([smo33616v0]);
const fmtsmo3463320 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo34633v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34633v0ar = [];
const smo34614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34614'] = smo34614;
smo34614.setAttribute('id', 'smo34614');
smo34633v0ar.push(smo34614);
const smo34615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo34615'] = smo34615;
smo34615.setAttribute('id', 'smo34615');
smo34633v0ar.push(smo34615);
const smo34616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34616'] = smo34616;
smo34616.setAttribute('id', 'smo34616');
smo34633v0ar.push(smo34616);
const smo34617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo34617'] = smo34617;
smo34617.setAttribute('id', 'smo34617');
const smo346170acc = new VF.Accidental('#');
smo34617.addModifier(smo346170acc, 0);
smo34633v0ar.push(smo34617);
smo34633v0.addTickables(smo34633v0ar)
fmtsmo3463320.joinVoices([smo34633v0]);
const fmtsmo3562320 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo35623v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35623v0ar = [];
const smo35604 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35604'] = smo35604;
smo35604.setAttribute('id', 'smo35604');
smo35623v0ar.push(smo35604);
const smo35605 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35605'] = smo35605;
smo35605.setAttribute('id', 'smo35605');
smo35623v0ar.push(smo35605);
const smo35606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35606'] = smo35606;
smo35606.setAttribute('id', 'smo35606');
smo35623v0ar.push(smo35606);
const smo35607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo35607'] = smo35607;
smo35607.setAttribute('id', 'smo35607');
smo35623v0ar.push(smo35607);
smo35623v0.addTickables(smo35623v0ar)
fmtsmo3562320.joinVoices([smo35623v0]);
const fmtsmo3657320 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo36573v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36573v0ar = [];
const smo36554 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36554'] = smo36554;
smo36554.setAttribute('id', 'smo36554');
smo36573v0ar.push(smo36554);
const smo36555 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36555'] = smo36555;
smo36555.setAttribute('id', 'smo36555');
smo36573v0ar.push(smo36555);
const smo36556 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
noteHash['smo36556'] = smo36556;
smo36556.setAttribute('id', 'smo36556');
smo36573v0ar.push(smo36556);
const smo36557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36557'] = smo36557;
smo36557.setAttribute('id', 'smo36557');
smo36573v0ar.push(smo36557);
smo36573v0.addTickables(smo36573v0ar)
fmtsmo3657320.joinVoices([smo36573v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43579 = smo33594.getStemDirection();
smo33594.setStemDirection(dirsmo43579);
smo33596.setStemDirection(dirsmo43579);
const smo43579 = new VF.Beam([smo33594,smo33596]);
 
// formatting measures in staff group smo37130
fmtsmo3361620.format([smo33616v0,smo34633v0,smo35623v0,smo36573v0], 219);
const stavesmo33616 = new VF.Stave(55, 1423, 294);
stavesmo33616.setAttribute('id', 'stavesmo33616');
stavesmo33616.setBegBarType(1);
stavesmo33616.addClef('treble');
const keysmo33616 = new VF.KeySignature('F');
keysmo33616.addToStave(stavesmo33616);
stavesmo33616.setContext(context);
stavesmo33616.draw();
smo33616v0.draw(context, stavesmo33616);
smo43579.setContext(context);
smo43579.draw();
const stavesmo34633 = new VF.Stave(55, 1534, 294);
stavesmo34633.setAttribute('id', 'stavesmo34633');
stavesmo34633.setBegBarType(1);
stavesmo34633.addClef('treble');
const keysmo34633 = new VF.KeySignature('F');
keysmo34633.addToStave(stavesmo34633);
stavesmo34633.setContext(context);
stavesmo34633.draw();
smo34633v0.draw(context, stavesmo34633);
const stavesmo35623 = new VF.Stave(55, 1617, 294);
stavesmo35623.setAttribute('id', 'stavesmo35623');
stavesmo35623.setBegBarType(1);
stavesmo35623.addClef('treble');
const keysmo35623 = new VF.KeySignature('F');
keysmo35623.addToStave(stavesmo35623);
stavesmo35623.setContext(context);
stavesmo35623.draw();
smo35623v0.draw(context, stavesmo35623);
const stavesmo36573 = new VF.Stave(55, 1711, 294);
stavesmo36573.setAttribute('id', 'stavesmo36573');
stavesmo36573.setBegBarType(1);
stavesmo36573.addClef('bass');
const keysmo36573 = new VF.KeySignature('F');
keysmo36573.addToStave(stavesmo36573);
stavesmo36573.setContext(context);
stavesmo36573.draw();
smo36573v0.draw(context, stavesmo36573);
const leftsmo37130stavesmo336163 = new VF.StaveConnector(stavesmo33616, stavesmo36573).setType(1);
leftsmo37130stavesmo336163.setContext(context).draw();
const fmtsmo3363821 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo33638v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33638v0ar = [];
const smo33617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33617'] = smo33617;
smo33617.setAttribute('id', 'smo33617');
const smo33618 = new VF.Annotation('ноч');
smo33618.setAttribute('id', 'smo33618');
smo33618.setFont('Merriweather', 12.1, 'normal');
smo33618.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33617.addModifier(smo33618);
smo33618.addClass('lyric lyric-0 lyric-hyphen');
smo33638v0ar.push(smo33617);
const smo33619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33619'] = smo33619;
smo33619.setAttribute('id', 'smo33619');
const smo33620 = new VF.Annotation('ку');
smo33620.setAttribute('id', 'smo33620');
smo33620.setFont('Merriweather', 12.1, 'normal');
smo33620.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33619.addModifier(smo33620);
smo33620.addClass('lyric lyric-0');
smo33638v0ar.push(smo33619);
const smo33621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33621'] = smo33621;
smo33621.setAttribute('id', 'smo33621');
const smo33622 = new VF.Annotation('про');
smo33622.setAttribute('id', 'smo33622');
smo33622.setFont('Merriweather', 12.1, 'normal');
smo33622.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33621.addModifier(smo33622);
smo33622.addClass('lyric lyric-0');
smo33638v0ar.push(smo33621);
smo33638v0.addTickables(smo33638v0ar)
fmtsmo3363821.joinVoices([smo33638v0]);
const fmtsmo3465321 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo34653v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34653v0ar = [];
const smo34634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34634'] = smo34634;
smo34634.setAttribute('id', 'smo34634');
smo34653v0ar.push(smo34634);
const smo34635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34635'] = smo34635;
smo34635.setAttribute('id', 'smo34635');
smo34653v0ar.push(smo34635);
const smo34636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34636'] = smo34636;
smo34636.setAttribute('id', 'smo34636');
smo34653v0ar.push(smo34636);
const smo34637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34637'] = smo34637;
smo34637.setAttribute('id', 'smo34637');
smo34653v0ar.push(smo34637);
smo34653v0.addTickables(smo34653v0ar)
fmtsmo3465321.joinVoices([smo34653v0]);
const fmtsmo3564321 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo35643v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35643v0ar = [];
const smo35624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35624'] = smo35624;
smo35624.setAttribute('id', 'smo35624');
smo35643v0ar.push(smo35624);
const smo35625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo35625'] = smo35625;
smo35625.setAttribute('id', 'smo35625');
smo35643v0ar.push(smo35625);
const smo35626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35626'] = smo35626;
smo35626.setAttribute('id', 'smo35626');
smo35643v0ar.push(smo35626);
const smo35627 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo35627'] = smo35627;
smo35627.setAttribute('id', 'smo35627');
smo35643v0ar.push(smo35627);
smo35643v0.addTickables(smo35643v0ar)
fmtsmo3564321.joinVoices([smo35643v0]);
const fmtsmo3659321 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo36593v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36593v0ar = [];
const smo36574 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36574'] = smo36574;
smo36574.setAttribute('id', 'smo36574');
smo36593v0ar.push(smo36574);
const smo36575 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36575'] = smo36575;
smo36575.setAttribute('id', 'smo36575');
smo36593v0ar.push(smo36575);
const smo36576 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
noteHash['smo36576'] = smo36576;
smo36576.setAttribute('id', 'smo36576');
smo36593v0ar.push(smo36576);
const smo36577 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36577'] = smo36577;
smo36577.setAttribute('id', 'smo36577');
smo36593v0ar.push(smo36577);
smo36593v0.addTickables(smo36593v0ar)
fmtsmo3659321.joinVoices([smo36593v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3363821.format([smo33638v0,smo34653v0,smo35643v0,smo36593v0], 198);
const stavesmo33638 = new VF.Stave(349, 1423, 212);
stavesmo33638.setAttribute('id', 'stavesmo33638');
stavesmo33638.setBegBarType(VF.Barline.type.NONE);
stavesmo33638.setContext(context);
stavesmo33638.draw();
smo33638v0.draw(context, stavesmo33638);
const stavesmo34653 = new VF.Stave(349, 1534, 212);
stavesmo34653.setAttribute('id', 'stavesmo34653');
stavesmo34653.setBegBarType(VF.Barline.type.NONE);
stavesmo34653.setContext(context);
stavesmo34653.draw();
smo34653v0.draw(context, stavesmo34653);
const stavesmo35643 = new VF.Stave(349, 1617, 212);
stavesmo35643.setAttribute('id', 'stavesmo35643');
stavesmo35643.setBegBarType(VF.Barline.type.NONE);
stavesmo35643.setContext(context);
stavesmo35643.draw();
smo35643v0.draw(context, stavesmo35643);
const stavesmo36593 = new VF.Stave(349, 1711, 212);
stavesmo36593.setAttribute('id', 'stavesmo36593');
stavesmo36593.setBegBarType(VF.Barline.type.NONE);
stavesmo36593.setContext(context);
stavesmo36593.draw();
smo36593v0.draw(context, stavesmo36593);
const fmtsmo3366822 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo33668v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33668v0ar = [];
const smo33639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33639'] = smo33639;
smo33639.setAttribute('id', 'smo33639');
const smo33640 = new VF.Annotation('-');
smo33640.setAttribute('id', 'smo33640');
smo33640.setFont('Merriweather', 12.1, 'normal');
smo33640.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33639.addModifier(smo33640);
smo33640.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33639);
const smo33641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo33641'] = smo33641;
smo33641.setAttribute('id', 'smo33641');
const smo33642 = new VF.Annotation('-');
smo33642.setAttribute('id', 'smo33642');
smo33642.setFont('Merriweather', 12.1, 'normal');
smo33642.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33641.addModifier(smo33642);
smo33642.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33641);
const smo33643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33643'] = smo33643;
smo33643.setAttribute('id', 'smo33643');
const smo33644 = new VF.Annotation('-');
smo33644.setAttribute('id', 'smo33644');
smo33644.setFont('Merriweather', 12.1, 'normal');
smo33644.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33643.addModifier(smo33644);
smo33644.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33643);
const smo33645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo33645'] = smo33645;
smo33645.setAttribute('id', 'smo33645');
const smo336450acc = new VF.Accidental('#');
smo33645.addModifier(smo336450acc, 0);
const smo33646 = new VF.Annotation('-');
smo33646.setAttribute('id', 'smo33646');
smo33646.setFont('Merriweather', 12.1, 'normal');
smo33646.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33645.addModifier(smo33646);
smo33646.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33645);
const smo33647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33647'] = smo33647;
smo33647.setAttribute('id', 'smo33647');
const smo33648 = new VF.Annotation('-');
smo33648.setAttribute('id', 'smo33648');
smo33648.setFont('Merriweather', 12.1, 'normal');
smo33648.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33647.addModifier(smo33648);
smo33648.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33647);
const smo33649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
noteHash['smo33649'] = smo33649;
smo33649.setAttribute('id', 'smo33649');
const smo336490acc = new VF.Accidental('n');
smo33649.addModifier(smo336490acc, 0);
const smo33650 = new VF.Annotation('-');
smo33650.setAttribute('id', 'smo33650');
smo33650.setFont('Merriweather', 12.1, 'normal');
smo33650.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33649.addModifier(smo33650);
smo33650.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33649);
const smo33651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo33651'] = smo33651;
smo33651.setAttribute('id', 'smo33651');
const smo336510acc = new VF.Accidental('#');
smo33651.addModifier(smo336510acc, 0);
const smo33652 = new VF.Annotation('по');
smo33652.setAttribute('id', 'smo33652');
smo33652.setFont('Merriweather', 12.1, 'normal');
smo33652.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33651.addModifier(smo33652);
smo33652.addClass('lyric lyric-0 lyric-hyphen');
smo33668v0ar.push(smo33651);
smo33668v0.addTickables(smo33668v0ar)
fmtsmo3366822.joinVoices([smo33668v0]);
const fmtsmo3467122 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo34671v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34671v0ar = [];
const smo34654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34654'] = smo34654;
smo34654.setAttribute('id', 'smo34654');
smo34671v0ar.push(smo34654);
const smo34655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo34655'] = smo34655;
smo34655.setAttribute('id', 'smo34655');
const smo346550acc = new VF.Accidental('#');
smo34655.addModifier(smo346550acc, 0);
smo34655.addModifier(new VF.Dot(), 0);
smo34671v0ar.push(smo34655);
smo34671v0.addTickables(smo34671v0ar)
fmtsmo3467122.joinVoices([smo34671v0]);
const fmtsmo3566122 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo35661v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35661v0ar = [];
const smo35644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35644'] = smo35644;
smo35644.setAttribute('id', 'smo35644');
smo35661v0ar.push(smo35644);
const smo35645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35645'] = smo35645;
smo35645.setAttribute('id', 'smo35645');
smo35645.addModifier(new VF.Dot(), 0);
smo35661v0ar.push(smo35645);
smo35661v0.addTickables(smo35661v0ar)
fmtsmo3566122.joinVoices([smo35661v0]);
const fmtsmo3661022 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo36610v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36610v0ar = [];
const smo36594 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36594'] = smo36594;
smo36594.setAttribute('id', 'smo36594');
smo36610v0ar.push(smo36594);
smo36610v0.addTickables(smo36610v0ar)
fmtsmo3661022.joinVoices([smo36610v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43596 = smo33641.getStemDirection();
smo33641.setStemDirection(dirsmo43596);
smo33643.setStemDirection(dirsmo43596);
smo33645.setStemDirection(dirsmo43596);
smo33647.setStemDirection(dirsmo43596);
const smo43596 = new VF.Beam([smo33641,smo33643,smo33645,smo33647]);
 
// formatting measures in staff group smo37130
fmtsmo3366822.format([smo33668v0,smo34671v0,smo35661v0,smo36610v0], 255);
const stavesmo33668 = new VF.Stave(561, 1423, 269);
stavesmo33668.setAttribute('id', 'stavesmo33668');
stavesmo33668.setBegBarType(VF.Barline.type.NONE);
stavesmo33668.setContext(context);
stavesmo33668.draw();
smo33668v0.draw(context, stavesmo33668);
smo43596.setContext(context);
smo43596.draw();
const stavesmo34671 = new VF.Stave(561, 1534, 269);
stavesmo34671.setAttribute('id', 'stavesmo34671');
stavesmo34671.setBegBarType(VF.Barline.type.NONE);
stavesmo34671.setContext(context);
stavesmo34671.draw();
smo34671v0.draw(context, stavesmo34671);
const stavesmo35661 = new VF.Stave(561, 1617, 269);
stavesmo35661.setAttribute('id', 'stavesmo35661');
stavesmo35661.setBegBarType(VF.Barline.type.NONE);
stavesmo35661.setContext(context);
stavesmo35661.draw();
smo35661v0.draw(context, stavesmo35661);
const stavesmo36610 = new VF.Stave(561, 1711, 269);
stavesmo36610.setAttribute('id', 'stavesmo36610');
stavesmo36610.setBegBarType(VF.Barline.type.NONE);
stavesmo36610.setContext(context);
stavesmo36610.draw();
smo36610v0.draw(context, stavesmo36610);
const fmtsmo3368723 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo33687v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33687v0ar = [];
const smo33669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33669'] = smo33669;
smo33669.setAttribute('id', 'smo33669');
smo33669.addModifier(new VF.Dot(), 0);
const smo33670 = new VF.Annotation('ешь');
smo33670.setAttribute('id', 'smo33670');
smo33670.setFont('Merriweather', 12.1, 'normal');
smo33670.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33669.addModifier(smo33670);
smo33670.addClass('lyric lyric-0');
smo33687v0ar.push(smo33669);
const smo33671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo33671'] = smo33671;
smo33671.setAttribute('id', 'smo33671');
smo33687v0ar.push(smo33671);
smo33687v0.addTickables(smo33687v0ar)
fmtsmo3368723.joinVoices([smo33687v0]);
const fmtsmo3468923 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo34689v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34689v0ar = [];
const smo34672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34672'] = smo34672;
smo34672.setAttribute('id', 'smo34672');
smo34672.addModifier(new VF.Dot(), 0);
smo34689v0ar.push(smo34672);
const smo34673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34673'] = smo34673;
smo34673.setAttribute('id', 'smo34673');
smo34689v0ar.push(smo34673);
smo34689v0.addTickables(smo34689v0ar)
fmtsmo3468923.joinVoices([smo34689v0]);
const fmtsmo3567923 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo35679v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35679v0ar = [];
const smo35662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo35662'] = smo35662;
smo35662.setAttribute('id', 'smo35662');
smo35662.addModifier(new VF.Dot(), 0);
smo35679v0ar.push(smo35662);
const smo35663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo35663'] = smo35663;
smo35663.setAttribute('id', 'smo35663');
smo35679v0ar.push(smo35663);
smo35679v0.addTickables(smo35679v0ar)
fmtsmo3567923.joinVoices([smo35679v0]);
const fmtsmo3662823 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo36628v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36628v0ar = [];
const smo36611 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36611'] = smo36611;
smo36611.setAttribute('id', 'smo36611');
smo36611.addModifier(new VF.Dot(), 0);
smo36628v0ar.push(smo36611);
const smo36612 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36612'] = smo36612;
smo36612.setAttribute('id', 'smo36612');
smo36628v0ar.push(smo36612);
smo36628v0.addTickables(smo36628v0ar)
fmtsmo3662823.joinVoices([smo36628v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3368723.format([smo33687v0,smo34689v0,smo35679v0,smo36628v0], 88);
const stavesmo33687 = new VF.Stave(830, 1423, 102);
stavesmo33687.setAttribute('id', 'stavesmo33687');
stavesmo33687.setBegBarType(VF.Barline.type.NONE);
stavesmo33687.setContext(context);
stavesmo33687.draw();
smo33687v0.draw(context, stavesmo33687);
const stavesmo34689 = new VF.Stave(830, 1534, 102);
stavesmo34689.setAttribute('id', 'stavesmo34689');
stavesmo34689.setBegBarType(VF.Barline.type.NONE);
stavesmo34689.setContext(context);
stavesmo34689.draw();
smo34689v0.draw(context, stavesmo34689);
const stavesmo35679 = new VF.Stave(830, 1617, 102);
stavesmo35679.setAttribute('id', 'stavesmo35679');
stavesmo35679.setBegBarType(VF.Barline.type.NONE);
stavesmo35679.setContext(context);
stavesmo35679.draw();
smo35679v0.draw(context, stavesmo35679);
const stavesmo36628 = new VF.Stave(830, 1711, 102);
stavesmo36628.setAttribute('id', 'stavesmo36628');
stavesmo36628.setBegBarType(VF.Barline.type.NONE);
stavesmo36628.setContext(context);
stavesmo36628.draw();
smo36628v0.draw(context, stavesmo36628);
const fmtsmo3371724 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo33717v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33717v0ar = [];
const smo33688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33688'] = smo33688;
smo33688.setAttribute('id', 'smo33688');
const smo33689 = new VF.Annotation('Со');
smo33689.setAttribute('id', 'smo33689');
smo33689.setFont('Merriweather', 12.1, 'normal');
smo33689.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33688.addModifier(smo33689);
smo33689.addClass('lyric lyric-0');
smo33717v0ar.push(smo33688);
const smo33690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33690'] = smo33690;
smo33690.setAttribute('id', 'smo33690');
const smo33691 = new VF.Annotation('-');
smo33691.setAttribute('id', 'smo33691');
smo33691.setFont('Merriweather', 12.1, 'normal');
smo33691.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33690.addModifier(smo33691);
smo33691.addClass('lyric lyric-0 lyric-hyphen');
smo33717v0ar.push(smo33690);
const smo33692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33692'] = smo33692;
smo33692.setAttribute('id', 'smo33692');
const smo33693 = new VF.Annotation('-');
smo33693.setAttribute('id', 'smo33693');
smo33693.setFont('Merriweather', 12.1, 'normal');
smo33693.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33692.addModifier(smo33693);
smo33693.addClass('lyric lyric-0 lyric-hyphen');
smo33717v0ar.push(smo33692);
const smo33694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["d#/5/n"]}'))
noteHash['smo33694'] = smo33694;
smo33694.setAttribute('id', 'smo33694');
const smo336940acc = new VF.Accidental('#');
smo33694.addModifier(smo336940acc, 0);
const smo33695 = new VF.Annotation('-');
smo33695.setAttribute('id', 'smo33695');
smo33695.setFont('Merriweather', 12.1, 'normal');
smo33695.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33694.addModifier(smo33695);
smo33695.addClass('lyric lyric-0 lyric-hyphen');
smo33717v0ar.push(smo33694);
const smo33696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33696'] = smo33696;
smo33696.setAttribute('id', 'smo33696');
const smo33697 = new VF.Annotation('-');
smo33697.setAttribute('id', 'smo33697');
smo33697.setFont('Merriweather', 12.1, 'normal');
smo33697.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33696.addModifier(smo33697);
smo33697.addClass('lyric lyric-0 lyric-hyphen');
smo33717v0ar.push(smo33696);
const smo33698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo33698'] = smo33698;
smo33698.setAttribute('id', 'smo33698');
const smo33699 = new VF.Annotation('лo');
smo33699.setAttribute('id', 'smo33699');
smo33699.setFont('Merriweather', 12.1, 'normal');
smo33699.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33698.addModifier(smo33699);
smo33699.addClass('lyric lyric-0');
smo33717v0ar.push(smo33698);
const smo33700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo33700'] = smo33700;
smo33700.setAttribute('id', 'smo33700');
const smo33701 = new VF.Annotation('-');
smo33701.setAttribute('id', 'smo33701');
smo33701.setFont('Merriweather', 12.1, 'normal');
smo33701.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33700.addModifier(smo33701);
smo33701.addClass('lyric lyric-0 lyric-hyphen');
smo33717v0ar.push(smo33700);
smo33717v0.addTickables(smo33717v0ar)
fmtsmo3371724.joinVoices([smo33717v0]);
const fmtsmo3471024 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo34710v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34710v0ar = [];
const smo34690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34690'] = smo34690;
smo34690.setAttribute('id', 'smo34690');
smo34710v0ar.push(smo34690);
const smo34691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34691'] = smo34691;
smo34691.setAttribute('id', 'smo34691');
const smo34692 = new VF.Ornament('mordent_inverted');
smo34691.addModifier(smo34692, 0);
smo34710v0ar.push(smo34691);
const smo34693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["c#/5/n"]}'))
noteHash['smo34693'] = smo34693;
smo34693.setAttribute('id', 'smo34693');
const smo346930acc = new VF.Accidental('#');
smo34693.addModifier(smo346930acc, 0);
smo34710v0ar.push(smo34693);
const smo34694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34694'] = smo34694;
smo34694.setAttribute('id', 'smo34694');
smo34710v0ar.push(smo34694);
smo34710v0.addTickables(smo34710v0ar)
fmtsmo3471024.joinVoices([smo34710v0]);
const fmtsmo3569624 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo35696v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35696v0ar = [];
const smo35680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35680'] = smo35680;
smo35680.setAttribute('id', 'smo35680');
smo35696v0ar.push(smo35680);
smo35696v0.addTickables(smo35696v0ar)
fmtsmo3569624.joinVoices([smo35696v0]);
const fmtsmo3664824 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo36648v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36648v0ar = [];
const smo36629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36629'] = smo36629;
smo36629.setAttribute('id', 'smo36629');
smo36648v0ar.push(smo36629);
const smo36630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36630'] = smo36630;
smo36630.setAttribute('id', 'smo36630');
smo36648v0ar.push(smo36630);
const smo36631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo36631'] = smo36631;
smo36631.setAttribute('id', 'smo36631');
smo36648v0ar.push(smo36631);
const smo36632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36632'] = smo36632;
smo36632.setAttribute('id', 'smo36632');
smo36648v0ar.push(smo36632);
smo36648v0.addTickables(smo36648v0ar)
fmtsmo3664824.joinVoices([smo36648v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
const dirsmo43613 = smo33690.getStemDirection();
smo33690.setStemDirection(dirsmo43613);
smo33692.setStemDirection(dirsmo43613);
smo33694.setStemDirection(dirsmo43613);
smo33696.setStemDirection(dirsmo43613);
const smo43613 = new VF.Beam([smo33690,smo33692,smo33694,smo33696]);
 
// formatting measures in staff group smo37130
fmtsmo3371724.format([smo33717v0,smo34710v0,smo35696v0,smo36648v0], 237);
const stavesmo33717 = new VF.Stave(932, 1423, 251);
stavesmo33717.setAttribute('id', 'stavesmo33717');
stavesmo33717.setBegBarType(VF.Barline.type.NONE);
stavesmo33717.setContext(context);
stavesmo33717.draw();
smo33717v0.draw(context, stavesmo33717);
smo43613.setContext(context);
smo43613.draw();
const stavesmo34710 = new VF.Stave(932, 1534, 251);
stavesmo34710.setAttribute('id', 'stavesmo34710');
stavesmo34710.setBegBarType(VF.Barline.type.NONE);
stavesmo34710.setContext(context);
stavesmo34710.draw();
smo34710v0.draw(context, stavesmo34710);
const stavesmo35696 = new VF.Stave(932, 1617, 251);
stavesmo35696.setAttribute('id', 'stavesmo35696');
stavesmo35696.setBegBarType(VF.Barline.type.NONE);
stavesmo35696.setContext(context);
stavesmo35696.draw();
smo35696v0.draw(context, stavesmo35696);
const stavesmo36648 = new VF.Stave(932, 1711, 251);
stavesmo36648.setAttribute('id', 'stavesmo36648');
stavesmo36648.setBegBarType(VF.Barline.type.NONE);
stavesmo36648.setContext(context);
stavesmo36648.draw();
smo36648v0.draw(context, stavesmo36648);
const fmtsmo3373725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo33737v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo33737v0ar = [];
const smo33718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo33718'] = smo33718;
smo33718.setAttribute('id', 'smo33718');
const smo33719 = new VF.Annotation('вей');
smo33719.setAttribute('id', 'smo33719');
smo33719.setFont('Merriweather', 12.1, 'normal');
smo33719.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33718.addModifier(smo33719);
smo33719.addClass('lyric lyric-0');
smo33737v0ar.push(smo33718);
const smo33720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo33720'] = smo33720;
smo33720.setAttribute('id', 'smo33720');
const smo33721 = new VF.Annotation('мой');
smo33721.setAttribute('id', 'smo33721');
smo33721.setFont('Merriweather', 12.1, 'normal');
smo33721.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo33720.addModifier(smo33721);
smo33721.addClass('lyric lyric-0');
smo33737v0ar.push(smo33720);
smo33737v0.addTickables(smo33737v0ar)
fmtsmo3373725.joinVoices([smo33737v0]);
const fmtsmo3473125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo34731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo34731v0ar = [];
const smo34711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo34711'] = smo34711;
smo34711.setAttribute('id', 'smo34711');
smo34731v0ar.push(smo34711);
const smo34712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34712'] = smo34712;
smo34712.setAttribute('id', 'smo34712');
const smo34713 = new VF.Ornament('mordent_inverted');
smo34712.addModifier(smo34713, 0);
smo34731v0ar.push(smo34712);
const smo34714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo34714'] = smo34714;
smo34714.setAttribute('id', 'smo34714');
smo34731v0ar.push(smo34714);
const smo34715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo34715'] = smo34715;
smo34715.setAttribute('id', 'smo34715');
smo34731v0ar.push(smo34715);
smo34731v0.addTickables(smo34731v0ar)
fmtsmo3473125.joinVoices([smo34731v0]);
const fmtsmo3571325 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo35713v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo35713v0ar = [];
const smo35697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo35697'] = smo35697;
smo35697.setAttribute('id', 'smo35697');
smo35713v0ar.push(smo35697);
smo35713v0.addTickables(smo35713v0ar)
fmtsmo3571325.joinVoices([smo35713v0]);
const fmtsmo3666625 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo36666v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo36666v0ar = [];
const smo36649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
noteHash['smo36649'] = smo36649;
smo36649.setAttribute('id', 'smo36649');
smo36666v0ar.push(smo36649);
const smo36650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
noteHash['smo36650'] = smo36650;
smo36650.setAttribute('id', 'smo36650');
smo36666v0ar.push(smo36650);
smo36666v0.addTickables(smo36666v0ar)
fmtsmo3666625.joinVoices([smo36666v0]);
// create beam groups and tuplets for format grp smo37130 before formatting
 
// formatting measures in staff group smo37130
fmtsmo3373725.format([smo33737v0,smo34731v0,smo35713v0,smo36666v0], 177);
const stavesmo33737 = new VF.Stave(1183, 1423, 191);
stavesmo33737.setAttribute('id', 'stavesmo33737');
stavesmo33737.setBegBarType(VF.Barline.type.NONE);
stavesmo33737.setContext(context);
stavesmo33737.draw();
smo33737v0.draw(context, stavesmo33737);
const stavesmo34731 = new VF.Stave(1183, 1534, 191);
stavesmo34731.setAttribute('id', 'stavesmo34731');
stavesmo34731.setBegBarType(VF.Barline.type.NONE);
stavesmo34731.setContext(context);
stavesmo34731.draw();
smo34731v0.draw(context, stavesmo34731);
const stavesmo35713 = new VF.Stave(1183, 1617, 191);
stavesmo35713.setAttribute('id', 'stavesmo35713');
stavesmo35713.setBegBarType(VF.Barline.type.NONE);
stavesmo35713.setContext(context);
stavesmo35713.draw();
smo35713v0.draw(context, stavesmo35713);
const stavesmo36666 = new VF.Stave(1183, 1711, 191);
stavesmo36666.setAttribute('id', 'stavesmo36666');
stavesmo36666.setBegBarType(VF.Barline.type.NONE);
stavesmo36666.setContext(context);
stavesmo36666.draw();
smo36666v0.draw(context, stavesmo36666);
const rightsmo37130stavesmo337373 = new VF.StaveConnector(stavesmo33737, stavesmo36666).setType(0);
rightsmo37130stavesmo337373.setContext(context).draw();
const smo34207 = new VF.Curve(smo33549, smo33551, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"position_end":1}'));
smo34207.setContext(context).draw();
const smo34209 = new VF.TextBracket({ start: smo33639, stop: smo33669, text: 'ritard', position: 1 });
smo34209.setLine(1).setContext(context).draw();
const smo36121 = new VF.StaveTie({ first_note: smo35680, last_note: smo35697, first_indices: [0], last_indices: [0]});
smo36121.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo33334').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33336').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33354').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33356').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33358').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33376').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33398').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33417').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33419').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33421').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33439').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33441').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33443').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33461').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33463').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33465').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33467').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33469').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33487').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33506').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33510').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33528').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33530').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33532').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33550').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33553').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33572').setAttributeNS('', 'transform', 'translate(0 6)');
context.svg.getElementById('vf-smo33574').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33593').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33595').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33598').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33600').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33618').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33620').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33622').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33640').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33642').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33644').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33648').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo33650').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo33652').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo33670').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33689').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33691').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33693').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33695').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33697').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33699').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33701').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo33719').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo33721').setAttributeNS('', 'transform', 'translate(0 15)');
}
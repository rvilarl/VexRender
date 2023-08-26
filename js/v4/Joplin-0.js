// @@ The Entertainer p 1/2  by Scott Joplin
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
const fmtsmo1102250 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo110225v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110225v0ar = [];
const smo110197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo110197.setAttribute('id', 'smo110197');
smo110225v0ar.push(smo110197);
const smo110199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo110199.setAttribute('id', 'smo110199');
smo110225v0ar.push(smo110199);
const smo110200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo110200.setAttribute('id', 'smo110200');
smo110225v0ar.push(smo110200);
const smo110201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo110201.setAttribute('id', 'smo110201');
smo110225v0ar.push(smo110201);
const smo110202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo110202.setAttribute('id', 'smo110202');
smo110225v0ar.push(smo110202);
const smo110203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo110203.setAttribute('id', 'smo110203');
smo110225v0ar.push(smo110203);
const smo110204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo110204.setAttribute('id', 'smo110204');
smo110225v0ar.push(smo110204);
smo110225v0.addTickables(smo110225v0ar)
fmtsmo1102250.joinVoices([smo110225v0]);
const smo110225v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110225v1ar = [];
const smo110205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110205.setAttribute('id', 'smo110205');
smo110205.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110205);
const smo110206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110206.setAttribute('id', 'smo110206');
smo110206.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110206);
const smo110207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110207.setAttribute('id', 'smo110207');
smo110207.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110207);
const smo110208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110208.setAttribute('id', 'smo110208');
smo110208.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110208);
const smo110209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110209.setAttribute('id', 'smo110209');
smo110209.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110209);
const smo110210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo110210.setAttribute('id', 'smo110210');
smo110210.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110210);
const smo110211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110211.setAttribute('id', 'smo110211');
smo110211.setStyle({ fillStyle: "#115511" });
smo110225v1ar.push(smo110211);
smo110225v1.addTickables(smo110225v1ar)
fmtsmo1102250.joinVoices([smo110225v1]);
const fmtsmo1131020 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo113102v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113102v0ar = [];
const smo113088 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo113088.setAttribute('id', 'smo113088');
smo113102v0ar.push(smo113088);
smo113102v0.addTickables(smo113102v0ar)
fmtsmo1131020.joinVoices([smo113102v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115123 = smo110197.getStemDirection();
smo110197.setStemDirection(dirsmo115123);
smo110199.setStemDirection(dirsmo115123);
smo110200.setStemDirection(dirsmo115123);
smo110201.setStemDirection(dirsmo115123);
const smo115123 = new VF.Beam([smo110197,smo110199,smo110200,smo110201]);
const dirsmo115124 = smo110202.getStemDirection();
smo110202.setStemDirection(dirsmo115124);
smo110203.setStemDirection(dirsmo115124);
smo110204.setStemDirection(dirsmo115124);
const smo115124 = new VF.Beam([smo110202,smo110203,smo110204]);
const dirsmo115125 = smo110205.getStemDirection();
smo110205.setStemDirection(dirsmo115125);
smo110206.setStemDirection(dirsmo115125);
smo110207.setStemDirection(dirsmo115125);
smo110208.setStemDirection(dirsmo115125);
const smo115125 = new VF.Beam([smo110205,smo110206,smo110207,smo110208]);
const dirsmo115126 = smo110209.getStemDirection();
smo110209.setStemDirection(dirsmo115126);
smo110210.setStemDirection(dirsmo115126);
smo110211.setStemDirection(dirsmo115126);
const smo115126 = new VF.Beam([smo110209,smo110210,smo110211]);
 
// formatting measures in staff group smo109454
fmtsmo1102250.format([smo110225v0,smo110225v1,smo113102v0], 213);
const stavesmo110225 = new VF.Stave(73, 406, 295);
stavesmo110225.setAttribute('id', 'stavesmo110225');
stavesmo110225.setBegBarType(1);
stavesmo110225.setTempo(JSON.parse('{"duration":"4","dots":0,"bpm":72}'), -1 * 55);
stavesmo110225.addClef('treble');
stavesmo110225.addTimeSignature('2/4');
stavesmo110225.setContext(context);
stavesmo110225.draw();
smo110225v0.draw(context, stavesmo110225);
smo110225v1.draw(context, stavesmo110225);
smo115123.setContext(context);
smo115123.draw();
smo115124.setContext(context);
smo115124.draw();
smo115125.setContext(context);
smo115125.draw();
smo115126.setContext(context);
smo115126.draw();
const stavesmo113102 = new VF.Stave(73, 545, 295);
stavesmo113102.setAttribute('id', 'stavesmo113102');
stavesmo113102.setBegBarType(1);
stavesmo113102.addClef('bass');
stavesmo113102.addTimeSignature('2/4');
stavesmo113102.setContext(context);
stavesmo113102.draw();
smo113102v0.draw(context, stavesmo113102);
const leftsmo109454stavesmo1102251 = new VF.StaveConnector(stavesmo110225, stavesmo113102).setType(3);
leftsmo109454stavesmo1102251.setContext(context).draw();
const fmtsmo1102461 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo110246v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110246v0ar = [];
const smo110226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110226.setAttribute('id', 'smo110226');
smo110246v0ar.push(smo110226);
const smo110227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110227.setAttribute('id', 'smo110227');
smo110246v0ar.push(smo110227);
const smo110228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110228.setAttribute('id', 'smo110228');
smo110246v0ar.push(smo110228);
const smo110229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110229.setAttribute('id', 'smo110229');
smo110246v0ar.push(smo110229);
const smo110230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110230.setAttribute('id', 'smo110230');
smo110246v0ar.push(smo110230);
const smo110231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo110231.setAttribute('id', 'smo110231');
smo110246v0ar.push(smo110231);
const smo110232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110232.setAttribute('id', 'smo110232');
smo110246v0ar.push(smo110232);
smo110246v0.addTickables(smo110246v0ar)
fmtsmo1102461.joinVoices([smo110246v0]);
const fmtsmo1131231 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo113123v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113123v0ar = [];
const smo113103 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo113103.setAttribute('id', 'smo113103');
smo113123v0ar.push(smo113103);
const smo113104 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo113104.setAttribute('id', 'smo113104');
smo113123v0ar.push(smo113104);
const smo113105 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo113105.setAttribute('id', 'smo113105');
smo113123v0ar.push(smo113105);
const smo113106 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo113106.setAttribute('id', 'smo113106');
smo113123v0ar.push(smo113106);
const smo113107 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo113107.setAttribute('id', 'smo113107');
smo113123v0ar.push(smo113107);
const smo113108 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo113108.setAttribute('id', 'smo113108');
smo113123v0ar.push(smo113108);
const smo113109 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo113109.setAttribute('id', 'smo113109');
smo113123v0ar.push(smo113109);
smo113123v0.addTickables(smo113123v0ar)
fmtsmo1131231.joinVoices([smo113123v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115131 = smo110226.getStemDirection();
smo110226.setStemDirection(dirsmo115131);
smo110227.setStemDirection(dirsmo115131);
smo110228.setStemDirection(dirsmo115131);
smo110229.setStemDirection(dirsmo115131);
const smo115131 = new VF.Beam([smo110226,smo110227,smo110228,smo110229]);
const dirsmo115132 = smo110230.getStemDirection();
smo110230.setStemDirection(dirsmo115132);
smo110231.setStemDirection(dirsmo115132);
smo110232.setStemDirection(dirsmo115132);
const smo115132 = new VF.Beam([smo110230,smo110231,smo110232]);
const dirsmo115135 = smo113103.getStemDirection();
smo113103.setStemDirection(dirsmo115135);
smo113104.setStemDirection(dirsmo115135);
smo113105.setStemDirection(dirsmo115135);
smo113106.setStemDirection(dirsmo115135);
const smo115135 = new VF.Beam([smo113103,smo113104,smo113105,smo113106]);
const dirsmo115136 = smo113107.getStemDirection();
smo113107.setStemDirection(dirsmo115136);
smo113108.setStemDirection(dirsmo115136);
smo113109.setStemDirection(dirsmo115136);
const smo115136 = new VF.Beam([smo113107,smo113108,smo113109]);
 
// formatting measures in staff group smo109454
fmtsmo1102461.format([smo110246v0,smo113123v0], 281);
const stavesmo110246 = new VF.Stave(368, 406, 295);
stavesmo110246.setAttribute('id', 'stavesmo110246');
stavesmo110246.setBegBarType(VF.Barline.type.NONE);
stavesmo110246.setContext(context);
stavesmo110246.draw();
smo110246v0.draw(context, stavesmo110246);
smo115131.setContext(context);
smo115131.draw();
smo115132.setContext(context);
smo115132.draw();
const stavesmo113123 = new VF.Stave(368, 545, 295);
stavesmo113123.setAttribute('id', 'stavesmo113123');
stavesmo113123.setBegBarType(VF.Barline.type.NONE);
stavesmo113123.setContext(context);
stavesmo113123.draw();
smo113123v0.draw(context, stavesmo113123);
smo115135.setContext(context);
smo115135.draw();
smo115136.setContext(context);
smo115136.draw();
const fmtsmo1102682 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo110268v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110268v0ar = [];
const smo110247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo110247.setAttribute('id', 'smo110247');
smo110268v0ar.push(smo110247);
const smo110248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110248.setAttribute('id', 'smo110248');
smo110268v0ar.push(smo110248);
const smo110249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo110249.setAttribute('id', 'smo110249');
smo110268v0ar.push(smo110249);
const smo110250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo110250.setAttribute('id', 'smo110250');
smo110268v0ar.push(smo110250);
const smo110251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo110251.setAttribute('id', 'smo110251');
smo110268v0ar.push(smo110251);
const smo110252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n"]}'))
smo110252.setAttribute('id', 'smo110252');
smo110268v0ar.push(smo110252);
const smo110253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo110253.setAttribute('id', 'smo110253');
smo110268v0ar.push(smo110253);
const smo110254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo110254.setAttribute('id', 'smo110254');
const smo1102540acc = new VF.Accidental('b');
smo110254.addModifier(smo1102540acc, 0);
smo110268v0ar.push(smo110254);
smo110268v0.addTickables(smo110268v0ar)
fmtsmo1102682.joinVoices([smo110268v0]);
const fmtsmo1131452 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo113145v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113145v0ar = [];
const smo113124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo113124.setAttribute('id', 'smo113124');
smo113145v0ar.push(smo113124);
const smo113125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo113125.setAttribute('id', 'smo113125');
smo113145v0ar.push(smo113125);
const smo113126 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113126.setAttribute('id', 'smo113126');
smo113145v0ar.push(smo113126);
const smo113127 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo113127.setAttribute('id', 'smo113127');
smo113145v0ar.push(smo113127);
const smo113128 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo113128.setAttribute('id', 'smo113128');
smo113145v0ar.push(smo113128);
const smo113129 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo113129.setAttribute('id', 'smo113129');
smo113145v0ar.push(smo113129);
const smo113130 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo113130.setAttribute('id', 'smo113130');
smo113145v0ar.push(smo113130);
const smo113131 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n"]}'))
smo113131.setAttribute('id', 'smo113131');
const smo1131310acc = new VF.Accidental('b');
smo113131.addModifier(smo1131310acc, 0);
smo113145v0ar.push(smo113131);
smo113145v0.addTickables(smo113145v0ar)
fmtsmo1131452.joinVoices([smo113145v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115139 = smo110247.getStemDirection();
smo110247.setStemDirection(dirsmo115139);
smo110248.setStemDirection(dirsmo115139);
smo110249.setStemDirection(dirsmo115139);
smo110250.setStemDirection(dirsmo115139);
const smo115139 = new VF.Beam([smo110247,smo110248,smo110249,smo110250]);
const dirsmo115140 = smo110251.getStemDirection();
smo110251.setStemDirection(dirsmo115140);
smo110252.setStemDirection(dirsmo115140);
smo110253.setStemDirection(dirsmo115140);
smo110254.setStemDirection(dirsmo115140);
const smo115140 = new VF.Beam([smo110251,smo110252,smo110253,smo110254]);
const dirsmo115143 = smo113124.getStemDirection();
smo113124.setStemDirection(dirsmo115143);
smo113125.setStemDirection(dirsmo115143);
smo113126.setStemDirection(dirsmo115143);
smo113127.setStemDirection(dirsmo115143);
const smo115143 = new VF.Beam([smo113124,smo113125,smo113126,smo113127]);
const dirsmo115144 = smo113128.getStemDirection();
smo113128.setStemDirection(dirsmo115144);
smo113129.setStemDirection(dirsmo115144);
smo113130.setStemDirection(dirsmo115144);
smo113131.setStemDirection(dirsmo115144);
const smo115144 = new VF.Beam([smo113128,smo113129,smo113130,smo113131]);
 
// formatting measures in staff group smo109454
fmtsmo1102682.format([smo110268v0,smo113145v0], 281);
const stavesmo110268 = new VF.Stave(663, 406, 295);
stavesmo110268.setAttribute('id', 'stavesmo110268');
stavesmo110268.setBegBarType(VF.Barline.type.NONE);
stavesmo110268.setContext(context);
stavesmo110268.draw();
smo110268v0.draw(context, stavesmo110268);
smo115139.setContext(context);
smo115139.draw();
smo115140.setContext(context);
smo115140.draw();
const stavesmo113145 = new VF.Stave(663, 545, 295);
stavesmo113145.setAttribute('id', 'stavesmo113145');
stavesmo113145.setBegBarType(VF.Barline.type.NONE);
stavesmo113145.setContext(context);
stavesmo113145.draw();
smo113145v0.draw(context, stavesmo113145);
smo115143.setContext(context);
smo115143.draw();
smo115144.setContext(context);
smo115144.draw();
const fmtsmo1102863 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo110286v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110286v0ar = [];
const smo110269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo110269.setAttribute('id', 'smo110269');
smo110286v0ar.push(smo110269);
const smo110270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","bn/4/n","dn/5/n","gn/5/n"]}'))
smo110270.setAttribute('id', 'smo110270');
smo110286v0ar.push(smo110270);
const smo110271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo110271.setAttribute('id', 'smo110271');
smo110286v0ar.push(smo110271);
const smo110272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo110272.setAttribute('id', 'smo110272');
const smo1102720acc = new VF.Accidental('b');
smo110272.addModifier(smo1102720acc, 0);
smo110286v0ar.push(smo110272);
smo110286v0.addTickables(smo110286v0ar)
fmtsmo1102863.joinVoices([smo110286v0]);
const fmtsmo1131633 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo113163v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113163v0ar = [];
const smo113146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113146.setAttribute('id', 'smo113146');
smo113163v0ar.push(smo113146);
const smo113147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo113147.setAttribute('id', 'smo113147');
smo113163v0ar.push(smo113147);
const smo113148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/1/n","gn/2/n"]}'))
smo113148.setAttribute('id', 'smo113148');
smo113163v0ar.push(smo113148);
const smo113149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113149.setAttribute('id', 'smo113149');
smo113163v0ar.push(smo113149);
smo113163v0.addTickables(smo113163v0ar)
fmtsmo1131633.joinVoices([smo113163v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115147 = smo110270.getStemDirection();
smo110270.setStemDirection(dirsmo115147);
smo110271.setStemDirection(dirsmo115147);
smo110272.setStemDirection(dirsmo115147);
const smo115147 = new VF.Beam([smo110270,smo110271,smo110272]);
const dirsmo115150 = smo113148.getStemDirection();
smo113148.setStemDirection(dirsmo115150);
smo113149.setStemDirection(dirsmo115150);
const smo115150 = new VF.Beam([smo113148,smo113149]);
 
// formatting measures in staff group smo109454
fmtsmo1102863.format([smo110286v0,smo113163v0], 281);
const stavesmo110286 = new VF.Stave(958, 406, 295);
stavesmo110286.setAttribute('id', 'stavesmo110286');
stavesmo110286.setBegBarType(VF.Barline.type.NONE);
stavesmo110286.setContext(context);
stavesmo110286.draw();
smo110286v0.draw(context, stavesmo110286);
smo115147.setContext(context);
smo115147.draw();
const stavesmo113163 = new VF.Stave(958, 545, 295);
stavesmo113163.setAttribute('id', 'stavesmo113163');
stavesmo113163.setBegBarType(VF.Barline.type.NONE);
stavesmo113163.setContext(context);
stavesmo113163.draw();
smo113163v0.draw(context, stavesmo113163);
smo115150.setContext(context);
smo115150.draw();
const fmtsmo1103074 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo110307v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110307v0ar = [];
const smo110287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110287.setAttribute('id', 'smo110287');
smo110307v0ar.push(smo110287);
const smo110289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110289.setAttribute('id', 'smo110289');
smo110307v0ar.push(smo110289);
const smo110290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110290.setAttribute('id', 'smo110290');
smo110307v0ar.push(smo110290);
const smo110291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110291.setAttribute('id', 'smo110291');
smo110307v0ar.push(smo110291);
const smo110292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110292.setAttribute('id', 'smo110292');
smo110307v0ar.push(smo110292);
const smo110293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110293.setAttribute('id', 'smo110293');
smo110307v0ar.push(smo110293);
smo110307v0.addTickables(smo110307v0ar)
fmtsmo1103074.joinVoices([smo110307v0]);
const fmtsmo1131814 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo113181v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113181v0ar = [];
const smo113164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113164.setAttribute('id', 'smo113164');
smo113181v0ar.push(smo113164);
const smo113165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113165.setAttribute('id', 'smo113165');
smo113181v0ar.push(smo113165);
const smo113166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113166.setAttribute('id', 'smo113166');
smo113181v0ar.push(smo113166);
const smo113167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo113167.setAttribute('id', 'smo113167');
const smo1131671acc = new VF.Accidental('b');
smo113167.addModifier(smo1131671acc, 1);
smo113181v0ar.push(smo113167);
smo113181v0.addTickables(smo113181v0ar)
fmtsmo1131814.joinVoices([smo113181v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115153 = smo110287.getStemDirection();
smo110287.setStemDirection(dirsmo115153);
smo110289.setStemDirection(dirsmo115153);
smo110290.setStemDirection(dirsmo115153);
const smo115153 = new VF.Beam([smo110287,smo110289,smo110290]);
const dirsmo115154 = smo110291.getStemDirection();
smo110291.setStemDirection(dirsmo115154);
smo110292.setStemDirection(dirsmo115154);
smo110293.setStemDirection(dirsmo115154);
const smo115154 = new VF.Beam([smo110291,smo110292,smo110293]);
const dirsmo115156 = smo113164.getStemDirection();
smo113164.setStemDirection(dirsmo115156);
smo113165.setStemDirection(dirsmo115156);
const smo115156 = new VF.Beam([smo113164,smo113165]);
const dirsmo115157 = smo113166.getStemDirection();
smo113166.setStemDirection(dirsmo115157);
smo113167.setStemDirection(dirsmo115157);
const smo115157 = new VF.Beam([smo113166,smo113167]);
 
// formatting measures in staff group smo109454
fmtsmo1103074.format([smo110307v0,smo113181v0], 272);
const stavesmo110307 = new VF.Stave(1253, 406, 295);
stavesmo110307.setAttribute('id', 'stavesmo110307');
stavesmo110307.setBegBarType(4);
stavesmo110307.setContext(context);
stavesmo110307.draw();
smo110307v0.draw(context, stavesmo110307);
smo115153.setContext(context);
smo115153.draw();
smo115154.setContext(context);
smo115154.draw();
const stavesmo113181 = new VF.Stave(1253, 545, 295);
stavesmo113181.setAttribute('id', 'stavesmo113181');
stavesmo113181.setBegBarType(4);
stavesmo113181.setContext(context);
stavesmo113181.draw();
smo113181v0.draw(context, stavesmo113181);
smo115156.setContext(context);
smo115156.draw();
smo115157.setContext(context);
smo115157.draw();
const fmtsmo1103265 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo110326v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110326v0ar = [];
const smo110308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110308.setAttribute('id', 'smo110308');
smo110326v0ar.push(smo110308);
const smo110309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110309.setAttribute('id', 'smo110309');
smo110326v0ar.push(smo110309);
const smo110310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110310.setAttribute('id', 'smo110310');
smo110326v0ar.push(smo110310);
const smo110311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110311.setAttribute('id', 'smo110311');
smo110326v0ar.push(smo110311);
const smo110312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo110312.setAttribute('id', 'smo110312');
const smo1103120acc = new VF.Accidental('b');
smo110312.addModifier(smo1103120acc, 0);
const smo1103121acc = new VF.Accidental('b');
smo110312.addModifier(smo1103121acc, 1);
const smo1103122acc = new VF.Accidental('b');
smo110312.addModifier(smo1103122acc, 2);
smo110326v0ar.push(smo110312);
smo110326v0.addTickables(smo110326v0ar)
fmtsmo1103265.joinVoices([smo110326v0]);
const fmtsmo1131995 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo113199v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113199v0ar = [];
const smo113182 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113182.setAttribute('id', 'smo113182');
smo113199v0ar.push(smo113182);
const smo113183 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo113183.setAttribute('id', 'smo113183');
smo113199v0ar.push(smo113183);
const smo113184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113184.setAttribute('id', 'smo113184');
smo113199v0ar.push(smo113184);
const smo113185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo113185.setAttribute('id', 'smo113185');
smo113199v0ar.push(smo113185);
smo113199v0.addTickables(smo113199v0ar)
fmtsmo1131995.joinVoices([smo113199v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115159 = smo110309.getStemDirection();
smo110309.setStemDirection(dirsmo115159);
smo110310.setStemDirection(dirsmo115159);
smo110311.setStemDirection(dirsmo115159);
smo110312.setStemDirection(dirsmo115159);
const smo115159 = new VF.Beam([smo110309,smo110310,smo110311,smo110312]);
const dirsmo115162 = smo113182.getStemDirection();
smo113182.setStemDirection(dirsmo115162);
smo113183.setStemDirection(dirsmo115162);
const smo115162 = new VF.Beam([smo113182,smo113183]);
const dirsmo115163 = smo113184.getStemDirection();
smo113184.setStemDirection(dirsmo115163);
smo113185.setStemDirection(dirsmo115163);
const smo115163 = new VF.Beam([smo113184,smo113185]);
 
// formatting measures in staff group smo109454
fmtsmo1103265.format([smo110326v0,smo113199v0], 281);
const stavesmo110326 = new VF.Stave(1548, 406, 295);
stavesmo110326.setAttribute('id', 'stavesmo110326');
stavesmo110326.setBegBarType(VF.Barline.type.NONE);
stavesmo110326.setContext(context);
stavesmo110326.draw();
smo110326v0.draw(context, stavesmo110326);
smo115159.setContext(context);
smo115159.draw();
const stavesmo113199 = new VF.Stave(1548, 545, 295);
stavesmo113199.setAttribute('id', 'stavesmo113199');
stavesmo113199.setBegBarType(VF.Barline.type.NONE);
stavesmo113199.setContext(context);
stavesmo113199.draw();
smo113199v0.draw(context, stavesmo113199);
smo115162.setContext(context);
smo115162.draw();
smo115163.setContext(context);
smo115163.draw();
const rightsmo109454stavesmo1103261 = new VF.StaveConnector(stavesmo110326, stavesmo113199).setType(0);
rightsmo109454stavesmo1103261.setContext(context).draw();
const fmtsmo1103486 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo110348v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110348v0ar = [];
const smo110327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110327.setAttribute('id', 'smo110327');
smo110348v0ar.push(smo110327);
const smo110329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110329.setAttribute('id', 'smo110329');
smo110348v0ar.push(smo110329);
const smo110330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110330.setAttribute('id', 'smo110330');
smo110348v0ar.push(smo110330);
const smo110331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110331.setAttribute('id', 'smo110331');
smo110348v0ar.push(smo110331);
const smo110332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110332.setAttribute('id', 'smo110332');
smo110348v0ar.push(smo110332);
const smo110333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo110333.setAttribute('id', 'smo110333');
smo110348v0ar.push(smo110333);
const smo110334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110334.setAttribute('id', 'smo110334');
smo110348v0ar.push(smo110334);
smo110348v0.addTickables(smo110348v0ar)
fmtsmo1103486.joinVoices([smo110348v0]);
const fmtsmo1132176 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo113217v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113217v0ar = [];
const smo113200 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113200.setAttribute('id', 'smo113200');
smo113217v0ar.push(smo113200);
const smo113201 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113201.setAttribute('id', 'smo113201');
smo113217v0ar.push(smo113201);
const smo113202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113202.setAttribute('id', 'smo113202');
smo113217v0ar.push(smo113202);
const smo113203 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo113203.setAttribute('id', 'smo113203');
smo113217v0ar.push(smo113203);
smo113217v0.addTickables(smo113217v0ar)
fmtsmo1132176.joinVoices([smo113217v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115174 = smo110327.getStemDirection();
smo110327.setStemDirection(dirsmo115174);
smo110329.setStemDirection(dirsmo115174);
smo110330.setStemDirection(dirsmo115174);
smo110331.setStemDirection(dirsmo115174);
const smo115174 = new VF.Beam([smo110327,smo110329,smo110330,smo110331]);
const dirsmo115175 = smo110332.getStemDirection();
smo110332.setStemDirection(dirsmo115175);
smo110333.setStemDirection(dirsmo115175);
smo110334.setStemDirection(dirsmo115175);
const smo115175 = new VF.Beam([smo110332,smo110333,smo110334]);
const dirsmo115178 = smo113200.getStemDirection();
smo113200.setStemDirection(dirsmo115178);
smo113201.setStemDirection(dirsmo115178);
const smo115178 = new VF.Beam([smo113200,smo113201]);
const dirsmo115179 = smo113202.getStemDirection();
smo113202.setStemDirection(dirsmo115179);
smo113203.setStemDirection(dirsmo115179);
const smo115179 = new VF.Beam([smo113202,smo113203]);
 
// formatting measures in staff group smo109454
fmtsmo1103486.format([smo110348v0,smo113217v0], 237);
const stavesmo110348 = new VF.Stave(73, 779, 295);
stavesmo110348.setAttribute('id', 'stavesmo110348');
stavesmo110348.setBegBarType(1);
stavesmo110348.addClef('treble');
stavesmo110348.setContext(context);
stavesmo110348.draw();
smo110348v0.draw(context, stavesmo110348);
smo115174.setContext(context);
smo115174.draw();
smo115175.setContext(context);
smo115175.draw();
const stavesmo113217 = new VF.Stave(73, 934, 295);
stavesmo113217.setAttribute('id', 'stavesmo113217');
stavesmo113217.setBegBarType(1);
stavesmo113217.addClef('bass');
stavesmo113217.setContext(context);
stavesmo113217.draw();
smo113217v0.draw(context, stavesmo113217);
smo115178.setContext(context);
smo115178.draw();
smo115179.setContext(context);
smo115179.draw();
const leftsmo109454stavesmo1103481 = new VF.StaveConnector(stavesmo110348, stavesmo113217).setType(3);
leftsmo109454stavesmo1103481.setContext(context).draw();
const fmtsmo1103667 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo110366v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110366v0ar = [];
const smo110349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110349.setAttribute('id', 'smo110349');
smo110366v0ar.push(smo110349);
const smo110350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110350.setAttribute('id', 'smo110350');
smo110366v0ar.push(smo110350);
const smo110351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo110351.setAttribute('id', 'smo110351');
smo110366v0ar.push(smo110351);
const smo110352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo110352.setAttribute('id', 'smo110352');
const smo1103520acc = new VF.Accidental('b');
smo110352.addModifier(smo1103520acc, 0);
smo110366v0ar.push(smo110352);
smo110366v0.addTickables(smo110366v0ar)
fmtsmo1103667.joinVoices([smo110366v0]);
const fmtsmo1132357 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo113235v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113235v0ar = [];
const smo113218 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113218.setAttribute('id', 'smo113218');
smo113235v0ar.push(smo113218);
const smo113219 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113219.setAttribute('id', 'smo113219');
smo113235v0ar.push(smo113219);
const smo113220 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113220.setAttribute('id', 'smo113220');
smo113235v0ar.push(smo113220);
const smo113221 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113221.setAttribute('id', 'smo113221');
smo113235v0ar.push(smo113221);
smo113235v0.addTickables(smo113235v0ar)
fmtsmo1132357.joinVoices([smo113235v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115182 = smo110350.getStemDirection();
smo110350.setStemDirection(dirsmo115182);
smo110351.setStemDirection(dirsmo115182);
smo110352.setStemDirection(dirsmo115182);
const smo115182 = new VF.Beam([smo110350,smo110351,smo110352]);
const dirsmo115185 = smo113218.getStemDirection();
smo113218.setStemDirection(dirsmo115185);
smo113219.setStemDirection(dirsmo115185);
const smo115185 = new VF.Beam([smo113218,smo113219]);
const dirsmo115186 = smo113220.getStemDirection();
smo113220.setStemDirection(dirsmo115186);
smo113221.setStemDirection(dirsmo115186);
const smo115186 = new VF.Beam([smo113220,smo113221]);
 
// formatting measures in staff group smo109454
fmtsmo1103667.format([smo110366v0,smo113235v0], 281);
const stavesmo110366 = new VF.Stave(368, 779, 295);
stavesmo110366.setAttribute('id', 'stavesmo110366');
stavesmo110366.setBegBarType(VF.Barline.type.NONE);
stavesmo110366.setContext(context);
stavesmo110366.draw();
smo110366v0.draw(context, stavesmo110366);
smo115182.setContext(context);
smo115182.draw();
const stavesmo113235 = new VF.Stave(368, 934, 295);
stavesmo113235.setAttribute('id', 'stavesmo113235');
stavesmo113235.setBegBarType(VF.Barline.type.NONE);
stavesmo113235.setContext(context);
stavesmo113235.draw();
smo113235v0.draw(context, stavesmo113235);
smo115185.setContext(context);
smo115185.draw();
smo115186.setContext(context);
smo115186.draw();
const fmtsmo1103878 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo110387v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110387v0ar = [];
const smo110367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110367.setAttribute('id', 'smo110367');
smo110387v0ar.push(smo110367);
const smo110369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110369.setAttribute('id', 'smo110369');
smo110387v0ar.push(smo110369);
const smo110370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110370.setAttribute('id', 'smo110370');
smo110387v0ar.push(smo110370);
const smo110371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110371.setAttribute('id', 'smo110371');
smo110387v0ar.push(smo110371);
const smo110372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110372.setAttribute('id', 'smo110372');
smo110387v0ar.push(smo110372);
const smo110373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110373.setAttribute('id', 'smo110373');
smo110387v0ar.push(smo110373);
smo110387v0.addTickables(smo110387v0ar)
fmtsmo1103878.joinVoices([smo110387v0]);
const fmtsmo1132538 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo113253v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113253v0ar = [];
const smo113236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113236.setAttribute('id', 'smo113236');
smo113253v0ar.push(smo113236);
const smo113237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113237.setAttribute('id', 'smo113237');
smo113253v0ar.push(smo113237);
const smo113238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113238.setAttribute('id', 'smo113238');
smo113253v0ar.push(smo113238);
const smo113239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo113239.setAttribute('id', 'smo113239');
const smo1132391acc = new VF.Accidental('b');
smo113239.addModifier(smo1132391acc, 1);
smo113253v0ar.push(smo113239);
smo113253v0.addTickables(smo113253v0ar)
fmtsmo1132538.joinVoices([smo113253v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115189 = smo110367.getStemDirection();
smo110367.setStemDirection(dirsmo115189);
smo110369.setStemDirection(dirsmo115189);
smo110370.setStemDirection(dirsmo115189);
const smo115189 = new VF.Beam([smo110367,smo110369,smo110370]);
const dirsmo115190 = smo110371.getStemDirection();
smo110371.setStemDirection(dirsmo115190);
smo110372.setStemDirection(dirsmo115190);
smo110373.setStemDirection(dirsmo115190);
const smo115190 = new VF.Beam([smo110371,smo110372,smo110373]);
const dirsmo115193 = smo113236.getStemDirection();
smo113236.setStemDirection(dirsmo115193);
smo113237.setStemDirection(dirsmo115193);
const smo115193 = new VF.Beam([smo113236,smo113237]);
const dirsmo115194 = smo113238.getStemDirection();
smo113238.setStemDirection(dirsmo115194);
smo113239.setStemDirection(dirsmo115194);
const smo115194 = new VF.Beam([smo113238,smo113239]);
 
// formatting measures in staff group smo109454
fmtsmo1103878.format([smo110387v0,smo113253v0], 281);
const stavesmo110387 = new VF.Stave(663, 779, 295);
stavesmo110387.setAttribute('id', 'stavesmo110387');
stavesmo110387.setBegBarType(VF.Barline.type.NONE);
stavesmo110387.setContext(context);
stavesmo110387.draw();
smo110387v0.draw(context, stavesmo110387);
smo115189.setContext(context);
smo115189.draw();
smo115190.setContext(context);
smo115190.draw();
const stavesmo113253 = new VF.Stave(663, 934, 295);
stavesmo113253.setAttribute('id', 'stavesmo113253');
stavesmo113253.setBegBarType(VF.Barline.type.NONE);
stavesmo113253.setContext(context);
stavesmo113253.draw();
smo113253v0.draw(context, stavesmo113253);
smo115193.setContext(context);
smo115193.draw();
smo115194.setContext(context);
smo115194.draw();
const fmtsmo1104059 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo110405v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110405v0ar = [];
const smo110388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110388.setAttribute('id', 'smo110388');
smo110405v0ar.push(smo110388);
const smo110389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110389.setAttribute('id', 'smo110389');
smo110405v0ar.push(smo110389);
const smo110390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo110390.setAttribute('id', 'smo110390');
smo110405v0ar.push(smo110390);
const smo110391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","cn/5/n","gn/5/n"]}'))
smo110391.setAttribute('id', 'smo110391');
smo110405v0ar.push(smo110391);
smo110405v0.addTickables(smo110405v0ar)
fmtsmo1104059.joinVoices([smo110405v0]);
const fmtsmo1132719 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo113271v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113271v0ar = [];
const smo113254 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113254.setAttribute('id', 'smo113254');
smo113271v0ar.push(smo113254);
const smo113255 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo113255.setAttribute('id', 'smo113255');
smo113271v0ar.push(smo113255);
const smo113256 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113256.setAttribute('id', 'smo113256');
smo113271v0ar.push(smo113256);
const smo113257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/2/n","eb/3/n"]}'))
smo113257.setAttribute('id', 'smo113257');
const smo1132570acc = new VF.Accidental('b');
smo113257.addModifier(smo1132570acc, 0);
const smo1132571acc = new VF.Accidental('b');
smo113257.addModifier(smo1132571acc, 1);
smo113271v0ar.push(smo113257);
smo113271v0.addTickables(smo113271v0ar)
fmtsmo1132719.joinVoices([smo113271v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115197 = smo110389.getStemDirection();
smo110389.setStemDirection(dirsmo115197);
smo110390.setStemDirection(dirsmo115197);
smo110391.setStemDirection(dirsmo115197);
const smo115197 = new VF.Beam([smo110389,smo110390,smo110391]);
const dirsmo115200 = smo113254.getStemDirection();
smo113254.setStemDirection(dirsmo115200);
smo113255.setStemDirection(dirsmo115200);
const smo115200 = new VF.Beam([smo113254,smo113255]);
const dirsmo115201 = smo113256.getStemDirection();
smo113256.setStemDirection(dirsmo115201);
smo113257.setStemDirection(dirsmo115201);
const smo115201 = new VF.Beam([smo113256,smo113257]);
 
// formatting measures in staff group smo109454
fmtsmo1104059.format([smo110405v0,smo113271v0], 281);
const stavesmo110405 = new VF.Stave(958, 779, 295);
stavesmo110405.setAttribute('id', 'stavesmo110405');
stavesmo110405.setBegBarType(VF.Barline.type.NONE);
stavesmo110405.setContext(context);
stavesmo110405.draw();
smo110405v0.draw(context, stavesmo110405);
smo115197.setContext(context);
smo115197.draw();
const stavesmo113271 = new VF.Stave(958, 934, 295);
stavesmo113271.setAttribute('id', 'stavesmo113271');
stavesmo113271.setBegBarType(VF.Barline.type.NONE);
stavesmo113271.setContext(context);
stavesmo113271.draw();
smo113271v0.draw(context, stavesmo113271);
smo115200.setContext(context);
smo115200.draw();
smo115201.setContext(context);
smo115201.draw();
const fmtsmo11042810 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo110428v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110428v0ar = [];
const smo110406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n","gb/5/n"]}'))
smo110406.setAttribute('id', 'smo110406');
const smo1104060acc = new VF.Accidental('b');
smo110406.addModifier(smo1104060acc, 0);
const smo1104062acc = new VF.Accidental('b');
smo110406.addModifier(smo1104062acc, 2);
smo110428v0ar.push(smo110406);
const smo110408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo110408.setAttribute('id', 'smo110408');
smo110428v0ar.push(smo110408);
const smo110409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110409.setAttribute('id', 'smo110409');
smo110428v0ar.push(smo110409);
const smo110410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110410.setAttribute('id', 'smo110410');
smo110428v0ar.push(smo110410);
const smo110411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110411.setAttribute('id', 'smo110411');
smo110428v0ar.push(smo110411);
const smo110412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo110412.setAttribute('id', 'smo110412');
smo110428v0ar.push(smo110412);
const smo110413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110413.setAttribute('id', 'smo110413');
smo110428v0ar.push(smo110413);
const smo110414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","an/5/n"]}'))
smo110414.setAttribute('id', 'smo110414');
smo110428v0ar.push(smo110414);
smo110428v0.addTickables(smo110428v0ar)
fmtsmo11042810.joinVoices([smo110428v0]);
const fmtsmo11328910 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo113289v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113289v0ar = [];
const smo113272 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo113272.setAttribute('id', 'smo113272');
smo113289v0ar.push(smo113272);
const smo113273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","gb/3/n","an/3/n","cn/4/n"]}'))
smo113273.setAttribute('id', 'smo113273');
const smo1132731acc = new VF.Accidental('b');
smo113273.addModifier(smo1132731acc, 1);
smo113289v0ar.push(smo113273);
const smo113274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo113274.setAttribute('id', 'smo113274');
smo113289v0ar.push(smo113274);
const smo113275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n"]}'))
smo113275.setAttribute('id', 'smo113275');
smo113289v0ar.push(smo113275);
smo113289v0.addTickables(smo113289v0ar)
fmtsmo11328910.joinVoices([smo113289v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115204 = smo110406.getStemDirection();
smo110406.setStemDirection(dirsmo115204);
smo110408.setStemDirection(dirsmo115204);
smo110409.setStemDirection(dirsmo115204);
smo110410.setStemDirection(dirsmo115204);
const smo115204 = new VF.Beam([smo110406,smo110408,smo110409,smo110410]);
const dirsmo115205 = smo110411.getStemDirection();
smo110411.setStemDirection(dirsmo115205);
smo110412.setStemDirection(dirsmo115205);
smo110413.setStemDirection(dirsmo115205);
smo110414.setStemDirection(dirsmo115205);
const smo115205 = new VF.Beam([smo110411,smo110412,smo110413,smo110414]);
const dirsmo115208 = smo113272.getStemDirection();
smo113272.setStemDirection(dirsmo115208);
smo113273.setStemDirection(dirsmo115208);
const smo115208 = new VF.Beam([smo113272,smo113273]);
const dirsmo115209 = smo113274.getStemDirection();
smo113274.setStemDirection(dirsmo115209);
smo113275.setStemDirection(dirsmo115209);
const smo115209 = new VF.Beam([smo113274,smo113275]);
 
// formatting measures in staff group smo109454
fmtsmo11042810.format([smo110428v0,smo113289v0], 281);
const stavesmo110428 = new VF.Stave(1253, 779, 295);
stavesmo110428.setAttribute('id', 'stavesmo110428');
stavesmo110428.setBegBarType(VF.Barline.type.NONE);
stavesmo110428.setContext(context);
stavesmo110428.draw();
smo110428v0.draw(context, stavesmo110428);
smo115204.setContext(context);
smo115204.draw();
smo115205.setContext(context);
smo115205.draw();
const stavesmo113289 = new VF.Stave(1253, 934, 295);
stavesmo113289.setAttribute('id', 'stavesmo113289');
stavesmo113289.setBegBarType(VF.Barline.type.NONE);
stavesmo113289.setContext(context);
stavesmo113289.draw();
smo113289v0.draw(context, stavesmo113289);
smo115208.setContext(context);
smo115208.draw();
smo115209.setContext(context);
smo115209.draw();
const fmtsmo11044611 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo110446v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110446v0ar = [];
const smo110429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110429.setAttribute('id', 'smo110429');
smo110446v0ar.push(smo110429);
const smo110430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110430.setAttribute('id', 'smo110430');
smo110446v0ar.push(smo110430);
const smo110431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo110431.setAttribute('id', 'smo110431');
smo110446v0ar.push(smo110431);
const smo110432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo110432.setAttribute('id', 'smo110432');
const smo1104320acc = new VF.Accidental('b');
smo110432.addModifier(smo1104320acc, 0);
smo110446v0ar.push(smo110432);
smo110446v0.addTickables(smo110446v0ar)
fmtsmo11044611.joinVoices([smo110446v0]);
const fmtsmo11330711 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo113307v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113307v0ar = [];
const smo113290 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113290.setAttribute('id', 'smo113290');
smo113307v0ar.push(smo113290);
const smo113291 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113291.setAttribute('id', 'smo113291');
smo113307v0ar.push(smo113291);
const smo113292 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo113292.setAttribute('id', 'smo113292');
smo113307v0ar.push(smo113292);
const smo113293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo113293.setAttribute('id', 'smo113293');
smo113307v0ar.push(smo113293);
smo113307v0.addTickables(smo113307v0ar)
fmtsmo11330711.joinVoices([smo113307v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115212 = smo110430.getStemDirection();
smo110430.setStemDirection(dirsmo115212);
smo110431.setStemDirection(dirsmo115212);
smo110432.setStemDirection(dirsmo115212);
const smo115212 = new VF.Beam([smo110430,smo110431,smo110432]);
const dirsmo115215 = smo113290.getStemDirection();
smo113290.setStemDirection(dirsmo115215);
smo113291.setStemDirection(dirsmo115215);
const smo115215 = new VF.Beam([smo113290,smo113291]);
const dirsmo115216 = smo113292.getStemDirection();
smo113292.setStemDirection(dirsmo115216);
smo113293.setStemDirection(dirsmo115216);
const smo115216 = new VF.Beam([smo113292,smo113293]);
 
// formatting measures in staff group smo109454
fmtsmo11044611.format([smo110446v0,smo113307v0], 281);
const stavesmo110446 = new VF.Stave(1548, 779, 295);
stavesmo110446.setAttribute('id', 'stavesmo110446');
stavesmo110446.setBegBarType(VF.Barline.type.NONE);
stavesmo110446.setContext(context);
stavesmo110446.draw();
smo110446v0.draw(context, stavesmo110446);
smo115212.setContext(context);
smo115212.draw();
const stavesmo113307 = new VF.Stave(1548, 934, 295);
stavesmo113307.setAttribute('id', 'stavesmo113307');
stavesmo113307.setBegBarType(VF.Barline.type.NONE);
stavesmo113307.setContext(context);
stavesmo113307.draw();
smo113307v0.draw(context, stavesmo113307);
smo115215.setContext(context);
smo115215.draw();
smo115216.setContext(context);
smo115216.draw();
const rightsmo109454stavesmo1104461 = new VF.StaveConnector(stavesmo110446, stavesmo113307).setType(0);
rightsmo109454stavesmo1104461.setContext(context).draw();
const fmtsmo11046712 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo110467v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110467v0ar = [];
const smo110447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110447.setAttribute('id', 'smo110447');
smo110467v0ar.push(smo110447);
const smo110449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110449.setAttribute('id', 'smo110449');
smo110467v0ar.push(smo110449);
const smo110450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110450.setAttribute('id', 'smo110450');
smo110467v0ar.push(smo110450);
const smo110451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110451.setAttribute('id', 'smo110451');
smo110467v0ar.push(smo110451);
const smo110452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo110452.setAttribute('id', 'smo110452');
smo110467v0ar.push(smo110452);
const smo110453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110453.setAttribute('id', 'smo110453');
smo110467v0ar.push(smo110453);
smo110467v0.addTickables(smo110467v0ar)
fmtsmo11046712.joinVoices([smo110467v0]);
const fmtsmo11332512 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo113325v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113325v0ar = [];
const smo113308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113308.setAttribute('id', 'smo113308');
smo113325v0ar.push(smo113308);
const smo113309 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113309.setAttribute('id', 'smo113309');
smo113325v0ar.push(smo113309);
const smo113310 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113310.setAttribute('id', 'smo113310');
smo113325v0ar.push(smo113310);
const smo113311 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bb/3/n","cn/4/n"]}'))
smo113311.setAttribute('id', 'smo113311');
const smo1133111acc = new VF.Accidental('b');
smo113311.addModifier(smo1133111acc, 1);
smo113325v0ar.push(smo113311);
smo113325v0.addTickables(smo113325v0ar)
fmtsmo11332512.joinVoices([smo113325v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115227 = smo110447.getStemDirection();
smo110447.setStemDirection(dirsmo115227);
smo110449.setStemDirection(dirsmo115227);
smo110450.setStemDirection(dirsmo115227);
const smo115227 = new VF.Beam([smo110447,smo110449,smo110450]);
const dirsmo115228 = smo110451.getStemDirection();
smo110451.setStemDirection(dirsmo115228);
smo110452.setStemDirection(dirsmo115228);
smo110453.setStemDirection(dirsmo115228);
const smo115228 = new VF.Beam([smo110451,smo110452,smo110453]);
const dirsmo115231 = smo113308.getStemDirection();
smo113308.setStemDirection(dirsmo115231);
smo113309.setStemDirection(dirsmo115231);
const smo115231 = new VF.Beam([smo113308,smo113309]);
const dirsmo115232 = smo113310.getStemDirection();
smo113310.setStemDirection(dirsmo115232);
smo113311.setStemDirection(dirsmo115232);
const smo115232 = new VF.Beam([smo113310,smo113311]);
 
// formatting measures in staff group smo109454
fmtsmo11046712.format([smo110467v0,smo113325v0], 237);
const stavesmo110467 = new VF.Stave(73, 1132, 295);
stavesmo110467.setAttribute('id', 'stavesmo110467');
stavesmo110467.setBegBarType(1);
stavesmo110467.addClef('treble');
stavesmo110467.setContext(context);
stavesmo110467.draw();
smo110467v0.draw(context, stavesmo110467);
smo115227.setContext(context);
smo115227.draw();
smo115228.setContext(context);
smo115228.draw();
const stavesmo113325 = new VF.Stave(73, 1287, 295);
stavesmo113325.setAttribute('id', 'stavesmo113325');
stavesmo113325.setBegBarType(1);
stavesmo113325.addClef('bass');
stavesmo113325.setContext(context);
stavesmo113325.draw();
smo113325v0.draw(context, stavesmo113325);
smo115231.setContext(context);
smo115231.draw();
smo115232.setContext(context);
smo115232.draw();
const leftsmo109454stavesmo1104671 = new VF.StaveConnector(stavesmo110467, stavesmo113325).setType(3);
leftsmo109454stavesmo1104671.setContext(context).draw();
const fmtsmo11048613 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo110486v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110486v0ar = [];
const smo110468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110468.setAttribute('id', 'smo110468');
smo110486v0ar.push(smo110468);
const smo110469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110469.setAttribute('id', 'smo110469');
smo110486v0ar.push(smo110469);
const smo110470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110470.setAttribute('id', 'smo110470');
smo110486v0ar.push(smo110470);
const smo110471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110471.setAttribute('id', 'smo110471');
smo110486v0ar.push(smo110471);
const smo110472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n","gb/5/n","eb/6/n"]}'))
smo110472.setAttribute('id', 'smo110472');
const smo1104720acc = new VF.Accidental('b');
smo110472.addModifier(smo1104720acc, 0);
const smo1104721acc = new VF.Accidental('b');
smo110472.addModifier(smo1104721acc, 1);
const smo1104722acc = new VF.Accidental('b');
smo110472.addModifier(smo1104722acc, 2);
smo110486v0ar.push(smo110472);
smo110486v0.addTickables(smo110486v0ar)
fmtsmo11048613.joinVoices([smo110486v0]);
const fmtsmo11334313 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo113343v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113343v0ar = [];
const smo113326 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113326.setAttribute('id', 'smo113326');
smo113343v0ar.push(smo113326);
const smo113327 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n"]}'))
smo113327.setAttribute('id', 'smo113327');
smo113343v0ar.push(smo113327);
const smo113328 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113328.setAttribute('id', 'smo113328');
smo113343v0ar.push(smo113328);
const smo113329 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n"]}'))
smo113329.setAttribute('id', 'smo113329');
smo113343v0ar.push(smo113329);
smo113343v0.addTickables(smo113343v0ar)
fmtsmo11334313.joinVoices([smo113343v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115235 = smo110469.getStemDirection();
smo110469.setStemDirection(dirsmo115235);
smo110470.setStemDirection(dirsmo115235);
smo110471.setStemDirection(dirsmo115235);
smo110472.setStemDirection(dirsmo115235);
const smo115235 = new VF.Beam([smo110469,smo110470,smo110471,smo110472]);
const dirsmo115238 = smo113326.getStemDirection();
smo113326.setStemDirection(dirsmo115238);
smo113327.setStemDirection(dirsmo115238);
const smo115238 = new VF.Beam([smo113326,smo113327]);
const dirsmo115239 = smo113328.getStemDirection();
smo113328.setStemDirection(dirsmo115239);
smo113329.setStemDirection(dirsmo115239);
const smo115239 = new VF.Beam([smo113328,smo113329]);
 
// formatting measures in staff group smo109454
fmtsmo11048613.format([smo110486v0,smo113343v0], 281);
const stavesmo110486 = new VF.Stave(368, 1132, 295);
stavesmo110486.setAttribute('id', 'stavesmo110486');
stavesmo110486.setBegBarType(VF.Barline.type.NONE);
stavesmo110486.setContext(context);
stavesmo110486.draw();
smo110486v0.draw(context, stavesmo110486);
smo115235.setContext(context);
smo115235.draw();
const stavesmo113343 = new VF.Stave(368, 1287, 295);
stavesmo113343.setAttribute('id', 'stavesmo113343');
stavesmo113343.setBegBarType(VF.Barline.type.NONE);
stavesmo113343.setContext(context);
stavesmo113343.draw();
smo113343v0.draw(context, stavesmo113343);
smo115238.setContext(context);
smo115238.draw();
smo115239.setContext(context);
smo115239.draw();
const fmtsmo11050814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo110508v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110508v0ar = [];
const smo110487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110487.setAttribute('id', 'smo110487');
smo110508v0ar.push(smo110487);
const smo110489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110489.setAttribute('id', 'smo110489');
smo110508v0ar.push(smo110489);
const smo110490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110490.setAttribute('id', 'smo110490');
smo110508v0ar.push(smo110490);
const smo110491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110491.setAttribute('id', 'smo110491');
smo110508v0ar.push(smo110491);
const smo110492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110492.setAttribute('id', 'smo110492');
smo110508v0ar.push(smo110492);
const smo110493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo110493.setAttribute('id', 'smo110493');
smo110508v0ar.push(smo110493);
const smo110494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110494.setAttribute('id', 'smo110494');
smo110508v0ar.push(smo110494);
smo110508v0.addTickables(smo110508v0ar)
fmtsmo11050814.joinVoices([smo110508v0]);
const fmtsmo11336114 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo113361v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113361v0ar = [];
const smo113344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113344.setAttribute('id', 'smo113344');
smo113361v0ar.push(smo113344);
const smo113345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113345.setAttribute('id', 'smo113345');
smo113361v0ar.push(smo113345);
const smo113346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113346.setAttribute('id', 'smo113346');
smo113361v0ar.push(smo113346);
const smo113347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo113347.setAttribute('id', 'smo113347');
smo113361v0ar.push(smo113347);
smo113361v0.addTickables(smo113361v0ar)
fmtsmo11336114.joinVoices([smo113361v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115242 = smo110487.getStemDirection();
smo110487.setStemDirection(dirsmo115242);
smo110489.setStemDirection(dirsmo115242);
smo110490.setStemDirection(dirsmo115242);
smo110491.setStemDirection(dirsmo115242);
const smo115242 = new VF.Beam([smo110487,smo110489,smo110490,smo110491]);
const dirsmo115243 = smo110492.getStemDirection();
smo110492.setStemDirection(dirsmo115243);
smo110493.setStemDirection(dirsmo115243);
smo110494.setStemDirection(dirsmo115243);
const smo115243 = new VF.Beam([smo110492,smo110493,smo110494]);
const dirsmo115246 = smo113344.getStemDirection();
smo113344.setStemDirection(dirsmo115246);
smo113345.setStemDirection(dirsmo115246);
const smo115246 = new VF.Beam([smo113344,smo113345]);
const dirsmo115247 = smo113346.getStemDirection();
smo113346.setStemDirection(dirsmo115247);
smo113347.setStemDirection(dirsmo115247);
const smo115247 = new VF.Beam([smo113346,smo113347]);
 
// formatting measures in staff group smo109454
fmtsmo11050814.format([smo110508v0,smo113361v0], 281);
const stavesmo110508 = new VF.Stave(663, 1132, 295);
stavesmo110508.setAttribute('id', 'stavesmo110508');
stavesmo110508.setBegBarType(VF.Barline.type.NONE);
stavesmo110508.setContext(context);
stavesmo110508.draw();
smo110508v0.draw(context, stavesmo110508);
smo115242.setContext(context);
smo115242.draw();
smo115243.setContext(context);
smo115243.draw();
const stavesmo113361 = new VF.Stave(663, 1287, 295);
stavesmo113361.setAttribute('id', 'stavesmo113361');
stavesmo113361.setBegBarType(VF.Barline.type.NONE);
stavesmo113361.setContext(context);
stavesmo113361.draw();
smo113361v0.draw(context, stavesmo113361);
smo115246.setContext(context);
smo115246.draw();
smo115247.setContext(context);
smo115247.draw();
const fmtsmo11052615 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo110526v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110526v0ar = [];
const smo110509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110509.setAttribute('id', 'smo110509');
smo110526v0ar.push(smo110509);
const smo110510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110510.setAttribute('id', 'smo110510');
smo110526v0ar.push(smo110510);
const smo110511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110511.setAttribute('id', 'smo110511');
smo110526v0ar.push(smo110511);
const smo110512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo110512.setAttribute('id', 'smo110512');
smo110526v0ar.push(smo110512);
smo110526v0.addTickables(smo110526v0ar)
fmtsmo11052615.joinVoices([smo110526v0]);
const fmtsmo11337915 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo113379v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113379v0ar = [];
const smo113362 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113362.setAttribute('id', 'smo113362');
smo113379v0ar.push(smo113362);
const smo113363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo113363.setAttribute('id', 'smo113363');
smo113379v0ar.push(smo113363);
const smo113364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113364.setAttribute('id', 'smo113364');
smo113379v0ar.push(smo113364);
const smo113365 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo113365.setAttribute('id', 'smo113365');
smo113379v0ar.push(smo113365);
smo113379v0.addTickables(smo113379v0ar)
fmtsmo11337915.joinVoices([smo113379v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115250 = smo110510.getStemDirection();
smo110510.setStemDirection(dirsmo115250);
smo110511.setStemDirection(dirsmo115250);
smo110512.setStemDirection(dirsmo115250);
const smo115250 = new VF.Beam([smo110510,smo110511,smo110512]);
const dirsmo115253 = smo113362.getStemDirection();
smo113362.setStemDirection(dirsmo115253);
smo113363.setStemDirection(dirsmo115253);
const smo115253 = new VF.Beam([smo113362,smo113363]);
 
// formatting measures in staff group smo109454
fmtsmo11052615.format([smo110526v0,smo113379v0], 281);
const stavesmo110526 = new VF.Stave(958, 1132, 295);
stavesmo110526.setAttribute('id', 'stavesmo110526');
stavesmo110526.setBegBarType(VF.Barline.type.NONE);
stavesmo110526.setContext(context);
stavesmo110526.draw();
smo110526v0.draw(context, stavesmo110526);
smo115250.setContext(context);
smo115250.draw();
const stavesmo113379 = new VF.Stave(958, 1287, 295);
stavesmo113379.setAttribute('id', 'stavesmo113379');
stavesmo113379.setBegBarType(VF.Barline.type.NONE);
stavesmo113379.setContext(context);
stavesmo113379.draw();
smo113379v0.draw(context, stavesmo113379);
smo115253.setContext(context);
smo115253.draw();
const fmtsmo11054816 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo110548v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110548v0ar = [];
const smo110527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110527.setAttribute('id', 'smo110527');
smo110548v0ar.push(smo110527);
const smo110528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110528.setAttribute('id', 'smo110528');
smo110548v0ar.push(smo110528);
const smo110529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo110529.setAttribute('id', 'smo110529');
smo110548v0ar.push(smo110529);
const smo110530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110530.setAttribute('id', 'smo110530');
smo110548v0ar.push(smo110530);
const smo110531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110531.setAttribute('id', 'smo110531');
smo110548v0ar.push(smo110531);
const smo110532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110532.setAttribute('id', 'smo110532');
smo110548v0ar.push(smo110532);
const smo110533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo110533.setAttribute('id', 'smo110533');
smo110548v0ar.push(smo110533);
const smo110534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110534.setAttribute('id', 'smo110534');
smo110548v0ar.push(smo110534);
smo110548v0.addTickables(smo110548v0ar)
fmtsmo11054816.joinVoices([smo110548v0]);
const fmtsmo11339716 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo113397v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113397v0ar = [];
const smo113380 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo113380.setAttribute('id', 'smo113380');
smo113397v0ar.push(smo113380);
const smo113381 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113381.setAttribute('id', 'smo113381');
smo113397v0ar.push(smo113381);
const smo113382 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo113382.setAttribute('id', 'smo113382');
const smo1133820acc = new VF.Accidental('b');
smo113382.addModifier(smo1133820acc, 0);
const smo1133821acc = new VF.Accidental('b');
smo113382.addModifier(smo1133821acc, 1);
smo113397v0ar.push(smo113382);
const smo113383 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113383.setAttribute('id', 'smo113383');
smo113397v0ar.push(smo113383);
smo113397v0.addTickables(smo113397v0ar)
fmtsmo11339716.joinVoices([smo113397v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115256 = smo110527.getStemDirection();
smo110527.setStemDirection(dirsmo115256);
smo110528.setStemDirection(dirsmo115256);
smo110529.setStemDirection(dirsmo115256);
smo110530.setStemDirection(dirsmo115256);
const smo115256 = new VF.Beam([smo110527,smo110528,smo110529,smo110530]);
const dirsmo115257 = smo110531.getStemDirection();
smo110531.setStemDirection(dirsmo115257);
smo110532.setStemDirection(dirsmo115257);
smo110533.setStemDirection(dirsmo115257);
smo110534.setStemDirection(dirsmo115257);
const smo115257 = new VF.Beam([smo110531,smo110532,smo110533,smo110534]);
const dirsmo115260 = smo113380.getStemDirection();
smo113380.setStemDirection(dirsmo115260);
smo113381.setStemDirection(dirsmo115260);
const smo115260 = new VF.Beam([smo113380,smo113381]);
const dirsmo115261 = smo113382.getStemDirection();
smo113382.setStemDirection(dirsmo115261);
smo113383.setStemDirection(dirsmo115261);
const smo115261 = new VF.Beam([smo113382,smo113383]);
 
// formatting measures in staff group smo109454
fmtsmo11054816.format([smo110548v0,smo113397v0], 281);
const stavesmo110548 = new VF.Stave(1253, 1132, 295);
stavesmo110548.setAttribute('id', 'stavesmo110548');
stavesmo110548.setBegBarType(VF.Barline.type.NONE);
stavesmo110548.setContext(context);
stavesmo110548.draw();
smo110548v0.draw(context, stavesmo110548);
smo115256.setContext(context);
smo115256.draw();
smo115257.setContext(context);
smo115257.draw();
const stavesmo113397 = new VF.Stave(1253, 1287, 295);
stavesmo113397.setAttribute('id', 'stavesmo113397');
stavesmo113397.setBegBarType(VF.Barline.type.NONE);
stavesmo113397.setContext(context);
stavesmo113397.draw();
smo113397v0.draw(context, stavesmo113397);
smo115260.setContext(context);
smo115260.draw();
smo115261.setContext(context);
smo115261.draw();
const fmtsmo11057017 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo110570v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110570v0ar = [];
const smo110549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110549.setAttribute('id', 'smo110549');
smo110570v0ar.push(smo110549);
const smo110550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110550.setAttribute('id', 'smo110550');
smo110570v0ar.push(smo110550);
const smo110551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo110551.setAttribute('id', 'smo110551');
smo110570v0ar.push(smo110551);
const smo110552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110552.setAttribute('id', 'smo110552');
smo110570v0ar.push(smo110552);
const smo110553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","en/6/n"]}'))
smo110553.setAttribute('id', 'smo110553');
smo110570v0ar.push(smo110553);
const smo110554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110554.setAttribute('id', 'smo110554');
smo110570v0ar.push(smo110554);
const smo110555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","dn/6/n"]}'))
smo110555.setAttribute('id', 'smo110555');
smo110570v0ar.push(smo110555);
const smo110556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo110556.setAttribute('id', 'smo110556');
smo110570v0ar.push(smo110556);
smo110570v0.addTickables(smo110570v0ar)
fmtsmo11057017.joinVoices([smo110570v0]);
const fmtsmo11341517 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo113415v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113415v0ar = [];
const smo113398 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo113398.setAttribute('id', 'smo113398');
smo113415v0ar.push(smo113398);
const smo113399 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo113399.setAttribute('id', 'smo113399');
smo113415v0ar.push(smo113399);
const smo113400 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo113400.setAttribute('id', 'smo113400');
const smo1134000acc = new VF.Accidental('b');
smo113400.addModifier(smo1134000acc, 0);
const smo1134001acc = new VF.Accidental('b');
smo113400.addModifier(smo1134001acc, 1);
smo113415v0ar.push(smo113400);
const smo113401 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo113401.setAttribute('id', 'smo113401');
smo113415v0ar.push(smo113401);
smo113415v0.addTickables(smo113415v0ar)
fmtsmo11341517.joinVoices([smo113415v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115264 = smo110549.getStemDirection();
smo110549.setStemDirection(dirsmo115264);
smo110550.setStemDirection(dirsmo115264);
smo110551.setStemDirection(dirsmo115264);
smo110552.setStemDirection(dirsmo115264);
const smo115264 = new VF.Beam([smo110549,smo110550,smo110551,smo110552]);
const dirsmo115265 = smo110553.getStemDirection();
smo110553.setStemDirection(dirsmo115265);
smo110554.setStemDirection(dirsmo115265);
smo110555.setStemDirection(dirsmo115265);
smo110556.setStemDirection(dirsmo115265);
const smo115265 = new VF.Beam([smo110553,smo110554,smo110555,smo110556]);
const dirsmo115268 = smo113398.getStemDirection();
smo113398.setStemDirection(dirsmo115268);
smo113399.setStemDirection(dirsmo115268);
const smo115268 = new VF.Beam([smo113398,smo113399]);
const dirsmo115269 = smo113400.getStemDirection();
smo113400.setStemDirection(dirsmo115269);
smo113401.setStemDirection(dirsmo115269);
const smo115269 = new VF.Beam([smo113400,smo113401]);
 
// formatting measures in staff group smo109454
fmtsmo11057017.format([smo110570v0,smo113415v0], 281);
const stavesmo110570 = new VF.Stave(1548, 1132, 295);
stavesmo110570.setAttribute('id', 'stavesmo110570');
stavesmo110570.setBegBarType(VF.Barline.type.NONE);
stavesmo110570.setContext(context);
stavesmo110570.draw();
smo110570v0.draw(context, stavesmo110570);
smo115264.setContext(context);
smo115264.draw();
smo115265.setContext(context);
smo115265.draw();
const stavesmo113415 = new VF.Stave(1548, 1287, 295);
stavesmo113415.setAttribute('id', 'stavesmo113415');
stavesmo113415.setBegBarType(VF.Barline.type.NONE);
stavesmo113415.setContext(context);
stavesmo113415.draw();
smo113415v0.draw(context, stavesmo113415);
smo115268.setContext(context);
smo115268.draw();
smo115269.setContext(context);
smo115269.draw();
const rightsmo109454stavesmo1105701 = new VF.StaveConnector(stavesmo110570, stavesmo113415).setType(0);
rightsmo109454stavesmo1105701.setContext(context).draw();
const fmtsmo11059118 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo110591v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110591v0ar = [];
const smo110571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110571.setAttribute('id', 'smo110571');
smo110591v0ar.push(smo110571);
const smo110572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110572.setAttribute('id', 'smo110572');
smo110591v0ar.push(smo110572);
const smo110573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110573.setAttribute('id', 'smo110573');
smo110591v0ar.push(smo110573);
const smo110574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110574.setAttribute('id', 'smo110574');
smo110591v0ar.push(smo110574);
const smo110575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n","gn/5/n","en/6/n"]}'))
smo110575.setAttribute('id', 'smo110575');
smo110591v0ar.push(smo110575);
const smo110576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n","bn/5/n"]}'))
smo110576.setAttribute('id', 'smo110576');
smo110591v0ar.push(smo110576);
const smo110577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","dn/6/n"]}'))
smo110577.setAttribute('id', 'smo110577');
smo110591v0ar.push(smo110577);
smo110591v0.addTickables(smo110591v0ar)
fmtsmo11059118.joinVoices([smo110591v0]);
const fmtsmo11343318 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo113433v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113433v0ar = [];
const smo113416 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113416.setAttribute('id', 'smo113416');
smo113433v0ar.push(smo113416);
const smo113417 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113417.setAttribute('id', 'smo113417');
smo113433v0ar.push(smo113417);
const smo113418 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113418.setAttribute('id', 'smo113418');
smo113433v0ar.push(smo113418);
const smo113419 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo113419.setAttribute('id', 'smo113419');
smo113433v0ar.push(smo113419);
smo113433v0.addTickables(smo113433v0ar)
fmtsmo11343318.joinVoices([smo113433v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115280 = smo110571.getStemDirection();
smo110571.setStemDirection(dirsmo115280);
smo110572.setStemDirection(dirsmo115280);
smo110573.setStemDirection(dirsmo115280);
smo110574.setStemDirection(dirsmo115280);
const smo115280 = new VF.Beam([smo110571,smo110572,smo110573,smo110574]);
const dirsmo115281 = smo110575.getStemDirection();
smo110575.setStemDirection(dirsmo115281);
smo110576.setStemDirection(dirsmo115281);
smo110577.setStemDirection(dirsmo115281);
const smo115281 = new VF.Beam([smo110575,smo110576,smo110577]);
const dirsmo115284 = smo113416.getStemDirection();
smo113416.setStemDirection(dirsmo115284);
smo113417.setStemDirection(dirsmo115284);
const smo115284 = new VF.Beam([smo113416,smo113417]);
const dirsmo115285 = smo113418.getStemDirection();
smo113418.setStemDirection(dirsmo115285);
smo113419.setStemDirection(dirsmo115285);
const smo115285 = new VF.Beam([smo113418,smo113419]);
 
// formatting measures in staff group smo109454
fmtsmo11059118.format([smo110591v0,smo113433v0], 237);
const stavesmo110591 = new VF.Stave(73, 1481, 295);
stavesmo110591.setAttribute('id', 'stavesmo110591');
stavesmo110591.setBegBarType(1);
stavesmo110591.addClef('treble');
stavesmo110591.setContext(context);
stavesmo110591.draw();
smo110591v0.draw(context, stavesmo110591);
smo115280.setContext(context);
smo115280.draw();
smo115281.setContext(context);
smo115281.draw();
const stavesmo113433 = new VF.Stave(73, 1625, 295);
stavesmo113433.setAttribute('id', 'stavesmo113433');
stavesmo113433.setBegBarType(1);
stavesmo113433.addClef('bass');
stavesmo113433.setContext(context);
stavesmo113433.draw();
smo113433v0.draw(context, stavesmo113433);
smo115284.setContext(context);
smo115284.draw();
smo115285.setContext(context);
smo115285.draw();
const leftsmo109454stavesmo1105911 = new VF.StaveConnector(stavesmo110591, stavesmo113433).setType(3);
leftsmo109454stavesmo1105911.setContext(context).draw();
const fmtsmo11061019 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo110610v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110610v0ar = [];
const smo110592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110592.setAttribute('id', 'smo110592');
smo110610v0ar.push(smo110592);
const smo110593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110593.setAttribute('id', 'smo110593');
smo110610v0ar.push(smo110593);
const smo110594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo110594.setAttribute('id', 'smo110594');
smo110610v0ar.push(smo110594);
const smo110595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo110595.setAttribute('id', 'smo110595');
const smo1105950acc = new VF.Accidental('b');
smo110595.addModifier(smo1105950acc, 0);
smo110610v0ar.push(smo110595);
smo110610v0.addTickables(smo110610v0ar)
fmtsmo11061019.joinVoices([smo110610v0]);
const fmtsmo11345219 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo113452v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113452v0ar = [];
const smo113434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo113434.setAttribute('id', 'smo113434');
smo113452v0ar.push(smo113434);
const smo113435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113435.setAttribute('id', 'smo113435');
smo113452v0ar.push(smo113435);
const smo113436 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo113436.setAttribute('id', 'smo113436');
smo113452v0ar.push(smo113436);
const smo113437 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo113437.setAttribute('id', 'smo113437');
smo113452v0ar.push(smo113437);
smo113452v0.addTickables(smo113452v0ar)
fmtsmo11345219.joinVoices([smo113452v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115288 = smo110593.getStemDirection();
smo110593.setStemDirection(dirsmo115288);
smo110594.setStemDirection(dirsmo115288);
smo110595.setStemDirection(dirsmo115288);
const smo115288 = new VF.Beam([smo110593,smo110594,smo110595]);
const dirsmo115290 = smo113434.getStemDirection();
smo113434.setStemDirection(dirsmo115290);
smo113435.setStemDirection(dirsmo115290);
const smo115290 = new VF.Beam([smo113434,smo113435]);
const dirsmo115291 = smo113436.getStemDirection();
smo113436.setStemDirection(dirsmo115291);
smo113437.setStemDirection(dirsmo115291);
const smo115291 = new VF.Beam([smo113436,smo113437]);
 
// formatting measures in staff group smo109454
fmtsmo11061019.format([smo110610v0,smo113452v0], 277);
const stavesmo110610 = new VF.Stave(368, 1481, 295);
stavesmo110610.setAttribute('id', 'stavesmo110610');
stavesmo110610.setBegBarType(VF.Barline.type.NONE);
stavesmo110610.setEndBarType(5);
stavesmo110610.setContext(context);
stavesmo110610.draw();
smo110610v0.draw(context, stavesmo110610);
smo115288.setContext(context);
smo115288.draw();
const stavesmo113452 = new VF.Stave(368, 1625, 295);
stavesmo113452.setAttribute('id', 'stavesmo113452');
stavesmo113452.setBegBarType(VF.Barline.type.NONE);
stavesmo113452.setEndBarType(5);
stavesmo113452.setContext(context);
stavesmo113452.draw();
smo113452v0.draw(context, stavesmo113452);
smo115290.setContext(context);
smo115290.draw();
smo115291.setContext(context);
smo115291.draw();
const fmtsmo11063020 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo110630v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110630v0ar = [];
const smo110611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110611.setAttribute('id', 'smo110611');
smo110630v0ar.push(smo110611);
const smo110612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","cn/6/n"]}'))
smo110612.setAttribute('id', 'smo110612');
smo110630v0ar.push(smo110612);
const smo110613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo110613.setAttribute('id', 'smo110613');
smo110630v0ar.push(smo110613);
const smo110614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo110614.setAttribute('id', 'smo110614');
smo110630v0ar.push(smo110614);
const smo110615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo110615.setAttribute('id', 'smo110615');
const smo1106150acc = new VF.Accidental('b');
smo110615.addModifier(smo1106150acc, 0);
const smo1106151acc = new VF.Accidental('b');
smo110615.addModifier(smo1106151acc, 1);
const smo1106152acc = new VF.Accidental('b');
smo110615.addModifier(smo1106152acc, 2);
smo110630v0ar.push(smo110615);
smo110630v0.addTickables(smo110630v0ar)
fmtsmo11063020.joinVoices([smo110630v0]);
const fmtsmo11347120 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo113471v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113471v0ar = [];
const smo113453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","gn/3/n","cn/4/n"]}'))
smo113453.setAttribute('id', 'smo113453');
smo113471v0ar.push(smo113453);
const smo113454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo113454.setAttribute('id', 'smo113454');
smo113471v0ar.push(smo113454);
const smo113455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo113455.setAttribute('id', 'smo113455');
smo113471v0ar.push(smo113455);
const smo113456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo113456.setAttribute('id', 'smo113456');
smo113471v0ar.push(smo113456);
smo113471v0.addTickables(smo113471v0ar)
fmtsmo11347120.joinVoices([smo113471v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115293 = smo110612.getStemDirection();
smo110612.setStemDirection(dirsmo115293);
smo110613.setStemDirection(dirsmo115293);
smo110614.setStemDirection(dirsmo115293);
smo110615.setStemDirection(dirsmo115293);
const smo115293 = new VF.Beam([smo110612,smo110613,smo110614,smo110615]);
const dirsmo115296 = smo113453.getStemDirection();
smo113453.setStemDirection(dirsmo115296);
smo113454.setStemDirection(dirsmo115296);
const smo115296 = new VF.Beam([smo113453,smo113454]);
 
// formatting measures in staff group smo109454
fmtsmo11063020.format([smo110630v0,smo113471v0], 281);
const stavesmo110630 = new VF.Stave(663, 1481, 295);
stavesmo110630.setAttribute('id', 'stavesmo110630');
stavesmo110630.setBegBarType(VF.Barline.type.NONE);
stavesmo110630.setContext(context);
stavesmo110630.draw();
smo110630v0.draw(context, stavesmo110630);
smo115293.setContext(context);
smo115293.draw();
const stavesmo113471 = new VF.Stave(663, 1625, 295);
stavesmo113471.setAttribute('id', 'stavesmo113471');
stavesmo113471.setBegBarType(VF.Barline.type.NONE);
stavesmo113471.setContext(context);
stavesmo113471.draw();
smo113471v0.draw(context, stavesmo113471);
smo115296.setContext(context);
smo115296.draw();
const fmtsmo11065121 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo110651v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110651v0ar = [];
const smo110631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110631.setAttribute('id', 'smo110631');
smo110651v0ar.push(smo110631);
const smo110632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo110632.setAttribute('id', 'smo110632');
smo110651v0ar.push(smo110632);
const smo110633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110633.setAttribute('id', 'smo110633');
smo110651v0ar.push(smo110633);
const smo110634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110634.setAttribute('id', 'smo110634');
smo110651v0ar.push(smo110634);
const smo110635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo110635.setAttribute('id', 'smo110635');
smo110651v0ar.push(smo110635);
const smo110636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo110636.setAttribute('id', 'smo110636');
smo110651v0ar.push(smo110636);
const smo110637 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo110637.setAttribute('id', 'smo110637');
const smo1106370acc = new VF.Accidental('b');
smo110637.addModifier(smo1106370acc, 0);
const smo1106371acc = new VF.Accidental('b');
smo110637.addModifier(smo1106371acc, 1);
const smo1106372acc = new VF.Accidental('b');
smo110637.addModifier(smo1106372acc, 2);
smo110651v0ar.push(smo110637);
smo110651v0.addTickables(smo110651v0ar)
fmtsmo11065121.joinVoices([smo110651v0]);
const fmtsmo11348921 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo113489v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113489v0ar = [];
const smo113472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo113472.setAttribute('id', 'smo113472');
smo113489v0ar.push(smo113472);
const smo113473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113473.setAttribute('id', 'smo113473');
smo113489v0ar.push(smo113473);
const smo113474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113474.setAttribute('id', 'smo113474');
smo113489v0ar.push(smo113474);
const smo113475 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113475.setAttribute('id', 'smo113475');
smo113489v0ar.push(smo113475);
smo113489v0.addTickables(smo113489v0ar)
fmtsmo11348921.joinVoices([smo113489v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115299 = smo110631.getStemDirection();
smo110631.setStemDirection(dirsmo115299);
smo110632.setStemDirection(dirsmo115299);
smo110633.setStemDirection(dirsmo115299);
const smo115299 = new VF.Beam([smo110631,smo110632,smo110633]);
const dirsmo115300 = smo110634.getStemDirection();
smo110634.setStemDirection(dirsmo115300);
smo110635.setStemDirection(dirsmo115300);
smo110636.setStemDirection(dirsmo115300);
smo110637.setStemDirection(dirsmo115300);
const smo115300 = new VF.Beam([smo110634,smo110635,smo110636,smo110637]);
const dirsmo115302 = smo113472.getStemDirection();
smo113472.setStemDirection(dirsmo115302);
smo113473.setStemDirection(dirsmo115302);
const smo115302 = new VF.Beam([smo113472,smo113473]);
const dirsmo115303 = smo113474.getStemDirection();
smo113474.setStemDirection(dirsmo115303);
smo113475.setStemDirection(dirsmo115303);
const smo115303 = new VF.Beam([smo113474,smo113475]);
 
// formatting measures in staff group smo109454
fmtsmo11065121.format([smo110651v0,smo113489v0], 272);
const stavesmo110651 = new VF.Stave(958, 1481, 295);
stavesmo110651.setAttribute('id', 'stavesmo110651');
stavesmo110651.setBegBarType(4);
stavesmo110651.setContext(context);
stavesmo110651.draw();
smo110651v0.draw(context, stavesmo110651);
smo115299.setContext(context);
smo115299.draw();
smo115300.setContext(context);
smo115300.draw();
const stavesmo113489 = new VF.Stave(958, 1625, 295);
stavesmo113489.setAttribute('id', 'stavesmo113489');
stavesmo113489.setBegBarType(4);
stavesmo113489.setContext(context);
stavesmo113489.draw();
smo113489v0.draw(context, stavesmo113489);
smo115302.setContext(context);
smo115302.draw();
smo115303.setContext(context);
smo115303.draw();
const fmtsmo11067222 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo110672v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110672v0ar = [];
const smo110652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110652.setAttribute('id', 'smo110652');
smo110672v0ar.push(smo110652);
const smo110653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo110653.setAttribute('id', 'smo110653');
smo110672v0ar.push(smo110653);
const smo110654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110654.setAttribute('id', 'smo110654');
smo110672v0ar.push(smo110654);
const smo110655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110655.setAttribute('id', 'smo110655');
smo110672v0ar.push(smo110655);
const smo110656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110656.setAttribute('id', 'smo110656');
smo110672v0ar.push(smo110656);
const smo110657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110657.setAttribute('id', 'smo110657');
smo110672v0ar.push(smo110657);
const smo110658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110658.setAttribute('id', 'smo110658');
smo110672v0ar.push(smo110658);
smo110672v0.addTickables(smo110672v0ar)
fmtsmo11067222.joinVoices([smo110672v0]);
const fmtsmo11350722 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo113507v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113507v0ar = [];
const smo113490 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113490.setAttribute('id', 'smo113490');
smo113507v0ar.push(smo113490);
const smo113491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113491.setAttribute('id', 'smo113491');
smo113507v0ar.push(smo113491);
const smo113492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113492.setAttribute('id', 'smo113492');
smo113507v0ar.push(smo113492);
const smo113493 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113493.setAttribute('id', 'smo113493');
smo113507v0ar.push(smo113493);
smo113507v0.addTickables(smo113507v0ar)
fmtsmo11350722.joinVoices([smo113507v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115305 = smo110652.getStemDirection();
smo110652.setStemDirection(dirsmo115305);
smo110653.setStemDirection(dirsmo115305);
smo110654.setStemDirection(dirsmo115305);
const smo115305 = new VF.Beam([smo110652,smo110653,smo110654]);
const dirsmo115306 = smo110655.getStemDirection();
smo110655.setStemDirection(dirsmo115306);
smo110656.setStemDirection(dirsmo115306);
smo110657.setStemDirection(dirsmo115306);
smo110658.setStemDirection(dirsmo115306);
const smo115306 = new VF.Beam([smo110655,smo110656,smo110657,smo110658]);
const dirsmo115309 = smo113490.getStemDirection();
smo113490.setStemDirection(dirsmo115309);
smo113491.setStemDirection(dirsmo115309);
const smo115309 = new VF.Beam([smo113490,smo113491]);
const dirsmo115310 = smo113492.getStemDirection();
smo113492.setStemDirection(dirsmo115310);
smo113493.setStemDirection(dirsmo115310);
const smo115310 = new VF.Beam([smo113492,smo113493]);
 
// formatting measures in staff group smo109454
fmtsmo11067222.format([smo110672v0,smo113507v0], 281);
const stavesmo110672 = new VF.Stave(1253, 1481, 295);
stavesmo110672.setAttribute('id', 'stavesmo110672');
stavesmo110672.setBegBarType(VF.Barline.type.NONE);
stavesmo110672.setContext(context);
stavesmo110672.draw();
smo110672v0.draw(context, stavesmo110672);
smo115305.setContext(context);
smo115305.draw();
smo115306.setContext(context);
smo115306.draw();
const stavesmo113507 = new VF.Stave(1253, 1625, 295);
stavesmo113507.setAttribute('id', 'stavesmo113507');
stavesmo113507.setBegBarType(VF.Barline.type.NONE);
stavesmo113507.setContext(context);
stavesmo113507.draw();
smo113507v0.draw(context, stavesmo113507);
smo115309.setContext(context);
smo115309.draw();
smo115310.setContext(context);
smo115310.draw();
const fmtsmo11069423 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo110694v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110694v0ar = [];
const smo110673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo110673.setAttribute('id', 'smo110673');
smo110694v0ar.push(smo110673);
const smo110674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo110674.setAttribute('id', 'smo110674');
smo110694v0ar.push(smo110674);
const smo110675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110675.setAttribute('id', 'smo110675');
smo110694v0ar.push(smo110675);
const smo110676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110676.setAttribute('id', 'smo110676');
smo110694v0ar.push(smo110676);
const smo110677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110677.setAttribute('id', 'smo110677');
smo110694v0ar.push(smo110677);
const smo110678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110678.setAttribute('id', 'smo110678');
smo110694v0ar.push(smo110678);
const smo110679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo110679.setAttribute('id', 'smo110679');
smo110694v0ar.push(smo110679);
const smo110680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110680.setAttribute('id', 'smo110680');
smo110694v0ar.push(smo110680);
smo110694v0.addTickables(smo110694v0ar)
fmtsmo11069423.joinVoices([smo110694v0]);
const fmtsmo11352523 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo113525v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113525v0ar = [];
const smo113508 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo113508.setAttribute('id', 'smo113508');
smo113525v0ar.push(smo113508);
const smo113509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo113509.setAttribute('id', 'smo113509');
smo113525v0ar.push(smo113509);
const smo113510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo113510.setAttribute('id', 'smo113510');
smo113525v0ar.push(smo113510);
const smo113511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n","cn/4/n","fn/4/n"]}'))
smo113511.setAttribute('id', 'smo113511');
const smo1135110acc = new VF.Accidental('b');
smo113511.addModifier(smo1135110acc, 0);
smo113525v0ar.push(smo113511);
smo113525v0.addTickables(smo113525v0ar)
fmtsmo11352523.joinVoices([smo113525v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115313 = smo110673.getStemDirection();
smo110673.setStemDirection(dirsmo115313);
smo110674.setStemDirection(dirsmo115313);
smo110675.setStemDirection(dirsmo115313);
smo110676.setStemDirection(dirsmo115313);
const smo115313 = new VF.Beam([smo110673,smo110674,smo110675,smo110676]);
const dirsmo115314 = smo110677.getStemDirection();
smo110677.setStemDirection(dirsmo115314);
smo110678.setStemDirection(dirsmo115314);
smo110679.setStemDirection(dirsmo115314);
smo110680.setStemDirection(dirsmo115314);
const smo115314 = new VF.Beam([smo110677,smo110678,smo110679,smo110680]);
const dirsmo115317 = smo113508.getStemDirection();
smo113508.setStemDirection(dirsmo115317);
smo113509.setStemDirection(dirsmo115317);
const smo115317 = new VF.Beam([smo113508,smo113509]);
const dirsmo115318 = smo113510.getStemDirection();
smo113510.setStemDirection(dirsmo115318);
smo113511.setStemDirection(dirsmo115318);
const smo115318 = new VF.Beam([smo113510,smo113511]);
 
// formatting measures in staff group smo109454
fmtsmo11069423.format([smo110694v0,smo113525v0], 281);
const stavesmo110694 = new VF.Stave(1548, 1481, 295);
stavesmo110694.setAttribute('id', 'stavesmo110694');
stavesmo110694.setBegBarType(VF.Barline.type.NONE);
stavesmo110694.setContext(context);
stavesmo110694.draw();
smo110694v0.draw(context, stavesmo110694);
smo115313.setContext(context);
smo115313.draw();
smo115314.setContext(context);
smo115314.draw();
const stavesmo113525 = new VF.Stave(1548, 1625, 295);
stavesmo113525.setAttribute('id', 'stavesmo113525');
stavesmo113525.setBegBarType(VF.Barline.type.NONE);
stavesmo113525.setContext(context);
stavesmo113525.draw();
smo113525v0.draw(context, stavesmo113525);
smo115317.setContext(context);
smo115317.draw();
smo115318.setContext(context);
smo115318.draw();
const rightsmo109454stavesmo1106941 = new VF.StaveConnector(stavesmo110694, stavesmo113525).setType(0);
rightsmo109454stavesmo1106941.setContext(context).draw();
const fmtsmo11071624 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo110716v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110716v0ar = [];
const smo110695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo110695.setAttribute('id', 'smo110695');
smo110716v0ar.push(smo110695);
const smo110696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110696.setAttribute('id', 'smo110696');
smo110716v0ar.push(smo110696);
const smo110697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo110697.setAttribute('id', 'smo110697');
smo110716v0ar.push(smo110697);
const smo110698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo110698.setAttribute('id', 'smo110698');
smo110716v0ar.push(smo110698);
const smo110699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo110699.setAttribute('id', 'smo110699');
smo110716v0ar.push(smo110699);
const smo110700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo110700.setAttribute('id', 'smo110700');
smo110716v0ar.push(smo110700);
const smo110701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo110701.setAttribute('id', 'smo110701');
smo110716v0ar.push(smo110701);
const smo110702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo110702.setAttribute('id', 'smo110702');
smo110716v0ar.push(smo110702);
smo110716v0.addTickables(smo110716v0ar)
fmtsmo11071624.joinVoices([smo110716v0]);
const fmtsmo11354324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo113543v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113543v0ar = [];
const smo113526 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo113526.setAttribute('id', 'smo113526');
smo113543v0ar.push(smo113526);
const smo113527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113527.setAttribute('id', 'smo113527');
smo113543v0ar.push(smo113527);
const smo113528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113528.setAttribute('id', 'smo113528');
smo113543v0ar.push(smo113528);
const smo113529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113529.setAttribute('id', 'smo113529');
smo113543v0ar.push(smo113529);
smo113543v0.addTickables(smo113543v0ar)
fmtsmo11354324.joinVoices([smo113543v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115329 = smo110695.getStemDirection();
smo110695.setStemDirection(dirsmo115329);
smo110696.setStemDirection(dirsmo115329);
smo110697.setStemDirection(dirsmo115329);
smo110698.setStemDirection(dirsmo115329);
const smo115329 = new VF.Beam([smo110695,smo110696,smo110697,smo110698]);
const dirsmo115330 = smo110699.getStemDirection();
smo110699.setStemDirection(dirsmo115330);
smo110700.setStemDirection(dirsmo115330);
smo110701.setStemDirection(dirsmo115330);
smo110702.setStemDirection(dirsmo115330);
const smo115330 = new VF.Beam([smo110699,smo110700,smo110701,smo110702]);
const dirsmo115333 = smo113526.getStemDirection();
smo113526.setStemDirection(dirsmo115333);
smo113527.setStemDirection(dirsmo115333);
const smo115333 = new VF.Beam([smo113526,smo113527]);
const dirsmo115334 = smo113528.getStemDirection();
smo113528.setStemDirection(dirsmo115334);
smo113529.setStemDirection(dirsmo115334);
const smo115334 = new VF.Beam([smo113528,smo113529]);
 
// formatting measures in staff group smo109454
fmtsmo11071624.format([smo110716v0,smo113543v0], 237);
const stavesmo110716 = new VF.Stave(73, 1828, 295);
stavesmo110716.setAttribute('id', 'stavesmo110716');
stavesmo110716.setBegBarType(1);
stavesmo110716.addClef('treble');
stavesmo110716.setContext(context);
stavesmo110716.draw();
smo110716v0.draw(context, stavesmo110716);
smo115329.setContext(context);
smo115329.draw();
smo115330.setContext(context);
smo115330.draw();
const stavesmo113543 = new VF.Stave(73, 1988, 295);
stavesmo113543.setAttribute('id', 'stavesmo113543');
stavesmo113543.setBegBarType(1);
stavesmo113543.addClef('bass');
stavesmo113543.setContext(context);
stavesmo113543.draw();
smo113543v0.draw(context, stavesmo113543);
smo115333.setContext(context);
smo115333.draw();
smo115334.setContext(context);
smo115334.draw();
const leftsmo109454stavesmo1107161 = new VF.StaveConnector(stavesmo110716, stavesmo113543).setType(3);
leftsmo109454stavesmo1107161.setContext(context).draw();
const fmtsmo11073725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo110737v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110737v0ar = [];
const smo110717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110717.setAttribute('id', 'smo110717');
smo110737v0ar.push(smo110717);
const smo110718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo110718.setAttribute('id', 'smo110718');
smo110737v0ar.push(smo110718);
const smo110719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110719.setAttribute('id', 'smo110719');
smo110737v0ar.push(smo110719);
const smo110720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110720.setAttribute('id', 'smo110720');
smo110737v0ar.push(smo110720);
const smo110721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo110721.setAttribute('id', 'smo110721');
smo110737v0ar.push(smo110721);
const smo110722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo110722.setAttribute('id', 'smo110722');
smo110737v0ar.push(smo110722);
const smo110723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo110723.setAttribute('id', 'smo110723');
const smo1107230acc = new VF.Accidental('b');
smo110723.addModifier(smo1107230acc, 0);
const smo1107231acc = new VF.Accidental('b');
smo110723.addModifier(smo1107231acc, 1);
const smo1107232acc = new VF.Accidental('b');
smo110723.addModifier(smo1107232acc, 2);
smo110737v0ar.push(smo110723);
smo110737v0.addTickables(smo110737v0ar)
fmtsmo11073725.joinVoices([smo110737v0]);
const fmtsmo11356125 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo113561v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113561v0ar = [];
const smo113544 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113544.setAttribute('id', 'smo113544');
smo113561v0ar.push(smo113544);
const smo113545 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113545.setAttribute('id', 'smo113545');
smo113561v0ar.push(smo113545);
const smo113546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113546.setAttribute('id', 'smo113546');
smo113561v0ar.push(smo113546);
const smo113547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113547.setAttribute('id', 'smo113547');
smo113561v0ar.push(smo113547);
smo113561v0.addTickables(smo113561v0ar)
fmtsmo11356125.joinVoices([smo113561v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115337 = smo110717.getStemDirection();
smo110717.setStemDirection(dirsmo115337);
smo110718.setStemDirection(dirsmo115337);
smo110719.setStemDirection(dirsmo115337);
const smo115337 = new VF.Beam([smo110717,smo110718,smo110719]);
const dirsmo115338 = smo110720.getStemDirection();
smo110720.setStemDirection(dirsmo115338);
smo110721.setStemDirection(dirsmo115338);
smo110722.setStemDirection(dirsmo115338);
smo110723.setStemDirection(dirsmo115338);
const smo115338 = new VF.Beam([smo110720,smo110721,smo110722,smo110723]);
const dirsmo115341 = smo113544.getStemDirection();
smo113544.setStemDirection(dirsmo115341);
smo113545.setStemDirection(dirsmo115341);
const smo115341 = new VF.Beam([smo113544,smo113545]);
const dirsmo115342 = smo113546.getStemDirection();
smo113546.setStemDirection(dirsmo115342);
smo113547.setStemDirection(dirsmo115342);
const smo115342 = new VF.Beam([smo113546,smo113547]);
 
// formatting measures in staff group smo109454
fmtsmo11073725.format([smo110737v0,smo113561v0], 281);
const stavesmo110737 = new VF.Stave(368, 1828, 295);
stavesmo110737.setAttribute('id', 'stavesmo110737');
stavesmo110737.setBegBarType(VF.Barline.type.NONE);
stavesmo110737.setContext(context);
stavesmo110737.draw();
smo110737v0.draw(context, stavesmo110737);
smo115337.setContext(context);
smo115337.draw();
smo115338.setContext(context);
smo115338.draw();
const stavesmo113561 = new VF.Stave(368, 1988, 295);
stavesmo113561.setAttribute('id', 'stavesmo113561');
stavesmo113561.setBegBarType(VF.Barline.type.NONE);
stavesmo113561.setContext(context);
stavesmo113561.draw();
smo113561v0.draw(context, stavesmo113561);
smo115341.setContext(context);
smo115341.draw();
smo115342.setContext(context);
smo115342.draw();
const fmtsmo11075826 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo110758v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110758v0ar = [];
const smo110738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110738.setAttribute('id', 'smo110738');
smo110758v0ar.push(smo110738);
const smo110739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo110739.setAttribute('id', 'smo110739');
smo110758v0ar.push(smo110739);
const smo110740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110740.setAttribute('id', 'smo110740');
smo110758v0ar.push(smo110740);
const smo110741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110741.setAttribute('id', 'smo110741');
smo110758v0ar.push(smo110741);
const smo110742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo110742.setAttribute('id', 'smo110742');
smo110758v0ar.push(smo110742);
const smo110743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo110743.setAttribute('id', 'smo110743');
smo110758v0ar.push(smo110743);
const smo110744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo110744.setAttribute('id', 'smo110744');
const smo1107440acc = new VF.Accidental('b');
smo110744.addModifier(smo1107440acc, 0);
smo110758v0ar.push(smo110744);
smo110758v0.addTickables(smo110758v0ar)
fmtsmo11075826.joinVoices([smo110758v0]);
const fmtsmo11357926 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo113579v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113579v0ar = [];
const smo113562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo113562.setAttribute('id', 'smo113562');
smo113579v0ar.push(smo113562);
const smo113563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113563.setAttribute('id', 'smo113563');
smo113579v0ar.push(smo113563);
const smo113564 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo113564.setAttribute('id', 'smo113564');
smo113579v0ar.push(smo113564);
const smo113565 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n"]}'))
smo113565.setAttribute('id', 'smo113565');
const smo1135650acc = new VF.Accidental('b');
smo113565.addModifier(smo1135650acc, 0);
smo113579v0ar.push(smo113565);
smo113579v0.addTickables(smo113579v0ar)
fmtsmo11357926.joinVoices([smo113579v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115345 = smo110738.getStemDirection();
smo110738.setStemDirection(dirsmo115345);
smo110739.setStemDirection(dirsmo115345);
smo110740.setStemDirection(dirsmo115345);
const smo115345 = new VF.Beam([smo110738,smo110739,smo110740]);
const dirsmo115346 = smo110741.getStemDirection();
smo110741.setStemDirection(dirsmo115346);
smo110742.setStemDirection(dirsmo115346);
smo110743.setStemDirection(dirsmo115346);
smo110744.setStemDirection(dirsmo115346);
const smo115346 = new VF.Beam([smo110741,smo110742,smo110743,smo110744]);
const dirsmo115349 = smo113562.getStemDirection();
smo113562.setStemDirection(dirsmo115349);
smo113563.setStemDirection(dirsmo115349);
const smo115349 = new VF.Beam([smo113562,smo113563]);
const dirsmo115350 = smo113564.getStemDirection();
smo113564.setStemDirection(dirsmo115350);
smo113565.setStemDirection(dirsmo115350);
const smo115350 = new VF.Beam([smo113564,smo113565]);
 
// formatting measures in staff group smo109454
fmtsmo11075826.format([smo110758v0,smo113579v0], 281);
const stavesmo110758 = new VF.Stave(663, 1828, 295);
stavesmo110758.setAttribute('id', 'stavesmo110758');
stavesmo110758.setBegBarType(VF.Barline.type.NONE);
stavesmo110758.setContext(context);
stavesmo110758.draw();
smo110758v0.draw(context, stavesmo110758);
smo115345.setContext(context);
smo115345.draw();
smo115346.setContext(context);
smo115346.draw();
const stavesmo113579 = new VF.Stave(663, 1988, 295);
stavesmo113579.setAttribute('id', 'stavesmo113579');
stavesmo113579.setBegBarType(VF.Barline.type.NONE);
stavesmo113579.setContext(context);
stavesmo113579.draw();
smo113579v0.draw(context, stavesmo113579);
smo115349.setContext(context);
smo115349.draw();
smo115350.setContext(context);
smo115350.draw();
const fmtsmo11077927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo110779v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110779v0ar = [];
const smo110759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo110759.setAttribute('id', 'smo110759');
smo110779v0ar.push(smo110759);
const smo110760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bn/5/n"]}'))
smo110760.setAttribute('id', 'smo110760');
smo110779v0ar.push(smo110760);
const smo110761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo110761.setAttribute('id', 'smo110761');
const smo1107611acc = new VF.Accidental('b');
smo110761.addModifier(smo1107611acc, 1);
smo110779v0ar.push(smo110761);
const smo110762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n","bn/5/n"]}'))
smo110762.setAttribute('id', 'smo110762');
smo110779v0ar.push(smo110762);
const smo110763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo110763.setAttribute('id', 'smo110763');
smo110779v0ar.push(smo110763);
const smo110764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo110764.setAttribute('id', 'smo110764');
smo110779v0ar.push(smo110764);
const smo110765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo110765.setAttribute('id', 'smo110765');
smo110779v0ar.push(smo110765);
smo110779v0.addTickables(smo110779v0ar)
fmtsmo11077927.joinVoices([smo110779v0]);
const fmtsmo11359727 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo113597v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113597v0ar = [];
const smo113580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo113580.setAttribute('id', 'smo113580');
smo113597v0ar.push(smo113580);
const smo113581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo113581.setAttribute('id', 'smo113581');
smo113597v0ar.push(smo113581);
const smo113582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo113582.setAttribute('id', 'smo113582');
smo113597v0ar.push(smo113582);
const smo113583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","dn/4/n"]}'))
smo113583.setAttribute('id', 'smo113583');
smo113597v0ar.push(smo113583);
smo113597v0.addTickables(smo113597v0ar)
fmtsmo11359727.joinVoices([smo113597v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115353 = smo110759.getStemDirection();
smo110759.setStemDirection(dirsmo115353);
smo110760.setStemDirection(dirsmo115353);
smo110761.setStemDirection(dirsmo115353);
const smo115353 = new VF.Beam([smo110759,smo110760,smo110761]);
const dirsmo115354 = smo110762.getStemDirection();
smo110762.setStemDirection(dirsmo115354);
smo110763.setStemDirection(dirsmo115354);
smo110764.setStemDirection(dirsmo115354);
smo110765.setStemDirection(dirsmo115354);
const smo115354 = new VF.Beam([smo110762,smo110763,smo110764,smo110765]);
const dirsmo115357 = smo113580.getStemDirection();
smo113580.setStemDirection(dirsmo115357);
smo113581.setStemDirection(dirsmo115357);
const smo115357 = new VF.Beam([smo113580,smo113581]);
const dirsmo115358 = smo113582.getStemDirection();
smo113582.setStemDirection(dirsmo115358);
smo113583.setStemDirection(dirsmo115358);
const smo115358 = new VF.Beam([smo113582,smo113583]);
 
// formatting measures in staff group smo109454
fmtsmo11077927.format([smo110779v0,smo113597v0], 281);
const stavesmo110779 = new VF.Stave(958, 1828, 295);
stavesmo110779.setAttribute('id', 'stavesmo110779');
stavesmo110779.setBegBarType(VF.Barline.type.NONE);
stavesmo110779.setContext(context);
stavesmo110779.draw();
smo110779v0.draw(context, stavesmo110779);
smo115353.setContext(context);
smo115353.draw();
smo115354.setContext(context);
smo115354.draw();
const stavesmo113597 = new VF.Stave(958, 1988, 295);
stavesmo113597.setAttribute('id', 'stavesmo113597');
stavesmo113597.setBegBarType(VF.Barline.type.NONE);
stavesmo113597.setContext(context);
stavesmo113597.draw();
smo113597v0.draw(context, stavesmo113597);
smo115357.setContext(context);
smo115357.draw();
smo115358.setContext(context);
smo115358.draw();
const fmtsmo11079828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo110798v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110798v0ar = [];
const smo110780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo110780.setAttribute('id', 'smo110780');
smo110798v0ar.push(smo110780);
const smo110781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","gn/5/n"]}'))
smo110781.setAttribute('id', 'smo110781');
smo110798v0ar.push(smo110781);
const smo110782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo110782.setAttribute('id', 'smo110782');
smo110798v0ar.push(smo110782);
const smo110783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo110783.setAttribute('id', 'smo110783');
smo110798v0ar.push(smo110783);
const smo110784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo110784.setAttribute('id', 'smo110784');
const smo1107840acc = new VF.Accidental('b');
smo110784.addModifier(smo1107840acc, 0);
const smo1107841acc = new VF.Accidental('b');
smo110784.addModifier(smo1107841acc, 1);
const smo1107842acc = new VF.Accidental('b');
smo110784.addModifier(smo1107842acc, 2);
smo110798v0ar.push(smo110784);
smo110798v0.addTickables(smo110798v0ar)
fmtsmo11079828.joinVoices([smo110798v0]);
const fmtsmo11361528 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo113615v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113615v0ar = [];
const smo113598 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n","dn/4/n"]}'))
smo113598.setAttribute('id', 'smo113598');
smo113615v0ar.push(smo113598);
const smo113599 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo113599.setAttribute('id', 'smo113599');
smo113615v0ar.push(smo113599);
const smo113600 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo113600.setAttribute('id', 'smo113600');
smo113615v0ar.push(smo113600);
const smo113601 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo113601.setAttribute('id', 'smo113601');
smo113615v0ar.push(smo113601);
smo113615v0.addTickables(smo113615v0ar)
fmtsmo11361528.joinVoices([smo113615v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115361 = smo110781.getStemDirection();
smo110781.setStemDirection(dirsmo115361);
smo110782.setStemDirection(dirsmo115361);
smo110783.setStemDirection(dirsmo115361);
smo110784.setStemDirection(dirsmo115361);
const smo115361 = new VF.Beam([smo110781,smo110782,smo110783,smo110784]);
const dirsmo115364 = smo113598.getStemDirection();
smo113598.setStemDirection(dirsmo115364);
smo113599.setStemDirection(dirsmo115364);
const smo115364 = new VF.Beam([smo113598,smo113599]);
const dirsmo115365 = smo113600.getStemDirection();
smo113600.setStemDirection(dirsmo115365);
smo113601.setStemDirection(dirsmo115365);
const smo115365 = new VF.Beam([smo113600,smo113601]);
 
// formatting measures in staff group smo109454
fmtsmo11079828.format([smo110798v0,smo113615v0], 281);
const stavesmo110798 = new VF.Stave(1253, 1828, 295);
stavesmo110798.setAttribute('id', 'stavesmo110798');
stavesmo110798.setBegBarType(VF.Barline.type.NONE);
stavesmo110798.setContext(context);
stavesmo110798.draw();
smo110798v0.draw(context, stavesmo110798);
smo115361.setContext(context);
smo115361.draw();
const stavesmo113615 = new VF.Stave(1253, 1988, 295);
stavesmo113615.setAttribute('id', 'stavesmo113615');
stavesmo113615.setBegBarType(VF.Barline.type.NONE);
stavesmo113615.setContext(context);
stavesmo113615.draw();
smo113615v0.draw(context, stavesmo113615);
smo115364.setContext(context);
smo115364.draw();
smo115365.setContext(context);
smo115365.draw();
const fmtsmo11082029 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo110820v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo110820v0ar = [];
const smo110799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110799.setAttribute('id', 'smo110799');
smo110820v0ar.push(smo110799);
const smo110801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","en/5/n","an/5/n"]}'))
smo110801.setAttribute('id', 'smo110801');
smo110820v0ar.push(smo110801);
const smo110802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110802.setAttribute('id', 'smo110802');
smo110820v0ar.push(smo110802);
const smo110803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n","gn/5/n"]}'))
smo110803.setAttribute('id', 'smo110803');
smo110820v0ar.push(smo110803);
const smo110804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n","en/5/n"]}'))
smo110804.setAttribute('id', 'smo110804');
smo110820v0ar.push(smo110804);
const smo110805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n","fn/5/n"]}'))
smo110805.setAttribute('id', 'smo110805');
smo110820v0ar.push(smo110805);
const smo110806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","eb/5/n","gb/5/n"]}'))
smo110806.setAttribute('id', 'smo110806');
const smo1108060acc = new VF.Accidental('b');
smo110806.addModifier(smo1108060acc, 0);
const smo1108061acc = new VF.Accidental('b');
smo110806.addModifier(smo1108061acc, 1);
const smo1108062acc = new VF.Accidental('b');
smo110806.addModifier(smo1108062acc, 2);
smo110820v0ar.push(smo110806);
smo110820v0.addTickables(smo110820v0ar)
fmtsmo11082029.joinVoices([smo110820v0]);
const fmtsmo11363329 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo113633v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo113633v0ar = [];
const smo113616 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo113616.setAttribute('id', 'smo113616');
smo113633v0ar.push(smo113616);
const smo113617 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113617.setAttribute('id', 'smo113617');
smo113633v0ar.push(smo113617);
const smo113618 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo113618.setAttribute('id', 'smo113618');
smo113633v0ar.push(smo113618);
const smo113619 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo113619.setAttribute('id', 'smo113619');
smo113633v0ar.push(smo113619);
smo113633v0.addTickables(smo113633v0ar)
fmtsmo11363329.joinVoices([smo113633v0]);
// create beam groups and tuplets for format grp smo109454 before formatting
const dirsmo115368 = smo110799.getStemDirection();
smo110799.setStemDirection(dirsmo115368);
smo110801.setStemDirection(dirsmo115368);
smo110802.setStemDirection(dirsmo115368);
const smo115368 = new VF.Beam([smo110799,smo110801,smo110802]);
const dirsmo115369 = smo110803.getStemDirection();
smo110803.setStemDirection(dirsmo115369);
smo110804.setStemDirection(dirsmo115369);
smo110805.setStemDirection(dirsmo115369);
smo110806.setStemDirection(dirsmo115369);
const smo115369 = new VF.Beam([smo110803,smo110804,smo110805,smo110806]);
const dirsmo115372 = smo113616.getStemDirection();
smo113616.setStemDirection(dirsmo115372);
smo113617.setStemDirection(dirsmo115372);
const smo115372 = new VF.Beam([smo113616,smo113617]);
const dirsmo115373 = smo113618.getStemDirection();
smo113618.setStemDirection(dirsmo115373);
smo113619.setStemDirection(dirsmo115373);
const smo115373 = new VF.Beam([smo113618,smo113619]);
 
// formatting measures in staff group smo109454
fmtsmo11082029.format([smo110820v0,smo113633v0], 281);
const stavesmo110820 = new VF.Stave(1548, 1828, 295);
stavesmo110820.setAttribute('id', 'stavesmo110820');
stavesmo110820.setBegBarType(VF.Barline.type.NONE);
stavesmo110820.setContext(context);
stavesmo110820.draw();
smo110820v0.draw(context, stavesmo110820);
smo115368.setContext(context);
smo115368.draw();
smo115369.setContext(context);
smo115369.draw();
const stavesmo113633 = new VF.Stave(1548, 1988, 295);
stavesmo113633.setAttribute('id', 'stavesmo113633');
stavesmo113633.setBegBarType(VF.Barline.type.NONE);
stavesmo113633.setContext(context);
stavesmo113633.draw();
smo113633v0.draw(context, stavesmo113633);
smo115372.setContext(context);
smo115372.draw();
smo115373.setContext(context);
smo115373.draw();
const rightsmo109454stavesmo1108201 = new VF.StaveConnector(stavesmo110820, stavesmo113633).setType(0);
rightsmo109454stavesmo1108201.setContext(context).draw();
// modifier from 0-5-0-2 to 0-5-0-4
const smo116388 = new VF.StaveHairpin({ first_note: smo110310, last_note: smo110310,
       firstNote: smo110310, lastNote: smo110310 });
smo116388.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116388.setContext(context).setPosition(4).draw();
// modifier from 0-7-0-2 to 0-8-0-0
const smo116389 = new VF.StaveHairpin({ first_note: smo110351, last_note: smo110351,
       firstNote: smo110351, lastNote: smo110351 });
smo116389.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116389.setContext(context).setPosition(4).draw();
// modifier from 0-9-0-2 to 0-10-0-0
const smo116390 = new VF.StaveHairpin({ first_note: smo110390, last_note: smo110390,
       firstNote: smo110390, lastNote: smo110390 });
smo116390.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116390.setContext(context).setPosition(4).draw();
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-11-0-2 to 0-12-0-0
// modifier from 0-13-0-2 to 0-13-0-4
const smo116393 = new VF.StaveHairpin({ first_note: smo110470, last_note: smo110470,
       firstNote: smo110470, lastNote: smo110470 });
smo116393.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116393.setContext(context).setPosition(4).draw();
// modifier from 0-19-0-2 to 0-20-0-0
const smo116394 = new VF.StaveHairpin({ first_note: smo110594, last_note: smo110594,
       firstNote: smo110594, lastNote: smo110594 });
smo116394.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo116394.setContext(context).setPosition(4).draw();
// modifier from 0-0-0-3 to 0-0-0-4
const smo116395 = new VF.StaveTie({ first_note: smo110201, last_note: smo110202, 
          firstNote: smo110201, lastNote: smo110202, first_indices: [0], last_indices: [0]});
smo116395.setContext(context).draw();
// modifier from 0-0-1-3 to 0-0-1-4
const smo116396 = new VF.StaveTie({ first_note: smo110208, last_note: smo110209, 
          firstNote: smo110208, lastNote: smo110209, first_indices: [0], last_indices: [0]});
smo116396.setContext(context).draw();
// modifier from 0-1-0-3 to 0-1-0-4
const smo116397 = new VF.StaveTie({ first_note: smo110229, last_note: smo110230, 
          firstNote: smo110229, lastNote: smo110230, first_indices: [0], last_indices: [0]});
smo116397.setContext(context).draw();
// modifier from 0-2-0-3 to 0-2-0-4
const smo116398 = new VF.StaveTie({ first_note: smo110250, last_note: smo110251, 
          firstNote: smo110250, lastNote: smo110251, first_indices: [0], last_indices: [0]});
smo116398.setContext(context).draw();
// modifier from 0-4-0-5 to 0-5-0-0
const smo116399 = new VF.StaveTie({ first_note: smo110293, last_note: smo110308, 
          firstNote: smo110293, lastNote: smo110308, first_indices: [0], last_indices: [0]});
smo116399.setContext(context).draw();
// modifier from 0-5-0-0 to 0-5-0-1
const smo116400 = new VF.StaveTie({ first_note: smo110308, last_note: smo110309, 
          firstNote: smo110308, lastNote: smo110309, first_indices: [0], last_indices: [0]});
smo116400.setContext(context).draw();
// modifier from 0-6-0-3 to 0-6-0-4
const smo116401 = new VF.StaveTie({ first_note: smo110331, last_note: smo110332, 
          firstNote: smo110331, lastNote: smo110332, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116401.setContext(context).draw();
// modifier from 0-7-0-0 to 0-7-0-1
const smo116402 = new VF.StaveTie({ first_note: smo110349, last_note: smo110350, 
          firstNote: smo110349, lastNote: smo110350, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116402.setContext(context).draw();
// modifier from 0-8-0-5 to 0-9-0-0
const smo116403 = new VF.StaveTie({ first_note: smo110373, last_note: smo110388, 
          firstNote: smo110373, lastNote: smo110388, first_indices: [0], last_indices: [0]});
smo116403.setContext(context).draw();
// modifier from 0-9-0-0 to 0-9-0-1
const smo116404 = new VF.StaveTie({ first_note: smo110388, last_note: smo110389, 
          firstNote: smo110388, lastNote: smo110389, first_indices: [0], last_indices: [0]});
smo116404.setContext(context).draw();
// modifier from 0-10-0-3 to 0-10-0-4
const smo116405 = new VF.StaveTie({ first_note: smo110410, last_note: smo110411, 
          firstNote: smo110410, lastNote: smo110411, first_indices: [0,1], last_indices: [0,1]});
smo116405.setContext(context).draw();
// modifier from 0-11-0-0 to 0-11-0-1
const smo116406 = new VF.StaveTie({ first_note: smo110429, last_note: smo110430, 
          firstNote: smo110429, lastNote: smo110430, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116406.setContext(context).draw();
// modifier from 0-12-0-5 to 0-13-0-0
const smo116407 = new VF.StaveTie({ first_note: smo110453, last_note: smo110468, 
          firstNote: smo110453, lastNote: smo110468, first_indices: [0], last_indices: [0]});
smo116407.setContext(context).draw();
// modifier from 0-13-0-0 to 0-13-0-1
const smo116408 = new VF.StaveTie({ first_note: smo110468, last_note: smo110469, 
          firstNote: smo110468, lastNote: smo110469, first_indices: [0], last_indices: [0]});
smo116408.setContext(context).draw();
// modifier from 0-14-0-3 to 0-14-0-4
const smo116409 = new VF.StaveTie({ first_note: smo110491, last_note: smo110492, 
          firstNote: smo110491, lastNote: smo110492, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116409.setContext(context).draw();
// modifier from 0-15-0-0 to 0-15-0-1
const smo116410 = new VF.StaveTie({ first_note: smo110509, last_note: smo110510, 
          firstNote: smo110509, lastNote: smo110510, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116410.setContext(context).draw();
// modifier from 0-16-0-3 to 0-16-0-4
const smo116411 = new VF.StaveTie({ first_note: smo110530, last_note: smo110531, 
          firstNote: smo110530, lastNote: smo110531, first_indices: [0,1], last_indices: [0,1]});
smo116411.setContext(context).draw();
// modifier from 0-17-0-3 to 0-17-0-4
const smo116412 = new VF.StaveTie({ first_note: smo110552, last_note: smo110553, 
          firstNote: smo110552, lastNote: smo110553, first_indices: [0,1], last_indices: [0,1]});
smo116412.setContext(context).draw();
// modifier from 0-18-0-3 to 0-18-0-4
const smo116413 = new VF.StaveTie({ first_note: smo110574, last_note: smo110575, 
          firstNote: smo110574, lastNote: smo110575, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116413.setContext(context).draw();
// modifier from 0-19-0-0 to 0-19-0-1
const smo116414 = new VF.StaveTie({ first_note: smo110592, last_note: smo110593, 
          firstNote: smo110592, lastNote: smo110593, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116414.setContext(context).draw();
// modifier from 0-20-0-0 to 0-20-0-1
const smo116415 = new VF.StaveTie({ first_note: smo110611, last_note: smo110612, 
          firstNote: smo110611, lastNote: smo110612, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116415.setContext(context).draw();
// modifier from 0-21-0-2 to 0-21-0-3
const smo116416 = new VF.StaveTie({ first_note: smo110633, last_note: smo110634, 
          firstNote: smo110633, lastNote: smo110634, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116416.setContext(context).draw();
// modifier from 0-22-0-2 to 0-22-0-3
const smo116417 = new VF.StaveTie({ first_note: smo110654, last_note: smo110655, 
          firstNote: smo110654, lastNote: smo110655, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116417.setContext(context).draw();
// modifier from 0-25-0-2 to 0-25-0-3
const smo116418 = new VF.StaveTie({ first_note: smo110719, last_note: smo110720, 
          firstNote: smo110719, lastNote: smo110720, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116418.setContext(context).draw();
// modifier from 0-26-0-2 to 0-26-0-3
const smo116419 = new VF.StaveTie({ first_note: smo110740, last_note: smo110741, 
          firstNote: smo110740, lastNote: smo110741, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116419.setContext(context).draw();
// modifier from 0-27-0-2 to 0-27-0-3
const smo116420 = new VF.StaveTie({ first_note: smo110761, last_note: smo110762, 
          firstNote: smo110761, lastNote: smo110762, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116420.setContext(context).draw();
// modifier from 0-28-0-0 to 0-28-0-1
const smo116421 = new VF.StaveTie({ first_note: smo110780, last_note: smo110781, 
          firstNote: smo110780, lastNote: smo110781, first_indices: [0,1], last_indices: [0,1]});
smo116421.setContext(context).draw();
// modifier from 0-29-0-2 to 0-29-0-3
const smo116422 = new VF.StaveTie({ first_note: smo110802, last_note: smo110803, 
          firstNote: smo110802, lastNote: smo110803, first_indices: [0,1,2], last_indices: [0,1,2]});
smo116422.setContext(context).draw();
// modifier from 1-1-0-3 to 1-1-0-4
const smo116423 = new VF.StaveTie({ first_note: smo113106, last_note: smo113107, 
          firstNote: smo113106, lastNote: smo113107, first_indices: [0], last_indices: [0]});
smo116423.setContext(context).draw();
// modifier from 1-2-0-3 to 1-2-0-4
const smo116424 = new VF.StaveTie({ first_note: smo113127, last_note: smo113128, 
          firstNote: smo113127, lastNote: smo113128, first_indices: [0], last_indices: [0]});
smo116424.setContext(context).draw();
const smo110597smo110610 = new VF.Volta(5, '1', 368, 20);
smo110597smo110610.setContext(context).draw(stavesmo110610, -1 * 0);
const smo110616smo110630 = new VF.Volta(5, '2', 663, 20);
smo110616smo110630.setContext(context).draw(stavesmo110630, -1 * 0);
}
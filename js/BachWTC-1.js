// @@  p 2/5  by 
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
const fmtsmo6908221 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo69082v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69082v0ar = [];
const smo69051 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69051.setAttribute('id', 'smo69051');
smo69082v0ar.push(smo69051);
const smo69052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69052.setAttribute('id', 'smo69052');
smo69082v0ar.push(smo69052);
const smo69053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69053.setAttribute('id', 'smo69053');
smo69082v0ar.push(smo69053);
const smo69054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo69054.setAttribute('id', 'smo69054');
const smo690540acc = new VF.Accidental('b');
smo69054.addModifier(smo690540acc, 0);
smo69082v0ar.push(smo69054);
const smo69055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69055.setAttribute('id', 'smo69055');
smo69082v0ar.push(smo69055);
const smo69056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69056.setAttribute('id', 'smo69056');
smo69082v0ar.push(smo69056);
const smo69057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo69057.setAttribute('id', 'smo69057');
smo69082v0ar.push(smo69057);
const smo69058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69058.setAttribute('id', 'smo69058');
smo69082v0ar.push(smo69058);
const smo69059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69059.setAttribute('id', 'smo69059');
smo69082v0ar.push(smo69059);
const smo69060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69060.setAttribute('id', 'smo69060');
smo69082v0ar.push(smo69060);
const smo69061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo69061.setAttribute('id', 'smo69061');
smo69082v0ar.push(smo69061);
const smo69062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69062.setAttribute('id', 'smo69062');
smo69082v0ar.push(smo69062);
const smo69063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69063.setAttribute('id', 'smo69063');
smo69082v0ar.push(smo69063);
const smo69064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["eb/4/n"]}'))
smo69064.setAttribute('id', 'smo69064');
smo69082v0ar.push(smo69064);
smo69082v0.addTickables(smo69082v0ar)
fmtsmo6908221.joinVoices([smo69082v0]);
const smo69082v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69082v1ar = [];
const smo69065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69065.setAttribute('id', 'smo69065');
smo69065.setStyle({ fillStyle: '#aaaaaa7f' });
smo69082v1ar.push(smo69065);
const smo69066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69066.setAttribute('id', 'smo69066');
smo69066.setStyle({ fillStyle: '#aaaaaa7f' });
smo69066.addModifier(new VF.Dot(), 0);
smo69066.addModifier(new VF.Dot(), 0);
smo69082v1ar.push(smo69066);
const smo69067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69067.setAttribute('id', 'smo69067');
smo69067.setStyle({ fillStyle: '#aaaaaa7f' });
smo69082v1ar.push(smo69067);
const smo69068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69068.setAttribute('id', 'smo69068');
smo69068.setStyle({ fillStyle: '#aaaaaa7f' });
smo69068.addModifier(new VF.Dot(), 0);
smo69068.addModifier(new VF.Dot(), 0);
smo69082v1ar.push(smo69068);
smo69082v1.addTickables(smo69082v1ar)
fmtsmo6908221.joinVoices([smo69082v1]);
const fmtsmo7431721 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo74317v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74317v0ar = [];
const smo74296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74296.setAttribute('id', 'smo74296');
smo74317v0ar.push(smo74296);
const smo74297 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74297.setAttribute('id', 'smo74297');
smo74297.addModifier(new VF.Dot(), 0);
smo74317v0ar.push(smo74297);
const smo74298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74298.setAttribute('id', 'smo74298');
smo74317v0ar.push(smo74298);
const smo74299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74299.setAttribute('id', 'smo74299');
smo74317v0ar.push(smo74299);
const smo74300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"r","stem_direction":1,"auto_stem":false,"keys":["dn/3/r"]}'))
smo74300.setAttribute('id', 'smo74300');
smo74300.addModifier(new VF.Dot(), 0);
smo74317v0ar.push(smo74300);
const smo74301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74301.setAttribute('id', 'smo74301');
smo74317v0ar.push(smo74301);
smo74317v0.addTickables(smo74317v0ar)
fmtsmo7431721.joinVoices([smo74317v0]);
const smo74317v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74317v1ar = [];
const smo74302 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo74302.setAttribute('id', 'smo74302');
smo74302.setStyle({ fillStyle: "#115511" });
const smo743020acc = new VF.Accidental('#');
smo74302.addModifier(smo743020acc, 0);
smo74317v1ar.push(smo74302);
const smo74303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/2/n"]}'))
smo74303.setAttribute('id', 'smo74303');
smo74303.setStyle({ fillStyle: "#115511" });
smo74317v1ar.push(smo74303);
smo74317v1.addTickables(smo74317v1ar)
fmtsmo7431721.joinVoices([smo74317v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo77994 = smo69052.getStemDirection();
smo69052.setStemDirection(dirsmo77994);
smo69053.setStemDirection(dirsmo77994);
const smo77994 = new VF.Beam([smo69052,smo69053]);
const dirsmo77995 = smo69054.getStemDirection();
smo69054.setStemDirection(dirsmo77995);
smo69055.setStemDirection(dirsmo77995);
smo69056.setStemDirection(dirsmo77995);
smo69057.setStemDirection(dirsmo77995);
const smo77995 = new VF.Beam([smo69054,smo69055,smo69056,smo69057]);
const dirsmo77996 = smo69059.getStemDirection();
smo69059.setStemDirection(dirsmo77996);
smo69060.setStemDirection(dirsmo77996);
const smo77996 = new VF.Beam([smo69059,smo69060]);
const dirsmo77997 = smo69061.getStemDirection();
smo69061.setStemDirection(dirsmo77997);
smo69062.setStemDirection(dirsmo77997);
smo69063.setStemDirection(dirsmo77997);
smo69064.setStemDirection(dirsmo77997);
const smo77997 = new VF.Beam([smo69061,smo69062,smo69063,smo69064]);
 
// formatting measures in staff group smo67190
fmtsmo6908221.format([smo69082v0,smo69082v1,smo74317v0,smo74317v1], 584);
const stavesmo69082 = new VF.Stave(90, 247, 642);
stavesmo69082.setAttribute('id', 'stavesmo69082');
stavesmo69082.setBegBarType(1);
stavesmo69082.addClef('treble');
stavesmo69082.setContext(context);
stavesmo69082.draw();
smo69082v0.draw(context, stavesmo69082);
smo69082v1.draw(context, stavesmo69082);
smo77994.setContext(context);
smo77994.draw();
smo77995.setContext(context);
smo77995.draw();
smo77996.setContext(context);
smo77996.draw();
smo77997.setContext(context);
smo77997.draw();
const stavesmo74317 = new VF.Stave(90, 393, 642);
stavesmo74317.setAttribute('id', 'stavesmo74317');
stavesmo74317.setBegBarType(1);
stavesmo74317.addClef('bass');
stavesmo74317.setContext(context);
stavesmo74317.draw();
smo74317v0.draw(context, stavesmo74317);
smo74317v1.draw(context, stavesmo74317);
const leftsmo67190stavesmo690821 = new VF.StaveConnector(stavesmo69082, stavesmo74317).setType(3);
leftsmo67190stavesmo690821.setContext(context).draw();
const fmtsmo6911422 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo69114v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69114v0ar = [];
const smo69083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69083.setAttribute('id', 'smo69083');
smo69114v0ar.push(smo69083);
const smo69084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69084.setAttribute('id', 'smo69084');
smo69114v0ar.push(smo69084);
const smo69085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69085.setAttribute('id', 'smo69085');
smo69114v0ar.push(smo69085);
const smo69086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69086.setAttribute('id', 'smo69086');
smo69114v0ar.push(smo69086);
const smo69087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69087.setAttribute('id', 'smo69087');
smo69114v0ar.push(smo69087);
const smo69088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69088.setAttribute('id', 'smo69088');
smo69114v0ar.push(smo69088);
const smo69089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69089.setAttribute('id', 'smo69089');
smo69114v0ar.push(smo69089);
const smo69090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69090.setAttribute('id', 'smo69090');
smo69114v0ar.push(smo69090);
const smo69091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69091.setAttribute('id', 'smo69091');
smo69114v0ar.push(smo69091);
const smo69092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69092.setAttribute('id', 'smo69092');
smo69114v0ar.push(smo69092);
const smo69093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69093.setAttribute('id', 'smo69093');
smo69114v0ar.push(smo69093);
const smo69094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69094.setAttribute('id', 'smo69094');
smo69114v0ar.push(smo69094);
const smo69095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69095.setAttribute('id', 'smo69095');
smo69114v0ar.push(smo69095);
const smo69096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69096.setAttribute('id', 'smo69096');
smo69114v0ar.push(smo69096);
smo69114v0.addTickables(smo69114v0ar)
fmtsmo6911422.joinVoices([smo69114v0]);
const smo69114v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69114v1ar = [];
const smo69097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69097.setAttribute('id', 'smo69097');
smo69097.setStyle({ fillStyle: '#aaaaaa7f' });
smo69114v1ar.push(smo69097);
const smo69098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69098.setAttribute('id', 'smo69098');
smo69098.setStyle({ fillStyle: '#aaaaaa7f' });
smo69098.addModifier(new VF.Dot(), 0);
smo69098.addModifier(new VF.Dot(), 0);
smo69114v1ar.push(smo69098);
const smo69099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69099.setAttribute('id', 'smo69099');
smo69099.setStyle({ fillStyle: '#aaaaaa7f' });
smo69114v1ar.push(smo69099);
const smo69100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69100.setAttribute('id', 'smo69100');
smo69100.setStyle({ fillStyle: '#aaaaaa7f' });
smo69100.addModifier(new VF.Dot(), 0);
smo69100.addModifier(new VF.Dot(), 0);
smo69114v1ar.push(smo69100);
smo69114v1.addTickables(smo69114v1ar)
fmtsmo6911422.joinVoices([smo69114v1]);
const fmtsmo7433922 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo74339v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74339v0ar = [];
const smo74318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74318.setAttribute('id', 'smo74318');
smo74339v0ar.push(smo74318);
const smo74319 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74319.setAttribute('id', 'smo74319');
smo74319.addModifier(new VF.Dot(), 0);
smo74339v0ar.push(smo74319);
const smo74320 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74320.setAttribute('id', 'smo74320');
smo74339v0ar.push(smo74320);
const smo74321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74321.setAttribute('id', 'smo74321');
smo74339v0ar.push(smo74321);
const smo74322 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74322.setAttribute('id', 'smo74322');
smo74322.addModifier(new VF.Dot(), 0);
smo74339v0ar.push(smo74322);
const smo74323 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74323.setAttribute('id', 'smo74323');
smo74339v0ar.push(smo74323);
smo74339v0.addTickables(smo74339v0ar)
fmtsmo7433922.joinVoices([smo74339v0]);
const smo74339v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74339v1ar = [];
const smo74324 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo74324.setAttribute('id', 'smo74324');
smo74324.setStyle({ fillStyle: "#115511" });
const smo743240acc = new VF.Accidental('b');
smo74324.addModifier(smo743240acc, 0);
smo74339v1ar.push(smo74324);
const smo74325 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["ab/2/n"]}'))
smo74325.setAttribute('id', 'smo74325');
smo74325.setStyle({ fillStyle: "#115511" });
smo74339v1ar.push(smo74325);
smo74339v1.addTickables(smo74339v1ar)
fmtsmo7433922.joinVoices([smo74339v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78002 = smo69084.getStemDirection();
smo69084.setStemDirection(dirsmo78002);
smo69085.setStemDirection(dirsmo78002);
const smo78002 = new VF.Beam([smo69084,smo69085]);
const dirsmo78003 = smo69086.getStemDirection();
smo69086.setStemDirection(dirsmo78003);
smo69087.setStemDirection(dirsmo78003);
smo69088.setStemDirection(dirsmo78003);
smo69089.setStemDirection(dirsmo78003);
const smo78003 = new VF.Beam([smo69086,smo69087,smo69088,smo69089]);
const dirsmo78004 = smo69091.getStemDirection();
smo69091.setStemDirection(dirsmo78004);
smo69092.setStemDirection(dirsmo78004);
const smo78004 = new VF.Beam([smo69091,smo69092]);
const dirsmo78005 = smo69093.getStemDirection();
smo69093.setStemDirection(dirsmo78005);
smo69094.setStemDirection(dirsmo78005);
smo69095.setStemDirection(dirsmo78005);
smo69096.setStemDirection(dirsmo78005);
const smo78005 = new VF.Beam([smo69093,smo69094,smo69095,smo69096]);
 
// formatting measures in staff group smo67190
fmtsmo6911422.format([smo69114v0,smo69114v1,smo74339v0,smo74339v1], 535);
const stavesmo69114 = new VF.Stave(732, 247, 549);
stavesmo69114.setAttribute('id', 'stavesmo69114');
stavesmo69114.setBegBarType(VF.Barline.type.NONE);
stavesmo69114.setContext(context);
stavesmo69114.draw();
smo69114v0.draw(context, stavesmo69114);
smo69114v1.draw(context, stavesmo69114);
smo78002.setContext(context);
smo78002.draw();
smo78003.setContext(context);
smo78003.draw();
smo78004.setContext(context);
smo78004.draw();
smo78005.setContext(context);
smo78005.draw();
const stavesmo74339 = new VF.Stave(732, 393, 549);
stavesmo74339.setAttribute('id', 'stavesmo74339');
stavesmo74339.setBegBarType(VF.Barline.type.NONE);
stavesmo74339.setContext(context);
stavesmo74339.draw();
smo74339v0.draw(context, stavesmo74339);
smo74339v1.draw(context, stavesmo74339);
const fmtsmo6914623 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo69146v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69146v0ar = [];
const smo69115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69115.setAttribute('id', 'smo69115');
smo69146v0ar.push(smo69115);
const smo69116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69116.setAttribute('id', 'smo69116');
smo69146v0ar.push(smo69116);
const smo69117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69117.setAttribute('id', 'smo69117');
smo69146v0ar.push(smo69117);
const smo69118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69118.setAttribute('id', 'smo69118');
smo69146v0ar.push(smo69118);
const smo69119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69119.setAttribute('id', 'smo69119');
smo69146v0ar.push(smo69119);
const smo69120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69120.setAttribute('id', 'smo69120');
smo69146v0ar.push(smo69120);
const smo69121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69121.setAttribute('id', 'smo69121');
smo69146v0ar.push(smo69121);
const smo69122 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69122.setAttribute('id', 'smo69122');
smo69146v0ar.push(smo69122);
const smo69123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69123.setAttribute('id', 'smo69123');
smo69146v0ar.push(smo69123);
const smo69124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69124.setAttribute('id', 'smo69124');
smo69146v0ar.push(smo69124);
const smo69125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69125.setAttribute('id', 'smo69125');
smo69146v0ar.push(smo69125);
const smo69126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69126.setAttribute('id', 'smo69126');
smo69146v0ar.push(smo69126);
const smo69127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69127.setAttribute('id', 'smo69127');
smo69146v0ar.push(smo69127);
const smo69128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69128.setAttribute('id', 'smo69128');
smo69146v0ar.push(smo69128);
smo69146v0.addTickables(smo69146v0ar)
fmtsmo6914623.joinVoices([smo69146v0]);
const smo69146v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69146v1ar = [];
const smo69129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69129.setAttribute('id', 'smo69129');
smo69129.setStyle({ fillStyle: '#aaaaaa7f' });
smo69146v1ar.push(smo69129);
const smo69130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69130.setAttribute('id', 'smo69130');
smo69130.setStyle({ fillStyle: '#aaaaaa7f' });
smo69130.addModifier(new VF.Dot(), 0);
smo69130.addModifier(new VF.Dot(), 0);
smo69146v1ar.push(smo69130);
const smo69131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69131.setAttribute('id', 'smo69131');
smo69131.setStyle({ fillStyle: '#aaaaaa7f' });
smo69146v1ar.push(smo69131);
const smo69132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69132.setAttribute('id', 'smo69132');
smo69132.setStyle({ fillStyle: '#aaaaaa7f' });
smo69132.addModifier(new VF.Dot(), 0);
smo69132.addModifier(new VF.Dot(), 0);
smo69146v1ar.push(smo69132);
smo69146v1.addTickables(smo69146v1ar)
fmtsmo6914623.joinVoices([smo69146v1]);
const fmtsmo7436123 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo74361v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74361v0ar = [];
const smo74340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74340.setAttribute('id', 'smo74340');
smo74361v0ar.push(smo74340);
const smo74341 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74341.setAttribute('id', 'smo74341');
smo74341.addModifier(new VF.Dot(), 0);
smo74361v0ar.push(smo74341);
const smo74342 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74342.setAttribute('id', 'smo74342');
smo74361v0ar.push(smo74342);
const smo74343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74343.setAttribute('id', 'smo74343');
smo74361v0ar.push(smo74343);
const smo74344 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74344.setAttribute('id', 'smo74344');
smo74344.addModifier(new VF.Dot(), 0);
smo74361v0ar.push(smo74344);
const smo74345 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74345.setAttribute('id', 'smo74345');
smo74361v0ar.push(smo74345);
smo74361v0.addTickables(smo74361v0ar)
fmtsmo7436123.joinVoices([smo74361v0]);
const smo74361v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74361v1ar = [];
const smo74346 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74346.setAttribute('id', 'smo74346');
smo74346.setStyle({ fillStyle: "#115511" });
smo74361v1ar.push(smo74346);
const smo74347 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74347.setAttribute('id', 'smo74347');
smo74347.setStyle({ fillStyle: "#115511" });
smo74361v1ar.push(smo74347);
smo74361v1.addTickables(smo74361v1ar)
fmtsmo7436123.joinVoices([smo74361v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78010 = smo69116.getStemDirection();
smo69116.setStemDirection(dirsmo78010);
smo69117.setStemDirection(dirsmo78010);
const smo78010 = new VF.Beam([smo69116,smo69117]);
const dirsmo78011 = smo69118.getStemDirection();
smo69118.setStemDirection(dirsmo78011);
smo69119.setStemDirection(dirsmo78011);
smo69120.setStemDirection(dirsmo78011);
smo69121.setStemDirection(dirsmo78011);
const smo78011 = new VF.Beam([smo69118,smo69119,smo69120,smo69121]);
const dirsmo78012 = smo69123.getStemDirection();
smo69123.setStemDirection(dirsmo78012);
smo69124.setStemDirection(dirsmo78012);
const smo78012 = new VF.Beam([smo69123,smo69124]);
const dirsmo78013 = smo69125.getStemDirection();
smo69125.setStemDirection(dirsmo78013);
smo69126.setStemDirection(dirsmo78013);
smo69127.setStemDirection(dirsmo78013);
smo69128.setStemDirection(dirsmo78013);
const smo78013 = new VF.Beam([smo69125,smo69126,smo69127,smo69128]);
 
// formatting measures in staff group smo67190
fmtsmo6914623.format([smo69146v0,smo69146v1,smo74361v0,smo74361v1], 512);
const stavesmo69146 = new VF.Stave(1281, 247, 526);
stavesmo69146.setAttribute('id', 'stavesmo69146');
stavesmo69146.setBegBarType(VF.Barline.type.NONE);
stavesmo69146.setContext(context);
stavesmo69146.draw();
smo69146v0.draw(context, stavesmo69146);
smo69146v1.draw(context, stavesmo69146);
smo78010.setContext(context);
smo78010.draw();
smo78011.setContext(context);
smo78011.draw();
smo78012.setContext(context);
smo78012.draw();
smo78013.setContext(context);
smo78013.draw();
const stavesmo74361 = new VF.Stave(1281, 393, 526);
stavesmo74361.setAttribute('id', 'stavesmo74361');
stavesmo74361.setBegBarType(VF.Barline.type.NONE);
stavesmo74361.setContext(context);
stavesmo74361.draw();
smo74361v0.draw(context, stavesmo74361);
smo74361v1.draw(context, stavesmo74361);
const rightsmo67190stavesmo691461 = new VF.StaveConnector(stavesmo69146, stavesmo74361).setType(0);
rightsmo67190stavesmo691461.setContext(context).draw();
const fmtsmo6917824 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo69178v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69178v0ar = [];
const smo69147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69147.setAttribute('id', 'smo69147');
smo69178v0ar.push(smo69147);
const smo69148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69148.setAttribute('id', 'smo69148');
smo69178v0ar.push(smo69148);
const smo69149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69149.setAttribute('id', 'smo69149');
smo69178v0ar.push(smo69149);
const smo69150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69150.setAttribute('id', 'smo69150');
smo69178v0ar.push(smo69150);
const smo69151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69151.setAttribute('id', 'smo69151');
smo69178v0ar.push(smo69151);
const smo69152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69152.setAttribute('id', 'smo69152');
smo69178v0ar.push(smo69152);
const smo69153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69153.setAttribute('id', 'smo69153');
smo69178v0ar.push(smo69153);
const smo69154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69154.setAttribute('id', 'smo69154');
smo69178v0ar.push(smo69154);
const smo69155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69155.setAttribute('id', 'smo69155');
smo69178v0ar.push(smo69155);
const smo69156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69156.setAttribute('id', 'smo69156');
smo69178v0ar.push(smo69156);
const smo69157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69157.setAttribute('id', 'smo69157');
smo69178v0ar.push(smo69157);
const smo69158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69158.setAttribute('id', 'smo69158');
smo69178v0ar.push(smo69158);
const smo69159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69159.setAttribute('id', 'smo69159');
smo69178v0ar.push(smo69159);
const smo69160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69160.setAttribute('id', 'smo69160');
smo69178v0ar.push(smo69160);
smo69178v0.addTickables(smo69178v0ar)
fmtsmo6917824.joinVoices([smo69178v0]);
const smo69178v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69178v1ar = [];
const smo69161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69161.setAttribute('id', 'smo69161');
smo69161.setStyle({ fillStyle: '#aaaaaa7f' });
smo69178v1ar.push(smo69161);
const smo69162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69162.setAttribute('id', 'smo69162');
smo69162.setStyle({ fillStyle: '#aaaaaa7f' });
smo69162.addModifier(new VF.Dot(), 0);
smo69162.addModifier(new VF.Dot(), 0);
smo69178v1ar.push(smo69162);
const smo69163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69163.setAttribute('id', 'smo69163');
smo69163.setStyle({ fillStyle: '#aaaaaa7f' });
smo69178v1ar.push(smo69163);
const smo69164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69164.setAttribute('id', 'smo69164');
smo69164.setStyle({ fillStyle: '#aaaaaa7f' });
smo69164.addModifier(new VF.Dot(), 0);
smo69164.addModifier(new VF.Dot(), 0);
smo69178v1ar.push(smo69164);
smo69178v1.addTickables(smo69178v1ar)
fmtsmo6917824.joinVoices([smo69178v1]);
const fmtsmo7438324 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo74383v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74383v0ar = [];
const smo74362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74362.setAttribute('id', 'smo74362');
smo74383v0ar.push(smo74362);
const smo74363 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74363.setAttribute('id', 'smo74363');
smo74363.addModifier(new VF.Dot(), 0);
smo74383v0ar.push(smo74363);
const smo74364 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74364.setAttribute('id', 'smo74364');
smo74383v0ar.push(smo74364);
const smo74365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74365.setAttribute('id', 'smo74365');
smo74383v0ar.push(smo74365);
const smo74366 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74366.setAttribute('id', 'smo74366');
smo74366.addModifier(new VF.Dot(), 0);
smo74383v0ar.push(smo74366);
const smo74367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74367.setAttribute('id', 'smo74367');
smo74383v0ar.push(smo74367);
smo74383v0.addTickables(smo74383v0ar)
fmtsmo7438324.joinVoices([smo74383v0]);
const smo74383v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74383v1ar = [];
const smo74368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74368.setAttribute('id', 'smo74368');
smo74368.setStyle({ fillStyle: "#115511" });
smo74383v1ar.push(smo74368);
const smo74369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74369.setAttribute('id', 'smo74369');
smo74369.setStyle({ fillStyle: "#115511" });
smo74383v1ar.push(smo74369);
smo74383v1.addTickables(smo74383v1ar)
fmtsmo7438324.joinVoices([smo74383v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78027 = smo69148.getStemDirection();
smo69148.setStemDirection(dirsmo78027);
smo69149.setStemDirection(dirsmo78027);
const smo78027 = new VF.Beam([smo69148,smo69149]);
const dirsmo78028 = smo69150.getStemDirection();
smo69150.setStemDirection(dirsmo78028);
smo69151.setStemDirection(dirsmo78028);
smo69152.setStemDirection(dirsmo78028);
smo69153.setStemDirection(dirsmo78028);
const smo78028 = new VF.Beam([smo69150,smo69151,smo69152,smo69153]);
const dirsmo78029 = smo69155.getStemDirection();
smo69155.setStemDirection(dirsmo78029);
smo69156.setStemDirection(dirsmo78029);
const smo78029 = new VF.Beam([smo69155,smo69156]);
const dirsmo78030 = smo69157.getStemDirection();
smo69157.setStemDirection(dirsmo78030);
smo69158.setStemDirection(dirsmo78030);
smo69159.setStemDirection(dirsmo78030);
smo69160.setStemDirection(dirsmo78030);
const smo78030 = new VF.Beam([smo69157,smo69158,smo69159,smo69160]);
 
// formatting measures in staff group smo67190
fmtsmo6917824.format([smo69178v0,smo69178v1,smo74383v0,smo74383v1], 545);
const stavesmo69178 = new VF.Stave(90, 525, 603);
stavesmo69178.setAttribute('id', 'stavesmo69178');
stavesmo69178.setBegBarType(1);
stavesmo69178.addClef('treble');
stavesmo69178.setContext(context);
stavesmo69178.draw();
smo69178v0.draw(context, stavesmo69178);
smo69178v1.draw(context, stavesmo69178);
smo78027.setContext(context);
smo78027.draw();
smo78028.setContext(context);
smo78028.draw();
smo78029.setContext(context);
smo78029.draw();
smo78030.setContext(context);
smo78030.draw();
const stavesmo74383 = new VF.Stave(90, 674, 603);
stavesmo74383.setAttribute('id', 'stavesmo74383');
stavesmo74383.setBegBarType(1);
stavesmo74383.addClef('bass');
stavesmo74383.setContext(context);
stavesmo74383.draw();
smo74383v0.draw(context, stavesmo74383);
smo74383v1.draw(context, stavesmo74383);
const leftsmo67190stavesmo691781 = new VF.StaveConnector(stavesmo69178, stavesmo74383).setType(3);
leftsmo67190stavesmo691781.setContext(context).draw();
const fmtsmo6921025 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo69210v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69210v0ar = [];
const smo69179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69179.setAttribute('id', 'smo69179');
smo69210v0ar.push(smo69179);
const smo69180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69180.setAttribute('id', 'smo69180');
smo69210v0ar.push(smo69180);
const smo69181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69181.setAttribute('id', 'smo69181');
smo69210v0ar.push(smo69181);
const smo69182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69182.setAttribute('id', 'smo69182');
smo69210v0ar.push(smo69182);
const smo69183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69183.setAttribute('id', 'smo69183');
smo69210v0ar.push(smo69183);
const smo69184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69184.setAttribute('id', 'smo69184');
smo69210v0ar.push(smo69184);
const smo69185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69185.setAttribute('id', 'smo69185');
smo69210v0ar.push(smo69185);
const smo69186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69186.setAttribute('id', 'smo69186');
smo69210v0ar.push(smo69186);
const smo69187 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69187.setAttribute('id', 'smo69187');
smo69210v0ar.push(smo69187);
const smo69188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69188.setAttribute('id', 'smo69188');
smo69210v0ar.push(smo69188);
const smo69189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69189.setAttribute('id', 'smo69189');
smo69210v0ar.push(smo69189);
const smo69190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69190.setAttribute('id', 'smo69190');
smo69210v0ar.push(smo69190);
const smo69191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69191.setAttribute('id', 'smo69191');
smo69210v0ar.push(smo69191);
const smo69192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69192.setAttribute('id', 'smo69192');
smo69210v0ar.push(smo69192);
smo69210v0.addTickables(smo69210v0ar)
fmtsmo6921025.joinVoices([smo69210v0]);
const smo69210v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69210v1ar = [];
const smo69193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69193.setAttribute('id', 'smo69193');
smo69193.setStyle({ fillStyle: '#aaaaaa7f' });
smo69210v1ar.push(smo69193);
const smo69194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69194.setAttribute('id', 'smo69194');
smo69194.setStyle({ fillStyle: '#aaaaaa7f' });
smo69194.addModifier(new VF.Dot(), 0);
smo69194.addModifier(new VF.Dot(), 0);
smo69210v1ar.push(smo69194);
const smo69195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69195.setAttribute('id', 'smo69195');
smo69195.setStyle({ fillStyle: '#aaaaaa7f' });
smo69210v1ar.push(smo69195);
const smo69196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69196.setAttribute('id', 'smo69196');
smo69196.setStyle({ fillStyle: '#aaaaaa7f' });
smo69196.addModifier(new VF.Dot(), 0);
smo69196.addModifier(new VF.Dot(), 0);
smo69210v1ar.push(smo69196);
smo69210v1.addTickables(smo69210v1ar)
fmtsmo6921025.joinVoices([smo69210v1]);
const fmtsmo7440525 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo74405v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74405v0ar = [];
const smo74384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74384.setAttribute('id', 'smo74384');
smo74405v0ar.push(smo74384);
const smo74385 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74385.setAttribute('id', 'smo74385');
smo74385.addModifier(new VF.Dot(), 0);
smo74405v0ar.push(smo74385);
const smo74386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74386.setAttribute('id', 'smo74386');
smo74405v0ar.push(smo74386);
const smo74387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74387.setAttribute('id', 'smo74387');
smo74405v0ar.push(smo74387);
const smo74388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74388.setAttribute('id', 'smo74388');
smo74388.addModifier(new VF.Dot(), 0);
smo74405v0ar.push(smo74388);
const smo74389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74389.setAttribute('id', 'smo74389');
smo74405v0ar.push(smo74389);
smo74405v0.addTickables(smo74405v0ar)
fmtsmo7440525.joinVoices([smo74405v0]);
const smo74405v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74405v1ar = [];
const smo74390 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74390.setAttribute('id', 'smo74390');
smo74390.setStyle({ fillStyle: "#115511" });
smo74405v1ar.push(smo74390);
const smo74391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74391.setAttribute('id', 'smo74391');
smo74391.setStyle({ fillStyle: "#115511" });
smo74405v1ar.push(smo74391);
smo74405v1.addTickables(smo74405v1ar)
fmtsmo7440525.joinVoices([smo74405v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78035 = smo69180.getStemDirection();
smo69180.setStemDirection(dirsmo78035);
smo69181.setStemDirection(dirsmo78035);
const smo78035 = new VF.Beam([smo69180,smo69181]);
const dirsmo78036 = smo69182.getStemDirection();
smo69182.setStemDirection(dirsmo78036);
smo69183.setStemDirection(dirsmo78036);
smo69184.setStemDirection(dirsmo78036);
smo69185.setStemDirection(dirsmo78036);
const smo78036 = new VF.Beam([smo69182,smo69183,smo69184,smo69185]);
const dirsmo78037 = smo69187.getStemDirection();
smo69187.setStemDirection(dirsmo78037);
smo69188.setStemDirection(dirsmo78037);
const smo78037 = new VF.Beam([smo69187,smo69188]);
const dirsmo78038 = smo69189.getStemDirection();
smo69189.setStemDirection(dirsmo78038);
smo69190.setStemDirection(dirsmo78038);
smo69191.setStemDirection(dirsmo78038);
smo69192.setStemDirection(dirsmo78038);
const smo78038 = new VF.Beam([smo69189,smo69190,smo69191,smo69192]);
 
// formatting measures in staff group smo67190
fmtsmo6921025.format([smo69210v0,smo69210v1,smo74405v0,smo74405v1], 544);
const stavesmo69210 = new VF.Stave(693, 525, 558);
stavesmo69210.setAttribute('id', 'stavesmo69210');
stavesmo69210.setBegBarType(VF.Barline.type.NONE);
stavesmo69210.setContext(context);
stavesmo69210.draw();
smo69210v0.draw(context, stavesmo69210);
smo69210v1.draw(context, stavesmo69210);
smo78035.setContext(context);
smo78035.draw();
smo78036.setContext(context);
smo78036.draw();
smo78037.setContext(context);
smo78037.draw();
smo78038.setContext(context);
smo78038.draw();
const stavesmo74405 = new VF.Stave(693, 674, 558);
stavesmo74405.setAttribute('id', 'stavesmo74405');
stavesmo74405.setBegBarType(VF.Barline.type.NONE);
stavesmo74405.setContext(context);
stavesmo74405.draw();
smo74405v0.draw(context, stavesmo74405);
smo74405v1.draw(context, stavesmo74405);
const fmtsmo6924226 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo69242v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69242v0ar = [];
const smo69211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69211.setAttribute('id', 'smo69211');
smo69242v0ar.push(smo69211);
const smo69212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69212.setAttribute('id', 'smo69212');
smo69242v0ar.push(smo69212);
const smo69213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69213.setAttribute('id', 'smo69213');
smo69242v0ar.push(smo69213);
const smo69214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69214.setAttribute('id', 'smo69214');
smo69242v0ar.push(smo69214);
const smo69215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69215.setAttribute('id', 'smo69215');
smo69242v0ar.push(smo69215);
const smo69216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69216.setAttribute('id', 'smo69216');
smo69242v0ar.push(smo69216);
const smo69217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69217.setAttribute('id', 'smo69217');
smo69242v0ar.push(smo69217);
const smo69218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69218.setAttribute('id', 'smo69218');
smo69242v0ar.push(smo69218);
const smo69219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69219.setAttribute('id', 'smo69219');
smo69242v0ar.push(smo69219);
const smo69220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69220.setAttribute('id', 'smo69220');
smo69242v0ar.push(smo69220);
const smo69221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69221.setAttribute('id', 'smo69221');
smo69242v0ar.push(smo69221);
const smo69222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69222.setAttribute('id', 'smo69222');
smo69242v0ar.push(smo69222);
const smo69223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69223.setAttribute('id', 'smo69223');
smo69242v0ar.push(smo69223);
const smo69224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69224.setAttribute('id', 'smo69224');
smo69242v0ar.push(smo69224);
smo69242v0.addTickables(smo69242v0ar)
fmtsmo6924226.joinVoices([smo69242v0]);
const smo69242v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69242v1ar = [];
const smo69225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69225.setAttribute('id', 'smo69225');
smo69225.setStyle({ fillStyle: '#aaaaaa7f' });
smo69242v1ar.push(smo69225);
const smo69226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69226.setAttribute('id', 'smo69226');
smo69226.setStyle({ fillStyle: '#aaaaaa7f' });
smo69226.addModifier(new VF.Dot(), 0);
smo69226.addModifier(new VF.Dot(), 0);
smo69242v1ar.push(smo69226);
const smo69227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69227.setAttribute('id', 'smo69227');
smo69227.setStyle({ fillStyle: '#aaaaaa7f' });
smo69242v1ar.push(smo69227);
const smo69228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69228.setAttribute('id', 'smo69228');
smo69228.setStyle({ fillStyle: '#aaaaaa7f' });
smo69228.addModifier(new VF.Dot(), 0);
smo69228.addModifier(new VF.Dot(), 0);
smo69242v1ar.push(smo69228);
smo69242v1.addTickables(smo69242v1ar)
fmtsmo6924226.joinVoices([smo69242v1]);
const fmtsmo7442726 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo74427v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74427v0ar = [];
const smo74406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74406.setAttribute('id', 'smo74406');
smo74427v0ar.push(smo74406);
const smo74407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74407.setAttribute('id', 'smo74407');
smo74407.addModifier(new VF.Dot(), 0);
smo74427v0ar.push(smo74407);
const smo74408 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74408.setAttribute('id', 'smo74408');
smo74427v0ar.push(smo74408);
const smo74409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74409.setAttribute('id', 'smo74409');
smo74427v0ar.push(smo74409);
const smo74410 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74410.setAttribute('id', 'smo74410');
smo74410.addModifier(new VF.Dot(), 0);
smo74427v0ar.push(smo74410);
const smo74411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74411.setAttribute('id', 'smo74411');
smo74427v0ar.push(smo74411);
smo74427v0.addTickables(smo74427v0ar)
fmtsmo7442726.joinVoices([smo74427v0]);
const smo74427v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74427v1ar = [];
const smo74412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74412.setAttribute('id', 'smo74412');
smo74412.setStyle({ fillStyle: "#115511" });
smo74427v1ar.push(smo74412);
const smo74413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74413.setAttribute('id', 'smo74413');
smo74413.setStyle({ fillStyle: "#115511" });
smo74427v1ar.push(smo74413);
smo74427v1.addTickables(smo74427v1ar)
fmtsmo7442726.joinVoices([smo74427v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78043 = smo69212.getStemDirection();
smo69212.setStemDirection(dirsmo78043);
smo69213.setStemDirection(dirsmo78043);
const smo78043 = new VF.Beam([smo69212,smo69213]);
const dirsmo78044 = smo69214.getStemDirection();
smo69214.setStemDirection(dirsmo78044);
smo69215.setStemDirection(dirsmo78044);
smo69216.setStemDirection(dirsmo78044);
smo69217.setStemDirection(dirsmo78044);
const smo78044 = new VF.Beam([smo69214,smo69215,smo69216,smo69217]);
const dirsmo78045 = smo69219.getStemDirection();
smo69219.setStemDirection(dirsmo78045);
smo69220.setStemDirection(dirsmo78045);
const smo78045 = new VF.Beam([smo69219,smo69220]);
const dirsmo78046 = smo69221.getStemDirection();
smo69221.setStemDirection(dirsmo78046);
smo69222.setStemDirection(dirsmo78046);
smo69223.setStemDirection(dirsmo78046);
smo69224.setStemDirection(dirsmo78046);
const smo78046 = new VF.Beam([smo69221,smo69222,smo69223,smo69224]);
 
// formatting measures in staff group smo67190
fmtsmo6924226.format([smo69242v0,smo69242v1,smo74427v0,smo74427v1], 544);
const stavesmo69242 = new VF.Stave(1251, 525, 558);
stavesmo69242.setAttribute('id', 'stavesmo69242');
stavesmo69242.setBegBarType(VF.Barline.type.NONE);
stavesmo69242.setContext(context);
stavesmo69242.draw();
smo69242v0.draw(context, stavesmo69242);
smo69242v1.draw(context, stavesmo69242);
smo78043.setContext(context);
smo78043.draw();
smo78044.setContext(context);
smo78044.draw();
smo78045.setContext(context);
smo78045.draw();
smo78046.setContext(context);
smo78046.draw();
const stavesmo74427 = new VF.Stave(1251, 674, 558);
stavesmo74427.setAttribute('id', 'stavesmo74427');
stavesmo74427.setBegBarType(VF.Barline.type.NONE);
stavesmo74427.setContext(context);
stavesmo74427.draw();
smo74427v0.draw(context, stavesmo74427);
smo74427v1.draw(context, stavesmo74427);
const rightsmo67190stavesmo692421 = new VF.StaveConnector(stavesmo69242, stavesmo74427).setType(0);
rightsmo67190stavesmo692421.setContext(context).draw();
const fmtsmo6927427 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo69274v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69274v0ar = [];
const smo69243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69243.setAttribute('id', 'smo69243');
smo69274v0ar.push(smo69243);
const smo69244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69244.setAttribute('id', 'smo69244');
smo69274v0ar.push(smo69244);
const smo69245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69245.setAttribute('id', 'smo69245');
smo69274v0ar.push(smo69245);
const smo69246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69246.setAttribute('id', 'smo69246');
const smo692460acc = new VF.Accidental('#');
smo69246.addModifier(smo692460acc, 0);
smo69274v0ar.push(smo69246);
const smo69247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69247.setAttribute('id', 'smo69247');
smo69274v0ar.push(smo69247);
const smo69248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69248.setAttribute('id', 'smo69248');
smo69274v0ar.push(smo69248);
const smo69249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69249.setAttribute('id', 'smo69249');
smo69274v0ar.push(smo69249);
const smo69250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69250.setAttribute('id', 'smo69250');
smo69274v0ar.push(smo69250);
const smo69251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69251.setAttribute('id', 'smo69251');
smo69274v0ar.push(smo69251);
const smo69252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69252.setAttribute('id', 'smo69252');
smo69274v0ar.push(smo69252);
const smo69253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69253.setAttribute('id', 'smo69253');
smo69274v0ar.push(smo69253);
const smo69254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69254.setAttribute('id', 'smo69254');
smo69274v0ar.push(smo69254);
const smo69255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69255.setAttribute('id', 'smo69255');
smo69274v0ar.push(smo69255);
const smo69256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69256.setAttribute('id', 'smo69256');
smo69274v0ar.push(smo69256);
smo69274v0.addTickables(smo69274v0ar)
fmtsmo6927427.joinVoices([smo69274v0]);
const smo69274v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69274v1ar = [];
const smo69257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69257.setAttribute('id', 'smo69257');
smo69257.setStyle({ fillStyle: '#aaaaaa7f' });
smo69274v1ar.push(smo69257);
const smo69258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69258.setAttribute('id', 'smo69258');
smo69258.setStyle({ fillStyle: '#aaaaaa7f' });
smo69258.addModifier(new VF.Dot(), 0);
smo69258.addModifier(new VF.Dot(), 0);
smo69274v1ar.push(smo69258);
const smo69259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo69259.setAttribute('id', 'smo69259');
smo69259.setStyle({ fillStyle: "#115511" });
smo69274v1ar.push(smo69259);
const smo69260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69260.setAttribute('id', 'smo69260');
smo69260.setStyle({ fillStyle: '#aaaaaa7f' });
smo69260.addModifier(new VF.Dot(), 0);
smo69260.addModifier(new VF.Dot(), 0);
smo69274v1ar.push(smo69260);
smo69274v1.addTickables(smo69274v1ar)
fmtsmo6927427.joinVoices([smo69274v1]);
const fmtsmo7444927 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo74449v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74449v0ar = [];
const smo74428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74428.setAttribute('id', 'smo74428');
smo74449v0ar.push(smo74428);
const smo74429 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo74429.setAttribute('id', 'smo74429');
const smo744290acc = new VF.Accidental('#');
smo74429.addModifier(smo744290acc, 0);
smo74429.addModifier(new VF.Dot(), 0);
smo74449v0ar.push(smo74429);
const smo74430 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo74430.setAttribute('id', 'smo74430');
smo74449v0ar.push(smo74430);
const smo74431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74431.setAttribute('id', 'smo74431');
smo74449v0ar.push(smo74431);
const smo74432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo74432.setAttribute('id', 'smo74432');
smo74432.addModifier(new VF.Dot(), 0);
smo74449v0ar.push(smo74432);
const smo74433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["d#/3/n"]}'))
smo74433.setAttribute('id', 'smo74433');
smo74449v0ar.push(smo74433);
smo74449v0.addTickables(smo74449v0ar)
fmtsmo7444927.joinVoices([smo74449v0]);
const smo74449v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74449v1ar = [];
const smo74434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74434.setAttribute('id', 'smo74434');
smo74434.setStyle({ fillStyle: "#115511" });
smo74449v1ar.push(smo74434);
const smo74435 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74435.setAttribute('id', 'smo74435');
smo74435.setStyle({ fillStyle: "#115511" });
smo74449v1ar.push(smo74435);
smo74449v1.addTickables(smo74449v1ar)
fmtsmo7444927.joinVoices([smo74449v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78059 = smo69244.getStemDirection();
smo69244.setStemDirection(dirsmo78059);
smo69245.setStemDirection(dirsmo78059);
const smo78059 = new VF.Beam([smo69244,smo69245]);
const dirsmo78060 = smo69246.getStemDirection();
smo69246.setStemDirection(dirsmo78060);
smo69247.setStemDirection(dirsmo78060);
smo69248.setStemDirection(dirsmo78060);
smo69249.setStemDirection(dirsmo78060);
const smo78060 = new VF.Beam([smo69246,smo69247,smo69248,smo69249]);
const dirsmo78061 = smo69251.getStemDirection();
smo69251.setStemDirection(dirsmo78061);
smo69252.setStemDirection(dirsmo78061);
const smo78061 = new VF.Beam([smo69251,smo69252]);
const dirsmo78062 = smo69253.getStemDirection();
smo69253.setStemDirection(dirsmo78062);
smo69254.setStemDirection(dirsmo78062);
smo69255.setStemDirection(dirsmo78062);
smo69256.setStemDirection(dirsmo78062);
const smo78062 = new VF.Beam([smo69253,smo69254,smo69255,smo69256]);
 
// formatting measures in staff group smo67190
fmtsmo6927427.format([smo69274v0,smo69274v1,smo74449v0,smo74449v1], 578);
const stavesmo69274 = new VF.Stave(90, 801, 636);
stavesmo69274.setAttribute('id', 'stavesmo69274');
stavesmo69274.setBegBarType(1);
stavesmo69274.addClef('treble');
stavesmo69274.setContext(context);
stavesmo69274.draw();
smo69274v0.draw(context, stavesmo69274);
smo69274v1.draw(context, stavesmo69274);
smo78059.setContext(context);
smo78059.draw();
smo78060.setContext(context);
smo78060.draw();
smo78061.setContext(context);
smo78061.draw();
smo78062.setContext(context);
smo78062.draw();
const stavesmo74449 = new VF.Stave(90, 947, 636);
stavesmo74449.setAttribute('id', 'stavesmo74449');
stavesmo74449.setBegBarType(1);
stavesmo74449.addClef('bass');
stavesmo74449.setContext(context);
stavesmo74449.draw();
smo74449v0.draw(context, stavesmo74449);
smo74449v1.draw(context, stavesmo74449);
const leftsmo67190stavesmo692741 = new VF.StaveConnector(stavesmo69274, stavesmo74449).setType(3);
leftsmo67190stavesmo692741.setContext(context).draw();
const fmtsmo6930628 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo69306v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69306v0ar = [];
const smo69275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69275.setAttribute('id', 'smo69275');
smo69306v0ar.push(smo69275);
const smo69276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69276.setAttribute('id', 'smo69276');
smo69306v0ar.push(smo69276);
const smo69277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69277.setAttribute('id', 'smo69277');
smo69306v0ar.push(smo69277);
const smo69278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69278.setAttribute('id', 'smo69278');
smo69306v0ar.push(smo69278);
const smo69279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69279.setAttribute('id', 'smo69279');
smo69306v0ar.push(smo69279);
const smo69280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69280.setAttribute('id', 'smo69280');
smo69306v0ar.push(smo69280);
const smo69281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69281.setAttribute('id', 'smo69281');
smo69306v0ar.push(smo69281);
const smo69282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69282.setAttribute('id', 'smo69282');
smo69306v0ar.push(smo69282);
const smo69283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69283.setAttribute('id', 'smo69283');
smo69306v0ar.push(smo69283);
const smo69284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69284.setAttribute('id', 'smo69284');
smo69306v0ar.push(smo69284);
const smo69285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69285.setAttribute('id', 'smo69285');
smo69306v0ar.push(smo69285);
const smo69286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69286.setAttribute('id', 'smo69286');
smo69306v0ar.push(smo69286);
const smo69287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69287.setAttribute('id', 'smo69287');
smo69306v0ar.push(smo69287);
const smo69288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69288.setAttribute('id', 'smo69288');
smo69306v0ar.push(smo69288);
smo69306v0.addTickables(smo69306v0ar)
fmtsmo6930628.joinVoices([smo69306v0]);
const smo69306v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69306v1ar = [];
const smo69289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69289.setAttribute('id', 'smo69289');
smo69289.setStyle({ fillStyle: '#aaaaaa7f' });
smo69306v1ar.push(smo69289);
const smo69290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69290.setAttribute('id', 'smo69290');
smo69290.setStyle({ fillStyle: '#aaaaaa7f' });
smo69290.addModifier(new VF.Dot(), 0);
smo69290.addModifier(new VF.Dot(), 0);
smo69306v1ar.push(smo69290);
const smo69291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69291.setAttribute('id', 'smo69291');
smo69291.setStyle({ fillStyle: '#aaaaaa7f' });
smo69306v1ar.push(smo69291);
const smo69292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69292.setAttribute('id', 'smo69292');
smo69292.setStyle({ fillStyle: '#aaaaaa7f' });
smo69292.addModifier(new VF.Dot(), 0);
smo69292.addModifier(new VF.Dot(), 0);
smo69306v1ar.push(smo69292);
smo69306v1.addTickables(smo69306v1ar)
fmtsmo6930628.joinVoices([smo69306v1]);
const fmtsmo7447128 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo74471v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74471v0ar = [];
const smo74450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74450.setAttribute('id', 'smo74450');
smo74471v0ar.push(smo74450);
const smo74451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74451.setAttribute('id', 'smo74451');
smo74451.addModifier(new VF.Dot(), 0);
smo74471v0ar.push(smo74451);
const smo74452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74452.setAttribute('id', 'smo74452');
smo74471v0ar.push(smo74452);
const smo74453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74453.setAttribute('id', 'smo74453');
smo74471v0ar.push(smo74453);
const smo74454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74454.setAttribute('id', 'smo74454');
smo74454.addModifier(new VF.Dot(), 0);
smo74471v0ar.push(smo74454);
const smo74455 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74455.setAttribute('id', 'smo74455');
smo74471v0ar.push(smo74455);
smo74471v0.addTickables(smo74471v0ar)
fmtsmo7447128.joinVoices([smo74471v0]);
const smo74471v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74471v1ar = [];
const smo74456 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74456.setAttribute('id', 'smo74456');
smo74456.setStyle({ fillStyle: "#115511" });
smo74471v1ar.push(smo74456);
const smo74457 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74457.setAttribute('id', 'smo74457');
smo74457.setStyle({ fillStyle: "#115511" });
smo74471v1ar.push(smo74457);
smo74471v1.addTickables(smo74471v1ar)
fmtsmo7447128.joinVoices([smo74471v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78067 = smo69276.getStemDirection();
smo69276.setStemDirection(dirsmo78067);
smo69277.setStemDirection(dirsmo78067);
const smo78067 = new VF.Beam([smo69276,smo69277]);
const dirsmo78068 = smo69278.getStemDirection();
smo69278.setStemDirection(dirsmo78068);
smo69279.setStemDirection(dirsmo78068);
smo69280.setStemDirection(dirsmo78068);
smo69281.setStemDirection(dirsmo78068);
const smo78068 = new VF.Beam([smo69278,smo69279,smo69280,smo69281]);
const dirsmo78069 = smo69283.getStemDirection();
smo69283.setStemDirection(dirsmo78069);
smo69284.setStemDirection(dirsmo78069);
const smo78069 = new VF.Beam([smo69283,smo69284]);
const dirsmo78070 = smo69285.getStemDirection();
smo69285.setStemDirection(dirsmo78070);
smo69286.setStemDirection(dirsmo78070);
smo69287.setStemDirection(dirsmo78070);
smo69288.setStemDirection(dirsmo78070);
const smo78070 = new VF.Beam([smo69285,smo69286,smo69287,smo69288]);
 
// formatting measures in staff group smo67190
fmtsmo6930628.format([smo69306v0,smo69306v1,smo74471v0,smo74471v1], 527);
const stavesmo69306 = new VF.Stave(726, 801, 541);
stavesmo69306.setAttribute('id', 'stavesmo69306');
stavesmo69306.setBegBarType(VF.Barline.type.NONE);
stavesmo69306.setContext(context);
stavesmo69306.draw();
smo69306v0.draw(context, stavesmo69306);
smo69306v1.draw(context, stavesmo69306);
smo78067.setContext(context);
smo78067.draw();
smo78068.setContext(context);
smo78068.draw();
smo78069.setContext(context);
smo78069.draw();
smo78070.setContext(context);
smo78070.draw();
const stavesmo74471 = new VF.Stave(726, 947, 541);
stavesmo74471.setAttribute('id', 'stavesmo74471');
stavesmo74471.setBegBarType(VF.Barline.type.NONE);
stavesmo74471.setContext(context);
stavesmo74471.draw();
smo74471v0.draw(context, stavesmo74471);
smo74471v1.draw(context, stavesmo74471);
const fmtsmo6933829 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo69338v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69338v0ar = [];
const smo69307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69307.setAttribute('id', 'smo69307');
smo69338v0ar.push(smo69307);
const smo69308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69308.setAttribute('id', 'smo69308');
smo69338v0ar.push(smo69308);
const smo69309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69309.setAttribute('id', 'smo69309');
smo69338v0ar.push(smo69309);
const smo69310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69310.setAttribute('id', 'smo69310');
smo69338v0ar.push(smo69310);
const smo69311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69311.setAttribute('id', 'smo69311');
smo69338v0ar.push(smo69311);
const smo69312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69312.setAttribute('id', 'smo69312');
smo69338v0ar.push(smo69312);
const smo69313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69313.setAttribute('id', 'smo69313');
smo69338v0ar.push(smo69313);
const smo69314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69314.setAttribute('id', 'smo69314');
smo69338v0ar.push(smo69314);
const smo69315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69315.setAttribute('id', 'smo69315');
smo69338v0ar.push(smo69315);
const smo69316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69316.setAttribute('id', 'smo69316');
smo69338v0ar.push(smo69316);
const smo69317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69317.setAttribute('id', 'smo69317');
smo69338v0ar.push(smo69317);
const smo69318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69318.setAttribute('id', 'smo69318');
smo69338v0ar.push(smo69318);
const smo69319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69319.setAttribute('id', 'smo69319');
smo69338v0ar.push(smo69319);
const smo69320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69320.setAttribute('id', 'smo69320');
smo69338v0ar.push(smo69320);
smo69338v0.addTickables(smo69338v0ar)
fmtsmo6933829.joinVoices([smo69338v0]);
const smo69338v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69338v1ar = [];
const smo69321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69321.setAttribute('id', 'smo69321');
smo69321.setStyle({ fillStyle: '#aaaaaa7f' });
smo69338v1ar.push(smo69321);
const smo69322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69322.setAttribute('id', 'smo69322');
smo69322.setStyle({ fillStyle: '#aaaaaa7f' });
smo69322.addModifier(new VF.Dot(), 0);
smo69322.addModifier(new VF.Dot(), 0);
smo69338v1ar.push(smo69322);
const smo69323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69323.setAttribute('id', 'smo69323');
smo69323.setStyle({ fillStyle: '#aaaaaa7f' });
smo69338v1ar.push(smo69323);
const smo69324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69324.setAttribute('id', 'smo69324');
smo69324.setStyle({ fillStyle: '#aaaaaa7f' });
smo69324.addModifier(new VF.Dot(), 0);
smo69324.addModifier(new VF.Dot(), 0);
smo69338v1ar.push(smo69324);
smo69338v1.addTickables(smo69338v1ar)
fmtsmo6933829.joinVoices([smo69338v1]);
const fmtsmo7449329 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo74493v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74493v0ar = [];
const smo74472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74472.setAttribute('id', 'smo74472');
smo74493v0ar.push(smo74472);
const smo74473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74473.setAttribute('id', 'smo74473');
smo74473.addModifier(new VF.Dot(), 0);
smo74493v0ar.push(smo74473);
const smo74474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74474.setAttribute('id', 'smo74474');
smo74493v0ar.push(smo74474);
const smo74475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74475.setAttribute('id', 'smo74475');
smo74493v0ar.push(smo74475);
const smo74476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74476.setAttribute('id', 'smo74476');
smo74476.addModifier(new VF.Dot(), 0);
smo74493v0ar.push(smo74476);
const smo74477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74477.setAttribute('id', 'smo74477');
smo74493v0ar.push(smo74477);
smo74493v0.addTickables(smo74493v0ar)
fmtsmo7449329.joinVoices([smo74493v0]);
const smo74493v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74493v1ar = [];
const smo74478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74478.setAttribute('id', 'smo74478');
smo74478.setStyle({ fillStyle: "#115511" });
smo74493v1ar.push(smo74478);
const smo74479 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74479.setAttribute('id', 'smo74479');
smo74479.setStyle({ fillStyle: "#115511" });
smo74493v1ar.push(smo74479);
smo74493v1.addTickables(smo74493v1ar)
fmtsmo7449329.joinVoices([smo74493v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78075 = smo69308.getStemDirection();
smo69308.setStemDirection(dirsmo78075);
smo69309.setStemDirection(dirsmo78075);
const smo78075 = new VF.Beam([smo69308,smo69309]);
const dirsmo78076 = smo69310.getStemDirection();
smo69310.setStemDirection(dirsmo78076);
smo69311.setStemDirection(dirsmo78076);
smo69312.setStemDirection(dirsmo78076);
smo69313.setStemDirection(dirsmo78076);
const smo78076 = new VF.Beam([smo69310,smo69311,smo69312,smo69313]);
const dirsmo78077 = smo69315.getStemDirection();
smo69315.setStemDirection(dirsmo78077);
smo69316.setStemDirection(dirsmo78077);
const smo78077 = new VF.Beam([smo69315,smo69316]);
const dirsmo78078 = smo69317.getStemDirection();
smo69317.setStemDirection(dirsmo78078);
smo69318.setStemDirection(dirsmo78078);
smo69319.setStemDirection(dirsmo78078);
smo69320.setStemDirection(dirsmo78078);
const smo78078 = new VF.Beam([smo69317,smo69318,smo69319,smo69320]);
 
// formatting measures in staff group smo67190
fmtsmo6933829.format([smo69338v0,smo69338v1,smo74493v0,smo74493v1], 527);
const stavesmo69338 = new VF.Stave(1267, 801, 541);
stavesmo69338.setAttribute('id', 'stavesmo69338');
stavesmo69338.setBegBarType(VF.Barline.type.NONE);
stavesmo69338.setContext(context);
stavesmo69338.draw();
smo69338v0.draw(context, stavesmo69338);
smo69338v1.draw(context, stavesmo69338);
smo78075.setContext(context);
smo78075.draw();
smo78076.setContext(context);
smo78076.draw();
smo78077.setContext(context);
smo78077.draw();
smo78078.setContext(context);
smo78078.draw();
const stavesmo74493 = new VF.Stave(1267, 947, 541);
stavesmo74493.setAttribute('id', 'stavesmo74493');
stavesmo74493.setBegBarType(VF.Barline.type.NONE);
stavesmo74493.setContext(context);
stavesmo74493.draw();
smo74493v0.draw(context, stavesmo74493);
smo74493v1.draw(context, stavesmo74493);
const rightsmo67190stavesmo693381 = new VF.StaveConnector(stavesmo69338, stavesmo74493).setType(0);
rightsmo67190stavesmo693381.setContext(context).draw();
const fmtsmo6937030 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo69370v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69370v0ar = [];
const smo69339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69339.setAttribute('id', 'smo69339');
smo69370v0ar.push(smo69339);
const smo69340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69340.setAttribute('id', 'smo69340');
smo69370v0ar.push(smo69340);
const smo69341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69341.setAttribute('id', 'smo69341');
smo69370v0ar.push(smo69341);
const smo69342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69342.setAttribute('id', 'smo69342');
smo69370v0ar.push(smo69342);
const smo69343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69343.setAttribute('id', 'smo69343');
smo69370v0ar.push(smo69343);
const smo69344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69344.setAttribute('id', 'smo69344');
smo69370v0ar.push(smo69344);
const smo69345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69345.setAttribute('id', 'smo69345');
smo69370v0ar.push(smo69345);
const smo69346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69346.setAttribute('id', 'smo69346');
smo69370v0ar.push(smo69346);
const smo69347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69347.setAttribute('id', 'smo69347');
smo69370v0ar.push(smo69347);
const smo69348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69348.setAttribute('id', 'smo69348');
smo69370v0ar.push(smo69348);
const smo69349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69349.setAttribute('id', 'smo69349');
smo69370v0ar.push(smo69349);
const smo69350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69350.setAttribute('id', 'smo69350');
smo69370v0ar.push(smo69350);
const smo69351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69351.setAttribute('id', 'smo69351');
smo69370v0ar.push(smo69351);
const smo69352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69352.setAttribute('id', 'smo69352');
smo69370v0ar.push(smo69352);
smo69370v0.addTickables(smo69370v0ar)
fmtsmo6937030.joinVoices([smo69370v0]);
const smo69370v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69370v1ar = [];
const smo69353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69353.setAttribute('id', 'smo69353');
smo69353.setStyle({ fillStyle: '#aaaaaa7f' });
smo69370v1ar.push(smo69353);
const smo69354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69354.setAttribute('id', 'smo69354');
smo69354.setStyle({ fillStyle: '#aaaaaa7f' });
smo69354.addModifier(new VF.Dot(), 0);
smo69354.addModifier(new VF.Dot(), 0);
smo69370v1ar.push(smo69354);
const smo69355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69355.setAttribute('id', 'smo69355');
smo69355.setStyle({ fillStyle: '#aaaaaa7f' });
smo69370v1ar.push(smo69355);
const smo69356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69356.setAttribute('id', 'smo69356');
smo69356.setStyle({ fillStyle: '#aaaaaa7f' });
smo69356.addModifier(new VF.Dot(), 0);
smo69356.addModifier(new VF.Dot(), 0);
smo69370v1ar.push(smo69356);
smo69370v1.addTickables(smo69370v1ar)
fmtsmo6937030.joinVoices([smo69370v1]);
const fmtsmo7451530 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo74515v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74515v0ar = [];
const smo74494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74494.setAttribute('id', 'smo74494');
smo74515v0ar.push(smo74494);
const smo74495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74495.setAttribute('id', 'smo74495');
smo74495.addModifier(new VF.Dot(), 0);
smo74515v0ar.push(smo74495);
const smo74496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74496.setAttribute('id', 'smo74496');
smo74515v0ar.push(smo74496);
const smo74497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74497.setAttribute('id', 'smo74497');
smo74515v0ar.push(smo74497);
const smo74498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74498.setAttribute('id', 'smo74498');
smo74498.addModifier(new VF.Dot(), 0);
smo74515v0ar.push(smo74498);
const smo74499 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74499.setAttribute('id', 'smo74499');
smo74515v0ar.push(smo74499);
smo74515v0.addTickables(smo74515v0ar)
fmtsmo7451530.joinVoices([smo74515v0]);
const smo74515v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74515v1ar = [];
const smo74500 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74500.setAttribute('id', 'smo74500');
smo74500.setStyle({ fillStyle: "#115511" });
smo74515v1ar.push(smo74500);
const smo74501 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74501.setAttribute('id', 'smo74501');
smo74501.setStyle({ fillStyle: "#115511" });
smo74515v1ar.push(smo74501);
smo74515v1.addTickables(smo74515v1ar)
fmtsmo7451530.joinVoices([smo74515v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78091 = smo69340.getStemDirection();
smo69340.setStemDirection(dirsmo78091);
smo69341.setStemDirection(dirsmo78091);
const smo78091 = new VF.Beam([smo69340,smo69341]);
const dirsmo78092 = smo69342.getStemDirection();
smo69342.setStemDirection(dirsmo78092);
smo69343.setStemDirection(dirsmo78092);
smo69344.setStemDirection(dirsmo78092);
smo69345.setStemDirection(dirsmo78092);
const smo78092 = new VF.Beam([smo69342,smo69343,smo69344,smo69345]);
const dirsmo78093 = smo69347.getStemDirection();
smo69347.setStemDirection(dirsmo78093);
smo69348.setStemDirection(dirsmo78093);
const smo78093 = new VF.Beam([smo69347,smo69348]);
const dirsmo78094 = smo69349.getStemDirection();
smo69349.setStemDirection(dirsmo78094);
smo69350.setStemDirection(dirsmo78094);
smo69351.setStemDirection(dirsmo78094);
smo69352.setStemDirection(dirsmo78094);
const smo78094 = new VF.Beam([smo69349,smo69350,smo69351,smo69352]);
 
// formatting measures in staff group smo67190
fmtsmo6937030.format([smo69370v0,smo69370v1,smo74515v0,smo74515v1], 526);
const stavesmo69370 = new VF.Stave(90, 1074, 584);
stavesmo69370.setAttribute('id', 'stavesmo69370');
stavesmo69370.setBegBarType(1);
stavesmo69370.addClef('treble');
stavesmo69370.setContext(context);
stavesmo69370.draw();
smo69370v0.draw(context, stavesmo69370);
smo69370v1.draw(context, stavesmo69370);
smo78091.setContext(context);
smo78091.draw();
smo78092.setContext(context);
smo78092.draw();
smo78093.setContext(context);
smo78093.draw();
smo78094.setContext(context);
smo78094.draw();
const stavesmo74515 = new VF.Stave(90, 1223, 584);
stavesmo74515.setAttribute('id', 'stavesmo74515');
stavesmo74515.setBegBarType(1);
stavesmo74515.addClef('bass');
stavesmo74515.setContext(context);
stavesmo74515.draw();
smo74515v0.draw(context, stavesmo74515);
smo74515v1.draw(context, stavesmo74515);
const leftsmo67190stavesmo693701 = new VF.StaveConnector(stavesmo69370, stavesmo74515).setType(3);
leftsmo67190stavesmo693701.setContext(context).draw();
const fmtsmo6940231 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo69402v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69402v0ar = [];
const smo69371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69371.setAttribute('id', 'smo69371');
smo69402v0ar.push(smo69371);
const smo69372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69372.setAttribute('id', 'smo69372');
smo69402v0ar.push(smo69372);
const smo69373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69373.setAttribute('id', 'smo69373');
const smo693730acc = new VF.Accidental('b');
smo69373.addModifier(smo693730acc, 0);
smo69402v0ar.push(smo69373);
const smo69374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69374.setAttribute('id', 'smo69374');
smo69402v0ar.push(smo69374);
const smo69375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69375.setAttribute('id', 'smo69375');
smo69402v0ar.push(smo69375);
const smo69376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69376.setAttribute('id', 'smo69376');
smo69402v0ar.push(smo69376);
const smo69377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69377.setAttribute('id', 'smo69377');
smo69402v0ar.push(smo69377);
const smo69378 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69378.setAttribute('id', 'smo69378');
smo69402v0ar.push(smo69378);
const smo69379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69379.setAttribute('id', 'smo69379');
smo69402v0ar.push(smo69379);
const smo69380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69380.setAttribute('id', 'smo69380');
smo69402v0ar.push(smo69380);
const smo69381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69381.setAttribute('id', 'smo69381');
smo69402v0ar.push(smo69381);
const smo69382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo69382.setAttribute('id', 'smo69382');
smo69402v0ar.push(smo69382);
const smo69383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo69383.setAttribute('id', 'smo69383');
smo69402v0ar.push(smo69383);
const smo69384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69384.setAttribute('id', 'smo69384');
smo69402v0ar.push(smo69384);
smo69402v0.addTickables(smo69402v0ar)
fmtsmo6940231.joinVoices([smo69402v0]);
const smo69402v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69402v1ar = [];
const smo69385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69385.setAttribute('id', 'smo69385');
smo69385.setStyle({ fillStyle: '#aaaaaa7f' });
smo69402v1ar.push(smo69385);
const smo69386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69386.setAttribute('id', 'smo69386');
smo69386.setStyle({ fillStyle: '#aaaaaa7f' });
smo69386.addModifier(new VF.Dot(), 0);
smo69386.addModifier(new VF.Dot(), 0);
smo69402v1ar.push(smo69386);
const smo69387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69387.setAttribute('id', 'smo69387');
smo69387.setStyle({ fillStyle: '#aaaaaa7f' });
smo69402v1ar.push(smo69387);
const smo69388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4dd","dots":2,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69388.setAttribute('id', 'smo69388');
smo69388.setStyle({ fillStyle: '#aaaaaa7f' });
smo69388.addModifier(new VF.Dot(), 0);
smo69388.addModifier(new VF.Dot(), 0);
smo69402v1ar.push(smo69388);
smo69402v1.addTickables(smo69402v1ar)
fmtsmo6940231.joinVoices([smo69402v1]);
const fmtsmo7453731 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo74537v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74537v0ar = [];
const smo74516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74516.setAttribute('id', 'smo74516');
smo74537v0ar.push(smo74516);
const smo74517 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74517.setAttribute('id', 'smo74517');
smo74517.addModifier(new VF.Dot(), 0);
smo74537v0ar.push(smo74517);
const smo74518 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74518.setAttribute('id', 'smo74518');
smo74537v0ar.push(smo74518);
const smo74519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo74519.setAttribute('id', 'smo74519');
smo74537v0ar.push(smo74519);
const smo74520 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74520.setAttribute('id', 'smo74520');
smo74520.addModifier(new VF.Dot(), 0);
smo74537v0ar.push(smo74520);
const smo74521 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74521.setAttribute('id', 'smo74521');
smo74537v0ar.push(smo74521);
smo74537v0.addTickables(smo74537v0ar)
fmtsmo7453731.joinVoices([smo74537v0]);
const smo74537v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74537v1ar = [];
const smo74522 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo74522.setAttribute('id', 'smo74522');
smo74522.setStyle({ fillStyle: "#115511" });
smo74537v1ar.push(smo74522);
const smo74523 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo74523.setAttribute('id', 'smo74523');
smo74523.setStyle({ fillStyle: "#115511" });
smo74537v1ar.push(smo74523);
smo74537v1.addTickables(smo74537v1ar)
fmtsmo7453731.joinVoices([smo74537v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78099 = smo69372.getStemDirection();
smo69372.setStemDirection(dirsmo78099);
smo69373.setStemDirection(dirsmo78099);
const smo78099 = new VF.Beam([smo69372,smo69373]);
const dirsmo78100 = smo69374.getStemDirection();
smo69374.setStemDirection(dirsmo78100);
smo69375.setStemDirection(dirsmo78100);
smo69376.setStemDirection(dirsmo78100);
smo69377.setStemDirection(dirsmo78100);
const smo78100 = new VF.Beam([smo69374,smo69375,smo69376,smo69377]);
const dirsmo78101 = smo69379.getStemDirection();
smo69379.setStemDirection(dirsmo78101);
smo69380.setStemDirection(dirsmo78101);
const smo78101 = new VF.Beam([smo69379,smo69380]);
const dirsmo78102 = smo69381.getStemDirection();
smo69381.setStemDirection(dirsmo78102);
smo69382.setStemDirection(dirsmo78102);
smo69383.setStemDirection(dirsmo78102);
smo69384.setStemDirection(dirsmo78102);
const smo78102 = new VF.Beam([smo69381,smo69382,smo69383,smo69384]);
 
// formatting measures in staff group smo67190
fmtsmo6940231.format([smo69402v0,smo69402v1,smo74537v0,smo74537v1], 571);
const stavesmo69402 = new VF.Stave(674, 1074, 585);
stavesmo69402.setAttribute('id', 'stavesmo69402');
stavesmo69402.setBegBarType(VF.Barline.type.NONE);
stavesmo69402.setContext(context);
stavesmo69402.draw();
smo69402v0.draw(context, stavesmo69402);
smo69402v1.draw(context, stavesmo69402);
smo78099.setContext(context);
smo78099.draw();
smo78100.setContext(context);
smo78100.draw();
smo78101.setContext(context);
smo78101.draw();
smo78102.setContext(context);
smo78102.draw();
const stavesmo74537 = new VF.Stave(674, 1223, 585);
stavesmo74537.setAttribute('id', 'stavesmo74537');
stavesmo74537.setBegBarType(VF.Barline.type.NONE);
stavesmo74537.setContext(context);
stavesmo74537.draw();
smo74537v0.draw(context, stavesmo74537);
smo74537v1.draw(context, stavesmo74537);
const fmtsmo6943332 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo69433v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69433v0ar = [];
const smo69403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69403.setAttribute('id', 'smo69403');
smo69433v0ar.push(smo69403);
const smo69404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo69404.setAttribute('id', 'smo69404');
smo69433v0ar.push(smo69404);
const smo69405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69405.setAttribute('id', 'smo69405');
smo69433v0ar.push(smo69405);
const smo69406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69406.setAttribute('id', 'smo69406');
smo69433v0ar.push(smo69406);
const smo69407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69407.setAttribute('id', 'smo69407');
smo69433v0ar.push(smo69407);
const smo69408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69408.setAttribute('id', 'smo69408');
smo69433v0ar.push(smo69408);
const smo69409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69409.setAttribute('id', 'smo69409');
smo69433v0ar.push(smo69409);
const smo69410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69410.setAttribute('id', 'smo69410');
smo69433v0ar.push(smo69410);
const smo69411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69411.setAttribute('id', 'smo69411');
smo69433v0ar.push(smo69411);
const smo69412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69412.setAttribute('id', 'smo69412');
smo69433v0ar.push(smo69412);
const smo69413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo69413.setAttribute('id', 'smo69413');
smo69433v0ar.push(smo69413);
const smo69414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69414.setAttribute('id', 'smo69414');
smo69433v0ar.push(smo69414);
const smo69415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo69415.setAttribute('id', 'smo69415');
smo69433v0ar.push(smo69415);
const smo69416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo69416.setAttribute('id', 'smo69416');
smo69433v0ar.push(smo69416);
const smo69417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo69417.setAttribute('id', 'smo69417');
smo69433v0ar.push(smo69417);
smo69433v0.addTickables(smo69433v0ar)
fmtsmo6943332.joinVoices([smo69433v0]);
const smo69433v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69433v1ar = [];
const smo69418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69418.setAttribute('id', 'smo69418');
smo69418.setStyle({ fillStyle: '#aaaaaa7f' });
smo69433v1ar.push(smo69418);
const smo69419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69419.setAttribute('id', 'smo69419');
smo69419.setStyle({ fillStyle: '#aaaaaa7f' });
smo69419.addModifier(new VF.Dot(), 0);
smo69419.addModifier(new VF.Dot(), 0);
smo69419.addModifier(new VF.Dot(), 0);
smo69433v1ar.push(smo69419);
smo69433v1.addTickables(smo69433v1ar)
fmtsmo6943332.joinVoices([smo69433v1]);
const fmtsmo7455732 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo74557v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74557v0ar = [];
const smo74538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["fn/3/r"]}'))
smo74538.setAttribute('id', 'smo74538');
smo74557v0ar.push(smo74538);
const smo74539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo74539.setAttribute('id', 'smo74539');
smo74539.addModifier(new VF.Dot(), 0);
smo74557v0ar.push(smo74539);
const smo74540 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo74540.setAttribute('id', 'smo74540');
smo74557v0ar.push(smo74540);
const smo74541 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo74541.setAttribute('id', 'smo74541');
smo74557v0ar.push(smo74541);
smo74557v0.addTickables(smo74557v0ar)
fmtsmo7455732.joinVoices([smo74557v0]);
const smo74557v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74557v1ar = [];
const smo74542 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n"]}'))
smo74542.setAttribute('id', 'smo74542');
smo74542.setStyle({ fillStyle: "#115511" });
smo74557v1ar.push(smo74542);
const smo74543 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n"]}'))
smo74543.setAttribute('id', 'smo74543');
smo74543.setStyle({ fillStyle: "#115511" });
smo74557v1ar.push(smo74543);
smo74557v1.addTickables(smo74557v1ar)
fmtsmo7455732.joinVoices([smo74557v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78107 = smo69404.getStemDirection();
smo69404.setStemDirection(dirsmo78107);
smo69405.setStemDirection(dirsmo78107);
const smo78107 = new VF.Beam([smo69404,smo69405]);
const dirsmo78108 = smo69406.getStemDirection();
smo69406.setStemDirection(dirsmo78108);
smo69407.setStemDirection(dirsmo78108);
smo69408.setStemDirection(dirsmo78108);
smo69409.setStemDirection(dirsmo78108);
const smo78108 = new VF.Beam([smo69406,smo69407,smo69408,smo69409]);
const dirsmo78109 = smo69410.getStemDirection();
smo69410.setStemDirection(dirsmo78109);
smo69411.setStemDirection(dirsmo78109);
smo69412.setStemDirection(dirsmo78109);
smo69413.setStemDirection(dirsmo78109);
const smo78109 = new VF.Beam([smo69410,smo69411,smo69412,smo69413]);
const dirsmo78110 = smo69414.getStemDirection();
smo69414.setStemDirection(dirsmo78110);
smo69415.setStemDirection(dirsmo78110);
smo69416.setStemDirection(dirsmo78110);
smo69417.setStemDirection(dirsmo78110);
const smo78110 = new VF.Beam([smo69414,smo69415,smo69416,smo69417]);
 
// formatting measures in staff group smo67190
fmtsmo6943332.format([smo69433v0,smo69433v1,smo74557v0,smo74557v1], 535);
const stavesmo69433 = new VF.Stave(1259, 1074, 549);
stavesmo69433.setAttribute('id', 'stavesmo69433');
stavesmo69433.setBegBarType(VF.Barline.type.NONE);
stavesmo69433.setContext(context);
stavesmo69433.draw();
smo69433v0.draw(context, stavesmo69433);
smo69433v1.draw(context, stavesmo69433);
smo78107.setContext(context);
smo78107.draw();
smo78108.setContext(context);
smo78108.draw();
smo78109.setContext(context);
smo78109.draw();
smo78110.setContext(context);
smo78110.draw();
const stavesmo74557 = new VF.Stave(1259, 1223, 549);
stavesmo74557.setAttribute('id', 'stavesmo74557');
stavesmo74557.setBegBarType(VF.Barline.type.NONE);
stavesmo74557.setContext(context);
stavesmo74557.draw();
smo74557v0.draw(context, stavesmo74557);
smo74557v1.draw(context, stavesmo74557);
const rightsmo67190stavesmo694331 = new VF.StaveConnector(stavesmo69433, stavesmo74557).setType(0);
rightsmo67190stavesmo694331.setContext(context).draw();
const fmtsmo6946433 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo69464v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69464v0ar = [];
const smo69434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69434.setAttribute('id', 'smo69434');
smo69464v0ar.push(smo69434);
const smo69435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69435.setAttribute('id', 'smo69435');
smo69464v0ar.push(smo69435);
const smo69436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69436.setAttribute('id', 'smo69436');
smo69464v0ar.push(smo69436);
const smo69437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69437.setAttribute('id', 'smo69437');
smo69464v0ar.push(smo69437);
const smo69438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69438.setAttribute('id', 'smo69438');
smo69464v0ar.push(smo69438);
const smo69439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69439.setAttribute('id', 'smo69439');
smo69464v0ar.push(smo69439);
const smo69440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69440.setAttribute('id', 'smo69440');
smo69464v0ar.push(smo69440);
const smo69441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69441.setAttribute('id', 'smo69441');
smo69464v0ar.push(smo69441);
const smo69442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69442.setAttribute('id', 'smo69442');
smo69464v0ar.push(smo69442);
const smo69443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69443.setAttribute('id', 'smo69443');
smo69464v0ar.push(smo69443);
const smo69444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69444.setAttribute('id', 'smo69444');
smo69464v0ar.push(smo69444);
const smo69445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69445.setAttribute('id', 'smo69445');
smo69464v0ar.push(smo69445);
const smo69446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69446.setAttribute('id', 'smo69446');
smo69464v0ar.push(smo69446);
const smo69447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69447.setAttribute('id', 'smo69447');
smo69464v0ar.push(smo69447);
const smo69448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69448.setAttribute('id', 'smo69448');
smo69464v0ar.push(smo69448);
smo69464v0.addTickables(smo69464v0ar)
fmtsmo6946433.joinVoices([smo69464v0]);
const smo69464v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69464v1ar = [];
const smo69449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo69449.setAttribute('id', 'smo69449');
smo69449.setStyle({ fillStyle: "#115511" });
smo69464v1ar.push(smo69449);
const smo69450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2ddd","dots":3,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69450.setAttribute('id', 'smo69450');
smo69450.setStyle({ fillStyle: '#aaaaaa7f' });
smo69450.addModifier(new VF.Dot(), 0);
smo69450.addModifier(new VF.Dot(), 0);
smo69450.addModifier(new VF.Dot(), 0);
smo69464v1ar.push(smo69450);
smo69464v1.addTickables(smo69464v1ar)
fmtsmo6946433.joinVoices([smo69464v1]);
const fmtsmo7457733 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo74577v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74577v0ar = [];
const smo74558 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74558.setAttribute('id', 'smo74558');
smo74558.setStyle({ fillStyle: '#aaaaaa7f' });
smo74577v0ar.push(smo74558);
const smo74559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74559.setAttribute('id', 'smo74559');
smo74559.addModifier(new VF.Dot(), 0);
smo74577v0ar.push(smo74559);
const smo74560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74560.setAttribute('id', 'smo74560');
smo74577v0ar.push(smo74560);
const smo74561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74561.setAttribute('id', 'smo74561');
smo74577v0ar.push(smo74561);
smo74577v0.addTickables(smo74577v0ar)
fmtsmo7457733.joinVoices([smo74577v0]);
const smo74577v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74577v1ar = [];
const smo74562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo74562.setAttribute('id', 'smo74562');
smo74562.setStyle({ fillStyle: "#115511" });
smo74577v1ar.push(smo74562);
const smo74563 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/2/n"]}'))
smo74563.setAttribute('id', 'smo74563');
smo74563.setStyle({ fillStyle: "#115511" });
smo74577v1ar.push(smo74563);
smo74577v1.addTickables(smo74577v1ar)
fmtsmo7457733.joinVoices([smo74577v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78123 = smo69435.getStemDirection();
smo69435.setStemDirection(dirsmo78123);
smo69436.setStemDirection(dirsmo78123);
const smo78123 = new VF.Beam([smo69435,smo69436]);
const dirsmo78124 = smo69437.getStemDirection();
smo69437.setStemDirection(dirsmo78124);
smo69438.setStemDirection(dirsmo78124);
smo69439.setStemDirection(dirsmo78124);
smo69440.setStemDirection(dirsmo78124);
const smo78124 = new VF.Beam([smo69437,smo69438,smo69439,smo69440]);
const dirsmo78125 = smo69441.getStemDirection();
smo69441.setStemDirection(dirsmo78125);
smo69442.setStemDirection(dirsmo78125);
smo69443.setStemDirection(dirsmo78125);
smo69444.setStemDirection(dirsmo78125);
const smo78125 = new VF.Beam([smo69441,smo69442,smo69443,smo69444]);
const dirsmo78126 = smo69445.getStemDirection();
smo69445.setStemDirection(dirsmo78126);
smo69446.setStemDirection(dirsmo78126);
smo69447.setStemDirection(dirsmo78126);
smo69448.setStemDirection(dirsmo78126);
const smo78126 = new VF.Beam([smo69445,smo69446,smo69447,smo69448]);
 
// formatting measures in staff group smo67190
fmtsmo6946433.format([smo69464v0,smo69464v1,smo74577v0,smo74577v1], 475);
const stavesmo69464 = new VF.Stave(90, 1422, 533);
stavesmo69464.setAttribute('id', 'stavesmo69464');
stavesmo69464.setBegBarType(1);
stavesmo69464.addClef('treble');
stavesmo69464.setContext(context);
stavesmo69464.draw();
smo69464v0.draw(context, stavesmo69464);
smo69464v1.draw(context, stavesmo69464);
smo78123.setContext(context);
smo78123.draw();
smo78124.setContext(context);
smo78124.draw();
smo78125.setContext(context);
smo78125.draw();
smo78126.setContext(context);
smo78126.draw();
const stavesmo74577 = new VF.Stave(90, 1508, 533);
stavesmo74577.setAttribute('id', 'stavesmo74577');
stavesmo74577.setBegBarType(1);
stavesmo74577.addClef('bass');
stavesmo74577.setContext(context);
stavesmo74577.draw();
smo74577v0.draw(context, stavesmo74577);
smo74577v1.draw(context, stavesmo74577);
const leftsmo67190stavesmo694641 = new VF.StaveConnector(stavesmo69464, stavesmo74577).setType(3);
leftsmo67190stavesmo694641.setContext(context).draw();
const fmtsmo6947934 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo69479v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69479v0ar = [];
const smo69465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo69465.setAttribute('id', 'smo69465');
smo69479v0ar.push(smo69465);
smo69479v0.addTickables(smo69479v0ar)
fmtsmo6947934.joinVoices([smo69479v0]);
const fmtsmo7459234 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo74592v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74592v0ar = [];
const smo74578 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo74578.setAttribute('id', 'smo74578');
smo74592v0ar.push(smo74578);
smo74592v0.addTickables(smo74592v0ar)
fmtsmo7459234.joinVoices([smo74592v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
 
// formatting measures in staff group smo67190
fmtsmo6947934.format([smo69479v0,smo74592v0], 54);
const stavesmo69479 = new VF.Stave(623, 1422, 77);
stavesmo69479.setAttribute('id', 'stavesmo69479');
stavesmo69479.setBegBarType(VF.Barline.type.NONE);
stavesmo69479.setEndBarType(3);
stavesmo69479.setContext(context);
stavesmo69479.draw();
smo69479v0.draw(context, stavesmo69479);
const stavesmo74592 = new VF.Stave(623, 1508, 77);
stavesmo74592.setAttribute('id', 'stavesmo74592');
stavesmo74592.setBegBarType(VF.Barline.type.NONE);
stavesmo74592.setEndBarType(3);
stavesmo74592.setContext(context);
stavesmo74592.draw();
smo74592v0.draw(context, stavesmo74592);
const fmtsmo6950335 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo69503v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69503v0ar = [];
const smo69480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69480.setAttribute('id', 'smo69480');
smo69503v0ar.push(smo69480);
smo69503v0.addTickables(smo69503v0ar)
fmtsmo6950335.joinVoices([smo69503v0]);
const smo69503v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69503v1ar = [];
const smo69481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo69481.setAttribute('id', 'smo69481');
smo69481.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69481);
const smo69482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69482.setAttribute('id', 'smo69482');
smo69482.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69482);
const smo69483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69483.setAttribute('id', 'smo69483');
smo69483.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69483);
const smo69484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69484.setAttribute('id', 'smo69484');
smo69484.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69484);
const smo69485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69485.setAttribute('id', 'smo69485');
smo69485.setStyle({ fillStyle: "#115511" });
smo69485.addModifier(new VF.Dot(), 0);
smo69503v1ar.push(smo69485);
const smo69486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69486.setAttribute('id', 'smo69486');
smo69486.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69486);
const smo69487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69487.setAttribute('id', 'smo69487');
smo69487.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69487);
const smo69488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69488.setAttribute('id', 'smo69488');
smo69488.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69488);
const smo69489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69489.setAttribute('id', 'smo69489');
smo69489.setStyle({ fillStyle: "#115511" });
smo69503v1ar.push(smo69489);
smo69503v1.addTickables(smo69503v1ar)
fmtsmo6950335.joinVoices([smo69503v1]);
const fmtsmo7460735 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo74607v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74607v0ar = [];
const smo74593 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74593.setAttribute('id', 'smo74593');
smo74607v0ar.push(smo74593);
smo74607v0.addTickables(smo74607v0ar)
fmtsmo7460735.joinVoices([smo74607v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78133 = smo69482.getStemDirection();
smo69482.setStemDirection(dirsmo78133);
smo69483.setStemDirection(dirsmo78133);
smo69484.setStemDirection(dirsmo78133);
const smo78133 = new VF.Beam([smo69482,smo69483,smo69484]);
const dirsmo78134 = smo69485.getStemDirection();
smo69485.setStemDirection(dirsmo78134);
smo69486.setStemDirection(dirsmo78134);
smo69487.setStemDirection(dirsmo78134);
const smo78134 = new VF.Beam([smo69485,smo69486,smo69487]);
const dirsmo78135 = smo69488.getStemDirection();
smo69488.setStemDirection(dirsmo78135);
smo69489.setStemDirection(dirsmo78135);
const smo78135 = new VF.Beam([smo69488,smo69489]);
 
// formatting measures in staff group smo67190
fmtsmo6950335.format([smo69503v0,smo69503v1,smo74607v0], 264);
const stavesmo69503 = new VF.Stave(700, 1422, 278);
stavesmo69503.setAttribute('id', 'stavesmo69503');
stavesmo69503.setBegBarType(VF.Barline.type.NONE);
stavesmo69503.setTempo(JSON.parse('{"duration":"8","dots":0,"bpm":116,"name":"Moderato e maestoso"}'), -1 * 0);
stavesmo69503.setContext(context);
stavesmo69503.draw();
smo69503v0.draw(context, stavesmo69503);
smo69503v1.draw(context, stavesmo69503);
smo78133.setContext(context);
smo78133.draw();
smo78134.setContext(context);
smo78134.draw();
smo78135.setContext(context);
smo78135.draw();
const stavesmo74607 = new VF.Stave(700, 1508, 278);
stavesmo74607.setAttribute('id', 'stavesmo74607');
stavesmo74607.setBegBarType(VF.Barline.type.NONE);
stavesmo74607.setContext(context);
stavesmo74607.draw();
smo74607v0.draw(context, stavesmo74607);
const fmtsmo6953636 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo69536v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69536v0ar = [];
const smo69504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69504.setAttribute('id', 'smo69504');
smo69536v0ar.push(smo69504);
const smo69505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69505.setAttribute('id', 'smo69505');
smo69536v0ar.push(smo69505);
const smo69506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69506.setAttribute('id', 'smo69506');
smo69536v0ar.push(smo69506);
const smo69507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69507.setAttribute('id', 'smo69507');
smo69536v0ar.push(smo69507);
const smo69508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69508.setAttribute('id', 'smo69508');
smo69536v0ar.push(smo69508);
smo69536v0.addTickables(smo69536v0ar)
fmtsmo6953636.joinVoices([smo69536v0]);
const smo69536v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69536v1ar = [];
const smo69509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69509.setAttribute('id', 'smo69509');
smo69509.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69509);
const smo69510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69510.setAttribute('id', 'smo69510');
smo69510.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69510);
const smo69511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69511.setAttribute('id', 'smo69511');
smo69511.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69511);
const smo69512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69512.setAttribute('id', 'smo69512');
smo69512.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69512);
const smo69513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69513.setAttribute('id', 'smo69513');
smo69513.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69513);
const smo69514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69514.setAttribute('id', 'smo69514');
smo69514.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69514);
const smo69515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69515.setAttribute('id', 'smo69515');
smo69515.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69515);
const smo69516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69516.setAttribute('id', 'smo69516');
smo69516.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69516);
const smo69517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69517.setAttribute('id', 'smo69517');
smo69517.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69517);
const smo69518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69518.setAttribute('id', 'smo69518');
smo69518.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69518);
const smo69519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69519.setAttribute('id', 'smo69519');
smo69519.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69519);
const smo69520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69520.setAttribute('id', 'smo69520');
smo69520.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69520);
const smo69521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69521.setAttribute('id', 'smo69521');
smo69521.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69521);
const smo69522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo69522.setAttribute('id', 'smo69522');
smo69522.setStyle({ fillStyle: "#115511" });
smo69536v1ar.push(smo69522);
smo69536v1.addTickables(smo69536v1ar)
fmtsmo6953636.joinVoices([smo69536v1]);
const fmtsmo7462236 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo74622v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74622v0ar = [];
const smo74608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74608.setAttribute('id', 'smo74608');
smo74622v0ar.push(smo74608);
smo74622v0.addTickables(smo74622v0ar)
fmtsmo7462236.joinVoices([smo74622v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78140 = smo69506.getStemDirection();
smo69506.setStemDirection(dirsmo78140);
smo69507.setStemDirection(dirsmo78140);
smo69508.setStemDirection(dirsmo78140);
const smo78140 = new VF.Beam([smo69506,smo69507,smo69508]);
const dirsmo78141 = smo69509.getStemDirection();
smo69509.setStemDirection(dirsmo78141);
smo69510.setStemDirection(dirsmo78141);
const smo78141 = new VF.Beam([smo69509,smo69510]);
const dirsmo78142 = smo69511.getStemDirection();
smo69511.setStemDirection(dirsmo78142);
smo69512.setStemDirection(dirsmo78142);
smo69513.setStemDirection(dirsmo78142);
smo69514.setStemDirection(dirsmo78142);
const smo78142 = new VF.Beam([smo69511,smo69512,smo69513,smo69514]);
const dirsmo78143 = smo69515.getStemDirection();
smo69515.setStemDirection(dirsmo78143);
smo69516.setStemDirection(dirsmo78143);
smo69517.setStemDirection(dirsmo78143);
smo69518.setStemDirection(dirsmo78143);
const smo78143 = new VF.Beam([smo69515,smo69516,smo69517,smo69518]);
const dirsmo78144 = smo69519.getStemDirection();
smo69519.setStemDirection(dirsmo78144);
smo69520.setStemDirection(dirsmo78144);
smo69521.setStemDirection(dirsmo78144);
smo69522.setStemDirection(dirsmo78144);
const smo78144 = new VF.Beam([smo69519,smo69520,smo69521,smo69522]);
 
// formatting measures in staff group smo67190
fmtsmo6953636.format([smo69536v0,smo69536v1,smo74622v0], 390);
const stavesmo69536 = new VF.Stave(978, 1422, 404);
stavesmo69536.setAttribute('id', 'stavesmo69536');
stavesmo69536.setBegBarType(VF.Barline.type.NONE);
stavesmo69536.setContext(context);
stavesmo69536.draw();
smo69536v0.draw(context, stavesmo69536);
smo69536v1.draw(context, stavesmo69536);
smo78140.setContext(context);
smo78140.draw();
smo78141.setContext(context);
smo78141.draw();
smo78142.setContext(context);
smo78142.draw();
smo78143.setContext(context);
smo78143.draw();
smo78144.setContext(context);
smo78144.draw();
const stavesmo74622 = new VF.Stave(978, 1508, 404);
stavesmo74622.setAttribute('id', 'stavesmo74622');
stavesmo74622.setBegBarType(VF.Barline.type.NONE);
stavesmo74622.setContext(context);
stavesmo74622.draw();
smo74622v0.draw(context, stavesmo74622);
const fmtsmo6956937 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo69569v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69569v0ar = [];
const smo69537 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69537.setAttribute('id', 'smo69537');
smo69537.addModifier(new VF.Dot(), 0);
smo69569v0ar.push(smo69537);
const smo69538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69538.setAttribute('id', 'smo69538');
smo69569v0ar.push(smo69538);
const smo69539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69539.setAttribute('id', 'smo69539');
smo69569v0ar.push(smo69539);
const smo69540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69540.setAttribute('id', 'smo69540');
smo69569v0ar.push(smo69540);
const smo69541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69541.setAttribute('id', 'smo69541');
smo69569v0ar.push(smo69541);
const smo69542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69542.setAttribute('id', 'smo69542');
smo69569v0ar.push(smo69542);
const smo69543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69543.setAttribute('id', 'smo69543');
smo69569v0ar.push(smo69543);
const smo69544 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69544.setAttribute('id', 'smo69544');
smo69569v0ar.push(smo69544);
const smo69545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69545.setAttribute('id', 'smo69545');
smo69569v0ar.push(smo69545);
const smo69546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69546.setAttribute('id', 'smo69546');
smo69569v0ar.push(smo69546);
const smo69547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69547.setAttribute('id', 'smo69547');
smo69569v0ar.push(smo69547);
smo69569v0.addTickables(smo69569v0ar)
fmtsmo6956937.joinVoices([smo69569v0]);
const smo69569v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69569v1ar = [];
const smo69548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo69548.setAttribute('id', 'smo69548');
smo69548.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69548);
const smo69549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69549.setAttribute('id', 'smo69549');
smo69549.setStyle({ fillStyle: "#115511" });
const smo695490acc = new VF.Accidental('#');
smo69549.addModifier(smo695490acc, 0);
smo69569v1ar.push(smo69549);
const smo69550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69550.setAttribute('id', 'smo69550');
smo69550.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69550);
const smo69551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69551.setAttribute('id', 'smo69551');
smo69551.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69551);
const smo69552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69552.setAttribute('id', 'smo69552');
smo69552.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69552);
const smo69553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69553.setAttribute('id', 'smo69553');
smo69553.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69553);
const smo69554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69554.setAttribute('id', 'smo69554');
smo69554.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69554);
const smo69555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69555.setAttribute('id', 'smo69555');
smo69555.setStyle({ fillStyle: "#115511" });
smo69569v1ar.push(smo69555);
smo69569v1.addTickables(smo69569v1ar)
fmtsmo6956937.joinVoices([smo69569v1]);
const fmtsmo7463737 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo74637v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74637v0ar = [];
const smo74623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74623.setAttribute('id', 'smo74623');
smo74637v0ar.push(smo74623);
smo74637v0.addTickables(smo74637v0ar)
fmtsmo7463737.joinVoices([smo74637v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78149 = smo69537.getStemDirection();
smo69537.setStemDirection(dirsmo78149);
smo69538.setStemDirection(dirsmo78149);
smo69539.setStemDirection(dirsmo78149);
const smo78149 = new VF.Beam([smo69537,smo69538,smo69539]);
const dirsmo78150 = smo69540.getStemDirection();
smo69540.setStemDirection(dirsmo78150);
smo69541.setStemDirection(dirsmo78150);
const smo78150 = new VF.Beam([smo69540,smo69541]);
const dirsmo78151 = smo69542.getStemDirection();
smo69542.setStemDirection(dirsmo78151);
smo69543.setStemDirection(dirsmo78151);
const smo78151 = new VF.Beam([smo69542,smo69543]);
const dirsmo78152 = smo69544.getStemDirection();
smo69544.setStemDirection(dirsmo78152);
smo69545.setStemDirection(dirsmo78152);
smo69546.setStemDirection(dirsmo78152);
smo69547.setStemDirection(dirsmo78152);
const smo78152 = new VF.Beam([smo69544,smo69545,smo69546,smo69547]);
const dirsmo78153 = smo69548.getStemDirection();
smo69548.setStemDirection(dirsmo78153);
smo69549.setStemDirection(dirsmo78153);
const smo78153 = new VF.Beam([smo69548,smo69549]);
const dirsmo78154 = smo69551.getStemDirection();
smo69551.setStemDirection(dirsmo78154);
smo69552.setStemDirection(dirsmo78154);
smo69553.setStemDirection(dirsmo78154);
const smo78154 = new VF.Beam([smo69551,smo69552,smo69553]);
const dirsmo78155 = smo69554.getStemDirection();
smo69554.setStemDirection(dirsmo78155);
smo69555.setStemDirection(dirsmo78155);
const smo78155 = new VF.Beam([smo69554,smo69555]);
 
// formatting measures in staff group smo67190
fmtsmo6956937.format([smo69569v0,smo69569v1,smo74637v0], 410);
const stavesmo69569 = new VF.Stave(1382, 1422, 424);
stavesmo69569.setAttribute('id', 'stavesmo69569');
stavesmo69569.setBegBarType(VF.Barline.type.NONE);
stavesmo69569.setContext(context);
stavesmo69569.draw();
smo69569v0.draw(context, stavesmo69569);
smo69569v1.draw(context, stavesmo69569);
smo78149.setContext(context);
smo78149.draw();
smo78150.setContext(context);
smo78150.draw();
smo78151.setContext(context);
smo78151.draw();
smo78152.setContext(context);
smo78152.draw();
smo78153.setContext(context);
smo78153.draw();
smo78154.setContext(context);
smo78154.draw();
smo78155.setContext(context);
smo78155.draw();
const stavesmo74637 = new VF.Stave(1382, 1508, 424);
stavesmo74637.setAttribute('id', 'stavesmo74637');
stavesmo74637.setBegBarType(VF.Barline.type.NONE);
stavesmo74637.setContext(context);
stavesmo74637.draw();
smo74637v0.draw(context, stavesmo74637);
const rightsmo67190stavesmo695691 = new VF.StaveConnector(stavesmo69569, stavesmo74637).setType(0);
rightsmo67190stavesmo695691.setContext(context).draw();
const fmtsmo6960538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo69605v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69605v0ar = [];
const smo69570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69570.setAttribute('id', 'smo69570');
smo69605v0ar.push(smo69570);
const smo69571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69571.setAttribute('id', 'smo69571');
smo69605v0ar.push(smo69571);
const smo69572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69572.setAttribute('id', 'smo69572');
smo69605v0ar.push(smo69572);
const smo69573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69573.setAttribute('id', 'smo69573');
smo69605v0ar.push(smo69573);
const smo69574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69574.setAttribute('id', 'smo69574');
smo69605v0ar.push(smo69574);
const smo69575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69575.setAttribute('id', 'smo69575');
smo69605v0ar.push(smo69575);
const smo69576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69576.setAttribute('id', 'smo69576');
smo69605v0ar.push(smo69576);
const smo69577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69577.setAttribute('id', 'smo69577');
smo69605v0ar.push(smo69577);
const smo69578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69578.setAttribute('id', 'smo69578');
smo69605v0ar.push(smo69578);
const smo69579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69579.setAttribute('id', 'smo69579');
smo69605v0ar.push(smo69579);
const smo69580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69580.setAttribute('id', 'smo69580');
smo69605v0ar.push(smo69580);
const smo69581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo69581.setAttribute('id', 'smo69581');
const smo695810acc = new VF.Accidental('#');
smo69581.addModifier(smo695810acc, 0);
smo69605v0ar.push(smo69581);
const smo69582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69582.setAttribute('id', 'smo69582');
smo69605v0ar.push(smo69582);
const smo69583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69583.setAttribute('id', 'smo69583');
smo69605v0ar.push(smo69583);
smo69605v0.addTickables(smo69605v0ar)
fmtsmo6960538.joinVoices([smo69605v0]);
const smo69605v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69605v1ar = [];
const smo69584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69584.setAttribute('id', 'smo69584');
smo69584.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69584);
const smo69585 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69585.setAttribute('id', 'smo69585');
smo69585.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69585);
const smo69586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69586.setAttribute('id', 'smo69586');
smo69586.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69586);
const smo69587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69587.setAttribute('id', 'smo69587');
smo69587.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69587);
const smo69588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69588.setAttribute('id', 'smo69588');
smo69588.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69588);
const smo69589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo69589.setAttribute('id', 'smo69589');
smo69589.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69589);
const smo69590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/3/r"]}'))
smo69590.setAttribute('id', 'smo69590');
smo69590.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69590);
const smo69591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69591.setAttribute('id', 'smo69591');
smo69591.setStyle({ fillStyle: "#115511" });
smo69605v1ar.push(smo69591);
smo69605v1.addTickables(smo69605v1ar)
fmtsmo6960538.joinVoices([smo69605v1]);
const fmtsmo7466038 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo74660v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74660v0ar = [];
const smo74638 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74638.setAttribute('id', 'smo74638');
smo74660v0ar.push(smo74638);
const smo74639 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74639.setAttribute('id', 'smo74639');
smo74660v0ar.push(smo74639);
const smo74640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74640.setAttribute('id', 'smo74640');
smo74660v0ar.push(smo74640);
const smo74641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74641.setAttribute('id', 'smo74641');
smo74660v0ar.push(smo74641);
const smo74642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74642.setAttribute('id', 'smo74642');
smo74642.addModifier(new VF.Dot(), 0);
smo74660v0ar.push(smo74642);
const smo74643 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74643.setAttribute('id', 'smo74643');
smo74660v0ar.push(smo74643);
const smo74644 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74644.setAttribute('id', 'smo74644');
smo74660v0ar.push(smo74644);
const smo74645 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74645.setAttribute('id', 'smo74645');
smo74660v0ar.push(smo74645);
const smo74646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74646.setAttribute('id', 'smo74646');
smo74660v0ar.push(smo74646);
smo74660v0.addTickables(smo74660v0ar)
fmtsmo7466038.joinVoices([smo74660v0]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78171 = smo69570.getStemDirection();
smo69570.setStemDirection(dirsmo78171);
smo69571.setStemDirection(dirsmo78171);
smo69572.setStemDirection(dirsmo78171);
smo69573.setStemDirection(dirsmo78171);
const smo78171 = new VF.Beam([smo69570,smo69571,smo69572,smo69573]);
const dirsmo78172 = smo69574.getStemDirection();
smo69574.setStemDirection(dirsmo78172);
smo69575.setStemDirection(dirsmo78172);
smo69576.setStemDirection(dirsmo78172);
smo69577.setStemDirection(dirsmo78172);
const smo78172 = new VF.Beam([smo69574,smo69575,smo69576,smo69577]);
const dirsmo78173 = smo69578.getStemDirection();
smo69578.setStemDirection(dirsmo78173);
smo69579.setStemDirection(dirsmo78173);
smo69580.setStemDirection(dirsmo78173);
smo69581.setStemDirection(dirsmo78173);
const smo78173 = new VF.Beam([smo69578,smo69579,smo69580,smo69581]);
const dirsmo78174 = smo69582.getStemDirection();
smo69582.setStemDirection(dirsmo78174);
smo69583.setStemDirection(dirsmo78174);
const smo78174 = new VF.Beam([smo69582,smo69583]);
const dirsmo78175 = smo69584.getStemDirection();
smo69584.setStemDirection(dirsmo78175);
smo69585.setStemDirection(dirsmo78175);
smo69586.setStemDirection(dirsmo78175);
smo69587.setStemDirection(dirsmo78175);
const smo78175 = new VF.Beam([smo69584,smo69585,smo69586,smo69587]);
const dirsmo78178 = smo74639.getStemDirection();
smo74639.setStemDirection(dirsmo78178);
smo74640.setStemDirection(dirsmo78178);
smo74641.setStemDirection(dirsmo78178);
const smo78178 = new VF.Beam([smo74639,smo74640,smo74641]);
const dirsmo78179 = smo74642.getStemDirection();
smo74642.setStemDirection(dirsmo78179);
smo74643.setStemDirection(dirsmo78179);
smo74644.setStemDirection(dirsmo78179);
smo74645.setStemDirection(dirsmo78179);
smo74646.setStemDirection(dirsmo78179);
const smo78179 = new VF.Beam([smo74642,smo74643,smo74644,smo74645,smo74646]);
 
// formatting measures in staff group smo67190
fmtsmo6960538.format([smo69605v0,smo69605v1,smo74660v0], 372);
const stavesmo69605 = new VF.Stave(90, 1712, 430);
stavesmo69605.setAttribute('id', 'stavesmo69605');
stavesmo69605.setBegBarType(1);
stavesmo69605.addClef('treble');
stavesmo69605.setContext(context);
stavesmo69605.draw();
smo69605v0.draw(context, stavesmo69605);
smo69605v1.draw(context, stavesmo69605);
smo78171.setContext(context);
smo78171.draw();
smo78172.setContext(context);
smo78172.draw();
smo78173.setContext(context);
smo78173.draw();
smo78174.setContext(context);
smo78174.draw();
smo78175.setContext(context);
smo78175.draw();
const stavesmo74660 = new VF.Stave(90, 1861, 430);
stavesmo74660.setAttribute('id', 'stavesmo74660');
stavesmo74660.setBegBarType(1);
stavesmo74660.addClef('bass');
stavesmo74660.setContext(context);
stavesmo74660.draw();
smo74660v0.draw(context, stavesmo74660);
smo78178.setContext(context);
smo78178.draw();
smo78179.setContext(context);
smo78179.draw();
const leftsmo67190stavesmo696051 = new VF.StaveConnector(stavesmo69605, stavesmo74660).setType(3);
leftsmo67190stavesmo696051.setContext(context).draw();
const fmtsmo6963939 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo69639v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69639v0ar = [];
const smo69606 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69606.setAttribute('id', 'smo69606');
smo69639v0ar.push(smo69606);
const smo69607 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69607.setAttribute('id', 'smo69607');
smo69639v0ar.push(smo69607);
const smo69608 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69608.setAttribute('id', 'smo69608');
smo69639v0ar.push(smo69608);
const smo69609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69609.setAttribute('id', 'smo69609');
smo69639v0ar.push(smo69609);
const smo69610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69610.setAttribute('id', 'smo69610');
smo69639v0ar.push(smo69610);
const smo69611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69611.setAttribute('id', 'smo69611');
smo69639v0ar.push(smo69611);
const smo69612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69612.setAttribute('id', 'smo69612');
smo69612.addModifier(new VF.Dot(), 0);
smo69639v0ar.push(smo69612);
const smo69613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69613.setAttribute('id', 'smo69613');
smo69639v0ar.push(smo69613);
const smo69614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69614.setAttribute('id', 'smo69614');
smo69639v0ar.push(smo69614);
const smo69615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69615.setAttribute('id', 'smo69615');
smo69639v0ar.push(smo69615);
const smo69616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69616.setAttribute('id', 'smo69616');
smo69639v0ar.push(smo69616);
const smo69617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69617.setAttribute('id', 'smo69617');
smo69639v0ar.push(smo69617);
smo69639v0.addTickables(smo69639v0ar)
fmtsmo6963939.joinVoices([smo69639v0]);
const smo69639v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69639v1ar = [];
const smo69618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69618.setAttribute('id', 'smo69618');
smo69618.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69618);
const smo69619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69619.setAttribute('id', 'smo69619');
smo69619.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69619);
const smo69620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69620.setAttribute('id', 'smo69620');
smo69620.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69620);
const smo69621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69621.setAttribute('id', 'smo69621');
smo69621.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69621);
const smo69622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69622.setAttribute('id', 'smo69622');
smo69622.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69622);
const smo69623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69623.setAttribute('id', 'smo69623');
smo69623.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69623);
const smo69624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69624.setAttribute('id', 'smo69624');
smo69624.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69624);
const smo69625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69625.setAttribute('id', 'smo69625');
smo69625.setStyle({ fillStyle: "#115511" });
smo69639v1ar.push(smo69625);
smo69639v1.addTickables(smo69639v1ar)
fmtsmo6963939.joinVoices([smo69639v1]);
const fmtsmo7468939 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo74689v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74689v0ar = [];
const smo74661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74661.setAttribute('id', 'smo74661');
smo74689v0ar.push(smo74661);
const smo74662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74662.setAttribute('id', 'smo74662');
smo74689v0ar.push(smo74662);
const smo74663 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74663.setAttribute('id', 'smo74663');
smo74689v0ar.push(smo74663);
const smo74664 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74664.setAttribute('id', 'smo74664');
smo74689v0ar.push(smo74664);
const smo74665 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74665.setAttribute('id', 'smo74665');
smo74689v0ar.push(smo74665);
const smo74666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74666.setAttribute('id', 'smo74666');
smo74689v0ar.push(smo74666);
const smo74667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74667.setAttribute('id', 'smo74667');
smo74689v0ar.push(smo74667);
const smo74668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74668.setAttribute('id', 'smo74668');
smo74689v0ar.push(smo74668);
const smo74669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74669.setAttribute('id', 'smo74669');
smo74689v0ar.push(smo74669);
const smo74670 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo74670.setAttribute('id', 'smo74670');
const smo746700acc = new VF.Accidental('b');
smo74670.addModifier(smo746700acc, 0);
smo74689v0ar.push(smo74670);
smo74689v0.addTickables(smo74689v0ar)
fmtsmo7468939.joinVoices([smo74689v0]);
const smo74689v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74689v1ar = [];
const smo74671 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74671.setAttribute('id', 'smo74671');
smo74671.setStyle({ fillStyle: "#115511" });
smo74689v1ar.push(smo74671);
const smo74672 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74672.setAttribute('id', 'smo74672');
smo74672.setStyle({ fillStyle: "#115511" });
smo74689v1ar.push(smo74672);
const smo74673 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74673.setAttribute('id', 'smo74673');
smo74673.setStyle({ fillStyle: "#115511" });
smo74689v1ar.push(smo74673);
const smo74674 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74674.setAttribute('id', 'smo74674');
smo74674.setStyle({ fillStyle: "#115511" });
smo74689v1ar.push(smo74674);
const smo74675 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74675.setAttribute('id', 'smo74675');
smo74675.setStyle({ fillStyle: "#115511" });
smo74689v1ar.push(smo74675);
smo74689v1.addTickables(smo74689v1ar)
fmtsmo7468939.joinVoices([smo74689v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78182 = smo69606.getStemDirection();
smo69606.setStemDirection(dirsmo78182);
smo69607.setStemDirection(dirsmo78182);
const smo78182 = new VF.Beam([smo69606,smo69607]);
const dirsmo78183 = smo69608.getStemDirection();
smo69608.setStemDirection(dirsmo78183);
smo69609.setStemDirection(dirsmo78183);
smo69610.setStemDirection(dirsmo78183);
smo69611.setStemDirection(dirsmo78183);
const smo78183 = new VF.Beam([smo69608,smo69609,smo69610,smo69611]);
const dirsmo78184 = smo69612.getStemDirection();
smo69612.setStemDirection(dirsmo78184);
smo69613.setStemDirection(dirsmo78184);
const smo78184 = new VF.Beam([smo69612,smo69613]);
const dirsmo78185 = smo69614.getStemDirection();
smo69614.setStemDirection(dirsmo78185);
smo69615.setStemDirection(dirsmo78185);
smo69616.setStemDirection(dirsmo78185);
smo69617.setStemDirection(dirsmo78185);
const smo78185 = new VF.Beam([smo69614,smo69615,smo69616,smo69617]);
const dirsmo78186 = smo69618.getStemDirection();
smo69618.setStemDirection(dirsmo78186);
smo69619.setStemDirection(dirsmo78186);
smo69620.setStemDirection(dirsmo78186);
const smo78186 = new VF.Beam([smo69618,smo69619,smo69620]);
const dirsmo78187 = smo69622.getStemDirection();
smo69622.setStemDirection(dirsmo78187);
smo69623.setStemDirection(dirsmo78187);
smo69624.setStemDirection(dirsmo78187);
const smo78187 = new VF.Beam([smo69622,smo69623,smo69624]);
const dirsmo78190 = smo74661.getStemDirection();
smo74661.setStemDirection(dirsmo78190);
smo74662.setStemDirection(dirsmo78190);
const smo78190 = new VF.Beam([smo74661,smo74662]);
const dirsmo78191 = smo74663.getStemDirection();
smo74663.setStemDirection(dirsmo78191);
smo74664.setStemDirection(dirsmo78191);
smo74665.setStemDirection(dirsmo78191);
smo74666.setStemDirection(dirsmo78191);
const smo78191 = new VF.Beam([smo74663,smo74664,smo74665,smo74666]);
const dirsmo78192 = smo74667.getStemDirection();
smo74667.setStemDirection(dirsmo78192);
smo74668.setStemDirection(dirsmo78192);
const smo78192 = new VF.Beam([smo74667,smo74668]);
const dirsmo78193 = smo74669.getStemDirection();
smo74669.setStemDirection(dirsmo78193);
smo74670.setStemDirection(dirsmo78193);
const smo78193 = new VF.Beam([smo74669,smo74670]);
const dirsmo78194 = smo74673.getStemDirection();
smo74673.setStemDirection(dirsmo78194);
smo74674.setStemDirection(dirsmo78194);
smo74675.setStemDirection(dirsmo78194);
const smo78194 = new VF.Beam([smo74673,smo74674,smo74675]);
 
// formatting measures in staff group smo67190
fmtsmo6963939.format([smo69639v0,smo69639v1,smo74689v0,smo74689v1], 390);
const stavesmo69639 = new VF.Stave(520, 1712, 404);
stavesmo69639.setAttribute('id', 'stavesmo69639');
stavesmo69639.setBegBarType(VF.Barline.type.NONE);
stavesmo69639.setContext(context);
stavesmo69639.draw();
smo69639v0.draw(context, stavesmo69639);
smo69639v1.draw(context, stavesmo69639);
smo78182.setContext(context);
smo78182.draw();
smo78183.setContext(context);
smo78183.draw();
smo78184.setContext(context);
smo78184.draw();
smo78185.setContext(context);
smo78185.draw();
smo78186.setContext(context);
smo78186.draw();
smo78187.setContext(context);
smo78187.draw();
const stavesmo74689 = new VF.Stave(520, 1861, 404);
stavesmo74689.setAttribute('id', 'stavesmo74689');
stavesmo74689.setBegBarType(VF.Barline.type.NONE);
stavesmo74689.setContext(context);
stavesmo74689.draw();
smo74689v0.draw(context, stavesmo74689);
smo74689v1.draw(context, stavesmo74689);
smo78190.setContext(context);
smo78190.draw();
smo78191.setContext(context);
smo78191.draw();
smo78192.setContext(context);
smo78192.draw();
smo78193.setContext(context);
smo78193.draw();
smo78194.setContext(context);
smo78194.draw();
const fmtsmo6966840 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo69668v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69668v0ar = [];
const smo69640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69640.setAttribute('id', 'smo69640');
smo69668v0ar.push(smo69640);
const smo69641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69641.setAttribute('id', 'smo69641');
smo69668v0ar.push(smo69641);
const smo69642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69642.setAttribute('id', 'smo69642');
smo69668v0ar.push(smo69642);
const smo69643 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69643.setAttribute('id', 'smo69643');
smo69668v0ar.push(smo69643);
const smo69644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69644.setAttribute('id', 'smo69644');
smo69668v0ar.push(smo69644);
const smo69645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69645.setAttribute('id', 'smo69645');
smo69668v0ar.push(smo69645);
smo69668v0.addTickables(smo69668v0ar)
fmtsmo6966840.joinVoices([smo69668v0]);
const smo69668v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69668v1ar = [];
const smo69646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo69646.setAttribute('id', 'smo69646');
smo69646.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69646);
const smo69647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69647.setAttribute('id', 'smo69647');
smo69647.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69647);
const smo69648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69648.setAttribute('id', 'smo69648');
smo69648.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69648);
const smo69649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69649.setAttribute('id', 'smo69649');
smo69649.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69649);
const smo69650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69650.setAttribute('id', 'smo69650');
smo69650.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69650);
const smo69651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69651.setAttribute('id', 'smo69651');
smo69651.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69651);
const smo69652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/4/n"]}'))
smo69652.setAttribute('id', 'smo69652');
smo69652.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69652);
const smo69653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69653.setAttribute('id', 'smo69653');
smo69653.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69653);
const smo69654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69654.setAttribute('id', 'smo69654');
smo69654.setStyle({ fillStyle: "#115511" });
smo69668v1ar.push(smo69654);
smo69668v1.addTickables(smo69668v1ar)
fmtsmo6966840.joinVoices([smo69668v1]);
const fmtsmo7472340 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo74723v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74723v0ar = [];
const smo74690 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74690.setAttribute('id', 'smo74690');
smo74723v0ar.push(smo74690);
const smo74691 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74691.setAttribute('id', 'smo74691');
smo74723v0ar.push(smo74691);
const smo74692 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74692.setAttribute('id', 'smo74692');
smo74723v0ar.push(smo74692);
const smo74693 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74693.setAttribute('id', 'smo74693');
smo74723v0ar.push(smo74693);
const smo74694 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74694.setAttribute('id', 'smo74694');
smo74723v0ar.push(smo74694);
const smo74695 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74695.setAttribute('id', 'smo74695');
smo74723v0ar.push(smo74695);
const smo74696 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74696.setAttribute('id', 'smo74696');
smo74723v0ar.push(smo74696);
const smo74697 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74697.setAttribute('id', 'smo74697');
smo74723v0ar.push(smo74697);
const smo74698 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74698.setAttribute('id', 'smo74698');
smo74723v0ar.push(smo74698);
smo74723v0.addTickables(smo74723v0ar)
fmtsmo7472340.joinVoices([smo74723v0]);
const smo74723v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74723v1ar = [];
const smo74699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74699.setAttribute('id', 'smo74699');
smo74699.setStyle({ fillStyle: "#115511" });
smo74699.addModifier(new VF.Dot(), 0);
smo74723v1ar.push(smo74699);
const smo74700 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74700.setAttribute('id', 'smo74700');
smo74700.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74700);
const smo74701 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74701.setAttribute('id', 'smo74701');
smo74701.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74701);
const smo74702 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74702.setAttribute('id', 'smo74702');
smo74702.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74702);
const smo74703 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74703.setAttribute('id', 'smo74703');
smo74703.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74703);
const smo74704 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74704.setAttribute('id', 'smo74704');
smo74704.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74704);
const smo74705 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74705.setAttribute('id', 'smo74705');
smo74705.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74705);
const smo74706 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74706.setAttribute('id', 'smo74706');
smo74706.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74706);
const smo74707 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74707.setAttribute('id', 'smo74707');
smo74707.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74707);
const smo74708 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74708.setAttribute('id', 'smo74708');
smo74708.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74708);
const smo74709 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74709.setAttribute('id', 'smo74709');
smo74709.setStyle({ fillStyle: "#115511" });
smo74723v1ar.push(smo74709);
smo74723v1.addTickables(smo74723v1ar)
fmtsmo7472340.joinVoices([smo74723v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78197 = smo69640.getStemDirection();
smo69640.setStemDirection(dirsmo78197);
smo69641.setStemDirection(dirsmo78197);
smo69642.setStemDirection(dirsmo78197);
smo69643.setStemDirection(dirsmo78197);
const smo78197 = new VF.Beam([smo69640,smo69641,smo69642,smo69643]);
const dirsmo78198 = smo69646.getStemDirection();
smo69646.setStemDirection(dirsmo78198);
smo69647.setStemDirection(dirsmo78198);
const smo78198 = new VF.Beam([smo69646,smo69647]);
const dirsmo78199 = smo69649.getStemDirection();
smo69649.setStemDirection(dirsmo78199);
smo69650.setStemDirection(dirsmo78199);
smo69651.setStemDirection(dirsmo78199);
const smo78199 = new VF.Beam([smo69649,smo69650,smo69651]);
const dirsmo78200 = smo69652.getStemDirection();
smo69652.setStemDirection(dirsmo78200);
smo69653.setStemDirection(dirsmo78200);
const smo78200 = new VF.Beam([smo69652,smo69653]);
const dirsmo78203 = smo74690.getStemDirection();
smo74690.setStemDirection(dirsmo78203);
smo74691.setStemDirection(dirsmo78203);
smo74692.setStemDirection(dirsmo78203);
smo74693.setStemDirection(dirsmo78203);
const smo78203 = new VF.Beam([smo74690,smo74691,smo74692,smo74693]);
const dirsmo78204 = smo74695.getStemDirection();
smo74695.setStemDirection(dirsmo78204);
smo74696.setStemDirection(dirsmo78204);
smo74697.setStemDirection(dirsmo78204);
const smo78204 = new VF.Beam([smo74695,smo74696,smo74697]);
const dirsmo78205 = smo74699.getStemDirection();
smo74699.setStemDirection(dirsmo78205);
smo74700.setStemDirection(dirsmo78205);
smo74701.setStemDirection(dirsmo78205);
const smo78205 = new VF.Beam([smo74699,smo74700,smo74701]);
const dirsmo78206 = smo74702.getStemDirection();
smo74702.setStemDirection(dirsmo78206);
smo74703.setStemDirection(dirsmo78206);
const smo78206 = new VF.Beam([smo74702,smo74703]);
const dirsmo78207 = smo74704.getStemDirection();
smo74704.setStemDirection(dirsmo78207);
smo74705.setStemDirection(dirsmo78207);
const smo78207 = new VF.Beam([smo74704,smo74705]);
const dirsmo78208 = smo74706.getStemDirection();
smo74706.setStemDirection(dirsmo78208);
smo74707.setStemDirection(dirsmo78208);
smo74708.setStemDirection(dirsmo78208);
smo74709.setStemDirection(dirsmo78208);
const smo78208 = new VF.Beam([smo74706,smo74707,smo74708,smo74709]);
 
// formatting measures in staff group smo67190
fmtsmo6966840.format([smo69668v0,smo69668v1,smo74723v0,smo74723v1], 427);
const stavesmo69668 = new VF.Stave(924, 1712, 441);
stavesmo69668.setAttribute('id', 'stavesmo69668');
stavesmo69668.setBegBarType(VF.Barline.type.NONE);
stavesmo69668.setContext(context);
stavesmo69668.draw();
smo69668v0.draw(context, stavesmo69668);
smo69668v1.draw(context, stavesmo69668);
smo78197.setContext(context);
smo78197.draw();
smo78198.setContext(context);
smo78198.draw();
smo78199.setContext(context);
smo78199.draw();
smo78200.setContext(context);
smo78200.draw();
const stavesmo74723 = new VF.Stave(924, 1861, 441);
stavesmo74723.setAttribute('id', 'stavesmo74723');
stavesmo74723.setBegBarType(VF.Barline.type.NONE);
stavesmo74723.setContext(context);
stavesmo74723.draw();
smo74723v0.draw(context, stavesmo74723);
smo74723v1.draw(context, stavesmo74723);
smo78203.setContext(context);
smo78203.draw();
smo78204.setContext(context);
smo78204.draw();
smo78205.setContext(context);
smo78205.draw();
smo78206.setContext(context);
smo78206.draw();
smo78207.setContext(context);
smo78207.draw();
smo78208.setContext(context);
smo78208.draw();
const fmtsmo6969441 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo69694v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69694v0ar = [];
const smo69669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69669.setAttribute('id', 'smo69669');
smo69694v0ar.push(smo69669);
const smo69670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69670.setAttribute('id', 'smo69670');
smo69694v0ar.push(smo69670);
const smo69671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69671.setAttribute('id', 'smo69671');
smo69694v0ar.push(smo69671);
const smo69672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69672.setAttribute('id', 'smo69672');
smo69694v0ar.push(smo69672);
const smo69673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69673.setAttribute('id', 'smo69673');
smo69673.addModifier(new VF.Dot(), 0);
smo69694v0ar.push(smo69673);
const smo69674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69674.setAttribute('id', 'smo69674');
smo69694v0ar.push(smo69674);
const smo69675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69675.setAttribute('id', 'smo69675');
smo69694v0ar.push(smo69675);
const smo69676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69676.setAttribute('id', 'smo69676');
smo69694v0ar.push(smo69676);
const smo69677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69677.setAttribute('id', 'smo69677');
smo69694v0ar.push(smo69677);
smo69694v0.addTickables(smo69694v0ar)
fmtsmo6969441.joinVoices([smo69694v0]);
const smo69694v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69694v1ar = [];
const smo69678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69678.setAttribute('id', 'smo69678');
smo69678.setStyle({ fillStyle: "#115511" });
smo69694v1ar.push(smo69678);
const smo69679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69679.setAttribute('id', 'smo69679');
smo69679.setStyle({ fillStyle: '#aaaaaa7f' });
smo69694v1ar.push(smo69679);
const smo69680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69680.setAttribute('id', 'smo69680');
smo69680.setStyle({ fillStyle: '#aaaaaa7f' });
smo69694v1ar.push(smo69680);
smo69694v1.addTickables(smo69694v1ar)
fmtsmo6969441.joinVoices([smo69694v1]);
const fmtsmo7475741 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo74757v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74757v0ar = [];
const smo74724 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74724.setAttribute('id', 'smo74724');
smo74757v0ar.push(smo74724);
const smo74725 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74725.setAttribute('id', 'smo74725');
smo74757v0ar.push(smo74725);
const smo74726 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74726.setAttribute('id', 'smo74726');
smo74757v0ar.push(smo74726);
const smo74727 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74727.setAttribute('id', 'smo74727');
smo74757v0ar.push(smo74727);
const smo74728 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74728.setAttribute('id', 'smo74728');
smo74757v0ar.push(smo74728);
const smo74729 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74729.setAttribute('id', 'smo74729');
smo74729.addModifier(new VF.Dot(), 0);
smo74757v0ar.push(smo74729);
const smo74730 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74730.setAttribute('id', 'smo74730');
smo74757v0ar.push(smo74730);
const smo74731 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74731.setAttribute('id', 'smo74731');
smo74757v0ar.push(smo74731);
smo74757v0.addTickables(smo74757v0ar)
fmtsmo7475741.joinVoices([smo74757v0]);
const smo74757v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74757v1ar = [];
const smo74732 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74732.setAttribute('id', 'smo74732');
smo74732.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74732);
const smo74733 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/3/n"]}'))
smo74733.setAttribute('id', 'smo74733');
smo74733.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74733);
const smo74734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74734.setAttribute('id', 'smo74734');
smo74734.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74734);
const smo74735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74735.setAttribute('id', 'smo74735');
smo74735.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74735);
const smo74736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74736.setAttribute('id', 'smo74736');
smo74736.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74736);
const smo74737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74737.setAttribute('id', 'smo74737');
smo74737.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74737);
const smo74738 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74738.setAttribute('id', 'smo74738');
smo74738.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74738);
const smo74739 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74739.setAttribute('id', 'smo74739');
smo74739.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74739);
const smo74740 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo74740.setAttribute('id', 'smo74740');
smo74740.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74740);
const smo74741 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74741.setAttribute('id', 'smo74741');
smo74741.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74741);
const smo74742 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74742.setAttribute('id', 'smo74742');
smo74742.setStyle({ fillStyle: "#115511" });
smo74757v1ar.push(smo74742);
const smo74743 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/3/n"]}'))
smo74743.setAttribute('id', 'smo74743');
smo74743.setStyle({ fillStyle: "#115511" });
const smo747430acc = new VF.Accidental('#');
smo74743.addModifier(smo747430acc, 0);
smo74757v1ar.push(smo74743);
smo74757v1.addTickables(smo74757v1ar)
fmtsmo7475741.joinVoices([smo74757v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78211 = smo69670.getStemDirection();
smo69670.setStemDirection(dirsmo78211);
smo69671.setStemDirection(dirsmo78211);
smo69672.setStemDirection(dirsmo78211);
const smo78211 = new VF.Beam([smo69670,smo69671,smo69672]);
const dirsmo78212 = smo69673.getStemDirection();
smo69673.setStemDirection(dirsmo78212);
smo69674.setStemDirection(dirsmo78212);
smo69675.setStemDirection(dirsmo78212);
const smo78212 = new VF.Beam([smo69673,smo69674,smo69675]);
const dirsmo78213 = smo69676.getStemDirection();
smo69676.setStemDirection(dirsmo78213);
smo69677.setStemDirection(dirsmo78213);
const smo78213 = new VF.Beam([smo69676,smo69677]);
const dirsmo78216 = smo74726.getStemDirection();
smo74726.setStemDirection(dirsmo78216);
smo74727.setStemDirection(dirsmo78216);
const smo78216 = new VF.Beam([smo74726,smo74727]);
const dirsmo78217 = smo74729.getStemDirection();
smo74729.setStemDirection(dirsmo78217);
smo74730.setStemDirection(dirsmo78217);
smo74731.setStemDirection(dirsmo78217);
const smo78217 = new VF.Beam([smo74729,smo74730,smo74731]);
const dirsmo78218 = smo74732.getStemDirection();
smo74732.setStemDirection(dirsmo78218);
smo74733.setStemDirection(dirsmo78218);
smo74734.setStemDirection(dirsmo78218);
smo74735.setStemDirection(dirsmo78218);
const smo78218 = new VF.Beam([smo74732,smo74733,smo74734,smo74735]);
const dirsmo78219 = smo74736.getStemDirection();
smo74736.setStemDirection(dirsmo78219);
smo74737.setStemDirection(dirsmo78219);
smo74738.setStemDirection(dirsmo78219);
smo74739.setStemDirection(dirsmo78219);
const smo78219 = new VF.Beam([smo74736,smo74737,smo74738,smo74739]);
const dirsmo78220 = smo74740.getStemDirection();
smo74740.setStemDirection(dirsmo78220);
smo74741.setStemDirection(dirsmo78220);
smo74742.setStemDirection(dirsmo78220);
smo74743.setStemDirection(dirsmo78220);
const smo78220 = new VF.Beam([smo74740,smo74741,smo74742,smo74743]);
 
// formatting measures in staff group smo67190
fmtsmo6969441.format([smo69694v0,smo69694v1,smo74757v0,smo74757v1], 430);
const stavesmo69694 = new VF.Stave(1365, 1712, 444);
stavesmo69694.setAttribute('id', 'stavesmo69694');
stavesmo69694.setBegBarType(VF.Barline.type.NONE);
stavesmo69694.setContext(context);
stavesmo69694.draw();
smo69694v0.draw(context, stavesmo69694);
smo69694v1.draw(context, stavesmo69694);
smo78211.setContext(context);
smo78211.draw();
smo78212.setContext(context);
smo78212.draw();
smo78213.setContext(context);
smo78213.draw();
const stavesmo74757 = new VF.Stave(1365, 1861, 444);
stavesmo74757.setAttribute('id', 'stavesmo74757');
stavesmo74757.setBegBarType(VF.Barline.type.NONE);
stavesmo74757.setContext(context);
stavesmo74757.draw();
smo74757v0.draw(context, stavesmo74757);
smo74757v1.draw(context, stavesmo74757);
smo78216.setContext(context);
smo78216.draw();
smo78217.setContext(context);
smo78217.draw();
smo78218.setContext(context);
smo78218.draw();
smo78219.setContext(context);
smo78219.draw();
smo78220.setContext(context);
smo78220.draw();
const rightsmo67190stavesmo696941 = new VF.StaveConnector(stavesmo69694, stavesmo74757).setType(0);
rightsmo67190stavesmo696941.setContext(context).draw();
const fmtsmo6972042 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo69720v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69720v0ar = [];
const smo69695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69695.setAttribute('id', 'smo69695');
smo69720v0ar.push(smo69695);
const smo69696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69696.setAttribute('id', 'smo69696');
smo69720v0ar.push(smo69696);
const smo69697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69697.setAttribute('id', 'smo69697');
smo69720v0ar.push(smo69697);
const smo69698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69698.setAttribute('id', 'smo69698');
smo69720v0ar.push(smo69698);
const smo69699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69699.setAttribute('id', 'smo69699');
smo69720v0ar.push(smo69699);
const smo69700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69700.setAttribute('id', 'smo69700');
smo69720v0ar.push(smo69700);
const smo69701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69701.setAttribute('id', 'smo69701');
smo69720v0ar.push(smo69701);
const smo69702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69702.setAttribute('id', 'smo69702');
smo69720v0ar.push(smo69702);
const smo69703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69703.setAttribute('id', 'smo69703');
smo69720v0ar.push(smo69703);
const smo69704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/5/n"]}'))
smo69704.setAttribute('id', 'smo69704');
smo69720v0ar.push(smo69704);
const smo69705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/5/n"]}'))
smo69705.setAttribute('id', 'smo69705');
smo69720v0ar.push(smo69705);
const smo69706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69706.setAttribute('id', 'smo69706');
smo69720v0ar.push(smo69706);
smo69720v0.addTickables(smo69720v0ar)
fmtsmo6972042.joinVoices([smo69720v0]);
const fmtsmo7478942 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo74789v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74789v0ar = [];
const smo74758 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74758.setAttribute('id', 'smo74758');
smo74789v0ar.push(smo74758);
const smo74759 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74759.setAttribute('id', 'smo74759');
smo74789v0ar.push(smo74759);
const smo74760 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74760.setAttribute('id', 'smo74760');
smo74789v0ar.push(smo74760);
const smo74761 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74761.setAttribute('id', 'smo74761');
smo74789v0ar.push(smo74761);
const smo74762 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74762.setAttribute('id', 'smo74762');
smo74789v0ar.push(smo74762);
const smo74763 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74763.setAttribute('id', 'smo74763');
smo74789v0ar.push(smo74763);
const smo74764 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74764.setAttribute('id', 'smo74764');
smo74789v0ar.push(smo74764);
const smo74765 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74765.setAttribute('id', 'smo74765');
smo74789v0ar.push(smo74765);
const smo74766 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74766.setAttribute('id', 'smo74766');
const smo747660acc = new VF.Accidental('n');
smo74766.addModifier(smo747660acc, 0);
smo74789v0ar.push(smo74766);
const smo74767 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74767.setAttribute('id', 'smo74767');
smo74789v0ar.push(smo74767);
smo74789v0.addTickables(smo74789v0ar)
fmtsmo7478942.joinVoices([smo74789v0]);
const smo74789v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74789v1ar = [];
const smo74768 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74768.setAttribute('id', 'smo74768');
smo74768.setStyle({ fillStyle: "#115511" });
smo74789v1ar.push(smo74768);
const smo74769 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74769.setAttribute('id', 'smo74769');
smo74769.setStyle({ fillStyle: "#115511" });
smo74789v1ar.push(smo74769);
const smo74770 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bb/3/n"]}'))
smo74770.setAttribute('id', 'smo74770');
smo74770.setStyle({ fillStyle: "#115511" });
const smo747700acc = new VF.Accidental('b');
smo74770.addModifier(smo747700acc, 0);
smo74789v1ar.push(smo74770);
const smo74771 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74771.setAttribute('id', 'smo74771');
smo74771.setStyle({ fillStyle: "#115511" });
smo74789v1ar.push(smo74771);
const smo74772 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["c#/3/n"]}'))
smo74772.setAttribute('id', 'smo74772');
smo74772.setStyle({ fillStyle: "#115511" });
const smo747720acc = new VF.Accidental('#');
smo74772.addModifier(smo747720acc, 0);
smo74789v1ar.push(smo74772);
const smo74773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74773.setAttribute('id', 'smo74773');
smo74773.setStyle({ fillStyle: "#115511" });
smo74789v1ar.push(smo74773);
const smo74774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74774.setAttribute('id', 'smo74774');
smo74774.setStyle({ fillStyle: "#115511" });
smo74789v1ar.push(smo74774);
const smo74775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74775.setAttribute('id', 'smo74775');
smo74775.setStyle({ fillStyle: "#115511" });
smo74789v1ar.push(smo74775);
smo74789v1.addTickables(smo74789v1ar)
fmtsmo7478942.joinVoices([smo74789v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78236 = smo69695.getStemDirection();
smo69695.setStemDirection(dirsmo78236);
smo69696.setStemDirection(dirsmo78236);
const smo78236 = new VF.Beam([smo69695,smo69696]);
const dirsmo78237 = smo69697.getStemDirection();
smo69697.setStemDirection(dirsmo78237);
smo69698.setStemDirection(dirsmo78237);
smo69699.setStemDirection(dirsmo78237);
smo69700.setStemDirection(dirsmo78237);
const smo78237 = new VF.Beam([smo69697,smo69698,smo69699,smo69700]);
const dirsmo78238 = smo69701.getStemDirection();
smo69701.setStemDirection(dirsmo78238);
smo69702.setStemDirection(dirsmo78238);
const smo78238 = new VF.Beam([smo69701,smo69702]);
const dirsmo78239 = smo69703.getStemDirection();
smo69703.setStemDirection(dirsmo78239);
smo69704.setStemDirection(dirsmo78239);
smo69705.setStemDirection(dirsmo78239);
smo69706.setStemDirection(dirsmo78239);
const smo78239 = new VF.Beam([smo69703,smo69704,smo69705,smo69706]);
const dirsmo78242 = smo74758.getStemDirection();
smo74758.setStemDirection(dirsmo78242);
smo74759.setStemDirection(dirsmo78242);
smo74760.setStemDirection(dirsmo78242);
smo74761.setStemDirection(dirsmo78242);
const smo78242 = new VF.Beam([smo74758,smo74759,smo74760,smo74761]);
const dirsmo78243 = smo74762.getStemDirection();
smo74762.setStemDirection(dirsmo78243);
smo74763.setStemDirection(dirsmo78243);
smo74764.setStemDirection(dirsmo78243);
smo74765.setStemDirection(dirsmo78243);
const smo78243 = new VF.Beam([smo74762,smo74763,smo74764,smo74765]);
const dirsmo78244 = smo74766.getStemDirection();
smo74766.setStemDirection(dirsmo78244);
smo74767.setStemDirection(dirsmo78244);
const smo78244 = new VF.Beam([smo74766,smo74767]);
const dirsmo78245 = smo74768.getStemDirection();
smo74768.setStemDirection(dirsmo78245);
smo74769.setStemDirection(dirsmo78245);
smo74770.setStemDirection(dirsmo78245);
smo74771.setStemDirection(dirsmo78245);
const smo78245 = new VF.Beam([smo74768,smo74769,smo74770,smo74771]);
const dirsmo78246 = smo74772.getStemDirection();
smo74772.setStemDirection(dirsmo78246);
smo74773.setStemDirection(dirsmo78246);
const smo78246 = new VF.Beam([smo74772,smo74773]);
 
// formatting measures in staff group smo67190
fmtsmo6972042.format([smo69720v0,smo74789v0,smo74789v1], 362);
const stavesmo69720 = new VF.Stave(90, 2020, 420);
stavesmo69720.setAttribute('id', 'stavesmo69720');
stavesmo69720.setBegBarType(1);
stavesmo69720.addClef('treble');
stavesmo69720.setContext(context);
stavesmo69720.draw();
smo69720v0.draw(context, stavesmo69720);
smo78236.setContext(context);
smo78236.draw();
smo78237.setContext(context);
smo78237.draw();
smo78238.setContext(context);
smo78238.draw();
smo78239.setContext(context);
smo78239.draw();
const stavesmo74789 = new VF.Stave(90, 2184, 420);
stavesmo74789.setAttribute('id', 'stavesmo74789');
stavesmo74789.setBegBarType(1);
stavesmo74789.addClef('bass');
stavesmo74789.setContext(context);
stavesmo74789.draw();
smo74789v0.draw(context, stavesmo74789);
smo74789v1.draw(context, stavesmo74789);
smo78242.setContext(context);
smo78242.draw();
smo78243.setContext(context);
smo78243.draw();
smo78244.setContext(context);
smo78244.draw();
smo78245.setContext(context);
smo78245.draw();
smo78246.setContext(context);
smo78246.draw();
const leftsmo67190stavesmo697201 = new VF.StaveConnector(stavesmo69720, stavesmo74789).setType(3);
leftsmo67190stavesmo697201.setContext(context).draw();
const fmtsmo6974743 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo69747v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69747v0ar = [];
const smo69721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69721.setAttribute('id', 'smo69721');
smo69747v0ar.push(smo69721);
const smo69722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69722.setAttribute('id', 'smo69722');
smo69747v0ar.push(smo69722);
const smo69723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo69723.setAttribute('id', 'smo69723');
const smo697230acc = new VF.Accidental('#');
smo69723.addModifier(smo697230acc, 0);
smo69747v0ar.push(smo69723);
const smo69724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69724.setAttribute('id', 'smo69724');
smo69747v0ar.push(smo69724);
smo69747v0.addTickables(smo69747v0ar)
fmtsmo6974743.joinVoices([smo69747v0]);
const smo69747v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69747v1ar = [];
const smo69725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69725.setAttribute('id', 'smo69725');
smo69725.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69725);
const smo69726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69726.setAttribute('id', 'smo69726');
smo69726.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69726);
const smo69727 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69727.setAttribute('id', 'smo69727');
smo69727.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69727);
const smo69728 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69728.setAttribute('id', 'smo69728');
smo69728.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69728);
const smo69729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69729.setAttribute('id', 'smo69729');
smo69729.setStyle({ fillStyle: "#115511" });
smo69729.addModifier(new VF.Dot(), 0);
smo69747v1ar.push(smo69729);
const smo69730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69730.setAttribute('id', 'smo69730');
smo69730.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69730);
const smo69731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69731.setAttribute('id', 'smo69731');
smo69731.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69731);
const smo69732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69732.setAttribute('id', 'smo69732');
smo69732.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69732);
const smo69733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69733.setAttribute('id', 'smo69733');
smo69733.setStyle({ fillStyle: "#115511" });
smo69747v1ar.push(smo69733);
smo69747v1.addTickables(smo69747v1ar)
fmtsmo6974743.joinVoices([smo69747v1]);
const fmtsmo7482443 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo74824v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74824v0ar = [];
const smo74790 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74790.setAttribute('id', 'smo74790');
smo74824v0ar.push(smo74790);
const smo74791 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74791.setAttribute('id', 'smo74791');
smo74824v0ar.push(smo74791);
const smo74792 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74792.setAttribute('id', 'smo74792');
smo74824v0ar.push(smo74792);
const smo74793 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74793.setAttribute('id', 'smo74793');
smo74824v0ar.push(smo74793);
const smo74794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74794.setAttribute('id', 'smo74794');
smo74824v0ar.push(smo74794);
const smo74795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74795.setAttribute('id', 'smo74795');
smo74824v0ar.push(smo74795);
const smo74796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/4/n"]}'))
smo74796.setAttribute('id', 'smo74796');
smo74824v0ar.push(smo74796);
const smo74797 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74797.setAttribute('id', 'smo74797');
smo74824v0ar.push(smo74797);
const smo74798 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74798.setAttribute('id', 'smo74798');
smo74824v0ar.push(smo74798);
const smo74799 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74799.setAttribute('id', 'smo74799');
smo74824v0ar.push(smo74799);
smo74824v0.addTickables(smo74824v0ar)
fmtsmo7482443.joinVoices([smo74824v0]);
const smo74824v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74824v1ar = [];
const smo74800 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74800.setAttribute('id', 'smo74800');
smo74800.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74800);
const smo74801 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74801.setAttribute('id', 'smo74801');
smo74801.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74801);
const smo74802 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74802.setAttribute('id', 'smo74802');
smo74802.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74802);
const smo74803 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74803.setAttribute('id', 'smo74803');
smo74803.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74803);
const smo74804 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74804.setAttribute('id', 'smo74804');
smo74804.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74804);
const smo74805 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74805.setAttribute('id', 'smo74805');
smo74805.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74805);
const smo74806 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74806.setAttribute('id', 'smo74806');
smo74806.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74806);
const smo74807 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74807.setAttribute('id', 'smo74807');
smo74807.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74807);
const smo74808 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74808.setAttribute('id', 'smo74808');
smo74808.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74808);
const smo74809 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74809.setAttribute('id', 'smo74809');
smo74809.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74809);
const smo74810 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74810.setAttribute('id', 'smo74810');
smo74810.setStyle({ fillStyle: "#115511" });
smo74824v1ar.push(smo74810);
smo74824v1.addTickables(smo74824v1ar)
fmtsmo7482443.joinVoices([smo74824v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78249 = smo69722.getStemDirection();
smo69722.setStemDirection(dirsmo78249);
smo69723.setStemDirection(dirsmo78249);
const smo78249 = new VF.Beam([smo69722,smo69723]);
const dirsmo78250 = smo69726.getStemDirection();
smo69726.setStemDirection(dirsmo78250);
smo69727.setStemDirection(dirsmo78250);
smo69728.setStemDirection(dirsmo78250);
const smo78250 = new VF.Beam([smo69726,smo69727,smo69728]);
const dirsmo78251 = smo69729.getStemDirection();
smo69729.setStemDirection(dirsmo78251);
smo69730.setStemDirection(dirsmo78251);
smo69731.setStemDirection(dirsmo78251);
const smo78251 = new VF.Beam([smo69729,smo69730,smo69731]);
const dirsmo78252 = smo69732.getStemDirection();
smo69732.setStemDirection(dirsmo78252);
smo69733.setStemDirection(dirsmo78252);
const smo78252 = new VF.Beam([smo69732,smo69733]);
const dirsmo78255 = smo74792.getStemDirection();
smo74792.setStemDirection(dirsmo78255);
smo74793.setStemDirection(dirsmo78255);
smo74794.setStemDirection(dirsmo78255);
smo74795.setStemDirection(dirsmo78255);
const smo78255 = new VF.Beam([smo74792,smo74793,smo74794,smo74795]);
const dirsmo78256 = smo74796.getStemDirection();
smo74796.setStemDirection(dirsmo78256);
smo74797.setStemDirection(dirsmo78256);
smo74798.setStemDirection(dirsmo78256);
smo74799.setStemDirection(dirsmo78256);
const smo78256 = new VF.Beam([smo74796,smo74797,smo74798,smo74799]);
const dirsmo78257 = smo74800.getStemDirection();
smo74800.setStemDirection(dirsmo78257);
smo74801.setStemDirection(dirsmo78257);
smo74802.setStemDirection(dirsmo78257);
smo74803.setStemDirection(dirsmo78257);
const smo78257 = new VF.Beam([smo74800,smo74801,smo74802,smo74803]);
const dirsmo78258 = smo74804.getStemDirection();
smo74804.setStemDirection(dirsmo78258);
smo74805.setStemDirection(dirsmo78258);
smo74806.setStemDirection(dirsmo78258);
smo74807.setStemDirection(dirsmo78258);
const smo78258 = new VF.Beam([smo74804,smo74805,smo74806,smo74807]);
 
// formatting measures in staff group smo67190
fmtsmo6974743.format([smo69747v0,smo69747v1,smo74824v0,smo74824v1], 404);
const stavesmo69747 = new VF.Stave(510, 2020, 418);
stavesmo69747.setAttribute('id', 'stavesmo69747');
stavesmo69747.setBegBarType(VF.Barline.type.NONE);
stavesmo69747.setContext(context);
stavesmo69747.draw();
smo69747v0.draw(context, stavesmo69747);
smo69747v1.draw(context, stavesmo69747);
smo78249.setContext(context);
smo78249.draw();
smo78250.setContext(context);
smo78250.draw();
smo78251.setContext(context);
smo78251.draw();
smo78252.setContext(context);
smo78252.draw();
const stavesmo74824 = new VF.Stave(510, 2184, 418);
stavesmo74824.setAttribute('id', 'stavesmo74824');
stavesmo74824.setBegBarType(VF.Barline.type.NONE);
stavesmo74824.setContext(context);
stavesmo74824.draw();
smo74824v0.draw(context, stavesmo74824);
smo74824v1.draw(context, stavesmo74824);
smo78255.setContext(context);
smo78255.draw();
smo78256.setContext(context);
smo78256.draw();
smo78257.setContext(context);
smo78257.draw();
smo78258.setContext(context);
smo78258.draw();
const fmtsmo6978144 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo69781v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69781v0ar = [];
const smo69748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69748.setAttribute('id', 'smo69748');
smo69781v0ar.push(smo69748);
const smo69749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["f#/5/n"]}'))
smo69749.setAttribute('id', 'smo69749');
const smo697490acc = new VF.Accidental('#');
smo69749.addModifier(smo697490acc, 0);
smo69781v0ar.push(smo69749);
const smo69750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/5/n"]}'))
smo69750.setAttribute('id', 'smo69750');
smo69781v0ar.push(smo69750);
const smo69751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["fn/5/n"]}'))
smo69751.setAttribute('id', 'smo69751');
const smo697510acc = new VF.Accidental('n');
smo69751.addModifier(smo697510acc, 0);
smo69781v0ar.push(smo69751);
const smo69752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69752.setAttribute('id', 'smo69752');
smo69781v0ar.push(smo69752);
const smo69753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69753.setAttribute('id', 'smo69753');
smo69781v0ar.push(smo69753);
const smo69754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69754.setAttribute('id', 'smo69754');
smo69781v0ar.push(smo69754);
const smo69755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69755.setAttribute('id', 'smo69755');
smo69781v0ar.push(smo69755);
const smo69756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69756.setAttribute('id', 'smo69756');
smo69781v0ar.push(smo69756);
const smo69757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69757.setAttribute('id', 'smo69757');
smo69781v0ar.push(smo69757);
smo69781v0.addTickables(smo69781v0ar)
fmtsmo6978144.joinVoices([smo69781v0]);
const smo69781v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69781v1ar = [];
const smo69758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69758.setAttribute('id', 'smo69758');
smo69758.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69758);
const smo69759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69759.setAttribute('id', 'smo69759');
smo69759.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69759);
const smo69760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69760.setAttribute('id', 'smo69760');
smo69760.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69760);
const smo69761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69761.setAttribute('id', 'smo69761');
smo69761.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69761);
const smo69762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/5/n"]}'))
smo69762.setAttribute('id', 'smo69762');
smo69762.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69762);
const smo69763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69763.setAttribute('id', 'smo69763');
smo69763.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69763);
const smo69764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69764.setAttribute('id', 'smo69764');
smo69764.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69764);
const smo69765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69765.setAttribute('id', 'smo69765');
smo69765.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69765);
const smo69766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo69766.setAttribute('id', 'smo69766');
smo69766.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69766);
const smo69767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo69767.setAttribute('id', 'smo69767');
smo69767.setStyle({ fillStyle: "#115511" });
smo69781v1ar.push(smo69767);
smo69781v1.addTickables(smo69781v1ar)
fmtsmo6978144.joinVoices([smo69781v1]);
const fmtsmo7485344 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo74853v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74853v0ar = [];
const smo74825 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74825.setAttribute('id', 'smo74825');
smo74853v0ar.push(smo74825);
const smo74826 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74826.setAttribute('id', 'smo74826');
smo74853v0ar.push(smo74826);
const smo74827 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74827.setAttribute('id', 'smo74827');
smo74853v0ar.push(smo74827);
const smo74828 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74828.setAttribute('id', 'smo74828');
smo74853v0ar.push(smo74828);
const smo74829 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["dn/4/n"]}'))
smo74829.setAttribute('id', 'smo74829');
smo74853v0ar.push(smo74829);
const smo74830 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/4/n"]}'))
smo74830.setAttribute('id', 'smo74830');
smo74853v0ar.push(smo74830);
const smo74831 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/3/n"]}'))
smo74831.setAttribute('id', 'smo74831');
smo74853v0ar.push(smo74831);
const smo74832 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/3/n"]}'))
smo74832.setAttribute('id', 'smo74832');
smo74853v0ar.push(smo74832);
const smo74833 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/3/n"]}'))
smo74833.setAttribute('id', 'smo74833');
smo74853v0ar.push(smo74833);
const smo74834 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["gn/3/r"]}'))
smo74834.setAttribute('id', 'smo74834');
smo74853v0ar.push(smo74834);
smo74853v0.addTickables(smo74853v0ar)
fmtsmo7485344.joinVoices([smo74853v0]);
const smo74853v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74853v1ar = [];
const smo74835 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74835.setAttribute('id', 'smo74835');
smo74835.setStyle({ fillStyle: "#115511" });
smo74853v1ar.push(smo74835);
const smo74836 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74836.setAttribute('id', 'smo74836');
smo74836.setStyle({ fillStyle: "#115511" });
smo74853v1ar.push(smo74836);
const smo74837 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/2/n"]}'))
smo74837.setAttribute('id', 'smo74837');
smo74837.setStyle({ fillStyle: "#115511" });
smo74853v1ar.push(smo74837);
const smo74838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo74838.setAttribute('id', 'smo74838');
smo74838.setStyle({ fillStyle: "#115511" });
smo74853v1ar.push(smo74838);
const smo74839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74839.setAttribute('id', 'smo74839');
smo74839.setStyle({ fillStyle: "#115511" });
smo74853v1ar.push(smo74839);
smo74853v1.addTickables(smo74853v1ar)
fmtsmo7485344.joinVoices([smo74853v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78261 = smo69750.getStemDirection();
smo69750.setStemDirection(dirsmo78261);
smo69751.setStemDirection(dirsmo78261);
smo69752.setStemDirection(dirsmo78261);
smo69753.setStemDirection(dirsmo78261);
const smo78261 = new VF.Beam([smo69750,smo69751,smo69752,smo69753]);
const dirsmo78262 = smo69754.getStemDirection();
smo69754.setStemDirection(dirsmo78262);
smo69755.setStemDirection(dirsmo78262);
smo69756.setStemDirection(dirsmo78262);
smo69757.setStemDirection(dirsmo78262);
const smo78262 = new VF.Beam([smo69754,smo69755,smo69756,smo69757]);
const dirsmo78263 = smo69758.getStemDirection();
smo69758.setStemDirection(dirsmo78263);
smo69759.setStemDirection(dirsmo78263);
const smo78263 = new VF.Beam([smo69758,smo69759]);
const dirsmo78264 = smo69760.getStemDirection();
smo69760.setStemDirection(dirsmo78264);
smo69761.setStemDirection(dirsmo78264);
smo69762.setStemDirection(dirsmo78264);
smo69763.setStemDirection(dirsmo78264);
const smo78264 = new VF.Beam([smo69760,smo69761,smo69762,smo69763]);
const dirsmo78267 = smo74825.getStemDirection();
smo74825.setStemDirection(dirsmo78267);
smo74826.setStemDirection(dirsmo78267);
smo74827.setStemDirection(dirsmo78267);
smo74828.setStemDirection(dirsmo78267);
const smo78267 = new VF.Beam([smo74825,smo74826,smo74827,smo74828]);
const dirsmo78268 = smo74829.getStemDirection();
smo74829.setStemDirection(dirsmo78268);
smo74830.setStemDirection(dirsmo78268);
smo74831.setStemDirection(dirsmo78268);
smo74832.setStemDirection(dirsmo78268);
const smo78268 = new VF.Beam([smo74829,smo74830,smo74831,smo74832]);
const dirsmo78269 = smo74837.getStemDirection();
smo74837.setStemDirection(dirsmo78269);
smo74838.setStemDirection(dirsmo78269);
smo74839.setStemDirection(dirsmo78269);
const smo78269 = new VF.Beam([smo74837,smo74838,smo74839]);
 
// formatting measures in staff group smo67190
fmtsmo6978144.format([smo69781v0,smo69781v1,smo74853v0,smo74853v1], 365);
const stavesmo69781 = new VF.Stave(928, 2020, 379);
stavesmo69781.setAttribute('id', 'stavesmo69781');
stavesmo69781.setBegBarType(VF.Barline.type.NONE);
stavesmo69781.setContext(context);
stavesmo69781.draw();
smo69781v0.draw(context, stavesmo69781);
smo69781v1.draw(context, stavesmo69781);
smo78261.setContext(context);
smo78261.draw();
smo78262.setContext(context);
smo78262.draw();
smo78263.setContext(context);
smo78263.draw();
smo78264.setContext(context);
smo78264.draw();
const stavesmo74853 = new VF.Stave(928, 2184, 379);
stavesmo74853.setAttribute('id', 'stavesmo74853');
stavesmo74853.setBegBarType(VF.Barline.type.NONE);
stavesmo74853.setContext(context);
stavesmo74853.draw();
smo74853v0.draw(context, stavesmo74853);
smo74853v1.draw(context, stavesmo74853);
smo78267.setContext(context);
smo78267.draw();
smo78268.setContext(context);
smo78268.draw();
smo78269.setContext(context);
smo78269.draw();
const fmtsmo6981545 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo69815v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69815v0ar = [];
const smo69782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69782.setAttribute('id', 'smo69782');
smo69815v0ar.push(smo69782);
const smo69783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69783.setAttribute('id', 'smo69783');
smo69815v0ar.push(smo69783);
const smo69784 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69784.setAttribute('id', 'smo69784');
smo69815v0ar.push(smo69784);
const smo69785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69785.setAttribute('id', 'smo69785');
smo69815v0ar.push(smo69785);
const smo69786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69786.setAttribute('id', 'smo69786');
smo69786.addModifier(new VF.Dot(), 0);
smo69815v0ar.push(smo69786);
const smo69787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["gn/5/r"]}'))
smo69787.setAttribute('id', 'smo69787');
smo69815v0ar.push(smo69787);
const smo69788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["cn/5/n"]}'))
smo69788.setAttribute('id', 'smo69788');
smo69815v0ar.push(smo69788);
const smo69789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69789.setAttribute('id', 'smo69789');
smo69815v0ar.push(smo69789);
const smo69790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69790.setAttribute('id', 'smo69790');
smo69815v0ar.push(smo69790);
const smo69791 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["g#/4/n"]}'))
smo69791.setAttribute('id', 'smo69791');
const smo697910acc = new VF.Accidental('#');
smo69791.addModifier(smo697910acc, 0);
smo69815v0ar.push(smo69791);
const smo69792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":1,"auto_stem":false,"keys":["en/5/n"]}'))
smo69792.setAttribute('id', 'smo69792');
smo69815v0ar.push(smo69792);
smo69815v0.addTickables(smo69815v0ar)
fmtsmo6981545.joinVoices([smo69815v0]);
const smo69815v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo69815v1ar = [];
const smo69793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69793.setAttribute('id', 'smo69793');
smo69793.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69793);
const smo69794 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69794.setAttribute('id', 'smo69794');
smo69794.setStyle({ fillStyle: "#115511" });
const smo697940acc = new VF.Accidental('#');
smo69794.addModifier(smo697940acc, 0);
smo69815v1ar.push(smo69794);
const smo69795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69795.setAttribute('id', 'smo69795');
smo69795.setStyle({ fillStyle: "#115511" });
smo69795.addModifier(new VF.Dot(), 0);
smo69815v1ar.push(smo69795);
const smo69796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69796.setAttribute('id', 'smo69796');
smo69796.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69796);
const smo69797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["gn/4/n"]}'))
smo69797.setAttribute('id', 'smo69797');
smo69797.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69797);
const smo69798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["f#/4/n"]}'))
smo69798.setAttribute('id', 'smo69798');
smo69798.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69798);
const smo69799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/4/n"]}'))
smo69799.setAttribute('id', 'smo69799');
smo69799.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69799);
const smo69800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/4/n"]}'))
smo69800.setAttribute('id', 'smo69800');
smo69800.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69800);
const smo69801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/4/n"]}'))
smo69801.setAttribute('id', 'smo69801');
smo69801.setStyle({ fillStyle: "#115511" });
smo69815v1ar.push(smo69801);
smo69815v1.addTickables(smo69815v1ar)
fmtsmo6981545.joinVoices([smo69815v1]);
const fmtsmo7487945 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo74879v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74879v0ar = [];
const smo74854 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo74854.setAttribute('id', 'smo74854');
smo74854.setStyle({ fillStyle: '#aaaaaa7f' });
smo74879v0ar.push(smo74854);
smo74879v0.addTickables(smo74879v0ar)
fmtsmo7487945.joinVoices([smo74879v0]);
const smo74879v1 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo74879v1ar = [];
const smo74855 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8d","dots":1,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74855.setAttribute('id', 'smo74855');
smo74855.setStyle({ fillStyle: "#115511" });
smo74855.addModifier(new VF.Dot(), 0);
smo74879v1ar.push(smo74855);
const smo74856 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74856.setAttribute('id', 'smo74856');
smo74856.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74856);
const smo74857 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"32","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74857.setAttribute('id', 'smo74857');
smo74857.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74857);
const smo74858 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["bn/2/n"]}'))
smo74858.setAttribute('id', 'smo74858');
smo74858.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74858);
const smo74859 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74859.setAttribute('id', 'smo74859');
smo74859.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74859);
const smo74860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["an/2/n"]}'))
smo74860.setAttribute('id', 'smo74860');
smo74860.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74860);
const smo74861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74861.setAttribute('id', 'smo74861');
smo74861.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74861);
const smo74862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74862.setAttribute('id', 'smo74862');
smo74862.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74862);
const smo74863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["en/3/n"]}'))
smo74863.setAttribute('id', 'smo74863');
smo74863.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74863);
const smo74864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["dn/3/n"]}'))
smo74864.setAttribute('id', 'smo74864');
smo74864.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74864);
const smo74865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","stem_direction":-1,"auto_stem":false,"keys":["cn/3/n"]}'))
smo74865.setAttribute('id', 'smo74865');
smo74865.setStyle({ fillStyle: "#115511" });
smo74879v1ar.push(smo74865);
smo74879v1.addTickables(smo74879v1ar)
fmtsmo7487945.joinVoices([smo74879v1]);
// create beam groups and tuplets for format grp smo67190 before formatting
const dirsmo78272 = smo69782.getStemDirection();
smo69782.setStemDirection(dirsmo78272);
smo69783.setStemDirection(dirsmo78272);
smo69784.setStemDirection(dirsmo78272);
smo69785.setStemDirection(dirsmo78272);
const smo78272 = new VF.Beam([smo69782,smo69783,smo69784,smo69785]);
const dirsmo78273 = smo69788.getStemDirection();
smo69788.setStemDirection(dirsmo78273);
smo69789.setStemDirection(dirsmo78273);
smo69790.setStemDirection(dirsmo78273);
const smo78273 = new VF.Beam([smo69788,smo69789,smo69790]);
const dirsmo78274 = smo69791.getStemDirection();
smo69791.setStemDirection(dirsmo78274);
smo69792.setStemDirection(dirsmo78274);
const smo78274 = new VF.Beam([smo69791,smo69792]);
const dirsmo78275 = smo69793.getStemDirection();
smo69793.setStemDirection(dirsmo78275);
smo69794.setStemDirection(dirsmo78275);
const smo78275 = new VF.Beam([smo69793,smo69794]);
const dirsmo78276 = smo69795.getStemDirection();
smo69795.setStemDirection(dirsmo78276);
smo69796.setStemDirection(dirsmo78276);
smo69797.setStemDirection(dirsmo78276);
const smo78276 = new VF.Beam([smo69795,smo69796,smo69797]);
const dirsmo78277 = smo69798.getStemDirection();
smo69798.setStemDirection(dirsmo78277);
smo69799.setStemDirection(dirsmo78277);
smo69800.setStemDirection(dirsmo78277);
smo69801.setStemDirection(dirsmo78277);
const smo78277 = new VF.Beam([smo69798,smo69799,smo69800,smo69801]);
const dirsmo78280 = smo74855.getStemDirection();
smo74855.setStemDirection(dirsmo78280);
smo74856.setStemDirection(dirsmo78280);
smo74857.setStemDirection(dirsmo78280);
const smo78280 = new VF.Beam([smo74855,smo74856,smo74857]);
const dirsmo78281 = smo74858.getStemDirection();
smo74858.setStemDirection(dirsmo78281);
smo74859.setStemDirection(dirsmo78281);
const smo78281 = new VF.Beam([smo74858,smo74859]);
const dirsmo78282 = smo74860.getStemDirection();
smo74860.setStemDirection(dirsmo78282);
smo74861.setStemDirection(dirsmo78282);
const smo78282 = new VF.Beam([smo74860,smo74861]);
const dirsmo78283 = smo74862.getStemDirection();
smo74862.setStemDirection(dirsmo78283);
smo74863.setStemDirection(dirsmo78283);
smo74864.setStemDirection(dirsmo78283);
smo74865.setStemDirection(dirsmo78283);
const smo78283 = new VF.Beam([smo74862,smo74863,smo74864,smo74865]);
 
// formatting measures in staff group smo67190
fmtsmo6981545.format([smo69815v0,smo69815v1,smo74879v0,smo74879v1], 486);
const stavesmo69815 = new VF.Stave(1307, 2020, 500);
stavesmo69815.setAttribute('id', 'stavesmo69815');
stavesmo69815.setBegBarType(VF.Barline.type.NONE);
stavesmo69815.setContext(context);
stavesmo69815.draw();
smo69815v0.draw(context, stavesmo69815);
smo69815v1.draw(context, stavesmo69815);
smo78272.setContext(context);
smo78272.draw();
smo78273.setContext(context);
smo78273.draw();
smo78274.setContext(context);
smo78274.draw();
smo78275.setContext(context);
smo78275.draw();
smo78276.setContext(context);
smo78276.draw();
smo78277.setContext(context);
smo78277.draw();
const stavesmo74879 = new VF.Stave(1307, 2184, 500);
stavesmo74879.setAttribute('id', 'stavesmo74879');
stavesmo74879.setBegBarType(VF.Barline.type.NONE);
stavesmo74879.setContext(context);
stavesmo74879.draw();
smo74879v0.draw(context, stavesmo74879);
smo74879v1.draw(context, stavesmo74879);
smo78280.setContext(context);
smo78280.draw();
smo78281.setContext(context);
smo78281.draw();
smo78282.setContext(context);
smo78282.draw();
smo78283.setContext(context);
smo78283.draw();
const rightsmo67190stavesmo698151 = new VF.StaveConnector(stavesmo69815, stavesmo74879).setType(0);
rightsmo67190stavesmo698151.setContext(context).draw();
// modifier from 0-36-1-1 to 0-36-1-2
const smo80347 = new VF.StaveTie({ first_note: smo69510, last_note: smo69511, 
          firstNote: smo69510, lastNote: smo69511, first_indices: [0], last_indices: [0]});
smo80347.setContext(context).draw();
// modifier from 0-37-0-6 to 0-37-0-7
const smo80348 = new VF.StaveTie({ first_note: smo69543, last_note: smo69544, 
          firstNote: smo69543, lastNote: smo69544, first_indices: [0], last_indices: [0]});
smo80348.setContext(context).draw();
// modifier from 0-37-1-2 to 0-37-1-3
const smo80349 = new VF.StaveTie({ first_note: smo69550, last_note: smo69551, 
          firstNote: smo69550, lastNote: smo69551, first_indices: [0], last_indices: [0]});
smo80349.setContext(context).draw();
// modifier from 0-40-1-8 to 0-41-1-0
const smo80350 = new VF.StaveTie({ first_note: smo69654, last_note: smo69678, 
          firstNote: smo69654, lastNote: smo69678, first_indices: [0], last_indices: [0]});
smo80350.setContext(context).draw();
// modifier from 0-42-0-1 to 0-42-0-2
const smo80351 = new VF.StaveTie({ first_note: smo69696, last_note: smo69697, 
          firstNote: smo69696, lastNote: smo69697, first_indices: [0], last_indices: [0]});
smo80351.setContext(context).draw();
// modifier from 0-42-0-7 to 0-42-0-8
const smo80352 = new VF.StaveTie({ first_note: smo69702, last_note: smo69703, 
          firstNote: smo69702, lastNote: smo69703, first_indices: [0], last_indices: [0]});
smo80352.setContext(context).draw();
// modifier from 0-43-0-3 to 0-44-0-0
const smo80353 = new VF.StaveTie({ first_note: smo69724, last_note: smo69748, 
          firstNote: smo69724, lastNote: smo69748, first_indices: [0], last_indices: [0]});
smo80353.setContext(context).draw();
// modifier from 0-44-1-1 to 0-44-1-2
const smo80354 = new VF.StaveTie({ first_note: smo69759, last_note: smo69760, 
          firstNote: smo69759, lastNote: smo69760, first_indices: [0], last_indices: [0]});
smo80354.setContext(context).draw();
// modifier from 0-38-1-7 to 0-39-1-0
const smo80355 = new VF.StaveTie({ first_note: smo69591, last_note: smo69618, 
          firstNote: smo69591, lastNote: smo69618, first_indices: [0], last_indices: [0]});
smo80355.setContext(context).draw();
// modifier from 0-39-1-3 to 0-39-1-4
const smo80356 = new VF.StaveTie({ first_note: smo69621, last_note: smo69622, 
          firstNote: smo69621, lastNote: smo69622, first_indices: [0], last_indices: [0]});
smo80356.setContext(context).draw();
// modifier from 1-21-0-1 to 1-21-0-2
const smo80357 = new VF.StaveTie({ first_note: smo74297, last_note: smo74298, 
          firstNote: smo74297, lastNote: smo74298, first_indices: [0], last_indices: [0]});
smo80357.setContext(context).draw();
// modifier from 1-21-0-4 to 1-21-0-5
const smo80358 = new VF.StaveTie({ first_note: smo74300, last_note: smo74301, 
          firstNote: smo74300, lastNote: smo74301, first_indices: [0], last_indices: [0]});
smo80358.setContext(context).draw();
// modifier from 1-22-0-1 to 1-22-0-2
const smo80359 = new VF.StaveTie({ first_note: smo74319, last_note: smo74320, 
          firstNote: smo74319, lastNote: smo74320, first_indices: [0], last_indices: [0]});
smo80359.setContext(context).draw();
// modifier from 1-22-0-4 to 1-22-0-5
const smo80360 = new VF.StaveTie({ first_note: smo74322, last_note: smo74323, 
          firstNote: smo74322, lastNote: smo74323, first_indices: [0], last_indices: [0]});
smo80360.setContext(context).draw();
// modifier from 1-23-0-1 to 1-23-0-2
const smo80361 = new VF.StaveTie({ first_note: smo74341, last_note: smo74342, 
          firstNote: smo74341, lastNote: smo74342, first_indices: [0], last_indices: [0]});
smo80361.setContext(context).draw();
// modifier from 1-23-0-4 to 1-23-0-5
const smo80362 = new VF.StaveTie({ first_note: smo74344, last_note: smo74345, 
          firstNote: smo74344, lastNote: smo74345, first_indices: [0], last_indices: [0]});
smo80362.setContext(context).draw();
// modifier from 1-24-0-1 to 1-24-0-2
const smo80363 = new VF.StaveTie({ first_note: smo74363, last_note: smo74364, 
          firstNote: smo74363, lastNote: smo74364, first_indices: [0], last_indices: [0]});
smo80363.setContext(context).draw();
// modifier from 1-24-0-4 to 1-24-0-5
const smo80364 = new VF.StaveTie({ first_note: smo74366, last_note: smo74367, 
          firstNote: smo74366, lastNote: smo74367, first_indices: [0], last_indices: [0]});
smo80364.setContext(context).draw();
// modifier from 1-25-0-1 to 1-25-0-2
const smo80365 = new VF.StaveTie({ first_note: smo74385, last_note: smo74386, 
          firstNote: smo74385, lastNote: smo74386, first_indices: [0], last_indices: [0]});
smo80365.setContext(context).draw();
// modifier from 1-25-0-4 to 1-25-0-5
const smo80366 = new VF.StaveTie({ first_note: smo74388, last_note: smo74389, 
          firstNote: smo74388, lastNote: smo74389, first_indices: [0], last_indices: [0]});
smo80366.setContext(context).draw();
// modifier from 1-26-0-1 to 1-26-0-2
const smo80367 = new VF.StaveTie({ first_note: smo74407, last_note: smo74408, 
          firstNote: smo74407, lastNote: smo74408, first_indices: [0], last_indices: [0]});
smo80367.setContext(context).draw();
// modifier from 1-26-0-4 to 1-26-0-5
const smo80368 = new VF.StaveTie({ first_note: smo74410, last_note: smo74411, 
          firstNote: smo74410, lastNote: smo74411, first_indices: [0], last_indices: [0]});
smo80368.setContext(context).draw();
// modifier from 1-27-0-1 to 1-27-0-2
const smo80369 = new VF.StaveTie({ first_note: smo74429, last_note: smo74430, 
          firstNote: smo74429, lastNote: smo74430, first_indices: [0], last_indices: [0]});
smo80369.setContext(context).draw();
// modifier from 1-27-0-4 to 1-27-0-5
const smo80370 = new VF.StaveTie({ first_note: smo74432, last_note: smo74433, 
          firstNote: smo74432, lastNote: smo74433, first_indices: [0], last_indices: [0]});
smo80370.setContext(context).draw();
// modifier from 1-28-0-1 to 1-28-0-2
const smo80371 = new VF.StaveTie({ first_note: smo74451, last_note: smo74452, 
          firstNote: smo74451, lastNote: smo74452, first_indices: [0], last_indices: [0]});
smo80371.setContext(context).draw();
// modifier from 1-28-0-4 to 1-28-0-5
const smo80372 = new VF.StaveTie({ first_note: smo74454, last_note: smo74455, 
          firstNote: smo74454, lastNote: smo74455, first_indices: [0], last_indices: [0]});
smo80372.setContext(context).draw();
// modifier from 1-29-0-1 to 1-29-0-2
const smo80373 = new VF.StaveTie({ first_note: smo74473, last_note: smo74474, 
          firstNote: smo74473, lastNote: smo74474, first_indices: [0], last_indices: [0]});
smo80373.setContext(context).draw();
// modifier from 1-29-0-4 to 1-29-0-5
const smo80374 = new VF.StaveTie({ first_note: smo74476, last_note: smo74477, 
          firstNote: smo74476, lastNote: smo74477, first_indices: [0], last_indices: [0]});
smo80374.setContext(context).draw();
// modifier from 1-30-0-1 to 1-30-0-2
const smo80375 = new VF.StaveTie({ first_note: smo74495, last_note: smo74496, 
          firstNote: smo74495, lastNote: smo74496, first_indices: [0], last_indices: [0]});
smo80375.setContext(context).draw();
// modifier from 1-30-0-4 to 1-30-0-5
const smo80376 = new VF.StaveTie({ first_note: smo74498, last_note: smo74499, 
          firstNote: smo74498, lastNote: smo74499, first_indices: [0], last_indices: [0]});
smo80376.setContext(context).draw();
// modifier from 1-31-0-1 to 1-31-0-2
const smo80377 = new VF.StaveTie({ first_note: smo74517, last_note: smo74518, 
          firstNote: smo74517, lastNote: smo74518, first_indices: [0], last_indices: [0]});
smo80377.setContext(context).draw();
// modifier from 1-31-0-4 to 1-31-0-5
const smo80378 = new VF.StaveTie({ first_note: smo74520, last_note: smo74521, 
          firstNote: smo74520, lastNote: smo74521, first_indices: [0], last_indices: [0]});
smo80378.setContext(context).draw();
// modifier from 1-33-0-1 to 1-33-0-2
const smo80379 = new VF.StaveTie({ first_note: smo74559, last_note: smo74560, 
          firstNote: smo74559, lastNote: smo74560, first_indices: [0], last_indices: [0]});
smo80379.setContext(context).draw();
// modifier from 1-33-0-2 to 1-33-0-3
const smo80380 = new VF.StaveTie({ first_note: smo74560, last_note: smo74561, 
          firstNote: smo74560, lastNote: smo74561, first_indices: [0], last_indices: [0]});
smo80380.setContext(context).draw();
// modifier from 1-33-1-0 to 1-33-1-1
const smo80381 = new VF.StaveTie({ first_note: smo74562, last_note: smo74563, 
          firstNote: smo74562, lastNote: smo74563, first_indices: [0], last_indices: [0]});
smo80381.setContext(context).draw();
// modifier from 1-32-0-1 to 1-32-0-2
const smo80382 = new VF.StaveTie({ first_note: smo74539, last_note: smo74540, 
          firstNote: smo74539, lastNote: smo74540, first_indices: [0], last_indices: [0]});
smo80382.setContext(context).draw();
}
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
const fmtsmo10520960 = new VF.Formatter();
//
// voices and notes for stave 0 60
const smo105209v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105209v0ar = [];
const smo105188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105188.setAttribute('id', 'smo105188');
const smo1051880acc = new VF.Accidental('n');
smo105188.addModifier(smo1051880acc, 0);
smo105209v0ar.push(smo105188);
const smo105189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo105189.setAttribute('id', 'smo105189');
const smo1051890acc = new VF.Accidental('b');
smo105189.addModifier(smo1051890acc, 0);
smo105209v0ar.push(smo105189);
const smo105190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo105190.setAttribute('id', 'smo105190');
const smo1051900acc = new VF.Accidental('n');
smo105190.addModifier(smo1051900acc, 0);
smo105209v0ar.push(smo105190);
const smo105191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo105191.setAttribute('id', 'smo105191');
const smo1051910acc = new VF.Accidental('n');
smo105191.addModifier(smo1051910acc, 0);
smo105209v0ar.push(smo105191);
const smo105192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/6/n"]}'))
smo105192.setAttribute('id', 'smo105192');
smo105209v0ar.push(smo105192);
const smo105193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo105193.setAttribute('id', 'smo105193');
smo105209v0ar.push(smo105193);
const smo105194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/5/n"]}'))
smo105194.setAttribute('id', 'smo105194');
smo105209v0ar.push(smo105194);
const smo105195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo105195.setAttribute('id', 'smo105195');
smo105209v0ar.push(smo105195);
smo105209v0.addTickables(smo105209v0ar)
fmtsmo10520960.joinVoices([smo105209v0]);
const fmtsmo10795560 = new VF.Formatter();
//
// voices and notes for stave 1 60
const smo107955v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107955v0ar = [];
const smo107938 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n"]}'))
smo107938.setAttribute('id', 'smo107938');
const smo1079380acc = new VF.Accidental('n');
smo107938.addModifier(smo1079380acc, 0);
smo107955v0ar.push(smo107938);
const smo107939 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo107939.setAttribute('id', 'smo107939');
const smo1079390acc = new VF.Accidental('n');
smo107939.addModifier(smo1079390acc, 0);
const smo1079392acc = new VF.Accidental('n');
smo107939.addModifier(smo1079392acc, 2);
smo107955v0ar.push(smo107939);
const smo107940 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/3/n"]}'))
smo107940.setAttribute('id', 'smo107940');
const smo1079400acc = new VF.Accidental('b');
smo107940.addModifier(smo1079400acc, 0);
smo107955v0ar.push(smo107940);
const smo107941 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/3/n","dn/4/n","en/4/n"]}'))
smo107941.setAttribute('id', 'smo107941');
smo107955v0ar.push(smo107941);
smo107955v0.addTickables(smo107955v0ar)
fmtsmo10795560.joinVoices([smo107955v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109403 = smo105188.getStemDirection();
smo105188.setStemDirection(dirsmo109403);
smo105189.setStemDirection(dirsmo109403);
smo105190.setStemDirection(dirsmo109403);
smo105191.setStemDirection(dirsmo109403);
const smo109403 = new VF.Beam([smo105188,smo105189,smo105190,smo105191]);
const dirsmo109404 = smo105192.getStemDirection();
smo105192.setStemDirection(dirsmo109404);
smo105193.setStemDirection(dirsmo109404);
smo105194.setStemDirection(dirsmo109404);
smo105195.setStemDirection(dirsmo109404);
const smo109404 = new VF.Beam([smo105192,smo105193,smo105194,smo105195]);
const dirsmo109407 = smo107938.getStemDirection();
smo107938.setStemDirection(dirsmo109407);
smo107939.setStemDirection(dirsmo109407);
const smo109407 = new VF.Beam([smo107938,smo107939]);
const dirsmo109408 = smo107940.getStemDirection();
smo107940.setStemDirection(dirsmo109408);
smo107941.setStemDirection(dirsmo109408);
const smo109408 = new VF.Beam([smo107940,smo107941]);
 
// formatting measures in staff group smo103216
fmtsmo10520960.format([smo105209v0,smo107955v0], 242);
const stavesmo105209 = new VF.Stave(73, 396, 328);
stavesmo105209.setAttribute('id', 'stavesmo105209');
stavesmo105209.setBegBarType(1);
stavesmo105209.addClef('treble');
const keysmo105209 = new VF.KeySignature('Bb');
keysmo105209.addToStave(stavesmo105209);
stavesmo105209.setContext(context);
stavesmo105209.draw();
smo105209v0.draw(context, stavesmo105209);
smo109403.setContext(context);
smo109403.draw();
smo109404.setContext(context);
smo109404.draw();
const stavesmo107955 = new VF.Stave(73, 556, 328);
stavesmo107955.setAttribute('id', 'stavesmo107955');
stavesmo107955.setBegBarType(1);
stavesmo107955.addClef('bass');
const keysmo107955 = new VF.KeySignature('Bb');
keysmo107955.addToStave(stavesmo107955);
stavesmo107955.setContext(context);
stavesmo107955.draw();
smo107955v0.draw(context, stavesmo107955);
smo109407.setContext(context);
smo109407.draw();
smo109408.setContext(context);
smo109408.draw();
const leftsmo103216stavesmo1052091 = new VF.StaveConnector(stavesmo105209, stavesmo107955).setType(3);
leftsmo103216stavesmo1052091.setContext(context).draw();
const fmtsmo10522561 = new VF.Formatter();
//
// voices and notes for stave 0 61
const smo105225v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105225v0ar = [];
const smo105210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo105210.setAttribute('id', 'smo105210');
smo105225v0ar.push(smo105210);
const smo105211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo105211.setAttribute('id', 'smo105211');
smo105225v0ar.push(smo105211);
smo105225v0.addTickables(smo105225v0ar)
fmtsmo10522561.joinVoices([smo105225v0]);
const fmtsmo10797261 = new VF.Formatter();
//
// voices and notes for stave 1 61
const smo107972v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107972v0ar = [];
const smo107956 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","en/4/n"]}'))
smo107956.setAttribute('id', 'smo107956');
const smo1079562acc = new VF.Accidental('n');
smo107956.addModifier(smo1079562acc, 2);
smo107972v0ar.push(smo107956);
const smo107957 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo107957.setAttribute('id', 'smo107957');
smo107972v0ar.push(smo107957);
const smo107958 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107958.setAttribute('id', 'smo107958');
smo107972v0ar.push(smo107958);
smo107972v0.addTickables(smo107972v0ar)
fmtsmo10797261.joinVoices([smo107972v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109413 = smo107957.getStemDirection();
smo107957.setStemDirection(dirsmo109413);
smo107958.setStemDirection(dirsmo109413);
const smo109413 = new VF.Beam([smo107957,smo107958]);
 
// formatting measures in staff group smo103216
fmtsmo10522561.format([smo105225v0,smo107972v0], 274);
const stavesmo105225 = new VF.Stave(401, 396, 288);
stavesmo105225.setAttribute('id', 'stavesmo105225');
stavesmo105225.setBegBarType(VF.Barline.type.NONE);
stavesmo105225.setContext(context);
stavesmo105225.draw();
smo105225v0.draw(context, stavesmo105225);
const stavesmo107972 = new VF.Stave(401, 556, 288);
stavesmo107972.setAttribute('id', 'stavesmo107972');
stavesmo107972.setBegBarType(VF.Barline.type.NONE);
stavesmo107972.setContext(context);
stavesmo107972.draw();
smo107972v0.draw(context, stavesmo107972);
smo109413.setContext(context);
smo109413.draw();
const fmtsmo10524462 = new VF.Formatter();
//
// voices and notes for stave 0 62
const smo105244v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105244v0ar = [];
const smo105226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo105226.setAttribute('id', 'smo105226');
smo105244v0ar.push(smo105226);
const smo105227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo105227.setAttribute('id', 'smo105227');
const smo1052270acc = new VF.Accidental('b');
smo105227.addModifier(smo1052270acc, 0);
smo105244v0ar.push(smo105227);
const smo105228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo105228.setAttribute('id', 'smo105228');
const smo1052281acc = new VF.Accidental('n');
smo105228.addModifier(smo1052281acc, 1);
smo105244v0ar.push(smo105228);
const smo105229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n"]}'))
smo105229.setAttribute('id', 'smo105229');
smo105244v0ar.push(smo105229);
const smo105230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n"]}'))
smo105230.setAttribute('id', 'smo105230');
smo105244v0ar.push(smo105230);
smo105244v0.addTickables(smo105244v0ar)
fmtsmo10524462.joinVoices([smo105244v0]);
const fmtsmo10799062 = new VF.Formatter();
//
// voices and notes for stave 1 62
const smo107990v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo107990v0ar = [];
const smo107973 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo107973.setAttribute('id', 'smo107973');
smo107990v0ar.push(smo107973);
const smo107974 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107974.setAttribute('id', 'smo107974');
smo107990v0ar.push(smo107974);
const smo107975 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo107975.setAttribute('id', 'smo107975');
smo107990v0ar.push(smo107975);
const smo107976 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo107976.setAttribute('id', 'smo107976');
smo107990v0ar.push(smo107976);
smo107990v0.addTickables(smo107990v0ar)
fmtsmo10799062.joinVoices([smo107990v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109416 = smo105226.getStemDirection();
smo105226.setStemDirection(dirsmo109416);
smo105227.setStemDirection(dirsmo109416);
smo105228.setStemDirection(dirsmo109416);
const smo109416 = new VF.Beam([smo105226,smo105227,smo105228]);
const dirsmo109417 = smo105229.getStemDirection();
smo105229.setStemDirection(dirsmo109417);
smo105230.setStemDirection(dirsmo109417);
const smo109417 = new VF.Beam([smo105229,smo105230]);
const dirsmo109420 = smo107973.getStemDirection();
smo107973.setStemDirection(dirsmo109420);
smo107974.setStemDirection(dirsmo109420);
const smo109420 = new VF.Beam([smo107973,smo107974]);
const dirsmo109421 = smo107975.getStemDirection();
smo107975.setStemDirection(dirsmo109421);
smo107976.setStemDirection(dirsmo109421);
const smo109421 = new VF.Beam([smo107975,smo107976]);
 
// formatting measures in staff group smo103216
fmtsmo10524462.format([smo105244v0,smo107990v0], 274);
const stavesmo105244 = new VF.Stave(689, 396, 288);
stavesmo105244.setAttribute('id', 'stavesmo105244');
stavesmo105244.setBegBarType(VF.Barline.type.NONE);
stavesmo105244.setContext(context);
stavesmo105244.draw();
smo105244v0.draw(context, stavesmo105244);
smo109416.setContext(context);
smo109416.draw();
smo109417.setContext(context);
smo109417.draw();
const stavesmo107990 = new VF.Stave(689, 556, 288);
stavesmo107990.setAttribute('id', 'stavesmo107990');
stavesmo107990.setBegBarType(VF.Barline.type.NONE);
stavesmo107990.setContext(context);
stavesmo107990.draw();
smo107990v0.draw(context, stavesmo107990);
smo109420.setContext(context);
smo109420.draw();
smo109421.setContext(context);
smo109421.draw();
const fmtsmo10526563 = new VF.Formatter();
//
// voices and notes for stave 0 63
const smo105265v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105265v0ar = [];
const smo105245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","bb/5/n","dn/6/n"]}'))
smo105245.setAttribute('id', 'smo105245');
smo105265v0ar.push(smo105245);
smo105265v0.addTickables(smo105265v0ar)
fmtsmo10526563.joinVoices([smo105265v0]);
const smo105265v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105265v1ar = [];
const smo105246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105246.setAttribute('id', 'smo105246');
smo105246.setStyle({ fillStyle: "#115511" });
smo105265v1ar.push(smo105246);
const smo105247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo105247.setAttribute('id', 'smo105247');
smo105247.setStyle({ fillStyle: "#115511" });
smo105265v1ar.push(smo105247);
const smo105248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105248.setAttribute('id', 'smo105248');
smo105248.setStyle({ fillStyle: "#115511" });
smo105265v1ar.push(smo105248);
const smo105249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo105249.setAttribute('id', 'smo105249');
smo105249.setStyle({ fillStyle: "#115511" });
smo105265v1ar.push(smo105249);
const smo105250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105250.setAttribute('id', 'smo105250');
smo105250.setStyle({ fillStyle: "#115511" });
smo105265v1ar.push(smo105250);
const smo105251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105251.setAttribute('id', 'smo105251');
smo105251.setStyle({ fillStyle: "#115511" });
smo105265v1ar.push(smo105251);
smo105265v1.addTickables(smo105265v1ar)
fmtsmo10526563.joinVoices([smo105265v1]);
const fmtsmo10800863 = new VF.Formatter();
//
// voices and notes for stave 1 63
const smo108008v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108008v0ar = [];
const smo107991 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n"]}'))
smo107991.setAttribute('id', 'smo107991');
smo108008v0ar.push(smo107991);
const smo107992 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo107992.setAttribute('id', 'smo107992');
smo108008v0ar.push(smo107992);
const smo107993 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n"]}'))
smo107993.setAttribute('id', 'smo107993');
smo108008v0ar.push(smo107993);
const smo107994 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n","fn/4/n"]}'))
smo107994.setAttribute('id', 'smo107994');
smo108008v0ar.push(smo107994);
smo108008v0.addTickables(smo108008v0ar)
fmtsmo10800863.joinVoices([smo108008v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109424 = smo105247.getStemDirection();
smo105247.setStemDirection(dirsmo109424);
smo105248.setStemDirection(dirsmo109424);
const smo109424 = new VF.Beam([smo105247,smo105248]);
const dirsmo109425 = smo105249.getStemDirection();
smo105249.setStemDirection(dirsmo109425);
smo105250.setStemDirection(dirsmo109425);
smo105251.setStemDirection(dirsmo109425);
const smo109425 = new VF.Beam([smo105249,smo105250,smo105251]);
const dirsmo109428 = smo107991.getStemDirection();
smo107991.setStemDirection(dirsmo109428);
smo107992.setStemDirection(dirsmo109428);
const smo109428 = new VF.Beam([smo107991,smo107992]);
const dirsmo109429 = smo107993.getStemDirection();
smo107993.setStemDirection(dirsmo109429);
smo107994.setStemDirection(dirsmo109429);
const smo109429 = new VF.Beam([smo107993,smo107994]);
 
// formatting measures in staff group smo103216
fmtsmo10526563.format([smo105265v0,smo105265v1,smo108008v0], 274);
const stavesmo105265 = new VF.Stave(977, 396, 288);
stavesmo105265.setAttribute('id', 'stavesmo105265');
stavesmo105265.setBegBarType(VF.Barline.type.NONE);
stavesmo105265.setContext(context);
stavesmo105265.draw();
smo105265v0.draw(context, stavesmo105265);
smo105265v1.draw(context, stavesmo105265);
smo109424.setContext(context);
smo109424.draw();
smo109425.setContext(context);
smo109425.draw();
const stavesmo108008 = new VF.Stave(977, 556, 288);
stavesmo108008.setAttribute('id', 'stavesmo108008');
stavesmo108008.setBegBarType(VF.Barline.type.NONE);
stavesmo108008.setContext(context);
stavesmo108008.draw();
smo108008v0.draw(context, stavesmo108008);
smo109428.setContext(context);
smo109428.draw();
smo109429.setContext(context);
smo109429.draw();
const fmtsmo10528464 = new VF.Formatter();
//
// voices and notes for stave 0 64
const smo105284v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105284v0ar = [];
const smo105266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo105266.setAttribute('id', 'smo105266');
smo105284v0ar.push(smo105266);
const smo105267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105267.setAttribute('id', 'smo105267');
const smo1052670acc = new VF.Accidental('n');
smo105267.addModifier(smo1052670acc, 0);
smo105284v0ar.push(smo105267);
const smo105268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo105268.setAttribute('id', 'smo105268');
smo105284v0ar.push(smo105268);
const smo105269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n"]}'))
smo105269.setAttribute('id', 'smo105269');
smo105284v0ar.push(smo105269);
const smo105270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","fn/5/n","an/5/n"]}'))
smo105270.setAttribute('id', 'smo105270');
smo105284v0ar.push(smo105270);
smo105284v0.addTickables(smo105284v0ar)
fmtsmo10528464.joinVoices([smo105284v0]);
const fmtsmo10802664 = new VF.Formatter();
//
// voices and notes for stave 1 64
const smo108026v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108026v0ar = [];
const smo108009 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n"]}'))
smo108009.setAttribute('id', 'smo108009');
smo108026v0ar.push(smo108009);
const smo108010 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo108010.setAttribute('id', 'smo108010');
smo108026v0ar.push(smo108010);
const smo108011 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo108011.setAttribute('id', 'smo108011');
smo108026v0ar.push(smo108011);
const smo108012 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","dn/4/n","fn/4/n"]}'))
smo108012.setAttribute('id', 'smo108012');
smo108026v0ar.push(smo108012);
smo108026v0.addTickables(smo108026v0ar)
fmtsmo10802664.joinVoices([smo108026v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109432 = smo105266.getStemDirection();
smo105266.setStemDirection(dirsmo109432);
smo105267.setStemDirection(dirsmo109432);
smo105268.setStemDirection(dirsmo109432);
const smo109432 = new VF.Beam([smo105266,smo105267,smo105268]);
const dirsmo109433 = smo105269.getStemDirection();
smo105269.setStemDirection(dirsmo109433);
smo105270.setStemDirection(dirsmo109433);
const smo109433 = new VF.Beam([smo105269,smo105270]);
const dirsmo109436 = smo108009.getStemDirection();
smo108009.setStemDirection(dirsmo109436);
smo108010.setStemDirection(dirsmo109436);
const smo109436 = new VF.Beam([smo108009,smo108010]);
const dirsmo109437 = smo108011.getStemDirection();
smo108011.setStemDirection(dirsmo109437);
smo108012.setStemDirection(dirsmo109437);
const smo109437 = new VF.Beam([smo108011,smo108012]);
 
// formatting measures in staff group smo103216
fmtsmo10528464.format([smo105284v0,smo108026v0], 274);
const stavesmo105284 = new VF.Stave(1265, 396, 288);
stavesmo105284.setAttribute('id', 'stavesmo105284');
stavesmo105284.setBegBarType(VF.Barline.type.NONE);
stavesmo105284.setContext(context);
stavesmo105284.draw();
smo105284v0.draw(context, stavesmo105284);
smo109432.setContext(context);
smo109432.draw();
smo109433.setContext(context);
smo109433.draw();
const stavesmo108026 = new VF.Stave(1265, 556, 288);
stavesmo108026.setAttribute('id', 'stavesmo108026');
stavesmo108026.setBegBarType(VF.Barline.type.NONE);
stavesmo108026.setContext(context);
stavesmo108026.draw();
smo108026v0.draw(context, stavesmo108026);
smo109436.setContext(context);
smo109436.draw();
smo109437.setContext(context);
smo109437.draw();
const fmtsmo10530765 = new VF.Formatter();
//
// voices and notes for stave 0 65
const smo105307v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105307v0ar = [];
const smo105285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo105285.setAttribute('id', 'smo105285');
smo105307v0ar.push(smo105285);
const smo105286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n","gn/5/n","bb/5/n"]}'))
smo105286.setAttribute('id', 'smo105286');
smo105286.addModifier(new VF.Dot(), 0);
smo105286.addModifier(new VF.Dot(), 1);
smo105286.addModifier(new VF.Dot(), 2);
smo105307v0ar.push(smo105286);
const smo105287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105287.setAttribute('id', 'smo105287');
smo105307v0ar.push(smo105287);
smo105307v0.addTickables(smo105307v0ar)
fmtsmo10530765.joinVoices([smo105307v0]);
const smo105307v1 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105307v1ar = [];
const smo105288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105288.setAttribute('id', 'smo105288');
smo105288.setStyle({ fillStyle: "#115511" });
smo105307v1ar.push(smo105288);
const smo105289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo105289.setAttribute('id', 'smo105289');
smo105289.setStyle({ fillStyle: "#115511" });
smo105307v1ar.push(smo105289);
const smo105290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo105290.setAttribute('id', 'smo105290');
smo105290.setStyle({ fillStyle: "#115511" });
const smo1052900acc = new VF.Accidental('b');
smo105290.addModifier(smo1052900acc, 0);
smo105307v1ar.push(smo105290);
const smo105291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo105291.setAttribute('id', 'smo105291');
smo105291.setStyle({ fillStyle: "#115511" });
const smo1052910acc = new VF.Accidental('n');
smo105291.addModifier(smo1052910acc, 0);
smo105307v1ar.push(smo105291);
const smo105292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105292.setAttribute('id', 'smo105292');
smo105292.setStyle({ fillStyle: "#115511" });
smo105307v1ar.push(smo105292);
const smo105293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo105293.setAttribute('id', 'smo105293');
smo105293.setStyle({ fillStyle: "#115511" });
smo105307v1ar.push(smo105293);
smo105307v1.addTickables(smo105307v1ar)
fmtsmo10530765.joinVoices([smo105307v1]);
const fmtsmo10804465 = new VF.Formatter();
//
// voices and notes for stave 1 65
const smo108044v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108044v0ar = [];
const smo108027 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108027.setAttribute('id', 'smo108027');
smo108044v0ar.push(smo108027);
const smo108028 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo108028.setAttribute('id', 'smo108028');
smo108044v0ar.push(smo108028);
const smo108029 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo108029.setAttribute('id', 'smo108029');
smo108044v0ar.push(smo108029);
const smo108030 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo108030.setAttribute('id', 'smo108030');
smo108044v0ar.push(smo108030);
smo108044v0.addTickables(smo108044v0ar)
fmtsmo10804465.joinVoices([smo108044v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109440 = smo105286.getStemDirection();
smo105286.setStemDirection(dirsmo109440);
smo105287.setStemDirection(dirsmo109440);
const smo109440 = new VF.Beam([smo105286,smo105287]);
const dirsmo109441 = smo105289.getStemDirection();
smo105289.setStemDirection(dirsmo109441);
smo105290.setStemDirection(dirsmo109441);
const smo109441 = new VF.Beam([smo105289,smo105290]);
const dirsmo109442 = smo105291.getStemDirection();
smo105291.setStemDirection(dirsmo109442);
smo105292.setStemDirection(dirsmo109442);
smo105293.setStemDirection(dirsmo109442);
const smo109442 = new VF.Beam([smo105291,smo105292,smo105293]);
const dirsmo109445 = smo108027.getStemDirection();
smo108027.setStemDirection(dirsmo109445);
smo108028.setStemDirection(dirsmo109445);
const smo109445 = new VF.Beam([smo108027,smo108028]);
const dirsmo109446 = smo108029.getStemDirection();
smo108029.setStemDirection(dirsmo109446);
smo108030.setStemDirection(dirsmo109446);
const smo109446 = new VF.Beam([smo108029,smo108030]);
 
// formatting measures in staff group smo103216
fmtsmo10530765.format([smo105307v0,smo105307v1,smo108044v0], 274);
const stavesmo105307 = new VF.Stave(1553, 396, 288);
stavesmo105307.setAttribute('id', 'stavesmo105307');
stavesmo105307.setBegBarType(VF.Barline.type.NONE);
stavesmo105307.setContext(context);
stavesmo105307.draw();
smo105307v0.draw(context, stavesmo105307);
smo105307v1.draw(context, stavesmo105307);
smo109440.setContext(context);
smo109440.draw();
smo109441.setContext(context);
smo109441.draw();
smo109442.setContext(context);
smo109442.draw();
const stavesmo108044 = new VF.Stave(1553, 556, 288);
stavesmo108044.setAttribute('id', 'stavesmo108044');
stavesmo108044.setBegBarType(VF.Barline.type.NONE);
stavesmo108044.setContext(context);
stavesmo108044.draw();
smo108044v0.draw(context, stavesmo108044);
smo109445.setContext(context);
smo109445.draw();
smo109446.setContext(context);
smo109446.draw();
const rightsmo103216stavesmo1053071 = new VF.StaveConnector(stavesmo105307, stavesmo108044).setType(0);
rightsmo103216stavesmo1053071.setContext(context).draw();
const fmtsmo10532766 = new VF.Formatter();
//
// voices and notes for stave 0 66
const smo105327v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105327v0ar = [];
const smo105308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105308.setAttribute('id', 'smo105308');
smo105327v0ar.push(smo105308);
const smo105309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105309.setAttribute('id', 'smo105309');
smo105327v0ar.push(smo105309);
const smo105310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105310.setAttribute('id', 'smo105310');
smo105327v0ar.push(smo105310);
const smo105311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105311.setAttribute('id', 'smo105311');
smo105327v0ar.push(smo105311);
const smo105312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105312.setAttribute('id', 'smo105312');
smo105327v0ar.push(smo105312);
const smo105313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105313.setAttribute('id', 'smo105313');
smo105327v0ar.push(smo105313);
smo105327v0.addTickables(smo105327v0ar)
fmtsmo10532766.joinVoices([smo105327v0]);
const fmtsmo10806266 = new VF.Formatter();
//
// voices and notes for stave 1 66
const smo108062v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108062v0ar = [];
const smo108045 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/2/n","bb/3/n"]}'))
smo108045.setAttribute('id', 'smo108045');
smo108062v0ar.push(smo108045);
const smo108046 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n","dn/4/n"]}'))
smo108046.setAttribute('id', 'smo108046');
smo108062v0ar.push(smo108046);
const smo108047 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo108047.setAttribute('id', 'smo108047');
smo108062v0ar.push(smo108047);
const smo108048 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/2/n","ab/3/n"]}'))
smo108048.setAttribute('id', 'smo108048');
const smo1080480acc = new VF.Accidental('b');
smo108048.addModifier(smo1080480acc, 0);
const smo1080481acc = new VF.Accidental('b');
smo108048.addModifier(smo1080481acc, 1);
smo108062v0ar.push(smo108048);
smo108062v0.addTickables(smo108062v0ar)
fmtsmo10806266.joinVoices([smo108062v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109458 = smo105308.getStemDirection();
smo105308.setStemDirection(dirsmo109458);
smo105309.setStemDirection(dirsmo109458);
smo105310.setStemDirection(dirsmo109458);
const smo109458 = new VF.Beam([smo105308,smo105309,smo105310]);
const dirsmo109459 = smo105311.getStemDirection();
smo105311.setStemDirection(dirsmo109459);
smo105312.setStemDirection(dirsmo109459);
smo105313.setStemDirection(dirsmo109459);
const smo109459 = new VF.Beam([smo105311,smo105312,smo105313]);
const dirsmo109462 = smo108045.getStemDirection();
smo108045.setStemDirection(dirsmo109462);
smo108046.setStemDirection(dirsmo109462);
const smo109462 = new VF.Beam([smo108045,smo108046]);
const dirsmo109463 = smo108047.getStemDirection();
smo108047.setStemDirection(dirsmo109463);
smo108048.setStemDirection(dirsmo109463);
const smo109463 = new VF.Beam([smo108047,smo108048]);
 
// formatting measures in staff group smo103216
fmtsmo10532766.format([smo105327v0,smo108062v0], 209);
const stavesmo105327 = new VF.Stave(73, 763, 295);
stavesmo105327.setAttribute('id', 'stavesmo105327');
stavesmo105327.setBegBarType(1);
stavesmo105327.addClef('treble');
const keysmo105327 = new VF.KeySignature('Bb');
keysmo105327.addToStave(stavesmo105327);
stavesmo105327.setContext(context);
stavesmo105327.draw();
smo105327v0.draw(context, stavesmo105327);
smo109458.setContext(context);
smo109458.draw();
smo109459.setContext(context);
smo109459.draw();
const stavesmo108062 = new VF.Stave(73, 934, 295);
stavesmo108062.setAttribute('id', 'stavesmo108062');
stavesmo108062.setBegBarType(1);
stavesmo108062.addClef('bass');
const keysmo108062 = new VF.KeySignature('Bb');
keysmo108062.addToStave(stavesmo108062);
stavesmo108062.setContext(context);
stavesmo108062.draw();
smo108062v0.draw(context, stavesmo108062);
smo109462.setContext(context);
smo109462.draw();
smo109463.setContext(context);
smo109463.draw();
const leftsmo103216stavesmo1053271 = new VF.StaveConnector(stavesmo105327, stavesmo108062).setType(3);
leftsmo103216stavesmo1053271.setContext(context).draw();
const fmtsmo10534567 = new VF.Formatter();
//
// voices and notes for stave 0 67
const smo105345v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105345v0ar = [];
const smo105328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105328.setAttribute('id', 'smo105328');
smo105345v0ar.push(smo105328);
const smo105329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["ab/4/n","bn/4/n","fn/5/n"]}'))
smo105329.setAttribute('id', 'smo105329');
const smo1053290acc = new VF.Accidental('b');
smo105329.addModifier(smo1053290acc, 0);
const smo1053291acc = new VF.Accidental('n');
smo105329.addModifier(smo1053291acc, 1);
smo105329.addModifier(new VF.Dot(), 0);
smo105329.addModifier(new VF.Dot(), 1);
smo105329.addModifier(new VF.Dot(), 2);
smo105345v0ar.push(smo105329);
const smo105331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo105331.setAttribute('id', 'smo105331');
smo105345v0ar.push(smo105331);
smo105345v0.addTickables(smo105345v0ar)
fmtsmo10534567.joinVoices([smo105345v0]);
const fmtsmo10808167 = new VF.Formatter();
//
// voices and notes for stave 1 67
const smo108081v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108081v0ar = [];
const smo108063 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo108063.setAttribute('id', 'smo108063');
smo108081v0ar.push(smo108063);
const smo108064 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo108064.setAttribute('id', 'smo108064');
smo108081v0ar.push(smo108064);
const smo108065 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo108065.setAttribute('id', 'smo108065');
const smo1080650acc = new VF.Accidental('n');
smo108065.addModifier(smo1080650acc, 0);
const smo1080651acc = new VF.Accidental('n');
smo108065.addModifier(smo1080651acc, 1);
smo108081v0ar.push(smo108065);
const smo108066 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo108066.setAttribute('id', 'smo108066');
smo108081v0ar.push(smo108066);
const smo108067 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["db/2/n","db/3/n"]}'))
smo108067.setAttribute('id', 'smo108067');
const smo1080670acc = new VF.Accidental('b');
smo108067.addModifier(smo1080670acc, 0);
const smo1080671acc = new VF.Accidental('b');
smo108067.addModifier(smo1080671acc, 1);
smo108081v0ar.push(smo108067);
smo108081v0.addTickables(smo108081v0ar)
fmtsmo10808167.joinVoices([smo108081v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109466 = smo105329.getStemDirection();
smo105329.setStemDirection(dirsmo109466);
smo105331.setStemDirection(dirsmo109466);
const smo109466 = new VF.Beam([smo105329,smo105331]);
const dirsmo109469 = smo108063.getStemDirection();
smo108063.setStemDirection(dirsmo109469);
smo108064.setStemDirection(dirsmo109469);
smo108065.setStemDirection(dirsmo109469);
smo108066.setStemDirection(dirsmo109469);
const smo109469 = new VF.Beam([smo108063,smo108064,smo108065,smo108066]);
 
// formatting measures in staff group smo103216
fmtsmo10534567.format([smo105345v0,smo108081v0], 281);
const stavesmo105345 = new VF.Stave(368, 763, 295);
stavesmo105345.setAttribute('id', 'stavesmo105345');
stavesmo105345.setBegBarType(VF.Barline.type.NONE);
stavesmo105345.setContext(context);
stavesmo105345.draw();
smo105345v0.draw(context, stavesmo105345);
smo109466.setContext(context);
smo109466.draw();
const stavesmo108081 = new VF.Stave(368, 934, 295);
stavesmo108081.setAttribute('id', 'stavesmo108081');
stavesmo108081.setBegBarType(VF.Barline.type.NONE);
stavesmo108081.setContext(context);
stavesmo108081.draw();
smo108081v0.draw(context, stavesmo108081);
smo109469.setContext(context);
smo109469.draw();
const fmtsmo10536768 = new VF.Formatter();
//
// voices and notes for stave 0 68
const smo105367v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105367v0ar = [];
const smo105346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n","an/5/n"]}'))
smo105346.setAttribute('id', 'smo105346');
smo105367v0ar.push(smo105346);
const smo105348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105348.setAttribute('id', 'smo105348');
smo105367v0ar.push(smo105348);
const smo105349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo105349.setAttribute('id', 'smo105349');
smo105367v0ar.push(smo105349);
const smo105350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","gn/5/n"]}'))
smo105350.setAttribute('id', 'smo105350');
smo105367v0ar.push(smo105350);
const smo105351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105351.setAttribute('id', 'smo105351');
smo105367v0ar.push(smo105351);
const smo105352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","dn/5/n"]}'))
smo105352.setAttribute('id', 'smo105352');
smo105367v0ar.push(smo105352);
const smo105353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105353.setAttribute('id', 'smo105353');
const smo1053530acc = new VF.Accidental('n');
smo105353.addModifier(smo1053530acc, 0);
smo105367v0ar.push(smo105353);
smo105367v0.addTickables(smo105367v0ar)
fmtsmo10536768.joinVoices([smo105367v0]);
const fmtsmo10809968 = new VF.Formatter();
//
// voices and notes for stave 1 68
const smo108099v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108099v0ar = [];
const smo108082 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo108082.setAttribute('id', 'smo108082');
smo108099v0ar.push(smo108082);
const smo108083 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n","cn/4/n","fn/4/n"]}'))
smo108083.setAttribute('id', 'smo108083');
smo108099v0ar.push(smo108083);
const smo108084 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo108084.setAttribute('id', 'smo108084');
smo108099v0ar.push(smo108084);
const smo108085 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo108085.setAttribute('id', 'smo108085');
smo108099v0ar.push(smo108085);
smo108099v0.addTickables(smo108099v0ar)
fmtsmo10809968.joinVoices([smo108099v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109472 = smo105346.getStemDirection();
smo105346.setStemDirection(dirsmo109472);
smo105348.setStemDirection(dirsmo109472);
smo105349.setStemDirection(dirsmo109472);
const smo109472 = new VF.Beam([smo105346,smo105348,smo105349]);
const dirsmo109473 = smo105350.getStemDirection();
smo105350.setStemDirection(dirsmo109473);
smo105351.setStemDirection(dirsmo109473);
smo105352.setStemDirection(dirsmo109473);
smo105353.setStemDirection(dirsmo109473);
const smo109473 = new VF.Beam([smo105350,smo105351,smo105352,smo105353]);
const dirsmo109476 = smo108082.getStemDirection();
smo108082.setStemDirection(dirsmo109476);
smo108083.setStemDirection(dirsmo109476);
const smo109476 = new VF.Beam([smo108082,smo108083]);
const dirsmo109477 = smo108084.getStemDirection();
smo108084.setStemDirection(dirsmo109477);
smo108085.setStemDirection(dirsmo109477);
const smo109477 = new VF.Beam([smo108084,smo108085]);
 
// formatting measures in staff group smo103216
fmtsmo10536768.format([smo105367v0,smo108099v0], 281);
const stavesmo105367 = new VF.Stave(663, 763, 295);
stavesmo105367.setAttribute('id', 'stavesmo105367');
stavesmo105367.setBegBarType(VF.Barline.type.NONE);
stavesmo105367.setContext(context);
stavesmo105367.draw();
smo105367v0.draw(context, stavesmo105367);
smo109472.setContext(context);
smo109472.draw();
smo109473.setContext(context);
smo109473.draw();
const stavesmo108099 = new VF.Stave(663, 934, 295);
stavesmo108099.setAttribute('id', 'stavesmo108099');
stavesmo108099.setBegBarType(VF.Barline.type.NONE);
stavesmo108099.setContext(context);
stavesmo108099.draw();
smo108099v0.draw(context, stavesmo108099);
smo109476.setContext(context);
smo109476.draw();
smo109477.setContext(context);
smo109477.draw();
const fmtsmo10538969 = new VF.Formatter();
//
// voices and notes for stave 0 69
const smo105389v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105389v0ar = [];
const smo105368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo105368.setAttribute('id', 'smo105368');
smo105389v0ar.push(smo105368);
const smo105369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n"]}'))
smo105369.setAttribute('id', 'smo105369');
const smo1053690acc = new VF.Accidental('n');
smo105369.addModifier(smo1053690acc, 0);
smo105389v0ar.push(smo105369);
const smo105370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105370.setAttribute('id', 'smo105370');
smo105389v0ar.push(smo105370);
const smo105371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105371.setAttribute('id', 'smo105371');
smo105389v0ar.push(smo105371);
const smo105372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105372.setAttribute('id', 'smo105372');
const smo1053720acc = new VF.Accidental('n');
smo105372.addModifier(smo1053720acc, 0);
smo105389v0ar.push(smo105372);
const smo105373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo105373.setAttribute('id', 'smo105373');
smo105389v0ar.push(smo105373);
const smo105374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105374.setAttribute('id', 'smo105374');
smo105389v0ar.push(smo105374);
smo105389v0.addTickables(smo105389v0ar)
fmtsmo10538969.joinVoices([smo105389v0]);
const fmtsmo10811769 = new VF.Formatter();
//
// voices and notes for stave 1 69
const smo108117v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108117v0ar = [];
const smo108100 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo108100.setAttribute('id', 'smo108100');
smo108117v0ar.push(smo108100);
const smo108101 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108101.setAttribute('id', 'smo108101');
smo108117v0ar.push(smo108101);
const smo108102 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108102.setAttribute('id', 'smo108102');
smo108117v0ar.push(smo108102);
smo108117v0.addTickables(smo108117v0ar)
fmtsmo10811769.joinVoices([smo108117v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109480 = smo105368.getStemDirection();
smo105368.setStemDirection(dirsmo109480);
smo105369.setStemDirection(dirsmo109480);
smo105370.setStemDirection(dirsmo109480);
const smo109480 = new VF.Beam([smo105368,smo105369,smo105370]);
const dirsmo109481 = smo105371.getStemDirection();
smo105371.setStemDirection(dirsmo109481);
smo105372.setStemDirection(dirsmo109481);
smo105373.setStemDirection(dirsmo109481);
smo105374.setStemDirection(dirsmo109481);
const smo109481 = new VF.Beam([smo105371,smo105372,smo105373,smo105374]);
 
// formatting measures in staff group smo103216
fmtsmo10538969.format([smo105389v0,smo108117v0], 277);
const stavesmo105389 = new VF.Stave(958, 763, 295);
stavesmo105389.setAttribute('id', 'stavesmo105389');
stavesmo105389.setBegBarType(VF.Barline.type.NONE);
stavesmo105389.setEndBarType(5);
stavesmo105389.setContext(context);
stavesmo105389.draw();
smo105389v0.draw(context, stavesmo105389);
smo109480.setContext(context);
smo109480.draw();
smo109481.setContext(context);
smo109481.draw();
const stavesmo108117 = new VF.Stave(958, 934, 295);
stavesmo108117.setAttribute('id', 'stavesmo108117');
stavesmo108117.setBegBarType(VF.Barline.type.NONE);
stavesmo108117.setEndBarType(5);
stavesmo108117.setContext(context);
stavesmo108117.draw();
smo108117v0.draw(context, stavesmo108117);
const fmtsmo10540870 = new VF.Formatter();
//
// voices and notes for stave 0 70
const smo105408v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105408v0ar = [];
const smo105390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo105390.setAttribute('id', 'smo105390');
smo105408v0ar.push(smo105390);
const smo105391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105391.setAttribute('id', 'smo105391');
smo105408v0ar.push(smo105391);
const smo105392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n","an/5/n","cn/6/n","fn/6/n"]}'))
smo105392.setAttribute('id', 'smo105392');
smo105408v0ar.push(smo105392);
const smo105393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105393.setAttribute('id', 'smo105393');
smo105408v0ar.push(smo105393);
smo105408v0.addTickables(smo105408v0ar)
fmtsmo10540870.joinVoices([smo105408v0]);
const fmtsmo10813670 = new VF.Formatter();
//
// voices and notes for stave 1 70
const smo108136v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108136v0ar = [];
const smo108118 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo108118.setAttribute('id', 'smo108118');
smo108136v0ar.push(smo108118);
const smo108119 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108119.setAttribute('id', 'smo108119');
smo108136v0ar.push(smo108119);
const smo108120 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/1/n","fn/2/n"]}'))
smo108120.setAttribute('id', 'smo108120');
smo108136v0ar.push(smo108120);
const smo108121 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108121.setAttribute('id', 'smo108121');
smo108136v0ar.push(smo108121);
smo108136v0.addTickables(smo108136v0ar)
fmtsmo10813670.joinVoices([smo108136v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
 
// formatting measures in staff group smo103216
fmtsmo10540870.format([smo105408v0,smo108136v0], 281);
const stavesmo105408 = new VF.Stave(1253, 763, 295);
stavesmo105408.setAttribute('id', 'stavesmo105408');
stavesmo105408.setBegBarType(VF.Barline.type.NONE);
stavesmo105408.setContext(context);
stavesmo105408.draw();
smo105408v0.draw(context, stavesmo105408);
const stavesmo108136 = new VF.Stave(1253, 934, 295);
stavesmo108136.setAttribute('id', 'stavesmo108136');
stavesmo108136.setBegBarType(VF.Barline.type.NONE);
stavesmo108136.setContext(context);
stavesmo108136.draw();
smo108136v0.draw(context, stavesmo108136);
const fmtsmo10542971 = new VF.Formatter();
//
// voices and notes for stave 0 71
const smo105429v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105429v0ar = [];
const smo105409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105409.setAttribute('id', 'smo105409');
smo105429v0ar.push(smo105409);
const smo105410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105410.setAttribute('id', 'smo105410');
smo105429v0ar.push(smo105410);
const smo105411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105411.setAttribute('id', 'smo105411');
smo105429v0ar.push(smo105411);
const smo105412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105412.setAttribute('id', 'smo105412');
smo105429v0ar.push(smo105412);
const smo105413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105413.setAttribute('id', 'smo105413');
smo105429v0ar.push(smo105413);
const smo105414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105414.setAttribute('id', 'smo105414');
smo105429v0ar.push(smo105414);
const smo105415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105415.setAttribute('id', 'smo105415');
smo105429v0ar.push(smo105415);
smo105429v0.addTickables(smo105429v0ar)
fmtsmo10542971.joinVoices([smo105429v0]);
const fmtsmo10815471 = new VF.Formatter();
//
// voices and notes for stave 1 71
const smo108154v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108154v0ar = [];
const smo108137 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo108137.setAttribute('id', 'smo108137');
smo108154v0ar.push(smo108137);
const smo108138 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n","cn/4/n","fn/4/n"]}'))
smo108138.setAttribute('id', 'smo108138');
smo108154v0ar.push(smo108138);
const smo108139 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo108139.setAttribute('id', 'smo108139');
const smo1081390acc = new VF.Accidental('b');
smo108139.addModifier(smo1081390acc, 0);
const smo1081393acc = new VF.Accidental('b');
smo108139.addModifier(smo1081393acc, 3);
smo108154v0ar.push(smo108139);
const smo108140 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","an/3/n","cn/4/n","eb/4/n"]}'))
smo108140.setAttribute('id', 'smo108140');
smo108154v0ar.push(smo108140);
smo108154v0.addTickables(smo108154v0ar)
fmtsmo10815471.joinVoices([smo108154v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109488 = smo105409.getStemDirection();
smo105409.setStemDirection(dirsmo109488);
smo105410.setStemDirection(dirsmo109488);
smo105411.setStemDirection(dirsmo109488);
const smo109488 = new VF.Beam([smo105409,smo105410,smo105411]);
const dirsmo109489 = smo105412.getStemDirection();
smo105412.setStemDirection(dirsmo109489);
smo105413.setStemDirection(dirsmo109489);
smo105414.setStemDirection(dirsmo109489);
smo105415.setStemDirection(dirsmo109489);
const smo109489 = new VF.Beam([smo105412,smo105413,smo105414,smo105415]);
const dirsmo109492 = smo108137.getStemDirection();
smo108137.setStemDirection(dirsmo109492);
smo108138.setStemDirection(dirsmo109492);
const smo109492 = new VF.Beam([smo108137,smo108138]);
const dirsmo109493 = smo108139.getStemDirection();
smo108139.setStemDirection(dirsmo109493);
smo108140.setStemDirection(dirsmo109493);
const smo109493 = new VF.Beam([smo108139,smo108140]);
 
// formatting measures in staff group smo103216
fmtsmo10542971.format([smo105429v0,smo108154v0], 248);
const stavesmo105429 = new VF.Stave(1548, 763, 295);
stavesmo105429.setAttribute('id', 'stavesmo105429');
stavesmo105429.setBegBarType(VF.Barline.type.NONE);
const keysmo105429 = new VF.KeySignature('C');
keysmo105429.cancelKey('Bb');
keysmo105429.addToStave(stavesmo105429);
stavesmo105429.setContext(context);
stavesmo105429.draw();
smo105429v0.draw(context, stavesmo105429);
smo109488.setContext(context);
smo109488.draw();
smo109489.setContext(context);
smo109489.draw();
const stavesmo108154 = new VF.Stave(1548, 934, 295);
stavesmo108154.setAttribute('id', 'stavesmo108154');
stavesmo108154.setBegBarType(VF.Barline.type.NONE);
const keysmo108154 = new VF.KeySignature('C');
keysmo108154.cancelKey('Bb');
keysmo108154.addToStave(stavesmo108154);
stavesmo108154.setContext(context);
stavesmo108154.draw();
smo108154v0.draw(context, stavesmo108154);
smo109492.setContext(context);
smo109492.draw();
smo109493.setContext(context);
smo109493.draw();
const rightsmo103216stavesmo1054291 = new VF.StaveConnector(stavesmo105429, stavesmo108154).setType(0);
rightsmo103216stavesmo1054291.setContext(context).draw();
const fmtsmo10545172 = new VF.Formatter();
//
// voices and notes for stave 0 72
const smo105451v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105451v0ar = [];
const smo105430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo105430.setAttribute('id', 'smo105430');
smo105451v0ar.push(smo105430);
const smo105431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105431.setAttribute('id', 'smo105431');
smo105451v0ar.push(smo105431);
const smo105432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105432.setAttribute('id', 'smo105432');
smo105451v0ar.push(smo105432);
const smo105433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105433.setAttribute('id', 'smo105433');
smo105451v0ar.push(smo105433);
const smo105434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105434.setAttribute('id', 'smo105434');
smo105451v0ar.push(smo105434);
const smo105435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105435.setAttribute('id', 'smo105435');
smo105451v0ar.push(smo105435);
const smo105436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105436.setAttribute('id', 'smo105436');
smo105451v0ar.push(smo105436);
const smo105437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo105437.setAttribute('id', 'smo105437');
smo105451v0ar.push(smo105437);
smo105451v0.addTickables(smo105451v0ar)
fmtsmo10545172.joinVoices([smo105451v0]);
const fmtsmo10817272 = new VF.Formatter();
//
// voices and notes for stave 1 72
const smo108172v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108172v0ar = [];
const smo108155 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo108155.setAttribute('id', 'smo108155');
smo108172v0ar.push(smo108155);
const smo108156 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo108156.setAttribute('id', 'smo108156');
smo108172v0ar.push(smo108156);
const smo108157 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo108157.setAttribute('id', 'smo108157');
smo108172v0ar.push(smo108157);
const smo108158 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo108158.setAttribute('id', 'smo108158');
smo108172v0ar.push(smo108158);
smo108172v0.addTickables(smo108172v0ar)
fmtsmo10817272.joinVoices([smo108172v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109504 = smo105430.getStemDirection();
smo105430.setStemDirection(dirsmo109504);
smo105431.setStemDirection(dirsmo109504);
smo105432.setStemDirection(dirsmo109504);
smo105433.setStemDirection(dirsmo109504);
const smo109504 = new VF.Beam([smo105430,smo105431,smo105432,smo105433]);
const dirsmo109505 = smo105434.getStemDirection();
smo105434.setStemDirection(dirsmo109505);
smo105435.setStemDirection(dirsmo109505);
smo105436.setStemDirection(dirsmo109505);
smo105437.setStemDirection(dirsmo109505);
const smo109505 = new VF.Beam([smo105434,smo105435,smo105436,smo105437]);
const dirsmo109508 = smo108155.getStemDirection();
smo108155.setStemDirection(dirsmo109508);
smo108156.setStemDirection(dirsmo109508);
const smo109508 = new VF.Beam([smo108155,smo108156]);
const dirsmo109509 = smo108157.getStemDirection();
smo108157.setStemDirection(dirsmo109509);
smo108158.setStemDirection(dirsmo109509);
const smo109509 = new VF.Beam([smo108157,smo108158]);
 
// formatting measures in staff group smo103216
fmtsmo10545172.format([smo105451v0,smo108172v0], 237);
const stavesmo105451 = new VF.Stave(73, 1147, 295);
stavesmo105451.setAttribute('id', 'stavesmo105451');
stavesmo105451.setBegBarType(1);
stavesmo105451.addClef('treble');
stavesmo105451.setContext(context);
stavesmo105451.draw();
smo105451v0.draw(context, stavesmo105451);
smo109504.setContext(context);
smo109504.draw();
smo109505.setContext(context);
smo109505.draw();
const stavesmo108172 = new VF.Stave(73, 1271, 295);
stavesmo108172.setAttribute('id', 'stavesmo108172');
stavesmo108172.setBegBarType(1);
stavesmo108172.addClef('bass');
stavesmo108172.setContext(context);
stavesmo108172.draw();
smo108172v0.draw(context, stavesmo108172);
smo109508.setContext(context);
smo109508.draw();
smo109509.setContext(context);
smo109509.draw();
const leftsmo103216stavesmo1054511 = new VF.StaveConnector(stavesmo105451, stavesmo108172).setType(3);
leftsmo103216stavesmo1054511.setContext(context).draw();
const fmtsmo10547073 = new VF.Formatter();
//
// voices and notes for stave 0 73
const smo105470v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105470v0ar = [];
const smo105452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","an/4/n"]}'))
smo105452.setAttribute('id', 'smo105452');
const smo1054520acc = new VF.Accidental('b');
smo105452.addModifier(smo1054520acc, 0);
smo105470v0ar.push(smo105452);
const smo105453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gb/5/n"]}'))
smo105453.setAttribute('id', 'smo105453');
const smo1054531acc = new VF.Accidental('b');
smo105453.addModifier(smo1054531acc, 1);
smo105470v0ar.push(smo105453);
const smo105454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","en/5/n"]}'))
smo105454.setAttribute('id', 'smo105454');
smo105470v0ar.push(smo105454);
const smo105455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo105455.setAttribute('id', 'smo105455');
smo105470v0ar.push(smo105455);
const smo105456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo105456.setAttribute('id', 'smo105456');
smo105470v0ar.push(smo105456);
smo105470v0.addTickables(smo105470v0ar)
fmtsmo10547073.joinVoices([smo105470v0]);
const fmtsmo10819073 = new VF.Formatter();
//
// voices and notes for stave 1 73
const smo108190v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108190v0ar = [];
const smo108173 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","cn/4/n"]}'))
smo108173.setAttribute('id', 'smo108173');
smo108190v0ar.push(smo108173);
const smo108174 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n","an/3/n"]}'))
smo108174.setAttribute('id', 'smo108174');
smo108190v0ar.push(smo108174);
const smo108175 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo108175.setAttribute('id', 'smo108175');
smo108190v0ar.push(smo108175);
const smo108176 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","bn/3/n"]}'))
smo108176.setAttribute('id', 'smo108176');
smo108190v0ar.push(smo108176);
smo108190v0.addTickables(smo108190v0ar)
fmtsmo10819073.joinVoices([smo108190v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109512 = smo105452.getStemDirection();
smo105452.setStemDirection(dirsmo109512);
smo105453.setStemDirection(dirsmo109512);
const smo109512 = new VF.Beam([smo105452,smo105453]);
const dirsmo109513 = smo105454.getStemDirection();
smo105454.setStemDirection(dirsmo109513);
smo105455.setStemDirection(dirsmo109513);
smo105456.setStemDirection(dirsmo109513);
const smo109513 = new VF.Beam([smo105454,smo105455,smo105456]);
const dirsmo109516 = smo108173.getStemDirection();
smo108173.setStemDirection(dirsmo109516);
smo108174.setStemDirection(dirsmo109516);
const smo109516 = new VF.Beam([smo108173,smo108174]);
const dirsmo109517 = smo108175.getStemDirection();
smo108175.setStemDirection(dirsmo109517);
smo108176.setStemDirection(dirsmo109517);
const smo109517 = new VF.Beam([smo108175,smo108176]);
 
// formatting measures in staff group smo103216
fmtsmo10547073.format([smo105470v0,smo108190v0], 281);
const stavesmo105470 = new VF.Stave(368, 1147, 295);
stavesmo105470.setAttribute('id', 'stavesmo105470');
stavesmo105470.setBegBarType(VF.Barline.type.NONE);
stavesmo105470.setContext(context);
stavesmo105470.draw();
smo105470v0.draw(context, stavesmo105470);
smo109512.setContext(context);
smo109512.draw();
smo109513.setContext(context);
smo109513.draw();
const stavesmo108190 = new VF.Stave(368, 1271, 295);
stavesmo108190.setAttribute('id', 'stavesmo108190');
stavesmo108190.setBegBarType(VF.Barline.type.NONE);
stavesmo108190.setContext(context);
stavesmo108190.draw();
smo108190v0.draw(context, stavesmo108190);
smo109516.setContext(context);
smo109516.draw();
smo109517.setContext(context);
smo109517.draw();
const fmtsmo10548774 = new VF.Formatter();
//
// voices and notes for stave 0 74
const smo105487v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105487v0ar = [];
const smo105471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","cn/5/n"]}'))
smo105471.setAttribute('id', 'smo105471');
smo105487v0ar.push(smo105471);
const smo105472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo105472.setAttribute('id', 'smo105472');
smo105487v0ar.push(smo105472);
const smo105473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105473.setAttribute('id', 'smo105473');
smo105487v0ar.push(smo105473);
smo105487v0.addTickables(smo105487v0ar)
fmtsmo10548774.joinVoices([smo105487v0]);
const fmtsmo10820774 = new VF.Formatter();
//
// voices and notes for stave 1 74
const smo108207v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108207v0ar = [];
const smo108191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo108191.setAttribute('id', 'smo108191');
smo108207v0ar.push(smo108191);
const smo108192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo108192.setAttribute('id', 'smo108192');
smo108207v0ar.push(smo108192);
const smo108193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108193.setAttribute('id', 'smo108193');
smo108207v0ar.push(smo108193);
smo108207v0.addTickables(smo108207v0ar)
fmtsmo10820774.joinVoices([smo108207v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
 
// formatting measures in staff group smo103216
fmtsmo10548774.format([smo105487v0,smo108207v0], 281);
const stavesmo105487 = new VF.Stave(663, 1147, 295);
stavesmo105487.setAttribute('id', 'stavesmo105487');
stavesmo105487.setBegBarType(VF.Barline.type.NONE);
stavesmo105487.setContext(context);
stavesmo105487.draw();
smo105487v0.draw(context, stavesmo105487);
const stavesmo108207 = new VF.Stave(663, 1271, 295);
stavesmo108207.setAttribute('id', 'stavesmo108207');
stavesmo108207.setBegBarType(VF.Barline.type.NONE);
stavesmo108207.setContext(context);
stavesmo108207.draw();
smo108207v0.draw(context, stavesmo108207);
const fmtsmo10550775 = new VF.Formatter();
//
// voices and notes for stave 0 75
const smo105507v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105507v0ar = [];
const smo105488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105488.setAttribute('id', 'smo105488');
smo105507v0ar.push(smo105488);
const smo105489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo105489.setAttribute('id', 'smo105489');
const smo1054890acc = new VF.Accidental('b');
smo105489.addModifier(smo1054890acc, 0);
smo105507v0ar.push(smo105489);
const smo105490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105490.setAttribute('id', 'smo105490');
const smo1054900acc = new VF.Accidental('n');
smo105490.addModifier(smo1054900acc, 0);
smo105507v0ar.push(smo105490);
const smo105491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105491.setAttribute('id', 'smo105491');
smo105507v0ar.push(smo105491);
const smo105492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo105492.setAttribute('id', 'smo105492');
const smo1054920acc = new VF.Accidental('b');
smo105492.addModifier(smo1054920acc, 0);
smo105507v0ar.push(smo105492);
const smo105493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105493.setAttribute('id', 'smo105493');
const smo1054930acc = new VF.Accidental('n');
smo105493.addModifier(smo1054930acc, 0);
smo105507v0ar.push(smo105493);
smo105507v0.addTickables(smo105507v0ar)
fmtsmo10550775.joinVoices([smo105507v0]);
const fmtsmo10822575 = new VF.Formatter();
//
// voices and notes for stave 1 75
const smo108225v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108225v0ar = [];
const smo108208 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo108208.setAttribute('id', 'smo108208');
smo108225v0ar.push(smo108208);
const smo108209 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108209.setAttribute('id', 'smo108209');
smo108225v0ar.push(smo108209);
const smo108210 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo108210.setAttribute('id', 'smo108210');
smo108225v0ar.push(smo108210);
const smo108211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108211.setAttribute('id', 'smo108211');
smo108225v0ar.push(smo108211);
smo108225v0.addTickables(smo108225v0ar)
fmtsmo10822575.joinVoices([smo108225v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109524 = smo105488.getStemDirection();
smo105488.setStemDirection(dirsmo109524);
smo105489.setStemDirection(dirsmo109524);
smo105490.setStemDirection(dirsmo109524);
const smo109524 = new VF.Beam([smo105488,smo105489,smo105490]);
const dirsmo109525 = smo105491.getStemDirection();
smo105491.setStemDirection(dirsmo109525);
smo105492.setStemDirection(dirsmo109525);
smo105493.setStemDirection(dirsmo109525);
const smo109525 = new VF.Beam([smo105491,smo105492,smo105493]);
const dirsmo109527 = smo108208.getStemDirection();
smo108208.setStemDirection(dirsmo109527);
smo108209.setStemDirection(dirsmo109527);
const smo109527 = new VF.Beam([smo108208,smo108209]);
const dirsmo109528 = smo108210.getStemDirection();
smo108210.setStemDirection(dirsmo109528);
smo108211.setStemDirection(dirsmo109528);
const smo109528 = new VF.Beam([smo108210,smo108211]);
 
// formatting measures in staff group smo103216
fmtsmo10550775.format([smo105507v0,smo108225v0], 272);
const stavesmo105507 = new VF.Stave(958, 1147, 295);
stavesmo105507.setAttribute('id', 'stavesmo105507');
stavesmo105507.setBegBarType(4);
stavesmo105507.setContext(context);
stavesmo105507.draw();
smo105507v0.draw(context, stavesmo105507);
smo109524.setContext(context);
smo109524.draw();
smo109525.setContext(context);
smo109525.draw();
const stavesmo108225 = new VF.Stave(958, 1271, 295);
stavesmo108225.setAttribute('id', 'stavesmo108225');
stavesmo108225.setBegBarType(4);
stavesmo108225.setContext(context);
stavesmo108225.draw();
smo108225v0.draw(context, stavesmo108225);
smo109527.setContext(context);
smo109527.draw();
smo109528.setContext(context);
smo109528.draw();
const fmtsmo10552976 = new VF.Formatter();
//
// voices and notes for stave 0 76
const smo105529v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105529v0ar = [];
const smo105508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105508.setAttribute('id', 'smo105508');
smo105529v0ar.push(smo105508);
const smo105509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105509.setAttribute('id', 'smo105509');
smo105529v0ar.push(smo105509);
const smo105510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo105510.setAttribute('id', 'smo105510');
smo105529v0ar.push(smo105510);
const smo105511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105511.setAttribute('id', 'smo105511');
smo105529v0ar.push(smo105511);
const smo105512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105512.setAttribute('id', 'smo105512');
smo105529v0ar.push(smo105512);
const smo105513 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105513.setAttribute('id', 'smo105513');
smo105529v0ar.push(smo105513);
const smo105514 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105514.setAttribute('id', 'smo105514');
smo105529v0ar.push(smo105514);
const smo105515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105515.setAttribute('id', 'smo105515');
smo105529v0ar.push(smo105515);
smo105529v0.addTickables(smo105529v0ar)
fmtsmo10552976.joinVoices([smo105529v0]);
const fmtsmo10824376 = new VF.Formatter();
//
// voices and notes for stave 1 76
const smo108243v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108243v0ar = [];
const smo108226 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo108226.setAttribute('id', 'smo108226');
smo108243v0ar.push(smo108226);
const smo108227 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108227.setAttribute('id', 'smo108227');
smo108243v0ar.push(smo108227);
const smo108228 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo108228.setAttribute('id', 'smo108228');
smo108243v0ar.push(smo108228);
const smo108229 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108229.setAttribute('id', 'smo108229');
smo108243v0ar.push(smo108229);
smo108243v0.addTickables(smo108243v0ar)
fmtsmo10824376.joinVoices([smo108243v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109530 = smo105509.getStemDirection();
smo105509.setStemDirection(dirsmo109530);
smo105510.setStemDirection(dirsmo109530);
smo105511.setStemDirection(dirsmo109530);
const smo109530 = new VF.Beam([smo105509,smo105510,smo105511]);
const dirsmo109531 = smo105512.getStemDirection();
smo105512.setStemDirection(dirsmo109531);
smo105513.setStemDirection(dirsmo109531);
smo105514.setStemDirection(dirsmo109531);
smo105515.setStemDirection(dirsmo109531);
const smo109531 = new VF.Beam([smo105512,smo105513,smo105514,smo105515]);
const dirsmo109534 = smo108226.getStemDirection();
smo108226.setStemDirection(dirsmo109534);
smo108227.setStemDirection(dirsmo109534);
const smo109534 = new VF.Beam([smo108226,smo108227]);
const dirsmo109535 = smo108228.getStemDirection();
smo108228.setStemDirection(dirsmo109535);
smo108229.setStemDirection(dirsmo109535);
const smo109535 = new VF.Beam([smo108228,smo108229]);
 
// formatting measures in staff group smo103216
fmtsmo10552976.format([smo105529v0,smo108243v0], 281);
const stavesmo105529 = new VF.Stave(1253, 1147, 295);
stavesmo105529.setAttribute('id', 'stavesmo105529');
stavesmo105529.setBegBarType(VF.Barline.type.NONE);
stavesmo105529.setContext(context);
stavesmo105529.draw();
smo105529v0.draw(context, stavesmo105529);
smo109530.setContext(context);
smo109530.draw();
smo109531.setContext(context);
smo109531.draw();
const stavesmo108243 = new VF.Stave(1253, 1271, 295);
stavesmo108243.setAttribute('id', 'stavesmo108243');
stavesmo108243.setBegBarType(VF.Barline.type.NONE);
stavesmo108243.setContext(context);
stavesmo108243.draw();
smo108243v0.draw(context, stavesmo108243);
smo109534.setContext(context);
smo109534.draw();
smo109535.setContext(context);
smo109535.draw();
const fmtsmo10554977 = new VF.Formatter();
//
// voices and notes for stave 0 77
const smo105549v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105549v0ar = [];
const smo105530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105530.setAttribute('id', 'smo105530');
smo105549v0ar.push(smo105530);
const smo105531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo105531.setAttribute('id', 'smo105531');
const smo1055310acc = new VF.Accidental('b');
smo105531.addModifier(smo1055310acc, 0);
const smo1055311acc = new VF.Accidental('b');
smo105531.addModifier(smo1055311acc, 1);
smo105549v0ar.push(smo105531);
const smo105532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105532.setAttribute('id', 'smo105532');
const smo1055320acc = new VF.Accidental('n');
smo105532.addModifier(smo1055320acc, 0);
const smo1055321acc = new VF.Accidental('n');
smo105532.addModifier(smo1055321acc, 1);
smo105549v0ar.push(smo105532);
const smo105533 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105533.setAttribute('id', 'smo105533');
smo105549v0ar.push(smo105533);
const smo105534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo105534.setAttribute('id', 'smo105534');
const smo1055340acc = new VF.Accidental('b');
smo105534.addModifier(smo1055340acc, 0);
const smo1055341acc = new VF.Accidental('b');
smo105534.addModifier(smo1055341acc, 1);
smo105549v0ar.push(smo105534);
const smo105535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105535.setAttribute('id', 'smo105535');
const smo1055350acc = new VF.Accidental('n');
smo105535.addModifier(smo1055350acc, 0);
const smo1055351acc = new VF.Accidental('n');
smo105535.addModifier(smo1055351acc, 1);
smo105549v0ar.push(smo105535);
smo105549v0.addTickables(smo105549v0ar)
fmtsmo10554977.joinVoices([smo105549v0]);
const fmtsmo10826177 = new VF.Formatter();
//
// voices and notes for stave 1 77
const smo108261v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108261v0ar = [];
const smo108244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo108244.setAttribute('id', 'smo108244');
smo108261v0ar.push(smo108244);
const smo108245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108245.setAttribute('id', 'smo108245');
smo108261v0ar.push(smo108245);
const smo108246 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108246.setAttribute('id', 'smo108246');
smo108261v0ar.push(smo108246);
const smo108247 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108247.setAttribute('id', 'smo108247');
smo108261v0ar.push(smo108247);
smo108261v0.addTickables(smo108261v0ar)
fmtsmo10826177.joinVoices([smo108261v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109538 = smo105530.getStemDirection();
smo105530.setStemDirection(dirsmo109538);
smo105531.setStemDirection(dirsmo109538);
smo105532.setStemDirection(dirsmo109538);
const smo109538 = new VF.Beam([smo105530,smo105531,smo105532]);
const dirsmo109539 = smo105533.getStemDirection();
smo105533.setStemDirection(dirsmo109539);
smo105534.setStemDirection(dirsmo109539);
smo105535.setStemDirection(dirsmo109539);
const smo109539 = new VF.Beam([smo105533,smo105534,smo105535]);
const dirsmo109542 = smo108244.getStemDirection();
smo108244.setStemDirection(dirsmo109542);
smo108245.setStemDirection(dirsmo109542);
const smo109542 = new VF.Beam([smo108244,smo108245]);
const dirsmo109543 = smo108246.getStemDirection();
smo108246.setStemDirection(dirsmo109543);
smo108247.setStemDirection(dirsmo109543);
const smo109543 = new VF.Beam([smo108246,smo108247]);
 
// formatting measures in staff group smo103216
fmtsmo10554977.format([smo105549v0,smo108261v0], 281);
const stavesmo105549 = new VF.Stave(1548, 1147, 295);
stavesmo105549.setAttribute('id', 'stavesmo105549');
stavesmo105549.setBegBarType(VF.Barline.type.NONE);
stavesmo105549.setContext(context);
stavesmo105549.draw();
smo105549v0.draw(context, stavesmo105549);
smo109538.setContext(context);
smo109538.draw();
smo109539.setContext(context);
smo109539.draw();
const stavesmo108261 = new VF.Stave(1548, 1271, 295);
stavesmo108261.setAttribute('id', 'stavesmo108261');
stavesmo108261.setBegBarType(VF.Barline.type.NONE);
stavesmo108261.setContext(context);
stavesmo108261.draw();
smo108261v0.draw(context, stavesmo108261);
smo109542.setContext(context);
smo109542.draw();
smo109543.setContext(context);
smo109543.draw();
const rightsmo103216stavesmo1055491 = new VF.StaveConnector(stavesmo105549, stavesmo108261).setType(0);
rightsmo103216stavesmo1055491.setContext(context).draw();
const fmtsmo10557178 = new VF.Formatter();
//
// voices and notes for stave 0 78
const smo105571v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105571v0ar = [];
const smo105550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105550.setAttribute('id', 'smo105550');
smo105571v0ar.push(smo105550);
const smo105551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105551.setAttribute('id', 'smo105551');
smo105571v0ar.push(smo105551);
const smo105552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo105552.setAttribute('id', 'smo105552');
smo105571v0ar.push(smo105552);
const smo105553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105553.setAttribute('id', 'smo105553');
smo105571v0ar.push(smo105553);
const smo105554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105554.setAttribute('id', 'smo105554');
smo105571v0ar.push(smo105554);
const smo105555 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105555.setAttribute('id', 'smo105555');
smo105571v0ar.push(smo105555);
const smo105556 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105556.setAttribute('id', 'smo105556');
smo105571v0ar.push(smo105556);
const smo105557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105557.setAttribute('id', 'smo105557');
smo105571v0ar.push(smo105557);
smo105571v0.addTickables(smo105571v0ar)
fmtsmo10557178.joinVoices([smo105571v0]);
const fmtsmo10827978 = new VF.Formatter();
//
// voices and notes for stave 1 78
const smo108279v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108279v0ar = [];
const smo108262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo108262.setAttribute('id', 'smo108262');
smo108279v0ar.push(smo108262);
const smo108263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108263.setAttribute('id', 'smo108263');
smo108279v0ar.push(smo108263);
const smo108264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108264.setAttribute('id', 'smo108264');
smo108279v0ar.push(smo108264);
const smo108265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108265.setAttribute('id', 'smo108265');
smo108279v0ar.push(smo108265);
smo108279v0.addTickables(smo108279v0ar)
fmtsmo10827978.joinVoices([smo108279v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109554 = smo105551.getStemDirection();
smo105551.setStemDirection(dirsmo109554);
smo105552.setStemDirection(dirsmo109554);
smo105553.setStemDirection(dirsmo109554);
const smo109554 = new VF.Beam([smo105551,smo105552,smo105553]);
const dirsmo109555 = smo105554.getStemDirection();
smo105554.setStemDirection(dirsmo109555);
smo105555.setStemDirection(dirsmo109555);
smo105556.setStemDirection(dirsmo109555);
smo105557.setStemDirection(dirsmo109555);
const smo109555 = new VF.Beam([smo105554,smo105555,smo105556,smo105557]);
const dirsmo109558 = smo108262.getStemDirection();
smo108262.setStemDirection(dirsmo109558);
smo108263.setStemDirection(dirsmo109558);
const smo109558 = new VF.Beam([smo108262,smo108263]);
const dirsmo109559 = smo108264.getStemDirection();
smo108264.setStemDirection(dirsmo109559);
smo108265.setStemDirection(dirsmo109559);
const smo109559 = new VF.Beam([smo108264,smo108265]);
 
// formatting measures in staff group smo103216
fmtsmo10557178.format([smo105571v0,smo108279v0], 237);
const stavesmo105571 = new VF.Stave(73, 1444, 295);
stavesmo105571.setAttribute('id', 'stavesmo105571');
stavesmo105571.setBegBarType(1);
stavesmo105571.addClef('treble');
stavesmo105571.setContext(context);
stavesmo105571.draw();
smo105571v0.draw(context, stavesmo105571);
smo109554.setContext(context);
smo109554.draw();
smo109555.setContext(context);
smo109555.draw();
const stavesmo108279 = new VF.Stave(73, 1574, 295);
stavesmo108279.setAttribute('id', 'stavesmo108279');
stavesmo108279.setBegBarType(1);
stavesmo108279.addClef('bass');
stavesmo108279.setContext(context);
stavesmo108279.draw();
smo108279v0.draw(context, stavesmo108279);
smo109558.setContext(context);
smo109558.draw();
smo109559.setContext(context);
smo109559.draw();
const leftsmo103216stavesmo1055711 = new VF.StaveConnector(stavesmo105571, stavesmo108279).setType(3);
leftsmo103216stavesmo1055711.setContext(context).draw();
const fmtsmo10559179 = new VF.Formatter();
//
// voices and notes for stave 0 79
const smo105591v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105591v0ar = [];
const smo105572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo105572.setAttribute('id', 'smo105572');
smo105591v0ar.push(smo105572);
const smo105573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
smo105573.setAttribute('id', 'smo105573');
const smo1055730acc = new VF.Accidental('b');
smo105573.addModifier(smo1055730acc, 0);
const smo1055731acc = new VF.Accidental('b');
smo105573.addModifier(smo1055731acc, 1);
smo105591v0ar.push(smo105573);
const smo105574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo105574.setAttribute('id', 'smo105574');
const smo1055740acc = new VF.Accidental('n');
smo105574.addModifier(smo1055740acc, 0);
const smo1055741acc = new VF.Accidental('n');
smo105574.addModifier(smo1055741acc, 1);
smo105591v0ar.push(smo105574);
const smo105575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo105575.setAttribute('id', 'smo105575');
smo105591v0ar.push(smo105575);
const smo105576 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n","db/5/n"]}'))
smo105576.setAttribute('id', 'smo105576');
const smo1055760acc = new VF.Accidental('b');
smo105576.addModifier(smo1055760acc, 0);
const smo1055761acc = new VF.Accidental('b');
smo105576.addModifier(smo1055761acc, 1);
smo105591v0ar.push(smo105576);
const smo105577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","dn/5/n"]}'))
smo105577.setAttribute('id', 'smo105577');
const smo1055770acc = new VF.Accidental('n');
smo105577.addModifier(smo1055770acc, 0);
const smo1055771acc = new VF.Accidental('n');
smo105577.addModifier(smo1055771acc, 1);
smo105591v0ar.push(smo105577);
smo105591v0.addTickables(smo105591v0ar)
fmtsmo10559179.joinVoices([smo105591v0]);
const fmtsmo10829779 = new VF.Formatter();
//
// voices and notes for stave 1 79
const smo108297v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108297v0ar = [];
const smo108280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108280.setAttribute('id', 'smo108280');
smo108297v0ar.push(smo108280);
const smo108281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo108281.setAttribute('id', 'smo108281');
smo108297v0ar.push(smo108281);
const smo108282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n"]}'))
smo108282.setAttribute('id', 'smo108282');
smo108297v0ar.push(smo108282);
const smo108283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo108283.setAttribute('id', 'smo108283');
smo108297v0ar.push(smo108283);
smo108297v0.addTickables(smo108297v0ar)
fmtsmo10829779.joinVoices([smo108297v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109562 = smo105572.getStemDirection();
smo105572.setStemDirection(dirsmo109562);
smo105573.setStemDirection(dirsmo109562);
smo105574.setStemDirection(dirsmo109562);
const smo109562 = new VF.Beam([smo105572,smo105573,smo105574]);
const dirsmo109563 = smo105575.getStemDirection();
smo105575.setStemDirection(dirsmo109563);
smo105576.setStemDirection(dirsmo109563);
smo105577.setStemDirection(dirsmo109563);
const smo109563 = new VF.Beam([smo105575,smo105576,smo105577]);
const dirsmo109566 = smo108280.getStemDirection();
smo108280.setStemDirection(dirsmo109566);
smo108281.setStemDirection(dirsmo109566);
const smo109566 = new VF.Beam([smo108280,smo108281]);
const dirsmo109567 = smo108282.getStemDirection();
smo108282.setStemDirection(dirsmo109567);
smo108283.setStemDirection(dirsmo109567);
const smo109567 = new VF.Beam([smo108282,smo108283]);
 
// formatting measures in staff group smo103216
fmtsmo10559179.format([smo105591v0,smo108297v0], 281);
const stavesmo105591 = new VF.Stave(368, 1444, 295);
stavesmo105591.setAttribute('id', 'stavesmo105591');
stavesmo105591.setBegBarType(VF.Barline.type.NONE);
stavesmo105591.setContext(context);
stavesmo105591.draw();
smo105591v0.draw(context, stavesmo105591);
smo109562.setContext(context);
smo109562.draw();
smo109563.setContext(context);
smo109563.draw();
const stavesmo108297 = new VF.Stave(368, 1574, 295);
stavesmo108297.setAttribute('id', 'stavesmo108297');
stavesmo108297.setBegBarType(VF.Barline.type.NONE);
stavesmo108297.setContext(context);
stavesmo108297.draw();
smo108297v0.draw(context, stavesmo108297);
smo109566.setContext(context);
smo109566.draw();
smo109567.setContext(context);
smo109567.draw();
const fmtsmo10561380 = new VF.Formatter();
//
// voices and notes for stave 0 80
const smo105613v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105613v0ar = [];
const smo105592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105592.setAttribute('id', 'smo105592');
smo105613v0ar.push(smo105592);
const smo105593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo105593.setAttribute('id', 'smo105593');
smo105613v0ar.push(smo105593);
const smo105594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bn/4/n","an/5/n"]}'))
smo105594.setAttribute('id', 'smo105594');
smo105613v0ar.push(smo105594);
const smo105595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo105595.setAttribute('id', 'smo105595');
smo105613v0ar.push(smo105595);
const smo105596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105596.setAttribute('id', 'smo105596');
smo105613v0ar.push(smo105596);
const smo105597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo105597.setAttribute('id', 'smo105597');
smo105613v0ar.push(smo105597);
const smo105598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105598.setAttribute('id', 'smo105598');
smo105613v0ar.push(smo105598);
const smo105599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo105599.setAttribute('id', 'smo105599');
smo105613v0ar.push(smo105599);
smo105613v0.addTickables(smo105613v0ar)
fmtsmo10561380.joinVoices([smo105613v0]);
const fmtsmo10831580 = new VF.Formatter();
//
// voices and notes for stave 1 80
const smo108315v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108315v0ar = [];
const smo108298 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108298.setAttribute('id', 'smo108298');
smo108315v0ar.push(smo108298);
const smo108299 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo108299.setAttribute('id', 'smo108299');
smo108315v0ar.push(smo108299);
const smo108300 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/3/n"]}'))
smo108300.setAttribute('id', 'smo108300');
smo108315v0ar.push(smo108300);
const smo108301 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","gn/3/n","bn/3/n"]}'))
smo108301.setAttribute('id', 'smo108301');
smo108315v0ar.push(smo108301);
smo108315v0.addTickables(smo108315v0ar)
fmtsmo10831580.joinVoices([smo108315v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109570 = smo105593.getStemDirection();
smo105593.setStemDirection(dirsmo109570);
smo105594.setStemDirection(dirsmo109570);
smo105595.setStemDirection(dirsmo109570);
const smo109570 = new VF.Beam([smo105593,smo105594,smo105595]);
const dirsmo109571 = smo105596.getStemDirection();
smo105596.setStemDirection(dirsmo109571);
smo105597.setStemDirection(dirsmo109571);
smo105598.setStemDirection(dirsmo109571);
smo105599.setStemDirection(dirsmo109571);
const smo109571 = new VF.Beam([smo105596,smo105597,smo105598,smo105599]);
const dirsmo109574 = smo108298.getStemDirection();
smo108298.setStemDirection(dirsmo109574);
smo108299.setStemDirection(dirsmo109574);
const smo109574 = new VF.Beam([smo108298,smo108299]);
const dirsmo109575 = smo108300.getStemDirection();
smo108300.setStemDirection(dirsmo109575);
smo108301.setStemDirection(dirsmo109575);
const smo109575 = new VF.Beam([smo108300,smo108301]);
 
// formatting measures in staff group smo103216
fmtsmo10561380.format([smo105613v0,smo108315v0], 281);
const stavesmo105613 = new VF.Stave(663, 1444, 295);
stavesmo105613.setAttribute('id', 'stavesmo105613');
stavesmo105613.setBegBarType(VF.Barline.type.NONE);
stavesmo105613.setContext(context);
stavesmo105613.draw();
smo105613v0.draw(context, stavesmo105613);
smo109570.setContext(context);
smo109570.draw();
smo109571.setContext(context);
smo109571.draw();
const stavesmo108315 = new VF.Stave(663, 1574, 295);
stavesmo108315.setAttribute('id', 'stavesmo108315');
stavesmo108315.setBegBarType(VF.Barline.type.NONE);
stavesmo108315.setContext(context);
stavesmo108315.draw();
smo108315v0.draw(context, stavesmo108315);
smo109574.setContext(context);
smo109574.draw();
smo109575.setContext(context);
smo109575.draw();
const fmtsmo10563181 = new VF.Formatter();
//
// voices and notes for stave 0 81
const smo105631v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105631v0ar = [];
const smo105614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105614.setAttribute('id', 'smo105614');
smo105631v0ar.push(smo105614);
const smo105615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105615.setAttribute('id', 'smo105615');
smo105631v0ar.push(smo105615);
const smo105616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","cn/6/n"]}'))
smo105616.setAttribute('id', 'smo105616');
smo105631v0ar.push(smo105616);
const smo105617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","an/5/n"]}'))
smo105617.setAttribute('id', 'smo105617');
smo105631v0ar.push(smo105617);
smo105631v0.addTickables(smo105631v0ar)
fmtsmo10563181.joinVoices([smo105631v0]);
const fmtsmo10833281 = new VF.Formatter();
//
// voices and notes for stave 1 81
const smo108332v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108332v0ar = [];
const smo108316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo108316.setAttribute('id', 'smo108316');
const smo1083160acc = new VF.Accidental('b');
smo108316.addModifier(smo1083160acc, 0);
const smo1083161acc = new VF.Accidental('b');
smo108316.addModifier(smo1083161acc, 1);
smo108332v0ar.push(smo108316);
const smo108317 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo108317.setAttribute('id', 'smo108317');
smo108332v0ar.push(smo108317);
const smo108318 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/3/n","gb/3/n","cn/4/n"]}'))
smo108318.setAttribute('id', 'smo108318');
smo108332v0ar.push(smo108318);
smo108332v0.addTickables(smo108332v0ar)
fmtsmo10833281.joinVoices([smo108332v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109578 = smo105614.getStemDirection();
smo105614.setStemDirection(dirsmo109578);
smo105615.setStemDirection(dirsmo109578);
const smo109578 = new VF.Beam([smo105614,smo105615]);
 
// formatting measures in staff group smo103216
fmtsmo10563181.format([smo105631v0,smo108332v0], 281);
const stavesmo105631 = new VF.Stave(958, 1444, 295);
stavesmo105631.setAttribute('id', 'stavesmo105631');
stavesmo105631.setBegBarType(VF.Barline.type.NONE);
stavesmo105631.setContext(context);
stavesmo105631.draw();
smo105631v0.draw(context, stavesmo105631);
smo109578.setContext(context);
smo109578.draw();
const stavesmo108332 = new VF.Stave(958, 1574, 295);
stavesmo108332.setAttribute('id', 'stavesmo108332');
stavesmo108332.setBegBarType(VF.Barline.type.NONE);
stavesmo108332.setContext(context);
stavesmo108332.draw();
smo108332v0.draw(context, stavesmo108332);
const fmtsmo10565082 = new VF.Formatter();
//
// voices and notes for stave 0 82
const smo105650v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105650v0ar = [];
const smo105632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","gn/5/n"]}'))
smo105632.setAttribute('id', 'smo105632');
smo105650v0ar.push(smo105632);
const smo105633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105633.setAttribute('id', 'smo105633');
smo105650v0ar.push(smo105633);
const smo105634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105634.setAttribute('id', 'smo105634');
smo105650v0ar.push(smo105634);
const smo105635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105635.setAttribute('id', 'smo105635');
smo105650v0ar.push(smo105635);
const smo105636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105636.setAttribute('id', 'smo105636');
smo105650v0ar.push(smo105636);
smo105650v0.addTickables(smo105650v0ar)
fmtsmo10565082.joinVoices([smo105650v0]);
const fmtsmo10834982 = new VF.Formatter();
//
// voices and notes for stave 1 82
const smo108349v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108349v0ar = [];
const smo108333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108333.setAttribute('id', 'smo108333');
smo108349v0ar.push(smo108333);
const smo108334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108334.setAttribute('id', 'smo108334');
smo108349v0ar.push(smo108334);
const smo108335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108335.setAttribute('id', 'smo108335');
smo108349v0ar.push(smo108335);
smo108349v0.addTickables(smo108349v0ar)
fmtsmo10834982.joinVoices([smo108349v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109583 = smo105632.getStemDirection();
smo105632.setStemDirection(dirsmo109583);
smo105633.setStemDirection(dirsmo109583);
smo105634.setStemDirection(dirsmo109583);
const smo109583 = new VF.Beam([smo105632,smo105633,smo105634]);
const dirsmo109584 = smo105635.getStemDirection();
smo105635.setStemDirection(dirsmo109584);
smo105636.setStemDirection(dirsmo109584);
const smo109584 = new VF.Beam([smo105635,smo105636]);
 
// formatting measures in staff group smo103216
fmtsmo10565082.format([smo105650v0,smo108349v0], 281);
const stavesmo105650 = new VF.Stave(1253, 1444, 295);
stavesmo105650.setAttribute('id', 'stavesmo105650');
stavesmo105650.setBegBarType(VF.Barline.type.NONE);
stavesmo105650.setContext(context);
stavesmo105650.draw();
smo105650v0.draw(context, stavesmo105650);
smo109583.setContext(context);
smo109583.draw();
smo109584.setContext(context);
smo109584.draw();
const stavesmo108349 = new VF.Stave(1253, 1574, 295);
stavesmo108349.setAttribute('id', 'stavesmo108349');
stavesmo108349.setBegBarType(VF.Barline.type.NONE);
stavesmo108349.setContext(context);
stavesmo108349.draw();
smo108349v0.draw(context, stavesmo108349);
const fmtsmo10567083 = new VF.Formatter();
//
// voices and notes for stave 0 83
const smo105670v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105670v0ar = [];
const smo105651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105651.setAttribute('id', 'smo105651');
smo105670v0ar.push(smo105651);
const smo105652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo105652.setAttribute('id', 'smo105652');
const smo1056520acc = new VF.Accidental('b');
smo105652.addModifier(smo1056520acc, 0);
smo105670v0ar.push(smo105652);
const smo105653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105653.setAttribute('id', 'smo105653');
const smo1056530acc = new VF.Accidental('n');
smo105653.addModifier(smo1056530acc, 0);
smo105670v0ar.push(smo105653);
const smo105654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105654.setAttribute('id', 'smo105654');
smo105670v0ar.push(smo105654);
const smo105655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n","en/4/n"]}'))
smo105655.setAttribute('id', 'smo105655');
const smo1056550acc = new VF.Accidental('b');
smo105655.addModifier(smo1056550acc, 0);
smo105670v0ar.push(smo105655);
const smo105656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n","fn/4/n"]}'))
smo105656.setAttribute('id', 'smo105656');
const smo1056560acc = new VF.Accidental('n');
smo105656.addModifier(smo1056560acc, 0);
smo105670v0ar.push(smo105656);
smo105670v0.addTickables(smo105670v0ar)
fmtsmo10567083.joinVoices([smo105670v0]);
const fmtsmo10836783 = new VF.Formatter();
//
// voices and notes for stave 1 83
const smo108367v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108367v0ar = [];
const smo108350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo108350.setAttribute('id', 'smo108350');
smo108367v0ar.push(smo108350);
const smo108351 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108351.setAttribute('id', 'smo108351');
smo108367v0ar.push(smo108351);
const smo108352 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo108352.setAttribute('id', 'smo108352');
smo108367v0ar.push(smo108352);
const smo108353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108353.setAttribute('id', 'smo108353');
smo108367v0ar.push(smo108353);
smo108367v0.addTickables(smo108367v0ar)
fmtsmo10836783.joinVoices([smo108367v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109589 = smo105651.getStemDirection();
smo105651.setStemDirection(dirsmo109589);
smo105652.setStemDirection(dirsmo109589);
smo105653.setStemDirection(dirsmo109589);
const smo109589 = new VF.Beam([smo105651,smo105652,smo105653]);
const dirsmo109590 = smo105654.getStemDirection();
smo105654.setStemDirection(dirsmo109590);
smo105655.setStemDirection(dirsmo109590);
smo105656.setStemDirection(dirsmo109590);
const smo109590 = new VF.Beam([smo105654,smo105655,smo105656]);
const dirsmo109593 = smo108350.getStemDirection();
smo108350.setStemDirection(dirsmo109593);
smo108351.setStemDirection(dirsmo109593);
const smo109593 = new VF.Beam([smo108350,smo108351]);
const dirsmo109594 = smo108352.getStemDirection();
smo108352.setStemDirection(dirsmo109594);
smo108353.setStemDirection(dirsmo109594);
const smo109594 = new VF.Beam([smo108352,smo108353]);
 
// formatting measures in staff group smo103216
fmtsmo10567083.format([smo105670v0,smo108367v0], 281);
const stavesmo105670 = new VF.Stave(1548, 1444, 295);
stavesmo105670.setAttribute('id', 'stavesmo105670');
stavesmo105670.setBegBarType(VF.Barline.type.NONE);
stavesmo105670.setContext(context);
stavesmo105670.draw();
smo105670v0.draw(context, stavesmo105670);
smo109589.setContext(context);
smo109589.draw();
smo109590.setContext(context);
smo109590.draw();
const stavesmo108367 = new VF.Stave(1548, 1574, 295);
stavesmo108367.setAttribute('id', 'stavesmo108367');
stavesmo108367.setBegBarType(VF.Barline.type.NONE);
stavesmo108367.setContext(context);
stavesmo108367.draw();
smo108367v0.draw(context, stavesmo108367);
smo109593.setContext(context);
smo109593.draw();
smo109594.setContext(context);
smo109594.draw();
const rightsmo103216stavesmo1056701 = new VF.StaveConnector(stavesmo105670, stavesmo108367).setType(0);
rightsmo103216stavesmo1056701.setContext(context).draw();
const fmtsmo10569284 = new VF.Formatter();
//
// voices and notes for stave 0 84
const smo105692v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105692v0ar = [];
const smo105671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105671.setAttribute('id', 'smo105671');
smo105692v0ar.push(smo105671);
const smo105672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105672.setAttribute('id', 'smo105672');
smo105692v0ar.push(smo105672);
const smo105673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","dn/5/n"]}'))
smo105673.setAttribute('id', 'smo105673');
smo105692v0ar.push(smo105673);
const smo105674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105674.setAttribute('id', 'smo105674');
smo105692v0ar.push(smo105674);
const smo105675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105675.setAttribute('id', 'smo105675');
smo105692v0ar.push(smo105675);
const smo105676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105676.setAttribute('id', 'smo105676');
smo105692v0ar.push(smo105676);
const smo105677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105677.setAttribute('id', 'smo105677');
smo105692v0ar.push(smo105677);
const smo105678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105678.setAttribute('id', 'smo105678');
smo105692v0ar.push(smo105678);
smo105692v0.addTickables(smo105692v0ar)
fmtsmo10569284.joinVoices([smo105692v0]);
const fmtsmo10838584 = new VF.Formatter();
//
// voices and notes for stave 1 84
const smo108385v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108385v0ar = [];
const smo108368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n"]}'))
smo108368.setAttribute('id', 'smo108368');
smo108385v0ar.push(smo108368);
const smo108369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108369.setAttribute('id', 'smo108369');
smo108385v0ar.push(smo108369);
const smo108370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n"]}'))
smo108370.setAttribute('id', 'smo108370');
smo108385v0ar.push(smo108370);
const smo108371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/3/n","an/3/n"]}'))
smo108371.setAttribute('id', 'smo108371');
smo108385v0ar.push(smo108371);
smo108385v0.addTickables(smo108385v0ar)
fmtsmo10838584.joinVoices([smo108385v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109605 = smo105672.getStemDirection();
smo105672.setStemDirection(dirsmo109605);
smo105673.setStemDirection(dirsmo109605);
smo105674.setStemDirection(dirsmo109605);
const smo109605 = new VF.Beam([smo105672,smo105673,smo105674]);
const dirsmo109606 = smo105675.getStemDirection();
smo105675.setStemDirection(dirsmo109606);
smo105676.setStemDirection(dirsmo109606);
smo105677.setStemDirection(dirsmo109606);
smo105678.setStemDirection(dirsmo109606);
const smo109606 = new VF.Beam([smo105675,smo105676,smo105677,smo105678]);
const dirsmo109609 = smo108368.getStemDirection();
smo108368.setStemDirection(dirsmo109609);
smo108369.setStemDirection(dirsmo109609);
const smo109609 = new VF.Beam([smo108368,smo108369]);
const dirsmo109610 = smo108370.getStemDirection();
smo108370.setStemDirection(dirsmo109610);
smo108371.setStemDirection(dirsmo109610);
const smo109610 = new VF.Beam([smo108370,smo108371]);
 
// formatting measures in staff group smo103216
fmtsmo10569284.format([smo105692v0,smo108385v0], 237);
const stavesmo105692 = new VF.Stave(73, 1777, 295);
stavesmo105692.setAttribute('id', 'stavesmo105692');
stavesmo105692.setBegBarType(1);
stavesmo105692.addClef('treble');
stavesmo105692.setContext(context);
stavesmo105692.draw();
smo105692v0.draw(context, stavesmo105692);
smo109605.setContext(context);
smo109605.draw();
smo109606.setContext(context);
smo109606.draw();
const stavesmo108385 = new VF.Stave(73, 1921, 295);
stavesmo108385.setAttribute('id', 'stavesmo108385');
stavesmo108385.setBegBarType(1);
stavesmo108385.addClef('bass');
stavesmo108385.setContext(context);
stavesmo108385.draw();
smo108385v0.draw(context, stavesmo108385);
smo109609.setContext(context);
smo109609.draw();
smo109610.setContext(context);
smo109610.draw();
const leftsmo103216stavesmo1056921 = new VF.StaveConnector(stavesmo105692, stavesmo108385).setType(3);
leftsmo103216stavesmo1056921.setContext(context).draw();
const fmtsmo10571285 = new VF.Formatter();
//
// voices and notes for stave 0 85
const smo105712v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105712v0ar = [];
const smo105693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105693.setAttribute('id', 'smo105693');
smo105712v0ar.push(smo105693);
const smo105694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo105694.setAttribute('id', 'smo105694');
const smo1056940acc = new VF.Accidental('b');
smo105694.addModifier(smo1056940acc, 0);
const smo1056941acc = new VF.Accidental('b');
smo105694.addModifier(smo1056941acc, 1);
smo105712v0ar.push(smo105694);
const smo105695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105695.setAttribute('id', 'smo105695');
const smo1056950acc = new VF.Accidental('n');
smo105695.addModifier(smo1056950acc, 0);
const smo1056951acc = new VF.Accidental('n');
smo105695.addModifier(smo1056951acc, 1);
smo105712v0ar.push(smo105695);
const smo105696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105696.setAttribute('id', 'smo105696');
smo105712v0ar.push(smo105696);
const smo105697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n","gb/4/n"]}'))
smo105697.setAttribute('id', 'smo105697');
const smo1056970acc = new VF.Accidental('b');
smo105697.addModifier(smo1056970acc, 0);
const smo1056971acc = new VF.Accidental('b');
smo105697.addModifier(smo1056971acc, 1);
smo105712v0ar.push(smo105697);
const smo105698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105698.setAttribute('id', 'smo105698');
const smo1056980acc = new VF.Accidental('n');
smo105698.addModifier(smo1056980acc, 0);
const smo1056981acc = new VF.Accidental('n');
smo105698.addModifier(smo1056981acc, 1);
smo105712v0ar.push(smo105698);
smo105712v0.addTickables(smo105712v0ar)
fmtsmo10571285.joinVoices([smo105712v0]);
const fmtsmo10840385 = new VF.Formatter();
//
// voices and notes for stave 1 85
const smo108403v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108403v0ar = [];
const smo108386 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo108386.setAttribute('id', 'smo108386');
smo108403v0ar.push(smo108386);
const smo108387 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108387.setAttribute('id', 'smo108387');
smo108403v0ar.push(smo108387);
const smo108388 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108388.setAttribute('id', 'smo108388');
smo108403v0ar.push(smo108388);
const smo108389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108389.setAttribute('id', 'smo108389');
smo108403v0ar.push(smo108389);
smo108403v0.addTickables(smo108403v0ar)
fmtsmo10840385.joinVoices([smo108403v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109613 = smo105693.getStemDirection();
smo105693.setStemDirection(dirsmo109613);
smo105694.setStemDirection(dirsmo109613);
smo105695.setStemDirection(dirsmo109613);
const smo109613 = new VF.Beam([smo105693,smo105694,smo105695]);
const dirsmo109614 = smo105696.getStemDirection();
smo105696.setStemDirection(dirsmo109614);
smo105697.setStemDirection(dirsmo109614);
smo105698.setStemDirection(dirsmo109614);
const smo109614 = new VF.Beam([smo105696,smo105697,smo105698]);
const dirsmo109617 = smo108386.getStemDirection();
smo108386.setStemDirection(dirsmo109617);
smo108387.setStemDirection(dirsmo109617);
const smo109617 = new VF.Beam([smo108386,smo108387]);
const dirsmo109618 = smo108388.getStemDirection();
smo108388.setStemDirection(dirsmo109618);
smo108389.setStemDirection(dirsmo109618);
const smo109618 = new VF.Beam([smo108388,smo108389]);
 
// formatting measures in staff group smo103216
fmtsmo10571285.format([smo105712v0,smo108403v0], 281);
const stavesmo105712 = new VF.Stave(368, 1777, 295);
stavesmo105712.setAttribute('id', 'stavesmo105712');
stavesmo105712.setBegBarType(VF.Barline.type.NONE);
stavesmo105712.setContext(context);
stavesmo105712.draw();
smo105712v0.draw(context, stavesmo105712);
smo109613.setContext(context);
smo109613.draw();
smo109614.setContext(context);
smo109614.draw();
const stavesmo108403 = new VF.Stave(368, 1921, 295);
stavesmo108403.setAttribute('id', 'stavesmo108403');
stavesmo108403.setBegBarType(VF.Barline.type.NONE);
stavesmo108403.setContext(context);
stavesmo108403.draw();
smo108403v0.draw(context, stavesmo108403);
smo109617.setContext(context);
smo109617.draw();
smo109618.setContext(context);
smo109618.draw();
const fmtsmo10573486 = new VF.Formatter();
//
// voices and notes for stave 0 86
const smo105734v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105734v0ar = [];
const smo105713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105713.setAttribute('id', 'smo105713');
smo105734v0ar.push(smo105713);
const smo105714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105714.setAttribute('id', 'smo105714');
smo105734v0ar.push(smo105714);
const smo105715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo105715.setAttribute('id', 'smo105715');
smo105734v0ar.push(smo105715);
const smo105716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105716.setAttribute('id', 'smo105716');
smo105734v0ar.push(smo105716);
const smo105717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105717.setAttribute('id', 'smo105717');
smo105734v0ar.push(smo105717);
const smo105718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105718.setAttribute('id', 'smo105718');
smo105734v0ar.push(smo105718);
const smo105719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo105719.setAttribute('id', 'smo105719');
smo105734v0ar.push(smo105719);
const smo105720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo105720.setAttribute('id', 'smo105720');
smo105734v0ar.push(smo105720);
smo105734v0.addTickables(smo105734v0ar)
fmtsmo10573486.joinVoices([smo105734v0]);
const fmtsmo10842186 = new VF.Formatter();
//
// voices and notes for stave 1 86
const smo108421v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108421v0ar = [];
const smo108404 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n"]}'))
smo108404.setAttribute('id', 'smo108404');
smo108421v0ar.push(smo108404);
const smo108405 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108405.setAttribute('id', 'smo108405');
smo108421v0ar.push(smo108405);
const smo108406 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n"]}'))
smo108406.setAttribute('id', 'smo108406');
smo108421v0ar.push(smo108406);
const smo108407 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/3/n","gn/3/n","cn/4/n"]}'))
smo108407.setAttribute('id', 'smo108407');
smo108421v0ar.push(smo108407);
smo108421v0.addTickables(smo108421v0ar)
fmtsmo10842186.joinVoices([smo108421v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109621 = smo105714.getStemDirection();
smo105714.setStemDirection(dirsmo109621);
smo105715.setStemDirection(dirsmo109621);
smo105716.setStemDirection(dirsmo109621);
const smo109621 = new VF.Beam([smo105714,smo105715,smo105716]);
const dirsmo109622 = smo105717.getStemDirection();
smo105717.setStemDirection(dirsmo109622);
smo105718.setStemDirection(dirsmo109622);
smo105719.setStemDirection(dirsmo109622);
smo105720.setStemDirection(dirsmo109622);
const smo109622 = new VF.Beam([smo105717,smo105718,smo105719,smo105720]);
const dirsmo109625 = smo108404.getStemDirection();
smo108404.setStemDirection(dirsmo109625);
smo108405.setStemDirection(dirsmo109625);
const smo109625 = new VF.Beam([smo108404,smo108405]);
const dirsmo109626 = smo108406.getStemDirection();
smo108406.setStemDirection(dirsmo109626);
smo108407.setStemDirection(dirsmo109626);
const smo109626 = new VF.Beam([smo108406,smo108407]);
 
// formatting measures in staff group smo103216
fmtsmo10573486.format([smo105734v0,smo108421v0], 281);
const stavesmo105734 = new VF.Stave(663, 1777, 295);
stavesmo105734.setAttribute('id', 'stavesmo105734');
stavesmo105734.setBegBarType(VF.Barline.type.NONE);
stavesmo105734.setContext(context);
stavesmo105734.draw();
smo105734v0.draw(context, stavesmo105734);
smo109621.setContext(context);
smo109621.draw();
smo109622.setContext(context);
smo109622.draw();
const stavesmo108421 = new VF.Stave(663, 1921, 295);
stavesmo108421.setAttribute('id', 'stavesmo108421');
stavesmo108421.setBegBarType(VF.Barline.type.NONE);
stavesmo108421.setContext(context);
stavesmo108421.draw();
smo108421v0.draw(context, stavesmo108421);
smo109625.setContext(context);
smo109625.draw();
smo109626.setContext(context);
smo109626.draw();
const fmtsmo10575587 = new VF.Formatter();
//
// voices and notes for stave 0 87
const smo105755v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105755v0ar = [];
const smo105735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105735.setAttribute('id', 'smo105735');
smo105755v0ar.push(smo105735);
const smo105736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo105736.setAttribute('id', 'smo105736');
const smo1057360acc = new VF.Accidental('b');
smo105736.addModifier(smo1057360acc, 0);
smo105755v0ar.push(smo105736);
const smo105737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo105737.setAttribute('id', 'smo105737');
const smo1057370acc = new VF.Accidental('n');
smo105737.addModifier(smo1057370acc, 0);
smo105755v0ar.push(smo105737);
const smo105738 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
smo105738.setAttribute('id', 'smo105738');
smo105755v0ar.push(smo105738);
const smo105739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","gn/5/n"]}'))
smo105739.setAttribute('id', 'smo105739');
smo105755v0ar.push(smo105739);
const smo105740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","fn/5/n"]}'))
smo105740.setAttribute('id', 'smo105740');
smo105755v0ar.push(smo105740);
const smo105741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n","cn/5/n"]}'))
smo105741.setAttribute('id', 'smo105741');
smo105755v0ar.push(smo105741);
smo105755v0.addTickables(smo105755v0ar)
fmtsmo10575587.joinVoices([smo105755v0]);
const fmtsmo10843987 = new VF.Formatter();
//
// voices and notes for stave 1 87
const smo108439v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108439v0ar = [];
const smo108422 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo108422.setAttribute('id', 'smo108422');
smo108439v0ar.push(smo108422);
const smo108423 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo108423.setAttribute('id', 'smo108423');
smo108439v0ar.push(smo108423);
const smo108424 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/2/n","en/3/n"]}'))
smo108424.setAttribute('id', 'smo108424');
smo108439v0ar.push(smo108424);
const smo108425 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/2/n","fn/3/n"]}'))
smo108425.setAttribute('id', 'smo108425');
smo108439v0ar.push(smo108425);
smo108439v0.addTickables(smo108439v0ar)
fmtsmo10843987.joinVoices([smo108439v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109629 = smo105735.getStemDirection();
smo105735.setStemDirection(dirsmo109629);
smo105736.setStemDirection(dirsmo109629);
smo105737.setStemDirection(dirsmo109629);
smo105738.setStemDirection(dirsmo109629);
const smo109629 = new VF.Beam([smo105735,smo105736,smo105737,smo105738]);
const dirsmo109630 = smo105739.getStemDirection();
smo105739.setStemDirection(dirsmo109630);
smo105740.setStemDirection(dirsmo109630);
smo105741.setStemDirection(dirsmo109630);
const smo109630 = new VF.Beam([smo105739,smo105740,smo105741]);
const dirsmo109633 = smo108422.getStemDirection();
smo108422.setStemDirection(dirsmo109633);
smo108423.setStemDirection(dirsmo109633);
const smo109633 = new VF.Beam([smo108422,smo108423]);
const dirsmo109634 = smo108424.getStemDirection();
smo108424.setStemDirection(dirsmo109634);
smo108425.setStemDirection(dirsmo109634);
const smo109634 = new VF.Beam([smo108424,smo108425]);
 
// formatting measures in staff group smo103216
fmtsmo10575587.format([smo105755v0,smo108439v0], 281);
const stavesmo105755 = new VF.Stave(958, 1777, 295);
stavesmo105755.setAttribute('id', 'stavesmo105755');
stavesmo105755.setBegBarType(VF.Barline.type.NONE);
stavesmo105755.setContext(context);
stavesmo105755.draw();
smo105755v0.draw(context, stavesmo105755);
smo109629.setContext(context);
smo109629.draw();
smo109630.setContext(context);
smo109630.draw();
const stavesmo108439 = new VF.Stave(958, 1921, 295);
stavesmo108439.setAttribute('id', 'stavesmo108439');
stavesmo108439.setBegBarType(VF.Barline.type.NONE);
stavesmo108439.setContext(context);
stavesmo108439.draw();
smo108439v0.draw(context, stavesmo108439);
smo109633.setContext(context);
smo109633.draw();
smo109634.setContext(context);
smo109634.draw();
const fmtsmo10577788 = new VF.Formatter();
//
// voices and notes for stave 0 88
const smo105777v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105777v0ar = [];
const smo105756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n","en/5/n"]}'))
smo105756.setAttribute('id', 'smo105756');
smo105777v0ar.push(smo105756);
const smo105757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo105757.setAttribute('id', 'smo105757');
const smo1057570acc = new VF.Accidental('b');
smo105757.addModifier(smo1057570acc, 0);
smo105777v0ar.push(smo105757);
const smo105758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105758.setAttribute('id', 'smo105758');
const smo1057580acc = new VF.Accidental('n');
smo105758.addModifier(smo1057580acc, 0);
smo105777v0ar.push(smo105758);
const smo105759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo105759.setAttribute('id', 'smo105759');
smo105777v0ar.push(smo105759);
const smo105760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo105760.setAttribute('id', 'smo105760');
smo105777v0ar.push(smo105760);
const smo105761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo105761.setAttribute('id', 'smo105761');
smo105777v0ar.push(smo105761);
const smo105762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo105762.setAttribute('id', 'smo105762');
smo105777v0ar.push(smo105762);
const smo105763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo105763.setAttribute('id', 'smo105763');
smo105777v0ar.push(smo105763);
smo105777v0.addTickables(smo105777v0ar)
fmtsmo10577788.joinVoices([smo105777v0]);
const fmtsmo10845788 = new VF.Formatter();
//
// voices and notes for stave 1 88
const smo108457v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108457v0ar = [];
const smo108440 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo108440.setAttribute('id', 'smo108440');
smo108457v0ar.push(smo108440);
const smo108441 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo108441.setAttribute('id', 'smo108441');
smo108457v0ar.push(smo108441);
const smo108442 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/3/n","cn/4/n","eb/4/n"]}'))
smo108442.setAttribute('id', 'smo108442');
const smo1084420acc = new VF.Accidental('b');
smo108442.addModifier(smo1084420acc, 0);
const smo1084422acc = new VF.Accidental('b');
smo108442.addModifier(smo1084422acc, 2);
smo108457v0ar.push(smo108442);
const smo108443 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n","cn/4/n","en/4/n"]}'))
smo108443.setAttribute('id', 'smo108443');
const smo1084430acc = new VF.Accidental('n');
smo108443.addModifier(smo1084430acc, 0);
const smo1084432acc = new VF.Accidental('n');
smo108443.addModifier(smo1084432acc, 2);
smo108457v0ar.push(smo108443);
smo108457v0.addTickables(smo108457v0ar)
fmtsmo10845788.joinVoices([smo108457v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109637 = smo105756.getStemDirection();
smo105756.setStemDirection(dirsmo109637);
smo105757.setStemDirection(dirsmo109637);
smo105758.setStemDirection(dirsmo109637);
smo105759.setStemDirection(dirsmo109637);
const smo109637 = new VF.Beam([smo105756,smo105757,smo105758,smo105759]);
const dirsmo109638 = smo105760.getStemDirection();
smo105760.setStemDirection(dirsmo109638);
smo105761.setStemDirection(dirsmo109638);
smo105762.setStemDirection(dirsmo109638);
smo105763.setStemDirection(dirsmo109638);
const smo109638 = new VF.Beam([smo105760,smo105761,smo105762,smo105763]);
const dirsmo109641 = smo108440.getStemDirection();
smo108440.setStemDirection(dirsmo109641);
smo108441.setStemDirection(dirsmo109641);
const smo109641 = new VF.Beam([smo108440,smo108441]);
const dirsmo109642 = smo108442.getStemDirection();
smo108442.setStemDirection(dirsmo109642);
smo108443.setStemDirection(dirsmo109642);
const smo109642 = new VF.Beam([smo108442,smo108443]);
 
// formatting measures in staff group smo103216
fmtsmo10577788.format([smo105777v0,smo108457v0], 281);
const stavesmo105777 = new VF.Stave(1253, 1777, 295);
stavesmo105777.setAttribute('id', 'stavesmo105777');
stavesmo105777.setBegBarType(VF.Barline.type.NONE);
stavesmo105777.setContext(context);
stavesmo105777.draw();
smo105777v0.draw(context, stavesmo105777);
smo109637.setContext(context);
smo109637.draw();
smo109638.setContext(context);
smo109638.draw();
const stavesmo108457 = new VF.Stave(1253, 1921, 295);
stavesmo108457.setAttribute('id', 'stavesmo108457');
stavesmo108457.setBegBarType(VF.Barline.type.NONE);
stavesmo108457.setContext(context);
stavesmo108457.draw();
smo108457v0.draw(context, stavesmo108457);
smo109641.setContext(context);
smo109641.draw();
smo109642.setContext(context);
smo109642.draw();
const fmtsmo10579689 = new VF.Formatter();
//
// voices and notes for stave 0 89
const smo105796v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105796v0ar = [];
const smo105778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo105778.setAttribute('id', 'smo105778');
const smo1057780acc = new VF.Accidental('b');
smo105778.addModifier(smo1057780acc, 0);
smo105796v0ar.push(smo105778);
const smo105779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n","cn/5/n"]}'))
smo105779.setAttribute('id', 'smo105779');
smo105796v0ar.push(smo105779);
const smo105780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","en/5/n"]}'))
smo105780.setAttribute('id', 'smo105780');
smo105796v0ar.push(smo105780);
const smo105781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n","bn/4/n","dn/5/n"]}'))
smo105781.setAttribute('id', 'smo105781');
smo105796v0ar.push(smo105781);
const smo105782 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo105782.setAttribute('id', 'smo105782');
const smo1057821acc = new VF.Accidental('n');
smo105782.addModifier(smo1057821acc, 1);
smo105796v0ar.push(smo105782);
smo105796v0.addTickables(smo105796v0ar)
fmtsmo10579689.joinVoices([smo105796v0]);
const fmtsmo10847589 = new VF.Formatter();
//
// voices and notes for stave 1 89
const smo108475v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108475v0ar = [];
const smo108458 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/2/n","an/3/n"]}'))
smo108458.setAttribute('id', 'smo108458');
smo108475v0ar.push(smo108458);
const smo108459 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo108459.setAttribute('id', 'smo108459');
smo108475v0ar.push(smo108459);
const smo108460 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo108460.setAttribute('id', 'smo108460');
smo108475v0ar.push(smo108460);
const smo108461 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bn/2/n","bn/3/n"]}'))
smo108461.setAttribute('id', 'smo108461');
smo108475v0ar.push(smo108461);
smo108475v0.addTickables(smo108475v0ar)
fmtsmo10847589.joinVoices([smo108475v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109645 = smo105778.getStemDirection();
smo105778.setStemDirection(dirsmo109645);
smo105779.setStemDirection(dirsmo109645);
const smo109645 = new VF.Beam([smo105778,smo105779]);
const dirsmo109646 = smo105780.getStemDirection();
smo105780.setStemDirection(dirsmo109646);
smo105781.setStemDirection(dirsmo109646);
smo105782.setStemDirection(dirsmo109646);
const smo109646 = new VF.Beam([smo105780,smo105781,smo105782]);
const dirsmo109649 = smo108458.getStemDirection();
smo108458.setStemDirection(dirsmo109649);
smo108459.setStemDirection(dirsmo109649);
const smo109649 = new VF.Beam([smo108458,smo108459]);
const dirsmo109650 = smo108460.getStemDirection();
smo108460.setStemDirection(dirsmo109650);
smo108461.setStemDirection(dirsmo109650);
const smo109650 = new VF.Beam([smo108460,smo108461]);
 
// formatting measures in staff group smo103216
fmtsmo10579689.format([smo105796v0,smo108475v0], 281);
const stavesmo105796 = new VF.Stave(1548, 1777, 295);
stavesmo105796.setAttribute('id', 'stavesmo105796');
stavesmo105796.setBegBarType(VF.Barline.type.NONE);
stavesmo105796.setContext(context);
stavesmo105796.draw();
smo105796v0.draw(context, stavesmo105796);
smo109645.setContext(context);
smo109645.draw();
smo109646.setContext(context);
smo109646.draw();
const stavesmo108475 = new VF.Stave(1548, 1921, 295);
stavesmo108475.setAttribute('id', 'stavesmo108475');
stavesmo108475.setBegBarType(VF.Barline.type.NONE);
stavesmo108475.setContext(context);
stavesmo108475.draw();
smo108475v0.draw(context, stavesmo108475);
smo109649.setContext(context);
smo109649.draw();
smo109650.setContext(context);
smo109650.draw();
const rightsmo103216stavesmo1057961 = new VF.StaveConnector(stavesmo105796, stavesmo108475).setType(0);
rightsmo103216stavesmo1057961.setContext(context).draw();
const fmtsmo10581690 = new VF.Formatter();
//
// voices and notes for stave 0 90
const smo105816v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105816v0ar = [];
const smo105797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo105797.setAttribute('id', 'smo105797');
smo105816v0ar.push(smo105797);
const smo105798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105798.setAttribute('id', 'smo105798');
smo105816v0ar.push(smo105798);
const smo105799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105799.setAttribute('id', 'smo105799');
smo105816v0ar.push(smo105799);
const smo105800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105800.setAttribute('id', 'smo105800');
smo105816v0ar.push(smo105800);
const smo105801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n"]}'))
smo105801.setAttribute('id', 'smo105801');
smo105816v0ar.push(smo105801);
smo105816v0.addTickables(smo105816v0ar)
fmtsmo10581690.joinVoices([smo105816v0]);
const fmtsmo10849390 = new VF.Formatter();
//
// voices and notes for stave 1 90
const smo108493v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108493v0ar = [];
const smo108476 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo108476.setAttribute('id', 'smo108476');
smo108493v0ar.push(smo108476);
const smo108477 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108477.setAttribute('id', 'smo108477');
smo108493v0ar.push(smo108477);
const smo108478 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108478.setAttribute('id', 'smo108478');
smo108493v0ar.push(smo108478);
smo108493v0.addTickables(smo108493v0ar)
fmtsmo10849390.joinVoices([smo108493v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109657 = smo105797.getStemDirection();
smo105797.setStemDirection(dirsmo109657);
smo105798.setStemDirection(dirsmo109657);
smo105799.setStemDirection(dirsmo109657);
const smo109657 = new VF.Beam([smo105797,smo105798,smo105799]);
const dirsmo109658 = smo105800.getStemDirection();
smo105800.setStemDirection(dirsmo109658);
smo105801.setStemDirection(dirsmo109658);
const smo109658 = new VF.Beam([smo105800,smo105801]);
 
// formatting measures in staff group smo103216
fmtsmo10581690.format([smo105816v0,smo108493v0], 233);
const stavesmo105816 = new VF.Stave(73, 2089, 295);
stavesmo105816.setAttribute('id', 'stavesmo105816');
stavesmo105816.setBegBarType(1);
stavesmo105816.setEndBarType(5);
stavesmo105816.addClef('treble');
stavesmo105816.setContext(context);
stavesmo105816.draw();
smo105816v0.draw(context, stavesmo105816);
smo109657.setContext(context);
smo109657.draw();
smo109658.setContext(context);
smo109658.draw();
const stavesmo108493 = new VF.Stave(73, 2234, 295);
stavesmo108493.setAttribute('id', 'stavesmo108493');
stavesmo108493.setBegBarType(1);
stavesmo108493.setEndBarType(5);
stavesmo108493.addClef('bass');
stavesmo108493.setContext(context);
stavesmo108493.draw();
smo108493v0.draw(context, stavesmo108493);
const leftsmo103216stavesmo1058161 = new VF.StaveConnector(stavesmo105816, stavesmo108493).setType(3);
leftsmo103216stavesmo1058161.setContext(context).draw();
const fmtsmo10583491 = new VF.Formatter();
//
// voices and notes for stave 0 91
const smo105834v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo105834v0ar = [];
const smo105817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n","gn/4/n","cn/5/n"]}'))
smo105817.setAttribute('id', 'smo105817');
smo105834v0ar.push(smo105817);
const smo105818 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n","en/5/n","gn/5/n","cn/6/n"]}'))
smo105818.setAttribute('id', 'smo105818');
smo105834v0ar.push(smo105818);
const smo105819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo105819.setAttribute('id', 'smo105819');
smo105834v0ar.push(smo105819);
smo105834v0.addTickables(smo105834v0ar)
fmtsmo10583491.joinVoices([smo105834v0]);
const fmtsmo10851291 = new VF.Formatter();
//
// voices and notes for stave 1 91
const smo108512v0 = new VF.Voice(JSON.parse('{"num_beats":2,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo108512v0ar = [];
const smo108494 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/3/n","cn/4/n"]}'))
smo108494.setAttribute('id', 'smo108494');
smo108512v0ar.push(smo108494);
const smo108495 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/2/n","gn/3/n"]}'))
smo108495.setAttribute('id', 'smo108495');
smo108512v0ar.push(smo108495);
const smo108496 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/2/n","cn/3/n"]}'))
smo108496.setAttribute('id', 'smo108496');
smo108512v0ar.push(smo108496);
const smo108497 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/3/r"]}'))
smo108497.setAttribute('id', 'smo108497');
smo108512v0ar.push(smo108497);
smo108512v0.addTickables(smo108512v0ar)
fmtsmo10851291.joinVoices([smo108512v0]);
// create beam groups and tuplets for format grp smo103216 before formatting
const dirsmo109663 = smo108494.getStemDirection();
smo108494.setStemDirection(dirsmo109663);
smo108495.setStemDirection(dirsmo109663);
const smo109663 = new VF.Beam([smo108494,smo108495]);
 
// formatting measures in staff group smo103216
fmtsmo10583491.format([smo105834v0,smo108512v0], 281);
const stavesmo105834 = new VF.Stave(368, 2089, 295);
stavesmo105834.setAttribute('id', 'stavesmo105834');
stavesmo105834.setBegBarType(VF.Barline.type.NONE);
stavesmo105834.setContext(context);
stavesmo105834.draw();
smo105834v0.draw(context, stavesmo105834);
const stavesmo108512 = new VF.Stave(368, 2234, 295);
stavesmo108512.setAttribute('id', 'stavesmo108512');
stavesmo108512.setBegBarType(VF.Barline.type.NONE);
stavesmo108512.setEndBarType(3);
stavesmo108512.setContext(context);
stavesmo108512.draw();
smo108512v0.draw(context, stavesmo108512);
smo109663.setContext(context);
smo109663.draw();
// modifier from 0-67-0-0 to 0-67-0-0
const smo110460 = new VF.StaveHairpin({ first_note: smo105328, last_note: smo105328,
       firstNote: smo105328, lastNote: smo105328 });
smo110460.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -10,right_shift_px: 10 });
smo110460.setContext(context).setPosition(4).draw();
// modifier from 0-67-0-1 to 0-67-0-2
const smo110461 = new VF.StaveHairpin({ first_note: smo105329, last_note: smo105329,
       firstNote: smo105329, lastNote: smo105329 });
smo110461.setRenderOptions({ height: 10, y_shift: -50, left_shift_px: -2,right_shift_px: 0 });
smo110461.setContext(context).setPosition(4).draw();
// modifier from 0-60-0-3 to 0-60-0-4
const smo110462 = new VF.StaveTie({ first_note: smo105191, last_note: smo105192, 
          firstNote: smo105191, lastNote: smo105192, first_indices: [0], last_indices: [0]});
smo110462.setContext(context).draw();
// modifier from 0-62-0-2 to 0-62-0-3
const smo110463 = new VF.StaveTie({ first_note: smo105228, last_note: smo105229, 
          firstNote: smo105228, lastNote: smo105229, first_indices: [0,1], last_indices: [0,1]});
smo110463.setContext(context).draw();
// modifier from 0-64-0-2 to 0-64-0-3
const smo110464 = new VF.StaveTie({ first_note: smo105268, last_note: smo105269, 
          firstNote: smo105268, lastNote: smo105269, first_indices: [0,1], last_indices: [0,1]});
smo110464.setContext(context).draw();
// modifier from 0-65-0-0 to 0-65-0-1
const smo110465 = new VF.StaveTie({ first_note: smo105285, last_note: smo105286, 
          firstNote: smo105285, lastNote: smo105286, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110465.setContext(context).draw();
// modifier from 0-66-0-2 to 0-66-0-3
const smo110466 = new VF.StaveTie({ first_note: smo105310, last_note: smo105311, 
          firstNote: smo105310, lastNote: smo105311, first_indices: [0], last_indices: [0]});
smo110466.setContext(context).draw();
// modifier from 0-68-0-2 to 0-68-0-3
const smo110467 = new VF.StaveTie({ first_note: smo105349, last_note: smo105350, 
          firstNote: smo105349, lastNote: smo105350, first_indices: [0,1], last_indices: [0,1]});
smo110467.setContext(context).draw();
// modifier from 0-71-0-2 to 0-71-0-3
const smo110468 = new VF.StaveTie({ first_note: smo105411, last_note: smo105412, 
          firstNote: smo105411, lastNote: smo105412, first_indices: [0], last_indices: [0]});
smo110468.setContext(context).draw();
// modifier from 0-72-0-3 to 0-72-0-4
const smo110469 = new VF.StaveTie({ first_note: smo105433, last_note: smo105434, 
          firstNote: smo105433, lastNote: smo105434, first_indices: [0], last_indices: [0]});
smo110469.setContext(context).draw();
// modifier from 0-73-0-4 to 0-74-0-0
const smo110470 = new VF.StaveTie({ first_note: smo105456, last_note: smo105471, 
          firstNote: smo105456, lastNote: smo105471, first_indices: [0,1], last_indices: [0,1]});
smo110470.setContext(context).draw();
// modifier from 0-75-0-2 to 0-75-0-3
const smo110471 = new VF.StaveTie({ first_note: smo105490, last_note: smo105491, 
          firstNote: smo105490, lastNote: smo105491, first_indices: [0,1], last_indices: [0,1]});
smo110471.setContext(context).draw();
// modifier from 0-77-0-2 to 0-77-0-3
const smo110472 = new VF.StaveTie({ first_note: smo105532, last_note: smo105533, 
          firstNote: smo105532, lastNote: smo105533, first_indices: [0,1], last_indices: [0,1]});
smo110472.setContext(context).draw();
// modifier from 0-79-0-2 to 0-79-0-3
const smo110473 = new VF.StaveTie({ first_note: smo105574, last_note: smo105575, 
          firstNote: smo105574, lastNote: smo105575, first_indices: [0,1], last_indices: [0,1]});
smo110473.setContext(context).draw();
// modifier from 0-83-0-2 to 0-83-0-3
const smo110474 = new VF.StaveTie({ first_note: smo105653, last_note: smo105654, 
          firstNote: smo105653, lastNote: smo105654, first_indices: [0,1], last_indices: [0,1]});
smo110474.setContext(context).draw();
// modifier from 0-85-0-2 to 0-85-0-3
const smo110475 = new VF.StaveTie({ first_note: smo105695, last_note: smo105696, 
          firstNote: smo105695, lastNote: smo105696, first_indices: [0,1], last_indices: [0,1]});
smo110475.setContext(context).draw();
// modifier from 0-87-0-3 to 0-87-0-4
const smo110476 = new VF.StaveTie({ first_note: smo105738, last_note: smo105739, 
          firstNote: smo105738, lastNote: smo105739, first_indices: [0,1], last_indices: [0,1]});
smo110476.setContext(context).draw();
// modifier from 0-88-0-3 to 0-88-0-4
const smo110477 = new VF.StaveTie({ first_note: smo105759, last_note: smo105760, 
          firstNote: smo105759, lastNote: smo105760, first_indices: [0], last_indices: [0]});
smo110477.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo110478 = new VF.StaveTie({ first_note: smo105782, last_note: null, 
          firstNote: smo105782, lastNote: null, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110478.setContext(context).draw();
// modifier from 0-89-0-4 to 0-90-0-0
const smo110479 = new VF.StaveTie({ first_note: null, last_note: smo105797, 
          firstNote: null, lastNote: smo105797, first_indices: [0,1,2], last_indices: [0,1,2]});
smo110479.setContext(context).draw();
const smo105376smo105389 = new VF.Volta(5, '1', 958, 20);
smo105376smo105389.setContext(context).draw(stavesmo105389, -1 * 0);
const smo105394smo105408 = new VF.Volta(5, '2', 1253, 20);
smo105394smo105408.setContext(context).draw(stavesmo105408, -1 * 0);
const smo105803smo105816 = new VF.Volta(5, '1', 73, 20);
smo105803smo105816.setContext(context).draw(stavesmo105816, -1 * 0);
const smo105820smo105834 = new VF.Volta(5, '2', 368, 20);
smo105820smo105834.setContext(context).draw(stavesmo105834, -1 * 0);
}
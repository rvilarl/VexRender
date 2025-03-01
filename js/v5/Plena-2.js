// @@ Plena para tres ninos p 3/13  by Newman
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1569.9999999999998');
svg.setAttributeNS('', 'height', '1212.8945249597423');
svg.setAttributeNS('', 'viewBox', '0 0 2574 1989');
//
// create the musical objects
VF.setFonts("Bravura","Academico");
const fmtsmo1124157 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo112415v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112415v0ar = [];
const smo112399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo112399.setAttribute('id', 'smo112399');
smo112415v0ar.push(smo112399);
smo112415v0.addTickables(smo112415v0ar)
fmtsmo1124157.joinVoices([smo112415v0]);
const fmtsmo1148427 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo114842v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114842v0ar = [];
const smo114826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114826.setAttribute('id', 'smo114826');
smo114842v0ar.push(smo114826);
smo114842v0.addTickables(smo114842v0ar)
fmtsmo1148427.joinVoices([smo114842v0]);
const fmtsmo1172607 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo117260v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117260v0ar = [];
const smo117244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117244.setAttribute('id', 'smo117244');
smo117260v0ar.push(smo117244);
smo117260v0.addTickables(smo117260v0ar)
fmtsmo1172607.joinVoices([smo117260v0]);
const fmtsmo1196347 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo119634v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119634v0ar = [];
const smo119618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119618.setAttribute('id', 'smo119618');
smo119634v0ar.push(smo119618);
smo119634v0.addTickables(smo119634v0ar)
fmtsmo1196347.joinVoices([smo119634v0]);
const fmtsmo1220047 = new VF.Formatter();
//
// voices and notes for stave 4 7
const smo122004v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122004v0ar = [];
const smo121985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo121985.setAttribute('id', 'smo121985');
smo122004v0ar.push(smo121985);
const smo121986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo121986.setAttribute('id', 'smo121986');
smo122004v0ar.push(smo121986);
const smo121987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo121987.setAttribute('id', 'smo121987');
smo122004v0ar.push(smo121987);
const smo121988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["a#/4/n"]}'))
smo121988.setAttribute('id', 'smo121988');
const smo1219880acc = new VF.Accidental('#');
smo121988.addModifier(smo1219880acc, 0);
smo122004v0ar.push(smo121988);
smo122004v0.addTickables(smo122004v0ar)
fmtsmo1220047.joinVoices([smo122004v0]);
const fmtsmo1242837 = new VF.Formatter();
//
// voices and notes for stave 5 7
const smo124283v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124283v0ar = [];
const smo124263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124263.setAttribute('id', 'smo124263');
smo124283v0ar.push(smo124263);
const smo124264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124264.setAttribute('id', 'smo124264');
smo124283v0ar.push(smo124264);
const smo124265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124265.setAttribute('id', 'smo124265');
smo124283v0ar.push(smo124265);
const smo124266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124266.setAttribute('id', 'smo124266');
smo124283v0ar.push(smo124266);
const smo124267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124267.setAttribute('id', 'smo124267');
smo124283v0ar.push(smo124267);
smo124283v0.addTickables(smo124283v0ar)
fmtsmo1242837.joinVoices([smo124283v0]);
const fmtsmo1266947 = new VF.Formatter();
//
// voices and notes for stave 6 7
const smo126694v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126694v0ar = [];
const smo126674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo126674.setAttribute('id', 'smo126674');
smo126694v0ar.push(smo126674);
const smo126675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126675.setAttribute('id', 'smo126675');
smo126694v0ar.push(smo126675);
const smo126676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126676.setAttribute('id', 'smo126676');
smo126694v0ar.push(smo126676);
const smo126677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo126677.setAttribute('id', 'smo126677');
const smo1266770acc = new VF.Accidental('b');
smo126677.addModifier(smo1266770acc, 0);
smo126694v0ar.push(smo126677);
const smo126678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo126678.setAttribute('id', 'smo126678');
smo126694v0ar.push(smo126678);
smo126694v0.addTickables(smo126694v0ar)
fmtsmo1266947.joinVoices([smo126694v0]);
const fmtsmo1290707 = new VF.Formatter();
//
// voices and notes for stave 7 7
const smo129070v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129070v0ar = [];
const smo129054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129054.setAttribute('id', 'smo129054');
smo129070v0ar.push(smo129054);
smo129070v0.addTickables(smo129070v0ar)
fmtsmo1290707.joinVoices([smo129070v0]);
const fmtsmo1314207 = new VF.Formatter();
//
// voices and notes for stave 8 7
const smo131420v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131420v0ar = [];
const smo131404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131404.setAttribute('id', 'smo131404');
smo131420v0ar.push(smo131404);
smo131420v0.addTickables(smo131420v0ar)
fmtsmo1314207.joinVoices([smo131420v0]);
const fmtsmo1337937 = new VF.Formatter();
//
// voices and notes for stave 9 7
const smo133793v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133793v0ar = [];
const smo133773 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133773.setAttribute('id', 'smo133773');
smo133793v0ar.push(smo133773);
const smo133774 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo133774.setAttribute('id', 'smo133774');
smo133793v0ar.push(smo133774);
const smo133775 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo133775.setAttribute('id', 'smo133775');
smo133793v0ar.push(smo133775);
const smo133776 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo133776.setAttribute('id', 'smo133776');
smo133793v0ar.push(smo133776);
const smo133777 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo133777.setAttribute('id', 'smo133777');
smo133793v0ar.push(smo133777);
smo133793v0.addTickables(smo133793v0ar)
fmtsmo1337937.joinVoices([smo133793v0]);
const fmtsmo1361667 = new VF.Formatter();
//
// voices and notes for stave 10 7
const smo136166v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136166v0ar = [];
const smo136146 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136146.setAttribute('id', 'smo136146');
smo136166v0ar.push(smo136146);
const smo136147 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136147.setAttribute('id', 'smo136147');
smo136166v0ar.push(smo136147);
const smo136148 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo136148.setAttribute('id', 'smo136148');
smo136166v0ar.push(smo136148);
const smo136149 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo136149.setAttribute('id', 'smo136149');
smo136166v0ar.push(smo136149);
const smo136150 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136150.setAttribute('id', 'smo136150');
smo136166v0ar.push(smo136150);
smo136166v0.addTickables(smo136166v0ar)
fmtsmo1361667.joinVoices([smo136166v0]);
const fmtsmo1385147 = new VF.Formatter();
//
// voices and notes for stave 11 7
const smo138514v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138514v0ar = [];
const smo138498 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138498.setAttribute('id', 'smo138498');
smo138514v0ar.push(smo138498);
smo138514v0.addTickables(smo138514v0ar)
fmtsmo1385147.joinVoices([smo138514v0]);
const fmtsmo1408637 = new VF.Formatter();
//
// voices and notes for stave 12 7
const smo140863v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140863v0ar = [];
const smo140844 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140844.setAttribute('id', 'smo140844');
smo140863v0ar.push(smo140844);
const smo140845 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140845.setAttribute('id', 'smo140845');
smo140863v0ar.push(smo140845);
const smo140846 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo140846.setAttribute('id', 'smo140846');
smo140863v0ar.push(smo140846);
const smo140847 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo140847.setAttribute('id', 'smo140847');
const smo1408470acc = new VF.Accidental('#');
smo140847.addModifier(smo1408470acc, 0);
smo140863v0ar.push(smo140847);
smo140863v0.addTickables(smo140863v0ar)
fmtsmo1408637.joinVoices([smo140863v0]);
const fmtsmo1431697 = new VF.Formatter();
//
// voices and notes for stave 13 7
const smo143169v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143169v0ar = [];
const smo143149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143149.setAttribute('id', 'smo143149');
smo143169v0ar.push(smo143149);
const smo143150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo143150.setAttribute('id', 'smo143150');
smo143169v0ar.push(smo143150);
const smo143151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143151.setAttribute('id', 'smo143151');
smo143169v0ar.push(smo143151);
const smo143152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143152.setAttribute('id', 'smo143152');
smo143169v0ar.push(smo143152);
const smo143153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo143153.setAttribute('id', 'smo143153');
smo143169v0ar.push(smo143153);
smo143169v0.addTickables(smo143169v0ar)
fmtsmo1431697.joinVoices([smo143169v0]);
const fmtsmo1456497 = new VF.Formatter();
//
// voices and notes for stave 14 7
const smo145649v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145649v0ar = [];
const smo145633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145633.setAttribute('id', 'smo145633');
smo145649v0ar.push(smo145633);
smo145649v0.addTickables(smo145649v0ar)
fmtsmo1456497.joinVoices([smo145649v0]);
const fmtsmo1481417 = new VF.Formatter();
//
// voices and notes for stave 15 7
const smo148141v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148141v0ar = [];
const smo148122 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148122.setAttribute('id', 'smo148122');
smo148141v0ar.push(smo148122);
const smo148123 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148123.setAttribute('id', 'smo148123');
smo148141v0ar.push(smo148123);
const smo148124 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo148124.setAttribute('id', 'smo148124');
smo148141v0ar.push(smo148124);
const smo148125 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gb/3/n"]}'))
smo148125.setAttribute('id', 'smo148125');
const smo1481250acc = new VF.Accidental('b');
smo148125.addModifier(smo1481250acc, 0);
smo148141v0ar.push(smo148125);
smo148141v0.addTickables(smo148141v0ar)
fmtsmo1481417.joinVoices([smo148141v0]);
const fmtsmo1505507 = new VF.Formatter();
//
// voices and notes for stave 16 7
const smo150550v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150550v0ar = [];
const smo150530 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150530.setAttribute('id', 'smo150530');
const smo1505300acc = new VF.Accidental('n');
smo150530.addModifier(smo1505300acc, 0);
smo150550v0ar.push(smo150530);
const smo150531 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150531.setAttribute('id', 'smo150531');
smo150550v0ar.push(smo150531);
const smo150532 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150532.setAttribute('id', 'smo150532');
smo150550v0ar.push(smo150532);
const smo150533 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150533.setAttribute('id', 'smo150533');
smo150550v0ar.push(smo150533);
const smo150534 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150534.setAttribute('id', 'smo150534');
smo150550v0ar.push(smo150534);
smo150550v0.addTickables(smo150550v0ar)
fmtsmo1505507.joinVoices([smo150550v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
 
// formatting measures in staff group smo153054
fmtsmo1124157.format([smo112415v0,smo114842v0,smo117260v0,smo119634v0,smo122004v0], 121);
const stavesmo112415 = new VF.Stave(138, 183.2253035909339, 196);
stavesmo112415.setAttribute('id', 'stavesmo112415');
stavesmo112415.setBegBarType(1);
stavesmo112415.addClef('treble');
const keysmo112415 = new VF.KeySignature('D');
keysmo112415.addToStave(stavesmo112415);
stavesmo112415.setContext(context);
stavesmo112415.draw();
smo112415v0.draw(context, stavesmo112415);
const stavesmo114842 = new VF.Stave(138, 288.2253035909339, 196);
stavesmo114842.setAttribute('id', 'stavesmo114842');
stavesmo114842.setBegBarType(1);
stavesmo114842.addClef('treble');
const keysmo114842 = new VF.KeySignature('D');
keysmo114842.addToStave(stavesmo114842);
stavesmo114842.setContext(context);
stavesmo114842.draw();
smo114842v0.draw(context, stavesmo114842);
const stavesmo117260 = new VF.Stave(138, 409.2253035909339, 196);
stavesmo117260.setAttribute('id', 'stavesmo117260');
stavesmo117260.setBegBarType(1);
stavesmo117260.addClef('treble');
const keysmo117260 = new VF.KeySignature('G');
keysmo117260.addToStave(stavesmo117260);
stavesmo117260.setContext(context);
stavesmo117260.draw();
smo117260v0.draw(context, stavesmo117260);
const stavesmo119634 = new VF.Stave(138, 539.2253035909339, 196);
stavesmo119634.setAttribute('id', 'stavesmo119634');
stavesmo119634.setBegBarType(1);
stavesmo119634.addClef('treble');
const keysmo119634 = new VF.KeySignature('G');
keysmo119634.addToStave(stavesmo119634);
stavesmo119634.setContext(context);
stavesmo119634.draw();
smo119634v0.draw(context, stavesmo119634);
const stavesmo122004 = new VF.Stave(138, 609.2253035909339, 196);
stavesmo122004.setAttribute('id', 'stavesmo122004');
stavesmo122004.setBegBarType(1);
stavesmo122004.addClef('treble');
const keysmo122004 = new VF.KeySignature('D');
keysmo122004.addToStave(stavesmo122004);
stavesmo122004.setContext(context);
stavesmo122004.draw();
smo122004v0.draw(context, stavesmo122004);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo218897 = smo124263.getStemDirection();
smo124263.setStemDirection(dirsmo218897);
smo124264.setStemDirection(dirsmo218897);
const smo218897 = new VF.Beam([smo124263,smo124264]);
const dirsmo218899 = smo126674.getStemDirection();
smo126674.setStemDirection(dirsmo218899);
smo126675.setStemDirection(dirsmo218899);
const smo218899 = new VF.Beam([smo126674,smo126675]);
 
// formatting measures in staff group smo153056
fmtsmo1242837.format([smo124283v0,smo126694v0,smo129070v0,smo131420v0], 131);
const stavesmo124283 = new VF.Stave(138, 690.2253035909339, 196);
stavesmo124283.setAttribute('id', 'stavesmo124283');
stavesmo124283.setBegBarType(1);
stavesmo124283.addClef('treble');
const keysmo124283 = new VF.KeySignature('G');
keysmo124283.addToStave(stavesmo124283);
stavesmo124283.setContext(context);
stavesmo124283.draw();
smo124283v0.draw(context, stavesmo124283);
smo218897.setContext(context);
smo218897.draw();
const stavesmo126694 = new VF.Stave(138, 750.2253035909339, 196);
stavesmo126694.setAttribute('id', 'stavesmo126694');
stavesmo126694.setBegBarType(1);
stavesmo126694.addClef('treble');
const keysmo126694 = new VF.KeySignature('G');
keysmo126694.addToStave(stavesmo126694);
stavesmo126694.setContext(context);
stavesmo126694.draw();
smo126694v0.draw(context, stavesmo126694);
smo218899.setContext(context);
smo218899.draw();
const stavesmo129070 = new VF.Stave(138, 811.2253035909339, 196);
stavesmo129070.setAttribute('id', 'stavesmo129070');
stavesmo129070.setBegBarType(1);
stavesmo129070.addClef('treble');
const keysmo129070 = new VF.KeySignature('G');
keysmo129070.addToStave(stavesmo129070);
stavesmo129070.setContext(context);
stavesmo129070.draw();
smo129070v0.draw(context, stavesmo129070);
const stavesmo131420 = new VF.Stave(138, 881.2253035909339, 196);
stavesmo131420.setAttribute('id', 'stavesmo131420');
stavesmo131420.setBegBarType(1);
stavesmo131420.addClef('treble');
const keysmo131420 = new VF.KeySignature('G');
keysmo131420.addToStave(stavesmo131420);
stavesmo131420.setContext(context);
stavesmo131420.draw();
smo131420v0.draw(context, stavesmo131420);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo218903 = smo133773.getStemDirection();
smo133773.setStemDirection(dirsmo218903);
smo133774.setStemDirection(dirsmo218903);
const smo218903 = new VF.Beam([smo133773,smo133774]);
const dirsmo218905 = smo136146.getStemDirection();
smo136146.setStemDirection(dirsmo218905);
smo136147.setStemDirection(dirsmo218905);
const smo218905 = new VF.Beam([smo136146,smo136147]);
 
// formatting measures in staff group smo153058
fmtsmo1337937.format([smo133793v0,smo136166v0,smo138514v0,smo140863v0], 131);
const stavesmo133793 = new VF.Stave(138, 986.2253035909339, 196);
stavesmo133793.setAttribute('id', 'stavesmo133793');
stavesmo133793.setBegBarType(1);
stavesmo133793.addClef('bass');
const keysmo133793 = new VF.KeySignature('F');
keysmo133793.addToStave(stavesmo133793);
stavesmo133793.setContext(context);
stavesmo133793.draw();
smo133793v0.draw(context, stavesmo133793);
smo218903.setContext(context);
smo218903.draw();
const stavesmo136166 = new VF.Stave(138, 1105.225303590934, 196);
stavesmo136166.setAttribute('id', 'stavesmo136166');
stavesmo136166.setBegBarType(1);
stavesmo136166.addClef('bass');
const keysmo136166 = new VF.KeySignature('F');
keysmo136166.addToStave(stavesmo136166);
stavesmo136166.setContext(context);
stavesmo136166.draw();
smo136166v0.draw(context, stavesmo136166);
smo218905.setContext(context);
smo218905.draw();
const stavesmo138514 = new VF.Stave(138, 1221.225303590934, 196);
stavesmo138514.setAttribute('id', 'stavesmo138514');
stavesmo138514.setBegBarType(1);
stavesmo138514.addClef('bass');
const keysmo138514 = new VF.KeySignature('F');
keysmo138514.addToStave(stavesmo138514);
stavesmo138514.setContext(context);
stavesmo138514.draw();
smo138514v0.draw(context, stavesmo138514);
const stavesmo140863 = new VF.Stave(138, 1317.225303590934, 196);
stavesmo140863.setAttribute('id', 'stavesmo140863');
stavesmo140863.setBegBarType(1);
stavesmo140863.addClef('bass');
const keysmo140863 = new VF.KeySignature('F');
keysmo140863.addToStave(stavesmo140863);
stavesmo140863.setContext(context);
stavesmo140863.draw();
smo140863v0.draw(context, stavesmo140863);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo218909 = smo143149.getStemDirection();
smo143149.setStemDirection(dirsmo218909);
smo143150.setStemDirection(dirsmo218909);
const smo218909 = new VF.Beam([smo143149,smo143150]);
 
// formatting measures in staff group smo145509
fmtsmo1431697.format([smo143169v0], 132);
const stavesmo143169 = new VF.Stave(138, 1419.225303590934, 196);
stavesmo143169.setAttribute('id', 'stavesmo143169');
stavesmo143169.setBegBarType(1);
stavesmo143169.addClef('treble');
const keysmo143169 = new VF.KeySignature('F');
keysmo143169.addToStave(stavesmo143169);
stavesmo143169.setContext(context);
stavesmo143169.draw();
smo143169v0.draw(context, stavesmo143169);
smo218909.setContext(context);
smo218909.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo1456497.format([smo145649v0], 132);
const stavesmo145649 = new VF.Stave(138, 1500.225303590934, 196);
stavesmo145649.setAttribute('id', 'stavesmo145649');
stavesmo145649.setBegBarType(1);
stavesmo145649.addClef('treble');
const keysmo145649 = new VF.KeySignature('F');
keysmo145649.addToStave(stavesmo145649);
stavesmo145649.setContext(context);
stavesmo145649.draw();
smo145649v0.draw(context, stavesmo145649);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo1481417.format([smo148141v0], 131);
const stavesmo148141 = new VF.Stave(138, 1605.225303590934, 196);
stavesmo148141.setAttribute('id', 'stavesmo148141');
stavesmo148141.setBegBarType(1);
stavesmo148141.addClef('bass');
const keysmo148141 = new VF.KeySignature('F');
keysmo148141.addToStave(stavesmo148141);
stavesmo148141.setContext(context);
stavesmo148141.draw();
smo148141v0.draw(context, stavesmo148141);
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo218913 = smo150530.getStemDirection();
smo150530.setStemDirection(dirsmo218913);
smo150531.setStemDirection(dirsmo218913);
const smo218913 = new VF.Beam([smo150530,smo150531]);
 
// formatting measures in staff group smo153048
fmtsmo1505507.format([smo150550v0], 132);
const stavesmo150550 = new VF.Stave(138, 1687.225303590934, 196);
stavesmo150550.setAttribute('id', 'stavesmo150550');
stavesmo150550.setBegBarType(1);
stavesmo150550.addClef('percussion');
const keysmo150550 = new VF.KeySignature('F');
keysmo150550.addToStave(stavesmo150550);
stavesmo150550.setContext(context);
stavesmo150550.draw();
smo150550v0.draw(context, stavesmo150550);
smo218913.setContext(context);
smo218913.draw();
const leftsmo153048stavesmo11241516 = new VF.StaveConnector(stavesmo112415, stavesmo122004).setType(3);
leftsmo153048stavesmo11241516.setContext(context).draw();
const leftsmo153048stavesmo12428316 = new VF.StaveConnector(stavesmo124283, stavesmo131420).setType(3);
leftsmo153048stavesmo12428316.setContext(context).draw();
const leftsmo153048stavesmo13379316 = new VF.StaveConnector(stavesmo133793, stavesmo140863).setType(3);
leftsmo153048stavesmo13379316.setContext(context).draw();
const fmtsmo1124328 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo112432v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112432v0ar = [];
const smo112416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo112416.setAttribute('id', 'smo112416');
smo112432v0ar.push(smo112416);
smo112432v0.addTickables(smo112432v0ar)
fmtsmo1124328.joinVoices([smo112432v0]);
const fmtsmo1148598 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo114859v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114859v0ar = [];
const smo114843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114843.setAttribute('id', 'smo114843');
smo114859v0ar.push(smo114843);
smo114859v0.addTickables(smo114859v0ar)
fmtsmo1148598.joinVoices([smo114859v0]);
const fmtsmo1172778 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo117277v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117277v0ar = [];
const smo117261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117261.setAttribute('id', 'smo117261');
smo117277v0ar.push(smo117261);
smo117277v0.addTickables(smo117277v0ar)
fmtsmo1172778.joinVoices([smo117277v0]);
const fmtsmo1196518 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo119651v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119651v0ar = [];
const smo119635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119635.setAttribute('id', 'smo119635');
smo119651v0ar.push(smo119635);
smo119651v0.addTickables(smo119651v0ar)
fmtsmo1196518.joinVoices([smo119651v0]);
const fmtsmo1220238 = new VF.Formatter();
//
// voices and notes for stave 4 8
const smo122023v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122023v0ar = [];
const smo122005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122005.setAttribute('id', 'smo122005');
smo122023v0ar.push(smo122005);
const smo122006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122006.setAttribute('id', 'smo122006');
smo122023v0ar.push(smo122006);
const smo122007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122007.setAttribute('id', 'smo122007');
smo122023v0ar.push(smo122007);
smo122023v0.addTickables(smo122023v0ar)
fmtsmo1220238.joinVoices([smo122023v0]);
const fmtsmo1243078 = new VF.Formatter();
//
// voices and notes for stave 5 8
const smo124307v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124307v0ar = [];
const smo124284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124284.setAttribute('id', 'smo124284');
smo124307v0ar.push(smo124284);
const smo124285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo124285.setAttribute('id', 'smo124285');
smo124307v0ar.push(smo124285);
const smo124286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo124286.setAttribute('id', 'smo124286');
smo124307v0ar.push(smo124286);
const smo124287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo124287.setAttribute('id', 'smo124287');
smo124307v0ar.push(smo124287);
const smo124288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124288.setAttribute('id', 'smo124288');
smo124307v0ar.push(smo124288);
const smo124289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124289.setAttribute('id', 'smo124289');
smo124307v0ar.push(smo124289);
const smo124290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124290.setAttribute('id', 'smo124290');
smo124307v0ar.push(smo124290);
const smo124291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo124291.setAttribute('id', 'smo124291');
smo124307v0ar.push(smo124291);
smo124307v0.addTickables(smo124307v0ar)
fmtsmo1243078.joinVoices([smo124307v0]);
const fmtsmo1267138 = new VF.Formatter();
//
// voices and notes for stave 6 8
const smo126713v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126713v0ar = [];
const smo126695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo126695.setAttribute('id', 'smo126695');
smo126713v0ar.push(smo126695);
const smo126696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126696.setAttribute('id', 'smo126696');
smo126713v0ar.push(smo126696);
const smo126697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126697.setAttribute('id', 'smo126697');
smo126713v0ar.push(smo126697);
smo126713v0.addTickables(smo126713v0ar)
fmtsmo1267138.joinVoices([smo126713v0]);
const fmtsmo1290878 = new VF.Formatter();
//
// voices and notes for stave 7 8
const smo129087v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129087v0ar = [];
const smo129071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129071.setAttribute('id', 'smo129071');
smo129087v0ar.push(smo129071);
smo129087v0.addTickables(smo129087v0ar)
fmtsmo1290878.joinVoices([smo129087v0]);
const fmtsmo1314378 = new VF.Formatter();
//
// voices and notes for stave 8 8
const smo131437v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131437v0ar = [];
const smo131421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131421.setAttribute('id', 'smo131421');
smo131437v0ar.push(smo131421);
smo131437v0.addTickables(smo131437v0ar)
fmtsmo1314378.joinVoices([smo131437v0]);
const fmtsmo1338128 = new VF.Formatter();
//
// voices and notes for stave 9 8
const smo133812v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133812v0ar = [];
const smo133794 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo133794.setAttribute('id', 'smo133794');
smo133812v0ar.push(smo133794);
const smo133795 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo133795.setAttribute('id', 'smo133795');
smo133812v0ar.push(smo133795);
const smo133796 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo133796.setAttribute('id', 'smo133796');
smo133812v0ar.push(smo133796);
smo133812v0.addTickables(smo133812v0ar)
fmtsmo1338128.joinVoices([smo133812v0]);
const fmtsmo1361858 = new VF.Formatter();
//
// voices and notes for stave 10 8
const smo136185v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136185v0ar = [];
const smo136167 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo136167.setAttribute('id', 'smo136167');
smo136185v0ar.push(smo136167);
const smo136168 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136168.setAttribute('id', 'smo136168');
smo136185v0ar.push(smo136168);
const smo136169 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136169.setAttribute('id', 'smo136169');
smo136185v0ar.push(smo136169);
smo136185v0.addTickables(smo136185v0ar)
fmtsmo1361858.joinVoices([smo136185v0]);
const fmtsmo1385318 = new VF.Formatter();
//
// voices and notes for stave 11 8
const smo138531v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138531v0ar = [];
const smo138515 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138515.setAttribute('id', 'smo138515');
smo138531v0ar.push(smo138515);
smo138531v0.addTickables(smo138531v0ar)
fmtsmo1385318.joinVoices([smo138531v0]);
const fmtsmo1408828 = new VF.Formatter();
//
// voices and notes for stave 12 8
const smo140882v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140882v0ar = [];
const smo140864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140864.setAttribute('id', 'smo140864');
smo140882v0ar.push(smo140864);
const smo140865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo140865.setAttribute('id', 'smo140865');
smo140882v0ar.push(smo140865);
const smo140866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo140866.setAttribute('id', 'smo140866');
smo140882v0ar.push(smo140866);
smo140882v0.addTickables(smo140882v0ar)
fmtsmo1408828.joinVoices([smo140882v0]);
const fmtsmo1431938 = new VF.Formatter();
//
// voices and notes for stave 13 8
const smo143193v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143193v0ar = [];
const smo143170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143170.setAttribute('id', 'smo143170');
smo143193v0ar.push(smo143170);
const smo143171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo143171.setAttribute('id', 'smo143171');
smo143193v0ar.push(smo143171);
const smo143172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo143172.setAttribute('id', 'smo143172');
smo143193v0ar.push(smo143172);
const smo143173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo143173.setAttribute('id', 'smo143173');
smo143193v0ar.push(smo143173);
const smo143174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143174.setAttribute('id', 'smo143174');
smo143193v0ar.push(smo143174);
const smo143175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo143175.setAttribute('id', 'smo143175');
smo143193v0ar.push(smo143175);
const smo143176 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143176.setAttribute('id', 'smo143176');
smo143193v0ar.push(smo143176);
const smo143177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo143177.setAttribute('id', 'smo143177');
smo143193v0ar.push(smo143177);
smo143193v0.addTickables(smo143193v0ar)
fmtsmo1431938.joinVoices([smo143193v0]);
const fmtsmo1456668 = new VF.Formatter();
//
// voices and notes for stave 14 8
const smo145666v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145666v0ar = [];
const smo145650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145650.setAttribute('id', 'smo145650');
smo145666v0ar.push(smo145650);
smo145666v0.addTickables(smo145666v0ar)
fmtsmo1456668.joinVoices([smo145666v0]);
const fmtsmo1481608 = new VF.Formatter();
//
// voices and notes for stave 15 8
const smo148160v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148160v0ar = [];
const smo148142 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo148142.setAttribute('id', 'smo148142');
smo148160v0ar.push(smo148142);
const smo148143 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo148143.setAttribute('id', 'smo148143');
smo148160v0ar.push(smo148143);
const smo148144 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo148144.setAttribute('id', 'smo148144');
smo148160v0ar.push(smo148144);
smo148160v0.addTickables(smo148160v0ar)
fmtsmo1481608.joinVoices([smo148160v0]);
const fmtsmo1505698 = new VF.Formatter();
//
// voices and notes for stave 16 8
const smo150569v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150569v0ar = [];
const smo150551 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150551.setAttribute('id', 'smo150551');
const smo1505510acc = new VF.Accidental('n');
smo150551.addModifier(smo1505510acc, 0);
smo150569v0ar.push(smo150551);
const smo150552 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150552.setAttribute('id', 'smo150552');
smo150569v0ar.push(smo150552);
const smo150553 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150553.setAttribute('id', 'smo150553');
smo150569v0ar.push(smo150553);
smo150569v0.addTickables(smo150569v0ar)
fmtsmo1505698.joinVoices([smo150569v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
 
// formatting measures in staff group smo153054
fmtsmo1124328.format([smo112432v0,smo114859v0,smo117277v0,smo119651v0,smo122023v0], 164);
const stavesmo112432 = new VF.Stave(334, 183.2253035909339, 178);
stavesmo112432.setAttribute('id', 'stavesmo112432');
stavesmo112432.setBegBarType(VF.Barline.type.NONE);
stavesmo112432.setContext(context);
stavesmo112432.draw();
smo112432v0.draw(context, stavesmo112432);
const stavesmo114859 = new VF.Stave(334, 288.2253035909339, 178);
stavesmo114859.setAttribute('id', 'stavesmo114859');
stavesmo114859.setBegBarType(VF.Barline.type.NONE);
stavesmo114859.setContext(context);
stavesmo114859.draw();
smo114859v0.draw(context, stavesmo114859);
const stavesmo117277 = new VF.Stave(334, 409.2253035909339, 178);
stavesmo117277.setAttribute('id', 'stavesmo117277');
stavesmo117277.setBegBarType(VF.Barline.type.NONE);
stavesmo117277.setContext(context);
stavesmo117277.draw();
smo117277v0.draw(context, stavesmo117277);
const stavesmo119651 = new VF.Stave(334, 539.2253035909339, 178);
stavesmo119651.setAttribute('id', 'stavesmo119651');
stavesmo119651.setBegBarType(VF.Barline.type.NONE);
stavesmo119651.setContext(context);
stavesmo119651.draw();
smo119651v0.draw(context, stavesmo119651);
const stavesmo122023 = new VF.Stave(334, 609.2253035909339, 178);
stavesmo122023.setAttribute('id', 'stavesmo122023');
stavesmo122023.setBegBarType(VF.Barline.type.NONE);
stavesmo122023.setContext(context);
stavesmo122023.draw();
smo122023v0.draw(context, stavesmo122023);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo218937 = smo124284.getStemDirection();
smo124284.setStemDirection(dirsmo218937);
smo124285.setStemDirection(dirsmo218937);
smo124286.setStemDirection(dirsmo218937);
smo124287.setStemDirection(dirsmo218937);
const smo218937 = new VF.Beam([smo124284,smo124285,smo124286,smo124287]);
const dirsmo218938 = smo124288.getStemDirection();
smo124288.setStemDirection(dirsmo218938);
smo124289.setStemDirection(dirsmo218938);
smo124290.setStemDirection(dirsmo218938);
smo124291.setStemDirection(dirsmo218938);
const smo218938 = new VF.Beam([smo124288,smo124289,smo124290,smo124291]);
 
// formatting measures in staff group smo153056
fmtsmo1243078.format([smo124307v0,smo126713v0,smo129087v0,smo131437v0], 164);
const stavesmo124307 = new VF.Stave(334, 690.2253035909339, 178);
stavesmo124307.setAttribute('id', 'stavesmo124307');
stavesmo124307.setBegBarType(VF.Barline.type.NONE);
stavesmo124307.setContext(context);
stavesmo124307.draw();
smo124307v0.draw(context, stavesmo124307);
smo218937.setContext(context);
smo218937.draw();
smo218938.setContext(context);
smo218938.draw();
const stavesmo126713 = new VF.Stave(334, 750.2253035909339, 178);
stavesmo126713.setAttribute('id', 'stavesmo126713');
stavesmo126713.setBegBarType(VF.Barline.type.NONE);
stavesmo126713.setContext(context);
stavesmo126713.draw();
smo126713v0.draw(context, stavesmo126713);
const stavesmo129087 = new VF.Stave(334, 811.2253035909339, 178);
stavesmo129087.setAttribute('id', 'stavesmo129087');
stavesmo129087.setBegBarType(VF.Barline.type.NONE);
stavesmo129087.setContext(context);
stavesmo129087.draw();
smo129087v0.draw(context, stavesmo129087);
const stavesmo131437 = new VF.Stave(334, 881.2253035909339, 178);
stavesmo131437.setAttribute('id', 'stavesmo131437');
stavesmo131437.setBegBarType(VF.Barline.type.NONE);
stavesmo131437.setContext(context);
stavesmo131437.draw();
smo131437v0.draw(context, stavesmo131437);
// create beam groups and tuplets for format grp smo153058 before formatting
 
// formatting measures in staff group smo153058
fmtsmo1338128.format([smo133812v0,smo136185v0,smo138531v0,smo140882v0], 164);
const stavesmo133812 = new VF.Stave(334, 986.2253035909339, 178);
stavesmo133812.setAttribute('id', 'stavesmo133812');
stavesmo133812.setBegBarType(VF.Barline.type.NONE);
stavesmo133812.setContext(context);
stavesmo133812.draw();
smo133812v0.draw(context, stavesmo133812);
const stavesmo136185 = new VF.Stave(334, 1105.225303590934, 178);
stavesmo136185.setAttribute('id', 'stavesmo136185');
stavesmo136185.setBegBarType(VF.Barline.type.NONE);
stavesmo136185.setContext(context);
stavesmo136185.draw();
smo136185v0.draw(context, stavesmo136185);
const stavesmo138531 = new VF.Stave(334, 1221.225303590934, 178);
stavesmo138531.setAttribute('id', 'stavesmo138531');
stavesmo138531.setBegBarType(VF.Barline.type.NONE);
stavesmo138531.setContext(context);
stavesmo138531.draw();
smo138531v0.draw(context, stavesmo138531);
const stavesmo140882 = new VF.Stave(334, 1317.225303590934, 178);
stavesmo140882.setAttribute('id', 'stavesmo140882');
stavesmo140882.setBegBarType(VF.Barline.type.NONE);
stavesmo140882.setContext(context);
stavesmo140882.draw();
smo140882v0.draw(context, stavesmo140882);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo218947 = smo143170.getStemDirection();
smo143170.setStemDirection(dirsmo218947);
smo143171.setStemDirection(dirsmo218947);
smo143172.setStemDirection(dirsmo218947);
smo143173.setStemDirection(dirsmo218947);
const smo218947 = new VF.Beam([smo143170,smo143171,smo143172,smo143173]);
const dirsmo218948 = smo143174.getStemDirection();
smo143174.setStemDirection(dirsmo218948);
smo143175.setStemDirection(dirsmo218948);
smo143176.setStemDirection(dirsmo218948);
smo143177.setStemDirection(dirsmo218948);
const smo218948 = new VF.Beam([smo143174,smo143175,smo143176,smo143177]);
 
// formatting measures in staff group smo145509
fmtsmo1431938.format([smo143193v0], 164);
const stavesmo143193 = new VF.Stave(334, 1419.225303590934, 178);
stavesmo143193.setAttribute('id', 'stavesmo143193');
stavesmo143193.setBegBarType(VF.Barline.type.NONE);
stavesmo143193.setContext(context);
stavesmo143193.draw();
smo143193v0.draw(context, stavesmo143193);
smo218947.setContext(context);
smo218947.draw();
smo218948.setContext(context);
smo218948.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo1456668.format([smo145666v0], 164);
const stavesmo145666 = new VF.Stave(334, 1500.225303590934, 178);
stavesmo145666.setAttribute('id', 'stavesmo145666');
stavesmo145666.setBegBarType(VF.Barline.type.NONE);
stavesmo145666.setContext(context);
stavesmo145666.draw();
smo145666v0.draw(context, stavesmo145666);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo1481608.format([smo148160v0], 164);
const stavesmo148160 = new VF.Stave(334, 1605.225303590934, 178);
stavesmo148160.setAttribute('id', 'stavesmo148160');
stavesmo148160.setBegBarType(VF.Barline.type.NONE);
stavesmo148160.setContext(context);
stavesmo148160.draw();
smo148160v0.draw(context, stavesmo148160);
// create beam groups and tuplets for format grp smo153048 before formatting
 
// formatting measures in staff group smo153048
fmtsmo1505698.format([smo150569v0], 164);
const stavesmo150569 = new VF.Stave(334, 1687.225303590934, 178);
stavesmo150569.setAttribute('id', 'stavesmo150569');
stavesmo150569.setBegBarType(VF.Barline.type.NONE);
stavesmo150569.setContext(context);
stavesmo150569.draw();
smo150569v0.draw(context, stavesmo150569);
const fmtsmo1124539 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo112453v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112453v0ar = [];
const smo112433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo112433.setAttribute('id', 'smo112433');
const  smo227442 = new VF.Articulation('a.').setPosition(3);
smo112433.addModifier(smo227442, 0);
smo112453v0ar.push(smo112433);
const smo112436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo112436.setAttribute('id', 'smo112436');
smo112436.addModifier(new VF.Dot(), 0);
smo112453v0ar.push(smo112436);
smo112453v0.addTickables(smo112453v0ar)
fmtsmo1124539.joinVoices([smo112453v0]);
const fmtsmo1148809 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo114880v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114880v0ar = [];
const smo114860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo114860.setAttribute('id', 'smo114860');
const  smo227443 = new VF.Articulation('a.').setPosition(3);
smo114860.addModifier(smo227443, 0);
smo114880v0ar.push(smo114860);
const smo114863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo114863.setAttribute('id', 'smo114863');
smo114863.addModifier(new VF.Dot(), 0);
smo114880v0ar.push(smo114863);
smo114880v0.addTickables(smo114880v0ar)
fmtsmo1148809.joinVoices([smo114880v0]);
const fmtsmo1172989 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo117298v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117298v0ar = [];
const smo117278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117278.setAttribute('id', 'smo117278');
const  smo227444 = new VF.Articulation('a.').setPosition(3);
smo117278.addModifier(smo227444, 0);
smo117298v0ar.push(smo117278);
const smo117281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117281.setAttribute('id', 'smo117281');
smo117281.addModifier(new VF.Dot(), 0);
smo117298v0ar.push(smo117281);
smo117298v0.addTickables(smo117298v0ar)
fmtsmo1172989.joinVoices([smo117298v0]);
const fmtsmo1196729 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo119672v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119672v0ar = [];
const smo119652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119652.setAttribute('id', 'smo119652');
const  smo227445 = new VF.Articulation('a.').setPosition(3);
smo119652.addModifier(smo227445, 0);
smo119672v0ar.push(smo119652);
const smo119655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119655.setAttribute('id', 'smo119655');
smo119655.addModifier(new VF.Dot(), 0);
smo119672v0ar.push(smo119655);
smo119672v0.addTickables(smo119672v0ar)
fmtsmo1196729.joinVoices([smo119672v0]);
const fmtsmo1220469 = new VF.Formatter();
//
// voices and notes for stave 4 9
const smo122046v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122046v0ar = [];
const smo122024 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122024.setAttribute('id', 'smo122024');
const  smo227446 = new VF.Articulation('a.').setPosition(3);
smo122024.addModifier(smo227446, 0);
smo122046v0ar.push(smo122024);
const smo122027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122027.setAttribute('id', 'smo122027');
smo122046v0ar.push(smo122027);
const smo122028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122028.setAttribute('id', 'smo122028');
smo122046v0ar.push(smo122028);
const smo122029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo122029.setAttribute('id', 'smo122029');
smo122046v0ar.push(smo122029);
smo122046v0.addTickables(smo122046v0ar)
fmtsmo1220469.joinVoices([smo122046v0]);
const fmtsmo1243329 = new VF.Formatter();
//
// voices and notes for stave 5 9
const smo124332v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124332v0ar = [];
const smo124308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124308.setAttribute('id', 'smo124308');
smo124332v0ar.push(smo124308);
const smo124310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124310.setAttribute('id', 'smo124310');
smo124332v0ar.push(smo124310);
const smo124311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo124311.setAttribute('id', 'smo124311');
smo124332v0ar.push(smo124311);
const smo124312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo124312.setAttribute('id', 'smo124312');
smo124332v0ar.push(smo124312);
const smo124313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124313.setAttribute('id', 'smo124313');
smo124332v0ar.push(smo124313);
const smo124314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo124314.setAttribute('id', 'smo124314');
smo124332v0ar.push(smo124314);
const smo124315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo124315.setAttribute('id', 'smo124315');
smo124332v0ar.push(smo124315);
smo124332v0.addTickables(smo124332v0ar)
fmtsmo1243329.joinVoices([smo124332v0]);
const fmtsmo1267389 = new VF.Formatter();
//
// voices and notes for stave 6 9
const smo126738v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126738v0ar = [];
const smo126714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126714.setAttribute('id', 'smo126714');
smo126738v0ar.push(smo126714);
const smo126716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126716.setAttribute('id', 'smo126716');
smo126738v0ar.push(smo126716);
const smo126717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo126717.setAttribute('id', 'smo126717');
smo126738v0ar.push(smo126717);
const smo126718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126718.setAttribute('id', 'smo126718');
smo126738v0ar.push(smo126718);
const smo126719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126719.setAttribute('id', 'smo126719');
smo126738v0ar.push(smo126719);
const smo126720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126720.setAttribute('id', 'smo126720');
smo126738v0ar.push(smo126720);
const smo126721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo126721.setAttribute('id', 'smo126721');
smo126738v0ar.push(smo126721);
smo126738v0.addTickables(smo126738v0ar)
fmtsmo1267389.joinVoices([smo126738v0]);
const fmtsmo1291059 = new VF.Formatter();
//
// voices and notes for stave 7 9
const smo129105v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129105v0ar = [];
const smo129088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129088.setAttribute('id', 'smo129088');
smo129105v0ar.push(smo129088);
smo129105v0.addTickables(smo129105v0ar)
fmtsmo1291059.joinVoices([smo129105v0]);
const fmtsmo1314559 = new VF.Formatter();
//
// voices and notes for stave 8 9
const smo131455v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131455v0ar = [];
const smo131438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131438.setAttribute('id', 'smo131438');
smo131455v0ar.push(smo131438);
smo131455v0.addTickables(smo131455v0ar)
fmtsmo1314559.joinVoices([smo131455v0]);
const fmtsmo1338379 = new VF.Formatter();
//
// voices and notes for stave 9 9
const smo133837v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133837v0ar = [];
const smo133813 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133813.setAttribute('id', 'smo133813');
smo133837v0ar.push(smo133813);
const smo133815 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133815.setAttribute('id', 'smo133815');
smo133837v0ar.push(smo133815);
const smo133816 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo133816.setAttribute('id', 'smo133816');
smo133837v0ar.push(smo133816);
const smo133817 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133817.setAttribute('id', 'smo133817');
smo133837v0ar.push(smo133817);
const smo133818 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133818.setAttribute('id', 'smo133818');
smo133837v0ar.push(smo133818);
const smo133819 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133819.setAttribute('id', 'smo133819');
smo133837v0ar.push(smo133819);
const smo133820 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo133820.setAttribute('id', 'smo133820');
smo133837v0ar.push(smo133820);
smo133837v0.addTickables(smo133837v0ar)
fmtsmo1338379.joinVoices([smo133837v0]);
const fmtsmo1362109 = new VF.Formatter();
//
// voices and notes for stave 10 9
const smo136210v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136210v0ar = [];
const smo136186 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136186.setAttribute('id', 'smo136186');
smo136210v0ar.push(smo136186);
const smo136188 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136188.setAttribute('id', 'smo136188');
smo136210v0ar.push(smo136188);
const smo136189 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo136189.setAttribute('id', 'smo136189');
smo136210v0ar.push(smo136189);
const smo136190 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136190.setAttribute('id', 'smo136190');
smo136210v0ar.push(smo136190);
const smo136191 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136191.setAttribute('id', 'smo136191');
smo136210v0ar.push(smo136191);
const smo136192 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136192.setAttribute('id', 'smo136192');
smo136210v0ar.push(smo136192);
const smo136193 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo136193.setAttribute('id', 'smo136193');
smo136210v0ar.push(smo136193);
smo136210v0.addTickables(smo136210v0ar)
fmtsmo1362109.joinVoices([smo136210v0]);
const fmtsmo1385569 = new VF.Formatter();
//
// voices and notes for stave 11 9
const smo138556v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138556v0ar = [];
const smo138532 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138532.setAttribute('id', 'smo138532');
smo138556v0ar.push(smo138532);
const smo138534 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138534.setAttribute('id', 'smo138534');
smo138556v0ar.push(smo138534);
const smo138535 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo138535.setAttribute('id', 'smo138535');
smo138556v0ar.push(smo138535);
const smo138536 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo138536.setAttribute('id', 'smo138536');
smo138556v0ar.push(smo138536);
const smo138537 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138537.setAttribute('id', 'smo138537');
smo138556v0ar.push(smo138537);
const smo138538 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138538.setAttribute('id', 'smo138538');
smo138556v0ar.push(smo138538);
const smo138539 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo138539.setAttribute('id', 'smo138539');
smo138556v0ar.push(smo138539);
smo138556v0.addTickables(smo138556v0ar)
fmtsmo1385569.joinVoices([smo138556v0]);
const fmtsmo1409059 = new VF.Formatter();
//
// voices and notes for stave 12 9
const smo140905v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140905v0ar = [];
const smo140883 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140883.setAttribute('id', 'smo140883');
const  smo227447 = new VF.Articulation('a.').setPosition(3);
smo140883.addModifier(smo227447, 0);
smo140905v0ar.push(smo140883);
const smo140886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140886.setAttribute('id', 'smo140886');
smo140905v0ar.push(smo140886);
const smo140887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140887.setAttribute('id', 'smo140887');
smo140905v0ar.push(smo140887);
const smo140888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo140888.setAttribute('id', 'smo140888');
smo140905v0ar.push(smo140888);
smo140905v0.addTickables(smo140905v0ar)
fmtsmo1409059.joinVoices([smo140905v0]);
const fmtsmo1432189 = new VF.Formatter();
//
// voices and notes for stave 13 9
const smo143218v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143218v0ar = [];
const smo143194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143194.setAttribute('id', 'smo143194');
smo143218v0ar.push(smo143194);
const smo143196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143196.setAttribute('id', 'smo143196');
smo143218v0ar.push(smo143196);
const smo143197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo143197.setAttribute('id', 'smo143197');
smo143218v0ar.push(smo143197);
const smo143198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo143198.setAttribute('id', 'smo143198');
smo143218v0ar.push(smo143198);
const smo143199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143199.setAttribute('id', 'smo143199');
smo143218v0ar.push(smo143199);
const smo143200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo143200.setAttribute('id', 'smo143200');
smo143218v0ar.push(smo143200);
const smo143201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo143201.setAttribute('id', 'smo143201');
smo143218v0ar.push(smo143201);
smo143218v0.addTickables(smo143218v0ar)
fmtsmo1432189.joinVoices([smo143218v0]);
const fmtsmo1456849 = new VF.Formatter();
//
// voices and notes for stave 14 9
const smo145684v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145684v0ar = [];
const smo145667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145667.setAttribute('id', 'smo145667');
smo145684v0ar.push(smo145667);
smo145684v0.addTickables(smo145684v0ar)
fmtsmo1456849.joinVoices([smo145684v0]);
const fmtsmo1481839 = new VF.Formatter();
//
// voices and notes for stave 15 9
const smo148183v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148183v0ar = [];
const smo148161 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148161.setAttribute('id', 'smo148161');
const  smo227448 = new VF.Articulation('a.').setPosition(3);
smo148161.addModifier(smo227448, 0);
smo148183v0ar.push(smo148161);
const smo148164 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148164.setAttribute('id', 'smo148164');
smo148183v0ar.push(smo148164);
const smo148165 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148165.setAttribute('id', 'smo148165');
smo148183v0ar.push(smo148165);
const smo148166 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo148166.setAttribute('id', 'smo148166');
smo148183v0ar.push(smo148166);
smo148183v0.addTickables(smo148183v0ar)
fmtsmo1481839.joinVoices([smo148183v0]);
const fmtsmo1505979 = new VF.Formatter();
//
// voices and notes for stave 16 9
const smo150597v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150597v0ar = [];
const smo150570 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150570.setAttribute('id', 'smo150570');
const smo1505700acc = new VF.Accidental('n');
smo150570.addModifier(smo1505700acc, 0);
smo150597v0ar.push(smo150570);
const smo150571 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150571.setAttribute('id', 'smo150571');
smo150597v0ar.push(smo150571);
const smo150572 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150572.setAttribute('id', 'smo150572');
smo150597v0ar.push(smo150572);
const smo150573 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150573.setAttribute('id', 'smo150573');
smo150597v0ar.push(smo150573);
const smo150574 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150574.setAttribute('id', 'smo150574');
smo150597v0ar.push(smo150574);
const smo150575 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150575.setAttribute('id', 'smo150575');
smo150597v0ar.push(smo150575);
const smo150576 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150576.setAttribute('id', 'smo150576');
smo150597v0ar.push(smo150576);
const smo150577 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150577.setAttribute('id', 'smo150577');
smo150597v0ar.push(smo150577);
const smo150578 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150578.setAttribute('id', 'smo150578');
smo150597v0ar.push(smo150578);
const smo150579 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150579.setAttribute('id', 'smo150579');
smo150597v0ar.push(smo150579);
smo150597v0.addTickables(smo150597v0ar)
fmtsmo1505979.joinVoices([smo150597v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
const dirsmo218974 = smo122028.getStemDirection();
smo122028.setStemDirection(dirsmo218974);
smo122029.setStemDirection(dirsmo218974);
const smo218974 = new VF.Beam([smo122028,smo122029]);
 
// formatting measures in staff group smo153054
fmtsmo1124539.format([smo112453v0,smo114880v0,smo117298v0,smo119672v0,smo122046v0], 292);
const stavesmo112453 = new VF.Stave(512, 183.2253035909339, 306);
stavesmo112453.setAttribute('id', 'stavesmo112453');
stavesmo112453.setBegBarType(VF.Barline.type.NONE);
stavesmo112453.setSection('A', 0);
stavesmo112453.setContext(context);
stavesmo112453.draw();
smo112453v0.draw(context, stavesmo112453);
const stavesmo114880 = new VF.Stave(512, 288.2253035909339, 306);
stavesmo114880.setAttribute('id', 'stavesmo114880');
stavesmo114880.setBegBarType(VF.Barline.type.NONE);
stavesmo114880.setContext(context);
stavesmo114880.draw();
smo114880v0.draw(context, stavesmo114880);
const stavesmo117298 = new VF.Stave(512, 409.2253035909339, 306);
stavesmo117298.setAttribute('id', 'stavesmo117298');
stavesmo117298.setBegBarType(VF.Barline.type.NONE);
stavesmo117298.setContext(context);
stavesmo117298.draw();
smo117298v0.draw(context, stavesmo117298);
const stavesmo119672 = new VF.Stave(512, 539.2253035909339, 306);
stavesmo119672.setAttribute('id', 'stavesmo119672');
stavesmo119672.setBegBarType(VF.Barline.type.NONE);
stavesmo119672.setContext(context);
stavesmo119672.draw();
smo119672v0.draw(context, stavesmo119672);
const stavesmo122046 = new VF.Stave(512, 609.2253035909339, 306);
stavesmo122046.setAttribute('id', 'stavesmo122046');
stavesmo122046.setBegBarType(VF.Barline.type.NONE);
stavesmo122046.setContext(context);
stavesmo122046.draw();
smo122046v0.draw(context, stavesmo122046);
smo218974.setContext(context);
smo218974.draw();
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo218976 = smo124310.getStemDirection();
smo124310.setStemDirection(dirsmo218976);
smo124311.setStemDirection(dirsmo218976);
const smo218976 = new VF.Beam([smo124310,smo124311]);
const dirsmo218977 = smo124312.getStemDirection();
smo124312.setStemDirection(dirsmo218977);
smo124313.setStemDirection(dirsmo218977);
smo124314.setStemDirection(dirsmo218977);
smo124315.setStemDirection(dirsmo218977);
const smo218977 = new VF.Beam([smo124312,smo124313,smo124314,smo124315]);
const dirsmo218979 = smo126716.getStemDirection();
smo126716.setStemDirection(dirsmo218979);
smo126717.setStemDirection(dirsmo218979);
const smo218979 = new VF.Beam([smo126716,smo126717]);
const dirsmo218980 = smo126718.getStemDirection();
smo126718.setStemDirection(dirsmo218980);
smo126719.setStemDirection(dirsmo218980);
smo126720.setStemDirection(dirsmo218980);
smo126721.setStemDirection(dirsmo218980);
const smo218980 = new VF.Beam([smo126718,smo126719,smo126720,smo126721]);
 
// formatting measures in staff group smo153056
fmtsmo1243329.format([smo124332v0,smo126738v0,smo129105v0,smo131455v0], 292);
const stavesmo124332 = new VF.Stave(512, 690.2253035909339, 306);
stavesmo124332.setAttribute('id', 'stavesmo124332');
stavesmo124332.setBegBarType(VF.Barline.type.NONE);
stavesmo124332.setContext(context);
stavesmo124332.draw();
smo124332v0.draw(context, stavesmo124332);
smo218976.setContext(context);
smo218976.draw();
smo218977.setContext(context);
smo218977.draw();
const stavesmo126738 = new VF.Stave(512, 750.2253035909339, 306);
stavesmo126738.setAttribute('id', 'stavesmo126738');
stavesmo126738.setBegBarType(VF.Barline.type.NONE);
stavesmo126738.setContext(context);
stavesmo126738.draw();
smo126738v0.draw(context, stavesmo126738);
smo218979.setContext(context);
smo218979.draw();
smo218980.setContext(context);
smo218980.draw();
const stavesmo129105 = new VF.Stave(512, 811.2253035909339, 306);
stavesmo129105.setAttribute('id', 'stavesmo129105');
stavesmo129105.setBegBarType(VF.Barline.type.NONE);
stavesmo129105.setContext(context);
stavesmo129105.draw();
smo129105v0.draw(context, stavesmo129105);
const stavesmo131455 = new VF.Stave(512, 881.2253035909339, 306);
stavesmo131455.setAttribute('id', 'stavesmo131455');
stavesmo131455.setBegBarType(VF.Barline.type.NONE);
stavesmo131455.setContext(context);
stavesmo131455.draw();
smo131455v0.draw(context, stavesmo131455);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo218984 = smo133815.getStemDirection();
smo133815.setStemDirection(dirsmo218984);
smo133816.setStemDirection(dirsmo218984);
const smo218984 = new VF.Beam([smo133815,smo133816]);
const dirsmo218985 = smo133817.getStemDirection();
smo133817.setStemDirection(dirsmo218985);
smo133818.setStemDirection(dirsmo218985);
smo133819.setStemDirection(dirsmo218985);
smo133820.setStemDirection(dirsmo218985);
const smo218985 = new VF.Beam([smo133817,smo133818,smo133819,smo133820]);
const dirsmo218987 = smo136188.getStemDirection();
smo136188.setStemDirection(dirsmo218987);
smo136189.setStemDirection(dirsmo218987);
const smo218987 = new VF.Beam([smo136188,smo136189]);
const dirsmo218988 = smo136190.getStemDirection();
smo136190.setStemDirection(dirsmo218988);
smo136191.setStemDirection(dirsmo218988);
smo136192.setStemDirection(dirsmo218988);
smo136193.setStemDirection(dirsmo218988);
const smo218988 = new VF.Beam([smo136190,smo136191,smo136192,smo136193]);
const dirsmo218990 = smo138534.getStemDirection();
smo138534.setStemDirection(dirsmo218990);
smo138535.setStemDirection(dirsmo218990);
const smo218990 = new VF.Beam([smo138534,smo138535]);
const dirsmo218991 = smo138536.getStemDirection();
smo138536.setStemDirection(dirsmo218991);
smo138537.setStemDirection(dirsmo218991);
smo138538.setStemDirection(dirsmo218991);
smo138539.setStemDirection(dirsmo218991);
const smo218991 = new VF.Beam([smo138536,smo138537,smo138538,smo138539]);
const dirsmo218993 = smo140887.getStemDirection();
smo140887.setStemDirection(dirsmo218993);
smo140888.setStemDirection(dirsmo218993);
const smo218993 = new VF.Beam([smo140887,smo140888]);
 
// formatting measures in staff group smo153058
fmtsmo1338379.format([smo133837v0,smo136210v0,smo138556v0,smo140905v0], 292);
const stavesmo133837 = new VF.Stave(512, 986.2253035909339, 306);
stavesmo133837.setAttribute('id', 'stavesmo133837');
stavesmo133837.setBegBarType(VF.Barline.type.NONE);
stavesmo133837.setContext(context);
stavesmo133837.draw();
smo133837v0.draw(context, stavesmo133837);
smo218984.setContext(context);
smo218984.draw();
smo218985.setContext(context);
smo218985.draw();
const stavesmo136210 = new VF.Stave(512, 1105.225303590934, 306);
stavesmo136210.setAttribute('id', 'stavesmo136210');
stavesmo136210.setBegBarType(VF.Barline.type.NONE);
stavesmo136210.setContext(context);
stavesmo136210.draw();
smo136210v0.draw(context, stavesmo136210);
smo218987.setContext(context);
smo218987.draw();
smo218988.setContext(context);
smo218988.draw();
const stavesmo138556 = new VF.Stave(512, 1221.225303590934, 306);
stavesmo138556.setAttribute('id', 'stavesmo138556');
stavesmo138556.setBegBarType(VF.Barline.type.NONE);
stavesmo138556.setContext(context);
stavesmo138556.draw();
smo138556v0.draw(context, stavesmo138556);
smo218990.setContext(context);
smo218990.draw();
smo218991.setContext(context);
smo218991.draw();
const stavesmo140905 = new VF.Stave(512, 1317.225303590934, 306);
stavesmo140905.setAttribute('id', 'stavesmo140905');
stavesmo140905.setBegBarType(VF.Barline.type.NONE);
stavesmo140905.setContext(context);
stavesmo140905.draw();
smo140905v0.draw(context, stavesmo140905);
smo218993.setContext(context);
smo218993.draw();
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo218995 = smo143196.getStemDirection();
smo143196.setStemDirection(dirsmo218995);
smo143197.setStemDirection(dirsmo218995);
const smo218995 = new VF.Beam([smo143196,smo143197]);
const dirsmo218996 = smo143198.getStemDirection();
smo143198.setStemDirection(dirsmo218996);
smo143199.setStemDirection(dirsmo218996);
smo143200.setStemDirection(dirsmo218996);
smo143201.setStemDirection(dirsmo218996);
const smo218996 = new VF.Beam([smo143198,smo143199,smo143200,smo143201]);
 
// formatting measures in staff group smo145509
fmtsmo1432189.format([smo143218v0], 292);
const stavesmo143218 = new VF.Stave(512, 1419.225303590934, 306);
stavesmo143218.setAttribute('id', 'stavesmo143218');
stavesmo143218.setBegBarType(VF.Barline.type.NONE);
stavesmo143218.setContext(context);
stavesmo143218.draw();
smo143218v0.draw(context, stavesmo143218);
smo218995.setContext(context);
smo218995.draw();
smo218996.setContext(context);
smo218996.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo1456849.format([smo145684v0], 292);
const stavesmo145684 = new VF.Stave(512, 1500.225303590934, 306);
stavesmo145684.setAttribute('id', 'stavesmo145684');
stavesmo145684.setBegBarType(VF.Barline.type.NONE);
stavesmo145684.setContext(context);
stavesmo145684.draw();
smo145684v0.draw(context, stavesmo145684);
// create beam groups and tuplets for format grp smo150335 before formatting
const dirsmo218999 = smo148165.getStemDirection();
smo148165.setStemDirection(dirsmo218999);
smo148166.setStemDirection(dirsmo218999);
const smo218999 = new VF.Beam([smo148165,smo148166]);
 
// formatting measures in staff group smo150335
fmtsmo1481839.format([smo148183v0], 292);
const stavesmo148183 = new VF.Stave(512, 1605.225303590934, 306);
stavesmo148183.setAttribute('id', 'stavesmo148183');
stavesmo148183.setBegBarType(VF.Barline.type.NONE);
stavesmo148183.setContext(context);
stavesmo148183.draw();
smo148183v0.draw(context, stavesmo148183);
smo218999.setContext(context);
smo218999.draw();
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo219001 = smo150570.getStemDirection();
smo150570.setStemDirection(dirsmo219001);
smo150571.setStemDirection(dirsmo219001);
smo150572.setStemDirection(dirsmo219001);
smo150573.setStemDirection(dirsmo219001);
const smo219001 = new VF.Beam([smo150570,smo150571,smo150572,smo150573]);
const dirsmo219002 = smo150574.getStemDirection();
smo150574.setStemDirection(dirsmo219002);
smo150575.setStemDirection(dirsmo219002);
const smo219002 = new VF.Beam([smo150574,smo150575]);
const smo150580 = new VF.Tuplet([smo150571,smo150572,smo150573], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo153048
fmtsmo1505979.format([smo150597v0], 292);
const stavesmo150597 = new VF.Stave(512, 1687.225303590934, 306);
stavesmo150597.setAttribute('id', 'stavesmo150597');
stavesmo150597.setBegBarType(VF.Barline.type.NONE);
stavesmo150597.setContext(context);
stavesmo150597.draw();
smo150597v0.draw(context, stavesmo150597);
smo219001.setContext(context);
smo219001.draw();
smo219002.setContext(context);
smo219002.draw();
smo150580.setContext(context).draw();
const fmtsmo11247410 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo112474v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112474v0ar = [];
const smo112454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo112454.setAttribute('id', 'smo112454');
smo112474v0ar.push(smo112454);
const smo112455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo112455.setAttribute('id', 'smo112455');
smo112474v0ar.push(smo112455);
const smo112456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo112456.setAttribute('id', 'smo112456');
smo112474v0ar.push(smo112456);
const smo112457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo112457.setAttribute('id', 'smo112457');
smo112474v0ar.push(smo112457);
const smo112458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo112458.setAttribute('id', 'smo112458');
smo112474v0ar.push(smo112458);
smo112474v0.addTickables(smo112474v0ar)
fmtsmo11247410.joinVoices([smo112474v0]);
const fmtsmo11490110 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo114901v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114901v0ar = [];
const smo114881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114881.setAttribute('id', 'smo114881');
smo114901v0ar.push(smo114881);
const smo114882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo114882.setAttribute('id', 'smo114882');
smo114901v0ar.push(smo114882);
const smo114883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114883.setAttribute('id', 'smo114883');
smo114901v0ar.push(smo114883);
const smo114884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114884.setAttribute('id', 'smo114884');
smo114901v0ar.push(smo114884);
const smo114885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo114885.setAttribute('id', 'smo114885');
smo114901v0ar.push(smo114885);
smo114901v0.addTickables(smo114901v0ar)
fmtsmo11490110.joinVoices([smo114901v0]);
const fmtsmo11731910 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo117319v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117319v0ar = [];
const smo117299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117299.setAttribute('id', 'smo117299');
smo117319v0ar.push(smo117299);
const smo117300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117300.setAttribute('id', 'smo117300');
smo117319v0ar.push(smo117300);
const smo117301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo117301.setAttribute('id', 'smo117301');
smo117319v0ar.push(smo117301);
const smo117302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo117302.setAttribute('id', 'smo117302');
smo117319v0ar.push(smo117302);
const smo117303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117303.setAttribute('id', 'smo117303');
smo117319v0ar.push(smo117303);
smo117319v0.addTickables(smo117319v0ar)
fmtsmo11731910.joinVoices([smo117319v0]);
const fmtsmo11969310 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo119693v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119693v0ar = [];
const smo119673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119673.setAttribute('id', 'smo119673');
smo119693v0ar.push(smo119673);
const smo119674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119674.setAttribute('id', 'smo119674');
smo119693v0ar.push(smo119674);
const smo119675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo119675.setAttribute('id', 'smo119675');
smo119693v0ar.push(smo119675);
const smo119676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo119676.setAttribute('id', 'smo119676');
smo119693v0ar.push(smo119676);
const smo119677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo119677.setAttribute('id', 'smo119677');
smo119693v0ar.push(smo119677);
smo119693v0.addTickables(smo119693v0ar)
fmtsmo11969310.joinVoices([smo119693v0]);
const fmtsmo12206410 = new VF.Formatter();
//
// voices and notes for stave 4 10
const smo122064v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122064v0ar = [];
const smo122047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo122047.setAttribute('id', 'smo122047');
smo122047.addModifier(new VF.Dot(), 0);
smo122064v0ar.push(smo122047);
const smo122048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo122048.setAttribute('id', 'smo122048');
smo122064v0ar.push(smo122048);
smo122064v0.addTickables(smo122064v0ar)
fmtsmo12206410.joinVoices([smo122064v0]);
const fmtsmo12435410 = new VF.Formatter();
//
// voices and notes for stave 5 10
const smo124354v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124354v0ar = [];
const smo124333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo124333.setAttribute('id', 'smo124333');
smo124354v0ar.push(smo124333);
const smo124334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo124334.setAttribute('id', 'smo124334');
smo124354v0ar.push(smo124334);
const smo124335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo124335.setAttribute('id', 'smo124335');
smo124354v0ar.push(smo124335);
const smo124336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo124336.setAttribute('id', 'smo124336');
smo124354v0ar.push(smo124336);
const smo124337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124337.setAttribute('id', 'smo124337');
smo124354v0ar.push(smo124337);
const smo124338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo124338.setAttribute('id', 'smo124338');
smo124354v0ar.push(smo124338);
smo124354v0.addTickables(smo124354v0ar)
fmtsmo12435410.joinVoices([smo124354v0]);
const fmtsmo12676010 = new VF.Formatter();
//
// voices and notes for stave 6 10
const smo126760v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126760v0ar = [];
const smo126739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126739.setAttribute('id', 'smo126739');
smo126760v0ar.push(smo126739);
const smo126740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126740.setAttribute('id', 'smo126740');
smo126760v0ar.push(smo126740);
const smo126741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126741.setAttribute('id', 'smo126741');
smo126760v0ar.push(smo126741);
const smo126742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126742.setAttribute('id', 'smo126742');
smo126760v0ar.push(smo126742);
const smo126743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126743.setAttribute('id', 'smo126743');
smo126760v0ar.push(smo126743);
const smo126744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126744.setAttribute('id', 'smo126744');
smo126760v0ar.push(smo126744);
smo126760v0.addTickables(smo126760v0ar)
fmtsmo12676010.joinVoices([smo126760v0]);
const fmtsmo12912210 = new VF.Formatter();
//
// voices and notes for stave 7 10
const smo129122v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129122v0ar = [];
const smo129106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129106.setAttribute('id', 'smo129106');
smo129122v0ar.push(smo129106);
smo129122v0.addTickables(smo129122v0ar)
fmtsmo12912210.joinVoices([smo129122v0]);
const fmtsmo13147210 = new VF.Formatter();
//
// voices and notes for stave 8 10
const smo131472v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131472v0ar = [];
const smo131456 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131456.setAttribute('id', 'smo131456');
smo131472v0ar.push(smo131456);
smo131472v0.addTickables(smo131472v0ar)
fmtsmo13147210.joinVoices([smo131472v0]);
const fmtsmo13385910 = new VF.Formatter();
//
// voices and notes for stave 9 10
const smo133859v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133859v0ar = [];
const smo133838 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo133838.setAttribute('id', 'smo133838');
smo133859v0ar.push(smo133838);
const smo133839 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo133839.setAttribute('id', 'smo133839');
smo133859v0ar.push(smo133839);
const smo133840 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo133840.setAttribute('id', 'smo133840');
smo133859v0ar.push(smo133840);
const smo133841 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo133841.setAttribute('id', 'smo133841');
smo133859v0ar.push(smo133841);
const smo133842 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133842.setAttribute('id', 'smo133842');
smo133859v0ar.push(smo133842);
const smo133843 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133843.setAttribute('id', 'smo133843');
smo133859v0ar.push(smo133843);
smo133859v0.addTickables(smo133859v0ar)
fmtsmo13385910.joinVoices([smo133859v0]);
const fmtsmo13623210 = new VF.Formatter();
//
// voices and notes for stave 10 10
const smo136232v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136232v0ar = [];
const smo136211 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo136211.setAttribute('id', 'smo136211');
smo136232v0ar.push(smo136211);
const smo136212 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo136212.setAttribute('id', 'smo136212');
smo136232v0ar.push(smo136212);
const smo136213 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo136213.setAttribute('id', 'smo136213');
smo136232v0ar.push(smo136213);
const smo136214 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo136214.setAttribute('id', 'smo136214');
smo136232v0ar.push(smo136214);
const smo136215 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136215.setAttribute('id', 'smo136215');
smo136232v0ar.push(smo136215);
const smo136216 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136216.setAttribute('id', 'smo136216');
smo136232v0ar.push(smo136216);
smo136232v0.addTickables(smo136232v0ar)
fmtsmo13623210.joinVoices([smo136232v0]);
const fmtsmo13857810 = new VF.Formatter();
//
// voices and notes for stave 11 10
const smo138578v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138578v0ar = [];
const smo138557 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138557.setAttribute('id', 'smo138557');
smo138578v0ar.push(smo138557);
const smo138558 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138558.setAttribute('id', 'smo138558');
smo138578v0ar.push(smo138558);
const smo138559 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138559.setAttribute('id', 'smo138559');
smo138578v0ar.push(smo138559);
const smo138560 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138560.setAttribute('id', 'smo138560');
smo138578v0ar.push(smo138560);
const smo138561 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo138561.setAttribute('id', 'smo138561');
smo138578v0ar.push(smo138561);
const smo138562 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138562.setAttribute('id', 'smo138562');
smo138578v0ar.push(smo138562);
smo138578v0.addTickables(smo138578v0ar)
fmtsmo13857810.joinVoices([smo138578v0]);
const fmtsmo14092310 = new VF.Formatter();
//
// voices and notes for stave 12 10
const smo140923v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140923v0ar = [];
const smo140906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo140906.setAttribute('id', 'smo140906');
smo140906.addModifier(new VF.Dot(), 0);
smo140923v0ar.push(smo140906);
const smo140907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/2/n"]}'))
smo140907.setAttribute('id', 'smo140907');
smo140923v0ar.push(smo140907);
smo140923v0.addTickables(smo140923v0ar)
fmtsmo14092310.joinVoices([smo140923v0]);
const fmtsmo14324010 = new VF.Formatter();
//
// voices and notes for stave 13 10
const smo143240v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143240v0ar = [];
const smo143219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo143219.setAttribute('id', 'smo143219');
smo143240v0ar.push(smo143219);
const smo143220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo143220.setAttribute('id', 'smo143220');
smo143240v0ar.push(smo143220);
const smo143221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo143221.setAttribute('id', 'smo143221');
smo143240v0ar.push(smo143221);
const smo143222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo143222.setAttribute('id', 'smo143222');
smo143240v0ar.push(smo143222);
const smo143223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143223.setAttribute('id', 'smo143223');
smo143240v0ar.push(smo143223);
const smo143224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo143224.setAttribute('id', 'smo143224');
smo143240v0ar.push(smo143224);
smo143240v0.addTickables(smo143240v0ar)
fmtsmo14324010.joinVoices([smo143240v0]);
const fmtsmo14570110 = new VF.Formatter();
//
// voices and notes for stave 14 10
const smo145701v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145701v0ar = [];
const smo145685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145685.setAttribute('id', 'smo145685');
smo145701v0ar.push(smo145685);
smo145701v0.addTickables(smo145701v0ar)
fmtsmo14570110.joinVoices([smo145701v0]);
const fmtsmo14820110 = new VF.Formatter();
//
// voices and notes for stave 15 10
const smo148201v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148201v0ar = [];
const smo148184 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo148184.setAttribute('id', 'smo148184');
smo148184.addModifier(new VF.Dot(), 0);
smo148201v0ar.push(smo148184);
const smo148185 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo148185.setAttribute('id', 'smo148185');
smo148201v0ar.push(smo148185);
smo148201v0.addTickables(smo148201v0ar)
fmtsmo14820110.joinVoices([smo148201v0]);
const fmtsmo15062410 = new VF.Formatter();
//
// voices and notes for stave 16 10
const smo150624v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150624v0ar = [];
const smo150598 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150598.setAttribute('id', 'smo150598');
const smo1505980acc = new VF.Accidental('n');
smo150598.addModifier(smo1505980acc, 0);
smo150624v0ar.push(smo150598);
const smo150599 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150599.setAttribute('id', 'smo150599');
smo150624v0ar.push(smo150599);
const smo150600 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150600.setAttribute('id', 'smo150600');
smo150624v0ar.push(smo150600);
const smo150601 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150601.setAttribute('id', 'smo150601');
smo150624v0ar.push(smo150601);
const smo150602 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150602.setAttribute('id', 'smo150602');
smo150624v0ar.push(smo150602);
const smo150603 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150603.setAttribute('id', 'smo150603');
smo150624v0ar.push(smo150603);
const smo150604 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150604.setAttribute('id', 'smo150604');
smo150624v0ar.push(smo150604);
const smo150605 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150605.setAttribute('id', 'smo150605');
smo150624v0ar.push(smo150605);
const smo150606 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150606.setAttribute('id', 'smo150606');
smo150624v0ar.push(smo150606);
const smo150607 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150607.setAttribute('id', 'smo150607');
smo150624v0ar.push(smo150607);
smo150624v0.addTickables(smo150624v0ar)
fmtsmo15062410.joinVoices([smo150624v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
 
// formatting measures in staff group smo153054
fmtsmo11247410.format([smo112474v0,smo114901v0,smo117319v0,smo119693v0,smo122064v0], 282);
const stavesmo112474 = new VF.Stave(818, 183.2253035909339, 296);
stavesmo112474.setAttribute('id', 'stavesmo112474');
stavesmo112474.setBegBarType(VF.Barline.type.NONE);
stavesmo112474.setContext(context);
stavesmo112474.draw();
smo112474v0.draw(context, stavesmo112474);
const stavesmo114901 = new VF.Stave(818, 288.2253035909339, 296);
stavesmo114901.setAttribute('id', 'stavesmo114901');
stavesmo114901.setBegBarType(VF.Barline.type.NONE);
stavesmo114901.setContext(context);
stavesmo114901.draw();
smo114901v0.draw(context, stavesmo114901);
const stavesmo117319 = new VF.Stave(818, 409.2253035909339, 296);
stavesmo117319.setAttribute('id', 'stavesmo117319');
stavesmo117319.setBegBarType(VF.Barline.type.NONE);
stavesmo117319.setContext(context);
stavesmo117319.draw();
smo117319v0.draw(context, stavesmo117319);
const stavesmo119693 = new VF.Stave(818, 539.2253035909339, 296);
stavesmo119693.setAttribute('id', 'stavesmo119693');
stavesmo119693.setBegBarType(VF.Barline.type.NONE);
stavesmo119693.setContext(context);
stavesmo119693.draw();
smo119693v0.draw(context, stavesmo119693);
const stavesmo122064 = new VF.Stave(818, 609.2253035909339, 296);
stavesmo122064.setAttribute('id', 'stavesmo122064');
stavesmo122064.setBegBarType(VF.Barline.type.NONE);
stavesmo122064.setContext(context);
stavesmo122064.draw();
smo122064v0.draw(context, stavesmo122064);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo219026 = smo124334.getStemDirection();
smo124334.setStemDirection(dirsmo219026);
smo124335.setStemDirection(dirsmo219026);
const smo219026 = new VF.Beam([smo124334,smo124335]);
const dirsmo219027 = smo124336.getStemDirection();
smo124336.setStemDirection(dirsmo219027);
smo124337.setStemDirection(dirsmo219027);
const smo219027 = new VF.Beam([smo124336,smo124337]);
const dirsmo219029 = smo126740.getStemDirection();
smo126740.setStemDirection(dirsmo219029);
smo126741.setStemDirection(dirsmo219029);
const smo219029 = new VF.Beam([smo126740,smo126741]);
const dirsmo219030 = smo126742.getStemDirection();
smo126742.setStemDirection(dirsmo219030);
smo126743.setStemDirection(dirsmo219030);
const smo219030 = new VF.Beam([smo126742,smo126743]);
 
// formatting measures in staff group smo153056
fmtsmo12435410.format([smo124354v0,smo126760v0,smo129122v0,smo131472v0], 282);
const stavesmo124354 = new VF.Stave(818, 690.2253035909339, 296);
stavesmo124354.setAttribute('id', 'stavesmo124354');
stavesmo124354.setBegBarType(VF.Barline.type.NONE);
stavesmo124354.setContext(context);
stavesmo124354.draw();
smo124354v0.draw(context, stavesmo124354);
smo219026.setContext(context);
smo219026.draw();
smo219027.setContext(context);
smo219027.draw();
const stavesmo126760 = new VF.Stave(818, 750.2253035909339, 296);
stavesmo126760.setAttribute('id', 'stavesmo126760');
stavesmo126760.setBegBarType(VF.Barline.type.NONE);
stavesmo126760.setContext(context);
stavesmo126760.draw();
smo126760v0.draw(context, stavesmo126760);
smo219029.setContext(context);
smo219029.draw();
smo219030.setContext(context);
smo219030.draw();
const stavesmo129122 = new VF.Stave(818, 811.2253035909339, 296);
stavesmo129122.setAttribute('id', 'stavesmo129122');
stavesmo129122.setBegBarType(VF.Barline.type.NONE);
stavesmo129122.setContext(context);
stavesmo129122.draw();
smo129122v0.draw(context, stavesmo129122);
const stavesmo131472 = new VF.Stave(818, 881.2253035909339, 296);
stavesmo131472.setAttribute('id', 'stavesmo131472');
stavesmo131472.setBegBarType(VF.Barline.type.NONE);
stavesmo131472.setContext(context);
stavesmo131472.draw();
smo131472v0.draw(context, stavesmo131472);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo219034 = smo133839.getStemDirection();
smo133839.setStemDirection(dirsmo219034);
smo133840.setStemDirection(dirsmo219034);
const smo219034 = new VF.Beam([smo133839,smo133840]);
const dirsmo219035 = smo133841.getStemDirection();
smo133841.setStemDirection(dirsmo219035);
smo133842.setStemDirection(dirsmo219035);
const smo219035 = new VF.Beam([smo133841,smo133842]);
const dirsmo219037 = smo136212.getStemDirection();
smo136212.setStemDirection(dirsmo219037);
smo136213.setStemDirection(dirsmo219037);
const smo219037 = new VF.Beam([smo136212,smo136213]);
const dirsmo219038 = smo136214.getStemDirection();
smo136214.setStemDirection(dirsmo219038);
smo136215.setStemDirection(dirsmo219038);
const smo219038 = new VF.Beam([smo136214,smo136215]);
const dirsmo219040 = smo138558.getStemDirection();
smo138558.setStemDirection(dirsmo219040);
smo138559.setStemDirection(dirsmo219040);
const smo219040 = new VF.Beam([smo138558,smo138559]);
const dirsmo219041 = smo138560.getStemDirection();
smo138560.setStemDirection(dirsmo219041);
smo138561.setStemDirection(dirsmo219041);
const smo219041 = new VF.Beam([smo138560,smo138561]);
 
// formatting measures in staff group smo153058
fmtsmo13385910.format([smo133859v0,smo136232v0,smo138578v0,smo140923v0], 282);
const stavesmo133859 = new VF.Stave(818, 986.2253035909339, 296);
stavesmo133859.setAttribute('id', 'stavesmo133859');
stavesmo133859.setBegBarType(VF.Barline.type.NONE);
stavesmo133859.setContext(context);
stavesmo133859.draw();
smo133859v0.draw(context, stavesmo133859);
smo219034.setContext(context);
smo219034.draw();
smo219035.setContext(context);
smo219035.draw();
const stavesmo136232 = new VF.Stave(818, 1105.225303590934, 296);
stavesmo136232.setAttribute('id', 'stavesmo136232');
stavesmo136232.setBegBarType(VF.Barline.type.NONE);
stavesmo136232.setContext(context);
stavesmo136232.draw();
smo136232v0.draw(context, stavesmo136232);
smo219037.setContext(context);
smo219037.draw();
smo219038.setContext(context);
smo219038.draw();
const stavesmo138578 = new VF.Stave(818, 1221.225303590934, 296);
stavesmo138578.setAttribute('id', 'stavesmo138578');
stavesmo138578.setBegBarType(VF.Barline.type.NONE);
stavesmo138578.setContext(context);
stavesmo138578.draw();
smo138578v0.draw(context, stavesmo138578);
smo219040.setContext(context);
smo219040.draw();
smo219041.setContext(context);
smo219041.draw();
const stavesmo140923 = new VF.Stave(818, 1317.225303590934, 296);
stavesmo140923.setAttribute('id', 'stavesmo140923');
stavesmo140923.setBegBarType(VF.Barline.type.NONE);
stavesmo140923.setContext(context);
stavesmo140923.draw();
smo140923v0.draw(context, stavesmo140923);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo219044 = smo143220.getStemDirection();
smo143220.setStemDirection(dirsmo219044);
smo143221.setStemDirection(dirsmo219044);
const smo219044 = new VF.Beam([smo143220,smo143221]);
const dirsmo219045 = smo143222.getStemDirection();
smo143222.setStemDirection(dirsmo219045);
smo143223.setStemDirection(dirsmo219045);
const smo219045 = new VF.Beam([smo143222,smo143223]);
 
// formatting measures in staff group smo145509
fmtsmo14324010.format([smo143240v0], 282);
const stavesmo143240 = new VF.Stave(818, 1419.225303590934, 296);
stavesmo143240.setAttribute('id', 'stavesmo143240');
stavesmo143240.setBegBarType(VF.Barline.type.NONE);
stavesmo143240.setContext(context);
stavesmo143240.draw();
smo143240v0.draw(context, stavesmo143240);
smo219044.setContext(context);
smo219044.draw();
smo219045.setContext(context);
smo219045.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo14570110.format([smo145701v0], 282);
const stavesmo145701 = new VF.Stave(818, 1500.225303590934, 296);
stavesmo145701.setAttribute('id', 'stavesmo145701');
stavesmo145701.setBegBarType(VF.Barline.type.NONE);
stavesmo145701.setContext(context);
stavesmo145701.draw();
smo145701v0.draw(context, stavesmo145701);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo14820110.format([smo148201v0], 282);
const stavesmo148201 = new VF.Stave(818, 1605.225303590934, 296);
stavesmo148201.setAttribute('id', 'stavesmo148201');
stavesmo148201.setBegBarType(VF.Barline.type.NONE);
stavesmo148201.setContext(context);
stavesmo148201.draw();
smo148201v0.draw(context, stavesmo148201);
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo219049 = smo150598.getStemDirection();
smo150598.setStemDirection(dirsmo219049);
smo150599.setStemDirection(dirsmo219049);
smo150600.setStemDirection(dirsmo219049);
smo150601.setStemDirection(dirsmo219049);
const smo219049 = new VF.Beam([smo150598,smo150599,smo150600,smo150601]);
const dirsmo219050 = smo150602.getStemDirection();
smo150602.setStemDirection(dirsmo219050);
smo150603.setStemDirection(dirsmo219050);
const smo219050 = new VF.Beam([smo150602,smo150603]);
const smo150608 = new VF.Tuplet([smo150599,smo150600,smo150601], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo153048
fmtsmo15062410.format([smo150624v0], 282);
const stavesmo150624 = new VF.Stave(818, 1687.225303590934, 296);
stavesmo150624.setAttribute('id', 'stavesmo150624');
stavesmo150624.setBegBarType(VF.Barline.type.NONE);
stavesmo150624.setContext(context);
stavesmo150624.draw();
smo150624v0.draw(context, stavesmo150624);
smo219049.setContext(context);
smo219049.draw();
smo219050.setContext(context);
smo219050.draw();
smo150608.setContext(context).draw();
const fmtsmo11249711 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo112497v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112497v0ar = [];
const smo112475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo112475.setAttribute('id', 'smo112475');
smo112497v0ar.push(smo112475);
const smo112476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo112476.setAttribute('id', 'smo112476');
smo112497v0ar.push(smo112476);
const smo112477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112477.setAttribute('id', 'smo112477');
smo112497v0ar.push(smo112477);
const smo112478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo112478.setAttribute('id', 'smo112478');
smo112497v0ar.push(smo112478);
const smo112479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112479.setAttribute('id', 'smo112479');
smo112497v0ar.push(smo112479);
const smo112480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112480.setAttribute('id', 'smo112480');
smo112497v0ar.push(smo112480);
const smo112481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo112481.setAttribute('id', 'smo112481');
smo112497v0ar.push(smo112481);
smo112497v0.addTickables(smo112497v0ar)
fmtsmo11249711.joinVoices([smo112497v0]);
const fmtsmo11492411 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo114924v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114924v0ar = [];
const smo114902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114902.setAttribute('id', 'smo114902');
smo114924v0ar.push(smo114902);
const smo114903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo114903.setAttribute('id', 'smo114903');
smo114924v0ar.push(smo114903);
const smo114904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114904.setAttribute('id', 'smo114904');
smo114924v0ar.push(smo114904);
const smo114905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114905.setAttribute('id', 'smo114905');
smo114924v0ar.push(smo114905);
const smo114906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114906.setAttribute('id', 'smo114906');
smo114924v0ar.push(smo114906);
const smo114907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114907.setAttribute('id', 'smo114907');
smo114924v0ar.push(smo114907);
const smo114908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114908.setAttribute('id', 'smo114908');
smo114924v0ar.push(smo114908);
smo114924v0.addTickables(smo114924v0ar)
fmtsmo11492411.joinVoices([smo114924v0]);
const fmtsmo11734211 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo117342v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117342v0ar = [];
const smo117320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117320.setAttribute('id', 'smo117320');
smo117342v0ar.push(smo117320);
const smo117321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo117321.setAttribute('id', 'smo117321');
smo117342v0ar.push(smo117321);
const smo117322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo117322.setAttribute('id', 'smo117322');
smo117342v0ar.push(smo117322);
const smo117323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117323.setAttribute('id', 'smo117323');
smo117342v0ar.push(smo117323);
const smo117324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo117324.setAttribute('id', 'smo117324');
smo117342v0ar.push(smo117324);
const smo117325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo117325.setAttribute('id', 'smo117325');
smo117342v0ar.push(smo117325);
const smo117326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo117326.setAttribute('id', 'smo117326');
smo117342v0ar.push(smo117326);
smo117342v0.addTickables(smo117342v0ar)
fmtsmo11734211.joinVoices([smo117342v0]);
const fmtsmo11971611 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo119716v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119716v0ar = [];
const smo119694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo119694.setAttribute('id', 'smo119694');
smo119716v0ar.push(smo119694);
const smo119695 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo119695.setAttribute('id', 'smo119695');
smo119716v0ar.push(smo119695);
const smo119696 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo119696.setAttribute('id', 'smo119696');
smo119716v0ar.push(smo119696);
const smo119697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119697.setAttribute('id', 'smo119697');
smo119716v0ar.push(smo119697);
const smo119698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo119698.setAttribute('id', 'smo119698');
smo119716v0ar.push(smo119698);
const smo119699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo119699.setAttribute('id', 'smo119699');
smo119716v0ar.push(smo119699);
const smo119700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo119700.setAttribute('id', 'smo119700');
smo119716v0ar.push(smo119700);
smo119716v0.addTickables(smo119716v0ar)
fmtsmo11971611.joinVoices([smo119716v0]);
const fmtsmo12208411 = new VF.Formatter();
//
// voices and notes for stave 4 11
const smo122084v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122084v0ar = [];
const smo122065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122065.setAttribute('id', 'smo122065');
const  smo227517 = new VF.Articulation('a.').setPosition(3);
smo122065.addModifier(smo227517, 0);
smo122084v0ar.push(smo122065);
const smo122067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122067.setAttribute('id', 'smo122067');
smo122084v0ar.push(smo122067);
const smo122068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo122068.setAttribute('id', 'smo122068');
smo122084v0ar.push(smo122068);
smo122084v0.addTickables(smo122084v0ar)
fmtsmo12208411.joinVoices([smo122084v0]);
const fmtsmo12437811 = new VF.Formatter();
//
// voices and notes for stave 5 11
const smo124378v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124378v0ar = [];
const smo124355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo124355.setAttribute('id', 'smo124355');
smo124378v0ar.push(smo124355);
const smo124356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124356.setAttribute('id', 'smo124356');
smo124378v0ar.push(smo124356);
const smo124357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo124357.setAttribute('id', 'smo124357');
smo124378v0ar.push(smo124357);
const smo124358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo124358.setAttribute('id', 'smo124358');
smo124378v0ar.push(smo124358);
const smo124359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124359.setAttribute('id', 'smo124359');
smo124378v0ar.push(smo124359);
const smo124360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo124360.setAttribute('id', 'smo124360');
smo124378v0ar.push(smo124360);
const smo124361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124361.setAttribute('id', 'smo124361');
smo124378v0ar.push(smo124361);
const smo124362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124362.setAttribute('id', 'smo124362');
smo124378v0ar.push(smo124362);
smo124378v0.addTickables(smo124378v0ar)
fmtsmo12437811.joinVoices([smo124378v0]);
const fmtsmo12678411 = new VF.Formatter();
//
// voices and notes for stave 6 11
const smo126784v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126784v0ar = [];
const smo126761 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126761.setAttribute('id', 'smo126761');
smo126784v0ar.push(smo126761);
const smo126762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126762.setAttribute('id', 'smo126762');
smo126784v0ar.push(smo126762);
const smo126763 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126763.setAttribute('id', 'smo126763');
smo126784v0ar.push(smo126763);
const smo126764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo126764.setAttribute('id', 'smo126764');
smo126784v0ar.push(smo126764);
const smo126765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126765.setAttribute('id', 'smo126765');
smo126784v0ar.push(smo126765);
const smo126766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126766.setAttribute('id', 'smo126766');
smo126784v0ar.push(smo126766);
const smo126767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126767.setAttribute('id', 'smo126767');
smo126784v0ar.push(smo126767);
const smo126768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126768.setAttribute('id', 'smo126768');
smo126784v0ar.push(smo126768);
smo126784v0.addTickables(smo126784v0ar)
fmtsmo12678411.joinVoices([smo126784v0]);
const fmtsmo12913911 = new VF.Formatter();
//
// voices and notes for stave 7 11
const smo129139v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129139v0ar = [];
const smo129123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129123.setAttribute('id', 'smo129123');
smo129139v0ar.push(smo129123);
smo129139v0.addTickables(smo129139v0ar)
fmtsmo12913911.joinVoices([smo129139v0]);
const fmtsmo13148911 = new VF.Formatter();
//
// voices and notes for stave 8 11
const smo131489v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131489v0ar = [];
const smo131473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131473.setAttribute('id', 'smo131473');
smo131489v0ar.push(smo131473);
smo131489v0.addTickables(smo131489v0ar)
fmtsmo13148911.joinVoices([smo131489v0]);
const fmtsmo13388311 = new VF.Formatter();
//
// voices and notes for stave 9 11
const smo133883v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133883v0ar = [];
const smo133860 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo133860.setAttribute('id', 'smo133860');
smo133883v0ar.push(smo133860);
const smo133861 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133861.setAttribute('id', 'smo133861');
smo133883v0ar.push(smo133861);
const smo133862 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133862.setAttribute('id', 'smo133862');
smo133883v0ar.push(smo133862);
const smo133863 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo133863.setAttribute('id', 'smo133863');
smo133883v0ar.push(smo133863);
const smo133864 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133864.setAttribute('id', 'smo133864');
smo133883v0ar.push(smo133864);
const smo133865 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo133865.setAttribute('id', 'smo133865');
smo133883v0ar.push(smo133865);
const smo133866 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133866.setAttribute('id', 'smo133866');
smo133883v0ar.push(smo133866);
const smo133867 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo133867.setAttribute('id', 'smo133867');
smo133883v0ar.push(smo133867);
smo133883v0.addTickables(smo133883v0ar)
fmtsmo13388311.joinVoices([smo133883v0]);
const fmtsmo13625611 = new VF.Formatter();
//
// voices and notes for stave 10 11
const smo136256v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136256v0ar = [];
const smo136233 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136233.setAttribute('id', 'smo136233');
smo136256v0ar.push(smo136233);
const smo136234 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136234.setAttribute('id', 'smo136234');
smo136256v0ar.push(smo136234);
const smo136235 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo136235.setAttribute('id', 'smo136235');
smo136256v0ar.push(smo136235);
const smo136236 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo136236.setAttribute('id', 'smo136236');
smo136256v0ar.push(smo136236);
const smo136237 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136237.setAttribute('id', 'smo136237');
smo136256v0ar.push(smo136237);
const smo136238 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo136238.setAttribute('id', 'smo136238');
smo136256v0ar.push(smo136238);
const smo136239 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136239.setAttribute('id', 'smo136239');
smo136256v0ar.push(smo136239);
const smo136240 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136240.setAttribute('id', 'smo136240');
smo136256v0ar.push(smo136240);
smo136256v0.addTickables(smo136256v0ar)
fmtsmo13625611.joinVoices([smo136256v0]);
const fmtsmo13860211 = new VF.Formatter();
//
// voices and notes for stave 11 11
const smo138602v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138602v0ar = [];
const smo138579 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138579.setAttribute('id', 'smo138579');
smo138602v0ar.push(smo138579);
const smo138580 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138580.setAttribute('id', 'smo138580');
smo138602v0ar.push(smo138580);
const smo138581 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo138581.setAttribute('id', 'smo138581');
smo138602v0ar.push(smo138581);
const smo138582 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo138582.setAttribute('id', 'smo138582');
smo138602v0ar.push(smo138582);
const smo138583 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138583.setAttribute('id', 'smo138583');
smo138602v0ar.push(smo138583);
const smo138584 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo138584.setAttribute('id', 'smo138584');
smo138602v0ar.push(smo138584);
const smo138585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138585.setAttribute('id', 'smo138585');
smo138602v0ar.push(smo138585);
const smo138586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138586.setAttribute('id', 'smo138586');
smo138602v0ar.push(smo138586);
smo138602v0.addTickables(smo138602v0ar)
fmtsmo13860211.joinVoices([smo138602v0]);
const fmtsmo14094311 = new VF.Formatter();
//
// voices and notes for stave 12 11
const smo140943v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140943v0ar = [];
const smo140924 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140924.setAttribute('id', 'smo140924');
const  smo227518 = new VF.Articulation('a.').setPosition(3);
smo140924.addModifier(smo227518, 0);
smo140943v0ar.push(smo140924);
const smo140926 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140926.setAttribute('id', 'smo140926');
smo140943v0ar.push(smo140926);
const smo140927 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo140927.setAttribute('id', 'smo140927');
smo140943v0ar.push(smo140927);
smo140943v0.addTickables(smo140943v0ar)
fmtsmo14094311.joinVoices([smo140943v0]);
const fmtsmo14326411 = new VF.Formatter();
//
// voices and notes for stave 13 11
const smo143264v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143264v0ar = [];
const smo143241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo143241.setAttribute('id', 'smo143241');
smo143264v0ar.push(smo143241);
const smo143242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143242.setAttribute('id', 'smo143242');
smo143264v0ar.push(smo143242);
const smo143243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo143243.setAttribute('id', 'smo143243');
smo143264v0ar.push(smo143243);
const smo143244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo143244.setAttribute('id', 'smo143244');
smo143264v0ar.push(smo143244);
const smo143245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143245.setAttribute('id', 'smo143245');
smo143264v0ar.push(smo143245);
const smo143246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo143246.setAttribute('id', 'smo143246');
smo143264v0ar.push(smo143246);
const smo143247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143247.setAttribute('id', 'smo143247');
smo143264v0ar.push(smo143247);
const smo143248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo143248.setAttribute('id', 'smo143248');
smo143264v0ar.push(smo143248);
smo143264v0.addTickables(smo143264v0ar)
fmtsmo14326411.joinVoices([smo143264v0]);
const fmtsmo14571811 = new VF.Formatter();
//
// voices and notes for stave 14 11
const smo145718v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145718v0ar = [];
const smo145702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145702.setAttribute('id', 'smo145702');
smo145718v0ar.push(smo145702);
smo145718v0.addTickables(smo145718v0ar)
fmtsmo14571811.joinVoices([smo145718v0]);
const fmtsmo14822111 = new VF.Formatter();
//
// voices and notes for stave 15 11
const smo148221v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148221v0ar = [];
const smo148202 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148202.setAttribute('id', 'smo148202');
const  smo227519 = new VF.Articulation('a.').setPosition(3);
smo148202.addModifier(smo227519, 0);
smo148221v0ar.push(smo148202);
const smo148204 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148204.setAttribute('id', 'smo148204');
smo148221v0ar.push(smo148204);
const smo148205 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo148205.setAttribute('id', 'smo148205');
smo148221v0ar.push(smo148205);
smo148221v0.addTickables(smo148221v0ar)
fmtsmo14822111.joinVoices([smo148221v0]);
const fmtsmo15065111 = new VF.Formatter();
//
// voices and notes for stave 16 11
const smo150651v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150651v0ar = [];
const smo150625 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150625.setAttribute('id', 'smo150625');
const smo1506250acc = new VF.Accidental('n');
smo150625.addModifier(smo1506250acc, 0);
smo150651v0ar.push(smo150625);
const smo150626 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150626.setAttribute('id', 'smo150626');
smo150651v0ar.push(smo150626);
const smo150627 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150627.setAttribute('id', 'smo150627');
smo150651v0ar.push(smo150627);
const smo150628 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150628.setAttribute('id', 'smo150628');
smo150651v0ar.push(smo150628);
const smo150629 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150629.setAttribute('id', 'smo150629');
smo150651v0ar.push(smo150629);
const smo150630 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150630.setAttribute('id', 'smo150630');
smo150651v0ar.push(smo150630);
const smo150631 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150631.setAttribute('id', 'smo150631');
smo150651v0ar.push(smo150631);
const smo150632 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150632.setAttribute('id', 'smo150632');
smo150651v0ar.push(smo150632);
const smo150633 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150633.setAttribute('id', 'smo150633');
smo150651v0ar.push(smo150633);
const smo150634 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150634.setAttribute('id', 'smo150634');
smo150651v0ar.push(smo150634);
smo150651v0.addTickables(smo150651v0ar)
fmtsmo15065111.joinVoices([smo150651v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
const dirsmo219069 = smo112476.getStemDirection();
smo112476.setStemDirection(dirsmo219069);
smo112477.setStemDirection(dirsmo219069);
const smo219069 = new VF.Beam([smo112476,smo112477]);
const dirsmo219070 = smo112479.getStemDirection();
smo112479.setStemDirection(dirsmo219070);
smo112480.setStemDirection(dirsmo219070);
const smo219070 = new VF.Beam([smo112479,smo112480]);
const dirsmo219072 = smo114903.getStemDirection();
smo114903.setStemDirection(dirsmo219072);
smo114904.setStemDirection(dirsmo219072);
const smo219072 = new VF.Beam([smo114903,smo114904]);
const dirsmo219073 = smo114906.getStemDirection();
smo114906.setStemDirection(dirsmo219073);
smo114907.setStemDirection(dirsmo219073);
const smo219073 = new VF.Beam([smo114906,smo114907]);
const dirsmo219075 = smo117321.getStemDirection();
smo117321.setStemDirection(dirsmo219075);
smo117322.setStemDirection(dirsmo219075);
const smo219075 = new VF.Beam([smo117321,smo117322]);
const dirsmo219076 = smo117324.getStemDirection();
smo117324.setStemDirection(dirsmo219076);
smo117325.setStemDirection(dirsmo219076);
const smo219076 = new VF.Beam([smo117324,smo117325]);
const dirsmo219078 = smo119695.getStemDirection();
smo119695.setStemDirection(dirsmo219078);
smo119696.setStemDirection(dirsmo219078);
const smo219078 = new VF.Beam([smo119695,smo119696]);
const dirsmo219079 = smo119698.getStemDirection();
smo119698.setStemDirection(dirsmo219079);
smo119699.setStemDirection(dirsmo219079);
const smo219079 = new VF.Beam([smo119698,smo119699]);
 
// formatting measures in staff group smo153054
fmtsmo11249711.format([smo112497v0,smo114924v0,smo117342v0,smo119716v0,smo122084v0], 276);
const stavesmo112497 = new VF.Stave(1114, 183.2253035909339, 290);
stavesmo112497.setAttribute('id', 'stavesmo112497');
stavesmo112497.setBegBarType(VF.Barline.type.NONE);
stavesmo112497.setContext(context);
stavesmo112497.draw();
smo112497v0.draw(context, stavesmo112497);
smo219069.setContext(context);
smo219069.draw();
smo219070.setContext(context);
smo219070.draw();
const stavesmo114924 = new VF.Stave(1114, 288.2253035909339, 290);
stavesmo114924.setAttribute('id', 'stavesmo114924');
stavesmo114924.setBegBarType(VF.Barline.type.NONE);
stavesmo114924.setContext(context);
stavesmo114924.draw();
smo114924v0.draw(context, stavesmo114924);
smo219072.setContext(context);
smo219072.draw();
smo219073.setContext(context);
smo219073.draw();
const stavesmo117342 = new VF.Stave(1114, 409.2253035909339, 290);
stavesmo117342.setAttribute('id', 'stavesmo117342');
stavesmo117342.setBegBarType(VF.Barline.type.NONE);
stavesmo117342.setContext(context);
stavesmo117342.draw();
smo117342v0.draw(context, stavesmo117342);
smo219075.setContext(context);
smo219075.draw();
smo219076.setContext(context);
smo219076.draw();
const stavesmo119716 = new VF.Stave(1114, 539.2253035909339, 290);
stavesmo119716.setAttribute('id', 'stavesmo119716');
stavesmo119716.setBegBarType(VF.Barline.type.NONE);
stavesmo119716.setContext(context);
stavesmo119716.draw();
smo119716v0.draw(context, stavesmo119716);
smo219078.setContext(context);
smo219078.draw();
smo219079.setContext(context);
smo219079.draw();
const stavesmo122084 = new VF.Stave(1114, 609.2253035909339, 290);
stavesmo122084.setAttribute('id', 'stavesmo122084');
stavesmo122084.setBegBarType(VF.Barline.type.NONE);
stavesmo122084.setContext(context);
stavesmo122084.draw();
smo122084v0.draw(context, stavesmo122084);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo219082 = smo124356.getStemDirection();
smo124356.setStemDirection(dirsmo219082);
smo124357.setStemDirection(dirsmo219082);
const smo219082 = new VF.Beam([smo124356,smo124357]);
const dirsmo219083 = smo124359.getStemDirection();
smo124359.setStemDirection(dirsmo219083);
smo124360.setStemDirection(dirsmo219083);
smo124361.setStemDirection(dirsmo219083);
smo124362.setStemDirection(dirsmo219083);
const smo219083 = new VF.Beam([smo124359,smo124360,smo124361,smo124362]);
const dirsmo219085 = smo126762.getStemDirection();
smo126762.setStemDirection(dirsmo219085);
smo126763.setStemDirection(dirsmo219085);
const smo219085 = new VF.Beam([smo126762,smo126763]);
const dirsmo219086 = smo126765.getStemDirection();
smo126765.setStemDirection(dirsmo219086);
smo126766.setStemDirection(dirsmo219086);
smo126767.setStemDirection(dirsmo219086);
smo126768.setStemDirection(dirsmo219086);
const smo219086 = new VF.Beam([smo126765,smo126766,smo126767,smo126768]);
 
// formatting measures in staff group smo153056
fmtsmo12437811.format([smo124378v0,smo126784v0,smo129139v0,smo131489v0], 276);
const stavesmo124378 = new VF.Stave(1114, 690.2253035909339, 290);
stavesmo124378.setAttribute('id', 'stavesmo124378');
stavesmo124378.setBegBarType(VF.Barline.type.NONE);
stavesmo124378.setContext(context);
stavesmo124378.draw();
smo124378v0.draw(context, stavesmo124378);
smo219082.setContext(context);
smo219082.draw();
smo219083.setContext(context);
smo219083.draw();
const stavesmo126784 = new VF.Stave(1114, 750.2253035909339, 290);
stavesmo126784.setAttribute('id', 'stavesmo126784');
stavesmo126784.setBegBarType(VF.Barline.type.NONE);
stavesmo126784.setContext(context);
stavesmo126784.draw();
smo126784v0.draw(context, stavesmo126784);
smo219085.setContext(context);
smo219085.draw();
smo219086.setContext(context);
smo219086.draw();
const stavesmo129139 = new VF.Stave(1114, 811.2253035909339, 290);
stavesmo129139.setAttribute('id', 'stavesmo129139');
stavesmo129139.setBegBarType(VF.Barline.type.NONE);
stavesmo129139.setContext(context);
stavesmo129139.draw();
smo129139v0.draw(context, stavesmo129139);
const stavesmo131489 = new VF.Stave(1114, 881.2253035909339, 290);
stavesmo131489.setAttribute('id', 'stavesmo131489');
stavesmo131489.setBegBarType(VF.Barline.type.NONE);
stavesmo131489.setContext(context);
stavesmo131489.draw();
smo131489v0.draw(context, stavesmo131489);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo219090 = smo133861.getStemDirection();
smo133861.setStemDirection(dirsmo219090);
smo133862.setStemDirection(dirsmo219090);
const smo219090 = new VF.Beam([smo133861,smo133862]);
const dirsmo219091 = smo133864.getStemDirection();
smo133864.setStemDirection(dirsmo219091);
smo133865.setStemDirection(dirsmo219091);
smo133866.setStemDirection(dirsmo219091);
smo133867.setStemDirection(dirsmo219091);
const smo219091 = new VF.Beam([smo133864,smo133865,smo133866,smo133867]);
const dirsmo219093 = smo136234.getStemDirection();
smo136234.setStemDirection(dirsmo219093);
smo136235.setStemDirection(dirsmo219093);
const smo219093 = new VF.Beam([smo136234,smo136235]);
const dirsmo219094 = smo136237.getStemDirection();
smo136237.setStemDirection(dirsmo219094);
smo136238.setStemDirection(dirsmo219094);
smo136239.setStemDirection(dirsmo219094);
smo136240.setStemDirection(dirsmo219094);
const smo219094 = new VF.Beam([smo136237,smo136238,smo136239,smo136240]);
const dirsmo219096 = smo138580.getStemDirection();
smo138580.setStemDirection(dirsmo219096);
smo138581.setStemDirection(dirsmo219096);
const smo219096 = new VF.Beam([smo138580,smo138581]);
const dirsmo219097 = smo138583.getStemDirection();
smo138583.setStemDirection(dirsmo219097);
smo138584.setStemDirection(dirsmo219097);
smo138585.setStemDirection(dirsmo219097);
smo138586.setStemDirection(dirsmo219097);
const smo219097 = new VF.Beam([smo138583,smo138584,smo138585,smo138586]);
 
// formatting measures in staff group smo153058
fmtsmo13388311.format([smo133883v0,smo136256v0,smo138602v0,smo140943v0], 276);
const stavesmo133883 = new VF.Stave(1114, 986.2253035909339, 290);
stavesmo133883.setAttribute('id', 'stavesmo133883');
stavesmo133883.setBegBarType(VF.Barline.type.NONE);
stavesmo133883.setContext(context);
stavesmo133883.draw();
smo133883v0.draw(context, stavesmo133883);
smo219090.setContext(context);
smo219090.draw();
smo219091.setContext(context);
smo219091.draw();
const stavesmo136256 = new VF.Stave(1114, 1105.225303590934, 290);
stavesmo136256.setAttribute('id', 'stavesmo136256');
stavesmo136256.setBegBarType(VF.Barline.type.NONE);
stavesmo136256.setContext(context);
stavesmo136256.draw();
smo136256v0.draw(context, stavesmo136256);
smo219093.setContext(context);
smo219093.draw();
smo219094.setContext(context);
smo219094.draw();
const stavesmo138602 = new VF.Stave(1114, 1221.225303590934, 290);
stavesmo138602.setAttribute('id', 'stavesmo138602');
stavesmo138602.setBegBarType(VF.Barline.type.NONE);
stavesmo138602.setContext(context);
stavesmo138602.draw();
smo138602v0.draw(context, stavesmo138602);
smo219096.setContext(context);
smo219096.draw();
smo219097.setContext(context);
smo219097.draw();
const stavesmo140943 = new VF.Stave(1114, 1317.225303590934, 290);
stavesmo140943.setAttribute('id', 'stavesmo140943');
stavesmo140943.setBegBarType(VF.Barline.type.NONE);
stavesmo140943.setContext(context);
stavesmo140943.draw();
smo140943v0.draw(context, stavesmo140943);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo219100 = smo143242.getStemDirection();
smo143242.setStemDirection(dirsmo219100);
smo143243.setStemDirection(dirsmo219100);
const smo219100 = new VF.Beam([smo143242,smo143243]);
const dirsmo219101 = smo143245.getStemDirection();
smo143245.setStemDirection(dirsmo219101);
smo143246.setStemDirection(dirsmo219101);
smo143247.setStemDirection(dirsmo219101);
smo143248.setStemDirection(dirsmo219101);
const smo219101 = new VF.Beam([smo143245,smo143246,smo143247,smo143248]);
 
// formatting measures in staff group smo145509
fmtsmo14326411.format([smo143264v0], 276);
const stavesmo143264 = new VF.Stave(1114, 1419.225303590934, 290);
stavesmo143264.setAttribute('id', 'stavesmo143264');
stavesmo143264.setBegBarType(VF.Barline.type.NONE);
stavesmo143264.setContext(context);
stavesmo143264.draw();
smo143264v0.draw(context, stavesmo143264);
smo219100.setContext(context);
smo219100.draw();
smo219101.setContext(context);
smo219101.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo14571811.format([smo145718v0], 276);
const stavesmo145718 = new VF.Stave(1114, 1500.225303590934, 290);
stavesmo145718.setAttribute('id', 'stavesmo145718');
stavesmo145718.setBegBarType(VF.Barline.type.NONE);
stavesmo145718.setContext(context);
stavesmo145718.draw();
smo145718v0.draw(context, stavesmo145718);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo14822111.format([smo148221v0], 276);
const stavesmo148221 = new VF.Stave(1114, 1605.225303590934, 290);
stavesmo148221.setAttribute('id', 'stavesmo148221');
stavesmo148221.setBegBarType(VF.Barline.type.NONE);
stavesmo148221.setContext(context);
stavesmo148221.draw();
smo148221v0.draw(context, stavesmo148221);
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo219105 = smo150625.getStemDirection();
smo150625.setStemDirection(dirsmo219105);
smo150626.setStemDirection(dirsmo219105);
smo150627.setStemDirection(dirsmo219105);
smo150628.setStemDirection(dirsmo219105);
const smo219105 = new VF.Beam([smo150625,smo150626,smo150627,smo150628]);
const dirsmo219106 = smo150629.getStemDirection();
smo150629.setStemDirection(dirsmo219106);
smo150630.setStemDirection(dirsmo219106);
const smo219106 = new VF.Beam([smo150629,smo150630]);
const smo150635 = new VF.Tuplet([smo150626,smo150627,smo150628], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo153048
fmtsmo15065111.format([smo150651v0], 276);
const stavesmo150651 = new VF.Stave(1114, 1687.225303590934, 290);
stavesmo150651.setAttribute('id', 'stavesmo150651');
stavesmo150651.setBegBarType(VF.Barline.type.NONE);
stavesmo150651.setContext(context);
stavesmo150651.draw();
smo150651v0.draw(context, stavesmo150651);
smo219105.setContext(context);
smo219105.draw();
smo219106.setContext(context);
smo219106.draw();
smo150635.setContext(context).draw();
const fmtsmo11252012 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo112520v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112520v0ar = [];
const smo112498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo112498.setAttribute('id', 'smo112498');
smo112520v0ar.push(smo112498);
const smo112499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo112499.setAttribute('id', 'smo112499');
const  smo227554 = new VF.Articulation('a.').setPosition(3);
smo112499.addModifier(smo227554, 0);
smo112520v0ar.push(smo112499);
const smo112501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo112501.setAttribute('id', 'smo112501');
const  smo227555 = new VF.Articulation('a.').setPosition(3);
smo112501.addModifier(smo227555, 0);
smo112520v0ar.push(smo112501);
const smo112503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo112503.setAttribute('id', 'smo112503');
const  smo227556 = new VF.Articulation('a.').setPosition(3);
smo112503.addModifier(smo227556, 0);
smo112520v0ar.push(smo112503);
smo112520v0.addTickables(smo112520v0ar)
fmtsmo11252012.joinVoices([smo112520v0]);
const fmtsmo11494712 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo114947v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114947v0ar = [];
const smo114925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114925.setAttribute('id', 'smo114925');
smo114947v0ar.push(smo114925);
const smo114926 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114926.setAttribute('id', 'smo114926');
const  smo227557 = new VF.Articulation('a.').setPosition(3);
smo114926.addModifier(smo227557, 0);
smo114947v0ar.push(smo114926);
const smo114928 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114928.setAttribute('id', 'smo114928');
const  smo227558 = new VF.Articulation('a.').setPosition(3);
smo114928.addModifier(smo227558, 0);
smo114947v0ar.push(smo114928);
const smo114930 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114930.setAttribute('id', 'smo114930');
const  smo227559 = new VF.Articulation('a.').setPosition(3);
smo114930.addModifier(smo227559, 0);
smo114947v0ar.push(smo114930);
smo114947v0.addTickables(smo114947v0ar)
fmtsmo11494712.joinVoices([smo114947v0]);
const fmtsmo11736512 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo117365v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117365v0ar = [];
const smo117343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo117343.setAttribute('id', 'smo117343');
smo117365v0ar.push(smo117343);
const smo117344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117344.setAttribute('id', 'smo117344');
const  smo227560 = new VF.Articulation('a.').setPosition(3);
smo117344.addModifier(smo227560, 0);
smo117365v0ar.push(smo117344);
const smo117346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo117346.setAttribute('id', 'smo117346');
const  smo227561 = new VF.Articulation('a.').setPosition(3);
smo117346.addModifier(smo227561, 0);
smo117365v0ar.push(smo117346);
const smo117348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo117348.setAttribute('id', 'smo117348');
const  smo227562 = new VF.Articulation('a.').setPosition(3);
smo117348.addModifier(smo227562, 0);
smo117365v0ar.push(smo117348);
smo117365v0.addTickables(smo117365v0ar)
fmtsmo11736512.joinVoices([smo117365v0]);
const fmtsmo11973912 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo119739v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119739v0ar = [];
const smo119717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/5/n"]}'))
smo119717.setAttribute('id', 'smo119717');
smo119739v0ar.push(smo119717);
const smo119718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119718.setAttribute('id', 'smo119718');
const  smo227563 = new VF.Articulation('a.').setPosition(3);
smo119718.addModifier(smo227563, 0);
smo119739v0ar.push(smo119718);
const smo119720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119720.setAttribute('id', 'smo119720');
const  smo227564 = new VF.Articulation('a.').setPosition(3);
smo119720.addModifier(smo227564, 0);
smo119739v0ar.push(smo119720);
const smo119722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119722.setAttribute('id', 'smo119722');
const  smo227565 = new VF.Articulation('a.').setPosition(3);
smo119722.addModifier(smo227565, 0);
smo119739v0ar.push(smo119722);
smo119739v0.addTickables(smo119739v0ar)
fmtsmo11973912.joinVoices([smo119739v0]);
const fmtsmo12210412 = new VF.Formatter();
//
// voices and notes for stave 4 12
const smo122104v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122104v0ar = [];
const smo122085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122085.setAttribute('id', 'smo122085');
smo122104v0ar.push(smo122085);
const smo122086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122086.setAttribute('id', 'smo122086');
smo122104v0ar.push(smo122086);
const smo122087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122087.setAttribute('id', 'smo122087');
smo122104v0ar.push(smo122087);
const smo122088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122088.setAttribute('id', 'smo122088');
smo122104v0ar.push(smo122088);
smo122104v0.addTickables(smo122104v0ar)
fmtsmo12210412.joinVoices([smo122104v0]);
const fmtsmo12440012 = new VF.Formatter();
//
// voices and notes for stave 5 12
const smo124400v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124400v0ar = [];
const smo124379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124379.setAttribute('id', 'smo124379');
smo124400v0ar.push(smo124379);
const smo124380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124380.setAttribute('id', 'smo124380');
smo124400v0ar.push(smo124380);
const smo124381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124381.setAttribute('id', 'smo124381');
smo124400v0ar.push(smo124381);
const smo124382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124382.setAttribute('id', 'smo124382');
smo124400v0ar.push(smo124382);
const smo124383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124383.setAttribute('id', 'smo124383');
smo124400v0ar.push(smo124383);
const smo124384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124384.setAttribute('id', 'smo124384');
smo124400v0ar.push(smo124384);
smo124400v0.addTickables(smo124400v0ar)
fmtsmo12440012.joinVoices([smo124400v0]);
const fmtsmo12680612 = new VF.Formatter();
//
// voices and notes for stave 6 12
const smo126806v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126806v0ar = [];
const smo126785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126785.setAttribute('id', 'smo126785');
smo126806v0ar.push(smo126785);
const smo126786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126786.setAttribute('id', 'smo126786');
smo126806v0ar.push(smo126786);
const smo126787 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126787.setAttribute('id', 'smo126787');
smo126806v0ar.push(smo126787);
const smo126788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126788.setAttribute('id', 'smo126788');
smo126806v0ar.push(smo126788);
const smo126789 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126789.setAttribute('id', 'smo126789');
smo126806v0ar.push(smo126789);
const smo126790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126790.setAttribute('id', 'smo126790');
smo126806v0ar.push(smo126790);
smo126806v0.addTickables(smo126806v0ar)
fmtsmo12680612.joinVoices([smo126806v0]);
const fmtsmo12915612 = new VF.Formatter();
//
// voices and notes for stave 7 12
const smo129156v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129156v0ar = [];
const smo129140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129140.setAttribute('id', 'smo129140');
smo129156v0ar.push(smo129140);
smo129156v0.addTickables(smo129156v0ar)
fmtsmo12915612.joinVoices([smo129156v0]);
const fmtsmo13150612 = new VF.Formatter();
//
// voices and notes for stave 8 12
const smo131506v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131506v0ar = [];
const smo131490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131490.setAttribute('id', 'smo131490');
smo131506v0ar.push(smo131490);
smo131506v0.addTickables(smo131506v0ar)
fmtsmo13150612.joinVoices([smo131506v0]);
const fmtsmo13390512 = new VF.Formatter();
//
// voices and notes for stave 9 12
const smo133905v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133905v0ar = [];
const smo133884 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133884.setAttribute('id', 'smo133884');
smo133905v0ar.push(smo133884);
const smo133885 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133885.setAttribute('id', 'smo133885');
smo133905v0ar.push(smo133885);
const smo133886 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133886.setAttribute('id', 'smo133886');
smo133905v0ar.push(smo133886);
const smo133887 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133887.setAttribute('id', 'smo133887');
smo133905v0ar.push(smo133887);
const smo133888 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133888.setAttribute('id', 'smo133888');
smo133905v0ar.push(smo133888);
const smo133889 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo133889.setAttribute('id', 'smo133889');
smo133905v0ar.push(smo133889);
smo133905v0.addTickables(smo133905v0ar)
fmtsmo13390512.joinVoices([smo133905v0]);
const fmtsmo13627812 = new VF.Formatter();
//
// voices and notes for stave 10 12
const smo136278v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136278v0ar = [];
const smo136257 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136257.setAttribute('id', 'smo136257');
smo136278v0ar.push(smo136257);
const smo136258 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136258.setAttribute('id', 'smo136258');
smo136278v0ar.push(smo136258);
const smo136259 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136259.setAttribute('id', 'smo136259');
smo136278v0ar.push(smo136259);
const smo136260 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136260.setAttribute('id', 'smo136260');
smo136278v0ar.push(smo136260);
const smo136261 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136261.setAttribute('id', 'smo136261');
smo136278v0ar.push(smo136261);
const smo136262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136262.setAttribute('id', 'smo136262');
smo136278v0ar.push(smo136262);
smo136278v0.addTickables(smo136278v0ar)
fmtsmo13627812.joinVoices([smo136278v0]);
const fmtsmo13862412 = new VF.Formatter();
//
// voices and notes for stave 11 12
const smo138624v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138624v0ar = [];
const smo138603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138603.setAttribute('id', 'smo138603');
smo138624v0ar.push(smo138603);
const smo138604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138604.setAttribute('id', 'smo138604');
smo138624v0ar.push(smo138604);
const smo138605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138605.setAttribute('id', 'smo138605');
smo138624v0ar.push(smo138605);
const smo138606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138606.setAttribute('id', 'smo138606');
smo138624v0ar.push(smo138606);
const smo138607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138607.setAttribute('id', 'smo138607');
smo138624v0ar.push(smo138607);
const smo138608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138608.setAttribute('id', 'smo138608');
smo138624v0ar.push(smo138608);
smo138624v0.addTickables(smo138624v0ar)
fmtsmo13862412.joinVoices([smo138624v0]);
const fmtsmo14096312 = new VF.Formatter();
//
// voices and notes for stave 12 12
const smo140963v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140963v0ar = [];
const smo140944 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140944.setAttribute('id', 'smo140944');
smo140963v0ar.push(smo140944);
const smo140945 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140945.setAttribute('id', 'smo140945');
smo140963v0ar.push(smo140945);
const smo140946 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140946.setAttribute('id', 'smo140946');
smo140963v0ar.push(smo140946);
const smo140947 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo140947.setAttribute('id', 'smo140947');
smo140963v0ar.push(smo140947);
smo140963v0.addTickables(smo140963v0ar)
fmtsmo14096312.joinVoices([smo140963v0]);
const fmtsmo14328612 = new VF.Formatter();
//
// voices and notes for stave 13 12
const smo143286v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143286v0ar = [];
const smo143265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143265.setAttribute('id', 'smo143265');
smo143286v0ar.push(smo143265);
const smo143266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143266.setAttribute('id', 'smo143266');
smo143286v0ar.push(smo143266);
const smo143267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143267.setAttribute('id', 'smo143267');
smo143286v0ar.push(smo143267);
const smo143268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143268.setAttribute('id', 'smo143268');
smo143286v0ar.push(smo143268);
const smo143269 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143269.setAttribute('id', 'smo143269');
smo143286v0ar.push(smo143269);
const smo143270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143270.setAttribute('id', 'smo143270');
smo143286v0ar.push(smo143270);
smo143286v0.addTickables(smo143286v0ar)
fmtsmo14328612.joinVoices([smo143286v0]);
const fmtsmo14573512 = new VF.Formatter();
//
// voices and notes for stave 14 12
const smo145735v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145735v0ar = [];
const smo145719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145719.setAttribute('id', 'smo145719');
smo145735v0ar.push(smo145719);
smo145735v0.addTickables(smo145735v0ar)
fmtsmo14573512.joinVoices([smo145735v0]);
const fmtsmo14824112 = new VF.Formatter();
//
// voices and notes for stave 15 12
const smo148241v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148241v0ar = [];
const smo148222 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148222.setAttribute('id', 'smo148222');
smo148241v0ar.push(smo148222);
const smo148223 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148223.setAttribute('id', 'smo148223');
smo148241v0ar.push(smo148223);
const smo148224 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148224.setAttribute('id', 'smo148224');
smo148241v0ar.push(smo148224);
const smo148225 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo148225.setAttribute('id', 'smo148225');
smo148241v0ar.push(smo148225);
smo148241v0.addTickables(smo148241v0ar)
fmtsmo14824112.joinVoices([smo148241v0]);
const fmtsmo15067812 = new VF.Formatter();
//
// voices and notes for stave 16 12
const smo150678v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150678v0ar = [];
const smo150652 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150652.setAttribute('id', 'smo150652');
const smo1506520acc = new VF.Accidental('n');
smo150652.addModifier(smo1506520acc, 0);
smo150678v0ar.push(smo150652);
const smo150653 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150653.setAttribute('id', 'smo150653');
smo150678v0ar.push(smo150653);
const smo150654 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150654.setAttribute('id', 'smo150654');
smo150678v0ar.push(smo150654);
const smo150655 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150655.setAttribute('id', 'smo150655');
smo150678v0ar.push(smo150655);
const smo150656 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150656.setAttribute('id', 'smo150656');
smo150678v0ar.push(smo150656);
const smo150657 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150657.setAttribute('id', 'smo150657');
smo150678v0ar.push(smo150657);
const smo150658 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150658.setAttribute('id', 'smo150658');
smo150678v0ar.push(smo150658);
const smo150659 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150659.setAttribute('id', 'smo150659');
smo150678v0ar.push(smo150659);
const smo150660 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150660.setAttribute('id', 'smo150660');
smo150678v0ar.push(smo150660);
const smo150661 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150661.setAttribute('id', 'smo150661');
smo150678v0ar.push(smo150661);
smo150678v0.addTickables(smo150678v0ar)
fmtsmo15067812.joinVoices([smo150678v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
 
// formatting measures in staff group smo153054
fmtsmo11252012.format([smo112520v0,smo114947v0,smo117365v0,smo119739v0,smo122104v0], 274);
const stavesmo112520 = new VF.Stave(1404, 183.2253035909339, 288);
stavesmo112520.setAttribute('id', 'stavesmo112520');
stavesmo112520.setBegBarType(VF.Barline.type.NONE);
stavesmo112520.setContext(context);
stavesmo112520.draw();
smo112520v0.draw(context, stavesmo112520);
const stavesmo114947 = new VF.Stave(1404, 288.2253035909339, 288);
stavesmo114947.setAttribute('id', 'stavesmo114947');
stavesmo114947.setBegBarType(VF.Barline.type.NONE);
stavesmo114947.setContext(context);
stavesmo114947.draw();
smo114947v0.draw(context, stavesmo114947);
const stavesmo117365 = new VF.Stave(1404, 409.2253035909339, 288);
stavesmo117365.setAttribute('id', 'stavesmo117365');
stavesmo117365.setBegBarType(VF.Barline.type.NONE);
stavesmo117365.setContext(context);
stavesmo117365.draw();
smo117365v0.draw(context, stavesmo117365);
const stavesmo119739 = new VF.Stave(1404, 539.2253035909339, 288);
stavesmo119739.setAttribute('id', 'stavesmo119739');
stavesmo119739.setBegBarType(VF.Barline.type.NONE);
stavesmo119739.setContext(context);
stavesmo119739.draw();
smo119739v0.draw(context, stavesmo119739);
const stavesmo122104 = new VF.Stave(1404, 609.2253035909339, 288);
stavesmo122104.setAttribute('id', 'stavesmo122104');
stavesmo122104.setBegBarType(VF.Barline.type.NONE);
stavesmo122104.setContext(context);
stavesmo122104.draw();
smo122104v0.draw(context, stavesmo122104);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo219130 = smo124380.getStemDirection();
smo124380.setStemDirection(dirsmo219130);
smo124381.setStemDirection(dirsmo219130);
const smo219130 = new VF.Beam([smo124380,smo124381]);
const dirsmo219131 = smo124382.getStemDirection();
smo124382.setStemDirection(dirsmo219131);
smo124383.setStemDirection(dirsmo219131);
const smo219131 = new VF.Beam([smo124382,smo124383]);
const dirsmo219133 = smo126786.getStemDirection();
smo126786.setStemDirection(dirsmo219133);
smo126787.setStemDirection(dirsmo219133);
const smo219133 = new VF.Beam([smo126786,smo126787]);
const dirsmo219134 = smo126788.getStemDirection();
smo126788.setStemDirection(dirsmo219134);
smo126789.setStemDirection(dirsmo219134);
const smo219134 = new VF.Beam([smo126788,smo126789]);
 
// formatting measures in staff group smo153056
fmtsmo12440012.format([smo124400v0,smo126806v0,smo129156v0,smo131506v0], 274);
const stavesmo124400 = new VF.Stave(1404, 690.2253035909339, 288);
stavesmo124400.setAttribute('id', 'stavesmo124400');
stavesmo124400.setBegBarType(VF.Barline.type.NONE);
stavesmo124400.setContext(context);
stavesmo124400.draw();
smo124400v0.draw(context, stavesmo124400);
smo219130.setContext(context);
smo219130.draw();
smo219131.setContext(context);
smo219131.draw();
const stavesmo126806 = new VF.Stave(1404, 750.2253035909339, 288);
stavesmo126806.setAttribute('id', 'stavesmo126806');
stavesmo126806.setBegBarType(VF.Barline.type.NONE);
stavesmo126806.setContext(context);
stavesmo126806.draw();
smo126806v0.draw(context, stavesmo126806);
smo219133.setContext(context);
smo219133.draw();
smo219134.setContext(context);
smo219134.draw();
const stavesmo129156 = new VF.Stave(1404, 811.2253035909339, 288);
stavesmo129156.setAttribute('id', 'stavesmo129156');
stavesmo129156.setBegBarType(VF.Barline.type.NONE);
stavesmo129156.setContext(context);
stavesmo129156.draw();
smo129156v0.draw(context, stavesmo129156);
const stavesmo131506 = new VF.Stave(1404, 881.2253035909339, 288);
stavesmo131506.setAttribute('id', 'stavesmo131506');
stavesmo131506.setBegBarType(VF.Barline.type.NONE);
stavesmo131506.setContext(context);
stavesmo131506.draw();
smo131506v0.draw(context, stavesmo131506);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo219138 = smo133885.getStemDirection();
smo133885.setStemDirection(dirsmo219138);
smo133886.setStemDirection(dirsmo219138);
const smo219138 = new VF.Beam([smo133885,smo133886]);
const dirsmo219139 = smo133887.getStemDirection();
smo133887.setStemDirection(dirsmo219139);
smo133888.setStemDirection(dirsmo219139);
const smo219139 = new VF.Beam([smo133887,smo133888]);
const dirsmo219141 = smo136258.getStemDirection();
smo136258.setStemDirection(dirsmo219141);
smo136259.setStemDirection(dirsmo219141);
const smo219141 = new VF.Beam([smo136258,smo136259]);
const dirsmo219142 = smo136260.getStemDirection();
smo136260.setStemDirection(dirsmo219142);
smo136261.setStemDirection(dirsmo219142);
const smo219142 = new VF.Beam([smo136260,smo136261]);
const dirsmo219144 = smo138604.getStemDirection();
smo138604.setStemDirection(dirsmo219144);
smo138605.setStemDirection(dirsmo219144);
const smo219144 = new VF.Beam([smo138604,smo138605]);
const dirsmo219145 = smo138606.getStemDirection();
smo138606.setStemDirection(dirsmo219145);
smo138607.setStemDirection(dirsmo219145);
const smo219145 = new VF.Beam([smo138606,smo138607]);
 
// formatting measures in staff group smo153058
fmtsmo13390512.format([smo133905v0,smo136278v0,smo138624v0,smo140963v0], 274);
const stavesmo133905 = new VF.Stave(1404, 986.2253035909339, 288);
stavesmo133905.setAttribute('id', 'stavesmo133905');
stavesmo133905.setBegBarType(VF.Barline.type.NONE);
stavesmo133905.setContext(context);
stavesmo133905.draw();
smo133905v0.draw(context, stavesmo133905);
smo219138.setContext(context);
smo219138.draw();
smo219139.setContext(context);
smo219139.draw();
const stavesmo136278 = new VF.Stave(1404, 1105.225303590934, 288);
stavesmo136278.setAttribute('id', 'stavesmo136278');
stavesmo136278.setBegBarType(VF.Barline.type.NONE);
stavesmo136278.setContext(context);
stavesmo136278.draw();
smo136278v0.draw(context, stavesmo136278);
smo219141.setContext(context);
smo219141.draw();
smo219142.setContext(context);
smo219142.draw();
const stavesmo138624 = new VF.Stave(1404, 1221.225303590934, 288);
stavesmo138624.setAttribute('id', 'stavesmo138624');
stavesmo138624.setBegBarType(VF.Barline.type.NONE);
stavesmo138624.setContext(context);
stavesmo138624.draw();
smo138624v0.draw(context, stavesmo138624);
smo219144.setContext(context);
smo219144.draw();
smo219145.setContext(context);
smo219145.draw();
const stavesmo140963 = new VF.Stave(1404, 1317.225303590934, 288);
stavesmo140963.setAttribute('id', 'stavesmo140963');
stavesmo140963.setBegBarType(VF.Barline.type.NONE);
stavesmo140963.setContext(context);
stavesmo140963.draw();
smo140963v0.draw(context, stavesmo140963);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo219148 = smo143266.getStemDirection();
smo143266.setStemDirection(dirsmo219148);
smo143267.setStemDirection(dirsmo219148);
const smo219148 = new VF.Beam([smo143266,smo143267]);
const dirsmo219149 = smo143268.getStemDirection();
smo143268.setStemDirection(dirsmo219149);
smo143269.setStemDirection(dirsmo219149);
const smo219149 = new VF.Beam([smo143268,smo143269]);
 
// formatting measures in staff group smo145509
fmtsmo14328612.format([smo143286v0], 274);
const stavesmo143286 = new VF.Stave(1404, 1419.225303590934, 288);
stavesmo143286.setAttribute('id', 'stavesmo143286');
stavesmo143286.setBegBarType(VF.Barline.type.NONE);
stavesmo143286.setContext(context);
stavesmo143286.draw();
smo143286v0.draw(context, stavesmo143286);
smo219148.setContext(context);
smo219148.draw();
smo219149.setContext(context);
smo219149.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo14573512.format([smo145735v0], 274);
const stavesmo145735 = new VF.Stave(1404, 1500.225303590934, 288);
stavesmo145735.setAttribute('id', 'stavesmo145735');
stavesmo145735.setBegBarType(VF.Barline.type.NONE);
stavesmo145735.setContext(context);
stavesmo145735.draw();
smo145735v0.draw(context, stavesmo145735);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo14824112.format([smo148241v0], 274);
const stavesmo148241 = new VF.Stave(1404, 1605.225303590934, 288);
stavesmo148241.setAttribute('id', 'stavesmo148241');
stavesmo148241.setBegBarType(VF.Barline.type.NONE);
stavesmo148241.setContext(context);
stavesmo148241.draw();
smo148241v0.draw(context, stavesmo148241);
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo219153 = smo150652.getStemDirection();
smo150652.setStemDirection(dirsmo219153);
smo150653.setStemDirection(dirsmo219153);
smo150654.setStemDirection(dirsmo219153);
smo150655.setStemDirection(dirsmo219153);
const smo219153 = new VF.Beam([smo150652,smo150653,smo150654,smo150655]);
const dirsmo219154 = smo150656.getStemDirection();
smo150656.setStemDirection(dirsmo219154);
smo150657.setStemDirection(dirsmo219154);
const smo219154 = new VF.Beam([smo150656,smo150657]);
const smo150662 = new VF.Tuplet([smo150653,smo150654,smo150655], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo153048
fmtsmo15067812.format([smo150678v0], 274);
const stavesmo150678 = new VF.Stave(1404, 1687.225303590934, 288);
stavesmo150678.setAttribute('id', 'stavesmo150678');
stavesmo150678.setBegBarType(VF.Barline.type.NONE);
stavesmo150678.setContext(context);
stavesmo150678.draw();
smo150678v0.draw(context, stavesmo150678);
smo219153.setContext(context);
smo219153.draw();
smo219154.setContext(context);
smo219154.draw();
smo150662.setContext(context).draw();
const fmtsmo11254513 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo112545v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112545v0ar = [];
const smo112521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112521.setAttribute('id', 'smo112521');
smo112545v0ar.push(smo112521);
const smo112522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112522.setAttribute('id', 'smo112522');
smo112545v0ar.push(smo112522);
const smo112523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo112523.setAttribute('id', 'smo112523');
smo112545v0ar.push(smo112523);
const smo112524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112524.setAttribute('id', 'smo112524');
smo112545v0ar.push(smo112524);
const smo112525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112525.setAttribute('id', 'smo112525');
smo112545v0ar.push(smo112525);
const smo112526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo112526.setAttribute('id', 'smo112526');
smo112545v0ar.push(smo112526);
const smo112527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112527.setAttribute('id', 'smo112527');
smo112545v0ar.push(smo112527);
const smo112528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo112528.setAttribute('id', 'smo112528');
smo112545v0ar.push(smo112528);
const smo112529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo112529.setAttribute('id', 'smo112529');
smo112545v0ar.push(smo112529);
smo112545v0.addTickables(smo112545v0ar)
fmtsmo11254513.joinVoices([smo112545v0]);
const fmtsmo11497213 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo114972v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114972v0ar = [];
const smo114948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114948.setAttribute('id', 'smo114948');
smo114972v0ar.push(smo114948);
const smo114949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114949.setAttribute('id', 'smo114949');
smo114972v0ar.push(smo114949);
const smo114950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114950.setAttribute('id', 'smo114950');
smo114972v0ar.push(smo114950);
const smo114951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo114951.setAttribute('id', 'smo114951');
smo114972v0ar.push(smo114951);
const smo114952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo114952.setAttribute('id', 'smo114952');
smo114972v0ar.push(smo114952);
const smo114953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo114953.setAttribute('id', 'smo114953');
smo114972v0ar.push(smo114953);
const smo114954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114954.setAttribute('id', 'smo114954');
smo114972v0ar.push(smo114954);
const smo114955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114955.setAttribute('id', 'smo114955');
smo114972v0ar.push(smo114955);
const smo114956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114956.setAttribute('id', 'smo114956');
smo114972v0ar.push(smo114956);
smo114972v0.addTickables(smo114972v0ar)
fmtsmo11497213.joinVoices([smo114972v0]);
const fmtsmo11739013 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo117390v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117390v0ar = [];
const smo117366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117366.setAttribute('id', 'smo117366');
smo117390v0ar.push(smo117366);
const smo117367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117367.setAttribute('id', 'smo117367');
smo117390v0ar.push(smo117367);
const smo117368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo117368.setAttribute('id', 'smo117368');
smo117390v0ar.push(smo117368);
const smo117369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo117369.setAttribute('id', 'smo117369');
smo117390v0ar.push(smo117369);
const smo117370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo117370.setAttribute('id', 'smo117370');
smo117390v0ar.push(smo117370);
const smo117371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo117371.setAttribute('id', 'smo117371');
smo117390v0ar.push(smo117371);
const smo117372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo117372.setAttribute('id', 'smo117372');
smo117390v0ar.push(smo117372);
const smo117373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117373.setAttribute('id', 'smo117373');
smo117390v0ar.push(smo117373);
const smo117374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo117374.setAttribute('id', 'smo117374');
smo117390v0ar.push(smo117374);
smo117390v0.addTickables(smo117390v0ar)
fmtsmo11739013.joinVoices([smo117390v0]);
const fmtsmo11976413 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo119764v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119764v0ar = [];
const smo119740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119740.setAttribute('id', 'smo119740');
smo119764v0ar.push(smo119740);
const smo119741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119741.setAttribute('id', 'smo119741');
smo119764v0ar.push(smo119741);
const smo119742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119742.setAttribute('id', 'smo119742');
smo119764v0ar.push(smo119742);
const smo119743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119743.setAttribute('id', 'smo119743');
smo119764v0ar.push(smo119743);
const smo119744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo119744.setAttribute('id', 'smo119744');
smo119764v0ar.push(smo119744);
const smo119745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo119745.setAttribute('id', 'smo119745');
smo119764v0ar.push(smo119745);
const smo119746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119746.setAttribute('id', 'smo119746');
smo119764v0ar.push(smo119746);
const smo119747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119747.setAttribute('id', 'smo119747');
smo119764v0ar.push(smo119747);
const smo119748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119748.setAttribute('id', 'smo119748');
smo119764v0ar.push(smo119748);
smo119764v0.addTickables(smo119764v0ar)
fmtsmo11976413.joinVoices([smo119764v0]);
const fmtsmo12212413 = new VF.Formatter();
//
// voices and notes for stave 4 13
const smo122124v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122124v0ar = [];
const smo122105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122105.setAttribute('id', 'smo122105');
const  smo227600 = new VF.Articulation('a.').setPosition(3);
smo122105.addModifier(smo227600, 0);
smo122124v0ar.push(smo122105);
const smo122107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo122107.setAttribute('id', 'smo122107');
smo122124v0ar.push(smo122107);
const smo122108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo122108.setAttribute('id', 'smo122108');
smo122124v0ar.push(smo122108);
smo122124v0.addTickables(smo122124v0ar)
fmtsmo12212413.joinVoices([smo122124v0]);
const fmtsmo12442413 = new VF.Formatter();
//
// voices and notes for stave 5 13
const smo124424v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124424v0ar = [];
const smo124401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo124401.setAttribute('id', 'smo124401');
smo124424v0ar.push(smo124401);
const smo124402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124402.setAttribute('id', 'smo124402');
smo124424v0ar.push(smo124402);
const smo124403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo124403.setAttribute('id', 'smo124403');
smo124424v0ar.push(smo124403);
const smo124404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo124404.setAttribute('id', 'smo124404');
smo124424v0ar.push(smo124404);
const smo124405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo124405.setAttribute('id', 'smo124405');
smo124424v0ar.push(smo124405);
const smo124406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo124406.setAttribute('id', 'smo124406');
smo124424v0ar.push(smo124406);
const smo124407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124407.setAttribute('id', 'smo124407');
smo124424v0ar.push(smo124407);
const smo124408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo124408.setAttribute('id', 'smo124408');
smo124424v0ar.push(smo124408);
smo124424v0.addTickables(smo124424v0ar)
fmtsmo12442413.joinVoices([smo124424v0]);
const fmtsmo12683013 = new VF.Formatter();
//
// voices and notes for stave 6 13
const smo126830v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126830v0ar = [];
const smo126807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo126807.setAttribute('id', 'smo126807');
smo126830v0ar.push(smo126807);
const smo126808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126808.setAttribute('id', 'smo126808');
smo126830v0ar.push(smo126808);
const smo126809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo126809.setAttribute('id', 'smo126809');
smo126830v0ar.push(smo126809);
const smo126810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo126810.setAttribute('id', 'smo126810');
smo126830v0ar.push(smo126810);
const smo126811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo126811.setAttribute('id', 'smo126811');
smo126830v0ar.push(smo126811);
const smo126812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo126812.setAttribute('id', 'smo126812');
smo126830v0ar.push(smo126812);
const smo126813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126813.setAttribute('id', 'smo126813');
smo126830v0ar.push(smo126813);
const smo126814 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126814.setAttribute('id', 'smo126814');
smo126830v0ar.push(smo126814);
smo126830v0.addTickables(smo126830v0ar)
fmtsmo12683013.joinVoices([smo126830v0]);
const fmtsmo12917313 = new VF.Formatter();
//
// voices and notes for stave 7 13
const smo129173v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129173v0ar = [];
const smo129157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129157.setAttribute('id', 'smo129157');
smo129173v0ar.push(smo129157);
smo129173v0.addTickables(smo129173v0ar)
fmtsmo12917313.joinVoices([smo129173v0]);
const fmtsmo13152313 = new VF.Formatter();
//
// voices and notes for stave 8 13
const smo131523v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131523v0ar = [];
const smo131507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131507.setAttribute('id', 'smo131507');
smo131523v0ar.push(smo131507);
smo131523v0.addTickables(smo131523v0ar)
fmtsmo13152313.joinVoices([smo131523v0]);
const fmtsmo13392913 = new VF.Formatter();
//
// voices and notes for stave 9 13
const smo133929v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133929v0ar = [];
const smo133906 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo133906.setAttribute('id', 'smo133906');
smo133929v0ar.push(smo133906);
const smo133907 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133907.setAttribute('id', 'smo133907');
smo133929v0ar.push(smo133907);
const smo133908 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133908.setAttribute('id', 'smo133908');
smo133929v0ar.push(smo133908);
const smo133909 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo133909.setAttribute('id', 'smo133909');
smo133929v0ar.push(smo133909);
const smo133910 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133910.setAttribute('id', 'smo133910');
smo133929v0ar.push(smo133910);
const smo133911 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo133911.setAttribute('id', 'smo133911');
smo133929v0ar.push(smo133911);
const smo133912 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133912.setAttribute('id', 'smo133912');
smo133929v0ar.push(smo133912);
const smo133913 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo133913.setAttribute('id', 'smo133913');
smo133929v0ar.push(smo133913);
smo133929v0.addTickables(smo133929v0ar)
fmtsmo13392913.joinVoices([smo133929v0]);
const fmtsmo13630213 = new VF.Formatter();
//
// voices and notes for stave 10 13
const smo136302v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136302v0ar = [];
const smo136279 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo136279.setAttribute('id', 'smo136279');
smo136302v0ar.push(smo136279);
const smo136280 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136280.setAttribute('id', 'smo136280');
smo136302v0ar.push(smo136280);
const smo136281 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136281.setAttribute('id', 'smo136281');
smo136302v0ar.push(smo136281);
const smo136282 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo136282.setAttribute('id', 'smo136282');
smo136302v0ar.push(smo136282);
const smo136283 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136283.setAttribute('id', 'smo136283');
smo136302v0ar.push(smo136283);
const smo136284 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136284.setAttribute('id', 'smo136284');
smo136302v0ar.push(smo136284);
const smo136285 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo136285.setAttribute('id', 'smo136285');
smo136302v0ar.push(smo136285);
const smo136286 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo136286.setAttribute('id', 'smo136286');
smo136302v0ar.push(smo136286);
smo136302v0.addTickables(smo136302v0ar)
fmtsmo13630213.joinVoices([smo136302v0]);
const fmtsmo13864813 = new VF.Formatter();
//
// voices and notes for stave 11 13
const smo138648v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138648v0ar = [];
const smo138625 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo138625.setAttribute('id', 'smo138625');
smo138648v0ar.push(smo138625);
const smo138626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138626.setAttribute('id', 'smo138626');
smo138648v0ar.push(smo138626);
const smo138627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo138627.setAttribute('id', 'smo138627');
smo138648v0ar.push(smo138627);
const smo138628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo138628.setAttribute('id', 'smo138628');
smo138648v0ar.push(smo138628);
const smo138629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo138629.setAttribute('id', 'smo138629');
smo138648v0ar.push(smo138629);
const smo138630 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo138630.setAttribute('id', 'smo138630');
smo138648v0ar.push(smo138630);
const smo138631 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138631.setAttribute('id', 'smo138631');
smo138648v0ar.push(smo138631);
const smo138632 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo138632.setAttribute('id', 'smo138632');
smo138648v0ar.push(smo138632);
smo138648v0.addTickables(smo138648v0ar)
fmtsmo13864813.joinVoices([smo138648v0]);
const fmtsmo14098313 = new VF.Formatter();
//
// voices and notes for stave 12 13
const smo140983v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo140983v0ar = [];
const smo140964 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140964.setAttribute('id', 'smo140964');
const  smo227601 = new VF.Articulation('a.').setPosition(3);
smo140964.addModifier(smo227601, 0);
smo140983v0ar.push(smo140964);
const smo140966 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo140966.setAttribute('id', 'smo140966');
smo140983v0ar.push(smo140966);
const smo140967 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/2/n"]}'))
smo140967.setAttribute('id', 'smo140967');
smo140983v0ar.push(smo140967);
smo140983v0.addTickables(smo140983v0ar)
fmtsmo14098313.joinVoices([smo140983v0]);
const fmtsmo14331013 = new VF.Formatter();
//
// voices and notes for stave 13 13
const smo143310v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143310v0ar = [];
const smo143287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo143287.setAttribute('id', 'smo143287');
smo143310v0ar.push(smo143287);
const smo143288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143288.setAttribute('id', 'smo143288');
smo143310v0ar.push(smo143288);
const smo143289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo143289.setAttribute('id', 'smo143289');
smo143310v0ar.push(smo143289);
const smo143290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo143290.setAttribute('id', 'smo143290');
smo143310v0ar.push(smo143290);
const smo143291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo143291.setAttribute('id', 'smo143291');
smo143310v0ar.push(smo143291);
const smo143292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo143292.setAttribute('id', 'smo143292');
smo143310v0ar.push(smo143292);
const smo143293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143293.setAttribute('id', 'smo143293');
smo143310v0ar.push(smo143293);
const smo143294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo143294.setAttribute('id', 'smo143294');
smo143310v0ar.push(smo143294);
smo143310v0.addTickables(smo143310v0ar)
fmtsmo14331013.joinVoices([smo143310v0]);
const fmtsmo14575213 = new VF.Formatter();
//
// voices and notes for stave 14 13
const smo145752v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145752v0ar = [];
const smo145736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145736.setAttribute('id', 'smo145736');
smo145752v0ar.push(smo145736);
smo145752v0.addTickables(smo145752v0ar)
fmtsmo14575213.joinVoices([smo145752v0]);
const fmtsmo14826113 = new VF.Formatter();
//
// voices and notes for stave 15 13
const smo148261v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148261v0ar = [];
const smo148242 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148242.setAttribute('id', 'smo148242');
const  smo227602 = new VF.Articulation('a.').setPosition(3);
smo148242.addModifier(smo227602, 0);
smo148261v0ar.push(smo148242);
const smo148244 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo148244.setAttribute('id', 'smo148244');
smo148261v0ar.push(smo148244);
const smo148245 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo148245.setAttribute('id', 'smo148245');
smo148261v0ar.push(smo148245);
smo148261v0.addTickables(smo148261v0ar)
fmtsmo14826113.joinVoices([smo148261v0]);
const fmtsmo15070513 = new VF.Formatter();
//
// voices and notes for stave 16 13
const smo150705v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150705v0ar = [];
const smo150679 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150679.setAttribute('id', 'smo150679');
const smo1506790acc = new VF.Accidental('n');
smo150679.addModifier(smo1506790acc, 0);
smo150705v0ar.push(smo150679);
const smo150680 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150680.setAttribute('id', 'smo150680');
smo150705v0ar.push(smo150680);
const smo150681 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150681.setAttribute('id', 'smo150681');
smo150705v0ar.push(smo150681);
const smo150682 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150682.setAttribute('id', 'smo150682');
smo150705v0ar.push(smo150682);
const smo150683 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150683.setAttribute('id', 'smo150683');
smo150705v0ar.push(smo150683);
const smo150684 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150684.setAttribute('id', 'smo150684');
smo150705v0ar.push(smo150684);
const smo150685 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150685.setAttribute('id', 'smo150685');
smo150705v0ar.push(smo150685);
const smo150686 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150686.setAttribute('id', 'smo150686');
smo150705v0ar.push(smo150686);
const smo150687 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150687.setAttribute('id', 'smo150687');
smo150705v0ar.push(smo150687);
const smo150688 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150688.setAttribute('id', 'smo150688');
smo150705v0ar.push(smo150688);
smo150705v0.addTickables(smo150705v0ar)
fmtsmo15070513.joinVoices([smo150705v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
const dirsmo219173 = smo112521.getStemDirection();
smo112521.setStemDirection(dirsmo219173);
smo112522.setStemDirection(dirsmo219173);
smo112523.setStemDirection(dirsmo219173);
const smo219173 = new VF.Beam([smo112521,smo112522,smo112523]);
const dirsmo219174 = smo112524.getStemDirection();
smo112524.setStemDirection(dirsmo219174);
smo112525.setStemDirection(dirsmo219174);
const smo219174 = new VF.Beam([smo112524,smo112525]);
const dirsmo219175 = smo112527.getStemDirection();
smo112527.setStemDirection(dirsmo219175);
smo112528.setStemDirection(dirsmo219175);
const smo219175 = new VF.Beam([smo112527,smo112528]);
const dirsmo219177 = smo114948.getStemDirection();
smo114948.setStemDirection(dirsmo219177);
smo114949.setStemDirection(dirsmo219177);
smo114950.setStemDirection(dirsmo219177);
const smo219177 = new VF.Beam([smo114948,smo114949,smo114950]);
const dirsmo219178 = smo114951.getStemDirection();
smo114951.setStemDirection(dirsmo219178);
smo114952.setStemDirection(dirsmo219178);
const smo219178 = new VF.Beam([smo114951,smo114952]);
const dirsmo219179 = smo114954.getStemDirection();
smo114954.setStemDirection(dirsmo219179);
smo114955.setStemDirection(dirsmo219179);
const smo219179 = new VF.Beam([smo114954,smo114955]);
const dirsmo219181 = smo117366.getStemDirection();
smo117366.setStemDirection(dirsmo219181);
smo117367.setStemDirection(dirsmo219181);
smo117368.setStemDirection(dirsmo219181);
const smo219181 = new VF.Beam([smo117366,smo117367,smo117368]);
const dirsmo219182 = smo117369.getStemDirection();
smo117369.setStemDirection(dirsmo219182);
smo117370.setStemDirection(dirsmo219182);
const smo219182 = new VF.Beam([smo117369,smo117370]);
const dirsmo219183 = smo117372.getStemDirection();
smo117372.setStemDirection(dirsmo219183);
smo117373.setStemDirection(dirsmo219183);
const smo219183 = new VF.Beam([smo117372,smo117373]);
const dirsmo219185 = smo119740.getStemDirection();
smo119740.setStemDirection(dirsmo219185);
smo119741.setStemDirection(dirsmo219185);
smo119742.setStemDirection(dirsmo219185);
const smo219185 = new VF.Beam([smo119740,smo119741,smo119742]);
const dirsmo219186 = smo119743.getStemDirection();
smo119743.setStemDirection(dirsmo219186);
smo119744.setStemDirection(dirsmo219186);
const smo219186 = new VF.Beam([smo119743,smo119744]);
const dirsmo219187 = smo119746.getStemDirection();
smo119746.setStemDirection(dirsmo219187);
smo119747.setStemDirection(dirsmo219187);
const smo219187 = new VF.Beam([smo119746,smo119747]);
 
// formatting measures in staff group smo153054
fmtsmo11254513.format([smo112545v0,smo114972v0,smo117390v0,smo119764v0,smo122124v0], 300);
const stavesmo112545 = new VF.Stave(1692, 183.2253035909339, 314);
stavesmo112545.setAttribute('id', 'stavesmo112545');
stavesmo112545.setBegBarType(VF.Barline.type.NONE);
stavesmo112545.setContext(context);
stavesmo112545.draw();
smo112545v0.draw(context, stavesmo112545);
smo219173.setContext(context);
smo219173.draw();
smo219174.setContext(context);
smo219174.draw();
smo219175.setContext(context);
smo219175.draw();
const stavesmo114972 = new VF.Stave(1692, 288.2253035909339, 314);
stavesmo114972.setAttribute('id', 'stavesmo114972');
stavesmo114972.setBegBarType(VF.Barline.type.NONE);
stavesmo114972.setContext(context);
stavesmo114972.draw();
smo114972v0.draw(context, stavesmo114972);
smo219177.setContext(context);
smo219177.draw();
smo219178.setContext(context);
smo219178.draw();
smo219179.setContext(context);
smo219179.draw();
const stavesmo117390 = new VF.Stave(1692, 409.2253035909339, 314);
stavesmo117390.setAttribute('id', 'stavesmo117390');
stavesmo117390.setBegBarType(VF.Barline.type.NONE);
stavesmo117390.setContext(context);
stavesmo117390.draw();
smo117390v0.draw(context, stavesmo117390);
smo219181.setContext(context);
smo219181.draw();
smo219182.setContext(context);
smo219182.draw();
smo219183.setContext(context);
smo219183.draw();
const stavesmo119764 = new VF.Stave(1692, 539.2253035909339, 314);
stavesmo119764.setAttribute('id', 'stavesmo119764');
stavesmo119764.setBegBarType(VF.Barline.type.NONE);
stavesmo119764.setContext(context);
stavesmo119764.draw();
smo119764v0.draw(context, stavesmo119764);
smo219185.setContext(context);
smo219185.draw();
smo219186.setContext(context);
smo219186.draw();
smo219187.setContext(context);
smo219187.draw();
const stavesmo122124 = new VF.Stave(1692, 609.2253035909339, 314);
stavesmo122124.setAttribute('id', 'stavesmo122124');
stavesmo122124.setBegBarType(VF.Barline.type.NONE);
stavesmo122124.setContext(context);
stavesmo122124.draw();
smo122124v0.draw(context, stavesmo122124);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo219190 = smo124402.getStemDirection();
smo124402.setStemDirection(dirsmo219190);
smo124403.setStemDirection(dirsmo219190);
const smo219190 = new VF.Beam([smo124402,smo124403]);
const dirsmo219191 = smo124405.getStemDirection();
smo124405.setStemDirection(dirsmo219191);
smo124406.setStemDirection(dirsmo219191);
smo124407.setStemDirection(dirsmo219191);
smo124408.setStemDirection(dirsmo219191);
const smo219191 = new VF.Beam([smo124405,smo124406,smo124407,smo124408]);
const dirsmo219193 = smo126808.getStemDirection();
smo126808.setStemDirection(dirsmo219193);
smo126809.setStemDirection(dirsmo219193);
const smo219193 = new VF.Beam([smo126808,smo126809]);
const dirsmo219194 = smo126811.getStemDirection();
smo126811.setStemDirection(dirsmo219194);
smo126812.setStemDirection(dirsmo219194);
smo126813.setStemDirection(dirsmo219194);
smo126814.setStemDirection(dirsmo219194);
const smo219194 = new VF.Beam([smo126811,smo126812,smo126813,smo126814]);
 
// formatting measures in staff group smo153056
fmtsmo12442413.format([smo124424v0,smo126830v0,smo129173v0,smo131523v0], 300);
const stavesmo124424 = new VF.Stave(1692, 690.2253035909339, 314);
stavesmo124424.setAttribute('id', 'stavesmo124424');
stavesmo124424.setBegBarType(VF.Barline.type.NONE);
stavesmo124424.setContext(context);
stavesmo124424.draw();
smo124424v0.draw(context, stavesmo124424);
smo219190.setContext(context);
smo219190.draw();
smo219191.setContext(context);
smo219191.draw();
const stavesmo126830 = new VF.Stave(1692, 750.2253035909339, 314);
stavesmo126830.setAttribute('id', 'stavesmo126830');
stavesmo126830.setBegBarType(VF.Barline.type.NONE);
stavesmo126830.setContext(context);
stavesmo126830.draw();
smo126830v0.draw(context, stavesmo126830);
smo219193.setContext(context);
smo219193.draw();
smo219194.setContext(context);
smo219194.draw();
const stavesmo129173 = new VF.Stave(1692, 811.2253035909339, 314);
stavesmo129173.setAttribute('id', 'stavesmo129173');
stavesmo129173.setBegBarType(VF.Barline.type.NONE);
stavesmo129173.setContext(context);
stavesmo129173.draw();
smo129173v0.draw(context, stavesmo129173);
const stavesmo131523 = new VF.Stave(1692, 881.2253035909339, 314);
stavesmo131523.setAttribute('id', 'stavesmo131523');
stavesmo131523.setBegBarType(VF.Barline.type.NONE);
stavesmo131523.setContext(context);
stavesmo131523.draw();
smo131523v0.draw(context, stavesmo131523);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo219198 = smo133907.getStemDirection();
smo133907.setStemDirection(dirsmo219198);
smo133908.setStemDirection(dirsmo219198);
const smo219198 = new VF.Beam([smo133907,smo133908]);
const dirsmo219199 = smo133910.getStemDirection();
smo133910.setStemDirection(dirsmo219199);
smo133911.setStemDirection(dirsmo219199);
smo133912.setStemDirection(dirsmo219199);
smo133913.setStemDirection(dirsmo219199);
const smo219199 = new VF.Beam([smo133910,smo133911,smo133912,smo133913]);
const dirsmo219201 = smo136280.getStemDirection();
smo136280.setStemDirection(dirsmo219201);
smo136281.setStemDirection(dirsmo219201);
const smo219201 = new VF.Beam([smo136280,smo136281]);
const dirsmo219202 = smo136283.getStemDirection();
smo136283.setStemDirection(dirsmo219202);
smo136284.setStemDirection(dirsmo219202);
smo136285.setStemDirection(dirsmo219202);
smo136286.setStemDirection(dirsmo219202);
const smo219202 = new VF.Beam([smo136283,smo136284,smo136285,smo136286]);
const dirsmo219204 = smo138626.getStemDirection();
smo138626.setStemDirection(dirsmo219204);
smo138627.setStemDirection(dirsmo219204);
const smo219204 = new VF.Beam([smo138626,smo138627]);
const dirsmo219205 = smo138629.getStemDirection();
smo138629.setStemDirection(dirsmo219205);
smo138630.setStemDirection(dirsmo219205);
smo138631.setStemDirection(dirsmo219205);
smo138632.setStemDirection(dirsmo219205);
const smo219205 = new VF.Beam([smo138629,smo138630,smo138631,smo138632]);
 
// formatting measures in staff group smo153058
fmtsmo13392913.format([smo133929v0,smo136302v0,smo138648v0,smo140983v0], 300);
const stavesmo133929 = new VF.Stave(1692, 986.2253035909339, 314);
stavesmo133929.setAttribute('id', 'stavesmo133929');
stavesmo133929.setBegBarType(VF.Barline.type.NONE);
stavesmo133929.setContext(context);
stavesmo133929.draw();
smo133929v0.draw(context, stavesmo133929);
smo219198.setContext(context);
smo219198.draw();
smo219199.setContext(context);
smo219199.draw();
const stavesmo136302 = new VF.Stave(1692, 1105.225303590934, 314);
stavesmo136302.setAttribute('id', 'stavesmo136302');
stavesmo136302.setBegBarType(VF.Barline.type.NONE);
stavesmo136302.setContext(context);
stavesmo136302.draw();
smo136302v0.draw(context, stavesmo136302);
smo219201.setContext(context);
smo219201.draw();
smo219202.setContext(context);
smo219202.draw();
const stavesmo138648 = new VF.Stave(1692, 1221.225303590934, 314);
stavesmo138648.setAttribute('id', 'stavesmo138648');
stavesmo138648.setBegBarType(VF.Barline.type.NONE);
stavesmo138648.setContext(context);
stavesmo138648.draw();
smo138648v0.draw(context, stavesmo138648);
smo219204.setContext(context);
smo219204.draw();
smo219205.setContext(context);
smo219205.draw();
const stavesmo140983 = new VF.Stave(1692, 1317.225303590934, 314);
stavesmo140983.setAttribute('id', 'stavesmo140983');
stavesmo140983.setBegBarType(VF.Barline.type.NONE);
stavesmo140983.setContext(context);
stavesmo140983.draw();
smo140983v0.draw(context, stavesmo140983);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo219208 = smo143288.getStemDirection();
smo143288.setStemDirection(dirsmo219208);
smo143289.setStemDirection(dirsmo219208);
const smo219208 = new VF.Beam([smo143288,smo143289]);
const dirsmo219209 = smo143291.getStemDirection();
smo143291.setStemDirection(dirsmo219209);
smo143292.setStemDirection(dirsmo219209);
smo143293.setStemDirection(dirsmo219209);
smo143294.setStemDirection(dirsmo219209);
const smo219209 = new VF.Beam([smo143291,smo143292,smo143293,smo143294]);
 
// formatting measures in staff group smo145509
fmtsmo14331013.format([smo143310v0], 300);
const stavesmo143310 = new VF.Stave(1692, 1419.225303590934, 314);
stavesmo143310.setAttribute('id', 'stavesmo143310');
stavesmo143310.setBegBarType(VF.Barline.type.NONE);
stavesmo143310.setContext(context);
stavesmo143310.draw();
smo143310v0.draw(context, stavesmo143310);
smo219208.setContext(context);
smo219208.draw();
smo219209.setContext(context);
smo219209.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo14575213.format([smo145752v0], 300);
const stavesmo145752 = new VF.Stave(1692, 1500.225303590934, 314);
stavesmo145752.setAttribute('id', 'stavesmo145752');
stavesmo145752.setBegBarType(VF.Barline.type.NONE);
stavesmo145752.setContext(context);
stavesmo145752.draw();
smo145752v0.draw(context, stavesmo145752);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo14826113.format([smo148261v0], 300);
const stavesmo148261 = new VF.Stave(1692, 1605.225303590934, 314);
stavesmo148261.setAttribute('id', 'stavesmo148261');
stavesmo148261.setBegBarType(VF.Barline.type.NONE);
stavesmo148261.setContext(context);
stavesmo148261.draw();
smo148261v0.draw(context, stavesmo148261);
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo219213 = smo150679.getStemDirection();
smo150679.setStemDirection(dirsmo219213);
smo150680.setStemDirection(dirsmo219213);
smo150681.setStemDirection(dirsmo219213);
smo150682.setStemDirection(dirsmo219213);
const smo219213 = new VF.Beam([smo150679,smo150680,smo150681,smo150682]);
const dirsmo219214 = smo150683.getStemDirection();
smo150683.setStemDirection(dirsmo219214);
smo150684.setStemDirection(dirsmo219214);
const smo219214 = new VF.Beam([smo150683,smo150684]);
const smo150689 = new VF.Tuplet([smo150680,smo150681,smo150682], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo153048
fmtsmo15070513.format([smo150705v0], 300);
const stavesmo150705 = new VF.Stave(1692, 1687.225303590934, 314);
stavesmo150705.setAttribute('id', 'stavesmo150705');
stavesmo150705.setBegBarType(VF.Barline.type.NONE);
stavesmo150705.setContext(context);
stavesmo150705.draw();
smo150705v0.draw(context, stavesmo150705);
smo219213.setContext(context);
smo219213.draw();
smo219214.setContext(context);
smo219214.draw();
smo150689.setContext(context).draw();
const fmtsmo11256814 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo112568v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo112568v0ar = [];
const smo112546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo112546.setAttribute('id', 'smo112546');
smo112568v0ar.push(smo112546);
const smo112547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo112547.setAttribute('id', 'smo112547');
const  smo227637 = new VF.Articulation('a.').setPosition(3);
smo112547.addModifier(smo227637, 0);
smo112568v0ar.push(smo112547);
const smo112549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo112549.setAttribute('id', 'smo112549');
const  smo227638 = new VF.Articulation('a.').setPosition(3);
smo112549.addModifier(smo227638, 0);
smo112568v0ar.push(smo112549);
const smo112551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo112551.setAttribute('id', 'smo112551');
const  smo227639 = new VF.Articulation('a.').setPosition(3);
smo112551.addModifier(smo227639, 0);
smo112568v0ar.push(smo112551);
smo112568v0.addTickables(smo112568v0ar)
fmtsmo11256814.joinVoices([smo112568v0]);
const fmtsmo11499514 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo114995v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo114995v0ar = [];
const smo114973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114973.setAttribute('id', 'smo114973');
smo114995v0ar.push(smo114973);
const smo114974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo114974.setAttribute('id', 'smo114974');
const  smo227640 = new VF.Articulation('a.').setPosition(3);
smo114974.addModifier(smo227640, 0);
smo114995v0ar.push(smo114974);
const smo114976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo114976.setAttribute('id', 'smo114976');
const  smo227641 = new VF.Articulation('a.').setPosition(3);
smo114976.addModifier(smo227641, 0);
smo114995v0ar.push(smo114976);
const smo114978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo114978.setAttribute('id', 'smo114978');
const  smo227642 = new VF.Articulation('a.').setPosition(3);
smo114978.addModifier(smo227642, 0);
smo114995v0ar.push(smo114978);
smo114995v0.addTickables(smo114995v0ar)
fmtsmo11499514.joinVoices([smo114995v0]);
const fmtsmo11741314 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo117413v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo117413v0ar = [];
const smo117391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo117391.setAttribute('id', 'smo117391');
smo117413v0ar.push(smo117391);
const smo117392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo117392.setAttribute('id', 'smo117392');
const  smo227643 = new VF.Articulation('a.').setPosition(3);
smo117392.addModifier(smo227643, 0);
smo117413v0ar.push(smo117392);
const smo117394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo117394.setAttribute('id', 'smo117394');
const  smo227644 = new VF.Articulation('a.').setPosition(3);
smo117394.addModifier(smo227644, 0);
smo117413v0ar.push(smo117394);
const smo117396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo117396.setAttribute('id', 'smo117396');
const  smo227645 = new VF.Articulation('a.').setPosition(3);
smo117396.addModifier(smo227645, 0);
smo117413v0ar.push(smo117396);
smo117413v0.addTickables(smo117413v0ar)
fmtsmo11741314.joinVoices([smo117413v0]);
const fmtsmo11978714 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo119787v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo119787v0ar = [];
const smo119765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119765.setAttribute('id', 'smo119765');
smo119787v0ar.push(smo119765);
const smo119766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo119766.setAttribute('id', 'smo119766');
const  smo227646 = new VF.Articulation('a.').setPosition(3);
smo119766.addModifier(smo227646, 0);
smo119787v0ar.push(smo119766);
const smo119768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo119768.setAttribute('id', 'smo119768');
const  smo227647 = new VF.Articulation('a.').setPosition(3);
smo119768.addModifier(smo227647, 0);
smo119787v0ar.push(smo119768);
const smo119770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo119770.setAttribute('id', 'smo119770');
const  smo227648 = new VF.Articulation('a.').setPosition(3);
smo119770.addModifier(smo227648, 0);
smo119787v0ar.push(smo119770);
smo119787v0.addTickables(smo119787v0ar)
fmtsmo11978714.joinVoices([smo119787v0]);
const fmtsmo12214414 = new VF.Formatter();
//
// voices and notes for stave 4 14
const smo122144v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo122144v0ar = [];
const smo122125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122125.setAttribute('id', 'smo122125');
smo122144v0ar.push(smo122125);
const smo122126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122126.setAttribute('id', 'smo122126');
smo122144v0ar.push(smo122126);
const smo122127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo122127.setAttribute('id', 'smo122127');
smo122144v0ar.push(smo122127);
const smo122128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo122128.setAttribute('id', 'smo122128');
smo122144v0ar.push(smo122128);
smo122144v0.addTickables(smo122144v0ar)
fmtsmo12214414.joinVoices([smo122144v0]);
const fmtsmo12444614 = new VF.Formatter();
//
// voices and notes for stave 5 14
const smo124446v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo124446v0ar = [];
const smo124425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124425.setAttribute('id', 'smo124425');
smo124446v0ar.push(smo124425);
const smo124426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo124426.setAttribute('id', 'smo124426');
smo124446v0ar.push(smo124426);
const smo124427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124427.setAttribute('id', 'smo124427');
smo124446v0ar.push(smo124427);
const smo124428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124428.setAttribute('id', 'smo124428');
smo124446v0ar.push(smo124428);
const smo124429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124429.setAttribute('id', 'smo124429');
smo124446v0ar.push(smo124429);
const smo124430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo124430.setAttribute('id', 'smo124430');
smo124446v0ar.push(smo124430);
smo124446v0.addTickables(smo124446v0ar)
fmtsmo12444614.joinVoices([smo124446v0]);
const fmtsmo12685214 = new VF.Formatter();
//
// voices and notes for stave 6 14
const smo126852v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo126852v0ar = [];
const smo126831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126831.setAttribute('id', 'smo126831');
smo126852v0ar.push(smo126831);
const smo126832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126832.setAttribute('id', 'smo126832');
smo126852v0ar.push(smo126832);
const smo126833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo126833.setAttribute('id', 'smo126833');
smo126852v0ar.push(smo126833);
const smo126834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126834.setAttribute('id', 'smo126834');
smo126852v0ar.push(smo126834);
const smo126835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo126835.setAttribute('id', 'smo126835');
smo126852v0ar.push(smo126835);
const smo126836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo126836.setAttribute('id', 'smo126836');
smo126852v0ar.push(smo126836);
smo126852v0.addTickables(smo126852v0ar)
fmtsmo12685214.joinVoices([smo126852v0]);
const fmtsmo12919014 = new VF.Formatter();
//
// voices and notes for stave 7 14
const smo129190v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo129190v0ar = [];
const smo129174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo129174.setAttribute('id', 'smo129174');
smo129190v0ar.push(smo129174);
smo129190v0.addTickables(smo129190v0ar)
fmtsmo12919014.joinVoices([smo129190v0]);
const fmtsmo13154014 = new VF.Formatter();
//
// voices and notes for stave 8 14
const smo131540v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo131540v0ar = [];
const smo131524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo131524.setAttribute('id', 'smo131524');
smo131540v0ar.push(smo131524);
smo131540v0.addTickables(smo131540v0ar)
fmtsmo13154014.joinVoices([smo131540v0]);
const fmtsmo13395114 = new VF.Formatter();
//
// voices and notes for stave 9 14
const smo133951v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo133951v0ar = [];
const smo133930 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133930.setAttribute('id', 'smo133930');
smo133951v0ar.push(smo133930);
const smo133931 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo133931.setAttribute('id', 'smo133931');
smo133951v0ar.push(smo133931);
const smo133932 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133932.setAttribute('id', 'smo133932');
smo133951v0ar.push(smo133932);
const smo133933 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo133933.setAttribute('id', 'smo133933');
smo133951v0ar.push(smo133933);
const smo133934 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133934.setAttribute('id', 'smo133934');
smo133951v0ar.push(smo133934);
const smo133935 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo133935.setAttribute('id', 'smo133935');
smo133951v0ar.push(smo133935);
smo133951v0.addTickables(smo133951v0ar)
fmtsmo13395114.joinVoices([smo133951v0]);
const fmtsmo13632414 = new VF.Formatter();
//
// voices and notes for stave 10 14
const smo136324v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo136324v0ar = [];
const smo136303 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136303.setAttribute('id', 'smo136303');
smo136324v0ar.push(smo136303);
const smo136304 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136304.setAttribute('id', 'smo136304');
smo136324v0ar.push(smo136304);
const smo136305 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136305.setAttribute('id', 'smo136305');
smo136324v0ar.push(smo136305);
const smo136306 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136306.setAttribute('id', 'smo136306');
smo136324v0ar.push(smo136306);
const smo136307 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo136307.setAttribute('id', 'smo136307');
smo136324v0ar.push(smo136307);
const smo136308 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo136308.setAttribute('id', 'smo136308');
smo136324v0ar.push(smo136308);
smo136324v0.addTickables(smo136324v0ar)
fmtsmo13632414.joinVoices([smo136324v0]);
const fmtsmo13867014 = new VF.Formatter();
//
// voices and notes for stave 11 14
const smo138670v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo138670v0ar = [];
const smo138649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138649.setAttribute('id', 'smo138649');
smo138670v0ar.push(smo138649);
const smo138650 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138650.setAttribute('id', 'smo138650');
smo138670v0ar.push(smo138650);
const smo138651 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138651.setAttribute('id', 'smo138651');
smo138670v0ar.push(smo138651);
const smo138652 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo138652.setAttribute('id', 'smo138652');
smo138670v0ar.push(smo138652);
const smo138653 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138653.setAttribute('id', 'smo138653');
smo138670v0ar.push(smo138653);
const smo138654 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo138654.setAttribute('id', 'smo138654');
smo138670v0ar.push(smo138654);
smo138670v0.addTickables(smo138670v0ar)
fmtsmo13867014.joinVoices([smo138670v0]);
const fmtsmo14100314 = new VF.Formatter();
//
// voices and notes for stave 12 14
const smo141003v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo141003v0ar = [];
const smo140984 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140984.setAttribute('id', 'smo140984');
smo141003v0ar.push(smo140984);
const smo140985 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140985.setAttribute('id', 'smo140985');
smo141003v0ar.push(smo140985);
const smo140986 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo140986.setAttribute('id', 'smo140986');
smo141003v0ar.push(smo140986);
const smo140987 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo140987.setAttribute('id', 'smo140987');
smo141003v0ar.push(smo140987);
smo141003v0.addTickables(smo141003v0ar)
fmtsmo14100314.joinVoices([smo141003v0]);
const fmtsmo14333214 = new VF.Formatter();
//
// voices and notes for stave 13 14
const smo143332v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo143332v0ar = [];
const smo143311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143311.setAttribute('id', 'smo143311');
smo143332v0ar.push(smo143311);
const smo143312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo143312.setAttribute('id', 'smo143312');
smo143332v0ar.push(smo143312);
const smo143313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143313.setAttribute('id', 'smo143313');
smo143332v0ar.push(smo143313);
const smo143314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143314.setAttribute('id', 'smo143314');
smo143332v0ar.push(smo143314);
const smo143315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143315.setAttribute('id', 'smo143315');
smo143332v0ar.push(smo143315);
const smo143316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo143316.setAttribute('id', 'smo143316');
smo143332v0ar.push(smo143316);
smo143332v0.addTickables(smo143332v0ar)
fmtsmo14333214.joinVoices([smo143332v0]);
const fmtsmo14576914 = new VF.Formatter();
//
// voices and notes for stave 14 14
const smo145769v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo145769v0ar = [];
const smo145753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo145753.setAttribute('id', 'smo145753');
smo145769v0ar.push(smo145753);
smo145769v0.addTickables(smo145769v0ar)
fmtsmo14576914.joinVoices([smo145769v0]);
const fmtsmo14828114 = new VF.Formatter();
//
// voices and notes for stave 15 14
const smo148281v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo148281v0ar = [];
const smo148262 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148262.setAttribute('id', 'smo148262');
smo148281v0ar.push(smo148262);
const smo148263 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148263.setAttribute('id', 'smo148263');
smo148281v0ar.push(smo148263);
const smo148264 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo148264.setAttribute('id', 'smo148264');
smo148281v0ar.push(smo148264);
const smo148265 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo148265.setAttribute('id', 'smo148265');
smo148281v0ar.push(smo148265);
smo148281v0.addTickables(smo148281v0ar)
fmtsmo14828114.joinVoices([smo148281v0]);
const fmtsmo15073214 = new VF.Formatter();
//
// voices and notes for stave 16 14
const smo150732v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo150732v0ar = [];
const smo150706 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150706.setAttribute('id', 'smo150706');
const smo1507060acc = new VF.Accidental('n');
smo150706.addModifier(smo1507060acc, 0);
smo150732v0ar.push(smo150706);
const smo150707 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150707.setAttribute('id', 'smo150707');
smo150732v0ar.push(smo150707);
const smo150708 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150708.setAttribute('id', 'smo150708');
smo150732v0ar.push(smo150708);
const smo150709 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150709.setAttribute('id', 'smo150709');
smo150732v0ar.push(smo150709);
const smo150710 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150710.setAttribute('id', 'smo150710');
smo150732v0ar.push(smo150710);
const smo150711 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150711.setAttribute('id', 'smo150711');
smo150732v0ar.push(smo150711);
const smo150712 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150712.setAttribute('id', 'smo150712');
smo150732v0ar.push(smo150712);
const smo150713 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150713.setAttribute('id', 'smo150713');
smo150732v0ar.push(smo150713);
const smo150714 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo150714.setAttribute('id', 'smo150714');
smo150732v0ar.push(smo150714);
const smo150715 = new VF.StaveNote(JSON.parse('{"clef":"percussion","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo150715.setAttribute('id', 'smo150715');
smo150732v0ar.push(smo150715);
smo150732v0.addTickables(smo150732v0ar)
fmtsmo15073214.joinVoices([smo150732v0]);
// create beam groups and tuplets for format grp smo153054 before formatting
 
// formatting measures in staff group smo153054
fmtsmo11256814.format([smo112568v0,smo114995v0,smo117413v0,smo119787v0,smo122144v0], 274);
const stavesmo112568 = new VF.Stave(2006, 183.2253035909339, 288);
stavesmo112568.setAttribute('id', 'stavesmo112568');
stavesmo112568.setBegBarType(VF.Barline.type.NONE);
stavesmo112568.setContext(context);
stavesmo112568.draw();
smo112568v0.draw(context, stavesmo112568);
const stavesmo114995 = new VF.Stave(2006, 288.2253035909339, 288);
stavesmo114995.setAttribute('id', 'stavesmo114995');
stavesmo114995.setBegBarType(VF.Barline.type.NONE);
stavesmo114995.setContext(context);
stavesmo114995.draw();
smo114995v0.draw(context, stavesmo114995);
const stavesmo117413 = new VF.Stave(2006, 409.2253035909339, 288);
stavesmo117413.setAttribute('id', 'stavesmo117413');
stavesmo117413.setBegBarType(VF.Barline.type.NONE);
stavesmo117413.setContext(context);
stavesmo117413.draw();
smo117413v0.draw(context, stavesmo117413);
const stavesmo119787 = new VF.Stave(2006, 539.2253035909339, 288);
stavesmo119787.setAttribute('id', 'stavesmo119787');
stavesmo119787.setBegBarType(VF.Barline.type.NONE);
stavesmo119787.setContext(context);
stavesmo119787.draw();
smo119787v0.draw(context, stavesmo119787);
const stavesmo122144 = new VF.Stave(2006, 609.2253035909339, 288);
stavesmo122144.setAttribute('id', 'stavesmo122144');
stavesmo122144.setBegBarType(VF.Barline.type.NONE);
stavesmo122144.setContext(context);
stavesmo122144.draw();
smo122144v0.draw(context, stavesmo122144);
// create beam groups and tuplets for format grp smo153056 before formatting
const dirsmo219238 = smo124426.getStemDirection();
smo124426.setStemDirection(dirsmo219238);
smo124427.setStemDirection(dirsmo219238);
const smo219238 = new VF.Beam([smo124426,smo124427]);
const dirsmo219239 = smo124428.getStemDirection();
smo124428.setStemDirection(dirsmo219239);
smo124429.setStemDirection(dirsmo219239);
const smo219239 = new VF.Beam([smo124428,smo124429]);
const dirsmo219241 = smo126832.getStemDirection();
smo126832.setStemDirection(dirsmo219241);
smo126833.setStemDirection(dirsmo219241);
const smo219241 = new VF.Beam([smo126832,smo126833]);
const dirsmo219242 = smo126834.getStemDirection();
smo126834.setStemDirection(dirsmo219242);
smo126835.setStemDirection(dirsmo219242);
const smo219242 = new VF.Beam([smo126834,smo126835]);
 
// formatting measures in staff group smo153056
fmtsmo12444614.format([smo124446v0,smo126852v0,smo129190v0,smo131540v0], 274);
const stavesmo124446 = new VF.Stave(2006, 690.2253035909339, 288);
stavesmo124446.setAttribute('id', 'stavesmo124446');
stavesmo124446.setBegBarType(VF.Barline.type.NONE);
stavesmo124446.setContext(context);
stavesmo124446.draw();
smo124446v0.draw(context, stavesmo124446);
smo219238.setContext(context);
smo219238.draw();
smo219239.setContext(context);
smo219239.draw();
const stavesmo126852 = new VF.Stave(2006, 750.2253035909339, 288);
stavesmo126852.setAttribute('id', 'stavesmo126852');
stavesmo126852.setBegBarType(VF.Barline.type.NONE);
stavesmo126852.setContext(context);
stavesmo126852.draw();
smo126852v0.draw(context, stavesmo126852);
smo219241.setContext(context);
smo219241.draw();
smo219242.setContext(context);
smo219242.draw();
const stavesmo129190 = new VF.Stave(2006, 811.2253035909339, 288);
stavesmo129190.setAttribute('id', 'stavesmo129190');
stavesmo129190.setBegBarType(VF.Barline.type.NONE);
stavesmo129190.setContext(context);
stavesmo129190.draw();
smo129190v0.draw(context, stavesmo129190);
const stavesmo131540 = new VF.Stave(2006, 881.2253035909339, 288);
stavesmo131540.setAttribute('id', 'stavesmo131540');
stavesmo131540.setBegBarType(VF.Barline.type.NONE);
stavesmo131540.setContext(context);
stavesmo131540.draw();
smo131540v0.draw(context, stavesmo131540);
// create beam groups and tuplets for format grp smo153058 before formatting
const dirsmo219246 = smo133931.getStemDirection();
smo133931.setStemDirection(dirsmo219246);
smo133932.setStemDirection(dirsmo219246);
const smo219246 = new VF.Beam([smo133931,smo133932]);
const dirsmo219247 = smo133933.getStemDirection();
smo133933.setStemDirection(dirsmo219247);
smo133934.setStemDirection(dirsmo219247);
const smo219247 = new VF.Beam([smo133933,smo133934]);
const dirsmo219249 = smo136304.getStemDirection();
smo136304.setStemDirection(dirsmo219249);
smo136305.setStemDirection(dirsmo219249);
const smo219249 = new VF.Beam([smo136304,smo136305]);
const dirsmo219250 = smo136306.getStemDirection();
smo136306.setStemDirection(dirsmo219250);
smo136307.setStemDirection(dirsmo219250);
const smo219250 = new VF.Beam([smo136306,smo136307]);
const dirsmo219252 = smo138650.getStemDirection();
smo138650.setStemDirection(dirsmo219252);
smo138651.setStemDirection(dirsmo219252);
const smo219252 = new VF.Beam([smo138650,smo138651]);
const dirsmo219253 = smo138652.getStemDirection();
smo138652.setStemDirection(dirsmo219253);
smo138653.setStemDirection(dirsmo219253);
const smo219253 = new VF.Beam([smo138652,smo138653]);
 
// formatting measures in staff group smo153058
fmtsmo13395114.format([smo133951v0,smo136324v0,smo138670v0,smo141003v0], 274);
const stavesmo133951 = new VF.Stave(2006, 986.2253035909339, 288);
stavesmo133951.setAttribute('id', 'stavesmo133951');
stavesmo133951.setBegBarType(VF.Barline.type.NONE);
stavesmo133951.setContext(context);
stavesmo133951.draw();
smo133951v0.draw(context, stavesmo133951);
smo219246.setContext(context);
smo219246.draw();
smo219247.setContext(context);
smo219247.draw();
const stavesmo136324 = new VF.Stave(2006, 1105.225303590934, 288);
stavesmo136324.setAttribute('id', 'stavesmo136324');
stavesmo136324.setBegBarType(VF.Barline.type.NONE);
stavesmo136324.setContext(context);
stavesmo136324.draw();
smo136324v0.draw(context, stavesmo136324);
smo219249.setContext(context);
smo219249.draw();
smo219250.setContext(context);
smo219250.draw();
const stavesmo138670 = new VF.Stave(2006, 1221.225303590934, 288);
stavesmo138670.setAttribute('id', 'stavesmo138670');
stavesmo138670.setBegBarType(VF.Barline.type.NONE);
stavesmo138670.setContext(context);
stavesmo138670.draw();
smo138670v0.draw(context, stavesmo138670);
smo219252.setContext(context);
smo219252.draw();
smo219253.setContext(context);
smo219253.draw();
const stavesmo141003 = new VF.Stave(2006, 1317.225303590934, 288);
stavesmo141003.setAttribute('id', 'stavesmo141003');
stavesmo141003.setBegBarType(VF.Barline.type.NONE);
stavesmo141003.setContext(context);
stavesmo141003.draw();
smo141003v0.draw(context, stavesmo141003);
// create beam groups and tuplets for format grp smo145509 before formatting
const dirsmo219256 = smo143312.getStemDirection();
smo143312.setStemDirection(dirsmo219256);
smo143313.setStemDirection(dirsmo219256);
const smo219256 = new VF.Beam([smo143312,smo143313]);
const dirsmo219257 = smo143314.getStemDirection();
smo143314.setStemDirection(dirsmo219257);
smo143315.setStemDirection(dirsmo219257);
const smo219257 = new VF.Beam([smo143314,smo143315]);
 
// formatting measures in staff group smo145509
fmtsmo14333214.format([smo143332v0], 274);
const stavesmo143332 = new VF.Stave(2006, 1419.225303590934, 288);
stavesmo143332.setAttribute('id', 'stavesmo143332');
stavesmo143332.setBegBarType(VF.Barline.type.NONE);
stavesmo143332.setContext(context);
stavesmo143332.draw();
smo143332v0.draw(context, stavesmo143332);
smo219256.setContext(context);
smo219256.draw();
smo219257.setContext(context);
smo219257.draw();
// create beam groups and tuplets for format grp smo147977 before formatting
 
// formatting measures in staff group smo147977
fmtsmo14576914.format([smo145769v0], 274);
const stavesmo145769 = new VF.Stave(2006, 1500.225303590934, 288);
stavesmo145769.setAttribute('id', 'stavesmo145769');
stavesmo145769.setBegBarType(VF.Barline.type.NONE);
stavesmo145769.setContext(context);
stavesmo145769.draw();
smo145769v0.draw(context, stavesmo145769);
// create beam groups and tuplets for format grp smo150335 before formatting
 
// formatting measures in staff group smo150335
fmtsmo14828114.format([smo148281v0], 274);
const stavesmo148281 = new VF.Stave(2006, 1605.225303590934, 288);
stavesmo148281.setAttribute('id', 'stavesmo148281');
stavesmo148281.setBegBarType(VF.Barline.type.NONE);
stavesmo148281.setContext(context);
stavesmo148281.draw();
smo148281v0.draw(context, stavesmo148281);
// create beam groups and tuplets for format grp smo153048 before formatting
const dirsmo219261 = smo150706.getStemDirection();
smo150706.setStemDirection(dirsmo219261);
smo150707.setStemDirection(dirsmo219261);
smo150708.setStemDirection(dirsmo219261);
smo150709.setStemDirection(dirsmo219261);
const smo219261 = new VF.Beam([smo150706,smo150707,smo150708,smo150709]);
const dirsmo219262 = smo150710.getStemDirection();
smo150710.setStemDirection(dirsmo219262);
smo150711.setStemDirection(dirsmo219262);
const smo219262 = new VF.Beam([smo150710,smo150711]);
const smo150716 = new VF.Tuplet([smo150707,smo150708,smo150709], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo153048
fmtsmo15073214.format([smo150732v0], 274);
const stavesmo150732 = new VF.Stave(2006, 1687.225303590934, 288);
stavesmo150732.setAttribute('id', 'stavesmo150732');
stavesmo150732.setBegBarType(VF.Barline.type.NONE);
stavesmo150732.setContext(context);
stavesmo150732.draw();
smo150732v0.draw(context, stavesmo150732);
smo219261.setContext(context);
smo219261.draw();
smo219262.setContext(context);
smo219262.draw();
smo150716.setContext(context).draw();
const rightsmo153048stavesmo11256816 = new VF.StaveConnector(stavesmo112568, stavesmo122144).setType(0);
rightsmo153048stavesmo11256816.setContext(context).draw();
const rightsmo153048stavesmo12444616 = new VF.StaveConnector(stavesmo124446, stavesmo131540).setType(0);
rightsmo153048stavesmo12444616.setContext(context).draw();
const rightsmo153048stavesmo13395116 = new VF.StaveConnector(stavesmo133951, stavesmo141003).setType(0);
rightsmo153048stavesmo13395116.setContext(context).draw();
// modifier from 5-10-0-2 to 5-10-0-3
const smo227683 = new VF.StaveTie({ first_note: smo124335, last_note: smo124336, 
          firstNote: smo124335, lastNote: smo124336, first_indices: [0], last_indices: [0]});
smo227683.setContext(context).draw();
// modifier from 5-12-0-2 to 5-12-0-3
const smo227684 = new VF.StaveTie({ first_note: smo124381, last_note: smo124382, 
          firstNote: smo124381, lastNote: smo124382, first_indices: [0], last_indices: [0]});
smo227684.setContext(context).draw();
// modifier from 5-14-0-2 to 5-14-0-3
const smo227685 = new VF.StaveTie({ first_note: smo124427, last_note: smo124428, 
          firstNote: smo124427, lastNote: smo124428, first_indices: [0], last_indices: [0]});
smo227685.setContext(context).draw();
// modifier from 6-10-0-2 to 6-10-0-3
const smo227686 = new VF.StaveTie({ first_note: smo126741, last_note: smo126742, 
          firstNote: smo126741, lastNote: smo126742, first_indices: [0], last_indices: [0]});
smo227686.setContext(context).draw();
// modifier from 9-10-0-2 to 9-10-0-3
const smo227687 = new VF.StaveTie({ first_note: smo133840, last_note: smo133841, 
          firstNote: smo133840, lastNote: smo133841, first_indices: [0], last_indices: [0]});
smo227687.setContext(context).draw();
// modifier from 9-12-0-2 to 9-12-0-3
const smo227688 = new VF.StaveTie({ first_note: smo133886, last_note: smo133887, 
          firstNote: smo133886, lastNote: smo133887, first_indices: [0], last_indices: [0]});
smo227688.setContext(context).draw();
// modifier from 9-14-0-2 to 9-14-0-3
const smo227689 = new VF.StaveTie({ first_note: smo133932, last_note: smo133933, 
          firstNote: smo133932, lastNote: smo133933, first_indices: [0], last_indices: [0]});
smo227689.setContext(context).draw();
// modifier from 10-10-0-2 to 10-10-0-3
const smo227690 = new VF.StaveTie({ first_note: smo136213, last_note: smo136214, 
          firstNote: smo136213, lastNote: smo136214, first_indices: [0], last_indices: [0]});
smo227690.setContext(context).draw();
// modifier from 10-12-0-2 to 10-12-0-3
const smo227691 = new VF.StaveTie({ first_note: smo136259, last_note: smo136260, 
          firstNote: smo136259, lastNote: smo136260, first_indices: [0], last_indices: [0]});
smo227691.setContext(context).draw();
// modifier from 10-14-0-2 to 10-14-0-3
const smo227692 = new VF.StaveTie({ first_note: smo136305, last_note: smo136306, 
          firstNote: smo136305, lastNote: smo136306, first_indices: [0], last_indices: [0]});
smo227692.setContext(context).draw();
// modifier from 11-10-0-2 to 11-10-0-3
const smo227693 = new VF.StaveTie({ first_note: smo138559, last_note: smo138560, 
          firstNote: smo138559, lastNote: smo138560, first_indices: [0], last_indices: [0]});
smo227693.setContext(context).draw();
// modifier from 11-12-0-2 to 11-12-0-3
const smo227694 = new VF.StaveTie({ first_note: smo138605, last_note: smo138606, 
          firstNote: smo138605, lastNote: smo138606, first_indices: [0], last_indices: [0]});
smo227694.setContext(context).draw();
// modifier from 11-14-0-2 to 11-14-0-3
const smo227695 = new VF.StaveTie({ first_note: smo138651, last_note: smo138652, 
          firstNote: smo138651, lastNote: smo138652, first_indices: [0], last_indices: [0]});
smo227695.setContext(context).draw();
// modifier from 13-10-0-2 to 13-10-0-3
const smo227696 = new VF.StaveTie({ first_note: smo143221, last_note: smo143222, 
          firstNote: smo143221, lastNote: smo143222, first_indices: [0], last_indices: [0]});
smo227696.setContext(context).draw();
// modifier from 13-12-0-2 to 13-12-0-3
const smo227697 = new VF.StaveTie({ first_note: smo143267, last_note: smo143268, 
          firstNote: smo143267, lastNote: smo143268, first_indices: [0], last_indices: [0]});
smo227697.setContext(context).draw();
// modifier from 13-14-0-2 to 13-14-0-3
const smo227698 = new VF.StaveTie({ first_note: smo143313, last_note: smo143314, 
          firstNote: smo143313, lastNote: smo143314, first_indices: [0], last_indices: [0]});
smo227698.setContext(context).draw();
}
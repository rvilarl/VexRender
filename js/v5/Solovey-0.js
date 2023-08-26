// @@ Solovey p 1/2 ((Op. 1)) by Folks
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1483.6363636363635');
svg.setAttributeNS('', 'height', '1920');
svg.setAttributeNS('', 'viewBox', '0 0 1484 1920');
//
// create the musical objects
VF.setMusicFont("Bravura","Gonville","Custom");
const fmtsmo2383180 = new VF.Formatter();
//
// voices and notes for stave 0 0
const smo238318v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238318v0ar = [];
const smo238302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238302.setAttribute('id', 'smo238302');
smo238318v0ar.push(smo238302);
smo238318v0.addTickables(smo238318v0ar)
fmtsmo2383180.joinVoices([smo238318v0]);
const fmtsmo2393400 = new VF.Formatter();
//
// voices and notes for stave 1 0
const smo239340v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239340v0ar = [];
const smo239323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239323.setAttribute('id', 'smo239323');
smo239340v0ar.push(smo239323);
const smo239324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239324.setAttribute('id', 'smo239324');
smo239340v0ar.push(smo239324);
smo239340v0.addTickables(smo239340v0ar)
fmtsmo2393400.joinVoices([smo239340v0]);
const fmtsmo2403380 = new VF.Formatter();
//
// voices and notes for stave 2 0
const smo240338v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240338v0ar = [];
const smo240321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240321.setAttribute('id', 'smo240321');
smo240338v0ar.push(smo240321);
const smo240322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240322.setAttribute('id', 'smo240322');
smo240338v0ar.push(smo240322);
smo240338v0.addTickables(smo240338v0ar)
fmtsmo2403380.joinVoices([smo240338v0]);
const fmtsmo2412920 = new VF.Formatter();
//
// voices and notes for stave 3 0
const smo241292v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241292v0ar = [];
const smo241273 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241273.setAttribute('id', 'smo241273');
smo241292v0ar.push(smo241273);
const smo241274 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241274.setAttribute('id', 'smo241274');
smo241292v0ar.push(smo241274);
const smo241275 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241275.setAttribute('id', 'smo241275');
smo241292v0ar.push(smo241275);
const smo241276 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241276.setAttribute('id', 'smo241276');
smo241292v0ar.push(smo241276);
smo241292v0.addTickables(smo241292v0ar)
fmtsmo2412920.joinVoices([smo241292v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2383180.format([smo238318v0,smo239340v0,smo240338v0,smo241292v0], 85);
const stavesmo238318 = new VF.Stave(55, 219, 303);
stavesmo238318.setAttribute('id', 'stavesmo238318');
stavesmo238318.setBegBarType(1);
stavesmo238318.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":72}'), -1 * 0);
stavesmo238318.addClef('treble');
stavesmo238318.addTimeSignature('4/4');
const keysmo238318 = new VF.KeySignature('F');
keysmo238318.addToStave(stavesmo238318);
stavesmo238318.setContext(context);
stavesmo238318.draw();
smo238318v0.draw(context, stavesmo238318);
const stavesmo239340 = new VF.Stave(55, 312, 303);
stavesmo239340.setAttribute('id', 'stavesmo239340');
stavesmo239340.setBegBarType(1);
stavesmo239340.addClef('treble');
stavesmo239340.addTimeSignature('4/4');
const keysmo239340 = new VF.KeySignature('F');
keysmo239340.addToStave(stavesmo239340);
stavesmo239340.setContext(context);
stavesmo239340.draw();
smo239340v0.draw(context, stavesmo239340);
const stavesmo240338 = new VF.Stave(55, 391, 303);
stavesmo240338.setAttribute('id', 'stavesmo240338');
stavesmo240338.setBegBarType(1);
stavesmo240338.addClef('treble');
stavesmo240338.addTimeSignature('4/4');
const keysmo240338 = new VF.KeySignature('F');
keysmo240338.addToStave(stavesmo240338);
stavesmo240338.setContext(context);
stavesmo240338.draw();
smo240338v0.draw(context, stavesmo240338);
const stavesmo241292 = new VF.Stave(55, 468, 303);
stavesmo241292.setAttribute('id', 'stavesmo241292');
stavesmo241292.setBegBarType(1);
stavesmo241292.addClef('bass');
stavesmo241292.addTimeSignature('4/4');
const keysmo241292 = new VF.KeySignature('F');
keysmo241292.addToStave(stavesmo241292);
stavesmo241292.setContext(context);
stavesmo241292.draw();
smo241292v0.draw(context, stavesmo241292);
const leftsmo242235stavesmo2383183 = new VF.StaveConnector(stavesmo238318, stavesmo241292).setType(1);
leftsmo242235stavesmo2383183.setContext(context).draw();
const fmtsmo2383351 = new VF.Formatter();
//
// voices and notes for stave 0 1
const smo238335v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238335v0ar = [];
const smo238319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238319.setAttribute('id', 'smo238319');
smo238335v0ar.push(smo238319);
smo238335v0.addTickables(smo238335v0ar)
fmtsmo2383351.joinVoices([smo238335v0]);
const fmtsmo2393591 = new VF.Formatter();
//
// voices and notes for stave 1 1
const smo239359v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239359v0ar = [];
const smo239341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239341.setAttribute('id', 'smo239341');
smo239359v0ar.push(smo239341);
const smo239342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239342.setAttribute('id', 'smo239342');
smo239359v0ar.push(smo239342);
const smo239343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239343.setAttribute('id', 'smo239343');
smo239359v0ar.push(smo239343);
smo239359v0.addTickables(smo239359v0ar)
fmtsmo2393591.joinVoices([smo239359v0]);
const fmtsmo2403561 = new VF.Formatter();
//
// voices and notes for stave 2 1
const smo240356v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240356v0ar = [];
const smo240339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240339.setAttribute('id', 'smo240339');
smo240356v0ar.push(smo240339);
const smo240340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240340.setAttribute('id', 'smo240340');
smo240356v0ar.push(smo240340);
smo240356v0.addTickables(smo240356v0ar)
fmtsmo2403561.joinVoices([smo240356v0]);
const fmtsmo2413121 = new VF.Formatter();
//
// voices and notes for stave 3 1
const smo241312v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241312v0ar = [];
const smo241293 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241293.setAttribute('id', 'smo241293');
smo241312v0ar.push(smo241293);
const smo241294 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241294.setAttribute('id', 'smo241294');
smo241312v0ar.push(smo241294);
const smo241295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241295.setAttribute('id', 'smo241295');
smo241312v0ar.push(smo241295);
const smo241296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241296.setAttribute('id', 'smo241296');
smo241312v0ar.push(smo241296);
smo241312v0.addTickables(smo241312v0ar)
fmtsmo2413121.joinVoices([smo241312v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2383351.format([smo238335v0,smo239359v0,smo240356v0,smo241312v0], 106);
const stavesmo238335 = new VF.Stave(358, 219, 120);
stavesmo238335.setAttribute('id', 'stavesmo238335');
stavesmo238335.setBegBarType(VF.Barline.type.NONE);
stavesmo238335.setContext(context);
stavesmo238335.draw();
smo238335v0.draw(context, stavesmo238335);
const stavesmo239359 = new VF.Stave(358, 312, 120);
stavesmo239359.setAttribute('id', 'stavesmo239359');
stavesmo239359.setBegBarType(VF.Barline.type.NONE);
stavesmo239359.setContext(context);
stavesmo239359.draw();
smo239359v0.draw(context, stavesmo239359);
const stavesmo240356 = new VF.Stave(358, 391, 120);
stavesmo240356.setAttribute('id', 'stavesmo240356');
stavesmo240356.setBegBarType(VF.Barline.type.NONE);
stavesmo240356.setContext(context);
stavesmo240356.draw();
smo240356v0.draw(context, stavesmo240356);
const stavesmo241312 = new VF.Stave(358, 468, 120);
stavesmo241312.setAttribute('id', 'stavesmo241312');
stavesmo241312.setBegBarType(VF.Barline.type.NONE);
stavesmo241312.setContext(context);
stavesmo241312.draw();
smo241312v0.draw(context, stavesmo241312);
const fmtsmo2383522 = new VF.Formatter();
//
// voices and notes for stave 0 2
const smo238352v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238352v0ar = [];
const smo238336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238336.setAttribute('id', 'smo238336');
smo238352v0ar.push(smo238336);
smo238352v0.addTickables(smo238352v0ar)
fmtsmo2383522.joinVoices([smo238352v0]);
const fmtsmo2393782 = new VF.Formatter();
//
// voices and notes for stave 1 2
const smo239378v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239378v0ar = [];
const smo239360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239360.setAttribute('id', 'smo239360');
smo239378v0ar.push(smo239360);
const smo239361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo239361.setAttribute('id', 'smo239361');
const smo2393610acc = new VF.Accidental('n');
smo239361.addModifier(smo2393610acc, 0);
smo239378v0ar.push(smo239361);
const smo239362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239362.setAttribute('id', 'smo239362');
const smo2393620acc = new VF.Accidental('#');
smo239362.addModifier(smo2393620acc, 0);
smo239378v0ar.push(smo239362);
smo239378v0.addTickables(smo239378v0ar)
fmtsmo2393782.joinVoices([smo239378v0]);
const fmtsmo2403742 = new VF.Formatter();
//
// voices and notes for stave 2 2
const smo240374v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240374v0ar = [];
const smo240357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240357.setAttribute('id', 'smo240357');
smo240374v0ar.push(smo240357);
const smo240358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240358.setAttribute('id', 'smo240358');
smo240374v0ar.push(smo240358);
smo240374v0.addTickables(smo240374v0ar)
fmtsmo2403742.joinVoices([smo240374v0]);
const fmtsmo2413322 = new VF.Formatter();
//
// voices and notes for stave 3 2
const smo241332v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241332v0ar = [];
const smo241313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241313.setAttribute('id', 'smo241313');
smo241332v0ar.push(smo241313);
const smo241314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241314.setAttribute('id', 'smo241314');
smo241332v0ar.push(smo241314);
const smo241315 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241315.setAttribute('id', 'smo241315');
smo241332v0ar.push(smo241315);
const smo241316 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241316.setAttribute('id', 'smo241316');
smo241332v0ar.push(smo241316);
smo241332v0.addTickables(smo241332v0ar)
fmtsmo2413322.joinVoices([smo241332v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2383522.format([smo238352v0,smo239378v0,smo240374v0,smo241332v0], 127);
const stavesmo238352 = new VF.Stave(478, 219, 141);
stavesmo238352.setAttribute('id', 'stavesmo238352');
stavesmo238352.setBegBarType(VF.Barline.type.NONE);
stavesmo238352.setContext(context);
stavesmo238352.draw();
smo238352v0.draw(context, stavesmo238352);
const stavesmo239378 = new VF.Stave(478, 312, 141);
stavesmo239378.setAttribute('id', 'stavesmo239378');
stavesmo239378.setBegBarType(VF.Barline.type.NONE);
stavesmo239378.setContext(context);
stavesmo239378.draw();
smo239378v0.draw(context, stavesmo239378);
const stavesmo240374 = new VF.Stave(478, 391, 141);
stavesmo240374.setAttribute('id', 'stavesmo240374');
stavesmo240374.setBegBarType(VF.Barline.type.NONE);
stavesmo240374.setContext(context);
stavesmo240374.draw();
smo240374v0.draw(context, stavesmo240374);
const stavesmo241332 = new VF.Stave(478, 468, 141);
stavesmo241332.setAttribute('id', 'stavesmo241332');
stavesmo241332.setBegBarType(VF.Barline.type.NONE);
stavesmo241332.setContext(context);
stavesmo241332.draw();
smo241332v0.draw(context, stavesmo241332);
const fmtsmo2383693 = new VF.Formatter();
//
// voices and notes for stave 0 3
const smo238369v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238369v0ar = [];
const smo238353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238353.setAttribute('id', 'smo238353');
smo238369v0ar.push(smo238353);
smo238369v0.addTickables(smo238369v0ar)
fmtsmo2383693.joinVoices([smo238369v0]);
const fmtsmo2393963 = new VF.Formatter();
//
// voices and notes for stave 1 3
const smo239396v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239396v0ar = [];
const smo239379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239379.setAttribute('id', 'smo239379');
smo239396v0ar.push(smo239379);
const smo239380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239380.setAttribute('id', 'smo239380');
smo239396v0ar.push(smo239380);
smo239396v0.addTickables(smo239396v0ar)
fmtsmo2393963.joinVoices([smo239396v0]);
const fmtsmo2403923 = new VF.Formatter();
//
// voices and notes for stave 2 3
const smo240392v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240392v0ar = [];
const smo240375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240375.setAttribute('id', 'smo240375');
smo240375.addModifier(new VF.Dot(), 0);
smo240392v0ar.push(smo240375);
const smo240376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240376.setAttribute('id', 'smo240376');
smo240392v0ar.push(smo240376);
smo240392v0.addTickables(smo240392v0ar)
fmtsmo2403923.joinVoices([smo240392v0]);
const fmtsmo2413523 = new VF.Formatter();
//
// voices and notes for stave 3 3
const smo241352v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241352v0ar = [];
const smo241333 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241333.setAttribute('id', 'smo241333');
smo241352v0ar.push(smo241333);
const smo241334 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241334.setAttribute('id', 'smo241334');
smo241352v0ar.push(smo241334);
const smo241335 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241335.setAttribute('id', 'smo241335');
smo241352v0ar.push(smo241335);
const smo241336 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241336.setAttribute('id', 'smo241336');
smo241352v0ar.push(smo241336);
smo241352v0.addTickables(smo241352v0ar)
fmtsmo2413523.joinVoices([smo241352v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2383693.format([smo238369v0,smo239396v0,smo240392v0,smo241352v0], 121);
const stavesmo238369 = new VF.Stave(619, 219, 135);
stavesmo238369.setAttribute('id', 'stavesmo238369');
stavesmo238369.setBegBarType(VF.Barline.type.NONE);
stavesmo238369.setContext(context);
stavesmo238369.draw();
smo238369v0.draw(context, stavesmo238369);
const stavesmo239396 = new VF.Stave(619, 312, 135);
stavesmo239396.setAttribute('id', 'stavesmo239396');
stavesmo239396.setBegBarType(VF.Barline.type.NONE);
stavesmo239396.setContext(context);
stavesmo239396.draw();
smo239396v0.draw(context, stavesmo239396);
const stavesmo240392 = new VF.Stave(619, 391, 135);
stavesmo240392.setAttribute('id', 'stavesmo240392');
stavesmo240392.setBegBarType(VF.Barline.type.NONE);
stavesmo240392.setContext(context);
stavesmo240392.draw();
smo240392v0.draw(context, stavesmo240392);
const stavesmo241352 = new VF.Stave(619, 468, 135);
stavesmo241352.setAttribute('id', 'stavesmo241352');
stavesmo241352.setBegBarType(VF.Barline.type.NONE);
stavesmo241352.setContext(context);
stavesmo241352.draw();
smo241352v0.draw(context, stavesmo241352);
const fmtsmo2383864 = new VF.Formatter();
//
// voices and notes for stave 0 4
const smo238386v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238386v0ar = [];
const smo238370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238370.setAttribute('id', 'smo238370');
smo238386v0ar.push(smo238370);
smo238386v0.addTickables(smo238386v0ar)
fmtsmo2383864.joinVoices([smo238386v0]);
const fmtsmo2394144 = new VF.Formatter();
//
// voices and notes for stave 1 4
const smo239414v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239414v0ar = [];
const smo239397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239397.setAttribute('id', 'smo239397');
smo239414v0ar.push(smo239397);
const smo239398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239398.setAttribute('id', 'smo239398');
smo239414v0ar.push(smo239398);
smo239414v0.addTickables(smo239414v0ar)
fmtsmo2394144.joinVoices([smo239414v0]);
const fmtsmo2404104 = new VF.Formatter();
//
// voices and notes for stave 2 4
const smo240410v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240410v0ar = [];
const smo240393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240393.setAttribute('id', 'smo240393');
smo240410v0ar.push(smo240393);
const smo240394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240394.setAttribute('id', 'smo240394');
smo240410v0ar.push(smo240394);
smo240410v0.addTickables(smo240410v0ar)
fmtsmo2404104.joinVoices([smo240410v0]);
const fmtsmo2413724 = new VF.Formatter();
//
// voices and notes for stave 3 4
const smo241372v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241372v0ar = [];
const smo241353 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241353.setAttribute('id', 'smo241353');
smo241372v0ar.push(smo241353);
const smo241354 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241354.setAttribute('id', 'smo241354');
smo241372v0ar.push(smo241354);
const smo241355 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241355.setAttribute('id', 'smo241355');
smo241372v0ar.push(smo241355);
const smo241356 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/3/n"]}'))
smo241356.setAttribute('id', 'smo241356');
const smo2413560acc = new VF.Accidental('#');
smo241356.addModifier(smo2413560acc, 0);
smo241372v0ar.push(smo241356);
smo241372v0.addTickables(smo241372v0ar)
fmtsmo2413724.joinVoices([smo241372v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2383864.format([smo238386v0,smo239414v0,smo240410v0,smo241372v0], 118);
const stavesmo238386 = new VF.Stave(754, 219, 132);
stavesmo238386.setAttribute('id', 'stavesmo238386');
stavesmo238386.setBegBarType(VF.Barline.type.NONE);
stavesmo238386.setContext(context);
stavesmo238386.draw();
smo238386v0.draw(context, stavesmo238386);
const stavesmo239414 = new VF.Stave(754, 312, 132);
stavesmo239414.setAttribute('id', 'stavesmo239414');
stavesmo239414.setBegBarType(VF.Barline.type.NONE);
stavesmo239414.setContext(context);
stavesmo239414.draw();
smo239414v0.draw(context, stavesmo239414);
const stavesmo240410 = new VF.Stave(754, 391, 132);
stavesmo240410.setAttribute('id', 'stavesmo240410');
stavesmo240410.setBegBarType(VF.Barline.type.NONE);
stavesmo240410.setContext(context);
stavesmo240410.draw();
smo240410v0.draw(context, stavesmo240410);
const stavesmo241372 = new VF.Stave(754, 468, 132);
stavesmo241372.setAttribute('id', 'stavesmo241372');
stavesmo241372.setBegBarType(VF.Barline.type.NONE);
stavesmo241372.setContext(context);
stavesmo241372.draw();
smo241372v0.draw(context, stavesmo241372);
const fmtsmo2384035 = new VF.Formatter();
//
// voices and notes for stave 0 5
const smo238403v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238403v0ar = [];
const smo238387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238387.setAttribute('id', 'smo238387');
smo238403v0ar.push(smo238387);
smo238403v0.addTickables(smo238403v0ar)
fmtsmo2384035.joinVoices([smo238403v0]);
const fmtsmo2394335 = new VF.Formatter();
//
// voices and notes for stave 1 5
const smo239433v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239433v0ar = [];
const smo239415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239415.setAttribute('id', 'smo239415');
smo239433v0ar.push(smo239415);
const smo239416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239416.setAttribute('id', 'smo239416');
smo239433v0ar.push(smo239416);
const smo239417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo239417.setAttribute('id', 'smo239417');
smo239433v0ar.push(smo239417);
smo239433v0.addTickables(smo239433v0ar)
fmtsmo2394335.joinVoices([smo239433v0]);
const fmtsmo2404295 = new VF.Formatter();
//
// voices and notes for stave 2 5
const smo240429v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240429v0ar = [];
const smo240411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240411.setAttribute('id', 'smo240411');
smo240429v0ar.push(smo240411);
const smo240412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240412.setAttribute('id', 'smo240412');
smo240429v0ar.push(smo240412);
const smo240413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240413.setAttribute('id', 'smo240413');
smo240429v0ar.push(smo240413);
smo240429v0.addTickables(smo240429v0ar)
fmtsmo2404295.joinVoices([smo240429v0]);
const fmtsmo2413925 = new VF.Formatter();
//
// voices and notes for stave 3 5
const smo241392v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241392v0ar = [];
const smo241373 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241373.setAttribute('id', 'smo241373');
smo241392v0ar.push(smo241373);
const smo241374 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241374.setAttribute('id', 'smo241374');
smo241392v0ar.push(smo241374);
const smo241375 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241375.setAttribute('id', 'smo241375');
smo241392v0ar.push(smo241375);
const smo241376 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241376.setAttribute('id', 'smo241376');
smo241392v0ar.push(smo241376);
smo241392v0.addTickables(smo241392v0ar)
fmtsmo2413925.joinVoices([smo241392v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2384035.format([smo238403v0,smo239433v0,smo240429v0,smo241392v0], 106);
const stavesmo238403 = new VF.Stave(886, 219, 120);
stavesmo238403.setAttribute('id', 'stavesmo238403');
stavesmo238403.setBegBarType(VF.Barline.type.NONE);
stavesmo238403.setContext(context);
stavesmo238403.draw();
smo238403v0.draw(context, stavesmo238403);
const stavesmo239433 = new VF.Stave(886, 312, 120);
stavesmo239433.setAttribute('id', 'stavesmo239433');
stavesmo239433.setBegBarType(VF.Barline.type.NONE);
stavesmo239433.setContext(context);
stavesmo239433.draw();
smo239433v0.draw(context, stavesmo239433);
const stavesmo240429 = new VF.Stave(886, 391, 120);
stavesmo240429.setAttribute('id', 'stavesmo240429');
stavesmo240429.setBegBarType(VF.Barline.type.NONE);
stavesmo240429.setContext(context);
stavesmo240429.draw();
smo240429v0.draw(context, stavesmo240429);
const stavesmo241392 = new VF.Stave(886, 468, 120);
stavesmo241392.setAttribute('id', 'stavesmo241392');
stavesmo241392.setBegBarType(VF.Barline.type.NONE);
stavesmo241392.setContext(context);
stavesmo241392.draw();
smo241392v0.draw(context, stavesmo241392);
const fmtsmo2384206 = new VF.Formatter();
//
// voices and notes for stave 0 6
const smo238420v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238420v0ar = [];
const smo238404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238404.setAttribute('id', 'smo238404');
smo238420v0ar.push(smo238404);
smo238420v0.addTickables(smo238420v0ar)
fmtsmo2384206.joinVoices([smo238420v0]);
const fmtsmo2394566 = new VF.Formatter();
//
// voices and notes for stave 1 6
const smo239456v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239456v0ar = [];
const smo239434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo239434.setAttribute('id', 'smo239434');
smo239456v0ar.push(smo239434);
const smo239435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239435.setAttribute('id', 'smo239435');
smo239456v0ar.push(smo239435);
const smo239436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo239436.setAttribute('id', 'smo239436');
smo239456v0ar.push(smo239436);
const smo239437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo239437.setAttribute('id', 'smo239437');
const smo2394370acc = new VF.Accidental('#');
smo239437.addModifier(smo2394370acc, 0);
smo239456v0ar.push(smo239437);
const smo239438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo239438.setAttribute('id', 'smo239438');
smo239456v0ar.push(smo239438);
const smo239439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239439.setAttribute('id', 'smo239439');
smo239456v0ar.push(smo239439);
const smo239440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239440.setAttribute('id', 'smo239440');
smo239456v0ar.push(smo239440);
smo239456v0.addTickables(smo239456v0ar)
fmtsmo2394566.joinVoices([smo239456v0]);
const fmtsmo2404496 = new VF.Formatter();
//
// voices and notes for stave 2 6
const smo240449v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240449v0ar = [];
const smo240430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240430.setAttribute('id', 'smo240430');
smo240449v0ar.push(smo240430);
const smo240431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240431.setAttribute('id', 'smo240431');
smo240449v0ar.push(smo240431);
const smo240432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240432.setAttribute('id', 'smo240432');
smo240449v0ar.push(smo240432);
const smo240433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240433.setAttribute('id', 'smo240433');
smo240449v0ar.push(smo240433);
smo240449v0.addTickables(smo240449v0ar)
fmtsmo2404496.joinVoices([smo240449v0]);
const fmtsmo2414126 = new VF.Formatter();
//
// voices and notes for stave 3 6
const smo241412v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241412v0ar = [];
const smo241393 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241393.setAttribute('id', 'smo241393');
smo241412v0ar.push(smo241393);
const smo241394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241394.setAttribute('id', 'smo241394');
smo241412v0ar.push(smo241394);
const smo241395 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241395.setAttribute('id', 'smo241395');
smo241412v0ar.push(smo241395);
const smo241396 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241396.setAttribute('id', 'smo241396');
smo241412v0ar.push(smo241396);
smo241412v0.addTickables(smo241412v0ar)
fmtsmo2414126.joinVoices([smo241412v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248554 = smo239435.getStemDirection();
smo239435.setStemDirection(dirsmo248554);
smo239436.setStemDirection(dirsmo248554);
smo239437.setStemDirection(dirsmo248554);
smo239438.setStemDirection(dirsmo248554);
const smo248554 = new VF.Beam([smo239435,smo239436,smo239437,smo239438]);
 
// formatting measures in staff group smo242235
fmtsmo2384206.format([smo238420v0,smo239456v0,smo240449v0,smo241412v0], 196);
const stavesmo238420 = new VF.Stave(1006, 219, 210);
stavesmo238420.setAttribute('id', 'stavesmo238420');
stavesmo238420.setBegBarType(VF.Barline.type.NONE);
stavesmo238420.setContext(context);
stavesmo238420.draw();
smo238420v0.draw(context, stavesmo238420);
const stavesmo239456 = new VF.Stave(1006, 312, 210);
stavesmo239456.setAttribute('id', 'stavesmo239456');
stavesmo239456.setBegBarType(VF.Barline.type.NONE);
stavesmo239456.setContext(context);
stavesmo239456.draw();
smo239456v0.draw(context, stavesmo239456);
smo248554.setContext(context);
smo248554.draw();
const stavesmo240449 = new VF.Stave(1006, 391, 210);
stavesmo240449.setAttribute('id', 'stavesmo240449');
stavesmo240449.setBegBarType(VF.Barline.type.NONE);
stavesmo240449.setContext(context);
stavesmo240449.draw();
smo240449v0.draw(context, stavesmo240449);
const stavesmo241412 = new VF.Stave(1006, 468, 210);
stavesmo241412.setAttribute('id', 'stavesmo241412');
stavesmo241412.setBegBarType(VF.Barline.type.NONE);
stavesmo241412.setContext(context);
stavesmo241412.draw();
smo241412v0.draw(context, stavesmo241412);
const fmtsmo2384377 = new VF.Formatter();
//
// voices and notes for stave 0 7
const smo238437v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238437v0ar = [];
const smo238421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238421.setAttribute('id', 'smo238421');
smo238437v0ar.push(smo238421);
smo238437v0.addTickables(smo238437v0ar)
fmtsmo2384377.joinVoices([smo238437v0]);
const fmtsmo2394777 = new VF.Formatter();
//
// voices and notes for stave 1 7
const smo239477v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239477v0ar = [];
const smo239457 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239457.setAttribute('id', 'smo239457');
smo239457.addModifier(new VF.Dot(), 0);
smo239477v0ar.push(smo239457);
const smo239458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239458.setAttribute('id', 'smo239458');
smo239477v0ar.push(smo239458);
const smo239459 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239459.setAttribute('id', 'smo239459');
smo239477v0ar.push(smo239459);
const smo239460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo239460.setAttribute('id', 'smo239460');
smo239477v0ar.push(smo239460);
const smo239461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239461.setAttribute('id', 'smo239461');
smo239477v0ar.push(smo239461);
smo239477v0.addTickables(smo239477v0ar)
fmtsmo2394777.joinVoices([smo239477v0]);
const fmtsmo2404687 = new VF.Formatter();
//
// voices and notes for stave 2 7
const smo240468v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240468v0ar = [];
const smo240450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240450.setAttribute('id', 'smo240450');
smo240468v0ar.push(smo240450);
const smo240451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240451.setAttribute('id', 'smo240451');
smo240468v0ar.push(smo240451);
const smo240452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240452.setAttribute('id', 'smo240452');
smo240468v0ar.push(smo240452);
smo240468v0.addTickables(smo240468v0ar)
fmtsmo2404687.joinVoices([smo240468v0]);
const fmtsmo2414307 = new VF.Formatter();
//
// voices and notes for stave 3 7
const smo241430v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241430v0ar = [];
const smo241413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241413.setAttribute('id', 'smo241413');
smo241430v0ar.push(smo241413);
const smo241414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo241414.setAttribute('id', 'smo241414');
smo241430v0ar.push(smo241414);
smo241430v0.addTickables(smo241430v0ar)
fmtsmo2414307.joinVoices([smo241430v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248563 = smo239458.getStemDirection();
smo239458.setStemDirection(dirsmo248563);
smo239459.setStemDirection(dirsmo248563);
const smo248563 = new VF.Beam([smo239458,smo239459]);
 
// formatting measures in staff group smo242235
fmtsmo2384377.format([smo238437v0,smo239477v0,smo240468v0,smo241430v0], 147);
const stavesmo238437 = new VF.Stave(1216, 219, 161);
stavesmo238437.setAttribute('id', 'stavesmo238437');
stavesmo238437.setBegBarType(VF.Barline.type.NONE);
stavesmo238437.setContext(context);
stavesmo238437.draw();
smo238437v0.draw(context, stavesmo238437);
const stavesmo239477 = new VF.Stave(1216, 312, 161);
stavesmo239477.setAttribute('id', 'stavesmo239477');
stavesmo239477.setBegBarType(VF.Barline.type.NONE);
stavesmo239477.setContext(context);
stavesmo239477.draw();
smo239477v0.draw(context, stavesmo239477);
smo248563.setContext(context);
smo248563.draw();
const stavesmo240468 = new VF.Stave(1216, 391, 161);
stavesmo240468.setAttribute('id', 'stavesmo240468');
stavesmo240468.setBegBarType(VF.Barline.type.NONE);
stavesmo240468.setContext(context);
stavesmo240468.draw();
smo240468v0.draw(context, stavesmo240468);
const stavesmo241430 = new VF.Stave(1216, 468, 161);
stavesmo241430.setAttribute('id', 'stavesmo241430');
stavesmo241430.setBegBarType(VF.Barline.type.NONE);
stavesmo241430.setContext(context);
stavesmo241430.draw();
smo241430v0.draw(context, stavesmo241430);
const rightsmo242235stavesmo2384373 = new VF.StaveConnector(stavesmo238437, stavesmo241430).setType(0);
rightsmo242235stavesmo2384373.setContext(context).draw();
const fmtsmo2384578 = new VF.Formatter();
//
// voices and notes for stave 0 8
const smo238457v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238457v0ar = [];
const smo238438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238438.setAttribute('id', 'smo238438');
const smo238439 = new VF.Annotation('Со');
smo238439.setAttribute('id', 'smo238439');
smo238439.setFont('Merriweather', 12.1, 'normal');
smo238439.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238438.addModifier(smo238439);
smo238439.addClass('lyric lyric-0 lyric-hyphen');
smo238457v0ar.push(smo238438);
const smo238440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238440.setAttribute('id', 'smo238440');
const smo238441 = new VF.Annotation('ло');
smo238441.setAttribute('id', 'smo238441');
smo238441.setFont('Merriweather', 12.1, 'normal');
smo238441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238440.addModifier(smo238441);
smo238441.addClass('lyric lyric-0');
smo238457v0ar.push(smo238440);
smo238457v0.addTickables(smo238457v0ar)
fmtsmo2384578.joinVoices([smo238457v0]);
const fmtsmo2394978 = new VF.Formatter();
//
// voices and notes for stave 1 8
const smo239497v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239497v0ar = [];
const smo239478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239478.setAttribute('id', 'smo239478');
smo239497v0ar.push(smo239478);
const smo239479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239479.setAttribute('id', 'smo239479');
smo239497v0ar.push(smo239479);
const smo239480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239480.setAttribute('id', 'smo239480');
smo239497v0ar.push(smo239480);
const smo239481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239481.setAttribute('id', 'smo239481');
smo239497v0ar.push(smo239481);
smo239497v0.addTickables(smo239497v0ar)
fmtsmo2394978.joinVoices([smo239497v0]);
const fmtsmo2404888 = new VF.Formatter();
//
// voices and notes for stave 2 8
const smo240488v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240488v0ar = [];
const smo240469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240469.setAttribute('id', 'smo240469');
smo240488v0ar.push(smo240469);
const smo240470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240470.setAttribute('id', 'smo240470');
smo240488v0ar.push(smo240470);
const smo240471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240471.setAttribute('id', 'smo240471');
smo240488v0ar.push(smo240471);
const smo240472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240472.setAttribute('id', 'smo240472');
smo240488v0ar.push(smo240472);
smo240488v0.addTickables(smo240488v0ar)
fmtsmo2404888.joinVoices([smo240488v0]);
const fmtsmo2414508 = new VF.Formatter();
//
// voices and notes for stave 3 8
const smo241450v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241450v0ar = [];
const smo241431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241431.setAttribute('id', 'smo241431');
smo241450v0ar.push(smo241431);
const smo241432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241432.setAttribute('id', 'smo241432');
smo241450v0ar.push(smo241432);
const smo241433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241433.setAttribute('id', 'smo241433');
smo241450v0ar.push(smo241433);
const smo241434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241434.setAttribute('id', 'smo241434');
smo241450v0ar.push(smo241434);
smo241450v0.addTickables(smo241450v0ar)
fmtsmo2414508.joinVoices([smo241450v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2384578.format([smo238457v0,smo239497v0,smo240488v0,smo241450v0], 161);
const stavesmo238457 = new VF.Stave(55, 598, 244);
stavesmo238457.setAttribute('id', 'stavesmo238457');
stavesmo238457.setBegBarType(4);
stavesmo238457.addClef('treble');
const keysmo238457 = new VF.KeySignature('F');
keysmo238457.addToStave(stavesmo238457);
stavesmo238457.setContext(context);
stavesmo238457.draw();
smo238457v0.draw(context, stavesmo238457);
const stavesmo239497 = new VF.Stave(55, 711, 244);
stavesmo239497.setAttribute('id', 'stavesmo239497');
stavesmo239497.setBegBarType(4);
stavesmo239497.addClef('treble');
const keysmo239497 = new VF.KeySignature('F');
keysmo239497.addToStave(stavesmo239497);
stavesmo239497.setContext(context);
stavesmo239497.draw();
smo239497v0.draw(context, stavesmo239497);
const stavesmo240488 = new VF.Stave(55, 794, 244);
stavesmo240488.setAttribute('id', 'stavesmo240488');
stavesmo240488.setBegBarType(4);
stavesmo240488.addClef('treble');
const keysmo240488 = new VF.KeySignature('F');
keysmo240488.addToStave(stavesmo240488);
stavesmo240488.setContext(context);
stavesmo240488.draw();
smo240488v0.draw(context, stavesmo240488);
const stavesmo241450 = new VF.Stave(55, 875, 244);
stavesmo241450.setAttribute('id', 'stavesmo241450');
stavesmo241450.setBegBarType(4);
stavesmo241450.addClef('bass');
const keysmo241450 = new VF.KeySignature('F');
keysmo241450.addToStave(stavesmo241450);
stavesmo241450.setContext(context);
stavesmo241450.draw();
smo241450v0.draw(context, stavesmo241450);
const leftsmo242235stavesmo2384573 = new VF.StaveConnector(stavesmo238457, stavesmo241450).setType(1);
leftsmo242235stavesmo2384573.setContext(context).draw();
const fmtsmo2384799 = new VF.Formatter();
//
// voices and notes for stave 0 9
const smo238479v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238479v0ar = [];
const smo238458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238458.setAttribute('id', 'smo238458');
const smo238459 = new VF.Annotation('вей,');
smo238459.setAttribute('id', 'smo238459');
smo238459.setFont('Merriweather', 12.1, 'normal');
smo238459.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238458.addModifier(smo238459);
smo238459.addClass('lyric lyric-0');
smo238479v0ar.push(smo238458);
const smo238460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238460.setAttribute('id', 'smo238460');
const smo238461 = new VF.Annotation('мой');
smo238461.setAttribute('id', 'smo238461');
smo238461.setFont('Merriweather', 12.1, 'normal');
smo238461.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238460.addModifier(smo238461);
smo238461.addClass('lyric lyric-0');
smo238479v0ar.push(smo238460);
const smo238462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238462.setAttribute('id', 'smo238462');
const smo238463 = new VF.Annotation('-');
smo238463.setAttribute('id', 'smo238463');
smo238463.setFont('Merriweather', 12.1, 'normal');
smo238463.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238462.addModifier(smo238463);
smo238463.addClass('lyric lyric-0 lyric-hyphen');
smo238479v0ar.push(smo238462);
smo238479v0.addTickables(smo238479v0ar)
fmtsmo2384799.joinVoices([smo238479v0]);
const fmtsmo2395189 = new VF.Formatter();
//
// voices and notes for stave 1 9
const smo239518v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239518v0ar = [];
const smo239498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239498.setAttribute('id', 'smo239498');
smo239518v0ar.push(smo239498);
const smo239499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239499.setAttribute('id', 'smo239499');
smo239518v0ar.push(smo239499);
const smo239501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239501.setAttribute('id', 'smo239501');
smo239518v0ar.push(smo239501);
const smo239502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239502.setAttribute('id', 'smo239502');
smo239518v0ar.push(smo239502);
smo239518v0.addTickables(smo239518v0ar)
fmtsmo2395189.joinVoices([smo239518v0]);
const fmtsmo2405089 = new VF.Formatter();
//
// voices and notes for stave 2 9
const smo240508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240508v0ar = [];
const smo240489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240489.setAttribute('id', 'smo240489');
smo240508v0ar.push(smo240489);
const smo240490 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240490.setAttribute('id', 'smo240490');
smo240508v0ar.push(smo240490);
const smo240491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240491.setAttribute('id', 'smo240491');
smo240508v0ar.push(smo240491);
const smo240492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240492.setAttribute('id', 'smo240492');
smo240508v0ar.push(smo240492);
smo240508v0.addTickables(smo240508v0ar)
fmtsmo2405089.joinVoices([smo240508v0]);
const fmtsmo2414709 = new VF.Formatter();
//
// voices and notes for stave 3 9
const smo241470v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241470v0ar = [];
const smo241451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241451.setAttribute('id', 'smo241451');
smo241470v0ar.push(smo241451);
const smo241452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241452.setAttribute('id', 'smo241452');
smo241470v0ar.push(smo241452);
const smo241453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241453.setAttribute('id', 'smo241453');
smo241470v0ar.push(smo241453);
const smo241454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241454.setAttribute('id', 'smo241454');
smo241470v0ar.push(smo241454);
smo241470v0.addTickables(smo241470v0ar)
fmtsmo2414709.joinVoices([smo241470v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo2384799.format([smo238479v0,smo239518v0,smo240508v0,smo241470v0], 191);
const stavesmo238479 = new VF.Stave(299, 598, 205);
stavesmo238479.setAttribute('id', 'stavesmo238479');
stavesmo238479.setBegBarType(VF.Barline.type.NONE);
stavesmo238479.setContext(context);
stavesmo238479.draw();
smo238479v0.draw(context, stavesmo238479);
const stavesmo239518 = new VF.Stave(299, 711, 205);
stavesmo239518.setAttribute('id', 'stavesmo239518');
stavesmo239518.setBegBarType(VF.Barline.type.NONE);
stavesmo239518.setContext(context);
stavesmo239518.draw();
smo239518v0.draw(context, stavesmo239518);
const stavesmo240508 = new VF.Stave(299, 794, 205);
stavesmo240508.setAttribute('id', 'stavesmo240508');
stavesmo240508.setBegBarType(VF.Barline.type.NONE);
stavesmo240508.setContext(context);
stavesmo240508.draw();
smo240508v0.draw(context, stavesmo240508);
const stavesmo241470 = new VF.Stave(299, 875, 205);
stavesmo241470.setAttribute('id', 'stavesmo241470');
stavesmo241470.setBegBarType(VF.Barline.type.NONE);
stavesmo241470.setContext(context);
stavesmo241470.draw();
smo241470v0.draw(context, stavesmo241470);
const fmtsmo23850110 = new VF.Formatter();
//
// voices and notes for stave 0 10
const smo238501v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238501v0ar = [];
const smo238480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238480.setAttribute('id', 'smo238480');
const smo238481 = new VF.Annotation('Со');
smo238481.setAttribute('id', 'smo238481');
smo238481.setFont('Merriweather', 12.1, 'normal');
smo238481.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238480.addModifier(smo238481);
smo238481.addClass('lyric lyric-0 lyric-hyphen');
smo238501v0ar.push(smo238480);
const smo238482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo238482.setAttribute('id', 'smo238482');
const smo2384820acc = new VF.Accidental('n');
smo238482.addModifier(smo2384820acc, 0);
const smo238483 = new VF.Annotation('ло');
smo238483.setAttribute('id', 'smo238483');
smo238483.setFont('Merriweather', 12.1, 'normal');
smo238483.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238482.addModifier(smo238483);
smo238483.addClass('lyric lyric-0 lyric-hyphen');
smo238501v0ar.push(smo238482);
const smo238484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo238484.setAttribute('id', 'smo238484');
const smo2384840acc = new VF.Accidental('#');
smo238484.addModifier(smo2384840acc, 0);
smo238501v0ar.push(smo238484);
smo238501v0.addTickables(smo238501v0ar)
fmtsmo23850110.joinVoices([smo238501v0]);
const fmtsmo23953810 = new VF.Formatter();
//
// voices and notes for stave 1 10
const smo239538v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239538v0ar = [];
const smo239519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239519.setAttribute('id', 'smo239519');
smo239538v0ar.push(smo239519);
const smo239520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239520.setAttribute('id', 'smo239520');
smo239538v0ar.push(smo239520);
const smo239521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239521.setAttribute('id', 'smo239521');
smo239538v0ar.push(smo239521);
const smo239522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239522.setAttribute('id', 'smo239522');
smo239538v0ar.push(smo239522);
smo239538v0.addTickables(smo239538v0ar)
fmtsmo23953810.joinVoices([smo239538v0]);
const fmtsmo24052810 = new VF.Formatter();
//
// voices and notes for stave 2 10
const smo240528v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240528v0ar = [];
const smo240509 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240509.setAttribute('id', 'smo240509');
smo240528v0ar.push(smo240509);
const smo240510 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240510.setAttribute('id', 'smo240510');
smo240528v0ar.push(smo240510);
const smo240511 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240511.setAttribute('id', 'smo240511');
smo240528v0ar.push(smo240511);
const smo240512 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240512.setAttribute('id', 'smo240512');
smo240528v0ar.push(smo240512);
smo240528v0.addTickables(smo240528v0ar)
fmtsmo24052810.joinVoices([smo240528v0]);
const fmtsmo24149010 = new VF.Formatter();
//
// voices and notes for stave 3 10
const smo241490v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241490v0ar = [];
const smo241471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241471.setAttribute('id', 'smo241471');
smo241490v0ar.push(smo241471);
const smo241472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241472.setAttribute('id', 'smo241472');
smo241490v0ar.push(smo241472);
const smo241473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241473.setAttribute('id', 'smo241473');
smo241490v0ar.push(smo241473);
const smo241474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241474.setAttribute('id', 'smo241474');
smo241490v0ar.push(smo241474);
smo241490v0.addTickables(smo241490v0ar)
fmtsmo24149010.joinVoices([smo241490v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23850110.format([smo238501v0,smo239538v0,smo240528v0,smo241490v0], 154);
const stavesmo238501 = new VF.Stave(504, 598, 168);
stavesmo238501.setAttribute('id', 'stavesmo238501');
stavesmo238501.setBegBarType(VF.Barline.type.NONE);
stavesmo238501.setContext(context);
stavesmo238501.draw();
smo238501v0.draw(context, stavesmo238501);
const stavesmo239538 = new VF.Stave(504, 711, 168);
stavesmo239538.setAttribute('id', 'stavesmo239538');
stavesmo239538.setBegBarType(VF.Barline.type.NONE);
stavesmo239538.setContext(context);
stavesmo239538.draw();
smo239538v0.draw(context, stavesmo239538);
const stavesmo240528 = new VF.Stave(504, 794, 168);
stavesmo240528.setAttribute('id', 'stavesmo240528');
stavesmo240528.setBegBarType(VF.Barline.type.NONE);
stavesmo240528.setContext(context);
stavesmo240528.draw();
smo240528v0.draw(context, stavesmo240528);
const stavesmo241490 = new VF.Stave(504, 875, 168);
stavesmo241490.setAttribute('id', 'stavesmo241490');
stavesmo241490.setBegBarType(VF.Barline.type.NONE);
stavesmo241490.setContext(context);
stavesmo241490.draw();
smo241490v0.draw(context, stavesmo241490);
const fmtsmo23852011 = new VF.Formatter();
//
// voices and notes for stave 0 11
const smo238520v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238520v0ar = [];
const smo238502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238502.setAttribute('id', 'smo238502');
const smo238503 = new VF.Annotation('вей');
smo238503.setAttribute('id', 'smo238503');
smo238503.setFont('Merriweather', 12.1, 'normal');
smo238503.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238502.addModifier(smo238503);
smo238503.addClass('lyric lyric-0');
smo238520v0ar.push(smo238502);
const smo238504 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238504.setAttribute('id', 'smo238504');
smo238520v0ar.push(smo238504);
smo238520v0.addTickables(smo238520v0ar)
fmtsmo23852011.joinVoices([smo238520v0]);
const fmtsmo23955811 = new VF.Formatter();
//
// voices and notes for stave 1 11
const smo239558v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239558v0ar = [];
const smo239539 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239539.setAttribute('id', 'smo239539');
smo239558v0ar.push(smo239539);
const smo239540 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239540.setAttribute('id', 'smo239540');
smo239558v0ar.push(smo239540);
const smo239541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239541.setAttribute('id', 'smo239541');
smo239558v0ar.push(smo239541);
const smo239542 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239542.setAttribute('id', 'smo239542');
smo239558v0ar.push(smo239542);
smo239558v0.addTickables(smo239558v0ar)
fmtsmo23955811.joinVoices([smo239558v0]);
const fmtsmo24054811 = new VF.Formatter();
//
// voices and notes for stave 2 11
const smo240548v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240548v0ar = [];
const smo240529 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240529.setAttribute('id', 'smo240529');
smo240548v0ar.push(smo240529);
const smo240530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240530.setAttribute('id', 'smo240530');
smo240548v0ar.push(smo240530);
const smo240531 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240531.setAttribute('id', 'smo240531');
smo240548v0ar.push(smo240531);
const smo240532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo240532.setAttribute('id', 'smo240532');
smo240548v0ar.push(smo240532);
smo240548v0.addTickables(smo240548v0ar)
fmtsmo24054811.joinVoices([smo240548v0]);
const fmtsmo24150811 = new VF.Formatter();
//
// voices and notes for stave 3 11
const smo241508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241508v0ar = [];
const smo241491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241491.setAttribute('id', 'smo241491');
smo241508v0ar.push(smo241491);
const smo241492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241492.setAttribute('id', 'smo241492');
smo241508v0ar.push(smo241492);
smo241508v0.addTickables(smo241508v0ar)
fmtsmo24150811.joinVoices([smo241508v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23852011.format([smo238520v0,smo239558v0,smo240548v0,smo241508v0], 147);
const stavesmo238520 = new VF.Stave(672, 598, 161);
stavesmo238520.setAttribute('id', 'stavesmo238520');
stavesmo238520.setBegBarType(VF.Barline.type.NONE);
stavesmo238520.setContext(context);
stavesmo238520.draw();
smo238520v0.draw(context, stavesmo238520);
const stavesmo239558 = new VF.Stave(672, 711, 161);
stavesmo239558.setAttribute('id', 'stavesmo239558');
stavesmo239558.setBegBarType(VF.Barline.type.NONE);
stavesmo239558.setContext(context);
stavesmo239558.draw();
smo239558v0.draw(context, stavesmo239558);
const stavesmo240548 = new VF.Stave(672, 794, 161);
stavesmo240548.setAttribute('id', 'stavesmo240548');
stavesmo240548.setBegBarType(VF.Barline.type.NONE);
stavesmo240548.setContext(context);
stavesmo240548.draw();
smo240548v0.draw(context, stavesmo240548);
const stavesmo241508 = new VF.Stave(672, 875, 161);
stavesmo241508.setAttribute('id', 'stavesmo241508');
stavesmo241508.setBegBarType(VF.Barline.type.NONE);
stavesmo241508.setContext(context);
stavesmo241508.draw();
smo241508v0.draw(context, stavesmo241508);
const fmtsmo23854212 = new VF.Formatter();
//
// voices and notes for stave 0 12
const smo238542v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238542v0ar = [];
const smo238521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238521.setAttribute('id', 'smo238521');
const smo238522 = new VF.Annotation('го');
smo238522.setAttribute('id', 'smo238522');
smo238522.setFont('Merriweather', 12.1, 'normal');
smo238522.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238521.addModifier(smo238522);
smo238522.addClass('lyric lyric-0 lyric-hyphen');
smo238542v0ar.push(smo238521);
const smo238523 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238523.setAttribute('id', 'smo238523');
const smo238524 = new VF.Annotation('пo');
smo238524.setAttribute('id', 'smo238524');
smo238524.setFont('Merriweather', 12.1, 'normal');
smo238524.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238523.addModifier(smo238524);
smo238524.addClass('lyric lyric-0');
smo238542v0ar.push(smo238523);
const smo238525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238525.setAttribute('id', 'smo238525');
const smo238526 = new VF.Annotation('-');
smo238526.setAttribute('id', 'smo238526');
smo238526.setFont('Merriweather', 12.1, 'normal');
smo238526.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238525.addModifier(smo238526);
smo238526.addClass('lyric lyric-0 lyric-hyphen');
smo238542v0ar.push(smo238525);
smo238542v0.addTickables(smo238542v0ar)
fmtsmo23854212.joinVoices([smo238542v0]);
const fmtsmo23957812 = new VF.Formatter();
//
// voices and notes for stave 1 12
const smo239578v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239578v0ar = [];
const smo239559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239559.setAttribute('id', 'smo239559');
smo239578v0ar.push(smo239559);
const smo239560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239560.setAttribute('id', 'smo239560');
smo239578v0ar.push(smo239560);
const smo239561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239561.setAttribute('id', 'smo239561');
smo239578v0ar.push(smo239561);
const smo239562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo239562.setAttribute('id', 'smo239562');
smo239578v0ar.push(smo239562);
smo239578v0.addTickables(smo239578v0ar)
fmtsmo23957812.joinVoices([smo239578v0]);
const fmtsmo24056812 = new VF.Formatter();
//
// voices and notes for stave 2 12
const smo240568v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240568v0ar = [];
const smo240549 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240549.setAttribute('id', 'smo240549');
smo240568v0ar.push(smo240549);
const smo240550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240550.setAttribute('id', 'smo240550');
smo240568v0ar.push(smo240550);
const smo240551 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240551.setAttribute('id', 'smo240551');
smo240568v0ar.push(smo240551);
const smo240552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240552.setAttribute('id', 'smo240552');
smo240568v0ar.push(smo240552);
smo240568v0.addTickables(smo240568v0ar)
fmtsmo24056812.joinVoices([smo240568v0]);
const fmtsmo24152812 = new VF.Formatter();
//
// voices and notes for stave 3 12
const smo241528v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241528v0ar = [];
const smo241509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241509.setAttribute('id', 'smo241509');
smo241528v0ar.push(smo241509);
const smo241510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241510.setAttribute('id', 'smo241510');
smo241528v0ar.push(smo241510);
const smo241511 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo241511.setAttribute('id', 'smo241511');
smo241528v0ar.push(smo241511);
const smo241512 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241512.setAttribute('id', 'smo241512');
smo241528v0ar.push(smo241512);
smo241528v0.addTickables(smo241528v0ar)
fmtsmo24152812.joinVoices([smo241528v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23854212.format([smo238542v0,smo239578v0,smo240568v0,smo241528v0], 144);
const stavesmo238542 = new VF.Stave(833, 598, 158);
stavesmo238542.setAttribute('id', 'stavesmo238542');
stavesmo238542.setBegBarType(VF.Barline.type.NONE);
stavesmo238542.setContext(context);
stavesmo238542.draw();
smo238542v0.draw(context, stavesmo238542);
const stavesmo239578 = new VF.Stave(833, 711, 158);
stavesmo239578.setAttribute('id', 'stavesmo239578');
stavesmo239578.setBegBarType(VF.Barline.type.NONE);
stavesmo239578.setContext(context);
stavesmo239578.draw();
smo239578v0.draw(context, stavesmo239578);
const stavesmo240568 = new VF.Stave(833, 794, 158);
stavesmo240568.setAttribute('id', 'stavesmo240568');
stavesmo240568.setBegBarType(VF.Barline.type.NONE);
stavesmo240568.setContext(context);
stavesmo240568.draw();
smo240568v0.draw(context, stavesmo240568);
const stavesmo241528 = new VF.Stave(833, 875, 158);
stavesmo241528.setAttribute('id', 'stavesmo241528');
stavesmo241528.setBegBarType(VF.Barline.type.NONE);
stavesmo241528.setContext(context);
stavesmo241528.draw();
smo241528v0.draw(context, stavesmo241528);
const fmtsmo23856413 = new VF.Formatter();
//
// voices and notes for stave 0 13
const smo238564v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238564v0ar = [];
const smo238543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238543.setAttribute('id', 'smo238543');
const smo238544 = new VF.Annotation('си');
smo238544.setAttribute('id', 'smo238544');
smo238544.setFont('Merriweather', 12.1, 'normal');
smo238544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238543.addModifier(smo238544);
smo238544.addClass('lyric lyric-0');
smo238564v0ar.push(smo238543);
const smo238545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238545.setAttribute('id', 'smo238545');
const smo238546 = new VF.Annotation('ст');
smo238546.setAttribute('id', 'smo238546');
smo238546.setFont('Merriweather', 12.1, 'normal');
smo238546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238545.addModifier(smo238546);
smo238546.addClass('lyric lyric-0 lyric-hyphen');
smo238564v0ar.push(smo238545);
const smo238547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238547.setAttribute('id', 'smo238547');
const smo238548 = new VF.Annotation('ый');
smo238548.setAttribute('id', 'smo238548');
smo238548.setFont('Merriweather', 12.1, 'normal');
smo238548.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238547.addModifier(smo238548);
smo238548.addClass('lyric lyric-0');
smo238564v0ar.push(smo238547);
smo238564v0.addTickables(smo238564v0ar)
fmtsmo23856413.joinVoices([smo238564v0]);
const fmtsmo23959813 = new VF.Formatter();
//
// voices and notes for stave 1 13
const smo239598v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239598v0ar = [];
const smo239579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239579.setAttribute('id', 'smo239579');
smo239598v0ar.push(smo239579);
const smo239580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239580.setAttribute('id', 'smo239580');
smo239598v0ar.push(smo239580);
const smo239581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239581.setAttribute('id', 'smo239581');
smo239598v0ar.push(smo239581);
const smo239582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo239582.setAttribute('id', 'smo239582');
smo239598v0ar.push(smo239582);
smo239598v0.addTickables(smo239598v0ar)
fmtsmo23959813.joinVoices([smo239598v0]);
const fmtsmo24058813 = new VF.Formatter();
//
// voices and notes for stave 2 13
const smo240588v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240588v0ar = [];
const smo240569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240569.setAttribute('id', 'smo240569');
smo240588v0ar.push(smo240569);
const smo240570 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240570.setAttribute('id', 'smo240570');
smo240588v0ar.push(smo240570);
const smo240571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240571.setAttribute('id', 'smo240571');
smo240588v0ar.push(smo240571);
const smo240572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240572.setAttribute('id', 'smo240572');
smo240588v0ar.push(smo240572);
smo240588v0.addTickables(smo240588v0ar)
fmtsmo24058813.joinVoices([smo240588v0]);
const fmtsmo24154613 = new VF.Formatter();
//
// voices and notes for stave 3 13
const smo241546v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241546v0ar = [];
const smo241529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241529.setAttribute('id', 'smo241529');
smo241546v0ar.push(smo241529);
const smo241530 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/2/n"]}'))
smo241530.setAttribute('id', 'smo241530');
smo241546v0ar.push(smo241530);
smo241546v0.addTickables(smo241546v0ar)
fmtsmo24154613.joinVoices([smo241546v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23856413.format([smo238564v0,smo239598v0,smo240588v0,smo241546v0], 184);
const stavesmo238564 = new VF.Stave(991, 598, 198);
stavesmo238564.setAttribute('id', 'stavesmo238564');
stavesmo238564.setBegBarType(VF.Barline.type.NONE);
stavesmo238564.setContext(context);
stavesmo238564.draw();
smo238564v0.draw(context, stavesmo238564);
const stavesmo239598 = new VF.Stave(991, 711, 198);
stavesmo239598.setAttribute('id', 'stavesmo239598');
stavesmo239598.setBegBarType(VF.Barline.type.NONE);
stavesmo239598.setContext(context);
stavesmo239598.draw();
smo239598v0.draw(context, stavesmo239598);
const stavesmo240588 = new VF.Stave(991, 794, 198);
stavesmo240588.setAttribute('id', 'stavesmo240588');
stavesmo240588.setBegBarType(VF.Barline.type.NONE);
stavesmo240588.setContext(context);
stavesmo240588.draw();
smo240588v0.draw(context, stavesmo240588);
const stavesmo241546 = new VF.Stave(991, 875, 198);
stavesmo241546.setAttribute('id', 'stavesmo241546');
stavesmo241546.setBegBarType(VF.Barline.type.NONE);
stavesmo241546.setContext(context);
stavesmo241546.draw();
smo241546v0.draw(context, stavesmo241546);
const fmtsmo23859014 = new VF.Formatter();
//
// voices and notes for stave 0 14
const smo238590v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238590v0ar = [];
const smo238565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo238565.setAttribute('id', 'smo238565');
const smo238566 = new VF.Annotation('co');
smo238566.setAttribute('id', 'smo238566');
smo238566.setFont('Merriweather', 12.1, 'normal');
smo238566.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238565.addModifier(smo238566);
smo238566.addClass('lyric lyric-0');
smo238590v0ar.push(smo238565);
const smo238567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238567.setAttribute('id', 'smo238567');
const smo238568 = new VF.Annotation('-');
smo238568.setAttribute('id', 'smo238568');
smo238568.setFont('Merriweather', 12.1, 'normal');
smo238568.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238567.addModifier(smo238568);
smo238568.addClass('lyric lyric-0 lyric-hyphen');
smo238590v0ar.push(smo238567);
const smo238569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo238569.setAttribute('id', 'smo238569');
const smo238570 = new VF.Annotation('-');
smo238570.setAttribute('id', 'smo238570');
smo238570.setFont('Merriweather', 12.1, 'normal');
smo238570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238569.addModifier(smo238570);
smo238570.addClass('lyric lyric-0 lyric-hyphen');
smo238590v0ar.push(smo238569);
const smo238571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238571.setAttribute('id', 'smo238571');
const smo238572 = new VF.Annotation('по');
smo238572.setAttribute('id', 'smo238572');
smo238572.setFont('Merriweather', 12.1, 'normal');
smo238572.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238571.addModifier(smo238572);
smo238572.addClass('lyric lyric-0');
smo238590v0ar.push(smo238571);
const smo238573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo238573.setAttribute('id', 'smo238573');
const smo238574 = new VF.Annotation('-');
smo238574.setAttribute('id', 'smo238574');
smo238574.setFont('Merriweather', 12.1, 'normal');
smo238574.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238573.addModifier(smo238574);
smo238574.addClass('lyric lyric-0 lyric-hyphen');
smo238590v0ar.push(smo238573);
smo238590v0.addTickables(smo238590v0ar)
fmtsmo23859014.joinVoices([smo238590v0]);
const fmtsmo23961814 = new VF.Formatter();
//
// voices and notes for stave 1 14
const smo239618v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239618v0ar = [];
const smo239599 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239599.setAttribute('id', 'smo239599');
smo239618v0ar.push(smo239599);
const smo239600 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239600.setAttribute('id', 'smo239600');
smo239618v0ar.push(smo239600);
const smo239601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239601.setAttribute('id', 'smo239601');
smo239618v0ar.push(smo239601);
const smo239602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo239602.setAttribute('id', 'smo239602');
smo239618v0ar.push(smo239602);
smo239618v0.addTickables(smo239618v0ar)
fmtsmo23961814.joinVoices([smo239618v0]);
const fmtsmo24060814 = new VF.Formatter();
//
// voices and notes for stave 2 14
const smo240608v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240608v0ar = [];
const smo240589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240589.setAttribute('id', 'smo240589');
smo240608v0ar.push(smo240589);
const smo240590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo240590.setAttribute('id', 'smo240590');
smo240608v0ar.push(smo240590);
const smo240591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240591.setAttribute('id', 'smo240591');
smo240608v0ar.push(smo240591);
const smo240592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo240592.setAttribute('id', 'smo240592');
smo240608v0ar.push(smo240592);
smo240608v0.addTickables(smo240608v0ar)
fmtsmo24060814.joinVoices([smo240608v0]);
const fmtsmo24156614 = new VF.Formatter();
//
// voices and notes for stave 3 14
const smo241566v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241566v0ar = [];
const smo241547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241547.setAttribute('id', 'smo241547');
smo241566v0ar.push(smo241547);
const smo241548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241548.setAttribute('id', 'smo241548');
smo241566v0ar.push(smo241548);
const smo241549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo241549.setAttribute('id', 'smo241549');
smo241566v0ar.push(smo241549);
const smo241550 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241550.setAttribute('id', 'smo241550');
smo241566v0ar.push(smo241550);
smo241566v0.addTickables(smo241566v0ar)
fmtsmo24156614.joinVoices([smo241566v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248618 = smo238567.getStemDirection();
smo238567.setStemDirection(dirsmo248618);
smo238569.setStemDirection(dirsmo248618);
const smo248618 = new VF.Beam([smo238567,smo238569]);
 
// formatting measures in staff group smo242235
fmtsmo23859014.format([smo238590v0,smo239618v0,smo240608v0,smo241566v0], 169);
const stavesmo238590 = new VF.Stave(1189, 598, 183);
stavesmo238590.setAttribute('id', 'stavesmo238590');
stavesmo238590.setBegBarType(VF.Barline.type.NONE);
stavesmo238590.setContext(context);
stavesmo238590.draw();
smo238590v0.draw(context, stavesmo238590);
smo248618.setContext(context);
smo248618.draw();
const stavesmo239618 = new VF.Stave(1189, 711, 183);
stavesmo239618.setAttribute('id', 'stavesmo239618');
stavesmo239618.setBegBarType(VF.Barline.type.NONE);
stavesmo239618.setContext(context);
stavesmo239618.draw();
smo239618v0.draw(context, stavesmo239618);
const stavesmo240608 = new VF.Stave(1189, 794, 183);
stavesmo240608.setAttribute('id', 'stavesmo240608');
stavesmo240608.setBegBarType(VF.Barline.type.NONE);
stavesmo240608.setContext(context);
stavesmo240608.draw();
smo240608v0.draw(context, stavesmo240608);
const stavesmo241566 = new VF.Stave(1189, 875, 183);
stavesmo241566.setAttribute('id', 'stavesmo241566');
stavesmo241566.setBegBarType(VF.Barline.type.NONE);
stavesmo241566.setContext(context);
stavesmo241566.draw();
smo241566v0.draw(context, stavesmo241566);
const rightsmo242235stavesmo2385903 = new VF.StaveConnector(stavesmo238590, stavesmo241566).setType(0);
rightsmo242235stavesmo2385903.setContext(context).draw();
const fmtsmo23860915 = new VF.Formatter();
//
// voices and notes for stave 0 15
const smo238609v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238609v0ar = [];
const smo238591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo238591.setAttribute('id', 'smo238591');
smo238591.addModifier(new VF.Dot(), 0);
const smo238592 = new VF.Annotation('вей');
smo238592.setAttribute('id', 'smo238592');
smo238592.setFont('Merriweather', 12.1, 'normal');
smo238592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238591.addModifier(smo238592);
smo238592.addClass('lyric lyric-0');
smo238609v0ar.push(smo238591);
const smo238593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238593.setAttribute('id', 'smo238593');
smo238609v0ar.push(smo238593);
smo238609v0.addTickables(smo238609v0ar)
fmtsmo23860915.joinVoices([smo238609v0]);
const fmtsmo23963815 = new VF.Formatter();
//
// voices and notes for stave 1 15
const smo239638v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239638v0ar = [];
const smo239619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239619.setAttribute('id', 'smo239619');
smo239638v0ar.push(smo239619);
const smo239620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo239620.setAttribute('id', 'smo239620');
smo239638v0ar.push(smo239620);
const smo239621 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo239621.setAttribute('id', 'smo239621');
smo239638v0ar.push(smo239621);
const smo239622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239622.setAttribute('id', 'smo239622');
smo239638v0ar.push(smo239622);
smo239638v0.addTickables(smo239638v0ar)
fmtsmo23963815.joinVoices([smo239638v0]);
const fmtsmo24062815 = new VF.Formatter();
//
// voices and notes for stave 2 15
const smo240628v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240628v0ar = [];
const smo240609 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240609.setAttribute('id', 'smo240609');
smo240628v0ar.push(smo240609);
const smo240610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240610.setAttribute('id', 'smo240610');
smo240628v0ar.push(smo240610);
const smo240611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240611.setAttribute('id', 'smo240611');
smo240628v0ar.push(smo240611);
const smo240612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240612.setAttribute('id', 'smo240612');
smo240628v0ar.push(smo240612);
smo240628v0.addTickables(smo240628v0ar)
fmtsmo24062815.joinVoices([smo240628v0]);
const fmtsmo24158415 = new VF.Formatter();
//
// voices and notes for stave 3 15
const smo241584v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241584v0ar = [];
const smo241567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241567.setAttribute('id', 'smo241567');
smo241567.addModifier(new VF.Dot(), 0);
smo241584v0ar.push(smo241567);
const smo241568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241568.setAttribute('id', 'smo241568');
smo241584v0ar.push(smo241568);
smo241584v0.addTickables(smo241584v0ar)
fmtsmo24158415.joinVoices([smo241584v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23860915.format([smo238609v0,smo239638v0,smo240628v0,smo241584v0], 226);
const stavesmo238609 = new VF.Stave(55, 1005, 300);
stavesmo238609.setAttribute('id', 'stavesmo238609');
stavesmo238609.setBegBarType(1);
stavesmo238609.addClef('treble');
const keysmo238609 = new VF.KeySignature('F');
keysmo238609.addToStave(stavesmo238609);
stavesmo238609.setContext(context);
stavesmo238609.draw();
smo238609v0.draw(context, stavesmo238609);
const stavesmo239638 = new VF.Stave(55, 1120, 300);
stavesmo239638.setAttribute('id', 'stavesmo239638');
stavesmo239638.setBegBarType(1);
stavesmo239638.addClef('treble');
const keysmo239638 = new VF.KeySignature('F');
keysmo239638.addToStave(stavesmo239638);
stavesmo239638.setContext(context);
stavesmo239638.draw();
smo239638v0.draw(context, stavesmo239638);
const stavesmo240628 = new VF.Stave(55, 1215, 300);
stavesmo240628.setAttribute('id', 'stavesmo240628');
stavesmo240628.setBegBarType(1);
stavesmo240628.addClef('treble');
const keysmo240628 = new VF.KeySignature('F');
keysmo240628.addToStave(stavesmo240628);
stavesmo240628.setContext(context);
stavesmo240628.draw();
smo240628v0.draw(context, stavesmo240628);
const stavesmo241584 = new VF.Stave(55, 1293, 300);
stavesmo241584.setAttribute('id', 'stavesmo241584');
stavesmo241584.setBegBarType(1);
stavesmo241584.addClef('bass');
const keysmo241584 = new VF.KeySignature('F');
keysmo241584.addToStave(stavesmo241584);
stavesmo241584.setContext(context);
stavesmo241584.draw();
smo241584v0.draw(context, stavesmo241584);
const leftsmo242235stavesmo2386093 = new VF.StaveConnector(stavesmo238609, stavesmo241584).setType(1);
leftsmo242235stavesmo2386093.setContext(context).draw();
const fmtsmo23863116 = new VF.Formatter();
//
// voices and notes for stave 0 16
const smo238631v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238631v0ar = [];
const smo238610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238610.setAttribute('id', 'smo238610');
const smo238611 = new VF.Annotation('Tы');
smo238611.setAttribute('id', 'smo238611');
smo238611.setFont('Merriweather', 12.1, 'normal');
smo238611.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238610.addModifier(smo238611);
smo238611.addClass('lyric lyric-0');
smo238631v0ar.push(smo238610);
const smo238612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo238612.setAttribute('id', 'smo238612');
const smo2386120acc = new VF.Accidental('n');
smo238612.addModifier(smo2386120acc, 0);
const smo238613 = new VF.Annotation('ку');
smo238613.setAttribute('id', 'smo238613');
smo238613.setFont('Merriweather', 12.1, 'normal');
smo238613.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238612.addModifier(smo238613);
smo238613.addClass('lyric lyric-0');
smo238631v0ar.push(smo238612);
const smo238614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo238614.setAttribute('id', 'smo238614');
const smo2386140acc = new VF.Accidental('#');
smo238614.addModifier(smo2386140acc, 0);
const smo238615 = new VF.Annotation('-');
smo238615.setAttribute('id', 'smo238615');
smo238615.setFont('Merriweather', 12.1, 'normal');
smo238615.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238614.addModifier(smo238615);
smo238615.addClass('lyric lyric-0 lyric-hyphen');
smo238631v0ar.push(smo238614);
smo238631v0.addTickables(smo238631v0ar)
fmtsmo23863116.joinVoices([smo238631v0]);
const fmtsmo23965816 = new VF.Formatter();
//
// voices and notes for stave 1 16
const smo239658v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239658v0ar = [];
const smo239639 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239639.setAttribute('id', 'smo239639');
smo239658v0ar.push(smo239639);
const smo239640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239640.setAttribute('id', 'smo239640');
smo239658v0ar.push(smo239640);
const smo239641 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239641.setAttribute('id', 'smo239641');
smo239658v0ar.push(smo239641);
const smo239642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239642.setAttribute('id', 'smo239642');
smo239658v0ar.push(smo239642);
smo239658v0.addTickables(smo239658v0ar)
fmtsmo23965816.joinVoices([smo239658v0]);
const fmtsmo24064816 = new VF.Formatter();
//
// voices and notes for stave 2 16
const smo240648v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240648v0ar = [];
const smo240629 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240629.setAttribute('id', 'smo240629');
smo240648v0ar.push(smo240629);
const smo240630 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo240630.setAttribute('id', 'smo240630');
const smo2406300acc = new VF.Accidental('#');
smo240630.addModifier(smo2406300acc, 0);
smo240648v0ar.push(smo240630);
const smo240631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240631.setAttribute('id', 'smo240631');
smo240648v0ar.push(smo240631);
const smo240632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240632.setAttribute('id', 'smo240632');
smo240648v0ar.push(smo240632);
smo240648v0.addTickables(smo240648v0ar)
fmtsmo24064816.joinVoices([smo240648v0]);
const fmtsmo24160216 = new VF.Formatter();
//
// voices and notes for stave 3 16
const smo241602v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241602v0ar = [];
const smo241585 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241585.setAttribute('id', 'smo241585');
smo241602v0ar.push(smo241585);
const smo241586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241586.setAttribute('id', 'smo241586');
smo241602v0ar.push(smo241586);
smo241602v0.addTickables(smo241602v0ar)
fmtsmo24160216.joinVoices([smo241602v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23863116.format([smo238631v0,smo239658v0,smo240648v0,smo241602v0], 258);
const stavesmo238631 = new VF.Stave(355, 1005, 272);
stavesmo238631.setAttribute('id', 'stavesmo238631');
stavesmo238631.setBegBarType(VF.Barline.type.NONE);
stavesmo238631.setContext(context);
stavesmo238631.draw();
smo238631v0.draw(context, stavesmo238631);
const stavesmo239658 = new VF.Stave(355, 1120, 272);
stavesmo239658.setAttribute('id', 'stavesmo239658');
stavesmo239658.setBegBarType(VF.Barline.type.NONE);
stavesmo239658.setContext(context);
stavesmo239658.draw();
smo239658v0.draw(context, stavesmo239658);
const stavesmo240648 = new VF.Stave(355, 1215, 272);
stavesmo240648.setAttribute('id', 'stavesmo240648');
stavesmo240648.setBegBarType(VF.Barline.type.NONE);
stavesmo240648.setContext(context);
stavesmo240648.draw();
smo240648v0.draw(context, stavesmo240648);
const stavesmo241602 = new VF.Stave(355, 1293, 272);
stavesmo241602.setAttribute('id', 'stavesmo241602');
stavesmo241602.setBegBarType(VF.Barline.type.NONE);
stavesmo241602.setContext(context);
stavesmo241602.draw();
smo241602v0.draw(context, stavesmo241602);
const fmtsmo23865317 = new VF.Formatter();
//
// voices and notes for stave 0 17
const smo238653v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238653v0ar = [];
const smo238632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238632.setAttribute('id', 'smo238632');
const smo238633 = new VF.Annotation('дa,');
smo238633.setAttribute('id', 'smo238633');
smo238633.setFont('Merriweather', 12.1, 'normal');
smo238633.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238632.addModifier(smo238633);
smo238633.addClass('lyric lyric-0');
smo238653v0ar.push(smo238632);
const smo238634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238634.setAttribute('id', 'smo238634');
const smo238635 = new VF.Annotation('ку');
smo238635.setAttribute('id', 'smo238635');
smo238635.setFont('Merriweather', 12.1, 'normal');
smo238635.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238634.addModifier(smo238635);
smo238635.addClass('lyric lyric-0');
smo238653v0ar.push(smo238634);
const smo238636 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238636.setAttribute('id', 'smo238636');
const smo238637 = new VF.Annotation('-');
smo238637.setAttribute('id', 'smo238637');
smo238637.setFont('Merriweather', 12.1, 'normal');
smo238637.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238636.addModifier(smo238637);
smo238637.addClass('lyric lyric-0 lyric-hyphen');
smo238653v0ar.push(smo238636);
smo238653v0.addTickables(smo238653v0ar)
fmtsmo23865317.joinVoices([smo238653v0]);
const fmtsmo23967817 = new VF.Formatter();
//
// voices and notes for stave 1 17
const smo239678v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239678v0ar = [];
const smo239659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239659.setAttribute('id', 'smo239659');
smo239678v0ar.push(smo239659);
const smo239660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239660.setAttribute('id', 'smo239660');
smo239678v0ar.push(smo239660);
const smo239661 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo239661.setAttribute('id', 'smo239661');
smo239678v0ar.push(smo239661);
const smo239662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo239662.setAttribute('id', 'smo239662');
smo239678v0ar.push(smo239662);
smo239678v0.addTickables(smo239678v0ar)
fmtsmo23967817.joinVoices([smo239678v0]);
const fmtsmo24066817 = new VF.Formatter();
//
// voices and notes for stave 2 17
const smo240668v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240668v0ar = [];
const smo240649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240649.setAttribute('id', 'smo240649');
smo240668v0ar.push(smo240649);
const smo240650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo240650.setAttribute('id', 'smo240650');
smo240668v0ar.push(smo240650);
const smo240651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo240651.setAttribute('id', 'smo240651');
smo240668v0ar.push(smo240651);
const smo240652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo240652.setAttribute('id', 'smo240652');
smo240668v0ar.push(smo240652);
smo240668v0.addTickables(smo240668v0ar)
fmtsmo24066817.joinVoices([smo240668v0]);
const fmtsmo24162117 = new VF.Formatter();
//
// voices and notes for stave 3 17
const smo241621v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241621v0ar = [];
const smo241603 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241603.setAttribute('id', 'smo241603');
smo241621v0ar.push(smo241603);
const smo241604 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241604.setAttribute('id', 'smo241604');
smo241621v0ar.push(smo241604);
const smo241605 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241605.setAttribute('id', 'smo241605');
smo241621v0ar.push(smo241605);
smo241621v0.addTickables(smo241621v0ar)
fmtsmo24162117.joinVoices([smo241621v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23865317.format([smo238653v0,smo239678v0,smo240668v0,smo241621v0], 234);
const stavesmo238653 = new VF.Stave(627, 1005, 248);
stavesmo238653.setAttribute('id', 'stavesmo238653');
stavesmo238653.setBegBarType(VF.Barline.type.NONE);
stavesmo238653.setContext(context);
stavesmo238653.draw();
smo238653v0.draw(context, stavesmo238653);
const stavesmo239678 = new VF.Stave(627, 1120, 248);
stavesmo239678.setAttribute('id', 'stavesmo239678');
stavesmo239678.setBegBarType(VF.Barline.type.NONE);
stavesmo239678.setContext(context);
stavesmo239678.draw();
smo239678v0.draw(context, stavesmo239678);
const stavesmo240668 = new VF.Stave(627, 1215, 248);
stavesmo240668.setAttribute('id', 'stavesmo240668');
stavesmo240668.setBegBarType(VF.Barline.type.NONE);
stavesmo240668.setContext(context);
stavesmo240668.draw();
smo240668v0.draw(context, stavesmo240668);
const stavesmo241621 = new VF.Stave(627, 1293, 248);
stavesmo241621.setAttribute('id', 'stavesmo241621');
stavesmo241621.setBegBarType(VF.Barline.type.NONE);
stavesmo241621.setContext(context);
stavesmo241621.draw();
smo241621v0.draw(context, stavesmo241621);
const fmtsmo23867518 = new VF.Formatter();
//
// voices and notes for stave 0 18
const smo238675v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238675v0ar = [];
const smo238654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo238654.setAttribute('id', 'smo238654');
const smo238655 = new VF.Annotation('да');
smo238655.setAttribute('id', 'smo238655');
smo238655.setFont('Merriweather', 12.1, 'normal');
smo238655.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238654.addModifier(smo238655);
smo238655.addClass('lyric lyric-0');
smo238675v0ar.push(smo238654);
const smo238656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238656.setAttribute('id', 'smo238656');
smo238675v0ar.push(smo238656);
const smo238657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238657.setAttribute('id', 'smo238657');
const smo238658 = new VF.Annotation('ле');
smo238658.setAttribute('id', 'smo238658');
smo238658.setFont('Merriweather', 12.1, 'normal');
smo238658.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238657.addModifier(smo238658);
smo238658.addClass('lyric lyric-0 lyric-hyphen');
smo238675v0ar.push(smo238657);
const smo238659 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238659.setAttribute('id', 'smo238659');
smo238675v0ar.push(smo238659);
smo238675v0.addTickables(smo238675v0ar)
fmtsmo23867518.joinVoices([smo238675v0]);
const fmtsmo23969818 = new VF.Formatter();
//
// voices and notes for stave 1 18
const smo239698v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239698v0ar = [];
const smo239679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239679.setAttribute('id', 'smo239679');
smo239698v0ar.push(smo239679);
const smo239680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239680.setAttribute('id', 'smo239680');
smo239698v0ar.push(smo239680);
const smo239681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239681.setAttribute('id', 'smo239681');
smo239698v0ar.push(smo239681);
const smo239682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239682.setAttribute('id', 'smo239682');
smo239698v0ar.push(smo239682);
smo239698v0.addTickables(smo239698v0ar)
fmtsmo23969818.joinVoices([smo239698v0]);
const fmtsmo24068818 = new VF.Formatter();
//
// voices and notes for stave 2 18
const smo240688v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240688v0ar = [];
const smo240669 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240669.setAttribute('id', 'smo240669');
smo240688v0ar.push(smo240669);
const smo240670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240670.setAttribute('id', 'smo240670');
smo240688v0ar.push(smo240670);
const smo240671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240671.setAttribute('id', 'smo240671');
smo240688v0ar.push(smo240671);
const smo240672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240672.setAttribute('id', 'smo240672');
smo240688v0ar.push(smo240672);
smo240688v0.addTickables(smo240688v0ar)
fmtsmo24068818.joinVoices([smo240688v0]);
const fmtsmo24163918 = new VF.Formatter();
//
// voices and notes for stave 3 18
const smo241639v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241639v0ar = [];
const smo241622 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo241622.setAttribute('id', 'smo241622');
smo241639v0ar.push(smo241622);
const smo241623 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo241623.setAttribute('id', 'smo241623');
smo241639v0ar.push(smo241623);
smo241639v0.addTickables(smo241639v0ar)
fmtsmo24163918.joinVoices([smo241639v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23867518.format([smo238675v0,smo239698v0,smo240688v0,smo241639v0], 228);
const stavesmo238675 = new VF.Stave(875, 1005, 242);
stavesmo238675.setAttribute('id', 'stavesmo238675');
stavesmo238675.setBegBarType(VF.Barline.type.NONE);
stavesmo238675.setContext(context);
stavesmo238675.draw();
smo238675v0.draw(context, stavesmo238675);
const stavesmo239698 = new VF.Stave(875, 1120, 242);
stavesmo239698.setAttribute('id', 'stavesmo239698');
stavesmo239698.setBegBarType(VF.Barline.type.NONE);
stavesmo239698.setContext(context);
stavesmo239698.draw();
smo239698v0.draw(context, stavesmo239698);
const stavesmo240688 = new VF.Stave(875, 1215, 242);
stavesmo240688.setAttribute('id', 'stavesmo240688');
stavesmo240688.setBegBarType(VF.Barline.type.NONE);
stavesmo240688.setContext(context);
stavesmo240688.draw();
smo240688v0.draw(context, stavesmo240688);
const stavesmo241639 = new VF.Stave(875, 1293, 242);
stavesmo241639.setAttribute('id', 'stavesmo241639');
stavesmo241639.setBegBarType(VF.Barline.type.NONE);
stavesmo241639.setContext(context);
stavesmo241639.draw();
smo241639v0.draw(context, stavesmo241639);
const fmtsmo23869619 = new VF.Formatter();
//
// voices and notes for stave 0 19
const smo238696v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238696v0ar = [];
const smo238676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238676.setAttribute('id', 'smo238676');
const smo238677 = new VF.Annotation('тишь,');
smo238677.setAttribute('id', 'smo238677');
smo238677.setFont('Merriweather', 12.1, 'normal');
smo238677.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238676.addModifier(smo238677);
smo238677.addClass('lyric lyric-0');
smo238696v0ar.push(smo238676);
const smo238678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238678.setAttribute('id', 'smo238678');
const smo238679 = new VF.Annotation('-');
smo238679.setAttribute('id', 'smo238679');
smo238679.setFont('Merriweather', 12.1, 'normal');
smo238679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238678.addModifier(smo238679);
smo238679.addClass('lyric lyric-0 lyric-hyphen');
smo238696v0ar.push(smo238678);
const smo238680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238680.setAttribute('id', 'smo238680');
smo238696v0ar.push(smo238680);
smo238696v0.addTickables(smo238696v0ar)
fmtsmo23869619.joinVoices([smo238696v0]);
const fmtsmo23971819 = new VF.Formatter();
//
// voices and notes for stave 1 19
const smo239718v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239718v0ar = [];
const smo239699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239699.setAttribute('id', 'smo239699');
smo239718v0ar.push(smo239699);
const smo239700 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo239700.setAttribute('id', 'smo239700');
smo239718v0ar.push(smo239700);
const smo239701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239701.setAttribute('id', 'smo239701');
smo239718v0ar.push(smo239701);
const smo239702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo239702.setAttribute('id', 'smo239702');
smo239718v0ar.push(smo239702);
smo239718v0.addTickables(smo239718v0ar)
fmtsmo23971819.joinVoices([smo239718v0]);
const fmtsmo24070819 = new VF.Formatter();
//
// voices and notes for stave 2 19
const smo240708v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240708v0ar = [];
const smo240689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240689.setAttribute('id', 'smo240689');
smo240708v0ar.push(smo240689);
const smo240690 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo240690.setAttribute('id', 'smo240690');
smo240708v0ar.push(smo240690);
const smo240691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo240691.setAttribute('id', 'smo240691');
smo240708v0ar.push(smo240691);
const smo240692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo240692.setAttribute('id', 'smo240692');
smo240708v0ar.push(smo240692);
smo240708v0.addTickables(smo240708v0ar)
fmtsmo24070819.joinVoices([smo240708v0]);
const fmtsmo24165819 = new VF.Formatter();
//
// voices and notes for stave 3 19
const smo241658v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241658v0ar = [];
const smo241640 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241640.setAttribute('id', 'smo241640');
smo241658v0ar.push(smo241640);
const smo241641 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241641.setAttribute('id', 'smo241641');
smo241658v0ar.push(smo241641);
const smo241642 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/3/n"]}'))
smo241642.setAttribute('id', 'smo241642');
smo241658v0ar.push(smo241642);
smo241658v0.addTickables(smo241658v0ar)
fmtsmo24165819.joinVoices([smo241658v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23869619.format([smo238696v0,smo239718v0,smo240708v0,smo241658v0], 245);
const stavesmo238696 = new VF.Stave(1117, 1005, 259);
stavesmo238696.setAttribute('id', 'stavesmo238696');
stavesmo238696.setBegBarType(VF.Barline.type.NONE);
stavesmo238696.setContext(context);
stavesmo238696.draw();
smo238696v0.draw(context, stavesmo238696);
const stavesmo239718 = new VF.Stave(1117, 1120, 259);
stavesmo239718.setAttribute('id', 'stavesmo239718');
stavesmo239718.setBegBarType(VF.Barline.type.NONE);
stavesmo239718.setContext(context);
stavesmo239718.draw();
smo239718v0.draw(context, stavesmo239718);
const stavesmo240708 = new VF.Stave(1117, 1215, 259);
stavesmo240708.setAttribute('id', 'stavesmo240708');
stavesmo240708.setBegBarType(VF.Barline.type.NONE);
stavesmo240708.setContext(context);
stavesmo240708.draw();
smo240708v0.draw(context, stavesmo240708);
const stavesmo241658 = new VF.Stave(1117, 1293, 259);
stavesmo241658.setAttribute('id', 'stavesmo241658');
stavesmo241658.setBegBarType(VF.Barline.type.NONE);
stavesmo241658.setContext(context);
stavesmo241658.draw();
smo241658v0.draw(context, stavesmo241658);
const rightsmo242235stavesmo2386963 = new VF.StaveConnector(stavesmo238696, stavesmo241658).setType(0);
rightsmo242235stavesmo2386963.setContext(context).draw();
const fmtsmo23872120 = new VF.Formatter();
//
// voices and notes for stave 0 20
const smo238721v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238721v0ar = [];
const smo238697 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4d","dots":1,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo238697.setAttribute('id', 'smo238697');
const smo2386970acc = new VF.Accidental('n');
smo238697.addModifier(smo2386970acc, 0);
smo238697.addModifier(new VF.Dot(), 0);
const smo238698 = new VF.Annotation('где');
smo238698.setAttribute('id', 'smo238698');
smo238698.setFont('Merriweather', 12.1, 'normal');
smo238698.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238697.addModifier(smo238698);
smo238698.addClass('lyric lyric-0');
smo238721v0ar.push(smo238697);
const smo238699 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238699.setAttribute('id', 'smo238699');
const smo238700 = new VF.Annotation('-');
smo238700.setAttribute('id', 'smo238700');
smo238700.setFont('Merriweather', 12.1, 'normal');
smo238700.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238699.addModifier(smo238700);
smo238700.addClass('lyric lyric-0 lyric-hyphen');
smo238721v0ar.push(smo238699);
const smo238701 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238701.setAttribute('id', 'smo238701');
smo238721v0ar.push(smo238701);
const smo238702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo238702.setAttribute('id', 'smo238702');
const smo238703 = new VF.Annotation('вс');
smo238703.setAttribute('id', 'smo238703');
smo238703.setFont('Merriweather', 12.1, 'normal');
smo238703.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238702.addModifier(smo238703);
smo238703.addClass('lyric lyric-0 lyric-hyphen');
smo238721v0ar.push(smo238702);
const smo238704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo238704.setAttribute('id', 'smo238704');
const smo238705 = new VF.Annotation('ю');
smo238705.setAttribute('id', 'smo238705');
smo238705.setFont('Merriweather', 12.1, 'normal');
smo238705.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238704.addModifier(smo238705);
smo238705.addClass('lyric lyric-0');
smo238721v0ar.push(smo238704);
smo238721v0.addTickables(smo238721v0ar)
fmtsmo23872120.joinVoices([smo238721v0]);
const fmtsmo23973820 = new VF.Formatter();
//
// voices and notes for stave 1 20
const smo239738v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239738v0ar = [];
const smo239719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239719.setAttribute('id', 'smo239719');
smo239738v0ar.push(smo239719);
const smo239720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo239720.setAttribute('id', 'smo239720');
smo239738v0ar.push(smo239720);
const smo239721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239721.setAttribute('id', 'smo239721');
smo239738v0ar.push(smo239721);
const smo239722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo239722.setAttribute('id', 'smo239722');
const smo2397220acc = new VF.Accidental('#');
smo239722.addModifier(smo2397220acc, 0);
smo239738v0ar.push(smo239722);
smo239738v0.addTickables(smo239738v0ar)
fmtsmo23973820.joinVoices([smo239738v0]);
const fmtsmo24072820 = new VF.Formatter();
//
// voices and notes for stave 2 20
const smo240728v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240728v0ar = [];
const smo240709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240709.setAttribute('id', 'smo240709');
smo240728v0ar.push(smo240709);
const smo240710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240710.setAttribute('id', 'smo240710');
smo240728v0ar.push(smo240710);
const smo240711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240711.setAttribute('id', 'smo240711');
smo240728v0ar.push(smo240711);
const smo240712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo240712.setAttribute('id', 'smo240712');
smo240728v0ar.push(smo240712);
smo240728v0.addTickables(smo240728v0ar)
fmtsmo24072820.joinVoices([smo240728v0]);
const fmtsmo24167820 = new VF.Formatter();
//
// voices and notes for stave 3 20
const smo241678v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241678v0ar = [];
const smo241659 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241659.setAttribute('id', 'smo241659');
smo241678v0ar.push(smo241659);
const smo241660 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241660.setAttribute('id', 'smo241660');
smo241678v0ar.push(smo241660);
const smo241661 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo241661.setAttribute('id', 'smo241661');
smo241678v0ar.push(smo241661);
const smo241662 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241662.setAttribute('id', 'smo241662');
smo241678v0ar.push(smo241662);
smo241678v0.addTickables(smo241678v0ar)
fmtsmo24167820.joinVoices([smo241678v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248684 = smo238699.getStemDirection();
smo238699.setStemDirection(dirsmo248684);
smo238701.setStemDirection(dirsmo248684);
const smo248684 = new VF.Beam([smo238699,smo238701]);
 
// formatting measures in staff group smo242235
fmtsmo23872120.format([smo238721v0,smo239738v0,smo240728v0,smo241678v0], 219);
const stavesmo238721 = new VF.Stave(55, 1423, 294);
stavesmo238721.setAttribute('id', 'stavesmo238721');
stavesmo238721.setBegBarType(1);
stavesmo238721.addClef('treble');
const keysmo238721 = new VF.KeySignature('F');
keysmo238721.addToStave(stavesmo238721);
stavesmo238721.setContext(context);
stavesmo238721.draw();
smo238721v0.draw(context, stavesmo238721);
smo248684.setContext(context);
smo248684.draw();
const stavesmo239738 = new VF.Stave(55, 1534, 294);
stavesmo239738.setAttribute('id', 'stavesmo239738');
stavesmo239738.setBegBarType(1);
stavesmo239738.addClef('treble');
const keysmo239738 = new VF.KeySignature('F');
keysmo239738.addToStave(stavesmo239738);
stavesmo239738.setContext(context);
stavesmo239738.draw();
smo239738v0.draw(context, stavesmo239738);
const stavesmo240728 = new VF.Stave(55, 1617, 294);
stavesmo240728.setAttribute('id', 'stavesmo240728');
stavesmo240728.setBegBarType(1);
stavesmo240728.addClef('treble');
const keysmo240728 = new VF.KeySignature('F');
keysmo240728.addToStave(stavesmo240728);
stavesmo240728.setContext(context);
stavesmo240728.draw();
smo240728v0.draw(context, stavesmo240728);
const stavesmo241678 = new VF.Stave(55, 1711, 294);
stavesmo241678.setAttribute('id', 'stavesmo241678');
stavesmo241678.setBegBarType(1);
stavesmo241678.addClef('bass');
const keysmo241678 = new VF.KeySignature('F');
keysmo241678.addToStave(stavesmo241678);
stavesmo241678.setContext(context);
stavesmo241678.draw();
smo241678v0.draw(context, stavesmo241678);
const leftsmo242235stavesmo2387213 = new VF.StaveConnector(stavesmo238721, stavesmo241678).setType(1);
leftsmo242235stavesmo2387213.setContext(context).draw();
const fmtsmo23874321 = new VF.Formatter();
//
// voices and notes for stave 0 21
const smo238743v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238743v0ar = [];
const smo238722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238722.setAttribute('id', 'smo238722');
const smo238723 = new VF.Annotation('ноч');
smo238723.setAttribute('id', 'smo238723');
smo238723.setFont('Merriweather', 12.1, 'normal');
smo238723.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238722.addModifier(smo238723);
smo238723.addClass('lyric lyric-0 lyric-hyphen');
smo238743v0ar.push(smo238722);
const smo238724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238724.setAttribute('id', 'smo238724');
const smo238725 = new VF.Annotation('ку');
smo238725.setAttribute('id', 'smo238725');
smo238725.setFont('Merriweather', 12.1, 'normal');
smo238725.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238724.addModifier(smo238725);
smo238725.addClass('lyric lyric-0');
smo238743v0ar.push(smo238724);
const smo238726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238726.setAttribute('id', 'smo238726');
const smo238727 = new VF.Annotation('про');
smo238727.setAttribute('id', 'smo238727');
smo238727.setFont('Merriweather', 12.1, 'normal');
smo238727.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238726.addModifier(smo238727);
smo238727.addClass('lyric lyric-0');
smo238743v0ar.push(smo238726);
smo238743v0.addTickables(smo238743v0ar)
fmtsmo23874321.joinVoices([smo238743v0]);
const fmtsmo23975821 = new VF.Formatter();
//
// voices and notes for stave 1 21
const smo239758v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239758v0ar = [];
const smo239739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239739.setAttribute('id', 'smo239739');
smo239758v0ar.push(smo239739);
const smo239740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239740.setAttribute('id', 'smo239740');
smo239758v0ar.push(smo239740);
const smo239741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239741.setAttribute('id', 'smo239741');
smo239758v0ar.push(smo239741);
const smo239742 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239742.setAttribute('id', 'smo239742');
smo239758v0ar.push(smo239742);
smo239758v0.addTickables(smo239758v0ar)
fmtsmo23975821.joinVoices([smo239758v0]);
const fmtsmo24074821 = new VF.Formatter();
//
// voices and notes for stave 2 21
const smo240748v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240748v0ar = [];
const smo240729 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240729.setAttribute('id', 'smo240729');
smo240748v0ar.push(smo240729);
const smo240730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo240730.setAttribute('id', 'smo240730');
smo240748v0ar.push(smo240730);
const smo240731 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240731.setAttribute('id', 'smo240731');
smo240748v0ar.push(smo240731);
const smo240732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo240732.setAttribute('id', 'smo240732');
smo240748v0ar.push(smo240732);
smo240748v0.addTickables(smo240748v0ar)
fmtsmo24074821.joinVoices([smo240748v0]);
const fmtsmo24169821 = new VF.Formatter();
//
// voices and notes for stave 3 21
const smo241698v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241698v0ar = [];
const smo241679 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241679.setAttribute('id', 'smo241679');
smo241698v0ar.push(smo241679);
const smo241680 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241680.setAttribute('id', 'smo241680');
smo241698v0ar.push(smo241680);
const smo241681 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo241681.setAttribute('id', 'smo241681');
smo241698v0ar.push(smo241681);
const smo241682 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241682.setAttribute('id', 'smo241682');
smo241698v0ar.push(smo241682);
smo241698v0.addTickables(smo241698v0ar)
fmtsmo24169821.joinVoices([smo241698v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23874321.format([smo238743v0,smo239758v0,smo240748v0,smo241698v0], 198);
const stavesmo238743 = new VF.Stave(349, 1423, 212);
stavesmo238743.setAttribute('id', 'stavesmo238743');
stavesmo238743.setBegBarType(VF.Barline.type.NONE);
stavesmo238743.setContext(context);
stavesmo238743.draw();
smo238743v0.draw(context, stavesmo238743);
const stavesmo239758 = new VF.Stave(349, 1534, 212);
stavesmo239758.setAttribute('id', 'stavesmo239758');
stavesmo239758.setBegBarType(VF.Barline.type.NONE);
stavesmo239758.setContext(context);
stavesmo239758.draw();
smo239758v0.draw(context, stavesmo239758);
const stavesmo240748 = new VF.Stave(349, 1617, 212);
stavesmo240748.setAttribute('id', 'stavesmo240748');
stavesmo240748.setBegBarType(VF.Barline.type.NONE);
stavesmo240748.setContext(context);
stavesmo240748.draw();
smo240748v0.draw(context, stavesmo240748);
const stavesmo241698 = new VF.Stave(349, 1711, 212);
stavesmo241698.setAttribute('id', 'stavesmo241698');
stavesmo241698.setBegBarType(VF.Barline.type.NONE);
stavesmo241698.setContext(context);
stavesmo241698.draw();
smo241698v0.draw(context, stavesmo241698);
const fmtsmo23877322 = new VF.Formatter();
//
// voices and notes for stave 0 22
const smo238773v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238773v0ar = [];
const smo238744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238744.setAttribute('id', 'smo238744');
const smo238745 = new VF.Annotation('-');
smo238745.setAttribute('id', 'smo238745');
smo238745.setFont('Merriweather', 12.1, 'normal');
smo238745.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238744.addModifier(smo238745);
smo238745.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238744);
const smo238746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo238746.setAttribute('id', 'smo238746');
const smo238747 = new VF.Annotation('-');
smo238747.setAttribute('id', 'smo238747');
smo238747.setFont('Merriweather', 12.1, 'normal');
smo238747.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238746.addModifier(smo238747);
smo238747.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238746);
const smo238748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238748.setAttribute('id', 'smo238748');
const smo238749 = new VF.Annotation('-');
smo238749.setAttribute('id', 'smo238749');
smo238749.setFont('Merriweather', 12.1, 'normal');
smo238749.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238748.addModifier(smo238749);
smo238749.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238748);
const smo238750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo238750.setAttribute('id', 'smo238750');
const smo2387500acc = new VF.Accidental('#');
smo238750.addModifier(smo2387500acc, 0);
const smo238751 = new VF.Annotation('-');
smo238751.setAttribute('id', 'smo238751');
smo238751.setFont('Merriweather', 12.1, 'normal');
smo238751.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238750.addModifier(smo238751);
smo238751.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238750);
const smo238752 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238752.setAttribute('id', 'smo238752');
const smo238753 = new VF.Annotation('-');
smo238753.setAttribute('id', 'smo238753');
smo238753.setFont('Merriweather', 12.1, 'normal');
smo238753.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238752.addModifier(smo238753);
smo238753.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238752);
const smo238754 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bn/4/n"]}'))
smo238754.setAttribute('id', 'smo238754');
const smo2387540acc = new VF.Accidental('n');
smo238754.addModifier(smo2387540acc, 0);
const smo238755 = new VF.Annotation('-');
smo238755.setAttribute('id', 'smo238755');
smo238755.setFont('Merriweather', 12.1, 'normal');
smo238755.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238754.addModifier(smo238755);
smo238755.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238754);
const smo238756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo238756.setAttribute('id', 'smo238756');
const smo2387560acc = new VF.Accidental('#');
smo238756.addModifier(smo2387560acc, 0);
const smo238757 = new VF.Annotation('по');
smo238757.setAttribute('id', 'smo238757');
smo238757.setFont('Merriweather', 12.1, 'normal');
smo238757.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238756.addModifier(smo238757);
smo238757.addClass('lyric lyric-0 lyric-hyphen');
smo238773v0ar.push(smo238756);
smo238773v0.addTickables(smo238773v0ar)
fmtsmo23877322.joinVoices([smo238773v0]);
const fmtsmo23977622 = new VF.Formatter();
//
// voices and notes for stave 1 22
const smo239776v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239776v0ar = [];
const smo239759 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239759.setAttribute('id', 'smo239759');
smo239776v0ar.push(smo239759);
const smo239760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239760.setAttribute('id', 'smo239760');
const smo2397600acc = new VF.Accidental('#');
smo239760.addModifier(smo2397600acc, 0);
smo239760.addModifier(new VF.Dot(), 0);
smo239776v0ar.push(smo239760);
smo239776v0.addTickables(smo239776v0ar)
fmtsmo23977622.joinVoices([smo239776v0]);
const fmtsmo24076622 = new VF.Formatter();
//
// voices and notes for stave 2 22
const smo240766v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240766v0ar = [];
const smo240749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240749.setAttribute('id', 'smo240749');
smo240766v0ar.push(smo240749);
const smo240750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240750.setAttribute('id', 'smo240750');
smo240750.addModifier(new VF.Dot(), 0);
smo240766v0ar.push(smo240750);
smo240766v0.addTickables(smo240766v0ar)
fmtsmo24076622.joinVoices([smo240766v0]);
const fmtsmo24171522 = new VF.Formatter();
//
// voices and notes for stave 3 22
const smo241715v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241715v0ar = [];
const smo241699 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241699.setAttribute('id', 'smo241699');
smo241715v0ar.push(smo241699);
smo241715v0.addTickables(smo241715v0ar)
fmtsmo24171522.joinVoices([smo241715v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248701 = smo238746.getStemDirection();
smo238746.setStemDirection(dirsmo248701);
smo238748.setStemDirection(dirsmo248701);
smo238750.setStemDirection(dirsmo248701);
smo238752.setStemDirection(dirsmo248701);
const smo248701 = new VF.Beam([smo238746,smo238748,smo238750,smo238752]);
 
// formatting measures in staff group smo242235
fmtsmo23877322.format([smo238773v0,smo239776v0,smo240766v0,smo241715v0], 255);
const stavesmo238773 = new VF.Stave(561, 1423, 269);
stavesmo238773.setAttribute('id', 'stavesmo238773');
stavesmo238773.setBegBarType(VF.Barline.type.NONE);
stavesmo238773.setContext(context);
stavesmo238773.draw();
smo238773v0.draw(context, stavesmo238773);
smo248701.setContext(context);
smo248701.draw();
const stavesmo239776 = new VF.Stave(561, 1534, 269);
stavesmo239776.setAttribute('id', 'stavesmo239776');
stavesmo239776.setBegBarType(VF.Barline.type.NONE);
stavesmo239776.setContext(context);
stavesmo239776.draw();
smo239776v0.draw(context, stavesmo239776);
const stavesmo240766 = new VF.Stave(561, 1617, 269);
stavesmo240766.setAttribute('id', 'stavesmo240766');
stavesmo240766.setBegBarType(VF.Barline.type.NONE);
stavesmo240766.setContext(context);
stavesmo240766.draw();
smo240766v0.draw(context, stavesmo240766);
const stavesmo241715 = new VF.Stave(561, 1711, 269);
stavesmo241715.setAttribute('id', 'stavesmo241715');
stavesmo241715.setBegBarType(VF.Barline.type.NONE);
stavesmo241715.setContext(context);
stavesmo241715.draw();
smo241715v0.draw(context, stavesmo241715);
const fmtsmo23879223 = new VF.Formatter();
//
// voices and notes for stave 0 23
const smo238792v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238792v0ar = [];
const smo238774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238774.setAttribute('id', 'smo238774');
smo238774.addModifier(new VF.Dot(), 0);
const smo238775 = new VF.Annotation('ешь');
smo238775.setAttribute('id', 'smo238775');
smo238775.setFont('Merriweather', 12.1, 'normal');
smo238775.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238774.addModifier(smo238775);
smo238775.addClass('lyric lyric-0');
smo238792v0ar.push(smo238774);
const smo238776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo238776.setAttribute('id', 'smo238776');
smo238792v0ar.push(smo238776);
smo238792v0.addTickables(smo238792v0ar)
fmtsmo23879223.joinVoices([smo238792v0]);
const fmtsmo23979423 = new VF.Formatter();
//
// voices and notes for stave 1 23
const smo239794v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239794v0ar = [];
const smo239777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239777.setAttribute('id', 'smo239777');
smo239777.addModifier(new VF.Dot(), 0);
smo239794v0ar.push(smo239777);
const smo239778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239778.setAttribute('id', 'smo239778');
smo239794v0ar.push(smo239778);
smo239794v0.addTickables(smo239794v0ar)
fmtsmo23979423.joinVoices([smo239794v0]);
const fmtsmo24078423 = new VF.Formatter();
//
// voices and notes for stave 2 23
const smo240784v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240784v0ar = [];
const smo240767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo240767.setAttribute('id', 'smo240767');
smo240767.addModifier(new VF.Dot(), 0);
smo240784v0ar.push(smo240767);
const smo240768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo240768.setAttribute('id', 'smo240768');
smo240784v0ar.push(smo240768);
smo240784v0.addTickables(smo240784v0ar)
fmtsmo24078423.joinVoices([smo240784v0]);
const fmtsmo24173323 = new VF.Formatter();
//
// voices and notes for stave 3 23
const smo241733v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241733v0ar = [];
const smo241716 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241716.setAttribute('id', 'smo241716');
smo241716.addModifier(new VF.Dot(), 0);
smo241733v0ar.push(smo241716);
const smo241717 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241717.setAttribute('id', 'smo241717');
smo241733v0ar.push(smo241717);
smo241733v0.addTickables(smo241733v0ar)
fmtsmo24173323.joinVoices([smo241733v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23879223.format([smo238792v0,smo239794v0,smo240784v0,smo241733v0], 88);
const stavesmo238792 = new VF.Stave(830, 1423, 102);
stavesmo238792.setAttribute('id', 'stavesmo238792');
stavesmo238792.setBegBarType(VF.Barline.type.NONE);
stavesmo238792.setContext(context);
stavesmo238792.draw();
smo238792v0.draw(context, stavesmo238792);
const stavesmo239794 = new VF.Stave(830, 1534, 102);
stavesmo239794.setAttribute('id', 'stavesmo239794');
stavesmo239794.setBegBarType(VF.Barline.type.NONE);
stavesmo239794.setContext(context);
stavesmo239794.draw();
smo239794v0.draw(context, stavesmo239794);
const stavesmo240784 = new VF.Stave(830, 1617, 102);
stavesmo240784.setAttribute('id', 'stavesmo240784');
stavesmo240784.setBegBarType(VF.Barline.type.NONE);
stavesmo240784.setContext(context);
stavesmo240784.draw();
smo240784v0.draw(context, stavesmo240784);
const stavesmo241733 = new VF.Stave(830, 1711, 102);
stavesmo241733.setAttribute('id', 'stavesmo241733');
stavesmo241733.setBegBarType(VF.Barline.type.NONE);
stavesmo241733.setContext(context);
stavesmo241733.draw();
smo241733v0.draw(context, stavesmo241733);
const fmtsmo23882224 = new VF.Formatter();
//
// voices and notes for stave 0 24
const smo238822v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238822v0ar = [];
const smo238793 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238793.setAttribute('id', 'smo238793');
const smo238794 = new VF.Annotation('Со');
smo238794.setAttribute('id', 'smo238794');
smo238794.setFont('Merriweather', 12.1, 'normal');
smo238794.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238793.addModifier(smo238794);
smo238794.addClass('lyric lyric-0');
smo238822v0ar.push(smo238793);
const smo238795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238795.setAttribute('id', 'smo238795');
const smo238796 = new VF.Annotation('-');
smo238796.setAttribute('id', 'smo238796');
smo238796.setFont('Merriweather', 12.1, 'normal');
smo238796.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238795.addModifier(smo238796);
smo238796.addClass('lyric lyric-0 lyric-hyphen');
smo238822v0ar.push(smo238795);
const smo238797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238797.setAttribute('id', 'smo238797');
const smo238798 = new VF.Annotation('-');
smo238798.setAttribute('id', 'smo238798');
smo238798.setFont('Merriweather', 12.1, 'normal');
smo238798.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238797.addModifier(smo238798);
smo238798.addClass('lyric lyric-0 lyric-hyphen');
smo238822v0ar.push(smo238797);
const smo238799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo238799.setAttribute('id', 'smo238799');
const smo2387990acc = new VF.Accidental('#');
smo238799.addModifier(smo2387990acc, 0);
const smo238800 = new VF.Annotation('-');
smo238800.setAttribute('id', 'smo238800');
smo238800.setFont('Merriweather', 12.1, 'normal');
smo238800.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238799.addModifier(smo238800);
smo238800.addClass('lyric lyric-0 lyric-hyphen');
smo238822v0ar.push(smo238799);
const smo238801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238801.setAttribute('id', 'smo238801');
const smo238802 = new VF.Annotation('-');
smo238802.setAttribute('id', 'smo238802');
smo238802.setFont('Merriweather', 12.1, 'normal');
smo238802.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238801.addModifier(smo238802);
smo238802.addClass('lyric lyric-0 lyric-hyphen');
smo238822v0ar.push(smo238801);
const smo238803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo238803.setAttribute('id', 'smo238803');
const smo238804 = new VF.Annotation('лo');
smo238804.setAttribute('id', 'smo238804');
smo238804.setFont('Merriweather', 12.1, 'normal');
smo238804.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238803.addModifier(smo238804);
smo238804.addClass('lyric lyric-0');
smo238822v0ar.push(smo238803);
const smo238805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo238805.setAttribute('id', 'smo238805');
const smo238806 = new VF.Annotation('-');
smo238806.setAttribute('id', 'smo238806');
smo238806.setFont('Merriweather', 12.1, 'normal');
smo238806.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238805.addModifier(smo238806);
smo238806.addClass('lyric lyric-0 lyric-hyphen');
smo238822v0ar.push(smo238805);
smo238822v0.addTickables(smo238822v0ar)
fmtsmo23882224.joinVoices([smo238822v0]);
const fmtsmo23981524 = new VF.Formatter();
//
// voices and notes for stave 1 24
const smo239815v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239815v0ar = [];
const smo239795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239795.setAttribute('id', 'smo239795');
smo239815v0ar.push(smo239795);
const smo239796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239796.setAttribute('id', 'smo239796');
const smo239797 = new VF.Ornament('mordent_inverted');
smo239796.addModifier(smo239797, 0);
smo239815v0ar.push(smo239796);
const smo239798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo239798.setAttribute('id', 'smo239798');
const smo2397980acc = new VF.Accidental('#');
smo239798.addModifier(smo2397980acc, 0);
smo239815v0ar.push(smo239798);
const smo239799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239799.setAttribute('id', 'smo239799');
smo239815v0ar.push(smo239799);
smo239815v0.addTickables(smo239815v0ar)
fmtsmo23981524.joinVoices([smo239815v0]);
const fmtsmo24080124 = new VF.Formatter();
//
// voices and notes for stave 2 24
const smo240801v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240801v0ar = [];
const smo240785 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240785.setAttribute('id', 'smo240785');
smo240801v0ar.push(smo240785);
smo240801v0.addTickables(smo240801v0ar)
fmtsmo24080124.joinVoices([smo240801v0]);
const fmtsmo24175324 = new VF.Formatter();
//
// voices and notes for stave 3 24
const smo241753v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241753v0ar = [];
const smo241734 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241734.setAttribute('id', 'smo241734');
smo241753v0ar.push(smo241734);
const smo241735 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241735.setAttribute('id', 'smo241735');
smo241753v0ar.push(smo241735);
const smo241736 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo241736.setAttribute('id', 'smo241736');
smo241753v0ar.push(smo241736);
const smo241737 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241737.setAttribute('id', 'smo241737');
smo241753v0ar.push(smo241737);
smo241753v0.addTickables(smo241753v0ar)
fmtsmo24175324.joinVoices([smo241753v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
const dirsmo248718 = smo238795.getStemDirection();
smo238795.setStemDirection(dirsmo248718);
smo238797.setStemDirection(dirsmo248718);
smo238799.setStemDirection(dirsmo248718);
smo238801.setStemDirection(dirsmo248718);
const smo248718 = new VF.Beam([smo238795,smo238797,smo238799,smo238801]);
 
// formatting measures in staff group smo242235
fmtsmo23882224.format([smo238822v0,smo239815v0,smo240801v0,smo241753v0], 237);
const stavesmo238822 = new VF.Stave(932, 1423, 251);
stavesmo238822.setAttribute('id', 'stavesmo238822');
stavesmo238822.setBegBarType(VF.Barline.type.NONE);
stavesmo238822.setContext(context);
stavesmo238822.draw();
smo238822v0.draw(context, stavesmo238822);
smo248718.setContext(context);
smo248718.draw();
const stavesmo239815 = new VF.Stave(932, 1534, 251);
stavesmo239815.setAttribute('id', 'stavesmo239815');
stavesmo239815.setBegBarType(VF.Barline.type.NONE);
stavesmo239815.setContext(context);
stavesmo239815.draw();
smo239815v0.draw(context, stavesmo239815);
const stavesmo240801 = new VF.Stave(932, 1617, 251);
stavesmo240801.setAttribute('id', 'stavesmo240801');
stavesmo240801.setBegBarType(VF.Barline.type.NONE);
stavesmo240801.setContext(context);
stavesmo240801.draw();
smo240801v0.draw(context, stavesmo240801);
const stavesmo241753 = new VF.Stave(932, 1711, 251);
stavesmo241753.setAttribute('id', 'stavesmo241753');
stavesmo241753.setBegBarType(VF.Barline.type.NONE);
stavesmo241753.setContext(context);
stavesmo241753.draw();
smo241753v0.draw(context, stavesmo241753);
const fmtsmo23884225 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo238842v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo238842v0ar = [];
const smo238823 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo238823.setAttribute('id', 'smo238823');
const smo238824 = new VF.Annotation('вей');
smo238824.setAttribute('id', 'smo238824');
smo238824.setFont('Merriweather', 12.1, 'normal');
smo238824.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238823.addModifier(smo238824);
smo238824.addClass('lyric lyric-0');
smo238842v0ar.push(smo238823);
const smo238825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo238825.setAttribute('id', 'smo238825');
const smo238826 = new VF.Annotation('мой');
smo238826.setAttribute('id', 'smo238826');
smo238826.setFont('Merriweather', 12.1, 'normal');
smo238826.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo238825.addModifier(smo238826);
smo238826.addClass('lyric lyric-0');
smo238842v0ar.push(smo238825);
smo238842v0.addTickables(smo238842v0ar)
fmtsmo23884225.joinVoices([smo238842v0]);
const fmtsmo23983625 = new VF.Formatter();
//
// voices and notes for stave 1 25
const smo239836v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo239836v0ar = [];
const smo239816 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo239816.setAttribute('id', 'smo239816');
smo239836v0ar.push(smo239816);
const smo239817 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239817.setAttribute('id', 'smo239817');
const smo239818 = new VF.Ornament('mordent_inverted');
smo239817.addModifier(smo239818, 0);
smo239836v0ar.push(smo239817);
const smo239819 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo239819.setAttribute('id', 'smo239819');
smo239836v0ar.push(smo239819);
const smo239820 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo239820.setAttribute('id', 'smo239820');
smo239836v0ar.push(smo239820);
smo239836v0.addTickables(smo239836v0ar)
fmtsmo23983625.joinVoices([smo239836v0]);
const fmtsmo24081825 = new VF.Formatter();
//
// voices and notes for stave 2 25
const smo240818v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo240818v0ar = [];
const smo240802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo240802.setAttribute('id', 'smo240802');
smo240818v0ar.push(smo240802);
smo240818v0.addTickables(smo240818v0ar)
fmtsmo24081825.joinVoices([smo240818v0]);
const fmtsmo24177125 = new VF.Formatter();
//
// voices and notes for stave 3 25
const smo241771v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo241771v0ar = [];
const smo241754 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo241754.setAttribute('id', 'smo241754');
smo241771v0ar.push(smo241754);
const smo241755 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo241755.setAttribute('id', 'smo241755');
smo241771v0ar.push(smo241755);
smo241771v0.addTickables(smo241771v0ar)
fmtsmo24177125.joinVoices([smo241771v0]);
// create beam groups and tuplets for format grp smo242235 before formatting
 
// formatting measures in staff group smo242235
fmtsmo23884225.format([smo238842v0,smo239836v0,smo240818v0,smo241771v0], 177);
const stavesmo238842 = new VF.Stave(1183, 1423, 191);
stavesmo238842.setAttribute('id', 'stavesmo238842');
stavesmo238842.setBegBarType(VF.Barline.type.NONE);
stavesmo238842.setContext(context);
stavesmo238842.draw();
smo238842v0.draw(context, stavesmo238842);
const stavesmo239836 = new VF.Stave(1183, 1534, 191);
stavesmo239836.setAttribute('id', 'stavesmo239836');
stavesmo239836.setBegBarType(VF.Barline.type.NONE);
stavesmo239836.setContext(context);
stavesmo239836.draw();
smo239836v0.draw(context, stavesmo239836);
const stavesmo240818 = new VF.Stave(1183, 1617, 191);
stavesmo240818.setAttribute('id', 'stavesmo240818');
stavesmo240818.setBegBarType(VF.Barline.type.NONE);
stavesmo240818.setContext(context);
stavesmo240818.draw();
smo240818v0.draw(context, stavesmo240818);
const stavesmo241771 = new VF.Stave(1183, 1711, 191);
stavesmo241771.setAttribute('id', 'stavesmo241771');
stavesmo241771.setBegBarType(VF.Barline.type.NONE);
stavesmo241771.setContext(context);
stavesmo241771.draw();
smo241771v0.draw(context, stavesmo241771);
const rightsmo242235stavesmo2388423 = new VF.StaveConnector(stavesmo238842, stavesmo241771).setType(0);
rightsmo242235stavesmo2388423.setContext(context).draw();
// modifier from 0-18-0-0 to 0-18-0-1
const smo249571 = new VF.Curve(smo238654, smo238656, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":45},{"x":0,"y":45}],"invert":false,"position":2,"position_end":1}'));
smo249571.setContext(context).draw();
// modifier from 0-22-0-0 to 0-23-0-0
const smo249572 = new VF.TextBracket({ start: smo238744, stop: smo238774, text: 'ritard', position: 1 });
smo249572.setLine(1).setContext(context).draw();
// modifier from 2-24-0-0 to 2-25-0-0
const smo249573 = new VF.StaveTie({ first_note: smo240785, last_note: smo240802, 
          firstNote: smo240785, lastNote: smo240802, first_indices: [0], last_indices: [0]});
smo249573.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo238439').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238441').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238459').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238461').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238463').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238481').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238503').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238522').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238524').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238526').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238544').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238546').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238548').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238566').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238568').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238570').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238572').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238574').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238592').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238611').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238615').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238633').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238635').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238637').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238655').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238658').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238677').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238679').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238698').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238700').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238703').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238705').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238723').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238725').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238727').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238745').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238747').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238749').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238753').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo238755').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo238757').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo238775').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo238794').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo238796').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo238798').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo238800').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo238802').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo238804').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo238806').setAttributeNS('', 'transform', 'translate(0 25)');
context.svg.getElementById('vf-smo238824').setAttributeNS('', 'transform', 'translate(0 20)');
context.svg.getElementById('vf-smo238826').setAttributeNS('', 'transform', 'translate(0 15)');
}
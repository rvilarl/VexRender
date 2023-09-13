// @@ Solovey p 2/2 ((Op. 1)) by Folks
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
const fmtsmo24237626 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo242376v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242376v0ar = [];
const smo242348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242348.setAttribute('id', 'smo242348');
const smo242349 = new VF.Annotation('Со');
smo242349.setAttribute('id', 'smo242349');
smo242349.setFont('Merriweather', 12.1, 'normal');
smo242349.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242348.addModifier(smo242349);
smo242349.addClass('lyric lyric-0');
smo242376v0ar.push(smo242348);
const smo242350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242350.setAttribute('id', 'smo242350');
const smo242351 = new VF.Annotation('-');
smo242351.setAttribute('id', 'smo242351');
smo242351.setFont('Merriweather', 12.1, 'normal');
smo242351.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242350.addModifier(smo242351);
smo242351.addClass('lyric lyric-0 lyric-hyphen');
smo242376v0ar.push(smo242350);
const smo242352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242352.setAttribute('id', 'smo242352');
const smo242353 = new VF.Annotation('-');
smo242353.setAttribute('id', 'smo242353');
smo242353.setFont('Merriweather', 12.1, 'normal');
smo242353.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242352.addModifier(smo242353);
smo242353.addClass('lyric lyric-0 lyric-hyphen');
smo242376v0ar.push(smo242352);
const smo242354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["d#/5/n"]}'))
smo242354.setAttribute('id', 'smo242354');
const smo2423540acc = new VF.Accidental('#');
smo242354.addModifier(smo2423540acc, 0);
const smo242355 = new VF.Annotation('-');
smo242355.setAttribute('id', 'smo242355');
smo242355.setFont('Merriweather', 12.1, 'normal');
smo242355.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242354.addModifier(smo242355);
smo242355.addClass('lyric lyric-0 lyric-hyphen');
smo242376v0ar.push(smo242354);
const smo242356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242356.setAttribute('id', 'smo242356');
smo242376v0ar.push(smo242356);
const smo242357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242357.setAttribute('id', 'smo242357');
const smo242358 = new VF.Annotation('ло');
smo242358.setAttribute('id', 'smo242358');
smo242358.setFont('Merriweather', 12.1, 'normal');
smo242358.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242357.addModifier(smo242358);
smo242358.addClass('lyric lyric-0');
smo242376v0ar.push(smo242357);
const smo242359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242359.setAttribute('id', 'smo242359');
const smo242360 = new VF.Annotation('-');
smo242360.setAttribute('id', 'smo242360');
smo242360.setFont('Merriweather', 12.1, 'normal');
smo242360.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242359.addModifier(smo242360);
smo242360.addClass('lyric lyric-0 lyric-hyphen');
smo242376v0ar.push(smo242359);
smo242376v0.addTickables(smo242376v0ar)
fmtsmo24237626.joinVoices([smo242376v0]);
const fmtsmo24336126 = new VF.Formatter();
//
// voices and notes for stave 1 26
const smo243361v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243361v0ar = [];
const smo243342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243342.setAttribute('id', 'smo243342');
smo243361v0ar.push(smo243342);
const smo243343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243343.setAttribute('id', 'smo243343');
smo243361v0ar.push(smo243343);
const smo243344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo243344.setAttribute('id', 'smo243344');
const smo2433440acc = new VF.Accidental('#');
smo243344.addModifier(smo2433440acc, 0);
smo243361v0ar.push(smo243344);
const smo243345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243345.setAttribute('id', 'smo243345');
smo243361v0ar.push(smo243345);
smo243361v0.addTickables(smo243361v0ar)
fmtsmo24336126.joinVoices([smo243361v0]);
const fmtsmo24434026 = new VF.Formatter();
//
// voices and notes for stave 2 26
const smo244340v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244340v0ar = [];
const smo244324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244324.setAttribute('id', 'smo244324');
smo244340v0ar.push(smo244324);
smo244340v0.addTickables(smo244340v0ar)
fmtsmo24434026.joinVoices([smo244340v0]);
const fmtsmo24529426 = new VF.Formatter();
//
// voices and notes for stave 3 26
const smo245294v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245294v0ar = [];
const smo245277 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245277.setAttribute('id', 'smo245277');
smo245294v0ar.push(smo245277);
const smo245278 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245278.setAttribute('id', 'smo245278');
smo245294v0ar.push(smo245278);
smo245294v0.addTickables(smo245294v0ar)
fmtsmo24529426.joinVoices([smo245294v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252249 = smo242350.getStemDirection();
smo242350.setStemDirection(dirsmo252249);
smo242352.setStemDirection(dirsmo252249);
smo242354.setStemDirection(dirsmo252249);
smo242356.setStemDirection(dirsmo252249);
const smo252249 = new VF.Beam([smo242350,smo242352,smo242354,smo242356]);
 
// formatting measures in staff group smo245740
fmtsmo24237626.format([smo242376v0,smo243361v0,smo244340v0,smo245294v0], 249);
const stavesmo242376 = new VF.Stave(55, 219, 323);
stavesmo242376.setAttribute('id', 'stavesmo242376');
stavesmo242376.setBegBarType(1);
stavesmo242376.addClef('treble');
const keysmo242376 = new VF.KeySignature('F');
keysmo242376.addToStave(stavesmo242376);
stavesmo242376.setContext(context);
stavesmo242376.draw();
smo242376v0.draw(context, stavesmo242376);
smo252249.setContext(context);
smo252249.draw();
const stavesmo243361 = new VF.Stave(55, 311, 323);
stavesmo243361.setAttribute('id', 'stavesmo243361');
stavesmo243361.setBegBarType(1);
stavesmo243361.addClef('treble');
const keysmo243361 = new VF.KeySignature('F');
keysmo243361.addToStave(stavesmo243361);
stavesmo243361.setContext(context);
stavesmo243361.draw();
smo243361v0.draw(context, stavesmo243361);
const stavesmo244340 = new VF.Stave(55, 389, 323);
stavesmo244340.setAttribute('id', 'stavesmo244340');
stavesmo244340.setBegBarType(1);
stavesmo244340.addClef('treble');
const keysmo244340 = new VF.KeySignature('F');
keysmo244340.addToStave(stavesmo244340);
stavesmo244340.setContext(context);
stavesmo244340.draw();
smo244340v0.draw(context, stavesmo244340);
const stavesmo245294 = new VF.Stave(55, 473, 323);
stavesmo245294.setAttribute('id', 'stavesmo245294');
stavesmo245294.setBegBarType(1);
stavesmo245294.addClef('bass');
const keysmo245294 = new VF.KeySignature('F');
keysmo245294.addToStave(stavesmo245294);
stavesmo245294.setContext(context);
stavesmo245294.draw();
smo245294v0.draw(context, stavesmo245294);
const leftsmo245740stavesmo2423763 = new VF.StaveConnector(stavesmo242376, stavesmo245294).setType(1);
leftsmo245740stavesmo2423763.setContext(context).draw();
const fmtsmo24239527 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo242395v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242395v0ar = [];
const smo242377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242377.setAttribute('id', 'smo242377');
const smo242378 = new VF.Annotation('вей');
smo242378.setAttribute('id', 'smo242378');
smo242378.setFont('Merriweather', 12.1, 'normal');
smo242378.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242377.addModifier(smo242378);
smo242378.addClass('lyric lyric-0');
smo242395v0ar.push(smo242377);
const smo242379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242379.setAttribute('id', 'smo242379');
smo242395v0ar.push(smo242379);
smo242395v0.addTickables(smo242395v0ar)
fmtsmo24239527.joinVoices([smo242395v0]);
const fmtsmo24338127 = new VF.Formatter();
//
// voices and notes for stave 1 27
const smo243381v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243381v0ar = [];
const smo243362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243362.setAttribute('id', 'smo243362');
smo243381v0ar.push(smo243362);
const smo243363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243363.setAttribute('id', 'smo243363');
smo243381v0ar.push(smo243363);
const smo243364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo243364.setAttribute('id', 'smo243364');
smo243381v0ar.push(smo243364);
const smo243365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243365.setAttribute('id', 'smo243365');
smo243381v0ar.push(smo243365);
smo243381v0.addTickables(smo243381v0ar)
fmtsmo24338127.joinVoices([smo243381v0]);
const fmtsmo24435727 = new VF.Formatter();
//
// voices and notes for stave 2 27
const smo244357v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244357v0ar = [];
const smo244341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244341.setAttribute('id', 'smo244341');
smo244357v0ar.push(smo244341);
smo244357v0.addTickables(smo244357v0ar)
fmtsmo24435727.joinVoices([smo244357v0]);
const fmtsmo24531227 = new VF.Formatter();
//
// voices and notes for stave 3 27
const smo245312v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245312v0ar = [];
const smo245295 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245295.setAttribute('id', 'smo245295');
smo245312v0ar.push(smo245295);
const smo245296 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245296.setAttribute('id', 'smo245296');
smo245312v0ar.push(smo245296);
smo245312v0.addTickables(smo245312v0ar)
fmtsmo24531227.joinVoices([smo245312v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24239527.format([smo242395v0,smo243381v0,smo244357v0,smo245312v0], 147);
const stavesmo242395 = new VF.Stave(378, 219, 161);
stavesmo242395.setAttribute('id', 'stavesmo242395');
stavesmo242395.setBegBarType(VF.Barline.type.NONE);
stavesmo242395.setContext(context);
stavesmo242395.draw();
smo242395v0.draw(context, stavesmo242395);
const stavesmo243381 = new VF.Stave(378, 311, 161);
stavesmo243381.setAttribute('id', 'stavesmo243381');
stavesmo243381.setBegBarType(VF.Barline.type.NONE);
stavesmo243381.setContext(context);
stavesmo243381.draw();
smo243381v0.draw(context, stavesmo243381);
const stavesmo244357 = new VF.Stave(378, 389, 161);
stavesmo244357.setAttribute('id', 'stavesmo244357');
stavesmo244357.setBegBarType(VF.Barline.type.NONE);
stavesmo244357.setContext(context);
stavesmo244357.draw();
smo244357v0.draw(context, stavesmo244357);
const stavesmo245312 = new VF.Stave(378, 473, 161);
stavesmo245312.setAttribute('id', 'stavesmo245312');
stavesmo245312.setBegBarType(VF.Barline.type.NONE);
stavesmo245312.setContext(context);
stavesmo245312.draw();
smo245312v0.draw(context, stavesmo245312);
const fmtsmo24241728 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo242417v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242417v0ar = [];
const smo242396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242396.setAttribute('id', 'smo242396');
const smo242397 = new VF.Annotation('цо');
smo242397.setAttribute('id', 'smo242397');
smo242397.setFont('Merriweather', 12.1, 'normal');
smo242397.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242396.addModifier(smo242397);
smo242397.addClass('lyric lyric-0 lyric-hyphen');
smo242417v0ar.push(smo242396);
const smo242398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo242398.setAttribute('id', 'smo242398');
const smo242399 = new VF.Annotation('ло');
smo242399.setAttribute('id', 'smo242399');
smo242399.setFont('Merriweather', 12.1, 'normal');
smo242399.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242398.addModifier(smo242399);
smo242399.addClass('lyric lyric-0');
smo242417v0ar.push(smo242398);
const smo242400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo242400.setAttribute('id', 'smo242400');
const smo242401 = new VF.Annotation('-');
smo242401.setAttribute('id', 'smo242401');
smo242401.setFont('Merriweather', 12.1, 'normal');
smo242401.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242400.addModifier(smo242401);
smo242401.addClass('lyric lyric-0 lyric-hyphen');
smo242417v0ar.push(smo242400);
smo242417v0.addTickables(smo242417v0ar)
fmtsmo24241728.joinVoices([smo242417v0]);
const fmtsmo24340128 = new VF.Formatter();
//
// voices and notes for stave 1 28
const smo243401v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243401v0ar = [];
const smo243382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243382.setAttribute('id', 'smo243382');
smo243401v0ar.push(smo243382);
const smo243383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243383.setAttribute('id', 'smo243383');
smo243401v0ar.push(smo243383);
const smo243384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243384.setAttribute('id', 'smo243384');
smo243401v0ar.push(smo243384);
const smo243385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243385.setAttribute('id', 'smo243385');
smo243401v0ar.push(smo243385);
smo243401v0.addTickables(smo243401v0ar)
fmtsmo24340128.joinVoices([smo243401v0]);
const fmtsmo24437528 = new VF.Formatter();
//
// voices and notes for stave 2 28
const smo244375v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244375v0ar = [];
const smo244358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo244358.setAttribute('id', 'smo244358');
smo244375v0ar.push(smo244358);
const smo244359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo244359.setAttribute('id', 'smo244359');
smo244375v0ar.push(smo244359);
smo244375v0.addTickables(smo244375v0ar)
fmtsmo24437528.joinVoices([smo244375v0]);
const fmtsmo24533028 = new VF.Formatter();
//
// voices and notes for stave 3 28
const smo245330v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245330v0ar = [];
const smo245313 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245313.setAttribute('id', 'smo245313');
smo245330v0ar.push(smo245313);
const smo245314 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo245314.setAttribute('id', 'smo245314');
smo245330v0ar.push(smo245314);
smo245330v0.addTickables(smo245330v0ar)
fmtsmo24533028.joinVoices([smo245330v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24241728.format([smo242417v0,smo243401v0,smo244375v0,smo245330v0], 146);
const stavesmo242417 = new VF.Stave(539, 219, 160);
stavesmo242417.setAttribute('id', 'stavesmo242417');
stavesmo242417.setBegBarType(VF.Barline.type.NONE);
stavesmo242417.setContext(context);
stavesmo242417.draw();
smo242417v0.draw(context, stavesmo242417);
const stavesmo243401 = new VF.Stave(539, 311, 160);
stavesmo243401.setAttribute('id', 'stavesmo243401');
stavesmo243401.setBegBarType(VF.Barline.type.NONE);
stavesmo243401.setContext(context);
stavesmo243401.draw();
smo243401v0.draw(context, stavesmo243401);
const stavesmo244375 = new VF.Stave(539, 389, 160);
stavesmo244375.setAttribute('id', 'stavesmo244375');
stavesmo244375.setBegBarType(VF.Barline.type.NONE);
stavesmo244375.setContext(context);
stavesmo244375.draw();
smo244375v0.draw(context, stavesmo244375);
const stavesmo245330 = new VF.Stave(539, 473, 160);
stavesmo245330.setAttribute('id', 'stavesmo245330');
stavesmo245330.setBegBarType(VF.Barline.type.NONE);
stavesmo245330.setContext(context);
stavesmo245330.draw();
smo245330v0.draw(context, stavesmo245330);
const fmtsmo24243929 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo242439v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242439v0ar = [];
const smo242418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242418.setAttribute('id', 'smo242418');
const smo242419 = new VF.Annotation('си');
smo242419.setAttribute('id', 'smo242419');
smo242419.setFont('Merriweather', 12.1, 'normal');
smo242419.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242418.addModifier(smo242419);
smo242419.addClass('lyric lyric-0 lyric-hyphen');
smo242439v0ar.push(smo242418);
const smo242420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo242420.setAttribute('id', 'smo242420');
const smo242421 = new VF.Annotation('стый');
smo242421.setAttribute('id', 'smo242421');
smo242421.setFont('Merriweather', 12.1, 'normal');
smo242421.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242420.addModifier(smo242421);
smo242421.addClass('lyric lyric-0');
smo242439v0ar.push(smo242420);
const smo242422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo242422.setAttribute('id', 'smo242422');
const smo242423 = new VF.Annotation('-');
smo242423.setAttribute('id', 'smo242423');
smo242423.setFont('Merriweather', 12.1, 'normal');
smo242423.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242422.addModifier(smo242423);
smo242423.addClass('lyric lyric-0 lyric-hyphen');
smo242439v0ar.push(smo242422);
smo242439v0.addTickables(smo242439v0ar)
fmtsmo24243929.joinVoices([smo242439v0]);
const fmtsmo24342129 = new VF.Formatter();
//
// voices and notes for stave 1 29
const smo243421v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243421v0ar = [];
const smo243402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243402.setAttribute('id', 'smo243402');
smo243421v0ar.push(smo243402);
const smo243403 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243403.setAttribute('id', 'smo243403');
smo243421v0ar.push(smo243403);
const smo243404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243404.setAttribute('id', 'smo243404');
smo243421v0ar.push(smo243404);
const smo243405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243405.setAttribute('id', 'smo243405');
smo243421v0ar.push(smo243405);
smo243421v0.addTickables(smo243421v0ar)
fmtsmo24342129.joinVoices([smo243421v0]);
const fmtsmo24439329 = new VF.Formatter();
//
// voices and notes for stave 2 29
const smo244393v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244393v0ar = [];
const smo244376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244376.setAttribute('id', 'smo244376');
smo244393v0ar.push(smo244376);
const smo244377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo244377.setAttribute('id', 'smo244377');
smo244393v0ar.push(smo244377);
smo244393v0.addTickables(smo244393v0ar)
fmtsmo24439329.joinVoices([smo244393v0]);
const fmtsmo24534829 = new VF.Formatter();
//
// voices and notes for stave 3 29
const smo245348v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245348v0ar = [];
const smo245331 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo245331.setAttribute('id', 'smo245331');
smo245348v0ar.push(smo245331);
const smo245332 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo245332.setAttribute('id', 'smo245332');
smo245348v0ar.push(smo245332);
smo245348v0.addTickables(smo245348v0ar)
fmtsmo24534829.joinVoices([smo245348v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24243929.format([smo242439v0,smo243421v0,smo244393v0,smo245348v0], 174);
const stavesmo242439 = new VF.Stave(699, 219, 188);
stavesmo242439.setAttribute('id', 'stavesmo242439');
stavesmo242439.setBegBarType(VF.Barline.type.NONE);
stavesmo242439.setContext(context);
stavesmo242439.draw();
smo242439v0.draw(context, stavesmo242439);
const stavesmo243421 = new VF.Stave(699, 311, 188);
stavesmo243421.setAttribute('id', 'stavesmo243421');
stavesmo243421.setBegBarType(VF.Barline.type.NONE);
stavesmo243421.setContext(context);
stavesmo243421.draw();
smo243421v0.draw(context, stavesmo243421);
const stavesmo244393 = new VF.Stave(699, 389, 188);
stavesmo244393.setAttribute('id', 'stavesmo244393');
stavesmo244393.setBegBarType(VF.Barline.type.NONE);
stavesmo244393.setContext(context);
stavesmo244393.draw();
smo244393v0.draw(context, stavesmo244393);
const stavesmo245348 = new VF.Stave(699, 473, 188);
stavesmo245348.setAttribute('id', 'stavesmo245348');
stavesmo245348.setBegBarType(VF.Barline.type.NONE);
stavesmo245348.setContext(context);
stavesmo245348.draw();
smo245348v0.draw(context, stavesmo245348);
const fmtsmo24246830 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo242468v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242468v0ar = [];
const smo242440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242440.setAttribute('id', 'smo242440');
const smo242441 = new VF.Annotation('со');
smo242441.setAttribute('id', 'smo242441');
smo242441.setFont('Merriweather', 12.1, 'normal');
smo242441.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242440.addModifier(smo242441);
smo242441.addClass('lyric lyric-0');
smo242468v0ar.push(smo242440);
const smo242442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["bb/4/n"]}'))
smo242442.setAttribute('id', 'smo242442');
const smo242443 = new VF.Annotation('-');
smo242443.setAttribute('id', 'smo242443');
smo242443.setFont('Merriweather', 12.1, 'normal');
smo242443.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242442.addModifier(smo242443);
smo242443.addClass('lyric lyric-0 lyric-hyphen');
smo242468v0ar.push(smo242442);
const smo242444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["an/4/n"]}'))
smo242444.setAttribute('id', 'smo242444');
const smo242445 = new VF.Annotation('-');
smo242445.setAttribute('id', 'smo242445');
smo242445.setFont('Merriweather', 12.1, 'normal');
smo242445.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242444.addModifier(smo242445);
smo242445.addClass('lyric lyric-0 lyric-hyphen');
smo242468v0ar.push(smo242444);
const smo242446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","stemDirection":1,"autoStem":false,"keys":["g#/4/n"]}'))
smo242446.setAttribute('id', 'smo242446');
const smo2424460acc = new VF.Accidental('#');
smo242446.addModifier(smo2424460acc, 0);
const smo242447 = new VF.Annotation('-');
smo242447.setAttribute('id', 'smo242447');
smo242447.setFont('Merriweather', 12.1, 'normal');
smo242447.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242446.addModifier(smo242447);
smo242447.addClass('lyric lyric-0 lyric-hyphen');
smo242468v0ar.push(smo242446);
const smo242448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242448.setAttribute('id', 'smo242448');
const smo242449 = new VF.Annotation('ло');
smo242449.setAttribute('id', 'smo242449');
smo242449.setFont('Merriweather', 12.1, 'normal');
smo242449.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242448.addModifier(smo242449);
smo242449.addClass('lyric lyric-0');
smo242468v0ar.push(smo242448);
const smo242450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242450.setAttribute('id', 'smo242450');
const smo242451 = new VF.Annotation('-');
smo242451.setAttribute('id', 'smo242451');
smo242451.setFont('Merriweather', 12.1, 'normal');
smo242451.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242450.addModifier(smo242451);
smo242451.addClass('lyric lyric-0 lyric-hyphen');
smo242468v0ar.push(smo242450);
smo242468v0.addTickables(smo242468v0ar)
fmtsmo24246830.joinVoices([smo242468v0]);
const fmtsmo24344130 = new VF.Formatter();
//
// voices and notes for stave 1 30
const smo243441v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243441v0ar = [];
const smo243422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243422.setAttribute('id', 'smo243422');
smo243441v0ar.push(smo243422);
const smo243423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo243423.setAttribute('id', 'smo243423');
smo243441v0ar.push(smo243423);
const smo243424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243424.setAttribute('id', 'smo243424');
smo243441v0ar.push(smo243424);
const smo243425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo243425.setAttribute('id', 'smo243425');
smo243441v0ar.push(smo243425);
smo243441v0.addTickables(smo243441v0ar)
fmtsmo24344130.joinVoices([smo243441v0]);
const fmtsmo24441130 = new VF.Formatter();
//
// voices and notes for stave 2 30
const smo244411v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244411v0ar = [];
const smo244394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo244394.setAttribute('id', 'smo244394');
smo244411v0ar.push(smo244394);
const smo244395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo244395.setAttribute('id', 'smo244395');
smo244411v0ar.push(smo244395);
smo244411v0.addTickables(smo244411v0ar)
fmtsmo24441130.joinVoices([smo244411v0]);
const fmtsmo24536630 = new VF.Formatter();
//
// voices and notes for stave 3 30
const smo245366v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245366v0ar = [];
const smo245349 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245349.setAttribute('id', 'smo245349');
smo245366v0ar.push(smo245349);
const smo245350 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245350.setAttribute('id', 'smo245350');
smo245366v0ar.push(smo245350);
smo245366v0.addTickables(smo245366v0ar)
fmtsmo24536630.joinVoices([smo245366v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252282 = smo242442.getStemDirection();
smo242442.setStemDirection(dirsmo252282);
smo242444.setStemDirection(dirsmo252282);
smo242446.setStemDirection(dirsmo252282);
const smo252282 = new VF.Beam([smo242442,smo242444,smo242446]);
const smo242452 = new VF.Tuplet([smo242442,smo242444,smo242446], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo245740
fmtsmo24246830.format([smo242468v0,smo243441v0,smo244411v0,smo245366v0], 217);
const stavesmo242468 = new VF.Stave(887, 219, 231);
stavesmo242468.setAttribute('id', 'stavesmo242468');
stavesmo242468.setBegBarType(VF.Barline.type.NONE);
stavesmo242468.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":96}'), -1 * 0);
stavesmo242468.setContext(context);
stavesmo242468.draw();
smo242468v0.draw(context, stavesmo242468);
smo252282.setContext(context);
smo252282.draw();
smo242452.setContext(context).draw();
const stavesmo243441 = new VF.Stave(887, 311, 231);
stavesmo243441.setAttribute('id', 'stavesmo243441');
stavesmo243441.setBegBarType(VF.Barline.type.NONE);
stavesmo243441.setContext(context);
stavesmo243441.draw();
smo243441v0.draw(context, stavesmo243441);
const stavesmo244411 = new VF.Stave(887, 389, 231);
stavesmo244411.setAttribute('id', 'stavesmo244411');
stavesmo244411.setBegBarType(VF.Barline.type.NONE);
stavesmo244411.setContext(context);
stavesmo244411.draw();
smo244411v0.draw(context, stavesmo244411);
const stavesmo245366 = new VF.Stave(887, 473, 231);
stavesmo245366.setAttribute('id', 'stavesmo245366');
stavesmo245366.setBegBarType(VF.Barline.type.NONE);
stavesmo245366.setContext(context);
stavesmo245366.draw();
smo245366v0.draw(context, stavesmo245366);
const fmtsmo24248731 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo242487v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242487v0ar = [];
const smo242469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242469.setAttribute('id', 'smo242469');
const smo242470 = new VF.Annotation('вей');
smo242470.setAttribute('id', 'smo242470');
smo242470.setFont('Merriweather', 12.1, 'normal');
smo242470.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242469.addModifier(smo242470);
smo242470.addClass('lyric lyric-0');
smo242487v0ar.push(smo242469);
const smo242471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242471.setAttribute('id', 'smo242471');
smo242487v0ar.push(smo242471);
smo242487v0.addTickables(smo242487v0ar)
fmtsmo24248731.joinVoices([smo242487v0]);
const fmtsmo24346231 = new VF.Formatter();
//
// voices and notes for stave 1 31
const smo243462v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243462v0ar = [];
const smo243442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243442.setAttribute('id', 'smo243442');
smo243462v0ar.push(smo243442);
const smo243443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo243443.setAttribute('id', 'smo243443');
smo243462v0ar.push(smo243443);
const smo243444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo243444.setAttribute('id', 'smo243444');
smo243462v0ar.push(smo243444);
const smo243445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243445.setAttribute('id', 'smo243445');
smo243462v0ar.push(smo243445);
const smo243446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo243446.setAttribute('id', 'smo243446');
smo243462v0ar.push(smo243446);
smo243462v0.addTickables(smo243462v0ar)
fmtsmo24346231.joinVoices([smo243462v0]);
const fmtsmo24442931 = new VF.Formatter();
//
// voices and notes for stave 2 31
const smo244429v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244429v0ar = [];
const smo244412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo244412.setAttribute('id', 'smo244412');
smo244429v0ar.push(smo244412);
const smo244413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244413.setAttribute('id', 'smo244413');
smo244429v0ar.push(smo244413);
smo244429v0.addTickables(smo244429v0ar)
fmtsmo24442931.joinVoices([smo244429v0]);
const fmtsmo24538831 = new VF.Formatter();
//
// voices and notes for stave 3 31
const smo245388v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245388v0ar = [];
const smo245367 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245367.setAttribute('id', 'smo245367');
smo245388v0ar.push(smo245367);
const smo245368 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo245368.setAttribute('id', 'smo245368');
smo245388v0ar.push(smo245368);
const smo245369 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo245369.setAttribute('id', 'smo245369');
smo245388v0ar.push(smo245369);
const smo245370 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245370.setAttribute('id', 'smo245370');
smo245388v0ar.push(smo245370);
const smo245371 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245371.setAttribute('id', 'smo245371');
smo245388v0ar.push(smo245371);
const smo245372 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245372.setAttribute('id', 'smo245372');
smo245388v0ar.push(smo245372);
smo245388v0.addTickables(smo245388v0ar)
fmtsmo24538831.joinVoices([smo245388v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252293 = smo243443.getStemDirection();
smo243443.setStemDirection(dirsmo252293);
smo243444.setStemDirection(dirsmo252293);
const smo252293 = new VF.Beam([smo243443,smo243444]);
const dirsmo252294 = smo243445.getStemDirection();
smo243445.setStemDirection(dirsmo252294);
smo243446.setStemDirection(dirsmo252294);
const smo252294 = new VF.Beam([smo243445,smo243446]);
const dirsmo252299 = smo245367.getStemDirection();
smo245367.setStemDirection(dirsmo252299);
smo245368.setStemDirection(dirsmo252299);
const smo252299 = new VF.Beam([smo245367,smo245368]);
const dirsmo252300 = smo245369.getStemDirection();
smo245369.setStemDirection(dirsmo252300);
smo245370.setStemDirection(dirsmo252300);
const smo252300 = new VF.Beam([smo245369,smo245370]);
 
// formatting measures in staff group smo245740
fmtsmo24248731.format([smo242487v0,smo243462v0,smo244429v0,smo245388v0], 245);
const stavesmo242487 = new VF.Stave(1118, 219, 259);
stavesmo242487.setAttribute('id', 'stavesmo242487');
stavesmo242487.setBegBarType(VF.Barline.type.NONE);
stavesmo242487.setContext(context);
stavesmo242487.draw();
smo242487v0.draw(context, stavesmo242487);
const stavesmo243462 = new VF.Stave(1118, 311, 259);
stavesmo243462.setAttribute('id', 'stavesmo243462');
stavesmo243462.setBegBarType(VF.Barline.type.NONE);
stavesmo243462.setContext(context);
stavesmo243462.draw();
smo243462v0.draw(context, stavesmo243462);
smo252293.setContext(context);
smo252293.draw();
smo252294.setContext(context);
smo252294.draw();
const stavesmo244429 = new VF.Stave(1118, 389, 259);
stavesmo244429.setAttribute('id', 'stavesmo244429');
stavesmo244429.setBegBarType(VF.Barline.type.NONE);
stavesmo244429.setContext(context);
stavesmo244429.draw();
smo244429v0.draw(context, stavesmo244429);
const stavesmo245388 = new VF.Stave(1118, 473, 259);
stavesmo245388.setAttribute('id', 'stavesmo245388');
stavesmo245388.setBegBarType(VF.Barline.type.NONE);
stavesmo245388.setContext(context);
stavesmo245388.draw();
smo245388v0.draw(context, stavesmo245388);
smo252299.setContext(context);
smo252299.draw();
smo252300.setContext(context);
smo252300.draw();
const rightsmo245740stavesmo2424873 = new VF.StaveConnector(stavesmo242487, stavesmo245388).setType(0);
rightsmo245740stavesmo2424873.setContext(context).draw();
const fmtsmo24251432 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo242514v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242514v0ar = [];
const smo242488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242488.setAttribute('id', 'smo242488');
const smo242490 = new VF.Ornament('');
smo242488.addModifier(smo242490, 0);
const smo242489 = new VF.Annotation('Со');
smo242489.setAttribute('id', 'smo242489');
smo242489.setFont('Merriweather', 12.1, 'normal');
smo242489.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242488.addModifier(smo242489);
smo242489.addClass('lyric lyric-0');
smo242514v0ar.push(smo242488);
const smo242491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242491.setAttribute('id', 'smo242491');
const smo242492 = new VF.Annotation('-');
smo242492.setAttribute('id', 'smo242492');
smo242492.setFont('Merriweather', 12.1, 'normal');
smo242492.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242491.addModifier(smo242492);
smo242492.addClass('lyric lyric-0 lyric-hyphen');
smo242514v0ar.push(smo242491);
const smo242493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242493.setAttribute('id', 'smo242493');
const smo242494 = new VF.Annotation('-');
smo242494.setAttribute('id', 'smo242494');
smo242494.setFont('Merriweather', 12.1, 'normal');
smo242494.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242493.addModifier(smo242494);
smo242494.addClass('lyric lyric-0 lyric-hyphen');
smo242514v0ar.push(smo242493);
const smo242495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242495.setAttribute('id', 'smo242495');
const smo242496 = new VF.Annotation('ло');
smo242496.setAttribute('id', 'smo242496');
smo242496.setFont('Merriweather', 12.1, 'normal');
smo242496.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242495.addModifier(smo242496);
smo242496.addClass('lyric lyric-0');
smo242514v0ar.push(smo242495);
const smo242497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242497.setAttribute('id', 'smo242497');
const smo242498 = new VF.Annotation('-');
smo242498.setAttribute('id', 'smo242498');
smo242498.setFont('Merriweather', 12.1, 'normal');
smo242498.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242497.addModifier(smo242498);
smo242498.addClass('lyric lyric-0 lyric-hyphen');
smo242514v0ar.push(smo242497);
smo242514v0.addTickables(smo242514v0ar)
fmtsmo24251432.joinVoices([smo242514v0]);
const fmtsmo24348432 = new VF.Formatter();
//
// voices and notes for stave 1 32
const smo243484v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243484v0ar = [];
const smo243463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243463.setAttribute('id', 'smo243463');
smo243484v0ar.push(smo243463);
const smo243464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243464.setAttribute('id', 'smo243464');
const  smo253127 = new VF.Articulation('ao').setPosition(3);
smo243464.addModifier(smo253127, 0);
smo243484v0ar.push(smo243464);
const smo243466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243466.setAttribute('id', 'smo243466');
smo243484v0ar.push(smo243466);
const smo243467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243467.setAttribute('id', 'smo243467');
const  smo253128 = new VF.Articulation('ao').setPosition(3);
smo243467.addModifier(smo253128, 0);
smo243484v0ar.push(smo243467);
smo243484v0.addTickables(smo243484v0ar)
fmtsmo24348432.joinVoices([smo243484v0]);
const fmtsmo24444632 = new VF.Formatter();
//
// voices and notes for stave 2 32
const smo244446v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244446v0ar = [];
const smo244430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244430.setAttribute('id', 'smo244430');
smo244446v0ar.push(smo244430);
smo244446v0.addTickables(smo244446v0ar)
fmtsmo24444632.joinVoices([smo244446v0]);
const fmtsmo24541032 = new VF.Formatter();
//
// voices and notes for stave 3 32
const smo245410v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245410v0ar = [];
const smo245389 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245389.setAttribute('id', 'smo245389');
const  smo253129 = new VF.Articulation('ao').setPosition(3);
smo245389.addModifier(smo253129, 0);
smo245410v0ar.push(smo245389);
const smo245391 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245391.setAttribute('id', 'smo245391');
smo245410v0ar.push(smo245391);
const smo245392 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245392.setAttribute('id', 'smo245392');
const  smo253130 = new VF.Articulation('ao').setPosition(3);
smo245392.addModifier(smo253130, 0);
smo245410v0ar.push(smo245392);
const smo245394 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245394.setAttribute('id', 'smo245394');
smo245410v0ar.push(smo245394);
smo245410v0.addTickables(smo245410v0ar)
fmtsmo24541032.joinVoices([smo245410v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252313 = smo242491.getStemDirection();
smo242491.setStemDirection(dirsmo252313);
smo242493.setStemDirection(dirsmo252313);
const smo252313 = new VF.Beam([smo242491,smo242493]);
 
// formatting measures in staff group smo245740
fmtsmo24251432.format([smo242514v0,smo243484v0,smo244446v0,smo245410v0], 173);
const stavesmo242514 = new VF.Stave(55, 627, 248);
stavesmo242514.setAttribute('id', 'stavesmo242514');
stavesmo242514.setBegBarType(1);
stavesmo242514.addClef('treble');
const keysmo242514 = new VF.KeySignature('F');
keysmo242514.addToStave(stavesmo242514);
stavesmo242514.setContext(context);
stavesmo242514.draw();
smo242514v0.draw(context, stavesmo242514);
smo252313.setContext(context);
smo252313.draw();
const stavesmo243484 = new VF.Stave(55, 730, 248);
stavesmo243484.setAttribute('id', 'stavesmo243484');
stavesmo243484.setBegBarType(1);
stavesmo243484.addClef('treble');
const keysmo243484 = new VF.KeySignature('F');
keysmo243484.addToStave(stavesmo243484);
stavesmo243484.setContext(context);
stavesmo243484.draw();
smo243484v0.draw(context, stavesmo243484);
const stavesmo244446 = new VF.Stave(55, 813, 248);
stavesmo244446.setAttribute('id', 'stavesmo244446');
stavesmo244446.setBegBarType(1);
stavesmo244446.addClef('treble');
const keysmo244446 = new VF.KeySignature('F');
keysmo244446.addToStave(stavesmo244446);
stavesmo244446.setContext(context);
stavesmo244446.draw();
smo244446v0.draw(context, stavesmo244446);
const stavesmo245410 = new VF.Stave(55, 922, 248);
stavesmo245410.setAttribute('id', 'stavesmo245410');
stavesmo245410.setBegBarType(1);
stavesmo245410.addClef('bass');
const keysmo245410 = new VF.KeySignature('F');
keysmo245410.addToStave(stavesmo245410);
stavesmo245410.setContext(context);
stavesmo245410.draw();
smo245410v0.draw(context, stavesmo245410);
const leftsmo245740stavesmo2425143 = new VF.StaveConnector(stavesmo242514, stavesmo245410).setType(1);
leftsmo245740stavesmo2425143.setContext(context).draw();
const fmtsmo24253733 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo242537v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242537v0ar = [];
const smo242515 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242515.setAttribute('id', 'smo242515');
const smo242516 = new VF.Annotation('вей');
smo242516.setAttribute('id', 'smo242516');
smo242516.setFont('Merriweather', 12.1, 'normal');
smo242516.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242515.addModifier(smo242516);
smo242516.addClass('lyric lyric-0');
smo242537v0ar.push(smo242515);
const smo242517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo242517.setAttribute('id', 'smo242517');
const smo242518 = new VF.Annotation('-');
smo242518.setAttribute('id', 'smo242518');
smo242518.setFont('Merriweather', 12.1, 'normal');
smo242518.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242517.addModifier(smo242518);
smo242518.addClass('lyric lyric-0 lyric-hyphen');
smo242537v0ar.push(smo242517);
const smo242519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo242519.setAttribute('id', 'smo242519');
const smo242520 = new VF.Annotation('-');
smo242520.setAttribute('id', 'smo242520');
smo242520.setFont('Merriweather', 12.1, 'normal');
smo242520.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242519.addModifier(smo242520);
smo242520.addClass('lyric lyric-0 lyric-hyphen');
smo242537v0ar.push(smo242519);
const smo242521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242521.setAttribute('id', 'smo242521');
smo242537v0ar.push(smo242521);
smo242537v0.addTickables(smo242537v0ar)
fmtsmo24253733.joinVoices([smo242537v0]);
const fmtsmo24350433 = new VF.Formatter();
//
// voices and notes for stave 1 33
const smo243504v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243504v0ar = [];
const smo243485 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243485.setAttribute('id', 'smo243485');
smo243504v0ar.push(smo243485);
const smo243486 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243486.setAttribute('id', 'smo243486');
smo243504v0ar.push(smo243486);
const smo243487 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243487.setAttribute('id', 'smo243487');
smo243504v0ar.push(smo243487);
const smo243488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243488.setAttribute('id', 'smo243488');
smo243504v0ar.push(smo243488);
smo243504v0.addTickables(smo243504v0ar)
fmtsmo24350433.joinVoices([smo243504v0]);
const fmtsmo24446333 = new VF.Formatter();
//
// voices and notes for stave 2 33
const smo244463v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244463v0ar = [];
const smo244447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244447.setAttribute('id', 'smo244447');
smo244463v0ar.push(smo244447);
smo244463v0.addTickables(smo244463v0ar)
fmtsmo24446333.joinVoices([smo244463v0]);
const fmtsmo24543033 = new VF.Formatter();
//
// voices and notes for stave 3 33
const smo245430v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245430v0ar = [];
const smo245411 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245411.setAttribute('id', 'smo245411');
smo245430v0ar.push(smo245411);
const smo245412 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245412.setAttribute('id', 'smo245412');
smo245430v0ar.push(smo245412);
const smo245413 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245413.setAttribute('id', 'smo245413');
smo245430v0ar.push(smo245413);
const smo245414 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245414.setAttribute('id', 'smo245414');
smo245430v0ar.push(smo245414);
smo245430v0.addTickables(smo245430v0ar)
fmtsmo24543033.joinVoices([smo245430v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24253733.format([smo242537v0,smo243504v0,smo244463v0,smo245430v0], 144);
const stavesmo242537 = new VF.Stave(303, 627, 158);
stavesmo242537.setAttribute('id', 'stavesmo242537');
stavesmo242537.setBegBarType(VF.Barline.type.NONE);
stavesmo242537.setContext(context);
stavesmo242537.draw();
smo242537v0.draw(context, stavesmo242537);
const stavesmo243504 = new VF.Stave(303, 730, 158);
stavesmo243504.setAttribute('id', 'stavesmo243504');
stavesmo243504.setBegBarType(VF.Barline.type.NONE);
stavesmo243504.setContext(context);
stavesmo243504.draw();
smo243504v0.draw(context, stavesmo243504);
const stavesmo244463 = new VF.Stave(303, 813, 158);
stavesmo244463.setAttribute('id', 'stavesmo244463');
stavesmo244463.setBegBarType(VF.Barline.type.NONE);
stavesmo244463.setContext(context);
stavesmo244463.draw();
smo244463v0.draw(context, stavesmo244463);
const stavesmo245430 = new VF.Stave(303, 922, 158);
stavesmo245430.setAttribute('id', 'stavesmo245430');
stavesmo245430.setBegBarType(VF.Barline.type.NONE);
stavesmo245430.setContext(context);
stavesmo245430.draw();
smo245430v0.draw(context, stavesmo245430);
const fmtsmo24256434 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo242564v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242564v0ar = [];
const smo242538 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242538.setAttribute('id', 'smo242538');
const smo242540 = new VF.Ornament('');
smo242538.addModifier(smo242540, 0);
const smo242539 = new VF.Annotation('Со');
smo242539.setAttribute('id', 'smo242539');
smo242539.setFont('Merriweather', 12.1, 'normal');
smo242539.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242538.addModifier(smo242539);
smo242539.addClass('lyric lyric-0');
smo242564v0ar.push(smo242538);
const smo242541 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242541.setAttribute('id', 'smo242541');
const smo242542 = new VF.Annotation('-');
smo242542.setAttribute('id', 'smo242542');
smo242542.setFont('Merriweather', 12.1, 'normal');
smo242542.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242541.addModifier(smo242542);
smo242542.addClass('lyric lyric-0 lyric-hyphen');
smo242564v0ar.push(smo242541);
const smo242543 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242543.setAttribute('id', 'smo242543');
const smo242544 = new VF.Annotation('-');
smo242544.setAttribute('id', 'smo242544');
smo242544.setFont('Merriweather', 12.1, 'normal');
smo242544.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242543.addModifier(smo242544);
smo242544.addClass('lyric lyric-0 lyric-hyphen');
smo242564v0ar.push(smo242543);
const smo242545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242545.setAttribute('id', 'smo242545');
const smo242546 = new VF.Annotation('ло');
smo242546.setAttribute('id', 'smo242546');
smo242546.setFont('Merriweather', 12.1, 'normal');
smo242546.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242545.addModifier(smo242546);
smo242546.addClass('lyric lyric-0');
smo242564v0ar.push(smo242545);
const smo242547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242547.setAttribute('id', 'smo242547');
const smo242548 = new VF.Annotation('-');
smo242548.setAttribute('id', 'smo242548');
smo242548.setFont('Merriweather', 12.1, 'normal');
smo242548.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242547.addModifier(smo242548);
smo242548.addClass('lyric lyric-0 lyric-hyphen');
smo242564v0ar.push(smo242547);
smo242564v0.addTickables(smo242564v0ar)
fmtsmo24256434.joinVoices([smo242564v0]);
const fmtsmo24352434 = new VF.Formatter();
//
// voices and notes for stave 1 34
const smo243524v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243524v0ar = [];
const smo243505 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243505.setAttribute('id', 'smo243505');
smo243524v0ar.push(smo243505);
const smo243506 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243506.setAttribute('id', 'smo243506');
smo243524v0ar.push(smo243506);
const smo243507 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243507.setAttribute('id', 'smo243507');
smo243524v0ar.push(smo243507);
const smo243508 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243508.setAttribute('id', 'smo243508');
smo243524v0ar.push(smo243508);
smo243524v0.addTickables(smo243524v0ar)
fmtsmo24352434.joinVoices([smo243524v0]);
const fmtsmo24448034 = new VF.Formatter();
//
// voices and notes for stave 2 34
const smo244480v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244480v0ar = [];
const smo244464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244464.setAttribute('id', 'smo244464');
smo244480v0ar.push(smo244464);
smo244480v0.addTickables(smo244480v0ar)
fmtsmo24448034.joinVoices([smo244480v0]);
const fmtsmo24545034 = new VF.Formatter();
//
// voices and notes for stave 3 34
const smo245450v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245450v0ar = [];
const smo245431 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo245431.setAttribute('id', 'smo245431');
smo245450v0ar.push(smo245431);
const smo245432 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245432.setAttribute('id', 'smo245432');
smo245450v0ar.push(smo245432);
const smo245433 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245433.setAttribute('id', 'smo245433');
smo245450v0ar.push(smo245433);
const smo245434 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245434.setAttribute('id', 'smo245434');
smo245450v0ar.push(smo245434);
smo245450v0.addTickables(smo245450v0ar)
fmtsmo24545034.joinVoices([smo245450v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252330 = smo242541.getStemDirection();
smo242541.setStemDirection(dirsmo252330);
smo242543.setStemDirection(dirsmo252330);
const smo252330 = new VF.Beam([smo242541,smo242543]);
 
// formatting measures in staff group smo245740
fmtsmo24256434.format([smo242564v0,smo243524v0,smo244480v0,smo245450v0], 172);
const stavesmo242564 = new VF.Stave(461, 627, 186);
stavesmo242564.setAttribute('id', 'stavesmo242564');
stavesmo242564.setBegBarType(VF.Barline.type.NONE);
stavesmo242564.setContext(context);
stavesmo242564.draw();
smo242564v0.draw(context, stavesmo242564);
smo252330.setContext(context);
smo252330.draw();
const stavesmo243524 = new VF.Stave(461, 730, 186);
stavesmo243524.setAttribute('id', 'stavesmo243524');
stavesmo243524.setBegBarType(VF.Barline.type.NONE);
stavesmo243524.setContext(context);
stavesmo243524.draw();
smo243524v0.draw(context, stavesmo243524);
const stavesmo244480 = new VF.Stave(461, 813, 186);
stavesmo244480.setAttribute('id', 'stavesmo244480');
stavesmo244480.setBegBarType(VF.Barline.type.NONE);
stavesmo244480.setContext(context);
stavesmo244480.draw();
smo244480v0.draw(context, stavesmo244480);
const stavesmo245450 = new VF.Stave(461, 922, 186);
stavesmo245450.setAttribute('id', 'stavesmo245450');
stavesmo245450.setBegBarType(VF.Barline.type.NONE);
stavesmo245450.setContext(context);
stavesmo245450.draw();
smo245450v0.draw(context, stavesmo245450);
const fmtsmo24258635 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo242586v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242586v0ar = [];
const smo242565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242565.setAttribute('id', 'smo242565');
const smo242566 = new VF.Annotation('вей');
smo242566.setAttribute('id', 'smo242566');
smo242566.setFont('Merriweather', 12.1, 'normal');
smo242566.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242565.addModifier(smo242566);
smo242566.addClass('lyric lyric-0');
smo242586v0ar.push(smo242565);
const smo242567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo242567.setAttribute('id', 'smo242567');
const smo242568 = new VF.Annotation('-');
smo242568.setAttribute('id', 'smo242568');
smo242568.setFont('Merriweather', 12.1, 'normal');
smo242568.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242567.addModifier(smo242568);
smo242568.addClass('lyric lyric-0 lyric-hyphen');
smo242586v0ar.push(smo242567);
const smo242569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo242569.setAttribute('id', 'smo242569');
const smo242570 = new VF.Annotation('-');
smo242570.setAttribute('id', 'smo242570');
smo242570.setFont('Merriweather', 12.1, 'normal');
smo242570.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242569.addModifier(smo242570);
smo242570.addClass('lyric lyric-0 lyric-hyphen');
smo242586v0ar.push(smo242569);
smo242586v0.addTickables(smo242586v0ar)
fmtsmo24258635.joinVoices([smo242586v0]);
const fmtsmo24354435 = new VF.Formatter();
//
// voices and notes for stave 1 35
const smo243544v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243544v0ar = [];
const smo243525 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243525.setAttribute('id', 'smo243525');
smo243544v0ar.push(smo243525);
const smo243526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243526.setAttribute('id', 'smo243526');
smo243544v0ar.push(smo243526);
const smo243527 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243527.setAttribute('id', 'smo243527');
smo243544v0ar.push(smo243527);
const smo243528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243528.setAttribute('id', 'smo243528');
smo243544v0ar.push(smo243528);
smo243544v0.addTickables(smo243544v0ar)
fmtsmo24354435.joinVoices([smo243544v0]);
const fmtsmo24449735 = new VF.Formatter();
//
// voices and notes for stave 2 35
const smo244497v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244497v0ar = [];
const smo244481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244481.setAttribute('id', 'smo244481');
smo244497v0ar.push(smo244481);
smo244497v0.addTickables(smo244497v0ar)
fmtsmo24449735.joinVoices([smo244497v0]);
const fmtsmo24547035 = new VF.Formatter();
//
// voices and notes for stave 3 35
const smo245470v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245470v0ar = [];
const smo245451 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245451.setAttribute('id', 'smo245451');
smo245470v0ar.push(smo245451);
const smo245452 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245452.setAttribute('id', 'smo245452');
smo245470v0ar.push(smo245452);
const smo245453 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245453.setAttribute('id', 'smo245453');
smo245470v0ar.push(smo245453);
const smo245454 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245454.setAttribute('id', 'smo245454');
smo245470v0ar.push(smo245454);
smo245470v0.addTickables(smo245470v0ar)
fmtsmo24547035.joinVoices([smo245470v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24258635.format([smo242586v0,smo243544v0,smo244497v0,smo245470v0], 136);
const stavesmo242586 = new VF.Stave(647, 627, 150);
stavesmo242586.setAttribute('id', 'stavesmo242586');
stavesmo242586.setBegBarType(VF.Barline.type.NONE);
stavesmo242586.setContext(context);
stavesmo242586.draw();
smo242586v0.draw(context, stavesmo242586);
const stavesmo243544 = new VF.Stave(647, 730, 150);
stavesmo243544.setAttribute('id', 'stavesmo243544');
stavesmo243544.setBegBarType(VF.Barline.type.NONE);
stavesmo243544.setContext(context);
stavesmo243544.draw();
smo243544v0.draw(context, stavesmo243544);
const stavesmo244497 = new VF.Stave(647, 813, 150);
stavesmo244497.setAttribute('id', 'stavesmo244497');
stavesmo244497.setBegBarType(VF.Barline.type.NONE);
stavesmo244497.setContext(context);
stavesmo244497.draw();
smo244497v0.draw(context, stavesmo244497);
const stavesmo245470 = new VF.Stave(647, 922, 150);
stavesmo245470.setAttribute('id', 'stavesmo245470');
stavesmo245470.setBegBarType(VF.Barline.type.NONE);
stavesmo245470.setContext(context);
stavesmo245470.draw();
smo245470v0.draw(context, stavesmo245470);
const fmtsmo24261236 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo242612v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242612v0ar = [];
const smo242587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242587.setAttribute('id', 'smo242587');
const smo242588 = new VF.Annotation('го');
smo242588.setAttribute('id', 'smo242588');
smo242588.setFont('Merriweather', 12.1, 'normal');
smo242588.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242587.addModifier(smo242588);
smo242588.addClass('lyric lyric-0');
smo242612v0ar.push(smo242587);
const smo242589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242589.setAttribute('id', 'smo242589');
const smo242590 = new VF.Annotation('-');
smo242590.setAttribute('id', 'smo242590');
smo242590.setFont('Merriweather', 12.1, 'normal');
smo242590.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242589.addModifier(smo242590);
smo242590.addClass('lyric lyric-0 lyric-hyphen');
smo242612v0ar.push(smo242589);
const smo242591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242591.setAttribute('id', 'smo242591');
const smo242592 = new VF.Annotation('-');
smo242592.setAttribute('id', 'smo242592');
smo242592.setFont('Merriweather', 12.1, 'normal');
smo242592.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242591.addModifier(smo242592);
smo242592.addClass('lyric lyric-0 lyric-hyphen');
smo242612v0ar.push(smo242591);
const smo242593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/5/n"]}'))
smo242593.setAttribute('id', 'smo242593');
const smo2425930acc = new VF.Accidental('#');
smo242593.addModifier(smo2425930acc, 0);
const smo242594 = new VF.Annotation('-');
smo242594.setAttribute('id', 'smo242594');
smo242594.setFont('Merriweather', 12.1, 'normal');
smo242594.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242593.addModifier(smo242594);
smo242594.addClass('lyric lyric-0 lyric-hyphen');
smo242612v0ar.push(smo242593);
const smo242595 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242595.setAttribute('id', 'smo242595');
const smo242596 = new VF.Annotation('ло');
smo242596.setAttribute('id', 'smo242596');
smo242596.setFont('Merriweather', 12.1, 'normal');
smo242596.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242595.addModifier(smo242596);
smo242596.addClass('lyric lyric-0 lyric-hyphen');
smo242612v0ar.push(smo242595);
smo242612v0.addTickables(smo242612v0ar)
fmtsmo24261236.joinVoices([smo242612v0]);
const fmtsmo24356436 = new VF.Formatter();
//
// voices and notes for stave 1 36
const smo243564v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243564v0ar = [];
const smo243545 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243545.setAttribute('id', 'smo243545');
smo243564v0ar.push(smo243545);
const smo243546 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo243546.setAttribute('id', 'smo243546');
smo243564v0ar.push(smo243546);
const smo243547 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243547.setAttribute('id', 'smo243547');
smo243564v0ar.push(smo243547);
const smo243548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo243548.setAttribute('id', 'smo243548');
smo243564v0ar.push(smo243548);
smo243564v0.addTickables(smo243564v0ar)
fmtsmo24356436.joinVoices([smo243564v0]);
const fmtsmo24451536 = new VF.Formatter();
//
// voices and notes for stave 2 36
const smo244515v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244515v0ar = [];
const smo244498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo244498.setAttribute('id', 'smo244498');
smo244515v0ar.push(smo244498);
const smo244499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244499.setAttribute('id', 'smo244499');
smo244515v0ar.push(smo244499);
smo244515v0.addTickables(smo244515v0ar)
fmtsmo24451536.joinVoices([smo244515v0]);
const fmtsmo24549036 = new VF.Formatter();
//
// voices and notes for stave 3 36
const smo245490v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245490v0ar = [];
const smo245471 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/3/n"]}'))
smo245471.setAttribute('id', 'smo245471');
smo245490v0ar.push(smo245471);
const smo245472 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245472.setAttribute('id', 'smo245472');
smo245490v0ar.push(smo245472);
const smo245473 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245473.setAttribute('id', 'smo245473');
smo245490v0ar.push(smo245473);
const smo245474 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245474.setAttribute('id', 'smo245474');
smo245490v0ar.push(smo245474);
smo245490v0.addTickables(smo245490v0ar)
fmtsmo24549036.joinVoices([smo245490v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252347 = smo242589.getStemDirection();
smo242589.setStemDirection(dirsmo252347);
smo242591.setStemDirection(dirsmo252347);
const smo252347 = new VF.Beam([smo242589,smo242591]);
 
// formatting measures in staff group smo245740
fmtsmo24261236.format([smo242612v0,smo243564v0,smo244515v0,smo245490v0], 174);
const stavesmo242612 = new VF.Stave(797, 627, 188);
stavesmo242612.setAttribute('id', 'stavesmo242612');
stavesmo242612.setBegBarType(VF.Barline.type.NONE);
stavesmo242612.setContext(context);
stavesmo242612.draw();
smo242612v0.draw(context, stavesmo242612);
smo252347.setContext(context);
smo252347.draw();
const stavesmo243564 = new VF.Stave(797, 730, 188);
stavesmo243564.setAttribute('id', 'stavesmo243564');
stavesmo243564.setBegBarType(VF.Barline.type.NONE);
stavesmo243564.setContext(context);
stavesmo243564.draw();
smo243564v0.draw(context, stavesmo243564);
const stavesmo244515 = new VF.Stave(797, 813, 188);
stavesmo244515.setAttribute('id', 'stavesmo244515');
stavesmo244515.setBegBarType(VF.Barline.type.NONE);
stavesmo244515.setContext(context);
stavesmo244515.draw();
smo244515v0.draw(context, stavesmo244515);
const stavesmo245490 = new VF.Stave(797, 922, 188);
stavesmo245490.setAttribute('id', 'stavesmo245490');
stavesmo245490.setBegBarType(VF.Barline.type.NONE);
stavesmo245490.setContext(context);
stavesmo245490.draw();
smo245490v0.draw(context, stavesmo245490);
const fmtsmo24263437 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo242634v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242634v0ar = [];
const smo242613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242613.setAttribute('id', 'smo242613');
const smo242614 = new VF.Annotation('си');
smo242614.setAttribute('id', 'smo242614');
smo242614.setFont('Merriweather', 12.1, 'normal');
smo242614.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242613.addModifier(smo242614);
smo242614.addClass('lyric lyric-0 lyric-hyphen');
smo242634v0ar.push(smo242613);
const smo242615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242615.setAttribute('id', 'smo242615');
const smo242616 = new VF.Annotation('ст');
smo242616.setAttribute('id', 'smo242616');
smo242616.setFont('Merriweather', 12.1, 'normal');
smo242616.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242615.addModifier(smo242616);
smo242616.addClass('lyric lyric-0');
smo242634v0ar.push(smo242615);
const smo242617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242617.setAttribute('id', 'smo242617');
const smo242618 = new VF.Annotation('ый');
smo242618.setAttribute('id', 'smo242618');
smo242618.setFont('Merriweather', 12.1, 'normal');
smo242618.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242617.addModifier(smo242618);
smo242618.addClass('lyric lyric-0');
smo242634v0ar.push(smo242617);
smo242634v0.addTickables(smo242634v0ar)
fmtsmo24263437.joinVoices([smo242634v0]);
const fmtsmo24358237 = new VF.Formatter();
//
// voices and notes for stave 1 37
const smo243582v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243582v0ar = [];
const smo243565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo243565.setAttribute('id', 'smo243565');
smo243582v0ar.push(smo243565);
const smo243566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo243566.setAttribute('id', 'smo243566');
smo243582v0ar.push(smo243566);
smo243582v0.addTickables(smo243582v0ar)
fmtsmo24358237.joinVoices([smo243582v0]);
const fmtsmo24453337 = new VF.Formatter();
//
// voices and notes for stave 2 37
const smo244533v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244533v0ar = [];
const smo244516 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo244516.setAttribute('id', 'smo244516');
smo244533v0ar.push(smo244516);
const smo244517 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244517.setAttribute('id', 'smo244517');
smo244533v0ar.push(smo244517);
smo244533v0.addTickables(smo244533v0ar)
fmtsmo24453337.joinVoices([smo244533v0]);
const fmtsmo24550837 = new VF.Formatter();
//
// voices and notes for stave 3 37
const smo245508v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245508v0ar = [];
const smo245491 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo245491.setAttribute('id', 'smo245491');
smo245508v0ar.push(smo245491);
const smo245492 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo245492.setAttribute('id', 'smo245492');
smo245508v0ar.push(smo245492);
smo245508v0.addTickables(smo245508v0ar)
fmtsmo24550837.joinVoices([smo245508v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24263437.format([smo242634v0,smo243582v0,smo244533v0,smo245508v0], 143);
const stavesmo242634 = new VF.Stave(985, 627, 157);
stavesmo242634.setAttribute('id', 'stavesmo242634');
stavesmo242634.setBegBarType(VF.Barline.type.NONE);
stavesmo242634.setContext(context);
stavesmo242634.draw();
smo242634v0.draw(context, stavesmo242634);
const stavesmo243582 = new VF.Stave(985, 730, 157);
stavesmo243582.setAttribute('id', 'stavesmo243582');
stavesmo243582.setBegBarType(VF.Barline.type.NONE);
stavesmo243582.setContext(context);
stavesmo243582.draw();
smo243582v0.draw(context, stavesmo243582);
const stavesmo244533 = new VF.Stave(985, 813, 157);
stavesmo244533.setAttribute('id', 'stavesmo244533');
stavesmo244533.setBegBarType(VF.Barline.type.NONE);
stavesmo244533.setContext(context);
stavesmo244533.draw();
smo244533v0.draw(context, stavesmo244533);
const stavesmo245508 = new VF.Stave(985, 922, 157);
stavesmo245508.setAttribute('id', 'stavesmo245508');
stavesmo245508.setBegBarType(VF.Barline.type.NONE);
stavesmo245508.setContext(context);
stavesmo245508.draw();
smo245508v0.draw(context, stavesmo245508);
const fmtsmo24265738 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo242657v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242657v0ar = [];
const smo242635 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242635.setAttribute('id', 'smo242635');
smo242635.addModifier(new VF.Dot(), 0);
const  smo253179 = new VF.Articulation('a@a').setPosition(3);
smo242635.addModifier(smo253179, 0);
const smo242636 = new VF.Annotation('со');
smo242636.setAttribute('id', 'smo242636');
smo242636.setFont('Merriweather', 12.1, 'normal');
smo242636.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242635.addModifier(smo242636);
smo242636.addClass('lyric lyric-0');
smo242657v0ar.push(smo242635);
const smo242638 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo242638.setAttribute('id', 'smo242638');
const smo2426380acc = new VF.Accidental('#');
smo242638.addModifier(smo2426380acc, 0);
const smo242639 = new VF.Annotation('-');
smo242639.setAttribute('id', 'smo242639');
smo242639.setFont('Merriweather', 12.1, 'normal');
smo242639.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242638.addModifier(smo242639);
smo242639.addClass('lyric lyric-0 lyric-hyphen');
smo242657v0ar.push(smo242638);
const smo242640 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo242640.setAttribute('id', 'smo242640');
smo242657v0ar.push(smo242640);
smo242657v0.addTickables(smo242657v0ar)
fmtsmo24265738.joinVoices([smo242657v0]);
const fmtsmo24360038 = new VF.Formatter();
//
// voices and notes for stave 1 38
const smo243600v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243600v0ar = [];
const smo243583 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243583.setAttribute('id', 'smo243583');
smo243583.addModifier(new VF.Dot(), 0);
smo243600v0ar.push(smo243583);
const smo243584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243584.setAttribute('id', 'smo243584');
smo243600v0ar.push(smo243584);
smo243600v0.addTickables(smo243600v0ar)
fmtsmo24360038.joinVoices([smo243600v0]);
const fmtsmo24455138 = new VF.Formatter();
//
// voices and notes for stave 2 38
const smo244551v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244551v0ar = [];
const smo244534 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo244534.setAttribute('id', 'smo244534');
smo244534.addModifier(new VF.Dot(), 0);
smo244551v0ar.push(smo244534);
const smo244535 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244535.setAttribute('id', 'smo244535');
smo244551v0ar.push(smo244535);
smo244551v0.addTickables(smo244551v0ar)
fmtsmo24455138.joinVoices([smo244551v0]);
const fmtsmo24552638 = new VF.Formatter();
//
// voices and notes for stave 3 38
const smo245526v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245526v0ar = [];
const smo245509 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245509.setAttribute('id', 'smo245509');
smo245509.addModifier(new VF.Dot(), 0);
smo245526v0ar.push(smo245509);
const smo245510 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245510.setAttribute('id', 'smo245510');
smo245526v0ar.push(smo245510);
smo245526v0.addTickables(smo245526v0ar)
fmtsmo24552638.joinVoices([smo245526v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252364 = smo242638.getStemDirection();
smo242638.setStemDirection(dirsmo252364);
smo242640.setStemDirection(dirsmo252364);
const smo252364 = new VF.Beam([smo242638,smo242640]);
 
// formatting measures in staff group smo245740
fmtsmo24265738.format([smo242657v0,smo243600v0,smo244551v0,smo245526v0], 100);
const stavesmo242657 = new VF.Stave(1142, 627, 114);
stavesmo242657.setAttribute('id', 'stavesmo242657');
stavesmo242657.setBegBarType(VF.Barline.type.NONE);
stavesmo242657.setContext(context);
stavesmo242657.draw();
smo242657v0.draw(context, stavesmo242657);
smo252364.setContext(context);
smo252364.draw();
const stavesmo243600 = new VF.Stave(1142, 730, 114);
stavesmo243600.setAttribute('id', 'stavesmo243600');
stavesmo243600.setBegBarType(VF.Barline.type.NONE);
stavesmo243600.setContext(context);
stavesmo243600.draw();
smo243600v0.draw(context, stavesmo243600);
const stavesmo244551 = new VF.Stave(1142, 813, 114);
stavesmo244551.setAttribute('id', 'stavesmo244551');
stavesmo244551.setBegBarType(VF.Barline.type.NONE);
stavesmo244551.setContext(context);
stavesmo244551.draw();
smo244551v0.draw(context, stavesmo244551);
const stavesmo245526 = new VF.Stave(1142, 922, 114);
stavesmo245526.setAttribute('id', 'stavesmo245526');
stavesmo245526.setBegBarType(VF.Barline.type.NONE);
stavesmo245526.setContext(context);
stavesmo245526.draw();
smo245526v0.draw(context, stavesmo245526);
const fmtsmo24267739 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo242677v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242677v0ar = [];
const smo242658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo242658.setAttribute('id', 'smo242658');
smo242658.addModifier(new VF.Dot(), 0);
const smo242659 = new VF.Annotation('ло');
smo242659.setAttribute('id', 'smo242659');
smo242659.setFont('Merriweather', 12.1, 'normal');
smo242659.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242658.addModifier(smo242659);
smo242659.addClass('lyric lyric-0');
smo242677v0ar.push(smo242658);
const smo242660 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo242660.setAttribute('id', 'smo242660');
const smo242661 = new VF.Annotation('-');
smo242661.setAttribute('id', 'smo242661');
smo242661.setFont('Merriweather', 12.1, 'normal');
smo242661.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242660.addModifier(smo242661);
smo242661.addClass('lyric lyric-0 lyric-hyphen');
smo242677v0ar.push(smo242660);
smo242677v0.addTickables(smo242677v0ar)
fmtsmo24267739.joinVoices([smo242677v0]);
const fmtsmo24361939 = new VF.Formatter();
//
// voices and notes for stave 1 39
const smo243619v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243619v0ar = [];
const smo243601 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243601.setAttribute('id', 'smo243601');
smo243619v0ar.push(smo243601);
const smo243602 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243602.setAttribute('id', 'smo243602');
smo243619v0ar.push(smo243602);
const smo243603 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo243603.setAttribute('id', 'smo243603');
smo243619v0ar.push(smo243603);
smo243619v0.addTickables(smo243619v0ar)
fmtsmo24361939.joinVoices([smo243619v0]);
const fmtsmo24457039 = new VF.Formatter();
//
// voices and notes for stave 2 39
const smo244570v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244570v0ar = [];
const smo244552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244552.setAttribute('id', 'smo244552');
smo244570v0ar.push(smo244552);
const smo244553 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244553.setAttribute('id', 'smo244553');
smo244570v0ar.push(smo244553);
const smo244554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["c#/4/n"]}'))
smo244554.setAttribute('id', 'smo244554');
const smo2445540acc = new VF.Accidental('#');
smo244554.addModifier(smo2445540acc, 0);
smo244570v0ar.push(smo244554);
smo244570v0.addTickables(smo244570v0ar)
fmtsmo24457039.joinVoices([smo244570v0]);
const fmtsmo24554539 = new VF.Formatter();
//
// voices and notes for stave 3 39
const smo245545v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245545v0ar = [];
const smo245527 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245527.setAttribute('id', 'smo245527');
smo245545v0ar.push(smo245527);
const smo245528 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245528.setAttribute('id', 'smo245528');
smo245545v0ar.push(smo245528);
const smo245529 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245529.setAttribute('id', 'smo245529');
smo245545v0ar.push(smo245529);
smo245545v0.addTickables(smo245545v0ar)
fmtsmo24554539.joinVoices([smo245545v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24267739.format([smo242677v0,smo243619v0,smo244570v0,smo245545v0], 106);
const stavesmo242677 = new VF.Stave(1256, 627, 120);
stavesmo242677.setAttribute('id', 'stavesmo242677');
stavesmo242677.setBegBarType(VF.Barline.type.NONE);
stavesmo242677.setTempo(JSON.parse('{"duration":"2","dots":0,"bpm":144}'), -1 * 0);
stavesmo242677.setContext(context);
stavesmo242677.draw();
smo242677v0.draw(context, stavesmo242677);
const stavesmo243619 = new VF.Stave(1256, 730, 120);
stavesmo243619.setAttribute('id', 'stavesmo243619');
stavesmo243619.setBegBarType(VF.Barline.type.NONE);
stavesmo243619.setContext(context);
stavesmo243619.draw();
smo243619v0.draw(context, stavesmo243619);
const stavesmo244570 = new VF.Stave(1256, 813, 120);
stavesmo244570.setAttribute('id', 'stavesmo244570');
stavesmo244570.setBegBarType(VF.Barline.type.NONE);
stavesmo244570.setContext(context);
stavesmo244570.draw();
smo244570v0.draw(context, stavesmo244570);
const stavesmo245545 = new VF.Stave(1256, 922, 120);
stavesmo245545.setAttribute('id', 'stavesmo245545');
stavesmo245545.setBegBarType(VF.Barline.type.NONE);
stavesmo245545.setContext(context);
stavesmo245545.draw();
smo245545v0.draw(context, stavesmo245545);
const rightsmo245740stavesmo2426773 = new VF.StaveConnector(stavesmo242677, stavesmo245545).setType(0);
rightsmo245740stavesmo2426773.setContext(context).draw();
const fmtsmo24269740 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo242697v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242697v0ar = [];
const smo242678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo242678.setAttribute('id', 'smo242678');
const smo242679 = new VF.Annotation('вей');
smo242679.setAttribute('id', 'smo242679');
smo242679.setFont('Merriweather', 12.1, 'normal');
smo242679.setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM);
smo242678.addModifier(smo242679);
smo242679.addClass('lyric lyric-0');
smo242697v0ar.push(smo242678);
const smo242680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242680.setAttribute('id', 'smo242680');
smo242697v0ar.push(smo242680);
const smo242681 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242681.setAttribute('id', 'smo242681');
smo242697v0ar.push(smo242681);
smo242697v0.addTickables(smo242697v0ar)
fmtsmo24269740.joinVoices([smo242697v0]);
const fmtsmo24364140 = new VF.Formatter();
//
// voices and notes for stave 1 40
const smo243641v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243641v0ar = [];
const smo243620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo243621 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":false}'))
smo243621.setAttribute('id', 'smo243621');
const ggrpsmo243620 = new VF.GraceNoteGroup([smo243621]);
ggrpsmo243620.beamNotes();
smo243620.addModifier(ggrpsmo243620, 0);
smo243620.setAttribute('id', 'smo243620');
smo243641v0ar.push(smo243620);
const smo243622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243622.setAttribute('id', 'smo243622');
smo243641v0ar.push(smo243622);
const smo243623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
const smo243624 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["dn/5"],"slash":false}'))
smo243624.setAttribute('id', 'smo243624');
const ggrpsmo243623 = new VF.GraceNoteGroup([smo243624]);
ggrpsmo243623.beamNotes();
smo243623.addModifier(ggrpsmo243623, 0);
smo243623.setAttribute('id', 'smo243623');
smo243641v0ar.push(smo243623);
const smo243625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243625.setAttribute('id', 'smo243625');
smo243641v0ar.push(smo243625);
smo243641v0.addTickables(smo243641v0ar)
fmtsmo24364140.joinVoices([smo243641v0]);
const fmtsmo24459040 = new VF.Formatter();
//
// voices and notes for stave 2 40
const smo244590v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244590v0ar = [];
const smo244571 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244571.setAttribute('id', 'smo244571');
smo244590v0ar.push(smo244571);
const smo244572 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244572.setAttribute('id', 'smo244572');
smo244590v0ar.push(smo244572);
const smo244573 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244573.setAttribute('id', 'smo244573');
smo244590v0ar.push(smo244573);
const smo244574 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244574.setAttribute('id', 'smo244574');
smo244590v0ar.push(smo244574);
smo244590v0.addTickables(smo244590v0ar)
fmtsmo24459040.joinVoices([smo244590v0]);
const fmtsmo24556540 = new VF.Formatter();
//
// voices and notes for stave 3 40
const smo245565v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245565v0ar = [];
const smo245546 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245546.setAttribute('id', 'smo245546');
smo245565v0ar.push(smo245546);
const smo245547 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245547.setAttribute('id', 'smo245547');
smo245565v0ar.push(smo245547);
const smo245548 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245548.setAttribute('id', 'smo245548');
smo245565v0ar.push(smo245548);
const smo245549 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245549.setAttribute('id', 'smo245549');
smo245565v0ar.push(smo245549);
smo245565v0.addTickables(smo245565v0ar)
fmtsmo24556540.joinVoices([smo245565v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24269740.format([smo242697v0,smo243641v0,smo244590v0,smo245565v0], 170);
const stavesmo242697 = new VF.Stave(55, 1040, 244);
stavesmo242697.setAttribute('id', 'stavesmo242697');
stavesmo242697.setBegBarType(1);
stavesmo242697.addClef('treble');
const keysmo242697 = new VF.KeySignature('F');
keysmo242697.addToStave(stavesmo242697);
stavesmo242697.setContext(context);
stavesmo242697.draw();
smo242697v0.draw(context, stavesmo242697);
const stavesmo243641 = new VF.Stave(55, 1165, 244);
stavesmo243641.setAttribute('id', 'stavesmo243641');
stavesmo243641.setBegBarType(1);
stavesmo243641.addClef('treble');
const keysmo243641 = new VF.KeySignature('F');
keysmo243641.addToStave(stavesmo243641);
stavesmo243641.setContext(context);
stavesmo243641.draw();
smo243641v0.draw(context, stavesmo243641);
const stavesmo244590 = new VF.Stave(55, 1253, 244);
stavesmo244590.setAttribute('id', 'stavesmo244590');
stavesmo244590.setBegBarType(1);
stavesmo244590.addClef('treble');
const keysmo244590 = new VF.KeySignature('F');
keysmo244590.addToStave(stavesmo244590);
stavesmo244590.setContext(context);
stavesmo244590.draw();
smo244590v0.draw(context, stavesmo244590);
const stavesmo245565 = new VF.Stave(55, 1366, 244);
stavesmo245565.setAttribute('id', 'stavesmo245565');
stavesmo245565.setBegBarType(1);
stavesmo245565.addClef('bass');
const keysmo245565 = new VF.KeySignature('F');
keysmo245565.addToStave(stavesmo245565);
stavesmo245565.setContext(context);
stavesmo245565.draw();
smo245565v0.draw(context, stavesmo245565);
const leftsmo245740stavesmo2426973 = new VF.StaveConnector(stavesmo242697, stavesmo245565).setType(1);
leftsmo245740stavesmo2426973.setContext(context).draw();
const fmtsmo24271441 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo242714v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242714v0ar = [];
const smo242698 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242698.setAttribute('id', 'smo242698');
smo242714v0ar.push(smo242698);
smo242714v0.addTickables(smo242714v0ar)
fmtsmo24271441.joinVoices([smo242714v0]);
const fmtsmo24366141 = new VF.Formatter();
//
// voices and notes for stave 1 41
const smo243661v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243661v0ar = [];
const smo243642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
const smo243643 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["fn/5"],"slash":false}'))
smo243643.setAttribute('id', 'smo243643');
const ggrpsmo243642 = new VF.GraceNoteGroup([smo243643]);
ggrpsmo243642.beamNotes();
smo243642.addModifier(ggrpsmo243642, 0);
smo243642.setAttribute('id', 'smo243642');
smo243642.addModifier(new VF.Dot(), 0);
smo243661v0ar.push(smo243642);
const smo243644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243644.setAttribute('id', 'smo243644');
smo243661v0ar.push(smo243644);
const smo243645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo243645.setAttribute('id', 'smo243645');
smo243661v0ar.push(smo243645);
smo243661v0.addTickables(smo243661v0ar)
fmtsmo24366141.joinVoices([smo243661v0]);
const fmtsmo24461041 = new VF.Formatter();
//
// voices and notes for stave 2 41
const smo244610v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244610v0ar = [];
const smo244591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244591.setAttribute('id', 'smo244591');
smo244610v0ar.push(smo244591);
const smo244592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244592.setAttribute('id', 'smo244592');
smo244610v0ar.push(smo244592);
const smo244593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244593.setAttribute('id', 'smo244593');
smo244610v0ar.push(smo244593);
const smo244594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244594.setAttribute('id', 'smo244594');
smo244610v0ar.push(smo244594);
smo244610v0.addTickables(smo244610v0ar)
fmtsmo24461041.joinVoices([smo244610v0]);
const fmtsmo24558541 = new VF.Formatter();
//
// voices and notes for stave 3 41
const smo245585v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245585v0ar = [];
const smo245566 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245566.setAttribute('id', 'smo245566');
smo245585v0ar.push(smo245566);
const smo245567 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245567.setAttribute('id', 'smo245567');
smo245585v0ar.push(smo245567);
const smo245568 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245568.setAttribute('id', 'smo245568');
smo245585v0ar.push(smo245568);
const smo245569 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245569.setAttribute('id', 'smo245569');
smo245585v0ar.push(smo245569);
smo245585v0.addTickables(smo245585v0ar)
fmtsmo24558541.joinVoices([smo245585v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252399 = smo243644.getStemDirection();
smo243644.setStemDirection(dirsmo252399);
smo243645.setStemDirection(dirsmo252399);
const smo252399 = new VF.Beam([smo243644,smo243645]);
 
// formatting measures in staff group smo245740
fmtsmo24271441.format([smo242714v0,smo243661v0,smo244610v0,smo245585v0], 153);
const stavesmo242714 = new VF.Stave(299, 1040, 167);
stavesmo242714.setAttribute('id', 'stavesmo242714');
stavesmo242714.setBegBarType(VF.Barline.type.NONE);
stavesmo242714.setContext(context);
stavesmo242714.draw();
smo242714v0.draw(context, stavesmo242714);
const stavesmo243661 = new VF.Stave(299, 1165, 167);
stavesmo243661.setAttribute('id', 'stavesmo243661');
stavesmo243661.setBegBarType(VF.Barline.type.NONE);
stavesmo243661.setContext(context);
stavesmo243661.draw();
smo243661v0.draw(context, stavesmo243661);
smo252399.setContext(context);
smo252399.draw();
const stavesmo244610 = new VF.Stave(299, 1253, 167);
stavesmo244610.setAttribute('id', 'stavesmo244610');
stavesmo244610.setBegBarType(VF.Barline.type.NONE);
stavesmo244610.setContext(context);
stavesmo244610.draw();
smo244610v0.draw(context, stavesmo244610);
const stavesmo245585 = new VF.Stave(299, 1366, 167);
stavesmo245585.setAttribute('id', 'stavesmo245585');
stavesmo245585.setBegBarType(VF.Barline.type.NONE);
stavesmo245585.setContext(context);
stavesmo245585.draw();
smo245585v0.draw(context, stavesmo245585);
const fmtsmo24273142 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo242731v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242731v0ar = [];
const smo242715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242715.setAttribute('id', 'smo242715');
smo242731v0ar.push(smo242715);
smo242731v0.addTickables(smo242731v0ar)
fmtsmo24273142.joinVoices([smo242731v0]);
const fmtsmo24368342 = new VF.Formatter();
//
// voices and notes for stave 1 42
const smo243683v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243683v0ar = [];
const smo243662 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243662.setAttribute('id', 'smo243662');
smo243683v0ar.push(smo243662);
const smo243663 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243663.setAttribute('id', 'smo243663');
smo243683v0ar.push(smo243663);
const smo243664 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo243664.setAttribute('id', 'smo243664');
smo243683v0ar.push(smo243664);
const smo243665 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243665.setAttribute('id', 'smo243665');
smo243683v0ar.push(smo243665);
const smo243666 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243666.setAttribute('id', 'smo243666');
smo243683v0ar.push(smo243666);
const smo243667 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo243667.setAttribute('id', 'smo243667');
smo243683v0ar.push(smo243667);
smo243683v0.addTickables(smo243683v0ar)
fmtsmo24368342.joinVoices([smo243683v0]);
const fmtsmo24463042 = new VF.Formatter();
//
// voices and notes for stave 2 42
const smo244630v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244630v0ar = [];
const smo244611 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244611.setAttribute('id', 'smo244611');
smo244630v0ar.push(smo244611);
const smo244612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244612.setAttribute('id', 'smo244612');
smo244630v0ar.push(smo244612);
const smo244613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244613.setAttribute('id', 'smo244613');
smo244630v0ar.push(smo244613);
const smo244614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244614.setAttribute('id', 'smo244614');
smo244630v0ar.push(smo244614);
smo244630v0.addTickables(smo244630v0ar)
fmtsmo24463042.joinVoices([smo244630v0]);
const fmtsmo24560542 = new VF.Formatter();
//
// voices and notes for stave 3 42
const smo245605v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245605v0ar = [];
const smo245586 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245586.setAttribute('id', 'smo245586');
smo245605v0ar.push(smo245586);
const smo245587 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245587.setAttribute('id', 'smo245587');
smo245605v0ar.push(smo245587);
const smo245588 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245588.setAttribute('id', 'smo245588');
smo245605v0ar.push(smo245588);
const smo245589 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245589.setAttribute('id', 'smo245589');
smo245605v0ar.push(smo245589);
smo245605v0.addTickables(smo245605v0ar)
fmtsmo24560542.joinVoices([smo245605v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252408 = smo243663.getStemDirection();
smo243663.setStemDirection(dirsmo252408);
smo243664.setStemDirection(dirsmo252408);
const smo252408 = new VF.Beam([smo243663,smo243664]);
const dirsmo252409 = smo243666.getStemDirection();
smo243666.setStemDirection(dirsmo252409);
smo243667.setStemDirection(dirsmo252409);
const smo252409 = new VF.Beam([smo243666,smo243667]);
 
// formatting measures in staff group smo245740
fmtsmo24273142.format([smo242731v0,smo243683v0,smo244630v0,smo245605v0], 147);
const stavesmo242731 = new VF.Stave(466, 1040, 161);
stavesmo242731.setAttribute('id', 'stavesmo242731');
stavesmo242731.setBegBarType(VF.Barline.type.NONE);
stavesmo242731.setContext(context);
stavesmo242731.draw();
smo242731v0.draw(context, stavesmo242731);
const stavesmo243683 = new VF.Stave(466, 1165, 161);
stavesmo243683.setAttribute('id', 'stavesmo243683');
stavesmo243683.setBegBarType(VF.Barline.type.NONE);
stavesmo243683.setContext(context);
stavesmo243683.draw();
smo243683v0.draw(context, stavesmo243683);
smo252408.setContext(context);
smo252408.draw();
smo252409.setContext(context);
smo252409.draw();
const stavesmo244630 = new VF.Stave(466, 1253, 161);
stavesmo244630.setAttribute('id', 'stavesmo244630');
stavesmo244630.setBegBarType(VF.Barline.type.NONE);
stavesmo244630.setContext(context);
stavesmo244630.draw();
smo244630v0.draw(context, stavesmo244630);
const stavesmo245605 = new VF.Stave(466, 1366, 161);
stavesmo245605.setAttribute('id', 'stavesmo245605');
stavesmo245605.setBegBarType(VF.Barline.type.NONE);
stavesmo245605.setContext(context);
stavesmo245605.draw();
smo245605v0.draw(context, stavesmo245605);
const fmtsmo24274843 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo242748v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242748v0ar = [];
const smo242732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242732.setAttribute('id', 'smo242732');
smo242748v0ar.push(smo242732);
smo242748v0.addTickables(smo242748v0ar)
fmtsmo24274843.joinVoices([smo242748v0]);
const fmtsmo24370243 = new VF.Formatter();
//
// voices and notes for stave 1 43
const smo243702v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243702v0ar = [];
const smo243684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243684.setAttribute('id', 'smo243684');
smo243702v0ar.push(smo243684);
const smo243685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo243685.setAttribute('id', 'smo243685');
smo243702v0ar.push(smo243685);
const smo243686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo243686.setAttribute('id', 'smo243686');
smo243702v0ar.push(smo243686);
smo243702v0.addTickables(smo243702v0ar)
fmtsmo24370243.joinVoices([smo243702v0]);
const fmtsmo24465043 = new VF.Formatter();
//
// voices and notes for stave 2 43
const smo244650v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244650v0ar = [];
const smo244631 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244631.setAttribute('id', 'smo244631');
smo244650v0ar.push(smo244631);
const smo244632 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244632.setAttribute('id', 'smo244632');
smo244650v0ar.push(smo244632);
const smo244633 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244633.setAttribute('id', 'smo244633');
smo244650v0ar.push(smo244633);
const smo244634 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244634.setAttribute('id', 'smo244634');
smo244650v0ar.push(smo244634);
smo244650v0.addTickables(smo244650v0ar)
fmtsmo24465043.joinVoices([smo244650v0]);
const fmtsmo24562543 = new VF.Formatter();
//
// voices and notes for stave 3 43
const smo245625v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245625v0ar = [];
const smo245606 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245606.setAttribute('id', 'smo245606');
smo245625v0ar.push(smo245606);
const smo245607 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245607.setAttribute('id', 'smo245607');
smo245625v0ar.push(smo245607);
const smo245608 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245608.setAttribute('id', 'smo245608');
smo245625v0ar.push(smo245608);
const smo245609 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245609.setAttribute('id', 'smo245609');
smo245625v0ar.push(smo245609);
smo245625v0.addTickables(smo245625v0ar)
fmtsmo24562543.joinVoices([smo245625v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24274843.format([smo242748v0,smo243702v0,smo244650v0,smo245625v0], 95);
const stavesmo242748 = new VF.Stave(627, 1040, 109);
stavesmo242748.setAttribute('id', 'stavesmo242748');
stavesmo242748.setBegBarType(VF.Barline.type.NONE);
stavesmo242748.setContext(context);
stavesmo242748.draw();
smo242748v0.draw(context, stavesmo242748);
const stavesmo243702 = new VF.Stave(627, 1165, 109);
stavesmo243702.setAttribute('id', 'stavesmo243702');
stavesmo243702.setBegBarType(VF.Barline.type.NONE);
stavesmo243702.setContext(context);
stavesmo243702.draw();
smo243702v0.draw(context, stavesmo243702);
const stavesmo244650 = new VF.Stave(627, 1253, 109);
stavesmo244650.setAttribute('id', 'stavesmo244650');
stavesmo244650.setBegBarType(VF.Barline.type.NONE);
stavesmo244650.setContext(context);
stavesmo244650.draw();
smo244650v0.draw(context, stavesmo244650);
const stavesmo245625 = new VF.Stave(627, 1366, 109);
stavesmo245625.setAttribute('id', 'stavesmo245625');
stavesmo245625.setBegBarType(VF.Barline.type.NONE);
stavesmo245625.setContext(context);
stavesmo245625.draw();
smo245625v0.draw(context, stavesmo245625);
const fmtsmo24276544 = new VF.Formatter();
//
// voices and notes for stave 0 44
const smo242765v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242765v0ar = [];
const smo242749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242749.setAttribute('id', 'smo242749');
smo242765v0ar.push(smo242749);
smo242765v0.addTickables(smo242765v0ar)
fmtsmo24276544.joinVoices([smo242765v0]);
const fmtsmo24372244 = new VF.Formatter();
//
// voices and notes for stave 1 44
const smo243722v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243722v0ar = [];
const smo243703 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243703.setAttribute('id', 'smo243703');
smo243722v0ar.push(smo243703);
const smo243704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo243704.setAttribute('id', 'smo243704');
smo243722v0ar.push(smo243704);
const smo243705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo243705.setAttribute('id', 'smo243705');
smo243722v0ar.push(smo243705);
const smo243706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo243706.setAttribute('id', 'smo243706');
smo243722v0ar.push(smo243706);
smo243722v0.addTickables(smo243722v0ar)
fmtsmo24372244.joinVoices([smo243722v0]);
const fmtsmo24467044 = new VF.Formatter();
//
// voices and notes for stave 2 44
const smo244670v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244670v0ar = [];
const smo244651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo244651.setAttribute('id', 'smo244651');
smo244670v0ar.push(smo244651);
const smo244652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo244652.setAttribute('id', 'smo244652');
smo244670v0ar.push(smo244652);
const smo244653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo244653.setAttribute('id', 'smo244653');
smo244670v0ar.push(smo244653);
const smo244654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo244654.setAttribute('id', 'smo244654');
smo244670v0ar.push(smo244654);
smo244670v0.addTickables(smo244670v0ar)
fmtsmo24467044.joinVoices([smo244670v0]);
const fmtsmo24564544 = new VF.Formatter();
//
// voices and notes for stave 3 44
const smo245645v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245645v0ar = [];
const smo245626 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo245626.setAttribute('id', 'smo245626');
smo245645v0ar.push(smo245626);
const smo245627 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo245627.setAttribute('id', 'smo245627');
smo245645v0ar.push(smo245627);
const smo245628 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo245628.setAttribute('id', 'smo245628');
smo245645v0ar.push(smo245628);
const smo245629 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/3/n"]}'))
smo245629.setAttribute('id', 'smo245629');
smo245645v0ar.push(smo245629);
smo245645v0.addTickables(smo245645v0ar)
fmtsmo24564544.joinVoices([smo245645v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252426 = smo243703.getStemDirection();
smo243703.setStemDirection(dirsmo252426);
smo243704.setStemDirection(dirsmo252426);
const smo252426 = new VF.Beam([smo243703,smo243704]);
 
// formatting measures in staff group smo245740
fmtsmo24276544.format([smo242765v0,smo243722v0,smo244670v0,smo245645v0], 121);
const stavesmo242765 = new VF.Stave(736, 1040, 135);
stavesmo242765.setAttribute('id', 'stavesmo242765');
stavesmo242765.setBegBarType(VF.Barline.type.NONE);
stavesmo242765.setContext(context);
stavesmo242765.draw();
smo242765v0.draw(context, stavesmo242765);
const stavesmo243722 = new VF.Stave(736, 1165, 135);
stavesmo243722.setAttribute('id', 'stavesmo243722');
stavesmo243722.setBegBarType(VF.Barline.type.NONE);
stavesmo243722.setContext(context);
stavesmo243722.draw();
smo243722v0.draw(context, stavesmo243722);
smo252426.setContext(context);
smo252426.draw();
const stavesmo244670 = new VF.Stave(736, 1253, 135);
stavesmo244670.setAttribute('id', 'stavesmo244670');
stavesmo244670.setBegBarType(VF.Barline.type.NONE);
stavesmo244670.setContext(context);
stavesmo244670.draw();
smo244670v0.draw(context, stavesmo244670);
const stavesmo245645 = new VF.Stave(736, 1366, 135);
stavesmo245645.setAttribute('id', 'stavesmo245645');
stavesmo245645.setBegBarType(VF.Barline.type.NONE);
stavesmo245645.setContext(context);
stavesmo245645.draw();
smo245645v0.draw(context, stavesmo245645);
const fmtsmo24278245 = new VF.Formatter();
//
// voices and notes for stave 0 45
const smo242782v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242782v0ar = [];
const smo242766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242766.setAttribute('id', 'smo242766');
smo242782v0ar.push(smo242766);
smo242782v0.addTickables(smo242782v0ar)
fmtsmo24278245.joinVoices([smo242782v0]);
const fmtsmo24374245 = new VF.Formatter();
//
// voices and notes for stave 1 45
const smo243742v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243742v0ar = [];
const smo243723 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo243723.setAttribute('id', 'smo243723');
smo243742v0ar.push(smo243723);
const smo243724 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo243724.setAttribute('id', 'smo243724');
smo243742v0ar.push(smo243724);
const smo243725 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo243725.setAttribute('id', 'smo243725');
smo243742v0ar.push(smo243725);
const smo243726 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo243726.setAttribute('id', 'smo243726');
smo243742v0ar.push(smo243726);
smo243742v0.addTickables(smo243742v0ar)
fmtsmo24374245.joinVoices([smo243742v0]);
const fmtsmo24469045 = new VF.Formatter();
//
// voices and notes for stave 2 45
const smo244690v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244690v0ar = [];
const smo244671 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244671.setAttribute('id', 'smo244671');
smo244690v0ar.push(smo244671);
const smo244672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244672.setAttribute('id', 'smo244672');
smo244690v0ar.push(smo244672);
const smo244673 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244673.setAttribute('id', 'smo244673');
smo244690v0ar.push(smo244673);
const smo244674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244674.setAttribute('id', 'smo244674');
smo244690v0ar.push(smo244674);
smo244690v0.addTickables(smo244690v0ar)
fmtsmo24469045.joinVoices([smo244690v0]);
const fmtsmo24566545 = new VF.Formatter();
//
// voices and notes for stave 3 45
const smo245665v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245665v0ar = [];
const smo245646 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245646.setAttribute('id', 'smo245646');
smo245665v0ar.push(smo245646);
const smo245647 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245647.setAttribute('id', 'smo245647');
smo245665v0ar.push(smo245647);
const smo245648 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245648.setAttribute('id', 'smo245648');
smo245665v0ar.push(smo245648);
const smo245649 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245649.setAttribute('id', 'smo245649');
smo245665v0ar.push(smo245649);
smo245665v0.addTickables(smo245665v0ar)
fmtsmo24566545.joinVoices([smo245665v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252435 = smo243723.getStemDirection();
smo243723.setStemDirection(dirsmo252435);
smo243724.setStemDirection(dirsmo252435);
const smo252435 = new VF.Beam([smo243723,smo243724]);
 
// formatting measures in staff group smo245740
fmtsmo24278245.format([smo242782v0,smo243742v0,smo244690v0,smo245665v0], 121);
const stavesmo242782 = new VF.Stave(871, 1040, 135);
stavesmo242782.setAttribute('id', 'stavesmo242782');
stavesmo242782.setBegBarType(VF.Barline.type.NONE);
stavesmo242782.setContext(context);
stavesmo242782.draw();
smo242782v0.draw(context, stavesmo242782);
const stavesmo243742 = new VF.Stave(871, 1165, 135);
stavesmo243742.setAttribute('id', 'stavesmo243742');
stavesmo243742.setBegBarType(VF.Barline.type.NONE);
stavesmo243742.setContext(context);
stavesmo243742.draw();
smo243742v0.draw(context, stavesmo243742);
smo252435.setContext(context);
smo252435.draw();
const stavesmo244690 = new VF.Stave(871, 1253, 135);
stavesmo244690.setAttribute('id', 'stavesmo244690');
stavesmo244690.setBegBarType(VF.Barline.type.NONE);
stavesmo244690.setContext(context);
stavesmo244690.draw();
smo244690v0.draw(context, stavesmo244690);
const stavesmo245665 = new VF.Stave(871, 1366, 135);
stavesmo245665.setAttribute('id', 'stavesmo245665');
stavesmo245665.setBegBarType(VF.Barline.type.NONE);
stavesmo245665.setContext(context);
stavesmo245665.draw();
smo245665v0.draw(context, stavesmo245665);
const fmtsmo24279946 = new VF.Formatter();
//
// voices and notes for stave 0 46
const smo242799v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242799v0ar = [];
const smo242783 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242783.setAttribute('id', 'smo242783');
smo242799v0ar.push(smo242783);
smo242799v0.addTickables(smo242799v0ar)
fmtsmo24279946.joinVoices([smo242799v0]);
const fmtsmo24376446 = new VF.Formatter();
//
// voices and notes for stave 1 46
const smo243764v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243764v0ar = [];
const smo243743 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo243743.setAttribute('id', 'smo243743');
smo243764v0ar.push(smo243743);
const smo243744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo243744.setAttribute('id', 'smo243744');
smo243764v0ar.push(smo243744);
const smo243745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo243745.setAttribute('id', 'smo243745');
smo243764v0ar.push(smo243745);
const smo243746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo243746.setAttribute('id', 'smo243746');
smo243764v0ar.push(smo243746);
const smo243747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo243747.setAttribute('id', 'smo243747');
smo243764v0ar.push(smo243747);
const smo243748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo243748.setAttribute('id', 'smo243748');
smo243764v0ar.push(smo243748);
smo243764v0.addTickables(smo243764v0ar)
fmtsmo24376446.joinVoices([smo243764v0]);
const fmtsmo24471046 = new VF.Formatter();
//
// voices and notes for stave 2 46
const smo244710v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244710v0ar = [];
const smo244691 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244691.setAttribute('id', 'smo244691');
smo244710v0ar.push(smo244691);
const smo244692 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo244692.setAttribute('id', 'smo244692');
smo244710v0ar.push(smo244692);
const smo244693 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo244693.setAttribute('id', 'smo244693');
smo244710v0ar.push(smo244693);
const smo244694 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo244694.setAttribute('id', 'smo244694');
smo244710v0ar.push(smo244694);
smo244710v0.addTickables(smo244710v0ar)
fmtsmo24471046.joinVoices([smo244710v0]);
const fmtsmo24568546 = new VF.Formatter();
//
// voices and notes for stave 3 46
const smo245685v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245685v0ar = [];
const smo245666 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245666.setAttribute('id', 'smo245666');
smo245685v0ar.push(smo245666);
const smo245667 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245667.setAttribute('id', 'smo245667');
smo245685v0ar.push(smo245667);
const smo245668 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245668.setAttribute('id', 'smo245668');
smo245685v0ar.push(smo245668);
const smo245669 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["an/2/n"]}'))
smo245669.setAttribute('id', 'smo245669');
smo245685v0ar.push(smo245669);
smo245685v0.addTickables(smo245685v0ar)
fmtsmo24568546.joinVoices([smo245685v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
const dirsmo252444 = smo243743.getStemDirection();
smo243743.setStemDirection(dirsmo252444);
smo243744.setStemDirection(dirsmo252444);
const smo252444 = new VF.Beam([smo243743,smo243744]);
const dirsmo252445 = smo243746.getStemDirection();
smo243746.setStemDirection(dirsmo252445);
smo243747.setStemDirection(dirsmo252445);
const smo252445 = new VF.Beam([smo243746,smo243747]);
 
// formatting measures in staff group smo245740
fmtsmo24279946.format([smo242799v0,smo243764v0,smo244710v0,smo245685v0], 147);
const stavesmo242799 = new VF.Stave(1006, 1040, 161);
stavesmo242799.setAttribute('id', 'stavesmo242799');
stavesmo242799.setBegBarType(VF.Barline.type.NONE);
stavesmo242799.setContext(context);
stavesmo242799.draw();
smo242799v0.draw(context, stavesmo242799);
const stavesmo243764 = new VF.Stave(1006, 1165, 161);
stavesmo243764.setAttribute('id', 'stavesmo243764');
stavesmo243764.setBegBarType(VF.Barline.type.NONE);
stavesmo243764.setContext(context);
stavesmo243764.draw();
smo243764v0.draw(context, stavesmo243764);
smo252444.setContext(context);
smo252444.draw();
smo252445.setContext(context);
smo252445.draw();
const stavesmo244710 = new VF.Stave(1006, 1253, 161);
stavesmo244710.setAttribute('id', 'stavesmo244710');
stavesmo244710.setBegBarType(VF.Barline.type.NONE);
stavesmo244710.setContext(context);
stavesmo244710.draw();
smo244710v0.draw(context, stavesmo244710);
const stavesmo245685 = new VF.Stave(1006, 1366, 161);
stavesmo245685.setAttribute('id', 'stavesmo245685');
stavesmo245685.setBegBarType(VF.Barline.type.NONE);
stavesmo245685.setContext(context);
stavesmo245685.draw();
smo245685v0.draw(context, stavesmo245685);
const fmtsmo24281647 = new VF.Formatter();
//
// voices and notes for stave 0 47
const smo242816v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo242816v0ar = [];
const smo242800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"1","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo242800.setAttribute('id', 'smo242800');
smo242816v0ar.push(smo242800);
smo242816v0.addTickables(smo242816v0ar)
fmtsmo24281647.joinVoices([smo242816v0]);
const fmtsmo24378447 = new VF.Formatter();
//
// voices and notes for stave 1 47
const smo243784v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo243784v0ar = [];
const smo243765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo243765.setAttribute('id', 'smo243765');
smo243784v0ar.push(smo243765);
const smo243766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo243766.setAttribute('id', 'smo243766');
const smo243767 = new VF.Ornament('');
smo243766.addModifier(smo243767, 0);
smo243784v0ar.push(smo243766);
const smo243768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo243768.setAttribute('id', 'smo243768');
smo243784v0ar.push(smo243768);
smo243784v0.addTickables(smo243784v0ar)
fmtsmo24378447.joinVoices([smo243784v0]);
const fmtsmo24473047 = new VF.Formatter();
//
// voices and notes for stave 2 47
const smo244730v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo244730v0ar = [];
const smo244711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo244711.setAttribute('id', 'smo244711');
smo244730v0ar.push(smo244711);
const smo244712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo244712.setAttribute('id', 'smo244712');
const smo244713 = new VF.Ornament('');
smo244712.addModifier(smo244713, 0);
smo244730v0ar.push(smo244712);
const smo244714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo244714.setAttribute('id', 'smo244714');
smo244730v0ar.push(smo244714);
smo244730v0.addTickables(smo244730v0ar)
fmtsmo24473047.joinVoices([smo244730v0]);
const fmtsmo24570447 = new VF.Formatter();
//
// voices and notes for stave 3 47
const smo245704v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo245704v0ar = [];
const smo245686 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"2","dots":0,"type":"n","autoStem":true,"keys":["dn/3/n"]}'))
smo245686.setAttribute('id', 'smo245686');
smo245704v0ar.push(smo245686);
const smo245687 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/2/n","dn/3/n"]}'))
smo245687.setAttribute('id', 'smo245687');
smo245704v0ar.push(smo245687);
const smo245688 = new VF.StaveNote(JSON.parse('{"clef":"bass","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["dn/3/r"]}'))
smo245688.setAttribute('id', 'smo245688');
smo245704v0ar.push(smo245688);
smo245704v0.addTickables(smo245704v0ar)
fmtsmo24570447.joinVoices([smo245704v0]);
// create beam groups and tuplets for format grp smo245740 before formatting
 
// formatting measures in staff group smo245740
fmtsmo24281647.format([smo242816v0,smo243784v0,smo244730v0,smo245704v0], 74);
const stavesmo242816 = new VF.Stave(1167, 1040, 92);
stavesmo242816.setAttribute('id', 'stavesmo242816');
stavesmo242816.setBegBarType(VF.Barline.type.NONE);
stavesmo242816.setEndBarType(5);
stavesmo242816.setContext(context);
stavesmo242816.draw();
smo242816v0.draw(context, stavesmo242816);
const stavesmo243784 = new VF.Stave(1167, 1165, 92);
stavesmo243784.setAttribute('id', 'stavesmo243784');
stavesmo243784.setBegBarType(VF.Barline.type.NONE);
stavesmo243784.setEndBarType(5);
stavesmo243784.setContext(context);
stavesmo243784.draw();
smo243784v0.draw(context, stavesmo243784);
const stavesmo244730 = new VF.Stave(1167, 1253, 92);
stavesmo244730.setAttribute('id', 'stavesmo244730');
stavesmo244730.setBegBarType(VF.Barline.type.NONE);
stavesmo244730.setEndBarType(5);
stavesmo244730.setContext(context);
stavesmo244730.draw();
smo244730v0.draw(context, stavesmo244730);
const stavesmo245704 = new VF.Stave(1167, 1366, 92);
stavesmo245704.setAttribute('id', 'stavesmo245704');
stavesmo245704.setBegBarType(VF.Barline.type.NONE);
stavesmo245704.setEndBarType(5);
stavesmo245704.setContext(context);
stavesmo245704.draw();
smo245704v0.draw(context, stavesmo245704);
// modifier from 0-28-0-0 to 0-29-0-2
const smo253256 = new VF.TextBracket({ start: smo242396, stop: smo242422, text: 'accelerando', position: 1 });
smo253256.setLine(1).setContext(context).draw();
// modifier from 2-26-0-0 to 2-27-0-0
const smo253257 = new VF.StaveTie({ first_note: smo244324, last_note: smo244341, 
          firstNote: smo244324, lastNote: smo244341, first_indices: [0], last_indices: [0]});
smo253257.setContext(context).draw();
// modifier from 2-32-0-0 to 2-33-0-0
const smo253258 = new VF.StaveTie({ first_note: smo244430, last_note: smo244447, 
          firstNote: smo244430, lastNote: smo244447, first_indices: [0], last_indices: [0]});
smo253258.setContext(context).draw();
// modifier from 2-33-0-0 to 2-34-0-0
const smo253259 = new VF.StaveTie({ first_note: smo244447, last_note: smo244464, 
          firstNote: smo244447, lastNote: smo244464, first_indices: [0], last_indices: [0]});
smo253259.setContext(context).draw();
// modifier from 2-35-0-0 to 2-36-0-0
const smo253260 = new VF.StaveTie({ first_note: smo244481, last_note: smo244498, 
          firstNote: smo244481, lastNote: smo244498, first_indices: [0], last_indices: [0]});
smo253260.setContext(context).draw();
// modifier from 3-31-0-3 to 3-31-0-4
const smo253261 = new VF.StaveTie({ first_note: smo245370, last_note: smo245371, 
          firstNote: smo245370, lastNote: smo245371, first_indices: [0], last_indices: [0]});
smo253261.setContext(context).draw();
// 
// Align lyrics on different measures, once they are rendered.
context.svg.getElementById('vf-smo242349').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242351').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242353').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242355').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242358').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242360').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242378').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242397').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242399').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242419').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242421').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242441').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242443').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242445').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242447').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242449').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242451').setAttributeNS('', 'transform', 'translate(0 15)');
context.svg.getElementById('vf-smo242470').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242489').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242492').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242494').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242496').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242498').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242516').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242518').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242520').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242539').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242542').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242544').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242546').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242548').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242566').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242568').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242570').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242588').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242590').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242592').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242596').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242614').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242616').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242618').setAttributeNS('', 'transform', 'translate(0 5)');
context.svg.getElementById('vf-smo242659').setAttributeNS('', 'transform', 'translate(0 10)');
context.svg.getElementById('vf-smo242661').setAttributeNS('', 'transform', 'translate(0 10)');
}
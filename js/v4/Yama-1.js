// @@ Yama p 2/2 ((as played by Lee Morgan)) by Lee Morgan
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1255 1625');
//
// create the musical objects
VF.setMusicFont("Petaluma","Bravura","Gonville","Custom");
const fmtsmo42037125 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo420371v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420371v0ar = [];
const smo420337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo420337.setAttribute('id', 'smo420337');
const smo4203370acc = new VF.Accidental('b');
smo420337.addModifier(smo4203370acc, 0);
const smo420338 = new VF.ChordSymbol();
smo420338.setAttribute('id', 'smo420338');
smo420338.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420338.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420338.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420338.setFont('Petaluma Script', 14).setReportWidth(false);
smo420337.addModifier(smo420338, 0);
smo420371v0ar.push(smo420337);
const smo420339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420339.setAttribute('id', 'smo420339');
smo420371v0ar.push(smo420339);
const smo420340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420340.setAttribute('id', 'smo420340');
const smo4203400acc = new VF.Accidental('b');
smo420340.addModifier(smo4203400acc, 0);
smo420371v0ar.push(smo420340);
const smo420341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420341.setAttribute('id', 'smo420341');
smo420371v0ar.push(smo420341);
const smo420342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo420342.setAttribute('id', 'smo420342');
smo420371v0ar.push(smo420342);
const smo420343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420343.setAttribute('id', 'smo420343');
smo420371v0ar.push(smo420343);
const smo420344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420344.setAttribute('id', 'smo420344');
const smo420345 = new VF.ChordSymbol();
smo420345.setAttribute('id', 'smo420345');
smo420345.setFont('Petaluma Script', 14).setReportWidth(false);
smo420344.addModifier(smo420345, 0);
smo420371v0ar.push(smo420344);
const smo420346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420346.setAttribute('id', 'smo420346');
const smo420347 = new VF.ChordSymbol();
smo420347.setAttribute('id', 'smo420347');
smo420347.setFont('Petaluma Script', 14).setReportWidth(false);
smo420346.addModifier(smo420347, 0);
smo420371v0ar.push(smo420346);
const smo420348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420348.setAttribute('id', 'smo420348');
const smo420350 = new VF.Ornament('scoop');
smo420348.addModifier(smo420350, 0);
const smo420349 = new VF.ChordSymbol();
smo420349.setAttribute('id', 'smo420349');
smo420349.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420349.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420349.setFont('Petaluma Script', 14).setReportWidth(false);
smo420348.addModifier(smo420349, 0);
smo420371v0ar.push(smo420348);
const smo420351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420351.setAttribute('id', 'smo420351');
smo420371v0ar.push(smo420351);
const smo420352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420352.setAttribute('id', 'smo420352');
smo420371v0ar.push(smo420352);
const smo420353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420353.setAttribute('id', 'smo420353');
smo420371v0ar.push(smo420353);
const smo420354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420354.setAttribute('id', 'smo420354');
smo420371v0ar.push(smo420354);
const smo420355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420355.setAttribute('id', 'smo420355');
smo420371v0ar.push(smo420355);
const smo420356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo420356.setAttribute('id', 'smo420356');
const smo420357 = new VF.ChordSymbol();
smo420357.setAttribute('id', 'smo420357');
smo420357.setFont('Petaluma Script', 14).setReportWidth(false);
smo420356.addModifier(smo420357, 0);
smo420371v0ar.push(smo420356);
smo420371v0.addTickables(smo420371v0ar)
fmtsmo42037125.joinVoices([smo420371v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421195 = smo420337.getStemDirection();
smo420337.setStemDirection(dirsmo421195);
smo420339.setStemDirection(dirsmo421195);
smo420340.setStemDirection(dirsmo421195);
smo420341.setStemDirection(dirsmo421195);
const smo421195 = new VF.Beam([smo420337,smo420339,smo420340,smo420341,smo420342]);
const dirsmo421196 = smo420343.getStemDirection();
smo420343.setStemDirection(dirsmo421196);
smo420344.setStemDirection(dirsmo421196);
smo420346.setStemDirection(dirsmo421196);
smo420348.setStemDirection(dirsmo421196);
const smo421196 = new VF.Beam([smo420343,smo420344,smo420346,smo420348]);
const dirsmo421197 = smo420351.getStemDirection();
smo420351.setStemDirection(dirsmo421197);
smo420352.setStemDirection(dirsmo421197);
smo420353.setStemDirection(dirsmo421197);
smo420354.setStemDirection(dirsmo421197);
const smo421197 = new VF.Beam([smo420351,smo420352,smo420353,smo420354]);
 
// formatting measures in staff group smo420927
fmtsmo42037125.format([smo420371v0], 523);
const stavesmo420371 = new VF.Stave(46, 276.3846153846155, 607);
stavesmo420371.setAttribute('id', 'stavesmo420371');
stavesmo420371.setBegBarType(1);
stavesmo420371.addClef('treble');
const keysmo420371 = new VF.KeySignature('G');
keysmo420371.addToStave(stavesmo420371);
stavesmo420371.setContext(context);
stavesmo420371.draw();
smo420371v0.draw(context, stavesmo420371);
smo421195.setContext(context);
smo421195.draw();
smo421196.setContext(context);
smo421196.draw();
smo421197.setContext(context);
smo421197.draw();
const fmtsmo42040326 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo420403v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420403v0ar = [];
const smo420372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420372.setAttribute('id', 'smo420372');
const smo420373 = new VF.ChordSymbol();
smo420373.setAttribute('id', 'smo420373');
smo420373.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo420373.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420373.setFont('Petaluma Script', 14).setReportWidth(false);
smo420372.addModifier(smo420373, 0);
smo420403v0ar.push(smo420372);
const smo420374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420374.setAttribute('id', 'smo420374');
smo420403v0ar.push(smo420374);
const smo420375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420375.setAttribute('id', 'smo420375');
smo420403v0ar.push(smo420375);
const smo420376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo420376.setAttribute('id', 'smo420376');
const smo4203760acc = new VF.Accidental('n');
smo420376.addModifier(smo4203760acc, 0);
smo420403v0ar.push(smo420376);
const smo420377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420377.setAttribute('id', 'smo420377');
const smo4203770acc = new VF.Accidental('b');
smo420377.addModifier(smo4203770acc, 0);
const smo420378 = new VF.ChordSymbol();
smo420378.setAttribute('id', 'smo420378');
smo420378.setFont('Petaluma Script', 14).setReportWidth(false);
smo420377.addModifier(smo420378, 0);
smo420403v0ar.push(smo420377);
const smo420379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420379.setAttribute('id', 'smo420379');
smo420403v0ar.push(smo420379);
const smo420380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420380.setAttribute('id', 'smo420380');
smo420403v0ar.push(smo420380);
const smo420381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo420383 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["bn/4"],"slash":true}'))
smo420383.setAttribute('id', 'smo420383');
const ggrpsmo420381 = new VF.GraceNoteGroup([smo420383]);
ggrpsmo420381.beamNotes();
smo420381.addModifier(ggrpsmo420381, 0);
smo420381.setAttribute('id', 'smo420381');
const smo420382 = new VF.ChordSymbol();
smo420382.setAttribute('id', 'smo420382');
smo420382.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo420382.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420382.setFont('Petaluma Script', 14).setReportWidth(false);
smo420381.addModifier(smo420382, 0);
smo420403v0ar.push(smo420381);
const smo420384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420384.setAttribute('id', 'smo420384');
const smo4203840acc = new VF.Accidental('b');
smo420384.addModifier(smo4203840acc, 0);
smo420403v0ar.push(smo420384);
const smo420385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420385.setAttribute('id', 'smo420385');
smo420403v0ar.push(smo420385);
const smo420386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420386.setAttribute('id', 'smo420386');
smo420403v0ar.push(smo420386);
const smo420387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420387.setAttribute('id', 'smo420387');
smo420403v0ar.push(smo420387);
const smo420388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo420388.setAttribute('id', 'smo420388');
smo420403v0ar.push(smo420388);
smo420403v0.addTickables(smo420403v0ar)
fmtsmo42040326.joinVoices([smo420403v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421200 = smo420374.getStemDirection();
smo420374.setStemDirection(dirsmo421200);
smo420375.setStemDirection(dirsmo421200);
const smo421200 = new VF.Beam([smo420374,smo420375]);
const dirsmo421201 = smo420376.getStemDirection();
smo420376.setStemDirection(dirsmo421201);
smo420377.setStemDirection(dirsmo421201);
smo420379.setStemDirection(dirsmo421201);
smo420380.setStemDirection(dirsmo421201);
const smo421201 = new VF.Beam([smo420376,smo420377,smo420379,smo420380]);
const dirsmo421202 = smo420381.getStemDirection();
smo420381.setStemDirection(dirsmo421202);
smo420384.setStemDirection(dirsmo421202);
smo420385.setStemDirection(dirsmo421202);
smo420386.setStemDirection(dirsmo421202);
const smo421202 = new VF.Beam([smo420381,smo420384,smo420385,smo420386]);
const smo420389 = new VF.Tuplet([smo420384,smo420385,smo420386], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo420927
fmtsmo42040326.format([smo420403v0], 496);
const stavesmo420403 = new VF.Stave(653, 276.3846153846155, 510);
stavesmo420403.setAttribute('id', 'stavesmo420403');
stavesmo420403.setBegBarType(VF.Barline.type.NONE);
stavesmo420403.setContext(context);
stavesmo420403.draw();
smo420403v0.draw(context, stavesmo420403);
smo421200.setContext(context);
smo421200.draw();
smo421201.setContext(context);
smo421201.draw();
smo421202.setContext(context);
smo421202.draw();
smo420389.setContext(context).draw();
const fmtsmo42043627 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo420436v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420436v0ar = [];
const smo420404 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["c#/5/r"]}'))
smo420404.setAttribute('id', 'smo420404');
const smo420405 = new VF.ChordSymbol();
smo420405.setAttribute('id', 'smo420405');
smo420405.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo420405.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420405.setFont('Petaluma Script', 14).setReportWidth(false);
smo420404.addModifier(smo420405, 0);
smo420436v0ar.push(smo420404);
const smo420406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420406.setAttribute('id', 'smo420406');
const smo4204060acc = new VF.Accidental('b');
smo420406.addModifier(smo4204060acc, 0);
smo420406.addModifier(new VF.Dot(), 0);
smo420436v0ar.push(smo420406);
const smo420407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420407.setAttribute('id', 'smo420407');
const smo4204070acc = new VF.Accidental('b');
smo420407.addModifier(smo4204070acc, 0);
smo420436v0ar.push(smo420407);
const smo420408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420408.setAttribute('id', 'smo420408');
smo420436v0ar.push(smo420408);
const smo420409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420409.setAttribute('id', 'smo420409');
smo420436v0ar.push(smo420409);
const smo420410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420410.setAttribute('id', 'smo420410');
const smo420411 = new VF.ChordSymbol();
smo420411.setAttribute('id', 'smo420411');
smo420411.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo420411.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420411.setFont('Petaluma Script', 14).setReportWidth(false);
smo420410.addModifier(smo420411, 0);
smo420436v0ar.push(smo420410);
const smo420412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420412.setAttribute('id', 'smo420412');
smo420436v0ar.push(smo420412);
const smo420413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420413.setAttribute('id', 'smo420413');
smo420436v0ar.push(smo420413);
const smo420414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420414.setAttribute('id', 'smo420414');
smo420436v0ar.push(smo420414);
const smo420415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420415.setAttribute('id', 'smo420415');
const smo4204150acc = new VF.Accidental('n');
smo420415.addModifier(smo4204150acc, 0);
smo420436v0ar.push(smo420415);
const smo420416 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo420416.setAttribute('id', 'smo420416');
const smo4204160acc = new VF.Accidental('#');
smo420416.addModifier(smo4204160acc, 0);
smo420436v0ar.push(smo420416);
const smo420417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420417.setAttribute('id', 'smo420417');
smo420436v0ar.push(smo420417);
const smo420418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420418.setAttribute('id', 'smo420418');
smo420436v0ar.push(smo420418);
const smo420419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420419.setAttribute('id', 'smo420419');
smo420436v0ar.push(smo420419);
const smo420420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo420420.setAttribute('id', 'smo420420');
const smo4204200acc = new VF.Accidental('n');
smo420420.addModifier(smo4204200acc, 0);
smo420436v0ar.push(smo420420);
smo420436v0.addTickables(smo420436v0ar)
fmtsmo42043627.joinVoices([smo420436v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421210 = smo420407.getStemDirection();
smo420407.setStemDirection(dirsmo421210);
smo420408.setStemDirection(dirsmo421210);
smo420409.setStemDirection(dirsmo421210);
const smo421210 = new VF.Beam([smo420407,smo420408,smo420409]);
const dirsmo421211 = smo420410.getStemDirection();
smo420410.setStemDirection(dirsmo421211);
smo420412.setStemDirection(dirsmo421211);
smo420413.setStemDirection(dirsmo421211);
smo420414.setStemDirection(dirsmo421211);
smo420415.setStemDirection(dirsmo421211);
const smo421211 = new VF.Beam([smo420410,smo420412,smo420413,smo420414,smo420415]);
const dirsmo421212 = smo420416.getStemDirection();
smo420416.setStemDirection(dirsmo421212);
smo420417.setStemDirection(dirsmo421212);
smo420418.setStemDirection(dirsmo421212);
smo420419.setStemDirection(dirsmo421212);
smo420420.setStemDirection(dirsmo421212);
const smo421212 = new VF.Beam([smo420416,smo420417,smo420418,smo420419,smo420420]);
const smo420421 = new VF.Tuplet([smo420410,smo420412,smo420413], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo420422 = new VF.Tuplet([smo420416,smo420417,smo420418], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo420927
fmtsmo42043627.format([smo420436v0], 581);
const stavesmo420436 = new VF.Stave(46, 417.3846153846155, 665);
stavesmo420436.setAttribute('id', 'stavesmo420436');
stavesmo420436.setBegBarType(1);
stavesmo420436.addClef('treble');
const keysmo420436 = new VF.KeySignature('G');
keysmo420436.addToStave(stavesmo420436);
stavesmo420436.setContext(context);
stavesmo420436.draw();
smo420436v0.draw(context, stavesmo420436);
smo421210.setContext(context);
smo421210.draw();
smo421211.setContext(context);
smo421211.draw();
smo421212.setContext(context);
smo421212.draw();
smo420421.setContext(context).draw();
smo420422.setContext(context).draw();
const fmtsmo42046828 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo420468v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420468v0ar = [];
const smo420437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420437.setAttribute('id', 'smo420437');
const smo420438 = new VF.ChordSymbol();
smo420438.setAttribute('id', 'smo420438');
smo420438.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420438.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420438.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420438.setFont('Petaluma Script', 14).setReportWidth(false);
smo420437.addModifier(smo420438, 0);
smo420468v0ar.push(smo420437);
const smo420439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo420439.setAttribute('id', 'smo420439');
smo420468v0ar.push(smo420439);
const smo420440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420440.setAttribute('id', 'smo420440');
smo420468v0ar.push(smo420440);
const smo420441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420441.setAttribute('id', 'smo420441');
smo420468v0ar.push(smo420441);
const smo420442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420442.setAttribute('id', 'smo420442');
const smo420443 = new VF.ChordSymbol();
smo420443.setAttribute('id', 'smo420443');
smo420443.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420443.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420443.setFont('Petaluma Script', 14).setReportWidth(false);
smo420442.addModifier(smo420443, 0);
smo420468v0ar.push(smo420442);
const smo420444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420444.setAttribute('id', 'smo420444');
smo420468v0ar.push(smo420444);
const smo420445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo420446 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo420446.setAttribute('id', 'smo420446');
const acc0smo420446 = new VF.Accidental('#');
smo420446.addModifier(acc0smo420446, 0)
const ggrpsmo420445 = new VF.GraceNoteGroup([smo420446]);
ggrpsmo420445.beamNotes();
smo420445.addModifier(ggrpsmo420445, 0);
smo420445.setAttribute('id', 'smo420445');
smo420468v0ar.push(smo420445);
const smo420447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo420447.setAttribute('id', 'smo420447');
smo420468v0ar.push(smo420447);
const smo420448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420448.setAttribute('id', 'smo420448');
smo420468v0ar.push(smo420448);
const smo420449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420449.setAttribute('id', 'smo420449');
const smo4204490acc = new VF.Accidental('b');
smo420449.addModifier(smo4204490acc, 0);
smo420468v0ar.push(smo420449);
const smo420450 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420450.setAttribute('id', 'smo420450');
smo420468v0ar.push(smo420450);
const smo420451 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420451.setAttribute('id', 'smo420451');
smo420468v0ar.push(smo420451);
smo420468v0.addTickables(smo420468v0ar)
fmtsmo42046828.joinVoices([smo420468v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421215 = smo420440.getStemDirection();
smo420440.setStemDirection(dirsmo421215);
smo420441.setStemDirection(dirsmo421215);
const smo421215 = new VF.Beam([smo420440,smo420441]);
const dirsmo421216 = smo420442.getStemDirection();
smo420442.setStemDirection(dirsmo421216);
smo420444.setStemDirection(dirsmo421216);
const smo421216 = new VF.Beam([smo420442,smo420444]);
const dirsmo421217 = smo420445.getStemDirection();
smo420445.setStemDirection(dirsmo421217);
smo420448.setStemDirection(dirsmo421217);
smo420449.setStemDirection(dirsmo421217);
smo420450.setStemDirection(dirsmo421217);
smo420451.setStemDirection(dirsmo421217);
const smo421217 = new VF.Beam([smo420445,smo420448,smo420449,smo420450,smo420451]);
const smo420452 = new VF.Tuplet([smo420439,smo420440,smo420441], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo420453 = new VF.Tuplet([smo420445,smo420447,smo420448], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo420454 = new VF.Tuplet([smo420449,smo420450,smo420451], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo420927
fmtsmo42046828.format([smo420468v0], 437);
const stavesmo420468 = new VF.Stave(711, 417.3846153846155, 451);
stavesmo420468.setAttribute('id', 'stavesmo420468');
stavesmo420468.setBegBarType(VF.Barline.type.NONE);
stavesmo420468.setContext(context);
stavesmo420468.draw();
smo420468v0.draw(context, stavesmo420468);
smo421215.setContext(context);
smo421215.draw();
smo421216.setContext(context);
smo421216.draw();
smo421217.setContext(context);
smo421217.draw();
smo420452.setContext(context).draw();
smo420453.setContext(context).draw();
smo420454.setContext(context).draw();
const fmtsmo42049329 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo420493v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420493v0ar = [];
const smo420469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
const smo420471 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo420471.setAttribute('id', 'smo420471');
const ggrpsmo420469 = new VF.GraceNoteGroup([smo420471]);
ggrpsmo420469.beamNotes();
smo420469.addModifier(ggrpsmo420469, 0);
smo420469.setAttribute('id', 'smo420469');
const smo420470 = new VF.ChordSymbol();
smo420470.setAttribute('id', 'smo420470');
smo420470.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420470.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420470.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420470.setFont('Petaluma Script', 14).setReportWidth(false);
smo420469.addModifier(smo420470, 0);
smo420493v0ar.push(smo420469);
const smo420472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420472.setAttribute('id', 'smo420472');
smo420493v0ar.push(smo420472);
const smo420473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420473.setAttribute('id', 'smo420473');
smo420493v0ar.push(smo420473);
const smo420474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420474.setAttribute('id', 'smo420474');
const smo420475 = new VF.ChordSymbol();
smo420475.setAttribute('id', 'smo420475');
smo420475.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420475.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420475.setFont('Petaluma Script', 14).setReportWidth(false);
smo420474.addModifier(smo420475, 0);
smo420493v0ar.push(smo420474);
const smo420476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo420476.setAttribute('id', 'smo420476');
smo420493v0ar.push(smo420476);
const smo420477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo420477.setAttribute('id', 'smo420477');
const smo4204770acc = new VF.Accidental('b');
smo420477.addModifier(smo4204770acc, 0);
smo420493v0ar.push(smo420477);
const smo420478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420478.setAttribute('id', 'smo420478');
smo420493v0ar.push(smo420478);
const smo420479 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420479.setAttribute('id', 'smo420479');
smo420493v0ar.push(smo420479);
smo420493v0.addTickables(smo420493v0ar)
fmtsmo42049329.joinVoices([smo420493v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421223 = smo420469.getStemDirection();
smo420469.setStemDirection(dirsmo421223);
smo420472.setStemDirection(dirsmo421223);
const smo421223 = new VF.Beam([smo420469,smo420472]);
const dirsmo421224 = smo420476.getStemDirection();
smo420476.setStemDirection(dirsmo421224);
smo420477.setStemDirection(dirsmo421224);
smo420478.setStemDirection(dirsmo421224);
smo420479.setStemDirection(dirsmo421224);
const smo421224 = new VF.Beam([smo420476,smo420477,smo420478,smo420479]);
 
// formatting measures in staff group smo420927
fmtsmo42049329.format([smo420493v0], 306);
const stavesmo420493 = new VF.Stave(46, 578.3846153846155, 390);
stavesmo420493.setAttribute('id', 'stavesmo420493');
stavesmo420493.setBegBarType(1);
stavesmo420493.setEndBarType(2);
stavesmo420493.addClef('treble');
const keysmo420493 = new VF.KeySignature('G');
keysmo420493.addToStave(stavesmo420493);
stavesmo420493.setContext(context);
stavesmo420493.draw();
smo420493v0.draw(context, stavesmo420493);
smo421223.setContext(context);
smo421223.draw();
smo421224.setContext(context);
smo421224.draw();
const fmtsmo42051730 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo420517v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420517v0ar = [];
const smo420494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo420494.setAttribute('id', 'smo420494');
const smo420495 = new VF.ChordSymbol();
smo420495.setAttribute('id', 'smo420495');
smo420495.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420495.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420495.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420495.setFont('Petaluma Script', 14).setReportWidth(false);
smo420494.addModifier(smo420495, 0);
smo420517v0ar.push(smo420494);
const smo420496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420496.setAttribute('id', 'smo420496');
smo420496.addModifier(new VF.Dot(), 0);
smo420517v0ar.push(smo420496);
const smo420497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo420497.setAttribute('id', 'smo420497');
const smo4204970acc = new VF.Accidental('n');
smo420497.addModifier(smo4204970acc, 0);
smo420517v0ar.push(smo420497);
const smo420498 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420498.setAttribute('id', 'smo420498');
smo420498.addModifier(new VF.Dot(), 0);
smo420517v0ar.push(smo420498);
const smo420499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420499.setAttribute('id', 'smo420499');
const smo420500 = new VF.ChordSymbol();
smo420500.setAttribute('id', 'smo420500');
smo420500.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo420500.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3}'));
smo420500.setFont('Petaluma Script', 14).setReportWidth(false);
smo420499.addModifier(smo420500, 0);
smo420517v0ar.push(smo420499);
const smo420501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420501.setAttribute('id', 'smo420501');
smo420501.addModifier(new VF.Dot(), 0);
smo420517v0ar.push(smo420501);
const smo420502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420502.setAttribute('id', 'smo420502');
const smo4205020acc = new VF.Accidental('n');
smo420502.addModifier(smo4205020acc, 0);
smo420517v0ar.push(smo420502);
const smo420503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo420503.setAttribute('id', 'smo420503');
smo420503.addModifier(new VF.Dot(), 0);
smo420517v0ar.push(smo420503);
smo420517v0.addTickables(smo420517v0ar)
fmtsmo42051730.joinVoices([smo420517v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421226 = smo420494.getStemDirection();
smo420494.setStemDirection(dirsmo421226);
smo420496.setStemDirection(dirsmo421226);
const smo421226 = new VF.Beam([smo420494,smo420496]);
const dirsmo421227 = smo420497.getStemDirection();
smo420497.setStemDirection(dirsmo421227);
smo420498.setStemDirection(dirsmo421227);
const smo421227 = new VF.Beam([smo420497,smo420498]);
const dirsmo421228 = smo420499.getStemDirection();
smo420499.setStemDirection(dirsmo421228);
smo420501.setStemDirection(dirsmo421228);
const smo421228 = new VF.Beam([smo420499,smo420501]);
const dirsmo421229 = smo420502.getStemDirection();
smo420502.setStemDirection(dirsmo421229);
smo420503.setStemDirection(dirsmo421229);
const smo421229 = new VF.Beam([smo420502,smo420503]);
 
// formatting measures in staff group smo420927
fmtsmo42051730.format([smo420517v0], 345);
const stavesmo420517 = new VF.Stave(436, 578.3846153846155, 359);
stavesmo420517.setAttribute('id', 'stavesmo420517');
stavesmo420517.setBegBarType(VF.Barline.type.NONE);
stavesmo420517.setContext(context);
stavesmo420517.draw();
smo420517v0.draw(context, stavesmo420517);
smo421226.setContext(context);
smo421226.draw();
smo421227.setContext(context);
smo421227.draw();
smo421228.setContext(context);
smo421228.draw();
smo421229.setContext(context);
smo421229.draw();
const fmtsmo42054731 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo420547v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420547v0ar = [];
const smo420518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo420518.setAttribute('id', 'smo420518');
const smo4205180acc = new VF.Accidental('b');
smo420518.addModifier(smo4205180acc, 0);
const smo420519 = new VF.ChordSymbol();
smo420519.setAttribute('id', 'smo420519');
smo420519.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo420519.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420519.setFont('Petaluma Script', 14).setReportWidth(false);
smo420518.addModifier(smo420519, 0);
smo420547v0ar.push(smo420518);
const smo420520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420520.setAttribute('id', 'smo420520');
smo420520.addModifier(new VF.Dot(), 0);
const smo420521 = new VF.ChordSymbol();
smo420521.setAttribute('id', 'smo420521');
smo420521.setFont('Petaluma Script', 14).setReportWidth(false);
smo420520.addModifier(smo420521, 0);
smo420547v0ar.push(smo420520);
const smo420522 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420522.setAttribute('id', 'smo420522');
const smo4205220acc = new VF.Accidental('b');
smo420522.addModifier(smo4205220acc, 0);
const smo420523 = new VF.ChordSymbol();
smo420523.setAttribute('id', 'smo420523');
smo420523.setFont('Petaluma Script', 14).setReportWidth(false);
smo420522.addModifier(smo420523, 0);
smo420547v0ar.push(smo420522);
const smo420524 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420524.setAttribute('id', 'smo420524');
smo420524.addModifier(new VF.Dot(), 0);
const smo420525 = new VF.ChordSymbol();
smo420525.setAttribute('id', 'smo420525');
smo420525.setFont('Petaluma Script', 14).setReportWidth(false);
smo420524.addModifier(smo420525, 0);
smo420547v0ar.push(smo420524);
const smo420526 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo420526.setAttribute('id', 'smo420526');
const smo4205260acc = new VF.Accidental('n');
smo420526.addModifier(smo4205260acc, 0);
const smo420527 = new VF.ChordSymbol();
smo420527.setAttribute('id', 'smo420527');
smo420527.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420527.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420527.setFont('Petaluma Script', 14).setReportWidth(false);
smo420526.addModifier(smo420527, 0);
smo420547v0ar.push(smo420526);
const smo420528 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo420528.setAttribute('id', 'smo420528');
smo420528.addModifier(new VF.Dot(), 0);
const smo420529 = new VF.ChordSymbol();
smo420529.setAttribute('id', 'smo420529');
smo420529.setFont('Petaluma Script', 14).setReportWidth(false);
smo420528.addModifier(smo420529, 0);
smo420547v0ar.push(smo420528);
const smo420530 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo420530.setAttribute('id', 'smo420530');
const smo4205300acc = new VF.Accidental('b');
smo420530.addModifier(smo4205300acc, 0);
const smo420531 = new VF.ChordSymbol();
smo420531.setAttribute('id', 'smo420531');
smo420531.setFont('Petaluma Script', 14).setReportWidth(false);
smo420530.addModifier(smo420531, 0);
smo420547v0ar.push(smo420530);
const smo420532 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo420532.setAttribute('id', 'smo420532');
smo420532.addModifier(new VF.Dot(), 0);
const smo420533 = new VF.ChordSymbol();
smo420533.setAttribute('id', 'smo420533');
smo420533.setFont('Petaluma Script', 14).setReportWidth(false);
smo420532.addModifier(smo420533, 0);
smo420547v0ar.push(smo420532);
smo420547v0.addTickables(smo420547v0ar)
fmtsmo42054731.joinVoices([smo420547v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421232 = smo420518.getStemDirection();
smo420518.setStemDirection(dirsmo421232);
smo420520.setStemDirection(dirsmo421232);
const smo421232 = new VF.Beam([smo420518,smo420520]);
const dirsmo421233 = smo420522.getStemDirection();
smo420522.setStemDirection(dirsmo421233);
smo420524.setStemDirection(dirsmo421233);
const smo421233 = new VF.Beam([smo420522,smo420524]);
const dirsmo421234 = smo420526.getStemDirection();
smo420526.setStemDirection(dirsmo421234);
smo420528.setStemDirection(dirsmo421234);
const smo421234 = new VF.Beam([smo420526,smo420528]);
const dirsmo421235 = smo420530.getStemDirection();
smo420530.setStemDirection(dirsmo421235);
smo420532.setStemDirection(dirsmo421235);
const smo421235 = new VF.Beam([smo420530,smo420532]);
 
// formatting measures in staff group smo420927
fmtsmo42054731.format([smo420547v0], 355);
const stavesmo420547 = new VF.Stave(795, 578.3846153846155, 369);
stavesmo420547.setAttribute('id', 'stavesmo420547');
stavesmo420547.setBegBarType(VF.Barline.type.NONE);
stavesmo420547.setContext(context);
stavesmo420547.draw();
smo420547v0.draw(context, stavesmo420547);
smo421232.setContext(context);
smo421232.draw();
smo421233.setContext(context);
smo421233.draw();
smo421234.setContext(context);
smo421234.draw();
smo421235.setContext(context);
smo421235.draw();
const fmtsmo42058332 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo420583v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420583v0ar = [];
const smo420548 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo420548.setAttribute('id', 'smo420548');
const smo4205480acc = new VF.Accidental('b');
smo420548.addModifier(smo4205480acc, 0);
const smo420549 = new VF.ChordSymbol();
smo420549.setAttribute('id', 'smo420549');
smo420549.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1}'));
smo420549.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420549.setFont('Petaluma Script', 14).setReportWidth(false);
smo420548.addModifier(smo420549, 0);
smo420583v0ar.push(smo420548);
const smo420550 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo420550.setAttribute('id', 'smo420550');
const smo4205500acc = new VF.Accidental('b');
smo420550.addModifier(smo4205500acc, 0);
const smo420551 = new VF.ChordSymbol();
smo420551.setAttribute('id', 'smo420551');
smo420551.setFont('Petaluma Script', 14).setReportWidth(false);
smo420550.addModifier(smo420551, 0);
smo420583v0ar.push(smo420550);
const smo420552 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420552.setAttribute('id', 'smo420552');
const smo4205520acc = new VF.Accidental('n');
smo420552.addModifier(smo4205520acc, 0);
const smo420553 = new VF.ChordSymbol();
smo420553.setAttribute('id', 'smo420553');
smo420553.setFont('Petaluma Script', 14).setReportWidth(false);
smo420552.addModifier(smo420553, 0);
smo420583v0ar.push(smo420552);
const smo420554 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420554.setAttribute('id', 'smo420554');
const smo4205540acc = new VF.Accidental('b');
smo420554.addModifier(smo4205540acc, 0);
const smo420556 = new VF.Ornament('fall');
smo420554.addModifier(smo420556, 0);
const smo420555 = new VF.ChordSymbol();
smo420555.setAttribute('id', 'smo420555');
smo420555.setFont('Petaluma Script', 14).setReportWidth(false);
smo420554.addModifier(smo420555, 0);
smo420583v0ar.push(smo420554);
const smo420557 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420557.setAttribute('id', 'smo420557');
const smo420558 = new VF.ChordSymbol();
smo420558.setAttribute('id', 'smo420558');
smo420558.setFont('Petaluma Script', 14).setReportWidth(false);
smo420557.addModifier(smo420558, 0);
smo420583v0ar.push(smo420557);
const smo420559 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo420559.setAttribute('id', 'smo420559');
const smo4205590acc = new VF.Accidental('b');
smo420559.addModifier(smo4205590acc, 0);
smo420583v0ar.push(smo420559);
const smo420560 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo420560.setAttribute('id', 'smo420560');
const smo4205600acc = new VF.Accidental('b');
smo420560.addModifier(smo4205600acc, 0);
smo420583v0ar.push(smo420560);
const smo420561 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420561.setAttribute('id', 'smo420561');
smo420583v0ar.push(smo420561);
const smo420562 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo420562.setAttribute('id', 'smo420562');
const smo4205620acc = new VF.Accidental('b');
smo420562.addModifier(smo4205620acc, 0);
const smo420563 = new VF.ChordSymbol();
smo420563.setAttribute('id', 'smo420563');
smo420563.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo420563.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420563.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420563.setFont('Petaluma Script', 14).setReportWidth(false);
smo420562.addModifier(smo420563, 0);
smo420583v0ar.push(smo420562);
const smo420564 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo420564.setAttribute('id', 'smo420564');
const smo4205640acc = new VF.Accidental('b');
smo4205640acc.setAsCautionary();
smo420564.addModifier(smo4205640acc, 0);
smo420583v0ar.push(smo420564);
const smo420565 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420565.setAttribute('id', 'smo420565');
const smo4205650acc = new VF.Accidental('b');
smo4205650acc.setAsCautionary();
smo420565.addModifier(smo4205650acc, 0);
smo420583v0ar.push(smo420565);
const smo420566 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo420566.setAttribute('id', 'smo420566');
smo420583v0ar.push(smo420566);
const smo420567 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420567.setAttribute('id', 'smo420567');
smo420583v0ar.push(smo420567);
const smo420568 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo420568.setAttribute('id', 'smo420568');
smo420583v0ar.push(smo420568);
const smo420569 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420569.setAttribute('id', 'smo420569');
smo420583v0ar.push(smo420569);
smo420583v0.addTickables(smo420583v0ar)
fmtsmo42058332.joinVoices([smo420583v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421244 = smo420548.getStemDirection();
smo420548.setStemDirection(dirsmo421244);
smo420550.setStemDirection(dirsmo421244);
smo420552.setStemDirection(dirsmo421244);
smo420554.setStemDirection(dirsmo421244);
const smo421244 = new VF.Beam([smo420548,smo420550,smo420552,smo420554]);
const dirsmo421245 = smo420559.getStemDirection();
smo420559.setStemDirection(dirsmo421245);
smo420560.setStemDirection(dirsmo421245);
smo420561.setStemDirection(dirsmo421245);
const smo421245 = new VF.Beam([smo420559,smo420560,smo420561]);
const dirsmo421246 = smo420562.getStemDirection();
smo420562.setStemDirection(dirsmo421246);
smo420564.setStemDirection(dirsmo421246);
smo420565.setStemDirection(dirsmo421246);
smo420566.setStemDirection(dirsmo421246);
const smo421246 = new VF.Beam([smo420562,smo420564,smo420565,smo420566]);
const dirsmo421247 = smo420567.getStemDirection();
smo420567.setStemDirection(dirsmo421247);
smo420568.setStemDirection(dirsmo421247);
const smo421247 = new VF.Beam([smo420567,smo420568]);
 
// formatting measures in staff group smo420927
fmtsmo42058332.format([smo420583v0], 588);
const stavesmo420583 = new VF.Stave(46, 760.3846153846155, 672);
stavesmo420583.setAttribute('id', 'stavesmo420583');
stavesmo420583.setBegBarType(1);
stavesmo420583.addClef('treble');
const keysmo420583 = new VF.KeySignature('G');
keysmo420583.addToStave(stavesmo420583);
stavesmo420583.setContext(context);
stavesmo420583.draw();
smo420583v0.draw(context, stavesmo420583);
smo421244.setContext(context);
smo421244.draw();
smo421245.setContext(context);
smo421245.draw();
smo421246.setContext(context);
smo421246.draw();
smo421247.setContext(context);
smo421247.draw();
const fmtsmo42061233 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo420612v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420612v0ar = [];
const smo420584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420584.setAttribute('id', 'smo420584');
const smo420585 = new VF.ChordSymbol();
smo420585.setAttribute('id', 'smo420585');
smo420585.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo420585.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420585.setFont('Petaluma Script', 14).setReportWidth(false);
smo420584.addModifier(smo420585, 0);
smo420612v0ar.push(smo420584);
const smo420586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420586.setAttribute('id', 'smo420586');
smo420612v0ar.push(smo420586);
const smo420587 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420587.setAttribute('id', 'smo420587');
smo420612v0ar.push(smo420587);
const smo420588 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420588.setAttribute('id', 'smo420588');
smo420612v0ar.push(smo420588);
const smo420589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420589.setAttribute('id', 'smo420589');
const smo420590 = new VF.ChordSymbol();
smo420590.setAttribute('id', 'smo420590');
smo420590.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo420590.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420590.setFont('Petaluma Script', 14).setReportWidth(false);
smo420589.addModifier(smo420590, 0);
smo420612v0ar.push(smo420589);
const smo420591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo420591.setAttribute('id', 'smo420591');
const smo4205910acc = new VF.Accidental('b');
smo420591.addModifier(smo4205910acc, 0);
smo420612v0ar.push(smo420591);
const smo420592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo420592.setAttribute('id', 'smo420592');
smo420612v0ar.push(smo420592);
const smo420593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420593.setAttribute('id', 'smo420593');
smo420612v0ar.push(smo420593);
const smo420594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo420594.setAttribute('id', 'smo420594');
const smo420595 = new VF.ChordSymbol();
smo420595.setAttribute('id', 'smo420595');
smo420595.setFont('Petaluma Script', 14).setReportWidth(false);
smo420594.addModifier(smo420595, 0);
smo420612v0ar.push(smo420594);
const smo420596 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo420596.setAttribute('id', 'smo420596');
smo420612v0ar.push(smo420596);
const smo420597 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo420597.setAttribute('id', 'smo420597');
const smo4205970acc = new VF.Accidental('b');
smo420597.addModifier(smo4205970acc, 0);
smo420612v0ar.push(smo420597);
const smo420598 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo420598.setAttribute('id', 'smo420598');
smo420612v0ar.push(smo420598);
smo420612v0.addTickables(smo420612v0ar)
fmtsmo42061233.joinVoices([smo420612v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421250 = smo420587.getStemDirection();
smo420587.setStemDirection(dirsmo421250);
smo420588.setStemDirection(dirsmo421250);
const smo421250 = new VF.Beam([smo420587,smo420588]);
const dirsmo421251 = smo420589.getStemDirection();
smo420589.setStemDirection(dirsmo421251);
smo420591.setStemDirection(dirsmo421251);
smo420592.setStemDirection(dirsmo421251);
smo420593.setStemDirection(dirsmo421251);
const smo421251 = new VF.Beam([smo420589,smo420591,smo420592,smo420593]);
const dirsmo421252 = smo420594.getStemDirection();
smo420594.setStemDirection(dirsmo421252);
smo420596.setStemDirection(dirsmo421252);
smo420597.setStemDirection(dirsmo421252);
smo420598.setStemDirection(dirsmo421252);
const smo421252 = new VF.Beam([smo420594,smo420596,smo420597,smo420598]);
 
// formatting measures in staff group smo420927
fmtsmo42061233.format([smo420612v0], 431);
const stavesmo420612 = new VF.Stave(718, 760.3846153846155, 445);
stavesmo420612.setAttribute('id', 'stavesmo420612');
stavesmo420612.setBegBarType(VF.Barline.type.NONE);
stavesmo420612.setContext(context);
stavesmo420612.draw();
smo420612v0.draw(context, stavesmo420612);
smo421250.setContext(context);
smo421250.draw();
smo421251.setContext(context);
smo421251.draw();
smo421252.setContext(context);
smo421252.draw();
const fmtsmo42064134 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo420641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420641v0ar = [];
const smo420613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420613.setAttribute('id', 'smo420613');
const smo420614 = new VF.ChordSymbol();
smo420614.setAttribute('id', 'smo420614');
smo420614.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420614.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420614.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420614.setFont('Petaluma Script', 14).setReportWidth(false);
smo420613.addModifier(smo420614, 0);
smo420641v0ar.push(smo420613);
const smo420615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420615.setAttribute('id', 'smo420615');
smo420641v0ar.push(smo420615);
const smo420616 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420616.setAttribute('id', 'smo420616');
smo420641v0ar.push(smo420616);
const smo420617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420617.setAttribute('id', 'smo420617');
const smo4206170acc = new VF.Accidental('b');
smo420617.addModifier(smo4206170acc, 0);
smo420641v0ar.push(smo420617);
const smo420618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420618.setAttribute('id', 'smo420618');
smo420641v0ar.push(smo420618);
const smo420619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420619.setAttribute('id', 'smo420619');
smo420619.addModifier(new VF.Dot(), 0);
smo420641v0ar.push(smo420619);
const smo420620 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420620.setAttribute('id', 'smo420620');
const smo420621 = new VF.ChordSymbol();
smo420621.setAttribute('id', 'smo420621');
smo420621.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo420621.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420621.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3}'));
smo420621.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo420621.setFont('Petaluma Script', 14).setReportWidth(false);
smo420620.addModifier(smo420621, 0);
smo420641v0ar.push(smo420620);
const smo420622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo420622.setAttribute('id', 'smo420622');
const smo4206220acc = new VF.Accidental('b');
smo420622.addModifier(smo4206220acc, 0);
smo420641v0ar.push(smo420622);
const smo420623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420623.setAttribute('id', 'smo420623');
const smo4206230acc = new VF.Accidental('b');
smo420623.addModifier(smo4206230acc, 0);
smo420641v0ar.push(smo420623);
const smo420624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo420624.setAttribute('id', 'smo420624');
smo420641v0ar.push(smo420624);
const smo420625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo420625.setAttribute('id', 'smo420625');
const smo4206250acc = new VF.Accidental('#');
smo420625.addModifier(smo4206250acc, 0);
smo420641v0ar.push(smo420625);
const smo420626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["f#/4/r"]}'))
smo420626.setAttribute('id', 'smo420626');
smo420641v0ar.push(smo420626);
smo420641v0.addTickables(smo420641v0ar)
fmtsmo42064134.joinVoices([smo420641v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421261 = smo420613.getStemDirection();
smo420613.setStemDirection(dirsmo421261);
smo420615.setStemDirection(dirsmo421261);
smo420616.setStemDirection(dirsmo421261);
smo420617.setStemDirection(dirsmo421261);
const smo421261 = new VF.Beam([smo420613,smo420615,smo420616,smo420617]);
const dirsmo421262 = smo420618.getStemDirection();
smo420618.setStemDirection(dirsmo421262);
smo420619.setStemDirection(dirsmo421262);
const smo421262 = new VF.Beam([smo420618,smo420619]);
const dirsmo421263 = smo420620.getStemDirection();
smo420620.setStemDirection(dirsmo421263);
smo420622.setStemDirection(dirsmo421263);
smo420623.setStemDirection(dirsmo421263);
const smo421263 = new VF.Beam([smo420620,smo420622,smo420623]);
const dirsmo421264 = smo420624.getStemDirection();
smo420624.setStemDirection(dirsmo421264);
smo420625.setStemDirection(dirsmo421264);
const smo421264 = new VF.Beam([smo420624,smo420625]);
const smo420627 = new VF.Tuplet([smo420615,smo420616,smo420617], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo420927
fmtsmo42064134.format([smo420641v0], 496);
const stavesmo420641 = new VF.Stave(46, 911.3846153846155, 579);
stavesmo420641.setAttribute('id', 'stavesmo420641');
stavesmo420641.setBegBarType(1);
stavesmo420641.addClef('treble');
const keysmo420641 = new VF.KeySignature('G');
keysmo420641.addToStave(stavesmo420641);
stavesmo420641.setContext(context);
stavesmo420641.draw();
smo420641v0.draw(context, stavesmo420641);
smo421261.setContext(context);
smo421261.draw();
smo421262.setContext(context);
smo421262.draw();
smo421263.setContext(context);
smo421263.draw();
smo421264.setContext(context);
smo421264.draw();
smo420627.setContext(context).draw();
const fmtsmo42066935 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo420669v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420669v0ar = [];
const smo420642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["fn/4/r"]}'))
smo420642.setAttribute('id', 'smo420642');
const smo420643 = new VF.ChordSymbol();
smo420643.setAttribute('id', 'smo420643');
smo420643.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo420643.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420643.setFont('Petaluma Script', 14).setReportWidth(false);
smo420642.addModifier(smo420643, 0);
smo420669v0ar.push(smo420642);
const smo420644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420644.setAttribute('id', 'smo420644');
const smo4206440acc = new VF.Accidental('n');
smo420644.addModifier(smo4206440acc, 0);
smo420669v0ar.push(smo420644);
const smo420645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo420645.setAttribute('id', 'smo420645');
const smo4206450acc = new VF.Accidental('b');
smo420645.addModifier(smo4206450acc, 0);
smo420669v0ar.push(smo420645);
const smo420646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo420646.setAttribute('id', 'smo420646');
const smo4206460acc = new VF.Accidental('b');
smo420646.addModifier(smo4206460acc, 0);
smo420669v0ar.push(smo420646);
const smo420647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420647.setAttribute('id', 'smo420647');
smo420669v0ar.push(smo420647);
const smo420648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420648.setAttribute('id', 'smo420648');
smo420669v0ar.push(smo420648);
const smo420649 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420649.setAttribute('id', 'smo420649');
smo420669v0ar.push(smo420649);
const smo420650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420650.setAttribute('id', 'smo420650');
const smo4206500acc = new VF.Accidental('b');
smo4206500acc.setAsCautionary();
smo420650.addModifier(smo4206500acc, 0);
const smo420651 = new VF.ChordSymbol();
smo420651.setAttribute('id', 'smo420651');
smo420651.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo420651.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420651.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420651.setFont('Petaluma Script', 14).setReportWidth(false);
smo420650.addModifier(smo420651, 0);
smo420669v0ar.push(smo420650);
const smo420652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo420652.setAttribute('id', 'smo420652');
const smo4206520acc = new VF.Accidental('b');
smo420652.addModifier(smo4206520acc, 0);
smo420669v0ar.push(smo420652);
const smo420653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420653.setAttribute('id', 'smo420653');
const smo4206530acc = new VF.Accidental('b');
smo420653.addModifier(smo4206530acc, 0);
smo420669v0ar.push(smo420653);
const smo420654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo420654.setAttribute('id', 'smo420654');
const smo4206540acc = new VF.Accidental('b');
smo420654.addModifier(smo4206540acc, 0);
smo420669v0ar.push(smo420654);
const smo420655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo420655.setAttribute('id', 'smo420655');
const smo4206550acc = new VF.Accidental('b');
smo420655.addModifier(smo4206550acc, 0);
smo420669v0ar.push(smo420655);
smo420669v0.addTickables(smo420669v0ar)
fmtsmo42066935.joinVoices([smo420669v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421267 = smo420644.getStemDirection();
smo420644.setStemDirection(dirsmo421267);
smo420645.setStemDirection(dirsmo421267);
const smo421267 = new VF.Beam([smo420644,smo420645]);
const dirsmo421268 = smo420646.getStemDirection();
smo420646.setStemDirection(dirsmo421268);
smo420647.setStemDirection(dirsmo421268);
smo420648.setStemDirection(dirsmo421268);
smo420649.setStemDirection(dirsmo421268);
const smo421268 = new VF.Beam([smo420646,smo420647,smo420648,smo420649]);
const dirsmo421269 = smo420650.getStemDirection();
smo420650.setStemDirection(dirsmo421269);
smo420652.setStemDirection(dirsmo421269);
smo420653.setStemDirection(dirsmo421269);
const smo421269 = new VF.Beam([smo420650,smo420652,smo420653]);
const dirsmo421270 = smo420654.getStemDirection();
smo420654.setStemDirection(dirsmo421270);
smo420655.setStemDirection(dirsmo421270);
const smo421270 = new VF.Beam([smo420654,smo420655]);
 
// formatting measures in staff group smo420927
fmtsmo42066935.format([smo420669v0], 524);
const stavesmo420669 = new VF.Stave(625, 911.3846153846155, 538);
stavesmo420669.setAttribute('id', 'stavesmo420669');
stavesmo420669.setBegBarType(VF.Barline.type.NONE);
stavesmo420669.setContext(context);
stavesmo420669.draw();
smo420669v0.draw(context, stavesmo420669);
smo421267.setContext(context);
smo421267.draw();
smo421268.setContext(context);
smo421268.draw();
smo421269.setContext(context);
smo421269.draw();
smo421270.setContext(context);
smo421270.draw();
const fmtsmo42070136 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo420701v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420701v0ar = [];
const smo420670 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420670.setAttribute('id', 'smo420670');
const smo420671 = new VF.ChordSymbol();
smo420671.setAttribute('id', 'smo420671');
smo420671.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420671.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420671.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420671.setFont('Petaluma Script', 14).setReportWidth(false);
smo420670.addModifier(smo420671, 0);
smo420701v0ar.push(smo420670);
const smo420672 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420672.setAttribute('id', 'smo420672');
const smo420673 = new VF.Ornament('scoop');
smo420672.addModifier(smo420673, 0);
smo420701v0ar.push(smo420672);
const smo420674 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420674.setAttribute('id', 'smo420674');
const smo4206740acc = new VF.Accidental('b');
smo420674.addModifier(smo4206740acc, 0);
smo420701v0ar.push(smo420674);
const smo420675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420675.setAttribute('id', 'smo420675');
smo420701v0ar.push(smo420675);
const smo420676 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420676.setAttribute('id', 'smo420676');
smo420701v0ar.push(smo420676);
const smo420677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420677.setAttribute('id', 'smo420677');
smo420701v0ar.push(smo420677);
const smo420678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420678.setAttribute('id', 'smo420678');
smo420701v0ar.push(smo420678);
const smo420679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo420679.setAttribute('id', 'smo420679');
smo420701v0ar.push(smo420679);
const smo420680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420680.setAttribute('id', 'smo420680');
const smo420682 = new VF.Ornament('scoop');
smo420680.addModifier(smo420682, 0);
const smo420681 = new VF.ChordSymbol();
smo420681.setAttribute('id', 'smo420681');
smo420681.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo420681.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3}'));
smo420681.setFont('Petaluma Script', 14).setReportWidth(false);
smo420680.addModifier(smo420681, 0);
smo420701v0ar.push(smo420680);
const smo420683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420683.setAttribute('id', 'smo420683');
smo420701v0ar.push(smo420683);
const smo420684 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420684.setAttribute('id', 'smo420684');
smo420701v0ar.push(smo420684);
const smo420685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420685.setAttribute('id', 'smo420685');
smo420701v0ar.push(smo420685);
const smo420686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420686.setAttribute('id', 'smo420686');
const smo4206860acc = new VF.Accidental('n');
smo420686.addModifier(smo4206860acc, 0);
smo420701v0ar.push(smo420686);
smo420701v0.addTickables(smo420701v0ar)
fmtsmo42070136.joinVoices([smo420701v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421279 = smo420672.getStemDirection();
smo420672.setStemDirection(dirsmo421279);
smo420674.setStemDirection(dirsmo421279);
const smo421279 = new VF.Beam([smo420672,smo420674]);
const dirsmo421280 = smo420675.getStemDirection();
smo420675.setStemDirection(dirsmo421280);
smo420676.setStemDirection(dirsmo421280);
smo420677.setStemDirection(dirsmo421280);
smo420678.setStemDirection(dirsmo421280);
const smo421280 = new VF.Beam([smo420675,smo420676,smo420677,smo420678]);
const dirsmo421281 = smo420680.getStemDirection();
smo420680.setStemDirection(dirsmo421281);
smo420683.setStemDirection(dirsmo421281);
const smo421281 = new VF.Beam([smo420680,smo420683]);
const dirsmo421282 = smo420684.getStemDirection();
smo420684.setStemDirection(dirsmo421282);
smo420685.setStemDirection(dirsmo421282);
smo420686.setStemDirection(dirsmo421282);
const smo421282 = new VF.Beam([smo420684,smo420685,smo420686]);
const smo420687 = new VF.Tuplet([smo420675,smo420676,smo420677], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo420927
fmtsmo42070136.format([smo420701v0], 405);
const stavesmo420701 = new VF.Stave(46, 1082.3846153846155, 488);
stavesmo420701.setAttribute('id', 'stavesmo420701');
stavesmo420701.setBegBarType(1);
stavesmo420701.addClef('treble');
const keysmo420701 = new VF.KeySignature('G');
keysmo420701.addToStave(stavesmo420701);
stavesmo420701.setContext(context);
stavesmo420701.draw();
smo420701v0.draw(context, stavesmo420701);
smo421279.setContext(context);
smo421279.draw();
smo421280.setContext(context);
smo421280.draw();
smo421281.setContext(context);
smo421281.draw();
smo421282.setContext(context);
smo421282.draw();
smo420687.setContext(context).draw();
const fmtsmo42074337 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo420743v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420743v0ar = [];
const smo420702 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo420702.setAttribute('id', 'smo420702');
const smo420703 = new VF.ChordSymbol();
smo420703.setAttribute('id', 'smo420703');
smo420703.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo420703.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420703.setFont('Petaluma Script', 14).setReportWidth(false);
smo420702.addModifier(smo420703, 0);
smo420743v0ar.push(smo420702);
const smo420704 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo420704.setAttribute('id', 'smo420704');
const smo4207040acc = new VF.Accidental('b');
smo420704.addModifier(smo4207040acc, 0);
smo420743v0ar.push(smo420704);
const smo420705 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo420705.setAttribute('id', 'smo420705');
const smo4207050acc = new VF.Accidental('b');
smo420705.addModifier(smo4207050acc, 0);
smo420743v0ar.push(smo420705);
const smo420706 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo420706.setAttribute('id', 'smo420706');
const smo4207060acc = new VF.Accidental('b');
smo420706.addModifier(smo4207060acc, 0);
smo420743v0ar.push(smo420706);
const smo420707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo420707.setAttribute('id', 'smo420707');
const smo4207070acc = new VF.Accidental('n');
smo420707.addModifier(smo4207070acc, 0);
smo420743v0ar.push(smo420707);
const smo420708 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420708.setAttribute('id', 'smo420708');
const smo4207080acc = new VF.Accidental('b');
smo420708.addModifier(smo4207080acc, 0);
smo420743v0ar.push(smo420708);
const smo420709 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420709.setAttribute('id', 'smo420709');
smo420743v0ar.push(smo420709);
const smo420710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo420710.setAttribute('id', 'smo420710');
smo420743v0ar.push(smo420710);
const smo420711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420711.setAttribute('id', 'smo420711');
smo420743v0ar.push(smo420711);
const smo420712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["an/4/r"]}'))
smo420712.setAttribute('id', 'smo420712');
smo420743v0ar.push(smo420712);
const smo420713 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420713.setAttribute('id', 'smo420713');
smo420743v0ar.push(smo420713);
const smo420714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo420714.setAttribute('id', 'smo420714');
const smo4207140acc = new VF.Accidental('#');
smo420714.addModifier(smo4207140acc, 0);
const smo420715 = new VF.ChordSymbol();
smo420715.setAttribute('id', 'smo420715');
smo420715.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo420715.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420715.setFont('Petaluma Script', 14).setReportWidth(false);
smo420714.addModifier(smo420715, 0);
smo420743v0ar.push(smo420714);
const smo420716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo420716.setAttribute('id', 'smo420716');
smo420743v0ar.push(smo420716);
const smo420717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420717.setAttribute('id', 'smo420717');
smo420743v0ar.push(smo420717);
const smo420718 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420718.setAttribute('id', 'smo420718');
smo420743v0ar.push(smo420718);
const smo420719 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo420719.setAttribute('id', 'smo420719');
const smo4207190acc = new VF.Accidental('b');
smo4207190acc.setAsCautionary();
smo420719.addModifier(smo4207190acc, 0);
smo420743v0ar.push(smo420719);
const smo420720 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo420720.setAttribute('id', 'smo420720');
const smo4207200acc = new VF.Accidental('n');
smo420720.addModifier(smo4207200acc, 0);
smo420743v0ar.push(smo420720);
const smo420721 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420721.setAttribute('id', 'smo420721');
smo420743v0ar.push(smo420721);
const smo420722 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420722.setAttribute('id', 'smo420722');
smo420743v0ar.push(smo420722);
smo420743v0.addTickables(smo420743v0ar)
fmtsmo42074337.joinVoices([smo420743v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421285 = smo420705.getStemDirection();
smo420705.setStemDirection(dirsmo421285);
smo420706.setStemDirection(dirsmo421285);
smo420707.setStemDirection(dirsmo421285);
const smo421285 = new VF.Beam([smo420705,smo420706,smo420707]);
const dirsmo421286 = smo420708.getStemDirection();
smo420708.setStemDirection(dirsmo421286);
smo420709.setStemDirection(dirsmo421286);
smo420711.setStemDirection(dirsmo421286);
smo420713.setStemDirection(dirsmo421286);
const smo421286 = new VF.Beam([smo420708,smo420709,smo420711,smo420713]);
const dirsmo421287 = smo420714.getStemDirection();
smo420714.setStemDirection(dirsmo421287);
smo420716.setStemDirection(dirsmo421287);
smo420717.setStemDirection(dirsmo421287);
smo420718.setStemDirection(dirsmo421287);
const smo421287 = new VF.Beam([smo420714,smo420716,smo420717,smo420718]);
const dirsmo421288 = smo420719.getStemDirection();
smo420719.setStemDirection(dirsmo421288);
smo420720.setStemDirection(dirsmo421288);
smo420721.setStemDirection(dirsmo421288);
smo420722.setStemDirection(dirsmo421288);
const smo421288 = new VF.Beam([smo420719,smo420720,smo420721,smo420722]);
const smo420723 = new VF.Tuplet([smo420702,smo420704], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo420724 = new VF.Tuplet([smo420705,smo420706,smo420707], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo420725 = new VF.Tuplet([smo420708,smo420709,smo420710], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo420726 = new VF.Tuplet([smo420711,smo420712,smo420713], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo420727 = new VF.Tuplet([smo420716,smo420717,smo420718], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo420728 = new VF.Tuplet([smo420719,smo420720], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo420729 = new VF.Tuplet([smo420721,smo420722], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo420927
fmtsmo42074337.format([smo420743v0], 614);
const stavesmo420743 = new VF.Stave(534, 1082.3846153846155, 628);
stavesmo420743.setAttribute('id', 'stavesmo420743');
stavesmo420743.setBegBarType(VF.Barline.type.NONE);
stavesmo420743.setContext(context);
stavesmo420743.draw();
smo420743v0.draw(context, stavesmo420743);
smo421285.setContext(context);
smo421285.draw();
smo421286.setContext(context);
smo421286.draw();
smo421287.setContext(context);
smo421287.draw();
smo421288.setContext(context);
smo421288.draw();
smo420723.setContext(context).draw();
smo420724.setContext(context).draw();
smo420725.setContext(context).draw();
smo420726.setContext(context).draw();
smo420727.setContext(context).draw();
smo420728.setContext(context).draw();
smo420729.setContext(context).draw();
const fmtsmo42077238 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo420772v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420772v0ar = [];
const smo420744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo420746 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo420746.setAttribute('id', 'smo420746');
const acc0smo420746 = new VF.Accidental('#');
smo420746.addModifier(acc0smo420746, 0)
const ggrpsmo420744 = new VF.GraceNoteGroup([smo420746]);
ggrpsmo420744.beamNotes();
smo420744.addModifier(ggrpsmo420744, 0);
smo420744.setAttribute('id', 'smo420744');
const smo420745 = new VF.ChordSymbol();
smo420745.setAttribute('id', 'smo420745');
smo420745.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420745.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420745.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420745.setFont('Petaluma Script', 14).setReportWidth(false);
smo420744.addModifier(smo420745, 0);
smo420772v0ar.push(smo420744);
const smo420747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420747.setAttribute('id', 'smo420747');
smo420772v0ar.push(smo420747);
const smo420748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420748.setAttribute('id', 'smo420748');
const smo4207480acc = new VF.Accidental('b');
smo420748.addModifier(smo4207480acc, 0);
smo420772v0ar.push(smo420748);
const smo420749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420749.setAttribute('id', 'smo420749');
smo420772v0ar.push(smo420749);
const smo420750 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420750.setAttribute('id', 'smo420750');
smo420772v0ar.push(smo420750);
const smo420751 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo420752 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo420752.setAttribute('id', 'smo420752');
const acc0smo420752 = new VF.Accidental('#');
smo420752.addModifier(acc0smo420752, 0)
const ggrpsmo420751 = new VF.GraceNoteGroup([smo420752]);
ggrpsmo420751.beamNotes();
smo420751.addModifier(ggrpsmo420751, 0);
smo420751.setAttribute('id', 'smo420751');
smo420772v0ar.push(smo420751);
const smo420753 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420753.setAttribute('id', 'smo420753');
const smo420754 = new VF.ChordSymbol();
smo420754.setAttribute('id', 'smo420754');
smo420754.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420754.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420754.setFont('Petaluma Script', 14).setReportWidth(false);
smo420753.addModifier(smo420754, 0);
smo420772v0ar.push(smo420753);
const smo420755 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo420755.setAttribute('id', 'smo420755');
const smo4207550acc = new VF.Accidental('b');
smo420755.addModifier(smo4207550acc, 0);
smo420772v0ar.push(smo420755);
const smo420756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo420756.setAttribute('id', 'smo420756');
smo420772v0ar.push(smo420756);
const smo420757 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420757.setAttribute('id', 'smo420757');
smo420772v0ar.push(smo420757);
const smo420758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420758.setAttribute('id', 'smo420758');
smo420772v0ar.push(smo420758);
smo420772v0.addTickables(smo420772v0ar)
fmtsmo42077238.joinVoices([smo420772v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421297 = smo420744.getStemDirection();
smo420744.setStemDirection(dirsmo421297);
smo420747.setStemDirection(dirsmo421297);
smo420748.setStemDirection(dirsmo421297);
const smo421297 = new VF.Beam([smo420744,smo420747,smo420748]);
const dirsmo421298 = smo420749.getStemDirection();
smo420749.setStemDirection(dirsmo421298);
smo420750.setStemDirection(dirsmo421298);
smo420751.setStemDirection(dirsmo421298);
const smo421298 = new VF.Beam([smo420749,smo420750,smo420751]);
const dirsmo421299 = smo420753.getStemDirection();
smo420753.setStemDirection(dirsmo421299);
smo420755.setStemDirection(dirsmo421299);
smo420756.setStemDirection(dirsmo421299);
const smo421299 = new VF.Beam([smo420753,smo420755,smo420756]);
const dirsmo421300 = smo420757.getStemDirection();
smo420757.setStemDirection(dirsmo421300);
smo420758.setStemDirection(dirsmo421300);
const smo421300 = new VF.Beam([smo420757,smo420758]);
 
// formatting measures in staff group smo420927
fmtsmo42077238.format([smo420772v0], 349);
const stavesmo420772 = new VF.Stave(46, 1233.3846153846155, 432);
stavesmo420772.setAttribute('id', 'stavesmo420772');
stavesmo420772.setBegBarType(1);
stavesmo420772.addClef('treble');
const keysmo420772 = new VF.KeySignature('G');
keysmo420772.addToStave(stavesmo420772);
stavesmo420772.setContext(context);
stavesmo420772.draw();
smo420772v0.draw(context, stavesmo420772);
smo421297.setContext(context);
smo421297.draw();
smo421298.setContext(context);
smo421298.draw();
smo421299.setContext(context);
smo421299.draw();
smo421300.setContext(context);
smo421300.draw();
const fmtsmo42079539 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo420795v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420795v0ar = [];
const smo420773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420773.setAttribute('id', 'smo420773');
const smo420774 = new VF.ChordSymbol();
smo420774.setAttribute('id', 'smo420774');
smo420774.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo420774.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420774.setFont('Petaluma Script', 14).setReportWidth(false);
smo420773.addModifier(smo420774, 0);
smo420795v0ar.push(smo420773);
const smo420775 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420775.setAttribute('id', 'smo420775');
smo420795v0ar.push(smo420775);
const smo420776 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420776.setAttribute('id', 'smo420776');
const smo420777 = new VF.ChordSymbol();
smo420777.setAttribute('id', 'smo420777');
smo420777.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo420777.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420777.setFont('Petaluma Script', 14).setReportWidth(false);
smo420776.addModifier(smo420777, 0);
smo420795v0ar.push(smo420776);
const smo420778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo420778.setAttribute('id', 'smo420778');
smo420795v0ar.push(smo420778);
const smo420779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420779.setAttribute('id', 'smo420779');
smo420795v0ar.push(smo420779);
const smo420780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo420780.setAttribute('id', 'smo420780');
const smo4207800acc = new VF.Accidental('n');
smo420780.addModifier(smo4207800acc, 0);
smo420795v0ar.push(smo420780);
const smo420781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420781.setAttribute('id', 'smo420781');
const smo4207810acc = new VF.Accidental('b');
smo420781.addModifier(smo4207810acc, 0);
smo420795v0ar.push(smo420781);
smo420795v0.addTickables(smo420795v0ar)
fmtsmo42079539.joinVoices([smo420795v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421303 = smo420776.getStemDirection();
smo420776.setStemDirection(dirsmo421303);
smo420778.setStemDirection(dirsmo421303);
smo420779.setStemDirection(dirsmo421303);
const smo421303 = new VF.Beam([smo420776,smo420778,smo420779]);
const dirsmo421304 = smo420780.getStemDirection();
smo420780.setStemDirection(dirsmo421304);
smo420781.setStemDirection(dirsmo421304);
const smo421304 = new VF.Beam([smo420780,smo420781]);
 
// formatting measures in staff group smo420927
fmtsmo42079539.format([smo420795v0], 240);
const stavesmo420795 = new VF.Stave(478, 1233.3846153846155, 254);
stavesmo420795.setAttribute('id', 'stavesmo420795');
stavesmo420795.setBegBarType(VF.Barline.type.NONE);
stavesmo420795.setContext(context);
stavesmo420795.draw();
smo420795v0.draw(context, stavesmo420795);
smo421303.setContext(context);
smo421303.draw();
smo421304.setContext(context);
smo421304.draw();
const fmtsmo42082540 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo420825v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420825v0ar = [];
const smo420796 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420796.setAttribute('id', 'smo420796');
const smo420797 = new VF.ChordSymbol();
smo420797.setAttribute('id', 'smo420797');
smo420797.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo420797.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420797.setFont('Petaluma Script', 14).setReportWidth(false);
smo420796.addModifier(smo420797, 0);
smo420825v0ar.push(smo420796);
const smo420798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420798.setAttribute('id', 'smo420798');
smo420825v0ar.push(smo420798);
const smo420799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo420799.setAttribute('id', 'smo420799');
const smo4207990acc = new VF.Accidental('b');
smo420799.addModifier(smo4207990acc, 0);
smo420825v0ar.push(smo420799);
const smo420800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420800.setAttribute('id', 'smo420800');
const smo4208000acc = new VF.Accidental('n');
smo420800.addModifier(smo4208000acc, 0);
smo420825v0ar.push(smo420800);
const smo420801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo420801.setAttribute('id', 'smo420801');
smo420825v0ar.push(smo420801);
const smo420802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n"]}'))
smo420802.setAttribute('id', 'smo420802');
const smo4208020acc = new VF.Accidental('b');
smo420802.addModifier(smo4208020acc, 0);
const smo420803 = new VF.ChordSymbol();
smo420803.setAttribute('id', 'smo420803');
smo420803.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo420803.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420803.setFont('Petaluma Script', 14).setReportWidth(false);
smo420802.addModifier(smo420803, 0);
smo420825v0ar.push(smo420802);
const smo420804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo420804.setAttribute('id', 'smo420804');
const smo4208040acc = new VF.Accidental('b');
smo420804.addModifier(smo4208040acc, 0);
smo420825v0ar.push(smo420804);
const smo420805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420805.setAttribute('id', 'smo420805');
const smo4208050acc = new VF.Accidental('n');
smo420805.addModifier(smo4208050acc, 0);
smo420825v0ar.push(smo420805);
const smo420806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo420806.setAttribute('id', 'smo420806');
const smo4208060acc = new VF.Accidental('b');
smo420806.addModifier(smo4208060acc, 0);
smo420825v0ar.push(smo420806);
const smo420807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420807.setAttribute('id', 'smo420807');
smo420825v0ar.push(smo420807);
const smo420808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420808.setAttribute('id', 'smo420808');
smo420825v0ar.push(smo420808);
const smo420809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo420809.setAttribute('id', 'smo420809');
smo420825v0ar.push(smo420809);
const smo420810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420810.setAttribute('id', 'smo420810');
const smo4208100acc = new VF.Accidental('n');
smo420810.addModifier(smo4208100acc, 0);
smo420825v0ar.push(smo420810);
const smo420811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo420811.setAttribute('id', 'smo420811');
smo420825v0ar.push(smo420811);
smo420825v0.addTickables(smo420825v0ar)
fmtsmo42082540.joinVoices([smo420825v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421307 = smo420798.getStemDirection();
smo420798.setStemDirection(dirsmo421307);
smo420799.setStemDirection(dirsmo421307);
smo420800.setStemDirection(dirsmo421307);
smo420801.setStemDirection(dirsmo421307);
const smo421307 = new VF.Beam([smo420798,smo420799,smo420800,smo420801]);
const dirsmo421308 = smo420802.getStemDirection();
smo420802.setStemDirection(dirsmo421308);
smo420804.setStemDirection(dirsmo421308);
smo420805.setStemDirection(dirsmo421308);
smo420806.setStemDirection(dirsmo421308);
smo420807.setStemDirection(dirsmo421308);
const smo421308 = new VF.Beam([smo420802,smo420804,smo420805,smo420806,smo420807]);
const dirsmo421309 = smo420808.getStemDirection();
smo420808.setStemDirection(dirsmo421309);
smo420809.setStemDirection(dirsmo421309);
smo420810.setStemDirection(dirsmo421309);
smo420811.setStemDirection(dirsmo421309);
const smo421309 = new VF.Beam([smo420808,smo420809,smo420810,smo420811]);
 
// formatting measures in staff group smo420927
fmtsmo42082540.format([smo420825v0], 417);
const stavesmo420825 = new VF.Stave(732, 1233.3846153846155, 431);
stavesmo420825.setAttribute('id', 'stavesmo420825');
stavesmo420825.setBegBarType(VF.Barline.type.NONE);
stavesmo420825.setContext(context);
stavesmo420825.draw();
smo420825v0.draw(context, stavesmo420825);
smo421307.setContext(context);
smo421307.draw();
smo421308.setContext(context);
smo421308.draw();
smo421309.setContext(context);
smo421309.draw();
const fmtsmo42085541 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo420855v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420855v0ar = [];
const smo420826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo420826.setAttribute('id', 'smo420826');
const smo420827 = new VF.ChordSymbol();
smo420827.setAttribute('id', 'smo420827');
smo420827.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420827.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420827.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420827.setFont('Petaluma Script', 14).setReportWidth(false);
smo420826.addModifier(smo420827, 0);
smo420855v0ar.push(smo420826);
const smo420828 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo420828.setAttribute('id', 'smo420828');
smo420855v0ar.push(smo420828);
const smo420829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420829.setAttribute('id', 'smo420829');
smo420855v0ar.push(smo420829);
const smo420830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420830.setAttribute('id', 'smo420830');
const smo4208300acc = new VF.Accidental('b');
smo420830.addModifier(smo4208300acc, 0);
smo420855v0ar.push(smo420830);
const smo420831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420831.setAttribute('id', 'smo420831');
smo420855v0ar.push(smo420831);
const smo420832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo420832.setAttribute('id', 'smo420832');
smo420855v0ar.push(smo420832);
const smo420833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420833.setAttribute('id', 'smo420833');
smo420855v0ar.push(smo420833);
const smo420834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420834.setAttribute('id', 'smo420834');
smo420855v0ar.push(smo420834);
const smo420835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420835.setAttribute('id', 'smo420835');
smo420855v0ar.push(smo420835);
const smo420836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo420836.setAttribute('id', 'smo420836');
const smo420838 = new VF.Ornament('scoop');
smo420836.addModifier(smo420838, 0);
const smo420837 = new VF.ChordSymbol();
smo420837.setAttribute('id', 'smo420837');
smo420837.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420837.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420837.setFont('Petaluma Script', 14).setReportWidth(false);
smo420836.addModifier(smo420837, 0);
smo420855v0ar.push(smo420836);
const smo420839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420839.setAttribute('id', 'smo420839');
smo420855v0ar.push(smo420839);
const smo420840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo420840.setAttribute('id', 'smo420840');
smo420855v0ar.push(smo420840);
smo420855v0.addTickables(smo420855v0ar)
fmtsmo42085541.joinVoices([smo420855v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421317 = smo420826.getStemDirection();
smo420826.setStemDirection(dirsmo421317);
smo420828.setStemDirection(dirsmo421317);
smo420829.setStemDirection(dirsmo421317);
smo420830.setStemDirection(dirsmo421317);
const smo421317 = new VF.Beam([smo420826,smo420828,smo420829,smo420830]);
const dirsmo421318 = smo420831.getStemDirection();
smo420831.setStemDirection(dirsmo421318);
smo420832.setStemDirection(dirsmo421318);
smo420833.setStemDirection(dirsmo421318);
smo420834.setStemDirection(dirsmo421318);
smo420835.setStemDirection(dirsmo421318);
const smo421318 = new VF.Beam([smo420831,smo420832,smo420833,smo420834,smo420835]);
const dirsmo421319 = smo420836.getStemDirection();
smo420836.setStemDirection(dirsmo421319);
smo420839.setStemDirection(dirsmo421319);
const smo421319 = new VF.Beam([smo420836,smo420839]);
const smo420841 = new VF.Tuplet([smo420831,smo420832,smo420833], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo420927
fmtsmo42085541.format([smo420855v0], 294);
const stavesmo420855 = new VF.Stave(46, 1379.3846153846155, 377);
stavesmo420855.setAttribute('id', 'stavesmo420855');
stavesmo420855.setBegBarType(1);
stavesmo420855.addClef('treble');
const keysmo420855 = new VF.KeySignature('G');
keysmo420855.addToStave(stavesmo420855);
stavesmo420855.setContext(context);
stavesmo420855.draw();
smo420855v0.draw(context, stavesmo420855);
smo421317.setContext(context);
smo421317.draw();
smo421318.setContext(context);
smo421318.draw();
smo421319.setContext(context);
smo421319.draw();
smo420841.setContext(context).draw();
const fmtsmo42088542 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo420885v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420885v0ar = [];
const smo420856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420856.setAttribute('id', 'smo420856');
smo420885v0ar.push(smo420856);
const smo420857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo420857.setAttribute('id', 'smo420857');
const smo420858 = new VF.ChordSymbol();
smo420858.setAttribute('id', 'smo420858');
smo420858.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo420858.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo420858.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420858.setFont('Petaluma Script', 14).setReportWidth(false);
smo420857.addModifier(smo420858, 0);
smo420885v0ar.push(smo420857);
const smo420859 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420859.setAttribute('id', 'smo420859');
smo420885v0ar.push(smo420859);
const smo420860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo420860.setAttribute('id', 'smo420860');
const smo4208600acc = new VF.Accidental('b');
smo420860.addModifier(smo4208600acc, 0);
smo420885v0ar.push(smo420860);
const smo420861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo420861.setAttribute('id', 'smo420861');
smo420885v0ar.push(smo420861);
const smo420862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo420862.setAttribute('id', 'smo420862');
smo420885v0ar.push(smo420862);
const smo420863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo420863.setAttribute('id', 'smo420863');
smo420885v0ar.push(smo420863);
const smo420864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo420864.setAttribute('id', 'smo420864');
smo420885v0ar.push(smo420864);
const smo420865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo420865.setAttribute('id', 'smo420865');
const smo420866 = new VF.ChordSymbol();
smo420866.setAttribute('id', 'smo420866');
smo420866.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo420866.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo420866.setFont('Petaluma Script', 14).setReportWidth(false);
smo420865.addModifier(smo420866, 0);
smo420885v0ar.push(smo420865);
const smo420867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo420867.setAttribute('id', 'smo420867');
smo420885v0ar.push(smo420867);
const smo420868 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420868.setAttribute('id', 'smo420868');
smo420885v0ar.push(smo420868);
const smo420869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo420869.setAttribute('id', 'smo420869');
smo420885v0ar.push(smo420869);
const smo420870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo420870.setAttribute('id', 'smo420870');
smo420885v0ar.push(smo420870);
const smo420871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo420871.setAttribute('id', 'smo420871');
smo420885v0ar.push(smo420871);
smo420885v0.addTickables(smo420885v0ar)
fmtsmo42088542.joinVoices([smo420885v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
const dirsmo421322 = smo420861.getStemDirection();
smo420861.setStemDirection(dirsmo421322);
smo420862.setStemDirection(dirsmo421322);
smo420863.setStemDirection(dirsmo421322);
smo420864.setStemDirection(dirsmo421322);
const smo421322 = new VF.Beam([smo420861,smo420862,smo420863,smo420864]);
const dirsmo421323 = smo420865.getStemDirection();
smo420865.setStemDirection(dirsmo421323);
smo420867.setStemDirection(dirsmo421323);
smo420868.setStemDirection(dirsmo421323);
const smo421323 = new VF.Beam([smo420865,smo420867,smo420868]);
 
// formatting measures in staff group smo420927
fmtsmo42088542.format([smo420885v0], 310);
const stavesmo420885 = new VF.Stave(423, 1379.3846153846155, 325);
stavesmo420885.setAttribute('id', 'stavesmo420885');
stavesmo420885.setBegBarType(VF.Barline.type.NONE);
stavesmo420885.setEndBarType(2);
stavesmo420885.setContext(context);
stavesmo420885.draw();
smo420885v0.draw(context, stavesmo420885);
smo421322.setContext(context);
smo421322.draw();
smo421323.setContext(context);
smo421323.draw();
const fmtsmo42090343 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo420903v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo420903v0ar = [];
const smo420886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo420886.setAttribute('id', 'smo420886');
smo420903v0ar.push(smo420886);
const smo420887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420887.setAttribute('id', 'smo420887');
smo420903v0ar.push(smo420887);
const smo420888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420888.setAttribute('id', 'smo420888');
smo420903v0ar.push(smo420888);
const smo420889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo420889.setAttribute('id', 'smo420889');
smo420903v0ar.push(smo420889);
smo420903v0.addTickables(smo420903v0ar)
fmtsmo42090343.joinVoices([smo420903v0]);
// create beam groups and tuplets for format grp smo420927 before formatting
 
// formatting measures in staff group smo420927
fmtsmo42090343.format([smo420903v0], 194);
const stavesmo420903 = new VF.Stave(748, 1379.3846153846155, 208);
stavesmo420903.setAttribute('id', 'stavesmo420903');
stavesmo420903.setBegBarType(VF.Barline.type.NONE);
stavesmo420903.setContext(context);
stavesmo420903.draw();
smo420903v0.draw(context, stavesmo420903);
// modifier from 0-36-0-11 to 0-36-0-12
const smo421465 = new VF.Curve(smo420685, smo420686, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"position_end":2}'));
smo421465.setContext(context).draw();
// modifier from 0-36-0-9 to 0-36-0-10
const smo421466 = new VF.StaveTie({ first_note: smo420683, last_note: smo420684, 
          firstNote: smo420683, lastNote: smo420684, first_indices: [0], last_indices: [0]});
smo421466.setContext(context).draw();
// modifier from 0-25-0-8 to 0-25-0-9
const smo421467 = new VF.StaveTie({ first_note: smo420348, last_note: smo420351, 
          firstNote: smo420348, lastNote: smo420351, first_indices: [0], last_indices: [0]});
smo421467.setContext(context).draw();
// modifier from 0-25-0-12 to 0-25-0-13
const smo421468 = new VF.StaveTie({ first_note: smo420354, last_note: smo420355, 
          firstNote: smo420354, lastNote: smo420355, first_indices: [0], last_indices: [0]});
smo421468.setContext(context).draw();
// modifier from 0-26-0-10 to 0-26-0-11
const smo421469 = new VF.StaveTie({ first_note: smo420386, last_note: smo420387, 
          firstNote: smo420386, lastNote: smo420387, first_indices: [0], last_indices: [0]});
smo421469.setContext(context).draw();
// modifier from 0-29-0-1 to 0-29-0-2
const smo421470 = new VF.StaveTie({ first_note: smo420472, last_note: smo420473, 
          firstNote: smo420472, lastNote: smo420473, first_indices: [0], last_indices: [0]});
smo421470.setContext(context).draw();
}
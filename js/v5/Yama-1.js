// @@ Yama p 2/2 ((as played by Lee Morgan)) by Lee Morgan
function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = VexFlow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1255 1625');
//
// create the musical objects
VF.setFonts("Petaluma","Bravura","Gonville","Custom");
const fmtsmo41810028 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo418100v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418100v0ar = [];
const smo418069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418069.setAttribute('id', 'smo418069');
const smo418070 = new VF.ChordSymbol();
smo418070.setAttribute('id', 'smo418070');
smo418070.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418070.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418070.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418070.setFont('Petaluma Script', 14).setReportWidth(false);
smo418069.addModifier(smo418070, 0);
smo418100v0ar.push(smo418069);
const smo418071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo418071.setAttribute('id', 'smo418071');
smo418100v0ar.push(smo418071);
const smo418072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418072.setAttribute('id', 'smo418072');
smo418100v0ar.push(smo418072);
const smo418073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418073.setAttribute('id', 'smo418073');
smo418100v0ar.push(smo418073);
const smo418074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418074.setAttribute('id', 'smo418074');
const smo418075 = new VF.ChordSymbol();
smo418075.setAttribute('id', 'smo418075');
smo418075.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo418075.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418075.setFont('Petaluma Script', 14).setReportWidth(false);
smo418074.addModifier(smo418075, 0);
smo418100v0ar.push(smo418074);
const smo418076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418076.setAttribute('id', 'smo418076');
smo418100v0ar.push(smo418076);
const smo418077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
const smo418078 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo418078.setAttribute('id', 'smo418078');
const acc0smo418078 = new VF.Accidental('#');
smo418078.addModifier(acc0smo418078, 0)
const ggrpsmo418077 = new VF.GraceNoteGroup([smo418078]);
ggrpsmo418077.beamNotes();
smo418077.addModifier(ggrpsmo418077, 0);
smo418077.setAttribute('id', 'smo418077');
smo418100v0ar.push(smo418077);
const smo418079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo418079.setAttribute('id', 'smo418079');
smo418100v0ar.push(smo418079);
const smo418080 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418080.setAttribute('id', 'smo418080');
smo418100v0ar.push(smo418080);
const smo418081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418081.setAttribute('id', 'smo418081');
const smo4180810acc = new VF.Accidental('b');
smo418081.addModifier(smo4180810acc, 0);
smo418100v0ar.push(smo418081);
const smo418082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418082.setAttribute('id', 'smo418082');
smo418100v0ar.push(smo418082);
const smo418083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418083.setAttribute('id', 'smo418083');
smo418100v0ar.push(smo418083);
smo418100v0.addTickables(smo418100v0ar)
fmtsmo41810028.joinVoices([smo418100v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418850 = smo418072.getStemDirection();
smo418072.setStemDirection(dirsmo418850);
smo418073.setStemDirection(dirsmo418850);
const smo418850 = new VF.Beam([smo418072,smo418073]);
const dirsmo418851 = smo418074.getStemDirection();
smo418074.setStemDirection(dirsmo418851);
smo418076.setStemDirection(dirsmo418851);
const smo418851 = new VF.Beam([smo418074,smo418076]);
const dirsmo418852 = smo418077.getStemDirection();
smo418077.setStemDirection(dirsmo418852);
smo418080.setStemDirection(dirsmo418852);
smo418081.setStemDirection(dirsmo418852);
smo418082.setStemDirection(dirsmo418852);
smo418083.setStemDirection(dirsmo418852);
const smo418852 = new VF.Beam([smo418077,smo418080,smo418081,smo418082,smo418083]);
const smo418084 = new VF.Tuplet([smo418071,smo418072,smo418073], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo418085 = new VF.Tuplet([smo418077,smo418079,smo418080], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo418086 = new VF.Tuplet([smo418081,smo418082,smo418083], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo418559
fmtsmo41810028.format([smo418100v0], 299);
const stavesmo418100 = new VF.Stave(46, 261.3846153846155, 369);
stavesmo418100.setAttribute('id', 'stavesmo418100');
stavesmo418100.setBegBarType(1);
stavesmo418100.addClef('treble');
const keysmo418100 = new VF.KeySignature('G');
keysmo418100.addToStave(stavesmo418100);
stavesmo418100.setContext(context);
stavesmo418100.draw();
smo418100v0.draw(context, stavesmo418100);
smo418850.setContext(context);
smo418850.draw();
smo418851.setContext(context);
smo418851.draw();
smo418852.setContext(context);
smo418852.draw();
smo418084.setContext(context).draw();
smo418085.setContext(context).draw();
smo418086.setContext(context).draw();
const fmtsmo41812529 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo418125v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418125v0ar = [];
const smo418101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
const smo418103 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo418103.setAttribute('id', 'smo418103');
const ggrpsmo418101 = new VF.GraceNoteGroup([smo418103]);
ggrpsmo418101.beamNotes();
smo418101.addModifier(ggrpsmo418101, 0);
smo418101.setAttribute('id', 'smo418101');
const smo418102 = new VF.ChordSymbol();
smo418102.setAttribute('id', 'smo418102');
smo418102.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418102.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418102.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418102.setFont('Petaluma Script', 14).setReportWidth(false);
smo418101.addModifier(smo418102, 0);
smo418125v0ar.push(smo418101);
const smo418104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418104.setAttribute('id', 'smo418104');
smo418125v0ar.push(smo418104);
const smo418105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418105.setAttribute('id', 'smo418105');
smo418125v0ar.push(smo418105);
const smo418106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418106.setAttribute('id', 'smo418106');
const smo418107 = new VF.ChordSymbol();
smo418107.setAttribute('id', 'smo418107');
smo418107.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo418107.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418107.setFont('Petaluma Script', 14).setReportWidth(false);
smo418106.addModifier(smo418107, 0);
smo418125v0ar.push(smo418106);
const smo418108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo418108.setAttribute('id', 'smo418108');
smo418125v0ar.push(smo418108);
const smo418109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo418109.setAttribute('id', 'smo418109');
const smo4181090acc = new VF.Accidental('b');
smo418109.addModifier(smo4181090acc, 0);
smo418125v0ar.push(smo418109);
const smo418110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418110.setAttribute('id', 'smo418110');
smo418125v0ar.push(smo418110);
const smo418111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418111.setAttribute('id', 'smo418111');
smo418125v0ar.push(smo418111);
smo418125v0.addTickables(smo418125v0ar)
fmtsmo41812529.joinVoices([smo418125v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418855 = smo418101.getStemDirection();
smo418101.setStemDirection(dirsmo418855);
smo418104.setStemDirection(dirsmo418855);
const smo418855 = new VF.Beam([smo418101,smo418104]);
const dirsmo418856 = smo418108.getStemDirection();
smo418108.setStemDirection(dirsmo418856);
smo418109.setStemDirection(dirsmo418856);
smo418110.setStemDirection(dirsmo418856);
smo418111.setStemDirection(dirsmo418856);
const smo418856 = new VF.Beam([smo418108,smo418109,smo418110,smo418111]);
 
// formatting measures in staff group smo418559
fmtsmo41812529.format([smo418125v0], 228);
const stavesmo418125 = new VF.Stave(415, 261.3846153846155, 243);
stavesmo418125.setAttribute('id', 'stavesmo418125');
stavesmo418125.setBegBarType(VF.Barline.type.NONE);
stavesmo418125.setEndBarType(2);
stavesmo418125.setContext(context);
stavesmo418125.draw();
smo418125v0.draw(context, stavesmo418125);
smo418855.setContext(context);
smo418855.draw();
smo418856.setContext(context);
smo418856.draw();
const fmtsmo41814930 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo418149v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418149v0ar = [];
const smo418126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo418126.setAttribute('id', 'smo418126');
const smo418127 = new VF.ChordSymbol();
smo418127.setAttribute('id', 'smo418127');
smo418127.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418127.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418127.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418127.setFont('Petaluma Script', 14).setReportWidth(false);
smo418126.addModifier(smo418127, 0);
smo418149v0ar.push(smo418126);
const smo418128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418128.setAttribute('id', 'smo418128');
smo418128.addModifier(new VF.Dot(), 0);
smo418149v0ar.push(smo418128);
const smo418129 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo418129.setAttribute('id', 'smo418129');
const smo4181290acc = new VF.Accidental('n');
smo418129.addModifier(smo4181290acc, 0);
smo418149v0ar.push(smo418129);
const smo418130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418130.setAttribute('id', 'smo418130');
smo418130.addModifier(new VF.Dot(), 0);
smo418149v0ar.push(smo418130);
const smo418131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418131.setAttribute('id', 'smo418131');
const smo418132 = new VF.ChordSymbol();
smo418132.setAttribute('id', 'smo418132');
smo418132.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo418132.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3}'));
smo418132.setFont('Petaluma Script', 14).setReportWidth(false);
smo418131.addModifier(smo418132, 0);
smo418149v0ar.push(smo418131);
const smo418133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418133.setAttribute('id', 'smo418133');
smo418133.addModifier(new VF.Dot(), 0);
smo418149v0ar.push(smo418133);
const smo418134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo418134.setAttribute('id', 'smo418134');
const smo4181340acc = new VF.Accidental('n');
smo418134.addModifier(smo4181340acc, 0);
smo418149v0ar.push(smo418134);
const smo418135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo418135.setAttribute('id', 'smo418135');
smo418135.addModifier(new VF.Dot(), 0);
smo418149v0ar.push(smo418135);
smo418149v0.addTickables(smo418149v0ar)
fmtsmo41814930.joinVoices([smo418149v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418858 = smo418126.getStemDirection();
smo418126.setStemDirection(dirsmo418858);
smo418128.setStemDirection(dirsmo418858);
const smo418858 = new VF.Beam([smo418126,smo418128]);
const dirsmo418859 = smo418129.getStemDirection();
smo418129.setStemDirection(dirsmo418859);
smo418130.setStemDirection(dirsmo418859);
const smo418859 = new VF.Beam([smo418129,smo418130]);
const dirsmo418860 = smo418131.getStemDirection();
smo418131.setStemDirection(dirsmo418860);
smo418133.setStemDirection(dirsmo418860);
const smo418860 = new VF.Beam([smo418131,smo418133]);
const dirsmo418861 = smo418134.getStemDirection();
smo418134.setStemDirection(dirsmo418861);
smo418135.setStemDirection(dirsmo418861);
const smo418861 = new VF.Beam([smo418134,smo418135]);
 
// formatting measures in staff group smo418559
fmtsmo41814930.format([smo418149v0], 235);
const stavesmo418149 = new VF.Stave(658, 261.3846153846155, 249);
stavesmo418149.setAttribute('id', 'stavesmo418149');
stavesmo418149.setBegBarType(VF.Barline.type.NONE);
stavesmo418149.setContext(context);
stavesmo418149.draw();
smo418149v0.draw(context, stavesmo418149);
smo418858.setContext(context);
smo418858.draw();
smo418859.setContext(context);
smo418859.draw();
smo418860.setContext(context);
smo418860.draw();
smo418861.setContext(context);
smo418861.draw();
const fmtsmo41817931 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo418179v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418179v0ar = [];
const smo418150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo418150.setAttribute('id', 'smo418150');
const smo4181500acc = new VF.Accidental('b');
smo418150.addModifier(smo4181500acc, 0);
const smo418151 = new VF.ChordSymbol();
smo418151.setAttribute('id', 'smo418151');
smo418151.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo418151.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418151.setFont('Petaluma Script', 14).setReportWidth(false);
smo418150.addModifier(smo418151, 0);
smo418179v0ar.push(smo418150);
const smo418152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418152.setAttribute('id', 'smo418152');
smo418152.addModifier(new VF.Dot(), 0);
const smo418153 = new VF.ChordSymbol();
smo418153.setAttribute('id', 'smo418153');
smo418153.setFont('Petaluma Script', 14).setReportWidth(false);
smo418152.addModifier(smo418153, 0);
smo418179v0ar.push(smo418152);
const smo418154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418154.setAttribute('id', 'smo418154');
const smo4181540acc = new VF.Accidental('b');
smo418154.addModifier(smo4181540acc, 0);
const smo418155 = new VF.ChordSymbol();
smo418155.setAttribute('id', 'smo418155');
smo418155.setFont('Petaluma Script', 14).setReportWidth(false);
smo418154.addModifier(smo418155, 0);
smo418179v0ar.push(smo418154);
const smo418156 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418156.setAttribute('id', 'smo418156');
smo418156.addModifier(new VF.Dot(), 0);
const smo418157 = new VF.ChordSymbol();
smo418157.setAttribute('id', 'smo418157');
smo418157.setFont('Petaluma Script', 14).setReportWidth(false);
smo418156.addModifier(smo418157, 0);
smo418179v0ar.push(smo418156);
const smo418158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo418158.setAttribute('id', 'smo418158');
const smo4181580acc = new VF.Accidental('n');
smo418158.addModifier(smo4181580acc, 0);
const smo418159 = new VF.ChordSymbol();
smo418159.setAttribute('id', 'smo418159');
smo418159.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo418159.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418159.setFont('Petaluma Script', 14).setReportWidth(false);
smo418158.addModifier(smo418159, 0);
smo418179v0ar.push(smo418158);
const smo418160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo418160.setAttribute('id', 'smo418160');
smo418160.addModifier(new VF.Dot(), 0);
const smo418161 = new VF.ChordSymbol();
smo418161.setAttribute('id', 'smo418161');
smo418161.setFont('Petaluma Script', 14).setReportWidth(false);
smo418160.addModifier(smo418161, 0);
smo418179v0ar.push(smo418160);
const smo418162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo418162.setAttribute('id', 'smo418162');
const smo4181620acc = new VF.Accidental('b');
smo418162.addModifier(smo4181620acc, 0);
const smo418163 = new VF.ChordSymbol();
smo418163.setAttribute('id', 'smo418163');
smo418163.setFont('Petaluma Script', 14).setReportWidth(false);
smo418162.addModifier(smo418163, 0);
smo418179v0ar.push(smo418162);
const smo418164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo418164.setAttribute('id', 'smo418164');
smo418164.addModifier(new VF.Dot(), 0);
const smo418165 = new VF.ChordSymbol();
smo418165.setAttribute('id', 'smo418165');
smo418165.setFont('Petaluma Script', 14).setReportWidth(false);
smo418164.addModifier(smo418165, 0);
smo418179v0ar.push(smo418164);
smo418179v0.addTickables(smo418179v0ar)
fmtsmo41817931.joinVoices([smo418179v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418864 = smo418150.getStemDirection();
smo418150.setStemDirection(dirsmo418864);
smo418152.setStemDirection(dirsmo418864);
const smo418864 = new VF.Beam([smo418150,smo418152]);
const dirsmo418865 = smo418154.getStemDirection();
smo418154.setStemDirection(dirsmo418865);
smo418156.setStemDirection(dirsmo418865);
const smo418865 = new VF.Beam([smo418154,smo418156]);
const dirsmo418866 = smo418158.getStemDirection();
smo418158.setStemDirection(dirsmo418866);
smo418160.setStemDirection(dirsmo418866);
const smo418866 = new VF.Beam([smo418158,smo418160]);
const dirsmo418867 = smo418162.getStemDirection();
smo418162.setStemDirection(dirsmo418867);
smo418164.setStemDirection(dirsmo418867);
const smo418867 = new VF.Beam([smo418162,smo418164]);
 
// formatting measures in staff group smo418559
fmtsmo41817931.format([smo418179v0], 243);
const stavesmo418179 = new VF.Stave(907, 261.3846153846155, 257);
stavesmo418179.setAttribute('id', 'stavesmo418179');
stavesmo418179.setBegBarType(VF.Barline.type.NONE);
stavesmo418179.setContext(context);
stavesmo418179.draw();
smo418179v0.draw(context, stavesmo418179);
smo418864.setContext(context);
smo418864.draw();
smo418865.setContext(context);
smo418865.draw();
smo418866.setContext(context);
smo418866.draw();
smo418867.setContext(context);
smo418867.draw();
const fmtsmo41821532 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo418215v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418215v0ar = [];
const smo418180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo418180.setAttribute('id', 'smo418180');
const smo4181800acc = new VF.Accidental('b');
smo418180.addModifier(smo4181800acc, 0);
const smo418181 = new VF.ChordSymbol();
smo418181.setAttribute('id', 'smo418181');
smo418181.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1}'));
smo418181.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418181.setFont('Petaluma Script', 14).setReportWidth(false);
smo418180.addModifier(smo418181, 0);
smo418215v0ar.push(smo418180);
const smo418182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo418182.setAttribute('id', 'smo418182');
const smo4181820acc = new VF.Accidental('b');
smo418182.addModifier(smo4181820acc, 0);
const smo418183 = new VF.ChordSymbol();
smo418183.setAttribute('id', 'smo418183');
smo418183.setFont('Petaluma Script', 14).setReportWidth(false);
smo418182.addModifier(smo418183, 0);
smo418215v0ar.push(smo418182);
const smo418184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo418184.setAttribute('id', 'smo418184');
const smo4181840acc = new VF.Accidental('n');
smo418184.addModifier(smo4181840acc, 0);
const smo418185 = new VF.ChordSymbol();
smo418185.setAttribute('id', 'smo418185');
smo418185.setFont('Petaluma Script', 14).setReportWidth(false);
smo418184.addModifier(smo418185, 0);
smo418215v0ar.push(smo418184);
const smo418186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418186.setAttribute('id', 'smo418186');
const smo4181860acc = new VF.Accidental('b');
smo418186.addModifier(smo4181860acc, 0);
const smo418188 = new VF.Ornament('fall');
smo418186.addModifier(smo418188, 0);
const smo418187 = new VF.ChordSymbol();
smo418187.setAttribute('id', 'smo418187');
smo418187.setFont('Petaluma Script', 14).setReportWidth(false);
smo418186.addModifier(smo418187, 0);
smo418215v0ar.push(smo418186);
const smo418189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418189.setAttribute('id', 'smo418189');
const smo418190 = new VF.ChordSymbol();
smo418190.setAttribute('id', 'smo418190');
smo418190.setFont('Petaluma Script', 14).setReportWidth(false);
smo418189.addModifier(smo418190, 0);
smo418215v0ar.push(smo418189);
const smo418191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo418191.setAttribute('id', 'smo418191');
const smo4181910acc = new VF.Accidental('b');
smo418191.addModifier(smo4181910acc, 0);
smo418215v0ar.push(smo418191);
const smo418192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo418192.setAttribute('id', 'smo418192');
const smo4181920acc = new VF.Accidental('b');
smo418192.addModifier(smo4181920acc, 0);
smo418215v0ar.push(smo418192);
const smo418193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418193.setAttribute('id', 'smo418193');
smo418215v0ar.push(smo418193);
const smo418194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cb/5/n"]}'))
smo418194.setAttribute('id', 'smo418194');
const smo4181940acc = new VF.Accidental('b');
smo418194.addModifier(smo4181940acc, 0);
const smo418195 = new VF.ChordSymbol();
smo418195.setAttribute('id', 'smo418195');
smo418195.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo418195.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418195.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418195.setFont('Petaluma Script', 14).setReportWidth(false);
smo418194.addModifier(smo418195, 0);
smo418215v0ar.push(smo418194);
const smo418196 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo418196.setAttribute('id', 'smo418196');
const smo4181960acc = new VF.Accidental('b');
smo4181960acc.setAsCautionary();
smo418196.addModifier(smo4181960acc, 0);
smo418215v0ar.push(smo418196);
const smo418197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo418197.setAttribute('id', 'smo418197');
const smo4181970acc = new VF.Accidental('b');
smo4181970acc.setAsCautionary();
smo418197.addModifier(smo4181970acc, 0);
smo418215v0ar.push(smo418197);
const smo418198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cb/5/n"]}'))
smo418198.setAttribute('id', 'smo418198');
smo418215v0ar.push(smo418198);
const smo418199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418199.setAttribute('id', 'smo418199');
smo418215v0ar.push(smo418199);
const smo418200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo418200.setAttribute('id', 'smo418200');
smo418215v0ar.push(smo418200);
const smo418201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418201.setAttribute('id', 'smo418201');
smo418215v0ar.push(smo418201);
smo418215v0.addTickables(smo418215v0ar)
fmtsmo41821532.joinVoices([smo418215v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418876 = smo418180.getStemDirection();
smo418180.setStemDirection(dirsmo418876);
smo418182.setStemDirection(dirsmo418876);
smo418184.setStemDirection(dirsmo418876);
smo418186.setStemDirection(dirsmo418876);
const smo418876 = new VF.Beam([smo418180,smo418182,smo418184,smo418186]);
const dirsmo418877 = smo418191.getStemDirection();
smo418191.setStemDirection(dirsmo418877);
smo418192.setStemDirection(dirsmo418877);
smo418193.setStemDirection(dirsmo418877);
const smo418877 = new VF.Beam([smo418191,smo418192,smo418193]);
const dirsmo418878 = smo418194.getStemDirection();
smo418194.setStemDirection(dirsmo418878);
smo418196.setStemDirection(dirsmo418878);
smo418197.setStemDirection(dirsmo418878);
smo418198.setStemDirection(dirsmo418878);
const smo418878 = new VF.Beam([smo418194,smo418196,smo418197,smo418198]);
const dirsmo418879 = smo418199.getStemDirection();
smo418199.setStemDirection(dirsmo418879);
smo418200.setStemDirection(dirsmo418879);
const smo418879 = new VF.Beam([smo418199,smo418200]);
 
// formatting measures in staff group smo418559
fmtsmo41821532.format([smo418215v0], 414);
const stavesmo418215 = new VF.Stave(46, 442.3846153846155, 485);
stavesmo418215.setAttribute('id', 'stavesmo418215');
stavesmo418215.setBegBarType(1);
stavesmo418215.addClef('treble');
const keysmo418215 = new VF.KeySignature('G');
keysmo418215.addToStave(stavesmo418215);
stavesmo418215.setContext(context);
stavesmo418215.draw();
smo418215v0.draw(context, stavesmo418215);
smo418876.setContext(context);
smo418876.draw();
smo418877.setContext(context);
smo418877.draw();
smo418878.setContext(context);
smo418878.draw();
smo418879.setContext(context);
smo418879.draw();
const fmtsmo41824433 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo418244v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418244v0ar = [];
const smo418216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418216.setAttribute('id', 'smo418216');
const smo418217 = new VF.ChordSymbol();
smo418217.setAttribute('id', 'smo418217');
smo418217.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo418217.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418217.setFont('Petaluma Script', 14).setReportWidth(false);
smo418216.addModifier(smo418217, 0);
smo418244v0ar.push(smo418216);
const smo418218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418218.setAttribute('id', 'smo418218');
smo418244v0ar.push(smo418218);
const smo418219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418219.setAttribute('id', 'smo418219');
smo418244v0ar.push(smo418219);
const smo418220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418220.setAttribute('id', 'smo418220');
smo418244v0ar.push(smo418220);
const smo418221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418221.setAttribute('id', 'smo418221');
const smo418222 = new VF.ChordSymbol();
smo418222.setAttribute('id', 'smo418222');
smo418222.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo418222.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418222.setFont('Petaluma Script', 14).setReportWidth(false);
smo418221.addModifier(smo418222, 0);
smo418244v0ar.push(smo418221);
const smo418223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo418223.setAttribute('id', 'smo418223');
const smo4182230acc = new VF.Accidental('b');
smo418223.addModifier(smo4182230acc, 0);
smo418244v0ar.push(smo418223);
const smo418224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo418224.setAttribute('id', 'smo418224');
smo418244v0ar.push(smo418224);
const smo418225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418225.setAttribute('id', 'smo418225');
smo418244v0ar.push(smo418225);
const smo418226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo418226.setAttribute('id', 'smo418226');
const smo418227 = new VF.ChordSymbol();
smo418227.setAttribute('id', 'smo418227');
smo418227.setFont('Petaluma Script', 14).setReportWidth(false);
smo418226.addModifier(smo418227, 0);
smo418244v0ar.push(smo418226);
const smo418228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo418228.setAttribute('id', 'smo418228');
smo418244v0ar.push(smo418228);
const smo418229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo418229.setAttribute('id', 'smo418229');
const smo4182290acc = new VF.Accidental('b');
smo418229.addModifier(smo4182290acc, 0);
smo418244v0ar.push(smo418229);
const smo418230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo418230.setAttribute('id', 'smo418230');
smo418244v0ar.push(smo418230);
smo418244v0.addTickables(smo418244v0ar)
fmtsmo41824433.joinVoices([smo418244v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418882 = smo418219.getStemDirection();
smo418219.setStemDirection(dirsmo418882);
smo418220.setStemDirection(dirsmo418882);
const smo418882 = new VF.Beam([smo418219,smo418220]);
const dirsmo418883 = smo418221.getStemDirection();
smo418221.setStemDirection(dirsmo418883);
smo418223.setStemDirection(dirsmo418883);
smo418224.setStemDirection(dirsmo418883);
smo418225.setStemDirection(dirsmo418883);
const smo418883 = new VF.Beam([smo418221,smo418223,smo418224,smo418225]);
const dirsmo418884 = smo418226.getStemDirection();
smo418226.setStemDirection(dirsmo418884);
smo418228.setStemDirection(dirsmo418884);
smo418229.setStemDirection(dirsmo418884);
smo418230.setStemDirection(dirsmo418884);
const smo418884 = new VF.Beam([smo418226,smo418228,smo418229,smo418230]);
 
// formatting measures in staff group smo418559
fmtsmo41824433.format([smo418244v0], 290);
const stavesmo418244 = new VF.Stave(531, 442.3846153846155, 304);
stavesmo418244.setAttribute('id', 'stavesmo418244');
stavesmo418244.setBegBarType(VF.Barline.type.NONE);
stavesmo418244.setContext(context);
stavesmo418244.draw();
smo418244v0.draw(context, stavesmo418244);
smo418882.setContext(context);
smo418882.draw();
smo418883.setContext(context);
smo418883.draw();
smo418884.setContext(context);
smo418884.draw();
const fmtsmo41827334 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo418273v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418273v0ar = [];
const smo418245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418245.setAttribute('id', 'smo418245');
const smo418246 = new VF.ChordSymbol();
smo418246.setAttribute('id', 'smo418246');
smo418246.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418246.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418246.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418246.setFont('Petaluma Script', 14).setReportWidth(false);
smo418245.addModifier(smo418246, 0);
smo418273v0ar.push(smo418245);
const smo418247 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418247.setAttribute('id', 'smo418247');
smo418273v0ar.push(smo418247);
const smo418248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418248.setAttribute('id', 'smo418248');
smo418273v0ar.push(smo418248);
const smo418249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418249.setAttribute('id', 'smo418249');
const smo4182490acc = new VF.Accidental('b');
smo418249.addModifier(smo4182490acc, 0);
smo418273v0ar.push(smo418249);
const smo418250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418250.setAttribute('id', 'smo418250');
smo418273v0ar.push(smo418250);
const smo418251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418251.setAttribute('id', 'smo418251');
smo418251.addModifier(new VF.Dot(), 0);
smo418273v0ar.push(smo418251);
const smo418252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418252.setAttribute('id', 'smo418252');
const smo418253 = new VF.ChordSymbol();
smo418253.setAttribute('id', 'smo418253');
smo418253.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo418253.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418253.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3}'));
smo418253.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo418253.setFont('Petaluma Script', 14).setReportWidth(false);
smo418252.addModifier(smo418253, 0);
smo418273v0ar.push(smo418252);
const smo418254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo418254.setAttribute('id', 'smo418254');
const smo4182540acc = new VF.Accidental('b');
smo418254.addModifier(smo4182540acc, 0);
smo418273v0ar.push(smo418254);
const smo418255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo418255.setAttribute('id', 'smo418255');
const smo4182550acc = new VF.Accidental('b');
smo418255.addModifier(smo4182550acc, 0);
smo418273v0ar.push(smo418255);
const smo418256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo418256.setAttribute('id', 'smo418256');
smo418273v0ar.push(smo418256);
const smo418257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo418257.setAttribute('id', 'smo418257');
const smo4182570acc = new VF.Accidental('#');
smo418257.addModifier(smo4182570acc, 0);
smo418273v0ar.push(smo418257);
const smo418258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["f#/4/r"]}'))
smo418258.setAttribute('id', 'smo418258');
smo418273v0ar.push(smo418258);
smo418273v0.addTickables(smo418273v0ar)
fmtsmo41827334.joinVoices([smo418273v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418887 = smo418245.getStemDirection();
smo418245.setStemDirection(dirsmo418887);
smo418247.setStemDirection(dirsmo418887);
smo418248.setStemDirection(dirsmo418887);
smo418249.setStemDirection(dirsmo418887);
const smo418887 = new VF.Beam([smo418245,smo418247,smo418248,smo418249]);
const dirsmo418888 = smo418250.getStemDirection();
smo418250.setStemDirection(dirsmo418888);
smo418251.setStemDirection(dirsmo418888);
const smo418888 = new VF.Beam([smo418250,smo418251]);
const dirsmo418889 = smo418252.getStemDirection();
smo418252.setStemDirection(dirsmo418889);
smo418254.setStemDirection(dirsmo418889);
smo418255.setStemDirection(dirsmo418889);
const smo418889 = new VF.Beam([smo418252,smo418254,smo418255]);
const dirsmo418890 = smo418256.getStemDirection();
smo418256.setStemDirection(dirsmo418890);
smo418257.setStemDirection(dirsmo418890);
const smo418890 = new VF.Beam([smo418256,smo418257]);
const smo418259 = new VF.Tuplet([smo418247,smo418248,smo418249], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo418559
fmtsmo41827334.format([smo418273v0], 313);
const stavesmo418273 = new VF.Stave(835, 442.3846153846155, 327);
stavesmo418273.setAttribute('id', 'stavesmo418273');
stavesmo418273.setBegBarType(VF.Barline.type.NONE);
stavesmo418273.setContext(context);
stavesmo418273.draw();
smo418273v0.draw(context, stavesmo418273);
smo418887.setContext(context);
smo418887.draw();
smo418888.setContext(context);
smo418888.draw();
smo418889.setContext(context);
smo418889.draw();
smo418890.setContext(context);
smo418890.draw();
smo418259.setContext(context).draw();
const fmtsmo41830135 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo418301v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418301v0ar = [];
const smo418274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["fn/4/r"]}'))
smo418274.setAttribute('id', 'smo418274');
const smo418275 = new VF.ChordSymbol();
smo418275.setAttribute('id', 'smo418275');
smo418275.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo418275.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418275.setFont('Petaluma Script', 14).setReportWidth(false);
smo418274.addModifier(smo418275, 0);
smo418301v0ar.push(smo418274);
const smo418276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo418276.setAttribute('id', 'smo418276');
const smo4182760acc = new VF.Accidental('n');
smo418276.addModifier(smo4182760acc, 0);
smo418301v0ar.push(smo418276);
const smo418277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo418277.setAttribute('id', 'smo418277');
const smo4182770acc = new VF.Accidental('b');
smo418277.addModifier(smo4182770acc, 0);
smo418301v0ar.push(smo418277);
const smo418278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo418278.setAttribute('id', 'smo418278');
const smo4182780acc = new VF.Accidental('b');
smo418278.addModifier(smo4182780acc, 0);
smo418301v0ar.push(smo418278);
const smo418279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo418279.setAttribute('id', 'smo418279');
smo418301v0ar.push(smo418279);
const smo418280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418280.setAttribute('id', 'smo418280');
smo418301v0ar.push(smo418280);
const smo418281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418281.setAttribute('id', 'smo418281');
smo418301v0ar.push(smo418281);
const smo418282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo418282.setAttribute('id', 'smo418282');
const smo4182820acc = new VF.Accidental('b');
smo4182820acc.setAsCautionary();
smo418282.addModifier(smo4182820acc, 0);
const smo418283 = new VF.ChordSymbol();
smo418283.setAttribute('id', 'smo418283');
smo418283.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo418283.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418283.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418283.setFont('Petaluma Script', 14).setReportWidth(false);
smo418282.addModifier(smo418283, 0);
smo418301v0ar.push(smo418282);
const smo418284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cb/5/n"]}'))
smo418284.setAttribute('id', 'smo418284');
const smo4182840acc = new VF.Accidental('b');
smo418284.addModifier(smo4182840acc, 0);
smo418301v0ar.push(smo418284);
const smo418285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418285.setAttribute('id', 'smo418285');
const smo4182850acc = new VF.Accidental('b');
smo418285.addModifier(smo4182850acc, 0);
smo418301v0ar.push(smo418285);
const smo418286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo418286.setAttribute('id', 'smo418286');
const smo4182860acc = new VF.Accidental('b');
smo418286.addModifier(smo4182860acc, 0);
smo418301v0ar.push(smo418286);
const smo418287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo418287.setAttribute('id', 'smo418287');
const smo4182870acc = new VF.Accidental('b');
smo418287.addModifier(smo4182870acc, 0);
smo418301v0ar.push(smo418287);
smo418301v0.addTickables(smo418301v0ar)
fmtsmo41830135.joinVoices([smo418301v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418899 = smo418276.getStemDirection();
smo418276.setStemDirection(dirsmo418899);
smo418277.setStemDirection(dirsmo418899);
const smo418899 = new VF.Beam([smo418276,smo418277]);
const dirsmo418900 = smo418278.getStemDirection();
smo418278.setStemDirection(dirsmo418900);
smo418279.setStemDirection(dirsmo418900);
smo418280.setStemDirection(dirsmo418900);
smo418281.setStemDirection(dirsmo418900);
const smo418900 = new VF.Beam([smo418278,smo418279,smo418280,smo418281]);
const dirsmo418901 = smo418282.getStemDirection();
smo418282.setStemDirection(dirsmo418901);
smo418284.setStemDirection(dirsmo418901);
smo418285.setStemDirection(dirsmo418901);
const smo418901 = new VF.Beam([smo418282,smo418284,smo418285]);
const dirsmo418902 = smo418286.getStemDirection();
smo418286.setStemDirection(dirsmo418902);
smo418287.setStemDirection(dirsmo418902);
const smo418902 = new VF.Beam([smo418286,smo418287]);
 
// formatting measures in staff group smo418559
fmtsmo41830135.format([smo418301v0], 528);
const stavesmo418301 = new VF.Stave(46, 608.3846153846155, 599);
stavesmo418301.setAttribute('id', 'stavesmo418301');
stavesmo418301.setBegBarType(1);
stavesmo418301.addClef('treble');
const keysmo418301 = new VF.KeySignature('G');
keysmo418301.addToStave(stavesmo418301);
stavesmo418301.setContext(context);
stavesmo418301.draw();
smo418301v0.draw(context, stavesmo418301);
smo418899.setContext(context);
smo418899.draw();
smo418900.setContext(context);
smo418900.draw();
smo418901.setContext(context);
smo418901.draw();
smo418902.setContext(context);
smo418902.draw();
const fmtsmo41833336 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo418333v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418333v0ar = [];
const smo418302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418302.setAttribute('id', 'smo418302');
const smo418303 = new VF.ChordSymbol();
smo418303.setAttribute('id', 'smo418303');
smo418303.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418303.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418303.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418303.setFont('Petaluma Script', 14).setReportWidth(false);
smo418302.addModifier(smo418303, 0);
smo418333v0ar.push(smo418302);
const smo418304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418304.setAttribute('id', 'smo418304');
const smo418305 = new VF.Ornament('scoop');
smo418304.addModifier(smo418305, 0);
smo418333v0ar.push(smo418304);
const smo418306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418306.setAttribute('id', 'smo418306');
const smo4183060acc = new VF.Accidental('b');
smo418306.addModifier(smo4183060acc, 0);
smo418333v0ar.push(smo418306);
const smo418307 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418307.setAttribute('id', 'smo418307');
smo418333v0ar.push(smo418307);
const smo418308 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418308.setAttribute('id', 'smo418308');
smo418333v0ar.push(smo418308);
const smo418309 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418309.setAttribute('id', 'smo418309');
smo418333v0ar.push(smo418309);
const smo418310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418310.setAttribute('id', 'smo418310');
smo418333v0ar.push(smo418310);
const smo418311 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["ab/4/r"]}'))
smo418311.setAttribute('id', 'smo418311');
smo418333v0ar.push(smo418311);
const smo418312 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418312.setAttribute('id', 'smo418312');
const smo418314 = new VF.Ornament('scoop');
smo418312.addModifier(smo418314, 0);
const smo418313 = new VF.ChordSymbol();
smo418313.setAttribute('id', 'smo418313');
smo418313.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo418313.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3}'));
smo418313.setFont('Petaluma Script', 14).setReportWidth(false);
smo418312.addModifier(smo418313, 0);
smo418333v0ar.push(smo418312);
const smo418315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418315.setAttribute('id', 'smo418315');
smo418333v0ar.push(smo418315);
const smo418316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418316.setAttribute('id', 'smo418316');
smo418333v0ar.push(smo418316);
const smo418317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418317.setAttribute('id', 'smo418317');
smo418333v0ar.push(smo418317);
const smo418318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo418318.setAttribute('id', 'smo418318');
const smo4183180acc = new VF.Accidental('n');
smo418318.addModifier(smo4183180acc, 0);
smo418333v0ar.push(smo418318);
smo418333v0.addTickables(smo418333v0ar)
fmtsmo41833336.joinVoices([smo418333v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418905 = smo418304.getStemDirection();
smo418304.setStemDirection(dirsmo418905);
smo418306.setStemDirection(dirsmo418905);
const smo418905 = new VF.Beam([smo418304,smo418306]);
const dirsmo418906 = smo418307.getStemDirection();
smo418307.setStemDirection(dirsmo418906);
smo418308.setStemDirection(dirsmo418906);
smo418309.setStemDirection(dirsmo418906);
smo418310.setStemDirection(dirsmo418906);
const smo418906 = new VF.Beam([smo418307,smo418308,smo418309,smo418310]);
const dirsmo418907 = smo418312.getStemDirection();
smo418312.setStemDirection(dirsmo418907);
smo418315.setStemDirection(dirsmo418907);
const smo418907 = new VF.Beam([smo418312,smo418315]);
const dirsmo418908 = smo418316.getStemDirection();
smo418316.setStemDirection(dirsmo418908);
smo418317.setStemDirection(dirsmo418908);
smo418318.setStemDirection(dirsmo418908);
const smo418908 = new VF.Beam([smo418316,smo418317,smo418318]);
const smo418319 = new VF.Tuplet([smo418307,smo418308,smo418309], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo418559
fmtsmo41833336.format([smo418333v0], 505);
const stavesmo418333 = new VF.Stave(645, 608.3846153846155, 519);
stavesmo418333.setAttribute('id', 'stavesmo418333');
stavesmo418333.setBegBarType(VF.Barline.type.NONE);
stavesmo418333.setContext(context);
stavesmo418333.draw();
smo418333v0.draw(context, stavesmo418333);
smo418905.setContext(context);
smo418905.draw();
smo418906.setContext(context);
smo418906.draw();
smo418907.setContext(context);
smo418907.draw();
smo418908.setContext(context);
smo418908.draw();
smo418319.setContext(context).draw();
const fmtsmo41837537 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo418375v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418375v0ar = [];
const smo418334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bb/4/r"]}'))
smo418334.setAttribute('id', 'smo418334');
const smo418335 = new VF.ChordSymbol();
smo418335.setAttribute('id', 'smo418335');
smo418335.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo418335.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418335.setFont('Petaluma Script', 14).setReportWidth(false);
smo418334.addModifier(smo418335, 0);
smo418375v0ar.push(smo418334);
const smo418336 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo418336.setAttribute('id', 'smo418336');
const smo4183360acc = new VF.Accidental('b');
smo418336.addModifier(smo4183360acc, 0);
smo418375v0ar.push(smo418336);
const smo418337 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo418337.setAttribute('id', 'smo418337');
const smo4183370acc = new VF.Accidental('b');
smo418337.addModifier(smo4183370acc, 0);
smo418375v0ar.push(smo418337);
const smo418338 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo418338.setAttribute('id', 'smo418338');
const smo4183380acc = new VF.Accidental('b');
smo418338.addModifier(smo4183380acc, 0);
smo418375v0ar.push(smo418338);
const smo418339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo418339.setAttribute('id', 'smo418339');
const smo4183390acc = new VF.Accidental('n');
smo418339.addModifier(smo4183390acc, 0);
smo418375v0ar.push(smo418339);
const smo418340 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418340.setAttribute('id', 'smo418340');
const smo4183400acc = new VF.Accidental('b');
smo418340.addModifier(smo4183400acc, 0);
smo418375v0ar.push(smo418340);
const smo418341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418341.setAttribute('id', 'smo418341');
smo418375v0ar.push(smo418341);
const smo418342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bb/4/r"]}'))
smo418342.setAttribute('id', 'smo418342');
smo418375v0ar.push(smo418342);
const smo418343 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418343.setAttribute('id', 'smo418343');
smo418375v0ar.push(smo418343);
const smo418344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["an/4/r"]}'))
smo418344.setAttribute('id', 'smo418344');
smo418375v0ar.push(smo418344);
const smo418345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418345.setAttribute('id', 'smo418345');
smo418375v0ar.push(smo418345);
const smo418346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo418346.setAttribute('id', 'smo418346');
const smo4183460acc = new VF.Accidental('#');
smo418346.addModifier(smo4183460acc, 0);
const smo418347 = new VF.ChordSymbol();
smo418347.setAttribute('id', 'smo418347');
smo418347.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo418347.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418347.setFont('Petaluma Script', 14).setReportWidth(false);
smo418346.addModifier(smo418347, 0);
smo418375v0ar.push(smo418346);
const smo418348 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo418348.setAttribute('id', 'smo418348');
smo418375v0ar.push(smo418348);
const smo418349 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418349.setAttribute('id', 'smo418349');
smo418375v0ar.push(smo418349);
const smo418350 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418350.setAttribute('id', 'smo418350');
smo418375v0ar.push(smo418350);
const smo418351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo418351.setAttribute('id', 'smo418351');
const smo4183510acc = new VF.Accidental('b');
smo4183510acc.setAsCautionary();
smo418351.addModifier(smo4183510acc, 0);
smo418375v0ar.push(smo418351);
const smo418352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo418352.setAttribute('id', 'smo418352');
const smo4183520acc = new VF.Accidental('n');
smo418352.addModifier(smo4183520acc, 0);
smo418375v0ar.push(smo418352);
const smo418353 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418353.setAttribute('id', 'smo418353');
smo418375v0ar.push(smo418353);
const smo418354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418354.setAttribute('id', 'smo418354');
smo418375v0ar.push(smo418354);
smo418375v0.addTickables(smo418375v0ar)
fmtsmo41837537.joinVoices([smo418375v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418917 = smo418337.getStemDirection();
smo418337.setStemDirection(dirsmo418917);
smo418338.setStemDirection(dirsmo418917);
smo418339.setStemDirection(dirsmo418917);
const smo418917 = new VF.Beam([smo418337,smo418338,smo418339]);
const dirsmo418918 = smo418340.getStemDirection();
smo418340.setStemDirection(dirsmo418918);
smo418341.setStemDirection(dirsmo418918);
smo418343.setStemDirection(dirsmo418918);
smo418345.setStemDirection(dirsmo418918);
const smo418918 = new VF.Beam([smo418340,smo418341,smo418343,smo418345]);
const dirsmo418919 = smo418346.getStemDirection();
smo418346.setStemDirection(dirsmo418919);
smo418348.setStemDirection(dirsmo418919);
smo418349.setStemDirection(dirsmo418919);
smo418350.setStemDirection(dirsmo418919);
const smo418919 = new VF.Beam([smo418346,smo418348,smo418349,smo418350]);
const dirsmo418920 = smo418351.getStemDirection();
smo418351.setStemDirection(dirsmo418920);
smo418352.setStemDirection(dirsmo418920);
smo418353.setStemDirection(dirsmo418920);
smo418354.setStemDirection(dirsmo418920);
const smo418920 = new VF.Beam([smo418351,smo418352,smo418353,smo418354]);
const smo418355 = new VF.Tuplet([smo418334,smo418336], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo418356 = new VF.Tuplet([smo418337,smo418338,smo418339], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo418357 = new VF.Tuplet([smo418340,smo418341,smo418342], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo418358 = new VF.Tuplet([smo418343,smo418344,smo418345], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo418359 = new VF.Tuplet([smo418348,smo418349,smo418350], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo418360 = new VF.Tuplet([smo418351,smo418352], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo418361 = new VF.Tuplet([smo418353,smo418354], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo418559
fmtsmo41837537.format([smo418375v0], 490);
const stavesmo418375 = new VF.Stave(46, 780.3846153846155, 560);
stavesmo418375.setAttribute('id', 'stavesmo418375');
stavesmo418375.setBegBarType(1);
stavesmo418375.addClef('treble');
const keysmo418375 = new VF.KeySignature('G');
keysmo418375.addToStave(stavesmo418375);
stavesmo418375.setContext(context);
stavesmo418375.draw();
smo418375v0.draw(context, stavesmo418375);
smo418917.setContext(context);
smo418917.draw();
smo418918.setContext(context);
smo418918.draw();
smo418919.setContext(context);
smo418919.draw();
smo418920.setContext(context);
smo418920.draw();
smo418355.setContext(context).draw();
smo418356.setContext(context).draw();
smo418357.setContext(context).draw();
smo418358.setContext(context).draw();
smo418359.setContext(context).draw();
smo418360.setContext(context).draw();
smo418361.setContext(context).draw();
const fmtsmo41840438 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo418404v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418404v0ar = [];
const smo418376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
const smo418378 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo418378.setAttribute('id', 'smo418378');
const acc0smo418378 = new VF.Accidental('#');
smo418378.addModifier(acc0smo418378, 0)
const ggrpsmo418376 = new VF.GraceNoteGroup([smo418378]);
ggrpsmo418376.beamNotes();
smo418376.addModifier(ggrpsmo418376, 0);
smo418376.setAttribute('id', 'smo418376');
const smo418377 = new VF.ChordSymbol();
smo418377.setAttribute('id', 'smo418377');
smo418377.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418377.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418377.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418377.setFont('Petaluma Script', 14).setReportWidth(false);
smo418376.addModifier(smo418377, 0);
smo418404v0ar.push(smo418376);
const smo418379 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418379.setAttribute('id', 'smo418379');
smo418404v0ar.push(smo418379);
const smo418380 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418380.setAttribute('id', 'smo418380');
const smo4183800acc = new VF.Accidental('b');
smo418380.addModifier(smo4183800acc, 0);
smo418404v0ar.push(smo418380);
const smo418381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418381.setAttribute('id', 'smo418381');
smo418404v0ar.push(smo418381);
const smo418382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418382.setAttribute('id', 'smo418382');
smo418404v0ar.push(smo418382);
const smo418383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
const smo418384 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo418384.setAttribute('id', 'smo418384');
const acc0smo418384 = new VF.Accidental('#');
smo418384.addModifier(acc0smo418384, 0)
const ggrpsmo418383 = new VF.GraceNoteGroup([smo418384]);
ggrpsmo418383.beamNotes();
smo418383.addModifier(ggrpsmo418383, 0);
smo418383.setAttribute('id', 'smo418383');
smo418404v0ar.push(smo418383);
const smo418385 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418385.setAttribute('id', 'smo418385');
const smo418386 = new VF.ChordSymbol();
smo418386.setAttribute('id', 'smo418386');
smo418386.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo418386.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418386.setFont('Petaluma Script', 14).setReportWidth(false);
smo418385.addModifier(smo418386, 0);
smo418404v0ar.push(smo418385);
const smo418387 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo418387.setAttribute('id', 'smo418387');
const smo4183870acc = new VF.Accidental('b');
smo418387.addModifier(smo4183870acc, 0);
smo418404v0ar.push(smo418387);
const smo418388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo418388.setAttribute('id', 'smo418388');
smo418404v0ar.push(smo418388);
const smo418389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418389.setAttribute('id', 'smo418389');
smo418404v0ar.push(smo418389);
const smo418390 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418390.setAttribute('id', 'smo418390');
smo418404v0ar.push(smo418390);
smo418404v0.addTickables(smo418404v0ar)
fmtsmo41840438.joinVoices([smo418404v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418923 = smo418376.getStemDirection();
smo418376.setStemDirection(dirsmo418923);
smo418379.setStemDirection(dirsmo418923);
smo418380.setStemDirection(dirsmo418923);
const smo418923 = new VF.Beam([smo418376,smo418379,smo418380]);
const dirsmo418924 = smo418381.getStemDirection();
smo418381.setStemDirection(dirsmo418924);
smo418382.setStemDirection(dirsmo418924);
smo418383.setStemDirection(dirsmo418924);
const smo418924 = new VF.Beam([smo418381,smo418382,smo418383]);
const dirsmo418925 = smo418385.getStemDirection();
smo418385.setStemDirection(dirsmo418925);
smo418387.setStemDirection(dirsmo418925);
smo418388.setStemDirection(dirsmo418925);
const smo418925 = new VF.Beam([smo418385,smo418387,smo418388]);
const dirsmo418926 = smo418389.getStemDirection();
smo418389.setStemDirection(dirsmo418926);
smo418390.setStemDirection(dirsmo418926);
const smo418926 = new VF.Beam([smo418389,smo418390]);
 
// formatting measures in staff group smo418559
fmtsmo41840438.format([smo418404v0], 294);
const stavesmo418404 = new VF.Stave(606, 780.3846153846155, 308);
stavesmo418404.setAttribute('id', 'stavesmo418404');
stavesmo418404.setBegBarType(VF.Barline.type.NONE);
stavesmo418404.setContext(context);
stavesmo418404.draw();
smo418404v0.draw(context, stavesmo418404);
smo418923.setContext(context);
smo418923.draw();
smo418924.setContext(context);
smo418924.draw();
smo418925.setContext(context);
smo418925.draw();
smo418926.setContext(context);
smo418926.draw();
const fmtsmo41842739 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo418427v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418427v0ar = [];
const smo418405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418405.setAttribute('id', 'smo418405');
const smo418406 = new VF.ChordSymbol();
smo418406.setAttribute('id', 'smo418406');
smo418406.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo418406.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418406.setFont('Petaluma Script', 14).setReportWidth(false);
smo418405.addModifier(smo418406, 0);
smo418427v0ar.push(smo418405);
const smo418407 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418407.setAttribute('id', 'smo418407');
smo418427v0ar.push(smo418407);
const smo418408 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418408.setAttribute('id', 'smo418408');
const smo418409 = new VF.ChordSymbol();
smo418409.setAttribute('id', 'smo418409');
smo418409.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo418409.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418409.setFont('Petaluma Script', 14).setReportWidth(false);
smo418408.addModifier(smo418409, 0);
smo418427v0ar.push(smo418408);
const smo418410 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo418410.setAttribute('id', 'smo418410');
smo418427v0ar.push(smo418410);
const smo418411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418411.setAttribute('id', 'smo418411');
smo418427v0ar.push(smo418411);
const smo418412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo418412.setAttribute('id', 'smo418412');
const smo4184120acc = new VF.Accidental('n');
smo418412.addModifier(smo4184120acc, 0);
smo418427v0ar.push(smo418412);
const smo418413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418413.setAttribute('id', 'smo418413');
const smo4184130acc = new VF.Accidental('b');
smo418413.addModifier(smo4184130acc, 0);
smo418427v0ar.push(smo418413);
smo418427v0.addTickables(smo418427v0ar)
fmtsmo41842739.joinVoices([smo418427v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418929 = smo418408.getStemDirection();
smo418408.setStemDirection(dirsmo418929);
smo418410.setStemDirection(dirsmo418929);
smo418411.setStemDirection(dirsmo418929);
const smo418929 = new VF.Beam([smo418408,smo418410,smo418411]);
const dirsmo418930 = smo418412.getStemDirection();
smo418412.setStemDirection(dirsmo418930);
smo418413.setStemDirection(dirsmo418930);
const smo418930 = new VF.Beam([smo418412,smo418413]);
 
// formatting measures in staff group smo418559
fmtsmo41842739.format([smo418427v0], 236);
const stavesmo418427 = new VF.Stave(914, 780.3846153846155, 250);
stavesmo418427.setAttribute('id', 'stavesmo418427');
stavesmo418427.setBegBarType(VF.Barline.type.NONE);
stavesmo418427.setContext(context);
stavesmo418427.draw();
smo418427v0.draw(context, stavesmo418427);
smo418929.setContext(context);
smo418929.draw();
smo418930.setContext(context);
smo418930.draw();
const fmtsmo41845740 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo418457v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418457v0ar = [];
const smo418428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418428.setAttribute('id', 'smo418428');
const smo418429 = new VF.ChordSymbol();
smo418429.setAttribute('id', 'smo418429');
smo418429.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo418429.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418429.setFont('Petaluma Script', 14).setReportWidth(false);
smo418428.addModifier(smo418429, 0);
smo418457v0ar.push(smo418428);
const smo418430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418430.setAttribute('id', 'smo418430');
smo418457v0ar.push(smo418430);
const smo418431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo418431.setAttribute('id', 'smo418431');
const smo4184310acc = new VF.Accidental('b');
smo418431.addModifier(smo4184310acc, 0);
smo418457v0ar.push(smo418431);
const smo418432 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418432.setAttribute('id', 'smo418432');
const smo4184320acc = new VF.Accidental('n');
smo418432.addModifier(smo4184320acc, 0);
smo418457v0ar.push(smo418432);
const smo418433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo418433.setAttribute('id', 'smo418433');
smo418457v0ar.push(smo418433);
const smo418434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/5/n"]}'))
smo418434.setAttribute('id', 'smo418434');
const smo4184340acc = new VF.Accidental('b');
smo418434.addModifier(smo4184340acc, 0);
const smo418435 = new VF.ChordSymbol();
smo418435.setAttribute('id', 'smo418435');
smo418435.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo418435.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418435.setFont('Petaluma Script', 14).setReportWidth(false);
smo418434.addModifier(smo418435, 0);
smo418457v0ar.push(smo418434);
const smo418436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo418436.setAttribute('id', 'smo418436');
const smo4184360acc = new VF.Accidental('b');
smo418436.addModifier(smo4184360acc, 0);
smo418457v0ar.push(smo418436);
const smo418437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418437.setAttribute('id', 'smo418437');
const smo4184370acc = new VF.Accidental('n');
smo418437.addModifier(smo4184370acc, 0);
smo418457v0ar.push(smo418437);
const smo418438 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo418438.setAttribute('id', 'smo418438');
const smo4184380acc = new VF.Accidental('b');
smo418438.addModifier(smo4184380acc, 0);
smo418457v0ar.push(smo418438);
const smo418439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418439.setAttribute('id', 'smo418439');
smo418457v0ar.push(smo418439);
const smo418440 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418440.setAttribute('id', 'smo418440');
smo418457v0ar.push(smo418440);
const smo418441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo418441.setAttribute('id', 'smo418441');
smo418457v0ar.push(smo418441);
const smo418442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418442.setAttribute('id', 'smo418442');
const smo4184420acc = new VF.Accidental('n');
smo418442.addModifier(smo4184420acc, 0);
smo418457v0ar.push(smo418442);
const smo418443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo418443.setAttribute('id', 'smo418443');
smo418457v0ar.push(smo418443);
smo418457v0.addTickables(smo418457v0ar)
fmtsmo41845740.joinVoices([smo418457v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418938 = smo418430.getStemDirection();
smo418430.setStemDirection(dirsmo418938);
smo418431.setStemDirection(dirsmo418938);
smo418432.setStemDirection(dirsmo418938);
smo418433.setStemDirection(dirsmo418938);
const smo418938 = new VF.Beam([smo418430,smo418431,smo418432,smo418433]);
const dirsmo418939 = smo418434.getStemDirection();
smo418434.setStemDirection(dirsmo418939);
smo418436.setStemDirection(dirsmo418939);
smo418437.setStemDirection(dirsmo418939);
smo418438.setStemDirection(dirsmo418939);
smo418439.setStemDirection(dirsmo418939);
const smo418939 = new VF.Beam([smo418434,smo418436,smo418437,smo418438,smo418439]);
const dirsmo418940 = smo418440.getStemDirection();
smo418440.setStemDirection(dirsmo418940);
smo418441.setStemDirection(dirsmo418940);
smo418442.setStemDirection(dirsmo418940);
smo418443.setStemDirection(dirsmo418940);
const smo418940 = new VF.Beam([smo418440,smo418441,smo418442,smo418443]);
 
// formatting measures in staff group smo418559
fmtsmo41845740.format([smo418457v0], 379);
const stavesmo418457 = new VF.Stave(46, 926.3846153846155, 450);
stavesmo418457.setAttribute('id', 'stavesmo418457');
stavesmo418457.setBegBarType(1);
stavesmo418457.addClef('treble');
const keysmo418457 = new VF.KeySignature('G');
keysmo418457.addToStave(stavesmo418457);
stavesmo418457.setContext(context);
stavesmo418457.draw();
smo418457v0.draw(context, stavesmo418457);
smo418938.setContext(context);
smo418938.draw();
smo418939.setContext(context);
smo418939.draw();
smo418940.setContext(context);
smo418940.draw();
const fmtsmo41848741 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo418487v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418487v0ar = [];
const smo418458 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo418458.setAttribute('id', 'smo418458');
const smo418459 = new VF.ChordSymbol();
smo418459.setAttribute('id', 'smo418459');
smo418459.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418459.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418459.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418459.setFont('Petaluma Script', 14).setReportWidth(false);
smo418458.addModifier(smo418459, 0);
smo418487v0ar.push(smo418458);
const smo418460 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo418460.setAttribute('id', 'smo418460');
smo418487v0ar.push(smo418460);
const smo418461 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418461.setAttribute('id', 'smo418461');
smo418487v0ar.push(smo418461);
const smo418462 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418462.setAttribute('id', 'smo418462');
const smo4184620acc = new VF.Accidental('b');
smo418462.addModifier(smo4184620acc, 0);
smo418487v0ar.push(smo418462);
const smo418463 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418463.setAttribute('id', 'smo418463');
smo418487v0ar.push(smo418463);
const smo418464 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo418464.setAttribute('id', 'smo418464');
smo418487v0ar.push(smo418464);
const smo418465 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418465.setAttribute('id', 'smo418465');
smo418487v0ar.push(smo418465);
const smo418466 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418466.setAttribute('id', 'smo418466');
smo418487v0ar.push(smo418466);
const smo418467 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418467.setAttribute('id', 'smo418467');
smo418487v0ar.push(smo418467);
const smo418468 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo418468.setAttribute('id', 'smo418468');
const smo418470 = new VF.Ornament('scoop');
smo418468.addModifier(smo418470, 0);
const smo418469 = new VF.ChordSymbol();
smo418469.setAttribute('id', 'smo418469');
smo418469.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo418469.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418469.setFont('Petaluma Script', 14).setReportWidth(false);
smo418468.addModifier(smo418469, 0);
smo418487v0ar.push(smo418468);
const smo418471 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418471.setAttribute('id', 'smo418471');
smo418487v0ar.push(smo418471);
const smo418472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo418472.setAttribute('id', 'smo418472');
smo418487v0ar.push(smo418472);
smo418487v0.addTickables(smo418487v0ar)
fmtsmo41848741.joinVoices([smo418487v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418943 = smo418458.getStemDirection();
smo418458.setStemDirection(dirsmo418943);
smo418460.setStemDirection(dirsmo418943);
smo418461.setStemDirection(dirsmo418943);
smo418462.setStemDirection(dirsmo418943);
const smo418943 = new VF.Beam([smo418458,smo418460,smo418461,smo418462]);
const dirsmo418944 = smo418463.getStemDirection();
smo418463.setStemDirection(dirsmo418944);
smo418464.setStemDirection(dirsmo418944);
smo418465.setStemDirection(dirsmo418944);
smo418466.setStemDirection(dirsmo418944);
smo418467.setStemDirection(dirsmo418944);
const smo418944 = new VF.Beam([smo418463,smo418464,smo418465,smo418466,smo418467]);
const dirsmo418945 = smo418468.getStemDirection();
smo418468.setStemDirection(dirsmo418945);
smo418471.setStemDirection(dirsmo418945);
const smo418945 = new VF.Beam([smo418468,smo418471]);
const smo418473 = new VF.Tuplet([smo418463,smo418464,smo418465], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo418559
fmtsmo41848741.format([smo418487v0], 314);
const stavesmo418487 = new VF.Stave(496, 926.3846153846155, 328);
stavesmo418487.setAttribute('id', 'stavesmo418487');
stavesmo418487.setBegBarType(VF.Barline.type.NONE);
stavesmo418487.setContext(context);
stavesmo418487.draw();
smo418487v0.draw(context, stavesmo418487);
smo418943.setContext(context);
smo418943.draw();
smo418944.setContext(context);
smo418944.draw();
smo418945.setContext(context);
smo418945.draw();
smo418473.setContext(context).draw();
const fmtsmo41851742 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo418517v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418517v0ar = [];
const smo418488 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418488.setAttribute('id', 'smo418488');
smo418517v0ar.push(smo418488);
const smo418489 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo418489.setAttribute('id', 'smo418489');
const smo418490 = new VF.ChordSymbol();
smo418490.setAttribute('id', 'smo418490');
smo418490.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo418490.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo418490.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418490.setFont('Petaluma Script', 14).setReportWidth(false);
smo418489.addModifier(smo418490, 0);
smo418517v0ar.push(smo418489);
const smo418491 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418491.setAttribute('id', 'smo418491');
smo418517v0ar.push(smo418491);
const smo418492 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo418492.setAttribute('id', 'smo418492');
const smo4184920acc = new VF.Accidental('b');
smo418492.addModifier(smo4184920acc, 0);
smo418517v0ar.push(smo418492);
const smo418493 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo418493.setAttribute('id', 'smo418493');
smo418517v0ar.push(smo418493);
const smo418494 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo418494.setAttribute('id', 'smo418494');
smo418517v0ar.push(smo418494);
const smo418495 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo418495.setAttribute('id', 'smo418495');
smo418517v0ar.push(smo418495);
const smo418496 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo418496.setAttribute('id', 'smo418496');
smo418517v0ar.push(smo418496);
const smo418497 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo418497.setAttribute('id', 'smo418497');
const smo418498 = new VF.ChordSymbol();
smo418498.setAttribute('id', 'smo418498');
smo418498.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo418498.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo418498.setFont('Petaluma Script', 14).setReportWidth(false);
smo418497.addModifier(smo418498, 0);
smo418517v0ar.push(smo418497);
const smo418499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo418499.setAttribute('id', 'smo418499');
smo418517v0ar.push(smo418499);
const smo418500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418500.setAttribute('id', 'smo418500');
smo418517v0ar.push(smo418500);
const smo418501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo418501.setAttribute('id', 'smo418501');
smo418517v0ar.push(smo418501);
const smo418502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo418502.setAttribute('id', 'smo418502');
smo418517v0ar.push(smo418502);
const smo418503 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo418503.setAttribute('id', 'smo418503');
smo418517v0ar.push(smo418503);
smo418517v0.addTickables(smo418517v0ar)
fmtsmo41851742.joinVoices([smo418517v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
const dirsmo418948 = smo418493.getStemDirection();
smo418493.setStemDirection(dirsmo418948);
smo418494.setStemDirection(dirsmo418948);
smo418495.setStemDirection(dirsmo418948);
smo418496.setStemDirection(dirsmo418948);
const smo418948 = new VF.Beam([smo418493,smo418494,smo418495,smo418496]);
const dirsmo418949 = smo418497.getStemDirection();
smo418497.setStemDirection(dirsmo418949);
smo418499.setStemDirection(dirsmo418949);
smo418500.setStemDirection(dirsmo418949);
const smo418949 = new VF.Beam([smo418497,smo418499,smo418500]);
 
// formatting measures in staff group smo418559
fmtsmo41851742.format([smo418517v0], 325);
const stavesmo418517 = new VF.Stave(824, 926.3846153846155, 340);
stavesmo418517.setAttribute('id', 'stavesmo418517');
stavesmo418517.setBegBarType(VF.Barline.type.NONE);
stavesmo418517.setEndBarType(2);
stavesmo418517.setContext(context);
stavesmo418517.draw();
smo418517v0.draw(context, stavesmo418517);
smo418948.setContext(context);
smo418948.draw();
smo418949.setContext(context);
smo418949.draw();
const fmtsmo41853543 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo418535v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo418535v0ar = [];
const smo418518 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo418518.setAttribute('id', 'smo418518');
smo418535v0ar.push(smo418518);
const smo418519 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418519.setAttribute('id', 'smo418519');
smo418535v0ar.push(smo418519);
const smo418520 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418520.setAttribute('id', 'smo418520');
smo418535v0ar.push(smo418520);
const smo418521 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo418521.setAttribute('id', 'smo418521');
smo418535v0ar.push(smo418521);
smo418535v0.addTickables(smo418535v0ar)
fmtsmo41853543.joinVoices([smo418535v0]);
// create beam groups and tuplets for format grp smo418559 before formatting
 
// formatting measures in staff group smo418559
fmtsmo41853543.format([smo418535v0], 208);
const stavesmo418535 = new VF.Stave(46, 1045.3846153846155, 279);
stavesmo418535.setAttribute('id', 'stavesmo418535');
stavesmo418535.setBegBarType(1);
stavesmo418535.addClef('treble');
const keysmo418535 = new VF.KeySignature('G');
keysmo418535.addToStave(stavesmo418535);
stavesmo418535.setContext(context);
stavesmo418535.draw();
smo418535v0.draw(context, stavesmo418535);
// modifier from 0-36-0-11 to 0-36-0-12
const smo419086 = new VF.Curve(smo418317, smo418318, JSON.parse('{"thickness":2,"xShift":0,"yShift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"positionEnd":2}'));
smo419086.setContext(context).draw();
// modifier from 0-36-0-9 to 0-36-0-10
const smo419087 = new VF.StaveTie({ first_note: smo418315, last_note: smo418316, 
          firstNote: smo418315, lastNote: smo418316, first_indices: [0], last_indices: [0]});
smo419087.setContext(context).draw();
// modifier from 0-29-0-1 to 0-29-0-2
const smo419088 = new VF.StaveTie({ first_note: smo418104, last_note: smo418105, 
          firstNote: smo418104, lastNote: smo418105, first_indices: [0], last_indices: [0]});
smo419088.setContext(context).draw();
}
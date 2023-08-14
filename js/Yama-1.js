// @@ Yama p 2/1 ((as played by Lee Morgan)) by Lee Morgan
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
const fmtsmo42660925 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo426609v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426609v0ar = [];
const smo426575 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo426575.setAttribute('id', 'smo426575');
const smo4265750acc = new VF.Accidental('b');
smo426575.addModifier(smo4265750acc, 0);
const smo426576 = new VF.ChordSymbol();
smo426576.setAttribute('id', 'smo426576');
smo426576.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426576.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426576.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426576.setFont('Petaluma Script', 14).setReportWidth(false);
smo426575.addModifier(smo426576, 0);
smo426609v0ar.push(smo426575);
const smo426577 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426577.setAttribute('id', 'smo426577');
smo426609v0ar.push(smo426577);
const smo426578 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426578.setAttribute('id', 'smo426578');
const smo4265780acc = new VF.Accidental('b');
smo426578.addModifier(smo4265780acc, 0);
smo426609v0ar.push(smo426578);
const smo426579 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426579.setAttribute('id', 'smo426579');
smo426609v0ar.push(smo426579);
const smo426580 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo426580.setAttribute('id', 'smo426580');
smo426609v0ar.push(smo426580);
const smo426581 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426581.setAttribute('id', 'smo426581');
smo426609v0ar.push(smo426581);
const smo426582 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426582.setAttribute('id', 'smo426582');
const smo426583 = new VF.ChordSymbol();
smo426583.setAttribute('id', 'smo426583');
smo426583.setFont('Petaluma Script', 14).setReportWidth(false);
smo426582.addModifier(smo426583, 0);
smo426609v0ar.push(smo426582);
const smo426584 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426584.setAttribute('id', 'smo426584');
const smo426585 = new VF.ChordSymbol();
smo426585.setAttribute('id', 'smo426585');
smo426585.setFont('Petaluma Script', 14).setReportWidth(false);
smo426584.addModifier(smo426585, 0);
smo426609v0ar.push(smo426584);
const smo426586 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo426586.setAttribute('id', 'smo426586');
const smo426588 = new VF.Ornament('scoop');
smo426586.addModifier(smo426588, 0);
const smo426587 = new VF.ChordSymbol();
smo426587.setAttribute('id', 'smo426587');
smo426587.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo426587.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426587.setFont('Petaluma Script', 14).setReportWidth(false);
smo426586.addModifier(smo426587, 0);
smo426609v0ar.push(smo426586);
const smo426589 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo426589.setAttribute('id', 'smo426589');
smo426609v0ar.push(smo426589);
const smo426590 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426590.setAttribute('id', 'smo426590');
smo426609v0ar.push(smo426590);
const smo426591 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426591.setAttribute('id', 'smo426591');
smo426609v0ar.push(smo426591);
const smo426592 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426592.setAttribute('id', 'smo426592');
smo426609v0ar.push(smo426592);
const smo426593 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426593.setAttribute('id', 'smo426593');
smo426609v0ar.push(smo426593);
const smo426594 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo426594.setAttribute('id', 'smo426594');
const smo426595 = new VF.ChordSymbol();
smo426595.setAttribute('id', 'smo426595');
smo426595.setFont('Petaluma Script', 14).setReportWidth(false);
smo426594.addModifier(smo426595, 0);
smo426609v0ar.push(smo426594);
smo426609v0.addTickables(smo426609v0ar)
fmtsmo42660925.joinVoices([smo426609v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427433 = smo426575.getStemDirection();
smo426575.setStemDirection(dirsmo427433);
smo426577.setStemDirection(dirsmo427433);
smo426578.setStemDirection(dirsmo427433);
smo426579.setStemDirection(dirsmo427433);
const smo427433 = new VF.Beam([smo426575,smo426577,smo426578,smo426579,smo426580]);
const dirsmo427434 = smo426581.getStemDirection();
smo426581.setStemDirection(dirsmo427434);
smo426582.setStemDirection(dirsmo427434);
smo426584.setStemDirection(dirsmo427434);
smo426586.setStemDirection(dirsmo427434);
const smo427434 = new VF.Beam([smo426581,smo426582,smo426584,smo426586]);
const dirsmo427435 = smo426589.getStemDirection();
smo426589.setStemDirection(dirsmo427435);
smo426590.setStemDirection(dirsmo427435);
smo426591.setStemDirection(dirsmo427435);
smo426592.setStemDirection(dirsmo427435);
const smo427435 = new VF.Beam([smo426589,smo426590,smo426591,smo426592]);
 
// formatting measures in staff group smo427165
fmtsmo42660925.format([smo426609v0], 523);
const stavesmo426609 = new VF.Stave(46, 276.3846153846155, 607);
stavesmo426609.setAttribute('id', 'stavesmo426609');
stavesmo426609.setBegBarType(1);
stavesmo426609.addClef('treble');
const keysmo426609 = new VF.KeySignature('G');
keysmo426609.addToStave(stavesmo426609);
stavesmo426609.setContext(context);
stavesmo426609.draw();
smo426609v0.draw(context, stavesmo426609);
smo427433.setContext(context);
smo427433.draw();
smo427434.setContext(context);
smo427434.draw();
smo427435.setContext(context);
smo427435.draw();
const fmtsmo42664126 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo426641v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426641v0ar = [];
const smo426610 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426610.setAttribute('id', 'smo426610');
const smo426611 = new VF.ChordSymbol();
smo426611.setAttribute('id', 'smo426611');
smo426611.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo426611.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426611.setFont('Petaluma Script', 14).setReportWidth(false);
smo426610.addModifier(smo426611, 0);
smo426641v0ar.push(smo426610);
const smo426612 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426612.setAttribute('id', 'smo426612');
smo426641v0ar.push(smo426612);
const smo426613 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426613.setAttribute('id', 'smo426613');
smo426641v0ar.push(smo426613);
const smo426614 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo426614.setAttribute('id', 'smo426614');
const smo4266140acc = new VF.Accidental('n');
smo426614.addModifier(smo4266140acc, 0);
smo426641v0ar.push(smo426614);
const smo426615 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426615.setAttribute('id', 'smo426615');
const smo4266150acc = new VF.Accidental('b');
smo426615.addModifier(smo4266150acc, 0);
const smo426616 = new VF.ChordSymbol();
smo426616.setAttribute('id', 'smo426616');
smo426616.setFont('Petaluma Script', 14).setReportWidth(false);
smo426615.addModifier(smo426616, 0);
smo426641v0ar.push(smo426615);
const smo426617 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426617.setAttribute('id', 'smo426617');
smo426641v0ar.push(smo426617);
const smo426618 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426618.setAttribute('id', 'smo426618');
smo426641v0ar.push(smo426618);
const smo426619 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo426621 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["bn/4"],"slash":true}'))
smo426621.setAttribute('id', 'smo426621');
const ggrpsmo426619 = new VF.GraceNoteGroup([smo426621]);
ggrpsmo426619.beamNotes();
smo426619.addModifier(ggrpsmo426619, 0);
smo426619.setAttribute('id', 'smo426619');
const smo426620 = new VF.ChordSymbol();
smo426620.setAttribute('id', 'smo426620');
smo426620.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1,"symbolType":2}'));
smo426620.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426620.setFont('Petaluma Script', 14).setReportWidth(false);
smo426619.addModifier(smo426620, 0);
smo426641v0ar.push(smo426619);
const smo426622 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426622.setAttribute('id', 'smo426622');
const smo4266220acc = new VF.Accidental('b');
smo426622.addModifier(smo4266220acc, 0);
smo426641v0ar.push(smo426622);
const smo426623 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426623.setAttribute('id', 'smo426623');
smo426641v0ar.push(smo426623);
const smo426624 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426624.setAttribute('id', 'smo426624');
smo426641v0ar.push(smo426624);
const smo426625 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426625.setAttribute('id', 'smo426625');
smo426641v0ar.push(smo426625);
const smo426626 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo426626.setAttribute('id', 'smo426626');
smo426641v0ar.push(smo426626);
smo426641v0.addTickables(smo426641v0ar)
fmtsmo42664126.joinVoices([smo426641v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427438 = smo426612.getStemDirection();
smo426612.setStemDirection(dirsmo427438);
smo426613.setStemDirection(dirsmo427438);
const smo427438 = new VF.Beam([smo426612,smo426613]);
const dirsmo427439 = smo426614.getStemDirection();
smo426614.setStemDirection(dirsmo427439);
smo426615.setStemDirection(dirsmo427439);
smo426617.setStemDirection(dirsmo427439);
smo426618.setStemDirection(dirsmo427439);
const smo427439 = new VF.Beam([smo426614,smo426615,smo426617,smo426618]);
const dirsmo427440 = smo426619.getStemDirection();
smo426619.setStemDirection(dirsmo427440);
smo426622.setStemDirection(dirsmo427440);
smo426623.setStemDirection(dirsmo427440);
smo426624.setStemDirection(dirsmo427440);
const smo427440 = new VF.Beam([smo426619,smo426622,smo426623,smo426624]);
const smo426627 = new VF.Tuplet([smo426622,smo426623,smo426624], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo427165
fmtsmo42664126.format([smo426641v0], 496);
const stavesmo426641 = new VF.Stave(653, 276.3846153846155, 510);
stavesmo426641.setAttribute('id', 'stavesmo426641');
stavesmo426641.setBegBarType(VF.Barline.type.NONE);
stavesmo426641.setContext(context);
stavesmo426641.draw();
smo426641v0.draw(context, stavesmo426641);
smo427438.setContext(context);
smo427438.draw();
smo427439.setContext(context);
smo427439.draw();
smo427440.setContext(context);
smo427440.draw();
smo426627.setContext(context).draw();
const fmtsmo42667427 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo426674v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426674v0ar = [];
const smo426642 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["c#/5/r"]}'))
smo426642.setAttribute('id', 'smo426642');
const smo426643 = new VF.ChordSymbol();
smo426643.setAttribute('id', 'smo426643');
smo426643.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo426643.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426643.setFont('Petaluma Script', 14).setReportWidth(false);
smo426642.addModifier(smo426643, 0);
smo426674v0ar.push(smo426642);
const smo426644 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426644.setAttribute('id', 'smo426644');
const smo4266440acc = new VF.Accidental('b');
smo426644.addModifier(smo4266440acc, 0);
smo426644.addModifier(new VF.Dot(), 0);
smo426674v0ar.push(smo426644);
const smo426645 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426645.setAttribute('id', 'smo426645');
const smo4266450acc = new VF.Accidental('b');
smo426645.addModifier(smo4266450acc, 0);
smo426674v0ar.push(smo426645);
const smo426646 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426646.setAttribute('id', 'smo426646');
smo426674v0ar.push(smo426646);
const smo426647 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426647.setAttribute('id', 'smo426647');
smo426674v0ar.push(smo426647);
const smo426648 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426648.setAttribute('id', 'smo426648');
const smo426649 = new VF.ChordSymbol();
smo426649.setAttribute('id', 'smo426649');
smo426649.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo426649.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426649.setFont('Petaluma Script', 14).setReportWidth(false);
smo426648.addModifier(smo426649, 0);
smo426674v0ar.push(smo426648);
const smo426650 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426650.setAttribute('id', 'smo426650');
smo426674v0ar.push(smo426650);
const smo426651 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426651.setAttribute('id', 'smo426651');
smo426674v0ar.push(smo426651);
const smo426652 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426652.setAttribute('id', 'smo426652');
smo426674v0ar.push(smo426652);
const smo426653 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426653.setAttribute('id', 'smo426653');
const smo4266530acc = new VF.Accidental('n');
smo426653.addModifier(smo4266530acc, 0);
smo426674v0ar.push(smo426653);
const smo426654 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo426654.setAttribute('id', 'smo426654');
const smo4266540acc = new VF.Accidental('#');
smo426654.addModifier(smo4266540acc, 0);
smo426674v0ar.push(smo426654);
const smo426655 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426655.setAttribute('id', 'smo426655');
smo426674v0ar.push(smo426655);
const smo426656 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426656.setAttribute('id', 'smo426656');
smo426674v0ar.push(smo426656);
const smo426657 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426657.setAttribute('id', 'smo426657');
smo426674v0ar.push(smo426657);
const smo426658 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo426658.setAttribute('id', 'smo426658');
const smo4266580acc = new VF.Accidental('n');
smo426658.addModifier(smo4266580acc, 0);
smo426674v0ar.push(smo426658);
smo426674v0.addTickables(smo426674v0ar)
fmtsmo42667427.joinVoices([smo426674v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427448 = smo426645.getStemDirection();
smo426645.setStemDirection(dirsmo427448);
smo426646.setStemDirection(dirsmo427448);
smo426647.setStemDirection(dirsmo427448);
const smo427448 = new VF.Beam([smo426645,smo426646,smo426647]);
const dirsmo427449 = smo426648.getStemDirection();
smo426648.setStemDirection(dirsmo427449);
smo426650.setStemDirection(dirsmo427449);
smo426651.setStemDirection(dirsmo427449);
smo426652.setStemDirection(dirsmo427449);
smo426653.setStemDirection(dirsmo427449);
const smo427449 = new VF.Beam([smo426648,smo426650,smo426651,smo426652,smo426653]);
const dirsmo427450 = smo426654.getStemDirection();
smo426654.setStemDirection(dirsmo427450);
smo426655.setStemDirection(dirsmo427450);
smo426656.setStemDirection(dirsmo427450);
smo426657.setStemDirection(dirsmo427450);
smo426658.setStemDirection(dirsmo427450);
const smo427450 = new VF.Beam([smo426654,smo426655,smo426656,smo426657,smo426658]);
const smo426659 = new VF.Tuplet([smo426648,smo426650,smo426651], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo426660 = new VF.Tuplet([smo426654,smo426655,smo426656], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo427165
fmtsmo42667427.format([smo426674v0], 581);
const stavesmo426674 = new VF.Stave(46, 417.3846153846155, 665);
stavesmo426674.setAttribute('id', 'stavesmo426674');
stavesmo426674.setBegBarType(1);
stavesmo426674.addClef('treble');
const keysmo426674 = new VF.KeySignature('G');
keysmo426674.addToStave(stavesmo426674);
stavesmo426674.setContext(context);
stavesmo426674.draw();
smo426674v0.draw(context, stavesmo426674);
smo427448.setContext(context);
smo427448.draw();
smo427449.setContext(context);
smo427449.draw();
smo427450.setContext(context);
smo427450.draw();
smo426659.setContext(context).draw();
smo426660.setContext(context).draw();
const fmtsmo42670628 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo426706v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426706v0ar = [];
const smo426675 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426675.setAttribute('id', 'smo426675');
const smo426676 = new VF.ChordSymbol();
smo426676.setAttribute('id', 'smo426676');
smo426676.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426676.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426676.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426676.setFont('Petaluma Script', 14).setReportWidth(false);
smo426675.addModifier(smo426676, 0);
smo426706v0ar.push(smo426675);
const smo426677 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo426677.setAttribute('id', 'smo426677');
smo426706v0ar.push(smo426677);
const smo426678 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo426678.setAttribute('id', 'smo426678');
smo426706v0ar.push(smo426678);
const smo426679 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426679.setAttribute('id', 'smo426679');
smo426706v0ar.push(smo426679);
const smo426680 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo426680.setAttribute('id', 'smo426680');
const smo426681 = new VF.ChordSymbol();
smo426681.setAttribute('id', 'smo426681');
smo426681.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo426681.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426681.setFont('Petaluma Script', 14).setReportWidth(false);
smo426680.addModifier(smo426681, 0);
smo426706v0ar.push(smo426680);
const smo426682 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426682.setAttribute('id', 'smo426682');
smo426706v0ar.push(smo426682);
const smo426683 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo426684 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo426684.setAttribute('id', 'smo426684');
const acc0smo426684 = new VF.Accidental('#');
smo426684.addModifier(acc0smo426684, 0)
const ggrpsmo426683 = new VF.GraceNoteGroup([smo426684]);
ggrpsmo426683.beamNotes();
smo426683.addModifier(ggrpsmo426683, 0);
smo426683.setAttribute('id', 'smo426683');
smo426706v0ar.push(smo426683);
const smo426685 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo426685.setAttribute('id', 'smo426685');
smo426706v0ar.push(smo426685);
const smo426686 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426686.setAttribute('id', 'smo426686');
smo426706v0ar.push(smo426686);
const smo426687 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426687.setAttribute('id', 'smo426687');
const smo4266870acc = new VF.Accidental('b');
smo426687.addModifier(smo4266870acc, 0);
smo426706v0ar.push(smo426687);
const smo426688 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426688.setAttribute('id', 'smo426688');
smo426706v0ar.push(smo426688);
const smo426689 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426689.setAttribute('id', 'smo426689');
smo426706v0ar.push(smo426689);
smo426706v0.addTickables(smo426706v0ar)
fmtsmo42670628.joinVoices([smo426706v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427453 = smo426678.getStemDirection();
smo426678.setStemDirection(dirsmo427453);
smo426679.setStemDirection(dirsmo427453);
const smo427453 = new VF.Beam([smo426678,smo426679]);
const dirsmo427454 = smo426680.getStemDirection();
smo426680.setStemDirection(dirsmo427454);
smo426682.setStemDirection(dirsmo427454);
const smo427454 = new VF.Beam([smo426680,smo426682]);
const dirsmo427455 = smo426683.getStemDirection();
smo426683.setStemDirection(dirsmo427455);
smo426686.setStemDirection(dirsmo427455);
smo426687.setStemDirection(dirsmo427455);
smo426688.setStemDirection(dirsmo427455);
smo426689.setStemDirection(dirsmo427455);
const smo427455 = new VF.Beam([smo426683,smo426686,smo426687,smo426688,smo426689]);
const smo426690 = new VF.Tuplet([smo426677,smo426678,smo426679], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo426691 = new VF.Tuplet([smo426683,smo426685,smo426686], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo426692 = new VF.Tuplet([smo426687,smo426688,smo426689], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo427165
fmtsmo42670628.format([smo426706v0], 437);
const stavesmo426706 = new VF.Stave(711, 417.3846153846155, 451);
stavesmo426706.setAttribute('id', 'stavesmo426706');
stavesmo426706.setBegBarType(VF.Barline.type.NONE);
stavesmo426706.setContext(context);
stavesmo426706.draw();
smo426706v0.draw(context, stavesmo426706);
smo427453.setContext(context);
smo427453.draw();
smo427454.setContext(context);
smo427454.draw();
smo427455.setContext(context);
smo427455.draw();
smo426690.setContext(context).draw();
smo426691.setContext(context).draw();
smo426692.setContext(context).draw();
const fmtsmo42673129 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo426731v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426731v0ar = [];
const smo426707 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
const smo426709 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo426709.setAttribute('id', 'smo426709');
const ggrpsmo426707 = new VF.GraceNoteGroup([smo426709]);
ggrpsmo426707.beamNotes();
smo426707.addModifier(ggrpsmo426707, 0);
smo426707.setAttribute('id', 'smo426707');
const smo426708 = new VF.ChordSymbol();
smo426708.setAttribute('id', 'smo426708');
smo426708.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426708.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426708.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426708.setFont('Petaluma Script', 14).setReportWidth(false);
smo426707.addModifier(smo426708, 0);
smo426731v0ar.push(smo426707);
const smo426710 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426710.setAttribute('id', 'smo426710');
smo426731v0ar.push(smo426710);
const smo426711 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426711.setAttribute('id', 'smo426711');
smo426731v0ar.push(smo426711);
const smo426712 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426712.setAttribute('id', 'smo426712');
const smo426713 = new VF.ChordSymbol();
smo426713.setAttribute('id', 'smo426713');
smo426713.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo426713.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426713.setFont('Petaluma Script', 14).setReportWidth(false);
smo426712.addModifier(smo426713, 0);
smo426731v0ar.push(smo426712);
const smo426714 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo426714.setAttribute('id', 'smo426714');
smo426731v0ar.push(smo426714);
const smo426715 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo426715.setAttribute('id', 'smo426715');
const smo4267150acc = new VF.Accidental('b');
smo426715.addModifier(smo4267150acc, 0);
smo426731v0ar.push(smo426715);
const smo426716 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo426716.setAttribute('id', 'smo426716');
smo426731v0ar.push(smo426716);
const smo426717 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426717.setAttribute('id', 'smo426717');
smo426731v0ar.push(smo426717);
smo426731v0.addTickables(smo426731v0ar)
fmtsmo42673129.joinVoices([smo426731v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427461 = smo426707.getStemDirection();
smo426707.setStemDirection(dirsmo427461);
smo426710.setStemDirection(dirsmo427461);
const smo427461 = new VF.Beam([smo426707,smo426710]);
const dirsmo427462 = smo426714.getStemDirection();
smo426714.setStemDirection(dirsmo427462);
smo426715.setStemDirection(dirsmo427462);
smo426716.setStemDirection(dirsmo427462);
smo426717.setStemDirection(dirsmo427462);
const smo427462 = new VF.Beam([smo426714,smo426715,smo426716,smo426717]);
 
// formatting measures in staff group smo427165
fmtsmo42673129.format([smo426731v0], 306);
const stavesmo426731 = new VF.Stave(46, 578.3846153846155, 390);
stavesmo426731.setAttribute('id', 'stavesmo426731');
stavesmo426731.setBegBarType(1);
stavesmo426731.setEndBarType(2);
stavesmo426731.addClef('treble');
const keysmo426731 = new VF.KeySignature('G');
keysmo426731.addToStave(stavesmo426731);
stavesmo426731.setContext(context);
stavesmo426731.draw();
smo426731v0.draw(context, stavesmo426731);
smo427461.setContext(context);
smo427461.draw();
smo427462.setContext(context);
smo427462.draw();
const fmtsmo42675530 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo426755v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426755v0ar = [];
const smo426732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo426732.setAttribute('id', 'smo426732');
const smo426733 = new VF.ChordSymbol();
smo426733.setAttribute('id', 'smo426733');
smo426733.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426733.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426733.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426733.setFont('Petaluma Script', 14).setReportWidth(false);
smo426732.addModifier(smo426733, 0);
smo426755v0ar.push(smo426732);
const smo426734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo426734.setAttribute('id', 'smo426734');
smo426734.addModifier(new VF.Dot(), 0);
smo426755v0ar.push(smo426734);
const smo426735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo426735.setAttribute('id', 'smo426735');
const smo4267350acc = new VF.Accidental('n');
smo426735.addModifier(smo4267350acc, 0);
smo426755v0ar.push(smo426735);
const smo426736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426736.setAttribute('id', 'smo426736');
smo426736.addModifier(new VF.Dot(), 0);
smo426755v0ar.push(smo426736);
const smo426737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426737.setAttribute('id', 'smo426737');
const smo426738 = new VF.ChordSymbol();
smo426738.setAttribute('id', 'smo426738');
smo426738.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo426738.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3,"symbolType":2}'));
smo426738.setFont('Petaluma Script', 14).setReportWidth(false);
smo426737.addModifier(smo426738, 0);
smo426755v0ar.push(smo426737);
const smo426739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426739.setAttribute('id', 'smo426739');
smo426739.addModifier(new VF.Dot(), 0);
smo426755v0ar.push(smo426739);
const smo426740 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426740.setAttribute('id', 'smo426740');
const smo4267400acc = new VF.Accidental('n');
smo426740.addModifier(smo4267400acc, 0);
smo426755v0ar.push(smo426740);
const smo426741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo426741.setAttribute('id', 'smo426741');
smo426741.addModifier(new VF.Dot(), 0);
smo426755v0ar.push(smo426741);
smo426755v0.addTickables(smo426755v0ar)
fmtsmo42675530.joinVoices([smo426755v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427464 = smo426732.getStemDirection();
smo426732.setStemDirection(dirsmo427464);
smo426734.setStemDirection(dirsmo427464);
const smo427464 = new VF.Beam([smo426732,smo426734]);
const dirsmo427465 = smo426735.getStemDirection();
smo426735.setStemDirection(dirsmo427465);
smo426736.setStemDirection(dirsmo427465);
const smo427465 = new VF.Beam([smo426735,smo426736]);
const dirsmo427466 = smo426737.getStemDirection();
smo426737.setStemDirection(dirsmo427466);
smo426739.setStemDirection(dirsmo427466);
const smo427466 = new VF.Beam([smo426737,smo426739]);
const dirsmo427467 = smo426740.getStemDirection();
smo426740.setStemDirection(dirsmo427467);
smo426741.setStemDirection(dirsmo427467);
const smo427467 = new VF.Beam([smo426740,smo426741]);
 
// formatting measures in staff group smo427165
fmtsmo42675530.format([smo426755v0], 345);
const stavesmo426755 = new VF.Stave(436, 578.3846153846155, 359);
stavesmo426755.setAttribute('id', 'stavesmo426755');
stavesmo426755.setBegBarType(VF.Barline.type.NONE);
stavesmo426755.setContext(context);
stavesmo426755.draw();
smo426755v0.draw(context, stavesmo426755);
smo427464.setContext(context);
smo427464.draw();
smo427465.setContext(context);
smo427465.draw();
smo427466.setContext(context);
smo427466.draw();
smo427467.setContext(context);
smo427467.draw();
const fmtsmo42678531 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo426785v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426785v0ar = [];
const smo426756 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo426756.setAttribute('id', 'smo426756');
const smo4267560acc = new VF.Accidental('b');
smo426756.addModifier(smo4267560acc, 0);
const smo426757 = new VF.ChordSymbol();
smo426757.setAttribute('id', 'smo426757');
smo426757.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo426757.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426757.setFont('Petaluma Script', 14).setReportWidth(false);
smo426756.addModifier(smo426757, 0);
smo426785v0ar.push(smo426756);
const smo426758 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426758.setAttribute('id', 'smo426758');
smo426758.addModifier(new VF.Dot(), 0);
const smo426759 = new VF.ChordSymbol();
smo426759.setAttribute('id', 'smo426759');
smo426759.setFont('Petaluma Script', 14).setReportWidth(false);
smo426758.addModifier(smo426759, 0);
smo426785v0ar.push(smo426758);
const smo426760 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426760.setAttribute('id', 'smo426760');
const smo4267600acc = new VF.Accidental('b');
smo426760.addModifier(smo4267600acc, 0);
const smo426761 = new VF.ChordSymbol();
smo426761.setAttribute('id', 'smo426761');
smo426761.setFont('Petaluma Script', 14).setReportWidth(false);
smo426760.addModifier(smo426761, 0);
smo426785v0ar.push(smo426760);
const smo426762 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426762.setAttribute('id', 'smo426762');
smo426762.addModifier(new VF.Dot(), 0);
const smo426763 = new VF.ChordSymbol();
smo426763.setAttribute('id', 'smo426763');
smo426763.setFont('Petaluma Script', 14).setReportWidth(false);
smo426762.addModifier(smo426763, 0);
smo426785v0ar.push(smo426762);
const smo426764 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo426764.setAttribute('id', 'smo426764');
const smo4267640acc = new VF.Accidental('n');
smo426764.addModifier(smo4267640acc, 0);
const smo426765 = new VF.ChordSymbol();
smo426765.setAttribute('id', 'smo426765');
smo426765.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo426765.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426765.setFont('Petaluma Script', 14).setReportWidth(false);
smo426764.addModifier(smo426765, 0);
smo426785v0ar.push(smo426764);
const smo426766 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo426766.setAttribute('id', 'smo426766');
smo426766.addModifier(new VF.Dot(), 0);
const smo426767 = new VF.ChordSymbol();
smo426767.setAttribute('id', 'smo426767');
smo426767.setFont('Petaluma Script', 14).setReportWidth(false);
smo426766.addModifier(smo426767, 0);
smo426785v0ar.push(smo426766);
const smo426768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo426768.setAttribute('id', 'smo426768');
const smo4267680acc = new VF.Accidental('b');
smo426768.addModifier(smo4267680acc, 0);
const smo426769 = new VF.ChordSymbol();
smo426769.setAttribute('id', 'smo426769');
smo426769.setFont('Petaluma Script', 14).setReportWidth(false);
smo426768.addModifier(smo426769, 0);
smo426785v0ar.push(smo426768);
const smo426770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo426770.setAttribute('id', 'smo426770');
smo426770.addModifier(new VF.Dot(), 0);
const smo426771 = new VF.ChordSymbol();
smo426771.setAttribute('id', 'smo426771');
smo426771.setFont('Petaluma Script', 14).setReportWidth(false);
smo426770.addModifier(smo426771, 0);
smo426785v0ar.push(smo426770);
smo426785v0.addTickables(smo426785v0ar)
fmtsmo42678531.joinVoices([smo426785v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427470 = smo426756.getStemDirection();
smo426756.setStemDirection(dirsmo427470);
smo426758.setStemDirection(dirsmo427470);
const smo427470 = new VF.Beam([smo426756,smo426758]);
const dirsmo427471 = smo426760.getStemDirection();
smo426760.setStemDirection(dirsmo427471);
smo426762.setStemDirection(dirsmo427471);
const smo427471 = new VF.Beam([smo426760,smo426762]);
const dirsmo427472 = smo426764.getStemDirection();
smo426764.setStemDirection(dirsmo427472);
smo426766.setStemDirection(dirsmo427472);
const smo427472 = new VF.Beam([smo426764,smo426766]);
const dirsmo427473 = smo426768.getStemDirection();
smo426768.setStemDirection(dirsmo427473);
smo426770.setStemDirection(dirsmo427473);
const smo427473 = new VF.Beam([smo426768,smo426770]);
 
// formatting measures in staff group smo427165
fmtsmo42678531.format([smo426785v0], 355);
const stavesmo426785 = new VF.Stave(795, 578.3846153846155, 369);
stavesmo426785.setAttribute('id', 'stavesmo426785');
stavesmo426785.setBegBarType(VF.Barline.type.NONE);
stavesmo426785.setContext(context);
stavesmo426785.draw();
smo426785v0.draw(context, stavesmo426785);
smo427470.setContext(context);
smo427470.draw();
smo427471.setContext(context);
smo427471.draw();
smo427472.setContext(context);
smo427472.draw();
smo427473.setContext(context);
smo427473.draw();
const fmtsmo42682132 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo426821v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426821v0ar = [];
const smo426786 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo426786.setAttribute('id', 'smo426786');
const smo4267860acc = new VF.Accidental('b');
smo426786.addModifier(smo4267860acc, 0);
const smo426787 = new VF.ChordSymbol();
smo426787.setAttribute('id', 'smo426787');
smo426787.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1,"symbolType":2}'));
smo426787.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426787.setFont('Petaluma Script', 14).setReportWidth(false);
smo426786.addModifier(smo426787, 0);
smo426821v0ar.push(smo426786);
const smo426788 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo426788.setAttribute('id', 'smo426788');
const smo4267880acc = new VF.Accidental('b');
smo426788.addModifier(smo4267880acc, 0);
const smo426789 = new VF.ChordSymbol();
smo426789.setAttribute('id', 'smo426789');
smo426789.setFont('Petaluma Script', 14).setReportWidth(false);
smo426788.addModifier(smo426789, 0);
smo426821v0ar.push(smo426788);
const smo426790 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426790.setAttribute('id', 'smo426790');
const smo4267900acc = new VF.Accidental('n');
smo426790.addModifier(smo4267900acc, 0);
const smo426791 = new VF.ChordSymbol();
smo426791.setAttribute('id', 'smo426791');
smo426791.setFont('Petaluma Script', 14).setReportWidth(false);
smo426790.addModifier(smo426791, 0);
smo426821v0ar.push(smo426790);
const smo426792 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426792.setAttribute('id', 'smo426792');
const smo4267920acc = new VF.Accidental('b');
smo426792.addModifier(smo4267920acc, 0);
const smo426794 = new VF.Ornament('fall');
smo426792.addModifier(smo426794, 0);
const smo426793 = new VF.ChordSymbol();
smo426793.setAttribute('id', 'smo426793');
smo426793.setFont('Petaluma Script', 14).setReportWidth(false);
smo426792.addModifier(smo426793, 0);
smo426821v0ar.push(smo426792);
const smo426795 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426795.setAttribute('id', 'smo426795');
const smo426796 = new VF.ChordSymbol();
smo426796.setAttribute('id', 'smo426796');
smo426796.setFont('Petaluma Script', 14).setReportWidth(false);
smo426795.addModifier(smo426796, 0);
smo426821v0ar.push(smo426795);
const smo426797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo426797.setAttribute('id', 'smo426797');
const smo4267970acc = new VF.Accidental('b');
smo426797.addModifier(smo4267970acc, 0);
smo426821v0ar.push(smo426797);
const smo426798 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo426798.setAttribute('id', 'smo426798');
const smo4267980acc = new VF.Accidental('b');
smo426798.addModifier(smo4267980acc, 0);
smo426821v0ar.push(smo426798);
const smo426799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426799.setAttribute('id', 'smo426799');
smo426821v0ar.push(smo426799);
const smo426800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo426800.setAttribute('id', 'smo426800');
const smo4268000acc = new VF.Accidental('b');
smo426800.addModifier(smo4268000acc, 0);
const smo426801 = new VF.ChordSymbol();
smo426801.setAttribute('id', 'smo426801');
smo426801.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1,"symbolType":2}'));
smo426801.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426801.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426801.setFont('Petaluma Script', 14).setReportWidth(false);
smo426800.addModifier(smo426801, 0);
smo426821v0ar.push(smo426800);
const smo426802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo426802.setAttribute('id', 'smo426802');
const smo4268020acc = new VF.Accidental('b');
smo4268020acc.setAsCautionary();
smo426802.addModifier(smo4268020acc, 0);
smo426821v0ar.push(smo426802);
const smo426803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426803.setAttribute('id', 'smo426803');
const smo4268030acc = new VF.Accidental('b');
smo4268030acc.setAsCautionary();
smo426803.addModifier(smo4268030acc, 0);
smo426821v0ar.push(smo426803);
const smo426804 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo426804.setAttribute('id', 'smo426804');
smo426821v0ar.push(smo426804);
const smo426805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426805.setAttribute('id', 'smo426805');
smo426821v0ar.push(smo426805);
const smo426806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo426806.setAttribute('id', 'smo426806');
smo426821v0ar.push(smo426806);
const smo426807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426807.setAttribute('id', 'smo426807');
smo426821v0ar.push(smo426807);
smo426821v0.addTickables(smo426821v0ar)
fmtsmo42682132.joinVoices([smo426821v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427482 = smo426786.getStemDirection();
smo426786.setStemDirection(dirsmo427482);
smo426788.setStemDirection(dirsmo427482);
smo426790.setStemDirection(dirsmo427482);
smo426792.setStemDirection(dirsmo427482);
const smo427482 = new VF.Beam([smo426786,smo426788,smo426790,smo426792]);
const dirsmo427483 = smo426797.getStemDirection();
smo426797.setStemDirection(dirsmo427483);
smo426798.setStemDirection(dirsmo427483);
smo426799.setStemDirection(dirsmo427483);
const smo427483 = new VF.Beam([smo426797,smo426798,smo426799]);
const dirsmo427484 = smo426800.getStemDirection();
smo426800.setStemDirection(dirsmo427484);
smo426802.setStemDirection(dirsmo427484);
smo426803.setStemDirection(dirsmo427484);
smo426804.setStemDirection(dirsmo427484);
const smo427484 = new VF.Beam([smo426800,smo426802,smo426803,smo426804]);
const dirsmo427485 = smo426805.getStemDirection();
smo426805.setStemDirection(dirsmo427485);
smo426806.setStemDirection(dirsmo427485);
const smo427485 = new VF.Beam([smo426805,smo426806]);
 
// formatting measures in staff group smo427165
fmtsmo42682132.format([smo426821v0], 588);
const stavesmo426821 = new VF.Stave(46, 760.3846153846155, 672);
stavesmo426821.setAttribute('id', 'stavesmo426821');
stavesmo426821.setBegBarType(1);
stavesmo426821.addClef('treble');
const keysmo426821 = new VF.KeySignature('G');
keysmo426821.addToStave(stavesmo426821);
stavesmo426821.setContext(context);
stavesmo426821.draw();
smo426821v0.draw(context, stavesmo426821);
smo427482.setContext(context);
smo427482.draw();
smo427483.setContext(context);
smo427483.draw();
smo427484.setContext(context);
smo427484.draw();
smo427485.setContext(context);
smo427485.draw();
const fmtsmo42685033 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo426850v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426850v0ar = [];
const smo426822 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426822.setAttribute('id', 'smo426822');
const smo426823 = new VF.ChordSymbol();
smo426823.setAttribute('id', 'smo426823');
smo426823.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo426823.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426823.setFont('Petaluma Script', 14).setReportWidth(false);
smo426822.addModifier(smo426823, 0);
smo426850v0ar.push(smo426822);
const smo426824 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426824.setAttribute('id', 'smo426824');
smo426850v0ar.push(smo426824);
const smo426825 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo426825.setAttribute('id', 'smo426825');
smo426850v0ar.push(smo426825);
const smo426826 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426826.setAttribute('id', 'smo426826');
smo426850v0ar.push(smo426826);
const smo426827 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo426827.setAttribute('id', 'smo426827');
const smo426828 = new VF.ChordSymbol();
smo426828.setAttribute('id', 'smo426828');
smo426828.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo426828.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426828.setFont('Petaluma Script', 14).setReportWidth(false);
smo426827.addModifier(smo426828, 0);
smo426850v0ar.push(smo426827);
const smo426829 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo426829.setAttribute('id', 'smo426829');
const smo4268290acc = new VF.Accidental('b');
smo426829.addModifier(smo4268290acc, 0);
smo426850v0ar.push(smo426829);
const smo426830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo426830.setAttribute('id', 'smo426830');
smo426850v0ar.push(smo426830);
const smo426831 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo426831.setAttribute('id', 'smo426831');
smo426850v0ar.push(smo426831);
const smo426832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo426832.setAttribute('id', 'smo426832');
const smo426833 = new VF.ChordSymbol();
smo426833.setAttribute('id', 'smo426833');
smo426833.setFont('Petaluma Script', 14).setReportWidth(false);
smo426832.addModifier(smo426833, 0);
smo426850v0ar.push(smo426832);
const smo426834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo426834.setAttribute('id', 'smo426834');
smo426850v0ar.push(smo426834);
const smo426835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo426835.setAttribute('id', 'smo426835');
const smo4268350acc = new VF.Accidental('b');
smo426835.addModifier(smo4268350acc, 0);
smo426850v0ar.push(smo426835);
const smo426836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo426836.setAttribute('id', 'smo426836');
smo426850v0ar.push(smo426836);
smo426850v0.addTickables(smo426850v0ar)
fmtsmo42685033.joinVoices([smo426850v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427488 = smo426825.getStemDirection();
smo426825.setStemDirection(dirsmo427488);
smo426826.setStemDirection(dirsmo427488);
const smo427488 = new VF.Beam([smo426825,smo426826]);
const dirsmo427489 = smo426827.getStemDirection();
smo426827.setStemDirection(dirsmo427489);
smo426829.setStemDirection(dirsmo427489);
smo426830.setStemDirection(dirsmo427489);
smo426831.setStemDirection(dirsmo427489);
const smo427489 = new VF.Beam([smo426827,smo426829,smo426830,smo426831]);
const dirsmo427490 = smo426832.getStemDirection();
smo426832.setStemDirection(dirsmo427490);
smo426834.setStemDirection(dirsmo427490);
smo426835.setStemDirection(dirsmo427490);
smo426836.setStemDirection(dirsmo427490);
const smo427490 = new VF.Beam([smo426832,smo426834,smo426835,smo426836]);
 
// formatting measures in staff group smo427165
fmtsmo42685033.format([smo426850v0], 431);
const stavesmo426850 = new VF.Stave(718, 760.3846153846155, 445);
stavesmo426850.setAttribute('id', 'stavesmo426850');
stavesmo426850.setBegBarType(VF.Barline.type.NONE);
stavesmo426850.setContext(context);
stavesmo426850.draw();
smo426850v0.draw(context, stavesmo426850);
smo427488.setContext(context);
smo427488.draw();
smo427489.setContext(context);
smo427489.draw();
smo427490.setContext(context);
smo427490.draw();
const fmtsmo42687934 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo426879v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426879v0ar = [];
const smo426851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426851.setAttribute('id', 'smo426851');
const smo426852 = new VF.ChordSymbol();
smo426852.setAttribute('id', 'smo426852');
smo426852.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426852.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426852.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426852.setFont('Petaluma Script', 14).setReportWidth(false);
smo426851.addModifier(smo426852, 0);
smo426879v0ar.push(smo426851);
const smo426853 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo426853.setAttribute('id', 'smo426853');
smo426879v0ar.push(smo426853);
const smo426854 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426854.setAttribute('id', 'smo426854');
smo426879v0ar.push(smo426854);
const smo426855 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426855.setAttribute('id', 'smo426855');
const smo4268550acc = new VF.Accidental('b');
smo426855.addModifier(smo4268550acc, 0);
smo426879v0ar.push(smo426855);
const smo426856 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426856.setAttribute('id', 'smo426856');
smo426879v0ar.push(smo426856);
const smo426857 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426857.setAttribute('id', 'smo426857');
smo426857.addModifier(new VF.Dot(), 0);
smo426879v0ar.push(smo426857);
const smo426858 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426858.setAttribute('id', 'smo426858');
const smo426859 = new VF.ChordSymbol();
smo426859.setAttribute('id', 'smo426859');
smo426859.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo426859.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426859.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3,"symbolType":2}'));
smo426859.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo426859.setFont('Petaluma Script', 14).setReportWidth(false);
smo426858.addModifier(smo426859, 0);
smo426879v0ar.push(smo426858);
const smo426860 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo426860.setAttribute('id', 'smo426860');
const smo4268600acc = new VF.Accidental('b');
smo426860.addModifier(smo4268600acc, 0);
smo426879v0ar.push(smo426860);
const smo426861 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426861.setAttribute('id', 'smo426861');
const smo4268610acc = new VF.Accidental('b');
smo426861.addModifier(smo4268610acc, 0);
smo426879v0ar.push(smo426861);
const smo426862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo426862.setAttribute('id', 'smo426862');
smo426879v0ar.push(smo426862);
const smo426863 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo426863.setAttribute('id', 'smo426863');
const smo4268630acc = new VF.Accidental('#');
smo426863.addModifier(smo4268630acc, 0);
smo426879v0ar.push(smo426863);
const smo426864 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["f#/4/r"]}'))
smo426864.setAttribute('id', 'smo426864');
smo426879v0ar.push(smo426864);
smo426879v0.addTickables(smo426879v0ar)
fmtsmo42687934.joinVoices([smo426879v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427499 = smo426851.getStemDirection();
smo426851.setStemDirection(dirsmo427499);
smo426853.setStemDirection(dirsmo427499);
smo426854.setStemDirection(dirsmo427499);
smo426855.setStemDirection(dirsmo427499);
const smo427499 = new VF.Beam([smo426851,smo426853,smo426854,smo426855]);
const dirsmo427500 = smo426856.getStemDirection();
smo426856.setStemDirection(dirsmo427500);
smo426857.setStemDirection(dirsmo427500);
const smo427500 = new VF.Beam([smo426856,smo426857]);
const dirsmo427501 = smo426858.getStemDirection();
smo426858.setStemDirection(dirsmo427501);
smo426860.setStemDirection(dirsmo427501);
smo426861.setStemDirection(dirsmo427501);
const smo427501 = new VF.Beam([smo426858,smo426860,smo426861]);
const dirsmo427502 = smo426862.getStemDirection();
smo426862.setStemDirection(dirsmo427502);
smo426863.setStemDirection(dirsmo427502);
const smo427502 = new VF.Beam([smo426862,smo426863]);
const smo426865 = new VF.Tuplet([smo426853,smo426854,smo426855], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo427165
fmtsmo42687934.format([smo426879v0], 496);
const stavesmo426879 = new VF.Stave(46, 911.3846153846155, 579);
stavesmo426879.setAttribute('id', 'stavesmo426879');
stavesmo426879.setBegBarType(1);
stavesmo426879.addClef('treble');
const keysmo426879 = new VF.KeySignature('G');
keysmo426879.addToStave(stavesmo426879);
stavesmo426879.setContext(context);
stavesmo426879.draw();
smo426879v0.draw(context, stavesmo426879);
smo427499.setContext(context);
smo427499.draw();
smo427500.setContext(context);
smo427500.draw();
smo427501.setContext(context);
smo427501.draw();
smo427502.setContext(context);
smo427502.draw();
smo426865.setContext(context).draw();
const fmtsmo42690735 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo426907v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426907v0ar = [];
const smo426880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["fn/4/r"]}'))
smo426880.setAttribute('id', 'smo426880');
const smo426881 = new VF.ChordSymbol();
smo426881.setAttribute('id', 'smo426881');
smo426881.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo426881.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426881.setFont('Petaluma Script', 14).setReportWidth(false);
smo426880.addModifier(smo426881, 0);
smo426907v0ar.push(smo426880);
const smo426882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426882.setAttribute('id', 'smo426882');
const smo4268820acc = new VF.Accidental('n');
smo426882.addModifier(smo4268820acc, 0);
smo426907v0ar.push(smo426882);
const smo426883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo426883.setAttribute('id', 'smo426883');
const smo4268830acc = new VF.Accidental('b');
smo426883.addModifier(smo4268830acc, 0);
smo426907v0ar.push(smo426883);
const smo426884 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo426884.setAttribute('id', 'smo426884');
const smo4268840acc = new VF.Accidental('b');
smo426884.addModifier(smo4268840acc, 0);
smo426907v0ar.push(smo426884);
const smo426885 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426885.setAttribute('id', 'smo426885');
smo426907v0ar.push(smo426885);
const smo426886 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426886.setAttribute('id', 'smo426886');
smo426907v0ar.push(smo426886);
const smo426887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426887.setAttribute('id', 'smo426887');
smo426907v0ar.push(smo426887);
const smo426888 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426888.setAttribute('id', 'smo426888');
const smo4268880acc = new VF.Accidental('b');
smo4268880acc.setAsCautionary();
smo426888.addModifier(smo4268880acc, 0);
const smo426889 = new VF.ChordSymbol();
smo426889.setAttribute('id', 'smo426889');
smo426889.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1,"symbolType":2}'));
smo426889.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426889.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426889.setFont('Petaluma Script', 14).setReportWidth(false);
smo426888.addModifier(smo426889, 0);
smo426907v0ar.push(smo426888);
const smo426890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo426890.setAttribute('id', 'smo426890');
const smo4268900acc = new VF.Accidental('b');
smo426890.addModifier(smo4268900acc, 0);
smo426907v0ar.push(smo426890);
const smo426891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426891.setAttribute('id', 'smo426891');
const smo4268910acc = new VF.Accidental('b');
smo426891.addModifier(smo4268910acc, 0);
smo426907v0ar.push(smo426891);
const smo426892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo426892.setAttribute('id', 'smo426892');
const smo4268920acc = new VF.Accidental('b');
smo426892.addModifier(smo4268920acc, 0);
smo426907v0ar.push(smo426892);
const smo426893 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo426893.setAttribute('id', 'smo426893');
const smo4268930acc = new VF.Accidental('b');
smo426893.addModifier(smo4268930acc, 0);
smo426907v0ar.push(smo426893);
smo426907v0.addTickables(smo426907v0ar)
fmtsmo42690735.joinVoices([smo426907v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427505 = smo426882.getStemDirection();
smo426882.setStemDirection(dirsmo427505);
smo426883.setStemDirection(dirsmo427505);
const smo427505 = new VF.Beam([smo426882,smo426883]);
const dirsmo427506 = smo426884.getStemDirection();
smo426884.setStemDirection(dirsmo427506);
smo426885.setStemDirection(dirsmo427506);
smo426886.setStemDirection(dirsmo427506);
smo426887.setStemDirection(dirsmo427506);
const smo427506 = new VF.Beam([smo426884,smo426885,smo426886,smo426887]);
const dirsmo427507 = smo426888.getStemDirection();
smo426888.setStemDirection(dirsmo427507);
smo426890.setStemDirection(dirsmo427507);
smo426891.setStemDirection(dirsmo427507);
const smo427507 = new VF.Beam([smo426888,smo426890,smo426891]);
const dirsmo427508 = smo426892.getStemDirection();
smo426892.setStemDirection(dirsmo427508);
smo426893.setStemDirection(dirsmo427508);
const smo427508 = new VF.Beam([smo426892,smo426893]);
 
// formatting measures in staff group smo427165
fmtsmo42690735.format([smo426907v0], 524);
const stavesmo426907 = new VF.Stave(625, 911.3846153846155, 538);
stavesmo426907.setAttribute('id', 'stavesmo426907');
stavesmo426907.setBegBarType(VF.Barline.type.NONE);
stavesmo426907.setContext(context);
stavesmo426907.draw();
smo426907v0.draw(context, stavesmo426907);
smo427505.setContext(context);
smo427505.draw();
smo427506.setContext(context);
smo427506.draw();
smo427507.setContext(context);
smo427507.draw();
smo427508.setContext(context);
smo427508.draw();
const fmtsmo42693936 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo426939v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426939v0ar = [];
const smo426908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo426908.setAttribute('id', 'smo426908');
const smo426909 = new VF.ChordSymbol();
smo426909.setAttribute('id', 'smo426909');
smo426909.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426909.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426909.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426909.setFont('Petaluma Script', 14).setReportWidth(false);
smo426908.addModifier(smo426909, 0);
smo426939v0ar.push(smo426908);
const smo426910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426910.setAttribute('id', 'smo426910');
const smo426911 = new VF.Ornament('scoop');
smo426910.addModifier(smo426911, 0);
smo426939v0ar.push(smo426910);
const smo426912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426912.setAttribute('id', 'smo426912');
const smo4269120acc = new VF.Accidental('b');
smo426912.addModifier(smo4269120acc, 0);
smo426939v0ar.push(smo426912);
const smo426913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426913.setAttribute('id', 'smo426913');
smo426939v0ar.push(smo426913);
const smo426914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426914.setAttribute('id', 'smo426914');
smo426939v0ar.push(smo426914);
const smo426915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426915.setAttribute('id', 'smo426915');
smo426939v0ar.push(smo426915);
const smo426916 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426916.setAttribute('id', 'smo426916');
smo426939v0ar.push(smo426916);
const smo426917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo426917.setAttribute('id', 'smo426917');
smo426939v0ar.push(smo426917);
const smo426918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo426918.setAttribute('id', 'smo426918');
const smo426920 = new VF.Ornament('scoop');
smo426918.addModifier(smo426920, 0);
const smo426919 = new VF.ChordSymbol();
smo426919.setAttribute('id', 'smo426919');
smo426919.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo426919.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3,"symbolType":2}'));
smo426919.setFont('Petaluma Script', 14).setReportWidth(false);
smo426918.addModifier(smo426919, 0);
smo426939v0ar.push(smo426918);
const smo426921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426921.setAttribute('id', 'smo426921');
smo426939v0ar.push(smo426921);
const smo426922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426922.setAttribute('id', 'smo426922');
smo426939v0ar.push(smo426922);
const smo426923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426923.setAttribute('id', 'smo426923');
smo426939v0ar.push(smo426923);
const smo426924 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426924.setAttribute('id', 'smo426924');
const smo4269240acc = new VF.Accidental('n');
smo426924.addModifier(smo4269240acc, 0);
smo426939v0ar.push(smo426924);
smo426939v0.addTickables(smo426939v0ar)
fmtsmo42693936.joinVoices([smo426939v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427517 = smo426910.getStemDirection();
smo426910.setStemDirection(dirsmo427517);
smo426912.setStemDirection(dirsmo427517);
const smo427517 = new VF.Beam([smo426910,smo426912]);
const dirsmo427518 = smo426913.getStemDirection();
smo426913.setStemDirection(dirsmo427518);
smo426914.setStemDirection(dirsmo427518);
smo426915.setStemDirection(dirsmo427518);
smo426916.setStemDirection(dirsmo427518);
const smo427518 = new VF.Beam([smo426913,smo426914,smo426915,smo426916]);
const dirsmo427519 = smo426918.getStemDirection();
smo426918.setStemDirection(dirsmo427519);
smo426921.setStemDirection(dirsmo427519);
const smo427519 = new VF.Beam([smo426918,smo426921]);
const dirsmo427520 = smo426922.getStemDirection();
smo426922.setStemDirection(dirsmo427520);
smo426923.setStemDirection(dirsmo427520);
smo426924.setStemDirection(dirsmo427520);
const smo427520 = new VF.Beam([smo426922,smo426923,smo426924]);
const smo426925 = new VF.Tuplet([smo426913,smo426914,smo426915], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo427165
fmtsmo42693936.format([smo426939v0], 405);
const stavesmo426939 = new VF.Stave(46, 1082.3846153846155, 488);
stavesmo426939.setAttribute('id', 'stavesmo426939');
stavesmo426939.setBegBarType(1);
stavesmo426939.addClef('treble');
const keysmo426939 = new VF.KeySignature('G');
keysmo426939.addToStave(stavesmo426939);
stavesmo426939.setContext(context);
stavesmo426939.draw();
smo426939v0.draw(context, stavesmo426939);
smo427517.setContext(context);
smo427517.draw();
smo427518.setContext(context);
smo427518.draw();
smo427519.setContext(context);
smo427519.draw();
smo427520.setContext(context);
smo427520.draw();
smo426925.setContext(context).draw();
const fmtsmo42698137 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo426981v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo426981v0ar = [];
const smo426940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo426940.setAttribute('id', 'smo426940');
const smo426941 = new VF.ChordSymbol();
smo426941.setAttribute('id', 'smo426941');
smo426941.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo426941.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426941.setFont('Petaluma Script', 14).setReportWidth(false);
smo426940.addModifier(smo426941, 0);
smo426981v0ar.push(smo426940);
const smo426942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo426942.setAttribute('id', 'smo426942');
const smo4269420acc = new VF.Accidental('b');
smo426942.addModifier(smo4269420acc, 0);
smo426981v0ar.push(smo426942);
const smo426943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo426943.setAttribute('id', 'smo426943');
const smo4269430acc = new VF.Accidental('b');
smo426943.addModifier(smo4269430acc, 0);
smo426981v0ar.push(smo426943);
const smo426944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo426944.setAttribute('id', 'smo426944');
const smo4269440acc = new VF.Accidental('b');
smo426944.addModifier(smo4269440acc, 0);
smo426981v0ar.push(smo426944);
const smo426945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo426945.setAttribute('id', 'smo426945');
const smo4269450acc = new VF.Accidental('n');
smo426945.addModifier(smo4269450acc, 0);
smo426981v0ar.push(smo426945);
const smo426946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426946.setAttribute('id', 'smo426946');
const smo4269460acc = new VF.Accidental('b');
smo426946.addModifier(smo4269460acc, 0);
smo426981v0ar.push(smo426946);
const smo426947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426947.setAttribute('id', 'smo426947');
smo426981v0ar.push(smo426947);
const smo426948 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo426948.setAttribute('id', 'smo426948');
smo426981v0ar.push(smo426948);
const smo426949 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426949.setAttribute('id', 'smo426949');
smo426981v0ar.push(smo426949);
const smo426950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["an/4/r"]}'))
smo426950.setAttribute('id', 'smo426950');
smo426981v0ar.push(smo426950);
const smo426951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426951.setAttribute('id', 'smo426951');
smo426981v0ar.push(smo426951);
const smo426952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo426952.setAttribute('id', 'smo426952');
const smo4269520acc = new VF.Accidental('#');
smo426952.addModifier(smo4269520acc, 0);
const smo426953 = new VF.ChordSymbol();
smo426953.setAttribute('id', 'smo426953');
smo426953.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo426953.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426953.setFont('Petaluma Script', 14).setReportWidth(false);
smo426952.addModifier(smo426953, 0);
smo426981v0ar.push(smo426952);
const smo426954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo426954.setAttribute('id', 'smo426954');
smo426981v0ar.push(smo426954);
const smo426955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426955.setAttribute('id', 'smo426955');
smo426981v0ar.push(smo426955);
const smo426956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426956.setAttribute('id', 'smo426956');
smo426981v0ar.push(smo426956);
const smo426957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo426957.setAttribute('id', 'smo426957');
const smo4269570acc = new VF.Accidental('b');
smo4269570acc.setAsCautionary();
smo426957.addModifier(smo4269570acc, 0);
smo426981v0ar.push(smo426957);
const smo426958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo426958.setAttribute('id', 'smo426958');
const smo4269580acc = new VF.Accidental('n');
smo426958.addModifier(smo4269580acc, 0);
smo426981v0ar.push(smo426958);
const smo426959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426959.setAttribute('id', 'smo426959');
smo426981v0ar.push(smo426959);
const smo426960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426960.setAttribute('id', 'smo426960');
smo426981v0ar.push(smo426960);
smo426981v0.addTickables(smo426981v0ar)
fmtsmo42698137.joinVoices([smo426981v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427523 = smo426943.getStemDirection();
smo426943.setStemDirection(dirsmo427523);
smo426944.setStemDirection(dirsmo427523);
smo426945.setStemDirection(dirsmo427523);
const smo427523 = new VF.Beam([smo426943,smo426944,smo426945]);
const dirsmo427524 = smo426946.getStemDirection();
smo426946.setStemDirection(dirsmo427524);
smo426947.setStemDirection(dirsmo427524);
smo426949.setStemDirection(dirsmo427524);
smo426951.setStemDirection(dirsmo427524);
const smo427524 = new VF.Beam([smo426946,smo426947,smo426949,smo426951]);
const dirsmo427525 = smo426952.getStemDirection();
smo426952.setStemDirection(dirsmo427525);
smo426954.setStemDirection(dirsmo427525);
smo426955.setStemDirection(dirsmo427525);
smo426956.setStemDirection(dirsmo427525);
const smo427525 = new VF.Beam([smo426952,smo426954,smo426955,smo426956]);
const dirsmo427526 = smo426957.getStemDirection();
smo426957.setStemDirection(dirsmo427526);
smo426958.setStemDirection(dirsmo427526);
smo426959.setStemDirection(dirsmo427526);
smo426960.setStemDirection(dirsmo427526);
const smo427526 = new VF.Beam([smo426957,smo426958,smo426959,smo426960]);
const smo426961 = new VF.Tuplet([smo426940,smo426942], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo426962 = new VF.Tuplet([smo426943,smo426944,smo426945], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo426963 = new VF.Tuplet([smo426946,smo426947,smo426948], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo426964 = new VF.Tuplet([smo426949,smo426950,smo426951], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo426965 = new VF.Tuplet([smo426954,smo426955,smo426956], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo426966 = new VF.Tuplet([smo426957,smo426958], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo426967 = new VF.Tuplet([smo426959,smo426960], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo427165
fmtsmo42698137.format([smo426981v0], 614);
const stavesmo426981 = new VF.Stave(534, 1082.3846153846155, 628);
stavesmo426981.setAttribute('id', 'stavesmo426981');
stavesmo426981.setBegBarType(VF.Barline.type.NONE);
stavesmo426981.setContext(context);
stavesmo426981.draw();
smo426981v0.draw(context, stavesmo426981);
smo427523.setContext(context);
smo427523.draw();
smo427524.setContext(context);
smo427524.draw();
smo427525.setContext(context);
smo427525.draw();
smo427526.setContext(context);
smo427526.draw();
smo426961.setContext(context).draw();
smo426962.setContext(context).draw();
smo426963.setContext(context).draw();
smo426964.setContext(context).draw();
smo426965.setContext(context).draw();
smo426966.setContext(context).draw();
smo426967.setContext(context).draw();
const fmtsmo42701038 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo427010v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo427010v0ar = [];
const smo426982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo426984 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo426984.setAttribute('id', 'smo426984');
const acc0smo426984 = new VF.Accidental('#');
smo426984.addModifier(acc0smo426984, 0)
const ggrpsmo426982 = new VF.GraceNoteGroup([smo426984]);
ggrpsmo426982.beamNotes();
smo426982.addModifier(ggrpsmo426982, 0);
smo426982.setAttribute('id', 'smo426982');
const smo426983 = new VF.ChordSymbol();
smo426983.setAttribute('id', 'smo426983');
smo426983.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo426983.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo426983.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426983.setFont('Petaluma Script', 14).setReportWidth(false);
smo426982.addModifier(smo426983, 0);
smo427010v0ar.push(smo426982);
const smo426985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo426985.setAttribute('id', 'smo426985');
smo427010v0ar.push(smo426985);
const smo426986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo426986.setAttribute('id', 'smo426986');
const smo4269860acc = new VF.Accidental('b');
smo426986.addModifier(smo4269860acc, 0);
smo427010v0ar.push(smo426986);
const smo426987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo426987.setAttribute('id', 'smo426987');
smo427010v0ar.push(smo426987);
const smo426988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo426988.setAttribute('id', 'smo426988');
smo427010v0ar.push(smo426988);
const smo426989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo426990 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo426990.setAttribute('id', 'smo426990');
const acc0smo426990 = new VF.Accidental('#');
smo426990.addModifier(acc0smo426990, 0)
const ggrpsmo426989 = new VF.GraceNoteGroup([smo426990]);
ggrpsmo426989.beamNotes();
smo426989.addModifier(ggrpsmo426989, 0);
smo426989.setAttribute('id', 'smo426989');
smo427010v0ar.push(smo426989);
const smo426991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo426991.setAttribute('id', 'smo426991');
const smo426992 = new VF.ChordSymbol();
smo426992.setAttribute('id', 'smo426992');
smo426992.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo426992.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo426992.setFont('Petaluma Script', 14).setReportWidth(false);
smo426991.addModifier(smo426992, 0);
smo427010v0ar.push(smo426991);
const smo426993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo426993.setAttribute('id', 'smo426993');
const smo4269930acc = new VF.Accidental('b');
smo426993.addModifier(smo4269930acc, 0);
smo427010v0ar.push(smo426993);
const smo426994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo426994.setAttribute('id', 'smo426994');
smo427010v0ar.push(smo426994);
const smo426995 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo426995.setAttribute('id', 'smo426995');
smo427010v0ar.push(smo426995);
const smo426996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo426996.setAttribute('id', 'smo426996');
smo427010v0ar.push(smo426996);
smo427010v0.addTickables(smo427010v0ar)
fmtsmo42701038.joinVoices([smo427010v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427535 = smo426982.getStemDirection();
smo426982.setStemDirection(dirsmo427535);
smo426985.setStemDirection(dirsmo427535);
smo426986.setStemDirection(dirsmo427535);
const smo427535 = new VF.Beam([smo426982,smo426985,smo426986]);
const dirsmo427536 = smo426987.getStemDirection();
smo426987.setStemDirection(dirsmo427536);
smo426988.setStemDirection(dirsmo427536);
smo426989.setStemDirection(dirsmo427536);
const smo427536 = new VF.Beam([smo426987,smo426988,smo426989]);
const dirsmo427537 = smo426991.getStemDirection();
smo426991.setStemDirection(dirsmo427537);
smo426993.setStemDirection(dirsmo427537);
smo426994.setStemDirection(dirsmo427537);
const smo427537 = new VF.Beam([smo426991,smo426993,smo426994]);
const dirsmo427538 = smo426995.getStemDirection();
smo426995.setStemDirection(dirsmo427538);
smo426996.setStemDirection(dirsmo427538);
const smo427538 = new VF.Beam([smo426995,smo426996]);
 
// formatting measures in staff group smo427165
fmtsmo42701038.format([smo427010v0], 349);
const stavesmo427010 = new VF.Stave(46, 1233.3846153846155, 432);
stavesmo427010.setAttribute('id', 'stavesmo427010');
stavesmo427010.setBegBarType(1);
stavesmo427010.addClef('treble');
const keysmo427010 = new VF.KeySignature('G');
keysmo427010.addToStave(stavesmo427010);
stavesmo427010.setContext(context);
stavesmo427010.draw();
smo427010v0.draw(context, stavesmo427010);
smo427535.setContext(context);
smo427535.draw();
smo427536.setContext(context);
smo427536.draw();
smo427537.setContext(context);
smo427537.draw();
smo427538.setContext(context);
smo427538.draw();
const fmtsmo42703339 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo427033v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo427033v0ar = [];
const smo427011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427011.setAttribute('id', 'smo427011');
const smo427012 = new VF.ChordSymbol();
smo427012.setAttribute('id', 'smo427012');
smo427012.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo427012.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427012.setFont('Petaluma Script', 14).setReportWidth(false);
smo427011.addModifier(smo427012, 0);
smo427033v0ar.push(smo427011);
const smo427013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo427013.setAttribute('id', 'smo427013');
smo427033v0ar.push(smo427013);
const smo427014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo427014.setAttribute('id', 'smo427014');
const smo427015 = new VF.ChordSymbol();
smo427015.setAttribute('id', 'smo427015');
smo427015.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1,"symbolType":2}'));
smo427015.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427015.setFont('Petaluma Script', 14).setReportWidth(false);
smo427014.addModifier(smo427015, 0);
smo427033v0ar.push(smo427014);
const smo427016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo427016.setAttribute('id', 'smo427016');
smo427033v0ar.push(smo427016);
const smo427017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo427017.setAttribute('id', 'smo427017');
smo427033v0ar.push(smo427017);
const smo427018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo427018.setAttribute('id', 'smo427018');
const smo4270180acc = new VF.Accidental('n');
smo427018.addModifier(smo4270180acc, 0);
smo427033v0ar.push(smo427018);
const smo427019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo427019.setAttribute('id', 'smo427019');
const smo4270190acc = new VF.Accidental('b');
smo427019.addModifier(smo4270190acc, 0);
smo427033v0ar.push(smo427019);
smo427033v0.addTickables(smo427033v0ar)
fmtsmo42703339.joinVoices([smo427033v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427541 = smo427014.getStemDirection();
smo427014.setStemDirection(dirsmo427541);
smo427016.setStemDirection(dirsmo427541);
smo427017.setStemDirection(dirsmo427541);
const smo427541 = new VF.Beam([smo427014,smo427016,smo427017]);
const dirsmo427542 = smo427018.getStemDirection();
smo427018.setStemDirection(dirsmo427542);
smo427019.setStemDirection(dirsmo427542);
const smo427542 = new VF.Beam([smo427018,smo427019]);
 
// formatting measures in staff group smo427165
fmtsmo42703339.format([smo427033v0], 240);
const stavesmo427033 = new VF.Stave(478, 1233.3846153846155, 254);
stavesmo427033.setAttribute('id', 'stavesmo427033');
stavesmo427033.setBegBarType(VF.Barline.type.NONE);
stavesmo427033.setContext(context);
stavesmo427033.draw();
smo427033v0.draw(context, stavesmo427033);
smo427541.setContext(context);
smo427541.draw();
smo427542.setContext(context);
smo427542.draw();
const fmtsmo42706340 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo427063v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo427063v0ar = [];
const smo427034 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427034.setAttribute('id', 'smo427034');
const smo427035 = new VF.ChordSymbol();
smo427035.setAttribute('id', 'smo427035');
smo427035.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo427035.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427035.setFont('Petaluma Script', 14).setReportWidth(false);
smo427034.addModifier(smo427035, 0);
smo427063v0ar.push(smo427034);
const smo427036 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo427036.setAttribute('id', 'smo427036');
smo427063v0ar.push(smo427036);
const smo427037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo427037.setAttribute('id', 'smo427037');
const smo4270370acc = new VF.Accidental('b');
smo427037.addModifier(smo4270370acc, 0);
smo427063v0ar.push(smo427037);
const smo427038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo427038.setAttribute('id', 'smo427038');
const smo4270380acc = new VF.Accidental('n');
smo427038.addModifier(smo4270380acc, 0);
smo427063v0ar.push(smo427038);
const smo427039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo427039.setAttribute('id', 'smo427039');
smo427063v0ar.push(smo427039);
const smo427040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n"]}'))
smo427040.setAttribute('id', 'smo427040');
const smo4270400acc = new VF.Accidental('b');
smo427040.addModifier(smo4270400acc, 0);
const smo427041 = new VF.ChordSymbol();
smo427041.setAttribute('id', 'smo427041');
smo427041.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo427041.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427041.setFont('Petaluma Script', 14).setReportWidth(false);
smo427040.addModifier(smo427041, 0);
smo427063v0ar.push(smo427040);
const smo427042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo427042.setAttribute('id', 'smo427042');
const smo4270420acc = new VF.Accidental('b');
smo427042.addModifier(smo4270420acc, 0);
smo427063v0ar.push(smo427042);
const smo427043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo427043.setAttribute('id', 'smo427043');
const smo4270430acc = new VF.Accidental('n');
smo427043.addModifier(smo4270430acc, 0);
smo427063v0ar.push(smo427043);
const smo427044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo427044.setAttribute('id', 'smo427044');
const smo4270440acc = new VF.Accidental('b');
smo427044.addModifier(smo4270440acc, 0);
smo427063v0ar.push(smo427044);
const smo427045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo427045.setAttribute('id', 'smo427045');
smo427063v0ar.push(smo427045);
const smo427046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo427046.setAttribute('id', 'smo427046');
smo427063v0ar.push(smo427046);
const smo427047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo427047.setAttribute('id', 'smo427047');
smo427063v0ar.push(smo427047);
const smo427048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo427048.setAttribute('id', 'smo427048');
const smo4270480acc = new VF.Accidental('n');
smo427048.addModifier(smo4270480acc, 0);
smo427063v0ar.push(smo427048);
const smo427049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo427049.setAttribute('id', 'smo427049');
smo427063v0ar.push(smo427049);
smo427063v0.addTickables(smo427063v0ar)
fmtsmo42706340.joinVoices([smo427063v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427545 = smo427036.getStemDirection();
smo427036.setStemDirection(dirsmo427545);
smo427037.setStemDirection(dirsmo427545);
smo427038.setStemDirection(dirsmo427545);
smo427039.setStemDirection(dirsmo427545);
const smo427545 = new VF.Beam([smo427036,smo427037,smo427038,smo427039]);
const dirsmo427546 = smo427040.getStemDirection();
smo427040.setStemDirection(dirsmo427546);
smo427042.setStemDirection(dirsmo427546);
smo427043.setStemDirection(dirsmo427546);
smo427044.setStemDirection(dirsmo427546);
smo427045.setStemDirection(dirsmo427546);
const smo427546 = new VF.Beam([smo427040,smo427042,smo427043,smo427044,smo427045]);
const dirsmo427547 = smo427046.getStemDirection();
smo427046.setStemDirection(dirsmo427547);
smo427047.setStemDirection(dirsmo427547);
smo427048.setStemDirection(dirsmo427547);
smo427049.setStemDirection(dirsmo427547);
const smo427547 = new VF.Beam([smo427046,smo427047,smo427048,smo427049]);
 
// formatting measures in staff group smo427165
fmtsmo42706340.format([smo427063v0], 417);
const stavesmo427063 = new VF.Stave(732, 1233.3846153846155, 431);
stavesmo427063.setAttribute('id', 'stavesmo427063');
stavesmo427063.setBegBarType(VF.Barline.type.NONE);
stavesmo427063.setContext(context);
stavesmo427063.draw();
smo427063v0.draw(context, stavesmo427063);
smo427545.setContext(context);
smo427545.draw();
smo427546.setContext(context);
smo427546.draw();
smo427547.setContext(context);
smo427547.draw();
const fmtsmo42709341 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo427093v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo427093v0ar = [];
const smo427064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo427064.setAttribute('id', 'smo427064');
const smo427065 = new VF.ChordSymbol();
smo427065.setAttribute('id', 'smo427065');
smo427065.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo427065.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo427065.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427065.setFont('Petaluma Script', 14).setReportWidth(false);
smo427064.addModifier(smo427065, 0);
smo427093v0ar.push(smo427064);
const smo427066 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo427066.setAttribute('id', 'smo427066');
smo427093v0ar.push(smo427066);
const smo427067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo427067.setAttribute('id', 'smo427067');
smo427093v0ar.push(smo427067);
const smo427068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo427068.setAttribute('id', 'smo427068');
const smo4270680acc = new VF.Accidental('b');
smo427068.addModifier(smo4270680acc, 0);
smo427093v0ar.push(smo427068);
const smo427069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo427069.setAttribute('id', 'smo427069');
smo427093v0ar.push(smo427069);
const smo427070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo427070.setAttribute('id', 'smo427070');
smo427093v0ar.push(smo427070);
const smo427071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo427071.setAttribute('id', 'smo427071');
smo427093v0ar.push(smo427071);
const smo427072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo427072.setAttribute('id', 'smo427072');
smo427093v0ar.push(smo427072);
const smo427073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo427073.setAttribute('id', 'smo427073');
smo427093v0ar.push(smo427073);
const smo427074 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo427074.setAttribute('id', 'smo427074');
const smo427076 = new VF.Ornament('scoop');
smo427074.addModifier(smo427076, 0);
const smo427075 = new VF.ChordSymbol();
smo427075.setAttribute('id', 'smo427075');
smo427075.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo427075.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427075.setFont('Petaluma Script', 14).setReportWidth(false);
smo427074.addModifier(smo427075, 0);
smo427093v0ar.push(smo427074);
const smo427077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo427077.setAttribute('id', 'smo427077');
smo427093v0ar.push(smo427077);
const smo427078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo427078.setAttribute('id', 'smo427078');
smo427093v0ar.push(smo427078);
smo427093v0.addTickables(smo427093v0ar)
fmtsmo42709341.joinVoices([smo427093v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427555 = smo427064.getStemDirection();
smo427064.setStemDirection(dirsmo427555);
smo427066.setStemDirection(dirsmo427555);
smo427067.setStemDirection(dirsmo427555);
smo427068.setStemDirection(dirsmo427555);
const smo427555 = new VF.Beam([smo427064,smo427066,smo427067,smo427068]);
const dirsmo427556 = smo427069.getStemDirection();
smo427069.setStemDirection(dirsmo427556);
smo427070.setStemDirection(dirsmo427556);
smo427071.setStemDirection(dirsmo427556);
smo427072.setStemDirection(dirsmo427556);
smo427073.setStemDirection(dirsmo427556);
const smo427556 = new VF.Beam([smo427069,smo427070,smo427071,smo427072,smo427073]);
const dirsmo427557 = smo427074.getStemDirection();
smo427074.setStemDirection(dirsmo427557);
smo427077.setStemDirection(dirsmo427557);
const smo427557 = new VF.Beam([smo427074,smo427077]);
const smo427079 = new VF.Tuplet([smo427069,smo427070,smo427071], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo427165
fmtsmo42709341.format([smo427093v0], 294);
const stavesmo427093 = new VF.Stave(46, 1379.3846153846155, 377);
stavesmo427093.setAttribute('id', 'stavesmo427093');
stavesmo427093.setBegBarType(1);
stavesmo427093.addClef('treble');
const keysmo427093 = new VF.KeySignature('G');
keysmo427093.addToStave(stavesmo427093);
stavesmo427093.setContext(context);
stavesmo427093.draw();
smo427093v0.draw(context, stavesmo427093);
smo427555.setContext(context);
smo427555.draw();
smo427556.setContext(context);
smo427556.draw();
smo427557.setContext(context);
smo427557.draw();
smo427079.setContext(context).draw();
const fmtsmo42712342 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo427123v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo427123v0ar = [];
const smo427094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427094.setAttribute('id', 'smo427094');
smo427123v0ar.push(smo427094);
const smo427095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo427095.setAttribute('id', 'smo427095');
const smo427096 = new VF.ChordSymbol();
smo427096.setAttribute('id', 'smo427096');
smo427096.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo427096.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo427096.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427096.setFont('Petaluma Script', 14).setReportWidth(false);
smo427095.addModifier(smo427096, 0);
smo427123v0ar.push(smo427095);
const smo427097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427097.setAttribute('id', 'smo427097');
smo427123v0ar.push(smo427097);
const smo427098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo427098.setAttribute('id', 'smo427098');
const smo4270980acc = new VF.Accidental('b');
smo427098.addModifier(smo4270980acc, 0);
smo427123v0ar.push(smo427098);
const smo427099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo427099.setAttribute('id', 'smo427099');
smo427123v0ar.push(smo427099);
const smo427100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo427100.setAttribute('id', 'smo427100');
smo427123v0ar.push(smo427100);
const smo427101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo427101.setAttribute('id', 'smo427101');
smo427123v0ar.push(smo427101);
const smo427102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo427102.setAttribute('id', 'smo427102');
smo427123v0ar.push(smo427102);
const smo427103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo427103.setAttribute('id', 'smo427103');
const smo427104 = new VF.ChordSymbol();
smo427104.setAttribute('id', 'smo427104');
smo427104.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo427104.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo427104.setFont('Petaluma Script', 14).setReportWidth(false);
smo427103.addModifier(smo427104, 0);
smo427123v0ar.push(smo427103);
const smo427105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo427105.setAttribute('id', 'smo427105');
smo427123v0ar.push(smo427105);
const smo427106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo427106.setAttribute('id', 'smo427106');
smo427123v0ar.push(smo427106);
const smo427107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo427107.setAttribute('id', 'smo427107');
smo427123v0ar.push(smo427107);
const smo427108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo427108.setAttribute('id', 'smo427108');
smo427123v0ar.push(smo427108);
const smo427109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo427109.setAttribute('id', 'smo427109');
smo427123v0ar.push(smo427109);
smo427123v0.addTickables(smo427123v0ar)
fmtsmo42712342.joinVoices([smo427123v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
const dirsmo427560 = smo427099.getStemDirection();
smo427099.setStemDirection(dirsmo427560);
smo427100.setStemDirection(dirsmo427560);
smo427101.setStemDirection(dirsmo427560);
smo427102.setStemDirection(dirsmo427560);
const smo427560 = new VF.Beam([smo427099,smo427100,smo427101,smo427102]);
const dirsmo427561 = smo427103.getStemDirection();
smo427103.setStemDirection(dirsmo427561);
smo427105.setStemDirection(dirsmo427561);
smo427106.setStemDirection(dirsmo427561);
const smo427561 = new VF.Beam([smo427103,smo427105,smo427106]);
 
// formatting measures in staff group smo427165
fmtsmo42712342.format([smo427123v0], 310);
const stavesmo427123 = new VF.Stave(423, 1379.3846153846155, 325);
stavesmo427123.setAttribute('id', 'stavesmo427123');
stavesmo427123.setBegBarType(VF.Barline.type.NONE);
stavesmo427123.setEndBarType(2);
stavesmo427123.setContext(context);
stavesmo427123.draw();
smo427123v0.draw(context, stavesmo427123);
smo427560.setContext(context);
smo427560.draw();
smo427561.setContext(context);
smo427561.draw();
const fmtsmo42714143 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo427141v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo427141v0ar = [];
const smo427124 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo427124.setAttribute('id', 'smo427124');
smo427141v0ar.push(smo427124);
const smo427125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427125.setAttribute('id', 'smo427125');
smo427141v0ar.push(smo427125);
const smo427126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427126.setAttribute('id', 'smo427126');
smo427141v0ar.push(smo427126);
const smo427127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo427127.setAttribute('id', 'smo427127');
smo427141v0ar.push(smo427127);
smo427141v0.addTickables(smo427141v0ar)
fmtsmo42714143.joinVoices([smo427141v0]);
// create beam groups and tuplets for format grp smo427165 before formatting
 
// formatting measures in staff group smo427165
fmtsmo42714143.format([smo427141v0], 194);
const stavesmo427141 = new VF.Stave(748, 1379.3846153846155, 208);
stavesmo427141.setAttribute('id', 'stavesmo427141');
stavesmo427141.setBegBarType(VF.Barline.type.NONE);
stavesmo427141.setContext(context);
stavesmo427141.draw();
smo427141v0.draw(context, stavesmo427141);
// modifier from 0-36-0-11 to 0-36-0-12
const smo427703 = new VF.Curve(smo426923, smo426924, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"position_end":2}'));
smo427703.setContext(context).draw();
// modifier from 0-36-0-9 to 0-36-0-10
const smo427704 = new VF.StaveTie({ first_note: smo426921, last_note: smo426922, 
          firstNote: smo426921, lastNote: smo426922, first_indices: [0], last_indices: [0]});
smo427704.setContext(context).draw();
// modifier from 0-25-0-8 to 0-25-0-9
const smo427705 = new VF.StaveTie({ first_note: smo426586, last_note: smo426589, 
          firstNote: smo426586, lastNote: smo426589, first_indices: [0], last_indices: [0]});
smo427705.setContext(context).draw();
// modifier from 0-25-0-12 to 0-25-0-13
const smo427706 = new VF.StaveTie({ first_note: smo426592, last_note: smo426593, 
          firstNote: smo426592, lastNote: smo426593, first_indices: [0], last_indices: [0]});
smo427706.setContext(context).draw();
// modifier from 0-26-0-10 to 0-26-0-11
const smo427707 = new VF.StaveTie({ first_note: smo426624, last_note: smo426625, 
          firstNote: smo426624, lastNote: smo426625, first_indices: [0], last_indices: [0]});
smo427707.setContext(context).draw();
// modifier from 0-29-0-1 to 0-29-0-2
const smo427708 = new VF.StaveTie({ first_note: smo426710, last_note: smo426711, 
          firstNote: smo426710, lastNote: smo426711, first_indices: [0], last_indices: [0]});
smo427708.setContext(context).draw();
}
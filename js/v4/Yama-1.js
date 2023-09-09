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
const fmtsmo41476425 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo414764v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414764v0ar = [];
const smo414730 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo414730.setAttribute('id', 'smo414730');
const smo4147300acc = new VF.Accidental('b');
smo414730.addModifier(smo4147300acc, 0);
const smo414731 = new VF.ChordSymbol();
smo414731.setAttribute('id', 'smo414731');
smo414731.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo414731.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo414731.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414731.setFont('Petaluma Script', 14).setReportWidth(false);
smo414730.addModifier(smo414731, 0);
smo414764v0ar.push(smo414730);
const smo414732 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo414732.setAttribute('id', 'smo414732');
smo414764v0ar.push(smo414732);
const smo414733 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414733.setAttribute('id', 'smo414733');
const smo4147330acc = new VF.Accidental('b');
smo414733.addModifier(smo4147330acc, 0);
smo414764v0ar.push(smo414733);
const smo414734 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414734.setAttribute('id', 'smo414734');
smo414764v0ar.push(smo414734);
const smo414735 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo414735.setAttribute('id', 'smo414735');
smo414764v0ar.push(smo414735);
const smo414736 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414736.setAttribute('id', 'smo414736');
smo414764v0ar.push(smo414736);
const smo414737 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414737.setAttribute('id', 'smo414737');
const smo414738 = new VF.ChordSymbol();
smo414738.setAttribute('id', 'smo414738');
smo414738.setFont('Petaluma Script', 14).setReportWidth(false);
smo414737.addModifier(smo414738, 0);
smo414764v0ar.push(smo414737);
const smo414739 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414739.setAttribute('id', 'smo414739');
const smo414740 = new VF.ChordSymbol();
smo414740.setAttribute('id', 'smo414740');
smo414740.setFont('Petaluma Script', 14).setReportWidth(false);
smo414739.addModifier(smo414740, 0);
smo414764v0ar.push(smo414739);
const smo414741 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo414741.setAttribute('id', 'smo414741');
const smo414743 = new VF.Ornament('scoop');
smo414741.addModifier(smo414743, 0);
const smo414742 = new VF.ChordSymbol();
smo414742.setAttribute('id', 'smo414742');
smo414742.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo414742.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414742.setFont('Petaluma Script', 14).setReportWidth(false);
smo414741.addModifier(smo414742, 0);
smo414764v0ar.push(smo414741);
const smo414744 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo414744.setAttribute('id', 'smo414744');
smo414764v0ar.push(smo414744);
const smo414745 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414745.setAttribute('id', 'smo414745');
smo414764v0ar.push(smo414745);
const smo414746 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414746.setAttribute('id', 'smo414746');
smo414764v0ar.push(smo414746);
const smo414747 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414747.setAttribute('id', 'smo414747');
smo414764v0ar.push(smo414747);
const smo414748 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414748.setAttribute('id', 'smo414748');
smo414764v0ar.push(smo414748);
const smo414749 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo414749.setAttribute('id', 'smo414749');
const smo414750 = new VF.ChordSymbol();
smo414750.setAttribute('id', 'smo414750');
smo414750.setFont('Petaluma Script', 14).setReportWidth(false);
smo414749.addModifier(smo414750, 0);
smo414764v0ar.push(smo414749);
smo414764v0.addTickables(smo414764v0ar)
fmtsmo41476425.joinVoices([smo414764v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415588 = smo414730.getStemDirection();
smo414730.setStemDirection(dirsmo415588);
smo414732.setStemDirection(dirsmo415588);
smo414733.setStemDirection(dirsmo415588);
smo414734.setStemDirection(dirsmo415588);
const smo415588 = new VF.Beam([smo414730,smo414732,smo414733,smo414734,smo414735]);
const dirsmo415589 = smo414736.getStemDirection();
smo414736.setStemDirection(dirsmo415589);
smo414737.setStemDirection(dirsmo415589);
smo414739.setStemDirection(dirsmo415589);
smo414741.setStemDirection(dirsmo415589);
const smo415589 = new VF.Beam([smo414736,smo414737,smo414739,smo414741]);
const dirsmo415590 = smo414744.getStemDirection();
smo414744.setStemDirection(dirsmo415590);
smo414745.setStemDirection(dirsmo415590);
smo414746.setStemDirection(dirsmo415590);
smo414747.setStemDirection(dirsmo415590);
const smo415590 = new VF.Beam([smo414744,smo414745,smo414746,smo414747]);
 
// formatting measures in staff group smo415320
fmtsmo41476425.format([smo414764v0], 523);
const stavesmo414764 = new VF.Stave(46, 276.3846153846155, 607);
stavesmo414764.setAttribute('id', 'stavesmo414764');
stavesmo414764.setBegBarType(1);
stavesmo414764.addClef('treble');
const keysmo414764 = new VF.KeySignature('G');
keysmo414764.addToStave(stavesmo414764);
stavesmo414764.setContext(context);
stavesmo414764.draw();
smo414764v0.draw(context, stavesmo414764);
smo415588.setContext(context);
smo415588.draw();
smo415589.setContext(context);
smo415589.draw();
smo415590.setContext(context);
smo415590.draw();
const fmtsmo41479626 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo414796v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414796v0ar = [];
const smo414765 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo414765.setAttribute('id', 'smo414765');
const smo414766 = new VF.ChordSymbol();
smo414766.setAttribute('id', 'smo414766');
smo414766.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo414766.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414766.setFont('Petaluma Script', 14).setReportWidth(false);
smo414765.addModifier(smo414766, 0);
smo414796v0ar.push(smo414765);
const smo414767 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo414767.setAttribute('id', 'smo414767');
smo414796v0ar.push(smo414767);
const smo414768 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo414768.setAttribute('id', 'smo414768');
smo414796v0ar.push(smo414768);
const smo414769 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo414769.setAttribute('id', 'smo414769');
const smo4147690acc = new VF.Accidental('n');
smo414769.addModifier(smo4147690acc, 0);
smo414796v0ar.push(smo414769);
const smo414770 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo414770.setAttribute('id', 'smo414770');
const smo4147700acc = new VF.Accidental('b');
smo414770.addModifier(smo4147700acc, 0);
const smo414771 = new VF.ChordSymbol();
smo414771.setAttribute('id', 'smo414771');
smo414771.setFont('Petaluma Script', 14).setReportWidth(false);
smo414770.addModifier(smo414771, 0);
smo414796v0ar.push(smo414770);
const smo414772 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo414772.setAttribute('id', 'smo414772');
smo414796v0ar.push(smo414772);
const smo414773 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414773.setAttribute('id', 'smo414773');
smo414796v0ar.push(smo414773);
const smo414774 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo414776 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["bn/4"],"slash":true}'))
smo414776.setAttribute('id', 'smo414776');
const ggrpsmo414774 = new VF.GraceNoteGroup([smo414776]);
ggrpsmo414774.beamNotes();
smo414774.addModifier(ggrpsmo414774, 0);
smo414774.setAttribute('id', 'smo414774');
const smo414775 = new VF.ChordSymbol();
smo414775.setAttribute('id', 'smo414775');
smo414775.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo414775.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414775.setFont('Petaluma Script', 14).setReportWidth(false);
smo414774.addModifier(smo414775, 0);
smo414796v0ar.push(smo414774);
const smo414777 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414777.setAttribute('id', 'smo414777');
const smo4147770acc = new VF.Accidental('b');
smo414777.addModifier(smo4147770acc, 0);
smo414796v0ar.push(smo414777);
const smo414778 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo414778.setAttribute('id', 'smo414778');
smo414796v0ar.push(smo414778);
const smo414779 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414779.setAttribute('id', 'smo414779');
smo414796v0ar.push(smo414779);
const smo414780 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414780.setAttribute('id', 'smo414780');
smo414796v0ar.push(smo414780);
const smo414781 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo414781.setAttribute('id', 'smo414781');
smo414796v0ar.push(smo414781);
smo414796v0.addTickables(smo414796v0ar)
fmtsmo41479626.joinVoices([smo414796v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415593 = smo414767.getStemDirection();
smo414767.setStemDirection(dirsmo415593);
smo414768.setStemDirection(dirsmo415593);
const smo415593 = new VF.Beam([smo414767,smo414768]);
const dirsmo415594 = smo414769.getStemDirection();
smo414769.setStemDirection(dirsmo415594);
smo414770.setStemDirection(dirsmo415594);
smo414772.setStemDirection(dirsmo415594);
smo414773.setStemDirection(dirsmo415594);
const smo415594 = new VF.Beam([smo414769,smo414770,smo414772,smo414773]);
const dirsmo415595 = smo414774.getStemDirection();
smo414774.setStemDirection(dirsmo415595);
smo414777.setStemDirection(dirsmo415595);
smo414778.setStemDirection(dirsmo415595);
smo414779.setStemDirection(dirsmo415595);
const smo415595 = new VF.Beam([smo414774,smo414777,smo414778,smo414779]);
const smo414782 = new VF.Tuplet([smo414777,smo414778,smo414779], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo415320
fmtsmo41479626.format([smo414796v0], 496);
const stavesmo414796 = new VF.Stave(653, 276.3846153846155, 510);
stavesmo414796.setAttribute('id', 'stavesmo414796');
stavesmo414796.setBegBarType(VF.Barline.type.NONE);
stavesmo414796.setContext(context);
stavesmo414796.draw();
smo414796v0.draw(context, stavesmo414796);
smo415593.setContext(context);
smo415593.draw();
smo415594.setContext(context);
smo415594.draw();
smo415595.setContext(context);
smo415595.draw();
smo414782.setContext(context).draw();
const fmtsmo41482927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo414829v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414829v0ar = [];
const smo414797 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["c#/5/r"]}'))
smo414797.setAttribute('id', 'smo414797');
const smo414798 = new VF.ChordSymbol();
smo414798.setAttribute('id', 'smo414798');
smo414798.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo414798.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414798.setFont('Petaluma Script', 14).setReportWidth(false);
smo414797.addModifier(smo414798, 0);
smo414829v0ar.push(smo414797);
const smo414799 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo414799.setAttribute('id', 'smo414799');
const smo4147990acc = new VF.Accidental('b');
smo414799.addModifier(smo4147990acc, 0);
smo414799.addModifier(new VF.Dot(), 0);
smo414829v0ar.push(smo414799);
const smo414800 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414800.setAttribute('id', 'smo414800');
const smo4148000acc = new VF.Accidental('b');
smo414800.addModifier(smo4148000acc, 0);
smo414829v0ar.push(smo414800);
const smo414801 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo414801.setAttribute('id', 'smo414801');
smo414829v0ar.push(smo414801);
const smo414802 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414802.setAttribute('id', 'smo414802');
smo414829v0ar.push(smo414802);
const smo414803 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo414803.setAttribute('id', 'smo414803');
const smo414804 = new VF.ChordSymbol();
smo414804.setAttribute('id', 'smo414804');
smo414804.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo414804.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414804.setFont('Petaluma Script', 14).setReportWidth(false);
smo414803.addModifier(smo414804, 0);
smo414829v0ar.push(smo414803);
const smo414805 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414805.setAttribute('id', 'smo414805');
smo414829v0ar.push(smo414805);
const smo414806 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo414806.setAttribute('id', 'smo414806');
smo414829v0ar.push(smo414806);
const smo414807 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo414807.setAttribute('id', 'smo414807');
smo414829v0ar.push(smo414807);
const smo414808 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo414808.setAttribute('id', 'smo414808');
const smo4148080acc = new VF.Accidental('n');
smo414808.addModifier(smo4148080acc, 0);
smo414829v0ar.push(smo414808);
const smo414809 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo414809.setAttribute('id', 'smo414809');
const smo4148090acc = new VF.Accidental('#');
smo414809.addModifier(smo4148090acc, 0);
smo414829v0ar.push(smo414809);
const smo414810 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo414810.setAttribute('id', 'smo414810');
smo414829v0ar.push(smo414810);
const smo414811 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414811.setAttribute('id', 'smo414811');
smo414829v0ar.push(smo414811);
const smo414812 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo414812.setAttribute('id', 'smo414812');
smo414829v0ar.push(smo414812);
const smo414813 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo414813.setAttribute('id', 'smo414813');
const smo4148130acc = new VF.Accidental('n');
smo414813.addModifier(smo4148130acc, 0);
smo414829v0ar.push(smo414813);
smo414829v0.addTickables(smo414829v0ar)
fmtsmo41482927.joinVoices([smo414829v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415603 = smo414800.getStemDirection();
smo414800.setStemDirection(dirsmo415603);
smo414801.setStemDirection(dirsmo415603);
smo414802.setStemDirection(dirsmo415603);
const smo415603 = new VF.Beam([smo414800,smo414801,smo414802]);
const dirsmo415604 = smo414803.getStemDirection();
smo414803.setStemDirection(dirsmo415604);
smo414805.setStemDirection(dirsmo415604);
smo414806.setStemDirection(dirsmo415604);
smo414807.setStemDirection(dirsmo415604);
smo414808.setStemDirection(dirsmo415604);
const smo415604 = new VF.Beam([smo414803,smo414805,smo414806,smo414807,smo414808]);
const dirsmo415605 = smo414809.getStemDirection();
smo414809.setStemDirection(dirsmo415605);
smo414810.setStemDirection(dirsmo415605);
smo414811.setStemDirection(dirsmo415605);
smo414812.setStemDirection(dirsmo415605);
smo414813.setStemDirection(dirsmo415605);
const smo415605 = new VF.Beam([smo414809,smo414810,smo414811,smo414812,smo414813]);
const smo414814 = new VF.Tuplet([smo414803,smo414805,smo414806], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo414815 = new VF.Tuplet([smo414809,smo414810,smo414811], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo415320
fmtsmo41482927.format([smo414829v0], 581);
const stavesmo414829 = new VF.Stave(46, 417.3846153846155, 665);
stavesmo414829.setAttribute('id', 'stavesmo414829');
stavesmo414829.setBegBarType(1);
stavesmo414829.addClef('treble');
const keysmo414829 = new VF.KeySignature('G');
keysmo414829.addToStave(stavesmo414829);
stavesmo414829.setContext(context);
stavesmo414829.draw();
smo414829v0.draw(context, stavesmo414829);
smo415603.setContext(context);
smo415603.draw();
smo415604.setContext(context);
smo415604.draw();
smo415605.setContext(context);
smo415605.draw();
smo414814.setContext(context).draw();
smo414815.setContext(context).draw();
const fmtsmo41486128 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo414861v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414861v0ar = [];
const smo414830 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo414830.setAttribute('id', 'smo414830');
const smo414831 = new VF.ChordSymbol();
smo414831.setAttribute('id', 'smo414831');
smo414831.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo414831.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo414831.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414831.setFont('Petaluma Script', 14).setReportWidth(false);
smo414830.addModifier(smo414831, 0);
smo414861v0ar.push(smo414830);
const smo414832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo414832.setAttribute('id', 'smo414832');
smo414861v0ar.push(smo414832);
const smo414833 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo414833.setAttribute('id', 'smo414833');
smo414861v0ar.push(smo414833);
const smo414834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo414834.setAttribute('id', 'smo414834');
smo414861v0ar.push(smo414834);
const smo414835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo414835.setAttribute('id', 'smo414835');
const smo414836 = new VF.ChordSymbol();
smo414836.setAttribute('id', 'smo414836');
smo414836.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo414836.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414836.setFont('Petaluma Script', 14).setReportWidth(false);
smo414835.addModifier(smo414836, 0);
smo414861v0ar.push(smo414835);
const smo414837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo414837.setAttribute('id', 'smo414837');
smo414861v0ar.push(smo414837);
const smo414838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo414839 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo414839.setAttribute('id', 'smo414839');
const acc0smo414839 = new VF.Accidental('#');
smo414839.addModifier(acc0smo414839, 0)
const ggrpsmo414838 = new VF.GraceNoteGroup([smo414839]);
ggrpsmo414838.beamNotes();
smo414838.addModifier(ggrpsmo414838, 0);
smo414838.setAttribute('id', 'smo414838');
smo414861v0ar.push(smo414838);
const smo414840 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
smo414840.setAttribute('id', 'smo414840');
smo414861v0ar.push(smo414840);
const smo414841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414841.setAttribute('id', 'smo414841');
smo414861v0ar.push(smo414841);
const smo414842 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414842.setAttribute('id', 'smo414842');
const smo4148420acc = new VF.Accidental('b');
smo414842.addModifier(smo4148420acc, 0);
smo414861v0ar.push(smo414842);
const smo414843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo414843.setAttribute('id', 'smo414843');
smo414861v0ar.push(smo414843);
const smo414844 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo414844.setAttribute('id', 'smo414844');
smo414861v0ar.push(smo414844);
smo414861v0.addTickables(smo414861v0ar)
fmtsmo41486128.joinVoices([smo414861v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415608 = smo414833.getStemDirection();
smo414833.setStemDirection(dirsmo415608);
smo414834.setStemDirection(dirsmo415608);
const smo415608 = new VF.Beam([smo414833,smo414834]);
const dirsmo415609 = smo414835.getStemDirection();
smo414835.setStemDirection(dirsmo415609);
smo414837.setStemDirection(dirsmo415609);
const smo415609 = new VF.Beam([smo414835,smo414837]);
const dirsmo415610 = smo414838.getStemDirection();
smo414838.setStemDirection(dirsmo415610);
smo414841.setStemDirection(dirsmo415610);
smo414842.setStemDirection(dirsmo415610);
smo414843.setStemDirection(dirsmo415610);
smo414844.setStemDirection(dirsmo415610);
const smo415610 = new VF.Beam([smo414838,smo414841,smo414842,smo414843,smo414844]);
const smo414845 = new VF.Tuplet([smo414832,smo414833,smo414834], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo414846 = new VF.Tuplet([smo414838,smo414840,smo414841], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo414847 = new VF.Tuplet([smo414842,smo414843,smo414844], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo415320
fmtsmo41486128.format([smo414861v0], 437);
const stavesmo414861 = new VF.Stave(711, 417.3846153846155, 451);
stavesmo414861.setAttribute('id', 'stavesmo414861');
stavesmo414861.setBegBarType(VF.Barline.type.NONE);
stavesmo414861.setContext(context);
stavesmo414861.draw();
smo414861v0.draw(context, stavesmo414861);
smo415608.setContext(context);
smo415608.draw();
smo415609.setContext(context);
smo415609.draw();
smo415610.setContext(context);
smo415610.draw();
smo414845.setContext(context).draw();
smo414846.setContext(context).draw();
smo414847.setContext(context).draw();
const fmtsmo41488629 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo414886v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414886v0ar = [];
const smo414862 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
const smo414864 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo414864.setAttribute('id', 'smo414864');
const ggrpsmo414862 = new VF.GraceNoteGroup([smo414864]);
ggrpsmo414862.beamNotes();
smo414862.addModifier(ggrpsmo414862, 0);
smo414862.setAttribute('id', 'smo414862');
const smo414863 = new VF.ChordSymbol();
smo414863.setAttribute('id', 'smo414863');
smo414863.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo414863.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo414863.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414863.setFont('Petaluma Script', 14).setReportWidth(false);
smo414862.addModifier(smo414863, 0);
smo414886v0ar.push(smo414862);
const smo414865 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414865.setAttribute('id', 'smo414865');
smo414886v0ar.push(smo414865);
const smo414866 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414866.setAttribute('id', 'smo414866');
smo414886v0ar.push(smo414866);
const smo414867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo414867.setAttribute('id', 'smo414867');
const smo414868 = new VF.ChordSymbol();
smo414868.setAttribute('id', 'smo414868');
smo414868.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo414868.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414868.setFont('Petaluma Script', 14).setReportWidth(false);
smo414867.addModifier(smo414868, 0);
smo414886v0ar.push(smo414867);
const smo414869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
smo414869.setAttribute('id', 'smo414869');
smo414886v0ar.push(smo414869);
const smo414870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo414870.setAttribute('id', 'smo414870');
const smo4148700acc = new VF.Accidental('b');
smo414870.addModifier(smo4148700acc, 0);
smo414886v0ar.push(smo414870);
const smo414871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo414871.setAttribute('id', 'smo414871');
smo414886v0ar.push(smo414871);
const smo414872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo414872.setAttribute('id', 'smo414872');
smo414886v0ar.push(smo414872);
smo414886v0.addTickables(smo414886v0ar)
fmtsmo41488629.joinVoices([smo414886v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415616 = smo414862.getStemDirection();
smo414862.setStemDirection(dirsmo415616);
smo414865.setStemDirection(dirsmo415616);
const smo415616 = new VF.Beam([smo414862,smo414865]);
const dirsmo415617 = smo414869.getStemDirection();
smo414869.setStemDirection(dirsmo415617);
smo414870.setStemDirection(dirsmo415617);
smo414871.setStemDirection(dirsmo415617);
smo414872.setStemDirection(dirsmo415617);
const smo415617 = new VF.Beam([smo414869,smo414870,smo414871,smo414872]);
 
// formatting measures in staff group smo415320
fmtsmo41488629.format([smo414886v0], 306);
const stavesmo414886 = new VF.Stave(46, 578.3846153846155, 390);
stavesmo414886.setAttribute('id', 'stavesmo414886');
stavesmo414886.setBegBarType(1);
stavesmo414886.setEndBarType(2);
stavesmo414886.addClef('treble');
const keysmo414886 = new VF.KeySignature('G');
keysmo414886.addToStave(stavesmo414886);
stavesmo414886.setContext(context);
stavesmo414886.draw();
smo414886v0.draw(context, stavesmo414886);
smo415616.setContext(context);
smo415616.draw();
smo415617.setContext(context);
smo415617.draw();
const fmtsmo41491030 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo414910v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414910v0ar = [];
const smo414887 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo414887.setAttribute('id', 'smo414887');
const smo414888 = new VF.ChordSymbol();
smo414888.setAttribute('id', 'smo414888');
smo414888.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo414888.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo414888.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414888.setFont('Petaluma Script', 14).setReportWidth(false);
smo414887.addModifier(smo414888, 0);
smo414910v0ar.push(smo414887);
const smo414889 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo414889.setAttribute('id', 'smo414889');
smo414889.addModifier(new VF.Dot(), 0);
smo414910v0ar.push(smo414889);
const smo414890 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo414890.setAttribute('id', 'smo414890');
const smo4148900acc = new VF.Accidental('n');
smo414890.addModifier(smo4148900acc, 0);
smo414910v0ar.push(smo414890);
const smo414891 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo414891.setAttribute('id', 'smo414891');
smo414891.addModifier(new VF.Dot(), 0);
smo414910v0ar.push(smo414891);
const smo414892 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414892.setAttribute('id', 'smo414892');
const smo414893 = new VF.ChordSymbol();
smo414893.setAttribute('id', 'smo414893');
smo414893.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo414893.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3}'));
smo414893.setFont('Petaluma Script', 14).setReportWidth(false);
smo414892.addModifier(smo414893, 0);
smo414910v0ar.push(smo414892);
const smo414894 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo414894.setAttribute('id', 'smo414894');
smo414894.addModifier(new VF.Dot(), 0);
smo414910v0ar.push(smo414894);
const smo414895 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo414895.setAttribute('id', 'smo414895');
const smo4148950acc = new VF.Accidental('n');
smo414895.addModifier(smo4148950acc, 0);
smo414910v0ar.push(smo414895);
const smo414896 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo414896.setAttribute('id', 'smo414896');
smo414896.addModifier(new VF.Dot(), 0);
smo414910v0ar.push(smo414896);
smo414910v0.addTickables(smo414910v0ar)
fmtsmo41491030.joinVoices([smo414910v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415619 = smo414887.getStemDirection();
smo414887.setStemDirection(dirsmo415619);
smo414889.setStemDirection(dirsmo415619);
const smo415619 = new VF.Beam([smo414887,smo414889]);
const dirsmo415620 = smo414890.getStemDirection();
smo414890.setStemDirection(dirsmo415620);
smo414891.setStemDirection(dirsmo415620);
const smo415620 = new VF.Beam([smo414890,smo414891]);
const dirsmo415621 = smo414892.getStemDirection();
smo414892.setStemDirection(dirsmo415621);
smo414894.setStemDirection(dirsmo415621);
const smo415621 = new VF.Beam([smo414892,smo414894]);
const dirsmo415622 = smo414895.getStemDirection();
smo414895.setStemDirection(dirsmo415622);
smo414896.setStemDirection(dirsmo415622);
const smo415622 = new VF.Beam([smo414895,smo414896]);
 
// formatting measures in staff group smo415320
fmtsmo41491030.format([smo414910v0], 345);
const stavesmo414910 = new VF.Stave(436, 578.3846153846155, 359);
stavesmo414910.setAttribute('id', 'stavesmo414910');
stavesmo414910.setBegBarType(VF.Barline.type.NONE);
stavesmo414910.setContext(context);
stavesmo414910.draw();
smo414910v0.draw(context, stavesmo414910);
smo415619.setContext(context);
smo415619.draw();
smo415620.setContext(context);
smo415620.draw();
smo415621.setContext(context);
smo415621.draw();
smo415622.setContext(context);
smo415622.draw();
const fmtsmo41494031 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo414940v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414940v0ar = [];
const smo414911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo414911.setAttribute('id', 'smo414911');
const smo4149110acc = new VF.Accidental('b');
smo414911.addModifier(smo4149110acc, 0);
const smo414912 = new VF.ChordSymbol();
smo414912.setAttribute('id', 'smo414912');
smo414912.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo414912.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414912.setFont('Petaluma Script', 14).setReportWidth(false);
smo414911.addModifier(smo414912, 0);
smo414940v0ar.push(smo414911);
const smo414913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo414913.setAttribute('id', 'smo414913');
smo414913.addModifier(new VF.Dot(), 0);
const smo414914 = new VF.ChordSymbol();
smo414914.setAttribute('id', 'smo414914');
smo414914.setFont('Petaluma Script', 14).setReportWidth(false);
smo414913.addModifier(smo414914, 0);
smo414940v0ar.push(smo414913);
const smo414915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414915.setAttribute('id', 'smo414915');
const smo4149150acc = new VF.Accidental('b');
smo414915.addModifier(smo4149150acc, 0);
const smo414916 = new VF.ChordSymbol();
smo414916.setAttribute('id', 'smo414916');
smo414916.setFont('Petaluma Script', 14).setReportWidth(false);
smo414915.addModifier(smo414916, 0);
smo414940v0ar.push(smo414915);
const smo414917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo414917.setAttribute('id', 'smo414917');
smo414917.addModifier(new VF.Dot(), 0);
const smo414918 = new VF.ChordSymbol();
smo414918.setAttribute('id', 'smo414918');
smo414918.setFont('Petaluma Script', 14).setReportWidth(false);
smo414917.addModifier(smo414918, 0);
smo414940v0ar.push(smo414917);
const smo414919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo414919.setAttribute('id', 'smo414919');
const smo4149190acc = new VF.Accidental('n');
smo414919.addModifier(smo4149190acc, 0);
const smo414920 = new VF.ChordSymbol();
smo414920.setAttribute('id', 'smo414920');
smo414920.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo414920.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414920.setFont('Petaluma Script', 14).setReportWidth(false);
smo414919.addModifier(smo414920, 0);
smo414940v0ar.push(smo414919);
const smo414921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo414921.setAttribute('id', 'smo414921');
smo414921.addModifier(new VF.Dot(), 0);
const smo414922 = new VF.ChordSymbol();
smo414922.setAttribute('id', 'smo414922');
smo414922.setFont('Petaluma Script', 14).setReportWidth(false);
smo414921.addModifier(smo414922, 0);
smo414940v0ar.push(smo414921);
const smo414923 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo414923.setAttribute('id', 'smo414923');
const smo4149230acc = new VF.Accidental('b');
smo414923.addModifier(smo4149230acc, 0);
const smo414924 = new VF.ChordSymbol();
smo414924.setAttribute('id', 'smo414924');
smo414924.setFont('Petaluma Script', 14).setReportWidth(false);
smo414923.addModifier(smo414924, 0);
smo414940v0ar.push(smo414923);
const smo414925 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo414925.setAttribute('id', 'smo414925');
smo414925.addModifier(new VF.Dot(), 0);
const smo414926 = new VF.ChordSymbol();
smo414926.setAttribute('id', 'smo414926');
smo414926.setFont('Petaluma Script', 14).setReportWidth(false);
smo414925.addModifier(smo414926, 0);
smo414940v0ar.push(smo414925);
smo414940v0.addTickables(smo414940v0ar)
fmtsmo41494031.joinVoices([smo414940v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415625 = smo414911.getStemDirection();
smo414911.setStemDirection(dirsmo415625);
smo414913.setStemDirection(dirsmo415625);
const smo415625 = new VF.Beam([smo414911,smo414913]);
const dirsmo415626 = smo414915.getStemDirection();
smo414915.setStemDirection(dirsmo415626);
smo414917.setStemDirection(dirsmo415626);
const smo415626 = new VF.Beam([smo414915,smo414917]);
const dirsmo415627 = smo414919.getStemDirection();
smo414919.setStemDirection(dirsmo415627);
smo414921.setStemDirection(dirsmo415627);
const smo415627 = new VF.Beam([smo414919,smo414921]);
const dirsmo415628 = smo414923.getStemDirection();
smo414923.setStemDirection(dirsmo415628);
smo414925.setStemDirection(dirsmo415628);
const smo415628 = new VF.Beam([smo414923,smo414925]);
 
// formatting measures in staff group smo415320
fmtsmo41494031.format([smo414940v0], 355);
const stavesmo414940 = new VF.Stave(795, 578.3846153846155, 369);
stavesmo414940.setAttribute('id', 'stavesmo414940');
stavesmo414940.setBegBarType(VF.Barline.type.NONE);
stavesmo414940.setContext(context);
stavesmo414940.draw();
smo414940v0.draw(context, stavesmo414940);
smo415625.setContext(context);
smo415625.draw();
smo415626.setContext(context);
smo415626.draw();
smo415627.setContext(context);
smo415627.draw();
smo415628.setContext(context);
smo415628.draw();
const fmtsmo41497632 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo414976v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo414976v0ar = [];
const smo414941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo414941.setAttribute('id', 'smo414941');
const smo4149410acc = new VF.Accidental('b');
smo414941.addModifier(smo4149410acc, 0);
const smo414942 = new VF.ChordSymbol();
smo414942.setAttribute('id', 'smo414942');
smo414942.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1}'));
smo414942.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414942.setFont('Petaluma Script', 14).setReportWidth(false);
smo414941.addModifier(smo414942, 0);
smo414976v0ar.push(smo414941);
const smo414943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo414943.setAttribute('id', 'smo414943');
const smo4149430acc = new VF.Accidental('b');
smo414943.addModifier(smo4149430acc, 0);
const smo414944 = new VF.ChordSymbol();
smo414944.setAttribute('id', 'smo414944');
smo414944.setFont('Petaluma Script', 14).setReportWidth(false);
smo414943.addModifier(smo414944, 0);
smo414976v0ar.push(smo414943);
const smo414945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo414945.setAttribute('id', 'smo414945');
const smo4149450acc = new VF.Accidental('n');
smo414945.addModifier(smo4149450acc, 0);
const smo414946 = new VF.ChordSymbol();
smo414946.setAttribute('id', 'smo414946');
smo414946.setFont('Petaluma Script', 14).setReportWidth(false);
smo414945.addModifier(smo414946, 0);
smo414976v0ar.push(smo414945);
const smo414947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414947.setAttribute('id', 'smo414947');
const smo4149470acc = new VF.Accidental('b');
smo414947.addModifier(smo4149470acc, 0);
const smo414949 = new VF.Ornament('fall');
smo414947.addModifier(smo414949, 0);
const smo414948 = new VF.ChordSymbol();
smo414948.setAttribute('id', 'smo414948');
smo414948.setFont('Petaluma Script', 14).setReportWidth(false);
smo414947.addModifier(smo414948, 0);
smo414976v0ar.push(smo414947);
const smo414950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo414950.setAttribute('id', 'smo414950');
const smo414951 = new VF.ChordSymbol();
smo414951.setAttribute('id', 'smo414951');
smo414951.setFont('Petaluma Script', 14).setReportWidth(false);
smo414950.addModifier(smo414951, 0);
smo414976v0ar.push(smo414950);
const smo414952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
smo414952.setAttribute('id', 'smo414952');
const smo4149520acc = new VF.Accidental('b');
smo414952.addModifier(smo4149520acc, 0);
smo414976v0ar.push(smo414952);
const smo414953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo414953.setAttribute('id', 'smo414953');
const smo4149530acc = new VF.Accidental('b');
smo414953.addModifier(smo4149530acc, 0);
smo414976v0ar.push(smo414953);
const smo414954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414954.setAttribute('id', 'smo414954');
smo414976v0ar.push(smo414954);
const smo414955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo414955.setAttribute('id', 'smo414955');
const smo4149550acc = new VF.Accidental('b');
smo414955.addModifier(smo4149550acc, 0);
const smo414956 = new VF.ChordSymbol();
smo414956.setAttribute('id', 'smo414956');
smo414956.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo414956.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo414956.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414956.setFont('Petaluma Script', 14).setReportWidth(false);
smo414955.addModifier(smo414956, 0);
smo414976v0ar.push(smo414955);
const smo414957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo414957.setAttribute('id', 'smo414957');
const smo4149570acc = new VF.Accidental('b');
smo4149570acc.setAsCautionary();
smo414957.addModifier(smo4149570acc, 0);
smo414976v0ar.push(smo414957);
const smo414958 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo414958.setAttribute('id', 'smo414958');
const smo4149580acc = new VF.Accidental('b');
smo4149580acc.setAsCautionary();
smo414958.addModifier(smo4149580acc, 0);
smo414976v0ar.push(smo414958);
const smo414959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo414959.setAttribute('id', 'smo414959');
smo414976v0ar.push(smo414959);
const smo414960 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo414960.setAttribute('id', 'smo414960');
smo414976v0ar.push(smo414960);
const smo414961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo414961.setAttribute('id', 'smo414961');
smo414976v0ar.push(smo414961);
const smo414962 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo414962.setAttribute('id', 'smo414962');
smo414976v0ar.push(smo414962);
smo414976v0.addTickables(smo414976v0ar)
fmtsmo41497632.joinVoices([smo414976v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415637 = smo414941.getStemDirection();
smo414941.setStemDirection(dirsmo415637);
smo414943.setStemDirection(dirsmo415637);
smo414945.setStemDirection(dirsmo415637);
smo414947.setStemDirection(dirsmo415637);
const smo415637 = new VF.Beam([smo414941,smo414943,smo414945,smo414947]);
const dirsmo415638 = smo414952.getStemDirection();
smo414952.setStemDirection(dirsmo415638);
smo414953.setStemDirection(dirsmo415638);
smo414954.setStemDirection(dirsmo415638);
const smo415638 = new VF.Beam([smo414952,smo414953,smo414954]);
const dirsmo415639 = smo414955.getStemDirection();
smo414955.setStemDirection(dirsmo415639);
smo414957.setStemDirection(dirsmo415639);
smo414958.setStemDirection(dirsmo415639);
smo414959.setStemDirection(dirsmo415639);
const smo415639 = new VF.Beam([smo414955,smo414957,smo414958,smo414959]);
const dirsmo415640 = smo414960.getStemDirection();
smo414960.setStemDirection(dirsmo415640);
smo414961.setStemDirection(dirsmo415640);
const smo415640 = new VF.Beam([smo414960,smo414961]);
 
// formatting measures in staff group smo415320
fmtsmo41497632.format([smo414976v0], 588);
const stavesmo414976 = new VF.Stave(46, 760.3846153846155, 672);
stavesmo414976.setAttribute('id', 'stavesmo414976');
stavesmo414976.setBegBarType(1);
stavesmo414976.addClef('treble');
const keysmo414976 = new VF.KeySignature('G');
keysmo414976.addToStave(stavesmo414976);
stavesmo414976.setContext(context);
stavesmo414976.draw();
smo414976v0.draw(context, stavesmo414976);
smo415637.setContext(context);
smo415637.draw();
smo415638.setContext(context);
smo415638.draw();
smo415639.setContext(context);
smo415639.draw();
smo415640.setContext(context);
smo415640.draw();
const fmtsmo41500533 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo415005v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415005v0ar = [];
const smo414977 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo414977.setAttribute('id', 'smo414977');
const smo414978 = new VF.ChordSymbol();
smo414978.setAttribute('id', 'smo414978');
smo414978.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo414978.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414978.setFont('Petaluma Script', 14).setReportWidth(false);
smo414977.addModifier(smo414978, 0);
smo415005v0ar.push(smo414977);
const smo414979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo414979.setAttribute('id', 'smo414979');
smo415005v0ar.push(smo414979);
const smo414980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo414980.setAttribute('id', 'smo414980');
smo415005v0ar.push(smo414980);
const smo414981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo414981.setAttribute('id', 'smo414981');
smo415005v0ar.push(smo414981);
const smo414982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo414982.setAttribute('id', 'smo414982');
const smo414983 = new VF.ChordSymbol();
smo414983.setAttribute('id', 'smo414983');
smo414983.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo414983.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo414983.setFont('Petaluma Script', 14).setReportWidth(false);
smo414982.addModifier(smo414983, 0);
smo415005v0ar.push(smo414982);
const smo414984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo414984.setAttribute('id', 'smo414984');
const smo4149840acc = new VF.Accidental('b');
smo414984.addModifier(smo4149840acc, 0);
smo415005v0ar.push(smo414984);
const smo414985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
smo414985.setAttribute('id', 'smo414985');
smo415005v0ar.push(smo414985);
const smo414986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo414986.setAttribute('id', 'smo414986');
smo415005v0ar.push(smo414986);
const smo414987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo414987.setAttribute('id', 'smo414987');
const smo414988 = new VF.ChordSymbol();
smo414988.setAttribute('id', 'smo414988');
smo414988.setFont('Petaluma Script', 14).setReportWidth(false);
smo414987.addModifier(smo414988, 0);
smo415005v0ar.push(smo414987);
const smo414989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo414989.setAttribute('id', 'smo414989');
smo415005v0ar.push(smo414989);
const smo414990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo414990.setAttribute('id', 'smo414990');
const smo4149900acc = new VF.Accidental('b');
smo414990.addModifier(smo4149900acc, 0);
smo415005v0ar.push(smo414990);
const smo414991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo414991.setAttribute('id', 'smo414991');
smo415005v0ar.push(smo414991);
smo415005v0.addTickables(smo415005v0ar)
fmtsmo41500533.joinVoices([smo415005v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415643 = smo414980.getStemDirection();
smo414980.setStemDirection(dirsmo415643);
smo414981.setStemDirection(dirsmo415643);
const smo415643 = new VF.Beam([smo414980,smo414981]);
const dirsmo415644 = smo414982.getStemDirection();
smo414982.setStemDirection(dirsmo415644);
smo414984.setStemDirection(dirsmo415644);
smo414985.setStemDirection(dirsmo415644);
smo414986.setStemDirection(dirsmo415644);
const smo415644 = new VF.Beam([smo414982,smo414984,smo414985,smo414986]);
const dirsmo415645 = smo414987.getStemDirection();
smo414987.setStemDirection(dirsmo415645);
smo414989.setStemDirection(dirsmo415645);
smo414990.setStemDirection(dirsmo415645);
smo414991.setStemDirection(dirsmo415645);
const smo415645 = new VF.Beam([smo414987,smo414989,smo414990,smo414991]);
 
// formatting measures in staff group smo415320
fmtsmo41500533.format([smo415005v0], 431);
const stavesmo415005 = new VF.Stave(718, 760.3846153846155, 445);
stavesmo415005.setAttribute('id', 'stavesmo415005');
stavesmo415005.setBegBarType(VF.Barline.type.NONE);
stavesmo415005.setContext(context);
stavesmo415005.draw();
smo415005v0.draw(context, stavesmo415005);
smo415643.setContext(context);
smo415643.draw();
smo415644.setContext(context);
smo415644.draw();
smo415645.setContext(context);
smo415645.draw();
const fmtsmo41503434 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo415034v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415034v0ar = [];
const smo415006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo415006.setAttribute('id', 'smo415006');
const smo415007 = new VF.ChordSymbol();
smo415007.setAttribute('id', 'smo415007');
smo415007.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo415007.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo415007.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415007.setFont('Petaluma Script', 14).setReportWidth(false);
smo415006.addModifier(smo415007, 0);
smo415034v0ar.push(smo415006);
const smo415008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo415008.setAttribute('id', 'smo415008');
smo415034v0ar.push(smo415008);
const smo415009 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415009.setAttribute('id', 'smo415009');
smo415034v0ar.push(smo415009);
const smo415010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415010.setAttribute('id', 'smo415010');
const smo4150100acc = new VF.Accidental('b');
smo415010.addModifier(smo4150100acc, 0);
smo415034v0ar.push(smo415010);
const smo415011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415011.setAttribute('id', 'smo415011');
smo415034v0ar.push(smo415011);
const smo415012 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415012.setAttribute('id', 'smo415012');
smo415012.addModifier(new VF.Dot(), 0);
smo415034v0ar.push(smo415012);
const smo415013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415013.setAttribute('id', 'smo415013');
const smo415014 = new VF.ChordSymbol();
smo415014.setAttribute('id', 'smo415014');
smo415014.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo415014.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415014.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3}'));
smo415014.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo415014.setFont('Petaluma Script', 14).setReportWidth(false);
smo415013.addModifier(smo415014, 0);
smo415034v0ar.push(smo415013);
const smo415015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo415015.setAttribute('id', 'smo415015');
const smo4150150acc = new VF.Accidental('b');
smo415015.addModifier(smo4150150acc, 0);
smo415034v0ar.push(smo415015);
const smo415016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo415016.setAttribute('id', 'smo415016');
const smo4150160acc = new VF.Accidental('b');
smo415016.addModifier(smo4150160acc, 0);
smo415034v0ar.push(smo415016);
const smo415017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo415017.setAttribute('id', 'smo415017');
smo415034v0ar.push(smo415017);
const smo415018 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
smo415018.setAttribute('id', 'smo415018');
const smo4150180acc = new VF.Accidental('#');
smo415018.addModifier(smo4150180acc, 0);
smo415034v0ar.push(smo415018);
const smo415019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["f#/4/r"]}'))
smo415019.setAttribute('id', 'smo415019');
smo415034v0ar.push(smo415019);
smo415034v0.addTickables(smo415034v0ar)
fmtsmo41503434.joinVoices([smo415034v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415654 = smo415006.getStemDirection();
smo415006.setStemDirection(dirsmo415654);
smo415008.setStemDirection(dirsmo415654);
smo415009.setStemDirection(dirsmo415654);
smo415010.setStemDirection(dirsmo415654);
const smo415654 = new VF.Beam([smo415006,smo415008,smo415009,smo415010]);
const dirsmo415655 = smo415011.getStemDirection();
smo415011.setStemDirection(dirsmo415655);
smo415012.setStemDirection(dirsmo415655);
const smo415655 = new VF.Beam([smo415011,smo415012]);
const dirsmo415656 = smo415013.getStemDirection();
smo415013.setStemDirection(dirsmo415656);
smo415015.setStemDirection(dirsmo415656);
smo415016.setStemDirection(dirsmo415656);
const smo415656 = new VF.Beam([smo415013,smo415015,smo415016]);
const dirsmo415657 = smo415017.getStemDirection();
smo415017.setStemDirection(dirsmo415657);
smo415018.setStemDirection(dirsmo415657);
const smo415657 = new VF.Beam([smo415017,smo415018]);
const smo415020 = new VF.Tuplet([smo415008,smo415009,smo415010], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo415320
fmtsmo41503434.format([smo415034v0], 496);
const stavesmo415034 = new VF.Stave(46, 911.3846153846155, 579);
stavesmo415034.setAttribute('id', 'stavesmo415034');
stavesmo415034.setBegBarType(1);
stavesmo415034.addClef('treble');
const keysmo415034 = new VF.KeySignature('G');
keysmo415034.addToStave(stavesmo415034);
stavesmo415034.setContext(context);
stavesmo415034.draw();
smo415034v0.draw(context, stavesmo415034);
smo415654.setContext(context);
smo415654.draw();
smo415655.setContext(context);
smo415655.draw();
smo415656.setContext(context);
smo415656.draw();
smo415657.setContext(context);
smo415657.draw();
smo415020.setContext(context).draw();
const fmtsmo41506235 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo415062v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415062v0ar = [];
const smo415035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["fn/4/r"]}'))
smo415035.setAttribute('id', 'smo415035');
const smo415036 = new VF.ChordSymbol();
smo415036.setAttribute('id', 'smo415036');
smo415036.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo415036.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415036.setFont('Petaluma Script', 14).setReportWidth(false);
smo415035.addModifier(smo415036, 0);
smo415062v0ar.push(smo415035);
const smo415037 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo415037.setAttribute('id', 'smo415037');
const smo4150370acc = new VF.Accidental('n');
smo415037.addModifier(smo4150370acc, 0);
smo415062v0ar.push(smo415037);
const smo415038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo415038.setAttribute('id', 'smo415038');
const smo4150380acc = new VF.Accidental('b');
smo415038.addModifier(smo4150380acc, 0);
smo415062v0ar.push(smo415038);
const smo415039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo415039.setAttribute('id', 'smo415039');
const smo4150390acc = new VF.Accidental('b');
smo415039.addModifier(smo4150390acc, 0);
smo415062v0ar.push(smo415039);
const smo415040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo415040.setAttribute('id', 'smo415040');
smo415062v0ar.push(smo415040);
const smo415041 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415041.setAttribute('id', 'smo415041');
smo415062v0ar.push(smo415041);
const smo415042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415042.setAttribute('id', 'smo415042');
smo415062v0ar.push(smo415042);
const smo415043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo415043.setAttribute('id', 'smo415043');
const smo4150430acc = new VF.Accidental('b');
smo4150430acc.setAsCautionary();
smo415043.addModifier(smo4150430acc, 0);
const smo415044 = new VF.ChordSymbol();
smo415044.setAttribute('id', 'smo415044');
smo415044.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo415044.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo415044.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415044.setFont('Petaluma Script', 14).setReportWidth(false);
smo415043.addModifier(smo415044, 0);
smo415062v0ar.push(smo415043);
const smo415045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
smo415045.setAttribute('id', 'smo415045');
const smo4150450acc = new VF.Accidental('b');
smo415045.addModifier(smo4150450acc, 0);
smo415062v0ar.push(smo415045);
const smo415046 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415046.setAttribute('id', 'smo415046');
const smo4150460acc = new VF.Accidental('b');
smo415046.addModifier(smo4150460acc, 0);
smo415062v0ar.push(smo415046);
const smo415047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
smo415047.setAttribute('id', 'smo415047');
const smo4150470acc = new VF.Accidental('b');
smo415047.addModifier(smo4150470acc, 0);
smo415062v0ar.push(smo415047);
const smo415048 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo415048.setAttribute('id', 'smo415048');
const smo4150480acc = new VF.Accidental('b');
smo415048.addModifier(smo4150480acc, 0);
smo415062v0ar.push(smo415048);
smo415062v0.addTickables(smo415062v0ar)
fmtsmo41506235.joinVoices([smo415062v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415660 = smo415037.getStemDirection();
smo415037.setStemDirection(dirsmo415660);
smo415038.setStemDirection(dirsmo415660);
const smo415660 = new VF.Beam([smo415037,smo415038]);
const dirsmo415661 = smo415039.getStemDirection();
smo415039.setStemDirection(dirsmo415661);
smo415040.setStemDirection(dirsmo415661);
smo415041.setStemDirection(dirsmo415661);
smo415042.setStemDirection(dirsmo415661);
const smo415661 = new VF.Beam([smo415039,smo415040,smo415041,smo415042]);
const dirsmo415662 = smo415043.getStemDirection();
smo415043.setStemDirection(dirsmo415662);
smo415045.setStemDirection(dirsmo415662);
smo415046.setStemDirection(dirsmo415662);
const smo415662 = new VF.Beam([smo415043,smo415045,smo415046]);
const dirsmo415663 = smo415047.getStemDirection();
smo415047.setStemDirection(dirsmo415663);
smo415048.setStemDirection(dirsmo415663);
const smo415663 = new VF.Beam([smo415047,smo415048]);
 
// formatting measures in staff group smo415320
fmtsmo41506235.format([smo415062v0], 524);
const stavesmo415062 = new VF.Stave(625, 911.3846153846155, 538);
stavesmo415062.setAttribute('id', 'stavesmo415062');
stavesmo415062.setBegBarType(VF.Barline.type.NONE);
stavesmo415062.setContext(context);
stavesmo415062.draw();
smo415062v0.draw(context, stavesmo415062);
smo415660.setContext(context);
smo415660.draw();
smo415661.setContext(context);
smo415661.draw();
smo415662.setContext(context);
smo415662.draw();
smo415663.setContext(context);
smo415663.draw();
const fmtsmo41509436 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo415094v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415094v0ar = [];
const smo415063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415063.setAttribute('id', 'smo415063');
const smo415064 = new VF.ChordSymbol();
smo415064.setAttribute('id', 'smo415064');
smo415064.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo415064.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo415064.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415064.setFont('Petaluma Script', 14).setReportWidth(false);
smo415063.addModifier(smo415064, 0);
smo415094v0ar.push(smo415063);
const smo415065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo415065.setAttribute('id', 'smo415065');
const smo415066 = new VF.Ornament('scoop');
smo415065.addModifier(smo415066, 0);
smo415094v0ar.push(smo415065);
const smo415067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415067.setAttribute('id', 'smo415067');
const smo4150670acc = new VF.Accidental('b');
smo415067.addModifier(smo4150670acc, 0);
smo415094v0ar.push(smo415067);
const smo415068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415068.setAttribute('id', 'smo415068');
smo415094v0ar.push(smo415068);
const smo415069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415069.setAttribute('id', 'smo415069');
smo415094v0ar.push(smo415069);
const smo415070 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415070.setAttribute('id', 'smo415070');
smo415094v0ar.push(smo415070);
const smo415071 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415071.setAttribute('id', 'smo415071');
smo415094v0ar.push(smo415071);
const smo415072 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
smo415072.setAttribute('id', 'smo415072');
smo415094v0ar.push(smo415072);
const smo415073 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo415073.setAttribute('id', 'smo415073');
const smo415075 = new VF.Ornament('scoop');
smo415073.addModifier(smo415075, 0);
const smo415074 = new VF.ChordSymbol();
smo415074.setAttribute('id', 'smo415074');
smo415074.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo415074.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3}'));
smo415074.setFont('Petaluma Script', 14).setReportWidth(false);
smo415073.addModifier(smo415074, 0);
smo415094v0ar.push(smo415073);
const smo415076 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415076.setAttribute('id', 'smo415076');
smo415094v0ar.push(smo415076);
const smo415077 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415077.setAttribute('id', 'smo415077');
smo415094v0ar.push(smo415077);
const smo415078 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415078.setAttribute('id', 'smo415078');
smo415094v0ar.push(smo415078);
const smo415079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo415079.setAttribute('id', 'smo415079');
const smo4150790acc = new VF.Accidental('n');
smo415079.addModifier(smo4150790acc, 0);
smo415094v0ar.push(smo415079);
smo415094v0.addTickables(smo415094v0ar)
fmtsmo41509436.joinVoices([smo415094v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415672 = smo415065.getStemDirection();
smo415065.setStemDirection(dirsmo415672);
smo415067.setStemDirection(dirsmo415672);
const smo415672 = new VF.Beam([smo415065,smo415067]);
const dirsmo415673 = smo415068.getStemDirection();
smo415068.setStemDirection(dirsmo415673);
smo415069.setStemDirection(dirsmo415673);
smo415070.setStemDirection(dirsmo415673);
smo415071.setStemDirection(dirsmo415673);
const smo415673 = new VF.Beam([smo415068,smo415069,smo415070,smo415071]);
const dirsmo415674 = smo415073.getStemDirection();
smo415073.setStemDirection(dirsmo415674);
smo415076.setStemDirection(dirsmo415674);
const smo415674 = new VF.Beam([smo415073,smo415076]);
const dirsmo415675 = smo415077.getStemDirection();
smo415077.setStemDirection(dirsmo415675);
smo415078.setStemDirection(dirsmo415675);
smo415079.setStemDirection(dirsmo415675);
const smo415675 = new VF.Beam([smo415077,smo415078,smo415079]);
const smo415080 = new VF.Tuplet([smo415068,smo415069,smo415070], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo415320
fmtsmo41509436.format([smo415094v0], 405);
const stavesmo415094 = new VF.Stave(46, 1082.3846153846155, 488);
stavesmo415094.setAttribute('id', 'stavesmo415094');
stavesmo415094.setBegBarType(1);
stavesmo415094.addClef('treble');
const keysmo415094 = new VF.KeySignature('G');
keysmo415094.addToStave(stavesmo415094);
stavesmo415094.setContext(context);
stavesmo415094.draw();
smo415094v0.draw(context, stavesmo415094);
smo415672.setContext(context);
smo415672.draw();
smo415673.setContext(context);
smo415673.draw();
smo415674.setContext(context);
smo415674.draw();
smo415675.setContext(context);
smo415675.draw();
smo415080.setContext(context).draw();
const fmtsmo41513637 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo415136v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415136v0ar = [];
const smo415095 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo415095.setAttribute('id', 'smo415095');
const smo415096 = new VF.ChordSymbol();
smo415096.setAttribute('id', 'smo415096');
smo415096.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo415096.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415096.setFont('Petaluma Script', 14).setReportWidth(false);
smo415095.addModifier(smo415096, 0);
smo415136v0ar.push(smo415095);
const smo415097 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo415097.setAttribute('id', 'smo415097');
const smo4150970acc = new VF.Accidental('b');
smo415097.addModifier(smo4150970acc, 0);
smo415136v0ar.push(smo415097);
const smo415098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
smo415098.setAttribute('id', 'smo415098');
const smo4150980acc = new VF.Accidental('b');
smo415098.addModifier(smo4150980acc, 0);
smo415136v0ar.push(smo415098);
const smo415099 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
smo415099.setAttribute('id', 'smo415099');
const smo4150990acc = new VF.Accidental('b');
smo415099.addModifier(smo4150990acc, 0);
smo415136v0ar.push(smo415099);
const smo415100 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
smo415100.setAttribute('id', 'smo415100');
const smo4151000acc = new VF.Accidental('n');
smo415100.addModifier(smo4151000acc, 0);
smo415136v0ar.push(smo415100);
const smo415101 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415101.setAttribute('id', 'smo415101');
const smo4151010acc = new VF.Accidental('b');
smo415101.addModifier(smo4151010acc, 0);
smo415136v0ar.push(smo415101);
const smo415102 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415102.setAttribute('id', 'smo415102');
smo415136v0ar.push(smo415102);
const smo415103 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
smo415103.setAttribute('id', 'smo415103');
smo415136v0ar.push(smo415103);
const smo415104 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415104.setAttribute('id', 'smo415104');
smo415136v0ar.push(smo415104);
const smo415105 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["an/4/r"]}'))
smo415105.setAttribute('id', 'smo415105');
smo415136v0ar.push(smo415105);
const smo415106 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415106.setAttribute('id', 'smo415106');
smo415136v0ar.push(smo415106);
const smo415107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo415107.setAttribute('id', 'smo415107');
const smo4151070acc = new VF.Accidental('#');
smo415107.addModifier(smo4151070acc, 0);
const smo415108 = new VF.ChordSymbol();
smo415108.setAttribute('id', 'smo415108');
smo415108.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo415108.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415108.setFont('Petaluma Script', 14).setReportWidth(false);
smo415107.addModifier(smo415108, 0);
smo415136v0ar.push(smo415107);
const smo415109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
smo415109.setAttribute('id', 'smo415109');
smo415136v0ar.push(smo415109);
const smo415110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415110.setAttribute('id', 'smo415110');
smo415136v0ar.push(smo415110);
const smo415111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415111.setAttribute('id', 'smo415111');
smo415136v0ar.push(smo415111);
const smo415112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
smo415112.setAttribute('id', 'smo415112');
const smo4151120acc = new VF.Accidental('b');
smo4151120acc.setAsCautionary();
smo415112.addModifier(smo4151120acc, 0);
smo415136v0ar.push(smo415112);
const smo415113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo415113.setAttribute('id', 'smo415113');
const smo4151130acc = new VF.Accidental('n');
smo415113.addModifier(smo4151130acc, 0);
smo415136v0ar.push(smo415113);
const smo415114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo415114.setAttribute('id', 'smo415114');
smo415136v0ar.push(smo415114);
const smo415115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415115.setAttribute('id', 'smo415115');
smo415136v0ar.push(smo415115);
smo415136v0.addTickables(smo415136v0ar)
fmtsmo41513637.joinVoices([smo415136v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415678 = smo415098.getStemDirection();
smo415098.setStemDirection(dirsmo415678);
smo415099.setStemDirection(dirsmo415678);
smo415100.setStemDirection(dirsmo415678);
const smo415678 = new VF.Beam([smo415098,smo415099,smo415100]);
const dirsmo415679 = smo415101.getStemDirection();
smo415101.setStemDirection(dirsmo415679);
smo415102.setStemDirection(dirsmo415679);
smo415104.setStemDirection(dirsmo415679);
smo415106.setStemDirection(dirsmo415679);
const smo415679 = new VF.Beam([smo415101,smo415102,smo415104,smo415106]);
const dirsmo415680 = smo415107.getStemDirection();
smo415107.setStemDirection(dirsmo415680);
smo415109.setStemDirection(dirsmo415680);
smo415110.setStemDirection(dirsmo415680);
smo415111.setStemDirection(dirsmo415680);
const smo415680 = new VF.Beam([smo415107,smo415109,smo415110,smo415111]);
const dirsmo415681 = smo415112.getStemDirection();
smo415112.setStemDirection(dirsmo415681);
smo415113.setStemDirection(dirsmo415681);
smo415114.setStemDirection(dirsmo415681);
smo415115.setStemDirection(dirsmo415681);
const smo415681 = new VF.Beam([smo415112,smo415113,smo415114,smo415115]);
const smo415116 = new VF.Tuplet([smo415095,smo415097], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo415117 = new VF.Tuplet([smo415098,smo415099,smo415100], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo415118 = new VF.Tuplet([smo415101,smo415102,smo415103], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo415119 = new VF.Tuplet([smo415104,smo415105,smo415106], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo415120 = new VF.Tuplet([smo415109,smo415110,smo415111], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo415121 = new VF.Tuplet([smo415112,smo415113], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo415122 = new VF.Tuplet([smo415114,smo415115], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo415320
fmtsmo41513637.format([smo415136v0], 614);
const stavesmo415136 = new VF.Stave(534, 1082.3846153846155, 628);
stavesmo415136.setAttribute('id', 'stavesmo415136');
stavesmo415136.setBegBarType(VF.Barline.type.NONE);
stavesmo415136.setContext(context);
stavesmo415136.draw();
smo415136v0.draw(context, stavesmo415136);
smo415678.setContext(context);
smo415678.draw();
smo415679.setContext(context);
smo415679.draw();
smo415680.setContext(context);
smo415680.draw();
smo415681.setContext(context);
smo415681.draw();
smo415116.setContext(context).draw();
smo415117.setContext(context).draw();
smo415118.setContext(context).draw();
smo415119.setContext(context).draw();
smo415120.setContext(context).draw();
smo415121.setContext(context).draw();
smo415122.setContext(context).draw();
const fmtsmo41516538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo415165v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415165v0ar = [];
const smo415137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo415139 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo415139.setAttribute('id', 'smo415139');
const acc0smo415139 = new VF.Accidental('#');
smo415139.addModifier(acc0smo415139, 0)
const ggrpsmo415137 = new VF.GraceNoteGroup([smo415139]);
ggrpsmo415137.beamNotes();
smo415137.addModifier(ggrpsmo415137, 0);
smo415137.setAttribute('id', 'smo415137');
const smo415138 = new VF.ChordSymbol();
smo415138.setAttribute('id', 'smo415138');
smo415138.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo415138.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo415138.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415138.setFont('Petaluma Script', 14).setReportWidth(false);
smo415137.addModifier(smo415138, 0);
smo415165v0ar.push(smo415137);
const smo415140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo415140.setAttribute('id', 'smo415140');
smo415165v0ar.push(smo415140);
const smo415141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415141.setAttribute('id', 'smo415141');
const smo4151410acc = new VF.Accidental('b');
smo415141.addModifier(smo4151410acc, 0);
smo415165v0ar.push(smo415141);
const smo415142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415142.setAttribute('id', 'smo415142');
smo415165v0ar.push(smo415142);
const smo415143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415143.setAttribute('id', 'smo415143');
smo415165v0ar.push(smo415143);
const smo415144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo415145 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo415145.setAttribute('id', 'smo415145');
const acc0smo415145 = new VF.Accidental('#');
smo415145.addModifier(acc0smo415145, 0)
const ggrpsmo415144 = new VF.GraceNoteGroup([smo415145]);
ggrpsmo415144.beamNotes();
smo415144.addModifier(ggrpsmo415144, 0);
smo415144.setAttribute('id', 'smo415144');
smo415165v0ar.push(smo415144);
const smo415146 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo415146.setAttribute('id', 'smo415146');
const smo415147 = new VF.ChordSymbol();
smo415147.setAttribute('id', 'smo415147');
smo415147.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo415147.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415147.setFont('Petaluma Script', 14).setReportWidth(false);
smo415146.addModifier(smo415147, 0);
smo415165v0ar.push(smo415146);
const smo415148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo415148.setAttribute('id', 'smo415148');
const smo4151480acc = new VF.Accidental('b');
smo415148.addModifier(smo4151480acc, 0);
smo415165v0ar.push(smo415148);
const smo415149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo415149.setAttribute('id', 'smo415149');
smo415165v0ar.push(smo415149);
const smo415150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo415150.setAttribute('id', 'smo415150');
smo415165v0ar.push(smo415150);
const smo415151 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415151.setAttribute('id', 'smo415151');
smo415165v0ar.push(smo415151);
smo415165v0.addTickables(smo415165v0ar)
fmtsmo41516538.joinVoices([smo415165v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415690 = smo415137.getStemDirection();
smo415137.setStemDirection(dirsmo415690);
smo415140.setStemDirection(dirsmo415690);
smo415141.setStemDirection(dirsmo415690);
const smo415690 = new VF.Beam([smo415137,smo415140,smo415141]);
const dirsmo415691 = smo415142.getStemDirection();
smo415142.setStemDirection(dirsmo415691);
smo415143.setStemDirection(dirsmo415691);
smo415144.setStemDirection(dirsmo415691);
const smo415691 = new VF.Beam([smo415142,smo415143,smo415144]);
const dirsmo415692 = smo415146.getStemDirection();
smo415146.setStemDirection(dirsmo415692);
smo415148.setStemDirection(dirsmo415692);
smo415149.setStemDirection(dirsmo415692);
const smo415692 = new VF.Beam([smo415146,smo415148,smo415149]);
const dirsmo415693 = smo415150.getStemDirection();
smo415150.setStemDirection(dirsmo415693);
smo415151.setStemDirection(dirsmo415693);
const smo415693 = new VF.Beam([smo415150,smo415151]);
 
// formatting measures in staff group smo415320
fmtsmo41516538.format([smo415165v0], 349);
const stavesmo415165 = new VF.Stave(46, 1233.3846153846155, 432);
stavesmo415165.setAttribute('id', 'stavesmo415165');
stavesmo415165.setBegBarType(1);
stavesmo415165.addClef('treble');
const keysmo415165 = new VF.KeySignature('G');
keysmo415165.addToStave(stavesmo415165);
stavesmo415165.setContext(context);
stavesmo415165.draw();
smo415165v0.draw(context, stavesmo415165);
smo415690.setContext(context);
smo415690.draw();
smo415691.setContext(context);
smo415691.draw();
smo415692.setContext(context);
smo415692.draw();
smo415693.setContext(context);
smo415693.draw();
const fmtsmo41518839 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo415188v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415188v0ar = [];
const smo415166 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415166.setAttribute('id', 'smo415166');
const smo415167 = new VF.ChordSymbol();
smo415167.setAttribute('id', 'smo415167');
smo415167.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo415167.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415167.setFont('Petaluma Script', 14).setReportWidth(false);
smo415166.addModifier(smo415167, 0);
smo415188v0ar.push(smo415166);
const smo415168 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo415168.setAttribute('id', 'smo415168');
smo415188v0ar.push(smo415168);
const smo415169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo415169.setAttribute('id', 'smo415169');
const smo415170 = new VF.ChordSymbol();
smo415170.setAttribute('id', 'smo415170');
smo415170.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo415170.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415170.setFont('Petaluma Script', 14).setReportWidth(false);
smo415169.addModifier(smo415170, 0);
smo415188v0ar.push(smo415169);
const smo415171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo415171.setAttribute('id', 'smo415171');
smo415188v0ar.push(smo415171);
const smo415172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo415172.setAttribute('id', 'smo415172');
smo415188v0ar.push(smo415172);
const smo415173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
smo415173.setAttribute('id', 'smo415173');
const smo4151730acc = new VF.Accidental('n');
smo415173.addModifier(smo4151730acc, 0);
smo415188v0ar.push(smo415173);
const smo415174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415174.setAttribute('id', 'smo415174');
const smo4151740acc = new VF.Accidental('b');
smo415174.addModifier(smo4151740acc, 0);
smo415188v0ar.push(smo415174);
smo415188v0.addTickables(smo415188v0ar)
fmtsmo41518839.joinVoices([smo415188v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415696 = smo415169.getStemDirection();
smo415169.setStemDirection(dirsmo415696);
smo415171.setStemDirection(dirsmo415696);
smo415172.setStemDirection(dirsmo415696);
const smo415696 = new VF.Beam([smo415169,smo415171,smo415172]);
const dirsmo415697 = smo415173.getStemDirection();
smo415173.setStemDirection(dirsmo415697);
smo415174.setStemDirection(dirsmo415697);
const smo415697 = new VF.Beam([smo415173,smo415174]);
 
// formatting measures in staff group smo415320
fmtsmo41518839.format([smo415188v0], 240);
const stavesmo415188 = new VF.Stave(478, 1233.3846153846155, 254);
stavesmo415188.setAttribute('id', 'stavesmo415188');
stavesmo415188.setBegBarType(VF.Barline.type.NONE);
stavesmo415188.setContext(context);
stavesmo415188.draw();
smo415188v0.draw(context, stavesmo415188);
smo415696.setContext(context);
smo415696.draw();
smo415697.setContext(context);
smo415697.draw();
const fmtsmo41521840 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo415218v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415218v0ar = [];
const smo415189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415189.setAttribute('id', 'smo415189');
const smo415190 = new VF.ChordSymbol();
smo415190.setAttribute('id', 'smo415190');
smo415190.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo415190.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415190.setFont('Petaluma Script', 14).setReportWidth(false);
smo415189.addModifier(smo415190, 0);
smo415218v0ar.push(smo415189);
const smo415191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo415191.setAttribute('id', 'smo415191');
smo415218v0ar.push(smo415191);
const smo415192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
smo415192.setAttribute('id', 'smo415192');
const smo4151920acc = new VF.Accidental('b');
smo415192.addModifier(smo4151920acc, 0);
smo415218v0ar.push(smo415192);
const smo415193 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo415193.setAttribute('id', 'smo415193');
const smo4151930acc = new VF.Accidental('n');
smo415193.addModifier(smo4151930acc, 0);
smo415218v0ar.push(smo415193);
const smo415194 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
smo415194.setAttribute('id', 'smo415194');
smo415218v0ar.push(smo415194);
const smo415195 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n"]}'))
smo415195.setAttribute('id', 'smo415195');
const smo4151950acc = new VF.Accidental('b');
smo415195.addModifier(smo4151950acc, 0);
const smo415196 = new VF.ChordSymbol();
smo415196.setAttribute('id', 'smo415196');
smo415196.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo415196.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415196.setFont('Petaluma Script', 14).setReportWidth(false);
smo415195.addModifier(smo415196, 0);
smo415218v0ar.push(smo415195);
const smo415197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
smo415197.setAttribute('id', 'smo415197');
const smo4151970acc = new VF.Accidental('b');
smo415197.addModifier(smo4151970acc, 0);
smo415218v0ar.push(smo415197);
const smo415198 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo415198.setAttribute('id', 'smo415198');
const smo4151980acc = new VF.Accidental('n');
smo415198.addModifier(smo4151980acc, 0);
smo415218v0ar.push(smo415198);
const smo415199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
smo415199.setAttribute('id', 'smo415199');
const smo4151990acc = new VF.Accidental('b');
smo415199.addModifier(smo4151990acc, 0);
smo415218v0ar.push(smo415199);
const smo415200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo415200.setAttribute('id', 'smo415200');
smo415218v0ar.push(smo415200);
const smo415201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo415201.setAttribute('id', 'smo415201');
smo415218v0ar.push(smo415201);
const smo415202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
smo415202.setAttribute('id', 'smo415202');
smo415218v0ar.push(smo415202);
const smo415203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo415203.setAttribute('id', 'smo415203');
const smo4152030acc = new VF.Accidental('n');
smo415203.addModifier(smo4152030acc, 0);
smo415218v0ar.push(smo415203);
const smo415204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
smo415204.setAttribute('id', 'smo415204');
smo415218v0ar.push(smo415204);
smo415218v0.addTickables(smo415218v0ar)
fmtsmo41521840.joinVoices([smo415218v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415700 = smo415191.getStemDirection();
smo415191.setStemDirection(dirsmo415700);
smo415192.setStemDirection(dirsmo415700);
smo415193.setStemDirection(dirsmo415700);
smo415194.setStemDirection(dirsmo415700);
const smo415700 = new VF.Beam([smo415191,smo415192,smo415193,smo415194]);
const dirsmo415701 = smo415195.getStemDirection();
smo415195.setStemDirection(dirsmo415701);
smo415197.setStemDirection(dirsmo415701);
smo415198.setStemDirection(dirsmo415701);
smo415199.setStemDirection(dirsmo415701);
smo415200.setStemDirection(dirsmo415701);
const smo415701 = new VF.Beam([smo415195,smo415197,smo415198,smo415199,smo415200]);
const dirsmo415702 = smo415201.getStemDirection();
smo415201.setStemDirection(dirsmo415702);
smo415202.setStemDirection(dirsmo415702);
smo415203.setStemDirection(dirsmo415702);
smo415204.setStemDirection(dirsmo415702);
const smo415702 = new VF.Beam([smo415201,smo415202,smo415203,smo415204]);
 
// formatting measures in staff group smo415320
fmtsmo41521840.format([smo415218v0], 417);
const stavesmo415218 = new VF.Stave(732, 1233.3846153846155, 431);
stavesmo415218.setAttribute('id', 'stavesmo415218');
stavesmo415218.setBegBarType(VF.Barline.type.NONE);
stavesmo415218.setContext(context);
stavesmo415218.draw();
smo415218v0.draw(context, stavesmo415218);
smo415700.setContext(context);
smo415700.draw();
smo415701.setContext(context);
smo415701.draw();
smo415702.setContext(context);
smo415702.draw();
const fmtsmo41524841 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo415248v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415248v0ar = [];
const smo415219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
smo415219.setAttribute('id', 'smo415219');
const smo415220 = new VF.ChordSymbol();
smo415220.setAttribute('id', 'smo415220');
smo415220.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo415220.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo415220.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415220.setFont('Petaluma Script', 14).setReportWidth(false);
smo415219.addModifier(smo415220, 0);
smo415248v0ar.push(smo415219);
const smo415221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
smo415221.setAttribute('id', 'smo415221');
smo415248v0ar.push(smo415221);
const smo415222 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415222.setAttribute('id', 'smo415222');
smo415248v0ar.push(smo415222);
const smo415223 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415223.setAttribute('id', 'smo415223');
const smo4152230acc = new VF.Accidental('b');
smo415223.addModifier(smo4152230acc, 0);
smo415248v0ar.push(smo415223);
const smo415224 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415224.setAttribute('id', 'smo415224');
smo415248v0ar.push(smo415224);
const smo415225 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
smo415225.setAttribute('id', 'smo415225');
smo415248v0ar.push(smo415225);
const smo415226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415226.setAttribute('id', 'smo415226');
smo415248v0ar.push(smo415226);
const smo415227 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415227.setAttribute('id', 'smo415227');
smo415248v0ar.push(smo415227);
const smo415228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415228.setAttribute('id', 'smo415228');
smo415248v0ar.push(smo415228);
const smo415229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
smo415229.setAttribute('id', 'smo415229');
const smo415231 = new VF.Ornament('scoop');
smo415229.addModifier(smo415231, 0);
const smo415230 = new VF.ChordSymbol();
smo415230.setAttribute('id', 'smo415230');
smo415230.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo415230.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415230.setFont('Petaluma Script', 14).setReportWidth(false);
smo415229.addModifier(smo415230, 0);
smo415248v0ar.push(smo415229);
const smo415232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415232.setAttribute('id', 'smo415232');
smo415248v0ar.push(smo415232);
const smo415233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo415233.setAttribute('id', 'smo415233');
smo415248v0ar.push(smo415233);
smo415248v0.addTickables(smo415248v0ar)
fmtsmo41524841.joinVoices([smo415248v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415710 = smo415219.getStemDirection();
smo415219.setStemDirection(dirsmo415710);
smo415221.setStemDirection(dirsmo415710);
smo415222.setStemDirection(dirsmo415710);
smo415223.setStemDirection(dirsmo415710);
const smo415710 = new VF.Beam([smo415219,smo415221,smo415222,smo415223]);
const dirsmo415711 = smo415224.getStemDirection();
smo415224.setStemDirection(dirsmo415711);
smo415225.setStemDirection(dirsmo415711);
smo415226.setStemDirection(dirsmo415711);
smo415227.setStemDirection(dirsmo415711);
smo415228.setStemDirection(dirsmo415711);
const smo415711 = new VF.Beam([smo415224,smo415225,smo415226,smo415227,smo415228]);
const dirsmo415712 = smo415229.getStemDirection();
smo415229.setStemDirection(dirsmo415712);
smo415232.setStemDirection(dirsmo415712);
const smo415712 = new VF.Beam([smo415229,smo415232]);
const smo415234 = new VF.Tuplet([smo415224,smo415225,smo415226], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo415320
fmtsmo41524841.format([smo415248v0], 294);
const stavesmo415248 = new VF.Stave(46, 1379.3846153846155, 377);
stavesmo415248.setAttribute('id', 'stavesmo415248');
stavesmo415248.setBegBarType(1);
stavesmo415248.addClef('treble');
const keysmo415248 = new VF.KeySignature('G');
keysmo415248.addToStave(stavesmo415248);
stavesmo415248.setContext(context);
stavesmo415248.draw();
smo415248v0.draw(context, stavesmo415248);
smo415710.setContext(context);
smo415710.draw();
smo415711.setContext(context);
smo415711.draw();
smo415712.setContext(context);
smo415712.draw();
smo415234.setContext(context).draw();
const fmtsmo41527842 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo415278v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415278v0ar = [];
const smo415249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415249.setAttribute('id', 'smo415249');
smo415278v0ar.push(smo415249);
const smo415250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
smo415250.setAttribute('id', 'smo415250');
const smo415251 = new VF.ChordSymbol();
smo415251.setAttribute('id', 'smo415251');
smo415251.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo415251.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo415251.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415251.setFont('Petaluma Script', 14).setReportWidth(false);
smo415250.addModifier(smo415251, 0);
smo415278v0ar.push(smo415250);
const smo415252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415252.setAttribute('id', 'smo415252');
smo415278v0ar.push(smo415252);
const smo415253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
smo415253.setAttribute('id', 'smo415253');
const smo4152530acc = new VF.Accidental('b');
smo415253.addModifier(smo4152530acc, 0);
smo415278v0ar.push(smo415253);
const smo415254 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo415254.setAttribute('id', 'smo415254');
smo415278v0ar.push(smo415254);
const smo415255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo415255.setAttribute('id', 'smo415255');
smo415278v0ar.push(smo415255);
const smo415256 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
smo415256.setAttribute('id', 'smo415256');
smo415278v0ar.push(smo415256);
const smo415257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
smo415257.setAttribute('id', 'smo415257');
smo415278v0ar.push(smo415257);
const smo415258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
smo415258.setAttribute('id', 'smo415258');
const smo415259 = new VF.ChordSymbol();
smo415259.setAttribute('id', 'smo415259');
smo415259.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo415259.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo415259.setFont('Petaluma Script', 14).setReportWidth(false);
smo415258.addModifier(smo415259, 0);
smo415278v0ar.push(smo415258);
const smo415260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo415260.setAttribute('id', 'smo415260');
smo415278v0ar.push(smo415260);
const smo415261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415261.setAttribute('id', 'smo415261');
smo415278v0ar.push(smo415261);
const smo415262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
smo415262.setAttribute('id', 'smo415262');
smo415278v0ar.push(smo415262);
const smo415263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
smo415263.setAttribute('id', 'smo415263');
smo415278v0ar.push(smo415263);
const smo415264 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
smo415264.setAttribute('id', 'smo415264');
smo415278v0ar.push(smo415264);
smo415278v0.addTickables(smo415278v0ar)
fmtsmo41527842.joinVoices([smo415278v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
const dirsmo415715 = smo415254.getStemDirection();
smo415254.setStemDirection(dirsmo415715);
smo415255.setStemDirection(dirsmo415715);
smo415256.setStemDirection(dirsmo415715);
smo415257.setStemDirection(dirsmo415715);
const smo415715 = new VF.Beam([smo415254,smo415255,smo415256,smo415257]);
const dirsmo415716 = smo415258.getStemDirection();
smo415258.setStemDirection(dirsmo415716);
smo415260.setStemDirection(dirsmo415716);
smo415261.setStemDirection(dirsmo415716);
const smo415716 = new VF.Beam([smo415258,smo415260,smo415261]);
 
// formatting measures in staff group smo415320
fmtsmo41527842.format([smo415278v0], 310);
const stavesmo415278 = new VF.Stave(423, 1379.3846153846155, 325);
stavesmo415278.setAttribute('id', 'stavesmo415278');
stavesmo415278.setBegBarType(VF.Barline.type.NONE);
stavesmo415278.setEndBarType(2);
stavesmo415278.setContext(context);
stavesmo415278.draw();
smo415278v0.draw(context, stavesmo415278);
smo415715.setContext(context);
smo415715.draw();
smo415716.setContext(context);
smo415716.draw();
const fmtsmo41529643 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo415296v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo415296v0ar = [];
const smo415279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
smo415279.setAttribute('id', 'smo415279');
smo415296v0ar.push(smo415279);
const smo415280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415280.setAttribute('id', 'smo415280');
smo415296v0ar.push(smo415280);
const smo415281 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415281.setAttribute('id', 'smo415281');
smo415296v0ar.push(smo415281);
const smo415282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
smo415282.setAttribute('id', 'smo415282');
smo415296v0ar.push(smo415282);
smo415296v0.addTickables(smo415296v0ar)
fmtsmo41529643.joinVoices([smo415296v0]);
// create beam groups and tuplets for format grp smo415320 before formatting
 
// formatting measures in staff group smo415320
fmtsmo41529643.format([smo415296v0], 194);
const stavesmo415296 = new VF.Stave(748, 1379.3846153846155, 208);
stavesmo415296.setAttribute('id', 'stavesmo415296');
stavesmo415296.setBegBarType(VF.Barline.type.NONE);
stavesmo415296.setContext(context);
stavesmo415296.draw();
smo415296v0.draw(context, stavesmo415296);
// modifier from 0-36-0-11 to 0-36-0-12
const smo415858 = new VF.Curve(smo415078, smo415079, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"position_end":2}'));
smo415858.setContext(context).draw();
// modifier from 0-36-0-9 to 0-36-0-10
const smo415859 = new VF.StaveTie({ first_note: smo415076, last_note: smo415077, 
          firstNote: smo415076, lastNote: smo415077, first_indices: [0], last_indices: [0]});
smo415859.setContext(context).draw();
// modifier from 0-25-0-8 to 0-25-0-9
const smo415860 = new VF.StaveTie({ first_note: smo414741, last_note: smo414744, 
          firstNote: smo414741, lastNote: smo414744, first_indices: [0], last_indices: [0]});
smo415860.setContext(context).draw();
// modifier from 0-25-0-12 to 0-25-0-13
const smo415861 = new VF.StaveTie({ first_note: smo414747, last_note: smo414748, 
          firstNote: smo414747, lastNote: smo414748, first_indices: [0], last_indices: [0]});
smo415861.setContext(context).draw();
// modifier from 0-26-0-10 to 0-26-0-11
const smo415862 = new VF.StaveTie({ first_note: smo414779, last_note: smo414780, 
          firstNote: smo414779, lastNote: smo414780, first_indices: [0], last_indices: [0]});
smo415862.setContext(context).draw();
// modifier from 0-29-0-1 to 0-29-0-2
const smo415863 = new VF.StaveTie({ first_note: smo414865, last_note: smo414866, 
          firstNote: smo414865, lastNote: smo414866, first_indices: [0], last_indices: [0]});
smo415863.setContext(context).draw();
}
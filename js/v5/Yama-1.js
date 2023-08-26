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
const fmtsmo41686625 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo416866v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo416866v0ar = [];
const smo416832 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo416832.setAttribute('id', 'smo416832');
const smo4168320acc = new VF.Accidental('b');
smo416832.addModifier(smo4168320acc, 0);
const smo416833 = new VF.ChordSymbol();
smo416833.setAttribute('id', 'smo416833');
smo416833.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo416833.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo416833.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416833.setFont('Petaluma Script', 14).setReportWidth(false);
smo416832.addModifier(smo416833, 0);
smo416866v0ar.push(smo416832);
const smo416834 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo416834.setAttribute('id', 'smo416834');
smo416866v0ar.push(smo416834);
const smo416835 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416835.setAttribute('id', 'smo416835');
const smo4168350acc = new VF.Accidental('b');
smo416835.addModifier(smo4168350acc, 0);
smo416866v0ar.push(smo416835);
const smo416836 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416836.setAttribute('id', 'smo416836');
smo416866v0ar.push(smo416836);
const smo416837 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"r","autoStem":true,"keys":["ab/4/r"]}'))
smo416837.setAttribute('id', 'smo416837');
smo416866v0ar.push(smo416837);
const smo416838 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416838.setAttribute('id', 'smo416838');
smo416866v0ar.push(smo416838);
const smo416839 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416839.setAttribute('id', 'smo416839');
const smo416840 = new VF.ChordSymbol();
smo416840.setAttribute('id', 'smo416840');
smo416840.setFont('Petaluma Script', 14).setReportWidth(false);
smo416839.addModifier(smo416840, 0);
smo416866v0ar.push(smo416839);
const smo416841 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416841.setAttribute('id', 'smo416841');
const smo416842 = new VF.ChordSymbol();
smo416842.setAttribute('id', 'smo416842');
smo416842.setFont('Petaluma Script', 14).setReportWidth(false);
smo416841.addModifier(smo416842, 0);
smo416866v0ar.push(smo416841);
const smo416843 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo416843.setAttribute('id', 'smo416843');
const smo416845 = new VF.Ornament('scoop');
smo416843.addModifier(smo416845, 0);
const smo416844 = new VF.ChordSymbol();
smo416844.setAttribute('id', 'smo416844');
smo416844.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo416844.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416844.setFont('Petaluma Script', 14).setReportWidth(false);
smo416843.addModifier(smo416844, 0);
smo416866v0ar.push(smo416843);
const smo416846 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo416846.setAttribute('id', 'smo416846');
smo416866v0ar.push(smo416846);
const smo416847 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416847.setAttribute('id', 'smo416847');
smo416866v0ar.push(smo416847);
const smo416848 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416848.setAttribute('id', 'smo416848');
smo416866v0ar.push(smo416848);
const smo416849 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416849.setAttribute('id', 'smo416849');
smo416866v0ar.push(smo416849);
const smo416850 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416850.setAttribute('id', 'smo416850');
smo416866v0ar.push(smo416850);
const smo416851 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bb/4/r"]}'))
smo416851.setAttribute('id', 'smo416851');
const smo416852 = new VF.ChordSymbol();
smo416852.setAttribute('id', 'smo416852');
smo416852.setFont('Petaluma Script', 14).setReportWidth(false);
smo416851.addModifier(smo416852, 0);
smo416866v0ar.push(smo416851);
smo416866v0.addTickables(smo416866v0ar)
fmtsmo41686625.joinVoices([smo416866v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417690 = smo416832.getStemDirection();
smo416832.setStemDirection(dirsmo417690);
smo416834.setStemDirection(dirsmo417690);
smo416835.setStemDirection(dirsmo417690);
smo416836.setStemDirection(dirsmo417690);
const smo417690 = new VF.Beam([smo416832,smo416834,smo416835,smo416836,smo416837]);
const dirsmo417691 = smo416838.getStemDirection();
smo416838.setStemDirection(dirsmo417691);
smo416839.setStemDirection(dirsmo417691);
smo416841.setStemDirection(dirsmo417691);
smo416843.setStemDirection(dirsmo417691);
const smo417691 = new VF.Beam([smo416838,smo416839,smo416841,smo416843]);
const dirsmo417692 = smo416846.getStemDirection();
smo416846.setStemDirection(dirsmo417692);
smo416847.setStemDirection(dirsmo417692);
smo416848.setStemDirection(dirsmo417692);
smo416849.setStemDirection(dirsmo417692);
const smo417692 = new VF.Beam([smo416846,smo416847,smo416848,smo416849]);
 
// formatting measures in staff group smo417422
fmtsmo41686625.format([smo416866v0], 523);
const stavesmo416866 = new VF.Stave(46, 276.3846153846155, 607);
stavesmo416866.setAttribute('id', 'stavesmo416866');
stavesmo416866.setBegBarType(1);
stavesmo416866.addClef('treble');
const keysmo416866 = new VF.KeySignature('G');
keysmo416866.addToStave(stavesmo416866);
stavesmo416866.setContext(context);
stavesmo416866.draw();
smo416866v0.draw(context, stavesmo416866);
smo417690.setContext(context);
smo417690.draw();
smo417691.setContext(context);
smo417691.draw();
smo417692.setContext(context);
smo417692.draw();
const fmtsmo41689826 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo416898v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo416898v0ar = [];
const smo416867 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo416867.setAttribute('id', 'smo416867');
const smo416868 = new VF.ChordSymbol();
smo416868.setAttribute('id', 'smo416868');
smo416868.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo416868.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416868.setFont('Petaluma Script', 14).setReportWidth(false);
smo416867.addModifier(smo416868, 0);
smo416898v0ar.push(smo416867);
const smo416869 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo416869.setAttribute('id', 'smo416869');
smo416898v0ar.push(smo416869);
const smo416870 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo416870.setAttribute('id', 'smo416870');
smo416898v0ar.push(smo416870);
const smo416871 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo416871.setAttribute('id', 'smo416871');
const smo4168710acc = new VF.Accidental('n');
smo416871.addModifier(smo4168710acc, 0);
smo416898v0ar.push(smo416871);
const smo416872 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo416872.setAttribute('id', 'smo416872');
const smo4168720acc = new VF.Accidental('b');
smo416872.addModifier(smo4168720acc, 0);
const smo416873 = new VF.ChordSymbol();
smo416873.setAttribute('id', 'smo416873');
smo416873.setFont('Petaluma Script', 14).setReportWidth(false);
smo416872.addModifier(smo416873, 0);
smo416898v0ar.push(smo416872);
const smo416874 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo416874.setAttribute('id', 'smo416874');
smo416898v0ar.push(smo416874);
const smo416875 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416875.setAttribute('id', 'smo416875');
smo416898v0ar.push(smo416875);
const smo416876 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
const smo416878 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["bn/4"],"slash":true}'))
smo416878.setAttribute('id', 'smo416878');
const ggrpsmo416876 = new VF.GraceNoteGroup([smo416878]);
ggrpsmo416876.beamNotes();
smo416876.addModifier(ggrpsmo416876, 0);
smo416876.setAttribute('id', 'smo416876');
const smo416877 = new VF.ChordSymbol();
smo416877.setAttribute('id', 'smo416877');
smo416877.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo416877.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416877.setFont('Petaluma Script', 14).setReportWidth(false);
smo416876.addModifier(smo416877, 0);
smo416898v0ar.push(smo416876);
const smo416879 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416879.setAttribute('id', 'smo416879');
const smo4168790acc = new VF.Accidental('b');
smo416879.addModifier(smo4168790acc, 0);
smo416898v0ar.push(smo416879);
const smo416880 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo416880.setAttribute('id', 'smo416880');
smo416898v0ar.push(smo416880);
const smo416881 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416881.setAttribute('id', 'smo416881');
smo416898v0ar.push(smo416881);
const smo416882 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416882.setAttribute('id', 'smo416882');
smo416898v0ar.push(smo416882);
const smo416883 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["ab/4/r"]}'))
smo416883.setAttribute('id', 'smo416883');
smo416898v0ar.push(smo416883);
smo416898v0.addTickables(smo416898v0ar)
fmtsmo41689826.joinVoices([smo416898v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417695 = smo416869.getStemDirection();
smo416869.setStemDirection(dirsmo417695);
smo416870.setStemDirection(dirsmo417695);
const smo417695 = new VF.Beam([smo416869,smo416870]);
const dirsmo417696 = smo416871.getStemDirection();
smo416871.setStemDirection(dirsmo417696);
smo416872.setStemDirection(dirsmo417696);
smo416874.setStemDirection(dirsmo417696);
smo416875.setStemDirection(dirsmo417696);
const smo417696 = new VF.Beam([smo416871,smo416872,smo416874,smo416875]);
const dirsmo417697 = smo416876.getStemDirection();
smo416876.setStemDirection(dirsmo417697);
smo416879.setStemDirection(dirsmo417697);
smo416880.setStemDirection(dirsmo417697);
smo416881.setStemDirection(dirsmo417697);
const smo417697 = new VF.Beam([smo416876,smo416879,smo416880,smo416881]);
const smo416884 = new VF.Tuplet([smo416879,smo416880,smo416881], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo417422
fmtsmo41689826.format([smo416898v0], 496);
const stavesmo416898 = new VF.Stave(653, 276.3846153846155, 510);
stavesmo416898.setAttribute('id', 'stavesmo416898');
stavesmo416898.setBegBarType(VF.Barline.type.NONE);
stavesmo416898.setContext(context);
stavesmo416898.draw();
smo416898v0.draw(context, stavesmo416898);
smo417695.setContext(context);
smo417695.draw();
smo417696.setContext(context);
smo417696.draw();
smo417697.setContext(context);
smo417697.draw();
smo416884.setContext(context).draw();
const fmtsmo41693127 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo416931v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo416931v0ar = [];
const smo416899 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["c#/5/r"]}'))
smo416899.setAttribute('id', 'smo416899');
const smo416900 = new VF.ChordSymbol();
smo416900.setAttribute('id', 'smo416900');
smo416900.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo416900.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416900.setFont('Petaluma Script', 14).setReportWidth(false);
smo416899.addModifier(smo416900, 0);
smo416931v0ar.push(smo416899);
const smo416901 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo416901.setAttribute('id', 'smo416901');
const smo4169010acc = new VF.Accidental('b');
smo416901.addModifier(smo4169010acc, 0);
smo416901.addModifier(new VF.Dot(), 0);
smo416931v0ar.push(smo416901);
const smo416902 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416902.setAttribute('id', 'smo416902');
const smo4169020acc = new VF.Accidental('b');
smo416902.addModifier(smo4169020acc, 0);
smo416931v0ar.push(smo416902);
const smo416903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo416903.setAttribute('id', 'smo416903');
smo416931v0ar.push(smo416903);
const smo416904 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416904.setAttribute('id', 'smo416904');
smo416931v0ar.push(smo416904);
const smo416905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo416905.setAttribute('id', 'smo416905');
const smo416906 = new VF.ChordSymbol();
smo416906.setAttribute('id', 'smo416906');
smo416906.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo416906.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416906.setFont('Petaluma Script', 14).setReportWidth(false);
smo416905.addModifier(smo416906, 0);
smo416931v0ar.push(smo416905);
const smo416907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416907.setAttribute('id', 'smo416907');
smo416931v0ar.push(smo416907);
const smo416908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo416908.setAttribute('id', 'smo416908');
smo416931v0ar.push(smo416908);
const smo416909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo416909.setAttribute('id', 'smo416909');
smo416931v0ar.push(smo416909);
const smo416910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo416910.setAttribute('id', 'smo416910');
const smo4169100acc = new VF.Accidental('n');
smo416910.addModifier(smo4169100acc, 0);
smo416931v0ar.push(smo416910);
const smo416911 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo416911.setAttribute('id', 'smo416911');
const smo4169110acc = new VF.Accidental('#');
smo416911.addModifier(smo4169110acc, 0);
smo416931v0ar.push(smo416911);
const smo416912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo416912.setAttribute('id', 'smo416912');
smo416931v0ar.push(smo416912);
const smo416913 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416913.setAttribute('id', 'smo416913');
smo416931v0ar.push(smo416913);
const smo416914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo416914.setAttribute('id', 'smo416914');
smo416931v0ar.push(smo416914);
const smo416915 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo416915.setAttribute('id', 'smo416915');
const smo4169150acc = new VF.Accidental('n');
smo416915.addModifier(smo4169150acc, 0);
smo416931v0ar.push(smo416915);
smo416931v0.addTickables(smo416931v0ar)
fmtsmo41693127.joinVoices([smo416931v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417705 = smo416902.getStemDirection();
smo416902.setStemDirection(dirsmo417705);
smo416903.setStemDirection(dirsmo417705);
smo416904.setStemDirection(dirsmo417705);
const smo417705 = new VF.Beam([smo416902,smo416903,smo416904]);
const dirsmo417706 = smo416905.getStemDirection();
smo416905.setStemDirection(dirsmo417706);
smo416907.setStemDirection(dirsmo417706);
smo416908.setStemDirection(dirsmo417706);
smo416909.setStemDirection(dirsmo417706);
smo416910.setStemDirection(dirsmo417706);
const smo417706 = new VF.Beam([smo416905,smo416907,smo416908,smo416909,smo416910]);
const dirsmo417707 = smo416911.getStemDirection();
smo416911.setStemDirection(dirsmo417707);
smo416912.setStemDirection(dirsmo417707);
smo416913.setStemDirection(dirsmo417707);
smo416914.setStemDirection(dirsmo417707);
smo416915.setStemDirection(dirsmo417707);
const smo417707 = new VF.Beam([smo416911,smo416912,smo416913,smo416914,smo416915]);
const smo416916 = new VF.Tuplet([smo416905,smo416907,smo416908], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo416917 = new VF.Tuplet([smo416911,smo416912,smo416913], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo417422
fmtsmo41693127.format([smo416931v0], 581);
const stavesmo416931 = new VF.Stave(46, 417.3846153846155, 665);
stavesmo416931.setAttribute('id', 'stavesmo416931');
stavesmo416931.setBegBarType(1);
stavesmo416931.addClef('treble');
const keysmo416931 = new VF.KeySignature('G');
keysmo416931.addToStave(stavesmo416931);
stavesmo416931.setContext(context);
stavesmo416931.draw();
smo416931v0.draw(context, stavesmo416931);
smo417705.setContext(context);
smo417705.draw();
smo417706.setContext(context);
smo417706.draw();
smo417707.setContext(context);
smo417707.draw();
smo416916.setContext(context).draw();
smo416917.setContext(context).draw();
const fmtsmo41696328 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo416963v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo416963v0ar = [];
const smo416932 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo416932.setAttribute('id', 'smo416932');
const smo416933 = new VF.ChordSymbol();
smo416933.setAttribute('id', 'smo416933');
smo416933.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo416933.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo416933.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416933.setFont('Petaluma Script', 14).setReportWidth(false);
smo416932.addModifier(smo416933, 0);
smo416963v0ar.push(smo416932);
const smo416934 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo416934.setAttribute('id', 'smo416934');
smo416963v0ar.push(smo416934);
const smo416935 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo416935.setAttribute('id', 'smo416935');
smo416963v0ar.push(smo416935);
const smo416936 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo416936.setAttribute('id', 'smo416936');
smo416963v0ar.push(smo416936);
const smo416937 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo416937.setAttribute('id', 'smo416937');
const smo416938 = new VF.ChordSymbol();
smo416938.setAttribute('id', 'smo416938');
smo416938.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo416938.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416938.setFont('Petaluma Script', 14).setReportWidth(false);
smo416937.addModifier(smo416938, 0);
smo416963v0ar.push(smo416937);
const smo416939 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo416939.setAttribute('id', 'smo416939');
smo416963v0ar.push(smo416939);
const smo416940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
const smo416941 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo416941.setAttribute('id', 'smo416941');
const acc0smo416941 = new VF.Accidental('#');
smo416941.addModifier(acc0smo416941, 0)
const ggrpsmo416940 = new VF.GraceNoteGroup([smo416941]);
ggrpsmo416940.beamNotes();
smo416940.addModifier(ggrpsmo416940, 0);
smo416940.setAttribute('id', 'smo416940');
smo416963v0ar.push(smo416940);
const smo416942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["dn/5/r"]}'))
smo416942.setAttribute('id', 'smo416942');
smo416963v0ar.push(smo416942);
const smo416943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416943.setAttribute('id', 'smo416943');
smo416963v0ar.push(smo416943);
const smo416944 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo416944.setAttribute('id', 'smo416944');
const smo4169440acc = new VF.Accidental('b');
smo416944.addModifier(smo4169440acc, 0);
smo416963v0ar.push(smo416944);
const smo416945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo416945.setAttribute('id', 'smo416945');
smo416963v0ar.push(smo416945);
const smo416946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo416946.setAttribute('id', 'smo416946');
smo416963v0ar.push(smo416946);
smo416963v0.addTickables(smo416963v0ar)
fmtsmo41696328.joinVoices([smo416963v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417710 = smo416935.getStemDirection();
smo416935.setStemDirection(dirsmo417710);
smo416936.setStemDirection(dirsmo417710);
const smo417710 = new VF.Beam([smo416935,smo416936]);
const dirsmo417711 = smo416937.getStemDirection();
smo416937.setStemDirection(dirsmo417711);
smo416939.setStemDirection(dirsmo417711);
const smo417711 = new VF.Beam([smo416937,smo416939]);
const dirsmo417712 = smo416940.getStemDirection();
smo416940.setStemDirection(dirsmo417712);
smo416943.setStemDirection(dirsmo417712);
smo416944.setStemDirection(dirsmo417712);
smo416945.setStemDirection(dirsmo417712);
smo416946.setStemDirection(dirsmo417712);
const smo417712 = new VF.Beam([smo416940,smo416943,smo416944,smo416945,smo416946]);
const smo416947 = new VF.Tuplet([smo416934,smo416935,smo416936], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo416948 = new VF.Tuplet([smo416940,smo416942,smo416943], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo416949 = new VF.Tuplet([smo416944,smo416945,smo416946], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo417422
fmtsmo41696328.format([smo416963v0], 437);
const stavesmo416963 = new VF.Stave(711, 417.3846153846155, 451);
stavesmo416963.setAttribute('id', 'stavesmo416963');
stavesmo416963.setBegBarType(VF.Barline.type.NONE);
stavesmo416963.setContext(context);
stavesmo416963.draw();
smo416963v0.draw(context, stavesmo416963);
smo417710.setContext(context);
smo417710.draw();
smo417711.setContext(context);
smo417711.draw();
smo417712.setContext(context);
smo417712.draw();
smo416947.setContext(context).draw();
smo416948.setContext(context).draw();
smo416949.setContext(context).draw();
const fmtsmo41698829 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo416988v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo416988v0ar = [];
const smo416964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
const smo416966 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo416966.setAttribute('id', 'smo416966');
const ggrpsmo416964 = new VF.GraceNoteGroup([smo416966]);
ggrpsmo416964.beamNotes();
smo416964.addModifier(ggrpsmo416964, 0);
smo416964.setAttribute('id', 'smo416964');
const smo416965 = new VF.ChordSymbol();
smo416965.setAttribute('id', 'smo416965');
smo416965.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo416965.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo416965.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416965.setFont('Petaluma Script', 14).setReportWidth(false);
smo416964.addModifier(smo416965, 0);
smo416988v0ar.push(smo416964);
const smo416967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416967.setAttribute('id', 'smo416967');
smo416988v0ar.push(smo416967);
const smo416968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416968.setAttribute('id', 'smo416968');
smo416988v0ar.push(smo416968);
const smo416969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo416969.setAttribute('id', 'smo416969');
const smo416970 = new VF.ChordSymbol();
smo416970.setAttribute('id', 'smo416970');
smo416970.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo416970.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416970.setFont('Petaluma Script', 14).setReportWidth(false);
smo416969.addModifier(smo416970, 0);
smo416988v0ar.push(smo416969);
const smo416971 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/6/n"]}'))
smo416971.setAttribute('id', 'smo416971');
smo416988v0ar.push(smo416971);
const smo416972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo416972.setAttribute('id', 'smo416972');
const smo4169720acc = new VF.Accidental('b');
smo416972.addModifier(smo4169720acc, 0);
smo416988v0ar.push(smo416972);
const smo416973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo416973.setAttribute('id', 'smo416973');
smo416988v0ar.push(smo416973);
const smo416974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo416974.setAttribute('id', 'smo416974');
smo416988v0ar.push(smo416974);
smo416988v0.addTickables(smo416988v0ar)
fmtsmo41698829.joinVoices([smo416988v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417718 = smo416964.getStemDirection();
smo416964.setStemDirection(dirsmo417718);
smo416967.setStemDirection(dirsmo417718);
const smo417718 = new VF.Beam([smo416964,smo416967]);
const dirsmo417719 = smo416971.getStemDirection();
smo416971.setStemDirection(dirsmo417719);
smo416972.setStemDirection(dirsmo417719);
smo416973.setStemDirection(dirsmo417719);
smo416974.setStemDirection(dirsmo417719);
const smo417719 = new VF.Beam([smo416971,smo416972,smo416973,smo416974]);
 
// formatting measures in staff group smo417422
fmtsmo41698829.format([smo416988v0], 306);
const stavesmo416988 = new VF.Stave(46, 578.3846153846155, 390);
stavesmo416988.setAttribute('id', 'stavesmo416988');
stavesmo416988.setBegBarType(1);
stavesmo416988.setEndBarType(2);
stavesmo416988.addClef('treble');
const keysmo416988 = new VF.KeySignature('G');
keysmo416988.addToStave(stavesmo416988);
stavesmo416988.setContext(context);
stavesmo416988.draw();
smo416988v0.draw(context, stavesmo416988);
smo417718.setContext(context);
smo417718.draw();
smo417719.setContext(context);
smo417719.draw();
const fmtsmo41701230 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo417012v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417012v0ar = [];
const smo416989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo416989.setAttribute('id', 'smo416989');
const smo416990 = new VF.ChordSymbol();
smo416990.setAttribute('id', 'smo416990');
smo416990.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo416990.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo416990.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo416990.setFont('Petaluma Script', 14).setReportWidth(false);
smo416989.addModifier(smo416990, 0);
smo417012v0ar.push(smo416989);
const smo416991 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo416991.setAttribute('id', 'smo416991');
smo416991.addModifier(new VF.Dot(), 0);
smo417012v0ar.push(smo416991);
const smo416992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo416992.setAttribute('id', 'smo416992');
const smo4169920acc = new VF.Accidental('n');
smo416992.addModifier(smo4169920acc, 0);
smo417012v0ar.push(smo416992);
const smo416993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo416993.setAttribute('id', 'smo416993');
smo416993.addModifier(new VF.Dot(), 0);
smo417012v0ar.push(smo416993);
const smo416994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo416994.setAttribute('id', 'smo416994');
const smo416995 = new VF.ChordSymbol();
smo416995.setAttribute('id', 'smo416995');
smo416995.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo416995.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3}'));
smo416995.setFont('Petaluma Script', 14).setReportWidth(false);
smo416994.addModifier(smo416995, 0);
smo417012v0ar.push(smo416994);
const smo416996 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo416996.setAttribute('id', 'smo416996');
smo416996.addModifier(new VF.Dot(), 0);
smo417012v0ar.push(smo416996);
const smo416997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo416997.setAttribute('id', 'smo416997');
const smo4169970acc = new VF.Accidental('n');
smo416997.addModifier(smo4169970acc, 0);
smo417012v0ar.push(smo416997);
const smo416998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo416998.setAttribute('id', 'smo416998');
smo416998.addModifier(new VF.Dot(), 0);
smo417012v0ar.push(smo416998);
smo417012v0.addTickables(smo417012v0ar)
fmtsmo41701230.joinVoices([smo417012v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417721 = smo416989.getStemDirection();
smo416989.setStemDirection(dirsmo417721);
smo416991.setStemDirection(dirsmo417721);
const smo417721 = new VF.Beam([smo416989,smo416991]);
const dirsmo417722 = smo416992.getStemDirection();
smo416992.setStemDirection(dirsmo417722);
smo416993.setStemDirection(dirsmo417722);
const smo417722 = new VF.Beam([smo416992,smo416993]);
const dirsmo417723 = smo416994.getStemDirection();
smo416994.setStemDirection(dirsmo417723);
smo416996.setStemDirection(dirsmo417723);
const smo417723 = new VF.Beam([smo416994,smo416996]);
const dirsmo417724 = smo416997.getStemDirection();
smo416997.setStemDirection(dirsmo417724);
smo416998.setStemDirection(dirsmo417724);
const smo417724 = new VF.Beam([smo416997,smo416998]);
 
// formatting measures in staff group smo417422
fmtsmo41701230.format([smo417012v0], 345);
const stavesmo417012 = new VF.Stave(436, 578.3846153846155, 359);
stavesmo417012.setAttribute('id', 'stavesmo417012');
stavesmo417012.setBegBarType(VF.Barline.type.NONE);
stavesmo417012.setContext(context);
stavesmo417012.draw();
smo417012v0.draw(context, stavesmo417012);
smo417721.setContext(context);
smo417721.draw();
smo417722.setContext(context);
smo417722.draw();
smo417723.setContext(context);
smo417723.draw();
smo417724.setContext(context);
smo417724.draw();
const fmtsmo41704231 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo417042v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417042v0ar = [];
const smo417013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo417013.setAttribute('id', 'smo417013');
const smo4170130acc = new VF.Accidental('b');
smo417013.addModifier(smo4170130acc, 0);
const smo417014 = new VF.ChordSymbol();
smo417014.setAttribute('id', 'smo417014');
smo417014.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo417014.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417014.setFont('Petaluma Script', 14).setReportWidth(false);
smo417013.addModifier(smo417014, 0);
smo417042v0ar.push(smo417013);
const smo417015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417015.setAttribute('id', 'smo417015');
smo417015.addModifier(new VF.Dot(), 0);
const smo417016 = new VF.ChordSymbol();
smo417016.setAttribute('id', 'smo417016');
smo417016.setFont('Petaluma Script', 14).setReportWidth(false);
smo417015.addModifier(smo417016, 0);
smo417042v0ar.push(smo417015);
const smo417017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417017.setAttribute('id', 'smo417017');
const smo4170170acc = new VF.Accidental('b');
smo417017.addModifier(smo4170170acc, 0);
const smo417018 = new VF.ChordSymbol();
smo417018.setAttribute('id', 'smo417018');
smo417018.setFont('Petaluma Script', 14).setReportWidth(false);
smo417017.addModifier(smo417018, 0);
smo417042v0ar.push(smo417017);
const smo417019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417019.setAttribute('id', 'smo417019');
smo417019.addModifier(new VF.Dot(), 0);
const smo417020 = new VF.ChordSymbol();
smo417020.setAttribute('id', 'smo417020');
smo417020.setFont('Petaluma Script', 14).setReportWidth(false);
smo417019.addModifier(smo417020, 0);
smo417042v0ar.push(smo417019);
const smo417021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo417021.setAttribute('id', 'smo417021');
const smo4170210acc = new VF.Accidental('n');
smo417021.addModifier(smo4170210acc, 0);
const smo417022 = new VF.ChordSymbol();
smo417022.setAttribute('id', 'smo417022');
smo417022.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo417022.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417022.setFont('Petaluma Script', 14).setReportWidth(false);
smo417021.addModifier(smo417022, 0);
smo417042v0ar.push(smo417021);
const smo417023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo417023.setAttribute('id', 'smo417023');
smo417023.addModifier(new VF.Dot(), 0);
const smo417024 = new VF.ChordSymbol();
smo417024.setAttribute('id', 'smo417024');
smo417024.setFont('Petaluma Script', 14).setReportWidth(false);
smo417023.addModifier(smo417024, 0);
smo417042v0ar.push(smo417023);
const smo417025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo417025.setAttribute('id', 'smo417025');
const smo4170250acc = new VF.Accidental('b');
smo417025.addModifier(smo4170250acc, 0);
const smo417026 = new VF.ChordSymbol();
smo417026.setAttribute('id', 'smo417026');
smo417026.setFont('Petaluma Script', 14).setReportWidth(false);
smo417025.addModifier(smo417026, 0);
smo417042v0ar.push(smo417025);
const smo417027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo417027.setAttribute('id', 'smo417027');
smo417027.addModifier(new VF.Dot(), 0);
const smo417028 = new VF.ChordSymbol();
smo417028.setAttribute('id', 'smo417028');
smo417028.setFont('Petaluma Script', 14).setReportWidth(false);
smo417027.addModifier(smo417028, 0);
smo417042v0ar.push(smo417027);
smo417042v0.addTickables(smo417042v0ar)
fmtsmo41704231.joinVoices([smo417042v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417727 = smo417013.getStemDirection();
smo417013.setStemDirection(dirsmo417727);
smo417015.setStemDirection(dirsmo417727);
const smo417727 = new VF.Beam([smo417013,smo417015]);
const dirsmo417728 = smo417017.getStemDirection();
smo417017.setStemDirection(dirsmo417728);
smo417019.setStemDirection(dirsmo417728);
const smo417728 = new VF.Beam([smo417017,smo417019]);
const dirsmo417729 = smo417021.getStemDirection();
smo417021.setStemDirection(dirsmo417729);
smo417023.setStemDirection(dirsmo417729);
const smo417729 = new VF.Beam([smo417021,smo417023]);
const dirsmo417730 = smo417025.getStemDirection();
smo417025.setStemDirection(dirsmo417730);
smo417027.setStemDirection(dirsmo417730);
const smo417730 = new VF.Beam([smo417025,smo417027]);
 
// formatting measures in staff group smo417422
fmtsmo41704231.format([smo417042v0], 355);
const stavesmo417042 = new VF.Stave(795, 578.3846153846155, 369);
stavesmo417042.setAttribute('id', 'stavesmo417042');
stavesmo417042.setBegBarType(VF.Barline.type.NONE);
stavesmo417042.setContext(context);
stavesmo417042.draw();
smo417042v0.draw(context, stavesmo417042);
smo417727.setContext(context);
smo417727.draw();
smo417728.setContext(context);
smo417728.draw();
smo417729.setContext(context);
smo417729.draw();
smo417730.setContext(context);
smo417730.draw();
const fmtsmo41707832 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo417078v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417078v0ar = [];
const smo417043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo417043.setAttribute('id', 'smo417043');
const smo4170430acc = new VF.Accidental('b');
smo417043.addModifier(smo4170430acc, 0);
const smo417044 = new VF.ChordSymbol();
smo417044.setAttribute('id', 'smo417044');
smo417044.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1}'));
smo417044.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417044.setFont('Petaluma Script', 14).setReportWidth(false);
smo417043.addModifier(smo417044, 0);
smo417078v0ar.push(smo417043);
const smo417045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo417045.setAttribute('id', 'smo417045');
const smo4170450acc = new VF.Accidental('b');
smo417045.addModifier(smo4170450acc, 0);
const smo417046 = new VF.ChordSymbol();
smo417046.setAttribute('id', 'smo417046');
smo417046.setFont('Petaluma Script', 14).setReportWidth(false);
smo417045.addModifier(smo417046, 0);
smo417078v0ar.push(smo417045);
const smo417047 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo417047.setAttribute('id', 'smo417047');
const smo4170470acc = new VF.Accidental('n');
smo417047.addModifier(smo4170470acc, 0);
const smo417048 = new VF.ChordSymbol();
smo417048.setAttribute('id', 'smo417048');
smo417048.setFont('Petaluma Script', 14).setReportWidth(false);
smo417047.addModifier(smo417048, 0);
smo417078v0ar.push(smo417047);
const smo417049 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417049.setAttribute('id', 'smo417049');
const smo4170490acc = new VF.Accidental('b');
smo417049.addModifier(smo4170490acc, 0);
const smo417051 = new VF.Ornament('fall');
smo417049.addModifier(smo417051, 0);
const smo417050 = new VF.ChordSymbol();
smo417050.setAttribute('id', 'smo417050');
smo417050.setFont('Petaluma Script', 14).setReportWidth(false);
smo417049.addModifier(smo417050, 0);
smo417078v0ar.push(smo417049);
const smo417052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417052.setAttribute('id', 'smo417052');
const smo417053 = new VF.ChordSymbol();
smo417053.setAttribute('id', 'smo417053');
smo417053.setFont('Petaluma Script', 14).setReportWidth(false);
smo417052.addModifier(smo417053, 0);
smo417078v0ar.push(smo417052);
const smo417054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/4/n"]}'))
smo417054.setAttribute('id', 'smo417054');
const smo4170540acc = new VF.Accidental('b');
smo417054.addModifier(smo4170540acc, 0);
smo417078v0ar.push(smo417054);
const smo417055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo417055.setAttribute('id', 'smo417055');
const smo4170550acc = new VF.Accidental('b');
smo417055.addModifier(smo4170550acc, 0);
smo417078v0ar.push(smo417055);
const smo417056 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417056.setAttribute('id', 'smo417056');
smo417078v0ar.push(smo417056);
const smo417057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cb/5/n"]}'))
smo417057.setAttribute('id', 'smo417057');
const smo4170570acc = new VF.Accidental('b');
smo417057.addModifier(smo4170570acc, 0);
const smo417058 = new VF.ChordSymbol();
smo417058.setAttribute('id', 'smo417058');
smo417058.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo417058.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417058.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417058.setFont('Petaluma Script', 14).setReportWidth(false);
smo417057.addModifier(smo417058, 0);
smo417078v0ar.push(smo417057);
const smo417059 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo417059.setAttribute('id', 'smo417059');
const smo4170590acc = new VF.Accidental('b');
smo4170590acc.setAsCautionary();
smo417059.addModifier(smo4170590acc, 0);
smo417078v0ar.push(smo417059);
const smo417060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo417060.setAttribute('id', 'smo417060');
const smo4170600acc = new VF.Accidental('b');
smo4170600acc.setAsCautionary();
smo417060.addModifier(smo4170600acc, 0);
smo417078v0ar.push(smo417060);
const smo417061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cb/5/n"]}'))
smo417061.setAttribute('id', 'smo417061');
smo417078v0ar.push(smo417061);
const smo417062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417062.setAttribute('id', 'smo417062');
smo417078v0ar.push(smo417062);
const smo417063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo417063.setAttribute('id', 'smo417063');
smo417078v0ar.push(smo417063);
const smo417064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417064.setAttribute('id', 'smo417064');
smo417078v0ar.push(smo417064);
smo417078v0.addTickables(smo417078v0ar)
fmtsmo41707832.joinVoices([smo417078v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417739 = smo417043.getStemDirection();
smo417043.setStemDirection(dirsmo417739);
smo417045.setStemDirection(dirsmo417739);
smo417047.setStemDirection(dirsmo417739);
smo417049.setStemDirection(dirsmo417739);
const smo417739 = new VF.Beam([smo417043,smo417045,smo417047,smo417049]);
const dirsmo417740 = smo417054.getStemDirection();
smo417054.setStemDirection(dirsmo417740);
smo417055.setStemDirection(dirsmo417740);
smo417056.setStemDirection(dirsmo417740);
const smo417740 = new VF.Beam([smo417054,smo417055,smo417056]);
const dirsmo417741 = smo417057.getStemDirection();
smo417057.setStemDirection(dirsmo417741);
smo417059.setStemDirection(dirsmo417741);
smo417060.setStemDirection(dirsmo417741);
smo417061.setStemDirection(dirsmo417741);
const smo417741 = new VF.Beam([smo417057,smo417059,smo417060,smo417061]);
const dirsmo417742 = smo417062.getStemDirection();
smo417062.setStemDirection(dirsmo417742);
smo417063.setStemDirection(dirsmo417742);
const smo417742 = new VF.Beam([smo417062,smo417063]);
 
// formatting measures in staff group smo417422
fmtsmo41707832.format([smo417078v0], 588);
const stavesmo417078 = new VF.Stave(46, 760.3846153846155, 672);
stavesmo417078.setAttribute('id', 'stavesmo417078');
stavesmo417078.setBegBarType(1);
stavesmo417078.addClef('treble');
const keysmo417078 = new VF.KeySignature('G');
keysmo417078.addToStave(stavesmo417078);
stavesmo417078.setContext(context);
stavesmo417078.draw();
smo417078v0.draw(context, stavesmo417078);
smo417739.setContext(context);
smo417739.draw();
smo417740.setContext(context);
smo417740.draw();
smo417741.setContext(context);
smo417741.draw();
smo417742.setContext(context);
smo417742.draw();
const fmtsmo41710733 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo417107v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417107v0ar = [];
const smo417079 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417079.setAttribute('id', 'smo417079');
const smo417080 = new VF.ChordSymbol();
smo417080.setAttribute('id', 'smo417080');
smo417080.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo417080.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417080.setFont('Petaluma Script', 14).setReportWidth(false);
smo417079.addModifier(smo417080, 0);
smo417107v0ar.push(smo417079);
const smo417081 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417081.setAttribute('id', 'smo417081');
smo417107v0ar.push(smo417081);
const smo417082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo417082.setAttribute('id', 'smo417082');
smo417107v0ar.push(smo417082);
const smo417083 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo417083.setAttribute('id', 'smo417083');
smo417107v0ar.push(smo417083);
const smo417084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417084.setAttribute('id', 'smo417084');
const smo417085 = new VF.ChordSymbol();
smo417085.setAttribute('id', 'smo417085');
smo417085.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo417085.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417085.setFont('Petaluma Script', 14).setReportWidth(false);
smo417084.addModifier(smo417085, 0);
smo417107v0ar.push(smo417084);
const smo417086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo417086.setAttribute('id', 'smo417086');
const smo4170860acc = new VF.Accidental('b');
smo417086.addModifier(smo4170860acc, 0);
smo417107v0ar.push(smo417086);
const smo417087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/6/n"]}'))
smo417087.setAttribute('id', 'smo417087');
smo417107v0ar.push(smo417087);
const smo417088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417088.setAttribute('id', 'smo417088');
smo417107v0ar.push(smo417088);
const smo417089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo417089.setAttribute('id', 'smo417089');
const smo417090 = new VF.ChordSymbol();
smo417090.setAttribute('id', 'smo417090');
smo417090.setFont('Petaluma Script', 14).setReportWidth(false);
smo417089.addModifier(smo417090, 0);
smo417107v0ar.push(smo417089);
const smo417091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo417091.setAttribute('id', 'smo417091');
smo417107v0ar.push(smo417091);
const smo417092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo417092.setAttribute('id', 'smo417092');
const smo4170920acc = new VF.Accidental('b');
smo417092.addModifier(smo4170920acc, 0);
smo417107v0ar.push(smo417092);
const smo417093 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo417093.setAttribute('id', 'smo417093');
smo417107v0ar.push(smo417093);
smo417107v0.addTickables(smo417107v0ar)
fmtsmo41710733.joinVoices([smo417107v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417745 = smo417082.getStemDirection();
smo417082.setStemDirection(dirsmo417745);
smo417083.setStemDirection(dirsmo417745);
const smo417745 = new VF.Beam([smo417082,smo417083]);
const dirsmo417746 = smo417084.getStemDirection();
smo417084.setStemDirection(dirsmo417746);
smo417086.setStemDirection(dirsmo417746);
smo417087.setStemDirection(dirsmo417746);
smo417088.setStemDirection(dirsmo417746);
const smo417746 = new VF.Beam([smo417084,smo417086,smo417087,smo417088]);
const dirsmo417747 = smo417089.getStemDirection();
smo417089.setStemDirection(dirsmo417747);
smo417091.setStemDirection(dirsmo417747);
smo417092.setStemDirection(dirsmo417747);
smo417093.setStemDirection(dirsmo417747);
const smo417747 = new VF.Beam([smo417089,smo417091,smo417092,smo417093]);
 
// formatting measures in staff group smo417422
fmtsmo41710733.format([smo417107v0], 431);
const stavesmo417107 = new VF.Stave(718, 760.3846153846155, 445);
stavesmo417107.setAttribute('id', 'stavesmo417107');
stavesmo417107.setBegBarType(VF.Barline.type.NONE);
stavesmo417107.setContext(context);
stavesmo417107.draw();
smo417107v0.draw(context, stavesmo417107);
smo417745.setContext(context);
smo417745.draw();
smo417746.setContext(context);
smo417746.draw();
smo417747.setContext(context);
smo417747.draw();
const fmtsmo41713634 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo417136v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417136v0ar = [];
const smo417108 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo417108.setAttribute('id', 'smo417108');
const smo417109 = new VF.ChordSymbol();
smo417109.setAttribute('id', 'smo417109');
smo417109.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo417109.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417109.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417109.setFont('Petaluma Script', 14).setReportWidth(false);
smo417108.addModifier(smo417109, 0);
smo417136v0ar.push(smo417108);
const smo417110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo417110.setAttribute('id', 'smo417110');
smo417136v0ar.push(smo417110);
const smo417111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417111.setAttribute('id', 'smo417111');
smo417136v0ar.push(smo417111);
const smo417112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417112.setAttribute('id', 'smo417112');
const smo4171120acc = new VF.Accidental('b');
smo417112.addModifier(smo4171120acc, 0);
smo417136v0ar.push(smo417112);
const smo417113 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417113.setAttribute('id', 'smo417113');
smo417136v0ar.push(smo417113);
const smo417114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417114.setAttribute('id', 'smo417114');
smo417114.addModifier(new VF.Dot(), 0);
smo417136v0ar.push(smo417114);
const smo417115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417115.setAttribute('id', 'smo417115');
const smo417116 = new VF.ChordSymbol();
smo417116.setAttribute('id', 'smo417116');
smo417116.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo417116.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417116.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3}'));
smo417116.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3}'));
smo417116.setFont('Petaluma Script', 14).setReportWidth(false);
smo417115.addModifier(smo417116, 0);
smo417136v0ar.push(smo417115);
const smo417117 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo417117.setAttribute('id', 'smo417117');
const smo4171170acc = new VF.Accidental('b');
smo417117.addModifier(smo4171170acc, 0);
smo417136v0ar.push(smo417117);
const smo417118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo417118.setAttribute('id', 'smo417118');
const smo4171180acc = new VF.Accidental('b');
smo417118.addModifier(smo4171180acc, 0);
smo417136v0ar.push(smo417118);
const smo417119 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo417119.setAttribute('id', 'smo417119');
smo417136v0ar.push(smo417119);
const smo417120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["g#/4/n"]}'))
smo417120.setAttribute('id', 'smo417120');
const smo4171200acc = new VF.Accidental('#');
smo417120.addModifier(smo4171200acc, 0);
smo417136v0ar.push(smo417120);
const smo417121 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["f#/4/r"]}'))
smo417121.setAttribute('id', 'smo417121');
smo417136v0ar.push(smo417121);
smo417136v0.addTickables(smo417136v0ar)
fmtsmo41713634.joinVoices([smo417136v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417756 = smo417108.getStemDirection();
smo417108.setStemDirection(dirsmo417756);
smo417110.setStemDirection(dirsmo417756);
smo417111.setStemDirection(dirsmo417756);
smo417112.setStemDirection(dirsmo417756);
const smo417756 = new VF.Beam([smo417108,smo417110,smo417111,smo417112]);
const dirsmo417757 = smo417113.getStemDirection();
smo417113.setStemDirection(dirsmo417757);
smo417114.setStemDirection(dirsmo417757);
const smo417757 = new VF.Beam([smo417113,smo417114]);
const dirsmo417758 = smo417115.getStemDirection();
smo417115.setStemDirection(dirsmo417758);
smo417117.setStemDirection(dirsmo417758);
smo417118.setStemDirection(dirsmo417758);
const smo417758 = new VF.Beam([smo417115,smo417117,smo417118]);
const dirsmo417759 = smo417119.getStemDirection();
smo417119.setStemDirection(dirsmo417759);
smo417120.setStemDirection(dirsmo417759);
const smo417759 = new VF.Beam([smo417119,smo417120]);
const smo417122 = new VF.Tuplet([smo417110,smo417111,smo417112], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo417422
fmtsmo41713634.format([smo417136v0], 496);
const stavesmo417136 = new VF.Stave(46, 911.3846153846155, 579);
stavesmo417136.setAttribute('id', 'stavesmo417136');
stavesmo417136.setBegBarType(1);
stavesmo417136.addClef('treble');
const keysmo417136 = new VF.KeySignature('G');
keysmo417136.addToStave(stavesmo417136);
stavesmo417136.setContext(context);
stavesmo417136.draw();
smo417136v0.draw(context, stavesmo417136);
smo417756.setContext(context);
smo417756.draw();
smo417757.setContext(context);
smo417757.draw();
smo417758.setContext(context);
smo417758.draw();
smo417759.setContext(context);
smo417759.draw();
smo417122.setContext(context).draw();
const fmtsmo41716435 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo417164v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417164v0ar = [];
const smo417137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["fn/4/r"]}'))
smo417137.setAttribute('id', 'smo417137');
const smo417138 = new VF.ChordSymbol();
smo417138.setAttribute('id', 'smo417138');
smo417138.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo417138.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417138.setFont('Petaluma Script', 14).setReportWidth(false);
smo417137.addModifier(smo417138, 0);
smo417164v0ar.push(smo417137);
const smo417139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo417139.setAttribute('id', 'smo417139');
const smo4171390acc = new VF.Accidental('n');
smo417139.addModifier(smo4171390acc, 0);
smo417164v0ar.push(smo417139);
const smo417140 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo417140.setAttribute('id', 'smo417140');
const smo4171400acc = new VF.Accidental('b');
smo417140.addModifier(smo4171400acc, 0);
smo417164v0ar.push(smo417140);
const smo417141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo417141.setAttribute('id', 'smo417141');
const smo4171410acc = new VF.Accidental('b');
smo417141.addModifier(smo4171410acc, 0);
smo417164v0ar.push(smo417141);
const smo417142 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo417142.setAttribute('id', 'smo417142');
smo417164v0ar.push(smo417142);
const smo417143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417143.setAttribute('id', 'smo417143');
smo417164v0ar.push(smo417143);
const smo417144 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417144.setAttribute('id', 'smo417144');
smo417164v0ar.push(smo417144);
const smo417145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo417145.setAttribute('id', 'smo417145');
const smo4171450acc = new VF.Accidental('b');
smo4171450acc.setAsCautionary();
smo417145.addModifier(smo4171450acc, 0);
const smo417146 = new VF.ChordSymbol();
smo417146.setAttribute('id', 'smo417146');
smo417146.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1}'));
smo417146.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417146.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417146.setFont('Petaluma Script', 14).setReportWidth(false);
smo417145.addModifier(smo417146, 0);
smo417164v0ar.push(smo417145);
const smo417147 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cb/5/n"]}'))
smo417147.setAttribute('id', 'smo417147');
const smo4171470acc = new VF.Accidental('b');
smo417147.addModifier(smo4171470acc, 0);
smo417164v0ar.push(smo417147);
const smo417148 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417148.setAttribute('id', 'smo417148');
const smo4171480acc = new VF.Accidental('b');
smo417148.addModifier(smo4171480acc, 0);
smo417164v0ar.push(smo417148);
const smo417149 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["ab/4/n"]}'))
smo417149.setAttribute('id', 'smo417149');
const smo4171490acc = new VF.Accidental('b');
smo417149.addModifier(smo4171490acc, 0);
smo417164v0ar.push(smo417149);
const smo417150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo417150.setAttribute('id', 'smo417150');
const smo4171500acc = new VF.Accidental('b');
smo417150.addModifier(smo4171500acc, 0);
smo417164v0ar.push(smo417150);
smo417164v0.addTickables(smo417164v0ar)
fmtsmo41716435.joinVoices([smo417164v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417762 = smo417139.getStemDirection();
smo417139.setStemDirection(dirsmo417762);
smo417140.setStemDirection(dirsmo417762);
const smo417762 = new VF.Beam([smo417139,smo417140]);
const dirsmo417763 = smo417141.getStemDirection();
smo417141.setStemDirection(dirsmo417763);
smo417142.setStemDirection(dirsmo417763);
smo417143.setStemDirection(dirsmo417763);
smo417144.setStemDirection(dirsmo417763);
const smo417763 = new VF.Beam([smo417141,smo417142,smo417143,smo417144]);
const dirsmo417764 = smo417145.getStemDirection();
smo417145.setStemDirection(dirsmo417764);
smo417147.setStemDirection(dirsmo417764);
smo417148.setStemDirection(dirsmo417764);
const smo417764 = new VF.Beam([smo417145,smo417147,smo417148]);
const dirsmo417765 = smo417149.getStemDirection();
smo417149.setStemDirection(dirsmo417765);
smo417150.setStemDirection(dirsmo417765);
const smo417765 = new VF.Beam([smo417149,smo417150]);
 
// formatting measures in staff group smo417422
fmtsmo41716435.format([smo417164v0], 524);
const stavesmo417164 = new VF.Stave(625, 911.3846153846155, 538);
stavesmo417164.setAttribute('id', 'stavesmo417164');
stavesmo417164.setBegBarType(VF.Barline.type.NONE);
stavesmo417164.setContext(context);
stavesmo417164.draw();
smo417164v0.draw(context, stavesmo417164);
smo417762.setContext(context);
smo417762.draw();
smo417763.setContext(context);
smo417763.draw();
smo417764.setContext(context);
smo417764.draw();
smo417765.setContext(context);
smo417765.draw();
const fmtsmo41719636 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo417196v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417196v0ar = [];
const smo417165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417165.setAttribute('id', 'smo417165');
const smo417166 = new VF.ChordSymbol();
smo417166.setAttribute('id', 'smo417166');
smo417166.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo417166.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417166.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417166.setFont('Petaluma Script', 14).setReportWidth(false);
smo417165.addModifier(smo417166, 0);
smo417196v0ar.push(smo417165);
const smo417167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo417167.setAttribute('id', 'smo417167');
const smo417168 = new VF.Ornament('scoop');
smo417167.addModifier(smo417168, 0);
smo417196v0ar.push(smo417167);
const smo417169 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417169.setAttribute('id', 'smo417169');
const smo4171690acc = new VF.Accidental('b');
smo417169.addModifier(smo4171690acc, 0);
smo417196v0ar.push(smo417169);
const smo417170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417170.setAttribute('id', 'smo417170');
smo417196v0ar.push(smo417170);
const smo417171 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417171.setAttribute('id', 'smo417171');
smo417196v0ar.push(smo417171);
const smo417172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417172.setAttribute('id', 'smo417172');
smo417196v0ar.push(smo417172);
const smo417173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417173.setAttribute('id', 'smo417173');
smo417196v0ar.push(smo417173);
const smo417174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["ab/4/r"]}'))
smo417174.setAttribute('id', 'smo417174');
smo417196v0ar.push(smo417174);
const smo417175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo417175.setAttribute('id', 'smo417175');
const smo417177 = new VF.Ornament('scoop');
smo417175.addModifier(smo417177, 0);
const smo417176 = new VF.ChordSymbol();
smo417176.setAttribute('id', 'smo417176');
smo417176.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo417176.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3}'));
smo417176.setFont('Petaluma Script', 14).setReportWidth(false);
smo417175.addModifier(smo417176, 0);
smo417196v0ar.push(smo417175);
const smo417178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417178.setAttribute('id', 'smo417178');
smo417196v0ar.push(smo417178);
const smo417179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417179.setAttribute('id', 'smo417179');
smo417196v0ar.push(smo417179);
const smo417180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417180.setAttribute('id', 'smo417180');
smo417196v0ar.push(smo417180);
const smo417181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo417181.setAttribute('id', 'smo417181');
const smo4171810acc = new VF.Accidental('n');
smo417181.addModifier(smo4171810acc, 0);
smo417196v0ar.push(smo417181);
smo417196v0.addTickables(smo417196v0ar)
fmtsmo41719636.joinVoices([smo417196v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417774 = smo417167.getStemDirection();
smo417167.setStemDirection(dirsmo417774);
smo417169.setStemDirection(dirsmo417774);
const smo417774 = new VF.Beam([smo417167,smo417169]);
const dirsmo417775 = smo417170.getStemDirection();
smo417170.setStemDirection(dirsmo417775);
smo417171.setStemDirection(dirsmo417775);
smo417172.setStemDirection(dirsmo417775);
smo417173.setStemDirection(dirsmo417775);
const smo417775 = new VF.Beam([smo417170,smo417171,smo417172,smo417173]);
const dirsmo417776 = smo417175.getStemDirection();
smo417175.setStemDirection(dirsmo417776);
smo417178.setStemDirection(dirsmo417776);
const smo417776 = new VF.Beam([smo417175,smo417178]);
const dirsmo417777 = smo417179.getStemDirection();
smo417179.setStemDirection(dirsmo417777);
smo417180.setStemDirection(dirsmo417777);
smo417181.setStemDirection(dirsmo417777);
const smo417777 = new VF.Beam([smo417179,smo417180,smo417181]);
const smo417182 = new VF.Tuplet([smo417170,smo417171,smo417172], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo417422
fmtsmo41719636.format([smo417196v0], 405);
const stavesmo417196 = new VF.Stave(46, 1082.3846153846155, 488);
stavesmo417196.setAttribute('id', 'stavesmo417196');
stavesmo417196.setBegBarType(1);
stavesmo417196.addClef('treble');
const keysmo417196 = new VF.KeySignature('G');
keysmo417196.addToStave(stavesmo417196);
stavesmo417196.setContext(context);
stavesmo417196.draw();
smo417196v0.draw(context, stavesmo417196);
smo417774.setContext(context);
smo417774.draw();
smo417775.setContext(context);
smo417775.draw();
smo417776.setContext(context);
smo417776.draw();
smo417777.setContext(context);
smo417777.draw();
smo417182.setContext(context).draw();
const fmtsmo41723837 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo417238v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417238v0ar = [];
const smo417197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","autoStem":true,"keys":["bb/4/r"]}'))
smo417197.setAttribute('id', 'smo417197');
const smo417198 = new VF.ChordSymbol();
smo417198.setAttribute('id', 'smo417198');
smo417198.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo417198.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417198.setFont('Petaluma Script', 14).setReportWidth(false);
smo417197.addModifier(smo417198, 0);
smo417238v0ar.push(smo417197);
const smo417199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo417199.setAttribute('id', 'smo417199');
const smo4171990acc = new VF.Accidental('b');
smo417199.addModifier(smo4171990acc, 0);
smo417238v0ar.push(smo417199);
const smo417200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/4/n"]}'))
smo417200.setAttribute('id', 'smo417200');
const smo4172000acc = new VF.Accidental('b');
smo417200.addModifier(smo4172000acc, 0);
smo417238v0ar.push(smo417200);
const smo417201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/4/n"]}'))
smo417201.setAttribute('id', 'smo417201');
const smo4172010acc = new VF.Accidental('b');
smo417201.addModifier(smo4172010acc, 0);
smo417238v0ar.push(smo417201);
const smo417202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["fn/4/n"]}'))
smo417202.setAttribute('id', 'smo417202');
const smo4172020acc = new VF.Accidental('n');
smo417202.addModifier(smo4172020acc, 0);
smo417238v0ar.push(smo417202);
const smo417203 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417203.setAttribute('id', 'smo417203');
const smo4172030acc = new VF.Accidental('b');
smo417203.addModifier(smo4172030acc, 0);
smo417238v0ar.push(smo417203);
const smo417204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417204.setAttribute('id', 'smo417204');
smo417238v0ar.push(smo417204);
const smo417205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bb/4/r"]}'))
smo417205.setAttribute('id', 'smo417205');
smo417238v0ar.push(smo417205);
const smo417206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417206.setAttribute('id', 'smo417206');
smo417238v0ar.push(smo417206);
const smo417207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["an/4/r"]}'))
smo417207.setAttribute('id', 'smo417207');
smo417238v0ar.push(smo417207);
const smo417208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417208.setAttribute('id', 'smo417208');
smo417238v0ar.push(smo417208);
const smo417209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo417209.setAttribute('id', 'smo417209');
const smo4172090acc = new VF.Accidental('#');
smo417209.addModifier(smo4172090acc, 0);
const smo417210 = new VF.ChordSymbol();
smo417210.setAttribute('id', 'smo417210');
smo417210.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo417210.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417210.setFont('Petaluma Script', 14).setReportWidth(false);
smo417209.addModifier(smo417210, 0);
smo417238v0ar.push(smo417209);
const smo417211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/4/n"]}'))
smo417211.setAttribute('id', 'smo417211');
smo417238v0ar.push(smo417211);
const smo417212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417212.setAttribute('id', 'smo417212');
smo417238v0ar.push(smo417212);
const smo417213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417213.setAttribute('id', 'smo417213');
smo417238v0ar.push(smo417213);
const smo417214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["eb/5/n"]}'))
smo417214.setAttribute('id', 'smo417214');
const smo4172140acc = new VF.Accidental('b');
smo4172140acc.setAsCautionary();
smo417214.addModifier(smo4172140acc, 0);
smo417238v0ar.push(smo417214);
const smo417215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo417215.setAttribute('id', 'smo417215');
const smo4172150acc = new VF.Accidental('n');
smo417215.addModifier(smo4172150acc, 0);
smo417238v0ar.push(smo417215);
const smo417216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo417216.setAttribute('id', 'smo417216');
smo417238v0ar.push(smo417216);
const smo417217 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417217.setAttribute('id', 'smo417217');
smo417238v0ar.push(smo417217);
smo417238v0.addTickables(smo417238v0ar)
fmtsmo41723837.joinVoices([smo417238v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417780 = smo417200.getStemDirection();
smo417200.setStemDirection(dirsmo417780);
smo417201.setStemDirection(dirsmo417780);
smo417202.setStemDirection(dirsmo417780);
const smo417780 = new VF.Beam([smo417200,smo417201,smo417202]);
const dirsmo417781 = smo417203.getStemDirection();
smo417203.setStemDirection(dirsmo417781);
smo417204.setStemDirection(dirsmo417781);
smo417206.setStemDirection(dirsmo417781);
smo417208.setStemDirection(dirsmo417781);
const smo417781 = new VF.Beam([smo417203,smo417204,smo417206,smo417208]);
const dirsmo417782 = smo417209.getStemDirection();
smo417209.setStemDirection(dirsmo417782);
smo417211.setStemDirection(dirsmo417782);
smo417212.setStemDirection(dirsmo417782);
smo417213.setStemDirection(dirsmo417782);
const smo417782 = new VF.Beam([smo417209,smo417211,smo417212,smo417213]);
const dirsmo417783 = smo417214.getStemDirection();
smo417214.setStemDirection(dirsmo417783);
smo417215.setStemDirection(dirsmo417783);
smo417216.setStemDirection(dirsmo417783);
smo417217.setStemDirection(dirsmo417783);
const smo417783 = new VF.Beam([smo417214,smo417215,smo417216,smo417217]);
const smo417218 = new VF.Tuplet([smo417197,smo417199], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo417219 = new VF.Tuplet([smo417200,smo417201,smo417202], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo417220 = new VF.Tuplet([smo417203,smo417204,smo417205], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo417221 = new VF.Tuplet([smo417206,smo417207,smo417208], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo417222 = new VF.Tuplet([smo417211,smo417212,smo417213], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo417223 = new VF.Tuplet([smo417214,smo417215], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo417224 = new VF.Tuplet([smo417216,smo417217], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo417422
fmtsmo41723837.format([smo417238v0], 614);
const stavesmo417238 = new VF.Stave(534, 1082.3846153846155, 628);
stavesmo417238.setAttribute('id', 'stavesmo417238');
stavesmo417238.setBegBarType(VF.Barline.type.NONE);
stavesmo417238.setContext(context);
stavesmo417238.draw();
smo417238v0.draw(context, stavesmo417238);
smo417780.setContext(context);
smo417780.draw();
smo417781.setContext(context);
smo417781.draw();
smo417782.setContext(context);
smo417782.draw();
smo417783.setContext(context);
smo417783.draw();
smo417218.setContext(context).draw();
smo417219.setContext(context).draw();
smo417220.setContext(context).draw();
smo417221.setContext(context).draw();
smo417222.setContext(context).draw();
smo417223.setContext(context).draw();
smo417224.setContext(context).draw();
const fmtsmo41726738 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo417267v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417267v0ar = [];
const smo417239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
const smo417241 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo417241.setAttribute('id', 'smo417241');
const acc0smo417241 = new VF.Accidental('#');
smo417241.addModifier(acc0smo417241, 0)
const ggrpsmo417239 = new VF.GraceNoteGroup([smo417241]);
ggrpsmo417239.beamNotes();
smo417239.addModifier(ggrpsmo417239, 0);
smo417239.setAttribute('id', 'smo417239');
const smo417240 = new VF.ChordSymbol();
smo417240.setAttribute('id', 'smo417240');
smo417240.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo417240.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417240.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417240.setFont('Petaluma Script', 14).setReportWidth(false);
smo417239.addModifier(smo417240, 0);
smo417267v0ar.push(smo417239);
const smo417242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo417242.setAttribute('id', 'smo417242');
smo417267v0ar.push(smo417242);
const smo417243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417243.setAttribute('id', 'smo417243');
const smo4172430acc = new VF.Accidental('b');
smo417243.addModifier(smo4172430acc, 0);
smo417267v0ar.push(smo417243);
const smo417244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417244.setAttribute('id', 'smo417244');
smo417267v0ar.push(smo417244);
const smo417245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417245.setAttribute('id', 'smo417245');
smo417267v0ar.push(smo417245);
const smo417246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
const smo417247 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo417247.setAttribute('id', 'smo417247');
const acc0smo417247 = new VF.Accidental('#');
smo417247.addModifier(acc0smo417247, 0)
const ggrpsmo417246 = new VF.GraceNoteGroup([smo417247]);
ggrpsmo417246.beamNotes();
smo417246.addModifier(ggrpsmo417246, 0);
smo417246.setAttribute('id', 'smo417246');
smo417267v0ar.push(smo417246);
const smo417248 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417248.setAttribute('id', 'smo417248');
const smo417249 = new VF.ChordSymbol();
smo417249.setAttribute('id', 'smo417249');
smo417249.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo417249.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417249.setFont('Petaluma Script', 14).setReportWidth(false);
smo417248.addModifier(smo417249, 0);
smo417267v0ar.push(smo417248);
const smo417250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo417250.setAttribute('id', 'smo417250');
const smo4172500acc = new VF.Accidental('b');
smo417250.addModifier(smo4172500acc, 0);
smo417267v0ar.push(smo417250);
const smo417251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo417251.setAttribute('id', 'smo417251');
smo417267v0ar.push(smo417251);
const smo417252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo417252.setAttribute('id', 'smo417252');
smo417267v0ar.push(smo417252);
const smo417253 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417253.setAttribute('id', 'smo417253');
smo417267v0ar.push(smo417253);
smo417267v0.addTickables(smo417267v0ar)
fmtsmo41726738.joinVoices([smo417267v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417792 = smo417239.getStemDirection();
smo417239.setStemDirection(dirsmo417792);
smo417242.setStemDirection(dirsmo417792);
smo417243.setStemDirection(dirsmo417792);
const smo417792 = new VF.Beam([smo417239,smo417242,smo417243]);
const dirsmo417793 = smo417244.getStemDirection();
smo417244.setStemDirection(dirsmo417793);
smo417245.setStemDirection(dirsmo417793);
smo417246.setStemDirection(dirsmo417793);
const smo417793 = new VF.Beam([smo417244,smo417245,smo417246]);
const dirsmo417794 = smo417248.getStemDirection();
smo417248.setStemDirection(dirsmo417794);
smo417250.setStemDirection(dirsmo417794);
smo417251.setStemDirection(dirsmo417794);
const smo417794 = new VF.Beam([smo417248,smo417250,smo417251]);
const dirsmo417795 = smo417252.getStemDirection();
smo417252.setStemDirection(dirsmo417795);
smo417253.setStemDirection(dirsmo417795);
const smo417795 = new VF.Beam([smo417252,smo417253]);
 
// formatting measures in staff group smo417422
fmtsmo41726738.format([smo417267v0], 349);
const stavesmo417267 = new VF.Stave(46, 1233.3846153846155, 432);
stavesmo417267.setAttribute('id', 'stavesmo417267');
stavesmo417267.setBegBarType(1);
stavesmo417267.addClef('treble');
const keysmo417267 = new VF.KeySignature('G');
keysmo417267.addToStave(stavesmo417267);
stavesmo417267.setContext(context);
stavesmo417267.draw();
smo417267v0.draw(context, stavesmo417267);
smo417792.setContext(context);
smo417792.draw();
smo417793.setContext(context);
smo417793.draw();
smo417794.setContext(context);
smo417794.draw();
smo417795.setContext(context);
smo417795.draw();
const fmtsmo41729039 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo417290v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417290v0ar = [];
const smo417268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417268.setAttribute('id', 'smo417268');
const smo417269 = new VF.ChordSymbol();
smo417269.setAttribute('id', 'smo417269');
smo417269.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1}'));
smo417269.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417269.setFont('Petaluma Script', 14).setReportWidth(false);
smo417268.addModifier(smo417269, 0);
smo417290v0ar.push(smo417268);
const smo417270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo417270.setAttribute('id', 'smo417270');
smo417290v0ar.push(smo417270);
const smo417271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo417271.setAttribute('id', 'smo417271');
const smo417272 = new VF.ChordSymbol();
smo417272.setAttribute('id', 'smo417272');
smo417272.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1}'));
smo417272.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417272.setFont('Petaluma Script', 14).setReportWidth(false);
smo417271.addModifier(smo417272, 0);
smo417290v0ar.push(smo417271);
const smo417273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo417273.setAttribute('id', 'smo417273');
smo417290v0ar.push(smo417273);
const smo417274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo417274.setAttribute('id', 'smo417274');
smo417290v0ar.push(smo417274);
const smo417275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["fn/5/n"]}'))
smo417275.setAttribute('id', 'smo417275');
const smo4172750acc = new VF.Accidental('n');
smo417275.addModifier(smo4172750acc, 0);
smo417290v0ar.push(smo417275);
const smo417276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417276.setAttribute('id', 'smo417276');
const smo4172760acc = new VF.Accidental('b');
smo417276.addModifier(smo4172760acc, 0);
smo417290v0ar.push(smo417276);
smo417290v0.addTickables(smo417290v0ar)
fmtsmo41729039.joinVoices([smo417290v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417798 = smo417271.getStemDirection();
smo417271.setStemDirection(dirsmo417798);
smo417273.setStemDirection(dirsmo417798);
smo417274.setStemDirection(dirsmo417798);
const smo417798 = new VF.Beam([smo417271,smo417273,smo417274]);
const dirsmo417799 = smo417275.getStemDirection();
smo417275.setStemDirection(dirsmo417799);
smo417276.setStemDirection(dirsmo417799);
const smo417799 = new VF.Beam([smo417275,smo417276]);
 
// formatting measures in staff group smo417422
fmtsmo41729039.format([smo417290v0], 240);
const stavesmo417290 = new VF.Stave(478, 1233.3846153846155, 254);
stavesmo417290.setAttribute('id', 'stavesmo417290');
stavesmo417290.setBegBarType(VF.Barline.type.NONE);
stavesmo417290.setContext(context);
stavesmo417290.draw();
smo417290v0.draw(context, stavesmo417290);
smo417798.setContext(context);
smo417798.draw();
smo417799.setContext(context);
smo417799.draw();
const fmtsmo41732040 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo417320v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417320v0ar = [];
const smo417291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417291.setAttribute('id', 'smo417291');
const smo417292 = new VF.ChordSymbol();
smo417292.setAttribute('id', 'smo417292');
smo417292.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1}'));
smo417292.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417292.setFont('Petaluma Script', 14).setReportWidth(false);
smo417291.addModifier(smo417292, 0);
smo417320v0ar.push(smo417291);
const smo417293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo417293.setAttribute('id', 'smo417293');
smo417320v0ar.push(smo417293);
const smo417294 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["db/5/n"]}'))
smo417294.setAttribute('id', 'smo417294');
const smo4172940acc = new VF.Accidental('b');
smo417294.addModifier(smo4172940acc, 0);
smo417320v0ar.push(smo417294);
const smo417295 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo417295.setAttribute('id', 'smo417295');
const smo4172950acc = new VF.Accidental('n');
smo417295.addModifier(smo4172950acc, 0);
smo417320v0ar.push(smo417295);
const smo417296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/5/n"]}'))
smo417296.setAttribute('id', 'smo417296');
smo417320v0ar.push(smo417296);
const smo417297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gb/5/n"]}'))
smo417297.setAttribute('id', 'smo417297');
const smo4172970acc = new VF.Accidental('b');
smo417297.addModifier(smo4172970acc, 0);
const smo417298 = new VF.ChordSymbol();
smo417298.setAttribute('id', 'smo417298');
smo417298.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1}'));
smo417298.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417298.setFont('Petaluma Script', 14).setReportWidth(false);
smo417297.addModifier(smo417298, 0);
smo417320v0ar.push(smo417297);
const smo417299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["ab/5/n"]}'))
smo417299.setAttribute('id', 'smo417299');
const smo4172990acc = new VF.Accidental('b');
smo417299.addModifier(smo4172990acc, 0);
smo417320v0ar.push(smo417299);
const smo417300 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417300.setAttribute('id', 'smo417300');
const smo4173000acc = new VF.Accidental('n');
smo417300.addModifier(smo4173000acc, 0);
smo417320v0ar.push(smo417300);
const smo417301 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","autoStem":true,"keys":["bb/5/n"]}'))
smo417301.setAttribute('id', 'smo417301');
const smo4173010acc = new VF.Accidental('b');
smo417301.addModifier(smo4173010acc, 0);
smo417320v0ar.push(smo417301);
const smo417302 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417302.setAttribute('id', 'smo417302');
smo417320v0ar.push(smo417302);
const smo417303 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417303.setAttribute('id', 'smo417303');
smo417320v0ar.push(smo417303);
const smo417304 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["f#/5/n"]}'))
smo417304.setAttribute('id', 'smo417304');
smo417320v0ar.push(smo417304);
const smo417305 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo417305.setAttribute('id', 'smo417305');
const smo4173050acc = new VF.Accidental('n');
smo417305.addModifier(smo4173050acc, 0);
smo417320v0ar.push(smo417305);
const smo417306 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/5/n"]}'))
smo417306.setAttribute('id', 'smo417306');
smo417320v0ar.push(smo417306);
smo417320v0.addTickables(smo417320v0ar)
fmtsmo41732040.joinVoices([smo417320v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417802 = smo417293.getStemDirection();
smo417293.setStemDirection(dirsmo417802);
smo417294.setStemDirection(dirsmo417802);
smo417295.setStemDirection(dirsmo417802);
smo417296.setStemDirection(dirsmo417802);
const smo417802 = new VF.Beam([smo417293,smo417294,smo417295,smo417296]);
const dirsmo417803 = smo417297.getStemDirection();
smo417297.setStemDirection(dirsmo417803);
smo417299.setStemDirection(dirsmo417803);
smo417300.setStemDirection(dirsmo417803);
smo417301.setStemDirection(dirsmo417803);
smo417302.setStemDirection(dirsmo417803);
const smo417803 = new VF.Beam([smo417297,smo417299,smo417300,smo417301,smo417302]);
const dirsmo417804 = smo417303.getStemDirection();
smo417303.setStemDirection(dirsmo417804);
smo417304.setStemDirection(dirsmo417804);
smo417305.setStemDirection(dirsmo417804);
smo417306.setStemDirection(dirsmo417804);
const smo417804 = new VF.Beam([smo417303,smo417304,smo417305,smo417306]);
 
// formatting measures in staff group smo417422
fmtsmo41732040.format([smo417320v0], 417);
const stavesmo417320 = new VF.Stave(732, 1233.3846153846155, 431);
stavesmo417320.setAttribute('id', 'stavesmo417320');
stavesmo417320.setBegBarType(VF.Barline.type.NONE);
stavesmo417320.setContext(context);
stavesmo417320.draw();
smo417320v0.draw(context, stavesmo417320);
smo417802.setContext(context);
smo417802.draw();
smo417803.setContext(context);
smo417803.draw();
smo417804.setContext(context);
smo417804.draw();
const fmtsmo41735041 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo417350v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417350v0ar = [];
const smo417321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/5/n"]}'))
smo417321.setAttribute('id', 'smo417321');
const smo417322 = new VF.ChordSymbol();
smo417322.setAttribute('id', 'smo417322');
smo417322.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo417322.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417322.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417322.setFont('Petaluma Script', 14).setReportWidth(false);
smo417321.addModifier(smo417322, 0);
smo417350v0ar.push(smo417321);
const smo417323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/5/n"]}'))
smo417323.setAttribute('id', 'smo417323');
smo417350v0ar.push(smo417323);
const smo417324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417324.setAttribute('id', 'smo417324');
smo417350v0ar.push(smo417324);
const smo417325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417325.setAttribute('id', 'smo417325');
const smo4173250acc = new VF.Accidental('b');
smo417325.addModifier(smo4173250acc, 0);
smo417350v0ar.push(smo417325);
const smo417326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417326.setAttribute('id', 'smo417326');
smo417350v0ar.push(smo417326);
const smo417327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/4/n"]}'))
smo417327.setAttribute('id', 'smo417327');
smo417350v0ar.push(smo417327);
const smo417328 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417328.setAttribute('id', 'smo417328');
smo417350v0ar.push(smo417328);
const smo417329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417329.setAttribute('id', 'smo417329');
smo417350v0ar.push(smo417329);
const smo417330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417330.setAttribute('id', 'smo417330');
smo417350v0ar.push(smo417330);
const smo417331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/5/n"]}'))
smo417331.setAttribute('id', 'smo417331');
const smo417333 = new VF.Ornament('scoop');
smo417331.addModifier(smo417333, 0);
const smo417332 = new VF.ChordSymbol();
smo417332.setAttribute('id', 'smo417332');
smo417332.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo417332.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417332.setFont('Petaluma Script', 14).setReportWidth(false);
smo417331.addModifier(smo417332, 0);
smo417350v0ar.push(smo417331);
const smo417334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417334.setAttribute('id', 'smo417334');
smo417350v0ar.push(smo417334);
const smo417335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo417335.setAttribute('id', 'smo417335');
smo417350v0ar.push(smo417335);
smo417350v0.addTickables(smo417350v0ar)
fmtsmo41735041.joinVoices([smo417350v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417812 = smo417321.getStemDirection();
smo417321.setStemDirection(dirsmo417812);
smo417323.setStemDirection(dirsmo417812);
smo417324.setStemDirection(dirsmo417812);
smo417325.setStemDirection(dirsmo417812);
const smo417812 = new VF.Beam([smo417321,smo417323,smo417324,smo417325]);
const dirsmo417813 = smo417326.getStemDirection();
smo417326.setStemDirection(dirsmo417813);
smo417327.setStemDirection(dirsmo417813);
smo417328.setStemDirection(dirsmo417813);
smo417329.setStemDirection(dirsmo417813);
smo417330.setStemDirection(dirsmo417813);
const smo417813 = new VF.Beam([smo417326,smo417327,smo417328,smo417329,smo417330]);
const dirsmo417814 = smo417331.getStemDirection();
smo417331.setStemDirection(dirsmo417814);
smo417334.setStemDirection(dirsmo417814);
const smo417814 = new VF.Beam([smo417331,smo417334]);
const smo417336 = new VF.Tuplet([smo417326,smo417327,smo417328], JSON.parse('{"numNotes":3,"notesOccupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo417422
fmtsmo41735041.format([smo417350v0], 294);
const stavesmo417350 = new VF.Stave(46, 1379.3846153846155, 377);
stavesmo417350.setAttribute('id', 'stavesmo417350');
stavesmo417350.setBegBarType(1);
stavesmo417350.addClef('treble');
const keysmo417350 = new VF.KeySignature('G');
keysmo417350.addToStave(stavesmo417350);
stavesmo417350.setContext(context);
stavesmo417350.draw();
smo417350v0.draw(context, stavesmo417350);
smo417812.setContext(context);
smo417812.draw();
smo417813.setContext(context);
smo417813.draw();
smo417814.setContext(context);
smo417814.draw();
smo417336.setContext(context).draw();
const fmtsmo41738042 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo417380v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417380v0ar = [];
const smo417351 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417351.setAttribute('id', 'smo417351');
smo417380v0ar.push(smo417351);
const smo417352 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["dn/4/n"]}'))
smo417352.setAttribute('id', 'smo417352');
const smo417353 = new VF.ChordSymbol();
smo417353.setAttribute('id', 'smo417353');
smo417353.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1}'));
smo417353.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3}'));
smo417353.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417353.setFont('Petaluma Script', 14).setReportWidth(false);
smo417352.addModifier(smo417353, 0);
smo417380v0ar.push(smo417352);
const smo417354 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417354.setAttribute('id', 'smo417354');
smo417380v0ar.push(smo417354);
const smo417355 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["bb/3/n"]}'))
smo417355.setAttribute('id', 'smo417355');
const smo4173550acc = new VF.Accidental('b');
smo417355.addModifier(smo4173550acc, 0);
smo417380v0ar.push(smo417355);
const smo417356 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo417356.setAttribute('id', 'smo417356');
smo417380v0ar.push(smo417356);
const smo417357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo417357.setAttribute('id', 'smo417357');
smo417380v0ar.push(smo417357);
const smo417358 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["an/3/n"]}'))
smo417358.setAttribute('id', 'smo417358');
smo417380v0ar.push(smo417358);
const smo417359 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/3/n"]}'))
smo417359.setAttribute('id', 'smo417359');
smo417380v0ar.push(smo417359);
const smo417360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["cn/4/n"]}'))
smo417360.setAttribute('id', 'smo417360');
const smo417361 = new VF.ChordSymbol();
smo417361.setAttribute('id', 'smo417361');
smo417361.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1}'));
smo417361.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3}'));
smo417361.setFont('Petaluma Script', 14).setReportWidth(false);
smo417360.addModifier(smo417361, 0);
smo417380v0ar.push(smo417360);
const smo417362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo417362.setAttribute('id', 'smo417362');
smo417380v0ar.push(smo417362);
const smo417363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417363.setAttribute('id', 'smo417363');
smo417380v0ar.push(smo417363);
const smo417364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","autoStem":true,"keys":["en/4/r"]}'))
smo417364.setAttribute('id', 'smo417364');
smo417380v0ar.push(smo417364);
const smo417365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","autoStem":true,"keys":["an/4/n"]}'))
smo417365.setAttribute('id', 'smo417365');
smo417380v0ar.push(smo417365);
const smo417366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","autoStem":true,"keys":["en/4/n"]}'))
smo417366.setAttribute('id', 'smo417366');
smo417380v0ar.push(smo417366);
smo417380v0.addTickables(smo417380v0ar)
fmtsmo41738042.joinVoices([smo417380v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
const dirsmo417817 = smo417356.getStemDirection();
smo417356.setStemDirection(dirsmo417817);
smo417357.setStemDirection(dirsmo417817);
smo417358.setStemDirection(dirsmo417817);
smo417359.setStemDirection(dirsmo417817);
const smo417817 = new VF.Beam([smo417356,smo417357,smo417358,smo417359]);
const dirsmo417818 = smo417360.getStemDirection();
smo417360.setStemDirection(dirsmo417818);
smo417362.setStemDirection(dirsmo417818);
smo417363.setStemDirection(dirsmo417818);
const smo417818 = new VF.Beam([smo417360,smo417362,smo417363]);
 
// formatting measures in staff group smo417422
fmtsmo41738042.format([smo417380v0], 310);
const stavesmo417380 = new VF.Stave(423, 1379.3846153846155, 325);
stavesmo417380.setAttribute('id', 'stavesmo417380');
stavesmo417380.setBegBarType(VF.Barline.type.NONE);
stavesmo417380.setEndBarType(2);
stavesmo417380.setContext(context);
stavesmo417380.draw();
smo417380v0.draw(context, stavesmo417380);
smo417817.setContext(context);
smo417817.draw();
smo417818.setContext(context);
smo417818.draw();
const fmtsmo41739843 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo417398v0 = new VF.Voice(JSON.parse('{"numBeats":4,"beatValue":4}')).setMode(VF.Voice.Mode.SOFT);
const smo417398v0ar = [];
const smo417381 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","autoStem":true,"keys":["gn/4/n"]}'))
smo417381.setAttribute('id', 'smo417381');
smo417398v0ar.push(smo417381);
const smo417382 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417382.setAttribute('id', 'smo417382');
smo417398v0ar.push(smo417382);
const smo417383 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417383.setAttribute('id', 'smo417383');
smo417398v0ar.push(smo417383);
const smo417384 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","autoStem":true,"keys":["bn/4/r"]}'))
smo417384.setAttribute('id', 'smo417384');
smo417398v0ar.push(smo417384);
smo417398v0.addTickables(smo417398v0ar)
fmtsmo41739843.joinVoices([smo417398v0]);
// create beam groups and tuplets for format grp smo417422 before formatting
 
// formatting measures in staff group smo417422
fmtsmo41739843.format([smo417398v0], 194);
const stavesmo417398 = new VF.Stave(748, 1379.3846153846155, 208);
stavesmo417398.setAttribute('id', 'stavesmo417398');
stavesmo417398.setBegBarType(VF.Barline.type.NONE);
stavesmo417398.setContext(context);
stavesmo417398.draw();
smo417398v0.draw(context, stavesmo417398);
// modifier from 0-36-0-11 to 0-36-0-12
const smo417960 = new VF.Curve(smo417180, smo417181, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"position_end":2}'));
smo417960.setContext(context).draw();
// modifier from 0-36-0-9 to 0-36-0-10
const smo417961 = new VF.StaveTie({ first_note: smo417178, last_note: smo417179, 
          firstNote: smo417178, lastNote: smo417179, first_indices: [0], last_indices: [0]});
smo417961.setContext(context).draw();
// modifier from 0-25-0-8 to 0-25-0-9
const smo417962 = new VF.StaveTie({ first_note: smo416843, last_note: smo416846, 
          firstNote: smo416843, lastNote: smo416846, first_indices: [0], last_indices: [0]});
smo417962.setContext(context).draw();
// modifier from 0-25-0-12 to 0-25-0-13
const smo417963 = new VF.StaveTie({ first_note: smo416849, last_note: smo416850, 
          firstNote: smo416849, lastNote: smo416850, first_indices: [0], last_indices: [0]});
smo417963.setContext(context).draw();
// modifier from 0-26-0-10 to 0-26-0-11
const smo417964 = new VF.StaveTie({ first_note: smo416881, last_note: smo416882, 
          firstNote: smo416881, lastNote: smo416882, first_indices: [0], last_indices: [0]});
smo417964.setContext(context).draw();
// modifier from 0-29-0-1 to 0-29-0-2
const smo417965 = new VF.StaveTie({ first_note: smo416967, last_note: smo416968, 
          firstNote: smo416967, lastNote: smo416968, first_indices: [0], last_indices: [0]});
smo417965.setContext(context).draw();
}
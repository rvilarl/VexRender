function main() {
// create the div and svg element for the music
const div = document.getElementById('smoo');
const VF = Vex.Flow;
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// create the musical objects
const context = renderer.getContext();
const svg = context.svg
svg.setAttributeNS('', 'width', '1632');
svg.setAttributeNS('', 'height', '2112');
svg.setAttributeNS('', 'viewBox', '0 0 1255 1625');
VF.setMusicFont("Petaluma","Bravura","Gonville","Custom");
const noteHash = {};
const voiceHash = {}
const fmtsmo4893725 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo48937v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo48937v0ar = [];
const smo48903 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo48903'] = smo48903;
smo48903.setAttribute('id', 'smo48903');
const smo489030acc = new VF.Accidental('b');
smo48903.addModifier(smo489030acc, 0);
const smo48904 = new VF.ChordSymbol();
smo48904.setAttribute('id', 'smo48904');
smo48904.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo48904.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo48904.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo48904.setFont('Petaluma Script', 14).setReportWidth(false);
smo48903.addModifier(smo48904, 0);
smo48937v0ar.push(smo48903);
const smo48905 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo48905'] = smo48905;
smo48905.setAttribute('id', 'smo48905');
smo48937v0ar.push(smo48905);
const smo48906 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48906'] = smo48906;
smo48906.setAttribute('id', 'smo48906');
const smo489060acc = new VF.Accidental('b');
smo48906.addModifier(smo489060acc, 0);
smo48937v0ar.push(smo48906);
const smo48907 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48907'] = smo48907;
smo48907.setAttribute('id', 'smo48907');
smo48937v0ar.push(smo48907);
const smo48908 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
noteHash['smo48908'] = smo48908;
smo48908.setAttribute('id', 'smo48908');
smo48937v0ar.push(smo48908);
const smo48909 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48909'] = smo48909;
smo48909.setAttribute('id', 'smo48909');
smo48937v0ar.push(smo48909);
const smo48910 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48910'] = smo48910;
smo48910.setAttribute('id', 'smo48910');
const smo48911 = new VF.ChordSymbol();
smo48911.setAttribute('id', 'smo48911');
smo48911.setFont('Petaluma Script', 14).setReportWidth(false);
smo48910.addModifier(smo48911, 0);
smo48937v0ar.push(smo48910);
const smo48912 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48912'] = smo48912;
smo48912.setAttribute('id', 'smo48912');
const smo48913 = new VF.ChordSymbol();
smo48913.setAttribute('id', 'smo48913');
smo48913.setFont('Petaluma Script', 14).setReportWidth(false);
smo48912.addModifier(smo48913, 0);
smo48937v0ar.push(smo48912);
const smo48914 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo48914'] = smo48914;
smo48914.setAttribute('id', 'smo48914');
const smo48916 = new VF.Ornament('scoop');
smo48914.addModifier(smo48916, 0);
const smo48915 = new VF.ChordSymbol();
smo48915.setAttribute('id', 'smo48915');
smo48915.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo48915.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo48915.setFont('Petaluma Script', 14).setReportWidth(false);
smo48914.addModifier(smo48915, 0);
smo48937v0ar.push(smo48914);
const smo48917 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo48917'] = smo48917;
smo48917.setAttribute('id', 'smo48917');
smo48937v0ar.push(smo48917);
const smo48918 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48918'] = smo48918;
smo48918.setAttribute('id', 'smo48918');
smo48937v0ar.push(smo48918);
const smo48919 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48919'] = smo48919;
smo48919.setAttribute('id', 'smo48919');
smo48937v0ar.push(smo48919);
const smo48920 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48920'] = smo48920;
smo48920.setAttribute('id', 'smo48920');
smo48937v0ar.push(smo48920);
const smo48921 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48921'] = smo48921;
smo48921.setAttribute('id', 'smo48921');
smo48937v0ar.push(smo48921);
const smo48922 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
noteHash['smo48922'] = smo48922;
smo48922.setAttribute('id', 'smo48922');
const smo48923 = new VF.ChordSymbol();
smo48923.setAttribute('id', 'smo48923');
smo48923.setFont('Petaluma Script', 14).setReportWidth(false);
smo48922.addModifier(smo48923, 0);
smo48937v0ar.push(smo48922);
smo48937v0.addTickables(smo48937v0ar)
fmtsmo4893725.joinVoices([smo48937v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49761 = smo48903.getStemDirection();
smo48903.setStemDirection(dirsmo49761);
smo48905.setStemDirection(dirsmo49761);
smo48906.setStemDirection(dirsmo49761);
smo48907.setStemDirection(dirsmo49761);
const smo49761 = new VF.Beam([smo48903,smo48905,smo48906,smo48907,smo48908]);
const dirsmo49762 = smo48909.getStemDirection();
smo48909.setStemDirection(dirsmo49762);
smo48910.setStemDirection(dirsmo49762);
smo48912.setStemDirection(dirsmo49762);
smo48914.setStemDirection(dirsmo49762);
const smo49762 = new VF.Beam([smo48909,smo48910,smo48912,smo48914]);
const dirsmo49763 = smo48917.getStemDirection();
smo48917.setStemDirection(dirsmo49763);
smo48918.setStemDirection(dirsmo49763);
smo48919.setStemDirection(dirsmo49763);
smo48920.setStemDirection(dirsmo49763);
const smo49763 = new VF.Beam([smo48917,smo48918,smo48919,smo48920]);
 
// formatting measures in staff group smo49493
fmtsmo4893725.format([smo48937v0], 523);
const stavesmo48937 = new VF.Stave(46, 276.3846153846155, 607);
stavesmo48937.setAttribute('id', 'stavesmo48937');
stavesmo48937.setBegBarType(1);
stavesmo48937.addClef('treble');
const keysmo48937 = new VF.KeySignature('G');
keysmo48937.addToStave(stavesmo48937);
stavesmo48937.setContext(context);
stavesmo48937.draw();
smo48937v0.draw(context, stavesmo48937);
smo49761.setContext(context);
smo49761.draw();
smo49762.setContext(context);
smo49762.draw();
smo49763.setContext(context);
smo49763.draw();
const fmtsmo4896926 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo48969v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo48969v0ar = [];
const smo48938 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo48938'] = smo48938;
smo48938.setAttribute('id', 'smo48938');
const smo48939 = new VF.ChordSymbol();
smo48939.setAttribute('id', 'smo48939');
smo48939.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo48939.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo48939.setFont('Petaluma Script', 14).setReportWidth(false);
smo48938.addModifier(smo48939, 0);
smo48969v0ar.push(smo48938);
const smo48940 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo48940'] = smo48940;
smo48940.setAttribute('id', 'smo48940');
smo48969v0ar.push(smo48940);
const smo48941 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo48941'] = smo48941;
smo48941.setAttribute('id', 'smo48941');
smo48969v0ar.push(smo48941);
const smo48942 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo48942'] = smo48942;
smo48942.setAttribute('id', 'smo48942');
const smo489420acc = new VF.Accidental('n');
smo48942.addModifier(smo489420acc, 0);
smo48969v0ar.push(smo48942);
const smo48943 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo48943'] = smo48943;
smo48943.setAttribute('id', 'smo48943');
const smo489430acc = new VF.Accidental('b');
smo48943.addModifier(smo489430acc, 0);
const smo48944 = new VF.ChordSymbol();
smo48944.setAttribute('id', 'smo48944');
smo48944.setFont('Petaluma Script', 14).setReportWidth(false);
smo48943.addModifier(smo48944, 0);
smo48969v0ar.push(smo48943);
const smo48945 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo48945'] = smo48945;
smo48945.setAttribute('id', 'smo48945');
smo48969v0ar.push(smo48945);
const smo48946 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48946'] = smo48946;
smo48946.setAttribute('id', 'smo48946');
smo48969v0ar.push(smo48946);
const smo48947 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo48949 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["bn/4"],"slash":true}'))
smo48949.setAttribute('id', 'smo48949');
const ggrpsmo48947 = new VF.GraceNoteGroup([smo48949]);
ggrpsmo48947.beamNotes();
smo48947.addModifier(ggrpsmo48947, 0);
noteHash['smo48947'] = smo48947;
smo48947.setAttribute('id', 'smo48947');
const smo48948 = new VF.ChordSymbol();
smo48948.setAttribute('id', 'smo48948');
smo48948.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1,"symbolType":2}'));
smo48948.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo48948.setFont('Petaluma Script', 14).setReportWidth(false);
smo48947.addModifier(smo48948, 0);
smo48969v0ar.push(smo48947);
const smo48950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48950'] = smo48950;
smo48950.setAttribute('id', 'smo48950');
const smo489500acc = new VF.Accidental('b');
smo48950.addModifier(smo489500acc, 0);
smo48969v0ar.push(smo48950);
const smo48951 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo48951'] = smo48951;
smo48951.setAttribute('id', 'smo48951');
smo48969v0ar.push(smo48951);
const smo48952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48952'] = smo48952;
smo48952.setAttribute('id', 'smo48952');
smo48969v0ar.push(smo48952);
const smo48953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48953'] = smo48953;
smo48953.setAttribute('id', 'smo48953');
smo48969v0ar.push(smo48953);
const smo48954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
noteHash['smo48954'] = smo48954;
smo48954.setAttribute('id', 'smo48954');
smo48969v0ar.push(smo48954);
smo48969v0.addTickables(smo48969v0ar)
fmtsmo4896926.joinVoices([smo48969v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49766 = smo48940.getStemDirection();
smo48940.setStemDirection(dirsmo49766);
smo48941.setStemDirection(dirsmo49766);
const smo49766 = new VF.Beam([smo48940,smo48941]);
const dirsmo49767 = smo48942.getStemDirection();
smo48942.setStemDirection(dirsmo49767);
smo48943.setStemDirection(dirsmo49767);
smo48945.setStemDirection(dirsmo49767);
smo48946.setStemDirection(dirsmo49767);
const smo49767 = new VF.Beam([smo48942,smo48943,smo48945,smo48946]);
const dirsmo49768 = smo48947.getStemDirection();
smo48947.setStemDirection(dirsmo49768);
smo48950.setStemDirection(dirsmo49768);
smo48951.setStemDirection(dirsmo49768);
smo48952.setStemDirection(dirsmo49768);
const smo49768 = new VF.Beam([smo48947,smo48950,smo48951,smo48952]);
const smo48955 = new VF.Tuplet([smo48950,smo48951,smo48952], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo49493
fmtsmo4896926.format([smo48969v0], 496);
const stavesmo48969 = new VF.Stave(653, 276.3846153846155, 510);
stavesmo48969.setAttribute('id', 'stavesmo48969');
stavesmo48969.setBegBarType(VF.Barline.type.NONE);
stavesmo48969.setContext(context);
stavesmo48969.draw();
smo48969v0.draw(context, stavesmo48969);
smo49766.setContext(context);
smo49766.draw();
smo49767.setContext(context);
smo49767.draw();
smo49768.setContext(context);
smo49768.draw();
smo48955.setContext(context).draw();
const fmtsmo4900227 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo49002v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49002v0ar = [];
const smo48970 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["c#/5/r"]}'))
noteHash['smo48970'] = smo48970;
smo48970.setAttribute('id', 'smo48970');
const smo48971 = new VF.ChordSymbol();
smo48971.setAttribute('id', 'smo48971');
smo48971.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo48971.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo48971.setFont('Petaluma Script', 14).setReportWidth(false);
smo48970.addModifier(smo48971, 0);
smo49002v0ar.push(smo48970);
const smo48972 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo48972'] = smo48972;
smo48972.setAttribute('id', 'smo48972');
const smo489720acc = new VF.Accidental('b');
smo48972.addModifier(smo489720acc, 0);
smo48972.addModifier(new VF.Dot(), 0);
smo49002v0ar.push(smo48972);
const smo48973 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48973'] = smo48973;
smo48973.setAttribute('id', 'smo48973');
const smo489730acc = new VF.Accidental('b');
smo48973.addModifier(smo489730acc, 0);
smo49002v0ar.push(smo48973);
const smo48974 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo48974'] = smo48974;
smo48974.setAttribute('id', 'smo48974');
smo49002v0ar.push(smo48974);
const smo48975 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48975'] = smo48975;
smo48975.setAttribute('id', 'smo48975');
smo49002v0ar.push(smo48975);
const smo48976 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo48976'] = smo48976;
smo48976.setAttribute('id', 'smo48976');
const smo48977 = new VF.ChordSymbol();
smo48977.setAttribute('id', 'smo48977');
smo48977.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo48977.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo48977.setFont('Petaluma Script', 14).setReportWidth(false);
smo48976.addModifier(smo48977, 0);
smo49002v0ar.push(smo48976);
const smo48978 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo48978'] = smo48978;
smo48978.setAttribute('id', 'smo48978');
smo49002v0ar.push(smo48978);
const smo48979 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo48979'] = smo48979;
smo48979.setAttribute('id', 'smo48979');
smo49002v0ar.push(smo48979);
const smo48980 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo48980'] = smo48980;
smo48980.setAttribute('id', 'smo48980');
smo49002v0ar.push(smo48980);
const smo48981 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo48981'] = smo48981;
smo48981.setAttribute('id', 'smo48981');
const smo489810acc = new VF.Accidental('n');
smo48981.addModifier(smo489810acc, 0);
smo49002v0ar.push(smo48981);
const smo48982 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo48982'] = smo48982;
smo48982.setAttribute('id', 'smo48982');
const smo489820acc = new VF.Accidental('#');
smo48982.addModifier(smo489820acc, 0);
smo49002v0ar.push(smo48982);
const smo48983 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo48983'] = smo48983;
smo48983.setAttribute('id', 'smo48983');
smo49002v0ar.push(smo48983);
const smo48984 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo48984'] = smo48984;
smo48984.setAttribute('id', 'smo48984');
smo49002v0ar.push(smo48984);
const smo48985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo48985'] = smo48985;
smo48985.setAttribute('id', 'smo48985');
smo49002v0ar.push(smo48985);
const smo48986 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo48986'] = smo48986;
smo48986.setAttribute('id', 'smo48986');
const smo489860acc = new VF.Accidental('n');
smo48986.addModifier(smo489860acc, 0);
smo49002v0ar.push(smo48986);
smo49002v0.addTickables(smo49002v0ar)
fmtsmo4900227.joinVoices([smo49002v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49776 = smo48973.getStemDirection();
smo48973.setStemDirection(dirsmo49776);
smo48974.setStemDirection(dirsmo49776);
smo48975.setStemDirection(dirsmo49776);
const smo49776 = new VF.Beam([smo48973,smo48974,smo48975]);
const dirsmo49777 = smo48976.getStemDirection();
smo48976.setStemDirection(dirsmo49777);
smo48978.setStemDirection(dirsmo49777);
smo48979.setStemDirection(dirsmo49777);
smo48980.setStemDirection(dirsmo49777);
smo48981.setStemDirection(dirsmo49777);
const smo49777 = new VF.Beam([smo48976,smo48978,smo48979,smo48980,smo48981]);
const dirsmo49778 = smo48982.getStemDirection();
smo48982.setStemDirection(dirsmo49778);
smo48983.setStemDirection(dirsmo49778);
smo48984.setStemDirection(dirsmo49778);
smo48985.setStemDirection(dirsmo49778);
smo48986.setStemDirection(dirsmo49778);
const smo49778 = new VF.Beam([smo48982,smo48983,smo48984,smo48985,smo48986]);
const smo48987 = new VF.Tuplet([smo48976,smo48978,smo48979], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo48988 = new VF.Tuplet([smo48982,smo48983,smo48984], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo49493
fmtsmo4900227.format([smo49002v0], 581);
const stavesmo49002 = new VF.Stave(46, 417.3846153846155, 665);
stavesmo49002.setAttribute('id', 'stavesmo49002');
stavesmo49002.setBegBarType(1);
stavesmo49002.addClef('treble');
const keysmo49002 = new VF.KeySignature('G');
keysmo49002.addToStave(stavesmo49002);
stavesmo49002.setContext(context);
stavesmo49002.draw();
smo49002v0.draw(context, stavesmo49002);
smo49776.setContext(context);
smo49776.draw();
smo49777.setContext(context);
smo49777.draw();
smo49778.setContext(context);
smo49778.draw();
smo48987.setContext(context).draw();
smo48988.setContext(context).draw();
const fmtsmo4903428 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo49034v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49034v0ar = [];
const smo49003 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49003'] = smo49003;
smo49003.setAttribute('id', 'smo49003');
const smo49004 = new VF.ChordSymbol();
smo49004.setAttribute('id', 'smo49004');
smo49004.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49004.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49004.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49004.setFont('Petaluma Script', 14).setReportWidth(false);
smo49003.addModifier(smo49004, 0);
smo49034v0ar.push(smo49003);
const smo49005 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
noteHash['smo49005'] = smo49005;
smo49005.setAttribute('id', 'smo49005');
smo49034v0ar.push(smo49005);
const smo49006 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49006'] = smo49006;
smo49006.setAttribute('id', 'smo49006');
smo49034v0ar.push(smo49006);
const smo49007 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49007'] = smo49007;
smo49007.setAttribute('id', 'smo49007');
smo49034v0ar.push(smo49007);
const smo49008 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49008'] = smo49008;
smo49008.setAttribute('id', 'smo49008');
const smo49009 = new VF.ChordSymbol();
smo49009.setAttribute('id', 'smo49009');
smo49009.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo49009.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49009.setFont('Petaluma Script', 14).setReportWidth(false);
smo49008.addModifier(smo49009, 0);
smo49034v0ar.push(smo49008);
const smo49010 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49010'] = smo49010;
smo49010.setAttribute('id', 'smo49010');
smo49034v0ar.push(smo49010);
const smo49011 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo49012 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo49012.setAttribute('id', 'smo49012');
const acc0smo49012 = new VF.Accidental('#');
smo49012.addModifier(acc0smo49012, 0)
const ggrpsmo49011 = new VF.GraceNoteGroup([smo49012]);
ggrpsmo49011.beamNotes();
smo49011.addModifier(ggrpsmo49011, 0);
noteHash['smo49011'] = smo49011;
smo49011.setAttribute('id', 'smo49011');
smo49034v0ar.push(smo49011);
const smo49013 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
noteHash['smo49013'] = smo49013;
smo49013.setAttribute('id', 'smo49013');
smo49034v0ar.push(smo49013);
const smo49014 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49014'] = smo49014;
smo49014.setAttribute('id', 'smo49014');
smo49034v0ar.push(smo49014);
const smo49015 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49015'] = smo49015;
smo49015.setAttribute('id', 'smo49015');
const smo490150acc = new VF.Accidental('b');
smo49015.addModifier(smo490150acc, 0);
smo49034v0ar.push(smo49015);
const smo49016 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49016'] = smo49016;
smo49016.setAttribute('id', 'smo49016');
smo49034v0ar.push(smo49016);
const smo49017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49017'] = smo49017;
smo49017.setAttribute('id', 'smo49017');
smo49034v0ar.push(smo49017);
smo49034v0.addTickables(smo49034v0ar)
fmtsmo4903428.joinVoices([smo49034v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49781 = smo49006.getStemDirection();
smo49006.setStemDirection(dirsmo49781);
smo49007.setStemDirection(dirsmo49781);
const smo49781 = new VF.Beam([smo49006,smo49007]);
const dirsmo49782 = smo49008.getStemDirection();
smo49008.setStemDirection(dirsmo49782);
smo49010.setStemDirection(dirsmo49782);
const smo49782 = new VF.Beam([smo49008,smo49010]);
const dirsmo49783 = smo49011.getStemDirection();
smo49011.setStemDirection(dirsmo49783);
smo49014.setStemDirection(dirsmo49783);
smo49015.setStemDirection(dirsmo49783);
smo49016.setStemDirection(dirsmo49783);
smo49017.setStemDirection(dirsmo49783);
const smo49783 = new VF.Beam([smo49011,smo49014,smo49015,smo49016,smo49017]);
const smo49018 = new VF.Tuplet([smo49005,smo49006,smo49007], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo49019 = new VF.Tuplet([smo49011,smo49013,smo49014], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo49020 = new VF.Tuplet([smo49015,smo49016,smo49017], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo49493
fmtsmo4903428.format([smo49034v0], 437);
const stavesmo49034 = new VF.Stave(711, 417.3846153846155, 451);
stavesmo49034.setAttribute('id', 'stavesmo49034');
stavesmo49034.setBegBarType(VF.Barline.type.NONE);
stavesmo49034.setContext(context);
stavesmo49034.draw();
smo49034v0.draw(context, stavesmo49034);
smo49781.setContext(context);
smo49781.draw();
smo49782.setContext(context);
smo49782.draw();
smo49783.setContext(context);
smo49783.draw();
smo49018.setContext(context).draw();
smo49019.setContext(context).draw();
smo49020.setContext(context).draw();
const fmtsmo4905929 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo49059v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49059v0ar = [];
const smo49035 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
const smo49037 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo49037.setAttribute('id', 'smo49037');
const ggrpsmo49035 = new VF.GraceNoteGroup([smo49037]);
ggrpsmo49035.beamNotes();
smo49035.addModifier(ggrpsmo49035, 0);
noteHash['smo49035'] = smo49035;
smo49035.setAttribute('id', 'smo49035');
const smo49036 = new VF.ChordSymbol();
smo49036.setAttribute('id', 'smo49036');
smo49036.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49036.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49036.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49036.setFont('Petaluma Script', 14).setReportWidth(false);
smo49035.addModifier(smo49036, 0);
smo49059v0ar.push(smo49035);
const smo49038 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49038'] = smo49038;
smo49038.setAttribute('id', 'smo49038');
smo49059v0ar.push(smo49038);
const smo49039 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49039'] = smo49039;
smo49039.setAttribute('id', 'smo49039');
smo49059v0ar.push(smo49039);
const smo49040 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49040'] = smo49040;
smo49040.setAttribute('id', 'smo49040');
const smo49041 = new VF.ChordSymbol();
smo49041.setAttribute('id', 'smo49041');
smo49041.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo49041.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49041.setFont('Petaluma Script', 14).setReportWidth(false);
smo49040.addModifier(smo49041, 0);
smo49059v0ar.push(smo49040);
const smo49042 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo49042'] = smo49042;
smo49042.setAttribute('id', 'smo49042');
smo49059v0ar.push(smo49042);
const smo49043 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo49043'] = smo49043;
smo49043.setAttribute('id', 'smo49043');
const smo490430acc = new VF.Accidental('b');
smo49043.addModifier(smo490430acc, 0);
smo49059v0ar.push(smo49043);
const smo49044 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49044'] = smo49044;
smo49044.setAttribute('id', 'smo49044');
smo49059v0ar.push(smo49044);
const smo49045 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49045'] = smo49045;
smo49045.setAttribute('id', 'smo49045');
smo49059v0ar.push(smo49045);
smo49059v0.addTickables(smo49059v0ar)
fmtsmo4905929.joinVoices([smo49059v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49789 = smo49035.getStemDirection();
smo49035.setStemDirection(dirsmo49789);
smo49038.setStemDirection(dirsmo49789);
const smo49789 = new VF.Beam([smo49035,smo49038]);
const dirsmo49790 = smo49042.getStemDirection();
smo49042.setStemDirection(dirsmo49790);
smo49043.setStemDirection(dirsmo49790);
smo49044.setStemDirection(dirsmo49790);
smo49045.setStemDirection(dirsmo49790);
const smo49790 = new VF.Beam([smo49042,smo49043,smo49044,smo49045]);
 
// formatting measures in staff group smo49493
fmtsmo4905929.format([smo49059v0], 306);
const stavesmo49059 = new VF.Stave(46, 578.3846153846155, 390);
stavesmo49059.setAttribute('id', 'stavesmo49059');
stavesmo49059.setBegBarType(1);
stavesmo49059.setEndBarType(2);
stavesmo49059.addClef('treble');
const keysmo49059 = new VF.KeySignature('G');
keysmo49059.addToStave(stavesmo49059);
stavesmo49059.setContext(context);
stavesmo49059.draw();
smo49059v0.draw(context, stavesmo49059);
smo49789.setContext(context);
smo49789.draw();
smo49790.setContext(context);
smo49790.draw();
const fmtsmo4908330 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo49083v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49083v0ar = [];
const smo49060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo49060'] = smo49060;
smo49060.setAttribute('id', 'smo49060');
const smo49061 = new VF.ChordSymbol();
smo49061.setAttribute('id', 'smo49061');
smo49061.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49061.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49061.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49061.setFont('Petaluma Script', 14).setReportWidth(false);
smo49060.addModifier(smo49061, 0);
smo49083v0ar.push(smo49060);
const smo49062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49062'] = smo49062;
smo49062.setAttribute('id', 'smo49062');
smo49062.addModifier(new VF.Dot(), 0);
smo49083v0ar.push(smo49062);
const smo49063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo49063'] = smo49063;
smo49063.setAttribute('id', 'smo49063');
const smo490630acc = new VF.Accidental('n');
smo49063.addModifier(smo490630acc, 0);
smo49083v0ar.push(smo49063);
const smo49064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49064'] = smo49064;
smo49064.setAttribute('id', 'smo49064');
smo49064.addModifier(new VF.Dot(), 0);
smo49083v0ar.push(smo49064);
const smo49065 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49065'] = smo49065;
smo49065.setAttribute('id', 'smo49065');
const smo49066 = new VF.ChordSymbol();
smo49066.setAttribute('id', 'smo49066');
smo49066.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo49066.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3,"symbolType":2}'));
smo49066.setFont('Petaluma Script', 14).setReportWidth(false);
smo49065.addModifier(smo49066, 0);
smo49083v0ar.push(smo49065);
const smo49067 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49067'] = smo49067;
smo49067.setAttribute('id', 'smo49067');
smo49067.addModifier(new VF.Dot(), 0);
smo49083v0ar.push(smo49067);
const smo49068 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo49068'] = smo49068;
smo49068.setAttribute('id', 'smo49068');
const smo490680acc = new VF.Accidental('n');
smo49068.addModifier(smo490680acc, 0);
smo49083v0ar.push(smo49068);
const smo49069 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo49069'] = smo49069;
smo49069.setAttribute('id', 'smo49069');
smo49069.addModifier(new VF.Dot(), 0);
smo49083v0ar.push(smo49069);
smo49083v0.addTickables(smo49083v0ar)
fmtsmo4908330.joinVoices([smo49083v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49792 = smo49060.getStemDirection();
smo49060.setStemDirection(dirsmo49792);
smo49062.setStemDirection(dirsmo49792);
const smo49792 = new VF.Beam([smo49060,smo49062]);
const dirsmo49793 = smo49063.getStemDirection();
smo49063.setStemDirection(dirsmo49793);
smo49064.setStemDirection(dirsmo49793);
const smo49793 = new VF.Beam([smo49063,smo49064]);
const dirsmo49794 = smo49065.getStemDirection();
smo49065.setStemDirection(dirsmo49794);
smo49067.setStemDirection(dirsmo49794);
const smo49794 = new VF.Beam([smo49065,smo49067]);
const dirsmo49795 = smo49068.getStemDirection();
smo49068.setStemDirection(dirsmo49795);
smo49069.setStemDirection(dirsmo49795);
const smo49795 = new VF.Beam([smo49068,smo49069]);
 
// formatting measures in staff group smo49493
fmtsmo4908330.format([smo49083v0], 345);
const stavesmo49083 = new VF.Stave(436, 578.3846153846155, 359);
stavesmo49083.setAttribute('id', 'stavesmo49083');
stavesmo49083.setBegBarType(VF.Barline.type.NONE);
stavesmo49083.setContext(context);
stavesmo49083.draw();
smo49083v0.draw(context, stavesmo49083);
smo49792.setContext(context);
smo49792.draw();
smo49793.setContext(context);
smo49793.draw();
smo49794.setContext(context);
smo49794.draw();
smo49795.setContext(context);
smo49795.draw();
const fmtsmo4911331 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo49113v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49113v0ar = [];
const smo49084 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo49084'] = smo49084;
smo49084.setAttribute('id', 'smo49084');
const smo490840acc = new VF.Accidental('b');
smo49084.addModifier(smo490840acc, 0);
const smo49085 = new VF.ChordSymbol();
smo49085.setAttribute('id', 'smo49085');
smo49085.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo49085.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49085.setFont('Petaluma Script', 14).setReportWidth(false);
smo49084.addModifier(smo49085, 0);
smo49113v0ar.push(smo49084);
const smo49086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49086'] = smo49086;
smo49086.setAttribute('id', 'smo49086');
smo49086.addModifier(new VF.Dot(), 0);
const smo49087 = new VF.ChordSymbol();
smo49087.setAttribute('id', 'smo49087');
smo49087.setFont('Petaluma Script', 14).setReportWidth(false);
smo49086.addModifier(smo49087, 0);
smo49113v0ar.push(smo49086);
const smo49088 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49088'] = smo49088;
smo49088.setAttribute('id', 'smo49088');
const smo490880acc = new VF.Accidental('b');
smo49088.addModifier(smo490880acc, 0);
const smo49089 = new VF.ChordSymbol();
smo49089.setAttribute('id', 'smo49089');
smo49089.setFont('Petaluma Script', 14).setReportWidth(false);
smo49088.addModifier(smo49089, 0);
smo49113v0ar.push(smo49088);
const smo49090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49090'] = smo49090;
smo49090.setAttribute('id', 'smo49090');
smo49090.addModifier(new VF.Dot(), 0);
const smo49091 = new VF.ChordSymbol();
smo49091.setAttribute('id', 'smo49091');
smo49091.setFont('Petaluma Script', 14).setReportWidth(false);
smo49090.addModifier(smo49091, 0);
smo49113v0ar.push(smo49090);
const smo49092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo49092'] = smo49092;
smo49092.setAttribute('id', 'smo49092');
const smo490920acc = new VF.Accidental('n');
smo49092.addModifier(smo490920acc, 0);
const smo49093 = new VF.ChordSymbol();
smo49093.setAttribute('id', 'smo49093');
smo49093.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo49093.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49093.setFont('Petaluma Script', 14).setReportWidth(false);
smo49092.addModifier(smo49093, 0);
smo49113v0ar.push(smo49092);
const smo49094 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo49094'] = smo49094;
smo49094.setAttribute('id', 'smo49094');
smo49094.addModifier(new VF.Dot(), 0);
const smo49095 = new VF.ChordSymbol();
smo49095.setAttribute('id', 'smo49095');
smo49095.setFont('Petaluma Script', 14).setReportWidth(false);
smo49094.addModifier(smo49095, 0);
smo49113v0ar.push(smo49094);
const smo49096 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo49096'] = smo49096;
smo49096.setAttribute('id', 'smo49096');
const smo490960acc = new VF.Accidental('b');
smo49096.addModifier(smo490960acc, 0);
const smo49097 = new VF.ChordSymbol();
smo49097.setAttribute('id', 'smo49097');
smo49097.setFont('Petaluma Script', 14).setReportWidth(false);
smo49096.addModifier(smo49097, 0);
smo49113v0ar.push(smo49096);
const smo49098 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo49098'] = smo49098;
smo49098.setAttribute('id', 'smo49098');
smo49098.addModifier(new VF.Dot(), 0);
const smo49099 = new VF.ChordSymbol();
smo49099.setAttribute('id', 'smo49099');
smo49099.setFont('Petaluma Script', 14).setReportWidth(false);
smo49098.addModifier(smo49099, 0);
smo49113v0ar.push(smo49098);
smo49113v0.addTickables(smo49113v0ar)
fmtsmo4911331.joinVoices([smo49113v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49798 = smo49084.getStemDirection();
smo49084.setStemDirection(dirsmo49798);
smo49086.setStemDirection(dirsmo49798);
const smo49798 = new VF.Beam([smo49084,smo49086]);
const dirsmo49799 = smo49088.getStemDirection();
smo49088.setStemDirection(dirsmo49799);
smo49090.setStemDirection(dirsmo49799);
const smo49799 = new VF.Beam([smo49088,smo49090]);
const dirsmo49800 = smo49092.getStemDirection();
smo49092.setStemDirection(dirsmo49800);
smo49094.setStemDirection(dirsmo49800);
const smo49800 = new VF.Beam([smo49092,smo49094]);
const dirsmo49801 = smo49096.getStemDirection();
smo49096.setStemDirection(dirsmo49801);
smo49098.setStemDirection(dirsmo49801);
const smo49801 = new VF.Beam([smo49096,smo49098]);
 
// formatting measures in staff group smo49493
fmtsmo4911331.format([smo49113v0], 355);
const stavesmo49113 = new VF.Stave(795, 578.3846153846155, 369);
stavesmo49113.setAttribute('id', 'stavesmo49113');
stavesmo49113.setBegBarType(VF.Barline.type.NONE);
stavesmo49113.setContext(context);
stavesmo49113.draw();
smo49113v0.draw(context, stavesmo49113);
smo49798.setContext(context);
smo49798.draw();
smo49799.setContext(context);
smo49799.draw();
smo49800.setContext(context);
smo49800.draw();
smo49801.setContext(context);
smo49801.draw();
const fmtsmo4914932 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo49149v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49149v0ar = [];
const smo49114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo49114'] = smo49114;
smo49114.setAttribute('id', 'smo49114');
const smo491140acc = new VF.Accidental('b');
smo49114.addModifier(smo491140acc, 0);
const smo49115 = new VF.ChordSymbol();
smo49115.setAttribute('id', 'smo49115');
smo49115.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1,"symbolType":2}'));
smo49115.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49115.setFont('Petaluma Script', 14).setReportWidth(false);
smo49114.addModifier(smo49115, 0);
smo49149v0ar.push(smo49114);
const smo49116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo49116'] = smo49116;
smo49116.setAttribute('id', 'smo49116');
const smo491160acc = new VF.Accidental('b');
smo49116.addModifier(smo491160acc, 0);
const smo49117 = new VF.ChordSymbol();
smo49117.setAttribute('id', 'smo49117');
smo49117.setFont('Petaluma Script', 14).setReportWidth(false);
smo49116.addModifier(smo49117, 0);
smo49149v0ar.push(smo49116);
const smo49118 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo49118'] = smo49118;
smo49118.setAttribute('id', 'smo49118');
const smo491180acc = new VF.Accidental('n');
smo49118.addModifier(smo491180acc, 0);
const smo49119 = new VF.ChordSymbol();
smo49119.setAttribute('id', 'smo49119');
smo49119.setFont('Petaluma Script', 14).setReportWidth(false);
smo49118.addModifier(smo49119, 0);
smo49149v0ar.push(smo49118);
const smo49120 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49120'] = smo49120;
smo49120.setAttribute('id', 'smo49120');
const smo491200acc = new VF.Accidental('b');
smo49120.addModifier(smo491200acc, 0);
const smo49122 = new VF.Ornament('fall');
smo49120.addModifier(smo49122, 0);
const smo49121 = new VF.ChordSymbol();
smo49121.setAttribute('id', 'smo49121');
smo49121.setFont('Petaluma Script', 14).setReportWidth(false);
smo49120.addModifier(smo49121, 0);
smo49149v0ar.push(smo49120);
const smo49123 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49123'] = smo49123;
smo49123.setAttribute('id', 'smo49123');
const smo49124 = new VF.ChordSymbol();
smo49124.setAttribute('id', 'smo49124');
smo49124.setFont('Petaluma Script', 14).setReportWidth(false);
smo49123.addModifier(smo49124, 0);
smo49149v0ar.push(smo49123);
const smo49125 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo49125'] = smo49125;
smo49125.setAttribute('id', 'smo49125');
const smo491250acc = new VF.Accidental('b');
smo49125.addModifier(smo491250acc, 0);
smo49149v0ar.push(smo49125);
const smo49126 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo49126'] = smo49126;
smo49126.setAttribute('id', 'smo49126');
const smo491260acc = new VF.Accidental('b');
smo49126.addModifier(smo491260acc, 0);
smo49149v0ar.push(smo49126);
const smo49127 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49127'] = smo49127;
smo49127.setAttribute('id', 'smo49127');
smo49149v0ar.push(smo49127);
const smo49128 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
noteHash['smo49128'] = smo49128;
smo49128.setAttribute('id', 'smo49128');
const smo491280acc = new VF.Accidental('b');
smo49128.addModifier(smo491280acc, 0);
const smo49129 = new VF.ChordSymbol();
smo49129.setAttribute('id', 'smo49129');
smo49129.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1,"symbolType":2}'));
smo49129.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49129.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49129.setFont('Petaluma Script', 14).setReportWidth(false);
smo49128.addModifier(smo49129, 0);
smo49149v0ar.push(smo49128);
const smo49130 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo49130'] = smo49130;
smo49130.setAttribute('id', 'smo49130');
const smo491300acc = new VF.Accidental('b');
smo491300acc.setAsCautionary();
smo49130.addModifier(smo491300acc, 0);
smo49149v0ar.push(smo49130);
const smo49131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo49131'] = smo49131;
smo49131.setAttribute('id', 'smo49131');
const smo491310acc = new VF.Accidental('b');
smo491310acc.setAsCautionary();
smo49131.addModifier(smo491310acc, 0);
smo49149v0ar.push(smo49131);
const smo49132 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
noteHash['smo49132'] = smo49132;
smo49132.setAttribute('id', 'smo49132');
smo49149v0ar.push(smo49132);
const smo49133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49133'] = smo49133;
smo49133.setAttribute('id', 'smo49133');
smo49149v0ar.push(smo49133);
const smo49134 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo49134'] = smo49134;
smo49134.setAttribute('id', 'smo49134');
smo49149v0ar.push(smo49134);
const smo49135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49135'] = smo49135;
smo49135.setAttribute('id', 'smo49135');
smo49149v0ar.push(smo49135);
smo49149v0.addTickables(smo49149v0ar)
fmtsmo4914932.joinVoices([smo49149v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49810 = smo49114.getStemDirection();
smo49114.setStemDirection(dirsmo49810);
smo49116.setStemDirection(dirsmo49810);
smo49118.setStemDirection(dirsmo49810);
smo49120.setStemDirection(dirsmo49810);
const smo49810 = new VF.Beam([smo49114,smo49116,smo49118,smo49120]);
const dirsmo49811 = smo49125.getStemDirection();
smo49125.setStemDirection(dirsmo49811);
smo49126.setStemDirection(dirsmo49811);
smo49127.setStemDirection(dirsmo49811);
const smo49811 = new VF.Beam([smo49125,smo49126,smo49127]);
const dirsmo49812 = smo49128.getStemDirection();
smo49128.setStemDirection(dirsmo49812);
smo49130.setStemDirection(dirsmo49812);
smo49131.setStemDirection(dirsmo49812);
smo49132.setStemDirection(dirsmo49812);
const smo49812 = new VF.Beam([smo49128,smo49130,smo49131,smo49132]);
const dirsmo49813 = smo49133.getStemDirection();
smo49133.setStemDirection(dirsmo49813);
smo49134.setStemDirection(dirsmo49813);
const smo49813 = new VF.Beam([smo49133,smo49134]);
 
// formatting measures in staff group smo49493
fmtsmo4914932.format([smo49149v0], 588);
const stavesmo49149 = new VF.Stave(46, 760.3846153846155, 672);
stavesmo49149.setAttribute('id', 'stavesmo49149');
stavesmo49149.setBegBarType(1);
stavesmo49149.addClef('treble');
const keysmo49149 = new VF.KeySignature('G');
keysmo49149.addToStave(stavesmo49149);
stavesmo49149.setContext(context);
stavesmo49149.draw();
smo49149v0.draw(context, stavesmo49149);
smo49810.setContext(context);
smo49810.draw();
smo49811.setContext(context);
smo49811.draw();
smo49812.setContext(context);
smo49812.draw();
smo49813.setContext(context);
smo49813.draw();
const fmtsmo4917833 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo49178v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49178v0ar = [];
const smo49150 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49150'] = smo49150;
smo49150.setAttribute('id', 'smo49150');
const smo49151 = new VF.ChordSymbol();
smo49151.setAttribute('id', 'smo49151');
smo49151.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo49151.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49151.setFont('Petaluma Script', 14).setReportWidth(false);
smo49150.addModifier(smo49151, 0);
smo49178v0ar.push(smo49150);
const smo49152 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49152'] = smo49152;
smo49152.setAttribute('id', 'smo49152');
smo49178v0ar.push(smo49152);
const smo49153 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49153'] = smo49153;
smo49153.setAttribute('id', 'smo49153');
smo49178v0ar.push(smo49153);
const smo49154 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49154'] = smo49154;
smo49154.setAttribute('id', 'smo49154');
smo49178v0ar.push(smo49154);
const smo49155 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49155'] = smo49155;
smo49155.setAttribute('id', 'smo49155');
const smo49156 = new VF.ChordSymbol();
smo49156.setAttribute('id', 'smo49156');
smo49156.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo49156.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49156.setFont('Petaluma Script', 14).setReportWidth(false);
smo49155.addModifier(smo49156, 0);
smo49178v0ar.push(smo49155);
const smo49157 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo49157'] = smo49157;
smo49157.setAttribute('id', 'smo49157');
const smo491570acc = new VF.Accidental('b');
smo49157.addModifier(smo491570acc, 0);
smo49178v0ar.push(smo49157);
const smo49158 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo49158'] = smo49158;
smo49158.setAttribute('id', 'smo49158');
smo49178v0ar.push(smo49158);
const smo49159 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49159'] = smo49159;
smo49159.setAttribute('id', 'smo49159');
smo49178v0ar.push(smo49159);
const smo49160 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo49160'] = smo49160;
smo49160.setAttribute('id', 'smo49160');
const smo49161 = new VF.ChordSymbol();
smo49161.setAttribute('id', 'smo49161');
smo49161.setFont('Petaluma Script', 14).setReportWidth(false);
smo49160.addModifier(smo49161, 0);
smo49178v0ar.push(smo49160);
const smo49162 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo49162'] = smo49162;
smo49162.setAttribute('id', 'smo49162');
smo49178v0ar.push(smo49162);
const smo49163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo49163'] = smo49163;
smo49163.setAttribute('id', 'smo49163');
const smo491630acc = new VF.Accidental('b');
smo49163.addModifier(smo491630acc, 0);
smo49178v0ar.push(smo49163);
const smo49164 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo49164'] = smo49164;
smo49164.setAttribute('id', 'smo49164');
smo49178v0ar.push(smo49164);
smo49178v0.addTickables(smo49178v0ar)
fmtsmo4917833.joinVoices([smo49178v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49816 = smo49153.getStemDirection();
smo49153.setStemDirection(dirsmo49816);
smo49154.setStemDirection(dirsmo49816);
const smo49816 = new VF.Beam([smo49153,smo49154]);
const dirsmo49817 = smo49155.getStemDirection();
smo49155.setStemDirection(dirsmo49817);
smo49157.setStemDirection(dirsmo49817);
smo49158.setStemDirection(dirsmo49817);
smo49159.setStemDirection(dirsmo49817);
const smo49817 = new VF.Beam([smo49155,smo49157,smo49158,smo49159]);
const dirsmo49818 = smo49160.getStemDirection();
smo49160.setStemDirection(dirsmo49818);
smo49162.setStemDirection(dirsmo49818);
smo49163.setStemDirection(dirsmo49818);
smo49164.setStemDirection(dirsmo49818);
const smo49818 = new VF.Beam([smo49160,smo49162,smo49163,smo49164]);
 
// formatting measures in staff group smo49493
fmtsmo4917833.format([smo49178v0], 431);
const stavesmo49178 = new VF.Stave(718, 760.3846153846155, 445);
stavesmo49178.setAttribute('id', 'stavesmo49178');
stavesmo49178.setBegBarType(VF.Barline.type.NONE);
stavesmo49178.setContext(context);
stavesmo49178.draw();
smo49178v0.draw(context, stavesmo49178);
smo49816.setContext(context);
smo49816.draw();
smo49817.setContext(context);
smo49817.draw();
smo49818.setContext(context);
smo49818.draw();
const fmtsmo4920734 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo49207v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49207v0ar = [];
const smo49179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49179'] = smo49179;
smo49179.setAttribute('id', 'smo49179');
const smo49180 = new VF.ChordSymbol();
smo49180.setAttribute('id', 'smo49180');
smo49180.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49180.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49180.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49180.setFont('Petaluma Script', 14).setReportWidth(false);
smo49179.addModifier(smo49180, 0);
smo49207v0ar.push(smo49179);
const smo49181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49181'] = smo49181;
smo49181.setAttribute('id', 'smo49181');
smo49207v0ar.push(smo49181);
const smo49182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49182'] = smo49182;
smo49182.setAttribute('id', 'smo49182');
smo49207v0ar.push(smo49182);
const smo49183 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49183'] = smo49183;
smo49183.setAttribute('id', 'smo49183');
const smo491830acc = new VF.Accidental('b');
smo49183.addModifier(smo491830acc, 0);
smo49207v0ar.push(smo49183);
const smo49184 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49184'] = smo49184;
smo49184.setAttribute('id', 'smo49184');
smo49207v0ar.push(smo49184);
const smo49185 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49185'] = smo49185;
smo49185.setAttribute('id', 'smo49185');
smo49185.addModifier(new VF.Dot(), 0);
smo49207v0ar.push(smo49185);
const smo49186 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49186'] = smo49186;
smo49186.setAttribute('id', 'smo49186');
const smo49187 = new VF.ChordSymbol();
smo49187.setAttribute('id', 'smo49187');
smo49187.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo49187.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49187.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3,"symbolType":2}'));
smo49187.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo49187.setFont('Petaluma Script', 14).setReportWidth(false);
smo49186.addModifier(smo49187, 0);
smo49207v0ar.push(smo49186);
const smo49188 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo49188'] = smo49188;
smo49188.setAttribute('id', 'smo49188');
const smo491880acc = new VF.Accidental('b');
smo49188.addModifier(smo491880acc, 0);
smo49207v0ar.push(smo49188);
const smo49189 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo49189'] = smo49189;
smo49189.setAttribute('id', 'smo49189');
const smo491890acc = new VF.Accidental('b');
smo49189.addModifier(smo491890acc, 0);
smo49207v0ar.push(smo49189);
const smo49190 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo49190'] = smo49190;
smo49190.setAttribute('id', 'smo49190');
smo49207v0ar.push(smo49190);
const smo49191 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo49191'] = smo49191;
smo49191.setAttribute('id', 'smo49191');
const smo491910acc = new VF.Accidental('#');
smo49191.addModifier(smo491910acc, 0);
smo49207v0ar.push(smo49191);
const smo49192 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["f#/4/r"]}'))
noteHash['smo49192'] = smo49192;
smo49192.setAttribute('id', 'smo49192');
smo49207v0ar.push(smo49192);
smo49207v0.addTickables(smo49207v0ar)
fmtsmo4920734.joinVoices([smo49207v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49827 = smo49179.getStemDirection();
smo49179.setStemDirection(dirsmo49827);
smo49181.setStemDirection(dirsmo49827);
smo49182.setStemDirection(dirsmo49827);
smo49183.setStemDirection(dirsmo49827);
const smo49827 = new VF.Beam([smo49179,smo49181,smo49182,smo49183]);
const dirsmo49828 = smo49184.getStemDirection();
smo49184.setStemDirection(dirsmo49828);
smo49185.setStemDirection(dirsmo49828);
const smo49828 = new VF.Beam([smo49184,smo49185]);
const dirsmo49829 = smo49186.getStemDirection();
smo49186.setStemDirection(dirsmo49829);
smo49188.setStemDirection(dirsmo49829);
smo49189.setStemDirection(dirsmo49829);
const smo49829 = new VF.Beam([smo49186,smo49188,smo49189]);
const dirsmo49830 = smo49190.getStemDirection();
smo49190.setStemDirection(dirsmo49830);
smo49191.setStemDirection(dirsmo49830);
const smo49830 = new VF.Beam([smo49190,smo49191]);
const smo49193 = new VF.Tuplet([smo49181,smo49182,smo49183], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo49493
fmtsmo4920734.format([smo49207v0], 496);
const stavesmo49207 = new VF.Stave(46, 911.3846153846155, 579);
stavesmo49207.setAttribute('id', 'stavesmo49207');
stavesmo49207.setBegBarType(1);
stavesmo49207.addClef('treble');
const keysmo49207 = new VF.KeySignature('G');
keysmo49207.addToStave(stavesmo49207);
stavesmo49207.setContext(context);
stavesmo49207.draw();
smo49207v0.draw(context, stavesmo49207);
smo49827.setContext(context);
smo49827.draw();
smo49828.setContext(context);
smo49828.draw();
smo49829.setContext(context);
smo49829.draw();
smo49830.setContext(context);
smo49830.draw();
smo49193.setContext(context).draw();
const fmtsmo4923535 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo49235v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49235v0ar = [];
const smo49208 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["fn/4/r"]}'))
noteHash['smo49208'] = smo49208;
smo49208.setAttribute('id', 'smo49208');
const smo49209 = new VF.ChordSymbol();
smo49209.setAttribute('id', 'smo49209');
smo49209.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo49209.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49209.setFont('Petaluma Script', 14).setReportWidth(false);
smo49208.addModifier(smo49209, 0);
smo49235v0ar.push(smo49208);
const smo49210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo49210'] = smo49210;
smo49210.setAttribute('id', 'smo49210');
const smo492100acc = new VF.Accidental('n');
smo49210.addModifier(smo492100acc, 0);
smo49235v0ar.push(smo49210);
const smo49211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo49211'] = smo49211;
smo49211.setAttribute('id', 'smo49211');
const smo492110acc = new VF.Accidental('b');
smo49211.addModifier(smo492110acc, 0);
smo49235v0ar.push(smo49211);
const smo49212 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo49212'] = smo49212;
smo49212.setAttribute('id', 'smo49212');
const smo492120acc = new VF.Accidental('b');
smo49212.addModifier(smo492120acc, 0);
smo49235v0ar.push(smo49212);
const smo49213 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo49213'] = smo49213;
smo49213.setAttribute('id', 'smo49213');
smo49235v0ar.push(smo49213);
const smo49214 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49214'] = smo49214;
smo49214.setAttribute('id', 'smo49214');
smo49235v0ar.push(smo49214);
const smo49215 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49215'] = smo49215;
smo49215.setAttribute('id', 'smo49215');
smo49235v0ar.push(smo49215);
const smo49216 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo49216'] = smo49216;
smo49216.setAttribute('id', 'smo49216');
const smo492160acc = new VF.Accidental('b');
smo492160acc.setAsCautionary();
smo49216.addModifier(smo492160acc, 0);
const smo49217 = new VF.ChordSymbol();
smo49217.setAttribute('id', 'smo49217');
smo49217.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1,"symbolType":2}'));
smo49217.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49217.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49217.setFont('Petaluma Script', 14).setReportWidth(false);
smo49216.addModifier(smo49217, 0);
smo49235v0ar.push(smo49216);
const smo49218 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
noteHash['smo49218'] = smo49218;
smo49218.setAttribute('id', 'smo49218');
const smo492180acc = new VF.Accidental('b');
smo49218.addModifier(smo492180acc, 0);
smo49235v0ar.push(smo49218);
const smo49219 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49219'] = smo49219;
smo49219.setAttribute('id', 'smo49219');
const smo492190acc = new VF.Accidental('b');
smo49219.addModifier(smo492190acc, 0);
smo49235v0ar.push(smo49219);
const smo49220 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo49220'] = smo49220;
smo49220.setAttribute('id', 'smo49220');
const smo492200acc = new VF.Accidental('b');
smo49220.addModifier(smo492200acc, 0);
smo49235v0ar.push(smo49220);
const smo49221 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo49221'] = smo49221;
smo49221.setAttribute('id', 'smo49221');
const smo492210acc = new VF.Accidental('b');
smo49221.addModifier(smo492210acc, 0);
smo49235v0ar.push(smo49221);
smo49235v0.addTickables(smo49235v0ar)
fmtsmo4923535.joinVoices([smo49235v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49833 = smo49210.getStemDirection();
smo49210.setStemDirection(dirsmo49833);
smo49211.setStemDirection(dirsmo49833);
const smo49833 = new VF.Beam([smo49210,smo49211]);
const dirsmo49834 = smo49212.getStemDirection();
smo49212.setStemDirection(dirsmo49834);
smo49213.setStemDirection(dirsmo49834);
smo49214.setStemDirection(dirsmo49834);
smo49215.setStemDirection(dirsmo49834);
const smo49834 = new VF.Beam([smo49212,smo49213,smo49214,smo49215]);
const dirsmo49835 = smo49216.getStemDirection();
smo49216.setStemDirection(dirsmo49835);
smo49218.setStemDirection(dirsmo49835);
smo49219.setStemDirection(dirsmo49835);
const smo49835 = new VF.Beam([smo49216,smo49218,smo49219]);
const dirsmo49836 = smo49220.getStemDirection();
smo49220.setStemDirection(dirsmo49836);
smo49221.setStemDirection(dirsmo49836);
const smo49836 = new VF.Beam([smo49220,smo49221]);
 
// formatting measures in staff group smo49493
fmtsmo4923535.format([smo49235v0], 524);
const stavesmo49235 = new VF.Stave(625, 911.3846153846155, 538);
stavesmo49235.setAttribute('id', 'stavesmo49235');
stavesmo49235.setBegBarType(VF.Barline.type.NONE);
stavesmo49235.setContext(context);
stavesmo49235.draw();
smo49235v0.draw(context, stavesmo49235);
smo49833.setContext(context);
smo49833.draw();
smo49834.setContext(context);
smo49834.draw();
smo49835.setContext(context);
smo49835.draw();
smo49836.setContext(context);
smo49836.draw();
const fmtsmo4926736 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo49267v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49267v0ar = [];
const smo49236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49236'] = smo49236;
smo49236.setAttribute('id', 'smo49236');
const smo49237 = new VF.ChordSymbol();
smo49237.setAttribute('id', 'smo49237');
smo49237.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49237.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49237.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49237.setFont('Petaluma Script', 14).setReportWidth(false);
smo49236.addModifier(smo49237, 0);
smo49267v0ar.push(smo49236);
const smo49238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49238'] = smo49238;
smo49238.setAttribute('id', 'smo49238');
const smo49239 = new VF.Ornament('scoop');
smo49238.addModifier(smo49239, 0);
smo49267v0ar.push(smo49238);
const smo49240 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49240'] = smo49240;
smo49240.setAttribute('id', 'smo49240');
const smo492400acc = new VF.Accidental('b');
smo49240.addModifier(smo492400acc, 0);
smo49267v0ar.push(smo49240);
const smo49241 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49241'] = smo49241;
smo49241.setAttribute('id', 'smo49241');
smo49267v0ar.push(smo49241);
const smo49242 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49242'] = smo49242;
smo49242.setAttribute('id', 'smo49242');
smo49267v0ar.push(smo49242);
const smo49243 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49243'] = smo49243;
smo49243.setAttribute('id', 'smo49243');
smo49267v0ar.push(smo49243);
const smo49244 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49244'] = smo49244;
smo49244.setAttribute('id', 'smo49244');
smo49267v0ar.push(smo49244);
const smo49245 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
noteHash['smo49245'] = smo49245;
smo49245.setAttribute('id', 'smo49245');
smo49267v0ar.push(smo49245);
const smo49246 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49246'] = smo49246;
smo49246.setAttribute('id', 'smo49246');
const smo49248 = new VF.Ornament('scoop');
smo49246.addModifier(smo49248, 0);
const smo49247 = new VF.ChordSymbol();
smo49247.setAttribute('id', 'smo49247');
smo49247.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo49247.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3,"symbolType":2}'));
smo49247.setFont('Petaluma Script', 14).setReportWidth(false);
smo49246.addModifier(smo49247, 0);
smo49267v0ar.push(smo49246);
const smo49249 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49249'] = smo49249;
smo49249.setAttribute('id', 'smo49249');
smo49267v0ar.push(smo49249);
const smo49250 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49250'] = smo49250;
smo49250.setAttribute('id', 'smo49250');
smo49267v0ar.push(smo49250);
const smo49251 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49251'] = smo49251;
smo49251.setAttribute('id', 'smo49251');
smo49267v0ar.push(smo49251);
const smo49252 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo49252'] = smo49252;
smo49252.setAttribute('id', 'smo49252');
const smo492520acc = new VF.Accidental('n');
smo49252.addModifier(smo492520acc, 0);
smo49267v0ar.push(smo49252);
smo49267v0.addTickables(smo49267v0ar)
fmtsmo4926736.joinVoices([smo49267v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49845 = smo49238.getStemDirection();
smo49238.setStemDirection(dirsmo49845);
smo49240.setStemDirection(dirsmo49845);
const smo49845 = new VF.Beam([smo49238,smo49240]);
const dirsmo49846 = smo49241.getStemDirection();
smo49241.setStemDirection(dirsmo49846);
smo49242.setStemDirection(dirsmo49846);
smo49243.setStemDirection(dirsmo49846);
smo49244.setStemDirection(dirsmo49846);
const smo49846 = new VF.Beam([smo49241,smo49242,smo49243,smo49244]);
const dirsmo49847 = smo49246.getStemDirection();
smo49246.setStemDirection(dirsmo49847);
smo49249.setStemDirection(dirsmo49847);
const smo49847 = new VF.Beam([smo49246,smo49249]);
const dirsmo49848 = smo49250.getStemDirection();
smo49250.setStemDirection(dirsmo49848);
smo49251.setStemDirection(dirsmo49848);
smo49252.setStemDirection(dirsmo49848);
const smo49848 = new VF.Beam([smo49250,smo49251,smo49252]);
const smo49253 = new VF.Tuplet([smo49241,smo49242,smo49243], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo49493
fmtsmo4926736.format([smo49267v0], 405);
const stavesmo49267 = new VF.Stave(46, 1082.3846153846155, 488);
stavesmo49267.setAttribute('id', 'stavesmo49267');
stavesmo49267.setBegBarType(1);
stavesmo49267.addClef('treble');
const keysmo49267 = new VF.KeySignature('G');
keysmo49267.addToStave(stavesmo49267);
stavesmo49267.setContext(context);
stavesmo49267.draw();
smo49267v0.draw(context, stavesmo49267);
smo49845.setContext(context);
smo49845.draw();
smo49846.setContext(context);
smo49846.draw();
smo49847.setContext(context);
smo49847.draw();
smo49848.setContext(context);
smo49848.draw();
smo49253.setContext(context).draw();
const fmtsmo4930937 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo49309v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49309v0ar = [];
const smo49268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
noteHash['smo49268'] = smo49268;
smo49268.setAttribute('id', 'smo49268');
const smo49269 = new VF.ChordSymbol();
smo49269.setAttribute('id', 'smo49269');
smo49269.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo49269.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49269.setFont('Petaluma Script', 14).setReportWidth(false);
smo49268.addModifier(smo49269, 0);
smo49309v0ar.push(smo49268);
const smo49270 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo49270'] = smo49270;
smo49270.setAttribute('id', 'smo49270');
const smo492700acc = new VF.Accidental('b');
smo49270.addModifier(smo492700acc, 0);
smo49309v0ar.push(smo49270);
const smo49271 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo49271'] = smo49271;
smo49271.setAttribute('id', 'smo49271');
const smo492710acc = new VF.Accidental('b');
smo49271.addModifier(smo492710acc, 0);
smo49309v0ar.push(smo49271);
const smo49272 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo49272'] = smo49272;
smo49272.setAttribute('id', 'smo49272');
const smo492720acc = new VF.Accidental('b');
smo49272.addModifier(smo492720acc, 0);
smo49309v0ar.push(smo49272);
const smo49273 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo49273'] = smo49273;
smo49273.setAttribute('id', 'smo49273');
const smo492730acc = new VF.Accidental('n');
smo49273.addModifier(smo492730acc, 0);
smo49309v0ar.push(smo49273);
const smo49274 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49274'] = smo49274;
smo49274.setAttribute('id', 'smo49274');
const smo492740acc = new VF.Accidental('b');
smo49274.addModifier(smo492740acc, 0);
smo49309v0ar.push(smo49274);
const smo49275 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49275'] = smo49275;
smo49275.setAttribute('id', 'smo49275');
smo49309v0ar.push(smo49275);
const smo49276 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
noteHash['smo49276'] = smo49276;
smo49276.setAttribute('id', 'smo49276');
smo49309v0ar.push(smo49276);
const smo49277 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49277'] = smo49277;
smo49277.setAttribute('id', 'smo49277');
smo49309v0ar.push(smo49277);
const smo49278 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["an/4/r"]}'))
noteHash['smo49278'] = smo49278;
smo49278.setAttribute('id', 'smo49278');
smo49309v0ar.push(smo49278);
const smo49279 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49279'] = smo49279;
smo49279.setAttribute('id', 'smo49279');
smo49309v0ar.push(smo49279);
const smo49280 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo49280'] = smo49280;
smo49280.setAttribute('id', 'smo49280');
const smo492800acc = new VF.Accidental('#');
smo49280.addModifier(smo492800acc, 0);
const smo49281 = new VF.ChordSymbol();
smo49281.setAttribute('id', 'smo49281');
smo49281.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo49281.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49281.setFont('Petaluma Script', 14).setReportWidth(false);
smo49280.addModifier(smo49281, 0);
smo49309v0ar.push(smo49280);
const smo49282 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo49282'] = smo49282;
smo49282.setAttribute('id', 'smo49282');
smo49309v0ar.push(smo49282);
const smo49283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49283'] = smo49283;
smo49283.setAttribute('id', 'smo49283');
smo49309v0ar.push(smo49283);
const smo49284 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49284'] = smo49284;
smo49284.setAttribute('id', 'smo49284');
smo49309v0ar.push(smo49284);
const smo49285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo49285'] = smo49285;
smo49285.setAttribute('id', 'smo49285');
const smo492850acc = new VF.Accidental('b');
smo492850acc.setAsCautionary();
smo49285.addModifier(smo492850acc, 0);
smo49309v0ar.push(smo49285);
const smo49286 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo49286'] = smo49286;
smo49286.setAttribute('id', 'smo49286');
const smo492860acc = new VF.Accidental('n');
smo49286.addModifier(smo492860acc, 0);
smo49309v0ar.push(smo49286);
const smo49287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49287'] = smo49287;
smo49287.setAttribute('id', 'smo49287');
smo49309v0ar.push(smo49287);
const smo49288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49288'] = smo49288;
smo49288.setAttribute('id', 'smo49288');
smo49309v0ar.push(smo49288);
smo49309v0.addTickables(smo49309v0ar)
fmtsmo4930937.joinVoices([smo49309v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49851 = smo49271.getStemDirection();
smo49271.setStemDirection(dirsmo49851);
smo49272.setStemDirection(dirsmo49851);
smo49273.setStemDirection(dirsmo49851);
const smo49851 = new VF.Beam([smo49271,smo49272,smo49273]);
const dirsmo49852 = smo49274.getStemDirection();
smo49274.setStemDirection(dirsmo49852);
smo49275.setStemDirection(dirsmo49852);
smo49277.setStemDirection(dirsmo49852);
smo49279.setStemDirection(dirsmo49852);
const smo49852 = new VF.Beam([smo49274,smo49275,smo49277,smo49279]);
const dirsmo49853 = smo49280.getStemDirection();
smo49280.setStemDirection(dirsmo49853);
smo49282.setStemDirection(dirsmo49853);
smo49283.setStemDirection(dirsmo49853);
smo49284.setStemDirection(dirsmo49853);
const smo49853 = new VF.Beam([smo49280,smo49282,smo49283,smo49284]);
const dirsmo49854 = smo49285.getStemDirection();
smo49285.setStemDirection(dirsmo49854);
smo49286.setStemDirection(dirsmo49854);
smo49287.setStemDirection(dirsmo49854);
smo49288.setStemDirection(dirsmo49854);
const smo49854 = new VF.Beam([smo49285,smo49286,smo49287,smo49288]);
const smo49289 = new VF.Tuplet([smo49268,smo49270], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo49290 = new VF.Tuplet([smo49271,smo49272,smo49273], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo49291 = new VF.Tuplet([smo49274,smo49275,smo49276], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo49292 = new VF.Tuplet([smo49277,smo49278,smo49279], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo49293 = new VF.Tuplet([smo49282,smo49283,smo49284], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo49294 = new VF.Tuplet([smo49285,smo49286], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo49295 = new VF.Tuplet([smo49287,smo49288], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo49493
fmtsmo4930937.format([smo49309v0], 614);
const stavesmo49309 = new VF.Stave(534, 1082.3846153846155, 628);
stavesmo49309.setAttribute('id', 'stavesmo49309');
stavesmo49309.setBegBarType(VF.Barline.type.NONE);
stavesmo49309.setContext(context);
stavesmo49309.draw();
smo49309v0.draw(context, stavesmo49309);
smo49851.setContext(context);
smo49851.draw();
smo49852.setContext(context);
smo49852.draw();
smo49853.setContext(context);
smo49853.draw();
smo49854.setContext(context);
smo49854.draw();
smo49289.setContext(context).draw();
smo49290.setContext(context).draw();
smo49291.setContext(context).draw();
smo49292.setContext(context).draw();
smo49293.setContext(context).draw();
smo49294.setContext(context).draw();
smo49295.setContext(context).draw();
const fmtsmo4933838 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo49338v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49338v0ar = [];
const smo49310 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo49312 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo49312.setAttribute('id', 'smo49312');
const acc0smo49312 = new VF.Accidental('#');
smo49312.addModifier(acc0smo49312, 0)
const ggrpsmo49310 = new VF.GraceNoteGroup([smo49312]);
ggrpsmo49310.beamNotes();
smo49310.addModifier(ggrpsmo49310, 0);
noteHash['smo49310'] = smo49310;
smo49310.setAttribute('id', 'smo49310');
const smo49311 = new VF.ChordSymbol();
smo49311.setAttribute('id', 'smo49311');
smo49311.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49311.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49311.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49311.setFont('Petaluma Script', 14).setReportWidth(false);
smo49310.addModifier(smo49311, 0);
smo49338v0ar.push(smo49310);
const smo49313 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49313'] = smo49313;
smo49313.setAttribute('id', 'smo49313');
smo49338v0ar.push(smo49313);
const smo49314 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49314'] = smo49314;
smo49314.setAttribute('id', 'smo49314');
const smo493140acc = new VF.Accidental('b');
smo49314.addModifier(smo493140acc, 0);
smo49338v0ar.push(smo49314);
const smo49315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49315'] = smo49315;
smo49315.setAttribute('id', 'smo49315');
smo49338v0ar.push(smo49315);
const smo49316 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49316'] = smo49316;
smo49316.setAttribute('id', 'smo49316');
smo49338v0ar.push(smo49316);
const smo49317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo49318 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo49318.setAttribute('id', 'smo49318');
const acc0smo49318 = new VF.Accidental('#');
smo49318.addModifier(acc0smo49318, 0)
const ggrpsmo49317 = new VF.GraceNoteGroup([smo49318]);
ggrpsmo49317.beamNotes();
smo49317.addModifier(ggrpsmo49317, 0);
noteHash['smo49317'] = smo49317;
smo49317.setAttribute('id', 'smo49317');
smo49338v0ar.push(smo49317);
const smo49319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49319'] = smo49319;
smo49319.setAttribute('id', 'smo49319');
const smo49320 = new VF.ChordSymbol();
smo49320.setAttribute('id', 'smo49320');
smo49320.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo49320.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49320.setFont('Petaluma Script', 14).setReportWidth(false);
smo49319.addModifier(smo49320, 0);
smo49338v0ar.push(smo49319);
const smo49321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo49321'] = smo49321;
smo49321.setAttribute('id', 'smo49321');
const smo493210acc = new VF.Accidental('b');
smo49321.addModifier(smo493210acc, 0);
smo49338v0ar.push(smo49321);
const smo49322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo49322'] = smo49322;
smo49322.setAttribute('id', 'smo49322');
smo49338v0ar.push(smo49322);
const smo49323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49323'] = smo49323;
smo49323.setAttribute('id', 'smo49323');
smo49338v0ar.push(smo49323);
const smo49324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49324'] = smo49324;
smo49324.setAttribute('id', 'smo49324');
smo49338v0ar.push(smo49324);
smo49338v0.addTickables(smo49338v0ar)
fmtsmo4933838.joinVoices([smo49338v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49863 = smo49310.getStemDirection();
smo49310.setStemDirection(dirsmo49863);
smo49313.setStemDirection(dirsmo49863);
smo49314.setStemDirection(dirsmo49863);
const smo49863 = new VF.Beam([smo49310,smo49313,smo49314]);
const dirsmo49864 = smo49315.getStemDirection();
smo49315.setStemDirection(dirsmo49864);
smo49316.setStemDirection(dirsmo49864);
smo49317.setStemDirection(dirsmo49864);
const smo49864 = new VF.Beam([smo49315,smo49316,smo49317]);
const dirsmo49865 = smo49319.getStemDirection();
smo49319.setStemDirection(dirsmo49865);
smo49321.setStemDirection(dirsmo49865);
smo49322.setStemDirection(dirsmo49865);
const smo49865 = new VF.Beam([smo49319,smo49321,smo49322]);
const dirsmo49866 = smo49323.getStemDirection();
smo49323.setStemDirection(dirsmo49866);
smo49324.setStemDirection(dirsmo49866);
const smo49866 = new VF.Beam([smo49323,smo49324]);
 
// formatting measures in staff group smo49493
fmtsmo4933838.format([smo49338v0], 349);
const stavesmo49338 = new VF.Stave(46, 1233.3846153846155, 432);
stavesmo49338.setAttribute('id', 'stavesmo49338');
stavesmo49338.setBegBarType(1);
stavesmo49338.addClef('treble');
const keysmo49338 = new VF.KeySignature('G');
keysmo49338.addToStave(stavesmo49338);
stavesmo49338.setContext(context);
stavesmo49338.draw();
smo49338v0.draw(context, stavesmo49338);
smo49863.setContext(context);
smo49863.draw();
smo49864.setContext(context);
smo49864.draw();
smo49865.setContext(context);
smo49865.draw();
smo49866.setContext(context);
smo49866.draw();
const fmtsmo4936139 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo49361v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49361v0ar = [];
const smo49339 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49339'] = smo49339;
smo49339.setAttribute('id', 'smo49339');
const smo49340 = new VF.ChordSymbol();
smo49340.setAttribute('id', 'smo49340');
smo49340.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo49340.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49340.setFont('Petaluma Script', 14).setReportWidth(false);
smo49339.addModifier(smo49340, 0);
smo49361v0ar.push(smo49339);
const smo49341 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49341'] = smo49341;
smo49341.setAttribute('id', 'smo49341');
smo49361v0ar.push(smo49341);
const smo49342 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49342'] = smo49342;
smo49342.setAttribute('id', 'smo49342');
const smo49343 = new VF.ChordSymbol();
smo49343.setAttribute('id', 'smo49343');
smo49343.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1,"symbolType":2}'));
smo49343.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49343.setFont('Petaluma Script', 14).setReportWidth(false);
smo49342.addModifier(smo49343, 0);
smo49361v0ar.push(smo49342);
const smo49344 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo49344'] = smo49344;
smo49344.setAttribute('id', 'smo49344');
smo49361v0ar.push(smo49344);
const smo49345 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49345'] = smo49345;
smo49345.setAttribute('id', 'smo49345');
smo49361v0ar.push(smo49345);
const smo49346 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo49346'] = smo49346;
smo49346.setAttribute('id', 'smo49346');
const smo493460acc = new VF.Accidental('n');
smo49346.addModifier(smo493460acc, 0);
smo49361v0ar.push(smo49346);
const smo49347 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49347'] = smo49347;
smo49347.setAttribute('id', 'smo49347');
const smo493470acc = new VF.Accidental('b');
smo49347.addModifier(smo493470acc, 0);
smo49361v0ar.push(smo49347);
smo49361v0.addTickables(smo49361v0ar)
fmtsmo4936139.joinVoices([smo49361v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49869 = smo49342.getStemDirection();
smo49342.setStemDirection(dirsmo49869);
smo49344.setStemDirection(dirsmo49869);
smo49345.setStemDirection(dirsmo49869);
const smo49869 = new VF.Beam([smo49342,smo49344,smo49345]);
const dirsmo49870 = smo49346.getStemDirection();
smo49346.setStemDirection(dirsmo49870);
smo49347.setStemDirection(dirsmo49870);
const smo49870 = new VF.Beam([smo49346,smo49347]);
 
// formatting measures in staff group smo49493
fmtsmo4936139.format([smo49361v0], 240);
const stavesmo49361 = new VF.Stave(478, 1233.3846153846155, 254);
stavesmo49361.setAttribute('id', 'stavesmo49361');
stavesmo49361.setBegBarType(VF.Barline.type.NONE);
stavesmo49361.setContext(context);
stavesmo49361.draw();
smo49361v0.draw(context, stavesmo49361);
smo49869.setContext(context);
smo49869.draw();
smo49870.setContext(context);
smo49870.draw();
const fmtsmo4939140 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo49391v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49391v0ar = [];
const smo49362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49362'] = smo49362;
smo49362.setAttribute('id', 'smo49362');
const smo49363 = new VF.ChordSymbol();
smo49363.setAttribute('id', 'smo49363');
smo49363.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo49363.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49363.setFont('Petaluma Script', 14).setReportWidth(false);
smo49362.addModifier(smo49363, 0);
smo49391v0ar.push(smo49362);
const smo49364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49364'] = smo49364;
smo49364.setAttribute('id', 'smo49364');
smo49391v0ar.push(smo49364);
const smo49365 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo49365'] = smo49365;
smo49365.setAttribute('id', 'smo49365');
const smo493650acc = new VF.Accidental('b');
smo49365.addModifier(smo493650acc, 0);
smo49391v0ar.push(smo49365);
const smo49366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49366'] = smo49366;
smo49366.setAttribute('id', 'smo49366');
const smo493660acc = new VF.Accidental('n');
smo49366.addModifier(smo493660acc, 0);
smo49391v0ar.push(smo49366);
const smo49367 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo49367'] = smo49367;
smo49367.setAttribute('id', 'smo49367');
smo49391v0ar.push(smo49367);
const smo49368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n"]}'))
noteHash['smo49368'] = smo49368;
smo49368.setAttribute('id', 'smo49368');
const smo493680acc = new VF.Accidental('b');
smo49368.addModifier(smo493680acc, 0);
const smo49369 = new VF.ChordSymbol();
smo49369.setAttribute('id', 'smo49369');
smo49369.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo49369.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49369.setFont('Petaluma Script', 14).setReportWidth(false);
smo49368.addModifier(smo49369, 0);
smo49391v0ar.push(smo49368);
const smo49370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo49370'] = smo49370;
smo49370.setAttribute('id', 'smo49370');
const smo493700acc = new VF.Accidental('b');
smo49370.addModifier(smo493700acc, 0);
smo49391v0ar.push(smo49370);
const smo49371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49371'] = smo49371;
smo49371.setAttribute('id', 'smo49371');
const smo493710acc = new VF.Accidental('n');
smo49371.addModifier(smo493710acc, 0);
smo49391v0ar.push(smo49371);
const smo49372 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo49372'] = smo49372;
smo49372.setAttribute('id', 'smo49372');
const smo493720acc = new VF.Accidental('b');
smo49372.addModifier(smo493720acc, 0);
smo49391v0ar.push(smo49372);
const smo49373 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49373'] = smo49373;
smo49373.setAttribute('id', 'smo49373');
smo49391v0ar.push(smo49373);
const smo49374 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49374'] = smo49374;
smo49374.setAttribute('id', 'smo49374');
smo49391v0ar.push(smo49374);
const smo49375 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo49375'] = smo49375;
smo49375.setAttribute('id', 'smo49375');
smo49391v0ar.push(smo49375);
const smo49376 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49376'] = smo49376;
smo49376.setAttribute('id', 'smo49376');
const smo493760acc = new VF.Accidental('n');
smo49376.addModifier(smo493760acc, 0);
smo49391v0ar.push(smo49376);
const smo49377 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo49377'] = smo49377;
smo49377.setAttribute('id', 'smo49377');
smo49391v0ar.push(smo49377);
smo49391v0.addTickables(smo49391v0ar)
fmtsmo4939140.joinVoices([smo49391v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49873 = smo49364.getStemDirection();
smo49364.setStemDirection(dirsmo49873);
smo49365.setStemDirection(dirsmo49873);
smo49366.setStemDirection(dirsmo49873);
smo49367.setStemDirection(dirsmo49873);
const smo49873 = new VF.Beam([smo49364,smo49365,smo49366,smo49367]);
const dirsmo49874 = smo49368.getStemDirection();
smo49368.setStemDirection(dirsmo49874);
smo49370.setStemDirection(dirsmo49874);
smo49371.setStemDirection(dirsmo49874);
smo49372.setStemDirection(dirsmo49874);
smo49373.setStemDirection(dirsmo49874);
const smo49874 = new VF.Beam([smo49368,smo49370,smo49371,smo49372,smo49373]);
const dirsmo49875 = smo49374.getStemDirection();
smo49374.setStemDirection(dirsmo49875);
smo49375.setStemDirection(dirsmo49875);
smo49376.setStemDirection(dirsmo49875);
smo49377.setStemDirection(dirsmo49875);
const smo49875 = new VF.Beam([smo49374,smo49375,smo49376,smo49377]);
 
// formatting measures in staff group smo49493
fmtsmo4939140.format([smo49391v0], 417);
const stavesmo49391 = new VF.Stave(732, 1233.3846153846155, 431);
stavesmo49391.setAttribute('id', 'stavesmo49391');
stavesmo49391.setBegBarType(VF.Barline.type.NONE);
stavesmo49391.setContext(context);
stavesmo49391.draw();
smo49391v0.draw(context, stavesmo49391);
smo49873.setContext(context);
smo49873.draw();
smo49874.setContext(context);
smo49874.draw();
smo49875.setContext(context);
smo49875.draw();
const fmtsmo4942141 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo49421v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49421v0ar = [];
const smo49392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo49392'] = smo49392;
smo49392.setAttribute('id', 'smo49392');
const smo49393 = new VF.ChordSymbol();
smo49393.setAttribute('id', 'smo49393');
smo49393.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49393.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49393.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49393.setFont('Petaluma Script', 14).setReportWidth(false);
smo49392.addModifier(smo49393, 0);
smo49421v0ar.push(smo49392);
const smo49394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo49394'] = smo49394;
smo49394.setAttribute('id', 'smo49394');
smo49421v0ar.push(smo49394);
const smo49395 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49395'] = smo49395;
smo49395.setAttribute('id', 'smo49395');
smo49421v0ar.push(smo49395);
const smo49396 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49396'] = smo49396;
smo49396.setAttribute('id', 'smo49396');
const smo493960acc = new VF.Accidental('b');
smo49396.addModifier(smo493960acc, 0);
smo49421v0ar.push(smo49396);
const smo49397 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49397'] = smo49397;
smo49397.setAttribute('id', 'smo49397');
smo49421v0ar.push(smo49397);
const smo49398 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo49398'] = smo49398;
smo49398.setAttribute('id', 'smo49398');
smo49421v0ar.push(smo49398);
const smo49399 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49399'] = smo49399;
smo49399.setAttribute('id', 'smo49399');
smo49421v0ar.push(smo49399);
const smo49400 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49400'] = smo49400;
smo49400.setAttribute('id', 'smo49400');
smo49421v0ar.push(smo49400);
const smo49401 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49401'] = smo49401;
smo49401.setAttribute('id', 'smo49401');
smo49421v0ar.push(smo49401);
const smo49402 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo49402'] = smo49402;
smo49402.setAttribute('id', 'smo49402');
const smo49404 = new VF.Ornament('scoop');
smo49402.addModifier(smo49404, 0);
const smo49403 = new VF.ChordSymbol();
smo49403.setAttribute('id', 'smo49403');
smo49403.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo49403.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49403.setFont('Petaluma Script', 14).setReportWidth(false);
smo49402.addModifier(smo49403, 0);
smo49421v0ar.push(smo49402);
const smo49405 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49405'] = smo49405;
smo49405.setAttribute('id', 'smo49405');
smo49421v0ar.push(smo49405);
const smo49406 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo49406'] = smo49406;
smo49406.setAttribute('id', 'smo49406');
smo49421v0ar.push(smo49406);
smo49421v0.addTickables(smo49421v0ar)
fmtsmo4942141.joinVoices([smo49421v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49883 = smo49392.getStemDirection();
smo49392.setStemDirection(dirsmo49883);
smo49394.setStemDirection(dirsmo49883);
smo49395.setStemDirection(dirsmo49883);
smo49396.setStemDirection(dirsmo49883);
const smo49883 = new VF.Beam([smo49392,smo49394,smo49395,smo49396]);
const dirsmo49884 = smo49397.getStemDirection();
smo49397.setStemDirection(dirsmo49884);
smo49398.setStemDirection(dirsmo49884);
smo49399.setStemDirection(dirsmo49884);
smo49400.setStemDirection(dirsmo49884);
smo49401.setStemDirection(dirsmo49884);
const smo49884 = new VF.Beam([smo49397,smo49398,smo49399,smo49400,smo49401]);
const dirsmo49885 = smo49402.getStemDirection();
smo49402.setStemDirection(dirsmo49885);
smo49405.setStemDirection(dirsmo49885);
const smo49885 = new VF.Beam([smo49402,smo49405]);
const smo49407 = new VF.Tuplet([smo49397,smo49398,smo49399], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo49493
fmtsmo4942141.format([smo49421v0], 294);
const stavesmo49421 = new VF.Stave(46, 1379.3846153846155, 377);
stavesmo49421.setAttribute('id', 'stavesmo49421');
stavesmo49421.setBegBarType(1);
stavesmo49421.addClef('treble');
const keysmo49421 = new VF.KeySignature('G');
keysmo49421.addToStave(stavesmo49421);
stavesmo49421.setContext(context);
stavesmo49421.draw();
smo49421v0.draw(context, stavesmo49421);
smo49883.setContext(context);
smo49883.draw();
smo49884.setContext(context);
smo49884.draw();
smo49885.setContext(context);
smo49885.draw();
smo49407.setContext(context).draw();
const fmtsmo4945142 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo49451v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49451v0ar = [];
const smo49422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49422'] = smo49422;
smo49422.setAttribute('id', 'smo49422');
smo49451v0ar.push(smo49422);
const smo49423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo49423'] = smo49423;
smo49423.setAttribute('id', 'smo49423');
const smo49424 = new VF.ChordSymbol();
smo49424.setAttribute('id', 'smo49424');
smo49424.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo49424.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo49424.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49424.setFont('Petaluma Script', 14).setReportWidth(false);
smo49423.addModifier(smo49424, 0);
smo49451v0ar.push(smo49423);
const smo49425 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49425'] = smo49425;
smo49425.setAttribute('id', 'smo49425');
smo49451v0ar.push(smo49425);
const smo49426 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo49426'] = smo49426;
smo49426.setAttribute('id', 'smo49426');
const smo494260acc = new VF.Accidental('b');
smo49426.addModifier(smo494260acc, 0);
smo49451v0ar.push(smo49426);
const smo49427 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo49427'] = smo49427;
smo49427.setAttribute('id', 'smo49427');
smo49451v0ar.push(smo49427);
const smo49428 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo49428'] = smo49428;
smo49428.setAttribute('id', 'smo49428');
smo49451v0ar.push(smo49428);
const smo49429 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo49429'] = smo49429;
smo49429.setAttribute('id', 'smo49429');
smo49451v0ar.push(smo49429);
const smo49430 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo49430'] = smo49430;
smo49430.setAttribute('id', 'smo49430');
smo49451v0ar.push(smo49430);
const smo49431 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo49431'] = smo49431;
smo49431.setAttribute('id', 'smo49431');
const smo49432 = new VF.ChordSymbol();
smo49432.setAttribute('id', 'smo49432');
smo49432.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo49432.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo49432.setFont('Petaluma Script', 14).setReportWidth(false);
smo49431.addModifier(smo49432, 0);
smo49451v0ar.push(smo49431);
const smo49433 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo49433'] = smo49433;
smo49433.setAttribute('id', 'smo49433');
smo49451v0ar.push(smo49433);
const smo49434 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49434'] = smo49434;
smo49434.setAttribute('id', 'smo49434');
smo49451v0ar.push(smo49434);
const smo49435 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo49435'] = smo49435;
smo49435.setAttribute('id', 'smo49435');
smo49451v0ar.push(smo49435);
const smo49436 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo49436'] = smo49436;
smo49436.setAttribute('id', 'smo49436');
smo49451v0ar.push(smo49436);
const smo49437 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo49437'] = smo49437;
smo49437.setAttribute('id', 'smo49437');
smo49451v0ar.push(smo49437);
smo49451v0.addTickables(smo49451v0ar)
fmtsmo4945142.joinVoices([smo49451v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
const dirsmo49888 = smo49427.getStemDirection();
smo49427.setStemDirection(dirsmo49888);
smo49428.setStemDirection(dirsmo49888);
smo49429.setStemDirection(dirsmo49888);
smo49430.setStemDirection(dirsmo49888);
const smo49888 = new VF.Beam([smo49427,smo49428,smo49429,smo49430]);
const dirsmo49889 = smo49431.getStemDirection();
smo49431.setStemDirection(dirsmo49889);
smo49433.setStemDirection(dirsmo49889);
smo49434.setStemDirection(dirsmo49889);
const smo49889 = new VF.Beam([smo49431,smo49433,smo49434]);
 
// formatting measures in staff group smo49493
fmtsmo4945142.format([smo49451v0], 310);
const stavesmo49451 = new VF.Stave(423, 1379.3846153846155, 325);
stavesmo49451.setAttribute('id', 'stavesmo49451');
stavesmo49451.setBegBarType(VF.Barline.type.NONE);
stavesmo49451.setEndBarType(2);
stavesmo49451.setContext(context);
stavesmo49451.draw();
smo49451v0.draw(context, stavesmo49451);
smo49888.setContext(context);
smo49888.draw();
smo49889.setContext(context);
smo49889.draw();
const fmtsmo4946943 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo49469v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo49469v0ar = [];
const smo49452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo49452'] = smo49452;
smo49452.setAttribute('id', 'smo49452');
smo49469v0ar.push(smo49452);
const smo49453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49453'] = smo49453;
smo49453.setAttribute('id', 'smo49453');
smo49469v0ar.push(smo49453);
const smo49454 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49454'] = smo49454;
smo49454.setAttribute('id', 'smo49454');
smo49469v0ar.push(smo49454);
const smo49455 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo49455'] = smo49455;
smo49455.setAttribute('id', 'smo49455');
smo49469v0ar.push(smo49455);
smo49469v0.addTickables(smo49469v0ar)
fmtsmo4946943.joinVoices([smo49469v0]);
// create beam groups and tuplets for format grp smo49493 before formatting
 
// formatting measures in staff group smo49493
fmtsmo4946943.format([smo49469v0], 194);
const stavesmo49469 = new VF.Stave(748, 1379.3846153846155, 208);
stavesmo49469.setAttribute('id', 'stavesmo49469');
stavesmo49469.setBegBarType(VF.Barline.type.NONE);
stavesmo49469.setContext(context);
stavesmo49469.draw();
smo49469v0.draw(context, stavesmo49469);
const smo49470 = new VF.Curve(smo49251, smo49252, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"position_end":2}'));
smo49470.setContext(context).draw();
const smo49471 = new VF.StaveTie({ first_note: smo49249, last_note: smo49250, first_indices: [0], last_indices: [0]});
smo49471.setContext(context).draw();
const smo49474 = new VF.StaveTie({ first_note: smo48914, last_note: smo48917, first_indices: [0], last_indices: [0]});
smo49474.setContext(context).draw();
const smo49475 = new VF.StaveTie({ first_note: smo48920, last_note: smo48921, first_indices: [0], last_indices: [0]});
smo49475.setContext(context).draw();
const smo49476 = new VF.StaveTie({ first_note: smo48952, last_note: smo48953, first_indices: [0], last_indices: [0]});
smo49476.setContext(context).draw();
const smo49491 = new VF.StaveTie({ first_note: smo49038, last_note: smo49039, first_indices: [0], last_indices: [0]});
smo49491.setContext(context).draw();
}
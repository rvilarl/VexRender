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
const fmtsmo37698425 = new VF.Formatter();
//
// voices and notes for stave 0 25
const smo376984v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo376984v0ar = [];
const smo376950 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo376950'] = smo376950;
smo376950.setAttribute('id', 'smo376950');
const smo3769500acc = new VF.Accidental('b');
smo376950.addModifier(smo3769500acc, 0);
const smo376951 = new VF.ChordSymbol();
smo376951.setAttribute('id', 'smo376951');
smo376951.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo376951.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo376951.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo376951.setFont('Petaluma Script', 14).setReportWidth(false);
smo376950.addModifier(smo376951, 0);
smo376984v0ar.push(smo376950);
const smo376952 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo376952'] = smo376952;
smo376952.setAttribute('id', 'smo376952');
smo376984v0ar.push(smo376952);
const smo376953 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo376953'] = smo376953;
smo376953.setAttribute('id', 'smo376953');
const smo3769530acc = new VF.Accidental('b');
smo376953.addModifier(smo3769530acc, 0);
smo376984v0ar.push(smo376953);
const smo376954 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376954'] = smo376954;
smo376954.setAttribute('id', 'smo376954');
smo376984v0ar.push(smo376954);
const smo376955 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
noteHash['smo376955'] = smo376955;
smo376955.setAttribute('id', 'smo376955');
smo376984v0ar.push(smo376955);
const smo376956 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376956'] = smo376956;
smo376956.setAttribute('id', 'smo376956');
smo376984v0ar.push(smo376956);
const smo376957 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo376957'] = smo376957;
smo376957.setAttribute('id', 'smo376957');
const smo376958 = new VF.ChordSymbol();
smo376958.setAttribute('id', 'smo376958');
smo376958.setFont('Petaluma Script', 14).setReportWidth(false);
smo376957.addModifier(smo376958, 0);
smo376984v0ar.push(smo376957);
const smo376959 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376959'] = smo376959;
smo376959.setAttribute('id', 'smo376959');
const smo376960 = new VF.ChordSymbol();
smo376960.setAttribute('id', 'smo376960');
smo376960.setFont('Petaluma Script', 14).setReportWidth(false);
smo376959.addModifier(smo376960, 0);
smo376984v0ar.push(smo376959);
const smo376961 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo376961'] = smo376961;
smo376961.setAttribute('id', 'smo376961');
const smo376963 = new VF.Ornament('scoop');
smo376961.addModifier(smo376963, 0);
const smo376962 = new VF.ChordSymbol();
smo376962.setAttribute('id', 'smo376962');
smo376962.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo376962.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo376962.setFont('Petaluma Script', 14).setReportWidth(false);
smo376961.addModifier(smo376962, 0);
smo376984v0ar.push(smo376961);
const smo376964 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo376964'] = smo376964;
smo376964.setAttribute('id', 'smo376964');
smo376984v0ar.push(smo376964);
const smo376965 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376965'] = smo376965;
smo376965.setAttribute('id', 'smo376965');
smo376984v0ar.push(smo376965);
const smo376966 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo376966'] = smo376966;
smo376966.setAttribute('id', 'smo376966');
smo376984v0ar.push(smo376966);
const smo376967 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376967'] = smo376967;
smo376967.setAttribute('id', 'smo376967');
smo376984v0ar.push(smo376967);
const smo376968 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376968'] = smo376968;
smo376968.setAttribute('id', 'smo376968');
smo376984v0ar.push(smo376968);
const smo376969 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
noteHash['smo376969'] = smo376969;
smo376969.setAttribute('id', 'smo376969');
const smo376970 = new VF.ChordSymbol();
smo376970.setAttribute('id', 'smo376970');
smo376970.setFont('Petaluma Script', 14).setReportWidth(false);
smo376969.addModifier(smo376970, 0);
smo376984v0ar.push(smo376969);
smo376984v0.addTickables(smo376984v0ar)
fmtsmo37698425.joinVoices([smo376984v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377808 = smo376950.getStemDirection();
smo376950.setStemDirection(dirsmo377808);
smo376952.setStemDirection(dirsmo377808);
smo376953.setStemDirection(dirsmo377808);
smo376954.setStemDirection(dirsmo377808);
const smo377808 = new VF.Beam([smo376950,smo376952,smo376953,smo376954,smo376955]);
const dirsmo377809 = smo376956.getStemDirection();
smo376956.setStemDirection(dirsmo377809);
smo376957.setStemDirection(dirsmo377809);
smo376959.setStemDirection(dirsmo377809);
smo376961.setStemDirection(dirsmo377809);
const smo377809 = new VF.Beam([smo376956,smo376957,smo376959,smo376961]);
const dirsmo377810 = smo376964.getStemDirection();
smo376964.setStemDirection(dirsmo377810);
smo376965.setStemDirection(dirsmo377810);
smo376966.setStemDirection(dirsmo377810);
smo376967.setStemDirection(dirsmo377810);
const smo377810 = new VF.Beam([smo376964,smo376965,smo376966,smo376967]);
 
// formatting measures in staff group smo377540
fmtsmo37698425.format([smo376984v0], 523);
const stavesmo376984 = new VF.Stave(46, 276.3846153846155, 607);
stavesmo376984.setAttribute('id', 'stavesmo376984');
stavesmo376984.setBegBarType(1);
stavesmo376984.addClef('treble');
const keysmo376984 = new VF.KeySignature('G');
keysmo376984.addToStave(stavesmo376984);
stavesmo376984.setContext(context);
stavesmo376984.draw();
smo376984v0.draw(context, stavesmo376984);
smo377808.setContext(context);
smo377808.draw();
smo377809.setContext(context);
smo377809.draw();
smo377810.setContext(context);
smo377810.draw();
const fmtsmo37701626 = new VF.Formatter();
//
// voices and notes for stave 0 26
const smo377016v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377016v0ar = [];
const smo376985 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo376985'] = smo376985;
smo376985.setAttribute('id', 'smo376985');
const smo376986 = new VF.ChordSymbol();
smo376986.setAttribute('id', 'smo376986');
smo376986.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo376986.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo376986.setFont('Petaluma Script', 14).setReportWidth(false);
smo376985.addModifier(smo376986, 0);
smo377016v0ar.push(smo376985);
const smo376987 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo376987'] = smo376987;
smo376987.setAttribute('id', 'smo376987');
smo377016v0ar.push(smo376987);
const smo376988 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo376988'] = smo376988;
smo376988.setAttribute('id', 'smo376988');
smo377016v0ar.push(smo376988);
const smo376989 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo376989'] = smo376989;
smo376989.setAttribute('id', 'smo376989');
const smo3769890acc = new VF.Accidental('n');
smo376989.addModifier(smo3769890acc, 0);
smo377016v0ar.push(smo376989);
const smo376990 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo376990'] = smo376990;
smo376990.setAttribute('id', 'smo376990');
const smo3769900acc = new VF.Accidental('b');
smo376990.addModifier(smo3769900acc, 0);
const smo376991 = new VF.ChordSymbol();
smo376991.setAttribute('id', 'smo376991');
smo376991.setFont('Petaluma Script', 14).setReportWidth(false);
smo376990.addModifier(smo376991, 0);
smo377016v0ar.push(smo376990);
const smo376992 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo376992'] = smo376992;
smo376992.setAttribute('id', 'smo376992');
smo377016v0ar.push(smo376992);
const smo376993 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo376993'] = smo376993;
smo376993.setAttribute('id', 'smo376993');
smo377016v0ar.push(smo376993);
const smo376994 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
const smo376996 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["bn/4"],"slash":true}'))
smo376996.setAttribute('id', 'smo376996');
const ggrpsmo376994 = new VF.GraceNoteGroup([smo376996]);
ggrpsmo376994.beamNotes();
smo376994.addModifier(ggrpsmo376994, 0);
noteHash['smo376994'] = smo376994;
smo376994.setAttribute('id', 'smo376994');
const smo376995 = new VF.ChordSymbol();
smo376995.setAttribute('id', 'smo376995');
smo376995.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1,"symbolType":2}'));
smo376995.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo376995.setFont('Petaluma Script', 14).setReportWidth(false);
smo376994.addModifier(smo376995, 0);
smo377016v0ar.push(smo376994);
const smo376997 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo376997'] = smo376997;
smo376997.setAttribute('id', 'smo376997');
const smo3769970acc = new VF.Accidental('b');
smo376997.addModifier(smo3769970acc, 0);
smo377016v0ar.push(smo376997);
const smo376998 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo376998'] = smo376998;
smo376998.setAttribute('id', 'smo376998');
smo377016v0ar.push(smo376998);
const smo376999 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo376999'] = smo376999;
smo376999.setAttribute('id', 'smo376999');
smo377016v0ar.push(smo376999);
const smo377000 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377000'] = smo377000;
smo377000.setAttribute('id', 'smo377000');
smo377016v0ar.push(smo377000);
const smo377001 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
noteHash['smo377001'] = smo377001;
smo377001.setAttribute('id', 'smo377001');
smo377016v0ar.push(smo377001);
smo377016v0.addTickables(smo377016v0ar)
fmtsmo37701626.joinVoices([smo377016v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377813 = smo376987.getStemDirection();
smo376987.setStemDirection(dirsmo377813);
smo376988.setStemDirection(dirsmo377813);
const smo377813 = new VF.Beam([smo376987,smo376988]);
const dirsmo377814 = smo376989.getStemDirection();
smo376989.setStemDirection(dirsmo377814);
smo376990.setStemDirection(dirsmo377814);
smo376992.setStemDirection(dirsmo377814);
smo376993.setStemDirection(dirsmo377814);
const smo377814 = new VF.Beam([smo376989,smo376990,smo376992,smo376993]);
const dirsmo377815 = smo376994.getStemDirection();
smo376994.setStemDirection(dirsmo377815);
smo376997.setStemDirection(dirsmo377815);
smo376998.setStemDirection(dirsmo377815);
smo376999.setStemDirection(dirsmo377815);
const smo377815 = new VF.Beam([smo376994,smo376997,smo376998,smo376999]);
const smo377002 = new VF.Tuplet([smo376997,smo376998,smo376999], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo377540
fmtsmo37701626.format([smo377016v0], 496);
const stavesmo377016 = new VF.Stave(653, 276.3846153846155, 510);
stavesmo377016.setAttribute('id', 'stavesmo377016');
stavesmo377016.setBegBarType(VF.Barline.type.NONE);
stavesmo377016.setContext(context);
stavesmo377016.draw();
smo377016v0.draw(context, stavesmo377016);
smo377813.setContext(context);
smo377813.draw();
smo377814.setContext(context);
smo377814.draw();
smo377815.setContext(context);
smo377815.draw();
smo377002.setContext(context).draw();
const fmtsmo37704927 = new VF.Formatter();
//
// voices and notes for stave 0 27
const smo377049v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377049v0ar = [];
const smo377017 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["c#/5/r"]}'))
noteHash['smo377017'] = smo377017;
smo377017.setAttribute('id', 'smo377017');
const smo377018 = new VF.ChordSymbol();
smo377018.setAttribute('id', 'smo377018');
smo377018.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo377018.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377018.setFont('Petaluma Script', 14).setReportWidth(false);
smo377017.addModifier(smo377018, 0);
smo377049v0ar.push(smo377017);
const smo377019 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo377019'] = smo377019;
smo377019.setAttribute('id', 'smo377019');
const smo3770190acc = new VF.Accidental('b');
smo377019.addModifier(smo3770190acc, 0);
smo377019.addModifier(new VF.Dot(), 0);
smo377049v0ar.push(smo377019);
const smo377020 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377020'] = smo377020;
smo377020.setAttribute('id', 'smo377020');
const smo3770200acc = new VF.Accidental('b');
smo377020.addModifier(smo3770200acc, 0);
smo377049v0ar.push(smo377020);
const smo377021 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377021'] = smo377021;
smo377021.setAttribute('id', 'smo377021');
smo377049v0ar.push(smo377021);
const smo377022 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377022'] = smo377022;
smo377022.setAttribute('id', 'smo377022');
smo377049v0ar.push(smo377022);
const smo377023 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377023'] = smo377023;
smo377023.setAttribute('id', 'smo377023');
const smo377024 = new VF.ChordSymbol();
smo377024.setAttribute('id', 'smo377024');
smo377024.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo377024.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377024.setFont('Petaluma Script', 14).setReportWidth(false);
smo377023.addModifier(smo377024, 0);
smo377049v0ar.push(smo377023);
const smo377025 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377025'] = smo377025;
smo377025.setAttribute('id', 'smo377025');
smo377049v0ar.push(smo377025);
const smo377026 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377026'] = smo377026;
smo377026.setAttribute('id', 'smo377026');
smo377049v0ar.push(smo377026);
const smo377027 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377027'] = smo377027;
smo377027.setAttribute('id', 'smo377027');
smo377049v0ar.push(smo377027);
const smo377028 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377028'] = smo377028;
smo377028.setAttribute('id', 'smo377028');
const smo3770280acc = new VF.Accidental('n');
smo377028.addModifier(smo3770280acc, 0);
smo377049v0ar.push(smo377028);
const smo377029 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo377029'] = smo377029;
smo377029.setAttribute('id', 'smo377029');
const smo3770290acc = new VF.Accidental('#');
smo377029.addModifier(smo3770290acc, 0);
smo377049v0ar.push(smo377029);
const smo377030 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377030'] = smo377030;
smo377030.setAttribute('id', 'smo377030');
smo377049v0ar.push(smo377030);
const smo377031 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377031'] = smo377031;
smo377031.setAttribute('id', 'smo377031');
smo377049v0ar.push(smo377031);
const smo377032 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo377032'] = smo377032;
smo377032.setAttribute('id', 'smo377032');
smo377049v0ar.push(smo377032);
const smo377033 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo377033'] = smo377033;
smo377033.setAttribute('id', 'smo377033');
const smo3770330acc = new VF.Accidental('n');
smo377033.addModifier(smo3770330acc, 0);
smo377049v0ar.push(smo377033);
smo377049v0.addTickables(smo377049v0ar)
fmtsmo37704927.joinVoices([smo377049v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377823 = smo377020.getStemDirection();
smo377020.setStemDirection(dirsmo377823);
smo377021.setStemDirection(dirsmo377823);
smo377022.setStemDirection(dirsmo377823);
const smo377823 = new VF.Beam([smo377020,smo377021,smo377022]);
const dirsmo377824 = smo377023.getStemDirection();
smo377023.setStemDirection(dirsmo377824);
smo377025.setStemDirection(dirsmo377824);
smo377026.setStemDirection(dirsmo377824);
smo377027.setStemDirection(dirsmo377824);
smo377028.setStemDirection(dirsmo377824);
const smo377824 = new VF.Beam([smo377023,smo377025,smo377026,smo377027,smo377028]);
const dirsmo377825 = smo377029.getStemDirection();
smo377029.setStemDirection(dirsmo377825);
smo377030.setStemDirection(dirsmo377825);
smo377031.setStemDirection(dirsmo377825);
smo377032.setStemDirection(dirsmo377825);
smo377033.setStemDirection(dirsmo377825);
const smo377825 = new VF.Beam([smo377029,smo377030,smo377031,smo377032,smo377033]);
const smo377034 = new VF.Tuplet([smo377023,smo377025,smo377026], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo377035 = new VF.Tuplet([smo377029,smo377030,smo377031], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo377540
fmtsmo37704927.format([smo377049v0], 581);
const stavesmo377049 = new VF.Stave(46, 417.3846153846155, 665);
stavesmo377049.setAttribute('id', 'stavesmo377049');
stavesmo377049.setBegBarType(1);
stavesmo377049.addClef('treble');
const keysmo377049 = new VF.KeySignature('G');
keysmo377049.addToStave(stavesmo377049);
stavesmo377049.setContext(context);
stavesmo377049.draw();
smo377049v0.draw(context, stavesmo377049);
smo377823.setContext(context);
smo377823.draw();
smo377824.setContext(context);
smo377824.draw();
smo377825.setContext(context);
smo377825.draw();
smo377034.setContext(context).draw();
smo377035.setContext(context).draw();
const fmtsmo37708128 = new VF.Formatter();
//
// voices and notes for stave 0 28
const smo377081v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377081v0ar = [];
const smo377050 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377050'] = smo377050;
smo377050.setAttribute('id', 'smo377050');
const smo377051 = new VF.ChordSymbol();
smo377051.setAttribute('id', 'smo377051');
smo377051.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377051.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377051.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377051.setFont('Petaluma Script', 14).setReportWidth(false);
smo377050.addModifier(smo377051, 0);
smo377081v0ar.push(smo377050);
const smo377052 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
noteHash['smo377052'] = smo377052;
smo377052.setAttribute('id', 'smo377052');
smo377081v0ar.push(smo377052);
const smo377053 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377053'] = smo377053;
smo377053.setAttribute('id', 'smo377053');
smo377081v0ar.push(smo377053);
const smo377054 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377054'] = smo377054;
smo377054.setAttribute('id', 'smo377054');
smo377081v0ar.push(smo377054);
const smo377055 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377055'] = smo377055;
smo377055.setAttribute('id', 'smo377055');
const smo377056 = new VF.ChordSymbol();
smo377056.setAttribute('id', 'smo377056');
smo377056.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo377056.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377056.setFont('Petaluma Script', 14).setReportWidth(false);
smo377055.addModifier(smo377056, 0);
smo377081v0ar.push(smo377055);
const smo377057 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377057'] = smo377057;
smo377057.setAttribute('id', 'smo377057');
smo377081v0ar.push(smo377057);
const smo377058 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo377059 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["c#/5"],"slash":true}'))
smo377059.setAttribute('id', 'smo377059');
const acc0smo377059 = new VF.Accidental('#');
smo377059.addModifier(acc0smo377059, 0)
const ggrpsmo377058 = new VF.GraceNoteGroup([smo377059]);
ggrpsmo377058.beamNotes();
smo377058.addModifier(ggrpsmo377058, 0);
noteHash['smo377058'] = smo377058;
smo377058.setAttribute('id', 'smo377058');
smo377081v0ar.push(smo377058);
const smo377060 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["dn/5/r"]}'))
noteHash['smo377060'] = smo377060;
smo377060.setAttribute('id', 'smo377060');
smo377081v0ar.push(smo377060);
const smo377061 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377061'] = smo377061;
smo377061.setAttribute('id', 'smo377061');
smo377081v0ar.push(smo377061);
const smo377062 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377062'] = smo377062;
smo377062.setAttribute('id', 'smo377062');
const smo3770620acc = new VF.Accidental('b');
smo377062.addModifier(smo3770620acc, 0);
smo377081v0ar.push(smo377062);
const smo377063 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377063'] = smo377063;
smo377063.setAttribute('id', 'smo377063');
smo377081v0ar.push(smo377063);
const smo377064 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377064'] = smo377064;
smo377064.setAttribute('id', 'smo377064');
smo377081v0ar.push(smo377064);
smo377081v0.addTickables(smo377081v0ar)
fmtsmo37708128.joinVoices([smo377081v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377828 = smo377053.getStemDirection();
smo377053.setStemDirection(dirsmo377828);
smo377054.setStemDirection(dirsmo377828);
const smo377828 = new VF.Beam([smo377053,smo377054]);
const dirsmo377829 = smo377055.getStemDirection();
smo377055.setStemDirection(dirsmo377829);
smo377057.setStemDirection(dirsmo377829);
const smo377829 = new VF.Beam([smo377055,smo377057]);
const dirsmo377830 = smo377058.getStemDirection();
smo377058.setStemDirection(dirsmo377830);
smo377061.setStemDirection(dirsmo377830);
smo377062.setStemDirection(dirsmo377830);
smo377063.setStemDirection(dirsmo377830);
smo377064.setStemDirection(dirsmo377830);
const smo377830 = new VF.Beam([smo377058,smo377061,smo377062,smo377063,smo377064]);
const smo377065 = new VF.Tuplet([smo377052,smo377053,smo377054], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo377066 = new VF.Tuplet([smo377058,smo377060,smo377061], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo377067 = new VF.Tuplet([smo377062,smo377063,smo377064], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo377540
fmtsmo37708128.format([smo377081v0], 437);
const stavesmo377081 = new VF.Stave(711, 417.3846153846155, 451);
stavesmo377081.setAttribute('id', 'stavesmo377081');
stavesmo377081.setBegBarType(VF.Barline.type.NONE);
stavesmo377081.setContext(context);
stavesmo377081.draw();
smo377081v0.draw(context, stavesmo377081);
smo377828.setContext(context);
smo377828.draw();
smo377829.setContext(context);
smo377829.draw();
smo377830.setContext(context);
smo377830.draw();
smo377065.setContext(context).draw();
smo377066.setContext(context).draw();
smo377067.setContext(context).draw();
const fmtsmo37710629 = new VF.Formatter();
//
// voices and notes for stave 0 29
const smo377106v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377106v0ar = [];
const smo377082 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
const smo377084 = new VF.GraceNote(JSON.parse('{"duration":"8","keys":["an/4"],"slash":true}'))
smo377084.setAttribute('id', 'smo377084');
const ggrpsmo377082 = new VF.GraceNoteGroup([smo377084]);
ggrpsmo377082.beamNotes();
smo377082.addModifier(ggrpsmo377082, 0);
noteHash['smo377082'] = smo377082;
smo377082.setAttribute('id', 'smo377082');
const smo377083 = new VF.ChordSymbol();
smo377083.setAttribute('id', 'smo377083');
smo377083.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377083.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377083.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377083.setFont('Petaluma Script', 14).setReportWidth(false);
smo377082.addModifier(smo377083, 0);
smo377106v0ar.push(smo377082);
const smo377085 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377085'] = smo377085;
smo377085.setAttribute('id', 'smo377085');
smo377106v0ar.push(smo377085);
const smo377086 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377086'] = smo377086;
smo377086.setAttribute('id', 'smo377086');
smo377106v0ar.push(smo377086);
const smo377087 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377087'] = smo377087;
smo377087.setAttribute('id', 'smo377087');
const smo377088 = new VF.ChordSymbol();
smo377088.setAttribute('id', 'smo377088');
smo377088.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo377088.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377088.setFont('Petaluma Script', 14).setReportWidth(false);
smo377087.addModifier(smo377088, 0);
smo377106v0ar.push(smo377087);
const smo377089 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/6/n"]}'))
noteHash['smo377089'] = smo377089;
smo377089.setAttribute('id', 'smo377089');
smo377106v0ar.push(smo377089);
const smo377090 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo377090'] = smo377090;
smo377090.setAttribute('id', 'smo377090');
const smo3770900acc = new VF.Accidental('b');
smo377090.addModifier(smo3770900acc, 0);
smo377106v0ar.push(smo377090);
const smo377091 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377091'] = smo377091;
smo377091.setAttribute('id', 'smo377091');
smo377106v0ar.push(smo377091);
const smo377092 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377092'] = smo377092;
smo377092.setAttribute('id', 'smo377092');
smo377106v0ar.push(smo377092);
smo377106v0.addTickables(smo377106v0ar)
fmtsmo37710629.joinVoices([smo377106v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377836 = smo377082.getStemDirection();
smo377082.setStemDirection(dirsmo377836);
smo377085.setStemDirection(dirsmo377836);
const smo377836 = new VF.Beam([smo377082,smo377085]);
const dirsmo377837 = smo377089.getStemDirection();
smo377089.setStemDirection(dirsmo377837);
smo377090.setStemDirection(dirsmo377837);
smo377091.setStemDirection(dirsmo377837);
smo377092.setStemDirection(dirsmo377837);
const smo377837 = new VF.Beam([smo377089,smo377090,smo377091,smo377092]);
 
// formatting measures in staff group smo377540
fmtsmo37710629.format([smo377106v0], 306);
const stavesmo377106 = new VF.Stave(46, 578.3846153846155, 390);
stavesmo377106.setAttribute('id', 'stavesmo377106');
stavesmo377106.setBegBarType(1);
stavesmo377106.setEndBarType(2);
stavesmo377106.addClef('treble');
const keysmo377106 = new VF.KeySignature('G');
keysmo377106.addToStave(stavesmo377106);
stavesmo377106.setContext(context);
stavesmo377106.draw();
smo377106v0.draw(context, stavesmo377106);
smo377836.setContext(context);
smo377836.draw();
smo377837.setContext(context);
smo377837.draw();
const fmtsmo37713030 = new VF.Formatter();
//
// voices and notes for stave 0 30
const smo377130v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377130v0ar = [];
const smo377107 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo377107'] = smo377107;
smo377107.setAttribute('id', 'smo377107');
const smo377108 = new VF.ChordSymbol();
smo377108.setAttribute('id', 'smo377108');
smo377108.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377108.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377108.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377108.setFont('Petaluma Script', 14).setReportWidth(false);
smo377107.addModifier(smo377108, 0);
smo377130v0ar.push(smo377107);
const smo377109 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377109'] = smo377109;
smo377109.setAttribute('id', 'smo377109');
smo377109.addModifier(new VF.Dot(), 0);
smo377130v0ar.push(smo377109);
const smo377110 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo377110'] = smo377110;
smo377110.setAttribute('id', 'smo377110');
const smo3771100acc = new VF.Accidental('n');
smo377110.addModifier(smo3771100acc, 0);
smo377130v0ar.push(smo377110);
const smo377111 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377111'] = smo377111;
smo377111.setAttribute('id', 'smo377111');
smo377111.addModifier(new VF.Dot(), 0);
smo377130v0ar.push(smo377111);
const smo377112 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377112'] = smo377112;
smo377112.setAttribute('id', 'smo377112');
const smo377113 = new VF.ChordSymbol();
smo377113.setAttribute('id', 'smo377113');
smo377113.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo377113.addGlyphOrText('Maj', JSON.parse('{"text":"Maj","symbolModifier":3,"symbolType":2}'));
smo377113.setFont('Petaluma Script', 14).setReportWidth(false);
smo377112.addModifier(smo377113, 0);
smo377130v0ar.push(smo377112);
const smo377114 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377114'] = smo377114;
smo377114.setAttribute('id', 'smo377114');
smo377114.addModifier(new VF.Dot(), 0);
smo377130v0ar.push(smo377114);
const smo377115 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377115'] = smo377115;
smo377115.setAttribute('id', 'smo377115');
const smo3771150acc = new VF.Accidental('n');
smo377115.addModifier(smo3771150acc, 0);
smo377130v0ar.push(smo377115);
const smo377116 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo377116'] = smo377116;
smo377116.setAttribute('id', 'smo377116');
smo377116.addModifier(new VF.Dot(), 0);
smo377130v0ar.push(smo377116);
smo377130v0.addTickables(smo377130v0ar)
fmtsmo37713030.joinVoices([smo377130v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377839 = smo377107.getStemDirection();
smo377107.setStemDirection(dirsmo377839);
smo377109.setStemDirection(dirsmo377839);
const smo377839 = new VF.Beam([smo377107,smo377109]);
const dirsmo377840 = smo377110.getStemDirection();
smo377110.setStemDirection(dirsmo377840);
smo377111.setStemDirection(dirsmo377840);
const smo377840 = new VF.Beam([smo377110,smo377111]);
const dirsmo377841 = smo377112.getStemDirection();
smo377112.setStemDirection(dirsmo377841);
smo377114.setStemDirection(dirsmo377841);
const smo377841 = new VF.Beam([smo377112,smo377114]);
const dirsmo377842 = smo377115.getStemDirection();
smo377115.setStemDirection(dirsmo377842);
smo377116.setStemDirection(dirsmo377842);
const smo377842 = new VF.Beam([smo377115,smo377116]);
 
// formatting measures in staff group smo377540
fmtsmo37713030.format([smo377130v0], 345);
const stavesmo377130 = new VF.Stave(436, 578.3846153846155, 359);
stavesmo377130.setAttribute('id', 'stavesmo377130');
stavesmo377130.setBegBarType(VF.Barline.type.NONE);
stavesmo377130.setContext(context);
stavesmo377130.draw();
smo377130v0.draw(context, stavesmo377130);
smo377839.setContext(context);
smo377839.draw();
smo377840.setContext(context);
smo377840.draw();
smo377841.setContext(context);
smo377841.draw();
smo377842.setContext(context);
smo377842.draw();
const fmtsmo37716031 = new VF.Formatter();
//
// voices and notes for stave 0 31
const smo377160v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377160v0ar = [];
const smo377131 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo377131'] = smo377131;
smo377131.setAttribute('id', 'smo377131');
const smo3771310acc = new VF.Accidental('b');
smo377131.addModifier(smo3771310acc, 0);
const smo377132 = new VF.ChordSymbol();
smo377132.setAttribute('id', 'smo377132');
smo377132.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo377132.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377132.setFont('Petaluma Script', 14).setReportWidth(false);
smo377131.addModifier(smo377132, 0);
smo377160v0ar.push(smo377131);
const smo377133 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377133'] = smo377133;
smo377133.setAttribute('id', 'smo377133');
smo377133.addModifier(new VF.Dot(), 0);
const smo377134 = new VF.ChordSymbol();
smo377134.setAttribute('id', 'smo377134');
smo377134.setFont('Petaluma Script', 14).setReportWidth(false);
smo377133.addModifier(smo377134, 0);
smo377160v0ar.push(smo377133);
const smo377135 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377135'] = smo377135;
smo377135.setAttribute('id', 'smo377135');
const smo3771350acc = new VF.Accidental('b');
smo377135.addModifier(smo3771350acc, 0);
const smo377136 = new VF.ChordSymbol();
smo377136.setAttribute('id', 'smo377136');
smo377136.setFont('Petaluma Script', 14).setReportWidth(false);
smo377135.addModifier(smo377136, 0);
smo377160v0ar.push(smo377135);
const smo377137 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377137'] = smo377137;
smo377137.setAttribute('id', 'smo377137');
smo377137.addModifier(new VF.Dot(), 0);
const smo377138 = new VF.ChordSymbol();
smo377138.setAttribute('id', 'smo377138');
smo377138.setFont('Petaluma Script', 14).setReportWidth(false);
smo377137.addModifier(smo377138, 0);
smo377160v0ar.push(smo377137);
const smo377139 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo377139'] = smo377139;
smo377139.setAttribute('id', 'smo377139');
const smo3771390acc = new VF.Accidental('n');
smo377139.addModifier(smo3771390acc, 0);
const smo377140 = new VF.ChordSymbol();
smo377140.setAttribute('id', 'smo377140');
smo377140.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo377140.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377140.setFont('Petaluma Script', 14).setReportWidth(false);
smo377139.addModifier(smo377140, 0);
smo377160v0ar.push(smo377139);
const smo377141 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo377141'] = smo377141;
smo377141.setAttribute('id', 'smo377141');
smo377141.addModifier(new VF.Dot(), 0);
const smo377142 = new VF.ChordSymbol();
smo377142.setAttribute('id', 'smo377142');
smo377142.setFont('Petaluma Script', 14).setReportWidth(false);
smo377141.addModifier(smo377142, 0);
smo377160v0ar.push(smo377141);
const smo377143 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo377143'] = smo377143;
smo377143.setAttribute('id', 'smo377143');
const smo3771430acc = new VF.Accidental('b');
smo377143.addModifier(smo3771430acc, 0);
const smo377144 = new VF.ChordSymbol();
smo377144.setAttribute('id', 'smo377144');
smo377144.setFont('Petaluma Script', 14).setReportWidth(false);
smo377143.addModifier(smo377144, 0);
smo377160v0ar.push(smo377143);
const smo377145 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo377145'] = smo377145;
smo377145.setAttribute('id', 'smo377145');
smo377145.addModifier(new VF.Dot(), 0);
const smo377146 = new VF.ChordSymbol();
smo377146.setAttribute('id', 'smo377146');
smo377146.setFont('Petaluma Script', 14).setReportWidth(false);
smo377145.addModifier(smo377146, 0);
smo377160v0ar.push(smo377145);
smo377160v0.addTickables(smo377160v0ar)
fmtsmo37716031.joinVoices([smo377160v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377845 = smo377131.getStemDirection();
smo377131.setStemDirection(dirsmo377845);
smo377133.setStemDirection(dirsmo377845);
const smo377845 = new VF.Beam([smo377131,smo377133]);
const dirsmo377846 = smo377135.getStemDirection();
smo377135.setStemDirection(dirsmo377846);
smo377137.setStemDirection(dirsmo377846);
const smo377846 = new VF.Beam([smo377135,smo377137]);
const dirsmo377847 = smo377139.getStemDirection();
smo377139.setStemDirection(dirsmo377847);
smo377141.setStemDirection(dirsmo377847);
const smo377847 = new VF.Beam([smo377139,smo377141]);
const dirsmo377848 = smo377143.getStemDirection();
smo377143.setStemDirection(dirsmo377848);
smo377145.setStemDirection(dirsmo377848);
const smo377848 = new VF.Beam([smo377143,smo377145]);
 
// formatting measures in staff group smo377540
fmtsmo37716031.format([smo377160v0], 355);
const stavesmo377160 = new VF.Stave(795, 578.3846153846155, 369);
stavesmo377160.setAttribute('id', 'stavesmo377160');
stavesmo377160.setBegBarType(VF.Barline.type.NONE);
stavesmo377160.setContext(context);
stavesmo377160.draw();
smo377160v0.draw(context, stavesmo377160);
smo377845.setContext(context);
smo377845.draw();
smo377846.setContext(context);
smo377846.draw();
smo377847.setContext(context);
smo377847.draw();
smo377848.setContext(context);
smo377848.draw();
const fmtsmo37719632 = new VF.Formatter();
//
// voices and notes for stave 0 32
const smo377196v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377196v0ar = [];
const smo377161 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo377161'] = smo377161;
smo377161.setAttribute('id', 'smo377161');
const smo3771610acc = new VF.Accidental('b');
smo377161.addModifier(smo3771610acc, 0);
const smo377162 = new VF.ChordSymbol();
smo377162.setAttribute('id', 'smo377162');
smo377162.addGlyphOrText('Db', JSON.parse('{"text":"Db","symbolModifier":1,"symbolType":2}'));
smo377162.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377162.setFont('Petaluma Script', 14).setReportWidth(false);
smo377161.addModifier(smo377162, 0);
smo377196v0ar.push(smo377161);
const smo377163 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo377163'] = smo377163;
smo377163.setAttribute('id', 'smo377163');
const smo3771630acc = new VF.Accidental('b');
smo377163.addModifier(smo3771630acc, 0);
const smo377164 = new VF.ChordSymbol();
smo377164.setAttribute('id', 'smo377164');
smo377164.setFont('Petaluma Script', 14).setReportWidth(false);
smo377163.addModifier(smo377164, 0);
smo377196v0ar.push(smo377163);
const smo377165 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377165'] = smo377165;
smo377165.setAttribute('id', 'smo377165');
const smo3771650acc = new VF.Accidental('n');
smo377165.addModifier(smo3771650acc, 0);
const smo377166 = new VF.ChordSymbol();
smo377166.setAttribute('id', 'smo377166');
smo377166.setFont('Petaluma Script', 14).setReportWidth(false);
smo377165.addModifier(smo377166, 0);
smo377196v0ar.push(smo377165);
const smo377167 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377167'] = smo377167;
smo377167.setAttribute('id', 'smo377167');
const smo3771670acc = new VF.Accidental('b');
smo377167.addModifier(smo3771670acc, 0);
const smo377169 = new VF.Ornament('fall');
smo377167.addModifier(smo377169, 0);
const smo377168 = new VF.ChordSymbol();
smo377168.setAttribute('id', 'smo377168');
smo377168.setFont('Petaluma Script', 14).setReportWidth(false);
smo377167.addModifier(smo377168, 0);
smo377196v0ar.push(smo377167);
const smo377170 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377170'] = smo377170;
smo377170.setAttribute('id', 'smo377170');
const smo377171 = new VF.ChordSymbol();
smo377171.setAttribute('id', 'smo377171');
smo377171.setFont('Petaluma Script', 14).setReportWidth(false);
smo377170.addModifier(smo377171, 0);
smo377196v0ar.push(smo377170);
const smo377172 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/4/n"]}'))
noteHash['smo377172'] = smo377172;
smo377172.setAttribute('id', 'smo377172');
const smo3771720acc = new VF.Accidental('b');
smo377172.addModifier(smo3771720acc, 0);
smo377196v0ar.push(smo377172);
const smo377173 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo377173'] = smo377173;
smo377173.setAttribute('id', 'smo377173');
const smo3771730acc = new VF.Accidental('b');
smo377173.addModifier(smo3771730acc, 0);
smo377196v0ar.push(smo377173);
const smo377174 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377174'] = smo377174;
smo377174.setAttribute('id', 'smo377174');
smo377196v0ar.push(smo377174);
const smo377175 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
noteHash['smo377175'] = smo377175;
smo377175.setAttribute('id', 'smo377175');
const smo3771750acc = new VF.Accidental('b');
smo377175.addModifier(smo3771750acc, 0);
const smo377176 = new VF.ChordSymbol();
smo377176.setAttribute('id', 'smo377176');
smo377176.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1,"symbolType":2}'));
smo377176.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377176.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377176.setFont('Petaluma Script', 14).setReportWidth(false);
smo377175.addModifier(smo377176, 0);
smo377196v0ar.push(smo377175);
const smo377177 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo377177'] = smo377177;
smo377177.setAttribute('id', 'smo377177');
const smo3771770acc = new VF.Accidental('b');
smo3771770acc.setAsCautionary();
smo377177.addModifier(smo3771770acc, 0);
smo377196v0ar.push(smo377177);
const smo377178 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo377178'] = smo377178;
smo377178.setAttribute('id', 'smo377178');
const smo3771780acc = new VF.Accidental('b');
smo3771780acc.setAsCautionary();
smo377178.addModifier(smo3771780acc, 0);
smo377196v0ar.push(smo377178);
const smo377179 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
noteHash['smo377179'] = smo377179;
smo377179.setAttribute('id', 'smo377179');
smo377196v0ar.push(smo377179);
const smo377180 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377180'] = smo377180;
smo377180.setAttribute('id', 'smo377180');
smo377196v0ar.push(smo377180);
const smo377181 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo377181'] = smo377181;
smo377181.setAttribute('id', 'smo377181');
smo377196v0ar.push(smo377181);
const smo377182 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377182'] = smo377182;
smo377182.setAttribute('id', 'smo377182');
smo377196v0ar.push(smo377182);
smo377196v0.addTickables(smo377196v0ar)
fmtsmo37719632.joinVoices([smo377196v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377857 = smo377161.getStemDirection();
smo377161.setStemDirection(dirsmo377857);
smo377163.setStemDirection(dirsmo377857);
smo377165.setStemDirection(dirsmo377857);
smo377167.setStemDirection(dirsmo377857);
const smo377857 = new VF.Beam([smo377161,smo377163,smo377165,smo377167]);
const dirsmo377858 = smo377172.getStemDirection();
smo377172.setStemDirection(dirsmo377858);
smo377173.setStemDirection(dirsmo377858);
smo377174.setStemDirection(dirsmo377858);
const smo377858 = new VF.Beam([smo377172,smo377173,smo377174]);
const dirsmo377859 = smo377175.getStemDirection();
smo377175.setStemDirection(dirsmo377859);
smo377177.setStemDirection(dirsmo377859);
smo377178.setStemDirection(dirsmo377859);
smo377179.setStemDirection(dirsmo377859);
const smo377859 = new VF.Beam([smo377175,smo377177,smo377178,smo377179]);
const dirsmo377860 = smo377180.getStemDirection();
smo377180.setStemDirection(dirsmo377860);
smo377181.setStemDirection(dirsmo377860);
const smo377860 = new VF.Beam([smo377180,smo377181]);
 
// formatting measures in staff group smo377540
fmtsmo37719632.format([smo377196v0], 588);
const stavesmo377196 = new VF.Stave(46, 760.3846153846155, 672);
stavesmo377196.setAttribute('id', 'stavesmo377196');
stavesmo377196.setBegBarType(1);
stavesmo377196.addClef('treble');
const keysmo377196 = new VF.KeySignature('G');
keysmo377196.addToStave(stavesmo377196);
stavesmo377196.setContext(context);
stavesmo377196.draw();
smo377196v0.draw(context, stavesmo377196);
smo377857.setContext(context);
smo377857.draw();
smo377858.setContext(context);
smo377858.draw();
smo377859.setContext(context);
smo377859.draw();
smo377860.setContext(context);
smo377860.draw();
const fmtsmo37722533 = new VF.Formatter();
//
// voices and notes for stave 0 33
const smo377225v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377225v0ar = [];
const smo377197 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377197'] = smo377197;
smo377197.setAttribute('id', 'smo377197');
const smo377198 = new VF.ChordSymbol();
smo377198.setAttribute('id', 'smo377198');
smo377198.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo377198.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377198.setFont('Petaluma Script', 14).setReportWidth(false);
smo377197.addModifier(smo377198, 0);
smo377225v0ar.push(smo377197);
const smo377199 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377199'] = smo377199;
smo377199.setAttribute('id', 'smo377199');
smo377225v0ar.push(smo377199);
const smo377200 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377200'] = smo377200;
smo377200.setAttribute('id', 'smo377200');
smo377225v0ar.push(smo377200);
const smo377201 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377201'] = smo377201;
smo377201.setAttribute('id', 'smo377201');
smo377225v0ar.push(smo377201);
const smo377202 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377202'] = smo377202;
smo377202.setAttribute('id', 'smo377202');
const smo377203 = new VF.ChordSymbol();
smo377203.setAttribute('id', 'smo377203');
smo377203.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo377203.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377203.setFont('Petaluma Script', 14).setReportWidth(false);
smo377202.addModifier(smo377203, 0);
smo377225v0ar.push(smo377202);
const smo377204 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo377204'] = smo377204;
smo377204.setAttribute('id', 'smo377204');
const smo3772040acc = new VF.Accidental('b');
smo377204.addModifier(smo3772040acc, 0);
smo377225v0ar.push(smo377204);
const smo377205 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/6/n"]}'))
noteHash['smo377205'] = smo377205;
smo377205.setAttribute('id', 'smo377205');
smo377225v0ar.push(smo377205);
const smo377206 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377206'] = smo377206;
smo377206.setAttribute('id', 'smo377206');
smo377225v0ar.push(smo377206);
const smo377207 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo377207'] = smo377207;
smo377207.setAttribute('id', 'smo377207');
const smo377208 = new VF.ChordSymbol();
smo377208.setAttribute('id', 'smo377208');
smo377208.setFont('Petaluma Script', 14).setReportWidth(false);
smo377207.addModifier(smo377208, 0);
smo377225v0ar.push(smo377207);
const smo377209 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo377209'] = smo377209;
smo377209.setAttribute('id', 'smo377209');
smo377225v0ar.push(smo377209);
const smo377210 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo377210'] = smo377210;
smo377210.setAttribute('id', 'smo377210');
const smo3772100acc = new VF.Accidental('b');
smo377210.addModifier(smo3772100acc, 0);
smo377225v0ar.push(smo377210);
const smo377211 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo377211'] = smo377211;
smo377211.setAttribute('id', 'smo377211');
smo377225v0ar.push(smo377211);
smo377225v0.addTickables(smo377225v0ar)
fmtsmo37722533.joinVoices([smo377225v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377863 = smo377200.getStemDirection();
smo377200.setStemDirection(dirsmo377863);
smo377201.setStemDirection(dirsmo377863);
const smo377863 = new VF.Beam([smo377200,smo377201]);
const dirsmo377864 = smo377202.getStemDirection();
smo377202.setStemDirection(dirsmo377864);
smo377204.setStemDirection(dirsmo377864);
smo377205.setStemDirection(dirsmo377864);
smo377206.setStemDirection(dirsmo377864);
const smo377864 = new VF.Beam([smo377202,smo377204,smo377205,smo377206]);
const dirsmo377865 = smo377207.getStemDirection();
smo377207.setStemDirection(dirsmo377865);
smo377209.setStemDirection(dirsmo377865);
smo377210.setStemDirection(dirsmo377865);
smo377211.setStemDirection(dirsmo377865);
const smo377865 = new VF.Beam([smo377207,smo377209,smo377210,smo377211]);
 
// formatting measures in staff group smo377540
fmtsmo37722533.format([smo377225v0], 431);
const stavesmo377225 = new VF.Stave(718, 760.3846153846155, 445);
stavesmo377225.setAttribute('id', 'stavesmo377225');
stavesmo377225.setBegBarType(VF.Barline.type.NONE);
stavesmo377225.setContext(context);
stavesmo377225.draw();
smo377225v0.draw(context, stavesmo377225);
smo377863.setContext(context);
smo377863.draw();
smo377864.setContext(context);
smo377864.draw();
smo377865.setContext(context);
smo377865.draw();
const fmtsmo37725434 = new VF.Formatter();
//
// voices and notes for stave 0 34
const smo377254v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377254v0ar = [];
const smo377226 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377226'] = smo377226;
smo377226.setAttribute('id', 'smo377226');
const smo377227 = new VF.ChordSymbol();
smo377227.setAttribute('id', 'smo377227');
smo377227.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377227.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377227.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377227.setFont('Petaluma Script', 14).setReportWidth(false);
smo377226.addModifier(smo377227, 0);
smo377254v0ar.push(smo377226);
const smo377228 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377228'] = smo377228;
smo377228.setAttribute('id', 'smo377228');
smo377254v0ar.push(smo377228);
const smo377229 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377229'] = smo377229;
smo377229.setAttribute('id', 'smo377229');
smo377254v0ar.push(smo377229);
const smo377230 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377230'] = smo377230;
smo377230.setAttribute('id', 'smo377230');
const smo3772300acc = new VF.Accidental('b');
smo377230.addModifier(smo3772300acc, 0);
smo377254v0ar.push(smo377230);
const smo377231 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377231'] = smo377231;
smo377231.setAttribute('id', 'smo377231');
smo377254v0ar.push(smo377231);
const smo377232 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8d","dots":1,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377232'] = smo377232;
smo377232.setAttribute('id', 'smo377232');
smo377232.addModifier(new VF.Dot(), 0);
smo377254v0ar.push(smo377232);
const smo377233 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377233'] = smo377233;
smo377233.setAttribute('id', 'smo377233');
const smo377234 = new VF.ChordSymbol();
smo377234.setAttribute('id', 'smo377234');
smo377234.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo377234.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377234.addGlyphOrText('+', JSON.parse('{"text":"+","symbolModifier":3,"symbolType":2}'));
smo377234.addGlyphOrText('5', JSON.parse('{"text":"5","symbolModifier":3,"symbolType":2}'));
smo377234.setFont('Petaluma Script', 14).setReportWidth(false);
smo377233.addModifier(smo377234, 0);
smo377254v0ar.push(smo377233);
const smo377235 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo377235'] = smo377235;
smo377235.setAttribute('id', 'smo377235');
const smo3772350acc = new VF.Accidental('b');
smo377235.addModifier(smo3772350acc, 0);
smo377254v0ar.push(smo377235);
const smo377236 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo377236'] = smo377236;
smo377236.setAttribute('id', 'smo377236');
const smo3772360acc = new VF.Accidental('b');
smo377236.addModifier(smo3772360acc, 0);
smo377254v0ar.push(smo377236);
const smo377237 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo377237'] = smo377237;
smo377237.setAttribute('id', 'smo377237');
smo377254v0ar.push(smo377237);
const smo377238 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["g#/4/n"]}'))
noteHash['smo377238'] = smo377238;
smo377238.setAttribute('id', 'smo377238');
const smo3772380acc = new VF.Accidental('#');
smo377238.addModifier(smo3772380acc, 0);
smo377254v0ar.push(smo377238);
const smo377239 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["f#/4/r"]}'))
noteHash['smo377239'] = smo377239;
smo377239.setAttribute('id', 'smo377239');
smo377254v0ar.push(smo377239);
smo377254v0.addTickables(smo377254v0ar)
fmtsmo37725434.joinVoices([smo377254v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377874 = smo377226.getStemDirection();
smo377226.setStemDirection(dirsmo377874);
smo377228.setStemDirection(dirsmo377874);
smo377229.setStemDirection(dirsmo377874);
smo377230.setStemDirection(dirsmo377874);
const smo377874 = new VF.Beam([smo377226,smo377228,smo377229,smo377230]);
const dirsmo377875 = smo377231.getStemDirection();
smo377231.setStemDirection(dirsmo377875);
smo377232.setStemDirection(dirsmo377875);
const smo377875 = new VF.Beam([smo377231,smo377232]);
const dirsmo377876 = smo377233.getStemDirection();
smo377233.setStemDirection(dirsmo377876);
smo377235.setStemDirection(dirsmo377876);
smo377236.setStemDirection(dirsmo377876);
const smo377876 = new VF.Beam([smo377233,smo377235,smo377236]);
const dirsmo377877 = smo377237.getStemDirection();
smo377237.setStemDirection(dirsmo377877);
smo377238.setStemDirection(dirsmo377877);
const smo377877 = new VF.Beam([smo377237,smo377238]);
const smo377240 = new VF.Tuplet([smo377228,smo377229,smo377230], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo377540
fmtsmo37725434.format([smo377254v0], 496);
const stavesmo377254 = new VF.Stave(46, 911.3846153846155, 579);
stavesmo377254.setAttribute('id', 'stavesmo377254');
stavesmo377254.setBegBarType(1);
stavesmo377254.addClef('treble');
const keysmo377254 = new VF.KeySignature('G');
keysmo377254.addToStave(stavesmo377254);
stavesmo377254.setContext(context);
stavesmo377254.draw();
smo377254v0.draw(context, stavesmo377254);
smo377874.setContext(context);
smo377874.draw();
smo377875.setContext(context);
smo377875.draw();
smo377876.setContext(context);
smo377876.draw();
smo377877.setContext(context);
smo377877.draw();
smo377240.setContext(context).draw();
const fmtsmo37728235 = new VF.Formatter();
//
// voices and notes for stave 0 35
const smo377282v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377282v0ar = [];
const smo377255 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["fn/4/r"]}'))
noteHash['smo377255'] = smo377255;
smo377255.setAttribute('id', 'smo377255');
const smo377256 = new VF.ChordSymbol();
smo377256.setAttribute('id', 'smo377256');
smo377256.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo377256.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377256.setFont('Petaluma Script', 14).setReportWidth(false);
smo377255.addModifier(smo377256, 0);
smo377282v0ar.push(smo377255);
const smo377257 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377257'] = smo377257;
smo377257.setAttribute('id', 'smo377257');
const smo3772570acc = new VF.Accidental('n');
smo377257.addModifier(smo3772570acc, 0);
smo377282v0ar.push(smo377257);
const smo377258 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo377258'] = smo377258;
smo377258.setAttribute('id', 'smo377258');
const smo3772580acc = new VF.Accidental('b');
smo377258.addModifier(smo3772580acc, 0);
smo377282v0ar.push(smo377258);
const smo377259 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo377259'] = smo377259;
smo377259.setAttribute('id', 'smo377259');
const smo3772590acc = new VF.Accidental('b');
smo377259.addModifier(smo3772590acc, 0);
smo377282v0ar.push(smo377259);
const smo377260 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377260'] = smo377260;
smo377260.setAttribute('id', 'smo377260');
smo377282v0ar.push(smo377260);
const smo377261 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377261'] = smo377261;
smo377261.setAttribute('id', 'smo377261');
smo377282v0ar.push(smo377261);
const smo377262 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377262'] = smo377262;
smo377262.setAttribute('id', 'smo377262');
smo377282v0ar.push(smo377262);
const smo377263 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo377263'] = smo377263;
smo377263.setAttribute('id', 'smo377263');
const smo3772630acc = new VF.Accidental('b');
smo3772630acc.setAsCautionary();
smo377263.addModifier(smo3772630acc, 0);
const smo377264 = new VF.ChordSymbol();
smo377264.setAttribute('id', 'smo377264');
smo377264.addGlyphOrText('Ab', JSON.parse('{"text":"Ab","symbolModifier":1,"symbolType":2}'));
smo377264.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377264.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377264.setFont('Petaluma Script', 14).setReportWidth(false);
smo377263.addModifier(smo377264, 0);
smo377282v0ar.push(smo377263);
const smo377265 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cb/5/n"]}'))
noteHash['smo377265'] = smo377265;
smo377265.setAttribute('id', 'smo377265');
const smo3772650acc = new VF.Accidental('b');
smo377265.addModifier(smo3772650acc, 0);
smo377282v0ar.push(smo377265);
const smo377266 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377266'] = smo377266;
smo377266.setAttribute('id', 'smo377266');
const smo3772660acc = new VF.Accidental('b');
smo377266.addModifier(smo3772660acc, 0);
smo377282v0ar.push(smo377266);
const smo377267 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["ab/4/n"]}'))
noteHash['smo377267'] = smo377267;
smo377267.setAttribute('id', 'smo377267');
const smo3772670acc = new VF.Accidental('b');
smo377267.addModifier(smo3772670acc, 0);
smo377282v0ar.push(smo377267);
const smo377268 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo377268'] = smo377268;
smo377268.setAttribute('id', 'smo377268');
const smo3772680acc = new VF.Accidental('b');
smo377268.addModifier(smo3772680acc, 0);
smo377282v0ar.push(smo377268);
smo377282v0.addTickables(smo377282v0ar)
fmtsmo37728235.joinVoices([smo377282v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377880 = smo377257.getStemDirection();
smo377257.setStemDirection(dirsmo377880);
smo377258.setStemDirection(dirsmo377880);
const smo377880 = new VF.Beam([smo377257,smo377258]);
const dirsmo377881 = smo377259.getStemDirection();
smo377259.setStemDirection(dirsmo377881);
smo377260.setStemDirection(dirsmo377881);
smo377261.setStemDirection(dirsmo377881);
smo377262.setStemDirection(dirsmo377881);
const smo377881 = new VF.Beam([smo377259,smo377260,smo377261,smo377262]);
const dirsmo377882 = smo377263.getStemDirection();
smo377263.setStemDirection(dirsmo377882);
smo377265.setStemDirection(dirsmo377882);
smo377266.setStemDirection(dirsmo377882);
const smo377882 = new VF.Beam([smo377263,smo377265,smo377266]);
const dirsmo377883 = smo377267.getStemDirection();
smo377267.setStemDirection(dirsmo377883);
smo377268.setStemDirection(dirsmo377883);
const smo377883 = new VF.Beam([smo377267,smo377268]);
 
// formatting measures in staff group smo377540
fmtsmo37728235.format([smo377282v0], 524);
const stavesmo377282 = new VF.Stave(625, 911.3846153846155, 538);
stavesmo377282.setAttribute('id', 'stavesmo377282');
stavesmo377282.setBegBarType(VF.Barline.type.NONE);
stavesmo377282.setContext(context);
stavesmo377282.draw();
smo377282v0.draw(context, stavesmo377282);
smo377880.setContext(context);
smo377880.draw();
smo377881.setContext(context);
smo377881.draw();
smo377882.setContext(context);
smo377882.draw();
smo377883.setContext(context);
smo377883.draw();
const fmtsmo37731436 = new VF.Formatter();
//
// voices and notes for stave 0 36
const smo377314v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377314v0ar = [];
const smo377283 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377283'] = smo377283;
smo377283.setAttribute('id', 'smo377283');
const smo377284 = new VF.ChordSymbol();
smo377284.setAttribute('id', 'smo377284');
smo377284.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377284.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377284.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377284.setFont('Petaluma Script', 14).setReportWidth(false);
smo377283.addModifier(smo377284, 0);
smo377314v0ar.push(smo377283);
const smo377285 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377285'] = smo377285;
smo377285.setAttribute('id', 'smo377285');
const smo377286 = new VF.Ornament('scoop');
smo377285.addModifier(smo377286, 0);
smo377314v0ar.push(smo377285);
const smo377287 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377287'] = smo377287;
smo377287.setAttribute('id', 'smo377287');
const smo3772870acc = new VF.Accidental('b');
smo377287.addModifier(smo3772870acc, 0);
smo377314v0ar.push(smo377287);
const smo377288 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377288'] = smo377288;
smo377288.setAttribute('id', 'smo377288');
smo377314v0ar.push(smo377288);
const smo377289 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377289'] = smo377289;
smo377289.setAttribute('id', 'smo377289');
smo377314v0ar.push(smo377289);
const smo377290 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377290'] = smo377290;
smo377290.setAttribute('id', 'smo377290');
smo377314v0ar.push(smo377290);
const smo377291 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377291'] = smo377291;
smo377291.setAttribute('id', 'smo377291');
smo377314v0ar.push(smo377291);
const smo377292 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["ab/4/r"]}'))
noteHash['smo377292'] = smo377292;
smo377292.setAttribute('id', 'smo377292');
smo377314v0ar.push(smo377292);
const smo377293 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377293'] = smo377293;
smo377293.setAttribute('id', 'smo377293');
const smo377295 = new VF.Ornament('scoop');
smo377293.addModifier(smo377295, 0);
const smo377294 = new VF.ChordSymbol();
smo377294.setAttribute('id', 'smo377294');
smo377294.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo377294.addGlyphOrText('Maj7', JSON.parse('{"text":"Maj7","symbolModifier":3,"symbolType":2}'));
smo377294.setFont('Petaluma Script', 14).setReportWidth(false);
smo377293.addModifier(smo377294, 0);
smo377314v0ar.push(smo377293);
const smo377296 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377296'] = smo377296;
smo377296.setAttribute('id', 'smo377296');
smo377314v0ar.push(smo377296);
const smo377297 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377297'] = smo377297;
smo377297.setAttribute('id', 'smo377297');
smo377314v0ar.push(smo377297);
const smo377298 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377298'] = smo377298;
smo377298.setAttribute('id', 'smo377298');
smo377314v0ar.push(smo377298);
const smo377299 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377299'] = smo377299;
smo377299.setAttribute('id', 'smo377299');
const smo3772990acc = new VF.Accidental('n');
smo377299.addModifier(smo3772990acc, 0);
smo377314v0ar.push(smo377299);
smo377314v0.addTickables(smo377314v0ar)
fmtsmo37731436.joinVoices([smo377314v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377892 = smo377285.getStemDirection();
smo377285.setStemDirection(dirsmo377892);
smo377287.setStemDirection(dirsmo377892);
const smo377892 = new VF.Beam([smo377285,smo377287]);
const dirsmo377893 = smo377288.getStemDirection();
smo377288.setStemDirection(dirsmo377893);
smo377289.setStemDirection(dirsmo377893);
smo377290.setStemDirection(dirsmo377893);
smo377291.setStemDirection(dirsmo377893);
const smo377893 = new VF.Beam([smo377288,smo377289,smo377290,smo377291]);
const dirsmo377894 = smo377293.getStemDirection();
smo377293.setStemDirection(dirsmo377894);
smo377296.setStemDirection(dirsmo377894);
const smo377894 = new VF.Beam([smo377293,smo377296]);
const dirsmo377895 = smo377297.getStemDirection();
smo377297.setStemDirection(dirsmo377895);
smo377298.setStemDirection(dirsmo377895);
smo377299.setStemDirection(dirsmo377895);
const smo377895 = new VF.Beam([smo377297,smo377298,smo377299]);
const smo377300 = new VF.Tuplet([smo377288,smo377289,smo377290], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo377540
fmtsmo37731436.format([smo377314v0], 405);
const stavesmo377314 = new VF.Stave(46, 1082.3846153846155, 488);
stavesmo377314.setAttribute('id', 'stavesmo377314');
stavesmo377314.setBegBarType(1);
stavesmo377314.addClef('treble');
const keysmo377314 = new VF.KeySignature('G');
keysmo377314.addToStave(stavesmo377314);
stavesmo377314.setContext(context);
stavesmo377314.draw();
smo377314v0.draw(context, stavesmo377314);
smo377892.setContext(context);
smo377892.draw();
smo377893.setContext(context);
smo377893.draw();
smo377894.setContext(context);
smo377894.draw();
smo377895.setContext(context);
smo377895.draw();
smo377300.setContext(context).draw();
const fmtsmo37735637 = new VF.Formatter();
//
// voices and notes for stave 0 37
const smo377356v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377356v0ar = [];
const smo377315 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
noteHash['smo377315'] = smo377315;
smo377315.setAttribute('id', 'smo377315');
const smo377316 = new VF.ChordSymbol();
smo377316.setAttribute('id', 'smo377316');
smo377316.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo377316.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377316.setFont('Petaluma Script', 14).setReportWidth(false);
smo377315.addModifier(smo377316, 0);
smo377356v0ar.push(smo377315);
const smo377317 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo377317'] = smo377317;
smo377317.setAttribute('id', 'smo377317');
const smo3773170acc = new VF.Accidental('b');
smo377317.addModifier(smo3773170acc, 0);
smo377356v0ar.push(smo377317);
const smo377318 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/4/n"]}'))
noteHash['smo377318'] = smo377318;
smo377318.setAttribute('id', 'smo377318');
const smo3773180acc = new VF.Accidental('b');
smo377318.addModifier(smo3773180acc, 0);
smo377356v0ar.push(smo377318);
const smo377319 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/4/n"]}'))
noteHash['smo377319'] = smo377319;
smo377319.setAttribute('id', 'smo377319');
const smo3773190acc = new VF.Accidental('b');
smo377319.addModifier(smo3773190acc, 0);
smo377356v0ar.push(smo377319);
const smo377320 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["fn/4/n"]}'))
noteHash['smo377320'] = smo377320;
smo377320.setAttribute('id', 'smo377320');
const smo3773200acc = new VF.Accidental('n');
smo377320.addModifier(smo3773200acc, 0);
smo377356v0ar.push(smo377320);
const smo377321 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377321'] = smo377321;
smo377321.setAttribute('id', 'smo377321');
const smo3773210acc = new VF.Accidental('b');
smo377321.addModifier(smo3773210acc, 0);
smo377356v0ar.push(smo377321);
const smo377322 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377322'] = smo377322;
smo377322.setAttribute('id', 'smo377322');
smo377356v0ar.push(smo377322);
const smo377323 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bb/4/r"]}'))
noteHash['smo377323'] = smo377323;
smo377323.setAttribute('id', 'smo377323');
smo377356v0ar.push(smo377323);
const smo377324 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377324'] = smo377324;
smo377324.setAttribute('id', 'smo377324');
smo377356v0ar.push(smo377324);
const smo377325 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["an/4/r"]}'))
noteHash['smo377325'] = smo377325;
smo377325.setAttribute('id', 'smo377325');
smo377356v0ar.push(smo377325);
const smo377326 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377326'] = smo377326;
smo377326.setAttribute('id', 'smo377326');
smo377356v0ar.push(smo377326);
const smo377327 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo377327'] = smo377327;
smo377327.setAttribute('id', 'smo377327');
const smo3773270acc = new VF.Accidental('#');
smo377327.addModifier(smo3773270acc, 0);
const smo377328 = new VF.ChordSymbol();
smo377328.setAttribute('id', 'smo377328');
smo377328.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo377328.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377328.setFont('Petaluma Script', 14).setReportWidth(false);
smo377327.addModifier(smo377328, 0);
smo377356v0ar.push(smo377327);
const smo377329 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/4/n"]}'))
noteHash['smo377329'] = smo377329;
smo377329.setAttribute('id', 'smo377329');
smo377356v0ar.push(smo377329);
const smo377330 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377330'] = smo377330;
smo377330.setAttribute('id', 'smo377330');
smo377356v0ar.push(smo377330);
const smo377331 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377331'] = smo377331;
smo377331.setAttribute('id', 'smo377331');
smo377356v0ar.push(smo377331);
const smo377332 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["eb/5/n"]}'))
noteHash['smo377332'] = smo377332;
smo377332.setAttribute('id', 'smo377332');
const smo3773320acc = new VF.Accidental('b');
smo3773320acc.setAsCautionary();
smo377332.addModifier(smo3773320acc, 0);
smo377356v0ar.push(smo377332);
const smo377333 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo377333'] = smo377333;
smo377333.setAttribute('id', 'smo377333');
const smo3773330acc = new VF.Accidental('n');
smo377333.addModifier(smo3773330acc, 0);
smo377356v0ar.push(smo377333);
const smo377334 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377334'] = smo377334;
smo377334.setAttribute('id', 'smo377334');
smo377356v0ar.push(smo377334);
const smo377335 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377335'] = smo377335;
smo377335.setAttribute('id', 'smo377335');
smo377356v0ar.push(smo377335);
smo377356v0.addTickables(smo377356v0ar)
fmtsmo37735637.joinVoices([smo377356v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377898 = smo377318.getStemDirection();
smo377318.setStemDirection(dirsmo377898);
smo377319.setStemDirection(dirsmo377898);
smo377320.setStemDirection(dirsmo377898);
const smo377898 = new VF.Beam([smo377318,smo377319,smo377320]);
const dirsmo377899 = smo377321.getStemDirection();
smo377321.setStemDirection(dirsmo377899);
smo377322.setStemDirection(dirsmo377899);
smo377324.setStemDirection(dirsmo377899);
smo377326.setStemDirection(dirsmo377899);
const smo377899 = new VF.Beam([smo377321,smo377322,smo377324,smo377326]);
const dirsmo377900 = smo377327.getStemDirection();
smo377327.setStemDirection(dirsmo377900);
smo377329.setStemDirection(dirsmo377900);
smo377330.setStemDirection(dirsmo377900);
smo377331.setStemDirection(dirsmo377900);
const smo377900 = new VF.Beam([smo377327,smo377329,smo377330,smo377331]);
const dirsmo377901 = smo377332.getStemDirection();
smo377332.setStemDirection(dirsmo377901);
smo377333.setStemDirection(dirsmo377901);
smo377334.setStemDirection(dirsmo377901);
smo377335.setStemDirection(dirsmo377901);
const smo377901 = new VF.Beam([smo377332,smo377333,smo377334,smo377335]);
const smo377336 = new VF.Tuplet([smo377315,smo377317], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo377337 = new VF.Tuplet([smo377318,smo377319,smo377320], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo377338 = new VF.Tuplet([smo377321,smo377322,smo377323], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo377339 = new VF.Tuplet([smo377324,smo377325,smo377326], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo377340 = new VF.Tuplet([smo377329,smo377330,smo377331], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
const smo377341 = new VF.Tuplet([smo377332,smo377333], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
const smo377342 = new VF.Tuplet([smo377334,smo377335], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":-1}'));
 
// formatting measures in staff group smo377540
fmtsmo37735637.format([smo377356v0], 614);
const stavesmo377356 = new VF.Stave(534, 1082.3846153846155, 628);
stavesmo377356.setAttribute('id', 'stavesmo377356');
stavesmo377356.setBegBarType(VF.Barline.type.NONE);
stavesmo377356.setContext(context);
stavesmo377356.draw();
smo377356v0.draw(context, stavesmo377356);
smo377898.setContext(context);
smo377898.draw();
smo377899.setContext(context);
smo377899.draw();
smo377900.setContext(context);
smo377900.draw();
smo377901.setContext(context);
smo377901.draw();
smo377336.setContext(context).draw();
smo377337.setContext(context).draw();
smo377338.setContext(context).draw();
smo377339.setContext(context).draw();
smo377340.setContext(context).draw();
smo377341.setContext(context).draw();
smo377342.setContext(context).draw();
const fmtsmo37738538 = new VF.Formatter();
//
// voices and notes for stave 0 38
const smo377385v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377385v0ar = [];
const smo377357 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo377359 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo377359.setAttribute('id', 'smo377359');
const acc0smo377359 = new VF.Accidental('#');
smo377359.addModifier(acc0smo377359, 0)
const ggrpsmo377357 = new VF.GraceNoteGroup([smo377359]);
ggrpsmo377357.beamNotes();
smo377357.addModifier(ggrpsmo377357, 0);
noteHash['smo377357'] = smo377357;
smo377357.setAttribute('id', 'smo377357');
const smo377358 = new VF.ChordSymbol();
smo377358.setAttribute('id', 'smo377358');
smo377358.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377358.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377358.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377358.setFont('Petaluma Script', 14).setReportWidth(false);
smo377357.addModifier(smo377358, 0);
smo377385v0ar.push(smo377357);
const smo377360 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377360'] = smo377360;
smo377360.setAttribute('id', 'smo377360');
smo377385v0ar.push(smo377360);
const smo377361 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377361'] = smo377361;
smo377361.setAttribute('id', 'smo377361');
const smo3773610acc = new VF.Accidental('b');
smo377361.addModifier(smo3773610acc, 0);
smo377385v0ar.push(smo377361);
const smo377362 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377362'] = smo377362;
smo377362.setAttribute('id', 'smo377362');
smo377385v0ar.push(smo377362);
const smo377363 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377363'] = smo377363;
smo377363.setAttribute('id', 'smo377363');
smo377385v0ar.push(smo377363);
const smo377364 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
const smo377365 = new VF.GraceNote(JSON.parse('{"duration":"16","keys":["d#/5"],"slash":false}'))
smo377365.setAttribute('id', 'smo377365');
const acc0smo377365 = new VF.Accidental('#');
smo377365.addModifier(acc0smo377365, 0)
const ggrpsmo377364 = new VF.GraceNoteGroup([smo377365]);
ggrpsmo377364.beamNotes();
smo377364.addModifier(ggrpsmo377364, 0);
noteHash['smo377364'] = smo377364;
smo377364.setAttribute('id', 'smo377364');
smo377385v0ar.push(smo377364);
const smo377366 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377366'] = smo377366;
smo377366.setAttribute('id', 'smo377366');
const smo377367 = new VF.ChordSymbol();
smo377367.setAttribute('id', 'smo377367');
smo377367.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo377367.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377367.setFont('Petaluma Script', 14).setReportWidth(false);
smo377366.addModifier(smo377367, 0);
smo377385v0ar.push(smo377366);
const smo377368 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo377368'] = smo377368;
smo377368.setAttribute('id', 'smo377368');
const smo3773680acc = new VF.Accidental('b');
smo377368.addModifier(smo3773680acc, 0);
smo377385v0ar.push(smo377368);
const smo377369 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo377369'] = smo377369;
smo377369.setAttribute('id', 'smo377369');
smo377385v0ar.push(smo377369);
const smo377370 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377370'] = smo377370;
smo377370.setAttribute('id', 'smo377370');
smo377385v0ar.push(smo377370);
const smo377371 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377371'] = smo377371;
smo377371.setAttribute('id', 'smo377371');
smo377385v0ar.push(smo377371);
smo377385v0.addTickables(smo377385v0ar)
fmtsmo37738538.joinVoices([smo377385v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377910 = smo377357.getStemDirection();
smo377357.setStemDirection(dirsmo377910);
smo377360.setStemDirection(dirsmo377910);
smo377361.setStemDirection(dirsmo377910);
const smo377910 = new VF.Beam([smo377357,smo377360,smo377361]);
const dirsmo377911 = smo377362.getStemDirection();
smo377362.setStemDirection(dirsmo377911);
smo377363.setStemDirection(dirsmo377911);
smo377364.setStemDirection(dirsmo377911);
const smo377911 = new VF.Beam([smo377362,smo377363,smo377364]);
const dirsmo377912 = smo377366.getStemDirection();
smo377366.setStemDirection(dirsmo377912);
smo377368.setStemDirection(dirsmo377912);
smo377369.setStemDirection(dirsmo377912);
const smo377912 = new VF.Beam([smo377366,smo377368,smo377369]);
const dirsmo377913 = smo377370.getStemDirection();
smo377370.setStemDirection(dirsmo377913);
smo377371.setStemDirection(dirsmo377913);
const smo377913 = new VF.Beam([smo377370,smo377371]);
 
// formatting measures in staff group smo377540
fmtsmo37738538.format([smo377385v0], 349);
const stavesmo377385 = new VF.Stave(46, 1233.3846153846155, 432);
stavesmo377385.setAttribute('id', 'stavesmo377385');
stavesmo377385.setBegBarType(1);
stavesmo377385.addClef('treble');
const keysmo377385 = new VF.KeySignature('G');
keysmo377385.addToStave(stavesmo377385);
stavesmo377385.setContext(context);
stavesmo377385.draw();
smo377385v0.draw(context, stavesmo377385);
smo377910.setContext(context);
smo377910.draw();
smo377911.setContext(context);
smo377911.draw();
smo377912.setContext(context);
smo377912.draw();
smo377913.setContext(context);
smo377913.draw();
const fmtsmo37740839 = new VF.Formatter();
//
// voices and notes for stave 0 39
const smo377408v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377408v0ar = [];
const smo377386 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377386'] = smo377386;
smo377386.setAttribute('id', 'smo377386');
const smo377387 = new VF.ChordSymbol();
smo377387.setAttribute('id', 'smo377387');
smo377387.addGlyphOrText('F', JSON.parse('{"text":"F","symbolModifier":1,"symbolType":2}'));
smo377387.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377387.setFont('Petaluma Script', 14).setReportWidth(false);
smo377386.addModifier(smo377387, 0);
smo377408v0ar.push(smo377386);
const smo377388 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377388'] = smo377388;
smo377388.setAttribute('id', 'smo377388');
smo377408v0ar.push(smo377388);
const smo377389 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377389'] = smo377389;
smo377389.setAttribute('id', 'smo377389');
const smo377390 = new VF.ChordSymbol();
smo377390.setAttribute('id', 'smo377390');
smo377390.addGlyphOrText('Bb', JSON.parse('{"text":"Bb","symbolModifier":1,"symbolType":2}'));
smo377390.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377390.setFont('Petaluma Script', 14).setReportWidth(false);
smo377389.addModifier(smo377390, 0);
smo377408v0ar.push(smo377389);
const smo377391 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo377391'] = smo377391;
smo377391.setAttribute('id', 'smo377391');
smo377408v0ar.push(smo377391);
const smo377392 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377392'] = smo377392;
smo377392.setAttribute('id', 'smo377392');
smo377408v0ar.push(smo377392);
const smo377393 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["fn/5/n"]}'))
noteHash['smo377393'] = smo377393;
smo377393.setAttribute('id', 'smo377393');
const smo3773930acc = new VF.Accidental('n');
smo377393.addModifier(smo3773930acc, 0);
smo377408v0ar.push(smo377393);
const smo377394 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377394'] = smo377394;
smo377394.setAttribute('id', 'smo377394');
const smo3773940acc = new VF.Accidental('b');
smo377394.addModifier(smo3773940acc, 0);
smo377408v0ar.push(smo377394);
smo377408v0.addTickables(smo377408v0ar)
fmtsmo37740839.joinVoices([smo377408v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377916 = smo377389.getStemDirection();
smo377389.setStemDirection(dirsmo377916);
smo377391.setStemDirection(dirsmo377916);
smo377392.setStemDirection(dirsmo377916);
const smo377916 = new VF.Beam([smo377389,smo377391,smo377392]);
const dirsmo377917 = smo377393.getStemDirection();
smo377393.setStemDirection(dirsmo377917);
smo377394.setStemDirection(dirsmo377917);
const smo377917 = new VF.Beam([smo377393,smo377394]);
 
// formatting measures in staff group smo377540
fmtsmo37740839.format([smo377408v0], 240);
const stavesmo377408 = new VF.Stave(478, 1233.3846153846155, 254);
stavesmo377408.setAttribute('id', 'stavesmo377408');
stavesmo377408.setBegBarType(VF.Barline.type.NONE);
stavesmo377408.setContext(context);
stavesmo377408.draw();
smo377408v0.draw(context, stavesmo377408);
smo377916.setContext(context);
smo377916.draw();
smo377917.setContext(context);
smo377917.draw();
const fmtsmo37743840 = new VF.Formatter();
//
// voices and notes for stave 0 40
const smo377438v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377438v0ar = [];
const smo377409 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377409'] = smo377409;
smo377409.setAttribute('id', 'smo377409');
const smo377410 = new VF.ChordSymbol();
smo377410.setAttribute('id', 'smo377410');
smo377410.addGlyphOrText('Eb', JSON.parse('{"text":"Eb","symbolModifier":1,"symbolType":2}'));
smo377410.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377410.setFont('Petaluma Script', 14).setReportWidth(false);
smo377409.addModifier(smo377410, 0);
smo377438v0ar.push(smo377409);
const smo377411 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377411'] = smo377411;
smo377411.setAttribute('id', 'smo377411');
smo377438v0ar.push(smo377411);
const smo377412 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["db/5/n"]}'))
noteHash['smo377412'] = smo377412;
smo377412.setAttribute('id', 'smo377412');
const smo3774120acc = new VF.Accidental('b');
smo377412.addModifier(smo3774120acc, 0);
smo377438v0ar.push(smo377412);
const smo377413 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377413'] = smo377413;
smo377413.setAttribute('id', 'smo377413');
const smo3774130acc = new VF.Accidental('n');
smo377413.addModifier(smo3774130acc, 0);
smo377438v0ar.push(smo377413);
const smo377414 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/5/n"]}'))
noteHash['smo377414'] = smo377414;
smo377414.setAttribute('id', 'smo377414');
smo377438v0ar.push(smo377414);
const smo377415 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gb/5/n"]}'))
noteHash['smo377415'] = smo377415;
smo377415.setAttribute('id', 'smo377415');
const smo3774150acc = new VF.Accidental('b');
smo377415.addModifier(smo3774150acc, 0);
const smo377416 = new VF.ChordSymbol();
smo377416.setAttribute('id', 'smo377416');
smo377416.addGlyphOrText('D', JSON.parse('{"text":"D","symbolModifier":1,"symbolType":2}'));
smo377416.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377416.setFont('Petaluma Script', 14).setReportWidth(false);
smo377415.addModifier(smo377416, 0);
smo377438v0ar.push(smo377415);
const smo377417 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["ab/5/n"]}'))
noteHash['smo377417'] = smo377417;
smo377417.setAttribute('id', 'smo377417');
const smo3774170acc = new VF.Accidental('b');
smo377417.addModifier(smo3774170acc, 0);
smo377438v0ar.push(smo377417);
const smo377418 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377418'] = smo377418;
smo377418.setAttribute('id', 'smo377418');
const smo3774180acc = new VF.Accidental('n');
smo377418.addModifier(smo3774180acc, 0);
smo377438v0ar.push(smo377418);
const smo377419 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"32","dots":0,"type":"n","auto_stem":true,"keys":["bb/5/n"]}'))
noteHash['smo377419'] = smo377419;
smo377419.setAttribute('id', 'smo377419');
const smo3774190acc = new VF.Accidental('b');
smo377419.addModifier(smo3774190acc, 0);
smo377438v0ar.push(smo377419);
const smo377420 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377420'] = smo377420;
smo377420.setAttribute('id', 'smo377420');
smo377438v0ar.push(smo377420);
const smo377421 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377421'] = smo377421;
smo377421.setAttribute('id', 'smo377421');
smo377438v0ar.push(smo377421);
const smo377422 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["f#/5/n"]}'))
noteHash['smo377422'] = smo377422;
smo377422.setAttribute('id', 'smo377422');
smo377438v0ar.push(smo377422);
const smo377423 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377423'] = smo377423;
smo377423.setAttribute('id', 'smo377423');
const smo3774230acc = new VF.Accidental('n');
smo377423.addModifier(smo3774230acc, 0);
smo377438v0ar.push(smo377423);
const smo377424 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/5/n"]}'))
noteHash['smo377424'] = smo377424;
smo377424.setAttribute('id', 'smo377424');
smo377438v0ar.push(smo377424);
smo377438v0.addTickables(smo377438v0ar)
fmtsmo37743840.joinVoices([smo377438v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377920 = smo377411.getStemDirection();
smo377411.setStemDirection(dirsmo377920);
smo377412.setStemDirection(dirsmo377920);
smo377413.setStemDirection(dirsmo377920);
smo377414.setStemDirection(dirsmo377920);
const smo377920 = new VF.Beam([smo377411,smo377412,smo377413,smo377414]);
const dirsmo377921 = smo377415.getStemDirection();
smo377415.setStemDirection(dirsmo377921);
smo377417.setStemDirection(dirsmo377921);
smo377418.setStemDirection(dirsmo377921);
smo377419.setStemDirection(dirsmo377921);
smo377420.setStemDirection(dirsmo377921);
const smo377921 = new VF.Beam([smo377415,smo377417,smo377418,smo377419,smo377420]);
const dirsmo377922 = smo377421.getStemDirection();
smo377421.setStemDirection(dirsmo377922);
smo377422.setStemDirection(dirsmo377922);
smo377423.setStemDirection(dirsmo377922);
smo377424.setStemDirection(dirsmo377922);
const smo377922 = new VF.Beam([smo377421,smo377422,smo377423,smo377424]);
 
// formatting measures in staff group smo377540
fmtsmo37743840.format([smo377438v0], 417);
const stavesmo377438 = new VF.Stave(732, 1233.3846153846155, 431);
stavesmo377438.setAttribute('id', 'stavesmo377438');
stavesmo377438.setBegBarType(VF.Barline.type.NONE);
stavesmo377438.setContext(context);
stavesmo377438.draw();
smo377438v0.draw(context, stavesmo377438);
smo377920.setContext(context);
smo377920.draw();
smo377921.setContext(context);
smo377921.draw();
smo377922.setContext(context);
smo377922.draw();
const fmtsmo37746841 = new VF.Formatter();
//
// voices and notes for stave 0 41
const smo377468v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377468v0ar = [];
const smo377439 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/5/n"]}'))
noteHash['smo377439'] = smo377439;
smo377439.setAttribute('id', 'smo377439');
const smo377440 = new VF.ChordSymbol();
smo377440.setAttribute('id', 'smo377440');
smo377440.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377440.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377440.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377440.setFont('Petaluma Script', 14).setReportWidth(false);
smo377439.addModifier(smo377440, 0);
smo377468v0ar.push(smo377439);
const smo377441 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/5/n"]}'))
noteHash['smo377441'] = smo377441;
smo377441.setAttribute('id', 'smo377441');
smo377468v0ar.push(smo377441);
const smo377442 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377442'] = smo377442;
smo377442.setAttribute('id', 'smo377442');
smo377468v0ar.push(smo377442);
const smo377443 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377443'] = smo377443;
smo377443.setAttribute('id', 'smo377443');
const smo3774430acc = new VF.Accidental('b');
smo377443.addModifier(smo3774430acc, 0);
smo377468v0ar.push(smo377443);
const smo377444 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377444'] = smo377444;
smo377444.setAttribute('id', 'smo377444');
smo377468v0ar.push(smo377444);
const smo377445 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/4/n"]}'))
noteHash['smo377445'] = smo377445;
smo377445.setAttribute('id', 'smo377445');
smo377468v0ar.push(smo377445);
const smo377446 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377446'] = smo377446;
smo377446.setAttribute('id', 'smo377446');
smo377468v0ar.push(smo377446);
const smo377447 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377447'] = smo377447;
smo377447.setAttribute('id', 'smo377447');
smo377468v0ar.push(smo377447);
const smo377448 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377448'] = smo377448;
smo377448.setAttribute('id', 'smo377448');
smo377468v0ar.push(smo377448);
const smo377449 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/5/n"]}'))
noteHash['smo377449'] = smo377449;
smo377449.setAttribute('id', 'smo377449');
const smo377451 = new VF.Ornament('scoop');
smo377449.addModifier(smo377451, 0);
const smo377450 = new VF.ChordSymbol();
smo377450.setAttribute('id', 'smo377450');
smo377450.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo377450.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377450.setFont('Petaluma Script', 14).setReportWidth(false);
smo377449.addModifier(smo377450, 0);
smo377468v0ar.push(smo377449);
const smo377452 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377452'] = smo377452;
smo377452.setAttribute('id', 'smo377452');
smo377468v0ar.push(smo377452);
const smo377453 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo377453'] = smo377453;
smo377453.setAttribute('id', 'smo377453');
smo377468v0ar.push(smo377453);
smo377468v0.addTickables(smo377468v0ar)
fmtsmo37746841.joinVoices([smo377468v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377930 = smo377439.getStemDirection();
smo377439.setStemDirection(dirsmo377930);
smo377441.setStemDirection(dirsmo377930);
smo377442.setStemDirection(dirsmo377930);
smo377443.setStemDirection(dirsmo377930);
const smo377930 = new VF.Beam([smo377439,smo377441,smo377442,smo377443]);
const dirsmo377931 = smo377444.getStemDirection();
smo377444.setStemDirection(dirsmo377931);
smo377445.setStemDirection(dirsmo377931);
smo377446.setStemDirection(dirsmo377931);
smo377447.setStemDirection(dirsmo377931);
smo377448.setStemDirection(dirsmo377931);
const smo377931 = new VF.Beam([smo377444,smo377445,smo377446,smo377447,smo377448]);
const dirsmo377932 = smo377449.getStemDirection();
smo377449.setStemDirection(dirsmo377932);
smo377452.setStemDirection(dirsmo377932);
const smo377932 = new VF.Beam([smo377449,smo377452]);
const smo377454 = new VF.Tuplet([smo377444,smo377445,smo377446], JSON.parse('{"num_notes":3,"notes_occupied":2,"ratioed":false,"bracketed":true,"location":1}'));
 
// formatting measures in staff group smo377540
fmtsmo37746841.format([smo377468v0], 294);
const stavesmo377468 = new VF.Stave(46, 1379.3846153846155, 377);
stavesmo377468.setAttribute('id', 'stavesmo377468');
stavesmo377468.setBegBarType(1);
stavesmo377468.addClef('treble');
const keysmo377468 = new VF.KeySignature('G');
keysmo377468.addToStave(stavesmo377468);
stavesmo377468.setContext(context);
stavesmo377468.draw();
smo377468v0.draw(context, stavesmo377468);
smo377930.setContext(context);
smo377930.draw();
smo377931.setContext(context);
smo377931.draw();
smo377932.setContext(context);
smo377932.draw();
smo377454.setContext(context).draw();
const fmtsmo37749842 = new VF.Formatter();
//
// voices and notes for stave 0 42
const smo377498v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377498v0ar = [];
const smo377469 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377469'] = smo377469;
smo377469.setAttribute('id', 'smo377469');
smo377498v0ar.push(smo377469);
const smo377470 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["dn/4/n"]}'))
noteHash['smo377470'] = smo377470;
smo377470.setAttribute('id', 'smo377470');
const smo377471 = new VF.ChordSymbol();
smo377471.setAttribute('id', 'smo377471');
smo377471.addGlyphOrText('G', JSON.parse('{"text":"G","symbolModifier":1,"symbolType":2}'));
smo377471.addGlyphOrText('-', JSON.parse('{"text":"-","symbolModifier":3,"symbolType":2}'));
smo377471.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377471.setFont('Petaluma Script', 14).setReportWidth(false);
smo377470.addModifier(smo377471, 0);
smo377498v0ar.push(smo377470);
const smo377472 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377472'] = smo377472;
smo377472.setAttribute('id', 'smo377472');
smo377498v0ar.push(smo377472);
const smo377473 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["bb/3/n"]}'))
noteHash['smo377473'] = smo377473;
smo377473.setAttribute('id', 'smo377473');
const smo3774730acc = new VF.Accidental('b');
smo377473.addModifier(smo3774730acc, 0);
smo377498v0ar.push(smo377473);
const smo377474 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo377474'] = smo377474;
smo377474.setAttribute('id', 'smo377474');
smo377498v0ar.push(smo377474);
const smo377475 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo377475'] = smo377475;
smo377475.setAttribute('id', 'smo377475');
smo377498v0ar.push(smo377475);
const smo377476 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["an/3/n"]}'))
noteHash['smo377476'] = smo377476;
smo377476.setAttribute('id', 'smo377476');
smo377498v0ar.push(smo377476);
const smo377477 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/3/n"]}'))
noteHash['smo377477'] = smo377477;
smo377477.setAttribute('id', 'smo377477');
smo377498v0ar.push(smo377477);
const smo377478 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["cn/4/n"]}'))
noteHash['smo377478'] = smo377478;
smo377478.setAttribute('id', 'smo377478');
const smo377479 = new VF.ChordSymbol();
smo377479.setAttribute('id', 'smo377479');
smo377479.addGlyphOrText('C', JSON.parse('{"text":"C","symbolModifier":1,"symbolType":2}'));
smo377479.addGlyphOrText('7', JSON.parse('{"text":"7","symbolModifier":3,"symbolType":2}'));
smo377479.setFont('Petaluma Script', 14).setReportWidth(false);
smo377478.addModifier(smo377479, 0);
smo377498v0ar.push(smo377478);
const smo377480 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo377480'] = smo377480;
smo377480.setAttribute('id', 'smo377480');
smo377498v0ar.push(smo377480);
const smo377481 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377481'] = smo377481;
smo377481.setAttribute('id', 'smo377481');
smo377498v0ar.push(smo377481);
const smo377482 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"r","auto_stem":true,"keys":["en/4/r"]}'))
noteHash['smo377482'] = smo377482;
smo377482.setAttribute('id', 'smo377482');
smo377498v0ar.push(smo377482);
const smo377483 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"8","dots":0,"type":"n","auto_stem":true,"keys":["an/4/n"]}'))
noteHash['smo377483'] = smo377483;
smo377483.setAttribute('id', 'smo377483');
smo377498v0ar.push(smo377483);
const smo377484 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"16","dots":0,"type":"n","auto_stem":true,"keys":["en/4/n"]}'))
noteHash['smo377484'] = smo377484;
smo377484.setAttribute('id', 'smo377484');
smo377498v0ar.push(smo377484);
smo377498v0.addTickables(smo377498v0ar)
fmtsmo37749842.joinVoices([smo377498v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
const dirsmo377935 = smo377474.getStemDirection();
smo377474.setStemDirection(dirsmo377935);
smo377475.setStemDirection(dirsmo377935);
smo377476.setStemDirection(dirsmo377935);
smo377477.setStemDirection(dirsmo377935);
const smo377935 = new VF.Beam([smo377474,smo377475,smo377476,smo377477]);
const dirsmo377936 = smo377478.getStemDirection();
smo377478.setStemDirection(dirsmo377936);
smo377480.setStemDirection(dirsmo377936);
smo377481.setStemDirection(dirsmo377936);
const smo377936 = new VF.Beam([smo377478,smo377480,smo377481]);
 
// formatting measures in staff group smo377540
fmtsmo37749842.format([smo377498v0], 310);
const stavesmo377498 = new VF.Stave(423, 1379.3846153846155, 325);
stavesmo377498.setAttribute('id', 'stavesmo377498');
stavesmo377498.setBegBarType(VF.Barline.type.NONE);
stavesmo377498.setEndBarType(2);
stavesmo377498.setContext(context);
stavesmo377498.draw();
smo377498v0.draw(context, stavesmo377498);
smo377935.setContext(context);
smo377935.draw();
smo377936.setContext(context);
smo377936.draw();
const fmtsmo37751643 = new VF.Formatter();
//
// voices and notes for stave 0 43
const smo377516v0 = new VF.Voice(JSON.parse('{"num_beats":4,"beat_value":4}')).setMode(VF.Voice.Mode.SOFT);
const smo377516v0ar = [];
const smo377499 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"n","auto_stem":true,"keys":["gn/4/n"]}'))
noteHash['smo377499'] = smo377499;
smo377499.setAttribute('id', 'smo377499');
smo377516v0ar.push(smo377499);
const smo377500 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377500'] = smo377500;
smo377500.setAttribute('id', 'smo377500');
smo377516v0ar.push(smo377500);
const smo377501 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377501'] = smo377501;
smo377501.setAttribute('id', 'smo377501');
smo377516v0ar.push(smo377501);
const smo377502 = new VF.StaveNote(JSON.parse('{"clef":"treble","duration":"4","dots":0,"type":"r","auto_stem":true,"keys":["bn/4/r"]}'))
noteHash['smo377502'] = smo377502;
smo377502.setAttribute('id', 'smo377502');
smo377516v0ar.push(smo377502);
smo377516v0.addTickables(smo377516v0ar)
fmtsmo37751643.joinVoices([smo377516v0]);
// create beam groups and tuplets for format grp smo377540 before formatting
 
// formatting measures in staff group smo377540
fmtsmo37751643.format([smo377516v0], 194);
const stavesmo377516 = new VF.Stave(748, 1379.3846153846155, 208);
stavesmo377516.setAttribute('id', 'stavesmo377516');
stavesmo377516.setBegBarType(VF.Barline.type.NONE);
stavesmo377516.setContext(context);
stavesmo377516.draw();
smo377516v0.draw(context, stavesmo377516);
const smo378078 = new VF.Curve(smo377298, smo377299, JSON.parse('{"thickness":2,"x_shift":0,"y_shift":0,"cps":[{"x":0,"y":15},{"x":0,"y":15}],"invert":false,"position":4,"position_end":2}'));
smo378078.setContext(context).draw();
const smo378079 = new VF.StaveTie({ first_note: smo377296, last_note: smo377297, 
          firstNote: smo377296, lastNote: smo377297, first_indices: [0], last_indices: [0]});
smo378079.setContext(context).draw();
const smo378080 = new VF.StaveTie({ first_note: smo376961, last_note: smo376964, 
          firstNote: smo376961, lastNote: smo376964, first_indices: [0], last_indices: [0]});
smo378080.setContext(context).draw();
const smo378081 = new VF.StaveTie({ first_note: smo376967, last_note: smo376968, 
          firstNote: smo376967, lastNote: smo376968, first_indices: [0], last_indices: [0]});
smo378081.setContext(context).draw();
const smo378082 = new VF.StaveTie({ first_note: smo376999, last_note: smo377000, 
          firstNote: smo376999, lastNote: smo377000, first_indices: [0], last_indices: [0]});
smo378082.setContext(context).draw();
const smo378083 = new VF.StaveTie({ first_note: smo377085, last_note: smo377086, 
          firstNote: smo377085, lastNote: smo377086, first_indices: [0], last_indices: [0]});
smo378083.setContext(context).draw();
}